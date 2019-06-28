/**
 * Interface for a single navbar item
 *
 * @property text (required)
 * @property classes (optional)
 * @property payload (required)
 * @property _meta (optional)
 */
export interface INavItem {
    /**
     * text of a single item of the navbar (text and payload are connected)
     */
    text: string;
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
 * Interface for the navbar
 *
 * @property items (required)
 * @property classes (optional)
 * @property payload (optional)
 * @property _meta (optional)
 */
export interface INavData {
    /**
     * list of the items in the navbar
     */
    items: INavItem[];
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
    data: INavData;
    emit: any;
    onClick(payload: any): void;
}
