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
                    template: "<div *ngIf=\"data\" class=\"n7-simple-autocomplete\">\r\n    <ul class=\"n7-simple-autocomplete__list {{data.classes || ''}}\">\r\n        <li *ngFor=\"let suggestion of data.suggestion\" \r\n            class=\"n7-simple-autocomplete__item\">\r\n            <n7-anchor-wrapper\r\n            [classes]=\"'n7-simple-autocomplete__link'\"\r\n            [data]=\"suggestion.anchor\"\r\n            (clicked)=\"onClick($event)\">\r\n              <span class=\"n7-simple-autocomplete__label\" [innerHTML]=\"suggestion.text\"></span>\r\n            </n7-anchor-wrapper>\r\n        </li>\r\n    </ul> \r\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWF1dG9jb21wbGV0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2ltcGxlLWF1dG9jb21wbGV0ZS9zaW1wbGUtYXV0b2NvbXBsZXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztBQVVqRCw0Q0FhQzs7Ozs7O0lBVEMsNENBQTJDOzs7OztJQUkzQyx5Q0FBYzs7Ozs7SUFJZCx1Q0FBWTs7Ozs7Ozs7O0FBU2Qsa0RBR0M7OztJQUZDLDRDQUFhOztJQUNiLDhDQUFnQjs7QUFHbEI7SUFBQTtJQWNBLENBQUM7Ozs7O0lBTEMsNkNBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQywybUJBQXlDO2lCQUMxQzs7O3VCQUVFLEtBQUs7dUJBRUwsS0FBSzs7SUFPUixrQ0FBQztDQUFBLEFBZEQsSUFjQztTQVZZLDJCQUEyQjs7O0lBQ3RDLDJDQUFzQzs7SUFFdEMsMkNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gU0lNUExFLUFVVE9DT01QTEVURS50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBTaW1wbGVBdXRvY29tcGxldGVDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgc3VnZ2VzdGlvbiAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2ltcGxlQXV0b2NvbXBsZXRlRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogU3VnZ2VzdGVkIHdvcmQgZW5kaW5nc1xyXG4gICAqL1xyXG4gIHN1Z2dlc3Rpb246IFNpbXBsZUF1dG9jb21wbGV0ZVN1Z2dlc3Rpb25bXTtcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIEhUTUwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBkYXRhIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIFNpbXBsZUF1dG9jb21wbGV0ZUNvbXBvbmVudCdzIFwiU3VnZ2VzdGlvblwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0XHJcbiAqIEBwcm9wZXJ0eSBhbmNob3IgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTaW1wbGVBdXRvY29tcGxldGVTdWdnZXN0aW9uIHtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgYW5jaG9yPzogQW5jaG9yO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LXNpbXBsZS1hdXRvY29tcGxldGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaW1wbGUtYXV0b2NvbXBsZXRlLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaW1wbGVBdXRvY29tcGxldGVDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IFNpbXBsZUF1dG9jb21wbGV0ZURhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgb25DbGljayhwYXlsb2FkKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcbn1cclxuIl19