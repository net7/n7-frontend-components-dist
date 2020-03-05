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
export class NavComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
}
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
if (false) {
    /** @type {?} */
    NavComponent.prototype.data;
    /** @type {?} */
    NavComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9uYXYvbmF2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7QUFXakQsNkJBZUM7Ozs7OztJQVhDLHVCQUFhOzs7OztJQUtiLDBCQUFpQjs7SUFDakIseUJBQWdCOzs7OztJQUloQix3QkFBWTs7Ozs7Ozs7Ozs7QUFXZCw2QkFrQkM7Ozs7OztJQWRDLHdCQUFpQjs7Ozs7SUFLakIsMEJBQWlCOzs7OztJQUlqQiwwQkFBYzs7Ozs7SUFJZCx3QkFBWTs7QUFPZCxNQUFNLE9BQU8sWUFBWTs7Ozs7SUFLdkIsT0FBTyxDQUFDLE9BQVk7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUFaRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLHNkQUF5QjthQUMxQjs7O21CQUVFLEtBQUs7bUJBRUwsS0FBSzs7OztJQUZOLDRCQUE4Qjs7SUFFOUIsNEJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBhIHNpbmdsZSBuYXZiYXIgaXRlbVxyXG4gKlxyXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGxpbmsgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBOYXZJdGVtIHtcclxuICAvKipcclxuICAgKiB0ZXh0IG9mIGEgc2luZ2xlIGl0ZW0gb2YgdGhlIG5hdmJhciAodGV4dCBhbmQgcGF5bG9hZCBhcmUgY29ubmVjdGVkKVxyXG4gICAqL1xyXG4gIHRleHQ6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gIGFuY2hvcj86IEFuY2hvcjtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgdGhlIG5hdmJhclxyXG4gKlxyXG4gKiBAcHJvcGVydHkgaXRlbXMgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmF2RGF0YSB7XHJcbiAgLyoqXHJcbiAgICogbGlzdCBvZiB0aGUgaXRlbXMgaW4gdGhlIG5hdmJhclxyXG4gICAqL1xyXG4gIGl0ZW1zOiBOYXZJdGVtW107XHJcblxyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXHJcbiAgICovXHJcbiAgcGF5bG9hZD86IGFueTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1uYXYnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBkYXRhOiBOYXZEYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZDogYW55KSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxufVxyXG4iXX0=