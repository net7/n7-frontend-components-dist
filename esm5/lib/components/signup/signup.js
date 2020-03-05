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
var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    SignupComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    /**
     * @param {?} inputPayload
     * @param {?} value
     * @return {?}
     */
    SignupComponent.prototype.onChange = /**
     * @param {?} inputPayload
     * @param {?} value
     * @return {?}
     */
    function (inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload: inputPayload, value: value });
    };
    /**
     * @param {?} inputPayload
     * @param {?} value
     * @return {?}
     */
    SignupComponent.prototype.onInputEnter = /**
     * @param {?} inputPayload
     * @param {?} value
     * @return {?}
     */
    function (inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('enter', { inputPayload: inputPayload, value: value });
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    SignupComponent.prototype.onFocus = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('focus', payload);
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    SignupComponent.prototype.onFocusOut = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('focusout', payload);
    };
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
    return SignupComponent;
}());
export { SignupComponent };
if (false) {
    /** @type {?} */
    SignupComponent.prototype.data;
    /** @type {?} */
    SignupComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhakQsMEJBUUM7OztJQVBDLHlCQUFXOztJQUNYLDRCQUFjOztJQUNkLGdDQUF5Qzs7SUFDekMsOEJBQWE7O0lBQ2IsNEJBQWU7O0lBQ2YsMkJBQWM7O0lBQ2QsOEJBQWlCOzs7Ozs7OztBQVFuQixrQ0FNQzs7O0lBTEMsbUNBSUU7Ozs7Ozs7Ozs7O0FBV0osMkJBS0M7OztJQUpDLDZCQUFjOztJQUNkLCtCQUFhOztJQUNiLDZCQUFlOztJQUNmLCtCQUFpQjs7Ozs7Ozs7OztBQVVuQiwyQkFPQzs7O0lBTkMsNkJBQWM7O0lBQ2QsOEJBR0U7O0lBQ0YsK0JBQWlCOzs7Ozs7Ozs7OztBQVduQixnQ0EwQkM7OztJQXpCQywyQkFVRTs7SUFDRiw0QkFPRTs7SUFDRixvQ0FLRTs7QUFHSjtJQUFBO0lBaUNBLENBQUM7Ozs7O0lBeEJDLGlDQUFPOzs7O0lBQVAsVUFBUSxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFRCxrQ0FBUTs7Ozs7SUFBUixVQUFTLFlBQVksRUFBRSxLQUFLO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLGNBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7O0lBRUQsc0NBQVk7Ozs7O0lBQVosVUFBYSxZQUFZLEVBQUUsS0FBSztRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsWUFBWSxjQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRUQsaUNBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsb0NBQVU7Ozs7SUFBVixVQUFXLE9BQU87UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkFoQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixzMU1BQTRCO2lCQUM3Qjs7O3VCQUVFLEtBQUs7dUJBRUwsS0FBSzs7SUEwQlIsc0JBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQTdCWSxlQUFlOzs7SUFDMUIsK0JBQTBCOztJQUUxQiwrQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBTSUdOVVAudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIFNpZ251cCBmaWVsZFxyXG4gKlxyXG4gKiBAcHJvcGVydHkgaWQgKE0pXHJcbiAqIEBwcm9wZXJ0eSBsYWJlbCAoTSlcclxuICogQHByb3BlcnR5IGlucHV0VHlwZSAoTSlcclxuICogQHByb3BlcnR5IHBheWxvYWQgKE0pXHJcbiAqIEBwcm9wZXJ0eSBlcnJvciAoTylcclxuICogQHByb3BlcnR5IGhpbnQgKE8pXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChPKVxyXG4gKi9cclxuaW50ZXJmYWNlIFNpZ251cEZpZWxkIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgaW5wdXRUeXBlOiAncGFzc3dvcmQnIHwgJ3RleHQnIHwgJ2VtYWlsJztcclxuICBwYXlsb2FkOiBhbnk7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbiAgaGludD86IHN0cmluZztcclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBTaWdudXAgcGFzc3dvcmQgZmllbGQgKGV4dGVuZHMgU2lnbnVwRmllbGQpXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBzaG93IChPKVxyXG4gKi9cclxuaW50ZXJmYWNlIFNpZ251cFBhc3N3b3JkRmllbGQgZXh0ZW5kcyBTaWdudXBGaWVsZCB7XHJcbiAgc2hvdz86IHtcclxuICAgIGljb246IHN0cmluZztcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBwYXlsb2FkOiBhbnk7XHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgU2lnbnVwIHN1Ym1pdFxyXG4gKlxyXG4gKiBAcHJvcGVydHkgbGFiZWwgKE0pXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChNKVxyXG4gKiBAcHJvcGVydHkgZXJyb3IgKE8pXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChPKVxyXG4gKi9cclxuaW50ZXJmYWNlIFNpZ251cFN1Ym1pdCB7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBwYXlsb2FkOiBhbnk7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgU2lnbnVwIGZvb3RlclxyXG4gKlxyXG4gKiBAcHJvcGVydHkgbGFiZWwgKE0pXHJcbiAqIEBwcm9wZXJ0eSBhY3Rpb24gKE0pXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChPKVxyXG4gKi9cclxuaW50ZXJmYWNlIFNpZ251cEZvb3RlciB7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBhY3Rpb246IHtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBwYXlsb2FkOiBhbnk7XHJcbiAgfTtcclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBTaWdudXAgZGF0YVxyXG4gKiBsb2dpbi9zaWdudXAvZm9yZ290UGFzc3dvcmQgZ3JvdXBzXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBsb2dpbiAoTylcclxuICogQHByb3BlcnR5IHNpZ251cCAoTylcclxuICogQHByb3BlcnR5IGZvcmdvdFBhc3N3b3JkIChPKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTaWdudXBEYXRhIHtcclxuICBsb2dpbj86IHtcclxuICAgIGVtYWlsOiBTaWdudXBGaWVsZDtcclxuICAgIHBhc3N3b3JkOiBTaWdudXBQYXNzd29yZEZpZWxkO1xyXG4gICAgZm9yZ290UGFzc3dvcmQ/OiB7XHJcbiAgICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICAgIHBheWxvYWQ6IGFueTtcclxuICAgIH07XHJcbiAgICBzdWJtaXQ6IFNpZ251cFN1Ym1pdDtcclxuICAgIGZvb3Rlcj86IFNpZ251cEZvb3RlcjtcclxuICB9O1xyXG4gIHNpZ251cD86IHtcclxuICAgIG5hbWU6IFNpZ251cEZpZWxkO1xyXG4gICAgZW1haWw6IFNpZ251cEZpZWxkO1xyXG4gICAgcGFzc3dvcmQ6IFNpZ251cFBhc3N3b3JkRmllbGQ7XHJcbiAgICByZVBhc3N3b3JkOiBTaWdudXBQYXNzd29yZEZpZWxkO1xyXG4gICAgc3VibWl0OiBTaWdudXBTdWJtaXQ7XHJcbiAgICBmb290ZXI/OiBTaWdudXBGb290ZXI7XHJcbiAgfTtcclxuICBmb3Jnb3RQYXNzd29yZD86IHtcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogU2lnbnVwRmllbGQ7XHJcbiAgICBzdWJtaXQ6IFNpZ251cFN1Ym1pdDtcclxuICAgIGZvb3Rlcj86IFNpZ251cEZvb3RlcjtcclxuICB9O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LXNpZ251cCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZ251cC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBTaWdudXBEYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZCkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKGlucHV0UGF5bG9hZCwgdmFsdWUpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgaW5wdXRQYXlsb2FkLCB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIG9uSW5wdXRFbnRlcihpbnB1dFBheWxvYWQsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdlbnRlcicsIHsgaW5wdXRQYXlsb2FkLCB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIG9uRm9jdXMocGF5bG9hZCkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnZm9jdXMnLCBwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIG9uRm9jdXNPdXQocGF5bG9hZCkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnZm9jdXNvdXQnLCBwYXlsb2FkKTtcclxuICB9XHJcbn1cclxuIl19