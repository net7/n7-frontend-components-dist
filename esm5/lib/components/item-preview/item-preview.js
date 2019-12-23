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
 * \@property metadata (optional)
 * \@property classes (optional)
 * \@property payload (optional)
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
    /**
     * component payload
     * @type {?|undefined}
     */
    IItemPreviewData.prototype.payload;
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
                    template: "<div *ngIf=\"data\" \n     class=\"n7-item-preview {{data.classes || ''}}\" \n     [ngClass]=\"{ 'has-image' : !!data.image }\"\n     (click)=\"onClick(data.payload)\">\n\n    <!-- Image -->\n    <div class=\"n7-item-preview__image\"\n         *ngIf=\"data.image\"\n         [style.background-image] = \"'url(' + data.image + ')'\">       \n    </div>         \n    \n    <div class=\"n7-item-preview__content\">\n\n        <!-- Title and text -->\n        <div class=\"n7-item-preview__title-text\">\n            <h1 class=\"n7-item-preview__title\">\n                {{ data.title }}\n            </h1>\n            <p class=\"n7-item-preview__text\" *ngIf=\"data.text\">\n                {{ data.text }}\n            </p>\n        </div>\n\n        <!-- Metadata -->\n        <div class=\"n7-item-preview__metadata\" *ngIf=\"data.metadata\">       \n            <div class=\"n7-item-preview__metadata-group {{ meta.classes || '' }}\" *ngFor=\"let meta of data.metadata\">\n                <h3 class=\"n7-item-preview__metadata-group-title\" *ngIf=\"meta.title\">\n                {{ meta.title }}\n                </h3>\n                <div class=\"n7-item-preview__metadata-item {{ item.classes || '' }}\" *ngFor=\"let item of meta.items\">\n                    <span class=\"n7-item-preview__metadata-item-icon {{item.icon}}\">  </span>\n                    <span class=\"n7-item-preview__metadata-item-label\" *ngIf=\"item.label\">{{item.label}}: </span>\n                    <span class=\"n7-item-preview__metadata-item-value\" *ngIf=\"item.value\">{{item.value}}</span>\n                </div>\n            </div>\n        </div>   \n    </div>\n</div>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1wcmV2aWV3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pdGVtLXByZXZpZXcvaXRlbS1wcmV2aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0FBWWpELHNDQXlCQzs7Ozs7O0lBckJDLGlDQUFlOzs7OztJQUlmLGlDQUFjOzs7OztJQUlkLGdDQUFjOzs7OztJQUlkLG9DQUE0Qjs7Ozs7SUFJNUIsbUNBQWlCOzs7OztJQUlqQixtQ0FBYzs7Ozs7Ozs7OztBQVVoQixvQ0FhQzs7Ozs7O0lBVEMsK0JBQWU7Ozs7O0lBSWYsaUNBQWlCOzs7OztJQUlqQiwrQkFBd0I7Ozs7Ozs7Ozs7O0FBVzFCLG1DQWlCQzs7Ozs7O0lBYkMsOEJBQWU7Ozs7O0lBSWYsOEJBQWU7Ozs7O0lBSWYsZ0NBQWlCOzs7OztJQUlqQiw2QkFBYzs7QUFHaEI7SUFBQTtJQVlBLENBQUM7Ozs7O0lBSkMsc0NBQU87Ozs7SUFBUCxVQUFRLE9BQVk7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkFYRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsMm9EQUFrQztpQkFDbkM7Ozt1QkFFRSxLQUFLO3VCQUNMLEtBQUs7O0lBTVIsMkJBQUM7Q0FBQSxBQVpELElBWUM7U0FSWSxvQkFBb0I7OztJQUMvQixvQ0FBZ0M7O0lBQ2hDLG9DQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBJVEVNLVBSRVZJRVcudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEl0ZW1QcmV2aWV3Q29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgaW1hZ2UgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHRpdGxlIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSB0ZXh0IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBtZXRhZGF0YSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUl0ZW1QcmV2aWV3RGF0YSB7XG4gIC8qKlxuICAqIGltYWdlIG9mIHRoZSBwcmV2aWV3XG4gICovXG4gIGltYWdlPzogc3RyaW5nO1xuICAvKipcbiAgKiBuYW1lIG9mIHRoZSBpdGVtXG4gICovXG4gIHRpdGxlOiBzdHJpbmc7XG4gIC8qKlxuICAqIHRleHQgb2YgdGhlIGl0ZW1cbiAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICogbGlzdCBvZiB0aGUgZGF0YSBpbiB0aGUgbWV0YWRhdGEgICAgIFxuICAqL1xuICBtZXRhZGF0YT86IElNZXRhZGF0YUdyb3VwW107XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIGNvbXBvbmVudCBwYXlsb2FkXG4gICAqL1xuICBwYXlsb2FkPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgdGhlIGVsZW1lbnQgdGhhdCB3cmFwcyB0aGUgbWV0YWRhdGFcbiAqXG4gKiBAcHJvcGVydHkgdGl0bGUgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGl0ZW1zIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJTWV0YWRhdGFHcm91cCB7XG4gIC8qKlxuICAgKiB0aXRsZSBvZiBtZXRhZGF0YSBncm91cFxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBjbGFzc2VzIG9mIG1ldGFkYXRhIGdyb3VwXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogYXJyYXkgb2YgbWV0YWRhdGEgaXRlbXNcbiAgICovXG4gIGl0ZW1zPzogSU1ldGFkYXRhRGF0YVtdO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgYSBsaXN0IG9mIG1ldGFkYXRhXG4gKlxuICogQHByb3BlcnR5IGxhYmVsIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB2YWx1ZSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSU1ldGFkYXRhRGF0YSB7XG4gIC8qKlxuICAgKiBsYWJlbCBvZiBhIHNpbmdsZSBwcm9wZXJ0eSBvZiB0aGUgbWV0YWRhdGFcbiAgICovXG4gIGxhYmVsPzogc3RyaW5nO1xuICAvKipcbiAgICogdmFsdWUgb2YgYSBzaW5nbGUgcHJvcGVydHkgb2YgdGhlIG1ldGFkYXRhXG4gICAqL1xuICB2YWx1ZT86IHN0cmluZztcbiAgLyoqXG4gICAqIGNhdGVnb3J5IG9mIGEgaXRlbSBvZiB0aGUgaWNvbiBsaXN0LCB1c2VkIHRvIGdpdmUgYSBkaWZmZXJlbnQgY2xhc3NcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBpY29uIG9mIGFuIGl0ZW0gb2YgdGhlIGljb24gbGlzdFxuICAgKi9cbiAgaWNvbj86IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctaXRlbS1wcmV2aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2l0ZW0tcHJldmlldy5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJdGVtUHJldmlld0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElJdGVtUHJldmlld0RhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTsgXG5cbiAgb25DbGljayhwYXlsb2FkOiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxufSJdfQ==