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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztBQVVqRCw0QkFxQkM7Ozs7OztJQWpCQyxzQkFBYTs7Ozs7SUFJYix5QkFBaUI7Ozs7O0lBSWpCLHVCQUFZOzs7OztJQUlaLDBCQUFtQjs7Ozs7SUFJbkIsMEJBQW1COzs7Ozs7Ozs7OztBQVVyQiw0QkFjQzs7Ozs7O0lBVkMsc0JBQWM7Ozs7O0lBSWQseUJBQWlCOztJQUNqQix3QkFBZ0I7Ozs7O0lBSWhCLHVCQUFZOzs7Ozs7Ozs7Ozs7Ozs7QUFlZCxvQ0EwQ0M7Ozs7OztJQXRDQywrQkFBZTs7Ozs7SUFJZiw4QkFBYzs7Ozs7SUFJZCw4QkFBYzs7Ozs7SUFJZCw4QkFBYzs7Ozs7SUFJZCwrQkFBZ0I7Ozs7O0lBSWhCLGdDQUtFOzs7OztJQUlGLGlDQUFpQjs7Ozs7SUFJakIsaUNBQWM7Ozs7O0lBSWQsK0JBQVk7O0FBR2Q7SUFBQTtJQW9CQSxDQUFDOzs7OztJQVhDLHFDQUFPOzs7O0lBQVAsVUFBUSxPQUFZO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBRUQsc0NBQVE7Ozs7O0lBQVIsVUFBUyxPQUFZLEVBQUUsS0FBSztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLG9DQUFvQztRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7O2dCQW5CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLDh0R0FBZ0M7aUJBQ2pDOzs7dUJBRUUsS0FBSzt1QkFFTCxLQUFLOztJQWFSLDBCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FoQlksbUJBQW1COzs7SUFDOUIsbUNBQThCOztJQUU5QixtQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBQQUdJTkFUSU9OLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIFBhZ2luYXRpb25Db21wb25lbnQncyBvcHRpb25zIChwYWdlIHNpemUgc2VsZWN0IG9wdGlvbnMpXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBPcHRpb24ge1xyXG4gIC8qKlxyXG4gICAqIG9wdGlvbiB0ZXh0IHZhbHVlXHJcbiAgICovXHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxuICAvKipcclxuICAgKiByZW5kZXIgYXMgZGlzYWJsZWRcclxuICAgKi9cclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogZm9yY2Ugc2VsZWN0aW9uXHJcbiAgICovXHJcbiAgc2VsZWN0ZWQ/OiBib29sZWFuO1xyXG59XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIFBhZ2luYXRpb25Db21wb25lbnQncyBsaW5rcyAocGFnZXMgYW5kIG5hdmlnYXRpb24gYnV0dG9ucylcclxuICpcclxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgYW5jaG9yIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBCdXR0b24ge1xyXG4gIC8qKlxyXG4gICAqIGlubmVySFRNTCBvciBwbGFpbiB0ZXh0IGZvciB0aGUgbGFiZWxcclxuICAgKi9cclxuICB0ZXh0Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICBhbmNob3I/OiBBbmNob3I7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIFBhZ2luYXRpb25Db21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgbGlua3MgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgZmlyc3QgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcHJldiAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBuZXh0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGxhc3QgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFnaW5hdGlvbkRhdGEge1xyXG4gIC8qKlxyXG4gICAqIGlubmVySHRtbCBmb3IgdGhlIFwiZmlyc3RcIiBsYWJlbFxyXG4gICAqL1xyXG4gIGZpcnN0PzogQnV0dG9uO1xyXG4gIC8qKlxyXG4gICAqIGlubmVySHRtbCBmb3IgdGhlIFwicHJldlwiIGxhYmVsXHJcbiAgICovXHJcbiAgcHJldj86IEJ1dHRvbjtcclxuICAvKipcclxuICAgKiBpbm5lckh0bWwgZm9yIHRoZSBcIm5leHRcIiBsYWJlbFxyXG4gICAqL1xyXG4gIG5leHQ/OiBCdXR0b247XHJcbiAgLyoqXHJcbiAgICogaW5uZXJIdG1sIGZvciB0aGUgXCJsYXN0XCIgbGFiZWxcclxuICAgKi9cclxuICBsYXN0PzogQnV0dG9uO1xyXG4gIC8qKlxyXG4gICAqIGFycmF5IG9mIFwicGFnZXNcIiBsYWJlbCAoYXMgdGV4dClcclxuICAgKi9cclxuICBsaW5rczogQnV0dG9uW107XHJcbiAgLyoqXHJcbiAgICogcGFnZSBzaXplIHNlbGVjdFxyXG4gICAqL1xyXG4gIHNlbGVjdD86IHtcclxuICAgIGxhYmVsPzogc3RyaW5nO1xyXG4gICAgb3B0aW9ucz86IE9wdGlvbltdO1xyXG4gICAgcGF5bG9hZD86IHN0cmluZztcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXHJcbiAgICovXHJcbiAgcGF5bG9hZD86IGFueTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1wYWdpbmF0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5hdGlvbi5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogUGFnaW5hdGlvbkRhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgb25DbGljayhwYXlsb2FkOiBhbnkpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UocGF5bG9hZDogYW55LCB2YWx1ZSkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIC8vIG5lZWRzIHRvIGFsc28gZW1pdCBzZWxlY3RlZCB2YWx1ZVxyXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7IGlucHV0UGF5bG9hZDogcGF5bG9hZCwgdmFsdWUgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==