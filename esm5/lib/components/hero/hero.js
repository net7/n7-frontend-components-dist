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
export function IHeroData() { }
if (false) {
    /**
     * main text displayed in the hero section
     * @type {?}
     */
    IHeroData.prototype.title;
    /**
     * additional text under the title
     * @type {?|undefined}
     */
    IHeroData.prototype.text;
    /**
     * input field (usually for search) and it's parameters
     * @type {?|undefined}
     */
    IHeroData.prototype.input;
    /**
     * call to action button and it's parameters
     * @type {?|undefined}
     */
    IHeroData.prototype.button;
    /**
     * image displayed inside the hero
     * @type {?|undefined}
     */
    IHeroData.prototype.image;
    /**
     * background image that covers the full background area of the hero
     * @type {?|undefined}
     */
    IHeroData.prototype.backgroundImage;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    IHeroData.prototype.classes;
    /**
     * action click's payload
     * @type {?|undefined}
     */
    IHeroData.prototype.payload;
    /**
     * additional info
     * @type {?|undefined}
     */
    IHeroData.prototype._meta;
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
                    template: "<section *ngIf=\"data\" class=\"n7-hero {{data.classes || ''}}\" \n    [ngClass]=\"{ \n        'has-image' : !!data.image, \n        'has-background-image': !!data.backgroundImage \n    }\"\n    [ngStyle]=\"{ \n        'background-image': getBackgroundImageCssValue(data.backgroundImage)\n    }\">\n    <div class=\"n7-hero__content\">\n        \n        <div class=\"n7-hero__text-wrapper\">\n            <h1 class=\"n7-hero__title\">\n                {{data.title}}\n            </h1>\n            <p class=\"n7-hero__text\" *ngIf=\"data.text\" [innerHTML]=\"data.text\"></p>\n            <div class=\"n7-hero__input-wrapper\" *ngIf=\"data.input || data.button\">\n                <input type=\"text\" \n                       class=\"n7-hero__input\" \n                       placeholder=\"{{data.input.placeholder || ''}}\" \n                       *ngIf=\"data.input\" \n                       (input)=\"onInputChange(data.input.payload, $event.target.value)\" \n                       (keyup.enter)=\"onInputEnter(data.input.payload, $event.target.value)\">\n                <span class=\"n7-hero__input-icon {{data.input.icon || ''}}\" \n                      *ngIf=\"data.input && data.input.icon\" \n                      (click)=\"onClick(data.input.payload)\"></span>\n                <ng-container *ngIf=\"data.button\">\n                    <n7-anchor-wrapper [classes]=\"'n7-hero__btn n7-btn n7-btn-cta n7-btn-l'\"\n                    [data]=\"data.button.anchor\"\n                    (clicked)=\"onClick($event)\">\n                        {{data.button.text}}\n                    </n7-anchor-wrapper>\n                </ng-container>\n            </div>\n        </div>\n        \n        <div class=\"n7-hero__image-wrapper\" *ngIf=\"data.image\">\n            <img class=\"n7-hero__image\" src=\"{{data.image}}\" alt=\"\">\n        </div>\n\n    </div>\n</section>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaGVyby9oZXJvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJqRCwrQkE0Q0M7Ozs7OztJQXhDQywwQkFBYzs7Ozs7SUFJZCx5QkFBYzs7Ozs7SUFJZCwwQkFJRTs7Ozs7SUFJRiwyQkFHRTs7Ozs7SUFJRiwwQkFBZTs7Ozs7SUFJZixvQ0FBeUI7Ozs7O0lBSXpCLDRCQUFpQjs7Ozs7SUFJakIsNEJBQWM7Ozs7O0lBSWQsMEJBQVk7O0FBR2Q7SUFBQTtJQWdDQSxDQUFDOzs7OztJQXhCQyxrREFBMEI7Ozs7SUFBMUIsVUFBMkIsZUFBZTtRQUN4QyxJQUFJLGVBQWUsRUFBRTtZQUNuQixPQUFPLFNBQU8sZUFBZSxNQUFHLENBQUM7U0FDbEM7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELCtCQUFPOzs7O0lBQVAsVUFBUSxPQUFPO1FBQ2IsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFRCxxQ0FBYTs7Ozs7SUFBYixVQUFjLE9BQU8sRUFBRSxLQUFLO1FBQzFCLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUMsT0FBTyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7Ozs7SUFFRCxvQ0FBWTs7Ozs7SUFBWixVQUFhLE9BQU8sRUFBRSxLQUFLO1FBQ3pCLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxZQUFZLEVBQUMsT0FBTyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDOztnQkEvQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQix5MkRBQTBCO2lCQUMzQjs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUEwQlIsb0JBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQTVCWSxhQUFhOzs7SUFDeEIsNkJBQXlCOztJQUN6Qiw2QkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSEVSTy50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEhlcm9Db21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSB0aXRsZSAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgdGV4dCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaW5wdXQgKG9wdGlvbmFsKVxuICogLSBwbGFjZWhvbGRlciAob3B0aW9uYWwpXG4gKiAtIGljb24gKG9wdGlvbmFsKVxuICogLSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBidXR0b24gKG9wdGlvbmFsKVxuICogLSB0ZXh0IChvcHRpb25hbClcbiAqIC0gYW5jaG9yIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpbWFnZSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgYmFja2dyb3VuZEltYWdlIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUhlcm9EYXRhIHtcbiAgLyoqXG4gICAqIG1haW4gdGV4dCBkaXNwbGF5ZWQgaW4gdGhlIGhlcm8gc2VjdGlvblxuICAqL1xuICB0aXRsZTogc3RyaW5nO1xuICAvKipcbiAgKiBhZGRpdGlvbmFsIHRleHQgdW5kZXIgdGhlIHRpdGxlXG4gICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIGlucHV0IGZpZWxkICh1c3VhbGx5IGZvciBzZWFyY2gpIGFuZCBpdCdzIHBhcmFtZXRlcnNcbiAgKi9cbiAgaW5wdXQ/OiB7XG4gICAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgICBpY29uOiBzdHJpbmc7XG4gICAgcGF5bG9hZDogYW55O1xuICB9O1xuICAvKipcbiAgKiBjYWxsIHRvIGFjdGlvbiBidXR0b24gYW5kIGl0J3MgcGFyYW1ldGVyc1xuICAqL1xuICBidXR0b24/OiB7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIGFuY2hvcj86IElBbmNob3I7XG4gIH07XG4gIC8qKlxuICAgKiBpbWFnZSBkaXNwbGF5ZWQgaW5zaWRlIHRoZSBoZXJvXG4gICAqL1xuICBpbWFnZT86IHN0cmluZztcbiAgLyoqXG4gICogYmFja2dyb3VuZCBpbWFnZSB0aGF0IGNvdmVycyB0aGUgZnVsbCBiYWNrZ3JvdW5kIGFyZWEgb2YgdGhlIGhlcm9cbiAgKi9cbiAgYmFja2dyb3VuZEltYWdlPzogc3RyaW5nO1xuICAvKipcbiAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICovXG4gIHBheWxvYWQ/OiBhbnk7XG4gIC8qKlxuICAqIGFkZGl0aW9uYWwgaW5mb1xuICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctaGVybycsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZXJvLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEhlcm9Db21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJSGVyb0RhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBnZXRCYWNrZ3JvdW5kSW1hZ2VDc3NWYWx1ZShiYWNrZ3JvdW5kSW1hZ2UpIHtcbiAgICBpZiAoYmFja2dyb3VuZEltYWdlKSB7XG4gICAgICByZXR1cm4gYHVybCgke2JhY2tncm91bmRJbWFnZX0pYDtcbiAgICB9XG4gICAgcmV0dXJuICdub25lJztcbiAgfVxuXG4gIG9uQ2xpY2socGF5bG9hZCl7XG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIFxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxuXG4gIG9uSW5wdXRDaGFuZ2UocGF5bG9hZCwgdmFsdWUpe1xuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICBcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgaW5wdXRQYXlsb2FkOnBheWxvYWQsIHZhbHVlIH0pO1xuICB9XG5cbiAgb25JbnB1dEVudGVyKHBheWxvYWQsIHZhbHVlKXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG4gICAgXG4gICAgdGhpcy5lbWl0KCdlbnRlcicsIHsgaW5wdXRQYXlsb2FkOnBheWxvYWQsIHZhbHVlIH0pO1xuICB9XG59Il19