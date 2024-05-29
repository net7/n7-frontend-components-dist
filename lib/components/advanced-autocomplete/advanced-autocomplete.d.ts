import { Anchor } from '../../shared-interfaces';
import * as i0 from "@angular/core";
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
export declare class AdvancedAutocompleteComponent {
    data: AdvancedAutocompleteData;
    emit: any;
    onClick(payload: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AdvancedAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AdvancedAutocompleteComponent, "n7-advanced-autocomplete", never, { "data": { "alias": "data"; "required": false; }; "emit": { "alias": "emit"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
