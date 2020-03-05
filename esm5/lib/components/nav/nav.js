/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/nav/nav.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
/**
 * Interface for a single navbar item
 *
 * \@property text (required)
 * \@property classes (optional)
 * \@property link (optional)
 * \@property _meta (optional)
 * @record
 */
export function NavItem() { }
if (false) {
    /**
     * text of a single item of the navbar (text and payload are connected)
     * @type {?}
     */
    NavItem.prototype.text;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    NavItem.prototype.classes;
    /** @type {?|undefined} */
    NavItem.prototype.anchor;
    /**
     * additional info
     * @type {?|undefined}
     */
    NavItem.prototype._meta;
}
/**
 * Interface for the navbar
 *
 * \@property items (required)
 * \@property classes (optional)
 * \@property payload (optional)
 * \@property _meta (optional)
 * @record
 */
export function NavData() { }
if (false) {
    /**
     * list of the items in the navbar
     * @type {?}
     */
    NavData.prototype.items;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    NavData.prototype.classes;
    /**
     * action click's payload
     * @type {?|undefined}
     */
    NavData.prototype.payload;
    /**
     * additional info
     * @type {?|undefined}
     */
    NavData.prototype._meta;
}
var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    NavComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    NavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-nav',
                    template: "<nav class=\"n7-nav {{data.classes || ''}}\" *ngIf=\"data\">\r\n    <ul class=\"n7-nav__list\">\r\n        <li class=\"n7-nav__item {{ item.classes || '' }}\" *ngFor=\"let item of data.items\">\r\n            <n7-anchor-wrapper [data]=\"item.anchor\" [classes]=\"'n7-nav__link'\" (clicked)=\"onClick($event)\">\r\n                <span class=\"n7-nav__label\">{{ item.text }}</span>\r\n            </n7-anchor-wrapper>\r\n        </li>\r\n    </ul>\r\n</nav>"
                }] }
    ];
    NavComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return NavComponent;
}());
export { NavComponent };
if (false) {
    /** @type {?} */
    NavComponent.prototype.data;
    /** @type {?} */
    NavComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9uYXYvbmF2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7QUFXakQsNkJBZUM7Ozs7OztJQVhDLHVCQUFhOzs7OztJQUtiLDBCQUFpQjs7SUFDakIseUJBQWdCOzs7OztJQUloQix3QkFBWTs7Ozs7Ozs7Ozs7QUFXZCw2QkFrQkM7Ozs7OztJQWRDLHdCQUFpQjs7Ozs7SUFLakIsMEJBQWlCOzs7OztJQUlqQiwwQkFBYzs7Ozs7SUFJZCx3QkFBWTs7QUFHZDtJQUFBO0lBYUEsQ0FBQzs7Ozs7SUFKQyw4QkFBTzs7OztJQUFQLFVBQVEsT0FBWTtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQVpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsc2RBQXlCO2lCQUMxQjs7O3VCQUVFLEtBQUs7dUJBRUwsS0FBSzs7SUFNUixtQkFBQztDQUFBLEFBYkQsSUFhQztTQVRZLFlBQVk7OztJQUN2Qiw0QkFBOEI7O0lBRTlCLDRCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQW5jaG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkLWludGVyZmFjZXMnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgbmF2YmFyIGl0ZW1cclxuICpcclxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBsaW5rIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmF2SXRlbSB7XHJcbiAgLyoqXHJcbiAgICogdGV4dCBvZiBhIHNpbmdsZSBpdGVtIG9mIHRoZSBuYXZiYXIgKHRleHQgYW5kIHBheWxvYWQgYXJlIGNvbm5lY3RlZClcclxuICAgKi9cclxuICB0ZXh0OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICBhbmNob3I/OiBBbmNob3I7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIHRoZSBuYXZiYXJcclxuICpcclxuICogQHByb3BlcnR5IGl0ZW1zIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE5hdkRhdGEge1xyXG4gIC8qKlxyXG4gICAqIGxpc3Qgb2YgdGhlIGl0ZW1zIGluIHRoZSBuYXZiYXJcclxuICAgKi9cclxuICBpdGVtczogTmF2SXRlbVtdO1xyXG5cclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICAqL1xyXG4gIHBheWxvYWQ/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctbmF2JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbmF2Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBwdWJsaWMgZGF0YTogTmF2RGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBvbkNsaWNrKHBheWxvYWQ6IGFueSkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcbn1cclxuIl19