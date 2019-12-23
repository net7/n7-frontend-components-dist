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
export class BubbleChartComponent {
    constructor() {
        this._loaded = false;
        this.draw = (/**
         * @return {?}
         */
        () => {
            const { containerId, data, height, width, selected, transition, sizeRange, colorMatch, shuffle, fontRendering } = this.data;
            /** @type {?} */
            const closeIconPath = 'M -50,40 L-40,50 0,10 40,50 50,40 10,0 50,-40 40,-50 0,-10 -40,-50 -50,-40 -10,0 -50,40';
            /** @type {?} */
            let t = d3
                .transition()
                .duration(0);
            if (typeof transition == 'number') {
                t = d3
                    .transition()
                    .duration(transition)
                    .ease(d3.easeCubicInOut);
            }
            /** @type {?} */
            const colorMap = d3.scaleOrdinal()
                .domain(colorMatch ? colorMatch.domain : ['persona', 'luogo', 'organizzazione', 'cosa notevole'])
                .range(colorMatch ? colorMatch.range : d3.schemeTableau10);
            /** @type {?} */
            let sizeScale = d3 // map entity count to bubble size
                .scaleLinear()
                .domain([1, d3.max(data, (/**
                 * @param {?} d
                 * @return {?}
                 */
                d => +d.count))])
                .range([3, d3.max(data, (/**
                 * @param {?} d
                 * @return {?}
                 */
                d => +d.count))]);
            /** @type {?} */
            const pack = (/**
             * @param {?} data
             * @return {?}
             */
            data => d3
                .pack()
                .size([width - 2, height - 2])
                .padding(1.5)(d3.hierarchy({ children: data }).sum((/**
             * @param {?} d
             * @return {?}
             */
            d => sizeScale(d.count)))));
            /** @type {?} */
            const root = (/**
             * @return {?}
             */
            () => {
                if (typeof shuffle == 'undefined' || shuffle) {
                    /** @type {?} */
                    let shuffData = data.slice() // do not modify the source data!
                    ;
                    return pack(d3.shuffle(shuffData));
                }
                else { // if shuffle is set to false, skip the data shuffle
                    return pack(data);
                }
            });
            /** @type {?} */
            const svg = d3
                .select(`#${containerId}`)
                .attr("viewBox", [0, 0, width, height])
                .attr("font-family", "Verdana, Geneva, sans-serif")
                .attr("text-anchor", "middle");
            /** @type {?} */
            const leaf = svg.selectAll('g').data(root().leaves(), (/**
             * @param {?} d
             * @return {?}
             */
            d => d.data.entity.id));
            leaf
                .transition(t)
                .attr('transform', (/**
             * @param {?} d
             * @return {?}
             */
            d => `translate(${d.x + 1},${d.y + 1})`))
                .attr('font-size', (/**
             * @param {?} d
             * @return {?}
             */
            d => {
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
                d => selected.includes(d.data.entity.id)))
                    .append('path')
                    .attr('class', 'close-icon')
                    .attr('d', closeIconPath)
                    .attr('fill', '#fff')
                    .attr('transform', (/**
                 * @param {?} d
                 * @return {?}
                 */
                d => {
                    if (d.r / 4 > 3) {
                        return `scale(.08) translate(0, ${d.r * 10 - 80})`;
                    }
                    return `scale(.08)`;
                }));
            }
            leaf
                .select('circle')
                .transition(t)
                .attr('r', (/**
             * @param {?} d
             * @return {?}
             */
            d => d.r));
            leaf
                .select('text')
                .attr('font-family', (/**
             * @param {?} d
             * @return {?}
             */
            d => {
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
            d => {
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
            d => {
                if (d.r / 4 > 4.5) {
                    // show text and number threshhold
                    /** @type {?} */
                    let label = (d.data.entity.label.charAt(0).toUpperCase() +
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
                    let label = (d.data.entity.label.charAt(0).toUpperCase() +
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
            (d, i, nodes) => `${i - (nodes.length + 1) / 2 + .97}em`))
                .attr('fill', 'white')
                .text((/**
             * @param {?} d
             * @return {?}
             */
            d => d));
            leaf
                .select('.label-count')
                .attr('font-family', (/**
             * @param {?} d
             * @return {?}
             */
            d => {
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
            d => {
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
            d => {
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
            d => {
                /** @type {?} */
                let labelLength = d.data.entity.label.split(/ +/g);
                if (labelLength.length > 3) {
                    labelLength = labelLength.slice(0, 3);
                }
                return `${labelLength.length - (labelLength.length + 1) / 2 + .97}em`;
            }));
            /** @type {?} */
            const g = leaf.enter().append('g');
            g.attr('transform', (/**
             * @param {?} d
             * @return {?}
             */
            d => `translate(${d.x + 1},${d.y + 1})`))
                .attr('font-size', (/**
             * @param {?} d
             * @return {?}
             */
            d => {
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
            (d, i) => {
                this.onClick(d.data.entity.id);
            }))
                .append("circle")
                .attr("id", (/**
             * @param {?} d
             * @return {?}
             */
            d => (d.leafUid = d.data.entity.id)))
                .attr('r', 0)
                .transition(t)
                .attr("fill-opacity", 0.7)
                .attr('fill', (/**
             * @param {?} d
             * @return {?}
             */
            d => colorMap(d.data.entity.typeOfEntity)))
                .attr("r", (/**
             * @param {?} d
             * @return {?}
             */
            d => d.r));
            g.append("clipPath")
                .attr("id", (/**
             * @param {?} d
             * @return {?}
             */
            d => (d.clipUid = 'Clip-' + d.data.entity.id)))
                .append("use")
                .attr("xlink:href", (/**
             * @param {?} d
             * @return {?}
             */
            d => d.leafUid.href));
            g.append('text')
                .attr('font-family', (/**
             * @param {?} d
             * @return {?}
             */
            d => {
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
            d => {
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
            d => {
                if (d.r / 4 > 4.5) {
                    // show text and number threshhold
                    /** @type {?} */
                    let label = (d.data.entity.label.charAt(0).toUpperCase() +
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
                    let label = (d.data.entity.label.charAt(0).toUpperCase() +
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
            (d, i, nodes) => `${i - (nodes.length + 1) / 2 + .97}em`))
                .attr('fill', 'white')
                .text((/**
             * @param {?} d
             * @return {?}
             */
            d => d))
                .attr('fill-opacity', 0)
                .transition(t)
                .attr('fill-opacity', 1);
            g.append('text') // Count label
                .attr('class', 'label-count')
                .attr('font-family', (/**
             * @param {?} d
             * @return {?}
             */
            d => {
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
            d => {
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
            d => {
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
            d => {
                /** @type {?} */
                let labelLength = d.data.entity.label.split(/ +/g);
                if (labelLength.length > 3) {
                    labelLength = labelLength.slice(0, 3);
                }
                return `${labelLength.length - (labelLength.length + 1) / 2 + .97}em`;
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
                d => selected.includes(d.leafUid))) // append 'X' icon // only for selected bubbles
                    .append('path')
                    .attr('d', closeIconPath)
                    .attr('class', 'close-icon')
                    .attr('fill', (/**
                 * @param {?} d
                 * @return {?}
                 */
                d => {
                    if (d.r / 4 > 2.5) {
                        return '#fff';
                    }
                    return 'transparent';
                }))
                    .attr('transform', (/**
                 * @param {?} d
                 * @return {?}
                 */
                d => {
                    if (d.r / 4 > 3) {
                        return `scale(.08) translate(0, ${d.r * 10 - 80})`;
                    }
                    return `scale(.08)`;
                }));
            }
            this.emit('d3end', data); // communicate end of draw
        });
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
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
            () => {
                this.draw();
                if (this.data && this.data.setDraw) {
                    this.data.setDraw(this.draw);
                }
            }));
        }
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQvYnViYmxlLWNoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUE7Ozs7Ozs7Ozs7Ozs7QUFheEIsc0NBbUVDOzs7Ozs7SUEvREMsdUNBQW9COzs7OztJQUlwQixpQ0FBYzs7Ozs7SUFJZCxrQ0FBZTs7Ozs7SUFJZixnQ0FBVTs7Ozs7SUFJVixtQ0FBaUI7Ozs7OztJQUtqQixvQ0FBbUI7Ozs7OztJQUtuQixzQ0FHQzs7Ozs7SUFJRCxxQ0FBMkI7Ozs7OztJQUszQixzQ0FBbUI7Ozs7OztJQUtuQixtQ0FBaUI7Ozs7O0lBSWpCLHlDQVNDOzs7Ozs7SUFNRCxtQ0FBYzs7QUFPaEIsTUFBTSxPQUFPLG9CQUFvQjtJQUpqQztRQU9VLFlBQU8sR0FBWSxLQUFLLENBQUM7UUEwQmpDLFNBQUk7OztRQUFHLEdBQUcsRUFBRTtrQkFDSixFQUNKLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUN6QixLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFDM0IsU0FBUyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQzlCLGFBQWEsRUFDZCxHQUFHLElBQUksQ0FBQyxJQUFJOztrQkFDUCxhQUFhLEdBQUcseUZBQXlGOztnQkFFM0csQ0FBQyxHQUFHLEVBQUU7aUJBQ1AsVUFBVSxFQUFFO2lCQUNaLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLE9BQU8sVUFBVSxJQUFJLFFBQVEsRUFBRTtnQkFDakMsQ0FBQyxHQUFHLEVBQUU7cUJBQ0gsVUFBVSxFQUFFO3FCQUNaLFFBQVEsQ0FBQyxVQUFVLENBQUM7cUJBQ3BCLElBQUks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Q0FBQTtTQUNIO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBL0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixxSkFBa0M7YUFDbkM7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETixvQ0FBZ0M7O0lBQ2hDLG9DQUFtQjs7Ozs7SUFDbkIsdUNBQWlDOztJQTBCakMsb0NBK1NDIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEJVQkJMRUNIQVJULnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlckNvbnRlbnRDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEJ1YmJsZUNoYXJ0Q29tcG9uZW50J3MgXCJkYXRhXCJcbiAqIFxuICogQHByb3BlcnR5IGNvbnRhaW5lcklkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJXaWR0aCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY29udGFpbmVySGVpZ2h0IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBidWJibGVzRGF0YSAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSByZXNldCAob3B0aW9uYWwpXG4qL1xuZXhwb3J0IGludGVyZmFjZSBJQnViYmxlQ2hhcnREYXRhIHtcbiAgLyoqXG4gICAqIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgYnViYmxlLWNoYXJ0XG4gICAqL1xuICBjb250YWluZXJJZDogc3RyaW5nO1xuICAvKipcbiAgICogdG90YWwgd2lkdGggZm9yIHRoZSBidWJibGUtY2hhcnRcbiAgICovXG4gIHdpZHRoOiBudW1iZXI7XG4gIC8qKlxuICAgKiB0b3RhbCBoZWlnaHQgZm9yIHRoZSBidWJibGUtY2hhcnRcbiAgICovXG4gIGhlaWdodDogbnVtYmVyO1xuICAvKipcbiAgICogZGF0YSBhYm91dCB0aGUgYnViYmxlc1xuICAgKi9cbiAgZGF0YTogYW55O1xuICAvKipcbiAgICogYWRkaXRpb25hbCBjc3MgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIGxpc3Qgb2YgSUQncyBvZiBzZWxlY3RlZCBpdGVtc1xuICAgKiAoc2VsZWN0ZWQgaXRlbXMgd2lsbCByZW5kZXIgd2l0aCBhICdYJyBpY29uKVxuICAgKi9cbiAgc2VsZWN0ZWQ/OiBzdHJpbmdbXVxuICAvKipcbiAgICogU3BlY2lmeSBhIGxpc3Qgb2YgdHlwZU9mRW50aXR5IHR5cGVzIChkb21haW4pLFxuICAgKiBhbmQgYSBsaXN0IG9mIGNvbG9ycyAocmFuZ2UpLCB3aGljaCB3aWxsIGJlIG1hcHBlZCB0b2dldGhlci5cbiAgICovXG4gIGNvbG9yTWF0Y2g/OiB7XG4gICAgZG9tYWluOiBzdHJpbmdbXSxcbiAgICByYW5nZTogc3RyaW5nW10sXG4gIH1cbiAgLyoqXG4gICAqIERlZmluZSBhIG1heCBhbmQgbWluIHNpemUgZm9yIHRoZSBidWJibGVzXG4gICAqL1xuICBzaXplUmFuZ2U6IFtudW1iZXIsIG51bWJlcl1cbiAgLyoqXG4gICAqIElmIGRlZmluZWQsIHRyYW5zaXRpb24gd2lsbCBiZSBhY3RpdmF0ZWRcbiAgICogYW5kIHRoZSB2YWx1ZSB3aWxsIGJlIHVzZWQgYXMgZHVyYXRpb25cbiAgICovXG4gIHRyYW5zaXRpb24/OiBudW1iZXJcbiAgLyoqXG4gICAqIElmIHNldCB0byBmYWxzZSwgc3RvcHMgdGhlIHNodWZmbGluZyBvZiB0aGUgZGF0YVxuICAgKiBiZWZvcmUgcmVuZGVyaW5nLlxuICAgKi9cbiAgc2h1ZmZsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGZvbnQtZmFtaWx5IGFuZCB0aGUgZm9udC13ZWlnaHQgZm9yIGVhY2ggdGV4dCBncm91cFxuICAgKi9cbiAgZm9udFJlbmRlcmluZz86IHtcbiAgICBsYWJlbD86IHtcbiAgICAgIGZhbWlseT86IHN0cmluZyxcbiAgICAgIHdlaWdodD86IHN0cmluZyxcbiAgICB9LFxuICAgIGNvdW50ZXI/OiB7XG4gICAgICBmYW1pbHk/OiBzdHJpbmcsXG4gICAgICB3ZWlnaHQ/OiBzdHJpbmcsXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGV4cG9zZSB0aGUgZHJhdyBmdW5jdGlvbiBvdXRzaWRlIG9mIG43LWZyb250ZW5kL2NvbXBvbmVudHMgbGlicmFyeVxuICAgKiB0aGlzIGlzIG5lZWRlZCB0byByZWRyYXcgYnViYmxlLWNoYXJ0LWNvbXBvbmVudCBvbiBjb21tYW5kXG4gICAqL1xuICBzZXREcmF3PzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1idWJibGUtY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYnViYmxlLWNoYXJ0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEJ1YmJsZUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG4gIEBJbnB1dCgpIGRhdGE6IElCdWJibGVDaGFydERhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcbiAgcHJpdmF0ZSBfbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgIC8qXG4gICAgIFdhaXRzIGZvciB0aGUgZG9tIHRvIGJlIGxvYWRlZCwgdGhlbiBmaXJlcyB0aGUgZHJhdyBmdW5jdGlvblxuICAgICB0aGF0IHJlbmRlcnMgdGhlIGNoYXJ0LlxuICAgICovXG4gICAgaWYgKCF0aGlzLmRhdGEpIHtcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fbG9hZGVkKSByZXR1cm47XG4gICAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICBpZiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5zZXREcmF3KSB7XG4gICAgICAgICAgdGhpcy5kYXRhLnNldERyYXcodGhpcy5kcmF3KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG5cbiAgZHJhdyA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBjb250YWluZXJJZCwgZGF0YSwgaGVpZ2h0LFxuICAgICAgd2lkdGgsIHNlbGVjdGVkLCB0cmFuc2l0aW9uLFxuICAgICAgc2l6ZVJhbmdlLCBjb2xvck1hdGNoLCBzaHVmZmxlLFxuICAgICAgZm9udFJlbmRlcmluZ1xuICAgIH0gPSB0aGlzLmRhdGFcbiAgICBjb25zdCBjbG9zZUljb25QYXRoID0gJ00gLTUwLDQwIEwtNDAsNTAgMCwxMCA0MCw1MCA1MCw0MCAxMCwwIDUwLC00MCA0MCwtNTAgMCwtMTAgLTQwLC01MCAtNTAsLTQwIC0xMCwwIC01MCw0MCdcblxuICAgIGxldCB0ID0gZDNcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbigwKVxuICAgIGlmICh0eXBlb2YgdHJhbnNpdGlvbiA9PSAnbnVtYmVyJykge1xuICAgICAgdCA9IGQzXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKHRyYW5zaXRpb24pXG4gICAgICAgIC5lYXNlKGQzLmVhc2VDdWJpY0luT3V0KTtcbiAgICB9XG5cbiAgICBjb25zdCBjb2xvck1hcCA9IGQzLnNjYWxlT3JkaW5hbCgpXG4gICAgICAuZG9tYWluKGNvbG9yTWF0Y2ggPyBjb2xvck1hdGNoLmRvbWFpbiA6IFsncGVyc29uYScsICdsdW9nbycsICdvcmdhbml6emF6aW9uZScsICdjb3NhIG5vdGV2b2xlJ10pXG4gICAgICAucmFuZ2UoY29sb3JNYXRjaCA/IGNvbG9yTWF0Y2gucmFuZ2UgOiBkMy5zY2hlbWVUYWJsZWF1MTApXG5cbiAgICBsZXQgc2l6ZVNjYWxlID0gZDMgLy8gbWFwIGVudGl0eSBjb3VudCB0byBidWJibGUgc2l6ZVxuICAgICAgLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzEsIGQzLm1heChkYXRhLCBkID0+ICtkLmNvdW50KV0pXG4gICAgICAucmFuZ2UoWzMsIGQzLm1heChkYXRhLCBkID0+ICtkLmNvdW50KV0pO1xuXG4gICAgY29uc3QgcGFjayA9IGRhdGEgPT5cbiAgICAgIGQzXG4gICAgICAgIC5wYWNrKClcbiAgICAgICAgLnNpemUoW3dpZHRoIC0gMiwgaGVpZ2h0IC0gMl0pXG4gICAgICAgIC5wYWRkaW5nKDEuNSkoXG4gICAgICAgICAgZDMuaGllcmFyY2h5KHsgY2hpbGRyZW46IGRhdGEgfSkuc3VtKGQgPT4gc2l6ZVNjYWxlKGQuY291bnQpKVxuICAgICAgICApO1xuXG4gICAgY29uc3Qgcm9vdCA9ICgpID0+IHsgLy8gaWYgc2h1ZmZsZSBpcyB1bmRlZmluZWQgb3IgdHJ1ZSwgc2h1ZmZsZSB0aGUgZGF0YVxuICAgICAgaWYgKHR5cGVvZiBzaHVmZmxlID09ICd1bmRlZmluZWQnIHx8IHNodWZmbGUpIHtcbiAgICAgICAgbGV0IHNodWZmRGF0YSA9IGRhdGEuc2xpY2UoKSAvLyBkbyBub3QgbW9kaWZ5IHRoZSBzb3VyY2UgZGF0YSFcbiAgICAgICAgcmV0dXJuIHBhY2soZDMuc2h1ZmZsZShzaHVmZkRhdGEpKVxuICAgICAgfSBlbHNlIHsgLy8gaWYgc2h1ZmZsZSBpcyBzZXQgdG8gZmFsc2UsIHNraXAgdGhlIGRhdGEgc2h1ZmZsZVxuICAgICAgICByZXR1cm4gcGFjayhkYXRhKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN2ZyA9IGQzXG4gICAgICAuc2VsZWN0KGAjJHtjb250YWluZXJJZH1gKVxuICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsIFswLCAwLCB3aWR0aCwgaGVpZ2h0XSlcbiAgICAgIC5hdHRyKFwiZm9udC1mYW1pbHlcIiwgXCJWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWZcIilcbiAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIik7XG5cbiAgICBjb25zdCBsZWFmID0gc3ZnLnNlbGVjdEFsbCgnZycpLmRhdGEocm9vdCgpLmxlYXZlcygpLCBkID0+IGQuZGF0YS5lbnRpdHkuaWQpO1xuICAgIGxlYWZcbiAgICAgIC50cmFuc2l0aW9uKHQpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC54ICsgMX0sJHtkLnkgKyAxfSlgKVxuICAgICAgLmF0dHIoJ2ZvbnQtc2l6ZScsIGQgPT4ge1xuICAgICAgICB2YXIgc2l6ZSA9IGQuciAvIDUuNTtcbiAgICAgICAgc2l6ZSAqPSAxO1xuICAgICAgICBzaXplICs9IDE7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHNpemUpICsgJ3B4JztcbiAgICAgIH0pXG5cbiAgICBsZWFmLnNlbGVjdEFsbCgnLmNsb3NlLWljb24nKS5yZW1vdmUoKSAvLyBjbGVhciBhbGwgZXhpc3RpbmcgY2xvc2UgaWNvbnNcbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIGxlYWYgLy8gcmVuZGVyIG5lY2Vzc2FyeSBjbG9zZSBpY29uc1xuICAgICAgICAuZmlsdGVyKGQgPT4gc2VsZWN0ZWQuaW5jbHVkZXMoZC5kYXRhLmVudGl0eS5pZCkpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnY2xvc2UtaWNvbicpXG4gICAgICAgIC5hdHRyKCdkJywgY2xvc2VJY29uUGF0aClcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnI2ZmZicpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IHtcbiAgICAgICAgICBpZiAoZC5yIC8gNCA+IDMpIHtcbiAgICAgICAgICAgIHJldHVybiBgc2NhbGUoLjA4KSB0cmFuc2xhdGUoMCwgJHtkLnIgKiAxMCAtIDgwfSlgO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYHNjYWxlKC4wOClgO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsZWFmXG4gICAgICAuc2VsZWN0KCdjaXJjbGUnKVxuICAgICAgLnRyYW5zaXRpb24odClcbiAgICAgIC5hdHRyKCdyJywgZCA9PiBkLnIpO1xuXG4gICAgbGVhZlxuICAgICAgLnNlbGVjdCgndGV4dCcpXG4gICAgICAuYXR0cignZm9udC1mYW1pbHknLCBkID0+IHtcbiAgICAgICAgaWYgKGZvbnRSZW5kZXJpbmcgJiYgZm9udFJlbmRlcmluZy5sYWJlbCAmJiBmb250UmVuZGVyaW5nLmxhYmVsLmZhbWlseSkge1xuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmxhYmVsLmZhbWlseVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAnaW5oZXJpdCdcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5hdHRyKCdmb250LXdlaWdodCcsIGQgPT4ge1xuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmxhYmVsICYmIGZvbnRSZW5kZXJpbmcubGFiZWwud2VpZ2h0KSB7XG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcubGFiZWwud2VpZ2h0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICdpbmhlcml0J1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnNlbGVjdEFsbChcInRzcGFuXCIpXG4gICAgICAuZGF0YShkID0+IHtcbiAgICAgICAgaWYgKGQuciAvIDQgPiA0LjUpIHtcbiAgICAgICAgICAvLyBzaG93IHRleHQgYW5kIG51bWJlciB0aHJlc2hob2xkXG4gICAgICAgICAgbGV0IGxhYmVsID0gKFxuICAgICAgICAgICAgZC5kYXRhLmVudGl0eS5sYWJlbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgICBkLmRhdGEuZW50aXR5LmxhYmVsLnNsaWNlKDEpXG4gICAgICAgICAgKS5zcGxpdCgvICsvZyk7XG4gICAgICAgICAgaWYgKGxhYmVsLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgIGxhYmVsID0gbGFiZWwuc2xpY2UoMCwgMyk7XG4gICAgICAgICAgICBsYWJlbFsyXSArPSAn4oCmJztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICB9IGVsc2UgaWYgKGQuciAvIDQgPiAyLjUpIHtcbiAgICAgICAgICAvLyBzaG93IHRleHQgdGhyZXNoaG9sZFxuICAgICAgICAgIGxldCBsYWJlbCA9IChcbiAgICAgICAgICAgIGQuZGF0YS5lbnRpdHkubGFiZWwuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgK1xuICAgICAgICAgICAgZC5kYXRhLmVudGl0eS5sYWJlbC5zbGljZSgxKVxuICAgICAgICAgICkuc3BsaXQoLyArL2cpO1xuICAgICAgICAgIGlmIChsYWJlbC5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnNsaWNlKDAsIDMpO1xuICAgICAgICAgICAgbGFiZWxbMl0gKz0gJ+KApic7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJ3RzcGFuJylcbiAgICAgIC5hdHRyKFwieFwiLCAwKVxuICAgICAgLmF0dHIoXCJ5XCIsIChkLCBpLCBub2RlcykgPT4gYCR7aSAtIChub2Rlcy5sZW5ndGggKyAxKSAvIDIgKyAuOTd9ZW1gKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgICAgLnRleHQoZCA9PiBkKVxuXG4gICAgbGVhZlxuICAgICAgLnNlbGVjdCgnLmxhYmVsLWNvdW50JylcbiAgICAgIC5hdHRyKCdmb250LWZhbWlseScsIGQgPT4ge1xuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIgJiYgZm9udFJlbmRlcmluZy5jb3VudGVyLmZhbWlseSkge1xuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmNvdW50ZXIuZmFtaWx5XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICdpbmhlcml0J1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2ZvbnQtd2VpZ2h0JywgZCA9PiB7XG4gICAgICAgIGlmIChmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcuY291bnRlciAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIud2VpZ2h0KSB7XG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcuY291bnRlci53ZWlnaHRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gJ2luaGVyaXQnXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXG4gICAgICAudGV4dChkID0+IHtcbiAgICAgICAgaWYgKGQuciAvIDQgPiAyLjUpIHtcbiAgICAgICAgICAvLyBzaG93IHRleHQgYW5kIG51bWJlciB0aHJlc2hob2xkXG4gICAgICAgICAgcmV0dXJuIGQuZGF0YS5jb3VudFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5hdHRyKCd5JywgZCA9PiB7XG4gICAgICAgIGxldCBsYWJlbExlbmd0aCA9IGQuZGF0YS5lbnRpdHkubGFiZWwuc3BsaXQoLyArL2cpXG4gICAgICAgIGlmIChsYWJlbExlbmd0aC5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgbGFiZWxMZW5ndGggPSBsYWJlbExlbmd0aC5zbGljZSgwLCAzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7bGFiZWxMZW5ndGgubGVuZ3RoIC0gKGxhYmVsTGVuZ3RoLmxlbmd0aCArIDEpIC8gMiArIC45N31lbWBcbiAgICAgIH0pXG5cblxuICAgIGNvbnN0IGcgPSBsZWFmLmVudGVyKCkuYXBwZW5kKCdnJyk7XG5cbiAgICBnLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueCArIDF9LCR7ZC55ICsgMX0pYClcbiAgICAgIC5hdHRyKCdmb250LXNpemUnLCBkID0+IHtcbiAgICAgICAgdmFyIHNpemUgPSBkLnIgLyA1LjU7XG4gICAgICAgIHNpemUgKj0gMTtcbiAgICAgICAgc2l6ZSArPSAxO1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChzaXplKSArICdweCc7XG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2N1cnNvcicsICdwb2ludGVyJylcbiAgICAgIC5vbignY2xpY2snLCAoZCwgaSkgPT4ge1xuICAgICAgICB0aGlzLm9uQ2xpY2soZC5kYXRhLmVudGl0eS5pZCk7XG4gICAgICB9KVxuICAgICAgLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgLmF0dHIoXCJpZFwiLCBkID0+IChkLmxlYWZVaWQgPSBkLmRhdGEuZW50aXR5LmlkKSlcbiAgICAgIC5hdHRyKCdyJywgMClcbiAgICAgIC50cmFuc2l0aW9uKHQpXG4gICAgICAuYXR0cihcImZpbGwtb3BhY2l0eVwiLCAwLjcpXG4gICAgICAuYXR0cignZmlsbCcsIGQgPT4gY29sb3JNYXAoZC5kYXRhLmVudGl0eS50eXBlT2ZFbnRpdHkpKVxuICAgICAgLmF0dHIoXCJyXCIsIGQgPT4gZC5yKTtcblxuICAgIGcuYXBwZW5kKFwiY2xpcFBhdGhcIilcbiAgICAgIC5hdHRyKFwiaWRcIiwgZCA9PiAoZC5jbGlwVWlkID0gJ0NsaXAtJyArIGQuZGF0YS5lbnRpdHkuaWQpKVxuICAgICAgLmFwcGVuZChcInVzZVwiKVxuICAgICAgLmF0dHIoXCJ4bGluazpocmVmXCIsIGQgPT4gZC5sZWFmVWlkLmhyZWYpO1xuXG4gICAgZy5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2ZvbnQtZmFtaWx5JywgZCA9PiB7XG4gICAgICAgIGlmIChmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcubGFiZWwgJiYgZm9udFJlbmRlcmluZy5sYWJlbC5mYW1pbHkpIHtcbiAgICAgICAgICByZXR1cm4gZm9udFJlbmRlcmluZy5sYWJlbC5mYW1pbHlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gJ2luaGVyaXQnXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuYXR0cignZm9udC13ZWlnaHQnLCBkID0+IHtcbiAgICAgICAgaWYgKGZvbnRSZW5kZXJpbmcgJiYgZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmxhYmVsICYmIGZvbnRSZW5kZXJpbmcubGFiZWwud2VpZ2h0KSB7XG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcubGFiZWwud2VpZ2h0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICdpbmhlcml0J1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnNlbGVjdEFsbChcInRzcGFuXCIpXG4gICAgICAuZGF0YShkID0+IHtcbiAgICAgICAgaWYgKGQuciAvIDQgPiA0LjUpIHtcbiAgICAgICAgICAvLyBzaG93IHRleHQgYW5kIG51bWJlciB0aHJlc2hob2xkXG4gICAgICAgICAgbGV0IGxhYmVsID0gKFxuICAgICAgICAgICAgZC5kYXRhLmVudGl0eS5sYWJlbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgICBkLmRhdGEuZW50aXR5LmxhYmVsLnNsaWNlKDEpXG4gICAgICAgICAgKS5zcGxpdCgvICsvZyk7XG4gICAgICAgICAgaWYgKGxhYmVsLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgIGxhYmVsID0gbGFiZWwuc2xpY2UoMCwgMyk7XG4gICAgICAgICAgICBsYWJlbFsyXSArPSAn4oCmJztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICB9IGVsc2UgaWYgKGQuciAvIDQgPiAyLjUpIHtcbiAgICAgICAgICAvLyBzaG93IHRleHQgdGhyZXNoaG9sZFxuICAgICAgICAgIGxldCBsYWJlbCA9IChcbiAgICAgICAgICAgIGQuZGF0YS5lbnRpdHkubGFiZWwuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgK1xuICAgICAgICAgICAgZC5kYXRhLmVudGl0eS5sYWJlbC5zbGljZSgxKVxuICAgICAgICAgICkuc3BsaXQoLyArL2cpO1xuICAgICAgICAgIGlmIChsYWJlbC5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnNsaWNlKDAsIDMpO1xuICAgICAgICAgICAgbGFiZWxbMl0gKz0gJ+KApic7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJ3RzcGFuJylcbiAgICAgIC5hdHRyKFwieFwiLCAwKVxuICAgICAgLmF0dHIoXCJ5XCIsIChkLCBpLCBub2RlcykgPT4gYCR7aSAtIChub2Rlcy5sZW5ndGggKyAxKSAvIDIgKyAuOTd9ZW1gKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgICAgLnRleHQoZCA9PiBkKVxuICAgICAgLmF0dHIoJ2ZpbGwtb3BhY2l0eScsIDApXG4gICAgICAudHJhbnNpdGlvbih0KVxuICAgICAgLmF0dHIoJ2ZpbGwtb3BhY2l0eScsIDEpO1xuXG4gICAgZy5hcHBlbmQoJ3RleHQnKSAvLyBDb3VudCBsYWJlbFxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xhYmVsLWNvdW50JylcbiAgICAgIC5hdHRyKCdmb250LWZhbWlseScsIGQgPT4ge1xuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIgJiYgZm9udFJlbmRlcmluZy5jb3VudGVyLmZhbWlseSkge1xuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmNvdW50ZXIuZmFtaWx5XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICdpbmhlcml0J1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2ZvbnQtd2VpZ2h0JywgZCA9PiB7XG4gICAgICAgIGlmIChmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcuY291bnRlciAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIud2VpZ2h0KSB7XG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcuY291bnRlci53ZWlnaHRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gJ2luaGVyaXQnXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXG4gICAgICAudGV4dChkID0+IHtcbiAgICAgICAgaWYgKGQuciAvIDQgPiAyLjUpIHtcbiAgICAgICAgICAvLyBzaG93IHRleHQgYW5kIG51bWJlciB0aHJlc2hob2xkXG4gICAgICAgICAgcmV0dXJuIGQuZGF0YS5jb3VudFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5hdHRyKCd5JywgZCA9PiB7XG4gICAgICAgIGxldCBsYWJlbExlbmd0aCA9IGQuZGF0YS5lbnRpdHkubGFiZWwuc3BsaXQoLyArL2cpXG4gICAgICAgIGlmIChsYWJlbExlbmd0aC5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgbGFiZWxMZW5ndGggPSBsYWJlbExlbmd0aC5zbGljZSgwLCAzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7bGFiZWxMZW5ndGgubGVuZ3RoIC0gKGxhYmVsTGVuZ3RoLmxlbmd0aCArIDEpIC8gMiArIC45N31lbWBcbiAgICAgIH0pXG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMClcbiAgICAgIC50cmFuc2l0aW9uKHQpXG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMSk7XG5cbiAgICBsZWFmXG4gICAgICAuZXhpdCgpIC8vIEVYSVQgQ1lDTEVcbiAgICAgIC5yZW1vdmUoKTtcblxuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgZy5maWx0ZXIoZCA9PiBzZWxlY3RlZC5pbmNsdWRlcyhkLmxlYWZVaWQpKSAvLyBhcHBlbmQgJ1gnIGljb24gLy8gb25seSBmb3Igc2VsZWN0ZWQgYnViYmxlc1xuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmF0dHIoJ2QnLCBjbG9zZUljb25QYXRoKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnY2xvc2UtaWNvbicpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgZCA9PiB7XG4gICAgICAgICAgaWYgKGQuciAvIDQgPiAyLjUpIHtcbiAgICAgICAgICAgIHJldHVybiAnI2ZmZic7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAndHJhbnNwYXJlbnQnO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiB7XG4gICAgICAgICAgaWYgKGQuciAvIDQgPiAzKSB7XG4gICAgICAgICAgICByZXR1cm4gYHNjYWxlKC4wOCkgdHJhbnNsYXRlKDAsICR7ZC5yICogMTAgLSA4MH0pYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGBzY2FsZSguMDgpYDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdkM2VuZCcsIGRhdGEpIC8vIGNvbW11bmljYXRlIGVuZCBvZiBkcmF3XG4gIH1cbn1cbiJdfQ==