/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// BREADCRUMBS.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * @record
 */
export function IBreadcrumbsItem() { }
if (false) {
    /** @type {?} */
    IBreadcrumbsItem.prototype.label;
    /** @type {?} */
    IBreadcrumbsItem.prototype.payload;
    /** @type {?|undefined} */
    IBreadcrumbsItem.prototype.classes;
    /** @type {?|undefined} */
    IBreadcrumbsItem.prototype._meta;
}
/**
 * @record
 */
export function IBreadcrumbsData() { }
if (false) {
    /** @type {?} */
    IBreadcrumbsData.prototype.items;
    /** @type {?|undefined} */
    IBreadcrumbsData.prototype.classes;
}
/**
 * BreadcrumbsComponent <n7-breadcrumbs>
 *
 * \@example
 * ```html
 *
 * <!-- TODO: add component example -->
 * ```
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUVqRCxzQ0FLQzs7O0lBSkMsaUNBQWM7O0lBQ2QsbUNBQWE7O0lBQ2IsbUNBQWM7O0lBQ2QsaUNBQVk7Ozs7O0FBR2Qsc0NBR0M7OztJQUZDLGlDQUEwQjs7SUFDMUIsbUNBQWM7Ozs7Ozs7Ozs7O0FBaUJoQixNQUFNLE9BQU8sb0JBQW9COzs7OztJQUkvQixPQUFPLENBQUMsT0FBTztRQUNiLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBWEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLHViQUFpQzthQUNsQzs7O21CQUVFLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLG9DQUFnQzs7SUFDaEMsb0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEJSRUFEQ1JVTUJTLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUJyZWFkY3J1bWJzSXRlbSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHBheWxvYWQ6IGFueTtcbiAgY2xhc3Nlcz86IGFueTtcbiAgX21ldGE/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUJyZWFkY3J1bWJzRGF0YSB7XG4gIGl0ZW1zOiBJQnJlYWRjcnVtYnNJdGVtW107XG4gIGNsYXNzZXM/OiBhbnk7XG59XG5cbi8qKlxuICogQnJlYWRjcnVtYnNDb21wb25lbnQgPG43LWJyZWFkY3J1bWJzPlxuICogXG4gKiBAZXhhbXBsZVxuICogYGBgaHRtbFxuICogXG4gKiA8IS0tIFRPRE86IGFkZCBjb21wb25lbnQgZXhhbXBsZSAtLT5cbiAqIGBgYFxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWJyZWFkY3J1bWJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JyZWFkY3J1bWJzLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJzQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSUJyZWFkY3J1bWJzRGF0YTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2xpY2socGF5bG9hZCl7XG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfSAgICBcbn1cbiJdfQ==