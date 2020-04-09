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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQWFqRCxnQ0FjQzs7Ozs7O0lBVkMsMEJBQWE7Ozs7O0lBSWIsNkJBQWM7O0lBQ2QsNEJBQWU7Ozs7O0lBSWYsMkJBQVk7Ozs7Ozs7Ozs7Ozs7O0FBY2QsaUNBa0JDOzs7Ozs7SUFkQywwQkFBWTs7Ozs7SUFJWiw4QkFBaUI7Ozs7O0lBSWpCLDhCQUFjOztJQUNkLDZCQUFlOzs7OztJQUlmLDRCQUFZOzs7Ozs7Ozs7Ozs7OztBQWNkLGtDQXlCQzs7Ozs7O0lBckJDLDZCQUFlOzs7OztJQUlmLDhCQUF1Qjs7Ozs7SUFJdkIsNEJBQWM7Ozs7O0lBSWQsNkJBQXFCOzs7OztJQUlyQiwrQkFBYzs7Ozs7SUFJZCw2QkFBWTs7Ozs7Ozs7OztBQVVkLGdDQVNDOzs7Ozs7SUFMQyw2QkFBd0I7Ozs7O0lBSXhCLDZCQUFjOztBQU9oQixNQUFNLE9BQU8sZUFBZTs7Ozs7SUFLMUIsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQVpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsb25EQUE0QjthQUM3Qjs7O21CQUVFLEtBQUs7bUJBRUwsS0FBSzs7OztJQUZOLCtCQUEwQjs7SUFFMUIsK0JBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZPT1RFUi50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5jaG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkLWludGVyZmFjZXMnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgZWFjaCBsaW5rIGluIGZvb3RlciBtZW51c1xuICpcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBhbmNob3IgKG1hbmRhdG9yeSlcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGb290ZXJMaW5rIHtcbiAgLyoqXG4gICAqIGltYWdlIHVybFxuICAgKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBhbnk7XG4gIGFuY2hvcjogQW5jaG9yO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXG4gICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGVhY2ggaW1hZ2UgaW4gdGhlIGZvb3RlciAodXN1YWxseSBsb2dvcylcbiAqXG4gKiBAcHJvcGVydHkgdXJsIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBhbHR0ZXh0IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBhbmNob3IgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZvb3RlckltYWdlIHtcbiAgLyoqXG4gICAqIGltYWdlIHVybFxuICAgKi9cbiAgdXJsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBpbWFnZSBhbHQgdGV4dFxuICAgKi9cbiAgYWx0dGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogYW55O1xuICBhbmNob3I6IEFuY2hvcjtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mbyB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBhIHNpbmdsZSBGb290ZXIgY29sdW1uIHRoYXQgY2FuIGRpc3BsYXkgdGl0bGUsIGltYWdlcywgdGV4dCBhbmQgYSBuYXYgbGlzdFxuICpcbiAqIEBwcm9wZXJ0eSB0aXRsZSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaW1hZ2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB0ZXh0IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBsaW5rcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGb290ZXJDb2x1bW4ge1xuICAvKipcbiAgICogY29sdW1uJ3MgdGl0bGVcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICogY29sdW1uJ3MgaW1hZ2VzXG4gICAqL1xuICBpbWFnZXM/OiBGb290ZXJJbWFnZVtdO1xuICAvKipcbiAgICogY29sdW1uJ3MgdGV4dFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIGNvbHVtbidzIG5hdlxuICAgKi9cbiAgbGlua3M/OiBGb290ZXJMaW5rW107XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mbyB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBGb290ZXJDb21wb25lbnRzJ3MgXCJEYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgY29sdW1ucyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZvb3RlckRhdGEge1xuICAvKipcbiAgICogZWFjaCBpdGVtIHJlbmRlcnMgYSBjb2x1bW4gb2YgdGhlIGZvb3RlclxuICAgKi9cbiAgY29sdW1uczogRm9vdGVyQ29sdW1uW107XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctZm9vdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvb3Rlci5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBGb290ZXJEYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxufVxuIl19