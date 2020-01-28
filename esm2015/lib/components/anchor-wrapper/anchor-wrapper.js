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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5jaG9yLXdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FuY2hvci13cmFwcGVyL2FuY2hvci13cmFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF2RSxNQUFNLE9BQU8sc0JBQXNCO0lBSm5DO1FBT1ksWUFBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFhOUMsQ0FBQzs7Ozs7SUFYUSxVQUFVLENBQUMsSUFBSTtRQUNwQixPQUFPLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7Ozs7O0lBTUQsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLHdrREFBb0M7YUFDckM7OzttQkFFRSxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsTUFBTTs7OztJQUZQLHNDQUF1Qjs7SUFDdkIseUNBQXlCOztJQUN6Qix5Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBBTkNIT1ItV1JBUFBFUi50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWFuY2hvci13cmFwcGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYW5jaG9yLXdyYXBwZXIuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFuY2hvcldyYXBwZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IElBbmNob3I7XHJcbiAgQElucHV0KCkgY2xhc3Nlczogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBjbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIHB1YmxpYyBpc0V4dGVybmFsKGhyZWYpIHtcclxuICAgIHJldHVybiAvXmh0dHAoPzpzKT86XFwvezJ9XFxTKyQvLnRlc3QoaHJlZik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGljayBldmVudCBoYW5kbGVyLlxyXG4gICAqIE91dHB1dHMgdGhlIHBheWxvYWQgdG8gaXQncyBwYXJlbnQgY29tcG9uZW50XHJcbiAgICovXHJcbiAgb25DbGljayhwYXlsb2FkKSB7XHJcbiAgICB0aGlzLmNsaWNrZWQuZW1pdChwYXlsb2FkKTtcclxuICB9XHJcbn1cclxuIl19