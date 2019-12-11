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
var HeroComponent = /** @class */ (function () {
    function HeroComponent() {
    }
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
                    template: "<section *ngIf=\"data\" class=\"n7-hero {{data.classes || ''}}\" \n        [ngClass]=\"{ 'has-image' : !!data.image, 'has-background-image': !!data.backgroundImage }\"\n        [ngStyle]=\"{'background-image': 'url(' + data.backgroundImage + ')'}\">\n    <div class=\"n7-hero__content\">\n        \n        <div class=\"n7-hero__text-wrapper\">\n            <h1 class=\"n7-hero__title\">\n                {{data.title}}\n            </h1>\n            <p class=\"n7-hero__text\" *ngIf=\"data.text\" [innerHTML]=\"data.text\"></p>\n            <div class=\"n7-hero__input-wrapper\" *ngIf=\"data.input || data.button\">\n                <input type=\"text\" \n                       class=\"n7-hero__input\" \n                       placeholder=\"{{data.input.placeholder || ''}}\" \n                       *ngIf=\"data.input\" \n                       (input)=\"onInputChange(data.input.payload, $event.target.value)\" \n                       (keyup.enter)=\"onInputEnter(data.input.payload, $event.target.value)\">\n                <span class=\"n7-hero__input-icon {{data.input.icon || ''}}\" \n                      *ngIf=\"data.input && data.input.icon\" \n                      (click)=\"onClick(data.input.payload)\"></span>\n                <button class=\"n7-hero__btn n7-btn n7-btn-cta n7-btn-l\" \n                        *ngIf=\"data.button\" \n                        (click)=\"onClick(data.button.payload)\">\n                    {{data.button.text}}\n                </button>\n            </div>\n        </div>\n        \n        <div class=\"n7-hero__image-wrapper\" *ngIf=\"data.image\">\n            <img class=\"n7-hero__image\" src=\"{{data.image}}\" alt=\"\">\n        </div>\n\n    </div>\n</section>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaGVyby9oZXJvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JqRCwrQkE0Q0M7Ozs7OztJQXhDQywwQkFBYzs7Ozs7SUFJZCx5QkFBYzs7Ozs7SUFJZCwwQkFJRTs7Ozs7SUFJRiwyQkFHRTs7Ozs7SUFJRiwwQkFBZTs7Ozs7SUFJZixvQ0FBeUI7Ozs7O0lBSXpCLDRCQUFpQjs7Ozs7SUFJakIsNEJBQWM7Ozs7O0lBSWQsMEJBQVk7O0FBR2Q7SUFBQTtJQXlCQSxDQUFDOzs7OztJQWpCQywrQkFBTzs7OztJQUFQLFVBQVEsT0FBTztRQUNiLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBRUQscUNBQWE7Ozs7O0lBQWIsVUFBYyxPQUFPLEVBQUUsS0FBSztRQUMxQixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsWUFBWSxFQUFDLE9BQU8sRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Ozs7O0lBRUQsb0NBQVk7Ozs7O0lBQVosVUFBYSxPQUFPLEVBQUUsS0FBSztRQUN6QixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFDLE9BQU8sRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Z0JBeEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsdXNEQUEwQjtpQkFDM0I7Ozt1QkFFRSxLQUFLO3VCQUNMLEtBQUs7O0lBbUJSLG9CQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0FyQlksYUFBYTs7O0lBQ3hCLDZCQUF5Qjs7SUFDekIsNkJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEhFUk8udHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEhlcm9Db21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSB0aXRsZSAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgdGV4dCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaW5wdXQgKG9wdGlvbmFsKVxuICogLSBwbGFjZWhvbGRlciAob3B0aW9uYWwpXG4gKiAtIGljb24gKG9wdGlvbmFsKVxuICogLSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBidXR0b24gKG9wdGlvbmFsKVxuICogLSB0ZXh0IChvcHRpb25hbClcbiAqIC0gcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaW1hZ2UgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGJhY2tncm91bmRJbWFnZSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElIZXJvRGF0YSB7XG4gIC8qKlxuICAgKiBtYWluIHRleHQgZGlzcGxheWVkIGluIHRoZSBoZXJvIHNlY3Rpb25cbiAgKi9cbiAgdGl0bGU6IHN0cmluZztcbiAgLyoqXG4gICogYWRkaXRpb25hbCB0ZXh0IHVuZGVyIHRoZSB0aXRsZVxuICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgKiBpbnB1dCBmaWVsZCAodXN1YWxseSBmb3Igc2VhcmNoKSBhbmQgaXQncyBwYXJhbWV0ZXJzXG4gICovXG4gIGlucHV0Pzoge1xuICAgIHBsYWNlaG9sZGVyOiBzdHJpbmcsXG4gICAgaWNvbjogc3RyaW5nLFxuICAgIHBheWxvYWQ6IGFueVxuICB9O1xuICAvKipcbiAgKiBjYWxsIHRvIGFjdGlvbiBidXR0b24gYW5kIGl0J3MgcGFyYW1ldGVyc1xuICAqL1xuICBidXR0b24/OiB7XG4gICAgdGV4dDogc3RyaW5nLFxuICAgIHBheWxvYWQ6IGFueVxuICB9O1xuICAvKipcbiAgICogaW1hZ2UgZGlzcGxheWVkIGluc2lkZSB0aGUgaGVyb1xuICAgKi9cbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIC8qKlxuICAqIGJhY2tncm91bmQgaW1hZ2UgdGhhdCBjb3ZlcnMgdGhlIGZ1bGwgYmFja2dyb3VuZCBhcmVhIG9mIHRoZSBoZXJvXG4gICovXG4gIGJhY2tncm91bmRJbWFnZT86IHN0cmluZztcbiAgLyoqXG4gICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAqL1xuICBwYXlsb2FkPzogYW55O1xuICAvKipcbiAgKiBhZGRpdGlvbmFsIGluZm9cbiAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWhlcm8nLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVyby5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBIZXJvQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSUhlcm9EYXRhO1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DbGljayhwYXlsb2FkKXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG4gICAgXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG5cbiAgb25JbnB1dENoYW5nZShwYXlsb2FkLCB2YWx1ZSl7XG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIFxuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgeyBpbnB1dFBheWxvYWQ6cGF5bG9hZCwgdmFsdWUgfSk7XG4gIH1cblxuICBvbklucHV0RW50ZXIocGF5bG9hZCwgdmFsdWUpe1xuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICBcbiAgICB0aGlzLmVtaXQoJ2VudGVyJywgeyBpbnB1dFBheWxvYWQ6cGF5bG9hZCwgdmFsdWUgfSk7XG4gIH1cbn0iXX0=