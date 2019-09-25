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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQvYnViYmxlLWNoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxLQUFLLFlBQVksTUFBTSxjQUFjLENBQUM7OztBQUc3QyxPQUFPLEtBQUssUUFBUSxNQUFNLFVBQVUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQW1CckMsc0NBMENDOzs7Ozs7SUF0Q0MsdUNBQW9COzs7OztJQUlwQiwwQ0FBdUI7Ozs7O0lBSXZCLDJDQUF3Qjs7Ozs7SUFJeEIsdUNBQTJCOzs7Ozs7SUFLM0Isb0RBQWtDOzs7OztJQUlsQywrQ0FBc0Q7Ozs7O0lBSXRELG1DQUFpQjs7Ozs7SUFJakIsaUNBQWU7Ozs7O0lBSWYsOENBQXlCOzs7OztJQUl6QiwwQ0FBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQnZCLHFEQThCQzs7Ozs7O0lBMUJDLGdEQUFlOzs7OztJQUlmLHdEQUF1Qjs7Ozs7SUFJdkIsZ0RBQWU7Ozs7O0lBSWYsd0RBQXVCOzs7OztJQUl2QiwyREFBMEI7Ozs7OztJQUsxQiw4REFBNkI7Ozs7O0lBSTdCLHdEQUF1Qjs7Ozs7Ozs7Ozs7Ozs7O0FBaUJ6QixpQ0FnQ0M7Ozs7OztJQTVCQyx5QkFBVzs7Ozs7SUFJWCw0QkFBYzs7Ozs7O0lBS2QsaUNBQWdCOzs7Ozs7SUFLaEIsaUNBQWdCOzs7Ozs7SUFLaEIsd0NBQXVCOzs7OztJQUl2Qiw0QkFBYzs7Ozs7SUFJZCw4QkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJuQixpQ0FxQ0M7Ozs7OztJQWpDQyx5QkFBVzs7Ozs7SUFJWCx3QkFBVzs7Ozs7SUFJWCx3QkFBVzs7Ozs7SUFJWCw2QkFBZTs7Ozs7SUFJZiw0QkFBYzs7Ozs7SUFJZCxt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RSxLQUFLO3VCQUNMLEtBQUs7O0lBK0xSLDJCQUFDO0NBQUEsQUFyTUQsSUFxTUM7U0FqTVksb0JBQW9COzs7SUFDL0Isb0NBQWdDOztJQUNoQyxvQ0FBbUI7Ozs7O0lBQ25CLHVDQUFpQzs7Ozs7SUFpQmpDLHVDQUF1Qjs7Ozs7SUFDdkIsNkNBQTZCOzs7OztJQUM3QiwyQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQlVCQkxFQ0hBUlQudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGQzX3NlbGVjdGlvbiBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG4vLyBpbXBvcnQgb25seSBmb3IgYXV0by1hbGxvY2F0aW5nIHRoZSBidWJibGVzIChuZWVkcyBoZWF2eSByZWZhY3RvcmluZyB0byB3b3JrKVxuLy9pbXBvcnQgKiBhcyBkM19oaWVyYXJjaHkgZnJvbSBcImQzLWhpZXJhcmNoeVwiO1xuaW1wb3J0ICogYXMgZDNfZm9yY2UgZnJvbSBcImQzLWZvcmNlXCI7XG5cblxuXG5cblxuXG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBCdWJibGVDaGFydENvbXBvbmVudCdzIFwiZGF0YVwiXG4gKiBcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJJZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY29udGFpbmVyV2lkdGggKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNvbnRhaW5lckhlaWdodCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgYnViYmxlc0RhdGEgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGlzRm9yY2VTaW11bGF0aW9uRW5hYmxlZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcmVzZXQgKG9wdGlvbmFsKVxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUJ1YmJsZUNoYXJ0RGF0YSB7XG4gIC8qKlxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGJ1YmJsZS1jaGFydFxuICAgKi9cbiAgY29udGFpbmVySWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIHRvdGFsIHdpZHRoIGZvciB0aGUgYnViYmxlLWNoYXJ0XG4gICAqL1xuICBjb250YWluZXJXaWR0aDogbnVtYmVyO1xuICAvKipcbiAgICogdG90YWwgaGVpZ2h0IGZvciB0aGUgYnViYmxlLWNoYXJ0XG4gICAqL1xuICBjb250YWluZXJIZWlnaHQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIGRhdGEgYWJvdXQgdGhlIGJ1YmJsZXNcbiAgICovXG4gIGJ1YmJsZXNEYXRhOiBJQnViYmxlRGF0YVtdO1xuICAvKipcbiAgICogd2hldGhlciB0aGUgZm9yY2Ugc2ltdWxhdGlvbiBzaG91bGQgYmUgZW5hYmxlZCBvciBub3RcbiAgICogKGRvIHRoZSBidWJibGVzJyBwb3NpdGlvbnMgXCJhZGFwdFwiIHRvIHRoZSBjb250YWluZXIgb3Igbm90PylcbiAgICovXG4gIGlzRm9yY2VTaW11bGF0aW9uRW5hYmxlZDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIG9wdGlvbnMgZm9yIHRoZSBmb3JjZSBzaW11bGF0aW9uIChpZ25vcmVkIGlmIGlzRm9yY2VTaW11bGF0aW9uRW5hYmxlZCBpcyBmYWxzZSlcbiAgICovXG4gIGZvcmNlU2ltdWxhdGlvbkRhdGE/OiBJQnViYmxlQ2hhcnRGb3JjZVNpbXVsYXRpb25EYXRhO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBjc3MgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIHNwZWNpZmllcyBpZiB0aGUgYnViYmxlcyBoYXZlIHRvIGJlIHJlc2V0IGZyb20gYSBwcmV2aW91cyBpbnN0YW50aWF0aW9uXG4gICAqL1xuICByZXNldD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIGNhbGxiYWNrIGZvciBzYXZpbmcgdGhlIHVwZGF0ZSBmdW5jdGlvbiBuZWVkZWQgZm9yIHZpc3VhbGx5IHVwZGF0aW5nIHRoZSBjaGFydFxuICAgKi9cbiAgc2V0VXBkYXRlUmVmZXJlbmNlPzogYW55O1xuICAvKipcbiAgICogY2FsbGJhY2sgZm9yIHNhdmluZy9nZXR0aW4gYSByZWZlcmVuY2Ugb2YgdGhlIGJ1YmJsZXMgY2hhcnQgaW5zdGFuY2VcbiAgICovXG4gIHNldEJ1YmJsZUNoYXJ0PzogYW55O1xufVxuXG5cblxuXG5cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEJ1YmJsZUNoYXJ0Q29tcG9uZW50J3Mgc2ltdWxhdGlvbiBcImRhdGFcIlxuICogKGFsbCB0aGUgcHJvcGVydGllcyBhcmUgb3B0aW9uYWxzIGFuZCBpZiBub3QgcHJvdmlkZWRcbiAqIGEgZGVmYXVsdCB2YWx1ZSBpcyB1c2VkIGluc3RlYWQpXG4gKiBcbiAqIEBwcm9wZXJ0eSB4UHVsbCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgeFB1bGxTdHJlbmd0aCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgeVB1bGwgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHlQdWxsU3RyZW5ndGggKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNvbGxpc2lvblN0cmVuZ2ggKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNvbGxpc2lvbkl0ZXJhdGlvbnMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHZlbG9jaXR5RGVjYXkgKG9wdGlvbmFsKVxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUJ1YmJsZUNoYXJ0Rm9yY2VTaW11bGF0aW9uRGF0YSB7XG4gIC8qKlxuICAgKiB4LWNvb3JkaW5hdGUgdG8gd2hpY2ggdGhlIGJ1YmJsZXMgYXJlIHB1bGxlZCB0b1xuICAgKi9cbiAgeFB1bGw/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBzdHJlbmd0aCBmb3IgdGhlIHB1bGwgdG93YXJkIHRoZSB4UHVsbCB4LWNvb3JkaW5hdGVcbiAgICovXG4gIHhQdWxsU3RyZW5ndGg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiB5LWNvb3JkaW5hdGUgdG8gd2hpY2ggdGhlIGJ1YmJsZXMgYXJlIHB1bGxlZCB0b1xuICAgKi9cbiAgeVB1bGw/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBzdHJlbmd0aCBmb3IgdGhlIHB1bGwgdG93YXJkIHRoZSB5UHVsbCB5LWNvb3JkaW5hdGVcbiAgICovXG4gIHlQdWxsU3RyZW5ndGg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBzdHJlbmd0aCBvZiBidWJibGUncyBjb2xsaXNpb25cbiAgICovXG4gIGNvbGxpc2lvblN0cmVuZ2g/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBudW1iZXIgb2YgaXRlcmF0aW9ucyBpbiB0aGUgYnViYmxlJ3MgY29sbGlzaW9uIGRldGVjdGlvblxuICAgKiAodGhlIGhpZ2hlciB0aGUgbnVtYmVyIHRoZSBtb3JlIHByZWNpc2UgYW5kIGNvc3RseSB0aGUgZGV0ZWN0aW9uKVxuICAgKi9cbiAgY29sbGlzaW9uSXRlcmF0aW9ucz86IG51bWJlcjtcbiAgLyoqXG4gICAqIGluZGljYXRvciBvbiBob3cgZmFzdCB0aGUgYnViYmxlJ3MgdmVsb2NpdHkgZGVjcmVhc2VzXG4gICAqL1xuICB2ZWxvY2l0eURlY2F5PzogbnVtYmVyO1xufVxuXG5cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGEgYnViYmxlJ3MgdGV4dFxuICpcbiAqIEBwcm9wZXJ0eSBpZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgbGFiZWwgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHhfZnVuY3Rpb24gKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHlfZnVuY3Rpb24gKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGZvbnRTaXplX2Z1bmN0aW9uIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjb2xvciAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKlxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUJ1YmJsZVRleHQge1xuICAvKipcbiAgICogdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSB0ZXh0XG4gICAqL1xuICBpZDogc3RyaW5nO1xuICAvKipcbiAgICogdGhlIGFjdHVhbCB0ZXh0XG4gICAqL1xuICBsYWJlbDogc3RyaW5nO1xuICAvKipcbiAgICogZnVuY3Rpb24gdXNlZCB0byBzcGVjaWZ5IHRoZSB4IHBvc2l0aW9uIHRoZSB0ZXh0XG4gICAqIChjYW4gZGVwZW5kIG9uIHRoZSBidWJibGUncyB4LXBvc2l0aW9uLCByYWRpdXMsIGV0Yy4uLilcbiAgICovXG4gIHhfZnVuY3Rpb246IGFueTtcbiAgLyoqXG4gICAqIGZ1bmN0aW9uIHVzZWQgdG8gc3BlY2lmeSB0aGUgeSBwb3NpdGlvbiB0aGUgdGV4dFxuICAgKiAoY2FuIGRlcGVuZCBvbiB0aGUgYnViYmxlJ3MgeS1wb3NpdGlvbiwgcmFkaXVzLCBldGMuLi4pXG4gICAqL1xuICB5X2Z1bmN0aW9uOiBhbnk7XG4gIC8qKlxuICAgKiBmdW5jdGlvbiB1c2VkIHRvIHNwZWNpZnkgdGhlIGZvbnQgc2l6ZSBvZiB0aGUgdGV4dFxuICAgKiAoY2FuIGRlcGVuZCBvbiB0aGUgYnViYmxlJ3MgcmFkaXVzLCByZXR1cm4gYSBjb25zdGFudCBudW1iZXIsIGV0Yy4uLilcbiAgICovXG4gIGZvbnRTaXplX2Z1bmN0aW9uOiBhbnk7XG4gIC8qKlxuICAgKiBjb2xvciBvZiB0aGUgdGV4dFxuICAgKi9cbiAgY29sb3I6IHN0cmluZztcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgY3NzIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG59XG5cblxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgYnViYmxlXG4gKlxuICogQHByb3BlcnR5IGlkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSB4IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB5IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSByYWRpdXMgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNvbG9yIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBoYXNDbG9zZUljb24gKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHRleHRzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqXG4qL1xuZXhwb3J0IGludGVyZmFjZSBJQnViYmxlRGF0YSB7XG4gIC8qKlxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGJ1YmJsZVxuICAgKi9cbiAgaWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIHRoZSBidWJibGUncyAoc3RhcnRpbmcpIHgtY29vcmRpbmF0ZVxuICAgKi9cbiAgeD86IG51bWJlcjtcbiAgLyoqXG4gICAqIHRoZSBidWJibGUncyAoc3RhcnRpbmcpIHktY29vcmRpbmF0ZVxuICAgKi9cbiAgeT86IG51bWJlcjtcbiAgLyoqXG4gICAqIHRoZSBidWJibGVzIHJhZGl1c1xuICAgKi9cbiAgcmFkaXVzOiBudW1iZXI7XG4gIC8qKlxuICAgKiB0aGUgYnViYmxlJ3MgY29sb3JcbiAgICovXG4gIGNvbG9yOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBzcGVjaWZpZXMgaWYgdGhlIGJ1YmJsZSBoYXMgYSBjbG9zZSBpY29uIChkZWZhdWx0OmZhbHNlKVxuICAgKi9cbiAgaGFzQ2xvc2VJY29uPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgICovXG4gIHBheWxvYWQ/OiBhbnk7XG4gIC8qKlxuICAgKiBhbGwgdGhlIGJ1YmJsZSdzIHRleHRzXG4gICAqL1xuICB0ZXh0cz86IElCdWJibGVUZXh0W107XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGNzcyBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1idWJibGUtY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYnViYmxlLWNoYXJ0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEJ1YmJsZUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG4gIEBJbnB1dCgpIGRhdGE6IElCdWJibGVDaGFydERhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcbiAgcHJpdmF0ZSBfbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCl7XG4gICAgaWYoIXRoaXMuZGF0YSkgcmV0dXJuO1xuICAgIGlmKHRoaXMuZGF0YS5yZXNldD09PXRydWUpe1xuICAgICAgdGhpcy5kYXRhLnJlc2V0PWZhbHNlO1xuICAgICAgdGhpcy5fbG9hZGVkPWZhbHNlO1xuICAgIH1cbiAgICBpZih0aGlzLl9sb2FkZWQpIHJldHVybjtcbiAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5tYWtlQnViYmxlQ2hhcnQoKSk7XG4gICAgXG4gICAgaWYodGhpcy5kYXRhLnNldFVwZGF0ZVJlZmVyZW5jZSlcbiAgICAgIHRoaXMuZGF0YS5zZXRVcGRhdGVSZWZlcmVuY2UodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cbn1cblxuICBwcml2YXRlIGJ1YmJsZXMgPSBudWxsO1xuICBwcml2YXRlIGdlbmVyaWNCdWJibGUgPSBudWxsO1xuICBwcml2YXRlIGJ1YmJsZUNoYXJ0ID0gbnVsbDtcblxuICAvKiogTWFrZXMgdGhlIHdob2xlIGJ1YmJsZSBjaGFydCAqL1xuICBwdWJsaWMgbWFrZUJ1YmJsZUNoYXJ0KCl7XG4gICAgZDNfc2VsZWN0aW9uLnNlbGVjdChgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfWApLnNlbGVjdEFsbChcIipcIikucmVtb3ZlKCk7XG5cdHZhciBwb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmRhdGEuY29udGFpbmVySWR9YCk7XG4gICAgcG90LnN0eWxlLndpZHRoID0gdGhpcy5kYXRhLmNvbnRhaW5lcldpZHRoKydweCc7XG4gICAgcG90LnN0eWxlLmhlaWdodCA9IHRoaXMuZGF0YS5jb250YWluZXJIZWlnaHQrJ3B4JztcblxuICAgIHRoaXMuYnViYmxlQ2hhcnQgPSBkM19zZWxlY3Rpb24uc2VsZWN0KGAjJHt0aGlzLmRhdGEuY29udGFpbmVySWR9YClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCdzdmcnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMuZGF0YS5jb250YWluZXJXaWR0aClcbiAgICAgICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgdGhpcy5kYXRhLmNvbnRhaW5lckhlaWdodCk7XG5cbiAgICB0aGlzLmJ1YmJsZXMgPSB0aGlzLmRhdGEuYnViYmxlc0RhdGE7XG5cbiAgICB0aGlzLmluaXRCdWJibGVzKCk7XG5cbiAgICBpZih0aGlzLmRhdGEuaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkKVxuICAgICAgdGhpcy5zZXRCdWJibGVDaGFydFNpbXVsYXRpb24oKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICBpZih0aGlzLmJ1YmJsZUNoYXJ0KXtcbiAgICAgICAgdGhpcy5idWJibGVDaGFydC5zZWxlY3RBbGwoYCMke3RoaXMuZGF0YS5jb250YWluZXJJZH0gZyBjaXJjbGUsICMke3RoaXMuZGF0YS5jb250YWluZXJJZH0gZyB0ZXh0YCkub24oJ2NsaWNrJywgKGQpID0+IHtcbiAgICAgICAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG4gICAgICAgICAgdGhpcy5lbWl0KCdjbGljaycse3NvdXJjZTpcImJ1YmJsZVwiLCBidWJibGVQYXlsb2FkOiBkLnBheWxvYWQsIGJ1YmJsZTogZH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbCgnY2lyY2xlW2ItdHlwZT1cInhfaW5uZXJfY2lyY2xlXCJdLCB0ZXh0W2ItdHlwZT1cInhfaW5uZXJfbGFiZWxcIl0nKS5vbignY2xpY2snLCAoZCkgPT4ge1xuICAgICAgICAgICAgICBpZihkLmhhc0Nsb3NlSWNvbil7XG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnY2xpY2snLHtzb3VyY2U6XCJjbG9zZVwiLCBidWJibGVQYXlsb2FkOiBkLnBheWxvYWQsIGJ1YmJsZTogZH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnY2xpY2snLHtzb3VyY2U6XCJidWJibGVcIiwgYnViYmxlUGF5bG9hZDogZC5wYXlsb2FkLCBidWJibGU6IGR9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbChgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfSBnYCkub24oJ21vdXNlZW50ZXInLCAoZCkgPT4ge1xuICAgICAgICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICAgICAgICB0aGlzLmVtaXQoJ21vdXNlX2VudGVyJyx7YnViYmxlUGF5bG9hZDogZC5wYXlsb2FkLCBidWJibGU6IGR9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5idWJibGVDaGFydC5zZWxlY3RBbGwoYCMke3RoaXMuZGF0YS5jb250YWluZXJJZH0gZ2ApLm9uKCdtb3VzZWxlYXZlJywgKGQpID0+IHtcbiAgICAgICAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG4gICAgICAgICAgdGhpcy5lbWl0KCdtb3VzZV9sZWF2ZScse2J1YmJsZVBheWxvYWQ6IGQucGF5bG9hZCwgYnViYmxlOiBkfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmKHRoaXMuZGF0YS5zZXRCdWJibGVDaGFydClcbiAgICAgIHRoaXMuZGF0YS5zZXRCdWJibGVDaGFydCh0aGlzLmJ1YmJsZUNoYXJ0KTtcbiAgfVxuXG5cbiAgLyoqIFZpc3VhbGx5IHVwZGF0ZXMgdGhlIGJ1YmJsZSBjaGFydCAqL1xuICBwdWJsaWMgdXBkYXRlKCkge1xuICAgIGlmKCF0aGlzLmRhdGEpIHJldHVybjtcblxuICAgIGlmKHRoaXMuZ2VuZXJpY0J1YmJsZSAmJiB0aGlzLmdlbmVyaWNCdWJibGUuYXR0cil7XG4gICAgICB0aGlzLmdlbmVyaWNCdWJibGUuYXR0cignY3gnLCAoZCkgPT4geyByZXR1cm4gZC54ID0gTWF0aC5tYXgoZC5yYWRpdXMsIE1hdGgubWluKHRoaXMuZGF0YS5jb250YWluZXJXaWR0aCAtIGQucmFkaXVzLCBkLngpKTsgfSlcbiAgICAgICAgLmF0dHIoJ2N5JywgKGQpID0+IHsgcmV0dXJuIGQueSA9IE1hdGgubWF4KGQucmFkaXVzLCBNYXRoLm1pbih0aGlzLmRhdGEuY29udGFpbmVySGVpZ2h0IC0gZC5yYWRpdXMsIGQueSkpOyB9KTtcbiAgICB9XG5cbiAgICBpZih0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmJ1YmJsZXNEYXRhKVxuICAgICAgdGhpcy5kYXRhLmJ1YmJsZXNEYXRhLmZvckVhY2goIChjKSA9PiB7XG4gICAgICAgICAgYy50ZXh0cy5mb3JFYWNoKCB0eCA9PiB7XG4gICAgICAgICAgICAgIHZhciB0eHQgPSB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdChgdGV4dFtpZD0ke3R4LmlkfV1gKTtcbiAgICAgICAgICAgICAgdHh0LmF0dHIoXCJkeVwiLCB0eC55X2Z1bmN0aW9uICk7XG4gICAgICAgICAgICAgIHR4dC5hdHRyKFwiZHhcIiwgdHgueF9mdW5jdGlvbiApO1xuICAgICAgICAgIH0pXG4gICAgICB9KTtcblxuICAgIGlmKHRoaXMuYnViYmxlQ2hhcnQpe1xuICAgICAgdGhpcy5idWJibGVDaGFydC5zZWxlY3RBbGwoJ2NpcmNsZVtiLXR5cGU9XCJ4X2lubmVyX2NpcmNsZVwiXScpXG4gICAgICAuYXR0cihcImN5XCIsIChkKSA9PiBkLnkrKGQucmFkaXVzLzIpIClcbiAgICAgIC5hdHRyKFwiY3hcIiwgKGQpID0+IGQueCApXG4gICAgICAuYXR0cihcIm9wYWNpdHlcIiwgKGQpID0+ICggZC5oYXNDbG9zZUljb24gPyAxIDogMCApICk7XG4gICAgfVxuXG4gICAgaWYodGhpcy5idWJibGVDaGFydCl7XG4gICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbCgndGV4dFtiLXR5cGU9XCJ4X2lubmVyX2xhYmVsXCJdJylcbiAgICAgIC5hdHRyKFwiZHlcIiwgKGQpID0+IGQueSsoZC5yYWRpdXMvMikrNiApXG4gICAgICAuYXR0cihcImR4XCIsIChkKSA9PiBkLnggKVxuICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIChkKSA9PiAoIGQuaGFzQ2xvc2VJY29uID8gMSA6IDAgKSApO1xuICAgIH1cblxuICB9XG5cblxuXG4gIC8qKiBJbml0aWFsaXplZCB0aGUgY2hhcnQncyBidWJibGVzICovXG4gIHByaXZhdGUgaW5pdEJ1YmJsZXMoKTogdm9pZCB7XG5cbiAgICBpZih0aGlzLmJ1YmJsZUNoYXJ0KVxuICAgICAgdGhpcy5nZW5lcmljQnViYmxlID0gdGhpcy5idWJibGVDaGFydC5zZWxlY3RBbGwoYCMke3RoaXMuZGF0YS5jb250YWluZXJJZH0gZ2ApXG4gICAgICAgIC5kYXRhKHRoaXMuYnViYmxlcylcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKFwiaWRcIiwoZCk9PmQuaWQpXG4gICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgIC5hdHRyKCdyJywgKGQpID0+IE1hdGgubWF4KDAsIGQucmFkaXVzIC0gNS4wNSkgKVxuICAgICAgICAuYXR0cihcImN4XCIsIChkKT0+ZC54KVxuICAgICAgICAuYXR0cihcImN5XCIsIChkKT0+ZC55KVxuICAgICAgICAuYXR0cigncGFkZGluZycsIChkKSA9PiA1MCApXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwoZCk9PmQuY2xhc3NlcyApXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIChkKSA9PiBkLmNvbG9yICk7XG5cbiAgICBpZih0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmJ1YmJsZXNEYXRhICYmIHRoaXMuYnViYmxlQ2hhcnQpXG4gICAgICB0aGlzLmRhdGEuYnViYmxlc0RhdGEuZm9yRWFjaCggKGMpID0+IHtcbiAgICAgICAgbGV0IGdyb3VwID0gdGhpcy5idWJibGVDaGFydC5zZWxlY3QoYGdbaWQ9JHtjLmlkfV1gKTtcbiAgICAgICAgYy50ZXh0cy5mb3JFYWNoKCB0eCA9PiB7XG4gICAgICAgICAgZ3JvdXAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgLmF0dHIoXCJkeFwiLCB0eC54X2Z1bmN0aW9uIClcbiAgICAgICAgICAuYXR0cihcImR5XCIsIHR4LnlfZnVuY3Rpb24gKVxuICAgICAgICAgIC50ZXh0KHR4LmxhYmVsKVxuICAgICAgICAgIC5hdHRyKFwiZm9udC1zaXplXCIsIHR4LmZvbnRTaXplX2Z1bmN0aW9uKVxuICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCB0eC5jb2xvcilcbiAgICAgICAgICAuYXR0cihcImlkXCIsdHguaWQpXG4gICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLHR4LmNsYXNzZXMpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmKHRoaXMuYnViYmxlQ2hhcnQpXG4gICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbChgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfSBnYClcbiAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgLmF0dHIoICdyJywgKGQpID0+IDEwIClcbiAgICAgICAgLmF0dHIoICdwYWRkaW5nJywgKGQpID0+IDUwIClcbiAgICAgICAgLnN0eWxlKCAnZmlsbCcsIFwid2hpdGVcIiApXG4gICAgICAgIC5hdHRyKCAnY3gnLCAoZCkgPT4gZC54IClcbiAgICAgICAgLmF0dHIoICdjeScsIChkKSA9PiBkLnkgKVxuICAgICAgICAuYXR0ciggXCJiLXR5cGVcIixcInhfaW5uZXJfY2lyY2xlXCIpXG4gICAgICAgIC5hdHRyKCBcImNsYXNzXCIsXCJjaXJjbGVfeC1pbm5lci1jaXJjbGVcIik7XG5cbiAgICBpZih0aGlzLmJ1YmJsZUNoYXJ0KVxuICAgICAgdGhpcy5idWJibGVDaGFydC5zZWxlY3RBbGwoYCMke3RoaXMuZGF0YS5jb250YWluZXJJZH0gZ2ApXG4gICAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgIC5zdHlsZShcInVzZXItc2VsZWN0XCIsXCJub25lXCIpXG4gICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLFwiYmxhY2tcIilcbiAgICAgICAgLmh0bWwoXCImIzEwMDA1O1wiKVxuICAgICAgICAuYXR0cihcImZvbnQtZmFtaWx5XCIsIFwic2Fucy1zZXJpZlwiKVxuICAgICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLDE1KVxuICAgICAgICAuYXR0cihcImItdHlwZVwiLFwieF9pbm5lcl9sYWJlbFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsXCJjaXJjbGVfeC1sYWJlbFwiKTtcblxuICB9XG5cblxuXG4gIC8qKiBTZXRzIHRoZSBidWJibGUgY2hhcnQgZm9yY2Ugc2ltdWxhdGlvbiAqL1xuICBwcml2YXRlIHNldEJ1YmJsZUNoYXJ0U2ltdWxhdGlvbigpe1xuICAgIGxldCB0bXBTaW11bGF0aW9uRGF0YSA9ICggdGhpcy5kYXRhICYmIHRoaXMuZGF0YS5mb3JjZVNpbXVsYXRpb25EYXRhID8gdGhpcy5kYXRhLmZvcmNlU2ltdWxhdGlvbkRhdGEgOiB7fSApO1xuICAgIHZhciB4UHVsbCA9ICggdG1wU2ltdWxhdGlvbkRhdGFbJ3hQdWxsJ10gPyB0bXBTaW11bGF0aW9uRGF0YVsneFB1bGwnXSA6IHRoaXMuZGF0YS5jb250YWluZXJXaWR0aC8yICk7XG4gICAgdmFyIHhQdWxsU3RyZW5ndGggPSAoIHRtcFNpbXVsYXRpb25EYXRhWyd4UHVsbFN0cmVuZ3RoJ10gPyB0bXBTaW11bGF0aW9uRGF0YVsneFB1bGxTdHJlbmd0aCddIDogLTAuMDEgKTtcbiAgICB2YXIgeVB1bGwgPSAoIHRtcFNpbXVsYXRpb25EYXRhWyd5UHVsbCddID8gdG1wU2ltdWxhdGlvbkRhdGFbJ3lQdWxsJ10gOiB0aGlzLmRhdGEuY29udGFpbmVySGVpZ2h0LzIgKTtcbiAgICB2YXIgeVB1bGxTdHJlbmd0aCA9ICggdG1wU2ltdWxhdGlvbkRhdGFbJ3lQdWxsU3RyZW5ndGgnXSA/IHRtcFNpbXVsYXRpb25EYXRhWyd5UHVsbFN0cmVuZ3RoJ10gOiAtMC4wMSApO1xuICAgIHZhciBjb2xsaXNpb25TdHJlbmd0aCA9ICggdG1wU2ltdWxhdGlvbkRhdGFbJ2NvbGxpc2lvblN0cmVuZ2gnXSA/IHRtcFNpbXVsYXRpb25EYXRhWydjb2xsaXNpb25TdHJlbmdoJ10gOiAwLjk5ICk7XG4gICAgdmFyIGNvbGxpc2lvbkl0ZXJhdGlvbnMgPSAoIHRtcFNpbXVsYXRpb25EYXRhWydjb2xsaXNpb25JdGVyYXRpb25zJ10gPyB0bXBTaW11bGF0aW9uRGF0YVsnY29sbGlzaW9uSXRlcmF0aW9ucyddIDogMSApO1xuICAgIHZhciB2ZWxvY2l0eURlY2F5ID0gKCB0bXBTaW11bGF0aW9uRGF0YVsndmVsb2NpdHlEZWNheSddID8gdG1wU2ltdWxhdGlvbkRhdGFbJ3ZlbG9jaXR5RGVjYXknXSA6IDAuOTkgKTtcbiAgICBkM19mb3JjZS5mb3JjZVNpbXVsYXRpb24oKVxuICAgICAgLnZlbG9jaXR5RGVjYXkodmVsb2NpdHlEZWNheSlcbiAgICAgIC5mb3JjZShcInhcIiwgZDNfZm9yY2UuZm9yY2VYKHhQdWxsKS5zdHJlbmd0aCh4UHVsbFN0cmVuZ3RoKSlcbiAgICAgIC5mb3JjZShcInlcIiwgZDNfZm9yY2UuZm9yY2VZKHlQdWxsKS5zdHJlbmd0aCh5UHVsbFN0cmVuZ3RoKSlcbiAgICAgIC5mb3JjZShcImNvbGxpZGVcIiwgZDNfZm9yY2UuZm9yY2VDb2xsaWRlKCkucmFkaXVzKChkKT0+ZC5yYWRpdXMpLnN0cmVuZ3RoKGNvbGxpc2lvblN0cmVuZ3RoKS5pdGVyYXRpb25zKGNvbGxpc2lvbkl0ZXJhdGlvbnMpKVxuICAgICAgLm5vZGVzKHRoaXMuYnViYmxlcylcbiAgICAgIC5vbigndGljaycsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICB9XG5cblxuXG59XG4iXX0=