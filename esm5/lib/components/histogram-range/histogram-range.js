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
        this.setBars = function (newBars) {
            _this.data.items = newBars;
            _this.draw();
            _this.d3.selectAll('rect.bars').attr('fill', function (d) { return _this.colourBars(d); });
        };
        this.setSliders = function (_a) {
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
                            setSliders: _this.setSliders,
                            setBars: _this.setBars,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9ncmFtLXJhbmdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oaXN0b2dyYW0tcmFuZ2UvaGlzdG9ncmFtLXJhbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDREQUE0RDtBQUM1RCw2QkFBNkI7QUFDN0IscUJBQXFCO0FBQ3JCLDZCQUE2Qjs7QUFFN0IsT0FBTyxFQUF1QixTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBd0Z0RTtJQUFBO1FBQUEsaUJBNlhDO1FBcFhTLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFpQ3hCLFNBQUksR0FBRzs7WUFDRyxJQUFBLGFBQUUsQ0FBVTtZQUNkLElBQUEsZUFJTyxFQUhYLGdCQUFLLEVBQUUsa0JBQU0sRUFBRSxrQkFBTSxFQUNyQixnQkFBSyxFQUFFLG9CQUFPLEVBQUUsNEJBQVcsRUFDM0IsY0FBSSxFQUFFLDBCQUNLLENBQUM7WUFFZCxrQkFBa0I7WUFDbEIsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFSLENBQVEsQ0FBQyxFQUFFO2dCQUM3QyxNQUFNLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO2FBQ3pEO1lBRUQsbUJBQW1CO1lBQ25CLElBQU0sUUFBUSxHQUFHLEVBQUU7aUJBQ2hCLFNBQVMsRUFBRTtpQkFDWCxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLENBQUM7aUJBQ2pDLEtBQUssQ0FBQyxDQUFD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QyxDQUFDO2FBQzNCLFlBQVksQ0FBQyxJQUFJLENBQUM7YUFDbEIsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFpQkQsNENBQVUsR0FBVixVQUFXLE9BQU87UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBM1hRO1FBQVIsS0FBSyxFQUFFOzt5REFBMEI7SUFFekI7UUFBUixLQUFLLEVBQUU7O3lEQUFXO0lBSFIsdUJBQXVCO1FBSm5DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsd0lBQXFDO1NBQ3RDLENBQUM7T0FDVyx1QkFBdUIsQ0E2WG5DO0lBQUQsOEJBQUM7Q0FBQSxBQTdYRCxJQTZYQztTQTdYWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gSElTVE9HUkFNLVJBTkdFLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBBZnRlckNvbnRlbnRDaGVja2VkLCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEhpc3RvZ3JhbVJhbmdlQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGlzdG9ncmFtUmFuZ2VEYXRhIHtcclxuICAvKipcclxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGhpc3RvZ3JhbS1yYW5nZSBzdmdcclxuICAgKi9cclxuICBjb250YWluZXJJZDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHRvdGFsIHdpZHRoIGZvciB0aGUgc3ZnIGVsZW1lbnRcclxuICAgKi9cclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIHRvdGFsIGhlaWdodCBmb3IgdGhlIHN2ZyBlbGVtZW50XHJcbiAgICovXHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogSW50ZXJuYWwgbWFyZ2lucyBvZiB0aGUgc3ZnXHJcbiAgICovXHJcbiAgbWFyZ2luOiB7XHJcbiAgICBsZWZ0OiBudW1iZXI7XHJcbiAgICByaWdodDogbnVtYmVyO1xyXG4gICAgdG9wOiBudW1iZXI7XHJcbiAgICBib3R0b206IG51bWJlcjtcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIFRoZW1lIG9mIHRoZSBoaXN0b2dyYW1cclxuICAgKi9cclxuICBjb2xvdXJzOiB7XHJcbiAgICB0b3A6IHN0cmluZztcclxuICAgIGJvdHRvbTogc3RyaW5nO1xyXG4gICAgYWNjZW50OiBzdHJpbmc7XHJcbiAgfTtcclxuICAvKipcclxuICAgKiBEYXRhIGZvciB0aGUgaGlzdG9ncmFtIGJhcnNcclxuICAgKi9cclxuICBpdGVtczoge1xyXG4gICAgLyoqIGRlZmF1bHQgbGFiZWwgb2YgdGhlIGl0ZW0gKi9cclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICAvKiogeS1heGlzIHZhbHVlIG9mIHRoZSBiYXIgKGhlaWdodCkgKi9cclxuICAgIHZhbHVlOiBudW1iZXI7XHJcbiAgICAvKiogcGF5bG9hZCB0aGF0IHRoZSBpdGVtIHNob3VsZCBlbWl0IHdoZW4gc2VsZWN0ZWQgKi9cclxuICAgIHBheWxvYWQ6IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogJ3VwcGVyJyB2YWx1ZXMgb2YgdGhlIHJhbmdlLlxyXG4gICAgICogb25seSB1c2VkIHdoZW4gZWFjaCBiYXIgcmVwcmVzZW50cyBhIHJhbmdlLlxyXG4gICAgICovXHJcbiAgICByYW5nZT86IHtcclxuICAgICAgLyoqIGxhYmVsIGxvYWRlZCB3aGVuIHNlbGVjdGVkIGJ5IHRoZSByaWdodC1tb3N0IHBvaW50ZXIgKi9cclxuICAgICAgbGFiZWw6IHN0cmluZztcclxuICAgICAgLyoqIHBheWxvYWQgZW1pdHRlZCB3aGVuIHNlbGVjdGVkIGJ5IHRoZSByaWdodC1tb3N0IHBvaW50ZXIgKi9cclxuICAgICAgcGF5bG9hZDogYW55O1xyXG4gICAgfTtcclxuICB9W107XHJcbiAgLyoqXHJcbiAgICogQXhpcyBzZXR0aW5nc1xyXG4gICAqL1xyXG4gIGF4aXM/OiB7XHJcbiAgICAvKiogWSBBeGlzIHNldHRpbmdzICovXHJcbiAgICB5QXhpcz86IHtcclxuICAgICAgLyoqIFR1cm4gb24gYW5kIG9mZiB0aGUgYXhpcyAqL1xyXG4gICAgICBzaG93PzogYm9vbGVhbjtcclxuICAgICAgLyoqIE1hbnVhbGx5IHNldCB0aGUgYXhpcyB2YWx1ZXMgdG8gc2hvdyAqL1xyXG4gICAgICB2YWx1ZXM/OiBudW1iZXJbXTtcclxuICAgICAgLyoqIEhvdyBtYW55IHRpY2tzIGRvIHlvdSB3YW50IHRvIHNlZSAqL1xyXG4gICAgICB0aWNrQW1vdW50PzogbnVtYmVyO1xyXG4gICAgfTtcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIGV4cG9zZSB0aGUgZHJhdyBmdW5jdGlvbiBvdXRzaWRlIG9mIG43LWZyb250ZW5kL2NvbXBvbmVudHMgbGlicmFyeVxyXG4gICAqIHRoaXMgaXMgbmVlZGVkIHRvIHJlZHJhdyBidWJibGUtY2hhcnQtY29tcG9uZW50IG9uIGNvbW1hbmRcclxuICAgKi9cclxuICBzZXREcmF3PzogYW55O1xyXG4gIC8qKlxyXG4gICAqIHNldFNsaWRlcnNcclxuICAgKi9cclxuICBzZXRTbGlkZXJzPzogW3N0cmluZywgc3RyaW5nXTtcclxuICAvKipcclxuICAgKiBQdWJsaWMgYXBpXHJcbiAgICovXHJcbiAgc2V0QXBpPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWhpc3RvZ3JhbS1yYW5nZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2hpc3RvZ3JhbS1yYW5nZS5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSGlzdG9ncmFtUmFuZ2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcclxuICBASW5wdXQoKSBkYXRhOiBIaXN0b2dyYW1SYW5nZURhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBkMztcclxuXHJcbiAgcHJpdmF0ZSBzbGlkZXJzOiB7eDogbnVtYmVyOyB5OiBudW1iZXJ9W107XHJcblxyXG4gIHByaXZhdGUgX2xvYWRlZCA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIGNvbG91ckJhcnM7XHJcblxyXG4gIHByaXZhdGUgZ2V0U2VsZWN0ZWRSYW5nZTtcclxuXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xyXG4gICAgLypcclxuICAgICBXYWl0cyBmb3IgdGhlIGRvbSB0byBiZSBsb2FkZWQsIHRoZW4gZmlyZXMgdGhlIGRyYXcgZnVuY3Rpb25cclxuICAgICB0aGF0IHJlbmRlcnMgdGhlIGNoYXJ0LlxyXG4gICAgKi9cclxuICAgIGlmICh0aGlzLmRhdGEpIHtcclxuICAgICAgaWYgKHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xyXG4gICAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpbXBvcnQoJ2QzJykudGhlbigobW9kdWxlKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmQzID0gbW9kdWxlO1xyXG4gICAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICAgICAgICB0aGlzLmVtaXRMb2FkZWQodHJ1ZSk7XHJcbiAgICAgICAgICBpZiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5zZXREcmF3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zZXREcmF3KHRoaXMuZHJhdyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5kYXRhLnNldEFwaSkgeyAvLyBleHBvc2UgdGhlIGNvbXBvbmVudCBhcGlcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnNldEFwaSh7XHJcbiAgICAgICAgICAgICAgc2V0U2xpZGVyczogdGhpcy5zZXRTbGlkZXJzLFxyXG4gICAgICAgICAgICAgIHNldEJhcnM6IHRoaXMuc2V0QmFycyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhdyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZDMgfSA9IHRoaXM7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHdpZHRoLCBtYXJnaW4sIGhlaWdodCxcclxuICAgICAgaXRlbXMsIGNvbG91cnMsIGNvbnRhaW5lcklkLFxyXG4gICAgICBheGlzLCBzZXRTbGlkZXJzXHJcbiAgICB9ID0gdGhpcy5kYXRhO1xyXG5cclxuICAgIC8vIGRhdGEgdmFsaWRhdGlvblxyXG4gICAgY29uc3QgcmFuZ2VNb2RlID0gaXRlbXMuZXZlcnkoKGQpID0+IGQucmFuZ2UpO1xyXG4gICAgaWYgKCFyYW5nZU1vZGUgJiYgaXRlbXMuc29tZSgoZCkgPT4gIWQucmFuZ2UpKSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdBbGwgaXRlbXMgbXVzdCBoYXZlIHRoZSBcInJhbmdlXCIgcHJvcGVydHknKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBIZWxwZXJzIC0gU3RhcnQ6XHJcbiAgICBjb25zdCBMQUJFTHRvWCA9IGQzXHJcbiAgICAgIC5zY2FsZUJhbmQoKVxyXG4gICAgICAuZG9tYWluKGl0ZW1zLm1hcCgoZCkgPT4gZC5sYWJlbCkpXHJcbiAgICAgIC5yYW5nZShbMCwgd2lkdGhdKVxyXG4gICAgICAucGFkZGluZ0lubmVyKDAuMTcpXHJcbiAgICAgIC5wYWRkaW5nT3V0ZXIoMSk7XHJcblxyXG4gICAgY29uc3QgWHRvTEFCRUwgPSAodmFsdWUpID0+IHtcclxuICAgICAgY29uc3QgZG9tYWluID0gTEFCRUx0b1guZG9tYWluKCk7XHJcbiAgICAgIGNvbnN0IHBhZGRpbmdPdXRlciA9IExBQkVMdG9YKGRvbWFpblswXSk7XHJcbiAgICAgIGNvbnN0IGVhY2hCYW5kID0gTEFCRUx0b1guc3RlcCgpO1xyXG4gICAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoKCh2YWx1ZSAtIHBhZGRpbmdPdXRlcikgLyBlYWNoQmFuZCkpO1xyXG4gICAgICByZXR1cm4gZG9tYWluW01hdGgubWF4KDAsIE1hdGgubWluKGluZGV4LCBkb21haW4ubGVuZ3RoIC0gMSkpXTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gWUVBUiBTRUxFQ1RJT04gQ0lSQ0xFU1xyXG4gICAgbGV0IHNsaWRlcnM7XHJcbiAgICBpZiAoc2V0U2xpZGVycykge1xyXG4gICAgICBzbGlkZXJzID0gc2V0U2xpZGVyc1xyXG4gICAgICAgIC5tYXAoKGQpID0+ICh7IHg6IExBQkVMdG9YKGQpICsgTEFCRUx0b1guYmFuZHdpZHRoKCkgLyAyLCB5OiBoZWlnaHQgfSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2xpZGVycyA9IGQzXHJcbiAgICAgICAgLmV4dGVudChpdGVtcywgKGQpID0+IGQubGFiZWwpXHJcbiAgICAgICAgLm1hcCgoZCkgPT4gKHsgeDogTEFCRUx0b1goZCkgKyBMQUJFTHRvWC5iYW5kd2lkdGgoKSAvIDIsIHk6IGhlaWdodCB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNJblJhbmdlKHkpIHtcclxuICAgICAgY29uc3QgYWxsSXRlbXMgPSBzbGlkZXJzLm1hcCgoZCkgPT4gWHRvTEFCRUwoZC54KSk7XHJcbiAgICAgIGlmICh5ID49IGQzLm1pbihhbGxJdGVtcykgJiYgeSA8PSBkMy5tYXgoYWxsSXRlbXMpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbG91ckJhcnMoZCkge1xyXG4gICAgICBpZiAoaXNJblJhbmdlKGQubGFiZWwpKSByZXR1cm4gJ3VybCgjZ3JhZGllbnQpJztcclxuICAgICAgcmV0dXJuICcjZTNlM2UzJztcclxuICAgIH1cclxuICAgIHRoaXMuY29sb3VyQmFycyA9IGNvbG91ckJhcnM7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRSYW5nZSgpIHtcclxuICAgICAgY29uc3QgcmFuZ2VTdGFydCA9IGl0ZW1zLmZpbmQoKGl0KSA9PiBpdC5sYWJlbCA9PT0gWHRvTEFCRUwoc2xpZGVyc1swXS54KSk7XHJcbiAgICAgIGNvbnN0IHJhbmdlRW5kID0gaXRlbXMuZmluZCgoaXQpID0+IGl0LmxhYmVsID09PSBYdG9MQUJFTChzbGlkZXJzWzFdLngpKTtcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICByYW5nZVN0YXJ0LnBheWxvYWQsXHJcbiAgICAgICAgcmFuZ2VNb2RlXHJcbiAgICAgICAgICA/IHJhbmdlRW5kLnJhbmdlLnBheWxvYWRcclxuICAgICAgICAgIDogcmFuZ2VFbmQucGF5bG9hZFxyXG4gICAgICBdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nZXRTZWxlY3RlZFJhbmdlID0gZ2V0U2VsZWN0ZWRSYW5nZTtcclxuXHJcbiAgICBmdW5jdGlvbiB0ZXh0Q29sbGlzaW9uKCkge1xyXG4gICAgICBjb25zdCBpc0NvbGxpZGluZyA9IHNsaWRlcnNbMF0ueCA9PT0gc2xpZGVyc1sxXS54O1xyXG4gICAgICAvLyBjb25zdCBbc2xpZGVyTGVmdCwgc2xpZGVyUmlnaHRdID0gc2xpZGVycztcclxuICAgICAgLy8gbGV0IGlzQ29sbGlkaW5nID0gZmFsc2U7XHJcbiAgICAgIC8vIGlmICgoK3NsaWRlckxlZnQueCkgPiAoc2xpZGVyUmlnaHQueCAtIDMwKSkgaXNDb2xsaWRpbmcgPSB0cnVlO1xyXG4gICAgICBpZiAocmFuZ2VNb2RlICYmIGlzQ29sbGlkaW5nKSB7XHJcbiAgICAgICAgY29udHJvbHNMYXllclxyXG4gICAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXHJcbiAgICAgICAgICAuYXR0cigneScsIChkLCBpKSA9PiAoaSA+IDAgPyBkLnkgKyBtYXJnaW4uYm90dG9tIC8gMiArIDEyIDogZC55ICsgbWFyZ2luLmJvdHRvbSAvIDIpKVxyXG4gICAgICAgICAgLnRleHQoKGQsIGkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBnZXRTZWxlY3RlZFJhbmdlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiByYW5nZVtpXTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnRyb2xzTGF5ZXJcclxuICAgICAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxyXG4gICAgICAgICAgLmF0dHIoJ3knLCAoZCkgPT4gZC55ICsgbWFyZ2luLmJvdHRvbSAvIDIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBIZWxwZXJzIC0gRW5kLlxyXG5cclxuICAgIC8vIGNsZWFyIEhUTUwgY29udGVudHNcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcklkKS5pbm5lckhUTUwgPSAnJztcclxuICAgIGNvbnN0IHN2ZyA9IGQzXHJcbiAgICAgIC5zZWxlY3QoYCMke2NvbnRhaW5lcklkfWApXHJcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXHJcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSk7XHJcblxyXG4gICAgY29uc3Qgc2NhbGVIZWlnaHQgPSBkM1xyXG4gICAgICAuc2NhbGVTeW1sb2coKSAvLyBtb3N0IHNpbWlsYXIgc2NhbGUgdG8gdGhlIG9yaWdpbmFsXHJcbiAgICAgIC5kb21haW4oWzAsIGQzLm1heChpdGVtcywgKGQpID0+IGQudmFsdWUpXSlcclxuICAgICAgLnJhbmdlKFtoZWlnaHQsIDBdKTtcclxuXHJcbiAgICAvLyBHUkFESUVOVFxyXG4gICAgY29uc3QgZGVmcyA9IHN2Zy5hcHBlbmQoJ2RlZnMnKTsgLy8gZGVmaW5pdGlvbnNcclxuICAgIGNvbnN0IGdyYWRpZW50ID0gZGVmc1xyXG4gICAgICAuYXBwZW5kKCdsaW5lYXJHcmFkaWVudCcpXHJcbiAgICAgIC5hdHRyKCdpZCcsICdncmFkaWVudCcpXHJcbiAgICAgIC5hdHRyKCdncmFkaWVudFVuaXRzJywgJ3VzZXJTcGFjZU9uVXNlJylcclxuICAgICAgLmF0dHIoJ3gxJywgMClcclxuICAgICAgLmF0dHIoJ3kxJywgaGVpZ2h0KVxyXG4gICAgICAuYXR0cigneDInLCAwKVxyXG4gICAgICAuYXR0cigneTInLCBtYXJnaW4udG9wKTtcclxuICAgIGdyYWRpZW50XHJcbiAgICAgIC5hcHBlbmQoJ3N0b3AnKVxyXG4gICAgICAuYXR0cignY2xhc3MnLCAnc3RhcnQnKVxyXG4gICAgICAuYXR0cignb2Zmc2V0JywgJzAlJylcclxuICAgICAgLmF0dHIoJ3N0b3AtY29sb3InLCBjb2xvdXJzLmJvdHRvbSkgLy8gYm90dG9tIGdyYWRpZW50XHJcbiAgICAgIC5hdHRyKCdzdG9wLW9wYWNpdHknLCAxKTtcclxuICAgIGdyYWRpZW50XHJcbiAgICAgIC5hcHBlbmQoJ3N0b3AnKVxyXG4gICAgICAuYXR0cignY2xhc3MnLCAnZW5kJylcclxuICAgICAgLmF0dHIoJ29mZnNldCcsICcxMDAlJylcclxuICAgICAgLmF0dHIoJ3N0b3AtY29sb3InLCBjb2xvdXJzLnRvcCkgLy8gdG9wIGdyYWRpZW50XHJcbiAgICAgIC5hdHRyKCdzdG9wLW9wYWNpdHknLCAxKTtcclxuXHJcbiAgICAvLyBEUkFXIElOU0lERSBNQVJHSU5TXHJcbiAgICBjb25zdCBnID0gc3ZnXHJcbiAgICAgIC5hcHBlbmQoJ2cnKVxyXG4gICAgICAuYXR0cignY2xhc3MnLCAnY2hhcnQnKVxyXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke21hcmdpbi50b3B9KWApO1xyXG5cclxuICAgIGNvbnN0IGJhcnNMYXllciA9IGcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnYmFycycpO1xyXG4gICAgY29uc3QgY29udHJvbHNMYXllciA9IGcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnY29udHJvbHMnKTtcclxuXHJcbiAgICAvLyBCQVIgQ0hBUlRcclxuICAgIGJhcnNMYXllciAvLyBiYXJzXHJcbiAgICAgIC5zZWxlY3RBbGwoJ3JlY3QuYmFycycpXHJcbiAgICAgIC5kYXRhKGl0ZW1zKVxyXG4gICAgICAuam9pbigncmVjdCcpXHJcbiAgICAgIC5hdHRyKCdjbGFzcycsICdiYXJzJylcclxuICAgICAgLmF0dHIoJ3dpZHRoJywgTEFCRUx0b1guYmFuZHdpZHRoKVxyXG4gICAgICAuYXR0cignaGVpZ2h0JywgKGQpID0+IGhlaWdodCAtIHNjYWxlSGVpZ2h0KGQudmFsdWUpKVxyXG4gICAgICAuYXR0cigneScsIChkKSA9PiBzY2FsZUhlaWdodChkLnZhbHVlKSlcclxuICAgICAgLmF0dHIoJ3gnLCAoZCkgPT4gTEFCRUx0b1goZC5sYWJlbCkpXHJcbiAgICAgIC5hdHRyKCdkYXRhLXN0YXJ0JywgKGQpID0+IGQucGF5bG9hZCkgLy8gbWFrZSB0aGUgZGF0YSBlYXNpbHkgYWNjZXNzaWJsZVxyXG4gICAgICAuYXR0cignZGF0YS1lbmQnLCAoZCkgPT4gKGQucmFuZ2UgPyBkLnJhbmdlLnBheWxvYWQgOiBkLnBheWxvYWQpKVxyXG4gICAgICAuYXR0cignZmlsbCcsICd1cmwoI2dyYWRpZW50KScpO1xyXG5cclxuICAgIGJhcnNMYXllciAvLyBjYXRjaCBiYXIgZXZlbnRzXHJcbiAgICAgIC5vbignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeWVhciA9IFh0b0xBQkVMKGV2ZW50Lm9mZnNldFggLSBtYXJnaW4ubGVmdCk7XHJcbiAgICAgICAgZDMuc2VsZWN0QWxsKCdyZWN0LmJhcnMnKS5hdHRyKCdmaWxsJywgKGQpID0+IHtcclxuICAgICAgICAgIGlmICh5ZWFyID09PSBkLmxhYmVsKSByZXR1cm4gJyNCMENDRjgnO1xyXG4gICAgICAgICAgcmV0dXJuIGNvbG91ckJhcnMoZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbignbW91c2VvdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgZDMuc2VsZWN0QWxsKCdyZWN0LmJhcnMnKS5hdHRyKCdmaWxsJywgKGQpID0+IGNvbG91ckJhcnMoZCkpO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSBYdG9MQUJFTChldmVudC5vZmZzZXRYIC0gbWFyZ2luLmxlZnQpO1xyXG4gICAgICAgIGNvbnN0IHhBeGlzVmFsdWUgPSBMQUJFTHRvWChsYWJlbCkgKyBMQUJFTHRvWC5iYW5kd2lkdGgoKSAvIDI7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB7XHJcbiAgICAgICAgICB4OiB4QXhpc1ZhbHVlLFxyXG4gICAgICAgICAgeTogaGVpZ2h0XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzbGlkZXJzID0gW1xyXG4gICAgICAgICAgLy8gYXZvaWQgam9pbmluZyB0aGUgdHdvIG9iamVjdHMhXHJcbiAgICAgICAgICB7IC4uLm5ld1ZhbHVlIH0sXHJcbiAgICAgICAgICB7IC4uLm5ld1ZhbHVlIH1cclxuICAgICAgICBdO1xyXG4gICAgICAgIHJhbmdlUGlja2VyXHJcbiAgICAgICAgICAuZGF0YShzbGlkZXJzKVxyXG4gICAgICAgICAgLnNlbGVjdCgnY2lyY2xlJylcclxuICAgICAgICAgIC50cmFuc2l0aW9uKClcclxuICAgICAgICAgIC5lYXNlKGQzLmVhc2VRdWFkT3V0KVxyXG4gICAgICAgICAgLmR1cmF0aW9uKDU1MClcclxuICAgICAgICAgIC5hdHRyKCdjeCcsIChkKSA9PiBkLngpO1xyXG4gICAgICAgIGNvbnRyb2xzTGF5ZXJcclxuICAgICAgICAgIC5zZWxlY3QoJ3BhdGguYmx1ZWxpbmUnKVxyXG4gICAgICAgICAgLnRyYW5zaXRpb24oKVxyXG4gICAgICAgICAgLmVhc2UoZDMuZWFzZVF1YWRPdXQpXHJcbiAgICAgICAgICAuZHVyYXRpb24oNTUwKVxyXG4gICAgICAgICAgLmF0dHIoJ2QnLCBkMy5saW5lKCkoc2xpZGVycy5tYXAoKGQpID0+IFtkLngsIGQueV0pKSk7XHJcbiAgICAgICAgY29udHJvbHNMYXllclxyXG4gICAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXHJcbiAgICAgICAgICAudHJhbnNpdGlvbigpXHJcbiAgICAgICAgICAuZWFzZShkMy5lYXNlUXVhZE91dClcclxuICAgICAgICAgIC5kdXJhdGlvbig1NTApXHJcbiAgICAgICAgICAuYXR0cigneCcsICgpID0+IHhBeGlzVmFsdWUpXHJcbiAgICAgICAgICAudGV4dCgoZCwgaSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXJhbmdlTW9kZSkgcmV0dXJuIGxhYmVsO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gaXRlbXMuZmluZCgoaXQpID0+IGl0LmxhYmVsID09PSBsYWJlbCk7XHJcbiAgICAgICAgICAgIGlmIChpID4gMCkgcmV0dXJuIGl0ZW0ucmFuZ2UubGFiZWw7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmxhYmVsO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgZy5zZWxlY3RBbGwoJ3JlY3QuYmFycycpLmF0dHIoJ2ZpbGwnLCAoZCkgPT4gY29sb3VyQmFycyhkKSk7XHJcbiAgICAgICAgdGV4dENvbGxpc2lvbigpO1xyXG4gICAgICAgIHRoaXMuZW1pdCgncmFuZ2VzZWxlY3RlZCcsIGdldFNlbGVjdGVkUmFuZ2UoKSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGNvbnRyb2xzTGF5ZXIgLy8gZ3JheSBsaW5lXHJcbiAgICAgIC5hcHBlbmQoJ3BhdGgnKVxyXG4gICAgICAuYXR0cignY2xhc3MnLCAnZ3JheWxpbmUnKVxyXG4gICAgICAuYXR0cihcclxuICAgICAgICAnZCcsXHJcbiAgICAgICAgZDMubGluZSgpKFtcclxuICAgICAgICAgIFswLCBoZWlnaHRdLFxyXG4gICAgICAgICAgW3dpZHRoLCBoZWlnaHRdXHJcbiAgICAgICAgXSlcclxuICAgICAgKVxyXG4gICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgMilcclxuICAgICAgLmF0dHIoJ29wYWNpdHknLCAxKVxyXG4gICAgICAuYXR0cignc3Ryb2tlJywgJyNDMUM1QzcnKTtcclxuXHJcbiAgICBjb250cm9sc0xheWVyIC8vIGJsdWUgbGluZVxyXG4gICAgICAuYXBwZW5kKCdwYXRoJylcclxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2JsdWVsaW5lJylcclxuICAgICAgLmF0dHIoJ2QnLCBkMy5saW5lKCkoc2xpZGVycy5tYXAoKGQpID0+IFtkLngsIGQueV0pKSlcclxuICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIDIpXHJcbiAgICAgIC5hdHRyKCdzdHJva2UnLCBjb2xvdXJzLmFjY2VudCk7XHJcblxyXG4gICAgY29uc3QgcmFuZ2VQaWNrZXIgPSBjb250cm9sc0xheWVyXHJcbiAgICAgIC5zZWxlY3RBbGwoJ2cucmFuZ2VwaWNrZXInKVxyXG4gICAgICAuZGF0YShzbGlkZXJzLnNvcnQoKGEsIGIpID0+IGQzLmFzY2VuZGluZyhhLngsIGIueCkpKVxyXG4gICAgICAuam9pbignZycpXHJcbiAgICAgIC5hdHRyKCdjbGFzcycsICdyYW5nZXBpY2tlcicpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW5pbWF0ZSB0aGUgZWxlbWVudHMgd2hpbGUgdGhlIHVzZXIgaXMgZHJhZ2dpbmcgb25lIG9mIHRoZSByYW5nZSBzZWxlY3RvcnNcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZHJhZ2dpbmdVcGRhdGUoZXZlbnQsIGRhdGEpIHtcclxuICAgICAgY29uc3QgbGFiZWwgPSBYdG9MQUJFTChldmVudC54KTtcclxuICAgICAgY29uc3QgeEF4aXNWYWx1ZSA9IExBQkVMdG9YKGxhYmVsKSArIExBQkVMdG9YLmJhbmR3aWR0aCgpIC8gMjtcclxuICAgICAgY29uc3QgeWIgPSBbXTtcclxuICAgICAgZy5zZWxlY3RBbGwoJ2NpcmNsZScpLmVhY2goZnVuY3Rpb24gc2V0QmFsbFBvc2l0aW9uKCkge1xyXG4gICAgICAgIHliLnB1c2goeyB4OiArZDMuc2VsZWN0KHRoaXMpLmF0dHIoJ2N4JyksIHk6IGhlaWdodCB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHNsaWRlcnMgPSB5Yi5zb3J0KChhLCBiKSA9PiBkMy5hc2NlbmRpbmcoYS54LCBiLngpKTtcclxuICAgICAgLy8gbW92ZSB0aGUgY2lyY2xlXHJcbiAgICAgIGQzLnNlbGVjdCh0aGlzKVxyXG4gICAgICAgIC5zZWxlY3QoJ2NpcmNsZScpXHJcbiAgICAgICAgLmF0dHIoJ2N4JywgZGF0YS54ID0geEF4aXNWYWx1ZSk7XHJcbiAgICAgIC8vIG1vdmUgdGhlIGJsdWUgbGluZVxyXG4gICAgICBjb250cm9sc0xheWVyXHJcbiAgICAgICAgLnNlbGVjdCgncGF0aC5ibHVlbGluZScpXHJcbiAgICAgICAgLmF0dHIoJ2QnLCBkMy5saW5lKCkoc2xpZGVycy5tYXAoKGQpID0+IFtkLngsIGQueV0pKSk7XHJcbiAgICAgIC8vIGNoYW5nZSB0aGUgdGV4dCBwb3NpdGlvblxyXG4gICAgICBkMy5zZWxlY3QodGhpcylcclxuICAgICAgICAuc2VsZWN0KCd0ZXh0JylcclxuICAgICAgICAuYXR0cigneCcsICgpID0+IHhBeGlzVmFsdWUpO1xyXG4gICAgICAvLyBjaGFuZ2UgdGhlIHRleHQgdmFsdWVzXHJcbiAgICAgIGNvbnRyb2xzTGF5ZXJcclxuICAgICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcclxuICAgICAgICAudGV4dCgoZCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbCA9IFh0b0xBQkVMKGQueCk7XHJcbiAgICAgICAgICBpZiAoIXJhbmdlTW9kZSkgcmV0dXJuIGw7XHJcbiAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHNsaWRlcnMuZmluZEluZGV4KChzbGlkZXIpID0+IHNsaWRlci54ID09PSBkLngpO1xyXG4gICAgICAgICAgY29uc3QgcmFuZ2UgPSBnZXRTZWxlY3RlZFJhbmdlKCk7XHJcbiAgICAgICAgICBpZiAocG9zaXRpb24gPT09IDEpIHJldHVybiByYW5nZVsxXTtcclxuICAgICAgICAgIHJldHVybiByYW5nZVswXTtcclxuICAgICAgICB9KTtcclxuICAgICAgdGV4dENvbGxpc2lvbigpO1xyXG4gICAgICAvLyBjb2xvdXIgdGhlIGJhcnNcclxuICAgICAgZy5zZWxlY3RBbGwoJ3JlY3QuYmFycycpLmF0dHIoJ2ZpbGwnLCAoZCkgPT4gY29sb3VyQmFycyhkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmFuZ2VQaWNrZXIgLy8gZHJhZyBoYW5kbGVyXHJcbiAgICAgIC5jYWxsKGQzLmRyYWcoKVxyXG4gICAgICAgIC5vbignZHJhZycsIGRyYWdnaW5nVXBkYXRlKVxyXG4gICAgICAgIC5vbignZW5kJywgKGV2ZW50LCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAvLyB1cGRhdGUgb25lIGxhc3QgdGltZSB0byBwcmV2ZW50IGRlc3luY2luZ1xyXG4gICAgICAgICAgZHJhZ2dpbmdVcGRhdGUoZXZlbnQsIGRhdGEpO1xyXG4gICAgICAgICAgLy8gZW1pdCB0aGUgc2VsZWN0ZWQgcmFuZ2VcclxuICAgICAgICAgIHRoaXMuZW1pdCgncmFuZ2VzZWxlY3RlZCcsIGdldFNlbGVjdGVkUmFuZ2UoKSk7XHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgIHJhbmdlUGlja2VyXHJcbiAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXHJcbiAgICAgIC5hdHRyKCdjeCcsIChkKSA9PiBkLngpXHJcbiAgICAgIC5hdHRyKCdjeScsIChkKSA9PiBkLnkpXHJcbiAgICAgIC5hdHRyKCdyJywgOSlcclxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxyXG4gICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgMilcclxuICAgICAgLmF0dHIoJ3N0cm9rZScsIGNvbG91cnMuYWNjZW50KVxyXG4gICAgICAuYXR0cignc3R5bGUnLCAnY3Vyc29yOiBwb2ludGVyJyk7XHJcblxyXG4gICAgcmFuZ2VQaWNrZXJcclxuICAgICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXHJcbiAgICAgIC5hdHRyKCdmb250LWZhbWlseScsICdSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmJylcclxuICAgICAgLmF0dHIoJ2ZvbnQtc2l6ZScsICcxMnB4JylcclxuICAgICAgLmFwcGVuZCgndGV4dCcpXHJcbiAgICAgIC5hdHRyKCd5JywgKGQpID0+IGQueSArIG1hcmdpbi5ib3R0b20gLyAyKVxyXG4gICAgICAuYXR0cigneCcsIChkKSA9PiBkLngpXHJcbiAgICAgIC5hdHRyKCdmaWxsJywgY29sb3Vycy5hY2NlbnQpXHJcbiAgICAgIC50ZXh0KChkLCBpKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbCA9IFh0b0xBQkVMKGQueCk7XHJcbiAgICAgICAgaWYgKHJhbmdlTW9kZSAmJiBpID09PSAxKSB7XHJcbiAgICAgICAgICByZXR1cm4gaXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5sYWJlbCA9PT0gbCkucmFuZ2UubGFiZWw7XHJcbiAgICAgICAgfSByZXR1cm4gbDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgaWYgKGF4aXM/LnlBeGlzPy5zaG93KSB7XHJcbiAgICAgIGNvbnN0IHlBeGlzID0gZDMuYXhpc0xlZnQoc2NhbGVIZWlnaHQpXHJcbiAgICAgICAgLnRpY2tzKGF4aXMueUF4aXMudGlja0Ftb3VudCA/PyAyKVxyXG4gICAgICAgIC50aWNrVmFsdWVzKGF4aXMueUF4aXMudmFsdWVzID8gYXhpcy55QXhpcy52YWx1ZXMgOiBudWxsKTtcclxuICAgICAgY29uc3QgeUF4aXNHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKVxyXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCAke21hcmdpbi50b3B9KWApXHJcbiAgICAgICAgLmNhbGwoeUF4aXMpO1xyXG5cclxuICAgICAgeUF4aXNHcm91cC5zZWxlY3RBbGwoJ3BhdGgsIGxpbmUnKS5zdHlsZSgnc3Ryb2tlJywgY29sb3Vycy5hY2NlbnQpO1xyXG4gICAgICB5QXhpc0dyb3VwLnNlbGVjdEFsbCgndGV4dCcpLnN0eWxlKCdmaWxsJywgY29sb3Vycy5hY2NlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGFiZWxUb1goKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kM1xyXG4gICAgICAuc2NhbGVCYW5kKClcclxuICAgICAgLmRvbWFpbih0aGlzLmRhdGEuaXRlbXMubWFwKChkKSA9PiBkLmxhYmVsKSlcclxuICAgICAgLnJhbmdlKFswLCB0aGlzLmRhdGEud2lkdGhdKVxyXG4gICAgICAucGFkZGluZ0lubmVyKDAuMTcpXHJcbiAgICAgIC5wYWRkaW5nT3V0ZXIoMSk7XHJcbiAgfVxyXG5cclxuICBzZXRCYXJzID0gKG5ld0JhcnMpID0+IHtcclxuICAgIHRoaXMuZGF0YS5pdGVtcyA9IG5ld0JhcnM7XHJcbiAgICB0aGlzLmRyYXcoKTtcclxuICAgIHRoaXMuZDMuc2VsZWN0QWxsKCdyZWN0LmJhcnMnKS5hdHRyKCdmaWxsJywgKGQpID0+IHRoaXMuY29sb3VyQmFycyhkKSk7XHJcbiAgfVxyXG5cclxuICBzZXRTbGlkZXJzID0gKFtzdGFydExhYmVsLCBlbmRMYWJlbF0pID0+IHtcclxuICAgIHRoaXMuZGF0YS5zZXRTbGlkZXJzID0gW3N0YXJ0TGFiZWwsIGVuZExhYmVsXTtcclxuICAgIHRoaXMuZHJhdygpO1xyXG4gICAgdGhpcy5kMy5zZWxlY3RBbGwoJ3JlY3QuYmFycycpLmF0dHIoJ2ZpbGwnLCAoZCkgPT4gdGhpcy5jb2xvdXJCYXJzKGQpKTtcclxuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5nZXRTZWxlY3RlZFJhbmdlKCk7XHJcbiAgICB0aGlzLmVtaXQoJ3Jhbmdlc2VsZWN0ZWQnLCByYW5nZSk7XHJcbiAgICByZXR1cm4gcmFuZ2U7XHJcbiAgfVxyXG5cclxuICBlbWl0TG9hZGVkKHBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2xvYWRlZCcsIHBheWxvYWQpO1xyXG4gIH1cclxufVxyXG4iXX0=