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
            template: "<div *ngIf=\"data\" class=\"n7-histogram-range\">\n    <svg #histogramRange [id]=\"data.containerId\"></svg>\n</div>\n"
        })
    ], HistogramRangeComponent);
    return HistogramRangeComponent;
}());
export { HistogramRangeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9ncmFtLXJhbmdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oaXN0b2dyYW0tcmFuZ2UvaGlzdG9ncmFtLXJhbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDREQUE0RDtBQUM1RCw2QkFBNkI7QUFDN0IscUJBQXFCO0FBQ3JCLDZCQUE2Qjs7QUFFN0IsT0FBTyxFQUF1QixTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBZ0Z0RTtJQUFBO1FBQUEsaUJBa1RDO1FBM1NTLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFzQnhCLFNBQUksR0FBRzs7WUFDRyxJQUFBLGFBQUUsQ0FBVTtZQUNkLElBQUEsZUFJTyxFQUhYLGdCQUFLLEVBQUUsa0JBQU0sRUFBRSxrQkFBTSxFQUNyQixnQkFBSyxFQUFFLG9CQUFPLEVBQUUsNEJBQVcsRUFDM0IsY0FDVyxDQUFDO1lBRWQsa0JBQWtCO1lBQ2xCLElBQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSyxFQUFQLENBQU8sQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBUixDQUFRLENBQUMsRUFBRTtnQkFDN0MsTUFBTSxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQzthQUN6RDtZQUVELG1CQUFtQjtZQUNuQixJQUFNLE9BQU8sR0FBRyxFQUFFO2lCQUNmLFNBQVMsRUFBRTtpQkFDWCxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLENBQUM7aUJBQ2pDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxL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LEtBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDO29CQUNqQixLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ1osSUFBSSxLQUFJLENBQUMsSUFBSSxJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO3dCQUNsQyxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQzlCO2dCQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUExQlE7UUFBUixLQUFLLEVBQUU7O3lEQUEwQjtJQUV6QjtRQUFSLEtBQUssRUFBRTs7eURBQVc7SUFIUix1QkFBdUI7UUFKbkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixrSUFBcUM7U0FDdEMsQ0FBQztPQUNXLHVCQUF1QixDQWtUbkM7SUFBRCw4QkFBQztDQUFBLEFBbFRELElBa1RDO1NBbFRZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEhJU1RPR1JBTS1SQU5HRS50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEhpc3RvZ3JhbVJhbmdlQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBIaXN0b2dyYW1SYW5nZURhdGEge1xuICAvKipcbiAgICogdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBoaXN0b2dyYW0tcmFuZ2Ugc3ZnXG4gICAqL1xuICBjb250YWluZXJJZDogc3RyaW5nO1xuICAvKipcbiAgICogdG90YWwgd2lkdGggZm9yIHRoZSBzdmcgZWxlbWVudFxuICAgKi9cbiAgd2lkdGg6IG51bWJlcjtcbiAgLyoqXG4gICAqIHRvdGFsIGhlaWdodCBmb3IgdGhlIHN2ZyBlbGVtZW50XG4gICAqL1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIEludGVybmFsIG1hcmdpbnMgb2YgdGhlIHN2Z1xuICAgKi9cbiAgbWFyZ2luOiB7XG4gICAgbGVmdDogbnVtYmVyO1xuICAgIHJpZ2h0OiBudW1iZXI7XG4gICAgdG9wOiBudW1iZXI7XG4gICAgYm90dG9tOiBudW1iZXI7XG4gIH07XG4gIC8qKlxuICAgKiBUaGVtZSBvZiB0aGUgaGlzdG9ncmFtXG4gICAqL1xuICBjb2xvdXJzOiB7XG4gICAgdG9wOiBzdHJpbmc7XG4gICAgYm90dG9tOiBzdHJpbmc7XG4gICAgYWNjZW50OiBzdHJpbmc7XG4gIH07XG4gIC8qKlxuICAgKiBEYXRhIGZvciB0aGUgaGlzdG9ncmFtIGJhcnNcbiAgICovXG4gIGl0ZW1zOiB7XG4gICAgLyoqIGRlZmF1bHQgbGFiZWwgb2YgdGhlIGl0ZW0gKi9cbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIC8qKiB5LWF4aXMgdmFsdWUgb2YgdGhlIGJhciAoaGVpZ2h0KSAqL1xuICAgIHZhbHVlOiBudW1iZXI7XG4gICAgLyoqIHBheWxvYWQgdGhhdCB0aGUgaXRlbSBzaG91bGQgZW1pdCB3aGVuIHNlbGVjdGVkICovXG4gICAgcGF5bG9hZDogYW55O1xuICAgIC8qKlxuICAgICAqICd1cHBlcicgdmFsdWVzIG9mIHRoZSByYW5nZS5cbiAgICAgKiBvbmx5IHVzZWQgd2hlbiBlYWNoIGJhciByZXByZXNlbnRzIGEgcmFuZ2UuXG4gICAgICovXG4gICAgcmFuZ2U/OiB7XG4gICAgICAvKiogbGFiZWwgbG9hZGVkIHdoZW4gc2VsZWN0ZWQgYnkgdGhlIHJpZ2h0LW1vc3QgcG9pbnRlciAqL1xuICAgICAgbGFiZWw6IHN0cmluZztcbiAgICAgIC8qKiBwYXlsb2FkIGVtaXR0ZWQgd2hlbiBzZWxlY3RlZCBieSB0aGUgcmlnaHQtbW9zdCBwb2ludGVyICovXG4gICAgICBwYXlsb2FkOiBhbnk7XG4gICAgfTtcbiAgfVtdO1xuICAvKipcbiAgICogQXhpcyBzZXR0aW5nc1xuICAgKi9cbiAgYXhpcz86IHtcbiAgICAvKiogWSBBeGlzIHNldHRpbmdzICovXG4gICAgeUF4aXM/OiB7XG4gICAgICAvKiogVHVybiBvbiBhbmQgb2ZmIHRoZSBheGlzICovXG4gICAgICBzaG93PzogYm9vbGVhbjtcbiAgICAgIC8qKiBNYW51YWxseSBzZXQgdGhlIGF4aXMgdmFsdWVzIHRvIHNob3cgKi9cbiAgICAgIHZhbHVlcz86IG51bWJlcltdO1xuICAgICAgLyoqIEhvdyBtYW55IHRpY2tzIGRvIHlvdSB3YW50IHRvIHNlZSAqL1xuICAgICAgdGlja0Ftb3VudD86IG51bWJlcjtcbiAgICB9O1xuICB9O1xuICAvKipcbiAgICogZXhwb3NlIHRoZSBkcmF3IGZ1bmN0aW9uIG91dHNpZGUgb2YgbjctZnJvbnRlbmQvY29tcG9uZW50cyBsaWJyYXJ5XG4gICAqIHRoaXMgaXMgbmVlZGVkIHRvIHJlZHJhdyBidWJibGUtY2hhcnQtY29tcG9uZW50IG9uIGNvbW1hbmRcbiAgICovXG4gIHNldERyYXc/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWhpc3RvZ3JhbS1yYW5nZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9oaXN0b2dyYW0tcmFuZ2UuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSGlzdG9ncmFtUmFuZ2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcbiAgQElucHV0KCkgZGF0YTogSGlzdG9ncmFtUmFuZ2VEYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBwcml2YXRlIGQzO1xuXG4gIHByaXZhdGUgX2xvYWRlZCA9IGZhbHNlO1xuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICAvKlxuICAgICBXYWl0cyBmb3IgdGhlIGRvbSB0byBiZSBsb2FkZWQsIHRoZW4gZmlyZXMgdGhlIGRyYXcgZnVuY3Rpb25cbiAgICAgdGhhdCByZW5kZXJzIHRoZSBjaGFydC5cbiAgICAqL1xuICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgIGlmICh0aGlzLl9sb2FkZWQpIHJldHVybjtcbiAgICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaW1wb3J0KCdkMycpLnRoZW4oKG1vZHVsZSkgPT4ge1xuICAgICAgICAgIHRoaXMuZDMgPSBtb2R1bGU7XG4gICAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuc2V0RHJhdykge1xuICAgICAgICAgICAgdGhpcy5kYXRhLnNldERyYXcodGhpcy5kcmF3KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZHJhdyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGQzIH0gPSB0aGlzO1xuICAgIGNvbnN0IHtcbiAgICAgIHdpZHRoLCBtYXJnaW4sIGhlaWdodCxcbiAgICAgIGl0ZW1zLCBjb2xvdXJzLCBjb250YWluZXJJZCxcbiAgICAgIGF4aXNcbiAgICB9ID0gdGhpcy5kYXRhO1xuXG4gICAgLy8gZGF0YSB2YWxpZGF0aW9uXG4gICAgY29uc3QgcmFuZ2VNb2RlID0gaXRlbXMuZXZlcnkoKGQpID0+IGQucmFuZ2UpO1xuICAgIGlmICghcmFuZ2VNb2RlICYmIGl0ZW1zLnNvbWUoKGQpID0+ICFkLnJhbmdlKSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ0FsbCBpdGVtcyBtdXN0IGhhdmUgdGhlIFwicmFuZ2VcIiBwcm9wZXJ0eScpO1xuICAgIH1cblxuICAgIC8vIEhlbHBlcnMgLSBTdGFydDpcbiAgICBjb25zdCBJVEVNdG9YID0gZDNcbiAgICAgIC5zY2FsZUJhbmQoKVxuICAgICAgLmRvbWFpbihpdGVtcy5tYXAoKGQpID0+IGQubGFiZWwpKVxuICAgICAgLnJhbmdlKFswLCB3aWR0aF0pXG4gICAgICAucGFkZGluZ0lubmVyKDAuMTcpXG4gICAgICAucGFkZGluZ091dGVyKDEpO1xuXG4gICAgY29uc3QgWHRvTEFCRUwgPSAodmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IGRvbWFpbiA9IElURU10b1guZG9tYWluKCk7XG4gICAgICBjb25zdCBwYWRkaW5nT3V0ZXIgPSBJVEVNdG9YKGRvbWFpblswXSk7XG4gICAgICBjb25zdCBlYWNoQmFuZCA9IElURU10b1guc3RlcCgpO1xuICAgICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKCgodmFsdWUgLSBwYWRkaW5nT3V0ZXIpIC8gZWFjaEJhbmQpKTtcbiAgICAgIHJldHVybiBkb21haW5bTWF0aC5tYXgoMCwgTWF0aC5taW4oaW5kZXgsIGRvbWFpbi5sZW5ndGggLSAxKSldO1xuICAgIH07XG5cbiAgICAvLyBZRUFSIFNFTEVDVElPTiBDSVJDTEVTXG4gICAgbGV0IHNsaWRlcnMgPSBkM1xuICAgICAgLmV4dGVudChpdGVtcywgKGQpID0+IGQubGFiZWwpXG4gICAgICAubWFwKChkKSA9PiAoeyB4OiBJVEVNdG9YKGQpICsgSVRFTXRvWC5iYW5kd2lkdGgoKSAvIDIsIHk6IGhlaWdodCB9KSk7XG5cbiAgICBmdW5jdGlvbiBpc0luUmFuZ2UoeSkge1xuICAgICAgY29uc3QgYWxsSXRlbXMgPSBzbGlkZXJzLm1hcCgoZCkgPT4gWHRvTEFCRUwoZC54KSk7XG4gICAgICBpZiAoeSA+PSBkMy5taW4oYWxsSXRlbXMpICYmIHkgPD0gZDMubWF4KGFsbEl0ZW1zKSkgcmV0dXJuIHRydWU7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29sb3VyQmFycyhkKSB7XG4gICAgICBpZiAoaXNJblJhbmdlKGQubGFiZWwpKSByZXR1cm4gJ3VybCgjZ3JhZGllbnQpJztcbiAgICAgIHJldHVybiAnI2UzZTNlMyc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRSYW5nZSgpIHtcbiAgICAgIGNvbnN0IHJhbmdlU3RhcnQgPSBpdGVtcy5maW5kKChpdCkgPT4gaXQubGFiZWwgPT09IFh0b0xBQkVMKHNsaWRlcnNbMF0ueCkpO1xuICAgICAgY29uc3QgcmFuZ2VFbmQgPSBpdGVtcy5maW5kKChpdCkgPT4gaXQubGFiZWwgPT09IFh0b0xBQkVMKHNsaWRlcnNbMV0ueCkpO1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgcmFuZ2VTdGFydC5wYXlsb2FkLFxuICAgICAgICByYW5nZU1vZGVcbiAgICAgICAgICA/IHJhbmdlRW5kLnJhbmdlLnBheWxvYWRcbiAgICAgICAgICA6IHJhbmdlRW5kLnBheWxvYWRcbiAgICAgIF07XG4gICAgfVxuICAgIC8vIEhlbHBlcnMgLSBFbmQuXG5cbiAgICBjb25zdCBzdmcgPSBkM1xuICAgICAgLnNlbGVjdChgIyR7Y29udGFpbmVySWR9YClcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXG4gICAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pO1xuXG4gICAgY29uc3Qgc2NhbGVIZWlnaHQgPSBkM1xuICAgICAgLnNjYWxlU3ltbG9nKCkgLy8gbW9zdCBzaW1pbGFyIHNjYWxlIHRvIHRoZSBvcmlnaW5hbFxuICAgICAgLmRvbWFpbihbMCwgZDMubWF4KGl0ZW1zLCAoZCkgPT4gZC52YWx1ZSldKVxuICAgICAgLnJhbmdlKFtoZWlnaHQsIDBdKTtcblxuICAgIC8vIEdSQURJRU5UXG4gICAgY29uc3QgZGVmcyA9IHN2Zy5hcHBlbmQoJ2RlZnMnKTsgLy8gZGVmaW5pdGlvbnNcbiAgICBjb25zdCBncmFkaWVudCA9IGRlZnNcbiAgICAgIC5hcHBlbmQoJ2xpbmVhckdyYWRpZW50JylcbiAgICAgIC5hdHRyKCdpZCcsICdncmFkaWVudCcpXG4gICAgICAuYXR0cignZ3JhZGllbnRVbml0cycsICd1c2VyU3BhY2VPblVzZScpXG4gICAgICAuYXR0cigneDEnLCAwKVxuICAgICAgLmF0dHIoJ3kxJywgaGVpZ2h0KVxuICAgICAgLmF0dHIoJ3gyJywgMClcbiAgICAgIC5hdHRyKCd5MicsIG1hcmdpbi50b3ApO1xuICAgIGdyYWRpZW50XG4gICAgICAuYXBwZW5kKCdzdG9wJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdzdGFydCcpXG4gICAgICAuYXR0cignb2Zmc2V0JywgJzAlJylcbiAgICAgIC5hdHRyKCdzdG9wLWNvbG9yJywgY29sb3Vycy5ib3R0b20pIC8vIGJvdHRvbSBncmFkaWVudFxuICAgICAgLmF0dHIoJ3N0b3Atb3BhY2l0eScsIDEpO1xuICAgIGdyYWRpZW50XG4gICAgICAuYXBwZW5kKCdzdG9wJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdlbmQnKVxuICAgICAgLmF0dHIoJ29mZnNldCcsICcxMDAlJylcbiAgICAgIC5hdHRyKCdzdG9wLWNvbG9yJywgY29sb3Vycy50b3ApIC8vIHRvcCBncmFkaWVudFxuICAgICAgLmF0dHIoJ3N0b3Atb3BhY2l0eScsIDEpO1xuXG4gICAgLy8gRFJBVyBJTlNJREUgTUFSR0lOU1xuICAgIGNvbnN0IGcgPSBzdmdcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2NoYXJ0JylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCR7bWFyZ2luLnRvcH0pYCk7XG5cbiAgICBjb25zdCBiYXJzTGF5ZXIgPSBnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2JhcnMnKTtcbiAgICBjb25zdCBjb250cm9sc0xheWVyID0gZy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdjb250cm9scycpO1xuXG4gICAgLy8gQkFSIENIQVJUXG4gICAgYmFyc0xheWVyIC8vIGJhcnNcbiAgICAgIC5zZWxlY3RBbGwoJ3JlY3QuYmFycycpXG4gICAgICAuZGF0YShpdGVtcylcbiAgICAgIC5qb2luKCdyZWN0JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdiYXJzJylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIElURU10b1guYmFuZHdpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIChkKSA9PiBoZWlnaHQgLSBzY2FsZUhlaWdodChkLnZhbHVlKSlcbiAgICAgIC5hdHRyKCd5JywgKGQpID0+IHNjYWxlSGVpZ2h0KGQudmFsdWUpKVxuICAgICAgLmF0dHIoJ3gnLCAoZCkgPT4gSVRFTXRvWChkLmxhYmVsKSlcbiAgICAgIC5hdHRyKCdkYXRhLXN0YXJ0JywgKGQpID0+IGQucGF5bG9hZCkgLy8gbWFrZSB0aGUgZGF0YSBlYXNpbHkgYWNjZXNzaWJsZVxuICAgICAgLmF0dHIoJ2RhdGEtZW5kJywgKGQpID0+IChkLnJhbmdlID8gZC5yYW5nZS5wYXlsb2FkIDogZC5wYXlsb2FkKSlcbiAgICAgIC5hdHRyKCdmaWxsJywgJ3VybCgjZ3JhZGllbnQpJyk7XG5cbiAgICBiYXJzTGF5ZXIgLy8gb3ZlcmxheVxuICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgICAuYXR0cignb3BhY2l0eScsIDApXG4gICAgICAub24oJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCB5ZWFyID0gWHRvTEFCRUwoZXZlbnQub2Zmc2V0WCAtIG1hcmdpbi5sZWZ0KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coeyB4OiBldmVudC54LCB5ZWFyIH0pO1xuICAgICAgICBkMy5zZWxlY3RBbGwoJ3JlY3QuYmFycycpLmF0dHIoJ2ZpbGwnLCAoZCkgPT4ge1xuICAgICAgICAgIGlmICh5ZWFyID09PSBkLmxhYmVsKSByZXR1cm4gJyNCMENDRjgnO1xuICAgICAgICAgIHJldHVybiBjb2xvdXJCYXJzKGQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAub24oJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICBkMy5zZWxlY3RBbGwoJ3JlY3QuYmFycycpLmF0dHIoJ2ZpbGwnLCAoZCkgPT4gY29sb3VyQmFycyhkKSk7XG4gICAgICB9KVxuICAgICAgLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gWHRvTEFCRUwoZXZlbnQub2Zmc2V0WCAtIG1hcmdpbi5sZWZ0KTtcbiAgICAgICAgY29uc3QgeEF4aXNWYWx1ZSA9IElURU10b1goaXRlbSkgKyBJVEVNdG9YLmJhbmR3aWR0aCgpIC8gMjtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB7XG4gICAgICAgICAgeDogeEF4aXNWYWx1ZSxcbiAgICAgICAgICB5OiBoZWlnaHRcbiAgICAgICAgfTtcbiAgICAgICAgc2xpZGVycyA9IFtcbiAgICAgICAgICAvLyBhdm9pZCBqb2luaW5nIHRoZSB0d28gb2JqZWN0cyFcbiAgICAgICAgICB7IC4uLm5ld1ZhbHVlIH0sXG4gICAgICAgICAgeyAuLi5uZXdWYWx1ZSB9XG4gICAgICAgIF07XG4gICAgICAgIHJhbmdlUGlja2VyXG4gICAgICAgICAgLmRhdGEoc2xpZGVycylcbiAgICAgICAgICAuc2VsZWN0KCdjaXJjbGUnKVxuICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZWFzZShkMy5lYXNlUXVhZE91dClcbiAgICAgICAgICAuZHVyYXRpb24oNTUwKVxuICAgICAgICAgIC5hdHRyKCdjeCcsIChkKSA9PiBkLngpO1xuICAgICAgICBjb250cm9sc0xheWVyXG4gICAgICAgICAgLnNlbGVjdCgncGF0aC5ibHVlbGluZScpXG4gICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5lYXNlKGQzLmVhc2VRdWFkT3V0KVxuICAgICAgICAgIC5kdXJhdGlvbig1NTApXG4gICAgICAgICAgLmF0dHIoJ2QnLCBkMy5saW5lKCkoc2xpZGVycy5tYXAoKGQpID0+IFtkLngsIGQueV0pKSk7XG4gICAgICAgIHJhbmdlUGlja2VyXG4gICAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5lYXNlKGQzLmVhc2VRdWFkT3V0KVxuICAgICAgICAgIC5kdXJhdGlvbig1NTApXG4gICAgICAgICAgLmF0dHIoJ3gnLCAoKSA9PiB4QXhpc1ZhbHVlKVxuICAgICAgICAgIC50ZXh0KCgpID0+IGl0ZW0pO1xuICAgICAgICBnLnNlbGVjdEFsbCgncmVjdC5iYXJzJykuYXR0cignZmlsbCcsIChkKSA9PiBjb2xvdXJCYXJzKGQpKTtcbiAgICAgICAgdGhpcy5lbWl0KCdyYW5nZXNlbGVjdGVkJywgZ2V0U2VsZWN0ZWRSYW5nZSgpKTtcbiAgICAgIH0pO1xuXG4gICAgY29udHJvbHNMYXllciAvLyBncmF5IGxpbmVcbiAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2dyYXlsaW5lJylcbiAgICAgIC5hdHRyKFxuICAgICAgICAnZCcsXG4gICAgICAgIGQzLmxpbmUoKShbXG4gICAgICAgICAgWzAsIGhlaWdodF0sXG4gICAgICAgICAgW3dpZHRoLCBoZWlnaHRdXG4gICAgICAgIF0pXG4gICAgICApXG4gICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgMilcbiAgICAgIC5hdHRyKCdvcGFjaXR5JywgMSlcbiAgICAgIC5hdHRyKCdzdHJva2UnLCAnI0MxQzVDNycpO1xuXG4gICAgY29udHJvbHNMYXllciAvLyBibHVlIGxpbmVcbiAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2JsdWVsaW5lJylcbiAgICAgIC5hdHRyKCdkJywgZDMubGluZSgpKHNsaWRlcnMubWFwKChkKSA9PiBbZC54LCBkLnldKSkpXG4gICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgMilcbiAgICAgIC5hdHRyKCdzdHJva2UnLCBjb2xvdXJzLmFjY2VudCk7XG5cbiAgICBjb25zdCByYW5nZVBpY2tlciA9IGNvbnRyb2xzTGF5ZXJcbiAgICAgIC5zZWxlY3RBbGwoJ2cucmFuZ2VwaWNrZXInKVxuICAgICAgLmRhdGEoc2xpZGVycy5zb3J0KChhLCBiKSA9PiBkMy5hc2NlbmRpbmcoYS54LCBiLngpKSlcbiAgICAgIC5qb2luKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdyYW5nZXBpY2tlcicpO1xuXG4gICAgLyoqXG4gICAgICogQW5pbWF0ZSB0aGUgZWxlbWVudHMgd2hpbGUgdGhlIHVzZXIgaXMgZHJhZ2dpbmcgb25lIG9mIHRoZSByYW5nZSBzZWxlY3RvcnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkcmFnZ2luZ1VwZGF0ZShldmVudCwgZGF0YSkge1xuICAgICAgY29uc3QgaXRlbSA9IFh0b0xBQkVMKGV2ZW50LngpO1xuICAgICAgY29uc3QgeEF4aXNWYWx1ZSA9IElURU10b1goaXRlbSkgKyBJVEVNdG9YLmJhbmR3aWR0aCgpIC8gMjtcbiAgICAgIGNvbnN0IHliID0gW107XG4gICAgICBnLnNlbGVjdEFsbCgnY2lyY2xlJykuZWFjaChmdW5jdGlvbiBzZXRCYWxsUG9zaXRpb24oKSB7XG4gICAgICAgIHliLnB1c2goeyB4OiArZDMuc2VsZWN0KHRoaXMpLmF0dHIoJ2N4JyksIHk6IGhlaWdodCB9KTtcbiAgICAgIH0pO1xuICAgICAgc2xpZGVycyA9IHliLnNvcnQoKGEsIGIpID0+IGQzLmFzY2VuZGluZyhhLngsIGIueCkpO1xuICAgICAgLy8gbW92ZSB0aGUgY2lyY2xlXG4gICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgLnNlbGVjdCgnY2lyY2xlJylcbiAgICAgICAgLmF0dHIoJ2N4JywgZGF0YS54ID0geEF4aXNWYWx1ZSk7XG4gICAgICAvLyBtb3ZlIHRoZSBibHVlIGxpbmVcbiAgICAgIGNvbnRyb2xzTGF5ZXJcbiAgICAgICAgLnNlbGVjdCgncGF0aC5ibHVlbGluZScpXG4gICAgICAgIC5hdHRyKCdkJywgZDMubGluZSgpKHNsaWRlcnMubWFwKChkKSA9PiBbZC54LCBkLnldKSkpO1xuICAgICAgLy8gY2hhbmdlIHRoZSB0ZXh0IHBvc2l0aW9uXG4gICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgLnNlbGVjdCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4JywgKCkgPT4geEF4aXNWYWx1ZSk7XG4gICAgICAvLyBjaGFuZ2UgdGhlIHRleHQgdmFsdWVzXG4gICAgICBjb250cm9sc0xheWVyXG4gICAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAudGV4dCgoZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGwgPSBYdG9MQUJFTChkLngpO1xuICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gc2xpZGVycy5maW5kSW5kZXgoKHNsaWRlcikgPT4gc2xpZGVyLnggPT09IGQueCk7XG4gICAgICAgICAgaWYgKHJhbmdlTW9kZSAmJiBwb3NpdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbmQoKGl0KSA9PiBpdC5sYWJlbCA9PT0gbCkucmFuZ2UubGFiZWw7XG4gICAgICAgICAgfSByZXR1cm4gbDtcbiAgICAgICAgfSk7XG4gICAgICAvLyBjb2xvdXIgdGhlIGJhcnNcbiAgICAgIGcuc2VsZWN0QWxsKCdyZWN0LmJhcnMnKS5hdHRyKCdmaWxsJywgKGQpID0+IGNvbG91ckJhcnMoZCkpO1xuICAgIH1cblxuICAgIHJhbmdlUGlja2VyIC8vIGRyYWcgaGFuZGxlclxuICAgICAgLmNhbGwoZDMuZHJhZygpXG4gICAgICAgIC5vbignZHJhZycsIGRyYWdnaW5nVXBkYXRlKVxuICAgICAgICAub24oJ2VuZCcsIChldmVudCwgZGF0YSkgPT4ge1xuICAgICAgICAgIC8vIHVwZGF0ZSBvbmUgbGFzdCB0aW1lIHRvIHByZXZlbnQgZGVzeW5jaW5nXG4gICAgICAgICAgZHJhZ2dpbmdVcGRhdGUoZXZlbnQsIGRhdGEpO1xuICAgICAgICAgIC8vIGVtaXQgdGhlIHNlbGVjdGVkIHJhbmdlXG4gICAgICAgICAgdGhpcy5lbWl0KCdyYW5nZXNlbGVjdGVkJywgZ2V0U2VsZWN0ZWRSYW5nZSgpKTtcbiAgICAgICAgfSkpO1xuXG4gICAgcmFuZ2VQaWNrZXJcbiAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAuYXR0cignY3gnLCAoZCkgPT4gZC54KVxuICAgICAgLmF0dHIoJ2N5JywgKGQpID0+IGQueSlcbiAgICAgIC5hdHRyKCdyJywgOSlcbiAgICAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJylcbiAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAyKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsIGNvbG91cnMuYWNjZW50KVxuICAgICAgLmF0dHIoJ3N0eWxlJywgJ2N1cnNvcjogcG9pbnRlcicpO1xuXG4gICAgcmFuZ2VQaWNrZXJcbiAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgLmF0dHIoJ2ZvbnQtZmFtaWx5JywgJ1JvYm90bywgQXJpYWwsIHNhbnMtc2VyaWYnKVxuICAgICAgLmF0dHIoJ2ZvbnQtc2l6ZScsICcxMnB4JylcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3knLCAoZCkgPT4gZC55ICsgbWFyZ2luLmJvdHRvbSAvIDIpXG4gICAgICAuYXR0cigneCcsIChkKSA9PiBkLngpXG4gICAgICAuYXR0cignZmlsbCcsIGNvbG91cnMuYWNjZW50KVxuICAgICAgLnRleHQoKGQsIGkpID0+IHtcbiAgICAgICAgY29uc3QgbCA9IFh0b0xBQkVMKGQueCk7XG4gICAgICAgIGlmIChyYW5nZU1vZGUgJiYgaSA9PT0gMSkge1xuICAgICAgICAgIHJldHVybiBpdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLmxhYmVsID09PSBsKS5yYW5nZS5sYWJlbDtcbiAgICAgICAgfSByZXR1cm4gbDtcbiAgICAgIH0pO1xuXG4gICAgaWYgKGF4aXM/LnlBeGlzPy5zaG93KSB7XG4gICAgICBjb25zdCB5QXhpcyA9IGQzLmF4aXNMZWZ0KHNjYWxlSGVpZ2h0KVxuICAgICAgICAudGlja3MoYXhpcy55QXhpcy50aWNrQW1vdW50ID8/IDIpXG4gICAgICAgIC50aWNrVmFsdWVzKGF4aXMueUF4aXMudmFsdWVzID8gYXhpcy55QXhpcy52YWx1ZXMgOiBudWxsKTtcbiAgICAgIGNvbnN0IHlBeGlzR3JvdXAgPSBzdmcuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sICR7bWFyZ2luLnRvcH0pYClcbiAgICAgICAgLmNhbGwoeUF4aXMpO1xuXG4gICAgICB5QXhpc0dyb3VwLnNlbGVjdEFsbCgncGF0aCwgbGluZScpLnN0eWxlKCdzdHJva2UnLCBjb2xvdXJzLmFjY2VudCk7XG4gICAgICB5QXhpc0dyb3VwLnNlbGVjdEFsbCgndGV4dCcpLnN0eWxlKCdmaWxsJywgY29sb3Vycy5hY2NlbnQpO1xuICAgIH1cbiAgfVxufVxuIl19