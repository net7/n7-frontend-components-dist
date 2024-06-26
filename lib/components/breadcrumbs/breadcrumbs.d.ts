import { Anchor } from '../../shared-interfaces';
import * as i0 from "@angular/core";
/**
 * Interface for a single BreadcrumbsComponent's "Item"
 *
 * @property label (required)
 * @property payload (required)
 * @property classes (optional)
 * @property _meta (optional)
 *
 */
export interface BreadcrumbsItem {
    /**
     * item's label
     */
    label: string;
    anchor: Anchor;
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
export interface BreadcrumbsData {
    /**
     * each item renders a breadcrumb level
     */
    items: BreadcrumbsItem[];
    /**
     * additional html classes
     */
    classes?: any;
}
export declare class BreadcrumbsComponent {
    data: BreadcrumbsData;
    emit: any;
    onClick(payload: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadcrumbsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BreadcrumbsComponent, "n7-breadcrumbs", never, { "data": "data"; "emit": "emit"; }, {}, never, never, false>;
}
