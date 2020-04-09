/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/facet/facet.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// FACET.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for FacetComponent's "data"
 *
 * \@property sections (required)
 * \@property classes (optional)
 * @record
 */
export function FacetData() { }
if (false) {
    /** @type {?} */
    FacetData.prototype.sections;
    /** @type {?|undefined} */
    FacetData.prototype.classes;
}
/**
 * Interface for FacetSection
 *
 * \@property inputs (required)
 * \@property classes (optional)
 * \@property _meta (optional)
 * @record
 */
export function FacetSection() { }
if (false) {
    /** @type {?} */
    FacetSection.prototype.inputs;
    /** @type {?|undefined} */
    FacetSection.prototype.classes;
    /** @type {?|undefined} */
    FacetSection.prototype._meta;
}
/**
 * Interface for FacetInputText
 *
 * \@property type (required)
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
export function FacetInputText() { }
if (false) {
    /** @type {?} */
    FacetInputText.prototype.type;
    /** @type {?} */
    FacetInputText.prototype.id;
    /** @type {?|undefined} */
    FacetInputText.prototype.placeholder;
    /** @type {?|undefined} */
    FacetInputText.prototype.value;
    /** @type {?|undefined} */
    FacetInputText.prototype.label;
    /** @type {?|undefined} */
    FacetInputText.prototype.disabled;
    /** @type {?|undefined} */
    FacetInputText.prototype.icon;
    /** @type {?|undefined} */
    FacetInputText.prototype.inputPayload;
    /** @type {?|undefined} */
    FacetInputText.prototype.enterPayload;
    /** @type {?|undefined} */
    FacetInputText.prototype.iconPayload;
    /** @type {?|undefined} */
    FacetInputText.prototype.classes;
    /** @type {?|undefined} */
    FacetInputText.prototype._meta;
}
/**
 * Interface for FacetInputSelect
 *
 * \@property type (required)
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
export function FacetInputSelect() { }
if (false) {
    /** @type {?} */
    FacetInputSelect.prototype.type;
    /** @type {?} */
    FacetInputSelect.prototype.id;
    /** @type {?} */
    FacetInputSelect.prototype.options;
    /** @type {?|undefined} */
    FacetInputSelect.prototype.label;
    /** @type {?|undefined} */
    FacetInputSelect.prototype.disabled;
    /** @type {?|undefined} */
    FacetInputSelect.prototype.payload;
    /** @type {?|undefined} */
    FacetInputSelect.prototype.classes;
    /** @type {?|undefined} */
    FacetInputSelect.prototype._meta;
}
/**
 * Interface for FacetInputCheckbox
 *
 * \@property type (required)
 * \@property id (required)
 * \@property label (required)
 * \@property checked (optional)
 * \@property disabled (optional)
 * \@property payload (optional)
 * \@property classes (optional)
 * \@property _meta (optional)
 * @record
 */
export function FacetInputCheckbox() { }
if (false) {
    /** @type {?} */
    FacetInputCheckbox.prototype.type;
    /** @type {?} */
    FacetInputCheckbox.prototype.id;
    /** @type {?} */
    FacetInputCheckbox.prototype.label;
    /** @type {?|undefined} */
    FacetInputCheckbox.prototype.checked;
    /** @type {?|undefined} */
    FacetInputCheckbox.prototype.disabled;
    /** @type {?|undefined} */
    FacetInputCheckbox.prototype.payload;
    /** @type {?|undefined} */
    FacetInputCheckbox.prototype.classes;
    /** @type {?|undefined} */
    FacetInputCheckbox.prototype._meta;
}
/**
 * Interface for FacetInputLink
 *
 * \@property icon (optional)
 * \@property text (required)
 * \@property counter (optional)
 * \@property payload (optional)
 * \@property classes (optional)
 * \@property _meta (optional)
 * @record
 */
export function FacetInputLink() { }
if (false) {
    /** @type {?} */
    FacetInputLink.prototype.type;
    /** @type {?} */
    FacetInputLink.prototype.text;
    /** @type {?|undefined} */
    FacetInputLink.prototype.icon;
    /** @type {?|undefined} */
    FacetInputLink.prototype.counter;
    /** @type {?|undefined} */
    FacetInputLink.prototype.payload;
    /** @type {?|undefined} */
    FacetInputLink.prototype.classes;
    /** @type {?|undefined} */
    FacetInputLink.prototype._meta;
}
var FacetComponent = /** @class */ (function () {
    function FacetComponent() {
    }
    /**
     * @param {?} inputPayload
     * @param {?=} value
     * @return {?}
     */
    FacetComponent.prototype.onChange = /**
     * @param {?} inputPayload
     * @param {?=} value
     * @return {?}
     */
    function (inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload: inputPayload, value: value });
    };
    FacetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-facet',
                    template: "<div *ngIf=\"data\" class=\"n7-facet\">\n    <div *ngFor=\"let section of data.sections\" class=\"n7-facet__section {{ section.classes || '' }}\">\n        <div *ngFor=\"let input of section.inputs\"\n            class=\"n7-facet__section-input n7-facet__section-input-{{ input.type }} {{ input.classes || '' }}\">\n\n            <ng-container [ngSwitch]=\"input.type\">\n\n                <!-- Checkbox -->\n                <ng-container *ngSwitchCase=\"'checkbox'\">\n                    <input type=\"checkbox\" id=\"{{ input.id }}\" class=\"n7-facet__input-checkbox-input\"\n                        [checked]=\"input.checked\"\n                        [disabled]=\"input.disabled\"\n                        (change)=\"onChange(input.payload, $event.target.checked)\">\n                    <label *ngIf=\"input.label\" class=\"n7-facet__checkbox-label\" for=\"{{ input.id }}\">\n                        {{ input.label }}\n                    </label>\n                </ng-container>\n\n                <!-- Text -->\n                <ng-container *ngSwitchCase=\"'text'\">\n                    <label *ngIf=\"input.label\" class=\"n7-facet__input-text-label\" for=\"{{ input.id }}\">\n                        {{ input.label }}\n                    </label>\n                    <div class=\"n7-facet__input-text-wrapper\">\n                        <input type=\"text\" id=\"{{ input.id }}\" class=\"n7-facet__input-text {{input.classes || ''}}\"\n                            placeholder=\"{{input.placeholder || ''}}\"\n                            [value]=\"input.value || null\"\n                            [disabled]=\"input.disabled\"\n                            (input)=\"onChange(input.inputPayload, $event.target.value)\"\n                            (keyup.enter)=\"onChange(input.enterPayload, $event.target.value)\">\n                        <span *ngIf=\"input.icon\" class=\"n7-facet__input-text-icon {{input.icon || ''}}\" \n                            (click)=\"onChange(input.iconPayload)\">\n                        </span>\n                    </div>\n                </ng-container>\n\n                <!-- Link -->\n                <ng-container *ngSwitchCase=\"'link'\">\n                    <div class=\"n7-facet__input-link {{ input.classes || '' }}\"\n                        (click)=\"onChange(input.payload)\">\n                        <span *ngIf=\"input.icon\" class=\"n7-facet__input-link-icon {{ input.icon }}\"></span>\n                        <span class=\"n7-facet__input-link-text\">{{ input.text }}</span>\n                        <span *ngIf=\"input.counter || input.counter === 0\" class=\"n7-facet__input-link-counter\">{{ input.counter }}</span>\n                    </div>\n                </ng-container>\n\n                <!-- Select -->\n                <ng-container *ngSwitchCase=\"'select'\">\n                    <label *ngIf=\"input.label\" for=\"{{ input.id }}\">{{ input.label }}</label>\n                    <select (change)=\"onChange(input.payload, $event.target.value)\" \n                        id=\"{{ input.id }}\"\n                        class=\"n7-facet__input-select {{ input.classes || '' }}\"\n                        [disabled]=\"input.disabled\">\n                        <option *ngFor=\"let option of input.options\" \n                            [value]=\"option.value\" \n                            [disabled]=\"option.disabled\" \n                            [selected]=\"option.selected\">{{ option.label }}</option>\n                    </select>\n                </ng-container>\n            </ng-container>\n\n        </div>\n    </div>\n</div>"
                }] }
    ];
    FacetComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return FacetComponent;
}());
export { FacetComponent };
if (false) {
    /** @type {?} */
    FacetComponent.prototype.data;
    /** @type {?} */
    FacetComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZhY2V0L2ZhY2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBUWpELCtCQUdDOzs7SUFGQyw2QkFBeUI7O0lBQ3pCLDRCQUFpQjs7Ozs7Ozs7OztBQVVuQixrQ0FTQzs7O0lBUkMsOEJBS0U7O0lBQ0YsK0JBQWlCOztJQUNqQiw2QkFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CZCxvQ0FhQzs7O0lBWkMsOEJBQWE7O0lBQ2IsNEJBQVc7O0lBQ1gscUNBQXFCOztJQUNyQiwrQkFBK0I7O0lBQy9CLCtCQUFlOztJQUNmLGtDQUFtQjs7SUFDbkIsOEJBQWM7O0lBQ2Qsc0NBQW1COztJQUNuQixzQ0FBbUI7O0lBQ25CLHFDQUFrQjs7SUFDbEIsaUNBQWM7O0lBQ2QsK0JBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQmQsc0NBY0M7OztJQWJDLGdDQUFlOztJQUNmLDhCQUFXOztJQUNYLG1DQUtHOztJQUNILGlDQUFlOztJQUNmLG9DQUFtQjs7SUFDbkIsbUNBQWM7O0lBQ2QsbUNBQWM7O0lBQ2QsaUNBQVk7Ozs7Ozs7Ozs7Ozs7OztBQWVkLHdDQVNDOzs7SUFSQyxrQ0FBaUI7O0lBQ2pCLGdDQUFXOztJQUNYLG1DQUFjOztJQUNkLHFDQUFrQjs7SUFDbEIsc0NBQW1COztJQUNuQixxQ0FBYzs7SUFDZCxxQ0FBYzs7SUFDZCxtQ0FBWTs7Ozs7Ozs7Ozs7OztBQWFkLG9DQVFDOzs7SUFQQyw4QkFBYTs7SUFDYiw4QkFBYTs7SUFDYiw4QkFBYzs7SUFDZCxpQ0FBaUI7O0lBQ2pCLGlDQUFjOztJQUNkLGlDQUFjOztJQUNkLCtCQUFZOztBQUdkO0lBQUE7SUFhQSxDQUFDOzs7Ozs7SUFKQyxpQ0FBUTs7Ozs7SUFBUixVQUFTLFlBQVksRUFBRSxLQUFNO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLGNBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixxakhBQTJCO2lCQUM1Qjs7O3VCQUVFLEtBQUs7dUJBRUwsS0FBSzs7SUFNUixxQkFBQztDQUFBLEFBYkQsSUFhQztTQVRZLGNBQWM7OztJQUN6Qiw4QkFBeUI7O0lBRXpCLDhCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGQUNFVC50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgRmFjZXRDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBzZWN0aW9ucyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRmFjZXREYXRhIHtcbiAgc2VjdGlvbnM6IEZhY2V0U2VjdGlvbltdO1xuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgRmFjZXRTZWN0aW9uXG4gKlxuICogQHByb3BlcnR5IGlucHV0cyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZhY2V0U2VjdGlvbiB7XG4gIGlucHV0czogQXJyYXk8XG4gICAgRmFjZXRJbnB1dENoZWNrYm94IHxcbiAgICBGYWNldElucHV0TGluayB8XG4gICAgRmFjZXRJbnB1dFRleHQgfFxuICAgIEZhY2V0SW5wdXRTZWxlY3RcbiAgPjtcbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBGYWNldElucHV0VGV4dFxuICpcbiAqIEBwcm9wZXJ0eSB0eXBlIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBpZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgcGxhY2Vob2xkZXIgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHZhbHVlIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBsYWJlbCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgZGlzYWJsZWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGlucHV0UGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgZW50ZXJQYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpY29uUGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZhY2V0SW5wdXRUZXh0IHtcbiAgdHlwZTogJ3RleHQnO1xuICBpZDogc3RyaW5nO1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgdmFsdWU/OiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuICBsYWJlbD86IHN0cmluZztcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBpY29uPzogc3RyaW5nO1xuICBpbnB1dFBheWxvYWQ/OiBhbnk7XG4gIGVudGVyUGF5bG9hZD86IGFueTtcbiAgaWNvblBheWxvYWQ/OiBhbnk7XG4gIGNsYXNzZXM/OiBhbnk7XG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgRmFjZXRJbnB1dFNlbGVjdFxuICpcbiAqIEBwcm9wZXJ0eSB0eXBlIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBpZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgb3B0aW9ucyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgbGFiZWwgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGRpc2FibGVkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRmFjZXRJbnB1dFNlbGVjdCB7XG4gIHR5cGU6ICdzZWxlY3QnO1xuICBpZDogc3RyaW5nO1xuICBvcHRpb25zOiBBcnJheTx7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xuICAgIHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIH0+O1xuICBsYWJlbD86IHN0cmluZztcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBwYXlsb2FkPzogYW55O1xuICBjbGFzc2VzPzogYW55O1xuICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEZhY2V0SW5wdXRDaGVja2JveFxuICpcbiAqIEBwcm9wZXJ0eSB0eXBlIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBpZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgbGFiZWwgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNoZWNrZWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGRpc2FibGVkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRmFjZXRJbnB1dENoZWNrYm94IHtcbiAgdHlwZTogJ2NoZWNrYm94JztcbiAgaWQ6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgcGF5bG9hZD86IGFueTtcbiAgY2xhc3Nlcz86IGFueTtcbiAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBGYWNldElucHV0TGlua1xuICpcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjb3VudGVyIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRmFjZXRJbnB1dExpbmsge1xuICB0eXBlOiAnbGluayc7XG4gIHRleHQ6IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgY291bnRlcj86IG51bWJlcjtcbiAgcGF5bG9hZD86IGFueTtcbiAgY2xhc3Nlcz86IGFueTtcbiAgX21ldGE/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWZhY2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZhY2V0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEZhY2V0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogRmFjZXREYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNoYW5nZShpbnB1dFBheWxvYWQsIHZhbHVlPykge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7IGlucHV0UGF5bG9hZCwgdmFsdWUgfSk7XG4gIH1cbn1cbiJdfQ==