/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// FOOTER.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for each link in footer menus
 *
 * \@property text (mandatory)
 * \@property classes (optional)
 * \@property payload (mandatory)
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
    /**
     * image click's payload
     * @type {?|undefined}
     */
    IFooterLink.prototype.payload;
    /**
     * additional info useful for the component's logic
     * @type {?|undefined}
     */
    IFooterLink.prototype._meta;
}
/**
 * Interface for each image in the footer (usually logos)
 *
 * \@property url (mandatory)
 * \@property alttext (optional)
 * \@property classes (optional)
 * \@property payload (optional)
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
    /**
     * image click's payload
     * @type {?|undefined}
     */
    IFooterImage.prototype.payload;
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
                template: "<div *ngIf=\"data\" class=\"n7-footer {{data.classes || ''}}\">\r\n    <div class=\"n7-footer__content\">\r\n        <!-- Loop footer content columns -->\r\n        <div class=\"n7-footer__column {{column.classes || ''}}\" *ngFor=\"let column of data.columns\">\r\n            <ng-container *ngTemplateOutlet=\"footerColumn; context:{$implicit: column}\"></ng-container>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Template: Columns -->\r\n<ng-template #footerColumn let-column>\r\n    <h2 *ngIf=\"column.title\" class=\"n7-footer__column-title\">\r\n        {{ column.title }}\r\n    </h2>\r\n    <p *ngIf=\"column.text\" \r\n       class=\"n7-footer__column-text\"\r\n       [innerHTML]=\"column.text\">\r\n    </p>\r\n    <div *ngIf=\"column.links\" class=\"n7-footer__column-nav\">\r\n        <ul class=\"n7-footer__column-nav-list\">\r\n            <li *ngFor=\"let link of column.links\"\r\n                class=\"n7-footer__column-nav-item {{link.classes || ''}}\">\r\n                <a class=\"n7-footer__column-nav-link\" \r\n                   (click)=\"onClick(link.payload)\">\r\n                    {{ link.text }}\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n    <div *ngIf=\"column.images\" class=\"n7-footer__column-images\">\r\n        <img *ngFor=\"let image of column.images\" \r\n             src=\"{{ image.url }}\" \r\n             [attr.alt]=\"image.alttext\"\r\n             (click)=\"onClick(image.payload)\"\r\n             class=\"{{image.classes || ''}}\">\r\n    </div>\r\n</ng-template>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0FBWWpELGlDQWlCQzs7Ozs7O0lBYkMsMkJBQWE7Ozs7O0lBSWIsOEJBQWM7Ozs7O0lBSWQsOEJBQWM7Ozs7O0lBSWQsNEJBQVk7Ozs7Ozs7Ozs7Ozs7O0FBY2Qsa0NBcUJDOzs7Ozs7SUFqQkMsMkJBQVk7Ozs7O0lBSVosK0JBQWlCOzs7OztJQUlqQiwrQkFBYzs7Ozs7SUFJZCwrQkFBYzs7Ozs7SUFJZCw2QkFBWTs7Ozs7Ozs7Ozs7Ozs7QUFjZCxtQ0F5QkM7Ozs7OztJQXJCQyw4QkFBZTs7Ozs7SUFJZiwrQkFBd0I7Ozs7O0lBSXhCLDZCQUFjOzs7OztJQUlkLDhCQUFzQjs7Ozs7SUFJdEIsZ0NBQWM7Ozs7O0lBSWQsOEJBQVk7Ozs7Ozs7Ozs7QUFVZCxpQ0FTQzs7Ozs7O0lBTEMsOEJBQXlCOzs7OztJQUl6Qiw4QkFBYzs7QUFPaEIsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBSTFCLE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUFYRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLDBpREFBNEI7YUFDN0I7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETiwrQkFBMkI7O0lBQzNCLCtCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEZPT1RFUi50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgZWFjaCBsaW5rIGluIGZvb3RlciBtZW51c1xyXG4gKlxyXG4gKiBAcHJvcGVydHkgdGV4dCAobWFuZGF0b3J5KVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChtYW5kYXRvcnkpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElGb290ZXJMaW5rIHtcclxuICAvKipcclxuICAgKiBpbWFnZSB1cmxcclxuICAgKi9cclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIGltYWdlIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICAqL1xyXG4gIHBheWxvYWQ/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGVhY2ggaW1hZ2UgaW4gdGhlIGZvb3RlciAodXN1YWxseSBsb2dvcylcclxuICpcclxuICogQHByb3BlcnR5IHVybCAobWFuZGF0b3J5KVxyXG4gKiBAcHJvcGVydHkgYWx0dGV4dCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRm9vdGVySW1hZ2Uge1xyXG4gIC8qKlxyXG4gICAqIGltYWdlIHVybFxyXG4gICAqL1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGltYWdlIGFsdCB0ZXh0XHJcbiAgICovXHJcbiAgYWx0dGV4dD86IHN0cmluZztcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogaW1hZ2UgY2xpY2sncyBwYXlsb2FkXHJcbiAgICovXHJcbiAgcGF5bG9hZD86IGFueTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGluZm8gdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgRm9vdGVyIGNvbHVtbiB0aGF0IGNhbiBkaXNwbGF5IHRpdGxlLCBpbWFnZXMsIHRleHQgYW5kIGEgbmF2IGxpc3RcclxuICpcclxuICogQHByb3BlcnR5IHRpdGxlIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGltYWdlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGxpbmtzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRm9vdGVyQ29sdW1uIHtcclxuICAvKipcclxuICAgKiBjb2x1bW4ncyB0aXRsZVxyXG4gICAqL1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGNvbHVtbidzIGltYWdlc1xyXG4gICAqL1xyXG4gIGltYWdlcz86IElGb290ZXJJbWFnZVtdO1xyXG4gIC8qKlxyXG4gICAqIGNvbHVtbidzIHRleHRcclxuICAgKi9cclxuICB0ZXh0Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGNvbHVtbidzIG5hdlxyXG4gICAqL1xyXG4gIGxpbmtzPzogSUZvb3RlckxpbmtbXTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEZvb3RlckNvbXBvbmVudHMncyBcIkRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgY29sdW1ucyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICpcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZvb3RlckRhdGEge1xyXG4gIC8qKlxyXG4gICAqIGVhY2ggaXRlbSByZW5kZXJzIGEgY29sdW1uIG9mIHRoZSBmb290ZXJcclxuICAgKi9cclxuICBjb2x1bW5zOiBJRm9vdGVyQ29sdW1uW107XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWZvb3RlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvb3Rlci5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9vdGVyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBJRm9vdGVyRGF0YTtcclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZCkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcbn0iXX0=