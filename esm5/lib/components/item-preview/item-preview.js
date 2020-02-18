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
                    template: "<div *ngIf=\"data\" class=\"n7-item-preview {{data.classes || ''}}\" [ngClass]=\"{ 'has-image' : !!data.image }\">\n    <n7-anchor-wrapper\n    [data]=\"data.anchor\"\n    (clicked)=\"onClick($event)\">\n        <!-- Image -->\n        <div class=\"n7-item-preview__image\"\n            *ngIf=\"data.image\"\n            [style.background-image] = \"'url(' + data.image + ')'\">       \n        </div>\n        <div class=\"n7-item-preview__content\">\n            <!-- Title and text -->\n            <div class=\"n7-item-preview__title-text\">\n                <h1 class=\"n7-item-preview__title\" [innerHTML]=\"data.title\"></h1>\n                <p class=\"n7-item-preview__text\" *ngIf=\"data.text\" [innerHTML]=\"data.text\"></p>\n            </div>\n            <!-- Metadata -->\n            <div class=\"n7-item-preview__metadata\" *ngIf=\"data.metadata\">       \n                <div class=\"n7-item-preview__metadata-group {{ meta.classes || '' }}\" *ngFor=\"let meta of data.metadata\">\n                    <h3 class=\"n7-item-preview__metadata-group-title\" *ngIf=\"meta.title\" [innerHTML]=\"meta.title\"></h3>\n                    <div class=\"n7-item-preview__metadata-item {{ item.classes || '' }}\" *ngFor=\"let item of meta.items\">\n                        <span class=\"n7-item-preview__metadata-item-icon {{item.icon}}\" *ngIf=\"item.icon\"></span>\n                        <span class=\"n7-item-preview__metadata-item-label\" *ngIf=\"item.label\" [innerHTML]=\"item.label\"></span>\n                        <span class=\"n7-item-preview__metadata-item-value\" *ngIf=\"item.value\" [innerHTML]=\"item.value\"></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </n7-anchor-wrapper>\n</div>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1wcmV2aWV3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pdGVtLXByZXZpZXcvaXRlbS1wcmV2aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQWFqRCxzQ0FzQkM7Ozs7OztJQWxCQyxpQ0FBZTs7Ozs7SUFJZixpQ0FBYzs7Ozs7SUFJZCxnQ0FBYzs7SUFDZCxrQ0FBaUI7Ozs7O0lBSWpCLG9DQUE0Qjs7Ozs7SUFJNUIsbUNBQWlCOzs7Ozs7Ozs7O0FBVW5CLG9DQWFDOzs7Ozs7SUFUQywrQkFBZTs7Ozs7SUFJZixpQ0FBaUI7Ozs7O0lBSWpCLCtCQUF3Qjs7Ozs7Ozs7Ozs7QUFXMUIsbUNBaUJDOzs7Ozs7SUFiQyw4QkFBZTs7Ozs7SUFJZiw4QkFBZTs7Ozs7SUFJZixnQ0FBaUI7Ozs7O0lBSWpCLDZCQUFjOztBQUdoQjtJQUFBO0lBWUEsQ0FBQzs7Ozs7SUFKQyxzQ0FBTzs7OztJQUFQLFVBQVEsT0FBWTtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQVhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixndkRBQWtDO2lCQUNuQzs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUFNUiwyQkFBQztDQUFBLEFBWkQsSUFZQztTQVJZLG9CQUFvQjs7O0lBQy9CLG9DQUFnQzs7SUFDaEMsb0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIElURU0tUFJFVklFVy50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEl0ZW1QcmV2aWV3Q29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgaW1hZ2UgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHRpdGxlIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSB0ZXh0IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBhbmNob3IgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IG1ldGFkYXRhIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJSXRlbVByZXZpZXdEYXRhIHtcbiAgLyoqXG4gICogaW1hZ2Ugb2YgdGhlIHByZXZpZXdcbiAgKi9cbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIC8qKlxuICAqIG5hbWUgb2YgdGhlIGl0ZW1cbiAgKi9cbiAgdGl0bGU6IHN0cmluZztcbiAgLyoqXG4gICogdGV4dCBvZiB0aGUgaXRlbVxuICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICBhbmNob3I/OiBJQW5jaG9yO1xuICAvKipcbiAgKiBsaXN0IG9mIHRoZSBkYXRhIGluIHRoZSBtZXRhZGF0YSAgICAgXG4gICovXG4gIG1ldGFkYXRhPzogSU1ldGFkYXRhR3JvdXBbXTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgdGhlIGVsZW1lbnQgdGhhdCB3cmFwcyB0aGUgbWV0YWRhdGFcbiAqXG4gKiBAcHJvcGVydHkgdGl0bGUgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGl0ZW1zIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJTWV0YWRhdGFHcm91cCB7XG4gIC8qKlxuICAgKiB0aXRsZSBvZiBtZXRhZGF0YSBncm91cFxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBjbGFzc2VzIG9mIG1ldGFkYXRhIGdyb3VwXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogYXJyYXkgb2YgbWV0YWRhdGEgaXRlbXNcbiAgICovXG4gIGl0ZW1zPzogSU1ldGFkYXRhRGF0YVtdO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgYSBsaXN0IG9mIG1ldGFkYXRhXG4gKlxuICogQHByb3BlcnR5IGxhYmVsIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB2YWx1ZSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSU1ldGFkYXRhRGF0YSB7XG4gIC8qKlxuICAgKiBsYWJlbCBvZiBhIHNpbmdsZSBwcm9wZXJ0eSBvZiB0aGUgbWV0YWRhdGFcbiAgICovXG4gIGxhYmVsPzogc3RyaW5nO1xuICAvKipcbiAgICogdmFsdWUgb2YgYSBzaW5nbGUgcHJvcGVydHkgb2YgdGhlIG1ldGFkYXRhXG4gICAqL1xuICB2YWx1ZT86IHN0cmluZztcbiAgLyoqXG4gICAqIGNhdGVnb3J5IG9mIGEgaXRlbSBvZiB0aGUgaWNvbiBsaXN0LCB1c2VkIHRvIGdpdmUgYSBkaWZmZXJlbnQgY2xhc3NcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBpY29uIG9mIGFuIGl0ZW0gb2YgdGhlIGljb24gbGlzdFxuICAgKi9cbiAgaWNvbj86IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctaXRlbS1wcmV2aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2l0ZW0tcHJldmlldy5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJdGVtUHJldmlld0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElJdGVtUHJldmlld0RhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTsgXG5cbiAgb25DbGljayhwYXlsb2FkOiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxufSJdfQ==