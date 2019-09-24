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
                template: "<div *ngIf=\"data\" \n     class=\"n7-item-preview {{data.classes || ''}}\" \n     [ngClass]=\"{ 'has-image' : !!data.image }\"\n     (click)=\"onClick(data.payload)\">\n\n    <!-- Image -->\n    <div class=\"n7-item-preview__image\"\n         *ngIf=\"data.image\"\n         [style.background-image] = \"'url(' + data.image + ')'\">       \n    </div>         \n    \n    <div class=\"n7-item-preview__content\">\n\n        <!-- Title and text -->\n        <div class=\"n7-item-preview__title-text\">\n            <h1 class=\"n7-item-preview__title\">\n                {{ data.title }}\n            </h1>\n            <p class=\"n7-item-preview__text\" *ngIf=\"data.text\">\n                {{ data.text }}\n            </p>\n        </div>\n\n        <!-- Metadata -->\n        <div class=\"n7-item-preview__metadata\" *ngIf=\"data.metadata\">       \n            <div class=\"n7-item-preview__metadata-group\" *ngFor=\"let meta of data.metadata\">\n                <h3 class=\"n7-item-preview__metadata-group-title\" *ngIf=\"meta.title\">\n                {{ meta.title }}\n                </h3>\n                <div class=\"n7-item-preview__metadata-item {{meta.classes}}\" *ngFor=\"let item of meta.items\">\n                    <span class=\"n7-item-preview__metadata-item-icon {{item.icon}}\">  </span>\n                    <span class=\"n7-item-preview__metadata-item-label\" *ngIf=\"item.label\">{{item.label}}: </span>\n                    <span class=\"n7-item-preview__metadata-item-value\" *ngIf=\"item.value\">{{item.value}}</span>\n                </div>\n            </div>\n        </div>   \n    </div>\n</div>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1wcmV2aWV3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pdGVtLXByZXZpZXcvaXRlbS1wcmV2aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0FBWWpELHNDQXlCQzs7Ozs7O0lBckJDLGlDQUFlOzs7OztJQUlmLGlDQUFjOzs7OztJQUlkLGdDQUFjOzs7OztJQUlkLG9DQUE0Qjs7Ozs7SUFJNUIsbUNBQWlCOzs7OztJQUlqQixtQ0FBYzs7Ozs7Ozs7OztBQVVoQixvQ0FhQzs7Ozs7O0lBVEMsK0JBQWU7Ozs7O0lBSWYsaUNBQWlCOzs7OztJQUlqQiwrQkFBd0I7Ozs7Ozs7Ozs7O0FBVzFCLG1DQWlCQzs7Ozs7O0lBYkMsOEJBQWU7Ozs7O0lBSWYsOEJBQWU7Ozs7O0lBSWYsZ0NBQWlCOzs7OztJQUlqQiw2QkFBYzs7QUFPaEIsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7SUFJL0IsT0FBTyxDQUFDLE9BQVk7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUFYRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsMG1EQUFrQzthQUNuQzs7O21CQUVFLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLG9DQUFnQzs7SUFDaEMsb0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIElURU0tUFJFVklFVy50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgSXRlbVByZXZpZXdDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBpbWFnZSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdGl0bGUgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHRleHQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IG1ldGFkYXRhIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJSXRlbVByZXZpZXdEYXRhIHtcbiAgLyoqXG4gICogaW1hZ2Ugb2YgdGhlIHByZXZpZXdcbiAgKi9cbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIC8qKlxuICAqIG5hbWUgb2YgdGhlIGl0ZW1cbiAgKi9cbiAgdGl0bGU6IHN0cmluZztcbiAgLyoqXG4gICogdGV4dCBvZiB0aGUgaXRlbVxuICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgKiBsaXN0IG9mIHRoZSBkYXRhIGluIHRoZSBtZXRhZGF0YSAgICAgXG4gICovXG4gIG1ldGFkYXRhPzogSU1ldGFkYXRhR3JvdXBbXTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogY29tcG9uZW50IHBheWxvYWRcbiAgICovXG4gIHBheWxvYWQ/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciB0aGUgZWxlbWVudCB0aGF0IHdyYXBzIHRoZSBtZXRhZGF0YVxuICpcbiAqIEBwcm9wZXJ0eSB0aXRsZSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaXRlbXMgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElNZXRhZGF0YUdyb3VwIHtcbiAgLyoqXG4gICAqIHRpdGxlIG9mIG1ldGFkYXRhIGdyb3VwXG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcbiAgLyoqXG4gICAqIGNsYXNzZXMgb2YgbWV0YWRhdGEgZ3JvdXBcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhcnJheSBvZiBtZXRhZGF0YSBpdGVtc1xuICAgKi9cbiAgaXRlbXM/OiBJTWV0YWRhdGFEYXRhW107XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBhIGxpc3Qgb2YgbWV0YWRhdGFcbiAqXG4gKiBAcHJvcGVydHkgbGFiZWwgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHZhbHVlIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJTWV0YWRhdGFEYXRhIHtcbiAgLyoqXG4gICAqIGxhYmVsIG9mIGEgc2luZ2xlIHByb3BlcnR5IG9mIHRoZSBtZXRhZGF0YVxuICAgKi9cbiAgbGFiZWw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiB2YWx1ZSBvZiBhIHNpbmdsZSBwcm9wZXJ0eSBvZiB0aGUgbWV0YWRhdGFcbiAgICovXG4gIHZhbHVlPzogc3RyaW5nO1xuICAvKipcbiAgICogY2F0ZWdvcnkgb2YgYSBpdGVtIG9mIHRoZSBpY29uIGxpc3QsIHVzZWQgdG8gZ2l2ZSBhIGRpZmZlcmVudCBjbGFzc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIGljb24gb2YgYW4gaXRlbSBvZiB0aGUgaWNvbiBsaXN0XG4gICAqL1xuICBpY29uPzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1pdGVtLXByZXZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vaXRlbS1wcmV2aWV3Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1QcmV2aWV3Q29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSUl0ZW1QcmV2aWV3RGF0YTtcbiAgQElucHV0KCkgZW1pdDogYW55OyBcblxuICBvbkNsaWNrKHBheWxvYWQ6IGFueSkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG59Il19