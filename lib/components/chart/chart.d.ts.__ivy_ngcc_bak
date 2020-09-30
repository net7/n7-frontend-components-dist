import { AfterContentChecked } from '@angular/core';
/**
 * Interface for ChartComponent's "data"
 *
 * @property _chartId (required)
 * @property options (required)
 * @property classes (optional)
 * @property payload (optional)
 * @property _meta (optional)
*/
export interface ChartData {
    /**
     * unique identifier for the chart
     */
    containerId: string;
    /**
     * libOptions for the chart ( docs here : https://apexcharts.com/docs/options/ )
     */
    libOptions: any;
    /**
     * additional html classes
     */
    classes?: string;
    /**
     * action click's payload
     */
    payload?: any;
    /**
     * additional info
     */
    _meta?: any;
    /**
     * callback for saving the created chart instance
     */
    setChart?: any;
}
export declare class ChartComponent implements AfterContentChecked {
    data: ChartData;
    emit: any;
    private _loaded;
    ngAfterContentChecked(): void;
}
