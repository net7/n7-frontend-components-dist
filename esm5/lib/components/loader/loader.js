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
            template: "<div class=\"n7-loader {{ data && data.classes ? data.classes : '' }}\">\n    Loading\n</div>"
        })
    ], LoaderComponent);
    return LoaderComponent;
}());
export { LoaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixZQUFZO0FBQ1osNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXVCakQ7SUFBQTtJQUVBLENBQUM7SUFEWTtRQUFSLEtBQUssRUFBRTs7aURBQXlCO0lBRHhCLGVBQWU7UUFKM0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIseUdBQTRCO1NBQzdCLENBQUM7T0FDVyxlQUFlLENBRTNCO0lBQUQsc0JBQUM7Q0FBQSxBQUZELElBRUM7U0FGWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIExPQURFUi50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgTG9hZGVyQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlckRhdGEge1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAgICovXG4gICAgY2xhc3Nlcz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICAgKi9cbiAgICBfbWV0YT86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctbG9hZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRlci5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBMb2FkZXJDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkYXRhOiBMb2FkZXJEYXRhO1xufVxuIl19