import { IAnchor } from '../../shared-interfaces';
/**
 * Interface for PaginationComponent's options (page size select options)
 *
 * @property text (required)
 * @property classes (optional)
 * @property _meta (optional)
 */
export interface IOption {
    /**
     * option text value
     */
    text: string;
    /**
     * additional html classes
     */
    classes?: string;
    /**
     * additional info
     */
    _meta?: any;
    /**
     * render as disabled
     */
    disabled?: boolean;
    /**
     * force selection
     */
    selected?: boolean;
}
/**
 * Interface for PaginationComponent's links (pages and navigation buttons)
 *
 * @property text (required)
 * @property anchor (optional)
 * @property classes (optional)
 * @property _meta (optional)
 */
export interface IButton {
    /**
     * innerHTML or plain text for the label
     */
    text?: string;
    /**
     * additional html classes
     */
    classes?: string;
    anchor?: IAnchor;
    /**
     * additional info
     */
    _meta?: any;
}
/**
 * Interface for PaginationComponent's "data"
 *
 * @property links (required)
 * @property first (optional)
 * @property prev (optional)
 * @property next (optional)
 * @property last (optional)
 * @property classes (optional)
 * @property payload (optional)
 * @property _meta (optional)
 */
export interface IPaginationData {
    /**
     * innerHtml for the "first" label
     */
    first?: IButton;
    /**
     * innerHtml for the "prev" label
     */
    prev?: IButton;
    /**
     * innerHtml for the "next" label
     */
    next?: IButton;
    /**
     * innerHtml for the "last" label
     */
    last?: IButton;
    /**
     * array of "pages" label (as text)
     */
    links: IButton[];
    /**
     * page size select
     */
    select?: {
        label?: string;
        options?: IOption[];
        payload?: string;
        disabled?: boolean;
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
export declare class PaginationComponent {
    data: IPaginationData;
    emit: any;
    onClick(payload: any): void;
    onChange(payload: any, value: any): void;
}
