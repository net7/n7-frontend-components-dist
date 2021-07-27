//---------------------------
// HERO.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var HeroComponent = /** @class */ (function () {
    function HeroComponent() {
    }
    HeroComponent.prototype.getBackgroundImageCssValue = function (backgroundImage) {
        if (backgroundImage) {
            return "url(" + backgroundImage + ")";
        }
        return 'none';
    };
    HeroComponent.prototype.onClick = function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    HeroComponent.prototype.onInputChange = function (payload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload: payload, value: value });
    };
    HeroComponent.prototype.onInputEnter = function (payload, value) {
        if (!this.emit)
            return;
        this.emit('enter', { inputPayload: payload, value: value });
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
            template: "<section *ngIf=\"data\" class=\"n7-hero {{data.classes || ''}}\" \r\n    [ngClass]=\"{ \r\n        'has-image' : !!data.image, \r\n        'has-background-image': !!data.backgroundImage \r\n    }\"\r\n    [ngStyle]=\"{ \r\n        'background-image': getBackgroundImageCssValue(data.backgroundImage)\r\n    }\">\r\n    <div class=\"n7-hero__content\">\r\n        \r\n        <div class=\"n7-hero__text-wrapper\">\r\n            <h1 class=\"n7-hero__title\" [innerHTML]=\"data.title\"></h1>\r\n            <div class=\"n7-hero__text\" *ngIf=\"data.text\" [innerHTML]=\"data.text\"></div>\r\n            <div class=\"n7-hero__input-wrapper\" *ngIf=\"data.input || data.button\">\r\n                <input type=\"text\" \r\n                       class=\"n7-hero__input\" \r\n                       placeholder=\"{{data.input.placeholder || ''}}\" \r\n                       *ngIf=\"data.input\" \r\n                       (input)=\"onInputChange(data.input.payload, $event.target.value)\" \r\n                       (keyup.enter)=\"onInputEnter(data.input.payload, $event.target.value)\">\r\n                <span class=\"n7-hero__input-icon {{data.input.icon || ''}}\" \r\n                      *ngIf=\"data.input && data.input.icon\" \r\n                      (click)=\"onClick(data.input.payload)\"></span>\r\n                <ng-container *ngIf=\"data.button\">\r\n                    <n7-anchor-wrapper [classes]=\"'n7-hero__btn n7-btn n7-btn-cta n7-btn-l'\"\r\n                    [data]=\"data.button.anchor\"\r\n                    (clicked)=\"onClick($event)\">\r\n                        {{data.button.text}}\r\n                    </n7-anchor-wrapper>\r\n                </ng-container>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"n7-hero__image-wrapper\" *ngIf=\"data.image\">\r\n            <img class=\"n7-hero__image\" src=\"{{data.image}}\" alt=\"\">\r\n        </div>\r\n\r\n    </div>\r\n</section>"
        })
    ], HeroComponent);
    return HeroComponent;
}());
export { HeroComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaGVyby9oZXJvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixVQUFVO0FBQ1YsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXVFakQ7SUFBQTtJQTZCQSxDQUFDO0lBeEJDLGtEQUEwQixHQUExQixVQUEyQixlQUFlO1FBQ3hDLElBQUksZUFBZSxFQUFFO1lBQ25CLE9BQU8sU0FBTyxlQUFlLE1BQUcsQ0FBQztTQUNsQztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCwrQkFBTyxHQUFQLFVBQVEsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELHFDQUFhLEdBQWIsVUFBYyxPQUFPLEVBQUUsS0FBSztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELG9DQUFZLEdBQVosVUFBYSxPQUFPLEVBQUUsS0FBSztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQTNCUTtRQUFSLEtBQUssRUFBRTs7K0NBQWdCO0lBRWY7UUFBUixLQUFLLEVBQUU7OytDQUFXO0lBSFIsYUFBYTtRQUp6QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixzNkRBQTBCO1NBQzNCLENBQUM7T0FDVyxhQUFhLENBNkJ6QjtJQUFELG9CQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0E3QlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEhFUk8udHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQW5jaG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkLWludGVyZmFjZXMnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgSGVyb0NvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB0aXRsZSAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGlucHV0IChvcHRpb25hbClcclxuICogLSBwbGFjZWhvbGRlciAob3B0aW9uYWwpXHJcbiAqIC0gaWNvbiAob3B0aW9uYWwpXHJcbiAqIC0gcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBidXR0b24gKG9wdGlvbmFsKVxyXG4gKiAtIHRleHQgKG9wdGlvbmFsKVxyXG4gKiAtIGFuY2hvciAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpbWFnZSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBiYWNrZ3JvdW5kSW1hZ2UgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGVyb0RhdGEge1xyXG4gIC8qKlxyXG4gICAqIG1haW4gdGV4dCBkaXNwbGF5ZWQgaW4gdGhlIGhlcm8gc2VjdGlvblxyXG4gICovXHJcbiAgdGl0bGU6IHN0cmluZztcclxuICAvKipcclxuICAqIGFkZGl0aW9uYWwgdGV4dCB1bmRlciB0aGUgdGl0bGVcclxuICAqL1xyXG4gIHRleHQ/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgKiBpbnB1dCBmaWVsZCAodXN1YWxseSBmb3Igc2VhcmNoKSBhbmQgaXQncyBwYXJhbWV0ZXJzXHJcbiAgKi9cclxuICBpbnB1dD86IHtcclxuICAgIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgICBpY29uOiBzdHJpbmc7XHJcbiAgICBwYXlsb2FkOiBhbnk7XHJcbiAgfTtcclxuICAvKipcclxuICAqIGNhbGwgdG8gYWN0aW9uIGJ1dHRvbiBhbmQgaXQncyBwYXJhbWV0ZXJzXHJcbiAgKi9cclxuICBidXR0b24/OiB7XHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICBhbmNob3I/OiBBbmNob3I7XHJcbiAgfTtcclxuICAvKipcclxuICAgKiBpbWFnZSBkaXNwbGF5ZWQgaW5zaWRlIHRoZSBoZXJvXHJcbiAgICovXHJcbiAgaW1hZ2U/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgKiBiYWNrZ3JvdW5kIGltYWdlIHRoYXQgY292ZXJzIHRoZSBmdWxsIGJhY2tncm91bmQgYXJlYSBvZiB0aGUgaGVyb1xyXG4gICovXHJcbiAgYmFja2dyb3VuZEltYWdlPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAqL1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXHJcbiAgKi9cclxuICBwYXlsb2FkPzogYW55O1xyXG4gIC8qKlxyXG4gICogYWRkaXRpb25hbCBpbmZvXHJcbiAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1oZXJvJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaGVyby5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVyb0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogSGVyb0RhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgZ2V0QmFja2dyb3VuZEltYWdlQ3NzVmFsdWUoYmFja2dyb3VuZEltYWdlKSB7XHJcbiAgICBpZiAoYmFja2dyb3VuZEltYWdlKSB7XHJcbiAgICAgIHJldHVybiBgdXJsKCR7YmFja2dyb3VuZEltYWdlfSlgO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICdub25lJztcclxuICB9XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZCkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgfVxyXG5cclxuICBvbklucHV0Q2hhbmdlKHBheWxvYWQsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgeyBpbnB1dFBheWxvYWQ6IHBheWxvYWQsIHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgb25JbnB1dEVudGVyKHBheWxvYWQsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuZW1pdCgnZW50ZXInLCB7IGlucHV0UGF5bG9hZDogcGF5bG9hZCwgdmFsdWUgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==