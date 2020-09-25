import { Anchor } from '../../shared-interfaces';
/**
 * Interface for ItemPreviewComponent's "data"
 *
 * @property image (optional)
 * @property title (required)
 * @property text (optional)
 * @property anchor (optional)
 * @property metadata (optional)
 * @property classes (optional)
 */
export interface ItemPreviewData {
    /**
    * image of the preview
    */
    image?: string;
    /**
    * name of the item
    */
    title: string;
    /**
    * text of the item
    */
    text?: string;
    anchor?: Anchor;
    /**
    * list of the data in the metadata
    */
    metadata?: MetadataGroup[];
    /**
     * additional html classes
     */
    classes?: string;
}
/**
 * Interface for the element that wraps the metadata
 *
 * @property title (optional)
 * @property classes (optional)
 * @property items (optional)
 */
export interface MetadataGroup {
    /**
     * title of metadata group
     */
    title?: string;
    /**
     * classes of metadata group
     */
    classes?: string;
    /**
     * array of metadata items
     */
    items?: MetadataData[];
}
/**
 * Interface for a list of metadata
 *
 * @property label (optional)
 * @property value (optional)
 * @property classes (optional)
 * @property icon (optional)
 */
export interface MetadataData {
    /**
     * label of a single property of the metadata
     */
    label?: string;
    /**
     * value of a single property of the metadata
     */
    value?: string;
    /**
     * category of a item of the icon list, used to give a different class
     */
    classes?: string;
    /**
     * icon of an item of the icon list
     */
    icon?: string;
}
export declare class ItemPreviewComponent {
    data: ItemPreviewData;
    emit: any;
    onClick(payload: any): void;
}
