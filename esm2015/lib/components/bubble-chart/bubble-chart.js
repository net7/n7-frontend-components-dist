/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// BUBBLECHART.ts
//---------------------------
import { Component, Input } from '@angular/core';
import * as d3_selection from "d3-selection";
// import only for auto-allocating the bubbles (needs heavy refactoring to work)
//import * as d3_hierarchy from "d3-hierarchy";
import * as d3_force from "d3-force";
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
    IBubbleChartData.prototype.containerWidth;
    /**
     * total height for the bubble-chart
     * @type {?}
     */
    IBubbleChartData.prototype.containerHeight;
    /**
     * data about the bubbles
     * @type {?}
     */
    IBubbleChartData.prototype.bubblesData;
    /**
     * whether the force simulation should be enabled or not
     * (do the bubbles' positions "adapt" to the container or not?)
     * @type {?}
     */
    IBubbleChartData.prototype.isForceSimulationEnabled;
    /**
     * options for the force simulation (ignored if isForceSimulationEnabled is false)
     * @type {?|undefined}
     */
    IBubbleChartData.prototype.forceSimulationData;
    /**
     * additional css classes
     * @type {?|undefined}
     */
    IBubbleChartData.prototype.classes;
    /**
     * specifies if the bubbles have to be reset from a previous instantiation
     * @type {?|undefined}
     */
    IBubbleChartData.prototype.reset;
    /**
     * callback for saving the update function needed for visually updating the chart
     * @type {?|undefined}
     */
    IBubbleChartData.prototype.setUpdateReference;
    /**
     * callback for saving/gettin a reference of the bubbles chart instance
     * @type {?|undefined}
     */
    IBubbleChartData.prototype.setBubbleChart;
}
/**
 * Interface for BubbleChartComponent's simulation "data"
 * (all the properties are optionals and if not provided
 * a default value is used instead)
 *
 * \@property xPull (optional)
 * \@property xPullStrength (optional)
 * \@property yPull (optional)
 * \@property yPullStrength (optional)
 * \@property collisionStrengh (optional)
 * \@property collisionIterations (optional)
 * \@property velocityDecay (optional)
 * @record
 */
export function IBubbleChartForceSimulationData() { }
if (false) {
    /**
     * x-coordinate to which the bubbles are pulled to
     * @type {?|undefined}
     */
    IBubbleChartForceSimulationData.prototype.xPull;
    /**
     * strength for the pull toward the xPull x-coordinate
     * @type {?|undefined}
     */
    IBubbleChartForceSimulationData.prototype.xPullStrength;
    /**
     * y-coordinate to which the bubbles are pulled to
     * @type {?|undefined}
     */
    IBubbleChartForceSimulationData.prototype.yPull;
    /**
     * strength for the pull toward the yPull y-coordinate
     * @type {?|undefined}
     */
    IBubbleChartForceSimulationData.prototype.yPullStrength;
    /**
     * strength of bubble's collision
     * @type {?|undefined}
     */
    IBubbleChartForceSimulationData.prototype.collisionStrengh;
    /**
     * number of iterations in the bubble's collision detection
     * (the higher the number the more precise and costly the detection)
     * @type {?|undefined}
     */
    IBubbleChartForceSimulationData.prototype.collisionIterations;
    /**
     * indicator on how fast the bubble's velocity decreases
     * @type {?|undefined}
     */
    IBubbleChartForceSimulationData.prototype.velocityDecay;
}
/**
 * Interface for a bubble's text
 *
 * \@property id (required)
 * \@property label (required)
 * \@property x_function (required)
 * \@property y_function (required)
 * \@property fontSize_function (required)
 * \@property color (required)
 * \@property classes (optional)
 *
 * @record
 */
export function IBubbleText() { }
if (false) {
    /**
     * unique identifier for the text
     * @type {?}
     */
    IBubbleText.prototype.id;
    /**
     * the actual text
     * @type {?}
     */
    IBubbleText.prototype.label;
    /**
     * function used to specify the x position the text
     * (can depend on the bubble's x-position, radius, etc...)
     * @type {?}
     */
    IBubbleText.prototype.x_function;
    /**
     * function used to specify the y position the text
     * (can depend on the bubble's y-position, radius, etc...)
     * @type {?}
     */
    IBubbleText.prototype.y_function;
    /**
     * function used to specify the font size of the text
     * (can depend on the bubble's radius, return a constant number, etc...)
     * @type {?}
     */
    IBubbleText.prototype.fontSize_function;
    /**
     * color of the text
     * @type {?}
     */
    IBubbleText.prototype.color;
    /**
     * additional css classes
     * @type {?|undefined}
     */
    IBubbleText.prototype.classes;
}
/**
 * Interface for a single bubble
 *
 * \@property id (required)
 * \@property x (optional)
 * \@property y (optional)
 * \@property radius (required)
 * \@property color (required)
 * \@property hasCloseIcon (optional)
 * \@property payload (optional)
 * \@property texts (optional)
 * \@property classes (optional)
 *
 * @record
 */
export function IBubbleData() { }
if (false) {
    /**
     * unique identifier for the bubble
     * @type {?}
     */
    IBubbleData.prototype.id;
    /**
     * the bubble's (starting) x-coordinate
     * @type {?|undefined}
     */
    IBubbleData.prototype.x;
    /**
     * the bubble's (starting) y-coordinate
     * @type {?|undefined}
     */
    IBubbleData.prototype.y;
    /**
     * the bubbles radius
     * @type {?}
     */
    IBubbleData.prototype.radius;
    /**
     * the bubble's color
     * @type {?}
     */
    IBubbleData.prototype.color;
    /**
     * specifies if the bubble has a close icon (default:false)
     * @type {?|undefined}
     */
    IBubbleData.prototype.hasCloseIcon;
    /**
     * action click's payload
     * @type {?|undefined}
     */
    IBubbleData.prototype.payload;
    /**
     * all the bubble's texts
     * @type {?|undefined}
     */
    IBubbleData.prototype.texts;
    /**
     * additional css classes
     * @type {?|undefined}
     */
    IBubbleData.prototype.classes;
}
export class BubbleChartComponent {
    constructor() {
        this._loaded = false;
        this.bubbles = null;
        this.genericBubble = null;
        this.bubbleChart = null;
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        if (!this.data)
            return;
        if (this.data.reset === true) {
            this.data.reset = false;
            this._loaded = false;
        }
        if (this._loaded)
            return;
        this._loaded = true;
        setTimeout((/**
         * @return {?}
         */
        () => this.makeBubbleChart()));
        if (this.data.setUpdateReference)
            this.data.setUpdateReference(this.update.bind(this));
    }
    /**
     * Makes the whole bubble chart
     * @return {?}
     */
    makeBubbleChart() {
        d3_selection.select(`#${this.data.containerId}`).selectAll("*").remove();
        /** @type {?} */
        var pot = document.getElementById(`${this.data.containerId}`);
        pot.style.width = this.data.containerWidth + 'px';
        pot.style.height = this.data.containerHeight + 'px';
        this.bubbleChart = d3_selection.select(`#${this.data.containerId}`)
            .append('svg')
            .attr('width', this.data.containerWidth)
            .attr('height', this.data.containerHeight);
        this.bubbles = this.data.bubblesData;
        this.initBubbles();
        if (this.data.isForceSimulationEnabled)
            this.setBubbleChartSimulation();
        this.update();
        if (this.bubbleChart) {
            this.bubbleChart.selectAll(`#${this.data.containerId} g circle, #${this.data.containerId} g text`).on('click', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => {
                if (!this.emit)
                    return;
                this.emit('click', { source: "bubble", bubblePayload: d.payload, bubble: d });
            }));
            this.bubbleChart.selectAll('circle[b-type="x_inner_circle"], text[b-type="x_inner_label"]').on('click', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => {
                if (d.hasCloseIcon) {
                    if (!this.emit)
                        return;
                    this.emit('click', { source: "close", bubblePayload: d.payload, bubble: d });
                }
                else {
                    this.emit('click', { source: "bubble", bubblePayload: d.payload, bubble: d });
                }
            }));
            this.bubbleChart.selectAll(`#${this.data.containerId} g`).on('mouseenter', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => {
                if (!this.emit)
                    return;
                this.emit('mouse_enter', { bubblePayload: d.payload, bubble: d });
            }));
            this.bubbleChart.selectAll(`#${this.data.containerId} g`).on('mouseleave', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => {
                if (!this.emit)
                    return;
                this.emit('mouse_leave', { bubblePayload: d.payload, bubble: d });
            }));
        }
        if (this.data.setBubbleChart)
            this.data.setBubbleChart(this.bubbleChart);
    }
    /**
     * Visually updates the bubble chart
     * @return {?}
     */
    update() {
        if (!this.data)
            return;
        if (this.genericBubble && this.genericBubble.attr) {
            this.genericBubble.attr('cx', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => { return d.x = Math.max(d.radius, Math.min(this.data.containerWidth - d.radius, d.x)); }))
                .attr('cy', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => { return d.y = Math.max(d.radius, Math.min(this.data.containerHeight - d.radius, d.y)); }));
        }
        if (this.data && this.data.bubblesData)
            this.data.bubblesData.forEach((/**
             * @param {?} c
             * @return {?}
             */
            (c) => {
                c.texts.forEach((/**
                 * @param {?} tx
                 * @return {?}
                 */
                tx => {
                    /** @type {?} */
                    var txt = this.bubbleChart.select(`text[id=${tx.id}]`);
                    txt.attr("dy", tx.y_function);
                    txt.attr("dx", tx.x_function);
                }));
            }));
        if (this.bubbleChart) {
            this.bubbleChart.selectAll('circle[b-type="x_inner_circle"]')
                .attr("cy", (/**
             * @param {?} d
             * @return {?}
             */
            (d) => d.y + (d.radius / 2)))
                .attr("cx", (/**
             * @param {?} d
             * @return {?}
             */
            (d) => d.x))
                .attr("opacity", (/**
             * @param {?} d
             * @return {?}
             */
            (d) => (d.hasCloseIcon ? 1 : 0)));
        }
        if (this.bubbleChart) {
            this.bubbleChart.selectAll('text[b-type="x_inner_label"]')
                .attr("dy", (/**
             * @param {?} d
             * @return {?}
             */
            (d) => d.y + (d.radius / 2) + 6))
                .attr("dx", (/**
             * @param {?} d
             * @return {?}
             */
            (d) => d.x))
                .attr("opacity", (/**
             * @param {?} d
             * @return {?}
             */
            (d) => (d.hasCloseIcon ? 1 : 0)));
        }
    }
    /**
     * Initialized the chart's bubbles
     * @private
     * @return {?}
     */
    initBubbles() {
        if (this.bubbleChart)
            this.genericBubble = this.bubbleChart.selectAll(`#${this.data.containerId} g`)
                .data(this.bubbles)
                .enter()
                .append('g')
                .attr("id", (/**
             * @param {?} d
             * @return {?}
             */
            (d) => d.id))
                .append('circle')
                .attr('r', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => Math.max(0, d.radius - 5.05)))
                .attr("cx", (/**
             * @param {?} d
             * @return {?}
             */
            (d) => d.x))
                .attr("cy", (/**
             * @param {?} d
             * @return {?}
             */
            (d) => d.y))
                .attr('padding', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => 50))
                .attr("class", (/**
             * @param {?} d
             * @return {?}
             */
            (d) => d.classes))
                .style('fill', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => d.color));
        if (this.data && this.data.bubblesData && this.bubbleChart)
            this.data.bubblesData.forEach((/**
             * @param {?} c
             * @return {?}
             */
            (c) => {
                /** @type {?} */
                let group = this.bubbleChart.select(`g[id=${c.id}]`);
                c.texts.forEach((/**
                 * @param {?} tx
                 * @return {?}
                 */
                tx => {
                    group.append("text")
                        .style("text-anchor", "middle")
                        .attr("dx", tx.x_function)
                        .attr("dy", tx.y_function)
                        .text(tx.label)
                        .attr("font-size", tx.fontSize_function)
                        .attr("fill", tx.color)
                        .attr("id", tx.id)
                        .attr("class", tx.classes);
                }));
            }));
        if (this.bubbleChart)
            this.bubbleChart.selectAll(`#${this.data.containerId} g`)
                .append('circle')
                .attr('r', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => 10))
                .attr('padding', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => 50))
                .style('fill', "white")
                .attr('cx', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => d.x))
                .attr('cy', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => d.y))
                .attr("b-type", "x_inner_circle")
                .attr("class", "circle_x-inner-circle");
        if (this.bubbleChart)
            this.bubbleChart.selectAll(`#${this.data.containerId} g`)
                .append("text")
                .style("user-select", "none")
                .style("text-anchor", "middle")
                .attr("fill", "black")
                .html("&#10005;")
                .attr("font-family", "sans-serif")
                .attr("font-size", 15)
                .attr("b-type", "x_inner_label")
                .attr("class", "circle_x-label");
    }
    /**
     * Sets the bubble chart force simulation
     * @private
     * @return {?}
     */
    setBubbleChartSimulation() {
        /** @type {?} */
        let tmpSimulationData = (this.data && this.data.forceSimulationData ? this.data.forceSimulationData : {});
        /** @type {?} */
        var xPull = (tmpSimulationData['xPull'] ? tmpSimulationData['xPull'] : this.data.containerWidth / 2);
        /** @type {?} */
        var xPullStrength = (tmpSimulationData['xPullStrength'] ? tmpSimulationData['xPullStrength'] : -0.01);
        /** @type {?} */
        var yPull = (tmpSimulationData['yPull'] ? tmpSimulationData['yPull'] : this.data.containerHeight / 2);
        /** @type {?} */
        var yPullStrength = (tmpSimulationData['yPullStrength'] ? tmpSimulationData['yPullStrength'] : -0.01);
        /** @type {?} */
        var collisionStrength = (tmpSimulationData['collisionStrengh'] ? tmpSimulationData['collisionStrengh'] : 0.99);
        /** @type {?} */
        var collisionIterations = (tmpSimulationData['collisionIterations'] ? tmpSimulationData['collisionIterations'] : 1);
        /** @type {?} */
        var velocityDecay = (tmpSimulationData['velocityDecay'] ? tmpSimulationData['velocityDecay'] : 0.99);
        // var simulation = 
        d3_force.forceSimulation()
            .velocityDecay(velocityDecay)
            .force("x", d3_force.forceX(xPull).strength(xPullStrength))
            .force("y", d3_force.forceY(yPull).strength(yPullStrength))
            .force("collide", d3_force.forceCollide().radius((/**
         * @param {?} d
         * @return {?}
         */
        (d) => d.radius)).strength(collisionStrength).iterations(collisionIterations))
            .nodes(this.bubbles)
            .on('tick', this.update.bind(this));
        //   .stop()
        // for (var i = 0; i < 300; i++) {
        //   simulation.tick()
        // }
    }
}
BubbleChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-bubble-chart',
                template: "<div *ngIf=\"data\" class=\"n7-bubble-chart {{ data.classes || '' }}\">\n    <div id=\"{{ data.containerId }}\"></div>\n</div>"
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
    /**
     * @type {?}
     * @private
     */
    BubbleChartComponent.prototype.bubbles;
    /**
     * @type {?}
     * @private
     */
    BubbleChartComponent.prototype.genericBubble;
    /**
     * @type {?}
     * @private
     */
    BubbleChartComponent.prototype.bubbleChart;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQvYnViYmxlLWNoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxLQUFLLFlBQVksTUFBTSxjQUFjLENBQUM7OztBQUc3QyxPQUFPLEtBQUssUUFBUSxNQUFNLFVBQVUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWFyQyxzQ0EwQ0M7Ozs7OztJQXRDQyx1Q0FBb0I7Ozs7O0lBSXBCLDBDQUF1Qjs7Ozs7SUFJdkIsMkNBQXdCOzs7OztJQUl4Qix1Q0FBMkI7Ozs7OztJQUszQixvREFBa0M7Ozs7O0lBSWxDLCtDQUFzRDs7Ozs7SUFJdEQsbUNBQWlCOzs7OztJQUlqQixpQ0FBZTs7Ozs7SUFJZiw4Q0FBeUI7Ozs7O0lBSXpCLDBDQUFxQjs7Ozs7Ozs7Ozs7Ozs7OztBQWdCdkIscURBOEJDOzs7Ozs7SUExQkMsZ0RBQWU7Ozs7O0lBSWYsd0RBQXVCOzs7OztJQUl2QixnREFBZTs7Ozs7SUFJZix3REFBdUI7Ozs7O0lBSXZCLDJEQUEwQjs7Ozs7O0lBSzFCLDhEQUE2Qjs7Ozs7SUFJN0Isd0RBQXVCOzs7Ozs7Ozs7Ozs7Ozs7QUFlekIsaUNBZ0NDOzs7Ozs7SUE1QkMseUJBQVc7Ozs7O0lBSVgsNEJBQWM7Ozs7OztJQUtkLGlDQUFnQjs7Ozs7O0lBS2hCLGlDQUFnQjs7Ozs7O0lBS2hCLHdDQUF1Qjs7Ozs7SUFJdkIsNEJBQWM7Ozs7O0lBSWQsOEJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCbkIsaUNBcUNDOzs7Ozs7SUFqQ0MseUJBQVc7Ozs7O0lBSVgsd0JBQVc7Ozs7O0lBSVgsd0JBQVc7Ozs7O0lBSVgsNkJBQWU7Ozs7O0lBSWYsNEJBQWM7Ozs7O0lBSWQsbUNB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dUNBQXVCOzs7OztJQUN2Qiw2Q0FBNkI7Ozs7O0lBQzdCLDJDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBCVUJCTEVDSEFSVC50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZDNfc2VsZWN0aW9uIGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbi8vIGltcG9ydCBvbmx5IGZvciBhdXRvLWFsbG9jYXRpbmcgdGhlIGJ1YmJsZXMgKG5lZWRzIGhlYXZ5IHJlZmFjdG9yaW5nIHRvIHdvcmspXG4vL2ltcG9ydCAqIGFzIGQzX2hpZXJhcmNoeSBmcm9tIFwiZDMtaGllcmFyY2h5XCI7XG5pbXBvcnQgKiBhcyBkM19mb3JjZSBmcm9tIFwiZDMtZm9yY2VcIjtcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEJ1YmJsZUNoYXJ0Q29tcG9uZW50J3MgXCJkYXRhXCJcbiAqIFxuICogQHByb3BlcnR5IGNvbnRhaW5lcklkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJXaWR0aCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY29udGFpbmVySGVpZ2h0IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBidWJibGVzRGF0YSAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSByZXNldCAob3B0aW9uYWwpXG4qL1xuZXhwb3J0IGludGVyZmFjZSBJQnViYmxlQ2hhcnREYXRhIHtcbiAgLyoqXG4gICAqIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgYnViYmxlLWNoYXJ0XG4gICAqL1xuICBjb250YWluZXJJZDogc3RyaW5nO1xuICAvKipcbiAgICogdG90YWwgd2lkdGggZm9yIHRoZSBidWJibGUtY2hhcnRcbiAgICovXG4gIGNvbnRhaW5lcldpZHRoOiBudW1iZXI7XG4gIC8qKlxuICAgKiB0b3RhbCBoZWlnaHQgZm9yIHRoZSBidWJibGUtY2hhcnRcbiAgICovXG4gIGNvbnRhaW5lckhlaWdodDogbnVtYmVyO1xuICAvKipcbiAgICogZGF0YSBhYm91dCB0aGUgYnViYmxlc1xuICAgKi9cbiAgYnViYmxlc0RhdGE6IElCdWJibGVEYXRhW107XG4gIC8qKlxuICAgKiB3aGV0aGVyIHRoZSBmb3JjZSBzaW11bGF0aW9uIHNob3VsZCBiZSBlbmFibGVkIG9yIG5vdFxuICAgKiAoZG8gdGhlIGJ1YmJsZXMnIHBvc2l0aW9ucyBcImFkYXB0XCIgdG8gdGhlIGNvbnRhaW5lciBvciBub3Q/KVxuICAgKi9cbiAgaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkOiBib29sZWFuO1xuICAvKipcbiAgICogb3B0aW9ucyBmb3IgdGhlIGZvcmNlIHNpbXVsYXRpb24gKGlnbm9yZWQgaWYgaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkIGlzIGZhbHNlKVxuICAgKi9cbiAgZm9yY2VTaW11bGF0aW9uRGF0YT86IElCdWJibGVDaGFydEZvcmNlU2ltdWxhdGlvbkRhdGE7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGNzcyBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogc3BlY2lmaWVzIGlmIHRoZSBidWJibGVzIGhhdmUgdG8gYmUgcmVzZXQgZnJvbSBhIHByZXZpb3VzIGluc3RhbnRpYXRpb25cbiAgICovXG4gIHJlc2V0PzogYm9vbGVhblxuICAvKipcbiAgICogY2FsbGJhY2sgZm9yIHNhdmluZyB0aGUgdXBkYXRlIGZ1bmN0aW9uIG5lZWRlZCBmb3IgdmlzdWFsbHkgdXBkYXRpbmcgdGhlIGNoYXJ0XG4gICAqL1xuICBzZXRVcGRhdGVSZWZlcmVuY2U/OiBhbnk7XG4gIC8qKlxuICAgKiBjYWxsYmFjayBmb3Igc2F2aW5nL2dldHRpbiBhIHJlZmVyZW5jZSBvZiB0aGUgYnViYmxlcyBjaGFydCBpbnN0YW5jZVxuICAgKi9cbiAgc2V0QnViYmxlQ2hhcnQ/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBCdWJibGVDaGFydENvbXBvbmVudCdzIHNpbXVsYXRpb24gXCJkYXRhXCJcbiAqIChhbGwgdGhlIHByb3BlcnRpZXMgYXJlIG9wdGlvbmFscyBhbmQgaWYgbm90IHByb3ZpZGVkXG4gKiBhIGRlZmF1bHQgdmFsdWUgaXMgdXNlZCBpbnN0ZWFkKVxuICogXG4gKiBAcHJvcGVydHkgeFB1bGwgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHhQdWxsU3RyZW5ndGggKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHlQdWxsIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB5UHVsbFN0cmVuZ3RoIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjb2xsaXNpb25TdHJlbmdoIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjb2xsaXNpb25JdGVyYXRpb25zIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB2ZWxvY2l0eURlY2F5IChvcHRpb25hbClcbiovXG5leHBvcnQgaW50ZXJmYWNlIElCdWJibGVDaGFydEZvcmNlU2ltdWxhdGlvbkRhdGEge1xuICAvKipcbiAgICogeC1jb29yZGluYXRlIHRvIHdoaWNoIHRoZSBidWJibGVzIGFyZSBwdWxsZWQgdG9cbiAgICovXG4gIHhQdWxsPzogbnVtYmVyO1xuICAvKipcbiAgICogc3RyZW5ndGggZm9yIHRoZSBwdWxsIHRvd2FyZCB0aGUgeFB1bGwgeC1jb29yZGluYXRlXG4gICAqL1xuICB4UHVsbFN0cmVuZ3RoPzogbnVtYmVyO1xuICAvKipcbiAgICogeS1jb29yZGluYXRlIHRvIHdoaWNoIHRoZSBidWJibGVzIGFyZSBwdWxsZWQgdG9cbiAgICovXG4gIHlQdWxsPzogbnVtYmVyO1xuICAvKipcbiAgICogc3RyZW5ndGggZm9yIHRoZSBwdWxsIHRvd2FyZCB0aGUgeVB1bGwgeS1jb29yZGluYXRlXG4gICAqL1xuICB5UHVsbFN0cmVuZ3RoPzogbnVtYmVyO1xuICAvKipcbiAgICogc3RyZW5ndGggb2YgYnViYmxlJ3MgY29sbGlzaW9uXG4gICAqL1xuICBjb2xsaXNpb25TdHJlbmdoPzogbnVtYmVyO1xuICAvKipcbiAgICogbnVtYmVyIG9mIGl0ZXJhdGlvbnMgaW4gdGhlIGJ1YmJsZSdzIGNvbGxpc2lvbiBkZXRlY3Rpb25cbiAgICogKHRoZSBoaWdoZXIgdGhlIG51bWJlciB0aGUgbW9yZSBwcmVjaXNlIGFuZCBjb3N0bHkgdGhlIGRldGVjdGlvbilcbiAgICovXG4gIGNvbGxpc2lvbkl0ZXJhdGlvbnM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBpbmRpY2F0b3Igb24gaG93IGZhc3QgdGhlIGJ1YmJsZSdzIHZlbG9jaXR5IGRlY3JlYXNlc1xuICAgKi9cbiAgdmVsb2NpdHlEZWNheT86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGEgYnViYmxlJ3MgdGV4dFxuICpcbiAqIEBwcm9wZXJ0eSBpZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgbGFiZWwgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHhfZnVuY3Rpb24gKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHlfZnVuY3Rpb24gKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGZvbnRTaXplX2Z1bmN0aW9uIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjb2xvciAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKlxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUJ1YmJsZVRleHQge1xuICAvKipcbiAgICogdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSB0ZXh0XG4gICAqL1xuICBpZDogc3RyaW5nO1xuICAvKipcbiAgICogdGhlIGFjdHVhbCB0ZXh0XG4gICAqL1xuICBsYWJlbDogc3RyaW5nO1xuICAvKipcbiAgICogZnVuY3Rpb24gdXNlZCB0byBzcGVjaWZ5IHRoZSB4IHBvc2l0aW9uIHRoZSB0ZXh0XG4gICAqIChjYW4gZGVwZW5kIG9uIHRoZSBidWJibGUncyB4LXBvc2l0aW9uLCByYWRpdXMsIGV0Yy4uLilcbiAgICovXG4gIHhfZnVuY3Rpb246IGFueTtcbiAgLyoqXG4gICAqIGZ1bmN0aW9uIHVzZWQgdG8gc3BlY2lmeSB0aGUgeSBwb3NpdGlvbiB0aGUgdGV4dFxuICAgKiAoY2FuIGRlcGVuZCBvbiB0aGUgYnViYmxlJ3MgeS1wb3NpdGlvbiwgcmFkaXVzLCBldGMuLi4pXG4gICAqL1xuICB5X2Z1bmN0aW9uOiBhbnk7XG4gIC8qKlxuICAgKiBmdW5jdGlvbiB1c2VkIHRvIHNwZWNpZnkgdGhlIGZvbnQgc2l6ZSBvZiB0aGUgdGV4dFxuICAgKiAoY2FuIGRlcGVuZCBvbiB0aGUgYnViYmxlJ3MgcmFkaXVzLCByZXR1cm4gYSBjb25zdGFudCBudW1iZXIsIGV0Yy4uLilcbiAgICovXG4gIGZvbnRTaXplX2Z1bmN0aW9uOiBhbnk7XG4gIC8qKlxuICAgKiBjb2xvciBvZiB0aGUgdGV4dFxuICAgKi9cbiAgY29sb3I6IHN0cmluZztcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgY3NzIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBhIHNpbmdsZSBidWJibGVcbiAqXG4gKiBAcHJvcGVydHkgaWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHggKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHkgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHJhZGl1cyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY29sb3IgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGhhc0Nsb3NlSWNvbiAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdGV4dHMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICpcbiovXG5leHBvcnQgaW50ZXJmYWNlIElCdWJibGVEYXRhIHtcbiAgLyoqXG4gICAqIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgYnViYmxlXG4gICAqL1xuICBpZDogc3RyaW5nO1xuICAvKipcbiAgICogdGhlIGJ1YmJsZSdzIChzdGFydGluZykgeC1jb29yZGluYXRlXG4gICAqL1xuICB4PzogbnVtYmVyO1xuICAvKipcbiAgICogdGhlIGJ1YmJsZSdzIChzdGFydGluZykgeS1jb29yZGluYXRlXG4gICAqL1xuICB5PzogbnVtYmVyO1xuICAvKipcbiAgICogdGhlIGJ1YmJsZXMgcmFkaXVzXG4gICAqL1xuICByYWRpdXM6IG51bWJlcjtcbiAgLyoqXG4gICAqIHRoZSBidWJibGUncyBjb2xvclxuICAgKi9cbiAgY29sb3I6IHN0cmluZztcbiAgLyoqXG4gICAqIHNwZWNpZmllcyBpZiB0aGUgYnViYmxlIGhhcyBhIGNsb3NlIGljb24gKGRlZmF1bHQ6ZmFsc2UpXG4gICAqL1xuICBoYXNDbG9zZUljb24/OiBib29sZWFuO1xuICAvKipcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbiAgLyoqXG4gICAqIGFsbCB0aGUgYnViYmxlJ3MgdGV4dHNcbiAgICovXG4gIHRleHRzPzogSUJ1YmJsZVRleHRbXTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgY3NzIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWJ1YmJsZS1jaGFydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9idWJibGUtY2hhcnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQnViYmxlQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcbiAgQElucHV0KCkgZGF0YTogSUJ1YmJsZUNoYXJ0RGF0YTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuICBwcml2YXRlIF9sb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKXtcbiAgICBpZighdGhpcy5kYXRhKSByZXR1cm47XG4gICAgaWYodGhpcy5kYXRhLnJlc2V0PT09dHJ1ZSl7XG4gICAgICB0aGlzLmRhdGEucmVzZXQ9ZmFsc2U7XG4gICAgICB0aGlzLl9sb2FkZWQ9ZmFsc2U7XG4gICAgfVxuICAgIGlmKHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xuICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm1ha2VCdWJibGVDaGFydCgpKTtcbiAgICBcbiAgICBpZih0aGlzLmRhdGEuc2V0VXBkYXRlUmVmZXJlbmNlKVxuICAgICAgdGhpcy5kYXRhLnNldFVwZGF0ZVJlZmVyZW5jZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblxufVxuXG4gIHByaXZhdGUgYnViYmxlcyA9IG51bGw7XG4gIHByaXZhdGUgZ2VuZXJpY0J1YmJsZSA9IG51bGw7XG4gIHByaXZhdGUgYnViYmxlQ2hhcnQgPSBudWxsO1xuXG4gIC8qKiBNYWtlcyB0aGUgd2hvbGUgYnViYmxlIGNoYXJ0ICovXG4gIHB1YmxpYyBtYWtlQnViYmxlQ2hhcnQoKXtcbiAgICBkM19zZWxlY3Rpb24uc2VsZWN0KGAjJHt0aGlzLmRhdGEuY29udGFpbmVySWR9YCkuc2VsZWN0QWxsKFwiKlwiKS5yZW1vdmUoKTtcblx0dmFyIHBvdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuZGF0YS5jb250YWluZXJJZH1gKTtcbiAgICBwb3Quc3R5bGUud2lkdGggPSB0aGlzLmRhdGEuY29udGFpbmVyV2lkdGgrJ3B4JztcbiAgICBwb3Quc3R5bGUuaGVpZ2h0ID0gdGhpcy5kYXRhLmNvbnRhaW5lckhlaWdodCsncHgnO1xuXG4gICAgdGhpcy5idWJibGVDaGFydCA9IGQzX3NlbGVjdGlvbi5zZWxlY3QoYCMke3RoaXMuZGF0YS5jb250YWluZXJJZH1gKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgdGhpcy5kYXRhLmNvbnRhaW5lcldpZHRoKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCB0aGlzLmRhdGEuY29udGFpbmVySGVpZ2h0KTtcblxuICAgIHRoaXMuYnViYmxlcyA9IHRoaXMuZGF0YS5idWJibGVzRGF0YTtcblxuICAgIHRoaXMuaW5pdEJ1YmJsZXMoKTtcblxuICAgIGlmKHRoaXMuZGF0YS5pc0ZvcmNlU2ltdWxhdGlvbkVuYWJsZWQpXG4gICAgICB0aGlzLnNldEJ1YmJsZUNoYXJ0U2ltdWxhdGlvbigpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcblxuICAgIGlmKHRoaXMuYnViYmxlQ2hhcnQpe1xuICAgICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbChgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfSBnIGNpcmNsZSwgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfSBnIHRleHRgKS5vbignY2xpY2snLCAoZCkgPT4ge1xuICAgICAgICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICAgICAgICB0aGlzLmVtaXQoJ2NsaWNrJyx7c291cmNlOlwiYnViYmxlXCIsIGJ1YmJsZVBheWxvYWQ6IGQucGF5bG9hZCwgYnViYmxlOiBkfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0QWxsKCdjaXJjbGVbYi10eXBlPVwieF9pbm5lcl9jaXJjbGVcIl0sIHRleHRbYi10eXBlPVwieF9pbm5lcl9sYWJlbFwiXScpLm9uKCdjbGljaycsIChkKSA9PiB7XG4gICAgICAgICAgICAgIGlmKGQuaGFzQ2xvc2VJY29uKXtcbiAgICAgICAgICAgICAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdjbGljaycse3NvdXJjZTpcImNsb3NlXCIsIGJ1YmJsZVBheWxvYWQ6IGQucGF5bG9hZCwgYnViYmxlOiBkfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdjbGljaycse3NvdXJjZTpcImJ1YmJsZVwiLCBidWJibGVQYXlsb2FkOiBkLnBheWxvYWQsIGJ1YmJsZTogZH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0QWxsKGAjJHt0aGlzLmRhdGEuY29udGFpbmVySWR9IGdgKS5vbignbW91c2VlbnRlcicsIChkKSA9PiB7XG4gICAgICAgICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgICAgICAgIHRoaXMuZW1pdCgnbW91c2VfZW50ZXInLHtidWJibGVQYXlsb2FkOiBkLnBheWxvYWQsIGJ1YmJsZTogZH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbChgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfSBnYCkub24oJ21vdXNlbGVhdmUnLCAoZCkgPT4ge1xuICAgICAgICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICAgICAgICB0aGlzLmVtaXQoJ21vdXNlX2xlYXZlJyx7YnViYmxlUGF5bG9hZDogZC5wYXlsb2FkLCBidWJibGU6IGR9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYodGhpcy5kYXRhLnNldEJ1YmJsZUNoYXJ0KVxuICAgICAgdGhpcy5kYXRhLnNldEJ1YmJsZUNoYXJ0KHRoaXMuYnViYmxlQ2hhcnQpO1xuICB9XG5cbiAgLyoqIFZpc3VhbGx5IHVwZGF0ZXMgdGhlIGJ1YmJsZSBjaGFydCAqL1xuICBwdWJsaWMgdXBkYXRlKCkge1xuICAgIGlmKCF0aGlzLmRhdGEpIHJldHVybjtcblxuICAgIGlmKHRoaXMuZ2VuZXJpY0J1YmJsZSAmJiB0aGlzLmdlbmVyaWNCdWJibGUuYXR0cil7XG4gICAgICB0aGlzLmdlbmVyaWNCdWJibGUuYXR0cignY3gnLCAoZCkgPT4geyByZXR1cm4gZC54ID0gTWF0aC5tYXgoZC5yYWRpdXMsIE1hdGgubWluKHRoaXMuZGF0YS5jb250YWluZXJXaWR0aCAtIGQucmFkaXVzLCBkLngpKTsgfSlcbiAgICAgICAgLmF0dHIoJ2N5JywgKGQpID0+IHsgcmV0dXJuIGQueSA9IE1hdGgubWF4KGQucmFkaXVzLCBNYXRoLm1pbih0aGlzLmRhdGEuY29udGFpbmVySGVpZ2h0IC0gZC5yYWRpdXMsIGQueSkpOyB9KTtcbiAgICB9XG5cbiAgICBpZih0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmJ1YmJsZXNEYXRhKVxuICAgICAgdGhpcy5kYXRhLmJ1YmJsZXNEYXRhLmZvckVhY2goIChjKSA9PiB7XG4gICAgICAgICAgYy50ZXh0cy5mb3JFYWNoKCB0eCA9PiB7XG4gICAgICAgICAgICAgIHZhciB0eHQgPSB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdChgdGV4dFtpZD0ke3R4LmlkfV1gKTtcbiAgICAgICAgICAgICAgdHh0LmF0dHIoXCJkeVwiLCB0eC55X2Z1bmN0aW9uICk7XG4gICAgICAgICAgICAgIHR4dC5hdHRyKFwiZHhcIiwgdHgueF9mdW5jdGlvbiApO1xuICAgICAgICAgIH0pXG4gICAgICB9KTtcblxuICAgIGlmKHRoaXMuYnViYmxlQ2hhcnQpe1xuICAgICAgdGhpcy5idWJibGVDaGFydC5zZWxlY3RBbGwoJ2NpcmNsZVtiLXR5cGU9XCJ4X2lubmVyX2NpcmNsZVwiXScpXG4gICAgICAuYXR0cihcImN5XCIsIChkKSA9PiBkLnkrKGQucmFkaXVzLzIpIClcbiAgICAgIC5hdHRyKFwiY3hcIiwgKGQpID0+IGQueCApXG4gICAgICAuYXR0cihcIm9wYWNpdHlcIiwgKGQpID0+ICggZC5oYXNDbG9zZUljb24gPyAxIDogMCApICk7XG4gICAgfVxuXG4gICAgaWYodGhpcy5idWJibGVDaGFydCl7XG4gICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbCgndGV4dFtiLXR5cGU9XCJ4X2lubmVyX2xhYmVsXCJdJylcbiAgICAgIC5hdHRyKFwiZHlcIiwgKGQpID0+IGQueSsoZC5yYWRpdXMvMikrNiApXG4gICAgICAuYXR0cihcImR4XCIsIChkKSA9PiBkLnggKVxuICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIChkKSA9PiAoIGQuaGFzQ2xvc2VJY29uID8gMSA6IDAgKSApO1xuICAgIH1cblxuICB9XG5cbiAgLyoqIEluaXRpYWxpemVkIHRoZSBjaGFydCdzIGJ1YmJsZXMgKi9cbiAgcHJpdmF0ZSBpbml0QnViYmxlcygpOiB2b2lkIHtcblxuICAgIGlmKHRoaXMuYnViYmxlQ2hhcnQpXG4gICAgICB0aGlzLmdlbmVyaWNCdWJibGUgPSB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbChgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfSBnYClcbiAgICAgICAgLmRhdGEodGhpcy5idWJibGVzKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoXCJpZFwiLChkKT0+ZC5pZClcbiAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgLmF0dHIoJ3InLCAoZCkgPT4gTWF0aC5tYXgoMCwgZC5yYWRpdXMgLSA1LjA1KSApXG4gICAgICAgIC5hdHRyKFwiY3hcIiwgKGQpPT5kLngpXG4gICAgICAgIC5hdHRyKFwiY3lcIiwgKGQpPT5kLnkpXG4gICAgICAgIC5hdHRyKCdwYWRkaW5nJywgKGQpID0+IDUwIClcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLChkKT0+ZC5jbGFzc2VzIClcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKGQpID0+IGQuY29sb3IgKTtcblxuICAgIGlmKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuYnViYmxlc0RhdGEgJiYgdGhpcy5idWJibGVDaGFydClcbiAgICAgIHRoaXMuZGF0YS5idWJibGVzRGF0YS5mb3JFYWNoKCAoYykgPT4ge1xuICAgICAgICBsZXQgZ3JvdXAgPSB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdChgZ1tpZD0ke2MuaWR9XWApO1xuICAgICAgICBjLnRleHRzLmZvckVhY2goIHR4ID0+IHtcbiAgICAgICAgICBncm91cC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAuYXR0cihcImR4XCIsIHR4LnhfZnVuY3Rpb24gKVxuICAgICAgICAgIC5hdHRyKFwiZHlcIiwgdHgueV9mdW5jdGlvbiApXG4gICAgICAgICAgLnRleHQodHgubGFiZWwpXG4gICAgICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgdHguZm9udFNpemVfZnVuY3Rpb24pXG4gICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIHR4LmNvbG9yKVxuICAgICAgICAgIC5hdHRyKFwiaWRcIix0eC5pZClcbiAgICAgICAgICAuYXR0cihcImNsYXNzXCIsdHguY2xhc3Nlcyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYodGhpcy5idWJibGVDaGFydClcbiAgICAgIHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0QWxsKGAjJHt0aGlzLmRhdGEuY29udGFpbmVySWR9IGdgKVxuICAgICAgICAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAuYXR0ciggJ3InLCAoZCkgPT4gMTAgKVxuICAgICAgICAuYXR0ciggJ3BhZGRpbmcnLCAoZCkgPT4gNTAgKVxuICAgICAgICAuc3R5bGUoICdmaWxsJywgXCJ3aGl0ZVwiIClcbiAgICAgICAgLmF0dHIoICdjeCcsIChkKSA9PiBkLnggKVxuICAgICAgICAuYXR0ciggJ2N5JywgKGQpID0+IGQueSApXG4gICAgICAgIC5hdHRyKCBcImItdHlwZVwiLFwieF9pbm5lcl9jaXJjbGVcIilcbiAgICAgICAgLmF0dHIoIFwiY2xhc3NcIixcImNpcmNsZV94LWlubmVyLWNpcmNsZVwiKTtcblxuICAgIGlmKHRoaXMuYnViYmxlQ2hhcnQpXG4gICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbChgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfSBnYClcbiAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLnN0eWxlKFwidXNlci1zZWxlY3RcIixcIm5vbmVcIilcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsXCJibGFja1wiKVxuICAgICAgICAuaHRtbChcIiYjMTAwMDU7XCIpXG4gICAgICAgIC5hdHRyKFwiZm9udC1mYW1pbHlcIiwgXCJzYW5zLXNlcmlmXCIpXG4gICAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsMTUpXG4gICAgICAgIC5hdHRyKFwiYi10eXBlXCIsXCJ4X2lubmVyX2xhYmVsXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIixcImNpcmNsZV94LWxhYmVsXCIpO1xuICB9XG5cbiAgLyoqIFNldHMgdGhlIGJ1YmJsZSBjaGFydCBmb3JjZSBzaW11bGF0aW9uICovXG4gIHByaXZhdGUgc2V0QnViYmxlQ2hhcnRTaW11bGF0aW9uKCl7XG4gICAgbGV0IHRtcFNpbXVsYXRpb25EYXRhID0gKCB0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmZvcmNlU2ltdWxhdGlvbkRhdGEgPyB0aGlzLmRhdGEuZm9yY2VTaW11bGF0aW9uRGF0YSA6IHt9ICk7XG4gICAgdmFyIHhQdWxsID0gKCB0bXBTaW11bGF0aW9uRGF0YVsneFB1bGwnXSA/IHRtcFNpbXVsYXRpb25EYXRhWyd4UHVsbCddIDogdGhpcy5kYXRhLmNvbnRhaW5lcldpZHRoLzIgKTtcbiAgICB2YXIgeFB1bGxTdHJlbmd0aCA9ICggdG1wU2ltdWxhdGlvbkRhdGFbJ3hQdWxsU3RyZW5ndGgnXSA/IHRtcFNpbXVsYXRpb25EYXRhWyd4UHVsbFN0cmVuZ3RoJ10gOiAtMC4wMSApO1xuICAgIHZhciB5UHVsbCA9ICggdG1wU2ltdWxhdGlvbkRhdGFbJ3lQdWxsJ10gPyB0bXBTaW11bGF0aW9uRGF0YVsneVB1bGwnXSA6IHRoaXMuZGF0YS5jb250YWluZXJIZWlnaHQvMiApO1xuICAgIHZhciB5UHVsbFN0cmVuZ3RoID0gKCB0bXBTaW11bGF0aW9uRGF0YVsneVB1bGxTdHJlbmd0aCddID8gdG1wU2ltdWxhdGlvbkRhdGFbJ3lQdWxsU3RyZW5ndGgnXSA6IC0wLjAxICk7XG4gICAgdmFyIGNvbGxpc2lvblN0cmVuZ3RoID0gKCB0bXBTaW11bGF0aW9uRGF0YVsnY29sbGlzaW9uU3RyZW5naCddID8gdG1wU2ltdWxhdGlvbkRhdGFbJ2NvbGxpc2lvblN0cmVuZ2gnXSA6IDAuOTkgKTtcbiAgICB2YXIgY29sbGlzaW9uSXRlcmF0aW9ucyA9ICggdG1wU2ltdWxhdGlvbkRhdGFbJ2NvbGxpc2lvbkl0ZXJhdGlvbnMnXSA/IHRtcFNpbXVsYXRpb25EYXRhWydjb2xsaXNpb25JdGVyYXRpb25zJ10gOiAxICk7XG4gICAgdmFyIHZlbG9jaXR5RGVjYXkgPSAoIHRtcFNpbXVsYXRpb25EYXRhWyd2ZWxvY2l0eURlY2F5J10gPyB0bXBTaW11bGF0aW9uRGF0YVsndmVsb2NpdHlEZWNheSddIDogMC45OSApO1xuICAgIC8vIHZhciBzaW11bGF0aW9uID0gXG4gICAgZDNfZm9yY2UuZm9yY2VTaW11bGF0aW9uKClcbiAgICAgIC52ZWxvY2l0eURlY2F5KHZlbG9jaXR5RGVjYXkpXG4gICAgICAuZm9yY2UoXCJ4XCIsIGQzX2ZvcmNlLmZvcmNlWCh4UHVsbCkuc3RyZW5ndGgoeFB1bGxTdHJlbmd0aCkpXG4gICAgICAuZm9yY2UoXCJ5XCIsIGQzX2ZvcmNlLmZvcmNlWSh5UHVsbCkuc3RyZW5ndGgoeVB1bGxTdHJlbmd0aCkpXG4gICAgICAuZm9yY2UoXCJjb2xsaWRlXCIsIGQzX2ZvcmNlLmZvcmNlQ29sbGlkZSgpLnJhZGl1cygoZCk9PmQucmFkaXVzKS5zdHJlbmd0aChjb2xsaXNpb25TdHJlbmd0aCkuaXRlcmF0aW9ucyhjb2xsaXNpb25JdGVyYXRpb25zKSlcbiAgICAgIC5ub2Rlcyh0aGlzLmJ1YmJsZXMpXG4gICAgICAub24oJ3RpY2snLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKVxuICAgIC8vICAgLnN0b3AoKVxuXG4gICAgLy8gZm9yICh2YXIgaSA9IDA7IGkgPCAzMDA7IGkrKykge1xuICAgIC8vICAgc2ltdWxhdGlvbi50aWNrKClcbiAgICAvLyB9XG4gIH1cbn1cbiJdfQ==