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
                    template: "<div *ngIf=\"data\" class=\"n7-item-preview {{data.classes || ''}}\" [ngClass]=\"{ 'has-image' : !!data.image }\">\n    <n7-anchor-wrapper\n    [data]=\"data.anchor\"\n    (clicked)=\"onClick($event)\"\n    [classes]=\"'n7-item-preview__inner'\">\n        <!-- Image -->\n        <div class=\"n7-item-preview__image\"\n            *ngIf=\"data.image\"\n            [style.background-image] = \"'url(' + data.image + ')'\">       \n        </div>\n        <div class=\"n7-item-preview__content\">\n            <!-- Title and text -->\n            <div class=\"n7-item-preview__title-text\">\n                <h1 class=\"n7-item-preview__title\" [innerHTML]=\"data.title\"></h1>\n                <p class=\"n7-item-preview__text\" *ngIf=\"data.text\" [innerHTML]=\"data.text\"></p>\n            </div>\n            <!-- Metadata -->\n            <div class=\"n7-item-preview__metadata\" *ngIf=\"data.metadata\">       \n                <div class=\"n7-item-preview__metadata-group {{ meta.classes || '' }}\" *ngFor=\"let meta of data.metadata\">\n                    <h3 class=\"n7-item-preview__metadata-group-title\" *ngIf=\"meta.title\" [innerHTML]=\"meta.title\"></h3>\n                    <div class=\"n7-item-preview__metadata-item {{ item.classes || '' }}\" *ngFor=\"let item of meta.items\">\n                        <span class=\"n7-item-preview__metadata-item-icon {{item.icon}}\" *ngIf=\"item.icon\"></span>\n                        <span class=\"n7-item-preview__metadata-item-label\" *ngIf=\"item.label\" [innerHTML]=\"item.label\"></span>\n                        <span class=\"n7-item-preview__metadata-item-value\" *ngIf=\"item.value\" [innerHTML]=\"item.value\"></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </n7-anchor-wrapper>\n</div>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1wcmV2aWV3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pdGVtLXByZXZpZXcvaXRlbS1wcmV2aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQWFqRCxxQ0FzQkM7Ozs7OztJQWxCQyxnQ0FBZTs7Ozs7SUFJZixnQ0FBYzs7Ozs7SUFJZCwrQkFBYzs7SUFDZCxpQ0FBZ0I7Ozs7O0lBSWhCLG1DQUEyQjs7Ozs7SUFJM0Isa0NBQWlCOzs7Ozs7Ozs7O0FBVW5CLG1DQWFDOzs7Ozs7SUFUQyw4QkFBZTs7Ozs7SUFJZixnQ0FBaUI7Ozs7O0lBSWpCLDhCQUF1Qjs7Ozs7Ozs7Ozs7QUFXekIsa0NBaUJDOzs7Ozs7SUFiQyw2QkFBZTs7Ozs7SUFJZiw2QkFBZTs7Ozs7SUFJZiwrQkFBaUI7Ozs7O0lBSWpCLDRCQUFjOztBQUdoQjtJQUFBO0lBYUEsQ0FBQzs7Ozs7SUFKQyxzQ0FBTzs7OztJQUFQLFVBQVEsT0FBWTtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQVpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQiw0eERBQWtDO2lCQUNuQzs7O3VCQUVFLEtBQUs7dUJBRUwsS0FBSzs7SUFNUiwyQkFBQztDQUFBLEFBYkQsSUFhQztTQVRZLG9CQUFvQjs7O0lBQy9CLG9DQUErQjs7SUFFL0Isb0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIElURU0tUFJFVklFVy50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5jaG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkLWludGVyZmFjZXMnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgSXRlbVByZXZpZXdDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBpbWFnZSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdGl0bGUgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHRleHQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGFuY2hvciAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgbWV0YWRhdGEgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEl0ZW1QcmV2aWV3RGF0YSB7XG4gIC8qKlxuICAqIGltYWdlIG9mIHRoZSBwcmV2aWV3XG4gICovXG4gIGltYWdlPzogc3RyaW5nO1xuICAvKipcbiAgKiBuYW1lIG9mIHRoZSBpdGVtXG4gICovXG4gIHRpdGxlOiBzdHJpbmc7XG4gIC8qKlxuICAqIHRleHQgb2YgdGhlIGl0ZW1cbiAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgYW5jaG9yPzogQW5jaG9yO1xuICAvKipcbiAgKiBsaXN0IG9mIHRoZSBkYXRhIGluIHRoZSBtZXRhZGF0YVxuICAqL1xuICBtZXRhZGF0YT86IE1ldGFkYXRhR3JvdXBbXTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgdGhlIGVsZW1lbnQgdGhhdCB3cmFwcyB0aGUgbWV0YWRhdGFcbiAqXG4gKiBAcHJvcGVydHkgdGl0bGUgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGl0ZW1zIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNZXRhZGF0YUdyb3VwIHtcbiAgLyoqXG4gICAqIHRpdGxlIG9mIG1ldGFkYXRhIGdyb3VwXG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcbiAgLyoqXG4gICAqIGNsYXNzZXMgb2YgbWV0YWRhdGEgZ3JvdXBcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhcnJheSBvZiBtZXRhZGF0YSBpdGVtc1xuICAgKi9cbiAgaXRlbXM/OiBNZXRhZGF0YURhdGFbXTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGEgbGlzdCBvZiBtZXRhZGF0YVxuICpcbiAqIEBwcm9wZXJ0eSBsYWJlbCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdmFsdWUgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhRGF0YSB7XG4gIC8qKlxuICAgKiBsYWJlbCBvZiBhIHNpbmdsZSBwcm9wZXJ0eSBvZiB0aGUgbWV0YWRhdGFcbiAgICovXG4gIGxhYmVsPzogc3RyaW5nO1xuICAvKipcbiAgICogdmFsdWUgb2YgYSBzaW5nbGUgcHJvcGVydHkgb2YgdGhlIG1ldGFkYXRhXG4gICAqL1xuICB2YWx1ZT86IHN0cmluZztcbiAgLyoqXG4gICAqIGNhdGVnb3J5IG9mIGEgaXRlbSBvZiB0aGUgaWNvbiBsaXN0LCB1c2VkIHRvIGdpdmUgYSBkaWZmZXJlbnQgY2xhc3NcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBpY29uIG9mIGFuIGl0ZW0gb2YgdGhlIGljb24gbGlzdFxuICAgKi9cbiAgaWNvbj86IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctaXRlbS1wcmV2aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2l0ZW0tcHJldmlldy5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJdGVtUHJldmlld0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IEl0ZW1QcmV2aWV3RGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DbGljayhwYXlsb2FkOiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxufVxuIl19