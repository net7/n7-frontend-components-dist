//---------------------------
// SIGNUP.ts
//---------------------------
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SignupComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    onChange(inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload, value });
    }
    onInputEnter(inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('enter', { inputPayload, value });
    }
    onFocus(payload) {
        if (!this.emit)
            return;
        this.emit('focus', payload);
    }
    onFocusOut(payload) {
        if (!this.emit)
            return;
        this.emit('focusout', payload);
    }
}
SignupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SignupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SignupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: SignupComponent, selector: "n7-signup", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<!-- Signup: login -->\n<section *ngIf=\"data && data.login\" class=\"n7-signup n7-signup--login\">\n    <form class=\"n7-signup__form\" novalidate>\n        <ng-container *ngTemplateOutlet=\"field; context: { $implicit: data.login.email }\"></ng-container>\n        <ng-container *ngTemplateOutlet=\"\n        passwordField;\n        context: { $implicit: data.login.password }\n      \"></ng-container>\n        <div *ngIf=\"data.login.forgotPassword\" class=\"n7-signup__form-item n7-signup__form-item-forgot-password\">\n            <a (click)=\"onClick(data.login.forgotPassword.payload)\" title=\"{{ data.login.forgotPassword.title }}\"\n                [attr.aria-label]=\"data.login.forgotPassword.title\">{{ data.login.forgotPassword.label }}</a>\n        </div>\n        <ng-container *ngTemplateOutlet=\"submit; context: { $implicit: data.login.submit }\"></ng-container>\n    </form>\n    <ng-container *ngTemplateOutlet=\"footer; context: { $implicit: data.login.footer }\"></ng-container>\n</section>\n\n<!-- Signup: signup -->\n<section *ngIf=\"data && data.signup\" class=\"n7-signup n7-signup--signup\">\n    <form class=\"n7-signup__form\" novalidate>\n        <ng-container *ngTemplateOutlet=\"field; context: { $implicit: data.signup.name }\"></ng-container>\n        <ng-container *ngTemplateOutlet=\"field; context: { $implicit: data.signup.email }\"></ng-container>\n        <ng-container *ngTemplateOutlet=\"\n        passwordField;\n        context: { $implicit: data.signup.password }\n      \"></ng-container>\n        <ng-container *ngTemplateOutlet=\"\n        passwordField;\n        context: { $implicit: data.signup.rePassword }\n      \"></ng-container>\n        <ng-container *ngTemplateOutlet=\"submit; context: { $implicit: data.signup.submit }\"></ng-container>\n    </form>\n    <ng-container *ngTemplateOutlet=\"footer; context: { $implicit: data.signup.footer }\"></ng-container>\n</section>\n\n<!-- Signup: forgot password -->\n<section *ngIf=\"data && data.forgotPassword\" class=\"n7-signup n7-signup--forgot-password\">\n    <p class=\"n7-signup__text\">\n        {{ data.forgotPassword.description }}\n    </p>\n    <form class=\"n7-signup__form\" novalidate>\n        <ng-container *ngTemplateOutlet=\"\n        field;\n        context: { $implicit: data.forgotPassword.email }\n      \"></ng-container>\n\n        <ng-container *ngTemplateOutlet=\"\n        submit;\n        context: { $implicit: data.forgotPassword.submit }\n      \"></ng-container>\n\n      <!-- hidden submit button to prevent submit on enter -->\n      <button type=\"submit\" disabled style=\"display: none\" aria-hidden=\"true\"></button>\n    </form>\n    <ng-container *ngTemplateOutlet=\"\n      footer;\n      context: { $implicit: data.forgotPassword.footer }\n    \"></ng-container>\n</section>\n\n<!-- Template: field -->\n<ng-template #field let-field>\n    <div [ngClass]=\"{\n      'has-error': field.error,\n      'has-hint': field.hint\n    }\" class=\"n7-signup__form-item {{ field.classes || '' }}\">\n        <label class=\"n7-signup__form-item-label\" for=\"{{ field.id }}\">{{\n      field.label\n    }}</label>\n        <div *ngIf=\"field.hint\" class=\"n7-signup__form-item-hint\">\n            {{ field.hint }}\n        </div>\n        <div class=\"n7-signup__input-wrapper\">\n            <input (focus)=\"onFocus(field.payload)\" (focusout)=\"onFocusOut(field.payload)\"\n                (keyup.enter)=\"onInputEnter(field.payload, $event.target.value)\"\n                (input)=\"onChange(field.payload, $event.target.value)\" class=\"n7-signup__form-item-input\"\n                type=\"{{ field.inputType }}\" id=\"{{ field.id }}\" />\n        </div>\n        <div *ngIf=\"field.error\" class=\"n7-signup__form-error\">\n            {{ field.error }}\n        </div>\n    </div>\n</ng-template>\n\n<!-- Template: password-field -->\n<ng-template #passwordField let-field>\n    <div [ngClass]=\"{\n      'has-error': field.error,\n      'has-hint': field.hint\n    }\" class=\"n7-signup__form-item {{ field.classes || '' }}\">\n        <label class=\"n7-signup__form-item-label\" for=\"{{ field.id }}\">{{\n      field.label\n    }}</label>\n        <div *ngIf=\"field.hint\" class=\"n7-signup__form-item-hint\">\n            {{ field.hint }}\n        </div>\n        <div class=\"n7-signup__input-wrapper\">\n            <input (focus)=\"onFocus(field.payload)\" (focusout)=\"onFocusOut(field.payload)\"\n                (keyup.enter)=\"onInputEnter(field.payload, $event.target.value)\"\n                (input)=\"onChange(field.payload, $event.target.value)\" class=\"n7-signup__form-item-input\"\n                type=\"{{ field.inputType }}\" id=\"{{ field.id }}\" />\n            <button *ngIf=\"field.show\" type=\"button\" (click)=\"onClick(field.show.payload)\"\n                [attr.aria-label]=\"field.show.label\" class=\"n7-signup__form-item-show-password\">\n                <i [attr.aria-label]=\"field.show.label\" class=\"{{ field.show.icon }}\"></i>\n            </button>\n        </div>\n        <div *ngIf=\"field.error\" class=\"n7-signup__form-error\">\n            {{ field.error }}\n        </div>\n    </div>\n</ng-template>\n\n<!-- Template: footer -->\n<ng-template #footer let-footer>\n    <footer *ngIf=\"footer\" class=\"n7-signup__footer {{ footer.classes || '' }}\">\n        <div class=\"n7-signup__footer-text\">{{ footer.label }}</div>\n        <a *ngIf=\"footer.action\" (click)=\"onClick(footer.action.payload)\" title=\"{{ footer.action.label }}\"\n            class=\"n7-btn\">{{ footer.action.label }}</a>\n    </footer>\n</ng-template>\n\n<!-- Template: submit button -->\n<ng-template #submit let-submit>\n    <div [ngClass]=\"{\n      'has-error': submit.error\n    }\" class=\"n7-signup__form-item n7-signup__form-item-action {{\n      submit.classes || ''\n    }}\">\n        <button type=\"button\" (click)=\"onClick(submit.payload)\" [attr.aria-label]=\"submit.label\"\n            class=\"n7-btn n7-btn-cta\">\n            {{ submit.label }}\n        </button>\n        <div *ngIf=\"submit.error\" class=\"n7-signup__form-error\">\n            {{ submit.error }}\n        </div>\n    </div>\n</ng-template>", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SignupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-signup', template: "<!-- Signup: login -->\n<section *ngIf=\"data && data.login\" class=\"n7-signup n7-signup--login\">\n    <form class=\"n7-signup__form\" novalidate>\n        <ng-container *ngTemplateOutlet=\"field; context: { $implicit: data.login.email }\"></ng-container>\n        <ng-container *ngTemplateOutlet=\"\n        passwordField;\n        context: { $implicit: data.login.password }\n      \"></ng-container>\n        <div *ngIf=\"data.login.forgotPassword\" class=\"n7-signup__form-item n7-signup__form-item-forgot-password\">\n            <a (click)=\"onClick(data.login.forgotPassword.payload)\" title=\"{{ data.login.forgotPassword.title }}\"\n                [attr.aria-label]=\"data.login.forgotPassword.title\">{{ data.login.forgotPassword.label }}</a>\n        </div>\n        <ng-container *ngTemplateOutlet=\"submit; context: { $implicit: data.login.submit }\"></ng-container>\n    </form>\n    <ng-container *ngTemplateOutlet=\"footer; context: { $implicit: data.login.footer }\"></ng-container>\n</section>\n\n<!-- Signup: signup -->\n<section *ngIf=\"data && data.signup\" class=\"n7-signup n7-signup--signup\">\n    <form class=\"n7-signup__form\" novalidate>\n        <ng-container *ngTemplateOutlet=\"field; context: { $implicit: data.signup.name }\"></ng-container>\n        <ng-container *ngTemplateOutlet=\"field; context: { $implicit: data.signup.email }\"></ng-container>\n        <ng-container *ngTemplateOutlet=\"\n        passwordField;\n        context: { $implicit: data.signup.password }\n      \"></ng-container>\n        <ng-container *ngTemplateOutlet=\"\n        passwordField;\n        context: { $implicit: data.signup.rePassword }\n      \"></ng-container>\n        <ng-container *ngTemplateOutlet=\"submit; context: { $implicit: data.signup.submit }\"></ng-container>\n    </form>\n    <ng-container *ngTemplateOutlet=\"footer; context: { $implicit: data.signup.footer }\"></ng-container>\n</section>\n\n<!-- Signup: forgot password -->\n<section *ngIf=\"data && data.forgotPassword\" class=\"n7-signup n7-signup--forgot-password\">\n    <p class=\"n7-signup__text\">\n        {{ data.forgotPassword.description }}\n    </p>\n    <form class=\"n7-signup__form\" novalidate>\n        <ng-container *ngTemplateOutlet=\"\n        field;\n        context: { $implicit: data.forgotPassword.email }\n      \"></ng-container>\n\n        <ng-container *ngTemplateOutlet=\"\n        submit;\n        context: { $implicit: data.forgotPassword.submit }\n      \"></ng-container>\n\n      <!-- hidden submit button to prevent submit on enter -->\n      <button type=\"submit\" disabled style=\"display: none\" aria-hidden=\"true\"></button>\n    </form>\n    <ng-container *ngTemplateOutlet=\"\n      footer;\n      context: { $implicit: data.forgotPassword.footer }\n    \"></ng-container>\n</section>\n\n<!-- Template: field -->\n<ng-template #field let-field>\n    <div [ngClass]=\"{\n      'has-error': field.error,\n      'has-hint': field.hint\n    }\" class=\"n7-signup__form-item {{ field.classes || '' }}\">\n        <label class=\"n7-signup__form-item-label\" for=\"{{ field.id }}\">{{\n      field.label\n    }}</label>\n        <div *ngIf=\"field.hint\" class=\"n7-signup__form-item-hint\">\n            {{ field.hint }}\n        </div>\n        <div class=\"n7-signup__input-wrapper\">\n            <input (focus)=\"onFocus(field.payload)\" (focusout)=\"onFocusOut(field.payload)\"\n                (keyup.enter)=\"onInputEnter(field.payload, $event.target.value)\"\n                (input)=\"onChange(field.payload, $event.target.value)\" class=\"n7-signup__form-item-input\"\n                type=\"{{ field.inputType }}\" id=\"{{ field.id }}\" />\n        </div>\n        <div *ngIf=\"field.error\" class=\"n7-signup__form-error\">\n            {{ field.error }}\n        </div>\n    </div>\n</ng-template>\n\n<!-- Template: password-field -->\n<ng-template #passwordField let-field>\n    <div [ngClass]=\"{\n      'has-error': field.error,\n      'has-hint': field.hint\n    }\" class=\"n7-signup__form-item {{ field.classes || '' }}\">\n        <label class=\"n7-signup__form-item-label\" for=\"{{ field.id }}\">{{\n      field.label\n    }}</label>\n        <div *ngIf=\"field.hint\" class=\"n7-signup__form-item-hint\">\n            {{ field.hint }}\n        </div>\n        <div class=\"n7-signup__input-wrapper\">\n            <input (focus)=\"onFocus(field.payload)\" (focusout)=\"onFocusOut(field.payload)\"\n                (keyup.enter)=\"onInputEnter(field.payload, $event.target.value)\"\n                (input)=\"onChange(field.payload, $event.target.value)\" class=\"n7-signup__form-item-input\"\n                type=\"{{ field.inputType }}\" id=\"{{ field.id }}\" />\n            <button *ngIf=\"field.show\" type=\"button\" (click)=\"onClick(field.show.payload)\"\n                [attr.aria-label]=\"field.show.label\" class=\"n7-signup__form-item-show-password\">\n                <i [attr.aria-label]=\"field.show.label\" class=\"{{ field.show.icon }}\"></i>\n            </button>\n        </div>\n        <div *ngIf=\"field.error\" class=\"n7-signup__form-error\">\n            {{ field.error }}\n        </div>\n    </div>\n</ng-template>\n\n<!-- Template: footer -->\n<ng-template #footer let-footer>\n    <footer *ngIf=\"footer\" class=\"n7-signup__footer {{ footer.classes || '' }}\">\n        <div class=\"n7-signup__footer-text\">{{ footer.label }}</div>\n        <a *ngIf=\"footer.action\" (click)=\"onClick(footer.action.payload)\" title=\"{{ footer.action.label }}\"\n            class=\"n7-btn\">{{ footer.action.label }}</a>\n    </footer>\n</ng-template>\n\n<!-- Template: submit button -->\n<ng-template #submit let-submit>\n    <div [ngClass]=\"{\n      'has-error': submit.error\n    }\" class=\"n7-signup__form-item n7-signup__form-item-action {{\n      submit.classes || ''\n    }}\">\n        <button type=\"button\" (click)=\"onClick(submit.payload)\" [attr.aria-label]=\"submit.label\"\n            class=\"n7-btn n7-btn-cta\">\n            {{ submit.label }}\n        </button>\n        <div *ngIf=\"submit.error\" class=\"n7-signup__form-error\">\n            {{ submit.error }}\n        </div>\n    </div>\n</ng-template>" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZHYtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL3NpZ251cC9zaWdudXAudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixZQUFZO0FBQ1osNkJBQTZCO0FBRTdCLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUEyR2pELE1BQU0sT0FBTyxlQUFlO0lBSzFCLE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsUUFBUSxDQUFDLFlBQVksRUFBRSxLQUFLO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsWUFBWSxDQUFDLFlBQVksRUFBRSxLQUFLO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxVQUFVLENBQUMsT0FBTztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OzRHQTVCVSxlQUFlO2dHQUFmLGVBQWUseUZDL0c1Qiw0ak1Bd0ljOzJGRHpCRCxlQUFlO2tCQUozQixTQUFTOytCQUNFLFdBQVc7OEJBSVosSUFBSTtzQkFBWixLQUFLO2dCQUVHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTSUdOVVAudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFNpZ251cCBmaWVsZFxuICpcbiAqIEBwcm9wZXJ0eSBpZCAoTSlcbiAqIEBwcm9wZXJ0eSBsYWJlbCAoTSlcbiAqIEBwcm9wZXJ0eSBpbnB1dFR5cGUgKE0pXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAoTSlcbiAqIEBwcm9wZXJ0eSBlcnJvciAoTylcbiAqIEBwcm9wZXJ0eSBoaW50IChPKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKE8pXG4gKi9cbmludGVyZmFjZSBTaWdudXBGaWVsZCB7XG4gIGlkOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGlucHV0VHlwZTogJ3Bhc3N3b3JkJyB8ICd0ZXh0JyB8ICdlbWFpbCc7XG4gIHBheWxvYWQ6IGFueTtcbiAgZXJyb3I/OiBzdHJpbmc7XG4gIGhpbnQ/OiBzdHJpbmc7XG4gIGNsYXNzZXM/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBTaWdudXAgcGFzc3dvcmQgZmllbGQgKGV4dGVuZHMgU2lnbnVwRmllbGQpXG4gKlxuICogQHByb3BlcnR5IHNob3cgKE8pXG4gKi9cbmludGVyZmFjZSBTaWdudXBQYXNzd29yZEZpZWxkIGV4dGVuZHMgU2lnbnVwRmllbGQge1xuICBzaG93Pzoge1xuICAgIGljb246IHN0cmluZztcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHBheWxvYWQ6IGFueTtcbiAgfTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFNpZ251cCBzdWJtaXRcbiAqXG4gKiBAcHJvcGVydHkgbGFiZWwgKE0pXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAoTSlcbiAqIEBwcm9wZXJ0eSBlcnJvciAoTylcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChPKVxuICovXG5pbnRlcmZhY2UgU2lnbnVwU3VibWl0IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgcGF5bG9hZDogYW55O1xuICBlcnJvcj86IHN0cmluZztcbiAgY2xhc3Nlcz86IHN0cmluZztcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFNpZ251cCBmb290ZXJcbiAqXG4gKiBAcHJvcGVydHkgbGFiZWwgKE0pXG4gKiBAcHJvcGVydHkgYWN0aW9uIChNKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKE8pXG4gKi9cbmludGVyZmFjZSBTaWdudXBGb290ZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBhY3Rpb246IHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHBheWxvYWQ6IGFueTtcbiAgfTtcbiAgY2xhc3Nlcz86IHN0cmluZztcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFNpZ251cCBkYXRhXG4gKiBsb2dpbi9zaWdudXAvZm9yZ290UGFzc3dvcmQgZ3JvdXBzXG4gKlxuICogQHByb3BlcnR5IGxvZ2luIChPKVxuICogQHByb3BlcnR5IHNpZ251cCAoTylcbiAqIEBwcm9wZXJ0eSBmb3Jnb3RQYXNzd29yZCAoTylcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTaWdudXBEYXRhIHtcbiAgbG9naW4/OiB7XG4gICAgZW1haWw6IFNpZ251cEZpZWxkO1xuICAgIHBhc3N3b3JkOiBTaWdudXBQYXNzd29yZEZpZWxkO1xuICAgIGZvcmdvdFBhc3N3b3JkPzoge1xuICAgICAgdGl0bGU6IHN0cmluZztcbiAgICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgICBwYXlsb2FkOiBhbnk7XG4gICAgfTtcbiAgICBzdWJtaXQ6IFNpZ251cFN1Ym1pdDtcbiAgICBmb290ZXI/OiBTaWdudXBGb290ZXI7XG4gIH07XG4gIHNpZ251cD86IHtcbiAgICBuYW1lOiBTaWdudXBGaWVsZDtcbiAgICBlbWFpbDogU2lnbnVwRmllbGQ7XG4gICAgcGFzc3dvcmQ6IFNpZ251cFBhc3N3b3JkRmllbGQ7XG4gICAgcmVQYXNzd29yZDogU2lnbnVwUGFzc3dvcmRGaWVsZDtcbiAgICBzdWJtaXQ6IFNpZ251cFN1Ym1pdDtcbiAgICBmb290ZXI/OiBTaWdudXBGb290ZXI7XG4gIH07XG4gIGZvcmdvdFBhc3N3b3JkPzoge1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgZW1haWw6IFNpZ251cEZpZWxkO1xuICAgIHN1Ym1pdDogU2lnbnVwU3VibWl0O1xuICAgIGZvb3Rlcj86IFNpZ251cEZvb3RlcjtcbiAgfTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctc2lnbnVwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZ251cC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBTaWdudXBEYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGlucHV0UGF5bG9hZCwgdmFsdWUpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgeyBpbnB1dFBheWxvYWQsIHZhbHVlIH0pO1xuICB9XG5cbiAgb25JbnB1dEVudGVyKGlucHV0UGF5bG9hZCwgdmFsdWUpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnZW50ZXInLCB7IGlucHV0UGF5bG9hZCwgdmFsdWUgfSk7XG4gIH1cblxuICBvbkZvY3VzKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnZm9jdXMnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIG9uRm9jdXNPdXQocGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdmb2N1c291dCcsIHBheWxvYWQpO1xuICB9XG59XG4iLCI8IS0tIFNpZ251cDogbG9naW4gLS0+XG48c2VjdGlvbiAqbmdJZj1cImRhdGEgJiYgZGF0YS5sb2dpblwiIGNsYXNzPVwibjctc2lnbnVwIG43LXNpZ251cC0tbG9naW5cIj5cbiAgICA8Zm9ybSBjbGFzcz1cIm43LXNpZ251cF9fZm9ybVwiIG5vdmFsaWRhdGU+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJmaWVsZDsgY29udGV4dDogeyAkaW1wbGljaXQ6IGRhdGEubG9naW4uZW1haWwgfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiXG4gICAgICAgIHBhc3N3b3JkRmllbGQ7XG4gICAgICAgIGNvbnRleHQ6IHsgJGltcGxpY2l0OiBkYXRhLmxvZ2luLnBhc3N3b3JkIH1cbiAgICAgIFwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiZGF0YS5sb2dpbi5mb3Jnb3RQYXNzd29yZFwiIGNsYXNzPVwibjctc2lnbnVwX19mb3JtLWl0ZW0gbjctc2lnbnVwX19mb3JtLWl0ZW0tZm9yZ290LXBhc3N3b3JkXCI+XG4gICAgICAgICAgICA8YSAoY2xpY2spPVwib25DbGljayhkYXRhLmxvZ2luLmZvcmdvdFBhc3N3b3JkLnBheWxvYWQpXCIgdGl0bGU9XCJ7eyBkYXRhLmxvZ2luLmZvcmdvdFBhc3N3b3JkLnRpdGxlIH19XCJcbiAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImRhdGEubG9naW4uZm9yZ290UGFzc3dvcmQudGl0bGVcIj57eyBkYXRhLmxvZ2luLmZvcmdvdFBhc3N3b3JkLmxhYmVsIH19PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInN1Ym1pdDsgY29udGV4dDogeyAkaW1wbGljaXQ6IGRhdGEubG9naW4uc3VibWl0IH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICA8L2Zvcm0+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImZvb3RlcjsgY29udGV4dDogeyAkaW1wbGljaXQ6IGRhdGEubG9naW4uZm9vdGVyIH1cIj48L25nLWNvbnRhaW5lcj5cbjwvc2VjdGlvbj5cblxuPCEtLSBTaWdudXA6IHNpZ251cCAtLT5cbjxzZWN0aW9uICpuZ0lmPVwiZGF0YSAmJiBkYXRhLnNpZ251cFwiIGNsYXNzPVwibjctc2lnbnVwIG43LXNpZ251cC0tc2lnbnVwXCI+XG4gICAgPGZvcm0gY2xhc3M9XCJuNy1zaWdudXBfX2Zvcm1cIiBub3ZhbGlkYXRlPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZmllbGQ7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBkYXRhLnNpZ251cC5uYW1lIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImZpZWxkOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogZGF0YS5zaWdudXAuZW1haWwgfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiXG4gICAgICAgIHBhc3N3b3JkRmllbGQ7XG4gICAgICAgIGNvbnRleHQ6IHsgJGltcGxpY2l0OiBkYXRhLnNpZ251cC5wYXNzd29yZCB9XG4gICAgICBcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIlxuICAgICAgICBwYXNzd29yZEZpZWxkO1xuICAgICAgICBjb250ZXh0OiB7ICRpbXBsaWNpdDogZGF0YS5zaWdudXAucmVQYXNzd29yZCB9XG4gICAgICBcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInN1Ym1pdDsgY29udGV4dDogeyAkaW1wbGljaXQ6IGRhdGEuc2lnbnVwLnN1Ym1pdCB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgPC9mb3JtPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJmb290ZXI7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBkYXRhLnNpZ251cC5mb290ZXIgfVwiPjwvbmctY29udGFpbmVyPlxuPC9zZWN0aW9uPlxuXG48IS0tIFNpZ251cDogZm9yZ290IHBhc3N3b3JkIC0tPlxuPHNlY3Rpb24gKm5nSWY9XCJkYXRhICYmIGRhdGEuZm9yZ290UGFzc3dvcmRcIiBjbGFzcz1cIm43LXNpZ251cCBuNy1zaWdudXAtLWZvcmdvdC1wYXNzd29yZFwiPlxuICAgIDxwIGNsYXNzPVwibjctc2lnbnVwX190ZXh0XCI+XG4gICAgICAgIHt7IGRhdGEuZm9yZ290UGFzc3dvcmQuZGVzY3JpcHRpb24gfX1cbiAgICA8L3A+XG4gICAgPGZvcm0gY2xhc3M9XCJuNy1zaWdudXBfX2Zvcm1cIiBub3ZhbGlkYXRlPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiXG4gICAgICAgIGZpZWxkO1xuICAgICAgICBjb250ZXh0OiB7ICRpbXBsaWNpdDogZGF0YS5mb3Jnb3RQYXNzd29yZC5lbWFpbCB9XG4gICAgICBcIj48L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiXG4gICAgICAgIHN1Ym1pdDtcbiAgICAgICAgY29udGV4dDogeyAkaW1wbGljaXQ6IGRhdGEuZm9yZ290UGFzc3dvcmQuc3VibWl0IH1cbiAgICAgIFwiPjwvbmctY29udGFpbmVyPlxuXG4gICAgICA8IS0tIGhpZGRlbiBzdWJtaXQgYnV0dG9uIHRvIHByZXZlbnQgc3VibWl0IG9uIGVudGVyIC0tPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQgc3R5bGU9XCJkaXNwbGF5OiBub25lXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJcbiAgICAgIGZvb3RlcjtcbiAgICAgIGNvbnRleHQ6IHsgJGltcGxpY2l0OiBkYXRhLmZvcmdvdFBhc3N3b3JkLmZvb3RlciB9XG4gICAgXCI+PC9uZy1jb250YWluZXI+XG48L3NlY3Rpb24+XG5cbjwhLS0gVGVtcGxhdGU6IGZpZWxkIC0tPlxuPG5nLXRlbXBsYXRlICNmaWVsZCBsZXQtZmllbGQ+XG4gICAgPGRpdiBbbmdDbGFzc109XCJ7XG4gICAgICAnaGFzLWVycm9yJzogZmllbGQuZXJyb3IsXG4gICAgICAnaGFzLWhpbnQnOiBmaWVsZC5oaW50XG4gICAgfVwiIGNsYXNzPVwibjctc2lnbnVwX19mb3JtLWl0ZW0ge3sgZmllbGQuY2xhc3NlcyB8fCAnJyB9fVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJuNy1zaWdudXBfX2Zvcm0taXRlbS1sYWJlbFwiIGZvcj1cInt7IGZpZWxkLmlkIH19XCI+e3tcbiAgICAgIGZpZWxkLmxhYmVsXG4gICAgfX08L2xhYmVsPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiZmllbGQuaGludFwiIGNsYXNzPVwibjctc2lnbnVwX19mb3JtLWl0ZW0taGludFwiPlxuICAgICAgICAgICAge3sgZmllbGQuaGludCB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm43LXNpZ251cF9faW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgICAgPGlucHV0IChmb2N1cyk9XCJvbkZvY3VzKGZpZWxkLnBheWxvYWQpXCIgKGZvY3Vzb3V0KT1cIm9uRm9jdXNPdXQoZmllbGQucGF5bG9hZClcIlxuICAgICAgICAgICAgICAgIChrZXl1cC5lbnRlcik9XCJvbklucHV0RW50ZXIoZmllbGQucGF5bG9hZCwgJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICAgICAgICAgICAgICAgIChpbnB1dCk9XCJvbkNoYW5nZShmaWVsZC5wYXlsb2FkLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVwiIGNsYXNzPVwibjctc2lnbnVwX19mb3JtLWl0ZW0taW5wdXRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ7eyBmaWVsZC5pbnB1dFR5cGUgfX1cIiBpZD1cInt7IGZpZWxkLmlkIH19XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJmaWVsZC5lcnJvclwiIGNsYXNzPVwibjctc2lnbnVwX19mb3JtLWVycm9yXCI+XG4gICAgICAgICAgICB7eyBmaWVsZC5lcnJvciB9fVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG5cbjwhLS0gVGVtcGxhdGU6IHBhc3N3b3JkLWZpZWxkIC0tPlxuPG5nLXRlbXBsYXRlICNwYXNzd29yZEZpZWxkIGxldC1maWVsZD5cbiAgICA8ZGl2IFtuZ0NsYXNzXT1cIntcbiAgICAgICdoYXMtZXJyb3InOiBmaWVsZC5lcnJvcixcbiAgICAgICdoYXMtaGludCc6IGZpZWxkLmhpbnRcbiAgICB9XCIgY2xhc3M9XCJuNy1zaWdudXBfX2Zvcm0taXRlbSB7eyBmaWVsZC5jbGFzc2VzIHx8ICcnIH19XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cIm43LXNpZ251cF9fZm9ybS1pdGVtLWxhYmVsXCIgZm9yPVwie3sgZmllbGQuaWQgfX1cIj57e1xuICAgICAgZmllbGQubGFiZWxcbiAgICB9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJmaWVsZC5oaW50XCIgY2xhc3M9XCJuNy1zaWdudXBfX2Zvcm0taXRlbS1oaW50XCI+XG4gICAgICAgICAgICB7eyBmaWVsZC5oaW50IH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibjctc2lnbnVwX19pbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgICA8aW5wdXQgKGZvY3VzKT1cIm9uRm9jdXMoZmllbGQucGF5bG9hZClcIiAoZm9jdXNvdXQpPVwib25Gb2N1c091dChmaWVsZC5wYXlsb2FkKVwiXG4gICAgICAgICAgICAgICAgKGtleXVwLmVudGVyKT1cIm9uSW5wdXRFbnRlcihmaWVsZC5wYXlsb2FkLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgKGlucHV0KT1cIm9uQ2hhbmdlKGZpZWxkLnBheWxvYWQsICRldmVudC50YXJnZXQudmFsdWUpXCIgY2xhc3M9XCJuNy1zaWdudXBfX2Zvcm0taXRlbS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInt7IGZpZWxkLmlucHV0VHlwZSB9fVwiIGlkPVwie3sgZmllbGQuaWQgfX1cIiAvPlxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImZpZWxkLnNob3dcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIm9uQ2xpY2soZmllbGQuc2hvdy5wYXlsb2FkKVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJmaWVsZC5zaG93LmxhYmVsXCIgY2xhc3M9XCJuNy1zaWdudXBfX2Zvcm0taXRlbS1zaG93LXBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgPGkgW2F0dHIuYXJpYS1sYWJlbF09XCJmaWVsZC5zaG93LmxhYmVsXCIgY2xhc3M9XCJ7eyBmaWVsZC5zaG93Lmljb24gfX1cIj48L2k+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJmaWVsZC5lcnJvclwiIGNsYXNzPVwibjctc2lnbnVwX19mb3JtLWVycm9yXCI+XG4gICAgICAgICAgICB7eyBmaWVsZC5lcnJvciB9fVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG5cbjwhLS0gVGVtcGxhdGU6IGZvb3RlciAtLT5cbjxuZy10ZW1wbGF0ZSAjZm9vdGVyIGxldC1mb290ZXI+XG4gICAgPGZvb3RlciAqbmdJZj1cImZvb3RlclwiIGNsYXNzPVwibjctc2lnbnVwX19mb290ZXIge3sgZm9vdGVyLmNsYXNzZXMgfHwgJycgfX1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm43LXNpZ251cF9fZm9vdGVyLXRleHRcIj57eyBmb290ZXIubGFiZWwgfX08L2Rpdj5cbiAgICAgICAgPGEgKm5nSWY9XCJmb290ZXIuYWN0aW9uXCIgKGNsaWNrKT1cIm9uQ2xpY2soZm9vdGVyLmFjdGlvbi5wYXlsb2FkKVwiIHRpdGxlPVwie3sgZm9vdGVyLmFjdGlvbi5sYWJlbCB9fVwiXG4gICAgICAgICAgICBjbGFzcz1cIm43LWJ0blwiPnt7IGZvb3Rlci5hY3Rpb24ubGFiZWwgfX08L2E+XG4gICAgPC9mb290ZXI+XG48L25nLXRlbXBsYXRlPlxuXG48IS0tIFRlbXBsYXRlOiBzdWJtaXQgYnV0dG9uIC0tPlxuPG5nLXRlbXBsYXRlICNzdWJtaXQgbGV0LXN1Ym1pdD5cbiAgICA8ZGl2IFtuZ0NsYXNzXT1cIntcbiAgICAgICdoYXMtZXJyb3InOiBzdWJtaXQuZXJyb3JcbiAgICB9XCIgY2xhc3M9XCJuNy1zaWdudXBfX2Zvcm0taXRlbSBuNy1zaWdudXBfX2Zvcm0taXRlbS1hY3Rpb24ge3tcbiAgICAgIHN1Ym1pdC5jbGFzc2VzIHx8ICcnXG4gICAgfX1cIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIm9uQ2xpY2soc3VibWl0LnBheWxvYWQpXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJzdWJtaXQubGFiZWxcIlxuICAgICAgICAgICAgY2xhc3M9XCJuNy1idG4gbjctYnRuLWN0YVwiPlxuICAgICAgICAgICAge3sgc3VibWl0LmxhYmVsIH19XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwic3VibWl0LmVycm9yXCIgY2xhc3M9XCJuNy1zaWdudXBfX2Zvcm0tZXJyb3JcIj5cbiAgICAgICAgICAgIHt7IHN1Ym1pdC5lcnJvciB9fVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+Il19