import { OnOff } from '../../shared-interfaces';
import * as i0 from "@angular/core";
export declare type InputTextareaData = {
    /** Unique ID for the text input element */
    id: string;
    /** A hint to the user of what can be entered in the control. */
    placeholder?: string;
    /** Default value of the textarea */
    value?: string | number | null;
    /** Label for the textarea */
    label?: string;
    /**
     * Indicates that the user cannot interact with the control.
     * If this attribute is not specified, the control inherits its setting
     * from the containing element.
     */
    disabled?: boolean;
    /** Indicates whether the value of the control can be automatically completed by the browser. */
    autocomplete?: OnOff;
    /**
     * Lets you specify that a form control should have input focus when the page loads.
     * Only one form-associated element in a document can have this attribute specified.
     */
    autofocus?: boolean;
    /**
     * The maximum number of characters (UTF-16 code units) that the user can enter.
     * If this value isn't specified, the user can enter an unlimited number of characters.
     */
    maxlength?: number;
    /**
     * The minimum number of characters (UTF-16 code units) required that the user should enter.
     */
    minlength?: number;
    /** The name of the control. */
    name?: string;
    /** Specifies that the user must fill in a value before submitting a form. */
    required?: boolean;
    /**
     * The number of visible text lines for the control.
     * If it is specified, it must be a positive integer.
     * @defaultValue 2
     */
    rows?: number;
    /**
     * The visible width of the text control, in average character widths.
     * If it is specified, it must be a positive integer.
     * @defaultValue 20
     */
    cols?: number;
    /** Payload that is sent when the user changes the value */
    inputPayload?: any;
    /** Payload that is sent when the user presses the "Enter" key */
    enterPayload?: any;
    /** Payload that is sent when the user clicks on the icon */
    iconPayload?: any;
    /** Additional HTML Classes */
    classes?: any;
    /** Additional data for the component's logic */
    _meta?: any;
};
export declare class InputTextareaComponent {
    data: InputTextareaData;
    emit: (type: string, payload?: unknown) => void;
    onChange(inputPayload: any, value?: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputTextareaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputTextareaComponent, "n7-input-textarea", never, { "data": "data"; "emit": "emit"; }, {}, never, never, false>;
}
