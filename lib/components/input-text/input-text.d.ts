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
     * Input minimun allowed value (only for type=number)
     */
    min?: number;
    /**
     * Input maximun allowed value (only for type=number)
     */
    max?: number;
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
}
