//---------------------------
// TAG.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var TagComponent = /** @class */ (function () {
    function TagComponent() {
    }
    TagComponent.prototype.onClick = function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TagComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TagComponent.prototype, "emit", void 0);
    TagComponent = __decorate([
        Component({
            selector: 'n7-tag',
            template: "<span class=\"n7-tag {{data.classes || ''}}\" *ngIf=\"data\">\r\n    <span class=\"n7-tag__label\" *ngIf=\"data.label\">\r\n        {{ data.label }}\r\n    </span>\r\n    <span class=\"n7-tag__text\" *ngIf=\"data.text\">\r\n        {{ data.text }}\r\n    </span>\r\n    <span class=\"n7-tag__icon {{data.icon}}\" *ngIf=\"data.icon\" (click)=\"onClick(data.payload)\"></span>\r\n</span>"
        })
    ], TagComponent);
    return TagComponent;
}());
export { TagComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWcvdGFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixTQUFTO0FBQ1QsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQTRDakQ7SUFBQTtJQVNBLENBQUM7SUFKRyw4QkFBTyxHQUFQLFVBQVEsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQVBRO1FBQVIsS0FBSyxFQUFFOzs4Q0FBc0I7SUFFckI7UUFBUixLQUFLLEVBQUU7OzhDQUFrQjtJQUhqQixZQUFZO1FBSnhCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLDZZQUF5QjtTQUMxQixDQUFDO09BQ1csWUFBWSxDQVN4QjtJQUFELG1CQUFDO0NBQUEsQUFURCxJQVNDO1NBVFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFRBRy50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgVGFnQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgbGFiZWwgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBUYWdEYXRhIHtcclxuICAgIC8qKlxyXG4gICAgICogdGFnJ3MgbGFiZWxcclxuICAgICAqL1xyXG4gICAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIHRleHQgdmlzdWFsaXplZCBvbiB0aGUgdGFnXHJcbiAgICAgKi9cclxuICAgIHRleHQ6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWN0aW9uIGljb24gKG9uIHJpZ2h0IHNpZGUpXHJcbiAgICAgKi9cclxuICAgIGljb24/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICAgKi9cclxuICAgIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcclxuICAgICAqL1xyXG4gICAgcGF5bG9hZD86IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICAgKi9cclxuICAgIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LXRhZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhZy5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFnQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkYXRhOiBUYWdEYXRhO1xyXG5cclxuICAgIEBJbnB1dCgpIHB1YmxpYyBlbWl0OiBhbnk7XHJcblxyXG4gICAgb25DbGljayhwYXlsb2FkKSB7XHJcbiAgICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICAgIH1cclxufVxyXG4iXX0=