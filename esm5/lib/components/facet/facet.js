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
                    template: "<div *ngIf=\"data\" class=\"n7-facet\">\r\n    <div *ngFor=\"let section of data.sections\" class=\"n7-facet__section {{ section.classes || '' }}\">\r\n        <div *ngFor=\"let input of section.inputs\"\r\n            class=\"n7-facet__section-input n7-facet__section-input-{{ input.type }} {{ input.classes || '' }}\">\r\n\r\n            <ng-container [ngSwitch]=\"input.type\">\r\n\r\n                <!-- Checkbox -->\r\n                <ng-container *ngSwitchCase=\"'checkbox'\">\r\n                    <input type=\"checkbox\" id=\"{{ input.id }}\" class=\"n7-facet__input-checkbox-input\"\r\n                        [checked]=\"input.checked\"\r\n                        [disabled]=\"input.disabled\"\r\n                        (change)=\"onChange(input.payload, $event.target.checked)\">\r\n                    <label *ngIf=\"input.label\" class=\"n7-facet__checkbox-label\" for=\"{{ input.id }}\">\r\n                        {{ input.label }}\r\n                    </label>\r\n                </ng-container>\r\n\r\n                <!-- Text -->\r\n                <ng-container *ngSwitchCase=\"'text'\">\r\n                    <label *ngIf=\"input.label\" class=\"n7-facet__input-text-label\" for=\"{{ input.id }}\">\r\n                        {{ input.label }}\r\n                    </label>\r\n                    <div class=\"n7-facet__input-text-wrapper\">\r\n                        <input type=\"text\" id=\"{{ input.id }}\" class=\"n7-facet__input-text {{input.classes || ''}}\"\r\n                            placeholder=\"{{input.placeholder || ''}}\"\r\n                            [value]=\"input.value || null\"\r\n                            [disabled]=\"input.disabled\"\r\n                            (input)=\"onChange(input.inputPayload, $event.target.value)\"\r\n                            (keyup.enter)=\"onChange(input.enterPayload, $event.target.value)\">\r\n                        <span *ngIf=\"input.icon\" class=\"n7-facet__input-text-icon {{input.icon || ''}}\" \r\n                            (click)=\"onChange(input.iconPayload)\">\r\n                        </span>\r\n                    </div>\r\n                </ng-container>\r\n\r\n                <!-- Link -->\r\n                <ng-container *ngSwitchCase=\"'link'\">\r\n                    <div class=\"n7-facet__input-link {{ input.classes || '' }}\"\r\n                        (click)=\"onChange(input.payload)\">\r\n                        <span *ngIf=\"input.icon\" class=\"n7-facet__input-link-icon {{ input.icon }}\"></span>\r\n                        <span class=\"n7-facet__input-link-text\">{{ input.text }}</span>\r\n                        <span *ngIf=\"input.counter || input.counter === 0\" class=\"n7-facet__input-link-counter\">{{ input.counter }}</span>\r\n                    </div>\r\n                </ng-container>\r\n\r\n                <!-- Select -->\r\n                <ng-container *ngSwitchCase=\"'select'\">\r\n                    <label *ngIf=\"input.label\" for=\"{{ input.id }}\">{{ input.label }}</label>\r\n                    <select (change)=\"onChange(input.payload, $event.target.value)\" \r\n                        id=\"{{ input.id }}\"\r\n                        class=\"n7-facet__input-select {{ input.classes || '' }}\"\r\n                        [disabled]=\"input.disabled\">\r\n                        <option *ngFor=\"let option of input.options\" \r\n                            [value]=\"option.value\" \r\n                            [disabled]=\"option.disabled\" \r\n                            [selected]=\"option.selected\">{{ option.label }}</option>\r\n                    </select>\r\n                </ng-container>\r\n            </ng-container>\r\n\r\n        </div>\r\n    </div>\r\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZhY2V0L2ZhY2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBUWpELCtCQUdDOzs7SUFGQyw2QkFBeUI7O0lBQ3pCLDRCQUFpQjs7Ozs7Ozs7OztBQVVuQixrQ0FTQzs7O0lBUkMsOEJBS0U7O0lBQ0YsK0JBQWlCOztJQUNqQiw2QkFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CZCxvQ0FhQzs7O0lBWkMsOEJBQWE7O0lBQ2IsNEJBQVc7O0lBQ1gscUNBQXFCOztJQUNyQiwrQkFBK0I7O0lBQy9CLCtCQUFlOztJQUNmLGtDQUFtQjs7SUFDbkIsOEJBQWM7O0lBQ2Qsc0NBQW1COztJQUNuQixzQ0FBbUI7O0lBQ25CLHFDQUFrQjs7SUFDbEIsaUNBQWM7O0lBQ2QsK0JBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQmQsc0NBY0M7OztJQWJDLGdDQUFlOztJQUNmLDhCQUFXOztJQUNYLG1DQUtHOztJQUNILGlDQUFlOztJQUNmLG9DQUFtQjs7SUFDbkIsbUNBQWM7O0lBQ2QsbUNBQWM7O0lBQ2QsaUNBQVk7Ozs7Ozs7Ozs7Ozs7OztBQWVkLHdDQVNDOzs7SUFSQyxrQ0FBaUI7O0lBQ2pCLGdDQUFXOztJQUNYLG1DQUFjOztJQUNkLHFDQUFrQjs7SUFDbEIsc0NBQW1COztJQUNuQixxQ0FBYzs7SUFDZCxxQ0FBYzs7SUFDZCxtQ0FBWTs7Ozs7Ozs7Ozs7OztBQWFkLG9DQVFDOzs7SUFQQyw4QkFBYTs7SUFDYiw4QkFBYTs7SUFDYiw4QkFBYzs7SUFDZCxpQ0FBaUI7O0lBQ2pCLGlDQUFjOztJQUNkLGlDQUFjOztJQUNkLCtCQUFZOztBQUdkO0lBQUE7SUFhQSxDQUFDOzs7Ozs7SUFKQyxpQ0FBUTs7Ozs7SUFBUixVQUFTLFlBQVksRUFBRSxLQUFNO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLGNBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixtckhBQTJCO2lCQUM1Qjs7O3VCQUVFLEtBQUs7dUJBRUwsS0FBSzs7SUFNUixxQkFBQztDQUFBLEFBYkQsSUFhQztTQVRZLGNBQWM7OztJQUN6Qiw4QkFBeUI7O0lBRXpCLDhCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEZBQ0VULnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBGYWNldENvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBzZWN0aW9ucyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmFjZXREYXRhIHtcclxuICBzZWN0aW9uczogRmFjZXRTZWN0aW9uW107XHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgRmFjZXRTZWN0aW9uXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBpbnB1dHMgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZhY2V0U2VjdGlvbiB7XHJcbiAgaW5wdXRzOiBBcnJheTxcclxuICAgIEZhY2V0SW5wdXRDaGVja2JveCB8XHJcbiAgICBGYWNldElucHV0TGluayB8XHJcbiAgICBGYWNldElucHV0VGV4dCB8XHJcbiAgICBGYWNldElucHV0U2VsZWN0XHJcbiAgPjtcclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBGYWNldElucHV0VGV4dFxyXG4gKlxyXG4gKiBAcHJvcGVydHkgdHlwZSAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBpZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBwbGFjZWhvbGRlciAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB2YWx1ZSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBsYWJlbCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBkaXNhYmxlZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGlucHV0UGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBlbnRlclBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaWNvblBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZhY2V0SW5wdXRUZXh0IHtcclxuICB0eXBlOiAndGV4dCc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcclxuICB2YWx1ZT86IHN0cmluZyB8IG51bWJlciB8IG51bGw7XHJcbiAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIGljb24/OiBzdHJpbmc7XHJcbiAgaW5wdXRQYXlsb2FkPzogYW55O1xyXG4gIGVudGVyUGF5bG9hZD86IGFueTtcclxuICBpY29uUGF5bG9hZD86IGFueTtcclxuICBjbGFzc2VzPzogYW55O1xyXG4gIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBGYWNldElucHV0U2VsZWN0XHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB0eXBlIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGlkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IG9wdGlvbnMgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgbGFiZWwgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgZGlzYWJsZWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBGYWNldElucHV0U2VsZWN0IHtcclxuICB0eXBlOiAnc2VsZWN0JztcclxuICBpZDogc3RyaW5nO1xyXG4gIG9wdGlvbnM6IEFycmF5PHtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gICAgc2VsZWN0ZWQ/OiBib29sZWFuO1xyXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIH0+O1xyXG4gIGxhYmVsPzogc3RyaW5nO1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICBwYXlsb2FkPzogYW55O1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEZhY2V0SW5wdXRDaGVja2JveFxyXG4gKlxyXG4gKiBAcHJvcGVydHkgdHlwZSAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBpZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBsYWJlbCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjaGVja2VkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGRpc2FibGVkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZhY2V0SW5wdXRDaGVja2JveCB7XHJcbiAgdHlwZTogJ2NoZWNrYm94JztcclxuICBpZDogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgY2hlY2tlZD86IGJvb2xlYW47XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIHBheWxvYWQ/OiBhbnk7XHJcbiAgY2xhc3Nlcz86IGFueTtcclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgRmFjZXRJbnB1dExpbmtcclxuICpcclxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjb3VudGVyIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZhY2V0SW5wdXRMaW5rIHtcclxuICB0eXBlOiAnbGluayc7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIGljb24/OiBzdHJpbmc7XHJcbiAgY291bnRlcj86IG51bWJlcjtcclxuICBwYXlsb2FkPzogYW55O1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctZmFjZXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mYWNldC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFjZXRDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IEZhY2V0RGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBvbkNoYW5nZShpbnB1dFBheWxvYWQsIHZhbHVlPykge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgeyBpbnB1dFBheWxvYWQsIHZhbHVlIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=