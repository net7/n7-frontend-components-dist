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
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ChartComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ChartComponent, "n7-chart", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuZC50cyIsInNvdXJjZXMiOlsiY2hhcnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIENoYXJ0Q29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IF9jaGFydElkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IG9wdGlvbnMgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuKi9cclxuZXhwb3J0IGludGVyZmFjZSBDaGFydERhdGEge1xyXG4gICAgLyoqXHJcbiAgICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGNoYXJ0XHJcbiAgICAgKi9cclxuICAgIGNvbnRhaW5lcklkOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGxpYk9wdGlvbnMgZm9yIHRoZSBjaGFydCAoIGRvY3MgaGVyZSA6IGh0dHBzOi8vYXBleGNoYXJ0cy5jb20vZG9jcy9vcHRpb25zLyApXHJcbiAgICAgKi9cclxuICAgIGxpYk9wdGlvbnM6IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgICAqL1xyXG4gICAgY2xhc3Nlcz86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICAgICovXHJcbiAgICBwYXlsb2FkPzogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgICAqL1xyXG4gICAgX21ldGE/OiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIGNhbGxiYWNrIGZvciBzYXZpbmcgdGhlIGNyZWF0ZWQgY2hhcnQgaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgc2V0Q2hhcnQ/OiBhbnk7XHJcbn1cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcclxuICAgIGRhdGE6IENoYXJ0RGF0YTtcclxuICAgIGVtaXQ6IGFueTtcclxuICAgIHByaXZhdGUgX2xvYWRlZDtcclxuICAgIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkO1xyXG59XHJcbiJdfQ==