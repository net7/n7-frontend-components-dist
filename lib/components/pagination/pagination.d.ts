import { Button } from '../../shared-interfaces';
import * as i0 from "@angular/core";
/**
 * Interface for PaginationComponent's options (page size select options)
 *
 * @property text (required)
 * @property classes (optional)
 * @property _meta (optional)
 */
export interface Option {
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
export interface PaginationData {
    /**
     * innerHtml for the "first" label
     */
    first?: Button;
    /**
     * innerHtml for the "prev" label
     */
    prev?: Button;
    /**
     * innerHtml for the "next" label
     */
    next?: Button;
    /**
     * innerHtml for the "last" label
     */
    last?: Button;
    /**
     * array of "pages" label (as text)
     */
    links: Button[];
    /**
     * page size select
     */
    select?: {
        label?: string;
        options?: Option[];
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
    data: PaginationData;
    emit: any;
    onClick(payload: any): void;
    onChange(payload: any, value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginationComponent, "n7-pagination", never, { "data": "data"; "emit": "emit"; }, {}, never, never, false>;
}
