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
export function INavItem() { }
if (false) {
    /**
     * text of a single item of the navbar (text and payload are connected)
     * @type {?}
     */
    INavItem.prototype.text;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    INavItem.prototype.classes;
    /** @type {?|undefined} */
    INavItem.prototype.anchor;
    /**
     * additional info
     * @type {?|undefined}
     */
    INavItem.prototype._meta;
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
export function INavData() { }
if (false) {
    /**
     * list of the items in the navbar
     * @type {?}
     */
    INavData.prototype.items;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    INavData.prototype.classes;
    /**
     * action click's payload
     * @type {?|undefined}
     */
    INavData.prototype.payload;
    /**
     * additional info
     * @type {?|undefined}
     */
    INavData.prototype._meta;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9uYXYvbmF2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7QUFXakQsOEJBZUM7Ozs7OztJQVhDLHdCQUFhOzs7OztJQUtiLDJCQUFpQjs7SUFDakIsMEJBQWlCOzs7OztJQUlqQix5QkFBWTs7Ozs7Ozs7Ozs7QUFXZCw4QkFrQkM7Ozs7OztJQWRDLHlCQUFrQjs7Ozs7SUFLbEIsMkJBQWlCOzs7OztJQUlqQiwyQkFBYzs7Ozs7SUFJZCx5QkFBWTs7QUFHZDtJQUFBO0lBWUEsQ0FBQzs7Ozs7SUFKQyw4QkFBTzs7OztJQUFQLFVBQVEsT0FBWTtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQVhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsc2RBQXlCO2lCQUMxQjs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUFNUixtQkFBQztDQUFBLEFBWkQsSUFZQztTQVJZLFlBQVk7OztJQUN2Qiw0QkFBK0I7O0lBQy9CLDRCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGEgc2luZ2xlIG5hdmJhciBpdGVtXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGxpbmsgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTmF2SXRlbSB7XHJcbiAgLyoqXHJcbiAgICogdGV4dCBvZiBhIHNpbmdsZSBpdGVtIG9mIHRoZSBuYXZiYXIgKHRleHQgYW5kIHBheWxvYWQgYXJlIGNvbm5lY3RlZClcclxuICAgKi9cclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gIGFuY2hvcj86IElBbmNob3I7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIHRoZSBuYXZiYXJcclxuICogXHJcbiAqIEBwcm9wZXJ0eSBpdGVtcyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTmF2RGF0YSB7XHJcbiAgLyoqXHJcbiAgICogbGlzdCBvZiB0aGUgaXRlbXMgaW4gdGhlIG5hdmJhclxyXG4gICAqL1xyXG4gIGl0ZW1zOiBJTmF2SXRlbVtdO1xyXG4gIFxyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXHJcbiAgICovXHJcbiAgcGF5bG9hZD86IGFueTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1uYXYnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBkYXRhOiBJTmF2RGF0YTtcclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZDogYW55KSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxufSJdfQ==