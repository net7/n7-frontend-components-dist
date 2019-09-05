/**
 * Interface for ToastComponent's "data"
 *
 * @property toasts (required)
 * @property classes (optional)
 */
export interface IToastData {
    toasts: IToastBox[];
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
export interface IToastBox {
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
    actions?: IToastAction[];
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
export interface IToastAction {
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
    data: IToastData;
    emit: any;
    onClick(payload: any): void;
}
