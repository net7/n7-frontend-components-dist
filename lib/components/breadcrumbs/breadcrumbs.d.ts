export interface IBreadcrumbsItem {
    label: string;
    payload: any;
    classes?: any;
    _meta?: any;
}
export interface IBreadcrumbsData {
    items: IBreadcrumbsItem[];
    classes?: any;
}
/**
 * BreadcrumbsComponent <n7-breadcrumbs>
 *
 * @example
 * ```html
 *
 * <!-- TODO: add component example -->
 * ```
 */
export declare class BreadcrumbsComponent {
    data: IBreadcrumbsData;
    emit: any;
    onClick(payload: any): void;
}
