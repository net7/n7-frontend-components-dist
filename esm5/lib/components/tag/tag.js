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
            template: "<span class=\"n7-tag {{data.classes || ''}}\" *ngIf=\"data\">\n    <span class=\"n7-tag__label\" *ngIf=\"data.label\">\n        {{ data.label }}\n    </span>\n    <span class=\"n7-tag__text\" *ngIf=\"data.text\">\n        {{ data.text }}\n    </span>\n    <span class=\"n7-tag__icon {{data.icon}}\" *ngIf=\"data.icon\" (click)=\"onClick(data.payload)\"></span>\n</span>"
        })
    ], TagComponent);
    return TagComponent;
}());
export { TagComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWcvdGFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixTQUFTO0FBQ1QsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQTRDakQ7SUFBQTtJQVNBLENBQUM7SUFKRyw4QkFBTyxHQUFQLFVBQVEsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQVBRO1FBQVIsS0FBSyxFQUFFOzs4Q0FBc0I7SUFFckI7UUFBUixLQUFLLEVBQUU7OzhDQUFrQjtJQUhqQixZQUFZO1FBSnhCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLDZYQUF5QjtTQUMxQixDQUFDO09BQ1csWUFBWSxDQVN4QjtJQUFELG1CQUFDO0NBQUEsQUFURCxJQVNDO1NBVFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUQUcudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFRhZ0NvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGxhYmVsIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRhZ0RhdGEge1xuICAgIC8qKlxuICAgICAqIHRhZydzIGxhYmVsXG4gICAgICovXG4gICAgbGFiZWw/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogdGV4dCB2aXN1YWxpemVkIG9uIHRoZSB0YWdcbiAgICAgKi9cbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogYWN0aW9uIGljb24gKG9uIHJpZ2h0IHNpZGUpXG4gICAgICovXG4gICAgaWNvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgICAqL1xuICAgIGNsYXNzZXM/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAgICAqL1xuICAgIHBheWxvYWQ/OiBhbnk7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBpbmZvXG4gICAgICovXG4gICAgX21ldGE/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LXRhZycsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWcuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVGFnQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBwdWJsaWMgZGF0YTogVGFnRGF0YTtcblxuICAgIEBJbnB1dCgpIHB1YmxpYyBlbWl0OiBhbnk7XG5cbiAgICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gICAgfVxufVxuIl19