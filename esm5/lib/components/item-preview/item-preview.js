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
                    template: "<div *ngIf=\"data\" \r\n     class=\"n7-item-preview {{data.classes || ''}}\" \r\n     [ngClass]=\"{ 'has-image' : !!data.image }\"\r\n     (click)=\"onClick(data.payload)\">\r\n\r\n    <!-- Image -->\r\n    <div class=\"n7-item-preview__image\"\r\n         *ngIf=\"data.image\"\r\n         [style.background-image] = \"'url(' + data.image + ')'\">       \r\n    </div>         \r\n    \r\n    <div class=\"n7-item-preview__content\">\r\n\r\n        <!-- Title and text -->\r\n        <div class=\"n7-item-preview__title-text\">\r\n            <h1 class=\"n7-item-preview__title\">\r\n                {{ data.title }}\r\n            </h1>\r\n            <p class=\"n7-item-preview__text\" *ngIf=\"data.text\">\r\n                {{ data.text }}\r\n            </p>\r\n        </div>\r\n\r\n        <!-- Metadata -->\r\n        <div class=\"n7-item-preview__metadata\" *ngIf=\"data.metadata\">       \r\n            <div class=\"n7-item-preview__metadata-group\" *ngFor=\"let meta of data.metadata\">\r\n                <h3 class=\"n7-item-preview__metadata-group-title\" *ngIf=\"meta.title\">\r\n                {{ meta.title }}\r\n                </h3>\r\n                <div class=\"n7-item-preview__metadata-item {{meta.classes}}\" *ngFor=\"let item of meta.items\">\r\n                    <span class=\"n7-item-preview__metadata-item-icon {{item.icon}}\">  </span>\r\n                    <span class=\"n7-item-preview__metadata-item-label\" *ngIf=\"item.label\">{{item.label}}: </span>\r\n                    <span class=\"n7-item-preview__metadata-item-value\" *ngIf=\"item.value\">{{item.value}}</span>\r\n                </div>\r\n            </div>\r\n        </div>   \r\n    </div>\r\n</div>\r\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1wcmV2aWV3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pdGVtLXByZXZpZXcvaXRlbS1wcmV2aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0FBWWpELHNDQXlCQzs7Ozs7O0lBckJDLGlDQUFlOzs7OztJQUlmLGlDQUFjOzs7OztJQUlkLGdDQUFjOzs7OztJQUlkLG9DQUE0Qjs7Ozs7SUFJNUIsbUNBQWlCOzs7OztJQUlqQixtQ0FBYzs7Ozs7Ozs7OztBQVVoQixvQ0FhQzs7Ozs7O0lBVEMsK0JBQWU7Ozs7O0lBSWYsaUNBQWlCOzs7OztJQUlqQiwrQkFBd0I7Ozs7Ozs7Ozs7O0FBVzFCLG1DQWlCQzs7Ozs7O0lBYkMsOEJBQWU7Ozs7O0lBSWYsOEJBQWU7Ozs7O0lBSWYsZ0NBQWlCOzs7OztJQUlqQiw2QkFBYzs7QUFHaEI7SUFBQTtJQVlBLENBQUM7Ozs7O0lBSkMsc0NBQU87Ozs7SUFBUCxVQUFRLE9BQVk7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkFYRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0Isc3JEQUFrQztpQkFDbkM7Ozt1QkFFRSxLQUFLO3VCQUNMLEtBQUs7O0lBTVIsMkJBQUM7Q0FBQSxBQVpELElBWUM7U0FSWSxvQkFBb0I7OztJQUMvQixvQ0FBZ0M7O0lBQ2hDLG9DQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIElURU0tUFJFVklFVy50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgSXRlbVByZXZpZXdDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgaW1hZ2UgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgdGl0bGUgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgdGV4dCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBtZXRhZGF0YSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJSXRlbVByZXZpZXdEYXRhIHtcclxuICAvKipcclxuICAqIGltYWdlIG9mIHRoZSBwcmV2aWV3XHJcbiAgKi9cclxuICBpbWFnZT86IHN0cmluZztcclxuICAvKipcclxuICAqIG5hbWUgb2YgdGhlIGl0ZW1cclxuICAqL1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgKiB0ZXh0IG9mIHRoZSBpdGVtXHJcbiAgKi9cclxuICB0ZXh0Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICogbGlzdCBvZiB0aGUgZGF0YSBpbiB0aGUgbWV0YWRhdGEgICAgIFxyXG4gICovXHJcbiAgbWV0YWRhdGE/OiBJTWV0YWRhdGFHcm91cFtdO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBjb21wb25lbnQgcGF5bG9hZFxyXG4gICAqL1xyXG4gIHBheWxvYWQ/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIHRoZSBlbGVtZW50IHRoYXQgd3JhcHMgdGhlIG1ldGFkYXRhXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB0aXRsZSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGl0ZW1zIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1ldGFkYXRhR3JvdXAge1xyXG4gIC8qKlxyXG4gICAqIHRpdGxlIG9mIG1ldGFkYXRhIGdyb3VwXHJcbiAgICovXHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogY2xhc3NlcyBvZiBtZXRhZGF0YSBncm91cFxyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYXJyYXkgb2YgbWV0YWRhdGEgaXRlbXNcclxuICAgKi9cclxuICBpdGVtcz86IElNZXRhZGF0YURhdGFbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgYSBsaXN0IG9mIG1ldGFkYXRhXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBsYWJlbCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB2YWx1ZSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTWV0YWRhdGFEYXRhIHtcclxuICAvKipcclxuICAgKiBsYWJlbCBvZiBhIHNpbmdsZSBwcm9wZXJ0eSBvZiB0aGUgbWV0YWRhdGFcclxuICAgKi9cclxuICBsYWJlbD86IHN0cmluZztcclxuICAvKipcclxuICAgKiB2YWx1ZSBvZiBhIHNpbmdsZSBwcm9wZXJ0eSBvZiB0aGUgbWV0YWRhdGFcclxuICAgKi9cclxuICB2YWx1ZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiBjYXRlZ29yeSBvZiBhIGl0ZW0gb2YgdGhlIGljb24gbGlzdCwgdXNlZCB0byBnaXZlIGEgZGlmZmVyZW50IGNsYXNzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBpY29uIG9mIGFuIGl0ZW0gb2YgdGhlIGljb24gbGlzdFxyXG4gICAqL1xyXG4gIGljb24/OiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctaXRlbS1wcmV2aWV3JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaXRlbS1wcmV2aWV3Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJdGVtUHJldmlld0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogSUl0ZW1QcmV2aWV3RGF0YTtcclxuICBASW5wdXQoKSBlbWl0OiBhbnk7IFxyXG5cclxuICBvbkNsaWNrKHBheWxvYWQ6IGFueSkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcbn0iXX0=