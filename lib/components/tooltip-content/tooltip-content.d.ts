import { Button } from '../../shared-interfaces';
import * as i0 from "@angular/core";
/**
 * Interface for TooltipContentComponent's "data"
 *
 * @property NAME (required|options) <--- TODO: update with interface properties
 */
export interface TooltipContentData {
    /** Title of the tooltip */
    title?: string;
    /** Subtitle or text */
    text?: string;
    /** Image for the tooltip */
    image?: string;
    /** Action or list of actions */
    actions?: Button[];
}
export declare class TooltipContentComponent {
    data: TooltipContentData;
    emit: any;
    onClick(payload: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipContentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipContentComponent, "n7-tooltip-content", never, { "data": "data"; "emit": "emit"; }, {}, never, never, false>;
}
