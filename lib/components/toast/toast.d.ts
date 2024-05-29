import * as i0 from "@angular/core";
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
     * Icon to display inside the toast
     */
    icon?: string;
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
 * Interface for ToastComponent's "data"
 *
 * @property toasts (required)
 * @property classes (optional)
 */
export interface ToastData {
    toasts: ToastBox[];
    classes?: string;
}
export declare class ToastComponent {
    data: ToastData;
    emit: any;
    onClick(payload: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToastComponent, "n7-toast", never, { "data": { "alias": "data"; "required": false; }; "emit": { "alias": "emit"; "required": false; }; }, {}, never, never, false, never>;
}
