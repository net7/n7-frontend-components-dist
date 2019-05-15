/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
/**
 * @record
 */
export function ITestComponentData() { }
if (false) {
    /** @type {?} */
    ITestComponentData.prototype.id;
    /** @type {?} */
    ITestComponentData.prototype.title;
    /** @type {?} */
    ITestComponentData.prototype.body;
}
/**
 * TestComponent <dv-test-component>
 *
 * example:
 * ```html
 * <dv-test-component [data]="{
 *   'id': 'test-component-id',
 *   'title': 'test component title',
 *   'body': 'test body...'
 * }"></dv-test-component>
 * ```
 */
export class TestComponent {
    /**
     * click event
     *
     * \@memberof TestComponent
     * @param {?} data
     * @return {?}
     */
    onClick(data) {
        if (!this.emit)
            return;
        this.emit('click', data);
    }
}
TestComponent.decorators = [
    { type: Component, args: [{
                selector: 'dv-test-component',
                template: "<div *ngIf=\"data\" class=\"dv-component__test\" (click)=\"onClick(data)\">\n  <h2><small>({{ data.id }})</small> {{ data.title }}</h2>\n  <p>{{ data.body }}</p>\n</div>",
                styles: [".dv-component__test{background-color:#eee}"]
            }] }
];
TestComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TestComponent.prototype.data;
    /** @type {?} */
    TestComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Rlc3QtY29tcG9uZW50L3Rlc3QtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUVqRCx3Q0FJQzs7O0lBSEMsZ0NBQVc7O0lBQ1gsbUNBQWM7O0lBQ2Qsa0NBQWE7Ozs7Ozs7Ozs7Ozs7O0FBb0JmLE1BQU0sT0FBTyxhQUFhOzs7Ozs7OztJQVd4QixPQUFPLENBQUMsSUFBSTtRQUNWLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixxTEFBb0M7O2FBRXJDOzs7bUJBRUUsS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sNkJBQWtDOztJQUNsQyw2QkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRlc3RDb21wb25lbnREYXRhIHtcbiAgaWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgYm9keTogc3RyaW5nO1xufVxuXG4vKipcbiAqIFRlc3RDb21wb25lbnQgPGR2LXRlc3QtY29tcG9uZW50PlxuICogXG4gKiBleGFtcGxlOlxuICogYGBgaHRtbFxuICogPGR2LXRlc3QtY29tcG9uZW50IFtkYXRhXT1cIntcbiAqICAgJ2lkJzogJ3Rlc3QtY29tcG9uZW50LWlkJyxcbiAqICAgJ3RpdGxlJzogJ3Rlc3QgY29tcG9uZW50IHRpdGxlJyxcbiAqICAgJ2JvZHknOiAndGVzdCBib2R5Li4uJ1xuICogfVwiPjwvZHYtdGVzdC1jb21wb25lbnQ+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZHYtdGVzdC1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGVzdC1jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Rlc3QtY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUZXN0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSVRlc3RDb21wb25lbnREYXRhO1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgLyoqXG4gICAqIGNsaWNrIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqIEByZXR1cm5zXG4gICAqIEBtZW1iZXJvZiBUZXN0Q29tcG9uZW50XG4gICAqL1xuICBvbkNsaWNrKGRhdGEpe1xuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgZGF0YSk7XG4gIH1cbn0iXX0=