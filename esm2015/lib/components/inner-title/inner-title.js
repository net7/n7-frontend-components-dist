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
    IInnerTitleOptions.prototype.text;
    /** @type {?} */
    IInnerTitleOptions.prototype.value;
    /** @type {?} */
    IInnerTitleOptions.prototype.disable;
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
export class InnerTitleComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    ;
    /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    onChange(payload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload: payload, value });
    }
    /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    onInputChange(payload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload: payload, value });
    }
    /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    onInputEnter(payload, value) {
        if (!this.emit)
            return;
        this.emit('search', { inputPayload: payload, value });
    }
}
InnerTitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-inner-title',
                template: "<div *ngIf=\"data\" class=\"n7-inner-title\">\r\n    <div class=\"n7-inner-title__left-wrapper\">\r\n        <span *ngIf=\"data.icon\" class=\"n7-inner-title__icon-left {{data.icon || ''}}\"></span>\r\n\r\n        <div class=\"n7-inner-title__wrapper-texts\">\r\n            <div class=\"n7-inner-title__title {{data.title.main.classes || ''}}\">\r\n                {{data.title.main.text}}\r\n            </div>\r\n            <div *ngIf=\"data.title.secondary\" \r\n                class=\"n7-inner-title__subtitle {{data.title.secondary.classes || ''}}\">\r\n                {{data.title.secondary.text}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"n7-inner-title__tools\">\r\n        <!-- Toolbar label -->\r\n        <div *ngIf=\"data.tools\"\r\n            class=\"n7-inner-title__tools-label \">\r\n            {{data.tools}}\r\n        </div>\r\n        <!-- Actions -->\r\n        <ng-container *ngIf=\"data.actions\">\r\n            <ng-container *ngTemplateOutlet=\"actions; \r\n                        context:{$implicit: data.actions}\">\r\n            </ng-container>\r\n        </ng-container>\r\n    </div>\r\n\r\n</div>\r\n\r\n<!-- Template actions -->\r\n<ng-template #actions let-action>\r\n    <ng-container *ngIf=\"action.select\">\r\n        <ng-container *ngTemplateOutlet=\"select;\r\n                      context:{$implicit: action.select}\">\r\n        </ng-container>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"action.search\">\r\n        <ng-container *ngTemplateOutlet=\"search; \r\n                      context:{$implicit: action.search}\">\r\n        </ng-container>\r\n    </ng-container>\r\n    \r\n    <ng-container *ngIf=\"action.buttons\">\r\n        <ng-container *ngTemplateOutlet=\"buttons;\r\n                      context:{$implicit: action.buttons}\">\r\n        </ng-container>\r\n    </ng-container>\r\n</ng-template>\r\n    \r\n<!-- Template sorting -->\r\n<ng-template #select let-select>\r\n<div class=\"n7-inner-title__sorting\">\r\n    <span *ngIf=\"select.label\"\r\n          class=\"n7-inner-title__sorting-label \">\r\n        {{select.label}}\r\n    </span>\r\n    <select (change)=\"onChange(select.payload, $event.target.value)\"\r\n            class=\"n7-inner-title__sorting-select\">\r\n        <option *ngFor=\"let opt of select.options\"\r\n                value=\"{{opt.value}}\"\r\n                class=\"n7-inner-title__sorting-option\"\r\n                [disabled]=\"opt.disable\">\r\n            {{opt.text}}\r\n        </option>\r\n    </select>\r\n</div>\r\n</ng-template>\r\n\r\n<!-- Template search -->\r\n<ng-template #search let-search>\r\n    <div class=\"n7-inner-title__search\">\r\n        <input type=\"text\" \r\n            class=\"n7-inner-title__search-bar \" \r\n            placeholder=\"{{search.placeholder}}\"\r\n            (input)=\"onInputChange(search.payload, $event.target.value)\"\r\n            (keyup.enter)=\"onInputEnter(search.payload, $event.target.value)\">\r\n     <button *ngIf=\"search.button\" \r\n             (click)=\"onClick(search.button.payload)\"\r\n             class=\"n7-btn n7-inner-title__search-button \">\r\n         {{search.button.text}}\r\n     </button>\r\n    </div>\r\n</ng-template>\r\n\r\n<!-- Template buttons -->\r\n<ng-template #buttons let-buttons>\r\n    <div class=\"n7-inner-title__buttons-wrapper\">\r\n        <div *ngFor=\"let btn of buttons\"\r\n            class=\"n7-inner-title__single-button-wrapper\">\r\n            <button (click)=\"onClick(btn.payload)\" \r\n                    class=\"n7-btn n7-inner-title__buttons-action {{btn.classes || ''}}\">\r\n                {{btn.text}}\r\n            </button>\r\n        </div>\r\n    </div>\r\n</ng-template>"
            }] }
];
InnerTitleComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    InnerTitleComponent.prototype.data;
    /** @type {?} */
    InnerTitleComponent.prototype.emit;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItdGl0bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2lubmVyLXRpdGxlL2lubmVyLXRpdGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7QUFPakQscUNBOEJDOzs7SUE3QkMsK0JBQWM7O0lBQ2QsZ0NBU0M7O0lBQ0QsZ0NBQWU7O0lBQ2Ysa0NBZ0JDOzs7OztBQUVILHdDQUlDOzs7SUFIQyxrQ0FBYTs7SUFDYixtQ0FBYzs7SUFDZCxxQ0FBaUI7Ozs7O0FBRW5CLHdDQUlDOzs7SUFIQyxrQ0FBYTs7SUFDYixxQ0FBYTs7SUFDYixxQ0FBYzs7QUFPaEIsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFJOUIsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFBQSxDQUFDOzs7Ozs7SUFFRixRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUs7UUFDckIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtJQUN2RCxDQUFDOzs7Ozs7SUFFRCxhQUFhLENBQUMsT0FBTyxFQUFFLEtBQUs7UUFDMUIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtJQUN2RCxDQUFDOzs7Ozs7SUFFRCxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUs7UUFDekIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtJQUN2RCxDQUFDOzs7WUE5QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGdySEFBaUM7YUFDbEM7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETixtQ0FBK0I7O0lBQy9CLG1DQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIElOTkVSLVRJVExFLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBJbm5lclRpdGxlQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IE5BTUUgKHJlcXVpcmVkfG9wdGlvbnMpIDwtLS0gVE9ETzogdXBkYXRlIHdpdGggaW50ZXJmYWNlIHByb3BlcnRpZXMgXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElJbm5lclRpdGxlRGF0YSB7XHJcbiAgaWNvbj86IHN0cmluZztcclxuICB0aXRsZToge1xyXG4gICAgbWFpbjoge1xyXG4gICAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICAgIGNsYXNzZXM/OiBhbnk7XHJcbiAgICB9XHJcbiAgICBzZWNvbmRhcnk/OiB7XHJcbiAgICAgIHRleHQ6IHN0cmluZztcclxuICAgICAgY2xhc3Nlcz86IGFueTtcclxuICAgIH1cclxuICB9XHJcbiAgdG9vbHM/OiBzdHJpbmc7XHJcbiAgYWN0aW9ucz86IHtcclxuICAgIHNlbGVjdD86IHtcclxuICAgICAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgICAgIG9wdGlvbnM6IElJbm5lclRpdGxlT3B0aW9uc1tdO1xyXG4gICAgICBwYXlsb2FkPzogYW55O1xyXG4gICAgfVxyXG4gICAgc2VhcmNoPzoge1xyXG4gICAgICBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gICAgICBwYXlsb2FkOiBhbnk7XHJcbiAgICAgIGJ1dHRvbj86IHtcclxuICAgICAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgcGF5bG9hZDogYW55O1xyXG4gICAgICB9XHJcbiAgICAgIF9tZXRhPzogYW55O1xyXG4gICAgfVxyXG4gICAgYnV0dG9ucz86IElJbm5lclRpdGxlQnV0dG9uc1tdO1xyXG4gIH1cclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElJbm5lclRpdGxlT3B0aW9ucyB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbiAgZGlzYWJsZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElJbm5lclRpdGxlQnV0dG9ucyB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIHBheWxvYWQ6IGFueTtcclxuICBjbGFzc2VzPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWlubmVyLXRpdGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW5uZXItdGl0bGUuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIElubmVyVGl0bGVDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IElJbm5lclRpdGxlRGF0YTtcclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZCl7XHJcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH07XHJcblxyXG4gIG9uQ2hhbmdlKHBheWxvYWQsIHZhbHVlKXtcclxuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgaW5wdXRQYXlsb2FkOiBwYXlsb2FkLCB2YWx1ZSB9KVxyXG4gIH1cclxuXHJcbiAgb25JbnB1dENoYW5nZShwYXlsb2FkLCB2YWx1ZSl7XHJcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7IGlucHV0UGF5bG9hZDogcGF5bG9hZCwgdmFsdWUgfSlcclxuICB9XHJcblxyXG4gIG9uSW5wdXRFbnRlcihwYXlsb2FkLCB2YWx1ZSkge1xyXG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICB0aGlzLmVtaXQoJ3NlYXJjaCcsIHsgaW5wdXRQYXlsb2FkOiBwYXlsb2FkLCB2YWx1ZSB9KVxyXG4gIH1cclxufSJdfQ==