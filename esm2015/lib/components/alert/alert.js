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
export function AlertData() { }
if (false) {
    /**
     * the alert's body/message which can include html tags
     * @type {?}
     */
    AlertData.prototype.text;
    /**
     * alert icon (on left side)
     * @type {?|undefined}
     */
    AlertData.prototype.icon;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    AlertData.prototype.classes;
    /**
     * action click's payload
     * @type {?|undefined}
     */
    AlertData.prototype.payload;
    /**
     * additional info
     * @type {?|undefined}
     */
    AlertData.prototype._meta;
    /**
     * indicates whether the alert includes a close button (on top-right corner)
     * or not (if not provided assumed as false)
     * @type {?|undefined}
     */
    AlertData.prototype.hasCloseButton;
}
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
                template: "<div class=\"n7-alert {{data.classes || ''}} {{ data.icon ? 'has-icon' : '' }}\" *ngIf=\"data\" >\r\n    <span class=\"n7-alert__icon {{data.icon}}\" *ngIf=\"data.icon\"></span>\r\n    <div class=\"n7-alert__text\" [innerHTML]=\"data.text\">\r\n    </div>\r\n    <span class=\"n7-alert__close-button n7-icon-close\" \r\n          *ngIf=\"data.hasCloseButton\" \r\n          (click)=\"onClick(data.payload)\"></span>\r\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhakQsK0JBMEJDOzs7Ozs7SUF0QkMseUJBQWE7Ozs7O0lBSWIseUJBQWM7Ozs7O0lBSWQsNEJBQWlCOzs7OztJQUlqQiw0QkFBYzs7Ozs7SUFJZCwwQkFBWTs7Ozs7O0lBS1osbUNBQXlCOztBQU8zQixNQUFNLE9BQU8sY0FBYzs7Ozs7SUFLekIsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQWJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIscWJBQTJCO2FBQzVCOzs7bUJBRUUsS0FBSzttQkFFTCxLQUFLOzs7O0lBRk4sOEJBQXlCOztJQUV6Qiw4QkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBBTEVSVC50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgVGFnQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGJvZHkgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaGFzQ2xvc2VCdXR0b24gKG9wdGlvbmFsKVxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBBbGVydERhdGEge1xyXG4gIC8qKlxyXG4gICAqIHRoZSBhbGVydCdzIGJvZHkvbWVzc2FnZSB3aGljaCBjYW4gaW5jbHVkZSBodG1sIHRhZ3NcclxuICAqL1xyXG4gIHRleHQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiBhbGVydCBpY29uIChvbiBsZWZ0IHNpZGUpXHJcbiAgICovXHJcbiAgaWNvbj86IHN0cmluZztcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICAqL1xyXG4gIHBheWxvYWQ/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGFsZXJ0IGluY2x1ZGVzIGEgY2xvc2UgYnV0dG9uIChvbiB0b3AtcmlnaHQgY29ybmVyKVxyXG4gICAqIG9yIG5vdCAoaWYgbm90IHByb3ZpZGVkIGFzc3VtZWQgYXMgZmFsc2UpXHJcbiAgICovXHJcbiAgaGFzQ2xvc2VCdXR0b24/OiBib29sZWFuO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWFsZXJ0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBBbGVydERhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgb25DbGljayhwYXlsb2FkKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcbn1cclxuIl19