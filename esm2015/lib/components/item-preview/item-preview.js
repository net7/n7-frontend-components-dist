/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/item-preview/item-preview.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// ITEM-PREVIEW.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for ItemPreviewComponent's "data"
 *
 * \@property image (optional)
 * \@property title (required)
 * \@property text (optional)
 * \@property anchor (optional)
 * \@property metadata (optional)
 * \@property classes (optional)
 * @record
 */
export function ItemPreviewData() { }
if (false) {
    /**
     * image of the preview
     * @type {?|undefined}
     */
    ItemPreviewData.prototype.image;
    /**
     * name of the item
     * @type {?}
     */
    ItemPreviewData.prototype.title;
    /**
     * text of the item
     * @type {?|undefined}
     */
    ItemPreviewData.prototype.text;
    /** @type {?|undefined} */
    ItemPreviewData.prototype.anchor;
    /**
     * list of the data in the metadata
     * @type {?|undefined}
     */
    ItemPreviewData.prototype.metadata;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    ItemPreviewData.prototype.classes;
}
/**
 * Interface for the element that wraps the metadata
 *
 * \@property title (optional)
 * \@property classes (optional)
 * \@property items (optional)
 * @record
 */
export function MetadataGroup() { }
if (false) {
    /**
     * title of metadata group
     * @type {?|undefined}
     */
    MetadataGroup.prototype.title;
    /**
     * classes of metadata group
     * @type {?|undefined}
     */
    MetadataGroup.prototype.classes;
    /**
     * array of metadata items
     * @type {?|undefined}
     */
    MetadataGroup.prototype.items;
}
/**
 * Interface for a list of metadata
 *
 * \@property label (optional)
 * \@property value (optional)
 * \@property classes (optional)
 * \@property icon (optional)
 * @record
 */
export function MetadataData() { }
if (false) {
    /**
     * label of a single property of the metadata
     * @type {?|undefined}
     */
    MetadataData.prototype.label;
    /**
     * value of a single property of the metadata
     * @type {?|undefined}
     */
    MetadataData.prototype.value;
    /**
     * category of a item of the icon list, used to give a different class
     * @type {?|undefined}
     */
    MetadataData.prototype.classes;
    /**
     * icon of an item of the icon list
     * @type {?|undefined}
     */
    MetadataData.prototype.icon;
}
export class ItemPreviewComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
}
ItemPreviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-item-preview',
                template: "<div *ngIf=\"data\" class=\"n7-item-preview {{data.classes || ''}}\" [ngClass]=\"{ 'has-image' : !!data.image }\">\r\n    <n7-anchor-wrapper\r\n    [data]=\"data.anchor\"\r\n    (clicked)=\"onClick($event)\">\r\n        <!-- Image -->\r\n        <div class=\"n7-item-preview__image\"\r\n            *ngIf=\"data.image\"\r\n            [style.background-image] = \"'url(' + data.image + ')'\">       \r\n        </div>\r\n        <div class=\"n7-item-preview__content\">\r\n            <!-- Title and text -->\r\n            <div class=\"n7-item-preview__title-text\">\r\n                <h1 class=\"n7-item-preview__title\" [innerHTML]=\"data.title\"></h1>\r\n                <p class=\"n7-item-preview__text\" *ngIf=\"data.text\" [innerHTML]=\"data.text\"></p>\r\n            </div>\r\n            <!-- Metadata -->\r\n            <div class=\"n7-item-preview__metadata\" *ngIf=\"data.metadata\">       \r\n                <div class=\"n7-item-preview__metadata-group {{ meta.classes || '' }}\" *ngFor=\"let meta of data.metadata\">\r\n                    <h3 class=\"n7-item-preview__metadata-group-title\" *ngIf=\"meta.title\" [innerHTML]=\"meta.title\"></h3>\r\n                    <div class=\"n7-item-preview__metadata-item {{ item.classes || '' }}\" *ngFor=\"let item of meta.items\">\r\n                        <span class=\"n7-item-preview__metadata-item-icon {{item.icon}}\" *ngIf=\"item.icon\"></span>\r\n                        <span class=\"n7-item-preview__metadata-item-label\" *ngIf=\"item.label\" [innerHTML]=\"item.label\"></span>\r\n                        <span class=\"n7-item-preview__metadata-item-value\" *ngIf=\"item.value\" [innerHTML]=\"item.value\"></span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </n7-anchor-wrapper>\r\n</div>\r\n"
            }] }
];
ItemPreviewComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ItemPreviewComponent.prototype.data;
    /** @type {?} */
    ItemPreviewComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1wcmV2aWV3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pdGVtLXByZXZpZXcvaXRlbS1wcmV2aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQWFqRCxxQ0FzQkM7Ozs7OztJQWxCQyxnQ0FBZTs7Ozs7SUFJZixnQ0FBYzs7Ozs7SUFJZCwrQkFBYzs7SUFDZCxpQ0FBZ0I7Ozs7O0lBSWhCLG1DQUEyQjs7Ozs7SUFJM0Isa0NBQWlCOzs7Ozs7Ozs7O0FBVW5CLG1DQWFDOzs7Ozs7SUFUQyw4QkFBZTs7Ozs7SUFJZixnQ0FBaUI7Ozs7O0lBSWpCLDhCQUF1Qjs7Ozs7Ozs7Ozs7QUFXekIsa0NBaUJDOzs7Ozs7SUFiQyw2QkFBZTs7Ozs7SUFJZiw2QkFBZTs7Ozs7SUFJZiwrQkFBaUI7Ozs7O0lBSWpCLDRCQUFjOztBQU9oQixNQUFNLE9BQU8sb0JBQW9COzs7OztJQUsvQixPQUFPLENBQUMsT0FBWTtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQVpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiwweURBQWtDO2FBQ25DOzs7bUJBRUUsS0FBSzttQkFFTCxLQUFLOzs7O0lBRk4sb0NBQStCOztJQUUvQixvQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBJVEVNLVBSRVZJRVcudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQW5jaG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkLWludGVyZmFjZXMnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgSXRlbVByZXZpZXdDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgaW1hZ2UgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgdGl0bGUgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgdGV4dCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBhbmNob3IgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgbWV0YWRhdGEgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEl0ZW1QcmV2aWV3RGF0YSB7XHJcbiAgLyoqXHJcbiAgKiBpbWFnZSBvZiB0aGUgcHJldmlld1xyXG4gICovXHJcbiAgaW1hZ2U/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgKiBuYW1lIG9mIHRoZSBpdGVtXHJcbiAgKi9cclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICogdGV4dCBvZiB0aGUgaXRlbVxyXG4gICovXHJcbiAgdGV4dD86IHN0cmluZztcclxuICBhbmNob3I/OiBBbmNob3I7XHJcbiAgLyoqXHJcbiAgKiBsaXN0IG9mIHRoZSBkYXRhIGluIHRoZSBtZXRhZGF0YVxyXG4gICovXHJcbiAgbWV0YWRhdGE/OiBNZXRhZGF0YUdyb3VwW107XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciB0aGUgZWxlbWVudCB0aGF0IHdyYXBzIHRoZSBtZXRhZGF0YVxyXG4gKlxyXG4gKiBAcHJvcGVydHkgdGl0bGUgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpdGVtcyAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhR3JvdXAge1xyXG4gIC8qKlxyXG4gICAqIHRpdGxlIG9mIG1ldGFkYXRhIGdyb3VwXHJcbiAgICovXHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogY2xhc3NlcyBvZiBtZXRhZGF0YSBncm91cFxyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYXJyYXkgb2YgbWV0YWRhdGEgaXRlbXNcclxuICAgKi9cclxuICBpdGVtcz86IE1ldGFkYXRhRGF0YVtdO1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBhIGxpc3Qgb2YgbWV0YWRhdGFcclxuICpcclxuICogQHByb3BlcnR5IGxhYmVsIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHZhbHVlIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogbGFiZWwgb2YgYSBzaW5nbGUgcHJvcGVydHkgb2YgdGhlIG1ldGFkYXRhXHJcbiAgICovXHJcbiAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogdmFsdWUgb2YgYSBzaW5nbGUgcHJvcGVydHkgb2YgdGhlIG1ldGFkYXRhXHJcbiAgICovXHJcbiAgdmFsdWU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogY2F0ZWdvcnkgb2YgYSBpdGVtIG9mIHRoZSBpY29uIGxpc3QsIHVzZWQgdG8gZ2l2ZSBhIGRpZmZlcmVudCBjbGFzc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogaWNvbiBvZiBhbiBpdGVtIG9mIHRoZSBpY29uIGxpc3RcclxuICAgKi9cclxuICBpY29uPzogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWl0ZW0tcHJldmlldycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2l0ZW0tcHJldmlldy5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSXRlbVByZXZpZXdDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IEl0ZW1QcmV2aWV3RGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBvbkNsaWNrKHBheWxvYWQ6IGFueSkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcbn1cclxuIl19