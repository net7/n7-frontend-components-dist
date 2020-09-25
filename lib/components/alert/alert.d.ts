/**
 * Interface for TagComponent's "data"
 *
 * @property body (required)
 * @property icon (optional)
 * @property classes (optional)
 * @property payload (optional)
 * @property _meta (optional)
 * @property hasCloseButton (optional)
 *
 */
import * as ɵngcc0 from '@angular/core';
export interface AlertData {
    /**
     * the alert's body/message which can include html tags
    */
    text: string;
    /**
     * alert icon (on left side)
     */
    icon?: string;
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
     * indicates whether the alert includes a close button (on top-right corner)
     * or not (if not provided assumed as false)
     */
    hasCloseButton?: boolean;
}
export declare class AlertComponent {
    data: AlertData;
    emit: any;
    onClick(payload: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AlertComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AlertComponent, "n7-alert", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuZC50cyIsInNvdXJjZXMiOlsiYWxlcnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIFRhZ0NvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBib2R5IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGhhc0Nsb3NlQnV0dG9uIChvcHRpb25hbClcclxuICpcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnREYXRhIHtcclxuICAgIC8qKlxyXG4gICAgICogdGhlIGFsZXJ0J3MgYm9keS9tZXNzYWdlIHdoaWNoIGNhbiBpbmNsdWRlIGh0bWwgdGFnc1xyXG4gICAgKi9cclxuICAgIHRleHQ6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWxlcnQgaWNvbiAob24gbGVmdCBzaWRlKVxyXG4gICAgICovXHJcbiAgICBpY29uPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAgICovXHJcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXHJcbiAgICAgKi9cclxuICAgIHBheWxvYWQ/OiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaW5mb1xyXG4gICAgICovXHJcbiAgICBfbWV0YT86IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGFsZXJ0IGluY2x1ZGVzIGEgY2xvc2UgYnV0dG9uIChvbiB0b3AtcmlnaHQgY29ybmVyKVxyXG4gICAgICogb3Igbm90IChpZiBub3QgcHJvdmlkZWQgYXNzdW1lZCBhcyBmYWxzZSlcclxuICAgICAqL1xyXG4gICAgaGFzQ2xvc2VCdXR0b24/OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFsZXJ0Q29tcG9uZW50IHtcclxuICAgIGRhdGE6IEFsZXJ0RGF0YTtcclxuICAgIGVtaXQ6IGFueTtcclxuICAgIG9uQ2xpY2socGF5bG9hZDogYW55KTogdm9pZDtcclxufVxyXG4iXX0=