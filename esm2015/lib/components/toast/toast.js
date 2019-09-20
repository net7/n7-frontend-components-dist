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
                template: "<div *ngIf=\"data\" class=\"n7-toast\">\n    <div class=\"n7-toast__column {{data.classes || ''}}\">\n\n        <!-- Toast boxes -->\n        <div class=\"n7-toast__box\" \n             *ngFor=\"let box of data.toasts\"\n             [ngClass]=\"{ 'has-actions' : !! (box.actions || box.closeIcon) }\">\n        \n            <!-- Toast text -->\n            <div class=\"n7-toast__content {{box.classes || ''}}\" *ngIf=\"box.title || box.text\">\n                <span class=\"n7-toast__title\" *ngIf=\"box.title\">{{ box.title }}</span>\n                <span class=\"n7-toast__text\" *ngIf=\"box.text\">{{ box.text }}</span>\n            </div>\n\n            <!-- Toast actions -->\n            <div class=\"n7-toast__actions\" *ngIf=\"box.actions || box.closeIcon\">\n                <span\n                class=\"n7-toast__closeIcon {{ box.closeIcon.icon }}\" \n                *ngIf=\"box.closeIcon\" \n                (click)=\"onClick(box.closeIcon.payload)\">\n                </span>\n                <span class=\"n7-toast__action-wrapper\" *ngIf=\"box.actions\">\n                    <span class=\"n7-toast__action-content\" *ngFor=\"let action of box.actions\">\n                        <button class=\"n7-toast__action-button n7-btn n7-btn-s {{action.classes || ''}}\"\n                                (click)=\"onClick(action.payload)\">\n                                {{action.text}}\n                        </button>\n                    </span>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RvYXN0L3RvYXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7QUFTakQsZ0NBR0M7OztJQUZDLDRCQUFvQjs7SUFDcEIsNkJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7QUFnQm5CLCtCQWdDQzs7Ozs7O0lBNUJDLDRCQUFnQjs7Ozs7SUFJaEIsMEJBQWU7Ozs7O0lBSWYseUJBQWM7Ozs7Ozs7O0lBT2QsOEJBR0U7Ozs7OztJQUtGLDRCQUF5Qjs7Ozs7SUFJekIsMEJBQVk7Ozs7Ozs7Ozs7QUFXZCxrQ0FhQzs7Ozs7O0lBVEMsNEJBQWE7Ozs7O0lBSWIsK0JBQWE7Ozs7O0lBSWIsK0JBQWlCOztBQU9uQixNQUFNLE9BQU8sY0FBYzs7Ozs7SUFJekIsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQVpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsd2hEQUEyQjthQUM1Qjs7O21CQUVFLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLDhCQUEwQjs7SUFDMUIsOEJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRPQVNULnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBUb2FzdENvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IHRvYXN0cyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBJVG9hc3REYXRhIHsgLy8gdG9hc3QgY29sdW1uIHdyYXBwZXJcbiAgdG9hc3RzOiBJVG9hc3RCb3hbXTtcbiAgY2xhc3Nlcz86IHN0cmluZztcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIHRoZSBzaW5nbGUgVG9hc3RDb21wb25lbnQncyBcIkJveFwiXG4gKlxuICogQHByb3BlcnR5IGNsYXNzZXMgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHRpbWVyIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbG9zZUljb24gKG9wdGlvbmFsKVxuICogLSBpY29uIChyZXF1aXJlZClcbiAqIC0gcGF5bG9hZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgdGl0bGUgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHRleHQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGFjdGlvbnMgKG9wdGlvbmFsKVxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRvYXN0Qm94IHtcbiAgLyoqXG4gICAqIHJlcXVpcmVzOiBbaXMtc3VjY2VzcywgaXMtd2FybmluZywgaXMtZXJyb3JdICsgb3B0aW9uYWwgYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM6IHN0cmluZztcbiAgLyoqXG4gICAqIGxhcmdlciwgdGl0bGUgdGV4dFxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aGUgdG9hc3QncyBib2R5IHRleHRcbiAgICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiAnWCcgaWNvbiwgdG8gZGlzbWlzcy9jbG9zZSB0aGUgdG9hc3RcbiAgICogKCBuNy1pY29uLWNyb3NzIClcbiAgICogXG4gICAqICBFYWNoIGljb24gcmVxdWlyZXMgaXQncyBvbkNsaWNrIHBheWxvYWRcbiAgICovXG4gIGNsb3NlSWNvbj86IHtcbiAgICBpY29uOiBzdHJpbmc7XG4gICAgcGF5bG9hZDogc3RyaW5nO1xuICB9O1xuICAvKipcbiAgICogdGhlIHRvYXN0J3Mgb3B0aW9uYWwgYnV0dG9uc1xuICAgKiBzdWdnZXN0aW9uOiBkb24ndCB1c2UgbW9yZSB0aGFuIDIgYWN0aW9uc1xuICAgKi9cbiAgYWN0aW9ucz86IElUb2FzdEFjdGlvbltdO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvXG4gICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIHRoZSBzaW5nbGUgVG9hc3RDb21wb25lbnQncyBcIkFjdGlvblwiXG4gKlxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHBheWxvYWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRvYXN0QWN0aW9uIHtcbiAgLyoqXG4gICAqIHRoZSBidXR0b24ncyByZW5kZXJlZCB0ZXh0XG4gICAqL1xuICB0ZXh0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aGUgYnV0dG9uJ3Mgb25DbGljayBwYXlsb2FkXG4gICAqL1xuICBwYXlsb2FkOiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctdG9hc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9hc3QuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJVG9hc3REYXRhO1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DbGljayhwYXlsb2FkKXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cbn0iXX0=