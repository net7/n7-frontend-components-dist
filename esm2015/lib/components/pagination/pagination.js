/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
}
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
export class PaginationComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    onChange(payload, value) {
        if (!this.emit)
            return;
        // needs to also emit selected value
        this.emit('change ', { payload: payload, value: value });
    }
}
PaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-pagination',
                template: "<nav class=\"n7-pagination {{data.classes || ''}}\" \n     *ngIf=\"data\"\n     [ngClass]=\"{ 'has-results-select' : data.select }\">\n    <ul class=n7-pagination__items>\n\n        <li class=\"n7-pagination__first {{data.first.classes || ''}}\" *ngIf=\"data.first\">\n            <a class=\"n7-pagination__first-link {{ data.first.text ? 'has-text' : '' }}\" \n               (click)=\"onClick(data.first.payload)\">\n                <span class=\"n7-pagination__first-icon n7-icon-angle-double-left\"></span>\n                <span class=\"n7-pagination__first-label\" *ngIf=\"data.first.text\">\n                    {{ data.first.text }}\n                </span>\n            </a>\n        </li>\n        <li class=\"n7-pagination__prev {{data.prev.classes || ''}}\" *ngIf=\"data.prev\">\n            <a class=\"n7-pagination__prev-link {{ data.prev.text ? 'has-text' : '' }}\" \n               (click)=\"onClick(data.prev.payload)\">\n                <span class=\"n7-pagination__prev-icon n7-icon-angle-left\"></span>\n                <span class=\"n7-pagination__prev-label\" *ngIf=\"data.prev.text\">\n                    {{ data.prev.text }}\n                </span>\n            </a>\n        </li>\n\n        <li class=\"n7-pagination__page {{page.classes || ''}}\" *ngFor=\"let page of data.links\">\n            <a class=\"n7-pagination__page-link\" (click)=\"onClick(page.payload)\">{{ page.text }}</a>\n        </li>\n\n        <li class=\"n7-pagination__next {{data.next.classes || ''}}\" *ngIf=\"data.next\">\n            <a class=\"n7-pagination__next-link {{ data.next.text ? 'has-text' : '' }}\" \n               (click)=\"onClick(data.next.payload)\">\n                <span class=\"n7-pagination__next-label\" *ngIf=\"data.next.text\">\n                    {{ data.next.text }}\n                </span>\n                <span class=\"n7-pagination__next-icon n7-icon-angle-right\"></span>\n            </a>\n        </li>\n        <li class=\"n7-pagination__last {{data.last.classes || ''}}\" *ngIf=\"data.last\">\n            <a class=\"n7-pagination__last-link {{ data.last.text ? 'has-text' : '' }}\" \n               (click)=\"onClick(data.last.payload)\">\n                <span class=\"n7-pagination__last-label\" *ngIf=\"data.last.text\">\n                    {{ data.last.text }}\n                </span>\n                <span class=\"n7-pagination__last-icon  n7-icon-angle-double-right\"></span>\n            </a>\n        </li>\n    </ul>\n    \n    <div class=\"n7-pagination__setting\"\n         *ngIf=\"data.select\">\n        <span class=\"n7-pagination__setting-label\"\n              *ngIf=\"data.select.label\">\n            {{data.select.label}}\n        </span>\n        <select *ngIf=\"data.select.options\" \n                name=\"n7-pagination__select-size\" \n                class=\"n7-pagination__setting-select\"\n                (change)=\"onChange(data.select.payload, $event.target.value)\">\n            <option *ngFor=\"let opt of data.select.options\">\n                {{opt.text}}\n            </option>\n        </select>\n    </div>\n</nav>"
            }] }
];
PaginationComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    PaginationComponent.prototype.data;
    /** @type {?} */
    PaginationComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0FBU2pELDZCQWFDOzs7Ozs7SUFUQyx1QkFBYTs7Ozs7SUFJYiwwQkFBaUI7Ozs7O0lBSWpCLHdCQUFZOzs7Ozs7Ozs7OztBQVVkLDZCQWlCQzs7Ozs7O0lBYkMsdUJBQWM7Ozs7O0lBSWQsMEJBQWlCOzs7OztJQUlqQiwwQkFBYTs7Ozs7SUFJYix3QkFBWTs7Ozs7Ozs7Ozs7Ozs7O0FBZWQscUNBeUNDOzs7Ozs7SUFyQ0MsZ0NBQWdCOzs7OztJQUloQiwrQkFBZTs7Ozs7SUFJZiwrQkFBZTs7Ozs7SUFJZiwrQkFBZTs7Ozs7SUFJZixnQ0FBaUI7Ozs7O0lBSWpCLGlDQUlDOzs7OztJQUlELGtDQUFpQjs7Ozs7SUFJakIsa0NBQWM7Ozs7O0lBSWQsZ0NBQVk7O0FBT2QsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFJOUIsT0FBTyxDQUFDLE9BQVk7UUFDbEIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFDRCxRQUFRLENBQUMsT0FBWSxFQUFFLEtBQUs7UUFDMUIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN0QixvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFBO0lBQ3hELENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLHdpR0FBZ0M7YUFDakM7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETixtQ0FBK0I7O0lBQy9CLG1DQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBQQUdJTkFUSU9OLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBQYWdpbmF0aW9uQ29tcG9uZW50J3Mgb3B0aW9ucyAocGFnZSBzaXplIHNlbGVjdCBvcHRpb25zKVxuICpcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSU9wdGlvbiB7XG4gIC8qKlxuICAgKiBvcHRpb24gdGV4dCB2YWx1ZVxuICAgKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFBhZ2luYXRpb25Db21wb25lbnQncyBsaW5rcyAocGFnZXMgYW5kIG5hdmlnYXRpb24gYnV0dG9ucylcbiAqXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElBbmNob3Ige1xuICAvKipcbiAgICogaW5uZXJIVE1MIG9yIHBsYWluIHRleHQgZm9yIHRoZSBsYWJlbFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZDogYW55O1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvXG4gICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFBhZ2luYXRpb25Db21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBsaW5rcyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgZmlyc3QgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHByZXYgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IG5leHQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGxhc3QgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJUGFnaW5hdGlvbkRhdGEge1xuICAvKipcbiAgICogaW5uZXJIdG1sIGZvciB0aGUgXCJmaXJzdFwiIGxhYmVsXG4gICAqL1xuICBmaXJzdD86IElBbmNob3I7XG4gIC8qKlxuICAgKiBpbm5lckh0bWwgZm9yIHRoZSBcInByZXZcIiBsYWJlbFxuICAgKi9cbiAgcHJldj86IElBbmNob3I7XG4gIC8qKlxuICAgKiBpbm5lckh0bWwgZm9yIHRoZSBcIm5leHRcIiBsYWJlbFxuICAgKi9cbiAgbmV4dD86IElBbmNob3I7XG4gIC8qKlxuICAgKiBpbm5lckh0bWwgZm9yIHRoZSBcImxhc3RcIiBsYWJlbFxuICAgKi9cbiAgbGFzdD86IElBbmNob3I7XG4gIC8qKlxuICAgKiBhcnJheSBvZiBcInBhZ2VzXCIgbGFiZWwgKGFzIHRleHQpXG4gICAqL1xuICBsaW5rczogSUFuY2hvcltdO1xuICAvKipcbiAgICogcGFnZSBzaXplIHNlbGVjdFxuICAgKi9cbiAgc2VsZWN0Pzoge1xuICAgIGxhYmVsPzogc3RyaW5nO1xuICAgIG9wdGlvbnM/OiBJT3B0aW9uW107XG4gICAgcGF5bG9hZD86IHN0cmluZztcbiAgfVxuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAqL1xuICBwYXlsb2FkPzogYW55O1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvXG4gICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdpbmF0aW9uLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJUGFnaW5hdGlvbkRhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNsaWNrKHBheWxvYWQ6IGFueSl7XG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIFxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxuICBvbkNoYW5nZShwYXlsb2FkOiBhbnksIHZhbHVlKXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG4gICAgLy8gbmVlZHMgdG8gYWxzbyBlbWl0IHNlbGVjdGVkIHZhbHVlXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UgJywge3BheWxvYWQ6IHBheWxvYWQsIHZhbHVlOiB2YWx1ZX0pXG4gIH1cbn0iXX0=