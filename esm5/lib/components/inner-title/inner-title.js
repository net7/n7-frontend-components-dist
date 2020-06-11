//---------------------------
// INNER-TITLE.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var InnerTitleComponent = /** @class */ (function () {
    function InnerTitleComponent() {
    }
    InnerTitleComponent.prototype.onClick = function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    InnerTitleComponent.prototype.onChange = function (payload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload: payload, value: value });
    };
    InnerTitleComponent.prototype.onInputChange = function (payload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload: payload, value: value });
    };
    InnerTitleComponent.prototype.onInputEnter = function (payload, value) {
        if (!this.emit)
            return;
        this.emit('search', { inputPayload: payload, value: value });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], InnerTitleComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], InnerTitleComponent.prototype, "emit", void 0);
    InnerTitleComponent = __decorate([
        Component({
            selector: 'n7-inner-title',
            template: "<div *ngIf=\"data\" class=\"n7-inner-title\">\n    <div class=\"n7-inner-title__left-wrapper\">\n        <span *ngIf=\"data.icon\" class=\"n7-inner-title__icon-left {{data.icon || ''}}\"></span>\n        <div *ngIf=\"data.image\" \n             class=\"n7-inner-title__image-left\" \n             [ngStyle]=\"{'background-image': 'url(' + data.image + ')'}\"></div>\n\n        <div class=\"n7-inner-title__wrapper-texts\">\n            <div class=\"n7-inner-title__title {{data.title.main.classes || ''}}\">\n                {{data.title.main.text}}\n            </div>\n            <div *ngIf=\"data.title.secondary\" \n                class=\"n7-inner-title__subtitle {{data.title.secondary.classes || ''}}\">\n                {{data.title.secondary.text}}\n            </div>\n        </div>\n    </div>\n\n    <div class=\"n7-inner-title__tools\">\n        <!-- Toolbar label -->\n        <div *ngIf=\"data.tools\"\n            class=\"n7-inner-title__tools-label \">\n            {{data.tools}}\n        </div>\n        <!-- Actions -->\n        <ng-container *ngIf=\"data.actions\">\n            <ng-container *ngTemplateOutlet=\"actions; \n                        context:{$implicit: data.actions}\">\n            </ng-container>\n        </ng-container>\n    </div>\n\n</div>\n\n<!-- Template actions -->\n<ng-template #actions let-action>\n    <ng-container *ngIf=\"action.select\">\n        <ng-container *ngTemplateOutlet=\"select;\n                      context:{$implicit: action.select}\">\n        </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"action.search\">\n        <ng-container *ngTemplateOutlet=\"search; \n                      context:{$implicit: action.search}\">\n        </ng-container>\n    </ng-container>\n    \n    <ng-container *ngIf=\"action.buttons\">\n        <ng-container *ngTemplateOutlet=\"buttons;\n                      context:{$implicit: action.buttons}\">\n        </ng-container>\n    </ng-container>\n</ng-template>\n    \n<!-- Template sorting -->\n<ng-template #select let-select>\n<div class=\"n7-inner-title__sorting\">\n    <span *ngIf=\"select.label\"\n          class=\"n7-inner-title__sorting-label \">\n        {{select.label}}\n    </span>\n    <select (change)=\"onChange(select.payload, $event.target.value)\"\n            class=\"n7-inner-title__sorting-select\">\n        <option *ngFor=\"let opt of select.options\"\n        value=\"{{opt.value}}\"\n        class=\"n7-inner-title__sorting-option\"\n        [selected]=\"opt.selected\"\n        [disabled]=\"opt.disabled\">\n            {{opt.text}}\n        </option>\n    </select>\n</div>\n</ng-template>\n\n<!-- Template search -->\n<ng-template #search let-search>\n    <div class=\"n7-inner-title__search\">\n        <input type=\"text\" \n            class=\"n7-inner-title__search-bar \" \n            placeholder=\"{{search.placeholder}}\"\n            (input)=\"onInputChange(search.payload, $event.target.value)\"\n            (keyup.enter)=\"onInputEnter(search.payload, $event.target.value)\">\n     <button *ngIf=\"search.button\" \n             (click)=\"onClick(search.button.payload)\"\n             class=\"n7-btn n7-inner-title__search-button \">\n         {{search.button.text}}\n     </button>\n    </div>\n</ng-template>\n\n<!-- Template buttons -->\n<ng-template #buttons let-buttons>\n    <div class=\"n7-inner-title__buttons-wrapper\">\n        <div *ngFor=\"let btn of buttons\"\n            class=\"n7-inner-title__single-button-wrapper\">\n            <button (click)=\"onClick(btn.payload)\" \n                    class=\"n7-btn n7-inner-title__buttons-action {{btn.classes || ''}}\">\n                    <span *ngIf=\"btn.icon\" class=\"n7-btn__icon {{btn.icon || ''}}\"></span>\n                {{btn.text}}\n            </button>\n        </div>\n    </div>\n</ng-template>"
        })
    ], InnerTitleComponent);
    return InnerTitleComponent;
}());
export { InnerTitleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItdGl0bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2lubmVyLXRpdGxlL2lubmVyLXRpdGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixpQkFBaUI7QUFDakIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXdEakQ7SUFBQTtJQTRCQSxDQUFDO0lBdkJDLHFDQUFPLEdBQVAsVUFBUSxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsc0NBQVEsR0FBUixVQUFTLE9BQU8sRUFBRSxLQUFLO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsMkNBQWEsR0FBYixVQUFjLE9BQU8sRUFBRSxLQUFLO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsMENBQVksR0FBWixVQUFhLE9BQU8sRUFBRSxLQUFLO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBMUJRO1FBQVIsS0FBSyxFQUFFOztxREFBc0I7SUFFckI7UUFBUixLQUFLLEVBQUU7O3FEQUFXO0lBSFIsbUJBQW1CO1FBSi9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsdXdIQUFpQztTQUNsQyxDQUFDO09BQ1csbUJBQW1CLENBNEIvQjtJQUFELDBCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0E1QlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIElOTkVSLVRJVExFLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBJbm5lclRpdGxlQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgTkFNRSAocmVxdWlyZWR8b3B0aW9ucykgPC0tLSBUT0RPOiB1cGRhdGUgd2l0aCBpbnRlcmZhY2UgcHJvcGVydGllc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIElubmVyVGl0bGVEYXRhIHtcbiAgaWNvbj86IHN0cmluZztcbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIHRpdGxlOiB7XG4gICAgbWFpbjoge1xuICAgICAgdGV4dDogc3RyaW5nO1xuICAgICAgY2xhc3Nlcz86IGFueTtcbiAgICB9O1xuICAgIHNlY29uZGFyeT86IHtcbiAgICAgIHRleHQ6IHN0cmluZztcbiAgICAgIGNsYXNzZXM/OiBhbnk7XG4gICAgfTtcbiAgfTtcbiAgdG9vbHM/OiBzdHJpbmc7XG4gIGFjdGlvbnM/OiB7XG4gICAgc2VsZWN0Pzoge1xuICAgICAgbGFiZWw/OiBzdHJpbmc7XG4gICAgICBvcHRpb25zOiBJbm5lclRpdGxlT3B0aW9uc1tdO1xuICAgICAgcGF5bG9hZD86IGFueTtcbiAgICB9O1xuICAgIHNlYXJjaD86IHtcbiAgICAgIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgICBwYXlsb2FkOiBhbnk7XG4gICAgICBidXR0b24/OiB7XG4gICAgICAgIHRleHQ6IHN0cmluZztcbiAgICAgICAgcGF5bG9hZDogYW55O1xuICAgICAgfTtcbiAgICAgIF9tZXRhPzogYW55O1xuICAgIH07XG4gICAgYnV0dG9ucz86IElubmVyVGl0bGVCdXR0b25zW107XG4gIH07XG59XG5leHBvcnQgaW50ZXJmYWNlIElubmVyVGl0bGVPcHRpb25zIHtcbiAgdGV4dDogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSW5uZXJUaXRsZUJ1dHRvbnMge1xuICB0ZXh0OiBzdHJpbmc7XG4gIHBheWxvYWQ6IGFueTtcbiAgY2xhc3Nlcz86IGFueTtcbiAgaWNvbj86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctaW5uZXItdGl0bGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5uZXItdGl0bGUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSW5uZXJUaXRsZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElubmVyVGl0bGVEYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG5cbiAgb25DaGFuZ2UocGF5bG9hZCwgdmFsdWUpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7IGlucHV0UGF5bG9hZDogcGF5bG9hZCwgdmFsdWUgfSk7XG4gIH1cblxuICBvbklucHV0Q2hhbmdlKHBheWxvYWQsIHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgeyBpbnB1dFBheWxvYWQ6IHBheWxvYWQsIHZhbHVlIH0pO1xuICB9XG5cbiAgb25JbnB1dEVudGVyKHBheWxvYWQsIHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgIHRoaXMuZW1pdCgnc2VhcmNoJywgeyBpbnB1dFBheWxvYWQ6IHBheWxvYWQsIHZhbHVlIH0pO1xuICB9XG59XG4iXX0=