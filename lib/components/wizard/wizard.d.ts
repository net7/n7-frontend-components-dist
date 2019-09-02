export interface IWizardItem {
    text?: string;
    number?: number;
    payload: any;
    classes?: any;
    _meta?: any;
}
export interface IWizardData {
    items: IWizardItem[];
    classes?: any;
}
/**
 * WizardComponent <n7-wizard>
 *
 * @example
 * ```html
 *
 * <!-- TODO: add component example -->
 * ```
 */
export declare class WizardComponent {
    data: IWizardData;
    emit: any;
    onClick(payload: any): void;
}
