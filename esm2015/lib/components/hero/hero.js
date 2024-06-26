//---------------------------
// HERO.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let HeroComponent = class HeroComponent {
    getBackgroundImageCssValue(backgroundImage) {
        if (backgroundImage) {
            return `url(${backgroundImage})`;
        }
        return 'none';
    }
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    onInputChange(payload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload: payload, value });
    }
    onInputEnter(payload, value) {
        if (!this.emit)
            return;
        this.emit('enter', { inputPayload: payload, value });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], HeroComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], HeroComponent.prototype, "emit", void 0);
HeroComponent = __decorate([
    Component({
        selector: 'n7-hero',
        template: "<section *ngIf=\"data\" class=\"n7-hero {{data.classes || ''}}\" \n    [ngClass]=\"{ \n        'has-image' : !!data.image, \n        'has-background-image': !!data.backgroundImage \n    }\"\n    [ngStyle]=\"{ \n        'background-image': getBackgroundImageCssValue(data.backgroundImage)\n    }\">\n    <div class=\"n7-hero__content\">\n        \n        <div class=\"n7-hero__text-wrapper\">\n            <h1 class=\"n7-hero__title\" [innerHTML]=\"data.title\"></h1>\n            <div class=\"n7-hero__text\" *ngIf=\"data.text\" [innerHTML]=\"data.text\"></div>\n            <div class=\"n7-hero__input-wrapper\" *ngIf=\"data.input || data.button\">\n                <input type=\"text\" \n                       class=\"n7-hero__input\" \n                       placeholder=\"{{data.input.placeholder || ''}}\" \n                       *ngIf=\"data.input\" \n                       (input)=\"onInputChange(data.input.payload, $event.target.value)\" \n                       (keyup.enter)=\"onInputEnter(data.input.payload, $event.target.value)\">\n                <span class=\"n7-hero__input-icon {{data.input.icon || ''}}\" \n                      *ngIf=\"data.input && data.input.icon\" \n                      (click)=\"onClick(data.input.payload)\"></span>\n                <ng-container *ngIf=\"data.button\">\n                    <n7-anchor-wrapper [classes]=\"'n7-hero__btn n7-btn n7-btn-cta n7-btn-l'\"\n                    [data]=\"data.button.anchor\"\n                    (clicked)=\"onClick($event)\">\n                        {{data.button.text}}\n                    </n7-anchor-wrapper>\n                </ng-container>\n            </div>\n        </div>\n        \n        <div class=\"n7-hero__image-wrapper\" *ngIf=\"data.image\">\n            <img class=\"n7-hero__image\" src=\"{{data.image}}\" alt=\"\">\n        </div>\n\n    </div>\n</section>"
    })
], HeroComponent);
export { HeroComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaGVyby9oZXJvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixVQUFVO0FBQ1YsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXVFakQsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQUt4QiwwQkFBMEIsQ0FBQyxlQUFlO1FBQ3hDLElBQUksZUFBZSxFQUFFO1lBQ25CLE9BQU8sT0FBTyxlQUFlLEdBQUcsQ0FBQztTQUNsQztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFPLEVBQUUsS0FBSztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUs7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDO0NBQ0YsQ0FBQTtBQTVCVTtJQUFSLEtBQUssRUFBRTs7MkNBQWdCO0FBRWY7SUFBUixLQUFLLEVBQUU7OzJDQUFXO0FBSFIsYUFBYTtJQUp6QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsU0FBUztRQUNuQiwwMURBQTBCO0tBQzNCLENBQUM7R0FDVyxhQUFhLENBNkJ6QjtTQTdCWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEhFUk8udHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEhlcm9Db21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSB0aXRsZSAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgdGV4dCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaW5wdXQgKG9wdGlvbmFsKVxuICogLSBwbGFjZWhvbGRlciAob3B0aW9uYWwpXG4gKiAtIGljb24gKG9wdGlvbmFsKVxuICogLSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBidXR0b24gKG9wdGlvbmFsKVxuICogLSB0ZXh0IChvcHRpb25hbClcbiAqIC0gYW5jaG9yIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpbWFnZSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgYmFja2dyb3VuZEltYWdlIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSGVyb0RhdGEge1xuICAvKipcbiAgICogbWFpbiB0ZXh0IGRpc3BsYXllZCBpbiB0aGUgaGVybyBzZWN0aW9uXG4gICovXG4gIHRpdGxlOiBzdHJpbmc7XG4gIC8qKlxuICAqIGFkZGl0aW9uYWwgdGV4dCB1bmRlciB0aGUgdGl0bGVcbiAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICogaW5wdXQgZmllbGQgKHVzdWFsbHkgZm9yIHNlYXJjaCkgYW5kIGl0J3MgcGFyYW1ldGVyc1xuICAqL1xuICBpbnB1dD86IHtcbiAgICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICAgIGljb246IHN0cmluZztcbiAgICBwYXlsb2FkOiBhbnk7XG4gIH07XG4gIC8qKlxuICAqIGNhbGwgdG8gYWN0aW9uIGJ1dHRvbiBhbmQgaXQncyBwYXJhbWV0ZXJzXG4gICovXG4gIGJ1dHRvbj86IHtcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgYW5jaG9yPzogQW5jaG9yO1xuICB9O1xuICAvKipcbiAgICogaW1hZ2UgZGlzcGxheWVkIGluc2lkZSB0aGUgaGVyb1xuICAgKi9cbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIC8qKlxuICAqIGJhY2tncm91bmQgaW1hZ2UgdGhhdCBjb3ZlcnMgdGhlIGZ1bGwgYmFja2dyb3VuZCBhcmVhIG9mIHRoZSBoZXJvXG4gICovXG4gIGJhY2tncm91bmRJbWFnZT86IHN0cmluZztcbiAgLyoqXG4gICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAqL1xuICBwYXlsb2FkPzogYW55O1xuICAvKipcbiAgKiBhZGRpdGlvbmFsIGluZm9cbiAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWhlcm8nLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVyby5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBIZXJvQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSGVyb0RhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIGdldEJhY2tncm91bmRJbWFnZUNzc1ZhbHVlKGJhY2tncm91bmRJbWFnZSkge1xuICAgIGlmIChiYWNrZ3JvdW5kSW1hZ2UpIHtcbiAgICAgIHJldHVybiBgdXJsKCR7YmFja2dyb3VuZEltYWdlfSlgO1xuICAgIH1cbiAgICByZXR1cm4gJ25vbmUnO1xuICB9XG5cbiAgb25DbGljayhwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxuXG4gIG9uSW5wdXRDaGFuZ2UocGF5bG9hZCwgdmFsdWUpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7IGlucHV0UGF5bG9hZDogcGF5bG9hZCwgdmFsdWUgfSk7XG4gIH1cblxuICBvbklucHV0RW50ZXIocGF5bG9hZCwgdmFsdWUpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuXG4gICAgdGhpcy5lbWl0KCdlbnRlcicsIHsgaW5wdXRQYXlsb2FkOiBwYXlsb2FkLCB2YWx1ZSB9KTtcbiAgfVxufVxuIl19