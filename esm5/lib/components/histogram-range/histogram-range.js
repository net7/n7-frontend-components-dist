/* eslint-disable @typescript-eslint/no-use-before-define */
//---------------------------
// HISTOGRAM-RANGE.ts
//---------------------------
import { __assign, __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var HistogramRangeComponent = /** @class */ (function () {
    function HistogramRangeComponent() {
        var _this = this;
        this._loaded = false;
        this.draw = function () {
            var _a, _b;
            var d3 = _this.d3;
            var _c = _this.data, width = _c.width, margin = _c.margin, height = _c.height, items = _c.items, colours = _c.colours, containerId = _c.containerId, axis = _c.axis;
            // data validation
            var rangeMode = items.every(function (d) { return d.range; });
            if (!rangeMode && items.some(function (d) { return !d.range; })) {
                throw Error('All items must have the "range" property');
            }
            // Helpers - Start:
            var ITEMtoX = d3
                .scaleBand()
                .domain(items.map(function (d) { return d.label; }))
                .range([0, width])
                .paddingInner(0.17)
                .paddingOuter(1);
            var XtoLABEL = function (value) {
                var domain = ITEMtoX.domain();
                var paddingOuter = ITEMtoX(domain[0]);
                var eachBand = ITEMtoX.step();
                var index = Math.floor(((value - paddingOuter) / eachBand));
                return domain[Math.max(0, Math.min(index, domain.length - 1))];
            };
            // YEAR SELECTION CIRCLES
            var sliders = d3
                .extent(items, function (d) { return d.label; })
                .map(function (d) { return ({ x: ITEMtoX(d) + ITEMtoX.bandwidth() / 2, y: height }); });
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
            // Helpers - End.
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
                .attr('width', ITEMtoX.bandwidth)
                .attr('height', function (d) { return height - scaleHeight(d.value); })
                .attr('y', function (d) { return scaleHeight(d.value); })
                .attr('x', function (d) { return ITEMtoX(d.label); })
                .attr('data-start', function (d) { return d.payload; }) // make the data easily accessible
                .attr('data-end', function (d) { return (d.range ? d.range.payload : d.payload); })
                .attr('fill', 'url(#gradient)');
            barsLayer // overlay
                .append('rect')
                .attr('width', width)
                .attr('height', height)
                .attr('opacity', 0)
                .on('mousemove', function (event) {
                var year = XtoLABEL(event.offsetX - margin.left);
                // console.log({ x: event.x, year });
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
                var item = XtoLABEL(event.offsetX - margin.left);
                var xAxisValue = ITEMtoX(item) + ITEMtoX.bandwidth() / 2;
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
                rangePicker
                    .selectAll('text')
                    .transition()
                    .ease(d3.easeQuadOut)
                    .duration(550)
                    .attr('x', function () { return xAxisValue; })
                    .text(function () { return item; });
                g.selectAll('rect.bars').attr('fill', function (d) { return colourBars(d); });
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
                var item = XtoLABEL(event.x);
                var xAxisValue = ITEMtoX(item) + ITEMtoX.bandwidth() / 2;
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
                    var position = sliders.findIndex(function (slider) { return slider.x === d.x; });
                    if (rangeMode && position === 1) {
                        return items.find(function (it) { return it.label === l; }).range.label;
                    }
                    return l;
                });
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
                    if (_this.data && _this.data.setDraw) {
                        _this.data.setDraw(_this.draw);
                    }
                });
            });
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
    return HistogramRangeComponent;
}());
export { HistogramRangeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9ncmFtLXJhbmdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oaXN0b2dyYW0tcmFuZ2UvaGlzdG9ncmFtLXJhbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDREQUE0RDtBQUM1RCw2QkFBNkI7QUFDN0IscUJBQXFCO0FBQ3JCLDZCQUE2Qjs7QUFFN0IsT0FBTyxFQUF1QixTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBZ0Z0RTtJQUFBO1FBQUEsaUJBa1RDO1FBM1NTLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFzQnhCLFNBQUksR0FBRzs7WUFDRyxJQUFBLGFBQUUsQ0FBVTtZQUNkLElBQUEsZUFJTyxFQUhYLGdCQUFLLEVBQUUsa0JBQU0sRUFBRSxrQkFBTSxFQUNyQixnQkFBSyxFQUFFLG9CQUFPLEVBQUUsNEJBQVcsRUFDM0IsY0FDVyxDQUFDO1lBRWQsa0JBQWtCO1lBQ2xCLElBQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSyxFQUFQLENBQU8sQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBUixDQUFRLENBQUMsRUFBRTtnQkFDN0MsTUFBTSxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQzthQUN6RDtZQUVELG1CQUFtQjtZQUNuQixJQUFNLE9BQU8sR0FBRyxFQUFFO2lCQUNmLFNBQVMsRUFBRTtpQkFDWCxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLENBQUM7aUJBQ2pDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDakIsWUFBWSxDQUFDLElBQUksQ0FBQztpQkFDbEIsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRW5CLElBQU0sUUFBUSxHQUFHLFVBQUMsS0FBSztnQkFDckIsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNoQyxJQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDaEMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLENBQUMsQ0FBQztZQUVGLHlCQUF5QjtZQUN6QixJQUFJLE9BQU8sR0FBRyxFQUFFO2lCQUNiLE1BQU0sQ0FBQyxLQUFLLEVBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSyxFQUFQLENBQU8sQ0FBQztpQkFDN0IsR0FBRyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBeEQsQ0FBd0QsQ0FBQyxDQUFDO1lBRXhFLFNBQVMsU0FBUyxDQUFDLENBQUM7Z0JBQ2xCLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFiLENBQWEsQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztvQkFBRSxPQUFPLElBQUksQ0FBQztnQkFDaEUsT0FBTyxLQUFLLENBQUM7WUFDZixDQUFDO1lBRUQsU0FBUyxVQUFVLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFBRSxPQUFPLGdCQUFnQixDQUFDO2dCQUNoRCxPQUFPLFNBQVMsQ0FBQztZQUNuQixDQUFDO1lBRUQsU0FBUyxnQkFBZ0I7Z0JBQ3ZCLElBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxFQUFFLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FBQztnQkFDM0UsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQUUsSUFBSyxPQUFBLEVBQUUsQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDO2dCQUN6RSxPQUFPO29CQUNMLFVBQVUsQ0FBQyxPQUFPO29CQUNsQixTQUFTO3dCQUNQLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU87d0JBQ3hCLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTztpQkFDckIsQ0FBQztZQUNKLENBQUM7WUFDRCxpQkFBaUI7WUFFakIsSUFBTSxHQUFHLEdBQUcsRUFBRTtpQkFDWCxNQUFNLENBQUMsTUFBSSxXQUFhLENBQUM7aUJBQ3pCLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztpQkFDakQsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFdkQsSUFBTSxXQUFXLEdBQUcsRUFBRTtpQkFDbkIsV0FBVyxFQUFFLENBQUMscUNBQXFDO2lCQUNuRCxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSyxFQUFQLENBQU8sQ0FBQyxDQUFDLENBQUM7aUJBQzFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXRCLFdBQVc7WUFDWCxJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsY0FBYztZQUMvQyxJQUFNLFFBQVEsR0FBRyxJQUFJO2lCQUNsQixNQUFNLENBQUMsZ0JBQWdCLENBQUM7aUJBQ3hCLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDO2lCQUN0QixJQUFJLENBQUMsZUFBZSxFQUFFLGdCQUFnQixDQUFDO2lCQUN2QyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztpQkFDYixJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQztpQkFDbEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7aUJBQ2IsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUIsUUFBUTtpQkFDTCxNQUFNLENBQUMsTUFBTSxDQUFDO2lCQUNkLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO2lCQUN0QixJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQztpQkFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsa0JBQWtCO2lCQUNyRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNCLFFBQVE7aUJBQ0wsTUFBTSxDQUFDLE1BQU0sQ0FBQztpQkFDZCxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztpQkFDcEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7aUJBQ3RCLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWU7aUJBQy9DLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFM0Isc0JBQXNCO1lBQ3RCLElBQU0sQ0FBQyxHQUFHLEdBQUc7aUJBQ1YsTUFBTSxDQUFDLEdBQUcsQ0FBQztpQkFDWCxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztpQkFDdEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxlQUFhLE1BQU0sQ0FBQyxJQUFJLFNBQUksTUFBTSxDQUFDLEdBQUcsTUFBRyxDQUFDLENBQUM7WUFFaEUsSUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3RELElBQU0sYUFBYSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztZQUU5RCxZQUFZO1lBQ1osU0FBUyxDQUFDLE9BQU87aUJBQ2QsU0FBUyxDQUFDLFdBQVcsQ0FBQztpQkFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDWCxJQUFJLENBQUMsTUFBTSxDQUFDO2lCQUNaLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO2lCQUNyQixJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUM7aUJBQ2hDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxNQUFNLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQztpQkFDcEQsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBQUM7aUJBQ3RDLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFoQixDQUFnQixDQUFDO2lCQUNsQyxJQUFJLENBQUMsWUFBWSxFQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLE9BQU8sRUFBVCxDQUFTLENBQUMsQ0FBQyxrQ0FBa0M7aUJBQ3ZFLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQXZDLENBQXVDLENBQUM7aUJBQ2hFLElBQUksQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztZQUVsQyxTQUFTLENBQUMsVUFBVTtpQkFDakIsTUFBTSxDQUFDLE1BQU0sQ0FBQztpQkFDZCxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztpQkFDcEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7aUJBQ3RCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO2lCQUNsQixFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBSztnQkFDckIsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuRCxxQ0FBcUM7Z0JBQ3JDLEVBQUUsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFDLENBQUM7b0JBQ3ZDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxLQUFLO3dCQUFFLE9BQU8sU0FBUyxDQUFDO29CQUN2QyxPQUFPLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUM7aUJBQ0QsRUFBRSxDQUFDLFVBQVUsRUFBRTtnQkFDZCxFQUFFLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQWIsQ0FBYSxDQUFDLENBQUM7WUFDL0QsQ0FBQyxDQUFDO2lCQUNELEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQyxLQUFLO2dCQUNqQixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ25ELElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMzRCxJQUFNLFFBQVEsR0FBRztvQkFDZixDQUFDLEVBQUUsVUFBVTtvQkFDYixDQUFDLEVBQUUsTUFBTTtpQkFDVixDQUFDO2dCQUNGLE9BQU8sR0FBRztpQ0FFSCxRQUFRO2lDQUNSLFFBQVE7aUJBQ2QsQ0FBQztnQkFDRixXQUFXO3FCQUNSLElBQUksQ0FBQyxPQUFPLENBQUM7cUJBQ2IsTUFBTSxDQUFDLFFBQVEsQ0FBQztxQkFDaEIsVUFBVSxFQUFFO3FCQUNaLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3FCQUNwQixRQUFRLENBQUMsR0FBRyxDQUFDO3FCQUNiLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxFQUFILENBQUcsQ0FBQyxDQUFDO2dCQUMxQixhQUFhO3FCQUNWLE1BQU0sQ0FBQyxlQUFlLENBQUM7cUJBQ3ZCLFVBQVUsRUFBRTtxQkFDWixJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztxQkFDcEIsUUFBUSxDQUFDLEdBQUcsQ0FBQztxQkFDYixJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBVixDQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELFdBQVc7cUJBQ1IsU0FBUyxDQUFDLE1BQU0sQ0FBQztxQkFDakIsVUFBVSxFQUFFO3FCQUNaLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3FCQUNwQixRQUFRLENBQUMsR0FBRyxDQUFDO3FCQUNiLElBQUksQ0FBQyxHQUFHLEVBQUUsY0FBTSxPQUFBLFVBQVUsRUFBVixDQUFVLENBQUM7cUJBQzNCLElBQUksQ0FBQyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQyxDQUFDO2dCQUNwQixDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQWIsQ0FBYSxDQUFDLENBQUM7Z0JBQzVELEtBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQztZQUNqRCxDQUFDLENBQUMsQ0FBQztZQUVMLGFBQWEsQ0FBQyxZQUFZO2lCQUN2QixNQUFNLENBQUMsTUFBTSxDQUFDO2lCQUNkLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO2lCQUN6QixJQUFJLENBQ0gsR0FBRyxFQUNILEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDUixDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7Z0JBQ1gsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO2FBQ2hCLENBQUMsQ0FDSDtpQkFDQSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztpQkFDdkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7aUJBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFFN0IsYUFBYSxDQUFDLFlBQVk7aUJBQ3ZCLE1BQU0sQ0FBQyxNQUFNLENBQUM7aUJBQ2QsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7aUJBQ3pCLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFWLENBQVUsQ0FBQyxDQUFDLENBQUM7aUJBQ3BELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO2lCQUN2QixJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVsQyxJQUFNLFdBQVcsR0FBRyxhQUFhO2lCQUM5QixTQUFTLENBQUMsZUFBZSxDQUFDO2lCQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUM7aUJBQ3BELElBQUksQ0FBQyxHQUFHLENBQUM7aUJBQ1QsSUFBSSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQztZQUVoQzs7ZUFFRztZQUNILFNBQVMsY0FBYyxDQUFDLEtBQUssRUFBRSxJQUFJO2dCQUNqQyxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDM0QsSUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO2dCQUNkLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsZUFBZTtvQkFDakQsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUN6RCxDQUFDLENBQUMsQ0FBQztnQkFDSCxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUM7Z0JBQ3BELGtCQUFrQjtnQkFDbEIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7cUJBQ1osTUFBTSxDQUFDLFFBQVEsQ0FBQztxQkFDaEIsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDO2dCQUNuQyxxQkFBcUI7Z0JBQ3JCLGFBQWE7cUJBQ1YsTUFBTSxDQUFDLGVBQWUsQ0FBQztxQkFDdkIsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQVYsQ0FBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCwyQkFBMkI7Z0JBQzNCLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3FCQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUM7cUJBQ2QsSUFBSSxDQUFDLEdBQUcsRUFBRSxjQUFNLE9BQUEsVUFBVSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUMvQix5QkFBeUI7Z0JBQ3pCLGFBQWE7cUJBQ1YsU0FBUyxDQUFDLE1BQU0sQ0FBQztxQkFDakIsSUFBSSxDQUFDLFVBQUMsQ0FBQztvQkFDTixJQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN4QixJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUM7b0JBQ2pFLElBQUksU0FBUyxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7d0JBQy9CLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQUUsSUFBSyxPQUFBLEVBQUUsQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFkLENBQWMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7cUJBQ3ZEO29CQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNiLENBQUMsQ0FBQyxDQUFDO2dCQUNMLGtCQUFrQjtnQkFDbEIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQUEsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFiLENBQWEsQ0FBQyxDQUFDO1lBQzlELENBQUM7WUFFRCxXQUFXLENBQUMsZUFBZTtpQkFDeEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUU7aUJBQ1osRUFBRSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUM7aUJBQzFCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsVUFBQyxLQUFLLEVBQUUsSUFBSTtnQkFDckIsNENBQTRDO2dCQUM1QyxjQUFjLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUM1QiwwQkFBMEI7Z0JBQzFCLEtBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQztZQUNqRCxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRVIsV0FBVztpQkFDUixNQUFNLENBQUMsUUFBUSxDQUFDO2lCQUNoQixJQUFJLENBQUMsSUFBSSxFQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLENBQUMsRUFBSCxDQUFHLENBQUM7aUJBQ3RCLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxFQUFILENBQUcsQ0FBQztpQkFDdEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7aUJBQ1osSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUM7aUJBQ3JCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO2lCQUN2QixJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUM7aUJBQzlCLElBQUksQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztZQUVwQyxXQUFXO2lCQUNSLElBQUksQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDO2lCQUM3QixJQUFJLENBQUMsYUFBYSxFQUFFLDJCQUEyQixDQUFDO2lCQUNoRCxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQztpQkFDekIsTUFBTSxDQUFDLE1BQU0sQ0FBQztpQkFDZCxJQUFJLENBQUMsR0FBRyxFQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQztpQkFDekMsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxDQUFDLEVBQUgsQ0FBRyxDQUFDO2lCQUNyQixJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUM7aUJBQzVCLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO2dCQUNULElBQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksU0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3hCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztpQkFDM0Q7Z0JBQUMsT0FBTyxDQUFDLENBQUM7WUFDYixDQUFDLENBQUMsQ0FBQztZQUVMLFVBQUksSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLEtBQUssMENBQUUsSUFBSSxFQUFFO2dCQUNyQixJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztxQkFDbkMsS0FBSyxPQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxtQ0FBSSxDQUFDLENBQUM7cUJBQ2pDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM1RCxJQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztxQkFDL0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxlQUFhLE1BQU0sQ0FBQyxJQUFJLFVBQUssTUFBTSxDQUFDLEdBQUcsTUFBRyxDQUFDO3FCQUM3RCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRWYsVUFBVSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM1RDtRQUNILENBQUMsQ0FBQTtJQUNILENBQUM7SUF6U0MsdURBQXFCLEdBQXJCO1FBQUEsaUJBa0JDO1FBakJDOzs7VUFHRTtRQUNGLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksSUFBSSxDQUFDLE9BQU87Z0JBQUUsT0FBTztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixVQUFVLENBQUM7Z0JBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07b0JBQ3ZCLEtBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDO29CQUNqQixLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ1osSUFBSSxLQUFJLENBQUMsSUFBSSxJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO3dCQUNsQyxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQzlCO2dCQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUExQlE7UUFBUixLQUFLLEVBQUU7O3lEQUEwQjtJQUV6QjtRQUFSLEtBQUssRUFBRTs7eURBQVc7SUFIUix1QkFBdUI7UUFKbkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFvQjtZQUM5Qix3SUFBcUM7U0FDdEMsQ0FBQztPQUNXLHVCQUF1QixDQWtUbkM7SUFBRCw4QkFBQztDQUFBLEFBbFRELElBa1RDO1NBbFRZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11c2UtYmVmb3JlLWRlZmluZSAqL1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBISVNUT0dSQU0tUkFOR0UudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IEFmdGVyQ29udGVudENoZWNrZWQsIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgSGlzdG9ncmFtUmFuZ2VDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBIaXN0b2dyYW1SYW5nZURhdGEge1xyXG4gIC8qKlxyXG4gICAqIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgaGlzdG9ncmFtLXJhbmdlIHN2Z1xyXG4gICAqL1xyXG4gIGNvbnRhaW5lcklkOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogdG90YWwgd2lkdGggZm9yIHRoZSBzdmcgZWxlbWVudFxyXG4gICAqL1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogdG90YWwgaGVpZ2h0IGZvciB0aGUgc3ZnIGVsZW1lbnRcclxuICAgKi9cclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBJbnRlcm5hbCBtYXJnaW5zIG9mIHRoZSBzdmdcclxuICAgKi9cclxuICBtYXJnaW46IHtcclxuICAgIGxlZnQ6IG51bWJlcjtcclxuICAgIHJpZ2h0OiBudW1iZXI7XHJcbiAgICB0b3A6IG51bWJlcjtcclxuICAgIGJvdHRvbTogbnVtYmVyO1xyXG4gIH07XHJcbiAgLyoqXHJcbiAgICogVGhlbWUgb2YgdGhlIGhpc3RvZ3JhbVxyXG4gICAqL1xyXG4gIGNvbG91cnM6IHtcclxuICAgIHRvcDogc3RyaW5nO1xyXG4gICAgYm90dG9tOiBzdHJpbmc7XHJcbiAgICBhY2NlbnQ6IHN0cmluZztcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIERhdGEgZm9yIHRoZSBoaXN0b2dyYW0gYmFyc1xyXG4gICAqL1xyXG4gIGl0ZW1zOiB7XHJcbiAgICAvKiogZGVmYXVsdCBsYWJlbCBvZiB0aGUgaXRlbSAqL1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIC8qKiB5LWF4aXMgdmFsdWUgb2YgdGhlIGJhciAoaGVpZ2h0KSAqL1xyXG4gICAgdmFsdWU6IG51bWJlcjtcclxuICAgIC8qKiBwYXlsb2FkIHRoYXQgdGhlIGl0ZW0gc2hvdWxkIGVtaXQgd2hlbiBzZWxlY3RlZCAqL1xyXG4gICAgcGF5bG9hZDogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiAndXBwZXInIHZhbHVlcyBvZiB0aGUgcmFuZ2UuXHJcbiAgICAgKiBvbmx5IHVzZWQgd2hlbiBlYWNoIGJhciByZXByZXNlbnRzIGEgcmFuZ2UuXHJcbiAgICAgKi9cclxuICAgIHJhbmdlPzoge1xyXG4gICAgICAvKiogbGFiZWwgbG9hZGVkIHdoZW4gc2VsZWN0ZWQgYnkgdGhlIHJpZ2h0LW1vc3QgcG9pbnRlciAqL1xyXG4gICAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgICAvKiogcGF5bG9hZCBlbWl0dGVkIHdoZW4gc2VsZWN0ZWQgYnkgdGhlIHJpZ2h0LW1vc3QgcG9pbnRlciAqL1xyXG4gICAgICBwYXlsb2FkOiBhbnk7XHJcbiAgICB9O1xyXG4gIH1bXTtcclxuICAvKipcclxuICAgKiBBeGlzIHNldHRpbmdzXHJcbiAgICovXHJcbiAgYXhpcz86IHtcclxuICAgIC8qKiBZIEF4aXMgc2V0dGluZ3MgKi9cclxuICAgIHlBeGlzPzoge1xyXG4gICAgICAvKiogVHVybiBvbiBhbmQgb2ZmIHRoZSBheGlzICovXHJcbiAgICAgIHNob3c/OiBib29sZWFuO1xyXG4gICAgICAvKiogTWFudWFsbHkgc2V0IHRoZSBheGlzIHZhbHVlcyB0byBzaG93ICovXHJcbiAgICAgIHZhbHVlcz86IG51bWJlcltdO1xyXG4gICAgICAvKiogSG93IG1hbnkgdGlja3MgZG8geW91IHdhbnQgdG8gc2VlICovXHJcbiAgICAgIHRpY2tBbW91bnQ/OiBudW1iZXI7XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgLyoqXHJcbiAgICogZXhwb3NlIHRoZSBkcmF3IGZ1bmN0aW9uIG91dHNpZGUgb2YgbjctZnJvbnRlbmQvY29tcG9uZW50cyBsaWJyYXJ5XHJcbiAgICogdGhpcyBpcyBuZWVkZWQgdG8gcmVkcmF3IGJ1YmJsZS1jaGFydC1jb21wb25lbnQgb24gY29tbWFuZFxyXG4gICAqL1xyXG4gIHNldERyYXc/OiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctaGlzdG9ncmFtLXJhbmdlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaGlzdG9ncmFtLXJhbmdlLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIaXN0b2dyYW1SYW5nZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IEhpc3RvZ3JhbVJhbmdlRGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBwcml2YXRlIGQzO1xyXG5cclxuICBwcml2YXRlIF9sb2FkZWQgPSBmYWxzZTtcclxuXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xyXG4gICAgLypcclxuICAgICBXYWl0cyBmb3IgdGhlIGRvbSB0byBiZSBsb2FkZWQsIHRoZW4gZmlyZXMgdGhlIGRyYXcgZnVuY3Rpb25cclxuICAgICB0aGF0IHJlbmRlcnMgdGhlIGNoYXJ0LlxyXG4gICAgKi9cclxuICAgIGlmICh0aGlzLmRhdGEpIHtcclxuICAgICAgaWYgKHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xyXG4gICAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpbXBvcnQoJ2QzJykudGhlbigobW9kdWxlKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmQzID0gbW9kdWxlO1xyXG4gICAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICAgICAgICBpZiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5zZXREcmF3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zZXREcmF3KHRoaXMuZHJhdyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhdyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZDMgfSA9IHRoaXM7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHdpZHRoLCBtYXJnaW4sIGhlaWdodCxcclxuICAgICAgaXRlbXMsIGNvbG91cnMsIGNvbnRhaW5lcklkLFxyXG4gICAgICBheGlzXHJcbiAgICB9ID0gdGhpcy5kYXRhO1xyXG5cclxuICAgIC8vIGRhdGEgdmFsaWRhdGlvblxyXG4gICAgY29uc3QgcmFuZ2VNb2RlID0gaXRlbXMuZXZlcnkoKGQpID0+IGQucmFuZ2UpO1xyXG4gICAgaWYgKCFyYW5nZU1vZGUgJiYgaXRlbXMuc29tZSgoZCkgPT4gIWQucmFuZ2UpKSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdBbGwgaXRlbXMgbXVzdCBoYXZlIHRoZSBcInJhbmdlXCIgcHJvcGVydHknKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBIZWxwZXJzIC0gU3RhcnQ6XHJcbiAgICBjb25zdCBJVEVNdG9YID0gZDNcclxuICAgICAgLnNjYWxlQmFuZCgpXHJcbiAgICAgIC5kb21haW4oaXRlbXMubWFwKChkKSA9PiBkLmxhYmVsKSlcclxuICAgICAgLnJhbmdlKFswLCB3aWR0aF0pXHJcbiAgICAgIC5wYWRkaW5nSW5uZXIoMC4xNylcclxuICAgICAgLnBhZGRpbmdPdXRlcigxKTtcclxuXHJcbiAgICBjb25zdCBYdG9MQUJFTCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICBjb25zdCBkb21haW4gPSBJVEVNdG9YLmRvbWFpbigpO1xyXG4gICAgICBjb25zdCBwYWRkaW5nT3V0ZXIgPSBJVEVNdG9YKGRvbWFpblswXSk7XHJcbiAgICAgIGNvbnN0IGVhY2hCYW5kID0gSVRFTXRvWC5zdGVwKCk7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcigoKHZhbHVlIC0gcGFkZGluZ091dGVyKSAvIGVhY2hCYW5kKSk7XHJcbiAgICAgIHJldHVybiBkb21haW5bTWF0aC5tYXgoMCwgTWF0aC5taW4oaW5kZXgsIGRvbWFpbi5sZW5ndGggLSAxKSldO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBZRUFSIFNFTEVDVElPTiBDSVJDTEVTXHJcbiAgICBsZXQgc2xpZGVycyA9IGQzXHJcbiAgICAgIC5leHRlbnQoaXRlbXMsIChkKSA9PiBkLmxhYmVsKVxyXG4gICAgICAubWFwKChkKSA9PiAoeyB4OiBJVEVNdG9YKGQpICsgSVRFTXRvWC5iYW5kd2lkdGgoKSAvIDIsIHk6IGhlaWdodCB9KSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaXNJblJhbmdlKHkpIHtcclxuICAgICAgY29uc3QgYWxsSXRlbXMgPSBzbGlkZXJzLm1hcCgoZCkgPT4gWHRvTEFCRUwoZC54KSk7XHJcbiAgICAgIGlmICh5ID49IGQzLm1pbihhbGxJdGVtcykgJiYgeSA8PSBkMy5tYXgoYWxsSXRlbXMpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbG91ckJhcnMoZCkge1xyXG4gICAgICBpZiAoaXNJblJhbmdlKGQubGFiZWwpKSByZXR1cm4gJ3VybCgjZ3JhZGllbnQpJztcclxuICAgICAgcmV0dXJuICcjZTNlM2UzJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTZWxlY3RlZFJhbmdlKCkge1xyXG4gICAgICBjb25zdCByYW5nZVN0YXJ0ID0gaXRlbXMuZmluZCgoaXQpID0+IGl0LmxhYmVsID09PSBYdG9MQUJFTChzbGlkZXJzWzBdLngpKTtcclxuICAgICAgY29uc3QgcmFuZ2VFbmQgPSBpdGVtcy5maW5kKChpdCkgPT4gaXQubGFiZWwgPT09IFh0b0xBQkVMKHNsaWRlcnNbMV0ueCkpO1xyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIHJhbmdlU3RhcnQucGF5bG9hZCxcclxuICAgICAgICByYW5nZU1vZGVcclxuICAgICAgICAgID8gcmFuZ2VFbmQucmFuZ2UucGF5bG9hZFxyXG4gICAgICAgICAgOiByYW5nZUVuZC5wYXlsb2FkXHJcbiAgICAgIF07XHJcbiAgICB9XHJcbiAgICAvLyBIZWxwZXJzIC0gRW5kLlxyXG5cclxuICAgIGNvbnN0IHN2ZyA9IGQzXHJcbiAgICAgIC5zZWxlY3QoYCMke2NvbnRhaW5lcklkfWApXHJcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXHJcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSk7XHJcblxyXG4gICAgY29uc3Qgc2NhbGVIZWlnaHQgPSBkM1xyXG4gICAgICAuc2NhbGVTeW1sb2coKSAvLyBtb3N0IHNpbWlsYXIgc2NhbGUgdG8gdGhlIG9yaWdpbmFsXHJcbiAgICAgIC5kb21haW4oWzAsIGQzLm1heChpdGVtcywgKGQpID0+IGQudmFsdWUpXSlcclxuICAgICAgLnJhbmdlKFtoZWlnaHQsIDBdKTtcclxuXHJcbiAgICAvLyBHUkFESUVOVFxyXG4gICAgY29uc3QgZGVmcyA9IHN2Zy5hcHBlbmQoJ2RlZnMnKTsgLy8gZGVmaW5pdGlvbnNcclxuICAgIGNvbnN0IGdyYWRpZW50ID0gZGVmc1xyXG4gICAgICAuYXBwZW5kKCdsaW5lYXJHcmFkaWVudCcpXHJcbiAgICAgIC5hdHRyKCdpZCcsICdncmFkaWVudCcpXHJcbiAgICAgIC5hdHRyKCdncmFkaWVudFVuaXRzJywgJ3VzZXJTcGFjZU9uVXNlJylcclxuICAgICAgLmF0dHIoJ3gxJywgMClcclxuICAgICAgLmF0dHIoJ3kxJywgaGVpZ2h0KVxyXG4gICAgICAuYXR0cigneDInLCAwKVxyXG4gICAgICAuYXR0cigneTInLCBtYXJnaW4udG9wKTtcclxuICAgIGdyYWRpZW50XHJcbiAgICAgIC5hcHBlbmQoJ3N0b3AnKVxyXG4gICAgICAuYXR0cignY2xhc3MnLCAnc3RhcnQnKVxyXG4gICAgICAuYXR0cignb2Zmc2V0JywgJzAlJylcclxuICAgICAgLmF0dHIoJ3N0b3AtY29sb3InLCBjb2xvdXJzLmJvdHRvbSkgLy8gYm90dG9tIGdyYWRpZW50XHJcbiAgICAgIC5hdHRyKCdzdG9wLW9wYWNpdHknLCAxKTtcclxuICAgIGdyYWRpZW50XHJcbiAgICAgIC5hcHBlbmQoJ3N0b3AnKVxyXG4gICAgICAuYXR0cignY2xhc3MnLCAnZW5kJylcclxuICAgICAgLmF0dHIoJ29mZnNldCcsICcxMDAlJylcclxuICAgICAgLmF0dHIoJ3N0b3AtY29sb3InLCBjb2xvdXJzLnRvcCkgLy8gdG9wIGdyYWRpZW50XHJcbiAgICAgIC5hdHRyKCdzdG9wLW9wYWNpdHknLCAxKTtcclxuXHJcbiAgICAvLyBEUkFXIElOU0lERSBNQVJHSU5TXHJcbiAgICBjb25zdCBnID0gc3ZnXHJcbiAgICAgIC5hcHBlbmQoJ2cnKVxyXG4gICAgICAuYXR0cignY2xhc3MnLCAnY2hhcnQnKVxyXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke21hcmdpbi50b3B9KWApO1xyXG5cclxuICAgIGNvbnN0IGJhcnNMYXllciA9IGcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnYmFycycpO1xyXG4gICAgY29uc3QgY29udHJvbHNMYXllciA9IGcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnY29udHJvbHMnKTtcclxuXHJcbiAgICAvLyBCQVIgQ0hBUlRcclxuICAgIGJhcnNMYXllciAvLyBiYXJzXHJcbiAgICAgIC5zZWxlY3RBbGwoJ3JlY3QuYmFycycpXHJcbiAgICAgIC5kYXRhKGl0ZW1zKVxyXG4gICAgICAuam9pbigncmVjdCcpXHJcbiAgICAgIC5hdHRyKCdjbGFzcycsICdiYXJzJylcclxuICAgICAgLmF0dHIoJ3dpZHRoJywgSVRFTXRvWC5iYW5kd2lkdGgpXHJcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCAoZCkgPT4gaGVpZ2h0IC0gc2NhbGVIZWlnaHQoZC52YWx1ZSkpXHJcbiAgICAgIC5hdHRyKCd5JywgKGQpID0+IHNjYWxlSGVpZ2h0KGQudmFsdWUpKVxyXG4gICAgICAuYXR0cigneCcsIChkKSA9PiBJVEVNdG9YKGQubGFiZWwpKVxyXG4gICAgICAuYXR0cignZGF0YS1zdGFydCcsIChkKSA9PiBkLnBheWxvYWQpIC8vIG1ha2UgdGhlIGRhdGEgZWFzaWx5IGFjY2Vzc2libGVcclxuICAgICAgLmF0dHIoJ2RhdGEtZW5kJywgKGQpID0+IChkLnJhbmdlID8gZC5yYW5nZS5wYXlsb2FkIDogZC5wYXlsb2FkKSlcclxuICAgICAgLmF0dHIoJ2ZpbGwnLCAndXJsKCNncmFkaWVudCknKTtcclxuXHJcbiAgICBiYXJzTGF5ZXIgLy8gb3ZlcmxheVxyXG4gICAgICAuYXBwZW5kKCdyZWN0JylcclxuICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXHJcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXHJcbiAgICAgIC5hdHRyKCdvcGFjaXR5JywgMClcclxuICAgICAgLm9uKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB5ZWFyID0gWHRvTEFCRUwoZXZlbnQub2Zmc2V0WCAtIG1hcmdpbi5sZWZ0KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh7IHg6IGV2ZW50LngsIHllYXIgfSk7XHJcbiAgICAgICAgZDMuc2VsZWN0QWxsKCdyZWN0LmJhcnMnKS5hdHRyKCdmaWxsJywgKGQpID0+IHtcclxuICAgICAgICAgIGlmICh5ZWFyID09PSBkLmxhYmVsKSByZXR1cm4gJyNCMENDRjgnO1xyXG4gICAgICAgICAgcmV0dXJuIGNvbG91ckJhcnMoZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbignbW91c2VvdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgZDMuc2VsZWN0QWxsKCdyZWN0LmJhcnMnKS5hdHRyKCdmaWxsJywgKGQpID0+IGNvbG91ckJhcnMoZCkpO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IFh0b0xBQkVMKGV2ZW50Lm9mZnNldFggLSBtYXJnaW4ubGVmdCk7XHJcbiAgICAgICAgY29uc3QgeEF4aXNWYWx1ZSA9IElURU10b1goaXRlbSkgKyBJVEVNdG9YLmJhbmR3aWR0aCgpIC8gMjtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHtcclxuICAgICAgICAgIHg6IHhBeGlzVmFsdWUsXHJcbiAgICAgICAgICB5OiBoZWlnaHRcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNsaWRlcnMgPSBbXHJcbiAgICAgICAgICAvLyBhdm9pZCBqb2luaW5nIHRoZSB0d28gb2JqZWN0cyFcclxuICAgICAgICAgIHsgLi4ubmV3VmFsdWUgfSxcclxuICAgICAgICAgIHsgLi4ubmV3VmFsdWUgfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmFuZ2VQaWNrZXJcclxuICAgICAgICAgIC5kYXRhKHNsaWRlcnMpXHJcbiAgICAgICAgICAuc2VsZWN0KCdjaXJjbGUnKVxyXG4gICAgICAgICAgLnRyYW5zaXRpb24oKVxyXG4gICAgICAgICAgLmVhc2UoZDMuZWFzZVF1YWRPdXQpXHJcbiAgICAgICAgICAuZHVyYXRpb24oNTUwKVxyXG4gICAgICAgICAgLmF0dHIoJ2N4JywgKGQpID0+IGQueCk7XHJcbiAgICAgICAgY29udHJvbHNMYXllclxyXG4gICAgICAgICAgLnNlbGVjdCgncGF0aC5ibHVlbGluZScpXHJcbiAgICAgICAgICAudHJhbnNpdGlvbigpXHJcbiAgICAgICAgICAuZWFzZShkMy5lYXNlUXVhZE91dClcclxuICAgICAgICAgIC5kdXJhdGlvbig1NTApXHJcbiAgICAgICAgICAuYXR0cignZCcsIGQzLmxpbmUoKShzbGlkZXJzLm1hcCgoZCkgPT4gW2QueCwgZC55XSkpKTtcclxuICAgICAgICByYW5nZVBpY2tlclxyXG4gICAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXHJcbiAgICAgICAgICAudHJhbnNpdGlvbigpXHJcbiAgICAgICAgICAuZWFzZShkMy5lYXNlUXVhZE91dClcclxuICAgICAgICAgIC5kdXJhdGlvbig1NTApXHJcbiAgICAgICAgICAuYXR0cigneCcsICgpID0+IHhBeGlzVmFsdWUpXHJcbiAgICAgICAgICAudGV4dCgoKSA9PiBpdGVtKTtcclxuICAgICAgICBnLnNlbGVjdEFsbCgncmVjdC5iYXJzJykuYXR0cignZmlsbCcsIChkKSA9PiBjb2xvdXJCYXJzKGQpKTtcclxuICAgICAgICB0aGlzLmVtaXQoJ3Jhbmdlc2VsZWN0ZWQnLCBnZXRTZWxlY3RlZFJhbmdlKCkpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBjb250cm9sc0xheWVyIC8vIGdyYXkgbGluZVxyXG4gICAgICAuYXBwZW5kKCdwYXRoJylcclxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2dyYXlsaW5lJylcclxuICAgICAgLmF0dHIoXHJcbiAgICAgICAgJ2QnLFxyXG4gICAgICAgIGQzLmxpbmUoKShbXHJcbiAgICAgICAgICBbMCwgaGVpZ2h0XSxcclxuICAgICAgICAgIFt3aWR0aCwgaGVpZ2h0XVxyXG4gICAgICAgIF0pXHJcbiAgICAgIClcclxuICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIDIpXHJcbiAgICAgIC5hdHRyKCdvcGFjaXR5JywgMSlcclxuICAgICAgLmF0dHIoJ3N0cm9rZScsICcjQzFDNUM3Jyk7XHJcblxyXG4gICAgY29udHJvbHNMYXllciAvLyBibHVlIGxpbmVcclxuICAgICAgLmFwcGVuZCgncGF0aCcpXHJcbiAgICAgIC5hdHRyKCdjbGFzcycsICdibHVlbGluZScpXHJcbiAgICAgIC5hdHRyKCdkJywgZDMubGluZSgpKHNsaWRlcnMubWFwKChkKSA9PiBbZC54LCBkLnldKSkpXHJcbiAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAyKVxyXG4gICAgICAuYXR0cignc3Ryb2tlJywgY29sb3Vycy5hY2NlbnQpO1xyXG5cclxuICAgIGNvbnN0IHJhbmdlUGlja2VyID0gY29udHJvbHNMYXllclxyXG4gICAgICAuc2VsZWN0QWxsKCdnLnJhbmdlcGlja2VyJylcclxuICAgICAgLmRhdGEoc2xpZGVycy5zb3J0KChhLCBiKSA9PiBkMy5hc2NlbmRpbmcoYS54LCBiLngpKSlcclxuICAgICAgLmpvaW4oJ2cnKVxyXG4gICAgICAuYXR0cignY2xhc3MnLCAncmFuZ2VwaWNrZXInKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFuaW1hdGUgdGhlIGVsZW1lbnRzIHdoaWxlIHRoZSB1c2VyIGlzIGRyYWdnaW5nIG9uZSBvZiB0aGUgcmFuZ2Ugc2VsZWN0b3JzXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGRyYWdnaW5nVXBkYXRlKGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBYdG9MQUJFTChldmVudC54KTtcclxuICAgICAgY29uc3QgeEF4aXNWYWx1ZSA9IElURU10b1goaXRlbSkgKyBJVEVNdG9YLmJhbmR3aWR0aCgpIC8gMjtcclxuICAgICAgY29uc3QgeWIgPSBbXTtcclxuICAgICAgZy5zZWxlY3RBbGwoJ2NpcmNsZScpLmVhY2goZnVuY3Rpb24gc2V0QmFsbFBvc2l0aW9uKCkge1xyXG4gICAgICAgIHliLnB1c2goeyB4OiArZDMuc2VsZWN0KHRoaXMpLmF0dHIoJ2N4JyksIHk6IGhlaWdodCB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHNsaWRlcnMgPSB5Yi5zb3J0KChhLCBiKSA9PiBkMy5hc2NlbmRpbmcoYS54LCBiLngpKTtcclxuICAgICAgLy8gbW92ZSB0aGUgY2lyY2xlXHJcbiAgICAgIGQzLnNlbGVjdCh0aGlzKVxyXG4gICAgICAgIC5zZWxlY3QoJ2NpcmNsZScpXHJcbiAgICAgICAgLmF0dHIoJ2N4JywgZGF0YS54ID0geEF4aXNWYWx1ZSk7XHJcbiAgICAgIC8vIG1vdmUgdGhlIGJsdWUgbGluZVxyXG4gICAgICBjb250cm9sc0xheWVyXHJcbiAgICAgICAgLnNlbGVjdCgncGF0aC5ibHVlbGluZScpXHJcbiAgICAgICAgLmF0dHIoJ2QnLCBkMy5saW5lKCkoc2xpZGVycy5tYXAoKGQpID0+IFtkLngsIGQueV0pKSk7XHJcbiAgICAgIC8vIGNoYW5nZSB0aGUgdGV4dCBwb3NpdGlvblxyXG4gICAgICBkMy5zZWxlY3QodGhpcylcclxuICAgICAgICAuc2VsZWN0KCd0ZXh0JylcclxuICAgICAgICAuYXR0cigneCcsICgpID0+IHhBeGlzVmFsdWUpO1xyXG4gICAgICAvLyBjaGFuZ2UgdGhlIHRleHQgdmFsdWVzXHJcbiAgICAgIGNvbnRyb2xzTGF5ZXJcclxuICAgICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcclxuICAgICAgICAudGV4dCgoZCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbCA9IFh0b0xBQkVMKGQueCk7XHJcbiAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHNsaWRlcnMuZmluZEluZGV4KChzbGlkZXIpID0+IHNsaWRlci54ID09PSBkLngpO1xyXG4gICAgICAgICAgaWYgKHJhbmdlTW9kZSAmJiBwb3NpdGlvbiA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbXMuZmluZCgoaXQpID0+IGl0LmxhYmVsID09PSBsKS5yYW5nZS5sYWJlbDtcclxuICAgICAgICAgIH0gcmV0dXJuIGw7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIGNvbG91ciB0aGUgYmFyc1xyXG4gICAgICBnLnNlbGVjdEFsbCgncmVjdC5iYXJzJykuYXR0cignZmlsbCcsIChkKSA9PiBjb2xvdXJCYXJzKGQpKTtcclxuICAgIH1cclxuXHJcbiAgICByYW5nZVBpY2tlciAvLyBkcmFnIGhhbmRsZXJcclxuICAgICAgLmNhbGwoZDMuZHJhZygpXHJcbiAgICAgICAgLm9uKCdkcmFnJywgZHJhZ2dpbmdVcGRhdGUpXHJcbiAgICAgICAgLm9uKCdlbmQnLCAoZXZlbnQsIGRhdGEpID0+IHtcclxuICAgICAgICAgIC8vIHVwZGF0ZSBvbmUgbGFzdCB0aW1lIHRvIHByZXZlbnQgZGVzeW5jaW5nXHJcbiAgICAgICAgICBkcmFnZ2luZ1VwZGF0ZShldmVudCwgZGF0YSk7XHJcbiAgICAgICAgICAvLyBlbWl0IHRoZSBzZWxlY3RlZCByYW5nZVxyXG4gICAgICAgICAgdGhpcy5lbWl0KCdyYW5nZXNlbGVjdGVkJywgZ2V0U2VsZWN0ZWRSYW5nZSgpKTtcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgcmFuZ2VQaWNrZXJcclxuICAgICAgLmFwcGVuZCgnY2lyY2xlJylcclxuICAgICAgLmF0dHIoJ2N4JywgKGQpID0+IGQueClcclxuICAgICAgLmF0dHIoJ2N5JywgKGQpID0+IGQueSlcclxuICAgICAgLmF0dHIoJ3InLCA5KVxyXG4gICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXHJcbiAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAyKVxyXG4gICAgICAuYXR0cignc3Ryb2tlJywgY29sb3Vycy5hY2NlbnQpXHJcbiAgICAgIC5hdHRyKCdzdHlsZScsICdjdXJzb3I6IHBvaW50ZXInKTtcclxuXHJcbiAgICByYW5nZVBpY2tlclxyXG4gICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnbWlkZGxlJylcclxuICAgICAgLmF0dHIoJ2ZvbnQtZmFtaWx5JywgJ1JvYm90bywgQXJpYWwsIHNhbnMtc2VyaWYnKVxyXG4gICAgICAuYXR0cignZm9udC1zaXplJywgJzEycHgnKVxyXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcclxuICAgICAgLmF0dHIoJ3knLCAoZCkgPT4gZC55ICsgbWFyZ2luLmJvdHRvbSAvIDIpXHJcbiAgICAgIC5hdHRyKCd4JywgKGQpID0+IGQueClcclxuICAgICAgLmF0dHIoJ2ZpbGwnLCBjb2xvdXJzLmFjY2VudClcclxuICAgICAgLnRleHQoKGQsIGkpID0+IHtcclxuICAgICAgICBjb25zdCBsID0gWHRvTEFCRUwoZC54KTtcclxuICAgICAgICBpZiAocmFuZ2VNb2RlICYmIGkgPT09IDEpIHtcclxuICAgICAgICAgIHJldHVybiBpdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLmxhYmVsID09PSBsKS5yYW5nZS5sYWJlbDtcclxuICAgICAgICB9IHJldHVybiBsO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBpZiAoYXhpcz8ueUF4aXM/LnNob3cpIHtcclxuICAgICAgY29uc3QgeUF4aXMgPSBkMy5heGlzTGVmdChzY2FsZUhlaWdodClcclxuICAgICAgICAudGlja3MoYXhpcy55QXhpcy50aWNrQW1vdW50ID8/IDIpXHJcbiAgICAgICAgLnRpY2tWYWx1ZXMoYXhpcy55QXhpcy52YWx1ZXMgPyBheGlzLnlBeGlzLnZhbHVlcyA6IG51bGwpO1xyXG4gICAgICBjb25zdCB5QXhpc0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpXHJcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sICR7bWFyZ2luLnRvcH0pYClcclxuICAgICAgICAuY2FsbCh5QXhpcyk7XHJcblxyXG4gICAgICB5QXhpc0dyb3VwLnNlbGVjdEFsbCgncGF0aCwgbGluZScpLnN0eWxlKCdzdHJva2UnLCBjb2xvdXJzLmFjY2VudCk7XHJcbiAgICAgIHlBeGlzR3JvdXAuc2VsZWN0QWxsKCd0ZXh0Jykuc3R5bGUoJ2ZpbGwnLCBjb2xvdXJzLmFjY2VudCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==