/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZhY2V0L2ZhY2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7QUFRakQsZ0NBR0M7OztJQUZDLDhCQUEwQjs7SUFDMUIsNkJBQWlCOzs7Ozs7Ozs7O0FBVW5CLG1DQVNDOzs7SUFSQywrQkFLRTs7SUFDRixnQ0FBaUI7O0lBQ2pCLDhCQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJkLHFDQWFDOzs7SUFaQywrQkFBYTs7SUFDYiw2QkFBVzs7SUFDWCxzQ0FBcUI7O0lBQ3JCLGdDQUErQjs7SUFDL0IsZ0NBQWU7O0lBQ2YsbUNBQW1COztJQUNuQiwrQkFBYzs7SUFDZCx1Q0FBbUI7O0lBQ25CLHVDQUFtQjs7SUFDbkIsc0NBQWtCOztJQUNsQixrQ0FBYzs7SUFDZCxnQ0FBWTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCZCx1Q0FjQzs7O0lBYkMsaUNBQWU7O0lBQ2YsK0JBQVc7O0lBQ1gsb0NBS0c7O0lBQ0gsa0NBQWU7O0lBQ2YscUNBQW1COztJQUNuQixvQ0FBYzs7SUFDZCxvQ0FBYzs7SUFDZCxrQ0FBWTs7Ozs7Ozs7Ozs7Ozs7O0FBZWQseUNBU0M7OztJQVJDLG1DQUFpQjs7SUFDakIsaUNBQVc7O0lBQ1gsb0NBQWM7O0lBQ2Qsc0NBQWtCOztJQUNsQix1Q0FBbUI7O0lBQ25CLHNDQUFjOztJQUNkLHNDQUFjOztJQUNkLG9DQUFZOzs7Ozs7Ozs7Ozs7O0FBYWQscUNBUUM7OztJQVBDLCtCQUFhOztJQUNiLCtCQUFhOztJQUNiLCtCQUFjOztJQUNkLGtDQUFpQjs7SUFDakIsa0NBQWM7O0lBQ2Qsa0NBQWM7O0lBQ2QsZ0NBQVk7O0FBR2Q7SUFBQTtJQVlBLENBQUM7Ozs7OztJQUpDLGlDQUFROzs7OztJQUFSLFVBQVMsWUFBWSxFQUFFLEtBQU07UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksY0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDOztnQkFYRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLHFqSEFBMkI7aUJBQzVCOzs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLOztJQU1SLHFCQUFDO0NBQUEsQUFaRCxJQVlDO1NBUlksY0FBYzs7O0lBQ3pCLDhCQUEwQjs7SUFDMUIsOEJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZBQ0VULnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBGYWNldENvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IHNlY3Rpb25zIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbCkgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUZhY2V0RGF0YSB7XG4gIHNlY3Rpb25zOiBJRmFjZXRTZWN0aW9uW107XG4gIGNsYXNzZXM/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBGYWNldFNlY3Rpb25cbiAqXG4gKiBAcHJvcGVydHkgaW5wdXRzIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUZhY2V0U2VjdGlvbiB7XG4gIGlucHV0czogQXJyYXk8XG4gICAgSUZhY2V0SW5wdXRDaGVja2JveCB8XG4gICAgSUZhY2V0SW5wdXRMaW5rIHxcbiAgICBJRmFjZXRJbnB1dFRleHQgfFxuICAgIElGYWNldElucHV0U2VsZWN0XG4gID47XG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgRmFjZXRJbnB1dFRleHRcbiAqXG4gKiBAcHJvcGVydHkgdHlwZSAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgaWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHBsYWNlaG9sZGVyIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB2YWx1ZSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgbGFiZWwgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGRpc2FibGVkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpbnB1dFBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGVudGVyUGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaWNvblBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRmFjZXRJbnB1dFRleHQge1xuICB0eXBlOiAndGV4dCc7XG4gIGlkOiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICB2YWx1ZT86IHN0cmluZyB8IG51bWJlciB8IG51bGw7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGljb24/OiBzdHJpbmc7XG4gIGlucHV0UGF5bG9hZD86IGFueTtcbiAgZW50ZXJQYXlsb2FkPzogYW55O1xuICBpY29uUGF5bG9hZD86IGFueTtcbiAgY2xhc3Nlcz86IGFueTtcbiAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBGYWNldElucHV0U2VsZWN0XG4gKlxuICogQHByb3BlcnR5IHR5cGUgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGlkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBvcHRpb25zIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBsYWJlbCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgZGlzYWJsZWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRmFjZXRJbnB1dFNlbGVjdCB7XG4gIHR5cGU6ICdzZWxlY3QnO1xuICBpZDogc3RyaW5nO1xuICBvcHRpb25zOiBBcnJheTx7IFxuICAgIGxhYmVsOiBzdHJpbmcsIFxuICAgIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIFxuICAgIHNlbGVjdGVkPzogYm9vbGVhbixcbiAgICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgfT47XG4gIGxhYmVsPzogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIHBheWxvYWQ/OiBhbnk7XG4gIGNsYXNzZXM/OiBhbnk7XG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgRmFjZXRJbnB1dENoZWNrYm94XG4gKlxuICogQHByb3BlcnR5IHR5cGUgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGlkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBsYWJlbCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2hlY2tlZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgZGlzYWJsZWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRmFjZXRJbnB1dENoZWNrYm94IHtcbiAgdHlwZTogJ2NoZWNrYm94JztcbiAgaWQ6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgcGF5bG9hZD86IGFueTtcbiAgY2xhc3Nlcz86IGFueTtcbiAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBGYWNldElucHV0TGlua1xuICpcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjb3VudGVyIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUZhY2V0SW5wdXRMaW5rIHtcbiAgdHlwZTogJ2xpbmsnO1xuICB0ZXh0OiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIGNvdW50ZXI/OiBudW1iZXI7XG4gIHBheWxvYWQ/OiBhbnk7XG4gIGNsYXNzZXM/OiBhbnk7XG4gIF9tZXRhPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1mYWNldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9mYWNldC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBGYWNldENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElGYWNldERhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNoYW5nZShpbnB1dFBheWxvYWQsIHZhbHVlPykge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7IGlucHV0UGF5bG9hZCwgdmFsdWUgfSk7XG4gIH1cbn0iXX0=