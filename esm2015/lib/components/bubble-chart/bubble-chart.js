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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQvYnViYmxlLWNoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxLQUFLLFlBQVksTUFBTSxjQUFjLENBQUM7OztBQUc3QyxPQUFPLEtBQUssUUFBUSxNQUFNLFVBQVUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFvQnJDLHNDQTBDQzs7Ozs7O0lBdENDLHVDQUFvQjs7Ozs7SUFJcEIsMENBQXVCOzs7OztJQUl2QiwyQ0FBd0I7Ozs7O0lBSXhCLHVDQUEyQjs7Ozs7O0lBSzNCLG9EQUFrQzs7Ozs7SUFJbEMsK0NBQXNEOzs7OztJQUl0RCwwQ0FBb0I7Ozs7O0lBSXBCLDZDQUF3Qjs7Ozs7SUFJeEIsOENBQXlCOzs7OztJQUl6QixtQ0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQm5CLHFEQThCQzs7Ozs7O0lBMUJDLGdEQUFlOzs7OztJQUlmLHdEQUF1Qjs7Ozs7SUFJdkIsZ0RBQWU7Ozs7O0lBSWYsd0RBQXVCOzs7OztJQUl2QiwyREFBMEI7Ozs7OztJQUsxQiw4REFBNkI7Ozs7O0lBSTdCLHdEQUF1Qjs7Ozs7Ozs7Ozs7Ozs7O0FBaUJ6QixpQ0FnQ0M7Ozs7OztJQTVCQyx5QkFBVzs7Ozs7SUFJWCw0QkFBYzs7Ozs7O0lBS2QsaUNBQWdCOzs7Ozs7SUFLaEIsaUNBQWdCOzs7Ozs7SUFLaEIsd0NBQXVCOzs7OztJQUl2Qiw0QkFBYzs7Ozs7SUFJZCw4QkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJuQixpQ0FzQ0M7Ozs7OztJQWxDQyx5QkFBVzs7Ozs7SUFJWCx3QkFBVzs7Ozs7SUFJWCx3QkFBVzs7Ozs7SUFJWCw2QkFBZTs7Ozs7SUFJZiw0QkFBYzs7Ozs7O0lB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QUN4QyxDQUFDOzs7WUFwTEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLDBJQUFrQzthQUNuQzs7O21CQUVFLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLG9DQUFnQzs7SUFDaEMsb0NBQW1COzs7OztJQUNuQix1Q0FBaUM7Ozs7O0lBZWpDLHVDQUF1Qjs7Ozs7SUFDdkIsNkNBQTZCOzs7OztJQUM3QiwyQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQlVCQkxFQ0hBUlQudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGQzX3NlbGVjdGlvbiBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG4vLyBpbXBvcnQgb25seSBmb3IgYXV0by1hbGxvY2F0aW5nIHRoZSBidWJibGVzIChuZWVkcyBoZWF2eSByZWZhY3RvcmluZyB0byB3b3JrKVxuLy9pbXBvcnQgKiBhcyBkM19oaWVyYXJjaHkgZnJvbSBcImQzLWhpZXJhcmNoeVwiO1xuaW1wb3J0ICogYXMgZDNfZm9yY2UgZnJvbSBcImQzLWZvcmNlXCI7XG5cblxuXG5cblxuXG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBCdWJibGVDaGFydENvbXBvbmVudCdzIFwiZGF0YVwiXG4gKiBcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJJZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY29udGFpbmVyV2lkdGggKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNvbnRhaW5lckhlaWdodCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgYnViYmxlc0RhdGEgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHNldEJ1YmJsZUNoYXJ0IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBzZXRVcGRhdGVSZWZlcmVuY2UgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGlzRm9yY2VTaW11bGF0aW9uRW5hYmxlZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4qL1xuZXhwb3J0IGludGVyZmFjZSBJQnViYmxlQ2hhcnREYXRhIHtcbiAgLyoqXG4gICAqIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgYnViYmxlLWNoYXJ0XG4gICAqL1xuICBjb250YWluZXJJZDogc3RyaW5nO1xuICAvKipcbiAgICogdG90YWwgd2lkdGggZm9yIHRoZSBidWJibGUtY2hhcnRcbiAgICovXG4gIGNvbnRhaW5lcldpZHRoOiBudW1iZXI7XG4gIC8qKlxuICAgKiB0b3RhbCBoZWlnaHQgZm9yIHRoZSBidWJibGUtY2hhcnRcbiAgICovXG4gIGNvbnRhaW5lckhlaWdodDogbnVtYmVyO1xuICAvKipcbiAgICogZGF0YSBhYm91dCB0aGUgYnViYmxlc1xuICAgKi9cbiAgYnViYmxlc0RhdGE6IElCdWJibGVEYXRhW107XG4gIC8qKlxuICAgKiB3aGV0aGVyIHRoZSBmb3JjZSBzaW11bGF0aW9uIHNob3VsZCBiZSBlbmFibGVkIG9yIG5vdFxuICAgKiAoZG8gdGhlIGJ1YmJsZXMnIHBvc2l0aW9ucyBcImFkYXB0XCIgdG8gdGhlIGNvbnRhaW5lciBvciBub3Q/KVxuICAgKi9cbiAgaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkOiBib29sZWFuO1xuICAvKipcbiAgICogb3B0aW9ucyBmb3IgdGhlIGZvcmNlIHNpbXVsYXRpb24gKGlnbm9yZWQgaWYgaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkIGlzIGZhbHNlKVxuICAgKi9cbiAgZm9yY2VTaW11bGF0aW9uRGF0YT86IElCdWJibGVDaGFydEZvcmNlU2ltdWxhdGlvbkRhdGE7XG4gIC8qKlxuICAgKiBjYWxsYmFjayBmb3Igc2F2aW5nIHRoZSBjcmVhdGVkIGJ1YmJsZS1jaGFydCBpbnN0YW5jZVxuICAgKi9cbiAgc2V0QnViYmxlQ2hhcnQ/OmFueTtcbiAgICAvKipcbiAgICogY2FsbGJhY2sgZm9yIHNhdmluZyB0aGUgcmVzZXQgZnVuY3Rpb24gbmVlZGVkIGZvciB2aXN1YWxseSByZXNldHRpbmcgdGhlIGNoYXJ0XG4gICAqL1xuICBzZXRSZXNldFJlZmVyZW5jZT86IGFueTtcbiAgLyoqXG4gICAqIGNhbGxiYWNrIGZvciBzYXZpbmcgdGhlIHVwZGF0ZSBmdW5jdGlvbiBuZWVkZWQgZm9yIHZpc3VhbGx5IHVwZGF0aW5nIHRoZSBjaGFydFxuICAgKi9cbiAgc2V0VXBkYXRlUmVmZXJlbmNlPzogYW55O1xuICAvKipcbiAgICogYWRkaXRpb25hbCBjc3MgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbn1cblxuXG5cblxuXG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBCdWJibGVDaGFydENvbXBvbmVudCdzIHNpbXVsYXRpb24gXCJkYXRhXCJcbiAqIChhbGwgdGhlIHByb3BlcnRpZXMgYXJlIG9wdGlvbmFscyBhbmQgaWYgbm90IHByb3ZpZGVkXG4gKiBhIGRlZmF1bHQgdmFsdWUgaXMgdXNlZCBpbnN0ZWFkKVxuICogXG4gKiBAcHJvcGVydHkgeFB1bGwgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHhQdWxsU3RyZW5ndGggKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHlQdWxsIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB5UHVsbFN0cmVuZ3RoIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjb2xsaXNpb25TdHJlbmdoIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjb2xsaXNpb25JdGVyYXRpb25zIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB2ZWxvY2l0eURlY2F5IChvcHRpb25hbClcbiovXG5leHBvcnQgaW50ZXJmYWNlIElCdWJibGVDaGFydEZvcmNlU2ltdWxhdGlvbkRhdGEge1xuICAvKipcbiAgICogeC1jb29yZGluYXRlIHRvIHdoaWNoIHRoZSBidWJibGVzIGFyZSBwdWxsZWQgdG9cbiAgICovXG4gIHhQdWxsPzogbnVtYmVyO1xuICAvKipcbiAgICogc3RyZW5ndGggZm9yIHRoZSBwdWxsIHRvd2FyZCB0aGUgeFB1bGwgeC1jb29yZGluYXRlXG4gICAqL1xuICB4UHVsbFN0cmVuZ3RoPzogbnVtYmVyO1xuICAvKipcbiAgICogeS1jb29yZGluYXRlIHRvIHdoaWNoIHRoZSBidWJibGVzIGFyZSBwdWxsZWQgdG9cbiAgICovXG4gIHlQdWxsPzogbnVtYmVyO1xuICAvKipcbiAgICogc3RyZW5ndGggZm9yIHRoZSBwdWxsIHRvd2FyZCB0aGUgeVB1bGwgeS1jb29yZGluYXRlXG4gICAqL1xuICB5UHVsbFN0cmVuZ3RoPzogbnVtYmVyO1xuICAvKipcbiAgICogc3RyZW5ndGggb2YgYnViYmxlJ3MgY29sbGlzaW9uXG4gICAqL1xuICBjb2xsaXNpb25TdHJlbmdoPzogbnVtYmVyO1xuICAvKipcbiAgICogbnVtYmVyIG9mIGl0ZXJhdGlvbnMgaW4gdGhlIGJ1YmJsZSdzIGNvbGxpc2lvbiBkZXRlY3Rpb25cbiAgICogKHRoZSBoaWdoZXIgdGhlIG51bWJlciB0aGUgbW9yZSBwcmVjaXNlIGFuZCBjb3N0bHkgdGhlIGRldGVjdGlvbilcbiAgICovXG4gIGNvbGxpc2lvbkl0ZXJhdGlvbnM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBpbmRpY2F0b3Igb24gaG93IGZhc3QgdGhlIGJ1YmJsZSdzIHZlbG9jaXR5IGRlY3JlYXNlc1xuICAgKi9cbiAgdmVsb2NpdHlEZWNheT86IG51bWJlcjtcbn1cblxuXG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBhIGJ1YmJsZSdzIHRleHRcbiAqXG4gKiBAcHJvcGVydHkgaWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGxhYmVsIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSB4X2Z1bmN0aW9uIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSB5X2Z1bmN0aW9uIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBmb250U2l6ZV9mdW5jdGlvbiAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY29sb3IgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICpcbiovXG5leHBvcnQgaW50ZXJmYWNlIElCdWJibGVUZXh0IHtcbiAgLyoqXG4gICAqIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgdGV4dFxuICAgKi9cbiAgaWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIHRoZSBhY3R1YWwgdGV4dFxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICAqIGZ1bmN0aW9uIHVzZWQgdG8gc3BlY2lmeSB0aGUgeCBwb3NpdGlvbiB0aGUgdGV4dFxuICAgKiAoY2FuIGRlcGVuZCBvbiB0aGUgYnViYmxlJ3MgeC1wb3NpdGlvbiwgcmFkaXVzLCBldGMuLi4pXG4gICAqL1xuICB4X2Z1bmN0aW9uOiBhbnk7XG4gIC8qKlxuICAgKiBmdW5jdGlvbiB1c2VkIHRvIHNwZWNpZnkgdGhlIHkgcG9zaXRpb24gdGhlIHRleHRcbiAgICogKGNhbiBkZXBlbmQgb24gdGhlIGJ1YmJsZSdzIHktcG9zaXRpb24sIHJhZGl1cywgZXRjLi4uKVxuICAgKi9cbiAgeV9mdW5jdGlvbjogYW55O1xuICAvKipcbiAgICogZnVuY3Rpb24gdXNlZCB0byBzcGVjaWZ5IHRoZSBmb250IHNpemUgb2YgdGhlIHRleHRcbiAgICogKGNhbiBkZXBlbmQgb24gdGhlIGJ1YmJsZSdzIHJhZGl1cywgcmV0dXJuIGEgY29uc3RhbnQgbnVtYmVyLCBldGMuLi4pXG4gICAqL1xuICBmb250U2l6ZV9mdW5jdGlvbjogYW55O1xuICAvKipcbiAgICogY29sb3Igb2YgdGhlIHRleHRcbiAgICovXG4gIGNvbG9yOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGNzcyBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG5cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGEgc2luZ2xlIGJ1YmJsZVxuICpcbiAqIEBwcm9wZXJ0eSBpZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgeCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgeSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcmFkaXVzIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjb2xvciAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgaGFzQ2xvc2VJY29uIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB0ZXh0cyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKlxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUJ1YmJsZURhdGEge1xuICAvKipcbiAgICogdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBidWJibGVcbiAgICovXG4gIGlkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aGUgYnViYmxlJ3MgKHN0YXJ0aW5nKSB4LWNvb3JkaW5hdGVcbiAgICovXG4gIHg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiB0aGUgYnViYmxlJ3MgKHN0YXJ0aW5nKSB5LWNvb3JkaW5hdGVcbiAgICovXG4gIHk/OiBudW1iZXI7XG4gIC8qKlxuICAgKiB0aGUgYnViYmxlcyByYWRpdXNcbiAgICovXG4gIHJhZGl1czogbnVtYmVyO1xuICAvKipcbiAgICogdGhlIGJ1YmJsZSdzIGNvbG9yXG4gICAqL1xuICBjb2xvcjogc3RyaW5nO1xuICAvKipcbiAgICogd2hldGhlciB0aGUgYnViYmxlIGhhcyBhIGNsb3NlIGJ1dHRvblxuICAgKiAoY29uc2lkZXJlZCBmYWxzZSBpZiBub3QgcHJvdmlkZWQpXG4gICAqL1xuICBoYXNDbG9zZUljb24/OiBib29sZWFuO1xuICAvKipcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbiAgLyoqXG4gICAqIGFsbCB0aGUgYnViYmxlJ3MgdGV4dHNcbiAgICovXG4gIHRleHRzPzogSUJ1YmJsZVRleHRbXTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgY3NzIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG59XG5cblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWJ1YmJsZS1jaGFydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9idWJibGUtY2hhcnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQnViYmxlQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcbiAgQElucHV0KCkgZGF0YTogSUJ1YmJsZUNoYXJ0RGF0YTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuICBwcml2YXRlIF9sb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKXtcbiAgICBpZighdGhpcy5kYXRhIHx8IHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xuICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XG5cbiAgICBpZih0aGlzLmRhdGEuc2V0UmVzZXRSZWZlcmVuY2UpXG4gICAgICB0aGlzLmRhdGEuc2V0UmVzZXRSZWZlcmVuY2UodGhpcy5tYWtlQnViYmxlQ2hhcnQpO1xuXG4gICAgaWYodGhpcy5kYXRhLnNldFVwZGF0ZVJlZmVyZW5jZSlcbiAgICAgIHRoaXMuZGF0YS5zZXRVcGRhdGVSZWZlcmVuY2UodGhpcy51cGRhdGUpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm1ha2VCdWJibGVDaGFydCh0aGlzLmRhdGEpKTtcbn1cblxuICBwcml2YXRlIGJ1YmJsZXMgPSBudWxsO1xuICBwcml2YXRlIGdlbmVyaWNCdWJibGUgPSBudWxsO1xuICBwcml2YXRlIGJ1YmJsZUNoYXJ0ID0gbnVsbDtcblxuICAvKiogTWFrZXMgdGhlIHdob2xlIGJ1YmJsZSBjaGFydCAqL1xuICBwdWJsaWMgbWFrZUJ1YmJsZUNoYXJ0KGRhdGEpe1xuICAgIHRoaXMuZGF0YT1kYXRhO1xuICAgIGQzX3NlbGVjdGlvbi5zZWxlY3QoYCMke3RoaXMuZGF0YS5jb250YWluZXJJZH1gKS5zZWxlY3RBbGwoXCIqXCIpLnJlbW92ZSgpO1xuXHQgIHZhciBwb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmRhdGEuY29udGFpbmVySWR9YCk7XG4gICAgcG90LnN0eWxlLndpZHRoID0gdGhpcy5kYXRhLmNvbnRhaW5lcldpZHRoKydweCc7XG4gICAgcG90LnN0eWxlLmhlaWdodCA9IHRoaXMuZGF0YS5jb250YWluZXJIZWlnaHQrJ3B4JztcblxuICAgIHRoaXMuYnViYmxlQ2hhcnQgPSBkM19zZWxlY3Rpb24uc2VsZWN0KGAjJHt0aGlzLmRhdGEuY29udGFpbmVySWR9YClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCdzdmcnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMuZGF0YS5jb250YWluZXJXaWR0aClcbiAgICAgICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgdGhpcy5kYXRhLmNvbnRhaW5lckhlaWdodCk7XG5cbiAgICB0aGlzLmJ1YmJsZXMgPSB0aGlzLmRhdGEuYnViYmxlc0RhdGE7XG5cbiAgICB0aGlzLmluaXRCdWJibGVzKCk7XG5cbiAgICBpZih0aGlzLmRhdGEuaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkKVxuICAgICAgdGhpcy5zZXRCdWJibGVDaGFydFNpbXVsYXRpb24oKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICBpZih0aGlzLmRhdGEuc2V0QnViYmxlQ2hhcnQpXG4gICAgICB0aGlzLmRhdGEuc2V0QnViYmxlQ2hhcnQodGhpcy5idWJibGVDaGFydCk7XG5cbiAgICBpZih0aGlzLmJ1YmJsZUNoYXJ0KVxuICAgICAgdGhpcy5idWJibGVDaGFydC5zZWxlY3RBbGwoYCMke3RoaXMuZGF0YS5jb250YWluZXJJZH0gZyBjaXJjbGUsICMke3RoaXMuZGF0YS5jb250YWluZXJJZH0gZyB0ZXh0YCkub24oJ2NsaWNrJywgKGQpID0+IHtcbiAgICAgICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmVtaXQoJ2NsaWNrJyx7c291cmNlOlwiYnViYmxlXCIsYnViYmxlUGF5bG9hZDogZC5wYXlsb2FkfSk7XG4gICAgfSk7XG5cbiAgICBpZih0aGlzLmJ1YmJsZUNoYXJ0KVxuICAgICAgdGhpcy5idWJibGVDaGFydC5zZWxlY3RBbGwoJ2NpcmNsZVtidWJibGVzVHlwZT1cInhfaW5uZXJfY2lyY2xlXCJdLCB0ZXh0W2J1YmJsZXNUeXBlPVwieF9pbm5lcl9sYWJlbFwiXScpLm9uKCdjbGljaycsIChkKSA9PiB7XG4gICAgICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICAgICAgaWYoZC5oYXNDbG9zZUljb24pXG4gICAgICAgICAgdGhpcy5lbWl0KCdjbGljaycse3NvdXJjZTpcImNsb3NlXCIsYnViYmxlUHlsb2FkOiBkLnBheWxvYWR9KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHRoaXMuZW1pdCgnY2xpY2snLHtzb3VyY2U6XCJidWJibGVcIixidWJibGVQeWxvYWQ6IGQucGF5bG9hZH0pO1xuICAgIH0pO1xuICB9XG5cblxuICAvKiogVmlzdWFsbHkgdXBkYXRlcyB0aGUgYnViYmxlIGNoYXJ0ICovXG4gIHB1YmxpYyB1cGRhdGUoKSB7XG5cbiAgICBpZih0aGlzLmdlbmVyaWNCdWJibGUgJiYgdGhpcy5nZW5lcmljQnViYmxlLmF0dHIpe1xuICAgICAgdGhpcy5nZW5lcmljQnViYmxlLmF0dHIoJ2N4JywgKGQpID0+IHsgcmV0dXJuIGQueCA9IE1hdGgubWF4KGQucmFkaXVzLCBNYXRoLm1pbih0aGlzLmRhdGEuY29udGFpbmVyV2lkdGggLSBkLnJhZGl1cywgZC54KSk7IH0pXG4gICAgICAgIC5hdHRyKCdjeScsIChkKSA9PiB7IHJldHVybiBkLnkgPSBNYXRoLm1heChkLnJhZGl1cywgTWF0aC5taW4odGhpcy5kYXRhLmNvbnRhaW5lckhlaWdodCAtIGQucmFkaXVzLCBkLnkpKTsgfSk7XG4gICAgfVxuXG4gICAgaWYodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5idWJibGVzRGF0YSlcbiAgICAgIHRoaXMuZGF0YS5idWJibGVzRGF0YS5mb3JFYWNoKCAoYykgPT4ge1xuICAgICAgICAgIGMudGV4dHMuZm9yRWFjaCggdHggPT4ge1xuICAgICAgICAgICAgICB2YXIgdHh0ID0gdGhpcy5idWJibGVDaGFydC5zZWxlY3QoYHRleHRbYnViYmxlc0VsSWQ9JHt0eC5pZH1dYCk7XG4gICAgICAgICAgICAgIHR4dC5hdHRyKFwiZHlcIiwgdHgueV9mdW5jdGlvbiApO1xuICAgICAgICAgICAgICB0eHQuYXR0cihcImR4XCIsIHR4LnhfZnVuY3Rpb24gKTtcbiAgICAgICAgICB9KVxuICAgICAgfSk7XG5cbiAgICBpZih0aGlzLmJ1YmJsZUNoYXJ0KXtcbiAgICAgIHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0QWxsKCdjaXJjbGVbYnViYmxlc1R5cGU9XCJ4X2lubmVyX2NpcmNsZVwiXScpXG4gICAgICAuYXR0cihcImN5XCIsIChkKSA9PiBkLnkrKGQucmFkaXVzLzIpIClcbiAgICAgIC5hdHRyKFwiY3hcIiwgKGQpID0+IGQueCApXG4gICAgICAuYXR0cihcIm9wYWNpdHlcIiwgKGQpID0+ICggZC5oYXNDbG9zZUljb24gPyAxIDogMCApICk7XG4gICAgfVxuXG4gICAgaWYodGhpcy5idWJibGVDaGFydCl7XG4gICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbCgndGV4dFtidWJibGVzVHlwZT1cInhfaW5uZXJfbGFiZWxcIl0nKVxuICAgICAgLmF0dHIoXCJkeVwiLCAoZCkgPT4gZC55KyhkLnJhZGl1cy8yKSs2IClcbiAgICAgIC5hdHRyKFwiZHhcIiwgKGQpID0+IGQueCApXG4gICAgICAuYXR0cihcIm9wYWNpdHlcIiwgKGQpID0+ICggZC5oYXNDbG9zZUljb24gPyAxIDogMCApICk7XG4gICAgfVxuXG4gIH1cblxuXG5cbiAgLyoqIEluaXRpYWxpemVkIHRoZSBjaGFydCdzIGJ1YmJsZXMgKi9cbiAgcHJpdmF0ZSBpbml0QnViYmxlcygpOiB2b2lkIHtcblxuICAgIGlmKHRoaXMuYnViYmxlQ2hhcnQpXG4gICAgICB0aGlzLmdlbmVyaWNCdWJibGUgPSB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbChgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfSBnYClcbiAgICAgICAgLmRhdGEodGhpcy5idWJibGVzKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoXCJidWJibGVzRWxJZFwiLChkKT0+ZC5pZClcbiAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgLmF0dHIoJ3InLCAoZCkgPT4gTWF0aC5tYXgoMCwgZC5yYWRpdXMgLSA1LjA1KSApXG4gICAgICAgIC5hdHRyKFwiY3hcIiwgKGQpPT5kLngpXG4gICAgICAgIC5hdHRyKFwiY3lcIiwgKGQpPT5kLnkpXG4gICAgICAgIC5hdHRyKCdwYWRkaW5nJywgKGQpID0+IDUwIClcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLChkKT0+ZC5jbGFzc2VzIClcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKGQpID0+IGQuY29sb3IgKTtcblxuICAgIGlmKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuYnViYmxlc0RhdGEgJiYgdGhpcy5idWJibGVDaGFydClcbiAgICAgIHRoaXMuZGF0YS5idWJibGVzRGF0YS5mb3JFYWNoKCAoYykgPT4ge1xuICAgICAgICBsZXQgZ3JvdXAgPSB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdChgZ1tidWJibGVzRWxJZD0ke2MuaWR9XWApO1xuICAgICAgICBjLnRleHRzLmZvckVhY2goIHR4ID0+IHtcbiAgICAgICAgICBncm91cC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAuYXR0cihcImR4XCIsIHR4LnhfZnVuY3Rpb24gKVxuICAgICAgICAgIC5hdHRyKFwiZHlcIiwgdHgueV9mdW5jdGlvbiApXG4gICAgICAgICAgLnRleHQodHgubGFiZWwpXG4gICAgICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgdHguZm9udFNpemVfZnVuY3Rpb24pXG4gICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIHR4LmNvbG9yKVxuICAgICAgICAgIC5hdHRyKFwiYnViYmxlc0VsSWRcIix0eC5pZClcbiAgICAgICAgICAuYXR0cihcImNsYXNzXCIsdHguY2xhc3Nlcyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYodGhpcy5idWJibGVDaGFydClcbiAgICAgIHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0QWxsKGAjJHt0aGlzLmRhdGEuY29udGFpbmVySWR9IGdgKVxuICAgICAgICAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAuYXR0ciggJ3InLCAoZCkgPT4gMTAgKVxuICAgICAgICAuYXR0ciggJ3BhZGRpbmcnLCAoZCkgPT4gNTAgKVxuICAgICAgICAuc3R5bGUoICdmaWxsJywgXCJ3aGl0ZVwiIClcbiAgICAgICAgLmF0dHIoICdjeCcsIChkKSA9PiBkLnggKVxuICAgICAgICAuYXR0ciggJ2N5JywgKGQpID0+IGQueSApXG4gICAgICAgIC5hdHRyKCBcImJ1YmJsZXNUeXBlXCIsXCJ4X2lubmVyX2NpcmNsZVwiKVxuICAgICAgICAuYXR0ciggXCJjbGFzc1wiLFwiY2lyY2xlX3gtaW5uZXItY2lyY2xlXCIpO1xuXG4gICAgaWYodGhpcy5idWJibGVDaGFydClcbiAgICAgIHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0QWxsKGAjJHt0aGlzLmRhdGEuY29udGFpbmVySWR9IGdgKVxuICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuc3R5bGUoXCJ1c2VyLXNlbGVjdFwiLFwibm9uZVwiKVxuICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAuYXR0cihcImZpbGxcIixcImJsYWNrXCIpXG4gICAgICAgIC5odG1sKFwiJiMxMDAwNTtcIilcbiAgICAgICAgLmF0dHIoXCJmb250LWZhbWlseVwiLCBcInNhbnMtc2VyaWZcIilcbiAgICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwxNSlcbiAgICAgICAgLmF0dHIoXCJidWJibGVzVHlwZVwiLFwieF9pbm5lcl9sYWJlbFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsXCJjaXJjbGVfeC1sYWJlbFwiKTtcblxuICB9XG5cblxuXG4gIC8qKiBTZXRzIHRoZSBidWJibGUgY2hhcnQgZm9yY2Ugc2ltdWxhdGlvbiAqL1xuICBwcml2YXRlIHNldEJ1YmJsZUNoYXJ0U2ltdWxhdGlvbigpe1xuICAgIGxldCB0bXBTaW11bGF0aW9uRGF0YSA9ICggdGhpcy5kYXRhICYmIHRoaXMuZGF0YS5mb3JjZVNpbXVsYXRpb25EYXRhID8gdGhpcy5kYXRhLmZvcmNlU2ltdWxhdGlvbkRhdGEgOiB7fSApO1xuICAgIHZhciB4UHVsbCA9ICggdG1wU2ltdWxhdGlvbkRhdGFbJ3hQdWxsJ10gPyB0bXBTaW11bGF0aW9uRGF0YVsneFB1bGwnXSA6IHRoaXMuZGF0YS5jb250YWluZXJXaWR0aC8yICk7XG4gICAgdmFyIHhQdWxsU3RyZW5ndGggPSAoIHRtcFNpbXVsYXRpb25EYXRhWyd4UHVsbFN0cmVuZ3RoJ10gPyB0bXBTaW11bGF0aW9uRGF0YVsneFB1bGxTdHJlbmd0aCddIDogLTAuMDEgKTtcbiAgICB2YXIgeVB1bGwgPSAoIHRtcFNpbXVsYXRpb25EYXRhWyd5UHVsbCddID8gdG1wU2ltdWxhdGlvbkRhdGFbJ3lQdWxsJ10gOiB0aGlzLmRhdGEuY29udGFpbmVySGVpZ2h0LzIgKTtcbiAgICB2YXIgeVB1bGxTdHJlbmd0aCA9ICggdG1wU2ltdWxhdGlvbkRhdGFbJ3lQdWxsU3RyZW5ndGgnXSA/IHRtcFNpbXVsYXRpb25EYXRhWyd5UHVsbFN0cmVuZ3RoJ10gOiAtMC4wMSApO1xuICAgIHZhciBjb2xsaXNpb25TdHJlbmd0aCA9ICggdG1wU2ltdWxhdGlvbkRhdGFbJ2NvbGxpc2lvblN0cmVuZ2gnXSA/IHRtcFNpbXVsYXRpb25EYXRhWydjb2xsaXNpb25TdHJlbmdoJ10gOiAwLjk5ICk7XG4gICAgdmFyIGNvbGxpc2lvbkl0ZXJhdGlvbnMgPSAoIHRtcFNpbXVsYXRpb25EYXRhWydjb2xsaXNpb25JdGVyYXRpb25zJ10gPyB0bXBTaW11bGF0aW9uRGF0YVsnY29sbGlzaW9uSXRlcmF0aW9ucyddIDogMSApO1xuICAgIHZhciB2ZWxvY2l0eURlY2F5ID0gKCB0bXBTaW11bGF0aW9uRGF0YVsndmVsb2NpdHlEZWNheSddID8gdG1wU2ltdWxhdGlvbkRhdGFbJ3ZlbG9jaXR5RGVjYXknXSA6IDAuOTkgKTtcbiAgICBkM19mb3JjZS5mb3JjZVNpbXVsYXRpb24oKVxuICAgICAgLnZlbG9jaXR5RGVjYXkodmVsb2NpdHlEZWNheSlcbiAgICAgIC5mb3JjZShcInhcIiwgZDNfZm9yY2UuZm9yY2VYKHhQdWxsKS5zdHJlbmd0aCh4UHVsbFN0cmVuZ3RoKSlcbiAgICAgIC5mb3JjZShcInlcIiwgZDNfZm9yY2UuZm9yY2VZKHlQdWxsKS5zdHJlbmd0aCh5UHVsbFN0cmVuZ3RoKSlcbiAgICAgIC5mb3JjZShcImNvbGxpZGVcIiwgZDNfZm9yY2UuZm9yY2VDb2xsaWRlKCkucmFkaXVzKChkKT0+ZC5yYWRpdXMpLnN0cmVuZ3RoKGNvbGxpc2lvblN0cmVuZ3RoKS5pdGVyYXRpb25zKGNvbGxpc2lvbkl0ZXJhdGlvbnMpKVxuICAgICAgLm5vZGVzKHRoaXMuYnViYmxlcylcbiAgICAgIC5vbigndGljaycsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICB9XG5cblxuXG59XG4iXX0=