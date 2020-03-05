/**
 * Interface for FacetHeaderComponent's "data"
 *
 * @property iconLeft (optional)
 * @property text (required)
 * @property additionalText (optional)
 * @property iconRight (optional)
 * @property classes (optional)
 * @property payload (optional)
 */
export interface FacetHeaderData {
    /**
     * the headers leftmost icon
     */
    iconLeft?: string;
    /**
     * the title text
     */
    text: string;
    /**
     * additional text, displayed on the right of the text
     */
    additionalText?: string;
    /**
     * the headers rightmost icon
     */
    iconRight?: string;
    /**
     * additional html classes
     */
    classes?: any;
    /**
     * payload for onClick events
     */
    payload?: any;
}
export declare class FacetHeaderComponent {
    data: FacetHeaderData;
    emit: any;
    onClick(payload: any): void;
}
