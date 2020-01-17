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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQvYnViYmxlLWNoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUE7Ozs7Ozs7Ozs7Ozs7QUFheEIsc0NBbUVDOzs7Ozs7SUEvREMsdUNBQW9COzs7OztJQUlwQixpQ0FBYzs7Ozs7SUFJZCxrQ0FBZTs7Ozs7SUFJZixnQ0FBVTs7Ozs7SUFJVixtQ0FBaUI7Ozs7OztJQUtqQixvQ0FBbUI7Ozs7OztJQUtuQixzQ0FHQzs7Ozs7SUFJRCxxQ0FBMkI7Ozs7OztJQUszQixzQ0FBbUI7Ozs7OztJQUtuQixtQ0FBaUI7Ozs7O0lBSWpCLHlDQVNDOzs7Ozs7SUFNRCxtQ0FBYzs7QUFPaEIsTUFBTSxPQUFPLG9CQUFvQjtJQUpqQztRQU9VLFlBQU8sR0FBWSxLQUFLLENBQUM7UUEwQmpDLFNBQUk7OztRQUFHLEdBQUcsRUFBRTtrQkFDSixFQUNKLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUN6QixLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFDM0IsU0FBUyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQzlCLGFBQWEsRUFDZCxHQUFHLElBQUksQ0FBQyxJQUFJOztrQkFDUCxhQUFhLEdBQUcseUZBQXlGOztnQkFFM0csQ0FBQyxHQUFHLEVBQUU7aUJBQ1AsVUFBVSxFQUFFO2lCQUNaLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLE9BQU8sVUFBVSxJQUFJLFFBQVEsRUFBRTtnQkFDakMsQ0FBQyxHQUFHLEVBQUU7cUJBQ0gsVUFBVSxFQUFFO3FCQUNaLFFBQVEsQ0FBQyxVQUFVLENBQUM7cUJBQ3BCLElBQUks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QUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixVQUFVOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNaLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO2lCQUM3QjtZQUNILENBQUMsRUFBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUEvQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLHlKQUFrQzthQUNuQzs7O21CQUVFLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLG9DQUFnQzs7SUFDaEMsb0NBQW1COzs7OztJQUNuQix1Q0FBaUM7O0lBMEJqQyxvQ0FrVEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBCVUJCTEVDSEFSVC50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEJ1YmJsZUNoYXJ0Q29tcG9uZW50J3MgXCJkYXRhXCJcclxuICogXHJcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJJZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJXaWR0aCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJIZWlnaHQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgYnViYmxlc0RhdGEgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcmVzZXQgKG9wdGlvbmFsKVxyXG4qL1xyXG5leHBvcnQgaW50ZXJmYWNlIElCdWJibGVDaGFydERhdGEge1xyXG4gIC8qKlxyXG4gICAqIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgYnViYmxlLWNoYXJ0XHJcbiAgICovXHJcbiAgY29udGFpbmVySWQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiB0b3RhbCB3aWR0aCBmb3IgdGhlIGJ1YmJsZS1jaGFydFxyXG4gICAqL1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogdG90YWwgaGVpZ2h0IGZvciB0aGUgYnViYmxlLWNoYXJ0XHJcbiAgICovXHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogZGF0YSBhYm91dCB0aGUgYnViYmxlc1xyXG4gICAqL1xyXG4gIGRhdGE6IGFueTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGNzcyBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBsaXN0IG9mIElEJ3Mgb2Ygc2VsZWN0ZWQgaXRlbXNcclxuICAgKiAoc2VsZWN0ZWQgaXRlbXMgd2lsbCByZW5kZXIgd2l0aCBhICdYJyBpY29uKVxyXG4gICAqL1xyXG4gIHNlbGVjdGVkPzogc3RyaW5nW11cclxuICAvKipcclxuICAgKiBTcGVjaWZ5IGEgbGlzdCBvZiB0eXBlT2ZFbnRpdHkgdHlwZXMgKGRvbWFpbiksXHJcbiAgICogYW5kIGEgbGlzdCBvZiBjb2xvcnMgKHJhbmdlKSwgd2hpY2ggd2lsbCBiZSBtYXBwZWQgdG9nZXRoZXIuXHJcbiAgICovXHJcbiAgY29sb3JNYXRjaD86IHtcclxuICAgIGRvbWFpbjogc3RyaW5nW10sXHJcbiAgICByYW5nZTogc3RyaW5nW10sXHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIERlZmluZSBhIG1heCBhbmQgbWluIHNpemUgZm9yIHRoZSBidWJibGVzXHJcbiAgICovXHJcbiAgc2l6ZVJhbmdlOiBbbnVtYmVyLCBudW1iZXJdXHJcbiAgLyoqXHJcbiAgICogSWYgZGVmaW5lZCwgdHJhbnNpdGlvbiB3aWxsIGJlIGFjdGl2YXRlZFxyXG4gICAqIGFuZCB0aGUgdmFsdWUgd2lsbCBiZSB1c2VkIGFzIGR1cmF0aW9uXHJcbiAgICovXHJcbiAgdHJhbnNpdGlvbj86IG51bWJlclxyXG4gIC8qKlxyXG4gICAqIElmIHNldCB0byBmYWxzZSwgc3RvcHMgdGhlIHNodWZmbGluZyBvZiB0aGUgZGF0YVxyXG4gICAqIGJlZm9yZSByZW5kZXJpbmcuXHJcbiAgICovXHJcbiAgc2h1ZmZsZT86IGJvb2xlYW5cclxuICAvKipcclxuICAgKiBEZWZpbmVzIHRoZSBmb250LWZhbWlseSBhbmQgdGhlIGZvbnQtd2VpZ2h0IGZvciBlYWNoIHRleHQgZ3JvdXBcclxuICAgKi9cclxuICBmb250UmVuZGVyaW5nPzoge1xyXG4gICAgbGFiZWw/OiB7XHJcbiAgICAgIGZhbWlseT86IHN0cmluZyxcclxuICAgICAgd2VpZ2h0Pzogc3RyaW5nLFxyXG4gICAgfSxcclxuICAgIGNvdW50ZXI/OiB7XHJcbiAgICAgIGZhbWlseT86IHN0cmluZyxcclxuICAgICAgd2VpZ2h0Pzogc3RyaW5nLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZXhwb3NlIHRoZSBkcmF3IGZ1bmN0aW9uIG91dHNpZGUgb2YgbjctZnJvbnRlbmQvY29tcG9uZW50cyBsaWJyYXJ5XHJcbiAgICogdGhpcyBpcyBuZWVkZWQgdG8gcmVkcmF3IGJ1YmJsZS1jaGFydC1jb21wb25lbnQgb24gY29tbWFuZFxyXG4gICAqL1xyXG4gIHNldERyYXc/OiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctYnViYmxlLWNoYXJ0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnViYmxlLWNoYXJ0Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdWJibGVDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IElCdWJibGVDaGFydERhdGE7XHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG4gIHByaXZhdGUgX2xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XHJcbiAgICAvKlxyXG4gICAgIFdhaXRzIGZvciB0aGUgZG9tIHRvIGJlIGxvYWRlZCwgdGhlbiBmaXJlcyB0aGUgZHJhdyBmdW5jdGlvblxyXG4gICAgIHRoYXQgcmVuZGVycyB0aGUgY2hhcnQuXHJcbiAgICAqL1xyXG4gICAgaWYgKCF0aGlzLmRhdGEpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5fbG9hZGVkKSByZXR1cm47XHJcbiAgICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLnNldERyYXcpIHtcclxuICAgICAgICAgIHRoaXMuZGF0YS5zZXREcmF3KHRoaXMuZHJhdylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrKHBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgfVxyXG5cclxuICBkcmF3ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBjb250YWluZXJJZCwgZGF0YSwgaGVpZ2h0LFxyXG4gICAgICB3aWR0aCwgc2VsZWN0ZWQsIHRyYW5zaXRpb24sXHJcbiAgICAgIHNpemVSYW5nZSwgY29sb3JNYXRjaCwgc2h1ZmZsZSxcclxuICAgICAgZm9udFJlbmRlcmluZ1xyXG4gICAgfSA9IHRoaXMuZGF0YVxyXG4gICAgY29uc3QgY2xvc2VJY29uUGF0aCA9ICdNIC01MCw0MCBMLTQwLDUwIDAsMTAgNDAsNTAgNTAsNDAgMTAsMCA1MCwtNDAgNDAsLTUwIDAsLTEwIC00MCwtNTAgLTUwLC00MCAtMTAsMCAtNTAsNDAnXHJcblxyXG4gICAgbGV0IHQgPSBkM1xyXG4gICAgICAudHJhbnNpdGlvbigpXHJcbiAgICAgIC5kdXJhdGlvbigwKVxyXG4gICAgaWYgKHR5cGVvZiB0cmFuc2l0aW9uID09ICdudW1iZXInKSB7XHJcbiAgICAgIHQgPSBkM1xyXG4gICAgICAgIC50cmFuc2l0aW9uKClcclxuICAgICAgICAuZHVyYXRpb24odHJhbnNpdGlvbilcclxuICAgICAgICAuZWFzZShkMy5lYXNlQ3ViaWNJbk91dCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29sb3JNYXAgPSBkMy5zY2FsZU9yZGluYWwoKVxyXG4gICAgICAuZG9tYWluKGNvbG9yTWF0Y2ggPyBjb2xvck1hdGNoLmRvbWFpbiA6IFsncGVyc29uYScsICdsdW9nbycsICdvcmdhbml6emF6aW9uZScsICdjb3NhIG5vdGV2b2xlJ10pXHJcbiAgICAgIC5yYW5nZShjb2xvck1hdGNoID8gY29sb3JNYXRjaC5yYW5nZSA6IGQzLnNjaGVtZVRhYmxlYXUxMClcclxuXHJcbiAgICBsZXQgc2l6ZVNjYWxlID0gZDMgLy8gbWFwIGVudGl0eSBjb3VudCB0byBidWJibGUgc2l6ZVxyXG4gICAgICAuc2NhbGVMaW5lYXIoKVxyXG4gICAgICAuZG9tYWluKFswLCBkMy5tYXgoZGF0YSwgZCA9PiArZC5jb3VudCldKVxyXG4gICAgICAucmFuZ2UoWzMsIGQzLm1heChkYXRhLCBkID0+ICtkLmNvdW50KV0pO1xyXG5cclxuICAgIGNvbnN0IHBhY2sgPSBkYXRhID0+XHJcbiAgICAgIGQzXHJcbiAgICAgICAgLnBhY2soKVxyXG4gICAgICAgIC5zaXplKFt3aWR0aCAtIDIsIGhlaWdodCAtIDJdKVxyXG4gICAgICAgIC5wYWRkaW5nKDEuNSkoXHJcbiAgICAgICAgICBkMy5oaWVyYXJjaHkoeyBjaGlsZHJlbjogZGF0YSB9KS5zdW0oZCA9PiBzaXplU2NhbGUoZC5jb3VudCkpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICBjb25zdCByb290ID0gKCkgPT4geyAvLyBpZiBzaHVmZmxlIGlzIHVuZGVmaW5lZCBvciB0cnVlLCBzaHVmZmxlIHRoZSBkYXRhXHJcbiAgICAgIGlmICh0eXBlb2Ygc2h1ZmZsZSA9PSAndW5kZWZpbmVkJyB8fCBzaHVmZmxlKSB7XHJcbiAgICAgICAgbGV0IHNodWZmRGF0YSA9IGRhdGEuc2xpY2UoKSAvLyBkbyBub3QgbW9kaWZ5IHRoZSBzb3VyY2UgZGF0YSFcclxuICAgICAgICByZXR1cm4gcGFjayhkMy5zaHVmZmxlKHNodWZmRGF0YSkpXHJcbiAgICAgIH0gZWxzZSB7IC8vIGlmIHNodWZmbGUgaXMgc2V0IHRvIGZhbHNlLCBza2lwIHRoZSBkYXRhIHNodWZmbGVcclxuICAgICAgICByZXR1cm4gcGFjayhkYXRhKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3ZnID0gZDNcclxuICAgICAgLnNlbGVjdChgIyR7Y29udGFpbmVySWR9YClcclxuICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsIFswLCAwLCB3aWR0aCwgaGVpZ2h0XSlcclxuICAgICAgLmF0dHIoXCJmb250LWZhbWlseVwiLCBcIlZlcmRhbmEsIEdlbmV2YSwgc2Fucy1zZXJpZlwiKVxyXG4gICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpO1xyXG5cclxuICAgIGNvbnN0IGxlYWYgPSBzdmcuc2VsZWN0QWxsKCdnJykuZGF0YShyb290KCkubGVhdmVzKCksIGQgPT4gZC5kYXRhLmVudGl0eS5pZCk7XHJcbiAgICBsZWFmXHJcbiAgICAgIC50cmFuc2l0aW9uKHQpIC8vIHVwZGF0ZSB0cmFuc2l0aW9uIG9uIDxnPlxyXG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMSlcclxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueCArIDF9LCR7ZC55ICsgMX0pYClcclxuICAgICAgLmF0dHIoJ2ZvbnQtc2l6ZScsIGQgPT4ge1xyXG4gICAgICAgIHZhciBzaXplID0gZC5yIC8gNS41O1xyXG4gICAgICAgIHNpemUgKj0gMTtcclxuICAgICAgICBzaXplICs9IDE7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoc2l6ZSkgKyAncHgnO1xyXG4gICAgICB9KVxyXG5cclxuICAgIGxlYWYuc2VsZWN0QWxsKCcuY2xvc2UtaWNvbicpLnJlbW92ZSgpIC8vIGNsZWFyIGFsbCBleGlzdGluZyBjbG9zZSBpY29uc1xyXG4gICAgaWYgKHNlbGVjdGVkKSB7XHJcbiAgICAgIGxlYWYgLy8gcmVuZGVyIG5lY2Vzc2FyeSBjbG9zZSBpY29uc1xyXG4gICAgICAgIC5maWx0ZXIoZCA9PiBzZWxlY3RlZC5pbmNsdWRlcyhkLmRhdGEuZW50aXR5LmlkKSlcclxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcclxuICAgICAgICAuYXR0cignY2xhc3MnLCAnY2xvc2UtaWNvbicpXHJcbiAgICAgICAgLmF0dHIoJ2QnLCBjbG9zZUljb25QYXRoKVxyXG4gICAgICAgIC5hdHRyKCdmaWxsJywgJyNmZmYnKVxyXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IHtcclxuICAgICAgICAgIGlmIChkLnIgLyA0ID4gMykge1xyXG4gICAgICAgICAgICByZXR1cm4gYHNjYWxlKC4wOCkgdHJhbnNsYXRlKDAsICR7ZC5yICogMTAgLSA4MH0pYDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBgc2NhbGUoLjA4KWA7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGVhZlxyXG4gICAgICAuc2VsZWN0KCdjaXJjbGUnKVxyXG4gICAgICAudHJhbnNpdGlvbih0KSAvLyB1cGRhdGUgdHJhbnNpdGlvbiBvbiA8Y2lyY2xlPlxyXG4gICAgICAuYXR0cihcImZpbGwtb3BhY2l0eVwiLCAxKVxyXG4gICAgICAuYXR0cigncicsIGQgPT4gZC5yKTtcclxuXHJcbiAgICBsZWFmXHJcbiAgICAgIC5zZWxlY3QoJ3RleHQnKVxyXG4gICAgICAuYXR0cignZm9udC1mYW1pbHknLCBkID0+IHtcclxuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmxhYmVsICYmIGZvbnRSZW5kZXJpbmcubGFiZWwuZmFtaWx5KSB7XHJcbiAgICAgICAgICByZXR1cm4gZm9udFJlbmRlcmluZy5sYWJlbC5mYW1pbHlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuICdpbmhlcml0J1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmF0dHIoJ2ZvbnQtd2VpZ2h0JywgZCA9PiB7XHJcbiAgICAgICAgaWYgKGZvbnRSZW5kZXJpbmcgJiYgZm9udFJlbmRlcmluZy5sYWJlbCAmJiBmb250UmVuZGVyaW5nLmxhYmVsLndlaWdodCkge1xyXG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcubGFiZWwud2VpZ2h0XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAnaW5oZXJpdCdcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5zZWxlY3RBbGwoXCJ0c3BhblwiKVxyXG4gICAgICAuZGF0YShkID0+IHtcclxuICAgICAgICBpZiAoZC5yIC8gNCA+IDQuNSkge1xyXG4gICAgICAgICAgLy8gc2hvdyB0ZXh0IGFuZCBudW1iZXIgdGhyZXNoaG9sZFxyXG4gICAgICAgICAgbGV0IGxhYmVsID0gKFxyXG4gICAgICAgICAgICBkLmRhdGEuZW50aXR5LmxhYmVsLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICtcclxuICAgICAgICAgICAgZC5kYXRhLmVudGl0eS5sYWJlbC5zbGljZSgxKVxyXG4gICAgICAgICAgKS5zcGxpdCgvICsvZyk7XHJcbiAgICAgICAgICBpZiAobGFiZWwubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnNsaWNlKDAsIDMpO1xyXG4gICAgICAgICAgICBsYWJlbFsyXSArPSAn4oCmJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBsYWJlbDtcclxuICAgICAgICB9IGVsc2UgaWYgKGQuciAvIDQgPiAyLjUpIHtcclxuICAgICAgICAgIC8vIHNob3cgdGV4dCB0aHJlc2hob2xkXHJcbiAgICAgICAgICBsZXQgbGFiZWwgPSAoXHJcbiAgICAgICAgICAgIGQuZGF0YS5lbnRpdHkubGFiZWwuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgK1xyXG4gICAgICAgICAgICBkLmRhdGEuZW50aXR5LmxhYmVsLnNsaWNlKDEpXHJcbiAgICAgICAgICApLnNwbGl0KC8gKy9nKTtcclxuICAgICAgICAgIGlmIChsYWJlbC5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgIGxhYmVsID0gbGFiZWwuc2xpY2UoMCwgMyk7XHJcbiAgICAgICAgICAgIGxhYmVsWzJdICs9ICfigKYnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5qb2luKCd0c3BhbicpXHJcbiAgICAgIC5hdHRyKFwieFwiLCAwKVxyXG4gICAgICAuYXR0cihcInlcIiwgKGQsIGksIG5vZGVzKSA9PiBgJHtpIC0gKG5vZGVzLmxlbmd0aCArIDEpIC8gMiArIC45N31lbWApXHJcbiAgICAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJylcclxuICAgICAgLnRleHQoZCA9PiBkKVxyXG5cclxuICAgIGxlYWZcclxuICAgICAgLnNlbGVjdCgnLmxhYmVsLWNvdW50JylcclxuICAgICAgLmF0dHIoJ2ZvbnQtZmFtaWx5JywgZCA9PiB7XHJcbiAgICAgICAgaWYgKGZvbnRSZW5kZXJpbmcgJiYgZm9udFJlbmRlcmluZy5jb3VudGVyICYmIGZvbnRSZW5kZXJpbmcuY291bnRlci5mYW1pbHkpIHtcclxuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmNvdW50ZXIuZmFtaWx5XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAnaW5oZXJpdCdcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hdHRyKCdmb250LXdlaWdodCcsIGQgPT4ge1xyXG4gICAgICAgIGlmIChmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcuY291bnRlciAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIud2VpZ2h0KSB7XHJcbiAgICAgICAgICByZXR1cm4gZm9udFJlbmRlcmluZy5jb3VudGVyLndlaWdodFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gJ2luaGVyaXQnXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXHJcbiAgICAgIC50ZXh0KGQgPT4ge1xyXG4gICAgICAgIGlmIChkLnIgLyA0ID4gMi41KSB7XHJcbiAgICAgICAgICAvLyBzaG93IHRleHQgYW5kIG51bWJlciB0aHJlc2hob2xkXHJcbiAgICAgICAgICByZXR1cm4gZC5kYXRhLmNvdW50XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hdHRyKCd5JywgZCA9PiB7XHJcbiAgICAgICAgbGV0IGxhYmVsTGVuZ3RoID0gZC5kYXRhLmVudGl0eS5sYWJlbC5zcGxpdCgvICsvZylcclxuICAgICAgICBpZiAobGFiZWxMZW5ndGgubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgbGFiZWxMZW5ndGggPSBsYWJlbExlbmd0aC5zbGljZSgwLCAzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGAke2xhYmVsTGVuZ3RoLmxlbmd0aCAtIChsYWJlbExlbmd0aC5sZW5ndGggKyAxKSAvIDIgKyAuOTd9ZW1gXHJcbiAgICAgIH0pXHJcblxyXG5cclxuICAgIGNvbnN0IGcgPSBsZWFmLmVudGVyKCkuYXBwZW5kKCdnJyk7XHJcblxyXG4gICAgZy5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnggKyAxfSwke2QueSArIDF9KWApXHJcbiAgICAgIC5hdHRyKCdmb250LXNpemUnLCBkID0+IHtcclxuICAgICAgICB2YXIgc2l6ZSA9IGQuciAvIDUuNTtcclxuICAgICAgICBzaXplICo9IDE7XHJcbiAgICAgICAgc2l6ZSArPSAxO1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHNpemUpICsgJ3B4JztcclxuICAgICAgfSlcclxuICAgICAgLmF0dHIoJ2N1cnNvcicsICdwb2ludGVyJylcclxuICAgICAgLm9uKCdjbGljaycsIChkLCBpKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbkNsaWNrKGQuZGF0YS5lbnRpdHkuaWQpO1xyXG4gICAgICB9KVxyXG4gICAgICAuYXR0cihcImlkXCIsIGQgPT4gYGdfJHtkLmRhdGEuZW50aXR5LmlkfWApXHJcbiAgICAgIC5hcHBlbmQoXCJjaXJjbGVcIilcclxuICAgICAgLmF0dHIoXCJpZFwiLCBkID0+IChkLmxlYWZVaWQgPSBkLmRhdGEuZW50aXR5LmlkKSlcclxuICAgICAgLmF0dHIoJ3InLCAwKVxyXG4gICAgICAudHJhbnNpdGlvbih0KSAvLyBlbnRlcigpIHRyYW5zaXRpb24gb24gPGNpcmNsZT5cclxuICAgICAgLmF0dHIoXCJmaWxsLW9wYWNpdHlcIiwgMSlcclxuICAgICAgLmF0dHIoJ2ZpbGwnLCBkID0+IGNvbG9yTWFwKGQuZGF0YS5lbnRpdHkudHlwZU9mRW50aXR5KSlcclxuICAgICAgLmF0dHIoXCJyXCIsIGQgPT4gZC5yKTtcclxuXHJcbiAgICBnLmFwcGVuZChcImNsaXBQYXRoXCIpXHJcbiAgICAgIC5hdHRyKFwiaWRcIiwgZCA9PiAoZC5jbGlwVWlkID0gJ0NsaXAtJyArIGQuZGF0YS5lbnRpdHkuaWQpKVxyXG4gICAgICAuYXBwZW5kKFwidXNlXCIpXHJcbiAgICAgIC5hdHRyKFwieGxpbms6aHJlZlwiLCBkID0+IGQubGVhZlVpZC5ocmVmKTtcclxuXHJcbiAgICBnLmFwcGVuZCgndGV4dCcpXHJcbiAgICAgIC5hdHRyKCdmb250LWZhbWlseScsIGQgPT4ge1xyXG4gICAgICAgIGlmIChmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcubGFiZWwgJiYgZm9udFJlbmRlcmluZy5sYWJlbC5mYW1pbHkpIHtcclxuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmxhYmVsLmZhbWlseVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gJ2luaGVyaXQnXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuYXR0cignZm9udC13ZWlnaHQnLCBkID0+IHtcclxuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcubGFiZWwgJiYgZm9udFJlbmRlcmluZy5sYWJlbC53ZWlnaHQpIHtcclxuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmxhYmVsLndlaWdodFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gJ2luaGVyaXQnXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuc2VsZWN0QWxsKFwidHNwYW5cIilcclxuICAgICAgLmRhdGEoZCA9PiB7XHJcbiAgICAgICAgaWYgKGQuciAvIDQgPiA0LjUpIHtcclxuICAgICAgICAgIC8vIHNob3cgdGV4dCBhbmQgbnVtYmVyIHRocmVzaGhvbGRcclxuICAgICAgICAgIGxldCBsYWJlbCA9IChcclxuICAgICAgICAgICAgZC5kYXRhLmVudGl0eS5sYWJlbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXHJcbiAgICAgICAgICAgIGQuZGF0YS5lbnRpdHkubGFiZWwuc2xpY2UoMSlcclxuICAgICAgICAgICkuc3BsaXQoLyArL2cpO1xyXG4gICAgICAgICAgaWYgKGxhYmVsLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgbGFiZWwgPSBsYWJlbC5zbGljZSgwLCAzKTtcclxuICAgICAgICAgICAgbGFiZWxbMl0gKz0gJ+KApic7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gbGFiZWw7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkLnIgLyA0ID4gMi41KSB7XHJcbiAgICAgICAgICAvLyBzaG93IHRleHQgdGhyZXNoaG9sZFxyXG4gICAgICAgICAgbGV0IGxhYmVsID0gKFxyXG4gICAgICAgICAgICBkLmRhdGEuZW50aXR5LmxhYmVsLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICtcclxuICAgICAgICAgICAgZC5kYXRhLmVudGl0eS5sYWJlbC5zbGljZSgxKVxyXG4gICAgICAgICAgKS5zcGxpdCgvICsvZyk7XHJcbiAgICAgICAgICBpZiAobGFiZWwubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnNsaWNlKDAsIDMpO1xyXG4gICAgICAgICAgICBsYWJlbFsyXSArPSAn4oCmJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBsYWJlbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB9KVxyXG4gICAgICAuam9pbigndHNwYW4nKVxyXG4gICAgICAuYXR0cihcInhcIiwgMClcclxuICAgICAgLmF0dHIoXCJ5XCIsIChkLCBpLCBub2RlcykgPT4gYCR7aSAtIChub2Rlcy5sZW5ndGggKyAxKSAvIDIgKyAuOTd9ZW1gKVxyXG4gICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXHJcbiAgICAgIC50ZXh0KGQgPT4gZClcclxuICAgICAgLmF0dHIoJ2ZpbGwtb3BhY2l0eScsIDApXHJcbiAgICAgIC50cmFuc2l0aW9uKHQpIC8vIGVudGVyKCkgdHJhbnNpdGlvbiBvbiA8dHNwYW4+XHJcbiAgICAgIC5hdHRyKCdmaWxsLW9wYWNpdHknLCAxKTtcclxuXHJcbiAgICBnLmFwcGVuZCgndGV4dCcpIC8vIENvdW50IGxhYmVsXHJcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsYWJlbC1jb3VudCcpXHJcbiAgICAgIC5hdHRyKCdmb250LWZhbWlseScsIGQgPT4ge1xyXG4gICAgICAgIGlmIChmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcuY291bnRlciAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIuZmFtaWx5KSB7XHJcbiAgICAgICAgICByZXR1cm4gZm9udFJlbmRlcmluZy5jb3VudGVyLmZhbWlseVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gJ2luaGVyaXQnXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuYXR0cignZm9udC13ZWlnaHQnLCBkID0+IHtcclxuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIgJiYgZm9udFJlbmRlcmluZy5jb3VudGVyLndlaWdodCkge1xyXG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcuY291bnRlci53ZWlnaHRcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuICdpbmhlcml0J1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxyXG4gICAgICAudGV4dChkID0+IHtcclxuICAgICAgICBpZiAoZC5yIC8gNCA+IDIuNSkge1xyXG4gICAgICAgICAgLy8gc2hvdyB0ZXh0IGFuZCBudW1iZXIgdGhyZXNoaG9sZFxyXG4gICAgICAgICAgcmV0dXJuIGQuZGF0YS5jb3VudFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuYXR0cigneScsIGQgPT4ge1xyXG4gICAgICAgIGxldCBsYWJlbExlbmd0aCA9IGQuZGF0YS5lbnRpdHkubGFiZWwuc3BsaXQoLyArL2cpXHJcbiAgICAgICAgaWYgKGxhYmVsTGVuZ3RoLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgIGxhYmVsTGVuZ3RoID0gbGFiZWxMZW5ndGguc2xpY2UoMCwgMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBgJHtsYWJlbExlbmd0aC5sZW5ndGggLSAobGFiZWxMZW5ndGgubGVuZ3RoICsgMSkgLyAyICsgLjk3fWVtYFxyXG4gICAgICB9KVxyXG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMClcclxuICAgICAgLnRyYW5zaXRpb24odCkgLy8gZW50ZXIoKSB0cmFuc2l0aW9uIG9uIDx0ZXh0PlxyXG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMSk7XHJcblxyXG4gICAgbGVhZlxyXG4gICAgICAuZXhpdCgpIC8vIEVYSVQgQ1lDTEVcclxuICAgICAgLnJlbW92ZSgpO1xyXG5cclxuICAgIGlmIChzZWxlY3RlZCkge1xyXG4gICAgICBnLmZpbHRlcihkID0+IHNlbGVjdGVkLmluY2x1ZGVzKGQubGVhZlVpZCkpIC8vIGFwcGVuZCAnWCcgaWNvbiAvLyBvbmx5IGZvciBzZWxlY3RlZCBidWJibGVzXHJcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXHJcbiAgICAgICAgLmF0dHIoJ2QnLCBjbG9zZUljb25QYXRoKVxyXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdjbG9zZS1pY29uJylcclxuICAgICAgICAuYXR0cignZmlsbCcsIGQgPT4ge1xyXG4gICAgICAgICAgaWYgKGQuciAvIDQgPiAyLjUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcjZmZmJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiAndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4ge1xyXG4gICAgICAgICAgaWYgKGQuciAvIDQgPiAzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgc2NhbGUoLjA4KSB0cmFuc2xhdGUoMCwgJHtkLnIgKiAxMCAtIDgwfSlgO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGBzY2FsZSguMDgpYDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVtaXQoJ2QzZW5kJywgZGF0YSkgLy8gY29tbXVuaWNhdGUgZW5kIG9mIGRyYXdcclxuICB9XHJcbn1cclxuIl19