//---------------------------
// LOADER.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], LoaderComponent.prototype, "data", void 0);
    LoaderComponent = __decorate([
        Component({
            selector: 'n7-loader',
            template: "<div class=\"n7-loader {{ data && data.classes ? data.classes : '' }}\">\r\n    Loading\r\n</div>"
        })
    ], LoaderComponent);
    return LoaderComponent;
}());
export { LoaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixZQUFZO0FBQ1osNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXVCakQ7SUFBQTtJQUVBLENBQUM7SUFEWTtRQUFSLEtBQUssRUFBRTs7aURBQXlCO0lBRHhCLGVBQWU7UUFKM0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsNkdBQTRCO1NBQzdCLENBQUM7T0FDVyxlQUFlLENBRTNCO0lBQUQsc0JBQUM7Q0FBQSxBQUZELElBRUM7U0FGWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gTE9BREVSLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBMb2FkZXJDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlckRhdGEge1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAgICovXHJcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgICAqL1xyXG4gICAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctbG9hZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGVyLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2FkZXJDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgcHVibGljIGRhdGE6IExvYWRlckRhdGE7XHJcbn1cclxuIl19