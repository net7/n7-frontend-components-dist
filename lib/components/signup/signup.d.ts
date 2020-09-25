/**
 * Interface for Signup field
 *
 * @property id (M)
 * @property label (M)
 * @property inputType (M)
 * @property payload (M)
 * @property error (O)
 * @property hint (O)
 * @property classes (O)
 */
import * as ɵngcc0 from '@angular/core';
interface SignupField {
    id: string;
    label: string;
    inputType: 'password' | 'text' | 'email';
    payload: any;
    error?: string;
    hint?: string;
    classes?: string;
}
/**
 * Interface for Signup password field (extends SignupField)
 *
 * @property show (O)
 */
interface SignupPasswordField extends SignupField {
    show?: {
        icon: string;
        label: string;
        payload: any;
    };
}
/**
 * Interface for Signup submit
 *
 * @property label (M)
 * @property payload (M)
 * @property error (O)
 * @property classes (O)
 */
interface SignupSubmit {
    label: string;
    payload: any;
    error?: string;
    classes?: string;
}
/**
 * Interface for Signup footer
 *
 * @property label (M)
 * @property action (M)
 * @property classes (O)
 */
interface SignupFooter {
    label: string;
    action: {
        label: string;
        payload: any;
    };
    classes?: string;
}
/**
 * Interface for Signup data
 * login/signup/forgotPassword groups
 *
 * @property login (O)
 * @property signup (O)
 * @property forgotPassword (O)
 */
export interface SignupData {
    login?: {
        email: SignupField;
        password: SignupPasswordField;
        forgotPassword?: {
            title: string;
            label: string;
            payload: any;
        };
        submit: SignupSubmit;
        footer?: SignupFooter;
    };
    signup?: {
        name: SignupField;
        email: SignupField;
        password: SignupPasswordField;
        rePassword: SignupPasswordField;
        submit: SignupSubmit;
        footer?: SignupFooter;
    };
    forgotPassword?: {
        description: string;
        email: SignupField;
        submit: SignupSubmit;
        footer?: SignupFooter;
    };
}
export declare class SignupComponent {
    data: SignupData;
    emit: any;
    onClick(payload: any): void;
    onChange(inputPayload: any, value: any): void;
    onInputEnter(inputPayload: any, value: any): void;
    onFocus(payload: any): void;
    onFocusOut(payload: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SignupComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SignupComponent, "n7-signup", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}
export {};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmQudHMiLCJzb3VyY2VzIjpbInNpZ251cC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgU2lnbnVwIGZpZWxkXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBpZCAoTSlcclxuICogQHByb3BlcnR5IGxhYmVsIChNKVxyXG4gKiBAcHJvcGVydHkgaW5wdXRUeXBlIChNKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAoTSlcclxuICogQHByb3BlcnR5IGVycm9yIChPKVxyXG4gKiBAcHJvcGVydHkgaGludCAoTylcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKE8pXHJcbiAqL1xyXG5pbnRlcmZhY2UgU2lnbnVwRmllbGQge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBpbnB1dFR5cGU6ICdwYXNzd29yZCcgfCAndGV4dCcgfCAnZW1haWwnO1xyXG4gICAgcGF5bG9hZDogYW55O1xyXG4gICAgZXJyb3I/OiBzdHJpbmc7XHJcbiAgICBoaW50Pzogc3RyaW5nO1xyXG4gICAgY2xhc3Nlcz86IHN0cmluZztcclxufVxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBTaWdudXAgcGFzc3dvcmQgZmllbGQgKGV4dGVuZHMgU2lnbnVwRmllbGQpXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBzaG93IChPKVxyXG4gKi9cclxuaW50ZXJmYWNlIFNpZ251cFBhc3N3b3JkRmllbGQgZXh0ZW5kcyBTaWdudXBGaWVsZCB7XHJcbiAgICBzaG93Pzoge1xyXG4gICAgICAgIGljb246IHN0cmluZztcclxuICAgICAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgICAgIHBheWxvYWQ6IGFueTtcclxuICAgIH07XHJcbn1cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgU2lnbnVwIHN1Ym1pdFxyXG4gKlxyXG4gKiBAcHJvcGVydHkgbGFiZWwgKE0pXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChNKVxyXG4gKiBAcHJvcGVydHkgZXJyb3IgKE8pXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChPKVxyXG4gKi9cclxuaW50ZXJmYWNlIFNpZ251cFN1Ym1pdCB7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgcGF5bG9hZDogYW55O1xyXG4gICAgZXJyb3I/OiBzdHJpbmc7XHJcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIFNpZ251cCBmb290ZXJcclxuICpcclxuICogQHByb3BlcnR5IGxhYmVsIChNKVxyXG4gKiBAcHJvcGVydHkgYWN0aW9uIChNKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAoTylcclxuICovXHJcbmludGVyZmFjZSBTaWdudXBGb290ZXIge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIGFjdGlvbjoge1xyXG4gICAgICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICAgICAgcGF5bG9hZDogYW55O1xyXG4gICAgfTtcclxuICAgIGNsYXNzZXM/OiBzdHJpbmc7XHJcbn1cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgU2lnbnVwIGRhdGFcclxuICogbG9naW4vc2lnbnVwL2ZvcmdvdFBhc3N3b3JkIGdyb3Vwc1xyXG4gKlxyXG4gKiBAcHJvcGVydHkgbG9naW4gKE8pXHJcbiAqIEBwcm9wZXJ0eSBzaWdudXAgKE8pXHJcbiAqIEBwcm9wZXJ0eSBmb3Jnb3RQYXNzd29yZCAoTylcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lnbnVwRGF0YSB7XHJcbiAgICBsb2dpbj86IHtcclxuICAgICAgICBlbWFpbDogU2lnbnVwRmllbGQ7XHJcbiAgICAgICAgcGFzc3dvcmQ6IFNpZ251cFBhc3N3b3JkRmllbGQ7XHJcbiAgICAgICAgZm9yZ290UGFzc3dvcmQ/OiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIHBheWxvYWQ6IGFueTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN1Ym1pdDogU2lnbnVwU3VibWl0O1xyXG4gICAgICAgIGZvb3Rlcj86IFNpZ251cEZvb3RlcjtcclxuICAgIH07XHJcbiAgICBzaWdudXA/OiB7XHJcbiAgICAgICAgbmFtZTogU2lnbnVwRmllbGQ7XHJcbiAgICAgICAgZW1haWw6IFNpZ251cEZpZWxkO1xyXG4gICAgICAgIHBhc3N3b3JkOiBTaWdudXBQYXNzd29yZEZpZWxkO1xyXG4gICAgICAgIHJlUGFzc3dvcmQ6IFNpZ251cFBhc3N3b3JkRmllbGQ7XHJcbiAgICAgICAgc3VibWl0OiBTaWdudXBTdWJtaXQ7XHJcbiAgICAgICAgZm9vdGVyPzogU2lnbnVwRm9vdGVyO1xyXG4gICAgfTtcclxuICAgIGZvcmdvdFBhc3N3b3JkPzoge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgZW1haWw6IFNpZ251cEZpZWxkO1xyXG4gICAgICAgIHN1Ym1pdDogU2lnbnVwU3VibWl0O1xyXG4gICAgICAgIGZvb3Rlcj86IFNpZ251cEZvb3RlcjtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2lnbnVwQ29tcG9uZW50IHtcclxuICAgIGRhdGE6IFNpZ251cERhdGE7XHJcbiAgICBlbWl0OiBhbnk7XHJcbiAgICBvbkNsaWNrKHBheWxvYWQ6IGFueSk6IHZvaWQ7XHJcbiAgICBvbkNoYW5nZShpbnB1dFBheWxvYWQ6IGFueSwgdmFsdWU6IGFueSk6IHZvaWQ7XHJcbiAgICBvbklucHV0RW50ZXIoaW5wdXRQYXlsb2FkOiBhbnksIHZhbHVlOiBhbnkpOiB2b2lkO1xyXG4gICAgb25Gb2N1cyhwYXlsb2FkOiBhbnkpOiB2b2lkO1xyXG4gICAgb25Gb2N1c091dChwYXlsb2FkOiBhbnkpOiB2b2lkO1xyXG59XHJcbmV4cG9ydCB7fTtcclxuIl19