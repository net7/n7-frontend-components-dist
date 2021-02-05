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
            template: "<nav class=\"n7-nav {{data.classes || ''}}\" *ngIf=\"data\">\r\n    <ul class=\"n7-nav__list\">\r\n        <n7-anchor-wrapper \r\n        *ngFor=\"let item of data.items\"\r\n        [data]=\"item.anchor\" \r\n        [classes]=\"'n7-nav__link'\" \r\n        (clicked)=\"onClick($event)\">\r\n            <li class=\"n7-nav__item {{ item.classes || '' }}\">\r\n                <img class=\"n7-nav__image\" *ngIf=\"item.image\" src=\"{{ item.image }}\">\r\n                <span class=\"n7-nav__icon {{ item.icon }}\" *ngIf=\"item.icon\"></span>\r\n                <span class=\"n7-nav__label\">{{ item.text }}</span>\r\n            </li>\r\n        </n7-anchor-wrapper>\r\n    </ul>\r\n</nav>"
        })
    ], NavComponent);
    return NavComponent;
}());
export { NavComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9uYXYvbmF2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXNFakQ7SUFBQTtJQVNBLENBQUM7SUFKQyw4QkFBTyxHQUFQLFVBQVEsT0FBWTtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFQUTtRQUFSLEtBQUssRUFBRTs7OENBQXNCO0lBRXJCO1FBQVIsS0FBSyxFQUFFOzs4Q0FBVztJQUhSLFlBQVk7UUFKeEIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsZ3NCQUF5QjtTQUMxQixDQUFDO09BQ1csWUFBWSxDQVN4QjtJQUFELG1CQUFDO0NBQUEsQUFURCxJQVNDO1NBVFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQW5jaG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkLWludGVyZmFjZXMnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgbmF2YmFyIGl0ZW1cclxuICpcclxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBsaW5rIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmF2SXRlbSB7XHJcbiAgLyoqXHJcbiAgICogdGV4dCBvZiBhIHNpbmdsZSBpdGVtIG9mIHRoZSBuYXZiYXIgKHRleHQgYW5kIHBheWxvYWQgYXJlIGNvbm5lY3RlZClcclxuICAgKi9cclxuICB0ZXh0OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIGltYWdlIHVybCBmb3IgY29udGV4dHVhbCBpY29uL3RodW1ibmFpbFxyXG4gICAqL1xyXG4gIGltYWdlPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBpY29uIG5hbWUvY2xhc3MgZnJvbSBpY29uIGZvbnRcclxuICAgKi9cclxuICBpY29uPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgYW5jaG9yPzogQW5jaG9yO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xyXG4gICAqL1xyXG4gIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciB0aGUgbmF2YmFyXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBpdGVtcyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBOYXZEYXRhIHtcclxuICAvKipcclxuICAgKiBsaXN0IG9mIHRoZSBpdGVtcyBpbiB0aGUgbmF2YmFyXHJcbiAgICovXHJcbiAgaXRlbXM6IE5hdkl0ZW1bXTtcclxuXHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcclxuICAgKi9cclxuICBwYXlsb2FkPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xyXG4gICAqL1xyXG4gIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LW5hdicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25hdi5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdkNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgcHVibGljIGRhdGE6IE5hdkRhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgb25DbGljayhwYXlsb2FkOiBhbnkpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==