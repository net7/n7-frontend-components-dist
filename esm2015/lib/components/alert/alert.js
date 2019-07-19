/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// ALERT.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for TagComponent's "data"
 *
 * \@property body (required)
 * \@property icon (optional)
 * \@property classes (optional)
 * \@property payload (optional)
 * \@property _meta (optional)
 * \@property hasCloseButton (optional)
 *
 * @record
 */
export function IAlertData() { }
if (false) {
    /**
     * the alert's body/message which can include html tags
     * @type {?}
     */
    IAlertData.prototype.text;
    /**
     * alert icon (on left side)
     * @type {?|undefined}
     */
    IAlertData.prototype.icon;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    IAlertData.prototype.classes;
    /**
     * action click's payload
     * @type {?|undefined}
     */
    IAlertData.prototype.payload;
    /**
     * additional info
     * @type {?|undefined}
     */
    IAlertData.prototype._meta;
    /**
     * indicates whether the alert includes a close button (on top-right corner)
     * or not (if not provided assumed as false)
     * @type {?|undefined}
     */
    IAlertData.prototype.hasCloseButton;
}
/**
 * AlertComponent <n7-alert>
 *
 * \@example
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
export class AlertComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
}
AlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-alert',
                template: "<div class=\"n7-alert {{data.classes || ''}} {{ data.icon ? 'has-icon' : '' }}\" *ngIf=\"data\" >\n    <span class=\"n7-alert__icon {{data.icon}}\" *ngIf=\"data.icon\"></span>\n    <div class=\"n7-alert__text\" [innerHTML]=\"data.text\">\n    </div>\n    <span class=\"n7-alert__close-button n7-icon-close\" *ngIf=\"data.hasCloseButton\" (click)=\"onClick(data.payload)\"></span>\n</div>"
            }] }
];
AlertComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AlertComponent.prototype.data;
    /** @type {?} */
    AlertComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWFqRCxnQ0EwQkM7Ozs7OztJQXRCQywwQkFBYTs7Ozs7SUFJYiwwQkFBYzs7Ozs7SUFJZCw2QkFBaUI7Ozs7O0lBSWpCLDZCQUFjOzs7OztJQUlkLDJCQUFZOzs7Ozs7SUFLWixvQ0FBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0IzQixNQUFNLE9BQU8sY0FBYzs7Ozs7SUFJekIsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQVpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsK1lBQTJCO2FBQzVCOzs7bUJBRUUsS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sOEJBQTBCOztJQUMxQiw4QkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQUxFUlQudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuIC8qKlxuICogSW50ZXJmYWNlIGZvciBUYWdDb21wb25lbnQncyBcImRhdGFcIlxuICogXG4gKiBAcHJvcGVydHkgYm9keSAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGhhc0Nsb3NlQnV0dG9uIChvcHRpb25hbClcbiAqIFxuICovXG5leHBvcnQgaW50ZXJmYWNlIElBbGVydERhdGEge1xuICAvKipcbiAgICogdGhlIGFsZXJ0J3MgYm9keS9tZXNzYWdlIHdoaWNoIGNhbiBpbmNsdWRlIGh0bWwgdGFnc1xuICAqL1xuICB0ZXh0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhbGVydCBpY29uIChvbiBsZWZ0IHNpZGUpXG4gICAqL1xuICBpY29uPzogc3RyaW5nO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAqL1xuICBwYXlsb2FkPzogYW55O1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvXG4gICAqL1xuICBfbWV0YT86IGFueTtcbiAgLyoqXG4gICAqIGluZGljYXRlcyB3aGV0aGVyIHRoZSBhbGVydCBpbmNsdWRlcyBhIGNsb3NlIGJ1dHRvbiAob24gdG9wLXJpZ2h0IGNvcm5lcilcbiAgICogb3Igbm90IChpZiBub3QgcHJvdmlkZWQgYXNzdW1lZCBhcyBmYWxzZSlcbiAgICovXG4gIGhhc0Nsb3NlQnV0dG9uPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBBbGVydENvbXBvbmVudCA8bjctYWxlcnQ+XG4gKiBcbiAqIEBleGFtcGxlXG4gKiBgYGBodG1sXG4gKiA8bjctYWxlcnQgW2RhdGFdPVwie1xuICogICAgICAgIHRleHQ6ICdUaGlzIGlzIGFuIGFsZXJ0IGZvciB0aGUgdXNlciB3aXRoIHNvbWUgPHN0cm9uZz5ib2xkPC9zdHJvbmc+IGFuZCA8aT5pdGFsaWM8L2k+IHRleHQuJyxcbiAqICAgICAgICBoYXNDbG9zZUJ1dHRvbjogdHJ1ZSxcbiAqICAgICAgICBpY29uOiBcIm43LWljb24tYmVsbFwiLFxuICogICAgICAgIHBheWxvYWQ6IFwiY2xvc2UtdGhlLWFsZXJ0IHJlcXVlc3RcIixcbiAqICAgICAgICBjbGFzc2VzOiBcImlzLXdhcm5pbmdcIlxuICogICAgfVwiPlxuICogPC9uNy1hbGVydD5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1hbGVydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBbGVydENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElBbGVydERhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNsaWNrKHBheWxvYWQpe1xuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxuICBcbn0iXX0=