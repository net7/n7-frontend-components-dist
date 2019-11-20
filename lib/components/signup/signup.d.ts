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
interface ISignupField {
    id: string;
    label: string;
    inputType: 'password' | 'text' | 'email';
    payload: any;
    error?: string;
    hint?: string;
    classes?: string;
}
/**
 * Interface for Signup password field (extends ISignupField)
 *
 * @property show (O)
 */
interface ISignupPasswordField extends ISignupField {
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
interface ISignupSubmit {
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
interface ISignupFooter {
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
export interface ISignupData {
    login?: {
        email: ISignupField;
        password: ISignupPasswordField;
        forgotPassword?: {
            title: string;
            label: string;
            payload: any;
        };
        submit: ISignupSubmit;
        footer?: ISignupFooter;
    };
    signup?: {
        name: ISignupField;
        email: ISignupField;
        password: ISignupPasswordField;
        rePassword: ISignupPasswordField;
        submit: ISignupSubmit;
        footer?: ISignupFooter;
    };
    forgotPassword?: {
        description: string;
        email: ISignupField;
        submit: ISignupSubmit;
        footer?: ISignupFooter;
    };
}
export declare class SignupComponent {
    data: ISignupData;
    emit: any;
    onClick(payload: any): void;
    onChange(inputPayload: any, value: any): void;
    onInputEnter(inputPayload: any, value: any): void;
    onFocus(payload: any): void;
    onFocusOut(payload: any): void;
}
export {};
