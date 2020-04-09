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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhakQsMEJBUUM7OztJQVBDLHlCQUFXOztJQUNYLDRCQUFjOztJQUNkLGdDQUF5Qzs7SUFDekMsOEJBQWE7O0lBQ2IsNEJBQWU7O0lBQ2YsMkJBQWM7O0lBQ2QsOEJBQWlCOzs7Ozs7OztBQVFuQixrQ0FNQzs7O0lBTEMsbUNBSUU7Ozs7Ozs7Ozs7O0FBV0osMkJBS0M7OztJQUpDLDZCQUFjOztJQUNkLCtCQUFhOztJQUNiLDZCQUFlOztJQUNmLCtCQUFpQjs7Ozs7Ozs7OztBQVVuQiwyQkFPQzs7O0lBTkMsNkJBQWM7O0lBQ2QsOEJBR0U7O0lBQ0YsK0JBQWlCOzs7Ozs7Ozs7OztBQVduQixnQ0EwQkM7OztJQXpCQywyQkFVRTs7SUFDRiw0QkFPRTs7SUFDRixvQ0FLRTs7QUFHSjtJQUFBO0lBaUNBLENBQUM7Ozs7O0lBeEJDLGlDQUFPOzs7O0lBQVAsVUFBUSxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFRCxrQ0FBUTs7Ozs7SUFBUixVQUFTLFlBQVksRUFBRSxLQUFLO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLGNBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7O0lBRUQsc0NBQVk7Ozs7O0lBQVosVUFBYSxZQUFZLEVBQUUsS0FBSztRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsWUFBWSxjQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRUQsaUNBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsb0NBQVU7Ozs7SUFBVixVQUFXLE9BQU87UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkFoQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixza01BQTRCO2lCQUM3Qjs7O3VCQUVFLEtBQUs7dUJBRUwsS0FBSzs7SUEwQlIsc0JBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQTdCWSxlQUFlOzs7SUFDMUIsK0JBQTBCOztJQUUxQiwrQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU0lHTlVQLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBTaWdudXAgZmllbGRcbiAqXG4gKiBAcHJvcGVydHkgaWQgKE0pXG4gKiBAcHJvcGVydHkgbGFiZWwgKE0pXG4gKiBAcHJvcGVydHkgaW5wdXRUeXBlIChNKVxuICogQHByb3BlcnR5IHBheWxvYWQgKE0pXG4gKiBAcHJvcGVydHkgZXJyb3IgKE8pXG4gKiBAcHJvcGVydHkgaGludCAoTylcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChPKVxuICovXG5pbnRlcmZhY2UgU2lnbnVwRmllbGQge1xuICBpZDogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBpbnB1dFR5cGU6ICdwYXNzd29yZCcgfCAndGV4dCcgfCAnZW1haWwnO1xuICBwYXlsb2FkOiBhbnk7XG4gIGVycm9yPzogc3RyaW5nO1xuICBoaW50Pzogc3RyaW5nO1xuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgU2lnbnVwIHBhc3N3b3JkIGZpZWxkIChleHRlbmRzIFNpZ251cEZpZWxkKVxuICpcbiAqIEBwcm9wZXJ0eSBzaG93IChPKVxuICovXG5pbnRlcmZhY2UgU2lnbnVwUGFzc3dvcmRGaWVsZCBleHRlbmRzIFNpZ251cEZpZWxkIHtcbiAgc2hvdz86IHtcbiAgICBpY29uOiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBwYXlsb2FkOiBhbnk7XG4gIH07XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBTaWdudXAgc3VibWl0XG4gKlxuICogQHByb3BlcnR5IGxhYmVsIChNKVxuICogQHByb3BlcnR5IHBheWxvYWQgKE0pXG4gKiBAcHJvcGVydHkgZXJyb3IgKE8pXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAoTylcbiAqL1xuaW50ZXJmYWNlIFNpZ251cFN1Ym1pdCB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHBheWxvYWQ6IGFueTtcbiAgZXJyb3I/OiBzdHJpbmc7XG4gIGNsYXNzZXM/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBTaWdudXAgZm9vdGVyXG4gKlxuICogQHByb3BlcnR5IGxhYmVsIChNKVxuICogQHByb3BlcnR5IGFjdGlvbiAoTSlcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChPKVxuICovXG5pbnRlcmZhY2UgU2lnbnVwRm9vdGVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgYWN0aW9uOiB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBwYXlsb2FkOiBhbnk7XG4gIH07XG4gIGNsYXNzZXM/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBTaWdudXAgZGF0YVxuICogbG9naW4vc2lnbnVwL2ZvcmdvdFBhc3N3b3JkIGdyb3Vwc1xuICpcbiAqIEBwcm9wZXJ0eSBsb2dpbiAoTylcbiAqIEBwcm9wZXJ0eSBzaWdudXAgKE8pXG4gKiBAcHJvcGVydHkgZm9yZ290UGFzc3dvcmQgKE8pXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2lnbnVwRGF0YSB7XG4gIGxvZ2luPzoge1xuICAgIGVtYWlsOiBTaWdudXBGaWVsZDtcbiAgICBwYXNzd29yZDogU2lnbnVwUGFzc3dvcmRGaWVsZDtcbiAgICBmb3Jnb3RQYXNzd29yZD86IHtcbiAgICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgICBsYWJlbDogc3RyaW5nO1xuICAgICAgcGF5bG9hZDogYW55O1xuICAgIH07XG4gICAgc3VibWl0OiBTaWdudXBTdWJtaXQ7XG4gICAgZm9vdGVyPzogU2lnbnVwRm9vdGVyO1xuICB9O1xuICBzaWdudXA/OiB7XG4gICAgbmFtZTogU2lnbnVwRmllbGQ7XG4gICAgZW1haWw6IFNpZ251cEZpZWxkO1xuICAgIHBhc3N3b3JkOiBTaWdudXBQYXNzd29yZEZpZWxkO1xuICAgIHJlUGFzc3dvcmQ6IFNpZ251cFBhc3N3b3JkRmllbGQ7XG4gICAgc3VibWl0OiBTaWdudXBTdWJtaXQ7XG4gICAgZm9vdGVyPzogU2lnbnVwRm9vdGVyO1xuICB9O1xuICBmb3Jnb3RQYXNzd29yZD86IHtcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGVtYWlsOiBTaWdudXBGaWVsZDtcbiAgICBzdWJtaXQ6IFNpZ251cFN1Ym1pdDtcbiAgICBmb290ZXI/OiBTaWdudXBGb290ZXI7XG4gIH07XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LXNpZ251cCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWdudXAuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogU2lnbnVwRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DbGljayhwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cblxuICBvbkNoYW5nZShpbnB1dFBheWxvYWQsIHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgaW5wdXRQYXlsb2FkLCB2YWx1ZSB9KTtcbiAgfVxuXG4gIG9uSW5wdXRFbnRlcihpbnB1dFBheWxvYWQsIHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2VudGVyJywgeyBpbnB1dFBheWxvYWQsIHZhbHVlIH0pO1xuICB9XG5cbiAgb25Gb2N1cyhwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2ZvY3VzJywgcGF5bG9hZCk7XG4gIH1cblxuICBvbkZvY3VzT3V0KHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnZm9jdXNvdXQnLCBwYXlsb2FkKTtcbiAgfVxufVxuIl19