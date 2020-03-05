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
export function Option() { }
if (false) {
    /**
     * option text value
     * @type {?}
     */
    Option.prototype.text;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    Option.prototype.classes;
    /**
     * additional info
     * @type {?|undefined}
     */
    Option.prototype._meta;
    /**
     * render as disabled
     * @type {?|undefined}
     */
    Option.prototype.disabled;
    /**
     * force selection
     * @type {?|undefined}
     */
    Option.prototype.selected;
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
export function Button() { }
if (false) {
    /**
     * innerHTML or plain text for the label
     * @type {?|undefined}
     */
    Button.prototype.text;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    Button.prototype.classes;
    /** @type {?|undefined} */
    Button.prototype.anchor;
    /**
     * additional info
     * @type {?|undefined}
     */
    Button.prototype._meta;
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
export function PaginationData() { }
if (false) {
    /**
     * innerHtml for the "first" label
     * @type {?|undefined}
     */
    PaginationData.prototype.first;
    /**
     * innerHtml for the "prev" label
     * @type {?|undefined}
     */
    PaginationData.prototype.prev;
    /**
     * innerHtml for the "next" label
     * @type {?|undefined}
     */
    PaginationData.prototype.next;
    /**
     * innerHtml for the "last" label
     * @type {?|undefined}
     */
    PaginationData.prototype.last;
    /**
     * array of "pages" label (as text)
     * @type {?}
     */
    PaginationData.prototype.links;
    /**
     * page size select
     * @type {?|undefined}
     */
    PaginationData.prototype.select;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    PaginationData.prototype.classes;
    /**
     * action click's payload
     * @type {?|undefined}
     */
    PaginationData.prototype.payload;
    /**
     * additional info
     * @type {?|undefined}
     */
    PaginationData.prototype._meta;
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
                template: "<nav class=\"n7-pagination {{data.classes || ''}}\" \r\n     *ngIf=\"data\"\r\n     [ngClass]=\"{ 'has-results-select' : data.select }\">\r\n    <ul class=n7-pagination__items>\r\n\r\n        <li class=\"n7-pagination__first {{data.first.classes || ''}}\" *ngIf=\"data.first\">\r\n            <ng-container *ngTemplateOutlet=\"button; context: {\r\n                type: 'first',\r\n                data: data.first,\r\n                iconClass: 'n7-icon-angle-double-left'\r\n            }\"></ng-container>\r\n        </li>\r\n        <li class=\"n7-pagination__prev {{data.prev.classes || ''}}\" *ngIf=\"data.prev\">\r\n            <ng-container *ngTemplateOutlet=\"button; context: {\r\n                type: 'prev',\r\n                data: data.prev,\r\n                iconClass: 'n7-icon-angle-left'\r\n            }\"></ng-container>\r\n        </li>\r\n\r\n        <li class=\"n7-pagination__page {{page.classes || ''}}\" *ngFor=\"let page of data.links\">\r\n            <ng-container *ngTemplateOutlet=\"button; context: {\r\n                type: 'page',\r\n                data: page,\r\n                clicked: onClick\r\n            }\"></ng-container>\r\n        </li>\r\n\r\n        <li class=\"n7-pagination__next {{data.next.classes || ''}}\" *ngIf=\"data.next\">\r\n            <ng-container *ngTemplateOutlet=\"button; context: {\r\n                type: 'next',\r\n                data: data.next,\r\n                iconClass: 'n7-icon-angle-right'\r\n            }\"></ng-container>\r\n        </li>\r\n        <li class=\"n7-pagination__last {{data.last.classes || ''}}\" *ngIf=\"data.last\">\r\n            <ng-container *ngTemplateOutlet=\"button; context: {\r\n                type: 'last',\r\n                data: data.last,\r\n                iconClass: 'n7-icon-angle-double-right'\r\n            }\"></ng-container>\r\n        </li>\r\n    </ul>\r\n    \r\n    <div class=\"n7-pagination__setting\"\r\n         *ngIf=\"data.select\">\r\n        <span class=\"n7-pagination__setting-label\"\r\n              *ngIf=\"data.select.label\">\r\n            {{data.select.label}}\r\n        </span>\r\n        <select *ngIf=\"data.select.options\" \r\n                name=\"n7-pagination__select-size\" \r\n                class=\"n7-pagination__setting-select\"\r\n                (change)=\"onChange(data.select.payload, $event.target.value)\"\r\n                [disabled]=\"data.select.disabled\">\r\n            <option *ngFor=\"let opt of data.select.options\"\r\n                    [disabled]=\"opt.disabled\"\r\n                    [selected]=\"opt.selected\">\r\n                {{opt.text}}\r\n            </option>\r\n        </select>\r\n    </div>\r\n</nav>\r\n\r\n<ng-template #button let-type=\"type\" let-data=\"data\" let-clicked=\"clicked\" let-iconClass=\"iconClass\">\r\n    <n7-anchor-wrapper \r\n    [classes]=\"'n7-pagination__' + type + '-link' + (data.text ? ' has-text' : '')\" \r\n    [data]=\"data.anchor\" \r\n    (clicked)=\"onClick($event)\">\r\n        <span class=\"n7-pagination__{{ type }}-label\" *ngIf=\"data.text\">\r\n            {{ data.text }}\r\n        </span>\r\n        <span *ngIf=\"iconClass\" class=\"n7-pagination__{{ type }}-icon {{ iconClass }}\"></span>\r\n    </n7-anchor-wrapper>\r\n</ng-template>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztBQVVqRCw0QkFxQkM7Ozs7OztJQWpCQyxzQkFBYTs7Ozs7SUFJYix5QkFBaUI7Ozs7O0lBSWpCLHVCQUFZOzs7OztJQUlaLDBCQUFtQjs7Ozs7SUFJbkIsMEJBQW1COzs7Ozs7Ozs7OztBQVVyQiw0QkFjQzs7Ozs7O0lBVkMsc0JBQWM7Ozs7O0lBSWQseUJBQWlCOztJQUNqQix3QkFBZ0I7Ozs7O0lBSWhCLHVCQUFZOzs7Ozs7Ozs7Ozs7Ozs7QUFlZCxvQ0EwQ0M7Ozs7OztJQXRDQywrQkFBZTs7Ozs7SUFJZiw4QkFBYzs7Ozs7SUFJZCw4QkFBYzs7Ozs7SUFJZCw4QkFBYzs7Ozs7SUFJZCwrQkFBZ0I7Ozs7O0lBSWhCLGdDQUtFOzs7OztJQUlGLGlDQUFpQjs7Ozs7SUFJakIsaUNBQWM7Ozs7O0lBSWQsK0JBQVk7O0FBT2QsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFLOUIsT0FBTyxDQUFDLE9BQVk7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsT0FBWSxFQUFFLEtBQUs7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsOHRHQUFnQzthQUNqQzs7O21CQUVFLEtBQUs7bUJBRUwsS0FBSzs7OztJQUZOLG1DQUE4Qjs7SUFFOUIsbUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gUEFHSU5BVElPTi50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBQYWdpbmF0aW9uQ29tcG9uZW50J3Mgb3B0aW9ucyAocGFnZSBzaXplIHNlbGVjdCBvcHRpb25zKVxyXG4gKlxyXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9uIHtcclxuICAvKipcclxuICAgKiBvcHRpb24gdGV4dCB2YWx1ZVxyXG4gICAqL1xyXG4gIHRleHQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogcmVuZGVyIGFzIGRpc2FibGVkXHJcbiAgICovXHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIGZvcmNlIHNlbGVjdGlvblxyXG4gICAqL1xyXG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcclxufVxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBQYWdpbmF0aW9uQ29tcG9uZW50J3MgbGlua3MgKHBhZ2VzIGFuZCBuYXZpZ2F0aW9uIGJ1dHRvbnMpXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGFuY2hvciAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uIHtcclxuICAvKipcclxuICAgKiBpbm5lckhUTUwgb3IgcGxhaW4gdGV4dCBmb3IgdGhlIGxhYmVsXHJcbiAgICovXHJcbiAgdGV4dD86IHN0cmluZztcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgYW5jaG9yPzogQW5jaG9yO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xyXG4gICAqL1xyXG4gIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBQYWdpbmF0aW9uQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGxpbmtzIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGZpcnN0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHByZXYgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgbmV4dCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBsYXN0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2luYXRpb25EYXRhIHtcclxuICAvKipcclxuICAgKiBpbm5lckh0bWwgZm9yIHRoZSBcImZpcnN0XCIgbGFiZWxcclxuICAgKi9cclxuICBmaXJzdD86IEJ1dHRvbjtcclxuICAvKipcclxuICAgKiBpbm5lckh0bWwgZm9yIHRoZSBcInByZXZcIiBsYWJlbFxyXG4gICAqL1xyXG4gIHByZXY/OiBCdXR0b247XHJcbiAgLyoqXHJcbiAgICogaW5uZXJIdG1sIGZvciB0aGUgXCJuZXh0XCIgbGFiZWxcclxuICAgKi9cclxuICBuZXh0PzogQnV0dG9uO1xyXG4gIC8qKlxyXG4gICAqIGlubmVySHRtbCBmb3IgdGhlIFwibGFzdFwiIGxhYmVsXHJcbiAgICovXHJcbiAgbGFzdD86IEJ1dHRvbjtcclxuICAvKipcclxuICAgKiBhcnJheSBvZiBcInBhZ2VzXCIgbGFiZWwgKGFzIHRleHQpXHJcbiAgICovXHJcbiAgbGlua3M6IEJ1dHRvbltdO1xyXG4gIC8qKlxyXG4gICAqIHBhZ2Ugc2l6ZSBzZWxlY3RcclxuICAgKi9cclxuICBzZWxlY3Q/OiB7XHJcbiAgICBsYWJlbD86IHN0cmluZztcclxuICAgIG9wdGlvbnM/OiBPcHRpb25bXTtcclxuICAgIHBheWxvYWQ/OiBzdHJpbmc7XHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgfTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICAqL1xyXG4gIHBheWxvYWQ/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctcGFnaW5hdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2luYXRpb24uaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IFBhZ2luYXRpb25EYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZDogYW55KSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKHBheWxvYWQ6IGFueSwgdmFsdWUpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICAvLyBuZWVkcyB0byBhbHNvIGVtaXQgc2VsZWN0ZWQgdmFsdWVcclxuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgeyBpbnB1dFBheWxvYWQ6IHBheWxvYWQsIHZhbHVlIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=