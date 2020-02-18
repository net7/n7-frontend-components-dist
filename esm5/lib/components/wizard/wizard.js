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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy93aXphcmQvd2l6YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQVlqRCxpQ0FxQkM7Ozs7OztJQWpCQywyQkFBYzs7Ozs7SUFJZCw2QkFBZ0I7Ozs7O0lBSWhCLDhCQUFhOzs7OztJQUliLDhCQUFjOzs7OztJQUlkLDRCQUFZOzs7Ozs7Ozs7O0FBVWQsaUNBU0M7Ozs7OztJQUxDLDRCQUFxQjs7Ozs7SUFJckIsOEJBQWM7O0FBR2hCO0lBQUE7SUFZQSxDQUFDOzs7OztJQUpDLGlDQUFPOzs7O0lBQVAsVUFBUSxPQUFPO1FBQ2IsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkFYRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLDhkQUE0QjtpQkFDN0I7Ozt1QkFFRSxLQUFLO3VCQUNMLEtBQUs7O0lBTVIsc0JBQUM7Q0FBQSxBQVpELElBWUM7U0FSWSxlQUFlOzs7SUFDMUIsK0JBQTJCOztJQUMzQiwrQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gV0laQVJELnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuKiBJbnRlcmZhY2UgZm9yIGEgc2luZ2xlIFdpemFyZENvbXBvbmVudCdzIFwiaXRlbVwiXG4qXG4qIEBwcm9wZXJ0eSB0ZXh0IChvcHRpb25hbClcbiogQHByb3BlcnR5IG51bWJlciAob3B0aW9uYWwpXG4qIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiogQHByb3BlcnR5IHBheWxvYWQgKHJlcXVpcmVkKVxuKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuKlxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVdpemFyZEl0ZW0ge1xuICAvKiogXG4gICogIHRleHQgcmVuZGVyZWQgb24gdGhlIHN0ZXBcbiAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqIFxuICAqIG51bWJlciByZW5kZXJlZCBvbiB0aGUgc3RlcFxuICAqL1xuICBudW1iZXI/OiBudW1iZXI7XG4gIC8qKlxuICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgKi9cbiAgcGF5bG9hZDogYW55O1xuICAvKiogXG4gICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbiAgLyoqXG4gICogYWRkaXRpb25hbCBpbmZvIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXG4gICovXG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiogSW50ZXJmYWNlIGZvciBXaXphcmRDb21wb25lbnQncyBcImRhdGFcIlxuKlxuKiBAcHJvcGVydHkgaXRlbXMgKHJlcXVpcmVkKVxuKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4qXG4qL1xuZXhwb3J0IGludGVyZmFjZSBJV2l6YXJkRGF0YSB7XG4gIC8qKiBcbiAgKiBlYWNoIGl0ZW0gcmVwcmVzZW50cyBhIHN0ZXBcbiAgKi9cbiAgaXRlbXM6IElXaXphcmRJdGVtW107XG4gIC8qKiBcbiAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAqL1xuICBjbGFzc2VzPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy13aXphcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vd2l6YXJkLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFdpemFyZENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElXaXphcmREYXRhO1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DbGljayhwYXlsb2FkKXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9IFxufSJdfQ==