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
export class HeroComponent {
    /**
     * @param {?} backgroundImage
     * @return {?}
     */
    getBackgroundImageCssValue(backgroundImage) {
        if (backgroundImage) {
            return `url(${backgroundImage})`;
        }
        return 'none';
    }
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
                template: "<section *ngIf=\"data\" class=\"n7-hero {{data.classes || ''}}\" \r\n    [ngClass]=\"{ \r\n        'has-image' : !!data.image, \r\n        'has-background-image': !!data.backgroundImage \r\n    }\"\r\n    [ngStyle]=\"{ \r\n        'background-image': getBackgroundImageCssValue(data.backgroundImage)\r\n    }\">\r\n    <div class=\"n7-hero__content\">\r\n        \r\n        <div class=\"n7-hero__text-wrapper\">\r\n            <h1 class=\"n7-hero__title\">\r\n                {{data.title}}\r\n            </h1>\r\n            <p class=\"n7-hero__text\" *ngIf=\"data.text\" [innerHTML]=\"data.text\"></p>\r\n            <div class=\"n7-hero__input-wrapper\" *ngIf=\"data.input || data.button\">\r\n                <input type=\"text\" \r\n                       class=\"n7-hero__input\" \r\n                       placeholder=\"{{data.input.placeholder || ''}}\" \r\n                       *ngIf=\"data.input\" \r\n                       (input)=\"onInputChange(data.input.payload, $event.target.value)\" \r\n                       (keyup.enter)=\"onInputEnter(data.input.payload, $event.target.value)\">\r\n                <span class=\"n7-hero__input-icon {{data.input.icon || ''}}\" \r\n                      *ngIf=\"data.input && data.input.icon\" \r\n                      (click)=\"onClick(data.input.payload)\"></span>\r\n                <ng-container *ngIf=\"data.button\">\r\n                    <n7-anchor-wrapper [classes]=\"'n7-hero__btn n7-btn n7-btn-cta n7-btn-l'\"\r\n                    [data]=\"data.button.anchor\"\r\n                    (clicked)=\"onClick($event)\">\r\n                        {{data.button.text}}\r\n                    </n7-anchor-wrapper>\r\n                </ng-container>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"n7-hero__image-wrapper\" *ngIf=\"data.image\">\r\n            <img class=\"n7-hero__image\" src=\"{{data.image}}\" alt=\"\">\r\n        </div>\r\n\r\n    </div>\r\n</section>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaGVyby9oZXJvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJqRCw4QkE0Q0M7Ozs7OztJQXhDQyx5QkFBYzs7Ozs7SUFJZCx3QkFBYzs7Ozs7SUFJZCx5QkFJRTs7Ozs7SUFJRiwwQkFHRTs7Ozs7SUFJRix5QkFBZTs7Ozs7SUFJZixtQ0FBeUI7Ozs7O0lBSXpCLDJCQUFpQjs7Ozs7SUFJakIsMkJBQWM7Ozs7O0lBSWQseUJBQVk7O0FBT2QsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBS3hCLDBCQUEwQixDQUFDLGVBQWU7UUFDeEMsSUFBSSxlQUFlLEVBQUU7WUFDbkIsT0FBTyxPQUFPLGVBQWUsR0FBRyxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBRUQsYUFBYSxDQUFDLE9BQU8sRUFBRSxLQUFLO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7O0lBRUQsWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7O1lBaENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIseTdEQUEwQjthQUMzQjs7O21CQUVFLEtBQUs7bUJBRUwsS0FBSzs7OztJQUZOLDZCQUF3Qjs7SUFFeEIsNkJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gSEVSTy50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBIZXJvQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IHRpdGxlIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHRleHQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaW5wdXQgKG9wdGlvbmFsKVxyXG4gKiAtIHBsYWNlaG9sZGVyIChvcHRpb25hbClcclxuICogLSBpY29uIChvcHRpb25hbClcclxuICogLSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGJ1dHRvbiAob3B0aW9uYWwpXHJcbiAqIC0gdGV4dCAob3B0aW9uYWwpXHJcbiAqIC0gYW5jaG9yIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGltYWdlIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGJhY2tncm91bmRJbWFnZSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBIZXJvRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogbWFpbiB0ZXh0IGRpc3BsYXllZCBpbiB0aGUgaGVybyBzZWN0aW9uXHJcbiAgKi9cclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICogYWRkaXRpb25hbCB0ZXh0IHVuZGVyIHRoZSB0aXRsZVxyXG4gICovXHJcbiAgdGV4dD86IHN0cmluZztcclxuICAvKipcclxuICAqIGlucHV0IGZpZWxkICh1c3VhbGx5IGZvciBzZWFyY2gpIGFuZCBpdCdzIHBhcmFtZXRlcnNcclxuICAqL1xyXG4gIGlucHV0Pzoge1xyXG4gICAgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICAgIGljb246IHN0cmluZztcclxuICAgIHBheWxvYWQ6IGFueTtcclxuICB9O1xyXG4gIC8qKlxyXG4gICogY2FsbCB0byBhY3Rpb24gYnV0dG9uIGFuZCBpdCdzIHBhcmFtZXRlcnNcclxuICAqL1xyXG4gIGJ1dHRvbj86IHtcclxuICAgIHRleHQ6IHN0cmluZztcclxuICAgIGFuY2hvcj86IEFuY2hvcjtcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIGltYWdlIGRpc3BsYXllZCBpbnNpZGUgdGhlIGhlcm9cclxuICAgKi9cclxuICBpbWFnZT86IHN0cmluZztcclxuICAvKipcclxuICAqIGJhY2tncm91bmQgaW1hZ2UgdGhhdCBjb3ZlcnMgdGhlIGZ1bGwgYmFja2dyb3VuZCBhcmVhIG9mIHRoZSBoZXJvXHJcbiAgKi9cclxuICBiYWNrZ3JvdW5kSW1hZ2U/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICovXHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICAvKipcclxuICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcclxuICAqL1xyXG4gIHBheWxvYWQ/OiBhbnk7XHJcbiAgLyoqXHJcbiAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAqL1xyXG4gIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWhlcm8nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9oZXJvLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZXJvQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBIZXJvRGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBnZXRCYWNrZ3JvdW5kSW1hZ2VDc3NWYWx1ZShiYWNrZ3JvdW5kSW1hZ2UpIHtcclxuICAgIGlmIChiYWNrZ3JvdW5kSW1hZ2UpIHtcclxuICAgICAgcmV0dXJuIGB1cmwoJHtiYWNrZ3JvdW5kSW1hZ2V9KWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJ25vbmUnO1xyXG4gIH1cclxuXHJcbiAgb25DbGljayhwYXlsb2FkKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIG9uSW5wdXRDaGFuZ2UocGF5bG9hZCwgdmFsdWUpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7IGlucHV0UGF5bG9hZDogcGF5bG9hZCwgdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBvbklucHV0RW50ZXIocGF5bG9hZCwgdmFsdWUpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5lbWl0KCdlbnRlcicsIHsgaW5wdXRQYXlsb2FkOiBwYXlsb2FkLCB2YWx1ZSB9KTtcclxuICB9XHJcbn1cclxuIl19