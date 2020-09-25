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
}
export {};
