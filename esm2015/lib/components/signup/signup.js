/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/signup/signup.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// SIGNUP.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for Signup field
 *
 * \@property id (M)
 * \@property label (M)
 * \@property inputType (M)
 * \@property payload (M)
 * \@property error (O)
 * \@property hint (O)
 * \@property classes (O)
 * @record
 */
function SignupField() { }
if (false) {
    /** @type {?} */
    SignupField.prototype.id;
    /** @type {?} */
    SignupField.prototype.label;
    /** @type {?} */
    SignupField.prototype.inputType;
    /** @type {?} */
    SignupField.prototype.payload;
    /** @type {?|undefined} */
    SignupField.prototype.error;
    /** @type {?|undefined} */
    SignupField.prototype.hint;
    /** @type {?|undefined} */
    SignupField.prototype.classes;
}
/**
 * Interface for Signup password field (extends SignupField)
 *
 * \@property show (O)
 * @record
 */
function SignupPasswordField() { }
if (false) {
    /** @type {?|undefined} */
    SignupPasswordField.prototype.show;
}
/**
 * Interface for Signup submit
 *
 * \@property label (M)
 * \@property payload (M)
 * \@property error (O)
 * \@property classes (O)
 * @record
 */
function SignupSubmit() { }
if (false) {
    /** @type {?} */
    SignupSubmit.prototype.label;
    /** @type {?} */
    SignupSubmit.prototype.payload;
    /** @type {?|undefined} */
    SignupSubmit.prototype.error;
    /** @type {?|undefined} */
    SignupSubmit.prototype.classes;
}
/**
 * Interface for Signup footer
 *
 * \@property label (M)
 * \@property action (M)
 * \@property classes (O)
 * @record
 */
function SignupFooter() { }
if (false) {
    /** @type {?} */
    SignupFooter.prototype.label;
    /** @type {?} */
    SignupFooter.prototype.action;
    /** @type {?|undefined} */
    SignupFooter.prototype.classes;
}
/**
 * Interface for Signup data
 * login/signup/forgotPassword groups
 *
 * \@property login (O)
 * \@property signup (O)
 * \@property forgotPassword (O)
 * @record
 */
export function SignupData() { }
if (false) {
    /** @type {?|undefined} */
    SignupData.prototype.login;
    /** @type {?|undefined} */
    SignupData.prototype.signup;
    /** @type {?|undefined} */
    SignupData.prototype.forgotPassword;
}
export class SignupComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    /**
     * @param {?} inputPayload
     * @param {?} value
     * @return {?}
     */
    onChange(inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload, value });
    }
    /**
     * @param {?} inputPayload
     * @param {?} value
     * @return {?}
     */
    onInputEnter(inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('enter', { inputPayload, value });
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onFocus(payload) {
        if (!this.emit)
            return;
        this.emit('focus', payload);
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onFocusOut(payload) {
        if (!this.emit)
            return;
        this.emit('focusout', payload);
    }
}
SignupComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-signup',
                template: "<!-- Signup: login -->\r\n<section *ngIf=\"data && data.login\" class=\"n7-signup n7-signup--login\">\r\n    <form class=\"n7-signup__form\" novalidate>\r\n        <ng-container *ngTemplateOutlet=\"field; context: { $implicit: data.login.email }\"></ng-container>\r\n        <ng-container *ngTemplateOutlet=\"\r\n        passwordField;\r\n        context: { $implicit: data.login.password }\r\n      \"></ng-container>\r\n        <div *ngIf=\"data.login.forgotPassword\" class=\"n7-signup__form-item n7-signup__form-item-forgot-password\">\r\n            <a (click)=\"onClick(data.login.forgotPassword.payload)\" title=\"{{ data.login.forgotPassword.title }}\"\r\n                [attr.aria-label]=\"data.login.forgotPassword.title\">{{ data.login.forgotPassword.label }}</a>\r\n        </div>\r\n        <ng-container *ngTemplateOutlet=\"submit; context: { $implicit: data.login.submit }\"></ng-container>\r\n    </form>\r\n    <ng-container *ngTemplateOutlet=\"footer; context: { $implicit: data.login.footer }\"></ng-container>\r\n</section>\r\n\r\n<!-- Signup: signup -->\r\n<section *ngIf=\"data && data.signup\" class=\"n7-signup n7-signup--signup\">\r\n    <form class=\"n7-signup__form\" novalidate>\r\n        <ng-container *ngTemplateOutlet=\"field; context: { $implicit: data.signup.name }\"></ng-container>\r\n        <ng-container *ngTemplateOutlet=\"field; context: { $implicit: data.signup.email }\"></ng-container>\r\n        <ng-container *ngTemplateOutlet=\"\r\n        passwordField;\r\n        context: { $implicit: data.signup.password }\r\n      \"></ng-container>\r\n        <ng-container *ngTemplateOutlet=\"\r\n        passwordField;\r\n        context: { $implicit: data.signup.rePassword }\r\n      \"></ng-container>\r\n        <ng-container *ngTemplateOutlet=\"submit; context: { $implicit: data.signup.submit }\"></ng-container>\r\n    </form>\r\n    <ng-container *ngTemplateOutlet=\"footer; context: { $implicit: data.signup.footer }\"></ng-container>\r\n</section>\r\n\r\n<!-- Signup: forgot password -->\r\n<section *ngIf=\"data && data.forgotPassword\" class=\"n7-signup n7-signup--forgot-password\">\r\n    <p class=\"n7-signup__text\">\r\n        {{ data.forgotPassword.description }}\r\n    </p>\r\n    <form class=\"n7-signup__form\" novalidate>\r\n        <ng-container *ngTemplateOutlet=\"\r\n        field;\r\n        context: { $implicit: data.forgotPassword.email }\r\n      \"></ng-container>\r\n\r\n        <ng-container *ngTemplateOutlet=\"\r\n        submit;\r\n        context: { $implicit: data.forgotPassword.submit }\r\n      \"></ng-container>\r\n\r\n      <!-- hidden submit button to prevent submit on enter -->\r\n      <button type=\"submit\" disabled style=\"display: none\" aria-hidden=\"true\"></button>\r\n    </form>\r\n    <ng-container *ngTemplateOutlet=\"\r\n      footer;\r\n      context: { $implicit: data.forgotPassword.footer }\r\n    \"></ng-container>\r\n</section>\r\n\r\n<!-- Template: field -->\r\n<ng-template #field let-field>\r\n    <div [ngClass]=\"{\r\n      'has-error': field.error,\r\n      'has-hint': field.hint\r\n    }\" class=\"n7-signup__form-item {{ field.classes || '' }}\">\r\n        <label class=\"n7-signup__form-item-label\" for=\"{{ field.id }}\">{{\r\n      field.label\r\n    }}</label>\r\n        <div *ngIf=\"field.hint\" class=\"n7-signup__form-item-hint\">\r\n            {{ field.hint }}\r\n        </div>\r\n        <div class=\"n7-signup__input-wrapper\">\r\n            <input (focus)=\"onFocus(field.payload)\" (focusout)=\"onFocusOut(field.payload)\"\r\n                (keyup.enter)=\"onInputEnter(field.payload, $event.target.value)\"\r\n                (input)=\"onChange(field.payload, $event.target.value)\" class=\"n7-signup__form-item-input\"\r\n                type=\"{{ field.inputType }}\" id=\"{{ field.id }}\" />\r\n        </div>\r\n        <div *ngIf=\"field.error\" class=\"n7-signup__form-error\">\r\n            {{ field.error }}\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<!-- Template: password-field -->\r\n<ng-template #passwordField let-field>\r\n    <div [ngClass]=\"{\r\n      'has-error': field.error,\r\n      'has-hint': field.hint\r\n    }\" class=\"n7-signup__form-item {{ field.classes || '' }}\">\r\n        <label class=\"n7-signup__form-item-label\" for=\"{{ field.id }}\">{{\r\n      field.label\r\n    }}</label>\r\n        <div *ngIf=\"field.hint\" class=\"n7-signup__form-item-hint\">\r\n            {{ field.hint }}\r\n        </div>\r\n        <div class=\"n7-signup__input-wrapper\">\r\n            <input (focus)=\"onFocus(field.payload)\" (focusout)=\"onFocusOut(field.payload)\"\r\n                (keyup.enter)=\"onInputEnter(field.payload, $event.target.value)\"\r\n                (input)=\"onChange(field.payload, $event.target.value)\" class=\"n7-signup__form-item-input\"\r\n                type=\"{{ field.inputType }}\" id=\"{{ field.id }}\" />\r\n            <button *ngIf=\"field.show\" type=\"button\" (click)=\"onClick(field.show.payload)\"\r\n                [attr.aria-label]=\"field.show.label\" class=\"n7-signup__form-item-show-password\">\r\n                <i [attr.aria-label]=\"field.show.label\" class=\"{{ field.show.icon }}\"></i>\r\n            </button>\r\n        </div>\r\n        <div *ngIf=\"field.error\" class=\"n7-signup__form-error\">\r\n            {{ field.error }}\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<!-- Template: footer -->\r\n<ng-template #footer let-footer>\r\n    <footer *ngIf=\"footer\" class=\"n7-signup__footer {{ footer.classes || '' }}\">\r\n        <div class=\"n7-signup__footer-text\">{{ footer.label }}</div>\r\n        <a *ngIf=\"footer.action\" (click)=\"onClick(footer.action.payload)\" title=\"{{ footer.action.label }}\"\r\n            class=\"n7-btn\">{{ footer.action.label }}</a>\r\n    </footer>\r\n</ng-template>\r\n\r\n<!-- Template: submit button -->\r\n<ng-template #submit let-submit>\r\n    <div [ngClass]=\"{\r\n      'has-error': submit.error\r\n    }\" class=\"n7-signup__form-item n7-signup__form-item-action {{\r\n      submit.classes || ''\r\n    }}\">\r\n        <button type=\"button\" (click)=\"onClick(submit.payload)\" [attr.aria-label]=\"submit.label\"\r\n            class=\"n7-btn n7-btn-cta\">\r\n            {{ submit.label }}\r\n        </button>\r\n        <div *ngIf=\"submit.error\" class=\"n7-signup__form-error\">\r\n            {{ submit.error }}\r\n        </div>\r\n    </div>\r\n</ng-template>"
            }] }
];
SignupComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SignupComponent.prototype.data;
    /** @type {?} */
    SignupComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhakQsMEJBUUM7OztJQVBDLHlCQUFXOztJQUNYLDRCQUFjOztJQUNkLGdDQUF5Qzs7SUFDekMsOEJBQWE7O0lBQ2IsNEJBQWU7O0lBQ2YsMkJBQWM7O0lBQ2QsOEJBQWlCOzs7Ozs7OztBQVFuQixrQ0FNQzs7O0lBTEMsbUNBSUU7Ozs7Ozs7Ozs7O0FBV0osMkJBS0M7OztJQUpDLDZCQUFjOztJQUNkLCtCQUFhOztJQUNiLDZCQUFlOztJQUNmLCtCQUFpQjs7Ozs7Ozs7OztBQVVuQiwyQkFPQzs7O0lBTkMsNkJBQWM7O0lBQ2QsOEJBR0U7O0lBQ0YsK0JBQWlCOzs7Ozs7Ozs7OztBQVduQixnQ0EwQkM7OztJQXpCQywyQkFVRTs7SUFDRiw0QkFPRTs7SUFDRixvQ0FLRTs7QUFPSixNQUFNLE9BQU8sZUFBZTs7Ozs7SUFLMUIsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxZQUFZLEVBQUUsS0FBSztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7O0lBRUQsWUFBWSxDQUFDLFlBQVksRUFBRSxLQUFLO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxPQUFPO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7O1lBaENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsczFNQUE0QjthQUM3Qjs7O21CQUVFLEtBQUs7bUJBRUwsS0FBSzs7OztJQUZOLCtCQUEwQjs7SUFFMUIsK0JBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gU0lHTlVQLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBTaWdudXAgZmllbGRcclxuICpcclxuICogQHByb3BlcnR5IGlkIChNKVxyXG4gKiBAcHJvcGVydHkgbGFiZWwgKE0pXHJcbiAqIEBwcm9wZXJ0eSBpbnB1dFR5cGUgKE0pXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChNKVxyXG4gKiBAcHJvcGVydHkgZXJyb3IgKE8pXHJcbiAqIEBwcm9wZXJ0eSBoaW50IChPKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAoTylcclxuICovXHJcbmludGVyZmFjZSBTaWdudXBGaWVsZCB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIGlucHV0VHlwZTogJ3Bhc3N3b3JkJyB8ICd0ZXh0JyB8ICdlbWFpbCc7XHJcbiAgcGF5bG9hZDogYW55O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG4gIGhpbnQ/OiBzdHJpbmc7XHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgU2lnbnVwIHBhc3N3b3JkIGZpZWxkIChleHRlbmRzIFNpZ251cEZpZWxkKVxyXG4gKlxyXG4gKiBAcHJvcGVydHkgc2hvdyAoTylcclxuICovXHJcbmludGVyZmFjZSBTaWdudXBQYXNzd29yZEZpZWxkIGV4dGVuZHMgU2lnbnVwRmllbGQge1xyXG4gIHNob3c/OiB7XHJcbiAgICBpY29uOiBzdHJpbmc7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgcGF5bG9hZDogYW55O1xyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIFNpZ251cCBzdWJtaXRcclxuICpcclxuICogQHByb3BlcnR5IGxhYmVsIChNKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAoTSlcclxuICogQHByb3BlcnR5IGVycm9yIChPKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAoTylcclxuICovXHJcbmludGVyZmFjZSBTaWdudXBTdWJtaXQge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgcGF5bG9hZDogYW55O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIFNpZ251cCBmb290ZXJcclxuICpcclxuICogQHByb3BlcnR5IGxhYmVsIChNKVxyXG4gKiBAcHJvcGVydHkgYWN0aW9uIChNKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAoTylcclxuICovXHJcbmludGVyZmFjZSBTaWdudXBGb290ZXIge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgYWN0aW9uOiB7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgcGF5bG9hZDogYW55O1xyXG4gIH07XHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgU2lnbnVwIGRhdGFcclxuICogbG9naW4vc2lnbnVwL2ZvcmdvdFBhc3N3b3JkIGdyb3Vwc1xyXG4gKlxyXG4gKiBAcHJvcGVydHkgbG9naW4gKE8pXHJcbiAqIEBwcm9wZXJ0eSBzaWdudXAgKE8pXHJcbiAqIEBwcm9wZXJ0eSBmb3Jnb3RQYXNzd29yZCAoTylcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lnbnVwRGF0YSB7XHJcbiAgbG9naW4/OiB7XHJcbiAgICBlbWFpbDogU2lnbnVwRmllbGQ7XHJcbiAgICBwYXNzd29yZDogU2lnbnVwUGFzc3dvcmRGaWVsZDtcclxuICAgIGZvcmdvdFBhc3N3b3JkPzoge1xyXG4gICAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgICBwYXlsb2FkOiBhbnk7XHJcbiAgICB9O1xyXG4gICAgc3VibWl0OiBTaWdudXBTdWJtaXQ7XHJcbiAgICBmb290ZXI/OiBTaWdudXBGb290ZXI7XHJcbiAgfTtcclxuICBzaWdudXA/OiB7XHJcbiAgICBuYW1lOiBTaWdudXBGaWVsZDtcclxuICAgIGVtYWlsOiBTaWdudXBGaWVsZDtcclxuICAgIHBhc3N3b3JkOiBTaWdudXBQYXNzd29yZEZpZWxkO1xyXG4gICAgcmVQYXNzd29yZDogU2lnbnVwUGFzc3dvcmRGaWVsZDtcclxuICAgIHN1Ym1pdDogU2lnbnVwU3VibWl0O1xyXG4gICAgZm9vdGVyPzogU2lnbnVwRm9vdGVyO1xyXG4gIH07XHJcbiAgZm9yZ290UGFzc3dvcmQ/OiB7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgZW1haWw6IFNpZ251cEZpZWxkO1xyXG4gICAgc3VibWl0OiBTaWdudXBTdWJtaXQ7XHJcbiAgICBmb290ZXI/OiBTaWdudXBGb290ZXI7XHJcbiAgfTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1zaWdudXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWdudXAuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ251cENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogU2lnbnVwRGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBvbkNsaWNrKHBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZShpbnB1dFBheWxvYWQsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7IGlucHV0UGF5bG9hZCwgdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBvbklucHV0RW50ZXIoaW5wdXRQYXlsb2FkLCB2YWx1ZSkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnZW50ZXInLCB7IGlucHV0UGF5bG9hZCwgdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzKHBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2ZvY3VzJywgcGF5bG9hZCk7XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzT3V0KHBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2ZvY3Vzb3V0JywgcGF5bG9hZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==