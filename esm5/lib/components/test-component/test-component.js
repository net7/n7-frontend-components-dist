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
var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    /**
     * @param {?} data
     * @return {?}
     */
    TestComponent.prototype.onClick = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (!this.emit)
            return;
        this.emit('click', data);
    };
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
    return TestComponent;
}());
export { TestComponent };
if (false) {
    /** @type {?} */
    TestComponent.prototype.data;
    /** @type {?} */
    TestComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YXZpei9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGVzdC1jb21wb25lbnQvdGVzdC1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRWpELHdDQUlDOzs7SUFIQyxnQ0FBVzs7SUFDWCxtQ0FBYzs7SUFDZCxrQ0FBYTs7QUFHZjtJQUFBO0lBYUEsQ0FBQzs7Ozs7SUFKQywrQkFBTzs7OztJQUFQLFVBQVEsSUFBSTtRQUNWLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLHFMQUFvQzs7aUJBRXJDOzs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLOztJQU1SLG9CQUFDO0NBQUEsQUFiRCxJQWFDO1NBUlksYUFBYTs7O0lBQ3hCLDZCQUFrQzs7SUFDbEMsNkJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZXN0Q29tcG9uZW50RGF0YSB7XG4gIGlkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGJvZHk6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZHYtdGVzdC1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGVzdC1jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Rlc3QtY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUZXN0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSVRlc3RDb21wb25lbnREYXRhO1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DbGljayhkYXRhKXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIGRhdGEpO1xuICB9XG59Il19