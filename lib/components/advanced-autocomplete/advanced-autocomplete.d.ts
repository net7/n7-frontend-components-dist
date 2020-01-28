import { IAnchor } from '../../shared-interfaces';
/**
 * Interface for AdvancedAutocompleteComponent's "data"
 */
export interface IAdvancedAutocompleteData {
    results?: IAdvancedAutocompleteResponse[];
    actions?: {
        advanced?: {
            text: string;
            anchor?: IAnchor;
            classes?: any;
        };
        showMore?: {
            text: string;
            anchor?: IAnchor;
            classes?: any;
        };
    };
    fallback: string;
    classes?: any;
    _meta?: any;
}
interface IAdvancedAutocompleteItem {
    /**
     * anchor <a>
     */
    anchor?: IAnchor;
    /**
     * Rendered text for the result item
     */
    title?: string;
    /**
     * Additional metadata for the result item
     */
    metadata?: Array<{
        key?: string;
        value?: string;
    }>;
}
interface IAdvancedAutocompleteResponse {
    items: IAdvancedAutocompleteItem[];
    group?: {
        title: string;
        classes?: string;
        icon?: string;
        anchor?: IAnchor;
    };
}
export declare class AdvancedAutocompleteComponent {
    data: IAdvancedAutocompleteData;
    emit: any;
    onClick(payload: any): void;
}
export {};
