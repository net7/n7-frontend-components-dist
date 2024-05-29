/* eslint-disable no-use-before-define */
//---------------------------
// HISTOGRAM-RANGE.ts
//---------------------------
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class HistogramRangeComponent {
    constructor() {
        this.sliders = [];
        this._loaded = false;
        this.draw = () => {
            const { d3 } = this;
            const { width, margin, height, items, colours, containerId, axis, setSliders } = this.data;
            // data validation
            const rangeMode = items.every((d) => d.range);
            if (!rangeMode && items.some((d) => !d.range)) {
                throw Error('All items must have the "range" property');
            }
            // Helpers - Start:
            const LABELtoX = d3
                .scaleBand()
                .domain(items.map((d) => d.label))
                .range([0, width])
                .paddingInner(0.17)
                .paddingOuter(1);
            const XtoLABEL = (value) => {
                const domain = LABELtoX.domain();
                const paddingOuter = LABELtoX(domain[0]);
                const eachBand = LABELtoX.step();
                const index = Math.floor(((value - paddingOuter) / eachBand));
                return domain[Math.max(0, Math.min(index, domain.length - 1))];
            };
            // YEAR SELECTION CIRCLES
            // let sliders;
            if (setSliders && this.sliders) {
                this.sliders = setSliders
                    .map((d) => ({ x: LABELtoX(d) + LABELtoX.bandwidth() / 2, y: height }));
            }
            else {
                this.sliders = d3
                    .extent(items, (d) => d.label)
                    .map((d) => ({ x: LABELtoX(d) + LABELtoX.bandwidth() / 2, y: height }));
            }
            const isInRange = (y) => {
                const allItems = this.sliders.map((d) => XtoLABEL(d.x));
                if (y >= d3.min(allItems) && y <= d3.max(allItems))
                    return true;
                return false;
            };
            function colourBars(d) {
                if (isInRange(d.label))
                    return 'url(#gradient)';
                return '#e3e3e3';
            }
            this.colourBars = colourBars;
            this.getSelectedRange = () => {
                const rangeStart = items.find((it) => it.label === XtoLABEL(this.sliders[0].x));
                const rangeEnd = items.find((it) => it.label === XtoLABEL(this.sliders[1].x));
                return [
                    rangeStart.payload,
                    rangeMode
                        ? rangeEnd.range.payload
                        : rangeEnd.payload
                ];
            };
            // Helpers - End.
            // clear HTML contents
            document.getElementById(containerId).innerHTML = '';
            const svg = d3
                .select(`#${containerId}`)
                .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`);
            this.svg = svg;
            const scaleHeight = d3
                .scaleSymlog() // most similar scale to the original
                .domain([0, d3.max(items, (d) => d.value)])
                .range([height, 0]);
            // GRADIENT
            const defs = svg.append('defs'); // definitions
            const gradient = defs
                .append('linearGradient')
                .attr('id', 'gradient')
                .attr('gradientUnits', 'userSpaceOnUse')
                .attr('x1', 0)
                .attr('y1', height)
                .attr('x2', 0)
                .attr('y2', margin.top);
            gradient
                .append('stop')
                .attr('class', 'start')
                .attr('offset', '0%')
                .attr('stop-color', colours.bottom) // bottom gradient
                .attr('stop-opacity', 1);
            gradient
                .append('stop')
                .attr('class', 'end')
                .attr('offset', '100%')
                .attr('stop-color', colours.top) // top gradient
                .attr('stop-opacity', 1);
            // DRAW INSIDE MARGINS
            const g = svg
                .append('g')
                .attr('class', 'chart')
                .attr('transform', `translate(${margin.left},${margin.top})`);
            const barsLayer = g.append('g').attr('class', 'bars');
            const controlsLayer = g.append('g').attr('class', 'controls');
            // BAR CHART
            barsLayer // bars
                .selectAll('rect.bars')
                .data(items)
                .join('rect')
                .attr('class', 'bars')
                .attr('width', LABELtoX.bandwidth)
                .attr('height', (d) => height - scaleHeight(d.value))
                .attr('y', (d) => scaleHeight(d.value))
                .attr('x', (d) => LABELtoX(d.label))
                .attr('data-start', (d) => d.payload) // make the data easily accessible
                .attr('data-end', (d) => (d.range ? d.range.payload : d.payload))
                .attr('fill', 'url(#gradient)');
            barsLayer // catch bar events
                .on('mousemove', (event) => {
                const year = XtoLABEL(this.getEventCoords(event).x);
                d3.selectAll('rect.bars').attr('fill', (d) => {
                    if (year === d.label)
                        return '#B0CCF8';
                    return colourBars(d);
                });
            })
                .on('mouseout', () => {
                d3.selectAll('rect.bars').attr('fill', (d) => colourBars(d));
            })
                .on('click', (event) => {
                const label = XtoLABEL(this.getEventCoords(event).x);
                const xAxisValue = LABELtoX(label) + LABELtoX.bandwidth() / 2;
                const newValue = {
                    x: xAxisValue,
                    y: height
                };
                this.sliders = [
                    // avoid joining the two objects!
                    { ...newValue },
                    { ...newValue }
                ];
                rangePicker
                    .data(this.sliders)
                    .select('circle')
                    .transition()
                    .ease(d3.easeQuadOut)
                    .duration(550)
                    .attr('cx', (d) => d.x);
                controlsLayer
                    .select('path.blueline')
                    .transition()
                    .ease(d3.easeQuadOut)
                    .duration(550)
                    .attr('d', d3.line()(this.sliders.map((d) => [d.x, d.y])));
                controlsLayer
                    .selectAll('text')
                    .transition()
                    .ease(d3.easeQuadOut)
                    .duration(550)
                    .attr('x', () => xAxisValue)
                    .text((d, i) => {
                    if (!rangeMode)
                        return label;
                    const item = items.find((it) => it.label === label);
                    if (i > 0)
                        return item.range.label;
                    return item.label;
                });
                g.selectAll('rect.bars').attr('fill', (d) => colourBars(d));
                this.textCollision(this.sliders);
                this.emit('rangeselected', this.getSelectedRange());
            });
            controlsLayer // gray line
                .append('path')
                .attr('class', 'grayline')
                .attr('d', d3.line()([
                [0, height],
                [width, height]
            ]))
                .attr('stroke-width', 2)
                .attr('opacity', 1)
                .attr('stroke', '#C1C5C7');
            controlsLayer // blue line
                .append('path')
                .attr('class', 'blueline')
                .attr('d', d3.line()(this.sliders.map((d) => [d.x, d.y])))
                .attr('stroke-width', 2)
                .attr('stroke', colours.accent);
            const rangePicker = controlsLayer
                .selectAll('g.rangepicker')
                .data(this.sliders.sort((a, b) => d3.ascending(a.x, b.x)))
                .join('g')
                .attr('class', 'rangepicker');
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const self = this; // FIXME: Allow use of class "this" inside dragging update;
            /**
           * Animate the elements while the user is dragging one of the range selectors
           */
            function draggingUpdate(event, data) {
                const label = XtoLABEL(event.x);
                const xAxisValue = LABELtoX(label) + LABELtoX.bandwidth() / 2;
                const yb = [];
                g.selectAll('circle').each(function setBallPosition() {
                    yb.push({ x: +d3.select(this).attr('cx'), y: height });
                });
                self.sliders = yb.sort((a, b) => d3.ascending(a.x, b.x));
                // move the circle
                d3.select(this)
                    .select('circle')
                    .attr('cx', data.x = xAxisValue);
                // move the blue line
                controlsLayer
                    .select('path.blueline')
                    .attr('d', d3.line()(self.sliders.map((d) => [d.x, d.y])));
                // change the text position
                d3.select(this)
                    .select('text')
                    .attr('x', () => xAxisValue);
                // change the text values
                controlsLayer
                    .selectAll('text')
                    .text((d) => {
                    const l = XtoLABEL(d.x);
                    if (!rangeMode)
                        return l;
                    const position = self.sliders.findIndex((slider) => slider.x === d.x);
                    const range = self.getSelectedRange();
                    if (position === 1)
                        return range[1];
                    return range[0];
                });
                self.textCollision(self.sliders);
                // colour the bars
                g.selectAll('rect.bars').attr('fill', (d) => colourBars(d));
            }
            rangePicker // drag handler
                .call(d3.drag()
                .on('drag', draggingUpdate)
                .on('end', (event, data) => {
                // update one last time to prevent desyncing
                draggingUpdate(event, data);
                // emit the selected range
                this.emit('rangeselected', this.getSelectedRange());
            }));
            rangePicker
                .append('circle')
                .attr('cx', (d) => d.x)
                .attr('cy', (d) => d.y)
                .attr('r', 9)
                .attr('fill', 'white')
                .attr('stroke-width', 2)
                .attr('stroke', colours.accent)
                .attr('style', 'cursor: pointer');
            rangePicker
                .attr('text-anchor', 'middle')
                .attr('font-family', 'Roboto, Arial, sans-serif')
                .attr('font-size', '12px')
                .append('text')
                .attr('y', (d) => d.y + margin.bottom / 2)
                .attr('x', (d) => d.x)
                .attr('fill', colours.accent)
                .text((d, i) => {
                const l = XtoLABEL(d.x);
                if (rangeMode && i === 1) {
                    return items.find((item) => item.label === l).range.label;
                }
                return l;
            });
            if (axis?.yAxis?.show) {
                const yAxis = d3.axisLeft(scaleHeight)
                    .ticks(axis.yAxis.tickAmount ?? 2)
                    .tickValues(axis.yAxis.values ? axis.yAxis.values : null);
                const yAxisGroup = svg.append('g')
                    .attr('transform', `translate(${margin.left}, ${margin.top})`)
                    .call(yAxis);
                yAxisGroup.selectAll('path, line').style('stroke', colours.accent);
                yAxisGroup.selectAll('text').style('fill', colours.accent);
            }
        };
        /** Avoid collision of the slider labels */
        this.textCollision = (sliders) => {
            // pre-requisites
            const controlsLayer = this.d3.select('g.chart').select('g.controls');
            const { items, margin } = this.data;
            const rangeMode = items.every((d) => d.range);
            // run collision detection
            const isColliding = sliders[0].x === sliders[1].x;
            if (rangeMode && isColliding) {
                controlsLayer
                    .selectAll('text')
                    .attr('y', (d, i) => (i > 0 ? d.y + margin.bottom / 2 + 12 : d.y + margin.bottom / 2))
                    .text((d, i) => {
                    const range = this.getSelectedRange();
                    return range[i];
                });
            }
            else {
                controlsLayer
                    .selectAll('text')
                    .attr('y', (d) => d.y + margin.bottom / 2);
            }
        };
        /** Public api that allows to dinamically change the bars */
        this.setBars = (newBars) => {
            this.data.items = newBars;
            this.draw();
            this.d3.selectAll('rect.bars').attr('fill', (d) => this.colourBars(d));
        };
        /** Public api that allows to dinamically change the slider position */
        this.setSliders = ([startLabel, endLabel], emit = true) => {
            // setSliders([1450, 1575])
            this.data.setSliders = [`${startLabel}`, `${endLabel}`];
            this.draw();
            this.d3.selectAll('rect.bars').attr('fill', (d) => this.colourBars(d));
            const range = this.getSelectedRange();
            if (emit)
                this.emit('rangeselected', range);
            this.textCollision(this.sliders);
            return range;
        };
    }
    ngAfterContentChecked() {
        /*
             Waits for the dom to be loaded, then fires the draw function
             that renders the chart.
        */
        if (this.data) {
            if (this._loaded)
                return;
            this._loaded = true;
            setTimeout(() => {
                import('d3').then((module) => {
                    this.d3 = module;
                    this.draw();
                    this.emitLoaded(true);
                    if (this.data && this.data.setDraw) {
                        this.data.setDraw(this.draw);
                    }
                    if (this.data.setApi) { // expose the component api
                        this.data.setApi({
                            setSliders: this.setSliders,
                            setBars: this.setBars,
                        });
                    }
                    // eslint-disable-next-line dot-notation
                    // window['setSliders'] = this.setSliders;
                });
            });
        }
    }
    /** Get x-axis position from label */
    labelToX() {
        return this.d3
            .scaleBand()
            .domain(this.data.items.map((d) => d.label))
            .range([0, this.data.width])
            .paddingInner(0.17)
            .paddingOuter(1);
    }
    /**
     * Get an event with viewBox coordinates and
     * parse them in absolute coordinates
     */
    getEventCoords(event) {
        const m = event.target.getScreenCTM();
        const point = this.svg.node().createSVGPoint();
        point.x = event.clientX;
        point.y = event.clientY;
        return point.matrixTransform(m.inverse());
    }
    /** Emits an event when the component has loaded */
    emitLoaded(payload) {
        if (!this.emit)
            return;
        this.emit('loaded', payload);
    }
}
HistogramRangeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: HistogramRangeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HistogramRangeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: HistogramRangeComponent, selector: "n7-histogram-range", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-histogram-range\">\n    <svg #histogramRange [id]=\"data.containerId\"></svg>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: HistogramRangeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-histogram-range', template: "<div *ngIf=\"data\" class=\"n7-histogram-range\">\n    <svg #histogramRange [id]=\"data.containerId\"></svg>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9ncmFtLXJhbmdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZHYtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2hpc3RvZ3JhbS1yYW5nZS9oaXN0b2dyYW0tcmFuZ2UudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvaGlzdG9ncmFtLXJhbmdlL2hpc3RvZ3JhbS1yYW5nZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlDQUF5QztBQUN6Qyw2QkFBNkI7QUFDN0IscUJBQXFCO0FBQ3JCLDZCQUE2QjtBQUU3QixPQUFPLEVBQXVCLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQTJGdEUsTUFBTSxPQUFPLHVCQUF1QjtJQUpwQztRQVdVLFlBQU8sR0FBWSxFQUFFLENBQUM7UUFLdEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQW1DeEIsU0FBSSxHQUFHLEdBQUcsRUFBRTtZQUNWLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDcEIsTUFBTSxFQUNKLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUNyQixLQUFLLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFDM0IsSUFBSSxFQUFFLFVBQVUsRUFDakIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBRWQsa0JBQWtCO1lBQ2xCLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUM3QyxNQUFNLEtBQUssQ0FBQyww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QUFJLENBQUM7YUFDbEIsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxjQUFjLENBQUMsS0FBSztRQUNsQixNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDL0MsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUN4QixPQUFPLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQXFCRCxtREFBbUQ7SUFDbkQsVUFBVSxDQUFDLE9BQU87UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDOztvSEF2WlUsdUJBQXVCO3dHQUF2Qix1QkFBdUIsa0dDaEdwQyx3SEFHQTsyRkQ2RmEsdUJBQXVCO2tCQUpuQyxTQUFTOytCQUNFLG9CQUFvQjs4QkFJckIsSUFBSTtzQkFBWixLQUFLO2dCQUVHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSElTVE9HUkFNLVJBTkdFLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBBZnRlckNvbnRlbnRDaGVja2VkLCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vKipcbiAqIEludGVyZmFjZSBmb3IgSGlzdG9ncmFtUmFuZ2VDb21wb25lbnQncyBcImRhdGFcIlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEhpc3RvZ3JhbVJhbmdlRGF0YSB7XG4gIC8qKlxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGhpc3RvZ3JhbS1yYW5nZSBzdmdcbiAgICovXG4gIGNvbnRhaW5lcklkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0b3RhbCB3aWR0aCBmb3IgdGhlIHN2ZyBlbGVtZW50XG4gICAqL1xuICB3aWR0aDogbnVtYmVyO1xuICAvKipcbiAgICogdG90YWwgaGVpZ2h0IGZvciB0aGUgc3ZnIGVsZW1lbnRcbiAgICovXG4gIGhlaWdodDogbnVtYmVyO1xuICAvKipcbiAgICogSW50ZXJuYWwgbWFyZ2lucyBvZiB0aGUgc3ZnXG4gICAqL1xuICBtYXJnaW46IHtcbiAgICBsZWZ0OiBudW1iZXI7XG4gICAgcmlnaHQ6IG51bWJlcjtcbiAgICB0b3A6IG51bWJlcjtcbiAgICBib3R0b206IG51bWJlcjtcbiAgfTtcbiAgLyoqXG4gICAqIFRoZW1lIG9mIHRoZSBoaXN0b2dyYW1cbiAgICovXG4gIGNvbG91cnM6IHtcbiAgICB0b3A6IHN0cmluZztcbiAgICBib3R0b206IHN0cmluZztcbiAgICBhY2NlbnQ6IHN0cmluZztcbiAgfTtcbiAgLyoqXG4gICAqIERhdGEgZm9yIHRoZSBoaXN0b2dyYW0gYmFyc1xuICAgKi9cbiAgaXRlbXM6IHtcbiAgICAvKiogZGVmYXVsdCBsYWJlbCBvZiB0aGUgaXRlbSAqL1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgLyoqIHktYXhpcyB2YWx1ZSBvZiB0aGUgYmFyIChoZWlnaHQpICovXG4gICAgdmFsdWU6IG51bWJlcjtcbiAgICAvKiogcGF5bG9hZCB0aGF0IHRoZSBpdGVtIHNob3VsZCBlbWl0IHdoZW4gc2VsZWN0ZWQgKi9cbiAgICBwYXlsb2FkOiBhbnk7XG4gICAgLyoqXG4gICAgICogJ3VwcGVyJyB2YWx1ZXMgb2YgdGhlIHJhbmdlLlxuICAgICAqIG9ubHkgdXNlZCB3aGVuIGVhY2ggYmFyIHJlcHJlc2VudHMgYSByYW5nZS5cbiAgICAgKi9cbiAgICByYW5nZT86IHtcbiAgICAgIC8qKiBsYWJlbCBsb2FkZWQgd2hlbiBzZWxlY3RlZCBieSB0aGUgcmlnaHQtbW9zdCBwb2ludGVyICovXG4gICAgICBsYWJlbDogc3RyaW5nO1xuICAgICAgLyoqIHBheWxvYWQgZW1pdHRlZCB3aGVuIHNlbGVjdGVkIGJ5IHRoZSByaWdodC1tb3N0IHBvaW50ZXIgKi9cbiAgICAgIHBheWxvYWQ6IGFueTtcbiAgICB9O1xuICB9W107XG4gIC8qKlxuICAgKiBBeGlzIHNldHRpbmdzXG4gICAqL1xuICBheGlzPzoge1xuICAgIC8qKiBZIEF4aXMgc2V0dGluZ3MgKi9cbiAgICB5QXhpcz86IHtcbiAgICAgIC8qKiBUdXJuIG9uIGFuZCBvZmYgdGhlIGF4aXMgKi9cbiAgICAgIHNob3c/OiBib29sZWFuO1xuICAgICAgLyoqIE1hbnVhbGx5IHNldCB0aGUgYXhpcyB2YWx1ZXMgdG8gc2hvdyAqL1xuICAgICAgdmFsdWVzPzogbnVtYmVyW107XG4gICAgICAvKiogSG93IG1hbnkgdGlja3MgZG8geW91IHdhbnQgdG8gc2VlICovXG4gICAgICB0aWNrQW1vdW50PzogbnVtYmVyO1xuICAgIH07XG4gIH07XG4gIC8qKlxuICAgKiBleHBvc2UgdGhlIGRyYXcgZnVuY3Rpb24gb3V0c2lkZSBvZiBuNy1mcm9udGVuZC9jb21wb25lbnRzIGxpYnJhcnlcbiAgICogdGhpcyBpcyBuZWVkZWQgdG8gcmVkcmF3IGJ1YmJsZS1jaGFydC1jb21wb25lbnQgb24gY29tbWFuZFxuICAgKi9cbiAgc2V0RHJhdz86IGFueTtcbiAgLyoqXG4gICAqIHNldFNsaWRlcnNcbiAgICovXG4gIHNldFNsaWRlcnM/OiBMYWJlbENvdXBsZTtcbiAgLyoqXG4gICAqIFB1YmxpYyBhcGlcbiAgICovXG4gIHNldEFwaT86IGFueTtcbn1cblxudHlwZSBTbGlkZXJzID0geyB4OiBudW1iZXI7IHk6IG51bWJlciB9W107XG50eXBlIExhYmVsQ291cGxlID0gW3N0cmluZywgc3RyaW5nXTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctaGlzdG9ncmFtLXJhbmdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hpc3RvZ3JhbS1yYW5nZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBIaXN0b2dyYW1SYW5nZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuICBASW5wdXQoKSBkYXRhOiBIaXN0b2dyYW1SYW5nZURhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIHByaXZhdGUgZDM7XG5cbiAgcHJpdmF0ZSBzbGlkZXJzOiBTbGlkZXJzID0gW107XG5cbiAgLyoqIGQzIHNlbGVjdGlvbiBzdmcgcm9vdCAqL1xuICBwcml2YXRlIHN2ZztcblxuICBwcml2YXRlIF9sb2FkZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIGNvbG91ckJhcnM7XG5cbiAgcHJpdmF0ZSBnZXRTZWxlY3RlZFJhbmdlO1xuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICAvKlxuICAgICAgICAgV2FpdHMgZm9yIHRoZSBkb20gdG8gYmUgbG9hZGVkLCB0aGVuIGZpcmVzIHRoZSBkcmF3IGZ1bmN0aW9uXG4gICAgICAgICB0aGF0IHJlbmRlcnMgdGhlIGNoYXJ0LlxuICAgICovXG4gICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgaWYgKHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xuICAgICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpbXBvcnQoJ2QzJykudGhlbigobW9kdWxlKSA9PiB7XG4gICAgICAgICAgdGhpcy5kMyA9IG1vZHVsZTtcbiAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgICB0aGlzLmVtaXRMb2FkZWQodHJ1ZSk7XG4gICAgICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuc2V0RHJhdykge1xuICAgICAgICAgICAgdGhpcy5kYXRhLnNldERyYXcodGhpcy5kcmF3KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuZGF0YS5zZXRBcGkpIHsgLy8gZXhwb3NlIHRoZSBjb21wb25lbnQgYXBpXG4gICAgICAgICAgICB0aGlzLmRhdGEuc2V0QXBpKHtcbiAgICAgICAgICAgICAgc2V0U2xpZGVyczogdGhpcy5zZXRTbGlkZXJzLFxuICAgICAgICAgICAgICBzZXRCYXJzOiB0aGlzLnNldEJhcnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRvdC1ub3RhdGlvblxuICAgICAgICAgIC8vIHdpbmRvd1snc2V0U2xpZGVycyddID0gdGhpcy5zZXRTbGlkZXJzO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBkMyB9ID0gdGhpcztcbiAgICBjb25zdCB7XG4gICAgICB3aWR0aCwgbWFyZ2luLCBoZWlnaHQsXG4gICAgICBpdGVtcywgY29sb3VycywgY29udGFpbmVySWQsXG4gICAgICBheGlzLCBzZXRTbGlkZXJzXG4gICAgfSA9IHRoaXMuZGF0YTtcblxuICAgIC8vIGRhdGEgdmFsaWRhdGlvblxuICAgIGNvbnN0IHJhbmdlTW9kZSA9IGl0ZW1zLmV2ZXJ5KChkKSA9PiBkLnJhbmdlKTtcbiAgICBpZiAoIXJhbmdlTW9kZSAmJiBpdGVtcy5zb21lKChkKSA9PiAhZC5yYW5nZSkpIHtcbiAgICAgIHRocm93IEVycm9yKCdBbGwgaXRlbXMgbXVzdCBoYXZlIHRoZSBcInJhbmdlXCIgcHJvcGVydHknKTtcbiAgICB9XG5cbiAgICAvLyBIZWxwZXJzIC0gU3RhcnQ6XG4gICAgY29uc3QgTEFCRUx0b1ggPSBkM1xuICAgICAgLnNjYWxlQmFuZCgpXG4gICAgICAuZG9tYWluKGl0ZW1zLm1hcCgoZCkgPT4gZC5sYWJlbCkpXG4gICAgICAucmFuZ2UoWzAsIHdpZHRoXSlcbiAgICAgIC5wYWRkaW5nSW5uZXIoMC4xNylcbiAgICAgIC5wYWRkaW5nT3V0ZXIoMSk7XG5cbiAgICBjb25zdCBYdG9MQUJFTCA9ICh2YWx1ZSkgPT4ge1xuICAgICAgY29uc3QgZG9tYWluID0gTEFCRUx0b1guZG9tYWluKCk7XG4gICAgICBjb25zdCBwYWRkaW5nT3V0ZXIgPSBMQUJFTHRvWChkb21haW5bMF0pO1xuICAgICAgY29uc3QgZWFjaEJhbmQgPSBMQUJFTHRvWC5zdGVwKCk7XG4gICAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoKCh2YWx1ZSAtIHBhZGRpbmdPdXRlcikgLyBlYWNoQmFuZCkpO1xuICAgICAgcmV0dXJuIGRvbWFpbltNYXRoLm1heCgwLCBNYXRoLm1pbihpbmRleCwgZG9tYWluLmxlbmd0aCAtIDEpKV07XG4gICAgfTtcblxuICAgIC8vIFlFQVIgU0VMRUNUSU9OIENJUkNMRVNcbiAgICAvLyBsZXQgc2xpZGVycztcbiAgICBpZiAoc2V0U2xpZGVycyAmJiB0aGlzLnNsaWRlcnMpIHtcbiAgICAgIHRoaXMuc2xpZGVycyA9IHNldFNsaWRlcnNcbiAgICAgICAgLm1hcCgoZCkgPT4gKHsgeDogTEFCRUx0b1goZCkgKyBMQUJFTHRvWC5iYW5kd2lkdGgoKSAvIDIsIHk6IGhlaWdodCB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2xpZGVycyA9IGQzXG4gICAgICAgIC5leHRlbnQoaXRlbXMsIChkKSA9PiBkLmxhYmVsKVxuICAgICAgICAubWFwKChkKSA9PiAoeyB4OiBMQUJFTHRvWChkKSArIExBQkVMdG9YLmJhbmR3aWR0aCgpIC8gMiwgeTogaGVpZ2h0IH0pKTtcbiAgICB9XG5cbiAgICBjb25zdCBpc0luUmFuZ2UgPSAoeSkgPT4ge1xuICAgICAgY29uc3QgYWxsSXRlbXMgPSB0aGlzLnNsaWRlcnMubWFwKChkKSA9PiBYdG9MQUJFTChkLngpKTtcbiAgICAgIGlmICh5ID49IGQzLm1pbihhbGxJdGVtcykgJiYgeSA8PSBkMy5tYXgoYWxsSXRlbXMpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY29sb3VyQmFycyhkKSB7XG4gICAgICBpZiAoaXNJblJhbmdlKGQubGFiZWwpKSByZXR1cm4gJ3VybCgjZ3JhZGllbnQpJztcbiAgICAgIHJldHVybiAnI2UzZTNlMyc7XG4gICAgfVxuICAgIHRoaXMuY29sb3VyQmFycyA9IGNvbG91ckJhcnM7XG5cbiAgICB0aGlzLmdldFNlbGVjdGVkUmFuZ2UgPSAoKSA9PiB7XG4gICAgICBjb25zdCByYW5nZVN0YXJ0ID0gaXRlbXMuZmluZCgoaXQpID0+IGl0LmxhYmVsID09PSBYdG9MQUJFTCh0aGlzLnNsaWRlcnNbMF0ueCkpO1xuICAgICAgY29uc3QgcmFuZ2VFbmQgPSBpdGVtcy5maW5kKChpdCkgPT4gaXQubGFiZWwgPT09IFh0b0xBQkVMKHRoaXMuc2xpZGVyc1sxXS54KSk7XG4gICAgICByZXR1cm4gW1xuICAgICAgICByYW5nZVN0YXJ0LnBheWxvYWQsXG4gICAgICAgIHJhbmdlTW9kZVxuICAgICAgICAgID8gcmFuZ2VFbmQucmFuZ2UucGF5bG9hZFxuICAgICAgICAgIDogcmFuZ2VFbmQucGF5bG9hZFxuICAgICAgXTtcbiAgICB9O1xuICAgIC8vIEhlbHBlcnMgLSBFbmQuXG5cbiAgICAvLyBjbGVhciBIVE1MIGNvbnRlbnRzXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySWQpLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHN2ZyA9IGQzXG4gICAgICAuc2VsZWN0KGAjJHtjb250YWluZXJJZH1gKVxuICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCBgMCAwICR7d2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodH0gJHtoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbX1gKTtcbiAgICB0aGlzLnN2ZyA9IHN2ZztcblxuICAgIGNvbnN0IHNjYWxlSGVpZ2h0ID0gZDNcbiAgICAgIC5zY2FsZVN5bWxvZygpIC8vIG1vc3Qgc2ltaWxhciBzY2FsZSB0byB0aGUgb3JpZ2luYWxcbiAgICAgIC5kb21haW4oWzAsIGQzLm1heChpdGVtcywgKGQpID0+IGQudmFsdWUpXSlcbiAgICAgIC5yYW5nZShbaGVpZ2h0LCAwXSk7XG5cbiAgICAvLyBHUkFESUVOVFxuICAgIGNvbnN0IGRlZnMgPSBzdmcuYXBwZW5kKCdkZWZzJyk7IC8vIGRlZmluaXRpb25zXG4gICAgY29uc3QgZ3JhZGllbnQgPSBkZWZzXG4gICAgICAuYXBwZW5kKCdsaW5lYXJHcmFkaWVudCcpXG4gICAgICAuYXR0cignaWQnLCAnZ3JhZGllbnQnKVxuICAgICAgLmF0dHIoJ2dyYWRpZW50VW5pdHMnLCAndXNlclNwYWNlT25Vc2UnKVxuICAgICAgLmF0dHIoJ3gxJywgMClcbiAgICAgIC5hdHRyKCd5MScsIGhlaWdodClcbiAgICAgIC5hdHRyKCd4MicsIDApXG4gICAgICAuYXR0cigneTInLCBtYXJnaW4udG9wKTtcbiAgICBncmFkaWVudFxuICAgICAgLmFwcGVuZCgnc3RvcCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnc3RhcnQnKVxuICAgICAgLmF0dHIoJ29mZnNldCcsICcwJScpXG4gICAgICAuYXR0cignc3RvcC1jb2xvcicsIGNvbG91cnMuYm90dG9tKSAvLyBib3R0b20gZ3JhZGllbnRcbiAgICAgIC5hdHRyKCdzdG9wLW9wYWNpdHknLCAxKTtcbiAgICBncmFkaWVudFxuICAgICAgLmFwcGVuZCgnc3RvcCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZW5kJylcbiAgICAgIC5hdHRyKCdvZmZzZXQnLCAnMTAwJScpXG4gICAgICAuYXR0cignc3RvcC1jb2xvcicsIGNvbG91cnMudG9wKSAvLyB0b3AgZ3JhZGllbnRcbiAgICAgIC5hdHRyKCdzdG9wLW9wYWNpdHknLCAxKTtcblxuICAgIC8vIERSQVcgSU5TSURFIE1BUkdJTlNcbiAgICBjb25zdCBnID0gc3ZnXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdjaGFydCcpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke21hcmdpbi50b3B9KWApO1xuXG4gICAgY29uc3QgYmFyc0xheWVyID0gZy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdiYXJzJyk7XG4gICAgY29uc3QgY29udHJvbHNMYXllciA9IGcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnY29udHJvbHMnKTtcblxuICAgIC8vIEJBUiBDSEFSVFxuICAgIGJhcnNMYXllciAvLyBiYXJzXG4gICAgICAuc2VsZWN0QWxsKCdyZWN0LmJhcnMnKVxuICAgICAgLmRhdGEoaXRlbXMpXG4gICAgICAuam9pbigncmVjdCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnYmFycycpXG4gICAgICAuYXR0cignd2lkdGgnLCBMQUJFTHRvWC5iYW5kd2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0JywgKGQpID0+IGhlaWdodCAtIHNjYWxlSGVpZ2h0KGQudmFsdWUpKVxuICAgICAgLmF0dHIoJ3knLCAoZCkgPT4gc2NhbGVIZWlnaHQoZC52YWx1ZSkpXG4gICAgICAuYXR0cigneCcsIChkKSA9PiBMQUJFTHRvWChkLmxhYmVsKSlcbiAgICAgIC5hdHRyKCdkYXRhLXN0YXJ0JywgKGQpID0+IGQucGF5bG9hZCkgLy8gbWFrZSB0aGUgZGF0YSBlYXNpbHkgYWNjZXNzaWJsZVxuICAgICAgLmF0dHIoJ2RhdGEtZW5kJywgKGQpID0+IChkLnJhbmdlID8gZC5yYW5nZS5wYXlsb2FkIDogZC5wYXlsb2FkKSlcbiAgICAgIC5hdHRyKCdmaWxsJywgJ3VybCgjZ3JhZGllbnQpJyk7XG5cbiAgICBiYXJzTGF5ZXIgLy8gY2F0Y2ggYmFyIGV2ZW50c1xuICAgICAgLm9uKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgeWVhciA9IFh0b0xBQkVMKHRoaXMuZ2V0RXZlbnRDb29yZHMoZXZlbnQpLngpO1xuICAgICAgICBkMy5zZWxlY3RBbGwoJ3JlY3QuYmFycycpLmF0dHIoJ2ZpbGwnLCAoZCkgPT4ge1xuICAgICAgICAgIGlmICh5ZWFyID09PSBkLmxhYmVsKSByZXR1cm4gJyNCMENDRjgnO1xuICAgICAgICAgIHJldHVybiBjb2xvdXJCYXJzKGQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAub24oJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICBkMy5zZWxlY3RBbGwoJ3JlY3QuYmFycycpLmF0dHIoJ2ZpbGwnLCAoZCkgPT4gY29sb3VyQmFycyhkKSk7XG4gICAgICB9KVxuICAgICAgLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBsYWJlbCA9IFh0b0xBQkVMKHRoaXMuZ2V0RXZlbnRDb29yZHMoZXZlbnQpLngpO1xuICAgICAgICBjb25zdCB4QXhpc1ZhbHVlID0gTEFCRUx0b1gobGFiZWwpICsgTEFCRUx0b1guYmFuZHdpZHRoKCkgLyAyO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHtcbiAgICAgICAgICB4OiB4QXhpc1ZhbHVlLFxuICAgICAgICAgIHk6IGhlaWdodFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNsaWRlcnMgPSBbXG4gICAgICAgICAgLy8gYXZvaWQgam9pbmluZyB0aGUgdHdvIG9iamVjdHMhXG4gICAgICAgICAgeyAuLi5uZXdWYWx1ZSB9LFxuICAgICAgICAgIHsgLi4ubmV3VmFsdWUgfVxuICAgICAgICBdO1xuICAgICAgICByYW5nZVBpY2tlclxuICAgICAgICAgIC5kYXRhKHRoaXMuc2xpZGVycylcbiAgICAgICAgICAuc2VsZWN0KCdjaXJjbGUnKVxuICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZWFzZShkMy5lYXNlUXVhZE91dClcbiAgICAgICAgICAuZHVyYXRpb24oNTUwKVxuICAgICAgICAgIC5hdHRyKCdjeCcsIChkKSA9PiBkLngpO1xuICAgICAgICBjb250cm9sc0xheWVyXG4gICAgICAgICAgLnNlbGVjdCgncGF0aC5ibHVlbGluZScpXG4gICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5lYXNlKGQzLmVhc2VRdWFkT3V0KVxuICAgICAgICAgIC5kdXJhdGlvbig1NTApXG4gICAgICAgICAgLmF0dHIoJ2QnLCBkMy5saW5lKCkodGhpcy5zbGlkZXJzLm1hcCgoZCkgPT4gW2QueCwgZC55XSkpKTtcbiAgICAgICAgY29udHJvbHNMYXllclxuICAgICAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZWFzZShkMy5lYXNlUXVhZE91dClcbiAgICAgICAgICAuZHVyYXRpb24oNTUwKVxuICAgICAgICAgIC5hdHRyKCd4JywgKCkgPT4geEF4aXNWYWx1ZSlcbiAgICAgICAgICAudGV4dCgoZCwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFyYW5nZU1vZGUpIHJldHVybiBsYWJlbDtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtcy5maW5kKChpdCkgPT4gaXQubGFiZWwgPT09IGxhYmVsKTtcbiAgICAgICAgICAgIGlmIChpID4gMCkgcmV0dXJuIGl0ZW0ucmFuZ2UubGFiZWw7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5sYWJlbDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgZy5zZWxlY3RBbGwoJ3JlY3QuYmFycycpLmF0dHIoJ2ZpbGwnLCAoZCkgPT4gY29sb3VyQmFycyhkKSk7XG4gICAgICAgIHRoaXMudGV4dENvbGxpc2lvbih0aGlzLnNsaWRlcnMpO1xuICAgICAgICB0aGlzLmVtaXQoJ3Jhbmdlc2VsZWN0ZWQnLCB0aGlzLmdldFNlbGVjdGVkUmFuZ2UoKSk7XG4gICAgICB9KTtcblxuICAgIGNvbnRyb2xzTGF5ZXIgLy8gZ3JheSBsaW5lXG4gICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdncmF5bGluZScpXG4gICAgICAuYXR0cihcbiAgICAgICAgJ2QnLFxuICAgICAgICBkMy5saW5lKCkoW1xuICAgICAgICAgIFswLCBoZWlnaHRdLFxuICAgICAgICAgIFt3aWR0aCwgaGVpZ2h0XVxuICAgICAgICBdKVxuICAgICAgKVxuICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIDIpXG4gICAgICAuYXR0cignb3BhY2l0eScsIDEpXG4gICAgICAuYXR0cignc3Ryb2tlJywgJyNDMUM1QzcnKTtcblxuICAgIGNvbnRyb2xzTGF5ZXIgLy8gYmx1ZSBsaW5lXG4gICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdibHVlbGluZScpXG4gICAgICAuYXR0cignZCcsIGQzLmxpbmUoKSh0aGlzLnNsaWRlcnMubWFwKChkKSA9PiBbZC54LCBkLnldKSkpXG4gICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgMilcbiAgICAgIC5hdHRyKCdzdHJva2UnLCBjb2xvdXJzLmFjY2VudCk7XG5cbiAgICBjb25zdCByYW5nZVBpY2tlciA9IGNvbnRyb2xzTGF5ZXJcbiAgICAgIC5zZWxlY3RBbGwoJ2cucmFuZ2VwaWNrZXInKVxuICAgICAgLmRhdGEodGhpcy5zbGlkZXJzLnNvcnQoKGEsIGIpID0+IGQzLmFzY2VuZGluZyhhLngsIGIueCkpKVxuICAgICAgLmpvaW4oJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3JhbmdlcGlja2VyJyk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXRoaXMtYWxpYXNcbiAgICBjb25zdCBzZWxmID0gdGhpczsgLy8gRklYTUU6IEFsbG93IHVzZSBvZiBjbGFzcyBcInRoaXNcIiBpbnNpZGUgZHJhZ2dpbmcgdXBkYXRlO1xuICAgIC8qKlxuICAgKiBBbmltYXRlIHRoZSBlbGVtZW50cyB3aGlsZSB0aGUgdXNlciBpcyBkcmFnZ2luZyBvbmUgb2YgdGhlIHJhbmdlIHNlbGVjdG9yc1xuICAgKi9cbiAgICBmdW5jdGlvbiBkcmFnZ2luZ1VwZGF0ZShldmVudCwgZGF0YSkge1xuICAgICAgY29uc3QgbGFiZWwgPSBYdG9MQUJFTChldmVudC54KTtcbiAgICAgIGNvbnN0IHhBeGlzVmFsdWUgPSBMQUJFTHRvWChsYWJlbCkgKyBMQUJFTHRvWC5iYW5kd2lkdGgoKSAvIDI7XG4gICAgICBjb25zdCB5YiA9IFtdO1xuICAgICAgZy5zZWxlY3RBbGwoJ2NpcmNsZScpLmVhY2goZnVuY3Rpb24gc2V0QmFsbFBvc2l0aW9uKCkge1xuICAgICAgICB5Yi5wdXNoKHsgeDogK2QzLnNlbGVjdCh0aGlzKS5hdHRyKCdjeCcpLCB5OiBoZWlnaHQgfSk7XG4gICAgICB9KTtcbiAgICAgIHNlbGYuc2xpZGVycyA9IHliLnNvcnQoKGEsIGIpID0+IGQzLmFzY2VuZGluZyhhLngsIGIueCkpO1xuICAgICAgLy8gbW92ZSB0aGUgY2lyY2xlXG4gICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgLnNlbGVjdCgnY2lyY2xlJylcbiAgICAgICAgLmF0dHIoJ2N4JywgZGF0YS54ID0geEF4aXNWYWx1ZSk7XG4gICAgICAvLyBtb3ZlIHRoZSBibHVlIGxpbmVcbiAgICAgIGNvbnRyb2xzTGF5ZXJcbiAgICAgICAgLnNlbGVjdCgncGF0aC5ibHVlbGluZScpXG4gICAgICAgIC5hdHRyKCdkJywgZDMubGluZSgpKHNlbGYuc2xpZGVycy5tYXAoKGQpID0+IFtkLngsIGQueV0pKSk7XG4gICAgICAvLyBjaGFuZ2UgdGhlIHRleHQgcG9zaXRpb25cbiAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAuc2VsZWN0KCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3gnLCAoKSA9PiB4QXhpc1ZhbHVlKTtcbiAgICAgIC8vIGNoYW5nZSB0aGUgdGV4dCB2YWx1ZXNcbiAgICAgIGNvbnRyb2xzTGF5ZXJcbiAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC50ZXh0KChkKSA9PiB7XG4gICAgICAgICAgY29uc3QgbCA9IFh0b0xBQkVMKGQueCk7XG4gICAgICAgICAgaWYgKCFyYW5nZU1vZGUpIHJldHVybiBsO1xuICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gc2VsZi5zbGlkZXJzLmZpbmRJbmRleCgoc2xpZGVyKSA9PiBzbGlkZXIueCA9PT0gZC54KTtcbiAgICAgICAgICBjb25zdCByYW5nZSA9IHNlbGYuZ2V0U2VsZWN0ZWRSYW5nZSgpO1xuICAgICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMSkgcmV0dXJuIHJhbmdlWzFdO1xuICAgICAgICAgIHJldHVybiByYW5nZVswXTtcbiAgICAgICAgfSk7XG4gICAgICBzZWxmLnRleHRDb2xsaXNpb24oc2VsZi5zbGlkZXJzKTtcbiAgICAgIC8vIGNvbG91ciB0aGUgYmFyc1xuICAgICAgZy5zZWxlY3RBbGwoJ3JlY3QuYmFycycpLmF0dHIoJ2ZpbGwnLCAoZCkgPT4gY29sb3VyQmFycyhkKSk7XG4gICAgfVxuXG4gICAgcmFuZ2VQaWNrZXIgLy8gZHJhZyBoYW5kbGVyXG4gICAgICAuY2FsbChkMy5kcmFnKClcbiAgICAgICAgLm9uKCdkcmFnJywgZHJhZ2dpbmdVcGRhdGUpXG4gICAgICAgIC5vbignZW5kJywgKGV2ZW50LCBkYXRhKSA9PiB7XG4gICAgICAgICAgLy8gdXBkYXRlIG9uZSBsYXN0IHRpbWUgdG8gcHJldmVudCBkZXN5bmNpbmdcbiAgICAgICAgICBkcmFnZ2luZ1VwZGF0ZShldmVudCwgZGF0YSk7XG4gICAgICAgICAgLy8gZW1pdCB0aGUgc2VsZWN0ZWQgcmFuZ2VcbiAgICAgICAgICB0aGlzLmVtaXQoJ3Jhbmdlc2VsZWN0ZWQnLCB0aGlzLmdldFNlbGVjdGVkUmFuZ2UoKSk7XG4gICAgICAgIH0pKTtcblxuICAgIHJhbmdlUGlja2VyXG4gICAgICAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgLmF0dHIoJ2N4JywgKGQpID0+IGQueClcbiAgICAgIC5hdHRyKCdjeScsIChkKSA9PiBkLnkpXG4gICAgICAuYXR0cigncicsIDkpXG4gICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXG4gICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgMilcbiAgICAgIC5hdHRyKCdzdHJva2UnLCBjb2xvdXJzLmFjY2VudClcbiAgICAgIC5hdHRyKCdzdHlsZScsICdjdXJzb3I6IHBvaW50ZXInKTtcblxuICAgIHJhbmdlUGlja2VyXG4gICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgIC5hdHRyKCdmb250LWZhbWlseScsICdSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmJylcbiAgICAgIC5hdHRyKCdmb250LXNpemUnLCAnMTJweCcpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCd5JywgKGQpID0+IGQueSArIG1hcmdpbi5ib3R0b20gLyAyKVxuICAgICAgLmF0dHIoJ3gnLCAoZCkgPT4gZC54KVxuICAgICAgLmF0dHIoJ2ZpbGwnLCBjb2xvdXJzLmFjY2VudClcbiAgICAgIC50ZXh0KChkLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGwgPSBYdG9MQUJFTChkLngpO1xuICAgICAgICBpZiAocmFuZ2VNb2RlICYmIGkgPT09IDEpIHtcbiAgICAgICAgICByZXR1cm4gaXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5sYWJlbCA9PT0gbCkucmFuZ2UubGFiZWw7XG4gICAgICAgIH0gcmV0dXJuIGw7XG4gICAgICB9KTtcblxuICAgIGlmIChheGlzPy55QXhpcz8uc2hvdykge1xuICAgICAgY29uc3QgeUF4aXMgPSBkMy5heGlzTGVmdChzY2FsZUhlaWdodClcbiAgICAgICAgLnRpY2tzKGF4aXMueUF4aXMudGlja0Ftb3VudCA/PyAyKVxuICAgICAgICAudGlja1ZhbHVlcyhheGlzLnlBeGlzLnZhbHVlcyA/IGF4aXMueUF4aXMudmFsdWVzIDogbnVsbCk7XG4gICAgICBjb25zdCB5QXhpc0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCAke21hcmdpbi50b3B9KWApXG4gICAgICAgIC5jYWxsKHlBeGlzKTtcblxuICAgICAgeUF4aXNHcm91cC5zZWxlY3RBbGwoJ3BhdGgsIGxpbmUnKS5zdHlsZSgnc3Ryb2tlJywgY29sb3Vycy5hY2NlbnQpO1xuICAgICAgeUF4aXNHcm91cC5zZWxlY3RBbGwoJ3RleHQnKS5zdHlsZSgnZmlsbCcsIGNvbG91cnMuYWNjZW50KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqIEF2b2lkIGNvbGxpc2lvbiBvZiB0aGUgc2xpZGVyIGxhYmVscyAqL1xuICB0ZXh0Q29sbGlzaW9uID0gKHNsaWRlcnM6IFNsaWRlcnMpID0+IHtcbiAgICAvLyBwcmUtcmVxdWlzaXRlc1xuICAgIGNvbnN0IGNvbnRyb2xzTGF5ZXIgPSB0aGlzLmQzLnNlbGVjdCgnZy5jaGFydCcpLnNlbGVjdCgnZy5jb250cm9scycpO1xuICAgIGNvbnN0IHsgaXRlbXMsIG1hcmdpbiB9ID0gdGhpcy5kYXRhO1xuICAgIGNvbnN0IHJhbmdlTW9kZSA9IGl0ZW1zLmV2ZXJ5KChkKSA9PiBkLnJhbmdlKTtcbiAgICAvLyBydW4gY29sbGlzaW9uIGRldGVjdGlvblxuICAgIGNvbnN0IGlzQ29sbGlkaW5nID0gc2xpZGVyc1swXS54ID09PSBzbGlkZXJzWzFdLng7XG4gICAgaWYgKHJhbmdlTW9kZSAmJiBpc0NvbGxpZGluZykge1xuICAgICAgY29udHJvbHNMYXllclxuICAgICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3knLCAoZCwgaSkgPT4gKGkgPiAwID8gZC55ICsgbWFyZ2luLmJvdHRvbSAvIDIgKyAxMiA6IGQueSArIG1hcmdpbi5ib3R0b20gLyAyKSlcbiAgICAgICAgLnRleHQoKGQsIGkpID0+IHtcbiAgICAgICAgICBjb25zdCByYW5nZSA9IHRoaXMuZ2V0U2VsZWN0ZWRSYW5nZSgpO1xuICAgICAgICAgIHJldHVybiByYW5nZVtpXTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRyb2xzTGF5ZXJcbiAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd5JywgKGQpID0+IGQueSArIG1hcmdpbi5ib3R0b20gLyAyKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqIEdldCB4LWF4aXMgcG9zaXRpb24gZnJvbSBsYWJlbCAqL1xuICBsYWJlbFRvWCgpIHtcbiAgICByZXR1cm4gdGhpcy5kM1xuICAgICAgLnNjYWxlQmFuZCgpXG4gICAgICAuZG9tYWluKHRoaXMuZGF0YS5pdGVtcy5tYXAoKGQpID0+IGQubGFiZWwpKVxuICAgICAgLnJhbmdlKFswLCB0aGlzLmRhdGEud2lkdGhdKVxuICAgICAgLnBhZGRpbmdJbm5lcigwLjE3KVxuICAgICAgLnBhZGRpbmdPdXRlcigxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gZXZlbnQgd2l0aCB2aWV3Qm94IGNvb3JkaW5hdGVzIGFuZFxuICAgKiBwYXJzZSB0aGVtIGluIGFic29sdXRlIGNvb3JkaW5hdGVzXG4gICAqL1xuICBnZXRFdmVudENvb3JkcyhldmVudCk6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSB7XG4gICAgY29uc3QgbSA9IGV2ZW50LnRhcmdldC5nZXRTY3JlZW5DVE0oKTtcbiAgICBjb25zdCBwb2ludCA9IHRoaXMuc3ZnLm5vZGUoKS5jcmVhdGVTVkdQb2ludCgpO1xuICAgIHBvaW50LnggPSBldmVudC5jbGllbnRYO1xuICAgIHBvaW50LnkgPSBldmVudC5jbGllbnRZO1xuICAgIHJldHVybiBwb2ludC5tYXRyaXhUcmFuc2Zvcm0obS5pbnZlcnNlKCkpO1xuICB9XG5cbiAgLyoqIFB1YmxpYyBhcGkgdGhhdCBhbGxvd3MgdG8gZGluYW1pY2FsbHkgY2hhbmdlIHRoZSBiYXJzICovXG4gIHNldEJhcnMgPSAobmV3QmFycykgPT4ge1xuICAgIHRoaXMuZGF0YS5pdGVtcyA9IG5ld0JhcnM7XG4gICAgdGhpcy5kcmF3KCk7XG4gICAgdGhpcy5kMy5zZWxlY3RBbGwoJ3JlY3QuYmFycycpLmF0dHIoJ2ZpbGwnLCAoZCkgPT4gdGhpcy5jb2xvdXJCYXJzKGQpKTtcbiAgfTtcblxuICAvKiogUHVibGljIGFwaSB0aGF0IGFsbG93cyB0byBkaW5hbWljYWxseSBjaGFuZ2UgdGhlIHNsaWRlciBwb3NpdGlvbiAqL1xuICBzZXRTbGlkZXJzID0gKFtzdGFydExhYmVsLCBlbmRMYWJlbF06IExhYmVsQ291cGxlLCBlbWl0ID0gdHJ1ZSkgPT4ge1xuICAgIC8vIHNldFNsaWRlcnMoWzE0NTAsIDE1NzVdKVxuICAgIHRoaXMuZGF0YS5zZXRTbGlkZXJzID0gW2Ake3N0YXJ0TGFiZWx9YCwgYCR7ZW5kTGFiZWx9YF07XG4gICAgdGhpcy5kcmF3KCk7XG4gICAgdGhpcy5kMy5zZWxlY3RBbGwoJ3JlY3QuYmFycycpLmF0dHIoJ2ZpbGwnLCAoZCkgPT4gdGhpcy5jb2xvdXJCYXJzKGQpKTtcbiAgICBjb25zdCByYW5nZSA9IHRoaXMuZ2V0U2VsZWN0ZWRSYW5nZSgpO1xuICAgIGlmIChlbWl0KSB0aGlzLmVtaXQoJ3Jhbmdlc2VsZWN0ZWQnLCByYW5nZSk7XG4gICAgdGhpcy50ZXh0Q29sbGlzaW9uKHRoaXMuc2xpZGVycyk7XG4gICAgcmV0dXJuIHJhbmdlO1xuICB9O1xuXG4gIC8qKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGxvYWRlZCAqL1xuICBlbWl0TG9hZGVkKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnbG9hZGVkJywgcGF5bG9hZCk7XG4gIH1cbn1cbiIsIjxkaXYgKm5nSWY9XCJkYXRhXCIgY2xhc3M9XCJuNy1oaXN0b2dyYW0tcmFuZ2VcIj5cbiAgICA8c3ZnICNoaXN0b2dyYW1SYW5nZSBbaWRdPVwiZGF0YS5jb250YWluZXJJZFwiPjwvc3ZnPlxuPC9kaXY+XG4iXX0=