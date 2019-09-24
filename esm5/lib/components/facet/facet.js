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
 * \@property search (optional)
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
                    template: "<div *ngIf=\"data\" class=\"n7-facet\">\n    <!-- Checkboxes -->\n    <div class=\"n7-facet__check-wrapper\"*ngIf=\"data.checks\">\n        <div *ngFor=\"let check of data.checks; let i = index\" class=\"n7-facet__check {{check.classes || ''}}\">\n            <input type=\"checkbox\" \n                   class=\"n7-facet__check-input\" \n                   id=\"n7-facet-check-{{i}}\"\n                   (change)=\"onCheck(check.payload, $event)\">\n            <label class=\"n7-facet__check-label\" for=\"n7-facet-check-{{i}}\">\n                {{ check.label }}\n            </label>\n        </div>\n    </div>\n\n    <!-- Search bar -->\n    <div class=\"n7-facet__search-wrapper\" *ngIf=\"data.input\">\n        <label class=\"n7-facet__search-label\" for=\"n7-facet-search-input\">\n            {{ data.input.label }}\n        </label>\n        <div class=\"n7-facet__search-input-wrapper\">\n            <input type=\"text\" \n                class=\"n7-facet__search-input {{data.input.classes || ''}}\" \n                id=\"n7-facet-search-input\"\n                placeholder=\"{{data.input.placeholder || ''}}\" \n                (input)=\"onInputChange(data.input.payload, $event)\"\n                (keyup.enter)=\"onInputEnter(data.input.payload, $event)\">\n            <span class=\"n7-facet__search-icon {{data.input.icon || ''}}\"   \n                *ngIf=\"data.input.icon\"\n                (click)=\"onClick(data.input.payload)\">\n            </span>\n        </div>\n    </div>\n\n    <!-- Filters -->\n    <div *ngIf=\"data.filters\" class=\"n7-facet__filter-wrapper\">\n        <div *ngFor=\"let filter of data.filters\" \n             class=\"n7-facet__filter {{filter.classes || ''}}\"\n             (click)=\"onClick(filter.payload)\">\n            <span *ngIf=\"filter.icon\" class=\"n7-facet__filter-icon {{filter.icon}}\"></span>\n            <span class=\"n7-facet__filter-text\">{{ filter.text }}</span>\n            <span class=\"n7-facet__filter-counter\">{{ filter.counter }}</span>\n        </div>\n    </div>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZhY2V0L2ZhY2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0FBU2pELGdDQW1CQzs7Ozs7O0lBZkMsNEJBQXVCOzs7OztJQUl2QiwyQkFNQzs7Ozs7SUFJRCw2QkFBeUI7Ozs7Ozs7Ozs7QUFVM0IsaUNBYUM7Ozs7OztJQVRDLDRCQUFjOzs7OztJQUlkLDhCQUFjOzs7OztJQUlkLDhCQUFjOzs7Ozs7Ozs7Ozs7O0FBYWhCLGtDQXlCQzs7Ozs7O0lBckJDLDRCQUFjOzs7OztJQUlkLDRCQUFhOzs7OztJQUliLCtCQUFpQjs7Ozs7SUFJakIsK0JBQWM7Ozs7O0lBSWQsK0JBQWM7Ozs7O0lBSWQsNkJBQVk7O0FBR2Q7SUFBQTtJQWlDQSxDQUFDOzs7OztJQXpCQyxnQ0FBTzs7OztJQUFQLFVBQVEsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBRUQsZ0NBQU87Ozs7O0lBQVAsVUFBUSxPQUFPLEVBQUUsS0FBSztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPOztZQUVuQixNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7Ozs7SUFFRCxzQ0FBYTs7Ozs7SUFBYixVQUFjLE9BQU8sRUFBRSxLQUFLO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87O1lBRW5CLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7Ozs7SUFFRCxxQ0FBWTs7Ozs7SUFBWixVQUFhLE9BQU8sRUFBRSxLQUFLO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDOztnQkFoQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQiwwaEVBQTJCO2lCQUM1Qjs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUEyQlIscUJBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQTdCWSxjQUFjOzs7SUFDekIsOEJBQTBCOztJQUMxQiw4QkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRkFDRVQudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEZhY2V0Q29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgY2hlY2tzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBzZWFyY2ggKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGZpbHRlcnMgKG9wdGlvbmFsKSBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRmFjZXREYXRhIHtcbiAgLyoqXG4gICAqIGxpc3Qgb2YgY2hlY2tib3hlc1xuICAgKi9cbiAgY2hlY2tzPzogSUZhY2V0Q2hlY2tbXTtcbiAgLyoqXG4gICAqIHNlYXJjaCBiYXIgdG8gZmluZCBhIGZpbHRlclxuICAgKi9cbiAgaW5wdXQ/OiB7XG4gICAgbGFiZWw/OiBzdHJpbmc7XG4gICAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgICBpY29uPzogc3RyaW5nO1xuICAgIGNsYXNzZXM/OiBhbnk7XG4gICAgcGF5bG9hZD86IGFueTtcbiAgfVxuICAvKipcbiAgICogbGlzdCBvZiBmaWx0ZXJzXG4gICAqL1xuICBmaWx0ZXJzPzogSUZhY2V0RmlsdGVyW107XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBGYWNldENvbXBvbmVudCdzIFwiY2hlY2tcIlxuICpcbiAqIEBwcm9wZXJ0eSBsYWJlbCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUZhY2V0Q2hlY2sge1xuICAvKipcbiAgICogY2hlY2tib3ggbGFiZWxcbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBwYXlsb2FkIGZvciBvbkNsaWNrIGV2ZW50c1xuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgRmFjZXRDb21wb25lbnQncyBcImZpbHRlclwiXG4gKlxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNvdW50ZXIgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRmFjZXRGaWx0ZXIge1xuICAvKipcbiAgICogaWNvbiB0byByZW5kZXIgdGhlIGNoZWNrbWFya1xuICAgKi9cbiAgaWNvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIHRoZSBmaWx0ZXIncyByZW5kZXJlZCB0ZXh0XG4gICAqL1xuICB0ZXh0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aGUgbnVtYmVyIG9mIGl0ZW1zIGZvciBlYWNoIGZpbHRlclxuICAgKi9cbiAgY291bnRlcj86IG51bWJlcjtcbiAgLyoqXG4gICAqIHBheWxvYWQgZm9yIG9uQ2xpY2sgZXZlbnRzXG4gICAqL1xuICBwYXlsb2FkPzogYW55O1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGRhdGEgdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1mYWNldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9mYWNldC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBGYWNldENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElGYWNldERhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG5cbiAgb25DaGVjayhwYXlsb2FkLCBldmVudCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICBsZXQgc3RhdHVzID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7IGlucHV0UGF5bG9hZDogcGF5bG9hZCwgaXNDaGVja2VkOiBzdGF0dXMgfSk7XG4gIH1cblxuICBvbklucHV0Q2hhbmdlKHBheWxvYWQsIGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICBcbiAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7IGlucHV0UGF5bG9hZDogcGF5bG9hZCwgdmFsdWUgfSk7XG4gIH1cblxuICBvbklucHV0RW50ZXIocGF5bG9hZCwgdmFsdWUpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuXG4gICAgdGhpcy5lbWl0KCdlbnRlcicsIHsgaW5wdXRQYXlsb2FkOiBwYXlsb2FkLCB2YWx1ZSB9KTtcbiAgfVxufSJdfQ==