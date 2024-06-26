import * as i0 from "@angular/core";
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
export interface InputCheckbox {
    /**
     * Unique ID for the checkbox
     */
    id: string;
    /**
     * The name of the control.
     */
    name?: string;
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
    classes?: string;
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
    /**
     * Fieldset (group) legend label
     */
    legend?: string;
    /**
     * Additional HTML Classes
     */
    classes?: string;
}
export declare class InputCheckboxComponent {
    data: InputCheckboxData;
    emit: any;
    onChange(inputPayload: any, value?: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputCheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputCheckboxComponent, "n7-input-checkbox", never, { "data": "data"; "emit": "emit"; }, {}, never, never, false>;
}
