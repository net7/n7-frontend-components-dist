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
        this.emit('change ', { payload: payload, value: value });
    };
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
    return PaginationComponent;
}());
export { PaginationComponent };
if (false) {
    /** @type {?} */
    PaginationComponent.prototype.data;
    /** @type {?} */
    PaginationComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0FBU2pELDZCQWFDOzs7Ozs7SUFUQyx1QkFBYTs7Ozs7SUFJYiwwQkFBaUI7Ozs7O0lBSWpCLHdCQUFZOzs7Ozs7Ozs7OztBQVVkLDZCQWlCQzs7Ozs7O0lBYkMsdUJBQWM7Ozs7O0lBSWQsMEJBQWlCOzs7OztJQUlqQiwwQkFBYTs7Ozs7SUFJYix3QkFBWTs7Ozs7Ozs7Ozs7Ozs7O0FBZWQscUNBeUNDOzs7Ozs7SUFyQ0MsZ0NBQWdCOzs7OztJQUloQiwrQkFBZTs7Ozs7SUFJZiwrQkFBZTs7Ozs7SUFJZiwrQkFBZTs7Ozs7SUFJZixnQ0FBaUI7Ozs7O0lBSWpCLGlDQUlDOzs7OztJQUlELGtDQUFpQjs7Ozs7SUFJakIsa0NBQWM7Ozs7O0lBSWQsZ0NBQVk7O0FBR2Q7SUFBQTtJQWtCQSxDQUFDOzs7OztJQVZDLHFDQUFPOzs7O0lBQVAsVUFBUSxPQUFZO1FBQ2xCLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBQ0Qsc0NBQVE7Ozs7O0lBQVIsVUFBUyxPQUFZLEVBQUUsS0FBSztRQUMxQixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3RCLG9DQUFvQztRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUE7SUFDeEQsQ0FBQzs7Z0JBakJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsd2lHQUFnQztpQkFDakM7Ozt1QkFFRSxLQUFLO3VCQUNMLEtBQUs7O0lBWVIsMEJBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWRZLG1CQUFtQjs7O0lBQzlCLG1DQUErQjs7SUFDL0IsbUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFBBR0lOQVRJT04udHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFBhZ2luYXRpb25Db21wb25lbnQncyBvcHRpb25zIChwYWdlIHNpemUgc2VsZWN0IG9wdGlvbnMpXG4gKlxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJT3B0aW9uIHtcbiAgLyoqXG4gICAqIG9wdGlvbiB0ZXh0IHZhbHVlXG4gICAqL1xuICB0ZXh0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG4vKipcbiAqIEludGVyZmFjZSBmb3IgUGFnaW5hdGlvbkNvbXBvbmVudCdzIGxpbmtzIChwYWdlcyBhbmQgbmF2aWdhdGlvbiBidXR0b25zKVxuICpcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUFuY2hvciB7XG4gIC8qKlxuICAgKiBpbm5lckhUTUwgb3IgcGxhaW4gdGV4dCBmb3IgdGhlIGxhYmVsXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAqL1xuICBwYXlsb2FkOiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgUGFnaW5hdGlvbkNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGxpbmtzIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBmaXJzdCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcHJldiAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgbmV4dCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgbGFzdCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElQYWdpbmF0aW9uRGF0YSB7XG4gIC8qKlxuICAgKiBpbm5lckh0bWwgZm9yIHRoZSBcImZpcnN0XCIgbGFiZWxcbiAgICovXG4gIGZpcnN0PzogSUFuY2hvcjtcbiAgLyoqXG4gICAqIGlubmVySHRtbCBmb3IgdGhlIFwicHJldlwiIGxhYmVsXG4gICAqL1xuICBwcmV2PzogSUFuY2hvcjtcbiAgLyoqXG4gICAqIGlubmVySHRtbCBmb3IgdGhlIFwibmV4dFwiIGxhYmVsXG4gICAqL1xuICBuZXh0PzogSUFuY2hvcjtcbiAgLyoqXG4gICAqIGlubmVySHRtbCBmb3IgdGhlIFwibGFzdFwiIGxhYmVsXG4gICAqL1xuICBsYXN0PzogSUFuY2hvcjtcbiAgLyoqXG4gICAqIGFycmF5IG9mIFwicGFnZXNcIiBsYWJlbCAoYXMgdGV4dClcbiAgICovXG4gIGxpbmtzOiBJQW5jaG9yW107XG4gIC8qKlxuICAgKiBwYWdlIHNpemUgc2VsZWN0XG4gICAqL1xuICBzZWxlY3Q/OiB7XG4gICAgbGFiZWw/OiBzdHJpbmc7XG4gICAgb3B0aW9ucz86IElPcHRpb25bXTtcbiAgICBwYXlsb2FkPzogc3RyaW5nO1xuICB9XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgICovXG4gIHBheWxvYWQ/OiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2luYXRpb24uaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElQYWdpbmF0aW9uRGF0YTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2xpY2socGF5bG9hZDogYW55KXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG4gICAgXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG4gIG9uQ2hhbmdlKHBheWxvYWQ6IGFueSwgdmFsdWUpe1xuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICAvLyBuZWVkcyB0byBhbHNvIGVtaXQgc2VsZWN0ZWQgdmFsdWVcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZSAnLCB7cGF5bG9hZDogcGF5bG9hZCwgdmFsdWU6IHZhbHVlfSlcbiAgfVxufSJdfQ==