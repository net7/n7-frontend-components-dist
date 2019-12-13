/**
 * @fileoverview added by tsickle
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
                    template: "<div *ngIf=\"data\" class=\"n7-facet\">\r\n    <div *ngFor=\"let section of data.sections\" class=\"n7-facet__section {{ section.classes || '' }}\">\r\n        <div *ngFor=\"let input of section.inputs\"\r\n            class=\"n7-facet__section-input n7-facet__section-input-{{ input.type }} {{ input.classes || '' }}\">\r\n\r\n            <ng-container [ngSwitch]=\"input.type\">\r\n\r\n                <!-- Checkbox -->\r\n                <ng-container *ngSwitchCase=\"'checkbox'\">\r\n                    <input type=\"checkbox\" id=\"{{ input.id }}\" class=\"n7-facet__input-checkbox-input\"\r\n                        [checked]=\"input.checked\"\r\n                        [disabled]=\"input.disabled\"\r\n                        (change)=\"onChange(input.payload, $event.target.checked)\">\r\n                    <label *ngIf=\"input.label\" class=\"n7-facet__checkbox-label\" for=\"{{ input.id }}\">\r\n                        {{ input.label }}\r\n                    </label>\r\n                </ng-container>\r\n\r\n                <!-- Text -->\r\n                <ng-container *ngSwitchCase=\"'text'\">\r\n                    <label *ngIf=\"input.label\" class=\"n7-facet__input-text-label\" for=\"{{ input.id }}\">\r\n                        {{ input.label }}\r\n                    </label>\r\n                    <div class=\"n7-facet__input-text-wrapper\">\r\n                        <input type=\"text\" id=\"{{ input.id }}\" class=\"n7-facet__input-text {{input.classes || ''}}\"\r\n                            placeholder=\"{{input.placeholder || ''}}\"\r\n                            [value]=\"input.value || null\"\r\n                            [disabled]=\"input.disabled\"\r\n                            (input)=\"onChange(input.inputPayload, $event.target.value)\"\r\n                            (keyup.enter)=\"onChange(input.enterPayload, $event.target.value)\">\r\n                        <span *ngIf=\"input.icon\" class=\"n7-facet__input-text-icon {{input.icon || ''}}\" \r\n                            (click)=\"onChange(input.iconPayload)\">\r\n                        </span>\r\n                    </div>\r\n                </ng-container>\r\n\r\n                <!-- Link -->\r\n                <ng-container *ngSwitchCase=\"'link'\">\r\n                    <div class=\"n7-facet__input-link {{ input.classes || '' }}\"\r\n                        (click)=\"onChange(input.payload)\">\r\n                        <span *ngIf=\"input.icon\" class=\"n7-facet__input-link-icon {{ input.icon }}\"></span>\r\n                        <span class=\"n7-facet__input-link-text\">{{ input.text }}</span>\r\n                        <span *ngIf=\"input.counter\" class=\"n7-facet__input-link-counter\">{{ input.counter }}</span>\r\n                    </div>\r\n                </ng-container>\r\n\r\n                <!-- Select -->\r\n                <ng-container *ngSwitchCase=\"'select'\">\r\n                    <label *ngIf=\"input.label\" for=\"{{ input.id }}\">{{ input.label }}</label>\r\n                    <select (change)=\"onChange(input.payload, $event.target.value)\" \r\n                        id=\"{{ input.id }}\"\r\n                        class=\"n7-facet__input-select {{ input.classes || '' }}\"\r\n                        [disabled]=\"input.disabled\">\r\n                        <option *ngFor=\"let option of input.options\" \r\n                            [value]=\"option.value\" \r\n                            [disabled]=\"option.disabled\" \r\n                            [selected]=\"option.selected\">{{ option.label }}</option>\r\n                    </select>\r\n                </ng-container>\r\n            </ng-container>\r\n\r\n        </div>\r\n    </div>\r\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZhY2V0L2ZhY2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7QUFRakQsZ0NBR0M7OztJQUZDLDhCQUEwQjs7SUFDMUIsNkJBQWlCOzs7Ozs7Ozs7O0FBVW5CLG1DQVNDOzs7SUFSQywrQkFLRTs7SUFDRixnQ0FBaUI7O0lBQ2pCLDhCQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJkLHFDQWFDOzs7SUFaQywrQkFBYTs7SUFDYiw2QkFBVzs7SUFDWCxzQ0FBcUI7O0lBQ3JCLGdDQUErQjs7SUFDL0IsZ0NBQWU7O0lBQ2YsbUNBQW1COztJQUNuQiwrQkFBYzs7SUFDZCx1Q0FBbUI7O0lBQ25CLHVDQUFtQjs7SUFDbkIsc0NBQWtCOztJQUNsQixrQ0FBYzs7SUFDZCxnQ0FBWTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCZCx1Q0FjQzs7O0lBYkMsaUNBQWU7O0lBQ2YsK0JBQVc7O0lBQ1gsb0NBS0c7O0lBQ0gsa0NBQWU7O0lBQ2YscUNBQW1COztJQUNuQixvQ0FBYzs7SUFDZCxvQ0FBYzs7SUFDZCxrQ0FBWTs7Ozs7Ozs7Ozs7Ozs7O0FBZWQseUNBU0M7OztJQVJDLG1DQUFpQjs7SUFDakIsaUNBQVc7O0lBQ1gsb0NBQWM7O0lBQ2Qsc0NBQWtCOztJQUNsQix1Q0FBbUI7O0lBQ25CLHNDQUFjOztJQUNkLHNDQUFjOztJQUNkLG9DQUFZOzs7Ozs7Ozs7Ozs7O0FBYWQscUNBUUM7OztJQVBDLCtCQUFhOztJQUNiLCtCQUFhOztJQUNiLCtCQUFjOztJQUNkLGtDQUFpQjs7SUFDakIsa0NBQWM7O0lBQ2Qsa0NBQWM7O0lBQ2QsZ0NBQVk7O0FBR2Q7SUFBQTtJQVlBLENBQUM7Ozs7OztJQUpDLGlDQUFROzs7OztJQUFSLFVBQVMsWUFBWSxFQUFFLEtBQU07UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksY0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDOztnQkFYRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLDRwSEFBMkI7aUJBQzVCOzs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLOztJQU1SLHFCQUFDO0NBQUEsQUFaRCxJQVlDO1NBUlksY0FBYzs7O0lBQ3pCLDhCQUEwQjs7SUFDMUIsOEJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRkFDRVQudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEZhY2V0Q29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IHNlY3Rpb25zIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKSBcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZhY2V0RGF0YSB7XHJcbiAgc2VjdGlvbnM6IElGYWNldFNlY3Rpb25bXTtcclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBGYWNldFNlY3Rpb25cclxuICpcclxuICogQHByb3BlcnR5IGlucHV0cyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZhY2V0U2VjdGlvbiB7XHJcbiAgaW5wdXRzOiBBcnJheTxcclxuICAgIElGYWNldElucHV0Q2hlY2tib3ggfFxyXG4gICAgSUZhY2V0SW5wdXRMaW5rIHxcclxuICAgIElGYWNldElucHV0VGV4dCB8XHJcbiAgICBJRmFjZXRJbnB1dFNlbGVjdFxyXG4gID47XHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgRmFjZXRJbnB1dFRleHRcclxuICpcclxuICogQHByb3BlcnR5IHR5cGUgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgaWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgcGxhY2Vob2xkZXIgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgdmFsdWUgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgbGFiZWwgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgZGlzYWJsZWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpbnB1dFBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgZW50ZXJQYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGljb25QYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRmFjZXRJbnB1dFRleHQge1xyXG4gIHR5cGU6ICd0ZXh0JztcclxuICBpZDogc3RyaW5nO1xyXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG4gIHZhbHVlPzogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcclxuICBsYWJlbD86IHN0cmluZztcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgaWNvbj86IHN0cmluZztcclxuICBpbnB1dFBheWxvYWQ/OiBhbnk7XHJcbiAgZW50ZXJQYXlsb2FkPzogYW55O1xyXG4gIGljb25QYXlsb2FkPzogYW55O1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEZhY2V0SW5wdXRTZWxlY3RcclxuICpcclxuICogQHByb3BlcnR5IHR5cGUgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgaWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgb3B0aW9ucyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBsYWJlbCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBkaXNhYmxlZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElGYWNldElucHV0U2VsZWN0IHtcclxuICB0eXBlOiAnc2VsZWN0JztcclxuICBpZDogc3RyaW5nO1xyXG4gIG9wdGlvbnM6IEFycmF5PHsgXHJcbiAgICBsYWJlbDogc3RyaW5nLCBcclxuICAgIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIFxyXG4gICAgc2VsZWN0ZWQ/OiBib29sZWFuLFxyXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuXHJcbiAgfT47XHJcbiAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIHBheWxvYWQ/OiBhbnk7XHJcbiAgY2xhc3Nlcz86IGFueTtcclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgRmFjZXRJbnB1dENoZWNrYm94XHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB0eXBlIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGlkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGxhYmVsIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNoZWNrZWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgZGlzYWJsZWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZhY2V0SW5wdXRDaGVja2JveCB7XHJcbiAgdHlwZTogJ2NoZWNrYm94JztcclxuICBpZDogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgY2hlY2tlZD86IGJvb2xlYW47XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIHBheWxvYWQ/OiBhbnk7XHJcbiAgY2xhc3Nlcz86IGFueTtcclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgRmFjZXRJbnB1dExpbmtcclxuICpcclxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjb3VudGVyIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElGYWNldElucHV0TGluayB7XHJcbiAgdHlwZTogJ2xpbmsnO1xyXG4gIHRleHQ6IHN0cmluZztcclxuICBpY29uPzogc3RyaW5nO1xyXG4gIGNvdW50ZXI/OiBudW1iZXI7XHJcbiAgcGF5bG9hZD86IGFueTtcclxuICBjbGFzc2VzPzogYW55O1xyXG4gIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWZhY2V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmFjZXQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhY2V0Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBJRmFjZXREYXRhO1xyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgb25DaGFuZ2UoaW5wdXRQYXlsb2FkLCB2YWx1ZT8pIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgaW5wdXRQYXlsb2FkLCB2YWx1ZSB9KTtcclxuICB9XHJcbn0iXX0=