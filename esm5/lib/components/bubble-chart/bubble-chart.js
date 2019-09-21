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
            this.data.setResetReference(this.resetBubbles);
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
    /**
     * @return {?}
     */
    BubbleChartComponent.prototype.resetBubbles = /**
     * @return {?}
     */
    function () {
        this._loaded = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQvYnViYmxlLWNoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxLQUFLLFlBQVksTUFBTSxjQUFjLENBQUM7OztBQUc3QyxPQUFPLEtBQUssUUFBUSxNQUFNLFVBQVUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFvQnJDLHNDQTBDQzs7Ozs7O0lBdENDLHVDQUFvQjs7Ozs7SUFJcEIsMENBQXVCOzs7OztJQUl2QiwyQ0FBd0I7Ozs7O0lBSXhCLHVDQUEyQjs7Ozs7O0lBSzNCLG9EQUFrQzs7Ozs7SUFJbEMsK0NBQXNEOzs7OztJQUl0RCwwQ0FBb0I7Ozs7O0lBSXBCLDZDQUF3Qjs7Ozs7SUFJeEIsOENBQXlCOzs7OztJQUl6QixtQ0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQm5CLHFEQThCQzs7Ozs7O0lBMUJDLGdEQUFlOzs7OztJQUlmLHdEQUF1Qjs7Ozs7SUFJdkIsZ0RBQWU7Ozs7O0lBSWYsd0RBQXVCOzs7OztJQUl2QiwyREFBMEI7Ozs7OztJQUsxQiw4REFBNkI7Ozs7O0lBSTdCLHdEQUF1Qjs7Ozs7Ozs7Ozs7Ozs7O0FBaUJ6QixpQ0FnQ0M7Ozs7OztJQTVCQyx5QkFBVzs7Ozs7SUFJWCw0QkFBYzs7Ozs7O0lBS2QsaUNBQWdCOzs7Ozs7SUFLaEIsaUNBQWdCOzs7Ozs7SUFLaEIsd0NBQXVCOzs7OztJQUl2Qiw0QkFBYzs7Ozs7SUFJZCw4QkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJuQixpQ0FzQ0M7Ozs7OztJQWxDQyx5QkFBVzs7Ozs7SUFJWCx3QkFBVzs7Ozs7SUFJWCx3QkFBVzs7Ozs7SUFJWCw2QkFBZTs7Ozs7SUFJZiw0QkFBYzs7Ozs7O0lB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QUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUM7YUFDM0gsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDbkIsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7O2dCQXBMRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsMElBQWtDO2lCQUNuQzs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUFrTFIsMkJBQUM7Q0FBQSxBQXhMRCxJQXdMQztTQXBMWSxvQkFBb0I7OztJQUMvQixvQ0FBZ0M7O0lBQ2hDLG9DQUFtQjs7Ozs7SUFDbkIsdUNBQWlDOzs7OztJQVVqQyx1Q0FBdUI7Ozs7O0lBQ3ZCLDZDQUE2Qjs7Ozs7SUFDN0IsMkNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEJVQkJMRUNIQVJULnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlckNvbnRlbnRDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBkM19zZWxlY3Rpb24gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuLy8gaW1wb3J0IG9ubHkgZm9yIGF1dG8tYWxsb2NhdGluZyB0aGUgYnViYmxlcyAobmVlZHMgaGVhdnkgcmVmYWN0b3JpbmcgdG8gd29yaylcbi8vaW1wb3J0ICogYXMgZDNfaGllcmFyY2h5IGZyb20gXCJkMy1oaWVyYXJjaHlcIjtcbmltcG9ydCAqIGFzIGQzX2ZvcmNlIGZyb20gXCJkMy1mb3JjZVwiO1xuXG5cblxuXG5cblxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgQnViYmxlQ2hhcnRDb21wb25lbnQncyBcImRhdGFcIlxuICogXG4gKiBAcHJvcGVydHkgY29udGFpbmVySWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNvbnRhaW5lcldpZHRoIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJIZWlnaHQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGJ1YmJsZXNEYXRhIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBzZXRCdWJibGVDaGFydCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgc2V0VXBkYXRlUmVmZXJlbmNlIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpc0ZvcmNlU2ltdWxhdGlvbkVuYWJsZWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUJ1YmJsZUNoYXJ0RGF0YSB7XG4gIC8qKlxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGJ1YmJsZS1jaGFydFxuICAgKi9cbiAgY29udGFpbmVySWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIHRvdGFsIHdpZHRoIGZvciB0aGUgYnViYmxlLWNoYXJ0XG4gICAqL1xuICBjb250YWluZXJXaWR0aDogbnVtYmVyO1xuICAvKipcbiAgICogdG90YWwgaGVpZ2h0IGZvciB0aGUgYnViYmxlLWNoYXJ0XG4gICAqL1xuICBjb250YWluZXJIZWlnaHQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIGRhdGEgYWJvdXQgdGhlIGJ1YmJsZXNcbiAgICovXG4gIGJ1YmJsZXNEYXRhOiBJQnViYmxlRGF0YVtdO1xuICAvKipcbiAgICogd2hldGhlciB0aGUgZm9yY2Ugc2ltdWxhdGlvbiBzaG91bGQgYmUgZW5hYmxlZCBvciBub3RcbiAgICogKGRvIHRoZSBidWJibGVzJyBwb3NpdGlvbnMgXCJhZGFwdFwiIHRvIHRoZSBjb250YWluZXIgb3Igbm90PylcbiAgICovXG4gIGlzRm9yY2VTaW11bGF0aW9uRW5hYmxlZDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIG9wdGlvbnMgZm9yIHRoZSBmb3JjZSBzaW11bGF0aW9uIChpZ25vcmVkIGlmIGlzRm9yY2VTaW11bGF0aW9uRW5hYmxlZCBpcyBmYWxzZSlcbiAgICovXG4gIGZvcmNlU2ltdWxhdGlvbkRhdGE/OiBJQnViYmxlQ2hhcnRGb3JjZVNpbXVsYXRpb25EYXRhO1xuICAvKipcbiAgICogY2FsbGJhY2sgZm9yIHNhdmluZyB0aGUgY3JlYXRlZCBidWJibGUtY2hhcnQgaW5zdGFuY2VcbiAgICovXG4gIHNldEJ1YmJsZUNoYXJ0Pzphbnk7XG4gICAgLyoqXG4gICAqIGNhbGxiYWNrIGZvciBzYXZpbmcgdGhlIHJlc2V0IGZ1bmN0aW9uIG5lZWRlZCBmb3IgdmlzdWFsbHkgcmVzZXR0aW5nIHRoZSBjaGFydFxuICAgKi9cbiAgc2V0UmVzZXRSZWZlcmVuY2U/OiBhbnk7XG4gIC8qKlxuICAgKiBjYWxsYmFjayBmb3Igc2F2aW5nIHRoZSB1cGRhdGUgZnVuY3Rpb24gbmVlZGVkIGZvciB2aXN1YWxseSB1cGRhdGluZyB0aGUgY2hhcnRcbiAgICovXG4gIHNldFVwZGF0ZVJlZmVyZW5jZT86IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgY3NzIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG59XG5cblxuXG5cblxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgQnViYmxlQ2hhcnRDb21wb25lbnQncyBzaW11bGF0aW9uIFwiZGF0YVwiXG4gKiAoYWxsIHRoZSBwcm9wZXJ0aWVzIGFyZSBvcHRpb25hbHMgYW5kIGlmIG5vdCBwcm92aWRlZFxuICogYSBkZWZhdWx0IHZhbHVlIGlzIHVzZWQgaW5zdGVhZClcbiAqIFxuICogQHByb3BlcnR5IHhQdWxsIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB4UHVsbFN0cmVuZ3RoIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB5UHVsbCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgeVB1bGxTdHJlbmd0aCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY29sbGlzaW9uU3RyZW5naCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY29sbGlzaW9uSXRlcmF0aW9ucyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdmVsb2NpdHlEZWNheSAob3B0aW9uYWwpXG4qL1xuZXhwb3J0IGludGVyZmFjZSBJQnViYmxlQ2hhcnRGb3JjZVNpbXVsYXRpb25EYXRhIHtcbiAgLyoqXG4gICAqIHgtY29vcmRpbmF0ZSB0byB3aGljaCB0aGUgYnViYmxlcyBhcmUgcHVsbGVkIHRvXG4gICAqL1xuICB4UHVsbD86IG51bWJlcjtcbiAgLyoqXG4gICAqIHN0cmVuZ3RoIGZvciB0aGUgcHVsbCB0b3dhcmQgdGhlIHhQdWxsIHgtY29vcmRpbmF0ZVxuICAgKi9cbiAgeFB1bGxTdHJlbmd0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIHktY29vcmRpbmF0ZSB0byB3aGljaCB0aGUgYnViYmxlcyBhcmUgcHVsbGVkIHRvXG4gICAqL1xuICB5UHVsbD86IG51bWJlcjtcbiAgLyoqXG4gICAqIHN0cmVuZ3RoIGZvciB0aGUgcHVsbCB0b3dhcmQgdGhlIHlQdWxsIHktY29vcmRpbmF0ZVxuICAgKi9cbiAgeVB1bGxTdHJlbmd0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIHN0cmVuZ3RoIG9mIGJ1YmJsZSdzIGNvbGxpc2lvblxuICAgKi9cbiAgY29sbGlzaW9uU3RyZW5naD86IG51bWJlcjtcbiAgLyoqXG4gICAqIG51bWJlciBvZiBpdGVyYXRpb25zIGluIHRoZSBidWJibGUncyBjb2xsaXNpb24gZGV0ZWN0aW9uXG4gICAqICh0aGUgaGlnaGVyIHRoZSBudW1iZXIgdGhlIG1vcmUgcHJlY2lzZSBhbmQgY29zdGx5IHRoZSBkZXRlY3Rpb24pXG4gICAqL1xuICBjb2xsaXNpb25JdGVyYXRpb25zPzogbnVtYmVyO1xuICAvKipcbiAgICogaW5kaWNhdG9yIG9uIGhvdyBmYXN0IHRoZSBidWJibGUncyB2ZWxvY2l0eSBkZWNyZWFzZXNcbiAgICovXG4gIHZlbG9jaXR5RGVjYXk/OiBudW1iZXI7XG59XG5cblxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgYSBidWJibGUncyB0ZXh0XG4gKlxuICogQHByb3BlcnR5IGlkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBsYWJlbCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgeF9mdW5jdGlvbiAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgeV9mdW5jdGlvbiAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgZm9udFNpemVfZnVuY3Rpb24gKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNvbG9yIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqXG4qL1xuZXhwb3J0IGludGVyZmFjZSBJQnViYmxlVGV4dCB7XG4gIC8qKlxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIHRleHRcbiAgICovXG4gIGlkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aGUgYWN0dWFsIHRleHRcbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBmdW5jdGlvbiB1c2VkIHRvIHNwZWNpZnkgdGhlIHggcG9zaXRpb24gdGhlIHRleHRcbiAgICogKGNhbiBkZXBlbmQgb24gdGhlIGJ1YmJsZSdzIHgtcG9zaXRpb24sIHJhZGl1cywgZXRjLi4uKVxuICAgKi9cbiAgeF9mdW5jdGlvbjogYW55O1xuICAvKipcbiAgICogZnVuY3Rpb24gdXNlZCB0byBzcGVjaWZ5IHRoZSB5IHBvc2l0aW9uIHRoZSB0ZXh0XG4gICAqIChjYW4gZGVwZW5kIG9uIHRoZSBidWJibGUncyB5LXBvc2l0aW9uLCByYWRpdXMsIGV0Yy4uLilcbiAgICovXG4gIHlfZnVuY3Rpb246IGFueTtcbiAgLyoqXG4gICAqIGZ1bmN0aW9uIHVzZWQgdG8gc3BlY2lmeSB0aGUgZm9udCBzaXplIG9mIHRoZSB0ZXh0XG4gICAqIChjYW4gZGVwZW5kIG9uIHRoZSBidWJibGUncyByYWRpdXMsIHJldHVybiBhIGNvbnN0YW50IG51bWJlciwgZXRjLi4uKVxuICAgKi9cbiAgZm9udFNpemVfZnVuY3Rpb246IGFueTtcbiAgLyoqXG4gICAqIGNvbG9yIG9mIHRoZSB0ZXh0XG4gICAqL1xuICBjb2xvcjogc3RyaW5nO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBjc3MgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbn1cblxuXG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBhIHNpbmdsZSBidWJibGVcbiAqXG4gKiBAcHJvcGVydHkgaWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHggKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHkgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHJhZGl1cyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY29sb3IgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGhhc0Nsb3NlSWNvbiAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdGV4dHMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICpcbiovXG5leHBvcnQgaW50ZXJmYWNlIElCdWJibGVEYXRhIHtcbiAgLyoqXG4gICAqIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgYnViYmxlXG4gICAqL1xuICBpZDogc3RyaW5nO1xuICAvKipcbiAgICogdGhlIGJ1YmJsZSdzIChzdGFydGluZykgeC1jb29yZGluYXRlXG4gICAqL1xuICB4PzogbnVtYmVyO1xuICAvKipcbiAgICogdGhlIGJ1YmJsZSdzIChzdGFydGluZykgeS1jb29yZGluYXRlXG4gICAqL1xuICB5PzogbnVtYmVyO1xuICAvKipcbiAgICogdGhlIGJ1YmJsZXMgcmFkaXVzXG4gICAqL1xuICByYWRpdXM6IG51bWJlcjtcbiAgLyoqXG4gICAqIHRoZSBidWJibGUncyBjb2xvclxuICAgKi9cbiAgY29sb3I6IHN0cmluZztcbiAgLyoqXG4gICAqIHdoZXRoZXIgdGhlIGJ1YmJsZSBoYXMgYSBjbG9zZSBidXR0b25cbiAgICogKGNvbnNpZGVyZWQgZmFsc2UgaWYgbm90IHByb3ZpZGVkKVxuICAgKi9cbiAgaGFzQ2xvc2VJY29uPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgICovXG4gIHBheWxvYWQ/OiBhbnk7XG4gIC8qKlxuICAgKiBhbGwgdGhlIGJ1YmJsZSdzIHRleHRzXG4gICAqL1xuICB0ZXh0cz86IElCdWJibGVUZXh0W107XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGNzcyBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1idWJibGUtY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYnViYmxlLWNoYXJ0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEJ1YmJsZUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG4gIEBJbnB1dCgpIGRhdGE6IElCdWJibGVDaGFydERhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcbiAgcHJpdmF0ZSBfbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCl7XG4gICAgaWYoIXRoaXMuZGF0YSB8fCB0aGlzLl9sb2FkZWQpIHJldHVybjtcbiAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xuICAgIGlmKHRoaXMuZGF0YS5zZXRSZXNldFJlZmVyZW5jZSlcbiAgICAgIHRoaXMuZGF0YS5zZXRSZXNldFJlZmVyZW5jZSh0aGlzLnJlc2V0QnViYmxlcyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm1ha2VCdWJibGVDaGFydCgpKTtcbn1cblxuICBwcml2YXRlIGJ1YmJsZXMgPSBudWxsO1xuICBwcml2YXRlIGdlbmVyaWNCdWJibGUgPSBudWxsO1xuICBwcml2YXRlIGJ1YmJsZUNoYXJ0ID0gbnVsbDtcblxuICAvKiogTWFrZXMgdGhlIHdob2xlIGJ1YmJsZSBjaGFydCAqL1xuICBwcml2YXRlIG1ha2VCdWJibGVDaGFydCgpe1xuICAgIGQzX3NlbGVjdGlvbi5zZWxlY3QoYCMke3RoaXMuZGF0YS5jb250YWluZXJJZH1gKS5zZWxlY3RBbGwoXCIqXCIpLnJlbW92ZSgpO1xuXHQgIHZhciBwb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmRhdGEuY29udGFpbmVySWR9YCk7XG4gICAgcG90LnN0eWxlLndpZHRoID0gdGhpcy5kYXRhLmNvbnRhaW5lcldpZHRoKydweCc7XG4gICAgcG90LnN0eWxlLmhlaWdodCA9IHRoaXMuZGF0YS5jb250YWluZXJIZWlnaHQrJ3B4JztcblxuICAgIHRoaXMuYnViYmxlQ2hhcnQgPSBkM19zZWxlY3Rpb24uc2VsZWN0KGAjJHt0aGlzLmRhdGEuY29udGFpbmVySWR9YClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCdzdmcnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMuZGF0YS5jb250YWluZXJXaWR0aClcbiAgICAgICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgdGhpcy5kYXRhLmNvbnRhaW5lckhlaWdodCk7XG5cbiAgICB0aGlzLmJ1YmJsZXMgPSB0aGlzLmRhdGEuYnViYmxlc0RhdGE7XG5cbiAgICB0aGlzLmluaXRCdWJibGVzKCk7XG5cbiAgICBpZih0aGlzLmRhdGEuaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkKVxuICAgICAgdGhpcy5zZXRCdWJibGVDaGFydFNpbXVsYXRpb24oKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICBpZih0aGlzLmRhdGEuc2V0QnViYmxlQ2hhcnQpXG4gICAgICB0aGlzLmRhdGEuc2V0QnViYmxlQ2hhcnQodGhpcy5idWJibGVDaGFydCk7XG5cbiAgICBpZih0aGlzLmJ1YmJsZUNoYXJ0KVxuICAgICAgdGhpcy5idWJibGVDaGFydC5zZWxlY3RBbGwoYCMke3RoaXMuZGF0YS5jb250YWluZXJJZH0gZyBjaXJjbGUsICMke3RoaXMuZGF0YS5jb250YWluZXJJZH0gZyB0ZXh0YCkub24oJ2NsaWNrJywgKGQpID0+IHtcbiAgICAgICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmVtaXQoJ2NsaWNrJyx7c291cmNlOlwiYnViYmxlXCIsYnViYmxlUGF5bG9hZDogZC5wYXlsb2FkfSk7XG4gICAgfSk7XG5cbiAgICBpZih0aGlzLmJ1YmJsZUNoYXJ0KVxuICAgICAgdGhpcy5idWJibGVDaGFydC5zZWxlY3RBbGwoJ2NpcmNsZVtidWJibGVzVHlwZT1cInhfaW5uZXJfY2lyY2xlXCJdLCB0ZXh0W2J1YmJsZXNUeXBlPVwieF9pbm5lcl9sYWJlbFwiXScpLm9uKCdjbGljaycsIChkKSA9PiB7XG4gICAgICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICAgICAgaWYoZC5oYXNDbG9zZUljb24pXG4gICAgICAgICAgdGhpcy5lbWl0KCdjbGljaycse3NvdXJjZTpcImNsb3NlXCIsYnViYmxlUHlsb2FkOiBkLnBheWxvYWR9KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHRoaXMuZW1pdCgnY2xpY2snLHtzb3VyY2U6XCJidWJibGVcIixidWJibGVQeWxvYWQ6IGQucGF5bG9hZH0pO1xuICAgIH0pO1xuXG4gICAgaWYodGhpcy5kYXRhLnNldFVwZGF0ZVJlZmVyZW5jZSlcbiAgICAgIHRoaXMuZGF0YS5zZXRVcGRhdGVSZWZlcmVuY2UodGhpcy51cGRhdGUpO1xuICB9XG5cbiAgcHVibGljIHJlc2V0QnViYmxlcygpe1xuICAgIHRoaXMuX2xvYWRlZD1mYWxzZTtcbiAgfVxuXG4gIC8qKiBWaXN1YWxseSB1cGRhdGVzIHRoZSBidWJibGUgY2hhcnQgKi9cbiAgcHVibGljIHVwZGF0ZSgpIHtcblxuICAgIGlmKHRoaXMuZ2VuZXJpY0J1YmJsZSAmJiB0aGlzLmdlbmVyaWNCdWJibGUuYXR0cil7XG4gICAgICB0aGlzLmdlbmVyaWNCdWJibGUuYXR0cignY3gnLCAoZCkgPT4geyByZXR1cm4gZC54ID0gTWF0aC5tYXgoZC5yYWRpdXMsIE1hdGgubWluKHRoaXMuZGF0YS5jb250YWluZXJXaWR0aCAtIGQucmFkaXVzLCBkLngpKTsgfSlcbiAgICAgICAgLmF0dHIoJ2N5JywgKGQpID0+IHsgcmV0dXJuIGQueSA9IE1hdGgubWF4KGQucmFkaXVzLCBNYXRoLm1pbih0aGlzLmRhdGEuY29udGFpbmVySGVpZ2h0IC0gZC5yYWRpdXMsIGQueSkpOyB9KTtcbiAgICB9XG5cbiAgICBpZih0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmJ1YmJsZXNEYXRhKVxuICAgICAgdGhpcy5kYXRhLmJ1YmJsZXNEYXRhLmZvckVhY2goIChjKSA9PiB7XG4gICAgICAgICAgYy50ZXh0cy5mb3JFYWNoKCB0eCA9PiB7XG4gICAgICAgICAgICAgIHZhciB0eHQgPSB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdChgdGV4dFtidWJibGVzRWxJZD0ke3R4LmlkfV1gKTtcbiAgICAgICAgICAgICAgdHh0LmF0dHIoXCJkeVwiLCB0eC55X2Z1bmN0aW9uICk7XG4gICAgICAgICAgICAgIHR4dC5hdHRyKFwiZHhcIiwgdHgueF9mdW5jdGlvbiApO1xuICAgICAgICAgIH0pXG4gICAgICB9KTtcblxuICAgIGlmKHRoaXMuYnViYmxlQ2hhcnQpe1xuICAgICAgdGhpcy5idWJibGVDaGFydC5zZWxlY3RBbGwoJ2NpcmNsZVtidWJibGVzVHlwZT1cInhfaW5uZXJfY2lyY2xlXCJdJylcbiAgICAgIC5hdHRyKFwiY3lcIiwgKGQpID0+IGQueSsoZC5yYWRpdXMvMikgKVxuICAgICAgLmF0dHIoXCJjeFwiLCAoZCkgPT4gZC54IClcbiAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCAoZCkgPT4gKCBkLmhhc0Nsb3NlSWNvbiA/IDEgOiAwICkgKTtcbiAgICB9XG5cbiAgICBpZih0aGlzLmJ1YmJsZUNoYXJ0KXtcbiAgICAgIHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0QWxsKCd0ZXh0W2J1YmJsZXNUeXBlPVwieF9pbm5lcl9sYWJlbFwiXScpXG4gICAgICAuYXR0cihcImR5XCIsIChkKSA9PiBkLnkrKGQucmFkaXVzLzIpKzYgKVxuICAgICAgLmF0dHIoXCJkeFwiLCAoZCkgPT4gZC54IClcbiAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCAoZCkgPT4gKCBkLmhhc0Nsb3NlSWNvbiA/IDEgOiAwICkgKTtcbiAgICB9XG5cbiAgfVxuXG5cblxuICAvKiogSW5pdGlhbGl6ZWQgdGhlIGNoYXJ0J3MgYnViYmxlcyAqL1xuICBwcml2YXRlIGluaXRCdWJibGVzKCk6IHZvaWQge1xuXG4gICAgaWYodGhpcy5idWJibGVDaGFydClcbiAgICAgIHRoaXMuZ2VuZXJpY0J1YmJsZSA9IHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0QWxsKGAjJHt0aGlzLmRhdGEuY29udGFpbmVySWR9IGdgKVxuICAgICAgICAuZGF0YSh0aGlzLmJ1YmJsZXMpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cihcImJ1YmJsZXNFbElkXCIsKGQpPT5kLmlkKVxuICAgICAgICAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAuYXR0cigncicsIChkKSA9PiBNYXRoLm1heCgwLCBkLnJhZGl1cyAtIDUuMDUpIClcbiAgICAgICAgLmF0dHIoXCJjeFwiLCAoZCk9PmQueClcbiAgICAgICAgLmF0dHIoXCJjeVwiLCAoZCk9PmQueSlcbiAgICAgICAgLmF0dHIoJ3BhZGRpbmcnLCAoZCkgPT4gNTAgKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsKGQpPT5kLmNsYXNzZXMgKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoZCkgPT4gZC5jb2xvciApO1xuXG4gICAgaWYodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5idWJibGVzRGF0YSAmJiB0aGlzLmJ1YmJsZUNoYXJ0KVxuICAgICAgdGhpcy5kYXRhLmJ1YmJsZXNEYXRhLmZvckVhY2goIChjKSA9PiB7XG4gICAgICAgIGxldCBncm91cCA9IHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0KGBnW2J1YmJsZXNFbElkPSR7Yy5pZH1dYCk7XG4gICAgICAgIGMudGV4dHMuZm9yRWFjaCggdHggPT4ge1xuICAgICAgICAgIGdyb3VwLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAgIC5hdHRyKFwiZHhcIiwgdHgueF9mdW5jdGlvbiApXG4gICAgICAgICAgLmF0dHIoXCJkeVwiLCB0eC55X2Z1bmN0aW9uIClcbiAgICAgICAgICAudGV4dCh0eC5sYWJlbClcbiAgICAgICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCB0eC5mb250U2l6ZV9mdW5jdGlvbilcbiAgICAgICAgICAuYXR0cihcImZpbGxcIiwgdHguY29sb3IpXG4gICAgICAgICAgLmF0dHIoXCJidWJibGVzRWxJZFwiLHR4LmlkKVxuICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIix0eC5jbGFzc2VzKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZih0aGlzLmJ1YmJsZUNoYXJ0KVxuICAgICAgdGhpcy5idWJibGVDaGFydC5zZWxlY3RBbGwoYCMke3RoaXMuZGF0YS5jb250YWluZXJJZH0gZ2ApXG4gICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgIC5hdHRyKCAncicsIChkKSA9PiAxMCApXG4gICAgICAgIC5hdHRyKCAncGFkZGluZycsIChkKSA9PiA1MCApXG4gICAgICAgIC5zdHlsZSggJ2ZpbGwnLCBcIndoaXRlXCIgKVxuICAgICAgICAuYXR0ciggJ2N4JywgKGQpID0+IGQueCApXG4gICAgICAgIC5hdHRyKCAnY3knLCAoZCkgPT4gZC55IClcbiAgICAgICAgLmF0dHIoIFwiYnViYmxlc1R5cGVcIixcInhfaW5uZXJfY2lyY2xlXCIpXG4gICAgICAgIC5hdHRyKCBcImNsYXNzXCIsXCJjaXJjbGVfeC1pbm5lci1jaXJjbGVcIik7XG5cbiAgICBpZih0aGlzLmJ1YmJsZUNoYXJ0KVxuICAgICAgdGhpcy5idWJibGVDaGFydC5zZWxlY3RBbGwoYCMke3RoaXMuZGF0YS5jb250YWluZXJJZH0gZ2ApXG4gICAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgIC5zdHlsZShcInVzZXItc2VsZWN0XCIsXCJub25lXCIpXG4gICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLFwiYmxhY2tcIilcbiAgICAgICAgLmh0bWwoXCImIzEwMDA1O1wiKVxuICAgICAgICAuYXR0cihcImZvbnQtZmFtaWx5XCIsIFwic2Fucy1zZXJpZlwiKVxuICAgICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLDE1KVxuICAgICAgICAuYXR0cihcImJ1YmJsZXNUeXBlXCIsXCJ4X2lubmVyX2xhYmVsXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIixcImNpcmNsZV94LWxhYmVsXCIpO1xuXG4gIH1cblxuXG5cbiAgLyoqIFNldHMgdGhlIGJ1YmJsZSBjaGFydCBmb3JjZSBzaW11bGF0aW9uICovXG4gIHByaXZhdGUgc2V0QnViYmxlQ2hhcnRTaW11bGF0aW9uKCl7XG4gICAgbGV0IHRtcFNpbXVsYXRpb25EYXRhID0gKCB0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmZvcmNlU2ltdWxhdGlvbkRhdGEgPyB0aGlzLmRhdGEuZm9yY2VTaW11bGF0aW9uRGF0YSA6IHt9ICk7XG4gICAgdmFyIHhQdWxsID0gKCB0bXBTaW11bGF0aW9uRGF0YVsneFB1bGwnXSA/IHRtcFNpbXVsYXRpb25EYXRhWyd4UHVsbCddIDogdGhpcy5kYXRhLmNvbnRhaW5lcldpZHRoLzIgKTtcbiAgICB2YXIgeFB1bGxTdHJlbmd0aCA9ICggdG1wU2ltdWxhdGlvbkRhdGFbJ3hQdWxsU3RyZW5ndGgnXSA/IHRtcFNpbXVsYXRpb25EYXRhWyd4UHVsbFN0cmVuZ3RoJ10gOiAtMC4wMSApO1xuICAgIHZhciB5UHVsbCA9ICggdG1wU2ltdWxhdGlvbkRhdGFbJ3lQdWxsJ10gPyB0bXBTaW11bGF0aW9uRGF0YVsneVB1bGwnXSA6IHRoaXMuZGF0YS5jb250YWluZXJIZWlnaHQvMiApO1xuICAgIHZhciB5UHVsbFN0cmVuZ3RoID0gKCB0bXBTaW11bGF0aW9uRGF0YVsneVB1bGxTdHJlbmd0aCddID8gdG1wU2ltdWxhdGlvbkRhdGFbJ3lQdWxsU3RyZW5ndGgnXSA6IC0wLjAxICk7XG4gICAgdmFyIGNvbGxpc2lvblN0cmVuZ3RoID0gKCB0bXBTaW11bGF0aW9uRGF0YVsnY29sbGlzaW9uU3RyZW5naCddID8gdG1wU2ltdWxhdGlvbkRhdGFbJ2NvbGxpc2lvblN0cmVuZ2gnXSA6IDAuOTkgKTtcbiAgICB2YXIgY29sbGlzaW9uSXRlcmF0aW9ucyA9ICggdG1wU2ltdWxhdGlvbkRhdGFbJ2NvbGxpc2lvbkl0ZXJhdGlvbnMnXSA/IHRtcFNpbXVsYXRpb25EYXRhWydjb2xsaXNpb25JdGVyYXRpb25zJ10gOiAxICk7XG4gICAgdmFyIHZlbG9jaXR5RGVjYXkgPSAoIHRtcFNpbXVsYXRpb25EYXRhWyd2ZWxvY2l0eURlY2F5J10gPyB0bXBTaW11bGF0aW9uRGF0YVsndmVsb2NpdHlEZWNheSddIDogMC45OSApO1xuICAgIGQzX2ZvcmNlLmZvcmNlU2ltdWxhdGlvbigpXG4gICAgICAudmVsb2NpdHlEZWNheSh2ZWxvY2l0eURlY2F5KVxuICAgICAgLmZvcmNlKFwieFwiLCBkM19mb3JjZS5mb3JjZVgoeFB1bGwpLnN0cmVuZ3RoKHhQdWxsU3RyZW5ndGgpKVxuICAgICAgLmZvcmNlKFwieVwiLCBkM19mb3JjZS5mb3JjZVkoeVB1bGwpLnN0cmVuZ3RoKHlQdWxsU3RyZW5ndGgpKVxuICAgICAgLmZvcmNlKFwiY29sbGlkZVwiLCBkM19mb3JjZS5mb3JjZUNvbGxpZGUoKS5yYWRpdXMoKGQpPT5kLnJhZGl1cykuc3RyZW5ndGgoY29sbGlzaW9uU3RyZW5ndGgpLml0ZXJhdGlvbnMoY29sbGlzaW9uSXRlcmF0aW9ucykpXG4gICAgICAubm9kZXModGhpcy5idWJibGVzKVxuICAgICAgLm9uKCd0aWNrJywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gIH1cblxuXG5cbn0iXX0=