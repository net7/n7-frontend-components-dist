/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/alert/alert.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    AlertComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    AlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-alert',
                    template: "<div class=\"n7-alert {{data.classes || ''}} {{ data.icon ? 'has-icon' : '' }}\" *ngIf=\"data\" >\r\n    <span class=\"n7-alert__icon {{data.icon}}\" *ngIf=\"data.icon\"></span>\r\n    <div class=\"n7-alert__text\" [innerHTML]=\"data.text\">\r\n    </div>\r\n    <span class=\"n7-alert__close-button n7-icon-close\" \r\n          *ngIf=\"data.hasCloseButton\" \r\n          (click)=\"onClick(data.payload)\"></span>\r\n</div>"
                }] }
    ];
    AlertComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return AlertComponent;
}());
export { AlertComponent };
if (false) {
    /** @type {?} */
    AlertComponent.prototype.data;
    /** @type {?} */
    AlertComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhakQsZ0NBMEJDOzs7Ozs7SUF0QkMsMEJBQWE7Ozs7O0lBSWIsMEJBQWM7Ozs7O0lBSWQsNkJBQWlCOzs7OztJQUlqQiw2QkFBYzs7Ozs7SUFJZCwyQkFBWTs7Ozs7O0lBS1osb0NBQXlCOztBQUczQjtJQUFBO0lBY0EsQ0FBQzs7Ozs7SUFOQyxnQ0FBTzs7OztJQUFQLFVBQVEsT0FBTztRQUNiLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixxYkFBMkI7aUJBQzVCOzs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLOztJQVFSLHFCQUFDO0NBQUEsQUFkRCxJQWNDO1NBVlksY0FBYzs7O0lBQ3pCLDhCQUEwQjs7SUFDMUIsOEJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQUxFUlQudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbiAvKipcclxuICogSW50ZXJmYWNlIGZvciBUYWdDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKiBcclxuICogQHByb3BlcnR5IGJvZHkgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaGFzQ2xvc2VCdXR0b24gKG9wdGlvbmFsKVxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFsZXJ0RGF0YSB7XHJcbiAgLyoqXHJcbiAgICogdGhlIGFsZXJ0J3MgYm9keS9tZXNzYWdlIHdoaWNoIGNhbiBpbmNsdWRlIGh0bWwgdGFnc1xyXG4gICovXHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFsZXJ0IGljb24gKG9uIGxlZnQgc2lkZSlcclxuICAgKi9cclxuICBpY29uPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXHJcbiAgICovXHJcbiAgcGF5bG9hZD86IGFueTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxuICAvKipcclxuICAgKiBpbmRpY2F0ZXMgd2hldGhlciB0aGUgYWxlcnQgaW5jbHVkZXMgYSBjbG9zZSBidXR0b24gKG9uIHRvcC1yaWdodCBjb3JuZXIpXHJcbiAgICogb3Igbm90IChpZiBub3QgcHJvdmlkZWQgYXNzdW1lZCBhcyBmYWxzZSlcclxuICAgKi9cclxuICBoYXNDbG9zZUJ1dHRvbj86IGJvb2xlYW47XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctYWxlcnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnRDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IElBbGVydERhdGE7XHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBvbkNsaWNrKHBheWxvYWQpe1xyXG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcbiAgXHJcbn0iXX0=