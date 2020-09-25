import { Button } from '../../shared-interfaces';
/**
 * Interface for TooltipContentComponent's "data"
 *
 * @property NAME (required|options) <--- TODO: update with interface properties
 */
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TooltipContentComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TooltipContentComponent, "n7-tooltip-content", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1jb250ZW50LmQudHMiLCJzb3VyY2VzIjpbInRvb2x0aXAtY29udGVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgVG9vbHRpcENvbnRlbnRDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgTkFNRSAocmVxdWlyZWR8b3B0aW9ucykgPC0tLSBUT0RPOiB1cGRhdGUgd2l0aCBpbnRlcmZhY2UgcHJvcGVydGllc1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBUb29sdGlwQ29udGVudERhdGEge1xyXG4gICAgLyoqIFRpdGxlIG9mIHRoZSB0b29sdGlwICovXHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIC8qKiBTdWJ0aXRsZSBvciB0ZXh0ICovXHJcbiAgICB0ZXh0Pzogc3RyaW5nO1xyXG4gICAgLyoqIEltYWdlIGZvciB0aGUgdG9vbHRpcCAqL1xyXG4gICAgaW1hZ2U/OiBzdHJpbmc7XHJcbiAgICAvKiogQWN0aW9uIG9yIGxpc3Qgb2YgYWN0aW9ucyAqL1xyXG4gICAgYWN0aW9ucz86IEJ1dHRvbltdO1xyXG59XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFRvb2x0aXBDb250ZW50Q29tcG9uZW50IHtcclxuICAgIGRhdGE6IFRvb2x0aXBDb250ZW50RGF0YTtcclxuICAgIGVtaXQ6IGFueTtcclxuICAgIG9uQ2xpY2socGF5bG9hZDogYW55KTogdm9pZDtcclxufVxyXG4iXX0=