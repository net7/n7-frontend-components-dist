/* eslint-disable @typescript-eslint/no-use-before-define */
//---------------------------
// HISTOGRAM-RANGE.ts
//---------------------------
import { __assign, __decorate, __metadata, __read } from "tslib";
import { Component, Input } from '@angular/core';
var HistogramRangeComponent = /** @class */ (function () {
    function HistogramRangeComponent() {
        var _this = this;
        this._loaded = false;
        this.draw = function () {
            var _a, _b;
            var d3 = _this.d3;
            var _c = _this.data, width = _c.width, margin = _c.margin, height = _c.height, items = _c.items, colours = _c.colours, containerId = _c.containerId, axis = _c.axis, setSliders = _c.setSliders;
            // data validation
            var rangeMode = items.every(function (d) { return d.range; });
            if (!rangeMode && items.some(function (d) { return !d.range; })) {
                throw Error('All items must have the "range" property');
            }
            // Helpers - Start:
            var LABELtoX = d3
                .scaleBand()
                .domain(items.map(function (d) { return d.label; }))
                .range([0, width])
                .paddingInner(0.17)
                .paddingOuter(1);
            var XtoLABEL = function (value) {
                var domain = LABELtoX.domain();
                var paddingOuter = LABELtoX(domain[0]);
                var eachBand = LABELtoX.step();
                var index = Math.floor(((value - paddingOuter) / eachBand));
                return domain[Math.max(0, Math.min(index, domain.length - 1))];
            };
            // YEAR SELECTION CIRCLES
            var sliders;
            if (setSliders) {
                sliders = setSliders
                    .map(function (d) { return ({ x: LABELtoX(d) + LABELtoX.bandwidth() / 2, y: height }); });
            }
            else {
                sliders = d3
                    .extent(items, function (d) { return d.label; })
                    .map(function (d) { return ({ x: LABELtoX(d) + LABELtoX.bandwidth() / 2, y: height }); });
            }
            function isInRange(y) {
                var allItems = sliders.map(function (d) { return XtoLABEL(d.x); });
                if (y >= d3.min(allItems) && y <= d3.max(allItems))
                    return true;
                return false;
            }
            function colourBars(d) {
                if (isInRange(d.label))
                    return 'url(#gradient)';
                return '#e3e3e3';
            }
            _this.colourBars = colourBars;
            function getSelectedRange() {
                var rangeStart = items.find(function (it) { return it.label === XtoLABEL(sliders[0].x); });
                var rangeEnd = items.find(function (it) { return it.label === XtoLABEL(sliders[1].x); });
                return [
                    rangeStart.payload,
                    rangeMode
                        ? rangeEnd.range.payload
                        : rangeEnd.payload
                ];
            }
            _this.getSelectedRange = getSelectedRange;
            function textCollision() {
                var isColliding = sliders[0].x === sliders[1].x;
                // const [sliderLeft, sliderRight] = sliders;
                // let isColliding = false;
                // if ((+sliderLeft.x) > (sliderRight.x - 30)) isColliding = true;
                if (rangeMode && isColliding) {
                    controlsLayer
                        .selectAll('text')
                        .attr('y', function (d, i) { return (i > 0 ? d.y + margin.bottom / 2 + 12 : d.y + margin.bottom / 2); })
                        .text(function (d, i) {
                        var range = getSelectedRange();
                        return range[i];
                    });
                }
                else {
                    controlsLayer
                        .selectAll('text')
                        .attr('y', function (d) { return d.y + margin.bottom / 2; });
                }
            }
            // Helpers - End.
            // clear HTML contents
            document.getElementById(containerId).innerHTML = '';
            var svg = d3
                .select("#" + containerId)
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom);
            var scaleHeight = d3
                .scaleSymlog() // most similar scale to the original
                .domain([0, d3.max(items, function (d) { return d.value; })])
                .range([height, 0]);
            // GRADIENT
            var defs = svg.append('defs'); // definitions
            var gradient = defs
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
            var g = svg
                .append('g')
                .attr('class', 'chart')
                .attr('transform', "translate(" + margin.left + "," + margin.top + ")");
            var barsLayer = g.append('g').attr('class', 'bars');
            var controlsLayer = g.append('g').attr('class', 'controls');
            // BAR CHART
            barsLayer // bars
                .selectAll('rect.bars')
                .data(items)
                .join('rect')
                .attr('class', 'bars')
                .attr('width', LABELtoX.bandwidth)
                .attr('height', function (d) { return height - scaleHeight(d.value); })
                .attr('y', function (d) { return scaleHeight(d.value); })
                .attr('x', function (d) { return LABELtoX(d.label); })
                .attr('data-start', function (d) { return d.payload; }) // make the data easily accessible
                .attr('data-end', function (d) { return (d.range ? d.range.payload : d.payload); })
                .attr('fill', 'url(#gradient)');
            barsLayer // catch bar events
                .on('mousemove', function (event) {
                var year = XtoLABEL(event.offsetX - margin.left);
                d3.selectAll('rect.bars').attr('fill', function (d) {
                    if (year === d.label)
                        return '#B0CCF8';
                    return colourBars(d);
                });
            })
                .on('mouseout', function () {
                d3.selectAll('rect.bars').attr('fill', function (d) { return colourBars(d); });
            })
                .on('click', function (event) {
                var label = XtoLABEL(event.offsetX - margin.left);
                var xAxisValue = LABELtoX(label) + LABELtoX.bandwidth() / 2;
                var newValue = {
                    x: xAxisValue,
                    y: height
                };
                sliders = [
                    __assign({}, newValue),
                    __assign({}, newValue)
                ];
                rangePicker
                    .data(sliders)
                    .select('circle')
                    .transition()
                    .ease(d3.easeQuadOut)
                    .duration(550)
                    .attr('cx', function (d) { return d.x; });
                controlsLayer
                    .select('path.blueline')
                    .transition()
                    .ease(d3.easeQuadOut)
                    .duration(550)
                    .attr('d', d3.line()(sliders.map(function (d) { return [d.x, d.y]; })));
                controlsLayer
                    .selectAll('text')
                    .transition()
                    .ease(d3.easeQuadOut)
                    .duration(550)
                    .attr('x', function () { return xAxisValue; })
                    .text(function (d, i) {
                    if (!rangeMode)
                        return label;
                    var item = items.find(function (it) { return it.label === label; });
                    if (i > 0)
                        return item.range.label;
                    return item.label;
                });
                g.selectAll('rect.bars').attr('fill', function (d) { return colourBars(d); });
                textCollision();
                _this.emit('rangeselected', getSelectedRange());
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
                .attr('d', d3.line()(sliders.map(function (d) { return [d.x, d.y]; })))
                .attr('stroke-width', 2)
                .attr('stroke', colours.accent);
            var rangePicker = controlsLayer
                .selectAll('g.rangepicker')
                .data(sliders.sort(function (a, b) { return d3.ascending(a.x, b.x); }))
                .join('g')
                .attr('class', 'rangepicker');
            /**
             * Animate the elements while the user is dragging one of the range selectors
             */
            function draggingUpdate(event, data) {
                var label = XtoLABEL(event.x);
                var xAxisValue = LABELtoX(label) + LABELtoX.bandwidth() / 2;
                var yb = [];
                g.selectAll('circle').each(function setBallPosition() {
                    yb.push({ x: +d3.select(this).attr('cx'), y: height });
                });
                sliders = yb.sort(function (a, b) { return d3.ascending(a.x, b.x); });
                // move the circle
                d3.select(this)
                    .select('circle')
                    .attr('cx', data.x = xAxisValue);
                // move the blue line
                controlsLayer
                    .select('path.blueline')
                    .attr('d', d3.line()(sliders.map(function (d) { return [d.x, d.y]; })));
                // change the text position
                d3.select(this)
                    .select('text')
                    .attr('x', function () { return xAxisValue; });
                // change the text values
                controlsLayer
                    .selectAll('text')
                    .text(function (d) {
                    var l = XtoLABEL(d.x);
                    if (!rangeMode)
                        return l;
                    var position = sliders.findIndex(function (slider) { return slider.x === d.x; });
                    var range = getSelectedRange();
                    if (position === 1)
                        return range[1];
                    return range[0];
                });
                textCollision();
                // colour the bars
                g.selectAll('rect.bars').attr('fill', function (d) { return colourBars(d); });
            }
            rangePicker // drag handler
                .call(d3.drag()
                .on('drag', draggingUpdate)
                .on('end', function (event, data) {
                // update one last time to prevent desyncing
                draggingUpdate(event, data);
                // emit the selected range
                _this.emit('rangeselected', getSelectedRange());
            }));
            rangePicker
                .append('circle')
                .attr('cx', function (d) { return d.x; })
                .attr('cy', function (d) { return d.y; })
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
                .attr('y', function (d) { return d.y + margin.bottom / 2; })
                .attr('x', function (d) { return d.x; })
                .attr('fill', colours.accent)
                .text(function (d, i) {
                var l = XtoLABEL(d.x);
                if (rangeMode && i === 1) {
                    return items.find(function (item) { return item.label === l; }).range.label;
                }
                return l;
            });
            if ((_a = axis === null || axis === void 0 ? void 0 : axis.yAxis) === null || _a === void 0 ? void 0 : _a.show) {
                var yAxis = d3.axisLeft(scaleHeight)
                    .ticks((_b = axis.yAxis.tickAmount) !== null && _b !== void 0 ? _b : 2)
                    .tickValues(axis.yAxis.values ? axis.yAxis.values : null);
                var yAxisGroup = svg.append('g')
                    .attr('transform', "translate(" + margin.left + ", " + margin.top + ")")
                    .call(yAxis);
                yAxisGroup.selectAll('path, line').style('stroke', colours.accent);
                yAxisGroup.selectAll('text').style('fill', colours.accent);
            }
        };
        this.setValue = function (_a) {
            var _b = __read(_a, 2), startLabel = _b[0], endLabel = _b[1];
            _this.data.setSliders = [startLabel, endLabel];
            _this.draw();
            _this.d3.selectAll('rect.bars').attr('fill', function (d) { return _this.colourBars(d); });
            var range = _this.getSelectedRange();
            _this.emit('rangeselected', range);
            return range;
        };
    }
    HistogramRangeComponent.prototype.ngAfterContentChecked = function () {
        var _this = this;
        /*
         Waits for the dom to be loaded, then fires the draw function
         that renders the chart.
        */
        if (this.data) {
            if (this._loaded)
                return;
            this._loaded = true;
            setTimeout(function () {
                import('d3').then(function (module) {
                    _this.d3 = module;
                    _this.draw();
                    _this.emitLoaded(true);
                    if (_this.data && _this.data.setDraw) {
                        _this.data.setDraw(_this.draw);
                    }
                    if (_this.data.setApi) { // expose the component api
                        _this.data.setApi({
                            setValue: _this.setValue,
                        });
                    }
                });
            });
        }
    };
    HistogramRangeComponent.prototype.labelToX = function () {
        return this.d3
            .scaleBand()
            .domain(this.data.items.map(function (d) { return d.label; }))
            .range([0, this.data.width])
            .paddingInner(0.17)
            .paddingOuter(1);
    };
    HistogramRangeComponent.prototype.emitLoaded = function (payload) {
        if (!this.emit)
            return;
        this.emit('loaded', payload);
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
    return HistogramRangeComponent;
}());
export { HistogramRangeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9ncmFtLXJhbmdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oaXN0b2dyYW0tcmFuZ2UvaGlzdG9ncmFtLXJhbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDREQUE0RDtBQUM1RCw2QkFBNkI7QUFDN0IscUJBQXFCO0FBQ3JCLDZCQUE2Qjs7QUFFN0IsT0FBTyxFQUF1QixTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBd0Z0RTtJQUFBO1FBQUEsaUJBc1hDO1FBN1dTLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFnQ3hCLFNBQUksR0FBRzs7WUFDRyxJQUFBLGFBQUUsQ0FBVTtZQUNkLElBQUEsZUFJTyxFQUhYLGdCQUFLLEVBQUUsa0JBQU0sRUFBRSxrQkFBTSxFQUNyQixnQkFBSyxFQUFFLG9CQUFPLEVBQUUsNEJBQVcsRUFDM0IsY0FBSSxFQUFFLDBCQUNLLENBQUM7WUFFZCxrQkFBa0I7WUFDbEIsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFSLENBQVEsQ0FBQyxFQUFFO2dCQUM3QyxNQUFNLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO2FBQ3pEO1lBRUQsbUJBQW1CO1lBQ25CLElBQU0sUUFBUSxHQUFHLEVBQUU7aUJBQ2hCLFNBQVMsRUFBRTtpQkFDWCxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLENBQUM7aUJBQ2pDLEtBQUssQ0FBQyxDQUFD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VCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLHdJQUFxQztTQUN0QyxDQUFDO09BQ1csdUJBQXVCLENBc1huQztJQUFELDhCQUFDO0NBQUEsQUF0WEQsSUFzWEM7U0F0WFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lICovXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEhJU1RPR1JBTS1SQU5HRS50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBIaXN0b2dyYW1SYW5nZUNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEhpc3RvZ3JhbVJhbmdlRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBoaXN0b2dyYW0tcmFuZ2Ugc3ZnXHJcbiAgICovXHJcbiAgY29udGFpbmVySWQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiB0b3RhbCB3aWR0aCBmb3IgdGhlIHN2ZyBlbGVtZW50XHJcbiAgICovXHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICAvKipcclxuICAgKiB0b3RhbCBoZWlnaHQgZm9yIHRoZSBzdmcgZWxlbWVudFxyXG4gICAqL1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIEludGVybmFsIG1hcmdpbnMgb2YgdGhlIHN2Z1xyXG4gICAqL1xyXG4gIG1hcmdpbjoge1xyXG4gICAgbGVmdDogbnVtYmVyO1xyXG4gICAgcmlnaHQ6IG51bWJlcjtcclxuICAgIHRvcDogbnVtYmVyO1xyXG4gICAgYm90dG9tOiBudW1iZXI7XHJcbiAgfTtcclxuICAvKipcclxuICAgKiBUaGVtZSBvZiB0aGUgaGlzdG9ncmFtXHJcbiAgICovXHJcbiAgY29sb3Vyczoge1xyXG4gICAgdG9wOiBzdHJpbmc7XHJcbiAgICBib3R0b206IHN0cmluZztcclxuICAgIGFjY2VudDogc3RyaW5nO1xyXG4gIH07XHJcbiAgLyoqXHJcbiAgICogRGF0YSBmb3IgdGhlIGhpc3RvZ3JhbSBiYXJzXHJcbiAgICovXHJcbiAgaXRlbXM6IHtcclxuICAgIC8qKiBkZWZhdWx0IGxhYmVsIG9mIHRoZSBpdGVtICovXHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgLyoqIHktYXhpcyB2YWx1ZSBvZiB0aGUgYmFyIChoZWlnaHQpICovXHJcbiAgICB2YWx1ZTogbnVtYmVyO1xyXG4gICAgLyoqIHBheWxvYWQgdGhhdCB0aGUgaXRlbSBzaG91bGQgZW1pdCB3aGVuIHNlbGVjdGVkICovXHJcbiAgICBwYXlsb2FkOiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqICd1cHBlcicgdmFsdWVzIG9mIHRoZSByYW5nZS5cclxuICAgICAqIG9ubHkgdXNlZCB3aGVuIGVhY2ggYmFyIHJlcHJlc2VudHMgYSByYW5nZS5cclxuICAgICAqL1xyXG4gICAgcmFuZ2U/OiB7XHJcbiAgICAgIC8qKiBsYWJlbCBsb2FkZWQgd2hlbiBzZWxlY3RlZCBieSB0aGUgcmlnaHQtbW9zdCBwb2ludGVyICovXHJcbiAgICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICAgIC8qKiBwYXlsb2FkIGVtaXR0ZWQgd2hlbiBzZWxlY3RlZCBieSB0aGUgcmlnaHQtbW9zdCBwb2ludGVyICovXHJcbiAgICAgIHBheWxvYWQ6IGFueTtcclxuICAgIH07XHJcbiAgfVtdO1xyXG4gIC8qKlxyXG4gICAqIEF4aXMgc2V0dGluZ3NcclxuICAgKi9cclxuICBheGlzPzoge1xyXG4gICAgLyoqIFkgQXhpcyBzZXR0aW5ncyAqL1xyXG4gICAgeUF4aXM/OiB7XHJcbiAgICAgIC8qKiBUdXJuIG9uIGFuZCBvZmYgdGhlIGF4aXMgKi9cclxuICAgICAgc2hvdz86IGJvb2xlYW47XHJcbiAgICAgIC8qKiBNYW51YWxseSBzZXQgdGhlIGF4aXMgdmFsdWVzIHRvIHNob3cgKi9cclxuICAgICAgdmFsdWVzPzogbnVtYmVyW107XHJcbiAgICAgIC8qKiBIb3cgbWFueSB0aWNrcyBkbyB5b3Ugd2FudCB0byBzZWUgKi9cclxuICAgICAgdGlja0Ftb3VudD86IG51bWJlcjtcclxuICAgIH07XHJcbiAgfTtcclxuICAvKipcclxuICAgKiBleHBvc2UgdGhlIGRyYXcgZnVuY3Rpb24gb3V0c2lkZSBvZiBuNy1mcm9udGVuZC9jb21wb25lbnRzIGxpYnJhcnlcclxuICAgKiB0aGlzIGlzIG5lZWRlZCB0byByZWRyYXcgYnViYmxlLWNoYXJ0LWNvbXBvbmVudCBvbiBjb21tYW5kXHJcbiAgICovXHJcbiAgc2V0RHJhdz86IGFueTtcclxuICAvKipcclxuICAgKiBzZXRTbGlkZXJzXHJcbiAgICovXHJcbiAgc2V0U2xpZGVycz86IFtzdHJpbmcsIHN0cmluZ107XHJcbiAgLyoqXHJcbiAgICogUHVibGljIGFwaVxyXG4gICAqL1xyXG4gIHNldEFwaT86IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1oaXN0b2dyYW0tcmFuZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9oaXN0b2dyYW0tcmFuZ2UuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEhpc3RvZ3JhbVJhbmdlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XHJcbiAgQElucHV0KCkgZGF0YTogSGlzdG9ncmFtUmFuZ2VEYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIHByaXZhdGUgZDM7XHJcblxyXG4gIHByaXZhdGUgc2xpZGVyczoge3g6IG51bWJlcjsgeTogbnVtYmVyfVtdO1xyXG5cclxuICBwcml2YXRlIF9sb2FkZWQgPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBjb2xvdXJCYXJzO1xyXG5cclxuICBwcml2YXRlIGdldFNlbGVjdGVkUmFuZ2U7XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcclxuICAgIC8qXHJcbiAgICAgV2FpdHMgZm9yIHRoZSBkb20gdG8gYmUgbG9hZGVkLCB0aGVuIGZpcmVzIHRoZSBkcmF3IGZ1bmN0aW9uXHJcbiAgICAgdGhhdCByZW5kZXJzIHRoZSBjaGFydC5cclxuICAgICovXHJcbiAgICBpZiAodGhpcy5kYXRhKSB7XHJcbiAgICAgIGlmICh0aGlzLl9sb2FkZWQpIHJldHVybjtcclxuICAgICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaW1wb3J0KCdkMycpLnRoZW4oKG1vZHVsZSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5kMyA9IG1vZHVsZTtcclxuICAgICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgICAgICAgdGhpcy5lbWl0TG9hZGVkKHRydWUpO1xyXG4gICAgICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuc2V0RHJhdykge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuc2V0RHJhdyh0aGlzLmRyYXcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMuZGF0YS5zZXRBcGkpIHsgLy8gZXhwb3NlIHRoZSBjb21wb25lbnQgYXBpXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zZXRBcGkoe1xyXG4gICAgICAgICAgICAgIHNldFZhbHVlOiB0aGlzLnNldFZhbHVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkMyB9ID0gdGhpcztcclxuICAgIGNvbnN0IHtcclxuICAgICAgd2lkdGgsIG1hcmdpbiwgaGVpZ2h0LFxyXG4gICAgICBpdGVtcywgY29sb3VycywgY29udGFpbmVySWQsXHJcbiAgICAgIGF4aXMsIHNldFNsaWRlcnNcclxuICAgIH0gPSB0aGlzLmRhdGE7XHJcblxyXG4gICAgLy8gZGF0YSB2YWxpZGF0aW9uXHJcbiAgICBjb25zdCByYW5nZU1vZGUgPSBpdGVtcy5ldmVyeSgoZCkgPT4gZC5yYW5nZSk7XHJcbiAgICBpZiAoIXJhbmdlTW9kZSAmJiBpdGVtcy5zb21lKChkKSA9PiAhZC5yYW5nZSkpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ0FsbCBpdGVtcyBtdXN0IGhhdmUgdGhlIFwicmFuZ2VcIiBwcm9wZXJ0eScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhlbHBlcnMgLSBTdGFydDpcclxuICAgIGNvbnN0IExBQkVMdG9YID0gZDNcclxuICAgICAgLnNjYWxlQmFuZCgpXHJcbiAgICAgIC5kb21haW4oaXRlbXMubWFwKChkKSA9PiBkLmxhYmVsKSlcclxuICAgICAgLnJhbmdlKFswLCB3aWR0aF0pXHJcbiAgICAgIC5wYWRkaW5nSW5uZXIoMC4xNylcclxuICAgICAgLnBhZGRpbmdPdXRlcigxKTtcclxuXHJcbiAgICBjb25zdCBYdG9MQUJFTCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICBjb25zdCBkb21haW4gPSBMQUJFTHRvWC5kb21haW4oKTtcclxuICAgICAgY29uc3QgcGFkZGluZ091dGVyID0gTEFCRUx0b1goZG9tYWluWzBdKTtcclxuICAgICAgY29uc3QgZWFjaEJhbmQgPSBMQUJFTHRvWC5zdGVwKCk7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcigoKHZhbHVlIC0gcGFkZGluZ091dGVyKSAvIGVhY2hCYW5kKSk7XHJcbiAgICAgIHJldHVybiBkb21haW5bTWF0aC5tYXgoMCwgTWF0aC5taW4oaW5kZXgsIGRvbWFpbi5sZW5ndGggLSAxKSldO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBZRUFSIFNFTEVDVElPTiBDSVJDTEVTXHJcbiAgICBsZXQgc2xpZGVycztcclxuICAgIGlmIChzZXRTbGlkZXJzKSB7XHJcbiAgICAgIHNsaWRlcnMgPSBzZXRTbGlkZXJzXHJcbiAgICAgICAgLm1hcCgoZCkgPT4gKHsgeDogTEFCRUx0b1goZCkgKyBMQUJFTHRvWC5iYW5kd2lkdGgoKSAvIDIsIHk6IGhlaWdodCB9KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzbGlkZXJzID0gZDNcclxuICAgICAgICAuZXh0ZW50KGl0ZW1zLCAoZCkgPT4gZC5sYWJlbClcclxuICAgICAgICAubWFwKChkKSA9PiAoeyB4OiBMQUJFTHRvWChkKSArIExBQkVMdG9YLmJhbmR3aWR0aCgpIC8gMiwgeTogaGVpZ2h0IH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0luUmFuZ2UoeSkge1xyXG4gICAgICBjb25zdCBhbGxJdGVtcyA9IHNsaWRlcnMubWFwKChkKSA9PiBYdG9MQUJFTChkLngpKTtcclxuICAgICAgaWYgKHkgPj0gZDMubWluKGFsbEl0ZW1zKSAmJiB5IDw9IGQzLm1heChhbGxJdGVtcykpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY29sb3VyQmFycyhkKSB7XHJcbiAgICAgIGlmIChpc0luUmFuZ2UoZC5sYWJlbCkpIHJldHVybiAndXJsKCNncmFkaWVudCknO1xyXG4gICAgICByZXR1cm4gJyNlM2UzZTMnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb2xvdXJCYXJzID0gY29sb3VyQmFycztcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTZWxlY3RlZFJhbmdlKCkge1xyXG4gICAgICBjb25zdCByYW5nZVN0YXJ0ID0gaXRlbXMuZmluZCgoaXQpID0+IGl0LmxhYmVsID09PSBYdG9MQUJFTChzbGlkZXJzWzBdLngpKTtcclxuICAgICAgY29uc3QgcmFuZ2VFbmQgPSBpdGVtcy5maW5kKChpdCkgPT4gaXQubGFiZWwgPT09IFh0b0xBQkVMKHNsaWRlcnNbMV0ueCkpO1xyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIHJhbmdlU3RhcnQucGF5bG9hZCxcclxuICAgICAgICByYW5nZU1vZGVcclxuICAgICAgICAgID8gcmFuZ2VFbmQucmFuZ2UucGF5bG9hZFxyXG4gICAgICAgICAgOiByYW5nZUVuZC5wYXlsb2FkXHJcbiAgICAgIF07XHJcbiAgICB9XHJcbiAgICB0aGlzLmdldFNlbGVjdGVkUmFuZ2UgPSBnZXRTZWxlY3RlZFJhbmdlO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRleHRDb2xsaXNpb24oKSB7XHJcbiAgICAgIGNvbnN0IGlzQ29sbGlkaW5nID0gc2xpZGVyc1swXS54ID09PSBzbGlkZXJzWzFdLng7XHJcbiAgICAgIC8vIGNvbnN0IFtzbGlkZXJMZWZ0LCBzbGlkZXJSaWdodF0gPSBzbGlkZXJzO1xyXG4gICAgICAvLyBsZXQgaXNDb2xsaWRpbmcgPSBmYWxzZTtcclxuICAgICAgLy8gaWYgKCgrc2xpZGVyTGVmdC54KSA+IChzbGlkZXJSaWdodC54IC0gMzApKSBpc0NvbGxpZGluZyA9IHRydWU7XHJcbiAgICAgIGlmIChyYW5nZU1vZGUgJiYgaXNDb2xsaWRpbmcpIHtcclxuICAgICAgICBjb250cm9sc0xheWVyXHJcbiAgICAgICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcclxuICAgICAgICAgIC5hdHRyKCd5JywgKGQsIGkpID0+IChpID4gMCA/IGQueSArIG1hcmdpbi5ib3R0b20gLyAyICsgMTIgOiBkLnkgKyBtYXJnaW4uYm90dG9tIC8gMikpXHJcbiAgICAgICAgICAudGV4dCgoZCwgaSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByYW5nZSA9IGdldFNlbGVjdGVkUmFuZ2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJhbmdlW2ldO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29udHJvbHNMYXllclxyXG4gICAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXHJcbiAgICAgICAgICAuYXR0cigneScsIChkKSA9PiBkLnkgKyBtYXJnaW4uYm90dG9tIC8gMik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIEhlbHBlcnMgLSBFbmQuXHJcblxyXG4gICAgLy8gY2xlYXIgSFRNTCBjb250ZW50c1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySWQpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29uc3Qgc3ZnID0gZDNcclxuICAgICAgLnNlbGVjdChgIyR7Y29udGFpbmVySWR9YClcclxuICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodClcclxuICAgICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKTtcclxuXHJcbiAgICBjb25zdCBzY2FsZUhlaWdodCA9IGQzXHJcbiAgICAgIC5zY2FsZVN5bWxvZygpIC8vIG1vc3Qgc2ltaWxhciBzY2FsZSB0byB0aGUgb3JpZ2luYWxcclxuICAgICAgLmRvbWFpbihbMCwgZDMubWF4KGl0ZW1zLCAoZCkgPT4gZC52YWx1ZSldKVxyXG4gICAgICAucmFuZ2UoW2hlaWdodCwgMF0pO1xyXG5cclxuICAgIC8vIEdSQURJRU5UXHJcbiAgICBjb25zdCBkZWZzID0gc3ZnLmFwcGVuZCgnZGVmcycpOyAvLyBkZWZpbml0aW9uc1xyXG4gICAgY29uc3QgZ3JhZGllbnQgPSBkZWZzXHJcbiAgICAgIC5hcHBlbmQoJ2xpbmVhckdyYWRpZW50JylcclxuICAgICAgLmF0dHIoJ2lkJywgJ2dyYWRpZW50JylcclxuICAgICAgLmF0dHIoJ2dyYWRpZW50VW5pdHMnLCAndXNlclNwYWNlT25Vc2UnKVxyXG4gICAgICAuYXR0cigneDEnLCAwKVxyXG4gICAgICAuYXR0cigneTEnLCBoZWlnaHQpXHJcbiAgICAgIC5hdHRyKCd4MicsIDApXHJcbiAgICAgIC5hdHRyKCd5MicsIG1hcmdpbi50b3ApO1xyXG4gICAgZ3JhZGllbnRcclxuICAgICAgLmFwcGVuZCgnc3RvcCcpXHJcbiAgICAgIC5hdHRyKCdjbGFzcycsICdzdGFydCcpXHJcbiAgICAgIC5hdHRyKCdvZmZzZXQnLCAnMCUnKVxyXG4gICAgICAuYXR0cignc3RvcC1jb2xvcicsIGNvbG91cnMuYm90dG9tKSAvLyBib3R0b20gZ3JhZGllbnRcclxuICAgICAgLmF0dHIoJ3N0b3Atb3BhY2l0eScsIDEpO1xyXG4gICAgZ3JhZGllbnRcclxuICAgICAgLmFwcGVuZCgnc3RvcCcpXHJcbiAgICAgIC5hdHRyKCdjbGFzcycsICdlbmQnKVxyXG4gICAgICAuYXR0cignb2Zmc2V0JywgJzEwMCUnKVxyXG4gICAgICAuYXR0cignc3RvcC1jb2xvcicsIGNvbG91cnMudG9wKSAvLyB0b3AgZ3JhZGllbnRcclxuICAgICAgLmF0dHIoJ3N0b3Atb3BhY2l0eScsIDEpO1xyXG5cclxuICAgIC8vIERSQVcgSU5TSURFIE1BUkdJTlNcclxuICAgIGNvbnN0IGcgPSBzdmdcclxuICAgICAgLmFwcGVuZCgnZycpXHJcbiAgICAgIC5hdHRyKCdjbGFzcycsICdjaGFydCcpXHJcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCR7bWFyZ2luLnRvcH0pYCk7XHJcblxyXG4gICAgY29uc3QgYmFyc0xheWVyID0gZy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdiYXJzJyk7XHJcbiAgICBjb25zdCBjb250cm9sc0xheWVyID0gZy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdjb250cm9scycpO1xyXG5cclxuICAgIC8vIEJBUiBDSEFSVFxyXG4gICAgYmFyc0xheWVyIC8vIGJhcnNcclxuICAgICAgLnNlbGVjdEFsbCgncmVjdC5iYXJzJylcclxuICAgICAgLmRhdGEoaXRlbXMpXHJcbiAgICAgIC5qb2luKCdyZWN0JylcclxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2JhcnMnKVxyXG4gICAgICAuYXR0cignd2lkdGgnLCBMQUJFTHRvWC5iYW5kd2lkdGgpXHJcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCAoZCkgPT4gaGVpZ2h0IC0gc2NhbGVIZWlnaHQoZC52YWx1ZSkpXHJcbiAgICAgIC5hdHRyKCd5JywgKGQpID0+IHNjYWxlSGVpZ2h0KGQudmFsdWUpKVxyXG4gICAgICAuYXR0cigneCcsIChkKSA9PiBMQUJFTHRvWChkLmxhYmVsKSlcclxuICAgICAgLmF0dHIoJ2RhdGEtc3RhcnQnLCAoZCkgPT4gZC5wYXlsb2FkKSAvLyBtYWtlIHRoZSBkYXRhIGVhc2lseSBhY2Nlc3NpYmxlXHJcbiAgICAgIC5hdHRyKCdkYXRhLWVuZCcsIChkKSA9PiAoZC5yYW5nZSA/IGQucmFuZ2UucGF5bG9hZCA6IGQucGF5bG9hZCkpXHJcbiAgICAgIC5hdHRyKCdmaWxsJywgJ3VybCgjZ3JhZGllbnQpJyk7XHJcblxyXG4gICAgYmFyc0xheWVyIC8vIGNhdGNoIGJhciBldmVudHNcclxuICAgICAgLm9uKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB5ZWFyID0gWHRvTEFCRUwoZXZlbnQub2Zmc2V0WCAtIG1hcmdpbi5sZWZ0KTtcclxuICAgICAgICBkMy5zZWxlY3RBbGwoJ3JlY3QuYmFycycpLmF0dHIoJ2ZpbGwnLCAoZCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHllYXIgPT09IGQubGFiZWwpIHJldHVybiAnI0IwQ0NGOCc7XHJcbiAgICAgICAgICByZXR1cm4gY29sb3VyQmFycyhkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLm9uKCdtb3VzZW91dCcsICgpID0+IHtcclxuICAgICAgICBkMy5zZWxlY3RBbGwoJ3JlY3QuYmFycycpLmF0dHIoJ2ZpbGwnLCAoZCkgPT4gY29sb3VyQmFycyhkKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBsYWJlbCA9IFh0b0xBQkVMKGV2ZW50Lm9mZnNldFggLSBtYXJnaW4ubGVmdCk7XHJcbiAgICAgICAgY29uc3QgeEF4aXNWYWx1ZSA9IExBQkVMdG9YKGxhYmVsKSArIExBQkVMdG9YLmJhbmR3aWR0aCgpIC8gMjtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHtcclxuICAgICAgICAgIHg6IHhBeGlzVmFsdWUsXHJcbiAgICAgICAgICB5OiBoZWlnaHRcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNsaWRlcnMgPSBbXHJcbiAgICAgICAgICAvLyBhdm9pZCBqb2luaW5nIHRoZSB0d28gb2JqZWN0cyFcclxuICAgICAgICAgIHsgLi4ubmV3VmFsdWUgfSxcclxuICAgICAgICAgIHsgLi4ubmV3VmFsdWUgfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmFuZ2VQaWNrZXJcclxuICAgICAgICAgIC5kYXRhKHNsaWRlcnMpXHJcbiAgICAgICAgICAuc2VsZWN0KCdjaXJjbGUnKVxyXG4gICAgICAgICAgLnRyYW5zaXRpb24oKVxyXG4gICAgICAgICAgLmVhc2UoZDMuZWFzZVF1YWRPdXQpXHJcbiAgICAgICAgICAuZHVyYXRpb24oNTUwKVxyXG4gICAgICAgICAgLmF0dHIoJ2N4JywgKGQpID0+IGQueCk7XHJcbiAgICAgICAgY29udHJvbHNMYXllclxyXG4gICAgICAgICAgLnNlbGVjdCgncGF0aC5ibHVlbGluZScpXHJcbiAgICAgICAgICAudHJhbnNpdGlvbigpXHJcbiAgICAgICAgICAuZWFzZShkMy5lYXNlUXVhZE91dClcclxuICAgICAgICAgIC5kdXJhdGlvbig1NTApXHJcbiAgICAgICAgICAuYXR0cignZCcsIGQzLmxpbmUoKShzbGlkZXJzLm1hcCgoZCkgPT4gW2QueCwgZC55XSkpKTtcclxuICAgICAgICBjb250cm9sc0xheWVyXHJcbiAgICAgICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcclxuICAgICAgICAgIC50cmFuc2l0aW9uKClcclxuICAgICAgICAgIC5lYXNlKGQzLmVhc2VRdWFkT3V0KVxyXG4gICAgICAgICAgLmR1cmF0aW9uKDU1MClcclxuICAgICAgICAgIC5hdHRyKCd4JywgKCkgPT4geEF4aXNWYWx1ZSlcclxuICAgICAgICAgIC50ZXh0KChkLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmFuZ2VNb2RlKSByZXR1cm4gbGFiZWw7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtcy5maW5kKChpdCkgPT4gaXQubGFiZWwgPT09IGxhYmVsKTtcclxuICAgICAgICAgICAgaWYgKGkgPiAwKSByZXR1cm4gaXRlbS5yYW5nZS5sYWJlbDtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubGFiZWw7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBnLnNlbGVjdEFsbCgncmVjdC5iYXJzJykuYXR0cignZmlsbCcsIChkKSA9PiBjb2xvdXJCYXJzKGQpKTtcclxuICAgICAgICB0ZXh0Q29sbGlzaW9uKCk7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdyYW5nZXNlbGVjdGVkJywgZ2V0U2VsZWN0ZWRSYW5nZSgpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgY29udHJvbHNMYXllciAvLyBncmF5IGxpbmVcclxuICAgICAgLmFwcGVuZCgncGF0aCcpXHJcbiAgICAgIC5hdHRyKCdjbGFzcycsICdncmF5bGluZScpXHJcbiAgICAgIC5hdHRyKFxyXG4gICAgICAgICdkJyxcclxuICAgICAgICBkMy5saW5lKCkoW1xyXG4gICAgICAgICAgWzAsIGhlaWdodF0sXHJcbiAgICAgICAgICBbd2lkdGgsIGhlaWdodF1cclxuICAgICAgICBdKVxyXG4gICAgICApXHJcbiAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAyKVxyXG4gICAgICAuYXR0cignb3BhY2l0eScsIDEpXHJcbiAgICAgIC5hdHRyKCdzdHJva2UnLCAnI0MxQzVDNycpO1xyXG5cclxuICAgIGNvbnRyb2xzTGF5ZXIgLy8gYmx1ZSBsaW5lXHJcbiAgICAgIC5hcHBlbmQoJ3BhdGgnKVxyXG4gICAgICAuYXR0cignY2xhc3MnLCAnYmx1ZWxpbmUnKVxyXG4gICAgICAuYXR0cignZCcsIGQzLmxpbmUoKShzbGlkZXJzLm1hcCgoZCkgPT4gW2QueCwgZC55XSkpKVxyXG4gICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgMilcclxuICAgICAgLmF0dHIoJ3N0cm9rZScsIGNvbG91cnMuYWNjZW50KTtcclxuXHJcbiAgICBjb25zdCByYW5nZVBpY2tlciA9IGNvbnRyb2xzTGF5ZXJcclxuICAgICAgLnNlbGVjdEFsbCgnZy5yYW5nZXBpY2tlcicpXHJcbiAgICAgIC5kYXRhKHNsaWRlcnMuc29ydCgoYSwgYikgPT4gZDMuYXNjZW5kaW5nKGEueCwgYi54KSkpXHJcbiAgICAgIC5qb2luKCdnJylcclxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3JhbmdlcGlja2VyJyk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbmltYXRlIHRoZSBlbGVtZW50cyB3aGlsZSB0aGUgdXNlciBpcyBkcmFnZ2luZyBvbmUgb2YgdGhlIHJhbmdlIHNlbGVjdG9yc1xyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBkcmFnZ2luZ1VwZGF0ZShldmVudCwgZGF0YSkge1xyXG4gICAgICBjb25zdCBsYWJlbCA9IFh0b0xBQkVMKGV2ZW50LngpO1xyXG4gICAgICBjb25zdCB4QXhpc1ZhbHVlID0gTEFCRUx0b1gobGFiZWwpICsgTEFCRUx0b1guYmFuZHdpZHRoKCkgLyAyO1xyXG4gICAgICBjb25zdCB5YiA9IFtdO1xyXG4gICAgICBnLnNlbGVjdEFsbCgnY2lyY2xlJykuZWFjaChmdW5jdGlvbiBzZXRCYWxsUG9zaXRpb24oKSB7XHJcbiAgICAgICAgeWIucHVzaCh7IHg6ICtkMy5zZWxlY3QodGhpcykuYXR0cignY3gnKSwgeTogaGVpZ2h0IH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgc2xpZGVycyA9IHliLnNvcnQoKGEsIGIpID0+IGQzLmFzY2VuZGluZyhhLngsIGIueCkpO1xyXG4gICAgICAvLyBtb3ZlIHRoZSBjaXJjbGVcclxuICAgICAgZDMuc2VsZWN0KHRoaXMpXHJcbiAgICAgICAgLnNlbGVjdCgnY2lyY2xlJylcclxuICAgICAgICAuYXR0cignY3gnLCBkYXRhLnggPSB4QXhpc1ZhbHVlKTtcclxuICAgICAgLy8gbW92ZSB0aGUgYmx1ZSBsaW5lXHJcbiAgICAgIGNvbnRyb2xzTGF5ZXJcclxuICAgICAgICAuc2VsZWN0KCdwYXRoLmJsdWVsaW5lJylcclxuICAgICAgICAuYXR0cignZCcsIGQzLmxpbmUoKShzbGlkZXJzLm1hcCgoZCkgPT4gW2QueCwgZC55XSkpKTtcclxuICAgICAgLy8gY2hhbmdlIHRoZSB0ZXh0IHBvc2l0aW9uXHJcbiAgICAgIGQzLnNlbGVjdCh0aGlzKVxyXG4gICAgICAgIC5zZWxlY3QoJ3RleHQnKVxyXG4gICAgICAgIC5hdHRyKCd4JywgKCkgPT4geEF4aXNWYWx1ZSk7XHJcbiAgICAgIC8vIGNoYW5nZSB0aGUgdGV4dCB2YWx1ZXNcclxuICAgICAgY29udHJvbHNMYXllclxyXG4gICAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxyXG4gICAgICAgIC50ZXh0KChkKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBsID0gWHRvTEFCRUwoZC54KTtcclxuICAgICAgICAgIGlmICghcmFuZ2VNb2RlKSByZXR1cm4gbDtcclxuICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gc2xpZGVycy5maW5kSW5kZXgoKHNsaWRlcikgPT4gc2xpZGVyLnggPT09IGQueCk7XHJcbiAgICAgICAgICBjb25zdCByYW5nZSA9IGdldFNlbGVjdGVkUmFuZ2UoKTtcclxuICAgICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMSkgcmV0dXJuIHJhbmdlWzFdO1xyXG4gICAgICAgICAgcmV0dXJuIHJhbmdlWzBdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB0ZXh0Q29sbGlzaW9uKCk7XHJcbiAgICAgIC8vIGNvbG91ciB0aGUgYmFyc1xyXG4gICAgICBnLnNlbGVjdEFsbCgncmVjdC5iYXJzJykuYXR0cignZmlsbCcsIChkKSA9PiBjb2xvdXJCYXJzKGQpKTtcclxuICAgIH1cclxuXHJcbiAgICByYW5nZVBpY2tlciAvLyBkcmFnIGhhbmRsZXJcclxuICAgICAgLmNhbGwoZDMuZHJhZygpXHJcbiAgICAgICAgLm9uKCdkcmFnJywgZHJhZ2dpbmdVcGRhdGUpXHJcbiAgICAgICAgLm9uKCdlbmQnLCAoZXZlbnQsIGRhdGEpID0+IHtcclxuICAgICAgICAgIC8vIHVwZGF0ZSBvbmUgbGFzdCB0aW1lIHRvIHByZXZlbnQgZGVzeW5jaW5nXHJcbiAgICAgICAgICBkcmFnZ2luZ1VwZGF0ZShldmVudCwgZGF0YSk7XHJcbiAgICAgICAgICAvLyBlbWl0IHRoZSBzZWxlY3RlZCByYW5nZVxyXG4gICAgICAgICAgdGhpcy5lbWl0KCdyYW5nZXNlbGVjdGVkJywgZ2V0U2VsZWN0ZWRSYW5nZSgpKTtcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgcmFuZ2VQaWNrZXJcclxuICAgICAgLmFwcGVuZCgnY2lyY2xlJylcclxuICAgICAgLmF0dHIoJ2N4JywgKGQpID0+IGQueClcclxuICAgICAgLmF0dHIoJ2N5JywgKGQpID0+IGQueSlcclxuICAgICAgLmF0dHIoJ3InLCA5KVxyXG4gICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXHJcbiAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAyKVxyXG4gICAgICAuYXR0cignc3Ryb2tlJywgY29sb3Vycy5hY2NlbnQpXHJcbiAgICAgIC5hdHRyKCdzdHlsZScsICdjdXJzb3I6IHBvaW50ZXInKTtcclxuXHJcbiAgICByYW5nZVBpY2tlclxyXG4gICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnbWlkZGxlJylcclxuICAgICAgLmF0dHIoJ2ZvbnQtZmFtaWx5JywgJ1JvYm90bywgQXJpYWwsIHNhbnMtc2VyaWYnKVxyXG4gICAgICAuYXR0cignZm9udC1zaXplJywgJzEycHgnKVxyXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcclxuICAgICAgLmF0dHIoJ3knLCAoZCkgPT4gZC55ICsgbWFyZ2luLmJvdHRvbSAvIDIpXHJcbiAgICAgIC5hdHRyKCd4JywgKGQpID0+IGQueClcclxuICAgICAgLmF0dHIoJ2ZpbGwnLCBjb2xvdXJzLmFjY2VudClcclxuICAgICAgLnRleHQoKGQsIGkpID0+IHtcclxuICAgICAgICBjb25zdCBsID0gWHRvTEFCRUwoZC54KTtcclxuICAgICAgICBpZiAocmFuZ2VNb2RlICYmIGkgPT09IDEpIHtcclxuICAgICAgICAgIHJldHVybiBpdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLmxhYmVsID09PSBsKS5yYW5nZS5sYWJlbDtcclxuICAgICAgICB9IHJldHVybiBsO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBpZiAoYXhpcz8ueUF4aXM/LnNob3cpIHtcclxuICAgICAgY29uc3QgeUF4aXMgPSBkMy5heGlzTGVmdChzY2FsZUhlaWdodClcclxuICAgICAgICAudGlja3MoYXhpcy55QXhpcy50aWNrQW1vdW50ID8/IDIpXHJcbiAgICAgICAgLnRpY2tWYWx1ZXMoYXhpcy55QXhpcy52YWx1ZXMgPyBheGlzLnlBeGlzLnZhbHVlcyA6IG51bGwpO1xyXG4gICAgICBjb25zdCB5QXhpc0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpXHJcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sICR7bWFyZ2luLnRvcH0pYClcclxuICAgICAgICAuY2FsbCh5QXhpcyk7XHJcblxyXG4gICAgICB5QXhpc0dyb3VwLnNlbGVjdEFsbCgncGF0aCwgbGluZScpLnN0eWxlKCdzdHJva2UnLCBjb2xvdXJzLmFjY2VudCk7XHJcbiAgICAgIHlBeGlzR3JvdXAuc2VsZWN0QWxsKCd0ZXh0Jykuc3R5bGUoJ2ZpbGwnLCBjb2xvdXJzLmFjY2VudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsYWJlbFRvWCgpIHtcclxuICAgIHJldHVybiB0aGlzLmQzXHJcbiAgICAgIC5zY2FsZUJhbmQoKVxyXG4gICAgICAuZG9tYWluKHRoaXMuZGF0YS5pdGVtcy5tYXAoKGQpID0+IGQubGFiZWwpKVxyXG4gICAgICAucmFuZ2UoWzAsIHRoaXMuZGF0YS53aWR0aF0pXHJcbiAgICAgIC5wYWRkaW5nSW5uZXIoMC4xNylcclxuICAgICAgLnBhZGRpbmdPdXRlcigxKTtcclxuICB9XHJcblxyXG4gIHNldFZhbHVlID0gKFtzdGFydExhYmVsLCBlbmRMYWJlbF0pID0+IHtcclxuICAgIHRoaXMuZGF0YS5zZXRTbGlkZXJzID0gW3N0YXJ0TGFiZWwsIGVuZExhYmVsXTtcclxuICAgIHRoaXMuZHJhdygpO1xyXG4gICAgdGhpcy5kMy5zZWxlY3RBbGwoJ3JlY3QuYmFycycpLmF0dHIoJ2ZpbGwnLCAoZCkgPT4gdGhpcy5jb2xvdXJCYXJzKGQpKTtcclxuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5nZXRTZWxlY3RlZFJhbmdlKCk7XHJcbiAgICB0aGlzLmVtaXQoJ3Jhbmdlc2VsZWN0ZWQnLCByYW5nZSk7XHJcbiAgICByZXR1cm4gcmFuZ2U7XHJcbiAgfVxyXG5cclxuICBlbWl0TG9hZGVkKHBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2xvYWRlZCcsIHBheWxvYWQpO1xyXG4gIH1cclxufVxyXG4iXX0=