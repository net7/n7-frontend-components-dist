import { Anchor } from '../../shared-interfaces';
import * as i0 from "@angular/core";
/**
 * Interface for AdvancedAutocompleteComponent's "data"
 */
export interface AdvancedAutocompleteData {
    results?: AdvancedAutocompleteResponse[];
    actions?: {
        advanced?: {
            text: string;
            anchor?: Anchor;
            classes?: any;
        };
        showMore?: {
            text: string;
            anchor?: Anchor;
            classes?: any;
        };
    };
    fallback: string;
    classes?: any;
    _meta?: any;
}
interface AdvancedAutocompleteItem {
    /**
     * anchor <a>
     */
    anchor?: Anchor;
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
interface AdvancedAutocompleteResponse {
    items: AdvancedAutocompleteItem[];
    group?: {
        title: string;
        classes?: string;
        icon?: string;
        anchor?: Anchor;
    };
}
export declare class AdvancedAutocompleteComponent {
    data: AdvancedAutocompleteData;
    emit: any;
    onClick(payload: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AdvancedAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AdvancedAutocompleteComponent, "n7-advanced-autocomplete", never, { "data": "data"; "emit": "emit"; }, {}, never, never, false>;
}
export {};
