/**
 * @fileoverview added by tsickle
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
 * - payload (optional)
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
export class HeroComponent {
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
        this.emit('enter', { inputPayload: payload, value });
    }
}
HeroComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-hero',
                template: "<section *ngIf=\"data\" class=\"n7-hero {{data.classes || ''}}\" \r\n        [ngClass]=\"{ 'has-image' : !!data.image, 'has-background-image': !!data.backgroundImage }\"\r\n        [ngStyle]=\"{'background-image': 'url(' + data.backgroundImage + ')'}\">\r\n    <div class=\"n7-hero__content\">\r\n        \r\n        <div class=\"n7-hero__text-wrapper\">\r\n            <h1 class=\"n7-hero__title\">\r\n                {{data.title}}\r\n            </h1>\r\n            <p class=\"n7-hero__text\" *ngIf=\"data.text\" [innerHTML]=\"data.text\"></p>\r\n            <div class=\"n7-hero__input-wrapper\" *ngIf=\"data.input || data.button\">\r\n                <input type=\"text\" \r\n                       class=\"n7-hero__input\" \r\n                       placeholder=\"{{data.input.placeholder || ''}}\" \r\n                       *ngIf=\"data.input\" \r\n                       (input)=\"onInputChange(data.input.payload, $event.target.value)\" \r\n                       (keyup.enter)=\"onInputEnter(data.input.payload, $event.target.value)\">\r\n                <span class=\"n7-hero__input-icon {{data.input.icon || ''}}\" \r\n                      *ngIf=\"data.input && data.input.icon\" \r\n                      (click)=\"onClick(data.input.payload)\"></span>\r\n                <button class=\"n7-hero__btn n7-btn n7-btn-cta n7-btn-l\" \r\n                        *ngIf=\"data.button\" \r\n                        (click)=\"onClick(data.button.payload)\">\r\n                    {{data.button.text}}\r\n                </button>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"n7-hero__image-wrapper\" *ngIf=\"data.image\">\r\n            <img class=\"n7-hero__image\" src=\"{{data.image}}\" alt=\"\">\r\n        </div>\r\n\r\n    </div>\r\n</section>"
            }] }
];
HeroComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    HeroComponent.prototype.data;
    /** @type {?} */
    HeroComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaGVyby9oZXJvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQmpELCtCQTRDQzs7Ozs7O0lBeENDLDBCQUFjOzs7OztJQUlkLHlCQUFjOzs7OztJQUlkLDBCQUlFOzs7OztJQUlGLDJCQUdFOzs7OztJQUlGLDBCQUFlOzs7OztJQUlmLG9DQUF5Qjs7Ozs7SUFJekIsNEJBQWlCOzs7OztJQUlqQiw0QkFBYzs7Ozs7SUFJZCwwQkFBWTs7QUFPZCxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFJeEIsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUVELGFBQWEsQ0FBQyxPQUFPLEVBQUUsS0FBSztRQUMxQixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsWUFBWSxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7OztJQUVELFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSztRQUN6QixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7OztZQXhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLHl3REFBMEI7YUFDM0I7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETiw2QkFBeUI7O0lBQ3pCLDZCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEhFUk8udHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEhlcm9Db21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgdGl0bGUgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgdGV4dCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpbnB1dCAob3B0aW9uYWwpXHJcbiAqIC0gcGxhY2Vob2xkZXIgKG9wdGlvbmFsKVxyXG4gKiAtIGljb24gKG9wdGlvbmFsKVxyXG4gKiAtIHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgYnV0dG9uIChvcHRpb25hbClcclxuICogLSB0ZXh0IChvcHRpb25hbClcclxuICogLSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGltYWdlIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGJhY2tncm91bmRJbWFnZSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJSGVyb0RhdGEge1xyXG4gIC8qKlxyXG4gICAqIG1haW4gdGV4dCBkaXNwbGF5ZWQgaW4gdGhlIGhlcm8gc2VjdGlvblxyXG4gICovXHJcbiAgdGl0bGU6IHN0cmluZztcclxuICAvKipcclxuICAqIGFkZGl0aW9uYWwgdGV4dCB1bmRlciB0aGUgdGl0bGVcclxuICAqL1xyXG4gIHRleHQ/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgKiBpbnB1dCBmaWVsZCAodXN1YWxseSBmb3Igc2VhcmNoKSBhbmQgaXQncyBwYXJhbWV0ZXJzXHJcbiAgKi9cclxuICBpbnB1dD86IHtcclxuICAgIHBsYWNlaG9sZGVyOiBzdHJpbmcsXHJcbiAgICBpY29uOiBzdHJpbmcsXHJcbiAgICBwYXlsb2FkOiBhbnlcclxuICB9O1xyXG4gIC8qKlxyXG4gICogY2FsbCB0byBhY3Rpb24gYnV0dG9uIGFuZCBpdCdzIHBhcmFtZXRlcnNcclxuICAqL1xyXG4gIGJ1dHRvbj86IHtcclxuICAgIHRleHQ6IHN0cmluZyxcclxuICAgIHBheWxvYWQ6IGFueVxyXG4gIH07XHJcbiAgLyoqXHJcbiAgICogaW1hZ2UgZGlzcGxheWVkIGluc2lkZSB0aGUgaGVyb1xyXG4gICAqL1xyXG4gIGltYWdlPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICogYmFja2dyb3VuZCBpbWFnZSB0aGF0IGNvdmVycyB0aGUgZnVsbCBiYWNrZ3JvdW5kIGFyZWEgb2YgdGhlIGhlcm9cclxuICAqL1xyXG4gIGJhY2tncm91bmRJbWFnZT86IHN0cmluZztcclxuICAvKipcclxuICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICovXHJcbiAgcGF5bG9hZD86IGFueTtcclxuICAvKipcclxuICAqIGFkZGl0aW9uYWwgaW5mb1xyXG4gICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctaGVybycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2hlcm8uaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEhlcm9Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IElIZXJvRGF0YTtcclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZCl7XHJcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICBcclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIG9uSW5wdXRDaGFuZ2UocGF5bG9hZCwgdmFsdWUpe1xyXG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgaW5wdXRQYXlsb2FkOnBheWxvYWQsIHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgb25JbnB1dEVudGVyKHBheWxvYWQsIHZhbHVlKXtcclxuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIFxyXG4gICAgdGhpcy5lbWl0KCdlbnRlcicsIHsgaW5wdXRQYXlsb2FkOnBheWxvYWQsIHZhbHVlIH0pO1xyXG4gIH1cclxufSJdfQ==