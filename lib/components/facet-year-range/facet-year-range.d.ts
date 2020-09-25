/**
 * Interface for FacetYearRangeComponent's "data"
 *
 * @property inDate (required)
 * - text (optional)
 * - classes (optional)
 * - payload (required)
 * - _meta (optional)
 * @property outDate (required)
 * - text (optional)
 * - classes (optional)
 * - payload (required)
 * - _meta (optional)
 * @property options (required)
 */
import * as ɵngcc0 from '@angular/core';
export interface FacetYearRangeData {
    /**
     * beginning year range selection
     */
    inDate: {
        /**
         * <select> heading
         */
        text?: string;
        /**
         * additional html classes
         */
        classes?: any;
        /**
         * placeholder option
         */
        placeholder?: string;
        /**
         * onChange payload
         */
        payload: any;
        /**
         * additional data useful for the component's logic
         */
        _meta?: any;
        options: FacetOptions[];
    };
    /**
    * end year range selection
    */
    outDate: {
        /**
         * <select> heading
         */
        text?: string;
        /**
         * additional html classes
         */
        classes?: any;
        /**
         * placeholder option
         */
        placeholder?: string;
        /**
         * onChange payload
         */
        payload: any;
        /**
         * additional data useful for the component's logic
         */
        _meta?: any;
        options: FacetOptions[];
    };
}
export interface FacetOptions {
    /**
     * value of each <option>
     */
    value: any;
}
export declare class FacetYearRangeComponent {
    data: FacetYearRangeData;
    emit: any;
    onChange(payload: any, selected: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FacetYearRangeComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FacetYearRangeComponent, "n7-facet-year-range", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQteWVhci1yYW5nZS5kLnRzIiwic291cmNlcyI6WyJmYWNldC15ZWFyLXJhbmdlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEZhY2V0WWVhclJhbmdlQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGluRGF0ZSAocmVxdWlyZWQpXHJcbiAqIC0gdGV4dCAob3B0aW9uYWwpXHJcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIC0gcGF5bG9hZCAocmVxdWlyZWQpXHJcbiAqIC0gX21ldGEgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgb3V0RGF0ZSAocmVxdWlyZWQpXHJcbiAqIC0gdGV4dCAob3B0aW9uYWwpXHJcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIC0gcGF5bG9hZCAocmVxdWlyZWQpXHJcbiAqIC0gX21ldGEgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgb3B0aW9ucyAocmVxdWlyZWQpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZhY2V0WWVhclJhbmdlRGF0YSB7XHJcbiAgICAvKipcclxuICAgICAqIGJlZ2lubmluZyB5ZWFyIHJhbmdlIHNlbGVjdGlvblxyXG4gICAgICovXHJcbiAgICBpbkRhdGU6IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiA8c2VsZWN0PiBoZWFkaW5nXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGV4dD86IHN0cmluZztcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzZXM/OiBhbnk7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogcGxhY2Vob2xkZXIgb3B0aW9uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogb25DaGFuZ2UgcGF5bG9hZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHBheWxvYWQ6IGFueTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBhZGRpdGlvbmFsIGRhdGEgdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcclxuICAgICAgICAgKi9cclxuICAgICAgICBfbWV0YT86IGFueTtcclxuICAgICAgICBvcHRpb25zOiBGYWNldE9wdGlvbnNbXTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICogZW5kIHllYXIgcmFuZ2Ugc2VsZWN0aW9uXHJcbiAgICAqL1xyXG4gICAgb3V0RGF0ZToge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIDxzZWxlY3Q+IGhlYWRpbmdcclxuICAgICAgICAgKi9cclxuICAgICAgICB0ZXh0Pzogc3RyaW5nO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3Nlcz86IGFueTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBwbGFjZWhvbGRlciBvcHRpb25cclxuICAgICAgICAgKi9cclxuICAgICAgICBwbGFjZWhvbGRlcj86IHN0cmluZztcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBvbkNoYW5nZSBwYXlsb2FkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcGF5bG9hZDogYW55O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGFkZGl0aW9uYWwgZGF0YSB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIF9tZXRhPzogYW55O1xyXG4gICAgICAgIG9wdGlvbnM6IEZhY2V0T3B0aW9uc1tdO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEZhY2V0T3B0aW9ucyB7XHJcbiAgICAvKipcclxuICAgICAqIHZhbHVlIG9mIGVhY2ggPG9wdGlvbj5cclxuICAgICAqL1xyXG4gICAgdmFsdWU6IGFueTtcclxufVxyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBGYWNldFllYXJSYW5nZUNvbXBvbmVudCB7XHJcbiAgICBkYXRhOiBGYWNldFllYXJSYW5nZURhdGE7XHJcbiAgICBlbWl0OiBhbnk7XHJcbiAgICBvbkNoYW5nZShwYXlsb2FkOiBhbnksIHNlbGVjdGVkOiBhbnkpOiB2b2lkO1xyXG59XHJcbiJdfQ==