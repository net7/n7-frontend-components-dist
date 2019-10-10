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
        function () { return _this.makeBubbleChart(); }));
        if (this.data.setUpdateReference)
            this.data.setUpdateReference(this.update.bind(this));
    };
    /** Makes the whole bubble chart */
    /**
     * Makes the whole bubble chart
     * @return {?}
     */
    BubbleChartComponent.prototype.makeBubbleChart = /**
     * Makes the whole bubble chart
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
        if (this.bubbleChart) {
            this.bubbleChart.selectAll("#" + this.data.containerId + " g circle, #" + this.data.containerId + " g text").on('click', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                if (!_this.emit)
                    return;
                _this.emit('click', { source: "bubble", bubblePayload: d.payload, bubble: d });
            }));
            this.bubbleChart.selectAll('circle[b-type="x_inner_circle"], text[b-type="x_inner_label"]').on('click', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                if (d.hasCloseIcon) {
                    if (!_this.emit)
                        return;
                    _this.emit('click', { source: "close", bubblePayload: d.payload, bubble: d });
                }
                else {
                    _this.emit('click', { source: "bubble", bubblePayload: d.payload, bubble: d });
                }
            }));
            this.bubbleChart.selectAll("#" + this.data.containerId + " g").on('mouseenter', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                if (!_this.emit)
                    return;
                _this.emit('mouse_enter', { bubblePayload: d.payload, bubble: d });
            }));
            this.bubbleChart.selectAll("#" + this.data.containerId + " g").on('mouseleave', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                if (!_this.emit)
                    return;
                _this.emit('mouse_leave', { bubblePayload: d.payload, bubble: d });
            }));
        }
        if (this.data.setBubbleChart)
            this.data.setBubbleChart(this.bubbleChart);
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
        if (!this.data)
            return;
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
                    var txt = _this.bubbleChart.select("text[id=" + tx.id + "]");
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
            this.bubbleChart.selectAll('text[b-type="x_inner_label"]')
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
                .attr("id", (/**
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
                var group = _this.bubbleChart.select("g[id=" + c.id + "]");
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
                        .attr("id", tx.id)
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
                .attr("b-type", "x_inner_circle")
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
                .attr("b-type", "x_inner_label")
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
        // var simulation = 
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
        //   .stop()
        // for (var i = 0; i < 300; i++) {
        //   simulation.tick()
        // }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQvYnViYmxlLWNoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxLQUFLLFlBQVksTUFBTSxjQUFjLENBQUM7OztBQUc3QyxPQUFPLEtBQUssUUFBUSxNQUFNLFVBQVUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQW1CckMsc0NBMENDOzs7Ozs7SUF0Q0MsdUNBQW9COzs7OztJQUlwQiwwQ0FBdUI7Ozs7O0lBSXZCLDJDQUF3Qjs7Ozs7SUFJeEIsdUNBQTJCOzs7Ozs7SUFLM0Isb0RBQWtDOzs7OztJQUlsQywrQ0FBc0Q7Ozs7O0lBSXRELG1DQUFpQjs7Ozs7SUFJakIsaUNBQWU7Ozs7O0lBSWYsOENBQXlCOzs7OztJQUl6QiwwQ0FBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQnZCLHFEQThCQzs7Ozs7O0lBMUJDLGdEQUFlOzs7OztJQUlmLHdEQUF1Qjs7Ozs7SUFJdkIsZ0RBQWU7Ozs7O0lBSWYsd0RBQXVCOzs7OztJQUl2QiwyREFBMEI7Ozs7OztJQUsxQiw4REFBNkI7Ozs7O0lBSTdCLHdEQUF1Qjs7Ozs7Ozs7Ozs7Ozs7O0FBaUJ6QixpQ0FnQ0M7Ozs7OztJQTVCQyx5QkFBVzs7Ozs7SUFJWCw0QkFBYzs7Ozs7O0lBS2QsaUNBQWdCOzs7Ozs7SUFLaEIsaUNBQWdCOzs7Ozs7SUFLaEIsd0NBQXVCOzs7OztJQUl2Qiw0QkFBYzs7Ozs7SUFJZCw4QkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJuQixpQ0FxQ0M7Ozs7OztJQWpDQyx5QkFBVzs7Ozs7SUFJWCx3QkFBVzs7Ozs7SUFJWCx3QkFBVzs7Ozs7SUFJWCw2QkFBZTs7Ozs7SUFJZiw0QkFBYzs7Ozs7SUFJZCxt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QUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsMElBQWtDO2lCQUNuQzs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUFxTVIsMkJBQUM7Q0FBQSxBQTNNRCxJQTJNQztTQXZNWSxvQkFBb0I7OztJQUMvQixvQ0FBZ0M7O0lBQ2hDLG9DQUFtQjs7Ozs7SUFDbkIsdUNBQWlDOzs7OztJQWlCakMsdUNBQXVCOzs7OztJQUN2Qiw2Q0FBNkI7Ozs7O0lBQzdCLDJDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBCVUJCTEVDSEFSVC50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZDNfc2VsZWN0aW9uIGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbi8vIGltcG9ydCBvbmx5IGZvciBhdXRvLWFsbG9jYXRpbmcgdGhlIGJ1YmJsZXMgKG5lZWRzIGhlYXZ5IHJlZmFjdG9yaW5nIHRvIHdvcmspXG4vL2ltcG9ydCAqIGFzIGQzX2hpZXJhcmNoeSBmcm9tIFwiZDMtaGllcmFyY2h5XCI7XG5pbXBvcnQgKiBhcyBkM19mb3JjZSBmcm9tIFwiZDMtZm9yY2VcIjtcblxuXG5cblxuXG5cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEJ1YmJsZUNoYXJ0Q29tcG9uZW50J3MgXCJkYXRhXCJcbiAqIFxuICogQHByb3BlcnR5IGNvbnRhaW5lcklkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJXaWR0aCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY29udGFpbmVySGVpZ2h0IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBidWJibGVzRGF0YSAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSByZXNldCAob3B0aW9uYWwpXG4qL1xuZXhwb3J0IGludGVyZmFjZSBJQnViYmxlQ2hhcnREYXRhIHtcbiAgLyoqXG4gICAqIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgYnViYmxlLWNoYXJ0XG4gICAqL1xuICBjb250YWluZXJJZDogc3RyaW5nO1xuICAvKipcbiAgICogdG90YWwgd2lkdGggZm9yIHRoZSBidWJibGUtY2hhcnRcbiAgICovXG4gIGNvbnRhaW5lcldpZHRoOiBudW1iZXI7XG4gIC8qKlxuICAgKiB0b3RhbCBoZWlnaHQgZm9yIHRoZSBidWJibGUtY2hhcnRcbiAgICovXG4gIGNvbnRhaW5lckhlaWdodDogbnVtYmVyO1xuICAvKipcbiAgICogZGF0YSBhYm91dCB0aGUgYnViYmxlc1xuICAgKi9cbiAgYnViYmxlc0RhdGE6IElCdWJibGVEYXRhW107XG4gIC8qKlxuICAgKiB3aGV0aGVyIHRoZSBmb3JjZSBzaW11bGF0aW9uIHNob3VsZCBiZSBlbmFibGVkIG9yIG5vdFxuICAgKiAoZG8gdGhlIGJ1YmJsZXMnIHBvc2l0aW9ucyBcImFkYXB0XCIgdG8gdGhlIGNvbnRhaW5lciBvciBub3Q/KVxuICAgKi9cbiAgaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkOiBib29sZWFuO1xuICAvKipcbiAgICogb3B0aW9ucyBmb3IgdGhlIGZvcmNlIHNpbXVsYXRpb24gKGlnbm9yZWQgaWYgaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkIGlzIGZhbHNlKVxuICAgKi9cbiAgZm9yY2VTaW11bGF0aW9uRGF0YT86IElCdWJibGVDaGFydEZvcmNlU2ltdWxhdGlvbkRhdGE7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGNzcyBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogc3BlY2lmaWVzIGlmIHRoZSBidWJibGVzIGhhdmUgdG8gYmUgcmVzZXQgZnJvbSBhIHByZXZpb3VzIGluc3RhbnRpYXRpb25cbiAgICovXG4gIHJlc2V0PzogYm9vbGVhblxuICAvKipcbiAgICogY2FsbGJhY2sgZm9yIHNhdmluZyB0aGUgdXBkYXRlIGZ1bmN0aW9uIG5lZWRlZCBmb3IgdmlzdWFsbHkgdXBkYXRpbmcgdGhlIGNoYXJ0XG4gICAqL1xuICBzZXRVcGRhdGVSZWZlcmVuY2U/OiBhbnk7XG4gIC8qKlxuICAgKiBjYWxsYmFjayBmb3Igc2F2aW5nL2dldHRpbiBhIHJlZmVyZW5jZSBvZiB0aGUgYnViYmxlcyBjaGFydCBpbnN0YW5jZVxuICAgKi9cbiAgc2V0QnViYmxlQ2hhcnQ/OiBhbnk7XG59XG5cblxuXG5cblxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgQnViYmxlQ2hhcnRDb21wb25lbnQncyBzaW11bGF0aW9uIFwiZGF0YVwiXG4gKiAoYWxsIHRoZSBwcm9wZXJ0aWVzIGFyZSBvcHRpb25hbHMgYW5kIGlmIG5vdCBwcm92aWRlZFxuICogYSBkZWZhdWx0IHZhbHVlIGlzIHVzZWQgaW5zdGVhZClcbiAqIFxuICogQHByb3BlcnR5IHhQdWxsIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB4UHVsbFN0cmVuZ3RoIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB5UHVsbCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgeVB1bGxTdHJlbmd0aCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY29sbGlzaW9uU3RyZW5naCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY29sbGlzaW9uSXRlcmF0aW9ucyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdmVsb2NpdHlEZWNheSAob3B0aW9uYWwpXG4qL1xuZXhwb3J0IGludGVyZmFjZSBJQnViYmxlQ2hhcnRGb3JjZVNpbXVsYXRpb25EYXRhIHtcbiAgLyoqXG4gICAqIHgtY29vcmRpbmF0ZSB0byB3aGljaCB0aGUgYnViYmxlcyBhcmUgcHVsbGVkIHRvXG4gICAqL1xuICB4UHVsbD86IG51bWJlcjtcbiAgLyoqXG4gICAqIHN0cmVuZ3RoIGZvciB0aGUgcHVsbCB0b3dhcmQgdGhlIHhQdWxsIHgtY29vcmRpbmF0ZVxuICAgKi9cbiAgeFB1bGxTdHJlbmd0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIHktY29vcmRpbmF0ZSB0byB3aGljaCB0aGUgYnViYmxlcyBhcmUgcHVsbGVkIHRvXG4gICAqL1xuICB5UHVsbD86IG51bWJlcjtcbiAgLyoqXG4gICAqIHN0cmVuZ3RoIGZvciB0aGUgcHVsbCB0b3dhcmQgdGhlIHlQdWxsIHktY29vcmRpbmF0ZVxuICAgKi9cbiAgeVB1bGxTdHJlbmd0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIHN0cmVuZ3RoIG9mIGJ1YmJsZSdzIGNvbGxpc2lvblxuICAgKi9cbiAgY29sbGlzaW9uU3RyZW5naD86IG51bWJlcjtcbiAgLyoqXG4gICAqIG51bWJlciBvZiBpdGVyYXRpb25zIGluIHRoZSBidWJibGUncyBjb2xsaXNpb24gZGV0ZWN0aW9uXG4gICAqICh0aGUgaGlnaGVyIHRoZSBudW1iZXIgdGhlIG1vcmUgcHJlY2lzZSBhbmQgY29zdGx5IHRoZSBkZXRlY3Rpb24pXG4gICAqL1xuICBjb2xsaXNpb25JdGVyYXRpb25zPzogbnVtYmVyO1xuICAvKipcbiAgICogaW5kaWNhdG9yIG9uIGhvdyBmYXN0IHRoZSBidWJibGUncyB2ZWxvY2l0eSBkZWNyZWFzZXNcbiAgICovXG4gIHZlbG9jaXR5RGVjYXk/OiBudW1iZXI7XG59XG5cblxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgYSBidWJibGUncyB0ZXh0XG4gKlxuICogQHByb3BlcnR5IGlkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBsYWJlbCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgeF9mdW5jdGlvbiAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgeV9mdW5jdGlvbiAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgZm9udFNpemVfZnVuY3Rpb24gKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNvbG9yIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqXG4qL1xuZXhwb3J0IGludGVyZmFjZSBJQnViYmxlVGV4dCB7XG4gIC8qKlxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIHRleHRcbiAgICovXG4gIGlkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aGUgYWN0dWFsIHRleHRcbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBmdW5jdGlvbiB1c2VkIHRvIHNwZWNpZnkgdGhlIHggcG9zaXRpb24gdGhlIHRleHRcbiAgICogKGNhbiBkZXBlbmQgb24gdGhlIGJ1YmJsZSdzIHgtcG9zaXRpb24sIHJhZGl1cywgZXRjLi4uKVxuICAgKi9cbiAgeF9mdW5jdGlvbjogYW55O1xuICAvKipcbiAgICogZnVuY3Rpb24gdXNlZCB0byBzcGVjaWZ5IHRoZSB5IHBvc2l0aW9uIHRoZSB0ZXh0XG4gICAqIChjYW4gZGVwZW5kIG9uIHRoZSBidWJibGUncyB5LXBvc2l0aW9uLCByYWRpdXMsIGV0Yy4uLilcbiAgICovXG4gIHlfZnVuY3Rpb246IGFueTtcbiAgLyoqXG4gICAqIGZ1bmN0aW9uIHVzZWQgdG8gc3BlY2lmeSB0aGUgZm9udCBzaXplIG9mIHRoZSB0ZXh0XG4gICAqIChjYW4gZGVwZW5kIG9uIHRoZSBidWJibGUncyByYWRpdXMsIHJldHVybiBhIGNvbnN0YW50IG51bWJlciwgZXRjLi4uKVxuICAgKi9cbiAgZm9udFNpemVfZnVuY3Rpb246IGFueTtcbiAgLyoqXG4gICAqIGNvbG9yIG9mIHRoZSB0ZXh0XG4gICAqL1xuICBjb2xvcjogc3RyaW5nO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBjc3MgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbn1cblxuXG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBhIHNpbmdsZSBidWJibGVcbiAqXG4gKiBAcHJvcGVydHkgaWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHggKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHkgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHJhZGl1cyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY29sb3IgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGhhc0Nsb3NlSWNvbiAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdGV4dHMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICpcbiovXG5leHBvcnQgaW50ZXJmYWNlIElCdWJibGVEYXRhIHtcbiAgLyoqXG4gICAqIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgYnViYmxlXG4gICAqL1xuICBpZDogc3RyaW5nO1xuICAvKipcbiAgICogdGhlIGJ1YmJsZSdzIChzdGFydGluZykgeC1jb29yZGluYXRlXG4gICAqL1xuICB4PzogbnVtYmVyO1xuICAvKipcbiAgICogdGhlIGJ1YmJsZSdzIChzdGFydGluZykgeS1jb29yZGluYXRlXG4gICAqL1xuICB5PzogbnVtYmVyO1xuICAvKipcbiAgICogdGhlIGJ1YmJsZXMgcmFkaXVzXG4gICAqL1xuICByYWRpdXM6IG51bWJlcjtcbiAgLyoqXG4gICAqIHRoZSBidWJibGUncyBjb2xvclxuICAgKi9cbiAgY29sb3I6IHN0cmluZztcbiAgLyoqXG4gICAqIHNwZWNpZmllcyBpZiB0aGUgYnViYmxlIGhhcyBhIGNsb3NlIGljb24gKGRlZmF1bHQ6ZmFsc2UpXG4gICAqL1xuICBoYXNDbG9zZUljb24/OiBib29sZWFuO1xuICAvKipcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbiAgLyoqXG4gICAqIGFsbCB0aGUgYnViYmxlJ3MgdGV4dHNcbiAgICovXG4gIHRleHRzPzogSUJ1YmJsZVRleHRbXTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgY3NzIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG59XG5cblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWJ1YmJsZS1jaGFydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9idWJibGUtY2hhcnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQnViYmxlQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcbiAgQElucHV0KCkgZGF0YTogSUJ1YmJsZUNoYXJ0RGF0YTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuICBwcml2YXRlIF9sb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKXtcbiAgICBpZighdGhpcy5kYXRhKSByZXR1cm47XG4gICAgaWYodGhpcy5kYXRhLnJlc2V0PT09dHJ1ZSl7XG4gICAgICB0aGlzLmRhdGEucmVzZXQ9ZmFsc2U7XG4gICAgICB0aGlzLl9sb2FkZWQ9ZmFsc2U7XG4gICAgfVxuICAgIGlmKHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xuICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm1ha2VCdWJibGVDaGFydCgpKTtcbiAgICBcbiAgICBpZih0aGlzLmRhdGEuc2V0VXBkYXRlUmVmZXJlbmNlKVxuICAgICAgdGhpcy5kYXRhLnNldFVwZGF0ZVJlZmVyZW5jZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblxufVxuXG4gIHByaXZhdGUgYnViYmxlcyA9IG51bGw7XG4gIHByaXZhdGUgZ2VuZXJpY0J1YmJsZSA9IG51bGw7XG4gIHByaXZhdGUgYnViYmxlQ2hhcnQgPSBudWxsO1xuXG4gIC8qKiBNYWtlcyB0aGUgd2hvbGUgYnViYmxlIGNoYXJ0ICovXG4gIHB1YmxpYyBtYWtlQnViYmxlQ2hhcnQoKXtcbiAgICBkM19zZWxlY3Rpb24uc2VsZWN0KGAjJHt0aGlzLmRhdGEuY29udGFpbmVySWR9YCkuc2VsZWN0QWxsKFwiKlwiKS5yZW1vdmUoKTtcblx0dmFyIHBvdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuZGF0YS5jb250YWluZXJJZH1gKTtcbiAgICBwb3Quc3R5bGUud2lkdGggPSB0aGlzLmRhdGEuY29udGFpbmVyV2lkdGgrJ3B4JztcbiAgICBwb3Quc3R5bGUuaGVpZ2h0ID0gdGhpcy5kYXRhLmNvbnRhaW5lckhlaWdodCsncHgnO1xuXG4gICAgdGhpcy5idWJibGVDaGFydCA9IGQzX3NlbGVjdGlvbi5zZWxlY3QoYCMke3RoaXMuZGF0YS5jb250YWluZXJJZH1gKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgdGhpcy5kYXRhLmNvbnRhaW5lcldpZHRoKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCB0aGlzLmRhdGEuY29udGFpbmVySGVpZ2h0KTtcblxuICAgIHRoaXMuYnViYmxlcyA9IHRoaXMuZGF0YS5idWJibGVzRGF0YTtcblxuICAgIHRoaXMuaW5pdEJ1YmJsZXMoKTtcblxuICAgIGlmKHRoaXMuZGF0YS5pc0ZvcmNlU2ltdWxhdGlvbkVuYWJsZWQpXG4gICAgICB0aGlzLnNldEJ1YmJsZUNoYXJ0U2ltdWxhdGlvbigpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcblxuICAgIGlmKHRoaXMuYnViYmxlQ2hhcnQpe1xuICAgICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbChgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfSBnIGNpcmNsZSwgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfSBnIHRleHRgKS5vbignY2xpY2snLCAoZCkgPT4ge1xuICAgICAgICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICAgICAgICB0aGlzLmVtaXQoJ2NsaWNrJyx7c291cmNlOlwiYnViYmxlXCIsIGJ1YmJsZVBheWxvYWQ6IGQucGF5bG9hZCwgYnViYmxlOiBkfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0QWxsKCdjaXJjbGVbYi10eXBlPVwieF9pbm5lcl9jaXJjbGVcIl0sIHRleHRbYi10eXBlPVwieF9pbm5lcl9sYWJlbFwiXScpLm9uKCdjbGljaycsIChkKSA9PiB7XG4gICAgICAgICAgICAgIGlmKGQuaGFzQ2xvc2VJY29uKXtcbiAgICAgICAgICAgICAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdjbGljaycse3NvdXJjZTpcImNsb3NlXCIsIGJ1YmJsZVBheWxvYWQ6IGQucGF5bG9hZCwgYnViYmxlOiBkfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdjbGljaycse3NvdXJjZTpcImJ1YmJsZVwiLCBidWJibGVQYXlsb2FkOiBkLnBheWxvYWQsIGJ1YmJsZTogZH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0QWxsKGAjJHt0aGlzLmRhdGEuY29udGFpbmVySWR9IGdgKS5vbignbW91c2VlbnRlcicsIChkKSA9PiB7XG4gICAgICAgICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgICAgICAgIHRoaXMuZW1pdCgnbW91c2VfZW50ZXInLHtidWJibGVQYXlsb2FkOiBkLnBheWxvYWQsIGJ1YmJsZTogZH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbChgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfSBnYCkub24oJ21vdXNlbGVhdmUnLCAoZCkgPT4ge1xuICAgICAgICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICAgICAgICB0aGlzLmVtaXQoJ21vdXNlX2xlYXZlJyx7YnViYmxlUGF5bG9hZDogZC5wYXlsb2FkLCBidWJibGU6IGR9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYodGhpcy5kYXRhLnNldEJ1YmJsZUNoYXJ0KVxuICAgICAgdGhpcy5kYXRhLnNldEJ1YmJsZUNoYXJ0KHRoaXMuYnViYmxlQ2hhcnQpO1xuICB9XG5cblxuICAvKiogVmlzdWFsbHkgdXBkYXRlcyB0aGUgYnViYmxlIGNoYXJ0ICovXG4gIHB1YmxpYyB1cGRhdGUoKSB7XG4gICAgaWYoIXRoaXMuZGF0YSkgcmV0dXJuO1xuXG4gICAgaWYodGhpcy5nZW5lcmljQnViYmxlICYmIHRoaXMuZ2VuZXJpY0J1YmJsZS5hdHRyKXtcbiAgICAgIHRoaXMuZ2VuZXJpY0J1YmJsZS5hdHRyKCdjeCcsIChkKSA9PiB7IHJldHVybiBkLnggPSBNYXRoLm1heChkLnJhZGl1cywgTWF0aC5taW4odGhpcy5kYXRhLmNvbnRhaW5lcldpZHRoIC0gZC5yYWRpdXMsIGQueCkpOyB9KVxuICAgICAgICAuYXR0cignY3knLCAoZCkgPT4geyByZXR1cm4gZC55ID0gTWF0aC5tYXgoZC5yYWRpdXMsIE1hdGgubWluKHRoaXMuZGF0YS5jb250YWluZXJIZWlnaHQgLSBkLnJhZGl1cywgZC55KSk7IH0pO1xuICAgIH1cblxuICAgIGlmKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuYnViYmxlc0RhdGEpXG4gICAgICB0aGlzLmRhdGEuYnViYmxlc0RhdGEuZm9yRWFjaCggKGMpID0+IHtcbiAgICAgICAgICBjLnRleHRzLmZvckVhY2goIHR4ID0+IHtcbiAgICAgICAgICAgICAgdmFyIHR4dCA9IHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0KGB0ZXh0W2lkPSR7dHguaWR9XWApO1xuICAgICAgICAgICAgICB0eHQuYXR0cihcImR5XCIsIHR4LnlfZnVuY3Rpb24gKTtcbiAgICAgICAgICAgICAgdHh0LmF0dHIoXCJkeFwiLCB0eC54X2Z1bmN0aW9uICk7XG4gICAgICAgICAgfSlcbiAgICAgIH0pO1xuXG4gICAgaWYodGhpcy5idWJibGVDaGFydCl7XG4gICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbCgnY2lyY2xlW2ItdHlwZT1cInhfaW5uZXJfY2lyY2xlXCJdJylcbiAgICAgIC5hdHRyKFwiY3lcIiwgKGQpID0+IGQueSsoZC5yYWRpdXMvMikgKVxuICAgICAgLmF0dHIoXCJjeFwiLCAoZCkgPT4gZC54IClcbiAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCAoZCkgPT4gKCBkLmhhc0Nsb3NlSWNvbiA/IDEgOiAwICkgKTtcbiAgICB9XG5cbiAgICBpZih0aGlzLmJ1YmJsZUNoYXJ0KXtcbiAgICAgIHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0QWxsKCd0ZXh0W2ItdHlwZT1cInhfaW5uZXJfbGFiZWxcIl0nKVxuICAgICAgLmF0dHIoXCJkeVwiLCAoZCkgPT4gZC55KyhkLnJhZGl1cy8yKSs2IClcbiAgICAgIC5hdHRyKFwiZHhcIiwgKGQpID0+IGQueCApXG4gICAgICAuYXR0cihcIm9wYWNpdHlcIiwgKGQpID0+ICggZC5oYXNDbG9zZUljb24gPyAxIDogMCApICk7XG4gICAgfVxuXG4gIH1cblxuXG5cbiAgLyoqIEluaXRpYWxpemVkIHRoZSBjaGFydCdzIGJ1YmJsZXMgKi9cbiAgcHJpdmF0ZSBpbml0QnViYmxlcygpOiB2b2lkIHtcblxuICAgIGlmKHRoaXMuYnViYmxlQ2hhcnQpXG4gICAgICB0aGlzLmdlbmVyaWNCdWJibGUgPSB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbChgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfSBnYClcbiAgICAgICAgLmRhdGEodGhpcy5idWJibGVzKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoXCJpZFwiLChkKT0+ZC5pZClcbiAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgLmF0dHIoJ3InLCAoZCkgPT4gTWF0aC5tYXgoMCwgZC5yYWRpdXMgLSA1LjA1KSApXG4gICAgICAgIC5hdHRyKFwiY3hcIiwgKGQpPT5kLngpXG4gICAgICAgIC5hdHRyKFwiY3lcIiwgKGQpPT5kLnkpXG4gICAgICAgIC5hdHRyKCdwYWRkaW5nJywgKGQpID0+IDUwIClcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLChkKT0+ZC5jbGFzc2VzIClcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKGQpID0+IGQuY29sb3IgKTtcblxuICAgIGlmKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuYnViYmxlc0RhdGEgJiYgdGhpcy5idWJibGVDaGFydClcbiAgICAgIHRoaXMuZGF0YS5idWJibGVzRGF0YS5mb3JFYWNoKCAoYykgPT4ge1xuICAgICAgICBsZXQgZ3JvdXAgPSB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdChgZ1tpZD0ke2MuaWR9XWApO1xuICAgICAgICBjLnRleHRzLmZvckVhY2goIHR4ID0+IHtcbiAgICAgICAgICBncm91cC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAuYXR0cihcImR4XCIsIHR4LnhfZnVuY3Rpb24gKVxuICAgICAgICAgIC5hdHRyKFwiZHlcIiwgdHgueV9mdW5jdGlvbiApXG4gICAgICAgICAgLnRleHQodHgubGFiZWwpXG4gICAgICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgdHguZm9udFNpemVfZnVuY3Rpb24pXG4gICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIHR4LmNvbG9yKVxuICAgICAgICAgIC5hdHRyKFwiaWRcIix0eC5pZClcbiAgICAgICAgICAuYXR0cihcImNsYXNzXCIsdHguY2xhc3Nlcyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYodGhpcy5idWJibGVDaGFydClcbiAgICAgIHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0QWxsKGAjJHt0aGlzLmRhdGEuY29udGFpbmVySWR9IGdgKVxuICAgICAgICAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAuYXR0ciggJ3InLCAoZCkgPT4gMTAgKVxuICAgICAgICAuYXR0ciggJ3BhZGRpbmcnLCAoZCkgPT4gNTAgKVxuICAgICAgICAuc3R5bGUoICdmaWxsJywgXCJ3aGl0ZVwiIClcbiAgICAgICAgLmF0dHIoICdjeCcsIChkKSA9PiBkLnggKVxuICAgICAgICAuYXR0ciggJ2N5JywgKGQpID0+IGQueSApXG4gICAgICAgIC5hdHRyKCBcImItdHlwZVwiLFwieF9pbm5lcl9jaXJjbGVcIilcbiAgICAgICAgLmF0dHIoIFwiY2xhc3NcIixcImNpcmNsZV94LWlubmVyLWNpcmNsZVwiKTtcblxuICAgIGlmKHRoaXMuYnViYmxlQ2hhcnQpXG4gICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbChgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfSBnYClcbiAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLnN0eWxlKFwidXNlci1zZWxlY3RcIixcIm5vbmVcIilcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsXCJibGFja1wiKVxuICAgICAgICAuaHRtbChcIiYjMTAwMDU7XCIpXG4gICAgICAgIC5hdHRyKFwiZm9udC1mYW1pbHlcIiwgXCJzYW5zLXNlcmlmXCIpXG4gICAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsMTUpXG4gICAgICAgIC5hdHRyKFwiYi10eXBlXCIsXCJ4X2lubmVyX2xhYmVsXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIixcImNpcmNsZV94LWxhYmVsXCIpO1xuXG4gIH1cblxuXG5cbiAgLyoqIFNldHMgdGhlIGJ1YmJsZSBjaGFydCBmb3JjZSBzaW11bGF0aW9uICovXG4gIHByaXZhdGUgc2V0QnViYmxlQ2hhcnRTaW11bGF0aW9uKCl7XG4gICAgbGV0IHRtcFNpbXVsYXRpb25EYXRhID0gKCB0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmZvcmNlU2ltdWxhdGlvbkRhdGEgPyB0aGlzLmRhdGEuZm9yY2VTaW11bGF0aW9uRGF0YSA6IHt9ICk7XG4gICAgdmFyIHhQdWxsID0gKCB0bXBTaW11bGF0aW9uRGF0YVsneFB1bGwnXSA/IHRtcFNpbXVsYXRpb25EYXRhWyd4UHVsbCddIDogdGhpcy5kYXRhLmNvbnRhaW5lcldpZHRoLzIgKTtcbiAgICB2YXIgeFB1bGxTdHJlbmd0aCA9ICggdG1wU2ltdWxhdGlvbkRhdGFbJ3hQdWxsU3RyZW5ndGgnXSA/IHRtcFNpbXVsYXRpb25EYXRhWyd4UHVsbFN0cmVuZ3RoJ10gOiAtMC4wMSApO1xuICAgIHZhciB5UHVsbCA9ICggdG1wU2ltdWxhdGlvbkRhdGFbJ3lQdWxsJ10gPyB0bXBTaW11bGF0aW9uRGF0YVsneVB1bGwnXSA6IHRoaXMuZGF0YS5jb250YWluZXJIZWlnaHQvMiApO1xuICAgIHZhciB5UHVsbFN0cmVuZ3RoID0gKCB0bXBTaW11bGF0aW9uRGF0YVsneVB1bGxTdHJlbmd0aCddID8gdG1wU2ltdWxhdGlvbkRhdGFbJ3lQdWxsU3RyZW5ndGgnXSA6IC0wLjAxICk7XG4gICAgdmFyIGNvbGxpc2lvblN0cmVuZ3RoID0gKCB0bXBTaW11bGF0aW9uRGF0YVsnY29sbGlzaW9uU3RyZW5naCddID8gdG1wU2ltdWxhdGlvbkRhdGFbJ2NvbGxpc2lvblN0cmVuZ2gnXSA6IDAuOTkgKTtcbiAgICB2YXIgY29sbGlzaW9uSXRlcmF0aW9ucyA9ICggdG1wU2ltdWxhdGlvbkRhdGFbJ2NvbGxpc2lvbkl0ZXJhdGlvbnMnXSA/IHRtcFNpbXVsYXRpb25EYXRhWydjb2xsaXNpb25JdGVyYXRpb25zJ10gOiAxICk7XG4gICAgdmFyIHZlbG9jaXR5RGVjYXkgPSAoIHRtcFNpbXVsYXRpb25EYXRhWyd2ZWxvY2l0eURlY2F5J10gPyB0bXBTaW11bGF0aW9uRGF0YVsndmVsb2NpdHlEZWNheSddIDogMC45OSApO1xuICAgIC8vIHZhciBzaW11bGF0aW9uID0gXG4gICAgZDNfZm9yY2UuZm9yY2VTaW11bGF0aW9uKClcbiAgICAgIC52ZWxvY2l0eURlY2F5KHZlbG9jaXR5RGVjYXkpXG4gICAgICAuZm9yY2UoXCJ4XCIsIGQzX2ZvcmNlLmZvcmNlWCh4UHVsbCkuc3RyZW5ndGgoeFB1bGxTdHJlbmd0aCkpXG4gICAgICAuZm9yY2UoXCJ5XCIsIGQzX2ZvcmNlLmZvcmNlWSh5UHVsbCkuc3RyZW5ndGgoeVB1bGxTdHJlbmd0aCkpXG4gICAgICAuZm9yY2UoXCJjb2xsaWRlXCIsIGQzX2ZvcmNlLmZvcmNlQ29sbGlkZSgpLnJhZGl1cygoZCk9PmQucmFkaXVzKS5zdHJlbmd0aChjb2xsaXNpb25TdHJlbmd0aCkuaXRlcmF0aW9ucyhjb2xsaXNpb25JdGVyYXRpb25zKSlcbiAgICAgIC5ub2Rlcyh0aGlzLmJ1YmJsZXMpXG4gICAgICAub24oJ3RpY2snLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKVxuICAgIC8vICAgLnN0b3AoKVxuXG4gICAgLy8gZm9yICh2YXIgaSA9IDA7IGkgPCAzMDA7IGkrKykge1xuICAgIC8vICAgc2ltdWxhdGlvbi50aWNrKClcbiAgICAvLyB9XG4gIH1cblxuXG5cbn1cbiJdfQ==