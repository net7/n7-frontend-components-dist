/**
 * Interface for FacetComponent's "data"
 *
 * @property checks (optional)
 * @property input (optional)
 * - label (optional)
 * - disabled (optional)
 * - placeholder (required)
 * - icon (optional)
 * - classes (optional)
 * - payload (optional)
 * @property filters (optional)
 */
export interface IFacetData {
    /**
     * list of checkboxes
     */
    checks?: IFacetCheck[];
    /**
     * search bar to find a filter
     */
    input?: {
        label?: string;
        disabled?: boolean;
        placeholder: string;
        icon?: string;
        classes?: any;
        payload?: any;
    };
    /**
     * list of filters
     */
    filters?: IFacetFilter[];
}
/**
 * Interface for FacetComponent's "check"
 *
 * @property label (required)
 * @property payload (optional)
 * @property classes (optional)
 */
export interface IFacetCheck {
    /**
     * checkbox label
     */
    label: string;
    /**
     * payload for onClick events
     */
    payload?: any;
    /**
     * additional html classes
     */
    classes?: any;
}
/**
 * Interface for FacetComponent's "filter"
 *
 * @property icon (optional)
 * @property text (required)
 * @property counter (optional)
 * @property payload (optional)
 * @property classes (optional)
 * @property _meta (optional)
 */
export interface IFacetFilter {
    /**
     * icon to render the checkmark
     */
    icon?: string;
    /**
     * the filter's rendered text
     */
    text: string;
    /**
     * the number of items for each filter
     */
    counter?: number;
    /**
     * payload for onClick events
     */
    payload?: any;
    /**
     * additional html classes
     */
    classes?: any;
    /**
     * additional data useful for the component's logic
     */
    _meta?: any;
}
export declare class FacetComponent {
    data: IFacetData;
    emit: any;
    onClick(payload: any): void;
    onCheck(payload: any, event: any): void;
    onInputChange(payload: any, event: any): void;
    onInputEnter(payload: any, value: any): void;
}
