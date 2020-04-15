/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/input-checkbox/input-checkbox.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// INPUT-CHECKBOX.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for InputCheckbox
 *
 * \@property id (required)
 * \@property label (required)
 * \@property checked (optional)
 * \@property disabled (optional)
 * \@property payload (optional)
 * \@property classes (optional)
 * \@property _meta (optional)
 * @record
 */
export function InputCheckbox() { }
if (false) {
    /**
     * Unique ID for the checkbox
     * @type {?}
     */
    InputCheckbox.prototype.id;
    /**
     * Label for the checkbox
     * @type {?}
     */
    InputCheckbox.prototype.label;
    /**
     * Defaults the checkbox to be checked
     * @type {?|undefined}
     */
    InputCheckbox.prototype.checked;
    /**
     * Sets the disabled HTML attribute
     * @type {?|undefined}
     */
    InputCheckbox.prototype.disabled;
    /**
     * Payload for the change event
     * @type {?|undefined}
     */
    InputCheckbox.prototype.payload;
    /**
     * Additional HTML Classes
     * @type {?|undefined}
     */
    InputCheckbox.prototype.classes;
    /**
     * Additional data for the component's logic
     * @type {?|undefined}
     */
    InputCheckbox.prototype._meta;
}
/**
 * Interface for InputCheckboxData
 * \@property checkboxes (required)
 * @record
 */
export function InputCheckboxData() { }
if (false) {
    /**
     * An array of input checkboxes
     * @type {?}
     */
    InputCheckboxData.prototype.checkboxes;
}
var InputCheckboxComponent = /** @class */ (function () {
    function InputCheckboxComponent() {
    }
    /**
     * @param {?} inputPayload
     * @param {?=} value
     * @return {?}
     */
    InputCheckboxComponent.prototype.onChange = /**
     * @param {?} inputPayload
     * @param {?=} value
     * @return {?}
     */
    function (inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload: inputPayload, value: value });
    };
    InputCheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-input-checkbox',
                    template: "<div *ngIf=\"data\"\n     class=\"n7-input-checkbox\">\n  <ng-container *ngFor=\"let input of data.checkboxes\">\n    <input type=\"checkbox\"\n           id=\"{{ input.id }}\"\n           class=\"n7-input-checkbox__input\"\n           [checked]=\"input.checked\"\n           [disabled]=\"input.disabled\"\n           (change)=\"onChange(input.payload, $event.target.checked)\">\n    <label *ngIf=\"input.label\"\n           class=\"n7-input-checkbox__label\"\n           for=\"{{ input.id }}\">\n      {{ input.label }}\n    </label>\n  </ng-container>\n</div>\n"
                }] }
    ];
    InputCheckboxComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return InputCheckboxComponent;
}());
export { InputCheckboxComponent };
if (false) {
    /** @type {?} */
    InputCheckboxComponent.prototype.data;
    /** @type {?} */
    InputCheckboxComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2lucHV0LWNoZWNrYm94L2lucHV0LWNoZWNrYm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhakQsbUNBNkJDOzs7Ozs7SUF6QkMsMkJBQVc7Ozs7O0lBSVgsOEJBQWM7Ozs7O0lBSWQsZ0NBQWtCOzs7OztJQUlsQixpQ0FBbUI7Ozs7O0lBSW5CLGdDQUFjOzs7OztJQUlkLGdDQUFjOzs7OztJQUlkLDhCQUFZOzs7Ozs7O0FBT2QsdUNBS0M7Ozs7OztJQURDLHVDQUE0Qjs7QUFHOUI7SUFBQTtJQWFBLENBQUM7Ozs7OztJQUpDLHlDQUFROzs7OztJQUFSLFVBQVMsWUFBWSxFQUFFLEtBQU07UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksY0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsK2pCQUFvQztpQkFDckM7Ozt1QkFFRSxLQUFLO3VCQUVMLEtBQUs7O0lBTVIsNkJBQUM7Q0FBQSxBQWJELElBYUM7U0FUWSxzQkFBc0I7OztJQUNqQyxzQ0FBaUM7O0lBRWpDLHNDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBJTlBVVC1DSEVDS0JPWC50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgSW5wdXRDaGVja2JveFxuICpcbiAqIEBwcm9wZXJ0eSBpZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgbGFiZWwgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNoZWNrZWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGRpc2FibGVkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRDaGVja2JveCB7XG4gIC8qKlxuICAgKiBVbmlxdWUgSUQgZm9yIHRoZSBjaGVja2JveFxuICAgKi9cbiAgaWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIExhYmVsIGZvciB0aGUgY2hlY2tib3hcbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBEZWZhdWx0cyB0aGUgY2hlY2tib3ggdG8gYmUgY2hlY2tlZFxuICAgKi9cbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkaXNhYmxlZCBIVE1MIGF0dHJpYnV0ZVxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICogUGF5bG9hZCBmb3IgdGhlIGNoYW5nZSBldmVudFxuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgSFRNTCBDbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogYW55O1xuICAvKipcbiAgICogQWRkaXRpb25hbCBkYXRhIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgSW5wdXRDaGVja2JveERhdGFcbiAqIEBwcm9wZXJ0eSBjaGVja2JveGVzIChyZXF1aXJlZClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbnB1dENoZWNrYm94RGF0YSB7XG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBpbnB1dCBjaGVja2JveGVzXG4gICAqL1xuICBjaGVja2JveGVzOiBJbnB1dENoZWNrYm94W107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWlucHV0LWNoZWNrYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LWNoZWNrYm94Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElucHV0Q2hlY2tib3hDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJbnB1dENoZWNrYm94RGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DaGFuZ2UoaW5wdXRQYXlsb2FkLCB2YWx1ZT8pIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgeyBpbnB1dFBheWxvYWQsIHZhbHVlIH0pO1xuICB9XG59XG4iXX0=