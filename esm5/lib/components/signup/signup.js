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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhakQsMkJBUUM7OztJQVBDLDBCQUFXOztJQUNYLDZCQUFjOztJQUNkLGlDQUF5Qzs7SUFDekMsK0JBQWE7O0lBQ2IsNkJBQWU7O0lBQ2YsNEJBQWM7O0lBQ2QsK0JBQWlCOzs7Ozs7OztBQVFuQixtQ0FNQzs7O0lBTEMsb0NBSUM7Ozs7Ozs7Ozs7O0FBV0gsNEJBS0M7OztJQUpDLDhCQUFjOztJQUNkLGdDQUFhOztJQUNiLDhCQUFlOztJQUNmLGdDQUFpQjs7Ozs7Ozs7OztBQVVuQiw0QkFPQzs7O0lBTkMsOEJBQWM7O0lBQ2QsK0JBR0M7O0lBQ0QsZ0NBQWlCOzs7Ozs7Ozs7OztBQVduQixpQ0EwQkM7OztJQXpCQyw0QkFVRTs7SUFDRiw2QkFPRTs7SUFDRixxQ0FLQzs7QUFHSDtJQUFBO0lBZ0NBLENBQUM7Ozs7O0lBeEJDLGlDQUFPOzs7O0lBQVAsVUFBUSxPQUFPO1FBQ2IsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFRCxrQ0FBUTs7Ozs7SUFBUixVQUFTLFlBQVksRUFBRSxLQUFLO1FBQzFCLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLGNBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7O0lBRUQsc0NBQVk7Ozs7O0lBQVosVUFBYSxZQUFZLEVBQUUsS0FBSztRQUM5QixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsWUFBWSxjQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRUQsaUNBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDYixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsb0NBQVU7Ozs7SUFBVixVQUFXLE9BQU87UUFDaEIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkEvQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixza01BQTRCO2lCQUM3Qjs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUEwQlIsc0JBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQTVCWSxlQUFlOzs7SUFDMUIsK0JBQTJCOztJQUMzQiwrQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU0lHTlVQLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBTaWdudXAgZmllbGRcbiAqXG4gKiBAcHJvcGVydHkgaWQgKE0pXG4gKiBAcHJvcGVydHkgbGFiZWwgKE0pXG4gKiBAcHJvcGVydHkgaW5wdXRUeXBlIChNKVxuICogQHByb3BlcnR5IHBheWxvYWQgKE0pXG4gKiBAcHJvcGVydHkgZXJyb3IgKE8pXG4gKiBAcHJvcGVydHkgaGludCAoTylcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChPKVxuICovXG5pbnRlcmZhY2UgSVNpZ251cEZpZWxkIHtcbiAgaWQ6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgaW5wdXRUeXBlOiAncGFzc3dvcmQnIHwgJ3RleHQnIHwgJ2VtYWlsJztcbiAgcGF5bG9hZDogYW55O1xuICBlcnJvcj86IHN0cmluZztcbiAgaGludD86IHN0cmluZztcbiAgY2xhc3Nlcz86IHN0cmluZztcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFNpZ251cCBwYXNzd29yZCBmaWVsZCAoZXh0ZW5kcyBJU2lnbnVwRmllbGQpXG4gKlxuICogQHByb3BlcnR5IHNob3cgKE8pXG4gKi9cbmludGVyZmFjZSBJU2lnbnVwUGFzc3dvcmRGaWVsZCBleHRlbmRzIElTaWdudXBGaWVsZCB7XG4gIHNob3c/OiB7XG4gICAgaWNvbjogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgcGF5bG9hZDogYW55O1xuICB9XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBTaWdudXAgc3VibWl0XG4gKlxuICogQHByb3BlcnR5IGxhYmVsIChNKVxuICogQHByb3BlcnR5IHBheWxvYWQgKE0pXG4gKiBAcHJvcGVydHkgZXJyb3IgKE8pXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAoTylcbiAqL1xuaW50ZXJmYWNlIElTaWdudXBTdWJtaXQge1xuICBsYWJlbDogc3RyaW5nO1xuICBwYXlsb2FkOiBhbnk7XG4gIGVycm9yPzogc3RyaW5nO1xuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgU2lnbnVwIGZvb3RlclxuICpcbiAqIEBwcm9wZXJ0eSBsYWJlbCAoTSlcbiAqIEBwcm9wZXJ0eSBhY3Rpb24gKE0pXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAoTylcbiAqL1xuaW50ZXJmYWNlIElTaWdudXBGb290ZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBhY3Rpb246IHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHBheWxvYWQ6IGFueTtcbiAgfVxuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgU2lnbnVwIGRhdGFcbiAqIGxvZ2luL3NpZ251cC9mb3Jnb3RQYXNzd29yZCBncm91cHNcbiAqXG4gKiBAcHJvcGVydHkgbG9naW4gKE8pXG4gKiBAcHJvcGVydHkgc2lnbnVwIChPKVxuICogQHByb3BlcnR5IGZvcmdvdFBhc3N3b3JkIChPKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElTaWdudXBEYXRhIHtcbiAgbG9naW4/OiB7XG4gICAgZW1haWw6IElTaWdudXBGaWVsZDtcbiAgICBwYXNzd29yZDogSVNpZ251cFBhc3N3b3JkRmllbGQ7XG4gICAgZm9yZ290UGFzc3dvcmQ/OiB7XG4gICAgICB0aXRsZTogc3RyaW5nO1xuICAgICAgbGFiZWw6IHN0cmluZztcbiAgICAgIHBheWxvYWQ6IGFueTtcbiAgICB9O1xuICAgIHN1Ym1pdDogSVNpZ251cFN1Ym1pdDtcbiAgICBmb290ZXI/OiBJU2lnbnVwRm9vdGVyO1xuICB9O1xuICBzaWdudXA/OiB7XG4gICAgbmFtZTogSVNpZ251cEZpZWxkO1xuICAgIGVtYWlsOiBJU2lnbnVwRmllbGQ7XG4gICAgcGFzc3dvcmQ6IElTaWdudXBQYXNzd29yZEZpZWxkO1xuICAgIHJlUGFzc3dvcmQ6IElTaWdudXBQYXNzd29yZEZpZWxkO1xuICAgIHN1Ym1pdDogSVNpZ251cFN1Ym1pdDtcbiAgICBmb290ZXI/OiBJU2lnbnVwRm9vdGVyO1xuICB9O1xuICBmb3Jnb3RQYXNzd29yZD86IHtcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGVtYWlsOiBJU2lnbnVwRmllbGQ7XG4gICAgc3VibWl0OiBJU2lnbnVwU3VibWl0O1xuICAgIGZvb3Rlcj86IElTaWdudXBGb290ZXI7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctc2lnbnVwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZ251cC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJU2lnbnVwRGF0YTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2xpY2socGF5bG9hZCl7XG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGlucHV0UGF5bG9hZCwgdmFsdWUpe1xuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgaW5wdXRQYXlsb2FkLCB2YWx1ZSB9KTtcbiAgfVxuXG4gIG9uSW5wdXRFbnRlcihpbnB1dFBheWxvYWQsIHZhbHVlKXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdlbnRlcicsIHsgaW5wdXRQYXlsb2FkLCB2YWx1ZSB9KTtcbiAgfVxuXG4gIG9uRm9jdXMocGF5bG9hZCl7XG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnZm9jdXMnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIG9uRm9jdXNPdXQocGF5bG9hZCl7XG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnZm9jdXNvdXQnLCBwYXlsb2FkKTtcbiAgfVxufSJdfQ==