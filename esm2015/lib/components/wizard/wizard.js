/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy93aXphcmQvd2l6YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0FBWWpELGlDQXFCQzs7Ozs7O0lBakJDLDJCQUFjOzs7OztJQUlkLDZCQUFnQjs7Ozs7SUFJaEIsOEJBQWE7Ozs7O0lBSWIsOEJBQWM7Ozs7O0lBSWQsNEJBQVk7Ozs7Ozs7Ozs7QUFVZCxpQ0FTQzs7Ozs7O0lBTEMsNEJBQXFCOzs7OztJQUlyQiw4QkFBYzs7QUFPaEIsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBSTFCLE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUFYRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLGdmQUE0QjthQUM3Qjs7O21CQUVFLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLCtCQUEyQjs7SUFDM0IsK0JBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gV0laQVJELnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuKiBJbnRlcmZhY2UgZm9yIGEgc2luZ2xlIFdpemFyZENvbXBvbmVudCdzIFwiaXRlbVwiXHJcbipcclxuKiBAcHJvcGVydHkgdGV4dCAob3B0aW9uYWwpXHJcbiogQHByb3BlcnR5IG51bWJlciAob3B0aW9uYWwpXHJcbiogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4qIEBwcm9wZXJ0eSBwYXlsb2FkIChyZXF1aXJlZClcclxuKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4qXHJcbiovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVdpemFyZEl0ZW0ge1xyXG4gIC8qKiBcclxuICAqICB0ZXh0IHJlbmRlcmVkIG9uIHRoZSBzdGVwXHJcbiAgKi9cclxuICB0ZXh0Pzogc3RyaW5nO1xyXG4gIC8qKiBcclxuICAqIG51bWJlciByZW5kZXJlZCBvbiB0aGUgc3RlcFxyXG4gICovXHJcbiAgbnVtYmVyPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICovXHJcbiAgcGF5bG9hZDogYW55O1xyXG4gIC8qKiBcclxuICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgKi9cclxuICBjbGFzc2VzPzogYW55O1xyXG4gIC8qKlxyXG4gICogYWRkaXRpb25hbCBpbmZvIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXHJcbiAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiogSW50ZXJmYWNlIGZvciBXaXphcmRDb21wb25lbnQncyBcImRhdGFcIlxyXG4qXHJcbiogQHByb3BlcnR5IGl0ZW1zIChyZXF1aXJlZClcclxuKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbipcclxuKi9cclxuZXhwb3J0IGludGVyZmFjZSBJV2l6YXJkRGF0YSB7XHJcbiAgLyoqIFxyXG4gICogZWFjaCBpdGVtIHJlcHJlc2VudHMgYSBzdGVwXHJcbiAgKi9cclxuICBpdGVtczogSVdpemFyZEl0ZW1bXTtcclxuICAvKiogXHJcbiAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICovXHJcbiAgY2xhc3Nlcz86IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy13aXphcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi93aXphcmQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFdpemFyZENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogSVdpemFyZERhdGE7XHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBvbkNsaWNrKHBheWxvYWQpe1xyXG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH0gXHJcbn0iXX0=