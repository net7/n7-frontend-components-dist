/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/wizard/wizard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// WIZARD.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for a single WizardComponent's "item"
 *
 * \@property text (optional)
 * \@property number (optional)
 * \@property classes (optional)
 * \@property payload (required)
 * \@property _meta (optional)
 *
 * @record
 */
export function IWizardItem() { }
if (false) {
    /**
     *  text rendered on the step
     * @type {?|undefined}
     */
    IWizardItem.prototype.text;
    /**
     * number rendered on the step
     * @type {?|undefined}
     */
    IWizardItem.prototype.number;
    /**
     * action click's payload
     * @type {?}
     */
    IWizardItem.prototype.payload;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    IWizardItem.prototype.classes;
    /**
     * additional info useful for the component's logic
     * @type {?|undefined}
     */
    IWizardItem.prototype._meta;
}
/**
 * Interface for WizardComponent's "data"
 *
 * \@property items (required)
 * \@property classes (optional)
 *
 * @record
 */
export function IWizardData() { }
if (false) {
    /**
     * each item represents a step
     * @type {?}
     */
    IWizardData.prototype.items;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    IWizardData.prototype.classes;
}
export class WizardComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
}
WizardComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-wizard',
                template: "<div *ngIf=\"data\" class=\"n7-wizard {{ data.classes || '' }}\">\r\n  <ol class=\"n7-wizard__list\">\r\n      <li *ngFor=\"let item of data.items\" \r\n          class=\"n7-wizard__item {{ item.classes || '' }}\" \r\n          (click)=\"onClick(item.payload)\">\r\n            <span *ngIf=\"item.number\" class=\"n7-wizard__number\">{{ item.number }}</span>\r\n            <span *ngIf=\"item.text\" class=\"n7-wizard__text\">{{ item.text }}</span>\r\n      </li>\r\n  </ol>\r\n</div>"
            }] }
];
WizardComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    WizardComponent.prototype.data;
    /** @type {?} */
    WizardComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy93aXphcmQvd2l6YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQVlqRCxpQ0FxQkM7Ozs7OztJQWpCQywyQkFBYzs7Ozs7SUFJZCw2QkFBZ0I7Ozs7O0lBSWhCLDhCQUFhOzs7OztJQUliLDhCQUFjOzs7OztJQUlkLDRCQUFZOzs7Ozs7Ozs7O0FBVWQsaUNBU0M7Ozs7OztJQUxDLDRCQUFxQjs7Ozs7SUFJckIsOEJBQWM7O0FBT2hCLE1BQU0sT0FBTyxlQUFlOzs7OztJQUkxQixPQUFPLENBQUMsT0FBTztRQUNiLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBWEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixnZkFBNEI7YUFDN0I7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETiwrQkFBMkI7O0lBQzNCLCtCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFdJWkFSRC50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiogSW50ZXJmYWNlIGZvciBhIHNpbmdsZSBXaXphcmRDb21wb25lbnQncyBcIml0ZW1cIlxyXG4qXHJcbiogQHByb3BlcnR5IHRleHQgKG9wdGlvbmFsKVxyXG4qIEBwcm9wZXJ0eSBudW1iZXIgKG9wdGlvbmFsKVxyXG4qIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuKiBAcHJvcGVydHkgcGF5bG9hZCAocmVxdWlyZWQpXHJcbiogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuKlxyXG4qL1xyXG5leHBvcnQgaW50ZXJmYWNlIElXaXphcmRJdGVtIHtcclxuICAvKiogXHJcbiAgKiAgdGV4dCByZW5kZXJlZCBvbiB0aGUgc3RlcFxyXG4gICovXHJcbiAgdGV4dD86IHN0cmluZztcclxuICAvKiogXHJcbiAgKiBudW1iZXIgcmVuZGVyZWQgb24gdGhlIHN0ZXBcclxuICAqL1xyXG4gIG51bWJlcj86IG51bWJlcjtcclxuICAvKipcclxuICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcclxuICAqL1xyXG4gIHBheWxvYWQ6IGFueTtcclxuICAvKiogXHJcbiAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICovXHJcbiAgY2xhc3Nlcz86IGFueTtcclxuICAvKipcclxuICAqIGFkZGl0aW9uYWwgaW5mbyB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xyXG4gICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4qIEludGVyZmFjZSBmb3IgV2l6YXJkQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuKlxyXG4qIEBwcm9wZXJ0eSBpdGVtcyAocmVxdWlyZWQpXHJcbiogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4qXHJcbiovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVdpemFyZERhdGEge1xyXG4gIC8qKiBcclxuICAqIGVhY2ggaXRlbSByZXByZXNlbnRzIGEgc3RlcFxyXG4gICovXHJcbiAgaXRlbXM6IElXaXphcmRJdGVtW107XHJcbiAgLyoqIFxyXG4gICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAqL1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctd2l6YXJkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vd2l6YXJkLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaXphcmRDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IElXaXphcmREYXRhO1xyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgb25DbGljayhwYXlsb2FkKXtcclxuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9IFxyXG59Il19