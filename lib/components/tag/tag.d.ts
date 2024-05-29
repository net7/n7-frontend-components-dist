import { Icon } from '../../shared-interfaces';
import * as i0 from "@angular/core";
/**
 * Interface for TagComponent's "data"
 *
 * @property text (required)
 * @property label (optional)
 * @property icon (optional)
 * @property classes (optional)
 * @property payload (optional)
 * @property _meta (optional)
 *
 */
export interface TagData {
    /**
     * tag's label
     */
    label?: string;
    /**
     * text visualized on the tag
     */
    text: string;
    /**
     * action icon (on right side)
     */
    icon?: Icon | string;
    /**
     * action icon (on right side)
     */
    preIcon?: Icon;
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
export declare class TagComponent {
    data: TagData;
    emit: any;
    onClick(payload: any): void;
    getIcon(data: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<TagComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TagComponent, "n7-tag", never, { "data": "data"; "emit": "emit"; }, {}, never, never, false>;
}
