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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhakQsMkJBUUM7OztJQVBDLDBCQUFXOztJQUNYLDZCQUFjOztJQUNkLGlDQUF5Qzs7SUFDekMsK0JBQWE7O0lBQ2IsNkJBQWU7O0lBQ2YsNEJBQWM7O0lBQ2QsK0JBQWlCOzs7Ozs7OztBQVFuQixtQ0FNQzs7O0lBTEMsb0NBSUM7Ozs7Ozs7Ozs7O0FBV0gsNEJBS0M7OztJQUpDLDhCQUFjOztJQUNkLGdDQUFhOztJQUNiLDhCQUFlOztJQUNmLGdDQUFpQjs7Ozs7Ozs7OztBQVVuQiw0QkFPQzs7O0lBTkMsOEJBQWM7O0lBQ2QsK0JBR0M7O0lBQ0QsZ0NBQWlCOzs7Ozs7Ozs7OztBQVduQixpQ0EwQkM7OztJQXpCQyw0QkFVRTs7SUFDRiw2QkFPRTs7SUFDRixxQ0FLQzs7QUFPSCxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFJMUIsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxZQUFZLEVBQUUsS0FBSztRQUMxQixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7O0lBRUQsWUFBWSxDQUFDLFlBQVksRUFBRSxLQUFLO1FBQzlCLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxPQUFPO1FBQ2hCLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7O1lBL0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsc2tNQUE0QjthQUM3Qjs7O21CQUVFLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLCtCQUEyQjs7SUFDM0IsK0JBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNJR05VUC50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgU2lnbnVwIGZpZWxkXG4gKlxuICogQHByb3BlcnR5IGlkIChNKVxuICogQHByb3BlcnR5IGxhYmVsIChNKVxuICogQHByb3BlcnR5IGlucHV0VHlwZSAoTSlcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChNKVxuICogQHByb3BlcnR5IGVycm9yIChPKVxuICogQHByb3BlcnR5IGhpbnQgKE8pXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAoTylcbiAqL1xuaW50ZXJmYWNlIElTaWdudXBGaWVsZCB7XG4gIGlkOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGlucHV0VHlwZTogJ3Bhc3N3b3JkJyB8ICd0ZXh0JyB8ICdlbWFpbCc7XG4gIHBheWxvYWQ6IGFueTtcbiAgZXJyb3I/OiBzdHJpbmc7XG4gIGhpbnQ/OiBzdHJpbmc7XG4gIGNsYXNzZXM/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBTaWdudXAgcGFzc3dvcmQgZmllbGQgKGV4dGVuZHMgSVNpZ251cEZpZWxkKVxuICpcbiAqIEBwcm9wZXJ0eSBzaG93IChPKVxuICovXG5pbnRlcmZhY2UgSVNpZ251cFBhc3N3b3JkRmllbGQgZXh0ZW5kcyBJU2lnbnVwRmllbGQge1xuICBzaG93Pzoge1xuICAgIGljb246IHN0cmluZztcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHBheWxvYWQ6IGFueTtcbiAgfVxufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgU2lnbnVwIHN1Ym1pdFxuICpcbiAqIEBwcm9wZXJ0eSBsYWJlbCAoTSlcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChNKVxuICogQHByb3BlcnR5IGVycm9yIChPKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKE8pXG4gKi9cbmludGVyZmFjZSBJU2lnbnVwU3VibWl0IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgcGF5bG9hZDogYW55O1xuICBlcnJvcj86IHN0cmluZztcbiAgY2xhc3Nlcz86IHN0cmluZztcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFNpZ251cCBmb290ZXJcbiAqXG4gKiBAcHJvcGVydHkgbGFiZWwgKE0pXG4gKiBAcHJvcGVydHkgYWN0aW9uIChNKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKE8pXG4gKi9cbmludGVyZmFjZSBJU2lnbnVwRm9vdGVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgYWN0aW9uOiB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBwYXlsb2FkOiBhbnk7XG4gIH1cbiAgY2xhc3Nlcz86IHN0cmluZztcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFNpZ251cCBkYXRhXG4gKiBsb2dpbi9zaWdudXAvZm9yZ290UGFzc3dvcmQgZ3JvdXBzXG4gKlxuICogQHByb3BlcnR5IGxvZ2luIChPKVxuICogQHByb3BlcnR5IHNpZ251cCAoTylcbiAqIEBwcm9wZXJ0eSBmb3Jnb3RQYXNzd29yZCAoTylcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJU2lnbnVwRGF0YSB7XG4gIGxvZ2luPzoge1xuICAgIGVtYWlsOiBJU2lnbnVwRmllbGQ7XG4gICAgcGFzc3dvcmQ6IElTaWdudXBQYXNzd29yZEZpZWxkO1xuICAgIGZvcmdvdFBhc3N3b3JkPzoge1xuICAgICAgdGl0bGU6IHN0cmluZztcbiAgICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgICBwYXlsb2FkOiBhbnk7XG4gICAgfTtcbiAgICBzdWJtaXQ6IElTaWdudXBTdWJtaXQ7XG4gICAgZm9vdGVyPzogSVNpZ251cEZvb3RlcjtcbiAgfTtcbiAgc2lnbnVwPzoge1xuICAgIG5hbWU6IElTaWdudXBGaWVsZDtcbiAgICBlbWFpbDogSVNpZ251cEZpZWxkO1xuICAgIHBhc3N3b3JkOiBJU2lnbnVwUGFzc3dvcmRGaWVsZDtcbiAgICByZVBhc3N3b3JkOiBJU2lnbnVwUGFzc3dvcmRGaWVsZDtcbiAgICBzdWJtaXQ6IElTaWdudXBTdWJtaXQ7XG4gICAgZm9vdGVyPzogSVNpZ251cEZvb3RlcjtcbiAgfTtcbiAgZm9yZ290UGFzc3dvcmQ/OiB7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBlbWFpbDogSVNpZ251cEZpZWxkO1xuICAgIHN1Ym1pdDogSVNpZ251cFN1Ym1pdDtcbiAgICBmb290ZXI/OiBJU2lnbnVwRm9vdGVyO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LXNpZ251cCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWdudXAuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSVNpZ251cERhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNsaWNrKHBheWxvYWQpe1xuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cblxuICBvbkNoYW5nZShpbnB1dFBheWxvYWQsIHZhbHVlKXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7IGlucHV0UGF5bG9hZCwgdmFsdWUgfSk7XG4gIH1cblxuICBvbklucHV0RW50ZXIoaW5wdXRQYXlsb2FkLCB2YWx1ZSl7XG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnZW50ZXInLCB7IGlucHV0UGF5bG9hZCwgdmFsdWUgfSk7XG4gIH1cblxuICBvbkZvY3VzKHBheWxvYWQpe1xuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2ZvY3VzJywgcGF5bG9hZCk7XG4gIH1cblxuICBvbkZvY3VzT3V0KHBheWxvYWQpe1xuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2ZvY3Vzb3V0JywgcGF5bG9hZCk7XG4gIH1cbn0iXX0=