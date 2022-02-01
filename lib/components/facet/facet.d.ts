import * as i0 from "@angular/core";
/**
 * Interface for FacetComponent's "data"
 *
 * @property sections (required)
 * @property classes (optional)
 */
export interface FacetData {
    sections: FacetSection[];
    classes?: string;
}
/**
 * Interface for FacetSection
 *
 * @property inputs (required)
 * @property classes (optional)
 * @property _meta (optional)
 */
export interface FacetSection {
    inputs: Array<FacetInputCheckbox | FacetInputLink | FacetInputText | FacetInputSelect>;
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
export interface FacetInputText {
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
export interface FacetInputSelect {
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
export interface FacetInputCheckbox {
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
export interface FacetInputLink {
    type: 'link';
    text: string;
    icon?: string;
    counter?: number;
    payload?: any;
    classes?: any;
    _meta?: any;
}
export declare class FacetComponent {
    data: FacetData;
    emit: any;
    onChange(inputPayload: any, value?: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FacetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FacetComponent, "n7-facet", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}
