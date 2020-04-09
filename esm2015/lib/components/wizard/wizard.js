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
                template: "<div *ngIf=\"data\" class=\"n7-wizard {{ data.classes || '' }}\">\n  <ol class=\"n7-wizard__list\">\n      <li *ngFor=\"let item of data.items\" \n          class=\"n7-wizard__item {{ item.classes || '' }}\" \n          (click)=\"onClick(item.payload)\">\n            <span *ngIf=\"item.number\" class=\"n7-wizard__number\">{{ item.number }}</span>\n            <span *ngIf=\"item.text\" class=\"n7-wizard__text\">{{ item.text }}</span>\n      </li>\n  </ol>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy93aXphcmQvd2l6YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQVlqRCxnQ0FxQkM7Ozs7OztJQWpCQywwQkFBYzs7Ozs7SUFJZCw0QkFBZ0I7Ozs7O0lBSWhCLDZCQUFhOzs7OztJQUliLDZCQUFjOzs7OztJQUlkLDJCQUFZOzs7Ozs7Ozs7O0FBVWQsZ0NBU0M7Ozs7OztJQUxDLDJCQUFvQjs7Ozs7SUFJcEIsNkJBQWM7O0FBT2hCLE1BQU0sT0FBTyxlQUFlOzs7OztJQUsxQixPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBWkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiw4ZEFBNEI7YUFDN0I7OzttQkFFRSxLQUFLO21CQUVMLEtBQUs7Ozs7SUFGTiwrQkFBMEI7O0lBRTFCLCtCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBXSVpBUkQudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4qIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgV2l6YXJkQ29tcG9uZW50J3MgXCJpdGVtXCJcbipcbiogQHByb3BlcnR5IHRleHQgKG9wdGlvbmFsKVxuKiBAcHJvcGVydHkgbnVtYmVyIChvcHRpb25hbClcbiogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuKiBAcHJvcGVydHkgcGF5bG9hZCAocmVxdWlyZWQpXG4qIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4qXG4qL1xuZXhwb3J0IGludGVyZmFjZSBXaXphcmRJdGVtIHtcbiAgLyoqXG4gICogIHRleHQgcmVuZGVyZWQgb24gdGhlIHN0ZXBcbiAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICogbnVtYmVyIHJlbmRlcmVkIG9uIHRoZSBzdGVwXG4gICovXG4gIG51bWJlcj86IG51bWJlcjtcbiAgLyoqXG4gICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAqL1xuICBwYXlsb2FkOiBhbnk7XG4gIC8qKlxuICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICovXG4gIGNsYXNzZXM/OiBhbnk7XG4gIC8qKlxuICAqIGFkZGl0aW9uYWwgaW5mbyB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xuICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4qIEludGVyZmFjZSBmb3IgV2l6YXJkQ29tcG9uZW50J3MgXCJkYXRhXCJcbipcbiogQHByb3BlcnR5IGl0ZW1zIChyZXF1aXJlZClcbiogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuKlxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgV2l6YXJkRGF0YSB7XG4gIC8qKlxuICAqIGVhY2ggaXRlbSByZXByZXNlbnRzIGEgc3RlcFxuICAqL1xuICBpdGVtczogV2l6YXJkSXRlbVtdO1xuICAvKipcbiAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAqL1xuICBjbGFzc2VzPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy13aXphcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vd2l6YXJkLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFdpemFyZENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IFdpemFyZERhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG59XG4iXX0=