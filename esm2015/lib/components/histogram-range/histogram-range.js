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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9ncmFtLXJhbmdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oaXN0b2dyYW0tcmFuZ2UvaGlzdG9ncmFtLXJhbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDREQUE0RDtBQUM1RCw2QkFBNkI7QUFDN0IscUJBQXFCO0FBQ3JCLDZCQUE2Qjs7QUFFN0IsT0FBTyxFQUF1QixTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBd0Z0RSxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQUFwQztRQVNVLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFpQ3hCLFNBQUksR0FBRyxHQUFHLEVBQUU7O1lBQ1YsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQztZQUNwQixNQUFNLEVBQ0osS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQ3JCLEtBQUssRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUMzQixJQUFJLEVBQUUsVUFBVSxFQUNqQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFFZCxrQkFBa0I7WUFDbEIsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzdDLE1BQU0sS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7YUFDekQ7WUFFRCxtQkFBbUI7WUFDbkIsTUFBTSxRQUFRLEdBQUcsRUFBRTtpQkFDaEIsU0FBUyxFQUFFO2lCQUNYLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FB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Q0FBQztJQUNyQixDQUFDO0lBaUJELFVBQVUsQ0FBQyxPQUFPO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQztDQUNGLENBQUE7QUE1WFU7SUFBUixLQUFLLEVBQUU7O3FEQUEwQjtBQUV6QjtJQUFSLEtBQUssRUFBRTs7cURBQVc7QUFIUix1QkFBdUI7SUFKbkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG9CQUFvQjtRQUM5Qix3SUFBcUM7S0FDdEMsQ0FBQztHQUNXLHVCQUF1QixDQTZYbkM7U0E3WFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lICovXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEhJU1RPR1JBTS1SQU5HRS50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBIaXN0b2dyYW1SYW5nZUNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEhpc3RvZ3JhbVJhbmdlRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBoaXN0b2dyYW0tcmFuZ2Ugc3ZnXHJcbiAgICovXHJcbiAgY29udGFpbmVySWQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiB0b3RhbCB3aWR0aCBmb3IgdGhlIHN2ZyBlbGVtZW50XHJcbiAgICovXHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICAvKipcclxuICAgKiB0b3RhbCBoZWlnaHQgZm9yIHRoZSBzdmcgZWxlbWVudFxyXG4gICAqL1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIEludGVybmFsIG1hcmdpbnMgb2YgdGhlIHN2Z1xyXG4gICAqL1xyXG4gIG1hcmdpbjoge1xyXG4gICAgbGVmdDogbnVtYmVyO1xyXG4gICAgcmlnaHQ6IG51bWJlcjtcclxuICAgIHRvcDogbnVtYmVyO1xyXG4gICAgYm90dG9tOiBudW1iZXI7XHJcbiAgfTtcclxuICAvKipcclxuICAgKiBUaGVtZSBvZiB0aGUgaGlzdG9ncmFtXHJcbiAgICovXHJcbiAgY29sb3Vyczoge1xyXG4gICAgdG9wOiBzdHJpbmc7XHJcbiAgICBib3R0b206IHN0cmluZztcclxuICAgIGFjY2VudDogc3RyaW5nO1xyXG4gIH07XHJcbiAgLyoqXHJcbiAgICogRGF0YSBmb3IgdGhlIGhpc3RvZ3JhbSBiYXJzXHJcbiAgICovXHJcbiAgaXRlbXM6IHtcclxuICAgIC8qKiBkZWZhdWx0IGxhYmVsIG9mIHRoZSBpdGVtICovXHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgLyoqIHktYXhpcyB2YWx1ZSBvZiB0aGUgYmFyIChoZWlnaHQpICovXHJcbiAgICB2YWx1ZTogbnVtYmVyO1xyXG4gICAgLyoqIHBheWxvYWQgdGhhdCB0aGUgaXRlbSBzaG91bGQgZW1pdCB3aGVuIHNlbGVjdGVkICovXHJcbiAgICBwYXlsb2FkOiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqICd1cHBlcicgdmFsdWVzIG9mIHRoZSByYW5nZS5cclxuICAgICAqIG9ubHkgdXNlZCB3aGVuIGVhY2ggYmFyIHJlcHJlc2VudHMgYSByYW5nZS5cclxuICAgICAqL1xyXG4gICAgcmFuZ2U/OiB7XHJcbiAgICAgIC8qKiBsYWJlbCBsb2FkZWQgd2hlbiBzZWxlY3RlZCBieSB0aGUgcmlnaHQtbW9zdCBwb2ludGVyICovXHJcbiAgICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICAgIC8qKiBwYXlsb2FkIGVtaXR0ZWQgd2hlbiBzZWxlY3RlZCBieSB0aGUgcmlnaHQtbW9zdCBwb2ludGVyICovXHJcbiAgICAgIHBheWxvYWQ6IGFueTtcclxuICAgIH07XHJcbiAgfVtdO1xyXG4gIC8qKlxyXG4gICAqIEF4aXMgc2V0dGluZ3NcclxuICAgKi9cclxuICBheGlzPzoge1xyXG4gICAgLyoqIFkgQXhpcyBzZXR0aW5ncyAqL1xyXG4gICAgeUF4aXM/OiB7XHJcbiAgICAgIC8qKiBUdXJuIG9uIGFuZCBvZmYgdGhlIGF4aXMgKi9cclxuICAgICAgc2hvdz86IGJvb2xlYW47XHJcbiAgICAgIC8qKiBNYW51YWxseSBzZXQgdGhlIGF4aXMgdmFsdWVzIHRvIHNob3cgKi9cclxuICAgICAgdmFsdWVzPzogbnVtYmVyW107XHJcbiAgICAgIC8qKiBIb3cgbWFueSB0aWNrcyBkbyB5b3Ugd2FudCB0byBzZWUgKi9cclxuICAgICAgdGlja0Ftb3VudD86IG51bWJlcjtcclxuICAgIH07XHJcbiAgfTtcclxuICAvKipcclxuICAgKiBleHBvc2UgdGhlIGRyYXcgZnVuY3Rpb24gb3V0c2lkZSBvZiBuNy1mcm9udGVuZC9jb21wb25lbnRzIGxpYnJhcnlcclxuICAgKiB0aGlzIGlzIG5lZWRlZCB0byByZWRyYXcgYnViYmxlLWNoYXJ0LWNvbXBvbmVudCBvbiBjb21tYW5kXHJcbiAgICovXHJcbiAgc2V0RHJhdz86IGFueTtcclxuICAvKipcclxuICAgKiBzZXRTbGlkZXJzXHJcbiAgICovXHJcbiAgc2V0U2xpZGVycz86IFtzdHJpbmcsIHN0cmluZ107XHJcbiAgLyoqXHJcbiAgICogUHVibGljIGFwaVxyXG4gICAqL1xyXG4gIHNldEFwaT86IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1oaXN0b2dyYW0tcmFuZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9oaXN0b2dyYW0tcmFuZ2UuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEhpc3RvZ3JhbVJhbmdlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XHJcbiAgQElucHV0KCkgZGF0YTogSGlzdG9ncmFtUmFuZ2VEYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIHByaXZhdGUgZDM7XHJcblxyXG4gIHByaXZhdGUgc2xpZGVyczoge3g6IG51bWJlcjsgeTogbnVtYmVyfVtdO1xyXG5cclxuICBwcml2YXRlIF9sb2FkZWQgPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBjb2xvdXJCYXJzO1xyXG5cclxuICBwcml2YXRlIGdldFNlbGVjdGVkUmFuZ2U7XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcclxuICAgIC8qXHJcbiAgICAgV2FpdHMgZm9yIHRoZSBkb20gdG8gYmUgbG9hZGVkLCB0aGVuIGZpcmVzIHRoZSBkcmF3IGZ1bmN0aW9uXHJcbiAgICAgdGhhdCByZW5kZXJzIHRoZSBjaGFydC5cclxuICAgICovXHJcbiAgICBpZiAodGhpcy5kYXRhKSB7XHJcbiAgICAgIGlmICh0aGlzLl9sb2FkZWQpIHJldHVybjtcclxuICAgICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaW1wb3J0KCdkMycpLnRoZW4oKG1vZHVsZSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5kMyA9IG1vZHVsZTtcclxuICAgICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgICAgICAgdGhpcy5lbWl0TG9hZGVkKHRydWUpO1xyXG4gICAgICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuc2V0RHJhdykge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuc2V0RHJhdyh0aGlzLmRyYXcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMuZGF0YS5zZXRBcGkpIHsgLy8gZXhwb3NlIHRoZSBjb21wb25lbnQgYXBpXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zZXRBcGkoe1xyXG4gICAgICAgICAgICAgIHNldFNsaWRlcnM6IHRoaXMuc2V0U2xpZGVycyxcclxuICAgICAgICAgICAgICBzZXRCYXJzOiB0aGlzLnNldEJhcnMsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGQzIH0gPSB0aGlzO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB3aWR0aCwgbWFyZ2luLCBoZWlnaHQsXHJcbiAgICAgIGl0ZW1zLCBjb2xvdXJzLCBjb250YWluZXJJZCxcclxuICAgICAgYXhpcywgc2V0U2xpZGVyc1xyXG4gICAgfSA9IHRoaXMuZGF0YTtcclxuXHJcbiAgICAvLyBkYXRhIHZhbGlkYXRpb25cclxuICAgIGNvbnN0IHJhbmdlTW9kZSA9IGl0ZW1zLmV2ZXJ5KChkKSA9PiBkLnJhbmdlKTtcclxuICAgIGlmICghcmFuZ2VNb2RlICYmIGl0ZW1zLnNvbWUoKGQpID0+ICFkLnJhbmdlKSkge1xyXG4gICAgICB0aHJvdyBFcnJvcignQWxsIGl0ZW1zIG11c3QgaGF2ZSB0aGUgXCJyYW5nZVwiIHByb3BlcnR5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSGVscGVycyAtIFN0YXJ0OlxyXG4gICAgY29uc3QgTEFCRUx0b1ggPSBkM1xyXG4gICAgICAuc2NhbGVCYW5kKClcclxuICAgICAgLmRvbWFpbihpdGVtcy5tYXAoKGQpID0+IGQubGFiZWwpKVxyXG4gICAgICAucmFuZ2UoWzAsIHdpZHRoXSlcclxuICAgICAgLnBhZGRpbmdJbm5lcigwLjE3KVxyXG4gICAgICAucGFkZGluZ091dGVyKDEpO1xyXG5cclxuICAgIGNvbnN0IFh0b0xBQkVMID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRvbWFpbiA9IExBQkVMdG9YLmRvbWFpbigpO1xyXG4gICAgICBjb25zdCBwYWRkaW5nT3V0ZXIgPSBMQUJFTHRvWChkb21haW5bMF0pO1xyXG4gICAgICBjb25zdCBlYWNoQmFuZCA9IExBQkVMdG9YLnN0ZXAoKTtcclxuICAgICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKCgodmFsdWUgLSBwYWRkaW5nT3V0ZXIpIC8gZWFjaEJhbmQpKTtcclxuICAgICAgcmV0dXJuIGRvbWFpbltNYXRoLm1heCgwLCBNYXRoLm1pbihpbmRleCwgZG9tYWluLmxlbmd0aCAtIDEpKV07XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFlFQVIgU0VMRUNUSU9OIENJUkNMRVNcclxuICAgIGxldCBzbGlkZXJzO1xyXG4gICAgaWYgKHNldFNsaWRlcnMpIHtcclxuICAgICAgc2xpZGVycyA9IHNldFNsaWRlcnNcclxuICAgICAgICAubWFwKChkKSA9PiAoeyB4OiBMQUJFTHRvWChkKSArIExBQkVMdG9YLmJhbmR3aWR0aCgpIC8gMiwgeTogaGVpZ2h0IH0pKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNsaWRlcnMgPSBkM1xyXG4gICAgICAgIC5leHRlbnQoaXRlbXMsIChkKSA9PiBkLmxhYmVsKVxyXG4gICAgICAgIC5tYXAoKGQpID0+ICh7IHg6IExBQkVMdG9YKGQpICsgTEFCRUx0b1guYmFuZHdpZHRoKCkgLyAyLCB5OiBoZWlnaHQgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzSW5SYW5nZSh5KSB7XHJcbiAgICAgIGNvbnN0IGFsbEl0ZW1zID0gc2xpZGVycy5tYXAoKGQpID0+IFh0b0xBQkVMKGQueCkpO1xyXG4gICAgICBpZiAoeSA+PSBkMy5taW4oYWxsSXRlbXMpICYmIHkgPD0gZDMubWF4KGFsbEl0ZW1zKSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb2xvdXJCYXJzKGQpIHtcclxuICAgICAgaWYgKGlzSW5SYW5nZShkLmxhYmVsKSkgcmV0dXJuICd1cmwoI2dyYWRpZW50KSc7XHJcbiAgICAgIHJldHVybiAnI2UzZTNlMyc7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbG91ckJhcnMgPSBjb2xvdXJCYXJzO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFNlbGVjdGVkUmFuZ2UoKSB7XHJcbiAgICAgIGNvbnN0IHJhbmdlU3RhcnQgPSBpdGVtcy5maW5kKChpdCkgPT4gaXQubGFiZWwgPT09IFh0b0xBQkVMKHNsaWRlcnNbMF0ueCkpO1xyXG4gICAgICBjb25zdCByYW5nZUVuZCA9IGl0ZW1zLmZpbmQoKGl0KSA9PiBpdC5sYWJlbCA9PT0gWHRvTEFCRUwoc2xpZGVyc1sxXS54KSk7XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgcmFuZ2VTdGFydC5wYXlsb2FkLFxyXG4gICAgICAgIHJhbmdlTW9kZVxyXG4gICAgICAgICAgPyByYW5nZUVuZC5yYW5nZS5wYXlsb2FkXHJcbiAgICAgICAgICA6IHJhbmdlRW5kLnBheWxvYWRcclxuICAgICAgXTtcclxuICAgIH1cclxuICAgIHRoaXMuZ2V0U2VsZWN0ZWRSYW5nZSA9IGdldFNlbGVjdGVkUmFuZ2U7XHJcblxyXG4gICAgZnVuY3Rpb24gdGV4dENvbGxpc2lvbigpIHtcclxuICAgICAgY29uc3QgaXNDb2xsaWRpbmcgPSBzbGlkZXJzWzBdLnggPT09IHNsaWRlcnNbMV0ueDtcclxuICAgICAgLy8gY29uc3QgW3NsaWRlckxlZnQsIHNsaWRlclJpZ2h0XSA9IHNsaWRlcnM7XHJcbiAgICAgIC8vIGxldCBpc0NvbGxpZGluZyA9IGZhbHNlO1xyXG4gICAgICAvLyBpZiAoKCtzbGlkZXJMZWZ0LngpID4gKHNsaWRlclJpZ2h0LnggLSAzMCkpIGlzQ29sbGlkaW5nID0gdHJ1ZTtcclxuICAgICAgaWYgKHJhbmdlTW9kZSAmJiBpc0NvbGxpZGluZykge1xyXG4gICAgICAgIGNvbnRyb2xzTGF5ZXJcclxuICAgICAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxyXG4gICAgICAgICAgLmF0dHIoJ3knLCAoZCwgaSkgPT4gKGkgPiAwID8gZC55ICsgbWFyZ2luLmJvdHRvbSAvIDIgKyAxMiA6IGQueSArIG1hcmdpbi5ib3R0b20gLyAyKSlcclxuICAgICAgICAgIC50ZXh0KChkLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gZ2V0U2VsZWN0ZWRSYW5nZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmFuZ2VbaV07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb250cm9sc0xheWVyXHJcbiAgICAgICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcclxuICAgICAgICAgIC5hdHRyKCd5JywgKGQpID0+IGQueSArIG1hcmdpbi5ib3R0b20gLyAyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gSGVscGVycyAtIEVuZC5cclxuXHJcbiAgICAvLyBjbGVhciBIVE1MIGNvbnRlbnRzXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJZCkuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjb25zdCBzdmcgPSBkM1xyXG4gICAgICAuc2VsZWN0KGAjJHtjb250YWluZXJJZH1gKVxyXG4gICAgICAuYXR0cignd2lkdGgnLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxyXG4gICAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pO1xyXG5cclxuICAgIGNvbnN0IHNjYWxlSGVpZ2h0ID0gZDNcclxuICAgICAgLnNjYWxlU3ltbG9nKCkgLy8gbW9zdCBzaW1pbGFyIHNjYWxlIHRvIHRoZSBvcmlnaW5hbFxyXG4gICAgICAuZG9tYWluKFswLCBkMy5tYXgoaXRlbXMsIChkKSA9PiBkLnZhbHVlKV0pXHJcbiAgICAgIC5yYW5nZShbaGVpZ2h0LCAwXSk7XHJcblxyXG4gICAgLy8gR1JBRElFTlRcclxuICAgIGNvbnN0IGRlZnMgPSBzdmcuYXBwZW5kKCdkZWZzJyk7IC8vIGRlZmluaXRpb25zXHJcbiAgICBjb25zdCBncmFkaWVudCA9IGRlZnNcclxuICAgICAgLmFwcGVuZCgnbGluZWFyR3JhZGllbnQnKVxyXG4gICAgICAuYXR0cignaWQnLCAnZ3JhZGllbnQnKVxyXG4gICAgICAuYXR0cignZ3JhZGllbnRVbml0cycsICd1c2VyU3BhY2VPblVzZScpXHJcbiAgICAgIC5hdHRyKCd4MScsIDApXHJcbiAgICAgIC5hdHRyKCd5MScsIGhlaWdodClcclxuICAgICAgLmF0dHIoJ3gyJywgMClcclxuICAgICAgLmF0dHIoJ3kyJywgbWFyZ2luLnRvcCk7XHJcbiAgICBncmFkaWVudFxyXG4gICAgICAuYXBwZW5kKCdzdG9wJylcclxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3N0YXJ0JylcclxuICAgICAgLmF0dHIoJ29mZnNldCcsICcwJScpXHJcbiAgICAgIC5hdHRyKCdzdG9wLWNvbG9yJywgY29sb3Vycy5ib3R0b20pIC8vIGJvdHRvbSBncmFkaWVudFxyXG4gICAgICAuYXR0cignc3RvcC1vcGFjaXR5JywgMSk7XHJcbiAgICBncmFkaWVudFxyXG4gICAgICAuYXBwZW5kKCdzdG9wJylcclxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2VuZCcpXHJcbiAgICAgIC5hdHRyKCdvZmZzZXQnLCAnMTAwJScpXHJcbiAgICAgIC5hdHRyKCdzdG9wLWNvbG9yJywgY29sb3Vycy50b3ApIC8vIHRvcCBncmFkaWVudFxyXG4gICAgICAuYXR0cignc3RvcC1vcGFjaXR5JywgMSk7XHJcblxyXG4gICAgLy8gRFJBVyBJTlNJREUgTUFSR0lOU1xyXG4gICAgY29uc3QgZyA9IHN2Z1xyXG4gICAgICAuYXBwZW5kKCdnJylcclxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2NoYXJ0JylcclxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sJHttYXJnaW4udG9wfSlgKTtcclxuXHJcbiAgICBjb25zdCBiYXJzTGF5ZXIgPSBnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2JhcnMnKTtcclxuICAgIGNvbnN0IGNvbnRyb2xzTGF5ZXIgPSBnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2NvbnRyb2xzJyk7XHJcblxyXG4gICAgLy8gQkFSIENIQVJUXHJcbiAgICBiYXJzTGF5ZXIgLy8gYmFyc1xyXG4gICAgICAuc2VsZWN0QWxsKCdyZWN0LmJhcnMnKVxyXG4gICAgICAuZGF0YShpdGVtcylcclxuICAgICAgLmpvaW4oJ3JlY3QnKVxyXG4gICAgICAuYXR0cignY2xhc3MnLCAnYmFycycpXHJcbiAgICAgIC5hdHRyKCd3aWR0aCcsIExBQkVMdG9YLmJhbmR3aWR0aClcclxuICAgICAgLmF0dHIoJ2hlaWdodCcsIChkKSA9PiBoZWlnaHQgLSBzY2FsZUhlaWdodChkLnZhbHVlKSlcclxuICAgICAgLmF0dHIoJ3knLCAoZCkgPT4gc2NhbGVIZWlnaHQoZC52YWx1ZSkpXHJcbiAgICAgIC5hdHRyKCd4JywgKGQpID0+IExBQkVMdG9YKGQubGFiZWwpKVxyXG4gICAgICAuYXR0cignZGF0YS1zdGFydCcsIChkKSA9PiBkLnBheWxvYWQpIC8vIG1ha2UgdGhlIGRhdGEgZWFzaWx5IGFjY2Vzc2libGVcclxuICAgICAgLmF0dHIoJ2RhdGEtZW5kJywgKGQpID0+IChkLnJhbmdlID8gZC5yYW5nZS5wYXlsb2FkIDogZC5wYXlsb2FkKSlcclxuICAgICAgLmF0dHIoJ2ZpbGwnLCAndXJsKCNncmFkaWVudCknKTtcclxuXHJcbiAgICBiYXJzTGF5ZXIgLy8gY2F0Y2ggYmFyIGV2ZW50c1xyXG4gICAgICAub24oJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHllYXIgPSBYdG9MQUJFTChldmVudC5vZmZzZXRYIC0gbWFyZ2luLmxlZnQpO1xyXG4gICAgICAgIGQzLnNlbGVjdEFsbCgncmVjdC5iYXJzJykuYXR0cignZmlsbCcsIChkKSA9PiB7XHJcbiAgICAgICAgICBpZiAoeWVhciA9PT0gZC5sYWJlbCkgcmV0dXJuICcjQjBDQ0Y4JztcclxuICAgICAgICAgIHJldHVybiBjb2xvdXJCYXJzKGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oJ21vdXNlb3V0JywgKCkgPT4ge1xyXG4gICAgICAgIGQzLnNlbGVjdEFsbCgncmVjdC5iYXJzJykuYXR0cignZmlsbCcsIChkKSA9PiBjb2xvdXJCYXJzKGQpKTtcclxuICAgICAgfSlcclxuICAgICAgLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gWHRvTEFCRUwoZXZlbnQub2Zmc2V0WCAtIG1hcmdpbi5sZWZ0KTtcclxuICAgICAgICBjb25zdCB4QXhpc1ZhbHVlID0gTEFCRUx0b1gobGFiZWwpICsgTEFCRUx0b1guYmFuZHdpZHRoKCkgLyAyO1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0ge1xyXG4gICAgICAgICAgeDogeEF4aXNWYWx1ZSxcclxuICAgICAgICAgIHk6IGhlaWdodFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2xpZGVycyA9IFtcclxuICAgICAgICAgIC8vIGF2b2lkIGpvaW5pbmcgdGhlIHR3byBvYmplY3RzIVxyXG4gICAgICAgICAgeyAuLi5uZXdWYWx1ZSB9LFxyXG4gICAgICAgICAgeyAuLi5uZXdWYWx1ZSB9XHJcbiAgICAgICAgXTtcclxuICAgICAgICByYW5nZVBpY2tlclxyXG4gICAgICAgICAgLmRhdGEoc2xpZGVycylcclxuICAgICAgICAgIC5zZWxlY3QoJ2NpcmNsZScpXHJcbiAgICAgICAgICAudHJhbnNpdGlvbigpXHJcbiAgICAgICAgICAuZWFzZShkMy5lYXNlUXVhZE91dClcclxuICAgICAgICAgIC5kdXJhdGlvbig1NTApXHJcbiAgICAgICAgICAuYXR0cignY3gnLCAoZCkgPT4gZC54KTtcclxuICAgICAgICBjb250cm9sc0xheWVyXHJcbiAgICAgICAgICAuc2VsZWN0KCdwYXRoLmJsdWVsaW5lJylcclxuICAgICAgICAgIC50cmFuc2l0aW9uKClcclxuICAgICAgICAgIC5lYXNlKGQzLmVhc2VRdWFkT3V0KVxyXG4gICAgICAgICAgLmR1cmF0aW9uKDU1MClcclxuICAgICAgICAgIC5hdHRyKCdkJywgZDMubGluZSgpKHNsaWRlcnMubWFwKChkKSA9PiBbZC54LCBkLnldKSkpO1xyXG4gICAgICAgIGNvbnRyb2xzTGF5ZXJcclxuICAgICAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxyXG4gICAgICAgICAgLnRyYW5zaXRpb24oKVxyXG4gICAgICAgICAgLmVhc2UoZDMuZWFzZVF1YWRPdXQpXHJcbiAgICAgICAgICAuZHVyYXRpb24oNTUwKVxyXG4gICAgICAgICAgLmF0dHIoJ3gnLCAoKSA9PiB4QXhpc1ZhbHVlKVxyXG4gICAgICAgICAgLnRleHQoKGQsIGkpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFyYW5nZU1vZGUpIHJldHVybiBsYWJlbDtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zLmZpbmQoKGl0KSA9PiBpdC5sYWJlbCA9PT0gbGFiZWwpO1xyXG4gICAgICAgICAgICBpZiAoaSA+IDApIHJldHVybiBpdGVtLnJhbmdlLmxhYmVsO1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5sYWJlbDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIGcuc2VsZWN0QWxsKCdyZWN0LmJhcnMnKS5hdHRyKCdmaWxsJywgKGQpID0+IGNvbG91ckJhcnMoZCkpO1xyXG4gICAgICAgIHRleHRDb2xsaXNpb24oKTtcclxuICAgICAgICB0aGlzLmVtaXQoJ3Jhbmdlc2VsZWN0ZWQnLCBnZXRTZWxlY3RlZFJhbmdlKCkpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBjb250cm9sc0xheWVyIC8vIGdyYXkgbGluZVxyXG4gICAgICAuYXBwZW5kKCdwYXRoJylcclxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2dyYXlsaW5lJylcclxuICAgICAgLmF0dHIoXHJcbiAgICAgICAgJ2QnLFxyXG4gICAgICAgIGQzLmxpbmUoKShbXHJcbiAgICAgICAgICBbMCwgaGVpZ2h0XSxcclxuICAgICAgICAgIFt3aWR0aCwgaGVpZ2h0XVxyXG4gICAgICAgIF0pXHJcbiAgICAgIClcclxuICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIDIpXHJcbiAgICAgIC5hdHRyKCdvcGFjaXR5JywgMSlcclxuICAgICAgLmF0dHIoJ3N0cm9rZScsICcjQzFDNUM3Jyk7XHJcblxyXG4gICAgY29udHJvbHNMYXllciAvLyBibHVlIGxpbmVcclxuICAgICAgLmFwcGVuZCgncGF0aCcpXHJcbiAgICAgIC5hdHRyKCdjbGFzcycsICdibHVlbGluZScpXHJcbiAgICAgIC5hdHRyKCdkJywgZDMubGluZSgpKHNsaWRlcnMubWFwKChkKSA9PiBbZC54LCBkLnldKSkpXHJcbiAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAyKVxyXG4gICAgICAuYXR0cignc3Ryb2tlJywgY29sb3Vycy5hY2NlbnQpO1xyXG5cclxuICAgIGNvbnN0IHJhbmdlUGlja2VyID0gY29udHJvbHNMYXllclxyXG4gICAgICAuc2VsZWN0QWxsKCdnLnJhbmdlcGlja2VyJylcclxuICAgICAgLmRhdGEoc2xpZGVycy5zb3J0KChhLCBiKSA9PiBkMy5hc2NlbmRpbmcoYS54LCBiLngpKSlcclxuICAgICAgLmpvaW4oJ2cnKVxyXG4gICAgICAuYXR0cignY2xhc3MnLCAncmFuZ2VwaWNrZXInKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFuaW1hdGUgdGhlIGVsZW1lbnRzIHdoaWxlIHRoZSB1c2VyIGlzIGRyYWdnaW5nIG9uZSBvZiB0aGUgcmFuZ2Ugc2VsZWN0b3JzXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGRyYWdnaW5nVXBkYXRlKGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgIGNvbnN0IGxhYmVsID0gWHRvTEFCRUwoZXZlbnQueCk7XHJcbiAgICAgIGNvbnN0IHhBeGlzVmFsdWUgPSBMQUJFTHRvWChsYWJlbCkgKyBMQUJFTHRvWC5iYW5kd2lkdGgoKSAvIDI7XHJcbiAgICAgIGNvbnN0IHliID0gW107XHJcbiAgICAgIGcuc2VsZWN0QWxsKCdjaXJjbGUnKS5lYWNoKGZ1bmN0aW9uIHNldEJhbGxQb3NpdGlvbigpIHtcclxuICAgICAgICB5Yi5wdXNoKHsgeDogK2QzLnNlbGVjdCh0aGlzKS5hdHRyKCdjeCcpLCB5OiBoZWlnaHQgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzbGlkZXJzID0geWIuc29ydCgoYSwgYikgPT4gZDMuYXNjZW5kaW5nKGEueCwgYi54KSk7XHJcbiAgICAgIC8vIG1vdmUgdGhlIGNpcmNsZVxyXG4gICAgICBkMy5zZWxlY3QodGhpcylcclxuICAgICAgICAuc2VsZWN0KCdjaXJjbGUnKVxyXG4gICAgICAgIC5hdHRyKCdjeCcsIGRhdGEueCA9IHhBeGlzVmFsdWUpO1xyXG4gICAgICAvLyBtb3ZlIHRoZSBibHVlIGxpbmVcclxuICAgICAgY29udHJvbHNMYXllclxyXG4gICAgICAgIC5zZWxlY3QoJ3BhdGguYmx1ZWxpbmUnKVxyXG4gICAgICAgIC5hdHRyKCdkJywgZDMubGluZSgpKHNsaWRlcnMubWFwKChkKSA9PiBbZC54LCBkLnldKSkpO1xyXG4gICAgICAvLyBjaGFuZ2UgdGhlIHRleHQgcG9zaXRpb25cclxuICAgICAgZDMuc2VsZWN0KHRoaXMpXHJcbiAgICAgICAgLnNlbGVjdCgndGV4dCcpXHJcbiAgICAgICAgLmF0dHIoJ3gnLCAoKSA9PiB4QXhpc1ZhbHVlKTtcclxuICAgICAgLy8gY2hhbmdlIHRoZSB0ZXh0IHZhbHVlc1xyXG4gICAgICBjb250cm9sc0xheWVyXHJcbiAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXHJcbiAgICAgICAgLnRleHQoKGQpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGwgPSBYdG9MQUJFTChkLngpO1xyXG4gICAgICAgICAgaWYgKCFyYW5nZU1vZGUpIHJldHVybiBsO1xyXG4gICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBzbGlkZXJzLmZpbmRJbmRleCgoc2xpZGVyKSA9PiBzbGlkZXIueCA9PT0gZC54KTtcclxuICAgICAgICAgIGNvbnN0IHJhbmdlID0gZ2V0U2VsZWN0ZWRSYW5nZSgpO1xyXG4gICAgICAgICAgaWYgKHBvc2l0aW9uID09PSAxKSByZXR1cm4gcmFuZ2VbMV07XHJcbiAgICAgICAgICByZXR1cm4gcmFuZ2VbMF07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIHRleHRDb2xsaXNpb24oKTtcclxuICAgICAgLy8gY29sb3VyIHRoZSBiYXJzXHJcbiAgICAgIGcuc2VsZWN0QWxsKCdyZWN0LmJhcnMnKS5hdHRyKCdmaWxsJywgKGQpID0+IGNvbG91ckJhcnMoZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJhbmdlUGlja2VyIC8vIGRyYWcgaGFuZGxlclxyXG4gICAgICAuY2FsbChkMy5kcmFnKClcclxuICAgICAgICAub24oJ2RyYWcnLCBkcmFnZ2luZ1VwZGF0ZSlcclxuICAgICAgICAub24oJ2VuZCcsIChldmVudCwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgLy8gdXBkYXRlIG9uZSBsYXN0IHRpbWUgdG8gcHJldmVudCBkZXN5bmNpbmdcclxuICAgICAgICAgIGRyYWdnaW5nVXBkYXRlKGV2ZW50LCBkYXRhKTtcclxuICAgICAgICAgIC8vIGVtaXQgdGhlIHNlbGVjdGVkIHJhbmdlXHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ3Jhbmdlc2VsZWN0ZWQnLCBnZXRTZWxlY3RlZFJhbmdlKCkpO1xyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICByYW5nZVBpY2tlclxyXG4gICAgICAuYXBwZW5kKCdjaXJjbGUnKVxyXG4gICAgICAuYXR0cignY3gnLCAoZCkgPT4gZC54KVxyXG4gICAgICAuYXR0cignY3knLCAoZCkgPT4gZC55KVxyXG4gICAgICAuYXR0cigncicsIDkpXHJcbiAgICAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJylcclxuICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIDIpXHJcbiAgICAgIC5hdHRyKCdzdHJva2UnLCBjb2xvdXJzLmFjY2VudClcclxuICAgICAgLmF0dHIoJ3N0eWxlJywgJ2N1cnNvcjogcG9pbnRlcicpO1xyXG5cclxuICAgIHJhbmdlUGlja2VyXHJcbiAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxyXG4gICAgICAuYXR0cignZm9udC1mYW1pbHknLCAnUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZicpXHJcbiAgICAgIC5hdHRyKCdmb250LXNpemUnLCAnMTJweCcpXHJcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxyXG4gICAgICAuYXR0cigneScsIChkKSA9PiBkLnkgKyBtYXJnaW4uYm90dG9tIC8gMilcclxuICAgICAgLmF0dHIoJ3gnLCAoZCkgPT4gZC54KVxyXG4gICAgICAuYXR0cignZmlsbCcsIGNvbG91cnMuYWNjZW50KVxyXG4gICAgICAudGV4dCgoZCwgaSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGwgPSBYdG9MQUJFTChkLngpO1xyXG4gICAgICAgIGlmIChyYW5nZU1vZGUgJiYgaSA9PT0gMSkge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubGFiZWwgPT09IGwpLnJhbmdlLmxhYmVsO1xyXG4gICAgICAgIH0gcmV0dXJuIGw7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGlmIChheGlzPy55QXhpcz8uc2hvdykge1xyXG4gICAgICBjb25zdCB5QXhpcyA9IGQzLmF4aXNMZWZ0KHNjYWxlSGVpZ2h0KVxyXG4gICAgICAgIC50aWNrcyhheGlzLnlBeGlzLnRpY2tBbW91bnQgPz8gMilcclxuICAgICAgICAudGlja1ZhbHVlcyhheGlzLnlBeGlzLnZhbHVlcyA/IGF4aXMueUF4aXMudmFsdWVzIDogbnVsbCk7XHJcbiAgICAgIGNvbnN0IHlBeGlzR3JvdXAgPSBzdmcuYXBwZW5kKCdnJylcclxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwgJHttYXJnaW4udG9wfSlgKVxyXG4gICAgICAgIC5jYWxsKHlBeGlzKTtcclxuXHJcbiAgICAgIHlBeGlzR3JvdXAuc2VsZWN0QWxsKCdwYXRoLCBsaW5lJykuc3R5bGUoJ3N0cm9rZScsIGNvbG91cnMuYWNjZW50KTtcclxuICAgICAgeUF4aXNHcm91cC5zZWxlY3RBbGwoJ3RleHQnKS5zdHlsZSgnZmlsbCcsIGNvbG91cnMuYWNjZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxhYmVsVG9YKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZDNcclxuICAgICAgLnNjYWxlQmFuZCgpXHJcbiAgICAgIC5kb21haW4odGhpcy5kYXRhLml0ZW1zLm1hcCgoZCkgPT4gZC5sYWJlbCkpXHJcbiAgICAgIC5yYW5nZShbMCwgdGhpcy5kYXRhLndpZHRoXSlcclxuICAgICAgLnBhZGRpbmdJbm5lcigwLjE3KVxyXG4gICAgICAucGFkZGluZ091dGVyKDEpO1xyXG4gIH1cclxuXHJcbiAgc2V0QmFycyA9IChuZXdCYXJzKSA9PiB7XHJcbiAgICB0aGlzLmRhdGEuaXRlbXMgPSBuZXdCYXJzO1xyXG4gICAgdGhpcy5kcmF3KCk7XHJcbiAgICB0aGlzLmQzLnNlbGVjdEFsbCgncmVjdC5iYXJzJykuYXR0cignZmlsbCcsIChkKSA9PiB0aGlzLmNvbG91ckJhcnMoZCkpO1xyXG4gIH1cclxuXHJcbiAgc2V0U2xpZGVycyA9IChbc3RhcnRMYWJlbCwgZW5kTGFiZWxdKSA9PiB7XHJcbiAgICB0aGlzLmRhdGEuc2V0U2xpZGVycyA9IFtzdGFydExhYmVsLCBlbmRMYWJlbF07XHJcbiAgICB0aGlzLmRyYXcoKTtcclxuICAgIHRoaXMuZDMuc2VsZWN0QWxsKCdyZWN0LmJhcnMnKS5hdHRyKCdmaWxsJywgKGQpID0+IHRoaXMuY29sb3VyQmFycyhkKSk7XHJcbiAgICBjb25zdCByYW5nZSA9IHRoaXMuZ2V0U2VsZWN0ZWRSYW5nZSgpO1xyXG4gICAgdGhpcy5lbWl0KCdyYW5nZXNlbGVjdGVkJywgcmFuZ2UpO1xyXG4gICAgcmV0dXJuIHJhbmdlO1xyXG4gIH1cclxuXHJcbiAgZW1pdExvYWRlZChwYXlsb2FkKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdsb2FkZWQnLCBwYXlsb2FkKTtcclxuICB9XHJcbn1cclxuIl19