/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5jaG9yLXdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FuY2hvci13cmFwcGVyL2FuY2hvci13cmFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXZFO0lBQUE7UUFPWSxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQWE5QyxDQUFDOzs7OztJQVhRLDJDQUFVOzs7O0lBQWpCLFVBQWtCLElBQUk7UUFDcEIsT0FBTyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNILHdDQUFPOzs7Ozs7SUFBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDOztnQkFuQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLHdrREFBb0M7aUJBQ3JDOzs7dUJBRUUsS0FBSzswQkFDTCxLQUFLOzBCQUNMLE1BQU07O0lBYVQsNkJBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQWhCWSxzQkFBc0I7OztJQUNqQyxzQ0FBdUI7O0lBQ3ZCLHlDQUF5Qjs7SUFDekIseUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQU5DSE9SLVdSQVBQRVIudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1hbmNob3Itd3JhcHBlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FuY2hvci13cmFwcGVyLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbmNob3JXcmFwcGVyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBJQW5jaG9yO1xyXG4gIEBJbnB1dCgpIGNsYXNzZXM6IHN0cmluZztcclxuICBAT3V0cHV0KCkgY2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBwdWJsaWMgaXNFeHRlcm5hbChocmVmKSB7XHJcbiAgICByZXR1cm4gL15odHRwKD86cyk/OlxcL3syfVxcUyskLy50ZXN0KGhyZWYpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xpY2sgZXZlbnQgaGFuZGxlci5cclxuICAgKiBPdXRwdXRzIHRoZSBwYXlsb2FkIHRvIGl0J3MgcGFyZW50IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIG9uQ2xpY2socGF5bG9hZCkge1xyXG4gICAgdGhpcy5jbGlja2VkLmVtaXQocGF5bG9hZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==