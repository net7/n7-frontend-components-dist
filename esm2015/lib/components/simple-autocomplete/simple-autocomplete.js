/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// SIMPLE-AUTOCOMPLETE.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for SimpleAutocompleteComponent's "data"
 *
 * \@property typed (required)
 * \@property append (required)
 * \@property payload (optional)
 * \@property classes (optional)
 * \@property _meta (optional)
 * @record
 */
export function ISimpleAutocompleteData() { }
if (false) {
    /**
     * Text inserted by the user
     * @type {?}
     */
    ISimpleAutocompleteData.prototype.typed;
    /**
     * Suggested word endings
     * @type {?}
     */
    ISimpleAutocompleteData.prototype.append;
    /**
     * Additional HTML classes
     * @type {?|undefined}
     */
    ISimpleAutocompleteData.prototype.classes;
    /**
     * Additional data useful for the component's logic
     * @type {?|undefined}
     */
    ISimpleAutocompleteData.prototype._meta;
}
/**
 * Interface for SimpleAutocompleteComponent's "Suggestion"
 *
 * \@property prefix (optional)
 * \@property suffix (optional)
 * \@property payload (optional)
 * @record
 */
export function ISimpleAutocompleteSuggestion() { }
if (false) {
    /**
     * Render suggestions
     * @type {?|undefined}
     */
    ISimpleAutocompleteSuggestion.prototype.prefix;
    /** @type {?|undefined} */
    ISimpleAutocompleteSuggestion.prototype.suffix;
    /**
     * Suggestion event payload
     * @type {?|undefined}
     */
    ISimpleAutocompleteSuggestion.prototype.payload;
}
export class SimpleAutocompleteComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
}
SimpleAutocompleteComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-simple-autocomplete',
                template: "<div *ngIf=\"data\" class=\"n7-simple-autocomplete\">\n    <ul class=\"n7-simple-autocomplete__list {{data.classes || ''}}\">\n        <li *ngFor=\"let suggestion of data.append\" \n            class=\"n7-simple-autocomplete__item\"\n            (click)=\"onClick(suggestion.payload)\">\n            <span *ngIf=\"suggestion.prefix\" class=\"n7-simple-autocomplete__prefix\">{{suggestion.prefix}}</span>\n            <span class=\"n7-simple-autocomplete__typed\">{{data.typed}}</span>\n            <span *ngIf=\"suggestion.suffix\" class=\"n7-simple-autocomplete__suffix\">{{suggestion.suffix}}</span>\n        </li>\n    </ul> \n</div>"
            }] }
];
SimpleAutocompleteComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SimpleAutocompleteComponent.prototype.data;
    /** @type {?} */
    SimpleAutocompleteComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWF1dG9jb21wbGV0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2ltcGxlLWF1dG9jb21wbGV0ZS9zaW1wbGUtYXV0b2NvbXBsZXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7QUFXakQsNkNBaUJDOzs7Ozs7SUFiQyx3Q0FBYzs7Ozs7SUFJZCx5Q0FBd0M7Ozs7O0lBSXhDLDBDQUFjOzs7OztJQUlkLHdDQUFZOzs7Ozs7Ozs7O0FBVWQsbURBVUM7Ozs7OztJQU5DLCtDQUFnQjs7SUFDaEIsK0NBQWdCOzs7OztJQUloQixnREFBYzs7QUFPaEIsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7SUFJdEMsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQVpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyx3b0JBQXlDO2FBQzFDOzs7bUJBRUUsS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sMkNBQXVDOztJQUN2QywyQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU0lNUExFLUFVVE9DT01QTEVURS50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgU2ltcGxlQXV0b2NvbXBsZXRlQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgdHlwZWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGFwcGVuZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElTaW1wbGVBdXRvY29tcGxldGVEYXRhIHtcbiAgLyoqXG4gICAqIFRleHQgaW5zZXJ0ZWQgYnkgdGhlIHVzZXJcbiAgICovXG4gIHR5cGVkOiBzdHJpbmcsXG4gIC8qKlxuICAgKiBTdWdnZXN0ZWQgd29yZCBlbmRpbmdzXG4gICAqL1xuICBhcHBlbmQ6IElTaW1wbGVBdXRvY29tcGxldGVTdWdnZXN0aW9uW10sXG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIEhUTUwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IGFueSxcbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgZGF0YSB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xuICAgKi9cbiAgX21ldGE/OiBhbnksXG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBTaW1wbGVBdXRvY29tcGxldGVDb21wb25lbnQncyBcIlN1Z2dlc3Rpb25cIlxuICpcbiAqIEBwcm9wZXJ0eSBwcmVmaXggKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHN1ZmZpeCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVNpbXBsZUF1dG9jb21wbGV0ZVN1Z2dlc3Rpb24ge1xuICAvKipcbiAgICogUmVuZGVyIHN1Z2dlc3Rpb25zXG4gICAqL1xuICBwcmVmaXg/OiBzdHJpbmcsXG4gIHN1ZmZpeD86IHN0cmluZyxcbiAgLyoqXG4gICAqIFN1Z2dlc3Rpb24gZXZlbnQgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZD86IGFueSxcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctc2ltcGxlLWF1dG9jb21wbGV0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaW1wbGUtYXV0b2NvbXBsZXRlLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNpbXBsZUF1dG9jb21wbGV0ZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElTaW1wbGVBdXRvY29tcGxldGVEYXRhO1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DbGljayhwYXlsb2FkKXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cbn0iXX0=