import { __decorate, __metadata } from "tslib";
//---------------------------
// BUBBLECHART.ts
//---------------------------
import { Component, Input } from '@angular/core';
var BubbleChartComponent = /** @class */ (function () {
    function BubbleChartComponent() {
        var _this = this;
        this._loaded = false;
        this.draw = function () {
            var d3 = _this.d3;
            var _a = _this.data, containerId = _a.containerId, data = _a.data, height = _a.height, width = _a.width, selected = _a.selected, transition = _a.transition, colorMatch = _a.colorMatch, shuffle = _a.shuffle, fontRendering = _a.fontRendering;
            var closeIconPath = 'M -50,40 L-40,50 0,10 40,50 50,40 10,0 50,-40 40,-50 0,-10 -40,-50 -50,-40 -10,0 -50,40';
            if (!Array.isArray(data)) {
                // Check if it is possible to draw with the current dataset
                console.warn('(n7-bubble-chart) The data object is not in the expected format!');
                return;
            }
            var t = d3
                .transition()
                .duration(0);
            if (typeof transition === 'number') {
                t = d3
                    .transition()
                    .duration(transition)
                    .ease(d3.easeCubicInOut);
            }
            var colorMap = d3.scaleOrdinal()
                .domain(colorMatch ? colorMatch.domain : ['persona', 'luogo', 'organizzazione', 'cosa notevole'])
                .range(colorMatch ? colorMatch.range : d3.schemeTableau10);
            var sizeScale = d3 // map entity count to bubble size
                .scaleLinear()
                .domain([0, d3.max(data, function (d) { return +d.count; })])
                .range([3, d3.max(data, function (d) { return +d.count; })]);
            var pack = function (children) { return d3
                .pack()
                .size([width - 2, height - 2])
                .padding(1.5)(d3.hierarchy({ children: children }).sum(function (d) { return sizeScale(d.count); })); };
            var root = function () {
                if (typeof shuffle === 'undefined' || shuffle) {
                    var shuffData = data.slice(); // do not modify the source data!
                    return pack(d3.shuffle(shuffData));
                } // if shuffle is set to false, skip the data shuffle
                return pack(data);
            };
            var svg = d3
                .select("#" + containerId)
                .attr('viewBox', [0, 0, width, height])
                .attr('font-family', 'Verdana, Geneva, sans-serif')
                .attr('text-anchor', 'middle');
            var leaf = svg.selectAll('g').data(root().leaves(), function (d) { return d.data.entity.id; });
            leaf
                .transition(t) // update transition on <g>
                .attr('fill-opacity', 1)
                .attr('transform', function (d) { return "translate(" + (d.x + 1) + "," + (d.y + 1) + ")"; })
                .attr('font-size', function (d) {
                var size = d.r / 5.5;
                size *= 1;
                size += 1;
                return Math.round(size) + "px";
            });
            leaf.selectAll('.close-icon').remove(); // clear all existing close icons
            if (selected) {
                leaf // render necessary close icons
                    .filter(function (d) { return selected.includes(d.data.entity.id); })
                    .append('path')
                    .attr('class', 'close-icon')
                    .attr('d', closeIconPath)
                    .attr('fill', '#fff')
                    .attr('transform', function (d) {
                    if (d.r / 4 > 3) {
                        return "scale(.08) translate(0, " + (d.r * 10 - 80) + ")";
                    }
                    return 'scale(.08)';
                });
            }
            leaf
                .select('circle')
                .transition(t) // update transition on <circle>
                .attr('fill-opacity', 1)
                .attr('r', function (d) { return d.r; });
            leaf
                .select('text')
                .attr('font-family', function () {
                if (fontRendering && fontRendering.label && fontRendering.label.family) {
                    return fontRendering.label.family;
                }
                return 'inherit';
            })
                .attr('font-weight', function () {
                if (fontRendering && fontRendering.label && fontRendering.label.weight) {
                    return fontRendering.label.weight;
                }
                return 'inherit';
            })
                .selectAll('tspan')
                .data(function (d) {
                if (d.r / 4 > 4.5) {
                    // show text and number threshhold
                    var label = (d.data.entity.label.charAt(0).toUpperCase()
                        + d.data.entity.label.slice(1)).split(/ +/g);
                    if (label.length > 3) {
                        label = label.slice(0, 3);
                        label[2] += '…';
                    }
                    return label;
                }
                if (d.r / 4 > 2.5) {
                    // show text threshhold
                    var label = (d.data.entity.label.charAt(0).toUpperCase()
                        + d.data.entity.label.slice(1)).split(/ +/g);
                    if (label.length > 3) {
                        label = label.slice(0, 3);
                        label[2] += '…';
                    }
                    return label;
                }
                return '';
            })
                .join('tspan')
                .attr('x', 0)
                .attr('y', function (d, i, nodes) { return i - (nodes.length + 1) / 2 + 0.97 + "em"; })
                .attr('fill', 'white')
                .text(function (d) { return d; });
            leaf
                .select('.label-count')
                .attr('font-family', function () {
                if (fontRendering && fontRendering.counter && fontRendering.counter.family) {
                    return fontRendering.counter.family;
                }
                return 'inherit';
            })
                .attr('font-weight', function () {
                if (fontRendering && fontRendering.counter && fontRendering.counter.weight) {
                    return fontRendering.counter.weight;
                }
                return 'inherit';
            })
                .attr('fill', 'white')
                .text(function (d) {
                if (d.r / 4 > 2.5) {
                    // show text and number threshhold
                    return d.data.count;
                }
                return '';
            })
                .attr('y', function (d) {
                var labelLength = d.data.entity.label.split(/ +/g);
                if (labelLength.length > 3) {
                    labelLength = labelLength.slice(0, 3);
                }
                return labelLength.length - (labelLength.length + 1) / 2 + 0.97 + "em";
            });
            var g = leaf.enter().append('g');
            g.attr('transform', function (d) { return "translate(" + (d.x + 1) + "," + (d.y + 1) + ")"; })
                .attr('font-size', function (d) {
                var size = d.r / 5.5;
                size *= 1;
                size += 1;
                return Math.round(size) + "px";
            })
                .attr('cursor', 'pointer')
                .on('click', function (event, d) {
                _this.onClick(d.data.entity.id);
            })
                .attr('id', function (d) { return "g_" + d.data.entity.id; })
                .append('circle')
                .attr('id', function (d) { d.leafUid = d.data.entity.id; })
                .attr('r', 0)
                .transition(t) // enter() transition on <circle>
                .attr('fill-opacity', 1)
                .attr('fill', function (d) { return colorMap(d.data.entity.typeOfEntity); })
                .attr('r', function (d) { return d.r; });
            g.append('clipPath')
                .attr('id', function (d) { d.clipUid = "Clip-" + d.data.entity.id; })
                .append('use')
                .attr('xlink:href', function (d) { return d.leafUid.href; });
            g.append('text')
                .attr('font-family', function () {
                if (fontRendering && fontRendering.label && fontRendering.label.family) {
                    return fontRendering.label.family;
                }
                return 'inherit';
            })
                .attr('font-weight', function () {
                if (fontRendering && fontRendering && fontRendering.label && fontRendering.label.weight) {
                    return fontRendering.label.weight;
                }
                return 'inherit';
            })
                .selectAll('tspan')
                .data(function (d) {
                if (d.r / 4 > 4.5) {
                    // show text and number threshhold
                    var label = (d.data.entity.label.charAt(0).toUpperCase()
                        + d.data.entity.label.slice(1)).split(/ +/g);
                    if (label.length > 3) {
                        label = label.slice(0, 3);
                        label[2] += '…';
                    }
                    return label;
                }
                if (d.r / 4 > 2.5) {
                    // show text threshhold
                    var label = (d.data.entity.label.charAt(0).toUpperCase()
                        + d.data.entity.label.slice(1)).split(/ +/g);
                    if (label.length > 3) {
                        label = label.slice(0, 3);
                        label[2] += '…';
                    }
                    return label;
                }
                return '';
            })
                .join('tspan')
                .attr('x', 0)
                .attr('y', function (d, i, nodes) { return i - (nodes.length + 1) / 2 + 0.97 + "em"; })
                .attr('fill', 'white')
                .text(function (d) { return d; })
                .attr('fill-opacity', 0)
                .transition(t) // enter() transition on <tspan>
                .attr('fill-opacity', 1);
            g.append('text') // Count label
                .attr('class', 'label-count')
                .attr('font-family', function () {
                if (fontRendering && fontRendering.counter && fontRendering.counter.family) {
                    return fontRendering.counter.family;
                }
                return 'inherit';
            })
                .attr('font-weight', function () {
                if (fontRendering && fontRendering.counter && fontRendering.counter.weight) {
                    return fontRendering.counter.weight;
                }
                return 'inherit';
            })
                .attr('fill', 'white')
                .text(function (d) {
                if (d.r / 4 > 2.5) {
                    // show text and number threshhold
                    return d.data.count;
                }
                return '';
            })
                .attr('y', function (d) {
                var labelLength = d.data.entity.label.split(/ +/g);
                if (labelLength.length > 3) {
                    labelLength = labelLength.slice(0, 3);
                }
                return labelLength.length - (labelLength.length + 1) / 2 + 0.97 + "em";
            })
                .attr('fill-opacity', 0)
                .transition(t) // enter() transition on <text>
                .attr('fill-opacity', 1);
            leaf
                .exit() // EXIT CYCLE
                .remove();
            if (selected) {
                g.filter(function (d) { return selected.includes(d.leafUid); }) // append 'X' icon // only for selected bubbles
                    .append('path')
                    .attr('d', closeIconPath)
                    .attr('class', 'close-icon')
                    .attr('fill', function (d) {
                    if (d.r / 4 > 2.5) {
                        return '#fff';
                    }
                    return 'transparent';
                })
                    .attr('transform', function (d) {
                    if (d.r / 4 > 3) {
                        return "scale(.08) translate(0, " + (d.r * 10 - 80) + ")";
                    }
                    return 'scale(.08)';
                });
            }
            _this.emit('d3end', data); // communicate end of draw
        };
    }
    BubbleChartComponent.prototype.ngAfterContentChecked = function () {
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
    BubbleChartComponent.prototype.onClick = function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BubbleChartComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BubbleChartComponent.prototype, "emit", void 0);
    BubbleChartComponent = __decorate([
        Component({
            selector: 'n7-bubble-chart',
            template: "<div *ngIf=\"data\" class=\"n7-bubble-chart {{ data.classes || '' }}\">\n    <svg #bubbleChart id=\"{{data.containerId}}\"></svg>\n</div>"
        })
    ], BubbleChartComponent);
    return BubbleChartComponent;
}());
export { BubbleChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQvYnViYmxlLWNoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2QkFBNkI7QUFDN0IsaUJBQWlCO0FBQ2pCLDZCQUE2QjtBQUM3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUF3R3RFO0lBQUE7UUFBQSxpQkFnVkM7UUF6VVMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQTJCeEIsU0FBSSxHQUFHO1lBQ0csSUFBQSxhQUFFLENBQVU7WUFDZCxJQUFBLGVBS08sRUFKWCw0QkFBVyxFQUFFLGNBQUksRUFBRSxrQkFBTSxFQUN6QixnQkFBSyxFQUFFLHNCQUFRLEVBQUUsMEJBQVUsRUFDM0IsMEJBQVUsRUFBRSxvQkFBTyxFQUNuQixnQ0FDVyxDQUFDO1lBQ2QsSUFBTSxhQUFhLEdBQUcseUZBQXlGLENBQUM7WUFFaEgsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hCLDJEQUEyRDtnQkFDM0QsT0FBTyxDQUFDLElBQUksQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDO2dCQUNqRixPQUFPO2FBQ1I7WUFFRCxJQUFJLENBQUMsR0FBRyxFQUFFO2lCQUNQLFVBQVUsRUFBRTtpQkFDWixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLE9BQU8sVUFBVSxLQUFLLFFBQVEsRUFBRTtnQkFDbEMsQ0FBQyxHQUFHLEVBQUU7cUJBQ0gsVUFBVSxFQUFFO3FCQUNaLFFBQVEsQ0FBQyxVQUFVLENBQUM7cUJBQ3BCLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDNUI7WUFFRCxJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsWUFBWSxFQUFFO2lCQUMvQixNQUFNLENBQUMsVUFB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Q0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDOUI7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELHNDQUFPLEdBQVAsVUFBUSxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBL0JRO1FBQVIsS0FBSyxFQUFFOztzREFBdUI7SUFFdEI7UUFBUixLQUFLLEVBQUU7O3NEQUFXO0lBSFIsb0JBQW9CO1FBSmhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IscUpBQWtDO1NBQ25DLENBQUM7T0FDVyxvQkFBb0IsQ0FnVmhDO0lBQUQsMkJBQUM7Q0FBQSxBQWhWRCxJQWdWQztTQWhWWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQlVCQkxFQ0hBUlQudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlckNvbnRlbnRDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBCdWJibGVDaGFydENvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGNvbnRhaW5lcklkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJXaWR0aCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY29udGFpbmVySGVpZ2h0IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBidWJibGVzRGF0YSAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSByZXNldCAob3B0aW9uYWwpXG4qL1xuZXhwb3J0IGludGVyZmFjZSBCdWJibGVDaGFydERhdGEge1xuICAvKipcbiAgICogdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBidWJibGUtY2hhcnRcbiAgICovXG4gIGNvbnRhaW5lcklkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0b3RhbCB3aWR0aCBmb3IgdGhlIGJ1YmJsZS1jaGFydFxuICAgKi9cbiAgd2lkdGg6IG51bWJlcjtcbiAgLyoqXG4gICAqIHRvdGFsIGhlaWdodCBmb3IgdGhlIGJ1YmJsZS1jaGFydFxuICAgKi9cbiAgaGVpZ2h0OiBudW1iZXI7XG4gIC8qKlxuICAgKiBkYXRhIGFib3V0IHRoZSBidWJibGVzXG4gICAqL1xuICBkYXRhOiBCdWJibGVDaGFydERhdGFJdGVtW107XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGNzcyBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogbGlzdCBvZiBJRCdzIG9mIHNlbGVjdGVkIGl0ZW1zXG4gICAqIChzZWxlY3RlZCBpdGVtcyB3aWxsIHJlbmRlciB3aXRoIGEgJ1gnIGljb24pXG4gICAqL1xuICBzZWxlY3RlZD86IHN0cmluZ1tdO1xuICAvKipcbiAgICogU3BlY2lmeSBhIGxpc3Qgb2YgdHlwZU9mRW50aXR5IHR5cGVzIChkb21haW4pLFxuICAgKiBhbmQgYSBsaXN0IG9mIGNvbG9ycyAocmFuZ2UpLCB3aGljaCB3aWxsIGJlIG1hcHBlZCB0b2dldGhlci5cbiAgICovXG4gIGNvbG9yTWF0Y2g/OiB7XG4gICAgZG9tYWluOiBzdHJpbmdbXTtcbiAgICByYW5nZTogc3RyaW5nW107XG4gIH07XG4gIC8qKlxuICAgKiBEZWZpbmUgYSBtYXggYW5kIG1pbiBzaXplIGZvciB0aGUgYnViYmxlc1xuICAgKi9cbiAgc2l6ZVJhbmdlOiBbbnVtYmVyLCBudW1iZXJdO1xuICAvKipcbiAgICogSWYgZGVmaW5lZCwgdHJhbnNpdGlvbiB3aWxsIGJlIGFjdGl2YXRlZFxuICAgKiBhbmQgdGhlIHZhbHVlIHdpbGwgYmUgdXNlZCBhcyBkdXJhdGlvblxuICAgKi9cbiAgdHJhbnNpdGlvbj86IG51bWJlcjtcbiAgLyoqXG4gICAqIElmIHNldCB0byBmYWxzZSwgc3RvcHMgdGhlIHNodWZmbGluZyBvZiB0aGUgZGF0YVxuICAgKiBiZWZvcmUgcmVuZGVyaW5nLlxuICAgKi9cbiAgc2h1ZmZsZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBmb250LWZhbWlseSBhbmQgdGhlIGZvbnQtd2VpZ2h0IGZvciBlYWNoIHRleHQgZ3JvdXBcbiAgICovXG4gIGZvbnRSZW5kZXJpbmc/OiB7XG4gICAgbGFiZWw/OiB7XG4gICAgICBmYW1pbHk/OiBzdHJpbmc7XG4gICAgICB3ZWlnaHQ/OiBzdHJpbmc7XG4gICAgfTtcbiAgICBjb3VudGVyPzoge1xuICAgICAgZmFtaWx5Pzogc3RyaW5nO1xuICAgICAgd2VpZ2h0Pzogc3RyaW5nO1xuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIGV4cG9zZSB0aGUgZHJhdyBmdW5jdGlvbiBvdXRzaWRlIG9mIG43LWZyb250ZW5kL2NvbXBvbmVudHMgbGlicmFyeVxuICAgKiB0aGlzIGlzIG5lZWRlZCB0byByZWRyYXcgYnViYmxlLWNoYXJ0LWNvbXBvbmVudCBvbiBjb21tYW5kXG4gICAqL1xuICBzZXREcmF3PzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgRDNDaGFydCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGVudGl0eSAocmVxdWlyZWQpXG4gKiAtIGlkIChyZXF1aXJlZClcbiAqIC0gbGFiZWwgKG9wdGlvbmFsKVxuICogLSB0eXBlT2ZFbnRpdHkgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNvdW50IChyZXF1aXJlZClcbiovXG5leHBvcnQgaW50ZXJmYWNlIEJ1YmJsZUNoYXJ0RGF0YUl0ZW0ge1xuICBlbnRpdHk6IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGxhYmVsPzogc3RyaW5nO1xuICAgIHR5cGVPZkVudGl0eT86IHN0cmluZztcbiAgfTtcbiAgY291bnQ6IG51bWJlcjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctYnViYmxlLWNoYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1YmJsZS1jaGFydC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBCdWJibGVDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuICBASW5wdXQoKSBkYXRhOiBCdWJibGVDaGFydERhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIHByaXZhdGUgZDM7XG5cbiAgcHJpdmF0ZSBfbG9hZGVkID0gZmFsc2U7XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgIC8qXG4gICAgIFdhaXRzIGZvciB0aGUgZG9tIHRvIGJlIGxvYWRlZCwgdGhlbiBmaXJlcyB0aGUgZHJhdyBmdW5jdGlvblxuICAgICB0aGF0IHJlbmRlcnMgdGhlIGNoYXJ0LlxuICAgICovXG4gICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgaWYgKHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xuICAgICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpbXBvcnQoJ2QzJykudGhlbigobW9kdWxlKSA9PiB7XG4gICAgICAgICAgdGhpcy5kMyA9IG1vZHVsZTtcbiAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgICBpZiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5zZXREcmF3KSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEuc2V0RHJhdyh0aGlzLmRyYXcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxuXG4gIGRyYXcgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBkMyB9ID0gdGhpcztcbiAgICBjb25zdCB7XG4gICAgICBjb250YWluZXJJZCwgZGF0YSwgaGVpZ2h0LFxuICAgICAgd2lkdGgsIHNlbGVjdGVkLCB0cmFuc2l0aW9uLFxuICAgICAgY29sb3JNYXRjaCwgc2h1ZmZsZSxcbiAgICAgIGZvbnRSZW5kZXJpbmdcbiAgICB9ID0gdGhpcy5kYXRhO1xuICAgIGNvbnN0IGNsb3NlSWNvblBhdGggPSAnTSAtNTAsNDAgTC00MCw1MCAwLDEwIDQwLDUwIDUwLDQwIDEwLDAgNTAsLTQwIDQwLC01MCAwLC0xMCAtNDAsLTUwIC01MCwtNDAgLTEwLDAgLTUwLDQwJztcblxuICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgcG9zc2libGUgdG8gZHJhdyB3aXRoIHRoZSBjdXJyZW50IGRhdGFzZXRcbiAgICAgIGNvbnNvbGUud2FybignKG43LWJ1YmJsZS1jaGFydCkgVGhlIGRhdGEgb2JqZWN0IGlzIG5vdCBpbiB0aGUgZXhwZWN0ZWQgZm9ybWF0IScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCB0ID0gZDNcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbigwKTtcbiAgICBpZiAodHlwZW9mIHRyYW5zaXRpb24gPT09ICdudW1iZXInKSB7XG4gICAgICB0ID0gZDNcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24odHJhbnNpdGlvbilcbiAgICAgICAgLmVhc2UoZDMuZWFzZUN1YmljSW5PdXQpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbG9yTWFwID0gZDMuc2NhbGVPcmRpbmFsKClcbiAgICAgIC5kb21haW4oY29sb3JNYXRjaCA/IGNvbG9yTWF0Y2guZG9tYWluIDogWydwZXJzb25hJywgJ2x1b2dvJywgJ29yZ2FuaXp6YXppb25lJywgJ2Nvc2Egbm90ZXZvbGUnXSlcbiAgICAgIC5yYW5nZShjb2xvck1hdGNoID8gY29sb3JNYXRjaC5yYW5nZSA6IGQzLnNjaGVtZVRhYmxlYXUxMCk7XG5cbiAgICBjb25zdCBzaXplU2NhbGUgPSBkMyAvLyBtYXAgZW50aXR5IGNvdW50IHRvIGJ1YmJsZSBzaXplXG4gICAgICAuc2NhbGVMaW5lYXIoKVxuICAgICAgLmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIChkKSA9PiArZC5jb3VudCldKVxuICAgICAgLnJhbmdlKFszLCBkMy5tYXgoZGF0YSwgKGQpID0+ICtkLmNvdW50KV0pO1xuXG4gICAgY29uc3QgcGFjayA9IChjaGlsZHJlbikgPT4gZDNcbiAgICAgIC5wYWNrKClcbiAgICAgIC5zaXplKFt3aWR0aCAtIDIsIGhlaWdodCAtIDJdKVxuICAgICAgLnBhZGRpbmcoMS41KShcbiAgICAgICAgZDMuaGllcmFyY2h5KHsgY2hpbGRyZW4gfSkuc3VtKChkKSA9PiBzaXplU2NhbGUoZC5jb3VudCkpXG4gICAgICApO1xuXG4gICAgY29uc3Qgcm9vdCA9ICgpID0+IHsgLy8gaWYgc2h1ZmZsZSBpcyB1bmRlZmluZWQgb3IgdHJ1ZSwgc2h1ZmZsZSB0aGUgZGF0YVxuICAgICAgaWYgKHR5cGVvZiBzaHVmZmxlID09PSAndW5kZWZpbmVkJyB8fCBzaHVmZmxlKSB7XG4gICAgICAgIGNvbnN0IHNodWZmRGF0YSA9IGRhdGEuc2xpY2UoKTsgLy8gZG8gbm90IG1vZGlmeSB0aGUgc291cmNlIGRhdGEhXG4gICAgICAgIHJldHVybiBwYWNrKGQzLnNodWZmbGUoc2h1ZmZEYXRhKSk7XG4gICAgICB9IC8vIGlmIHNodWZmbGUgaXMgc2V0IHRvIGZhbHNlLCBza2lwIHRoZSBkYXRhIHNodWZmbGVcbiAgICAgIHJldHVybiBwYWNrKGRhdGEpO1xuICAgIH07XG5cbiAgICBjb25zdCBzdmcgPSBkM1xuICAgICAgLnNlbGVjdChgIyR7Y29udGFpbmVySWR9YClcbiAgICAgIC5hdHRyKCd2aWV3Qm94JywgWzAsIDAsIHdpZHRoLCBoZWlnaHRdKVxuICAgICAgLmF0dHIoJ2ZvbnQtZmFtaWx5JywgJ1ZlcmRhbmEsIEdlbmV2YSwgc2Fucy1zZXJpZicpXG4gICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnbWlkZGxlJyk7XG5cbiAgICBjb25zdCBsZWFmID0gc3ZnLnNlbGVjdEFsbCgnZycpLmRhdGEocm9vdCgpLmxlYXZlcygpLCAoZCkgPT4gZC5kYXRhLmVudGl0eS5pZCk7XG4gICAgbGVhZlxuICAgICAgLnRyYW5zaXRpb24odCkgLy8gdXBkYXRlIHRyYW5zaXRpb24gb24gPGc+XG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMSlcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCkgPT4gYHRyYW5zbGF0ZSgke2QueCArIDF9LCR7ZC55ICsgMX0pYClcbiAgICAgIC5hdHRyKCdmb250LXNpemUnLCAoZCkgPT4ge1xuICAgICAgICBsZXQgc2l6ZSA9IGQuciAvIDUuNTtcbiAgICAgICAgc2l6ZSAqPSAxO1xuICAgICAgICBzaXplICs9IDE7XG4gICAgICAgIHJldHVybiBgJHtNYXRoLnJvdW5kKHNpemUpfXB4YDtcbiAgICAgIH0pO1xuXG4gICAgbGVhZi5zZWxlY3RBbGwoJy5jbG9zZS1pY29uJykucmVtb3ZlKCk7IC8vIGNsZWFyIGFsbCBleGlzdGluZyBjbG9zZSBpY29uc1xuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgbGVhZiAvLyByZW5kZXIgbmVjZXNzYXJ5IGNsb3NlIGljb25zXG4gICAgICAgIC5maWx0ZXIoKGQpID0+IHNlbGVjdGVkLmluY2x1ZGVzKGQuZGF0YS5lbnRpdHkuaWQpKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2Nsb3NlLWljb24nKVxuICAgICAgICAuYXR0cignZCcsIGNsb3NlSWNvblBhdGgpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgJyNmZmYnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQpID0+IHtcbiAgICAgICAgICBpZiAoZC5yIC8gNCA+IDMpIHtcbiAgICAgICAgICAgIHJldHVybiBgc2NhbGUoLjA4KSB0cmFuc2xhdGUoMCwgJHtkLnIgKiAxMCAtIDgwfSlgO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gJ3NjYWxlKC4wOCknO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsZWFmXG4gICAgICAuc2VsZWN0KCdjaXJjbGUnKVxuICAgICAgLnRyYW5zaXRpb24odCkgLy8gdXBkYXRlIHRyYW5zaXRpb24gb24gPGNpcmNsZT5cbiAgICAgIC5hdHRyKCdmaWxsLW9wYWNpdHknLCAxKVxuICAgICAgLmF0dHIoJ3InLCAoZCkgPT4gZC5yKTtcblxuICAgIGxlYWZcbiAgICAgIC5zZWxlY3QoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2ZvbnQtZmFtaWx5JywgKCkgPT4ge1xuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmxhYmVsICYmIGZvbnRSZW5kZXJpbmcubGFiZWwuZmFtaWx5KSB7XG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcubGFiZWwuZmFtaWx5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnaW5oZXJpdCc7XG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2ZvbnQtd2VpZ2h0JywgKCkgPT4ge1xuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmxhYmVsICYmIGZvbnRSZW5kZXJpbmcubGFiZWwud2VpZ2h0KSB7XG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcubGFiZWwud2VpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnaW5oZXJpdCc7XG4gICAgICB9KVxuICAgICAgLnNlbGVjdEFsbCgndHNwYW4nKVxuICAgICAgLmRhdGEoKGQpID0+IHtcbiAgICAgICAgaWYgKGQuciAvIDQgPiA0LjUpIHtcbiAgICAgICAgICAvLyBzaG93IHRleHQgYW5kIG51bWJlciB0aHJlc2hob2xkXG4gICAgICAgICAgbGV0IGxhYmVsID0gKFxuICAgICAgICAgICAgZC5kYXRhLmVudGl0eS5sYWJlbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKVxuICAgICAgICAgICAgKyBkLmRhdGEuZW50aXR5LmxhYmVsLnNsaWNlKDEpXG4gICAgICAgICAgKS5zcGxpdCgvICsvZyk7XG4gICAgICAgICAgaWYgKGxhYmVsLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgIGxhYmVsID0gbGFiZWwuc2xpY2UoMCwgMyk7XG4gICAgICAgICAgICBsYWJlbFsyXSArPSAn4oCmJztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICB9IGlmIChkLnIgLyA0ID4gMi41KSB7XG4gICAgICAgICAgLy8gc2hvdyB0ZXh0IHRocmVzaGhvbGRcbiAgICAgICAgICBsZXQgbGFiZWwgPSAoXG4gICAgICAgICAgICBkLmRhdGEuZW50aXR5LmxhYmVsLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICArIGQuZGF0YS5lbnRpdHkubGFiZWwuc2xpY2UoMSlcbiAgICAgICAgICApLnNwbGl0KC8gKy9nKTtcbiAgICAgICAgICBpZiAobGFiZWwubGVuZ3RoID4gMykge1xuICAgICAgICAgICAgbGFiZWwgPSBsYWJlbC5zbGljZSgwLCAzKTtcbiAgICAgICAgICAgIGxhYmVsWzJdICs9ICfigKYnO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfSlcbiAgICAgIC5qb2luKCd0c3BhbicpXG4gICAgICAuYXR0cigneCcsIDApXG4gICAgICAuYXR0cigneScsIChkLCBpLCBub2RlcykgPT4gYCR7aSAtIChub2Rlcy5sZW5ndGggKyAxKSAvIDIgKyAwLjk3fWVtYClcbiAgICAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJylcbiAgICAgIC50ZXh0KChkKSA9PiBkKTtcblxuICAgIGxlYWZcbiAgICAgIC5zZWxlY3QoJy5sYWJlbC1jb3VudCcpXG4gICAgICAuYXR0cignZm9udC1mYW1pbHknLCAoKSA9PiB7XG4gICAgICAgIGlmIChmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcuY291bnRlciAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIuZmFtaWx5KSB7XG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcuY291bnRlci5mYW1pbHk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdpbmhlcml0JztcbiAgICAgIH0pXG4gICAgICAuYXR0cignZm9udC13ZWlnaHQnLCAoKSA9PiB7XG4gICAgICAgIGlmIChmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcuY291bnRlciAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIud2VpZ2h0KSB7XG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcuY291bnRlci53ZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdpbmhlcml0JztcbiAgICAgIH0pXG4gICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXG4gICAgICAudGV4dCgoZCkgPT4ge1xuICAgICAgICBpZiAoZC5yIC8gNCA+IDIuNSkge1xuICAgICAgICAgIC8vIHNob3cgdGV4dCBhbmQgbnVtYmVyIHRocmVzaGhvbGRcbiAgICAgICAgICByZXR1cm4gZC5kYXRhLmNvdW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH0pXG4gICAgICAuYXR0cigneScsIChkKSA9PiB7XG4gICAgICAgIGxldCBsYWJlbExlbmd0aCA9IGQuZGF0YS5lbnRpdHkubGFiZWwuc3BsaXQoLyArL2cpO1xuICAgICAgICBpZiAobGFiZWxMZW5ndGgubGVuZ3RoID4gMykge1xuICAgICAgICAgIGxhYmVsTGVuZ3RoID0gbGFiZWxMZW5ndGguc2xpY2UoMCwgMyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke2xhYmVsTGVuZ3RoLmxlbmd0aCAtIChsYWJlbExlbmd0aC5sZW5ndGggKyAxKSAvIDIgKyAwLjk3fWVtYDtcbiAgICAgIH0pO1xuXG5cbiAgICBjb25zdCBnID0gbGVhZi5lbnRlcigpLmFwcGVuZCgnZycpO1xuXG4gICAgZy5hdHRyKCd0cmFuc2Zvcm0nLCAoZCkgPT4gYHRyYW5zbGF0ZSgke2QueCArIDF9LCR7ZC55ICsgMX0pYClcbiAgICAgIC5hdHRyKCdmb250LXNpemUnLCAoZCkgPT4ge1xuICAgICAgICBsZXQgc2l6ZSA9IGQuciAvIDUuNTtcbiAgICAgICAgc2l6ZSAqPSAxO1xuICAgICAgICBzaXplICs9IDE7XG4gICAgICAgIHJldHVybiBgJHtNYXRoLnJvdW5kKHNpemUpfXB4YDtcbiAgICAgIH0pXG4gICAgICAuYXR0cignY3Vyc29yJywgJ3BvaW50ZXInKVxuICAgICAgLm9uKCdjbGljaycsIChldmVudCwgZCkgPT4ge1xuICAgICAgICB0aGlzLm9uQ2xpY2soZC5kYXRhLmVudGl0eS5pZCk7XG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2lkJywgKGQpID0+IGBnXyR7ZC5kYXRhLmVudGl0eS5pZH1gKVxuICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgIC5hdHRyKCdpZCcsIChkKSA9PiB7IGQubGVhZlVpZCA9IGQuZGF0YS5lbnRpdHkuaWQ7IH0pXG4gICAgICAuYXR0cigncicsIDApXG4gICAgICAudHJhbnNpdGlvbih0KSAvLyBlbnRlcigpIHRyYW5zaXRpb24gb24gPGNpcmNsZT5cbiAgICAgIC5hdHRyKCdmaWxsLW9wYWNpdHknLCAxKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAoZCkgPT4gY29sb3JNYXAoZC5kYXRhLmVudGl0eS50eXBlT2ZFbnRpdHkpKVxuICAgICAgLmF0dHIoJ3InLCAoZCkgPT4gZC5yKTtcblxuICAgIGcuYXBwZW5kKCdjbGlwUGF0aCcpXG4gICAgICAuYXR0cignaWQnLCAoZCkgPT4geyBkLmNsaXBVaWQgPSBgQ2xpcC0ke2QuZGF0YS5lbnRpdHkuaWR9YDsgfSlcbiAgICAgIC5hcHBlbmQoJ3VzZScpXG4gICAgICAuYXR0cigneGxpbms6aHJlZicsIChkKSA9PiBkLmxlYWZVaWQuaHJlZik7XG5cbiAgICBnLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZm9udC1mYW1pbHknLCAoKSA9PiB7XG4gICAgICAgIGlmIChmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcubGFiZWwgJiYgZm9udFJlbmRlcmluZy5sYWJlbC5mYW1pbHkpIHtcbiAgICAgICAgICByZXR1cm4gZm9udFJlbmRlcmluZy5sYWJlbC5mYW1pbHk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdpbmhlcml0JztcbiAgICAgIH0pXG4gICAgICAuYXR0cignZm9udC13ZWlnaHQnLCAoKSA9PiB7XG4gICAgICAgIGlmIChmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcgJiYgZm9udFJlbmRlcmluZy5sYWJlbCAmJiBmb250UmVuZGVyaW5nLmxhYmVsLndlaWdodCkge1xuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmxhYmVsLndlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ2luaGVyaXQnO1xuICAgICAgfSlcbiAgICAgIC5zZWxlY3RBbGwoJ3RzcGFuJylcbiAgICAgIC5kYXRhKChkKSA9PiB7XG4gICAgICAgIGlmIChkLnIgLyA0ID4gNC41KSB7XG4gICAgICAgICAgLy8gc2hvdyB0ZXh0IGFuZCBudW1iZXIgdGhyZXNoaG9sZFxuICAgICAgICAgIGxldCBsYWJlbCA9IChcbiAgICAgICAgICAgIGQuZGF0YS5lbnRpdHkubGFiZWwuY2hhckF0KDApLnRvVXBwZXJDYXNlKClcbiAgICAgICAgICAgICsgZC5kYXRhLmVudGl0eS5sYWJlbC5zbGljZSgxKVxuICAgICAgICAgICkuc3BsaXQoLyArL2cpO1xuICAgICAgICAgIGlmIChsYWJlbC5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnNsaWNlKDAsIDMpO1xuICAgICAgICAgICAgbGFiZWxbMl0gKz0gJ+KApic7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgfSBpZiAoZC5yIC8gNCA+IDIuNSkge1xuICAgICAgICAgIC8vIHNob3cgdGV4dCB0aHJlc2hob2xkXG4gICAgICAgICAgbGV0IGxhYmVsID0gKFxuICAgICAgICAgICAgZC5kYXRhLmVudGl0eS5sYWJlbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKVxuICAgICAgICAgICAgKyBkLmRhdGEuZW50aXR5LmxhYmVsLnNsaWNlKDEpXG4gICAgICAgICAgKS5zcGxpdCgvICsvZyk7XG4gICAgICAgICAgaWYgKGxhYmVsLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgIGxhYmVsID0gbGFiZWwuc2xpY2UoMCwgMyk7XG4gICAgICAgICAgICBsYWJlbFsyXSArPSAn4oCmJztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH0pXG4gICAgICAuam9pbigndHNwYW4nKVxuICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgLmF0dHIoJ3knLCAoZCwgaSwgbm9kZXMpID0+IGAke2kgLSAobm9kZXMubGVuZ3RoICsgMSkgLyAyICsgMC45N31lbWApXG4gICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXG4gICAgICAudGV4dCgoZCkgPT4gZClcbiAgICAgIC5hdHRyKCdmaWxsLW9wYWNpdHknLCAwKVxuICAgICAgLnRyYW5zaXRpb24odCkgLy8gZW50ZXIoKSB0cmFuc2l0aW9uIG9uIDx0c3Bhbj5cbiAgICAgIC5hdHRyKCdmaWxsLW9wYWNpdHknLCAxKTtcblxuICAgIGcuYXBwZW5kKCd0ZXh0JykgLy8gQ291bnQgbGFiZWxcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsYWJlbC1jb3VudCcpXG4gICAgICAuYXR0cignZm9udC1mYW1pbHknLCAoKSA9PiB7XG4gICAgICAgIGlmIChmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcuY291bnRlciAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIuZmFtaWx5KSB7XG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcuY291bnRlci5mYW1pbHk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdpbmhlcml0JztcbiAgICAgIH0pXG4gICAgICAuYXR0cignZm9udC13ZWlnaHQnLCAoKSA9PiB7XG4gICAgICAgIGlmIChmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcuY291bnRlciAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIud2VpZ2h0KSB7XG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcuY291bnRlci53ZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdpbmhlcml0JztcbiAgICAgIH0pXG4gICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXG4gICAgICAudGV4dCgoZCkgPT4ge1xuICAgICAgICBpZiAoZC5yIC8gNCA+IDIuNSkge1xuICAgICAgICAgIC8vIHNob3cgdGV4dCBhbmQgbnVtYmVyIHRocmVzaGhvbGRcbiAgICAgICAgICByZXR1cm4gZC5kYXRhLmNvdW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH0pXG4gICAgICAuYXR0cigneScsIChkKSA9PiB7XG4gICAgICAgIGxldCBsYWJlbExlbmd0aCA9IGQuZGF0YS5lbnRpdHkubGFiZWwuc3BsaXQoLyArL2cpO1xuICAgICAgICBpZiAobGFiZWxMZW5ndGgubGVuZ3RoID4gMykge1xuICAgICAgICAgIGxhYmVsTGVuZ3RoID0gbGFiZWxMZW5ndGguc2xpY2UoMCwgMyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke2xhYmVsTGVuZ3RoLmxlbmd0aCAtIChsYWJlbExlbmd0aC5sZW5ndGggKyAxKSAvIDIgKyAwLjk3fWVtYDtcbiAgICAgIH0pXG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMClcbiAgICAgIC50cmFuc2l0aW9uKHQpIC8vIGVudGVyKCkgdHJhbnNpdGlvbiBvbiA8dGV4dD5cbiAgICAgIC5hdHRyKCdmaWxsLW9wYWNpdHknLCAxKTtcblxuICAgIGxlYWZcbiAgICAgIC5leGl0KCkgLy8gRVhJVCBDWUNMRVxuICAgICAgLnJlbW92ZSgpO1xuXG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICBnLmZpbHRlcigoZCkgPT4gc2VsZWN0ZWQuaW5jbHVkZXMoZC5sZWFmVWlkKSkgLy8gYXBwZW5kICdYJyBpY29uIC8vIG9ubHkgZm9yIHNlbGVjdGVkIGJ1YmJsZXNcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgY2xvc2VJY29uUGF0aClcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2Nsb3NlLWljb24nKVxuICAgICAgICAuYXR0cignZmlsbCcsIChkKSA9PiB7XG4gICAgICAgICAgaWYgKGQuciAvIDQgPiAyLjUpIHtcbiAgICAgICAgICAgIHJldHVybiAnI2ZmZic7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAndHJhbnNwYXJlbnQnO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQpID0+IHtcbiAgICAgICAgICBpZiAoZC5yIC8gNCA+IDMpIHtcbiAgICAgICAgICAgIHJldHVybiBgc2NhbGUoLjA4KSB0cmFuc2xhdGUoMCwgJHtkLnIgKiAxMCAtIDgwfSlgO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gJ3NjYWxlKC4wOCknO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ2QzZW5kJywgZGF0YSk7IC8vIGNvbW11bmljYXRlIGVuZCBvZiBkcmF3XG4gIH1cbn1cbiJdfQ==