/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/pagination/pagination.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// PAGINATION.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for PaginationComponent's options (page size select options)
 *
 * \@property text (required)
 * \@property classes (optional)
 * \@property _meta (optional)
 * @record
 */
export function IOption() { }
if (false) {
    /**
     * option text value
     * @type {?}
     */
    IOption.prototype.text;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    IOption.prototype.classes;
    /**
     * additional info
     * @type {?|undefined}
     */
    IOption.prototype._meta;
    /**
     * render as disabled
     * @type {?|undefined}
     */
    IOption.prototype.disabled;
    /**
     * force selection
     * @type {?|undefined}
     */
    IOption.prototype.selected;
}
/**
 * Interface for PaginationComponent's links (pages and navigation buttons)
 *
 * \@property text (required)
 * \@property anchor (optional)
 * \@property classes (optional)
 * \@property _meta (optional)
 * @record
 */
export function IButton() { }
if (false) {
    /**
     * innerHTML or plain text for the label
     * @type {?|undefined}
     */
    IButton.prototype.text;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    IButton.prototype.classes;
    /** @type {?|undefined} */
    IButton.prototype.anchor;
    /**
     * additional info
     * @type {?|undefined}
     */
    IButton.prototype._meta;
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
     * page size select
     * @type {?|undefined}
     */
    IPaginationData.prototype.select;
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
    /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    PaginationComponent.prototype.onChange = /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    function (payload, value) {
        if (!this.emit)
            return;
        // needs to also emit selected value
        this.emit('change', { inputPayload: payload, value: value });
    };
    PaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-pagination',
                    template: "<nav class=\"n7-pagination {{data.classes || ''}}\" \r\n     *ngIf=\"data\"\r\n     [ngClass]=\"{ 'has-results-select' : data.select }\">\r\n    <ul class=n7-pagination__items>\r\n\r\n        <li class=\"n7-pagination__first {{data.first.classes || ''}}\" *ngIf=\"data.first\">\r\n            <ng-container *ngTemplateOutlet=\"button; context: {\r\n                type: 'first',\r\n                data: data.first,\r\n                iconClass: 'n7-icon-angle-double-left'\r\n            }\"></ng-container>\r\n        </li>\r\n        <li class=\"n7-pagination__prev {{data.prev.classes || ''}}\" *ngIf=\"data.prev\">\r\n            <ng-container *ngTemplateOutlet=\"button; context: {\r\n                type: 'prev',\r\n                data: data.prev,\r\n                iconClass: 'n7-icon-angle-left'\r\n            }\"></ng-container>\r\n        </li>\r\n\r\n        <li class=\"n7-pagination__page {{page.classes || ''}}\" *ngFor=\"let page of data.links\">\r\n            <ng-container *ngTemplateOutlet=\"button; context: {\r\n                type: 'page',\r\n                data: page,\r\n                clicked: onClick\r\n            }\"></ng-container>\r\n        </li>\r\n\r\n        <li class=\"n7-pagination__next {{data.next.classes || ''}}\" *ngIf=\"data.next\">\r\n            <ng-container *ngTemplateOutlet=\"button; context: {\r\n                type: 'next',\r\n                data: data.next,\r\n                iconClass: 'n7-icon-angle-right'\r\n            }\"></ng-container>\r\n        </li>\r\n        <li class=\"n7-pagination__last {{data.last.classes || ''}}\" *ngIf=\"data.last\">\r\n            <ng-container *ngTemplateOutlet=\"button; context: {\r\n                type: 'last',\r\n                data: data.last,\r\n                iconClass: 'n7-icon-angle-double-right'\r\n            }\"></ng-container>\r\n        </li>\r\n    </ul>\r\n    \r\n    <div class=\"n7-pagination__setting\"\r\n         *ngIf=\"data.select\">\r\n        <span class=\"n7-pagination__setting-label\"\r\n              *ngIf=\"data.select.label\">\r\n            {{data.select.label}}\r\n        </span>\r\n        <select *ngIf=\"data.select.options\" \r\n                name=\"n7-pagination__select-size\" \r\n                class=\"n7-pagination__setting-select\"\r\n                (change)=\"onChange(data.select.payload, $event.target.value)\"\r\n                [disabled]=\"data.select.disabled\">\r\n            <option *ngFor=\"let opt of data.select.options\"\r\n                    [disabled]=\"opt.disabled\"\r\n                    [selected]=\"opt.selected\">\r\n                {{opt.text}}\r\n            </option>\r\n        </select>\r\n    </div>\r\n</nav>\r\n\r\n<ng-template #button let-type=\"type\" let-data=\"data\" let-clicked=\"clicked\" let-iconClass=\"iconClass\">\r\n    <n7-anchor-wrapper \r\n    [classes]=\"'n7-pagination__' + type + '-link' + (data.text ? ' has-text' : '')\" \r\n    [data]=\"data.anchor\" \r\n    (clicked)=\"onClick($event)\">\r\n        <span class=\"n7-pagination__{{ type }}-label\" *ngIf=\"data.text\">\r\n            {{ data.text }}\r\n        </span>\r\n        <span *ngIf=\"iconClass\" class=\"n7-pagination__{{ type }}-icon {{ iconClass }}\"></span>\r\n    </n7-anchor-wrapper>\r\n</ng-template>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztBQVVqRCw2QkFxQkM7Ozs7OztJQWpCQyx1QkFBYTs7Ozs7SUFJYiwwQkFBaUI7Ozs7O0lBSWpCLHdCQUFZOzs7OztJQUlaLDJCQUFtQjs7Ozs7SUFJbkIsMkJBQW1COzs7Ozs7Ozs7OztBQVVyQiw2QkFjQzs7Ozs7O0lBVkMsdUJBQWM7Ozs7O0lBSWQsMEJBQWlCOztJQUNqQix5QkFBaUI7Ozs7O0lBSWpCLHdCQUFZOzs7Ozs7Ozs7Ozs7Ozs7QUFlZCxxQ0EwQ0M7Ozs7OztJQXRDQyxnQ0FBZ0I7Ozs7O0lBSWhCLCtCQUFlOzs7OztJQUlmLCtCQUFlOzs7OztJQUlmLCtCQUFlOzs7OztJQUlmLGdDQUFpQjs7Ozs7SUFJakIsaUNBS0M7Ozs7O0lBSUQsa0NBQWlCOzs7OztJQUlqQixrQ0FBYzs7Ozs7SUFJZCxnQ0FBWTs7QUFHZDtJQUFBO0lBa0JBLENBQUM7Ozs7O0lBVkMscUNBQU87Ozs7SUFBUCxVQUFRLE9BQVk7UUFDbEIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFDRCxzQ0FBUTs7Ozs7SUFBUixVQUFTLE9BQVksRUFBRSxLQUFLO1FBQzFCLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdEIsb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUE7SUFDdkQsQ0FBQzs7Z0JBakJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsOHRHQUFnQztpQkFDakM7Ozt1QkFFRSxLQUFLO3VCQUNMLEtBQUs7O0lBWVIsMEJBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWRZLG1CQUFtQjs7O0lBQzlCLG1DQUErQjs7SUFDL0IsbUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gUEFHSU5BVElPTi50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJQW5jaG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkLWludGVyZmFjZXMnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgUGFnaW5hdGlvbkNvbXBvbmVudCdzIG9wdGlvbnMgKHBhZ2Ugc2l6ZSBzZWxlY3Qgb3B0aW9ucylcclxuICpcclxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElPcHRpb24ge1xyXG4gIC8qKlxyXG4gICAqIG9wdGlvbiB0ZXh0IHZhbHVlXHJcbiAgICovXHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxuICAvKipcclxuICAgKiByZW5kZXIgYXMgZGlzYWJsZWRcclxuICAgKi9cclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogZm9yY2Ugc2VsZWN0aW9uXHJcbiAgICovXHJcbiAgc2VsZWN0ZWQ/OiBib29sZWFuO1xyXG59XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIFBhZ2luYXRpb25Db21wb25lbnQncyBsaW5rcyAocGFnZXMgYW5kIG5hdmlnYXRpb24gYnV0dG9ucylcclxuICpcclxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgYW5jaG9yIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQnV0dG9uIHtcclxuICAvKipcclxuICAgKiBpbm5lckhUTUwgb3IgcGxhaW4gdGV4dCBmb3IgdGhlIGxhYmVsXHJcbiAgICovXHJcbiAgdGV4dD86IHN0cmluZztcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgYW5jaG9yPzogSUFuY2hvcjtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgUGFnaW5hdGlvbkNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBsaW5rcyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBmaXJzdCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwcmV2IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IG5leHQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgbGFzdCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFnaW5hdGlvbkRhdGEge1xyXG4gIC8qKlxyXG4gICAqIGlubmVySHRtbCBmb3IgdGhlIFwiZmlyc3RcIiBsYWJlbFxyXG4gICAqL1xyXG4gIGZpcnN0PzogSUJ1dHRvbjtcclxuICAvKipcclxuICAgKiBpbm5lckh0bWwgZm9yIHRoZSBcInByZXZcIiBsYWJlbFxyXG4gICAqL1xyXG4gIHByZXY/OiBJQnV0dG9uO1xyXG4gIC8qKlxyXG4gICAqIGlubmVySHRtbCBmb3IgdGhlIFwibmV4dFwiIGxhYmVsXHJcbiAgICovXHJcbiAgbmV4dD86IElCdXR0b247XHJcbiAgLyoqXHJcbiAgICogaW5uZXJIdG1sIGZvciB0aGUgXCJsYXN0XCIgbGFiZWxcclxuICAgKi9cclxuICBsYXN0PzogSUJ1dHRvbjtcclxuICAvKipcclxuICAgKiBhcnJheSBvZiBcInBhZ2VzXCIgbGFiZWwgKGFzIHRleHQpXHJcbiAgICovXHJcbiAgbGlua3M6IElCdXR0b25bXTtcclxuICAvKipcclxuICAgKiBwYWdlIHNpemUgc2VsZWN0XHJcbiAgICovXHJcbiAgc2VsZWN0Pzoge1xyXG4gICAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgICBvcHRpb25zPzogSU9wdGlvbltdO1xyXG4gICAgcGF5bG9hZD86IHN0cmluZztcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcclxuICAgKi9cclxuICBwYXlsb2FkPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xyXG4gICAqL1xyXG4gIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LXBhZ2luYXRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdpbmF0aW9uLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBJUGFnaW5hdGlvbkRhdGE7XHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBvbkNsaWNrKHBheWxvYWQ6IGFueSl7XHJcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICBcclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcbiAgb25DaGFuZ2UocGF5bG9hZDogYW55LCB2YWx1ZSl7XHJcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICAvLyBuZWVkcyB0byBhbHNvIGVtaXQgc2VsZWN0ZWQgdmFsdWVcclxuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgeyBpbnB1dFBheWxvYWQ6IHBheWxvYWQsIHZhbHVlIH0pXHJcbiAgfVxyXG59XHJcbiJdfQ==