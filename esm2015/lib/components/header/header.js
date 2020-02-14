/**
 * @fileoverview added by tsickle
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
                template: "<header *ngIf=\"data\" class=\"n7-header {{data.classes || ''}}\">\r\n    \r\n    <!-- Logo and title -->\r\n    <div class=\"n7-header__logo-title {{data.logo.classes || ''}}\">\r\n        <n7-anchor-wrapper [classes]=\"'n7-header__logo-link'\"\r\n        [data]=\"data.logo.anchor\"\r\n        (clicked)=\"onClick($event)\">\r\n            <img class=\"n7-header__logo\"\r\n            *ngIf=\"data.logo.image\"\r\n            [src]=\"data.logo.image\"\r\n            alt=\"{{ data.logo.title }}\" />\r\n            <div class=\"n7-header__title-subtitle\">\r\n                <h1 class=\"n7-header__title\">\r\n                    {{ data.logo.title }}\r\n                </h1>\r\n                <h2 class=\"n7-header__subtitle\" *ngIf=\"data.logo.subtitle\">\r\n                    {{ data.logo.subtitle }}\r\n                </h2>\r\n            </div>\r\n        </n7-anchor-wrapper>\r\n    </div>\r\n\r\n    <!-- Main menu -->\r\n    <nav class=\"n7-header__nav {{data.nav.classes || ''}}\" *ngIf=\"data.nav\">\r\n        <div class=\"n7-header__nav-content\">\r\n            <ul class=\"n7-header__nav-list\">\r\n                <li class=\"n7-header__nav-item {{item.classes || ''}}\" *ngFor=\"let item of data.nav.items\">\r\n                    <n7-anchor-wrapper [classes]=\"'n7-header__nav-link'\"\r\n                    [data]=\"item.anchor\"\r\n                    (clicked)=\"onClick($event)\">\r\n                        <span class=\"n7-header__nav-icon {{item.icon}}\" *ngIf=\"item.icon\"></span>\r\n                        <span class=\"n7-header__nav-label\" *ngIf=\"item.text\">\r\n                            {{ item.text }}\r\n                        </span>\r\n                    </n7-anchor-wrapper>\r\n                    <!-- Sublevel -->\r\n                    <ul class=\"n7-header__subnav-list\" *ngIf=\"item.subnav\">\r\n                        <li class=\"n7-header__subnav-item {{subitem.classes || ''}}\" *ngFor=\"let subitem of item.subnav\">\r\n                            <n7-anchor-wrapper [classes]=\"'n7-header__subnav-link'\"\r\n                            [data]=\"subitem.anchor\"\r\n                            (clicked)=\"onClick($event)\">\r\n                                <span class=\"n7-header__subnav-icon {{subitem.icon}}\" *ngIf=\"subitem.icon\"></span>\r\n                                <span class=\"n7-header__subnav-label\" *ngIf=\"subitem.text\">\r\n                                    {{ subitem.text }}\r\n                                </span>\r\n                            </n7-anchor-wrapper>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n\r\n    <!-- Mobile menu toggle -->\r\n    <div class=\"n7-header__mobile-menu-toggle\">\r\n        <span class=\"n7-header__mobile-menu-icon n7-icon-menu\" \r\n              (click)=\"onClick(data.menuToggle.open.payload)\"></span>\r\n    </div>\r\n\r\n    <!-- Mobile menu close -->\r\n    <span class=\"n7-header__mobile-menu-close n7-icon-close\" \r\n          (click)=\"onClick(data.menuToggle.close.payload)\"></span>\r\n\r\n    <!-- Tools: search, notifications, use profile or login/signup -->\r\n    <div class=\"n7-header__tools\">\r\n        \r\n        <div class=\"n7-header__search {{data.search.classes || ''}}\" *ngIf=\"data.search\">\r\n            <input class=\"n7-header__search-input\" \r\n                   type=\"search\" \r\n                   name=\"search\" \r\n                   placeholder=\"{{ data.search.hint || ''}}\" \r\n                   (keyup)=\"onKeyUp(data.search.payload, $event.keyCode, $event.target.value)\"/>\r\n            <button class=\"n7-header__search-btn\" type=\"submit\" (click)=\"onClick(data.search.payload)\">\r\n                <span class=\"n7-header__search-btn-label\">\r\n                    Search\r\n                </span>\r\n            </button>\r\n        </div>\r\n        \r\n        <div class=\"n7-header__actions\" *ngIf=\"data.actions\">\r\n            <n7-anchor-wrapper *ngFor=\"let action of data.actions\" \r\n            [classes]=\"'n7-header__action' + (action.classes || '')\"\r\n            [data]=\"action.anchor\"\r\n            (clicked)=\"onClick($event)\">\r\n                <span class=\"n7-header__action-icon {{ action.icon }}\"></span>\r\n                <span *ngIf=\"action.badge\" class=\"n7-header__action-badge {{ action.badge.text ? 'has-text' : '' }}\">\r\n                    {{ action.badge.text }}\r\n                </span>\r\n            </n7-anchor-wrapper>\r\n        </div>\r\n\r\n        <div class=\"n7-header__user {{data.user.classes || ''}}\" *ngIf=\"data.user\">\r\n            <n7-anchor-wrapper [classes]=\"'n7-header__user-wrapper'\"\r\n            [data]=\"data.user.anchor\"\r\n            (clicked)=\"onClick($event)\">\r\n                <img *ngIf=\"data.user.img\"\r\n                class=\"n7-header__user-img\"  \r\n                [src]=\"data.user.img\"/>\r\n                <p class=\"n7-header__user-name\" *ngIf=\"data.user.name\">\r\n                    <span class=\"n7-header__user-name-label\">\r\n                        {{ data.user.name }}\r\n                    </span>\r\n                </p>\r\n            </n7-anchor-wrapper>\r\n        </div>\r\n    </div>\r\n\r\n</header>\r\n\r\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0FBYWpELGlDQW9CQzs7Ozs7O0lBaEJDLDRCQUVFOzs7OztJQUlGLDJCQUFhOztJQUNiLDZCQUFnQjs7Ozs7SUFJaEIsOEJBQWlCOzs7OztJQUlqQiw0QkFBWTs7Ozs7Ozs7Ozs7Ozs7O0FBZWQsaUNBc0JDOzs7Ozs7SUFsQkMsMkJBQWM7Ozs7O0lBSWQsMkJBQWM7Ozs7O0lBSWQsNkJBQXVCOztJQUN2Qiw2QkFBZ0I7Ozs7O0lBSWhCLDhCQUFpQjs7Ozs7SUFJakIsNEJBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBDZCxpQ0EyR0M7Ozs7OztJQXZHQywyQkFPRTs7Ozs7SUFJRiwwQkFxQkU7Ozs7O0lBSUYsNkJBaUJFOzs7OztJQUlGLDhCQUF3Qjs7Ozs7SUFJeEIsMkJBa0JFOzs7OztJQUlGLGlDQU9FOzs7OztJQUlGLDhCQUFpQjs7Ozs7SUFJakIsOEJBQWM7Ozs7O0lBSWQsNEJBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QmQsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBaUIxQixPQUFPLENBQUMsT0FBWTtRQUNsQiw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7O0lBRUQsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7OztZQTlCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLGd1S0FBNEI7YUFDN0I7OzttQkFlRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETiwrQkFBbUI7O0lBQ25CLCtCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGEgc2luZ2xlIGFjdGlvbiBpdGVtXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkgaWNvbiAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBiYWRnZSAob3B0aW9uYWwpXHJcbiAqIC0gdGV4dCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGFuY2hvciAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElBY3Rpb25JdGVtIHtcclxuICAvKipcclxuICAgKiBvcHRpb25hbCBiYWRnZSB3aXRoLCBvcHRpb25hbGx5LCBpdHMgdGV4dFxyXG4gICAqL1xyXG4gIGJhZGdlPzoge1xyXG4gICAgICB0ZXh0Pzogc3RyaW5nO1xyXG4gIH07XHJcbiAgLyoqXHJcbiAgICogaWNvbiBjbGFzc1xyXG4gICAqL1xyXG4gIGljb246IHN0cmluZztcclxuICBhbmNob3I6IElBbmNob3I7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xyXG4gICAqL1xyXG4gIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBhIHNpbmdsZSBuYXZiYXIgaXRlbVxyXG4gKiBcclxuICogbm90ZTogYSBzaW5nbGUgbmF2J3MgaXRlbSBjYW4gYmUgYSB0ZXh0ICh3LyBhbmNob3IpIE9SIGEgZHJvcGRvd25cclxuICogXHJcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHN1Ym5hdiAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgYW5jaG9yIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5hdmJhckl0ZW0ge1xyXG4gIC8qKlxyXG4gICAqIHRleHQgb2YgYSBzaW5nbGUgaXRlbSBvZiB0aGUgbmF2YmFyICh0ZXh0IGFuZCBwYXlsb2FkIGFyZSBjb25uZWN0ZWQpXHJcbiAgICovXHJcbiAgdGV4dD86IHN0cmluZztcclxuICAvKipcclxuICAgKiBpY29uIGZvciBhIHNpbmdsZSBpdGVtIG9mIHRoZSBuYXZiYXIgKGFzc29jaWF0ZWQgdG8gXCJ0ZXh0XCIpXHJcbiAgICovXHJcbiAgaWNvbj86IHN0cmluZztcclxuICAvKipcclxuICAgKiBzZWNvbmQgbGV2ZWwgbmF2aWdhdGlvblxyXG4gICAqL1xyXG4gIHN1Ym5hdj86IElOYXZiYXJJdGVtW107XHJcbiAgYW5jaG9yOiBJQW5jaG9yO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgSGVhZGVyQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICogXHJcbiAqIEBwcm9wZXJ0eSBsb2dvIChyZXF1aXJlZClcclxuICogLSB0aXRsZSAocmVxdWlyZWQpXHJcbiAqIC0gaW1hZ2UgKG9wdGlvbmFsKVxyXG4gKiAtIHN1YnRpdGxlIChvcHRpb25hbClcclxuICogLSBjbGFzc2VzIChvcHRpb25hbClcclxuICogLSBwYXlsb2FkIChvcHRpb25hbClcclxuICogLSBhbmNob3IgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcHJ0eSBtZW51VG9nZ2xlIChyZXF1aXJlZClcclxuICogLSBvcGVuIChyZXF1aXJlZClcclxuICogLSAtIHBheWxvYWQgKHJlcXVpcmVkKVxyXG4gKiAtIGNsb3NlbiAocmVxdWlyZWQpXHJcbiAqIC0gLSBwYXlsb2FkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGFjdGlvbnMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgbmF2IChvcHRpb25hbClcclxuICogLSBpdGVtcyAocmVxdWlyZWQpXHJcbiAqIC0gaXNCZWxvdyAob3B0aW9uYWwpXHJcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIC0gcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIC0gYW5jaG9yIChvcHRpb25hbClcclxuICogLSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBzZWFyY2ggKG9wdGlvbmFsKVxyXG4gKiAtIGhpbnQgKG9wdGlvbmFsKVxyXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiAtIHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiAtIF9tZXRhIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHVzZXIgKG9wdGlvbmFsKVxyXG4gKiAtIGltYWdlIChvcHRpb25hbClcclxuICogLSBuYW1lIChvcHRpb25hbClcclxuICogLSBjbGFzc2VzIChvcHRpb25hbClcclxuICogLSBwYXlsb2FkIChvcHRpb25hbClcclxuICogLSBhbmNob3IgKG9wdGlvbmFsKVxyXG4gKiAtIF9tZXRhIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElIZWFkZXJEYXRhIHtcclxuICAvKipcclxuICAgKiBsb2dvIGFuZCB0aXRsZSBhcmVhIHBhcmFtZXRlcnNcclxuICAgKi9cclxuICBsb2dvOiB7XHJcbiAgICBpbWFnZT86IHN0cmluZztcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBzdWJ0aXRsZT86IHN0cmluZztcclxuICAgIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgICBwYXlsb2FkPzogYW55O1xyXG4gICAgYW5jaG9yOiBJQW5jaG9yO1xyXG4gIH07XHJcbiAgLyoqXHJcbiAgICogbmF2J3MgcGFyYW1ldGVyc1xyXG4gICAqL1xyXG4gIG5hdj86IHtcclxuICAgIC8qKlxyXG4gICAgICogbGlzdCBvZiB0aGUgaXRlbXMgaW4gdGhlIG5hdmJhclxyXG4gICAgICovXHJcbiAgICBpdGVtczogSU5hdmJhckl0ZW1bXTtcclxuICAgIC8qKlxyXG4gICAgICogZmxhZyBmb3IgZGlzcGxheSB0aGUgbmF2YmFyIHVuZGVyIHRoZSBoZWFkZXIgKGluc3RlYWQgb2YgSU4gdGhlIGhlYWRlcilcclxuICAgICAqL1xyXG4gICAgaXNCZWxvdz86IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICAgKi9cclxuICAgIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcclxuICAgICAqL1xyXG4gICAgcGF5bG9hZD86IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICAgKi9cclxuICAgIF9tZXRhPzogYW55O1xyXG4gIH07XHJcbiAgLyoqXHJcbiAgICogc2VhcmNoIHBhcmFtZXRlcnNcclxuICAgKi9cclxuICBzZWFyY2g/OiB7XHJcbiAgICAvKipcclxuICAgICAqIGhpbnQgKHRleHQgc2hvd2VkIGluIHRoZSBpbnB1dCBib3ggdW50aWwgc29tZXRoaW5nIGlzIHdyaXRlZCBpbiB0aGVyZSlcclxuICAgICAqL1xyXG4gICAgaGludD86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgICAqL1xyXG4gICAgY2xhc3Nlcz86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICAgICovXHJcbiAgICBwYXlsb2FkPzogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgICAqL1xyXG4gICAgX21ldGE/OiBhbnk7XHJcbiAgfTtcclxuICAvKipcclxuICAgKiBhY3Rpb24gaXRlbXNcclxuICAgKi9cclxuICBhY3Rpb25zPzogSUFjdGlvbkl0ZW1bXTtcclxuICAvKipcclxuICAgKiB1c2VyIHBhcmFtZXRlcnNcclxuICAgKi9cclxuICB1c2VyPzoge1xyXG4gICAgLyoqXHJcbiAgICAgKiB1c2VyJ3MgcHJvZmlsZSBwaWN0dXJlXHJcbiAgICAgKi9cclxuICAgIGltZz86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogdXNlcidzIHByb2ZpbGUgbmFtZVxyXG4gICAgICovXHJcbiAgICBuYW1lPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAgICovXHJcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gICAgYW5jaG9yOiBJQW5jaG9yO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgICAqL1xyXG4gICAgX21ldGE/OiBhbnk7XHJcbiAgfTtcclxuICAvKipcclxuICAgKiBtZW51IHRvZ2dsZSBmb3IgbW9iaWxlXHJcbiAgICovXHJcbiAgbWVudVRvZ2dsZToge1xyXG4gICAgb3Blbjoge1xyXG4gICAgICBwYXlsb2FkOiBhbnlcclxuICAgIH0sXHJcbiAgICBjbG9zZToge1xyXG4gICAgICBwYXlsb2FkOiBhbnlcclxuICAgIH1cclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXHJcbiAgICovXHJcbiAgcGF5bG9hZD86IGFueTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEhlYWRlckNvbXBvbmVudCA8bjctaGVhZGVyPlxyXG4gKiBcclxuICogQHN0cnVjdHVyZVxyXG4gKiAgPj4gIGNwbSA9IGl0IGhhcyBDbGFzc2VzLCBQYXlsb2FkLCBNZXRhZGF0YSAgPDxcclxuICogID4+ICAtcC0gPSBpdCBoYXMgb25seSBQYXlsb2FkICAgICAgICAgICAgICAgIDw8XHJcbiAqICA+PiAgKy0tID0gc3ViLW1lbWJlciAgICAgICAgICAgICAgICAgICAgICAgICA8PFxyXG4gKiAgPj4gICstLS0+ID0gYXJyYXkgICAgICAgICAgICAgICAgICAgICAgICAgICAgPDxcclxuICpcclxuICogIGRhdGEgKGNwbSlcclxuICogICAgKy0tIGFjdGlvbnNcclxuICogICAgICAgICAgKy0tLT4gYWN0aW9uIChjcG0pXHJcbiAqICAgICAgICAgICAgICAgICAgKy0tIGJhZGdlXHJcbiAqICAgICstLSBsb2dvIChjcC0pXHJcbiAqICAgICstLSBtZW51VG9nZ2xlXHJcbiAqICAgICAgICAgICstLSBvcGVuICgtcC0pXHJcbiAqICAgICAgICAgICstLSBjbG9zZSAoLXAtKVxyXG4gKiAgICArLS0gbmF2IChjcG0pXHJcbiAqICAgICAgICAgICstLS0+IGl0ZW1zXHJcbiAqICAgICstLSBzZWFyY2ggKGNwbSlcclxuICogICAgKy0tIHVzZXIgKGNwbSlcclxuICogICBcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctaGVhZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQge1xyXG4gIC8qXHJcbiAgICA+PiAgICBjcG0gPSBpdCBoYXMgQ2xhc3NlcywgUGF5bG9hZCwgTWV0YWRhdGEgICA8PFxyXG4gICAgPj4gICAgLXAtID0gaXQgaGFzIG9ubHkgUGF5bG9hZCAgICAgICAgICAgICAgICAgPDxcclxuXHJcbiAgICBkYXRhIChjcG0pXHJcbiAgICAgICstLS0tIHBhcmFtcyAoY3BtKVxyXG4gICAgICArLS0tLSBuYXYgKGNwbSlcclxuICAgICAgICAgICAgICAgICstLS0tIGl0ZW1zIChjcG0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKy0tLS0gZHJvcGRvd25EYXRhIChjcG0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKy0tLS0gbGlzdCAoLXAtKVxyXG4gICAgICArLS0tLSBzZWFyY2ggKGNwbSlcclxuICAgICAgKy0tLS0gdXNlciAoY3BtKVxyXG4gICovXHJcbiAgQElucHV0KCkgZGF0YTogYW55O1xyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgb25DbGljayhwYXlsb2FkOiBhbnkpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHR5cGUsIHBheWxvYWQpO1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIG9uS2V5VXAocGF5bG9hZCwga2V5Q29kZSwgdmFsdWUpe1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgna2V5dXAnLCB7cGF5bG9hZCwga2V5Q29kZSwgdmFsdWV9KTtcclxuICB9XHJcbn0iXX0=