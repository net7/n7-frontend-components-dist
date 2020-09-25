/**
 * Interface for datapicker component
 * @property id (required)
 * @property libOptions (required)
 * @property classes (optional)
 * @property payload (optional)
 * @property _meta (optional)
 */
import * as ɵngcc0 from '@angular/core';
export interface DatePickerData {
    /**
     * datepicker id
     */
    id: string;
    /**
    * datepicker library options
    * view LINK: https://flatpickr.js.org/
    */
    libOptions: any;
    /**
     * for datepicker range min and max range value
     */
    minRange?: number;
    maxRange?: number;
    classes?: string;
    /**
     * datepicker event payload
     */
    payload?: any;
    _meta?: any;
    /**
     * callback for saving the created datepicker instance
     */
    getInstance?: any;
}
export declare class DatepickerComponent {
    data: DatePickerData;
    emit: any;
    private _loaded;
    ngAfterContentChecked(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DatepickerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DatepickerComponent, "n7-datepicker", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5kLnRzIiwic291cmNlcyI6WyJkYXRlcGlja2VyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogSW50ZXJmYWNlIGZvciBkYXRhcGlja2VyIGNvbXBvbmVudFxyXG4gKiBAcHJvcGVydHkgaWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgbGliT3B0aW9ucyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBEYXRlUGlja2VyRGF0YSB7XHJcbiAgICAvKipcclxuICAgICAqIGRhdGVwaWNrZXIgaWRcclxuICAgICAqL1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgKiBkYXRlcGlja2VyIGxpYnJhcnkgb3B0aW9uc1xyXG4gICAgKiB2aWV3IExJTks6IGh0dHBzOi8vZmxhdHBpY2tyLmpzLm9yZy9cclxuICAgICovXHJcbiAgICBsaWJPcHRpb25zOiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIGZvciBkYXRlcGlja2VyIHJhbmdlIG1pbiBhbmQgbWF4IHJhbmdlIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIG1pblJhbmdlPzogbnVtYmVyO1xyXG4gICAgbWF4UmFuZ2U/OiBudW1iZXI7XHJcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBkYXRlcGlja2VyIGV2ZW50IHBheWxvYWRcclxuICAgICAqL1xyXG4gICAgcGF5bG9hZD86IGFueTtcclxuICAgIF9tZXRhPzogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBjYWxsYmFjayBmb3Igc2F2aW5nIHRoZSBjcmVhdGVkIGRhdGVwaWNrZXIgaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZ2V0SW5zdGFuY2U/OiBhbnk7XHJcbn1cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRGF0ZXBpY2tlckNvbXBvbmVudCB7XHJcbiAgICBkYXRhOiBEYXRlUGlja2VyRGF0YTtcclxuICAgIGVtaXQ6IGFueTtcclxuICAgIHByaXZhdGUgX2xvYWRlZDtcclxuICAgIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkO1xyXG59XHJcbiJdfQ==