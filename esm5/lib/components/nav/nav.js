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
                    template: "<nav class=\"n7-nav {{data.classes || ''}}\" *ngIf=\"data\">\n    <ul class=\"n7-nav__list\">\n        <li class=\"n7-nav__item {{X.classes || ''}}\" *ngFor=\"let X of data.items\">\n            <a class=\"n7-nav__link\" *ngIf=\"X.payload\" (click)=\"onClick(X.payload)\">\n                <span class=\"n7-nav__label\" *ngIf=\"X.text\">\n                    {{ X.text }}\n                </span>\n            </a>\n        </li>\n    </ul>\n</nav>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9uYXYvbmF2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztBQVVqRCw4QkFrQkM7Ozs7OztJQWRDLHdCQUFhOzs7OztJQUtiLDJCQUFpQjs7Ozs7SUFJakIsMkJBQWE7Ozs7O0lBSWIseUJBQVk7Ozs7Ozs7Ozs7O0FBV2QsOEJBa0JDOzs7Ozs7SUFkQyx5QkFBa0I7Ozs7O0lBS2xCLDJCQUFpQjs7Ozs7SUFJakIsMkJBQWM7Ozs7O0lBSWQseUJBQVk7O0FBSWQ7SUFBQTtJQVlBLENBQUM7Ozs7O0lBSkMsOEJBQU87Ozs7SUFBUCxVQUFRLE9BQVk7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkFYRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLDRjQUF5QjtpQkFDMUI7Ozt1QkFFRSxLQUFLO3VCQUNMLEtBQUs7O0lBTVIsbUJBQUM7Q0FBQSxBQVpELElBWUM7U0FSWSxZQUFZOzs7SUFDdkIsNEJBQStCOztJQUMvQiw0QkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBhIHNpbmdsZSBuYXZiYXIgaXRlbVxuICogXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElOYXZJdGVtIHtcbiAgLyoqXG4gICAqIHRleHQgb2YgYSBzaW5nbGUgaXRlbSBvZiB0aGUgbmF2YmFyICh0ZXh0IGFuZCBwYXlsb2FkIGFyZSBjb25uZWN0ZWQpXG4gICAqL1xuICB0ZXh0OiBzdHJpbmc7XG4gIFxuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAqL1xuICBwYXlsb2FkOiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgdGhlIG5hdmJhclxuICogXG4gKiBAcHJvcGVydHkgaXRlbXMgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJTmF2RGF0YSB7XG4gIC8qKlxuICAgKiBsaXN0IG9mIHRoZSBpdGVtcyBpbiB0aGUgbmF2YmFyXG4gICAqL1xuICBpdGVtczogSU5hdkl0ZW1bXTtcbiAgXG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgICovXG4gIHBheWxvYWQ/OiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LW5hdicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE5hdkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBkYXRhOiBJTmF2RGF0YTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2xpY2socGF5bG9hZDogYW55KSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cbn0iXX0=