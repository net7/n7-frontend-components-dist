/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/simple-autocomplete/simple-autocomplete.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// SIMPLE-AUTOCOMPLETE.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for SimpleAutocompleteComponent's "data"
 *
 * \@property suggestion (required)
 * \@property classes (optional)
 * \@property _meta (optional)
 * @record
 */
export function SimpleAutocompleteData() { }
if (false) {
    /**
     * Suggested word endings
     * @type {?}
     */
    SimpleAutocompleteData.prototype.suggestion;
    /**
     * Additional HTML classes
     * @type {?|undefined}
     */
    SimpleAutocompleteData.prototype.classes;
    /**
     * Additional data useful for the component's logic
     * @type {?|undefined}
     */
    SimpleAutocompleteData.prototype._meta;
}
/**
 * Interface for SimpleAutocompleteComponent's "Suggestion"
 *
 * \@property text
 * \@property anchor (optional)
 * @record
 */
export function SimpleAutocompleteSuggestion() { }
if (false) {
    /** @type {?} */
    SimpleAutocompleteSuggestion.prototype.text;
    /** @type {?|undefined} */
    SimpleAutocompleteSuggestion.prototype.anchor;
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
                template: "<div *ngIf=\"data\" class=\"n7-simple-autocomplete\">\n    <ul class=\"n7-simple-autocomplete__list {{data.classes || ''}}\">\n        <li *ngFor=\"let suggestion of data.suggestion\" \n            class=\"n7-simple-autocomplete__item\">\n            <n7-anchor-wrapper\n            [classes]=\"'n7-simple-autocomplete__link'\"\n            [data]=\"suggestion.anchor\"\n            (clicked)=\"onClick($event)\">\n              <span class=\"n7-simple-autocomplete__label\" [innerHTML]=\"suggestion.text\"></span>\n            </n7-anchor-wrapper>\n        </li>\n    </ul> \n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWF1dG9jb21wbGV0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2ltcGxlLWF1dG9jb21wbGV0ZS9zaW1wbGUtYXV0b2NvbXBsZXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztBQVVqRCw0Q0FhQzs7Ozs7O0lBVEMsNENBQTJDOzs7OztJQUkzQyx5Q0FBYzs7Ozs7SUFJZCx1Q0FBWTs7Ozs7Ozs7O0FBU2Qsa0RBR0M7OztJQUZDLDRDQUFhOztJQUNiLDhDQUFnQjs7QUFPbEIsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7SUFLdEMsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQWJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxtbEJBQXlDO2FBQzFDOzs7bUJBRUUsS0FBSzttQkFFTCxLQUFLOzs7O0lBRk4sMkNBQXNDOztJQUV0QywyQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU0lNUExFLUFVVE9DT01QTEVURS50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5jaG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkLWludGVyZmFjZXMnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgU2ltcGxlQXV0b2NvbXBsZXRlQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgc3VnZ2VzdGlvbiAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNpbXBsZUF1dG9jb21wbGV0ZURhdGEge1xuICAvKipcbiAgICogU3VnZ2VzdGVkIHdvcmQgZW5kaW5nc1xuICAgKi9cbiAgc3VnZ2VzdGlvbjogU2ltcGxlQXV0b2NvbXBsZXRlU3VnZ2VzdGlvbltdO1xuICAvKipcbiAgICogQWRkaXRpb25hbCBIVE1MIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBhbnk7XG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIGRhdGEgdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgU2ltcGxlQXV0b2NvbXBsZXRlQ29tcG9uZW50J3MgXCJTdWdnZXN0aW9uXCJcbiAqXG4gKiBAcHJvcGVydHkgdGV4dFxuICogQHByb3BlcnR5IGFuY2hvciAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2ltcGxlQXV0b2NvbXBsZXRlU3VnZ2VzdGlvbiB7XG4gIHRleHQ6IHN0cmluZztcbiAgYW5jaG9yPzogQW5jaG9yO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1zaW1wbGUtYXV0b2NvbXBsZXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpbXBsZS1hdXRvY29tcGxldGUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU2ltcGxlQXV0b2NvbXBsZXRlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogU2ltcGxlQXV0b2NvbXBsZXRlRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DbGljayhwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxufVxuIl19