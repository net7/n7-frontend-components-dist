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
export class ListComponent {
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
if (false) {
    /** @type {?} */
    ListComponent.prototype.data;
    /** @type {?} */
    ListComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xpc3QtY29tcG9uZW50L2xpc3QtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUVqRCwrQkFPQzs7O0lBTkMseUJBQWE7O0lBQ2IseUJBQWM7O0lBQ2QsMEJBQWU7O0lBQ2YsNEJBQWlCOztJQUNqQiw0QkFBYzs7SUFDZCwwQkFBWTs7Ozs7QUFHZCx3Q0FHQzs7O0lBRkMsbUNBQW1COztJQUNuQixxQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJoQixNQUFNLE9BQU8sYUFBYTs7Ozs7SUFJeEIsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQVpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3Qiw2ZkFBb0M7YUFDckM7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETiw2QkFBa0M7O0lBQ2xDLDZCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJTGlzdEl0ZW0ge1xuICBib2R5OiBzdHJpbmc7XG4gIGxlZnQ/OiBzdHJpbmc7XG4gIHJpZ2h0Pzogc3RyaW5nO1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICBwYXlsb2FkPzogYW55O1xuICBfbWV0YT86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTGlzdENvbXBvbmVudERhdGEge1xuICBpdGVtczogSUxpc3RJdGVtW10sXG4gIG9wdGlvbnM/OiBhbnk7XG59XG5cbi8qKlxuICogTGlzdENvbXBvbmVudCA8ZHYtbGlzdC1jb21wb25lbnQ+XG4gKiBcbiAqIGV4YW1wbGU6XG4gKiBgYGBodG1sXG4gKiA8ZHYtbGlzdC1jb21wb25lbnQgW2RhdGFdPVwie1xuICogICBpdGVtczogW3tcbiAqICAgICBib2R5OiAnaGVsbG8nLFxuICogICAgIHBheWxvYWQ6ICdmaXJzdCBpdGVtIScsXG4gKiAgICAgY2xhc3NlczogJ2lzLWFjdGl2ZSdcbiAqICAgfSwge1xuICogICAgIGJvZHk6ICdoZWxsbycsXG4gKiAgICAgbGVmdDogJzxpIGNsYXNzPVxcJ2ZhcyBmYS10aHVtYnMtdXBcXCc+PC9pPicsXG4gKiAgICAgcGF5bG9hZDogJ3NlY29uZCBpdGVtISdcbiAqICAgfSwge1xuICogICAgIGJvZHk6ICdoZWxsbycsXG4gKiAgICAgcmlnaHQ6ICc8c3Bhbj4zMzwvc3Bhbj4nLFxuICogICAgIHBheWxvYWQ6ICd0aGlyZCBpdGVtISdcbiAqICAgfV0gXG4gKiB9XCI+PC9kdi1saXN0LWNvbXBvbmVudD5cbiAqIGBgYFxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2R2LWxpc3QtY29tcG9uZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3QtY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJTGlzdENvbXBvbmVudERhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNsaWNrKHBheWxvYWQpe1xuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxufSJdfQ==