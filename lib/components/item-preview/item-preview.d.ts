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
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ItemPreviewComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ItemPreviewComponent, "n7-item-preview", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1wcmV2aWV3LmQudHMiLCJzb3VyY2VzIjpbIml0ZW0tcHJldmlldy5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEl0ZW1QcmV2aWV3Q29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGltYWdlIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHRpdGxlIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHRleHQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgYW5jaG9yIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IG1ldGFkYXRhIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJdGVtUHJldmlld0RhdGEge1xyXG4gICAgLyoqXHJcbiAgICAqIGltYWdlIG9mIHRoZSBwcmV2aWV3XHJcbiAgICAqL1xyXG4gICAgaW1hZ2U/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICogbmFtZSBvZiB0aGUgaXRlbVxyXG4gICAgKi9cclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICogdGV4dCBvZiB0aGUgaXRlbVxyXG4gICAgKi9cclxuICAgIHRleHQ/OiBzdHJpbmc7XHJcbiAgICBhbmNob3I/OiBBbmNob3I7XHJcbiAgICAvKipcclxuICAgICogbGlzdCBvZiB0aGUgZGF0YSBpbiB0aGUgbWV0YWRhdGFcclxuICAgICovXHJcbiAgICBtZXRhZGF0YT86IE1ldGFkYXRhR3JvdXBbXTtcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgICAqL1xyXG4gICAgY2xhc3Nlcz86IHN0cmluZztcclxufVxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciB0aGUgZWxlbWVudCB0aGF0IHdyYXBzIHRoZSBtZXRhZGF0YVxyXG4gKlxyXG4gKiBAcHJvcGVydHkgdGl0bGUgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpdGVtcyAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhR3JvdXAge1xyXG4gICAgLyoqXHJcbiAgICAgKiB0aXRsZSBvZiBtZXRhZGF0YSBncm91cFxyXG4gICAgICovXHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogY2xhc3NlcyBvZiBtZXRhZGF0YSBncm91cFxyXG4gICAgICovXHJcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhcnJheSBvZiBtZXRhZGF0YSBpdGVtc1xyXG4gICAgICovXHJcbiAgICBpdGVtcz86IE1ldGFkYXRhRGF0YVtdO1xyXG59XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGEgbGlzdCBvZiBtZXRhZGF0YVxyXG4gKlxyXG4gKiBAcHJvcGVydHkgbGFiZWwgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgdmFsdWUgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWV0YWRhdGFEYXRhIHtcclxuICAgIC8qKlxyXG4gICAgICogbGFiZWwgb2YgYSBzaW5nbGUgcHJvcGVydHkgb2YgdGhlIG1ldGFkYXRhXHJcbiAgICAgKi9cclxuICAgIGxhYmVsPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiB2YWx1ZSBvZiBhIHNpbmdsZSBwcm9wZXJ0eSBvZiB0aGUgbWV0YWRhdGFcclxuICAgICAqL1xyXG4gICAgdmFsdWU/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGNhdGVnb3J5IG9mIGEgaXRlbSBvZiB0aGUgaWNvbiBsaXN0LCB1c2VkIHRvIGdpdmUgYSBkaWZmZXJlbnQgY2xhc3NcclxuICAgICAqL1xyXG4gICAgY2xhc3Nlcz86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogaWNvbiBvZiBhbiBpdGVtIG9mIHRoZSBpY29uIGxpc3RcclxuICAgICAqL1xyXG4gICAgaWNvbj86IHN0cmluZztcclxufVxyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJdGVtUHJldmlld0NvbXBvbmVudCB7XHJcbiAgICBkYXRhOiBJdGVtUHJldmlld0RhdGE7XHJcbiAgICBlbWl0OiBhbnk7XHJcbiAgICBvbkNsaWNrKHBheWxvYWQ6IGFueSk6IHZvaWQ7XHJcbn1cclxuIl19