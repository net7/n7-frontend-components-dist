/**
 * @fileoverview added by tsickle
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
export class ToastComponent {
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
if (false) {
    /** @type {?} */
    ToastComponent.prototype.data;
    /** @type {?} */
    ToastComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RvYXN0L3RvYXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7QUFTakQsZ0NBR0M7OztJQUZDLDRCQUFvQjs7SUFDcEIsNkJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7QUFnQm5CLCtCQWdDQzs7Ozs7O0lBNUJDLDRCQUFnQjs7Ozs7SUFJaEIsMEJBQWU7Ozs7O0lBSWYseUJBQWM7Ozs7Ozs7O0lBT2QsOEJBR0U7Ozs7OztJQUtGLDRCQUF5Qjs7Ozs7SUFJekIsMEJBQVk7Ozs7Ozs7Ozs7QUFXZCxrQ0FhQzs7Ozs7O0lBVEMsNEJBQWE7Ozs7O0lBSWIsK0JBQWE7Ozs7O0lBSWIsK0JBQWlCOztBQU9uQixNQUFNLE9BQU8sY0FBYzs7Ozs7SUFJekIsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQVpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsd2xEQUEyQjthQUM1Qjs7O21CQUVFLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLDhCQUEwQjs7SUFDMUIsOEJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gVE9BU1QudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIFRvYXN0Q29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IHRvYXN0cyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICovXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUb2FzdERhdGEgeyAvLyB0b2FzdCBjb2x1bW4gd3JhcHBlclxyXG4gIHRvYXN0czogSVRvYXN0Qm94W107XHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgdGhlIHNpbmdsZSBUb2FzdENvbXBvbmVudCdzIFwiQm94XCJcclxuICpcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgdGltZXIgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xvc2VJY29uIChvcHRpb25hbClcclxuICogLSBpY29uIChyZXF1aXJlZClcclxuICogLSBwYXlsb2FkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHRpdGxlIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHRleHQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgYWN0aW9ucyAob3B0aW9uYWwpXHJcbiAqL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVG9hc3RCb3gge1xyXG4gIC8qKlxyXG4gICAqIHJlcXVpcmVzOiBbaXMtc3VjY2VzcywgaXMtd2FybmluZywgaXMtZXJyb3JdICsgb3B0aW9uYWwgYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogbGFyZ2VyLCB0aXRsZSB0ZXh0XHJcbiAgICovXHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogdGhlIHRvYXN0J3MgYm9keSB0ZXh0XHJcbiAgICovXHJcbiAgdGV4dD86IHN0cmluZztcclxuICAvKipcclxuICAgKiAnWCcgaWNvbiwgdG8gZGlzbWlzcy9jbG9zZSB0aGUgdG9hc3RcclxuICAgKiAoIG43LWljb24tY3Jvc3MgKVxyXG4gICAqIFxyXG4gICAqICBFYWNoIGljb24gcmVxdWlyZXMgaXQncyBvbkNsaWNrIHBheWxvYWRcclxuICAgKi9cclxuICBjbG9zZUljb24/OiB7XHJcbiAgICBpY29uOiBzdHJpbmc7XHJcbiAgICBwYXlsb2FkOiBzdHJpbmc7XHJcbiAgfTtcclxuICAvKipcclxuICAgKiB0aGUgdG9hc3QncyBvcHRpb25hbCBidXR0b25zXHJcbiAgICogc3VnZ2VzdGlvbjogZG9uJ3QgdXNlIG1vcmUgdGhhbiAyIGFjdGlvbnNcclxuICAgKi9cclxuICBhY3Rpb25zPzogSVRvYXN0QWN0aW9uW107XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIHRoZSBzaW5nbGUgVG9hc3RDb21wb25lbnQncyBcIkFjdGlvblwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVG9hc3RBY3Rpb24ge1xyXG4gIC8qKlxyXG4gICAqIHRoZSBidXR0b24ncyByZW5kZXJlZCB0ZXh0XHJcbiAgICovXHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHRoZSBidXR0b24ncyBvbkNsaWNrIHBheWxvYWRcclxuICAgKi9cclxuICBwYXlsb2FkOiBhbnk7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LXRvYXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdG9hc3QuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvYXN0Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBJVG9hc3REYXRhO1xyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgb25DbGljayhwYXlsb2FkKXtcclxuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgfVxyXG59Il19