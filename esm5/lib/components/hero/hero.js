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
            template: "<section *ngIf=\"data\" class=\"n7-hero {{data.classes || ''}}\" \n    [ngClass]=\"{ \n        'has-image' : !!data.image, \n        'has-background-image': !!data.backgroundImage \n    }\"\n    [ngStyle]=\"{ \n        'background-image': getBackgroundImageCssValue(data.backgroundImage)\n    }\">\n    <div class=\"n7-hero__content\">\n        \n        <div class=\"n7-hero__text-wrapper\">\n            <h1 class=\"n7-hero__title\" [innerHTML]=\"data.title\"></h1>\n            <div class=\"n7-hero__text\" *ngIf=\"data.text\" [innerHTML]=\"data.text\"></div>\n            <div class=\"n7-hero__input-wrapper\" *ngIf=\"data.input || data.button\">\n                <input type=\"text\" \n                       class=\"n7-hero__input\" \n                       placeholder=\"{{data.input.placeholder || ''}}\" \n                       *ngIf=\"data.input\" \n                       (input)=\"onInputChange(data.input.payload, $event.target.value)\" \n                       (keyup.enter)=\"onInputEnter(data.input.payload, $event.target.value)\">\n                <span class=\"n7-hero__input-icon {{data.input.icon || ''}}\" \n                      *ngIf=\"data.input && data.input.icon\" \n                      (click)=\"onClick(data.input.payload)\"></span>\n                <ng-container *ngIf=\"data.button\">\n                    <n7-anchor-wrapper [classes]=\"'n7-hero__btn n7-btn n7-btn-cta n7-btn-l'\"\n                    [data]=\"data.button.anchor\"\n                    (clicked)=\"onClick($event)\">\n                        {{data.button.text}}\n                    </n7-anchor-wrapper>\n                </ng-container>\n            </div>\n        </div>\n        \n        <div class=\"n7-hero__image-wrapper\" *ngIf=\"data.image\">\n            <img class=\"n7-hero__image\" src=\"{{data.image}}\" alt=\"\">\n        </div>\n\n    </div>\n</section>"
        })
    ], HeroComponent);
    return HeroComponent;
}());
export { HeroComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaGVyby9oZXJvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixVQUFVO0FBQ1YsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXVFakQ7SUFBQTtJQTZCQSxDQUFDO0lBeEJDLGtEQUEwQixHQUExQixVQUEyQixlQUFlO1FBQ3hDLElBQUksZUFBZSxFQUFFO1lBQ25CLE9BQU8sU0FBTyxlQUFlLE1BQUcsQ0FBQztTQUNsQztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCwrQkFBTyxHQUFQLFVBQVEsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELHFDQUFhLEdBQWIsVUFBYyxPQUFPLEVBQUUsS0FBSztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELG9DQUFZLEdBQVosVUFBYSxPQUFPLEVBQUUsS0FBSztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQTNCUTtRQUFSLEtBQUssRUFBRTs7K0NBQWdCO0lBRWY7UUFBUixLQUFLLEVBQUU7OytDQUFXO0lBSFIsYUFBYTtRQUp6QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQiwwMURBQTBCO1NBQzNCLENBQUM7T0FDVyxhQUFhLENBNkJ6QjtJQUFELG9CQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0E3QlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBIRVJPLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBIZXJvQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgdGl0bGUgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHRleHQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGlucHV0IChvcHRpb25hbClcbiAqIC0gcGxhY2Vob2xkZXIgKG9wdGlvbmFsKVxuICogLSBpY29uIChvcHRpb25hbClcbiAqIC0gcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgYnV0dG9uIChvcHRpb25hbClcbiAqIC0gdGV4dCAob3B0aW9uYWwpXG4gKiAtIGFuY2hvciAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaW1hZ2UgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGJhY2tncm91bmRJbWFnZSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEhlcm9EYXRhIHtcbiAgLyoqXG4gICAqIG1haW4gdGV4dCBkaXNwbGF5ZWQgaW4gdGhlIGhlcm8gc2VjdGlvblxuICAqL1xuICB0aXRsZTogc3RyaW5nO1xuICAvKipcbiAgKiBhZGRpdGlvbmFsIHRleHQgdW5kZXIgdGhlIHRpdGxlXG4gICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIGlucHV0IGZpZWxkICh1c3VhbGx5IGZvciBzZWFyY2gpIGFuZCBpdCdzIHBhcmFtZXRlcnNcbiAgKi9cbiAgaW5wdXQ/OiB7XG4gICAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgICBpY29uOiBzdHJpbmc7XG4gICAgcGF5bG9hZDogYW55O1xuICB9O1xuICAvKipcbiAgKiBjYWxsIHRvIGFjdGlvbiBidXR0b24gYW5kIGl0J3MgcGFyYW1ldGVyc1xuICAqL1xuICBidXR0b24/OiB7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIGFuY2hvcj86IEFuY2hvcjtcbiAgfTtcbiAgLyoqXG4gICAqIGltYWdlIGRpc3BsYXllZCBpbnNpZGUgdGhlIGhlcm9cbiAgICovXG4gIGltYWdlPzogc3RyaW5nO1xuICAvKipcbiAgKiBiYWNrZ3JvdW5kIGltYWdlIHRoYXQgY292ZXJzIHRoZSBmdWxsIGJhY2tncm91bmQgYXJlYSBvZiB0aGUgaGVyb1xuICAqL1xuICBiYWNrZ3JvdW5kSW1hZ2U/OiBzdHJpbmc7XG4gIC8qKlxuICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgKi9cbiAgcGF5bG9hZD86IGFueTtcbiAgLyoqXG4gICogYWRkaXRpb25hbCBpbmZvXG4gICovXG4gIF9tZXRhPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1oZXJvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlcm8uaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSGVyb0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IEhlcm9EYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBnZXRCYWNrZ3JvdW5kSW1hZ2VDc3NWYWx1ZShiYWNrZ3JvdW5kSW1hZ2UpIHtcbiAgICBpZiAoYmFja2dyb3VuZEltYWdlKSB7XG4gICAgICByZXR1cm4gYHVybCgke2JhY2tncm91bmRJbWFnZX0pYDtcbiAgICB9XG4gICAgcmV0dXJuICdub25lJztcbiAgfVxuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cblxuICBvbklucHV0Q2hhbmdlKHBheWxvYWQsIHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgeyBpbnB1dFBheWxvYWQ6IHBheWxvYWQsIHZhbHVlIH0pO1xuICB9XG5cbiAgb25JbnB1dEVudGVyKHBheWxvYWQsIHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgIHRoaXMuZW1pdCgnZW50ZXInLCB7IGlucHV0UGF5bG9hZDogcGF5bG9hZCwgdmFsdWUgfSk7XG4gIH1cbn1cbiJdfQ==