/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "<!-- Signup: login -->\n<section *ngIf=\"data && data.login\" class=\"n7-signup n7-signup--login\">\n    <form class=\"n7-signup__form\" novalidate>\n        <ng-container *ngTemplateOutlet=\"field; context: { $implicit: data.login.email }\"></ng-container>\n        <ng-container *ngTemplateOutlet=\"\n        passwordField;\n        context: { $implicit: data.login.password }\n      \"></ng-container>\n        <div *ngIf=\"data.login.forgotPassword\" class=\"n7-signup__form-item n7-signup__form-item-forgot-password\">\n            <a (click)=\"onClick(data.login.forgotPassword.payload)\" title=\"{{ data.login.forgotPassword.title }}\"\n                [attr.aria-label]=\"data.login.forgotPassword.title\">{{ data.login.forgotPassword.label }}</a>\n        </div>\n        <ng-container *ngTemplateOutlet=\"submit; context: { $implicit: data.login.submit }\"></ng-container>\n    </form>\n    <ng-container *ngTemplateOutlet=\"footer; context: { $implicit: data.login.footer }\"></ng-container>\n</section>\n\n<!-- Signup: signup -->\n<section *ngIf=\"data && data.signup\" class=\"n7-signup n7-signup--signup\">\n    <form class=\"n7-signup__form\" novalidate>\n        <ng-container *ngTemplateOutlet=\"field; context: { $implicit: data.signup.name }\"></ng-container>\n        <ng-container *ngTemplateOutlet=\"field; context: { $implicit: data.signup.email }\"></ng-container>\n        <ng-container *ngTemplateOutlet=\"\n        passwordField;\n        context: { $implicit: data.signup.password }\n      \"></ng-container>\n        <ng-container *ngTemplateOutlet=\"\n        passwordField;\n        context: { $implicit: data.signup.rePassword }\n      \"></ng-container>\n        <ng-container *ngTemplateOutlet=\"submit; context: { $implicit: data.signup.submit }\"></ng-container>\n    </form>\n    <ng-container *ngTemplateOutlet=\"footer; context: { $implicit: data.signup.footer }\"></ng-container>\n</section>\n\n<!-- Signup: forgot password -->\n<section *ngIf=\"data && data.forgotPassword\" class=\"n7-signup n7-signup--forgot-password\">\n    <p class=\"n7-signup__text\">\n        {{ data.forgotPassword.description }}\n    </p>\n    <form class=\"n7-signup__form\" novalidate>\n        <ng-container *ngTemplateOutlet=\"\n        field;\n        context: { $implicit: data.forgotPassword.email }\n      \"></ng-container>\n\n        <ng-container *ngTemplateOutlet=\"\n        submit;\n        context: { $implicit: data.forgotPassword.submit }\n      \"></ng-container>\n\n      <!-- hidden submit button to prevent submit on enter -->\n      <button type=\"submit\" disabled style=\"display: none\" aria-hidden=\"true\"></button>\n    </form>\n    <ng-container *ngTemplateOutlet=\"\n      footer;\n      context: { $implicit: data.forgotPassword.footer }\n    \"></ng-container>\n</section>\n\n<!-- Template: field -->\n<ng-template #field let-field>\n    <div [ngClass]=\"{\n      'has-error': field.error,\n      'has-hint': field.hint\n    }\" class=\"n7-signup__form-item {{ field.classes || '' }}\">\n        <label class=\"n7-signup__form-item-label\" for=\"{{ field.id }}\">{{\n      field.label\n    }}</label>\n        <div *ngIf=\"field.hint\" class=\"n7-signup__form-item-hint\">\n            {{ field.hint }}\n        </div>\n        <div class=\"n7-signup__input-wrapper\">\n            <input (focus)=\"onFocus(field.payload)\" (focusout)=\"onFocusOut(field.payload)\"\n                (keyup.enter)=\"onInputEnter(field.payload, $event.target.value)\"\n                (input)=\"onChange(field.payload, $event.target.value)\" class=\"n7-signup__form-item-input\"\n                type=\"{{ field.inputType }}\" id=\"{{ field.id }}\" />\n        </div>\n        <div *ngIf=\"field.error\" class=\"n7-signup__form-error\">\n            {{ field.error }}\n        </div>\n    </div>\n</ng-template>\n\n<!-- Template: password-field -->\n<ng-template #passwordField let-field>\n    <div [ngClass]=\"{\n      'has-error': field.error,\n      'has-hint': field.hint\n    }\" class=\"n7-signup__form-item {{ field.classes || '' }}\">\n        <label class=\"n7-signup__form-item-label\" for=\"{{ field.id }}\">{{\n      field.label\n    }}</label>\n        <div *ngIf=\"field.hint\" class=\"n7-signup__form-item-hint\">\n            {{ field.hint }}\n        </div>\n        <div class=\"n7-signup__input-wrapper\">\n            <input (focus)=\"onFocus(field.payload)\" (focusout)=\"onFocusOut(field.payload)\"\n                (keyup.enter)=\"onInputEnter(field.payload, $event.target.value)\"\n                (input)=\"onChange(field.payload, $event.target.value)\" class=\"n7-signup__form-item-input\"\n                type=\"{{ field.inputType }}\" id=\"{{ field.id }}\" />\n            <button *ngIf=\"field.show\" type=\"button\" (click)=\"onClick(field.show.payload)\"\n                [attr.aria-label]=\"field.show.label\" class=\"n7-signup__form-item-show-password\">\n                <i [attr.aria-label]=\"field.show.label\" class=\"{{ field.show.icon }}\"></i>\n            </button>\n        </div>\n        <div *ngIf=\"field.error\" class=\"n7-signup__form-error\">\n            {{ field.error }}\n        </div>\n    </div>\n</ng-template>\n\n<!-- Template: footer -->\n<ng-template #footer let-footer>\n    <footer *ngIf=\"footer\" class=\"n7-signup__footer {{ footer.classes || '' }}\">\n        <div class=\"n7-signup__footer-text\">{{ footer.label }}</div>\n        <a *ngIf=\"footer.action\" (click)=\"onClick(footer.action.payload)\" title=\"{{ footer.action.label }}\"\n            class=\"n7-btn\">{{ footer.action.label }}</a>\n    </footer>\n</ng-template>\n\n<!-- Template: submit button -->\n<ng-template #submit let-submit>\n    <div [ngClass]=\"{\n      'has-error': submit.error\n    }\" class=\"n7-signup__form-item n7-signup__form-item-action {{\n      submit.classes || ''\n    }}\">\n        <button type=\"button\" (click)=\"onClick(submit.payload)\" [attr.aria-label]=\"submit.label\"\n            class=\"n7-btn n7-btn-cta\">\n            {{ submit.label }}\n        </button>\n        <div *ngIf=\"submit.error\" class=\"n7-signup__form-error\">\n            {{ submit.error }}\n        </div>\n    </div>\n</ng-template>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWFqRCwyQkFRQzs7O0lBUEMsMEJBQVc7O0lBQ1gsNkJBQWM7O0lBQ2QsaUNBQXlDOztJQUN6QywrQkFBYTs7SUFDYiw2QkFBZTs7SUFDZiw0QkFBYzs7SUFDZCwrQkFBaUI7Ozs7Ozs7O0FBUW5CLG1DQU1DOzs7SUFMQyxvQ0FJQzs7Ozs7Ozs7Ozs7QUFXSCw0QkFLQzs7O0lBSkMsOEJBQWM7O0lBQ2QsZ0NBQWE7O0lBQ2IsOEJBQWU7O0lBQ2YsZ0NBQWlCOzs7Ozs7Ozs7O0FBVW5CLDRCQU9DOzs7SUFOQyw4QkFBYzs7SUFDZCwrQkFHQzs7SUFDRCxnQ0FBaUI7Ozs7Ozs7Ozs7O0FBV25CLGlDQTBCQzs7O0lBekJDLDRCQVVFOztJQUNGLDZCQU9FOztJQUNGLHFDQUtDOztBQUdIO0lBQUE7SUFnQ0EsQ0FBQzs7Ozs7SUF4QkMsaUNBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDYixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUVELGtDQUFROzs7OztJQUFSLFVBQVMsWUFBWSxFQUFFLEtBQUs7UUFDMUIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksY0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7Ozs7SUFFRCxzQ0FBWTs7Ozs7SUFBWixVQUFhLFlBQVksRUFBRSxLQUFLO1FBQzlCLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxZQUFZLGNBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFRCxpQ0FBTzs7OztJQUFQLFVBQVEsT0FBTztRQUNiLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxvQ0FBVTs7OztJQUFWLFVBQVcsT0FBTztRQUNoQixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dCQS9CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLHNrTUFBNEI7aUJBQzdCOzs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLOztJQTBCUixzQkFBQztDQUFBLEFBaENELElBZ0NDO1NBNUJZLGVBQWU7OztJQUMxQiwrQkFBMkI7O0lBQzNCLCtCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTSUdOVVAudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFNpZ251cCBmaWVsZFxuICpcbiAqIEBwcm9wZXJ0eSBpZCAoTSlcbiAqIEBwcm9wZXJ0eSBsYWJlbCAoTSlcbiAqIEBwcm9wZXJ0eSBpbnB1dFR5cGUgKE0pXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAoTSlcbiAqIEBwcm9wZXJ0eSBlcnJvciAoTylcbiAqIEBwcm9wZXJ0eSBoaW50IChPKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKE8pXG4gKi9cbmludGVyZmFjZSBJU2lnbnVwRmllbGQge1xuICBpZDogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBpbnB1dFR5cGU6ICdwYXNzd29yZCcgfCAndGV4dCcgfCAnZW1haWwnO1xuICBwYXlsb2FkOiBhbnk7XG4gIGVycm9yPzogc3RyaW5nO1xuICBoaW50Pzogc3RyaW5nO1xuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgU2lnbnVwIHBhc3N3b3JkIGZpZWxkIChleHRlbmRzIElTaWdudXBGaWVsZClcbiAqXG4gKiBAcHJvcGVydHkgc2hvdyAoTylcbiAqL1xuaW50ZXJmYWNlIElTaWdudXBQYXNzd29yZEZpZWxkIGV4dGVuZHMgSVNpZ251cEZpZWxkIHtcbiAgc2hvdz86IHtcbiAgICBpY29uOiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBwYXlsb2FkOiBhbnk7XG4gIH1cbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFNpZ251cCBzdWJtaXRcbiAqXG4gKiBAcHJvcGVydHkgbGFiZWwgKE0pXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAoTSlcbiAqIEBwcm9wZXJ0eSBlcnJvciAoTylcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChPKVxuICovXG5pbnRlcmZhY2UgSVNpZ251cFN1Ym1pdCB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHBheWxvYWQ6IGFueTtcbiAgZXJyb3I/OiBzdHJpbmc7XG4gIGNsYXNzZXM/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBTaWdudXAgZm9vdGVyXG4gKlxuICogQHByb3BlcnR5IGxhYmVsIChNKVxuICogQHByb3BlcnR5IGFjdGlvbiAoTSlcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChPKVxuICovXG5pbnRlcmZhY2UgSVNpZ251cEZvb3RlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGFjdGlvbjoge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgcGF5bG9hZDogYW55O1xuICB9XG4gIGNsYXNzZXM/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBTaWdudXAgZGF0YVxuICogbG9naW4vc2lnbnVwL2ZvcmdvdFBhc3N3b3JkIGdyb3Vwc1xuICpcbiAqIEBwcm9wZXJ0eSBsb2dpbiAoTylcbiAqIEBwcm9wZXJ0eSBzaWdudXAgKE8pXG4gKiBAcHJvcGVydHkgZm9yZ290UGFzc3dvcmQgKE8pXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVNpZ251cERhdGEge1xuICBsb2dpbj86IHtcbiAgICBlbWFpbDogSVNpZ251cEZpZWxkO1xuICAgIHBhc3N3b3JkOiBJU2lnbnVwUGFzc3dvcmRGaWVsZDtcbiAgICBmb3Jnb3RQYXNzd29yZD86IHtcbiAgICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgICBsYWJlbDogc3RyaW5nO1xuICAgICAgcGF5bG9hZDogYW55O1xuICAgIH07XG4gICAgc3VibWl0OiBJU2lnbnVwU3VibWl0O1xuICAgIGZvb3Rlcj86IElTaWdudXBGb290ZXI7XG4gIH07XG4gIHNpZ251cD86IHtcbiAgICBuYW1lOiBJU2lnbnVwRmllbGQ7XG4gICAgZW1haWw6IElTaWdudXBGaWVsZDtcbiAgICBwYXNzd29yZDogSVNpZ251cFBhc3N3b3JkRmllbGQ7XG4gICAgcmVQYXNzd29yZDogSVNpZ251cFBhc3N3b3JkRmllbGQ7XG4gICAgc3VibWl0OiBJU2lnbnVwU3VibWl0O1xuICAgIGZvb3Rlcj86IElTaWdudXBGb290ZXI7XG4gIH07XG4gIGZvcmdvdFBhc3N3b3JkPzoge1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgZW1haWw6IElTaWdudXBGaWVsZDtcbiAgICBzdWJtaXQ6IElTaWdudXBTdWJtaXQ7XG4gICAgZm9vdGVyPzogSVNpZ251cEZvb3RlcjtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1zaWdudXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lnbnVwLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNpZ251cENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElTaWdudXBEYXRhO1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DbGljayhwYXlsb2FkKXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG5cbiAgb25DaGFuZ2UoaW5wdXRQYXlsb2FkLCB2YWx1ZSl7XG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgeyBpbnB1dFBheWxvYWQsIHZhbHVlIH0pO1xuICB9XG5cbiAgb25JbnB1dEVudGVyKGlucHV0UGF5bG9hZCwgdmFsdWUpe1xuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2VudGVyJywgeyBpbnB1dFBheWxvYWQsIHZhbHVlIH0pO1xuICB9XG5cbiAgb25Gb2N1cyhwYXlsb2FkKXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdmb2N1cycsIHBheWxvYWQpO1xuICB9XG5cbiAgb25Gb2N1c091dChwYXlsb2FkKXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdmb2N1c291dCcsIHBheWxvYWQpO1xuICB9XG59Il19