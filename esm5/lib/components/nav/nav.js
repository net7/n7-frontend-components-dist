import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.onClick = function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NavComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NavComponent.prototype, "emit", void 0);
    NavComponent = __decorate([
        Component({
            selector: 'n7-nav',
            template: "<nav class=\"n7-nav {{data.classes || ''}}\" *ngIf=\"data\">\r\n    <ul class=\"n7-nav__list\">\r\n        <li class=\"n7-nav__item {{ item.classes || '' }}\" *ngFor=\"let item of data.items\">\r\n            <n7-anchor-wrapper [data]=\"item.anchor\" [classes]=\"'n7-nav__link'\" (clicked)=\"onClick($event)\">\r\n                <span class=\"n7-nav__label\">{{ item.text }}</span>\r\n            </n7-anchor-wrapper>\r\n        </li>\r\n    </ul>\r\n</nav>"
        })
    ], NavComponent);
    return NavComponent;
}());
export { NavComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9uYXYvbmF2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQTREakQ7SUFBQTtJQVNBLENBQUM7SUFKQyw4QkFBTyxHQUFQLFVBQVEsT0FBWTtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFQUTtRQUFSLEtBQUssRUFBRTs7OENBQXNCO0lBRXJCO1FBQVIsS0FBSyxFQUFFOzs4Q0FBVztJQUhSLFlBQVk7UUFKeEIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsc2RBQXlCO1NBQzFCLENBQUM7T0FDVyxZQUFZLENBU3hCO0lBQUQsbUJBQUM7Q0FBQSxBQVRELElBU0M7U0FUWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBhIHNpbmdsZSBuYXZiYXIgaXRlbVxyXG4gKlxyXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGxpbmsgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBOYXZJdGVtIHtcclxuICAvKipcclxuICAgKiB0ZXh0IG9mIGEgc2luZ2xlIGl0ZW0gb2YgdGhlIG5hdmJhciAodGV4dCBhbmQgcGF5bG9hZCBhcmUgY29ubmVjdGVkKVxyXG4gICAqL1xyXG4gIHRleHQ6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gIGFuY2hvcj86IEFuY2hvcjtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgdGhlIG5hdmJhclxyXG4gKlxyXG4gKiBAcHJvcGVydHkgaXRlbXMgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmF2RGF0YSB7XHJcbiAgLyoqXHJcbiAgICogbGlzdCBvZiB0aGUgaXRlbXMgaW4gdGhlIG5hdmJhclxyXG4gICAqL1xyXG4gIGl0ZW1zOiBOYXZJdGVtW107XHJcblxyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXHJcbiAgICovXHJcbiAgcGF5bG9hZD86IGFueTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1uYXYnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBkYXRhOiBOYXZEYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZDogYW55KSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxufVxyXG4iXX0=