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
export class FacetComponent {
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
     * @param {?} event
     * @return {?}
     */
    onCheck(payload, event) {
        if (!this.emit)
            return;
        /** @type {?} */
        let status = event.target.checked;
        this.emit('change', { inputPayload: payload, isChecked: status });
    }
    /**
     * @param {?} payload
     * @param {?} event
     * @return {?}
     */
    onInputChange(payload, event) {
        if (!this.emit)
            return;
        /** @type {?} */
        let value = event.target.value;
        this.emit('change', { inputPayload: payload, value });
    }
    /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    onInputEnter(payload, value) {
        if (!this.emit)
            return;
        this.emit('enter', { inputPayload: payload, value });
    }
}
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
if (false) {
    /** @type {?} */
    FacetComponent.prototype.data;
    /** @type {?} */
    FacetComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZhY2V0L2ZhY2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBZWpELGdDQW9CQzs7Ozs7O0lBaEJDLDRCQUF1Qjs7Ozs7SUFJdkIsMkJBT0M7Ozs7O0lBSUQsNkJBQXlCOzs7Ozs7Ozs7O0FBVTNCLGlDQWFDOzs7Ozs7SUFUQyw0QkFBYzs7Ozs7SUFJZCw4QkFBYzs7Ozs7SUFJZCw4QkFBYzs7Ozs7Ozs7Ozs7OztBQWFoQixrQ0F5QkM7Ozs7OztJQXJCQyw0QkFBYzs7Ozs7SUFJZCw0QkFBYTs7Ozs7SUFJYiwrQkFBaUI7Ozs7O0lBSWpCLCtCQUFjOzs7OztJQUlkLCtCQUFjOzs7OztJQUlkLDZCQUFZOztBQU9kLE1BQU0sT0FBTyxjQUFjOzs7OztJQUl6QixPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBRUQsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87O1lBRW5CLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU87UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7OztJQUVELGFBQWEsQ0FBQyxPQUFPLEVBQUUsS0FBSztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPOztZQUVuQixLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7OztJQUVELFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7OztZQWhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLHlyRUFBMkI7YUFDNUI7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETiw4QkFBMEI7O0lBQzFCLDhCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEZBQ0VULnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBGYWNldENvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBjaGVja3MgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaW5wdXQgKG9wdGlvbmFsKVxyXG4gKiAtIGxhYmVsIChvcHRpb25hbClcclxuICogLSBkaXNhYmxlZCAob3B0aW9uYWwpXHJcbiAqIC0gcGxhY2Vob2xkZXIgKHJlcXVpcmVkKVxyXG4gKiAtIGljb24gKG9wdGlvbmFsKVxyXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiAtIHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgZmlsdGVycyAob3B0aW9uYWwpIFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRmFjZXREYXRhIHtcclxuICAvKipcclxuICAgKiBsaXN0IG9mIGNoZWNrYm94ZXNcclxuICAgKi9cclxuICBjaGVja3M/OiBJRmFjZXRDaGVja1tdO1xyXG4gIC8qKlxyXG4gICAqIHNlYXJjaCBiYXIgdG8gZmluZCBhIGZpbHRlclxyXG4gICAqL1xyXG4gIGlucHV0Pzoge1xyXG4gICAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgICBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gICAgaWNvbj86IHN0cmluZztcclxuICAgIGNsYXNzZXM/OiBhbnk7XHJcbiAgICBwYXlsb2FkPzogYW55O1xyXG4gIH1cclxuICAvKipcclxuICAgKiBsaXN0IG9mIGZpbHRlcnNcclxuICAgKi9cclxuICBmaWx0ZXJzPzogSUZhY2V0RmlsdGVyW107XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEZhY2V0Q29tcG9uZW50J3MgXCJjaGVja1wiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBsYWJlbCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRmFjZXRDaGVjayB7XHJcbiAgLyoqXHJcbiAgICogY2hlY2tib3ggbGFiZWxcclxuICAgKi9cclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHBheWxvYWQgZm9yIG9uQ2xpY2sgZXZlbnRzXHJcbiAgICovXHJcbiAgcGF5bG9hZD86IGFueTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEZhY2V0Q29tcG9uZW50J3MgXCJmaWx0ZXJcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNvdW50ZXIgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZhY2V0RmlsdGVyIHtcclxuICAvKipcclxuICAgKiBpY29uIHRvIHJlbmRlciB0aGUgY2hlY2ttYXJrXHJcbiAgICovXHJcbiAgaWNvbj86IHN0cmluZztcclxuICAvKipcclxuICAgKiB0aGUgZmlsdGVyJ3MgcmVuZGVyZWQgdGV4dFxyXG4gICAqL1xyXG4gIHRleHQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiB0aGUgbnVtYmVyIG9mIGl0ZW1zIGZvciBlYWNoIGZpbHRlclxyXG4gICAqL1xyXG4gIGNvdW50ZXI/OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogcGF5bG9hZCBmb3Igb25DbGljayBldmVudHNcclxuICAgKi9cclxuICBwYXlsb2FkPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IGFueTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGRhdGEgdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1mYWNldCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ZhY2V0Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWNldENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogSUZhY2V0RGF0YTtcclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZCkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgfVxyXG5cclxuICBvbkNoZWNrKHBheWxvYWQsIGV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBzdGF0dXMgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcclxuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgeyBpbnB1dFBheWxvYWQ6IHBheWxvYWQsIGlzQ2hlY2tlZDogc3RhdHVzIH0pO1xyXG4gIH1cclxuXHJcbiAgb25JbnB1dENoYW5nZShwYXlsb2FkLCBldmVudCkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIFxyXG4gICAgbGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7IGlucHV0UGF5bG9hZDogcGF5bG9hZCwgdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBvbklucHV0RW50ZXIocGF5bG9hZCwgdmFsdWUpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5lbWl0KCdlbnRlcicsIHsgaW5wdXRQYXlsb2FkOiBwYXlsb2FkLCB2YWx1ZSB9KTtcclxuICB9XHJcbn0iXX0=