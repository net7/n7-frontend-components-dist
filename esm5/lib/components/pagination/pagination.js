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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0FBVWpELDZCQXFCQzs7Ozs7O0lBakJDLHVCQUFhOzs7OztJQUliLDBCQUFpQjs7Ozs7SUFJakIsd0JBQVk7Ozs7O0lBSVosMkJBQW1COzs7OztJQUluQiwyQkFBbUI7Ozs7Ozs7Ozs7O0FBVXJCLDZCQWNDOzs7Ozs7SUFWQyx1QkFBYzs7Ozs7SUFJZCwwQkFBaUI7O0lBQ2pCLHlCQUFpQjs7Ozs7SUFJakIsd0JBQVk7Ozs7Ozs7Ozs7Ozs7OztBQWVkLHFDQTBDQzs7Ozs7O0lBdENDLGdDQUFnQjs7Ozs7SUFJaEIsK0JBQWU7Ozs7O0lBSWYsK0JBQWU7Ozs7O0lBSWYsK0JBQWU7Ozs7O0lBSWYsZ0NBQWlCOzs7OztJQUlqQixpQ0FLQzs7Ozs7SUFJRCxrQ0FBaUI7Ozs7O0lBSWpCLGtDQUFjOzs7OztJQUlkLGdDQUFZOztBQUdkO0lBQUE7SUFrQkEsQ0FBQzs7Ozs7SUFWQyxxQ0FBTzs7OztJQUFQLFVBQVEsT0FBWTtRQUNsQixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUNELHNDQUFROzs7OztJQUFSLFVBQVMsT0FBWSxFQUFFLEtBQUs7UUFDMUIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN0QixvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQTtJQUN2RCxDQUFDOztnQkFqQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qiwwa0dBQWdDO2lCQUNqQzs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUFZUiwwQkFBQztDQUFBLEFBbEJELElBa0JDO1NBZFksbUJBQW1COzs7SUFDOUIsbUNBQStCOztJQUMvQixtQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUEFHSU5BVElPTi50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFBhZ2luYXRpb25Db21wb25lbnQncyBvcHRpb25zIChwYWdlIHNpemUgc2VsZWN0IG9wdGlvbnMpXG4gKlxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJT3B0aW9uIHtcbiAgLyoqXG4gICAqIG9wdGlvbiB0ZXh0IHZhbHVlXG4gICAqL1xuICB0ZXh0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG4gIC8qKlxuICAgKiByZW5kZXIgYXMgZGlzYWJsZWRcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIGZvcmNlIHNlbGVjdGlvblxuICAgKi9cbiAgc2VsZWN0ZWQ/OiBib29sZWFuO1xufVxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFBhZ2luYXRpb25Db21wb25lbnQncyBsaW5rcyAocGFnZXMgYW5kIG5hdmlnYXRpb24gYnV0dG9ucylcbiAqXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgYW5jaG9yIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUJ1dHRvbiB7XG4gIC8qKlxuICAgKiBpbm5lckhUTUwgb3IgcGxhaW4gdGV4dCBmb3IgdGhlIGxhYmVsXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIGFuY2hvcj86IElBbmNob3I7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgUGFnaW5hdGlvbkNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGxpbmtzIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBmaXJzdCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcHJldiAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgbmV4dCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgbGFzdCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElQYWdpbmF0aW9uRGF0YSB7XG4gIC8qKlxuICAgKiBpbm5lckh0bWwgZm9yIHRoZSBcImZpcnN0XCIgbGFiZWxcbiAgICovXG4gIGZpcnN0PzogSUJ1dHRvbjtcbiAgLyoqXG4gICAqIGlubmVySHRtbCBmb3IgdGhlIFwicHJldlwiIGxhYmVsXG4gICAqL1xuICBwcmV2PzogSUJ1dHRvbjtcbiAgLyoqXG4gICAqIGlubmVySHRtbCBmb3IgdGhlIFwibmV4dFwiIGxhYmVsXG4gICAqL1xuICBuZXh0PzogSUJ1dHRvbjtcbiAgLyoqXG4gICAqIGlubmVySHRtbCBmb3IgdGhlIFwibGFzdFwiIGxhYmVsXG4gICAqL1xuICBsYXN0PzogSUJ1dHRvbjtcbiAgLyoqXG4gICAqIGFycmF5IG9mIFwicGFnZXNcIiBsYWJlbCAoYXMgdGV4dClcbiAgICovXG4gIGxpbmtzOiBJQnV0dG9uW107XG4gIC8qKlxuICAgKiBwYWdlIHNpemUgc2VsZWN0XG4gICAqL1xuICBzZWxlY3Q/OiB7XG4gICAgbGFiZWw/OiBzdHJpbmc7XG4gICAgb3B0aW9ucz86IElPcHRpb25bXTtcbiAgICBwYXlsb2FkPzogc3RyaW5nO1xuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgfVxuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAqL1xuICBwYXlsb2FkPzogYW55O1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvXG4gICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdpbmF0aW9uLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJUGFnaW5hdGlvbkRhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNsaWNrKHBheWxvYWQ6IGFueSl7XG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIFxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxuICBvbkNoYW5nZShwYXlsb2FkOiBhbnksIHZhbHVlKXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG4gICAgLy8gbmVlZHMgdG8gYWxzbyBlbWl0IHNlbGVjdGVkIHZhbHVlXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7IGlucHV0UGF5bG9hZDogcGF5bG9hZCwgdmFsdWUgfSlcbiAgfVxufVxuIl19