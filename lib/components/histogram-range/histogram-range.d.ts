import { AfterContentChecked } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Interface for HistogramRangeComponent's "data"
 */
export interface HistogramRangeData {
    /**
     * unique identifier for the histogram-range svg
     */
    containerId: string;
    /**
     * total width for the svg element
     */
    width: number;
    /**
     * total height for the svg element
     */
    height: number;
    /**
     * Internal margins of the svg
     */
    margin: {
        left: number;
        right: number;
        top: number;
        bottom: number;
    };
    /**
     * Theme of the histogram
     */
    colours: {
        top: string;
        bottom: string;
        accent: string;
    };
    /**
     * Data for the histogram bars
     */
    items: {
        /** default label of the item */
        label: string;
        /** y-axis value of the bar (height) */
        value: number;
        /** payload that the item should emit when selected */
        payload: any;
        /**
         * 'upper' values of the range.
         * only used when each bar represents a range.
         */
        range?: {
            /** label loaded when selected by the right-most pointer */
            label: string;
            /** payload emitted when selected by the right-most pointer */
            payload: any;
        };
    }[];
    /**
     * Axis settings
     */
    axis?: {
        /** Y Axis settings */
        yAxis?: {
            /** Turn on and off the axis */
            show?: boolean;
            /** Manually set the axis values to show */
            values?: number[];
            /** How many ticks do you want to see */
            tickAmount?: number;
        };
    };
    /**
     * expose the draw function outside of n7-frontend/components library
     * this is needed to redraw bubble-chart-component on command
     */
    setDraw?: any;
    /**
     * setSliders
     */
    setSliders?: LabelCouple;
    /**
     * Public api
     */
    setApi?: any;
}
declare type Sliders = {
    x: number;
    y: number;
}[];
declare type LabelCouple = [string, string];
export declare class HistogramRangeComponent implements AfterContentChecked {
    data: HistogramRangeData;
    emit: any;
    private d3;
    private sliders;
    /** d3 selection svg root */
    private svg;
    private _loaded;
    private colourBars;
    private getSelectedRange;
    ngAfterContentChecked(): void;
    draw: () => void;
    /** Avoid collision of the slider labels */
    textCollision: (sliders: Sliders) => void;
    /** Get x-axis position from label */
    labelToX(): any;
    /**
     * Get an event with viewBox coordinates and
     * parse them in absolute coordinates
     */
    getEventCoords(event: any): {
        x: number;
        y: number;
    };
    /** Public api that allows to dinamically change the bars */
    setBars: (newBars: any) => void;
    /** Public api that allows to dinamically change the slider position */
    setSliders: ([startLabel, endLabel]: LabelCouple, emit?: boolean) => any;
    /** Emits an event when the component has loaded */
    emitLoaded(payload: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HistogramRangeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HistogramRangeComponent, "n7-histogram-range", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}
export {};
