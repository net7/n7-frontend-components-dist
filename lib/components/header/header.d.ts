import { InputSelectData } from '../input-select/input-select';
import { Anchor } from '../../shared-interfaces';
import { AvatarData } from '../avatar/avatar';
import * as i0 from "@angular/core";
export interface UserData extends AvatarData {
    /**
     * user's profile name
     */
    name?: string;
    /**
     * external url
     */
    anchor?: Anchor;
    /**
     * additional info
     */
    _meta?: any;
}
/**
 * Interface for a single button
 *
 * @property text (required)
 * @property anchor (required)
 * @property icon (optional)
 * @property classes (optional)
 * @property _meta (optional)
 */
export interface ButtonItem {
    /**
     * text
     */
    text: string;
    /**
     * anchor
     */
    anchor: Anchor;
    /**
     * icon class
     */
    icon?: string;
    /**
     * additional html classes
     */
    classes?: string;
    /**
     * additional info
     */
    _meta?: any;
}
/**
 * Interface for a single action item
 *
 * @property icon (required)
 * @property badge (optional)
 * - text (optional)
 * @property classes (optional)
 * @property anchor (required)
 * @property _meta (optional)
 */
export interface ActionItem {
    /**
     * optional badge with, optionally, its text
     */
    badge?: {
        text?: string;
    };
    /**
     * icon class
     */
    icon: string;
    anchor: Anchor;
    /**
     * additional html classes
     */
    classes?: string;
    /**
     * additional info
     */
    _meta?: any;
}
/**
 * Interface for a single navbar item
 *
 * note: a single nav's item can be a text (w/ anchor) OR a dropdown
 *
 * @property icon (optional)
 * @property subnav (optional)
 * @property text (optional)
 * @property classes (optional)
 * @property anchor (required)
 * @property _meta (optional)
 */
export interface NavbarItem {
    /**
     * text of a single item of the navbar (text and payload are connected)
     */
    text?: string;
    /**
     * icon for a single item of the navbar (associated to "text")
     */
    icon?: string;
    /**
     * second level navigation
     */
    subnav?: NavbarItem[];
    anchor: Anchor;
    /**
     * additional html classes
     */
    classes?: string;
    /**
     * additional info
     */
    _meta?: any;
}
/**
 * Interface for HeaderComponent's "data"
 *
 * @property logo (required)
 * - title (required)
 * - image (optional)
 * - subtitle (optional)
 * - classes (optional)
 * - payload (optional)
 * - anchor (optional)
 * @proprty menuToggle (required)
 * - open (required)
 * - - payload (required)
 * - closen (required)
 * - - payload (required)
 * @property actions (optional)
 * @property nav (optional)
 * - items (required)
 * - isBelow (optional)
 * - classes (optional)
 * - payload (optional)
 * - anchor (optional)
 * - _meta (optional)
 * @property search (optional)
 * - hint (optional)
 * - classes (optional)
 * - payload (optional)
 * - _meta (optional)
 * @property user (optional)
 * - image (optional)
 * - name (optional)
 * - classes (optional)
 * - payload (optional)
 * - anchor (optional)
 * - _meta (optional)
 * @property classes (optional)
 * @property payload (optional)
 * @property _meta (optional)
 */
export interface HeaderData {
    /**
     * logo and title area parameters
     */
    logo: {
        image?: string;
        title: string;
        subtitle?: string;
        classes?: string;
        payload?: any;
        anchor: Anchor;
    };
    /**
     * nav's parameters
     */
    nav?: {
        /**
         * list of the items in the navbar
         */
        items: NavbarItem[];
        /**
         * flag for display the navbar under the header (instead of IN the header)
         */
        isBelow?: boolean;
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
    };
    /**
     * search parameters
     */
    search?: {
        /**
         * hint (text showed in the input box until something is writed in there)
         */
        hint?: string;
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
    };
    /**
     * action items
     */
    actions?: ActionItem[];
    /**
     * buttons items
     */
    buttons?: ButtonItem[];
    /**
     * Select elements with some options
     * useful for the header's language selector
     */
    selects?: InputSelectData[];
    /**
     * user parameters
     */
    user?: UserData;
    /**
     * menu toggle for mobile
     */
    menuToggle: {
        open: {
            payload: any;
        };
        close: {
            payload: any;
        };
    };
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
/**
 * HeaderComponent <n7-header>
 *
 * @structure
 *  >>  cpm = it has Classes, Payload, Metadata  <<
 *  >>  -p- = it has only Payload                <<
 *  >>  +-- = sub-member                         <<
 *  >>  +---> = array                            <<
 *
 *  data (cpm)
 *    +-- actions
 *          +---> action (cpm)
 *                  +-- badge
 *    +-- logo (cp-)
 *    +-- menuToggle
 *          +-- open (-p-)
 *          +-- close (-p-)
 *    +-- nav (cpm)
 *          +---> items
 *    +-- search (cpm)
 *    +-- user (cpm)
 *
 */
export declare class HeaderComponent {
    data: any;
    emit: any;
    onClick(payload: any): void;
    onKeyUp(payload: any, keyCode: any, value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HeaderComponent, "n7-header", never, { "data": "data"; "emit": "emit"; }, {}, never, never, false>;
}
