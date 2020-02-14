/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWFqRCwyQkFRQzs7O0lBUEMsMEJBQVc7O0lBQ1gsNkJBQWM7O0lBQ2QsaUNBQXlDOztJQUN6QywrQkFBYTs7SUFDYiw2QkFBZTs7SUFDZiw0QkFBYzs7SUFDZCwrQkFBaUI7Ozs7Ozs7O0FBUW5CLG1DQU1DOzs7SUFMQyxvQ0FJQzs7Ozs7Ozs7Ozs7QUFXSCw0QkFLQzs7O0lBSkMsOEJBQWM7O0lBQ2QsZ0NBQWE7O0lBQ2IsOEJBQWU7O0lBQ2YsZ0NBQWlCOzs7Ozs7Ozs7O0FBVW5CLDRCQU9DOzs7SUFOQyw4QkFBYzs7SUFDZCwrQkFHQzs7SUFDRCxnQ0FBaUI7Ozs7Ozs7Ozs7O0FBV25CLGlDQTBCQzs7O0lBekJDLDRCQVVFOztJQUNGLDZCQU9FOztJQUNGLHFDQUtDOztBQUdIO0lBQUE7SUFnQ0EsQ0FBQzs7Ozs7SUF4QkMsaUNBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDYixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUVELGtDQUFROzs7OztJQUFSLFVBQVMsWUFBWSxFQUFFLEtBQUs7UUFDMUIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksY0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7Ozs7SUFFRCxzQ0FBWTs7Ozs7SUFBWixVQUFhLFlBQVksRUFBRSxLQUFLO1FBQzlCLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxZQUFZLGNBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFRCxpQ0FBTzs7OztJQUFQLFVBQVEsT0FBTztRQUNiLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxvQ0FBVTs7OztJQUFWLFVBQVcsT0FBTztRQUNoQixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dCQS9CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLHMxTUFBNEI7aUJBQzdCOzs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLOztJQTBCUixzQkFBQztDQUFBLEFBaENELElBZ0NDO1NBNUJZLGVBQWU7OztJQUMxQiwrQkFBMkI7O0lBQzNCLCtCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFNJR05VUC50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgU2lnbnVwIGZpZWxkXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBpZCAoTSlcclxuICogQHByb3BlcnR5IGxhYmVsIChNKVxyXG4gKiBAcHJvcGVydHkgaW5wdXRUeXBlIChNKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAoTSlcclxuICogQHByb3BlcnR5IGVycm9yIChPKVxyXG4gKiBAcHJvcGVydHkgaGludCAoTylcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKE8pXHJcbiAqL1xyXG5pbnRlcmZhY2UgSVNpZ251cEZpZWxkIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgaW5wdXRUeXBlOiAncGFzc3dvcmQnIHwgJ3RleHQnIHwgJ2VtYWlsJztcclxuICBwYXlsb2FkOiBhbnk7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbiAgaGludD86IHN0cmluZztcclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBTaWdudXAgcGFzc3dvcmQgZmllbGQgKGV4dGVuZHMgSVNpZ251cEZpZWxkKVxyXG4gKlxyXG4gKiBAcHJvcGVydHkgc2hvdyAoTylcclxuICovXHJcbmludGVyZmFjZSBJU2lnbnVwUGFzc3dvcmRGaWVsZCBleHRlbmRzIElTaWdudXBGaWVsZCB7XHJcbiAgc2hvdz86IHtcclxuICAgIGljb246IHN0cmluZztcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBwYXlsb2FkOiBhbnk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBTaWdudXAgc3VibWl0XHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBsYWJlbCAoTSlcclxuICogQHByb3BlcnR5IHBheWxvYWQgKE0pXHJcbiAqIEBwcm9wZXJ0eSBlcnJvciAoTylcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKE8pXHJcbiAqL1xyXG5pbnRlcmZhY2UgSVNpZ251cFN1Ym1pdCB7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBwYXlsb2FkOiBhbnk7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgU2lnbnVwIGZvb3RlclxyXG4gKlxyXG4gKiBAcHJvcGVydHkgbGFiZWwgKE0pXHJcbiAqIEBwcm9wZXJ0eSBhY3Rpb24gKE0pXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChPKVxyXG4gKi9cclxuaW50ZXJmYWNlIElTaWdudXBGb290ZXIge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgYWN0aW9uOiB7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgcGF5bG9hZDogYW55O1xyXG4gIH1cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBTaWdudXAgZGF0YVxyXG4gKiBsb2dpbi9zaWdudXAvZm9yZ290UGFzc3dvcmQgZ3JvdXBzXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBsb2dpbiAoTylcclxuICogQHByb3BlcnR5IHNpZ251cCAoTylcclxuICogQHByb3BlcnR5IGZvcmdvdFBhc3N3b3JkIChPKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU2lnbnVwRGF0YSB7XHJcbiAgbG9naW4/OiB7XHJcbiAgICBlbWFpbDogSVNpZ251cEZpZWxkO1xyXG4gICAgcGFzc3dvcmQ6IElTaWdudXBQYXNzd29yZEZpZWxkO1xyXG4gICAgZm9yZ290UGFzc3dvcmQ/OiB7XHJcbiAgICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICAgIHBheWxvYWQ6IGFueTtcclxuICAgIH07XHJcbiAgICBzdWJtaXQ6IElTaWdudXBTdWJtaXQ7XHJcbiAgICBmb290ZXI/OiBJU2lnbnVwRm9vdGVyO1xyXG4gIH07XHJcbiAgc2lnbnVwPzoge1xyXG4gICAgbmFtZTogSVNpZ251cEZpZWxkO1xyXG4gICAgZW1haWw6IElTaWdudXBGaWVsZDtcclxuICAgIHBhc3N3b3JkOiBJU2lnbnVwUGFzc3dvcmRGaWVsZDtcclxuICAgIHJlUGFzc3dvcmQ6IElTaWdudXBQYXNzd29yZEZpZWxkO1xyXG4gICAgc3VibWl0OiBJU2lnbnVwU3VibWl0O1xyXG4gICAgZm9vdGVyPzogSVNpZ251cEZvb3RlcjtcclxuICB9O1xyXG4gIGZvcmdvdFBhc3N3b3JkPzoge1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGVtYWlsOiBJU2lnbnVwRmllbGQ7XHJcbiAgICBzdWJtaXQ6IElTaWdudXBTdWJtaXQ7XHJcbiAgICBmb290ZXI/OiBJU2lnbnVwRm9vdGVyO1xyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1zaWdudXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWdudXAuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ251cENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogSVNpZ251cERhdGE7XHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBvbkNsaWNrKHBheWxvYWQpe1xyXG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UoaW5wdXRQYXlsb2FkLCB2YWx1ZSl7XHJcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgaW5wdXRQYXlsb2FkLCB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIG9uSW5wdXRFbnRlcihpbnB1dFBheWxvYWQsIHZhbHVlKXtcclxuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnZW50ZXInLCB7IGlucHV0UGF5bG9hZCwgdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzKHBheWxvYWQpe1xyXG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdmb2N1cycsIHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgb25Gb2N1c091dChwYXlsb2FkKXtcclxuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnZm9jdXNvdXQnLCBwYXlsb2FkKTtcclxuICB9XHJcbn0iXX0=