/**
 * Interface for InputTextData
 *
 * @property id (required)
 * @property placeholder (optional)
 * @property value (optional)
 * @property label (optional)
 * @property disabled (optional)
 * @property icon (optional)
 * @property inputPayload (optional)
 * @property enterPayload (optional)
 * @property iconPayload (optional)
 * @property classes (optional)
 * @property _meta (optional)
 */
import * as ɵngcc0 from '@angular/core';
export interface InputTextData {
    /**
     * Unique ID for the text input element
     */
    id: string;
    /**
     * Placeholder text inside the input box
     */
    placeholder?: string;
    /**
     * Default value of the input box
     */
    value?: string | number | null;
    /**
     * Label for the input box
     */
    label?: string;
    /**
     * Prevents the user from changing the input's value
     */
    disabled?: boolean;
    /**
     * Optional icon to render inside the input box (eg. n7-icon-search)
     */
    icon?: string;
    /**
     * Payload that is sent when the user changes the value
     */
    inputPayload?: any;
    /**
     * Payload that is sent when the user presses the "Enter" key
     */
    enterPayload?: any;
    /**
     * Payload that is sent when the user clicks on the icon
     */
    iconPayload?: any;
    /**
     * Additional HTML Classes
     */
    classes?: any;
    /**
     * Additional data for the component's logic
     */
    _meta?: any;
}
export declare class InputTextComponent {
    data: InputTextData;
    emit: any;
    onChange(inputPayload: any, value?: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InputTextComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<InputTextComponent, "n7-input-text", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdGV4dC5kLnRzIiwic291cmNlcyI6WyJpbnB1dC10ZXh0LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgSW5wdXRUZXh0RGF0YVxyXG4gKlxyXG4gKiBAcHJvcGVydHkgaWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgcGxhY2Vob2xkZXIgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgdmFsdWUgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgbGFiZWwgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgZGlzYWJsZWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpbnB1dFBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgZW50ZXJQYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGljb25QYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFRleHREYXRhIHtcclxuICAgIC8qKlxyXG4gICAgICogVW5pcXVlIElEIGZvciB0aGUgdGV4dCBpbnB1dCBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIFBsYWNlaG9sZGVyIHRleHQgaW5zaWRlIHRoZSBpbnB1dCBib3hcclxuICAgICAqL1xyXG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIERlZmF1bHQgdmFsdWUgb2YgdGhlIGlucHV0IGJveFxyXG4gICAgICovXHJcbiAgICB2YWx1ZT86IHN0cmluZyB8IG51bWJlciB8IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIExhYmVsIGZvciB0aGUgaW5wdXQgYm94XHJcbiAgICAgKi9cclxuICAgIGxhYmVsPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBQcmV2ZW50cyB0aGUgdXNlciBmcm9tIGNoYW5naW5nIHRoZSBpbnB1dCdzIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogT3B0aW9uYWwgaWNvbiB0byByZW5kZXIgaW5zaWRlIHRoZSBpbnB1dCBib3ggKGVnLiBuNy1pY29uLXNlYXJjaClcclxuICAgICAqL1xyXG4gICAgaWNvbj86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogUGF5bG9hZCB0aGF0IGlzIHNlbnQgd2hlbiB0aGUgdXNlciBjaGFuZ2VzIHRoZSB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBpbnB1dFBheWxvYWQ/OiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIFBheWxvYWQgdGhhdCBpcyBzZW50IHdoZW4gdGhlIHVzZXIgcHJlc3NlcyB0aGUgXCJFbnRlclwiIGtleVxyXG4gICAgICovXHJcbiAgICBlbnRlclBheWxvYWQ/OiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIFBheWxvYWQgdGhhdCBpcyBzZW50IHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBpY29uXHJcbiAgICAgKi9cclxuICAgIGljb25QYXlsb2FkPzogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRpdGlvbmFsIEhUTUwgQ2xhc3Nlc1xyXG4gICAgICovXHJcbiAgICBjbGFzc2VzPzogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRpdGlvbmFsIGRhdGEgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xyXG4gICAgICovXHJcbiAgICBfbWV0YT86IGFueTtcclxufVxyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJbnB1dFRleHRDb21wb25lbnQge1xyXG4gICAgZGF0YTogSW5wdXRUZXh0RGF0YTtcclxuICAgIGVtaXQ6IGFueTtcclxuICAgIG9uQ2hhbmdlKGlucHV0UGF5bG9hZDogYW55LCB2YWx1ZT86IGFueSk6IHZvaWQ7XHJcbn1cclxuIl19