/**
 * The bubble chart is drawn using d3js, a library to create and update anything in svg.
 *
 * LEGEND:
 * - svg -> the canvas/<svg> element where everything will be drawn on (appended).
 * - g -> <g> is a group of svg elements.
 * - leaf -> this is the svg circle, the bubble.
 * - text -> this is all the text inside the circle.
 * - tspan -> this is just one line of text.
 *
 * What are "join, enter, update, exit?"
 * https://observablehq.com/@d3/learn-d3-joins?collection=@d3/learn-d3
 * https://observablehq.com/@thetylerwolf/day-18-join-enter-update-exit
 *
 * Each line can have a different width, but all of the text inside a circle
 * needs to be scaled by a constant factor.
 * https://observablehq.com/@mbostock/fit-text-to-circle
 */
import { AfterContentChecked } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Interface for D3Chart's "data"
 *
 * @property entity (required)
 * - id (required)
 * - label (optional)
 * - typeOfEntity (optional)
 * @property count (required)
 */
export interface BubbleChartDataItem {
    entity: {
        id: string;
        label?: string;
        typeOfEntity?: string;
    };
    count: number;
}
/**
 * Interface for a Circle's node data
 */
export interface CircleNode {
    clipUid: string;
    data: BubbleChartDataItem;
    depth: number;
    height: number;
    leafUid: string;
    parent: Node;
    x: number;
    y: number;
    r: number;
    value: number;
    /** Dynamic data for internal logic */
    _meta?: any;
}
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
export interface BubbleChartData {
    /**
     * unique identifier for the bubble-chart
     */
    containerId: string;
    /**
     * total width for the bubble-chart
     */
    width: number;
    /**
     * total height for the bubble-chart
     */
    height: number;
    /**
     * data about the bubbles
     */
    data: BubbleChartDataItem[];
    /**
     * additional css classes
     */
    classes?: string;
    /**
     * list of ID's of selected items
     * (selected items will render with a 'X' icon)
     */
    selected?: string[];
    /**
     * Specify a list of typeOfEntity types (domain),
     * and a list of colors (range), which will be mapped together.
     */
    colorMatch?: {
        domain: string[];
        range: string[];
    };
    /**
     * Define a max and min size for the bubbles
     */
    sizeRange: [number, number];
    /**
     * If defined, transition will be activated
     * and the value will be used as duration
     */
    transition?: number;
    /**
     * If set to false, stops the shuffling of the data
     * before rendering.
     */
    shuffle?: boolean;
    /**
     * Defines the font-family and the font-weight for each text group
     */
    fontRendering?: {
        label?: {
            family?: string;
            weight?: string;
        };
        counter?: {
            family?: string;
            weight?: string;
        };
    };
    /**
     * expose the draw function outside of n7-frontend/components library
     * this is needed to redraw bubble-chart-component on command
     */
    setDraw?: any;
}
export declare class BubbleChartComponent implements AfterContentChecked {
    data: BubbleChartData;
    emit: any;
    private d3;
    private _loaded;
    ngAfterContentChecked(): void;
    onClick(payload: any): void;
    /**
     * Reference for much of the new text scaling code comes from:
     * https://observablehq.com/@mbostock/fit-text-to-circle
     */
    measureWidth: (text: any) => number;
    isValidNumber: (value: any) => boolean;
    removeUnneededNodes(svg: any): void;
    draw: () => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BubbleChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BubbleChartComponent, "n7-bubble-chart", never, { "data": { "alias": "data"; "required": false; }; "emit": { "alias": "emit"; "required": false; }; }, {}, never, never, false, never>;
}
