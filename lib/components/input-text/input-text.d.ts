import { OnOff } from '../../shared-interfaces';
import * as i0 from "@angular/core";
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
export interface InputTextData {
    /**
     * Unique ID for the text input element
     */
    id: string;
    /**
     * Input type
     */
    type?: 'text' | 'number';
    /**
     * The name of the control.
     */
    name?: string;
    /**
     * A hint to the user of what can be entered in the control.
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
     * Input minimun allowed value (only for type=number)
     */
    min?: number;
    /**
     * Input maximun allowed value (only for type=number)
     */
    max?: number;
    /**
     * The maximum number of characters (UTF-16 code units) that the user can enter.
     * If this value isn't specified, the user can enter an unlimited number of characters.
     */
    maxlength?: number;
    /**
     * The minimum number of characters (UTF-16 code units) required that the user should enter.
     */
    minlength?: number;
    /** Indicates whether the value of the control can be automatically completed by the browser. */
    autocomplete?: OnOff;
    /** Specifies that the user must fill in a value before submitting a form. */
    required?: boolean;
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
    onBlur(): void;
    onFocus(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputTextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputTextComponent, "n7-input-text", never, { "data": { "alias": "data"; "required": false; }; "emit": { "alias": "emit"; "required": false; }; }, {}, never, never, false, never>;
}
