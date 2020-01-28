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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQvYnViYmxlLWNoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sS0FBSyxFQUFFLE1BQU0sSUFBSSxDQUFBOzs7Ozs7Ozs7Ozs7O0FBYXhCLHNDQW1FQzs7Ozs7O0lBL0RDLHVDQUFvQjs7Ozs7SUFJcEIsaUNBQWM7Ozs7O0lBSWQsa0NBQWU7Ozs7O0lBSWYsZ0NBQVU7Ozs7O0lBSVYsbUNBQWlCOzs7Ozs7SUFLakIsb0NBQW1COzs7Ozs7SUFLbkIsc0NBR0M7Ozs7O0lBSUQscUNBQTJCOzs7Ozs7SUFLM0Isc0NBQW1COzs7Ozs7SUFLbkIsbUNBQWlCOzs7OztJQUlqQix5Q0FTQzs7Ozs7O0lBTUQsbUNBQWM7O0FBT2hCLE1BQU0sT0FBTyxvQkFBb0I7SUFKakM7UUFPVSxZQUFPLEdBQVksS0FBSyxDQUFDO1FBMEJqQyxTQUFJOzs7UUFBRyxHQUFHLEVBQUU7a0JBQ0osRUFDSixXQUFXLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFDekIsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQzNCLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUM5QixhQUFhLEVBQ2QsR0FBRyxJQUFJLENBQUMsSUFBSTs7a0JBQ1AsYUFBYSxHQUFHLHlGQUF5Rjs7Z0JBRTNHLENBQUMsR0FBRyxFQUFFO2lCQUNQLFVBQVUsRUFBRTtpQkFDWixRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxPQUFPLFVBQVUsSUFBSSxRQUFRLEVBQUU7Z0JBQ2pDLENBQUMsR0FBRyxFQUFFO3FCQUNILFVBQVUsRUFBRTtxQkFDWixRQUFRLENBQUMsVUFBVSxDQUFDO3FCQUNwQixJQUFJ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WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsVUFBVTs7O1lBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDWixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtpQkFDN0I7WUFDSCxDQUFDLEVBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBL0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQix5SkFBa0M7YUFDbkM7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETixvQ0FBZ0M7O0lBQ2hDLG9DQUFtQjs7Ozs7SUFDbkIsdUNBQWlDOztJQTBCakMsb0NBa1RDIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQlVCQkxFQ0hBUlQudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBCdWJibGVDaGFydENvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkgY29udGFpbmVySWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY29udGFpbmVyV2lkdGggKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY29udGFpbmVySGVpZ2h0IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGJ1YmJsZXNEYXRhIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGlzRm9yY2VTaW11bGF0aW9uRW5hYmxlZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHJlc2V0IChvcHRpb25hbClcclxuKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQnViYmxlQ2hhcnREYXRhIHtcclxuICAvKipcclxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGJ1YmJsZS1jaGFydFxyXG4gICAqL1xyXG4gIGNvbnRhaW5lcklkOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogdG90YWwgd2lkdGggZm9yIHRoZSBidWJibGUtY2hhcnRcclxuICAgKi9cclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIHRvdGFsIGhlaWdodCBmb3IgdGhlIGJ1YmJsZS1jaGFydFxyXG4gICAqL1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIGRhdGEgYWJvdXQgdGhlIGJ1YmJsZXNcclxuICAgKi9cclxuICBkYXRhOiBhbnk7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBjc3MgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogbGlzdCBvZiBJRCdzIG9mIHNlbGVjdGVkIGl0ZW1zXHJcbiAgICogKHNlbGVjdGVkIGl0ZW1zIHdpbGwgcmVuZGVyIHdpdGggYSAnWCcgaWNvbilcclxuICAgKi9cclxuICBzZWxlY3RlZD86IHN0cmluZ1tdXHJcbiAgLyoqXHJcbiAgICogU3BlY2lmeSBhIGxpc3Qgb2YgdHlwZU9mRW50aXR5IHR5cGVzIChkb21haW4pLFxyXG4gICAqIGFuZCBhIGxpc3Qgb2YgY29sb3JzIChyYW5nZSksIHdoaWNoIHdpbGwgYmUgbWFwcGVkIHRvZ2V0aGVyLlxyXG4gICAqL1xyXG4gIGNvbG9yTWF0Y2g/OiB7XHJcbiAgICBkb21haW46IHN0cmluZ1tdLFxyXG4gICAgcmFuZ2U6IHN0cmluZ1tdLFxyXG4gIH1cclxuICAvKipcclxuICAgKiBEZWZpbmUgYSBtYXggYW5kIG1pbiBzaXplIGZvciB0aGUgYnViYmxlc1xyXG4gICAqL1xyXG4gIHNpemVSYW5nZTogW251bWJlciwgbnVtYmVyXVxyXG4gIC8qKlxyXG4gICAqIElmIGRlZmluZWQsIHRyYW5zaXRpb24gd2lsbCBiZSBhY3RpdmF0ZWRcclxuICAgKiBhbmQgdGhlIHZhbHVlIHdpbGwgYmUgdXNlZCBhcyBkdXJhdGlvblxyXG4gICAqL1xyXG4gIHRyYW5zaXRpb24/OiBudW1iZXJcclxuICAvKipcclxuICAgKiBJZiBzZXQgdG8gZmFsc2UsIHN0b3BzIHRoZSBzaHVmZmxpbmcgb2YgdGhlIGRhdGFcclxuICAgKiBiZWZvcmUgcmVuZGVyaW5nLlxyXG4gICAqL1xyXG4gIHNodWZmbGU/OiBib29sZWFuXHJcbiAgLyoqXHJcbiAgICogRGVmaW5lcyB0aGUgZm9udC1mYW1pbHkgYW5kIHRoZSBmb250LXdlaWdodCBmb3IgZWFjaCB0ZXh0IGdyb3VwXHJcbiAgICovXHJcbiAgZm9udFJlbmRlcmluZz86IHtcclxuICAgIGxhYmVsPzoge1xyXG4gICAgICBmYW1pbHk/OiBzdHJpbmcsXHJcbiAgICAgIHdlaWdodD86IHN0cmluZyxcclxuICAgIH0sXHJcbiAgICBjb3VudGVyPzoge1xyXG4gICAgICBmYW1pbHk/OiBzdHJpbmcsXHJcbiAgICAgIHdlaWdodD86IHN0cmluZyxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGV4cG9zZSB0aGUgZHJhdyBmdW5jdGlvbiBvdXRzaWRlIG9mIG43LWZyb250ZW5kL2NvbXBvbmVudHMgbGlicmFyeVxyXG4gICAqIHRoaXMgaXMgbmVlZGVkIHRvIHJlZHJhdyBidWJibGUtY2hhcnQtY29tcG9uZW50IG9uIGNvbW1hbmRcclxuICAgKi9cclxuICBzZXREcmF3PzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWJ1YmJsZS1jaGFydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2J1YmJsZS1jaGFydC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQnViYmxlQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcclxuICBASW5wdXQoKSBkYXRhOiBJQnViYmxlQ2hhcnREYXRhO1xyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuICBwcml2YXRlIF9sb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xyXG4gICAgLypcclxuICAgICBXYWl0cyBmb3IgdGhlIGRvbSB0byBiZSBsb2FkZWQsIHRoZW4gZmlyZXMgdGhlIGRyYXcgZnVuY3Rpb25cclxuICAgICB0aGF0IHJlbmRlcnMgdGhlIGNoYXJ0LlxyXG4gICAgKi9cclxuICAgIGlmICghdGhpcy5kYXRhKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xyXG4gICAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgICAgICBpZiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5zZXREcmF3KSB7XHJcbiAgICAgICAgICB0aGlzLmRhdGEuc2V0RHJhdyh0aGlzLmRyYXcpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbGljayhwYXlsb2FkKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgZHJhdyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgY29udGFpbmVySWQsIGRhdGEsIGhlaWdodCxcclxuICAgICAgd2lkdGgsIHNlbGVjdGVkLCB0cmFuc2l0aW9uLFxyXG4gICAgICBzaXplUmFuZ2UsIGNvbG9yTWF0Y2gsIHNodWZmbGUsXHJcbiAgICAgIGZvbnRSZW5kZXJpbmdcclxuICAgIH0gPSB0aGlzLmRhdGFcclxuICAgIGNvbnN0IGNsb3NlSWNvblBhdGggPSAnTSAtNTAsNDAgTC00MCw1MCAwLDEwIDQwLDUwIDUwLDQwIDEwLDAgNTAsLTQwIDQwLC01MCAwLC0xMCAtNDAsLTUwIC01MCwtNDAgLTEwLDAgLTUwLDQwJ1xyXG5cclxuICAgIGxldCB0ID0gZDNcclxuICAgICAgLnRyYW5zaXRpb24oKVxyXG4gICAgICAuZHVyYXRpb24oMClcclxuICAgIGlmICh0eXBlb2YgdHJhbnNpdGlvbiA9PSAnbnVtYmVyJykge1xyXG4gICAgICB0ID0gZDNcclxuICAgICAgICAudHJhbnNpdGlvbigpXHJcbiAgICAgICAgLmR1cmF0aW9uKHRyYW5zaXRpb24pXHJcbiAgICAgICAgLmVhc2UoZDMuZWFzZUN1YmljSW5PdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbG9yTWFwID0gZDMuc2NhbGVPcmRpbmFsKClcclxuICAgICAgLmRvbWFpbihjb2xvck1hdGNoID8gY29sb3JNYXRjaC5kb21haW4gOiBbJ3BlcnNvbmEnLCAnbHVvZ28nLCAnb3JnYW5penphemlvbmUnLCAnY29zYSBub3Rldm9sZSddKVxyXG4gICAgICAucmFuZ2UoY29sb3JNYXRjaCA/IGNvbG9yTWF0Y2gucmFuZ2UgOiBkMy5zY2hlbWVUYWJsZWF1MTApXHJcblxyXG4gICAgbGV0IHNpemVTY2FsZSA9IGQzIC8vIG1hcCBlbnRpdHkgY291bnQgdG8gYnViYmxlIHNpemVcclxuICAgICAgLnNjYWxlTGluZWFyKClcclxuICAgICAgLmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIGQgPT4gK2QuY291bnQpXSlcclxuICAgICAgLnJhbmdlKFszLCBkMy5tYXgoZGF0YSwgZCA9PiArZC5jb3VudCldKTtcclxuXHJcbiAgICBjb25zdCBwYWNrID0gZGF0YSA9PlxyXG4gICAgICBkM1xyXG4gICAgICAgIC5wYWNrKClcclxuICAgICAgICAuc2l6ZShbd2lkdGggLSAyLCBoZWlnaHQgLSAyXSlcclxuICAgICAgICAucGFkZGluZygxLjUpKFxyXG4gICAgICAgICAgZDMuaGllcmFyY2h5KHsgY2hpbGRyZW46IGRhdGEgfSkuc3VtKGQgPT4gc2l6ZVNjYWxlKGQuY291bnQpKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgY29uc3Qgcm9vdCA9ICgpID0+IHsgLy8gaWYgc2h1ZmZsZSBpcyB1bmRlZmluZWQgb3IgdHJ1ZSwgc2h1ZmZsZSB0aGUgZGF0YVxyXG4gICAgICBpZiAodHlwZW9mIHNodWZmbGUgPT0gJ3VuZGVmaW5lZCcgfHwgc2h1ZmZsZSkge1xyXG4gICAgICAgIGxldCBzaHVmZkRhdGEgPSBkYXRhLnNsaWNlKCkgLy8gZG8gbm90IG1vZGlmeSB0aGUgc291cmNlIGRhdGEhXHJcbiAgICAgICAgcmV0dXJuIHBhY2soZDMuc2h1ZmZsZShzaHVmZkRhdGEpKVxyXG4gICAgICB9IGVsc2UgeyAvLyBpZiBzaHVmZmxlIGlzIHNldCB0byBmYWxzZSwgc2tpcCB0aGUgZGF0YSBzaHVmZmxlXHJcbiAgICAgICAgcmV0dXJuIHBhY2soZGF0YSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN2ZyA9IGQzXHJcbiAgICAgIC5zZWxlY3QoYCMke2NvbnRhaW5lcklkfWApXHJcbiAgICAgIC5hdHRyKFwidmlld0JveFwiLCBbMCwgMCwgd2lkdGgsIGhlaWdodF0pXHJcbiAgICAgIC5hdHRyKFwiZm9udC1mYW1pbHlcIiwgXCJWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWZcIilcclxuICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKTtcclxuXHJcbiAgICBjb25zdCBsZWFmID0gc3ZnLnNlbGVjdEFsbCgnZycpLmRhdGEocm9vdCgpLmxlYXZlcygpLCBkID0+IGQuZGF0YS5lbnRpdHkuaWQpO1xyXG4gICAgbGVhZlxyXG4gICAgICAudHJhbnNpdGlvbih0KSAvLyB1cGRhdGUgdHJhbnNpdGlvbiBvbiA8Zz5cclxuICAgICAgLmF0dHIoJ2ZpbGwtb3BhY2l0eScsIDEpXHJcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnggKyAxfSwke2QueSArIDF9KWApXHJcbiAgICAgIC5hdHRyKCdmb250LXNpemUnLCBkID0+IHtcclxuICAgICAgICB2YXIgc2l6ZSA9IGQuciAvIDUuNTtcclxuICAgICAgICBzaXplICo9IDE7XHJcbiAgICAgICAgc2l6ZSArPSAxO1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHNpemUpICsgJ3B4JztcclxuICAgICAgfSlcclxuXHJcbiAgICBsZWFmLnNlbGVjdEFsbCgnLmNsb3NlLWljb24nKS5yZW1vdmUoKSAvLyBjbGVhciBhbGwgZXhpc3RpbmcgY2xvc2UgaWNvbnNcclxuICAgIGlmIChzZWxlY3RlZCkge1xyXG4gICAgICBsZWFmIC8vIHJlbmRlciBuZWNlc3NhcnkgY2xvc2UgaWNvbnNcclxuICAgICAgICAuZmlsdGVyKGQgPT4gc2VsZWN0ZWQuaW5jbHVkZXMoZC5kYXRhLmVudGl0eS5pZCkpXHJcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXHJcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2Nsb3NlLWljb24nKVxyXG4gICAgICAgIC5hdHRyKCdkJywgY2xvc2VJY29uUGF0aClcclxuICAgICAgICAuYXR0cignZmlsbCcsICcjZmZmJylcclxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiB7XHJcbiAgICAgICAgICBpZiAoZC5yIC8gNCA+IDMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBzY2FsZSguMDgpIHRyYW5zbGF0ZSgwLCAke2QuciAqIDEwIC0gODB9KWA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gYHNjYWxlKC4wOClgO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxlYWZcclxuICAgICAgLnNlbGVjdCgnY2lyY2xlJylcclxuICAgICAgLnRyYW5zaXRpb24odCkgLy8gdXBkYXRlIHRyYW5zaXRpb24gb24gPGNpcmNsZT5cclxuICAgICAgLmF0dHIoXCJmaWxsLW9wYWNpdHlcIiwgMSlcclxuICAgICAgLmF0dHIoJ3InLCBkID0+IGQucik7XHJcblxyXG4gICAgbGVhZlxyXG4gICAgICAuc2VsZWN0KCd0ZXh0JylcclxuICAgICAgLmF0dHIoJ2ZvbnQtZmFtaWx5JywgZCA9PiB7XHJcbiAgICAgICAgaWYgKGZvbnRSZW5kZXJpbmcgJiYgZm9udFJlbmRlcmluZy5sYWJlbCAmJiBmb250UmVuZGVyaW5nLmxhYmVsLmZhbWlseSkge1xyXG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcubGFiZWwuZmFtaWx5XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAnaW5oZXJpdCdcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hdHRyKCdmb250LXdlaWdodCcsIGQgPT4ge1xyXG4gICAgICAgIGlmIChmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcubGFiZWwgJiYgZm9udFJlbmRlcmluZy5sYWJlbC53ZWlnaHQpIHtcclxuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmxhYmVsLndlaWdodFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gJ2luaGVyaXQnXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuc2VsZWN0QWxsKFwidHNwYW5cIilcclxuICAgICAgLmRhdGEoZCA9PiB7XHJcbiAgICAgICAgaWYgKGQuciAvIDQgPiA0LjUpIHtcclxuICAgICAgICAgIC8vIHNob3cgdGV4dCBhbmQgbnVtYmVyIHRocmVzaGhvbGRcclxuICAgICAgICAgIGxldCBsYWJlbCA9IChcclxuICAgICAgICAgICAgZC5kYXRhLmVudGl0eS5sYWJlbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXHJcbiAgICAgICAgICAgIGQuZGF0YS5lbnRpdHkubGFiZWwuc2xpY2UoMSlcclxuICAgICAgICAgICkuc3BsaXQoLyArL2cpO1xyXG4gICAgICAgICAgaWYgKGxhYmVsLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgbGFiZWwgPSBsYWJlbC5zbGljZSgwLCAzKTtcclxuICAgICAgICAgICAgbGFiZWxbMl0gKz0gJ+KApic7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gbGFiZWw7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkLnIgLyA0ID4gMi41KSB7XHJcbiAgICAgICAgICAvLyBzaG93IHRleHQgdGhyZXNoaG9sZFxyXG4gICAgICAgICAgbGV0IGxhYmVsID0gKFxyXG4gICAgICAgICAgICBkLmRhdGEuZW50aXR5LmxhYmVsLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICtcclxuICAgICAgICAgICAgZC5kYXRhLmVudGl0eS5sYWJlbC5zbGljZSgxKVxyXG4gICAgICAgICAgKS5zcGxpdCgvICsvZyk7XHJcbiAgICAgICAgICBpZiAobGFiZWwubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnNsaWNlKDAsIDMpO1xyXG4gICAgICAgICAgICBsYWJlbFsyXSArPSAn4oCmJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBsYWJlbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB9KVxyXG4gICAgICAuam9pbigndHNwYW4nKVxyXG4gICAgICAuYXR0cihcInhcIiwgMClcclxuICAgICAgLmF0dHIoXCJ5XCIsIChkLCBpLCBub2RlcykgPT4gYCR7aSAtIChub2Rlcy5sZW5ndGggKyAxKSAvIDIgKyAuOTd9ZW1gKVxyXG4gICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXHJcbiAgICAgIC50ZXh0KGQgPT4gZClcclxuXHJcbiAgICBsZWFmXHJcbiAgICAgIC5zZWxlY3QoJy5sYWJlbC1jb3VudCcpXHJcbiAgICAgIC5hdHRyKCdmb250LWZhbWlseScsIGQgPT4ge1xyXG4gICAgICAgIGlmIChmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcuY291bnRlciAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIuZmFtaWx5KSB7XHJcbiAgICAgICAgICByZXR1cm4gZm9udFJlbmRlcmluZy5jb3VudGVyLmZhbWlseVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gJ2luaGVyaXQnXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuYXR0cignZm9udC13ZWlnaHQnLCBkID0+IHtcclxuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIgJiYgZm9udFJlbmRlcmluZy5jb3VudGVyLndlaWdodCkge1xyXG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcuY291bnRlci53ZWlnaHRcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuICdpbmhlcml0J1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxyXG4gICAgICAudGV4dChkID0+IHtcclxuICAgICAgICBpZiAoZC5yIC8gNCA+IDIuNSkge1xyXG4gICAgICAgICAgLy8gc2hvdyB0ZXh0IGFuZCBudW1iZXIgdGhyZXNoaG9sZFxyXG4gICAgICAgICAgcmV0dXJuIGQuZGF0YS5jb3VudFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuYXR0cigneScsIGQgPT4ge1xyXG4gICAgICAgIGxldCBsYWJlbExlbmd0aCA9IGQuZGF0YS5lbnRpdHkubGFiZWwuc3BsaXQoLyArL2cpXHJcbiAgICAgICAgaWYgKGxhYmVsTGVuZ3RoLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgIGxhYmVsTGVuZ3RoID0gbGFiZWxMZW5ndGguc2xpY2UoMCwgMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBgJHtsYWJlbExlbmd0aC5sZW5ndGggLSAobGFiZWxMZW5ndGgubGVuZ3RoICsgMSkgLyAyICsgLjk3fWVtYFxyXG4gICAgICB9KVxyXG5cclxuXHJcbiAgICBjb25zdCBnID0gbGVhZi5lbnRlcigpLmFwcGVuZCgnZycpO1xyXG5cclxuICAgIGcuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC54ICsgMX0sJHtkLnkgKyAxfSlgKVxyXG4gICAgICAuYXR0cignZm9udC1zaXplJywgZCA9PiB7XHJcbiAgICAgICAgdmFyIHNpemUgPSBkLnIgLyA1LjU7XHJcbiAgICAgICAgc2l6ZSAqPSAxO1xyXG4gICAgICAgIHNpemUgKz0gMTtcclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChzaXplKSArICdweCc7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hdHRyKCdjdXJzb3InLCAncG9pbnRlcicpXHJcbiAgICAgIC5vbignY2xpY2snLCAoZCwgaSkgPT4ge1xyXG4gICAgICAgIHRoaXMub25DbGljayhkLmRhdGEuZW50aXR5LmlkKTtcclxuICAgICAgfSlcclxuICAgICAgLmF0dHIoXCJpZFwiLCBkID0+IGBnXyR7ZC5kYXRhLmVudGl0eS5pZH1gKVxyXG4gICAgICAuYXBwZW5kKFwiY2lyY2xlXCIpXHJcbiAgICAgIC5hdHRyKFwiaWRcIiwgZCA9PiAoZC5sZWFmVWlkID0gZC5kYXRhLmVudGl0eS5pZCkpXHJcbiAgICAgIC5hdHRyKCdyJywgMClcclxuICAgICAgLnRyYW5zaXRpb24odCkgLy8gZW50ZXIoKSB0cmFuc2l0aW9uIG9uIDxjaXJjbGU+XHJcbiAgICAgIC5hdHRyKFwiZmlsbC1vcGFjaXR5XCIsIDEpXHJcbiAgICAgIC5hdHRyKCdmaWxsJywgZCA9PiBjb2xvck1hcChkLmRhdGEuZW50aXR5LnR5cGVPZkVudGl0eSkpXHJcbiAgICAgIC5hdHRyKFwiclwiLCBkID0+IGQucik7XHJcblxyXG4gICAgZy5hcHBlbmQoXCJjbGlwUGF0aFwiKVxyXG4gICAgICAuYXR0cihcImlkXCIsIGQgPT4gKGQuY2xpcFVpZCA9ICdDbGlwLScgKyBkLmRhdGEuZW50aXR5LmlkKSlcclxuICAgICAgLmFwcGVuZChcInVzZVwiKVxyXG4gICAgICAuYXR0cihcInhsaW5rOmhyZWZcIiwgZCA9PiBkLmxlYWZVaWQuaHJlZik7XHJcblxyXG4gICAgZy5hcHBlbmQoJ3RleHQnKVxyXG4gICAgICAuYXR0cignZm9udC1mYW1pbHknLCBkID0+IHtcclxuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmxhYmVsICYmIGZvbnRSZW5kZXJpbmcubGFiZWwuZmFtaWx5KSB7XHJcbiAgICAgICAgICByZXR1cm4gZm9udFJlbmRlcmluZy5sYWJlbC5mYW1pbHlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuICdpbmhlcml0J1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmF0dHIoJ2ZvbnQtd2VpZ2h0JywgZCA9PiB7XHJcbiAgICAgICAgaWYgKGZvbnRSZW5kZXJpbmcgJiYgZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmxhYmVsICYmIGZvbnRSZW5kZXJpbmcubGFiZWwud2VpZ2h0KSB7XHJcbiAgICAgICAgICByZXR1cm4gZm9udFJlbmRlcmluZy5sYWJlbC53ZWlnaHRcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuICdpbmhlcml0J1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLnNlbGVjdEFsbChcInRzcGFuXCIpXHJcbiAgICAgIC5kYXRhKGQgPT4ge1xyXG4gICAgICAgIGlmIChkLnIgLyA0ID4gNC41KSB7XHJcbiAgICAgICAgICAvLyBzaG93IHRleHQgYW5kIG51bWJlciB0aHJlc2hob2xkXHJcbiAgICAgICAgICBsZXQgbGFiZWwgPSAoXHJcbiAgICAgICAgICAgIGQuZGF0YS5lbnRpdHkubGFiZWwuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgK1xyXG4gICAgICAgICAgICBkLmRhdGEuZW50aXR5LmxhYmVsLnNsaWNlKDEpXHJcbiAgICAgICAgICApLnNwbGl0KC8gKy9nKTtcclxuICAgICAgICAgIGlmIChsYWJlbC5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgIGxhYmVsID0gbGFiZWwuc2xpY2UoMCwgMyk7XHJcbiAgICAgICAgICAgIGxhYmVsWzJdICs9ICfigKYnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZC5yIC8gNCA+IDIuNSkge1xyXG4gICAgICAgICAgLy8gc2hvdyB0ZXh0IHRocmVzaGhvbGRcclxuICAgICAgICAgIGxldCBsYWJlbCA9IChcclxuICAgICAgICAgICAgZC5kYXRhLmVudGl0eS5sYWJlbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXHJcbiAgICAgICAgICAgIGQuZGF0YS5lbnRpdHkubGFiZWwuc2xpY2UoMSlcclxuICAgICAgICAgICkuc3BsaXQoLyArL2cpO1xyXG4gICAgICAgICAgaWYgKGxhYmVsLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgbGFiZWwgPSBsYWJlbC5zbGljZSgwLCAzKTtcclxuICAgICAgICAgICAgbGFiZWxbMl0gKz0gJ+KApic7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gbGFiZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgICAgfSlcclxuICAgICAgLmpvaW4oJ3RzcGFuJylcclxuICAgICAgLmF0dHIoXCJ4XCIsIDApXHJcbiAgICAgIC5hdHRyKFwieVwiLCAoZCwgaSwgbm9kZXMpID0+IGAke2kgLSAobm9kZXMubGVuZ3RoICsgMSkgLyAyICsgLjk3fWVtYClcclxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxyXG4gICAgICAudGV4dChkID0+IGQpXHJcbiAgICAgIC5hdHRyKCdmaWxsLW9wYWNpdHknLCAwKVxyXG4gICAgICAudHJhbnNpdGlvbih0KSAvLyBlbnRlcigpIHRyYW5zaXRpb24gb24gPHRzcGFuPlxyXG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMSk7XHJcblxyXG4gICAgZy5hcHBlbmQoJ3RleHQnKSAvLyBDb3VudCBsYWJlbFxyXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGFiZWwtY291bnQnKVxyXG4gICAgICAuYXR0cignZm9udC1mYW1pbHknLCBkID0+IHtcclxuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmNvdW50ZXIgJiYgZm9udFJlbmRlcmluZy5jb3VudGVyLmZhbWlseSkge1xyXG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcuY291bnRlci5mYW1pbHlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuICdpbmhlcml0J1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmF0dHIoJ2ZvbnQtd2VpZ2h0JywgZCA9PiB7XHJcbiAgICAgICAgaWYgKGZvbnRSZW5kZXJpbmcgJiYgZm9udFJlbmRlcmluZy5jb3VudGVyICYmIGZvbnRSZW5kZXJpbmcuY291bnRlci53ZWlnaHQpIHtcclxuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmNvdW50ZXIud2VpZ2h0XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAnaW5oZXJpdCdcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJylcclxuICAgICAgLnRleHQoZCA9PiB7XHJcbiAgICAgICAgaWYgKGQuciAvIDQgPiAyLjUpIHtcclxuICAgICAgICAgIC8vIHNob3cgdGV4dCBhbmQgbnVtYmVyIHRocmVzaGhvbGRcclxuICAgICAgICAgIHJldHVybiBkLmRhdGEuY291bnRcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmF0dHIoJ3knLCBkID0+IHtcclxuICAgICAgICBsZXQgbGFiZWxMZW5ndGggPSBkLmRhdGEuZW50aXR5LmxhYmVsLnNwbGl0KC8gKy9nKVxyXG4gICAgICAgIGlmIChsYWJlbExlbmd0aC5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICBsYWJlbExlbmd0aCA9IGxhYmVsTGVuZ3RoLnNsaWNlKDAsIDMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYCR7bGFiZWxMZW5ndGgubGVuZ3RoIC0gKGxhYmVsTGVuZ3RoLmxlbmd0aCArIDEpIC8gMiArIC45N31lbWBcclxuICAgICAgfSlcclxuICAgICAgLmF0dHIoJ2ZpbGwtb3BhY2l0eScsIDApXHJcbiAgICAgIC50cmFuc2l0aW9uKHQpIC8vIGVudGVyKCkgdHJhbnNpdGlvbiBvbiA8dGV4dD5cclxuICAgICAgLmF0dHIoJ2ZpbGwtb3BhY2l0eScsIDEpO1xyXG5cclxuICAgIGxlYWZcclxuICAgICAgLmV4aXQoKSAvLyBFWElUIENZQ0xFXHJcbiAgICAgIC5yZW1vdmUoKTtcclxuXHJcbiAgICBpZiAoc2VsZWN0ZWQpIHtcclxuICAgICAgZy5maWx0ZXIoZCA9PiBzZWxlY3RlZC5pbmNsdWRlcyhkLmxlYWZVaWQpKSAvLyBhcHBlbmQgJ1gnIGljb24gLy8gb25seSBmb3Igc2VsZWN0ZWQgYnViYmxlc1xyXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxyXG4gICAgICAgIC5hdHRyKCdkJywgY2xvc2VJY29uUGF0aClcclxuICAgICAgICAuYXR0cignY2xhc3MnLCAnY2xvc2UtaWNvbicpXHJcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCBkID0+IHtcclxuICAgICAgICAgIGlmIChkLnIgLyA0ID4gMi41KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnI2ZmZic7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IHtcclxuICAgICAgICAgIGlmIChkLnIgLyA0ID4gMykge1xyXG4gICAgICAgICAgICByZXR1cm4gYHNjYWxlKC4wOCkgdHJhbnNsYXRlKDAsICR7ZC5yICogMTAgLSA4MH0pYDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBgc2NhbGUoLjA4KWA7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbWl0KCdkM2VuZCcsIGRhdGEpIC8vIGNvbW11bmljYXRlIGVuZCBvZiBkcmF3XHJcbiAgfVxyXG59XHJcbiJdfQ==