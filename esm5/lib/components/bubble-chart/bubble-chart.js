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
var BubbleChartComponent = /** @class */ (function () {
    function BubbleChartComponent() {
        this._loaded = false;
        this.bubbles = null;
        this.genericBubble = null;
        this.bubbleChart = null;
    }
    /**
     * @return {?}
     */
    BubbleChartComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.data || this._loaded)
            return;
        this._loaded = true;
        setTimeout((/**
         * @return {?}
         */
        function () { return _this._makeBubbleChart(); }));
    };
    /** Makes the whole bubble chart */
    /**
     * Makes the whole bubble chart
     * @private
     * @return {?}
     */
    BubbleChartComponent.prototype._makeBubbleChart = /**
     * Makes the whole bubble chart
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        d3_selection.select("#" + this.data.containerId).selectAll("*").remove();
        /** @type {?} */
        var pot = document.getElementById("" + this.data.containerId);
        pot.style.width = this.data.containerWidth + 'px';
        pot.style.height = this.data.containerHeight + 'px';
        this.bubbleChart = d3_selection.select("#" + this.data.containerId)
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
            this.bubbleChart.selectAll("#" + this.data.containerId + " g circle, #" + this.data.containerId + " g text").on('click', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                if (!_this.emit)
                    return;
                _this.emit('click', { source: "bubble", bubblePayload: d.payload });
            }));
        if (this.bubbleChart)
            this.bubbleChart.selectAll('circle[bubblesType="x_inner_circle"], text[bubblesType="x_inner_label"]').on('click', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                if (!_this.emit)
                    return;
                _this.emit('click', { source: "close", bubblePyload: d.payload });
            }));
        if (this.data.setUpdateReference)
            this.data.setUpdateReference(this.update);
    };
    /** Visually updates the bubble chart */
    /**
     * Visually updates the bubble chart
     * @return {?}
     */
    BubbleChartComponent.prototype.update = /**
     * Visually updates the bubble chart
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.genericBubble && this.genericBubble.attr) {
            this.genericBubble.attr('cx', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.x = Math.max(d.radius, Math.min(_this.data.containerWidth - d.radius, d.x)); }))
                .attr('cy', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.y = Math.max(d.radius, Math.min(_this.data.containerHeight - d.radius, d.y)); }));
        }
        if (this.data && this.data.bubblesData)
            this.data.bubblesData.forEach((/**
             * @param {?} c
             * @return {?}
             */
            function (c) {
                c.texts.forEach((/**
                 * @param {?} tx
                 * @return {?}
                 */
                function (tx) {
                    /** @type {?} */
                    var txt = _this.bubbleChart.select("text[bubblesElId=" + tx.id + "]");
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
            function (d) { return d.y + (d.radius / 2); }))
                .attr("cx", (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.x; }))
                .attr("opacity", (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return (d.hasCloseIcon ? 1 : 0); }));
        }
        if (this.bubbleChart) {
            this.bubbleChart.selectAll('text[bubblesType="x_inner_label"]')
                .attr("dy", (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.y + (d.radius / 2) + 6; }))
                .attr("dx", (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.x; }))
                .attr("opacity", (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return (d.hasCloseIcon ? 1 : 0); }));
        }
    };
    /** Initialized the chart's bubbles */
    /**
     * Initialized the chart's bubbles
     * @private
     * @return {?}
     */
    BubbleChartComponent.prototype.initBubbles = /**
     * Initialized the chart's bubbles
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.bubbleChart)
            this.genericBubble = this.bubbleChart.selectAll("#" + this.data.containerId + " g")
                .data(this.bubbles)
                .enter()
                .append('g')
                .attr("bubblesElId", (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.id; }))
                .append('circle')
                .attr('r', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return Math.max(0, d.radius - 5.05); }))
                .attr("cx", (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.x; }))
                .attr("cy", (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.y; }))
                .attr('padding', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return 50; }))
                .attr("class", (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.classes; }))
                .style('fill', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.color; }));
        if (this.data && this.data.bubblesData && this.bubbleChart)
            this.data.bubblesData.forEach((/**
             * @param {?} c
             * @return {?}
             */
            function (c) {
                /** @type {?} */
                var group = _this.bubbleChart.select("g[bubblesElId=" + c.id + "]");
                c.texts.forEach((/**
                 * @param {?} tx
                 * @return {?}
                 */
                function (tx) {
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
            this.bubbleChart.selectAll("#" + this.data.containerId + " g")
                .append('circle')
                .attr('r', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return 10; }))
                .attr('padding', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return 50; }))
                .style('fill', "white")
                .attr('cx', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.x; }))
                .attr('cy', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.y; }))
                .attr("bubblesType", "x_inner_circle")
                .attr("class", "circle_x-inner-circle");
        if (this.bubbleChart)
            this.bubbleChart.selectAll("#" + this.data.containerId + " g")
                .append("text")
                .style("user-select", "none")
                .style("text-anchor", "middle")
                .attr("fill", "black")
                .html("&#10005;")
                .attr("font-family", "sans-serif")
                .attr("font-size", 15)
                .attr("bubblesType", "x_inner_label")
                .attr("class", "circle_x-label");
    };
    /** Sets the bubble chart force simulation */
    /**
     * Sets the bubble chart force simulation
     * @private
     * @return {?}
     */
    BubbleChartComponent.prototype.setBubbleChartSimulation = /**
     * Sets the bubble chart force simulation
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var tmpSimulationData = (this.data && this.data.forceSimulationData ? this.data.forceSimulationData : {});
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
        function (d) { return d.radius; })).strength(collisionStrength).iterations(collisionIterations))
            .nodes(this.bubbles)
            .on('tick', this.update.bind(this));
    };
    BubbleChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-bubble-chart',
                    template: "<div *ngIf=\"data\" class=\"n7-bubble-chart {{ data.classes || '' }}\">\r\n    <div id=\"{{ data.containerId }}\"></div>\r\n</div>"
                }] }
    ];
    BubbleChartComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return BubbleChartComponent;
}());
export { BubbleChartComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQvYnViYmxlLWNoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxLQUFLLFlBQVksTUFBTSxjQUFjLENBQUM7OztBQUc3QyxPQUFPLEtBQUssUUFBUSxNQUFNLFVBQVUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFvQnJDLHNDQXNDQzs7Ozs7O0lBbENDLHVDQUFvQjs7Ozs7SUFJcEIsMENBQXVCOzs7OztJQUl2QiwyQ0FBd0I7Ozs7O0lBSXhCLHVDQUEyQjs7Ozs7O0lBSzNCLG9EQUFrQzs7Ozs7SUFJbEMsK0NBQXNEOzs7OztJQUl0RCwwQ0FBb0I7Ozs7O0lBSXBCLDhDQUF5Qjs7Ozs7SUFJekIsbUNBQWlCOzs7Ozs7Ozs7Ozs7Ozs7O0FBcUJuQixxREE4QkM7Ozs7OztJQTFCQyxnREFBZTs7Ozs7SUFJZix3REFBdUI7Ozs7O0lBSXZCLGdEQUFlOzs7OztJQUlmLHdEQUF1Qjs7Ozs7SUFJdkIsMkRBQTBCOzs7Ozs7SUFLMUIsOERBQTZCOzs7OztJQUk3Qix3REFBdUI7Ozs7Ozs7Ozs7Ozs7OztBQWlCekIsaUNBZ0NDOzs7Ozs7SUE1QkMseUJBQVc7Ozs7O0lBSVgsNEJBQWM7Ozs7OztJQUtkLGlDQUFnQjs7Ozs7O0lBS2hCLGlDQUFnQjs7Ozs7O0lBS2hCLHdDQUF1Qjs7Ozs7SUFJdkIsNEJBQWM7Ozs7O0lBSWQsOEJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7OztBQW1CbkIsaUNBc0NDOzs7Ozs7SUFsQ0MseUJBQVc7Ozs7O0lBSVgsd0JBQVc7Ozs7O0lBSVgsd0JBQVc7Ozs7O0lBSVgsNkJBQWU7Ozs7O0lBSWYsNEJBQWM7Ozs7OztJQUtkLG1DQUF1Qjs7Ozs7SUFJ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Q2hDLG9DQUFtQjs7Ozs7SUFDbkIsdUNBQWlDOzs7OztJQVFqQyx1Q0FBdUI7Ozs7O0lBQ3ZCLDZDQUE2Qjs7Ozs7SUFDN0IsMkNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQlVCQkxFQ0hBUlQudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgZDNfc2VsZWN0aW9uIGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcclxuLy8gaW1wb3J0IG9ubHkgZm9yIGF1dG8tYWxsb2NhdGluZyB0aGUgYnViYmxlcyAobmVlZHMgaGVhdnkgcmVmYWN0b3JpbmcgdG8gd29yaylcclxuLy9pbXBvcnQgKiBhcyBkM19oaWVyYXJjaHkgZnJvbSBcImQzLWhpZXJhcmNoeVwiO1xyXG5pbXBvcnQgKiBhcyBkM19mb3JjZSBmcm9tIFwiZDMtZm9yY2VcIjtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEJ1YmJsZUNoYXJ0Q29tcG9uZW50J3MgXCJkYXRhXCJcclxuICogXHJcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJJZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJXaWR0aCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJIZWlnaHQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgYnViYmxlc0RhdGEgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgc2V0QnViYmxlQ2hhcnQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgc2V0VXBkYXRlUmVmZXJlbmNlIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGlzRm9yY2VTaW11bGF0aW9uRW5hYmxlZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQnViYmxlQ2hhcnREYXRhIHtcclxuICAvKipcclxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGJ1YmJsZS1jaGFydFxyXG4gICAqL1xyXG4gIGNvbnRhaW5lcklkOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogdG90YWwgd2lkdGggZm9yIHRoZSBidWJibGUtY2hhcnRcclxuICAgKi9cclxuICBjb250YWluZXJXaWR0aDogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIHRvdGFsIGhlaWdodCBmb3IgdGhlIGJ1YmJsZS1jaGFydFxyXG4gICAqL1xyXG4gIGNvbnRhaW5lckhlaWdodDogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIGRhdGEgYWJvdXQgdGhlIGJ1YmJsZXNcclxuICAgKi9cclxuICBidWJibGVzRGF0YTogSUJ1YmJsZURhdGFbXTtcclxuICAvKipcclxuICAgKiB3aGV0aGVyIHRoZSBmb3JjZSBzaW11bGF0aW9uIHNob3VsZCBiZSBlbmFibGVkIG9yIG5vdFxyXG4gICAqIChkbyB0aGUgYnViYmxlcycgcG9zaXRpb25zIFwiYWRhcHRcIiB0byB0aGUgY29udGFpbmVyIG9yIG5vdD8pXHJcbiAgICovXHJcbiAgaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkOiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIG9wdGlvbnMgZm9yIHRoZSBmb3JjZSBzaW11bGF0aW9uIChpZ25vcmVkIGlmIGlzRm9yY2VTaW11bGF0aW9uRW5hYmxlZCBpcyBmYWxzZSlcclxuICAgKi9cclxuICBmb3JjZVNpbXVsYXRpb25EYXRhPzogSUJ1YmJsZUNoYXJ0Rm9yY2VTaW11bGF0aW9uRGF0YTtcclxuICAvKipcclxuICAgKiBjYWxsYmFjayBmb3Igc2F2aW5nIHRoZSBjcmVhdGVkIGJ1YmJsZS1jaGFydCBpbnN0YW5jZVxyXG4gICAqL1xyXG4gIHNldEJ1YmJsZUNoYXJ0Pzphbnk7XHJcbiAgLyoqXHJcbiAgICogY2FsbGJhY2sgZm9yIHNhdmluZyB0aGUgdXBkYXRlIGZ1bmN0aW9uIG5lZWRlZCBmb3IgdmlzdWFsbHkgdXBkYXRpbmcgdGhlIGNoYXJ0XHJcbiAgICovXHJcbiAgc2V0VXBkYXRlUmVmZXJlbmNlPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgY3NzIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEJ1YmJsZUNoYXJ0Q29tcG9uZW50J3Mgc2ltdWxhdGlvbiBcImRhdGFcIlxyXG4gKiAoYWxsIHRoZSBwcm9wZXJ0aWVzIGFyZSBvcHRpb25hbHMgYW5kIGlmIG5vdCBwcm92aWRlZFxyXG4gKiBhIGRlZmF1bHQgdmFsdWUgaXMgdXNlZCBpbnN0ZWFkKVxyXG4gKiBcclxuICogQHByb3BlcnR5IHhQdWxsIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHhQdWxsU3RyZW5ndGggKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgeVB1bGwgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgeVB1bGxTdHJlbmd0aCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjb2xsaXNpb25TdHJlbmdoIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNvbGxpc2lvbkl0ZXJhdGlvbnMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgdmVsb2NpdHlEZWNheSAob3B0aW9uYWwpXHJcbiovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUJ1YmJsZUNoYXJ0Rm9yY2VTaW11bGF0aW9uRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogeC1jb29yZGluYXRlIHRvIHdoaWNoIHRoZSBidWJibGVzIGFyZSBwdWxsZWQgdG9cclxuICAgKi9cclxuICB4UHVsbD86IG51bWJlcjtcclxuICAvKipcclxuICAgKiBzdHJlbmd0aCBmb3IgdGhlIHB1bGwgdG93YXJkIHRoZSB4UHVsbCB4LWNvb3JkaW5hdGVcclxuICAgKi9cclxuICB4UHVsbFN0cmVuZ3RoPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIHktY29vcmRpbmF0ZSB0byB3aGljaCB0aGUgYnViYmxlcyBhcmUgcHVsbGVkIHRvXHJcbiAgICovXHJcbiAgeVB1bGw/OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogc3RyZW5ndGggZm9yIHRoZSBwdWxsIHRvd2FyZCB0aGUgeVB1bGwgeS1jb29yZGluYXRlXHJcbiAgICovXHJcbiAgeVB1bGxTdHJlbmd0aD86IG51bWJlcjtcclxuICAvKipcclxuICAgKiBzdHJlbmd0aCBvZiBidWJibGUncyBjb2xsaXNpb25cclxuICAgKi9cclxuICBjb2xsaXNpb25TdHJlbmdoPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIG51bWJlciBvZiBpdGVyYXRpb25zIGluIHRoZSBidWJibGUncyBjb2xsaXNpb24gZGV0ZWN0aW9uXHJcbiAgICogKHRoZSBoaWdoZXIgdGhlIG51bWJlciB0aGUgbW9yZSBwcmVjaXNlIGFuZCBjb3N0bHkgdGhlIGRldGVjdGlvbilcclxuICAgKi9cclxuICBjb2xsaXNpb25JdGVyYXRpb25zPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIGluZGljYXRvciBvbiBob3cgZmFzdCB0aGUgYnViYmxlJ3MgdmVsb2NpdHkgZGVjcmVhc2VzXHJcbiAgICovXHJcbiAgdmVsb2NpdHlEZWNheT86IG51bWJlcjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBhIGJ1YmJsZSdzIHRleHRcclxuICpcclxuICogQHByb3BlcnR5IGlkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGxhYmVsIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHhfZnVuY3Rpb24gKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgeV9mdW5jdGlvbiAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBmb250U2l6ZV9mdW5jdGlvbiAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjb2xvciAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICpcclxuKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQnViYmxlVGV4dCB7XHJcbiAgLyoqXHJcbiAgICogdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSB0ZXh0XHJcbiAgICovXHJcbiAgaWQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiB0aGUgYWN0dWFsIHRleHRcclxuICAgKi9cclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGZ1bmN0aW9uIHVzZWQgdG8gc3BlY2lmeSB0aGUgeCBwb3NpdGlvbiB0aGUgdGV4dFxyXG4gICAqIChjYW4gZGVwZW5kIG9uIHRoZSBidWJibGUncyB4LXBvc2l0aW9uLCByYWRpdXMsIGV0Yy4uLilcclxuICAgKi9cclxuICB4X2Z1bmN0aW9uOiBhbnk7XHJcbiAgLyoqXHJcbiAgICogZnVuY3Rpb24gdXNlZCB0byBzcGVjaWZ5IHRoZSB5IHBvc2l0aW9uIHRoZSB0ZXh0XHJcbiAgICogKGNhbiBkZXBlbmQgb24gdGhlIGJ1YmJsZSdzIHktcG9zaXRpb24sIHJhZGl1cywgZXRjLi4uKVxyXG4gICAqL1xyXG4gIHlfZnVuY3Rpb246IGFueTtcclxuICAvKipcclxuICAgKiBmdW5jdGlvbiB1c2VkIHRvIHNwZWNpZnkgdGhlIGZvbnQgc2l6ZSBvZiB0aGUgdGV4dFxyXG4gICAqIChjYW4gZGVwZW5kIG9uIHRoZSBidWJibGUncyByYWRpdXMsIHJldHVybiBhIGNvbnN0YW50IG51bWJlciwgZXRjLi4uKVxyXG4gICAqL1xyXG4gIGZvbnRTaXplX2Z1bmN0aW9uOiBhbnk7XHJcbiAgLyoqXHJcbiAgICogY29sb3Igb2YgdGhlIHRleHRcclxuICAgKi9cclxuICBjb2xvcjogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgY3NzIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGEgc2luZ2xlIGJ1YmJsZVxyXG4gKlxyXG4gKiBAcHJvcGVydHkgaWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgeCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB5IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHJhZGl1cyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjb2xvciAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBoYXNDbG9zZUljb24gKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0cyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICpcclxuKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQnViYmxlRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBidWJibGVcclxuICAgKi9cclxuICBpZDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHRoZSBidWJibGUncyAoc3RhcnRpbmcpIHgtY29vcmRpbmF0ZVxyXG4gICAqL1xyXG4gIHg/OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogdGhlIGJ1YmJsZSdzIChzdGFydGluZykgeS1jb29yZGluYXRlXHJcbiAgICovXHJcbiAgeT86IG51bWJlcjtcclxuICAvKipcclxuICAgKiB0aGUgYnViYmxlcyByYWRpdXNcclxuICAgKi9cclxuICByYWRpdXM6IG51bWJlcjtcclxuICAvKipcclxuICAgKiB0aGUgYnViYmxlJ3MgY29sb3JcclxuICAgKi9cclxuICBjb2xvcjogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHdoZXRoZXIgdGhlIGJ1YmJsZSBoYXMgYSBjbG9zZSBidXR0b25cclxuICAgKiAoY29uc2lkZXJlZCBmYWxzZSBpZiBub3QgcHJvdmlkZWQpXHJcbiAgICovXHJcbiAgaGFzQ2xvc2VJY29uPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXHJcbiAgICovXHJcbiAgcGF5bG9hZD86IGFueTtcclxuICAvKipcclxuICAgKiBhbGwgdGhlIGJ1YmJsZSdzIHRleHRzXHJcbiAgICovXHJcbiAgdGV4dHM/OiBJQnViYmxlVGV4dFtdO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgY3NzIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWJ1YmJsZS1jaGFydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2J1YmJsZS1jaGFydC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQnViYmxlQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcclxuICBASW5wdXQoKSBkYXRhOiBJQnViYmxlQ2hhcnREYXRhO1xyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuICBwcml2YXRlIF9sb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCl7XHJcbiAgICBpZighdGhpcy5kYXRhIHx8IHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xyXG4gICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fbWFrZUJ1YmJsZUNoYXJ0KCkpO1xyXG59XHJcblxyXG4gIHByaXZhdGUgYnViYmxlcyA9IG51bGw7XHJcbiAgcHJpdmF0ZSBnZW5lcmljQnViYmxlID0gbnVsbDtcclxuICBwcml2YXRlIGJ1YmJsZUNoYXJ0ID0gbnVsbDtcclxuXHJcbiAgLyoqIE1ha2VzIHRoZSB3aG9sZSBidWJibGUgY2hhcnQgKi9cclxuICBwcml2YXRlIF9tYWtlQnViYmxlQ2hhcnQoKXtcclxuICAgIGQzX3NlbGVjdGlvbi5zZWxlY3QoYCMke3RoaXMuZGF0YS5jb250YWluZXJJZH1gKS5zZWxlY3RBbGwoXCIqXCIpLnJlbW92ZSgpO1xyXG5cdCAgdmFyIHBvdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuZGF0YS5jb250YWluZXJJZH1gKTtcclxuICAgIHBvdC5zdHlsZS53aWR0aCA9IHRoaXMuZGF0YS5jb250YWluZXJXaWR0aCsncHgnO1xyXG4gICAgcG90LnN0eWxlLmhlaWdodCA9IHRoaXMuZGF0YS5jb250YWluZXJIZWlnaHQrJ3B4JztcclxuXHJcbiAgICB0aGlzLmJ1YmJsZUNoYXJ0ID0gZDNfc2VsZWN0aW9uLnNlbGVjdChgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfWApXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCdzdmcnKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgdGhpcy5kYXRhLmNvbnRhaW5lcldpZHRoKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMuZGF0YS5jb250YWluZXJIZWlnaHQpO1xyXG5cclxuICAgIHRoaXMuYnViYmxlcyA9IHRoaXMuZGF0YS5idWJibGVzRGF0YTtcclxuXHJcbiAgICB0aGlzLmluaXRCdWJibGVzKCk7XHJcblxyXG4gICAgaWYodGhpcy5kYXRhLmlzRm9yY2VTaW11bGF0aW9uRW5hYmxlZClcclxuICAgICAgdGhpcy5zZXRCdWJibGVDaGFydFNpbXVsYXRpb24oKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG5cclxuICAgIGlmKHRoaXMuZGF0YS5zZXRCdWJibGVDaGFydClcclxuICAgICAgdGhpcy5kYXRhLnNldEJ1YmJsZUNoYXJ0KHRoaXMuYnViYmxlQ2hhcnQpO1xyXG5cclxuICAgIGlmKHRoaXMuYnViYmxlQ2hhcnQpXHJcbiAgICAgIHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0QWxsKGAjJHt0aGlzLmRhdGEuY29udGFpbmVySWR9IGcgY2lyY2xlLCAjJHt0aGlzLmRhdGEuY29udGFpbmVySWR9IGcgdGV4dGApLm9uKCdjbGljaycsIChkKSA9PiB7XHJcbiAgICAgICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2xpY2snLHtzb3VyY2U6XCJidWJibGVcIixidWJibGVQYXlsb2FkOiBkLnBheWxvYWR9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmKHRoaXMuYnViYmxlQ2hhcnQpXHJcbiAgICAgIHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0QWxsKCdjaXJjbGVbYnViYmxlc1R5cGU9XCJ4X2lubmVyX2NpcmNsZVwiXSwgdGV4dFtidWJibGVzVHlwZT1cInhfaW5uZXJfbGFiZWxcIl0nKS5vbignY2xpY2snLCAoZCkgPT4ge1xyXG4gICAgICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgICAgICB0aGlzLmVtaXQoJ2NsaWNrJyx7c291cmNlOlwiY2xvc2VcIixidWJibGVQeWxvYWQ6IGQucGF5bG9hZH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYodGhpcy5kYXRhLnNldFVwZGF0ZVJlZmVyZW5jZSlcclxuICAgICAgdGhpcy5kYXRhLnNldFVwZGF0ZVJlZmVyZW5jZSh0aGlzLnVwZGF0ZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqIFZpc3VhbGx5IHVwZGF0ZXMgdGhlIGJ1YmJsZSBjaGFydCAqL1xyXG4gIHB1YmxpYyB1cGRhdGUoKSB7XHJcblxyXG4gICAgaWYodGhpcy5nZW5lcmljQnViYmxlICYmIHRoaXMuZ2VuZXJpY0J1YmJsZS5hdHRyKXtcclxuICAgICAgdGhpcy5nZW5lcmljQnViYmxlLmF0dHIoJ2N4JywgKGQpID0+IHsgcmV0dXJuIGQueCA9IE1hdGgubWF4KGQucmFkaXVzLCBNYXRoLm1pbih0aGlzLmRhdGEuY29udGFpbmVyV2lkdGggLSBkLnJhZGl1cywgZC54KSk7IH0pXHJcbiAgICAgICAgLmF0dHIoJ2N5JywgKGQpID0+IHsgcmV0dXJuIGQueSA9IE1hdGgubWF4KGQucmFkaXVzLCBNYXRoLm1pbih0aGlzLmRhdGEuY29udGFpbmVySGVpZ2h0IC0gZC5yYWRpdXMsIGQueSkpOyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmJ1YmJsZXNEYXRhKVxyXG4gICAgICB0aGlzLmRhdGEuYnViYmxlc0RhdGEuZm9yRWFjaCggKGMpID0+IHtcclxuICAgICAgICAgIGMudGV4dHMuZm9yRWFjaCggdHggPT4ge1xyXG4gICAgICAgICAgICAgIHZhciB0eHQgPSB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdChgdGV4dFtidWJibGVzRWxJZD0ke3R4LmlkfV1gKTtcclxuICAgICAgICAgICAgICB0eHQuYXR0cihcImR5XCIsIHR4LnlfZnVuY3Rpb24gKTtcclxuICAgICAgICAgICAgICB0eHQuYXR0cihcImR4XCIsIHR4LnhfZnVuY3Rpb24gKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGlmKHRoaXMuYnViYmxlQ2hhcnQpe1xyXG4gICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbCgnY2lyY2xlW2J1YmJsZXNUeXBlPVwieF9pbm5lcl9jaXJjbGVcIl0nKVxyXG4gICAgICAuYXR0cihcImN5XCIsIChkKSA9PiBkLnkrKGQucmFkaXVzLzIpIClcclxuICAgICAgLmF0dHIoXCJjeFwiLCAoZCkgPT4gZC54IClcclxuICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIChkKSA9PiAoIGQuaGFzQ2xvc2VJY29uID8gMSA6IDAgKSApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuYnViYmxlQ2hhcnQpe1xyXG4gICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbCgndGV4dFtidWJibGVzVHlwZT1cInhfaW5uZXJfbGFiZWxcIl0nKVxyXG4gICAgICAuYXR0cihcImR5XCIsIChkKSA9PiBkLnkrKGQucmFkaXVzLzIpKzYgKVxyXG4gICAgICAuYXR0cihcImR4XCIsIChkKSA9PiBkLnggKVxyXG4gICAgICAuYXR0cihcIm9wYWNpdHlcIiwgKGQpID0+ICggZC5oYXNDbG9zZUljb24gPyAxIDogMCApICk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuICAvKiogSW5pdGlhbGl6ZWQgdGhlIGNoYXJ0J3MgYnViYmxlcyAqL1xyXG4gIHByaXZhdGUgaW5pdEJ1YmJsZXMoKTogdm9pZCB7XHJcblxyXG4gICAgaWYodGhpcy5idWJibGVDaGFydClcclxuICAgICAgdGhpcy5nZW5lcmljQnViYmxlID0gdGhpcy5idWJibGVDaGFydC5zZWxlY3RBbGwoYCMke3RoaXMuZGF0YS5jb250YWluZXJJZH0gZ2ApXHJcbiAgICAgICAgLmRhdGEodGhpcy5idWJibGVzKVxyXG4gICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgLmFwcGVuZCgnZycpXHJcbiAgICAgICAgLmF0dHIoXCJidWJibGVzRWxJZFwiLChkKT0+ZC5pZClcclxuICAgICAgICAuYXBwZW5kKCdjaXJjbGUnKVxyXG4gICAgICAgIC5hdHRyKCdyJywgKGQpID0+IE1hdGgubWF4KDAsIGQucmFkaXVzIC0gNS4wNSkgKVxyXG4gICAgICAgIC5hdHRyKFwiY3hcIiwgKGQpPT5kLngpXHJcbiAgICAgICAgLmF0dHIoXCJjeVwiLCAoZCk9PmQueSlcclxuICAgICAgICAuYXR0cigncGFkZGluZycsIChkKSA9PiA1MCApXHJcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLChkKT0+ZC5jbGFzc2VzIClcclxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoZCkgPT4gZC5jb2xvciApO1xyXG5cclxuICAgIGlmKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuYnViYmxlc0RhdGEgJiYgdGhpcy5idWJibGVDaGFydClcclxuICAgICAgdGhpcy5kYXRhLmJ1YmJsZXNEYXRhLmZvckVhY2goIChjKSA9PiB7XHJcbiAgICAgICAgbGV0IGdyb3VwID0gdGhpcy5idWJibGVDaGFydC5zZWxlY3QoYGdbYnViYmxlc0VsSWQ9JHtjLmlkfV1gKTtcclxuICAgICAgICBjLnRleHRzLmZvckVhY2goIHR4ID0+IHtcclxuICAgICAgICAgIGdyb3VwLmFwcGVuZChcInRleHRcIilcclxuICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXHJcbiAgICAgICAgICAuYXR0cihcImR4XCIsIHR4LnhfZnVuY3Rpb24gKVxyXG4gICAgICAgICAgLmF0dHIoXCJkeVwiLCB0eC55X2Z1bmN0aW9uIClcclxuICAgICAgICAgIC50ZXh0KHR4LmxhYmVsKVxyXG4gICAgICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgdHguZm9udFNpemVfZnVuY3Rpb24pXHJcbiAgICAgICAgICAuYXR0cihcImZpbGxcIiwgdHguY29sb3IpXHJcbiAgICAgICAgICAuYXR0cihcImJ1YmJsZXNFbElkXCIsdHguaWQpXHJcbiAgICAgICAgICAuYXR0cihcImNsYXNzXCIsdHguY2xhc3Nlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZih0aGlzLmJ1YmJsZUNoYXJ0KVxyXG4gICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbChgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfSBnYClcclxuICAgICAgICAuYXBwZW5kKCdjaXJjbGUnKVxyXG4gICAgICAgIC5hdHRyKCAncicsIChkKSA9PiAxMCApXHJcbiAgICAgICAgLmF0dHIoICdwYWRkaW5nJywgKGQpID0+IDUwIClcclxuICAgICAgICAuc3R5bGUoICdmaWxsJywgXCJ3aGl0ZVwiIClcclxuICAgICAgICAuYXR0ciggJ2N4JywgKGQpID0+IGQueCApXHJcbiAgICAgICAgLmF0dHIoICdjeScsIChkKSA9PiBkLnkgKVxyXG4gICAgICAgIC5hdHRyKCBcImJ1YmJsZXNUeXBlXCIsXCJ4X2lubmVyX2NpcmNsZVwiKVxyXG4gICAgICAgIC5hdHRyKCBcImNsYXNzXCIsXCJjaXJjbGVfeC1pbm5lci1jaXJjbGVcIik7XHJcblxyXG4gICAgaWYodGhpcy5idWJibGVDaGFydClcclxuICAgICAgdGhpcy5idWJibGVDaGFydC5zZWxlY3RBbGwoYCMke3RoaXMuZGF0YS5jb250YWluZXJJZH0gZ2ApXHJcbiAgICAgICAgLmFwcGVuZChcInRleHRcIilcclxuICAgICAgICAuc3R5bGUoXCJ1c2VyLXNlbGVjdFwiLFwibm9uZVwiKVxyXG4gICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXHJcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsXCJibGFja1wiKVxyXG4gICAgICAgIC5odG1sKFwiJiMxMDAwNTtcIilcclxuICAgICAgICAuYXR0cihcImZvbnQtZmFtaWx5XCIsIFwic2Fucy1zZXJpZlwiKVxyXG4gICAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsMTUpXHJcbiAgICAgICAgLmF0dHIoXCJidWJibGVzVHlwZVwiLFwieF9pbm5lcl9sYWJlbFwiKVxyXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIixcImNpcmNsZV94LWxhYmVsXCIpO1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcbiAgLyoqIFNldHMgdGhlIGJ1YmJsZSBjaGFydCBmb3JjZSBzaW11bGF0aW9uICovXHJcbiAgcHJpdmF0ZSBzZXRCdWJibGVDaGFydFNpbXVsYXRpb24oKXtcclxuICAgIGxldCB0bXBTaW11bGF0aW9uRGF0YSA9ICggdGhpcy5kYXRhICYmIHRoaXMuZGF0YS5mb3JjZVNpbXVsYXRpb25EYXRhID8gdGhpcy5kYXRhLmZvcmNlU2ltdWxhdGlvbkRhdGEgOiB7fSApO1xyXG4gICAgdmFyIHhQdWxsID0gKCB0bXBTaW11bGF0aW9uRGF0YVsneFB1bGwnXSA/IHRtcFNpbXVsYXRpb25EYXRhWyd4UHVsbCddIDogdGhpcy5kYXRhLmNvbnRhaW5lcldpZHRoLzIgKTtcclxuICAgIHZhciB4UHVsbFN0cmVuZ3RoID0gKCB0bXBTaW11bGF0aW9uRGF0YVsneFB1bGxTdHJlbmd0aCddID8gdG1wU2ltdWxhdGlvbkRhdGFbJ3hQdWxsU3RyZW5ndGgnXSA6IC0wLjAxICk7XHJcbiAgICB2YXIgeVB1bGwgPSAoIHRtcFNpbXVsYXRpb25EYXRhWyd5UHVsbCddID8gdG1wU2ltdWxhdGlvbkRhdGFbJ3lQdWxsJ10gOiB0aGlzLmRhdGEuY29udGFpbmVySGVpZ2h0LzIgKTtcclxuICAgIHZhciB5UHVsbFN0cmVuZ3RoID0gKCB0bXBTaW11bGF0aW9uRGF0YVsneVB1bGxTdHJlbmd0aCddID8gdG1wU2ltdWxhdGlvbkRhdGFbJ3lQdWxsU3RyZW5ndGgnXSA6IC0wLjAxICk7XHJcbiAgICB2YXIgY29sbGlzaW9uU3RyZW5ndGggPSAoIHRtcFNpbXVsYXRpb25EYXRhWydjb2xsaXNpb25TdHJlbmdoJ10gPyB0bXBTaW11bGF0aW9uRGF0YVsnY29sbGlzaW9uU3RyZW5naCddIDogMC45OSApO1xyXG4gICAgdmFyIGNvbGxpc2lvbkl0ZXJhdGlvbnMgPSAoIHRtcFNpbXVsYXRpb25EYXRhWydjb2xsaXNpb25JdGVyYXRpb25zJ10gPyB0bXBTaW11bGF0aW9uRGF0YVsnY29sbGlzaW9uSXRlcmF0aW9ucyddIDogMSApO1xyXG4gICAgdmFyIHZlbG9jaXR5RGVjYXkgPSAoIHRtcFNpbXVsYXRpb25EYXRhWyd2ZWxvY2l0eURlY2F5J10gPyB0bXBTaW11bGF0aW9uRGF0YVsndmVsb2NpdHlEZWNheSddIDogMC45OSApO1xyXG4gICAgZDNfZm9yY2UuZm9yY2VTaW11bGF0aW9uKClcclxuICAgICAgLnZlbG9jaXR5RGVjYXkodmVsb2NpdHlEZWNheSlcclxuICAgICAgLmZvcmNlKFwieFwiLCBkM19mb3JjZS5mb3JjZVgoeFB1bGwpLnN0cmVuZ3RoKHhQdWxsU3RyZW5ndGgpKVxyXG4gICAgICAuZm9yY2UoXCJ5XCIsIGQzX2ZvcmNlLmZvcmNlWSh5UHVsbCkuc3RyZW5ndGgoeVB1bGxTdHJlbmd0aCkpXHJcbiAgICAgIC5mb3JjZShcImNvbGxpZGVcIiwgZDNfZm9yY2UuZm9yY2VDb2xsaWRlKCkucmFkaXVzKChkKT0+ZC5yYWRpdXMpLnN0cmVuZ3RoKGNvbGxpc2lvblN0cmVuZ3RoKS5pdGVyYXRpb25zKGNvbGxpc2lvbkl0ZXJhdGlvbnMpKVxyXG4gICAgICAubm9kZXModGhpcy5idWJibGVzKVxyXG4gICAgICAub24oJ3RpY2snLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG5cclxuXHJcbn0iXX0=