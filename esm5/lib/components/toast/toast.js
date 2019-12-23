/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/toast/toast.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// TOAST.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for ToastComponent's "data"
 *
 * \@property toasts (required)
 * \@property classes (optional)
 * @record
 */
export function IToastData() { }
if (false) {
    /** @type {?} */
    IToastData.prototype.toasts;
    /** @type {?|undefined} */
    IToastData.prototype.classes;
}
/**
 * Interface for the single ToastComponent's "Box"
 *
 * \@property classes (required)
 * \@property timer (optional)
 * \@property closeIcon (optional)
 * - icon (required)
 * - payload (required)
 * \@property title (optional)
 * \@property text (optional)
 * \@property actions (optional)
 * @record
 */
export function IToastBox() { }
if (false) {
    /**
     * requires: [is-success, is-warning, is-error] + optional additional html classes
     * @type {?}
     */
    IToastBox.prototype.classes;
    /**
     * larger, title text
     * @type {?|undefined}
     */
    IToastBox.prototype.title;
    /**
     * the toast's body text
     * @type {?|undefined}
     */
    IToastBox.prototype.text;
    /**
     * 'X' icon, to dismiss/close the toast
     * ( n7-icon-cross )
     *
     *  Each icon requires it's onClick payload
     * @type {?|undefined}
     */
    IToastBox.prototype.closeIcon;
    /**
     * the toast's optional buttons
     * suggestion: don't use more than 2 actions
     * @type {?|undefined}
     */
    IToastBox.prototype.actions;
    /**
     * additional info
     * @type {?|undefined}
     */
    IToastBox.prototype._meta;
}
/**
 * Interface for the single ToastComponent's "Action"
 *
 * \@property text (required)
 * \@property payload (required)
 * \@property classes (optional)
 * @record
 */
export function IToastAction() { }
if (false) {
    /**
     * the button's rendered text
     * @type {?}
     */
    IToastAction.prototype.text;
    /**
     * the button's onClick payload
     * @type {?}
     */
    IToastAction.prototype.payload;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    IToastAction.prototype.classes;
}
var ToastComponent = /** @class */ (function () {
    function ToastComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    ToastComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    ToastComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-toast',
                    template: "<div *ngIf=\"data\" class=\"n7-toast\">\r\n    <div class=\"n7-toast__column {{data.classes || ''}}\">\r\n\r\n        <!-- Toast boxes -->\r\n        <div class=\"n7-toast__box\" \r\n             *ngFor=\"let box of data.toasts\"\r\n             [ngClass]=\"{ 'has-actions' : !! (box.actions || box.closeIcon) }\">\r\n        \r\n            <!-- Toast text -->\r\n            <div class=\"n7-toast__content {{box.classes || ''}}\" *ngIf=\"box.title || box.text\">\r\n                <span class=\"n7-toast__title\" *ngIf=\"box.title\">{{ box.title }}</span>\r\n                <span class=\"n7-toast__text\" *ngIf=\"box.text\">{{ box.text }}</span>\r\n            </div>\r\n\r\n            <!-- Toast actions -->\r\n            <div class=\"n7-toast__actions\" *ngIf=\"box.actions || box.closeIcon\">\r\n                <span\r\n                class=\"n7-toast__closeIcon {{ box.closeIcon.icon }}\" \r\n                *ngIf=\"box.closeIcon\" \r\n                (click)=\"onClick(box.closeIcon.payload)\">\r\n                </span>\r\n                <span class=\"n7-toast__action-wrapper\" *ngIf=\"box.actions\">\r\n                    <span class=\"n7-toast__action-content\" *ngFor=\"let action of box.actions\">\r\n                        <button class=\"n7-toast__action-button n7-btn n7-btn-s {{action.classes || ''}}\"\r\n                                (click)=\"onClick(action.payload)\">\r\n                                {{action.text}}\r\n                        </button>\r\n                    </span>\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"
                }] }
    ];
    ToastComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return ToastComponent;
}());
export { ToastComponent };
if (false) {
    /** @type {?} */
    ToastComponent.prototype.data;
    /** @type {?} */
    ToastComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RvYXN0L3RvYXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBU2pELGdDQUdDOzs7SUFGQyw0QkFBb0I7O0lBQ3BCLDZCQUFpQjs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JuQiwrQkFnQ0M7Ozs7OztJQTVCQyw0QkFBZ0I7Ozs7O0lBSWhCLDBCQUFlOzs7OztJQUlmLHlCQUFjOzs7Ozs7OztJQU9kLDhCQUdFOzs7Ozs7SUFLRiw0QkFBeUI7Ozs7O0lBSXpCLDBCQUFZOzs7Ozs7Ozs7O0FBV2Qsa0NBYUM7Ozs7OztJQVRDLDRCQUFhOzs7OztJQUliLCtCQUFhOzs7OztJQUliLCtCQUFpQjs7QUFHbkI7SUFBQTtJQWFBLENBQUM7Ozs7O0lBTEMsZ0NBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDYixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQVpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsd2xEQUEyQjtpQkFDNUI7Ozt1QkFFRSxLQUFLO3VCQUNMLEtBQUs7O0lBT1IscUJBQUM7Q0FBQSxBQWJELElBYUM7U0FUWSxjQUFjOzs7SUFDekIsOEJBQTBCOztJQUMxQiw4QkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBUT0FTVC50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgVG9hc3RDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgdG9hc3RzIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKi9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRvYXN0RGF0YSB7IC8vIHRvYXN0IGNvbHVtbiB3cmFwcGVyXHJcbiAgdG9hc3RzOiBJVG9hc3RCb3hbXTtcclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciB0aGUgc2luZ2xlIFRvYXN0Q29tcG9uZW50J3MgXCJCb3hcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSB0aW1lciAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbG9zZUljb24gKG9wdGlvbmFsKVxyXG4gKiAtIGljb24gKHJlcXVpcmVkKVxyXG4gKiAtIHBheWxvYWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgdGl0bGUgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgdGV4dCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBhY3Rpb25zIChvcHRpb25hbClcclxuICovXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUb2FzdEJveCB7XHJcbiAgLyoqXHJcbiAgICogcmVxdWlyZXM6IFtpcy1zdWNjZXNzLCBpcy13YXJuaW5nLCBpcy1lcnJvcl0gKyBvcHRpb25hbCBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM6IHN0cmluZztcclxuICAvKipcclxuICAgKiBsYXJnZXIsIHRpdGxlIHRleHRcclxuICAgKi9cclxuICB0aXRsZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiB0aGUgdG9hc3QncyBib2R5IHRleHRcclxuICAgKi9cclxuICB0ZXh0Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqICdYJyBpY29uLCB0byBkaXNtaXNzL2Nsb3NlIHRoZSB0b2FzdFxyXG4gICAqICggbjctaWNvbi1jcm9zcyApXHJcbiAgICogXHJcbiAgICogIEVhY2ggaWNvbiByZXF1aXJlcyBpdCdzIG9uQ2xpY2sgcGF5bG9hZFxyXG4gICAqL1xyXG4gIGNsb3NlSWNvbj86IHtcclxuICAgIGljb246IHN0cmluZztcclxuICAgIHBheWxvYWQ6IHN0cmluZztcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIHRoZSB0b2FzdCdzIG9wdGlvbmFsIGJ1dHRvbnNcclxuICAgKiBzdWdnZXN0aW9uOiBkb24ndCB1c2UgbW9yZSB0aGFuIDIgYWN0aW9uc1xyXG4gICAqL1xyXG4gIGFjdGlvbnM/OiBJVG9hc3RBY3Rpb25bXTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgdGhlIHNpbmdsZSBUb2FzdENvbXBvbmVudCdzIFwiQWN0aW9uXCJcclxuICpcclxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICovXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUb2FzdEFjdGlvbiB7XHJcbiAgLyoqXHJcbiAgICogdGhlIGJ1dHRvbidzIHJlbmRlcmVkIHRleHRcclxuICAgKi9cclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogdGhlIGJ1dHRvbidzIG9uQ2xpY2sgcGF5bG9hZFxyXG4gICAqL1xyXG4gIHBheWxvYWQ6IGFueTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctdG9hc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9hc3RDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IElUb2FzdERhdGE7XHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBvbkNsaWNrKHBheWxvYWQpe1xyXG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcbn0iXX0=