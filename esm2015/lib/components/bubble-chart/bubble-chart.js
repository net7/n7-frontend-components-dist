/**
 * @fileoverview added by tsickle
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
            const { containerId, data, height, width, selected, transition, sizeRange, colorMatch, shuffle } = this.data;
            /** @type {?} */
            const closeIconPath = 'M -50,40 L-40,50 0,10 40,50 50,40 10,0 50,-40 40,-50 0,-10 -40,-50 -50,-40 -10,0 -50,40';
            /** @type {?} */
            let t = d3
                .transition()
                .duration(0);
            if (typeof transition != 'undefined') {
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
                .domain(d3.extent(data, (/**
             * @param {?} d
             * @return {?}
             */
            d => +d.count)))
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
                    return pack(d3.shuffle(data));
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
                    label.push(d.data.count);
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
            (d, i, nodes) => `${i - nodes.length / 2 + .97}em`))
                .attr('fill', 'white')
                .text((/**
             * @param {?} d
             * @return {?}
             */
            d => d));
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
                    label.push(d.data.count);
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
            (d, i, nodes) => `${i - nodes.length / 2 + .97}em`))
                .attr('fill', 'white')
                .text((/**
             * @param {?} d
             * @return {?}
             */
            d => d))
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
        // Wait for DOM to be loaded, so the container can be selected
        // Does not work if changed to ngAfterContentChecked()
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
                template: "<div *ngIf=\"data\" class=\"n7-bubble-chart {{ data.classes || '' }}\">\r\n    <svg #bubbleChart id=\"{{data.containerId}}\"></svg>\r\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQvYnViYmxlLWNoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUE7Ozs7Ozs7Ozs7Ozs7QUFheEIsc0NBcURDOzs7Ozs7SUFqREMsdUNBQW9COzs7OztJQUlwQixpQ0FBYzs7Ozs7SUFJZCxrQ0FBZTs7Ozs7SUFJZixnQ0FBVTs7Ozs7SUFJVixtQ0FBaUI7Ozs7OztJQUtqQixvQ0FBbUI7Ozs7OztJQUtuQixzQ0FHQzs7Ozs7SUFJRCxxQ0FBMkI7Ozs7OztJQUszQixzQ0FBbUI7Ozs7OztJQUtuQixtQ0FBaUI7Ozs7OztJQUtqQixtQ0FBYzs7QUFPaEIsTUFBTSxPQUFPLG9CQUFvQjtJQUpqQztRQU9VLFlBQU8sR0FBWSxLQUFLLENBQUM7UUF3QmpDLFNBQUk7OztRQUFHLEdBQUcsRUFBRTtrQkFDSixFQUNKLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUN6QixLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFDM0IsU0FBUyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQy9CLEdBQUcsSUFBSSxDQUFDLElBQUk7O2tCQUNQLGFBQWEsR0FBRyx5RkFBeUY7O2dCQUUzRyxDQUFDLEdBQUcsRUFBRTtpQkFDUCxVQUFVLEVBQUU7aUJBQ1osUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksT0FBTyxVQUFVLElBQUksV0FBVyxFQUFFO2dCQUNwQyxDQUFDLEdBQUcsRUFBRTtxQkFDSCxVQUFVLEVBQUU7cUJBQ1osUUFBUSxDQUFDLFVBQVUsQ0FBQztxQkFDcEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMs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QUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQSxDQUFDLDBCQUEwQjtRQUNyRCxDQUFDLEVBQUE7SUFDSCxDQUFDOzs7O0lBbE9DLHFCQUFxQjtRQUNuQiw4REFBOEQ7UUFDOUQsc0RBQXNEO1FBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsT0FBTTtTQUNQO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQyxPQUFPO2dCQUFFLE9BQU87WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsVUFBVTs7O1lBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDWixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtpQkFDN0I7WUFDSCxDQUFDLEVBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBN0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQix5SkFBa0M7YUFDbkM7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETixvQ0FBZ0M7O0lBQ2hDLG9DQUFtQjs7Ozs7SUFDbkIsdUNBQWlDOztJQXdCakMsb0NBMk1DIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQlVCQkxFQ0hBUlQudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBCdWJibGVDaGFydENvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkgY29udGFpbmVySWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY29udGFpbmVyV2lkdGggKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY29udGFpbmVySGVpZ2h0IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGJ1YmJsZXNEYXRhIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGlzRm9yY2VTaW11bGF0aW9uRW5hYmxlZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHJlc2V0IChvcHRpb25hbClcclxuKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQnViYmxlQ2hhcnREYXRhIHtcclxuICAvKipcclxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGJ1YmJsZS1jaGFydFxyXG4gICAqL1xyXG4gIGNvbnRhaW5lcklkOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogdG90YWwgd2lkdGggZm9yIHRoZSBidWJibGUtY2hhcnRcclxuICAgKi9cclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIHRvdGFsIGhlaWdodCBmb3IgdGhlIGJ1YmJsZS1jaGFydFxyXG4gICAqL1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIGRhdGEgYWJvdXQgdGhlIGJ1YmJsZXNcclxuICAgKi9cclxuICBkYXRhOiBhbnk7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBjc3MgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogbGlzdCBvZiBJRCdzIG9mIHNlbGVjdGVkIGl0ZW1zXHJcbiAgICogKHNlbGVjdGVkIGl0ZW1zIHdpbGwgcmVuZGVyIHdpdGggYSAnWCcgaWNvbilcclxuICAgKi9cclxuICBzZWxlY3RlZD86IHN0cmluZ1tdXHJcbiAgLyoqXHJcbiAgICogU3BlY2lmeSBhIGxpc3Qgb2YgdHlwZU9mRW50aXR5IHR5cGVzIChkb21haW4pLFxyXG4gICAqIGFuZCBhIGxpc3Qgb2YgY29sb3JzIChyYW5nZSksIHdoaWNoIHdpbGwgYmUgbWFwcGVkIHRvZ2V0aGVyLlxyXG4gICAqL1xyXG4gIGNvbG9yTWF0Y2g/OiB7XHJcbiAgICBkb21haW46IHN0cmluZ1tdLFxyXG4gICAgcmFuZ2U6IHN0cmluZ1tdLFxyXG4gIH1cclxuICAvKipcclxuICAgKiBEZWZpbmUgYSBtYXggYW5kIG1pbiBzaXplIGZvciB0aGUgYnViYmxlc1xyXG4gICAqL1xyXG4gIHNpemVSYW5nZTogW251bWJlciwgbnVtYmVyXVxyXG4gIC8qKlxyXG4gICAqIElmIGRlZmluZWQsIHRyYW5zaXRpb24gd2lsbCBiZSBhY3RpdmF0ZWRcclxuICAgKiBhbmQgdGhlIHZhbHVlIHdpbGwgYmUgdXNlZCBhcyBkdXJhdGlvblxyXG4gICAqL1xyXG4gIHRyYW5zaXRpb24/OiBudW1iZXJcclxuICAvKipcclxuICAgKiBJZiBzZXQgdG8gZmFsc2UsIHN0b3BzIHRoZSBzaHVmZmxpbmcgb2YgdGhlIGRhdGFcclxuICAgKiBiZWZvcmUgcmVuZGVyaW5nLlxyXG4gICAqL1xyXG4gIHNodWZmbGU/OiBib29sZWFuXHJcbiAgLyoqXHJcbiAgICogZXhwb3NlIHRoZSBkcmF3IGZ1bmN0aW9uIG91dHNpZGUgb2YgbjctZnJvbnRlbmQvY29tcG9uZW50cyBsaWJyYXJ5XHJcbiAgICogdGhpcyBpcyBuZWVkZWQgdG8gcmVkcmF3IGJ1YmJsZS1jaGFydC1jb21wb25lbnQgb24gY29tbWFuZFxyXG4gICAqL1xyXG4gIHNldERyYXc/OiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctYnViYmxlLWNoYXJ0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnViYmxlLWNoYXJ0Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdWJibGVDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IElCdWJibGVDaGFydERhdGE7XHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG4gIHByaXZhdGUgX2xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XHJcbiAgICAvLyBXYWl0IGZvciBET00gdG8gYmUgbG9hZGVkLCBzbyB0aGUgY29udGFpbmVyIGNhbiBiZSBzZWxlY3RlZFxyXG4gICAgLy8gRG9lcyBub3Qgd29yayBpZiBjaGFuZ2VkIHRvIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpXHJcbiAgICBpZiAoIXRoaXMuZGF0YSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLl9sb2FkZWQpIHJldHVybjtcclxuICAgICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuc2V0RHJhdykge1xyXG4gICAgICAgICAgdGhpcy5kYXRhLnNldERyYXcodGhpcy5kcmF3KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZCkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIGRyYXcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGNvbnRhaW5lcklkLCBkYXRhLCBoZWlnaHQsXHJcbiAgICAgIHdpZHRoLCBzZWxlY3RlZCwgdHJhbnNpdGlvbixcclxuICAgICAgc2l6ZVJhbmdlLCBjb2xvck1hdGNoLCBzaHVmZmxlXHJcbiAgICB9ID0gdGhpcy5kYXRhXHJcbiAgICBjb25zdCBjbG9zZUljb25QYXRoID0gJ00gLTUwLDQwIEwtNDAsNTAgMCwxMCA0MCw1MCA1MCw0MCAxMCwwIDUwLC00MCA0MCwtNTAgMCwtMTAgLTQwLC01MCAtNTAsLTQwIC0xMCwwIC01MCw0MCdcclxuXHJcbiAgICBsZXQgdCA9IGQzXHJcbiAgICAgIC50cmFuc2l0aW9uKClcclxuICAgICAgLmR1cmF0aW9uKDApXHJcbiAgICBpZiAodHlwZW9mIHRyYW5zaXRpb24gIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdCA9IGQzXHJcbiAgICAgICAgLnRyYW5zaXRpb24oKVxyXG4gICAgICAgIC5kdXJhdGlvbih0cmFuc2l0aW9uKVxyXG4gICAgICAgIC5lYXNlKGQzLmVhc2VDdWJpY0luT3V0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb2xvck1hcCA9IGQzLnNjYWxlT3JkaW5hbCgpXHJcbiAgICAgIC5kb21haW4oY29sb3JNYXRjaCA/IGNvbG9yTWF0Y2guZG9tYWluIDogWydwZXJzb25hJywgJ2x1b2dvJywgJ29yZ2FuaXp6YXppb25lJywgJ2Nvc2Egbm90ZXZvbGUnXSlcclxuICAgICAgLnJhbmdlKGNvbG9yTWF0Y2ggPyBjb2xvck1hdGNoLnJhbmdlIDogZDMuc2NoZW1lVGFibGVhdTEwKVxyXG5cclxuICAgIGxldCBzaXplU2NhbGUgPSBkMyAvLyBtYXAgZW50aXR5IGNvdW50IHRvIGJ1YmJsZSBzaXplXHJcbiAgICAgIC5zY2FsZUxpbmVhcigpXHJcbiAgICAgIC5kb21haW4oZDMuZXh0ZW50KGRhdGEsIGQgPT4gK2QuY291bnQpKVxyXG4gICAgICAucmFuZ2UoWzMsIGQzLm1heChkYXRhLCBkID0+ICtkLmNvdW50KV0pO1xyXG5cclxuICAgIGNvbnN0IHBhY2sgPSBkYXRhID0+XHJcbiAgICAgIGQzXHJcbiAgICAgICAgLnBhY2soKVxyXG4gICAgICAgIC5zaXplKFt3aWR0aCAtIDIsIGhlaWdodCAtIDJdKVxyXG4gICAgICAgIC5wYWRkaW5nKDEuNSkoXHJcbiAgICAgICAgICBkMy5oaWVyYXJjaHkoeyBjaGlsZHJlbjogZGF0YSB9KS5zdW0oZCA9PiBzaXplU2NhbGUoZC5jb3VudCkpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICBjb25zdCByb290ID0gKCkgPT4geyAvLyBpZiBzaHVmZmxlIGlzIHVuZGVmaW5lZCBvciB0cnVlLCBzaHVmZmxlIHRoZSBkYXRhXHJcbiAgICAgIGlmICh0eXBlb2Ygc2h1ZmZsZSA9PSAndW5kZWZpbmVkJyB8fCBzaHVmZmxlKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhY2soZDMuc2h1ZmZsZShkYXRhKSlcclxuICAgICAgfSBlbHNlIHsgLy8gaWYgc2h1ZmZsZSBpcyBzZXQgdG8gZmFsc2UsIHNraXAgdGhlIGRhdGEgc2h1ZmZsZVxyXG4gICAgICAgIHJldHVybiBwYWNrKGRhdGEpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdmcgPSBkM1xyXG4gICAgICAuc2VsZWN0KGAjJHtjb250YWluZXJJZH1gKVxyXG4gICAgICAuYXR0cihcInZpZXdCb3hcIiwgWzAsIDAsIHdpZHRoLCBoZWlnaHRdKVxyXG4gICAgICAuYXR0cihcImZvbnQtZmFtaWx5XCIsIFwiVmVyZGFuYSwgR2VuZXZhLCBzYW5zLXNlcmlmXCIpXHJcbiAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIik7XHJcblxyXG4gICAgY29uc3QgbGVhZiA9IHN2Zy5zZWxlY3RBbGwoJ2cnKS5kYXRhKHJvb3QoKS5sZWF2ZXMoKSwgZCA9PiBkLmRhdGEuZW50aXR5LmlkKTtcclxuICAgIGxlYWZcclxuICAgICAgLnRyYW5zaXRpb24odClcclxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueCArIDF9LCR7ZC55ICsgMX0pYClcclxuICAgICAgLmF0dHIoJ2ZvbnQtc2l6ZScsIGQgPT4ge1xyXG4gICAgICAgIHZhciBzaXplID0gZC5yIC8gNS41O1xyXG4gICAgICAgIHNpemUgKj0gMTtcclxuICAgICAgICBzaXplICs9IDE7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoc2l6ZSkgKyAncHgnO1xyXG4gICAgICB9KVxyXG5cclxuICAgIGxlYWYuc2VsZWN0QWxsKCcuY2xvc2UtaWNvbicpLnJlbW92ZSgpIC8vIGNsZWFyIGFsbCBleGlzdGluZyBjbG9zZSBpY29uc1xyXG4gICAgbGVhZiAvLyByZW5kZXIgbmVjZXNzYXJ5IGNsb3NlIGljb25zXHJcbiAgICAgIC5maWx0ZXIoZCA9PiBzZWxlY3RlZC5pbmNsdWRlcyhkLmRhdGEuZW50aXR5LmlkKSlcclxuICAgICAgLmFwcGVuZCgncGF0aCcpXHJcbiAgICAgIC5hdHRyKCdjbGFzcycsICdjbG9zZS1pY29uJylcclxuICAgICAgLmF0dHIoJ2QnLCBjbG9zZUljb25QYXRoKVxyXG4gICAgICAuYXR0cignZmlsbCcsICcjZmZmJylcclxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4ge1xyXG4gICAgICAgIGlmIChkLnIgLyA0ID4gMykge1xyXG4gICAgICAgICAgcmV0dXJuIGBzY2FsZSguMDgpIHRyYW5zbGF0ZSgwLCAke2QuciAqIDEwIC0gODB9KWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBgc2NhbGUoLjA4KWA7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGxlYWZcclxuICAgICAgLnNlbGVjdCgnY2lyY2xlJylcclxuICAgICAgLnRyYW5zaXRpb24odClcclxuICAgICAgLmF0dHIoJ3InLCBkID0+IGQucik7XHJcblxyXG4gICAgbGVhZlxyXG4gICAgICAuc2VsZWN0KCd0ZXh0JylcclxuICAgICAgLnNlbGVjdEFsbChcInRzcGFuXCIpXHJcbiAgICAgIC5kYXRhKGQgPT4ge1xyXG4gICAgICAgIGlmIChkLnIgLyA0ID4gNC41KSB7XHJcbiAgICAgICAgICAvLyBzaG93IHRleHQgYW5kIG51bWJlciB0aHJlc2hob2xkXHJcbiAgICAgICAgICBsZXQgbGFiZWwgPSAoXHJcbiAgICAgICAgICAgIGQuZGF0YS5lbnRpdHkubGFiZWwuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgK1xyXG4gICAgICAgICAgICBkLmRhdGEuZW50aXR5LmxhYmVsLnNsaWNlKDEpXHJcbiAgICAgICAgICApLnNwbGl0KC8gKy9nKTtcclxuICAgICAgICAgIGlmIChsYWJlbC5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgIGxhYmVsID0gbGFiZWwuc2xpY2UoMCwgMyk7XHJcbiAgICAgICAgICAgIGxhYmVsWzJdICs9ICfigKYnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGFiZWwucHVzaChkLmRhdGEuY291bnQpO1xyXG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZC5yIC8gNCA+IDIuNSkge1xyXG4gICAgICAgICAgLy8gc2hvdyB0ZXh0IHRocmVzaGhvbGRcclxuICAgICAgICAgIGxldCBsYWJlbCA9IChcclxuICAgICAgICAgICAgZC5kYXRhLmVudGl0eS5sYWJlbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXHJcbiAgICAgICAgICAgIGQuZGF0YS5lbnRpdHkubGFiZWwuc2xpY2UoMSlcclxuICAgICAgICAgICkuc3BsaXQoLyArL2cpO1xyXG4gICAgICAgICAgaWYgKGxhYmVsLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgbGFiZWwgPSBsYWJlbC5zbGljZSgwLCAzKTtcclxuICAgICAgICAgICAgbGFiZWxbMl0gKz0gJ+KApic7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gbGFiZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgICAgfSlcclxuICAgICAgLmpvaW4oJ3RzcGFuJylcclxuICAgICAgLmF0dHIoXCJ4XCIsIDApXHJcbiAgICAgIC5hdHRyKFwieVwiLCAoZCwgaSwgbm9kZXMpID0+IGAke2kgLSBub2Rlcy5sZW5ndGggLyAyICsgLjk3fWVtYClcclxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxyXG4gICAgICAudGV4dChkID0+IGQpO1xyXG5cclxuICAgIGNvbnN0IGcgPSBsZWFmLmVudGVyKCkuYXBwZW5kKCdnJyk7XHJcblxyXG4gICAgZy5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnggKyAxfSwke2QueSArIDF9KWApXHJcbiAgICAgIC5hdHRyKCdmb250LXNpemUnLCBkID0+IHtcclxuICAgICAgICB2YXIgc2l6ZSA9IGQuciAvIDUuNTtcclxuICAgICAgICBzaXplICo9IDE7XHJcbiAgICAgICAgc2l6ZSArPSAxO1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHNpemUpICsgJ3B4JztcclxuICAgICAgfSlcclxuICAgICAgLmF0dHIoJ2N1cnNvcicsICdwb2ludGVyJylcclxuICAgICAgLm9uKCdjbGljaycsIChkLCBpKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbkNsaWNrKGQuZGF0YS5lbnRpdHkuaWQpO1xyXG4gICAgICB9KVxyXG4gICAgICAuYXBwZW5kKFwiY2lyY2xlXCIpXHJcbiAgICAgIC5hdHRyKFwiaWRcIiwgZCA9PiAoZC5sZWFmVWlkID0gZC5kYXRhLmVudGl0eS5pZCkpXHJcbiAgICAgIC5hdHRyKCdyJywgMClcclxuICAgICAgLnRyYW5zaXRpb24odClcclxuICAgICAgLmF0dHIoXCJmaWxsLW9wYWNpdHlcIiwgMC43KVxyXG4gICAgICAuYXR0cignZmlsbCcsIGQgPT4gY29sb3JNYXAoZC5kYXRhLmVudGl0eS50eXBlT2ZFbnRpdHkpKVxyXG4gICAgICAuYXR0cihcInJcIiwgZCA9PiBkLnIpO1xyXG5cclxuICAgIGcuYXBwZW5kKFwiY2xpcFBhdGhcIilcclxuICAgICAgLmF0dHIoXCJpZFwiLCBkID0+IChkLmNsaXBVaWQgPSAnQ2xpcC0nICsgZC5kYXRhLmVudGl0eS5pZCkpXHJcbiAgICAgIC5hcHBlbmQoXCJ1c2VcIilcclxuICAgICAgLmF0dHIoXCJ4bGluazpocmVmXCIsIGQgPT4gZC5sZWFmVWlkLmhyZWYpO1xyXG5cclxuICAgIGcuYXBwZW5kKCd0ZXh0JylcclxuICAgICAgLnNlbGVjdEFsbChcInRzcGFuXCIpXHJcbiAgICAgIC5kYXRhKGQgPT4ge1xyXG4gICAgICAgIGlmIChkLnIgLyA0ID4gNC41KSB7XHJcbiAgICAgICAgICAvLyBzaG93IHRleHQgYW5kIG51bWJlciB0aHJlc2hob2xkXHJcbiAgICAgICAgICBsZXQgbGFiZWwgPSAoXHJcbiAgICAgICAgICAgIGQuZGF0YS5lbnRpdHkubGFiZWwuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgK1xyXG4gICAgICAgICAgICBkLmRhdGEuZW50aXR5LmxhYmVsLnNsaWNlKDEpXHJcbiAgICAgICAgICApLnNwbGl0KC8gKy9nKTtcclxuICAgICAgICAgIGlmIChsYWJlbC5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgIGxhYmVsID0gbGFiZWwuc2xpY2UoMCwgMyk7XHJcbiAgICAgICAgICAgIGxhYmVsWzJdICs9ICfigKYnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGFiZWwucHVzaChkLmRhdGEuY291bnQpO1xyXG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZC5yIC8gNCA+IDIuNSkge1xyXG4gICAgICAgICAgLy8gc2hvdyB0ZXh0IHRocmVzaGhvbGRcclxuICAgICAgICAgIGxldCBsYWJlbCA9IChcclxuICAgICAgICAgICAgZC5kYXRhLmVudGl0eS5sYWJlbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXHJcbiAgICAgICAgICAgIGQuZGF0YS5lbnRpdHkubGFiZWwuc2xpY2UoMSlcclxuICAgICAgICAgICkuc3BsaXQoLyArL2cpO1xyXG4gICAgICAgICAgaWYgKGxhYmVsLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgbGFiZWwgPSBsYWJlbC5zbGljZSgwLCAzKTtcclxuICAgICAgICAgICAgbGFiZWxbMl0gKz0gJ+KApic7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gbGFiZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgICAgfSlcclxuICAgICAgLmpvaW4oJ3RzcGFuJylcclxuICAgICAgLmF0dHIoXCJ4XCIsIDApXHJcbiAgICAgIC5hdHRyKFwieVwiLCAoZCwgaSwgbm9kZXMpID0+IGAke2kgLSBub2Rlcy5sZW5ndGggLyAyICsgLjk3fWVtYClcclxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxyXG4gICAgICAudGV4dChkID0+IGQpXHJcbiAgICAgIC5hdHRyKCdmaWxsLW9wYWNpdHknLCAwKVxyXG4gICAgICAudHJhbnNpdGlvbih0KVxyXG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMSk7XHJcblxyXG4gICAgbGVhZlxyXG4gICAgICAuZXhpdCgpIC8vIEVYSVQgQ1lDTEVcclxuICAgICAgLnJlbW92ZSgpO1xyXG5cclxuICAgIGlmIChzZWxlY3RlZCkge1xyXG4gICAgICBnLmZpbHRlcihkID0+IHNlbGVjdGVkLmluY2x1ZGVzKGQubGVhZlVpZCkpIC8vIGFwcGVuZCAnWCcgaWNvbiAvLyBvbmx5IGZvciBzZWxlY3RlZCBidWJibGVzXHJcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXHJcbiAgICAgICAgLmF0dHIoJ2QnLCBjbG9zZUljb25QYXRoKVxyXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdjbG9zZS1pY29uJylcclxuICAgICAgICAuYXR0cignZmlsbCcsIGQgPT4ge1xyXG4gICAgICAgICAgaWYgKGQuciAvIDQgPiAyLjUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcjZmZmJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiAndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4ge1xyXG4gICAgICAgICAgaWYgKGQuciAvIDQgPiAzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgc2NhbGUoLjA4KSB0cmFuc2xhdGUoMCwgJHtkLnIgKiAxMCAtIDgwfSlgO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGBzY2FsZSguMDgpYDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVtaXQoJ2QzZW5kJywgZGF0YSkgLy8gY29tbXVuaWNhdGUgZW5kIG9mIGRyYXdcclxuICB9XHJcbn0iXX0=