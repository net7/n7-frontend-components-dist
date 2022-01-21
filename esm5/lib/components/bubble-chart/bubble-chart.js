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
            template: "<div *ngIf=\"data\" class=\"n7-bubble-chart {{ data.classes || '' }}\">\r\n    <svg #bubbleChart id=\"{{data.containerId}}\"></svg>\r\n</div>"
        })
    ], BubbleChartComponent);
    return BubbleChartComponent;
}());
export { BubbleChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQvYnViYmxlLWNoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2QkFBNkI7QUFDN0IsaUJBQWlCO0FBQ2pCLDZCQUE2QjtBQUM3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUF3R3RFO0lBQUE7UUFBQSxpQkFnVkM7UUF6VVMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQTJCeEIsU0FBSSxHQUFHO1lBQ0csSUFBQSxhQUFFLENBQVU7WUFDZCxJQUFBLGVBS08sRUFKWCw0QkFBVyxFQUFFLGNBQUksRUFBRSxrQkFBTSxFQUN6QixnQkFBSyxFQUFFLHNCQUFRLEVBQUUsMEJBQVUsRUFDM0IsMEJBQVUsRUFBRSxvQkFBTyxFQUNuQixnQ0FDVyxDQUFDO1lBQ2QsSUFBTSxhQUFhLEdBQUcseUZBQXlGLENBQUM7WUFFaEgsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hCLDJEQUEyRDtnQkFDM0QsT0FBTyxDQUFDLElBQUksQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDO2dCQUNqRixPQUFPO2FBQ1I7WUFFRCxJQUFJLENBQUMsR0FBRyxFQUFFO2lCQUNQLFVBQVUsRUFBRTtpQkFDWixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLE9BQU8sVUFBVSxLQUFLLFFBQVEsRUFBRTtnQkFDbEMsQ0FBQyxHQUFHLEVBQUU7cUJBQ0gsVUFBVSxFQUFFO3FCQUNaLFFBQVEsQ0FBQyxVQUFVLENBQUM7cUJBQ3BCLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDNUI7WUFFRCxJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsWUFBWSxFQUFFO2lCQUMvQixNQUFNLENBQUMsVUFB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Q0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDOUI7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELHNDQUFPLEdBQVAsVUFBUSxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBL0JRO1FBQVIsS0FBSyxFQUFFOztzREFBdUI7SUFFdEI7UUFBUixLQUFLLEVBQUU7O3NEQUFXO0lBSFIsb0JBQW9CO1FBSmhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IseUpBQWtDO1NBQ25DLENBQUM7T0FDVyxvQkFBb0IsQ0FnVmhDO0lBQUQsMkJBQUM7Q0FBQSxBQWhWRCxJQWdWQztTQWhWWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBCVUJCTEVDSEFSVC50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlckNvbnRlbnRDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBCdWJibGVDaGFydENvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJJZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJXaWR0aCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJIZWlnaHQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgYnViYmxlc0RhdGEgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcmVzZXQgKG9wdGlvbmFsKVxyXG4qL1xyXG5leHBvcnQgaW50ZXJmYWNlIEJ1YmJsZUNoYXJ0RGF0YSB7XHJcbiAgLyoqXHJcbiAgICogdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBidWJibGUtY2hhcnRcclxuICAgKi9cclxuICBjb250YWluZXJJZDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHRvdGFsIHdpZHRoIGZvciB0aGUgYnViYmxlLWNoYXJ0XHJcbiAgICovXHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICAvKipcclxuICAgKiB0b3RhbCBoZWlnaHQgZm9yIHRoZSBidWJibGUtY2hhcnRcclxuICAgKi9cclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBkYXRhIGFib3V0IHRoZSBidWJibGVzXHJcbiAgICovXHJcbiAgZGF0YTogQnViYmxlQ2hhcnREYXRhSXRlbVtdO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgY3NzIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGxpc3Qgb2YgSUQncyBvZiBzZWxlY3RlZCBpdGVtc1xyXG4gICAqIChzZWxlY3RlZCBpdGVtcyB3aWxsIHJlbmRlciB3aXRoIGEgJ1gnIGljb24pXHJcbiAgICovXHJcbiAgc2VsZWN0ZWQ/OiBzdHJpbmdbXTtcclxuICAvKipcclxuICAgKiBTcGVjaWZ5IGEgbGlzdCBvZiB0eXBlT2ZFbnRpdHkgdHlwZXMgKGRvbWFpbiksXHJcbiAgICogYW5kIGEgbGlzdCBvZiBjb2xvcnMgKHJhbmdlKSwgd2hpY2ggd2lsbCBiZSBtYXBwZWQgdG9nZXRoZXIuXHJcbiAgICovXHJcbiAgY29sb3JNYXRjaD86IHtcclxuICAgIGRvbWFpbjogc3RyaW5nW107XHJcbiAgICByYW5nZTogc3RyaW5nW107XHJcbiAgfTtcclxuICAvKipcclxuICAgKiBEZWZpbmUgYSBtYXggYW5kIG1pbiBzaXplIGZvciB0aGUgYnViYmxlc1xyXG4gICAqL1xyXG4gIHNpemVSYW5nZTogW251bWJlciwgbnVtYmVyXTtcclxuICAvKipcclxuICAgKiBJZiBkZWZpbmVkLCB0cmFuc2l0aW9uIHdpbGwgYmUgYWN0aXZhdGVkXHJcbiAgICogYW5kIHRoZSB2YWx1ZSB3aWxsIGJlIHVzZWQgYXMgZHVyYXRpb25cclxuICAgKi9cclxuICB0cmFuc2l0aW9uPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIElmIHNldCB0byBmYWxzZSwgc3RvcHMgdGhlIHNodWZmbGluZyBvZiB0aGUgZGF0YVxyXG4gICAqIGJlZm9yZSByZW5kZXJpbmcuXHJcbiAgICovXHJcbiAgc2h1ZmZsZT86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogRGVmaW5lcyB0aGUgZm9udC1mYW1pbHkgYW5kIHRoZSBmb250LXdlaWdodCBmb3IgZWFjaCB0ZXh0IGdyb3VwXHJcbiAgICovXHJcbiAgZm9udFJlbmRlcmluZz86IHtcclxuICAgIGxhYmVsPzoge1xyXG4gICAgICBmYW1pbHk/OiBzdHJpbmc7XHJcbiAgICAgIHdlaWdodD86IHN0cmluZztcclxuICAgIH07XHJcbiAgICBjb3VudGVyPzoge1xyXG4gICAgICBmYW1pbHk/OiBzdHJpbmc7XHJcbiAgICAgIHdlaWdodD86IHN0cmluZztcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogZXhwb3NlIHRoZSBkcmF3IGZ1bmN0aW9uIG91dHNpZGUgb2YgbjctZnJvbnRlbmQvY29tcG9uZW50cyBsaWJyYXJ5XHJcbiAgICogdGhpcyBpcyBuZWVkZWQgdG8gcmVkcmF3IGJ1YmJsZS1jaGFydC1jb21wb25lbnQgb24gY29tbWFuZFxyXG4gICAqL1xyXG4gIHNldERyYXc/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEQzQ2hhcnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgZW50aXR5IChyZXF1aXJlZClcclxuICogLSBpZCAocmVxdWlyZWQpXHJcbiAqIC0gbGFiZWwgKG9wdGlvbmFsKVxyXG4gKiAtIHR5cGVPZkVudGl0eSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjb3VudCAocmVxdWlyZWQpXHJcbiovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQnViYmxlQ2hhcnREYXRhSXRlbSB7XHJcbiAgZW50aXR5OiB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgICB0eXBlT2ZFbnRpdHk/OiBzdHJpbmc7XHJcbiAgfTtcclxuICBjb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWJ1YmJsZS1jaGFydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2J1YmJsZS1jaGFydC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQnViYmxlQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcclxuICBASW5wdXQoKSBkYXRhOiBCdWJibGVDaGFydERhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBkMztcclxuXHJcbiAgcHJpdmF0ZSBfbG9hZGVkID0gZmFsc2U7XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcclxuICAgIC8qXHJcbiAgICAgV2FpdHMgZm9yIHRoZSBkb20gdG8gYmUgbG9hZGVkLCB0aGVuIGZpcmVzIHRoZSBkcmF3IGZ1bmN0aW9uXHJcbiAgICAgdGhhdCByZW5kZXJzIHRoZSBjaGFydC5cclxuICAgICovXHJcbiAgICBpZiAodGhpcy5kYXRhKSB7XHJcbiAgICAgIGlmICh0aGlzLl9sb2FkZWQpIHJldHVybjtcclxuICAgICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaW1wb3J0KCdkMycpLnRoZW4oKG1vZHVsZSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5kMyA9IG1vZHVsZTtcclxuICAgICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuc2V0RHJhdykge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuc2V0RHJhdyh0aGlzLmRyYXcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZCkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIGRyYXcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGQzIH0gPSB0aGlzO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBjb250YWluZXJJZCwgZGF0YSwgaGVpZ2h0LFxyXG4gICAgICB3aWR0aCwgc2VsZWN0ZWQsIHRyYW5zaXRpb24sXHJcbiAgICAgIGNvbG9yTWF0Y2gsIHNodWZmbGUsXHJcbiAgICAgIGZvbnRSZW5kZXJpbmdcclxuICAgIH0gPSB0aGlzLmRhdGE7XHJcbiAgICBjb25zdCBjbG9zZUljb25QYXRoID0gJ00gLTUwLDQwIEwtNDAsNTAgMCwxMCA0MCw1MCA1MCw0MCAxMCwwIDUwLC00MCA0MCwtNTAgMCwtMTAgLTQwLC01MCAtNTAsLTQwIC0xMCwwIC01MCw0MCc7XHJcblxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEpKSB7XHJcbiAgICAgIC8vIENoZWNrIGlmIGl0IGlzIHBvc3NpYmxlIHRvIGRyYXcgd2l0aCB0aGUgY3VycmVudCBkYXRhc2V0XHJcbiAgICAgIGNvbnNvbGUud2FybignKG43LWJ1YmJsZS1jaGFydCkgVGhlIGRhdGEgb2JqZWN0IGlzIG5vdCBpbiB0aGUgZXhwZWN0ZWQgZm9ybWF0IScpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHQgPSBkM1xyXG4gICAgICAudHJhbnNpdGlvbigpXHJcbiAgICAgIC5kdXJhdGlvbigwKTtcclxuICAgIGlmICh0eXBlb2YgdHJhbnNpdGlvbiA9PT0gJ251bWJlcicpIHtcclxuICAgICAgdCA9IGQzXHJcbiAgICAgICAgLnRyYW5zaXRpb24oKVxyXG4gICAgICAgIC5kdXJhdGlvbih0cmFuc2l0aW9uKVxyXG4gICAgICAgIC5lYXNlKGQzLmVhc2VDdWJpY0luT3V0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb2xvck1hcCA9IGQzLnNjYWxlT3JkaW5hbCgpXHJcbiAgICAgIC5kb21haW4oY29sb3JNYXRjaCA/IGNvbG9yTWF0Y2guZG9tYWluIDogWydwZXJzb25hJywgJ2x1b2dvJywgJ29yZ2FuaXp6YXppb25lJywgJ2Nvc2Egbm90ZXZvbGUnXSlcclxuICAgICAgLnJhbmdlKGNvbG9yTWF0Y2ggPyBjb2xvck1hdGNoLnJhbmdlIDogZDMuc2NoZW1lVGFibGVhdTEwKTtcclxuXHJcbiAgICBjb25zdCBzaXplU2NhbGUgPSBkMyAvLyBtYXAgZW50aXR5IGNvdW50IHRvIGJ1YmJsZSBzaXplXHJcbiAgICAgIC5zY2FsZUxpbmVhcigpXHJcbiAgICAgIC5kb21haW4oWzAsIGQzLm1heChkYXRhLCAoZCkgPT4gK2QuY291bnQpXSlcclxuICAgICAgLnJhbmdlKFszLCBkMy5tYXgoZGF0YSwgKGQpID0+ICtkLmNvdW50KV0pO1xyXG5cclxuICAgIGNvbnN0IHBhY2sgPSAoY2hpbGRyZW4pID0+IGQzXHJcbiAgICAgIC5wYWNrKClcclxuICAgICAgLnNpemUoW3dpZHRoIC0gMiwgaGVpZ2h0IC0gMl0pXHJcbiAgICAgIC5wYWRkaW5nKDEuNSkoXHJcbiAgICAgICAgZDMuaGllcmFyY2h5KHsgY2hpbGRyZW4gfSkuc3VtKChkKSA9PiBzaXplU2NhbGUoZC5jb3VudCkpXHJcbiAgICAgICk7XHJcblxyXG4gICAgY29uc3Qgcm9vdCA9ICgpID0+IHsgLy8gaWYgc2h1ZmZsZSBpcyB1bmRlZmluZWQgb3IgdHJ1ZSwgc2h1ZmZsZSB0aGUgZGF0YVxyXG4gICAgICBpZiAodHlwZW9mIHNodWZmbGUgPT09ICd1bmRlZmluZWQnIHx8IHNodWZmbGUpIHtcclxuICAgICAgICBjb25zdCBzaHVmZkRhdGEgPSBkYXRhLnNsaWNlKCk7IC8vIGRvIG5vdCBtb2RpZnkgdGhlIHNvdXJjZSBkYXRhIVxyXG4gICAgICAgIHJldHVybiBwYWNrKGQzLnNodWZmbGUoc2h1ZmZEYXRhKSk7XHJcbiAgICAgIH0gLy8gaWYgc2h1ZmZsZSBpcyBzZXQgdG8gZmFsc2UsIHNraXAgdGhlIGRhdGEgc2h1ZmZsZVxyXG4gICAgICByZXR1cm4gcGFjayhkYXRhKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc3ZnID0gZDNcclxuICAgICAgLnNlbGVjdChgIyR7Y29udGFpbmVySWR9YClcclxuICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCBbMCwgMCwgd2lkdGgsIGhlaWdodF0pXHJcbiAgICAgIC5hdHRyKCdmb250LWZhbWlseScsICdWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWYnKVxyXG4gICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnbWlkZGxlJyk7XHJcblxyXG4gICAgY29uc3QgbGVhZiA9IHN2Zy5zZWxlY3RBbGwoJ2cnKS5kYXRhKHJvb3QoKS5sZWF2ZXMoKSwgKGQpID0+IGQuZGF0YS5lbnRpdHkuaWQpO1xyXG4gICAgbGVhZlxyXG4gICAgICAudHJhbnNpdGlvbih0KSAvLyB1cGRhdGUgdHJhbnNpdGlvbiBvbiA8Zz5cclxuICAgICAgLmF0dHIoJ2ZpbGwtb3BhY2l0eScsIDEpXHJcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCkgPT4gYHRyYW5zbGF0ZSgke2QueCArIDF9LCR7ZC55ICsgMX0pYClcclxuICAgICAgLmF0dHIoJ2ZvbnQtc2l6ZScsIChkKSA9PiB7XHJcbiAgICAgICAgbGV0IHNpemUgPSBkLnIgLyA1LjU7XHJcbiAgICAgICAgc2l6ZSAqPSAxO1xyXG4gICAgICAgIHNpemUgKz0gMTtcclxuICAgICAgICByZXR1cm4gYCR7TWF0aC5yb3VuZChzaXplKX1weGA7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGxlYWYuc2VsZWN0QWxsKCcuY2xvc2UtaWNvbicpLnJlbW92ZSgpOyAvLyBjbGVhciBhbGwgZXhpc3RpbmcgY2xvc2UgaWNvbnNcclxuICAgIGlmIChzZWxlY3RlZCkge1xyXG4gICAgICBsZWFmIC8vIHJlbmRlciBuZWNlc3NhcnkgY2xvc2UgaWNvbnNcclxuICAgICAgICAuZmlsdGVyKChkKSA9PiBzZWxlY3RlZC5pbmNsdWRlcyhkLmRhdGEuZW50aXR5LmlkKSlcclxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcclxuICAgICAgICAuYXR0cignY2xhc3MnLCAnY2xvc2UtaWNvbicpXHJcbiAgICAgICAgLmF0dHIoJ2QnLCBjbG9zZUljb25QYXRoKVxyXG4gICAgICAgIC5hdHRyKCdmaWxsJywgJyNmZmYnKVxyXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGQuciAvIDQgPiAzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgc2NhbGUoLjA4KSB0cmFuc2xhdGUoMCwgJHtkLnIgKiAxMCAtIDgwfSlgO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuICdzY2FsZSguMDgpJztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsZWFmXHJcbiAgICAgIC5zZWxlY3QoJ2NpcmNsZScpXHJcbiAgICAgIC50cmFuc2l0aW9uKHQpIC8vIHVwZGF0ZSB0cmFuc2l0aW9uIG9uIDxjaXJjbGU+XHJcbiAgICAgIC5hdHRyKCdmaWxsLW9wYWNpdHknLCAxKVxyXG4gICAgICAuYXR0cigncicsIChkKSA9PiBkLnIpO1xyXG5cclxuICAgIGxlYWZcclxuICAgICAgLnNlbGVjdCgndGV4dCcpXHJcbiAgICAgIC5hdHRyKCdmb250LWZhbWlseScsICgpID0+IHtcclxuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmxhYmVsICYmIGZvbnRSZW5kZXJpbmcubGFiZWwuZmFtaWx5KSB7XHJcbiAgICAgICAgICByZXR1cm4gZm9udFJlbmRlcmluZy5sYWJlbC5mYW1pbHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnaW5oZXJpdCc7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hdHRyKCdmb250LXdlaWdodCcsICgpID0+IHtcclxuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmxhYmVsICYmIGZvbnRSZW5kZXJpbmcubGFiZWwud2VpZ2h0KSB7XHJcbiAgICAgICAgICByZXR1cm4gZm9udFJlbmRlcmluZy5sYWJlbC53ZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnaW5oZXJpdCc7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5zZWxlY3RBbGwoJ3RzcGFuJylcclxuICAgICAgLmRhdGEoKGQpID0+IHtcclxuICAgICAgICBpZiAoZC5yIC8gNCA+IDQuNSkge1xyXG4gICAgICAgICAgLy8gc2hvdyB0ZXh0IGFuZCBudW1iZXIgdGhyZXNoaG9sZFxyXG4gICAgICAgICAgbGV0IGxhYmVsID0gKFxyXG4gICAgICAgICAgICBkLmRhdGEuZW50aXR5LmxhYmVsLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgICAgICsgZC5kYXRhLmVudGl0eS5sYWJlbC5zbGljZSgxKVxyXG4gICAgICAgICAgKS5zcGxpdCgvICsvZyk7XHJcbiAgICAgICAgICBpZiAobGFiZWwubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnNsaWNlKDAsIDMpO1xyXG4gICAgICAgICAgICBsYWJlbFsyXSArPSAn4oCmJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBsYWJlbDtcclxuICAgICAgICB9IGlmIChkLnIgLyA0ID4gMi41KSB7XHJcbiAgICAgICAgICAvLyBzaG93IHRleHQgdGhyZXNoaG9sZFxyXG4gICAgICAgICAgbGV0IGxhYmVsID0gKFxyXG4gICAgICAgICAgICBkLmRhdGEuZW50aXR5LmxhYmVsLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgICAgICsgZC5kYXRhLmVudGl0eS5sYWJlbC5zbGljZSgxKVxyXG4gICAgICAgICAgKS5zcGxpdCgvICsvZyk7XHJcbiAgICAgICAgICBpZiAobGFiZWwubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnNsaWNlKDAsIDMpO1xyXG4gICAgICAgICAgICBsYWJlbFsyXSArPSAn4oCmJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBsYWJlbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB9KVxyXG4gICAgICAuam9pbigndHNwYW4nKVxyXG4gICAgICAuYXR0cigneCcsIDApXHJcbiAgICAgIC5hdHRyKCd5JywgKGQsIGksIG5vZGVzKSA9PiBgJHtpIC0gKG5vZGVzLmxlbmd0aCArIDEpIC8gMiArIDAuOTd9ZW1gKVxyXG4gICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXHJcbiAgICAgIC50ZXh0KChkKSA9PiBkKTtcclxuXHJcbiAgICBsZWFmXHJcbiAgICAgIC5zZWxlY3QoJy5sYWJlbC1jb3VudCcpXHJcbiAgICAgIC5hdHRyKCdmb250LWZhbWlseScsICgpID0+IHtcclxuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIgJiYgZm9udFJlbmRlcmluZy5jb3VudGVyLmZhbWlseSkge1xyXG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcuY291bnRlci5mYW1pbHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnaW5oZXJpdCc7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hdHRyKCdmb250LXdlaWdodCcsICgpID0+IHtcclxuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIgJiYgZm9udFJlbmRlcmluZy5jb3VudGVyLndlaWdodCkge1xyXG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcuY291bnRlci53ZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnaW5oZXJpdCc7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJylcclxuICAgICAgLnRleHQoKGQpID0+IHtcclxuICAgICAgICBpZiAoZC5yIC8gNCA+IDIuNSkge1xyXG4gICAgICAgICAgLy8gc2hvdyB0ZXh0IGFuZCBudW1iZXIgdGhyZXNoaG9sZFxyXG4gICAgICAgICAgcmV0dXJuIGQuZGF0YS5jb3VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB9KVxyXG4gICAgICAuYXR0cigneScsIChkKSA9PiB7XHJcbiAgICAgICAgbGV0IGxhYmVsTGVuZ3RoID0gZC5kYXRhLmVudGl0eS5sYWJlbC5zcGxpdCgvICsvZyk7XHJcbiAgICAgICAgaWYgKGxhYmVsTGVuZ3RoLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgIGxhYmVsTGVuZ3RoID0gbGFiZWxMZW5ndGguc2xpY2UoMCwgMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBgJHtsYWJlbExlbmd0aC5sZW5ndGggLSAobGFiZWxMZW5ndGgubGVuZ3RoICsgMSkgLyAyICsgMC45N31lbWA7XHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgICBjb25zdCBnID0gbGVhZi5lbnRlcigpLmFwcGVuZCgnZycpO1xyXG5cclxuICAgIGcuYXR0cigndHJhbnNmb3JtJywgKGQpID0+IGB0cmFuc2xhdGUoJHtkLnggKyAxfSwke2QueSArIDF9KWApXHJcbiAgICAgIC5hdHRyKCdmb250LXNpemUnLCAoZCkgPT4ge1xyXG4gICAgICAgIGxldCBzaXplID0gZC5yIC8gNS41O1xyXG4gICAgICAgIHNpemUgKj0gMTtcclxuICAgICAgICBzaXplICs9IDE7XHJcbiAgICAgICAgcmV0dXJuIGAke01hdGgucm91bmQoc2l6ZSl9cHhgO1xyXG4gICAgICB9KVxyXG4gICAgICAuYXR0cignY3Vyc29yJywgJ3BvaW50ZXInKVxyXG4gICAgICAub24oJ2NsaWNrJywgKGV2ZW50LCBkKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbkNsaWNrKGQuZGF0YS5lbnRpdHkuaWQpO1xyXG4gICAgICB9KVxyXG4gICAgICAuYXR0cignaWQnLCAoZCkgPT4gYGdfJHtkLmRhdGEuZW50aXR5LmlkfWApXHJcbiAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXHJcbiAgICAgIC5hdHRyKCdpZCcsIChkKSA9PiB7IGQubGVhZlVpZCA9IGQuZGF0YS5lbnRpdHkuaWQ7IH0pXHJcbiAgICAgIC5hdHRyKCdyJywgMClcclxuICAgICAgLnRyYW5zaXRpb24odCkgLy8gZW50ZXIoKSB0cmFuc2l0aW9uIG9uIDxjaXJjbGU+XHJcbiAgICAgIC5hdHRyKCdmaWxsLW9wYWNpdHknLCAxKVxyXG4gICAgICAuYXR0cignZmlsbCcsIChkKSA9PiBjb2xvck1hcChkLmRhdGEuZW50aXR5LnR5cGVPZkVudGl0eSkpXHJcbiAgICAgIC5hdHRyKCdyJywgKGQpID0+IGQucik7XHJcblxyXG4gICAgZy5hcHBlbmQoJ2NsaXBQYXRoJylcclxuICAgICAgLmF0dHIoJ2lkJywgKGQpID0+IHsgZC5jbGlwVWlkID0gYENsaXAtJHtkLmRhdGEuZW50aXR5LmlkfWA7IH0pXHJcbiAgICAgIC5hcHBlbmQoJ3VzZScpXHJcbiAgICAgIC5hdHRyKCd4bGluazpocmVmJywgKGQpID0+IGQubGVhZlVpZC5ocmVmKTtcclxuXHJcbiAgICBnLmFwcGVuZCgndGV4dCcpXHJcbiAgICAgIC5hdHRyKCdmb250LWZhbWlseScsICgpID0+IHtcclxuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmxhYmVsICYmIGZvbnRSZW5kZXJpbmcubGFiZWwuZmFtaWx5KSB7XHJcbiAgICAgICAgICByZXR1cm4gZm9udFJlbmRlcmluZy5sYWJlbC5mYW1pbHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnaW5oZXJpdCc7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hdHRyKCdmb250LXdlaWdodCcsICgpID0+IHtcclxuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcubGFiZWwgJiYgZm9udFJlbmRlcmluZy5sYWJlbC53ZWlnaHQpIHtcclxuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmxhYmVsLndlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICdpbmhlcml0JztcclxuICAgICAgfSlcclxuICAgICAgLnNlbGVjdEFsbCgndHNwYW4nKVxyXG4gICAgICAuZGF0YSgoZCkgPT4ge1xyXG4gICAgICAgIGlmIChkLnIgLyA0ID4gNC41KSB7XHJcbiAgICAgICAgICAvLyBzaG93IHRleHQgYW5kIG51bWJlciB0aHJlc2hob2xkXHJcbiAgICAgICAgICBsZXQgbGFiZWwgPSAoXHJcbiAgICAgICAgICAgIGQuZGF0YS5lbnRpdHkubGFiZWwuY2hhckF0KDApLnRvVXBwZXJDYXNlKClcclxuICAgICAgICAgICAgKyBkLmRhdGEuZW50aXR5LmxhYmVsLnNsaWNlKDEpXHJcbiAgICAgICAgICApLnNwbGl0KC8gKy9nKTtcclxuICAgICAgICAgIGlmIChsYWJlbC5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgIGxhYmVsID0gbGFiZWwuc2xpY2UoMCwgMyk7XHJcbiAgICAgICAgICAgIGxhYmVsWzJdICs9ICfigKYnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xyXG4gICAgICAgIH0gaWYgKGQuciAvIDQgPiAyLjUpIHtcclxuICAgICAgICAgIC8vIHNob3cgdGV4dCB0aHJlc2hob2xkXHJcbiAgICAgICAgICBsZXQgbGFiZWwgPSAoXHJcbiAgICAgICAgICAgIGQuZGF0YS5lbnRpdHkubGFiZWwuY2hhckF0KDApLnRvVXBwZXJDYXNlKClcclxuICAgICAgICAgICAgKyBkLmRhdGEuZW50aXR5LmxhYmVsLnNsaWNlKDEpXHJcbiAgICAgICAgICApLnNwbGl0KC8gKy9nKTtcclxuICAgICAgICAgIGlmIChsYWJlbC5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgIGxhYmVsID0gbGFiZWwuc2xpY2UoMCwgMyk7XHJcbiAgICAgICAgICAgIGxhYmVsWzJdICs9ICfigKYnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5qb2luKCd0c3BhbicpXHJcbiAgICAgIC5hdHRyKCd4JywgMClcclxuICAgICAgLmF0dHIoJ3knLCAoZCwgaSwgbm9kZXMpID0+IGAke2kgLSAobm9kZXMubGVuZ3RoICsgMSkgLyAyICsgMC45N31lbWApXHJcbiAgICAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJylcclxuICAgICAgLnRleHQoKGQpID0+IGQpXHJcbiAgICAgIC5hdHRyKCdmaWxsLW9wYWNpdHknLCAwKVxyXG4gICAgICAudHJhbnNpdGlvbih0KSAvLyBlbnRlcigpIHRyYW5zaXRpb24gb24gPHRzcGFuPlxyXG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMSk7XHJcblxyXG4gICAgZy5hcHBlbmQoJ3RleHQnKSAvLyBDb3VudCBsYWJlbFxyXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGFiZWwtY291bnQnKVxyXG4gICAgICAuYXR0cignZm9udC1mYW1pbHknLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGZvbnRSZW5kZXJpbmcgJiYgZm9udFJlbmRlcmluZy5jb3VudGVyICYmIGZvbnRSZW5kZXJpbmcuY291bnRlci5mYW1pbHkpIHtcclxuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmNvdW50ZXIuZmFtaWx5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJ2luaGVyaXQnO1xyXG4gICAgICB9KVxyXG4gICAgICAuYXR0cignZm9udC13ZWlnaHQnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGZvbnRSZW5kZXJpbmcgJiYgZm9udFJlbmRlcmluZy5jb3VudGVyICYmIGZvbnRSZW5kZXJpbmcuY291bnRlci53ZWlnaHQpIHtcclxuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmNvdW50ZXIud2VpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJ2luaGVyaXQnO1xyXG4gICAgICB9KVxyXG4gICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXHJcbiAgICAgIC50ZXh0KChkKSA9PiB7XHJcbiAgICAgICAgaWYgKGQuciAvIDQgPiAyLjUpIHtcclxuICAgICAgICAgIC8vIHNob3cgdGV4dCBhbmQgbnVtYmVyIHRocmVzaGhvbGRcclxuICAgICAgICAgIHJldHVybiBkLmRhdGEuY291bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgICAgfSlcclxuICAgICAgLmF0dHIoJ3knLCAoZCkgPT4ge1xyXG4gICAgICAgIGxldCBsYWJlbExlbmd0aCA9IGQuZGF0YS5lbnRpdHkubGFiZWwuc3BsaXQoLyArL2cpO1xyXG4gICAgICAgIGlmIChsYWJlbExlbmd0aC5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICBsYWJlbExlbmd0aCA9IGxhYmVsTGVuZ3RoLnNsaWNlKDAsIDMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYCR7bGFiZWxMZW5ndGgubGVuZ3RoIC0gKGxhYmVsTGVuZ3RoLmxlbmd0aCArIDEpIC8gMiArIDAuOTd9ZW1gO1xyXG4gICAgICB9KVxyXG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMClcclxuICAgICAgLnRyYW5zaXRpb24odCkgLy8gZW50ZXIoKSB0cmFuc2l0aW9uIG9uIDx0ZXh0PlxyXG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMSk7XHJcblxyXG4gICAgbGVhZlxyXG4gICAgICAuZXhpdCgpIC8vIEVYSVQgQ1lDTEVcclxuICAgICAgLnJlbW92ZSgpO1xyXG5cclxuICAgIGlmIChzZWxlY3RlZCkge1xyXG4gICAgICBnLmZpbHRlcigoZCkgPT4gc2VsZWN0ZWQuaW5jbHVkZXMoZC5sZWFmVWlkKSkgLy8gYXBwZW5kICdYJyBpY29uIC8vIG9ubHkgZm9yIHNlbGVjdGVkIGJ1YmJsZXNcclxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcclxuICAgICAgICAuYXR0cignZCcsIGNsb3NlSWNvblBhdGgpXHJcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2Nsb3NlLWljb24nKVxyXG4gICAgICAgIC5hdHRyKCdmaWxsJywgKGQpID0+IHtcclxuICAgICAgICAgIGlmIChkLnIgLyA0ID4gMi41KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnI2ZmZic7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGQuciAvIDQgPiAzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgc2NhbGUoLjA4KSB0cmFuc2xhdGUoMCwgJHtkLnIgKiAxMCAtIDgwfSlgO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuICdzY2FsZSguMDgpJztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVtaXQoJ2QzZW5kJywgZGF0YSk7IC8vIGNvbW11bmljYXRlIGVuZCBvZiBkcmF3XHJcbiAgfVxyXG59XHJcbiJdfQ==