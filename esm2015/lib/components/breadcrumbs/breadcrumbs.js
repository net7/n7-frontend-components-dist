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
    /**
     * action click's payload
     * @type {?}
     */
    IBreadcrumbsItem.prototype.payload;
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
export class BreadcrumbsComponent {
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
BreadcrumbsComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-breadcrumbs',
                template: "<div *ngIf=\"data\" class=\"n7-breadcrumbs {{ data.classes || '' }}\">\n    <nav class=\"n7-breadcrumbs__nav\">\n        <ol class=\"n7-breadcrumbs__list\">\n            <li *ngFor=\"let item of data.items\" class=\"n7-breadcrumbs__item {{ item.classes || '' }}\">\n                <a class=\"n7-breadcrumbs__label\" (click)=\"onClick(item.payload)\">{{ item.label }}</a>\n            </li>\n        </ol>\n    </nav>\n</div>\n"
            }] }
];
BreadcrumbsComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BreadcrumbsComponent.prototype.data;
    /** @type {?} */
    BreadcrumbsComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7QUFXakQsc0NBaUJDOzs7Ozs7SUFiQyxpQ0FBYzs7Ozs7SUFJZCxtQ0FBYTs7Ozs7SUFJYixtQ0FBYzs7Ozs7SUFJZCxpQ0FBWTs7Ozs7Ozs7OztBQVVkLHNDQVNDOzs7Ozs7SUFMQyxpQ0FBMEI7Ozs7O0lBSTFCLG1DQUFjOztBQU9oQixNQUFNLE9BQU8sb0JBQW9COzs7OztJQUkvQixPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBWEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLHViQUFpQzthQUNsQzs7O21CQUVFLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLG9DQUFnQzs7SUFDaEMsb0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEJSRUFEQ1JVTUJTLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBhIHNpbmdsZSBCcmVhZGNydW1ic0NvbXBvbmVudCdzIFwiSXRlbVwiXG4gKlxuICogQHByb3BlcnR5IGxhYmVsIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElCcmVhZGNydW1ic0l0ZW0ge1xuICAvKipcbiAgICogaXRlbSdzIGxhYmVsXG4gICAqL1xuICBsYWJlbDogc3RyaW5nO1xuICAvKipcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZDogYW55O1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm8gdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgQnJlYWRjcnVtYnNDb21wb25lbnQncyBcIkRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBpdGVtcyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElCcmVhZGNydW1ic0RhdGEge1xuICAvKipcbiAgICogZWFjaCBpdGVtIHJlbmRlcnMgYSBicmVhZGNydW1iIGxldmVsXG4gICAqL1xuICBpdGVtczogSUJyZWFkY3J1bWJzSXRlbVtdO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWJyZWFkY3J1bWJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JyZWFkY3J1bWJzLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJzQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSUJyZWFkY3J1bWJzRGF0YTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG59XG4iXX0=