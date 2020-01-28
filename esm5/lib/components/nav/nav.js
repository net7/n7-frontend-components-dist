/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "<nav class=\"n7-nav {{data.classes || ''}}\" *ngIf=\"data\">\n    <ul class=\"n7-nav__list\">\n        <li class=\"n7-nav__item {{ item.classes || '' }}\" *ngFor=\"let item of data.items\">\n            <n7-anchor-wrapper [data]=\"item.anchor\" [classes]=\"'n7-nav__link'\" (clicked)=\"onClick($event)\">\n                <span class=\"n7-nav__label\">{{ item.text }}</span>\n            </n7-anchor-wrapper>\n        </li>\n    </ul>\n</nav>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9uYXYvbmF2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztBQVdqRCw4QkFlQzs7Ozs7O0lBWEMsd0JBQWE7Ozs7O0lBS2IsMkJBQWlCOztJQUNqQiwwQkFBaUI7Ozs7O0lBSWpCLHlCQUFZOzs7Ozs7Ozs7OztBQVdkLDhCQWtCQzs7Ozs7O0lBZEMseUJBQWtCOzs7OztJQUtsQiwyQkFBaUI7Ozs7O0lBSWpCLDJCQUFjOzs7OztJQUlkLHlCQUFZOztBQUdkO0lBQUE7SUFZQSxDQUFDOzs7OztJQUpDLDhCQUFPOzs7O0lBQVAsVUFBUSxPQUFZO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBWEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxRQUFRO29CQUNsQixzY0FBeUI7aUJBQzFCOzs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLOztJQU1SLG1CQUFDO0NBQUEsQUFaRCxJQVlDO1NBUlksWUFBWTs7O0lBQ3ZCLDRCQUErQjs7SUFDL0IsNEJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGEgc2luZ2xlIG5hdmJhciBpdGVtXG4gKiBcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBsaW5rIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSU5hdkl0ZW0ge1xuICAvKipcbiAgICogdGV4dCBvZiBhIHNpbmdsZSBpdGVtIG9mIHRoZSBuYXZiYXIgKHRleHQgYW5kIHBheWxvYWQgYXJlIGNvbm5lY3RlZClcbiAgICovXG4gIHRleHQ6IHN0cmluZztcbiAgXG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgYW5jaG9yPzogSUFuY2hvcjtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciB0aGUgbmF2YmFyXG4gKiBcbiAqIEBwcm9wZXJ0eSBpdGVtcyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElOYXZEYXRhIHtcbiAgLyoqXG4gICAqIGxpc3Qgb2YgdGhlIGl0ZW1zIGluIHRoZSBuYXZiYXJcbiAgICovXG4gIGl0ZW1zOiBJTmF2SXRlbVtdO1xuICBcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LW5hdicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE5hdkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBkYXRhOiBJTmF2RGF0YTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2xpY2socGF5bG9hZDogYW55KSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cbn0iXX0=