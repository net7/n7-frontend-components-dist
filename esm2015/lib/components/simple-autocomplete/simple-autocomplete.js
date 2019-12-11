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
                template: "<div *ngIf=\"data\" class=\"n7-simple-autocomplete\">\n    <ul class=\"n7-simple-autocomplete__list {{data.classes || ''}}\">\n        <li *ngFor=\"let suggestion of data.suggestion\" \n            class=\"n7-simple-autocomplete__item\"\n            (click)=\"onClick(suggestion.payload)\">\n            <span *ngIf=\"suggestion.prefix\" class=\"n7-simple-autocomplete__prefix\">{{suggestion.prefix}}</span>\n            <span class=\"n7-simple-autocomplete__typed\">{{suggestion.match}}</span>\n            <span *ngIf=\"suggestion.suffix\" class=\"n7-simple-autocomplete__suffix\">{{suggestion.suffix}}</span>\n        </li>\n    </ul> \n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWF1dG9jb21wbGV0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2ltcGxlLWF1dG9jb21wbGV0ZS9zaW1wbGUtYXV0b2NvbXBsZXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7O0FBV2pELDZDQWFDOzs7Ozs7SUFUQyw2Q0FBNEM7Ozs7O0lBSTVDLDBDQUFjOzs7OztJQUlkLHdDQUFZOzs7Ozs7Ozs7O0FBVWQsbURBV0M7Ozs7OztJQVBDLCtDQUFnQjs7SUFDaEIsOENBQWU7O0lBQ2YsK0NBQWdCOzs7OztJQUloQixnREFBYzs7QUFPaEIsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7SUFJdEMsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQVpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxrcEJBQXlDO2FBQzFDOzs7bUJBRUUsS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sMkNBQXVDOztJQUN2QywyQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU0lNUExFLUFVVE9DT01QTEVURS50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgU2ltcGxlQXV0b2NvbXBsZXRlQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgdHlwZWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHN1Z2dlc3Rpb24gKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJU2ltcGxlQXV0b2NvbXBsZXRlRGF0YSB7XG4gIC8qKlxuICAgKiBTdWdnZXN0ZWQgd29yZCBlbmRpbmdzXG4gICAqL1xuICBzdWdnZXN0aW9uOiBJU2ltcGxlQXV0b2NvbXBsZXRlU3VnZ2VzdGlvbltdLFxuICAvKipcbiAgICogQWRkaXRpb25hbCBIVE1MIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBhbnksXG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIGRhdGEgdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICovXG4gIF9tZXRhPzogYW55LFxufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgU2ltcGxlQXV0b2NvbXBsZXRlQ29tcG9uZW50J3MgXCJTdWdnZXN0aW9uXCJcbiAqXG4gKiBAcHJvcGVydHkgcHJlZml4IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBzdWZmaXggKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElTaW1wbGVBdXRvY29tcGxldGVTdWdnZXN0aW9uIHtcbiAgLyoqXG4gICAqIFJlbmRlciBzdWdnZXN0aW9uc1xuICAgKi9cbiAgcHJlZml4Pzogc3RyaW5nLFxuICBtYXRjaD86IHN0cmluZyxcbiAgc3VmZml4Pzogc3RyaW5nLFxuICAvKipcbiAgICogU3VnZ2VzdGlvbiBldmVudCBwYXlsb2FkXG4gICAqL1xuICBwYXlsb2FkPzogYW55LFxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1zaW1wbGUtYXV0b2NvbXBsZXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpbXBsZS1hdXRvY29tcGxldGUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU2ltcGxlQXV0b2NvbXBsZXRlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSVNpbXBsZUF1dG9jb21wbGV0ZURhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNsaWNrKHBheWxvYWQpe1xuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxufSJdfQ==