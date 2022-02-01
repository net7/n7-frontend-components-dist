/* eslint-disable @typescript-eslint/no-use-before-define */
//---------------------------
// HISTOGRAM-RANGE.ts
//---------------------------
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class HistogramRangeComponent {
    constructor() {
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
            let sliders;
            if (setSliders) {
                sliders = setSliders
                    .map((d) => ({ x: LABELtoX(d) + LABELtoX.bandwidth() / 2, y: height }));
            }
            else {
                sliders = d3
                    .extent(items, (d) => d.label)
                    .map((d) => ({ x: LABELtoX(d) + LABELtoX.bandwidth() / 2, y: height }));
            }
            function isInRange(y) {
                const allItems = sliders.map((d) => XtoLABEL(d.x));
                if (y >= d3.min(allItems) && y <= d3.max(allItems))
                    return true;
                return false;
            }
            function colourBars(d) {
                if (isInRange(d.label))
                    return 'url(#gradient)';
                return '#e3e3e3';
            }
            this.colourBars = colourBars;
            function getSelectedRange() {
                const rangeStart = items.find((it) => it.label === XtoLABEL(sliders[0].x));
                const rangeEnd = items.find((it) => it.label === XtoLABEL(sliders[1].x));
                return [
                    rangeStart.payload,
                    rangeMode
                        ? rangeEnd.range.payload
                        : rangeEnd.payload
                ];
            }
            this.getSelectedRange = getSelectedRange;
            function textCollision() {
                const isColliding = sliders[0].x === sliders[1].x;
                // const [sliderLeft, sliderRight] = sliders;
                // let isColliding = false;
                // if ((+sliderLeft.x) > (sliderRight.x - 30)) isColliding = true;
                if (rangeMode && isColliding) {
                    controlsLayer
                        .selectAll('text')
                        .attr('y', (d, i) => (i > 0 ? d.y + margin.bottom / 2 + 12 : d.y + margin.bottom / 2))
                        .text((d, i) => {
                        const range = getSelectedRange();
                        return range[i];
                    });
                }
                else {
                    controlsLayer
                        .selectAll('text')
                        .attr('y', (d) => d.y + margin.bottom / 2);
                }
            }
            // Helpers - End.
            // clear HTML contents
            document.getElementById(containerId).innerHTML = '';
            const svg = d3
                .select(`#${containerId}`)
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom);
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
                const year = XtoLABEL(event.offsetX - margin.left);
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
                const label = XtoLABEL(event.offsetX - margin.left);
                const xAxisValue = LABELtoX(label) + LABELtoX.bandwidth() / 2;
                const newValue = {
                    x: xAxisValue,
                    y: height
                };
                sliders = [
                    // avoid joining the two objects!
                    { ...newValue },
                    { ...newValue }
                ];
                rangePicker
                    .data(sliders)
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
                    .attr('d', d3.line()(sliders.map((d) => [d.x, d.y])));
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
                textCollision();
                this.emit('rangeselected', getSelectedRange());
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
                .attr('d', d3.line()(sliders.map((d) => [d.x, d.y])))
                .attr('stroke-width', 2)
                .attr('stroke', colours.accent);
            const rangePicker = controlsLayer
                .selectAll('g.rangepicker')
                .data(sliders.sort((a, b) => d3.ascending(a.x, b.x)))
                .join('g')
                .attr('class', 'rangepicker');
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
                sliders = yb.sort((a, b) => d3.ascending(a.x, b.x));
                // move the circle
                d3.select(this)
                    .select('circle')
                    .attr('cx', data.x = xAxisValue);
                // move the blue line
                controlsLayer
                    .select('path.blueline')
                    .attr('d', d3.line()(sliders.map((d) => [d.x, d.y])));
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
                    const position = sliders.findIndex((slider) => slider.x === d.x);
                    const range = getSelectedRange();
                    if (position === 1)
                        return range[1];
                    return range[0];
                });
                textCollision();
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
                this.emit('rangeselected', getSelectedRange());
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
        this.setBars = (newBars) => {
            this.data.items = newBars;
            this.draw();
            this.d3.selectAll('rect.bars').attr('fill', (d) => this.colourBars(d));
        };
        this.setSliders = ([startLabel, endLabel]) => {
            this.data.setSliders = [startLabel, endLabel];
            this.draw();
            this.d3.selectAll('rect.bars').attr('fill', (d) => this.colourBars(d));
            const range = this.getSelectedRange();
            this.emit('rangeselected', range);
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
                });
            });
        }
    }
    labelToX() {
        return this.d3
            .scaleBand()
            .domain(this.data.items.map((d) => d.label))
            .range([0, this.data.width])
            .paddingInner(0.17)
            .paddingOuter(1);
    }
    emitLoaded(payload) {
        if (!this.emit)
            return;
        this.emit('loaded', payload);
    }
}
HistogramRangeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: HistogramRangeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HistogramRangeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: HistogramRangeComponent, selector: "n7-histogram-range", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-histogram-range\">\n    <svg #histogramRange [id]=\"data.containerId\"></svg>\n</div>\n", directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: HistogramRangeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-histogram-range', template: "<div *ngIf=\"data\" class=\"n7-histogram-range\">\n    <svg #histogramRange [id]=\"data.containerId\"></svg>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9ncmFtLXJhbmdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZHYtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2hpc3RvZ3JhbS1yYW5nZS9oaXN0b2dyYW0tcmFuZ2UudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvaGlzdG9ncmFtLXJhbmdlL2hpc3RvZ3JhbS1yYW5nZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDREQUE0RDtBQUM1RCw2QkFBNkI7QUFDN0IscUJBQXFCO0FBQ3JCLDZCQUE2QjtBQUU3QixPQUFPLEVBQXVCLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQXdGdEUsTUFBTSxPQUFPLHVCQUF1QjtJQUpwQztRQWFVLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFpQ3hCLFNBQUksR0FBRyxHQUFHLEVBQUU7WUFDVixNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLE1BQU0sRUFDSixLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFDckIsS0FBSyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQzNCLElBQUksRUFBRSxVQUFVLEVBQ2pCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUVkLGtCQUFrQjtZQUNsQixNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDN0MsTUFBTSxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQzthQUN6RDtZQUVE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QUFDLENBQUM7YUFDM0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDM0IsWUFBWSxDQUFDLElBQUksQ0FBQzthQUNsQixZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQWlCRCxVQUFVLENBQUMsT0FBTztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7O29IQTVYVSx1QkFBdUI7d0dBQXZCLHVCQUF1QixrR0M3RnBDLHdIQUdBOzJGRDBGYSx1QkFBdUI7a0JBSm5DLFNBQVM7K0JBQ0Usb0JBQW9COzhCQUlyQixJQUFJO3NCQUFaLEtBQUs7Z0JBRUcsSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSElTVE9HUkFNLVJBTkdFLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBBZnRlckNvbnRlbnRDaGVja2VkLCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vKipcbiAqIEludGVyZmFjZSBmb3IgSGlzdG9ncmFtUmFuZ2VDb21wb25lbnQncyBcImRhdGFcIlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEhpc3RvZ3JhbVJhbmdlRGF0YSB7XG4gIC8qKlxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGhpc3RvZ3JhbS1yYW5nZSBzdmdcbiAgICovXG4gIGNvbnRhaW5lcklkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0b3RhbCB3aWR0aCBmb3IgdGhlIHN2ZyBlbGVtZW50XG4gICAqL1xuICB3aWR0aDogbnVtYmVyO1xuICAvKipcbiAgICogdG90YWwgaGVpZ2h0IGZvciB0aGUgc3ZnIGVsZW1lbnRcbiAgICovXG4gIGhlaWdodDogbnVtYmVyO1xuICAvKipcbiAgICogSW50ZXJuYWwgbWFyZ2lucyBvZiB0aGUgc3ZnXG4gICAqL1xuICBtYXJnaW46IHtcbiAgICBsZWZ0OiBudW1iZXI7XG4gICAgcmlnaHQ6IG51bWJlcjtcbiAgICB0b3A6IG51bWJlcjtcbiAgICBib3R0b206IG51bWJlcjtcbiAgfTtcbiAgLyoqXG4gICAqIFRoZW1lIG9mIHRoZSBoaXN0b2dyYW1cbiAgICovXG4gIGNvbG91cnM6IHtcbiAgICB0b3A6IHN0cmluZztcbiAgICBib3R0b206IHN0cmluZztcbiAgICBhY2NlbnQ6IHN0cmluZztcbiAgfTtcbiAgLyoqXG4gICAqIERhdGEgZm9yIHRoZSBoaXN0b2dyYW0gYmFyc1xuICAgKi9cbiAgaXRlbXM6IHtcbiAgICAvKiogZGVmYXVsdCBsYWJlbCBvZiB0aGUgaXRlbSAqL1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgLyoqIHktYXhpcyB2YWx1ZSBvZiB0aGUgYmFyIChoZWlnaHQpICovXG4gICAgdmFsdWU6IG51bWJlcjtcbiAgICAvKiogcGF5bG9hZCB0aGF0IHRoZSBpdGVtIHNob3VsZCBlbWl0IHdoZW4gc2VsZWN0ZWQgKi9cbiAgICBwYXlsb2FkOiBhbnk7XG4gICAgLyoqXG4gICAgICogJ3VwcGVyJyB2YWx1ZXMgb2YgdGhlIHJhbmdlLlxuICAgICAqIG9ubHkgdXNlZCB3aGVuIGVhY2ggYmFyIHJlcHJlc2VudHMgYSByYW5nZS5cbiAgICAgKi9cbiAgICByYW5nZT86IHtcbiAgICAgIC8qKiBsYWJlbCBsb2FkZWQgd2hlbiBzZWxlY3RlZCBieSB0aGUgcmlnaHQtbW9zdCBwb2ludGVyICovXG4gICAgICBsYWJlbDogc3RyaW5nO1xuICAgICAgLyoqIHBheWxvYWQgZW1pdHRlZCB3aGVuIHNlbGVjdGVkIGJ5IHRoZSByaWdodC1tb3N0IHBvaW50ZXIgKi9cbiAgICAgIHBheWxvYWQ6IGFueTtcbiAgICB9O1xuICB9W107XG4gIC8qKlxuICAgKiBBeGlzIHNldHRpbmdzXG4gICAqL1xuICBheGlzPzoge1xuICAgIC8qKiBZIEF4aXMgc2V0dGluZ3MgKi9cbiAgICB5QXhpcz86IHtcbiAgICAgIC8qKiBUdXJuIG9uIGFuZCBvZmYgdGhlIGF4aXMgKi9cbiAgICAgIHNob3c/OiBib29sZWFuO1xuICAgICAgLyoqIE1hbnVhbGx5IHNldCB0aGUgYXhpcyB2YWx1ZXMgdG8gc2hvdyAqL1xuICAgICAgdmFsdWVzPzogbnVtYmVyW107XG4gICAgICAvKiogSG93IG1hbnkgdGlja3MgZG8geW91IHdhbnQgdG8gc2VlICovXG4gICAgICB0aWNrQW1vdW50PzogbnVtYmVyO1xuICAgIH07XG4gIH07XG4gIC8qKlxuICAgKiBleHBvc2UgdGhlIGRyYXcgZnVuY3Rpb24gb3V0c2lkZSBvZiBuNy1mcm9udGVuZC9jb21wb25lbnRzIGxpYnJhcnlcbiAgICogdGhpcyBpcyBuZWVkZWQgdG8gcmVkcmF3IGJ1YmJsZS1jaGFydC1jb21wb25lbnQgb24gY29tbWFuZFxuICAgKi9cbiAgc2V0RHJhdz86IGFueTtcbiAgLyoqXG4gICAqIHNldFNsaWRlcnNcbiAgICovXG4gIHNldFNsaWRlcnM/OiBbc3RyaW5nLCBzdHJpbmddO1xuICAvKipcbiAgICogUHVibGljIGFwaVxuICAgKi9cbiAgc2V0QXBpPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1oaXN0b2dyYW0tcmFuZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vaGlzdG9ncmFtLXJhbmdlLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEhpc3RvZ3JhbVJhbmdlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG4gIEBJbnB1dCgpIGRhdGE6IEhpc3RvZ3JhbVJhbmdlRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgcHJpdmF0ZSBkMztcblxuICBwcml2YXRlIHNsaWRlcnM6IHt4OiBudW1iZXI7IHk6IG51bWJlcn1bXTtcblxuICBwcml2YXRlIF9sb2FkZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIGNvbG91ckJhcnM7XG5cbiAgcHJpdmF0ZSBnZXRTZWxlY3RlZFJhbmdlO1xuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICAvKlxuICAgICBXYWl0cyBmb3IgdGhlIGRvbSB0byBiZSBsb2FkZWQsIHRoZW4gZmlyZXMgdGhlIGRyYXcgZnVuY3Rpb25cbiAgICAgdGhhdCByZW5kZXJzIHRoZSBjaGFydC5cbiAgICAqL1xuICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgIGlmICh0aGlzLl9sb2FkZWQpIHJldHVybjtcbiAgICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaW1wb3J0KCdkMycpLnRoZW4oKG1vZHVsZSkgPT4ge1xuICAgICAgICAgIHRoaXMuZDMgPSBtb2R1bGU7XG4gICAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgICAgdGhpcy5lbWl0TG9hZGVkKHRydWUpO1xuICAgICAgICAgIGlmICh0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLnNldERyYXcpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zZXREcmF3KHRoaXMuZHJhdyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLmRhdGEuc2V0QXBpKSB7IC8vIGV4cG9zZSB0aGUgY29tcG9uZW50IGFwaVxuICAgICAgICAgICAgdGhpcy5kYXRhLnNldEFwaSh7XG4gICAgICAgICAgICAgIHNldFNsaWRlcnM6IHRoaXMuc2V0U2xpZGVycyxcbiAgICAgICAgICAgICAgc2V0QmFyczogdGhpcy5zZXRCYXJzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBkMyB9ID0gdGhpcztcbiAgICBjb25zdCB7XG4gICAgICB3aWR0aCwgbWFyZ2luLCBoZWlnaHQsXG4gICAgICBpdGVtcywgY29sb3VycywgY29udGFpbmVySWQsXG4gICAgICBheGlzLCBzZXRTbGlkZXJzXG4gICAgfSA9IHRoaXMuZGF0YTtcblxuICAgIC8vIGRhdGEgdmFsaWRhdGlvblxuICAgIGNvbnN0IHJhbmdlTW9kZSA9IGl0ZW1zLmV2ZXJ5KChkKSA9PiBkLnJhbmdlKTtcbiAgICBpZiAoIXJhbmdlTW9kZSAmJiBpdGVtcy5zb21lKChkKSA9PiAhZC5yYW5nZSkpIHtcbiAgICAgIHRocm93IEVycm9yKCdBbGwgaXRlbXMgbXVzdCBoYXZlIHRoZSBcInJhbmdlXCIgcHJvcGVydHknKTtcbiAgICB9XG5cbiAgICAvLyBIZWxwZXJzIC0gU3RhcnQ6XG4gICAgY29uc3QgTEFCRUx0b1ggPSBkM1xuICAgICAgLnNjYWxlQmFuZCgpXG4gICAgICAuZG9tYWluKGl0ZW1zLm1hcCgoZCkgPT4gZC5sYWJlbCkpXG4gICAgICAucmFuZ2UoWzAsIHdpZHRoXSlcbiAgICAgIC5wYWRkaW5nSW5uZXIoMC4xNylcbiAgICAgIC5wYWRkaW5nT3V0ZXIoMSk7XG5cbiAgICBjb25zdCBYdG9MQUJFTCA9ICh2YWx1ZSkgPT4ge1xuICAgICAgY29uc3QgZG9tYWluID0gTEFCRUx0b1guZG9tYWluKCk7XG4gICAgICBjb25zdCBwYWRkaW5nT3V0ZXIgPSBMQUJFTHRvWChkb21haW5bMF0pO1xuICAgICAgY29uc3QgZWFjaEJhbmQgPSBMQUJFTHRvWC5zdGVwKCk7XG4gICAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoKCh2YWx1ZSAtIHBhZGRpbmdPdXRlcikgLyBlYWNoQmFuZCkpO1xuICAgICAgcmV0dXJuIGRvbWFpbltNYXRoLm1heCgwLCBNYXRoLm1pbihpbmRleCwgZG9tYWluLmxlbmd0aCAtIDEpKV07XG4gICAgfTtcblxuICAgIC8vIFlFQVIgU0VMRUNUSU9OIENJUkNMRVNcbiAgICBsZXQgc2xpZGVycztcbiAgICBpZiAoc2V0U2xpZGVycykge1xuICAgICAgc2xpZGVycyA9IHNldFNsaWRlcnNcbiAgICAgICAgLm1hcCgoZCkgPT4gKHsgeDogTEFCRUx0b1goZCkgKyBMQUJFTHRvWC5iYW5kd2lkdGgoKSAvIDIsIHk6IGhlaWdodCB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNsaWRlcnMgPSBkM1xuICAgICAgICAuZXh0ZW50KGl0ZW1zLCAoZCkgPT4gZC5sYWJlbClcbiAgICAgICAgLm1hcCgoZCkgPT4gKHsgeDogTEFCRUx0b1goZCkgKyBMQUJFTHRvWC5iYW5kd2lkdGgoKSAvIDIsIHk6IGhlaWdodCB9KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNJblJhbmdlKHkpIHtcbiAgICAgIGNvbnN0IGFsbEl0ZW1zID0gc2xpZGVycy5tYXAoKGQpID0+IFh0b0xBQkVMKGQueCkpO1xuICAgICAgaWYgKHkgPj0gZDMubWluKGFsbEl0ZW1zKSAmJiB5IDw9IGQzLm1heChhbGxJdGVtcykpIHJldHVybiB0cnVlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbG91ckJhcnMoZCkge1xuICAgICAgaWYgKGlzSW5SYW5nZShkLmxhYmVsKSkgcmV0dXJuICd1cmwoI2dyYWRpZW50KSc7XG4gICAgICByZXR1cm4gJyNlM2UzZTMnO1xuICAgIH1cbiAgICB0aGlzLmNvbG91ckJhcnMgPSBjb2xvdXJCYXJzO1xuXG4gICAgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRSYW5nZSgpIHtcbiAgICAgIGNvbnN0IHJhbmdlU3RhcnQgPSBpdGVtcy5maW5kKChpdCkgPT4gaXQubGFiZWwgPT09IFh0b0xBQkVMKHNsaWRlcnNbMF0ueCkpO1xuICAgICAgY29uc3QgcmFuZ2VFbmQgPSBpdGVtcy5maW5kKChpdCkgPT4gaXQubGFiZWwgPT09IFh0b0xBQkVMKHNsaWRlcnNbMV0ueCkpO1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgcmFuZ2VTdGFydC5wYXlsb2FkLFxuICAgICAgICByYW5nZU1vZGVcbiAgICAgICAgICA/IHJhbmdlRW5kLnJhbmdlLnBheWxvYWRcbiAgICAgICAgICA6IHJhbmdlRW5kLnBheWxvYWRcbiAgICAgIF07XG4gICAgfVxuICAgIHRoaXMuZ2V0U2VsZWN0ZWRSYW5nZSA9IGdldFNlbGVjdGVkUmFuZ2U7XG5cbiAgICBmdW5jdGlvbiB0ZXh0Q29sbGlzaW9uKCkge1xuICAgICAgY29uc3QgaXNDb2xsaWRpbmcgPSBzbGlkZXJzWzBdLnggPT09IHNsaWRlcnNbMV0ueDtcbiAgICAgIC8vIGNvbnN0IFtzbGlkZXJMZWZ0LCBzbGlkZXJSaWdodF0gPSBzbGlkZXJzO1xuICAgICAgLy8gbGV0IGlzQ29sbGlkaW5nID0gZmFsc2U7XG4gICAgICAvLyBpZiAoKCtzbGlkZXJMZWZ0LngpID4gKHNsaWRlclJpZ2h0LnggLSAzMCkpIGlzQ29sbGlkaW5nID0gdHJ1ZTtcbiAgICAgIGlmIChyYW5nZU1vZGUgJiYgaXNDb2xsaWRpbmcpIHtcbiAgICAgICAgY29udHJvbHNMYXllclxuICAgICAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAgIC5hdHRyKCd5JywgKGQsIGkpID0+IChpID4gMCA/IGQueSArIG1hcmdpbi5ib3R0b20gLyAyICsgMTIgOiBkLnkgKyBtYXJnaW4uYm90dG9tIC8gMikpXG4gICAgICAgICAgLnRleHQoKGQsIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gZ2V0U2VsZWN0ZWRSYW5nZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHJhbmdlW2ldO1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udHJvbHNMYXllclxuICAgICAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAgIC5hdHRyKCd5JywgKGQpID0+IGQueSArIG1hcmdpbi5ib3R0b20gLyAyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gSGVscGVycyAtIEVuZC5cblxuICAgIC8vIGNsZWFyIEhUTUwgY29udGVudHNcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJZCkuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3Qgc3ZnID0gZDNcbiAgICAgIC5zZWxlY3QoYCMke2NvbnRhaW5lcklkfWApXG4gICAgICAuYXR0cignd2lkdGgnLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKTtcblxuICAgIGNvbnN0IHNjYWxlSGVpZ2h0ID0gZDNcbiAgICAgIC5zY2FsZVN5bWxvZygpIC8vIG1vc3Qgc2ltaWxhciBzY2FsZSB0byB0aGUgb3JpZ2luYWxcbiAgICAgIC5kb21haW4oWzAsIGQzLm1heChpdGVtcywgKGQpID0+IGQudmFsdWUpXSlcbiAgICAgIC5yYW5nZShbaGVpZ2h0LCAwXSk7XG5cbiAgICAvLyBHUkFESUVOVFxuICAgIGNvbnN0IGRlZnMgPSBzdmcuYXBwZW5kKCdkZWZzJyk7IC8vIGRlZmluaXRpb25zXG4gICAgY29uc3QgZ3JhZGllbnQgPSBkZWZzXG4gICAgICAuYXBwZW5kKCdsaW5lYXJHcmFkaWVudCcpXG4gICAgICAuYXR0cignaWQnLCAnZ3JhZGllbnQnKVxuICAgICAgLmF0dHIoJ2dyYWRpZW50VW5pdHMnLCAndXNlclNwYWNlT25Vc2UnKVxuICAgICAgLmF0dHIoJ3gxJywgMClcbiAgICAgIC5hdHRyKCd5MScsIGhlaWdodClcbiAgICAgIC5hdHRyKCd4MicsIDApXG4gICAgICAuYXR0cigneTInLCBtYXJnaW4udG9wKTtcbiAgICBncmFkaWVudFxuICAgICAgLmFwcGVuZCgnc3RvcCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnc3RhcnQnKVxuICAgICAgLmF0dHIoJ29mZnNldCcsICcwJScpXG4gICAgICAuYXR0cignc3RvcC1jb2xvcicsIGNvbG91cnMuYm90dG9tKSAvLyBib3R0b20gZ3JhZGllbnRcbiAgICAgIC5hdHRyKCdzdG9wLW9wYWNpdHknLCAxKTtcbiAgICBncmFkaWVudFxuICAgICAgLmFwcGVuZCgnc3RvcCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZW5kJylcbiAgICAgIC5hdHRyKCdvZmZzZXQnLCAnMTAwJScpXG4gICAgICAuYXR0cignc3RvcC1jb2xvcicsIGNvbG91cnMudG9wKSAvLyB0b3AgZ3JhZGllbnRcbiAgICAgIC5hdHRyKCdzdG9wLW9wYWNpdHknLCAxKTtcblxuICAgIC8vIERSQVcgSU5TSURFIE1BUkdJTlNcbiAgICBjb25zdCBnID0gc3ZnXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdjaGFydCcpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke21hcmdpbi50b3B9KWApO1xuXG4gICAgY29uc3QgYmFyc0xheWVyID0gZy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdiYXJzJyk7XG4gICAgY29uc3QgY29udHJvbHNMYXllciA9IGcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnY29udHJvbHMnKTtcblxuICAgIC8vIEJBUiBDSEFSVFxuICAgIGJhcnNMYXllciAvLyBiYXJzXG4gICAgICAuc2VsZWN0QWxsKCdyZWN0LmJhcnMnKVxuICAgICAgLmRhdGEoaXRlbXMpXG4gICAgICAuam9pbigncmVjdCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnYmFycycpXG4gICAgICAuYXR0cignd2lkdGgnLCBMQUJFTHRvWC5iYW5kd2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0JywgKGQpID0+IGhlaWdodCAtIHNjYWxlSGVpZ2h0KGQudmFsdWUpKVxuICAgICAgLmF0dHIoJ3knLCAoZCkgPT4gc2NhbGVIZWlnaHQoZC52YWx1ZSkpXG4gICAgICAuYXR0cigneCcsIChkKSA9PiBMQUJFTHRvWChkLmxhYmVsKSlcbiAgICAgIC5hdHRyKCdkYXRhLXN0YXJ0JywgKGQpID0+IGQucGF5bG9hZCkgLy8gbWFrZSB0aGUgZGF0YSBlYXNpbHkgYWNjZXNzaWJsZVxuICAgICAgLmF0dHIoJ2RhdGEtZW5kJywgKGQpID0+IChkLnJhbmdlID8gZC5yYW5nZS5wYXlsb2FkIDogZC5wYXlsb2FkKSlcbiAgICAgIC5hdHRyKCdmaWxsJywgJ3VybCgjZ3JhZGllbnQpJyk7XG5cbiAgICBiYXJzTGF5ZXIgLy8gY2F0Y2ggYmFyIGV2ZW50c1xuICAgICAgLm9uKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgeWVhciA9IFh0b0xBQkVMKGV2ZW50Lm9mZnNldFggLSBtYXJnaW4ubGVmdCk7XG4gICAgICAgIGQzLnNlbGVjdEFsbCgncmVjdC5iYXJzJykuYXR0cignZmlsbCcsIChkKSA9PiB7XG4gICAgICAgICAgaWYgKHllYXIgPT09IGQubGFiZWwpIHJldHVybiAnI0IwQ0NGOCc7XG4gICAgICAgICAgcmV0dXJuIGNvbG91ckJhcnMoZCk7XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5vbignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgIGQzLnNlbGVjdEFsbCgncmVjdC5iYXJzJykuYXR0cignZmlsbCcsIChkKSA9PiBjb2xvdXJCYXJzKGQpKTtcbiAgICAgIH0pXG4gICAgICAub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gWHRvTEFCRUwoZXZlbnQub2Zmc2V0WCAtIG1hcmdpbi5sZWZ0KTtcbiAgICAgICAgY29uc3QgeEF4aXNWYWx1ZSA9IExBQkVMdG9YKGxhYmVsKSArIExBQkVMdG9YLmJhbmR3aWR0aCgpIC8gMjtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB7XG4gICAgICAgICAgeDogeEF4aXNWYWx1ZSxcbiAgICAgICAgICB5OiBoZWlnaHRcbiAgICAgICAgfTtcbiAgICAgICAgc2xpZGVycyA9IFtcbiAgICAgICAgICAvLyBhdm9pZCBqb2luaW5nIHRoZSB0d28gb2JqZWN0cyFcbiAgICAgICAgICB7IC4uLm5ld1ZhbHVlIH0sXG4gICAgICAgICAgeyAuLi5uZXdWYWx1ZSB9XG4gICAgICAgIF07XG4gICAgICAgIHJhbmdlUGlja2VyXG4gICAgICAgICAgLmRhdGEoc2xpZGVycylcbiAgICAgICAgICAuc2VsZWN0KCdjaXJjbGUnKVxuICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZWFzZShkMy5lYXNlUXVhZE91dClcbiAgICAgICAgICAuZHVyYXRpb24oNTUwKVxuICAgICAgICAgIC5hdHRyKCdjeCcsIChkKSA9PiBkLngpO1xuICAgICAgICBjb250cm9sc0xheWVyXG4gICAgICAgICAgLnNlbGVjdCgncGF0aC5ibHVlbGluZScpXG4gICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5lYXNlKGQzLmVhc2VRdWFkT3V0KVxuICAgICAgICAgIC5kdXJhdGlvbig1NTApXG4gICAgICAgICAgLmF0dHIoJ2QnLCBkMy5saW5lKCkoc2xpZGVycy5tYXAoKGQpID0+IFtkLngsIGQueV0pKSk7XG4gICAgICAgIGNvbnRyb2xzTGF5ZXJcbiAgICAgICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmVhc2UoZDMuZWFzZVF1YWRPdXQpXG4gICAgICAgICAgLmR1cmF0aW9uKDU1MClcbiAgICAgICAgICAuYXR0cigneCcsICgpID0+IHhBeGlzVmFsdWUpXG4gICAgICAgICAgLnRleHQoKGQsIGkpID0+IHtcbiAgICAgICAgICAgIGlmICghcmFuZ2VNb2RlKSByZXR1cm4gbGFiZWw7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gaXRlbXMuZmluZCgoaXQpID0+IGl0LmxhYmVsID09PSBsYWJlbCk7XG4gICAgICAgICAgICBpZiAoaSA+IDApIHJldHVybiBpdGVtLnJhbmdlLmxhYmVsO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubGFiZWw7XG4gICAgICAgICAgfSk7XG4gICAgICAgIGcuc2VsZWN0QWxsKCdyZWN0LmJhcnMnKS5hdHRyKCdmaWxsJywgKGQpID0+IGNvbG91ckJhcnMoZCkpO1xuICAgICAgICB0ZXh0Q29sbGlzaW9uKCk7XG4gICAgICAgIHRoaXMuZW1pdCgncmFuZ2VzZWxlY3RlZCcsIGdldFNlbGVjdGVkUmFuZ2UoKSk7XG4gICAgICB9KTtcblxuICAgIGNvbnRyb2xzTGF5ZXIgLy8gZ3JheSBsaW5lXG4gICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdncmF5bGluZScpXG4gICAgICAuYXR0cihcbiAgICAgICAgJ2QnLFxuICAgICAgICBkMy5saW5lKCkoW1xuICAgICAgICAgIFswLCBoZWlnaHRdLFxuICAgICAgICAgIFt3aWR0aCwgaGVpZ2h0XVxuICAgICAgICBdKVxuICAgICAgKVxuICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIDIpXG4gICAgICAuYXR0cignb3BhY2l0eScsIDEpXG4gICAgICAuYXR0cignc3Ryb2tlJywgJyNDMUM1QzcnKTtcblxuICAgIGNvbnRyb2xzTGF5ZXIgLy8gYmx1ZSBsaW5lXG4gICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdibHVlbGluZScpXG4gICAgICAuYXR0cignZCcsIGQzLmxpbmUoKShzbGlkZXJzLm1hcCgoZCkgPT4gW2QueCwgZC55XSkpKVxuICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIDIpXG4gICAgICAuYXR0cignc3Ryb2tlJywgY29sb3Vycy5hY2NlbnQpO1xuXG4gICAgY29uc3QgcmFuZ2VQaWNrZXIgPSBjb250cm9sc0xheWVyXG4gICAgICAuc2VsZWN0QWxsKCdnLnJhbmdlcGlja2VyJylcbiAgICAgIC5kYXRhKHNsaWRlcnMuc29ydCgoYSwgYikgPT4gZDMuYXNjZW5kaW5nKGEueCwgYi54KSkpXG4gICAgICAuam9pbignZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAncmFuZ2VwaWNrZXInKTtcblxuICAgIC8qKlxuICAgICAqIEFuaW1hdGUgdGhlIGVsZW1lbnRzIHdoaWxlIHRoZSB1c2VyIGlzIGRyYWdnaW5nIG9uZSBvZiB0aGUgcmFuZ2Ugc2VsZWN0b3JzXG4gICAgICovXG4gICAgZnVuY3Rpb24gZHJhZ2dpbmdVcGRhdGUoZXZlbnQsIGRhdGEpIHtcbiAgICAgIGNvbnN0IGxhYmVsID0gWHRvTEFCRUwoZXZlbnQueCk7XG4gICAgICBjb25zdCB4QXhpc1ZhbHVlID0gTEFCRUx0b1gobGFiZWwpICsgTEFCRUx0b1guYmFuZHdpZHRoKCkgLyAyO1xuICAgICAgY29uc3QgeWIgPSBbXTtcbiAgICAgIGcuc2VsZWN0QWxsKCdjaXJjbGUnKS5lYWNoKGZ1bmN0aW9uIHNldEJhbGxQb3NpdGlvbigpIHtcbiAgICAgICAgeWIucHVzaCh7IHg6ICtkMy5zZWxlY3QodGhpcykuYXR0cignY3gnKSwgeTogaGVpZ2h0IH0pO1xuICAgICAgfSk7XG4gICAgICBzbGlkZXJzID0geWIuc29ydCgoYSwgYikgPT4gZDMuYXNjZW5kaW5nKGEueCwgYi54KSk7XG4gICAgICAvLyBtb3ZlIHRoZSBjaXJjbGVcbiAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAuc2VsZWN0KCdjaXJjbGUnKVxuICAgICAgICAuYXR0cignY3gnLCBkYXRhLnggPSB4QXhpc1ZhbHVlKTtcbiAgICAgIC8vIG1vdmUgdGhlIGJsdWUgbGluZVxuICAgICAgY29udHJvbHNMYXllclxuICAgICAgICAuc2VsZWN0KCdwYXRoLmJsdWVsaW5lJylcbiAgICAgICAgLmF0dHIoJ2QnLCBkMy5saW5lKCkoc2xpZGVycy5tYXAoKGQpID0+IFtkLngsIGQueV0pKSk7XG4gICAgICAvLyBjaGFuZ2UgdGhlIHRleHQgcG9zaXRpb25cbiAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAuc2VsZWN0KCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3gnLCAoKSA9PiB4QXhpc1ZhbHVlKTtcbiAgICAgIC8vIGNoYW5nZSB0aGUgdGV4dCB2YWx1ZXNcbiAgICAgIGNvbnRyb2xzTGF5ZXJcbiAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC50ZXh0KChkKSA9PiB7XG4gICAgICAgICAgY29uc3QgbCA9IFh0b0xBQkVMKGQueCk7XG4gICAgICAgICAgaWYgKCFyYW5nZU1vZGUpIHJldHVybiBsO1xuICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gc2xpZGVycy5maW5kSW5kZXgoKHNsaWRlcikgPT4gc2xpZGVyLnggPT09IGQueCk7XG4gICAgICAgICAgY29uc3QgcmFuZ2UgPSBnZXRTZWxlY3RlZFJhbmdlKCk7XG4gICAgICAgICAgaWYgKHBvc2l0aW9uID09PSAxKSByZXR1cm4gcmFuZ2VbMV07XG4gICAgICAgICAgcmV0dXJuIHJhbmdlWzBdO1xuICAgICAgICB9KTtcbiAgICAgIHRleHRDb2xsaXNpb24oKTtcbiAgICAgIC8vIGNvbG91ciB0aGUgYmFyc1xuICAgICAgZy5zZWxlY3RBbGwoJ3JlY3QuYmFycycpLmF0dHIoJ2ZpbGwnLCAoZCkgPT4gY29sb3VyQmFycyhkKSk7XG4gICAgfVxuXG4gICAgcmFuZ2VQaWNrZXIgLy8gZHJhZyBoYW5kbGVyXG4gICAgICAuY2FsbChkMy5kcmFnKClcbiAgICAgICAgLm9uKCdkcmFnJywgZHJhZ2dpbmdVcGRhdGUpXG4gICAgICAgIC5vbignZW5kJywgKGV2ZW50LCBkYXRhKSA9PiB7XG4gICAgICAgICAgLy8gdXBkYXRlIG9uZSBsYXN0IHRpbWUgdG8gcHJldmVudCBkZXN5bmNpbmdcbiAgICAgICAgICBkcmFnZ2luZ1VwZGF0ZShldmVudCwgZGF0YSk7XG4gICAgICAgICAgLy8gZW1pdCB0aGUgc2VsZWN0ZWQgcmFuZ2VcbiAgICAgICAgICB0aGlzLmVtaXQoJ3Jhbmdlc2VsZWN0ZWQnLCBnZXRTZWxlY3RlZFJhbmdlKCkpO1xuICAgICAgICB9KSk7XG5cbiAgICByYW5nZVBpY2tlclxuICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgIC5hdHRyKCdjeCcsIChkKSA9PiBkLngpXG4gICAgICAuYXR0cignY3knLCAoZCkgPT4gZC55KVxuICAgICAgLmF0dHIoJ3InLCA5KVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIDIpXG4gICAgICAuYXR0cignc3Ryb2tlJywgY29sb3Vycy5hY2NlbnQpXG4gICAgICAuYXR0cignc3R5bGUnLCAnY3Vyc29yOiBwb2ludGVyJyk7XG5cbiAgICByYW5nZVBpY2tlclxuICAgICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAuYXR0cignZm9udC1mYW1pbHknLCAnUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZicpXG4gICAgICAuYXR0cignZm9udC1zaXplJywgJzEycHgnKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneScsIChkKSA9PiBkLnkgKyBtYXJnaW4uYm90dG9tIC8gMilcbiAgICAgIC5hdHRyKCd4JywgKGQpID0+IGQueClcbiAgICAgIC5hdHRyKCdmaWxsJywgY29sb3Vycy5hY2NlbnQpXG4gICAgICAudGV4dCgoZCwgaSkgPT4ge1xuICAgICAgICBjb25zdCBsID0gWHRvTEFCRUwoZC54KTtcbiAgICAgICAgaWYgKHJhbmdlTW9kZSAmJiBpID09PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubGFiZWwgPT09IGwpLnJhbmdlLmxhYmVsO1xuICAgICAgICB9IHJldHVybiBsO1xuICAgICAgfSk7XG5cbiAgICBpZiAoYXhpcz8ueUF4aXM/LnNob3cpIHtcbiAgICAgIGNvbnN0IHlBeGlzID0gZDMuYXhpc0xlZnQoc2NhbGVIZWlnaHQpXG4gICAgICAgIC50aWNrcyhheGlzLnlBeGlzLnRpY2tBbW91bnQgPz8gMilcbiAgICAgICAgLnRpY2tWYWx1ZXMoYXhpcy55QXhpcy52YWx1ZXMgPyBheGlzLnlBeGlzLnZhbHVlcyA6IG51bGwpO1xuICAgICAgY29uc3QgeUF4aXNHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwgJHttYXJnaW4udG9wfSlgKVxuICAgICAgICAuY2FsbCh5QXhpcyk7XG5cbiAgICAgIHlBeGlzR3JvdXAuc2VsZWN0QWxsKCdwYXRoLCBsaW5lJykuc3R5bGUoJ3N0cm9rZScsIGNvbG91cnMuYWNjZW50KTtcbiAgICAgIHlBeGlzR3JvdXAuc2VsZWN0QWxsKCd0ZXh0Jykuc3R5bGUoJ2ZpbGwnLCBjb2xvdXJzLmFjY2VudCk7XG4gICAgfVxuICB9XG5cbiAgbGFiZWxUb1goKSB7XG4gICAgcmV0dXJuIHRoaXMuZDNcbiAgICAgIC5zY2FsZUJhbmQoKVxuICAgICAgLmRvbWFpbih0aGlzLmRhdGEuaXRlbXMubWFwKChkKSA9PiBkLmxhYmVsKSlcbiAgICAgIC5yYW5nZShbMCwgdGhpcy5kYXRhLndpZHRoXSlcbiAgICAgIC5wYWRkaW5nSW5uZXIoMC4xNylcbiAgICAgIC5wYWRkaW5nT3V0ZXIoMSk7XG4gIH1cblxuICBzZXRCYXJzID0gKG5ld0JhcnMpID0+IHtcbiAgICB0aGlzLmRhdGEuaXRlbXMgPSBuZXdCYXJzO1xuICAgIHRoaXMuZHJhdygpO1xuICAgIHRoaXMuZDMuc2VsZWN0QWxsKCdyZWN0LmJhcnMnKS5hdHRyKCdmaWxsJywgKGQpID0+IHRoaXMuY29sb3VyQmFycyhkKSk7XG4gIH1cblxuICBzZXRTbGlkZXJzID0gKFtzdGFydExhYmVsLCBlbmRMYWJlbF0pID0+IHtcbiAgICB0aGlzLmRhdGEuc2V0U2xpZGVycyA9IFtzdGFydExhYmVsLCBlbmRMYWJlbF07XG4gICAgdGhpcy5kcmF3KCk7XG4gICAgdGhpcy5kMy5zZWxlY3RBbGwoJ3JlY3QuYmFycycpLmF0dHIoJ2ZpbGwnLCAoZCkgPT4gdGhpcy5jb2xvdXJCYXJzKGQpKTtcbiAgICBjb25zdCByYW5nZSA9IHRoaXMuZ2V0U2VsZWN0ZWRSYW5nZSgpO1xuICAgIHRoaXMuZW1pdCgncmFuZ2VzZWxlY3RlZCcsIHJhbmdlKTtcbiAgICByZXR1cm4gcmFuZ2U7XG4gIH1cblxuICBlbWl0TG9hZGVkKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnbG9hZGVkJywgcGF5bG9hZCk7XG4gIH1cbn1cbiIsIjxkaXYgKm5nSWY9XCJkYXRhXCIgY2xhc3M9XCJuNy1oaXN0b2dyYW0tcmFuZ2VcIj5cbiAgICA8c3ZnICNoaXN0b2dyYW1SYW5nZSBbaWRdPVwiZGF0YS5jb250YWluZXJJZFwiPjwvc3ZnPlxuPC9kaXY+XG4iXX0=