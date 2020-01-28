/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                template: "<div *ngIf=\"data\" class=\"n7-item-preview {{data.classes || ''}}\" [ngClass]=\"{ 'has-image' : !!data.image }\">\n    <n7-anchor-wrapper\n    [data]=\"data.anchor\"\n    (clicked)=\"onClick($event)\">\n        <!-- Image -->\n        <div class=\"n7-item-preview__image\"\n            *ngIf=\"data.image\"\n            [style.background-image] = \"'url(' + data.image + ')'\">       \n        </div>\n        <div class=\"n7-item-preview__content\">\n            <!-- Title and text -->\n            <div class=\"n7-item-preview__title-text\">\n                <h1 class=\"n7-item-preview__title\" [innerHTML]=\"data.title\"></h1>\n                <p class=\"n7-item-preview__text\" *ngIf=\"data.text\" [innerHTML]=\"data.text\"></p>\n            </div>\n            <!-- Metadata -->\n            <div class=\"n7-item-preview__metadata\" *ngIf=\"data.metadata\">       \n                <div class=\"n7-item-preview__metadata-group {{ meta.classes || '' }}\" *ngFor=\"let meta of data.metadata\">\n                    <h3 class=\"n7-item-preview__metadata-group-title\" *ngIf=\"meta.title\" [innerHTML]=\"meta.title\"></h3>\n                    <div class=\"n7-item-preview__metadata-item {{ item.classes || '' }}\" *ngFor=\"let item of meta.items\">\n                        <span class=\"n7-item-preview__metadata-item-icon {{item.icon}}\" *ngIf=\"item.icon\"></span>\n                        <span class=\"n7-item-preview__metadata-item-label\" *ngIf=\"item.label\" [innerHTML]=\"item.label\"></span>\n                        <span class=\"n7-item-preview__metadata-item-value\" *ngIf=\"item.value\" [innerHTML]=\"item.value\"></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </n7-anchor-wrapper>\n</div>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1wcmV2aWV3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pdGVtLXByZXZpZXcvaXRlbS1wcmV2aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0FBYWpELHNDQXNCQzs7Ozs7O0lBbEJDLGlDQUFlOzs7OztJQUlmLGlDQUFjOzs7OztJQUlkLGdDQUFjOztJQUNkLGtDQUFpQjs7Ozs7SUFJakIsb0NBQTRCOzs7OztJQUk1QixtQ0FBaUI7Ozs7Ozs7Ozs7QUFVbkIsb0NBYUM7Ozs7OztJQVRDLCtCQUFlOzs7OztJQUlmLGlDQUFpQjs7Ozs7SUFJakIsK0JBQXdCOzs7Ozs7Ozs7OztBQVcxQixtQ0FpQkM7Ozs7OztJQWJDLDhCQUFlOzs7OztJQUlmLDhCQUFlOzs7OztJQUlmLGdDQUFpQjs7Ozs7SUFJakIsNkJBQWM7O0FBT2hCLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBSS9CLE9BQU8sQ0FBQyxPQUFZO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBWEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLGd2REFBa0M7YUFDbkM7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETixvQ0FBZ0M7O0lBQ2hDLG9DQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBJVEVNLVBSRVZJRVcudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBJdGVtUHJldmlld0NvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGltYWdlIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB0aXRsZSAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgdGV4dCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgYW5jaG9yIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBtZXRhZGF0YSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUl0ZW1QcmV2aWV3RGF0YSB7XG4gIC8qKlxuICAqIGltYWdlIG9mIHRoZSBwcmV2aWV3XG4gICovXG4gIGltYWdlPzogc3RyaW5nO1xuICAvKipcbiAgKiBuYW1lIG9mIHRoZSBpdGVtXG4gICovXG4gIHRpdGxlOiBzdHJpbmc7XG4gIC8qKlxuICAqIHRleHQgb2YgdGhlIGl0ZW1cbiAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgYW5jaG9yPzogSUFuY2hvcjtcbiAgLyoqXG4gICogbGlzdCBvZiB0aGUgZGF0YSBpbiB0aGUgbWV0YWRhdGEgICAgIFxuICAqL1xuICBtZXRhZGF0YT86IElNZXRhZGF0YUdyb3VwW107XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIHRoZSBlbGVtZW50IHRoYXQgd3JhcHMgdGhlIG1ldGFkYXRhXG4gKlxuICogQHByb3BlcnR5IHRpdGxlIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpdGVtcyAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSU1ldGFkYXRhR3JvdXAge1xuICAvKipcbiAgICogdGl0bGUgb2YgbWV0YWRhdGEgZ3JvdXBcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICogY2xhc3NlcyBvZiBtZXRhZGF0YSBncm91cFxuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIGFycmF5IG9mIG1ldGFkYXRhIGl0ZW1zXG4gICAqL1xuICBpdGVtcz86IElNZXRhZGF0YURhdGFbXTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGEgbGlzdCBvZiBtZXRhZGF0YVxuICpcbiAqIEBwcm9wZXJ0eSBsYWJlbCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdmFsdWUgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElNZXRhZGF0YURhdGEge1xuICAvKipcbiAgICogbGFiZWwgb2YgYSBzaW5nbGUgcHJvcGVydHkgb2YgdGhlIG1ldGFkYXRhXG4gICAqL1xuICBsYWJlbD86IHN0cmluZztcbiAgLyoqXG4gICAqIHZhbHVlIG9mIGEgc2luZ2xlIHByb3BlcnR5IG9mIHRoZSBtZXRhZGF0YVxuICAgKi9cbiAgdmFsdWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBjYXRlZ29yeSBvZiBhIGl0ZW0gb2YgdGhlIGljb24gbGlzdCwgdXNlZCB0byBnaXZlIGEgZGlmZmVyZW50IGNsYXNzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogaWNvbiBvZiBhbiBpdGVtIG9mIHRoZSBpY29uIGxpc3RcbiAgICovXG4gIGljb24/OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWl0ZW0tcHJldmlldycsXG4gIHRlbXBsYXRlVXJsOiAnLi9pdGVtLXByZXZpZXcuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSXRlbVByZXZpZXdDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJSXRlbVByZXZpZXdEYXRhO1xuICBASW5wdXQoKSBlbWl0OiBhbnk7IFxuXG4gIG9uQ2xpY2socGF5bG9hZDogYW55KSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cbn0iXX0=