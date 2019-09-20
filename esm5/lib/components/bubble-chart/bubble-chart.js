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
        if (this.data.setResetReference)
            this.data.setResetReference(this.makeBubbleChart);
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.makeBubbleChart(); }));
    };
    /** Makes the whole bubble chart */
    /**
     * Makes the whole bubble chart
     * @private
     * @return {?}
     */
    BubbleChartComponent.prototype.makeBubbleChart = /**
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
                if (d.hasCloseIcon)
                    _this.emit('click', { source: "close", bubblePyload: d.payload });
                else
                    _this.emit('click', { source: "bubble", bubblePyload: d.payload });
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
                    template: "<div *ngIf=\"data\" class=\"n7-bubble-chart {{ data.classes || '' }}\">\n    <div id=\"{{ data.containerId }}\"></div>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQvYnViYmxlLWNoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxLQUFLLFlBQVksTUFBTSxjQUFjLENBQUM7OztBQUc3QyxPQUFPLEtBQUssUUFBUSxNQUFNLFVBQVUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFvQnJDLHNDQTBDQzs7Ozs7O0lBdENDLHVDQUFvQjs7Ozs7SUFJcEIsMENBQXVCOzs7OztJQUl2QiwyQ0FBd0I7Ozs7O0lBSXhCLHVDQUEyQjs7Ozs7O0lBSzNCLG9EQUFrQzs7Ozs7SUFJbEMsK0NBQXNEOzs7OztJQUl0RCwwQ0FBb0I7Ozs7O0lBSXBCLDZDQUF3Qjs7Ozs7SUFJeEIsOENBQXlCOzs7OztJQUl6QixtQ0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQm5CLHFEQThCQzs7Ozs7O0lBMUJDLGdEQUFlOzs7OztJQUlmLHdEQUF1Qjs7Ozs7SUFJdkIsZ0RBQWU7Ozs7O0lBSWYsd0RBQXVCOzs7OztJQUl2QiwyREFBMEI7Ozs7OztJQUsxQiw4REFBNkI7Ozs7O0lBSTdCLHdEQUF1Qjs7Ozs7Ozs7Ozs7Ozs7O0FBaUJ6QixpQ0FnQ0M7Ozs7OztJQTVCQyx5QkFBVzs7Ozs7SUFJWCw0QkFBYzs7Ozs7O0lBS2QsaUNBQWdCOzs7Ozs7SUFLaEIsaUNBQWdCOzs7Ozs7SUFLaEIsd0NBQXVCOzs7OztJQUl2Qiw0QkFBYzs7Ozs7SUFJZCw4QkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJuQixpQ0FzQ0M7Ozs7OztJQWxDQyx5QkFBVzs7Ozs7SUFJWCx3QkFBVzs7Ozs7SUFJWCx3QkFBVzs7Ozs7SUFJWCw2QkFBZTs7Ozs7SUFJZiw0QkFBYzs7Ozs7O0lB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T0FBTyxDQUFDO2FBQ25CLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDOztnQkFqTEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLDBJQUFrQztpQkFDbkM7Ozt1QkFFRSxLQUFLO3VCQUNMLEtBQUs7O0lBK0tSLDJCQUFDO0NBQUEsQUFyTEQsSUFxTEM7U0FqTFksb0JBQW9COzs7SUFDL0Isb0NBQWdDOztJQUNoQyxvQ0FBbUI7Ozs7O0lBQ25CLHVDQUFpQzs7Ozs7SUFVakMsdUNBQXVCOzs7OztJQUN2Qiw2Q0FBNkI7Ozs7O0lBQzdCLDJDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBCVUJCTEVDSEFSVC50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZDNfc2VsZWN0aW9uIGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbi8vIGltcG9ydCBvbmx5IGZvciBhdXRvLWFsbG9jYXRpbmcgdGhlIGJ1YmJsZXMgKG5lZWRzIGhlYXZ5IHJlZmFjdG9yaW5nIHRvIHdvcmspXG4vL2ltcG9ydCAqIGFzIGQzX2hpZXJhcmNoeSBmcm9tIFwiZDMtaGllcmFyY2h5XCI7XG5pbXBvcnQgKiBhcyBkM19mb3JjZSBmcm9tIFwiZDMtZm9yY2VcIjtcblxuXG5cblxuXG5cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEJ1YmJsZUNoYXJ0Q29tcG9uZW50J3MgXCJkYXRhXCJcbiAqIFxuICogQHByb3BlcnR5IGNvbnRhaW5lcklkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJXaWR0aCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY29udGFpbmVySGVpZ2h0IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBidWJibGVzRGF0YSAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgc2V0QnViYmxlQ2hhcnQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHNldFVwZGF0ZVJlZmVyZW5jZSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiovXG5leHBvcnQgaW50ZXJmYWNlIElCdWJibGVDaGFydERhdGEge1xuICAvKipcbiAgICogdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBidWJibGUtY2hhcnRcbiAgICovXG4gIGNvbnRhaW5lcklkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0b3RhbCB3aWR0aCBmb3IgdGhlIGJ1YmJsZS1jaGFydFxuICAgKi9cbiAgY29udGFpbmVyV2lkdGg6IG51bWJlcjtcbiAgLyoqXG4gICAqIHRvdGFsIGhlaWdodCBmb3IgdGhlIGJ1YmJsZS1jaGFydFxuICAgKi9cbiAgY29udGFpbmVySGVpZ2h0OiBudW1iZXI7XG4gIC8qKlxuICAgKiBkYXRhIGFib3V0IHRoZSBidWJibGVzXG4gICAqL1xuICBidWJibGVzRGF0YTogSUJ1YmJsZURhdGFbXTtcbiAgLyoqXG4gICAqIHdoZXRoZXIgdGhlIGZvcmNlIHNpbXVsYXRpb24gc2hvdWxkIGJlIGVuYWJsZWQgb3Igbm90XG4gICAqIChkbyB0aGUgYnViYmxlcycgcG9zaXRpb25zIFwiYWRhcHRcIiB0byB0aGUgY29udGFpbmVyIG9yIG5vdD8pXG4gICAqL1xuICBpc0ZvcmNlU2ltdWxhdGlvbkVuYWJsZWQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBvcHRpb25zIGZvciB0aGUgZm9yY2Ugc2ltdWxhdGlvbiAoaWdub3JlZCBpZiBpc0ZvcmNlU2ltdWxhdGlvbkVuYWJsZWQgaXMgZmFsc2UpXG4gICAqL1xuICBmb3JjZVNpbXVsYXRpb25EYXRhPzogSUJ1YmJsZUNoYXJ0Rm9yY2VTaW11bGF0aW9uRGF0YTtcbiAgLyoqXG4gICAqIGNhbGxiYWNrIGZvciBzYXZpbmcgdGhlIGNyZWF0ZWQgYnViYmxlLWNoYXJ0IGluc3RhbmNlXG4gICAqL1xuICBzZXRCdWJibGVDaGFydD86YW55O1xuICAgIC8qKlxuICAgKiBjYWxsYmFjayBmb3Igc2F2aW5nIHRoZSByZXNldCBmdW5jdGlvbiBuZWVkZWQgZm9yIHZpc3VhbGx5IHJlc2V0dGluZyB0aGUgY2hhcnRcbiAgICovXG4gIHNldFJlc2V0UmVmZXJlbmNlPzogYW55O1xuICAvKipcbiAgICogY2FsbGJhY2sgZm9yIHNhdmluZyB0aGUgdXBkYXRlIGZ1bmN0aW9uIG5lZWRlZCBmb3IgdmlzdWFsbHkgdXBkYXRpbmcgdGhlIGNoYXJ0XG4gICAqL1xuICBzZXRVcGRhdGVSZWZlcmVuY2U/OiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGNzcyBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG5cblxuXG5cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEJ1YmJsZUNoYXJ0Q29tcG9uZW50J3Mgc2ltdWxhdGlvbiBcImRhdGFcIlxuICogKGFsbCB0aGUgcHJvcGVydGllcyBhcmUgb3B0aW9uYWxzIGFuZCBpZiBub3QgcHJvdmlkZWRcbiAqIGEgZGVmYXVsdCB2YWx1ZSBpcyB1c2VkIGluc3RlYWQpXG4gKiBcbiAqIEBwcm9wZXJ0eSB4UHVsbCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgeFB1bGxTdHJlbmd0aCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgeVB1bGwgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHlQdWxsU3RyZW5ndGggKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNvbGxpc2lvblN0cmVuZ2ggKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNvbGxpc2lvbkl0ZXJhdGlvbnMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHZlbG9jaXR5RGVjYXkgKG9wdGlvbmFsKVxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUJ1YmJsZUNoYXJ0Rm9yY2VTaW11bGF0aW9uRGF0YSB7XG4gIC8qKlxuICAgKiB4LWNvb3JkaW5hdGUgdG8gd2hpY2ggdGhlIGJ1YmJsZXMgYXJlIHB1bGxlZCB0b1xuICAgKi9cbiAgeFB1bGw/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBzdHJlbmd0aCBmb3IgdGhlIHB1bGwgdG93YXJkIHRoZSB4UHVsbCB4LWNvb3JkaW5hdGVcbiAgICovXG4gIHhQdWxsU3RyZW5ndGg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiB5LWNvb3JkaW5hdGUgdG8gd2hpY2ggdGhlIGJ1YmJsZXMgYXJlIHB1bGxlZCB0b1xuICAgKi9cbiAgeVB1bGw/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBzdHJlbmd0aCBmb3IgdGhlIHB1bGwgdG93YXJkIHRoZSB5UHVsbCB5LWNvb3JkaW5hdGVcbiAgICovXG4gIHlQdWxsU3RyZW5ndGg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBzdHJlbmd0aCBvZiBidWJibGUncyBjb2xsaXNpb25cbiAgICovXG4gIGNvbGxpc2lvblN0cmVuZ2g/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBudW1iZXIgb2YgaXRlcmF0aW9ucyBpbiB0aGUgYnViYmxlJ3MgY29sbGlzaW9uIGRldGVjdGlvblxuICAgKiAodGhlIGhpZ2hlciB0aGUgbnVtYmVyIHRoZSBtb3JlIHByZWNpc2UgYW5kIGNvc3RseSB0aGUgZGV0ZWN0aW9uKVxuICAgKi9cbiAgY29sbGlzaW9uSXRlcmF0aW9ucz86IG51bWJlcjtcbiAgLyoqXG4gICAqIGluZGljYXRvciBvbiBob3cgZmFzdCB0aGUgYnViYmxlJ3MgdmVsb2NpdHkgZGVjcmVhc2VzXG4gICAqL1xuICB2ZWxvY2l0eURlY2F5PzogbnVtYmVyO1xufVxuXG5cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGEgYnViYmxlJ3MgdGV4dFxuICpcbiAqIEBwcm9wZXJ0eSBpZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgbGFiZWwgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHhfZnVuY3Rpb24gKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHlfZnVuY3Rpb24gKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGZvbnRTaXplX2Z1bmN0aW9uIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjb2xvciAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKlxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUJ1YmJsZVRleHQge1xuICAvKipcbiAgICogdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSB0ZXh0XG4gICAqL1xuICBpZDogc3RyaW5nO1xuICAvKipcbiAgICogdGhlIGFjdHVhbCB0ZXh0XG4gICAqL1xuICBsYWJlbDogc3RyaW5nO1xuICAvKipcbiAgICogZnVuY3Rpb24gdXNlZCB0byBzcGVjaWZ5IHRoZSB4IHBvc2l0aW9uIHRoZSB0ZXh0XG4gICAqIChjYW4gZGVwZW5kIG9uIHRoZSBidWJibGUncyB4LXBvc2l0aW9uLCByYWRpdXMsIGV0Yy4uLilcbiAgICovXG4gIHhfZnVuY3Rpb246IGFueTtcbiAgLyoqXG4gICAqIGZ1bmN0aW9uIHVzZWQgdG8gc3BlY2lmeSB0aGUgeSBwb3NpdGlvbiB0aGUgdGV4dFxuICAgKiAoY2FuIGRlcGVuZCBvbiB0aGUgYnViYmxlJ3MgeS1wb3NpdGlvbiwgcmFkaXVzLCBldGMuLi4pXG4gICAqL1xuICB5X2Z1bmN0aW9uOiBhbnk7XG4gIC8qKlxuICAgKiBmdW5jdGlvbiB1c2VkIHRvIHNwZWNpZnkgdGhlIGZvbnQgc2l6ZSBvZiB0aGUgdGV4dFxuICAgKiAoY2FuIGRlcGVuZCBvbiB0aGUgYnViYmxlJ3MgcmFkaXVzLCByZXR1cm4gYSBjb25zdGFudCBudW1iZXIsIGV0Yy4uLilcbiAgICovXG4gIGZvbnRTaXplX2Z1bmN0aW9uOiBhbnk7XG4gIC8qKlxuICAgKiBjb2xvciBvZiB0aGUgdGV4dFxuICAgKi9cbiAgY29sb3I6IHN0cmluZztcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgY3NzIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG59XG5cblxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgYnViYmxlXG4gKlxuICogQHByb3BlcnR5IGlkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSB4IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB5IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSByYWRpdXMgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNvbG9yIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBoYXNDbG9zZUljb24gKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHRleHRzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqXG4qL1xuZXhwb3J0IGludGVyZmFjZSBJQnViYmxlRGF0YSB7XG4gIC8qKlxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGJ1YmJsZVxuICAgKi9cbiAgaWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIHRoZSBidWJibGUncyAoc3RhcnRpbmcpIHgtY29vcmRpbmF0ZVxuICAgKi9cbiAgeD86IG51bWJlcjtcbiAgLyoqXG4gICAqIHRoZSBidWJibGUncyAoc3RhcnRpbmcpIHktY29vcmRpbmF0ZVxuICAgKi9cbiAgeT86IG51bWJlcjtcbiAgLyoqXG4gICAqIHRoZSBidWJibGVzIHJhZGl1c1xuICAgKi9cbiAgcmFkaXVzOiBudW1iZXI7XG4gIC8qKlxuICAgKiB0aGUgYnViYmxlJ3MgY29sb3JcbiAgICovXG4gIGNvbG9yOiBzdHJpbmc7XG4gIC8qKlxuICAgKiB3aGV0aGVyIHRoZSBidWJibGUgaGFzIGEgY2xvc2UgYnV0dG9uXG4gICAqIChjb25zaWRlcmVkIGZhbHNlIGlmIG5vdCBwcm92aWRlZClcbiAgICovXG4gIGhhc0Nsb3NlSWNvbj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAqL1xuICBwYXlsb2FkPzogYW55O1xuICAvKipcbiAgICogYWxsIHRoZSBidWJibGUncyB0ZXh0c1xuICAgKi9cbiAgdGV4dHM/OiBJQnViYmxlVGV4dFtdO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBjc3MgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbn1cblxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctYnViYmxlLWNoYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1YmJsZS1jaGFydC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBCdWJibGVDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuICBASW5wdXQoKSBkYXRhOiBJQnViYmxlQ2hhcnREYXRhO1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG4gIHByaXZhdGUgX2xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpe1xuICAgIGlmKCF0aGlzLmRhdGEgfHwgdGhpcy5fbG9hZGVkKSByZXR1cm47XG4gICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcbiAgICBpZih0aGlzLmRhdGEuc2V0UmVzZXRSZWZlcmVuY2UpXG4gICAgICB0aGlzLmRhdGEuc2V0UmVzZXRSZWZlcmVuY2UodGhpcy5tYWtlQnViYmxlQ2hhcnQpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5tYWtlQnViYmxlQ2hhcnQoKSk7XG59XG5cbiAgcHJpdmF0ZSBidWJibGVzID0gbnVsbDtcbiAgcHJpdmF0ZSBnZW5lcmljQnViYmxlID0gbnVsbDtcbiAgcHJpdmF0ZSBidWJibGVDaGFydCA9IG51bGw7XG5cbiAgLyoqIE1ha2VzIHRoZSB3aG9sZSBidWJibGUgY2hhcnQgKi9cbiAgcHJpdmF0ZSBtYWtlQnViYmxlQ2hhcnQoKXtcbiAgICBkM19zZWxlY3Rpb24uc2VsZWN0KGAjJHt0aGlzLmRhdGEuY29udGFpbmVySWR9YCkuc2VsZWN0QWxsKFwiKlwiKS5yZW1vdmUoKTtcblx0ICB2YXIgcG90ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfWApO1xuICAgIHBvdC5zdHlsZS53aWR0aCA9IHRoaXMuZGF0YS5jb250YWluZXJXaWR0aCsncHgnO1xuICAgIHBvdC5zdHlsZS5oZWlnaHQgPSB0aGlzLmRhdGEuY29udGFpbmVySGVpZ2h0KydweCc7XG5cbiAgICB0aGlzLmJ1YmJsZUNoYXJ0ID0gZDNfc2VsZWN0aW9uLnNlbGVjdChgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfWApXG4gICAgICAgICAgICAgICAgLmFwcGVuZCgnc3ZnJylcbiAgICAgICAgICAgICAgICAuYXR0cignd2lkdGgnLCB0aGlzLmRhdGEuY29udGFpbmVyV2lkdGgpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMuZGF0YS5jb250YWluZXJIZWlnaHQpO1xuXG4gICAgdGhpcy5idWJibGVzID0gdGhpcy5kYXRhLmJ1YmJsZXNEYXRhO1xuXG4gICAgdGhpcy5pbml0QnViYmxlcygpO1xuXG4gICAgaWYodGhpcy5kYXRhLmlzRm9yY2VTaW11bGF0aW9uRW5hYmxlZClcbiAgICAgIHRoaXMuc2V0QnViYmxlQ2hhcnRTaW11bGF0aW9uKCk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgaWYodGhpcy5kYXRhLnNldEJ1YmJsZUNoYXJ0KVxuICAgICAgdGhpcy5kYXRhLnNldEJ1YmJsZUNoYXJ0KHRoaXMuYnViYmxlQ2hhcnQpO1xuXG4gICAgaWYodGhpcy5idWJibGVDaGFydClcbiAgICAgIHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0QWxsKGAjJHt0aGlzLmRhdGEuY29udGFpbmVySWR9IGcgY2lyY2xlLCAjJHt0aGlzLmRhdGEuY29udGFpbmVySWR9IGcgdGV4dGApLm9uKCdjbGljaycsIChkKSA9PiB7XG4gICAgICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICAgICAgdGhpcy5lbWl0KCdjbGljaycse3NvdXJjZTpcImJ1YmJsZVwiLGJ1YmJsZVBheWxvYWQ6IGQucGF5bG9hZH0pO1xuICAgIH0pO1xuXG4gICAgaWYodGhpcy5idWJibGVDaGFydClcbiAgICAgIHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0QWxsKCdjaXJjbGVbYnViYmxlc1R5cGU9XCJ4X2lubmVyX2NpcmNsZVwiXSwgdGV4dFtidWJibGVzVHlwZT1cInhfaW5uZXJfbGFiZWxcIl0nKS5vbignY2xpY2snLCAoZCkgPT4ge1xuICAgICAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG4gICAgICAgIGlmKGQuaGFzQ2xvc2VJY29uKVxuICAgICAgICAgIHRoaXMuZW1pdCgnY2xpY2snLHtzb3VyY2U6XCJjbG9zZVwiLGJ1YmJsZVB5bG9hZDogZC5wYXlsb2FkfSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICB0aGlzLmVtaXQoJ2NsaWNrJyx7c291cmNlOlwiYnViYmxlXCIsYnViYmxlUHlsb2FkOiBkLnBheWxvYWR9KTtcbiAgICB9KTtcblxuICAgIGlmKHRoaXMuZGF0YS5zZXRVcGRhdGVSZWZlcmVuY2UpXG4gICAgICB0aGlzLmRhdGEuc2V0VXBkYXRlUmVmZXJlbmNlKHRoaXMudXBkYXRlKTtcbiAgfVxuXG5cbiAgLyoqIFZpc3VhbGx5IHVwZGF0ZXMgdGhlIGJ1YmJsZSBjaGFydCAqL1xuICBwdWJsaWMgdXBkYXRlKCkge1xuXG4gICAgaWYodGhpcy5nZW5lcmljQnViYmxlICYmIHRoaXMuZ2VuZXJpY0J1YmJsZS5hdHRyKXtcbiAgICAgIHRoaXMuZ2VuZXJpY0J1YmJsZS5hdHRyKCdjeCcsIChkKSA9PiB7IHJldHVybiBkLnggPSBNYXRoLm1heChkLnJhZGl1cywgTWF0aC5taW4odGhpcy5kYXRhLmNvbnRhaW5lcldpZHRoIC0gZC5yYWRpdXMsIGQueCkpOyB9KVxuICAgICAgICAuYXR0cignY3knLCAoZCkgPT4geyByZXR1cm4gZC55ID0gTWF0aC5tYXgoZC5yYWRpdXMsIE1hdGgubWluKHRoaXMuZGF0YS5jb250YWluZXJIZWlnaHQgLSBkLnJhZGl1cywgZC55KSk7IH0pO1xuICAgIH1cblxuICAgIGlmKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuYnViYmxlc0RhdGEpXG4gICAgICB0aGlzLmRhdGEuYnViYmxlc0RhdGEuZm9yRWFjaCggKGMpID0+IHtcbiAgICAgICAgICBjLnRleHRzLmZvckVhY2goIHR4ID0+IHtcbiAgICAgICAgICAgICAgdmFyIHR4dCA9IHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0KGB0ZXh0W2J1YmJsZXNFbElkPSR7dHguaWR9XWApO1xuICAgICAgICAgICAgICB0eHQuYXR0cihcImR5XCIsIHR4LnlfZnVuY3Rpb24gKTtcbiAgICAgICAgICAgICAgdHh0LmF0dHIoXCJkeFwiLCB0eC54X2Z1bmN0aW9uICk7XG4gICAgICAgICAgfSlcbiAgICAgIH0pO1xuXG4gICAgaWYodGhpcy5idWJibGVDaGFydCl7XG4gICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbCgnY2lyY2xlW2J1YmJsZXNUeXBlPVwieF9pbm5lcl9jaXJjbGVcIl0nKVxuICAgICAgLmF0dHIoXCJjeVwiLCAoZCkgPT4gZC55KyhkLnJhZGl1cy8yKSApXG4gICAgICAuYXR0cihcImN4XCIsIChkKSA9PiBkLnggKVxuICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIChkKSA9PiAoIGQuaGFzQ2xvc2VJY29uID8gMSA6IDAgKSApO1xuICAgIH1cblxuICAgIGlmKHRoaXMuYnViYmxlQ2hhcnQpe1xuICAgICAgdGhpcy5idWJibGVDaGFydC5zZWxlY3RBbGwoJ3RleHRbYnViYmxlc1R5cGU9XCJ4X2lubmVyX2xhYmVsXCJdJylcbiAgICAgIC5hdHRyKFwiZHlcIiwgKGQpID0+IGQueSsoZC5yYWRpdXMvMikrNiApXG4gICAgICAuYXR0cihcImR4XCIsIChkKSA9PiBkLnggKVxuICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIChkKSA9PiAoIGQuaGFzQ2xvc2VJY29uID8gMSA6IDAgKSApO1xuICAgIH1cblxuICB9XG5cblxuXG4gIC8qKiBJbml0aWFsaXplZCB0aGUgY2hhcnQncyBidWJibGVzICovXG4gIHByaXZhdGUgaW5pdEJ1YmJsZXMoKTogdm9pZCB7XG5cbiAgICBpZih0aGlzLmJ1YmJsZUNoYXJ0KVxuICAgICAgdGhpcy5nZW5lcmljQnViYmxlID0gdGhpcy5idWJibGVDaGFydC5zZWxlY3RBbGwoYCMke3RoaXMuZGF0YS5jb250YWluZXJJZH0gZ2ApXG4gICAgICAgIC5kYXRhKHRoaXMuYnViYmxlcylcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKFwiYnViYmxlc0VsSWRcIiwoZCk9PmQuaWQpXG4gICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgIC5hdHRyKCdyJywgKGQpID0+IE1hdGgubWF4KDAsIGQucmFkaXVzIC0gNS4wNSkgKVxuICAgICAgICAuYXR0cihcImN4XCIsIChkKT0+ZC54KVxuICAgICAgICAuYXR0cihcImN5XCIsIChkKT0+ZC55KVxuICAgICAgICAuYXR0cigncGFkZGluZycsIChkKSA9PiA1MCApXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwoZCk9PmQuY2xhc3NlcyApXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIChkKSA9PiBkLmNvbG9yICk7XG5cbiAgICBpZih0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmJ1YmJsZXNEYXRhICYmIHRoaXMuYnViYmxlQ2hhcnQpXG4gICAgICB0aGlzLmRhdGEuYnViYmxlc0RhdGEuZm9yRWFjaCggKGMpID0+IHtcbiAgICAgICAgbGV0IGdyb3VwID0gdGhpcy5idWJibGVDaGFydC5zZWxlY3QoYGdbYnViYmxlc0VsSWQ9JHtjLmlkfV1gKTtcbiAgICAgICAgYy50ZXh0cy5mb3JFYWNoKCB0eCA9PiB7XG4gICAgICAgICAgZ3JvdXAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgLmF0dHIoXCJkeFwiLCB0eC54X2Z1bmN0aW9uIClcbiAgICAgICAgICAuYXR0cihcImR5XCIsIHR4LnlfZnVuY3Rpb24gKVxuICAgICAgICAgIC50ZXh0KHR4LmxhYmVsKVxuICAgICAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIHR4LmZvbnRTaXplX2Z1bmN0aW9uKVxuICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCB0eC5jb2xvcilcbiAgICAgICAgICAuYXR0cihcImJ1YmJsZXNFbElkXCIsdHguaWQpXG4gICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLHR4LmNsYXNzZXMpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmKHRoaXMuYnViYmxlQ2hhcnQpXG4gICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbChgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfSBnYClcbiAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgLmF0dHIoICdyJywgKGQpID0+IDEwIClcbiAgICAgICAgLmF0dHIoICdwYWRkaW5nJywgKGQpID0+IDUwIClcbiAgICAgICAgLnN0eWxlKCAnZmlsbCcsIFwid2hpdGVcIiApXG4gICAgICAgIC5hdHRyKCAnY3gnLCAoZCkgPT4gZC54IClcbiAgICAgICAgLmF0dHIoICdjeScsIChkKSA9PiBkLnkgKVxuICAgICAgICAuYXR0ciggXCJidWJibGVzVHlwZVwiLFwieF9pbm5lcl9jaXJjbGVcIilcbiAgICAgICAgLmF0dHIoIFwiY2xhc3NcIixcImNpcmNsZV94LWlubmVyLWNpcmNsZVwiKTtcblxuICAgIGlmKHRoaXMuYnViYmxlQ2hhcnQpXG4gICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbChgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfSBnYClcbiAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLnN0eWxlKFwidXNlci1zZWxlY3RcIixcIm5vbmVcIilcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsXCJibGFja1wiKVxuICAgICAgICAuaHRtbChcIiYjMTAwMDU7XCIpXG4gICAgICAgIC5hdHRyKFwiZm9udC1mYW1pbHlcIiwgXCJzYW5zLXNlcmlmXCIpXG4gICAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsMTUpXG4gICAgICAgIC5hdHRyKFwiYnViYmxlc1R5cGVcIixcInhfaW5uZXJfbGFiZWxcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLFwiY2lyY2xlX3gtbGFiZWxcIik7XG5cbiAgfVxuXG5cblxuICAvKiogU2V0cyB0aGUgYnViYmxlIGNoYXJ0IGZvcmNlIHNpbXVsYXRpb24gKi9cbiAgcHJpdmF0ZSBzZXRCdWJibGVDaGFydFNpbXVsYXRpb24oKXtcbiAgICBsZXQgdG1wU2ltdWxhdGlvbkRhdGEgPSAoIHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuZm9yY2VTaW11bGF0aW9uRGF0YSA/IHRoaXMuZGF0YS5mb3JjZVNpbXVsYXRpb25EYXRhIDoge30gKTtcbiAgICB2YXIgeFB1bGwgPSAoIHRtcFNpbXVsYXRpb25EYXRhWyd4UHVsbCddID8gdG1wU2ltdWxhdGlvbkRhdGFbJ3hQdWxsJ10gOiB0aGlzLmRhdGEuY29udGFpbmVyV2lkdGgvMiApO1xuICAgIHZhciB4UHVsbFN0cmVuZ3RoID0gKCB0bXBTaW11bGF0aW9uRGF0YVsneFB1bGxTdHJlbmd0aCddID8gdG1wU2ltdWxhdGlvbkRhdGFbJ3hQdWxsU3RyZW5ndGgnXSA6IC0wLjAxICk7XG4gICAgdmFyIHlQdWxsID0gKCB0bXBTaW11bGF0aW9uRGF0YVsneVB1bGwnXSA/IHRtcFNpbXVsYXRpb25EYXRhWyd5UHVsbCddIDogdGhpcy5kYXRhLmNvbnRhaW5lckhlaWdodC8yICk7XG4gICAgdmFyIHlQdWxsU3RyZW5ndGggPSAoIHRtcFNpbXVsYXRpb25EYXRhWyd5UHVsbFN0cmVuZ3RoJ10gPyB0bXBTaW11bGF0aW9uRGF0YVsneVB1bGxTdHJlbmd0aCddIDogLTAuMDEgKTtcbiAgICB2YXIgY29sbGlzaW9uU3RyZW5ndGggPSAoIHRtcFNpbXVsYXRpb25EYXRhWydjb2xsaXNpb25TdHJlbmdoJ10gPyB0bXBTaW11bGF0aW9uRGF0YVsnY29sbGlzaW9uU3RyZW5naCddIDogMC45OSApO1xuICAgIHZhciBjb2xsaXNpb25JdGVyYXRpb25zID0gKCB0bXBTaW11bGF0aW9uRGF0YVsnY29sbGlzaW9uSXRlcmF0aW9ucyddID8gdG1wU2ltdWxhdGlvbkRhdGFbJ2NvbGxpc2lvbkl0ZXJhdGlvbnMnXSA6IDEgKTtcbiAgICB2YXIgdmVsb2NpdHlEZWNheSA9ICggdG1wU2ltdWxhdGlvbkRhdGFbJ3ZlbG9jaXR5RGVjYXknXSA/IHRtcFNpbXVsYXRpb25EYXRhWyd2ZWxvY2l0eURlY2F5J10gOiAwLjk5ICk7XG4gICAgZDNfZm9yY2UuZm9yY2VTaW11bGF0aW9uKClcbiAgICAgIC52ZWxvY2l0eURlY2F5KHZlbG9jaXR5RGVjYXkpXG4gICAgICAuZm9yY2UoXCJ4XCIsIGQzX2ZvcmNlLmZvcmNlWCh4UHVsbCkuc3RyZW5ndGgoeFB1bGxTdHJlbmd0aCkpXG4gICAgICAuZm9yY2UoXCJ5XCIsIGQzX2ZvcmNlLmZvcmNlWSh5UHVsbCkuc3RyZW5ndGgoeVB1bGxTdHJlbmd0aCkpXG4gICAgICAuZm9yY2UoXCJjb2xsaWRlXCIsIGQzX2ZvcmNlLmZvcmNlQ29sbGlkZSgpLnJhZGl1cygoZCk9PmQucmFkaXVzKS5zdHJlbmd0aChjb2xsaXNpb25TdHJlbmd0aCkuaXRlcmF0aW9ucyhjb2xsaXNpb25JdGVyYXRpb25zKSlcbiAgICAgIC5ub2Rlcyh0aGlzLmJ1YmJsZXMpXG4gICAgICAub24oJ3RpY2snLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG5cblxufSJdfQ==