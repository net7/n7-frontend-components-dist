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
/**
 * WizardComponent <n7-wizard>
 *
 * \@example
 * ```html
 *
 * <n7-wizard [data]="{classes: 'wizard1-class'}">
 *     <n7-wizard__item [item]="{
 *             text: 'text',
 *             payload: 'item-payload',
 *             classes: 'item1-class',
 *             _meta: 'item1-meta',
 *         }">
 *     </n7-wizard__item>
 * </n7-wizard>
 * ```
 */
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
                template: "<div *ngIf=\"data\" class=\"n7-wizard {{ data.classes || '' }}\">\n  <ol class=\"n7-wizard__list\">\n      <li *ngFor=\"let item of data.items\" class=\"n7-wizard__item {{ item.classes || '' }}\"  (click)=\"onClick(item.payload)\">\n            <span *ngIf=\"item.number\" class=\"n7-wizard__number\">{{ item.number }}</span>\n            <span *ngIf=\"item.text\" class=\"n7-wizard__text\">{{ item.text }}</span>\n      </li>\n  </ol>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy93aXphcmQvd2l6YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0FBWWpELGlDQXFCQzs7Ozs7O0lBakJDLDJCQUFjOzs7OztJQUlkLDZCQUFnQjs7Ozs7SUFJaEIsOEJBQWE7Ozs7O0lBSWIsOEJBQWM7Ozs7O0lBSWQsNEJBQVk7Ozs7Ozs7Ozs7QUFVZCxpQ0FTQzs7Ozs7O0lBTEMsNEJBQXFCOzs7OztJQUlyQiw4QkFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCaEIsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBSTFCLE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUFYRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLHVjQUE0QjthQUM3Qjs7O21CQUVFLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLCtCQUEyQjs7SUFDM0IsK0JBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFdJWkFSRC50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiogSW50ZXJmYWNlIGZvciBhIHNpbmdsZSBXaXphcmRDb21wb25lbnQncyBcIml0ZW1cIlxuKlxuKiBAcHJvcGVydHkgdGV4dCAob3B0aW9uYWwpXG4qIEBwcm9wZXJ0eSBudW1iZXIgKG9wdGlvbmFsKVxuKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4qIEBwcm9wZXJ0eSBwYXlsb2FkIChyZXF1aXJlZClcbiogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbipcbiovXG5leHBvcnQgaW50ZXJmYWNlIElXaXphcmRJdGVtIHtcbiAgLyoqIFxuICAqICB0ZXh0IHJlbmRlcmVkIG9uIHRoZSBzdGVwXG4gICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIC8qKiBcbiAgKiBudW1iZXIgcmVuZGVyZWQgb24gdGhlIHN0ZXBcbiAgKi9cbiAgbnVtYmVyPzogbnVtYmVyO1xuICAvKipcbiAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICovXG4gIHBheWxvYWQ6IGFueTtcbiAgLyoqIFxuICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICovXG4gIGNsYXNzZXM/OiBhbnk7XG4gIC8qKlxuICAqIGFkZGl0aW9uYWwgaW5mbyB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xuICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4qIEludGVyZmFjZSBmb3IgV2l6YXJkQ29tcG9uZW50J3MgXCJkYXRhXCJcbipcbiogQHByb3BlcnR5IGl0ZW1zIChyZXF1aXJlZClcbiogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuKlxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVdpemFyZERhdGEge1xuICAvKiogXG4gICogZWFjaCBpdGVtIHJlcHJlc2VudHMgYSBzdGVwXG4gICovXG4gIGl0ZW1zOiBJV2l6YXJkSXRlbVtdO1xuICAvKiogXG4gICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbn1cblxuLyoqXG4gKiBXaXphcmRDb21wb25lbnQgPG43LXdpemFyZD5cbiAqIFxuICogQGV4YW1wbGVcbiAqIGBgYGh0bWxcbiAqIFxuICogPG43LXdpemFyZCBbZGF0YV09XCJ7Y2xhc3NlczogJ3dpemFyZDEtY2xhc3MnfVwiPlxuICogICAgIDxuNy13aXphcmRfX2l0ZW0gW2l0ZW1dPVwie1xuICogICAgICAgICAgICAgdGV4dDogJ3RleHQnLFxuICogICAgICAgICAgICAgcGF5bG9hZDogJ2l0ZW0tcGF5bG9hZCcsXG4gKiAgICAgICAgICAgICBjbGFzc2VzOiAnaXRlbTEtY2xhc3MnLFxuICogICAgICAgICAgICAgX21ldGE6ICdpdGVtMS1tZXRhJyxcbiAqICAgICAgICAgfVwiPlxuICogICAgIDwvbjctd2l6YXJkX19pdGVtPlxuICogPC9uNy13aXphcmQ+XG4gKiBgYGBcbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy13aXphcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vd2l6YXJkLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFdpemFyZENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElXaXphcmREYXRhO1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DbGljayhwYXlsb2FkKXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9IFxufSJdfQ==