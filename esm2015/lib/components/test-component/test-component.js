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
export class TestComponent {
    /**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YXZpei9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGVzdC1jb21wb25lbnQvdGVzdC1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRWpELHdDQUlDOzs7SUFIQyxnQ0FBVzs7SUFDWCxtQ0FBYzs7SUFDZCxrQ0FBYTs7QUFRZixNQUFNLE9BQU8sYUFBYTs7Ozs7SUFJeEIsT0FBTyxDQUFDLElBQUk7UUFDVixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7OztZQVpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixxTEFBb0M7O2FBRXJDOzs7bUJBRUUsS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sNkJBQWtDOztJQUNsQyw2QkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRlc3RDb21wb25lbnREYXRhIHtcbiAgaWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgYm9keTogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkdi10ZXN0LWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXN0LWNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGVzdC1jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRlc3RDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJVGVzdENvbXBvbmVudERhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNsaWNrKGRhdGEpe1xuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgZGF0YSk7XG4gIH1cbn0iXX0=