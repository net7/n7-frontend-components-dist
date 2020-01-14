/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
var WizardComponent = /** @class */ (function () {
    function WizardComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    WizardComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    WizardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-wizard',
                    template: "<div *ngIf=\"data\" class=\"n7-wizard {{ data.classes || '' }}\">\n  <ol class=\"n7-wizard__list\">\n      <li *ngFor=\"let item of data.items\" \n          class=\"n7-wizard__item {{ item.classes || '' }}\" \n          (click)=\"onClick(item.payload)\">\n            <span *ngIf=\"item.number\" class=\"n7-wizard__number\">{{ item.number }}</span>\n            <span *ngIf=\"item.text\" class=\"n7-wizard__text\">{{ item.text }}</span>\n      </li>\n  </ol>\n</div>"
                }] }
    ];
    WizardComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return WizardComponent;
}());
export { WizardComponent };
if (false) {
    /** @type {?} */
    WizardComponent.prototype.data;
    /** @type {?} */
    WizardComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy93aXphcmQvd2l6YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0FBWWpELGlDQXFCQzs7Ozs7O0lBakJDLDJCQUFjOzs7OztJQUlkLDZCQUFnQjs7Ozs7SUFJaEIsOEJBQWE7Ozs7O0lBSWIsOEJBQWM7Ozs7O0lBSWQsNEJBQVk7Ozs7Ozs7Ozs7QUFVZCxpQ0FTQzs7Ozs7O0lBTEMsNEJBQXFCOzs7OztJQUlyQiw4QkFBYzs7QUFHaEI7SUFBQTtJQVlBLENBQUM7Ozs7O0lBSkMsaUNBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDYixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQVhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsOGRBQTRCO2lCQUM3Qjs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUFNUixzQkFBQztDQUFBLEFBWkQsSUFZQztTQVJZLGVBQWU7OztJQUMxQiwrQkFBMkI7O0lBQzNCLCtCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBXSVpBUkQudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4qIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgV2l6YXJkQ29tcG9uZW50J3MgXCJpdGVtXCJcbipcbiogQHByb3BlcnR5IHRleHQgKG9wdGlvbmFsKVxuKiBAcHJvcGVydHkgbnVtYmVyIChvcHRpb25hbClcbiogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuKiBAcHJvcGVydHkgcGF5bG9hZCAocmVxdWlyZWQpXG4qIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4qXG4qL1xuZXhwb3J0IGludGVyZmFjZSBJV2l6YXJkSXRlbSB7XG4gIC8qKiBcbiAgKiAgdGV4dCByZW5kZXJlZCBvbiB0aGUgc3RlcFxuICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKiogXG4gICogbnVtYmVyIHJlbmRlcmVkIG9uIHRoZSBzdGVwXG4gICovXG4gIG51bWJlcj86IG51bWJlcjtcbiAgLyoqXG4gICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAqL1xuICBwYXlsb2FkOiBhbnk7XG4gIC8qKiBcbiAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAqL1xuICBjbGFzc2VzPzogYW55O1xuICAvKipcbiAgKiBhZGRpdGlvbmFsIGluZm8gdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuKiBJbnRlcmZhY2UgZm9yIFdpemFyZENvbXBvbmVudCdzIFwiZGF0YVwiXG4qXG4qIEBwcm9wZXJ0eSBpdGVtcyAocmVxdWlyZWQpXG4qIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbipcbiovXG5leHBvcnQgaW50ZXJmYWNlIElXaXphcmREYXRhIHtcbiAgLyoqIFxuICAqIGVhY2ggaXRlbSByZXByZXNlbnRzIGEgc3RlcFxuICAqL1xuICBpdGVtczogSVdpemFyZEl0ZW1bXTtcbiAgLyoqIFxuICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICovXG4gIGNsYXNzZXM/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LXdpemFyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi93aXphcmQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgV2l6YXJkQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSVdpemFyZERhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNsaWNrKHBheWxvYWQpe1xuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH0gXG59Il19