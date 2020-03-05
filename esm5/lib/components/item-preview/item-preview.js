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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1wcmV2aWV3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pdGVtLXByZXZpZXcvaXRlbS1wcmV2aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQWFqRCxxQ0FzQkM7Ozs7OztJQWxCQyxnQ0FBZTs7Ozs7SUFJZixnQ0FBYzs7Ozs7SUFJZCwrQkFBYzs7SUFDZCxpQ0FBZ0I7Ozs7O0lBSWhCLG1DQUEyQjs7Ozs7SUFJM0Isa0NBQWlCOzs7Ozs7Ozs7O0FBVW5CLG1DQWFDOzs7Ozs7SUFUQyw4QkFBZTs7Ozs7SUFJZixnQ0FBaUI7Ozs7O0lBSWpCLDhCQUF1Qjs7Ozs7Ozs7Ozs7QUFXekIsa0NBaUJDOzs7Ozs7SUFiQyw2QkFBZTs7Ozs7SUFJZiw2QkFBZTs7Ozs7SUFJZiwrQkFBaUI7Ozs7O0lBSWpCLDRCQUFjOztBQUdoQjtJQUFBO0lBYUEsQ0FBQzs7Ozs7SUFKQyxzQ0FBTzs7OztJQUFQLFVBQVEsT0FBWTtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQVpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQiwweURBQWtDO2lCQUNuQzs7O3VCQUVFLEtBQUs7dUJBRUwsS0FBSzs7SUFNUiwyQkFBQztDQUFBLEFBYkQsSUFhQztTQVRZLG9CQUFvQjs7O0lBQy9CLG9DQUErQjs7SUFFL0Isb0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gSVRFTS1QUkVWSUVXLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEl0ZW1QcmV2aWV3Q29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGltYWdlIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHRpdGxlIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHRleHQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgYW5jaG9yIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IG1ldGFkYXRhIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJdGVtUHJldmlld0RhdGEge1xyXG4gIC8qKlxyXG4gICogaW1hZ2Ugb2YgdGhlIHByZXZpZXdcclxuICAqL1xyXG4gIGltYWdlPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICogbmFtZSBvZiB0aGUgaXRlbVxyXG4gICovXHJcbiAgdGl0bGU6IHN0cmluZztcclxuICAvKipcclxuICAqIHRleHQgb2YgdGhlIGl0ZW1cclxuICAqL1xyXG4gIHRleHQ/OiBzdHJpbmc7XHJcbiAgYW5jaG9yPzogQW5jaG9yO1xyXG4gIC8qKlxyXG4gICogbGlzdCBvZiB0aGUgZGF0YSBpbiB0aGUgbWV0YWRhdGFcclxuICAqL1xyXG4gIG1ldGFkYXRhPzogTWV0YWRhdGFHcm91cFtdO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgdGhlIGVsZW1lbnQgdGhhdCB3cmFwcyB0aGUgbWV0YWRhdGFcclxuICpcclxuICogQHByb3BlcnR5IHRpdGxlIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaXRlbXMgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBNZXRhZGF0YUdyb3VwIHtcclxuICAvKipcclxuICAgKiB0aXRsZSBvZiBtZXRhZGF0YSBncm91cFxyXG4gICAqL1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGNsYXNzZXMgb2YgbWV0YWRhdGEgZ3JvdXBcclxuICAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFycmF5IG9mIG1ldGFkYXRhIGl0ZW1zXHJcbiAgICovXHJcbiAgaXRlbXM/OiBNZXRhZGF0YURhdGFbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgYSBsaXN0IG9mIG1ldGFkYXRhXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBsYWJlbCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB2YWx1ZSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBNZXRhZGF0YURhdGEge1xyXG4gIC8qKlxyXG4gICAqIGxhYmVsIG9mIGEgc2luZ2xlIHByb3BlcnR5IG9mIHRoZSBtZXRhZGF0YVxyXG4gICAqL1xyXG4gIGxhYmVsPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHZhbHVlIG9mIGEgc2luZ2xlIHByb3BlcnR5IG9mIHRoZSBtZXRhZGF0YVxyXG4gICAqL1xyXG4gIHZhbHVlPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGNhdGVnb3J5IG9mIGEgaXRlbSBvZiB0aGUgaWNvbiBsaXN0LCB1c2VkIHRvIGdpdmUgYSBkaWZmZXJlbnQgY2xhc3NcclxuICAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGljb24gb2YgYW4gaXRlbSBvZiB0aGUgaWNvbiBsaXN0XHJcbiAgICovXHJcbiAgaWNvbj86IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1pdGVtLXByZXZpZXcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pdGVtLXByZXZpZXcuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEl0ZW1QcmV2aWV3Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBJdGVtUHJldmlld0RhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgb25DbGljayhwYXlsb2FkOiBhbnkpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==