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
                    template: "<div *ngIf=\"data\" class=\"n7-toast\">\n    <div class=\"n7-toast__column {{data.classes || ''}}\">\n\n        <!-- Toast boxes -->\n        <div class=\"n7-toast__box\" \n             *ngFor=\"let box of data.toasts\"\n             [ngClass]=\"{ 'has-actions' : !! (box.actions || box.closeIcon) }\">\n        \n            <!-- Toast text -->\n            <div class=\"n7-toast__content {{box.classes || ''}}\" *ngIf=\"box.title || box.text\">\n                <span class=\"n7-toast__title\" *ngIf=\"box.title\">{{ box.title }}</span>\n                <span class=\"n7-toast__text\" *ngIf=\"box.text\">{{ box.text }}</span>\n            </div>\n\n            <!-- Toast actions -->\n            <div class=\"n7-toast__actions\" *ngIf=\"box.actions || box.closeIcon\">\n                <span\n                class=\"n7-toast__closeIcon {{ box.closeIcon.icon }}\" \n                *ngIf=\"box.closeIcon\" \n                (click)=\"onClick(box.closeIcon.payload)\">\n                </span>\n                <span class=\"n7-toast__action-wrapper\" *ngIf=\"box.actions\">\n                    <span class=\"n7-toast__action-content\" *ngFor=\"let action of box.actions\">\n                        <button class=\"n7-toast__action-button n7-btn n7-btn-s {{action.classes || ''}}\"\n                                (click)=\"onClick(action.payload)\">\n                                {{action.text}}\n                        </button>\n                    </span>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RvYXN0L3RvYXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBU2pELGdDQUdDOzs7SUFGQyw0QkFBb0I7O0lBQ3BCLDZCQUFpQjs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JuQiwrQkFnQ0M7Ozs7OztJQTVCQyw0QkFBZ0I7Ozs7O0lBSWhCLDBCQUFlOzs7OztJQUlmLHlCQUFjOzs7Ozs7OztJQU9kLDhCQUdFOzs7Ozs7SUFLRiw0QkFBeUI7Ozs7O0lBSXpCLDBCQUFZOzs7Ozs7Ozs7O0FBV2Qsa0NBYUM7Ozs7OztJQVRDLDRCQUFhOzs7OztJQUliLCtCQUFhOzs7OztJQUliLCtCQUFpQjs7QUFHbkI7SUFBQTtJQWFBLENBQUM7Ozs7O0lBTEMsZ0NBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDYixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQVpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsd2hEQUEyQjtpQkFDNUI7Ozt1QkFFRSxLQUFLO3VCQUNMLEtBQUs7O0lBT1IscUJBQUM7Q0FBQSxBQWJELElBYUM7U0FUWSxjQUFjOzs7SUFDekIsOEJBQTBCOztJQUMxQiw4QkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVE9BU1QudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFRvYXN0Q29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgdG9hc3RzIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIElUb2FzdERhdGEgeyAvLyB0b2FzdCBjb2x1bW4gd3JhcHBlclxuICB0b2FzdHM6IElUb2FzdEJveFtdO1xuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgdGhlIHNpbmdsZSBUb2FzdENvbXBvbmVudCdzIFwiQm94XCJcbiAqXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgdGltZXIgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsb3NlSWNvbiAob3B0aW9uYWwpXG4gKiAtIGljb24gKHJlcXVpcmVkKVxuICogLSBwYXlsb2FkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSB0aXRsZSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdGV4dCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgYWN0aW9ucyAob3B0aW9uYWwpXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBJVG9hc3RCb3gge1xuICAvKipcbiAgICogcmVxdWlyZXM6IFtpcy1zdWNjZXNzLCBpcy13YXJuaW5nLCBpcy1lcnJvcl0gKyBvcHRpb25hbCBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlczogc3RyaW5nO1xuICAvKipcbiAgICogbGFyZ2VyLCB0aXRsZSB0ZXh0XG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcbiAgLyoqXG4gICAqIHRoZSB0b2FzdCdzIGJvZHkgdGV4dFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqICdYJyBpY29uLCB0byBkaXNtaXNzL2Nsb3NlIHRoZSB0b2FzdFxuICAgKiAoIG43LWljb24tY3Jvc3MgKVxuICAgKiBcbiAgICogIEVhY2ggaWNvbiByZXF1aXJlcyBpdCdzIG9uQ2xpY2sgcGF5bG9hZFxuICAgKi9cbiAgY2xvc2VJY29uPzoge1xuICAgIGljb246IHN0cmluZztcbiAgICBwYXlsb2FkOiBzdHJpbmc7XG4gIH07XG4gIC8qKlxuICAgKiB0aGUgdG9hc3QncyBvcHRpb25hbCBidXR0b25zXG4gICAqIHN1Z2dlc3Rpb246IGRvbid0IHVzZSBtb3JlIHRoYW4gMiBhY3Rpb25zXG4gICAqL1xuICBhY3Rpb25zPzogSVRvYXN0QWN0aW9uW107XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgdGhlIHNpbmdsZSBUb2FzdENvbXBvbmVudCdzIFwiQWN0aW9uXCJcbiAqXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBJVG9hc3RBY3Rpb24ge1xuICAvKipcbiAgICogdGhlIGJ1dHRvbidzIHJlbmRlcmVkIHRleHRcbiAgICovXG4gIHRleHQ6IHN0cmluZztcbiAgLyoqXG4gICAqIHRoZSBidXR0b24ncyBvbkNsaWNrIHBheWxvYWRcbiAgICovXG4gIHBheWxvYWQ6IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy10b2FzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUb2FzdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElUb2FzdERhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNsaWNrKHBheWxvYWQpe1xuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxufSJdfQ==