//---------------------------
// ANCHOR-WRAPPER.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let AnchorWrapperComponent = class AnchorWrapperComponent {
    constructor() {
        this.clicked = new EventEmitter();
    }
    isExternal(href) {
        return /^http(?:s)?:\/{2}\S+$/.test(href);
    }
    /**
     * Click event handler.
     * Outputs the payload to it's parent component
     */
    onClick(payload) {
        this.clicked.emit(payload);
    }
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
export { AnchorWrapperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5jaG9yLXdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FuY2hvci13cmFwcGVyL2FuY2hvci13cmFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixvQkFBb0I7QUFDcEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUN2QyxNQUFNLGVBQWUsQ0FBQztBQU92QixJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQUFuQztRQUtZLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBYTlDLENBQUM7SUFYUSxVQUFVLENBQUMsSUFBSTtRQUNwQixPQUFPLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0YsQ0FBQTtBQWpCVTtJQUFSLEtBQUssRUFBRTs7b0RBQWM7QUFFYjtJQUFSLEtBQUssRUFBRTs7dURBQWlCO0FBRWY7SUFBVCxNQUFNLEVBQUU7O3VEQUFtQztBQUxqQyxzQkFBc0I7SUFKbEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3Qiw4K0NBQW9DO0tBQ3JDLENBQUM7R0FDVyxzQkFBc0IsQ0FrQmxDO1NBbEJZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBBTkNIT1ItV1JBUFBFUi50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWFuY2hvci13cmFwcGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FuY2hvci13cmFwcGVyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFuY2hvcldyYXBwZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBBbmNob3I7XG5cbiAgQElucHV0KCkgY2xhc3Nlczogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBjbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHVibGljIGlzRXh0ZXJuYWwoaHJlZikge1xuICAgIHJldHVybiAvXmh0dHAoPzpzKT86XFwvezJ9XFxTKyQvLnRlc3QoaHJlZik7XG4gIH1cblxuICAvKipcbiAgICogQ2xpY2sgZXZlbnQgaGFuZGxlci5cbiAgICogT3V0cHV0cyB0aGUgcGF5bG9hZCB0byBpdCdzIHBhcmVudCBjb21wb25lbnRcbiAgICovXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIHRoaXMuY2xpY2tlZC5lbWl0KHBheWxvYWQpO1xuICB9XG59XG4iXX0=