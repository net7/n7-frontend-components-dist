/**
 * Interface for InputSelect
 *
 * @property id (required)
 * @property options (required)
 * @property label (optional)
 * @property disabled (optional)
 * @property icon (optional)
 * @property payload (optional)
 * @property classes (optional)
 * @property _meta (optional)
 */
import * as ɵngcc0 from '@angular/core';
export interface InputSelectData {
    /**
     * A unique ID for the select item
     */
    id: string;
    /**
     * The array of <option> elements
     */
    options: Array<{
        /**
         * The rendered text for the <option> element
         */
        label: string;
        /**
         * The event value for the <option> element
         */
        value: string | number;
        /**
         * Sets the option as default (selected)
         */
        selected?: boolean;
        /**
         * Prevents the user from selecting this option
         */
        disabled?: boolean;
    }>;
    /**
     * Label for the <select> element
     */
    label?: string;
    /**
     * Prevents the user from changing any option
     */
    disabled?: boolean;
    /**
     * Payload for the select's change event
     */
    payload?: any;
    /**
     * Additional HTML Classes
     */
    classes?: any;
    /**
     * Additional data for the component's logic
     */
    _meta?: any;
}
export declare class InputSelectComponent {
    data: InputSelectData;
    emit: any;
    onChange(inputPayload: any, value?: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InputSelectComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<InputSelectComponent, "n7-input-select", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2VsZWN0LmQudHMiLCJzb3VyY2VzIjpbImlucHV0LXNlbGVjdC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgSW5wdXRTZWxlY3RcclxuICpcclxuICogQHByb3BlcnR5IGlkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IG9wdGlvbnMgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgbGFiZWwgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgZGlzYWJsZWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFNlbGVjdERhdGEge1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIHVuaXF1ZSBJRCBmb3IgdGhlIHNlbGVjdCBpdGVtXHJcbiAgICAgKi9cclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBhcnJheSBvZiA8b3B0aW9uPiBlbGVtZW50c1xyXG4gICAgICovXHJcbiAgICBvcHRpb25zOiBBcnJheTx7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHJlbmRlcmVkIHRleHQgZm9yIHRoZSA8b3B0aW9uPiBlbGVtZW50XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGFiZWw6IHN0cmluZztcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgZXZlbnQgdmFsdWUgZm9yIHRoZSA8b3B0aW9uPiBlbGVtZW50XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXRzIHRoZSBvcHRpb24gYXMgZGVmYXVsdCAoc2VsZWN0ZWQpXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2VsZWN0ZWQ/OiBib29sZWFuO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFByZXZlbnRzIHRoZSB1c2VyIGZyb20gc2VsZWN0aW5nIHRoaXMgb3B0aW9uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gICAgfT47XHJcbiAgICAvKipcclxuICAgICAqIExhYmVsIGZvciB0aGUgPHNlbGVjdD4gZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBsYWJlbD86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogUHJldmVudHMgdGhlIHVzZXIgZnJvbSBjaGFuZ2luZyBhbnkgb3B0aW9uXHJcbiAgICAgKi9cclxuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogUGF5bG9hZCBmb3IgdGhlIHNlbGVjdCdzIGNoYW5nZSBldmVudFxyXG4gICAgICovXHJcbiAgICBwYXlsb2FkPzogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRpdGlvbmFsIEhUTUwgQ2xhc3Nlc1xyXG4gICAgICovXHJcbiAgICBjbGFzc2VzPzogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRpdGlvbmFsIGRhdGEgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xyXG4gICAgICovXHJcbiAgICBfbWV0YT86IGFueTtcclxufVxyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJbnB1dFNlbGVjdENvbXBvbmVudCB7XHJcbiAgICBkYXRhOiBJbnB1dFNlbGVjdERhdGE7XHJcbiAgICBlbWl0OiBhbnk7XHJcbiAgICBvbkNoYW5nZShpbnB1dFBheWxvYWQ6IGFueSwgdmFsdWU/OiBhbnkpOiB2b2lkO1xyXG59XHJcbiJdfQ==