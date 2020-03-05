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
