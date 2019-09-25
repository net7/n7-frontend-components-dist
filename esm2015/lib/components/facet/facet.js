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
                template: "<div *ngIf=\"data\" class=\"n7-facet\">\n    <!-- Checkboxes -->\n    <div class=\"n7-facet__check-wrapper\"*ngIf=\"data.checks\">\n        <div *ngFor=\"let check of data.checks; let i = index\" class=\"n7-facet__check {{check.classes || ''}}\">\n            <input type=\"checkbox\" \n                   class=\"n7-facet__check-input\" \n                   id=\"n7-facet-check-{{i}}\"\n                   (change)=\"onCheck(check.payload, $event)\">\n            <label class=\"n7-facet__check-label\" for=\"n7-facet-check-{{i}}\">\n                {{ check.label }}\n            </label>\n        </div>\n    </div>\n\n    <!-- Search bar -->\n    <div class=\"n7-facet__search-wrapper\" *ngIf=\"data.input\">\n        <label class=\"n7-facet__search-label\" for=\"n7-facet-search-input\">\n            {{ data.input.label }}\n        </label>\n        <div class=\"n7-facet__search-input-wrapper\">\n            <input type=\"text\"\n                   [disabled] = \"data.input.disabled\"\n                   class=\"n7-facet__search-input {{data.input.classes || ''}}\" \n                   id=\"n7-facet-search-input\"\n                   placeholder=\"{{data.input.placeholder || ''}}\" \n                   (input)=\"onInputChange(data.input.payload, $event)\"\n                   (keyup.enter)=\"onInputEnter(data.input.payload, $event)\">\n            <span class=\"n7-facet__search-icon {{data.input.icon || ''}}\"   \n                *ngIf=\"data.input.icon\"\n                (click)=\"onClick(data.input.payload)\">\n            </span>\n        </div>\n    </div>\n\n    <!-- Filters -->\n    <div *ngIf=\"data.filters\" class=\"n7-facet__filter-wrapper\">\n        <div *ngFor=\"let filter of data.filters\" \n             class=\"n7-facet__filter {{filter.classes || ''}}\"\n             (click)=\"onClick(filter.payload)\">\n            <span *ngIf=\"filter.icon\" class=\"n7-facet__filter-icon {{filter.icon}}\"></span>\n            <span class=\"n7-facet__filter-text\">{{ filter.text }}</span>\n            <span class=\"n7-facet__filter-counter\">{{ filter.counter }}</span>\n        </div>\n    </div>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZhY2V0L2ZhY2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBZWpELGdDQW9CQzs7Ozs7O0lBaEJDLDRCQUF1Qjs7Ozs7SUFJdkIsMkJBT0M7Ozs7O0lBSUQsNkJBQXlCOzs7Ozs7Ozs7O0FBVTNCLGlDQWFDOzs7Ozs7SUFUQyw0QkFBYzs7Ozs7SUFJZCw4QkFBYzs7Ozs7SUFJZCw4QkFBYzs7Ozs7Ozs7Ozs7OztBQWFoQixrQ0F5QkM7Ozs7OztJQXJCQyw0QkFBYzs7Ozs7SUFJZCw0QkFBYTs7Ozs7SUFJYiwrQkFBaUI7Ozs7O0lBSWpCLCtCQUFjOzs7OztJQUlkLCtCQUFjOzs7OztJQUlkLDZCQUFZOztBQU9kLE1BQU0sT0FBTyxjQUFjOzs7OztJQUl6QixPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBRUQsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87O1lBRW5CLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU87UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7OztJQUVELGFBQWEsQ0FBQyxPQUFPLEVBQUUsS0FBSztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPOztZQUVuQixLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7OztJQUVELFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7OztZQWhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLGltRUFBMkI7YUFDNUI7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETiw4QkFBMEI7O0lBQzFCLDhCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGQUNFVC50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgRmFjZXRDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBjaGVja3MgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGlucHV0IChvcHRpb25hbClcbiAqIC0gbGFiZWwgKG9wdGlvbmFsKVxuICogLSBkaXNhYmxlZCAob3B0aW9uYWwpXG4gKiAtIHBsYWNlaG9sZGVyIChyZXF1aXJlZClcbiAqIC0gaWNvbiAob3B0aW9uYWwpXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxuICogLSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBmaWx0ZXJzIChvcHRpb25hbCkgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUZhY2V0RGF0YSB7XG4gIC8qKlxuICAgKiBsaXN0IG9mIGNoZWNrYm94ZXNcbiAgICovXG4gIGNoZWNrcz86IElGYWNldENoZWNrW107XG4gIC8qKlxuICAgKiBzZWFyY2ggYmFyIHRvIGZpbmQgYSBmaWx0ZXJcbiAgICovXG4gIGlucHV0Pzoge1xuICAgIGxhYmVsPzogc3RyaW5nO1xuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICAgIGljb24/OiBzdHJpbmc7XG4gICAgY2xhc3Nlcz86IGFueTtcbiAgICBwYXlsb2FkPzogYW55O1xuICB9XG4gIC8qKlxuICAgKiBsaXN0IG9mIGZpbHRlcnNcbiAgICovXG4gIGZpbHRlcnM/OiBJRmFjZXRGaWx0ZXJbXTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEZhY2V0Q29tcG9uZW50J3MgXCJjaGVja1wiXG4gKlxuICogQHByb3BlcnR5IGxhYmVsIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRmFjZXRDaGVjayB7XG4gIC8qKlxuICAgKiBjaGVja2JveCBsYWJlbFxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICAqIHBheWxvYWQgZm9yIG9uQ2xpY2sgZXZlbnRzXG4gICAqL1xuICBwYXlsb2FkPzogYW55O1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBGYWNldENvbXBvbmVudCdzIFwiZmlsdGVyXCJcbiAqXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY291bnRlciAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElGYWNldEZpbHRlciB7XG4gIC8qKlxuICAgKiBpY29uIHRvIHJlbmRlciB0aGUgY2hlY2ttYXJrXG4gICAqL1xuICBpY29uPzogc3RyaW5nO1xuICAvKipcbiAgICogdGhlIGZpbHRlcidzIHJlbmRlcmVkIHRleHRcbiAgICovXG4gIHRleHQ6IHN0cmluZztcbiAgLyoqXG4gICAqIHRoZSBudW1iZXIgb2YgaXRlbXMgZm9yIGVhY2ggZmlsdGVyXG4gICAqL1xuICBjb3VudGVyPzogbnVtYmVyO1xuICAvKipcbiAgICogcGF5bG9hZCBmb3Igb25DbGljayBldmVudHNcbiAgICovXG4gIHBheWxvYWQ/OiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgZGF0YSB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWZhY2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZhY2V0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEZhY2V0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSUZhY2V0RGF0YTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cblxuICBvbkNoZWNrKHBheWxvYWQsIGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgIGxldCBzdGF0dXMgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgaW5wdXRQYXlsb2FkOiBwYXlsb2FkLCBpc0NoZWNrZWQ6IHN0YXR1cyB9KTtcbiAgfVxuXG4gIG9uSW5wdXRDaGFuZ2UocGF5bG9hZCwgZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIFxuICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgaW5wdXRQYXlsb2FkOiBwYXlsb2FkLCB2YWx1ZSB9KTtcbiAgfVxuXG4gIG9uSW5wdXRFbnRlcihwYXlsb2FkLCB2YWx1ZSkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2VudGVyJywgeyBpbnB1dFBheWxvYWQ6IHBheWxvYWQsIHZhbHVlIH0pO1xuICB9XG59Il19