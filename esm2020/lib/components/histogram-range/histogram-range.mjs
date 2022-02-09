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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9ncmFtLXJhbmdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZHYtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2hpc3RvZ3JhbS1yYW5nZS9oaXN0b2dyYW0tcmFuZ2UudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvaGlzdG9ncmFtLXJhbmdlL2hpc3RvZ3JhbS1yYW5nZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlDQUF5QztBQUN6Qyw2QkFBNkI7QUFDN0IscUJBQXFCO0FBQ3JCLDZCQUE2QjtBQUU3QixPQUFPLEVBQXVCLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQTJGdEUsTUFBTSxPQUFPLHVCQUF1QjtJQUpwQztRQVdVLFlBQU8sR0FBWSxFQUFFLENBQUM7UUFFdEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQW1DeEIsU0FBSSxHQUFHLEdBQUcsRUFBRTtZQUNWLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDcEIsTUFBTSxFQUNKLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUNyQixLQUFLLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFDM0IsSUFBSSxFQUFFLFVBQVUsRUFDakIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBRWQsa0JBQWtCO1lBQ2xCLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUM3QyxNQUFNLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO2FBQ3pEO1lBRUQsbUJBQW1CO1lBQ25CLE1BQU0sUUFBUSxHQUFHLEVBQUU7aUJBQ2hCLFNBQVMsRUFBRTtpQkFDWCxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNqQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ2pCLFlBQVksQ0FBQyxJQUFJLENBQUM7aUJBQ2xCLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVuQixNQUFNLFFBQVEsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUN6QixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2pDLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekMsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNqQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDOUQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakUsQ0FBQyxDQUFDO1lBRUYseUJBQXlCO1lBQ3pCLGVBQWU7WUFDZixJQUFJLFVBQVUsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVU7cUJBQ3RCLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzNFO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRTtxQkFDZCxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO3FCQUM3QixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQzthQUMzRTtZQUVELE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3RCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO29CQUFFLE9BQU8sSUFBSSxDQUFDO2dCQUNoRSxPQUFPLEtBQUssQ0FBQztZQUNmLENBQUMsQ0FBQztZQUVGLFNBQVMsVUFBVSxDQUFDLENBQUM7Z0JBQ25CLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7b0JBQUUsT0FBTyxnQkFBZ0IsQ0FBQztnQkFDaEQsT0FBTyxTQUFTLENBQUM7WUFDbkIsQ0FBQztZQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBRTdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLEVBQUU7Z0JBQzNCLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEYsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5RSxPQUFPO29CQUNMLFVBQVUsQ0FBQyxPQUFPO29CQUNsQixTQUFTO3dCQUNQLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU87d0JBQ3hCLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTztpQkFDckIsQ0FBQztZQUNKLENBQUMsQ0FBQztZQUNGLGlCQUFpQjtZQUVqQixzQkFBc0I7WUFDdEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3BELE1BQU0sR0FBRyxHQUFHLEVBQUU7aUJBQ1gsTUFBTSxDQUFDLElBQUksV0FBVyxFQUFFLENBQUM7aUJBQ3pCLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBRXZHLE1BQU0sV0FBVyxHQUFHLEVBQUU7aUJBQ25CLFdBQVcsRUFBRSxDQUFDLHFDQUFxQztpQkFDbkQsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDMUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFdEIsV0FBVztZQUNYLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxjQUFjO1lBQy9DLE1BQU0sUUFBUSxHQUFHLElBQUk7aUJBQ2xCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDeEIsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUM7aUJBQ3RCLElBQUksQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUM7aUJBQ3ZDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2lCQUNiLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO2lCQUNsQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztpQkFDYixJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQixRQUFRO2lCQUNMLE1BQU0sQ0FBQyxNQUFNLENBQUM7aUJBQ2QsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7aUJBQ3RCLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDO2lCQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxrQkFBa0I7aUJBQ3JELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0IsUUFBUTtpQkFDTCxNQUFNLENBQUMsTUFBTSxDQUFDO2lCQUNkLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO2lCQUNwQixJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztpQkFDdEIsSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZTtpQkFDL0MsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUUzQixzQkFBc0I7WUFDdEIsTUFBTSxDQUFDLEdBQUcsR0FBRztpQkFDVixNQUFNLENBQUMsR0FBRyxDQUFDO2lCQUNYLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO2lCQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLGFBQWEsTUFBTSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUVoRSxNQUFNLFNBQVMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDdEQsTUFBTSxhQUFhLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBRTlELFlBQVk7WUFDWixTQUFTLENBQUMsT0FBTztpQkFDZCxTQUFTLENBQUMsV0FBVyxDQUFDO2lCQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUNYLElBQUksQ0FBQyxNQUFNLENBQUM7aUJBQ1osSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7aUJBQ3JCLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQztpQkFDakMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3BELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3RDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ25DLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxrQ0FBa0M7aUJBQ3ZFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDaEUsSUFBSSxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1lBRWxDLFNBQVMsQ0FBQyxtQkFBbUI7aUJBQzFCLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDekIsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuRCxFQUFFLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtvQkFDM0MsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLEtBQUs7d0JBQUUsT0FBTyxTQUFTLENBQUM7b0JBQ3ZDLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQztpQkFDRCxFQUFFLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRTtnQkFDbkIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvRCxDQUFDLENBQUM7aUJBQ0QsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNyQixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BELE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUM5RCxNQUFNLFFBQVEsR0FBRztvQkFDZixDQUFDLEVBQUUsVUFBVTtvQkFDYixDQUFDLEVBQUUsTUFBTTtpQkFDVixDQUFDO2dCQUNGLElBQUksQ0FBQyxPQUFPLEdBQUc7b0JBQ2IsaUNBQWlDO29CQUNqQyxFQUFFLEdBQUcsUUFBUSxFQUFFO29CQUNmLEVBQUUsR0FBRyxRQUFRLEVBQUU7aUJBQ2hCLENBQUM7Z0JBQ0YsV0FBVztxQkFDUixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztxQkFDbEIsTUFBTSxDQUFDLFFBQVEsQ0FBQztxQkFDaEIsVUFBVSxFQUFFO3FCQUNaLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3FCQUNwQixRQUFRLENBQUMsR0FBRyxDQUFDO3FCQUNiLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsYUFBYTtxQkFDVixNQUFNLENBQUMsZUFBZSxDQUFDO3FCQUN2QixVQUFVLEVBQUU7cUJBQ1osSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7cUJBQ3BCLFFBQVEsQ0FBQyxHQUFHLENBQUM7cUJBQ2IsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdELGFBQWE7cUJBQ1YsU0FBUyxDQUFDLE1BQU0sQ0FBQztxQkFDakIsVUFBVSxFQUFFO3FCQUNaLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3FCQUNwQixRQUFRLENBQUMsR0FBRyxDQUFDO3FCQUNiLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDO3FCQUMzQixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ2IsSUFBSSxDQUFDLFNBQVM7d0JBQUUsT0FBTyxLQUFLLENBQUM7b0JBQzdCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUM7b0JBQ3BELElBQUksQ0FBQyxHQUFHLENBQUM7d0JBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztvQkFDbkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUNwQixDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztZQUN0RCxDQUFDLENBQUMsQ0FBQztZQUVMLGFBQWEsQ0FBQyxZQUFZO2lCQUN2QixNQUFNLENBQUMsTUFBTSxDQUFDO2lCQUNkLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO2lCQUN6QixJQUFJLENBQ0gsR0FBRyxFQUNILEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDUixDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7Z0JBQ1gsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO2FBQ2hCLENBQUMsQ0FDSDtpQkFDQSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztpQkFDdkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7aUJBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFFN0IsYUFBYSxDQUFDLFlBQVk7aUJBQ3ZCLE1BQU0sQ0FBQyxNQUFNLENBQUM7aUJBQ2QsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7aUJBQ3pCLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDekQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7aUJBQ3ZCLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRWxDLE1BQU0sV0FBVyxHQUFHLGFBQWE7aUJBQzlCLFNBQVMsQ0FBQyxlQUFlLENBQUM7aUJBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDekQsSUFBSSxDQUFDLEdBQUcsQ0FBQztpQkFDVCxJQUFJLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBRWhDLDREQUE0RDtZQUM1RCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQywyREFBMkQ7WUFDOUU7O2FBRUM7WUFDRCxTQUFTLGNBQWMsQ0FBQyxLQUFLLEVBQUUsSUFBSTtnQkFDakMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzlELE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztnQkFDZCxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLGVBQWU7b0JBQ2pELEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztnQkFDekQsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6RCxrQkFBa0I7Z0JBQ2xCLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3FCQUNaLE1BQU0sQ0FBQyxRQUFRLENBQUM7cUJBQ2hCLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQztnQkFDbkMscUJBQXFCO2dCQUNyQixhQUFhO3FCQUNWLE1BQU0sQ0FBQyxlQUFlLENBQUM7cUJBQ3ZCLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCwyQkFBMkI7Z0JBQzNCLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3FCQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUM7cUJBQ2QsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDL0IseUJBQXlCO2dCQUN6QixhQUFhO3FCQUNWLFNBQVMsQ0FBQyxNQUFNLENBQUM7cUJBQ2pCLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO29CQUNWLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxTQUFTO3dCQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUN6QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3RFLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO29CQUN0QyxJQUFJLFFBQVEsS0FBSyxDQUFDO3dCQUFFLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2pDLGtCQUFrQjtnQkFDbEIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5RCxDQUFDO1lBRUQsV0FBVyxDQUFDLGVBQWU7aUJBQ3hCLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFO2lCQUNaLEVBQUUsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDO2lCQUMxQixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFO2dCQUN6Qiw0Q0FBNEM7Z0JBQzVDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzVCLDBCQUEwQjtnQkFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztZQUN0RCxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRVIsV0FBVztpQkFDUixNQUFNLENBQUMsUUFBUSxDQUFDO2lCQUNoQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN0QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN0QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztpQkFDWixJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQztpQkFDckIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7aUJBQ3ZCLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQztpQkFDOUIsSUFBSSxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1lBRXBDLFdBQVc7aUJBQ1IsSUFBSSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUM7aUJBQzdCLElBQUksQ0FBQyxhQUFhLEVBQUUsMkJBQTJCLENBQUM7aUJBQ2hELElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDO2lCQUN6QixNQUFNLENBQUMsTUFBTSxDQUFDO2lCQUNkLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7aUJBQ3pDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3JCLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQztpQkFDNUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNiLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksU0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3hCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUMzRDtnQkFBQyxPQUFPLENBQUMsQ0FBQztZQUNiLENBQUMsQ0FBQyxDQUFDO1lBRUwsSUFBSSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtnQkFDckIsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7cUJBQ25DLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7cUJBQ2pDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM1RCxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztxQkFDL0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxhQUFhLE1BQU0sQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDO3FCQUM3RCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRWYsVUFBVSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM1RDtRQUNILENBQUMsQ0FBQztRQUVGLDJDQUEyQztRQUMzQyxrQkFBYSxHQUFHLENBQUMsT0FBZ0IsRUFBRSxFQUFFO1lBQ25DLGlCQUFpQjtZQUNqQixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDckUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3BDLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QywwQkFBMEI7WUFDMUIsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xELElBQUksU0FBUyxJQUFJLFdBQVcsRUFBRTtnQkFDNUIsYUFBYTtxQkFDVixTQUFTLENBQUMsTUFBTSxDQUFDO3FCQUNqQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUNyRixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ2IsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7b0JBQ3RDLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixDQUFDLENBQUMsQ0FBQzthQUNOO2lCQUFNO2dCQUNMLGFBQWE7cUJBQ1YsU0FBUyxDQUFDLE1BQU0sQ0FBQztxQkFDakIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzlDO1FBQ0gsQ0FBQyxDQUFDO1FBWUYsNERBQTREO1FBQzVELFlBQU8sR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWixJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekUsQ0FBQyxDQUFDO1FBRUYsdUVBQXVFO1FBQ3ZFLGVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBYyxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUUsRUFBRTtZQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsVUFBVSxFQUFFLEVBQUUsR0FBRyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNaLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN0QyxJQUFJLElBQUk7Z0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakMsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLENBQUM7S0FPSDtJQXhYQyxxQkFBcUI7UUFDbkI7OztVQUdFO1FBQ0YsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxJQUFJLENBQUMsT0FBTztnQkFBRSxPQUFPO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO29CQUMzQixJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQztvQkFDakIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3RCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTt3QkFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUM5QjtvQkFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsMkJBQTJCO3dCQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzs0QkFDZixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7NEJBQzNCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTzt5QkFDdEIsQ0FBQyxDQUFDO3FCQUNKO29CQUNELHdDQUF3QztvQkFDeEMsMENBQTBDO2dCQUM1QyxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBNFRELHFDQUFxQztJQUNyQyxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsRUFBRTthQUNYLFNBQVMsRUFBRTthQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMzQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMzQixZQUFZLENBQUMsSUFBSSxDQUFDO2FBQ2xCLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBb0JELG1EQUFtRDtJQUNuRCxVQUFVLENBQUMsT0FBTztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7O29IQXRZVSx1QkFBdUI7d0dBQXZCLHVCQUF1QixrR0NoR3BDLDhIQUdBOzJGRDZGYSx1QkFBdUI7a0JBSm5DLFNBQVM7K0JBQ0Usb0JBQW9COzhCQUlyQixJQUFJO3NCQUFaLEtBQUs7Z0JBRUcsSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gSElTVE9HUkFNLVJBTkdFLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBBZnRlckNvbnRlbnRDaGVja2VkLCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEhpc3RvZ3JhbVJhbmdlQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGlzdG9ncmFtUmFuZ2VEYXRhIHtcclxuICAvKipcclxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGhpc3RvZ3JhbS1yYW5nZSBzdmdcclxuICAgKi9cclxuICBjb250YWluZXJJZDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHRvdGFsIHdpZHRoIGZvciB0aGUgc3ZnIGVsZW1lbnRcclxuICAgKi9cclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIHRvdGFsIGhlaWdodCBmb3IgdGhlIHN2ZyBlbGVtZW50XHJcbiAgICovXHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogSW50ZXJuYWwgbWFyZ2lucyBvZiB0aGUgc3ZnXHJcbiAgICovXHJcbiAgbWFyZ2luOiB7XHJcbiAgICBsZWZ0OiBudW1iZXI7XHJcbiAgICByaWdodDogbnVtYmVyO1xyXG4gICAgdG9wOiBudW1iZXI7XHJcbiAgICBib3R0b206IG51bWJlcjtcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIFRoZW1lIG9mIHRoZSBoaXN0b2dyYW1cclxuICAgKi9cclxuICBjb2xvdXJzOiB7XHJcbiAgICB0b3A6IHN0cmluZztcclxuICAgIGJvdHRvbTogc3RyaW5nO1xyXG4gICAgYWNjZW50OiBzdHJpbmc7XHJcbiAgfTtcclxuICAvKipcclxuICAgKiBEYXRhIGZvciB0aGUgaGlzdG9ncmFtIGJhcnNcclxuICAgKi9cclxuICBpdGVtczoge1xyXG4gICAgLyoqIGRlZmF1bHQgbGFiZWwgb2YgdGhlIGl0ZW0gKi9cclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICAvKiogeS1heGlzIHZhbHVlIG9mIHRoZSBiYXIgKGhlaWdodCkgKi9cclxuICAgIHZhbHVlOiBudW1iZXI7XHJcbiAgICAvKiogcGF5bG9hZCB0aGF0IHRoZSBpdGVtIHNob3VsZCBlbWl0IHdoZW4gc2VsZWN0ZWQgKi9cclxuICAgIHBheWxvYWQ6IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogJ3VwcGVyJyB2YWx1ZXMgb2YgdGhlIHJhbmdlLlxyXG4gICAgICogb25seSB1c2VkIHdoZW4gZWFjaCBiYXIgcmVwcmVzZW50cyBhIHJhbmdlLlxyXG4gICAgICovXHJcbiAgICByYW5nZT86IHtcclxuICAgICAgLyoqIGxhYmVsIGxvYWRlZCB3aGVuIHNlbGVjdGVkIGJ5IHRoZSByaWdodC1tb3N0IHBvaW50ZXIgKi9cclxuICAgICAgbGFiZWw6IHN0cmluZztcclxuICAgICAgLyoqIHBheWxvYWQgZW1pdHRlZCB3aGVuIHNlbGVjdGVkIGJ5IHRoZSByaWdodC1tb3N0IHBvaW50ZXIgKi9cclxuICAgICAgcGF5bG9hZDogYW55O1xyXG4gICAgfTtcclxuICB9W107XHJcbiAgLyoqXHJcbiAgICogQXhpcyBzZXR0aW5nc1xyXG4gICAqL1xyXG4gIGF4aXM/OiB7XHJcbiAgICAvKiogWSBBeGlzIHNldHRpbmdzICovXHJcbiAgICB5QXhpcz86IHtcclxuICAgICAgLyoqIFR1cm4gb24gYW5kIG9mZiB0aGUgYXhpcyAqL1xyXG4gICAgICBzaG93PzogYm9vbGVhbjtcclxuICAgICAgLyoqIE1hbnVhbGx5IHNldCB0aGUgYXhpcyB2YWx1ZXMgdG8gc2hvdyAqL1xyXG4gICAgICB2YWx1ZXM/OiBudW1iZXJbXTtcclxuICAgICAgLyoqIEhvdyBtYW55IHRpY2tzIGRvIHlvdSB3YW50IHRvIHNlZSAqL1xyXG4gICAgICB0aWNrQW1vdW50PzogbnVtYmVyO1xyXG4gICAgfTtcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIGV4cG9zZSB0aGUgZHJhdyBmdW5jdGlvbiBvdXRzaWRlIG9mIG43LWZyb250ZW5kL2NvbXBvbmVudHMgbGlicmFyeVxyXG4gICAqIHRoaXMgaXMgbmVlZGVkIHRvIHJlZHJhdyBidWJibGUtY2hhcnQtY29tcG9uZW50IG9uIGNvbW1hbmRcclxuICAgKi9cclxuICBzZXREcmF3PzogYW55O1xyXG4gIC8qKlxyXG4gICAqIHNldFNsaWRlcnNcclxuICAgKi9cclxuICBzZXRTbGlkZXJzPzogTGFiZWxDb3VwbGU7XHJcbiAgLyoqXHJcbiAgICogUHVibGljIGFwaVxyXG4gICAqL1xyXG4gIHNldEFwaT86IGFueTtcclxufVxyXG5cclxudHlwZSBTbGlkZXJzID0geyB4OiBudW1iZXI7IHk6IG51bWJlciB9W107XHJcbnR5cGUgTGFiZWxDb3VwbGUgPSBbc3RyaW5nLCBzdHJpbmddO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1oaXN0b2dyYW0tcmFuZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9oaXN0b2dyYW0tcmFuZ2UuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEhpc3RvZ3JhbVJhbmdlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XHJcbiAgQElucHV0KCkgZGF0YTogSGlzdG9ncmFtUmFuZ2VEYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIHByaXZhdGUgZDM7XHJcblxyXG4gIHByaXZhdGUgc2xpZGVyczogU2xpZGVycyA9IFtdO1xyXG5cclxuICBwcml2YXRlIF9sb2FkZWQgPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBjb2xvdXJCYXJzO1xyXG5cclxuICBwcml2YXRlIGdldFNlbGVjdGVkUmFuZ2U7XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcclxuICAgIC8qXHJcbiAgICAgICAgIFdhaXRzIGZvciB0aGUgZG9tIHRvIGJlIGxvYWRlZCwgdGhlbiBmaXJlcyB0aGUgZHJhdyBmdW5jdGlvblxyXG4gICAgICAgICB0aGF0IHJlbmRlcnMgdGhlIGNoYXJ0LlxyXG4gICAgKi9cclxuICAgIGlmICh0aGlzLmRhdGEpIHtcclxuICAgICAgaWYgKHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xyXG4gICAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpbXBvcnQoJ2QzJykudGhlbigobW9kdWxlKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmQzID0gbW9kdWxlO1xyXG4gICAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICAgICAgICB0aGlzLmVtaXRMb2FkZWQodHJ1ZSk7XHJcbiAgICAgICAgICBpZiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5zZXREcmF3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zZXREcmF3KHRoaXMuZHJhdyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5kYXRhLnNldEFwaSkgeyAvLyBleHBvc2UgdGhlIGNvbXBvbmVudCBhcGlcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnNldEFwaSh7XHJcbiAgICAgICAgICAgICAgc2V0U2xpZGVyczogdGhpcy5zZXRTbGlkZXJzLFxyXG4gICAgICAgICAgICAgIHNldEJhcnM6IHRoaXMuc2V0QmFycyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZG90LW5vdGF0aW9uXHJcbiAgICAgICAgICAvLyB3aW5kb3dbJ3NldFNsaWRlcnMnXSA9IHRoaXMuc2V0U2xpZGVycztcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkMyB9ID0gdGhpcztcclxuICAgIGNvbnN0IHtcclxuICAgICAgd2lkdGgsIG1hcmdpbiwgaGVpZ2h0LFxyXG4gICAgICBpdGVtcywgY29sb3VycywgY29udGFpbmVySWQsXHJcbiAgICAgIGF4aXMsIHNldFNsaWRlcnNcclxuICAgIH0gPSB0aGlzLmRhdGE7XHJcblxyXG4gICAgLy8gZGF0YSB2YWxpZGF0aW9uXHJcbiAgICBjb25zdCByYW5nZU1vZGUgPSBpdGVtcy5ldmVyeSgoZCkgPT4gZC5yYW5nZSk7XHJcbiAgICBpZiAoIXJhbmdlTW9kZSAmJiBpdGVtcy5zb21lKChkKSA9PiAhZC5yYW5nZSkpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ0FsbCBpdGVtcyBtdXN0IGhhdmUgdGhlIFwicmFuZ2VcIiBwcm9wZXJ0eScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhlbHBlcnMgLSBTdGFydDpcclxuICAgIGNvbnN0IExBQkVMdG9YID0gZDNcclxuICAgICAgLnNjYWxlQmFuZCgpXHJcbiAgICAgIC5kb21haW4oaXRlbXMubWFwKChkKSA9PiBkLmxhYmVsKSlcclxuICAgICAgLnJhbmdlKFswLCB3aWR0aF0pXHJcbiAgICAgIC5wYWRkaW5nSW5uZXIoMC4xNylcclxuICAgICAgLnBhZGRpbmdPdXRlcigxKTtcclxuXHJcbiAgICBjb25zdCBYdG9MQUJFTCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICBjb25zdCBkb21haW4gPSBMQUJFTHRvWC5kb21haW4oKTtcclxuICAgICAgY29uc3QgcGFkZGluZ091dGVyID0gTEFCRUx0b1goZG9tYWluWzBdKTtcclxuICAgICAgY29uc3QgZWFjaEJhbmQgPSBMQUJFTHRvWC5zdGVwKCk7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcigoKHZhbHVlIC0gcGFkZGluZ091dGVyKSAvIGVhY2hCYW5kKSk7XHJcbiAgICAgIHJldHVybiBkb21haW5bTWF0aC5tYXgoMCwgTWF0aC5taW4oaW5kZXgsIGRvbWFpbi5sZW5ndGggLSAxKSldO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBZRUFSIFNFTEVDVElPTiBDSVJDTEVTXHJcbiAgICAvLyBsZXQgc2xpZGVycztcclxuICAgIGlmIChzZXRTbGlkZXJzICYmIHRoaXMuc2xpZGVycykge1xyXG4gICAgICB0aGlzLnNsaWRlcnMgPSBzZXRTbGlkZXJzXHJcbiAgICAgICAgLm1hcCgoZCkgPT4gKHsgeDogTEFCRUx0b1goZCkgKyBMQUJFTHRvWC5iYW5kd2lkdGgoKSAvIDIsIHk6IGhlaWdodCB9KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNsaWRlcnMgPSBkM1xyXG4gICAgICAgIC5leHRlbnQoaXRlbXMsIChkKSA9PiBkLmxhYmVsKVxyXG4gICAgICAgIC5tYXAoKGQpID0+ICh7IHg6IExBQkVMdG9YKGQpICsgTEFCRUx0b1guYmFuZHdpZHRoKCkgLyAyLCB5OiBoZWlnaHQgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGlzSW5SYW5nZSA9ICh5KSA9PiB7XHJcbiAgICAgIGNvbnN0IGFsbEl0ZW1zID0gdGhpcy5zbGlkZXJzLm1hcCgoZCkgPT4gWHRvTEFCRUwoZC54KSk7XHJcbiAgICAgIGlmICh5ID49IGQzLm1pbihhbGxJdGVtcykgJiYgeSA8PSBkMy5tYXgoYWxsSXRlbXMpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBjb2xvdXJCYXJzKGQpIHtcclxuICAgICAgaWYgKGlzSW5SYW5nZShkLmxhYmVsKSkgcmV0dXJuICd1cmwoI2dyYWRpZW50KSc7XHJcbiAgICAgIHJldHVybiAnI2UzZTNlMyc7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbG91ckJhcnMgPSBjb2xvdXJCYXJzO1xyXG5cclxuICAgIHRoaXMuZ2V0U2VsZWN0ZWRSYW5nZSA9ICgpID0+IHtcclxuICAgICAgY29uc3QgcmFuZ2VTdGFydCA9IGl0ZW1zLmZpbmQoKGl0KSA9PiBpdC5sYWJlbCA9PT0gWHRvTEFCRUwodGhpcy5zbGlkZXJzWzBdLngpKTtcclxuICAgICAgY29uc3QgcmFuZ2VFbmQgPSBpdGVtcy5maW5kKChpdCkgPT4gaXQubGFiZWwgPT09IFh0b0xBQkVMKHRoaXMuc2xpZGVyc1sxXS54KSk7XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgcmFuZ2VTdGFydC5wYXlsb2FkLFxyXG4gICAgICAgIHJhbmdlTW9kZVxyXG4gICAgICAgICAgPyByYW5nZUVuZC5yYW5nZS5wYXlsb2FkXHJcbiAgICAgICAgICA6IHJhbmdlRW5kLnBheWxvYWRcclxuICAgICAgXTtcclxuICAgIH07XHJcbiAgICAvLyBIZWxwZXJzIC0gRW5kLlxyXG5cclxuICAgIC8vIGNsZWFyIEhUTUwgY29udGVudHNcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcklkKS5pbm5lckhUTUwgPSAnJztcclxuICAgIGNvbnN0IHN2ZyA9IGQzXHJcbiAgICAgIC5zZWxlY3QoYCMke2NvbnRhaW5lcklkfWApXHJcbiAgICAgIC5hdHRyKCd2aWV3Qm94JywgYDAgMCAke3dpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHR9ICR7aGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b219YCk7XHJcblxyXG4gICAgY29uc3Qgc2NhbGVIZWlnaHQgPSBkM1xyXG4gICAgICAuc2NhbGVTeW1sb2coKSAvLyBtb3N0IHNpbWlsYXIgc2NhbGUgdG8gdGhlIG9yaWdpbmFsXHJcbiAgICAgIC5kb21haW4oWzAsIGQzLm1heChpdGVtcywgKGQpID0+IGQudmFsdWUpXSlcclxuICAgICAgLnJhbmdlKFtoZWlnaHQsIDBdKTtcclxuXHJcbiAgICAvLyBHUkFESUVOVFxyXG4gICAgY29uc3QgZGVmcyA9IHN2Zy5hcHBlbmQoJ2RlZnMnKTsgLy8gZGVmaW5pdGlvbnNcclxuICAgIGNvbnN0IGdyYWRpZW50ID0gZGVmc1xyXG4gICAgICAuYXBwZW5kKCdsaW5lYXJHcmFkaWVudCcpXHJcbiAgICAgIC5hdHRyKCdpZCcsICdncmFkaWVudCcpXHJcbiAgICAgIC5hdHRyKCdncmFkaWVudFVuaXRzJywgJ3VzZXJTcGFjZU9uVXNlJylcclxuICAgICAgLmF0dHIoJ3gxJywgMClcclxuICAgICAgLmF0dHIoJ3kxJywgaGVpZ2h0KVxyXG4gICAgICAuYXR0cigneDInLCAwKVxyXG4gICAgICAuYXR0cigneTInLCBtYXJnaW4udG9wKTtcclxuICAgIGdyYWRpZW50XHJcbiAgICAgIC5hcHBlbmQoJ3N0b3AnKVxyXG4gICAgICAuYXR0cignY2xhc3MnLCAnc3RhcnQnKVxyXG4gICAgICAuYXR0cignb2Zmc2V0JywgJzAlJylcclxuICAgICAgLmF0dHIoJ3N0b3AtY29sb3InLCBjb2xvdXJzLmJvdHRvbSkgLy8gYm90dG9tIGdyYWRpZW50XHJcbiAgICAgIC5hdHRyKCdzdG9wLW9wYWNpdHknLCAxKTtcclxuICAgIGdyYWRpZW50XHJcbiAgICAgIC5hcHBlbmQoJ3N0b3AnKVxyXG4gICAgICAuYXR0cignY2xhc3MnLCAnZW5kJylcclxuICAgICAgLmF0dHIoJ29mZnNldCcsICcxMDAlJylcclxuICAgICAgLmF0dHIoJ3N0b3AtY29sb3InLCBjb2xvdXJzLnRvcCkgLy8gdG9wIGdyYWRpZW50XHJcbiAgICAgIC5hdHRyKCdzdG9wLW9wYWNpdHknLCAxKTtcclxuXHJcbiAgICAvLyBEUkFXIElOU0lERSBNQVJHSU5TXHJcbiAgICBjb25zdCBnID0gc3ZnXHJcbiAgICAgIC5hcHBlbmQoJ2cnKVxyXG4gICAgICAuYXR0cignY2xhc3MnLCAnY2hhcnQnKVxyXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke21hcmdpbi50b3B9KWApO1xyXG5cclxuICAgIGNvbnN0IGJhcnNMYXllciA9IGcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnYmFycycpO1xyXG4gICAgY29uc3QgY29udHJvbHNMYXllciA9IGcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnY29udHJvbHMnKTtcclxuXHJcbiAgICAvLyBCQVIgQ0hBUlRcclxuICAgIGJhcnNMYXllciAvLyBiYXJzXHJcbiAgICAgIC5zZWxlY3RBbGwoJ3JlY3QuYmFycycpXHJcbiAgICAgIC5kYXRhKGl0ZW1zKVxyXG4gICAgICAuam9pbigncmVjdCcpXHJcbiAgICAgIC5hdHRyKCdjbGFzcycsICdiYXJzJylcclxuICAgICAgLmF0dHIoJ3dpZHRoJywgTEFCRUx0b1guYmFuZHdpZHRoKVxyXG4gICAgICAuYXR0cignaGVpZ2h0JywgKGQpID0+IGhlaWdodCAtIHNjYWxlSGVpZ2h0KGQudmFsdWUpKVxyXG4gICAgICAuYXR0cigneScsIChkKSA9PiBzY2FsZUhlaWdodChkLnZhbHVlKSlcclxuICAgICAgLmF0dHIoJ3gnLCAoZCkgPT4gTEFCRUx0b1goZC5sYWJlbCkpXHJcbiAgICAgIC5hdHRyKCdkYXRhLXN0YXJ0JywgKGQpID0+IGQucGF5bG9hZCkgLy8gbWFrZSB0aGUgZGF0YSBlYXNpbHkgYWNjZXNzaWJsZVxyXG4gICAgICAuYXR0cignZGF0YS1lbmQnLCAoZCkgPT4gKGQucmFuZ2UgPyBkLnJhbmdlLnBheWxvYWQgOiBkLnBheWxvYWQpKVxyXG4gICAgICAuYXR0cignZmlsbCcsICd1cmwoI2dyYWRpZW50KScpO1xyXG5cclxuICAgIGJhcnNMYXllciAvLyBjYXRjaCBiYXIgZXZlbnRzXHJcbiAgICAgIC5vbignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeWVhciA9IFh0b0xBQkVMKGV2ZW50Lm9mZnNldFggLSBtYXJnaW4ubGVmdCk7XHJcbiAgICAgICAgZDMuc2VsZWN0QWxsKCdyZWN0LmJhcnMnKS5hdHRyKCdmaWxsJywgKGQpID0+IHtcclxuICAgICAgICAgIGlmICh5ZWFyID09PSBkLmxhYmVsKSByZXR1cm4gJyNCMENDRjgnO1xyXG4gICAgICAgICAgcmV0dXJuIGNvbG91ckJhcnMoZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbignbW91c2VvdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgZDMuc2VsZWN0QWxsKCdyZWN0LmJhcnMnKS5hdHRyKCdmaWxsJywgKGQpID0+IGNvbG91ckJhcnMoZCkpO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSBYdG9MQUJFTChldmVudC5vZmZzZXRYIC0gbWFyZ2luLmxlZnQpO1xyXG4gICAgICAgIGNvbnN0IHhBeGlzVmFsdWUgPSBMQUJFTHRvWChsYWJlbCkgKyBMQUJFTHRvWC5iYW5kd2lkdGgoKSAvIDI7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB7XHJcbiAgICAgICAgICB4OiB4QXhpc1ZhbHVlLFxyXG4gICAgICAgICAgeTogaGVpZ2h0XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNsaWRlcnMgPSBbXHJcbiAgICAgICAgICAvLyBhdm9pZCBqb2luaW5nIHRoZSB0d28gb2JqZWN0cyFcclxuICAgICAgICAgIHsgLi4ubmV3VmFsdWUgfSxcclxuICAgICAgICAgIHsgLi4ubmV3VmFsdWUgfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmFuZ2VQaWNrZXJcclxuICAgICAgICAgIC5kYXRhKHRoaXMuc2xpZGVycylcclxuICAgICAgICAgIC5zZWxlY3QoJ2NpcmNsZScpXHJcbiAgICAgICAgICAudHJhbnNpdGlvbigpXHJcbiAgICAgICAgICAuZWFzZShkMy5lYXNlUXVhZE91dClcclxuICAgICAgICAgIC5kdXJhdGlvbig1NTApXHJcbiAgICAgICAgICAuYXR0cignY3gnLCAoZCkgPT4gZC54KTtcclxuICAgICAgICBjb250cm9sc0xheWVyXHJcbiAgICAgICAgICAuc2VsZWN0KCdwYXRoLmJsdWVsaW5lJylcclxuICAgICAgICAgIC50cmFuc2l0aW9uKClcclxuICAgICAgICAgIC5lYXNlKGQzLmVhc2VRdWFkT3V0KVxyXG4gICAgICAgICAgLmR1cmF0aW9uKDU1MClcclxuICAgICAgICAgIC5hdHRyKCdkJywgZDMubGluZSgpKHRoaXMuc2xpZGVycy5tYXAoKGQpID0+IFtkLngsIGQueV0pKSk7XHJcbiAgICAgICAgY29udHJvbHNMYXllclxyXG4gICAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXHJcbiAgICAgICAgICAudHJhbnNpdGlvbigpXHJcbiAgICAgICAgICAuZWFzZShkMy5lYXNlUXVhZE91dClcclxuICAgICAgICAgIC5kdXJhdGlvbig1NTApXHJcbiAgICAgICAgICAuYXR0cigneCcsICgpID0+IHhBeGlzVmFsdWUpXHJcbiAgICAgICAgICAudGV4dCgoZCwgaSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXJhbmdlTW9kZSkgcmV0dXJuIGxhYmVsO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gaXRlbXMuZmluZCgoaXQpID0+IGl0LmxhYmVsID09PSBsYWJlbCk7XHJcbiAgICAgICAgICAgIGlmIChpID4gMCkgcmV0dXJuIGl0ZW0ucmFuZ2UubGFiZWw7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmxhYmVsO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgZy5zZWxlY3RBbGwoJ3JlY3QuYmFycycpLmF0dHIoJ2ZpbGwnLCAoZCkgPT4gY29sb3VyQmFycyhkKSk7XHJcbiAgICAgICAgdGhpcy50ZXh0Q29sbGlzaW9uKHRoaXMuc2xpZGVycyk7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdyYW5nZXNlbGVjdGVkJywgdGhpcy5nZXRTZWxlY3RlZFJhbmdlKCkpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBjb250cm9sc0xheWVyIC8vIGdyYXkgbGluZVxyXG4gICAgICAuYXBwZW5kKCdwYXRoJylcclxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2dyYXlsaW5lJylcclxuICAgICAgLmF0dHIoXHJcbiAgICAgICAgJ2QnLFxyXG4gICAgICAgIGQzLmxpbmUoKShbXHJcbiAgICAgICAgICBbMCwgaGVpZ2h0XSxcclxuICAgICAgICAgIFt3aWR0aCwgaGVpZ2h0XVxyXG4gICAgICAgIF0pXHJcbiAgICAgIClcclxuICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIDIpXHJcbiAgICAgIC5hdHRyKCdvcGFjaXR5JywgMSlcclxuICAgICAgLmF0dHIoJ3N0cm9rZScsICcjQzFDNUM3Jyk7XHJcblxyXG4gICAgY29udHJvbHNMYXllciAvLyBibHVlIGxpbmVcclxuICAgICAgLmFwcGVuZCgncGF0aCcpXHJcbiAgICAgIC5hdHRyKCdjbGFzcycsICdibHVlbGluZScpXHJcbiAgICAgIC5hdHRyKCdkJywgZDMubGluZSgpKHRoaXMuc2xpZGVycy5tYXAoKGQpID0+IFtkLngsIGQueV0pKSlcclxuICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIDIpXHJcbiAgICAgIC5hdHRyKCdzdHJva2UnLCBjb2xvdXJzLmFjY2VudCk7XHJcblxyXG4gICAgY29uc3QgcmFuZ2VQaWNrZXIgPSBjb250cm9sc0xheWVyXHJcbiAgICAgIC5zZWxlY3RBbGwoJ2cucmFuZ2VwaWNrZXInKVxyXG4gICAgICAuZGF0YSh0aGlzLnNsaWRlcnMuc29ydCgoYSwgYikgPT4gZDMuYXNjZW5kaW5nKGEueCwgYi54KSkpXHJcbiAgICAgIC5qb2luKCdnJylcclxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3JhbmdlcGlja2VyJyk7XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby10aGlzLWFsaWFzXHJcbiAgICBjb25zdCBzZWxmID0gdGhpczsgLy8gRklYTUU6IEFsbG93IHVzZSBvZiBjbGFzcyBcInRoaXNcIiBpbnNpZGUgZHJhZ2dpbmcgdXBkYXRlO1xyXG4gICAgLyoqXHJcbiAgICogQW5pbWF0ZSB0aGUgZWxlbWVudHMgd2hpbGUgdGhlIHVzZXIgaXMgZHJhZ2dpbmcgb25lIG9mIHRoZSByYW5nZSBzZWxlY3RvcnNcclxuICAgKi9cclxuICAgIGZ1bmN0aW9uIGRyYWdnaW5nVXBkYXRlKGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgIGNvbnN0IGxhYmVsID0gWHRvTEFCRUwoZXZlbnQueCk7XHJcbiAgICAgIGNvbnN0IHhBeGlzVmFsdWUgPSBMQUJFTHRvWChsYWJlbCkgKyBMQUJFTHRvWC5iYW5kd2lkdGgoKSAvIDI7XHJcbiAgICAgIGNvbnN0IHliID0gW107XHJcbiAgICAgIGcuc2VsZWN0QWxsKCdjaXJjbGUnKS5lYWNoKGZ1bmN0aW9uIHNldEJhbGxQb3NpdGlvbigpIHtcclxuICAgICAgICB5Yi5wdXNoKHsgeDogK2QzLnNlbGVjdCh0aGlzKS5hdHRyKCdjeCcpLCB5OiBoZWlnaHQgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZWxmLnNsaWRlcnMgPSB5Yi5zb3J0KChhLCBiKSA9PiBkMy5hc2NlbmRpbmcoYS54LCBiLngpKTtcclxuICAgICAgLy8gbW92ZSB0aGUgY2lyY2xlXHJcbiAgICAgIGQzLnNlbGVjdCh0aGlzKVxyXG4gICAgICAgIC5zZWxlY3QoJ2NpcmNsZScpXHJcbiAgICAgICAgLmF0dHIoJ2N4JywgZGF0YS54ID0geEF4aXNWYWx1ZSk7XHJcbiAgICAgIC8vIG1vdmUgdGhlIGJsdWUgbGluZVxyXG4gICAgICBjb250cm9sc0xheWVyXHJcbiAgICAgICAgLnNlbGVjdCgncGF0aC5ibHVlbGluZScpXHJcbiAgICAgICAgLmF0dHIoJ2QnLCBkMy5saW5lKCkoc2VsZi5zbGlkZXJzLm1hcCgoZCkgPT4gW2QueCwgZC55XSkpKTtcclxuICAgICAgLy8gY2hhbmdlIHRoZSB0ZXh0IHBvc2l0aW9uXHJcbiAgICAgIGQzLnNlbGVjdCh0aGlzKVxyXG4gICAgICAgIC5zZWxlY3QoJ3RleHQnKVxyXG4gICAgICAgIC5hdHRyKCd4JywgKCkgPT4geEF4aXNWYWx1ZSk7XHJcbiAgICAgIC8vIGNoYW5nZSB0aGUgdGV4dCB2YWx1ZXNcclxuICAgICAgY29udHJvbHNMYXllclxyXG4gICAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxyXG4gICAgICAgIC50ZXh0KChkKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBsID0gWHRvTEFCRUwoZC54KTtcclxuICAgICAgICAgIGlmICghcmFuZ2VNb2RlKSByZXR1cm4gbDtcclxuICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gc2VsZi5zbGlkZXJzLmZpbmRJbmRleCgoc2xpZGVyKSA9PiBzbGlkZXIueCA9PT0gZC54KTtcclxuICAgICAgICAgIGNvbnN0IHJhbmdlID0gc2VsZi5nZXRTZWxlY3RlZFJhbmdlKCk7XHJcbiAgICAgICAgICBpZiAocG9zaXRpb24gPT09IDEpIHJldHVybiByYW5nZVsxXTtcclxuICAgICAgICAgIHJldHVybiByYW5nZVswXTtcclxuICAgICAgICB9KTtcclxuICAgICAgc2VsZi50ZXh0Q29sbGlzaW9uKHNlbGYuc2xpZGVycyk7XHJcbiAgICAgIC8vIGNvbG91ciB0aGUgYmFyc1xyXG4gICAgICBnLnNlbGVjdEFsbCgncmVjdC5iYXJzJykuYXR0cignZmlsbCcsIChkKSA9PiBjb2xvdXJCYXJzKGQpKTtcclxuICAgIH1cclxuXHJcbiAgICByYW5nZVBpY2tlciAvLyBkcmFnIGhhbmRsZXJcclxuICAgICAgLmNhbGwoZDMuZHJhZygpXHJcbiAgICAgICAgLm9uKCdkcmFnJywgZHJhZ2dpbmdVcGRhdGUpXHJcbiAgICAgICAgLm9uKCdlbmQnLCAoZXZlbnQsIGRhdGEpID0+IHtcclxuICAgICAgICAgIC8vIHVwZGF0ZSBvbmUgbGFzdCB0aW1lIHRvIHByZXZlbnQgZGVzeW5jaW5nXHJcbiAgICAgICAgICBkcmFnZ2luZ1VwZGF0ZShldmVudCwgZGF0YSk7XHJcbiAgICAgICAgICAvLyBlbWl0IHRoZSBzZWxlY3RlZCByYW5nZVxyXG4gICAgICAgICAgdGhpcy5lbWl0KCdyYW5nZXNlbGVjdGVkJywgdGhpcy5nZXRTZWxlY3RlZFJhbmdlKCkpO1xyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICByYW5nZVBpY2tlclxyXG4gICAgICAuYXBwZW5kKCdjaXJjbGUnKVxyXG4gICAgICAuYXR0cignY3gnLCAoZCkgPT4gZC54KVxyXG4gICAgICAuYXR0cignY3knLCAoZCkgPT4gZC55KVxyXG4gICAgICAuYXR0cigncicsIDkpXHJcbiAgICAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJylcclxuICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIDIpXHJcbiAgICAgIC5hdHRyKCdzdHJva2UnLCBjb2xvdXJzLmFjY2VudClcclxuICAgICAgLmF0dHIoJ3N0eWxlJywgJ2N1cnNvcjogcG9pbnRlcicpO1xyXG5cclxuICAgIHJhbmdlUGlja2VyXHJcbiAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxyXG4gICAgICAuYXR0cignZm9udC1mYW1pbHknLCAnUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZicpXHJcbiAgICAgIC5hdHRyKCdmb250LXNpemUnLCAnMTJweCcpXHJcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxyXG4gICAgICAuYXR0cigneScsIChkKSA9PiBkLnkgKyBtYXJnaW4uYm90dG9tIC8gMilcclxuICAgICAgLmF0dHIoJ3gnLCAoZCkgPT4gZC54KVxyXG4gICAgICAuYXR0cignZmlsbCcsIGNvbG91cnMuYWNjZW50KVxyXG4gICAgICAudGV4dCgoZCwgaSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGwgPSBYdG9MQUJFTChkLngpO1xyXG4gICAgICAgIGlmIChyYW5nZU1vZGUgJiYgaSA9PT0gMSkge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubGFiZWwgPT09IGwpLnJhbmdlLmxhYmVsO1xyXG4gICAgICAgIH0gcmV0dXJuIGw7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGlmIChheGlzPy55QXhpcz8uc2hvdykge1xyXG4gICAgICBjb25zdCB5QXhpcyA9IGQzLmF4aXNMZWZ0KHNjYWxlSGVpZ2h0KVxyXG4gICAgICAgIC50aWNrcyhheGlzLnlBeGlzLnRpY2tBbW91bnQgPz8gMilcclxuICAgICAgICAudGlja1ZhbHVlcyhheGlzLnlBeGlzLnZhbHVlcyA/IGF4aXMueUF4aXMudmFsdWVzIDogbnVsbCk7XHJcbiAgICAgIGNvbnN0IHlBeGlzR3JvdXAgPSBzdmcuYXBwZW5kKCdnJylcclxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwgJHttYXJnaW4udG9wfSlgKVxyXG4gICAgICAgIC5jYWxsKHlBeGlzKTtcclxuXHJcbiAgICAgIHlBeGlzR3JvdXAuc2VsZWN0QWxsKCdwYXRoLCBsaW5lJykuc3R5bGUoJ3N0cm9rZScsIGNvbG91cnMuYWNjZW50KTtcclxuICAgICAgeUF4aXNHcm91cC5zZWxlY3RBbGwoJ3RleHQnKS5zdHlsZSgnZmlsbCcsIGNvbG91cnMuYWNjZW50KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvKiogQXZvaWQgY29sbGlzaW9uIG9mIHRoZSBzbGlkZXIgbGFiZWxzICovXHJcbiAgdGV4dENvbGxpc2lvbiA9IChzbGlkZXJzOiBTbGlkZXJzKSA9PiB7XHJcbiAgICAvLyBwcmUtcmVxdWlzaXRlc1xyXG4gICAgY29uc3QgY29udHJvbHNMYXllciA9IHRoaXMuZDMuc2VsZWN0KCdnLmNoYXJ0Jykuc2VsZWN0KCdnLmNvbnRyb2xzJyk7XHJcbiAgICBjb25zdCB7IGl0ZW1zLCBtYXJnaW4gfSA9IHRoaXMuZGF0YTtcclxuICAgIGNvbnN0IHJhbmdlTW9kZSA9IGl0ZW1zLmV2ZXJ5KChkKSA9PiBkLnJhbmdlKTtcclxuICAgIC8vIHJ1biBjb2xsaXNpb24gZGV0ZWN0aW9uXHJcbiAgICBjb25zdCBpc0NvbGxpZGluZyA9IHNsaWRlcnNbMF0ueCA9PT0gc2xpZGVyc1sxXS54O1xyXG4gICAgaWYgKHJhbmdlTW9kZSAmJiBpc0NvbGxpZGluZykge1xyXG4gICAgICBjb250cm9sc0xheWVyXHJcbiAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXHJcbiAgICAgICAgLmF0dHIoJ3knLCAoZCwgaSkgPT4gKGkgPiAwID8gZC55ICsgbWFyZ2luLmJvdHRvbSAvIDIgKyAxMiA6IGQueSArIG1hcmdpbi5ib3R0b20gLyAyKSlcclxuICAgICAgICAudGV4dCgoZCwgaSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmFuZ2UgPSB0aGlzLmdldFNlbGVjdGVkUmFuZ2UoKTtcclxuICAgICAgICAgIHJldHVybiByYW5nZVtpXTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnRyb2xzTGF5ZXJcclxuICAgICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcclxuICAgICAgICAuYXR0cigneScsIChkKSA9PiBkLnkgKyBtYXJnaW4uYm90dG9tIC8gMik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLyoqIEdldCB4LWF4aXMgcG9zaXRpb24gZnJvbSBsYWJlbCAqL1xyXG4gIGxhYmVsVG9YKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZDNcclxuICAgICAgLnNjYWxlQmFuZCgpXHJcbiAgICAgIC5kb21haW4odGhpcy5kYXRhLml0ZW1zLm1hcCgoZCkgPT4gZC5sYWJlbCkpXHJcbiAgICAgIC5yYW5nZShbMCwgdGhpcy5kYXRhLndpZHRoXSlcclxuICAgICAgLnBhZGRpbmdJbm5lcigwLjE3KVxyXG4gICAgICAucGFkZGluZ091dGVyKDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFB1YmxpYyBhcGkgdGhhdCBhbGxvd3MgdG8gZGluYW1pY2FsbHkgY2hhbmdlIHRoZSBiYXJzICovXHJcbiAgc2V0QmFycyA9IChuZXdCYXJzKSA9PiB7XHJcbiAgICB0aGlzLmRhdGEuaXRlbXMgPSBuZXdCYXJzO1xyXG4gICAgdGhpcy5kcmF3KCk7XHJcbiAgICB0aGlzLmQzLnNlbGVjdEFsbCgncmVjdC5iYXJzJykuYXR0cignZmlsbCcsIChkKSA9PiB0aGlzLmNvbG91ckJhcnMoZCkpO1xyXG4gIH07XHJcblxyXG4gIC8qKiBQdWJsaWMgYXBpIHRoYXQgYWxsb3dzIHRvIGRpbmFtaWNhbGx5IGNoYW5nZSB0aGUgc2xpZGVyIHBvc2l0aW9uICovXHJcbiAgc2V0U2xpZGVycyA9IChbc3RhcnRMYWJlbCwgZW5kTGFiZWxdOiBMYWJlbENvdXBsZSwgZW1pdCA9IHRydWUpID0+IHtcclxuICAgIHRoaXMuZGF0YS5zZXRTbGlkZXJzID0gW2Ake3N0YXJ0TGFiZWx9YCwgYCR7ZW5kTGFiZWx9YF07XHJcbiAgICB0aGlzLmRyYXcoKTtcclxuICAgIHRoaXMuZDMuc2VsZWN0QWxsKCdyZWN0LmJhcnMnKS5hdHRyKCdmaWxsJywgKGQpID0+IHRoaXMuY29sb3VyQmFycyhkKSk7XHJcbiAgICBjb25zdCByYW5nZSA9IHRoaXMuZ2V0U2VsZWN0ZWRSYW5nZSgpO1xyXG4gICAgaWYgKGVtaXQpIHRoaXMuZW1pdCgncmFuZ2VzZWxlY3RlZCcsIHJhbmdlKTtcclxuICAgIHRoaXMudGV4dENvbGxpc2lvbih0aGlzLnNsaWRlcnMpO1xyXG4gICAgcmV0dXJuIHJhbmdlO1xyXG4gIH07XHJcblxyXG4gIC8qKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGxvYWRlZCAqL1xyXG4gIGVtaXRMb2FkZWQocGF5bG9hZCkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnbG9hZGVkJywgcGF5bG9hZCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgKm5nSWY9XCJkYXRhXCIgY2xhc3M9XCJuNy1oaXN0b2dyYW0tcmFuZ2VcIj5cclxuICAgIDxzdmcgI2hpc3RvZ3JhbVJhbmdlIFtpZF09XCJkYXRhLmNvbnRhaW5lcklkXCI+PC9zdmc+XHJcbjwvZGl2PlxyXG4iXX0=