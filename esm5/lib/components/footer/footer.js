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
                    template: "<div *ngIf=\"data\" class=\"n7-footer {{data.classes || ''}}\">\r\n    <div class=\"n7-footer__content\">\r\n        <!-- Loop footer content columns -->\r\n        <div class=\"n7-footer__column {{column.classes || ''}}\" *ngFor=\"let column of data.columns\">\r\n            <ng-container *ngTemplateOutlet=\"footerColumn; context:{$implicit: column}\"></ng-container>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Template: Columns -->\r\n<ng-template #footerColumn let-column>\r\n    <h2 *ngIf=\"column.title\" class=\"n7-footer__column-title\">\r\n        {{ column.title }}\r\n    </h2>\r\n    <p *ngIf=\"column.text\" \r\n       class=\"n7-footer__column-text\"\r\n       [innerHTML]=\"column.text\">\r\n    </p>\r\n    <div *ngIf=\"column.links\" class=\"n7-footer__column-nav\">\r\n        <ul class=\"n7-footer__column-nav-list\">\r\n            <li *ngFor=\"let link of column.links\"\r\n                class=\"n7-footer__column-nav-item {{link.classes || ''}}\">\r\n                <a class=\"n7-footer__column-nav-link\" \r\n                   (click)=\"onClick(link.payload)\">\r\n                    {{ link.text }}\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n    <div *ngIf=\"column.images\" class=\"n7-footer__column-images\">\r\n        <img *ngFor=\"let image of column.images\" \r\n             src=\"{{ image.url }}\" \r\n             [attr.alt]=\"image.alttext\"\r\n             (click)=\"onClick(image.payload)\"\r\n             class=\"{{image.classes || ''}}\">\r\n    </div>\r\n</ng-template>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0FBWWpELGlDQWlCQzs7Ozs7O0lBYkMsMkJBQWE7Ozs7O0lBSWIsOEJBQWM7Ozs7O0lBSWQsOEJBQWM7Ozs7O0lBSWQsNEJBQVk7Ozs7Ozs7Ozs7Ozs7O0FBY2Qsa0NBcUJDOzs7Ozs7SUFqQkMsMkJBQVk7Ozs7O0lBSVosK0JBQWlCOzs7OztJQUlqQiwrQkFBYzs7Ozs7SUFJZCwrQkFBYzs7Ozs7SUFJZCw2QkFBWTs7Ozs7Ozs7Ozs7Ozs7QUFjZCxtQ0F5QkM7Ozs7OztJQXJCQyw4QkFBZTs7Ozs7SUFJZiwrQkFBd0I7Ozs7O0lBSXhCLDZCQUFjOzs7OztJQUlkLDhCQUFzQjs7Ozs7SUFJdEIsZ0NBQWM7Ozs7O0lBSWQsOEJBQVk7Ozs7Ozs7Ozs7QUFVZCxpQ0FTQzs7Ozs7O0lBTEMsOEJBQXlCOzs7OztJQUl6Qiw4QkFBYzs7QUFHaEI7SUFBQTtJQVlBLENBQUM7Ozs7O0lBSkMsaUNBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQVhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsMGlEQUE0QjtpQkFDN0I7Ozt1QkFFRSxLQUFLO3VCQUNMLEtBQUs7O0lBTVIsc0JBQUM7Q0FBQSxBQVpELElBWUM7U0FSWSxlQUFlOzs7SUFDMUIsK0JBQTJCOztJQUMzQiwrQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBGT09URVIudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGVhY2ggbGluayBpbiBmb290ZXIgbWVudXNcclxuICpcclxuICogQHByb3BlcnR5IHRleHQgKG1hbmRhdG9yeSlcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAobWFuZGF0b3J5KVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRm9vdGVyTGluayB7XHJcbiAgLyoqXHJcbiAgICogaW1hZ2UgdXJsXHJcbiAgICovXHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IGFueTtcclxuICAvKipcclxuICAgKiBpbWFnZSBjbGljaydzIHBheWxvYWRcclxuICAgKi9cclxuICBwYXlsb2FkPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaW5mbyB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xyXG4gICAqL1xyXG4gIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBlYWNoIGltYWdlIGluIHRoZSBmb290ZXIgKHVzdWFsbHkgbG9nb3MpXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB1cmwgKG1hbmRhdG9yeSlcclxuICogQHByb3BlcnR5IGFsdHRleHQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICpcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZvb3RlckltYWdlIHtcclxuICAvKipcclxuICAgKiBpbWFnZSB1cmxcclxuICAgKi9cclxuICB1cmw6IHN0cmluZztcclxuICAvKipcclxuICAgKiBpbWFnZSBhbHQgdGV4dFxyXG4gICAqL1xyXG4gIGFsdHRleHQ/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIGltYWdlIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICAqL1xyXG4gIHBheWxvYWQ/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGEgc2luZ2xlIEZvb3RlciBjb2x1bW4gdGhhdCBjYW4gZGlzcGxheSB0aXRsZSwgaW1hZ2VzLCB0ZXh0IGFuZCBhIG5hdiBsaXN0XHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB0aXRsZSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpbWFnZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgdGV4dCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBsaW5rcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICpcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZvb3RlckNvbHVtbiB7XHJcbiAgLyoqXHJcbiAgICogY29sdW1uJ3MgdGl0bGVcclxuICAgKi9cclxuICB0aXRsZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiBjb2x1bW4ncyBpbWFnZXNcclxuICAgKi9cclxuICBpbWFnZXM/OiBJRm9vdGVySW1hZ2VbXTtcclxuICAvKipcclxuICAgKiBjb2x1bW4ncyB0ZXh0XHJcbiAgICovXHJcbiAgdGV4dD86IHN0cmluZztcclxuICAvKipcclxuICAgKiBjb2x1bW4ncyBuYXZcclxuICAgKi9cclxuICBsaW5rcz86IElGb290ZXJMaW5rW107XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaW5mbyB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xyXG4gICAqL1xyXG4gIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBGb290ZXJDb21wb25lbnRzJ3MgXCJEYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGNvbHVtbnMgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElGb290ZXJEYXRhIHtcclxuICAvKipcclxuICAgKiBlYWNoIGl0ZW0gcmVuZGVycyBhIGNvbHVtbiBvZiB0aGUgZm9vdGVyXHJcbiAgICovXHJcbiAgY29sdW1uczogSUZvb3RlckNvbHVtbltdO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1mb290ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mb290ZXIuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogSUZvb3RlckRhdGE7XHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBvbkNsaWNrKHBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgfVxyXG59Il19