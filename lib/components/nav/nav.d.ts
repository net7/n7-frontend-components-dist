import { Anchor } from '../../shared-interfaces';
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
    icon?: string;
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
}
