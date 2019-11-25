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
                _this.emit('mouseenter', { bubblePayload: d.payload, bubble: d });
            }));
            this.bubbleChart.selectAll("#" + this.data.containerId + " g").on('mouseleave', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                if (!_this.emit)
                    return;
                _this.emit('mouseleave', { bubblePayload: d.payload, bubble: d });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQvYnViYmxlLWNoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxLQUFLLFlBQVksTUFBTSxjQUFjLENBQUM7OztBQUc3QyxPQUFPLEtBQUssUUFBUSxNQUFNLFVBQVUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWFyQyxzQ0EwQ0M7Ozs7OztJQXRDQyx1Q0FBb0I7Ozs7O0lBSXBCLDBDQUF1Qjs7Ozs7SUFJdkIsMkNBQXdCOzs7OztJQUl4Qix1Q0FBMkI7Ozs7OztJQUszQixvREFBa0M7Ozs7O0lBSWxDLCtDQUFzRDs7Ozs7SUFJdEQsbUNBQWlCOzs7OztJQUlqQixpQ0FBZTs7Ozs7SUFJZiw4Q0FBeUI7Ozs7O0lBSXpCLDBDQUFxQjs7Ozs7Ozs7Ozs7Ozs7OztBQWdCdkIscURBOEJDOzs7Ozs7SUExQkMsZ0RBQWU7Ozs7O0lBSWYsd0RBQXVCOzs7OztJQUl2QixnREFBZTs7Ozs7SUFJZix3REFBdUI7Ozs7O0lBSXZCLDJEQUEwQjs7Ozs7O0lBSzFCLDhEQUE2Qjs7Ozs7SUFJN0Isd0RBQXVCOzs7Ozs7Ozs7Ozs7Ozs7QUFlekIsaUNBZ0NDOzs7Ozs7SUE1QkMseUJBQVc7Ozs7O0lBSVgsNEJBQWM7Ozs7OztJQUtkLGlDQUFnQjs7Ozs7O0lBS2hCLGlDQUFnQjs7Ozs7O0lBS2hCLHdDQUF1Qjs7Ozs7SUFJdkIsNEJBQWM7Ozs7O0lBSWQsOEJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCbkIsaUNBcUNDOzs7Ozs7SUFqQ0MseUJBQVc7Ozs7O0lBSVgsd0JBQVc7Ozs7O0lBSVgsd0JBQVc7Ozs7O0lBSVgsNkJBQWU7Ozs7O0lBSWYsNEJBQWM7Ozs7O0lBSWQsbUNBQXVCOzs7OztJQUl2Qiw4QkFBYzs7Ozs7SUFJZCw0QkFBc0I7Ozs7O0lBSXRCLDhCQUFpQjs7QUFHbkI7SUFBQTtRQU9VLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFpQnpCLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixnQkFBVyxHQUFHLElBQUksQ0FBQztJQXdLN0IsQ0FBQzs7OztJQXpMQyxvREFBcUI7OztJQUFyQjtRQUFBLGlCQWFEO1FBWkcsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN0QixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFHLElBQUksRUFBQztZQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBQyxLQUFLLENBQUM7U0FDcEI7UUFDRCxJQUFHLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixVQUFVOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWUsRUFBRSxFQUF0QixDQUFzQixFQUFDLENBQUM7UUFFekMsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQjtZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFM0QsQ0FBQztJQU1DLG1DQUFtQzs7Ozs7SUFDNUIsOENBQWU7Ozs7SUFBdEI7UUFBQSxpQkFnREM7UUEvQ0MsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBYSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDOztZQUN4RSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBYSxDQUFDO1FBQzFELEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFDLElBQUksQ0FBQztRQUNoRCxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBQyxJQUFJLENBQUM7UUFFbEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFhLENBQUM7YUFDdEQsTUFBTSxDQUFDLEtBQUssQ0FBQzthQUNiLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7YUFDdkMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRXZELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFFckMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRW5CLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyx3QkFBd0I7WUFDbkMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFFbEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWQsSUFBRyxJQUFJLENBQUMsV0FBVyxFQUFDO1lBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLG9CQUFlLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxZQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTzs7OztZQUFFLFVBQUMsQ0FBQztnQkFDL0csSUFBRyxDQUFDLEtBQUksQ0FBQyxJQUFJO29CQUFFLE9BQU87Z0JBQ3RCLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUM1RSxDQUFDLEVBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLCtEQUErRCxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU87Ozs7WUFBRSxVQUFDLENBQUM7Z0JBQ3BHLElBQUcsQ0FBQyxDQUFDLFlBQVksRUFBQztvQkFDaEIsSUFBRyxDQUFDLEtBQUksQ0FBQyxJQUFJO3dCQUFFLE9BQU87b0JBQ3RCLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztpQkFDMUU7cUJBQU07b0JBQ0wsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO2lCQUMzRTtZQUNQLENBQUMsRUFBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsT0FBSSxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQVk7Ozs7WUFBRSxVQUFDLENBQUM7Z0JBQzNFLElBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSTtvQkFBRSxPQUFPO2dCQUN0QixLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBQyxFQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ2hFLENBQUMsRUFBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsT0FBSSxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQVk7Ozs7WUFBRSxVQUFDLENBQUM7Z0JBQzNFLElBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSTtvQkFBRSxPQUFPO2dCQUN0QixLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBQyxFQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ2hFLENBQUMsRUFBQyxDQUFDO1NBQ047UUFFRCxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYztZQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELHdDQUF3Qzs7Ozs7SUFDakMscUNBQU07Ozs7SUFBYjtRQUFBLGlCQStCQztRQTlCQyxJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBQztZQUMvQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJOzs7O1lBQUUsVUFBQyxDQUFDLElBQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUM7aUJBQzNILElBQUksQ0FBQyxJQUFJOzs7O1lBQUUsVUFBQyxDQUFDLElBQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztTQUNqSDtRQUVELElBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTzs7OztZQUFFLFVBQUMsQ0FBQztnQkFDN0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O2dCQUFFLFVBQUEsRUFBRTs7d0JBQ1gsR0FBRyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLGFBQVcsRUFBRSxDQUFDLEVBQUUsTUFBRyxDQUFDO29CQUN0RCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFFLENBQUM7b0JBQy9CLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUUsQ0FBQztnQkFDbkMsQ0FBQyxFQUFDLENBQUE7WUFDTixDQUFDLEVBQUMsQ0FBQztRQUVMLElBQUcsSUFBSSxDQUFDLFdBQVcsRUFBQztZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxpQ0FBaUMsQ0FBQztpQkFDNUQsSUFBSSxDQUFDLElBQUk7Ozs7WUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxFQUFoQixDQUFnQixFQUFFO2lCQUNwQyxJQUFJLENBQUMsSUFBSTs7OztZQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLENBQUMsRUFBSCxDQUFHLEVBQUU7aUJBQ3ZCLElBQUksQ0FBQyxTQUFTOzs7O1lBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLEVBQTFCLENBQTBCLEVBQUUsQ0FBQztTQUN0RDtRQUVELElBQUcsSUFBSSxDQUFDLFdBQVcsRUFBQztZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQztpQkFDekQsSUFBSSxDQUFDLElBQUk7Ozs7WUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsRUFBbEIsQ0FBa0IsRUFBRTtpQkFDdEMsSUFBSSxDQUFDLElBQUk7Ozs7WUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxDQUFDLEVBQUgsQ0FBRyxFQUFFO2lCQUN2QixJQUFJLENBQUMsU0FBUzs7OztZQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxFQUExQixDQUEwQixFQUFFLENBQUM7U0FDdEQ7SUFFSCxDQUFDO0lBRUQsc0NBQXNDOzs7Ozs7SUFDOUIsMENBQVc7Ozs7O0lBQW5CO1FBQUEsaUJBc0RDO1FBcERDLElBQUcsSUFBSSxDQUFDLFdBQVc7WUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxPQUFJLENBQUM7aUJBQzNFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2lCQUNsQixLQUFLLEVBQUU7aUJBQ1AsTUFBTSxDQUFDLEdBQUcsQ0FBQztpQkFDWCxJQUFJLENBQUMsSUFBSTs7OztZQUFDLFVBQUMsQ0FBQyxJQUFHLE9BQUEsQ0FBQyxDQUFDLEVBQUUsRUFBSixDQUFJLEVBQUM7aUJBQ3BCLE1BQU0sQ0FBQyxRQUFRLENBQUM7aUJBQ2hCLElBQUksQ0FBQyxHQUFHOzs7O1lBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUE1QixDQUE0QixFQUFFO2lCQUMvQyxJQUFJLENBQUMsSUFBSTs7OztZQUFFLFVBQUMsQ0FBQyxJQUFHLE9BQUEsQ0FBQyxDQUFDLENBQUMsRUFBSCxDQUFHLEVBQUM7aUJBQ3BCLElBQUksQ0FBQyxJQUFJOzs7O1lBQUUsVUFBQyxDQUFDLElBQUcsT0FBQSxDQUFDLENBQUMsQ0FBQyxFQUFILENBQUcsRUFBQztpQkFDcEIsSUFBSSxDQUFDLFNBQVM7Ozs7WUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLEVBQUUsRUFBRixDQUFFLEVBQUU7aUJBQzNCLElBQUksQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxDQUFDLElBQUcsT0FBQSxDQUFDLENBQUMsT0FBTyxFQUFULENBQVMsRUFBRTtpQkFDN0IsS0FBSyxDQUFDLE1BQU07Ozs7WUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxFQUFFLENBQUM7UUFFcEMsSUFBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXO1lBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU87Ozs7WUFBRSxVQUFDLENBQUM7O29CQUMzQixLQUFLLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBUSxDQUFDLENBQUMsRUFBRSxNQUFHLENBQUM7Z0JBQ3BELENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztnQkFBRSxVQUFBLEVBQUU7b0JBQ2pCLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO3lCQUNuQixLQUFLLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQzt5QkFDOUIsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFFO3lCQUMxQixJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUU7eUJBQzFCLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3lCQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLGlCQUFpQixDQUFDO3lCQUN2QyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUM7eUJBQ3RCLElBQUksQ0FBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQzt5QkFDaEIsSUFBSSxDQUFDLE9BQU8sRUFBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzVCLENBQUMsRUFBQyxDQUFDO1lBQ1AsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFHLElBQUksQ0FBQyxXQUFXO1lBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLE9BQUksQ0FBQztpQkFDdEQsTUFBTSxDQUFDLFFBQVEsQ0FBQztpQkFDaEIsSUFBSSxDQUFFLEdBQUc7Ozs7WUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLEVBQUUsRUFBRixDQUFFLEVBQUU7aUJBQ3RCLElBQUksQ0FBRSxTQUFTOzs7O1lBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxFQUFFLEVBQUYsQ0FBRSxFQUFFO2lCQUM1QixLQUFLLENBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBRTtpQkFDeEIsSUFBSSxDQUFFLElBQUk7Ozs7WUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxDQUFDLEVBQUgsQ0FBRyxFQUFFO2lCQUN4QixJQUFJLENBQUUsSUFBSTs7OztZQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLENBQUMsRUFBSCxDQUFHLEVBQUU7aUJBQ3hCLElBQUksQ0FBRSxRQUFRLEVBQUMsZ0JBQWdCLENBQUM7aUJBQ2hDLElBQUksQ0FBRSxPQUFPLEVBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUU1QyxJQUFHLElBQUksQ0FBQyxXQUFXO1lBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLE9BQUksQ0FBQztpQkFDdEQsTUFBTSxDQUFDLE1BQU0sQ0FBQztpQkFDZCxLQUFLLENBQUMsYUFBYSxFQUFDLE1BQU0sQ0FBQztpQkFDM0IsS0FBSyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUM7aUJBQzlCLElBQUksQ0FBQyxNQUFNLEVBQUMsT0FBTyxDQUFDO2lCQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDO2lCQUNoQixJQUFJLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQztpQkFDakMsSUFBSSxDQUFDLFdBQVcsRUFBQyxFQUFFLENBQUM7aUJBQ3BCLElBQUksQ0FBQyxRQUFRLEVBQUMsZUFBZSxDQUFDO2lCQUM5QixJQUFJLENBQUMsT0FBTyxFQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELDZDQUE2Qzs7Ozs7O0lBQ3JDLHVEQUF3Qjs7Ozs7SUFBaEM7O1lBQ00saUJBQWlCLEdBQUcsQ0FBRSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBRTs7WUFDdkcsS0FBSyxHQUFHLENBQUUsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBQyxDQUFDLENBQUU7O1lBQ2hHLGFBQWEsR0FBRyxDQUFFLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUU7O1lBQ25HLEtBQUssR0FBRyxDQUFFLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUMsQ0FBQyxDQUFFOztZQUNqRyxhQUFhLEdBQUcsQ0FBRSxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFFOztZQUNuRyxpQkFBaUIsR0FBRyxDQUFFLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBRTs7WUFDNUcsbUJBQW1CLEdBQUcsQ0FBRSxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUU7O1lBQ2pILGFBQWEsR0FBRyxDQUFFLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFFO1FBQ3RHLG9CQUFvQjtRQUNwQixRQUFRLENBQUMsZUFBZSxFQUFFO2FBQ3ZCLGFBQWEsQ0FBQyxhQUFhLENBQUM7YUFDNUIsS0FBSyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUMxRCxLQUFLLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzFELEtBQUssQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLENBQUMsSUFBRyxPQUFBLENBQUMsQ0FBQyxNQUFNLEVBQVIsQ0FBUSxFQUFDLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUM7YUFDM0gsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDbkIsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQ3JDLFlBQVk7UUFFWixrQ0FBa0M7UUFDbEMsc0JBQXNCO1FBQ3RCLElBQUk7SUFDTixDQUFDOztnQkFqTUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLDBJQUFrQztpQkFDbkM7Ozt1QkFFRSxLQUFLO3VCQUNMLEtBQUs7O0lBNExSLDJCQUFDO0NBQUEsQUFsTUQsSUFrTUM7U0E5TFksb0JBQW9COzs7SUFDL0Isb0NBQWdDOztJQUNoQyxvQ0FBbUI7Ozs7O0lBQ25CLHVDQUFpQzs7Ozs7SUFpQmpDLHVDQUF1Qjs7Ozs7SUFDdkIsNkNBQTZCOzs7OztJQUM3QiwyQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQlVCQkxFQ0hBUlQudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGQzX3NlbGVjdGlvbiBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG4vLyBpbXBvcnQgb25seSBmb3IgYXV0by1hbGxvY2F0aW5nIHRoZSBidWJibGVzIChuZWVkcyBoZWF2eSByZWZhY3RvcmluZyB0byB3b3JrKVxuLy9pbXBvcnQgKiBhcyBkM19oaWVyYXJjaHkgZnJvbSBcImQzLWhpZXJhcmNoeVwiO1xuaW1wb3J0ICogYXMgZDNfZm9yY2UgZnJvbSBcImQzLWZvcmNlXCI7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBCdWJibGVDaGFydENvbXBvbmVudCdzIFwiZGF0YVwiXG4gKiBcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJJZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY29udGFpbmVyV2lkdGggKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNvbnRhaW5lckhlaWdodCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgYnViYmxlc0RhdGEgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGlzRm9yY2VTaW11bGF0aW9uRW5hYmxlZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcmVzZXQgKG9wdGlvbmFsKVxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUJ1YmJsZUNoYXJ0RGF0YSB7XG4gIC8qKlxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGJ1YmJsZS1jaGFydFxuICAgKi9cbiAgY29udGFpbmVySWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIHRvdGFsIHdpZHRoIGZvciB0aGUgYnViYmxlLWNoYXJ0XG4gICAqL1xuICBjb250YWluZXJXaWR0aDogbnVtYmVyO1xuICAvKipcbiAgICogdG90YWwgaGVpZ2h0IGZvciB0aGUgYnViYmxlLWNoYXJ0XG4gICAqL1xuICBjb250YWluZXJIZWlnaHQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIGRhdGEgYWJvdXQgdGhlIGJ1YmJsZXNcbiAgICovXG4gIGJ1YmJsZXNEYXRhOiBJQnViYmxlRGF0YVtdO1xuICAvKipcbiAgICogd2hldGhlciB0aGUgZm9yY2Ugc2ltdWxhdGlvbiBzaG91bGQgYmUgZW5hYmxlZCBvciBub3RcbiAgICogKGRvIHRoZSBidWJibGVzJyBwb3NpdGlvbnMgXCJhZGFwdFwiIHRvIHRoZSBjb250YWluZXIgb3Igbm90PylcbiAgICovXG4gIGlzRm9yY2VTaW11bGF0aW9uRW5hYmxlZDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIG9wdGlvbnMgZm9yIHRoZSBmb3JjZSBzaW11bGF0aW9uIChpZ25vcmVkIGlmIGlzRm9yY2VTaW11bGF0aW9uRW5hYmxlZCBpcyBmYWxzZSlcbiAgICovXG4gIGZvcmNlU2ltdWxhdGlvbkRhdGE/OiBJQnViYmxlQ2hhcnRGb3JjZVNpbXVsYXRpb25EYXRhO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBjc3MgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIHNwZWNpZmllcyBpZiB0aGUgYnViYmxlcyBoYXZlIHRvIGJlIHJlc2V0IGZyb20gYSBwcmV2aW91cyBpbnN0YW50aWF0aW9uXG4gICAqL1xuICByZXNldD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIGNhbGxiYWNrIGZvciBzYXZpbmcgdGhlIHVwZGF0ZSBmdW5jdGlvbiBuZWVkZWQgZm9yIHZpc3VhbGx5IHVwZGF0aW5nIHRoZSBjaGFydFxuICAgKi9cbiAgc2V0VXBkYXRlUmVmZXJlbmNlPzogYW55O1xuICAvKipcbiAgICogY2FsbGJhY2sgZm9yIHNhdmluZy9nZXR0aW4gYSByZWZlcmVuY2Ugb2YgdGhlIGJ1YmJsZXMgY2hhcnQgaW5zdGFuY2VcbiAgICovXG4gIHNldEJ1YmJsZUNoYXJ0PzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgQnViYmxlQ2hhcnRDb21wb25lbnQncyBzaW11bGF0aW9uIFwiZGF0YVwiXG4gKiAoYWxsIHRoZSBwcm9wZXJ0aWVzIGFyZSBvcHRpb25hbHMgYW5kIGlmIG5vdCBwcm92aWRlZFxuICogYSBkZWZhdWx0IHZhbHVlIGlzIHVzZWQgaW5zdGVhZClcbiAqIFxuICogQHByb3BlcnR5IHhQdWxsIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB4UHVsbFN0cmVuZ3RoIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB5UHVsbCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgeVB1bGxTdHJlbmd0aCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY29sbGlzaW9uU3RyZW5naCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY29sbGlzaW9uSXRlcmF0aW9ucyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdmVsb2NpdHlEZWNheSAob3B0aW9uYWwpXG4qL1xuZXhwb3J0IGludGVyZmFjZSBJQnViYmxlQ2hhcnRGb3JjZVNpbXVsYXRpb25EYXRhIHtcbiAgLyoqXG4gICAqIHgtY29vcmRpbmF0ZSB0byB3aGljaCB0aGUgYnViYmxlcyBhcmUgcHVsbGVkIHRvXG4gICAqL1xuICB4UHVsbD86IG51bWJlcjtcbiAgLyoqXG4gICAqIHN0cmVuZ3RoIGZvciB0aGUgcHVsbCB0b3dhcmQgdGhlIHhQdWxsIHgtY29vcmRpbmF0ZVxuICAgKi9cbiAgeFB1bGxTdHJlbmd0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIHktY29vcmRpbmF0ZSB0byB3aGljaCB0aGUgYnViYmxlcyBhcmUgcHVsbGVkIHRvXG4gICAqL1xuICB5UHVsbD86IG51bWJlcjtcbiAgLyoqXG4gICAqIHN0cmVuZ3RoIGZvciB0aGUgcHVsbCB0b3dhcmQgdGhlIHlQdWxsIHktY29vcmRpbmF0ZVxuICAgKi9cbiAgeVB1bGxTdHJlbmd0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIHN0cmVuZ3RoIG9mIGJ1YmJsZSdzIGNvbGxpc2lvblxuICAgKi9cbiAgY29sbGlzaW9uU3RyZW5naD86IG51bWJlcjtcbiAgLyoqXG4gICAqIG51bWJlciBvZiBpdGVyYXRpb25zIGluIHRoZSBidWJibGUncyBjb2xsaXNpb24gZGV0ZWN0aW9uXG4gICAqICh0aGUgaGlnaGVyIHRoZSBudW1iZXIgdGhlIG1vcmUgcHJlY2lzZSBhbmQgY29zdGx5IHRoZSBkZXRlY3Rpb24pXG4gICAqL1xuICBjb2xsaXNpb25JdGVyYXRpb25zPzogbnVtYmVyO1xuICAvKipcbiAgICogaW5kaWNhdG9yIG9uIGhvdyBmYXN0IHRoZSBidWJibGUncyB2ZWxvY2l0eSBkZWNyZWFzZXNcbiAgICovXG4gIHZlbG9jaXR5RGVjYXk/OiBudW1iZXI7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBhIGJ1YmJsZSdzIHRleHRcbiAqXG4gKiBAcHJvcGVydHkgaWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGxhYmVsIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSB4X2Z1bmN0aW9uIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSB5X2Z1bmN0aW9uIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBmb250U2l6ZV9mdW5jdGlvbiAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY29sb3IgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICpcbiovXG5leHBvcnQgaW50ZXJmYWNlIElCdWJibGVUZXh0IHtcbiAgLyoqXG4gICAqIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgdGV4dFxuICAgKi9cbiAgaWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIHRoZSBhY3R1YWwgdGV4dFxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICAqIGZ1bmN0aW9uIHVzZWQgdG8gc3BlY2lmeSB0aGUgeCBwb3NpdGlvbiB0aGUgdGV4dFxuICAgKiAoY2FuIGRlcGVuZCBvbiB0aGUgYnViYmxlJ3MgeC1wb3NpdGlvbiwgcmFkaXVzLCBldGMuLi4pXG4gICAqL1xuICB4X2Z1bmN0aW9uOiBhbnk7XG4gIC8qKlxuICAgKiBmdW5jdGlvbiB1c2VkIHRvIHNwZWNpZnkgdGhlIHkgcG9zaXRpb24gdGhlIHRleHRcbiAgICogKGNhbiBkZXBlbmQgb24gdGhlIGJ1YmJsZSdzIHktcG9zaXRpb24sIHJhZGl1cywgZXRjLi4uKVxuICAgKi9cbiAgeV9mdW5jdGlvbjogYW55O1xuICAvKipcbiAgICogZnVuY3Rpb24gdXNlZCB0byBzcGVjaWZ5IHRoZSBmb250IHNpemUgb2YgdGhlIHRleHRcbiAgICogKGNhbiBkZXBlbmQgb24gdGhlIGJ1YmJsZSdzIHJhZGl1cywgcmV0dXJuIGEgY29uc3RhbnQgbnVtYmVyLCBldGMuLi4pXG4gICAqL1xuICBmb250U2l6ZV9mdW5jdGlvbjogYW55O1xuICAvKipcbiAgICogY29sb3Igb2YgdGhlIHRleHRcbiAgICovXG4gIGNvbG9yOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGNzcyBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgYnViYmxlXG4gKlxuICogQHByb3BlcnR5IGlkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSB4IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB5IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSByYWRpdXMgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNvbG9yIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBoYXNDbG9zZUljb24gKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHRleHRzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqXG4qL1xuZXhwb3J0IGludGVyZmFjZSBJQnViYmxlRGF0YSB7XG4gIC8qKlxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGJ1YmJsZVxuICAgKi9cbiAgaWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIHRoZSBidWJibGUncyAoc3RhcnRpbmcpIHgtY29vcmRpbmF0ZVxuICAgKi9cbiAgeD86IG51bWJlcjtcbiAgLyoqXG4gICAqIHRoZSBidWJibGUncyAoc3RhcnRpbmcpIHktY29vcmRpbmF0ZVxuICAgKi9cbiAgeT86IG51bWJlcjtcbiAgLyoqXG4gICAqIHRoZSBidWJibGVzIHJhZGl1c1xuICAgKi9cbiAgcmFkaXVzOiBudW1iZXI7XG4gIC8qKlxuICAgKiB0aGUgYnViYmxlJ3MgY29sb3JcbiAgICovXG4gIGNvbG9yOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBzcGVjaWZpZXMgaWYgdGhlIGJ1YmJsZSBoYXMgYSBjbG9zZSBpY29uIChkZWZhdWx0OmZhbHNlKVxuICAgKi9cbiAgaGFzQ2xvc2VJY29uPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgICovXG4gIHBheWxvYWQ/OiBhbnk7XG4gIC8qKlxuICAgKiBhbGwgdGhlIGJ1YmJsZSdzIHRleHRzXG4gICAqL1xuICB0ZXh0cz86IElCdWJibGVUZXh0W107XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGNzcyBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1idWJibGUtY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYnViYmxlLWNoYXJ0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEJ1YmJsZUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG4gIEBJbnB1dCgpIGRhdGE6IElCdWJibGVDaGFydERhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcbiAgcHJpdmF0ZSBfbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCl7XG4gICAgaWYoIXRoaXMuZGF0YSkgcmV0dXJuO1xuICAgIGlmKHRoaXMuZGF0YS5yZXNldD09PXRydWUpe1xuICAgICAgdGhpcy5kYXRhLnJlc2V0PWZhbHNlO1xuICAgICAgdGhpcy5fbG9hZGVkPWZhbHNlO1xuICAgIH1cbiAgICBpZih0aGlzLl9sb2FkZWQpIHJldHVybjtcbiAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5tYWtlQnViYmxlQ2hhcnQoKSk7XG4gICAgXG4gICAgaWYodGhpcy5kYXRhLnNldFVwZGF0ZVJlZmVyZW5jZSlcbiAgICAgIHRoaXMuZGF0YS5zZXRVcGRhdGVSZWZlcmVuY2UodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cbn1cblxuICBwcml2YXRlIGJ1YmJsZXMgPSBudWxsO1xuICBwcml2YXRlIGdlbmVyaWNCdWJibGUgPSBudWxsO1xuICBwcml2YXRlIGJ1YmJsZUNoYXJ0ID0gbnVsbDtcblxuICAvKiogTWFrZXMgdGhlIHdob2xlIGJ1YmJsZSBjaGFydCAqL1xuICBwdWJsaWMgbWFrZUJ1YmJsZUNoYXJ0KCl7XG4gICAgZDNfc2VsZWN0aW9uLnNlbGVjdChgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfWApLnNlbGVjdEFsbChcIipcIikucmVtb3ZlKCk7XG5cdHZhciBwb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmRhdGEuY29udGFpbmVySWR9YCk7XG4gICAgcG90LnN0eWxlLndpZHRoID0gdGhpcy5kYXRhLmNvbnRhaW5lcldpZHRoKydweCc7XG4gICAgcG90LnN0eWxlLmhlaWdodCA9IHRoaXMuZGF0YS5jb250YWluZXJIZWlnaHQrJ3B4JztcblxuICAgIHRoaXMuYnViYmxlQ2hhcnQgPSBkM19zZWxlY3Rpb24uc2VsZWN0KGAjJHt0aGlzLmRhdGEuY29udGFpbmVySWR9YClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCdzdmcnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMuZGF0YS5jb250YWluZXJXaWR0aClcbiAgICAgICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgdGhpcy5kYXRhLmNvbnRhaW5lckhlaWdodCk7XG5cbiAgICB0aGlzLmJ1YmJsZXMgPSB0aGlzLmRhdGEuYnViYmxlc0RhdGE7XG5cbiAgICB0aGlzLmluaXRCdWJibGVzKCk7XG5cbiAgICBpZih0aGlzLmRhdGEuaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkKVxuICAgICAgdGhpcy5zZXRCdWJibGVDaGFydFNpbXVsYXRpb24oKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICBpZih0aGlzLmJ1YmJsZUNoYXJ0KXtcbiAgICAgICAgdGhpcy5idWJibGVDaGFydC5zZWxlY3RBbGwoYCMke3RoaXMuZGF0YS5jb250YWluZXJJZH0gZyBjaXJjbGUsICMke3RoaXMuZGF0YS5jb250YWluZXJJZH0gZyB0ZXh0YCkub24oJ2NsaWNrJywgKGQpID0+IHtcbiAgICAgICAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG4gICAgICAgICAgdGhpcy5lbWl0KCdjbGljaycse3NvdXJjZTpcImJ1YmJsZVwiLCBidWJibGVQYXlsb2FkOiBkLnBheWxvYWQsIGJ1YmJsZTogZH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbCgnY2lyY2xlW2ItdHlwZT1cInhfaW5uZXJfY2lyY2xlXCJdLCB0ZXh0W2ItdHlwZT1cInhfaW5uZXJfbGFiZWxcIl0nKS5vbignY2xpY2snLCAoZCkgPT4ge1xuICAgICAgICAgICAgICBpZihkLmhhc0Nsb3NlSWNvbil7XG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnY2xpY2snLHtzb3VyY2U6XCJjbG9zZVwiLCBidWJibGVQYXlsb2FkOiBkLnBheWxvYWQsIGJ1YmJsZTogZH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnY2xpY2snLHtzb3VyY2U6XCJidWJibGVcIiwgYnViYmxlUGF5bG9hZDogZC5wYXlsb2FkLCBidWJibGU6IGR9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbChgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfSBnYCkub24oJ21vdXNlZW50ZXInLCAoZCkgPT4ge1xuICAgICAgICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICAgICAgICB0aGlzLmVtaXQoJ21vdXNlZW50ZXInLHtidWJibGVQYXlsb2FkOiBkLnBheWxvYWQsIGJ1YmJsZTogZH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbChgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfSBnYCkub24oJ21vdXNlbGVhdmUnLCAoZCkgPT4ge1xuICAgICAgICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICAgICAgICB0aGlzLmVtaXQoJ21vdXNlbGVhdmUnLHtidWJibGVQYXlsb2FkOiBkLnBheWxvYWQsIGJ1YmJsZTogZH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZih0aGlzLmRhdGEuc2V0QnViYmxlQ2hhcnQpXG4gICAgICB0aGlzLmRhdGEuc2V0QnViYmxlQ2hhcnQodGhpcy5idWJibGVDaGFydCk7XG4gIH1cblxuICAvKiogVmlzdWFsbHkgdXBkYXRlcyB0aGUgYnViYmxlIGNoYXJ0ICovXG4gIHB1YmxpYyB1cGRhdGUoKSB7XG4gICAgaWYoIXRoaXMuZGF0YSkgcmV0dXJuO1xuXG4gICAgaWYodGhpcy5nZW5lcmljQnViYmxlICYmIHRoaXMuZ2VuZXJpY0J1YmJsZS5hdHRyKXtcbiAgICAgIHRoaXMuZ2VuZXJpY0J1YmJsZS5hdHRyKCdjeCcsIChkKSA9PiB7IHJldHVybiBkLnggPSBNYXRoLm1heChkLnJhZGl1cywgTWF0aC5taW4odGhpcy5kYXRhLmNvbnRhaW5lcldpZHRoIC0gZC5yYWRpdXMsIGQueCkpOyB9KVxuICAgICAgICAuYXR0cignY3knLCAoZCkgPT4geyByZXR1cm4gZC55ID0gTWF0aC5tYXgoZC5yYWRpdXMsIE1hdGgubWluKHRoaXMuZGF0YS5jb250YWluZXJIZWlnaHQgLSBkLnJhZGl1cywgZC55KSk7IH0pO1xuICAgIH1cblxuICAgIGlmKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuYnViYmxlc0RhdGEpXG4gICAgICB0aGlzLmRhdGEuYnViYmxlc0RhdGEuZm9yRWFjaCggKGMpID0+IHtcbiAgICAgICAgICBjLnRleHRzLmZvckVhY2goIHR4ID0+IHtcbiAgICAgICAgICAgICAgdmFyIHR4dCA9IHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0KGB0ZXh0W2lkPSR7dHguaWR9XWApO1xuICAgICAgICAgICAgICB0eHQuYXR0cihcImR5XCIsIHR4LnlfZnVuY3Rpb24gKTtcbiAgICAgICAgICAgICAgdHh0LmF0dHIoXCJkeFwiLCB0eC54X2Z1bmN0aW9uICk7XG4gICAgICAgICAgfSlcbiAgICAgIH0pO1xuXG4gICAgaWYodGhpcy5idWJibGVDaGFydCl7XG4gICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbCgnY2lyY2xlW2ItdHlwZT1cInhfaW5uZXJfY2lyY2xlXCJdJylcbiAgICAgIC5hdHRyKFwiY3lcIiwgKGQpID0+IGQueSsoZC5yYWRpdXMvMikgKVxuICAgICAgLmF0dHIoXCJjeFwiLCAoZCkgPT4gZC54IClcbiAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCAoZCkgPT4gKCBkLmhhc0Nsb3NlSWNvbiA/IDEgOiAwICkgKTtcbiAgICB9XG5cbiAgICBpZih0aGlzLmJ1YmJsZUNoYXJ0KXtcbiAgICAgIHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0QWxsKCd0ZXh0W2ItdHlwZT1cInhfaW5uZXJfbGFiZWxcIl0nKVxuICAgICAgLmF0dHIoXCJkeVwiLCAoZCkgPT4gZC55KyhkLnJhZGl1cy8yKSs2IClcbiAgICAgIC5hdHRyKFwiZHhcIiwgKGQpID0+IGQueCApXG4gICAgICAuYXR0cihcIm9wYWNpdHlcIiwgKGQpID0+ICggZC5oYXNDbG9zZUljb24gPyAxIDogMCApICk7XG4gICAgfVxuXG4gIH1cblxuICAvKiogSW5pdGlhbGl6ZWQgdGhlIGNoYXJ0J3MgYnViYmxlcyAqL1xuICBwcml2YXRlIGluaXRCdWJibGVzKCk6IHZvaWQge1xuXG4gICAgaWYodGhpcy5idWJibGVDaGFydClcbiAgICAgIHRoaXMuZ2VuZXJpY0J1YmJsZSA9IHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0QWxsKGAjJHt0aGlzLmRhdGEuY29udGFpbmVySWR9IGdgKVxuICAgICAgICAuZGF0YSh0aGlzLmJ1YmJsZXMpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cihcImlkXCIsKGQpPT5kLmlkKVxuICAgICAgICAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAuYXR0cigncicsIChkKSA9PiBNYXRoLm1heCgwLCBkLnJhZGl1cyAtIDUuMDUpIClcbiAgICAgICAgLmF0dHIoXCJjeFwiLCAoZCk9PmQueClcbiAgICAgICAgLmF0dHIoXCJjeVwiLCAoZCk9PmQueSlcbiAgICAgICAgLmF0dHIoJ3BhZGRpbmcnLCAoZCkgPT4gNTAgKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsKGQpPT5kLmNsYXNzZXMgKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoZCkgPT4gZC5jb2xvciApO1xuXG4gICAgaWYodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5idWJibGVzRGF0YSAmJiB0aGlzLmJ1YmJsZUNoYXJ0KVxuICAgICAgdGhpcy5kYXRhLmJ1YmJsZXNEYXRhLmZvckVhY2goIChjKSA9PiB7XG4gICAgICAgIGxldCBncm91cCA9IHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0KGBnW2lkPSR7Yy5pZH1dYCk7XG4gICAgICAgIGMudGV4dHMuZm9yRWFjaCggdHggPT4ge1xuICAgICAgICAgIGdyb3VwLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAgIC5hdHRyKFwiZHhcIiwgdHgueF9mdW5jdGlvbiApXG4gICAgICAgICAgLmF0dHIoXCJkeVwiLCB0eC55X2Z1bmN0aW9uIClcbiAgICAgICAgICAudGV4dCh0eC5sYWJlbClcbiAgICAgICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCB0eC5mb250U2l6ZV9mdW5jdGlvbilcbiAgICAgICAgICAuYXR0cihcImZpbGxcIiwgdHguY29sb3IpXG4gICAgICAgICAgLmF0dHIoXCJpZFwiLHR4LmlkKVxuICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIix0eC5jbGFzc2VzKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZih0aGlzLmJ1YmJsZUNoYXJ0KVxuICAgICAgdGhpcy5idWJibGVDaGFydC5zZWxlY3RBbGwoYCMke3RoaXMuZGF0YS5jb250YWluZXJJZH0gZ2ApXG4gICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgIC5hdHRyKCAncicsIChkKSA9PiAxMCApXG4gICAgICAgIC5hdHRyKCAncGFkZGluZycsIChkKSA9PiA1MCApXG4gICAgICAgIC5zdHlsZSggJ2ZpbGwnLCBcIndoaXRlXCIgKVxuICAgICAgICAuYXR0ciggJ2N4JywgKGQpID0+IGQueCApXG4gICAgICAgIC5hdHRyKCAnY3knLCAoZCkgPT4gZC55IClcbiAgICAgICAgLmF0dHIoIFwiYi10eXBlXCIsXCJ4X2lubmVyX2NpcmNsZVwiKVxuICAgICAgICAuYXR0ciggXCJjbGFzc1wiLFwiY2lyY2xlX3gtaW5uZXItY2lyY2xlXCIpO1xuXG4gICAgaWYodGhpcy5idWJibGVDaGFydClcbiAgICAgIHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0QWxsKGAjJHt0aGlzLmRhdGEuY29udGFpbmVySWR9IGdgKVxuICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuc3R5bGUoXCJ1c2VyLXNlbGVjdFwiLFwibm9uZVwiKVxuICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAuYXR0cihcImZpbGxcIixcImJsYWNrXCIpXG4gICAgICAgIC5odG1sKFwiJiMxMDAwNTtcIilcbiAgICAgICAgLmF0dHIoXCJmb250LWZhbWlseVwiLCBcInNhbnMtc2VyaWZcIilcbiAgICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwxNSlcbiAgICAgICAgLmF0dHIoXCJiLXR5cGVcIixcInhfaW5uZXJfbGFiZWxcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLFwiY2lyY2xlX3gtbGFiZWxcIik7XG4gIH1cblxuICAvKiogU2V0cyB0aGUgYnViYmxlIGNoYXJ0IGZvcmNlIHNpbXVsYXRpb24gKi9cbiAgcHJpdmF0ZSBzZXRCdWJibGVDaGFydFNpbXVsYXRpb24oKXtcbiAgICBsZXQgdG1wU2ltdWxhdGlvbkRhdGEgPSAoIHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuZm9yY2VTaW11bGF0aW9uRGF0YSA/IHRoaXMuZGF0YS5mb3JjZVNpbXVsYXRpb25EYXRhIDoge30gKTtcbiAgICB2YXIgeFB1bGwgPSAoIHRtcFNpbXVsYXRpb25EYXRhWyd4UHVsbCddID8gdG1wU2ltdWxhdGlvbkRhdGFbJ3hQdWxsJ10gOiB0aGlzLmRhdGEuY29udGFpbmVyV2lkdGgvMiApO1xuICAgIHZhciB4UHVsbFN0cmVuZ3RoID0gKCB0bXBTaW11bGF0aW9uRGF0YVsneFB1bGxTdHJlbmd0aCddID8gdG1wU2ltdWxhdGlvbkRhdGFbJ3hQdWxsU3RyZW5ndGgnXSA6IC0wLjAxICk7XG4gICAgdmFyIHlQdWxsID0gKCB0bXBTaW11bGF0aW9uRGF0YVsneVB1bGwnXSA/IHRtcFNpbXVsYXRpb25EYXRhWyd5UHVsbCddIDogdGhpcy5kYXRhLmNvbnRhaW5lckhlaWdodC8yICk7XG4gICAgdmFyIHlQdWxsU3RyZW5ndGggPSAoIHRtcFNpbXVsYXRpb25EYXRhWyd5UHVsbFN0cmVuZ3RoJ10gPyB0bXBTaW11bGF0aW9uRGF0YVsneVB1bGxTdHJlbmd0aCddIDogLTAuMDEgKTtcbiAgICB2YXIgY29sbGlzaW9uU3RyZW5ndGggPSAoIHRtcFNpbXVsYXRpb25EYXRhWydjb2xsaXNpb25TdHJlbmdoJ10gPyB0bXBTaW11bGF0aW9uRGF0YVsnY29sbGlzaW9uU3RyZW5naCddIDogMC45OSApO1xuICAgIHZhciBjb2xsaXNpb25JdGVyYXRpb25zID0gKCB0bXBTaW11bGF0aW9uRGF0YVsnY29sbGlzaW9uSXRlcmF0aW9ucyddID8gdG1wU2ltdWxhdGlvbkRhdGFbJ2NvbGxpc2lvbkl0ZXJhdGlvbnMnXSA6IDEgKTtcbiAgICB2YXIgdmVsb2NpdHlEZWNheSA9ICggdG1wU2ltdWxhdGlvbkRhdGFbJ3ZlbG9jaXR5RGVjYXknXSA/IHRtcFNpbXVsYXRpb25EYXRhWyd2ZWxvY2l0eURlY2F5J10gOiAwLjk5ICk7XG4gICAgLy8gdmFyIHNpbXVsYXRpb24gPSBcbiAgICBkM19mb3JjZS5mb3JjZVNpbXVsYXRpb24oKVxuICAgICAgLnZlbG9jaXR5RGVjYXkodmVsb2NpdHlEZWNheSlcbiAgICAgIC5mb3JjZShcInhcIiwgZDNfZm9yY2UuZm9yY2VYKHhQdWxsKS5zdHJlbmd0aCh4UHVsbFN0cmVuZ3RoKSlcbiAgICAgIC5mb3JjZShcInlcIiwgZDNfZm9yY2UuZm9yY2VZKHlQdWxsKS5zdHJlbmd0aCh5UHVsbFN0cmVuZ3RoKSlcbiAgICAgIC5mb3JjZShcImNvbGxpZGVcIiwgZDNfZm9yY2UuZm9yY2VDb2xsaWRlKCkucmFkaXVzKChkKT0+ZC5yYWRpdXMpLnN0cmVuZ3RoKGNvbGxpc2lvblN0cmVuZ3RoKS5pdGVyYXRpb25zKGNvbGxpc2lvbkl0ZXJhdGlvbnMpKVxuICAgICAgLm5vZGVzKHRoaXMuYnViYmxlcylcbiAgICAgIC5vbigndGljaycsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpXG4gICAgLy8gICAuc3RvcCgpXG5cbiAgICAvLyBmb3IgKHZhciBpID0gMDsgaSA8IDMwMDsgaSsrKSB7XG4gICAgLy8gICBzaW11bGF0aW9uLnRpY2soKVxuICAgIC8vIH1cbiAgfVxufVxuIl19