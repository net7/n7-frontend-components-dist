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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RvYXN0L3RvYXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBU2pELCtCQUdDOzs7SUFGQywyQkFBbUI7O0lBQ25CLDRCQUFpQjs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JuQiw4QkFnQ0M7Ozs7OztJQTVCQywyQkFBZ0I7Ozs7O0lBSWhCLHlCQUFlOzs7OztJQUlmLHdCQUFjOzs7Ozs7OztJQU9kLDZCQUdFOzs7Ozs7SUFLRiwyQkFBd0I7Ozs7O0lBSXhCLHlCQUFZOzs7Ozs7Ozs7O0FBV2QsaUNBYUM7Ozs7OztJQVRDLDJCQUFhOzs7OztJQUliLDhCQUFhOzs7OztJQUliLDhCQUFpQjs7QUFHbkI7SUFBQTtJQWNBLENBQUM7Ozs7O0lBTEMsZ0NBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsd2xEQUEyQjtpQkFDNUI7Ozt1QkFFRSxLQUFLO3VCQUVMLEtBQUs7O0lBT1IscUJBQUM7Q0FBQSxBQWRELElBY0M7U0FWWSxjQUFjOzs7SUFDekIsOEJBQXlCOztJQUV6Qiw4QkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBUT0FTVC50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgVG9hc3RDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgdG9hc3RzIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKi9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVG9hc3REYXRhIHsgLy8gdG9hc3QgY29sdW1uIHdyYXBwZXJcclxuICB0b2FzdHM6IFRvYXN0Qm94W107XHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgdGhlIHNpbmdsZSBUb2FzdENvbXBvbmVudCdzIFwiQm94XCJcclxuICpcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgdGltZXIgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xvc2VJY29uIChvcHRpb25hbClcclxuICogLSBpY29uIChyZXF1aXJlZClcclxuICogLSBwYXlsb2FkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHRpdGxlIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHRleHQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgYWN0aW9ucyAob3B0aW9uYWwpXHJcbiAqL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUb2FzdEJveCB7XHJcbiAgLyoqXHJcbiAgICogcmVxdWlyZXM6IFtpcy1zdWNjZXNzLCBpcy13YXJuaW5nLCBpcy1lcnJvcl0gKyBvcHRpb25hbCBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM6IHN0cmluZztcclxuICAvKipcclxuICAgKiBsYXJnZXIsIHRpdGxlIHRleHRcclxuICAgKi9cclxuICB0aXRsZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiB0aGUgdG9hc3QncyBib2R5IHRleHRcclxuICAgKi9cclxuICB0ZXh0Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqICdYJyBpY29uLCB0byBkaXNtaXNzL2Nsb3NlIHRoZSB0b2FzdFxyXG4gICAqICggbjctaWNvbi1jcm9zcyApXHJcbiAgICpcclxuICAgKiAgRWFjaCBpY29uIHJlcXVpcmVzIGl0J3Mgb25DbGljayBwYXlsb2FkXHJcbiAgICovXHJcbiAgY2xvc2VJY29uPzoge1xyXG4gICAgaWNvbjogc3RyaW5nO1xyXG4gICAgcGF5bG9hZDogc3RyaW5nO1xyXG4gIH07XHJcbiAgLyoqXHJcbiAgICogdGhlIHRvYXN0J3Mgb3B0aW9uYWwgYnV0dG9uc1xyXG4gICAqIHN1Z2dlc3Rpb246IGRvbid0IHVzZSBtb3JlIHRoYW4gMiBhY3Rpb25zXHJcbiAgICovXHJcbiAgYWN0aW9ucz86IFRvYXN0QWN0aW9uW107XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIHRoZSBzaW5nbGUgVG9hc3RDb21wb25lbnQncyBcIkFjdGlvblwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUb2FzdEFjdGlvbiB7XHJcbiAgLyoqXHJcbiAgICogdGhlIGJ1dHRvbidzIHJlbmRlcmVkIHRleHRcclxuICAgKi9cclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogdGhlIGJ1dHRvbidzIG9uQ2xpY2sgcGF5bG9hZFxyXG4gICAqL1xyXG4gIHBheWxvYWQ6IGFueTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctdG9hc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9hc3RDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IFRvYXN0RGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBvbkNsaWNrKHBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxufVxyXG4iXX0=