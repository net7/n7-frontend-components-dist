/**
 * Interface for MetadataViewerComponent's "data"
 *
 * @property group (required)
 * @property classes (optional)
 */
import * as ɵngcc0 from '@angular/core';
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
/**
 * Interface for MetadataViewerComponent's "data"
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
 * Interface for MetadataViewerComponent's "items"
 * @property label (required)
 * @property value (required)
 */
export interface MetadataViewerItems {
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
    data: MetadataViewerData;
    emit: any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MetadataViewerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MetadataViewerComponent, "n7-metadata-viewer", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEtdmlld2VyLmQudHMiLCJzb3VyY2VzIjpbIm1ldGFkYXRhLXZpZXdlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogSW50ZXJmYWNlIGZvciBNZXRhZGF0YVZpZXdlckNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBncm91cCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWV0YWRhdGFWaWV3ZXJEYXRhIHtcclxuICAgIC8qKlxyXG4gICAgICogdGhlIENISUxEIG1ldGFkYXRhIGdyb3Vwc1xyXG4gICAgICovXHJcbiAgICBncm91cDogTWV0YWRhdGFWaWV3ZXJDaGlsZEdyb3Vwc1tdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAgICovXHJcbiAgICBjbGFzc2VzPzogYW55O1xyXG59XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIE1ldGFkYXRhVmlld2VyQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IHRpdGxlIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGl0ZW1zIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGdyb3VwIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBNZXRhZGF0YVZpZXdlckNoaWxkR3JvdXBzIHtcclxuICAgIC8qKlxyXG4gICAgICogY29tcG9uZW50IGhlYWRlciAoaWYgcm9vdClcclxuICAgICAqIG9yIGdyb3VwIHRpdGxlXHJcbiAgICAgKi9cclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiB0aGUgbWV0YWRhdGEgaXRlbXNcclxuICAgICAqL1xyXG4gICAgaXRlbXM/OiBNZXRhZGF0YVZpZXdlckl0ZW1zW107XHJcbiAgICAvKipcclxuICAgICAqIHRoZSBDSElMRCBtZXRhZGF0YSBncm91cHNcclxuICAgICAqL1xyXG4gICAgZ3JvdXA/OiBNZXRhZGF0YVZpZXdlckNoaWxkR3JvdXBzW107XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICAgKi9cclxuICAgIGNsYXNzZXM/OiBhbnk7XHJcbn1cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgTWV0YWRhdGFWaWV3ZXJDb21wb25lbnQncyBcIml0ZW1zXCJcclxuICogQHByb3BlcnR5IGxhYmVsIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHZhbHVlIChyZXF1aXJlZClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWV0YWRhdGFWaWV3ZXJJdGVtcyB7XHJcbiAgICAvKipcclxuICAgICAqIHRoZSBpdGVtJ3MgbGFiZWxcclxuICAgICAqL1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogdGhlIHZhbHVlIGZvciBAcHJvcGVydHkgbGFiZWxcclxuICAgICAqL1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxufVxyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBNZXRhZGF0YVZpZXdlckNvbXBvbmVudCB7XHJcbiAgICBkYXRhOiBNZXRhZGF0YVZpZXdlckRhdGE7XHJcbiAgICBlbWl0OiBhbnk7XHJcbn1cclxuIl19