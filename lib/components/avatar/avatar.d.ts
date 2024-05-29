import { Image } from '../../shared-interfaces';
import * as i0 from "@angular/core";
/**
 * --- REQUIREMENTS ---
 * + Can have a background image
 * + Can have a background color
 * + Can have an internal label
 *
 * + click event
 * + hover event
 */
/**
 * Interface for Avatar's "Data"
 *
 * @property items (required)
 * @property classes (optional)
 *
 */
export interface AvatarData {
    /**
     * user image
     */
    image?: Image;
    /**
     * background color (missing image)
     */
    color?: string;
    /**
     * Font color for the internal label (missing image)
     */
    labelColor?: string;
    /**
     * Internal label (missing image)
     */
    label?: string;
    /**
     * avatar width & height
     */
    size: string | number;
    /**
     * additional html classes
     */
    classes?: string;
    /**
     * data for events
     */
    payload?: any;
}
export declare class AvatarComponent {
    data: AvatarData;
    emit: any;
    onClick(payload: any): void;
    onMouseEnter(payload: any): void;
    onMouseLeave(payload: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AvatarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AvatarComponent, "n7-avatar", never, { "data": "data"; "emit": "emit"; }, {}, never, never, false>;
}
