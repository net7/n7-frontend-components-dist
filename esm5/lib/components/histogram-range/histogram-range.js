/* eslint-disable @typescript-eslint/no-use-before-define */
//---------------------------
// HISTOGRAM-RANGE.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import dayjs from 'dayjs';
import objectSupport from 'dayjs/plugin/objectSupport';
var HistogramRangeComponent = /** @class */ (function () {
    function HistogramRangeComponent() {
        var _this = this;
        this._loaded = false;
        this.draw = function () {
            var d3 = _this.d3;
            var _a = _this.data, width = _a.width, margin = _a.margin, height = _a.height, years = _a.years, colours = _a.colours, containerId = _a.containerId, innerRange = _a.innerRange;
            if (innerRange) {
                var unit_1 = innerRange.unit, amount_1 = innerRange.amount;
                dayjs.extend(objectSupport);
                years.forEach(function (year) {
                    year.end = dayjs({ y: year.key })
                        .add(amount_1, unit_1)
                        .year();
                });
            }
            // Helpers - Start:
            var YEARtoX = d3
                .scaleBand()
                .domain(years.map(function (d) { return d.key; }))
                .range([0, width])
                .paddingInner(0.17)
                .paddingOuter(1);
            var XtoYEAR = function (value) {
                var domain = YEARtoX.domain();
                var paddingOuter = YEARtoX(domain[0]);
                var eachBand = YEARtoX.step();
                var index = Math.floor(((value - paddingOuter) / eachBand));
                return domain[Math.max(0, Math.min(index, domain.length - 1))];
            };
            var YEARtoRANGE = function (year) {
                var unit = innerRange.unit, amount = innerRange.amount;
                var start = dayjs({ y: year });
                var end = start.add(amount - 1, unit);
                return "" + start.format('YYYY') + end.format('/YY');
            };
            // YEAR SELECTION CIRCLES
            var yearBalls = d3
                .extent(years, function (d) { return d.key; })
                .map(function (d) { return ({ x: YEARtoX(d) + YEARtoX.bandwidth() / 2, y: height }); });
            function isInRange(y) {
                var allYears = yearBalls.map(function (d) { return XtoYEAR(d.x); });
                if (y >= d3.min(allYears) && y <= d3.max(allYears))
                    return true;
                return false;
            }
            function colourBars(d) {
                if (isInRange(d.key))
                    return 'url(#gradient)';
                return '#e3e3e3';
            }
            function getSelectedRange() {
                var range = d3.sort(yearBalls.map(function (d) { return XtoYEAR(d.x); }));
                if (!innerRange)
                    return range;
                var unit = innerRange.unit, amount = innerRange.amount;
                var end = dayjs({ y: range[1] }).add(amount - 1, unit).year();
                return [range[0], end];
            }
            // Helpers - End.
            var svg = d3
                .select("#" + containerId)
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom);
            var scaleHeight = d3
                .scaleSymlog() // most similar scale to the original
                .domain([0, d3.max(years, function (d) { return d.count; })])
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
                .data(years)
                .join('rect')
                .attr('class', 'bars')
                .attr('width', YEARtoX.bandwidth)
                .attr('height', function (d) { return height - scaleHeight(d.count); })
                .attr('y', function (d) { return scaleHeight(d.count); })
                .attr('x', function (d) { return YEARtoX(d.key); })
                .attr('fill', 'url(#gradient)');
            barsLayer // overlay
                .append('rect')
                .attr('width', width)
                .attr('height', height)
                .attr('opacity', 0)
                .on('mousemove', function (event) {
                var year = XtoYEAR(event.x);
                // console.log({ x: event.x, year });
                d3.selectAll('rect.bars').attr('fill', function (d) {
                    if (year === d.key)
                        return '#B0CCF8';
                    return colourBars(d);
                });
            })
                .on('mouseout', function () {
                d3.selectAll('rect.bars').attr('fill', function (d) { return colourBars(d); });
            })
                .on('click', function (event) {
                var year = XtoYEAR(event.x);
                var xAxisValue = YEARtoX(year) + YEARtoX.bandwidth() / 2;
                var newValue = {
                    x: xAxisValue,
                    y: height
                };
                yearBalls = [newValue, newValue];
                yearPicker
                    .data(yearBalls)
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
                    .attr('d', d3.line()(yearBalls.map(function (d) { return [d.x, d.y]; })));
                yearPicker
                    .selectAll('text')
                    .transition()
                    .ease(d3.easeQuadOut)
                    .duration(550)
                    .attr('x', function () { return xAxisValue; })
                    .text(function () {
                    var startYear = year;
                    if (innerRange)
                        return YEARtoRANGE(startYear);
                    return startYear;
                });
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
                .attr('d', d3.line()(yearBalls.map(function (d) { return [d.x, d.y]; })))
                .attr('stroke-width', 2)
                .attr('stroke', colours.accent);
            var yearPicker = controlsLayer
                .selectAll('g.yearpicker')
                .data(yearBalls)
                .join('g')
                .attr('class', 'yearpicker');
            /**
             * Animate the elements while the user is dragging one of the range selectors
             */
            function draggingUpdate(event, data) {
                var year = XtoYEAR(event.sourceEvent.x);
                var xAxisValue = YEARtoX(year) + YEARtoX.bandwidth() / 2;
                var yb = [];
                g.selectAll('circle').each(function setBallPosition() {
                    yb.push({ x: d3.select(this).attr('cx'), y: height });
                });
                yearBalls = yb;
                // move the circle
                d3.select(this)
                    .select('circle')
                    .attr('cx', data.x = xAxisValue);
                // move the blue line
                controlsLayer
                    .select('path.blueline')
                    .attr('d', d3.line()(yearBalls.map(function (d) { return [d.x, d.y]; })));
                // change the text
                d3.select(this)
                    .selectAll('text')
                    .attr('x', function () { return xAxisValue; })
                    .text(function () {
                    var startYear = year;
                    if (innerRange)
                        return YEARtoRANGE(startYear);
                    return startYear;
                });
                // colour the bars
                g.selectAll('rect.bars').attr('fill', function (d) { return colourBars(d); });
            }
            yearPicker // drag handler
                .call(d3.drag()
                .on('drag', draggingUpdate)
                .on('end', function (event, data) {
                // update one last time to prevent desyncing
                draggingUpdate(event, data);
                // emit the selected range
                _this.emit('rangeselected', getSelectedRange());
            }));
            yearPicker
                .append('circle')
                .attr('cx', function (d) { return d.x; })
                .attr('cy', function (d) { return d.y; })
                .attr('r', 9)
                .attr('fill', 'white')
                .attr('stroke-width', 2)
                .attr('stroke', colours.accent)
                .attr('style', 'cursor: pointer');
            yearPicker
                .attr('text-anchor', 'middle')
                .attr('font-family', 'Roboto, Arial, sans-serif')
                .attr('font-size', '12px')
                .append('text')
                .attr('y', function (d) { return d.y + margin.bottom / 2; })
                .attr('x', function (d) { return d.x; })
                .attr('fill', colours.accent)
                .text(function (d) {
                var startYear = XtoYEAR(d.x);
                if (innerRange)
                    return YEARtoRANGE(startYear);
                return startYear;
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9ncmFtLXJhbmdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oaXN0b2dyYW0tcmFuZ2UvaGlzdG9ncmFtLXJhbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDREQUE0RDtBQUM1RCw2QkFBNkI7QUFDN0IscUJBQXFCO0FBQ3JCLDZCQUE2Qjs7QUFFN0IsT0FBTyxFQUF1QixTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLGFBQWEsTUFBTSw0QkFBNEIsQ0FBQztBQThEdkQ7SUFBQTtRQUFBLGlCQXNTQztRQS9SUyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBc0J4QixTQUFJLEdBQUc7WUFDRyxJQUFBLGFBQUUsQ0FBVTtZQUNkLElBQUEsZUFJTyxFQUhYLGdCQUFLLEVBQUUsa0JBQU0sRUFBRSxrQkFBTSxFQUNyQixnQkFBSyxFQUFFLG9CQUFPLEVBQUUsNEJBQVcsRUFDM0IsMEJBQ1csQ0FBQztZQUVkLElBQUksVUFBVSxFQUFFO2dCQUNOLElBQUEsd0JBQUksRUFBRSw0QkFBTSxDQUFnQjtnQkFDcEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDNUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7b0JBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQVMsQ0FBQzt5QkFDckMsR0FBRyxDQUFDLFFBQU0sRUFBRSxNQUFJLENBQUM7eUJBQ2pCLElBQUksRUFBRSxDQUFDO2dCQUNaLENBQUMsQ0FBQyxDQUFDO2FBQ0o7WUFFRCxtQkFBbUI7WUFDbkIsSUFBTSxPQUFPLEdBQUcsRUFBRTtpQkFDZixTQUFTLEVBQUU7aUJBQ1gsTUFBTSxDQUFDLEtBQUssQ0FB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QUM7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQTFCUTtRQUFSLEtBQUssRUFBRTs7eURBQTBCO0lBRXpCO1FBQVIsS0FBSyxFQUFFOzt5REFBVztJQUhSLHVCQUF1QjtRQUpuQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLHdJQUFxQztTQUN0QyxDQUFDO09BQ1csdUJBQXVCLENBc1NuQztJQUFELDhCQUFDO0NBQUEsQUF0U0QsSUFzU0M7U0F0U1ksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lICovXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEhJU1RPR1JBTS1SQU5HRS50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgb2JqZWN0U3VwcG9ydCBmcm9tICdkYXlqcy9wbHVnaW4vb2JqZWN0U3VwcG9ydCc7XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEhpc3RvZ3JhbVJhbmdlQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGlzdG9ncmFtUmFuZ2VEYXRhIHtcclxuICAvKipcclxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGhpc3RvZ3JhbS1yYW5nZSBzdmdcclxuICAgKi9cclxuICBjb250YWluZXJJZDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHRvdGFsIHdpZHRoIGZvciB0aGUgc3ZnIGVsZW1lbnRcclxuICAgKi9cclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIHRvdGFsIGhlaWdodCBmb3IgdGhlIHN2ZyBlbGVtZW50XHJcbiAgICovXHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogSW50ZXJuYWwgbWFyZ2lucyBvZiB0aGUgc3ZnXHJcbiAgICovXHJcbiAgbWFyZ2luOiB7XHJcbiAgICBsZWZ0OiBudW1iZXI7XHJcbiAgICByaWdodDogbnVtYmVyO1xyXG4gICAgdG9wOiBudW1iZXI7XHJcbiAgICBib3R0b206IG51bWJlcjtcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIEhvdyBtdWNoIHRpbWUgZG9lcyBlYWNoIGJhciByZXByZXNlbnQ/XHJcbiAgICovXHJcbiAgaW5uZXJSYW5nZT86IHtcclxuICAgIHVuaXQ6ICdkYXknIHwgJ3dlZWsnIHwgJ21vbnRoJyB8ICdxdWFydGVyJyB8ICd5ZWFyJ1xyXG4gICAgfCAnaG91cicgfCAnbWludXRlJyB8ICdzZWNvbmQnIHwgJ21pbGxpc2Vjb25kJ1xyXG4gICAgfCAnZCcgfCAndycgfCAnTScgfCAnUScgfCAneScgfCAnaCcgfCAnbScgfCAncycgfCAnc3MnO1xyXG4gICAgYW1vdW50OiBudW1iZXI7XHJcbiAgfTtcclxuICAvKipcclxuICAgKiBUaGVtZSBvZiB0aGUgaGlzdG9ncmFtXHJcbiAgICovXHJcbiAgY29sb3Vyczoge1xyXG4gICAgdG9wOiBzdHJpbmc7XHJcbiAgICBib3R0b206IHN0cmluZztcclxuICAgIGFjY2VudDogc3RyaW5nO1xyXG4gIH07XHJcbiAgLyoqXHJcbiAgICogRGF0YSBmb3IgdGhlIGhpc3RvZ3JhbSBiYXJzXHJcbiAgICovXHJcbiAgeWVhcnM6IHtcclxuICAgIGtleTogbnVtYmVyIHwgc3RyaW5nO1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxuICAgIGVuZD86IG51bWJlcjtcclxuICB9W107XHJcbiAgLyoqXHJcbiAgICogZXhwb3NlIHRoZSBkcmF3IGZ1bmN0aW9uIG91dHNpZGUgb2YgbjctZnJvbnRlbmQvY29tcG9uZW50cyBsaWJyYXJ5XHJcbiAgICogdGhpcyBpcyBuZWVkZWQgdG8gcmVkcmF3IGJ1YmJsZS1jaGFydC1jb21wb25lbnQgb24gY29tbWFuZFxyXG4gICAqL1xyXG4gIHNldERyYXc/OiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctaGlzdG9ncmFtLXJhbmdlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaGlzdG9ncmFtLXJhbmdlLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIaXN0b2dyYW1SYW5nZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IEhpc3RvZ3JhbVJhbmdlRGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBwcml2YXRlIGQzO1xyXG5cclxuICBwcml2YXRlIF9sb2FkZWQgPSBmYWxzZTtcclxuXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xyXG4gICAgLypcclxuICAgICBXYWl0cyBmb3IgdGhlIGRvbSB0byBiZSBsb2FkZWQsIHRoZW4gZmlyZXMgdGhlIGRyYXcgZnVuY3Rpb25cclxuICAgICB0aGF0IHJlbmRlcnMgdGhlIGNoYXJ0LlxyXG4gICAgKi9cclxuICAgIGlmICh0aGlzLmRhdGEpIHtcclxuICAgICAgaWYgKHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xyXG4gICAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpbXBvcnQoJ2QzJykudGhlbigobW9kdWxlKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmQzID0gbW9kdWxlO1xyXG4gICAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICAgICAgICBpZiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5zZXREcmF3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zZXREcmF3KHRoaXMuZHJhdyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhdyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZDMgfSA9IHRoaXM7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHdpZHRoLCBtYXJnaW4sIGhlaWdodCxcclxuICAgICAgeWVhcnMsIGNvbG91cnMsIGNvbnRhaW5lcklkLFxyXG4gICAgICBpbm5lclJhbmdlXHJcbiAgICB9ID0gdGhpcy5kYXRhO1xyXG5cclxuICAgIGlmIChpbm5lclJhbmdlKSB7XHJcbiAgICAgIGNvbnN0IHsgdW5pdCwgYW1vdW50IH0gPSBpbm5lclJhbmdlO1xyXG4gICAgICBkYXlqcy5leHRlbmQob2JqZWN0U3VwcG9ydCk7XHJcbiAgICAgIHllYXJzLmZvckVhY2goKHllYXIpID0+IHtcclxuICAgICAgICB5ZWFyLmVuZCA9IGRheWpzKHsgeTogeWVhci5rZXkgfSBhcyBhbnkpXHJcbiAgICAgICAgICAuYWRkKGFtb3VudCwgdW5pdClcclxuICAgICAgICAgIC55ZWFyKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhlbHBlcnMgLSBTdGFydDpcclxuICAgIGNvbnN0IFlFQVJ0b1ggPSBkM1xyXG4gICAgICAuc2NhbGVCYW5kKClcclxuICAgICAgLmRvbWFpbih5ZWFycy5tYXAoKGQpID0+IGQua2V5KSlcclxuICAgICAgLnJhbmdlKFswLCB3aWR0aF0pXHJcbiAgICAgIC5wYWRkaW5nSW5uZXIoMC4xNylcclxuICAgICAgLnBhZGRpbmdPdXRlcigxKTtcclxuXHJcbiAgICBjb25zdCBYdG9ZRUFSID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRvbWFpbiA9IFlFQVJ0b1guZG9tYWluKCk7XHJcbiAgICAgIGNvbnN0IHBhZGRpbmdPdXRlciA9IFlFQVJ0b1goZG9tYWluWzBdKTtcclxuICAgICAgY29uc3QgZWFjaEJhbmQgPSBZRUFSdG9YLnN0ZXAoKTtcclxuICAgICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKCgodmFsdWUgLSBwYWRkaW5nT3V0ZXIpIC8gZWFjaEJhbmQpKTtcclxuICAgICAgcmV0dXJuIGRvbWFpbltNYXRoLm1heCgwLCBNYXRoLm1pbihpbmRleCwgZG9tYWluLmxlbmd0aCAtIDEpKV07XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IFlFQVJ0b1JBTkdFID0gKHllYXIpOiBzdHJpbmcgPT4ge1xyXG4gICAgICBjb25zdCB7IHVuaXQsIGFtb3VudCB9ID0gaW5uZXJSYW5nZTtcclxuICAgICAgY29uc3Qgc3RhcnQgPSBkYXlqcyh7IHk6IHllYXIgfSBhcyBhbnkpO1xyXG4gICAgICBjb25zdCBlbmQgPSBzdGFydC5hZGQoYW1vdW50IC0gMSwgdW5pdCk7XHJcbiAgICAgIHJldHVybiBgJHtzdGFydC5mb3JtYXQoJ1lZWVknKX0ke2VuZC5mb3JtYXQoJy9ZWScpfWA7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFlFQVIgU0VMRUNUSU9OIENJUkNMRVNcclxuICAgIGxldCB5ZWFyQmFsbHMgPSBkM1xyXG4gICAgICAuZXh0ZW50KHllYXJzLCAoZCkgPT4gZC5rZXkpXHJcbiAgICAgIC5tYXAoKGQpID0+ICh7IHg6IFlFQVJ0b1goZCkgKyBZRUFSdG9YLmJhbmR3aWR0aCgpIC8gMiwgeTogaGVpZ2h0IH0pKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpc0luUmFuZ2UoeSkge1xyXG4gICAgICBjb25zdCBhbGxZZWFycyA9IHllYXJCYWxscy5tYXAoKGQpID0+IFh0b1lFQVIoZC54KSk7XHJcbiAgICAgIGlmICh5ID49IGQzLm1pbihhbGxZZWFycykgJiYgeSA8PSBkMy5tYXgoYWxsWWVhcnMpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbG91ckJhcnMoZCkge1xyXG4gICAgICBpZiAoaXNJblJhbmdlKGQua2V5KSkgcmV0dXJuICd1cmwoI2dyYWRpZW50KSc7XHJcbiAgICAgIHJldHVybiAnI2UzZTNlMyc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRSYW5nZSgpIHtcclxuICAgICAgY29uc3QgcmFuZ2UgPSBkMy5zb3J0KHllYXJCYWxscy5tYXAoKGQpID0+IFh0b1lFQVIoZC54KSkpO1xyXG4gICAgICBpZiAoIWlubmVyUmFuZ2UpIHJldHVybiByYW5nZTtcclxuICAgICAgY29uc3QgeyB1bml0LCBhbW91bnQgfSA9IGlubmVyUmFuZ2U7XHJcbiAgICAgIGNvbnN0IGVuZCA9IGRheWpzKHsgeTogcmFuZ2VbMV0gfSBhcyBhbnkpLmFkZChhbW91bnQgLSAxLCB1bml0KS55ZWFyKCk7XHJcbiAgICAgIHJldHVybiBbcmFuZ2VbMF0sIGVuZF07XHJcbiAgICB9XHJcbiAgICAvLyBIZWxwZXJzIC0gRW5kLlxyXG5cclxuICAgIGNvbnN0IHN2ZyA9IGQzXHJcbiAgICAgIC5zZWxlY3QoYCMke2NvbnRhaW5lcklkfWApXHJcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXHJcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSk7XHJcblxyXG4gICAgY29uc3Qgc2NhbGVIZWlnaHQgPSBkM1xyXG4gICAgICAuc2NhbGVTeW1sb2coKSAvLyBtb3N0IHNpbWlsYXIgc2NhbGUgdG8gdGhlIG9yaWdpbmFsXHJcbiAgICAgIC5kb21haW4oWzAsIGQzLm1heCh5ZWFycywgKGQpID0+IGQuY291bnQpXSlcclxuICAgICAgLnJhbmdlKFtoZWlnaHQsIDBdKTtcclxuXHJcbiAgICAvLyBHUkFESUVOVFxyXG4gICAgY29uc3QgZGVmcyA9IHN2Zy5hcHBlbmQoJ2RlZnMnKTsgLy8gZGVmaW5pdGlvbnNcclxuICAgIGNvbnN0IGdyYWRpZW50ID0gZGVmc1xyXG4gICAgICAuYXBwZW5kKCdsaW5lYXJHcmFkaWVudCcpXHJcbiAgICAgIC5hdHRyKCdpZCcsICdncmFkaWVudCcpXHJcbiAgICAgIC5hdHRyKCdncmFkaWVudFVuaXRzJywgJ3VzZXJTcGFjZU9uVXNlJylcclxuICAgICAgLmF0dHIoJ3gxJywgMClcclxuICAgICAgLmF0dHIoJ3kxJywgaGVpZ2h0KVxyXG4gICAgICAuYXR0cigneDInLCAwKVxyXG4gICAgICAuYXR0cigneTInLCBtYXJnaW4udG9wKTtcclxuICAgIGdyYWRpZW50XHJcbiAgICAgIC5hcHBlbmQoJ3N0b3AnKVxyXG4gICAgICAuYXR0cignY2xhc3MnLCAnc3RhcnQnKVxyXG4gICAgICAuYXR0cignb2Zmc2V0JywgJzAlJylcclxuICAgICAgLmF0dHIoJ3N0b3AtY29sb3InLCBjb2xvdXJzLmJvdHRvbSkgLy8gYm90dG9tIGdyYWRpZW50XHJcbiAgICAgIC5hdHRyKCdzdG9wLW9wYWNpdHknLCAxKTtcclxuICAgIGdyYWRpZW50XHJcbiAgICAgIC5hcHBlbmQoJ3N0b3AnKVxyXG4gICAgICAuYXR0cignY2xhc3MnLCAnZW5kJylcclxuICAgICAgLmF0dHIoJ29mZnNldCcsICcxMDAlJylcclxuICAgICAgLmF0dHIoJ3N0b3AtY29sb3InLCBjb2xvdXJzLnRvcCkgLy8gdG9wIGdyYWRpZW50XHJcbiAgICAgIC5hdHRyKCdzdG9wLW9wYWNpdHknLCAxKTtcclxuXHJcbiAgICAvLyBEUkFXIElOU0lERSBNQVJHSU5TXHJcbiAgICBjb25zdCBnID0gc3ZnXHJcbiAgICAgIC5hcHBlbmQoJ2cnKVxyXG4gICAgICAuYXR0cignY2xhc3MnLCAnY2hhcnQnKVxyXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke21hcmdpbi50b3B9KWApO1xyXG5cclxuICAgIGNvbnN0IGJhcnNMYXllciA9IGcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnYmFycycpO1xyXG4gICAgY29uc3QgY29udHJvbHNMYXllciA9IGcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnY29udHJvbHMnKTtcclxuXHJcbiAgICAvLyBCQVIgQ0hBUlRcclxuICAgIGJhcnNMYXllciAvLyBiYXJzXHJcbiAgICAgIC5zZWxlY3RBbGwoJ3JlY3QuYmFycycpXHJcbiAgICAgIC5kYXRhKHllYXJzKVxyXG4gICAgICAuam9pbigncmVjdCcpXHJcbiAgICAgIC5hdHRyKCdjbGFzcycsICdiYXJzJylcclxuICAgICAgLmF0dHIoJ3dpZHRoJywgWUVBUnRvWC5iYW5kd2lkdGgpXHJcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCAoZCkgPT4gaGVpZ2h0IC0gc2NhbGVIZWlnaHQoZC5jb3VudCkpXHJcbiAgICAgIC5hdHRyKCd5JywgKGQpID0+IHNjYWxlSGVpZ2h0KGQuY291bnQpKVxyXG4gICAgICAuYXR0cigneCcsIChkKSA9PiBZRUFSdG9YKGQua2V5KSlcclxuICAgICAgLmF0dHIoJ2ZpbGwnLCAndXJsKCNncmFkaWVudCknKTtcclxuXHJcbiAgICBiYXJzTGF5ZXIgLy8gb3ZlcmxheVxyXG4gICAgICAuYXBwZW5kKCdyZWN0JylcclxuICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXHJcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXHJcbiAgICAgIC5hdHRyKCdvcGFjaXR5JywgMClcclxuICAgICAgLm9uKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB5ZWFyID0gWHRvWUVBUihldmVudC54KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh7IHg6IGV2ZW50LngsIHllYXIgfSk7XHJcbiAgICAgICAgZDMuc2VsZWN0QWxsKCdyZWN0LmJhcnMnKS5hdHRyKCdmaWxsJywgKGQpID0+IHtcclxuICAgICAgICAgIGlmICh5ZWFyID09PSBkLmtleSkgcmV0dXJuICcjQjBDQ0Y4JztcclxuICAgICAgICAgIHJldHVybiBjb2xvdXJCYXJzKGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oJ21vdXNlb3V0JywgKCkgPT4ge1xyXG4gICAgICAgIGQzLnNlbGVjdEFsbCgncmVjdC5iYXJzJykuYXR0cignZmlsbCcsIChkKSA9PiBjb2xvdXJCYXJzKGQpKTtcclxuICAgICAgfSlcclxuICAgICAgLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHllYXIgPSBYdG9ZRUFSKGV2ZW50LngpO1xyXG4gICAgICAgIGNvbnN0IHhBeGlzVmFsdWUgPSBZRUFSdG9YKHllYXIpICsgWUVBUnRvWC5iYW5kd2lkdGgoKSAvIDI7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB7XHJcbiAgICAgICAgICB4OiB4QXhpc1ZhbHVlLFxyXG4gICAgICAgICAgeTogaGVpZ2h0XHJcbiAgICAgICAgfTtcclxuICAgICAgICB5ZWFyQmFsbHMgPSBbbmV3VmFsdWUsIG5ld1ZhbHVlXTtcclxuICAgICAgICB5ZWFyUGlja2VyXHJcbiAgICAgICAgICAuZGF0YSh5ZWFyQmFsbHMpXHJcbiAgICAgICAgICAuc2VsZWN0KCdjaXJjbGUnKVxyXG4gICAgICAgICAgLnRyYW5zaXRpb24oKVxyXG4gICAgICAgICAgLmVhc2UoZDMuZWFzZVF1YWRPdXQpXHJcbiAgICAgICAgICAuZHVyYXRpb24oNTUwKVxyXG4gICAgICAgICAgLmF0dHIoJ2N4JywgKGQpID0+IGQueCk7XHJcbiAgICAgICAgY29udHJvbHNMYXllclxyXG4gICAgICAgICAgLnNlbGVjdCgncGF0aC5ibHVlbGluZScpXHJcbiAgICAgICAgICAudHJhbnNpdGlvbigpXHJcbiAgICAgICAgICAuZWFzZShkMy5lYXNlUXVhZE91dClcclxuICAgICAgICAgIC5kdXJhdGlvbig1NTApXHJcbiAgICAgICAgICAuYXR0cignZCcsIGQzLmxpbmUoKSh5ZWFyQmFsbHMubWFwKChkKSA9PiBbZC54LCBkLnldKSkpO1xyXG4gICAgICAgIHllYXJQaWNrZXJcclxuICAgICAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxyXG4gICAgICAgICAgLnRyYW5zaXRpb24oKVxyXG4gICAgICAgICAgLmVhc2UoZDMuZWFzZVF1YWRPdXQpXHJcbiAgICAgICAgICAuZHVyYXRpb24oNTUwKVxyXG4gICAgICAgICAgLmF0dHIoJ3gnLCAoKSA9PiB4QXhpc1ZhbHVlKVxyXG4gICAgICAgICAgLnRleHQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFllYXIgPSB5ZWFyO1xyXG4gICAgICAgICAgICBpZiAoaW5uZXJSYW5nZSkgcmV0dXJuIFlFQVJ0b1JBTkdFKHN0YXJ0WWVhcik7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGFydFllYXI7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBnLnNlbGVjdEFsbCgncmVjdC5iYXJzJykuYXR0cignZmlsbCcsIChkKSA9PiBjb2xvdXJCYXJzKGQpKTtcclxuICAgICAgICB0aGlzLmVtaXQoJ3Jhbmdlc2VsZWN0ZWQnLCBnZXRTZWxlY3RlZFJhbmdlKCkpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBjb250cm9sc0xheWVyIC8vIGdyYXkgbGluZVxyXG4gICAgICAuYXBwZW5kKCdwYXRoJylcclxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2dyYXlsaW5lJylcclxuICAgICAgLmF0dHIoXHJcbiAgICAgICAgJ2QnLFxyXG4gICAgICAgIGQzLmxpbmUoKShbXHJcbiAgICAgICAgICBbMCwgaGVpZ2h0XSxcclxuICAgICAgICAgIFt3aWR0aCwgaGVpZ2h0XVxyXG4gICAgICAgIF0pXHJcbiAgICAgIClcclxuICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIDIpXHJcbiAgICAgIC5hdHRyKCdvcGFjaXR5JywgMSlcclxuICAgICAgLmF0dHIoJ3N0cm9rZScsICcjQzFDNUM3Jyk7XHJcblxyXG4gICAgY29udHJvbHNMYXllciAvLyBibHVlIGxpbmVcclxuICAgICAgLmFwcGVuZCgncGF0aCcpXHJcbiAgICAgIC5hdHRyKCdjbGFzcycsICdibHVlbGluZScpXHJcbiAgICAgIC5hdHRyKCdkJywgZDMubGluZSgpKHllYXJCYWxscy5tYXAoKGQpID0+IFtkLngsIGQueV0pKSlcclxuICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIDIpXHJcbiAgICAgIC5hdHRyKCdzdHJva2UnLCBjb2xvdXJzLmFjY2VudCk7XHJcblxyXG4gICAgY29uc3QgeWVhclBpY2tlciA9IGNvbnRyb2xzTGF5ZXJcclxuICAgICAgLnNlbGVjdEFsbCgnZy55ZWFycGlja2VyJylcclxuICAgICAgLmRhdGEoeWVhckJhbGxzKVxyXG4gICAgICAuam9pbignZycpXHJcbiAgICAgIC5hdHRyKCdjbGFzcycsICd5ZWFycGlja2VyJyk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbmltYXRlIHRoZSBlbGVtZW50cyB3aGlsZSB0aGUgdXNlciBpcyBkcmFnZ2luZyBvbmUgb2YgdGhlIHJhbmdlIHNlbGVjdG9yc1xyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBkcmFnZ2luZ1VwZGF0ZShldmVudCwgZGF0YSkge1xyXG4gICAgICBjb25zdCB5ZWFyID0gWHRvWUVBUihldmVudC5zb3VyY2VFdmVudC54KTtcclxuICAgICAgY29uc3QgeEF4aXNWYWx1ZSA9IFlFQVJ0b1goeWVhcikgKyBZRUFSdG9YLmJhbmR3aWR0aCgpIC8gMjtcclxuICAgICAgY29uc3QgeWIgPSBbXTtcclxuICAgICAgZy5zZWxlY3RBbGwoJ2NpcmNsZScpLmVhY2goZnVuY3Rpb24gc2V0QmFsbFBvc2l0aW9uKCkge1xyXG4gICAgICAgIHliLnB1c2goeyB4OiBkMy5zZWxlY3QodGhpcykuYXR0cignY3gnKSwgeTogaGVpZ2h0IH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgeWVhckJhbGxzID0geWI7XHJcbiAgICAgIC8vIG1vdmUgdGhlIGNpcmNsZVxyXG4gICAgICBkMy5zZWxlY3QodGhpcylcclxuICAgICAgICAuc2VsZWN0KCdjaXJjbGUnKVxyXG4gICAgICAgIC5hdHRyKCdjeCcsIGRhdGEueCA9IHhBeGlzVmFsdWUpO1xyXG4gICAgICAvLyBtb3ZlIHRoZSBibHVlIGxpbmVcclxuICAgICAgY29udHJvbHNMYXllclxyXG4gICAgICAgIC5zZWxlY3QoJ3BhdGguYmx1ZWxpbmUnKVxyXG4gICAgICAgIC5hdHRyKCdkJywgZDMubGluZSgpKHllYXJCYWxscy5tYXAoKGQpID0+IFtkLngsIGQueV0pKSk7XHJcbiAgICAgIC8vIGNoYW5nZSB0aGUgdGV4dFxyXG4gICAgICBkMy5zZWxlY3QodGhpcylcclxuICAgICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcclxuICAgICAgICAuYXR0cigneCcsICgpID0+IHhBeGlzVmFsdWUpXHJcbiAgICAgICAgLnRleHQoKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgc3RhcnRZZWFyID0geWVhcjtcclxuICAgICAgICAgIGlmIChpbm5lclJhbmdlKSByZXR1cm4gWUVBUnRvUkFOR0Uoc3RhcnRZZWFyKTtcclxuICAgICAgICAgIHJldHVybiBzdGFydFllYXI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIGNvbG91ciB0aGUgYmFyc1xyXG4gICAgICBnLnNlbGVjdEFsbCgncmVjdC5iYXJzJykuYXR0cignZmlsbCcsIChkKSA9PiBjb2xvdXJCYXJzKGQpKTtcclxuICAgIH1cclxuXHJcbiAgICB5ZWFyUGlja2VyIC8vIGRyYWcgaGFuZGxlclxyXG4gICAgICAuY2FsbChkMy5kcmFnKClcclxuICAgICAgICAub24oJ2RyYWcnLCBkcmFnZ2luZ1VwZGF0ZSlcclxuICAgICAgICAub24oJ2VuZCcsIChldmVudCwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgLy8gdXBkYXRlIG9uZSBsYXN0IHRpbWUgdG8gcHJldmVudCBkZXN5bmNpbmdcclxuICAgICAgICAgIGRyYWdnaW5nVXBkYXRlKGV2ZW50LCBkYXRhKTtcclxuICAgICAgICAgIC8vIGVtaXQgdGhlIHNlbGVjdGVkIHJhbmdlXHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ3Jhbmdlc2VsZWN0ZWQnLCBnZXRTZWxlY3RlZFJhbmdlKCkpO1xyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICB5ZWFyUGlja2VyXHJcbiAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXHJcbiAgICAgIC5hdHRyKCdjeCcsIChkKSA9PiBkLngpXHJcbiAgICAgIC5hdHRyKCdjeScsIChkKSA9PiBkLnkpXHJcbiAgICAgIC5hdHRyKCdyJywgOSlcclxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxyXG4gICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgMilcclxuICAgICAgLmF0dHIoJ3N0cm9rZScsIGNvbG91cnMuYWNjZW50KVxyXG4gICAgICAuYXR0cignc3R5bGUnLCAnY3Vyc29yOiBwb2ludGVyJyk7XHJcblxyXG4gICAgeWVhclBpY2tlclxyXG4gICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnbWlkZGxlJylcclxuICAgICAgLmF0dHIoJ2ZvbnQtZmFtaWx5JywgJ1JvYm90bywgQXJpYWwsIHNhbnMtc2VyaWYnKVxyXG4gICAgICAuYXR0cignZm9udC1zaXplJywgJzEycHgnKVxyXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcclxuICAgICAgLmF0dHIoJ3knLCAoZCkgPT4gZC55ICsgbWFyZ2luLmJvdHRvbSAvIDIpXHJcbiAgICAgIC5hdHRyKCd4JywgKGQpID0+IGQueClcclxuICAgICAgLmF0dHIoJ2ZpbGwnLCBjb2xvdXJzLmFjY2VudClcclxuICAgICAgLnRleHQoKGQpID0+IHtcclxuICAgICAgICBjb25zdCBzdGFydFllYXIgPSBYdG9ZRUFSKGQueCk7XHJcbiAgICAgICAgaWYgKGlubmVyUmFuZ2UpIHJldHVybiBZRUFSdG9SQU5HRShzdGFydFllYXIpO1xyXG4gICAgICAgIHJldHVybiBzdGFydFllYXI7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=