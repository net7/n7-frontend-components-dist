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
 * \@property typed (required)
 * \@property suggestion (required)
 * \@property payload (optional)
 * \@property classes (optional)
 * \@property _meta (optional)
 * @record
 */
export function ISimpleAutocompleteData() { }
if (false) {
    /**
     * Suggested word endings
     * @type {?}
     */
    ISimpleAutocompleteData.prototype.suggestion;
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
    ISimpleAutocompleteSuggestion.prototype.match;
    /** @type {?|undefined} */
    ISimpleAutocompleteSuggestion.prototype.suffix;
    /**
     * Suggestion event payload
     * @type {?|undefined}
     */
    ISimpleAutocompleteSuggestion.prototype.payload;
}
var SimpleAutocompleteComponent = /** @class */ (function () {
    function SimpleAutocompleteComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    SimpleAutocompleteComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    SimpleAutocompleteComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-simple-autocomplete',
                    template: "<div *ngIf=\"data\" class=\"n7-simple-autocomplete\">\n    <ul class=\"n7-simple-autocomplete__list {{data.classes || ''}}\">\n        <li *ngFor=\"let suggestion of data.suggestion\" \n            class=\"n7-simple-autocomplete__item\"\n            (click)=\"onClick(suggestion.payload)\">\n            <span *ngIf=\"suggestion.prefix\" class=\"n7-simple-autocomplete__prefix\">{{suggestion.prefix}}</span>\n            <span class=\"n7-simple-autocomplete__typed\">{{suggestion.match}}</span>\n            <span *ngIf=\"suggestion.suffix\" class=\"n7-simple-autocomplete__suffix\">{{suggestion.suffix}}</span>\n        </li>\n    </ul> \n</div>"
                }] }
    ];
    SimpleAutocompleteComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return SimpleAutocompleteComponent;
}());
export { SimpleAutocompleteComponent };
if (false) {
    /** @type {?} */
    SimpleAutocompleteComponent.prototype.data;
    /** @type {?} */
    SimpleAutocompleteComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWF1dG9jb21wbGV0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2ltcGxlLWF1dG9jb21wbGV0ZS9zaW1wbGUtYXV0b2NvbXBsZXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7O0FBV2pELDZDQWFDOzs7Ozs7SUFUQyw2Q0FBNEM7Ozs7O0lBSTVDLDBDQUFjOzs7OztJQUlkLHdDQUFZOzs7Ozs7Ozs7O0FBVWQsbURBV0M7Ozs7OztJQVBDLCtDQUFnQjs7SUFDaEIsOENBQWU7O0lBQ2YsK0NBQWdCOzs7OztJQUloQixnREFBYzs7QUFHaEI7SUFBQTtJQWFBLENBQUM7Ozs7O0lBTEMsNkNBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDYixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQVpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxrcEJBQXlDO2lCQUMxQzs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUFPUixrQ0FBQztDQUFBLEFBYkQsSUFhQztTQVRZLDJCQUEyQjs7O0lBQ3RDLDJDQUF1Qzs7SUFDdkMsMkNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNJTVBMRS1BVVRPQ09NUExFVEUudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFNpbXBsZUF1dG9jb21wbGV0ZUNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IHR5cGVkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBzdWdnZXN0aW9uIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVNpbXBsZUF1dG9jb21wbGV0ZURhdGEge1xuICAvKipcbiAgICogU3VnZ2VzdGVkIHdvcmQgZW5kaW5nc1xuICAgKi9cbiAgc3VnZ2VzdGlvbjogSVNpbXBsZUF1dG9jb21wbGV0ZVN1Z2dlc3Rpb25bXSxcbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgSFRNTCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogYW55LFxuICAvKipcbiAgICogQWRkaXRpb25hbCBkYXRhIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXG4gICAqL1xuICBfbWV0YT86IGFueSxcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFNpbXBsZUF1dG9jb21wbGV0ZUNvbXBvbmVudCdzIFwiU3VnZ2VzdGlvblwiXG4gKlxuICogQHByb3BlcnR5IHByZWZpeCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgc3VmZml4IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJU2ltcGxlQXV0b2NvbXBsZXRlU3VnZ2VzdGlvbiB7XG4gIC8qKlxuICAgKiBSZW5kZXIgc3VnZ2VzdGlvbnNcbiAgICovXG4gIHByZWZpeD86IHN0cmluZyxcbiAgbWF0Y2g/OiBzdHJpbmcsXG4gIHN1ZmZpeD86IHN0cmluZyxcbiAgLyoqXG4gICAqIFN1Z2dlc3Rpb24gZXZlbnQgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZD86IGFueSxcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctc2ltcGxlLWF1dG9jb21wbGV0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaW1wbGUtYXV0b2NvbXBsZXRlLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNpbXBsZUF1dG9jb21wbGV0ZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElTaW1wbGVBdXRvY29tcGxldGVEYXRhO1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DbGljayhwYXlsb2FkKXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cbn0iXX0=