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
 * \@property text
 * \@property payload (optional)
 * @record
 */
export function ISimpleAutocompleteSuggestion() { }
if (false) {
    /**
     * Render suggestions
     * @type {?}
     */
    ISimpleAutocompleteSuggestion.prototype.text;
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
                template: "<div *ngIf=\"data\" class=\"n7-simple-autocomplete\">\r\n    <ul class=\"n7-simple-autocomplete__list {{data.classes || ''}}\">\r\n        <li *ngFor=\"let suggestion of data.suggestion\" \r\n            class=\"n7-simple-autocomplete__item\"\r\n            (click)=\"onClick(suggestion.payload)\"\r\n            [innerHTML]=\"suggestion.text\">\r\n        </li>\r\n    </ul> \r\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWF1dG9jb21wbGV0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2ltcGxlLWF1dG9jb21wbGV0ZS9zaW1wbGUtYXV0b2NvbXBsZXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7O0FBV2pELDZDQWFDOzs7Ozs7SUFUQyw2Q0FBNEM7Ozs7O0lBSTVDLDBDQUFjOzs7OztJQUlkLHdDQUFZOzs7Ozs7Ozs7QUFTZCxtREFTQzs7Ozs7O0lBTEMsNkNBQWE7Ozs7O0lBSWIsZ0RBQWM7O0FBT2hCLE1BQU0sT0FBTywyQkFBMkI7Ozs7O0lBSXRDLE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUFaRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsOFlBQXlDO2FBQzFDOzs7bUJBRUUsS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sMkNBQXVDOztJQUN2QywyQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBTSU1QTEUtQVVUT0NPTVBMRVRFLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBTaW1wbGVBdXRvY29tcGxldGVDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgdHlwZWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgc3VnZ2VzdGlvbiAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU2ltcGxlQXV0b2NvbXBsZXRlRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogU3VnZ2VzdGVkIHdvcmQgZW5kaW5nc1xyXG4gICAqL1xyXG4gIHN1Z2dlc3Rpb246IElTaW1wbGVBdXRvY29tcGxldGVTdWdnZXN0aW9uW10sXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBIVE1MIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogYW55LFxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgZGF0YSB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xyXG4gICAqL1xyXG4gIF9tZXRhPzogYW55LFxyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBTaW1wbGVBdXRvY29tcGxldGVDb21wb25lbnQncyBcIlN1Z2dlc3Rpb25cIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgdGV4dFxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTaW1wbGVBdXRvY29tcGxldGVTdWdnZXN0aW9uIHtcclxuICAvKipcclxuICAgKiBSZW5kZXIgc3VnZ2VzdGlvbnNcclxuICAgKi9cclxuICB0ZXh0OiBzdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogU3VnZ2VzdGlvbiBldmVudCBwYXlsb2FkXHJcbiAgICovXHJcbiAgcGF5bG9hZD86IGFueSxcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1zaW1wbGUtYXV0b2NvbXBsZXRlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2ltcGxlLWF1dG9jb21wbGV0ZS5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2ltcGxlQXV0b2NvbXBsZXRlQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBJU2ltcGxlQXV0b2NvbXBsZXRlRGF0YTtcclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZCl7XHJcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxufSJdfQ==