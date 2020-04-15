/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/input-text/input-text.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// INPUT-TEXT.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for InputTextData
 *
 * \@property id (required)
 * \@property placeholder (optional)
 * \@property value (optional)
 * \@property label (optional)
 * \@property disabled (optional)
 * \@property icon (optional)
 * \@property inputPayload (optional)
 * \@property enterPayload (optional)
 * \@property iconPayload (optional)
 * \@property classes (optional)
 * \@property _meta (optional)
 * @record
 */
export function InputTextData() { }
if (false) {
    /**
     * Unique ID for the text input element
     * @type {?}
     */
    InputTextData.prototype.id;
    /**
     * Placeholder text inside the input box
     * @type {?|undefined}
     */
    InputTextData.prototype.placeholder;
    /**
     * Default value of the input box
     * @type {?|undefined}
     */
    InputTextData.prototype.value;
    /**
     * Label for the input box
     * @type {?|undefined}
     */
    InputTextData.prototype.label;
    /**
     * Prevents the user from changing the input's value
     * @type {?|undefined}
     */
    InputTextData.prototype.disabled;
    /**
     * Optional icon to render inside the input box (eg. n7-icon-search)
     * @type {?|undefined}
     */
    InputTextData.prototype.icon;
    /**
     * Payload that is sent when the user changes the value
     * @type {?|undefined}
     */
    InputTextData.prototype.inputPayload;
    /**
     * Payload that is sent when the user presses the "Enter" key
     * @type {?|undefined}
     */
    InputTextData.prototype.enterPayload;
    /**
     * Payload that is sent when the user clicks on the icon
     * @type {?|undefined}
     */
    InputTextData.prototype.iconPayload;
    /**
     * Additional HTML Classes
     * @type {?|undefined}
     */
    InputTextData.prototype.classes;
    /**
     * Additional data for the component's logic
     * @type {?|undefined}
     */
    InputTextData.prototype._meta;
}
var InputTextComponent = /** @class */ (function () {
    function InputTextComponent() {
    }
    /**
     * @param {?} inputPayload
     * @param {?=} value
     * @return {?}
     */
    InputTextComponent.prototype.onChange = /**
     * @param {?} inputPayload
     * @param {?=} value
     * @return {?}
     */
    function (inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload: inputPayload, value: value });
    };
    InputTextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-input-text',
                    template: "<div *ngIf=\"data as input\"\n     class=\"n7-input-text\">\n    <label *ngIf=\"input.label\"\n           class=\"n7-input-text__label\"\n           for=\"{{ input.id }}\">\n      {{ input.label }}\n    </label>\n    <div class=\"n7-input-text__wrapper\">\n      <input type=\"text\"\n             id=\"{{ input.id }}\"\n             class=\"n7-input-text__text {{input.classes || ''}}\"\n             placeholder=\"{{input.placeholder || ''}}\"\n             [value]=\"input.value || null\"\n             [disabled]=\"input.disabled\"\n             (input)=\"onChange(input.inputPayload, $event.target.value)\"\n             (keyup.enter)=\"onChange(input.enterPayload, $event.target.value)\">\n      <span *ngIf=\"input.icon\"\n            class=\"n7-input-text__icon {{input.icon || ''}}\"\n            (click)=\"onChange(input.iconPayload)\">\n      </span>\n    </div>\n</div>\n"
                }] }
    ];
    InputTextComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return InputTextComponent;
}());
export { InputTextComponent };
if (false) {
    /** @type {?} */
    InputTextComponent.prototype.data;
    /** @type {?} */
    InputTextComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdGV4dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaW5wdXQtdGV4dC9pbnB1dC10ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJqRCxtQ0E2Q0M7Ozs7OztJQXpDQywyQkFBVzs7Ozs7SUFJWCxvQ0FBcUI7Ozs7O0lBSXJCLDhCQUErQjs7Ozs7SUFJL0IsOEJBQWU7Ozs7O0lBSWYsaUNBQW1COzs7OztJQUluQiw2QkFBYzs7Ozs7SUFJZCxxQ0FBbUI7Ozs7O0lBSW5CLHFDQUFtQjs7Ozs7SUFJbkIsb0NBQWtCOzs7OztJQUlsQixnQ0FBYzs7Ozs7SUFJZCw4QkFBWTs7QUFHZDtJQUFBO0lBYUEsQ0FBQzs7Ozs7O0lBSkMscUNBQVE7Ozs7O0lBQVIsVUFBUyxZQUFZLEVBQUUsS0FBTTtRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsWUFBWSxjQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7O2dCQVpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsKzNCQUFnQztpQkFDakM7Ozt1QkFFRSxLQUFLO3VCQUVMLEtBQUs7O0lBTVIseUJBQUM7Q0FBQSxBQWJELElBYUM7U0FUWSxrQkFBa0I7OztJQUM3QixrQ0FBNkI7O0lBRTdCLGtDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBJTlBVVC1URVhULnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBJbnB1dFRleHREYXRhXG4gKlxuICogQHByb3BlcnR5IGlkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBwbGFjZWhvbGRlciAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdmFsdWUgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGxhYmVsIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBkaXNhYmxlZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaW5wdXRQYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBlbnRlclBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGljb25QYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRUZXh0RGF0YSB7XG4gIC8qKlxuICAgKiBVbmlxdWUgSUQgZm9yIHRoZSB0ZXh0IGlucHV0IGVsZW1lbnRcbiAgICovXG4gIGlkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBQbGFjZWhvbGRlciB0ZXh0IGluc2lkZSB0aGUgaW5wdXQgYm94XG4gICAqL1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgLyoqXG4gICAqIERlZmF1bHQgdmFsdWUgb2YgdGhlIGlucHV0IGJveFxuICAgKi9cbiAgdmFsdWU/OiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuICAvKipcbiAgICogTGFiZWwgZm9yIHRoZSBpbnB1dCBib3hcbiAgICovXG4gIGxhYmVsPzogc3RyaW5nO1xuICAvKipcbiAgICogUHJldmVudHMgdGhlIHVzZXIgZnJvbSBjaGFuZ2luZyB0aGUgaW5wdXQncyB2YWx1ZVxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICogT3B0aW9uYWwgaWNvbiB0byByZW5kZXIgaW5zaWRlIHRoZSBpbnB1dCBib3ggKGVnLiBuNy1pY29uLXNlYXJjaClcbiAgICovXG4gIGljb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBQYXlsb2FkIHRoYXQgaXMgc2VudCB3aGVuIHRoZSB1c2VyIGNoYW5nZXMgdGhlIHZhbHVlXG4gICAqL1xuICBpbnB1dFBheWxvYWQ/OiBhbnk7XG4gIC8qKlxuICAgKiBQYXlsb2FkIHRoYXQgaXMgc2VudCB3aGVuIHRoZSB1c2VyIHByZXNzZXMgdGhlIFwiRW50ZXJcIiBrZXlcbiAgICovXG4gIGVudGVyUGF5bG9hZD86IGFueTtcbiAgLyoqXG4gICAqIFBheWxvYWQgdGhhdCBpcyBzZW50IHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBpY29uXG4gICAqL1xuICBpY29uUGF5bG9hZD86IGFueTtcbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgSFRNTCBDbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogYW55O1xuICAvKipcbiAgICogQWRkaXRpb25hbCBkYXRhIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1pbnB1dC10ZXh0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LXRleHQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRUZXh0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSW5wdXRUZXh0RGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DaGFuZ2UoaW5wdXRQYXlsb2FkLCB2YWx1ZT8pIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgeyBpbnB1dFBheWxvYWQsIHZhbHVlIH0pO1xuICB9XG59XG4iXX0=