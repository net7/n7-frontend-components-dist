/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// TAG.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for TagComponent's "data"
 *
 * \@property text (required)
 * \@property label (optional)
 * \@property icon (optional)
 * \@property classes (optional)
 * \@property payload (optional)
 * \@property _meta (optional)
 *
 * @record
 */
export function ITagData() { }
if (false) {
    /**
     * tag's label
     * @type {?|undefined}
     */
    ITagData.prototype.label;
    /**
     * text visualized on the tag
     * @type {?}
     */
    ITagData.prototype.text;
    /**
     * action icon (on right side)
     * @type {?|undefined}
     */
    ITagData.prototype.icon;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    ITagData.prototype.classes;
    /**
     * action click's payload
     * @type {?|undefined}
     */
    ITagData.prototype.payload;
    /**
     * additional info
     * @type {?|undefined}
     */
    ITagData.prototype._meta;
}
export class TagComponent {
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
TagComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-tag',
                template: "<span class=\"n7-tag {{data.classes || ''}}\" *ngIf=\"data\">\r\n    <span class=\"n7-tag__label\" *ngIf=\"data.label\">\r\n        {{ data.label }}\r\n    </span>\r\n    <span class=\"n7-tag__text\" *ngIf=\"data.text\">\r\n        {{ data.text }}\r\n    </span>\r\n    <span class=\"n7-tag__icon {{data.icon}}\" *ngIf=\"data.icon\" (click)=\"onClick(data.payload)\"></span>\r\n</span>"
            }] }
];
TagComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TagComponent.prototype.data;
    /** @type {?} */
    TagComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWcvdGFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWFqRCw4QkF5QkM7Ozs7OztJQXJCRyx5QkFBZTs7Ozs7SUFJZix3QkFBYTs7Ozs7SUFJYix3QkFBYzs7Ozs7SUFJZCwyQkFBaUI7Ozs7O0lBSWpCLDJCQUFjOzs7OztJQUlkLHlCQUFZOztBQU9oQixNQUFNLE9BQU8sWUFBWTs7Ozs7SUFJckIsT0FBTyxDQUFDLE9BQU87UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7OztZQVhKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsNllBQXlCO2FBQzVCOzs7bUJBRUksS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sNEJBQStCOztJQUMvQiw0QkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBUQUcudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIFRhZ0NvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBsYWJlbCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVGFnRGF0YSB7XHJcbiAgICAvKipcclxuICAgICAqIHRhZydzIGxhYmVsXHJcbiAgICAgKi9cclxuICAgIGxhYmVsPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiB0ZXh0IHZpc3VhbGl6ZWQgb24gdGhlIHRhZ1xyXG4gICAgICovXHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGFjdGlvbiBpY29uIChvbiByaWdodCBzaWRlKVxyXG4gICAgICovXHJcbiAgICBpY29uPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAgICovXHJcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXHJcbiAgICAgKi9cclxuICAgIHBheWxvYWQ/OiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaW5mb1xyXG4gICAgICovXHJcbiAgICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ243LXRhZycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGFnLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWdDb21wb25lbnQgIHtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkYXRhOiBJVGFnRGF0YTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBlbWl0OiBhbnk7XHJcblxyXG4gICAgb25DbGljayhwYXlsb2FkKXtcclxuICAgICAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICAgIH1cclxufSJdfQ==