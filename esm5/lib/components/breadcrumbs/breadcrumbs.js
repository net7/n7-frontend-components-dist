/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// BREADCRUMBS.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for a single BreadcrumbsComponent's "Item"
 *
 * \@property label (required)
 * \@property payload (required)
 * \@property classes (optional)
 * \@property _meta (optional)
 *
 * @record
 */
export function IBreadcrumbsItem() { }
if (false) {
    /**
     * item's label
     * @type {?}
     */
    IBreadcrumbsItem.prototype.label;
    /** @type {?} */
    IBreadcrumbsItem.prototype.anchor;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    IBreadcrumbsItem.prototype.classes;
    /**
     * additional info useful for the component's logic
     * @type {?|undefined}
     */
    IBreadcrumbsItem.prototype._meta;
}
/**
 * Interface for BreadcrumbsComponent's "Data"
 *
 * \@property items (required)
 * \@property classes (optional)
 *
 * @record
 */
export function IBreadcrumbsData() { }
if (false) {
    /**
     * each item renders a breadcrumb level
     * @type {?}
     */
    IBreadcrumbsData.prototype.items;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    IBreadcrumbsData.prototype.classes;
}
var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    BreadcrumbsComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    BreadcrumbsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-breadcrumbs',
                    template: "<div *ngIf=\"data\" class=\"n7-breadcrumbs {{ data.classes || '' }}\">\n    <nav class=\"n7-breadcrumbs__nav\">\n        <ol class=\"n7-breadcrumbs__list\">\n            <li *ngFor=\"let item of data.items\" class=\"n7-breadcrumbs__item {{ item.classes || '' }}\">\n                <n7-anchor-wrapper [classes]=\"'n7-breadcrumbs__label'\"\n                [data]=\"item.anchor\"\n                (clicked)=\"onClick($event)\">\n                    {{ item.label }}\n                </n7-anchor-wrapper>\n            </li>\n        </ol>\n    </nav>\n</div>\n"
                }] }
    ];
    BreadcrumbsComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return BreadcrumbsComponent;
}());
export { BreadcrumbsComponent };
if (false) {
    /** @type {?} */
    BreadcrumbsComponent.prototype.data;
    /** @type {?} */
    BreadcrumbsComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7QUFZakQsc0NBY0M7Ozs7OztJQVZDLGlDQUFjOztJQUNkLGtDQUFnQjs7Ozs7SUFJaEIsbUNBQWM7Ozs7O0lBSWQsaUNBQVk7Ozs7Ozs7Ozs7QUFVZCxzQ0FTQzs7Ozs7O0lBTEMsaUNBQTBCOzs7OztJQUkxQixtQ0FBYzs7QUFHaEI7SUFBQTtJQVlBLENBQUM7Ozs7O0lBSkMsc0NBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQVhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQiwwakJBQWlDO2lCQUNsQzs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUFNUiwyQkFBQztDQUFBLEFBWkQsSUFZQztTQVJZLG9CQUFvQjs7O0lBQy9CLG9DQUFnQzs7SUFDaEMsb0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEJSRUFEQ1JVTUJTLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQW5jaG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkLWludGVyZmFjZXMnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgQnJlYWRjcnVtYnNDb21wb25lbnQncyBcIkl0ZW1cIlxuICpcbiAqIEBwcm9wZXJ0eSBsYWJlbCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJQnJlYWRjcnVtYnNJdGVtIHtcbiAgLyoqXG4gICAqIGl0ZW0ncyBsYWJlbFxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgYW5jaG9yOiBJQW5jaG9yO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm8gdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgQnJlYWRjcnVtYnNDb21wb25lbnQncyBcIkRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBpdGVtcyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElCcmVhZGNydW1ic0RhdGEge1xuICAvKipcbiAgICogZWFjaCBpdGVtIHJlbmRlcnMgYSBicmVhZGNydW1iIGxldmVsXG4gICAqL1xuICBpdGVtczogSUJyZWFkY3J1bWJzSXRlbVtdO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWJyZWFkY3J1bWJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JyZWFkY3J1bWJzLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJzQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSUJyZWFkY3J1bWJzRGF0YTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG59XG4iXX0=