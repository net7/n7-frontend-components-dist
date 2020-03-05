/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/inner-title/inner-title.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// INNER-TITLE.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for InnerTitleComponent's "data"
 *
 * \@property NAME (required|options) <--- TODO: update with interface properties
 * @record
 */
export function InnerTitleData() { }
if (false) {
    /** @type {?|undefined} */
    InnerTitleData.prototype.icon;
    /** @type {?|undefined} */
    InnerTitleData.prototype.image;
    /** @type {?} */
    InnerTitleData.prototype.title;
    /** @type {?|undefined} */
    InnerTitleData.prototype.tools;
    /** @type {?|undefined} */
    InnerTitleData.prototype.actions;
}
/**
 * @record
 */
export function InnerTitleOptions() { }
if (false) {
    /** @type {?} */
    InnerTitleOptions.prototype.text;
    /** @type {?} */
    InnerTitleOptions.prototype.value;
    /** @type {?} */
    InnerTitleOptions.prototype.disable;
}
/**
 * @record
 */
export function InnerTitleButtons() { }
if (false) {
    /** @type {?} */
    InnerTitleButtons.prototype.text;
    /** @type {?} */
    InnerTitleButtons.prototype.payload;
    /** @type {?|undefined} */
    InnerTitleButtons.prototype.classes;
    /** @type {?|undefined} */
    InnerTitleButtons.prototype.icon;
}
var InnerTitleComponent = /** @class */ (function () {
    function InnerTitleComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    InnerTitleComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    InnerTitleComponent.prototype.onChange = /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    function (payload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload: payload, value: value });
    };
    /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    InnerTitleComponent.prototype.onInputChange = /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    function (payload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload: payload, value: value });
    };
    /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    InnerTitleComponent.prototype.onInputEnter = /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    function (payload, value) {
        if (!this.emit)
            return;
        this.emit('search', { inputPayload: payload, value: value });
    };
    InnerTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-inner-title',
                    template: "<div *ngIf=\"data\" class=\"n7-inner-title\">\r\n    <div class=\"n7-inner-title__left-wrapper\">\r\n        <span *ngIf=\"data.icon\" class=\"n7-inner-title__icon-left {{data.icon || ''}}\"></span>\r\n        <div *ngIf=\"data.image\" \r\n             class=\"n7-inner-title__image-left\" \r\n             [ngStyle]=\"{'background-image': 'url(' + data.image + ')'}\"></div>\r\n\r\n        <div class=\"n7-inner-title__wrapper-texts\">\r\n            <div class=\"n7-inner-title__title {{data.title.main.classes || ''}}\">\r\n                {{data.title.main.text}}\r\n            </div>\r\n            <div *ngIf=\"data.title.secondary\" \r\n                class=\"n7-inner-title__subtitle {{data.title.secondary.classes || ''}}\">\r\n                {{data.title.secondary.text}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"n7-inner-title__tools\">\r\n        <!-- Toolbar label -->\r\n        <div *ngIf=\"data.tools\"\r\n            class=\"n7-inner-title__tools-label \">\r\n            {{data.tools}}\r\n        </div>\r\n        <!-- Actions -->\r\n        <ng-container *ngIf=\"data.actions\">\r\n            <ng-container *ngTemplateOutlet=\"actions; \r\n                        context:{$implicit: data.actions}\">\r\n            </ng-container>\r\n        </ng-container>\r\n    </div>\r\n\r\n</div>\r\n\r\n<!-- Template actions -->\r\n<ng-template #actions let-action>\r\n    <ng-container *ngIf=\"action.select\">\r\n        <ng-container *ngTemplateOutlet=\"select;\r\n                      context:{$implicit: action.select}\">\r\n        </ng-container>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"action.search\">\r\n        <ng-container *ngTemplateOutlet=\"search; \r\n                      context:{$implicit: action.search}\">\r\n        </ng-container>\r\n    </ng-container>\r\n    \r\n    <ng-container *ngIf=\"action.buttons\">\r\n        <ng-container *ngTemplateOutlet=\"buttons;\r\n                      context:{$implicit: action.buttons}\">\r\n        </ng-container>\r\n    </ng-container>\r\n</ng-template>\r\n    \r\n<!-- Template sorting -->\r\n<ng-template #select let-select>\r\n<div class=\"n7-inner-title__sorting\">\r\n    <span *ngIf=\"select.label\"\r\n          class=\"n7-inner-title__sorting-label \">\r\n        {{select.label}}\r\n    </span>\r\n    <select (change)=\"onChange(select.payload, $event.target.value)\"\r\n            class=\"n7-inner-title__sorting-select\">\r\n        <option *ngFor=\"let opt of select.options\"\r\n                value=\"{{opt.value}}\"\r\n                class=\"n7-inner-title__sorting-option\"\r\n                [disabled]=\"opt.disable\">\r\n            {{opt.text}}\r\n        </option>\r\n    </select>\r\n</div>\r\n</ng-template>\r\n\r\n<!-- Template search -->\r\n<ng-template #search let-search>\r\n    <div class=\"n7-inner-title__search\">\r\n        <input type=\"text\" \r\n            class=\"n7-inner-title__search-bar \" \r\n            placeholder=\"{{search.placeholder}}\"\r\n            (input)=\"onInputChange(search.payload, $event.target.value)\"\r\n            (keyup.enter)=\"onInputEnter(search.payload, $event.target.value)\">\r\n     <button *ngIf=\"search.button\" \r\n             (click)=\"onClick(search.button.payload)\"\r\n             class=\"n7-btn n7-inner-title__search-button \">\r\n         {{search.button.text}}\r\n     </button>\r\n    </div>\r\n</ng-template>\r\n\r\n<!-- Template buttons -->\r\n<ng-template #buttons let-buttons>\r\n    <div class=\"n7-inner-title__buttons-wrapper\">\r\n        <div *ngFor=\"let btn of buttons\"\r\n            class=\"n7-inner-title__single-button-wrapper\">\r\n            <button (click)=\"onClick(btn.payload)\" \r\n                    class=\"n7-btn n7-inner-title__buttons-action {{btn.classes || ''}}\">\r\n                    <span *ngIf=\"btn.icon\" class=\"n7-btn__icon {{btn.icon || ''}}\"></span>\r\n                {{btn.text}}\r\n            </button>\r\n        </div>\r\n    </div>\r\n</ng-template>"
                }] }
    ];
    InnerTitleComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return InnerTitleComponent;
}());
export { InnerTitleComponent };
if (false) {
    /** @type {?} */
    InnerTitleComponent.prototype.data;
    /** @type {?} */
    InnerTitleComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItdGl0bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2lubmVyLXRpdGxlL2lubmVyLXRpdGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7QUFPakQsb0NBK0JDOzs7SUE5QkMsOEJBQWM7O0lBQ2QsK0JBQWU7O0lBQ2YsK0JBU0U7O0lBQ0YsK0JBQWU7O0lBQ2YsaUNBZ0JFOzs7OztBQUVKLHVDQUlDOzs7SUFIQyxpQ0FBYTs7SUFDYixrQ0FBYzs7SUFDZCxvQ0FBaUI7Ozs7O0FBRW5CLHVDQUtDOzs7SUFKQyxpQ0FBYTs7SUFDYixvQ0FBYTs7SUFDYixvQ0FBYzs7SUFDZCxpQ0FBVzs7QUFHYjtJQUFBO0lBZ0NBLENBQUM7Ozs7O0lBdkJDLHFDQUFPOzs7O0lBQVAsVUFBUSxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFRCxzQ0FBUTs7Ozs7SUFBUixVQUFTLE9BQU8sRUFBRSxLQUFLO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7Ozs7SUFFRCwyQ0FBYTs7Ozs7SUFBYixVQUFjLE9BQU8sRUFBRSxLQUFLO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7Ozs7SUFFRCwwQ0FBWTs7Ozs7SUFBWixVQUFhLE9BQU8sRUFBRSxLQUFLO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDOztnQkEvQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLG04SEFBaUM7aUJBQ2xDOzs7dUJBRUUsS0FBSzt1QkFFTCxLQUFLOztJQXlCUiwwQkFBQztDQUFBLEFBaENELElBZ0NDO1NBNUJZLG1CQUFtQjs7O0lBQzlCLG1DQUE4Qjs7SUFFOUIsbUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gSU5ORVItVElUTEUudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIElubmVyVGl0bGVDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgTkFNRSAocmVxdWlyZWR8b3B0aW9ucykgPC0tLSBUT0RPOiB1cGRhdGUgd2l0aCBpbnRlcmZhY2UgcHJvcGVydGllc1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJbm5lclRpdGxlRGF0YSB7XHJcbiAgaWNvbj86IHN0cmluZztcclxuICBpbWFnZT86IHN0cmluZztcclxuICB0aXRsZToge1xyXG4gICAgbWFpbjoge1xyXG4gICAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICAgIGNsYXNzZXM/OiBhbnk7XHJcbiAgICB9O1xyXG4gICAgc2Vjb25kYXJ5Pzoge1xyXG4gICAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICAgIGNsYXNzZXM/OiBhbnk7XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgdG9vbHM/OiBzdHJpbmc7XHJcbiAgYWN0aW9ucz86IHtcclxuICAgIHNlbGVjdD86IHtcclxuICAgICAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgICAgIG9wdGlvbnM6IElubmVyVGl0bGVPcHRpb25zW107XHJcbiAgICAgIHBheWxvYWQ/OiBhbnk7XHJcbiAgICB9O1xyXG4gICAgc2VhcmNoPzoge1xyXG4gICAgICBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gICAgICBwYXlsb2FkOiBhbnk7XHJcbiAgICAgIGJ1dHRvbj86IHtcclxuICAgICAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgcGF5bG9hZDogYW55O1xyXG4gICAgICB9O1xyXG4gICAgICBfbWV0YT86IGFueTtcclxuICAgIH07XHJcbiAgICBidXR0b25zPzogSW5uZXJUaXRsZUJ1dHRvbnNbXTtcclxuICB9O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5uZXJUaXRsZU9wdGlvbnMge1xyXG4gIHRleHQ6IHN0cmluZztcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIGRpc2FibGU6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJbm5lclRpdGxlQnV0dG9ucyB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIHBheWxvYWQ6IGFueTtcclxuICBjbGFzc2VzPzogYW55O1xyXG4gIGljb24/OiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctaW5uZXItdGl0bGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pbm5lci10aXRsZS5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5uZXJUaXRsZUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogSW5uZXJUaXRsZURhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgb25DbGljayhwYXlsb2FkKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKHBheWxvYWQsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgeyBpbnB1dFBheWxvYWQ6IHBheWxvYWQsIHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgb25JbnB1dENoYW5nZShwYXlsb2FkLCB2YWx1ZSkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgaW5wdXRQYXlsb2FkOiBwYXlsb2FkLCB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIG9uSW5wdXRFbnRlcihwYXlsb2FkLCB2YWx1ZSkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ3NlYXJjaCcsIHsgaW5wdXRQYXlsb2FkOiBwYXlsb2FkLCB2YWx1ZSB9KTtcclxuICB9XHJcbn1cclxuIl19