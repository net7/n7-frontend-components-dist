/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export function IFooterLink() { }
if (false) {
    /**
     * image url
     * @type {?}
     */
    IFooterLink.prototype.text;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    IFooterLink.prototype.classes;
    /** @type {?} */
    IFooterLink.prototype.anchor;
    /**
     * additional info useful for the component's logic
     * @type {?|undefined}
     */
    IFooterLink.prototype._meta;
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
export function IFooterImage() { }
if (false) {
    /**
     * image url
     * @type {?}
     */
    IFooterImage.prototype.url;
    /**
     * image alt text
     * @type {?|undefined}
     */
    IFooterImage.prototype.alttext;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    IFooterImage.prototype.classes;
    /** @type {?} */
    IFooterImage.prototype.anchor;
    /**
     * additional info useful for the component's logic
     * @type {?|undefined}
     */
    IFooterImage.prototype._meta;
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
export function IFooterColumn() { }
if (false) {
    /**
     * column's title
     * @type {?|undefined}
     */
    IFooterColumn.prototype.title;
    /**
     * column's images
     * @type {?|undefined}
     */
    IFooterColumn.prototype.images;
    /**
     * column's text
     * @type {?|undefined}
     */
    IFooterColumn.prototype.text;
    /**
     * column's nav
     * @type {?|undefined}
     */
    IFooterColumn.prototype.links;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    IFooterColumn.prototype.classes;
    /**
     * additional info useful for the component's logic
     * @type {?|undefined}
     */
    IFooterColumn.prototype._meta;
}
/**
 * Interface for FooterComponents's "Data"
 *
 * \@property columns (required)
 * \@property classes (optional)
 *
 * @record
 */
export function IFooterData() { }
if (false) {
    /**
     * each item renders a column of the footer
     * @type {?}
     */
    IFooterData.prototype.columns;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    IFooterData.prototype.classes;
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
                template: "<div *ngIf=\"data\" class=\"n7-footer {{data.classes || ''}}\">\n    <div class=\"n7-footer__content\">\n        <!-- Loop footer content columns -->\n        <div class=\"n7-footer__column {{column.classes || ''}}\" *ngFor=\"let column of data.columns\">\n            <ng-container *ngTemplateOutlet=\"footerColumn; context:{$implicit: column}\"></ng-container>\n        </div>\n    </div>\n</div>\n\n<!-- Template: Columns -->\n<ng-template #footerColumn let-column>\n    <h2 *ngIf=\"column.title\" class=\"n7-footer__column-title\">\n        {{ column.title }}\n    </h2>\n    <p *ngIf=\"column.text\" \n       class=\"n7-footer__column-text\"\n       [innerHTML]=\"column.text\">\n    </p>\n    <div *ngIf=\"column.links\" class=\"n7-footer__column-nav\">\n        <ul class=\"n7-footer__column-nav-list\">\n            <li *ngFor=\"let link of column.links\"\n                class=\"n7-footer__column-nav-item {{link.classes || ''}}\">\n                <n7-anchor-wrapper [classes]=\"'n7-footer__column-nav-link'\"\n                [data]=\"link.anchor\"\n                (clicked)=\"onClick($event)\">\n                    {{ link.text }}\n                </n7-anchor-wrapper>\n            </li>\n        </ul>\n    </div>\n\n    <div *ngIf=\"column.images\" class=\"n7-footer__column-images\">\n        <n7-anchor-wrapper  *ngFor=\"let image of column.images\"\n        [classes]=\"image.classes || ''\"\n        [data]=\"image.anchor\"\n        (clicked)=\"onClick($event)\">\n            <img \n            [src]=\"image.url\" \n            [attr.alt]=\"image.alttext\" />\n        </n7-anchor-wrapper>\n    </div>\n</ng-template>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0FBYWpELGlDQWNDOzs7Ozs7SUFWQywyQkFBYTs7Ozs7SUFJYiw4QkFBYzs7SUFDZCw2QkFBZ0I7Ozs7O0lBSWhCLDRCQUFZOzs7Ozs7Ozs7Ozs7OztBQWNkLGtDQWtCQzs7Ozs7O0lBZEMsMkJBQVk7Ozs7O0lBSVosK0JBQWlCOzs7OztJQUlqQiwrQkFBYzs7SUFDZCw4QkFBZ0I7Ozs7O0lBSWhCLDZCQUFZOzs7Ozs7Ozs7Ozs7OztBQWNkLG1DQXlCQzs7Ozs7O0lBckJDLDhCQUFlOzs7OztJQUlmLCtCQUF3Qjs7Ozs7SUFJeEIsNkJBQWM7Ozs7O0lBSWQsOEJBQXNCOzs7OztJQUl0QixnQ0FBYzs7Ozs7SUFJZCw4QkFBWTs7Ozs7Ozs7OztBQVVkLGlDQVNDOzs7Ozs7SUFMQyw4QkFBeUI7Ozs7O0lBSXpCLDhCQUFjOztBQU9oQixNQUFNLE9BQU8sZUFBZTs7Ozs7SUFJMUIsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQVhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsb25EQUE0QjthQUM3Qjs7O21CQUVFLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLCtCQUEyQjs7SUFDM0IsK0JBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZPT1RFUi50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGVhY2ggbGluayBpbiBmb290ZXIgbWVudXNcbiAqXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgYW5jaG9yIChtYW5kYXRvcnkpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUZvb3Rlckxpbmsge1xuICAvKipcbiAgICogaW1hZ2UgdXJsXG4gICAqL1xuICB0ZXh0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbiAgYW5jaG9yOiBJQW5jaG9yO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXG4gICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGVhY2ggaW1hZ2UgaW4gdGhlIGZvb3RlciAodXN1YWxseSBsb2dvcylcbiAqXG4gKiBAcHJvcGVydHkgdXJsIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBhbHR0ZXh0IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBhbmNob3IgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElGb290ZXJJbWFnZSB7XG4gIC8qKlxuICAgKiBpbWFnZSB1cmxcbiAgICovXG4gIHVybDogc3RyaW5nO1xuICAvKipcbiAgICogaW1hZ2UgYWx0IHRleHRcbiAgICovXG4gIGFsdHRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbiAgYW5jaG9yOiBJQW5jaG9yO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXG4gICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGEgc2luZ2xlIEZvb3RlciBjb2x1bW4gdGhhdCBjYW4gZGlzcGxheSB0aXRsZSwgaW1hZ2VzLCB0ZXh0IGFuZCBhIG5hdiBsaXN0XG4gKlxuICogQHByb3BlcnR5IHRpdGxlIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpbWFnZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHRleHQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGxpbmtzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElGb290ZXJDb2x1bW4ge1xuICAvKipcbiAgICogY29sdW1uJ3MgdGl0bGVcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICogY29sdW1uJ3MgaW1hZ2VzXG4gICAqL1xuICBpbWFnZXM/OiBJRm9vdGVySW1hZ2VbXTtcbiAgLyoqXG4gICAqIGNvbHVtbidzIHRleHRcbiAgICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBjb2x1bW4ncyBuYXZcbiAgICovXG4gIGxpbmtzPzogSUZvb3RlckxpbmtbXTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogYW55O1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXG4gICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEZvb3RlckNvbXBvbmVudHMncyBcIkRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBjb2x1bW5zIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUZvb3RlckRhdGEge1xuICAvKipcbiAgICogZWFjaCBpdGVtIHJlbmRlcnMgYSBjb2x1bW4gb2YgdGhlIGZvb3RlclxuICAgKi9cbiAgY29sdW1uczogSUZvb3RlckNvbHVtbltdO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWZvb3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb290ZXIuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSUZvb3RlckRhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxufSJdfQ==