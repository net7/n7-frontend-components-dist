/**
 * Interface for SimpleAutocompleteComponent's "data"
 *
 * @property typed (required)
 * @property suggestion (required)
 * @property payload (optional)
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
 * @property prefix (optional)
 * @property suffix (optional)
 * @property payload (optional)
 */
export interface ISimpleAutocompleteSuggestion {
    /**
     * Render suggestions
     */
    prefix?: string;
    match?: string;
    suffix?: string;
    /**
     * Suggestion event payload
     */
    payload?: any;
}
export declare class SimpleAutocompleteComponent {
    data: ISimpleAutocompleteData;
    emit: any;
    onClick(payload: any): void;
}
