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
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    FooterComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
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
    return FooterComponent;
}());
export { FooterComponent };
if (false) {
    /** @type {?} */
    FooterComponent.prototype.data;
    /** @type {?} */
    FooterComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQWFqRCxnQ0FjQzs7Ozs7O0lBVkMsMEJBQWE7Ozs7O0lBSWIsNkJBQWM7O0lBQ2QsNEJBQWU7Ozs7O0lBSWYsMkJBQVk7Ozs7Ozs7Ozs7Ozs7O0FBY2QsaUNBa0JDOzs7Ozs7SUFkQywwQkFBWTs7Ozs7SUFJWiw4QkFBaUI7Ozs7O0lBSWpCLDhCQUFjOztJQUNkLDZCQUFlOzs7OztJQUlmLDRCQUFZOzs7Ozs7Ozs7Ozs7OztBQWNkLGtDQXlCQzs7Ozs7O0lBckJDLDZCQUFlOzs7OztJQUlmLDhCQUF1Qjs7Ozs7SUFJdkIsNEJBQWM7Ozs7O0lBSWQsNkJBQXFCOzs7OztJQUlyQiwrQkFBYzs7Ozs7SUFJZCw2QkFBWTs7Ozs7Ozs7OztBQVVkLGdDQVNDOzs7Ozs7SUFMQyw2QkFBd0I7Ozs7O0lBSXhCLDZCQUFjOztBQUdoQjtJQUFBO0lBYUEsQ0FBQzs7Ozs7SUFKQyxpQ0FBTzs7OztJQUFQLFVBQVEsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixzc0RBQTRCO2lCQUM3Qjs7O3VCQUVFLEtBQUs7dUJBRUwsS0FBSzs7SUFNUixzQkFBQztDQUFBLEFBYkQsSUFhQztTQVRZLGVBQWU7OztJQUMxQiwrQkFBMEI7O0lBRTFCLCtCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEZPT1RFUi50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBlYWNoIGxpbmsgaW4gZm9vdGVyIG1lbnVzXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgYW5jaG9yIChtYW5kYXRvcnkpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZvb3Rlckxpbmsge1xyXG4gIC8qKlxyXG4gICAqIGltYWdlIHVybFxyXG4gICAqL1xyXG4gIHRleHQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbiAgYW5jaG9yOiBBbmNob3I7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGVhY2ggaW1hZ2UgaW4gdGhlIGZvb3RlciAodXN1YWxseSBsb2dvcylcclxuICpcclxuICogQHByb3BlcnR5IHVybCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBhbHR0ZXh0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgYW5jaG9yIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICpcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRm9vdGVySW1hZ2Uge1xyXG4gIC8qKlxyXG4gICAqIGltYWdlIHVybFxyXG4gICAqL1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGltYWdlIGFsdCB0ZXh0XHJcbiAgICovXHJcbiAgYWx0dGV4dD86IHN0cmluZztcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbiAgYW5jaG9yOiBBbmNob3I7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGEgc2luZ2xlIEZvb3RlciBjb2x1bW4gdGhhdCBjYW4gZGlzcGxheSB0aXRsZSwgaW1hZ2VzLCB0ZXh0IGFuZCBhIG5hdiBsaXN0XHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB0aXRsZSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpbWFnZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgdGV4dCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBsaW5rcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICpcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRm9vdGVyQ29sdW1uIHtcclxuICAvKipcclxuICAgKiBjb2x1bW4ncyB0aXRsZVxyXG4gICAqL1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGNvbHVtbidzIGltYWdlc1xyXG4gICAqL1xyXG4gIGltYWdlcz86IEZvb3RlckltYWdlW107XHJcbiAgLyoqXHJcbiAgICogY29sdW1uJ3MgdGV4dFxyXG4gICAqL1xyXG4gIHRleHQ/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogY29sdW1uJ3MgbmF2XHJcbiAgICovXHJcbiAgbGlua3M/OiBGb290ZXJMaW5rW107XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaW5mbyB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xyXG4gICAqL1xyXG4gIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBGb290ZXJDb21wb25lbnRzJ3MgXCJEYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGNvbHVtbnMgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZvb3RlckRhdGEge1xyXG4gIC8qKlxyXG4gICAqIGVhY2ggaXRlbSByZW5kZXJzIGEgY29sdW1uIG9mIHRoZSBmb290ZXJcclxuICAgKi9cclxuICBjb2x1bW5zOiBGb290ZXJDb2x1bW5bXTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctZm9vdGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZm9vdGVyLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb290ZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IEZvb3RlckRhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgb25DbGljayhwYXlsb2FkKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxufVxyXG4iXX0=