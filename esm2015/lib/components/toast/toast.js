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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RvYXN0L3RvYXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBU2pELCtCQUdDOzs7SUFGQywyQkFBbUI7O0lBQ25CLDRCQUFpQjs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JuQiw4QkFnQ0M7Ozs7OztJQTVCQywyQkFBZ0I7Ozs7O0lBSWhCLHlCQUFlOzs7OztJQUlmLHdCQUFjOzs7Ozs7OztJQU9kLDZCQUdFOzs7Ozs7SUFLRiwyQkFBd0I7Ozs7O0lBSXhCLHlCQUFZOzs7Ozs7Ozs7O0FBV2QsaUNBYUM7Ozs7OztJQVRDLDJCQUFhOzs7OztJQUliLDhCQUFhOzs7OztJQUliLDhCQUFpQjs7QUFPbkIsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBS3pCLE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUFiRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLHdsREFBMkI7YUFDNUI7OzttQkFFRSxLQUFLO21CQUVMLEtBQUs7Ozs7SUFGTiw4QkFBeUI7O0lBRXpCLDhCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFRPQVNULnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBUb2FzdENvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB0b2FzdHMgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUb2FzdERhdGEgeyAvLyB0b2FzdCBjb2x1bW4gd3JhcHBlclxyXG4gIHRvYXN0czogVG9hc3RCb3hbXTtcclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciB0aGUgc2luZ2xlIFRvYXN0Q29tcG9uZW50J3MgXCJCb3hcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSB0aW1lciAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbG9zZUljb24gKG9wdGlvbmFsKVxyXG4gKiAtIGljb24gKHJlcXVpcmVkKVxyXG4gKiAtIHBheWxvYWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgdGl0bGUgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgdGV4dCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBhY3Rpb25zIChvcHRpb25hbClcclxuICovXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0Qm94IHtcclxuICAvKipcclxuICAgKiByZXF1aXJlczogW2lzLXN1Y2Nlc3MsIGlzLXdhcm5pbmcsIGlzLWVycm9yXSArIG9wdGlvbmFsIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlczogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGxhcmdlciwgdGl0bGUgdGV4dFxyXG4gICAqL1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHRoZSB0b2FzdCdzIGJvZHkgdGV4dFxyXG4gICAqL1xyXG4gIHRleHQ/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogJ1gnIGljb24sIHRvIGRpc21pc3MvY2xvc2UgdGhlIHRvYXN0XHJcbiAgICogKCBuNy1pY29uLWNyb3NzIClcclxuICAgKlxyXG4gICAqICBFYWNoIGljb24gcmVxdWlyZXMgaXQncyBvbkNsaWNrIHBheWxvYWRcclxuICAgKi9cclxuICBjbG9zZUljb24/OiB7XHJcbiAgICBpY29uOiBzdHJpbmc7XHJcbiAgICBwYXlsb2FkOiBzdHJpbmc7XHJcbiAgfTtcclxuICAvKipcclxuICAgKiB0aGUgdG9hc3QncyBvcHRpb25hbCBidXR0b25zXHJcbiAgICogc3VnZ2VzdGlvbjogZG9uJ3QgdXNlIG1vcmUgdGhhbiAyIGFjdGlvbnNcclxuICAgKi9cclxuICBhY3Rpb25zPzogVG9hc3RBY3Rpb25bXTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgdGhlIHNpbmdsZSBUb2FzdENvbXBvbmVudCdzIFwiQWN0aW9uXCJcclxuICpcclxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICovXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0QWN0aW9uIHtcclxuICAvKipcclxuICAgKiB0aGUgYnV0dG9uJ3MgcmVuZGVyZWQgdGV4dFxyXG4gICAqL1xyXG4gIHRleHQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiB0aGUgYnV0dG9uJ3Mgb25DbGljayBwYXlsb2FkXHJcbiAgICovXHJcbiAgcGF5bG9hZDogYW55O1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy10b2FzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RvYXN0Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb2FzdENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogVG9hc3REYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZCkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==