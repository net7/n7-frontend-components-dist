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
            const { width, margin, height, items, colours, containerId, axis, setSliders, } = this.data;
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
                const index = Math.floor((value - paddingOuter) / eachBand);
                return domain[Math.max(0, Math.min(index, domain.length - 1))];
            };
            // YEAR SELECTION CIRCLES
            // let sliders;
            if (setSliders && this.sliders) {
                this.sliders = setSliders.map((d) => ({
                    x: LABELtoX(d) + LABELtoX.bandwidth() / 2,
                    y: height,
                }));
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
                    rangeMode ? rangeEnd.range.payload : rangeEnd.payload,
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
                    y: height,
                };
                this.sliders = [
                    // avoid joining the two objects!
                    { ...newValue },
                    { ...newValue },
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
                [width, height],
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
                    .attr('cx', (data.x = xAxisValue));
                // move the blue line
                controlsLayer
                    .select('path.blueline')
                    .attr('d', d3.line()(self.sliders.map((d) => [d.x, d.y])));
                // change the text position
                d3.select(this)
                    .select('text')
                    .attr('x', () => xAxisValue);
                // change the text values
                controlsLayer.selectAll('text').text((d) => {
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
                .call(d3
                .drag()
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
                const yAxis = d3
                    .axisLeft(scaleHeight)
                    .ticks(axis.yAxis.tickAmount ?? 2)
                    .tickValues(axis.yAxis.values ? axis.yAxis.values : null);
                const yAxisGroup = svg
                    .append('g')
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
                    .attr('y', (d, i) => i > 0 ? d.y + margin.bottom / 2 + 12 : d.y + margin.bottom / 2)
                    .text((d, i) => {
                    const range = this.getSelectedRange();
                    return range[i];
                });
            }
            else {
                controlsLayer.selectAll('text').attr('y', (d) => d.y + margin.bottom / 2);
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
                    if (this.data.setApi) {
                        // expose the component api
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: HistogramRangeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: HistogramRangeComponent, selector: "n7-histogram-range", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-histogram-range\">\n  <svg #histogramRange [id]=\"data.containerId\"></svg>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: HistogramRangeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-histogram-range', template: "<div *ngIf=\"data\" class=\"n7-histogram-range\">\n  <svg #histogramRange [id]=\"data.containerId\"></svg>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9ncmFtLXJhbmdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZHYtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2hpc3RvZ3JhbS1yYW5nZS9oaXN0b2dyYW0tcmFuZ2UudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvaGlzdG9ncmFtLXJhbmdlL2hpc3RvZ3JhbS1yYW5nZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlDQUF5QztBQUN6Qyw2QkFBNkI7QUFDN0IscUJBQXFCO0FBQ3JCLDZCQUE2QjtBQUU3QixPQUFPLEVBQXVCLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQTJGdEUsTUFBTSxPQUFPLHVCQUF1QjtJQUpwQztRQVdVLFlBQU8sR0FBWSxFQUFFLENBQUM7UUFLdEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQW9DeEIsU0FBSSxHQUFHLEdBQUcsRUFBRTtZQUNWLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDcEIsTUFBTSxFQUNKLEtBQUssRUFDTCxNQUFNLEVBQ04sTUFBTSxFQUNOLEtBQUssRUFDTCxPQUFPLEVBQ1AsV0FBVyxFQUNYLElBQUksRUFDSixVQUFVLEdBQ1gsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBRWQsa0JBQWtCO1lBQ2xCLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQzlDLE1BQU0sS0FBSyxDQUFD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LENBQUM7YUFDM0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDM0IsWUFBWSxDQUFDLElBQUksQ0FBQzthQUNsQixZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGNBQWMsQ0FBQyxLQUFLO1FBQ2xCLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMvQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDeEIsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ3hCLE9BQU8sS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBcUJELG1EQUFtRDtJQUNuRCxVQUFVLENBQUMsT0FBTztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7OEdBeGFVLHVCQUF1QjtrR0FBdkIsdUJBQXVCLGtHQ2hHcEMsc0hBR0E7OzJGRDZGYSx1QkFBdUI7a0JBSm5DLFNBQVM7K0JBQ0Usb0JBQW9COzhCQUlyQixJQUFJO3NCQUFaLEtBQUs7Z0JBRUcsSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBISVNUT0dSQU0tUkFOR0UudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IEFmdGVyQ29udGVudENoZWNrZWQsIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8qKlxuICogSW50ZXJmYWNlIGZvciBIaXN0b2dyYW1SYW5nZUNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSGlzdG9ncmFtUmFuZ2VEYXRhIHtcbiAgLyoqXG4gICAqIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgaGlzdG9ncmFtLXJhbmdlIHN2Z1xuICAgKi9cbiAgY29udGFpbmVySWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIHRvdGFsIHdpZHRoIGZvciB0aGUgc3ZnIGVsZW1lbnRcbiAgICovXG4gIHdpZHRoOiBudW1iZXI7XG4gIC8qKlxuICAgKiB0b3RhbCBoZWlnaHQgZm9yIHRoZSBzdmcgZWxlbWVudFxuICAgKi9cbiAgaGVpZ2h0OiBudW1iZXI7XG4gIC8qKlxuICAgKiBJbnRlcm5hbCBtYXJnaW5zIG9mIHRoZSBzdmdcbiAgICovXG4gIG1hcmdpbjoge1xuICAgIGxlZnQ6IG51bWJlcjtcbiAgICByaWdodDogbnVtYmVyO1xuICAgIHRvcDogbnVtYmVyO1xuICAgIGJvdHRvbTogbnVtYmVyO1xuICB9O1xuICAvKipcbiAgICogVGhlbWUgb2YgdGhlIGhpc3RvZ3JhbVxuICAgKi9cbiAgY29sb3Vyczoge1xuICAgIHRvcDogc3RyaW5nO1xuICAgIGJvdHRvbTogc3RyaW5nO1xuICAgIGFjY2VudDogc3RyaW5nO1xuICB9O1xuICAvKipcbiAgICogRGF0YSBmb3IgdGhlIGhpc3RvZ3JhbSBiYXJzXG4gICAqL1xuICBpdGVtczoge1xuICAgIC8qKiBkZWZhdWx0IGxhYmVsIG9mIHRoZSBpdGVtICovXG4gICAgbGFiZWw6IHN0cmluZztcbiAgICAvKiogeS1heGlzIHZhbHVlIG9mIHRoZSBiYXIgKGhlaWdodCkgKi9cbiAgICB2YWx1ZTogbnVtYmVyO1xuICAgIC8qKiBwYXlsb2FkIHRoYXQgdGhlIGl0ZW0gc2hvdWxkIGVtaXQgd2hlbiBzZWxlY3RlZCAqL1xuICAgIHBheWxvYWQ6IGFueTtcbiAgICAvKipcbiAgICAgKiAndXBwZXInIHZhbHVlcyBvZiB0aGUgcmFuZ2UuXG4gICAgICogb25seSB1c2VkIHdoZW4gZWFjaCBiYXIgcmVwcmVzZW50cyBhIHJhbmdlLlxuICAgICAqL1xuICAgIHJhbmdlPzoge1xuICAgICAgLyoqIGxhYmVsIGxvYWRlZCB3aGVuIHNlbGVjdGVkIGJ5IHRoZSByaWdodC1tb3N0IHBvaW50ZXIgKi9cbiAgICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgICAvKiogcGF5bG9hZCBlbWl0dGVkIHdoZW4gc2VsZWN0ZWQgYnkgdGhlIHJpZ2h0LW1vc3QgcG9pbnRlciAqL1xuICAgICAgcGF5bG9hZDogYW55O1xuICAgIH07XG4gIH1bXTtcbiAgLyoqXG4gICAqIEF4aXMgc2V0dGluZ3NcbiAgICovXG4gIGF4aXM/OiB7XG4gICAgLyoqIFkgQXhpcyBzZXR0aW5ncyAqL1xuICAgIHlBeGlzPzoge1xuICAgICAgLyoqIFR1cm4gb24gYW5kIG9mZiB0aGUgYXhpcyAqL1xuICAgICAgc2hvdz86IGJvb2xlYW47XG4gICAgICAvKiogTWFudWFsbHkgc2V0IHRoZSBheGlzIHZhbHVlcyB0byBzaG93ICovXG4gICAgICB2YWx1ZXM/OiBudW1iZXJbXTtcbiAgICAgIC8qKiBIb3cgbWFueSB0aWNrcyBkbyB5b3Ugd2FudCB0byBzZWUgKi9cbiAgICAgIHRpY2tBbW91bnQ/OiBudW1iZXI7XG4gICAgfTtcbiAgfTtcbiAgLyoqXG4gICAqIGV4cG9zZSB0aGUgZHJhdyBmdW5jdGlvbiBvdXRzaWRlIG9mIG43LWZyb250ZW5kL2NvbXBvbmVudHMgbGlicmFyeVxuICAgKiB0aGlzIGlzIG5lZWRlZCB0byByZWRyYXcgYnViYmxlLWNoYXJ0LWNvbXBvbmVudCBvbiBjb21tYW5kXG4gICAqL1xuICBzZXREcmF3PzogYW55O1xuICAvKipcbiAgICogc2V0U2xpZGVyc1xuICAgKi9cbiAgc2V0U2xpZGVycz86IExhYmVsQ291cGxlO1xuICAvKipcbiAgICogUHVibGljIGFwaVxuICAgKi9cbiAgc2V0QXBpPzogYW55O1xufVxuXG50eXBlIFNsaWRlcnMgPSB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1bXTtcbnR5cGUgTGFiZWxDb3VwbGUgPSBbc3RyaW5nLCBzdHJpbmddO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1oaXN0b2dyYW0tcmFuZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vaGlzdG9ncmFtLXJhbmdlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBIaXN0b2dyYW1SYW5nZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuICBASW5wdXQoKSBkYXRhOiBIaXN0b2dyYW1SYW5nZURhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIHByaXZhdGUgZDM7XG5cbiAgcHJpdmF0ZSBzbGlkZXJzOiBTbGlkZXJzID0gW107XG5cbiAgLyoqIGQzIHNlbGVjdGlvbiBzdmcgcm9vdCAqL1xuICBwcml2YXRlIHN2ZztcblxuICBwcml2YXRlIF9sb2FkZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIGNvbG91ckJhcnM7XG5cbiAgcHJpdmF0ZSBnZXRTZWxlY3RlZFJhbmdlO1xuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICAvKlxuICAgICAgICAgV2FpdHMgZm9yIHRoZSBkb20gdG8gYmUgbG9hZGVkLCB0aGVuIGZpcmVzIHRoZSBkcmF3IGZ1bmN0aW9uXG4gICAgICAgICB0aGF0IHJlbmRlcnMgdGhlIGNoYXJ0LlxuICAgICovXG4gICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgaWYgKHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xuICAgICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpbXBvcnQoJ2QzJykudGhlbigobW9kdWxlKSA9PiB7XG4gICAgICAgICAgdGhpcy5kMyA9IG1vZHVsZTtcbiAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgICB0aGlzLmVtaXRMb2FkZWQodHJ1ZSk7XG4gICAgICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuc2V0RHJhdykge1xuICAgICAgICAgICAgdGhpcy5kYXRhLnNldERyYXcodGhpcy5kcmF3KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuZGF0YS5zZXRBcGkpIHtcbiAgICAgICAgICAgIC8vIGV4cG9zZSB0aGUgY29tcG9uZW50IGFwaVxuICAgICAgICAgICAgdGhpcy5kYXRhLnNldEFwaSh7XG4gICAgICAgICAgICAgIHNldFNsaWRlcnM6IHRoaXMuc2V0U2xpZGVycyxcbiAgICAgICAgICAgICAgc2V0QmFyczogdGhpcy5zZXRCYXJzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkb3Qtbm90YXRpb25cbiAgICAgICAgICAvLyB3aW5kb3dbJ3NldFNsaWRlcnMnXSA9IHRoaXMuc2V0U2xpZGVycztcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkcmF3ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZDMgfSA9IHRoaXM7XG4gICAgY29uc3Qge1xuICAgICAgd2lkdGgsXG4gICAgICBtYXJnaW4sXG4gICAgICBoZWlnaHQsXG4gICAgICBpdGVtcyxcbiAgICAgIGNvbG91cnMsXG4gICAgICBjb250YWluZXJJZCxcbiAgICAgIGF4aXMsXG4gICAgICBzZXRTbGlkZXJzLFxuICAgIH0gPSB0aGlzLmRhdGE7XG5cbiAgICAvLyBkYXRhIHZhbGlkYXRpb25cbiAgICBjb25zdCByYW5nZU1vZGUgPSBpdGVtcy5ldmVyeSgoZCkgPT4gZC5yYW5nZSk7XG4gICAgaWYgKCFyYW5nZU1vZGUgJiYgaXRlbXMuc29tZSgoZCkgPT4gIWQucmFuZ2UpKSB7XG4gICAgICB0aHJvdyBFcnJvcignQWxsIGl0ZW1zIG11c3QgaGF2ZSB0aGUgXCJyYW5nZVwiIHByb3BlcnR5Jyk7XG4gICAgfVxuXG4gICAgLy8gSGVscGVycyAtIFN0YXJ0OlxuICAgIGNvbnN0IExBQkVMdG9YID0gZDNcbiAgICAgIC5zY2FsZUJhbmQoKVxuICAgICAgLmRvbWFpbihpdGVtcy5tYXAoKGQpID0+IGQubGFiZWwpKVxuICAgICAgLnJhbmdlKFswLCB3aWR0aF0pXG4gICAgICAucGFkZGluZ0lubmVyKDAuMTcpXG4gICAgICAucGFkZGluZ091dGVyKDEpO1xuXG4gICAgY29uc3QgWHRvTEFCRUwgPSAodmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IGRvbWFpbiA9IExBQkVMdG9YLmRvbWFpbigpO1xuICAgICAgY29uc3QgcGFkZGluZ091dGVyID0gTEFCRUx0b1goZG9tYWluWzBdKTtcbiAgICAgIGNvbnN0IGVhY2hCYW5kID0gTEFCRUx0b1guc3RlcCgpO1xuICAgICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKCh2YWx1ZSAtIHBhZGRpbmdPdXRlcikgLyBlYWNoQmFuZCk7XG4gICAgICByZXR1cm4gZG9tYWluW01hdGgubWF4KDAsIE1hdGgubWluKGluZGV4LCBkb21haW4ubGVuZ3RoIC0gMSkpXTtcbiAgICB9O1xuXG4gICAgLy8gWUVBUiBTRUxFQ1RJT04gQ0lSQ0xFU1xuICAgIC8vIGxldCBzbGlkZXJzO1xuICAgIGlmIChzZXRTbGlkZXJzICYmIHRoaXMuc2xpZGVycykge1xuICAgICAgdGhpcy5zbGlkZXJzID0gc2V0U2xpZGVycy5tYXAoKGQpID0+ICh7XG4gICAgICAgIHg6IExBQkVMdG9YKGQpICsgTEFCRUx0b1guYmFuZHdpZHRoKCkgLyAyLFxuICAgICAgICB5OiBoZWlnaHQsXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2xpZGVycyA9IGQzXG4gICAgICAgIC5leHRlbnQoaXRlbXMsIChkKSA9PiBkLmxhYmVsKVxuICAgICAgICAubWFwKChkKSA9PiAoeyB4OiBMQUJFTHRvWChkKSArIExBQkVMdG9YLmJhbmR3aWR0aCgpIC8gMiwgeTogaGVpZ2h0IH0pKTtcbiAgICB9XG5cbiAgICBjb25zdCBpc0luUmFuZ2UgPSAoeSkgPT4ge1xuICAgICAgY29uc3QgYWxsSXRlbXMgPSB0aGlzLnNsaWRlcnMubWFwKChkKSA9PiBYdG9MQUJFTChkLngpKTtcbiAgICAgIGlmICh5ID49IGQzLm1pbihhbGxJdGVtcykgJiYgeSA8PSBkMy5tYXgoYWxsSXRlbXMpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY29sb3VyQmFycyhkKSB7XG4gICAgICBpZiAoaXNJblJhbmdlKGQubGFiZWwpKSByZXR1cm4gJ3VybCgjZ3JhZGllbnQpJztcbiAgICAgIHJldHVybiAnI2UzZTNlMyc7XG4gICAgfVxuICAgIHRoaXMuY29sb3VyQmFycyA9IGNvbG91ckJhcnM7XG5cbiAgICB0aGlzLmdldFNlbGVjdGVkUmFuZ2UgPSAoKSA9PiB7XG4gICAgICBjb25zdCByYW5nZVN0YXJ0ID0gaXRlbXMuZmluZChcbiAgICAgICAgKGl0KSA9PiBpdC5sYWJlbCA9PT0gWHRvTEFCRUwodGhpcy5zbGlkZXJzWzBdLngpXG4gICAgICApO1xuICAgICAgY29uc3QgcmFuZ2VFbmQgPSBpdGVtcy5maW5kKFxuICAgICAgICAoaXQpID0+IGl0LmxhYmVsID09PSBYdG9MQUJFTCh0aGlzLnNsaWRlcnNbMV0ueClcbiAgICAgICk7XG4gICAgICByZXR1cm4gW1xuICAgICAgICByYW5nZVN0YXJ0LnBheWxvYWQsXG4gICAgICAgIHJhbmdlTW9kZSA/IHJhbmdlRW5kLnJhbmdlLnBheWxvYWQgOiByYW5nZUVuZC5wYXlsb2FkLFxuICAgICAgXTtcbiAgICB9O1xuICAgIC8vIEhlbHBlcnMgLSBFbmQuXG5cbiAgICAvLyBjbGVhciBIVE1MIGNvbnRlbnRzXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySWQpLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHN2ZyA9IGQzXG4gICAgICAuc2VsZWN0KGAjJHtjb250YWluZXJJZH1gKVxuICAgICAgLmF0dHIoXG4gICAgICAgICd2aWV3Qm94JyxcbiAgICAgICAgYDAgMCAke3dpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHR9ICR7aGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b219YFxuICAgICAgKTtcbiAgICB0aGlzLnN2ZyA9IHN2ZztcblxuICAgIGNvbnN0IHNjYWxlSGVpZ2h0ID0gZDNcbiAgICAgIC5zY2FsZVN5bWxvZygpIC8vIG1vc3Qgc2ltaWxhciBzY2FsZSB0byB0aGUgb3JpZ2luYWxcbiAgICAgIC5kb21haW4oWzAsIGQzLm1heChpdGVtcywgKGQpID0+IGQudmFsdWUpXSlcbiAgICAgIC5yYW5nZShbaGVpZ2h0LCAwXSk7XG5cbiAgICAvLyBHUkFESUVOVFxuICAgIGNvbnN0IGRlZnMgPSBzdmcuYXBwZW5kKCdkZWZzJyk7IC8vIGRlZmluaXRpb25zXG4gICAgY29uc3QgZ3JhZGllbnQgPSBkZWZzXG4gICAgICAuYXBwZW5kKCdsaW5lYXJHcmFkaWVudCcpXG4gICAgICAuYXR0cignaWQnLCAnZ3JhZGllbnQnKVxuICAgICAgLmF0dHIoJ2dyYWRpZW50VW5pdHMnLCAndXNlclNwYWNlT25Vc2UnKVxuICAgICAgLmF0dHIoJ3gxJywgMClcbiAgICAgIC5hdHRyKCd5MScsIGhlaWdodClcbiAgICAgIC5hdHRyKCd4MicsIDApXG4gICAgICAuYXR0cigneTInLCBtYXJnaW4udG9wKTtcbiAgICBncmFkaWVudFxuICAgICAgLmFwcGVuZCgnc3RvcCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnc3RhcnQnKVxuICAgICAgLmF0dHIoJ29mZnNldCcsICcwJScpXG4gICAgICAuYXR0cignc3RvcC1jb2xvcicsIGNvbG91cnMuYm90dG9tKSAvLyBib3R0b20gZ3JhZGllbnRcbiAgICAgIC5hdHRyKCdzdG9wLW9wYWNpdHknLCAxKTtcbiAgICBncmFkaWVudFxuICAgICAgLmFwcGVuZCgnc3RvcCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZW5kJylcbiAgICAgIC5hdHRyKCdvZmZzZXQnLCAnMTAwJScpXG4gICAgICAuYXR0cignc3RvcC1jb2xvcicsIGNvbG91cnMudG9wKSAvLyB0b3AgZ3JhZGllbnRcbiAgICAgIC5hdHRyKCdzdG9wLW9wYWNpdHknLCAxKTtcblxuICAgIC8vIERSQVcgSU5TSURFIE1BUkdJTlNcbiAgICBjb25zdCBnID0gc3ZnXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdjaGFydCcpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke21hcmdpbi50b3B9KWApO1xuXG4gICAgY29uc3QgYmFyc0xheWVyID0gZy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdiYXJzJyk7XG4gICAgY29uc3QgY29udHJvbHNMYXllciA9IGcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnY29udHJvbHMnKTtcblxuICAgIC8vIEJBUiBDSEFSVFxuICAgIGJhcnNMYXllciAvLyBiYXJzXG4gICAgICAuc2VsZWN0QWxsKCdyZWN0LmJhcnMnKVxuICAgICAgLmRhdGEoaXRlbXMpXG4gICAgICAuam9pbigncmVjdCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnYmFycycpXG4gICAgICAuYXR0cignd2lkdGgnLCBMQUJFTHRvWC5iYW5kd2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0JywgKGQpID0+IGhlaWdodCAtIHNjYWxlSGVpZ2h0KGQudmFsdWUpKVxuICAgICAgLmF0dHIoJ3knLCAoZCkgPT4gc2NhbGVIZWlnaHQoZC52YWx1ZSkpXG4gICAgICAuYXR0cigneCcsIChkKSA9PiBMQUJFTHRvWChkLmxhYmVsKSlcbiAgICAgIC5hdHRyKCdkYXRhLXN0YXJ0JywgKGQpID0+IGQucGF5bG9hZCkgLy8gbWFrZSB0aGUgZGF0YSBlYXNpbHkgYWNjZXNzaWJsZVxuICAgICAgLmF0dHIoJ2RhdGEtZW5kJywgKGQpID0+IChkLnJhbmdlID8gZC5yYW5nZS5wYXlsb2FkIDogZC5wYXlsb2FkKSlcbiAgICAgIC5hdHRyKCdmaWxsJywgJ3VybCgjZ3JhZGllbnQpJyk7XG5cbiAgICBiYXJzTGF5ZXIgLy8gY2F0Y2ggYmFyIGV2ZW50c1xuICAgICAgLm9uKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgeWVhciA9IFh0b0xBQkVMKHRoaXMuZ2V0RXZlbnRDb29yZHMoZXZlbnQpLngpO1xuICAgICAgICBkMy5zZWxlY3RBbGwoJ3JlY3QuYmFycycpLmF0dHIoJ2ZpbGwnLCAoZCkgPT4ge1xuICAgICAgICAgIGlmICh5ZWFyID09PSBkLmxhYmVsKSByZXR1cm4gJyNCMENDRjgnO1xuICAgICAgICAgIHJldHVybiBjb2xvdXJCYXJzKGQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAub24oJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICBkMy5zZWxlY3RBbGwoJ3JlY3QuYmFycycpLmF0dHIoJ2ZpbGwnLCAoZCkgPT4gY29sb3VyQmFycyhkKSk7XG4gICAgICB9KVxuICAgICAgLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBsYWJlbCA9IFh0b0xBQkVMKHRoaXMuZ2V0RXZlbnRDb29yZHMoZXZlbnQpLngpO1xuICAgICAgICBjb25zdCB4QXhpc1ZhbHVlID0gTEFCRUx0b1gobGFiZWwpICsgTEFCRUx0b1guYmFuZHdpZHRoKCkgLyAyO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHtcbiAgICAgICAgICB4OiB4QXhpc1ZhbHVlLFxuICAgICAgICAgIHk6IGhlaWdodCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zbGlkZXJzID0gW1xuICAgICAgICAgIC8vIGF2b2lkIGpvaW5pbmcgdGhlIHR3byBvYmplY3RzIVxuICAgICAgICAgIHsgLi4ubmV3VmFsdWUgfSxcbiAgICAgICAgICB7IC4uLm5ld1ZhbHVlIH0sXG4gICAgICAgIF07XG4gICAgICAgIHJhbmdlUGlja2VyXG4gICAgICAgICAgLmRhdGEodGhpcy5zbGlkZXJzKVxuICAgICAgICAgIC5zZWxlY3QoJ2NpcmNsZScpXG4gICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5lYXNlKGQzLmVhc2VRdWFkT3V0KVxuICAgICAgICAgIC5kdXJhdGlvbig1NTApXG4gICAgICAgICAgLmF0dHIoJ2N4JywgKGQpID0+IGQueCk7XG4gICAgICAgIGNvbnRyb2xzTGF5ZXJcbiAgICAgICAgICAuc2VsZWN0KCdwYXRoLmJsdWVsaW5lJylcbiAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmVhc2UoZDMuZWFzZVF1YWRPdXQpXG4gICAgICAgICAgLmR1cmF0aW9uKDU1MClcbiAgICAgICAgICAuYXR0cignZCcsIGQzLmxpbmUoKSh0aGlzLnNsaWRlcnMubWFwKChkKSA9PiBbZC54LCBkLnldKSkpO1xuICAgICAgICBjb250cm9sc0xheWVyXG4gICAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5lYXNlKGQzLmVhc2VRdWFkT3V0KVxuICAgICAgICAgIC5kdXJhdGlvbig1NTApXG4gICAgICAgICAgLmF0dHIoJ3gnLCAoKSA9PiB4QXhpc1ZhbHVlKVxuICAgICAgICAgIC50ZXh0KChkLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXJhbmdlTW9kZSkgcmV0dXJuIGxhYmVsO1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zLmZpbmQoKGl0KSA9PiBpdC5sYWJlbCA9PT0gbGFiZWwpO1xuICAgICAgICAgICAgaWYgKGkgPiAwKSByZXR1cm4gaXRlbS5yYW5nZS5sYWJlbDtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmxhYmVsO1xuICAgICAgICAgIH0pO1xuICAgICAgICBnLnNlbGVjdEFsbCgncmVjdC5iYXJzJykuYXR0cignZmlsbCcsIChkKSA9PiBjb2xvdXJCYXJzKGQpKTtcbiAgICAgICAgdGhpcy50ZXh0Q29sbGlzaW9uKHRoaXMuc2xpZGVycyk7XG4gICAgICAgIHRoaXMuZW1pdCgncmFuZ2VzZWxlY3RlZCcsIHRoaXMuZ2V0U2VsZWN0ZWRSYW5nZSgpKTtcbiAgICAgIH0pO1xuXG4gICAgY29udHJvbHNMYXllciAvLyBncmF5IGxpbmVcbiAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2dyYXlsaW5lJylcbiAgICAgIC5hdHRyKFxuICAgICAgICAnZCcsXG4gICAgICAgIGQzLmxpbmUoKShbXG4gICAgICAgICAgWzAsIGhlaWdodF0sXG4gICAgICAgICAgW3dpZHRoLCBoZWlnaHRdLFxuICAgICAgICBdKVxuICAgICAgKVxuICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIDIpXG4gICAgICAuYXR0cignb3BhY2l0eScsIDEpXG4gICAgICAuYXR0cignc3Ryb2tlJywgJyNDMUM1QzcnKTtcblxuICAgIGNvbnRyb2xzTGF5ZXIgLy8gYmx1ZSBsaW5lXG4gICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdibHVlbGluZScpXG4gICAgICAuYXR0cignZCcsIGQzLmxpbmUoKSh0aGlzLnNsaWRlcnMubWFwKChkKSA9PiBbZC54LCBkLnldKSkpXG4gICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgMilcbiAgICAgIC5hdHRyKCdzdHJva2UnLCBjb2xvdXJzLmFjY2VudCk7XG5cbiAgICBjb25zdCByYW5nZVBpY2tlciA9IGNvbnRyb2xzTGF5ZXJcbiAgICAgIC5zZWxlY3RBbGwoJ2cucmFuZ2VwaWNrZXInKVxuICAgICAgLmRhdGEodGhpcy5zbGlkZXJzLnNvcnQoKGEsIGIpID0+IGQzLmFzY2VuZGluZyhhLngsIGIueCkpKVxuICAgICAgLmpvaW4oJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3JhbmdlcGlja2VyJyk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXRoaXMtYWxpYXNcbiAgICBjb25zdCBzZWxmID0gdGhpczsgLy8gRklYTUU6IEFsbG93IHVzZSBvZiBjbGFzcyBcInRoaXNcIiBpbnNpZGUgZHJhZ2dpbmcgdXBkYXRlO1xuICAgIC8qKlxuICAgICAqIEFuaW1hdGUgdGhlIGVsZW1lbnRzIHdoaWxlIHRoZSB1c2VyIGlzIGRyYWdnaW5nIG9uZSBvZiB0aGUgcmFuZ2Ugc2VsZWN0b3JzXG4gICAgICovXG4gICAgZnVuY3Rpb24gZHJhZ2dpbmdVcGRhdGUoZXZlbnQsIGRhdGEpIHtcbiAgICAgIGNvbnN0IGxhYmVsID0gWHRvTEFCRUwoZXZlbnQueCk7XG4gICAgICBjb25zdCB4QXhpc1ZhbHVlID0gTEFCRUx0b1gobGFiZWwpICsgTEFCRUx0b1guYmFuZHdpZHRoKCkgLyAyO1xuICAgICAgY29uc3QgeWIgPSBbXTtcbiAgICAgIGcuc2VsZWN0QWxsKCdjaXJjbGUnKS5lYWNoKGZ1bmN0aW9uIHNldEJhbGxQb3NpdGlvbigpIHtcbiAgICAgICAgeWIucHVzaCh7IHg6ICtkMy5zZWxlY3QodGhpcykuYXR0cignY3gnKSwgeTogaGVpZ2h0IH0pO1xuICAgICAgfSk7XG4gICAgICBzZWxmLnNsaWRlcnMgPSB5Yi5zb3J0KChhLCBiKSA9PiBkMy5hc2NlbmRpbmcoYS54LCBiLngpKTtcbiAgICAgIC8vIG1vdmUgdGhlIGNpcmNsZVxuICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIC5zZWxlY3QoJ2NpcmNsZScpXG4gICAgICAgIC5hdHRyKCdjeCcsIChkYXRhLnggPSB4QXhpc1ZhbHVlKSk7XG4gICAgICAvLyBtb3ZlIHRoZSBibHVlIGxpbmVcbiAgICAgIGNvbnRyb2xzTGF5ZXJcbiAgICAgICAgLnNlbGVjdCgncGF0aC5ibHVlbGluZScpXG4gICAgICAgIC5hdHRyKCdkJywgZDMubGluZSgpKHNlbGYuc2xpZGVycy5tYXAoKGQpID0+IFtkLngsIGQueV0pKSk7XG4gICAgICAvLyBjaGFuZ2UgdGhlIHRleHQgcG9zaXRpb25cbiAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAuc2VsZWN0KCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3gnLCAoKSA9PiB4QXhpc1ZhbHVlKTtcbiAgICAgIC8vIGNoYW5nZSB0aGUgdGV4dCB2YWx1ZXNcbiAgICAgIGNvbnRyb2xzTGF5ZXIuc2VsZWN0QWxsKCd0ZXh0JykudGV4dCgoZCkgPT4ge1xuICAgICAgICBjb25zdCBsID0gWHRvTEFCRUwoZC54KTtcbiAgICAgICAgaWYgKCFyYW5nZU1vZGUpIHJldHVybiBsO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHNlbGYuc2xpZGVycy5maW5kSW5kZXgoKHNsaWRlcikgPT4gc2xpZGVyLnggPT09IGQueCk7XG4gICAgICAgIGNvbnN0IHJhbmdlID0gc2VsZi5nZXRTZWxlY3RlZFJhbmdlKCk7XG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMSkgcmV0dXJuIHJhbmdlWzFdO1xuICAgICAgICByZXR1cm4gcmFuZ2VbMF07XG4gICAgICB9KTtcbiAgICAgIHNlbGYudGV4dENvbGxpc2lvbihzZWxmLnNsaWRlcnMpO1xuICAgICAgLy8gY29sb3VyIHRoZSBiYXJzXG4gICAgICBnLnNlbGVjdEFsbCgncmVjdC5iYXJzJykuYXR0cignZmlsbCcsIChkKSA9PiBjb2xvdXJCYXJzKGQpKTtcbiAgICB9XG5cbiAgICByYW5nZVBpY2tlciAvLyBkcmFnIGhhbmRsZXJcbiAgICAgIC5jYWxsKFxuICAgICAgICBkM1xuICAgICAgICAgIC5kcmFnKClcbiAgICAgICAgICAub24oJ2RyYWcnLCBkcmFnZ2luZ1VwZGF0ZSlcbiAgICAgICAgICAub24oJ2VuZCcsIChldmVudCwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgLy8gdXBkYXRlIG9uZSBsYXN0IHRpbWUgdG8gcHJldmVudCBkZXN5bmNpbmdcbiAgICAgICAgICAgIGRyYWdnaW5nVXBkYXRlKGV2ZW50LCBkYXRhKTtcbiAgICAgICAgICAgIC8vIGVtaXQgdGhlIHNlbGVjdGVkIHJhbmdlXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3Jhbmdlc2VsZWN0ZWQnLCB0aGlzLmdldFNlbGVjdGVkUmFuZ2UoKSk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICByYW5nZVBpY2tlclxuICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgIC5hdHRyKCdjeCcsIChkKSA9PiBkLngpXG4gICAgICAuYXR0cignY3knLCAoZCkgPT4gZC55KVxuICAgICAgLmF0dHIoJ3InLCA5KVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIDIpXG4gICAgICAuYXR0cignc3Ryb2tlJywgY29sb3Vycy5hY2NlbnQpXG4gICAgICAuYXR0cignc3R5bGUnLCAnY3Vyc29yOiBwb2ludGVyJyk7XG5cbiAgICByYW5nZVBpY2tlclxuICAgICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAuYXR0cignZm9udC1mYW1pbHknLCAnUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZicpXG4gICAgICAuYXR0cignZm9udC1zaXplJywgJzEycHgnKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneScsIChkKSA9PiBkLnkgKyBtYXJnaW4uYm90dG9tIC8gMilcbiAgICAgIC5hdHRyKCd4JywgKGQpID0+IGQueClcbiAgICAgIC5hdHRyKCdmaWxsJywgY29sb3Vycy5hY2NlbnQpXG4gICAgICAudGV4dCgoZCwgaSkgPT4ge1xuICAgICAgICBjb25zdCBsID0gWHRvTEFCRUwoZC54KTtcbiAgICAgICAgaWYgKHJhbmdlTW9kZSAmJiBpID09PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubGFiZWwgPT09IGwpLnJhbmdlLmxhYmVsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsO1xuICAgICAgfSk7XG5cbiAgICBpZiAoYXhpcz8ueUF4aXM/LnNob3cpIHtcbiAgICAgIGNvbnN0IHlBeGlzID0gZDNcbiAgICAgICAgLmF4aXNMZWZ0KHNjYWxlSGVpZ2h0KVxuICAgICAgICAudGlja3MoYXhpcy55QXhpcy50aWNrQW1vdW50ID8/IDIpXG4gICAgICAgIC50aWNrVmFsdWVzKGF4aXMueUF4aXMudmFsdWVzID8gYXhpcy55QXhpcy52YWx1ZXMgOiBudWxsKTtcbiAgICAgIGNvbnN0IHlBeGlzR3JvdXAgPSBzdmdcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCAke21hcmdpbi50b3B9KWApXG4gICAgICAgIC5jYWxsKHlBeGlzKTtcblxuICAgICAgeUF4aXNHcm91cC5zZWxlY3RBbGwoJ3BhdGgsIGxpbmUnKS5zdHlsZSgnc3Ryb2tlJywgY29sb3Vycy5hY2NlbnQpO1xuICAgICAgeUF4aXNHcm91cC5zZWxlY3RBbGwoJ3RleHQnKS5zdHlsZSgnZmlsbCcsIGNvbG91cnMuYWNjZW50KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqIEF2b2lkIGNvbGxpc2lvbiBvZiB0aGUgc2xpZGVyIGxhYmVscyAqL1xuICB0ZXh0Q29sbGlzaW9uID0gKHNsaWRlcnM6IFNsaWRlcnMpID0+IHtcbiAgICAvLyBwcmUtcmVxdWlzaXRlc1xuICAgIGNvbnN0IGNvbnRyb2xzTGF5ZXIgPSB0aGlzLmQzLnNlbGVjdCgnZy5jaGFydCcpLnNlbGVjdCgnZy5jb250cm9scycpO1xuICAgIGNvbnN0IHsgaXRlbXMsIG1hcmdpbiB9ID0gdGhpcy5kYXRhO1xuICAgIGNvbnN0IHJhbmdlTW9kZSA9IGl0ZW1zLmV2ZXJ5KChkKSA9PiBkLnJhbmdlKTtcbiAgICAvLyBydW4gY29sbGlzaW9uIGRldGVjdGlvblxuICAgIGNvbnN0IGlzQ29sbGlkaW5nID0gc2xpZGVyc1swXS54ID09PSBzbGlkZXJzWzFdLng7XG4gICAgaWYgKHJhbmdlTW9kZSAmJiBpc0NvbGxpZGluZykge1xuICAgICAgY29udHJvbHNMYXllclxuICAgICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3knLCAoZCwgaSkgPT5cbiAgICAgICAgICBpID4gMCA/IGQueSArIG1hcmdpbi5ib3R0b20gLyAyICsgMTIgOiBkLnkgKyBtYXJnaW4uYm90dG9tIC8gMlxuICAgICAgICApXG4gICAgICAgIC50ZXh0KChkLCBpKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmFuZ2UgPSB0aGlzLmdldFNlbGVjdGVkUmFuZ2UoKTtcbiAgICAgICAgICByZXR1cm4gcmFuZ2VbaV07XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250cm9sc0xheWVyLnNlbGVjdEFsbCgndGV4dCcpLmF0dHIoJ3knLCAoZCkgPT4gZC55ICsgbWFyZ2luLmJvdHRvbSAvIDIpO1xuICAgIH1cbiAgfTtcblxuICAvKiogR2V0IHgtYXhpcyBwb3NpdGlvbiBmcm9tIGxhYmVsICovXG4gIGxhYmVsVG9YKCkge1xuICAgIHJldHVybiB0aGlzLmQzXG4gICAgICAuc2NhbGVCYW5kKClcbiAgICAgIC5kb21haW4odGhpcy5kYXRhLml0ZW1zLm1hcCgoZCkgPT4gZC5sYWJlbCkpXG4gICAgICAucmFuZ2UoWzAsIHRoaXMuZGF0YS53aWR0aF0pXG4gICAgICAucGFkZGluZ0lubmVyKDAuMTcpXG4gICAgICAucGFkZGluZ091dGVyKDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiBldmVudCB3aXRoIHZpZXdCb3ggY29vcmRpbmF0ZXMgYW5kXG4gICAqIHBhcnNlIHRoZW0gaW4gYWJzb2x1dGUgY29vcmRpbmF0ZXNcbiAgICovXG4gIGdldEV2ZW50Q29vcmRzKGV2ZW50KTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHtcbiAgICBjb25zdCBtID0gZXZlbnQudGFyZ2V0LmdldFNjcmVlbkNUTSgpO1xuICAgIGNvbnN0IHBvaW50ID0gdGhpcy5zdmcubm9kZSgpLmNyZWF0ZVNWR1BvaW50KCk7XG4gICAgcG9pbnQueCA9IGV2ZW50LmNsaWVudFg7XG4gICAgcG9pbnQueSA9IGV2ZW50LmNsaWVudFk7XG4gICAgcmV0dXJuIHBvaW50Lm1hdHJpeFRyYW5zZm9ybShtLmludmVyc2UoKSk7XG4gIH1cblxuICAvKiogUHVibGljIGFwaSB0aGF0IGFsbG93cyB0byBkaW5hbWljYWxseSBjaGFuZ2UgdGhlIGJhcnMgKi9cbiAgc2V0QmFycyA9IChuZXdCYXJzKSA9PiB7XG4gICAgdGhpcy5kYXRhLml0ZW1zID0gbmV3QmFycztcbiAgICB0aGlzLmRyYXcoKTtcbiAgICB0aGlzLmQzLnNlbGVjdEFsbCgncmVjdC5iYXJzJykuYXR0cignZmlsbCcsIChkKSA9PiB0aGlzLmNvbG91ckJhcnMoZCkpO1xuICB9O1xuXG4gIC8qKiBQdWJsaWMgYXBpIHRoYXQgYWxsb3dzIHRvIGRpbmFtaWNhbGx5IGNoYW5nZSB0aGUgc2xpZGVyIHBvc2l0aW9uICovXG4gIHNldFNsaWRlcnMgPSAoW3N0YXJ0TGFiZWwsIGVuZExhYmVsXTogTGFiZWxDb3VwbGUsIGVtaXQgPSB0cnVlKSA9PiB7XG4gICAgLy8gc2V0U2xpZGVycyhbMTQ1MCwgMTU3NV0pXG4gICAgdGhpcy5kYXRhLnNldFNsaWRlcnMgPSBbYCR7c3RhcnRMYWJlbH1gLCBgJHtlbmRMYWJlbH1gXTtcbiAgICB0aGlzLmRyYXcoKTtcbiAgICB0aGlzLmQzLnNlbGVjdEFsbCgncmVjdC5iYXJzJykuYXR0cignZmlsbCcsIChkKSA9PiB0aGlzLmNvbG91ckJhcnMoZCkpO1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5nZXRTZWxlY3RlZFJhbmdlKCk7XG4gICAgaWYgKGVtaXQpIHRoaXMuZW1pdCgncmFuZ2VzZWxlY3RlZCcsIHJhbmdlKTtcbiAgICB0aGlzLnRleHRDb2xsaXNpb24odGhpcy5zbGlkZXJzKTtcbiAgICByZXR1cm4gcmFuZ2U7XG4gIH07XG5cbiAgLyoqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgbG9hZGVkICovXG4gIGVtaXRMb2FkZWQocGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdsb2FkZWQnLCBwYXlsb2FkKTtcbiAgfVxufVxuIiwiPGRpdiAqbmdJZj1cImRhdGFcIiBjbGFzcz1cIm43LWhpc3RvZ3JhbS1yYW5nZVwiPlxuICA8c3ZnICNoaXN0b2dyYW1SYW5nZSBbaWRdPVwiZGF0YS5jb250YWluZXJJZFwiPjwvc3ZnPlxuPC9kaXY+XG4iXX0=