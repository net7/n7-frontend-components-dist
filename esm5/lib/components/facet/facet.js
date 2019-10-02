/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// FACET.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for FacetComponent's "data"
 *
 * \@property checks (optional)
 * \@property input (optional)
 * - label (optional)
 * - disabled (optional)
 * - placeholder (required)
 * - icon (optional)
 * - classes (optional)
 * - payload (optional)
 * \@property filters (optional)
 * @record
 */
export function IFacetData() { }
if (false) {
    /**
     * list of checkboxes
     * @type {?|undefined}
     */
    IFacetData.prototype.checks;
    /**
     * search bar to find a filter
     * @type {?|undefined}
     */
    IFacetData.prototype.input;
    /**
     * list of filters
     * @type {?|undefined}
     */
    IFacetData.prototype.filters;
}
/**
 * Interface for FacetComponent's "check"
 *
 * \@property label (required)
 * \@property payload (optional)
 * \@property classes (optional)
 * @record
 */
export function IFacetCheck() { }
if (false) {
    /**
     * checkbox label
     * @type {?}
     */
    IFacetCheck.prototype.label;
    /**
     * payload for onClick events
     * @type {?|undefined}
     */
    IFacetCheck.prototype.payload;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    IFacetCheck.prototype.classes;
}
/**
 * Interface for FacetComponent's "filter"
 *
 * \@property icon (optional)
 * \@property text (required)
 * \@property counter (optional)
 * \@property payload (optional)
 * \@property classes (optional)
 * \@property _meta (optional)
 * @record
 */
export function IFacetFilter() { }
if (false) {
    /**
     * icon to render the checkmark
     * @type {?|undefined}
     */
    IFacetFilter.prototype.icon;
    /**
     * the filter's rendered text
     * @type {?}
     */
    IFacetFilter.prototype.text;
    /**
     * the number of items for each filter
     * @type {?|undefined}
     */
    IFacetFilter.prototype.counter;
    /**
     * payload for onClick events
     * @type {?|undefined}
     */
    IFacetFilter.prototype.payload;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    IFacetFilter.prototype.classes;
    /**
     * additional data useful for the component's logic
     * @type {?|undefined}
     */
    IFacetFilter.prototype._meta;
}
var FacetComponent = /** @class */ (function () {
    function FacetComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    FacetComponent.prototype.onClick = /**
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
     * @param {?} event
     * @return {?}
     */
    FacetComponent.prototype.onCheck = /**
     * @param {?} payload
     * @param {?} event
     * @return {?}
     */
    function (payload, event) {
        if (!this.emit)
            return;
        /** @type {?} */
        var status = event.target.checked;
        this.emit('change', { inputPayload: payload, isChecked: status });
    };
    /**
     * @param {?} payload
     * @param {?} event
     * @return {?}
     */
    FacetComponent.prototype.onInputChange = /**
     * @param {?} payload
     * @param {?} event
     * @return {?}
     */
    function (payload, event) {
        if (!this.emit)
            return;
        /** @type {?} */
        var value = event.target.value;
        this.emit('change', { inputPayload: payload, value: value });
    };
    /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    FacetComponent.prototype.onInputEnter = /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    function (payload, value) {
        if (!this.emit)
            return;
        this.emit('enter', { inputPayload: payload, value: value });
    };
    FacetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-facet',
                    template: "<div *ngIf=\"data\" class=\"n7-facet\">\r\n    <!-- Checkboxes -->\r\n    <div class=\"n7-facet__check-wrapper\"*ngIf=\"data.checks\">\r\n        <div *ngFor=\"let check of data.checks; let i = index\" class=\"n7-facet__check {{check.classes || ''}}\">\r\n            <input type=\"checkbox\" \r\n                   class=\"n7-facet__check-input\" \r\n                   id=\"n7-facet-check-{{i}}\"\r\n                   (change)=\"onCheck(check.payload, $event)\">\r\n            <label class=\"n7-facet__check-label\" for=\"n7-facet-check-{{i}}\">\r\n                {{ check.label }}\r\n            </label>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Search bar -->\r\n    <div class=\"n7-facet__search-wrapper\" *ngIf=\"data.input\">\r\n        <label class=\"n7-facet__search-label\" for=\"n7-facet-search-input\">\r\n            {{ data.input.label }}\r\n        </label>\r\n        <div class=\"n7-facet__search-input-wrapper\">\r\n            <input type=\"text\"\r\n                   [disabled] = \"data.input.disabled\"\r\n                   class=\"n7-facet__search-input {{data.input.classes || ''}}\" \r\n                   id=\"n7-facet-search-input\"\r\n                   placeholder=\"{{data.input.placeholder || ''}}\" \r\n                   (input)=\"onInputChange(data.input.payload, $event)\"\r\n                   (keyup.enter)=\"onInputEnter(data.input.payload, $event)\">\r\n            <span class=\"n7-facet__search-icon {{data.input.icon || ''}}\"   \r\n                *ngIf=\"data.input.icon\"\r\n                (click)=\"onClick(data.input.payload)\">\r\n            </span>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Filters -->\r\n    <div *ngIf=\"data.filters\" class=\"n7-facet__filter-wrapper\">\r\n        <div *ngFor=\"let filter of data.filters\" \r\n             class=\"n7-facet__filter {{filter.classes || ''}}\"\r\n             (click)=\"onClick(filter.payload)\">\r\n            <span *ngIf=\"filter.icon\" class=\"n7-facet__filter-icon {{filter.icon}}\"></span>\r\n            <span class=\"n7-facet__filter-text\">{{ filter.text }}</span>\r\n            <span class=\"n7-facet__filter-counter\">{{ filter.counter }}</span>\r\n        </div>\r\n    </div>\r\n</div>"
                }] }
    ];
    FacetComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return FacetComponent;
}());
export { FacetComponent };
if (false) {
    /** @type {?} */
    FacetComponent.prototype.data;
    /** @type {?} */
    FacetComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZhY2V0L2ZhY2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBZWpELGdDQW9CQzs7Ozs7O0lBaEJDLDRCQUF1Qjs7Ozs7SUFJdkIsMkJBT0M7Ozs7O0lBSUQsNkJBQXlCOzs7Ozs7Ozs7O0FBVTNCLGlDQWFDOzs7Ozs7SUFUQyw0QkFBYzs7Ozs7SUFJZCw4QkFBYzs7Ozs7SUFJZCw4QkFBYzs7Ozs7Ozs7Ozs7OztBQWFoQixrQ0F5QkM7Ozs7OztJQXJCQyw0QkFBYzs7Ozs7SUFJZCw0QkFBYTs7Ozs7SUFJYiwrQkFBaUI7Ozs7O0lBSWpCLCtCQUFjOzs7OztJQUlkLCtCQUFjOzs7OztJQUlkLDZCQUFZOztBQUdkO0lBQUE7SUFpQ0EsQ0FBQzs7Ozs7SUF6QkMsZ0NBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUVELGdDQUFPOzs7OztJQUFQLFVBQVEsT0FBTyxFQUFFLEtBQUs7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTzs7WUFFbkIsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7Ozs7O0lBRUQsc0NBQWE7Ozs7O0lBQWIsVUFBYyxPQUFPLEVBQUUsS0FBSztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPOztZQUVuQixLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7O0lBRUQscUNBQVk7Ozs7O0lBQVosVUFBYSxPQUFPLEVBQUUsS0FBSztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Z0JBaENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIseXJFQUEyQjtpQkFDNUI7Ozt1QkFFRSxLQUFLO3VCQUNMLEtBQUs7O0lBMkJSLHFCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0E3QlksY0FBYzs7O0lBQ3pCLDhCQUEwQjs7SUFDMUIsOEJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRkFDRVQudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEZhY2V0Q29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGNoZWNrcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpbnB1dCAob3B0aW9uYWwpXHJcbiAqIC0gbGFiZWwgKG9wdGlvbmFsKVxyXG4gKiAtIGRpc2FibGVkIChvcHRpb25hbClcclxuICogLSBwbGFjZWhvbGRlciAocmVxdWlyZWQpXHJcbiAqIC0gaWNvbiAob3B0aW9uYWwpXHJcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIC0gcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBmaWx0ZXJzIChvcHRpb25hbCkgXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElGYWNldERhdGEge1xyXG4gIC8qKlxyXG4gICAqIGxpc3Qgb2YgY2hlY2tib3hlc1xyXG4gICAqL1xyXG4gIGNoZWNrcz86IElGYWNldENoZWNrW107XHJcbiAgLyoqXHJcbiAgICogc2VhcmNoIGJhciB0byBmaW5kIGEgZmlsdGVyXHJcbiAgICovXHJcbiAgaW5wdXQ/OiB7XHJcbiAgICBsYWJlbD86IHN0cmluZztcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICAgIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgICBpY29uPzogc3RyaW5nO1xyXG4gICAgY2xhc3Nlcz86IGFueTtcclxuICAgIHBheWxvYWQ/OiBhbnk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIGxpc3Qgb2YgZmlsdGVyc1xyXG4gICAqL1xyXG4gIGZpbHRlcnM/OiBJRmFjZXRGaWx0ZXJbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgRmFjZXRDb21wb25lbnQncyBcImNoZWNrXCJcclxuICpcclxuICogQHByb3BlcnR5IGxhYmVsIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElGYWNldENoZWNrIHtcclxuICAvKipcclxuICAgKiBjaGVja2JveCBsYWJlbFxyXG4gICAqL1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogcGF5bG9hZCBmb3Igb25DbGljayBldmVudHNcclxuICAgKi9cclxuICBwYXlsb2FkPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgRmFjZXRDb21wb25lbnQncyBcImZpbHRlclwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY291bnRlciAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRmFjZXRGaWx0ZXIge1xyXG4gIC8qKlxyXG4gICAqIGljb24gdG8gcmVuZGVyIHRoZSBjaGVja21hcmtcclxuICAgKi9cclxuICBpY29uPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHRoZSBmaWx0ZXIncyByZW5kZXJlZCB0ZXh0XHJcbiAgICovXHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHRoZSBudW1iZXIgb2YgaXRlbXMgZm9yIGVhY2ggZmlsdGVyXHJcbiAgICovXHJcbiAgY291bnRlcj86IG51bWJlcjtcclxuICAvKipcclxuICAgKiBwYXlsb2FkIGZvciBvbkNsaWNrIGV2ZW50c1xyXG4gICAqL1xyXG4gIHBheWxvYWQ/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgZGF0YSB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xyXG4gICAqL1xyXG4gIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWZhY2V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmFjZXQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhY2V0Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBJRmFjZXREYXRhO1xyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgb25DbGljayhwYXlsb2FkKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIG9uQ2hlY2socGF5bG9hZCwgZXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcblxyXG4gICAgbGV0IHN0YXR1cyA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xyXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7IGlucHV0UGF5bG9hZDogcGF5bG9hZCwgaXNDaGVja2VkOiBzdGF0dXMgfSk7XHJcbiAgfVxyXG5cclxuICBvbklucHV0Q2hhbmdlKHBheWxvYWQsIGV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgaW5wdXRQYXlsb2FkOiBwYXlsb2FkLCB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIG9uSW5wdXRFbnRlcihwYXlsb2FkLCB2YWx1ZSkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2VudGVyJywgeyBpbnB1dFBheWxvYWQ6IHBheWxvYWQsIHZhbHVlIH0pO1xyXG4gIH1cclxufSJdfQ==