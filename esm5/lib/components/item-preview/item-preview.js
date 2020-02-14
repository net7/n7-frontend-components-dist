/**
 * @fileoverview added by tsickle
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
export function IItemPreviewData() { }
if (false) {
    /**
     * image of the preview
     * @type {?|undefined}
     */
    IItemPreviewData.prototype.image;
    /**
     * name of the item
     * @type {?}
     */
    IItemPreviewData.prototype.title;
    /**
     * text of the item
     * @type {?|undefined}
     */
    IItemPreviewData.prototype.text;
    /** @type {?|undefined} */
    IItemPreviewData.prototype.anchor;
    /**
     * list of the data in the metadata
     * @type {?|undefined}
     */
    IItemPreviewData.prototype.metadata;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    IItemPreviewData.prototype.classes;
}
/**
 * Interface for the element that wraps the metadata
 *
 * \@property title (optional)
 * \@property classes (optional)
 * \@property items (optional)
 * @record
 */
export function IMetadataGroup() { }
if (false) {
    /**
     * title of metadata group
     * @type {?|undefined}
     */
    IMetadataGroup.prototype.title;
    /**
     * classes of metadata group
     * @type {?|undefined}
     */
    IMetadataGroup.prototype.classes;
    /**
     * array of metadata items
     * @type {?|undefined}
     */
    IMetadataGroup.prototype.items;
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
export function IMetadataData() { }
if (false) {
    /**
     * label of a single property of the metadata
     * @type {?|undefined}
     */
    IMetadataData.prototype.label;
    /**
     * value of a single property of the metadata
     * @type {?|undefined}
     */
    IMetadataData.prototype.value;
    /**
     * category of a item of the icon list, used to give a different class
     * @type {?|undefined}
     */
    IMetadataData.prototype.classes;
    /**
     * icon of an item of the icon list
     * @type {?|undefined}
     */
    IMetadataData.prototype.icon;
}
var ItemPreviewComponent = /** @class */ (function () {
    function ItemPreviewComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    ItemPreviewComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
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
    return ItemPreviewComponent;
}());
export { ItemPreviewComponent };
if (false) {
    /** @type {?} */
    ItemPreviewComponent.prototype.data;
    /** @type {?} */
    ItemPreviewComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1wcmV2aWV3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pdGVtLXByZXZpZXcvaXRlbS1wcmV2aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0FBYWpELHNDQXNCQzs7Ozs7O0lBbEJDLGlDQUFlOzs7OztJQUlmLGlDQUFjOzs7OztJQUlkLGdDQUFjOztJQUNkLGtDQUFpQjs7Ozs7SUFJakIsb0NBQTRCOzs7OztJQUk1QixtQ0FBaUI7Ozs7Ozs7Ozs7QUFVbkIsb0NBYUM7Ozs7OztJQVRDLCtCQUFlOzs7OztJQUlmLGlDQUFpQjs7Ozs7SUFJakIsK0JBQXdCOzs7Ozs7Ozs7OztBQVcxQixtQ0FpQkM7Ozs7OztJQWJDLDhCQUFlOzs7OztJQUlmLDhCQUFlOzs7OztJQUlmLGdDQUFpQjs7Ozs7SUFJakIsNkJBQWM7O0FBR2hCO0lBQUE7SUFZQSxDQUFDOzs7OztJQUpDLHNDQUFPOzs7O0lBQVAsVUFBUSxPQUFZO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBWEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLDB5REFBa0M7aUJBQ25DOzs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLOztJQU1SLDJCQUFDO0NBQUEsQUFaRCxJQVlDO1NBUlksb0JBQW9COzs7SUFDL0Isb0NBQWdDOztJQUNoQyxvQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBJVEVNLVBSRVZJRVcudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEl0ZW1QcmV2aWV3Q29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGltYWdlIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHRpdGxlIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHRleHQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgYW5jaG9yIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IG1ldGFkYXRhIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJSXRlbVByZXZpZXdEYXRhIHtcclxuICAvKipcclxuICAqIGltYWdlIG9mIHRoZSBwcmV2aWV3XHJcbiAgKi9cclxuICBpbWFnZT86IHN0cmluZztcclxuICAvKipcclxuICAqIG5hbWUgb2YgdGhlIGl0ZW1cclxuICAqL1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgKiB0ZXh0IG9mIHRoZSBpdGVtXHJcbiAgKi9cclxuICB0ZXh0Pzogc3RyaW5nO1xyXG4gIGFuY2hvcj86IElBbmNob3I7XHJcbiAgLyoqXHJcbiAgKiBsaXN0IG9mIHRoZSBkYXRhIGluIHRoZSBtZXRhZGF0YSAgICAgXHJcbiAgKi9cclxuICBtZXRhZGF0YT86IElNZXRhZGF0YUdyb3VwW107XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciB0aGUgZWxlbWVudCB0aGF0IHdyYXBzIHRoZSBtZXRhZGF0YVxyXG4gKlxyXG4gKiBAcHJvcGVydHkgdGl0bGUgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpdGVtcyAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNZXRhZGF0YUdyb3VwIHtcclxuICAvKipcclxuICAgKiB0aXRsZSBvZiBtZXRhZGF0YSBncm91cFxyXG4gICAqL1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGNsYXNzZXMgb2YgbWV0YWRhdGEgZ3JvdXBcclxuICAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFycmF5IG9mIG1ldGFkYXRhIGl0ZW1zXHJcbiAgICovXHJcbiAgaXRlbXM/OiBJTWV0YWRhdGFEYXRhW107XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGEgbGlzdCBvZiBtZXRhZGF0YVxyXG4gKlxyXG4gKiBAcHJvcGVydHkgbGFiZWwgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgdmFsdWUgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1ldGFkYXRhRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogbGFiZWwgb2YgYSBzaW5nbGUgcHJvcGVydHkgb2YgdGhlIG1ldGFkYXRhXHJcbiAgICovXHJcbiAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogdmFsdWUgb2YgYSBzaW5nbGUgcHJvcGVydHkgb2YgdGhlIG1ldGFkYXRhXHJcbiAgICovXHJcbiAgdmFsdWU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogY2F0ZWdvcnkgb2YgYSBpdGVtIG9mIHRoZSBpY29uIGxpc3QsIHVzZWQgdG8gZ2l2ZSBhIGRpZmZlcmVudCBjbGFzc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogaWNvbiBvZiBhbiBpdGVtIG9mIHRoZSBpY29uIGxpc3RcclxuICAgKi9cclxuICBpY29uPzogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWl0ZW0tcHJldmlldycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2l0ZW0tcHJldmlldy5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSXRlbVByZXZpZXdDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IElJdGVtUHJldmlld0RhdGE7XHJcbiAgQElucHV0KCkgZW1pdDogYW55OyBcclxuXHJcbiAgb25DbGljayhwYXlsb2FkOiBhbnkpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgfVxyXG59Il19