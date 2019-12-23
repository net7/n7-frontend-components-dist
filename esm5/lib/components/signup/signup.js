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
function ISignupField() { }
if (false) {
    /** @type {?} */
    ISignupField.prototype.id;
    /** @type {?} */
    ISignupField.prototype.label;
    /** @type {?} */
    ISignupField.prototype.inputType;
    /** @type {?} */
    ISignupField.prototype.payload;
    /** @type {?|undefined} */
    ISignupField.prototype.error;
    /** @type {?|undefined} */
    ISignupField.prototype.hint;
    /** @type {?|undefined} */
    ISignupField.prototype.classes;
}
/**
 * Interface for Signup password field (extends ISignupField)
 *
 * \@property show (O)
 * @record
 */
function ISignupPasswordField() { }
if (false) {
    /** @type {?|undefined} */
    ISignupPasswordField.prototype.show;
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
function ISignupSubmit() { }
if (false) {
    /** @type {?} */
    ISignupSubmit.prototype.label;
    /** @type {?} */
    ISignupSubmit.prototype.payload;
    /** @type {?|undefined} */
    ISignupSubmit.prototype.error;
    /** @type {?|undefined} */
    ISignupSubmit.prototype.classes;
}
/**
 * Interface for Signup footer
 *
 * \@property label (M)
 * \@property action (M)
 * \@property classes (O)
 * @record
 */
function ISignupFooter() { }
if (false) {
    /** @type {?} */
    ISignupFooter.prototype.label;
    /** @type {?} */
    ISignupFooter.prototype.action;
    /** @type {?|undefined} */
    ISignupFooter.prototype.classes;
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
export function ISignupData() { }
if (false) {
    /** @type {?|undefined} */
    ISignupData.prototype.login;
    /** @type {?|undefined} */
    ISignupData.prototype.signup;
    /** @type {?|undefined} */
    ISignupData.prototype.forgotPassword;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhakQsMkJBUUM7OztJQVBDLDBCQUFXOztJQUNYLDZCQUFjOztJQUNkLGlDQUF5Qzs7SUFDekMsK0JBQWE7O0lBQ2IsNkJBQWU7O0lBQ2YsNEJBQWM7O0lBQ2QsK0JBQWlCOzs7Ozs7OztBQVFuQixtQ0FNQzs7O0lBTEMsb0NBSUM7Ozs7Ozs7Ozs7O0FBV0gsNEJBS0M7OztJQUpDLDhCQUFjOztJQUNkLGdDQUFhOztJQUNiLDhCQUFlOztJQUNmLGdDQUFpQjs7Ozs7Ozs7OztBQVVuQiw0QkFPQzs7O0lBTkMsOEJBQWM7O0lBQ2QsK0JBR0M7O0lBQ0QsZ0NBQWlCOzs7Ozs7Ozs7OztBQVduQixpQ0EwQkM7OztJQXpCQyw0QkFVRTs7SUFDRiw2QkFPRTs7SUFDRixxQ0FLQzs7QUFHSDtJQUFBO0lBZ0NBLENBQUM7Ozs7O0lBeEJDLGlDQUFPOzs7O0lBQVAsVUFBUSxPQUFPO1FBQ2IsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFRCxrQ0FBUTs7Ozs7SUFBUixVQUFTLFlBQVksRUFBRSxLQUFLO1FBQzFCLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLGNBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7O0lBRUQsc0NBQVk7Ozs7O0lBQVosVUFBYSxZQUFZLEVBQUUsS0FBSztRQUM5QixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsWUFBWSxjQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRUQsaUNBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDYixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsb0NBQVU7Ozs7SUFBVixVQUFXLE9BQU87UUFDaEIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkEvQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixzMU1BQTRCO2lCQUM3Qjs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUEwQlIsc0JBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQTVCWSxlQUFlOzs7SUFDMUIsK0JBQTJCOztJQUMzQiwrQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBTSUdOVVAudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIFNpZ251cCBmaWVsZFxyXG4gKlxyXG4gKiBAcHJvcGVydHkgaWQgKE0pXHJcbiAqIEBwcm9wZXJ0eSBsYWJlbCAoTSlcclxuICogQHByb3BlcnR5IGlucHV0VHlwZSAoTSlcclxuICogQHByb3BlcnR5IHBheWxvYWQgKE0pXHJcbiAqIEBwcm9wZXJ0eSBlcnJvciAoTylcclxuICogQHByb3BlcnR5IGhpbnQgKE8pXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChPKVxyXG4gKi9cclxuaW50ZXJmYWNlIElTaWdudXBGaWVsZCB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIGlucHV0VHlwZTogJ3Bhc3N3b3JkJyB8ICd0ZXh0JyB8ICdlbWFpbCc7XHJcbiAgcGF5bG9hZDogYW55O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG4gIGhpbnQ/OiBzdHJpbmc7XHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgU2lnbnVwIHBhc3N3b3JkIGZpZWxkIChleHRlbmRzIElTaWdudXBGaWVsZClcclxuICpcclxuICogQHByb3BlcnR5IHNob3cgKE8pXHJcbiAqL1xyXG5pbnRlcmZhY2UgSVNpZ251cFBhc3N3b3JkRmllbGQgZXh0ZW5kcyBJU2lnbnVwRmllbGQge1xyXG4gIHNob3c/OiB7XHJcbiAgICBpY29uOiBzdHJpbmc7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgcGF5bG9hZDogYW55O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgU2lnbnVwIHN1Ym1pdFxyXG4gKlxyXG4gKiBAcHJvcGVydHkgbGFiZWwgKE0pXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChNKVxyXG4gKiBAcHJvcGVydHkgZXJyb3IgKE8pXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChPKVxyXG4gKi9cclxuaW50ZXJmYWNlIElTaWdudXBTdWJtaXQge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgcGF5bG9hZDogYW55O1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIFNpZ251cCBmb290ZXJcclxuICpcclxuICogQHByb3BlcnR5IGxhYmVsIChNKVxyXG4gKiBAcHJvcGVydHkgYWN0aW9uIChNKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAoTylcclxuICovXHJcbmludGVyZmFjZSBJU2lnbnVwRm9vdGVyIHtcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIGFjdGlvbjoge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIHBheWxvYWQ6IGFueTtcclxuICB9XHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgU2lnbnVwIGRhdGFcclxuICogbG9naW4vc2lnbnVwL2ZvcmdvdFBhc3N3b3JkIGdyb3Vwc1xyXG4gKlxyXG4gKiBAcHJvcGVydHkgbG9naW4gKE8pXHJcbiAqIEBwcm9wZXJ0eSBzaWdudXAgKE8pXHJcbiAqIEBwcm9wZXJ0eSBmb3Jnb3RQYXNzd29yZCAoTylcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNpZ251cERhdGEge1xyXG4gIGxvZ2luPzoge1xyXG4gICAgZW1haWw6IElTaWdudXBGaWVsZDtcclxuICAgIHBhc3N3b3JkOiBJU2lnbnVwUGFzc3dvcmRGaWVsZDtcclxuICAgIGZvcmdvdFBhc3N3b3JkPzoge1xyXG4gICAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgICBwYXlsb2FkOiBhbnk7XHJcbiAgICB9O1xyXG4gICAgc3VibWl0OiBJU2lnbnVwU3VibWl0O1xyXG4gICAgZm9vdGVyPzogSVNpZ251cEZvb3RlcjtcclxuICB9O1xyXG4gIHNpZ251cD86IHtcclxuICAgIG5hbWU6IElTaWdudXBGaWVsZDtcclxuICAgIGVtYWlsOiBJU2lnbnVwRmllbGQ7XHJcbiAgICBwYXNzd29yZDogSVNpZ251cFBhc3N3b3JkRmllbGQ7XHJcbiAgICByZVBhc3N3b3JkOiBJU2lnbnVwUGFzc3dvcmRGaWVsZDtcclxuICAgIHN1Ym1pdDogSVNpZ251cFN1Ym1pdDtcclxuICAgIGZvb3Rlcj86IElTaWdudXBGb290ZXI7XHJcbiAgfTtcclxuICBmb3Jnb3RQYXNzd29yZD86IHtcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogSVNpZ251cEZpZWxkO1xyXG4gICAgc3VibWl0OiBJU2lnbnVwU3VibWl0O1xyXG4gICAgZm9vdGVyPzogSVNpZ251cEZvb3RlcjtcclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctc2lnbnVwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2lnbnVwLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IElTaWdudXBEYXRhO1xyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgb25DbGljayhwYXlsb2FkKXtcclxuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKGlucHV0UGF5bG9hZCwgdmFsdWUpe1xyXG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7IGlucHV0UGF5bG9hZCwgdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBvbklucHV0RW50ZXIoaW5wdXRQYXlsb2FkLCB2YWx1ZSl7XHJcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2VudGVyJywgeyBpbnB1dFBheWxvYWQsIHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgb25Gb2N1cyhwYXlsb2FkKXtcclxuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnZm9jdXMnLCBwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIG9uRm9jdXNPdXQocGF5bG9hZCl7XHJcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2ZvY3Vzb3V0JywgcGF5bG9hZCk7XHJcbiAgfVxyXG59Il19