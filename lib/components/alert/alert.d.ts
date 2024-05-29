import * as i0 from "@angular/core";
/**
 * Interface for TagComponent's "data"
 *
 * @property body (required)
 * @property icon (optional)
 * @property classes (optional)
 * @property payload (optional)
 * @property _meta (optional)
 * @property hasCloseButton (optional)
 *
 */
export interface AlertData {
    /**
     * the alert's body/message which can include html tags
     */
    text: string;
    /**
     * alert icon (on left side)
     */
    icon?: string;
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
    /**
     * indicates whether the alert includes a close button (on top-right corner)
     * or not (if not provided assumed as false)
     */
    hasCloseButton?: boolean;
}
export declare class AlertComponent {
    data: AlertData;
    emit: any;
    onClick(payload: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertComponent, "n7-alert", never, { "data": { "alias": "data"; "required": false; }; "emit": { "alias": "emit"; "required": false; }; }, {}, never, never, false, never>;
}
