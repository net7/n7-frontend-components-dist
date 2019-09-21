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
 * \@property maxBubblesSelected (optional)
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
     * specifies the maximum number of selected bubbles at the same time (default: infinity)
     * @type {?|undefined}
     */
    IBubbleChartData.prototype.maxBubblesSelected;
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
 * \@property selectable (optional)
 * \@property selected (optional)
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
     * specifies if the bubble can be selected or not (default:false)
     * @type {?|undefined}
     */
    IBubbleData.prototype.selectable;
    /**
     * specifies if the bubble is selected or not (default:false)
     * @type {?|undefined}
     */
    IBubbleData.prototype.selected;
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
        this.selectedBubbles = 0;
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
        this.selectedBubbles = 0;
        this.data.bubblesData.forEach((/**
         * @param {?} b
         * @return {?}
         */
        function (b) {
            if (b.selected)
                _this.selectedBubbles++;
        }));
        this.initBubbles();
        if (this.data.isForceSimulationEnabled)
            this.setBubbleChartSimulation();
        this.update();
        if (this.bubbleChart)
            this.bubbleChart.selectAll("#" + this.data.containerId + " g circle, #" + this.data.containerId + " g text").on('click', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                if (d.selectable) {
                    if (!d.selected && _this.selectedBubbles < _this.data.maxBubblesSelected) {
                        d.selected = true;
                        _this.update();
                        if (!_this.emit)
                            return;
                        _this.emit('click', { source: "bubble", bubblePayload: d.payload });
                    }
                }
            }));
        if (this.bubbleChart)
            this.bubbleChart.selectAll('circle[bubblesType="x_inner_circle"], text[bubblesType="x_inner_label"]').on('click', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                if (d.selectable) {
                    d.selected = false;
                    _this.update();
                    if (!_this.emit)
                        return;
                    if (d.selected)
                        _this.emit('click', { source: "close", bubblePyload: d.payload });
                    //else
                    //  this.emit('click',{source:"bubble",bubblePyload: d.payload});
                }
            }));
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
            function (d) { return (d.selected ? 1 : 0); }));
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
            function (d) { return (d.selected ? 1 : 0); }));
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
    BubbleChartComponent.prototype.selectedBubbles;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQvYnViYmxlLWNoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxLQUFLLFlBQVksTUFBTSxjQUFjLENBQUM7OztBQUc3QyxPQUFPLEtBQUssUUFBUSxNQUFNLFVBQVUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFvQnJDLHNDQXNDQzs7Ozs7O0lBbENDLHVDQUFvQjs7Ozs7SUFJcEIsMENBQXVCOzs7OztJQUl2QiwyQ0FBd0I7Ozs7O0lBSXhCLHVDQUEyQjs7Ozs7O0lBSzNCLG9EQUFrQzs7Ozs7SUFJbEMsK0NBQXNEOzs7OztJQUl0RCxtQ0FBaUI7Ozs7O0lBSWpCLGlDQUFlOzs7OztJQUlmLDhDQUE0Qjs7Ozs7Ozs7Ozs7Ozs7OztBQXFCOUIscURBOEJDOzs7Ozs7SUExQkMsZ0RBQWU7Ozs7O0lBSWYsd0RBQXVCOzs7OztJQUl2QixnREFBZTs7Ozs7SUFJZix3REFBdUI7Ozs7O0lBSXZCLDJEQUEwQjs7Ozs7O0lBSzFCLDhEQUE2Qjs7Ozs7SUFJN0Isd0RBQXVCOzs7Ozs7Ozs7Ozs7Ozs7QUFpQnpCLGlDQWdDQzs7Ozs7O0lBNUJDLHlCQUFXOzs7OztJQUlYLDRCQUFjOzs7Ozs7SUFLZCxpQ0FBZ0I7Ozs7OztJQUtoQixpQ0FBZ0I7Ozs7OztJQUtoQix3Q0FBdUI7Ozs7O0lBSXZCLDRCQUFjOzs7OztJQUlkLDhCQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JuQixpQ0F5Q0M7Ozs7OztJQXJDQyx5QkFBVzs7Ozs7SUFJWCx3QkFBVzs7Ozs7SUFJWCx3QkFBVzs7Ozs7SUFJWCw2QkFBZTs7Ozs7SUFJZiw0QkFBYzs7Ozs7SUFJZCxpQ0FBcUI7Ozs7O0lBSXJC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Q0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUMxRCxLQUFLLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzFELEtBQUssQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLENBQUMsSUFBRyxPQUFBLENBQUMsQ0FBQyxNQUFNLEVBQVIsQ0FBUSxFQUFDLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUM7YUFDM0gsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDbkIsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7O2dCQS9MRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsMElBQWtDO2lCQUNuQzs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUE2TFIsMkJBQUM7Q0FBQSxBQW5NRCxJQW1NQztTQS9MWSxvQkFBb0I7OztJQUMvQixvQ0FBZ0M7O0lBQ2hDLG9DQUFtQjs7Ozs7SUFDbkIsdUNBQWlDOzs7OztJQUNqQywrQ0FBb0M7Ozs7O0lBYXBDLHVDQUF1Qjs7Ozs7SUFDdkIsNkNBQTZCOzs7OztJQUM3QiwyQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQlVCQkxFQ0hBUlQudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGQzX3NlbGVjdGlvbiBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG4vLyBpbXBvcnQgb25seSBmb3IgYXV0by1hbGxvY2F0aW5nIHRoZSBidWJibGVzIChuZWVkcyBoZWF2eSByZWZhY3RvcmluZyB0byB3b3JrKVxuLy9pbXBvcnQgKiBhcyBkM19oaWVyYXJjaHkgZnJvbSBcImQzLWhpZXJhcmNoeVwiO1xuaW1wb3J0ICogYXMgZDNfZm9yY2UgZnJvbSBcImQzLWZvcmNlXCI7XG5cblxuXG5cblxuXG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBCdWJibGVDaGFydENvbXBvbmVudCdzIFwiZGF0YVwiXG4gKiBcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJJZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY29udGFpbmVyV2lkdGggKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNvbnRhaW5lckhlaWdodCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgYnViYmxlc0RhdGEgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGlzRm9yY2VTaW11bGF0aW9uRW5hYmxlZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcmVzZXQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IG1heEJ1YmJsZXNTZWxlY3RlZCAob3B0aW9uYWwpXG4qL1xuZXhwb3J0IGludGVyZmFjZSBJQnViYmxlQ2hhcnREYXRhIHtcbiAgLyoqXG4gICAqIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgYnViYmxlLWNoYXJ0XG4gICAqL1xuICBjb250YWluZXJJZDogc3RyaW5nO1xuICAvKipcbiAgICogdG90YWwgd2lkdGggZm9yIHRoZSBidWJibGUtY2hhcnRcbiAgICovXG4gIGNvbnRhaW5lcldpZHRoOiBudW1iZXI7XG4gIC8qKlxuICAgKiB0b3RhbCBoZWlnaHQgZm9yIHRoZSBidWJibGUtY2hhcnRcbiAgICovXG4gIGNvbnRhaW5lckhlaWdodDogbnVtYmVyO1xuICAvKipcbiAgICogZGF0YSBhYm91dCB0aGUgYnViYmxlc1xuICAgKi9cbiAgYnViYmxlc0RhdGE6IElCdWJibGVEYXRhW107XG4gIC8qKlxuICAgKiB3aGV0aGVyIHRoZSBmb3JjZSBzaW11bGF0aW9uIHNob3VsZCBiZSBlbmFibGVkIG9yIG5vdFxuICAgKiAoZG8gdGhlIGJ1YmJsZXMnIHBvc2l0aW9ucyBcImFkYXB0XCIgdG8gdGhlIGNvbnRhaW5lciBvciBub3Q/KVxuICAgKi9cbiAgaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkOiBib29sZWFuO1xuICAvKipcbiAgICogb3B0aW9ucyBmb3IgdGhlIGZvcmNlIHNpbXVsYXRpb24gKGlnbm9yZWQgaWYgaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkIGlzIGZhbHNlKVxuICAgKi9cbiAgZm9yY2VTaW11bGF0aW9uRGF0YT86IElCdWJibGVDaGFydEZvcmNlU2ltdWxhdGlvbkRhdGE7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGNzcyBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogc3BlY2lmaWVzIGlmIHRoZSBidWJibGVzIGhhdmUgdG8gYmUgcmVzZXQgZnJvbSBhIHByZXZpb3VzIGluc3RhbnRpYXRpb25cbiAgICovXG4gIHJlc2V0PzogYm9vbGVhblxuICAvKipcbiAgICogc3BlY2lmaWVzIHRoZSBtYXhpbXVtIG51bWJlciBvZiBzZWxlY3RlZCBidWJibGVzIGF0IHRoZSBzYW1lIHRpbWUgKGRlZmF1bHQ6IGluZmluaXR5KVxuICAqL1xuICBtYXhCdWJibGVzU2VsZWN0ZWQ/OiBudW1iZXI7XG59XG5cblxuXG5cblxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgQnViYmxlQ2hhcnRDb21wb25lbnQncyBzaW11bGF0aW9uIFwiZGF0YVwiXG4gKiAoYWxsIHRoZSBwcm9wZXJ0aWVzIGFyZSBvcHRpb25hbHMgYW5kIGlmIG5vdCBwcm92aWRlZFxuICogYSBkZWZhdWx0IHZhbHVlIGlzIHVzZWQgaW5zdGVhZClcbiAqIFxuICogQHByb3BlcnR5IHhQdWxsIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB4UHVsbFN0cmVuZ3RoIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB5UHVsbCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgeVB1bGxTdHJlbmd0aCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY29sbGlzaW9uU3RyZW5naCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY29sbGlzaW9uSXRlcmF0aW9ucyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdmVsb2NpdHlEZWNheSAob3B0aW9uYWwpXG4qL1xuZXhwb3J0IGludGVyZmFjZSBJQnViYmxlQ2hhcnRGb3JjZVNpbXVsYXRpb25EYXRhIHtcbiAgLyoqXG4gICAqIHgtY29vcmRpbmF0ZSB0byB3aGljaCB0aGUgYnViYmxlcyBhcmUgcHVsbGVkIHRvXG4gICAqL1xuICB4UHVsbD86IG51bWJlcjtcbiAgLyoqXG4gICAqIHN0cmVuZ3RoIGZvciB0aGUgcHVsbCB0b3dhcmQgdGhlIHhQdWxsIHgtY29vcmRpbmF0ZVxuICAgKi9cbiAgeFB1bGxTdHJlbmd0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIHktY29vcmRpbmF0ZSB0byB3aGljaCB0aGUgYnViYmxlcyBhcmUgcHVsbGVkIHRvXG4gICAqL1xuICB5UHVsbD86IG51bWJlcjtcbiAgLyoqXG4gICAqIHN0cmVuZ3RoIGZvciB0aGUgcHVsbCB0b3dhcmQgdGhlIHlQdWxsIHktY29vcmRpbmF0ZVxuICAgKi9cbiAgeVB1bGxTdHJlbmd0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIHN0cmVuZ3RoIG9mIGJ1YmJsZSdzIGNvbGxpc2lvblxuICAgKi9cbiAgY29sbGlzaW9uU3RyZW5naD86IG51bWJlcjtcbiAgLyoqXG4gICAqIG51bWJlciBvZiBpdGVyYXRpb25zIGluIHRoZSBidWJibGUncyBjb2xsaXNpb24gZGV0ZWN0aW9uXG4gICAqICh0aGUgaGlnaGVyIHRoZSBudW1iZXIgdGhlIG1vcmUgcHJlY2lzZSBhbmQgY29zdGx5IHRoZSBkZXRlY3Rpb24pXG4gICAqL1xuICBjb2xsaXNpb25JdGVyYXRpb25zPzogbnVtYmVyO1xuICAvKipcbiAgICogaW5kaWNhdG9yIG9uIGhvdyBmYXN0IHRoZSBidWJibGUncyB2ZWxvY2l0eSBkZWNyZWFzZXNcbiAgICovXG4gIHZlbG9jaXR5RGVjYXk/OiBudW1iZXI7XG59XG5cblxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgYSBidWJibGUncyB0ZXh0XG4gKlxuICogQHByb3BlcnR5IGlkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBsYWJlbCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgeF9mdW5jdGlvbiAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgeV9mdW5jdGlvbiAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgZm9udFNpemVfZnVuY3Rpb24gKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNvbG9yIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqXG4qL1xuZXhwb3J0IGludGVyZmFjZSBJQnViYmxlVGV4dCB7XG4gIC8qKlxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIHRleHRcbiAgICovXG4gIGlkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aGUgYWN0dWFsIHRleHRcbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBmdW5jdGlvbiB1c2VkIHRvIHNwZWNpZnkgdGhlIHggcG9zaXRpb24gdGhlIHRleHRcbiAgICogKGNhbiBkZXBlbmQgb24gdGhlIGJ1YmJsZSdzIHgtcG9zaXRpb24sIHJhZGl1cywgZXRjLi4uKVxuICAgKi9cbiAgeF9mdW5jdGlvbjogYW55O1xuICAvKipcbiAgICogZnVuY3Rpb24gdXNlZCB0byBzcGVjaWZ5IHRoZSB5IHBvc2l0aW9uIHRoZSB0ZXh0XG4gICAqIChjYW4gZGVwZW5kIG9uIHRoZSBidWJibGUncyB5LXBvc2l0aW9uLCByYWRpdXMsIGV0Yy4uLilcbiAgICovXG4gIHlfZnVuY3Rpb246IGFueTtcbiAgLyoqXG4gICAqIGZ1bmN0aW9uIHVzZWQgdG8gc3BlY2lmeSB0aGUgZm9udCBzaXplIG9mIHRoZSB0ZXh0XG4gICAqIChjYW4gZGVwZW5kIG9uIHRoZSBidWJibGUncyByYWRpdXMsIHJldHVybiBhIGNvbnN0YW50IG51bWJlciwgZXRjLi4uKVxuICAgKi9cbiAgZm9udFNpemVfZnVuY3Rpb246IGFueTtcbiAgLyoqXG4gICAqIGNvbG9yIG9mIHRoZSB0ZXh0XG4gICAqL1xuICBjb2xvcjogc3RyaW5nO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBjc3MgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbn1cblxuXG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBhIHNpbmdsZSBidWJibGVcbiAqXG4gKiBAcHJvcGVydHkgaWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHggKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHkgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHJhZGl1cyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY29sb3IgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHNlbGVjdGFibGUgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHNlbGVjdGVkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB0ZXh0cyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKlxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUJ1YmJsZURhdGEge1xuICAvKipcbiAgICogdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBidWJibGVcbiAgICovXG4gIGlkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aGUgYnViYmxlJ3MgKHN0YXJ0aW5nKSB4LWNvb3JkaW5hdGVcbiAgICovXG4gIHg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiB0aGUgYnViYmxlJ3MgKHN0YXJ0aW5nKSB5LWNvb3JkaW5hdGVcbiAgICovXG4gIHk/OiBudW1iZXI7XG4gIC8qKlxuICAgKiB0aGUgYnViYmxlcyByYWRpdXNcbiAgICovXG4gIHJhZGl1czogbnVtYmVyO1xuICAvKipcbiAgICogdGhlIGJ1YmJsZSdzIGNvbG9yXG4gICAqL1xuICBjb2xvcjogc3RyaW5nO1xuICAvKipcbiAgICogc3BlY2lmaWVzIGlmIHRoZSBidWJibGUgY2FuIGJlIHNlbGVjdGVkIG9yIG5vdCAoZGVmYXVsdDpmYWxzZSlcbiAgICovXG4gIHNlbGVjdGFibGU/OiBib29sZWFuO1xuICAvKipcbiAgICogc3BlY2lmaWVzIGlmIHRoZSBidWJibGUgaXMgc2VsZWN0ZWQgb3Igbm90IChkZWZhdWx0OmZhbHNlKVxuICAgKi9cbiAgc2VsZWN0ZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbiAgLyoqXG4gICAqIGFsbCB0aGUgYnViYmxlJ3MgdGV4dHNcbiAgICovXG4gIHRleHRzPzogSUJ1YmJsZVRleHRbXTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgY3NzIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG59XG5cblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWJ1YmJsZS1jaGFydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9idWJibGUtY2hhcnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQnViYmxlQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcbiAgQElucHV0KCkgZGF0YTogSUJ1YmJsZUNoYXJ0RGF0YTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuICBwcml2YXRlIF9sb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBzZWxlY3RlZEJ1YmJsZXM6IG51bWJlciA9IDA7XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCl7XG4gICAgaWYoIXRoaXMuZGF0YSkgcmV0dXJuO1xuICAgIGlmKHRoaXMuZGF0YS5yZXNldD09PXRydWUpe1xuICAgICAgdGhpcy5kYXRhLnJlc2V0PWZhbHNlO1xuICAgICAgdGhpcy5fbG9hZGVkPWZhbHNlO1xuICAgIH1cbiAgICBpZih0aGlzLl9sb2FkZWQpIHJldHVybjtcbiAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5tYWtlQnViYmxlQ2hhcnQoKSk7XG59XG5cbiAgcHJpdmF0ZSBidWJibGVzID0gbnVsbDtcbiAgcHJpdmF0ZSBnZW5lcmljQnViYmxlID0gbnVsbDtcbiAgcHJpdmF0ZSBidWJibGVDaGFydCA9IG51bGw7XG5cbiAgLyoqIE1ha2VzIHRoZSB3aG9sZSBidWJibGUgY2hhcnQgKi9cbiAgcHJpdmF0ZSBtYWtlQnViYmxlQ2hhcnQoKXtcbiAgICBkM19zZWxlY3Rpb24uc2VsZWN0KGAjJHt0aGlzLmRhdGEuY29udGFpbmVySWR9YCkuc2VsZWN0QWxsKFwiKlwiKS5yZW1vdmUoKTtcblx0ICB2YXIgcG90ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfWApO1xuICAgIHBvdC5zdHlsZS53aWR0aCA9IHRoaXMuZGF0YS5jb250YWluZXJXaWR0aCsncHgnO1xuICAgIHBvdC5zdHlsZS5oZWlnaHQgPSB0aGlzLmRhdGEuY29udGFpbmVySGVpZ2h0KydweCc7XG5cbiAgICB0aGlzLmJ1YmJsZUNoYXJ0ID0gZDNfc2VsZWN0aW9uLnNlbGVjdChgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfWApXG4gICAgICAgICAgICAgICAgLmFwcGVuZCgnc3ZnJylcbiAgICAgICAgICAgICAgICAuYXR0cignd2lkdGgnLCB0aGlzLmRhdGEuY29udGFpbmVyV2lkdGgpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMuZGF0YS5jb250YWluZXJIZWlnaHQpO1xuXG4gICAgdGhpcy5idWJibGVzID0gdGhpcy5kYXRhLmJ1YmJsZXNEYXRhO1xuXG4gICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMgPSAwO1xuICAgIHRoaXMuZGF0YS5idWJibGVzRGF0YS5mb3JFYWNoKCAoYikgPT4ge1xuICAgICAgaWYoYi5zZWxlY3RlZCkgdGhpcy5zZWxlY3RlZEJ1YmJsZXMrKztcbiAgICB9KTtcblxuICAgIHRoaXMuaW5pdEJ1YmJsZXMoKTtcblxuICAgIGlmKHRoaXMuZGF0YS5pc0ZvcmNlU2ltdWxhdGlvbkVuYWJsZWQpXG4gICAgICB0aGlzLnNldEJ1YmJsZUNoYXJ0U2ltdWxhdGlvbigpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcblxuICAgIGlmKHRoaXMuYnViYmxlQ2hhcnQpXG4gICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbChgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfSBnIGNpcmNsZSwgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfSBnIHRleHRgKS5vbignY2xpY2snLCAoZCkgPT4ge1xuICAgICAgICBpZihkLnNlbGVjdGFibGUpe1xuICAgICAgICAgIGlmKCFkLnNlbGVjdGVkICYmIHRoaXMuc2VsZWN0ZWRCdWJibGVzPHRoaXMuZGF0YS5tYXhCdWJibGVzU2VsZWN0ZWQpe1xuICAgICAgICAgICAgZC5zZWxlY3RlZD10cnVlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnY2xpY2snLHtzb3VyY2U6XCJidWJibGVcIixidWJibGVQYXlsb2FkOiBkLnBheWxvYWR9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmKHRoaXMuYnViYmxlQ2hhcnQpXG4gICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbCgnY2lyY2xlW2J1YmJsZXNUeXBlPVwieF9pbm5lcl9jaXJjbGVcIl0sIHRleHRbYnViYmxlc1R5cGU9XCJ4X2lubmVyX2xhYmVsXCJdJykub24oJ2NsaWNrJywgKGQpID0+IHtcbiAgICAgICAgaWYoZC5zZWxlY3RhYmxlKXsgXG4gICAgICAgICAgZC5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgICAgICAgIGlmKGQuc2VsZWN0ZWQpXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2NsaWNrJyx7c291cmNlOlwiY2xvc2VcIixidWJibGVQeWxvYWQ6IGQucGF5bG9hZH0pO1xuICAgICAgICAgIC8vZWxzZVxuICAgICAgICAgIC8vICB0aGlzLmVtaXQoJ2NsaWNrJyx7c291cmNlOlwiYnViYmxlXCIsYnViYmxlUHlsb2FkOiBkLnBheWxvYWR9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gIH1cblxuICAvKiogVmlzdWFsbHkgdXBkYXRlcyB0aGUgYnViYmxlIGNoYXJ0ICovXG4gIHB1YmxpYyB1cGRhdGUoKSB7XG4gICAgaWYoIXRoaXMuZGF0YSkgcmV0dXJuO1xuXG4gICAgaWYodGhpcy5nZW5lcmljQnViYmxlICYmIHRoaXMuZ2VuZXJpY0J1YmJsZS5hdHRyKXtcbiAgICAgIHRoaXMuZ2VuZXJpY0J1YmJsZS5hdHRyKCdjeCcsIChkKSA9PiB7IHJldHVybiBkLnggPSBNYXRoLm1heChkLnJhZGl1cywgTWF0aC5taW4odGhpcy5kYXRhLmNvbnRhaW5lcldpZHRoIC0gZC5yYWRpdXMsIGQueCkpOyB9KVxuICAgICAgICAuYXR0cignY3knLCAoZCkgPT4geyByZXR1cm4gZC55ID0gTWF0aC5tYXgoZC5yYWRpdXMsIE1hdGgubWluKHRoaXMuZGF0YS5jb250YWluZXJIZWlnaHQgLSBkLnJhZGl1cywgZC55KSk7IH0pO1xuICAgIH1cblxuICAgIGlmKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuYnViYmxlc0RhdGEpXG4gICAgICB0aGlzLmRhdGEuYnViYmxlc0RhdGEuZm9yRWFjaCggKGMpID0+IHtcbiAgICAgICAgICBjLnRleHRzLmZvckVhY2goIHR4ID0+IHtcbiAgICAgICAgICAgICAgdmFyIHR4dCA9IHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0KGB0ZXh0W2J1YmJsZXNFbElkPSR7dHguaWR9XWApO1xuICAgICAgICAgICAgICB0eHQuYXR0cihcImR5XCIsIHR4LnlfZnVuY3Rpb24gKTtcbiAgICAgICAgICAgICAgdHh0LmF0dHIoXCJkeFwiLCB0eC54X2Z1bmN0aW9uICk7XG4gICAgICAgICAgfSlcbiAgICAgIH0pO1xuXG4gICAgaWYodGhpcy5idWJibGVDaGFydCl7XG4gICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbCgnY2lyY2xlW2J1YmJsZXNUeXBlPVwieF9pbm5lcl9jaXJjbGVcIl0nKVxuICAgICAgLmF0dHIoXCJjeVwiLCAoZCkgPT4gZC55KyhkLnJhZGl1cy8yKSApXG4gICAgICAuYXR0cihcImN4XCIsIChkKSA9PiBkLnggKVxuICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIChkKSA9PiAoIGQuc2VsZWN0ZWQgPyAxIDogMCApICk7XG4gICAgfVxuXG4gICAgaWYodGhpcy5idWJibGVDaGFydCl7XG4gICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbCgndGV4dFtidWJibGVzVHlwZT1cInhfaW5uZXJfbGFiZWxcIl0nKVxuICAgICAgLmF0dHIoXCJkeVwiLCAoZCkgPT4gZC55KyhkLnJhZGl1cy8yKSs2IClcbiAgICAgIC5hdHRyKFwiZHhcIiwgKGQpID0+IGQueCApXG4gICAgICAuYXR0cihcIm9wYWNpdHlcIiwgKGQpID0+ICggZC5zZWxlY3RlZCA/IDEgOiAwICkgKTtcbiAgICB9XG5cbiAgfVxuXG5cblxuICAvKiogSW5pdGlhbGl6ZWQgdGhlIGNoYXJ0J3MgYnViYmxlcyAqL1xuICBwcml2YXRlIGluaXRCdWJibGVzKCk6IHZvaWQge1xuXG4gICAgaWYodGhpcy5idWJibGVDaGFydClcbiAgICAgIHRoaXMuZ2VuZXJpY0J1YmJsZSA9IHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0QWxsKGAjJHt0aGlzLmRhdGEuY29udGFpbmVySWR9IGdgKVxuICAgICAgICAuZGF0YSh0aGlzLmJ1YmJsZXMpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cihcImJ1YmJsZXNFbElkXCIsKGQpPT5kLmlkKVxuICAgICAgICAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAuYXR0cigncicsIChkKSA9PiBNYXRoLm1heCgwLCBkLnJhZGl1cyAtIDUuMDUpIClcbiAgICAgICAgLmF0dHIoXCJjeFwiLCAoZCk9PmQueClcbiAgICAgICAgLmF0dHIoXCJjeVwiLCAoZCk9PmQueSlcbiAgICAgICAgLmF0dHIoJ3BhZGRpbmcnLCAoZCkgPT4gNTAgKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsKGQpPT5kLmNsYXNzZXMgKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoZCkgPT4gZC5jb2xvciApO1xuXG4gICAgaWYodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5idWJibGVzRGF0YSAmJiB0aGlzLmJ1YmJsZUNoYXJ0KVxuICAgICAgdGhpcy5kYXRhLmJ1YmJsZXNEYXRhLmZvckVhY2goIChjKSA9PiB7XG4gICAgICAgIGxldCBncm91cCA9IHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0KGBnW2J1YmJsZXNFbElkPSR7Yy5pZH1dYCk7XG4gICAgICAgIGMudGV4dHMuZm9yRWFjaCggdHggPT4ge1xuICAgICAgICAgIGdyb3VwLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAgIC5hdHRyKFwiZHhcIiwgdHgueF9mdW5jdGlvbiApXG4gICAgICAgICAgLmF0dHIoXCJkeVwiLCB0eC55X2Z1bmN0aW9uIClcbiAgICAgICAgICAudGV4dCh0eC5sYWJlbClcbiAgICAgICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCB0eC5mb250U2l6ZV9mdW5jdGlvbilcbiAgICAgICAgICAuYXR0cihcImZpbGxcIiwgdHguY29sb3IpXG4gICAgICAgICAgLmF0dHIoXCJidWJibGVzRWxJZFwiLHR4LmlkKVxuICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIix0eC5jbGFzc2VzKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZih0aGlzLmJ1YmJsZUNoYXJ0KVxuICAgICAgdGhpcy5idWJibGVDaGFydC5zZWxlY3RBbGwoYCMke3RoaXMuZGF0YS5jb250YWluZXJJZH0gZ2ApXG4gICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgIC5hdHRyKCAncicsIChkKSA9PiAxMCApXG4gICAgICAgIC5hdHRyKCAncGFkZGluZycsIChkKSA9PiA1MCApXG4gICAgICAgIC5zdHlsZSggJ2ZpbGwnLCBcIndoaXRlXCIgKVxuICAgICAgICAuYXR0ciggJ2N4JywgKGQpID0+IGQueCApXG4gICAgICAgIC5hdHRyKCAnY3knLCAoZCkgPT4gZC55IClcbiAgICAgICAgLmF0dHIoIFwiYnViYmxlc1R5cGVcIixcInhfaW5uZXJfY2lyY2xlXCIpXG4gICAgICAgIC5hdHRyKCBcImNsYXNzXCIsXCJjaXJjbGVfeC1pbm5lci1jaXJjbGVcIik7XG5cbiAgICBpZih0aGlzLmJ1YmJsZUNoYXJ0KVxuICAgICAgdGhpcy5idWJibGVDaGFydC5zZWxlY3RBbGwoYCMke3RoaXMuZGF0YS5jb250YWluZXJJZH0gZ2ApXG4gICAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgIC5zdHlsZShcInVzZXItc2VsZWN0XCIsXCJub25lXCIpXG4gICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLFwiYmxhY2tcIilcbiAgICAgICAgLmh0bWwoXCImIzEwMDA1O1wiKVxuICAgICAgICAuYXR0cihcImZvbnQtZmFtaWx5XCIsIFwic2Fucy1zZXJpZlwiKVxuICAgICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLDE1KVxuICAgICAgICAuYXR0cihcImJ1YmJsZXNUeXBlXCIsXCJ4X2lubmVyX2xhYmVsXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIixcImNpcmNsZV94LWxhYmVsXCIpO1xuXG4gIH1cblxuXG5cbiAgLyoqIFNldHMgdGhlIGJ1YmJsZSBjaGFydCBmb3JjZSBzaW11bGF0aW9uICovXG4gIHByaXZhdGUgc2V0QnViYmxlQ2hhcnRTaW11bGF0aW9uKCl7XG4gICAgbGV0IHRtcFNpbXVsYXRpb25EYXRhID0gKCB0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmZvcmNlU2ltdWxhdGlvbkRhdGEgPyB0aGlzLmRhdGEuZm9yY2VTaW11bGF0aW9uRGF0YSA6IHt9ICk7XG4gICAgdmFyIHhQdWxsID0gKCB0bXBTaW11bGF0aW9uRGF0YVsneFB1bGwnXSA/IHRtcFNpbXVsYXRpb25EYXRhWyd4UHVsbCddIDogdGhpcy5kYXRhLmNvbnRhaW5lcldpZHRoLzIgKTtcbiAgICB2YXIgeFB1bGxTdHJlbmd0aCA9ICggdG1wU2ltdWxhdGlvbkRhdGFbJ3hQdWxsU3RyZW5ndGgnXSA/IHRtcFNpbXVsYXRpb25EYXRhWyd4UHVsbFN0cmVuZ3RoJ10gOiAtMC4wMSApO1xuICAgIHZhciB5UHVsbCA9ICggdG1wU2ltdWxhdGlvbkRhdGFbJ3lQdWxsJ10gPyB0bXBTaW11bGF0aW9uRGF0YVsneVB1bGwnXSA6IHRoaXMuZGF0YS5jb250YWluZXJIZWlnaHQvMiApO1xuICAgIHZhciB5UHVsbFN0cmVuZ3RoID0gKCB0bXBTaW11bGF0aW9uRGF0YVsneVB1bGxTdHJlbmd0aCddID8gdG1wU2ltdWxhdGlvbkRhdGFbJ3lQdWxsU3RyZW5ndGgnXSA6IC0wLjAxICk7XG4gICAgdmFyIGNvbGxpc2lvblN0cmVuZ3RoID0gKCB0bXBTaW11bGF0aW9uRGF0YVsnY29sbGlzaW9uU3RyZW5naCddID8gdG1wU2ltdWxhdGlvbkRhdGFbJ2NvbGxpc2lvblN0cmVuZ2gnXSA6IDAuOTkgKTtcbiAgICB2YXIgY29sbGlzaW9uSXRlcmF0aW9ucyA9ICggdG1wU2ltdWxhdGlvbkRhdGFbJ2NvbGxpc2lvbkl0ZXJhdGlvbnMnXSA/IHRtcFNpbXVsYXRpb25EYXRhWydjb2xsaXNpb25JdGVyYXRpb25zJ10gOiAxICk7XG4gICAgdmFyIHZlbG9jaXR5RGVjYXkgPSAoIHRtcFNpbXVsYXRpb25EYXRhWyd2ZWxvY2l0eURlY2F5J10gPyB0bXBTaW11bGF0aW9uRGF0YVsndmVsb2NpdHlEZWNheSddIDogMC45OSApO1xuICAgIGQzX2ZvcmNlLmZvcmNlU2ltdWxhdGlvbigpXG4gICAgICAudmVsb2NpdHlEZWNheSh2ZWxvY2l0eURlY2F5KVxuICAgICAgLmZvcmNlKFwieFwiLCBkM19mb3JjZS5mb3JjZVgoeFB1bGwpLnN0cmVuZ3RoKHhQdWxsU3RyZW5ndGgpKVxuICAgICAgLmZvcmNlKFwieVwiLCBkM19mb3JjZS5mb3JjZVkoeVB1bGwpLnN0cmVuZ3RoKHlQdWxsU3RyZW5ndGgpKVxuICAgICAgLmZvcmNlKFwiY29sbGlkZVwiLCBkM19mb3JjZS5mb3JjZUNvbGxpZGUoKS5yYWRpdXMoKGQpPT5kLnJhZGl1cykuc3RyZW5ndGgoY29sbGlzaW9uU3RyZW5ndGgpLml0ZXJhdGlvbnMoY29sbGlzaW9uSXRlcmF0aW9ucykpXG4gICAgICAubm9kZXModGhpcy5idWJibGVzKVxuICAgICAgLm9uKCd0aWNrJywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gIH1cblxuXG5cbn0iXX0=