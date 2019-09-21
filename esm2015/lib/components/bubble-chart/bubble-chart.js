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
export class BubbleChartComponent {
    constructor() {
        this._loaded = false;
        this.selectedBubbles = 0;
        this.bubbles = null;
        this.genericBubble = null;
        this.bubbleChart = null;
        this.maxBubblesSelected = -1;
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
        if (this.data.maxBubblesSelected)
            this.maxBubblesSelected = this.data.maxBubblesSelected;
        this.selectedBubbles = 0;
        this.data.bubblesData.forEach((/**
         * @param {?} b
         * @return {?}
         */
        (b) => {
            if (b.selected)
                this.selectedBubbles++;
        }));
        this.initBubbles();
        if (this.data.isForceSimulationEnabled)
            this.setBubbleChartSimulation();
        this.update();
        if (this.bubbleChart)
            this.bubbleChart.selectAll(`#${this.data.containerId} g circle, #${this.data.containerId} g text`).on('click', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => {
                if (d.selectable) {
                    if (!d.selected)
                        this.selectbubbleIfPossible(d);
                }
            }));
        if (this.bubbleChart)
            this.bubbleChart.selectAll('circle[bubblesType="x_inner_circle"], text[bubblesType="x_inner_label"]').on('click', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => {
                if (d.selectable) {
                    if (!d.selected)
                        this.selectbubbleIfPossible(d);
                    else {
                        d.selected = false;
                        this.selectedBubbles--;
                        this.update();
                        if (!this.emit)
                            return;
                        this.emit('click', { source: "close", bubblePyload: d.payload });
                    }
                }
            }));
    }
    /**
     * @private
     * @param {?} bubble
     * @return {?}
     */
    selectbubbleIfPossible(bubble) {
        if (this.maxBubblesSelected < 0 || this.selectedBubbles < this.maxBubblesSelected) {
            bubble.selected = true;
            this.selectedBubbles++;
            this.update();
            if (!this.emit)
                return;
            this.emit('click', { source: "bubble", bubblePayload: bubble.payload });
        }
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
            (d) => (d.selected ? 1 : 0)));
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
            (d) => (d.selected ? 1 : 0)));
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
    /**
     * @type {?}
     * @private
     */
    BubbleChartComponent.prototype.maxBubblesSelected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQvYnViYmxlLWNoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxLQUFLLFlBQVksTUFBTSxjQUFjLENBQUM7OztBQUc3QyxPQUFPLEtBQUssUUFBUSxNQUFNLFVBQVUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFvQnJDLHNDQXNDQzs7Ozs7O0lBbENDLHVDQUFvQjs7Ozs7SUFJcEIsMENBQXVCOzs7OztJQUl2QiwyQ0FBd0I7Ozs7O0lBSXhCLHVDQUEyQjs7Ozs7O0lBSzNCLG9EQUFrQzs7Ozs7SUFJbEMsK0NBQXNEOzs7OztJQUl0RCxtQ0FBaUI7Ozs7O0lBSWpCLGlDQUFlOzs7OztJQUlmLDhDQUE0Qjs7Ozs7Ozs7Ozs7Ozs7OztBQXFCOUIscURBOEJDOzs7Ozs7SUExQkMsZ0RBQWU7Ozs7O0lBSWYsd0RBQXVCOzs7OztJQUl2QixnREFBZTs7Ozs7SUFJZix3REFBdUI7Ozs7O0lBSXZCLDJEQUEwQjs7Ozs7O0lBSzFCLDhEQUE2Qjs7Ozs7SUFJN0Isd0RBQXVCOzs7Ozs7Ozs7Ozs7Ozs7QUFpQnpCLGlDQWdDQzs7Ozs7O0lBNUJDLHlCQUFXOzs7OztJQUlYLDRCQUFjOzs7Ozs7SUFLZCxpQ0FBZ0I7Ozs7OztJQUtoQixpQ0FBZ0I7Ozs7OztJQUtoQix3Q0FBdUI7Ozs7O0lBSXZCLDRCQUFjOzs7OztJQUlkLDhCQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JuQixpQ0F5Q0M7Ozs7OztJQXJDQyx5QkFBVzs7Ozs7SUFJWCx3QkFBVzs7Ozs7SUFJWCx3QkFBVzs7Ozs7SUFJWCw2QkFBZTs7Ozs7SUFJZiw0QkFBYzs7Ozs7SUFJZCxpQ0FBcUI7Ozs7O0lBSXJC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QUFHLENBQUUsaUJBQWlCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUU7UUFDdEcsUUFBUSxDQUFDLGVBQWUsRUFBRTthQUN2QixhQUFhLENBQUMsYUFBYSxDQUFDO2FBQzVCLEtBQUssQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDMUQsS0FBSyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUMxRCxLQUFLLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFBLENBQUMsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQzthQUMzSCxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNuQixFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7O1lBeE1GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiwwSUFBa0M7YUFDbkM7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETixvQ0FBZ0M7O0lBQ2hDLG9DQUFtQjs7Ozs7SUFDbkIsdUNBQWlDOzs7OztJQUNqQywrQ0FBb0M7Ozs7O0lBYXBDLHVDQUF1Qjs7Ozs7SUFDdkIsNkNBQTZCOzs7OztJQUM3QiwyQ0FBMkI7Ozs7O0lBQzNCLGtEQUF3QyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBCVUJCTEVDSEFSVC50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZDNfc2VsZWN0aW9uIGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbi8vIGltcG9ydCBvbmx5IGZvciBhdXRvLWFsbG9jYXRpbmcgdGhlIGJ1YmJsZXMgKG5lZWRzIGhlYXZ5IHJlZmFjdG9yaW5nIHRvIHdvcmspXG4vL2ltcG9ydCAqIGFzIGQzX2hpZXJhcmNoeSBmcm9tIFwiZDMtaGllcmFyY2h5XCI7XG5pbXBvcnQgKiBhcyBkM19mb3JjZSBmcm9tIFwiZDMtZm9yY2VcIjtcblxuXG5cblxuXG5cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEJ1YmJsZUNoYXJ0Q29tcG9uZW50J3MgXCJkYXRhXCJcbiAqIFxuICogQHByb3BlcnR5IGNvbnRhaW5lcklkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjb250YWluZXJXaWR0aCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY29udGFpbmVySGVpZ2h0IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBidWJibGVzRGF0YSAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSByZXNldCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgbWF4QnViYmxlc1NlbGVjdGVkIChvcHRpb25hbClcbiovXG5leHBvcnQgaW50ZXJmYWNlIElCdWJibGVDaGFydERhdGEge1xuICAvKipcbiAgICogdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBidWJibGUtY2hhcnRcbiAgICovXG4gIGNvbnRhaW5lcklkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0b3RhbCB3aWR0aCBmb3IgdGhlIGJ1YmJsZS1jaGFydFxuICAgKi9cbiAgY29udGFpbmVyV2lkdGg6IG51bWJlcjtcbiAgLyoqXG4gICAqIHRvdGFsIGhlaWdodCBmb3IgdGhlIGJ1YmJsZS1jaGFydFxuICAgKi9cbiAgY29udGFpbmVySGVpZ2h0OiBudW1iZXI7XG4gIC8qKlxuICAgKiBkYXRhIGFib3V0IHRoZSBidWJibGVzXG4gICAqL1xuICBidWJibGVzRGF0YTogSUJ1YmJsZURhdGFbXTtcbiAgLyoqXG4gICAqIHdoZXRoZXIgdGhlIGZvcmNlIHNpbXVsYXRpb24gc2hvdWxkIGJlIGVuYWJsZWQgb3Igbm90XG4gICAqIChkbyB0aGUgYnViYmxlcycgcG9zaXRpb25zIFwiYWRhcHRcIiB0byB0aGUgY29udGFpbmVyIG9yIG5vdD8pXG4gICAqL1xuICBpc0ZvcmNlU2ltdWxhdGlvbkVuYWJsZWQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBvcHRpb25zIGZvciB0aGUgZm9yY2Ugc2ltdWxhdGlvbiAoaWdub3JlZCBpZiBpc0ZvcmNlU2ltdWxhdGlvbkVuYWJsZWQgaXMgZmFsc2UpXG4gICAqL1xuICBmb3JjZVNpbXVsYXRpb25EYXRhPzogSUJ1YmJsZUNoYXJ0Rm9yY2VTaW11bGF0aW9uRGF0YTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgY3NzIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBzcGVjaWZpZXMgaWYgdGhlIGJ1YmJsZXMgaGF2ZSB0byBiZSByZXNldCBmcm9tIGEgcHJldmlvdXMgaW5zdGFudGlhdGlvblxuICAgKi9cbiAgcmVzZXQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiBzcGVjaWZpZXMgdGhlIG1heGltdW0gbnVtYmVyIG9mIHNlbGVjdGVkIGJ1YmJsZXMgYXQgdGhlIHNhbWUgdGltZSAoZGVmYXVsdDogaW5maW5pdHkpXG4gICovXG4gIG1heEJ1YmJsZXNTZWxlY3RlZD86IG51bWJlcjtcbn1cblxuXG5cblxuXG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBCdWJibGVDaGFydENvbXBvbmVudCdzIHNpbXVsYXRpb24gXCJkYXRhXCJcbiAqIChhbGwgdGhlIHByb3BlcnRpZXMgYXJlIG9wdGlvbmFscyBhbmQgaWYgbm90IHByb3ZpZGVkXG4gKiBhIGRlZmF1bHQgdmFsdWUgaXMgdXNlZCBpbnN0ZWFkKVxuICogXG4gKiBAcHJvcGVydHkgeFB1bGwgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHhQdWxsU3RyZW5ndGggKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHlQdWxsIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB5UHVsbFN0cmVuZ3RoIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjb2xsaXNpb25TdHJlbmdoIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjb2xsaXNpb25JdGVyYXRpb25zIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB2ZWxvY2l0eURlY2F5IChvcHRpb25hbClcbiovXG5leHBvcnQgaW50ZXJmYWNlIElCdWJibGVDaGFydEZvcmNlU2ltdWxhdGlvbkRhdGEge1xuICAvKipcbiAgICogeC1jb29yZGluYXRlIHRvIHdoaWNoIHRoZSBidWJibGVzIGFyZSBwdWxsZWQgdG9cbiAgICovXG4gIHhQdWxsPzogbnVtYmVyO1xuICAvKipcbiAgICogc3RyZW5ndGggZm9yIHRoZSBwdWxsIHRvd2FyZCB0aGUgeFB1bGwgeC1jb29yZGluYXRlXG4gICAqL1xuICB4UHVsbFN0cmVuZ3RoPzogbnVtYmVyO1xuICAvKipcbiAgICogeS1jb29yZGluYXRlIHRvIHdoaWNoIHRoZSBidWJibGVzIGFyZSBwdWxsZWQgdG9cbiAgICovXG4gIHlQdWxsPzogbnVtYmVyO1xuICAvKipcbiAgICogc3RyZW5ndGggZm9yIHRoZSBwdWxsIHRvd2FyZCB0aGUgeVB1bGwgeS1jb29yZGluYXRlXG4gICAqL1xuICB5UHVsbFN0cmVuZ3RoPzogbnVtYmVyO1xuICAvKipcbiAgICogc3RyZW5ndGggb2YgYnViYmxlJ3MgY29sbGlzaW9uXG4gICAqL1xuICBjb2xsaXNpb25TdHJlbmdoPzogbnVtYmVyO1xuICAvKipcbiAgICogbnVtYmVyIG9mIGl0ZXJhdGlvbnMgaW4gdGhlIGJ1YmJsZSdzIGNvbGxpc2lvbiBkZXRlY3Rpb25cbiAgICogKHRoZSBoaWdoZXIgdGhlIG51bWJlciB0aGUgbW9yZSBwcmVjaXNlIGFuZCBjb3N0bHkgdGhlIGRldGVjdGlvbilcbiAgICovXG4gIGNvbGxpc2lvbkl0ZXJhdGlvbnM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBpbmRpY2F0b3Igb24gaG93IGZhc3QgdGhlIGJ1YmJsZSdzIHZlbG9jaXR5IGRlY3JlYXNlc1xuICAgKi9cbiAgdmVsb2NpdHlEZWNheT86IG51bWJlcjtcbn1cblxuXG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBhIGJ1YmJsZSdzIHRleHRcbiAqXG4gKiBAcHJvcGVydHkgaWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGxhYmVsIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSB4X2Z1bmN0aW9uIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSB5X2Z1bmN0aW9uIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBmb250U2l6ZV9mdW5jdGlvbiAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY29sb3IgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICpcbiovXG5leHBvcnQgaW50ZXJmYWNlIElCdWJibGVUZXh0IHtcbiAgLyoqXG4gICAqIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgdGV4dFxuICAgKi9cbiAgaWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIHRoZSBhY3R1YWwgdGV4dFxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICAqIGZ1bmN0aW9uIHVzZWQgdG8gc3BlY2lmeSB0aGUgeCBwb3NpdGlvbiB0aGUgdGV4dFxuICAgKiAoY2FuIGRlcGVuZCBvbiB0aGUgYnViYmxlJ3MgeC1wb3NpdGlvbiwgcmFkaXVzLCBldGMuLi4pXG4gICAqL1xuICB4X2Z1bmN0aW9uOiBhbnk7XG4gIC8qKlxuICAgKiBmdW5jdGlvbiB1c2VkIHRvIHNwZWNpZnkgdGhlIHkgcG9zaXRpb24gdGhlIHRleHRcbiAgICogKGNhbiBkZXBlbmQgb24gdGhlIGJ1YmJsZSdzIHktcG9zaXRpb24sIHJhZGl1cywgZXRjLi4uKVxuICAgKi9cbiAgeV9mdW5jdGlvbjogYW55O1xuICAvKipcbiAgICogZnVuY3Rpb24gdXNlZCB0byBzcGVjaWZ5IHRoZSBmb250IHNpemUgb2YgdGhlIHRleHRcbiAgICogKGNhbiBkZXBlbmQgb24gdGhlIGJ1YmJsZSdzIHJhZGl1cywgcmV0dXJuIGEgY29uc3RhbnQgbnVtYmVyLCBldGMuLi4pXG4gICAqL1xuICBmb250U2l6ZV9mdW5jdGlvbjogYW55O1xuICAvKipcbiAgICogY29sb3Igb2YgdGhlIHRleHRcbiAgICovXG4gIGNvbG9yOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGNzcyBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG5cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGEgc2luZ2xlIGJ1YmJsZVxuICpcbiAqIEBwcm9wZXJ0eSBpZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgeCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgeSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcmFkaXVzIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjb2xvciAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgc2VsZWN0YWJsZSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgc2VsZWN0ZWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHRleHRzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqXG4qL1xuZXhwb3J0IGludGVyZmFjZSBJQnViYmxlRGF0YSB7XG4gIC8qKlxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGJ1YmJsZVxuICAgKi9cbiAgaWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIHRoZSBidWJibGUncyAoc3RhcnRpbmcpIHgtY29vcmRpbmF0ZVxuICAgKi9cbiAgeD86IG51bWJlcjtcbiAgLyoqXG4gICAqIHRoZSBidWJibGUncyAoc3RhcnRpbmcpIHktY29vcmRpbmF0ZVxuICAgKi9cbiAgeT86IG51bWJlcjtcbiAgLyoqXG4gICAqIHRoZSBidWJibGVzIHJhZGl1c1xuICAgKi9cbiAgcmFkaXVzOiBudW1iZXI7XG4gIC8qKlxuICAgKiB0aGUgYnViYmxlJ3MgY29sb3JcbiAgICovXG4gIGNvbG9yOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBzcGVjaWZpZXMgaWYgdGhlIGJ1YmJsZSBjYW4gYmUgc2VsZWN0ZWQgb3Igbm90IChkZWZhdWx0OmZhbHNlKVxuICAgKi9cbiAgc2VsZWN0YWJsZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBzcGVjaWZpZXMgaWYgdGhlIGJ1YmJsZSBpcyBzZWxlY3RlZCBvciBub3QgKGRlZmF1bHQ6ZmFsc2UpXG4gICAqL1xuICBzZWxlY3RlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAqL1xuICBwYXlsb2FkPzogYW55O1xuICAvKipcbiAgICogYWxsIHRoZSBidWJibGUncyB0ZXh0c1xuICAgKi9cbiAgdGV4dHM/OiBJQnViYmxlVGV4dFtdO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBjc3MgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbn1cblxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctYnViYmxlLWNoYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1YmJsZS1jaGFydC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBCdWJibGVDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuICBASW5wdXQoKSBkYXRhOiBJQnViYmxlQ2hhcnREYXRhO1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG4gIHByaXZhdGUgX2xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHNlbGVjdGVkQnViYmxlczogbnVtYmVyID0gMDtcblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKXtcbiAgICBpZighdGhpcy5kYXRhKSByZXR1cm47XG4gICAgaWYodGhpcy5kYXRhLnJlc2V0PT09dHJ1ZSl7XG4gICAgICB0aGlzLmRhdGEucmVzZXQ9ZmFsc2U7XG4gICAgICB0aGlzLl9sb2FkZWQ9ZmFsc2U7XG4gICAgfVxuICAgIGlmKHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xuICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm1ha2VCdWJibGVDaGFydCgpKTtcbn1cblxuICBwcml2YXRlIGJ1YmJsZXMgPSBudWxsO1xuICBwcml2YXRlIGdlbmVyaWNCdWJibGUgPSBudWxsO1xuICBwcml2YXRlIGJ1YmJsZUNoYXJ0ID0gbnVsbDtcbiAgcHJpdmF0ZSBtYXhCdWJibGVzU2VsZWN0ZWQ6IG51bWJlciA9IC0xO1xuXG4gIC8qKiBNYWtlcyB0aGUgd2hvbGUgYnViYmxlIGNoYXJ0ICovXG4gIHB1YmxpYyBtYWtlQnViYmxlQ2hhcnQoKXtcbiAgICBkM19zZWxlY3Rpb24uc2VsZWN0KGAjJHt0aGlzLmRhdGEuY29udGFpbmVySWR9YCkuc2VsZWN0QWxsKFwiKlwiKS5yZW1vdmUoKTtcblx0dmFyIHBvdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuZGF0YS5jb250YWluZXJJZH1gKTtcbiAgICBwb3Quc3R5bGUud2lkdGggPSB0aGlzLmRhdGEuY29udGFpbmVyV2lkdGgrJ3B4JztcbiAgICBwb3Quc3R5bGUuaGVpZ2h0ID0gdGhpcy5kYXRhLmNvbnRhaW5lckhlaWdodCsncHgnO1xuXG4gICAgdGhpcy5idWJibGVDaGFydCA9IGQzX3NlbGVjdGlvbi5zZWxlY3QoYCMke3RoaXMuZGF0YS5jb250YWluZXJJZH1gKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgdGhpcy5kYXRhLmNvbnRhaW5lcldpZHRoKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCB0aGlzLmRhdGEuY29udGFpbmVySGVpZ2h0KTtcblxuICAgIHRoaXMuYnViYmxlcyA9IHRoaXMuZGF0YS5idWJibGVzRGF0YTtcblxuICAgIGlmKHRoaXMuZGF0YS5tYXhCdWJibGVzU2VsZWN0ZWQpXG4gICAgICB0aGlzLm1heEJ1YmJsZXNTZWxlY3RlZD10aGlzLmRhdGEubWF4QnViYmxlc1NlbGVjdGVkO1xuXG4gICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMgPSAwO1xuICAgIHRoaXMuZGF0YS5idWJibGVzRGF0YS5mb3JFYWNoKCAoYikgPT4ge1xuICAgICAgaWYoYi5zZWxlY3RlZCkgdGhpcy5zZWxlY3RlZEJ1YmJsZXMrKztcbiAgICB9KTtcblxuICAgIHRoaXMuaW5pdEJ1YmJsZXMoKTtcblxuICAgIGlmKHRoaXMuZGF0YS5pc0ZvcmNlU2ltdWxhdGlvbkVuYWJsZWQpXG4gICAgICB0aGlzLnNldEJ1YmJsZUNoYXJ0U2ltdWxhdGlvbigpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcblxuICAgIGlmKHRoaXMuYnViYmxlQ2hhcnQpXG4gICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbChgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfSBnIGNpcmNsZSwgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfSBnIHRleHRgKS5vbignY2xpY2snLCAoZCkgPT4ge1xuICAgICAgICBpZihkLnNlbGVjdGFibGUpe1xuICAgICAgICAgIGlmKCFkLnNlbGVjdGVkKSB0aGlzLnNlbGVjdGJ1YmJsZUlmUG9zc2libGUoZCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmKHRoaXMuYnViYmxlQ2hhcnQpXG4gICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbCgnY2lyY2xlW2J1YmJsZXNUeXBlPVwieF9pbm5lcl9jaXJjbGVcIl0sIHRleHRbYnViYmxlc1R5cGU9XCJ4X2lubmVyX2xhYmVsXCJdJykub24oJ2NsaWNrJywgKGQpID0+IHtcbiAgICAgICAgaWYoZC5zZWxlY3RhYmxlKXtcbiAgICAgICAgICBpZighZC5zZWxlY3RlZCkgdGhpcy5zZWxlY3RidWJibGVJZlBvc3NpYmxlKGQpO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZC5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMtLTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2NsaWNrJyx7c291cmNlOlwiY2xvc2VcIixidWJibGVQeWxvYWQ6IGQucGF5bG9hZH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RidWJibGVJZlBvc3NpYmxlKGJ1YmJsZSl7XG4gICAgaWYodGhpcy5tYXhCdWJibGVzU2VsZWN0ZWQ8MCB8fCB0aGlzLnNlbGVjdGVkQnViYmxlczx0aGlzLm1heEJ1YmJsZXNTZWxlY3RlZCl7XG4gICAgICBidWJibGUuc2VsZWN0ZWQ9dHJ1ZTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzKys7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgICAgdGhpcy5lbWl0KCdjbGljaycse3NvdXJjZTpcImJ1YmJsZVwiLGJ1YmJsZVBheWxvYWQ6IGJ1YmJsZS5wYXlsb2FkfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFZpc3VhbGx5IHVwZGF0ZXMgdGhlIGJ1YmJsZSBjaGFydCAqL1xuICBwdWJsaWMgdXBkYXRlKCkge1xuICAgIGlmKCF0aGlzLmRhdGEpIHJldHVybjtcblxuICAgIGlmKHRoaXMuZ2VuZXJpY0J1YmJsZSAmJiB0aGlzLmdlbmVyaWNCdWJibGUuYXR0cil7XG4gICAgICB0aGlzLmdlbmVyaWNCdWJibGUuYXR0cignY3gnLCAoZCkgPT4geyByZXR1cm4gZC54ID0gTWF0aC5tYXgoZC5yYWRpdXMsIE1hdGgubWluKHRoaXMuZGF0YS5jb250YWluZXJXaWR0aCAtIGQucmFkaXVzLCBkLngpKTsgfSlcbiAgICAgICAgLmF0dHIoJ2N5JywgKGQpID0+IHsgcmV0dXJuIGQueSA9IE1hdGgubWF4KGQucmFkaXVzLCBNYXRoLm1pbih0aGlzLmRhdGEuY29udGFpbmVySGVpZ2h0IC0gZC5yYWRpdXMsIGQueSkpOyB9KTtcbiAgICB9XG5cbiAgICBpZih0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmJ1YmJsZXNEYXRhKVxuICAgICAgdGhpcy5kYXRhLmJ1YmJsZXNEYXRhLmZvckVhY2goIChjKSA9PiB7XG4gICAgICAgICAgYy50ZXh0cy5mb3JFYWNoKCB0eCA9PiB7XG4gICAgICAgICAgICAgIHZhciB0eHQgPSB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdChgdGV4dFtidWJibGVzRWxJZD0ke3R4LmlkfV1gKTtcbiAgICAgICAgICAgICAgdHh0LmF0dHIoXCJkeVwiLCB0eC55X2Z1bmN0aW9uICk7XG4gICAgICAgICAgICAgIHR4dC5hdHRyKFwiZHhcIiwgdHgueF9mdW5jdGlvbiApO1xuICAgICAgICAgIH0pXG4gICAgICB9KTtcblxuICAgIGlmKHRoaXMuYnViYmxlQ2hhcnQpe1xuICAgICAgdGhpcy5idWJibGVDaGFydC5zZWxlY3RBbGwoJ2NpcmNsZVtidWJibGVzVHlwZT1cInhfaW5uZXJfY2lyY2xlXCJdJylcbiAgICAgIC5hdHRyKFwiY3lcIiwgKGQpID0+IGQueSsoZC5yYWRpdXMvMikgKVxuICAgICAgLmF0dHIoXCJjeFwiLCAoZCkgPT4gZC54IClcbiAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCAoZCkgPT4gKCBkLnNlbGVjdGVkID8gMSA6IDAgKSApO1xuICAgIH1cblxuICAgIGlmKHRoaXMuYnViYmxlQ2hhcnQpe1xuICAgICAgdGhpcy5idWJibGVDaGFydC5zZWxlY3RBbGwoJ3RleHRbYnViYmxlc1R5cGU9XCJ4X2lubmVyX2xhYmVsXCJdJylcbiAgICAgIC5hdHRyKFwiZHlcIiwgKGQpID0+IGQueSsoZC5yYWRpdXMvMikrNiApXG4gICAgICAuYXR0cihcImR4XCIsIChkKSA9PiBkLnggKVxuICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIChkKSA9PiAoIGQuc2VsZWN0ZWQgPyAxIDogMCApICk7XG4gICAgfVxuXG4gIH1cblxuXG5cbiAgLyoqIEluaXRpYWxpemVkIHRoZSBjaGFydCdzIGJ1YmJsZXMgKi9cbiAgcHJpdmF0ZSBpbml0QnViYmxlcygpOiB2b2lkIHtcblxuICAgIGlmKHRoaXMuYnViYmxlQ2hhcnQpXG4gICAgICB0aGlzLmdlbmVyaWNCdWJibGUgPSB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbChgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfSBnYClcbiAgICAgICAgLmRhdGEodGhpcy5idWJibGVzKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoXCJidWJibGVzRWxJZFwiLChkKT0+ZC5pZClcbiAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgLmF0dHIoJ3InLCAoZCkgPT4gTWF0aC5tYXgoMCwgZC5yYWRpdXMgLSA1LjA1KSApXG4gICAgICAgIC5hdHRyKFwiY3hcIiwgKGQpPT5kLngpXG4gICAgICAgIC5hdHRyKFwiY3lcIiwgKGQpPT5kLnkpXG4gICAgICAgIC5hdHRyKCdwYWRkaW5nJywgKGQpID0+IDUwIClcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLChkKT0+ZC5jbGFzc2VzIClcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKGQpID0+IGQuY29sb3IgKTtcblxuICAgIGlmKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuYnViYmxlc0RhdGEgJiYgdGhpcy5idWJibGVDaGFydClcbiAgICAgIHRoaXMuZGF0YS5idWJibGVzRGF0YS5mb3JFYWNoKCAoYykgPT4ge1xuICAgICAgICBsZXQgZ3JvdXAgPSB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdChgZ1tidWJibGVzRWxJZD0ke2MuaWR9XWApO1xuICAgICAgICBjLnRleHRzLmZvckVhY2goIHR4ID0+IHtcbiAgICAgICAgICBncm91cC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgICAgICAuYXR0cihcImR4XCIsIHR4LnhfZnVuY3Rpb24gKVxuICAgICAgICAgIC5hdHRyKFwiZHlcIiwgdHgueV9mdW5jdGlvbiApXG4gICAgICAgICAgLnRleHQodHgubGFiZWwpXG4gICAgICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgdHguZm9udFNpemVfZnVuY3Rpb24pXG4gICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIHR4LmNvbG9yKVxuICAgICAgICAgIC5hdHRyKFwiYnViYmxlc0VsSWRcIix0eC5pZClcbiAgICAgICAgICAuYXR0cihcImNsYXNzXCIsdHguY2xhc3Nlcyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYodGhpcy5idWJibGVDaGFydClcbiAgICAgIHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0QWxsKGAjJHt0aGlzLmRhdGEuY29udGFpbmVySWR9IGdgKVxuICAgICAgICAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAuYXR0ciggJ3InLCAoZCkgPT4gMTAgKVxuICAgICAgICAuYXR0ciggJ3BhZGRpbmcnLCAoZCkgPT4gNTAgKVxuICAgICAgICAuc3R5bGUoICdmaWxsJywgXCJ3aGl0ZVwiIClcbiAgICAgICAgLmF0dHIoICdjeCcsIChkKSA9PiBkLnggKVxuICAgICAgICAuYXR0ciggJ2N5JywgKGQpID0+IGQueSApXG4gICAgICAgIC5hdHRyKCBcImJ1YmJsZXNUeXBlXCIsXCJ4X2lubmVyX2NpcmNsZVwiKVxuICAgICAgICAuYXR0ciggXCJjbGFzc1wiLFwiY2lyY2xlX3gtaW5uZXItY2lyY2xlXCIpO1xuXG4gICAgaWYodGhpcy5idWJibGVDaGFydClcbiAgICAgIHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0QWxsKGAjJHt0aGlzLmRhdGEuY29udGFpbmVySWR9IGdgKVxuICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuc3R5bGUoXCJ1c2VyLXNlbGVjdFwiLFwibm9uZVwiKVxuICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAuYXR0cihcImZpbGxcIixcImJsYWNrXCIpXG4gICAgICAgIC5odG1sKFwiJiMxMDAwNTtcIilcbiAgICAgICAgLmF0dHIoXCJmb250LWZhbWlseVwiLCBcInNhbnMtc2VyaWZcIilcbiAgICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwxNSlcbiAgICAgICAgLmF0dHIoXCJidWJibGVzVHlwZVwiLFwieF9pbm5lcl9sYWJlbFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsXCJjaXJjbGVfeC1sYWJlbFwiKTtcblxuICB9XG5cblxuXG4gIC8qKiBTZXRzIHRoZSBidWJibGUgY2hhcnQgZm9yY2Ugc2ltdWxhdGlvbiAqL1xuICBwcml2YXRlIHNldEJ1YmJsZUNoYXJ0U2ltdWxhdGlvbigpe1xuICAgIGxldCB0bXBTaW11bGF0aW9uRGF0YSA9ICggdGhpcy5kYXRhICYmIHRoaXMuZGF0YS5mb3JjZVNpbXVsYXRpb25EYXRhID8gdGhpcy5kYXRhLmZvcmNlU2ltdWxhdGlvbkRhdGEgOiB7fSApO1xuICAgIHZhciB4UHVsbCA9ICggdG1wU2ltdWxhdGlvbkRhdGFbJ3hQdWxsJ10gPyB0bXBTaW11bGF0aW9uRGF0YVsneFB1bGwnXSA6IHRoaXMuZGF0YS5jb250YWluZXJXaWR0aC8yICk7XG4gICAgdmFyIHhQdWxsU3RyZW5ndGggPSAoIHRtcFNpbXVsYXRpb25EYXRhWyd4UHVsbFN0cmVuZ3RoJ10gPyB0bXBTaW11bGF0aW9uRGF0YVsneFB1bGxTdHJlbmd0aCddIDogLTAuMDEgKTtcbiAgICB2YXIgeVB1bGwgPSAoIHRtcFNpbXVsYXRpb25EYXRhWyd5UHVsbCddID8gdG1wU2ltdWxhdGlvbkRhdGFbJ3lQdWxsJ10gOiB0aGlzLmRhdGEuY29udGFpbmVySGVpZ2h0LzIgKTtcbiAgICB2YXIgeVB1bGxTdHJlbmd0aCA9ICggdG1wU2ltdWxhdGlvbkRhdGFbJ3lQdWxsU3RyZW5ndGgnXSA/IHRtcFNpbXVsYXRpb25EYXRhWyd5UHVsbFN0cmVuZ3RoJ10gOiAtMC4wMSApO1xuICAgIHZhciBjb2xsaXNpb25TdHJlbmd0aCA9ICggdG1wU2ltdWxhdGlvbkRhdGFbJ2NvbGxpc2lvblN0cmVuZ2gnXSA/IHRtcFNpbXVsYXRpb25EYXRhWydjb2xsaXNpb25TdHJlbmdoJ10gOiAwLjk5ICk7XG4gICAgdmFyIGNvbGxpc2lvbkl0ZXJhdGlvbnMgPSAoIHRtcFNpbXVsYXRpb25EYXRhWydjb2xsaXNpb25JdGVyYXRpb25zJ10gPyB0bXBTaW11bGF0aW9uRGF0YVsnY29sbGlzaW9uSXRlcmF0aW9ucyddIDogMSApO1xuICAgIHZhciB2ZWxvY2l0eURlY2F5ID0gKCB0bXBTaW11bGF0aW9uRGF0YVsndmVsb2NpdHlEZWNheSddID8gdG1wU2ltdWxhdGlvbkRhdGFbJ3ZlbG9jaXR5RGVjYXknXSA6IDAuOTkgKTtcbiAgICBkM19mb3JjZS5mb3JjZVNpbXVsYXRpb24oKVxuICAgICAgLnZlbG9jaXR5RGVjYXkodmVsb2NpdHlEZWNheSlcbiAgICAgIC5mb3JjZShcInhcIiwgZDNfZm9yY2UuZm9yY2VYKHhQdWxsKS5zdHJlbmd0aCh4UHVsbFN0cmVuZ3RoKSlcbiAgICAgIC5mb3JjZShcInlcIiwgZDNfZm9yY2UuZm9yY2VZKHlQdWxsKS5zdHJlbmd0aCh5UHVsbFN0cmVuZ3RoKSlcbiAgICAgIC5mb3JjZShcImNvbGxpZGVcIiwgZDNfZm9yY2UuZm9yY2VDb2xsaWRlKCkucmFkaXVzKChkKT0+ZC5yYWRpdXMpLnN0cmVuZ3RoKGNvbGxpc2lvblN0cmVuZ3RoKS5pdGVyYXRpb25zKGNvbGxpc2lvbkl0ZXJhdGlvbnMpKVxuICAgICAgLm5vZGVzKHRoaXMuYnViYmxlcylcbiAgICAgIC5vbigndGljaycsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICB9XG5cblxuXG59XG4iXX0=