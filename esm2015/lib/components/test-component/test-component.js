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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YXZpei9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGVzdC1jb21wb25lbnQvdGVzdC1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRWpELHdDQUlDOzs7SUFIQyxnQ0FBVzs7SUFDWCxtQ0FBYzs7SUFDZCxrQ0FBYTs7Ozs7Ozs7Ozs7Ozs7QUFvQmYsTUFBTSxPQUFPLGFBQWE7Ozs7Ozs7O0lBV3hCLE9BQU8sQ0FBQyxJQUFJO1FBQ1YsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLHFMQUFvQzs7YUFFckM7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETiw2QkFBa0M7O0lBQ2xDLDZCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGVzdENvbXBvbmVudERhdGEge1xuICBpZDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBib2R5OiBzdHJpbmc7XG59XG5cbi8qKlxuICogVGVzdENvbXBvbmVudCA8ZHYtdGVzdC1jb21wb25lbnQ+XG4gKiBcbiAqIGV4YW1wbGU6XG4gKiBgYGBodG1sXG4gKiA8ZHYtdGVzdC1jb21wb25lbnQgW2RhdGFdPVwie1xuICogICAnaWQnOiAndGVzdC1jb21wb25lbnQtaWQnLFxuICogICAndGl0bGUnOiAndGVzdCBjb21wb25lbnQgdGl0bGUnLFxuICogICAnYm9keSc6ICd0ZXN0IGJvZHkuLi4nXG4gKiB9XCI+PC9kdi10ZXN0LWNvbXBvbmVudD5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkdi10ZXN0LWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXN0LWNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGVzdC1jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRlc3RDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJVGVzdENvbXBvbmVudERhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICAvKipcbiAgICogY2xpY2sgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIGRhdGFcbiAgICogQHJldHVybnNcbiAgICogQG1lbWJlcm9mIFRlc3RDb21wb25lbnRcbiAgICovXG4gIG9uQ2xpY2soZGF0YSl7XG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBkYXRhKTtcbiAgfVxufSJdfQ==