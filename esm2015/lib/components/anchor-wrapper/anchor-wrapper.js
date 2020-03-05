/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/anchor-wrapper/anchor-wrapper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// ANCHOR-WRAPPER.ts
//---------------------------
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class AnchorWrapperComponent {
    constructor() {
        this.clicked = new EventEmitter();
    }
    /**
     * @param {?} href
     * @return {?}
     */
    isExternal(href) {
        return /^http(?:s)?:\/{2}\S+$/.test(href);
    }
    /**
     * Click event handler.
     * Outputs the payload to it's parent component
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        this.clicked.emit(payload);
    }
}
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
if (false) {
    /** @type {?} */
    AnchorWrapperComponent.prototype.data;
    /** @type {?} */
    AnchorWrapperComponent.prototype.classes;
    /** @type {?} */
    AnchorWrapperComponent.prototype.clicked;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5jaG9yLXdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FuY2hvci13cmFwcGVyL2FuY2hvci13cmFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFDdkMsTUFBTSxlQUFlLENBQUM7QUFRdkIsTUFBTSxPQUFPLHNCQUFzQjtJQUpuQztRQVNZLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBYTlDLENBQUM7Ozs7O0lBWFEsVUFBVSxDQUFDLElBQUk7UUFDcEIsT0FBTyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7OztJQU1ELE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7O1lBckJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3Qix3a0RBQW9DO2FBQ3JDOzs7bUJBRUUsS0FBSztzQkFFTCxLQUFLO3NCQUVMLE1BQU07Ozs7SUFKUCxzQ0FBc0I7O0lBRXRCLHlDQUF5Qjs7SUFFekIseUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQU5DSE9SLVdSQVBQRVIudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQW5jaG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkLWludGVyZmFjZXMnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctYW5jaG9yLXdyYXBwZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hbmNob3Itd3JhcHBlci5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5jaG9yV3JhcHBlckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogQW5jaG9yO1xyXG5cclxuICBASW5wdXQoKSBjbGFzc2VzOiBzdHJpbmc7XHJcblxyXG4gIEBPdXRwdXQoKSBjbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIHB1YmxpYyBpc0V4dGVybmFsKGhyZWYpIHtcclxuICAgIHJldHVybiAvXmh0dHAoPzpzKT86XFwvezJ9XFxTKyQvLnRlc3QoaHJlZik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGljayBldmVudCBoYW5kbGVyLlxyXG4gICAqIE91dHB1dHMgdGhlIHBheWxvYWQgdG8gaXQncyBwYXJlbnQgY29tcG9uZW50XHJcbiAgICovXHJcbiAgb25DbGljayhwYXlsb2FkKSB7XHJcbiAgICB0aGlzLmNsaWNrZWQuZW1pdChwYXlsb2FkKTtcclxuICB9XHJcbn1cclxuIl19