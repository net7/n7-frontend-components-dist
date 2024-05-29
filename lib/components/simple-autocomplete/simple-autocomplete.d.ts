import { Anchor } from '../../shared-interfaces';
import * as i0 from "@angular/core";
/**
 * Interface for SimpleAutocompleteComponent's "Suggestion"
 *
 * @property text
 * @property anchor (optional)
 */
export interface SimpleAutocompleteSuggestion {
    text: string;
    anchor?: Anchor;
}
/**
 * Interface for SimpleAutocompleteComponent's "data"
 *
 * @property suggestion (required)
 * @property classes (optional)
 * @property _meta (optional)
 */
export interface SimpleAutocompleteData {
    /**
     * Suggested word endings
     */
    suggestion: SimpleAutocompleteSuggestion[];
    /**
     * Additional HTML classes
     */
    classes?: any;
    /**
     * Additional data useful for the component's logic
     */
    _meta?: any;
}
export declare class SimpleAutocompleteComponent {
    data: SimpleAutocompleteData;
    emit: any;
    onClick(payload: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SimpleAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SimpleAutocompleteComponent, "n7-simple-autocomplete", never, { "data": { "alias": "data"; "required": false; }; "emit": { "alias": "emit"; "required": false; }; }, {}, never, never, false, never>;
}
