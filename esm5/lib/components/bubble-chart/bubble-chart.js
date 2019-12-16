/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// BUBBLECHART.ts
//---------------------------
import { Component, Input } from '@angular/core';
import * as d3 from 'd3';
/**
 * Interface for BubbleChartComponent's "data"
 *
 * \@property containerId (required)
 * \@property containerWidth (required)
 * \@property containerHeight (required)
 * \@property bubblesData (required)
 * \@property isForceSimulationEnabled (required)
 * \@property classes (optional)
 * \@property reset (optional)
 * @record
 */
export function IBubbleChartData() { }
if (false) {
    /**
     * unique identifier for the bubble-chart
     * @type {?}
     */
    IBubbleChartData.prototype.containerId;
    /**
     * total width for the bubble-chart
     * @type {?}
     */
    IBubbleChartData.prototype.width;
    /**
     * total height for the bubble-chart
     * @type {?}
     */
    IBubbleChartData.prototype.height;
    /**
     * data about the bubbles
     * @type {?}
     */
    IBubbleChartData.prototype.data;
    /**
     * additional css classes
     * @type {?|undefined}
     */
    IBubbleChartData.prototype.classes;
    /**
     * list of ID's of selected items
     * (selected items will render with a 'X' icon)
     * @type {?|undefined}
     */
    IBubbleChartData.prototype.selected;
    /**
     * Specify a list of typeOfEntity types (domain),
     * and a list of colors (range), which will be mapped together.
     * @type {?|undefined}
     */
    IBubbleChartData.prototype.colorMatch;
    /**
     * Define a max and min size for the bubbles
     * @type {?}
     */
    IBubbleChartData.prototype.sizeRange;
    /**
     * If defined, transition will be activated
     * and the value will be used as duration
     * @type {?|undefined}
     */
    IBubbleChartData.prototype.transition;
    /**
     * If set to false, stops the shuffling of the data
     * before rendering.
     * @type {?|undefined}
     */
    IBubbleChartData.prototype.shuffle;
    /**
     * Defines the font-family and the font-weight for each text group
     * @type {?|undefined}
     */
    IBubbleChartData.prototype.fontRendering;
    /**
     * expose the draw function outside of n7-frontend/components library
     * this is needed to redraw bubble-chart-component on command
     * @type {?|undefined}
     */
    IBubbleChartData.prototype.setDraw;
}
var BubbleChartComponent = /** @class */ (function () {
    function BubbleChartComponent() {
        var _this = this;
        this._loaded = false;
        this.draw = (/**
         * @return {?}
         */
        function () {
            var _a = _this.data, containerId = _a.containerId, data = _a.data, height = _a.height, width = _a.width, selected = _a.selected, transition = _a.transition, sizeRange = _a.sizeRange, colorMatch = _a.colorMatch, shuffle = _a.shuffle, fontRendering = _a.fontRendering;
            /** @type {?} */
            var closeIconPath = 'M -50,40 L-40,50 0,10 40,50 50,40 10,0 50,-40 40,-50 0,-10 -40,-50 -50,-40 -10,0 -50,40';
            /** @type {?} */
            var t = d3
                .transition()
                .duration(0);
            if (typeof transition == 'number') {
                t = d3
                    .transition()
                    .duration(transition)
                    .ease(d3.easeCubicInOut);
            }
            /** @type {?} */
            var colorMap = d3.scaleOrdinal()
                .domain(colorMatch ? colorMatch.domain : ['persona', 'luogo', 'organizzazione', 'cosa notevole'])
                .range(colorMatch ? colorMatch.range : d3.schemeTableau10);
            /** @type {?} */
            var sizeScale = d3 // map entity count to bubble size
                .scaleLinear()
                .domain(d3.extent(data, (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return +d.count; })))
                .range([3, d3.max(data, (/**
                 * @param {?} d
                 * @return {?}
                 */
                function (d) { return +d.count; }))]);
            /** @type {?} */
            var pack = (/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                return d3
                    .pack()
                    .size([width - 2, height - 2])
                    .padding(1.5)(d3.hierarchy({ children: data }).sum((/**
                 * @param {?} d
                 * @return {?}
                 */
                function (d) { return sizeScale(d.count); })));
            });
            /** @type {?} */
            var root = (/**
             * @return {?}
             */
            function () {
                if (typeof shuffle == 'undefined' || shuffle) {
                    return pack(d3.shuffle(data).slice(0, 20));
                }
                else { // if shuffle is set to false, skip the data shuffle
                    return pack(data);
                }
            });
            /** @type {?} */
            var svg = d3
                .select("#" + containerId)
                .attr("viewBox", [0, 0, width, height])
                .attr("font-family", "Verdana, Geneva, sans-serif")
                .attr("text-anchor", "middle");
            /** @type {?} */
            var leaf = svg.selectAll('g').data(root().leaves(), (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.data.entity.id; }));
            leaf
                .transition(t)
                .attr('transform', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return "translate(" + (d.x + 1) + "," + (d.y + 1) + ")"; }))
                .attr('font-size', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                /** @type {?} */
                var size = d.r / 5.5;
                size *= 1;
                size += 1;
                return Math.round(size) + 'px';
            }));
            leaf.selectAll('.close-icon').remove(); // clear all existing close icons
            if (selected) {
                leaf // render necessary close icons
                    .filter((/**
                 * @param {?} d
                 * @return {?}
                 */
                function (d) { return selected.includes(d.data.entity.id); }))
                    .append('path')
                    .attr('class', 'close-icon')
                    .attr('d', closeIconPath)
                    .attr('fill', '#fff')
                    .attr('transform', (/**
                 * @param {?} d
                 * @return {?}
                 */
                function (d) {
                    if (d.r / 4 > 3) {
                        return "scale(.08) translate(0, " + (d.r * 10 - 80) + ")";
                    }
                    return "scale(.08)";
                }));
            }
            leaf
                .select('circle')
                .transition(t)
                .attr('r', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.r; }));
            leaf
                .select('text')
                .attr('font-family', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                if (fontRendering && fontRendering.label && fontRendering.label.family) {
                    return fontRendering.label.family;
                }
                else {
                    return 'inherit';
                }
            }))
                .attr('font-weight', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                if (fontRendering && fontRendering.label && fontRendering.label.weight) {
                    return fontRendering.label.weight;
                }
                else {
                    return 'inherit';
                }
            }))
                .selectAll("tspan")
                .data((/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                if (d.r / 4 > 4.5) {
                    // show text and number threshhold
                    /** @type {?} */
                    var label = (d.data.entity.label.charAt(0).toUpperCase() +
                        d.data.entity.label.slice(1)).split(/ +/g);
                    if (label.length > 3) {
                        label = label.slice(0, 3);
                        label[2] += '…';
                    }
                    return label;
                }
                else if (d.r / 4 > 2.5) {
                    // show text threshhold
                    /** @type {?} */
                    var label = (d.data.entity.label.charAt(0).toUpperCase() +
                        d.data.entity.label.slice(1)).split(/ +/g);
                    if (label.length > 3) {
                        label = label.slice(0, 3);
                        label[2] += '…';
                    }
                    return label;
                }
                return '';
            }))
                .join('tspan')
                .attr("x", 0)
                .attr("y", (/**
             * @param {?} d
             * @param {?} i
             * @param {?} nodes
             * @return {?}
             */
            function (d, i, nodes) { return i - (nodes.length + 1) / 2 + .97 + "em"; }))
                .attr('fill', 'white')
                .text((/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d; }))
                .attr('fill-opacity', 0)
                .transition(t)
                .attr('fill-opacity', 1);
            leaf
                .select('.label-count')
                .attr('font-family', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                if (fontRendering && fontRendering.counter && fontRendering.counter.family) {
                    return fontRendering.counter.family;
                }
                else {
                    return 'inherit';
                }
            }))
                .attr('font-weight', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                if (fontRendering && fontRendering.counter && fontRendering.counter.weight) {
                    return fontRendering.counter.weight;
                }
                else {
                    return 'inherit';
                }
            }))
                .attr('fill', 'white')
                .text((/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                if (d.r / 4 > 2.5) {
                    // show text and number threshhold
                    return d.data.count;
                }
                else {
                    return '';
                }
            }))
                .attr('y', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                /** @type {?} */
                var labelLength = d.data.entity.label.split(/ +/g);
                if (labelLength.length > 3) {
                    labelLength = labelLength.slice(0, 3);
                }
                return labelLength.length - (labelLength.length + 1) / 2 + .97 + "em";
            }))
                .attr('fill-opacity', 0)
                .transition(t)
                .attr('fill-opacity', 1);
            /** @type {?} */
            var g = leaf.enter().append('g');
            g.attr('transform', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return "translate(" + (d.x + 1) + "," + (d.y + 1) + ")"; }))
                .attr('font-size', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                /** @type {?} */
                var size = d.r / 5.5;
                size *= 1;
                size += 1;
                return Math.round(size) + 'px';
            }))
                .attr('cursor', 'pointer')
                .on('click', (/**
             * @param {?} d
             * @param {?} i
             * @return {?}
             */
            function (d, i) {
                _this.onClick(d.data.entity.id);
            }))
                .append("circle")
                .attr("id", (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return (d.leafUid = d.data.entity.id); }))
                .attr('r', 0)
                .transition(t)
                .attr("fill-opacity", 0.7)
                .attr('fill', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return colorMap(d.data.entity.typeOfEntity); }))
                .attr("r", (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.r; }));
            g.append("clipPath")
                .attr("id", (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return (d.clipUid = 'Clip-' + d.data.entity.id); }))
                .append("use")
                .attr("xlink:href", (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.leafUid.href; }));
            g.append('text')
                .attr('font-family', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                if (fontRendering && fontRendering.label && fontRendering.label.family) {
                    return fontRendering.label.family;
                }
                else {
                    return 'inherit';
                }
            }))
                .attr('font-weight', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                if (fontRendering && fontRendering && fontRendering.label && fontRendering.label.weight) {
                    return fontRendering.label.weight;
                }
                else {
                    return 'inherit';
                }
            }))
                .selectAll("tspan")
                .data((/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                if (d.r / 4 > 4.5) {
                    // show text and number threshhold
                    /** @type {?} */
                    var label = (d.data.entity.label.charAt(0).toUpperCase() +
                        d.data.entity.label.slice(1)).split(/ +/g);
                    if (label.length > 3) {
                        label = label.slice(0, 3);
                        label[2] += '…';
                    }
                    return label;
                }
                else if (d.r / 4 > 2.5) {
                    // show text threshhold
                    /** @type {?} */
                    var label = (d.data.entity.label.charAt(0).toUpperCase() +
                        d.data.entity.label.slice(1)).split(/ +/g);
                    if (label.length > 3) {
                        label = label.slice(0, 3);
                        label[2] += '…';
                    }
                    return label;
                }
                return '';
            }))
                .join('tspan')
                .attr("x", 0)
                .attr("y", (/**
             * @param {?} d
             * @param {?} i
             * @param {?} nodes
             * @return {?}
             */
            function (d, i, nodes) { return i - (nodes.length + 1) / 2 + .97 + "em"; }))
                .attr('fill', 'white')
                .text((/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d; }))
                .attr('fill-opacity', 0)
                .transition(t)
                .attr('fill-opacity', 1);
            g.append('text') // Count label
                .attr('class', 'label-count')
                .attr('font-family', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                if (fontRendering && fontRendering.counter && fontRendering.counter.family) {
                    return fontRendering.counter.family;
                }
                else {
                    return 'inherit';
                }
            }))
                .attr('font-weight', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                if (fontRendering && fontRendering.counter && fontRendering.counter.weight) {
                    return fontRendering.counter.weight;
                }
                else {
                    return 'inherit';
                }
            }))
                .attr('fill', 'white')
                .text((/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                if (d.r / 4 > 2.5) {
                    // show text and number threshhold
                    return d.data.count;
                }
                else {
                    return '';
                }
            }))
                .attr('y', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                /** @type {?} */
                var labelLength = d.data.entity.label.split(/ +/g);
                if (labelLength.length > 3) {
                    labelLength = labelLength.slice(0, 3);
                }
                return labelLength.length - (labelLength.length + 1) / 2 + .97 + "em";
            }))
                .attr('fill-opacity', 0)
                .transition(t)
                .attr('fill-opacity', 1);
            leaf
                .exit() // EXIT CYCLE
                .remove();
            if (selected) {
                g.filter((/**
                 * @param {?} d
                 * @return {?}
                 */
                function (d) { return selected.includes(d.leafUid); })) // append 'X' icon // only for selected bubbles
                    .append('path')
                    .attr('d', closeIconPath)
                    .attr('class', 'close-icon')
                    .attr('fill', (/**
                 * @param {?} d
                 * @return {?}
                 */
                function (d) {
                    if (d.r / 4 > 2.5) {
                        return '#fff';
                    }
                    return 'transparent';
                }))
                    .attr('transform', (/**
                 * @param {?} d
                 * @return {?}
                 */
                function (d) {
                    if (d.r / 4 > 3) {
                        return "scale(.08) translate(0, " + (d.r * 10 - 80) + ")";
                    }
                    return "scale(.08)";
                }));
            }
            _this.emit('d3end', data); // communicate end of draw
        });
    }
    /**
     * @return {?}
     */
    BubbleChartComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /*
         Waits for the dom to be loaded, then fires the draw function
         that renders the chart.
        */
        if (!this.data) {
            return;
        }
        else {
            if (this._loaded)
                return;
            this._loaded = true;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.draw();
                if (_this.data && _this.data.setDraw) {
                    _this.data.setDraw(_this.draw);
                }
            }));
        }
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    BubbleChartComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
        this.draw();
    };
    BubbleChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-bubble-chart',
                    template: "<div *ngIf=\"data\" class=\"n7-bubble-chart {{ data.classes || '' }}\">\n    <svg #bubbleChart id=\"{{data.containerId}}\"></svg>\n</div>"
                }] }
    ];
    BubbleChartComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return BubbleChartComponent;
}());
export { BubbleChartComponent };
if (false) {
    /** @type {?} */
    BubbleChartComponent.prototype.data;
    /** @type {?} */
    BubbleChartComponent.prototype.emit;
    /**
     * @type {?}
     * @private
     */
    BubbleChartComponent.prototype._loaded;
    /** @type {?} */
    BubbleChartComponent.prototype.draw;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQvYnViYmxlLWNoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUE7Ozs7Ozs7Ozs7Ozs7QUFheEIsc0NBbUVDOzs7Ozs7SUEvREMsdUNBQW9COzs7OztJQUlwQixpQ0FBYzs7Ozs7SUFJZCxrQ0FBZTs7Ozs7SUFJZixnQ0FBVTs7Ozs7SUFJVixtQ0FBaUI7Ozs7OztJQUtqQixvQ0FBbUI7Ozs7OztJQUtuQixzQ0FHQzs7Ozs7SUFJRCxxQ0FBMkI7Ozs7OztJQUszQixzQ0FBbUI7Ozs7OztJQUtuQixtQ0FBaUI7Ozs7O0lBSWpCLHlDQVNDOzs7Ozs7SUFNRCxtQ0FBYzs7QUFHaEI7SUFBQTtRQUFBLGlCQXVWQztRQWhWUyxZQUFPLEdBQVksS0FBSyxDQUFDO1FBMkJqQyxTQUFJOzs7UUFBRztZQUNDLElBQUEsZUFLTyxFQUpYLDRCQUFXLEVBQUUsY0FBSSxFQUFFLGtCQUFNLEVBQ3pCLGdCQUFLLEVBQUUsc0JBQVEsRUFBRSwwQkFBVSxFQUMzQix3QkFBUyxFQUFFLDBCQUFVLEVBQUUsb0JBQU8sRUFDOUIsZ0NBQ1c7O2dCQUNQLGFBQWEsR0FBRyx5RkFBeUY7O2dCQUUzRyxDQUFDLEdBQUcsRUFBRTtpQkFDUCxVQUFVLEVBQUU7aUJBQ1osUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksT0FBTyxVQUFVLElBQUksUUFBUSxFQUFFO2dCQUNqQyxDQUFDLEdBQUcsRUFBRTtxQkFDSCxVQUFVLEVBQUU7cUJBQ1osUUFBUSxDQUFDLFVBQVUsQ0FBQztxQkFDcEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENB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QU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsVUFBVTs7O1lBQUM7Z0JBQ1QsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNaLElBQUksS0FBSSxDQUFDLElBQUksSUFBSSxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDbEMsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFBO2lCQUM3QjtZQUNILENBQUMsRUFBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDOzs7OztJQUVELHNDQUFPOzs7O0lBQVAsVUFBUSxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDYixDQUFDOztnQkFoQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLHFKQUFrQztpQkFDbkM7Ozt1QkFFRSxLQUFLO3VCQUNMLEtBQUs7O0lBaVZSLDJCQUFDO0NBQUEsQUF2VkQsSUF1VkM7U0FuVlksb0JBQW9COzs7SUFDL0Isb0NBQWdDOztJQUNoQyxvQ0FBbUI7Ozs7O0lBQ25CLHVDQUFpQzs7SUEyQmpDLG9DQW9UQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBCVUJCTEVDSEFSVC50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBCdWJibGVDaGFydENvbXBvbmVudCdzIFwiZGF0YVwiXG4gKiBcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJJZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY29udGFpbmVyV2lkdGggKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNvbnRhaW5lckhlaWdodCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgYnViYmxlc0RhdGEgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGlzRm9yY2VTaW11bGF0aW9uRW5hYmxlZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcmVzZXQgKG9wdGlvbmFsKVxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUJ1YmJsZUNoYXJ0RGF0YSB7XG4gIC8qKlxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGJ1YmJsZS1jaGFydFxuICAgKi9cbiAgY29udGFpbmVySWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIHRvdGFsIHdpZHRoIGZvciB0aGUgYnViYmxlLWNoYXJ0XG4gICAqL1xuICB3aWR0aDogbnVtYmVyO1xuICAvKipcbiAgICogdG90YWwgaGVpZ2h0IGZvciB0aGUgYnViYmxlLWNoYXJ0XG4gICAqL1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIGRhdGEgYWJvdXQgdGhlIGJ1YmJsZXNcbiAgICovXG4gIGRhdGE6IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgY3NzIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBsaXN0IG9mIElEJ3Mgb2Ygc2VsZWN0ZWQgaXRlbXNcbiAgICogKHNlbGVjdGVkIGl0ZW1zIHdpbGwgcmVuZGVyIHdpdGggYSAnWCcgaWNvbilcbiAgICovXG4gIHNlbGVjdGVkPzogc3RyaW5nW11cbiAgLyoqXG4gICAqIFNwZWNpZnkgYSBsaXN0IG9mIHR5cGVPZkVudGl0eSB0eXBlcyAoZG9tYWluKSxcbiAgICogYW5kIGEgbGlzdCBvZiBjb2xvcnMgKHJhbmdlKSwgd2hpY2ggd2lsbCBiZSBtYXBwZWQgdG9nZXRoZXIuXG4gICAqL1xuICBjb2xvck1hdGNoPzoge1xuICAgIGRvbWFpbjogc3RyaW5nW10sXG4gICAgcmFuZ2U6IHN0cmluZ1tdLFxuICB9XG4gIC8qKlxuICAgKiBEZWZpbmUgYSBtYXggYW5kIG1pbiBzaXplIGZvciB0aGUgYnViYmxlc1xuICAgKi9cbiAgc2l6ZVJhbmdlOiBbbnVtYmVyLCBudW1iZXJdXG4gIC8qKlxuICAgKiBJZiBkZWZpbmVkLCB0cmFuc2l0aW9uIHdpbGwgYmUgYWN0aXZhdGVkXG4gICAqIGFuZCB0aGUgdmFsdWUgd2lsbCBiZSB1c2VkIGFzIGR1cmF0aW9uXG4gICAqL1xuICB0cmFuc2l0aW9uPzogbnVtYmVyXG4gIC8qKlxuICAgKiBJZiBzZXQgdG8gZmFsc2UsIHN0b3BzIHRoZSBzaHVmZmxpbmcgb2YgdGhlIGRhdGFcbiAgICogYmVmb3JlIHJlbmRlcmluZy5cbiAgICovXG4gIHNodWZmbGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBmb250LWZhbWlseSBhbmQgdGhlIGZvbnQtd2VpZ2h0IGZvciBlYWNoIHRleHQgZ3JvdXBcbiAgICovXG4gIGZvbnRSZW5kZXJpbmc/OiB7XG4gICAgbGFiZWw/OiB7XG4gICAgICBmYW1pbHk/OiBzdHJpbmcsXG4gICAgICB3ZWlnaHQ/OiBzdHJpbmcsXG4gICAgfSxcbiAgICBjb3VudGVyPzoge1xuICAgICAgZmFtaWx5Pzogc3RyaW5nLFxuICAgICAgd2VpZ2h0Pzogc3RyaW5nLFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBleHBvc2UgdGhlIGRyYXcgZnVuY3Rpb24gb3V0c2lkZSBvZiBuNy1mcm9udGVuZC9jb21wb25lbnRzIGxpYnJhcnlcbiAgICogdGhpcyBpcyBuZWVkZWQgdG8gcmVkcmF3IGJ1YmJsZS1jaGFydC1jb21wb25lbnQgb24gY29tbWFuZFxuICAgKi9cbiAgc2V0RHJhdz86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctYnViYmxlLWNoYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1YmJsZS1jaGFydC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBCdWJibGVDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuICBASW5wdXQoKSBkYXRhOiBJQnViYmxlQ2hhcnREYXRhO1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG4gIHByaXZhdGUgX2xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICAvKlxuICAgICBXYWl0cyBmb3IgdGhlIGRvbSB0byBiZSBsb2FkZWQsIHRoZW4gZmlyZXMgdGhlIGRyYXcgZnVuY3Rpb25cbiAgICAgdGhhdCByZW5kZXJzIHRoZSBjaGFydC5cbiAgICAqL1xuICAgIGlmICghdGhpcy5kYXRhKSB7XG4gICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xuICAgICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuc2V0RHJhdykge1xuICAgICAgICAgIHRoaXMuZGF0YS5zZXREcmF3KHRoaXMuZHJhdylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgICB0aGlzLmRyYXcoKVxuICB9XG5cbiAgZHJhdyA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBjb250YWluZXJJZCwgZGF0YSwgaGVpZ2h0LFxuICAgICAgd2lkdGgsIHNlbGVjdGVkLCB0cmFuc2l0aW9uLFxuICAgICAgc2l6ZVJhbmdlLCBjb2xvck1hdGNoLCBzaHVmZmxlLFxuICAgICAgZm9udFJlbmRlcmluZ1xuICAgIH0gPSB0aGlzLmRhdGFcbiAgICBjb25zdCBjbG9zZUljb25QYXRoID0gJ00gLTUwLDQwIEwtNDAsNTAgMCwxMCA0MCw1MCA1MCw0MCAxMCwwIDUwLC00MCA0MCwtNTAgMCwtMTAgLTQwLC01MCAtNTAsLTQwIC0xMCwwIC01MCw0MCdcblxuICAgIGxldCB0ID0gZDNcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbigwKVxuICAgIGlmICh0eXBlb2YgdHJhbnNpdGlvbiA9PSAnbnVtYmVyJykge1xuICAgICAgdCA9IGQzXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKHRyYW5zaXRpb24pXG4gICAgICAgIC5lYXNlKGQzLmVhc2VDdWJpY0luT3V0KTtcbiAgICB9XG5cbiAgICBjb25zdCBjb2xvck1hcCA9IGQzLnNjYWxlT3JkaW5hbCgpXG4gICAgICAuZG9tYWluKGNvbG9yTWF0Y2ggPyBjb2xvck1hdGNoLmRvbWFpbiA6IFsncGVyc29uYScsICdsdW9nbycsICdvcmdhbml6emF6aW9uZScsICdjb3NhIG5vdGV2b2xlJ10pXG4gICAgICAucmFuZ2UoY29sb3JNYXRjaCA/IGNvbG9yTWF0Y2gucmFuZ2UgOiBkMy5zY2hlbWVUYWJsZWF1MTApXG5cbiAgICBsZXQgc2l6ZVNjYWxlID0gZDMgLy8gbWFwIGVudGl0eSBjb3VudCB0byBidWJibGUgc2l6ZVxuICAgICAgLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oZDMuZXh0ZW50KGRhdGEsIGQgPT4gK2QuY291bnQpKVxuICAgICAgLnJhbmdlKFszLCBkMy5tYXgoZGF0YSwgZCA9PiArZC5jb3VudCldKTtcblxuICAgIGNvbnN0IHBhY2sgPSBkYXRhID0+XG4gICAgICBkM1xuICAgICAgICAucGFjaygpXG4gICAgICAgIC5zaXplKFt3aWR0aCAtIDIsIGhlaWdodCAtIDJdKVxuICAgICAgICAucGFkZGluZygxLjUpKFxuICAgICAgICAgIGQzLmhpZXJhcmNoeSh7IGNoaWxkcmVuOiBkYXRhIH0pLnN1bShkID0+IHNpemVTY2FsZShkLmNvdW50KSlcbiAgICAgICAgKTtcblxuICAgIGNvbnN0IHJvb3QgPSAoKSA9PiB7IC8vIGlmIHNodWZmbGUgaXMgdW5kZWZpbmVkIG9yIHRydWUsIHNodWZmbGUgdGhlIGRhdGFcbiAgICAgIGlmICh0eXBlb2Ygc2h1ZmZsZSA9PSAndW5kZWZpbmVkJyB8fCBzaHVmZmxlKSB7XG4gICAgICAgIHJldHVybiBwYWNrKGQzLnNodWZmbGUoZGF0YSkuc2xpY2UoMCwgMjApKVxuICAgICAgfSBlbHNlIHsgLy8gaWYgc2h1ZmZsZSBpcyBzZXQgdG8gZmFsc2UsIHNraXAgdGhlIGRhdGEgc2h1ZmZsZVxuICAgICAgICByZXR1cm4gcGFjayhkYXRhKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN2ZyA9IGQzXG4gICAgICAuc2VsZWN0KGAjJHtjb250YWluZXJJZH1gKVxuICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsIFswLCAwLCB3aWR0aCwgaGVpZ2h0XSlcbiAgICAgIC5hdHRyKFwiZm9udC1mYW1pbHlcIiwgXCJWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWZcIilcbiAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIik7XG5cbiAgICBjb25zdCBsZWFmID0gc3ZnLnNlbGVjdEFsbCgnZycpLmRhdGEocm9vdCgpLmxlYXZlcygpLCBkID0+IGQuZGF0YS5lbnRpdHkuaWQpO1xuICAgIGxlYWZcbiAgICAgIC50cmFuc2l0aW9uKHQpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC54ICsgMX0sJHtkLnkgKyAxfSlgKVxuICAgICAgLmF0dHIoJ2ZvbnQtc2l6ZScsIGQgPT4ge1xuICAgICAgICB2YXIgc2l6ZSA9IGQuciAvIDUuNTtcbiAgICAgICAgc2l6ZSAqPSAxO1xuICAgICAgICBzaXplICs9IDE7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHNpemUpICsgJ3B4JztcbiAgICAgIH0pXG5cbiAgICBsZWFmLnNlbGVjdEFsbCgnLmNsb3NlLWljb24nKS5yZW1vdmUoKSAvLyBjbGVhciBhbGwgZXhpc3RpbmcgY2xvc2UgaWNvbnNcbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIGxlYWYgLy8gcmVuZGVyIG5lY2Vzc2FyeSBjbG9zZSBpY29uc1xuICAgICAgICAuZmlsdGVyKGQgPT4gc2VsZWN0ZWQuaW5jbHVkZXMoZC5kYXRhLmVudGl0eS5pZCkpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnY2xvc2UtaWNvbicpXG4gICAgICAgIC5hdHRyKCdkJywgY2xvc2VJY29uUGF0aClcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnI2ZmZicpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IHtcbiAgICAgICAgICBpZiAoZC5yIC8gNCA+IDMpIHtcbiAgICAgICAgICAgIHJldHVybiBgc2NhbGUoLjA4KSB0cmFuc2xhdGUoMCwgJHtkLnIgKiAxMCAtIDgwfSlgO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYHNjYWxlKC4wOClgO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsZWFmXG4gICAgICAuc2VsZWN0KCdjaXJjbGUnKVxuICAgICAgLnRyYW5zaXRpb24odClcbiAgICAgIC5hdHRyKCdyJywgZCA9PiBkLnIpO1xuXG4gICAgbGVhZlxuICAgICAgLnNlbGVjdCgndGV4dCcpXG4gICAgICAuYXR0cignZm9udC1mYW1pbHknLCBkID0+IHtcbiAgICAgICAgaWYgKGZvbnRSZW5kZXJpbmcgJiYgZm9udFJlbmRlcmluZy5sYWJlbCAmJiBmb250UmVuZGVyaW5nLmxhYmVsLmZhbWlseSkge1xuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmxhYmVsLmZhbWlseVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAnaW5oZXJpdCdcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5hdHRyKCdmb250LXdlaWdodCcsIGQgPT4ge1xuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmxhYmVsICYmIGZvbnRSZW5kZXJpbmcubGFiZWwud2VpZ2h0KSB7XG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcubGFiZWwud2VpZ2h0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICdpbmhlcml0J1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnNlbGVjdEFsbChcInRzcGFuXCIpXG4gICAgICAuZGF0YShkID0+IHtcbiAgICAgICAgaWYgKGQuciAvIDQgPiA0LjUpIHtcbiAgICAgICAgICAvLyBzaG93IHRleHQgYW5kIG51bWJlciB0aHJlc2hob2xkXG4gICAgICAgICAgbGV0IGxhYmVsID0gKFxuICAgICAgICAgICAgZC5kYXRhLmVudGl0eS5sYWJlbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgICBkLmRhdGEuZW50aXR5LmxhYmVsLnNsaWNlKDEpXG4gICAgICAgICAgKS5zcGxpdCgvICsvZyk7XG4gICAgICAgICAgaWYgKGxhYmVsLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgIGxhYmVsID0gbGFiZWwuc2xpY2UoMCwgMyk7XG4gICAgICAgICAgICBsYWJlbFsyXSArPSAn4oCmJztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICB9IGVsc2UgaWYgKGQuciAvIDQgPiAyLjUpIHtcbiAgICAgICAgICAvLyBzaG93IHRleHQgdGhyZXNoaG9sZFxuICAgICAgICAgIGxldCBsYWJlbCA9IChcbiAgICAgICAgICAgIGQuZGF0YS5lbnRpdHkubGFiZWwuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgK1xuICAgICAgICAgICAgZC5kYXRhLmVudGl0eS5sYWJlbC5zbGljZSgxKVxuICAgICAgICAgICkuc3BsaXQoLyArL2cpO1xuICAgICAgICAgIGlmIChsYWJlbC5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnNsaWNlKDAsIDMpO1xuICAgICAgICAgICAgbGFiZWxbMl0gKz0gJ+KApic7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJ3RzcGFuJylcbiAgICAgIC5hdHRyKFwieFwiLCAwKVxuICAgICAgLmF0dHIoXCJ5XCIsIChkLCBpLCBub2RlcykgPT4gYCR7aSAtIChub2Rlcy5sZW5ndGggKyAxKSAvIDIgKyAuOTd9ZW1gKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgICAgLnRleHQoZCA9PiBkKVxuICAgICAgLmF0dHIoJ2ZpbGwtb3BhY2l0eScsIDApXG4gICAgICAudHJhbnNpdGlvbih0KVxuICAgICAgLmF0dHIoJ2ZpbGwtb3BhY2l0eScsIDEpO1xuXG4gICAgbGVhZlxuICAgICAgLnNlbGVjdCgnLmxhYmVsLWNvdW50JylcbiAgICAgIC5hdHRyKCdmb250LWZhbWlseScsIGQgPT4ge1xuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIgJiYgZm9udFJlbmRlcmluZy5jb3VudGVyLmZhbWlseSkge1xuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmNvdW50ZXIuZmFtaWx5XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICdpbmhlcml0J1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2ZvbnQtd2VpZ2h0JywgZCA9PiB7XG4gICAgICAgIGlmIChmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcuY291bnRlciAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIud2VpZ2h0KSB7XG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcuY291bnRlci53ZWlnaHRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gJ2luaGVyaXQnXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXG4gICAgICAudGV4dChkID0+IHtcbiAgICAgICAgaWYgKGQuciAvIDQgPiAyLjUpIHtcbiAgICAgICAgICAvLyBzaG93IHRleHQgYW5kIG51bWJlciB0aHJlc2hob2xkXG4gICAgICAgICAgcmV0dXJuIGQuZGF0YS5jb3VudFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5hdHRyKCd5JywgZCA9PiB7XG4gICAgICAgIGxldCBsYWJlbExlbmd0aCA9IGQuZGF0YS5lbnRpdHkubGFiZWwuc3BsaXQoLyArL2cpXG4gICAgICAgIGlmIChsYWJlbExlbmd0aC5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgbGFiZWxMZW5ndGggPSBsYWJlbExlbmd0aC5zbGljZSgwLCAzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7bGFiZWxMZW5ndGgubGVuZ3RoIC0gKGxhYmVsTGVuZ3RoLmxlbmd0aCArIDEpIC8gMiArIC45N31lbWBcbiAgICAgIH0pXG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMClcbiAgICAgIC50cmFuc2l0aW9uKHQpXG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMSk7XG5cblxuICAgIGNvbnN0IGcgPSBsZWFmLmVudGVyKCkuYXBwZW5kKCdnJyk7XG5cbiAgICBnLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueCArIDF9LCR7ZC55ICsgMX0pYClcbiAgICAgIC5hdHRyKCdmb250LXNpemUnLCBkID0+IHtcbiAgICAgICAgdmFyIHNpemUgPSBkLnIgLyA1LjU7XG4gICAgICAgIHNpemUgKj0gMTtcbiAgICAgICAgc2l6ZSArPSAxO1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChzaXplKSArICdweCc7XG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2N1cnNvcicsICdwb2ludGVyJylcbiAgICAgIC5vbignY2xpY2snLCAoZCwgaSkgPT4ge1xuICAgICAgICB0aGlzLm9uQ2xpY2soZC5kYXRhLmVudGl0eS5pZCk7XG4gICAgICB9KVxuICAgICAgLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgLmF0dHIoXCJpZFwiLCBkID0+IChkLmxlYWZVaWQgPSBkLmRhdGEuZW50aXR5LmlkKSlcbiAgICAgIC5hdHRyKCdyJywgMClcbiAgICAgIC50cmFuc2l0aW9uKHQpXG4gICAgICAuYXR0cihcImZpbGwtb3BhY2l0eVwiLCAwLjcpXG4gICAgICAuYXR0cignZmlsbCcsIGQgPT4gY29sb3JNYXAoZC5kYXRhLmVudGl0eS50eXBlT2ZFbnRpdHkpKVxuICAgICAgLmF0dHIoXCJyXCIsIGQgPT4gZC5yKTtcblxuICAgIGcuYXBwZW5kKFwiY2xpcFBhdGhcIilcbiAgICAgIC5hdHRyKFwiaWRcIiwgZCA9PiAoZC5jbGlwVWlkID0gJ0NsaXAtJyArIGQuZGF0YS5lbnRpdHkuaWQpKVxuICAgICAgLmFwcGVuZChcInVzZVwiKVxuICAgICAgLmF0dHIoXCJ4bGluazpocmVmXCIsIGQgPT4gZC5sZWFmVWlkLmhyZWYpO1xuXG4gICAgZy5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2ZvbnQtZmFtaWx5JywgZCA9PiB7XG4gICAgICAgIGlmIChmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcubGFiZWwgJiYgZm9udFJlbmRlcmluZy5sYWJlbC5mYW1pbHkpIHtcbiAgICAgICAgICByZXR1cm4gZm9udFJlbmRlcmluZy5sYWJlbC5mYW1pbHlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gJ2luaGVyaXQnXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuYXR0cignZm9udC13ZWlnaHQnLCBkID0+IHtcbiAgICAgICAgaWYgKGZvbnRSZW5kZXJpbmcgJiYgZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmxhYmVsICYmIGZvbnRSZW5kZXJpbmcubGFiZWwud2VpZ2h0KSB7XG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcubGFiZWwud2VpZ2h0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICdpbmhlcml0J1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnNlbGVjdEFsbChcInRzcGFuXCIpXG4gICAgICAuZGF0YShkID0+IHtcbiAgICAgICAgaWYgKGQuciAvIDQgPiA0LjUpIHtcbiAgICAgICAgICAvLyBzaG93IHRleHQgYW5kIG51bWJlciB0aHJlc2hob2xkXG4gICAgICAgICAgbGV0IGxhYmVsID0gKFxuICAgICAgICAgICAgZC5kYXRhLmVudGl0eS5sYWJlbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgICBkLmRhdGEuZW50aXR5LmxhYmVsLnNsaWNlKDEpXG4gICAgICAgICAgKS5zcGxpdCgvICsvZyk7XG4gICAgICAgICAgaWYgKGxhYmVsLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgIGxhYmVsID0gbGFiZWwuc2xpY2UoMCwgMyk7XG4gICAgICAgICAgICBsYWJlbFsyXSArPSAn4oCmJztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICB9IGVsc2UgaWYgKGQuciAvIDQgPiAyLjUpIHtcbiAgICAgICAgICAvLyBzaG93IHRleHQgdGhyZXNoaG9sZFxuICAgICAgICAgIGxldCBsYWJlbCA9IChcbiAgICAgICAgICAgIGQuZGF0YS5lbnRpdHkubGFiZWwuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgK1xuICAgICAgICAgICAgZC5kYXRhLmVudGl0eS5sYWJlbC5zbGljZSgxKVxuICAgICAgICAgICkuc3BsaXQoLyArL2cpO1xuICAgICAgICAgIGlmIChsYWJlbC5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnNsaWNlKDAsIDMpO1xuICAgICAgICAgICAgbGFiZWxbMl0gKz0gJ+KApic7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJ3RzcGFuJylcbiAgICAgIC5hdHRyKFwieFwiLCAwKVxuICAgICAgLmF0dHIoXCJ5XCIsIChkLCBpLCBub2RlcykgPT4gYCR7aSAtIChub2Rlcy5sZW5ndGggKyAxKSAvIDIgKyAuOTd9ZW1gKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgICAgLnRleHQoZCA9PiBkKVxuICAgICAgLmF0dHIoJ2ZpbGwtb3BhY2l0eScsIDApXG4gICAgICAudHJhbnNpdGlvbih0KVxuICAgICAgLmF0dHIoJ2ZpbGwtb3BhY2l0eScsIDEpO1xuXG4gICAgZy5hcHBlbmQoJ3RleHQnKSAvLyBDb3VudCBsYWJlbFxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xhYmVsLWNvdW50JylcbiAgICAgIC5hdHRyKCdmb250LWZhbWlseScsIGQgPT4ge1xuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIgJiYgZm9udFJlbmRlcmluZy5jb3VudGVyLmZhbWlseSkge1xuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmNvdW50ZXIuZmFtaWx5XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICdpbmhlcml0J1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2ZvbnQtd2VpZ2h0JywgZCA9PiB7XG4gICAgICAgIGlmIChmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcuY291bnRlciAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIud2VpZ2h0KSB7XG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcuY291bnRlci53ZWlnaHRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gJ2luaGVyaXQnXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXG4gICAgICAudGV4dChkID0+IHtcbiAgICAgICAgaWYgKGQuciAvIDQgPiAyLjUpIHtcbiAgICAgICAgICAvLyBzaG93IHRleHQgYW5kIG51bWJlciB0aHJlc2hob2xkXG4gICAgICAgICAgcmV0dXJuIGQuZGF0YS5jb3VudFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5hdHRyKCd5JywgZCA9PiB7XG4gICAgICAgIGxldCBsYWJlbExlbmd0aCA9IGQuZGF0YS5lbnRpdHkubGFiZWwuc3BsaXQoLyArL2cpXG4gICAgICAgIGlmIChsYWJlbExlbmd0aC5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgbGFiZWxMZW5ndGggPSBsYWJlbExlbmd0aC5zbGljZSgwLCAzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7bGFiZWxMZW5ndGgubGVuZ3RoIC0gKGxhYmVsTGVuZ3RoLmxlbmd0aCArIDEpIC8gMiArIC45N31lbWBcbiAgICAgIH0pXG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMClcbiAgICAgIC50cmFuc2l0aW9uKHQpXG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMSk7XG5cbiAgICBsZWFmXG4gICAgICAuZXhpdCgpIC8vIEVYSVQgQ1lDTEVcbiAgICAgIC5yZW1vdmUoKTtcblxuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgZy5maWx0ZXIoZCA9PiBzZWxlY3RlZC5pbmNsdWRlcyhkLmxlYWZVaWQpKSAvLyBhcHBlbmQgJ1gnIGljb24gLy8gb25seSBmb3Igc2VsZWN0ZWQgYnViYmxlc1xuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmF0dHIoJ2QnLCBjbG9zZUljb25QYXRoKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnY2xvc2UtaWNvbicpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgZCA9PiB7XG4gICAgICAgICAgaWYgKGQuciAvIDQgPiAyLjUpIHtcbiAgICAgICAgICAgIHJldHVybiAnI2ZmZic7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAndHJhbnNwYXJlbnQnO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiB7XG4gICAgICAgICAgaWYgKGQuciAvIDQgPiAzKSB7XG4gICAgICAgICAgICByZXR1cm4gYHNjYWxlKC4wOCkgdHJhbnNsYXRlKDAsICR7ZC5yICogMTAgLSA4MH0pYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGBzY2FsZSguMDgpYDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdkM2VuZCcsIGRhdGEpIC8vIGNvbW11bmljYXRlIGVuZCBvZiBkcmF3XG4gIH1cbn0iXX0=