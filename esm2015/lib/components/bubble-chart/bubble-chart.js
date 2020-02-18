/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/bubble-chart/bubble-chart.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
/**
 * Interface for D3Chart's "data"
 *
 * \@property entity (required)
 * - id (required)
 * - label (optional)
 * - typeOfEntity (optional)
 * \@property count (required)
 * @record
 */
export function IBubbleChartDataItem() { }
if (false) {
    /** @type {?} */
    IBubbleChartDataItem.prototype.entity;
    /** @type {?} */
    IBubbleChartDataItem.prototype.count;
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
            if (!Array.isArray(data)) {
                // Check if it is possible to draw with the current dataset
                console.warn('(n7-bubble-chart) The data object is not in the expected format!');
                return;
            }
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
                .domain([0, d3.max(data, (/**
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
                .transition(t) // update transition on <g>
                .attr('fill-opacity', 1)
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
                .transition(t) // update transition on <circle>
                .attr("fill-opacity", 1)
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
                .attr("id", (/**
             * @param {?} d
             * @return {?}
             */
            d => `g_${d.data.entity.id}`))
                .append("circle")
                .attr("id", (/**
             * @param {?} d
             * @return {?}
             */
            d => (d.leafUid = d.data.entity.id)))
                .attr('r', 0)
                .transition(t) // enter() transition on <circle>
                .attr("fill-opacity", 1)
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
                .transition(t) // enter() transition on <tspan>
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
                .transition(t) // enter() transition on <text>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQvYnViYmxlLWNoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sS0FBSyxFQUFFLE1BQU0sSUFBSSxDQUFBOzs7Ozs7Ozs7Ozs7O0FBYXhCLHNDQW1FQzs7Ozs7O0lBL0RDLHVDQUFvQjs7Ozs7SUFJcEIsaUNBQWM7Ozs7O0lBSWQsa0NBQWU7Ozs7O0lBSWYsZ0NBQTZCOzs7OztJQUk3QixtQ0FBaUI7Ozs7OztJQUtqQixvQ0FBbUI7Ozs7OztJQUtuQixzQ0FHQzs7Ozs7SUFJRCxxQ0FBMkI7Ozs7OztJQUszQixzQ0FBbUI7Ozs7OztJQUtuQixtQ0FBaUI7Ozs7O0lBSWpCLHlDQVNDOzs7Ozs7SUFNRCxtQ0FBYzs7Ozs7Ozs7Ozs7O0FBWWhCLDBDQU9DOzs7SUFOQyxzQ0FJQzs7SUFDRCxxQ0FBYzs7QUFPaEIsTUFBTSxPQUFPLG9CQUFvQjtJQUpqQztRQU9VLFlBQU8sR0FBWSxLQUFLLENBQUM7UUEwQmpDLFNBQUk7OztRQUFHLEdBQUcsRUFBRTtrQkFDSixFQUNKLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUN6QixLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFDM0IsU0FBUyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQzlCLGFBQWEsRUFDZCxHQUFHLElBQUksQ0FBQyxJQUFJOztrQkFDUCxhQUFhLEdBQUcseUZBQXlGO1lBRS9HLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN4QiwyREFBMkQ7Z0JBQzNELE9BQU8sQ0FBQyxJQUFJLENBQUMsa0VBQWtFLENBQUMsQ0FBQTtnQkFDaEYsT0FBTzthQUNS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RSxJQUFJLENBQUMsQ0FBQSxDQUFDLDBCQUEwQjtRQUNyRCxDQUFDLEVBQUE7SUFDSCxDQUFDOzs7O0lBalZDLHFCQUFxQjtRQUNuQjs7O1VBR0U7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLE9BQU07U0FDUDthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsT0FBTztnQkFBRSxPQUFPO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLFVBQVU7OztZQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ1osSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7aUJBQzdCO1lBQ0gsQ0FBQyxFQUFDLENBQUE7U0FDSDtJQUNILENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQS9CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IscUpBQWtDO2FBQ25DOzs7bUJBRUUsS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sb0NBQWdDOztJQUNoQyxvQ0FBbUI7Ozs7O0lBQ25CLHVDQUFpQzs7SUEwQmpDLG9DQXdUQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBCVUJCTEVDSEFSVC50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBCdWJibGVDaGFydENvbXBvbmVudCdzIFwiZGF0YVwiXG4gKiBcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJJZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY29udGFpbmVyV2lkdGggKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNvbnRhaW5lckhlaWdodCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgYnViYmxlc0RhdGEgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGlzRm9yY2VTaW11bGF0aW9uRW5hYmxlZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcmVzZXQgKG9wdGlvbmFsKVxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUJ1YmJsZUNoYXJ0RGF0YSB7XG4gIC8qKlxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGJ1YmJsZS1jaGFydFxuICAgKi9cbiAgY29udGFpbmVySWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIHRvdGFsIHdpZHRoIGZvciB0aGUgYnViYmxlLWNoYXJ0XG4gICAqL1xuICB3aWR0aDogbnVtYmVyO1xuICAvKipcbiAgICogdG90YWwgaGVpZ2h0IGZvciB0aGUgYnViYmxlLWNoYXJ0XG4gICAqL1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIGRhdGEgYWJvdXQgdGhlIGJ1YmJsZXNcbiAgICovXG4gIGRhdGE6IElCdWJibGVDaGFydERhdGFJdGVtW107XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGNzcyBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogbGlzdCBvZiBJRCdzIG9mIHNlbGVjdGVkIGl0ZW1zXG4gICAqIChzZWxlY3RlZCBpdGVtcyB3aWxsIHJlbmRlciB3aXRoIGEgJ1gnIGljb24pXG4gICAqL1xuICBzZWxlY3RlZD86IHN0cmluZ1tdXG4gIC8qKlxuICAgKiBTcGVjaWZ5IGEgbGlzdCBvZiB0eXBlT2ZFbnRpdHkgdHlwZXMgKGRvbWFpbiksXG4gICAqIGFuZCBhIGxpc3Qgb2YgY29sb3JzIChyYW5nZSksIHdoaWNoIHdpbGwgYmUgbWFwcGVkIHRvZ2V0aGVyLlxuICAgKi9cbiAgY29sb3JNYXRjaD86IHtcbiAgICBkb21haW46IHN0cmluZ1tdLFxuICAgIHJhbmdlOiBzdHJpbmdbXSxcbiAgfVxuICAvKipcbiAgICogRGVmaW5lIGEgbWF4IGFuZCBtaW4gc2l6ZSBmb3IgdGhlIGJ1YmJsZXNcbiAgICovXG4gIHNpemVSYW5nZTogW251bWJlciwgbnVtYmVyXVxuICAvKipcbiAgICogSWYgZGVmaW5lZCwgdHJhbnNpdGlvbiB3aWxsIGJlIGFjdGl2YXRlZFxuICAgKiBhbmQgdGhlIHZhbHVlIHdpbGwgYmUgdXNlZCBhcyBkdXJhdGlvblxuICAgKi9cbiAgdHJhbnNpdGlvbj86IG51bWJlclxuICAvKipcbiAgICogSWYgc2V0IHRvIGZhbHNlLCBzdG9wcyB0aGUgc2h1ZmZsaW5nIG9mIHRoZSBkYXRhXG4gICAqIGJlZm9yZSByZW5kZXJpbmcuXG4gICAqL1xuICBzaHVmZmxlPzogYm9vbGVhblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgZm9udC1mYW1pbHkgYW5kIHRoZSBmb250LXdlaWdodCBmb3IgZWFjaCB0ZXh0IGdyb3VwXG4gICAqL1xuICBmb250UmVuZGVyaW5nPzoge1xuICAgIGxhYmVsPzoge1xuICAgICAgZmFtaWx5Pzogc3RyaW5nLFxuICAgICAgd2VpZ2h0Pzogc3RyaW5nLFxuICAgIH0sXG4gICAgY291bnRlcj86IHtcbiAgICAgIGZhbWlseT86IHN0cmluZyxcbiAgICAgIHdlaWdodD86IHN0cmluZyxcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogZXhwb3NlIHRoZSBkcmF3IGZ1bmN0aW9uIG91dHNpZGUgb2YgbjctZnJvbnRlbmQvY29tcG9uZW50cyBsaWJyYXJ5XG4gICAqIHRoaXMgaXMgbmVlZGVkIHRvIHJlZHJhdyBidWJibGUtY2hhcnQtY29tcG9uZW50IG9uIGNvbW1hbmRcbiAgICovXG4gIHNldERyYXc/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBEM0NoYXJ0J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgZW50aXR5IChyZXF1aXJlZClcbiAqIC0gaWQgKHJlcXVpcmVkKVxuICogLSBsYWJlbCAob3B0aW9uYWwpXG4gKiAtIHR5cGVPZkVudGl0eSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY291bnQgKHJlcXVpcmVkKVxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUJ1YmJsZUNoYXJ0RGF0YUl0ZW0ge1xuICBlbnRpdHk6IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGxhYmVsPzogc3RyaW5nO1xuICAgIHR5cGVPZkVudGl0eT86IHN0cmluZztcbiAgfVxuICBjb3VudDogbnVtYmVyO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1idWJibGUtY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYnViYmxlLWNoYXJ0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEJ1YmJsZUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG4gIEBJbnB1dCgpIGRhdGE6IElCdWJibGVDaGFydERhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcbiAgcHJpdmF0ZSBfbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgIC8qXG4gICAgIFdhaXRzIGZvciB0aGUgZG9tIHRvIGJlIGxvYWRlZCwgdGhlbiBmaXJlcyB0aGUgZHJhdyBmdW5jdGlvblxuICAgICB0aGF0IHJlbmRlcnMgdGhlIGNoYXJ0LlxuICAgICovXG4gICAgaWYgKCF0aGlzLmRhdGEpIHtcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fbG9hZGVkKSByZXR1cm47XG4gICAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICBpZiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5zZXREcmF3KSB7XG4gICAgICAgICAgdGhpcy5kYXRhLnNldERyYXcodGhpcy5kcmF3KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG5cbiAgZHJhdyA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBjb250YWluZXJJZCwgZGF0YSwgaGVpZ2h0LFxuICAgICAgd2lkdGgsIHNlbGVjdGVkLCB0cmFuc2l0aW9uLFxuICAgICAgc2l6ZVJhbmdlLCBjb2xvck1hdGNoLCBzaHVmZmxlLFxuICAgICAgZm9udFJlbmRlcmluZ1xuICAgIH0gPSB0aGlzLmRhdGFcbiAgICBjb25zdCBjbG9zZUljb25QYXRoID0gJ00gLTUwLDQwIEwtNDAsNTAgMCwxMCA0MCw1MCA1MCw0MCAxMCwwIDUwLC00MCA0MCwtNTAgMCwtMTAgLTQwLC01MCAtNTAsLTQwIC0xMCwwIC01MCw0MCdcblxuICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgcG9zc2libGUgdG8gZHJhdyB3aXRoIHRoZSBjdXJyZW50IGRhdGFzZXRcbiAgICAgIGNvbnNvbGUud2FybignKG43LWJ1YmJsZS1jaGFydCkgVGhlIGRhdGEgb2JqZWN0IGlzIG5vdCBpbiB0aGUgZXhwZWN0ZWQgZm9ybWF0IScpXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHQgPSBkM1xuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKDApXG4gICAgaWYgKHR5cGVvZiB0cmFuc2l0aW9uID09ICdudW1iZXInKSB7XG4gICAgICB0ID0gZDNcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24odHJhbnNpdGlvbilcbiAgICAgICAgLmVhc2UoZDMuZWFzZUN1YmljSW5PdXQpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbG9yTWFwID0gZDMuc2NhbGVPcmRpbmFsKClcbiAgICAgIC5kb21haW4oY29sb3JNYXRjaCA/IGNvbG9yTWF0Y2guZG9tYWluIDogWydwZXJzb25hJywgJ2x1b2dvJywgJ29yZ2FuaXp6YXppb25lJywgJ2Nvc2Egbm90ZXZvbGUnXSlcbiAgICAgIC5yYW5nZShjb2xvck1hdGNoID8gY29sb3JNYXRjaC5yYW5nZSA6IGQzLnNjaGVtZVRhYmxlYXUxMClcblxuICAgIGxldCBzaXplU2NhbGUgPSBkMyAvLyBtYXAgZW50aXR5IGNvdW50IHRvIGJ1YmJsZSBzaXplXG4gICAgICAuc2NhbGVMaW5lYXIoKVxuICAgICAgLmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIGQgPT4gK2QuY291bnQpXSlcbiAgICAgIC5yYW5nZShbMywgZDMubWF4KGRhdGEsIGQgPT4gK2QuY291bnQpXSk7XG5cbiAgICBjb25zdCBwYWNrID0gZGF0YSA9PlxuICAgICAgZDNcbiAgICAgICAgLnBhY2soKVxuICAgICAgICAuc2l6ZShbd2lkdGggLSAyLCBoZWlnaHQgLSAyXSlcbiAgICAgICAgLnBhZGRpbmcoMS41KShcbiAgICAgICAgICBkMy5oaWVyYXJjaHkoeyBjaGlsZHJlbjogZGF0YSB9KS5zdW0oZCA9PiBzaXplU2NhbGUoZC5jb3VudCkpXG4gICAgICAgICk7XG5cbiAgICBjb25zdCByb290ID0gKCkgPT4geyAvLyBpZiBzaHVmZmxlIGlzIHVuZGVmaW5lZCBvciB0cnVlLCBzaHVmZmxlIHRoZSBkYXRhXG4gICAgICBpZiAodHlwZW9mIHNodWZmbGUgPT0gJ3VuZGVmaW5lZCcgfHwgc2h1ZmZsZSkge1xuICAgICAgICBsZXQgc2h1ZmZEYXRhID0gZGF0YS5zbGljZSgpIC8vIGRvIG5vdCBtb2RpZnkgdGhlIHNvdXJjZSBkYXRhIVxuICAgICAgICByZXR1cm4gcGFjayhkMy5zaHVmZmxlKHNodWZmRGF0YSkpXG4gICAgICB9IGVsc2UgeyAvLyBpZiBzaHVmZmxlIGlzIHNldCB0byBmYWxzZSwgc2tpcCB0aGUgZGF0YSBzaHVmZmxlXG4gICAgICAgIHJldHVybiBwYWNrKGRhdGEpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3ZnID0gZDNcbiAgICAgIC5zZWxlY3QoYCMke2NvbnRhaW5lcklkfWApXG4gICAgICAuYXR0cihcInZpZXdCb3hcIiwgWzAsIDAsIHdpZHRoLCBoZWlnaHRdKVxuICAgICAgLmF0dHIoXCJmb250LWZhbWlseVwiLCBcIlZlcmRhbmEsIEdlbmV2YSwgc2Fucy1zZXJpZlwiKVxuICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKTtcblxuICAgIGNvbnN0IGxlYWYgPSBzdmcuc2VsZWN0QWxsKCdnJykuZGF0YShyb290KCkubGVhdmVzKCksIGQgPT4gZC5kYXRhLmVudGl0eS5pZCk7XG4gICAgbGVhZlxuICAgICAgLnRyYW5zaXRpb24odCkgLy8gdXBkYXRlIHRyYW5zaXRpb24gb24gPGc+XG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMSlcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnggKyAxfSwke2QueSArIDF9KWApXG4gICAgICAuYXR0cignZm9udC1zaXplJywgZCA9PiB7XG4gICAgICAgIHZhciBzaXplID0gZC5yIC8gNS41O1xuICAgICAgICBzaXplICo9IDE7XG4gICAgICAgIHNpemUgKz0gMTtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoc2l6ZSkgKyAncHgnO1xuICAgICAgfSlcblxuICAgIGxlYWYuc2VsZWN0QWxsKCcuY2xvc2UtaWNvbicpLnJlbW92ZSgpIC8vIGNsZWFyIGFsbCBleGlzdGluZyBjbG9zZSBpY29uc1xuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgbGVhZiAvLyByZW5kZXIgbmVjZXNzYXJ5IGNsb3NlIGljb25zXG4gICAgICAgIC5maWx0ZXIoZCA9PiBzZWxlY3RlZC5pbmNsdWRlcyhkLmRhdGEuZW50aXR5LmlkKSlcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdjbG9zZS1pY29uJylcbiAgICAgICAgLmF0dHIoJ2QnLCBjbG9zZUljb25QYXRoKVxuICAgICAgICAuYXR0cignZmlsbCcsICcjZmZmJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4ge1xuICAgICAgICAgIGlmIChkLnIgLyA0ID4gMykge1xuICAgICAgICAgICAgcmV0dXJuIGBzY2FsZSguMDgpIHRyYW5zbGF0ZSgwLCAke2QuciAqIDEwIC0gODB9KWA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBgc2NhbGUoLjA4KWA7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxlYWZcbiAgICAgIC5zZWxlY3QoJ2NpcmNsZScpXG4gICAgICAudHJhbnNpdGlvbih0KSAvLyB1cGRhdGUgdHJhbnNpdGlvbiBvbiA8Y2lyY2xlPlxuICAgICAgLmF0dHIoXCJmaWxsLW9wYWNpdHlcIiwgMSlcbiAgICAgIC5hdHRyKCdyJywgZCA9PiBkLnIpO1xuXG4gICAgbGVhZlxuICAgICAgLnNlbGVjdCgndGV4dCcpXG4gICAgICAuYXR0cignZm9udC1mYW1pbHknLCBkID0+IHtcbiAgICAgICAgaWYgKGZvbnRSZW5kZXJpbmcgJiYgZm9udFJlbmRlcmluZy5sYWJlbCAmJiBmb250UmVuZGVyaW5nLmxhYmVsLmZhbWlseSkge1xuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmxhYmVsLmZhbWlseVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAnaW5oZXJpdCdcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5hdHRyKCdmb250LXdlaWdodCcsIGQgPT4ge1xuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmxhYmVsICYmIGZvbnRSZW5kZXJpbmcubGFiZWwud2VpZ2h0KSB7XG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcubGFiZWwud2VpZ2h0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICdpbmhlcml0J1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnNlbGVjdEFsbChcInRzcGFuXCIpXG4gICAgICAuZGF0YShkID0+IHtcbiAgICAgICAgaWYgKGQuciAvIDQgPiA0LjUpIHtcbiAgICAgICAgICAvLyBzaG93IHRleHQgYW5kIG51bWJlciB0aHJlc2hob2xkXG4gICAgICAgICAgbGV0IGxhYmVsID0gKFxuICAgICAgICAgICAgZC5kYXRhLmVudGl0eS5sYWJlbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgICBkLmRhdGEuZW50aXR5LmxhYmVsLnNsaWNlKDEpXG4gICAgICAgICAgKS5zcGxpdCgvICsvZyk7XG4gICAgICAgICAgaWYgKGxhYmVsLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgIGxhYmVsID0gbGFiZWwuc2xpY2UoMCwgMyk7XG4gICAgICAgICAgICBsYWJlbFsyXSArPSAn4oCmJztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICB9IGVsc2UgaWYgKGQuciAvIDQgPiAyLjUpIHtcbiAgICAgICAgICAvLyBzaG93IHRleHQgdGhyZXNoaG9sZFxuICAgICAgICAgIGxldCBsYWJlbCA9IChcbiAgICAgICAgICAgIGQuZGF0YS5lbnRpdHkubGFiZWwuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgK1xuICAgICAgICAgICAgZC5kYXRhLmVudGl0eS5sYWJlbC5zbGljZSgxKVxuICAgICAgICAgICkuc3BsaXQoLyArL2cpO1xuICAgICAgICAgIGlmIChsYWJlbC5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnNsaWNlKDAsIDMpO1xuICAgICAgICAgICAgbGFiZWxbMl0gKz0gJ+KApic7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJ3RzcGFuJylcbiAgICAgIC5hdHRyKFwieFwiLCAwKVxuICAgICAgLmF0dHIoXCJ5XCIsIChkLCBpLCBub2RlcykgPT4gYCR7aSAtIChub2Rlcy5sZW5ndGggKyAxKSAvIDIgKyAuOTd9ZW1gKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgICAgLnRleHQoZCA9PiBkKVxuXG4gICAgbGVhZlxuICAgICAgLnNlbGVjdCgnLmxhYmVsLWNvdW50JylcbiAgICAgIC5hdHRyKCdmb250LWZhbWlseScsIGQgPT4ge1xuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIgJiYgZm9udFJlbmRlcmluZy5jb3VudGVyLmZhbWlseSkge1xuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmNvdW50ZXIuZmFtaWx5XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICdpbmhlcml0J1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2ZvbnQtd2VpZ2h0JywgZCA9PiB7XG4gICAgICAgIGlmIChmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcuY291bnRlciAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIud2VpZ2h0KSB7XG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcuY291bnRlci53ZWlnaHRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gJ2luaGVyaXQnXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXG4gICAgICAudGV4dChkID0+IHtcbiAgICAgICAgaWYgKGQuciAvIDQgPiAyLjUpIHtcbiAgICAgICAgICAvLyBzaG93IHRleHQgYW5kIG51bWJlciB0aHJlc2hob2xkXG4gICAgICAgICAgcmV0dXJuIGQuZGF0YS5jb3VudFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5hdHRyKCd5JywgZCA9PiB7XG4gICAgICAgIGxldCBsYWJlbExlbmd0aCA9IGQuZGF0YS5lbnRpdHkubGFiZWwuc3BsaXQoLyArL2cpXG4gICAgICAgIGlmIChsYWJlbExlbmd0aC5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgbGFiZWxMZW5ndGggPSBsYWJlbExlbmd0aC5zbGljZSgwLCAzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7bGFiZWxMZW5ndGgubGVuZ3RoIC0gKGxhYmVsTGVuZ3RoLmxlbmd0aCArIDEpIC8gMiArIC45N31lbWBcbiAgICAgIH0pXG5cblxuICAgIGNvbnN0IGcgPSBsZWFmLmVudGVyKCkuYXBwZW5kKCdnJyk7XG5cbiAgICBnLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueCArIDF9LCR7ZC55ICsgMX0pYClcbiAgICAgIC5hdHRyKCdmb250LXNpemUnLCBkID0+IHtcbiAgICAgICAgdmFyIHNpemUgPSBkLnIgLyA1LjU7XG4gICAgICAgIHNpemUgKj0gMTtcbiAgICAgICAgc2l6ZSArPSAxO1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChzaXplKSArICdweCc7XG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2N1cnNvcicsICdwb2ludGVyJylcbiAgICAgIC5vbignY2xpY2snLCAoZCwgaSkgPT4ge1xuICAgICAgICB0aGlzLm9uQ2xpY2soZC5kYXRhLmVudGl0eS5pZCk7XG4gICAgICB9KVxuICAgICAgLmF0dHIoXCJpZFwiLCBkID0+IGBnXyR7ZC5kYXRhLmVudGl0eS5pZH1gKVxuICAgICAgLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgLmF0dHIoXCJpZFwiLCBkID0+IChkLmxlYWZVaWQgPSBkLmRhdGEuZW50aXR5LmlkKSlcbiAgICAgIC5hdHRyKCdyJywgMClcbiAgICAgIC50cmFuc2l0aW9uKHQpIC8vIGVudGVyKCkgdHJhbnNpdGlvbiBvbiA8Y2lyY2xlPlxuICAgICAgLmF0dHIoXCJmaWxsLW9wYWNpdHlcIiwgMSlcbiAgICAgIC5hdHRyKCdmaWxsJywgZCA9PiBjb2xvck1hcChkLmRhdGEuZW50aXR5LnR5cGVPZkVudGl0eSkpXG4gICAgICAuYXR0cihcInJcIiwgZCA9PiBkLnIpO1xuXG4gICAgZy5hcHBlbmQoXCJjbGlwUGF0aFwiKVxuICAgICAgLmF0dHIoXCJpZFwiLCBkID0+IChkLmNsaXBVaWQgPSAnQ2xpcC0nICsgZC5kYXRhLmVudGl0eS5pZCkpXG4gICAgICAuYXBwZW5kKFwidXNlXCIpXG4gICAgICAuYXR0cihcInhsaW5rOmhyZWZcIiwgZCA9PiBkLmxlYWZVaWQuaHJlZik7XG5cbiAgICBnLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZm9udC1mYW1pbHknLCBkID0+IHtcbiAgICAgICAgaWYgKGZvbnRSZW5kZXJpbmcgJiYgZm9udFJlbmRlcmluZy5sYWJlbCAmJiBmb250UmVuZGVyaW5nLmxhYmVsLmZhbWlseSkge1xuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmxhYmVsLmZhbWlseVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAnaW5oZXJpdCdcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5hdHRyKCdmb250LXdlaWdodCcsIGQgPT4ge1xuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcubGFiZWwgJiYgZm9udFJlbmRlcmluZy5sYWJlbC53ZWlnaHQpIHtcbiAgICAgICAgICByZXR1cm4gZm9udFJlbmRlcmluZy5sYWJlbC53ZWlnaHRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gJ2luaGVyaXQnXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuc2VsZWN0QWxsKFwidHNwYW5cIilcbiAgICAgIC5kYXRhKGQgPT4ge1xuICAgICAgICBpZiAoZC5yIC8gNCA+IDQuNSkge1xuICAgICAgICAgIC8vIHNob3cgdGV4dCBhbmQgbnVtYmVyIHRocmVzaGhvbGRcbiAgICAgICAgICBsZXQgbGFiZWwgPSAoXG4gICAgICAgICAgICBkLmRhdGEuZW50aXR5LmxhYmVsLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICtcbiAgICAgICAgICAgIGQuZGF0YS5lbnRpdHkubGFiZWwuc2xpY2UoMSlcbiAgICAgICAgICApLnNwbGl0KC8gKy9nKTtcbiAgICAgICAgICBpZiAobGFiZWwubGVuZ3RoID4gMykge1xuICAgICAgICAgICAgbGFiZWwgPSBsYWJlbC5zbGljZSgwLCAzKTtcbiAgICAgICAgICAgIGxhYmVsWzJdICs9ICfigKYnO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5yIC8gNCA+IDIuNSkge1xuICAgICAgICAgIC8vIHNob3cgdGV4dCB0aHJlc2hob2xkXG4gICAgICAgICAgbGV0IGxhYmVsID0gKFxuICAgICAgICAgICAgZC5kYXRhLmVudGl0eS5sYWJlbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgICBkLmRhdGEuZW50aXR5LmxhYmVsLnNsaWNlKDEpXG4gICAgICAgICAgKS5zcGxpdCgvICsvZyk7XG4gICAgICAgICAgaWYgKGxhYmVsLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgIGxhYmVsID0gbGFiZWwuc2xpY2UoMCwgMyk7XG4gICAgICAgICAgICBsYWJlbFsyXSArPSAn4oCmJztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH0pXG4gICAgICAuam9pbigndHNwYW4nKVxuICAgICAgLmF0dHIoXCJ4XCIsIDApXG4gICAgICAuYXR0cihcInlcIiwgKGQsIGksIG5vZGVzKSA9PiBgJHtpIC0gKG5vZGVzLmxlbmd0aCArIDEpIC8gMiArIC45N31lbWApXG4gICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXG4gICAgICAudGV4dChkID0+IGQpXG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMClcbiAgICAgIC50cmFuc2l0aW9uKHQpIC8vIGVudGVyKCkgdHJhbnNpdGlvbiBvbiA8dHNwYW4+XG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMSk7XG5cbiAgICBnLmFwcGVuZCgndGV4dCcpIC8vIENvdW50IGxhYmVsXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGFiZWwtY291bnQnKVxuICAgICAgLmF0dHIoJ2ZvbnQtZmFtaWx5JywgZCA9PiB7XG4gICAgICAgIGlmIChmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcuY291bnRlciAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIuZmFtaWx5KSB7XG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcuY291bnRlci5mYW1pbHlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gJ2luaGVyaXQnXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuYXR0cignZm9udC13ZWlnaHQnLCBkID0+IHtcbiAgICAgICAgaWYgKGZvbnRSZW5kZXJpbmcgJiYgZm9udFJlbmRlcmluZy5jb3VudGVyICYmIGZvbnRSZW5kZXJpbmcuY291bnRlci53ZWlnaHQpIHtcbiAgICAgICAgICByZXR1cm4gZm9udFJlbmRlcmluZy5jb3VudGVyLndlaWdodFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAnaW5oZXJpdCdcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJylcbiAgICAgIC50ZXh0KGQgPT4ge1xuICAgICAgICBpZiAoZC5yIC8gNCA+IDIuNSkge1xuICAgICAgICAgIC8vIHNob3cgdGV4dCBhbmQgbnVtYmVyIHRocmVzaGhvbGRcbiAgICAgICAgICByZXR1cm4gZC5kYXRhLmNvdW50XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmF0dHIoJ3knLCBkID0+IHtcbiAgICAgICAgbGV0IGxhYmVsTGVuZ3RoID0gZC5kYXRhLmVudGl0eS5sYWJlbC5zcGxpdCgvICsvZylcbiAgICAgICAgaWYgKGxhYmVsTGVuZ3RoLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICBsYWJlbExlbmd0aCA9IGxhYmVsTGVuZ3RoLnNsaWNlKDAsIDMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgJHtsYWJlbExlbmd0aC5sZW5ndGggLSAobGFiZWxMZW5ndGgubGVuZ3RoICsgMSkgLyAyICsgLjk3fWVtYFxuICAgICAgfSlcbiAgICAgIC5hdHRyKCdmaWxsLW9wYWNpdHknLCAwKVxuICAgICAgLnRyYW5zaXRpb24odCkgLy8gZW50ZXIoKSB0cmFuc2l0aW9uIG9uIDx0ZXh0PlxuICAgICAgLmF0dHIoJ2ZpbGwtb3BhY2l0eScsIDEpO1xuXG4gICAgbGVhZlxuICAgICAgLmV4aXQoKSAvLyBFWElUIENZQ0xFXG4gICAgICAucmVtb3ZlKCk7XG5cbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIGcuZmlsdGVyKGQgPT4gc2VsZWN0ZWQuaW5jbHVkZXMoZC5sZWFmVWlkKSkgLy8gYXBwZW5kICdYJyBpY29uIC8vIG9ubHkgZm9yIHNlbGVjdGVkIGJ1YmJsZXNcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgY2xvc2VJY29uUGF0aClcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2Nsb3NlLWljb24nKVxuICAgICAgICAuYXR0cignZmlsbCcsIGQgPT4ge1xuICAgICAgICAgIGlmIChkLnIgLyA0ID4gMi41KSB7XG4gICAgICAgICAgICByZXR1cm4gJyNmZmYnO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4ge1xuICAgICAgICAgIGlmIChkLnIgLyA0ID4gMykge1xuICAgICAgICAgICAgcmV0dXJuIGBzY2FsZSguMDgpIHRyYW5zbGF0ZSgwLCAke2QuciAqIDEwIC0gODB9KWA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBgc2NhbGUoLjA4KWA7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZW1pdCgnZDNlbmQnLCBkYXRhKSAvLyBjb21tdW5pY2F0ZSBlbmQgb2YgZHJhd1xuICB9XG59XG4iXX0=