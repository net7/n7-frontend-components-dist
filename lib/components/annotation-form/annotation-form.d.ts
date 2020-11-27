import { Icon } from '../../shared-interfaces';
declare type SelectItemOption = {
    label: string;
    value: string;
    selected?: boolean;
};
declare type SelectItemDivider = {
    divider: boolean;
};
/**
 * Interface for AnnotationFormComponent's "data"
 *
 * @property select (required)
 * - label (required)
 * - toggleLabel (required)
 * - items (required)
 * - payload (required)
 * - icon (optional)
 * - classes (optional)
 * @property actions (required)
 * - label (required)
 * - payload (required)
 * - classes (optional)
 * - icon (optional)
 * @property textarea (optional)
 * - value (required)
 * - payload (required)
 * - classes (optional)
 */
export interface AnnotationFormData {
    select: {
        label: string;
        toggleLabel: string;
        items: (SelectItemOption | SelectItemDivider)[];
        payload: any;
        icon?: Icon;
        classes?: string;
    };
    actions: {
        label: string;
        payload: any;
        classes?: any;
        icon?: Icon;
    }[];
    textarea?: {
        value: string | null;
        payload: any;
        classes?: string;
    };
}
export declare class AnnotationFormComponent {
    data: AnnotationFormData;
    emit: any;
    onClick(payload: any): void;
    onChange(inputPayload: any, inputValue: any): void;
}
export {};
