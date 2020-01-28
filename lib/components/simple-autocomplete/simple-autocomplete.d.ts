import { IAnchor } from '../../shared-interfaces';
/**
 * Interface for SimpleAutocompleteComponent's "data"
 *
 * @property suggestion (required)
 * @property classes (optional)
 * @property _meta (optional)
 */
export interface ISimpleAutocompleteData {
    /**
     * Suggested word endings
     */
    suggestion: ISimpleAutocompleteSuggestion[];
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
export interface ISimpleAutocompleteSuggestion {
    text: string;
    anchor?: IAnchor;
}
export declare class SimpleAutocompleteComponent {
    data: ISimpleAutocompleteData;
    emit: any;
    onClick(payload: any): void;
}
