/**
 * Interface for AdvancedAutocompleteComponent's "data"
 *
 * @property NAME (required|options) <--- TODO: update with interface properties
 */
export interface IAdvancedAutocompleteData {
    results?: IAdvancedAutocompleteResponse[];
    actions?: {
        advanced?: {
            text: string;
            payload: any;
            classes?: any;
        };
        showMore?: {
            text: string;
            payload: any;
            classes?: any;
        };
    };
    fallback: string;
    classes?: any;
    _meta?: any;
}
export interface IAdvancedAutocompleteResponse {
    /**
     * group of results with a title
     * NOTE: Nested groups WILL NOT BE RENDERED!
     */
    group?: {
        title: string;
        items: IAdvancedAutocompleteResponse[];
        classes?: string;
        icon?: string;
        payload?: any;
    };
    label?: string;
    value?: any;
    payload?: any;
}
export declare class AdvancedAutocompleteComponent {
    data: IAdvancedAutocompleteData;
    emit: any;
    onClick(payload: any): void;
}
