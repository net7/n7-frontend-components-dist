/**
 * Interface for ToastComponent's "data"
 *
 * @property toasts (required)
 * @property classes (optional)
 */
import * as ɵngcc0 from '@angular/core';
export interface ToastData {
    toasts: ToastBox[];
    classes?: string;
}
/**
 * Interface for the single ToastComponent's "Box"
 *
 * @property classes (required)
 * @property timer (optional)
 * @property closeIcon (optional)
 * - icon (required)
 * - payload (required)
 * @property title (optional)
 * @property text (optional)
 * @property actions (optional)
 */
export interface ToastBox {
    /**
     * requires: [is-success, is-warning, is-error] + optional additional html classes
     */
    classes: string;
    /**
     * larger, title text
     */
    title?: string;
    /**
     * the toast's body text
     */
    text?: string;
    /**
     * 'X' icon, to dismiss/close the toast
     * ( n7-icon-cross )
     *
     *  Each icon requires it's onClick payload
     */
    closeIcon?: {
        icon: string;
        payload: string;
    };
    /**
     * the toast's optional buttons
     * suggestion: don't use more than 2 actions
     */
    actions?: ToastAction[];
    /**
     * additional info
     */
    _meta?: any;
}
/**
 * Interface for the single ToastComponent's "Action"
 *
 * @property text (required)
 * @property payload (required)
 * @property classes (optional)
 */
export interface ToastAction {
    /**
     * the button's rendered text
     */
    text: string;
    /**
     * the button's onClick payload
     */
    payload: any;
    /**
     * additional html classes
     */
    classes?: string;
}
export declare class ToastComponent {
    data: ToastData;
    emit: any;
    onClick(payload: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ToastComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ToastComponent, "n7-toast", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuZC50cyIsInNvdXJjZXMiOlsidG9hc3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogSW50ZXJmYWNlIGZvciBUb2FzdENvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB0b2FzdHMgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0RGF0YSB7XHJcbiAgICB0b2FzdHM6IFRvYXN0Qm94W107XHJcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIHRoZSBzaW5nbGUgVG9hc3RDb21wb25lbnQncyBcIkJveFwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHRpbWVyIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsb3NlSWNvbiAob3B0aW9uYWwpXHJcbiAqIC0gaWNvbiAocmVxdWlyZWQpXHJcbiAqIC0gcGF5bG9hZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSB0aXRsZSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGFjdGlvbnMgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBUb2FzdEJveCB7XHJcbiAgICAvKipcclxuICAgICAqIHJlcXVpcmVzOiBbaXMtc3VjY2VzcywgaXMtd2FybmluZywgaXMtZXJyb3JdICsgb3B0aW9uYWwgYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgICAqL1xyXG4gICAgY2xhc3Nlczogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBsYXJnZXIsIHRpdGxlIHRleHRcclxuICAgICAqL1xyXG4gICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIHRoZSB0b2FzdCdzIGJvZHkgdGV4dFxyXG4gICAgICovXHJcbiAgICB0ZXh0Pzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiAnWCcgaWNvbiwgdG8gZGlzbWlzcy9jbG9zZSB0aGUgdG9hc3RcclxuICAgICAqICggbjctaWNvbi1jcm9zcyApXHJcbiAgICAgKlxyXG4gICAgICogIEVhY2ggaWNvbiByZXF1aXJlcyBpdCdzIG9uQ2xpY2sgcGF5bG9hZFxyXG4gICAgICovXHJcbiAgICBjbG9zZUljb24/OiB7XHJcbiAgICAgICAgaWNvbjogc3RyaW5nO1xyXG4gICAgICAgIHBheWxvYWQ6IHN0cmluZztcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIHRoZSB0b2FzdCdzIG9wdGlvbmFsIGJ1dHRvbnNcclxuICAgICAqIHN1Z2dlc3Rpb246IGRvbid0IHVzZSBtb3JlIHRoYW4gMiBhY3Rpb25zXHJcbiAgICAgKi9cclxuICAgIGFjdGlvbnM/OiBUb2FzdEFjdGlvbltdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgICAqL1xyXG4gICAgX21ldGE/OiBhbnk7XHJcbn1cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgdGhlIHNpbmdsZSBUb2FzdENvbXBvbmVudCdzIFwiQWN0aW9uXCJcclxuICpcclxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVG9hc3RBY3Rpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiB0aGUgYnV0dG9uJ3MgcmVuZGVyZWQgdGV4dFxyXG4gICAgICovXHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIHRoZSBidXR0b24ncyBvbkNsaWNrIHBheWxvYWRcclxuICAgICAqL1xyXG4gICAgcGF5bG9hZDogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAgICovXHJcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFRvYXN0Q29tcG9uZW50IHtcclxuICAgIGRhdGE6IFRvYXN0RGF0YTtcclxuICAgIGVtaXQ6IGFueTtcclxuICAgIG9uQ2xpY2socGF5bG9hZDogYW55KTogdm9pZDtcclxufVxyXG4iXX0=