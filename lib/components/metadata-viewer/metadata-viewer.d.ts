/**
 * Interface for MetadataViewerComponent's "data"
 *
 * @property group (required)
 * @property classes (optional)
 */
export interface IMetadataViewerData {
    /**
     * the CHILD metadata groups
     */
    group: IMetadataViewerChildGroups[];
    /**
     * additional html classes
     */
    classes?: any;
}
/**
 * Interface for MetadataViewerComponent's "data"
 *
 * @property title (optional)
 * @property items (optional)
 * @property group (optional)
 * @property classes (optional)
 */
export interface IMetadataViewerChildGroups {
    /**
     * component header (if root)
     * or group title
     */
    title?: string;
    /**
     * the metadata items
     */
    items?: IMetadataViewerItems[];
    /**
     * the CHILD metadata groups
     */
    group?: IMetadataViewerChildGroups[];
    /**
     * additional html classes
     */
    classes?: any;
}
/**
 * Interface for MetadataViewerComponent's "items"
 * @property label (required)
 * @property value (required)
 */
export interface IMetadataViewerItems {
    /**
     * the item's label
     */
    label: string;
    /**
     * the value for @property label
     */
    value: string;
}
export declare class MetadataViewerComponent {
    data: IMetadataViewerData;
    emit: any;
}
