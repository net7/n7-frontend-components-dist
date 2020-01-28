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
 * \@property payload (required)
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
    /**
     * action click's payload
     * @type {?}
     */
    INavItem.prototype.payload;
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
                    template: "<nav class=\"n7-nav {{data.classes || ''}}\" *ngIf=\"data\">\r\n    <ul class=\"n7-nav__list\">\r\n        <li class=\"n7-nav__item {{X.classes || ''}}\" *ngFor=\"let X of data.items\">\r\n            <a class=\"n7-nav__link\" *ngIf=\"X.payload\" (click)=\"onClick(X.payload)\">\r\n                <span class=\"n7-nav__label\" *ngIf=\"X.text\">\r\n                    {{ X.text }}\r\n                </span>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</nav>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9uYXYvbmF2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7QUFVakQsOEJBa0JDOzs7Ozs7SUFkQyx3QkFBYTs7Ozs7SUFLYiwyQkFBaUI7Ozs7O0lBSWpCLDJCQUFhOzs7OztJQUliLHlCQUFZOzs7Ozs7Ozs7OztBQVdkLDhCQWtCQzs7Ozs7O0lBZEMseUJBQWtCOzs7OztJQUtsQiwyQkFBaUI7Ozs7O0lBSWpCLDJCQUFjOzs7OztJQUlkLHlCQUFZOztBQUdkO0lBQUE7SUFZQSxDQUFDOzs7OztJQUpDLDhCQUFPOzs7O0lBQVAsVUFBUSxPQUFZO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBWEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxRQUFRO29CQUNsQixnZUFBeUI7aUJBQzFCOzs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLOztJQU1SLG1CQUFDO0NBQUEsQUFaRCxJQVlDO1NBUlksWUFBWTs7O0lBQ3ZCLDRCQUErQjs7SUFDL0IsNEJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgbmF2YmFyIGl0ZW1cclxuICogXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOYXZJdGVtIHtcclxuICAvKipcclxuICAgKiB0ZXh0IG9mIGEgc2luZ2xlIGl0ZW0gb2YgdGhlIG5hdmJhciAodGV4dCBhbmQgcGF5bG9hZCBhcmUgY29ubmVjdGVkKVxyXG4gICAqL1xyXG4gIHRleHQ6IHN0cmluZztcclxuICBcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICAqL1xyXG4gIHBheWxvYWQ6IGFueTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgdGhlIG5hdmJhclxyXG4gKiBcclxuICogQHByb3BlcnR5IGl0ZW1zIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOYXZEYXRhIHtcclxuICAvKipcclxuICAgKiBsaXN0IG9mIHRoZSBpdGVtcyBpbiB0aGUgbmF2YmFyXHJcbiAgICovXHJcbiAgaXRlbXM6IElOYXZJdGVtW107XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcclxuICAgKi9cclxuICBwYXlsb2FkPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xyXG4gICAqL1xyXG4gIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LW5hdicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25hdi5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdkNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgcHVibGljIGRhdGE6IElOYXZEYXRhO1xyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgb25DbGljayhwYXlsb2FkOiBhbnkpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgfVxyXG59Il19