/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// WIZARD.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * @record
 */
export function IWizardItem() { }
if (false) {
    /** @type {?|undefined} */
    IWizardItem.prototype.text;
    /** @type {?|undefined} */
    IWizardItem.prototype.number;
    /** @type {?} */
    IWizardItem.prototype.payload;
    /** @type {?|undefined} */
    IWizardItem.prototype.classes;
    /** @type {?|undefined} */
    IWizardItem.prototype._meta;
}
/**
 * @record
 */
export function IWizardData() { }
if (false) {
    /** @type {?} */
    IWizardData.prototype.items;
    /** @type {?|undefined} */
    IWizardData.prototype.classes;
}
/**
 * WizardComponent <n7-wizard>
 *
 * \@example
 * ```html
 *
 * <!-- TODO: add component example -->
 * ```
 */
export class WizardComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
}
WizardComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-wizard',
                template: "<div *ngIf=\"data\" class=\"n7-wizard {{ data.classes || '' }}\">\n  <ol class=\"n7-wizard__list\">\n      <li *ngFor=\"let item of data.items\" class=\"n7-wizard__item {{ item.classes || '' }}\"  (click)=\"onClick(item.payload)\">\n            <span *ngIf=\"item.number\" class=\"n7-wizard__number\">{{ item.number }}</span>\n            <span *ngIf=\"item.text\" class=\"n7-wizard__text\">{{ item.text }}</span>\n      </li>\n  </ol>\n</div>"
            }] }
];
WizardComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    WizardComponent.prototype.data;
    /** @type {?} */
    WizardComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy93aXphcmQvd2l6YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUVqRCxpQ0FNQzs7O0lBTEMsMkJBQWM7O0lBQ2QsNkJBQWdCOztJQUNoQiw4QkFBYTs7SUFDYiw4QkFBYzs7SUFDZCw0QkFBWTs7Ozs7QUFHZCxpQ0FHQzs7O0lBRkMsNEJBQXFCOztJQUNyQiw4QkFBYzs7Ozs7Ozs7Ozs7QUFpQmhCLE1BQU0sT0FBTyxlQUFlOzs7OztJQUkxQixPQUFPLENBQUMsT0FBTztRQUNiLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBWEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQix1Y0FBNEI7YUFDN0I7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETiwrQkFBMkI7O0lBQzNCLCtCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBXSVpBUkQudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJV2l6YXJkSXRlbSB7XG4gIHRleHQ/OiBzdHJpbmc7XG4gIG51bWJlcj86IG51bWJlcjtcbiAgcGF5bG9hZDogYW55O1xuICBjbGFzc2VzPzogYW55O1xuICBfbWV0YT86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJV2l6YXJkRGF0YSB7XG4gIGl0ZW1zOiBJV2l6YXJkSXRlbVtdO1xuICBjbGFzc2VzPzogYW55O1xufVxuXG4vKipcbiAqIFdpemFyZENvbXBvbmVudCA8bjctd2l6YXJkPlxuICogXG4gKiBAZXhhbXBsZVxuICogYGBgaHRtbFxuICogXG4gKiA8IS0tIFRPRE86IGFkZCBjb21wb25lbnQgZXhhbXBsZSAtLT5cbiAqIGBgYFxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LXdpemFyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi93aXphcmQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgV2l6YXJkQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSVdpemFyZERhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNsaWNrKHBheWxvYWQpe1xuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH0gXG59Il19