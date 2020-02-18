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
    /** @type {?|undefined} */
    IInnerTitleData.prototype.image;
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
    /** @type {?|undefined} */
    IInnerTitleButtons.prototype.icon;
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
                    template: "<div *ngIf=\"data\" class=\"n7-inner-title\">\n    <div class=\"n7-inner-title__left-wrapper\">\n        <span *ngIf=\"data.icon\" class=\"n7-inner-title__icon-left {{data.icon || ''}}\"></span>\n        <div *ngIf=\"data.image\" \n             class=\"n7-inner-title__image-left\" \n             [ngStyle]=\"{'background-image': 'url(' + data.image + ')'}\"></div>\n\n        <div class=\"n7-inner-title__wrapper-texts\">\n            <div class=\"n7-inner-title__title {{data.title.main.classes || ''}}\">\n                {{data.title.main.text}}\n            </div>\n            <div *ngIf=\"data.title.secondary\" \n                class=\"n7-inner-title__subtitle {{data.title.secondary.classes || ''}}\">\n                {{data.title.secondary.text}}\n            </div>\n        </div>\n    </div>\n\n    <div class=\"n7-inner-title__tools\">\n        <!-- Toolbar label -->\n        <div *ngIf=\"data.tools\"\n            class=\"n7-inner-title__tools-label \">\n            {{data.tools}}\n        </div>\n        <!-- Actions -->\n        <ng-container *ngIf=\"data.actions\">\n            <ng-container *ngTemplateOutlet=\"actions; \n                        context:{$implicit: data.actions}\">\n            </ng-container>\n        </ng-container>\n    </div>\n\n</div>\n\n<!-- Template actions -->\n<ng-template #actions let-action>\n    <ng-container *ngIf=\"action.select\">\n        <ng-container *ngTemplateOutlet=\"select;\n                      context:{$implicit: action.select}\">\n        </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"action.search\">\n        <ng-container *ngTemplateOutlet=\"search; \n                      context:{$implicit: action.search}\">\n        </ng-container>\n    </ng-container>\n    \n    <ng-container *ngIf=\"action.buttons\">\n        <ng-container *ngTemplateOutlet=\"buttons;\n                      context:{$implicit: action.buttons}\">\n        </ng-container>\n    </ng-container>\n</ng-template>\n    \n<!-- Template sorting -->\n<ng-template #select let-select>\n<div class=\"n7-inner-title__sorting\">\n    <span *ngIf=\"select.label\"\n          class=\"n7-inner-title__sorting-label \">\n        {{select.label}}\n    </span>\n    <select (change)=\"onChange(select.payload, $event.target.value)\"\n            class=\"n7-inner-title__sorting-select\">\n        <option *ngFor=\"let opt of select.options\"\n                value=\"{{opt.value}}\"\n                class=\"n7-inner-title__sorting-option\"\n                [disabled]=\"opt.disable\">\n            {{opt.text}}\n        </option>\n    </select>\n</div>\n</ng-template>\n\n<!-- Template search -->\n<ng-template #search let-search>\n    <div class=\"n7-inner-title__search\">\n        <input type=\"text\" \n            class=\"n7-inner-title__search-bar \" \n            placeholder=\"{{search.placeholder}}\"\n            (input)=\"onInputChange(search.payload, $event.target.value)\"\n            (keyup.enter)=\"onInputEnter(search.payload, $event.target.value)\">\n     <button *ngIf=\"search.button\" \n             (click)=\"onClick(search.button.payload)\"\n             class=\"n7-btn n7-inner-title__search-button \">\n         {{search.button.text}}\n     </button>\n    </div>\n</ng-template>\n\n<!-- Template buttons -->\n<ng-template #buttons let-buttons>\n    <div class=\"n7-inner-title__buttons-wrapper\">\n        <div *ngFor=\"let btn of buttons\"\n            class=\"n7-inner-title__single-button-wrapper\">\n            <button (click)=\"onClick(btn.payload)\" \n                    class=\"n7-btn n7-inner-title__buttons-action {{btn.classes || ''}}\">\n                    <span *ngIf=\"btn.icon\" class=\"n7-btn__icon {{btn.icon || ''}}\"></span>\n                {{btn.text}}\n            </button>\n        </div>\n    </div>\n</ng-template>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItdGl0bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2lubmVyLXRpdGxlL2lubmVyLXRpdGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7QUFPakQscUNBK0JDOzs7SUE5QkMsK0JBQWM7O0lBQ2QsZ0NBQWU7O0lBQ2YsZ0NBU0M7O0lBQ0QsZ0NBQWU7O0lBQ2Ysa0NBZ0JDOzs7OztBQUVILHdDQUlDOzs7SUFIQyxrQ0FBYTs7SUFDYixtQ0FBYzs7SUFDZCxxQ0FBaUI7Ozs7O0FBRW5CLHdDQUtDOzs7SUFKQyxrQ0FBYTs7SUFDYixxQ0FBYTs7SUFDYixxQ0FBYzs7SUFDZCxrQ0FBVzs7QUFHYjtJQUFBO0lBK0JBLENBQUM7Ozs7O0lBdkJDLHFDQUFPOzs7O0lBQVAsVUFBUSxPQUFPO1FBQ2IsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQUEsQ0FBQzs7Ozs7O0lBRUYsc0NBQVE7Ozs7O0lBQVIsVUFBUyxPQUFPLEVBQUUsS0FBSztRQUNyQixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUE7SUFDdkQsQ0FBQzs7Ozs7O0lBRUQsMkNBQWE7Ozs7O0lBQWIsVUFBYyxPQUFPLEVBQUUsS0FBSztRQUMxQixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUE7SUFDdkQsQ0FBQzs7Ozs7O0lBRUQsMENBQVk7Ozs7O0lBQVosVUFBYSxPQUFPLEVBQUUsS0FBSztRQUN6QixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUE7SUFDdkQsQ0FBQzs7Z0JBOUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQix5dkhBQWlDO2lCQUNsQzs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUF5QlIsMEJBQUM7Q0FBQSxBQS9CRCxJQStCQztTQTNCWSxtQkFBbUI7OztJQUM5QixtQ0FBK0I7O0lBQy9CLG1DQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBJTk5FUi1USVRMRS50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgSW5uZXJUaXRsZUNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IE5BTUUgKHJlcXVpcmVkfG9wdGlvbnMpIDwtLS0gVE9ETzogdXBkYXRlIHdpdGggaW50ZXJmYWNlIHByb3BlcnRpZXMgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUlubmVyVGl0bGVEYXRhIHtcbiAgaWNvbj86IHN0cmluZztcbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIHRpdGxlOiB7XG4gICAgbWFpbjoge1xuICAgICAgdGV4dDogc3RyaW5nO1xuICAgICAgY2xhc3Nlcz86IGFueTtcbiAgICB9XG4gICAgc2Vjb25kYXJ5Pzoge1xuICAgICAgdGV4dDogc3RyaW5nO1xuICAgICAgY2xhc3Nlcz86IGFueTtcbiAgICB9XG4gIH1cbiAgdG9vbHM/OiBzdHJpbmc7XG4gIGFjdGlvbnM/OiB7XG4gICAgc2VsZWN0Pzoge1xuICAgICAgbGFiZWw/OiBzdHJpbmc7XG4gICAgICBvcHRpb25zOiBJSW5uZXJUaXRsZU9wdGlvbnNbXTtcbiAgICAgIHBheWxvYWQ/OiBhbnk7XG4gICAgfVxuICAgIHNlYXJjaD86IHtcbiAgICAgIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgICBwYXlsb2FkOiBhbnk7XG4gICAgICBidXR0b24/OiB7XG4gICAgICAgIHRleHQ6IHN0cmluZztcbiAgICAgICAgcGF5bG9hZDogYW55O1xuICAgICAgfVxuICAgICAgX21ldGE/OiBhbnk7XG4gICAgfVxuICAgIGJ1dHRvbnM/OiBJSW5uZXJUaXRsZUJ1dHRvbnNbXTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBJSW5uZXJUaXRsZU9wdGlvbnMge1xuICB0ZXh0OiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGRpc2FibGU6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIElJbm5lclRpdGxlQnV0dG9ucyB7XG4gIHRleHQ6IHN0cmluZztcbiAgcGF5bG9hZDogYW55O1xuICBjbGFzc2VzPzogYW55O1xuICBpY29uPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1pbm5lci10aXRsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbm5lci10aXRsZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJbm5lclRpdGxlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSUlubmVyVGl0bGVEYXRhO1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DbGljayhwYXlsb2FkKXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH07XG5cbiAgb25DaGFuZ2UocGF5bG9hZCwgdmFsdWUpe1xuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgeyBpbnB1dFBheWxvYWQ6IHBheWxvYWQsIHZhbHVlIH0pXG4gIH1cblxuICBvbklucHV0Q2hhbmdlKHBheWxvYWQsIHZhbHVlKXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgaW5wdXRQYXlsb2FkOiBwYXlsb2FkLCB2YWx1ZSB9KVxuICB9XG5cbiAgb25JbnB1dEVudGVyKHBheWxvYWQsIHZhbHVlKSB7XG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIFxuICAgIHRoaXMuZW1pdCgnc2VhcmNoJywgeyBpbnB1dFBheWxvYWQ6IHBheWxvYWQsIHZhbHVlIH0pXG4gIH1cbn0iXX0=