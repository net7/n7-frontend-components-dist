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
                template: "<div *ngIf=\"data\" class=\"n7-inner-title\">\n    <div class=\"n7-inner-title__left-wrapper\">\n        <span *ngIf=\"data.icon\" class=\"n7-inner-title__icon-left {{data.icon || ''}}\"></span>\n        <div *ngIf=\"data.image\" \n             class=\"n7-inner-title__image-left\" \n             [ngStyle]=\"{'background-image': 'url(' + data.image + ')'}\"></div>\n\n        <div class=\"n7-inner-title__wrapper-texts\">\n            <div class=\"n7-inner-title__title {{data.title.main.classes || ''}}\">\n                {{data.title.main.text}}\n            </div>\n            <div *ngIf=\"data.title.secondary\" \n                class=\"n7-inner-title__subtitle {{data.title.secondary.classes || ''}}\">\n                {{data.title.secondary.text}}\n            </div>\n        </div>\n    </div>\n\n    <div class=\"n7-inner-title__tools\">\n        <!-- Toolbar label -->\n        <div *ngIf=\"data.tools\"\n            class=\"n7-inner-title__tools-label \">\n            {{data.tools}}\n        </div>\n        <!-- Actions -->\n        <ng-container *ngIf=\"data.actions\">\n            <ng-container *ngTemplateOutlet=\"actions; \n                        context:{$implicit: data.actions}\">\n            </ng-container>\n        </ng-container>\n    </div>\n\n</div>\n\n<!-- Template actions -->\n<ng-template #actions let-action>\n    <ng-container *ngIf=\"action.select\">\n        <ng-container *ngTemplateOutlet=\"select;\n                      context:{$implicit: action.select}\">\n        </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"action.search\">\n        <ng-container *ngTemplateOutlet=\"search; \n                      context:{$implicit: action.search}\">\n        </ng-container>\n    </ng-container>\n    \n    <ng-container *ngIf=\"action.buttons\">\n        <ng-container *ngTemplateOutlet=\"buttons;\n                      context:{$implicit: action.buttons}\">\n        </ng-container>\n    </ng-container>\n</ng-template>\n    \n<!-- Template sorting -->\n<ng-template #select let-select>\n<div class=\"n7-inner-title__sorting\">\n    <span *ngIf=\"select.label\"\n          class=\"n7-inner-title__sorting-label \">\n        {{select.label}}\n    </span>\n    <select (change)=\"onChange(select.payload, $event.target.value)\"\n            class=\"n7-inner-title__sorting-select\">\n        <option *ngFor=\"let opt of select.options\"\n                value=\"{{opt.value}}\"\n                class=\"n7-inner-title__sorting-option\"\n                [disabled]=\"opt.disable\">\n            {{opt.text}}\n        </option>\n    </select>\n</div>\n</ng-template>\n\n<!-- Template search -->\n<ng-template #search let-search>\n    <div class=\"n7-inner-title__search\">\n        <input type=\"text\" \n            class=\"n7-inner-title__search-bar \" \n            placeholder=\"{{search.placeholder}}\"\n            (input)=\"onInputChange(search.payload, $event.target.value)\"\n            (keyup.enter)=\"onInputEnter(search.payload, $event.target.value)\">\n     <button *ngIf=\"search.button\" \n             (click)=\"onClick(search.button.payload)\"\n             class=\"n7-btn n7-inner-title__search-button \">\n         {{search.button.text}}\n     </button>\n    </div>\n</ng-template>\n\n<!-- Template buttons -->\n<ng-template #buttons let-buttons>\n    <div class=\"n7-inner-title__buttons-wrapper\">\n        <div *ngFor=\"let btn of buttons\"\n            class=\"n7-inner-title__single-button-wrapper\">\n            <button (click)=\"onClick(btn.payload)\" \n                    class=\"n7-btn n7-inner-title__buttons-action {{btn.classes || ''}}\">\n                    <span *ngIf=\"btn.icon\" class=\"n7-btn__icon {{btn.icon || ''}}\"></span>\n                {{btn.text}}\n            </button>\n        </div>\n    </div>\n</ng-template>"
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItdGl0bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2lubmVyLXRpdGxlL2lubmVyLXRpdGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7QUFPakQsb0NBK0JDOzs7SUE5QkMsOEJBQWM7O0lBQ2QsK0JBQWU7O0lBQ2YsK0JBU0U7O0lBQ0YsK0JBQWU7O0lBQ2YsaUNBZ0JFOzs7OztBQUVKLHVDQUlDOzs7SUFIQyxpQ0FBYTs7SUFDYixrQ0FBYzs7SUFDZCxvQ0FBaUI7Ozs7O0FBRW5CLHVDQUtDOzs7SUFKQyxpQ0FBYTs7SUFDYixvQ0FBYTs7SUFDYixvQ0FBYzs7SUFDZCxpQ0FBVzs7QUFPYixNQUFNLE9BQU8sbUJBQW1COzs7OztJQUs5QixPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7O0lBRUQsYUFBYSxDQUFDLE9BQU8sRUFBRSxLQUFLO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7O0lBRUQsWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7O1lBL0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQix5dkhBQWlDO2FBQ2xDOzs7bUJBRUUsS0FBSzttQkFFTCxLQUFLOzs7O0lBRk4sbUNBQThCOztJQUU5QixtQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSU5ORVItVElUTEUudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIElubmVyVGl0bGVDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBOQU1FIChyZXF1aXJlZHxvcHRpb25zKSA8LS0tIFRPRE86IHVwZGF0ZSB3aXRoIGludGVyZmFjZSBwcm9wZXJ0aWVzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5uZXJUaXRsZURhdGEge1xuICBpY29uPzogc3RyaW5nO1xuICBpbWFnZT86IHN0cmluZztcbiAgdGl0bGU6IHtcbiAgICBtYWluOiB7XG4gICAgICB0ZXh0OiBzdHJpbmc7XG4gICAgICBjbGFzc2VzPzogYW55O1xuICAgIH07XG4gICAgc2Vjb25kYXJ5Pzoge1xuICAgICAgdGV4dDogc3RyaW5nO1xuICAgICAgY2xhc3Nlcz86IGFueTtcbiAgICB9O1xuICB9O1xuICB0b29scz86IHN0cmluZztcbiAgYWN0aW9ucz86IHtcbiAgICBzZWxlY3Q/OiB7XG4gICAgICBsYWJlbD86IHN0cmluZztcbiAgICAgIG9wdGlvbnM6IElubmVyVGl0bGVPcHRpb25zW107XG4gICAgICBwYXlsb2FkPzogYW55O1xuICAgIH07XG4gICAgc2VhcmNoPzoge1xuICAgICAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgICAgIHBheWxvYWQ6IGFueTtcbiAgICAgIGJ1dHRvbj86IHtcbiAgICAgICAgdGV4dDogc3RyaW5nO1xuICAgICAgICBwYXlsb2FkOiBhbnk7XG4gICAgICB9O1xuICAgICAgX21ldGE/OiBhbnk7XG4gICAgfTtcbiAgICBidXR0b25zPzogSW5uZXJUaXRsZUJ1dHRvbnNbXTtcbiAgfTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSW5uZXJUaXRsZU9wdGlvbnMge1xuICB0ZXh0OiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGRpc2FibGU6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIElubmVyVGl0bGVCdXR0b25zIHtcbiAgdGV4dDogc3RyaW5nO1xuICBwYXlsb2FkOiBhbnk7XG4gIGNsYXNzZXM/OiBhbnk7XG4gIGljb24/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWlubmVyLXRpdGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lubmVyLXRpdGxlLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElubmVyVGl0bGVDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJbm5lclRpdGxlRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DbGljayhwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKHBheWxvYWQsIHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgeyBpbnB1dFBheWxvYWQ6IHBheWxvYWQsIHZhbHVlIH0pO1xuICB9XG5cbiAgb25JbnB1dENoYW5nZShwYXlsb2FkLCB2YWx1ZSkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgaW5wdXRQYXlsb2FkOiBwYXlsb2FkLCB2YWx1ZSB9KTtcbiAgfVxuXG4gIG9uSW5wdXRFbnRlcihwYXlsb2FkLCB2YWx1ZSkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ3NlYXJjaCcsIHsgaW5wdXRQYXlsb2FkOiBwYXlsb2FkLCB2YWx1ZSB9KTtcbiAgfVxufVxuIl19