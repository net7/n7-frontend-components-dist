/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
/**
 * @record
 */
export function ITitleComponentData() { }
if (false) {
    /** @type {?} */
    ITitleComponentData.prototype.label;
    /** @type {?} */
    ITitleComponentData.prototype.value;
}
/**
 * TitleComponent <dv-title-component>
 *
 * example:
 * ```html
 * <dv-title-component [data]="{
 *   'label': 'title component label',
 *   'value': 123
 * }"></dv-title-component>
 * ```
 */
var TitleComponent = /** @class */ (function () {
    function TitleComponent() {
    }
    TitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dv-title-component',
                    template: "<h1 *ngIf=\"data\">{{ data.label }} ({{ data.value }})</h1>",
                    styles: ["h1{color:red}"]
                }] }
    ];
    TitleComponent.propDecorators = {
        data: [{ type: Input }]
    };
    return TitleComponent;
}());
export { TitleComponent };
if (false) {
    /** @type {?} */
    TitleComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGF2aXovY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RpdGxlLWNvbXBvbmVudC90aXRsZS1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRWpELHlDQUdDOzs7SUFGQyxvQ0FBYzs7SUFDZCxvQ0FBVzs7Ozs7Ozs7Ozs7OztBQWViO0lBQUE7SUFPQSxDQUFDOztnQkFQQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsdUVBQXFDOztpQkFFdEM7Ozt1QkFFRSxLQUFLOztJQUNSLHFCQUFDO0NBQUEsQUFQRCxJQU9DO1NBRlksY0FBYzs7O0lBQ3pCLDhCQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGl0bGVDb21wb25lbnREYXRhIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgdmFsdWU6IGFueTtcbn1cblxuLyoqXG4gKiBUaXRsZUNvbXBvbmVudCA8ZHYtdGl0bGUtY29tcG9uZW50PlxuICogXG4gKiBleGFtcGxlOlxuICogYGBgaHRtbFxuICogPGR2LXRpdGxlLWNvbXBvbmVudCBbZGF0YV09XCJ7XG4gKiAgICdsYWJlbCc6ICd0aXRsZSBjb21wb25lbnQgbGFiZWwnLFxuICogICAndmFsdWUnOiAxMjNcbiAqIH1cIj48L2R2LXRpdGxlLWNvbXBvbmVudD5cbiAqIGBgYFxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2R2LXRpdGxlLWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90aXRsZS1jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RpdGxlLWNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGl0bGVDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJVGl0bGVDb21wb25lbnREYXRhO1xufSJdfQ==