/* eslint-disable @typescript-eslint/no-use-before-define */
//---------------------------
// HISTOGRAM-RANGE.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let HistogramRangeComponent = class HistogramRangeComponent {
    constructor() {
        this._loaded = false;
        this.draw = () => {
            var _a, _b;
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
                    Object.assign({}, newValue),
                    Object.assign({}, newValue)
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
            if ((_a = axis === null || axis === void 0 ? void 0 : axis.yAxis) === null || _a === void 0 ? void 0 : _a.show) {
                const yAxis = d3.axisLeft(scaleHeight)
                    .ticks((_b = axis.yAxis.tickAmount) !== null && _b !== void 0 ? _b : 2)
                    .tickValues(axis.yAxis.values ? axis.yAxis.values : null);
                const yAxisGroup = svg.append('g')
                    .attr('transform', `translate(${margin.left}, ${margin.top})`)
                    .call(yAxis);
                yAxisGroup.selectAll('path, line').style('stroke', colours.accent);
                yAxisGroup.selectAll('text').style('fill', colours.accent);
            }
        };
        this.setValue = ([startLabel, endLabel]) => {
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
                            setValue: this.setValue,
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
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], HistogramRangeComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], HistogramRangeComponent.prototype, "emit", void 0);
HistogramRangeComponent = __decorate([
    Component({
        selector: 'n7-histogram-range',
        template: "<div *ngIf=\"data\" class=\"n7-histogram-range\">\r\n    <svg #histogramRange [id]=\"data.containerId\"></svg>\r\n</div>\r\n"
    })
], HistogramRangeComponent);
export { HistogramRangeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9ncmFtLXJhbmdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oaXN0b2dyYW0tcmFuZ2UvaGlzdG9ncmFtLXJhbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDREQUE0RDtBQUM1RCw2QkFBNkI7QUFDN0IscUJBQXFCO0FBQ3JCLDZCQUE2Qjs7QUFFN0IsT0FBTyxFQUF1QixTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBd0Z0RSxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQUFwQztRQVNVLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFnQ3hCLFNBQUksR0FBRyxHQUFHLEVBQUU7O1lBQ1YsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQztZQUNwQixNQUFNLEVBQ0osS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQ3JCLEtBQUssRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUMzQixJQUFJLEVBQUUsVUFBVSxFQUNqQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFFZCxrQkFBa0I7WUFDbEIsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzdDLE1BQU0sS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7YUFDekQ7WUFFRCxtQkFBbUI7WUFDbkIsTUFBTSxRQUFRLEdBQUcsRUFBRTtpQkFDaEIsU0FBUyxFQUFFO2lCQUNYLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FB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WG5DO1NBdFhZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11c2UtYmVmb3JlLWRlZmluZSAqL1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBISVNUT0dSQU0tUkFOR0UudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IEFmdGVyQ29udGVudENoZWNrZWQsIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgSGlzdG9ncmFtUmFuZ2VDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBIaXN0b2dyYW1SYW5nZURhdGEge1xyXG4gIC8qKlxyXG4gICAqIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgaGlzdG9ncmFtLXJhbmdlIHN2Z1xyXG4gICAqL1xyXG4gIGNvbnRhaW5lcklkOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogdG90YWwgd2lkdGggZm9yIHRoZSBzdmcgZWxlbWVudFxyXG4gICAqL1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogdG90YWwgaGVpZ2h0IGZvciB0aGUgc3ZnIGVsZW1lbnRcclxuICAgKi9cclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBJbnRlcm5hbCBtYXJnaW5zIG9mIHRoZSBzdmdcclxuICAgKi9cclxuICBtYXJnaW46IHtcclxuICAgIGxlZnQ6IG51bWJlcjtcclxuICAgIHJpZ2h0OiBudW1iZXI7XHJcbiAgICB0b3A6IG51bWJlcjtcclxuICAgIGJvdHRvbTogbnVtYmVyO1xyXG4gIH07XHJcbiAgLyoqXHJcbiAgICogVGhlbWUgb2YgdGhlIGhpc3RvZ3JhbVxyXG4gICAqL1xyXG4gIGNvbG91cnM6IHtcclxuICAgIHRvcDogc3RyaW5nO1xyXG4gICAgYm90dG9tOiBzdHJpbmc7XHJcbiAgICBhY2NlbnQ6IHN0cmluZztcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIERhdGEgZm9yIHRoZSBoaXN0b2dyYW0gYmFyc1xyXG4gICAqL1xyXG4gIGl0ZW1zOiB7XHJcbiAgICAvKiogZGVmYXVsdCBsYWJlbCBvZiB0aGUgaXRlbSAqL1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIC8qKiB5LWF4aXMgdmFsdWUgb2YgdGhlIGJhciAoaGVpZ2h0KSAqL1xyXG4gICAgdmFsdWU6IG51bWJlcjtcclxuICAgIC8qKiBwYXlsb2FkIHRoYXQgdGhlIGl0ZW0gc2hvdWxkIGVtaXQgd2hlbiBzZWxlY3RlZCAqL1xyXG4gICAgcGF5bG9hZDogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiAndXBwZXInIHZhbHVlcyBvZiB0aGUgcmFuZ2UuXHJcbiAgICAgKiBvbmx5IHVzZWQgd2hlbiBlYWNoIGJhciByZXByZXNlbnRzIGEgcmFuZ2UuXHJcbiAgICAgKi9cclxuICAgIHJhbmdlPzoge1xyXG4gICAgICAvKiogbGFiZWwgbG9hZGVkIHdoZW4gc2VsZWN0ZWQgYnkgdGhlIHJpZ2h0LW1vc3QgcG9pbnRlciAqL1xyXG4gICAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgICAvKiogcGF5bG9hZCBlbWl0dGVkIHdoZW4gc2VsZWN0ZWQgYnkgdGhlIHJpZ2h0LW1vc3QgcG9pbnRlciAqL1xyXG4gICAgICBwYXlsb2FkOiBhbnk7XHJcbiAgICB9O1xyXG4gIH1bXTtcclxuICAvKipcclxuICAgKiBBeGlzIHNldHRpbmdzXHJcbiAgICovXHJcbiAgYXhpcz86IHtcclxuICAgIC8qKiBZIEF4aXMgc2V0dGluZ3MgKi9cclxuICAgIHlBeGlzPzoge1xyXG4gICAgICAvKiogVHVybiBvbiBhbmQgb2ZmIHRoZSBheGlzICovXHJcbiAgICAgIHNob3c/OiBib29sZWFuO1xyXG4gICAgICAvKiogTWFudWFsbHkgc2V0IHRoZSBheGlzIHZhbHVlcyB0byBzaG93ICovXHJcbiAgICAgIHZhbHVlcz86IG51bWJlcltdO1xyXG4gICAgICAvKiogSG93IG1hbnkgdGlja3MgZG8geW91IHdhbnQgdG8gc2VlICovXHJcbiAgICAgIHRpY2tBbW91bnQ/OiBudW1iZXI7XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgLyoqXHJcbiAgICogZXhwb3NlIHRoZSBkcmF3IGZ1bmN0aW9uIG91dHNpZGUgb2YgbjctZnJvbnRlbmQvY29tcG9uZW50cyBsaWJyYXJ5XHJcbiAgICogdGhpcyBpcyBuZWVkZWQgdG8gcmVkcmF3IGJ1YmJsZS1jaGFydC1jb21wb25lbnQgb24gY29tbWFuZFxyXG4gICAqL1xyXG4gIHNldERyYXc/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogc2V0U2xpZGVyc1xyXG4gICAqL1xyXG4gIHNldFNsaWRlcnM/OiBbc3RyaW5nLCBzdHJpbmddO1xyXG4gIC8qKlxyXG4gICAqIFB1YmxpYyBhcGlcclxuICAgKi9cclxuICBzZXRBcGk/OiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctaGlzdG9ncmFtLXJhbmdlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaGlzdG9ncmFtLXJhbmdlLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIaXN0b2dyYW1SYW5nZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IEhpc3RvZ3JhbVJhbmdlRGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBwcml2YXRlIGQzO1xyXG5cclxuICBwcml2YXRlIHNsaWRlcnM6IHt4OiBudW1iZXI7IHk6IG51bWJlcn1bXTtcclxuXHJcbiAgcHJpdmF0ZSBfbG9hZGVkID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgY29sb3VyQmFycztcclxuXHJcbiAgcHJpdmF0ZSBnZXRTZWxlY3RlZFJhbmdlO1xyXG5cclxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XHJcbiAgICAvKlxyXG4gICAgIFdhaXRzIGZvciB0aGUgZG9tIHRvIGJlIGxvYWRlZCwgdGhlbiBmaXJlcyB0aGUgZHJhdyBmdW5jdGlvblxyXG4gICAgIHRoYXQgcmVuZGVycyB0aGUgY2hhcnQuXHJcbiAgICAqL1xyXG4gICAgaWYgKHRoaXMuZGF0YSkge1xyXG4gICAgICBpZiAodGhpcy5fbG9hZGVkKSByZXR1cm47XHJcbiAgICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGltcG9ydCgnZDMnKS50aGVuKChtb2R1bGUpID0+IHtcclxuICAgICAgICAgIHRoaXMuZDMgPSBtb2R1bGU7XHJcbiAgICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgICAgICAgIHRoaXMuZW1pdExvYWRlZCh0cnVlKTtcclxuICAgICAgICAgIGlmICh0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLnNldERyYXcpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnNldERyYXcodGhpcy5kcmF3KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLmRhdGEuc2V0QXBpKSB7IC8vIGV4cG9zZSB0aGUgY29tcG9uZW50IGFwaVxyXG4gICAgICAgICAgICB0aGlzLmRhdGEuc2V0QXBpKHtcclxuICAgICAgICAgICAgICBzZXRWYWx1ZTogdGhpcy5zZXRWYWx1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhdyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZDMgfSA9IHRoaXM7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHdpZHRoLCBtYXJnaW4sIGhlaWdodCxcclxuICAgICAgaXRlbXMsIGNvbG91cnMsIGNvbnRhaW5lcklkLFxyXG4gICAgICBheGlzLCBzZXRTbGlkZXJzXHJcbiAgICB9ID0gdGhpcy5kYXRhO1xyXG5cclxuICAgIC8vIGRhdGEgdmFsaWRhdGlvblxyXG4gICAgY29uc3QgcmFuZ2VNb2RlID0gaXRlbXMuZXZlcnkoKGQpID0+IGQucmFuZ2UpO1xyXG4gICAgaWYgKCFyYW5nZU1vZGUgJiYgaXRlbXMuc29tZSgoZCkgPT4gIWQucmFuZ2UpKSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdBbGwgaXRlbXMgbXVzdCBoYXZlIHRoZSBcInJhbmdlXCIgcHJvcGVydHknKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBIZWxwZXJzIC0gU3RhcnQ6XHJcbiAgICBjb25zdCBMQUJFTHRvWCA9IGQzXHJcbiAgICAgIC5zY2FsZUJhbmQoKVxyXG4gICAgICAuZG9tYWluKGl0ZW1zLm1hcCgoZCkgPT4gZC5sYWJlbCkpXHJcbiAgICAgIC5yYW5nZShbMCwgd2lkdGhdKVxyXG4gICAgICAucGFkZGluZ0lubmVyKDAuMTcpXHJcbiAgICAgIC5wYWRkaW5nT3V0ZXIoMSk7XHJcblxyXG4gICAgY29uc3QgWHRvTEFCRUwgPSAodmFsdWUpID0+IHtcclxuICAgICAgY29uc3QgZG9tYWluID0gTEFCRUx0b1guZG9tYWluKCk7XHJcbiAgICAgIGNvbnN0IHBhZGRpbmdPdXRlciA9IExBQkVMdG9YKGRvbWFpblswXSk7XHJcbiAgICAgIGNvbnN0IGVhY2hCYW5kID0gTEFCRUx0b1guc3RlcCgpO1xyXG4gICAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoKCh2YWx1ZSAtIHBhZGRpbmdPdXRlcikgLyBlYWNoQmFuZCkpO1xyXG4gICAgICByZXR1cm4gZG9tYWluW01hdGgubWF4KDAsIE1hdGgubWluKGluZGV4LCBkb21haW4ubGVuZ3RoIC0gMSkpXTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gWUVBUiBTRUxFQ1RJT04gQ0lSQ0xFU1xyXG4gICAgbGV0IHNsaWRlcnM7XHJcbiAgICBpZiAoc2V0U2xpZGVycykge1xyXG4gICAgICBzbGlkZXJzID0gc2V0U2xpZGVyc1xyXG4gICAgICAgIC5tYXAoKGQpID0+ICh7IHg6IExBQkVMdG9YKGQpICsgTEFCRUx0b1guYmFuZHdpZHRoKCkgLyAyLCB5OiBoZWlnaHQgfSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2xpZGVycyA9IGQzXHJcbiAgICAgICAgLmV4dGVudChpdGVtcywgKGQpID0+IGQubGFiZWwpXHJcbiAgICAgICAgLm1hcCgoZCkgPT4gKHsgeDogTEFCRUx0b1goZCkgKyBMQUJFTHRvWC5iYW5kd2lkdGgoKSAvIDIsIHk6IGhlaWdodCB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNJblJhbmdlKHkpIHtcclxuICAgICAgY29uc3QgYWxsSXRlbXMgPSBzbGlkZXJzLm1hcCgoZCkgPT4gWHRvTEFCRUwoZC54KSk7XHJcbiAgICAgIGlmICh5ID49IGQzLm1pbihhbGxJdGVtcykgJiYgeSA8PSBkMy5tYXgoYWxsSXRlbXMpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbG91ckJhcnMoZCkge1xyXG4gICAgICBpZiAoaXNJblJhbmdlKGQubGFiZWwpKSByZXR1cm4gJ3VybCgjZ3JhZGllbnQpJztcclxuICAgICAgcmV0dXJuICcjZTNlM2UzJztcclxuICAgIH1cclxuICAgIHRoaXMuY29sb3VyQmFycyA9IGNvbG91ckJhcnM7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRSYW5nZSgpIHtcclxuICAgICAgY29uc3QgcmFuZ2VTdGFydCA9IGl0ZW1zLmZpbmQoKGl0KSA9PiBpdC5sYWJlbCA9PT0gWHRvTEFCRUwoc2xpZGVyc1swXS54KSk7XHJcbiAgICAgIGNvbnN0IHJhbmdlRW5kID0gaXRlbXMuZmluZCgoaXQpID0+IGl0LmxhYmVsID09PSBYdG9MQUJFTChzbGlkZXJzWzFdLngpKTtcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICByYW5nZVN0YXJ0LnBheWxvYWQsXHJcbiAgICAgICAgcmFuZ2VNb2RlXHJcbiAgICAgICAgICA/IHJhbmdlRW5kLnJhbmdlLnBheWxvYWRcclxuICAgICAgICAgIDogcmFuZ2VFbmQucGF5bG9hZFxyXG4gICAgICBdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nZXRTZWxlY3RlZFJhbmdlID0gZ2V0U2VsZWN0ZWRSYW5nZTtcclxuXHJcbiAgICBmdW5jdGlvbiB0ZXh0Q29sbGlzaW9uKCkge1xyXG4gICAgICBjb25zdCBpc0NvbGxpZGluZyA9IHNsaWRlcnNbMF0ueCA9PT0gc2xpZGVyc1sxXS54O1xyXG4gICAgICAvLyBjb25zdCBbc2xpZGVyTGVmdCwgc2xpZGVyUmlnaHRdID0gc2xpZGVycztcclxuICAgICAgLy8gbGV0IGlzQ29sbGlkaW5nID0gZmFsc2U7XHJcbiAgICAgIC8vIGlmICgoK3NsaWRlckxlZnQueCkgPiAoc2xpZGVyUmlnaHQueCAtIDMwKSkgaXNDb2xsaWRpbmcgPSB0cnVlO1xyXG4gICAgICBpZiAocmFuZ2VNb2RlICYmIGlzQ29sbGlkaW5nKSB7XHJcbiAgICAgICAgY29udHJvbHNMYXllclxyXG4gICAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXHJcbiAgICAgICAgICAuYXR0cigneScsIChkLCBpKSA9PiAoaSA+IDAgPyBkLnkgKyBtYXJnaW4uYm90dG9tIC8gMiArIDEyIDogZC55ICsgbWFyZ2luLmJvdHRvbSAvIDIpKVxyXG4gICAgICAgICAgLnRleHQoKGQsIGkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBnZXRTZWxlY3RlZFJhbmdlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiByYW5nZVtpXTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnRyb2xzTGF5ZXJcclxuICAgICAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxyXG4gICAgICAgICAgLmF0dHIoJ3knLCAoZCkgPT4gZC55ICsgbWFyZ2luLmJvdHRvbSAvIDIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBIZWxwZXJzIC0gRW5kLlxyXG5cclxuICAgIC8vIGNsZWFyIEhUTUwgY29udGVudHNcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcklkKS5pbm5lckhUTUwgPSAnJztcclxuICAgIGNvbnN0IHN2ZyA9IGQzXHJcbiAgICAgIC5zZWxlY3QoYCMke2NvbnRhaW5lcklkfWApXHJcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXHJcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSk7XHJcblxyXG4gICAgY29uc3Qgc2NhbGVIZWlnaHQgPSBkM1xyXG4gICAgICAuc2NhbGVTeW1sb2coKSAvLyBtb3N0IHNpbWlsYXIgc2NhbGUgdG8gdGhlIG9yaWdpbmFsXHJcbiAgICAgIC5kb21haW4oWzAsIGQzLm1heChpdGVtcywgKGQpID0+IGQudmFsdWUpXSlcclxuICAgICAgLnJhbmdlKFtoZWlnaHQsIDBdKTtcclxuXHJcbiAgICAvLyBHUkFESUVOVFxyXG4gICAgY29uc3QgZGVmcyA9IHN2Zy5hcHBlbmQoJ2RlZnMnKTsgLy8gZGVmaW5pdGlvbnNcclxuICAgIGNvbnN0IGdyYWRpZW50ID0gZGVmc1xyXG4gICAgICAuYXBwZW5kKCdsaW5lYXJHcmFkaWVudCcpXHJcbiAgICAgIC5hdHRyKCdpZCcsICdncmFkaWVudCcpXHJcbiAgICAgIC5hdHRyKCdncmFkaWVudFVuaXRzJywgJ3VzZXJTcGFjZU9uVXNlJylcclxuICAgICAgLmF0dHIoJ3gxJywgMClcclxuICAgICAgLmF0dHIoJ3kxJywgaGVpZ2h0KVxyXG4gICAgICAuYXR0cigneDInLCAwKVxyXG4gICAgICAuYXR0cigneTInLCBtYXJnaW4udG9wKTtcclxuICAgIGdyYWRpZW50XHJcbiAgICAgIC5hcHBlbmQoJ3N0b3AnKVxyXG4gICAgICAuYXR0cignY2xhc3MnLCAnc3RhcnQnKVxyXG4gICAgICAuYXR0cignb2Zmc2V0JywgJzAlJylcclxuICAgICAgLmF0dHIoJ3N0b3AtY29sb3InLCBjb2xvdXJzLmJvdHRvbSkgLy8gYm90dG9tIGdyYWRpZW50XHJcbiAgICAgIC5hdHRyKCdzdG9wLW9wYWNpdHknLCAxKTtcclxuICAgIGdyYWRpZW50XHJcbiAgICAgIC5hcHBlbmQoJ3N0b3AnKVxyXG4gICAgICAuYXR0cignY2xhc3MnLCAnZW5kJylcclxuICAgICAgLmF0dHIoJ29mZnNldCcsICcxMDAlJylcclxuICAgICAgLmF0dHIoJ3N0b3AtY29sb3InLCBjb2xvdXJzLnRvcCkgLy8gdG9wIGdyYWRpZW50XHJcbiAgICAgIC5hdHRyKCdzdG9wLW9wYWNpdHknLCAxKTtcclxuXHJcbiAgICAvLyBEUkFXIElOU0lERSBNQVJHSU5TXHJcbiAgICBjb25zdCBnID0gc3ZnXHJcbiAgICAgIC5hcHBlbmQoJ2cnKVxyXG4gICAgICAuYXR0cignY2xhc3MnLCAnY2hhcnQnKVxyXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke21hcmdpbi50b3B9KWApO1xyXG5cclxuICAgIGNvbnN0IGJhcnNMYXllciA9IGcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnYmFycycpO1xyXG4gICAgY29uc3QgY29udHJvbHNMYXllciA9IGcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnY29udHJvbHMnKTtcclxuXHJcbiAgICAvLyBCQVIgQ0hBUlRcclxuICAgIGJhcnNMYXllciAvLyBiYXJzXHJcbiAgICAgIC5zZWxlY3RBbGwoJ3JlY3QuYmFycycpXHJcbiAgICAgIC5kYXRhKGl0ZW1zKVxyXG4gICAgICAuam9pbigncmVjdCcpXHJcbiAgICAgIC5hdHRyKCdjbGFzcycsICdiYXJzJylcclxuICAgICAgLmF0dHIoJ3dpZHRoJywgTEFCRUx0b1guYmFuZHdpZHRoKVxyXG4gICAgICAuYXR0cignaGVpZ2h0JywgKGQpID0+IGhlaWdodCAtIHNjYWxlSGVpZ2h0KGQudmFsdWUpKVxyXG4gICAgICAuYXR0cigneScsIChkKSA9PiBzY2FsZUhlaWdodChkLnZhbHVlKSlcclxuICAgICAgLmF0dHIoJ3gnLCAoZCkgPT4gTEFCRUx0b1goZC5sYWJlbCkpXHJcbiAgICAgIC5hdHRyKCdkYXRhLXN0YXJ0JywgKGQpID0+IGQucGF5bG9hZCkgLy8gbWFrZSB0aGUgZGF0YSBlYXNpbHkgYWNjZXNzaWJsZVxyXG4gICAgICAuYXR0cignZGF0YS1lbmQnLCAoZCkgPT4gKGQucmFuZ2UgPyBkLnJhbmdlLnBheWxvYWQgOiBkLnBheWxvYWQpKVxyXG4gICAgICAuYXR0cignZmlsbCcsICd1cmwoI2dyYWRpZW50KScpO1xyXG5cclxuICAgIGJhcnNMYXllciAvLyBjYXRjaCBiYXIgZXZlbnRzXHJcbiAgICAgIC5vbignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeWVhciA9IFh0b0xBQkVMKGV2ZW50Lm9mZnNldFggLSBtYXJnaW4ubGVmdCk7XHJcbiAgICAgICAgZDMuc2VsZWN0QWxsKCdyZWN0LmJhcnMnKS5hdHRyKCdmaWxsJywgKGQpID0+IHtcclxuICAgICAgICAgIGlmICh5ZWFyID09PSBkLmxhYmVsKSByZXR1cm4gJyNCMENDRjgnO1xyXG4gICAgICAgICAgcmV0dXJuIGNvbG91ckJhcnMoZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbignbW91c2VvdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgZDMuc2VsZWN0QWxsKCdyZWN0LmJhcnMnKS5hdHRyKCdmaWxsJywgKGQpID0+IGNvbG91ckJhcnMoZCkpO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSBYdG9MQUJFTChldmVudC5vZmZzZXRYIC0gbWFyZ2luLmxlZnQpO1xyXG4gICAgICAgIGNvbnN0IHhBeGlzVmFsdWUgPSBMQUJFTHRvWChsYWJlbCkgKyBMQUJFTHRvWC5iYW5kd2lkdGgoKSAvIDI7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB7XHJcbiAgICAgICAgICB4OiB4QXhpc1ZhbHVlLFxyXG4gICAgICAgICAgeTogaGVpZ2h0XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzbGlkZXJzID0gW1xyXG4gICAgICAgICAgLy8gYXZvaWQgam9pbmluZyB0aGUgdHdvIG9iamVjdHMhXHJcbiAgICAgICAgICB7IC4uLm5ld1ZhbHVlIH0sXHJcbiAgICAgICAgICB7IC4uLm5ld1ZhbHVlIH1cclxuICAgICAgICBdO1xyXG4gICAgICAgIHJhbmdlUGlja2VyXHJcbiAgICAgICAgICAuZGF0YShzbGlkZXJzKVxyXG4gICAgICAgICAgLnNlbGVjdCgnY2lyY2xlJylcclxuICAgICAgICAgIC50cmFuc2l0aW9uKClcclxuICAgICAgICAgIC5lYXNlKGQzLmVhc2VRdWFkT3V0KVxyXG4gICAgICAgICAgLmR1cmF0aW9uKDU1MClcclxuICAgICAgICAgIC5hdHRyKCdjeCcsIChkKSA9PiBkLngpO1xyXG4gICAgICAgIGNvbnRyb2xzTGF5ZXJcclxuICAgICAgICAgIC5zZWxlY3QoJ3BhdGguYmx1ZWxpbmUnKVxyXG4gICAgICAgICAgLnRyYW5zaXRpb24oKVxyXG4gICAgICAgICAgLmVhc2UoZDMuZWFzZVF1YWRPdXQpXHJcbiAgICAgICAgICAuZHVyYXRpb24oNTUwKVxyXG4gICAgICAgICAgLmF0dHIoJ2QnLCBkMy5saW5lKCkoc2xpZGVycy5tYXAoKGQpID0+IFtkLngsIGQueV0pKSk7XHJcbiAgICAgICAgY29udHJvbHNMYXllclxyXG4gICAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXHJcbiAgICAgICAgICAudHJhbnNpdGlvbigpXHJcbiAgICAgICAgICAuZWFzZShkMy5lYXNlUXVhZE91dClcclxuICAgICAgICAgIC5kdXJhdGlvbig1NTApXHJcbiAgICAgICAgICAuYXR0cigneCcsICgpID0+IHhBeGlzVmFsdWUpXHJcbiAgICAgICAgICAudGV4dCgoZCwgaSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXJhbmdlTW9kZSkgcmV0dXJuIGxhYmVsO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gaXRlbXMuZmluZCgoaXQpID0+IGl0LmxhYmVsID09PSBsYWJlbCk7XHJcbiAgICAgICAgICAgIGlmIChpID4gMCkgcmV0dXJuIGl0ZW0ucmFuZ2UubGFiZWw7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmxhYmVsO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgZy5zZWxlY3RBbGwoJ3JlY3QuYmFycycpLmF0dHIoJ2ZpbGwnLCAoZCkgPT4gY29sb3VyQmFycyhkKSk7XHJcbiAgICAgICAgdGV4dENvbGxpc2lvbigpO1xyXG4gICAgICAgIHRoaXMuZW1pdCgncmFuZ2VzZWxlY3RlZCcsIGdldFNlbGVjdGVkUmFuZ2UoKSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGNvbnRyb2xzTGF5ZXIgLy8gZ3JheSBsaW5lXHJcbiAgICAgIC5hcHBlbmQoJ3BhdGgnKVxyXG4gICAgICAuYXR0cignY2xhc3MnLCAnZ3JheWxpbmUnKVxyXG4gICAgICAuYXR0cihcclxuICAgICAgICAnZCcsXHJcbiAgICAgICAgZDMubGluZSgpKFtcclxuICAgICAgICAgIFswLCBoZWlnaHRdLFxyXG4gICAgICAgICAgW3dpZHRoLCBoZWlnaHRdXHJcbiAgICAgICAgXSlcclxuICAgICAgKVxyXG4gICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgMilcclxuICAgICAgLmF0dHIoJ29wYWNpdHknLCAxKVxyXG4gICAgICAuYXR0cignc3Ryb2tlJywgJyNDMUM1QzcnKTtcclxuXHJcbiAgICBjb250cm9sc0xheWVyIC8vIGJsdWUgbGluZVxyXG4gICAgICAuYXBwZW5kKCdwYXRoJylcclxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2JsdWVsaW5lJylcclxuICAgICAgLmF0dHIoJ2QnLCBkMy5saW5lKCkoc2xpZGVycy5tYXAoKGQpID0+IFtkLngsIGQueV0pKSlcclxuICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIDIpXHJcbiAgICAgIC5hdHRyKCdzdHJva2UnLCBjb2xvdXJzLmFjY2VudCk7XHJcblxyXG4gICAgY29uc3QgcmFuZ2VQaWNrZXIgPSBjb250cm9sc0xheWVyXHJcbiAgICAgIC5zZWxlY3RBbGwoJ2cucmFuZ2VwaWNrZXInKVxyXG4gICAgICAuZGF0YShzbGlkZXJzLnNvcnQoKGEsIGIpID0+IGQzLmFzY2VuZGluZyhhLngsIGIueCkpKVxyXG4gICAgICAuam9pbignZycpXHJcbiAgICAgIC5hdHRyKCdjbGFzcycsICdyYW5nZXBpY2tlcicpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW5pbWF0ZSB0aGUgZWxlbWVudHMgd2hpbGUgdGhlIHVzZXIgaXMgZHJhZ2dpbmcgb25lIG9mIHRoZSByYW5nZSBzZWxlY3RvcnNcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZHJhZ2dpbmdVcGRhdGUoZXZlbnQsIGRhdGEpIHtcclxuICAgICAgY29uc3QgbGFiZWwgPSBYdG9MQUJFTChldmVudC54KTtcclxuICAgICAgY29uc3QgeEF4aXNWYWx1ZSA9IExBQkVMdG9YKGxhYmVsKSArIExBQkVMdG9YLmJhbmR3aWR0aCgpIC8gMjtcclxuICAgICAgY29uc3QgeWIgPSBbXTtcclxuICAgICAgZy5zZWxlY3RBbGwoJ2NpcmNsZScpLmVhY2goZnVuY3Rpb24gc2V0QmFsbFBvc2l0aW9uKCkge1xyXG4gICAgICAgIHliLnB1c2goeyB4OiArZDMuc2VsZWN0KHRoaXMpLmF0dHIoJ2N4JyksIHk6IGhlaWdodCB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHNsaWRlcnMgPSB5Yi5zb3J0KChhLCBiKSA9PiBkMy5hc2NlbmRpbmcoYS54LCBiLngpKTtcclxuICAgICAgLy8gbW92ZSB0aGUgY2lyY2xlXHJcbiAgICAgIGQzLnNlbGVjdCh0aGlzKVxyXG4gICAgICAgIC5zZWxlY3QoJ2NpcmNsZScpXHJcbiAgICAgICAgLmF0dHIoJ2N4JywgZGF0YS54ID0geEF4aXNWYWx1ZSk7XHJcbiAgICAgIC8vIG1vdmUgdGhlIGJsdWUgbGluZVxyXG4gICAgICBjb250cm9sc0xheWVyXHJcbiAgICAgICAgLnNlbGVjdCgncGF0aC5ibHVlbGluZScpXHJcbiAgICAgICAgLmF0dHIoJ2QnLCBkMy5saW5lKCkoc2xpZGVycy5tYXAoKGQpID0+IFtkLngsIGQueV0pKSk7XHJcbiAgICAgIC8vIGNoYW5nZSB0aGUgdGV4dCBwb3NpdGlvblxyXG4gICAgICBkMy5zZWxlY3QodGhpcylcclxuICAgICAgICAuc2VsZWN0KCd0ZXh0JylcclxuICAgICAgICAuYXR0cigneCcsICgpID0+IHhBeGlzVmFsdWUpO1xyXG4gICAgICAvLyBjaGFuZ2UgdGhlIHRleHQgdmFsdWVzXHJcbiAgICAgIGNvbnRyb2xzTGF5ZXJcclxuICAgICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcclxuICAgICAgICAudGV4dCgoZCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbCA9IFh0b0xBQkVMKGQueCk7XHJcbiAgICAgICAgICBpZiAoIXJhbmdlTW9kZSkgcmV0dXJuIGw7XHJcbiAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHNsaWRlcnMuZmluZEluZGV4KChzbGlkZXIpID0+IHNsaWRlci54ID09PSBkLngpO1xyXG4gICAgICAgICAgY29uc3QgcmFuZ2UgPSBnZXRTZWxlY3RlZFJhbmdlKCk7XHJcbiAgICAgICAgICBpZiAocG9zaXRpb24gPT09IDEpIHJldHVybiByYW5nZVsxXTtcclxuICAgICAgICAgIHJldHVybiByYW5nZVswXTtcclxuICAgICAgICB9KTtcclxuICAgICAgdGV4dENvbGxpc2lvbigpO1xyXG4gICAgICAvLyBjb2xvdXIgdGhlIGJhcnNcclxuICAgICAgZy5zZWxlY3RBbGwoJ3JlY3QuYmFycycpLmF0dHIoJ2ZpbGwnLCAoZCkgPT4gY29sb3VyQmFycyhkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmFuZ2VQaWNrZXIgLy8gZHJhZyBoYW5kbGVyXHJcbiAgICAgIC5jYWxsKGQzLmRyYWcoKVxyXG4gICAgICAgIC5vbignZHJhZycsIGRyYWdnaW5nVXBkYXRlKVxyXG4gICAgICAgIC5vbignZW5kJywgKGV2ZW50LCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAvLyB1cGRhdGUgb25lIGxhc3QgdGltZSB0byBwcmV2ZW50IGRlc3luY2luZ1xyXG4gICAgICAgICAgZHJhZ2dpbmdVcGRhdGUoZXZlbnQsIGRhdGEpO1xyXG4gICAgICAgICAgLy8gZW1pdCB0aGUgc2VsZWN0ZWQgcmFuZ2VcclxuICAgICAgICAgIHRoaXMuZW1pdCgncmFuZ2VzZWxlY3RlZCcsIGdldFNlbGVjdGVkUmFuZ2UoKSk7XHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgIHJhbmdlUGlja2VyXHJcbiAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXHJcbiAgICAgIC5hdHRyKCdjeCcsIChkKSA9PiBkLngpXHJcbiAgICAgIC5hdHRyKCdjeScsIChkKSA9PiBkLnkpXHJcbiAgICAgIC5hdHRyKCdyJywgOSlcclxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxyXG4gICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgMilcclxuICAgICAgLmF0dHIoJ3N0cm9rZScsIGNvbG91cnMuYWNjZW50KVxyXG4gICAgICAuYXR0cignc3R5bGUnLCAnY3Vyc29yOiBwb2ludGVyJyk7XHJcblxyXG4gICAgcmFuZ2VQaWNrZXJcclxuICAgICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXHJcbiAgICAgIC5hdHRyKCdmb250LWZhbWlseScsICdSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmJylcclxuICAgICAgLmF0dHIoJ2ZvbnQtc2l6ZScsICcxMnB4JylcclxuICAgICAgLmFwcGVuZCgndGV4dCcpXHJcbiAgICAgIC5hdHRyKCd5JywgKGQpID0+IGQueSArIG1hcmdpbi5ib3R0b20gLyAyKVxyXG4gICAgICAuYXR0cigneCcsIChkKSA9PiBkLngpXHJcbiAgICAgIC5hdHRyKCdmaWxsJywgY29sb3Vycy5hY2NlbnQpXHJcbiAgICAgIC50ZXh0KChkLCBpKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbCA9IFh0b0xBQkVMKGQueCk7XHJcbiAgICAgICAgaWYgKHJhbmdlTW9kZSAmJiBpID09PSAxKSB7XHJcbiAgICAgICAgICByZXR1cm4gaXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5sYWJlbCA9PT0gbCkucmFuZ2UubGFiZWw7XHJcbiAgICAgICAgfSByZXR1cm4gbDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgaWYgKGF4aXM/LnlBeGlzPy5zaG93KSB7XHJcbiAgICAgIGNvbnN0IHlBeGlzID0gZDMuYXhpc0xlZnQoc2NhbGVIZWlnaHQpXHJcbiAgICAgICAgLnRpY2tzKGF4aXMueUF4aXMudGlja0Ftb3VudCA/PyAyKVxyXG4gICAgICAgIC50aWNrVmFsdWVzKGF4aXMueUF4aXMudmFsdWVzID8gYXhpcy55QXhpcy52YWx1ZXMgOiBudWxsKTtcclxuICAgICAgY29uc3QgeUF4aXNHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKVxyXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCAke21hcmdpbi50b3B9KWApXHJcbiAgICAgICAgLmNhbGwoeUF4aXMpO1xyXG5cclxuICAgICAgeUF4aXNHcm91cC5zZWxlY3RBbGwoJ3BhdGgsIGxpbmUnKS5zdHlsZSgnc3Ryb2tlJywgY29sb3Vycy5hY2NlbnQpO1xyXG4gICAgICB5QXhpc0dyb3VwLnNlbGVjdEFsbCgndGV4dCcpLnN0eWxlKCdmaWxsJywgY29sb3Vycy5hY2NlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGFiZWxUb1goKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kM1xyXG4gICAgICAuc2NhbGVCYW5kKClcclxuICAgICAgLmRvbWFpbih0aGlzLmRhdGEuaXRlbXMubWFwKChkKSA9PiBkLmxhYmVsKSlcclxuICAgICAgLnJhbmdlKFswLCB0aGlzLmRhdGEud2lkdGhdKVxyXG4gICAgICAucGFkZGluZ0lubmVyKDAuMTcpXHJcbiAgICAgIC5wYWRkaW5nT3V0ZXIoMSk7XHJcbiAgfVxyXG5cclxuICBzZXRWYWx1ZSA9IChbc3RhcnRMYWJlbCwgZW5kTGFiZWxdKSA9PiB7XHJcbiAgICB0aGlzLmRhdGEuc2V0U2xpZGVycyA9IFtzdGFydExhYmVsLCBlbmRMYWJlbF07XHJcbiAgICB0aGlzLmRyYXcoKTtcclxuICAgIHRoaXMuZDMuc2VsZWN0QWxsKCdyZWN0LmJhcnMnKS5hdHRyKCdmaWxsJywgKGQpID0+IHRoaXMuY29sb3VyQmFycyhkKSk7XHJcbiAgICBjb25zdCByYW5nZSA9IHRoaXMuZ2V0U2VsZWN0ZWRSYW5nZSgpO1xyXG4gICAgdGhpcy5lbWl0KCdyYW5nZXNlbGVjdGVkJywgcmFuZ2UpO1xyXG4gICAgcmV0dXJuIHJhbmdlO1xyXG4gIH1cclxuXHJcbiAgZW1pdExvYWRlZChwYXlsb2FkKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdsb2FkZWQnLCBwYXlsb2FkKTtcclxuICB9XHJcbn1cclxuIl19