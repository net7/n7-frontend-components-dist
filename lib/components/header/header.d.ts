/**
 * Interface for a single action item
 *
 * @property icon (required)
 * @property badge (optional)
 * - text (optional)
 * @property classes (optional)
 * @property payload (required)
 * @property _meta (optional)
 */
export interface IActionItem {
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
    /**
     * additional html classes
     */
    classes?: string;
    /**
     * action click's payload
     */
    payload: any;
    /**
     * additional info
     */
    _meta?: any;
}
/**
 * Interface for a single navbar item
 *
 * note: a single nav's item can be a text (w/ link) OR a dropdown
 *
 * @property icon (optional)
 * @property subnav (optional)
 * @property text (optional)
 * @property classes (optional)
 * @property payload (required)
 * @property _meta (optional)
 */
export interface INavbarItem {
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
    subnav?: INavbarItem[];
    /**
     * additional html classes
     */
    classes?: string;
    /**
     * action click's payload
     */
    payload: any;
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
 * - _meta (optional)
 * @property classes (optional)
 * @property payload (optional)
 * @property _meta (optional)
 */
export interface IHeaderData {
    /**
     * logo and title area parameters
     */
    logo: {
        image?: string;
        title: string;
        subtitle?: string;
        classes?: string;
        payload?: any;
    };
    /**
     * nav's parameters
     */
    nav?: {
        /**
         * list of the items in the navbar
         */
        items: INavbarItem[];
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
    actions?: IActionItem[];
    /**
     * user parameters
     */
    user?: {
        /**
         * user's profile picture
         */
        img?: string;
        /**
         * user's profile name
         */
        name?: string;
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
}
