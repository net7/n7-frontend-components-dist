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
export function IFacetData() { }
if (false) {
    /** @type {?} */
    IFacetData.prototype.sections;
    /** @type {?|undefined} */
    IFacetData.prototype.classes;
}
/**
 * Interface for FacetSection
 *
 * \@property inputs (required)
 * \@property classes (optional)
 * \@property _meta (optional)
 * @record
 */
export function IFacetSection() { }
if (false) {
    /** @type {?} */
    IFacetSection.prototype.inputs;
    /** @type {?|undefined} */
    IFacetSection.prototype.classes;
    /** @type {?|undefined} */
    IFacetSection.prototype._meta;
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
export function IFacetInputText() { }
if (false) {
    /** @type {?} */
    IFacetInputText.prototype.type;
    /** @type {?} */
    IFacetInputText.prototype.id;
    /** @type {?|undefined} */
    IFacetInputText.prototype.placeholder;
    /** @type {?|undefined} */
    IFacetInputText.prototype.value;
    /** @type {?|undefined} */
    IFacetInputText.prototype.label;
    /** @type {?|undefined} */
    IFacetInputText.prototype.disabled;
    /** @type {?|undefined} */
    IFacetInputText.prototype.icon;
    /** @type {?|undefined} */
    IFacetInputText.prototype.inputPayload;
    /** @type {?|undefined} */
    IFacetInputText.prototype.enterPayload;
    /** @type {?|undefined} */
    IFacetInputText.prototype.iconPayload;
    /** @type {?|undefined} */
    IFacetInputText.prototype.classes;
    /** @type {?|undefined} */
    IFacetInputText.prototype._meta;
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
export function IFacetInputSelect() { }
if (false) {
    /** @type {?} */
    IFacetInputSelect.prototype.type;
    /** @type {?} */
    IFacetInputSelect.prototype.id;
    /** @type {?} */
    IFacetInputSelect.prototype.options;
    /** @type {?|undefined} */
    IFacetInputSelect.prototype.label;
    /** @type {?|undefined} */
    IFacetInputSelect.prototype.disabled;
    /** @type {?|undefined} */
    IFacetInputSelect.prototype.payload;
    /** @type {?|undefined} */
    IFacetInputSelect.prototype.classes;
    /** @type {?|undefined} */
    IFacetInputSelect.prototype._meta;
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
export function IFacetInputCheckbox() { }
if (false) {
    /** @type {?} */
    IFacetInputCheckbox.prototype.type;
    /** @type {?} */
    IFacetInputCheckbox.prototype.id;
    /** @type {?} */
    IFacetInputCheckbox.prototype.label;
    /** @type {?|undefined} */
    IFacetInputCheckbox.prototype.checked;
    /** @type {?|undefined} */
    IFacetInputCheckbox.prototype.disabled;
    /** @type {?|undefined} */
    IFacetInputCheckbox.prototype.payload;
    /** @type {?|undefined} */
    IFacetInputCheckbox.prototype.classes;
    /** @type {?|undefined} */
    IFacetInputCheckbox.prototype._meta;
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
export function IFacetInputLink() { }
if (false) {
    /** @type {?} */
    IFacetInputLink.prototype.type;
    /** @type {?} */
    IFacetInputLink.prototype.text;
    /** @type {?|undefined} */
    IFacetInputLink.prototype.icon;
    /** @type {?|undefined} */
    IFacetInputLink.prototype.counter;
    /** @type {?|undefined} */
    IFacetInputLink.prototype.payload;
    /** @type {?|undefined} */
    IFacetInputLink.prototype.classes;
    /** @type {?|undefined} */
    IFacetInputLink.prototype._meta;
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
                    template: "<div *ngIf=\"data\" class=\"n7-facet\">\n    <div *ngFor=\"let section of data.sections\" class=\"n7-facet__section {{ section.classes || '' }}\">\n        <div *ngFor=\"let input of section.inputs\"\n            class=\"n7-facet__section-input n7-facet__section-input-{{ input.type }} {{ input.classes || '' }}\">\n\n            <ng-container [ngSwitch]=\"input.type\">\n\n                <!-- Checkbox -->\n                <ng-container *ngSwitchCase=\"'checkbox'\">\n                    <input type=\"checkbox\" id=\"{{ input.id }}\" class=\"n7-facet__input-checkbox-input\"\n                        [checked]=\"input.checked\"\n                        [disabled]=\"input.disabled\"\n                        (change)=\"onChange(input.payload, $event.target.checked)\">\n                    <label *ngIf=\"input.label\" class=\"n7-facet__checkbox-label\" for=\"{{ input.id }}\">\n                        {{ input.label }}\n                    </label>\n                </ng-container>\n\n                <!-- Text -->\n                <ng-container *ngSwitchCase=\"'text'\">\n                    <label *ngIf=\"input.label\" class=\"n7-facet__input-text-label\" for=\"{{ input.id }}\">\n                        {{ input.label }}\n                    </label>\n                    <div class=\"n7-facet__input-text-wrapper\">\n                        <input type=\"text\" id=\"{{ input.id }}\" class=\"n7-facet__input-text {{input.classes || ''}}\"\n                            placeholder=\"{{input.placeholder || ''}}\"\n                            [value]=\"input.value || null\"\n                            [disabled]=\"input.disabled\"\n                            (input)=\"onChange(input.inputPayload, $event.target.value)\"\n                            (keyup.enter)=\"onChange(input.enterPayload, $event.target.value)\">\n                        <span *ngIf=\"input.icon\" class=\"n7-facet__input-text-icon {{input.icon || ''}}\" \n                            (click)=\"onChange(input.iconPayload)\">\n                        </span>\n                    </div>\n                </ng-container>\n\n                <!-- Link -->\n                <ng-container *ngSwitchCase=\"'link'\">\n                    <div class=\"n7-facet__input-link {{ input.classes || '' }}\"\n                        (click)=\"onChange(input.payload)\">\n                        <span *ngIf=\"input.icon\" class=\"n7-facet__input-link-icon {{ input.icon }}\"></span>\n                        <span class=\"n7-facet__input-link-text\">{{ input.text }}</span>\n                        <span *ngIf=\"input.counter\" class=\"n7-facet__input-link-counter\">{{ input.counter }}</span>\n                    </div>\n                </ng-container>\n\n                <!-- Select -->\n                <ng-container *ngSwitchCase=\"'select'\">\n                    <label *ngIf=\"input.label\" for=\"{{ input.id }}\">{{ input.label }}</label>\n                    <select (change)=\"onChange(input.payload, $event.target.value)\" \n                        id=\"{{ input.id }}\"\n                        class=\"n7-facet__input-select {{ input.classes || '' }}\"\n                        [disabled]=\"input.disabled\">\n                        <option *ngFor=\"let option of input.options\" \n                            [value]=\"option.value\" \n                            [disabled]=\"option.disabled\" \n                            [selected]=\"option.selected\">{{ option.label }}</option>\n                    </select>\n                </ng-container>\n            </ng-container>\n\n        </div>\n    </div>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZhY2V0L2ZhY2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBUWpELGdDQUdDOzs7SUFGQyw4QkFBMEI7O0lBQzFCLDZCQUFpQjs7Ozs7Ozs7OztBQVVuQixtQ0FTQzs7O0lBUkMsK0JBS0U7O0lBQ0YsZ0NBQWlCOztJQUNqQiw4QkFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CZCxxQ0FhQzs7O0lBWkMsK0JBQWE7O0lBQ2IsNkJBQVc7O0lBQ1gsc0NBQXFCOztJQUNyQixnQ0FBK0I7O0lBQy9CLGdDQUFlOztJQUNmLG1DQUFtQjs7SUFDbkIsK0JBQWM7O0lBQ2QsdUNBQW1COztJQUNuQix1Q0FBbUI7O0lBQ25CLHNDQUFrQjs7SUFDbEIsa0NBQWM7O0lBQ2QsZ0NBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQmQsdUNBY0M7OztJQWJDLGlDQUFlOztJQUNmLCtCQUFXOztJQUNYLG9DQUtHOztJQUNILGtDQUFlOztJQUNmLHFDQUFtQjs7SUFDbkIsb0NBQWM7O0lBQ2Qsb0NBQWM7O0lBQ2Qsa0NBQVk7Ozs7Ozs7Ozs7Ozs7OztBQWVkLHlDQVNDOzs7SUFSQyxtQ0FBaUI7O0lBQ2pCLGlDQUFXOztJQUNYLG9DQUFjOztJQUNkLHNDQUFrQjs7SUFDbEIsdUNBQW1COztJQUNuQixzQ0FBYzs7SUFDZCxzQ0FBYzs7SUFDZCxvQ0FBWTs7Ozs7Ozs7Ozs7OztBQWFkLHFDQVFDOzs7SUFQQywrQkFBYTs7SUFDYiwrQkFBYTs7SUFDYiwrQkFBYzs7SUFDZCxrQ0FBaUI7O0lBQ2pCLGtDQUFjOztJQUNkLGtDQUFjOztJQUNkLGdDQUFZOztBQUdkO0lBQUE7SUFZQSxDQUFDOzs7Ozs7SUFKQyxpQ0FBUTs7Ozs7SUFBUixVQUFTLFlBQVksRUFBRSxLQUFNO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLGNBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Z0JBWEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQiw4aEhBQTJCO2lCQUM1Qjs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUFNUixxQkFBQztDQUFBLEFBWkQsSUFZQztTQVJZLGNBQWM7OztJQUN6Qiw4QkFBMEI7O0lBQzFCLDhCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGQUNFVC50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgRmFjZXRDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBzZWN0aW9ucyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpIFxuICovXG5leHBvcnQgaW50ZXJmYWNlIElGYWNldERhdGEge1xuICBzZWN0aW9uczogSUZhY2V0U2VjdGlvbltdO1xuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgRmFjZXRTZWN0aW9uXG4gKlxuICogQHByb3BlcnR5IGlucHV0cyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElGYWNldFNlY3Rpb24ge1xuICBpbnB1dHM6IEFycmF5PFxuICAgIElGYWNldElucHV0Q2hlY2tib3ggfFxuICAgIElGYWNldElucHV0TGluayB8XG4gICAgSUZhY2V0SW5wdXRUZXh0IHxcbiAgICBJRmFjZXRJbnB1dFNlbGVjdFxuICA+O1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEZhY2V0SW5wdXRUZXh0XG4gKlxuICogQHByb3BlcnR5IHR5cGUgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGlkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBwbGFjZWhvbGRlciAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdmFsdWUgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGxhYmVsIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBkaXNhYmxlZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaW5wdXRQYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBlbnRlclBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGljb25QYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUZhY2V0SW5wdXRUZXh0IHtcbiAgdHlwZTogJ3RleHQnO1xuICBpZDogc3RyaW5nO1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgdmFsdWU/OiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuICBsYWJlbD86IHN0cmluZztcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBpY29uPzogc3RyaW5nO1xuICBpbnB1dFBheWxvYWQ/OiBhbnk7XG4gIGVudGVyUGF5bG9hZD86IGFueTtcbiAgaWNvblBheWxvYWQ/OiBhbnk7XG4gIGNsYXNzZXM/OiBhbnk7XG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgRmFjZXRJbnB1dFNlbGVjdFxuICpcbiAqIEBwcm9wZXJ0eSB0eXBlIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBpZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgb3B0aW9ucyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgbGFiZWwgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGRpc2FibGVkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUZhY2V0SW5wdXRTZWxlY3Qge1xuICB0eXBlOiAnc2VsZWN0JztcbiAgaWQ6IHN0cmluZztcbiAgb3B0aW9uczogQXJyYXk8eyBcbiAgICBsYWJlbDogc3RyaW5nLCBcbiAgICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBcbiAgICBzZWxlY3RlZD86IGJvb2xlYW4sXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIH0+O1xuICBsYWJlbD86IHN0cmluZztcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBwYXlsb2FkPzogYW55O1xuICBjbGFzc2VzPzogYW55O1xuICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEZhY2V0SW5wdXRDaGVja2JveFxuICpcbiAqIEBwcm9wZXJ0eSB0eXBlIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBpZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgbGFiZWwgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNoZWNrZWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGRpc2FibGVkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUZhY2V0SW5wdXRDaGVja2JveCB7XG4gIHR5cGU6ICdjaGVja2JveCc7XG4gIGlkOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIHBheWxvYWQ/OiBhbnk7XG4gIGNsYXNzZXM/OiBhbnk7XG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgRmFjZXRJbnB1dExpbmtcbiAqXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY291bnRlciAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElGYWNldElucHV0TGluayB7XG4gIHR5cGU6ICdsaW5rJztcbiAgdGV4dDogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICBjb3VudGVyPzogbnVtYmVyO1xuICBwYXlsb2FkPzogYW55O1xuICBjbGFzc2VzPzogYW55O1xuICBfbWV0YT86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctZmFjZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmFjZXQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRmFjZXRDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJRmFjZXREYXRhO1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DaGFuZ2UoaW5wdXRQYXlsb2FkLCB2YWx1ZT8pIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgeyBpbnB1dFBheWxvYWQsIHZhbHVlIH0pO1xuICB9XG59Il19