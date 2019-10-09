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
        if (this.data.setUpdateReference)
            this.data.setUpdateReference(this.update.bind(this));
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
        this.initBubbles();
        if (this.data.isForceSimulationEnabled)
            this.setBubbleChartSimulation();
        this.update();
        if (this.bubbleChart) {
            this.bubbleChart.selectAll(`#${this.data.containerId} g circle, #${this.data.containerId} g text`).on('click', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => {
                if (!this.emit)
                    return;
                this.emit('click', { source: "bubble", bubblePayload: d.payload, bubble: d });
            }));
            this.bubbleChart.selectAll('circle[b-type="x_inner_circle"], text[b-type="x_inner_label"]').on('click', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => {
                if (d.hasCloseIcon) {
                    if (!this.emit)
                        return;
                    this.emit('click', { source: "close", bubblePayload: d.payload, bubble: d });
                }
                else {
                    this.emit('click', { source: "bubble", bubblePayload: d.payload, bubble: d });
                }
            }));
            this.bubbleChart.selectAll(`#${this.data.containerId} g`).on('mouseenter', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => {
                if (!this.emit)
                    return;
                this.emit('mouse_enter', { bubblePayload: d.payload, bubble: d });
            }));
            this.bubbleChart.selectAll(`#${this.data.containerId} g`).on('mouseleave', (/**
             * @param {?} d
             * @return {?}
             */
            (d) => {
                if (!this.emit)
                    return;
                this.emit('mouse_leave', { bubblePayload: d.payload, bubble: d });
            }));
        }
        if (this.data.setBubbleChart)
            this.data.setBubbleChart(this.bubbleChart);
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
                    var txt = this.bubbleChart.select(`text[id=${tx.id}]`);
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
            this.bubbleChart.selectAll('text[b-type="x_inner_label"]')
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
                .attr("id", (/**
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
                let group = this.bubbleChart.select(`g[id=${c.id}]`);
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
                        .attr("id", tx.id)
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
                .attr("b-type", "x_inner_circle")
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
                .attr("b-type", "x_inner_label")
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
                template: "<div *ngIf=\"data\" class=\"n7-bubble-chart {{ data.classes || '' }}\">\r\n    <div id=\"{{ data.containerId }}\"></div>\r\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQvYnViYmxlLWNoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxLQUFLLFlBQVksTUFBTSxjQUFjLENBQUM7OztBQUc3QyxPQUFPLEtBQUssUUFBUSxNQUFNLFVBQVUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQW1CckMsc0NBMENDOzs7Ozs7SUF0Q0MsdUNBQW9COzs7OztJQUlwQiwwQ0FBdUI7Ozs7O0lBSXZCLDJDQUF3Qjs7Ozs7SUFJeEIsdUNBQTJCOzs7Ozs7SUFLM0Isb0RBQWtDOzs7OztJQUlsQywrQ0FBc0Q7Ozs7O0lBSXRELG1DQUFpQjs7Ozs7SUFJakIsaUNBQWU7Ozs7O0lBSWYsOENBQXlCOzs7OztJQUl6QiwwQ0FBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQnZCLHFEQThCQzs7Ozs7O0lBMUJDLGdEQUFlOzs7OztJQUlmLHdEQUF1Qjs7Ozs7SUFJdkIsZ0RBQWU7Ozs7O0lBSWYsd0RBQXVCOzs7OztJQUl2QiwyREFBMEI7Ozs7OztJQUsxQiw4REFBNkI7Ozs7O0lBSTdCLHdEQUF1Qjs7Ozs7Ozs7Ozs7Ozs7O0FBaUJ6QixpQ0FnQ0M7Ozs7OztJQTVCQyx5QkFBVzs7Ozs7SUFJWCw0QkFBYzs7Ozs7O0lBS2QsaUNBQWdCOzs7Ozs7SUFLaEIsaUNBQWdCOzs7Ozs7SUFLaEIsd0NBQXVCOzs7OztJQUl2Qiw0QkFBYzs7Ozs7SUFJZCw4QkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJuQixpQ0FxQ0M7Ozs7OztJQWpDQyx5QkFBVzs7Ozs7SUFJWCx3QkFBVzs7Ozs7SUFJWCx3QkFBVzs7Ozs7SUFJWCw2QkFBZTs7Ozs7SUFJZiw0QkFBYzs7Ozs7SUFJZCxtQ0FBdUI7Ozs7O0lBSXZCLDhCQUFjOzs7OztJQUlkLDRCQUFzQjs7Ozs7SUFJdEIsOEJBQWlCOztBQVVuQixNQUFNLE9BQU8sb0JBQW9CO0lBSmpDO1FBT1UsWUFBTyxHQUFZLEtBQUssQ0FBQztRQWlCekIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO0lBMks3QixDQUFDOzs7O0lBNUxDLHFCQUFxQjtRQUNuQixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3RCLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUcsSUFBSSxFQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsT0FBTyxHQUFDLEtBQUssQ0FBQztTQUNwQjtRQUNELElBQUcsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLFVBQVU7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBQyxDQUFDO1FBRXpDLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0I7WUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRTNELENBQUM7Ozs7O0lBT1EsZUFBZTtRQUNwQixZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7WUFDeEUsR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFELEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFDLElBQUksQ0FBQztRQUNoRCxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBQyxJQUFJLENBQUM7UUFFbEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN0RCxNQUFNLENBQUMsS0FBSyxDQUFDO2FBQ2IsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzthQUN2QyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFdkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUVyQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkIsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QjtZQUNuQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUVsQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFZCxJQUFHLElBQUksQ0FBQyxXQUFXLEVBQUM7WUFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU87Ozs7WUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUNuSCxJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7b0JBQUUsT0FBTztnQkFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQzVFLENBQUMsRUFBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsK0RBQStELENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTzs7OztZQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hHLElBQUcsQ0FBQyxDQUFDLFlBQVksRUFBQztvQkFDaEIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO3dCQUFFLE9BQU87b0JBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztpQkFDMUU7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO2lCQUMzRTtZQUNQLENBQUMsRUFBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQVk7Ozs7WUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUMvRSxJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7b0JBQUUsT0FBTztnQkFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUMsRUFBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUNqRSxDQUFDLEVBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxZQUFZOzs7O1lBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDL0UsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO29CQUFFLE9BQU87Z0JBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFDLEVBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7WUFDakUsQ0FBQyxFQUFDLENBQUM7U0FDTjtRQUVELElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7OztJQUlNLE1BQU07UUFDWCxJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBQztZQUMvQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJOzs7O1lBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDO2lCQUMzSCxJQUFJLENBQUMsSUFBSTs7OztZQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1NBQ2pIO1FBRUQsSUFBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztZQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPOzs7O1lBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDakMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O2dCQUFFLEVBQUUsQ0FBQyxFQUFFOzt3QkFDZCxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7b0JBQ3RELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUUsQ0FBQztvQkFDL0IsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBRSxDQUFDO2dCQUNuQyxDQUFDLEVBQUMsQ0FBQTtZQUNOLENBQUMsRUFBQyxDQUFDO1FBRUwsSUFBRyxJQUFJLENBQUMsV0FBVyxFQUFDO1lBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGlDQUFpQyxDQUFDO2lCQUM1RCxJQUFJLENBQUMsSUFBSTs7OztZQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsRUFBRTtpQkFDcEMsSUFBSSxDQUFDLElBQUk7Ozs7WUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtpQkFDdkIsSUFBSSxDQUFDLFNBQVM7Ozs7WUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxFQUFFLENBQUM7U0FDdEQ7UUFFRCxJQUFHLElBQUksQ0FBQyxXQUFXLEVBQUM7WUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUM7aUJBQ3pELElBQUksQ0FBQyxJQUFJOzs7O1lBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsRUFBRTtpQkFDdEMsSUFBSSxDQUFDLElBQUk7Ozs7WUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtpQkFDdkIsSUFBSSxDQUFDLFNBQVM7Ozs7WUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxFQUFFLENBQUM7U0FDdEQ7SUFFSCxDQUFDOzs7Ozs7SUFLTyxXQUFXO1FBRWpCLElBQUcsSUFBSSxDQUFDLFdBQVc7WUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUM7aUJBQzNFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2lCQUNsQixLQUFLLEVBQUU7aUJBQ1AsTUFBTSxDQUFDLEdBQUcsQ0FBQztpQkFDWCxJQUFJLENBQUMsSUFBSTs7OztZQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUMsRUFBRSxFQUFDO2lCQUNwQixNQUFNLENBQUMsUUFBUSxDQUFDO2lCQUNoQixJQUFJLENBQUMsR0FBRzs7OztZQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFO2lCQUMvQyxJQUFJLENBQUMsSUFBSTs7OztZQUFFLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxFQUFDO2lCQUNwQixJQUFJLENBQUMsSUFBSTs7OztZQUFFLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxFQUFDO2lCQUNwQixJQUFJLENBQUMsU0FBUzs7OztZQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7aUJBQzNCLElBQUksQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFBLENBQUMsQ0FBQyxPQUFPLEVBQUU7aUJBQzdCLEtBQUssQ0FBQyxNQUFNOzs7O1lBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVwQyxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVc7WUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTzs7OztZQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7O29CQUMvQixLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7Z0JBQ3BELENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztnQkFBRSxFQUFFLENBQUMsRUFBRTtvQkFDcEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7eUJBQ25CLEtBQUssQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDO3lCQUM5QixJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUU7eUJBQzFCLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBRTt5QkFDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eUJBQ2QsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsaUJBQWlCLENBQUM7eUJBQ3ZDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQzt5QkFDdEIsSUFBSSxDQUFDLElBQUksRUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDO3lCQUNoQixJQUFJLENBQUMsT0FBTyxFQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDNUIsQ0FBQyxFQUFDLENBQUM7WUFDUCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUcsSUFBSSxDQUFDLFdBQVc7WUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDO2lCQUN0RCxNQUFNLENBQUMsUUFBUSxDQUFDO2lCQUNoQixJQUFJLENBQUUsR0FBRzs7OztZQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7aUJBQ3RCLElBQUksQ0FBRSxTQUFTOzs7O1lBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtpQkFDNUIsS0FBSyxDQUFFLE1BQU0sRUFBRSxPQUFPLENBQUU7aUJBQ3hCLElBQUksQ0FBRSxJQUFJOzs7O1lBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7aUJBQ3hCLElBQUksQ0FBRSxJQUFJOzs7O1lBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7aUJBQ3hCLElBQUksQ0FBRSxRQUFRLEVBQUMsZ0JBQWdCLENBQUM7aUJBQ2hDLElBQUksQ0FBRSxPQUFPLEVBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUU1QyxJQUFHLElBQUksQ0FBQyxXQUFXO1lBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQztpQkFDdEQsTUFBTSxDQUFDLE1BQU0sQ0FBQztpQkFDZCxLQUFLLENBQUMsYUFBYSxFQUFDLE1BQU0sQ0FBQztpQkFDM0IsS0FBSyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUM7aUJBQzlCLElBQUksQ0FBQyxNQUFNLEVBQUMsT0FBTyxDQUFDO2lCQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDO2lCQUNoQixJQUFJLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQztpQkFDakMsSUFBSSxDQUFDLFdBQVcsRUFBQyxFQUFFLENBQUM7aUJBQ3BCLElBQUksQ0FBQyxRQUFRLEVBQUMsZUFBZSxDQUFDO2lCQUM5QixJQUFJLENBQUMsT0FBTyxFQUFDLGdCQUFnQixDQUFDLENBQUM7SUFFdEMsQ0FBQzs7Ozs7O0lBS08sd0JBQXdCOztZQUMxQixpQkFBaUIsR0FBRyxDQUFFLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFFOztZQUN2RyxLQUFLLEdBQUcsQ0FBRSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFDLENBQUMsQ0FBRTs7WUFDaEcsYUFBYSxHQUFHLENBQUUsaUJBQWlCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBRTs7WUFDbkcsS0FBSyxHQUFHLENBQUUsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBQyxDQUFDLENBQUU7O1lBQ2pHLGFBQWEsR0FBRyxDQUFFLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUU7O1lBQ25HLGlCQUFpQixHQUFHLENBQUUsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFFOztZQUM1RyxtQkFBbUIsR0FBRyxDQUFFLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRTs7WUFDakgsYUFBYSxHQUFHLENBQUUsaUJBQWlCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUU7UUFDdEcsUUFBUSxDQUFDLGVBQWUsRUFBRTthQUN2QixhQUFhLENBQUMsYUFBYSxDQUFDO2FBQzVCLEtBQUssQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDMUQsS0FBSyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUMxRCxLQUFLLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFBLENBQUMsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQzthQUMzSCxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNuQixFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7O1lBak1GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiw4SUFBa0M7YUFDbkM7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETixvQ0FBZ0M7O0lBQ2hDLG9DQUFtQjs7Ozs7SUFDbkIsdUNBQWlDOzs7OztJQWlCakMsdUNBQXVCOzs7OztJQUN2Qiw2Q0FBNkI7Ozs7O0lBQzdCLDJDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEJVQkJMRUNIQVJULnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlckNvbnRlbnRDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGQzX3NlbGVjdGlvbiBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XHJcbi8vIGltcG9ydCBvbmx5IGZvciBhdXRvLWFsbG9jYXRpbmcgdGhlIGJ1YmJsZXMgKG5lZWRzIGhlYXZ5IHJlZmFjdG9yaW5nIHRvIHdvcmspXHJcbi8vaW1wb3J0ICogYXMgZDNfaGllcmFyY2h5IGZyb20gXCJkMy1oaWVyYXJjaHlcIjtcclxuaW1wb3J0ICogYXMgZDNfZm9yY2UgZnJvbSBcImQzLWZvcmNlXCI7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBCdWJibGVDaGFydENvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkgY29udGFpbmVySWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY29udGFpbmVyV2lkdGggKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY29udGFpbmVySGVpZ2h0IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGJ1YmJsZXNEYXRhIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGlzRm9yY2VTaW11bGF0aW9uRW5hYmxlZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHJlc2V0IChvcHRpb25hbClcclxuKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQnViYmxlQ2hhcnREYXRhIHtcclxuICAvKipcclxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGJ1YmJsZS1jaGFydFxyXG4gICAqL1xyXG4gIGNvbnRhaW5lcklkOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogdG90YWwgd2lkdGggZm9yIHRoZSBidWJibGUtY2hhcnRcclxuICAgKi9cclxuICBjb250YWluZXJXaWR0aDogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIHRvdGFsIGhlaWdodCBmb3IgdGhlIGJ1YmJsZS1jaGFydFxyXG4gICAqL1xyXG4gIGNvbnRhaW5lckhlaWdodDogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIGRhdGEgYWJvdXQgdGhlIGJ1YmJsZXNcclxuICAgKi9cclxuICBidWJibGVzRGF0YTogSUJ1YmJsZURhdGFbXTtcclxuICAvKipcclxuICAgKiB3aGV0aGVyIHRoZSBmb3JjZSBzaW11bGF0aW9uIHNob3VsZCBiZSBlbmFibGVkIG9yIG5vdFxyXG4gICAqIChkbyB0aGUgYnViYmxlcycgcG9zaXRpb25zIFwiYWRhcHRcIiB0byB0aGUgY29udGFpbmVyIG9yIG5vdD8pXHJcbiAgICovXHJcbiAgaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkOiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIG9wdGlvbnMgZm9yIHRoZSBmb3JjZSBzaW11bGF0aW9uIChpZ25vcmVkIGlmIGlzRm9yY2VTaW11bGF0aW9uRW5hYmxlZCBpcyBmYWxzZSlcclxuICAgKi9cclxuICBmb3JjZVNpbXVsYXRpb25EYXRhPzogSUJ1YmJsZUNoYXJ0Rm9yY2VTaW11bGF0aW9uRGF0YTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGNzcyBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBzcGVjaWZpZXMgaWYgdGhlIGJ1YmJsZXMgaGF2ZSB0byBiZSByZXNldCBmcm9tIGEgcHJldmlvdXMgaW5zdGFudGlhdGlvblxyXG4gICAqL1xyXG4gIHJlc2V0PzogYm9vbGVhblxyXG4gIC8qKlxyXG4gICAqIGNhbGxiYWNrIGZvciBzYXZpbmcgdGhlIHVwZGF0ZSBmdW5jdGlvbiBuZWVkZWQgZm9yIHZpc3VhbGx5IHVwZGF0aW5nIHRoZSBjaGFydFxyXG4gICAqL1xyXG4gIHNldFVwZGF0ZVJlZmVyZW5jZT86IGFueTtcclxuICAvKipcclxuICAgKiBjYWxsYmFjayBmb3Igc2F2aW5nL2dldHRpbiBhIHJlZmVyZW5jZSBvZiB0aGUgYnViYmxlcyBjaGFydCBpbnN0YW5jZVxyXG4gICAqL1xyXG4gIHNldEJ1YmJsZUNoYXJ0PzogYW55O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEJ1YmJsZUNoYXJ0Q29tcG9uZW50J3Mgc2ltdWxhdGlvbiBcImRhdGFcIlxyXG4gKiAoYWxsIHRoZSBwcm9wZXJ0aWVzIGFyZSBvcHRpb25hbHMgYW5kIGlmIG5vdCBwcm92aWRlZFxyXG4gKiBhIGRlZmF1bHQgdmFsdWUgaXMgdXNlZCBpbnN0ZWFkKVxyXG4gKiBcclxuICogQHByb3BlcnR5IHhQdWxsIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHhQdWxsU3RyZW5ndGggKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgeVB1bGwgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgeVB1bGxTdHJlbmd0aCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjb2xsaXNpb25TdHJlbmdoIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNvbGxpc2lvbkl0ZXJhdGlvbnMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgdmVsb2NpdHlEZWNheSAob3B0aW9uYWwpXHJcbiovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUJ1YmJsZUNoYXJ0Rm9yY2VTaW11bGF0aW9uRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogeC1jb29yZGluYXRlIHRvIHdoaWNoIHRoZSBidWJibGVzIGFyZSBwdWxsZWQgdG9cclxuICAgKi9cclxuICB4UHVsbD86IG51bWJlcjtcclxuICAvKipcclxuICAgKiBzdHJlbmd0aCBmb3IgdGhlIHB1bGwgdG93YXJkIHRoZSB4UHVsbCB4LWNvb3JkaW5hdGVcclxuICAgKi9cclxuICB4UHVsbFN0cmVuZ3RoPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIHktY29vcmRpbmF0ZSB0byB3aGljaCB0aGUgYnViYmxlcyBhcmUgcHVsbGVkIHRvXHJcbiAgICovXHJcbiAgeVB1bGw/OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogc3RyZW5ndGggZm9yIHRoZSBwdWxsIHRvd2FyZCB0aGUgeVB1bGwgeS1jb29yZGluYXRlXHJcbiAgICovXHJcbiAgeVB1bGxTdHJlbmd0aD86IG51bWJlcjtcclxuICAvKipcclxuICAgKiBzdHJlbmd0aCBvZiBidWJibGUncyBjb2xsaXNpb25cclxuICAgKi9cclxuICBjb2xsaXNpb25TdHJlbmdoPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIG51bWJlciBvZiBpdGVyYXRpb25zIGluIHRoZSBidWJibGUncyBjb2xsaXNpb24gZGV0ZWN0aW9uXHJcbiAgICogKHRoZSBoaWdoZXIgdGhlIG51bWJlciB0aGUgbW9yZSBwcmVjaXNlIGFuZCBjb3N0bHkgdGhlIGRldGVjdGlvbilcclxuICAgKi9cclxuICBjb2xsaXNpb25JdGVyYXRpb25zPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIGluZGljYXRvciBvbiBob3cgZmFzdCB0aGUgYnViYmxlJ3MgdmVsb2NpdHkgZGVjcmVhc2VzXHJcbiAgICovXHJcbiAgdmVsb2NpdHlEZWNheT86IG51bWJlcjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBhIGJ1YmJsZSdzIHRleHRcclxuICpcclxuICogQHByb3BlcnR5IGlkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGxhYmVsIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHhfZnVuY3Rpb24gKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgeV9mdW5jdGlvbiAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBmb250U2l6ZV9mdW5jdGlvbiAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjb2xvciAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICpcclxuKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQnViYmxlVGV4dCB7XHJcbiAgLyoqXHJcbiAgICogdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSB0ZXh0XHJcbiAgICovXHJcbiAgaWQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiB0aGUgYWN0dWFsIHRleHRcclxuICAgKi9cclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGZ1bmN0aW9uIHVzZWQgdG8gc3BlY2lmeSB0aGUgeCBwb3NpdGlvbiB0aGUgdGV4dFxyXG4gICAqIChjYW4gZGVwZW5kIG9uIHRoZSBidWJibGUncyB4LXBvc2l0aW9uLCByYWRpdXMsIGV0Yy4uLilcclxuICAgKi9cclxuICB4X2Z1bmN0aW9uOiBhbnk7XHJcbiAgLyoqXHJcbiAgICogZnVuY3Rpb24gdXNlZCB0byBzcGVjaWZ5IHRoZSB5IHBvc2l0aW9uIHRoZSB0ZXh0XHJcbiAgICogKGNhbiBkZXBlbmQgb24gdGhlIGJ1YmJsZSdzIHktcG9zaXRpb24sIHJhZGl1cywgZXRjLi4uKVxyXG4gICAqL1xyXG4gIHlfZnVuY3Rpb246IGFueTtcclxuICAvKipcclxuICAgKiBmdW5jdGlvbiB1c2VkIHRvIHNwZWNpZnkgdGhlIGZvbnQgc2l6ZSBvZiB0aGUgdGV4dFxyXG4gICAqIChjYW4gZGVwZW5kIG9uIHRoZSBidWJibGUncyByYWRpdXMsIHJldHVybiBhIGNvbnN0YW50IG51bWJlciwgZXRjLi4uKVxyXG4gICAqL1xyXG4gIGZvbnRTaXplX2Z1bmN0aW9uOiBhbnk7XHJcbiAgLyoqXHJcbiAgICogY29sb3Igb2YgdGhlIHRleHRcclxuICAgKi9cclxuICBjb2xvcjogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgY3NzIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGEgc2luZ2xlIGJ1YmJsZVxyXG4gKlxyXG4gKiBAcHJvcGVydHkgaWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgeCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB5IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHJhZGl1cyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjb2xvciAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBoYXNDbG9zZUljb24gKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0cyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICpcclxuKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQnViYmxlRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBidWJibGVcclxuICAgKi9cclxuICBpZDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHRoZSBidWJibGUncyAoc3RhcnRpbmcpIHgtY29vcmRpbmF0ZVxyXG4gICAqL1xyXG4gIHg/OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogdGhlIGJ1YmJsZSdzIChzdGFydGluZykgeS1jb29yZGluYXRlXHJcbiAgICovXHJcbiAgeT86IG51bWJlcjtcclxuICAvKipcclxuICAgKiB0aGUgYnViYmxlcyByYWRpdXNcclxuICAgKi9cclxuICByYWRpdXM6IG51bWJlcjtcclxuICAvKipcclxuICAgKiB0aGUgYnViYmxlJ3MgY29sb3JcclxuICAgKi9cclxuICBjb2xvcjogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHNwZWNpZmllcyBpZiB0aGUgYnViYmxlIGhhcyBhIGNsb3NlIGljb24gKGRlZmF1bHQ6ZmFsc2UpXHJcbiAgICovXHJcbiAgaGFzQ2xvc2VJY29uPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXHJcbiAgICovXHJcbiAgcGF5bG9hZD86IGFueTtcclxuICAvKipcclxuICAgKiBhbGwgdGhlIGJ1YmJsZSdzIHRleHRzXHJcbiAgICovXHJcbiAgdGV4dHM/OiBJQnViYmxlVGV4dFtdO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgY3NzIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWJ1YmJsZS1jaGFydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2J1YmJsZS1jaGFydC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQnViYmxlQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcclxuICBASW5wdXQoKSBkYXRhOiBJQnViYmxlQ2hhcnREYXRhO1xyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuICBwcml2YXRlIF9sb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCl7XHJcbiAgICBpZighdGhpcy5kYXRhKSByZXR1cm47XHJcbiAgICBpZih0aGlzLmRhdGEucmVzZXQ9PT10cnVlKXtcclxuICAgICAgdGhpcy5kYXRhLnJlc2V0PWZhbHNlO1xyXG4gICAgICB0aGlzLl9sb2FkZWQ9ZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLl9sb2FkZWQpIHJldHVybjtcclxuICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubWFrZUJ1YmJsZUNoYXJ0KCkpO1xyXG4gICAgXHJcbiAgICBpZih0aGlzLmRhdGEuc2V0VXBkYXRlUmVmZXJlbmNlKVxyXG4gICAgICB0aGlzLmRhdGEuc2V0VXBkYXRlUmVmZXJlbmNlKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xyXG5cclxufVxyXG5cclxuICBwcml2YXRlIGJ1YmJsZXMgPSBudWxsO1xyXG4gIHByaXZhdGUgZ2VuZXJpY0J1YmJsZSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBidWJibGVDaGFydCA9IG51bGw7XHJcblxyXG4gIC8qKiBNYWtlcyB0aGUgd2hvbGUgYnViYmxlIGNoYXJ0ICovXHJcbiAgcHVibGljIG1ha2VCdWJibGVDaGFydCgpe1xyXG4gICAgZDNfc2VsZWN0aW9uLnNlbGVjdChgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfWApLnNlbGVjdEFsbChcIipcIikucmVtb3ZlKCk7XHJcblx0dmFyIHBvdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuZGF0YS5jb250YWluZXJJZH1gKTtcclxuICAgIHBvdC5zdHlsZS53aWR0aCA9IHRoaXMuZGF0YS5jb250YWluZXJXaWR0aCsncHgnO1xyXG4gICAgcG90LnN0eWxlLmhlaWdodCA9IHRoaXMuZGF0YS5jb250YWluZXJIZWlnaHQrJ3B4JztcclxuXHJcbiAgICB0aGlzLmJ1YmJsZUNoYXJ0ID0gZDNfc2VsZWN0aW9uLnNlbGVjdChgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfWApXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCdzdmcnKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgdGhpcy5kYXRhLmNvbnRhaW5lcldpZHRoKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMuZGF0YS5jb250YWluZXJIZWlnaHQpO1xyXG5cclxuICAgIHRoaXMuYnViYmxlcyA9IHRoaXMuZGF0YS5idWJibGVzRGF0YTtcclxuXHJcbiAgICB0aGlzLmluaXRCdWJibGVzKCk7XHJcblxyXG4gICAgaWYodGhpcy5kYXRhLmlzRm9yY2VTaW11bGF0aW9uRW5hYmxlZClcclxuICAgICAgdGhpcy5zZXRCdWJibGVDaGFydFNpbXVsYXRpb24oKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG5cclxuICAgIGlmKHRoaXMuYnViYmxlQ2hhcnQpe1xyXG4gICAgICAgIHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0QWxsKGAjJHt0aGlzLmRhdGEuY29udGFpbmVySWR9IGcgY2lyY2xlLCAjJHt0aGlzLmRhdGEuY29udGFpbmVySWR9IGcgdGV4dGApLm9uKCdjbGljaycsIChkKSA9PiB7XHJcbiAgICAgICAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2NsaWNrJyx7c291cmNlOlwiYnViYmxlXCIsIGJ1YmJsZVBheWxvYWQ6IGQucGF5bG9hZCwgYnViYmxlOiBkfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0QWxsKCdjaXJjbGVbYi10eXBlPVwieF9pbm5lcl9jaXJjbGVcIl0sIHRleHRbYi10eXBlPVwieF9pbm5lcl9sYWJlbFwiXScpLm9uKCdjbGljaycsIChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYoZC5oYXNDbG9zZUljb24pe1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdjbGljaycse3NvdXJjZTpcImNsb3NlXCIsIGJ1YmJsZVBheWxvYWQ6IGQucGF5bG9hZCwgYnViYmxlOiBkfSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnY2xpY2snLHtzb3VyY2U6XCJidWJibGVcIiwgYnViYmxlUGF5bG9hZDogZC5wYXlsb2FkLCBidWJibGU6IGR9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0QWxsKGAjJHt0aGlzLmRhdGEuY29udGFpbmVySWR9IGdgKS5vbignbW91c2VlbnRlcicsIChkKSA9PiB7XHJcbiAgICAgICAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ21vdXNlX2VudGVyJyx7YnViYmxlUGF5bG9hZDogZC5wYXlsb2FkLCBidWJibGU6IGR9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5idWJibGVDaGFydC5zZWxlY3RBbGwoYCMke3RoaXMuZGF0YS5jb250YWluZXJJZH0gZ2ApLm9uKCdtb3VzZWxlYXZlJywgKGQpID0+IHtcclxuICAgICAgICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgICAgICAgIHRoaXMuZW1pdCgnbW91c2VfbGVhdmUnLHtidWJibGVQYXlsb2FkOiBkLnBheWxvYWQsIGJ1YmJsZTogZH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuZGF0YS5zZXRCdWJibGVDaGFydClcclxuICAgICAgdGhpcy5kYXRhLnNldEJ1YmJsZUNoYXJ0KHRoaXMuYnViYmxlQ2hhcnQpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKiBWaXN1YWxseSB1cGRhdGVzIHRoZSBidWJibGUgY2hhcnQgKi9cclxuICBwdWJsaWMgdXBkYXRlKCkge1xyXG4gICAgaWYoIXRoaXMuZGF0YSkgcmV0dXJuO1xyXG5cclxuICAgIGlmKHRoaXMuZ2VuZXJpY0J1YmJsZSAmJiB0aGlzLmdlbmVyaWNCdWJibGUuYXR0cil7XHJcbiAgICAgIHRoaXMuZ2VuZXJpY0J1YmJsZS5hdHRyKCdjeCcsIChkKSA9PiB7IHJldHVybiBkLnggPSBNYXRoLm1heChkLnJhZGl1cywgTWF0aC5taW4odGhpcy5kYXRhLmNvbnRhaW5lcldpZHRoIC0gZC5yYWRpdXMsIGQueCkpOyB9KVxyXG4gICAgICAgIC5hdHRyKCdjeScsIChkKSA9PiB7IHJldHVybiBkLnkgPSBNYXRoLm1heChkLnJhZGl1cywgTWF0aC5taW4odGhpcy5kYXRhLmNvbnRhaW5lckhlaWdodCAtIGQucmFkaXVzLCBkLnkpKTsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5idWJibGVzRGF0YSlcclxuICAgICAgdGhpcy5kYXRhLmJ1YmJsZXNEYXRhLmZvckVhY2goIChjKSA9PiB7XHJcbiAgICAgICAgICBjLnRleHRzLmZvckVhY2goIHR4ID0+IHtcclxuICAgICAgICAgICAgICB2YXIgdHh0ID0gdGhpcy5idWJibGVDaGFydC5zZWxlY3QoYHRleHRbaWQ9JHt0eC5pZH1dYCk7XHJcbiAgICAgICAgICAgICAgdHh0LmF0dHIoXCJkeVwiLCB0eC55X2Z1bmN0aW9uICk7XHJcbiAgICAgICAgICAgICAgdHh0LmF0dHIoXCJkeFwiLCB0eC54X2Z1bmN0aW9uICk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9KTtcclxuXHJcbiAgICBpZih0aGlzLmJ1YmJsZUNoYXJ0KXtcclxuICAgICAgdGhpcy5idWJibGVDaGFydC5zZWxlY3RBbGwoJ2NpcmNsZVtiLXR5cGU9XCJ4X2lubmVyX2NpcmNsZVwiXScpXHJcbiAgICAgIC5hdHRyKFwiY3lcIiwgKGQpID0+IGQueSsoZC5yYWRpdXMvMikgKVxyXG4gICAgICAuYXR0cihcImN4XCIsIChkKSA9PiBkLnggKVxyXG4gICAgICAuYXR0cihcIm9wYWNpdHlcIiwgKGQpID0+ICggZC5oYXNDbG9zZUljb24gPyAxIDogMCApICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5idWJibGVDaGFydCl7XHJcbiAgICAgIHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0QWxsKCd0ZXh0W2ItdHlwZT1cInhfaW5uZXJfbGFiZWxcIl0nKVxyXG4gICAgICAuYXR0cihcImR5XCIsIChkKSA9PiBkLnkrKGQucmFkaXVzLzIpKzYgKVxyXG4gICAgICAuYXR0cihcImR4XCIsIChkKSA9PiBkLnggKVxyXG4gICAgICAuYXR0cihcIm9wYWNpdHlcIiwgKGQpID0+ICggZC5oYXNDbG9zZUljb24gPyAxIDogMCApICk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuICAvKiogSW5pdGlhbGl6ZWQgdGhlIGNoYXJ0J3MgYnViYmxlcyAqL1xyXG4gIHByaXZhdGUgaW5pdEJ1YmJsZXMoKTogdm9pZCB7XHJcblxyXG4gICAgaWYodGhpcy5idWJibGVDaGFydClcclxuICAgICAgdGhpcy5nZW5lcmljQnViYmxlID0gdGhpcy5idWJibGVDaGFydC5zZWxlY3RBbGwoYCMke3RoaXMuZGF0YS5jb250YWluZXJJZH0gZ2ApXHJcbiAgICAgICAgLmRhdGEodGhpcy5idWJibGVzKVxyXG4gICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgLmFwcGVuZCgnZycpXHJcbiAgICAgICAgLmF0dHIoXCJpZFwiLChkKT0+ZC5pZClcclxuICAgICAgICAuYXBwZW5kKCdjaXJjbGUnKVxyXG4gICAgICAgIC5hdHRyKCdyJywgKGQpID0+IE1hdGgubWF4KDAsIGQucmFkaXVzIC0gNS4wNSkgKVxyXG4gICAgICAgIC5hdHRyKFwiY3hcIiwgKGQpPT5kLngpXHJcbiAgICAgICAgLmF0dHIoXCJjeVwiLCAoZCk9PmQueSlcclxuICAgICAgICAuYXR0cigncGFkZGluZycsIChkKSA9PiA1MCApXHJcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLChkKT0+ZC5jbGFzc2VzIClcclxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoZCkgPT4gZC5jb2xvciApO1xyXG5cclxuICAgIGlmKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuYnViYmxlc0RhdGEgJiYgdGhpcy5idWJibGVDaGFydClcclxuICAgICAgdGhpcy5kYXRhLmJ1YmJsZXNEYXRhLmZvckVhY2goIChjKSA9PiB7XHJcbiAgICAgICAgbGV0IGdyb3VwID0gdGhpcy5idWJibGVDaGFydC5zZWxlY3QoYGdbaWQ9JHtjLmlkfV1gKTtcclxuICAgICAgICBjLnRleHRzLmZvckVhY2goIHR4ID0+IHtcclxuICAgICAgICAgIGdyb3VwLmFwcGVuZChcInRleHRcIilcclxuICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXHJcbiAgICAgICAgICAuYXR0cihcImR4XCIsIHR4LnhfZnVuY3Rpb24gKVxyXG4gICAgICAgICAgLmF0dHIoXCJkeVwiLCB0eC55X2Z1bmN0aW9uIClcclxuICAgICAgICAgIC50ZXh0KHR4LmxhYmVsKVxyXG4gICAgICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgdHguZm9udFNpemVfZnVuY3Rpb24pXHJcbiAgICAgICAgICAuYXR0cihcImZpbGxcIiwgdHguY29sb3IpXHJcbiAgICAgICAgICAuYXR0cihcImlkXCIsdHguaWQpXHJcbiAgICAgICAgICAuYXR0cihcImNsYXNzXCIsdHguY2xhc3Nlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZih0aGlzLmJ1YmJsZUNoYXJ0KVxyXG4gICAgICB0aGlzLmJ1YmJsZUNoYXJ0LnNlbGVjdEFsbChgIyR7dGhpcy5kYXRhLmNvbnRhaW5lcklkfSBnYClcclxuICAgICAgICAuYXBwZW5kKCdjaXJjbGUnKVxyXG4gICAgICAgIC5hdHRyKCAncicsIChkKSA9PiAxMCApXHJcbiAgICAgICAgLmF0dHIoICdwYWRkaW5nJywgKGQpID0+IDUwIClcclxuICAgICAgICAuc3R5bGUoICdmaWxsJywgXCJ3aGl0ZVwiIClcclxuICAgICAgICAuYXR0ciggJ2N4JywgKGQpID0+IGQueCApXHJcbiAgICAgICAgLmF0dHIoICdjeScsIChkKSA9PiBkLnkgKVxyXG4gICAgICAgIC5hdHRyKCBcImItdHlwZVwiLFwieF9pbm5lcl9jaXJjbGVcIilcclxuICAgICAgICAuYXR0ciggXCJjbGFzc1wiLFwiY2lyY2xlX3gtaW5uZXItY2lyY2xlXCIpO1xyXG5cclxuICAgIGlmKHRoaXMuYnViYmxlQ2hhcnQpXHJcbiAgICAgIHRoaXMuYnViYmxlQ2hhcnQuc2VsZWN0QWxsKGAjJHt0aGlzLmRhdGEuY29udGFpbmVySWR9IGdgKVxyXG4gICAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXHJcbiAgICAgICAgLnN0eWxlKFwidXNlci1zZWxlY3RcIixcIm5vbmVcIilcclxuICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxyXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLFwiYmxhY2tcIilcclxuICAgICAgICAuaHRtbChcIiYjMTAwMDU7XCIpXHJcbiAgICAgICAgLmF0dHIoXCJmb250LWZhbWlseVwiLCBcInNhbnMtc2VyaWZcIilcclxuICAgICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLDE1KVxyXG4gICAgICAgIC5hdHRyKFwiYi10eXBlXCIsXCJ4X2lubmVyX2xhYmVsXCIpXHJcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLFwiY2lyY2xlX3gtbGFiZWxcIik7XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuICAvKiogU2V0cyB0aGUgYnViYmxlIGNoYXJ0IGZvcmNlIHNpbXVsYXRpb24gKi9cclxuICBwcml2YXRlIHNldEJ1YmJsZUNoYXJ0U2ltdWxhdGlvbigpe1xyXG4gICAgbGV0IHRtcFNpbXVsYXRpb25EYXRhID0gKCB0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmZvcmNlU2ltdWxhdGlvbkRhdGEgPyB0aGlzLmRhdGEuZm9yY2VTaW11bGF0aW9uRGF0YSA6IHt9ICk7XHJcbiAgICB2YXIgeFB1bGwgPSAoIHRtcFNpbXVsYXRpb25EYXRhWyd4UHVsbCddID8gdG1wU2ltdWxhdGlvbkRhdGFbJ3hQdWxsJ10gOiB0aGlzLmRhdGEuY29udGFpbmVyV2lkdGgvMiApO1xyXG4gICAgdmFyIHhQdWxsU3RyZW5ndGggPSAoIHRtcFNpbXVsYXRpb25EYXRhWyd4UHVsbFN0cmVuZ3RoJ10gPyB0bXBTaW11bGF0aW9uRGF0YVsneFB1bGxTdHJlbmd0aCddIDogLTAuMDEgKTtcclxuICAgIHZhciB5UHVsbCA9ICggdG1wU2ltdWxhdGlvbkRhdGFbJ3lQdWxsJ10gPyB0bXBTaW11bGF0aW9uRGF0YVsneVB1bGwnXSA6IHRoaXMuZGF0YS5jb250YWluZXJIZWlnaHQvMiApO1xyXG4gICAgdmFyIHlQdWxsU3RyZW5ndGggPSAoIHRtcFNpbXVsYXRpb25EYXRhWyd5UHVsbFN0cmVuZ3RoJ10gPyB0bXBTaW11bGF0aW9uRGF0YVsneVB1bGxTdHJlbmd0aCddIDogLTAuMDEgKTtcclxuICAgIHZhciBjb2xsaXNpb25TdHJlbmd0aCA9ICggdG1wU2ltdWxhdGlvbkRhdGFbJ2NvbGxpc2lvblN0cmVuZ2gnXSA/IHRtcFNpbXVsYXRpb25EYXRhWydjb2xsaXNpb25TdHJlbmdoJ10gOiAwLjk5ICk7XHJcbiAgICB2YXIgY29sbGlzaW9uSXRlcmF0aW9ucyA9ICggdG1wU2ltdWxhdGlvbkRhdGFbJ2NvbGxpc2lvbkl0ZXJhdGlvbnMnXSA/IHRtcFNpbXVsYXRpb25EYXRhWydjb2xsaXNpb25JdGVyYXRpb25zJ10gOiAxICk7XHJcbiAgICB2YXIgdmVsb2NpdHlEZWNheSA9ICggdG1wU2ltdWxhdGlvbkRhdGFbJ3ZlbG9jaXR5RGVjYXknXSA/IHRtcFNpbXVsYXRpb25EYXRhWyd2ZWxvY2l0eURlY2F5J10gOiAwLjk5ICk7XHJcbiAgICBkM19mb3JjZS5mb3JjZVNpbXVsYXRpb24oKVxyXG4gICAgICAudmVsb2NpdHlEZWNheSh2ZWxvY2l0eURlY2F5KVxyXG4gICAgICAuZm9yY2UoXCJ4XCIsIGQzX2ZvcmNlLmZvcmNlWCh4UHVsbCkuc3RyZW5ndGgoeFB1bGxTdHJlbmd0aCkpXHJcbiAgICAgIC5mb3JjZShcInlcIiwgZDNfZm9yY2UuZm9yY2VZKHlQdWxsKS5zdHJlbmd0aCh5UHVsbFN0cmVuZ3RoKSlcclxuICAgICAgLmZvcmNlKFwiY29sbGlkZVwiLCBkM19mb3JjZS5mb3JjZUNvbGxpZGUoKS5yYWRpdXMoKGQpPT5kLnJhZGl1cykuc3RyZW5ndGgoY29sbGlzaW9uU3RyZW5ndGgpLml0ZXJhdGlvbnMoY29sbGlzaW9uSXRlcmF0aW9ucykpXHJcbiAgICAgIC5ub2Rlcyh0aGlzLmJ1YmJsZXMpXHJcbiAgICAgIC5vbigndGljaycsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcblxyXG5cclxufVxyXG4iXX0=