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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy93aXphcmQvd2l6YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQVlqRCxnQ0FxQkM7Ozs7OztJQWpCQywwQkFBYzs7Ozs7SUFJZCw0QkFBZ0I7Ozs7O0lBSWhCLDZCQUFhOzs7OztJQUliLDZCQUFjOzs7OztJQUlkLDJCQUFZOzs7Ozs7Ozs7O0FBVWQsZ0NBU0M7Ozs7OztJQUxDLDJCQUFvQjs7Ozs7SUFJcEIsNkJBQWM7O0FBR2hCO0lBQUE7SUFhQSxDQUFDOzs7OztJQUpDLGlDQUFPOzs7O0lBQVAsVUFBUSxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLDhkQUE0QjtpQkFDN0I7Ozt1QkFFRSxLQUFLO3VCQUVMLEtBQUs7O0lBTVIsc0JBQUM7Q0FBQSxBQWJELElBYUM7U0FUWSxlQUFlOzs7SUFDMUIsK0JBQTBCOztJQUUxQiwrQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gV0laQVJELnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuKiBJbnRlcmZhY2UgZm9yIGEgc2luZ2xlIFdpemFyZENvbXBvbmVudCdzIFwiaXRlbVwiXG4qXG4qIEBwcm9wZXJ0eSB0ZXh0IChvcHRpb25hbClcbiogQHByb3BlcnR5IG51bWJlciAob3B0aW9uYWwpXG4qIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiogQHByb3BlcnR5IHBheWxvYWQgKHJlcXVpcmVkKVxuKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuKlxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgV2l6YXJkSXRlbSB7XG4gIC8qKlxuICAqICB0ZXh0IHJlbmRlcmVkIG9uIHRoZSBzdGVwXG4gICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIG51bWJlciByZW5kZXJlZCBvbiB0aGUgc3RlcFxuICAqL1xuICBudW1iZXI/OiBudW1iZXI7XG4gIC8qKlxuICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgKi9cbiAgcGF5bG9hZDogYW55O1xuICAvKipcbiAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAqL1xuICBjbGFzc2VzPzogYW55O1xuICAvKipcbiAgKiBhZGRpdGlvbmFsIGluZm8gdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuKiBJbnRlcmZhY2UgZm9yIFdpemFyZENvbXBvbmVudCdzIFwiZGF0YVwiXG4qXG4qIEBwcm9wZXJ0eSBpdGVtcyAocmVxdWlyZWQpXG4qIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbipcbiovXG5leHBvcnQgaW50ZXJmYWNlIFdpemFyZERhdGEge1xuICAvKipcbiAgKiBlYWNoIGl0ZW0gcmVwcmVzZW50cyBhIHN0ZXBcbiAgKi9cbiAgaXRlbXM6IFdpemFyZEl0ZW1bXTtcbiAgLyoqXG4gICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctd2l6YXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dpemFyZC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBXaXphcmRDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBXaXphcmREYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxufVxuIl19