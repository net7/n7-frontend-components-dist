import * as i0 from "@angular/core";
/**
 * Interface for MetadataViewerComponent's "items"
 * @property label (optional)
 * @property value (optional)
 */
export interface MetadataViewerItems {
    /**
     * the item's label
     */
    label?: string;
    /**
     * the value for @property label
     */
    value?: string;
}
/**
 * Interface for MetadataViewerComponent's "child groups"
 *
 * @property title (optional)
 * @property items (optional)
 * @property group (optional)
 * @property classes (optional)
 */
export interface MetadataViewerChildGroups {
    /**
     * component header (if root)
     * or group title
     */
    title?: string;
    /**
     * the metadata items
     */
    items?: MetadataViewerItems[];
    /**
     * the CHILD metadata groups
     */
    group?: MetadataViewerChildGroups[];
    /**
     * additional html classes
     */
    classes?: any;
}
/**
 * Interface for MetadataViewerComponent's "data"
 *
 * @property group (required)
 * @property classes (optional)
 */
export interface MetadataViewerData {
    /**
     * the CHILD metadata groups
     */
    group: MetadataViewerChildGroups[];
    /**
     * additional html classes
     */
    classes?: any;
}
export declare class MetadataViewerComponent {
    data: MetadataViewerData;
    emit: any;
    static ɵfac: i0.ɵɵFactoryDeclaration<MetadataViewerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MetadataViewerComponent, "n7-metadata-viewer", never, { "data": { "alias": "data"; "required": false; }; "emit": { "alias": "emit"; "required": false; }; }, {}, never, never, false, never>;
}
