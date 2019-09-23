/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// PAGINATION.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for PaginationComponent's links (pages and navigation buttons)
 *
 * \@property text (required)
 * \@property payload (required)
 * \@property classes (optional)
 * \@property _meta (optional)
 * @record
 */
export function IAnchor() { }
if (false) {
    /**
     * innerHTML or plain text for the label
     * @type {?|undefined}
     */
    IAnchor.prototype.text;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    IAnchor.prototype.classes;
    /**
     * action click's payload
     * @type {?}
     */
    IAnchor.prototype.payload;
    /**
     * additional info
     * @type {?|undefined}
     */
    IAnchor.prototype._meta;
}
/**
 * Interface for PaginationComponent's "data"
 *
 * \@property links (required)
 * \@property first (optional)
 * \@property prev (optional)
 * \@property next (optional)
 * \@property last (optional)
 * \@property classes (optional)
 * \@property payload (optional)
 * \@property _meta (optional)
 * @record
 */
export function IPaginationData() { }
if (false) {
    /**
     * innerHtml for the "first" label
     * @type {?|undefined}
     */
    IPaginationData.prototype.first;
    /**
     * innerHtml for the "prev" label
     * @type {?|undefined}
     */
    IPaginationData.prototype.prev;
    /**
     * innerHtml for the "next" label
     * @type {?|undefined}
     */
    IPaginationData.prototype.next;
    /**
     * innerHtml for the "last" label
     * @type {?|undefined}
     */
    IPaginationData.prototype.last;
    /**
     * array of "pages" label (as text)
     * @type {?}
     */
    IPaginationData.prototype.links;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    IPaginationData.prototype.classes;
    /**
     * action click's payload
     * @type {?|undefined}
     */
    IPaginationData.prototype.payload;
    /**
     * additional info
     * @type {?|undefined}
     */
    IPaginationData.prototype._meta;
}
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    PaginationComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    PaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-pagination',
                    template: "<nav class=\"n7-pagination {{data.classes || ''}}\" *ngIf=\"data\">\r\n    <ul class=n7-pagination__items>\r\n\r\n        <li class=\"n7-pagination__first {{data.first.classes || ''}}\" *ngIf=\"data.first\">\r\n            <a class=\"n7-pagination__first-link {{ data.first.text ? 'has-text' : '' }}\" \r\n               (click)=\"onClick(data.first.payload)\">\r\n                <span class=\"n7-pagination__first-icon n7-icon-angle-double-left\"></span>\r\n                <span class=\"n7-pagination__first-label\" *ngIf=\"data.first.text\">\r\n                    {{ data.first.text }}\r\n                </span>\r\n            </a>\r\n        </li>\r\n        <li class=\"n7-pagination__prev {{data.prev.classes || ''}}\" *ngIf=\"data.prev\">\r\n            <a class=\"n7-pagination__prev-link {{ data.prev.text ? 'has-text' : '' }}\" \r\n               (click)=\"onClick(data.prev.payload)\">\r\n                <span class=\"n7-pagination__prev-icon n7-icon-angle-left\"></span>\r\n                <span class=\"n7-pagination__prev-label\" *ngIf=\"data.prev.text\">\r\n                    {{ data.prev.text }}\r\n                </span>\r\n            </a>\r\n        </li>\r\n\r\n        <li class=\"n7-pagination__page {{page.classes || ''}}\" *ngFor=\"let page of data.links\">\r\n            <a class=\"n7-pagination__page-link\" (click)=\"onClick(page.payload)\">{{ page.text }}</a>\r\n        </li>\r\n\r\n        <li class=\"n7-pagination__next {{data.next.classes || ''}}\" *ngIf=\"data.next\">\r\n            <a class=\"n7-pagination__next-link {{ data.next.text ? 'has-text' : '' }}\" \r\n               (click)=\"onClick(data.next.payload)\">\r\n                <span class=\"n7-pagination__next-label\" *ngIf=\"data.next.text\">\r\n                    {{ data.next.text }}\r\n                </span>\r\n                <span class=\"n7-pagination__next-icon n7-icon-angle-right\"></span>\r\n            </a>\r\n        </li>\r\n        <li class=\"n7-pagination__last {{data.last.classes || ''}}\" *ngIf=\"data.last\">\r\n            <a class=\"n7-pagination__last-link {{ data.last.text ? 'has-text' : '' }}\" \r\n               (click)=\"onClick(data.last.payload)\">\r\n                <span class=\"n7-pagination__last-label\" *ngIf=\"data.last.text\">\r\n                    {{ data.last.text }}\r\n                </span>\r\n                <span class=\"n7-pagination__last-icon  n7-icon-angle-double-right\"></span>\r\n            </a>\r\n        </li>\r\n\r\n    </ul> \r\n</nav>"
                }] }
    ];
    PaginationComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return PaginationComponent;
}());
export { PaginationComponent };
if (false) {
    /** @type {?} */
    PaginationComponent.prototype.data;
    /** @type {?} */
    PaginationComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztBQVVqRCw2QkFpQkM7Ozs7OztJQWJDLHVCQUFjOzs7OztJQUlkLDBCQUFpQjs7Ozs7SUFJakIsMEJBQWE7Ozs7O0lBSWIsd0JBQVk7Ozs7Ozs7Ozs7Ozs7OztBQWVkLHFDQWlDQzs7Ozs7O0lBN0JDLGdDQUFnQjs7Ozs7SUFJaEIsK0JBQWU7Ozs7O0lBSWYsK0JBQWU7Ozs7O0lBSWYsK0JBQWU7Ozs7O0lBSWYsZ0NBQWlCOzs7OztJQUlqQixrQ0FBaUI7Ozs7O0lBSWpCLGtDQUFjOzs7OztJQUlkLGdDQUFZOztBQUdkO0lBQUE7SUFhQSxDQUFDOzs7OztJQUxDLHFDQUFPOzs7O0lBQVAsVUFBUSxPQUFZO1FBQ2xCLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qix3OUVBQWdDO2lCQUNqQzs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUFPUiwwQkFBQztDQUFBLEFBYkQsSUFhQztTQVRZLG1CQUFtQjs7O0lBQzlCLG1DQUErQjs7SUFDL0IsbUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gUEFHSU5BVElPTi50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgUGFnaW5hdGlvbkNvbXBvbmVudCdzIGxpbmtzIChwYWdlcyBhbmQgbmF2aWdhdGlvbiBidXR0b25zKVxyXG4gKlxyXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQW5jaG9yIHtcclxuICAvKipcclxuICAgKiBpbm5lckhUTUwgb3IgcGxhaW4gdGV4dCBmb3IgdGhlIGxhYmVsXHJcbiAgICovXHJcbiAgdGV4dD86IHN0cmluZztcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICAqL1xyXG4gIHBheWxvYWQ6IGFueTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgUGFnaW5hdGlvbkNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBsaW5rcyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBmaXJzdCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwcmV2IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IG5leHQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgbGFzdCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFnaW5hdGlvbkRhdGEge1xyXG4gIC8qKlxyXG4gICAqIGlubmVySHRtbCBmb3IgdGhlIFwiZmlyc3RcIiBsYWJlbFxyXG4gICAqL1xyXG4gIGZpcnN0PzogSUFuY2hvcjtcclxuICAvKipcclxuICAgKiBpbm5lckh0bWwgZm9yIHRoZSBcInByZXZcIiBsYWJlbFxyXG4gICAqL1xyXG4gIHByZXY/OiBJQW5jaG9yO1xyXG4gIC8qKlxyXG4gICAqIGlubmVySHRtbCBmb3IgdGhlIFwibmV4dFwiIGxhYmVsXHJcbiAgICovXHJcbiAgbmV4dD86IElBbmNob3I7XHJcbiAgLyoqXHJcbiAgICogaW5uZXJIdG1sIGZvciB0aGUgXCJsYXN0XCIgbGFiZWxcclxuICAgKi9cclxuICBsYXN0PzogSUFuY2hvcjtcclxuICAvKipcclxuICAgKiBhcnJheSBvZiBcInBhZ2VzXCIgbGFiZWwgKGFzIHRleHQpXHJcbiAgICovXHJcbiAgbGlua3M6IElBbmNob3JbXTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICAqL1xyXG4gIHBheWxvYWQ/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctcGFnaW5hdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2luYXRpb24uaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IElQYWdpbmF0aW9uRGF0YTtcclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZDogYW55KXtcclxuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIFxyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxufSJdfQ==