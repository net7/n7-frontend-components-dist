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
     * @param {?} event
     * @return {?}
     */
    onChange(payload, event) {
        if (!this.emit)
            return;
        this.emit('changed ' + payload + ' to ' + event.target.value);
    }
    /**
     * @param {?} payload
     * @param {?} event
     * @return {?}
     */
    onInputChange(payload, event) {
        if (!this.emit)
            return;
        this.emit('changed ' + payload + ' to ' + event.target.value);
    }
    /**
     * @param {?} payload
     * @param {?} event
     * @return {?}
     */
    onInputEnter(payload, event) {
        if (!this.emit)
            return;
        this.emit(payload + ' entered search: ' + event.target.value);
    }
}
InnerTitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-inner-title',
                template: "<div *ngIf=\"data\" class=\"n7-inner-title\">\n    <span *ngIf=\"data.icon\" class=\"n7-inner-title__icon-left {{data.icon || ''}}\"></span>\n\n    <div class=\"n7-inner-title__wrapper-texts\">\n        <div class=\"n7-inner-title__title {{data.title.main.classes || ''}}\">\n            {{data.title.main.text}}\n        </div>\n        <div *ngIf=\"data.title.secondary\" \n             class=\"n7-inner-title__subtitle {{data.title.secondary.classes || ''}}\">\n            {{data.title.secondary.text}}\n        </div>\n    </div>\n\n    <div class=\"n7-inner-title__tools\">\n        <!-- Toolbar label -->\n        <div *ngIf=\"data.tools\"\n            class=\"n7-inner-title__tools-label \">\n            {{data.tools}}\n        </div>\n        <!-- Actions -->\n        <ng-container *ngIf=\"data.actions\">\n            <ng-container *ngTemplateOutlet=\"actions; \n                        context:{$implicit: data.actions}\">\n            </ng-container>\n        </ng-container>\n        \n    </div>\n\n\n</div>\n\n<!-- Template actions -->\n<ng-template #actions let-action>\n    <ng-container *ngIf=\"action.select\">\n        <ng-container *ngTemplateOutlet=\"select;\n                      context:{$implicit: action.select}\">\n        </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"action.search\">\n        <ng-container *ngTemplateOutlet=\"search; \n                      context:{$implicit: action.search}\">\n        </ng-container>\n    </ng-container>\n    \n    <ng-container *ngIf=\"action.buttons\">\n        <ng-container *ngTemplateOutlet=\"buttons;\n                      context:{$implicit: action.buttons}\">\n        </ng-container>\n    </ng-container>\n</ng-template>\n    \n<!-- Template sorting -->\n<ng-template #select let-select>\n<div class=\"n7-inner-title__sorting\">\n    <span *ngIf=\"select.label\"\n          class=\"n7-inner-title__sorting-label \">\n        {{select.label}}\n    </span>\n    <select (change)=\"onChange(select.payload, $event)\"\n            class=\"n7-inner-title__sorting-select\">\n        <option *ngFor=\"let opt of select.options\"\n                class=\"n7-inner-title__sorting-option \">\n            {{opt.value}}\n        </option>\n    </select>\n</div>\n</ng-template>\n\n<!-- Template search -->\n<ng-template #search let-search>\n    <div class=\"n7-inner-title__search\">\n        <input type=\"text\" \n            class=\"n7-inner-title__search-bar \" \n            placeholder=\"{{search.placeholder}}\"\n            (input)=\"onInputChange(search.payload, $event)\"\n            (keyup.enter)=\"onInputEnter(search.payload, $event.target.value)\">\n     <button *ngIf=\"search.button\" \n             (click)=\"onClick(search.button.payload)\"\n             class=\"n7-btn n7-inner-title__search-button \">\n         {{search.button.text}}\n     </button>\n    </div>\n</ng-template>\n\n<!-- Template buttons -->\n<ng-template #buttons let-buttons>\n    <div class=\"n7-inner-title__buttons-wrapper\">\n        <div *ngFor=\"let btn of buttons\"\n            class=\"n7-inner-title__single-button-wrapper\">\n            <button (click)=\"onClick(btn.payload)\" \n                    class=\"n7-btn n7-inner-title__buttons-action {{btn.classes || ''}}\">\n                {{btn.text}}\n            </button>\n        </div>\n    </div>\n</ng-template>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItdGl0bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2lubmVyLXRpdGxlL2lubmVyLXRpdGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQU9qRCxxQ0E4QkM7OztJQTdCQywrQkFBYzs7SUFDZCxnQ0FTQzs7SUFDRCxnQ0FBZTs7SUFDZixrQ0FnQkM7Ozs7O0FBRUgsd0NBR0M7OztJQUZDLG1DQUFjOztJQUNkLHFDQUFhOzs7OztBQUVmLHdDQUlDOzs7SUFIQyxrQ0FBYTs7SUFDYixxQ0FBYTs7SUFDYixxQ0FBYzs7QUFPaEIsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFJOUIsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFBQSxDQUFDOzs7Ozs7SUFFRixRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUs7UUFDckIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7O0lBRUQsYUFBYSxDQUFDLE9BQU8sRUFBRSxLQUFLO1FBQzFCLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQy9ELENBQUM7Ozs7OztJQUVELFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSztRQUN6QixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDL0QsQ0FBQzs7O1lBOUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQix3eUdBQWlDO2FBQ2xDOzs7bUJBRUUsS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sbUNBQStCOztJQUMvQixtQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSU5ORVItVElUTEUudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIElubmVyVGl0bGVDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBOQU1FIChyZXF1aXJlZHxvcHRpb25zKSA8LS0tIFRPRE86IHVwZGF0ZSB3aXRoIGludGVyZmFjZSBwcm9wZXJ0aWVzIFxuICovXG5leHBvcnQgaW50ZXJmYWNlIElJbm5lclRpdGxlRGF0YSB7XG4gIGljb24/OiBzdHJpbmc7XG4gIHRpdGxlOiB7XG4gICAgbWFpbjoge1xuICAgICAgdGV4dDogc3RyaW5nO1xuICAgICAgY2xhc3Nlcz86IGFueTtcbiAgICB9XG4gICAgc2Vjb25kYXJ5Pzoge1xuICAgICAgdGV4dDogc3RyaW5nO1xuICAgICAgY2xhc3Nlcz86IGFueTtcbiAgICB9XG4gIH1cbiAgdG9vbHM/OiBzdHJpbmc7XG4gIGFjdGlvbnM/OiB7XG4gICAgc2VsZWN0Pzoge1xuICAgICAgbGFiZWw/OiBzdHJpbmc7XG4gICAgICBvcHRpb25zOiBJSW5uZXJUaXRsZU9wdGlvbnNbXTtcbiAgICAgIHBheWxvYWQ/OiBhbnk7XG4gICAgfVxuICAgIHNlYXJjaD86IHtcbiAgICAgIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgICBwYXlsb2FkOiBhbnk7XG4gICAgICBidXR0b24/OiB7XG4gICAgICAgIHRleHQ6IHN0cmluZztcbiAgICAgICAgcGF5bG9hZDogYW55O1xuICAgICAgfVxuICAgICAgX21ldGE/OiBhbnk7XG4gICAgfVxuICAgIGJ1dHRvbnM/OiBJSW5uZXJUaXRsZUJ1dHRvbnNbXTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBJSW5uZXJUaXRsZU9wdGlvbnMge1xuICB2YWx1ZTogc3RyaW5nO1xuICBwYXlsb2FkOiBhbnk7XG59XG5leHBvcnQgaW50ZXJmYWNlIElJbm5lclRpdGxlQnV0dG9ucyB7XG4gIHRleHQ6IHN0cmluZztcbiAgcGF5bG9hZDogYW55O1xuICBjbGFzc2VzPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1pbm5lci10aXRsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbm5lci10aXRsZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJbm5lclRpdGxlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSUlubmVyVGl0bGVEYXRhO1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DbGljayhwYXlsb2FkKXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH07XG5cbiAgb25DaGFuZ2UocGF5bG9hZCwgZXZlbnQpe1xuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgIHRoaXMuZW1pdCgnY2hhbmdlZCAnICsgcGF5bG9hZCArICcgdG8gJyArIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBvbklucHV0Q2hhbmdlKHBheWxvYWQsIGV2ZW50KXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2NoYW5nZWQgJyArIHBheWxvYWQgKyAnIHRvICcgKyBldmVudC50YXJnZXQudmFsdWUpXG4gIH1cblxuICBvbklucHV0RW50ZXIocGF5bG9hZCwgZXZlbnQpIHtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG4gICAgXG4gICAgdGhpcy5lbWl0KHBheWxvYWQgKyAnIGVudGVyZWQgc2VhcmNoOiAnICsgZXZlbnQudGFyZ2V0LnZhbHVlKVxuICB9XG59Il19