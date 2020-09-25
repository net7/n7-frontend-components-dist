/**
* Interface for a single WizardComponent's "item"
*
* @property text (optional)
* @property number (optional)
* @property classes (optional)
* @property payload (required)
* @property _meta (optional)
*
*/
import * as ɵngcc0 from '@angular/core';
export interface WizardItem {
    /**
    *  text rendered on the step
    */
    text?: string;
    /**
    * number rendered on the step
    */
    number?: number;
    /**
    * action click's payload
    */
    payload: any;
    /**
    * additional html classes
    */
    classes?: any;
    /**
    * additional info useful for the component's logic
    */
    _meta?: any;
}
/**
* Interface for WizardComponent's "data"
*
* @property items (required)
* @property classes (optional)
*
*/
export interface WizardData {
    /**
    * each item represents a step
    */
    items: WizardItem[];
    /**
    * additional html classes
    */
    classes?: any;
}
export declare class WizardComponent {
    data: WizardData;
    emit: any;
    onClick(payload: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<WizardComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<WizardComponent, "n7-wizard", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLmQudHMiLCJzb3VyY2VzIjpbIndpemFyZC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4qIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgV2l6YXJkQ29tcG9uZW50J3MgXCJpdGVtXCJcclxuKlxyXG4qIEBwcm9wZXJ0eSB0ZXh0IChvcHRpb25hbClcclxuKiBAcHJvcGVydHkgbnVtYmVyIChvcHRpb25hbClcclxuKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiogQHByb3BlcnR5IHBheWxvYWQgKHJlcXVpcmVkKVxyXG4qIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbipcclxuKi9cclxuZXhwb3J0IGludGVyZmFjZSBXaXphcmRJdGVtIHtcclxuICAgIC8qKlxyXG4gICAgKiAgdGV4dCByZW5kZXJlZCBvbiB0aGUgc3RlcFxyXG4gICAgKi9cclxuICAgIHRleHQ/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICogbnVtYmVyIHJlbmRlcmVkIG9uIHRoZSBzdGVwXHJcbiAgICAqL1xyXG4gICAgbnVtYmVyPzogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcclxuICAgICovXHJcbiAgICBwYXlsb2FkOiBhbnk7XHJcbiAgICAvKipcclxuICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgICovXHJcbiAgICBjbGFzc2VzPzogYW55O1xyXG4gICAgLyoqXHJcbiAgICAqIGFkZGl0aW9uYWwgaW5mbyB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xyXG4gICAgKi9cclxuICAgIF9tZXRhPzogYW55O1xyXG59XHJcbi8qKlxyXG4qIEludGVyZmFjZSBmb3IgV2l6YXJkQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuKlxyXG4qIEBwcm9wZXJ0eSBpdGVtcyAocmVxdWlyZWQpXHJcbiogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4qXHJcbiovXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2l6YXJkRGF0YSB7XHJcbiAgICAvKipcclxuICAgICogZWFjaCBpdGVtIHJlcHJlc2VudHMgYSBzdGVwXHJcbiAgICAqL1xyXG4gICAgaXRlbXM6IFdpemFyZEl0ZW1bXTtcclxuICAgIC8qKlxyXG4gICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAgKi9cclxuICAgIGNsYXNzZXM/OiBhbnk7XHJcbn1cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgV2l6YXJkQ29tcG9uZW50IHtcclxuICAgIGRhdGE6IFdpemFyZERhdGE7XHJcbiAgICBlbWl0OiBhbnk7XHJcbiAgICBvbkNsaWNrKHBheWxvYWQ6IGFueSk6IHZvaWQ7XHJcbn1cclxuIl19