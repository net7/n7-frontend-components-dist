import { AfterContentChecked } from '@angular/core';
import { DataItem, TimelineOptions } from 'vis-timeline';
export interface LibOptions extends TimelineOptions {
    /** Specifies how strong the zooming for each scroll tick.
     * Higher zooming friction will slow zooming speed */
    zoomFriction?: number;
}
export interface TimelineData {
    /** ID for the HTML container element */
    containerID: string;
    /** Options for vis-timeline, full reference: https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options */
    libOptions: LibOptions;
    /** Sets the timeline instance to the given parameter */
    _setInstance?: any;
    /** Dadaset in vis-js format, full ref: https://visjs.github.io/vis-timeline/docs/timeline/#Data_Format */
    dataSet: DataItem[];
}
export declare class TimelineComponent implements AfterContentChecked {
    data: TimelineData;
    emit: any;
    /** Knows if the component is loaded */
    private _loaded;
    /** Dynamically load required node modules */
    private loadModules;
    ngAfterContentChecked(): void;
    onClick(payload: any): void;
}
