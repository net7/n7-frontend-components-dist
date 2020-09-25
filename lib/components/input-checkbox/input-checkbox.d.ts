/**
 * Interface for InputCheckbox
 *
 * @property id (required)
 * @property label (required)
 * @property checked (optional)
 * @property disabled (optional)
 * @property payload (optional)
 * @property classes (optional)
 * @property _meta (optional)
 */
import * as ɵngcc0 from '@angular/core';
export interface InputCheckbox {
    /**
     * Unique ID for the checkbox
     */
    id: string;
    /**
     * Label for the checkbox
     */
    label: string;
    /**
     * Defaults the checkbox to be checked
     */
    checked?: boolean;
    /**
     * Sets the disabled HTML attribute
     */
    disabled?: boolean;
    /**
     * Payload for the change event
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
/**
 * Interface for InputCheckboxData
 * @property checkboxes (required)
 */
export interface InputCheckboxData {
    /**
     * An array of input checkboxes
     */
    checkboxes: InputCheckbox[];
}
export declare class InputCheckboxComponent {
    data: InputCheckboxData;
    emit: any;
    onChange(inputPayload: any, value?: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InputCheckboxComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<InputCheckboxComponent, "n7-input-checkbox", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2hlY2tib3guZC50cyIsInNvdXJjZXMiOlsiaW5wdXQtY2hlY2tib3guZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgSW5wdXRDaGVja2JveFxyXG4gKlxyXG4gKiBAcHJvcGVydHkgaWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgbGFiZWwgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY2hlY2tlZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBkaXNhYmxlZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJbnB1dENoZWNrYm94IHtcclxuICAgIC8qKlxyXG4gICAgICogVW5pcXVlIElEIGZvciB0aGUgY2hlY2tib3hcclxuICAgICAqL1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogTGFiZWwgZm9yIHRoZSBjaGVja2JveFxyXG4gICAgICovXHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZhdWx0cyB0aGUgY2hlY2tib3ggdG8gYmUgY2hlY2tlZFxyXG4gICAgICovXHJcbiAgICBjaGVja2VkPzogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgZGlzYWJsZWQgSFRNTCBhdHRyaWJ1dGVcclxuICAgICAqL1xyXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBQYXlsb2FkIGZvciB0aGUgY2hhbmdlIGV2ZW50XHJcbiAgICAgKi9cclxuICAgIHBheWxvYWQ/OiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIEFkZGl0aW9uYWwgSFRNTCBDbGFzc2VzXHJcbiAgICAgKi9cclxuICAgIGNsYXNzZXM/OiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIEFkZGl0aW9uYWwgZGF0YSBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXHJcbiAgICAgKi9cclxuICAgIF9tZXRhPzogYW55O1xyXG59XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIElucHV0Q2hlY2tib3hEYXRhXHJcbiAqIEBwcm9wZXJ0eSBjaGVja2JveGVzIChyZXF1aXJlZClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRDaGVja2JveERhdGEge1xyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBhcnJheSBvZiBpbnB1dCBjaGVja2JveGVzXHJcbiAgICAgKi9cclxuICAgIGNoZWNrYm94ZXM6IElucHV0Q2hlY2tib3hbXTtcclxufVxyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJbnB1dENoZWNrYm94Q29tcG9uZW50IHtcclxuICAgIGRhdGE6IElucHV0Q2hlY2tib3hEYXRhO1xyXG4gICAgZW1pdDogYW55O1xyXG4gICAgb25DaGFuZ2UoaW5wdXRQYXlsb2FkOiBhbnksIHZhbHVlPzogYW55KTogdm9pZDtcclxufVxyXG4iXX0=