import { Anchor, Icon } from '../../shared-interfaces';
import * as i0 from "@angular/core";
/**
 * Interface for a single navbar item
 *
 * @property text (required)
 * @property classes (optional)
 * @property link (optional)
 * @property _meta (optional)
 */
export interface NavItem {
    /**
     * text of a single item of the navbar (text and payload are connected)
     */
    text: string;
    /**
     * image url for contextual icon/thumbnail
     */
    image?: string;
    /**
     * icon name/class from icon font
     */
    icon?: Icon;
    /**
     * A secondary icon
     */
    iconSecondary?: Icon;
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
/**
 * Interface for the navbar
 *
 * @property items (required)
 * @property classes (optional)
 * @property payload (optional)
 * @property _meta (optional)
 */
export interface NavData {
    /**
     * list of the items in the navbar
     */
    items: NavItem[];
    /**
     * additional html classes
     */
    classes?: string;
    /**
     * action click's payload
     */
    payload?: any;
    /**
     * additional info
     */
    _meta?: any;
}
export declare class NavComponent {
    data: NavData;
    emit: any;
    onClick(payload: any): void;
    onMouseEnter(payload: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NavComponent, "n7-nav", never, { "data": { "alias": "data"; "required": false; }; "emit": { "alias": "emit"; "required": false; }; }, {}, never, never, false, never>;
}
