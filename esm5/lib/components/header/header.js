/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/header/header.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
/**
 * Interface for a single action item
 *
 * \@property icon (required)
 * \@property badge (optional)
 * - text (optional)
 * \@property classes (optional)
 * \@property payload (required)
 * \@property _meta (optional)
 * @record
 */
export function IActionItem() { }
if (false) {
    /**
     * optional badge with, optionally, its text
     * @type {?|undefined}
     */
    IActionItem.prototype.badge;
    /**
     * icon class
     * @type {?}
     */
    IActionItem.prototype.icon;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    IActionItem.prototype.classes;
    /**
     * action click's payload
     * @type {?}
     */
    IActionItem.prototype.payload;
    /**
     * additional info
     * @type {?|undefined}
     */
    IActionItem.prototype._meta;
}
/**
 * Interface for a single navbar item
 *
 * note: a single nav's item can be a text (w/ link) OR a dropdown
 *
 * \@property icon (optional)
 * \@property subnav (optional)
 * \@property text (optional)
 * \@property classes (optional)
 * \@property payload (required)
 * \@property _meta (optional)
 * @record
 */
export function INavbarItem() { }
if (false) {
    /**
     * text of a single item of the navbar (text and payload are connected)
     * @type {?|undefined}
     */
    INavbarItem.prototype.text;
    /**
     * icon for a single item of the navbar (associated to "text")
     * @type {?|undefined}
     */
    INavbarItem.prototype.icon;
    /**
     * second level navigation
     * @type {?|undefined}
     */
    INavbarItem.prototype.subnav;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    INavbarItem.prototype.classes;
    /**
     * action click's payload
     * @type {?}
     */
    INavbarItem.prototype.payload;
    /**
     * additional info
     * @type {?|undefined}
     */
    INavbarItem.prototype._meta;
}
/**
 * Interface for HeaderComponent's "data"
 *
 * \@property logo (required)
 * - title (required)
 * - image (optional)
 * - subtitle (optional)
 * - classes (optional)
 * - payload (optional)
 * \@proprty menuToggle (required)
 * - open (required)
 * - - payload (required)
 * - closen (required)
 * - - payload (required)
 * \@property actions (optional)
 * \@property nav (optional)
 * - items (required)
 * - isBelow (optional)
 * - classes (optional)
 * - payload (optional)
 * - _meta (optional)
 * \@property search (optional)
 * - hint (optional)
 * - classes (optional)
 * - payload (optional)
 * - _meta (optional)
 * \@property user (optional)
 * - image (optional)
 * - name (optional)
 * - classes (optional)
 * - payload (optional)
 * - _meta (optional)
 * \@property classes (optional)
 * \@property payload (optional)
 * \@property _meta (optional)
 * @record
 */
export function IHeaderData() { }
if (false) {
    /**
     * logo and title area parameters
     * @type {?}
     */
    IHeaderData.prototype.logo;
    /**
     * nav's parameters
     * @type {?|undefined}
     */
    IHeaderData.prototype.nav;
    /**
     * search parameters
     * @type {?|undefined}
     */
    IHeaderData.prototype.search;
    /**
     * action items
     * @type {?|undefined}
     */
    IHeaderData.prototype.actions;
    /**
     * user parameters
     * @type {?|undefined}
     */
    IHeaderData.prototype.user;
    /**
     * menu toggle for mobile
     * @type {?}
     */
    IHeaderData.prototype.menuToggle;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    IHeaderData.prototype.classes;
    /**
     * action click's payload
     * @type {?|undefined}
     */
    IHeaderData.prototype.payload;
    /**
     * additional info
     * @type {?|undefined}
     */
    IHeaderData.prototype._meta;
}
/**
 * HeaderComponent <n7-header>
 *
 * \@structure
 *  >>  cpm = it has Classes, Payload, Metadata  <<
 *  >>  -p- = it has only Payload                <<
 *  >>  +-- = sub-member                         <<
 *  >>  +---> = array                            <<
 *
 *  data (cpm)
 *    +-- actions
 *          +---> action (cpm)
 *                  +-- badge
 *    +-- logo (cp-)
 *    +-- menuToggle
 *          +-- open (-p-)
 *          +-- close (-p-)
 *    +-- nav (cpm)
 *          +---> items
 *    +-- search (cpm)
 *    +-- user (cpm)
 *
 */
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    HeaderComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        // console.log(type, payload);
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    /**
     * @param {?} payload
     * @param {?} keyCode
     * @param {?} value
     * @return {?}
     */
    HeaderComponent.prototype.onKeyUp = /**
     * @param {?} payload
     * @param {?} keyCode
     * @param {?} value
     * @return {?}
     */
    function (payload, keyCode, value) {
        if (!this.emit)
            return;
        this.emit('keyup', { payload: payload, keyCode: keyCode, value: value });
    };
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-header',
                    template: "<header *ngIf=\"data\" class=\"n7-header {{data.classes || ''}}\">\r\n    \r\n    <!-- Logo and title -->\r\n    <div class=\"n7-header__logo-title {{data.logo.classes || ''}}\">\r\n        <a class=\"n7-header__logo-link\" (click)=\"onClick(data.logo.payload)\">\r\n            <img class=\"n7-header__logo\"\r\n                *ngIf=\"data.logo.image\"\r\n                [src]=\"data.logo.image\"\r\n                alt=\"{{ data.logo.title }}\" />\r\n            <div class=\"n7-header__title-subtitle\">\r\n                <h1 class=\"n7-header__title\">\r\n                    {{ data.logo.title }}\r\n                </h1>\r\n                <h2 class=\"n7-header__subtitle\" *ngIf=\"data.logo.subtitle\">\r\n                    {{ data.logo.subtitle }}\r\n                </h2>\r\n            </div>\r\n        </a>\r\n    </div>\r\n\r\n    <!-- Main menu -->\r\n    <nav class=\"n7-header__nav {{data.nav.classes || ''}}\" *ngIf=\"data.nav\">\r\n        <div class=\"n7-header__nav-content\">\r\n            <ul class=\"n7-header__nav-list\">\r\n                <li class=\"n7-header__nav-item {{item.classes || ''}}\" *ngFor=\"let item of data.nav.items\">\r\n                    <a class=\"n7-header__nav-link\" *ngIf=\"item.payload\" (click)=\"onClick(item.payload)\">\r\n                        <span class=\"n7-header__nav-icon {{item.icon}}\" *ngIf=\"item.icon\"></span>\r\n                        <span class=\"n7-header__nav-label\" *ngIf=\"item.text\">\r\n                            {{ item.text }}\r\n                        </span>\r\n                    </a>\r\n\r\n                    <!-- Sublevel -->\r\n                    <ul class=\"n7-header__subnav-list\" *ngIf=\"item.subnav\">\r\n                        <li class=\"n7-header__subnav-item {{subitem.classes || ''}}\" *ngFor=\"let subitem of item.subnav\">\r\n                            <a class=\"n7-header__subnav-link\" (click)=\"onClick(subitem.payload)\">\r\n                                <span class=\"n7-header__subnav-icon {{subitem.icon}}\" *ngIf=\"subitem.icon\"></span>\r\n                                <span class=\"n7-header__subnav-label\" *ngIf=\"subitem.text\">\r\n                                    {{ subitem.text }}\r\n                                </span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n\r\n    <!-- Mobile menu toggle -->\r\n    <div class=\"n7-header__mobile-menu-toggle\">\r\n        <span class=\"n7-header__mobile-menu-icon n7-icon-menu\" \r\n              (click)=\"onClick(data.menuToggle.open.payload)\"></span>\r\n    </div>\r\n\r\n    <!-- Mobile menu close -->\r\n    <span class=\"n7-header__mobile-menu-close n7-icon-close\" \r\n          (click)=\"onClick(data.menuToggle.close.payload)\"></span>\r\n\r\n    <!-- Tools: search, notifications, use profile or login/signup -->\r\n    <div class=\"n7-header__tools\">\r\n        \r\n        <div class=\"n7-header__search {{data.search.classes || ''}}\" *ngIf=\"data.search\">\r\n            <input class=\"n7-header__search-input\" \r\n                   type=\"search\" \r\n                   name=\"search\" \r\n                   placeholder=\"{{ data.search.hint || ''}}\" \r\n                   (keyup)=\"onKeyUp(data.search.payload, $event.keyCode, $event.target.value)\"/>\r\n            <button class=\"n7-header__search-btn\" type=\"submit\" (click)=\"onClick(data.search.payload)\">\r\n                <span class=\"n7-header__search-btn-label\">\r\n                    Search\r\n                </span>\r\n            </button>\r\n        </div>\r\n        \r\n        <div class=\"n7-header__actions\" *ngIf=\"data.actions\">\r\n            <div class=\"n7-header__action {{ action.classes || '' }}\" *ngFor=\"let action of data.actions\">\r\n                <span class=\"n7-header__action-icon {{ action.icon }}\" (click)=\"onClick(action.payload)\"></span>\r\n                <span class=\"n7-header__action-badge {{ action.badge.text ? 'has-text' : '' }}\" *ngIf=\"action.badge\">\r\n                    {{ action.badge.text }}\r\n                </span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"n7-header__user {{data.user.classes || ''}}\" *ngIf=\"data.user\">\r\n            <img class=\"n7-header__user-img\" \r\n                 *ngIf=\"data.user.img\" \r\n                 [src]=\"data.user.img\" \r\n                 (click)=\"onClick(data.user.payload)\"/>\r\n            <p class=\"n7-header__user-name\" *ngIf=\"data.user.name\">\r\n                <span class=\"n7-header__user-name-label\">\r\n                    {{ data.user.name }}\r\n                </span>\r\n            </p>\r\n        </div>\r\n    </div>\r\n\r\n</header>\r\n\r\n"
                }] }
    ];
    HeaderComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return HeaderComponent;
}());
export { HeaderComponent };
if (false) {
    /** @type {?} */
    HeaderComponent.prototype.data;
    /** @type {?} */
    HeaderComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQVlqRCxpQ0F1QkM7Ozs7OztJQW5CQyw0QkFFRTs7Ozs7SUFJRiwyQkFBYTs7Ozs7SUFJYiw4QkFBaUI7Ozs7O0lBSWpCLDhCQUFhOzs7OztJQUliLDRCQUFZOzs7Ozs7Ozs7Ozs7Ozs7QUFlZCxpQ0F5QkM7Ozs7OztJQXJCQywyQkFBYzs7Ozs7SUFJZCwyQkFBYzs7Ozs7SUFJZCw2QkFBdUI7Ozs7O0lBSXZCLDhCQUFpQjs7Ozs7SUFJakIsOEJBQWE7Ozs7O0lBSWIsNEJBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVDZCxpQ0E2R0M7Ozs7OztJQXpHQywyQkFNRTs7Ozs7SUFJRiwwQkFxQkU7Ozs7O0lBSUYsNkJBaUJFOzs7OztJQUlGLDhCQUF3Qjs7Ozs7SUFJeEIsMkJBcUJFOzs7OztJQUlGLGlDQU9FOzs7OztJQUlGLDhCQUFpQjs7Ozs7SUFJakIsOEJBQWM7Ozs7O0lBSWQsNEJBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQmQ7SUFBQTtJQStCQSxDQUFDOzs7OztJQVZDLGlDQUFPOzs7O0lBQVAsVUFBUSxPQUFZO1FBQ2xCLDhCQUE4QjtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7Ozs7SUFFRCxpQ0FBTzs7Ozs7O0lBQVAsVUFBUSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUs7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFDLE9BQU8sU0FBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLEtBQUssT0FBQSxFQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDOztnQkE5QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQix3dEpBQTRCO2lCQUM3Qjs7O3VCQWVFLEtBQUs7dUJBQ0wsS0FBSzs7SUFZUixzQkFBQztDQUFBLEFBL0JELElBK0JDO1NBM0JZLGVBQWU7OztJQWMxQiwrQkFBbUI7O0lBQ25CLCtCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGEgc2luZ2xlIGFjdGlvbiBpdGVtXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkgaWNvbiAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBiYWRnZSAob3B0aW9uYWwpXHJcbiAqIC0gdGV4dCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQWN0aW9uSXRlbSB7XHJcbiAgLyoqXHJcbiAgICogb3B0aW9uYWwgYmFkZ2Ugd2l0aCwgb3B0aW9uYWxseSwgaXRzIHRleHRcclxuICAgKi9cclxuICBiYWRnZT86IHtcclxuICAgICAgdGV4dD86IHN0cmluZztcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIGljb24gY2xhc3NcclxuICAgKi9cclxuICBpY29uOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcclxuICAgKi9cclxuICBwYXlsb2FkOiBhbnk7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGEgc2luZ2xlIG5hdmJhciBpdGVtXHJcbiAqIFxyXG4gKiBub3RlOiBhIHNpbmdsZSBuYXYncyBpdGVtIGNhbiBiZSBhIHRleHQgKHcvIGxpbmspIE9SIGEgZHJvcGRvd25cclxuICogXHJcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHN1Ym5hdiAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOYXZiYXJJdGVtIHtcclxuICAvKipcclxuICAgKiB0ZXh0IG9mIGEgc2luZ2xlIGl0ZW0gb2YgdGhlIG5hdmJhciAodGV4dCBhbmQgcGF5bG9hZCBhcmUgY29ubmVjdGVkKVxyXG4gICAqL1xyXG4gIHRleHQ/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogaWNvbiBmb3IgYSBzaW5nbGUgaXRlbSBvZiB0aGUgbmF2YmFyIChhc3NvY2lhdGVkIHRvIFwidGV4dFwiKVxyXG4gICAqL1xyXG4gIGljb24/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogc2Vjb25kIGxldmVsIG5hdmlnYXRpb25cclxuICAgKi9cclxuICBzdWJuYXY/OiBJTmF2YmFySXRlbVtdO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXHJcbiAgICovXHJcbiAgcGF5bG9hZDogYW55O1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xyXG4gICAqL1xyXG4gIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBIZWFkZXJDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKiBcclxuICogQHByb3BlcnR5IGxvZ28gKHJlcXVpcmVkKVxyXG4gKiAtIHRpdGxlIChyZXF1aXJlZClcclxuICogLSBpbWFnZSAob3B0aW9uYWwpXHJcbiAqIC0gc3VidGl0bGUgKG9wdGlvbmFsKVxyXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiAtIHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcHJ0eSBtZW51VG9nZ2xlIChyZXF1aXJlZClcclxuICogLSBvcGVuIChyZXF1aXJlZClcclxuICogLSAtIHBheWxvYWQgKHJlcXVpcmVkKVxyXG4gKiAtIGNsb3NlbiAocmVxdWlyZWQpXHJcbiAqIC0gLSBwYXlsb2FkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGFjdGlvbnMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgbmF2IChvcHRpb25hbClcclxuICogLSBpdGVtcyAocmVxdWlyZWQpXHJcbiAqIC0gaXNCZWxvdyAob3B0aW9uYWwpXHJcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIC0gcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIC0gX21ldGEgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgc2VhcmNoIChvcHRpb25hbClcclxuICogLSBoaW50IChvcHRpb25hbClcclxuICogLSBjbGFzc2VzIChvcHRpb25hbClcclxuICogLSBwYXlsb2FkIChvcHRpb25hbClcclxuICogLSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB1c2VyIChvcHRpb25hbClcclxuICogLSBpbWFnZSAob3B0aW9uYWwpXHJcbiAqIC0gbmFtZSAob3B0aW9uYWwpXHJcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIC0gcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIC0gX21ldGEgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUhlYWRlckRhdGEge1xyXG4gIC8qKlxyXG4gICAqIGxvZ28gYW5kIHRpdGxlIGFyZWEgcGFyYW1ldGVyc1xyXG4gICAqL1xyXG4gIGxvZ286IHtcclxuICAgIGltYWdlPzogc3RyaW5nLFxyXG4gICAgdGl0bGU6IHN0cmluZyxcclxuICAgIHN1YnRpdGxlPzogc3RyaW5nLFxyXG4gICAgY2xhc3Nlcz86IHN0cmluZyxcclxuICAgIHBheWxvYWQ/OiBhbnksXHJcbiAgfTtcclxuICAvKipcclxuICAgKiBuYXYncyBwYXJhbWV0ZXJzXHJcbiAgICovXHJcbiAgbmF2Pzoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBsaXN0IG9mIHRoZSBpdGVtcyBpbiB0aGUgbmF2YmFyXHJcbiAgICAgKi9cclxuICAgIGl0ZW1zOiBJTmF2YmFySXRlbVtdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBmbGFnIGZvciBkaXNwbGF5IHRoZSBuYXZiYXIgdW5kZXIgdGhlIGhlYWRlciAoaW5zdGVhZCBvZiBJTiB0aGUgaGVhZGVyKVxyXG4gICAgICovXHJcbiAgICBpc0JlbG93PzogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgICAqL1xyXG4gICAgY2xhc3Nlcz86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICAgICovXHJcbiAgICBwYXlsb2FkPzogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgICAqL1xyXG4gICAgX21ldGE/OiBhbnk7XHJcbiAgfTtcclxuICAvKipcclxuICAgKiBzZWFyY2ggcGFyYW1ldGVyc1xyXG4gICAqL1xyXG4gIHNlYXJjaD86IHtcclxuICAgIC8qKlxyXG4gICAgICogaGludCAodGV4dCBzaG93ZWQgaW4gdGhlIGlucHV0IGJveCB1bnRpbCBzb21ldGhpbmcgaXMgd3JpdGVkIGluIHRoZXJlKVxyXG4gICAgICovXHJcbiAgICBoaW50Pzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAgICovXHJcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXHJcbiAgICAgKi9cclxuICAgIHBheWxvYWQ/OiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaW5mb1xyXG4gICAgICovXHJcbiAgICBfbWV0YT86IGFueTtcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIGFjdGlvbiBpdGVtc1xyXG4gICAqL1xyXG4gIGFjdGlvbnM/OiBJQWN0aW9uSXRlbVtdO1xyXG4gIC8qKlxyXG4gICAqIHVzZXIgcGFyYW1ldGVyc1xyXG4gICAqL1xyXG4gIHVzZXI/OiB7XHJcbiAgICAvKipcclxuICAgICAqIHVzZXIncyBwcm9maWxlIHBpY3R1cmVcclxuICAgICAqL1xyXG4gICAgaW1nPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiB1c2VyJ3MgcHJvZmlsZSBuYW1lXHJcbiAgICAgKi9cclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICAgKi9cclxuICAgIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcclxuICAgICAqL1xyXG4gICAgcGF5bG9hZD86IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICAgKi9cclxuICAgIF9tZXRhPzogYW55O1xyXG4gIH07XHJcbiAgLyoqXHJcbiAgICogbWVudSB0b2dnbGUgZm9yIG1vYmlsZVxyXG4gICAqL1xyXG4gIG1lbnVUb2dnbGU6IHtcclxuICAgIG9wZW46IHtcclxuICAgICAgcGF5bG9hZDogYW55XHJcbiAgICB9LFxyXG4gICAgY2xvc2U6IHtcclxuICAgICAgcGF5bG9hZDogYW55XHJcbiAgICB9XHJcbiAgfTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICAqL1xyXG4gIHBheWxvYWQ/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBIZWFkZXJDb21wb25lbnQgPG43LWhlYWRlcj5cclxuICogXHJcbiAqIEBzdHJ1Y3R1cmVcclxuICogID4+ICBjcG0gPSBpdCBoYXMgQ2xhc3NlcywgUGF5bG9hZCwgTWV0YWRhdGEgIDw8XHJcbiAqICA+PiAgLXAtID0gaXQgaGFzIG9ubHkgUGF5bG9hZCAgICAgICAgICAgICAgICA8PFxyXG4gKiAgPj4gICstLSA9IHN1Yi1tZW1iZXIgICAgICAgICAgICAgICAgICAgICAgICAgPDxcclxuICogID4+ICArLS0tPiA9IGFycmF5ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw8XHJcbiAqXHJcbiAqICBkYXRhIChjcG0pXHJcbiAqICAgICstLSBhY3Rpb25zXHJcbiAqICAgICAgICAgICstLS0+IGFjdGlvbiAoY3BtKVxyXG4gKiAgICAgICAgICAgICAgICAgICstLSBiYWRnZVxyXG4gKiAgICArLS0gbG9nbyAoY3AtKVxyXG4gKiAgICArLS0gbWVudVRvZ2dsZVxyXG4gKiAgICAgICAgICArLS0gb3BlbiAoLXAtKVxyXG4gKiAgICAgICAgICArLS0gY2xvc2UgKC1wLSlcclxuICogICAgKy0tIG5hdiAoY3BtKVxyXG4gKiAgICAgICAgICArLS0tPiBpdGVtc1xyXG4gKiAgICArLS0gc2VhcmNoIChjcG0pXHJcbiAqICAgICstLSB1c2VyIChjcG0pXHJcbiAqICAgXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWhlYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcclxuICAvKlxyXG4gICAgPj4gICAgY3BtID0gaXQgaGFzIENsYXNzZXMsIFBheWxvYWQsIE1ldGFkYXRhICAgPDxcclxuICAgID4+ICAgIC1wLSA9IGl0IGhhcyBvbmx5IFBheWxvYWQgICAgICAgICAgICAgICAgIDw8XHJcblxyXG4gICAgZGF0YSAoY3BtKVxyXG4gICAgICArLS0tLSBwYXJhbXMgKGNwbSlcclxuICAgICAgKy0tLS0gbmF2IChjcG0pXHJcbiAgICAgICAgICAgICAgICArLS0tLSBpdGVtcyAoY3BtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICstLS0tIGRyb3Bkb3duRGF0YSAoY3BtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLS0tIGxpc3QgKC1wLSlcclxuICAgICAgKy0tLS0gc2VhcmNoIChjcG0pXHJcbiAgICAgICstLS0tIHVzZXIgKGNwbSlcclxuICAqL1xyXG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZDogYW55KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0eXBlLCBwYXlsb2FkKTtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgfVxyXG5cclxuICBvbktleVVwKHBheWxvYWQsIGtleUNvZGUsIHZhbHVlKXtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2tleXVwJywge3BheWxvYWQsIGtleUNvZGUsIHZhbHVlfSk7XHJcbiAgfVxyXG59Il19