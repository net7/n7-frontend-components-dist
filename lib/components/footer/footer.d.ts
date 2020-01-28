import { IAnchor } from '../../shared-interfaces';
/**
 * Interface for each link in footer menus
 *
 * @property text (required)
 * @property classes (optional)
 * @property anchor (mandatory)
 * @property _meta (optional)
 * @property _meta (optional)
 *
 */
export interface IFooterLink {
    /**
     * image url
     */
    text: string;
    /**
     * additional html classes
     */
    classes?: any;
    anchor: IAnchor;
    /**
     * additional info useful for the component's logic
     */
    _meta?: any;
}
/**
 * Interface for each image in the footer (usually logos)
 *
 * @property url (required)
 * @property alttext (optional)
 * @property classes (optional)
 * @property anchor (required)
 * @property _meta (optional)
 * @property _meta (optional)
 *
 */
export interface IFooterImage {
    /**
     * image url
     */
    url: string;
    /**
     * image alt text
     */
    alttext?: string;
    /**
     * additional html classes
     */
    classes?: any;
    anchor: IAnchor;
    /**
     * additional info useful for the component's logic
     */
    _meta?: any;
}
/**
 * Interface for a single Footer column that can display title, images, text and a nav list
 *
 * @property title (optional)
 * @property images (optional)
 * @property text (optional)
 * @property links (optional)
 * @property classes (optional)
 * @property _meta (optional)
 *
 */
export interface IFooterColumn {
    /**
     * column's title
     */
    title?: string;
    /**
     * column's images
     */
    images?: IFooterImage[];
    /**
     * column's text
     */
    text?: string;
    /**
     * column's nav
     */
    links?: IFooterLink[];
    /**
     * additional html classes
     */
    classes?: any;
    /**
     * additional info useful for the component's logic
     */
    _meta?: any;
}
/**
 * Interface for FooterComponents's "Data"
 *
 * @property columns (required)
 * @property classes (optional)
 *
 */
export interface IFooterData {
    /**
     * each item renders a column of the footer
     */
    columns: IFooterColumn[];
    /**
     * additional html classes
     */
    classes?: any;
}
export declare class FooterComponent {
    data: IFooterData;
    emit: any;
    onClick(payload: any): void;
}
