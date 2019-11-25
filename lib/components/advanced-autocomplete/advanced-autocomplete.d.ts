/**
 * Interface for AdvancedAutocompleteComponent's "data"
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
interface IAdvancedAutocompleteItem {
    label?: string;
    value?: any;
    payload?: any;
}
interface IAdvancedAutocompleteResponse {
    items: IAdvancedAutocompleteItem[];
    group?: {
        title: string;
        classes?: string;
        icon?: string;
        payload?: any;
    };
}
export declare class AdvancedAutocompleteComponent {
    data: IAdvancedAutocompleteData;
    emit: any;
    onClick(payload: any): void;
}
export {};
