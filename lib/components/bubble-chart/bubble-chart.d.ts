import { AfterContentChecked } from '@angular/core';
/**
 * Interface for BubbleChartComponent's "data"
 *
 * @property containerId (required)
 * @property containerWidth (required)
 * @property containerHeight (required)
 * @property bubblesData (required)
 * @property isForceSimulationEnabled (required)
 * @property classes (optional)
 * @property reset (optional)
*/
export interface IBubbleChartData {
    /**
     * unique identifier for the bubble-chart
     */
    containerId: string;
    /**
     * total width for the bubble-chart
     */
    containerWidth: number;
    /**
     * total height for the bubble-chart
     */
    containerHeight: number;
    /**
     * data about the bubbles
     */
    bubblesData: IBubbleData[];
    /**
     * whether the force simulation should be enabled or not
     * (do the bubbles' positions "adapt" to the container or not?)
     */
    isForceSimulationEnabled: boolean;
    /**
     * options for the force simulation (ignored if isForceSimulationEnabled is false)
     */
    forceSimulationData?: IBubbleChartForceSimulationData;
    /**
     * additional css classes
     */
    classes?: string;
    /**
     * specifies if the bubbles have to be reset from a previous instantiation
     */
    reset?: boolean;
    /**
     * callback for saving the update function needed for visually updating the chart
     */
    setUpdateReference?: any;
}
/**
 * Interface for BubbleChartComponent's simulation "data"
 * (all the properties are optionals and if not provided
 * a default value is used instead)
 *
 * @property xPull (optional)
 * @property xPullStrength (optional)
 * @property yPull (optional)
 * @property yPullStrength (optional)
 * @property collisionStrengh (optional)
 * @property collisionIterations (optional)
 * @property velocityDecay (optional)
*/
export interface IBubbleChartForceSimulationData {
    /**
     * x-coordinate to which the bubbles are pulled to
     */
    xPull?: number;
    /**
     * strength for the pull toward the xPull x-coordinate
     */
    xPullStrength?: number;
    /**
     * y-coordinate to which the bubbles are pulled to
     */
    yPull?: number;
    /**
     * strength for the pull toward the yPull y-coordinate
     */
    yPullStrength?: number;
    /**
     * strength of bubble's collision
     */
    collisionStrengh?: number;
    /**
     * number of iterations in the bubble's collision detection
     * (the higher the number the more precise and costly the detection)
     */
    collisionIterations?: number;
    /**
     * indicator on how fast the bubble's velocity decreases
     */
    velocityDecay?: number;
}
/**
 * Interface for a bubble's text
 *
 * @property id (required)
 * @property label (required)
 * @property x_function (required)
 * @property y_function (required)
 * @property fontSize_function (required)
 * @property color (required)
 * @property classes (optional)
 *
*/
export interface IBubbleText {
    /**
     * unique identifier for the text
     */
    id: string;
    /**
     * the actual text
     */
    label: string;
    /**
     * function used to specify the x position the text
     * (can depend on the bubble's x-position, radius, etc...)
     */
    x_function: any;
    /**
     * function used to specify the y position the text
     * (can depend on the bubble's y-position, radius, etc...)
     */
    y_function: any;
    /**
     * function used to specify the font size of the text
     * (can depend on the bubble's radius, return a constant number, etc...)
     */
    fontSize_function: any;
    /**
     * color of the text
     */
    color: string;
    /**
     * additional css classes
     */
    classes?: string;
}
/**
 * Interface for a single bubble
 *
 * @property id (required)
 * @property x (optional)
 * @property y (optional)
 * @property radius (required)
 * @property color (required)
 * @property hasCloseIcon (optional)
 * @property payload (optional)
 * @property texts (optional)
 * @property classes (optional)
 *
*/
export interface IBubbleData {
    /**
     * unique identifier for the bubble
     */
    id: string;
    /**
     * the bubble's (starting) x-coordinate
     */
    x?: number;
    /**
     * the bubble's (starting) y-coordinate
     */
    y?: number;
    /**
     * the bubbles radius
     */
    radius: number;
    /**
     * the bubble's color
     */
    color: string;
    /**
     * specifies if the bubble has a close icon (default:false)
     */
    hasCloseIcon?: boolean;
    /**
     * action click's payload
     */
    payload?: any;
    /**
     * all the bubble's texts
     */
    texts?: IBubbleText[];
    /**
     * additional css classes
     */
    classes?: string;
}
export declare class BubbleChartComponent implements AfterContentChecked {
    data: IBubbleChartData;
    emit: any;
    private _loaded;
    ngAfterContentChecked(): void;
    private bubbles;
    private genericBubble;
    private bubbleChart;
    /** Makes the whole bubble chart */
    makeBubbleChart(): void;
    /** Visually updates the bubble chart */
    update(): void;
    /** Initialized the chart's bubbles */
    private initBubbles;
    /** Sets the bubble chart force simulation */
    private setBubbleChartSimulation;
}
