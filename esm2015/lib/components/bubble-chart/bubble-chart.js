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
export function BubbleChartData() { }
if (false) {
    /**
     * unique identifier for the bubble-chart
     * @type {?}
     */
    BubbleChartData.prototype.containerId;
    /**
     * total width for the bubble-chart
     * @type {?}
     */
    BubbleChartData.prototype.width;
    /**
     * total height for the bubble-chart
     * @type {?}
     */
    BubbleChartData.prototype.height;
    /**
     * data about the bubbles
     * @type {?}
     */
    BubbleChartData.prototype.data;
    /**
     * additional css classes
     * @type {?|undefined}
     */
    BubbleChartData.prototype.classes;
    /**
     * list of ID's of selected items
     * (selected items will render with a 'X' icon)
     * @type {?|undefined}
     */
    BubbleChartData.prototype.selected;
    /**
     * Specify a list of typeOfEntity types (domain),
     * and a list of colors (range), which will be mapped together.
     * @type {?|undefined}
     */
    BubbleChartData.prototype.colorMatch;
    /**
     * Define a max and min size for the bubbles
     * @type {?}
     */
    BubbleChartData.prototype.sizeRange;
    /**
     * If defined, transition will be activated
     * and the value will be used as duration
     * @type {?|undefined}
     */
    BubbleChartData.prototype.transition;
    /**
     * If set to false, stops the shuffling of the data
     * before rendering.
     * @type {?|undefined}
     */
    BubbleChartData.prototype.shuffle;
    /**
     * Defines the font-family and the font-weight for each text group
     * @type {?|undefined}
     */
    BubbleChartData.prototype.fontRendering;
    /**
     * expose the draw function outside of n7-frontend/components library
     * this is needed to redraw bubble-chart-component on command
     * @type {?|undefined}
     */
    BubbleChartData.prototype.setDraw;
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
export function BubbleChartDataItem() { }
if (false) {
    /** @type {?} */
    BubbleChartDataItem.prototype.entity;
    /** @type {?} */
    BubbleChartDataItem.prototype.count;
}
export class BubbleChartComponent {
    constructor() {
        this._loaded = false;
        this.draw = (/**
         * @return {?}
         */
        () => {
            const { containerId, data, height, width, selected, transition, colorMatch, shuffle, fontRendering } = this.data;
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
            if (typeof transition === 'number') {
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
            const sizeScale = d3 // map entity count to bubble size
                .scaleLinear()
                .domain([0, d3.max(data, (/**
                 * @param {?} d
                 * @return {?}
                 */
                (d) => +d.count))])
                .range([3, d3.max(data, (/**
                 * @param {?} d
                 * @return {?}
                 */
                (d) => +d.count))]);
            /** @type {?} */
            const pack = (/**
             * @param {?} children
             * @return {?}
             */
            (children) => d3
                .pack()
                .size([width - 2, height - 2])
                .padding(1.5)(d3.hierarchy({ children }).sum((/**
             * @param {?} d
             * @return {?}
             */
            (d) => sizeScale(d.count)))));
            /** @type {?} */
            const root = (/**
             * @return {?}
             */
            () => {
                if (typeof shuffle === 'undefined' || shuffle) {
                    /** @type {?} */
                    const shuffData = data.slice();
                    return pack(d3.shuffle(shuffData));
                } // if shuffle is set to false, skip the data shuffle
                return pack(data);
            });
            /** @type {?} */
            const svg = d3
                .select(`#${containerId}`)
                .attr('viewBox', [0, 0, width, height])
                .attr('font-family', 'Verdana, Geneva, sans-serif')
                .attr('text-anchor', 'middle');
            /** @type {?} */
            const leaf = svg.selectAll('g').data(root().leaves(), (/**
             * @param {?} d
             * @return {?}
             */
            (d) => d.data.entity.id));
            leaf
                .transition(t) // update transition on <g>
                .attr('fill-opacity', 1)
                .attr('transform', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => `translate(${d.x + 1},${d.y + 1})`))
                .attr('font-size', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => {
                /** @type {?} */
                let size = d.r / 5.5;
                size *= 1;
                size += 1;
                return `${Math.round(size)}px`;
            }));
            leaf.selectAll('.close-icon').remove(); // clear all existing close icons
            if (selected) {
                leaf // render necessary close icons
                    .filter((/**
                 * @param {?} d
                 * @return {?}
                 */
                (d) => selected.includes(d.data.entity.id)))
                    .append('path')
                    .attr('class', 'close-icon')
                    .attr('d', closeIconPath)
                    .attr('fill', '#fff')
                    .attr('transform', (/**
                 * @param {?} d
                 * @return {?}
                 */
                (d) => {
                    if (d.r / 4 > 3) {
                        return `scale(.08) translate(0, ${d.r * 10 - 80})`;
                    }
                    return 'scale(.08)';
                }));
            }
            leaf
                .select('circle')
                .transition(t) // update transition on <circle>
                .attr('fill-opacity', 1)
                .attr('r', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => d.r));
            leaf
                .select('text')
                .attr('font-family', (/**
             * @return {?}
             */
            () => {
                if (fontRendering && fontRendering.label && fontRendering.label.family) {
                    return fontRendering.label.family;
                }
                return 'inherit';
            }))
                .attr('font-weight', (/**
             * @return {?}
             */
            () => {
                if (fontRendering && fontRendering.label && fontRendering.label.weight) {
                    return fontRendering.label.weight;
                }
                return 'inherit';
            }))
                .selectAll('tspan')
                .data((/**
             * @param {?} d
             * @return {?}
             */
            (d) => {
                if (d.r / 4 > 4.5) {
                    // show text and number threshhold
                    /** @type {?} */
                    let label = (d.data.entity.label.charAt(0).toUpperCase()
                        + d.data.entity.label.slice(1)).split(/ +/g);
                    if (label.length > 3) {
                        label = label.slice(0, 3);
                        label[2] += '…';
                    }
                    return label;
                }
                if (d.r / 4 > 2.5) {
                    // show text threshhold
                    /** @type {?} */
                    let label = (d.data.entity.label.charAt(0).toUpperCase()
                        + d.data.entity.label.slice(1)).split(/ +/g);
                    if (label.length > 3) {
                        label = label.slice(0, 3);
                        label[2] += '…';
                    }
                    return label;
                }
                return '';
            }))
                .join('tspan')
                .attr('x', 0)
                .attr('y', (/**
             * @param {?} d
             * @param {?} i
             * @param {?} nodes
             * @return {?}
             */
            (d, i, nodes) => `${i - (nodes.length + 1) / 2 + 0.97}em`))
                .attr('fill', 'white')
                .text((/**
             * @param {?} d
             * @return {?}
             */
            (d) => d));
            leaf
                .select('.label-count')
                .attr('font-family', (/**
             * @return {?}
             */
            () => {
                if (fontRendering && fontRendering.counter && fontRendering.counter.family) {
                    return fontRendering.counter.family;
                }
                return 'inherit';
            }))
                .attr('font-weight', (/**
             * @return {?}
             */
            () => {
                if (fontRendering && fontRendering.counter && fontRendering.counter.weight) {
                    return fontRendering.counter.weight;
                }
                return 'inherit';
            }))
                .attr('fill', 'white')
                .text((/**
             * @param {?} d
             * @return {?}
             */
            (d) => {
                if (d.r / 4 > 2.5) {
                    // show text and number threshhold
                    return d.data.count;
                }
                return '';
            }))
                .attr('y', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => {
                /** @type {?} */
                let labelLength = d.data.entity.label.split(/ +/g);
                if (labelLength.length > 3) {
                    labelLength = labelLength.slice(0, 3);
                }
                return `${labelLength.length - (labelLength.length + 1) / 2 + 0.97}em`;
            }));
            /** @type {?} */
            const g = leaf.enter().append('g');
            g.attr('transform', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => `translate(${d.x + 1},${d.y + 1})`))
                .attr('font-size', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => {
                /** @type {?} */
                let size = d.r / 5.5;
                size *= 1;
                size += 1;
                return `${Math.round(size)}px`;
            }))
                .attr('cursor', 'pointer')
                .on('click', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => {
                this.onClick(d.data.entity.id);
            }))
                .attr('id', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => `g_${d.data.entity.id}`))
                .append('circle')
                .attr('id', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => { d.leafUid = d.data.entity.id; }))
                .attr('r', 0)
                .transition(t) // enter() transition on <circle>
                .attr('fill-opacity', 1)
                .attr('fill', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => colorMap(d.data.entity.typeOfEntity)))
                .attr('r', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => d.r));
            g.append('clipPath')
                .attr('id', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => { d.clipUid = `Clip-${d.data.entity.id}`; }))
                .append('use')
                .attr('xlink:href', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => d.leafUid.href));
            g.append('text')
                .attr('font-family', (/**
             * @return {?}
             */
            () => {
                if (fontRendering && fontRendering.label && fontRendering.label.family) {
                    return fontRendering.label.family;
                }
                return 'inherit';
            }))
                .attr('font-weight', (/**
             * @return {?}
             */
            () => {
                if (fontRendering && fontRendering && fontRendering.label && fontRendering.label.weight) {
                    return fontRendering.label.weight;
                }
                return 'inherit';
            }))
                .selectAll('tspan')
                .data((/**
             * @param {?} d
             * @return {?}
             */
            (d) => {
                if (d.r / 4 > 4.5) {
                    // show text and number threshhold
                    /** @type {?} */
                    let label = (d.data.entity.label.charAt(0).toUpperCase()
                        + d.data.entity.label.slice(1)).split(/ +/g);
                    if (label.length > 3) {
                        label = label.slice(0, 3);
                        label[2] += '…';
                    }
                    return label;
                }
                if (d.r / 4 > 2.5) {
                    // show text threshhold
                    /** @type {?} */
                    let label = (d.data.entity.label.charAt(0).toUpperCase()
                        + d.data.entity.label.slice(1)).split(/ +/g);
                    if (label.length > 3) {
                        label = label.slice(0, 3);
                        label[2] += '…';
                    }
                    return label;
                }
                return '';
            }))
                .join('tspan')
                .attr('x', 0)
                .attr('y', (/**
             * @param {?} d
             * @param {?} i
             * @param {?} nodes
             * @return {?}
             */
            (d, i, nodes) => `${i - (nodes.length + 1) / 2 + 0.97}em`))
                .attr('fill', 'white')
                .text((/**
             * @param {?} d
             * @return {?}
             */
            (d) => d))
                .attr('fill-opacity', 0)
                .transition(t) // enter() transition on <tspan>
                .attr('fill-opacity', 1);
            g.append('text') // Count label
                .attr('class', 'label-count')
                .attr('font-family', (/**
             * @return {?}
             */
            () => {
                if (fontRendering && fontRendering.counter && fontRendering.counter.family) {
                    return fontRendering.counter.family;
                }
                return 'inherit';
            }))
                .attr('font-weight', (/**
             * @return {?}
             */
            () => {
                if (fontRendering && fontRendering.counter && fontRendering.counter.weight) {
                    return fontRendering.counter.weight;
                }
                return 'inherit';
            }))
                .attr('fill', 'white')
                .text((/**
             * @param {?} d
             * @return {?}
             */
            (d) => {
                if (d.r / 4 > 2.5) {
                    // show text and number threshhold
                    return d.data.count;
                }
                return '';
            }))
                .attr('y', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => {
                /** @type {?} */
                let labelLength = d.data.entity.label.split(/ +/g);
                if (labelLength.length > 3) {
                    labelLength = labelLength.slice(0, 3);
                }
                return `${labelLength.length - (labelLength.length + 1) / 2 + 0.97}em`;
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
                (d) => selected.includes(d.leafUid))) // append 'X' icon // only for selected bubbles
                    .append('path')
                    .attr('d', closeIconPath)
                    .attr('class', 'close-icon')
                    .attr('fill', (/**
                 * @param {?} d
                 * @return {?}
                 */
                (d) => {
                    if (d.r / 4 > 2.5) {
                        return '#fff';
                    }
                    return 'transparent';
                }))
                    .attr('transform', (/**
                 * @param {?} d
                 * @return {?}
                 */
                (d) => {
                    if (d.r / 4 > 3) {
                        return `scale(.08) translate(0, ${d.r * 10 - 80})`;
                    }
                    return 'scale(.08)';
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
        if (this.data) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQvYnViYmxlLWNoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sS0FBSyxFQUFFLE1BQU0sSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7O0FBYXpCLHFDQW1FQzs7Ozs7O0lBL0RDLHNDQUFvQjs7Ozs7SUFJcEIsZ0NBQWM7Ozs7O0lBSWQsaUNBQWU7Ozs7O0lBSWYsK0JBQTRCOzs7OztJQUk1QixrQ0FBaUI7Ozs7OztJQUtqQixtQ0FBb0I7Ozs7OztJQUtwQixxQ0FHRTs7Ozs7SUFJRixvQ0FBNEI7Ozs7OztJQUs1QixxQ0FBb0I7Ozs7OztJQUtwQixrQ0FBa0I7Ozs7O0lBSWxCLHdDQVNFOzs7Ozs7SUFNRixrQ0FBYzs7Ozs7Ozs7Ozs7O0FBWWhCLHlDQU9DOzs7SUFOQyxxQ0FJRTs7SUFDRixvQ0FBYzs7QUFPaEIsTUFBTSxPQUFPLG9CQUFvQjtJQUpqQztRQVNVLFlBQU8sR0FBRyxLQUFLLENBQUM7UUF3QnhCLFNBQUk7OztRQUFHLEdBQUcsRUFBRTtrQkFDSixFQUNKLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUN6QixLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFDM0IsVUFBVSxFQUFFLE9BQU8sRUFDbkIsYUFBYSxFQUNkLEdBQUcsSUFBSSxDQUFDLElBQUk7O2tCQUNQLGFBQWEsR0FBRyx5RkFBeUY7WUFFL0csSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hCLDJEQUEyRDtnQkFDM0QsT0FBTyxDQUFDLElBQUksQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDO2dCQUNqRixPQUFPO2FBQ1I7O2dCQUVHLENB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O1FBQ25COzs7VUFHRTtRQUNGLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksSUFBSSxDQUFDLE9BQU87Z0JBQUUsT0FBTztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixVQUFVOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNaLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM5QjtZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUEvQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLHlKQUFrQzthQUNuQzs7O21CQUVFLEtBQUs7bUJBRUwsS0FBSzs7OztJQUZOLG9DQUErQjs7SUFFL0Isb0NBQW1COzs7OztJQUVuQix1Q0FBd0I7O0lBd0J4QixvQ0E0U0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBCVUJCTEVDSEFSVC50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBCdWJibGVDaGFydENvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJJZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJXaWR0aCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJIZWlnaHQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgYnViYmxlc0RhdGEgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcmVzZXQgKG9wdGlvbmFsKVxyXG4qL1xyXG5leHBvcnQgaW50ZXJmYWNlIEJ1YmJsZUNoYXJ0RGF0YSB7XHJcbiAgLyoqXHJcbiAgICogdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBidWJibGUtY2hhcnRcclxuICAgKi9cclxuICBjb250YWluZXJJZDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHRvdGFsIHdpZHRoIGZvciB0aGUgYnViYmxlLWNoYXJ0XHJcbiAgICovXHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICAvKipcclxuICAgKiB0b3RhbCBoZWlnaHQgZm9yIHRoZSBidWJibGUtY2hhcnRcclxuICAgKi9cclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBkYXRhIGFib3V0IHRoZSBidWJibGVzXHJcbiAgICovXHJcbiAgZGF0YTogQnViYmxlQ2hhcnREYXRhSXRlbVtdO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgY3NzIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGxpc3Qgb2YgSUQncyBvZiBzZWxlY3RlZCBpdGVtc1xyXG4gICAqIChzZWxlY3RlZCBpdGVtcyB3aWxsIHJlbmRlciB3aXRoIGEgJ1gnIGljb24pXHJcbiAgICovXHJcbiAgc2VsZWN0ZWQ/OiBzdHJpbmdbXTtcclxuICAvKipcclxuICAgKiBTcGVjaWZ5IGEgbGlzdCBvZiB0eXBlT2ZFbnRpdHkgdHlwZXMgKGRvbWFpbiksXHJcbiAgICogYW5kIGEgbGlzdCBvZiBjb2xvcnMgKHJhbmdlKSwgd2hpY2ggd2lsbCBiZSBtYXBwZWQgdG9nZXRoZXIuXHJcbiAgICovXHJcbiAgY29sb3JNYXRjaD86IHtcclxuICAgIGRvbWFpbjogc3RyaW5nW107XHJcbiAgICByYW5nZTogc3RyaW5nW107XHJcbiAgfTtcclxuICAvKipcclxuICAgKiBEZWZpbmUgYSBtYXggYW5kIG1pbiBzaXplIGZvciB0aGUgYnViYmxlc1xyXG4gICAqL1xyXG4gIHNpemVSYW5nZTogW251bWJlciwgbnVtYmVyXTtcclxuICAvKipcclxuICAgKiBJZiBkZWZpbmVkLCB0cmFuc2l0aW9uIHdpbGwgYmUgYWN0aXZhdGVkXHJcbiAgICogYW5kIHRoZSB2YWx1ZSB3aWxsIGJlIHVzZWQgYXMgZHVyYXRpb25cclxuICAgKi9cclxuICB0cmFuc2l0aW9uPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIElmIHNldCB0byBmYWxzZSwgc3RvcHMgdGhlIHNodWZmbGluZyBvZiB0aGUgZGF0YVxyXG4gICAqIGJlZm9yZSByZW5kZXJpbmcuXHJcbiAgICovXHJcbiAgc2h1ZmZsZT86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogRGVmaW5lcyB0aGUgZm9udC1mYW1pbHkgYW5kIHRoZSBmb250LXdlaWdodCBmb3IgZWFjaCB0ZXh0IGdyb3VwXHJcbiAgICovXHJcbiAgZm9udFJlbmRlcmluZz86IHtcclxuICAgIGxhYmVsPzoge1xyXG4gICAgICBmYW1pbHk/OiBzdHJpbmc7XHJcbiAgICAgIHdlaWdodD86IHN0cmluZztcclxuICAgIH07XHJcbiAgICBjb3VudGVyPzoge1xyXG4gICAgICBmYW1pbHk/OiBzdHJpbmc7XHJcbiAgICAgIHdlaWdodD86IHN0cmluZztcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogZXhwb3NlIHRoZSBkcmF3IGZ1bmN0aW9uIG91dHNpZGUgb2YgbjctZnJvbnRlbmQvY29tcG9uZW50cyBsaWJyYXJ5XHJcbiAgICogdGhpcyBpcyBuZWVkZWQgdG8gcmVkcmF3IGJ1YmJsZS1jaGFydC1jb21wb25lbnQgb24gY29tbWFuZFxyXG4gICAqL1xyXG4gIHNldERyYXc/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEQzQ2hhcnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgZW50aXR5IChyZXF1aXJlZClcclxuICogLSBpZCAocmVxdWlyZWQpXHJcbiAqIC0gbGFiZWwgKG9wdGlvbmFsKVxyXG4gKiAtIHR5cGVPZkVudGl0eSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjb3VudCAocmVxdWlyZWQpXHJcbiovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQnViYmxlQ2hhcnREYXRhSXRlbSB7XHJcbiAgZW50aXR5OiB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgICB0eXBlT2ZFbnRpdHk/OiBzdHJpbmc7XHJcbiAgfTtcclxuICBjb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWJ1YmJsZS1jaGFydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2J1YmJsZS1jaGFydC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQnViYmxlQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcclxuICBASW5wdXQoKSBkYXRhOiBCdWJibGVDaGFydERhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBfbG9hZGVkID0gZmFsc2U7XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcclxuICAgIC8qXHJcbiAgICAgV2FpdHMgZm9yIHRoZSBkb20gdG8gYmUgbG9hZGVkLCB0aGVuIGZpcmVzIHRoZSBkcmF3IGZ1bmN0aW9uXHJcbiAgICAgdGhhdCByZW5kZXJzIHRoZSBjaGFydC5cclxuICAgICovXHJcbiAgICBpZiAodGhpcy5kYXRhKSB7XHJcbiAgICAgIGlmICh0aGlzLl9sb2FkZWQpIHJldHVybjtcclxuICAgICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuc2V0RHJhdykge1xyXG4gICAgICAgICAgdGhpcy5kYXRhLnNldERyYXcodGhpcy5kcmF3KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbGljayhwYXlsb2FkKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgZHJhdyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgY29udGFpbmVySWQsIGRhdGEsIGhlaWdodCxcclxuICAgICAgd2lkdGgsIHNlbGVjdGVkLCB0cmFuc2l0aW9uLFxyXG4gICAgICBjb2xvck1hdGNoLCBzaHVmZmxlLFxyXG4gICAgICBmb250UmVuZGVyaW5nXHJcbiAgICB9ID0gdGhpcy5kYXRhO1xyXG4gICAgY29uc3QgY2xvc2VJY29uUGF0aCA9ICdNIC01MCw0MCBMLTQwLDUwIDAsMTAgNDAsNTAgNTAsNDAgMTAsMCA1MCwtNDAgNDAsLTUwIDAsLTEwIC00MCwtNTAgLTUwLC00MCAtMTAsMCAtNTAsNDAnO1xyXG5cclxuICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSkge1xyXG4gICAgICAvLyBDaGVjayBpZiBpdCBpcyBwb3NzaWJsZSB0byBkcmF3IHdpdGggdGhlIGN1cnJlbnQgZGF0YXNldFxyXG4gICAgICBjb25zb2xlLndhcm4oJyhuNy1idWJibGUtY2hhcnQpIFRoZSBkYXRhIG9iamVjdCBpcyBub3QgaW4gdGhlIGV4cGVjdGVkIGZvcm1hdCEnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB0ID0gZDNcclxuICAgICAgLnRyYW5zaXRpb24oKVxyXG4gICAgICAuZHVyYXRpb24oMCk7XHJcbiAgICBpZiAodHlwZW9mIHRyYW5zaXRpb24gPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHQgPSBkM1xyXG4gICAgICAgIC50cmFuc2l0aW9uKClcclxuICAgICAgICAuZHVyYXRpb24odHJhbnNpdGlvbilcclxuICAgICAgICAuZWFzZShkMy5lYXNlQ3ViaWNJbk91dCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29sb3JNYXAgPSBkMy5zY2FsZU9yZGluYWwoKVxyXG4gICAgICAuZG9tYWluKGNvbG9yTWF0Y2ggPyBjb2xvck1hdGNoLmRvbWFpbiA6IFsncGVyc29uYScsICdsdW9nbycsICdvcmdhbml6emF6aW9uZScsICdjb3NhIG5vdGV2b2xlJ10pXHJcbiAgICAgIC5yYW5nZShjb2xvck1hdGNoID8gY29sb3JNYXRjaC5yYW5nZSA6IGQzLnNjaGVtZVRhYmxlYXUxMCk7XHJcblxyXG4gICAgY29uc3Qgc2l6ZVNjYWxlID0gZDMgLy8gbWFwIGVudGl0eSBjb3VudCB0byBidWJibGUgc2l6ZVxyXG4gICAgICAuc2NhbGVMaW5lYXIoKVxyXG4gICAgICAuZG9tYWluKFswLCBkMy5tYXgoZGF0YSwgKGQpID0+ICtkLmNvdW50KV0pXHJcbiAgICAgIC5yYW5nZShbMywgZDMubWF4KGRhdGEsIChkKSA9PiArZC5jb3VudCldKTtcclxuXHJcbiAgICBjb25zdCBwYWNrID0gKGNoaWxkcmVuKSA9PiBkM1xyXG4gICAgICAucGFjaygpXHJcbiAgICAgIC5zaXplKFt3aWR0aCAtIDIsIGhlaWdodCAtIDJdKVxyXG4gICAgICAucGFkZGluZygxLjUpKFxyXG4gICAgICAgIGQzLmhpZXJhcmNoeSh7IGNoaWxkcmVuIH0pLnN1bSgoZCkgPT4gc2l6ZVNjYWxlKGQuY291bnQpKVxyXG4gICAgICApO1xyXG5cclxuICAgIGNvbnN0IHJvb3QgPSAoKSA9PiB7IC8vIGlmIHNodWZmbGUgaXMgdW5kZWZpbmVkIG9yIHRydWUsIHNodWZmbGUgdGhlIGRhdGFcclxuICAgICAgaWYgKHR5cGVvZiBzaHVmZmxlID09PSAndW5kZWZpbmVkJyB8fCBzaHVmZmxlKSB7XHJcbiAgICAgICAgY29uc3Qgc2h1ZmZEYXRhID0gZGF0YS5zbGljZSgpOyAvLyBkbyBub3QgbW9kaWZ5IHRoZSBzb3VyY2UgZGF0YSFcclxuICAgICAgICByZXR1cm4gcGFjayhkMy5zaHVmZmxlKHNodWZmRGF0YSkpO1xyXG4gICAgICB9IC8vIGlmIHNodWZmbGUgaXMgc2V0IHRvIGZhbHNlLCBza2lwIHRoZSBkYXRhIHNodWZmbGVcclxuICAgICAgcmV0dXJuIHBhY2soZGF0YSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHN2ZyA9IGQzXHJcbiAgICAgIC5zZWxlY3QoYCMke2NvbnRhaW5lcklkfWApXHJcbiAgICAgIC5hdHRyKCd2aWV3Qm94JywgWzAsIDAsIHdpZHRoLCBoZWlnaHRdKVxyXG4gICAgICAuYXR0cignZm9udC1mYW1pbHknLCAnVmVyZGFuYSwgR2VuZXZhLCBzYW5zLXNlcmlmJylcclxuICAgICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpO1xyXG5cclxuICAgIGNvbnN0IGxlYWYgPSBzdmcuc2VsZWN0QWxsKCdnJykuZGF0YShyb290KCkubGVhdmVzKCksIChkKSA9PiBkLmRhdGEuZW50aXR5LmlkKTtcclxuICAgIGxlYWZcclxuICAgICAgLnRyYW5zaXRpb24odCkgLy8gdXBkYXRlIHRyYW5zaXRpb24gb24gPGc+XHJcbiAgICAgIC5hdHRyKCdmaWxsLW9wYWNpdHknLCAxKVxyXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQpID0+IGB0cmFuc2xhdGUoJHtkLnggKyAxfSwke2QueSArIDF9KWApXHJcbiAgICAgIC5hdHRyKCdmb250LXNpemUnLCAoZCkgPT4ge1xyXG4gICAgICAgIGxldCBzaXplID0gZC5yIC8gNS41O1xyXG4gICAgICAgIHNpemUgKj0gMTtcclxuICAgICAgICBzaXplICs9IDE7XHJcbiAgICAgICAgcmV0dXJuIGAke01hdGgucm91bmQoc2l6ZSl9cHhgO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBsZWFmLnNlbGVjdEFsbCgnLmNsb3NlLWljb24nKS5yZW1vdmUoKTsgLy8gY2xlYXIgYWxsIGV4aXN0aW5nIGNsb3NlIGljb25zXHJcbiAgICBpZiAoc2VsZWN0ZWQpIHtcclxuICAgICAgbGVhZiAvLyByZW5kZXIgbmVjZXNzYXJ5IGNsb3NlIGljb25zXHJcbiAgICAgICAgLmZpbHRlcigoZCkgPT4gc2VsZWN0ZWQuaW5jbHVkZXMoZC5kYXRhLmVudGl0eS5pZCkpXHJcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXHJcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2Nsb3NlLWljb24nKVxyXG4gICAgICAgIC5hdHRyKCdkJywgY2xvc2VJY29uUGF0aClcclxuICAgICAgICAuYXR0cignZmlsbCcsICcjZmZmJylcclxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQpID0+IHtcclxuICAgICAgICAgIGlmIChkLnIgLyA0ID4gMykge1xyXG4gICAgICAgICAgICByZXR1cm4gYHNjYWxlKC4wOCkgdHJhbnNsYXRlKDAsICR7ZC5yICogMTAgLSA4MH0pYDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiAnc2NhbGUoLjA4KSc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGVhZlxyXG4gICAgICAuc2VsZWN0KCdjaXJjbGUnKVxyXG4gICAgICAudHJhbnNpdGlvbih0KSAvLyB1cGRhdGUgdHJhbnNpdGlvbiBvbiA8Y2lyY2xlPlxyXG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMSlcclxuICAgICAgLmF0dHIoJ3InLCAoZCkgPT4gZC5yKTtcclxuXHJcbiAgICBsZWFmXHJcbiAgICAgIC5zZWxlY3QoJ3RleHQnKVxyXG4gICAgICAuYXR0cignZm9udC1mYW1pbHknLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGZvbnRSZW5kZXJpbmcgJiYgZm9udFJlbmRlcmluZy5sYWJlbCAmJiBmb250UmVuZGVyaW5nLmxhYmVsLmZhbWlseSkge1xyXG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcubGFiZWwuZmFtaWx5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJ2luaGVyaXQnO1xyXG4gICAgICB9KVxyXG4gICAgICAuYXR0cignZm9udC13ZWlnaHQnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGZvbnRSZW5kZXJpbmcgJiYgZm9udFJlbmRlcmluZy5sYWJlbCAmJiBmb250UmVuZGVyaW5nLmxhYmVsLndlaWdodCkge1xyXG4gICAgICAgICAgcmV0dXJuIGZvbnRSZW5kZXJpbmcubGFiZWwud2VpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJ2luaGVyaXQnO1xyXG4gICAgICB9KVxyXG4gICAgICAuc2VsZWN0QWxsKCd0c3BhbicpXHJcbiAgICAgIC5kYXRhKChkKSA9PiB7XHJcbiAgICAgICAgaWYgKGQuciAvIDQgPiA0LjUpIHtcclxuICAgICAgICAgIC8vIHNob3cgdGV4dCBhbmQgbnVtYmVyIHRocmVzaGhvbGRcclxuICAgICAgICAgIGxldCBsYWJlbCA9IChcclxuICAgICAgICAgICAgZC5kYXRhLmVudGl0eS5sYWJlbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICArIGQuZGF0YS5lbnRpdHkubGFiZWwuc2xpY2UoMSlcclxuICAgICAgICAgICkuc3BsaXQoLyArL2cpO1xyXG4gICAgICAgICAgaWYgKGxhYmVsLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgbGFiZWwgPSBsYWJlbC5zbGljZSgwLCAzKTtcclxuICAgICAgICAgICAgbGFiZWxbMl0gKz0gJ+KApic7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gbGFiZWw7XHJcbiAgICAgICAgfSBpZiAoZC5yIC8gNCA+IDIuNSkge1xyXG4gICAgICAgICAgLy8gc2hvdyB0ZXh0IHRocmVzaGhvbGRcclxuICAgICAgICAgIGxldCBsYWJlbCA9IChcclxuICAgICAgICAgICAgZC5kYXRhLmVudGl0eS5sYWJlbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICArIGQuZGF0YS5lbnRpdHkubGFiZWwuc2xpY2UoMSlcclxuICAgICAgICAgICkuc3BsaXQoLyArL2cpO1xyXG4gICAgICAgICAgaWYgKGxhYmVsLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgbGFiZWwgPSBsYWJlbC5zbGljZSgwLCAzKTtcclxuICAgICAgICAgICAgbGFiZWxbMl0gKz0gJ+KApic7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gbGFiZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgICAgfSlcclxuICAgICAgLmpvaW4oJ3RzcGFuJylcclxuICAgICAgLmF0dHIoJ3gnLCAwKVxyXG4gICAgICAuYXR0cigneScsIChkLCBpLCBub2RlcykgPT4gYCR7aSAtIChub2Rlcy5sZW5ndGggKyAxKSAvIDIgKyAwLjk3fWVtYClcclxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxyXG4gICAgICAudGV4dCgoZCkgPT4gZCk7XHJcblxyXG4gICAgbGVhZlxyXG4gICAgICAuc2VsZWN0KCcubGFiZWwtY291bnQnKVxyXG4gICAgICAuYXR0cignZm9udC1mYW1pbHknLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGZvbnRSZW5kZXJpbmcgJiYgZm9udFJlbmRlcmluZy5jb3VudGVyICYmIGZvbnRSZW5kZXJpbmcuY291bnRlci5mYW1pbHkpIHtcclxuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmNvdW50ZXIuZmFtaWx5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJ2luaGVyaXQnO1xyXG4gICAgICB9KVxyXG4gICAgICAuYXR0cignZm9udC13ZWlnaHQnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGZvbnRSZW5kZXJpbmcgJiYgZm9udFJlbmRlcmluZy5jb3VudGVyICYmIGZvbnRSZW5kZXJpbmcuY291bnRlci53ZWlnaHQpIHtcclxuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmNvdW50ZXIud2VpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJ2luaGVyaXQnO1xyXG4gICAgICB9KVxyXG4gICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXHJcbiAgICAgIC50ZXh0KChkKSA9PiB7XHJcbiAgICAgICAgaWYgKGQuciAvIDQgPiAyLjUpIHtcclxuICAgICAgICAgIC8vIHNob3cgdGV4dCBhbmQgbnVtYmVyIHRocmVzaGhvbGRcclxuICAgICAgICAgIHJldHVybiBkLmRhdGEuY291bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgICAgfSlcclxuICAgICAgLmF0dHIoJ3knLCAoZCkgPT4ge1xyXG4gICAgICAgIGxldCBsYWJlbExlbmd0aCA9IGQuZGF0YS5lbnRpdHkubGFiZWwuc3BsaXQoLyArL2cpO1xyXG4gICAgICAgIGlmIChsYWJlbExlbmd0aC5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICBsYWJlbExlbmd0aCA9IGxhYmVsTGVuZ3RoLnNsaWNlKDAsIDMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYCR7bGFiZWxMZW5ndGgubGVuZ3RoIC0gKGxhYmVsTGVuZ3RoLmxlbmd0aCArIDEpIC8gMiArIDAuOTd9ZW1gO1xyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICAgY29uc3QgZyA9IGxlYWYuZW50ZXIoKS5hcHBlbmQoJ2cnKTtcclxuXHJcbiAgICBnLmF0dHIoJ3RyYW5zZm9ybScsIChkKSA9PiBgdHJhbnNsYXRlKCR7ZC54ICsgMX0sJHtkLnkgKyAxfSlgKVxyXG4gICAgICAuYXR0cignZm9udC1zaXplJywgKGQpID0+IHtcclxuICAgICAgICBsZXQgc2l6ZSA9IGQuciAvIDUuNTtcclxuICAgICAgICBzaXplICo9IDE7XHJcbiAgICAgICAgc2l6ZSArPSAxO1xyXG4gICAgICAgIHJldHVybiBgJHtNYXRoLnJvdW5kKHNpemUpfXB4YDtcclxuICAgICAgfSlcclxuICAgICAgLmF0dHIoJ2N1cnNvcicsICdwb2ludGVyJylcclxuICAgICAgLm9uKCdjbGljaycsIChkKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbkNsaWNrKGQuZGF0YS5lbnRpdHkuaWQpO1xyXG4gICAgICB9KVxyXG4gICAgICAuYXR0cignaWQnLCAoZCkgPT4gYGdfJHtkLmRhdGEuZW50aXR5LmlkfWApXHJcbiAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXHJcbiAgICAgIC5hdHRyKCdpZCcsIChkKSA9PiB7IGQubGVhZlVpZCA9IGQuZGF0YS5lbnRpdHkuaWQ7IH0pXHJcbiAgICAgIC5hdHRyKCdyJywgMClcclxuICAgICAgLnRyYW5zaXRpb24odCkgLy8gZW50ZXIoKSB0cmFuc2l0aW9uIG9uIDxjaXJjbGU+XHJcbiAgICAgIC5hdHRyKCdmaWxsLW9wYWNpdHknLCAxKVxyXG4gICAgICAuYXR0cignZmlsbCcsIChkKSA9PiBjb2xvck1hcChkLmRhdGEuZW50aXR5LnR5cGVPZkVudGl0eSkpXHJcbiAgICAgIC5hdHRyKCdyJywgKGQpID0+IGQucik7XHJcblxyXG4gICAgZy5hcHBlbmQoJ2NsaXBQYXRoJylcclxuICAgICAgLmF0dHIoJ2lkJywgKGQpID0+IHsgZC5jbGlwVWlkID0gYENsaXAtJHtkLmRhdGEuZW50aXR5LmlkfWA7IH0pXHJcbiAgICAgIC5hcHBlbmQoJ3VzZScpXHJcbiAgICAgIC5hdHRyKCd4bGluazpocmVmJywgKGQpID0+IGQubGVhZlVpZC5ocmVmKTtcclxuXHJcbiAgICBnLmFwcGVuZCgndGV4dCcpXHJcbiAgICAgIC5hdHRyKCdmb250LWZhbWlseScsICgpID0+IHtcclxuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nLmxhYmVsICYmIGZvbnRSZW5kZXJpbmcubGFiZWwuZmFtaWx5KSB7XHJcbiAgICAgICAgICByZXR1cm4gZm9udFJlbmRlcmluZy5sYWJlbC5mYW1pbHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnaW5oZXJpdCc7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hdHRyKCdmb250LXdlaWdodCcsICgpID0+IHtcclxuICAgICAgICBpZiAoZm9udFJlbmRlcmluZyAmJiBmb250UmVuZGVyaW5nICYmIGZvbnRSZW5kZXJpbmcubGFiZWwgJiYgZm9udFJlbmRlcmluZy5sYWJlbC53ZWlnaHQpIHtcclxuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmxhYmVsLndlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICdpbmhlcml0JztcclxuICAgICAgfSlcclxuICAgICAgLnNlbGVjdEFsbCgndHNwYW4nKVxyXG4gICAgICAuZGF0YSgoZCkgPT4ge1xyXG4gICAgICAgIGlmIChkLnIgLyA0ID4gNC41KSB7XHJcbiAgICAgICAgICAvLyBzaG93IHRleHQgYW5kIG51bWJlciB0aHJlc2hob2xkXHJcbiAgICAgICAgICBsZXQgbGFiZWwgPSAoXHJcbiAgICAgICAgICAgIGQuZGF0YS5lbnRpdHkubGFiZWwuY2hhckF0KDApLnRvVXBwZXJDYXNlKClcclxuICAgICAgICAgICAgKyBkLmRhdGEuZW50aXR5LmxhYmVsLnNsaWNlKDEpXHJcbiAgICAgICAgICApLnNwbGl0KC8gKy9nKTtcclxuICAgICAgICAgIGlmIChsYWJlbC5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgIGxhYmVsID0gbGFiZWwuc2xpY2UoMCwgMyk7XHJcbiAgICAgICAgICAgIGxhYmVsWzJdICs9ICfigKYnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xyXG4gICAgICAgIH0gaWYgKGQuciAvIDQgPiAyLjUpIHtcclxuICAgICAgICAgIC8vIHNob3cgdGV4dCB0aHJlc2hob2xkXHJcbiAgICAgICAgICBsZXQgbGFiZWwgPSAoXHJcbiAgICAgICAgICAgIGQuZGF0YS5lbnRpdHkubGFiZWwuY2hhckF0KDApLnRvVXBwZXJDYXNlKClcclxuICAgICAgICAgICAgKyBkLmRhdGEuZW50aXR5LmxhYmVsLnNsaWNlKDEpXHJcbiAgICAgICAgICApLnNwbGl0KC8gKy9nKTtcclxuICAgICAgICAgIGlmIChsYWJlbC5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgIGxhYmVsID0gbGFiZWwuc2xpY2UoMCwgMyk7XHJcbiAgICAgICAgICAgIGxhYmVsWzJdICs9ICfigKYnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5qb2luKCd0c3BhbicpXHJcbiAgICAgIC5hdHRyKCd4JywgMClcclxuICAgICAgLmF0dHIoJ3knLCAoZCwgaSwgbm9kZXMpID0+IGAke2kgLSAobm9kZXMubGVuZ3RoICsgMSkgLyAyICsgMC45N31lbWApXHJcbiAgICAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJylcclxuICAgICAgLnRleHQoKGQpID0+IGQpXHJcbiAgICAgIC5hdHRyKCdmaWxsLW9wYWNpdHknLCAwKVxyXG4gICAgICAudHJhbnNpdGlvbih0KSAvLyBlbnRlcigpIHRyYW5zaXRpb24gb24gPHRzcGFuPlxyXG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMSk7XHJcblxyXG4gICAgZy5hcHBlbmQoJ3RleHQnKSAvLyBDb3VudCBsYWJlbFxyXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGFiZWwtY291bnQnKVxyXG4gICAgICAuYXR0cignZm9udC1mYW1pbHknLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGZvbnRSZW5kZXJpbmcgJiYgZm9udFJlbmRlcmluZy5jb3VudGVyICYmIGZvbnRSZW5kZXJpbmcuY291bnRlci5mYW1pbHkpIHtcclxuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmNvdW50ZXIuZmFtaWx5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJ2luaGVyaXQnO1xyXG4gICAgICB9KVxyXG4gICAgICAuYXR0cignZm9udC13ZWlnaHQnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGZvbnRSZW5kZXJpbmcgJiYgZm9udFJlbmRlcmluZy5jb3VudGVyICYmIGZvbnRSZW5kZXJpbmcuY291bnRlci53ZWlnaHQpIHtcclxuICAgICAgICAgIHJldHVybiBmb250UmVuZGVyaW5nLmNvdW50ZXIud2VpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJ2luaGVyaXQnO1xyXG4gICAgICB9KVxyXG4gICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXHJcbiAgICAgIC50ZXh0KChkKSA9PiB7XHJcbiAgICAgICAgaWYgKGQuciAvIDQgPiAyLjUpIHtcclxuICAgICAgICAgIC8vIHNob3cgdGV4dCBhbmQgbnVtYmVyIHRocmVzaGhvbGRcclxuICAgICAgICAgIHJldHVybiBkLmRhdGEuY291bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgICAgfSlcclxuICAgICAgLmF0dHIoJ3knLCAoZCkgPT4ge1xyXG4gICAgICAgIGxldCBsYWJlbExlbmd0aCA9IGQuZGF0YS5lbnRpdHkubGFiZWwuc3BsaXQoLyArL2cpO1xyXG4gICAgICAgIGlmIChsYWJlbExlbmd0aC5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICBsYWJlbExlbmd0aCA9IGxhYmVsTGVuZ3RoLnNsaWNlKDAsIDMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYCR7bGFiZWxMZW5ndGgubGVuZ3RoIC0gKGxhYmVsTGVuZ3RoLmxlbmd0aCArIDEpIC8gMiArIDAuOTd9ZW1gO1xyXG4gICAgICB9KVxyXG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMClcclxuICAgICAgLnRyYW5zaXRpb24odCkgLy8gZW50ZXIoKSB0cmFuc2l0aW9uIG9uIDx0ZXh0PlxyXG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgMSk7XHJcblxyXG4gICAgbGVhZlxyXG4gICAgICAuZXhpdCgpIC8vIEVYSVQgQ1lDTEVcclxuICAgICAgLnJlbW92ZSgpO1xyXG5cclxuICAgIGlmIChzZWxlY3RlZCkge1xyXG4gICAgICBnLmZpbHRlcigoZCkgPT4gc2VsZWN0ZWQuaW5jbHVkZXMoZC5sZWFmVWlkKSkgLy8gYXBwZW5kICdYJyBpY29uIC8vIG9ubHkgZm9yIHNlbGVjdGVkIGJ1YmJsZXNcclxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcclxuICAgICAgICAuYXR0cignZCcsIGNsb3NlSWNvblBhdGgpXHJcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2Nsb3NlLWljb24nKVxyXG4gICAgICAgIC5hdHRyKCdmaWxsJywgKGQpID0+IHtcclxuICAgICAgICAgIGlmIChkLnIgLyA0ID4gMi41KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnI2ZmZic7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGQuciAvIDQgPiAzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgc2NhbGUoLjA4KSB0cmFuc2xhdGUoMCwgJHtkLnIgKiAxMCAtIDgwfSlgO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuICdzY2FsZSguMDgpJztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVtaXQoJ2QzZW5kJywgZGF0YSk7IC8vIGNvbW11bmljYXRlIGVuZCBvZiBkcmF3XHJcbiAgfVxyXG59XHJcbiJdfQ==