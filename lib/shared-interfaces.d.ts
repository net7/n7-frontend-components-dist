export interface EssentialData {
    /**
     * main set of classes of the component
     */
    classes?: string;
}
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
export interface Button extends EssentialData {
    /** innerHTML or plain text for the label */
    text?: string;
    anchor?: Anchor;
}
/**
 * Type for an icon.
 * It may have a simple string type or an object type.
 */
export type Icon = {
    /** Identifier of the icon in n7-icon-font */
    id: string;
    /** Custom inline css */
    style?: object;
    /** Event payload */
    payload?: any;
};
/**
 * Type for an image / svg element.
 */
export type Image = {
    /** File path */
    src: string;
    /** Alt text */
    alt?: string;
    /** Optional classes */
    classes?: string;
};
export type OnOff = 'on' | 'off';
