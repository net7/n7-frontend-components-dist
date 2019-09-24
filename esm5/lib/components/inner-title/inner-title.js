/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "<div *ngIf=\"data\" class=\"n7-inner-title\">\n    <span *ngIf=\"data.icon\" class=\"n7-inner-title__icon-left {{data.icon || ''}}\"></span>\n\n    <div class=\"n7-inner-title__wrapper-texts\">\n        <div class=\"n7-inner-title__title {{data.title.main.classes || ''}}\">\n            {{data.title.main.text}}\n        </div>\n        <div *ngIf=\"data.title.secondary\" \n             class=\"n7-inner-title__subtitle {{data.title.secondary.classes || ''}}\">\n            {{data.title.secondary.text}}\n        </div>\n    </div>\n\n    <div class=\"n7-inner-title__tools\">\n        <!-- Toolbar label -->\n        <div *ngIf=\"data.tools\"\n            class=\"n7-inner-title__tools-label \">\n            {{data.tools}}\n        </div>\n        <!-- Actions -->\n        <ng-container *ngTemplateOutlet=\"actions; \n                    context:{$implicit: data.actions}\">\n        </ng-container>\n    </div>\n\n\n</div>\n\n<!-- Template actions -->\n<ng-template #actions let-action>\n    <ng-container *ngIf=\"action.select\">\n        <ng-container *ngTemplateOutlet=\"select;\n                      context:{$implicit: action.select}\">\n        </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"action.search\">\n        <ng-container *ngTemplateOutlet=\"search; \n                      context:{$implicit: action.search}\">\n        </ng-container>\n    </ng-container>\n    \n    <ng-container *ngIf=\"action.buttons\">\n        <ng-container *ngTemplateOutlet=\"buttons;\n                      context:{$implicit: action.buttons}\">\n        </ng-container>\n    </ng-container>\n</ng-template>\n    \n<!-- Template sorting -->\n<ng-template #select let-select>\n<div class=\"n7-inner-title__sorting\">\n    <span *ngIf=\"select.label\"\n          class=\"n7-inner-title__sorting-label \">\n        {{select.label}}\n    </span>\n    <select (change)=\"onChange(select.payload, $event)\"\n            class=\"n7-inner-title__sorting-select\">\n        <option *ngFor=\"let opt of select.options\"\n                class=\"n7-inner-title__sorting-option \">\n            {{opt.value}}\n        </option>\n    </select>\n</div>\n</ng-template>\n\n<!-- Template search -->\n<ng-template #search let-search>\n    <div class=\"n7-inner-title__search\">\n        <input type=\"text\" \n            class=\"n7-inner-title__search-bar \" \n            placeholder=\"{{search.placeholder}}\"\n            (input)=\"onInputChange(search.payload, $event)\"\n            (keyup.enter)=\"onInputEnter(search.payload, $event.target.value)\">\n     <button *ngIf=\"search.button\" \n             (click)=\"onClick(search.button.payload)\"\n             class=\"n7-btn n7-inner-title__search-button \">\n         {{search.button.text}}\n     </button>\n    </div>\n</ng-template>\n\n<!-- Template buttons -->\n<ng-template #buttons let-buttons>\n    <div class=\"n7-inner-title__buttons-wrapper\">\n        <div *ngFor=\"let btn of buttons\"\n            class=\"n7-inner-title__single-button-wrapper\">\n            <button (click)=\"onClick(btn.payload)\" \n                    class=\"n7-btn n7-inner-title__buttons-action {{btn.classes || ''}}\">\n                {{btn.text}}\n            </button>\n        </div>\n    </div>\n</ng-template>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItdGl0bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2lubmVyLXRpdGxlL2lubmVyLXRpdGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQU9qRCxxQ0E4QkM7OztJQTdCQywrQkFBYzs7SUFDZCxnQ0FTQzs7SUFDRCxnQ0FBZTs7SUFDZixrQ0FnQkM7Ozs7O0FBRUgsd0NBR0M7OztJQUZDLG1DQUFjOztJQUNkLHFDQUFhOzs7OztBQUVmLHdDQUlDOzs7SUFIQyxrQ0FBYTs7SUFDYixxQ0FBYTs7SUFDYixxQ0FBYzs7QUFHaEI7SUFBQTtJQStCQSxDQUFDOzs7OztJQXZCQyxxQ0FBTzs7OztJQUFQLFVBQVEsT0FBTztRQUNiLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUFBLENBQUM7Ozs7OztJQUVGLHNDQUFROzs7OztJQUFSLFVBQVMsT0FBTyxFQUFFLEtBQUs7UUFDckIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7O0lBRUQsMkNBQWE7Ozs7O0lBQWIsVUFBYyxPQUFPLEVBQUUsS0FBSztRQUMxQixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUMvRCxDQUFDOzs7Ozs7SUFFRCwwQ0FBWTs7Ozs7SUFBWixVQUFhLE9BQU8sRUFBRSxLQUFLO1FBQ3pCLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsbUJBQW1CLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUMvRCxDQUFDOztnQkE5QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLDBzR0FBaUM7aUJBQ2xDOzs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLOztJQXlCUiwwQkFBQztDQUFBLEFBL0JELElBK0JDO1NBM0JZLG1CQUFtQjs7O0lBQzlCLG1DQUErQjs7SUFDL0IsbUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIElOTkVSLVRJVExFLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBJbm5lclRpdGxlQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgTkFNRSAocmVxdWlyZWR8b3B0aW9ucykgPC0tLSBUT0RPOiB1cGRhdGUgd2l0aCBpbnRlcmZhY2UgcHJvcGVydGllcyBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJSW5uZXJUaXRsZURhdGEge1xuICBpY29uPzogc3RyaW5nO1xuICB0aXRsZToge1xuICAgIG1haW46IHtcbiAgICAgIHRleHQ6IHN0cmluZztcbiAgICAgIGNsYXNzZXM/OiBhbnk7XG4gICAgfVxuICAgIHNlY29uZGFyeT86IHtcbiAgICAgIHRleHQ6IHN0cmluZztcbiAgICAgIGNsYXNzZXM/OiBhbnk7XG4gICAgfVxuICB9XG4gIHRvb2xzPzogc3RyaW5nO1xuICBhY3Rpb25zPzoge1xuICAgIHNlbGVjdD86IHtcbiAgICAgIGxhYmVsPzogc3RyaW5nO1xuICAgICAgb3B0aW9uczogSUlubmVyVGl0bGVPcHRpb25zW107XG4gICAgICBwYXlsb2FkPzogYW55O1xuICAgIH1cbiAgICBzZWFyY2g/OiB7XG4gICAgICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICAgICAgcGF5bG9hZDogYW55O1xuICAgICAgYnV0dG9uPzoge1xuICAgICAgICB0ZXh0OiBzdHJpbmc7XG4gICAgICAgIHBheWxvYWQ6IGFueTtcbiAgICAgIH1cbiAgICAgIF9tZXRhPzogYW55O1xuICAgIH1cbiAgICBidXR0b25zPzogSUlubmVyVGl0bGVCdXR0b25zW107XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgSUlubmVyVGl0bGVPcHRpb25zIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgcGF5bG9hZDogYW55O1xufVxuZXhwb3J0IGludGVyZmFjZSBJSW5uZXJUaXRsZUJ1dHRvbnMge1xuICB0ZXh0OiBzdHJpbmc7XG4gIHBheWxvYWQ6IGFueTtcbiAgY2xhc3Nlcz86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctaW5uZXItdGl0bGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5uZXItdGl0bGUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSW5uZXJUaXRsZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElJbm5lclRpdGxlRGF0YTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2xpY2socGF5bG9hZCl7XG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9O1xuXG4gIG9uQ2hhbmdlKHBheWxvYWQsIGV2ZW50KXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2NoYW5nZWQgJyArIHBheWxvYWQgKyAnIHRvICcgKyBldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgb25JbnB1dENoYW5nZShwYXlsb2FkLCBldmVudCl7XG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2VkICcgKyBwYXlsb2FkICsgJyB0byAnICsgZXZlbnQudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgb25JbnB1dEVudGVyKHBheWxvYWQsIGV2ZW50KSB7XG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIFxuICAgIHRoaXMuZW1pdChwYXlsb2FkICsgJyBlbnRlcmVkIHNlYXJjaDogJyArIGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgfVxufSJdfQ==