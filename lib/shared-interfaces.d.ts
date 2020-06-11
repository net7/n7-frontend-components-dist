/**
 * Interface for an anchor <a> element
 *
 * @property href (optional)
 * @property target (optional)
 * @property payload (optional)
 */
export interface Anchor {
    /**
     * href for link <a>
     */
    href?: string;
    /**
     * link <a> target attribute
     */
    target?: '_self' | '_blank' | '_parent' | '_top';
    /**
     * click payload
     */
    payload?: any;
    /**
     * Query parameters
     */
    queryParams?: any;
}
/**
 * Interface for a simple Button
 *
 * @property text (required)
 * @property anchor (optional)
 * @property classes (optional)
 * @property _meta (optional)
 */
export interface Button {
    /**
     * innerHTML or plain text for the label
     */
    text?: string;
    /**
     * additional html classes
     */
    classes?: string;
    anchor?: Anchor;
    /**
     * additional info
     */
    _meta?: any;
}
