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
export class FacetComponent {
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
FacetComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-facet',
                template: "<div *ngIf=\"data\" class=\"n7-facet\">\r\n    <div *ngFor=\"let section of data.sections\" class=\"n7-facet__section {{ section.classes || '' }}\">\r\n        <div *ngFor=\"let input of section.inputs\"\r\n            class=\"n7-facet__section-input n7-facet__section-input-{{ input.type }} {{ input.classes || '' }}\">\r\n\r\n            <ng-container [ngSwitch]=\"input.type\">\r\n\r\n                <!-- Checkbox -->\r\n                <ng-container *ngSwitchCase=\"'checkbox'\">\r\n                    <input type=\"checkbox\" id=\"{{ input.id }}\" class=\"n7-facet__input-checkbox-input\"\r\n                        [checked]=\"input.checked\"\r\n                        [disabled]=\"input.disabled\"\r\n                        (change)=\"onChange(input.payload, $event.target.checked)\">\r\n                    <label *ngIf=\"input.label\" class=\"n7-facet__checkbox-label\" for=\"{{ input.id }}\">\r\n                        {{ input.label }}\r\n                    </label>\r\n                </ng-container>\r\n\r\n                <!-- Text -->\r\n                <ng-container *ngSwitchCase=\"'text'\">\r\n                    <label *ngIf=\"input.label\" class=\"n7-facet__input-text-label\" for=\"{{ input.id }}\">\r\n                        {{ input.label }}\r\n                    </label>\r\n                    <div class=\"n7-facet__input-text-wrapper\">\r\n                        <input type=\"text\" id=\"{{ input.id }}\" class=\"n7-facet__input-text {{input.classes || ''}}\"\r\n                            placeholder=\"{{input.placeholder || ''}}\"\r\n                            [value]=\"input.value || null\"\r\n                            [disabled]=\"input.disabled\"\r\n                            (input)=\"onChange(input.inputPayload, $event.target.value)\"\r\n                            (keyup.enter)=\"onChange(input.enterPayload, $event.target.value)\">\r\n                        <span *ngIf=\"input.icon\" class=\"n7-facet__input-text-icon {{input.icon || ''}}\" \r\n                            (click)=\"onChange(input.iconPayload)\">\r\n                        </span>\r\n                    </div>\r\n                </ng-container>\r\n\r\n                <!-- Link -->\r\n                <ng-container *ngSwitchCase=\"'link'\">\r\n                    <div class=\"n7-facet__input-link {{ input.classes || '' }}\"\r\n                        (click)=\"onChange(input.payload)\">\r\n                        <span *ngIf=\"input.icon\" class=\"n7-facet__input-link-icon {{ input.icon }}\"></span>\r\n                        <span class=\"n7-facet__input-link-text\">{{ input.text }}</span>\r\n                        <span *ngIf=\"input.counter || input.counter === 0\" class=\"n7-facet__input-link-counter\">{{ input.counter }}</span>\r\n                    </div>\r\n                </ng-container>\r\n\r\n                <!-- Select -->\r\n                <ng-container *ngSwitchCase=\"'select'\">\r\n                    <label *ngIf=\"input.label\" for=\"{{ input.id }}\">{{ input.label }}</label>\r\n                    <select (change)=\"onChange(input.payload, $event.target.value)\" \r\n                        id=\"{{ input.id }}\"\r\n                        class=\"n7-facet__input-select {{ input.classes || '' }}\"\r\n                        [disabled]=\"input.disabled\">\r\n                        <option *ngFor=\"let option of input.options\" \r\n                            [value]=\"option.value\" \r\n                            [disabled]=\"option.disabled\" \r\n                            [selected]=\"option.selected\">{{ option.label }}</option>\r\n                    </select>\r\n                </ng-container>\r\n            </ng-container>\r\n\r\n        </div>\r\n    </div>\r\n</div>"
            }] }
];
FacetComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FacetComponent.prototype.data;
    /** @type {?} */
    FacetComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZhY2V0L2ZhY2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBUWpELGdDQUdDOzs7SUFGQyw4QkFBMEI7O0lBQzFCLDZCQUFpQjs7Ozs7Ozs7OztBQVVuQixtQ0FTQzs7O0lBUkMsK0JBS0U7O0lBQ0YsZ0NBQWlCOztJQUNqQiw4QkFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CZCxxQ0FhQzs7O0lBWkMsK0JBQWE7O0lBQ2IsNkJBQVc7O0lBQ1gsc0NBQXFCOztJQUNyQixnQ0FBK0I7O0lBQy9CLGdDQUFlOztJQUNmLG1DQUFtQjs7SUFDbkIsK0JBQWM7O0lBQ2QsdUNBQW1COztJQUNuQix1Q0FBbUI7O0lBQ25CLHNDQUFrQjs7SUFDbEIsa0NBQWM7O0lBQ2QsZ0NBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQmQsdUNBY0M7OztJQWJDLGlDQUFlOztJQUNmLCtCQUFXOztJQUNYLG9DQUtHOztJQUNILGtDQUFlOztJQUNmLHFDQUFtQjs7SUFDbkIsb0NBQWM7O0lBQ2Qsb0NBQWM7O0lBQ2Qsa0NBQVk7Ozs7Ozs7Ozs7Ozs7OztBQWVkLHlDQVNDOzs7SUFSQyxtQ0FBaUI7O0lBQ2pCLGlDQUFXOztJQUNYLG9DQUFjOztJQUNkLHNDQUFrQjs7SUFDbEIsdUNBQW1COztJQUNuQixzQ0FBYzs7SUFDZCxzQ0FBYzs7SUFDZCxvQ0FBWTs7Ozs7Ozs7Ozs7OztBQWFkLHFDQVFDOzs7SUFQQywrQkFBYTs7SUFDYiwrQkFBYTs7SUFDYiwrQkFBYzs7SUFDZCxrQ0FBaUI7O0lBQ2pCLGtDQUFjOztJQUNkLGtDQUFjOztJQUNkLGdDQUFZOztBQU9kLE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUFJekIsUUFBUSxDQUFDLFlBQVksRUFBRSxLQUFNO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7WUFYRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLG1ySEFBMkI7YUFDNUI7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETiw4QkFBMEI7O0lBQzFCLDhCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEZBQ0VULnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBGYWNldENvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBzZWN0aW9ucyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbCkgXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElGYWNldERhdGEge1xyXG4gIHNlY3Rpb25zOiBJRmFjZXRTZWN0aW9uW107XHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgRmFjZXRTZWN0aW9uXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBpbnB1dHMgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElGYWNldFNlY3Rpb24ge1xyXG4gIGlucHV0czogQXJyYXk8XHJcbiAgICBJRmFjZXRJbnB1dENoZWNrYm94IHxcclxuICAgIElGYWNldElucHV0TGluayB8XHJcbiAgICBJRmFjZXRJbnB1dFRleHQgfFxyXG4gICAgSUZhY2V0SW5wdXRTZWxlY3RcclxuICA+O1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEZhY2V0SW5wdXRUZXh0XHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB0eXBlIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGlkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHBsYWNlaG9sZGVyIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHZhbHVlIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGxhYmVsIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGRpc2FibGVkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaW5wdXRQYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGVudGVyUGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpY29uUGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZhY2V0SW5wdXRUZXh0IHtcclxuICB0eXBlOiAndGV4dCc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcclxuICB2YWx1ZT86IHN0cmluZyB8IG51bWJlciB8IG51bGw7XHJcbiAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIGljb24/OiBzdHJpbmc7XHJcbiAgaW5wdXRQYXlsb2FkPzogYW55O1xyXG4gIGVudGVyUGF5bG9hZD86IGFueTtcclxuICBpY29uUGF5bG9hZD86IGFueTtcclxuICBjbGFzc2VzPzogYW55O1xyXG4gIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBGYWNldElucHV0U2VsZWN0XHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB0eXBlIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGlkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IG9wdGlvbnMgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgbGFiZWwgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgZGlzYWJsZWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRmFjZXRJbnB1dFNlbGVjdCB7XHJcbiAgdHlwZTogJ3NlbGVjdCc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBvcHRpb25zOiBBcnJheTx7IFxyXG4gICAgbGFiZWw6IHN0cmluZywgXHJcbiAgICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBcclxuICAgIHNlbGVjdGVkPzogYm9vbGVhbixcclxuICAgIGRpc2FibGVkPzogYm9vbGVhblxyXG4gIH0+O1xyXG4gIGxhYmVsPzogc3RyaW5nO1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICBwYXlsb2FkPzogYW55O1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEZhY2V0SW5wdXRDaGVja2JveFxyXG4gKlxyXG4gKiBAcHJvcGVydHkgdHlwZSAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBpZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBsYWJlbCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjaGVja2VkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGRpc2FibGVkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElGYWNldElucHV0Q2hlY2tib3gge1xyXG4gIHR5cGU6ICdjaGVja2JveCc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIGNoZWNrZWQ/OiBib29sZWFuO1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICBwYXlsb2FkPzogYW55O1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEZhY2V0SW5wdXRMaW5rXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY291bnRlciAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRmFjZXRJbnB1dExpbmsge1xyXG4gIHR5cGU6ICdsaW5rJztcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgaWNvbj86IHN0cmluZztcclxuICBjb3VudGVyPzogbnVtYmVyO1xyXG4gIHBheWxvYWQ/OiBhbnk7XHJcbiAgY2xhc3Nlcz86IGFueTtcclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1mYWNldCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ZhY2V0Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWNldENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogSUZhY2V0RGF0YTtcclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIG9uQ2hhbmdlKGlucHV0UGF5bG9hZCwgdmFsdWU/KSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7IGlucHV0UGF5bG9hZCwgdmFsdWUgfSk7XHJcbiAgfVxyXG59Il19