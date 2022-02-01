import * as i0 from "@angular/core";
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
export interface SidebarHeaderData {
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
    data: SidebarHeaderData;
    emit: any;
    onClick(payload: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidebarHeaderComponent, "n7-sidebar-header", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}
