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
                    template: "<div *ngIf=\"data\" class=\"n7-item-preview {{data.classes || ''}}\" [ngClass]=\"{ 'has-image' : !!data.image }\">\r\n    <n7-anchor-wrapper \r\n    [data]=\"data.anchor\"\r\n    (clicked)=\"onClick($event)\">\r\n        <!-- Image -->\r\n        <div class=\"n7-item-preview__image\"\r\n            *ngIf=\"data.image\"\r\n            [style.background-image] = \"'url(' + data.image + ')'\">       \r\n        </div>         \r\n        \r\n        <div class=\"n7-item-preview__content\">\r\n\r\n            <!-- Title and text -->\r\n            <div class=\"n7-item-preview__title-text\">\r\n                <h1 class=\"n7-item-preview__title\">\r\n                    {{ data.title }}\r\n                </h1>\r\n                <p class=\"n7-item-preview__text\" *ngIf=\"data.text\">\r\n                    {{ data.text }}\r\n                </p>\r\n            </div>\r\n\r\n            <!-- Metadata -->\r\n            <div class=\"n7-item-preview__metadata\" *ngIf=\"data.metadata\">       \r\n                <div class=\"n7-item-preview__metadata-group {{ meta.classes || '' }}\" *ngFor=\"let meta of data.metadata\">\r\n                    <h3 class=\"n7-item-preview__metadata-group-title\" *ngIf=\"meta.title\">\r\n                    {{ meta.title }}\r\n                    </h3>\r\n                    <div class=\"n7-item-preview__metadata-item {{ item.classes || '' }}\" *ngFor=\"let item of meta.items\">\r\n                        <span class=\"n7-item-preview__metadata-item-icon {{item.icon}}\" *ngIf=\"item.icon\"></span>\r\n                        <span class=\"n7-item-preview__metadata-item-label\" *ngIf=\"item.label\">{{item.label}}: </span>\r\n                        <span class=\"n7-item-preview__metadata-item-value\" *ngIf=\"item.value\">{{item.value}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>   \r\n        </div>\r\n    </n7-anchor-wrapper>\r\n\r\n</div>\r\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1wcmV2aWV3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pdGVtLXByZXZpZXcvaXRlbS1wcmV2aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQWFqRCxzQ0FzQkM7Ozs7OztJQWxCQyxpQ0FBZTs7Ozs7SUFJZixpQ0FBYzs7Ozs7SUFJZCxnQ0FBYzs7SUFDZCxrQ0FBaUI7Ozs7O0lBSWpCLG9DQUE0Qjs7Ozs7SUFJNUIsbUNBQWlCOzs7Ozs7Ozs7O0FBVW5CLG9DQWFDOzs7Ozs7SUFUQywrQkFBZTs7Ozs7SUFJZixpQ0FBaUI7Ozs7O0lBSWpCLCtCQUF3Qjs7Ozs7Ozs7Ozs7QUFXMUIsbUNBaUJDOzs7Ozs7SUFiQyw4QkFBZTs7Ozs7SUFJZiw4QkFBZTs7Ozs7SUFJZixnQ0FBaUI7Ozs7O0lBSWpCLDZCQUFjOztBQUdoQjtJQUFBO0lBWUEsQ0FBQzs7Ozs7SUFKQyxzQ0FBTzs7OztJQUFQLFVBQVEsT0FBWTtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQVhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQiw4NURBQWtDO2lCQUNuQzs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUFNUiwyQkFBQztDQUFBLEFBWkQsSUFZQztTQVJZLG9CQUFvQjs7O0lBQy9CLG9DQUFnQzs7SUFDaEMsb0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gSVRFTS1QUkVWSUVXLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBJdGVtUHJldmlld0NvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBpbWFnZSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB0aXRsZSAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGFuY2hvciAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBtZXRhZGF0YSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUl0ZW1QcmV2aWV3RGF0YSB7XHJcbiAgLyoqXHJcbiAgKiBpbWFnZSBvZiB0aGUgcHJldmlld1xyXG4gICovXHJcbiAgaW1hZ2U/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgKiBuYW1lIG9mIHRoZSBpdGVtXHJcbiAgKi9cclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICogdGV4dCBvZiB0aGUgaXRlbVxyXG4gICovXHJcbiAgdGV4dD86IHN0cmluZztcclxuICBhbmNob3I/OiBJQW5jaG9yO1xyXG4gIC8qKlxyXG4gICogbGlzdCBvZiB0aGUgZGF0YSBpbiB0aGUgbWV0YWRhdGEgICAgIFxyXG4gICovXHJcbiAgbWV0YWRhdGE/OiBJTWV0YWRhdGFHcm91cFtdO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgdGhlIGVsZW1lbnQgdGhhdCB3cmFwcyB0aGUgbWV0YWRhdGFcclxuICpcclxuICogQHByb3BlcnR5IHRpdGxlIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaXRlbXMgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTWV0YWRhdGFHcm91cCB7XHJcbiAgLyoqXHJcbiAgICogdGl0bGUgb2YgbWV0YWRhdGEgZ3JvdXBcclxuICAgKi9cclxuICB0aXRsZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiBjbGFzc2VzIG9mIG1ldGFkYXRhIGdyb3VwXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBhcnJheSBvZiBtZXRhZGF0YSBpdGVtc1xyXG4gICAqL1xyXG4gIGl0ZW1zPzogSU1ldGFkYXRhRGF0YVtdO1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBhIGxpc3Qgb2YgbWV0YWRhdGFcclxuICpcclxuICogQHByb3BlcnR5IGxhYmVsIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHZhbHVlIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNZXRhZGF0YURhdGEge1xyXG4gIC8qKlxyXG4gICAqIGxhYmVsIG9mIGEgc2luZ2xlIHByb3BlcnR5IG9mIHRoZSBtZXRhZGF0YVxyXG4gICAqL1xyXG4gIGxhYmVsPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHZhbHVlIG9mIGEgc2luZ2xlIHByb3BlcnR5IG9mIHRoZSBtZXRhZGF0YVxyXG4gICAqL1xyXG4gIHZhbHVlPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGNhdGVnb3J5IG9mIGEgaXRlbSBvZiB0aGUgaWNvbiBsaXN0LCB1c2VkIHRvIGdpdmUgYSBkaWZmZXJlbnQgY2xhc3NcclxuICAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGljb24gb2YgYW4gaXRlbSBvZiB0aGUgaWNvbiBsaXN0XHJcbiAgICovXHJcbiAgaWNvbj86IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1pdGVtLXByZXZpZXcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pdGVtLXByZXZpZXcuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEl0ZW1QcmV2aWV3Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBJSXRlbVByZXZpZXdEYXRhO1xyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTsgXHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZDogYW55KSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxufSJdfQ==