import { Anchor } from '../../shared-interfaces';
import * as i0 from "@angular/core";
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
export interface FooterLink {
    /**
     * image url
     */
    text: string;
    /**
     * additional html classes
     */
    classes?: any;
    anchor: Anchor;
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
export interface FooterImage {
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
    anchor: Anchor;
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
export interface FooterColumn {
    /**
     * column's title
     */
    title?: string;
    /**
     * column's images
     */
    images?: FooterImage[];
    /**
     * column's text
     */
    text?: string;
    /**
     * column's nav
     */
    links?: FooterLink[];
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
export interface FooterData {
    /**
     * each item renders a column of the footer
     */
    columns: FooterColumn[];
    /**
     * additional html classes
     */
    classes?: any;
}
export declare class FooterComponent {
    data: FooterData;
    emit: any;
    onClick(payload: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FooterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FooterComponent, "n7-footer", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}
