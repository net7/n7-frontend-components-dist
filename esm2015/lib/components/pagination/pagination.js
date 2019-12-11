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
        this.emit('change', { inputPayload: payload, value });
    }
}
PaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-pagination',
                template: "<nav class=\"n7-pagination {{data.classes || ''}}\" \n     *ngIf=\"data\"\n     [ngClass]=\"{ 'has-results-select' : data.select }\">\n    <ul class=n7-pagination__items>\n\n        <li class=\"n7-pagination__first {{data.first.classes || ''}}\" *ngIf=\"data.first\">\n            <a class=\"n7-pagination__first-link {{ data.first.text ? 'has-text' : '' }}\" \n               (click)=\"onClick(data.first.payload)\">\n                <span class=\"n7-pagination__first-icon n7-icon-angle-double-left\"></span>\n                <span class=\"n7-pagination__first-label\" *ngIf=\"data.first.text\">\n                    {{ data.first.text }}\n                </span>\n            </a>\n        </li>\n        <li class=\"n7-pagination__prev {{data.prev.classes || ''}}\" *ngIf=\"data.prev\">\n            <a class=\"n7-pagination__prev-link {{ data.prev.text ? 'has-text' : '' }}\" \n               (click)=\"onClick(data.prev.payload)\">\n                <span class=\"n7-pagination__prev-icon n7-icon-angle-left\"></span>\n                <span class=\"n7-pagination__prev-label\" *ngIf=\"data.prev.text\">\n                    {{ data.prev.text }}\n                </span>\n            </a>\n        </li>\n\n        <li class=\"n7-pagination__page {{page.classes || ''}}\" *ngFor=\"let page of data.links\">\n            <a class=\"n7-pagination__page-link\" (click)=\"onClick(page.payload)\">{{ page.text }}</a>\n        </li>\n\n        <li class=\"n7-pagination__next {{data.next.classes || ''}}\" *ngIf=\"data.next\">\n            <a class=\"n7-pagination__next-link {{ data.next.text ? 'has-text' : '' }}\" \n               (click)=\"onClick(data.next.payload)\">\n                <span class=\"n7-pagination__next-label\" *ngIf=\"data.next.text\">\n                    {{ data.next.text }}\n                </span>\n                <span class=\"n7-pagination__next-icon n7-icon-angle-right\"></span>\n            </a>\n        </li>\n        <li class=\"n7-pagination__last {{data.last.classes || ''}}\" *ngIf=\"data.last\">\n            <a class=\"n7-pagination__last-link {{ data.last.text ? 'has-text' : '' }}\" \n               (click)=\"onClick(data.last.payload)\">\n                <span class=\"n7-pagination__last-label\" *ngIf=\"data.last.text\">\n                    {{ data.last.text }}\n                </span>\n                <span class=\"n7-pagination__last-icon  n7-icon-angle-double-right\"></span>\n            </a>\n        </li>\n    </ul>\n    \n    <div class=\"n7-pagination__setting\"\n         *ngIf=\"data.select\">\n        <span class=\"n7-pagination__setting-label\"\n              *ngIf=\"data.select.label\">\n            {{data.select.label}}\n        </span>\n        <select *ngIf=\"data.select.options\" \n                name=\"n7-pagination__select-size\" \n                class=\"n7-pagination__setting-select\"\n                (change)=\"onChange(data.select.payload, $event.target.value)\"\n                [disabled]=\"data.select.disabled\">\n            <option *ngFor=\"let opt of data.select.options\"\n                    [disabled]=\"opt.disabled\"\n                    [selected]=\"opt.selected\">\n                {{opt.text}}\n            </option>\n        </select>\n    </div>\n</nav>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztBQVNqRCw2QkFxQkM7Ozs7OztJQWpCQyx1QkFBYTs7Ozs7SUFJYiwwQkFBaUI7Ozs7O0lBSWpCLHdCQUFZOzs7OztJQUlaLDJCQUFtQjs7Ozs7SUFJbkIsMkJBQW1COzs7Ozs7Ozs7OztBQVVyQiw2QkFpQkM7Ozs7OztJQWJDLHVCQUFjOzs7OztJQUlkLDBCQUFpQjs7Ozs7SUFJakIsMEJBQWE7Ozs7O0lBSWIsd0JBQVk7Ozs7Ozs7Ozs7Ozs7OztBQWVkLHFDQTBDQzs7Ozs7O0lBdENDLGdDQUFnQjs7Ozs7SUFJaEIsK0JBQWU7Ozs7O0lBSWYsK0JBQWU7Ozs7O0lBSWYsK0JBQWU7Ozs7O0lBSWYsZ0NBQWlCOzs7OztJQUlqQixpQ0FLQzs7Ozs7SUFJRCxrQ0FBaUI7Ozs7O0lBSWpCLGtDQUFjOzs7OztJQUlkLGdDQUFZOztBQU9kLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBSTlCLE9BQU8sQ0FBQyxPQUFZO1FBQ2xCLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBQ0QsUUFBUSxDQUFDLE9BQVksRUFBRSxLQUFLO1FBQzFCLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdEIsb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO0lBQ3ZELENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLCtyR0FBZ0M7YUFDakM7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETixtQ0FBK0I7O0lBQy9CLG1DQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBQQUdJTkFUSU9OLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBQYWdpbmF0aW9uQ29tcG9uZW50J3Mgb3B0aW9ucyAocGFnZSBzaXplIHNlbGVjdCBvcHRpb25zKVxuICpcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSU9wdGlvbiB7XG4gIC8qKlxuICAgKiBvcHRpb24gdGV4dCB2YWx1ZVxuICAgKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICovXG4gIF9tZXRhPzogYW55O1xuICAvKipcbiAgICogcmVuZGVyIGFzIGRpc2FibGVkXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBmb3JjZSBzZWxlY3Rpb25cbiAgICovXG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcbn1cbi8qKlxuICogSW50ZXJmYWNlIGZvciBQYWdpbmF0aW9uQ29tcG9uZW50J3MgbGlua3MgKHBhZ2VzIGFuZCBuYXZpZ2F0aW9uIGJ1dHRvbnMpXG4gKlxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHBheWxvYWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJQW5jaG9yIHtcbiAgLyoqXG4gICAqIGlubmVySFRNTCBvciBwbGFpbiB0ZXh0IGZvciB0aGUgbGFiZWxcbiAgICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgICovXG4gIHBheWxvYWQ6IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBQYWdpbmF0aW9uQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgbGlua3MgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGZpcnN0IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwcmV2IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBuZXh0IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBsYXN0IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVBhZ2luYXRpb25EYXRhIHtcbiAgLyoqXG4gICAqIGlubmVySHRtbCBmb3IgdGhlIFwiZmlyc3RcIiBsYWJlbFxuICAgKi9cbiAgZmlyc3Q/OiBJQW5jaG9yO1xuICAvKipcbiAgICogaW5uZXJIdG1sIGZvciB0aGUgXCJwcmV2XCIgbGFiZWxcbiAgICovXG4gIHByZXY/OiBJQW5jaG9yO1xuICAvKipcbiAgICogaW5uZXJIdG1sIGZvciB0aGUgXCJuZXh0XCIgbGFiZWxcbiAgICovXG4gIG5leHQ/OiBJQW5jaG9yO1xuICAvKipcbiAgICogaW5uZXJIdG1sIGZvciB0aGUgXCJsYXN0XCIgbGFiZWxcbiAgICovXG4gIGxhc3Q/OiBJQW5jaG9yO1xuICAvKipcbiAgICogYXJyYXkgb2YgXCJwYWdlc1wiIGxhYmVsIChhcyB0ZXh0KVxuICAgKi9cbiAgbGlua3M6IElBbmNob3JbXTtcbiAgLyoqXG4gICAqIHBhZ2Ugc2l6ZSBzZWxlY3RcbiAgICovXG4gIHNlbGVjdD86IHtcbiAgICBsYWJlbD86IHN0cmluZztcbiAgICBvcHRpb25zPzogSU9wdGlvbltdO1xuICAgIHBheWxvYWQ/OiBzdHJpbmc7XG4gICAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICB9XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgICovXG4gIHBheWxvYWQ/OiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2luYXRpb24uaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElQYWdpbmF0aW9uRGF0YTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2xpY2socGF5bG9hZDogYW55KXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG4gICAgXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG4gIG9uQ2hhbmdlKHBheWxvYWQ6IGFueSwgdmFsdWUpe1xuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICAvLyBuZWVkcyB0byBhbHNvIGVtaXQgc2VsZWN0ZWQgdmFsdWVcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgaW5wdXRQYXlsb2FkOiBwYXlsb2FkLCB2YWx1ZSB9KVxuICB9XG59XG4iXX0=