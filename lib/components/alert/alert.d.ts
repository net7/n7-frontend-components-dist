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
export interface IAlertData {
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
/**
 * AlertComponent <n7-alert>
 *
 * @example
 * ```html
 * <n7-alert [data]="{
 *        text: 'This is an alert for the user with some <strong>bold</strong> and <i>italic</i> text.',
 *        hasCloseButton: true,
 *        icon: "n7-icon-bell",
 *        payload: "close-the-alert request",
 *        classes: "is-warning"
 *    }">
 * </n7-alert>
 * ```
 */
export declare class AlertComponent {
    data: IAlertData;
    emit: any;
    onClick(payload: any): void;
}
