/**
 * Interface for FacetComponent's "data"
 *
 * @property sections (required)
 * @property classes (optional)
 */
export interface IFacetData {
    sections: IFacetSection[];
    classes?: string;
}
/**
 * Interface for FacetSection
 *
 * @property inputs (required)
 * @property classes (optional)
 * @property _meta (optional)
 */
export interface IFacetSection {
    inputs: Array<IFacetInputCheckbox | IFacetInputLink | IFacetInputText | IFacetInputSelect>;
    classes?: string;
    _meta?: any;
}
/**
 * Interface for FacetInputText
 *
 * @property type (required)
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
export interface IFacetInputText {
    type: 'text';
    id: string;
    placeholder?: string;
    value?: string | number | null;
    label?: string;
    disabled?: boolean;
    icon?: string;
    inputPayload?: any;
    enterPayload?: any;
    iconPayload?: any;
    classes?: any;
    _meta?: any;
}
/**
 * Interface for FacetInputSelect
 *
 * @property type (required)
 * @property id (required)
 * @property options (required)
 * @property label (optional)
 * @property disabled (optional)
 * @property icon (optional)
 * @property payload (optional)
 * @property classes (optional)
 * @property _meta (optional)
 */
export interface IFacetInputSelect {
    type: 'select';
    id: string;
    options: Array<{
        label: string;
        value: string | number;
        selected?: boolean;
        disabled?: boolean;
    }>;
    label?: string;
    disabled?: boolean;
    payload?: any;
    classes?: any;
    _meta?: any;
}
/**
 * Interface for FacetInputCheckbox
 *
 * @property type (required)
 * @property id (required)
 * @property label (required)
 * @property checked (optional)
 * @property disabled (optional)
 * @property payload (optional)
 * @property classes (optional)
 * @property _meta (optional)
 */
export interface IFacetInputCheckbox {
    type: 'checkbox';
    id: string;
    label: string;
    checked?: boolean;
    disabled?: boolean;
    payload?: any;
    classes?: any;
    _meta?: any;
}
/**
 * Interface for FacetInputLink
 *
 * @property icon (optional)
 * @property text (required)
 * @property counter (optional)
 * @property payload (optional)
 * @property classes (optional)
 * @property _meta (optional)
 */
export interface IFacetInputLink {
    type: 'link';
    text: string;
    icon?: string;
    counter?: number;
    payload?: any;
    classes?: any;
    _meta?: any;
}
export declare class FacetComponent {
    data: IFacetData;
    emit: any;
    onChange(inputPayload: any, value?: any): void;
}
