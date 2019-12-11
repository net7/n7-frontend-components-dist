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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1wcmV2aWV3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pdGVtLXByZXZpZXcvaXRlbS1wcmV2aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQVlqRCxzQ0F5QkM7Ozs7OztJQXJCQyxpQ0FBZTs7Ozs7SUFJZixpQ0FBYzs7Ozs7SUFJZCxnQ0FBYzs7Ozs7SUFJZCxvQ0FBNEI7Ozs7O0lBSTVCLG1DQUFpQjs7Ozs7SUFJakIsbUNBQWM7Ozs7Ozs7Ozs7QUFVaEIsb0NBYUM7Ozs7OztJQVRDLCtCQUFlOzs7OztJQUlmLGlDQUFpQjs7Ozs7SUFJakIsK0JBQXdCOzs7Ozs7Ozs7OztBQVcxQixtQ0FpQkM7Ozs7OztJQWJDLDhCQUFlOzs7OztJQUlmLDhCQUFlOzs7OztJQUlmLGdDQUFpQjs7Ozs7SUFJakIsNkJBQWM7O0FBR2hCO0lBQUE7SUFZQSxDQUFDOzs7OztJQUpDLHNDQUFPOzs7O0lBQVAsVUFBUSxPQUFZO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBWEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLDJvREFBa0M7aUJBQ25DOzs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLOztJQU1SLDJCQUFDO0NBQUEsQUFaRCxJQVlDO1NBUlksb0JBQW9COzs7SUFDL0Isb0NBQWdDOztJQUNoQyxvQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSVRFTS1QUkVWSUVXLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBJdGVtUHJldmlld0NvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGltYWdlIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB0aXRsZSAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgdGV4dCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgbWV0YWRhdGEgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElJdGVtUHJldmlld0RhdGEge1xuICAvKipcbiAgKiBpbWFnZSBvZiB0aGUgcHJldmlld1xuICAqL1xuICBpbWFnZT86IHN0cmluZztcbiAgLyoqXG4gICogbmFtZSBvZiB0aGUgaXRlbVxuICAqL1xuICB0aXRsZTogc3RyaW5nO1xuICAvKipcbiAgKiB0ZXh0IG9mIHRoZSBpdGVtXG4gICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIGxpc3Qgb2YgdGhlIGRhdGEgaW4gdGhlIG1ldGFkYXRhICAgICBcbiAgKi9cbiAgbWV0YWRhdGE/OiBJTWV0YWRhdGFHcm91cFtdO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBjb21wb25lbnQgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIHRoZSBlbGVtZW50IHRoYXQgd3JhcHMgdGhlIG1ldGFkYXRhXG4gKlxuICogQHByb3BlcnR5IHRpdGxlIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpdGVtcyAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSU1ldGFkYXRhR3JvdXAge1xuICAvKipcbiAgICogdGl0bGUgb2YgbWV0YWRhdGEgZ3JvdXBcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICogY2xhc3NlcyBvZiBtZXRhZGF0YSBncm91cFxuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIGFycmF5IG9mIG1ldGFkYXRhIGl0ZW1zXG4gICAqL1xuICBpdGVtcz86IElNZXRhZGF0YURhdGFbXTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGEgbGlzdCBvZiBtZXRhZGF0YVxuICpcbiAqIEBwcm9wZXJ0eSBsYWJlbCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdmFsdWUgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElNZXRhZGF0YURhdGEge1xuICAvKipcbiAgICogbGFiZWwgb2YgYSBzaW5nbGUgcHJvcGVydHkgb2YgdGhlIG1ldGFkYXRhXG4gICAqL1xuICBsYWJlbD86IHN0cmluZztcbiAgLyoqXG4gICAqIHZhbHVlIG9mIGEgc2luZ2xlIHByb3BlcnR5IG9mIHRoZSBtZXRhZGF0YVxuICAgKi9cbiAgdmFsdWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBjYXRlZ29yeSBvZiBhIGl0ZW0gb2YgdGhlIGljb24gbGlzdCwgdXNlZCB0byBnaXZlIGEgZGlmZmVyZW50IGNsYXNzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogaWNvbiBvZiBhbiBpdGVtIG9mIHRoZSBpY29uIGxpc3RcbiAgICovXG4gIGljb24/OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWl0ZW0tcHJldmlldycsXG4gIHRlbXBsYXRlVXJsOiAnLi9pdGVtLXByZXZpZXcuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSXRlbVByZXZpZXdDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJSXRlbVByZXZpZXdEYXRhO1xuICBASW5wdXQoKSBlbWl0OiBhbnk7IFxuXG4gIG9uQ2xpY2socGF5bG9hZDogYW55KSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cbn0iXX0=