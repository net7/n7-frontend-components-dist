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
export declare class BubbleChartComponent implements AfterContentChecked {
    data: BubbleChartData;
    emit: any;
    private d3;
    private _loaded;
    ngAfterContentChecked(): void;
    onClick(payload: any): void;
    draw: () => void;
}
