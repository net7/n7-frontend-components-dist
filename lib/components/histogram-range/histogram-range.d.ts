import { AfterContentChecked } from '@angular/core';
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
     * How much time does each bar represent?
     */
    innerRange?: {
        unit: 'day' | 'week' | 'month' | 'quarter' | 'year' | 'hour' | 'minute' | 'second' | 'millisecond' | 'd' | 'w' | 'M' | 'Q' | 'y' | 'h' | 'm' | 's' | 'ss';
        amount: number;
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
    years: {
        key: number | string;
        count: number;
        end?: number;
    }[];
    /**
     * expose the draw function outside of n7-frontend/components library
     * this is needed to redraw bubble-chart-component on command
     */
    setDraw?: any;
}
export declare class HistogramRangeComponent implements AfterContentChecked {
    data: HistogramRangeData;
    emit: any;
    private d3;
    private _loaded;
    ngAfterContentChecked(): void;
    draw: () => void;
}
