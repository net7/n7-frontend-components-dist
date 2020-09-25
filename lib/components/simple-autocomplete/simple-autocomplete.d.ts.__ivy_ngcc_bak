import { Anchor } from '../../shared-interfaces';
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
export declare class SimpleAutocompleteComponent {
    data: SimpleAutocompleteData;
    emit: any;
    onClick(payload: any): void;
}
