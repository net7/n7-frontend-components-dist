import { IAnchor } from '../../shared-interfaces';
/**
 * Interface for a single BreadcrumbsComponent's "Item"
 *
 * @property label (required)
 * @property payload (required)
 * @property classes (optional)
 * @property _meta (optional)
 *
 */
export interface IBreadcrumbsItem {
    /**
     * item's label
     */
    label: string;
    anchor: IAnchor;
    /**
     * additional html classes
     */
    classes?: any;
    /**
     * additional info useful for the component's logic
     */
    _meta?: any;
}
/**
 * Interface for BreadcrumbsComponent's "Data"
 *
 * @property items (required)
 * @property classes (optional)
 *
 */
export interface IBreadcrumbsData {
    /**
     * each item renders a breadcrumb level
     */
    items: IBreadcrumbsItem[];
    /**
     * additional html classes
     */
    classes?: any;
}
export declare class BreadcrumbsComponent {
    data: IBreadcrumbsData;
    emit: any;
    onClick(payload: any): void;
}
