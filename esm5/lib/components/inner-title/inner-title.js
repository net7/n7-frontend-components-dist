/**
 * @fileoverview added by tsickle
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
export function IInnerTitleData() { }
if (false) {
    /** @type {?|undefined} */
    IInnerTitleData.prototype.icon;
    /** @type {?} */
    IInnerTitleData.prototype.title;
    /** @type {?|undefined} */
    IInnerTitleData.prototype.tools;
    /** @type {?|undefined} */
    IInnerTitleData.prototype.actions;
}
/**
 * @record
 */
export function IInnerTitleOptions() { }
if (false) {
    /** @type {?} */
    IInnerTitleOptions.prototype.value;
    /** @type {?} */
    IInnerTitleOptions.prototype.payload;
}
/**
 * @record
 */
export function IInnerTitleButtons() { }
if (false) {
    /** @type {?} */
    IInnerTitleButtons.prototype.text;
    /** @type {?} */
    IInnerTitleButtons.prototype.payload;
    /** @type {?|undefined} */
    IInnerTitleButtons.prototype.classes;
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
    ;
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
                    template: "<div *ngIf=\"data\" class=\"n7-inner-title\">\r\n    <div class=\"n7-inner-title__left-wrapper\">\r\n        <span *ngIf=\"data.icon\" class=\"n7-inner-title__icon-left {{data.icon || ''}}\"></span>\r\n\r\n        <div class=\"n7-inner-title__wrapper-texts\">\r\n            <div class=\"n7-inner-title__title {{data.title.main.classes || ''}}\">\r\n                {{data.title.main.text}}\r\n            </div>\r\n            <div *ngIf=\"data.title.secondary\" \r\n                class=\"n7-inner-title__subtitle {{data.title.secondary.classes || ''}}\">\r\n                {{data.title.secondary.text}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"n7-inner-title__tools\">\r\n        <!-- Toolbar label -->\r\n        <div *ngIf=\"data.tools\"\r\n            class=\"n7-inner-title__tools-label \">\r\n            {{data.tools}}\r\n        </div>\r\n        <!-- Actions -->\r\n        <ng-container *ngIf=\"data.actions\">\r\n            <ng-container *ngTemplateOutlet=\"actions; \r\n                        context:{$implicit: data.actions}\">\r\n            </ng-container>\r\n        </ng-container>\r\n    </div>\r\n\r\n</div>\r\n\r\n<!-- Template actions -->\r\n<ng-template #actions let-action>\r\n    <ng-container *ngIf=\"action.select\">\r\n        <ng-container *ngTemplateOutlet=\"select;\r\n                      context:{$implicit: action.select}\">\r\n        </ng-container>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"action.search\">\r\n        <ng-container *ngTemplateOutlet=\"search; \r\n                      context:{$implicit: action.search}\">\r\n        </ng-container>\r\n    </ng-container>\r\n    \r\n    <ng-container *ngIf=\"action.buttons\">\r\n        <ng-container *ngTemplateOutlet=\"buttons;\r\n                      context:{$implicit: action.buttons}\">\r\n        </ng-container>\r\n    </ng-container>\r\n</ng-template>\r\n    \r\n<!-- Template sorting -->\r\n<ng-template #select let-select>\r\n<div class=\"n7-inner-title__sorting\">\r\n    <span *ngIf=\"select.label\"\r\n          class=\"n7-inner-title__sorting-label \">\r\n        {{select.label}}\r\n    </span>\r\n    <select (change)=\"onChange(select.payload, $event.target.value)\"\r\n            class=\"n7-inner-title__sorting-select\">\r\n        <option *ngFor=\"let opt of select.options\"\r\n                class=\"n7-inner-title__sorting-option \">\r\n            {{opt.value}}\r\n        </option>\r\n    </select>\r\n</div>\r\n</ng-template>\r\n\r\n<!-- Template search -->\r\n<ng-template #search let-search>\r\n    <div class=\"n7-inner-title__search\">\r\n        <input type=\"text\" \r\n            class=\"n7-inner-title__search-bar \" \r\n            placeholder=\"{{search.placeholder}}\"\r\n            (input)=\"onInputChange(search.payload, $event.target.value)\"\r\n            (keyup.enter)=\"onInputEnter(search.payload, $event.target.value)\">\r\n     <button *ngIf=\"search.button\" \r\n             (click)=\"onClick(search.button.payload)\"\r\n             class=\"n7-btn n7-inner-title__search-button \">\r\n         {{search.button.text}}\r\n     </button>\r\n    </div>\r\n</ng-template>\r\n\r\n<!-- Template buttons -->\r\n<ng-template #buttons let-buttons>\r\n    <div class=\"n7-inner-title__buttons-wrapper\">\r\n        <div *ngFor=\"let btn of buttons\"\r\n            class=\"n7-inner-title__single-button-wrapper\">\r\n            <button (click)=\"onClick(btn.payload)\" \r\n                    class=\"n7-btn n7-inner-title__buttons-action {{btn.classes || ''}}\">\r\n                {{btn.text}}\r\n            </button>\r\n        </div>\r\n    </div>\r\n</ng-template>"
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
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItdGl0bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2lubmVyLXRpdGxlL2lubmVyLXRpdGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQU9qRCxxQ0E4QkM7OztJQTdCQywrQkFBYzs7SUFDZCxnQ0FTQzs7SUFDRCxnQ0FBZTs7SUFDZixrQ0FnQkM7Ozs7O0FBRUgsd0NBR0M7OztJQUZDLG1DQUFjOztJQUNkLHFDQUFhOzs7OztBQUVmLHdDQUlDOzs7SUFIQyxrQ0FBYTs7SUFDYixxQ0FBYTs7SUFDYixxQ0FBYzs7QUFHaEI7SUFBQTtJQStCQSxDQUFDOzs7OztJQXZCQyxxQ0FBTzs7OztJQUFQLFVBQVEsT0FBTztRQUNiLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUFBLENBQUM7Ozs7OztJQUVGLHNDQUFROzs7OztJQUFSLFVBQVMsT0FBTyxFQUFFLEtBQUs7UUFDckIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFBO0lBQ3ZELENBQUM7Ozs7OztJQUVELDJDQUFhOzs7OztJQUFiLFVBQWMsT0FBTyxFQUFFLEtBQUs7UUFDMUIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFBO0lBQ3ZELENBQUM7Ozs7OztJQUVELDBDQUFZOzs7OztJQUFaLFVBQWEsT0FBTyxFQUFFLEtBQUs7UUFDekIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFBO0lBQ3ZELENBQUM7O2dCQTlCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIseWxIQUFpQztpQkFDbEM7Ozt1QkFFRSxLQUFLO3VCQUNMLEtBQUs7O0lBeUJSLDBCQUFDO0NBQUEsQUEvQkQsSUErQkM7U0EzQlksbUJBQW1COzs7SUFDOUIsbUNBQStCOztJQUMvQixtQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBJTk5FUi1USVRMRS50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgSW5uZXJUaXRsZUNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBOQU1FIChyZXF1aXJlZHxvcHRpb25zKSA8LS0tIFRPRE86IHVwZGF0ZSB3aXRoIGludGVyZmFjZSBwcm9wZXJ0aWVzIFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJSW5uZXJUaXRsZURhdGEge1xyXG4gIGljb24/OiBzdHJpbmc7XHJcbiAgdGl0bGU6IHtcclxuICAgIG1haW46IHtcclxuICAgICAgdGV4dDogc3RyaW5nO1xyXG4gICAgICBjbGFzc2VzPzogYW55O1xyXG4gICAgfVxyXG4gICAgc2Vjb25kYXJ5Pzoge1xyXG4gICAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICAgIGNsYXNzZXM/OiBhbnk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRvb2xzPzogc3RyaW5nO1xyXG4gIGFjdGlvbnM/OiB7XHJcbiAgICBzZWxlY3Q/OiB7XHJcbiAgICAgIGxhYmVsPzogc3RyaW5nO1xyXG4gICAgICBvcHRpb25zOiBJSW5uZXJUaXRsZU9wdGlvbnNbXTtcclxuICAgICAgcGF5bG9hZD86IGFueTtcclxuICAgIH1cclxuICAgIHNlYXJjaD86IHtcclxuICAgICAgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICAgICAgcGF5bG9hZDogYW55O1xyXG4gICAgICBidXR0b24/OiB7XHJcbiAgICAgICAgdGV4dDogc3RyaW5nO1xyXG4gICAgICAgIHBheWxvYWQ6IGFueTtcclxuICAgICAgfVxyXG4gICAgICBfbWV0YT86IGFueTtcclxuICAgIH1cclxuICAgIGJ1dHRvbnM/OiBJSW5uZXJUaXRsZUJ1dHRvbnNbXTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJSW5uZXJUaXRsZU9wdGlvbnMge1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbiAgcGF5bG9hZDogYW55O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSUlubmVyVGl0bGVCdXR0b25zIHtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgcGF5bG9hZDogYW55O1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctaW5uZXItdGl0bGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pbm5lci10aXRsZS5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5uZXJUaXRsZUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogSUlubmVyVGl0bGVEYXRhO1xyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgb25DbGljayhwYXlsb2FkKXtcclxuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgfTtcclxuXHJcbiAgb25DaGFuZ2UocGF5bG9hZCwgdmFsdWUpe1xyXG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgeyBpbnB1dFBheWxvYWQ6IHBheWxvYWQsIHZhbHVlIH0pXHJcbiAgfVxyXG5cclxuICBvbklucHV0Q2hhbmdlKHBheWxvYWQsIHZhbHVlKXtcclxuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgaW5wdXRQYXlsb2FkOiBwYXlsb2FkLCB2YWx1ZSB9KVxyXG4gIH1cclxuXHJcbiAgb25JbnB1dEVudGVyKHBheWxvYWQsIHZhbHVlKSB7XHJcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICBcclxuICAgIHRoaXMuZW1pdCgnc2VhcmNoJywgeyBpbnB1dFBheWxvYWQ6IHBheWxvYWQsIHZhbHVlIH0pXHJcbiAgfVxyXG59Il19