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
                template: "<div *ngIf=\"data\" class=\"n7-facet\">\n    <!-- Checkboxes -->\n    <div class=\"n7-facet__check-wrapper\"*ngIf=\"data.checks\">\n        <div *ngFor=\"let check of data.checks; let i = index\" class=\"n7-facet__check {{check.classes || ''}}\">\n            <input type=\"checkbox\" \n                   class=\"n7-facet__check-input\" \n                   id=\"n7-facet-check-{{i}}\"\n                   (change)=\"onCheck(check.payload, $event)\">\n            <label class=\"n7-facet__check-label\" for=\"n7-facet-check-{{i}}\">\n                {{ check.label }}\n            </label>\n        </div>\n    </div>\n\n    <!-- Search bar -->\n    <div class=\"n7-facet__search-wrapper\" *ngIf=\"data.input\">\n        <label class=\"n7-facet__search-label\" for=\"n7-facet-search-input\">\n            {{ data.input.label }}\n        </label>\n        <div class=\"n7-facet__search-input-wrapper\">\n            <input type=\"text\" \n                class=\"n7-facet__search-input {{data.input.classes || ''}}\" \n                id=\"n7-facet-search-input\"\n                placeholder=\"{{data.input.placeholder || ''}}\" \n                (input)=\"onInputChange(data.input.payload, $event)\"\n                (keyup.enter)=\"onInputEnter(data.input.payload, $event)\">\n            <span class=\"n7-facet__search-icon {{data.input.icon || ''}}\"   \n                *ngIf=\"data.input.icon\"\n                (click)=\"onClick(data.input.payload)\">\n            </span>\n        </div>\n    </div>\n\n    <!-- Filters -->\n    <div *ngIf=\"data.filters\" class=\"n7-facet__filter-wrapper\">\n        <div *ngFor=\"let filter of data.filters\" \n             class=\"n7-facet__filter {{filter.classes || ''}}\"\n             (click)=\"onClick(filter.payload)\">\n            <span *ngIf=\"filter.icon\" class=\"n7-facet__filter-icon {{filter.icon}}\"></span>\n            <span class=\"n7-facet__filter-text\">{{ filter.text }}</span>\n            <span class=\"n7-facet__filter-counter\">{{ filter.counter }}</span>\n        </div>\n    </div>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZhY2V0L2ZhY2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0FBU2pELGdDQW1CQzs7Ozs7O0lBZkMsNEJBQXVCOzs7OztJQUl2QiwyQkFNQzs7Ozs7SUFJRCw2QkFBeUI7Ozs7Ozs7Ozs7QUFVM0IsaUNBYUM7Ozs7OztJQVRDLDRCQUFjOzs7OztJQUlkLDhCQUFjOzs7OztJQUlkLDhCQUFjOzs7Ozs7Ozs7Ozs7O0FBYWhCLGtDQXlCQzs7Ozs7O0lBckJDLDRCQUFjOzs7OztJQUlkLDRCQUFhOzs7OztJQUliLCtCQUFpQjs7Ozs7SUFJakIsK0JBQWM7Ozs7O0lBSWQsK0JBQWM7Ozs7O0lBSWQsNkJBQVk7O0FBT2QsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBSXpCLE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFRCxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUs7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTzs7WUFFbkIsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7Ozs7O0lBRUQsYUFBYSxDQUFDLE9BQU8sRUFBRSxLQUFLO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87O1lBRW5CLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7O0lBRUQsWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7O1lBaENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsMGhFQUEyQjthQUM1Qjs7O21CQUVFLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLDhCQUEwQjs7SUFDMUIsOEJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZBQ0VULnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBGYWNldENvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGNoZWNrcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgc2VhcmNoIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBmaWx0ZXJzIChvcHRpb25hbCkgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUZhY2V0RGF0YSB7XG4gIC8qKlxuICAgKiBsaXN0IG9mIGNoZWNrYm94ZXNcbiAgICovXG4gIGNoZWNrcz86IElGYWNldENoZWNrW107XG4gIC8qKlxuICAgKiBzZWFyY2ggYmFyIHRvIGZpbmQgYSBmaWx0ZXJcbiAgICovXG4gIGlucHV0Pzoge1xuICAgIGxhYmVsPzogc3RyaW5nO1xuICAgIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgaWNvbj86IHN0cmluZztcbiAgICBjbGFzc2VzPzogYW55O1xuICAgIHBheWxvYWQ/OiBhbnk7XG4gIH1cbiAgLyoqXG4gICAqIGxpc3Qgb2YgZmlsdGVyc1xuICAgKi9cbiAgZmlsdGVycz86IElGYWNldEZpbHRlcltdO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgRmFjZXRDb21wb25lbnQncyBcImNoZWNrXCJcbiAqXG4gKiBAcHJvcGVydHkgbGFiZWwgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElGYWNldENoZWNrIHtcbiAgLyoqXG4gICAqIGNoZWNrYm94IGxhYmVsXG4gICAqL1xuICBsYWJlbDogc3RyaW5nO1xuICAvKipcbiAgICogcGF5bG9hZCBmb3Igb25DbGljayBldmVudHNcbiAgICovXG4gIHBheWxvYWQ/OiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEZhY2V0Q29tcG9uZW50J3MgXCJmaWx0ZXJcIlxuICpcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjb3VudGVyIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUZhY2V0RmlsdGVyIHtcbiAgLyoqXG4gICAqIGljb24gdG8gcmVuZGVyIHRoZSBjaGVja21hcmtcbiAgICovXG4gIGljb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aGUgZmlsdGVyJ3MgcmVuZGVyZWQgdGV4dFxuICAgKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKipcbiAgICogdGhlIG51bWJlciBvZiBpdGVtcyBmb3IgZWFjaCBmaWx0ZXJcbiAgICovXG4gIGNvdW50ZXI/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBwYXlsb2FkIGZvciBvbkNsaWNrIGV2ZW50c1xuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogYW55O1xuICAvKipcbiAgICogYWRkaXRpb25hbCBkYXRhIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXG4gICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctZmFjZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmFjZXQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRmFjZXRDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJRmFjZXREYXRhO1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DbGljayhwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxuXG4gIG9uQ2hlY2socGF5bG9hZCwgZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuXG4gICAgbGV0IHN0YXR1cyA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgeyBpbnB1dFBheWxvYWQ6IHBheWxvYWQsIGlzQ2hlY2tlZDogc3RhdHVzIH0pO1xuICB9XG5cbiAgb25JbnB1dENoYW5nZShwYXlsb2FkLCBldmVudCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgXG4gICAgbGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgeyBpbnB1dFBheWxvYWQ6IHBheWxvYWQsIHZhbHVlIH0pO1xuICB9XG5cbiAgb25JbnB1dEVudGVyKHBheWxvYWQsIHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgIHRoaXMuZW1pdCgnZW50ZXInLCB7IGlucHV0UGF5bG9hZDogcGF5bG9hZCwgdmFsdWUgfSk7XG4gIH1cbn0iXX0=