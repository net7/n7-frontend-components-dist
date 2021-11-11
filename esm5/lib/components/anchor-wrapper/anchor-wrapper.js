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
            template: "<ng-container *ngIf=\"data; else noData\">\r\n    <ng-container *ngIf=\"data.href && isExternal(data.href)\">\r\n      <ng-container *ngTemplateOutlet=\"externalUrl\"></ng-container>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"data.href && !isExternal(data.href)\">\r\n      <ng-container *ngTemplateOutlet=\"internalUrl\"></ng-container>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!data.href\">\r\n      <ng-container *ngTemplateOutlet=\"noUrl\"></ng-container>\r\n    </ng-container>\r\n</ng-container>\r\n\r\n<!-- No data template -->\r\n<ng-template #noData>\r\n  <a class=\"{{ classes || '' }}\"><ng-container *ngTemplateOutlet=\"content\"></ng-container></a>\r\n</ng-template>\r\n\r\n<!-- Internal URL template -->\r\n<ng-template #internalUrl>\r\n  <a \r\n  [routerLink]=\"data.href\" \r\n  [target]=\"data.target || '_self'\" \r\n  class=\"{{ classes || '' }}\"\r\n  [queryParams]=\"data.queryParams || null\">\r\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n  </a>\r\n</ng-template>\r\n\r\n<!-- External URL template -->\r\n<ng-template #externalUrl>\r\n  <a [href]=\"data.href\" [target]=\"data.target || '_self'\" class=\"{{ classes || '' }}\">\r\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n  </a>\r\n</ng-template>\r\n\r\n<!-- No URL template -->\r\n<ng-template #noUrl>\r\n  <a (click)=\"onClick(data.payload)\" class=\"{{ classes || '' }}\">\r\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n  </a>\r\n</ng-template>\r\n\r\n<ng-template #content>\r\n  <ng-content></ng-content>\r\n</ng-template>\r\n"
        })
    ], AnchorWrapperComponent);
    return AnchorWrapperComponent;
}());
export { AnchorWrapperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5jaG9yLXdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FuY2hvci13cmFwcGVyL2FuY2hvci13cmFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixvQkFBb0I7QUFDcEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUN2QyxNQUFNLGVBQWUsQ0FBQztBQU92QjtJQUFBO1FBS1ksWUFBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFhOUMsQ0FBQztJQVhRLDJDQUFVLEdBQWpCLFVBQWtCLElBQUk7UUFDcEIsT0FBTyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVEOzs7T0FHRztJQUNILHdDQUFPLEdBQVAsVUFBUSxPQUFPO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQWhCUTtRQUFSLEtBQUssRUFBRTs7d0RBQWM7SUFFYjtRQUFSLEtBQUssRUFBRTs7MkRBQWlCO0lBRWY7UUFBVCxNQUFNLEVBQUU7OzJEQUFtQztJQUxqQyxzQkFBc0I7UUFKbEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3Qix3a0RBQW9DO1NBQ3JDLENBQUM7T0FDVyxzQkFBc0IsQ0FrQmxDO0lBQUQsNkJBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWxCWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBBTkNIT1ItV1JBUFBFUi50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWFuY2hvci13cmFwcGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYW5jaG9yLXdyYXBwZXIuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFuY2hvcldyYXBwZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IEFuY2hvcjtcclxuXHJcbiAgQElucHV0KCkgY2xhc3Nlczogc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KCkgY2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBwdWJsaWMgaXNFeHRlcm5hbChocmVmKSB7XHJcbiAgICByZXR1cm4gL15odHRwKD86cyk/OlxcL3syfVxcUyskLy50ZXN0KGhyZWYpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xpY2sgZXZlbnQgaGFuZGxlci5cclxuICAgKiBPdXRwdXRzIHRoZSBwYXlsb2FkIHRvIGl0J3MgcGFyZW50IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIG9uQ2xpY2socGF5bG9hZCkge1xyXG4gICAgdGhpcy5jbGlja2VkLmVtaXQocGF5bG9hZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==