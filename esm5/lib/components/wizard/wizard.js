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
export function WizardItem() { }
if (false) {
    /**
     *  text rendered on the step
     * @type {?|undefined}
     */
    WizardItem.prototype.text;
    /**
     * number rendered on the step
     * @type {?|undefined}
     */
    WizardItem.prototype.number;
    /**
     * action click's payload
     * @type {?}
     */
    WizardItem.prototype.payload;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    WizardItem.prototype.classes;
    /**
     * additional info useful for the component's logic
     * @type {?|undefined}
     */
    WizardItem.prototype._meta;
}
/**
 * Interface for WizardComponent's "data"
 *
 * \@property items (required)
 * \@property classes (optional)
 *
 * @record
 */
export function WizardData() { }
if (false) {
    /**
     * each item represents a step
     * @type {?}
     */
    WizardData.prototype.items;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    WizardData.prototype.classes;
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
                    template: "<div *ngIf=\"data\" class=\"n7-wizard {{ data.classes || '' }}\">\r\n  <ol class=\"n7-wizard__list\">\r\n      <li *ngFor=\"let item of data.items\" \r\n          class=\"n7-wizard__item {{ item.classes || '' }}\" \r\n          (click)=\"onClick(item.payload)\">\r\n            <span *ngIf=\"item.number\" class=\"n7-wizard__number\">{{ item.number }}</span>\r\n            <span *ngIf=\"item.text\" class=\"n7-wizard__text\">{{ item.text }}</span>\r\n      </li>\r\n  </ol>\r\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy93aXphcmQvd2l6YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQVlqRCxnQ0FxQkM7Ozs7OztJQWpCQywwQkFBYzs7Ozs7SUFJZCw0QkFBZ0I7Ozs7O0lBSWhCLDZCQUFhOzs7OztJQUliLDZCQUFjOzs7OztJQUlkLDJCQUFZOzs7Ozs7Ozs7O0FBVWQsZ0NBU0M7Ozs7OztJQUxDLDJCQUFvQjs7Ozs7SUFJcEIsNkJBQWM7O0FBR2hCO0lBQUE7SUFhQSxDQUFDOzs7OztJQUpDLGlDQUFPOzs7O0lBQVAsVUFBUSxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLGdmQUE0QjtpQkFDN0I7Ozt1QkFFRSxLQUFLO3VCQUVMLEtBQUs7O0lBTVIsc0JBQUM7Q0FBQSxBQWJELElBYUM7U0FUWSxlQUFlOzs7SUFDMUIsK0JBQTBCOztJQUUxQiwrQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBXSVpBUkQudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4qIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgV2l6YXJkQ29tcG9uZW50J3MgXCJpdGVtXCJcclxuKlxyXG4qIEBwcm9wZXJ0eSB0ZXh0IChvcHRpb25hbClcclxuKiBAcHJvcGVydHkgbnVtYmVyIChvcHRpb25hbClcclxuKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiogQHByb3BlcnR5IHBheWxvYWQgKHJlcXVpcmVkKVxyXG4qIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbipcclxuKi9cclxuZXhwb3J0IGludGVyZmFjZSBXaXphcmRJdGVtIHtcclxuICAvKipcclxuICAqICB0ZXh0IHJlbmRlcmVkIG9uIHRoZSBzdGVwXHJcbiAgKi9cclxuICB0ZXh0Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICogbnVtYmVyIHJlbmRlcmVkIG9uIHRoZSBzdGVwXHJcbiAgKi9cclxuICBudW1iZXI/OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXHJcbiAgKi9cclxuICBwYXlsb2FkOiBhbnk7XHJcbiAgLyoqXHJcbiAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICovXHJcbiAgY2xhc3Nlcz86IGFueTtcclxuICAvKipcclxuICAqIGFkZGl0aW9uYWwgaW5mbyB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xyXG4gICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4qIEludGVyZmFjZSBmb3IgV2l6YXJkQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuKlxyXG4qIEBwcm9wZXJ0eSBpdGVtcyAocmVxdWlyZWQpXHJcbiogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4qXHJcbiovXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2l6YXJkRGF0YSB7XHJcbiAgLyoqXHJcbiAgKiBlYWNoIGl0ZW0gcmVwcmVzZW50cyBhIHN0ZXBcclxuICAqL1xyXG4gIGl0ZW1zOiBXaXphcmRJdGVtW107XHJcbiAgLyoqXHJcbiAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICovXHJcbiAgY2xhc3Nlcz86IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy13aXphcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi93aXphcmQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFdpemFyZENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogV2l6YXJkRGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBvbkNsaWNrKHBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==