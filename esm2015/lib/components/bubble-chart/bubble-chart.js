/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * \@property setBubbleChart (optional)
 * \@property setUpdateReference (optional)
 * \@property isForceSimulationEnabled (required)
 * \@property classes (optional)
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
     * callback for saving the created bubble-chart instance
     * @type {?|undefined}
     */
    IBubbleChartData.prototype.setBubbleChart;
    /**
     * callback for saving the reset function needed for visually resetting the chart
     * @type {?|undefined}
     */
    IBubbleChartData.prototype.setResetReference;
    /**
     * callback for saving the update function needed for visually updating the chart
     * @type {?|undefined}
     */
    IBubbleChartData.prototype.setUpdateReference;
    /**
     * additional css classes
     * @type {?|undefined}
     */
    IBubbleChartData.prototype.classes;
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
     * whether the bubble has a close button
     * (considered false if not provided)
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
        console.log('ngAfterContentChecked', { data: this.data, loaded: this._loaded });
        if (!this.data || this._loaded)
            return;
        this._loaded = true;
        if (this.data.setResetReference)
            this.data.setResetReference(this.makeBubbleChart);
        if (this.data.setUpdateReference)
            this.data.setUpdateReference(this.update);
        setTimeout((/**
         * @return {?}
         */
        () => this.makeBubbleChart(this.data)));
    }
    /**
     * Makes the whole bubble chart
     * @param {?} data
     * @return {?}
     */
    makeBubbleChart(data) {
        this.data = data;
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
        if (this.data.setBubbleChart)
            this.data.setBubbleChart(this.bubbleChart);
        if (this.bubbleChart)
            this.bubbleChart.selectAll(`#${this.data.containerId} g circle, #${this.data.containerId} g text`).on('click', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => {
                if (!this.emit)
                    return;
                this.emit('click', { source: "bubble", bubblePayload: d.payload });
            }));
        if (this.bubbleChart)
            this.bubbleChart.selectAll('circle[bubblesType="x_inner_circle"], text[bubblesType="x_inner_label"]').on('click', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => {
                if (!this.emit)
                    return;
                if (d.hasCloseIcon)
                    this.emit('click', { source: "close", bubblePyload: d.payload });
                else
                    this.emit('click', { source: "bubble", bubblePyload: d.payload });
            }));
    }
    /**
     * Visually updates the bubble chart
     * @return {?}
     */
    update() {
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
                    var txt = this.bubbleChart.select(`text[bubblesElId=${tx.id}]`);
                    txt.attr("dy", tx.y_function);
                    txt.attr("dx", tx.x_function);
                }));
            }));
        if (this.bubbleChart) {
            this.bubbleChart.selectAll('circle[bubblesType="x_inner_circle"]')
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
            this.bubbleChart.selectAll('text[bubblesType="x_inner_label"]')
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
                .attr("bubblesElId", (/**
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
                let group = this.bubbleChart.select(`g[bubblesElId=${c.id}]`);
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
                        .attr("bubblesElId", tx.id)
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
                .attr("bubblesType", "x_inner_circle")
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
                .attr("bubblesType", "x_inner_label")
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQvYnViYmxlLWNoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxLQUFLLFlBQVksTUFBTSxjQUFjLENBQUM7OztBQUc3QyxPQUFPLEtBQUssUUFBUSxNQUFNLFVBQVUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFvQnJDLHNDQTBDQzs7Ozs7O0lBdENDLHVDQUFvQjs7Ozs7SUFJcEIsMENBQXVCOzs7OztJQUl2QiwyQ0FBd0I7Ozs7O0lBSXhCLHVDQUEyQjs7Ozs7O0lBSzNCLG9EQUFrQzs7Ozs7SUFJbEMsK0NBQXNEOzs7OztJQUl0RCwwQ0FBb0I7Ozs7O0lBSXBCLDZDQUF3Qjs7Ozs7SUFJeEIsOENBQXlCOzs7OztJQUl6QixtQ0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQm5CLHFEQThCQzs7Ozs7O0lBMUJDLGdEQUFlOzs7OztJQUlmLHdEQUF1Qjs7Ozs7SUFJdkIsZ0RBQWU7Ozs7O0lBSWYsd0RBQXVCOzs7OztJQUl2QiwyREFBMEI7Ozs7OztJQUsxQiw4REFBNkI7Ozs7O0lBSTdCLHdEQUF1Qjs7Ozs7Ozs7Ozs7Ozs7O0FBaUJ6QixpQ0FnQ0M7Ozs7OztJQTVCQyx5QkFBVzs7Ozs7SUFJWCw0QkFBYzs7Ozs7O0lBS2QsaUNBQWdCOzs7Ozs7SUFLaEIsaUNBQWdCOzs7Ozs7SUFLaEIsd0NBQXVCOzs7OztJQUl2Qiw0QkFBYzs7Ozs7SUFJZCw4QkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJuQixpQ0FzQ0M7Ozs7OztJQWxDQyx5QkFBVzs7Ozs7SUFJWCx3QkFBVzs7Ozs7SUFJWCx3QkFBVzs7Ozs7SUFJWCw2QkFBZTs7Ozs7SUFJZiw0QkFBYzs7Ozs7O0lB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O2FBQzNILEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ25CLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7WUFyTEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLDBJQUFrQzthQUNuQzs7O21CQUVFLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLG9DQUFnQzs7SUFDaEMsb0NBQW1COzs7OztJQUNuQix1Q0FBaUM7Ozs7O0lBZ0JqQyx1Q0FBdUI7Ozs7O0lBQ3ZCLDZDQUE2Qjs7Ozs7SUFDN0IsMkNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEJVQkJMRUNIQVJULnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlckNvbnRlbnRDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBkM19zZWxlY3Rpb24gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuLy8gaW1wb3J0IG9ubHkgZm9yIGF1dG8tYWxsb2NhdGluZyB0aGUgYnViYmxlcyAobmVlZHMgaGVhdnkgcmVmYWN0b3JpbmcgdG8gd29yaylcbi8vaW1wb3J0ICogYXMgZDNfaGllcmFyY2h5IGZyb20gXCJkMy1oaWVyYXJjaHlcIjtcbmltcG9ydCAqIGFzIGQzX2ZvcmNlIGZyb20gXCJkMy1mb3JjZVwiO1xuXG5cblxuXG5cblxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgQnViYmxlQ2hhcnRDb21wb25lbnQncyBcImRhdGFcIlxuICogXG4gKiBAcHJvcGVydHkgY29udGFpbmVySWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNvbnRhaW5lcldpZHRoIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJIZWlnaHQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGJ1YmJsZXNEYXRhIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBzZXRCdWJibGVDaGFydCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgc2V0VXBkYXRlUmVmZXJlbmNlIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpc0ZvcmNlU2ltdWxhdGlvbkVuYWJsZWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUJ1YmJsZUNoYXJ0RGF0YSB7XG4gIC8qKlxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGJ1YmJsZS1jaGFydFxuICAgKi9cbiAgY29udGFpbmVySWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIHRvdGFsIHdpZHRoIGZvciB0aGUgYnViYmxlLWNoYXJ0XG4gICAqL1xuICBjb250YWluZXJXaWR0aDogbnVtYmVyO1xuICAvKipcbiAgICogdG90YWwgaGVpZ2h0IGZvciB0aGUgYnViYmxlLWNoYXJ0XG4gICAqL1xuICBjb250YWluZXJIZWlnaHQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIGRhdGEgYWJvdXQgdGhlIGJ1YmJsZXNcbiAgICovXG4gIGJ1YmJsZXNEYXRhOiBJQnViYmxlRGF0YVtdO1xuICAvKipcbiAgICogd2hldGhlciB0aGUgZm9yY2Ugc2ltdWxhdGlvbiBzaG91bGQgYmUgZW5hYmxlZCBvciBub3RcbiAgICogKGRvIHRoZSBidWJibGVzJyBwb3NpdGlvbnMgXCJhZGFwdFwiIHRvIHRoZSBjb250YWluZXIgb3Igbm90PylcbiAgICovXG4gIGlzRm9yY2VTaW11bGF0aW9uRW5hYmxlZDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIG9wdGlvbnMgZm9yIHRoZSBmb3JjZSBzaW11bGF0aW9uIChpZ25vcmVkIGlmIGlzRm9yY2VTaW11bGF0aW9uRW5hYmxlZCBpcyBmYWxzZSlcbiAgICovXG4gIGZvcmNlU2ltdWxhdGlvbkRhdGE/OiBJQnViYmxlQ2hhcnRGb3JjZVNpbXVsYXRpb25EYXRhO1xuICAvKipcbiAgICogY2FsbGJhY2sgZm9yIHNhdmluZyB0aGUgY3JlYXRlZCBidWJibGUtY2hhcnQgaW5zdGFuY2VcbiAgICovXG4gIHNldEJ1YmJsZUNoYXJ0Pzphbnk7XG4gICAgLyoqXG4gICAqIGNhbGxiYWNrIGZvciBzYXZpbmcgdGhlIHJlc2V0IGZ1bmN0aW9uIG5lZWRlZCBmb3IgdmlzdWFsbHkgcmVzZXR0aW5nIHRoZSBjaGFydFxuICAgKi9cbiAgc2V0UmVzZXRSZWZlcmVuY2U/OiBhbnk7XG4gIC8qKlxuICAgKiBjYWxsYmFjayBmb3Igc2F2aW5nIHRoZSB1cGRhdGUgZnVuY3Rpb24gbmVlZGVkIGZvciB2aXN1YWxseSB1cGRhdGluZyB0aGUgY2hhcnRcbiAgICovXG4gIHNldFVwZGF0ZVJlZmVyZW5jZT86IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgY3NzIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG59XG5cblxuXG5cblxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgQnViYmxlQ2hhcnRDb21wb25lbnQncyBzaW11bGF0aW9uIFwiZGF0YVwiXG4gKiAoYWxsIHRoZSBwcm9wZXJ0aWVzIGFyZSBvcHRpb25hbHMgYW5kIGlmIG5vdCBwcm92aWRlZFxuICogYSBkZWZhdWx0IHZhbHVlIGlzIHVzZWQgaW5zdGVhZClcbiAqIFxuICogQHByb3BlcnR5IHhQdWxsIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB4UHVsbFN0cmVuZ3RoIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB5UHVsbCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgeVB1bGxTdHJlbmd0aCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY29sbGlzaW9uU3RyZW5naCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY29sbGlzaW9uSXRlcmF0aW9ucyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdmVsb2NpdHlEZWNheSAob3B0aW9uYWwpXG4qL1xuZXhwb3J0IGludGVyZmFjZSBJQnViYmxlQ2hhcnRGb3JjZVNpbXVsYXRpb25EYXRhIHtcbiAgLyoqXG4gICAqIHgtY29vcmRpbmF0ZSB0byB3aGljaCB0aGUgYnViYmxlcyBhcmUgcHVsbGVkIHRvXG4gICAqL1xuICB4UHVsbD86IG51bWJlcjtcbiAgLyoqXG4gICAqIHN0cmVuZ3RoIGZvciB0aGUgcHVsbCB0b3dhcmQgdGhlIHhQdWxsIHgtY29vcmRpbmF0ZVxuICAgKi9cbiAgeFB1bGxTdHJlbmd0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIHktY29vcmRpbmF0ZSB0byB3aGljaCB0aGUgYnViYmxlcyBhcmUgcHVsbGVkIHRvXG4gICAqL1xuICB5UHVsbD86IG51bWJlcjtcbiAgLyoqXG4gICAqIHN0cmVuZ3RoIGZvciB0aGUgcHVsbCB0b3dhcmQgdGhlIHlQdWxsIHktY29vcmRpbmF0ZVxuICAgKi9cbiAgeVB1bGxTdHJlbmd0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIHN0cmVuZ3RoIG9mIGJ1YmJsZSdzIGNvbGxpc2lvblxuICAgKi9cbiAgY29sbGlzaW9uU3RyZW5naD86IG51bWJlcjtcbiAgLyoqXG4gICAqIG51bWJlciBvZiBpdGVyYXRpb25zIGluIHRoZSBidWJibGUncyBjb2xsaXNpb24gZGV0ZWN0aW9uXG4gICAqICh0aGUgaGlnaGVyIHRoZSBudW1iZXIgdGhlIG1vcmUgcHJlY2lzZSBhbmQgY29zdGx5IHRoZSBkZXRlY3Rpb24pXG4gICAqL1xuICBjb2xsaXNpb25JdGVyYXRpb25zPzogbnVtYmVyO1xuICAvKipcbiAgICogaW5kaWNhdG9yIG9uIGhvdyBmYXN0IHRoZSBidWJibGUncyB2ZWxvY2l0eSBkZWNyZWFzZXNcbiAgICovXG4gIHZlbG9jaXR5RGVjYXk/OiBudW1iZXI7XG59XG5cblxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgYSBidWJibGUncyB0ZXh0XG4gKlxuICogQHByb3BlcnR5IGlkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBsYWJlbCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgeF9mdW5jdGlvbiAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgeV9mdW5jdGlvbiAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgZm9udFNpemVfZnVuY3Rpb24gKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNvbG9yIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqXG4qL1xuZXhwb3J0IGludGVyZmFjZSBJQnViYmxlVGV4dCB7XG4gIC8qKlxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIHRleHRcbiAgICovXG4gIGlkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aGUgYWN0dWFsIHRleHRcbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBmdW5jdGlvbiB1c2VkIHRvIHNwZWNpZnkgdGhlIHggcG9zaXRpb24gdGhlIHRleHRcbiAgICogKGNhbiBkZXBlbmQgb24gdGhlIGJ1YmJsZSdzIHgtcG9zaXRpb24sIHJhZGl1cywgZXRjLi4uKVxuICAgKi9cbiAgeF9mdW5jdGlvbjogYW55O1xuICAvKipcbiAgICogZnVuY3Rpb24gdXNlZCB0byBzcGVjaWZ5IHRoZSB5IHBvc2l0aW9uIHRoZSB0ZXh0XG4gICAqIChjYW4gZGVwZW5kIG9uIHRoZSBidWJibGUncyB5LXBvc2l0aW9uLCByYWRpdXMsIGV0Yy4uLilcbiAgICovXG4gIHlfZnVuY3Rpb246IGFueTtcbiAgLyoqXG4gICAqIGZ1bmN0aW9uIHVzZWQgdG8gc3BlY2lmeSB0aGUgZm9udCBzaXplIG9mIHRoZSB0ZXh0XG4gICAqIChjYW4gZGVwZW5kIG9uIHRoZSBidWJibGUncyByYWRpdXMsIHJldHVybiBhIGNvbnN0YW50IG51bWJlciwgZXRjLi4uKVxuICAgKi9cbiAgZm9udFNpemVfZnVuY3Rpb246IGFueTtcbiAgLyoqXG4gICAqIGNvbG9yIG9mIHRoZSB0ZXh0XG4gICAqL1xuICBjb2xvcjogc3RyaW5nO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBjc3MgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbn1cblxuXG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBhIHNpbmdsZSBidWJibGVcbiAqXG4gKiBAcHJvcGVydHkgaWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHggKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHkgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHJhZGl1cyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY29sb3IgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGhhc0Nsb3NlSWNvbiAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdGV4dHMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICpcbiovXG5leHBvcnQgaW50ZXJmYWNlIElCdWJibGVEYXRhIHtcbiAgLyoqXG4gICAqIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgYnViYmxlXG4gICAqL1xuICBpZDogc3RyaW5nO1xuICAvKipcbiAgICogdGhlIGJ1YmJsZSdzIChzdGFydGluZykgeC1jb29yZGluYXRlXG4gICAqL1xuICB4PzogbnVtYmVyO1xuICAvKipcbiAgICogdGhlIGJ1YmJsZSdzIChzdGFydGluZykgeS1jb29yZGluYXRlXG4gICAqL1xuICB5PzogbnVtYmVyO1xuICAvKipcbiAgICogdGhlIGJ1YmJsZXMgcmFkaXVzXG4gICAqL1xuICByYWRpdXM6IG51bWJlcjtcbiAgLyoqXG4gICAqIHRoZSBidWJibGUncyBjb2xvclxuICAgKi9cbiAgY29sb3I6IHN0cmluZztcbiAgLyoqXG4gICAqIHdoZXRoZXIgdGhlIGJ1YmJsZSBoYXMgYSBjbG9zZSBidXR0b25cbiAgICogKGNvbnNpZGVyZWQgZmFsc2UgaWYgbm90IHByb3ZpZGVkKVxuICAgKi9cbiAgaGFzQ2xvc2VJY29uPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgICovXG4gIHBheWxvYWQ/OiBhbnk7XG4gIC8qKlxuICAgKiBhbGwgdGhlIGJ1YmJsZSdzIHRleHRzXG4gICAqL1xuICB0ZXh0cz86IElCdWJibGVUZXh0W107XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGNzcyBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1idWJibGUtY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYnViYmxlLWNoYXJ0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEJ1YmJsZUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG4gIEBJbnB1dCgpIGRhdGE6IElCdWJibGVDaGFydERhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcbiAgcHJpdmF0ZSBfbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCl7XG4gICAgY29uc29sZS5sb2coJ25nQWZ0ZXJDb250ZW50Q2hlY2tlZCcse2RhdGE6dGhpcy5kYXRhICwgbG9hZGVkOnRoaXMuX2xvYWRlZCB9KTtcbiAgICBpZighdGhpcy5kYXRhIHx8IHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xuICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XG5cbiAgICBpZih0aGlzLmRhdGEuc2V0UmVzZXRSZWZlcmVuY2UpXG4gICAgICB0aGlzLmRhdGEuc2V0UmVzZXRSZWZlcmVuY2UodGhpcy5tYWtlQnViYmxlQ2hhcnQpO1xuXG4gICAgaWYodGhpcy5kYXRhLnNldFVwZGF0ZVJlZmVyZW5jZSlcbiAgICAgIHRoaXMuZGF0YS5zZXRVcGRhdGVSZWZlcmVuY2UodGhpcy51cGRhdGUpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm1ha2VCdWJibGVDaGFydCh0aGlzLmRhdGEpKTtcbn1cblxuICBwcml2YXRlIGJ1YmJsZXMgPSBudWxsO1xuICBwcml2YXRlIGdlbmVyaWNCdWJibGUgPSBudWxsO1xuICBwcml2YXRlIGJ1YmJsZUNoYXJ0ID0gbnVsbDtcblxuICAvKiogTWFrZXMgdGhlIHdob2xlIGJ1YmJsZSBjaGFydCAqL1xuICBwdWJsaWMgbWFrZUJ1YmJsZUNoYXJ0KGRhdGEpe1xuICAgIHRoaXMuZGF0YT1kYXRhO1xuICAgIGQzX3NlbGVjdGlvbi5zZWxlY3QoYCMke3RoaXMuZGF0YS5jb250YWluZXJJZH1gKS5zZWxlY3RBbGwoXCIqXCIpLnJlbW92ZSgpO1xuXHR2YXIgcG90ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfWApO1xuICAgIHBvdC5zdHlsZS53aWR0aCA9IHRoaXMuZGF0YS5jb250YWluZXJXaWR0aCsncHgnO1xuICAgIHBvdC5zdHlsZS5oZWlnaHQgPSB0aGlzLmRhdGEuY29udGFpbmVySGVpZ2h0KydweCc7XG5cbiAgICB0aGlzLmJ1YmJsZUNoYXJ0ID0gZDNfc2VsZWN0aW9uLnNlbGVjdChgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfWApXG4gICAgICAgICAgICAgICAgLmFwcGVuZCgnc3ZnJylcbiAgICAgICAgICAgICAgICAuYXR0cignd2lkdGgnLCB0aGlzLmRhdGEuY29udGFpbmVyV2lkdGgpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMuZGF0YS5jb250YWluZXJIZWlnaHQpO1xuXG4gICAgdGhpcy5idWJibGVzID0gdGhpcy5kYXRhLmJ1YmJsZXNEYXRhO1xuXG4gICAgdGhpcy5pbml0QnViYmxlcygpO1xuXG4gICAgaWYodGhpcy5kYXRhLmlzRm9yY2VTaW11bGF0aW9uRW5hYmxlZClcbiAgICAgIHRoaXMuc2V0QnViYmxlQ2hhcnRTaW11bGF0aW9uKCk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgaWYodGhpcy5kYXRhLnNldEJ1YmJsZUNoYXJ0KVxuICAgICAgdGhpcy5kYXRhLnNldEJ1YmJsZUNoYXJ0KHRoaXMuYnViYmxlQ2hhcnQpO1xuXG4gICAgaWYodGhpcy5idWJibGVDaGFydClcbiAgICAgIHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0QWxsKGAjJHt0aGlzLmRhdGEuY29udGFpbmVySWR9IGcgY2lyY2xlLCAjJHt0aGlzLmRhdGEuY29udGFpbmVySWR9IGcgdGV4dGApLm9uKCdjbGljaycsIChkKSA9PiB7XG4gICAgICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICAgICAgdGhpcy5lbWl0KCdjbGljaycse3NvdXJjZTpcImJ1YmJsZVwiLGJ1YmJsZVBheWxvYWQ6IGQucGF5bG9hZH0pO1xuICAgIH0pO1xuXG4gICAgaWYodGhpcy5idWJibGVDaGFydClcbiAgICAgIHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0QWxsKCdjaXJjbGVbYnViYmxlc1R5cGU9XCJ4X2lubmVyX2NpcmNsZVwiXSwgdGV4dFtidWJibGVzVHlwZT1cInhfaW5uZXJfbGFiZWxcIl0nKS5vbignY2xpY2snLCAoZCkgPT4ge1xuICAgICAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG4gICAgICAgIGlmKGQuaGFzQ2xvc2VJY29uKVxuICAgICAgICAgIHRoaXMuZW1pdCgnY2xpY2snLHtzb3VyY2U6XCJjbG9zZVwiLGJ1YmJsZVB5bG9hZDogZC5wYXlsb2FkfSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICB0aGlzLmVtaXQoJ2NsaWNrJyx7c291cmNlOlwiYnViYmxlXCIsYnViYmxlUHlsb2FkOiBkLnBheWxvYWR9KTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgLyoqIFZpc3VhbGx5IHVwZGF0ZXMgdGhlIGJ1YmJsZSBjaGFydCAqL1xuICBwdWJsaWMgdXBkYXRlKCkge1xuXG4gICAgaWYodGhpcy5nZW5lcmljQnViYmxlICYmIHRoaXMuZ2VuZXJpY0J1YmJsZS5hdHRyKXtcbiAgICAgIHRoaXMuZ2VuZXJpY0J1YmJsZS5hdHRyKCdjeCcsIChkKSA9PiB7IHJldHVybiBkLnggPSBNYXRoLm1heChkLnJhZGl1cywgTWF0aC5taW4odGhpcy5kYXRhLmNvbnRhaW5lcldpZHRoIC0gZC5yYWRpdXMsIGQueCkpOyB9KVxuICAgICAgICAuYXR0cignY3knLCAoZCkgPT4geyByZXR1cm4gZC55ID0gTWF0aC5tYXgoZC5yYWRpdXMsIE1hdGgubWluKHRoaXMuZGF0YS5jb250YWluZXJIZWlnaHQgLSBkLnJhZGl1cywgZC55KSk7IH0pO1xuICAgIH1cblxuICAgIGlmKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuYnViYmxlc0RhdGEpXG4gICAgICB0aGlzLmRhdGEuYnViYmxlc0RhdGEuZm9yRWFjaCggKGMpID0+IHtcbiAgICAgICAgICBjLnRleHRzLmZvckVhY2goIHR4ID0+IHtcbiAgICAgICAgICAgICAgdmFyIHR4dCA9IHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0KGB0ZXh0W2J1YmJsZXNFbElkPSR7dHguaWR9XWApO1xuICAgICAgICAgICAgICB0eHQuYXR0cihcImR5XCIsIHR4LnlfZnVuY3Rpb24gKTtcbiAgICAgICAgICAgICAgdHh0LmF0dHIoXCJkeFwiLCB0eC54X2Z1bmN0aW9uICk7XG4gICAgICAgICAgfSlcbiAgICAgIH0pO1xuXG4gICAgaWYodGhpcy5idWJibGVDaGFydCl7XG4gICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbCgnY2lyY2xlW2J1YmJsZXNUeXBlPVwieF9pbm5lcl9jaXJjbGVcIl0nKVxuICAgICAgLmF0dHIoXCJjeVwiLCAoZCkgPT4gZC55KyhkLnJhZGl1cy8yKSApXG4gICAgICAuYXR0cihcImN4XCIsIChkKSA9PiBkLnggKVxuICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIChkKSA9PiAoIGQuaGFzQ2xvc2VJY29uID8gMSA6IDAgKSApO1xuICAgIH1cblxuICAgIGlmKHRoaXMuYnViYmxlQ2hhcnQpe1xuICAgICAgdGhpcy5idWJibGVDaGFydC5zZWxlY3RBbGwoJ3RleHRbYnViYmxlc1R5cGU9XCJ4X2lubmVyX2xhYmVsXCJdJylcbiAgICAgIC5hdHRyKFwiZHlcIiwgKGQpID0+IGQueSsoZC5yYWRpdXMvMikrNiApXG4gICAgICAuYXR0cihcImR4XCIsIChkKSA9PiBkLnggKVxuICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIChkKSA9PiAoIGQuaGFzQ2xvc2VJY29uID8gMSA6IDAgKSApO1xuICAgIH1cblxuICB9XG5cblxuXG4gIC8qKiBJbml0aWFsaXplZCB0aGUgY2hhcnQncyBidWJibGVzICovXG4gIHByaXZhdGUgaW5pdEJ1YmJsZXMoKTogdm9pZCB7XG5cbiAgICBpZih0aGlzLmJ1YmJsZUNoYXJ0KVxuICAgICAgdGhpcy5nZW5lcmljQnViYmxlID0gdGhpcy5idWJibGVDaGFydC5zZWxlY3RBbGwoYCMke3RoaXMuZGF0YS5jb250YWluZXJJZH0gZ2ApXG4gICAgICAgIC5kYXRhKHRoaXMuYnViYmxlcylcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKFwiYnViYmxlc0VsSWRcIiwoZCk9PmQuaWQpXG4gICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgIC5hdHRyKCdyJywgKGQpID0+IE1hdGgubWF4KDAsIGQucmFkaXVzIC0gNS4wNSkgKVxuICAgICAgICAuYXR0cihcImN4XCIsIChkKT0+ZC54KVxuICAgICAgICAuYXR0cihcImN5XCIsIChkKT0+ZC55KVxuICAgICAgICAuYXR0cigncGFkZGluZycsIChkKSA9PiA1MCApXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwoZCk9PmQuY2xhc3NlcyApXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIChkKSA9PiBkLmNvbG9yICk7XG5cbiAgICBpZih0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmJ1YmJsZXNEYXRhICYmIHRoaXMuYnViYmxlQ2hhcnQpXG4gICAgICB0aGlzLmRhdGEuYnViYmxlc0RhdGEuZm9yRWFjaCggKGMpID0+IHtcbiAgICAgICAgbGV0IGdyb3VwID0gdGhpcy5idWJibGVDaGFydC5zZWxlY3QoYGdbYnViYmxlc0VsSWQ9JHtjLmlkfV1gKTtcbiAgICAgICAgYy50ZXh0cy5mb3JFYWNoKCB0eCA9PiB7XG4gICAgICAgICAgZ3JvdXAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgLmF0dHIoXCJkeFwiLCB0eC54X2Z1bmN0aW9uIClcbiAgICAgICAgICAuYXR0cihcImR5XCIsIHR4LnlfZnVuY3Rpb24gKVxuICAgICAgICAgIC50ZXh0KHR4LmxhYmVsKVxuICAgICAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIHR4LmZvbnRTaXplX2Z1bmN0aW9uKVxuICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCB0eC5jb2xvcilcbiAgICAgICAgICAuYXR0cihcImJ1YmJsZXNFbElkXCIsdHguaWQpXG4gICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLHR4LmNsYXNzZXMpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmKHRoaXMuYnViYmxlQ2hhcnQpXG4gICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbChgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfSBnYClcbiAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgLmF0dHIoICdyJywgKGQpID0+IDEwIClcbiAgICAgICAgLmF0dHIoICdwYWRkaW5nJywgKGQpID0+IDUwIClcbiAgICAgICAgLnN0eWxlKCAnZmlsbCcsIFwid2hpdGVcIiApXG4gICAgICAgIC5hdHRyKCAnY3gnLCAoZCkgPT4gZC54IClcbiAgICAgICAgLmF0dHIoICdjeScsIChkKSA9PiBkLnkgKVxuICAgICAgICAuYXR0ciggXCJidWJibGVzVHlwZVwiLFwieF9pbm5lcl9jaXJjbGVcIilcbiAgICAgICAgLmF0dHIoIFwiY2xhc3NcIixcImNpcmNsZV94LWlubmVyLWNpcmNsZVwiKTtcblxuICAgIGlmKHRoaXMuYnViYmxlQ2hhcnQpXG4gICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbChgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfSBnYClcbiAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLnN0eWxlKFwidXNlci1zZWxlY3RcIixcIm5vbmVcIilcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsXCJibGFja1wiKVxuICAgICAgICAuaHRtbChcIiYjMTAwMDU7XCIpXG4gICAgICAgIC5hdHRyKFwiZm9udC1mYW1pbHlcIiwgXCJzYW5zLXNlcmlmXCIpXG4gICAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsMTUpXG4gICAgICAgIC5hdHRyKFwiYnViYmxlc1R5cGVcIixcInhfaW5uZXJfbGFiZWxcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLFwiY2lyY2xlX3gtbGFiZWxcIik7XG5cbiAgfVxuXG5cblxuICAvKiogU2V0cyB0aGUgYnViYmxlIGNoYXJ0IGZvcmNlIHNpbXVsYXRpb24gKi9cbiAgcHJpdmF0ZSBzZXRCdWJibGVDaGFydFNpbXVsYXRpb24oKXtcbiAgICBsZXQgdG1wU2ltdWxhdGlvbkRhdGEgPSAoIHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuZm9yY2VTaW11bGF0aW9uRGF0YSA/IHRoaXMuZGF0YS5mb3JjZVNpbXVsYXRpb25EYXRhIDoge30gKTtcbiAgICB2YXIgeFB1bGwgPSAoIHRtcFNpbXVsYXRpb25EYXRhWyd4UHVsbCddID8gdG1wU2ltdWxhdGlvbkRhdGFbJ3hQdWxsJ10gOiB0aGlzLmRhdGEuY29udGFpbmVyV2lkdGgvMiApO1xuICAgIHZhciB4UHVsbFN0cmVuZ3RoID0gKCB0bXBTaW11bGF0aW9uRGF0YVsneFB1bGxTdHJlbmd0aCddID8gdG1wU2ltdWxhdGlvbkRhdGFbJ3hQdWxsU3RyZW5ndGgnXSA6IC0wLjAxICk7XG4gICAgdmFyIHlQdWxsID0gKCB0bXBTaW11bGF0aW9uRGF0YVsneVB1bGwnXSA/IHRtcFNpbXVsYXRpb25EYXRhWyd5UHVsbCddIDogdGhpcy5kYXRhLmNvbnRhaW5lckhlaWdodC8yICk7XG4gICAgdmFyIHlQdWxsU3RyZW5ndGggPSAoIHRtcFNpbXVsYXRpb25EYXRhWyd5UHVsbFN0cmVuZ3RoJ10gPyB0bXBTaW11bGF0aW9uRGF0YVsneVB1bGxTdHJlbmd0aCddIDogLTAuMDEgKTtcbiAgICB2YXIgY29sbGlzaW9uU3RyZW5ndGggPSAoIHRtcFNpbXVsYXRpb25EYXRhWydjb2xsaXNpb25TdHJlbmdoJ10gPyB0bXBTaW11bGF0aW9uRGF0YVsnY29sbGlzaW9uU3RyZW5naCddIDogMC45OSApO1xuICAgIHZhciBjb2xsaXNpb25JdGVyYXRpb25zID0gKCB0bXBTaW11bGF0aW9uRGF0YVsnY29sbGlzaW9uSXRlcmF0aW9ucyddID8gdG1wU2ltdWxhdGlvbkRhdGFbJ2NvbGxpc2lvbkl0ZXJhdGlvbnMnXSA6IDEgKTtcbiAgICB2YXIgdmVsb2NpdHlEZWNheSA9ICggdG1wU2ltdWxhdGlvbkRhdGFbJ3ZlbG9jaXR5RGVjYXknXSA/IHRtcFNpbXVsYXRpb25EYXRhWyd2ZWxvY2l0eURlY2F5J10gOiAwLjk5ICk7XG4gICAgZDNfZm9yY2UuZm9yY2VTaW11bGF0aW9uKClcbiAgICAgIC52ZWxvY2l0eURlY2F5KHZlbG9jaXR5RGVjYXkpXG4gICAgICAuZm9yY2UoXCJ4XCIsIGQzX2ZvcmNlLmZvcmNlWCh4UHVsbCkuc3RyZW5ndGgoeFB1bGxTdHJlbmd0aCkpXG4gICAgICAuZm9yY2UoXCJ5XCIsIGQzX2ZvcmNlLmZvcmNlWSh5UHVsbCkuc3RyZW5ndGgoeVB1bGxTdHJlbmd0aCkpXG4gICAgICAuZm9yY2UoXCJjb2xsaWRlXCIsIGQzX2ZvcmNlLmZvcmNlQ29sbGlkZSgpLnJhZGl1cygoZCk9PmQucmFkaXVzKS5zdHJlbmd0aChjb2xsaXNpb25TdHJlbmd0aCkuaXRlcmF0aW9ucyhjb2xsaXNpb25JdGVyYXRpb25zKSlcbiAgICAgIC5ub2Rlcyh0aGlzLmJ1YmJsZXMpXG4gICAgICAub24oJ3RpY2snLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG5cblxufVxuIl19