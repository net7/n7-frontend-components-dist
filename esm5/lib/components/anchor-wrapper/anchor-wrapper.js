//---------------------------
// ANCHOR-WRAPPER.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var AnchorWrapperComponent = /** @class */ (function () {
    function AnchorWrapperComponent() {
        this.clicked = new EventEmitter();
    }
    AnchorWrapperComponent.prototype.isExternal = function (href) {
        return /^http(?:s)?:\/{2}\S+$/.test(href);
    };
    /**
     * Click event handler.
     * Outputs the payload to it's parent component
     */
    AnchorWrapperComponent.prototype.onClick = function (payload) {
        this.clicked.emit(payload);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AnchorWrapperComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AnchorWrapperComponent.prototype, "classes", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], AnchorWrapperComponent.prototype, "clicked", void 0);
    AnchorWrapperComponent = __decorate([
        Component({
            selector: 'n7-anchor-wrapper',
            template: "<ng-container *ngIf=\"data; else noData\">\n    <ng-container *ngIf=\"data.href && isExternal(data.href)\">\n      <ng-container *ngTemplateOutlet=\"externalUrl\"></ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"data.href && !isExternal(data.href)\">\n      <ng-container *ngTemplateOutlet=\"internalUrl\"></ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"!data.href\">\n      <ng-container *ngTemplateOutlet=\"noUrl\"></ng-container>\n    </ng-container>\n</ng-container>\n\n<!-- No data template -->\n<ng-template #noData>\n  <a class=\"{{ classes || '' }}\"><ng-container *ngTemplateOutlet=\"content\"></ng-container></a>\n</ng-template>\n\n<!-- Internal URL template -->\n<ng-template #internalUrl>\n  <a \n  [routerLink]=\"data.href\" \n  [target]=\"data.target || '_self'\" \n  class=\"{{ classes || '' }}\"\n  [queryParams]=\"data.queryParams || null\">\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </a>\n</ng-template>\n\n<!-- External URL template -->\n<ng-template #externalUrl>\n  <a [href]=\"data.href\" [target]=\"data.target || '_self'\" class=\"{{ classes || '' }}\">\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </a>\n</ng-template>\n\n<!-- No URL template -->\n<ng-template #noUrl>\n  <a (click)=\"onClick(data.payload)\" class=\"{{ classes || '' }}\">\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </a>\n</ng-template>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n"
        })
    ], AnchorWrapperComponent);
    return AnchorWrapperComponent;
}());
export { AnchorWrapperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5jaG9yLXdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FuY2hvci13cmFwcGVyL2FuY2hvci13cmFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixvQkFBb0I7QUFDcEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUN2QyxNQUFNLGVBQWUsQ0FBQztBQU92QjtJQUFBO1FBS1ksWUFBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFhOUMsQ0FBQztJQVhRLDJDQUFVLEdBQWpCLFVBQWtCLElBQUk7UUFDcEIsT0FBTyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVEOzs7T0FHRztJQUNILHdDQUFPLEdBQVAsVUFBUSxPQUFPO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQWhCUTtRQUFSLEtBQUssRUFBRTs7d0RBQWM7SUFFYjtRQUFSLEtBQUssRUFBRTs7MkRBQWlCO0lBRWY7UUFBVCxNQUFNLEVBQUU7OzJEQUFtQztJQUxqQyxzQkFBc0I7UUFKbEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3Qiw4K0NBQW9DO1NBQ3JDLENBQUM7T0FDVyxzQkFBc0IsQ0FrQmxDO0lBQUQsNkJBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWxCWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQU5DSE9SLVdSQVBQRVIudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5jaG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkLWludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1hbmNob3Itd3JhcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbmNob3Itd3JhcHBlci5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBbmNob3JXcmFwcGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogQW5jaG9yO1xuXG4gIEBJbnB1dCgpIGNsYXNzZXM6IHN0cmluZztcblxuICBAT3V0cHV0KCkgY2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHB1YmxpYyBpc0V4dGVybmFsKGhyZWYpIHtcbiAgICByZXR1cm4gL15odHRwKD86cyk/OlxcL3syfVxcUyskLy50ZXN0KGhyZWYpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsaWNrIGV2ZW50IGhhbmRsZXIuXG4gICAqIE91dHB1dHMgdGhlIHBheWxvYWQgdG8gaXQncyBwYXJlbnQgY29tcG9uZW50XG4gICAqL1xuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICB0aGlzLmNsaWNrZWQuZW1pdChwYXlsb2FkKTtcbiAgfVxufVxuIl19