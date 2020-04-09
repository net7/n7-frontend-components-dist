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
                template: "<!-- Signup: login -->\n<section *ngIf=\"data && data.login\" class=\"n7-signup n7-signup--login\">\n    <form class=\"n7-signup__form\" novalidate>\n        <ng-container *ngTemplateOutlet=\"field; context: { $implicit: data.login.email }\"></ng-container>\n        <ng-container *ngTemplateOutlet=\"\n        passwordField;\n        context: { $implicit: data.login.password }\n      \"></ng-container>\n        <div *ngIf=\"data.login.forgotPassword\" class=\"n7-signup__form-item n7-signup__form-item-forgot-password\">\n            <a (click)=\"onClick(data.login.forgotPassword.payload)\" title=\"{{ data.login.forgotPassword.title }}\"\n                [attr.aria-label]=\"data.login.forgotPassword.title\">{{ data.login.forgotPassword.label }}</a>\n        </div>\n        <ng-container *ngTemplateOutlet=\"submit; context: { $implicit: data.login.submit }\"></ng-container>\n    </form>\n    <ng-container *ngTemplateOutlet=\"footer; context: { $implicit: data.login.footer }\"></ng-container>\n</section>\n\n<!-- Signup: signup -->\n<section *ngIf=\"data && data.signup\" class=\"n7-signup n7-signup--signup\">\n    <form class=\"n7-signup__form\" novalidate>\n        <ng-container *ngTemplateOutlet=\"field; context: { $implicit: data.signup.name }\"></ng-container>\n        <ng-container *ngTemplateOutlet=\"field; context: { $implicit: data.signup.email }\"></ng-container>\n        <ng-container *ngTemplateOutlet=\"\n        passwordField;\n        context: { $implicit: data.signup.password }\n      \"></ng-container>\n        <ng-container *ngTemplateOutlet=\"\n        passwordField;\n        context: { $implicit: data.signup.rePassword }\n      \"></ng-container>\n        <ng-container *ngTemplateOutlet=\"submit; context: { $implicit: data.signup.submit }\"></ng-container>\n    </form>\n    <ng-container *ngTemplateOutlet=\"footer; context: { $implicit: data.signup.footer }\"></ng-container>\n</section>\n\n<!-- Signup: forgot password -->\n<section *ngIf=\"data && data.forgotPassword\" class=\"n7-signup n7-signup--forgot-password\">\n    <p class=\"n7-signup__text\">\n        {{ data.forgotPassword.description }}\n    </p>\n    <form class=\"n7-signup__form\" novalidate>\n        <ng-container *ngTemplateOutlet=\"\n        field;\n        context: { $implicit: data.forgotPassword.email }\n      \"></ng-container>\n\n        <ng-container *ngTemplateOutlet=\"\n        submit;\n        context: { $implicit: data.forgotPassword.submit }\n      \"></ng-container>\n\n      <!-- hidden submit button to prevent submit on enter -->\n      <button type=\"submit\" disabled style=\"display: none\" aria-hidden=\"true\"></button>\n    </form>\n    <ng-container *ngTemplateOutlet=\"\n      footer;\n      context: { $implicit: data.forgotPassword.footer }\n    \"></ng-container>\n</section>\n\n<!-- Template: field -->\n<ng-template #field let-field>\n    <div [ngClass]=\"{\n      'has-error': field.error,\n      'has-hint': field.hint\n    }\" class=\"n7-signup__form-item {{ field.classes || '' }}\">\n        <label class=\"n7-signup__form-item-label\" for=\"{{ field.id }}\">{{\n      field.label\n    }}</label>\n        <div *ngIf=\"field.hint\" class=\"n7-signup__form-item-hint\">\n            {{ field.hint }}\n        </div>\n        <div class=\"n7-signup__input-wrapper\">\n            <input (focus)=\"onFocus(field.payload)\" (focusout)=\"onFocusOut(field.payload)\"\n                (keyup.enter)=\"onInputEnter(field.payload, $event.target.value)\"\n                (input)=\"onChange(field.payload, $event.target.value)\" class=\"n7-signup__form-item-input\"\n                type=\"{{ field.inputType }}\" id=\"{{ field.id }}\" />\n        </div>\n        <div *ngIf=\"field.error\" class=\"n7-signup__form-error\">\n            {{ field.error }}\n        </div>\n    </div>\n</ng-template>\n\n<!-- Template: password-field -->\n<ng-template #passwordField let-field>\n    <div [ngClass]=\"{\n      'has-error': field.error,\n      'has-hint': field.hint\n    }\" class=\"n7-signup__form-item {{ field.classes || '' }}\">\n        <label class=\"n7-signup__form-item-label\" for=\"{{ field.id }}\">{{\n      field.label\n    }}</label>\n        <div *ngIf=\"field.hint\" class=\"n7-signup__form-item-hint\">\n            {{ field.hint }}\n        </div>\n        <div class=\"n7-signup__input-wrapper\">\n            <input (focus)=\"onFocus(field.payload)\" (focusout)=\"onFocusOut(field.payload)\"\n                (keyup.enter)=\"onInputEnter(field.payload, $event.target.value)\"\n                (input)=\"onChange(field.payload, $event.target.value)\" class=\"n7-signup__form-item-input\"\n                type=\"{{ field.inputType }}\" id=\"{{ field.id }}\" />\n            <button *ngIf=\"field.show\" type=\"button\" (click)=\"onClick(field.show.payload)\"\n                [attr.aria-label]=\"field.show.label\" class=\"n7-signup__form-item-show-password\">\n                <i [attr.aria-label]=\"field.show.label\" class=\"{{ field.show.icon }}\"></i>\n            </button>\n        </div>\n        <div *ngIf=\"field.error\" class=\"n7-signup__form-error\">\n            {{ field.error }}\n        </div>\n    </div>\n</ng-template>\n\n<!-- Template: footer -->\n<ng-template #footer let-footer>\n    <footer *ngIf=\"footer\" class=\"n7-signup__footer {{ footer.classes || '' }}\">\n        <div class=\"n7-signup__footer-text\">{{ footer.label }}</div>\n        <a *ngIf=\"footer.action\" (click)=\"onClick(footer.action.payload)\" title=\"{{ footer.action.label }}\"\n            class=\"n7-btn\">{{ footer.action.label }}</a>\n    </footer>\n</ng-template>\n\n<!-- Template: submit button -->\n<ng-template #submit let-submit>\n    <div [ngClass]=\"{\n      'has-error': submit.error\n    }\" class=\"n7-signup__form-item n7-signup__form-item-action {{\n      submit.classes || ''\n    }}\">\n        <button type=\"button\" (click)=\"onClick(submit.payload)\" [attr.aria-label]=\"submit.label\"\n            class=\"n7-btn n7-btn-cta\">\n            {{ submit.label }}\n        </button>\n        <div *ngIf=\"submit.error\" class=\"n7-signup__form-error\">\n            {{ submit.error }}\n        </div>\n    </div>\n</ng-template>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhakQsMEJBUUM7OztJQVBDLHlCQUFXOztJQUNYLDRCQUFjOztJQUNkLGdDQUF5Qzs7SUFDekMsOEJBQWE7O0lBQ2IsNEJBQWU7O0lBQ2YsMkJBQWM7O0lBQ2QsOEJBQWlCOzs7Ozs7OztBQVFuQixrQ0FNQzs7O0lBTEMsbUNBSUU7Ozs7Ozs7Ozs7O0FBV0osMkJBS0M7OztJQUpDLDZCQUFjOztJQUNkLCtCQUFhOztJQUNiLDZCQUFlOztJQUNmLCtCQUFpQjs7Ozs7Ozs7OztBQVVuQiwyQkFPQzs7O0lBTkMsNkJBQWM7O0lBQ2QsOEJBR0U7O0lBQ0YsK0JBQWlCOzs7Ozs7Ozs7OztBQVduQixnQ0EwQkM7OztJQXpCQywyQkFVRTs7SUFDRiw0QkFPRTs7SUFDRixvQ0FLRTs7QUFPSixNQUFNLE9BQU8sZUFBZTs7Ozs7SUFLMUIsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxZQUFZLEVBQUUsS0FBSztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7O0lBRUQsWUFBWSxDQUFDLFlBQVksRUFBRSxLQUFLO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxPQUFPO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7O1lBaENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsc2tNQUE0QjthQUM3Qjs7O21CQUVFLEtBQUs7bUJBRUwsS0FBSzs7OztJQUZOLCtCQUEwQjs7SUFFMUIsK0JBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNJR05VUC50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgU2lnbnVwIGZpZWxkXG4gKlxuICogQHByb3BlcnR5IGlkIChNKVxuICogQHByb3BlcnR5IGxhYmVsIChNKVxuICogQHByb3BlcnR5IGlucHV0VHlwZSAoTSlcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChNKVxuICogQHByb3BlcnR5IGVycm9yIChPKVxuICogQHByb3BlcnR5IGhpbnQgKE8pXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAoTylcbiAqL1xuaW50ZXJmYWNlIFNpZ251cEZpZWxkIHtcbiAgaWQ6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgaW5wdXRUeXBlOiAncGFzc3dvcmQnIHwgJ3RleHQnIHwgJ2VtYWlsJztcbiAgcGF5bG9hZDogYW55O1xuICBlcnJvcj86IHN0cmluZztcbiAgaGludD86IHN0cmluZztcbiAgY2xhc3Nlcz86IHN0cmluZztcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFNpZ251cCBwYXNzd29yZCBmaWVsZCAoZXh0ZW5kcyBTaWdudXBGaWVsZClcbiAqXG4gKiBAcHJvcGVydHkgc2hvdyAoTylcbiAqL1xuaW50ZXJmYWNlIFNpZ251cFBhc3N3b3JkRmllbGQgZXh0ZW5kcyBTaWdudXBGaWVsZCB7XG4gIHNob3c/OiB7XG4gICAgaWNvbjogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgcGF5bG9hZDogYW55O1xuICB9O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgU2lnbnVwIHN1Ym1pdFxuICpcbiAqIEBwcm9wZXJ0eSBsYWJlbCAoTSlcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChNKVxuICogQHByb3BlcnR5IGVycm9yIChPKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKE8pXG4gKi9cbmludGVyZmFjZSBTaWdudXBTdWJtaXQge1xuICBsYWJlbDogc3RyaW5nO1xuICBwYXlsb2FkOiBhbnk7XG4gIGVycm9yPzogc3RyaW5nO1xuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgU2lnbnVwIGZvb3RlclxuICpcbiAqIEBwcm9wZXJ0eSBsYWJlbCAoTSlcbiAqIEBwcm9wZXJ0eSBhY3Rpb24gKE0pXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAoTylcbiAqL1xuaW50ZXJmYWNlIFNpZ251cEZvb3RlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGFjdGlvbjoge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgcGF5bG9hZDogYW55O1xuICB9O1xuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgU2lnbnVwIGRhdGFcbiAqIGxvZ2luL3NpZ251cC9mb3Jnb3RQYXNzd29yZCBncm91cHNcbiAqXG4gKiBAcHJvcGVydHkgbG9naW4gKE8pXG4gKiBAcHJvcGVydHkgc2lnbnVwIChPKVxuICogQHByb3BlcnR5IGZvcmdvdFBhc3N3b3JkIChPKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNpZ251cERhdGEge1xuICBsb2dpbj86IHtcbiAgICBlbWFpbDogU2lnbnVwRmllbGQ7XG4gICAgcGFzc3dvcmQ6IFNpZ251cFBhc3N3b3JkRmllbGQ7XG4gICAgZm9yZ290UGFzc3dvcmQ/OiB7XG4gICAgICB0aXRsZTogc3RyaW5nO1xuICAgICAgbGFiZWw6IHN0cmluZztcbiAgICAgIHBheWxvYWQ6IGFueTtcbiAgICB9O1xuICAgIHN1Ym1pdDogU2lnbnVwU3VibWl0O1xuICAgIGZvb3Rlcj86IFNpZ251cEZvb3RlcjtcbiAgfTtcbiAgc2lnbnVwPzoge1xuICAgIG5hbWU6IFNpZ251cEZpZWxkO1xuICAgIGVtYWlsOiBTaWdudXBGaWVsZDtcbiAgICBwYXNzd29yZDogU2lnbnVwUGFzc3dvcmRGaWVsZDtcbiAgICByZVBhc3N3b3JkOiBTaWdudXBQYXNzd29yZEZpZWxkO1xuICAgIHN1Ym1pdDogU2lnbnVwU3VibWl0O1xuICAgIGZvb3Rlcj86IFNpZ251cEZvb3RlcjtcbiAgfTtcbiAgZm9yZ290UGFzc3dvcmQ/OiB7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBlbWFpbDogU2lnbnVwRmllbGQ7XG4gICAgc3VibWl0OiBTaWdudXBTdWJtaXQ7XG4gICAgZm9vdGVyPzogU2lnbnVwRm9vdGVyO1xuICB9O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1zaWdudXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lnbnVwLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNpZ251cENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IFNpZ251cERhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG5cbiAgb25DaGFuZ2UoaW5wdXRQYXlsb2FkLCB2YWx1ZSkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7IGlucHV0UGF5bG9hZCwgdmFsdWUgfSk7XG4gIH1cblxuICBvbklucHV0RW50ZXIoaW5wdXRQYXlsb2FkLCB2YWx1ZSkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdlbnRlcicsIHsgaW5wdXRQYXlsb2FkLCB2YWx1ZSB9KTtcbiAgfVxuXG4gIG9uRm9jdXMocGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdmb2N1cycsIHBheWxvYWQpO1xuICB9XG5cbiAgb25Gb2N1c091dChwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2ZvY3Vzb3V0JywgcGF5bG9hZCk7XG4gIH1cbn1cbiJdfQ==