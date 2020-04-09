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
export function ToastData() { }
if (false) {
    /** @type {?} */
    ToastData.prototype.toasts;
    /** @type {?|undefined} */
    ToastData.prototype.classes;
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
export function ToastBox() { }
if (false) {
    /**
     * requires: [is-success, is-warning, is-error] + optional additional html classes
     * @type {?}
     */
    ToastBox.prototype.classes;
    /**
     * larger, title text
     * @type {?|undefined}
     */
    ToastBox.prototype.title;
    /**
     * the toast's body text
     * @type {?|undefined}
     */
    ToastBox.prototype.text;
    /**
     * 'X' icon, to dismiss/close the toast
     * ( n7-icon-cross )
     *
     *  Each icon requires it's onClick payload
     * @type {?|undefined}
     */
    ToastBox.prototype.closeIcon;
    /**
     * the toast's optional buttons
     * suggestion: don't use more than 2 actions
     * @type {?|undefined}
     */
    ToastBox.prototype.actions;
    /**
     * additional info
     * @type {?|undefined}
     */
    ToastBox.prototype._meta;
}
/**
 * Interface for the single ToastComponent's "Action"
 *
 * \@property text (required)
 * \@property payload (required)
 * \@property classes (optional)
 * @record
 */
export function ToastAction() { }
if (false) {
    /**
     * the button's rendered text
     * @type {?}
     */
    ToastAction.prototype.text;
    /**
     * the button's onClick payload
     * @type {?}
     */
    ToastAction.prototype.payload;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    ToastAction.prototype.classes;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RvYXN0L3RvYXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBU2pELCtCQUdDOzs7SUFGQywyQkFBbUI7O0lBQ25CLDRCQUFpQjs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JuQiw4QkFnQ0M7Ozs7OztJQTVCQywyQkFBZ0I7Ozs7O0lBSWhCLHlCQUFlOzs7OztJQUlmLHdCQUFjOzs7Ozs7OztJQU9kLDZCQUdFOzs7Ozs7SUFLRiwyQkFBd0I7Ozs7O0lBSXhCLHlCQUFZOzs7Ozs7Ozs7O0FBV2QsaUNBYUM7Ozs7OztJQVRDLDJCQUFhOzs7OztJQUliLDhCQUFhOzs7OztJQUliLDhCQUFpQjs7QUFHbkI7SUFBQTtJQWNBLENBQUM7Ozs7O0lBTEMsZ0NBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsd2hEQUEyQjtpQkFDNUI7Ozt1QkFFRSxLQUFLO3VCQUVMLEtBQUs7O0lBT1IscUJBQUM7Q0FBQSxBQWRELElBY0M7U0FWWSxjQUFjOzs7SUFDekIsOEJBQXlCOztJQUV6Qiw4QkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVE9BU1QudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFRvYXN0Q29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgdG9hc3RzIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0RGF0YSB7IC8vIHRvYXN0IGNvbHVtbiB3cmFwcGVyXG4gIHRvYXN0czogVG9hc3RCb3hbXTtcbiAgY2xhc3Nlcz86IHN0cmluZztcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIHRoZSBzaW5nbGUgVG9hc3RDb21wb25lbnQncyBcIkJveFwiXG4gKlxuICogQHByb3BlcnR5IGNsYXNzZXMgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHRpbWVyIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbG9zZUljb24gKG9wdGlvbmFsKVxuICogLSBpY29uIChyZXF1aXJlZClcbiAqIC0gcGF5bG9hZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgdGl0bGUgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHRleHQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGFjdGlvbnMgKG9wdGlvbmFsKVxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9hc3RCb3gge1xuICAvKipcbiAgICogcmVxdWlyZXM6IFtpcy1zdWNjZXNzLCBpcy13YXJuaW5nLCBpcy1lcnJvcl0gKyBvcHRpb25hbCBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlczogc3RyaW5nO1xuICAvKipcbiAgICogbGFyZ2VyLCB0aXRsZSB0ZXh0XG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcbiAgLyoqXG4gICAqIHRoZSB0b2FzdCdzIGJvZHkgdGV4dFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqICdYJyBpY29uLCB0byBkaXNtaXNzL2Nsb3NlIHRoZSB0b2FzdFxuICAgKiAoIG43LWljb24tY3Jvc3MgKVxuICAgKlxuICAgKiAgRWFjaCBpY29uIHJlcXVpcmVzIGl0J3Mgb25DbGljayBwYXlsb2FkXG4gICAqL1xuICBjbG9zZUljb24/OiB7XG4gICAgaWNvbjogc3RyaW5nO1xuICAgIHBheWxvYWQ6IHN0cmluZztcbiAgfTtcbiAgLyoqXG4gICAqIHRoZSB0b2FzdCdzIG9wdGlvbmFsIGJ1dHRvbnNcbiAgICogc3VnZ2VzdGlvbjogZG9uJ3QgdXNlIG1vcmUgdGhhbiAyIGFjdGlvbnNcbiAgICovXG4gIGFjdGlvbnM/OiBUb2FzdEFjdGlvbltdO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvXG4gICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIHRoZSBzaW5nbGUgVG9hc3RDb21wb25lbnQncyBcIkFjdGlvblwiXG4gKlxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHBheWxvYWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9hc3RBY3Rpb24ge1xuICAvKipcbiAgICogdGhlIGJ1dHRvbidzIHJlbmRlcmVkIHRleHRcbiAgICovXG4gIHRleHQ6IHN0cmluZztcbiAgLyoqXG4gICAqIHRoZSBidXR0b24ncyBvbkNsaWNrIHBheWxvYWRcbiAgICovXG4gIHBheWxvYWQ6IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy10b2FzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUb2FzdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IFRvYXN0RGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DbGljayhwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxufVxuIl19