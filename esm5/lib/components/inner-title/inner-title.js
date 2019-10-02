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
     * @param {?} event
     * @return {?}
     */
    InnerTitleComponent.prototype.onChange = /**
     * @param {?} payload
     * @param {?} event
     * @return {?}
     */
    function (payload, event) {
        if (!this.emit)
            return;
        this.emit('changed ' + payload + ' to ' + event.target.value);
    };
    /**
     * @param {?} payload
     * @param {?} event
     * @return {?}
     */
    InnerTitleComponent.prototype.onInputChange = /**
     * @param {?} payload
     * @param {?} event
     * @return {?}
     */
    function (payload, event) {
        if (!this.emit)
            return;
        this.emit('changed ' + payload + ' to ' + event.target.value);
    };
    /**
     * @param {?} payload
     * @param {?} event
     * @return {?}
     */
    InnerTitleComponent.prototype.onInputEnter = /**
     * @param {?} payload
     * @param {?} event
     * @return {?}
     */
    function (payload, event) {
        if (!this.emit)
            return;
        this.emit(payload + ' entered search: ' + event.target.value);
    };
    InnerTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-inner-title',
                    template: "<div *ngIf=\"data\" class=\"n7-inner-title\">\r\n    <span *ngIf=\"data.icon\" class=\"n7-inner-title__icon-left {{data.icon || ''}}\"></span>\r\n\r\n    <div class=\"n7-inner-title__wrapper-texts\">\r\n        <div class=\"n7-inner-title__title {{data.title.main.classes || ''}}\">\r\n            {{data.title.main.text}}\r\n        </div>\r\n        <div *ngIf=\"data.title.secondary\" \r\n             class=\"n7-inner-title__subtitle {{data.title.secondary.classes || ''}}\">\r\n            {{data.title.secondary.text}}\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"n7-inner-title__tools\">\r\n        <!-- Toolbar label -->\r\n        <div *ngIf=\"data.tools\"\r\n            class=\"n7-inner-title__tools-label \">\r\n            {{data.tools}}\r\n        </div>\r\n        <!-- Actions -->\r\n        <ng-container *ngIf=\"data.actions\">\r\n            <ng-container *ngTemplateOutlet=\"actions; \r\n                        context:{$implicit: data.actions}\">\r\n            </ng-container>\r\n        </ng-container>\r\n        \r\n    </div>\r\n\r\n\r\n</div>\r\n\r\n<!-- Template actions -->\r\n<ng-template #actions let-action>\r\n    <ng-container *ngIf=\"action.select\">\r\n        <ng-container *ngTemplateOutlet=\"select;\r\n                      context:{$implicit: action.select}\">\r\n        </ng-container>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"action.search\">\r\n        <ng-container *ngTemplateOutlet=\"search; \r\n                      context:{$implicit: action.search}\">\r\n        </ng-container>\r\n    </ng-container>\r\n    \r\n    <ng-container *ngIf=\"action.buttons\">\r\n        <ng-container *ngTemplateOutlet=\"buttons;\r\n                      context:{$implicit: action.buttons}\">\r\n        </ng-container>\r\n    </ng-container>\r\n</ng-template>\r\n    \r\n<!-- Template sorting -->\r\n<ng-template #select let-select>\r\n<div class=\"n7-inner-title__sorting\">\r\n    <span *ngIf=\"select.label\"\r\n          class=\"n7-inner-title__sorting-label \">\r\n        {{select.label}}\r\n    </span>\r\n    <select (change)=\"onChange(select.payload, $event)\"\r\n            class=\"n7-inner-title__sorting-select\">\r\n        <option *ngFor=\"let opt of select.options\"\r\n                class=\"n7-inner-title__sorting-option \">\r\n            {{opt.value}}\r\n        </option>\r\n    </select>\r\n</div>\r\n</ng-template>\r\n\r\n<!-- Template search -->\r\n<ng-template #search let-search>\r\n    <div class=\"n7-inner-title__search\">\r\n        <input type=\"text\" \r\n            class=\"n7-inner-title__search-bar \" \r\n            placeholder=\"{{search.placeholder}}\"\r\n            (input)=\"onInputChange(search.payload, $event)\"\r\n            (keyup.enter)=\"onInputEnter(search.payload, $event.target.value)\">\r\n     <button *ngIf=\"search.button\" \r\n             (click)=\"onClick(search.button.payload)\"\r\n             class=\"n7-btn n7-inner-title__search-button \">\r\n         {{search.button.text}}\r\n     </button>\r\n    </div>\r\n</ng-template>\r\n\r\n<!-- Template buttons -->\r\n<ng-template #buttons let-buttons>\r\n    <div class=\"n7-inner-title__buttons-wrapper\">\r\n        <div *ngFor=\"let btn of buttons\"\r\n            class=\"n7-inner-title__single-button-wrapper\">\r\n            <button (click)=\"onClick(btn.payload)\" \r\n                    class=\"n7-btn n7-inner-title__buttons-action {{btn.classes || ''}}\">\r\n                {{btn.text}}\r\n            </button>\r\n        </div>\r\n    </div>\r\n</ng-template>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItdGl0bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2lubmVyLXRpdGxlL2lubmVyLXRpdGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQU9qRCxxQ0E4QkM7OztJQTdCQywrQkFBYzs7SUFDZCxnQ0FTQzs7SUFDRCxnQ0FBZTs7SUFDZixrQ0FnQkM7Ozs7O0FBRUgsd0NBR0M7OztJQUZDLG1DQUFjOztJQUNkLHFDQUFhOzs7OztBQUVmLHdDQUlDOzs7SUFIQyxrQ0FBYTs7SUFDYixxQ0FBYTs7SUFDYixxQ0FBYzs7QUFHaEI7SUFBQTtJQStCQSxDQUFDOzs7OztJQXZCQyxxQ0FBTzs7OztJQUFQLFVBQVEsT0FBTztRQUNiLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUFBLENBQUM7Ozs7OztJQUVGLHNDQUFROzs7OztJQUFSLFVBQVMsT0FBTyxFQUFFLEtBQUs7UUFDckIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7O0lBRUQsMkNBQWE7Ozs7O0lBQWIsVUFBYyxPQUFPLEVBQUUsS0FBSztRQUMxQixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUMvRCxDQUFDOzs7Ozs7SUFFRCwwQ0FBWTs7Ozs7SUFBWixVQUFhLE9BQU8sRUFBRSxLQUFLO1FBQ3pCLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsbUJBQW1CLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUMvRCxDQUFDOztnQkE5QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLHMrR0FBaUM7aUJBQ2xDOzs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLOztJQXlCUiwwQkFBQztDQUFBLEFBL0JELElBK0JDO1NBM0JZLG1CQUFtQjs7O0lBQzlCLG1DQUErQjs7SUFDL0IsbUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gSU5ORVItVElUTEUudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIElubmVyVGl0bGVDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgTkFNRSAocmVxdWlyZWR8b3B0aW9ucykgPC0tLSBUT0RPOiB1cGRhdGUgd2l0aCBpbnRlcmZhY2UgcHJvcGVydGllcyBcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUlubmVyVGl0bGVEYXRhIHtcclxuICBpY29uPzogc3RyaW5nO1xyXG4gIHRpdGxlOiB7XHJcbiAgICBtYWluOiB7XHJcbiAgICAgIHRleHQ6IHN0cmluZztcclxuICAgICAgY2xhc3Nlcz86IGFueTtcclxuICAgIH1cclxuICAgIHNlY29uZGFyeT86IHtcclxuICAgICAgdGV4dDogc3RyaW5nO1xyXG4gICAgICBjbGFzc2VzPzogYW55O1xyXG4gICAgfVxyXG4gIH1cclxuICB0b29scz86IHN0cmluZztcclxuICBhY3Rpb25zPzoge1xyXG4gICAgc2VsZWN0Pzoge1xyXG4gICAgICBsYWJlbD86IHN0cmluZztcclxuICAgICAgb3B0aW9uczogSUlubmVyVGl0bGVPcHRpb25zW107XHJcbiAgICAgIHBheWxvYWQ/OiBhbnk7XHJcbiAgICB9XHJcbiAgICBzZWFyY2g/OiB7XHJcbiAgICAgIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgICAgIHBheWxvYWQ6IGFueTtcclxuICAgICAgYnV0dG9uPzoge1xyXG4gICAgICAgIHRleHQ6IHN0cmluZztcclxuICAgICAgICBwYXlsb2FkOiBhbnk7XHJcbiAgICAgIH1cclxuICAgICAgX21ldGE/OiBhbnk7XHJcbiAgICB9XHJcbiAgICBidXR0b25zPzogSUlubmVyVGl0bGVCdXR0b25zW107XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSUlubmVyVGl0bGVPcHRpb25zIHtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIHBheWxvYWQ6IGFueTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElJbm5lclRpdGxlQnV0dG9ucyB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIHBheWxvYWQ6IGFueTtcclxuICBjbGFzc2VzPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWlubmVyLXRpdGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW5uZXItdGl0bGUuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIElubmVyVGl0bGVDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IElJbm5lclRpdGxlRGF0YTtcclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZCl7XHJcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH07XHJcblxyXG4gIG9uQ2hhbmdlKHBheWxvYWQsIGV2ZW50KXtcclxuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZWQgJyArIHBheWxvYWQgKyAnIHRvICcgKyBldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgb25JbnB1dENoYW5nZShwYXlsb2FkLCBldmVudCl7XHJcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2VkICcgKyBwYXlsb2FkICsgJyB0byAnICsgZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuXHJcbiAgb25JbnB1dEVudGVyKHBheWxvYWQsIGV2ZW50KSB7XHJcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICBcclxuICAgIHRoaXMuZW1pdChwYXlsb2FkICsgJyBlbnRlcmVkIHNlYXJjaDogJyArIGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICB9XHJcbn0iXX0=