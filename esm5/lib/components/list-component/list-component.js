/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
/**
 * @record
 */
export function IListItem() { }
if (false) {
    /** @type {?} */
    IListItem.prototype.body;
    /** @type {?|undefined} */
    IListItem.prototype.left;
    /** @type {?|undefined} */
    IListItem.prototype.right;
    /** @type {?|undefined} */
    IListItem.prototype.classes;
    /** @type {?|undefined} */
    IListItem.prototype.payload;
    /** @type {?|undefined} */
    IListItem.prototype._meta;
}
/**
 * @record
 */
export function IListComponentData() { }
if (false) {
    /** @type {?} */
    IListComponentData.prototype.items;
    /** @type {?|undefined} */
    IListComponentData.prototype.options;
}
/**
 * ListComponent <dv-list-component>
 *
 * example:
 * ```html
 * <dv-list-component [data]="{
 *   items: [{
 *     body: 'hello',
 *     payload: 'first item!',
 *     classes: 'is-active'
 *   }, {
 *     body: 'hello',
 *     left: '<i class=\'fas fa-thumbs-up\'></i>',
 *     payload: 'second item!'
 *   }, {
 *     body: 'hello',
 *     right: '<span>33</span>',
 *     payload: 'third item!'
 *   }]
 * }"></dv-list-component>
 * ```
 */
var ListComponent = /** @class */ (function () {
    function ListComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    ListComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    ListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dv-list-component',
                    template: "<ul *ngIf=\"data\" class=\"n7-component-list\">\n  <li \n  *ngFor=\"let item of data.items\"\n  class=\"n7-component-list__item {{ item.classes || '' }}\"\n  (click)=\"onClick(item.payload)\">\n    <div *ngIf=\"item.left\" class=\"n7-component-list__item-left\" [innerHTML]=\"item.left\"></div>\n    <div class=\"n7-component-list__item-body\" [innerHTML]=\"item.body\"></div>\n    <div *ngIf=\"item.right\" class=\"n7-component-list__item-right\" [innerHTML]=\"item.right\"></div>\n  </li>\n</ul>"
                }] }
    ];
    ListComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return ListComponent;
}());
export { ListComponent };
if (false) {
    /** @type {?} */
    ListComponent.prototype.data;
    /** @type {?} */
    ListComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xpc3QtY29tcG9uZW50L2xpc3QtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUVqRCwrQkFPQzs7O0lBTkMseUJBQWE7O0lBQ2IseUJBQWM7O0lBQ2QsMEJBQWU7O0lBQ2YsNEJBQWlCOztJQUNqQiw0QkFBYzs7SUFDZCwwQkFBWTs7Ozs7QUFHZCx3Q0FHQzs7O0lBRkMsbUNBQW1COztJQUNuQixxQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJoQjtJQUFBO0lBYUEsQ0FBQzs7Ozs7SUFMQywrQkFBTzs7OztJQUFQLFVBQVEsT0FBTztRQUNiLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLDZmQUFvQztpQkFDckM7Ozt1QkFFRSxLQUFLO3VCQUNMLEtBQUs7O0lBT1Isb0JBQUM7Q0FBQSxBQWJELElBYUM7U0FUWSxhQUFhOzs7SUFDeEIsNkJBQWtDOztJQUNsQyw2QkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxpc3RJdGVtIHtcbiAgYm9keTogc3RyaW5nO1xuICBsZWZ0Pzogc3RyaW5nO1xuICByaWdodD86IHN0cmluZztcbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgcGF5bG9hZD86IGFueTtcbiAgX21ldGE/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxpc3RDb21wb25lbnREYXRhIHtcbiAgaXRlbXM6IElMaXN0SXRlbVtdLFxuICBvcHRpb25zPzogYW55O1xufVxuXG4vKipcbiAqIExpc3RDb21wb25lbnQgPGR2LWxpc3QtY29tcG9uZW50PlxuICogXG4gKiBleGFtcGxlOlxuICogYGBgaHRtbFxuICogPGR2LWxpc3QtY29tcG9uZW50IFtkYXRhXT1cIntcbiAqICAgaXRlbXM6IFt7XG4gKiAgICAgYm9keTogJ2hlbGxvJyxcbiAqICAgICBwYXlsb2FkOiAnZmlyc3QgaXRlbSEnLFxuICogICAgIGNsYXNzZXM6ICdpcy1hY3RpdmUnXG4gKiAgIH0sIHtcbiAqICAgICBib2R5OiAnaGVsbG8nLFxuICogICAgIGxlZnQ6ICc8aSBjbGFzcz1cXCdmYXMgZmEtdGh1bWJzLXVwXFwnPjwvaT4nLFxuICogICAgIHBheWxvYWQ6ICdzZWNvbmQgaXRlbSEnXG4gKiAgIH0sIHtcbiAqICAgICBib2R5OiAnaGVsbG8nLFxuICogICAgIHJpZ2h0OiAnPHNwYW4+MzM8L3NwYW4+JyxcbiAqICAgICBwYXlsb2FkOiAndGhpcmQgaXRlbSEnXG4gKiAgIH1dIFxuICogfVwiPjwvZHYtbGlzdC1jb21wb25lbnQ+XG4gKiBgYGBcbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkdi1saXN0LWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LWNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSUxpc3RDb21wb25lbnREYXRhO1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DbGljayhwYXlsb2FkKXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cbn0iXX0=