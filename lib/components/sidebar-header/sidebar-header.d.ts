/**
 * Interface for SidebarHeaderComponent's "data"
 *
 * @property iconLeft (optional)
 * @property text (optional)
 * @property additionalText (optional)
 * @property iconRight (optional)
 * @property classes (optional)
 * @property payload (optional)
 */
export interface ISidebarHeaderData {
    /**
     * the headers leftmost icon
     */
    iconLeft?: string;
    /**
     * the title text
     */
    text?: string;
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
export declare class SidebarHeaderComponent {
    data: ISidebarHeaderData;
    emit: any;
    onClick(payload: any): void;
}
