/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.emit('keyUp', { payload: payload, keyCode: keyCode, value: value });
    };
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-header',
                    template: "<header *ngIf=\"data\" class=\"n7-header {{data.classes || ''}}\">\n    \n    <!-- Logo and title -->\n    <div class=\"n7-header__logo-title {{data.logo.classes || ''}}\">\n        <a class=\"n7-header__logo-link\" (click)=\"onClick(data.logo.payload)\">\n            <img class=\"n7-header__logo\"\n                *ngIf=\"data.logo.image\"\n                [src]=\"data.logo.image\"\n                alt=\"{{ data.logo.title }}\" />\n            <div class=\"n7-header__title-subtitle\">\n                <h1 class=\"n7-header__title\">\n                    {{ data.logo.title }}\n                </h1>\n                <h2 class=\"n7-header__subtitle\" *ngIf=\"data.logo.subtitle\">\n                    {{ data.logo.subtitle }}\n                </h2>\n            </div>\n        </a>\n    </div>\n\n    <!-- Main menu -->\n    <nav class=\"n7-header__nav {{data.nav.classes || ''}}\" *ngIf=\"data.nav\">\n        <div class=\"n7-header__nav-content\">\n            <ul class=\"n7-header__nav-list\">\n                <li class=\"n7-header__nav-item {{item.classes || ''}}\" *ngFor=\"let item of data.nav.items\">\n                    <a class=\"n7-header__nav-link\" *ngIf=\"item.payload\" (click)=\"onClick(item.payload)\">\n                        <span class=\"n7-header__nav-icon {{item.icon}}\" *ngIf=\"item.icon\"></span>\n                        <span class=\"n7-header__nav-label\" *ngIf=\"item.text\">\n                            {{ item.text }}\n                        </span>\n                    </a>\n\n                    <!-- Sublevel -->\n                    <ul class=\"n7-header__subnav-list\" *ngIf=\"item.subnav\">\n                        <li class=\"n7-header__subnav-item {{subitem.classes || ''}}\" *ngFor=\"let subitem of item.subnav\">\n                            <a class=\"n7-header__subnav-link\" (click)=\"onClick(subitem.payload)\">\n                                <span class=\"n7-header__subnav-icon {{subitem.icon}}\" *ngIf=\"subitem.icon\"></span>\n                                <span class=\"n7-header__subnav-label\" *ngIf=\"subitem.text\">\n                                    {{ subitem.text }}\n                                </span>\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n    </nav>\n\n    <!-- Mobile menu toggle -->\n    <div class=\"n7-header__mobile-menu-toggle\">\n        <span class=\"n7-header__mobile-menu-icon n7-icon-menu\" \n              (click)=\"onClick(data.menuToggle.open.payload)\"></span>\n    </div>\n\n    <!-- Mobile menu close -->\n    <span class=\"n7-header__mobile-menu-close n7-icon-close\" \n          (click)=\"onClick(data.menuToggle.close.payload)\"></span>\n\n    <!-- Tools: search, notifications, use profile or login/signup -->\n    <div class=\"n7-header__tools\">\n        \n        <div class=\"n7-header__search {{data.search.classes || ''}}\" *ngIf=\"data.search\">\n            <input class=\"n7-header__search-input\" \n                   type=\"search\" \n                   name=\"search\" \n                   placeholder=\"{{ data.search.hint || ''}}\" \n                   (keyup)=\"onKeyUp(data.search.payload, $event.keyCode, $event.target.value)\"/>\n            <button class=\"n7-header__search-btn\" type=\"submit\" (click)=\"onClick(data.search.payload)\">\n                <span class=\"n7-header__search-btn-label\">\n                    Search\n                </span>\n            </button>\n        </div>\n        \n        <div class=\"n7-header__actions\" *ngIf=\"data.actions\">\n            <div class=\"n7-header__action {{ action.classes || '' }}\" *ngFor=\"let action of data.actions\">\n                <span class=\"n7-header__action-icon {{ action.icon }}\" (click)=\"onClick(action.payload)\"></span>\n                <span class=\"n7-header__action-badge {{ action.badge.text ? 'has-text' : '' }}\" *ngIf=\"action.badge\">\n                    {{ action.badge.text }}\n                </span>\n            </div>\n        </div>\n\n        <div class=\"n7-header__user {{data.user.classes || ''}}\" *ngIf=\"data.user\">\n            <img class=\"n7-header__user-img\" \n                 *ngIf=\"data.user.img\" \n                 [src]=\"data.user.img\" \n                 (click)=\"onClick(data.user.payload)\"/>\n            <p class=\"n7-header__user-name\" *ngIf=\"data.user.name\">\n                <span class=\"n7-header__user-name-label\">\n                    {{ data.user.name }}\n                </span>\n            </p>\n        </div>\n    </div>\n\n</header>\n\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0FBWWpELGlDQXVCQzs7Ozs7O0lBbkJDLDRCQUVFOzs7OztJQUlGLDJCQUFhOzs7OztJQUliLDhCQUFpQjs7Ozs7SUFJakIsOEJBQWE7Ozs7O0lBSWIsNEJBQVk7Ozs7Ozs7Ozs7Ozs7OztBQWVkLGlDQXlCQzs7Ozs7O0lBckJDLDJCQUFjOzs7OztJQUlkLDJCQUFjOzs7OztJQUlkLDZCQUF1Qjs7Ozs7SUFJdkIsOEJBQWlCOzs7OztJQUlqQiw4QkFBYTs7Ozs7SUFJYiw0QkFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUNkLGlDQTZHQzs7Ozs7O0lBekdDLDJCQU1FOzs7OztJQUlGLDBCQXFCRTs7Ozs7SUFJRiw2QkFpQkU7Ozs7O0lBSUYsOEJBQXdCOzs7OztJQUl4QiwyQkFxQkU7Ozs7O0lBSUYsaUNBT0U7Ozs7O0lBSUYsOEJBQWlCOzs7OztJQUlqQiw4QkFBYzs7Ozs7SUFJZCw0QkFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCZDtJQUFBO0lBK0JBLENBQUM7Ozs7O0lBVkMsaUNBQU87Ozs7SUFBUCxVQUFRLE9BQVk7UUFDbEIsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7OztJQUVELGlDQUFPOzs7Ozs7SUFBUCxVQUFRLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUMsT0FBTyxTQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7O2dCQTlCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLG9oSkFBNEI7aUJBQzdCOzs7dUJBZUUsS0FBSzt1QkFDTCxLQUFLOztJQVlSLHNCQUFDO0NBQUEsQUEvQkQsSUErQkM7U0EzQlksZUFBZTs7O0lBYzFCLCtCQUFtQjs7SUFDbkIsK0JBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgYWN0aW9uIGl0ZW1cbiAqIFxuICogQHByb3BlcnR5IGljb24gKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGJhZGdlIChvcHRpb25hbClcbiAqIC0gdGV4dCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElBY3Rpb25JdGVtIHtcbiAgLyoqXG4gICAqIG9wdGlvbmFsIGJhZGdlIHdpdGgsIG9wdGlvbmFsbHksIGl0cyB0ZXh0XG4gICAqL1xuICBiYWRnZT86IHtcbiAgICAgIHRleHQ/OiBzdHJpbmc7XG4gIH07XG4gIC8qKlxuICAgKiBpY29uIGNsYXNzXG4gICAqL1xuICBpY29uOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgICovXG4gIHBheWxvYWQ6IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBhIHNpbmdsZSBuYXZiYXIgaXRlbVxuICogXG4gKiBub3RlOiBhIHNpbmdsZSBuYXYncyBpdGVtIGNhbiBiZSBhIHRleHQgKHcvIGxpbmspIE9SIGEgZHJvcGRvd25cbiAqIFxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHN1Ym5hdiAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdGV4dCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElOYXZiYXJJdGVtIHtcbiAgLyoqXG4gICAqIHRleHQgb2YgYSBzaW5nbGUgaXRlbSBvZiB0aGUgbmF2YmFyICh0ZXh0IGFuZCBwYXlsb2FkIGFyZSBjb25uZWN0ZWQpXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICogaWNvbiBmb3IgYSBzaW5nbGUgaXRlbSBvZiB0aGUgbmF2YmFyIChhc3NvY2lhdGVkIHRvIFwidGV4dFwiKVxuICAgKi9cbiAgaWNvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIHNlY29uZCBsZXZlbCBuYXZpZ2F0aW9uXG4gICAqL1xuICBzdWJuYXY/OiBJTmF2YmFySXRlbVtdO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAqL1xuICBwYXlsb2FkOiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgSGVhZGVyQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqIFxuICogQHByb3BlcnR5IGxvZ28gKHJlcXVpcmVkKVxuICogLSB0aXRsZSAocmVxdWlyZWQpXG4gKiAtIGltYWdlIChvcHRpb25hbClcbiAqIC0gc3VidGl0bGUgKG9wdGlvbmFsKVxuICogLSBjbGFzc2VzIChvcHRpb25hbClcbiAqIC0gcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcHJ0eSBtZW51VG9nZ2xlIChyZXF1aXJlZClcbiAqIC0gb3BlbiAocmVxdWlyZWQpXG4gKiAtIC0gcGF5bG9hZCAocmVxdWlyZWQpXG4gKiAtIGNsb3NlbiAocmVxdWlyZWQpXG4gKiAtIC0gcGF5bG9hZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgYWN0aW9ucyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgbmF2IChvcHRpb25hbClcbiAqIC0gaXRlbXMgKHJlcXVpcmVkKVxuICogLSBpc0JlbG93IChvcHRpb25hbClcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXG4gKiAtIHBheWxvYWQgKG9wdGlvbmFsKVxuICogLSBfbWV0YSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgc2VhcmNoIChvcHRpb25hbClcbiAqIC0gaGludCAob3B0aW9uYWwpXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxuICogLSBwYXlsb2FkIChvcHRpb25hbClcbiAqIC0gX21ldGEgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHVzZXIgKG9wdGlvbmFsKVxuICogLSBpbWFnZSAob3B0aW9uYWwpXG4gKiAtIG5hbWUgKG9wdGlvbmFsKVxuICogLSBjbGFzc2VzIChvcHRpb25hbClcbiAqIC0gcGF5bG9hZCAob3B0aW9uYWwpXG4gKiAtIF9tZXRhIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUhlYWRlckRhdGEge1xuICAvKipcbiAgICogbG9nbyBhbmQgdGl0bGUgYXJlYSBwYXJhbWV0ZXJzXG4gICAqL1xuICBsb2dvOiB7XG4gICAgaW1hZ2U/OiBzdHJpbmcsXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBzdWJ0aXRsZT86IHN0cmluZyxcbiAgICBjbGFzc2VzPzogc3RyaW5nLFxuICAgIHBheWxvYWQ/OiBhbnksXG4gIH07XG4gIC8qKlxuICAgKiBuYXYncyBwYXJhbWV0ZXJzXG4gICAqL1xuICBuYXY/OiB7XG4gICAgLyoqXG4gICAgICogbGlzdCBvZiB0aGUgaXRlbXMgaW4gdGhlIG5hdmJhclxuICAgICAqL1xuICAgIGl0ZW1zOiBJTmF2YmFySXRlbVtdO1xuICAgIC8qKlxuICAgICAqIGZsYWcgZm9yIGRpc3BsYXkgdGhlIG5hdmJhciB1bmRlciB0aGUgaGVhZGVyIChpbnN0ZWFkIG9mIElOIHRoZSBoZWFkZXIpXG4gICAgICovXG4gICAgaXNCZWxvdz86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICAgKi9cbiAgICBjbGFzc2VzPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgICAgKi9cbiAgICBwYXlsb2FkPzogYW55O1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgICAqL1xuICAgIF9tZXRhPzogYW55O1xuICB9O1xuICAvKipcbiAgICogc2VhcmNoIHBhcmFtZXRlcnNcbiAgICovXG4gIHNlYXJjaD86IHtcbiAgICAvKipcbiAgICAgKiBoaW50ICh0ZXh0IHNob3dlZCBpbiB0aGUgaW5wdXQgYm94IHVudGlsIHNvbWV0aGluZyBpcyB3cml0ZWQgaW4gdGhlcmUpXG4gICAgICovXG4gICAgaGludD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgICAqL1xuICAgIGNsYXNzZXM/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAgICAqL1xuICAgIHBheWxvYWQ/OiBhbnk7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBpbmZvXG4gICAgICovXG4gICAgX21ldGE/OiBhbnk7XG4gIH07XG4gIC8qKlxuICAgKiBhY3Rpb24gaXRlbXNcbiAgICovXG4gIGFjdGlvbnM/OiBJQWN0aW9uSXRlbVtdO1xuICAvKipcbiAgICogdXNlciBwYXJhbWV0ZXJzXG4gICAqL1xuICB1c2VyPzoge1xuICAgIC8qKlxuICAgICAqIHVzZXIncyBwcm9maWxlIHBpY3R1cmVcbiAgICAgKi9cbiAgICBpbWc/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogdXNlcidzIHByb2ZpbGUgbmFtZVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICAgKi9cbiAgICBjbGFzc2VzPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgICAgKi9cbiAgICBwYXlsb2FkPzogYW55O1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgICAqL1xuICAgIF9tZXRhPzogYW55O1xuICB9O1xuICAvKipcbiAgICogbWVudSB0b2dnbGUgZm9yIG1vYmlsZVxuICAgKi9cbiAgbWVudVRvZ2dsZToge1xuICAgIG9wZW46IHtcbiAgICAgIHBheWxvYWQ6IGFueVxuICAgIH0sXG4gICAgY2xvc2U6IHtcbiAgICAgIHBheWxvYWQ6IGFueVxuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuICogSGVhZGVyQ29tcG9uZW50IDxuNy1oZWFkZXI+XG4gKiBcbiAqIEBzdHJ1Y3R1cmVcbiAqICA+PiAgY3BtID0gaXQgaGFzIENsYXNzZXMsIFBheWxvYWQsIE1ldGFkYXRhICA8PFxuICogID4+ICAtcC0gPSBpdCBoYXMgb25seSBQYXlsb2FkICAgICAgICAgICAgICAgIDw8XG4gKiAgPj4gICstLSA9IHN1Yi1tZW1iZXIgICAgICAgICAgICAgICAgICAgICAgICAgPDxcbiAqICA+PiAgKy0tLT4gPSBhcnJheSAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PFxuICpcbiAqICBkYXRhIChjcG0pXG4gKiAgICArLS0gYWN0aW9uc1xuICogICAgICAgICAgKy0tLT4gYWN0aW9uIChjcG0pXG4gKiAgICAgICAgICAgICAgICAgICstLSBiYWRnZVxuICogICAgKy0tIGxvZ28gKGNwLSlcbiAqICAgICstLSBtZW51VG9nZ2xlXG4gKiAgICAgICAgICArLS0gb3BlbiAoLXAtKVxuICogICAgICAgICAgKy0tIGNsb3NlICgtcC0pXG4gKiAgICArLS0gbmF2IChjcG0pXG4gKiAgICAgICAgICArLS0tPiBpdGVtc1xuICogICAgKy0tIHNlYXJjaCAoY3BtKVxuICogICAgKy0tIHVzZXIgKGNwbSlcbiAqICAgXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcbiAgLypcbiAgICA+PiAgICBjcG0gPSBpdCBoYXMgQ2xhc3NlcywgUGF5bG9hZCwgTWV0YWRhdGEgICA8PFxuICAgID4+ICAgIC1wLSA9IGl0IGhhcyBvbmx5IFBheWxvYWQgICAgICAgICAgICAgICAgIDw8XG5cbiAgICBkYXRhIChjcG0pXG4gICAgICArLS0tLSBwYXJhbXMgKGNwbSlcbiAgICAgICstLS0tIG5hdiAoY3BtKVxuICAgICAgICAgICAgICAgICstLS0tIGl0ZW1zIChjcG0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICstLS0tIGRyb3Bkb3duRGF0YSAoY3BtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArLS0tLSBsaXN0ICgtcC0pXG4gICAgICArLS0tLSBzZWFyY2ggKGNwbSlcbiAgICAgICstLS0tIHVzZXIgKGNwbSlcbiAgKi9cbiAgQElucHV0KCkgZGF0YTogYW55O1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DbGljayhwYXlsb2FkOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0eXBlLCBwYXlsb2FkKTtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxuXG4gIG9uS2V5VXAocGF5bG9hZCwga2V5Q29kZSwgdmFsdWUpe1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdrZXlVcCcsIHtwYXlsb2FkLCBrZXlDb2RlLCB2YWx1ZX0pO1xuICB9XG59Il19