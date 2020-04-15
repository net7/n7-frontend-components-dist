/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/input-select/input-select.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// INPUT-SELECT.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for InputSelect
 *
 * \@property id (required)
 * \@property options (required)
 * \@property label (optional)
 * \@property disabled (optional)
 * \@property icon (optional)
 * \@property payload (optional)
 * \@property classes (optional)
 * \@property _meta (optional)
 * @record
 */
export function InputSelectData() { }
if (false) {
    /**
     * A unique ID for the select item
     * @type {?}
     */
    InputSelectData.prototype.id;
    /**
     * The array of <option> elements
     * @type {?}
     */
    InputSelectData.prototype.options;
    /**
     * Label for the <select> element
     * @type {?|undefined}
     */
    InputSelectData.prototype.label;
    /**
     * Prevents the user from changing any option
     * @type {?|undefined}
     */
    InputSelectData.prototype.disabled;
    /**
     * Payload for the select's change event
     * @type {?|undefined}
     */
    InputSelectData.prototype.payload;
    /**
     * Additional HTML Classes
     * @type {?|undefined}
     */
    InputSelectData.prototype.classes;
    /**
     * Additional data for the component's logic
     * @type {?|undefined}
     */
    InputSelectData.prototype._meta;
}
export class InputSelectComponent {
    /**
     * @param {?} inputPayload
     * @param {?=} value
     * @return {?}
     */
    onChange(inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload, value });
    }
}
InputSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-input-select',
                template: "<div *ngIf=\"data as input\"\n     class=\"n7-input-select\">\n  <label *ngIf=\"input.label\"\n         for=\"{{ input.id }}\">{{ input.label }}</label>\n  <select (change)=\"onChange(input.payload, $event.target.value)\"\n          id=\"{{ input.id }}\"\n          class=\"n7-facet__input-select {{ input.classes || '' }}\"\n          [disabled]=\"input.disabled\">\n    <option *ngFor=\"let option of input.options\"\n            [value]=\"option.value\"\n            [disabled]=\"option.disabled\"\n            [selected]=\"option.selected\">{{ option.label }}</option>\n  </select>\n</div>\n"
            }] }
];
InputSelectComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    InputSelectComponent.prototype.data;
    /** @type {?} */
    InputSelectComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbnB1dC1zZWxlY3QvaW5wdXQtc2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBY2pELHFDQThDQzs7Ozs7O0lBMUNDLDZCQUFXOzs7OztJQUlYLGtDQWlCRzs7Ozs7SUFJSCxnQ0FBZTs7Ozs7SUFJZixtQ0FBbUI7Ozs7O0lBSW5CLGtDQUFjOzs7OztJQUlkLGtDQUFjOzs7OztJQUlkLGdDQUFZOztBQU9kLE1BQU0sT0FBTyxvQkFBb0I7Ozs7OztJQUsvQixRQUFRLENBQUMsWUFBWSxFQUFFLEtBQU07UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7OztZQVpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiwrbEJBQWtDO2FBQ25DOzs7bUJBRUUsS0FBSzttQkFFTCxLQUFLOzs7O0lBRk4sb0NBQStCOztJQUUvQixvQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSU5QVVQtU0VMRUNULnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBJbnB1dFNlbGVjdFxuICpcbiAqIEBwcm9wZXJ0eSBpZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgb3B0aW9ucyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgbGFiZWwgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGRpc2FibGVkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRTZWxlY3REYXRhIHtcbiAgLyoqXG4gICAqIEEgdW5pcXVlIElEIGZvciB0aGUgc2VsZWN0IGl0ZW1cbiAgICovXG4gIGlkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgYXJyYXkgb2YgPG9wdGlvbj4gZWxlbWVudHNcbiAgICovXG4gIG9wdGlvbnM6IEFycmF5PHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVuZGVyZWQgdGV4dCBmb3IgdGhlIDxvcHRpb24+IGVsZW1lbnRcbiAgICAgKi9cbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBldmVudCB2YWx1ZSBmb3IgdGhlIDxvcHRpb24+IGVsZW1lbnRcbiAgICAgKi9cbiAgICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIG9wdGlvbiBhcyBkZWZhdWx0IChzZWxlY3RlZClcbiAgICAgKi9cbiAgICBzZWxlY3RlZD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogUHJldmVudHMgdGhlIHVzZXIgZnJvbSBzZWxlY3RpbmcgdGhpcyBvcHRpb25cbiAgICAgKi9cbiAgICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIH0+O1xuICAvKipcbiAgICogTGFiZWwgZm9yIHRoZSA8c2VsZWN0PiBlbGVtZW50XG4gICAqL1xuICBsYWJlbD86IHN0cmluZztcbiAgLyoqXG4gICAqIFByZXZlbnRzIHRoZSB1c2VyIGZyb20gY2hhbmdpbmcgYW55IG9wdGlvblxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICogUGF5bG9hZCBmb3IgdGhlIHNlbGVjdCdzIGNoYW5nZSBldmVudFxuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgSFRNTCBDbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogYW55O1xuICAvKipcbiAgICogQWRkaXRpb25hbCBkYXRhIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1pbnB1dC1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtc2VsZWN0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElucHV0U2VsZWN0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSW5wdXRTZWxlY3REYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNoYW5nZShpbnB1dFBheWxvYWQsIHZhbHVlPykge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7IGlucHV0UGF5bG9hZCwgdmFsdWUgfSk7XG4gIH1cbn1cbiJdfQ==