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
                    template: "<div *ngIf=\"data\" class=\"n7-footer {{data.classes || ''}}\">\n    <div class=\"n7-footer__content\">\n        <!-- Loop footer content columns -->\n        <div class=\"n7-footer__column {{column.classes || ''}}\" *ngFor=\"let column of data.columns\">\n            <ng-container *ngTemplateOutlet=\"footerColumn; context:{$implicit: column}\"></ng-container>\n        </div>\n    </div>\n</div>\n\n<!-- Template: Columns -->\n<ng-template #footerColumn let-column>\n    <h2 *ngIf=\"column.title\" class=\"n7-footer__column-title\">\n        {{ column.title }}\n    </h2>\n    <p *ngIf=\"column.text\" \n       class=\"n7-footer__column-text\"\n       [innerHTML]=\"column.text\">\n    </p>\n    <div *ngIf=\"column.links\" class=\"n7-footer__column-nav\">\n        <ul class=\"n7-footer__column-nav-list\">\n            <li *ngFor=\"let link of column.links\"\n                class=\"n7-footer__column-nav-item {{link.classes || ''}}\">\n                <a class=\"n7-footer__column-nav-link\" \n                   (click)=\"onClick(link.payload)\">\n                    {{ link.text }}\n                </a>\n            </li>\n        </ul>\n    </div>\n\n    <div *ngIf=\"column.images\" class=\"n7-footer__column-images\">\n        <img *ngFor=\"let image of column.images\" \n             src=\"{{ image.url }}\" \n             [attr.alt]=\"image.alttext\"\n             (click)=\"onClick(image.payload)\"\n             class=\"{{image.classes || ''}}\">\n    </div>\n</ng-template>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQVlqRCxpQ0FpQkM7Ozs7OztJQWJDLDJCQUFhOzs7OztJQUliLDhCQUFjOzs7OztJQUlkLDhCQUFjOzs7OztJQUlkLDRCQUFZOzs7Ozs7Ozs7Ozs7OztBQWNkLGtDQXFCQzs7Ozs7O0lBakJDLDJCQUFZOzs7OztJQUlaLCtCQUFpQjs7Ozs7SUFJakIsK0JBQWM7Ozs7O0lBSWQsK0JBQWM7Ozs7O0lBSWQsNkJBQVk7Ozs7Ozs7Ozs7Ozs7O0FBY2QsbUNBeUJDOzs7Ozs7SUFyQkMsOEJBQWU7Ozs7O0lBSWYsK0JBQXdCOzs7OztJQUl4Qiw2QkFBYzs7Ozs7SUFJZCw4QkFBc0I7Ozs7O0lBSXRCLGdDQUFjOzs7OztJQUlkLDhCQUFZOzs7Ozs7Ozs7O0FBVWQsaUNBU0M7Ozs7OztJQUxDLDhCQUF5Qjs7Ozs7SUFJekIsOEJBQWM7O0FBR2hCO0lBQUE7SUFZQSxDQUFDOzs7OztJQUpDLGlDQUFPOzs7O0lBQVAsVUFBUSxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkFYRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLGcrQ0FBNEI7aUJBQzdCOzs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLOztJQU1SLHNCQUFDO0NBQUEsQUFaRCxJQVlDO1NBUlksZUFBZTs7O0lBQzFCLCtCQUEyQjs7SUFDM0IsK0JBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZPT1RFUi50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgZWFjaCBsaW5rIGluIGZvb3RlciBtZW51c1xuICpcbiAqIEBwcm9wZXJ0eSB0ZXh0IChtYW5kYXRvcnkpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAobWFuZGF0b3J5KVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElGb290ZXJMaW5rIHtcbiAgLyoqXG4gICAqIGltYWdlIHVybFxuICAgKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBhbnk7XG4gIC8qKlxuICAgKiBpbWFnZSBjbGljaydzIHBheWxvYWRcbiAgICovXG4gIHBheWxvYWQ/OiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm8gdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgZWFjaCBpbWFnZSBpbiB0aGUgZm9vdGVyICh1c3VhbGx5IGxvZ29zKVxuICpcbiAqIEBwcm9wZXJ0eSB1cmwgKG1hbmRhdG9yeSlcbiAqIEBwcm9wZXJ0eSBhbHR0ZXh0IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRm9vdGVySW1hZ2Uge1xuICAvKipcbiAgICogaW1hZ2UgdXJsXG4gICAqL1xuICB1cmw6IHN0cmluZztcbiAgLyoqXG4gICAqIGltYWdlIGFsdCB0ZXh0XG4gICAqL1xuICBhbHR0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBhbnk7XG4gIC8qKlxuICAgKiBpbWFnZSBjbGljaydzIHBheWxvYWRcbiAgICovXG4gIHBheWxvYWQ/OiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm8gdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgRm9vdGVyIGNvbHVtbiB0aGF0IGNhbiBkaXNwbGF5IHRpdGxlLCBpbWFnZXMsIHRleHQgYW5kIGEgbmF2IGxpc3RcbiAqXG4gKiBAcHJvcGVydHkgdGl0bGUgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGltYWdlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdGV4dCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgbGlua3MgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUZvb3RlckNvbHVtbiB7XG4gIC8qKlxuICAgKiBjb2x1bW4ncyB0aXRsZVxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBjb2x1bW4ncyBpbWFnZXNcbiAgICovXG4gIGltYWdlcz86IElGb290ZXJJbWFnZVtdO1xuICAvKipcbiAgICogY29sdW1uJ3MgdGV4dFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIGNvbHVtbidzIG5hdlxuICAgKi9cbiAgbGlua3M/OiBJRm9vdGVyTGlua1tdO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm8gdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgRm9vdGVyQ29tcG9uZW50cydzIFwiRGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGNvbHVtbnMgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRm9vdGVyRGF0YSB7XG4gIC8qKlxuICAgKiBlYWNoIGl0ZW0gcmVuZGVycyBhIGNvbHVtbiBvZiB0aGUgZm9vdGVyXG4gICAqL1xuICBjb2x1bW5zOiBJRm9vdGVyQ29sdW1uW107XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctZm9vdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvb3Rlci5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJRm9vdGVyRGF0YTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG59Il19