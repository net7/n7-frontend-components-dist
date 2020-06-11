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
                    template: "<nav class=\"n7-pagination {{data.classes || ''}}\" \n     *ngIf=\"data\"\n     [ngClass]=\"{ 'has-results-select' : data.select }\">\n    <ul class=n7-pagination__items>\n\n        <li class=\"n7-pagination__first {{data.first.classes || ''}}\" *ngIf=\"data.first\">\n            <ng-container *ngTemplateOutlet=\"button; context: {\n                type: 'first',\n                data: data.first,\n                iconClass: 'n7-icon-angle-double-left'\n            }\"></ng-container>\n        </li>\n        <li class=\"n7-pagination__prev {{data.prev.classes || ''}}\" *ngIf=\"data.prev\">\n            <ng-container *ngTemplateOutlet=\"button; context: {\n                type: 'prev',\n                data: data.prev,\n                iconClass: 'n7-icon-angle-left'\n            }\"></ng-container>\n        </li>\n\n        <li class=\"n7-pagination__page {{page.classes || ''}}\" *ngFor=\"let page of data.links\">\n            <ng-container *ngTemplateOutlet=\"button; context: {\n                type: 'page',\n                data: page,\n                clicked: onClick\n            }\"></ng-container>\n        </li>\n\n        <li class=\"n7-pagination__next {{data.next.classes || ''}}\" *ngIf=\"data.next\">\n            <ng-container *ngTemplateOutlet=\"button; context: {\n                type: 'next',\n                data: data.next,\n                iconClass: 'n7-icon-angle-right'\n            }\"></ng-container>\n        </li>\n        <li class=\"n7-pagination__last {{data.last.classes || ''}}\" *ngIf=\"data.last\">\n            <ng-container *ngTemplateOutlet=\"button; context: {\n                type: 'last',\n                data: data.last,\n                iconClass: 'n7-icon-angle-double-right'\n            }\"></ng-container>\n        </li>\n    </ul>\n    \n    <div class=\"n7-pagination__setting\"\n         *ngIf=\"data.select\">\n        <span class=\"n7-pagination__setting-label\"\n              *ngIf=\"data.select.label\">\n            {{data.select.label}}\n        </span>\n        <select *ngIf=\"data.select.options\" \n                name=\"n7-pagination__select-size\" \n                class=\"n7-pagination__setting-select\"\n                (change)=\"onChange(data.select.payload, $event.target.value)\"\n                [disabled]=\"data.select.disabled\">\n            <option *ngFor=\"let opt of data.select.options\"\n                    [disabled]=\"opt.disabled\"\n                    [selected]=\"opt.selected\">\n                {{opt.text}}\n            </option>\n        </select>\n    </div>\n</nav>\n\n<ng-template #button let-type=\"type\" let-data=\"data\" let-clicked=\"clicked\" let-iconClass=\"iconClass\">\n    <n7-anchor-wrapper \n    [classes]=\"'n7-pagination__' + type + '-link' + (data.text ? ' has-text' : '')\" \n    [data]=\"data.anchor\" \n    (clicked)=\"onClick($event)\">\n        <span class=\"n7-pagination__{{ type }}-label\" *ngIf=\"data.text\">\n            {{ data.text }}\n        </span>\n        <span *ngIf=\"iconClass\" class=\"n7-pagination__{{ type }}-icon {{ iconClass }}\"></span>\n    </n7-anchor-wrapper>\n</ng-template>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztBQVVqRCw0QkFxQkM7Ozs7OztJQWpCQyxzQkFBYTs7Ozs7SUFJYix5QkFBaUI7Ozs7O0lBSWpCLHVCQUFZOzs7OztJQUlaLDBCQUFtQjs7Ozs7SUFJbkIsMEJBQW1COzs7Ozs7Ozs7Ozs7Ozs7QUFlckIsb0NBMENDOzs7Ozs7SUF0Q0MsK0JBQWU7Ozs7O0lBSWYsOEJBQWM7Ozs7O0lBSWQsOEJBQWM7Ozs7O0lBSWQsOEJBQWM7Ozs7O0lBSWQsK0JBQWdCOzs7OztJQUloQixnQ0FLRTs7Ozs7SUFJRixpQ0FBaUI7Ozs7O0lBSWpCLGlDQUFjOzs7OztJQUlkLCtCQUFZOztBQUdkO0lBQUE7SUFvQkEsQ0FBQzs7Ozs7SUFYQyxxQ0FBTzs7OztJQUFQLFVBQVEsT0FBWTtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUVELHNDQUFROzs7OztJQUFSLFVBQVMsT0FBWSxFQUFFLEtBQUs7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDOztnQkFuQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qiwwa0dBQWdDO2lCQUNqQzs7O3VCQUVFLEtBQUs7dUJBRUwsS0FBSzs7SUFhUiwwQkFBQztDQUFBLEFBcEJELElBb0JDO1NBaEJZLG1CQUFtQjs7O0lBQzlCLG1DQUE4Qjs7SUFFOUIsbUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFBBR0lOQVRJT04udHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFBhZ2luYXRpb25Db21wb25lbnQncyBvcHRpb25zIChwYWdlIHNpemUgc2VsZWN0IG9wdGlvbnMpXG4gKlxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPcHRpb24ge1xuICAvKipcbiAgICogb3B0aW9uIHRleHQgdmFsdWVcbiAgICovXG4gIHRleHQ6IHN0cmluZztcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvXG4gICAqL1xuICBfbWV0YT86IGFueTtcbiAgLyoqXG4gICAqIHJlbmRlciBhcyBkaXNhYmxlZFxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICogZm9yY2Ugc2VsZWN0aW9uXG4gICAqL1xuICBzZWxlY3RlZD86IGJvb2xlYW47XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBQYWdpbmF0aW9uQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgbGlua3MgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGZpcnN0IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwcmV2IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBuZXh0IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBsYXN0IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGFnaW5hdGlvbkRhdGEge1xuICAvKipcbiAgICogaW5uZXJIdG1sIGZvciB0aGUgXCJmaXJzdFwiIGxhYmVsXG4gICAqL1xuICBmaXJzdD86IEJ1dHRvbjtcbiAgLyoqXG4gICAqIGlubmVySHRtbCBmb3IgdGhlIFwicHJldlwiIGxhYmVsXG4gICAqL1xuICBwcmV2PzogQnV0dG9uO1xuICAvKipcbiAgICogaW5uZXJIdG1sIGZvciB0aGUgXCJuZXh0XCIgbGFiZWxcbiAgICovXG4gIG5leHQ/OiBCdXR0b247XG4gIC8qKlxuICAgKiBpbm5lckh0bWwgZm9yIHRoZSBcImxhc3RcIiBsYWJlbFxuICAgKi9cbiAgbGFzdD86IEJ1dHRvbjtcbiAgLyoqXG4gICAqIGFycmF5IG9mIFwicGFnZXNcIiBsYWJlbCAoYXMgdGV4dClcbiAgICovXG4gIGxpbmtzOiBCdXR0b25bXTtcbiAgLyoqXG4gICAqIHBhZ2Ugc2l6ZSBzZWxlY3RcbiAgICovXG4gIHNlbGVjdD86IHtcbiAgICBsYWJlbD86IHN0cmluZztcbiAgICBvcHRpb25zPzogT3B0aW9uW107XG4gICAgcGF5bG9hZD86IHN0cmluZztcbiAgICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIH07XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgICovXG4gIHBheWxvYWQ/OiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2luYXRpb24uaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IFBhZ2luYXRpb25EYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNsaWNrKHBheWxvYWQ6IGFueSkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cblxuICBvbkNoYW5nZShwYXlsb2FkOiBhbnksIHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICAvLyBuZWVkcyB0byBhbHNvIGVtaXQgc2VsZWN0ZWQgdmFsdWVcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgaW5wdXRQYXlsb2FkOiBwYXlsb2FkLCB2YWx1ZSB9KTtcbiAgfVxufVxuIl19