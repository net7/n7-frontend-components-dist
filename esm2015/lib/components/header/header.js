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
 * \@property anchor (required)
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
    /** @type {?} */
    IActionItem.prototype.anchor;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    IActionItem.prototype.classes;
    /**
     * additional info
     * @type {?|undefined}
     */
    IActionItem.prototype._meta;
}
/**
 * Interface for a single navbar item
 *
 * note: a single nav's item can be a text (w/ anchor) OR a dropdown
 *
 * \@property icon (optional)
 * \@property subnav (optional)
 * \@property text (optional)
 * \@property classes (optional)
 * \@property anchor (required)
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
    /** @type {?} */
    INavbarItem.prototype.anchor;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    INavbarItem.prototype.classes;
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
 * - anchor (optional)
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
 * - anchor (optional)
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
 * - anchor (optional)
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
export class HeaderComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        // console.log(type, payload);
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    /**
     * @param {?} payload
     * @param {?} keyCode
     * @param {?} value
     * @return {?}
     */
    onKeyUp(payload, keyCode, value) {
        if (!this.emit)
            return;
        this.emit('keyup', { payload, keyCode, value });
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-header',
                template: "<header *ngIf=\"data\" class=\"n7-header {{data.classes || ''}}\">\n    \n    <!-- Logo and title -->\n    <div class=\"n7-header__logo-title {{data.logo.classes || ''}}\">\n        <n7-anchor-wrapper [classes]=\"'n7-header__logo-link'\"\n        [data]=\"data.logo.anchor\"\n        (clicked)=\"onClick($event)\">\n            <img class=\"n7-header__logo\"\n            *ngIf=\"data.logo.image\"\n            [src]=\"data.logo.image\"\n            alt=\"{{ data.logo.title }}\" />\n            <div class=\"n7-header__title-subtitle\">\n                <h1 class=\"n7-header__title\">\n                    {{ data.logo.title }}\n                </h1>\n                <h2 class=\"n7-header__subtitle\" *ngIf=\"data.logo.subtitle\">\n                    {{ data.logo.subtitle }}\n                </h2>\n            </div>\n        </n7-anchor-wrapper>\n    </div>\n\n    <!-- Main menu -->\n    <nav class=\"n7-header__nav {{data.nav.classes || ''}}\" *ngIf=\"data.nav\">\n        <div class=\"n7-header__nav-content\">\n            <ul class=\"n7-header__nav-list\">\n                <li class=\"n7-header__nav-item {{item.classes || ''}}\" *ngFor=\"let item of data.nav.items\">\n                    <n7-anchor-wrapper [classes]=\"'n7-header__nav-link'\"\n                    [data]=\"item.anchor\"\n                    (clicked)=\"onClick($event)\">\n                        <span class=\"n7-header__nav-icon {{item.icon}}\" *ngIf=\"item.icon\"></span>\n                        <span class=\"n7-header__nav-label\" *ngIf=\"item.text\">\n                            {{ item.text }}\n                        </span>\n                    </n7-anchor-wrapper>\n                    <!-- Sublevel -->\n                    <ul class=\"n7-header__subnav-list\" *ngIf=\"item.subnav\">\n                        <li class=\"n7-header__subnav-item {{subitem.classes || ''}}\" *ngFor=\"let subitem of item.subnav\">\n                            <n7-anchor-wrapper [classes]=\"'n7-header__subnav-link'\"\n                            [data]=\"subitem.anchor\"\n                            (clicked)=\"onClick($event)\">\n                                <span class=\"n7-header__subnav-icon {{subitem.icon}}\" *ngIf=\"subitem.icon\"></span>\n                                <span class=\"n7-header__subnav-label\" *ngIf=\"subitem.text\">\n                                    {{ subitem.text }}\n                                </span>\n                            </n7-anchor-wrapper>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n    </nav>\n\n    <!-- Mobile menu toggle -->\n    <div class=\"n7-header__mobile-menu-toggle\">\n        <span class=\"n7-header__mobile-menu-icon n7-icon-menu\" \n              (click)=\"onClick(data.menuToggle.open.payload)\"></span>\n    </div>\n\n    <!-- Mobile menu close -->\n    <span class=\"n7-header__mobile-menu-close n7-icon-close\" \n          (click)=\"onClick(data.menuToggle.close.payload)\"></span>\n\n    <!-- Tools: search, notifications, use profile or login/signup -->\n    <div class=\"n7-header__tools\">\n        \n        <div class=\"n7-header__search {{data.search.classes || ''}}\" *ngIf=\"data.search\">\n            <input class=\"n7-header__search-input\" \n                   type=\"search\" \n                   name=\"search\" \n                   placeholder=\"{{ data.search.hint || ''}}\" \n                   (keyup)=\"onKeyUp(data.search.payload, $event.keyCode, $event.target.value)\"/>\n            <button class=\"n7-header__search-btn\" type=\"submit\" (click)=\"onClick(data.search.payload)\">\n                <span class=\"n7-header__search-btn-label\">\n                    Search\n                </span>\n            </button>\n        </div>\n        \n        <div class=\"n7-header__actions\" *ngIf=\"data.actions\">\n            <n7-anchor-wrapper *ngFor=\"let action of data.actions\" \n            [classes]=\"'n7-header__action' + (action.classes || '')\"\n            [data]=\"action.anchor\"\n            (clicked)=\"onClick($event)\">\n                <span class=\"n7-header__action-icon {{ action.icon }}\"></span>\n                <span *ngIf=\"action.badge\" class=\"n7-header__action-badge {{ action.badge.text ? 'has-text' : '' }}\">\n                    {{ action.badge.text }}\n                </span>\n            </n7-anchor-wrapper>\n        </div>\n\n        <div class=\"n7-header__user {{data.user.classes || ''}}\" *ngIf=\"data.user\">\n            <n7-anchor-wrapper [classes]=\"'n7-header__user-wrapper'\"\n            [data]=\"data.user.anchor\"\n            (clicked)=\"onClick($event)\">\n                <img *ngIf=\"data.user.img\"\n                class=\"n7-header__user-img\"  \n                [src]=\"data.user.img\"/>\n                <p class=\"n7-header__user-name\" *ngIf=\"data.user.name\">\n                    <span class=\"n7-header__user-name-label\">\n                        {{ data.user.name }}\n                    </span>\n                </p>\n            </n7-anchor-wrapper>\n        </div>\n    </div>\n\n</header>\n\n"
            }] }
];
HeaderComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    HeaderComponent.prototype.data;
    /** @type {?} */
    HeaderComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0FBYWpELGlDQW9CQzs7Ozs7O0lBaEJDLDRCQUVFOzs7OztJQUlGLDJCQUFhOztJQUNiLDZCQUFnQjs7Ozs7SUFJaEIsOEJBQWlCOzs7OztJQUlqQiw0QkFBWTs7Ozs7Ozs7Ozs7Ozs7O0FBZWQsaUNBc0JDOzs7Ozs7SUFsQkMsMkJBQWM7Ozs7O0lBSWQsMkJBQWM7Ozs7O0lBSWQsNkJBQXVCOztJQUN2Qiw2QkFBZ0I7Ozs7O0lBSWhCLDhCQUFpQjs7Ozs7SUFJakIsNEJBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBDZCxpQ0EyR0M7Ozs7OztJQXZHQywyQkFPRTs7Ozs7SUFJRiwwQkFxQkU7Ozs7O0lBSUYsNkJBaUJFOzs7OztJQUlGLDhCQUF3Qjs7Ozs7SUFJeEIsMkJBa0JFOzs7OztJQUlGLGlDQU9FOzs7OztJQUlGLDhCQUFpQjs7Ozs7SUFJakIsOEJBQWM7Ozs7O0lBSWQsNEJBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QmQsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBaUIxQixPQUFPLENBQUMsT0FBWTtRQUNsQiw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7O0lBRUQsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7OztZQTlCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLHNnS0FBNEI7YUFDN0I7OzttQkFlRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETiwrQkFBbUI7O0lBQ25CLCtCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBhIHNpbmdsZSBhY3Rpb24gaXRlbVxuICogXG4gKiBAcHJvcGVydHkgaWNvbiAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgYmFkZ2UgKG9wdGlvbmFsKVxuICogLSB0ZXh0IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBhbmNob3IgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJQWN0aW9uSXRlbSB7XG4gIC8qKlxuICAgKiBvcHRpb25hbCBiYWRnZSB3aXRoLCBvcHRpb25hbGx5LCBpdHMgdGV4dFxuICAgKi9cbiAgYmFkZ2U/OiB7XG4gICAgICB0ZXh0Pzogc3RyaW5nO1xuICB9O1xuICAvKipcbiAgICogaWNvbiBjbGFzc1xuICAgKi9cbiAgaWNvbjogc3RyaW5nO1xuICBhbmNob3I6IElBbmNob3I7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBhIHNpbmdsZSBuYXZiYXIgaXRlbVxuICogXG4gKiBub3RlOiBhIHNpbmdsZSBuYXYncyBpdGVtIGNhbiBiZSBhIHRleHQgKHcvIGFuY2hvcikgT1IgYSBkcm9wZG93blxuICogXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgc3VibmF2IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB0ZXh0IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBhbmNob3IgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJTmF2YmFySXRlbSB7XG4gIC8qKlxuICAgKiB0ZXh0IG9mIGEgc2luZ2xlIGl0ZW0gb2YgdGhlIG5hdmJhciAodGV4dCBhbmQgcGF5bG9hZCBhcmUgY29ubmVjdGVkKVxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIGljb24gZm9yIGEgc2luZ2xlIGl0ZW0gb2YgdGhlIG5hdmJhciAoYXNzb2NpYXRlZCB0byBcInRleHRcIilcbiAgICovXG4gIGljb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBzZWNvbmQgbGV2ZWwgbmF2aWdhdGlvblxuICAgKi9cbiAgc3VibmF2PzogSU5hdmJhckl0ZW1bXTtcbiAgYW5jaG9yOiBJQW5jaG9yO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgSGVhZGVyQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqIFxuICogQHByb3BlcnR5IGxvZ28gKHJlcXVpcmVkKVxuICogLSB0aXRsZSAocmVxdWlyZWQpXG4gKiAtIGltYWdlIChvcHRpb25hbClcbiAqIC0gc3VidGl0bGUgKG9wdGlvbmFsKVxuICogLSBjbGFzc2VzIChvcHRpb25hbClcbiAqIC0gcGF5bG9hZCAob3B0aW9uYWwpXG4gKiAtIGFuY2hvciAob3B0aW9uYWwpXG4gKiBAcHJvcHJ0eSBtZW51VG9nZ2xlIChyZXF1aXJlZClcbiAqIC0gb3BlbiAocmVxdWlyZWQpXG4gKiAtIC0gcGF5bG9hZCAocmVxdWlyZWQpXG4gKiAtIGNsb3NlbiAocmVxdWlyZWQpXG4gKiAtIC0gcGF5bG9hZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgYWN0aW9ucyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgbmF2IChvcHRpb25hbClcbiAqIC0gaXRlbXMgKHJlcXVpcmVkKVxuICogLSBpc0JlbG93IChvcHRpb25hbClcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXG4gKiAtIHBheWxvYWQgKG9wdGlvbmFsKVxuICogLSBhbmNob3IgKG9wdGlvbmFsKVxuICogLSBfbWV0YSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgc2VhcmNoIChvcHRpb25hbClcbiAqIC0gaGludCAob3B0aW9uYWwpXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxuICogLSBwYXlsb2FkIChvcHRpb25hbClcbiAqIC0gX21ldGEgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHVzZXIgKG9wdGlvbmFsKVxuICogLSBpbWFnZSAob3B0aW9uYWwpXG4gKiAtIG5hbWUgKG9wdGlvbmFsKVxuICogLSBjbGFzc2VzIChvcHRpb25hbClcbiAqIC0gcGF5bG9hZCAob3B0aW9uYWwpXG4gKiAtIGFuY2hvciAob3B0aW9uYWwpXG4gKiAtIF9tZXRhIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUhlYWRlckRhdGEge1xuICAvKipcbiAgICogbG9nbyBhbmQgdGl0bGUgYXJlYSBwYXJhbWV0ZXJzXG4gICAqL1xuICBsb2dvOiB7XG4gICAgaW1hZ2U/OiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBzdWJ0aXRsZT86IHN0cmluZztcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xuICAgIHBheWxvYWQ/OiBhbnk7XG4gICAgYW5jaG9yOiBJQW5jaG9yO1xuICB9O1xuICAvKipcbiAgICogbmF2J3MgcGFyYW1ldGVyc1xuICAgKi9cbiAgbmF2Pzoge1xuICAgIC8qKlxuICAgICAqIGxpc3Qgb2YgdGhlIGl0ZW1zIGluIHRoZSBuYXZiYXJcbiAgICAgKi9cbiAgICBpdGVtczogSU5hdmJhckl0ZW1bXTtcbiAgICAvKipcbiAgICAgKiBmbGFnIGZvciBkaXNwbGF5IHRoZSBuYXZiYXIgdW5kZXIgdGhlIGhlYWRlciAoaW5zdGVhZCBvZiBJTiB0aGUgaGVhZGVyKVxuICAgICAqL1xuICAgIGlzQmVsb3c/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAgICovXG4gICAgY2xhc3Nlcz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAgICovXG4gICAgcGF5bG9hZD86IGFueTtcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICAgKi9cbiAgICBfbWV0YT86IGFueTtcbiAgfTtcbiAgLyoqXG4gICAqIHNlYXJjaCBwYXJhbWV0ZXJzXG4gICAqL1xuICBzZWFyY2g/OiB7XG4gICAgLyoqXG4gICAgICogaGludCAodGV4dCBzaG93ZWQgaW4gdGhlIGlucHV0IGJveCB1bnRpbCBzb21ldGhpbmcgaXMgd3JpdGVkIGluIHRoZXJlKVxuICAgICAqL1xuICAgIGhpbnQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICAgKi9cbiAgICBjbGFzc2VzPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgICAgKi9cbiAgICBwYXlsb2FkPzogYW55O1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgICAqL1xuICAgIF9tZXRhPzogYW55O1xuICB9O1xuICAvKipcbiAgICogYWN0aW9uIGl0ZW1zXG4gICAqL1xuICBhY3Rpb25zPzogSUFjdGlvbkl0ZW1bXTtcbiAgLyoqXG4gICAqIHVzZXIgcGFyYW1ldGVyc1xuICAgKi9cbiAgdXNlcj86IHtcbiAgICAvKipcbiAgICAgKiB1c2VyJ3MgcHJvZmlsZSBwaWN0dXJlXG4gICAgICovXG4gICAgaW1nPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIHVzZXIncyBwcm9maWxlIG5hbWVcbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAgICovXG4gICAgY2xhc3Nlcz86IHN0cmluZztcbiAgICBhbmNob3I6IElBbmNob3I7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBpbmZvXG4gICAgICovXG4gICAgX21ldGE/OiBhbnk7XG4gIH07XG4gIC8qKlxuICAgKiBtZW51IHRvZ2dsZSBmb3IgbW9iaWxlXG4gICAqL1xuICBtZW51VG9nZ2xlOiB7XG4gICAgb3Blbjoge1xuICAgICAgcGF5bG9hZDogYW55XG4gICAgfSxcbiAgICBjbG9zZToge1xuICAgICAgcGF5bG9hZDogYW55XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAqL1xuICBwYXlsb2FkPzogYW55O1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvXG4gICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4gKiBIZWFkZXJDb21wb25lbnQgPG43LWhlYWRlcj5cbiAqIFxuICogQHN0cnVjdHVyZVxuICogID4+ICBjcG0gPSBpdCBoYXMgQ2xhc3NlcywgUGF5bG9hZCwgTWV0YWRhdGEgIDw8XG4gKiAgPj4gIC1wLSA9IGl0IGhhcyBvbmx5IFBheWxvYWQgICAgICAgICAgICAgICAgPDxcbiAqICA+PiAgKy0tID0gc3ViLW1lbWJlciAgICAgICAgICAgICAgICAgICAgICAgICA8PFxuICogID4+ICArLS0tPiA9IGFycmF5ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw8XG4gKlxuICogIGRhdGEgKGNwbSlcbiAqICAgICstLSBhY3Rpb25zXG4gKiAgICAgICAgICArLS0tPiBhY3Rpb24gKGNwbSlcbiAqICAgICAgICAgICAgICAgICAgKy0tIGJhZGdlXG4gKiAgICArLS0gbG9nbyAoY3AtKVxuICogICAgKy0tIG1lbnVUb2dnbGVcbiAqICAgICAgICAgICstLSBvcGVuICgtcC0pXG4gKiAgICAgICAgICArLS0gY2xvc2UgKC1wLSlcbiAqICAgICstLSBuYXYgKGNwbSlcbiAqICAgICAgICAgICstLS0+IGl0ZW1zXG4gKiAgICArLS0gc2VhcmNoIChjcG0pXG4gKiAgICArLS0gdXNlciAoY3BtKVxuICogICBcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQge1xuICAvKlxuICAgID4+ICAgIGNwbSA9IGl0IGhhcyBDbGFzc2VzLCBQYXlsb2FkLCBNZXRhZGF0YSAgIDw8XG4gICAgPj4gICAgLXAtID0gaXQgaGFzIG9ubHkgUGF5bG9hZCAgICAgICAgICAgICAgICAgPDxcblxuICAgIGRhdGEgKGNwbSlcbiAgICAgICstLS0tIHBhcmFtcyAoY3BtKVxuICAgICAgKy0tLS0gbmF2IChjcG0pXG4gICAgICAgICAgICAgICAgKy0tLS0gaXRlbXMgKGNwbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKy0tLS0gZHJvcGRvd25EYXRhIChjcG0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLS0tIGxpc3QgKC1wLSlcbiAgICAgICstLS0tIHNlYXJjaCAoY3BtKVxuICAgICAgKy0tLS0gdXNlciAoY3BtKVxuICAqL1xuICBASW5wdXQoKSBkYXRhOiBhbnk7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNsaWNrKHBheWxvYWQ6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKHR5cGUsIHBheWxvYWQpO1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG5cbiAgb25LZXlVcChwYXlsb2FkLCBrZXlDb2RlLCB2YWx1ZSl7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2tleXVwJywge3BheWxvYWQsIGtleUNvZGUsIHZhbHVlfSk7XG4gIH1cbn0iXX0=