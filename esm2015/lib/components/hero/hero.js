/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                template: "<section *ngIf=\"data\" class=\"n7-hero {{data.classes || ''}}\" \n        [ngClass]=\"{ 'has-image' : !!data.image, 'has-background-image': !!data.backgroundImage }\"\n        [ngStyle]=\"{'background-image': 'url(' + data.backgroundImage + ')'}\">\n    <div class=\"n7-hero__content\">\n        \n        <div class=\"n7-hero__text-wrapper\">\n            <h1 class=\"n7-hero__title\">\n                {{data.title}}\n            </h1>\n            <p class=\"n7-hero__text\" *ngIf=\"data.text\" [innerHTML]=\"data.text\"></p>\n            <div class=\"n7-hero__input-wrapper\" *ngIf=\"data.input || data.button\">\n                <input type=\"text\" \n                       class=\"n7-hero__input\" \n                       placeholder=\"{{data.input.placeholder || ''}}\" \n                       *ngIf=\"data.input\" \n                       (input)=\"onInputChange(data.input.payload, $event.target.value)\" \n                       (keyup.enter)=\"onInputEnter(data.input.payload, $event.target.value)\">\n                <span class=\"n7-hero__input-icon {{data.input.icon || ''}}\" \n                      *ngIf=\"data.input && data.input.icon\" \n                      (click)=\"onClick(data.input.payload)\"></span>\n                <button class=\"n7-hero__btn n7-btn n7-btn-cta n7-btn-l\" \n                        *ngIf=\"data.button\" \n                        (click)=\"onClick(data.button.payload)\">\n                    {{data.button.text}}\n                </button>\n            </div>\n        </div>\n        \n        <div class=\"n7-hero__image-wrapper\" *ngIf=\"data.image\">\n            <img class=\"n7-hero__image\" src=\"{{data.image}}\" alt=\"\">\n        </div>\n\n    </div>\n</section>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaGVyby9oZXJvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQmpELCtCQTRDQzs7Ozs7O0lBeENDLDBCQUFjOzs7OztJQUlkLHlCQUFjOzs7OztJQUlkLDBCQUlFOzs7OztJQUlGLDJCQUdFOzs7OztJQUlGLDBCQUFlOzs7OztJQUlmLG9DQUF5Qjs7Ozs7SUFJekIsNEJBQWlCOzs7OztJQUlqQiw0QkFBYzs7Ozs7SUFJZCwwQkFBWTs7QUFPZCxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFJeEIsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUVELGFBQWEsQ0FBQyxPQUFPLEVBQUUsS0FBSztRQUMxQixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsWUFBWSxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7OztJQUVELFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSztRQUN6QixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7OztZQXhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLHVzREFBMEI7YUFDM0I7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETiw2QkFBeUI7O0lBQ3pCLDZCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBIRVJPLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBIZXJvQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgdGl0bGUgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHRleHQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGlucHV0IChvcHRpb25hbClcbiAqIC0gcGxhY2Vob2xkZXIgKG9wdGlvbmFsKVxuICogLSBpY29uIChvcHRpb25hbClcbiAqIC0gcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgYnV0dG9uIChvcHRpb25hbClcbiAqIC0gdGV4dCAob3B0aW9uYWwpXG4gKiAtIHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGltYWdlIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBiYWNrZ3JvdW5kSW1hZ2UgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJSGVyb0RhdGEge1xuICAvKipcbiAgICogbWFpbiB0ZXh0IGRpc3BsYXllZCBpbiB0aGUgaGVybyBzZWN0aW9uXG4gICovXG4gIHRpdGxlOiBzdHJpbmc7XG4gIC8qKlxuICAqIGFkZGl0aW9uYWwgdGV4dCB1bmRlciB0aGUgdGl0bGVcbiAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICogaW5wdXQgZmllbGQgKHVzdWFsbHkgZm9yIHNlYXJjaCkgYW5kIGl0J3MgcGFyYW1ldGVyc1xuICAqL1xuICBpbnB1dD86IHtcbiAgICBwbGFjZWhvbGRlcjogc3RyaW5nLFxuICAgIGljb246IHN0cmluZyxcbiAgICBwYXlsb2FkOiBhbnlcbiAgfTtcbiAgLyoqXG4gICogY2FsbCB0byBhY3Rpb24gYnV0dG9uIGFuZCBpdCdzIHBhcmFtZXRlcnNcbiAgKi9cbiAgYnV0dG9uPzoge1xuICAgIHRleHQ6IHN0cmluZyxcbiAgICBwYXlsb2FkOiBhbnlcbiAgfTtcbiAgLyoqXG4gICAqIGltYWdlIGRpc3BsYXllZCBpbnNpZGUgdGhlIGhlcm9cbiAgICovXG4gIGltYWdlPzogc3RyaW5nO1xuICAvKipcbiAgKiBiYWNrZ3JvdW5kIGltYWdlIHRoYXQgY292ZXJzIHRoZSBmdWxsIGJhY2tncm91bmQgYXJlYSBvZiB0aGUgaGVyb1xuICAqL1xuICBiYWNrZ3JvdW5kSW1hZ2U/OiBzdHJpbmc7XG4gIC8qKlxuICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgKi9cbiAgcGF5bG9hZD86IGFueTtcbiAgLyoqXG4gICogYWRkaXRpb25hbCBpbmZvXG4gICovXG4gIF9tZXRhPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1oZXJvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlcm8uaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSGVyb0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElIZXJvRGF0YTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2xpY2socGF5bG9hZCl7XG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIFxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxuXG4gIG9uSW5wdXRDaGFuZ2UocGF5bG9hZCwgdmFsdWUpe1xuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICBcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgaW5wdXRQYXlsb2FkOnBheWxvYWQsIHZhbHVlIH0pO1xuICB9XG5cbiAgb25JbnB1dEVudGVyKHBheWxvYWQsIHZhbHVlKXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG4gICAgXG4gICAgdGhpcy5lbWl0KCdlbnRlcicsIHsgaW5wdXRQYXlsb2FkOnBheWxvYWQsIHZhbHVlIH0pO1xuICB9XG59Il19