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
                .transition(t) // update transition on <g>
                .attr('fill-opacity', 0.7)
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
                .attr("fill-opacity", 0.7)
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
                .transition(t) // enter() transition on <circle>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQvYnViYmxlLWNoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUE7Ozs7Ozs7Ozs7Ozs7QUFheEIsc0NBbUVDOzs7Ozs7SUEvREMsdUNBQW9COzs7OztJQUlwQixpQ0FBYzs7Ozs7SUFJZCxrQ0FBZTs7Ozs7SUFJZixnQ0FBVTs7Ozs7SUFJVixtQ0FBaUI7Ozs7OztJQUtqQixvQ0FBbUI7Ozs7OztJQUtuQixzQ0FHQzs7Ozs7SUFJRCxxQ0FBMkI7Ozs7OztJQUszQixzQ0FBbUI7Ozs7OztJQUtuQixtQ0FBaUI7Ozs7O0lBSWpCLHlDQVNDOzs7Ozs7SUFNRCxtQ0FBYzs7QUFPaEIsTUFBTSxPQUFPLG9CQUFvQjtJQUpqQztRQU9VLFlBQU8sR0FBWSxLQUFLLENBQUM7UUEwQmpDLFNBQUk7OztRQUFHLEdBQUcsRUFBRTtrQkFDSixFQUNKLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUN6QixLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFDM0IsU0FBUyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQzlCLGFBQWEsRUFDZCxHQUFHLElBQUksQ0FBQyxJQUFJOztrQkFDUCxhQUFhLEdBQUcseUZBQXlGOztnQkFFM0csQ0FBQyxHQUFHLEVBQUU7aUJBQ1AsVUFBVSxFQUFFO2lCQUNaLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLE9BQU8sVUFBVSxJQUFJLFFBQVEsRUFBRTtnQkFDakMsQ0FBQyxHQUFHLEVBQUU7cUJBQ0gsVUFBVSxFQUFFO3FCQUNaLFFBQVEsQ0FBQyxVQUFVLENBQUM7cUJBQ3BCLElBQUks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SUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7aUJBQzdCO1lBQ0gsQ0FBQyxFQUFDLENBQUE7U0FDSDtJQUNILENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQS9CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IscUpBQWtDO2FBQ25DOzs7bUJBRUUsS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sb0NBQWdDOztJQUNoQyxvQ0FBbUI7Ozs7O0lBQ25CLHVDQUFpQzs7SUEwQmpDLG9DQWlUQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBCVUJCTEVDSEFSVC50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBCdWJibGVDaGFydENvbXBvbmVudCdzIFwiZGF0YVwiXG4gKiBcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJJZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY29udGFpbmVyV2lkdGggKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNvbnRhaW5lckhlaWdodCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgYnViYmxlc0RhdGEgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGlzRm9yY2VTaW11bGF0aW9uRW5hYmxlZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcmVzZXQgKG9wdGlvbmFsKVxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUJ1YmJsZUNoYXJ0RGF0YSB7XG4gIC8qKlxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGJ1YmJsZS1jaGFydFxuICAgKi9cbiAgY29udGFpbmVySWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIHRvdGFsIHdpZHRoIGZvciB0aGUgYnViYmxlLWNoYXJ0XG4gICAqL1xuICB3aWR0aDogbnVtYmVyO1xuICAvKipcbiAgICogdG90YWwgaGVpZ2h0IGZvciB0aGUgYnViYmxlLWNoYXJ0XG4gICAqL1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIGRhdGEgYWJvdXQgdGhlIGJ1YmJsZXNcbiAgICovXG4gIGRhdGE6IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgY3NzIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBsaXN0IG9mIElEJ3Mgb2Ygc2VsZWN0ZWQgaXRlbXNcbiAgICogKHNlbGVjdGVkIGl0ZW1zIHdpbGwgcmVuZGVyIHdpdGggYSAnWCcgaWNvbilcbiAgICovXG4gIHNlbGVjdGVkPzogc3RyaW5nW11cbiAgLyoqXG4gICAqIFNwZWNpZnkgYSBsaXN0IG9mIHR5cGVPZkVudGl0eSB0eXBlcyAoZG9tYWluKSxcbiAgICogYW5kIGEgbGlzdCBvZiBjb2xvcnMgKHJhbmdlKSwgd2hpY2ggd2lsbCBiZSBtYXBwZWQgdG9nZXRoZXIuXG4gICAqL1xuICBjb2xvck1hdGNoPzoge1xuICAgIGRvbWFpbjogc3RyaW5nW10sXG4gICAgcmFuZ2U6IHN0cmluZ1tdLFxuICB9XG4gIC8qKlxuICAgKiBEZWZpbmUgYSBtYXggYW5kIG1pbiBzaXplIGZvciB0aGUgYnViYmxlc1xuICAgKi9cbiAgc2l6ZVJhbmdlOiBbbnVtYmVyLCBudW1iZXJdXG4gIC8qKlxuICAgKiBJZiBkZWZpbmVkLCB0cmFuc2l0aW9uIHdpbGwgYmUgYWN0aXZhdGVkXG4gICAqIGFuZCB0aGUgdmFsdWUgd2lsbCBiZSB1c2VkIGFzIGR1cmF0aW9uXG4gICAqL1xuICB0cmFuc2l0aW9uPzogbnVtYmVyXG4gIC8qKlxuICAgKiBJZiBzZXQgdG8gZmFsc2UsIHN0b3BzIHRoZSBzaHVmZmxpbmcgb2YgdGhlIGRhdGFcbiAgICogYmVmb3JlIHJlbmRlcmluZy5cbiAgICovXG4gIHNodWZmbGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBmb250LWZhbWlseSBhbmQgdGhlIGZvbnQtd2VpZ2h0IGZvciBlYWNoIHRleHQgZ3JvdXBcbiAgICovXG4gIGZvbnRSZW5kZXJpbmc/OiB7XG4gICAgbGFiZWw/OiB7XG4gICAgICBmYW1pbHk/OiBzdHJpbmcsXG4gICAgICB3ZWlnaHQ/OiBzdHJpbmcsXG4gICAgfSxcbiAgICBjb3VudGVyPzoge1xuICAgICAgZmFtaWx5Pzogc3RyaW5nLFxuICAgICAgd2VpZ2h0Pzogc3RyaW5nLFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBleHBvc2UgdGhlIGRyYXcgZnVuY3Rpb24gb3V0c2lkZSBvZiBuNy1mcm9udGVuZC9jb21wb25lbnRzIGxpYnJhcnlcbiAgICogdGhpcyBpcyBuZWVkZWQgdG8gcmVkcmF3IGJ1YmJsZS1jaGFydC1jb21wb25lbnQgb24gY29tbWFuZFxuICAgKi9cbiAgc2V0RHJhdz86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctYnViYmxlLWNoYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1YmJsZS1jaGFydC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBCdWJibGVDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuICBASW5wdXQoKSBkYXRhOiBJQnViYmxlQ2hhcnREYXRhO1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG4gIHByaXZhdGUgX2xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICAvKlxuICAgICBXYWl0cyBmb3IgdGhlIGRvbSB0byBiZSBsb2FkZWQsIHRoZW4gZmlyZXMgdGhlIGRyYXcgZnVuY3Rpb25cbiAgICAgdGhhdCByZW5kZXJzIHRoZSBjaGFydC5cbiAgICAqL1xuICAgIGlmICghdGhpcy5kYXRhKSB7XG4gICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xuICAgICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuc2V0RHJhdykge1xuICAgICAgICAgIHRoaXMuZGF0YS5zZXREcmF3KHRoaXMuZHJhdylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxuXG4gIGRyYXcgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgY29udGFpbmVySWQsIGRhdGEsIGhlaWdodCxcbiAgICAgIHdpZHRoLCBzZWxlY3RlZCwgdHJhbnNpdGlvbixcbiAgICAgIHNpemVSYW5nZSwgY29sb3JNYXRjaCwgc2h1ZmZsZSxcbiAgICAgIGZvbnRSZW5kZXJpbmdcbiAgICB9ID0gdGhpcy5kYXRhXG4gICAgY29uc3QgY2xvc2VJY29uUGF0aCA9ICdNIC01MCw0MCBMLTQwLDUwIDAsMTAgNDAsNTAgNTAsNDAgMTAsMCA1MCwtNDAgNDAsLTUwIDAsLTEwIC00MCwtNTAgLTUwLC00MCAtMTAsMCAtNTAsNDAnXG5cbiAgICBsZXQgdCA9IGQzXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oMClcbiAgICBpZiAodHlwZW9mIHRyYW5zaXRpb24gPT0gJ251bWJlcicpIHtcbiAgICAgIHQgPSBkM1xuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbih0cmFuc2l0aW9uKVxuICAgICAgICAuZWFzZShkMy5lYXNlQ3ViaWNJbk91dCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29sb3JNYXAgPSBkMy5zY2FsZU9yZGluYWwoKVxuICAgICAgLmRvbWFpbihjb2xvck1hdGNoID8gY29sb3JNYXRjaC5kb21haW4gOiBbJ3BlcnNvbmEnLCAnbHVvZ28nLCAnb3JnYW5penphemlvbmUnLCAnY29zYSBub3Rldm9sZSddKVxuICAgICAgLnJhbmdlKGNvbG9yTWF0Y2ggPyBjb2xvck1hdGNoLnJhbmdlIDogZDMuc2NoZW1lVGFibGVhdTEwKVxuXG4gICAgbGV0IHNpemVTY2FsZSA9IGQzIC8vIG1hcCBlbnRpdHkgY291bnQgdG8gYnViYmxlIHNpemVcbiAgICAgIC5zY2FsZUxpbmVhcigpXG4gICAgICAuZG9tYWluKFsxLCBkMy5tYXgoZGF0YSwgZCA9PiArZC5jb3VudCldKVxuICAgICAgLnJhbmdlKFszLCBkMy5tYXgoZGF0YSwgZCA9PiArZC5jb3VudCldKTtcblxuICAgIGNvbnN0IHBhY2sgPSBkYXRhID0+XG4gICAgICBkM1xuICAgICAgICAucGFjaygpXG4gICAgICAgIC5zaXplKFt3aWR0aCAtIDIsIGhlaWdodCAtIDJdKVxuICAgICAgICAucGFkZGluZygxLjUpKFxuICAgICAgICAgIGQzLmhpZXJhcmNoeSh7IGNoaWxkcmVuOiBkYXRhIH0pLnN1bShkID0+IHNpemVTY2FsZShkLmNvdW50KSlcbiAgICAgICAgKTtcblxuICAgIGNvbnN0IHJvb3QgPSAoKSA9PiB7IC8vIGlmIHNodWZmbGUgaXMgdW5kZWZpbmVkIG9yIHRydWUsIHNodWZmbGUgdGhlIGRhdGFcbiAgICAgIGlmICh0eXBlb2Ygc2h1ZmZsZSA9PSAndW5kZWZpbmVkJyB8fCBzaHVmZmxlKSB7XG4gICAgICAgIGxldCBzaHVmZkRhdGEgPSBkYXRhLnNsaWNlKCkgLy8gZG8gbm90IG1vZGlmeSB0aGUgc291cmNlIGRhdGEhXG4gICAgICAgIHJldHVybiBwYWNrKGQzLnNodWZmbGUoc2h1ZmZEYXRhKSlcbiAgICAgIH0gZWxzZSB7IC8vIGlmIHNodWZmbGUgaXMgc2V0IHRvIGZhbHNlLCBza2lwIHRoZSBkYXRhIHNodWZmbGVcbiAgICAgICAgcmV0dXJuIHBhY2soZGF0YSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzdmcgPSBkM1xuICAgICAgLnNlbGVjdChgIyR7Y29udGFpbmVySWR9YClcbiAgICAgIC5hdHRyKFwidmlld0JveFwiLCBbMCwgMCwgd2lkdGgsIGhlaWdodF0pXG4gICAgICAuYXR0cihcImZvbnQtZmFtaWx5XCIsIFwiVmVyZGFuYSwgR2VuZXZhLCBzYW5zLXNlcmlmXCIpXG4gICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpO1xuXG4gICAgY29uc3QgbGVhZiA9IHN2Zy5zZWxlY3RBbGwoJ2cnKS5kYXRhKHJvb3QoKS5sZWF2ZXMoKSwgZCA9PiBkLmRhdGEuZW50aXR5LmlkKTtcbiAgICBsZWFmXG4gICAgICAudHJhbnNpdGlvbih0KSAvLyB1cGRhdGUgdHJhbnNpdGlvbiBvbiA8Zz5cbiAgICAgIC5hdHRyKCdmaWxsLW9wYWNpdHknLCAwLjcpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC54ICsgMX0sJHtkLnkgKyAxfSlgKVxuICAgICAgLmF0dHIoJ2ZvbnQtc2l6ZScsIGQgPT4ge1xuICAgICAgICB2YXIgc2l6ZSA9IGQuciAvIDUuNTtcbiAgICAgICAgc2l6ZSAqPSAxO1xuICAgICAgICBzaXplICs9IDE7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHNpemUpICsgJ3B4JztcbiAgICAgIH0pXG5cbiAgICBsZWFmLnNlbGVjdEFsbCgnLmNsb3NlLWljb24nKS5yZW1vdmUoKSAvLyBjbGVhciBhbGwgZXhpc3RpbmcgY2xvc2UgaWNvbnNcbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIGxlYWYgLy8gcmVuZGVyIG5lY2Vzc2FyeSBjbG9zZSBpY29uc1xuICAgICAgICAuZmlsdGVyKGQgPT4gc2VsZWN0ZWQuaW5jbHVkZXMoZC5kYXRhLmVudGl0eS5pZCkpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnY2xvc2UtaWNvbicpXG4gICAgICAgIC5hdHRyKCdkJywgY2xvc2VJY29uUGF0aClcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnI2ZmZicpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IHtcbiAgICAgICAgICBpZiAoZC5yIC8gNCA+IDMpIHtcbiAgICAgICAgICAgIHJldHVybiBgc2NhbGUoLjA4KSB0cmFuc2xhdGUoMCwgJHtkLnIgKiAxMCAtIDgwfSlgO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYHNjYWxlKC4wOClgO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsZWFmXG4gICAgICAuc2VsZWN0KCdjaXJjbGUnKVxuICAgICAgLnRyYW5zaXRpb24odCkgLy8gdXBkYXRlIHRyYW5zaXRpb24gb24gPGNpcmNsZT5cbiAgICAgIC5hdHRyKFwiZmlsbC1vcGFjaXR5XCIsIDAuNylcbiAgICAgIC5hdHRyKCdyJywgZCA9PiBkLnIpO1xuXG4gICAgbGVhZlxuICAgICAgLnNlbGVjdCgndGV4dCcpXG4gICAgICAuYXR0cignZm9udC1mYW1pbHknLCBkID0+IHtcbiAgICAgICAgaWYgKGZvbnRSZW5kZXJpbmcgJiYgZm9udFJlbmRlcmluZy5sYWJlbCAmJiBmb250UmVuZGVyaW5nLmxhYmVsLmZhbWlseSkge1xuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmxhYmVsLmZhbWlseVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAnaW5oZXJpdCdcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5hdHRyKCdmb250LXdlaWdodCcsIGQgPT4ge1xuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmxhYmVsICYmIGZvbnRSZW5kZXJpbmcubGFiZWwud2VpZ2h0KSB7XG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcubGFiZWwud2VpZ2h0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICdpbmhlcml0J1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnNlbGVjdEFsbChcInRzcGFuXCIpXG4gICAgICAuZGF0YShkID0+IHtcbiAgICAgICAgaWYgKGQuciAvIDQgPiA0LjUpIHtcbiAgICAgICAgICAvLyBzaG93IHRleHQgYW5kIG51bWJlciB0aHJlc2hob2xkXG4gICAgICAgICAgbGV0IGxhYmVsID0gKFxuICAgICAgICAgICAgZC5kYXRhLmVudGl0eS5sYWJlbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgICBkLmRhdGEuZW50aXR5LmxhYmVsLnNsaWNlKDEpXG4gICAgICAgICAgKS5zcGxpdCgvICsvZyk7XG4gICAgICAgICAgaWYgKGxhYmVsLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgIGxhYmVsID0gbGFiZWwuc2xpY2UoMCwgMyk7XG4gICAgICAgICAgICBsYWJlbFsyXSArPSAn4oCmJztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICB9IGVsc2UgaWYgKGQuciAvIDQgPiAyLjUpIHtcbiAgICAgICAgICAvLyBzaG93IHRleHQgdGhyZXNoaG9sZFxuICAgICAgICAgIGxldCBsYWJlbCA9IChcbiAgICAgICAgICAgIGQuZGF0YS5lbnRpdHkubGFiZWwuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgK1xuICAgICAgICAgICAgZC5kYXRhLmVudGl0eS5sYWJlbC5zbGljZSgxKVxuICAgICAgICAgICkuc3BsaXQoLyArL2cpO1xuICAgICAgICAgIGlmIChsYWJlbC5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnNsaWNlKDAsIDMpO1xuICAgICAgICAgICAgbGFiZWxbMl0gKz0gJ+KApic7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJ3RzcGFuJylcbiAgICAgIC5hdHRyKFwieFwiLCAwKVxuICAgICAgLmF0dHIoXCJ5XCIsIChkLCBpLCBub2RlcykgPT4gYCR7aSAtIChub2Rlcy5sZW5ndGggKyAxKSAvIDIgKyAuOTd9ZW1gKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgICAgLnRleHQoZCA9PiBkKVxuXG4gICAgbGVhZlxuICAgICAgLnNlbGVjdCgnLmxhYmVsLWNvdW50JylcbiAgICAgIC5hdHRyKCdmb250LWZhbWlseScsIGQgPT4ge1xuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIgJiYgZm9udFJlbmRlcmluZy5jb3VudGVyLmZhbWlseSkge1xuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmNvdW50ZXIuZmFtaWx5XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICdpbmhlcml0J1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2ZvbnQtd2VpZ2h0JywgZCA9PiB7XG4gICAgICAgIGlmIChmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcuY291bnRlciAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIud2VpZ2h0KSB7XG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcuY291bnRlci53ZWlnaHRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gJ2luaGVyaXQnXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXG4gICAgICAudGV4dChkID0+IHtcbiAgICAgICAgaWYgKGQuciAvIDQgPiAyLjUpIHtcbiAgICAgICAgICAvLyBzaG93IHRleHQgYW5kIG51bWJlciB0aHJlc2hob2xkXG4gICAgICAgICAgcmV0dXJuIGQuZGF0YS5jb3VudFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5hdHRyKCd5JywgZCA9PiB7XG4gICAgICAgIGxldCBsYWJlbExlbmd0aCA9IGQuZGF0YS5lbnRpdHkubGFiZWwuc3BsaXQoLyArL2cpXG4gICAgICAgIGlmIChsYWJlbExlbmd0aC5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgbGFiZWxMZW5ndGggPSBsYWJlbExlbmd0aC5zbGljZSgwLCAzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7bGFiZWxMZW5ndGgubGVuZ3RoIC0gKGxhYmVsTGVuZ3RoLmxlbmd0aCArIDEpIC8gMiArIC45N31lbWBcbiAgICAgIH0pXG5cblxuICAgIGNvbnN0IGcgPSBsZWFmLmVudGVyKCkuYXBwZW5kKCdnJyk7XG5cbiAgICBnLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueCArIDF9LCR7ZC55ICsgMX0pYClcbiAgICAgIC5hdHRyKCdmb250LXNpemUnLCBkID0+IHtcbiAgICAgICAgdmFyIHNpemUgPSBkLnIgLyA1LjU7XG4gICAgICAgIHNpemUgKj0gMTtcbiAgICAgICAgc2l6ZSArPSAxO1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChzaXplKSArICdweCc7XG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2N1cnNvcicsICdwb2ludGVyJylcbiAgICAgIC5vbignY2xpY2snLCAoZCwgaSkgPT4ge1xuICAgICAgICB0aGlzLm9uQ2xpY2soZC5kYXRhLmVudGl0eS5pZCk7XG4gICAgICB9KVxuICAgICAgLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgLmF0dHIoXCJpZFwiLCBkID0+IChkLmxlYWZVaWQgPSBkLmRhdGEuZW50aXR5LmlkKSlcbiAgICAgIC5hdHRyKCdyJywgMClcbiAgICAgIC50cmFuc2l0aW9uKHQpIC8vIGVudGVyKCkgdHJhbnNpdGlvbiBvbiA8Y2lyY2xlPlxuICAgICAgLmF0dHIoXCJmaWxsLW9wYWNpdHlcIiwgMC43KVxuICAgICAgLmF0dHIoJ2ZpbGwnLCBkID0+IGNvbG9yTWFwKGQuZGF0YS5lbnRpdHkudHlwZU9mRW50aXR5KSlcbiAgICAgIC5hdHRyKFwiclwiLCBkID0+IGQucik7XG5cbiAgICBnLmFwcGVuZChcImNsaXBQYXRoXCIpXG4gICAgICAuYXR0cihcImlkXCIsIGQgPT4gKGQuY2xpcFVpZCA9ICdDbGlwLScgKyBkLmRhdGEuZW50aXR5LmlkKSlcbiAgICAgIC5hcHBlbmQoXCJ1c2VcIilcbiAgICAgIC5hdHRyKFwieGxpbms6aHJlZlwiLCBkID0+IGQubGVhZlVpZC5ocmVmKTtcblxuICAgIGcuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdmb250LWZhbWlseScsIGQgPT4ge1xuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmxhYmVsICYmIGZvbnRSZW5kZXJpbmcubGFiZWwuZmFtaWx5KSB7XG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcubGFiZWwuZmFtaWx5XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICdpbmhlcml0J1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2ZvbnQtd2VpZ2h0JywgZCA9PiB7XG4gICAgICAgIGlmIChmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcgJiYgZm9udFJlbmRlcmluZy5sYWJlbCAmJiBmb250UmVuZGVyaW5nLmxhYmVsLndlaWdodCkge1xuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmxhYmVsLndlaWdodFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAnaW5oZXJpdCdcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5zZWxlY3RBbGwoXCJ0c3BhblwiKVxuICAgICAgLmRhdGEoZCA9PiB7XG4gICAgICAgIGlmIChkLnIgLyA0ID4gNC41KSB7XG4gICAgICAgICAgLy8gc2hvdyB0ZXh0IGFuZCBudW1iZXIgdGhyZXNoaG9sZFxuICAgICAgICAgIGxldCBsYWJlbCA9IChcbiAgICAgICAgICAgIGQuZGF0YS5lbnRpdHkubGFiZWwuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgK1xuICAgICAgICAgICAgZC5kYXRhLmVudGl0eS5sYWJlbC5zbGljZSgxKVxuICAgICAgICAgICkuc3BsaXQoLyArL2cpO1xuICAgICAgICAgIGlmIChsYWJlbC5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnNsaWNlKDAsIDMpO1xuICAgICAgICAgICAgbGFiZWxbMl0gKz0gJ+KApic7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgfSBlbHNlIGlmIChkLnIgLyA0ID4gMi41KSB7XG4gICAgICAgICAgLy8gc2hvdyB0ZXh0IHRocmVzaGhvbGRcbiAgICAgICAgICBsZXQgbGFiZWwgPSAoXG4gICAgICAgICAgICBkLmRhdGEuZW50aXR5LmxhYmVsLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICtcbiAgICAgICAgICAgIGQuZGF0YS5lbnRpdHkubGFiZWwuc2xpY2UoMSlcbiAgICAgICAgICApLnNwbGl0KC8gKy9nKTtcbiAgICAgICAgICBpZiAobGFiZWwubGVuZ3RoID4gMykge1xuICAgICAgICAgICAgbGFiZWwgPSBsYWJlbC5zbGljZSgwLCAzKTtcbiAgICAgICAgICAgIGxhYmVsWzJdICs9ICfigKYnO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfSlcbiAgICAgIC5qb2luKCd0c3BhbicpXG4gICAgICAuYXR0cihcInhcIiwgMClcbiAgICAgIC5hdHRyKFwieVwiLCAoZCwgaSwgbm9kZXMpID0+IGAke2kgLSAobm9kZXMubGVuZ3RoICsgMSkgLyAyICsgLjk3fWVtYClcbiAgICAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJylcbiAgICAgIC50ZXh0KGQgPT4gZClcbiAgICAgIC5hdHRyKCdmaWxsLW9wYWNpdHknLCAwKVxuICAgICAgLnRyYW5zaXRpb24odCkgLy8gZW50ZXIoKSB0cmFuc2l0aW9uIG9uIDx0c3Bhbj5cbiAgICAgIC5hdHRyKCdmaWxsLW9wYWNpdHknLCAxKTtcblxuICAgIGcuYXBwZW5kKCd0ZXh0JykgLy8gQ291bnQgbGFiZWxcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsYWJlbC1jb3VudCcpXG4gICAgICAuYXR0cignZm9udC1mYW1pbHknLCBkID0+IHtcbiAgICAgICAgaWYgKGZvbnRSZW5kZXJpbmcgJiYgZm9udFJlbmRlcmluZy5jb3VudGVyICYmIGZvbnRSZW5kZXJpbmcuY291bnRlci5mYW1pbHkpIHtcbiAgICAgICAgICByZXR1cm4gZm9udFJlbmRlcmluZy5jb3VudGVyLmZhbWlseVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAnaW5oZXJpdCdcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5hdHRyKCdmb250LXdlaWdodCcsIGQgPT4ge1xuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIgJiYgZm9udFJlbmRlcmluZy5jb3VudGVyLndlaWdodCkge1xuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmNvdW50ZXIud2VpZ2h0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICdpbmhlcml0J1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgICAgLnRleHQoZCA9PiB7XG4gICAgICAgIGlmIChkLnIgLyA0ID4gMi41KSB7XG4gICAgICAgICAgLy8gc2hvdyB0ZXh0IGFuZCBudW1iZXIgdGhyZXNoaG9sZFxuICAgICAgICAgIHJldHVybiBkLmRhdGEuY291bnRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuYXR0cigneScsIGQgPT4ge1xuICAgICAgICBsZXQgbGFiZWxMZW5ndGggPSBkLmRhdGEuZW50aXR5LmxhYmVsLnNwbGl0KC8gKy9nKVxuICAgICAgICBpZiAobGFiZWxMZW5ndGgubGVuZ3RoID4gMykge1xuICAgICAgICAgIGxhYmVsTGVuZ3RoID0gbGFiZWxMZW5ndGguc2xpY2UoMCwgMyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke2xhYmVsTGVuZ3RoLmxlbmd0aCAtIChsYWJlbExlbmd0aC5sZW5ndGggKyAxKSAvIDIgKyAuOTd9ZW1gXG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2ZpbGwtb3BhY2l0eScsIDApXG4gICAgICAudHJhbnNpdGlvbih0KSAvLyBlbnRlcigpIHRyYW5zaXRpb24gb24gPHRleHQ+XG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMSk7XG5cbiAgICBsZWFmXG4gICAgICAuZXhpdCgpIC8vIEVYSVQgQ1lDTEVcbiAgICAgIC5yZW1vdmUoKTtcblxuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgZy5maWx0ZXIoZCA9PiBzZWxlY3RlZC5pbmNsdWRlcyhkLmxlYWZVaWQpKSAvLyBhcHBlbmQgJ1gnIGljb24gLy8gb25seSBmb3Igc2VsZWN0ZWQgYnViYmxlc1xuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmF0dHIoJ2QnLCBjbG9zZUljb25QYXRoKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnY2xvc2UtaWNvbicpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgZCA9PiB7XG4gICAgICAgICAgaWYgKGQuciAvIDQgPiAyLjUpIHtcbiAgICAgICAgICAgIHJldHVybiAnI2ZmZic7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAndHJhbnNwYXJlbnQnO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiB7XG4gICAgICAgICAgaWYgKGQuciAvIDQgPiAzKSB7XG4gICAgICAgICAgICByZXR1cm4gYHNjYWxlKC4wOCkgdHJhbnNsYXRlKDAsICR7ZC5yICogMTAgLSA4MH0pYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGBzY2FsZSguMDgpYDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdkM2VuZCcsIGRhdGEpIC8vIGNvbW11bmljYXRlIGVuZCBvZiBkcmF3XG4gIH1cbn1cbiJdfQ==