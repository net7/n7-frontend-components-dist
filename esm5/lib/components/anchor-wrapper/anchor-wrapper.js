/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/anchor-wrapper/anchor-wrapper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// ANCHOR-WRAPPER.ts
//---------------------------
import { Component, Input, Output, EventEmitter } from '@angular/core';
var AnchorWrapperComponent = /** @class */ (function () {
    function AnchorWrapperComponent() {
        this.clicked = new EventEmitter();
    }
    /**
     * @param {?} href
     * @return {?}
     */
    AnchorWrapperComponent.prototype.isExternal = /**
     * @param {?} href
     * @return {?}
     */
    function (href) {
        return /^http(?:s)?:\/{2}\S+$/.test(href);
    };
    /**
     * Click event handler.
     * Outputs the payload to it's parent component
     */
    /**
     * Click event handler.
     * Outputs the payload to it's parent component
     * @param {?} payload
     * @return {?}
     */
    AnchorWrapperComponent.prototype.onClick = /**
     * Click event handler.
     * Outputs the payload to it's parent component
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        this.clicked.emit(payload);
    };
    AnchorWrapperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-anchor-wrapper',
                    template: "<ng-container *ngIf=\"data; else noData\">\r\n    <ng-container *ngIf=\"data.href && isExternal(data.href)\">\r\n      <ng-container *ngTemplateOutlet=\"externalUrl\"></ng-container>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"data.href && !isExternal(data.href)\">\r\n      <ng-container *ngTemplateOutlet=\"internalUrl\"></ng-container>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!data.href\">\r\n      <ng-container *ngTemplateOutlet=\"noUrl\"></ng-container>\r\n    </ng-container>\r\n</ng-container>\r\n\r\n<!-- No data template -->\r\n<ng-template #noData>\r\n  <a class=\"{{ classes || '' }}\"><ng-container *ngTemplateOutlet=\"content\"></ng-container></a>\r\n</ng-template>\r\n\r\n<!-- Internal URL template -->\r\n<ng-template #internalUrl>\r\n  <a \r\n  [routerLink]=\"data.href\" \r\n  [target]=\"data.target || '_self'\" \r\n  class=\"{{ classes || '' }}\"\r\n  [queryParams]=\"data.queryParams || null\">\r\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n  </a>\r\n</ng-template>\r\n\r\n<!-- External URL template -->\r\n<ng-template #externalUrl>\r\n  <a [href]=\"data.href\" [target]=\"data.target || '_self'\" class=\"{{ classes || '' }}\">\r\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n  </a>\r\n</ng-template>\r\n\r\n<!-- No URL template -->\r\n<ng-template #noUrl>\r\n  <a (click)=\"onClick(data.payload)\" class=\"{{ classes || '' }}\">\r\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n  </a>\r\n</ng-template>\r\n\r\n<ng-template #content>\r\n  <ng-content></ng-content>\r\n</ng-template>\r\n"
                }] }
    ];
    AnchorWrapperComponent.propDecorators = {
        data: [{ type: Input }],
        classes: [{ type: Input }],
        clicked: [{ type: Output }]
    };
    return AnchorWrapperComponent;
}());
export { AnchorWrapperComponent };
if (false) {
    /** @type {?} */
    AnchorWrapperComponent.prototype.data;
    /** @type {?} */
    AnchorWrapperComponent.prototype.classes;
    /** @type {?} */
    AnchorWrapperComponent.prototype.clicked;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5jaG9yLXdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FuY2hvci13cmFwcGVyL2FuY2hvci13cmFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUl2RTtJQUFBO1FBT1ksWUFBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFhOUMsQ0FBQzs7Ozs7SUFYUSwyQ0FBVTs7OztJQUFqQixVQUFrQixJQUFJO1FBQ3BCLE9BQU8sdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7SUFDSCx3Q0FBTzs7Ozs7O0lBQVAsVUFBUSxPQUFPO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3Qix3a0RBQW9DO2lCQUNyQzs7O3VCQUVFLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxNQUFNOztJQWFULDZCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FoQlksc0JBQXNCOzs7SUFDakMsc0NBQXVCOztJQUN2Qix5Q0FBeUI7O0lBQ3pCLHlDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEFOQ0hPUi1XUkFQUEVSLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJQW5jaG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkLWludGVyZmFjZXMnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctYW5jaG9yLXdyYXBwZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hbmNob3Itd3JhcHBlci5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5jaG9yV3JhcHBlckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogSUFuY2hvcjtcclxuICBASW5wdXQoKSBjbGFzc2VzOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIGNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgcHVibGljIGlzRXh0ZXJuYWwoaHJlZikge1xyXG4gICAgcmV0dXJuIC9eaHR0cCg/OnMpPzpcXC97Mn1cXFMrJC8udGVzdChocmVmKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsaWNrIGV2ZW50IGhhbmRsZXIuXHJcbiAgICogT3V0cHV0cyB0aGUgcGF5bG9hZCB0byBpdCdzIHBhcmVudCBjb21wb25lbnRcclxuICAgKi9cclxuICBvbkNsaWNrKHBheWxvYWQpIHtcclxuICAgIHRoaXMuY2xpY2tlZC5lbWl0KHBheWxvYWQpO1xyXG4gIH1cclxufVxyXG4iXX0=