//---------------------------
// BREADCRUMBS.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let BreadcrumbsComponent = class BreadcrumbsComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], BreadcrumbsComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], BreadcrumbsComponent.prototype, "emit", void 0);
BreadcrumbsComponent = __decorate([
    Component({
        selector: 'n7-breadcrumbs',
        template: "<div *ngIf=\"data\" class=\"n7-breadcrumbs {{ data.classes || '' }}\">\r\n    <nav class=\"n7-breadcrumbs__nav\">\r\n        <ol class=\"n7-breadcrumbs__list\">\r\n            <li *ngFor=\"let item of data.items\" class=\"n7-breadcrumbs__item {{ item.classes || '' }}\">\r\n                <n7-anchor-wrapper [classes]=\"'n7-breadcrumbs__label'\"\r\n                [data]=\"item.anchor\"\r\n                (clicked)=\"onClick($event)\">\r\n                    {{ item.label }}\r\n                </n7-anchor-wrapper>\r\n            </li>\r\n        </ol>\r\n    </nav>\r\n</div>\r\n"
    })
], BreadcrumbsComponent);
export { BreadcrumbsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixpQkFBaUI7QUFDakIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWtEakQsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFLL0IsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDRixDQUFBO0FBUlU7SUFBUixLQUFLLEVBQUU7O2tEQUF1QjtBQUV0QjtJQUFSLEtBQUssRUFBRTs7a0RBQVc7QUFIUixvQkFBb0I7SUFKaEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixvbEJBQWlDO0tBQ2xDLENBQUM7R0FDVyxvQkFBb0IsQ0FTaEM7U0FUWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBCUkVBRENSVU1CUy50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBhIHNpbmdsZSBCcmVhZGNydW1ic0NvbXBvbmVudCdzIFwiSXRlbVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBsYWJlbCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBCcmVhZGNydW1ic0l0ZW0ge1xyXG4gIC8qKlxyXG4gICAqIGl0ZW0ncyBsYWJlbFxyXG4gICAqL1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgYW5jaG9yOiBBbmNob3I7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaW5mbyB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xyXG4gICAqL1xyXG4gIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBCcmVhZGNydW1ic0NvbXBvbmVudCdzIFwiRGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBpdGVtcyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICpcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQnJlYWRjcnVtYnNEYXRhIHtcclxuICAvKipcclxuICAgKiBlYWNoIGl0ZW0gcmVuZGVycyBhIGJyZWFkY3J1bWIgbGV2ZWxcclxuICAgKi9cclxuICBpdGVtczogQnJlYWRjcnVtYnNJdGVtW107XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWJyZWFkY3J1bWJzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYnMuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJzQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBCcmVhZGNydW1ic0RhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgb25DbGljayhwYXlsb2FkKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxufVxyXG4iXX0=