/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/footer/footer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// FOOTER.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for each link in footer menus
 *
 * \@property text (required)
 * \@property classes (optional)
 * \@property anchor (mandatory)
 * \@property _meta (optional)
 * \@property _meta (optional)
 *
 * @record
 */
export function FooterLink() { }
if (false) {
    /**
     * image url
     * @type {?}
     */
    FooterLink.prototype.text;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    FooterLink.prototype.classes;
    /** @type {?} */
    FooterLink.prototype.anchor;
    /**
     * additional info useful for the component's logic
     * @type {?|undefined}
     */
    FooterLink.prototype._meta;
}
/**
 * Interface for each image in the footer (usually logos)
 *
 * \@property url (required)
 * \@property alttext (optional)
 * \@property classes (optional)
 * \@property anchor (required)
 * \@property _meta (optional)
 * \@property _meta (optional)
 *
 * @record
 */
export function FooterImage() { }
if (false) {
    /**
     * image url
     * @type {?}
     */
    FooterImage.prototype.url;
    /**
     * image alt text
     * @type {?|undefined}
     */
    FooterImage.prototype.alttext;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    FooterImage.prototype.classes;
    /** @type {?} */
    FooterImage.prototype.anchor;
    /**
     * additional info useful for the component's logic
     * @type {?|undefined}
     */
    FooterImage.prototype._meta;
}
/**
 * Interface for a single Footer column that can display title, images, text and a nav list
 *
 * \@property title (optional)
 * \@property images (optional)
 * \@property text (optional)
 * \@property links (optional)
 * \@property classes (optional)
 * \@property _meta (optional)
 *
 * @record
 */
export function FooterColumn() { }
if (false) {
    /**
     * column's title
     * @type {?|undefined}
     */
    FooterColumn.prototype.title;
    /**
     * column's images
     * @type {?|undefined}
     */
    FooterColumn.prototype.images;
    /**
     * column's text
     * @type {?|undefined}
     */
    FooterColumn.prototype.text;
    /**
     * column's nav
     * @type {?|undefined}
     */
    FooterColumn.prototype.links;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    FooterColumn.prototype.classes;
    /**
     * additional info useful for the component's logic
     * @type {?|undefined}
     */
    FooterColumn.prototype._meta;
}
/**
 * Interface for FooterComponents's "Data"
 *
 * \@property columns (required)
 * \@property classes (optional)
 *
 * @record
 */
export function FooterData() { }
if (false) {
    /**
     * each item renders a column of the footer
     * @type {?}
     */
    FooterData.prototype.columns;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    FooterData.prototype.classes;
}
export class FooterComponent {
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
FooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-footer',
                template: "<div *ngIf=\"data\" class=\"n7-footer {{data.classes || ''}}\">\r\n    <div class=\"n7-footer__content\">\r\n        <!-- Loop footer content columns -->\r\n        <div class=\"n7-footer__column {{column.classes || ''}}\" *ngFor=\"let column of data.columns\">\r\n            <ng-container *ngTemplateOutlet=\"footerColumn; context:{$implicit: column}\"></ng-container>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Template: Columns -->\r\n<ng-template #footerColumn let-column>\r\n    <h2 *ngIf=\"column.title\" class=\"n7-footer__column-title\">\r\n        {{ column.title }}\r\n    </h2>\r\n    <p *ngIf=\"column.text\" \r\n       class=\"n7-footer__column-text\"\r\n       [innerHTML]=\"column.text\">\r\n    </p>\r\n    <div *ngIf=\"column.links\" class=\"n7-footer__column-nav\">\r\n        <ul class=\"n7-footer__column-nav-list\">\r\n            <li *ngFor=\"let link of column.links\"\r\n                class=\"n7-footer__column-nav-item {{link.classes || ''}}\">\r\n                <n7-anchor-wrapper [classes]=\"'n7-footer__column-nav-link'\"\r\n                [data]=\"link.anchor\"\r\n                (clicked)=\"onClick($event)\">\r\n                    {{ link.text }}\r\n                </n7-anchor-wrapper>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n    <div *ngIf=\"column.images\" class=\"n7-footer__column-images\">\r\n        <n7-anchor-wrapper  *ngFor=\"let image of column.images\"\r\n        [classes]=\"image.classes || ''\"\r\n        [data]=\"image.anchor\"\r\n        (clicked)=\"onClick($event)\">\r\n            <img \r\n            [src]=\"image.url\" \r\n            [attr.alt]=\"image.alttext\" />\r\n        </n7-anchor-wrapper>\r\n    </div>\r\n</ng-template>"
            }] }
];
FooterComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FooterComponent.prototype.data;
    /** @type {?} */
    FooterComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQWFqRCxnQ0FjQzs7Ozs7O0lBVkMsMEJBQWE7Ozs7O0lBSWIsNkJBQWM7O0lBQ2QsNEJBQWU7Ozs7O0lBSWYsMkJBQVk7Ozs7Ozs7Ozs7Ozs7O0FBY2QsaUNBa0JDOzs7Ozs7SUFkQywwQkFBWTs7Ozs7SUFJWiw4QkFBaUI7Ozs7O0lBSWpCLDhCQUFjOztJQUNkLDZCQUFlOzs7OztJQUlmLDRCQUFZOzs7Ozs7Ozs7Ozs7OztBQWNkLGtDQXlCQzs7Ozs7O0lBckJDLDZCQUFlOzs7OztJQUlmLDhCQUF1Qjs7Ozs7SUFJdkIsNEJBQWM7Ozs7O0lBSWQsNkJBQXFCOzs7OztJQUlyQiwrQkFBYzs7Ozs7SUFJZCw2QkFBWTs7Ozs7Ozs7OztBQVVkLGdDQVNDOzs7Ozs7SUFMQyw2QkFBd0I7Ozs7O0lBSXhCLDZCQUFjOztBQU9oQixNQUFNLE9BQU8sZUFBZTs7Ozs7SUFLMUIsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQVpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsc3NEQUE0QjthQUM3Qjs7O21CQUVFLEtBQUs7bUJBRUwsS0FBSzs7OztJQUZOLCtCQUEwQjs7SUFFMUIsK0JBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRk9PVEVSLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGVhY2ggbGluayBpbiBmb290ZXIgbWVudXNcclxuICpcclxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBhbmNob3IgKG1hbmRhdG9yeSlcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICpcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRm9vdGVyTGluayB7XHJcbiAgLyoqXHJcbiAgICogaW1hZ2UgdXJsXHJcbiAgICovXHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IGFueTtcclxuICBhbmNob3I6IEFuY2hvcjtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGluZm8gdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgZWFjaCBpbWFnZSBpbiB0aGUgZm9vdGVyICh1c3VhbGx5IGxvZ29zKVxyXG4gKlxyXG4gKiBAcHJvcGVydHkgdXJsIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGFsdHRleHQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBhbmNob3IgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBGb290ZXJJbWFnZSB7XHJcbiAgLyoqXHJcbiAgICogaW1hZ2UgdXJsXHJcbiAgICovXHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogaW1hZ2UgYWx0IHRleHRcclxuICAgKi9cclxuICBhbHR0ZXh0Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IGFueTtcclxuICBhbmNob3I6IEFuY2hvcjtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGluZm8gdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgRm9vdGVyIGNvbHVtbiB0aGF0IGNhbiBkaXNwbGF5IHRpdGxlLCBpbWFnZXMsIHRleHQgYW5kIGEgbmF2IGxpc3RcclxuICpcclxuICogQHByb3BlcnR5IHRpdGxlIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGltYWdlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGxpbmtzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBGb290ZXJDb2x1bW4ge1xyXG4gIC8qKlxyXG4gICAqIGNvbHVtbidzIHRpdGxlXHJcbiAgICovXHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogY29sdW1uJ3MgaW1hZ2VzXHJcbiAgICovXHJcbiAgaW1hZ2VzPzogRm9vdGVySW1hZ2VbXTtcclxuICAvKipcclxuICAgKiBjb2x1bW4ncyB0ZXh0XHJcbiAgICovXHJcbiAgdGV4dD86IHN0cmluZztcclxuICAvKipcclxuICAgKiBjb2x1bW4ncyBuYXZcclxuICAgKi9cclxuICBsaW5rcz86IEZvb3RlckxpbmtbXTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEZvb3RlckNvbXBvbmVudHMncyBcIkRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgY29sdW1ucyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICpcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRm9vdGVyRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogZWFjaCBpdGVtIHJlbmRlcnMgYSBjb2x1bW4gb2YgdGhlIGZvb3RlclxyXG4gICAqL1xyXG4gIGNvbHVtbnM6IEZvb3RlckNvbHVtbltdO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1mb290ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mb290ZXIuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogRm9vdGVyRGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBvbkNsaWNrKHBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==