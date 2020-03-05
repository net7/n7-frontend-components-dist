/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/hero/hero.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// HERO.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for HeroComponent's "data"
 *
 * \@property title (required)
 * \@property text (optional)
 * \@property input (optional)
 * - placeholder (optional)
 * - icon (optional)
 * - payload (optional)
 * \@property button (optional)
 * - text (optional)
 * - anchor (optional)
 * \@property image (optional)
 * \@property backgroundImage (optional)
 * \@property classes (optional)
 * \@property payload (optional)
 * \@property _meta (optional)
 * @record
 */
export function HeroData() { }
if (false) {
    /**
     * main text displayed in the hero section
     * @type {?}
     */
    HeroData.prototype.title;
    /**
     * additional text under the title
     * @type {?|undefined}
     */
    HeroData.prototype.text;
    /**
     * input field (usually for search) and it's parameters
     * @type {?|undefined}
     */
    HeroData.prototype.input;
    /**
     * call to action button and it's parameters
     * @type {?|undefined}
     */
    HeroData.prototype.button;
    /**
     * image displayed inside the hero
     * @type {?|undefined}
     */
    HeroData.prototype.image;
    /**
     * background image that covers the full background area of the hero
     * @type {?|undefined}
     */
    HeroData.prototype.backgroundImage;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    HeroData.prototype.classes;
    /**
     * action click's payload
     * @type {?|undefined}
     */
    HeroData.prototype.payload;
    /**
     * additional info
     * @type {?|undefined}
     */
    HeroData.prototype._meta;
}
var HeroComponent = /** @class */ (function () {
    function HeroComponent() {
    }
    /**
     * @param {?} backgroundImage
     * @return {?}
     */
    HeroComponent.prototype.getBackgroundImageCssValue = /**
     * @param {?} backgroundImage
     * @return {?}
     */
    function (backgroundImage) {
        if (backgroundImage) {
            return "url(" + backgroundImage + ")";
        }
        return 'none';
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    HeroComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    HeroComponent.prototype.onInputChange = /**
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
    HeroComponent.prototype.onInputEnter = /**
     * @param {?} payload
     * @param {?} value
     * @return {?}
     */
    function (payload, value) {
        if (!this.emit)
            return;
        this.emit('enter', { inputPayload: payload, value: value });
    };
    HeroComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-hero',
                    template: "<section *ngIf=\"data\" class=\"n7-hero {{data.classes || ''}}\" \r\n    [ngClass]=\"{ \r\n        'has-image' : !!data.image, \r\n        'has-background-image': !!data.backgroundImage \r\n    }\"\r\n    [ngStyle]=\"{ \r\n        'background-image': getBackgroundImageCssValue(data.backgroundImage)\r\n    }\">\r\n    <div class=\"n7-hero__content\">\r\n        \r\n        <div class=\"n7-hero__text-wrapper\">\r\n            <h1 class=\"n7-hero__title\">\r\n                {{data.title}}\r\n            </h1>\r\n            <p class=\"n7-hero__text\" *ngIf=\"data.text\" [innerHTML]=\"data.text\"></p>\r\n            <div class=\"n7-hero__input-wrapper\" *ngIf=\"data.input || data.button\">\r\n                <input type=\"text\" \r\n                       class=\"n7-hero__input\" \r\n                       placeholder=\"{{data.input.placeholder || ''}}\" \r\n                       *ngIf=\"data.input\" \r\n                       (input)=\"onInputChange(data.input.payload, $event.target.value)\" \r\n                       (keyup.enter)=\"onInputEnter(data.input.payload, $event.target.value)\">\r\n                <span class=\"n7-hero__input-icon {{data.input.icon || ''}}\" \r\n                      *ngIf=\"data.input && data.input.icon\" \r\n                      (click)=\"onClick(data.input.payload)\"></span>\r\n                <ng-container *ngIf=\"data.button\">\r\n                    <n7-anchor-wrapper [classes]=\"'n7-hero__btn n7-btn n7-btn-cta n7-btn-l'\"\r\n                    [data]=\"data.button.anchor\"\r\n                    (clicked)=\"onClick($event)\">\r\n                        {{data.button.text}}\r\n                    </n7-anchor-wrapper>\r\n                </ng-container>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"n7-hero__image-wrapper\" *ngIf=\"data.image\">\r\n            <img class=\"n7-hero__image\" src=\"{{data.image}}\" alt=\"\">\r\n        </div>\r\n\r\n    </div>\r\n</section>"
                }] }
    ];
    HeroComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return HeroComponent;
}());
export { HeroComponent };
if (false) {
    /** @type {?} */
    HeroComponent.prototype.data;
    /** @type {?} */
    HeroComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaGVyby9oZXJvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJqRCw4QkE0Q0M7Ozs7OztJQXhDQyx5QkFBYzs7Ozs7SUFJZCx3QkFBYzs7Ozs7SUFJZCx5QkFJRTs7Ozs7SUFJRiwwQkFHRTs7Ozs7SUFJRix5QkFBZTs7Ozs7SUFJZixtQ0FBeUI7Ozs7O0lBSXpCLDJCQUFpQjs7Ozs7SUFJakIsMkJBQWM7Ozs7O0lBSWQseUJBQVk7O0FBR2Q7SUFBQTtJQWlDQSxDQUFDOzs7OztJQXhCQyxrREFBMEI7Ozs7SUFBMUIsVUFBMkIsZUFBZTtRQUN4QyxJQUFJLGVBQWUsRUFBRTtZQUNuQixPQUFPLFNBQU8sZUFBZSxNQUFHLENBQUM7U0FDbEM7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELCtCQUFPOzs7O0lBQVAsVUFBUSxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFRCxxQ0FBYTs7Ozs7SUFBYixVQUFjLE9BQU8sRUFBRSxLQUFLO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7Ozs7SUFFRCxvQ0FBWTs7Ozs7SUFBWixVQUFhLE9BQU8sRUFBRSxLQUFLO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDOztnQkFoQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQix5N0RBQTBCO2lCQUMzQjs7O3VCQUVFLEtBQUs7dUJBRUwsS0FBSzs7SUEwQlIsb0JBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQTdCWSxhQUFhOzs7SUFDeEIsNkJBQXdCOztJQUV4Qiw2QkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBIRVJPLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEhlcm9Db21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgdGl0bGUgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgdGV4dCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpbnB1dCAob3B0aW9uYWwpXHJcbiAqIC0gcGxhY2Vob2xkZXIgKG9wdGlvbmFsKVxyXG4gKiAtIGljb24gKG9wdGlvbmFsKVxyXG4gKiAtIHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgYnV0dG9uIChvcHRpb25hbClcclxuICogLSB0ZXh0IChvcHRpb25hbClcclxuICogLSBhbmNob3IgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaW1hZ2UgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgYmFja2dyb3VuZEltYWdlIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEhlcm9EYXRhIHtcclxuICAvKipcclxuICAgKiBtYWluIHRleHQgZGlzcGxheWVkIGluIHRoZSBoZXJvIHNlY3Rpb25cclxuICAqL1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgKiBhZGRpdGlvbmFsIHRleHQgdW5kZXIgdGhlIHRpdGxlXHJcbiAgKi9cclxuICB0ZXh0Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICogaW5wdXQgZmllbGQgKHVzdWFsbHkgZm9yIHNlYXJjaCkgYW5kIGl0J3MgcGFyYW1ldGVyc1xyXG4gICovXHJcbiAgaW5wdXQ/OiB7XHJcbiAgICBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gICAgaWNvbjogc3RyaW5nO1xyXG4gICAgcGF5bG9hZDogYW55O1xyXG4gIH07XHJcbiAgLyoqXHJcbiAgKiBjYWxsIHRvIGFjdGlvbiBidXR0b24gYW5kIGl0J3MgcGFyYW1ldGVyc1xyXG4gICovXHJcbiAgYnV0dG9uPzoge1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgYW5jaG9yPzogQW5jaG9yO1xyXG4gIH07XHJcbiAgLyoqXHJcbiAgICogaW1hZ2UgZGlzcGxheWVkIGluc2lkZSB0aGUgaGVyb1xyXG4gICAqL1xyXG4gIGltYWdlPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICogYmFja2dyb3VuZCBpbWFnZSB0aGF0IGNvdmVycyB0aGUgZnVsbCBiYWNrZ3JvdW5kIGFyZWEgb2YgdGhlIGhlcm9cclxuICAqL1xyXG4gIGJhY2tncm91bmRJbWFnZT86IHN0cmluZztcclxuICAvKipcclxuICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICovXHJcbiAgcGF5bG9hZD86IGFueTtcclxuICAvKipcclxuICAqIGFkZGl0aW9uYWwgaW5mb1xyXG4gICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctaGVybycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2hlcm8uaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEhlcm9Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IEhlcm9EYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIGdldEJhY2tncm91bmRJbWFnZUNzc1ZhbHVlKGJhY2tncm91bmRJbWFnZSkge1xyXG4gICAgaWYgKGJhY2tncm91bmRJbWFnZSkge1xyXG4gICAgICByZXR1cm4gYHVybCgke2JhY2tncm91bmRJbWFnZX0pYDtcclxuICAgIH1cclxuICAgIHJldHVybiAnbm9uZSc7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrKHBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgb25JbnB1dENoYW5nZShwYXlsb2FkLCB2YWx1ZSkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgaW5wdXRQYXlsb2FkOiBwYXlsb2FkLCB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIG9uSW5wdXRFbnRlcihwYXlsb2FkLCB2YWx1ZSkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2VudGVyJywgeyBpbnB1dFBheWxvYWQ6IHBheWxvYWQsIHZhbHVlIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=