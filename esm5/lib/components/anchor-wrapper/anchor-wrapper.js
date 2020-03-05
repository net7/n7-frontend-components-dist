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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5jaG9yLXdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FuY2hvci13cmFwcGVyL2FuY2hvci13cmFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFDdkMsTUFBTSxlQUFlLENBQUM7QUFJdkI7SUFBQTtRQVNZLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBYTlDLENBQUM7Ozs7O0lBWFEsMkNBQVU7Ozs7SUFBakIsVUFBa0IsSUFBSTtRQUNwQixPQUFPLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ0gsd0NBQU87Ozs7OztJQUFQLFVBQVEsT0FBTztRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7O2dCQXJCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0Isd2tEQUFvQztpQkFDckM7Ozt1QkFFRSxLQUFLOzBCQUVMLEtBQUs7MEJBRUwsTUFBTTs7SUFhVCw2QkFBQztDQUFBLEFBdEJELElBc0JDO1NBbEJZLHNCQUFzQjs7O0lBQ2pDLHNDQUFzQjs7SUFFdEIseUNBQXlCOztJQUV6Qix5Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBBTkNIT1ItV1JBUFBFUi50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1hbmNob3Itd3JhcHBlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FuY2hvci13cmFwcGVyLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbmNob3JXcmFwcGVyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBBbmNob3I7XHJcblxyXG4gIEBJbnB1dCgpIGNsYXNzZXM6IHN0cmluZztcclxuXHJcbiAgQE91dHB1dCgpIGNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgcHVibGljIGlzRXh0ZXJuYWwoaHJlZikge1xyXG4gICAgcmV0dXJuIC9eaHR0cCg/OnMpPzpcXC97Mn1cXFMrJC8udGVzdChocmVmKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsaWNrIGV2ZW50IGhhbmRsZXIuXHJcbiAgICogT3V0cHV0cyB0aGUgcGF5bG9hZCB0byBpdCdzIHBhcmVudCBjb21wb25lbnRcclxuICAgKi9cclxuICBvbkNsaWNrKHBheWxvYWQpIHtcclxuICAgIHRoaXMuY2xpY2tlZC5lbWl0KHBheWxvYWQpO1xyXG4gIH1cclxufVxyXG4iXX0=