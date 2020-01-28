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
                template: "<nav class=\"n7-pagination {{data.classes || ''}}\" \r\n     *ngIf=\"data\"\r\n     [ngClass]=\"{ 'has-results-select' : data.select }\">\r\n    <ul class=n7-pagination__items>\r\n\r\n        <li class=\"n7-pagination__first {{data.first.classes || ''}}\" *ngIf=\"data.first\">\r\n            <a class=\"n7-pagination__first-link {{ data.first.text ? 'has-text' : '' }}\" \r\n               (click)=\"onClick(data.first.payload)\">\r\n                <span class=\"n7-pagination__first-icon n7-icon-angle-double-left\"></span>\r\n                <span class=\"n7-pagination__first-label\" *ngIf=\"data.first.text\">\r\n                    {{ data.first.text }}\r\n                </span>\r\n            </a>\r\n        </li>\r\n        <li class=\"n7-pagination__prev {{data.prev.classes || ''}}\" *ngIf=\"data.prev\">\r\n            <a class=\"n7-pagination__prev-link {{ data.prev.text ? 'has-text' : '' }}\" \r\n               (click)=\"onClick(data.prev.payload)\">\r\n                <span class=\"n7-pagination__prev-icon n7-icon-angle-left\"></span>\r\n                <span class=\"n7-pagination__prev-label\" *ngIf=\"data.prev.text\">\r\n                    {{ data.prev.text }}\r\n                </span>\r\n            </a>\r\n        </li>\r\n\r\n        <li class=\"n7-pagination__page {{page.classes || ''}}\" *ngFor=\"let page of data.links\">\r\n            <a class=\"n7-pagination__page-link\" (click)=\"onClick(page.payload)\">{{ page.text }}</a>\r\n        </li>\r\n\r\n        <li class=\"n7-pagination__next {{data.next.classes || ''}}\" *ngIf=\"data.next\">\r\n            <a class=\"n7-pagination__next-link {{ data.next.text ? 'has-text' : '' }}\" \r\n               (click)=\"onClick(data.next.payload)\">\r\n                <span class=\"n7-pagination__next-label\" *ngIf=\"data.next.text\">\r\n                    {{ data.next.text }}\r\n                </span>\r\n                <span class=\"n7-pagination__next-icon n7-icon-angle-right\"></span>\r\n            </a>\r\n        </li>\r\n        <li class=\"n7-pagination__last {{data.last.classes || ''}}\" *ngIf=\"data.last\">\r\n            <a class=\"n7-pagination__last-link {{ data.last.text ? 'has-text' : '' }}\" \r\n               (click)=\"onClick(data.last.payload)\">\r\n                <span class=\"n7-pagination__last-label\" *ngIf=\"data.last.text\">\r\n                    {{ data.last.text }}\r\n                </span>\r\n                <span class=\"n7-pagination__last-icon  n7-icon-angle-double-right\"></span>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n    \r\n    <div class=\"n7-pagination__setting\"\r\n         *ngIf=\"data.select\">\r\n        <span class=\"n7-pagination__setting-label\"\r\n              *ngIf=\"data.select.label\">\r\n            {{data.select.label}}\r\n        </span>\r\n        <select *ngIf=\"data.select.options\" \r\n                name=\"n7-pagination__select-size\" \r\n                class=\"n7-pagination__setting-select\"\r\n                (change)=\"onChange(data.select.payload, $event.target.value)\"\r\n                [disabled]=\"data.select.disabled\">\r\n            <option *ngFor=\"let opt of data.select.options\"\r\n                    [disabled]=\"opt.disabled\"\r\n                    [selected]=\"opt.selected\">\r\n                {{opt.text}}\r\n            </option>\r\n        </select>\r\n    </div>\r\n</nav>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztBQVNqRCw2QkFxQkM7Ozs7OztJQWpCQyx1QkFBYTs7Ozs7SUFJYiwwQkFBaUI7Ozs7O0lBSWpCLHdCQUFZOzs7OztJQUlaLDJCQUFtQjs7Ozs7SUFJbkIsMkJBQW1COzs7Ozs7Ozs7OztBQVVyQiw2QkFpQkM7Ozs7OztJQWJDLHVCQUFjOzs7OztJQUlkLDBCQUFpQjs7Ozs7SUFJakIsMEJBQWE7Ozs7O0lBSWIsd0JBQVk7Ozs7Ozs7Ozs7Ozs7OztBQWVkLHFDQTBDQzs7Ozs7O0lBdENDLGdDQUFnQjs7Ozs7SUFJaEIsK0JBQWU7Ozs7O0lBSWYsK0JBQWU7Ozs7O0lBSWYsK0JBQWU7Ozs7O0lBSWYsZ0NBQWlCOzs7OztJQUlqQixpQ0FLQzs7Ozs7SUFJRCxrQ0FBaUI7Ozs7O0lBSWpCLGtDQUFjOzs7OztJQUlkLGdDQUFZOztBQU9kLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBSTlCLE9BQU8sQ0FBQyxPQUFZO1FBQ2xCLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBQ0QsUUFBUSxDQUFDLE9BQVksRUFBRSxLQUFLO1FBQzFCLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdEIsb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO0lBQ3ZELENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLG0wR0FBZ0M7YUFDakM7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETixtQ0FBK0I7O0lBQy9CLG1DQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFBBR0lOQVRJT04udHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIFBhZ2luYXRpb25Db21wb25lbnQncyBvcHRpb25zIChwYWdlIHNpemUgc2VsZWN0IG9wdGlvbnMpXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJT3B0aW9uIHtcclxuICAvKipcclxuICAgKiBvcHRpb24gdGV4dCB2YWx1ZVxyXG4gICAqL1xyXG4gIHRleHQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogcmVuZGVyIGFzIGRpc2FibGVkXHJcbiAgICovXHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIGZvcmNlIHNlbGVjdGlvblxyXG4gICAqL1xyXG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcclxufVxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBQYWdpbmF0aW9uQ29tcG9uZW50J3MgbGlua3MgKHBhZ2VzIGFuZCBuYXZpZ2F0aW9uIGJ1dHRvbnMpXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElBbmNob3Ige1xyXG4gIC8qKlxyXG4gICAqIGlubmVySFRNTCBvciBwbGFpbiB0ZXh0IGZvciB0aGUgbGFiZWxcclxuICAgKi9cclxuICB0ZXh0Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXHJcbiAgICovXHJcbiAgcGF5bG9hZDogYW55O1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xyXG4gICAqL1xyXG4gIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBQYWdpbmF0aW9uQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGxpbmtzIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGZpcnN0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHByZXYgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgbmV4dCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBsYXN0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYWdpbmF0aW9uRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogaW5uZXJIdG1sIGZvciB0aGUgXCJmaXJzdFwiIGxhYmVsXHJcbiAgICovXHJcbiAgZmlyc3Q/OiBJQW5jaG9yO1xyXG4gIC8qKlxyXG4gICAqIGlubmVySHRtbCBmb3IgdGhlIFwicHJldlwiIGxhYmVsXHJcbiAgICovXHJcbiAgcHJldj86IElBbmNob3I7XHJcbiAgLyoqXHJcbiAgICogaW5uZXJIdG1sIGZvciB0aGUgXCJuZXh0XCIgbGFiZWxcclxuICAgKi9cclxuICBuZXh0PzogSUFuY2hvcjtcclxuICAvKipcclxuICAgKiBpbm5lckh0bWwgZm9yIHRoZSBcImxhc3RcIiBsYWJlbFxyXG4gICAqL1xyXG4gIGxhc3Q/OiBJQW5jaG9yO1xyXG4gIC8qKlxyXG4gICAqIGFycmF5IG9mIFwicGFnZXNcIiBsYWJlbCAoYXMgdGV4dClcclxuICAgKi9cclxuICBsaW5rczogSUFuY2hvcltdO1xyXG4gIC8qKlxyXG4gICAqIHBhZ2Ugc2l6ZSBzZWxlY3RcclxuICAgKi9cclxuICBzZWxlY3Q/OiB7XHJcbiAgICBsYWJlbD86IHN0cmluZztcclxuICAgIG9wdGlvbnM/OiBJT3B0aW9uW107XHJcbiAgICBwYXlsb2FkPzogc3RyaW5nO1xyXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICAqL1xyXG4gIHBheWxvYWQ/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctcGFnaW5hdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2luYXRpb24uaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IElQYWdpbmF0aW9uRGF0YTtcclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZDogYW55KXtcclxuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIFxyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxuICBvbkNoYW5nZShwYXlsb2FkOiBhbnksIHZhbHVlKXtcclxuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIC8vIG5lZWRzIHRvIGFsc28gZW1pdCBzZWxlY3RlZCB2YWx1ZVxyXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7IGlucHV0UGF5bG9hZDogcGF5bG9hZCwgdmFsdWUgfSlcclxuICB9XHJcbn1cclxuIl19