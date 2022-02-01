import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<InputSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputSelectComponent, "n7-input-select", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}
