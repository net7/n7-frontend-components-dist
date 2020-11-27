//---------------------------
// SIGNUP.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.onClick = function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    SignupComponent.prototype.onChange = function (inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload: inputPayload, value: value });
    };
    SignupComponent.prototype.onInputEnter = function (inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('enter', { inputPayload: inputPayload, value: value });
    };
    SignupComponent.prototype.onFocus = function (payload) {
        if (!this.emit)
            return;
        this.emit('focus', payload);
    };
    SignupComponent.prototype.onFocusOut = function (payload) {
        if (!this.emit)
            return;
        this.emit('focusout', payload);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SignupComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SignupComponent.prototype, "emit", void 0);
    SignupComponent = __decorate([
        Component({
            selector: 'n7-signup',
            template: "<!-- Signup: login -->\n<section *ngIf=\"data && data.login\" class=\"n7-signup n7-signup--login\">\n    <form class=\"n7-signup__form\" novalidate>\n        <ng-container *ngTemplateOutlet=\"field; context: { $implicit: data.login.email }\"></ng-container>\n        <ng-container *ngTemplateOutlet=\"\n        passwordField;\n        context: { $implicit: data.login.password }\n      \"></ng-container>\n        <div *ngIf=\"data.login.forgotPassword\" class=\"n7-signup__form-item n7-signup__form-item-forgot-password\">\n            <a (click)=\"onClick(data.login.forgotPassword.payload)\" title=\"{{ data.login.forgotPassword.title }}\"\n                [attr.aria-label]=\"data.login.forgotPassword.title\">{{ data.login.forgotPassword.label }}</a>\n        </div>\n        <ng-container *ngTemplateOutlet=\"submit; context: { $implicit: data.login.submit }\"></ng-container>\n    </form>\n    <ng-container *ngTemplateOutlet=\"footer; context: { $implicit: data.login.footer }\"></ng-container>\n</section>\n\n<!-- Signup: signup -->\n<section *ngIf=\"data && data.signup\" class=\"n7-signup n7-signup--signup\">\n    <form class=\"n7-signup__form\" novalidate>\n        <ng-container *ngTemplateOutlet=\"field; context: { $implicit: data.signup.name }\"></ng-container>\n        <ng-container *ngTemplateOutlet=\"field; context: { $implicit: data.signup.email }\"></ng-container>\n        <ng-container *ngTemplateOutlet=\"\n        passwordField;\n        context: { $implicit: data.signup.password }\n      \"></ng-container>\n        <ng-container *ngTemplateOutlet=\"\n        passwordField;\n        context: { $implicit: data.signup.rePassword }\n      \"></ng-container>\n        <ng-container *ngTemplateOutlet=\"submit; context: { $implicit: data.signup.submit }\"></ng-container>\n    </form>\n    <ng-container *ngTemplateOutlet=\"footer; context: { $implicit: data.signup.footer }\"></ng-container>\n</section>\n\n<!-- Signup: forgot password -->\n<section *ngIf=\"data && data.forgotPassword\" class=\"n7-signup n7-signup--forgot-password\">\n    <p class=\"n7-signup__text\">\n        {{ data.forgotPassword.description }}\n    </p>\n    <form class=\"n7-signup__form\" novalidate>\n        <ng-container *ngTemplateOutlet=\"\n        field;\n        context: { $implicit: data.forgotPassword.email }\n      \"></ng-container>\n\n        <ng-container *ngTemplateOutlet=\"\n        submit;\n        context: { $implicit: data.forgotPassword.submit }\n      \"></ng-container>\n\n      <!-- hidden submit button to prevent submit on enter -->\n      <button type=\"submit\" disabled style=\"display: none\" aria-hidden=\"true\"></button>\n    </form>\n    <ng-container *ngTemplateOutlet=\"\n      footer;\n      context: { $implicit: data.forgotPassword.footer }\n    \"></ng-container>\n</section>\n\n<!-- Template: field -->\n<ng-template #field let-field>\n    <div [ngClass]=\"{\n      'has-error': field.error,\n      'has-hint': field.hint\n    }\" class=\"n7-signup__form-item {{ field.classes || '' }}\">\n        <label class=\"n7-signup__form-item-label\" for=\"{{ field.id }}\">{{\n      field.label\n    }}</label>\n        <div *ngIf=\"field.hint\" class=\"n7-signup__form-item-hint\">\n            {{ field.hint }}\n        </div>\n        <div class=\"n7-signup__input-wrapper\">\n            <input (focus)=\"onFocus(field.payload)\" (focusout)=\"onFocusOut(field.payload)\"\n                (keyup.enter)=\"onInputEnter(field.payload, $event.target.value)\"\n                (input)=\"onChange(field.payload, $event.target.value)\" class=\"n7-signup__form-item-input\"\n                type=\"{{ field.inputType }}\" id=\"{{ field.id }}\" />\n        </div>\n        <div *ngIf=\"field.error\" class=\"n7-signup__form-error\">\n            {{ field.error }}\n        </div>\n    </div>\n</ng-template>\n\n<!-- Template: password-field -->\n<ng-template #passwordField let-field>\n    <div [ngClass]=\"{\n      'has-error': field.error,\n      'has-hint': field.hint\n    }\" class=\"n7-signup__form-item {{ field.classes || '' }}\">\n        <label class=\"n7-signup__form-item-label\" for=\"{{ field.id }}\">{{\n      field.label\n    }}</label>\n        <div *ngIf=\"field.hint\" class=\"n7-signup__form-item-hint\">\n            {{ field.hint }}\n        </div>\n        <div class=\"n7-signup__input-wrapper\">\n            <input (focus)=\"onFocus(field.payload)\" (focusout)=\"onFocusOut(field.payload)\"\n                (keyup.enter)=\"onInputEnter(field.payload, $event.target.value)\"\n                (input)=\"onChange(field.payload, $event.target.value)\" class=\"n7-signup__form-item-input\"\n                type=\"{{ field.inputType }}\" id=\"{{ field.id }}\" />\n            <button *ngIf=\"field.show\" type=\"button\" (click)=\"onClick(field.show.payload)\"\n                [attr.aria-label]=\"field.show.label\" class=\"n7-signup__form-item-show-password\">\n                <i [attr.aria-label]=\"field.show.label\" class=\"{{ field.show.icon }}\"></i>\n            </button>\n        </div>\n        <div *ngIf=\"field.error\" class=\"n7-signup__form-error\">\n            {{ field.error }}\n        </div>\n    </div>\n</ng-template>\n\n<!-- Template: footer -->\n<ng-template #footer let-footer>\n    <footer *ngIf=\"footer\" class=\"n7-signup__footer {{ footer.classes || '' }}\">\n        <div class=\"n7-signup__footer-text\">{{ footer.label }}</div>\n        <a *ngIf=\"footer.action\" (click)=\"onClick(footer.action.payload)\" title=\"{{ footer.action.label }}\"\n            class=\"n7-btn\">{{ footer.action.label }}</a>\n    </footer>\n</ng-template>\n\n<!-- Template: submit button -->\n<ng-template #submit let-submit>\n    <div [ngClass]=\"{\n      'has-error': submit.error\n    }\" class=\"n7-signup__form-item n7-signup__form-item-action {{\n      submit.classes || ''\n    }}\">\n        <button type=\"button\" (click)=\"onClick(submit.payload)\" [attr.aria-label]=\"submit.label\"\n            class=\"n7-btn n7-btn-cta\">\n            {{ submit.label }}\n        </button>\n        <div *ngIf=\"submit.error\" class=\"n7-signup__form-error\">\n            {{ submit.error }}\n        </div>\n    </div>\n</ng-template>"
        })
    ], SignupComponent);
    return SignupComponent;
}());
export { SignupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixZQUFZO0FBQ1osNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQTJHakQ7SUFBQTtJQTZCQSxDQUFDO0lBeEJDLGlDQUFPLEdBQVAsVUFBUSxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsa0NBQVEsR0FBUixVQUFTLFlBQVksRUFBRSxLQUFLO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLGNBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELHNDQUFZLEdBQVosVUFBYSxZQUFZLEVBQUUsS0FBSztRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsWUFBWSxjQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxpQ0FBTyxHQUFQLFVBQVEsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELG9DQUFVLEdBQVYsVUFBVyxPQUFPO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQTNCUTtRQUFSLEtBQUssRUFBRTs7aURBQWtCO0lBRWpCO1FBQVIsS0FBSyxFQUFFOztpREFBVztJQUhSLGVBQWU7UUFKM0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsc2tNQUE0QjtTQUM3QixDQUFDO09BQ1csZUFBZSxDQTZCM0I7SUFBRCxzQkFBQztDQUFBLEFBN0JELElBNkJDO1NBN0JZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU0lHTlVQLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBTaWdudXAgZmllbGRcbiAqXG4gKiBAcHJvcGVydHkgaWQgKE0pXG4gKiBAcHJvcGVydHkgbGFiZWwgKE0pXG4gKiBAcHJvcGVydHkgaW5wdXRUeXBlIChNKVxuICogQHByb3BlcnR5IHBheWxvYWQgKE0pXG4gKiBAcHJvcGVydHkgZXJyb3IgKE8pXG4gKiBAcHJvcGVydHkgaGludCAoTylcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChPKVxuICovXG5pbnRlcmZhY2UgU2lnbnVwRmllbGQge1xuICBpZDogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBpbnB1dFR5cGU6ICdwYXNzd29yZCcgfCAndGV4dCcgfCAnZW1haWwnO1xuICBwYXlsb2FkOiBhbnk7XG4gIGVycm9yPzogc3RyaW5nO1xuICBoaW50Pzogc3RyaW5nO1xuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgU2lnbnVwIHBhc3N3b3JkIGZpZWxkIChleHRlbmRzIFNpZ251cEZpZWxkKVxuICpcbiAqIEBwcm9wZXJ0eSBzaG93IChPKVxuICovXG5pbnRlcmZhY2UgU2lnbnVwUGFzc3dvcmRGaWVsZCBleHRlbmRzIFNpZ251cEZpZWxkIHtcbiAgc2hvdz86IHtcbiAgICBpY29uOiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBwYXlsb2FkOiBhbnk7XG4gIH07XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBTaWdudXAgc3VibWl0XG4gKlxuICogQHByb3BlcnR5IGxhYmVsIChNKVxuICogQHByb3BlcnR5IHBheWxvYWQgKE0pXG4gKiBAcHJvcGVydHkgZXJyb3IgKE8pXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAoTylcbiAqL1xuaW50ZXJmYWNlIFNpZ251cFN1Ym1pdCB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHBheWxvYWQ6IGFueTtcbiAgZXJyb3I/OiBzdHJpbmc7XG4gIGNsYXNzZXM/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBTaWdudXAgZm9vdGVyXG4gKlxuICogQHByb3BlcnR5IGxhYmVsIChNKVxuICogQHByb3BlcnR5IGFjdGlvbiAoTSlcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChPKVxuICovXG5pbnRlcmZhY2UgU2lnbnVwRm9vdGVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgYWN0aW9uOiB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBwYXlsb2FkOiBhbnk7XG4gIH07XG4gIGNsYXNzZXM/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBTaWdudXAgZGF0YVxuICogbG9naW4vc2lnbnVwL2ZvcmdvdFBhc3N3b3JkIGdyb3Vwc1xuICpcbiAqIEBwcm9wZXJ0eSBsb2dpbiAoTylcbiAqIEBwcm9wZXJ0eSBzaWdudXAgKE8pXG4gKiBAcHJvcGVydHkgZm9yZ290UGFzc3dvcmQgKE8pXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2lnbnVwRGF0YSB7XG4gIGxvZ2luPzoge1xuICAgIGVtYWlsOiBTaWdudXBGaWVsZDtcbiAgICBwYXNzd29yZDogU2lnbnVwUGFzc3dvcmRGaWVsZDtcbiAgICBmb3Jnb3RQYXNzd29yZD86IHtcbiAgICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgICBsYWJlbDogc3RyaW5nO1xuICAgICAgcGF5bG9hZDogYW55O1xuICAgIH07XG4gICAgc3VibWl0OiBTaWdudXBTdWJtaXQ7XG4gICAgZm9vdGVyPzogU2lnbnVwRm9vdGVyO1xuICB9O1xuICBzaWdudXA/OiB7XG4gICAgbmFtZTogU2lnbnVwRmllbGQ7XG4gICAgZW1haWw6IFNpZ251cEZpZWxkO1xuICAgIHBhc3N3b3JkOiBTaWdudXBQYXNzd29yZEZpZWxkO1xuICAgIHJlUGFzc3dvcmQ6IFNpZ251cFBhc3N3b3JkRmllbGQ7XG4gICAgc3VibWl0OiBTaWdudXBTdWJtaXQ7XG4gICAgZm9vdGVyPzogU2lnbnVwRm9vdGVyO1xuICB9O1xuICBmb3Jnb3RQYXNzd29yZD86IHtcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGVtYWlsOiBTaWdudXBGaWVsZDtcbiAgICBzdWJtaXQ6IFNpZ251cFN1Ym1pdDtcbiAgICBmb290ZXI/OiBTaWdudXBGb290ZXI7XG4gIH07XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LXNpZ251cCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWdudXAuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogU2lnbnVwRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DbGljayhwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cblxuICBvbkNoYW5nZShpbnB1dFBheWxvYWQsIHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgaW5wdXRQYXlsb2FkLCB2YWx1ZSB9KTtcbiAgfVxuXG4gIG9uSW5wdXRFbnRlcihpbnB1dFBheWxvYWQsIHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2VudGVyJywgeyBpbnB1dFBheWxvYWQsIHZhbHVlIH0pO1xuICB9XG5cbiAgb25Gb2N1cyhwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2ZvY3VzJywgcGF5bG9hZCk7XG4gIH1cblxuICBvbkZvY3VzT3V0KHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnZm9jdXNvdXQnLCBwYXlsb2FkKTtcbiAgfVxufVxuIl19