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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaGVyby9oZXJvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJqRCw4QkE0Q0M7Ozs7OztJQXhDQyx5QkFBYzs7Ozs7SUFJZCx3QkFBYzs7Ozs7SUFJZCx5QkFJRTs7Ozs7SUFJRiwwQkFHRTs7Ozs7SUFJRix5QkFBZTs7Ozs7SUFJZixtQ0FBeUI7Ozs7O0lBSXpCLDJCQUFpQjs7Ozs7SUFJakIsMkJBQWM7Ozs7O0lBSWQseUJBQVk7O0FBR2Q7SUFBQTtJQWlDQSxDQUFDOzs7OztJQXhCQyxrREFBMEI7Ozs7SUFBMUIsVUFBMkIsZUFBZTtRQUN4QyxJQUFJLGVBQWUsRUFBRTtZQUNuQixPQUFPLFNBQU8sZUFBZSxNQUFHLENBQUM7U0FDbEM7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELCtCQUFPOzs7O0lBQVAsVUFBUSxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFRCxxQ0FBYTs7Ozs7SUFBYixVQUFjLE9BQU8sRUFBRSxLQUFLO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7Ozs7SUFFRCxvQ0FBWTs7Ozs7SUFBWixVQUFhLE9BQU8sRUFBRSxLQUFLO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDOztnQkFoQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQix5MkRBQTBCO2lCQUMzQjs7O3VCQUVFLEtBQUs7dUJBRUwsS0FBSzs7SUEwQlIsb0JBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQTdCWSxhQUFhOzs7SUFDeEIsNkJBQXdCOztJQUV4Qiw2QkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSEVSTy50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5jaG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkLWludGVyZmFjZXMnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgSGVyb0NvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IHRpdGxlIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSB0ZXh0IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpbnB1dCAob3B0aW9uYWwpXG4gKiAtIHBsYWNlaG9sZGVyIChvcHRpb25hbClcbiAqIC0gaWNvbiAob3B0aW9uYWwpXG4gKiAtIHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGJ1dHRvbiAob3B0aW9uYWwpXG4gKiAtIHRleHQgKG9wdGlvbmFsKVxuICogLSBhbmNob3IgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGltYWdlIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBiYWNrZ3JvdW5kSW1hZ2UgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBIZXJvRGF0YSB7XG4gIC8qKlxuICAgKiBtYWluIHRleHQgZGlzcGxheWVkIGluIHRoZSBoZXJvIHNlY3Rpb25cbiAgKi9cbiAgdGl0bGU6IHN0cmluZztcbiAgLyoqXG4gICogYWRkaXRpb25hbCB0ZXh0IHVuZGVyIHRoZSB0aXRsZVxuICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgKiBpbnB1dCBmaWVsZCAodXN1YWxseSBmb3Igc2VhcmNoKSBhbmQgaXQncyBwYXJhbWV0ZXJzXG4gICovXG4gIGlucHV0Pzoge1xuICAgIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgaWNvbjogc3RyaW5nO1xuICAgIHBheWxvYWQ6IGFueTtcbiAgfTtcbiAgLyoqXG4gICogY2FsbCB0byBhY3Rpb24gYnV0dG9uIGFuZCBpdCdzIHBhcmFtZXRlcnNcbiAgKi9cbiAgYnV0dG9uPzoge1xuICAgIHRleHQ6IHN0cmluZztcbiAgICBhbmNob3I/OiBBbmNob3I7XG4gIH07XG4gIC8qKlxuICAgKiBpbWFnZSBkaXNwbGF5ZWQgaW5zaWRlIHRoZSBoZXJvXG4gICAqL1xuICBpbWFnZT86IHN0cmluZztcbiAgLyoqXG4gICogYmFja2dyb3VuZCBpbWFnZSB0aGF0IGNvdmVycyB0aGUgZnVsbCBiYWNrZ3JvdW5kIGFyZWEgb2YgdGhlIGhlcm9cbiAgKi9cbiAgYmFja2dyb3VuZEltYWdlPzogc3RyaW5nO1xuICAvKipcbiAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICovXG4gIHBheWxvYWQ/OiBhbnk7XG4gIC8qKlxuICAqIGFkZGl0aW9uYWwgaW5mb1xuICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctaGVybycsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZXJvLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEhlcm9Db21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBIZXJvRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgZ2V0QmFja2dyb3VuZEltYWdlQ3NzVmFsdWUoYmFja2dyb3VuZEltYWdlKSB7XG4gICAgaWYgKGJhY2tncm91bmRJbWFnZSkge1xuICAgICAgcmV0dXJuIGB1cmwoJHtiYWNrZ3JvdW5kSW1hZ2V9KWA7XG4gICAgfVxuICAgIHJldHVybiAnbm9uZSc7XG4gIH1cblxuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG5cbiAgb25JbnB1dENoYW5nZShwYXlsb2FkLCB2YWx1ZSkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgaW5wdXRQYXlsb2FkOiBwYXlsb2FkLCB2YWx1ZSB9KTtcbiAgfVxuXG4gIG9uSW5wdXRFbnRlcihwYXlsb2FkLCB2YWx1ZSkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2VudGVyJywgeyBpbnB1dFBheWxvYWQ6IHBheWxvYWQsIHZhbHVlIH0pO1xuICB9XG59XG4iXX0=