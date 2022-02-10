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
                .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
                .style('border', '1px solid #1d1d1d');
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
HistogramRangeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: HistogramRangeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HistogramRangeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.2", type: HistogramRangeComponent, selector: "n7-histogram-range", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-histogram-range\">\r\n    <svg #histogramRange [id]=\"data.containerId\"></svg>\r\n</div>\r\n", directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: HistogramRangeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-histogram-range', template: "<div *ngIf=\"data\" class=\"n7-histogram-range\">\r\n    <svg #histogramRange [id]=\"data.containerId\"></svg>\r\n</div>\r\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9ncmFtLXJhbmdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZHYtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2hpc3RvZ3JhbS1yYW5nZS9oaXN0b2dyYW0tcmFuZ2UudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvaGlzdG9ncmFtLXJhbmdlL2hpc3RvZ3JhbS1yYW5nZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlDQUF5QztBQUN6Qyw2QkFBNkI7QUFDN0IscUJBQXFCO0FBQ3JCLDZCQUE2QjtBQUU3QixPQUFPLEVBQXVCLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQTJGdEUsTUFBTSxPQUFPLHVCQUF1QjtJQUpwQztRQVdVLFlBQU8sR0FBWSxFQUFFLENBQUM7UUFLdEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQW1DeEIsU0FBSSxHQUFHLEdBQUcsRUFBRTtZQUNWLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDcEIsTUFBTSxFQUNKLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUNyQixLQUFLLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFDM0IsSUFBSSxFQUFFLFVBQVUsRUFDakIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBRWQsa0JBQWtCO1lBQ2xCLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUM3QyxNQUFNLEtBQUssQ0FBQyww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SSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNCLFlBQVksQ0FBQyxJQUFJLENBQUM7YUFDbEIsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxjQUFjLENBQUMsS0FBSztRQUNsQixNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDL0MsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUN4QixPQUFPLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQXFCRCxtREFBbUQ7SUFDbkQsVUFBVSxDQUFDLE9BQU87UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDOztvSEF4WlUsdUJBQXVCO3dHQUF2Qix1QkFBdUIsa0dDaEdwQyw4SEFHQTsyRkQ2RmEsdUJBQXVCO2tCQUpuQyxTQUFTOytCQUNFLG9CQUFvQjs4QkFJckIsSUFBSTtzQkFBWixLQUFLO2dCQUVHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEhJU1RPR1JBTS1SQU5HRS50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBIaXN0b2dyYW1SYW5nZUNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEhpc3RvZ3JhbVJhbmdlRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBoaXN0b2dyYW0tcmFuZ2Ugc3ZnXHJcbiAgICovXHJcbiAgY29udGFpbmVySWQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiB0b3RhbCB3aWR0aCBmb3IgdGhlIHN2ZyBlbGVtZW50XHJcbiAgICovXHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICAvKipcclxuICAgKiB0b3RhbCBoZWlnaHQgZm9yIHRoZSBzdmcgZWxlbWVudFxyXG4gICAqL1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIEludGVybmFsIG1hcmdpbnMgb2YgdGhlIHN2Z1xyXG4gICAqL1xyXG4gIG1hcmdpbjoge1xyXG4gICAgbGVmdDogbnVtYmVyO1xyXG4gICAgcmlnaHQ6IG51bWJlcjtcclxuICAgIHRvcDogbnVtYmVyO1xyXG4gICAgYm90dG9tOiBudW1iZXI7XHJcbiAgfTtcclxuICAvKipcclxuICAgKiBUaGVtZSBvZiB0aGUgaGlzdG9ncmFtXHJcbiAgICovXHJcbiAgY29sb3Vyczoge1xyXG4gICAgdG9wOiBzdHJpbmc7XHJcbiAgICBib3R0b206IHN0cmluZztcclxuICAgIGFjY2VudDogc3RyaW5nO1xyXG4gIH07XHJcbiAgLyoqXHJcbiAgICogRGF0YSBmb3IgdGhlIGhpc3RvZ3JhbSBiYXJzXHJcbiAgICovXHJcbiAgaXRlbXM6IHtcclxuICAgIC8qKiBkZWZhdWx0IGxhYmVsIG9mIHRoZSBpdGVtICovXHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgLyoqIHktYXhpcyB2YWx1ZSBvZiB0aGUgYmFyIChoZWlnaHQpICovXHJcbiAgICB2YWx1ZTogbnVtYmVyO1xyXG4gICAgLyoqIHBheWxvYWQgdGhhdCB0aGUgaXRlbSBzaG91bGQgZW1pdCB3aGVuIHNlbGVjdGVkICovXHJcbiAgICBwYXlsb2FkOiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqICd1cHBlcicgdmFsdWVzIG9mIHRoZSByYW5nZS5cclxuICAgICAqIG9ubHkgdXNlZCB3aGVuIGVhY2ggYmFyIHJlcHJlc2VudHMgYSByYW5nZS5cclxuICAgICAqL1xyXG4gICAgcmFuZ2U/OiB7XHJcbiAgICAgIC8qKiBsYWJlbCBsb2FkZWQgd2hlbiBzZWxlY3RlZCBieSB0aGUgcmlnaHQtbW9zdCBwb2ludGVyICovXHJcbiAgICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICAgIC8qKiBwYXlsb2FkIGVtaXR0ZWQgd2hlbiBzZWxlY3RlZCBieSB0aGUgcmlnaHQtbW9zdCBwb2ludGVyICovXHJcbiAgICAgIHBheWxvYWQ6IGFueTtcclxuICAgIH07XHJcbiAgfVtdO1xyXG4gIC8qKlxyXG4gICAqIEF4aXMgc2V0dGluZ3NcclxuICAgKi9cclxuICBheGlzPzoge1xyXG4gICAgLyoqIFkgQXhpcyBzZXR0aW5ncyAqL1xyXG4gICAgeUF4aXM/OiB7XHJcbiAgICAgIC8qKiBUdXJuIG9uIGFuZCBvZmYgdGhlIGF4aXMgKi9cclxuICAgICAgc2hvdz86IGJvb2xlYW47XHJcbiAgICAgIC8qKiBNYW51YWxseSBzZXQgdGhlIGF4aXMgdmFsdWVzIHRvIHNob3cgKi9cclxuICAgICAgdmFsdWVzPzogbnVtYmVyW107XHJcbiAgICAgIC8qKiBIb3cgbWFueSB0aWNrcyBkbyB5b3Ugd2FudCB0byBzZWUgKi9cclxuICAgICAgdGlja0Ftb3VudD86IG51bWJlcjtcclxuICAgIH07XHJcbiAgfTtcclxuICAvKipcclxuICAgKiBleHBvc2UgdGhlIGRyYXcgZnVuY3Rpb24gb3V0c2lkZSBvZiBuNy1mcm9udGVuZC9jb21wb25lbnRzIGxpYnJhcnlcclxuICAgKiB0aGlzIGlzIG5lZWRlZCB0byByZWRyYXcgYnViYmxlLWNoYXJ0LWNvbXBvbmVudCBvbiBjb21tYW5kXHJcbiAgICovXHJcbiAgc2V0RHJhdz86IGFueTtcclxuICAvKipcclxuICAgKiBzZXRTbGlkZXJzXHJcbiAgICovXHJcbiAgc2V0U2xpZGVycz86IExhYmVsQ291cGxlO1xyXG4gIC8qKlxyXG4gICAqIFB1YmxpYyBhcGlcclxuICAgKi9cclxuICBzZXRBcGk/OiBhbnk7XHJcbn1cclxuXHJcbnR5cGUgU2xpZGVycyA9IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVtdO1xyXG50eXBlIExhYmVsQ291cGxlID0gW3N0cmluZywgc3RyaW5nXTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctaGlzdG9ncmFtLXJhbmdlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaGlzdG9ncmFtLXJhbmdlLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIaXN0b2dyYW1SYW5nZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IEhpc3RvZ3JhbVJhbmdlRGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBwcml2YXRlIGQzO1xyXG5cclxuICBwcml2YXRlIHNsaWRlcnM6IFNsaWRlcnMgPSBbXTtcclxuXHJcbiAgLyoqIGQzIHNlbGVjdGlvbiBzdmcgcm9vdCAqL1xyXG4gIHByaXZhdGUgc3ZnO1xyXG5cclxuICBwcml2YXRlIF9sb2FkZWQgPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBjb2xvdXJCYXJzO1xyXG5cclxuICBwcml2YXRlIGdldFNlbGVjdGVkUmFuZ2U7XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcclxuICAgIC8qXHJcbiAgICAgICAgIFdhaXRzIGZvciB0aGUgZG9tIHRvIGJlIGxvYWRlZCwgdGhlbiBmaXJlcyB0aGUgZHJhdyBmdW5jdGlvblxyXG4gICAgICAgICB0aGF0IHJlbmRlcnMgdGhlIGNoYXJ0LlxyXG4gICAgKi9cclxuICAgIGlmICh0aGlzLmRhdGEpIHtcclxuICAgICAgaWYgKHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xyXG4gICAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpbXBvcnQoJ2QzJykudGhlbigobW9kdWxlKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmQzID0gbW9kdWxlO1xyXG4gICAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICAgICAgICB0aGlzLmVtaXRMb2FkZWQodHJ1ZSk7XHJcbiAgICAgICAgICBpZiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5zZXREcmF3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zZXREcmF3KHRoaXMuZHJhdyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5kYXRhLnNldEFwaSkgeyAvLyBleHBvc2UgdGhlIGNvbXBvbmVudCBhcGlcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnNldEFwaSh7XHJcbiAgICAgICAgICAgICAgc2V0U2xpZGVyczogdGhpcy5zZXRTbGlkZXJzLFxyXG4gICAgICAgICAgICAgIHNldEJhcnM6IHRoaXMuc2V0QmFycyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZG90LW5vdGF0aW9uXHJcbiAgICAgICAgICAvLyB3aW5kb3dbJ3NldFNsaWRlcnMnXSA9IHRoaXMuc2V0U2xpZGVycztcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkMyB9ID0gdGhpcztcclxuICAgIGNvbnN0IHtcclxuICAgICAgd2lkdGgsIG1hcmdpbiwgaGVpZ2h0LFxyXG4gICAgICBpdGVtcywgY29sb3VycywgY29udGFpbmVySWQsXHJcbiAgICAgIGF4aXMsIHNldFNsaWRlcnNcclxuICAgIH0gPSB0aGlzLmRhdGE7XHJcblxyXG4gICAgLy8gZGF0YSB2YWxpZGF0aW9uXHJcbiAgICBjb25zdCByYW5nZU1vZGUgPSBpdGVtcy5ldmVyeSgoZCkgPT4gZC5yYW5nZSk7XHJcbiAgICBpZiAoIXJhbmdlTW9kZSAmJiBpdGVtcy5zb21lKChkKSA9PiAhZC5yYW5nZSkpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ0FsbCBpdGVtcyBtdXN0IGhhdmUgdGhlIFwicmFuZ2VcIiBwcm9wZXJ0eScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhlbHBlcnMgLSBTdGFydDpcclxuICAgIGNvbnN0IExBQkVMdG9YID0gZDNcclxuICAgICAgLnNjYWxlQmFuZCgpXHJcbiAgICAgIC5kb21haW4oaXRlbXMubWFwKChkKSA9PiBkLmxhYmVsKSlcclxuICAgICAgLnJhbmdlKFswLCB3aWR0aF0pXHJcbiAgICAgIC5wYWRkaW5nSW5uZXIoMC4xNylcclxuICAgICAgLnBhZGRpbmdPdXRlcigxKTtcclxuXHJcbiAgICBjb25zdCBYdG9MQUJFTCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICBjb25zdCBkb21haW4gPSBMQUJFTHRvWC5kb21haW4oKTtcclxuICAgICAgY29uc3QgcGFkZGluZ091dGVyID0gTEFCRUx0b1goZG9tYWluWzBdKTtcclxuICAgICAgY29uc3QgZWFjaEJhbmQgPSBMQUJFTHRvWC5zdGVwKCk7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcigoKHZhbHVlIC0gcGFkZGluZ091dGVyKSAvIGVhY2hCYW5kKSk7XHJcbiAgICAgIHJldHVybiBkb21haW5bTWF0aC5tYXgoMCwgTWF0aC5taW4oaW5kZXgsIGRvbWFpbi5sZW5ndGggLSAxKSldO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBZRUFSIFNFTEVDVElPTiBDSVJDTEVTXHJcbiAgICAvLyBsZXQgc2xpZGVycztcclxuICAgIGlmIChzZXRTbGlkZXJzICYmIHRoaXMuc2xpZGVycykge1xyXG4gICAgICB0aGlzLnNsaWRlcnMgPSBzZXRTbGlkZXJzXHJcbiAgICAgICAgLm1hcCgoZCkgPT4gKHsgeDogTEFCRUx0b1goZCkgKyBMQUJFTHRvWC5iYW5kd2lkdGgoKSAvIDIsIHk6IGhlaWdodCB9KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNsaWRlcnMgPSBkM1xyXG4gICAgICAgIC5leHRlbnQoaXRlbXMsIChkKSA9PiBkLmxhYmVsKVxyXG4gICAgICAgIC5tYXAoKGQpID0+ICh7IHg6IExBQkVMdG9YKGQpICsgTEFCRUx0b1guYmFuZHdpZHRoKCkgLyAyLCB5OiBoZWlnaHQgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGlzSW5SYW5nZSA9ICh5KSA9PiB7XHJcbiAgICAgIGNvbnN0IGFsbEl0ZW1zID0gdGhpcy5zbGlkZXJzLm1hcCgoZCkgPT4gWHRvTEFCRUwoZC54KSk7XHJcbiAgICAgIGlmICh5ID49IGQzLm1pbihhbGxJdGVtcykgJiYgeSA8PSBkMy5tYXgoYWxsSXRlbXMpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBjb2xvdXJCYXJzKGQpIHtcclxuICAgICAgaWYgKGlzSW5SYW5nZShkLmxhYmVsKSkgcmV0dXJuICd1cmwoI2dyYWRpZW50KSc7XHJcbiAgICAgIHJldHVybiAnI2UzZTNlMyc7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbG91ckJhcnMgPSBjb2xvdXJCYXJzO1xyXG5cclxuICAgIHRoaXMuZ2V0U2VsZWN0ZWRSYW5nZSA9ICgpID0+IHtcclxuICAgICAgY29uc3QgcmFuZ2VTdGFydCA9IGl0ZW1zLmZpbmQoKGl0KSA9PiBpdC5sYWJlbCA9PT0gWHRvTEFCRUwodGhpcy5zbGlkZXJzWzBdLngpKTtcclxuICAgICAgY29uc3QgcmFuZ2VFbmQgPSBpdGVtcy5maW5kKChpdCkgPT4gaXQubGFiZWwgPT09IFh0b0xBQkVMKHRoaXMuc2xpZGVyc1sxXS54KSk7XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgcmFuZ2VTdGFydC5wYXlsb2FkLFxyXG4gICAgICAgIHJhbmdlTW9kZVxyXG4gICAgICAgICAgPyByYW5nZUVuZC5yYW5nZS5wYXlsb2FkXHJcbiAgICAgICAgICA6IHJhbmdlRW5kLnBheWxvYWRcclxuICAgICAgXTtcclxuICAgIH07XHJcbiAgICAvLyBIZWxwZXJzIC0gRW5kLlxyXG5cclxuICAgIC8vIGNsZWFyIEhUTUwgY29udGVudHNcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcklkKS5pbm5lckhUTUwgPSAnJztcclxuICAgIGNvbnN0IHN2ZyA9IGQzXHJcbiAgICAgIC5zZWxlY3QoYCMke2NvbnRhaW5lcklkfWApXHJcbiAgICAgIC5hdHRyKCd2aWV3Qm94JywgYDAgMCAke3dpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHR9ICR7aGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b219YClcclxuICAgICAgLnN0eWxlKCdib3JkZXInLCAnMXB4IHNvbGlkICMxZDFkMWQnKTtcclxuICAgIHRoaXMuc3ZnID0gc3ZnO1xyXG5cclxuICAgIGNvbnN0IHNjYWxlSGVpZ2h0ID0gZDNcclxuICAgICAgLnNjYWxlU3ltbG9nKCkgLy8gbW9zdCBzaW1pbGFyIHNjYWxlIHRvIHRoZSBvcmlnaW5hbFxyXG4gICAgICAuZG9tYWluKFswLCBkMy5tYXgoaXRlbXMsIChkKSA9PiBkLnZhbHVlKV0pXHJcbiAgICAgIC5yYW5nZShbaGVpZ2h0LCAwXSk7XHJcblxyXG4gICAgLy8gR1JBRElFTlRcclxuICAgIGNvbnN0IGRlZnMgPSBzdmcuYXBwZW5kKCdkZWZzJyk7IC8vIGRlZmluaXRpb25zXHJcbiAgICBjb25zdCBncmFkaWVudCA9IGRlZnNcclxuICAgICAgLmFwcGVuZCgnbGluZWFyR3JhZGllbnQnKVxyXG4gICAgICAuYXR0cignaWQnLCAnZ3JhZGllbnQnKVxyXG4gICAgICAuYXR0cignZ3JhZGllbnRVbml0cycsICd1c2VyU3BhY2VPblVzZScpXHJcbiAgICAgIC5hdHRyKCd4MScsIDApXHJcbiAgICAgIC5hdHRyKCd5MScsIGhlaWdodClcclxuICAgICAgLmF0dHIoJ3gyJywgMClcclxuICAgICAgLmF0dHIoJ3kyJywgbWFyZ2luLnRvcCk7XHJcbiAgICBncmFkaWVudFxyXG4gICAgICAuYXBwZW5kKCdzdG9wJylcclxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3N0YXJ0JylcclxuICAgICAgLmF0dHIoJ29mZnNldCcsICcwJScpXHJcbiAgICAgIC5hdHRyKCdzdG9wLWNvbG9yJywgY29sb3Vycy5ib3R0b20pIC8vIGJvdHRvbSBncmFkaWVudFxyXG4gICAgICAuYXR0cignc3RvcC1vcGFjaXR5JywgMSk7XHJcbiAgICBncmFkaWVudFxyXG4gICAgICAuYXBwZW5kKCdzdG9wJylcclxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2VuZCcpXHJcbiAgICAgIC5hdHRyKCdvZmZzZXQnLCAnMTAwJScpXHJcbiAgICAgIC5hdHRyKCdzdG9wLWNvbG9yJywgY29sb3Vycy50b3ApIC8vIHRvcCBncmFkaWVudFxyXG4gICAgICAuYXR0cignc3RvcC1vcGFjaXR5JywgMSk7XHJcblxyXG4gICAgLy8gRFJBVyBJTlNJREUgTUFSR0lOU1xyXG4gICAgY29uc3QgZyA9IHN2Z1xyXG4gICAgICAuYXBwZW5kKCdnJylcclxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2NoYXJ0JylcclxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sJHttYXJnaW4udG9wfSlgKTtcclxuXHJcbiAgICBjb25zdCBiYXJzTGF5ZXIgPSBnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2JhcnMnKTtcclxuICAgIGNvbnN0IGNvbnRyb2xzTGF5ZXIgPSBnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2NvbnRyb2xzJyk7XHJcblxyXG4gICAgLy8gQkFSIENIQVJUXHJcbiAgICBiYXJzTGF5ZXIgLy8gYmFyc1xyXG4gICAgICAuc2VsZWN0QWxsKCdyZWN0LmJhcnMnKVxyXG4gICAgICAuZGF0YShpdGVtcylcclxuICAgICAgLmpvaW4oJ3JlY3QnKVxyXG4gICAgICAuYXR0cignY2xhc3MnLCAnYmFycycpXHJcbiAgICAgIC5hdHRyKCd3aWR0aCcsIExBQkVMdG9YLmJhbmR3aWR0aClcclxuICAgICAgLmF0dHIoJ2hlaWdodCcsIChkKSA9PiBoZWlnaHQgLSBzY2FsZUhlaWdodChkLnZhbHVlKSlcclxuICAgICAgLmF0dHIoJ3knLCAoZCkgPT4gc2NhbGVIZWlnaHQoZC52YWx1ZSkpXHJcbiAgICAgIC5hdHRyKCd4JywgKGQpID0+IExBQkVMdG9YKGQubGFiZWwpKVxyXG4gICAgICAuYXR0cignZGF0YS1zdGFydCcsIChkKSA9PiBkLnBheWxvYWQpIC8vIG1ha2UgdGhlIGRhdGEgZWFzaWx5IGFjY2Vzc2libGVcclxuICAgICAgLmF0dHIoJ2RhdGEtZW5kJywgKGQpID0+IChkLnJhbmdlID8gZC5yYW5nZS5wYXlsb2FkIDogZC5wYXlsb2FkKSlcclxuICAgICAgLmF0dHIoJ2ZpbGwnLCAndXJsKCNncmFkaWVudCknKTtcclxuXHJcbiAgICBiYXJzTGF5ZXIgLy8gY2F0Y2ggYmFyIGV2ZW50c1xyXG4gICAgICAub24oJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHllYXIgPSBYdG9MQUJFTCh0aGlzLmdldEV2ZW50Q29vcmRzKGV2ZW50KS54KTtcclxuICAgICAgICBkMy5zZWxlY3RBbGwoJ3JlY3QuYmFycycpLmF0dHIoJ2ZpbGwnLCAoZCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHllYXIgPT09IGQubGFiZWwpIHJldHVybiAnI0IwQ0NGOCc7XHJcbiAgICAgICAgICByZXR1cm4gY29sb3VyQmFycyhkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLm9uKCdtb3VzZW91dCcsICgpID0+IHtcclxuICAgICAgICBkMy5zZWxlY3RBbGwoJ3JlY3QuYmFycycpLmF0dHIoJ2ZpbGwnLCAoZCkgPT4gY29sb3VyQmFycyhkKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBsYWJlbCA9IFh0b0xBQkVMKHRoaXMuZ2V0RXZlbnRDb29yZHMoZXZlbnQpLngpO1xyXG4gICAgICAgIGNvbnN0IHhBeGlzVmFsdWUgPSBMQUJFTHRvWChsYWJlbCkgKyBMQUJFTHRvWC5iYW5kd2lkdGgoKSAvIDI7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB7XHJcbiAgICAgICAgICB4OiB4QXhpc1ZhbHVlLFxyXG4gICAgICAgICAgeTogaGVpZ2h0XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNsaWRlcnMgPSBbXHJcbiAgICAgICAgICAvLyBhdm9pZCBqb2luaW5nIHRoZSB0d28gb2JqZWN0cyFcclxuICAgICAgICAgIHsgLi4ubmV3VmFsdWUgfSxcclxuICAgICAgICAgIHsgLi4ubmV3VmFsdWUgfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmFuZ2VQaWNrZXJcclxuICAgICAgICAgIC5kYXRhKHRoaXMuc2xpZGVycylcclxuICAgICAgICAgIC5zZWxlY3QoJ2NpcmNsZScpXHJcbiAgICAgICAgICAudHJhbnNpdGlvbigpXHJcbiAgICAgICAgICAuZWFzZShkMy5lYXNlUXVhZE91dClcclxuICAgICAgICAgIC5kdXJhdGlvbig1NTApXHJcbiAgICAgICAgICAuYXR0cignY3gnLCAoZCkgPT4gZC54KTtcclxuICAgICAgICBjb250cm9sc0xheWVyXHJcbiAgICAgICAgICAuc2VsZWN0KCdwYXRoLmJsdWVsaW5lJylcclxuICAgICAgICAgIC50cmFuc2l0aW9uKClcclxuICAgICAgICAgIC5lYXNlKGQzLmVhc2VRdWFkT3V0KVxyXG4gICAgICAgICAgLmR1cmF0aW9uKDU1MClcclxuICAgICAgICAgIC5hdHRyKCdkJywgZDMubGluZSgpKHRoaXMuc2xpZGVycy5tYXAoKGQpID0+IFtkLngsIGQueV0pKSk7XHJcbiAgICAgICAgY29udHJvbHNMYXllclxyXG4gICAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXHJcbiAgICAgICAgICAudHJhbnNpdGlvbigpXHJcbiAgICAgICAgICAuZWFzZShkMy5lYXNlUXVhZE91dClcclxuICAgICAgICAgIC5kdXJhdGlvbig1NTApXHJcbiAgICAgICAgICAuYXR0cigneCcsICgpID0+IHhBeGlzVmFsdWUpXHJcbiAgICAgICAgICAudGV4dCgoZCwgaSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXJhbmdlTW9kZSkgcmV0dXJuIGxhYmVsO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gaXRlbXMuZmluZCgoaXQpID0+IGl0LmxhYmVsID09PSBsYWJlbCk7XHJcbiAgICAgICAgICAgIGlmIChpID4gMCkgcmV0dXJuIGl0ZW0ucmFuZ2UubGFiZWw7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmxhYmVsO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgZy5zZWxlY3RBbGwoJ3JlY3QuYmFycycpLmF0dHIoJ2ZpbGwnLCAoZCkgPT4gY29sb3VyQmFycyhkKSk7XHJcbiAgICAgICAgdGhpcy50ZXh0Q29sbGlzaW9uKHRoaXMuc2xpZGVycyk7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdyYW5nZXNlbGVjdGVkJywgdGhpcy5nZXRTZWxlY3RlZFJhbmdlKCkpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBjb250cm9sc0xheWVyIC8vIGdyYXkgbGluZVxyXG4gICAgICAuYXBwZW5kKCdwYXRoJylcclxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2dyYXlsaW5lJylcclxuICAgICAgLmF0dHIoXHJcbiAgICAgICAgJ2QnLFxyXG4gICAgICAgIGQzLmxpbmUoKShbXHJcbiAgICAgICAgICBbMCwgaGVpZ2h0XSxcclxuICAgICAgICAgIFt3aWR0aCwgaGVpZ2h0XVxyXG4gICAgICAgIF0pXHJcbiAgICAgIClcclxuICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIDIpXHJcbiAgICAgIC5hdHRyKCdvcGFjaXR5JywgMSlcclxuICAgICAgLmF0dHIoJ3N0cm9rZScsICcjQzFDNUM3Jyk7XHJcblxyXG4gICAgY29udHJvbHNMYXllciAvLyBibHVlIGxpbmVcclxuICAgICAgLmFwcGVuZCgncGF0aCcpXHJcbiAgICAgIC5hdHRyKCdjbGFzcycsICdibHVlbGluZScpXHJcbiAgICAgIC5hdHRyKCdkJywgZDMubGluZSgpKHRoaXMuc2xpZGVycy5tYXAoKGQpID0+IFtkLngsIGQueV0pKSlcclxuICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIDIpXHJcbiAgICAgIC5hdHRyKCdzdHJva2UnLCBjb2xvdXJzLmFjY2VudCk7XHJcblxyXG4gICAgY29uc3QgcmFuZ2VQaWNrZXIgPSBjb250cm9sc0xheWVyXHJcbiAgICAgIC5zZWxlY3RBbGwoJ2cucmFuZ2VwaWNrZXInKVxyXG4gICAgICAuZGF0YSh0aGlzLnNsaWRlcnMuc29ydCgoYSwgYikgPT4gZDMuYXNjZW5kaW5nKGEueCwgYi54KSkpXHJcbiAgICAgIC5qb2luKCdnJylcclxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3JhbmdlcGlja2VyJyk7XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby10aGlzLWFsaWFzXHJcbiAgICBjb25zdCBzZWxmID0gdGhpczsgLy8gRklYTUU6IEFsbG93IHVzZSBvZiBjbGFzcyBcInRoaXNcIiBpbnNpZGUgZHJhZ2dpbmcgdXBkYXRlO1xyXG4gICAgLyoqXHJcbiAgICogQW5pbWF0ZSB0aGUgZWxlbWVudHMgd2hpbGUgdGhlIHVzZXIgaXMgZHJhZ2dpbmcgb25lIG9mIHRoZSByYW5nZSBzZWxlY3RvcnNcclxuICAgKi9cclxuICAgIGZ1bmN0aW9uIGRyYWdnaW5nVXBkYXRlKGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgIGNvbnN0IGxhYmVsID0gWHRvTEFCRUwoZXZlbnQueCk7XHJcbiAgICAgIGNvbnN0IHhBeGlzVmFsdWUgPSBMQUJFTHRvWChsYWJlbCkgKyBMQUJFTHRvWC5iYW5kd2lkdGgoKSAvIDI7XHJcbiAgICAgIGNvbnN0IHliID0gW107XHJcbiAgICAgIGcuc2VsZWN0QWxsKCdjaXJjbGUnKS5lYWNoKGZ1bmN0aW9uIHNldEJhbGxQb3NpdGlvbigpIHtcclxuICAgICAgICB5Yi5wdXNoKHsgeDogK2QzLnNlbGVjdCh0aGlzKS5hdHRyKCdjeCcpLCB5OiBoZWlnaHQgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZWxmLnNsaWRlcnMgPSB5Yi5zb3J0KChhLCBiKSA9PiBkMy5hc2NlbmRpbmcoYS54LCBiLngpKTtcclxuICAgICAgLy8gbW92ZSB0aGUgY2lyY2xlXHJcbiAgICAgIGQzLnNlbGVjdCh0aGlzKVxyXG4gICAgICAgIC5zZWxlY3QoJ2NpcmNsZScpXHJcbiAgICAgICAgLmF0dHIoJ2N4JywgZGF0YS54ID0geEF4aXNWYWx1ZSk7XHJcbiAgICAgIC8vIG1vdmUgdGhlIGJsdWUgbGluZVxyXG4gICAgICBjb250cm9sc0xheWVyXHJcbiAgICAgICAgLnNlbGVjdCgncGF0aC5ibHVlbGluZScpXHJcbiAgICAgICAgLmF0dHIoJ2QnLCBkMy5saW5lKCkoc2VsZi5zbGlkZXJzLm1hcCgoZCkgPT4gW2QueCwgZC55XSkpKTtcclxuICAgICAgLy8gY2hhbmdlIHRoZSB0ZXh0IHBvc2l0aW9uXHJcbiAgICAgIGQzLnNlbGVjdCh0aGlzKVxyXG4gICAgICAgIC5zZWxlY3QoJ3RleHQnKVxyXG4gICAgICAgIC5hdHRyKCd4JywgKCkgPT4geEF4aXNWYWx1ZSk7XHJcbiAgICAgIC8vIGNoYW5nZSB0aGUgdGV4dCB2YWx1ZXNcclxuICAgICAgY29udHJvbHNMYXllclxyXG4gICAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxyXG4gICAgICAgIC50ZXh0KChkKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBsID0gWHRvTEFCRUwoZC54KTtcclxuICAgICAgICAgIGlmICghcmFuZ2VNb2RlKSByZXR1cm4gbDtcclxuICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gc2VsZi5zbGlkZXJzLmZpbmRJbmRleCgoc2xpZGVyKSA9PiBzbGlkZXIueCA9PT0gZC54KTtcclxuICAgICAgICAgIGNvbnN0IHJhbmdlID0gc2VsZi5nZXRTZWxlY3RlZFJhbmdlKCk7XHJcbiAgICAgICAgICBpZiAocG9zaXRpb24gPT09IDEpIHJldHVybiByYW5nZVsxXTtcclxuICAgICAgICAgIHJldHVybiByYW5nZVswXTtcclxuICAgICAgICB9KTtcclxuICAgICAgc2VsZi50ZXh0Q29sbGlzaW9uKHNlbGYuc2xpZGVycyk7XHJcbiAgICAgIC8vIGNvbG91ciB0aGUgYmFyc1xyXG4gICAgICBnLnNlbGVjdEFsbCgncmVjdC5iYXJzJykuYXR0cignZmlsbCcsIChkKSA9PiBjb2xvdXJCYXJzKGQpKTtcclxuICAgIH1cclxuXHJcbiAgICByYW5nZVBpY2tlciAvLyBkcmFnIGhhbmRsZXJcclxuICAgICAgLmNhbGwoZDMuZHJhZygpXHJcbiAgICAgICAgLm9uKCdkcmFnJywgZHJhZ2dpbmdVcGRhdGUpXHJcbiAgICAgICAgLm9uKCdlbmQnLCAoZXZlbnQsIGRhdGEpID0+IHtcclxuICAgICAgICAgIC8vIHVwZGF0ZSBvbmUgbGFzdCB0aW1lIHRvIHByZXZlbnQgZGVzeW5jaW5nXHJcbiAgICAgICAgICBkcmFnZ2luZ1VwZGF0ZShldmVudCwgZGF0YSk7XHJcbiAgICAgICAgICAvLyBlbWl0IHRoZSBzZWxlY3RlZCByYW5nZVxyXG4gICAgICAgICAgdGhpcy5lbWl0KCdyYW5nZXNlbGVjdGVkJywgdGhpcy5nZXRTZWxlY3RlZFJhbmdlKCkpO1xyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICByYW5nZVBpY2tlclxyXG4gICAgICAuYXBwZW5kKCdjaXJjbGUnKVxyXG4gICAgICAuYXR0cignY3gnLCAoZCkgPT4gZC54KVxyXG4gICAgICAuYXR0cignY3knLCAoZCkgPT4gZC55KVxyXG4gICAgICAuYXR0cigncicsIDkpXHJcbiAgICAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJylcclxuICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIDIpXHJcbiAgICAgIC5hdHRyKCdzdHJva2UnLCBjb2xvdXJzLmFjY2VudClcclxuICAgICAgLmF0dHIoJ3N0eWxlJywgJ2N1cnNvcjogcG9pbnRlcicpO1xyXG5cclxuICAgIHJhbmdlUGlja2VyXHJcbiAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxyXG4gICAgICAuYXR0cignZm9udC1mYW1pbHknLCAnUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZicpXHJcbiAgICAgIC5hdHRyKCdmb250LXNpemUnLCAnMTJweCcpXHJcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxyXG4gICAgICAuYXR0cigneScsIChkKSA9PiBkLnkgKyBtYXJnaW4uYm90dG9tIC8gMilcclxuICAgICAgLmF0dHIoJ3gnLCAoZCkgPT4gZC54KVxyXG4gICAgICAuYXR0cignZmlsbCcsIGNvbG91cnMuYWNjZW50KVxyXG4gICAgICAudGV4dCgoZCwgaSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGwgPSBYdG9MQUJFTChkLngpO1xyXG4gICAgICAgIGlmIChyYW5nZU1vZGUgJiYgaSA9PT0gMSkge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubGFiZWwgPT09IGwpLnJhbmdlLmxhYmVsO1xyXG4gICAgICAgIH0gcmV0dXJuIGw7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGlmIChheGlzPy55QXhpcz8uc2hvdykge1xyXG4gICAgICBjb25zdCB5QXhpcyA9IGQzLmF4aXNMZWZ0KHNjYWxlSGVpZ2h0KVxyXG4gICAgICAgIC50aWNrcyhheGlzLnlBeGlzLnRpY2tBbW91bnQgPz8gMilcclxuICAgICAgICAudGlja1ZhbHVlcyhheGlzLnlBeGlzLnZhbHVlcyA/IGF4aXMueUF4aXMudmFsdWVzIDogbnVsbCk7XHJcbiAgICAgIGNvbnN0IHlBeGlzR3JvdXAgPSBzdmcuYXBwZW5kKCdnJylcclxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwgJHttYXJnaW4udG9wfSlgKVxyXG4gICAgICAgIC5jYWxsKHlBeGlzKTtcclxuXHJcbiAgICAgIHlBeGlzR3JvdXAuc2VsZWN0QWxsKCdwYXRoLCBsaW5lJykuc3R5bGUoJ3N0cm9rZScsIGNvbG91cnMuYWNjZW50KTtcclxuICAgICAgeUF4aXNHcm91cC5zZWxlY3RBbGwoJ3RleHQnKS5zdHlsZSgnZmlsbCcsIGNvbG91cnMuYWNjZW50KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvKiogQXZvaWQgY29sbGlzaW9uIG9mIHRoZSBzbGlkZXIgbGFiZWxzICovXHJcbiAgdGV4dENvbGxpc2lvbiA9IChzbGlkZXJzOiBTbGlkZXJzKSA9PiB7XHJcbiAgICAvLyBwcmUtcmVxdWlzaXRlc1xyXG4gICAgY29uc3QgY29udHJvbHNMYXllciA9IHRoaXMuZDMuc2VsZWN0KCdnLmNoYXJ0Jykuc2VsZWN0KCdnLmNvbnRyb2xzJyk7XHJcbiAgICBjb25zdCB7IGl0ZW1zLCBtYXJnaW4gfSA9IHRoaXMuZGF0YTtcclxuICAgIGNvbnN0IHJhbmdlTW9kZSA9IGl0ZW1zLmV2ZXJ5KChkKSA9PiBkLnJhbmdlKTtcclxuICAgIC8vIHJ1biBjb2xsaXNpb24gZGV0ZWN0aW9uXHJcbiAgICBjb25zdCBpc0NvbGxpZGluZyA9IHNsaWRlcnNbMF0ueCA9PT0gc2xpZGVyc1sxXS54O1xyXG4gICAgaWYgKHJhbmdlTW9kZSAmJiBpc0NvbGxpZGluZykge1xyXG4gICAgICBjb250cm9sc0xheWVyXHJcbiAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXHJcbiAgICAgICAgLmF0dHIoJ3knLCAoZCwgaSkgPT4gKGkgPiAwID8gZC55ICsgbWFyZ2luLmJvdHRvbSAvIDIgKyAxMiA6IGQueSArIG1hcmdpbi5ib3R0b20gLyAyKSlcclxuICAgICAgICAudGV4dCgoZCwgaSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmFuZ2UgPSB0aGlzLmdldFNlbGVjdGVkUmFuZ2UoKTtcclxuICAgICAgICAgIHJldHVybiByYW5nZVtpXTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnRyb2xzTGF5ZXJcclxuICAgICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcclxuICAgICAgICAuYXR0cigneScsIChkKSA9PiBkLnkgKyBtYXJnaW4uYm90dG9tIC8gMik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLyoqIEdldCB4LWF4aXMgcG9zaXRpb24gZnJvbSBsYWJlbCAqL1xyXG4gIGxhYmVsVG9YKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZDNcclxuICAgICAgLnNjYWxlQmFuZCgpXHJcbiAgICAgIC5kb21haW4odGhpcy5kYXRhLml0ZW1zLm1hcCgoZCkgPT4gZC5sYWJlbCkpXHJcbiAgICAgIC5yYW5nZShbMCwgdGhpcy5kYXRhLndpZHRoXSlcclxuICAgICAgLnBhZGRpbmdJbm5lcigwLjE3KVxyXG4gICAgICAucGFkZGluZ091dGVyKDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGFuIGV2ZW50IHdpdGggdmlld0JveCBjb29yZGluYXRlcyBhbmRcclxuICAgKiBwYXJzZSB0aGVtIGluIGFic29sdXRlIGNvb3JkaW5hdGVzXHJcbiAgICovXHJcbiAgZ2V0RXZlbnRDb29yZHMoZXZlbnQpOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0ge1xyXG4gICAgY29uc3QgbSA9IGV2ZW50LnRhcmdldC5nZXRTY3JlZW5DVE0oKTtcclxuICAgIGNvbnN0IHBvaW50ID0gdGhpcy5zdmcubm9kZSgpLmNyZWF0ZVNWR1BvaW50KCk7XHJcbiAgICBwb2ludC54ID0gZXZlbnQuY2xpZW50WDtcclxuICAgIHBvaW50LnkgPSBldmVudC5jbGllbnRZO1xyXG4gICAgcmV0dXJuIHBvaW50Lm1hdHJpeFRyYW5zZm9ybShtLmludmVyc2UoKSk7XHJcbiAgfVxyXG5cclxuICAvKiogUHVibGljIGFwaSB0aGF0IGFsbG93cyB0byBkaW5hbWljYWxseSBjaGFuZ2UgdGhlIGJhcnMgKi9cclxuICBzZXRCYXJzID0gKG5ld0JhcnMpID0+IHtcclxuICAgIHRoaXMuZGF0YS5pdGVtcyA9IG5ld0JhcnM7XHJcbiAgICB0aGlzLmRyYXcoKTtcclxuICAgIHRoaXMuZDMuc2VsZWN0QWxsKCdyZWN0LmJhcnMnKS5hdHRyKCdmaWxsJywgKGQpID0+IHRoaXMuY29sb3VyQmFycyhkKSk7XHJcbiAgfTtcclxuXHJcbiAgLyoqIFB1YmxpYyBhcGkgdGhhdCBhbGxvd3MgdG8gZGluYW1pY2FsbHkgY2hhbmdlIHRoZSBzbGlkZXIgcG9zaXRpb24gKi9cclxuICBzZXRTbGlkZXJzID0gKFtzdGFydExhYmVsLCBlbmRMYWJlbF06IExhYmVsQ291cGxlLCBlbWl0ID0gdHJ1ZSkgPT4ge1xyXG4gICAgLy8gc2V0U2xpZGVycyhbMTQ1MCwgMTU3NV0pXHJcbiAgICB0aGlzLmRhdGEuc2V0U2xpZGVycyA9IFtgJHtzdGFydExhYmVsfWAsIGAke2VuZExhYmVsfWBdO1xyXG4gICAgdGhpcy5kcmF3KCk7XHJcbiAgICB0aGlzLmQzLnNlbGVjdEFsbCgncmVjdC5iYXJzJykuYXR0cignZmlsbCcsIChkKSA9PiB0aGlzLmNvbG91ckJhcnMoZCkpO1xyXG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLmdldFNlbGVjdGVkUmFuZ2UoKTtcclxuICAgIGlmIChlbWl0KSB0aGlzLmVtaXQoJ3Jhbmdlc2VsZWN0ZWQnLCByYW5nZSk7XHJcbiAgICB0aGlzLnRleHRDb2xsaXNpb24odGhpcy5zbGlkZXJzKTtcclxuICAgIHJldHVybiByYW5nZTtcclxuICB9O1xyXG5cclxuICAvKiogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBsb2FkZWQgKi9cclxuICBlbWl0TG9hZGVkKHBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2xvYWRlZCcsIHBheWxvYWQpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2ICpuZ0lmPVwiZGF0YVwiIGNsYXNzPVwibjctaGlzdG9ncmFtLXJhbmdlXCI+XHJcbiAgICA8c3ZnICNoaXN0b2dyYW1SYW5nZSBbaWRdPVwiZGF0YS5jb250YWluZXJJZFwiPjwvc3ZnPlxyXG48L2Rpdj5cclxuIl19