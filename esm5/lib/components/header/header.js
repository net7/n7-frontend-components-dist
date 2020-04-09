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
 * \@property anchor (required)
 * \@property _meta (optional)
 * @record
 */
export function ActionItem() { }
if (false) {
    /**
     * optional badge with, optionally, its text
     * @type {?|undefined}
     */
    ActionItem.prototype.badge;
    /**
     * icon class
     * @type {?}
     */
    ActionItem.prototype.icon;
    /** @type {?} */
    ActionItem.prototype.anchor;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    ActionItem.prototype.classes;
    /**
     * additional info
     * @type {?|undefined}
     */
    ActionItem.prototype._meta;
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
export function NavbarItem() { }
if (false) {
    /**
     * text of a single item of the navbar (text and payload are connected)
     * @type {?|undefined}
     */
    NavbarItem.prototype.text;
    /**
     * icon for a single item of the navbar (associated to "text")
     * @type {?|undefined}
     */
    NavbarItem.prototype.icon;
    /**
     * second level navigation
     * @type {?|undefined}
     */
    NavbarItem.prototype.subnav;
    /** @type {?} */
    NavbarItem.prototype.anchor;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    NavbarItem.prototype.classes;
    /**
     * additional info
     * @type {?|undefined}
     */
    NavbarItem.prototype._meta;
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
export function HeaderData() { }
if (false) {
    /**
     * logo and title area parameters
     * @type {?}
     */
    HeaderData.prototype.logo;
    /**
     * nav's parameters
     * @type {?|undefined}
     */
    HeaderData.prototype.nav;
    /**
     * search parameters
     * @type {?|undefined}
     */
    HeaderData.prototype.search;
    /**
     * action items
     * @type {?|undefined}
     */
    HeaderData.prototype.actions;
    /**
     * user parameters
     * @type {?|undefined}
     */
    HeaderData.prototype.user;
    /**
     * menu toggle for mobile
     * @type {?}
     */
    HeaderData.prototype.menuToggle;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    HeaderData.prototype.classes;
    /**
     * action click's payload
     * @type {?|undefined}
     */
    HeaderData.prototype.payload;
    /**
     * additional info
     * @type {?|undefined}
     */
    HeaderData.prototype._meta;
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
                    template: "<header *ngIf=\"data\" class=\"n7-header {{data.classes || ''}}\">\n    \n    <!-- Logo and title -->\n    <div class=\"n7-header__logo-title {{data.logo.classes || ''}}\">\n        <n7-anchor-wrapper [classes]=\"'n7-header__logo-link'\"\n        [data]=\"data.logo.anchor\"\n        (clicked)=\"onClick($event)\">\n            <img class=\"n7-header__logo\"\n            *ngIf=\"data.logo.image\"\n            [src]=\"data.logo.image\"\n            alt=\"{{ data.logo.title }}\" />\n            <div class=\"n7-header__title-subtitle\">\n                <h1 class=\"n7-header__title\">\n                    {{ data.logo.title }}\n                </h1>\n                <h2 class=\"n7-header__subtitle\" *ngIf=\"data.logo.subtitle\">\n                    {{ data.logo.subtitle }}\n                </h2>\n            </div>\n        </n7-anchor-wrapper>\n    </div>\n\n    <!-- Main menu -->\n    <nav class=\"n7-header__nav {{data.nav.classes || ''}}\" *ngIf=\"data.nav\">\n        <div class=\"n7-header__nav-content\">\n            <ul class=\"n7-header__nav-list\">\n                <li class=\"n7-header__nav-item {{item.classes || ''}}\" *ngFor=\"let item of data.nav.items\">\n                    <n7-anchor-wrapper [classes]=\"'n7-header__nav-link'\"\n                    [data]=\"item.anchor\"\n                    (clicked)=\"onClick($event)\">\n                        <span class=\"n7-header__nav-icon {{item.icon}}\" *ngIf=\"item.icon\"></span>\n                        <span class=\"n7-header__nav-label\" *ngIf=\"item.text\">\n                            {{ item.text }}\n                        </span>\n                    </n7-anchor-wrapper>\n                    <!-- Sublevel -->\n                    <ul class=\"n7-header__subnav-list\" *ngIf=\"item.subnav\">\n                        <li class=\"n7-header__subnav-item {{subitem.classes || ''}}\" *ngFor=\"let subitem of item.subnav\">\n                            <n7-anchor-wrapper [classes]=\"'n7-header__subnav-link'\"\n                            [data]=\"subitem.anchor\"\n                            (clicked)=\"onClick($event)\">\n                                <span class=\"n7-header__subnav-icon {{subitem.icon}}\" *ngIf=\"subitem.icon\"></span>\n                                <span class=\"n7-header__subnav-label\" *ngIf=\"subitem.text\">\n                                    {{ subitem.text }}\n                                </span>\n                            </n7-anchor-wrapper>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n    </nav>\n\n    <!-- Mobile menu toggle -->\n    <div class=\"n7-header__mobile-menu-toggle\">\n        <span class=\"n7-header__mobile-menu-icon n7-icon-menu\" \n              (click)=\"onClick(data.menuToggle.open.payload)\"></span>\n    </div>\n\n    <!-- Mobile menu close -->\n    <span class=\"n7-header__mobile-menu-close n7-icon-close\" \n          (click)=\"onClick(data.menuToggle.close.payload)\"></span>\n\n    <!-- Tools: search, notifications, use profile or login/signup -->\n    <div class=\"n7-header__tools\">\n        \n        <div class=\"n7-header__search {{data.search.classes || ''}}\" *ngIf=\"data.search\">\n            <input class=\"n7-header__search-input\" \n                   type=\"search\" \n                   name=\"search\" \n                   placeholder=\"{{ data.search.hint || ''}}\" \n                   (keyup)=\"onKeyUp(data.search.payload, $event.keyCode, $event.target.value)\"/>\n            <button class=\"n7-header__search-btn\" type=\"submit\" (click)=\"onClick(data.search.payload)\">\n                <span class=\"n7-header__search-btn-label\">\n                    Search\n                </span>\n            </button>\n        </div>\n        \n        <div class=\"n7-header__actions\" *ngIf=\"data.actions\">\n            <n7-anchor-wrapper *ngFor=\"let action of data.actions\" \n            [classes]=\"'n7-header__action' + (action.classes || '')\"\n            [data]=\"action.anchor\"\n            (clicked)=\"onClick($event)\">\n                <span class=\"n7-header__action-icon {{ action.icon }}\"></span>\n                <span *ngIf=\"action.badge\" class=\"n7-header__action-badge {{ action.badge.text ? 'has-text' : '' }}\">\n                    {{ action.badge.text }}\n                </span>\n            </n7-anchor-wrapper>\n        </div>\n\n        <div class=\"n7-header__user {{data.user.classes || ''}}\" *ngIf=\"data.user\">\n            <n7-anchor-wrapper [classes]=\"'n7-header__user-wrapper'\"\n            [data]=\"data.user.anchor\"\n            (clicked)=\"onClick($event)\">\n                <img *ngIf=\"data.user.img\"\n                class=\"n7-header__user-img\"  \n                [src]=\"data.user.img\"/>\n                <p class=\"n7-header__user-name\" *ngIf=\"data.user.name\">\n                    <span class=\"n7-header__user-name-label\">\n                        {{ data.user.name }}\n                    </span>\n                </p>\n            </n7-anchor-wrapper>\n        </div>\n    </div>\n\n</header>\n\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQWFqRCxnQ0FvQkM7Ozs7OztJQWhCQywyQkFFRTs7Ozs7SUFJRiwwQkFBYTs7SUFDYiw0QkFBZTs7Ozs7SUFJZiw2QkFBaUI7Ozs7O0lBSWpCLDJCQUFZOzs7Ozs7Ozs7Ozs7Ozs7QUFlZCxnQ0FzQkM7Ozs7OztJQWxCQywwQkFBYzs7Ozs7SUFJZCwwQkFBYzs7Ozs7SUFJZCw0QkFBc0I7O0lBQ3RCLDRCQUFlOzs7OztJQUlmLDZCQUFpQjs7Ozs7SUFJakIsMkJBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBDZCxnQ0EyR0M7Ozs7OztJQXZHQywwQkFPRTs7Ozs7SUFJRix5QkFxQkU7Ozs7O0lBSUYsNEJBaUJFOzs7OztJQUlGLDZCQUF1Qjs7Ozs7SUFJdkIsMEJBa0JFOzs7OztJQUlGLGdDQU9FOzs7OztJQUlGLDZCQUFpQjs7Ozs7SUFJakIsNkJBQWM7Ozs7O0lBSWQsMkJBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQmQ7SUFBQTtJQWdDQSxDQUFDOzs7OztJQVZDLGlDQUFPOzs7O0lBQVAsVUFBUSxPQUFZO1FBQ2xCLDhCQUE4QjtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7Ozs7SUFFRCxpQ0FBTzs7Ozs7O0lBQVAsVUFBUSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUs7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDOztnQkEvQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixzZ0tBQTRCO2lCQUM3Qjs7O3VCQWVFLEtBQUs7dUJBRUwsS0FBSzs7SUFZUixzQkFBQztDQUFBLEFBaENELElBZ0NDO1NBNUJZLGVBQWU7OztJQWMxQiwrQkFBbUI7O0lBRW5CLCtCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGEgc2luZ2xlIGFjdGlvbiBpdGVtXG4gKlxuICogQHByb3BlcnR5IGljb24gKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGJhZGdlIChvcHRpb25hbClcbiAqIC0gdGV4dCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgYW5jaG9yIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uSXRlbSB7XG4gIC8qKlxuICAgKiBvcHRpb25hbCBiYWRnZSB3aXRoLCBvcHRpb25hbGx5LCBpdHMgdGV4dFxuICAgKi9cbiAgYmFkZ2U/OiB7XG4gICAgICB0ZXh0Pzogc3RyaW5nO1xuICB9O1xuICAvKipcbiAgICogaWNvbiBjbGFzc1xuICAgKi9cbiAgaWNvbjogc3RyaW5nO1xuICBhbmNob3I6IEFuY2hvcjtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvXG4gICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGEgc2luZ2xlIG5hdmJhciBpdGVtXG4gKlxuICogbm90ZTogYSBzaW5nbGUgbmF2J3MgaXRlbSBjYW4gYmUgYSB0ZXh0ICh3LyBhbmNob3IpIE9SIGEgZHJvcGRvd25cbiAqXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgc3VibmF2IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB0ZXh0IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBhbmNob3IgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOYXZiYXJJdGVtIHtcbiAgLyoqXG4gICAqIHRleHQgb2YgYSBzaW5nbGUgaXRlbSBvZiB0aGUgbmF2YmFyICh0ZXh0IGFuZCBwYXlsb2FkIGFyZSBjb25uZWN0ZWQpXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICogaWNvbiBmb3IgYSBzaW5nbGUgaXRlbSBvZiB0aGUgbmF2YmFyIChhc3NvY2lhdGVkIHRvIFwidGV4dFwiKVxuICAgKi9cbiAgaWNvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIHNlY29uZCBsZXZlbCBuYXZpZ2F0aW9uXG4gICAqL1xuICBzdWJuYXY/OiBOYXZiYXJJdGVtW107XG4gIGFuY2hvcjogQW5jaG9yO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgSGVhZGVyQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgbG9nbyAocmVxdWlyZWQpXG4gKiAtIHRpdGxlIChyZXF1aXJlZClcbiAqIC0gaW1hZ2UgKG9wdGlvbmFsKVxuICogLSBzdWJ0aXRsZSAob3B0aW9uYWwpXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxuICogLSBwYXlsb2FkIChvcHRpb25hbClcbiAqIC0gYW5jaG9yIChvcHRpb25hbClcbiAqIEBwcm9wcnR5IG1lbnVUb2dnbGUgKHJlcXVpcmVkKVxuICogLSBvcGVuIChyZXF1aXJlZClcbiAqIC0gLSBwYXlsb2FkIChyZXF1aXJlZClcbiAqIC0gY2xvc2VuIChyZXF1aXJlZClcbiAqIC0gLSBwYXlsb2FkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBhY3Rpb25zIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBuYXYgKG9wdGlvbmFsKVxuICogLSBpdGVtcyAocmVxdWlyZWQpXG4gKiAtIGlzQmVsb3cgKG9wdGlvbmFsKVxuICogLSBjbGFzc2VzIChvcHRpb25hbClcbiAqIC0gcGF5bG9hZCAob3B0aW9uYWwpXG4gKiAtIGFuY2hvciAob3B0aW9uYWwpXG4gKiAtIF9tZXRhIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBzZWFyY2ggKG9wdGlvbmFsKVxuICogLSBoaW50IChvcHRpb25hbClcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXG4gKiAtIHBheWxvYWQgKG9wdGlvbmFsKVxuICogLSBfbWV0YSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdXNlciAob3B0aW9uYWwpXG4gKiAtIGltYWdlIChvcHRpb25hbClcbiAqIC0gbmFtZSAob3B0aW9uYWwpXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxuICogLSBwYXlsb2FkIChvcHRpb25hbClcbiAqIC0gYW5jaG9yIChvcHRpb25hbClcbiAqIC0gX21ldGEgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBIZWFkZXJEYXRhIHtcbiAgLyoqXG4gICAqIGxvZ28gYW5kIHRpdGxlIGFyZWEgcGFyYW1ldGVyc1xuICAgKi9cbiAgbG9nbzoge1xuICAgIGltYWdlPzogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgc3VidGl0bGU/OiBzdHJpbmc7XG4gICAgY2xhc3Nlcz86IHN0cmluZztcbiAgICBwYXlsb2FkPzogYW55O1xuICAgIGFuY2hvcjogQW5jaG9yO1xuICB9O1xuICAvKipcbiAgICogbmF2J3MgcGFyYW1ldGVyc1xuICAgKi9cbiAgbmF2Pzoge1xuICAgIC8qKlxuICAgICAqIGxpc3Qgb2YgdGhlIGl0ZW1zIGluIHRoZSBuYXZiYXJcbiAgICAgKi9cbiAgICBpdGVtczogTmF2YmFySXRlbVtdO1xuICAgIC8qKlxuICAgICAqIGZsYWcgZm9yIGRpc3BsYXkgdGhlIG5hdmJhciB1bmRlciB0aGUgaGVhZGVyIChpbnN0ZWFkIG9mIElOIHRoZSBoZWFkZXIpXG4gICAgICovXG4gICAgaXNCZWxvdz86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICAgKi9cbiAgICBjbGFzc2VzPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgICAgKi9cbiAgICBwYXlsb2FkPzogYW55O1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgICAqL1xuICAgIF9tZXRhPzogYW55O1xuICB9O1xuICAvKipcbiAgICogc2VhcmNoIHBhcmFtZXRlcnNcbiAgICovXG4gIHNlYXJjaD86IHtcbiAgICAvKipcbiAgICAgKiBoaW50ICh0ZXh0IHNob3dlZCBpbiB0aGUgaW5wdXQgYm94IHVudGlsIHNvbWV0aGluZyBpcyB3cml0ZWQgaW4gdGhlcmUpXG4gICAgICovXG4gICAgaGludD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgICAqL1xuICAgIGNsYXNzZXM/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAgICAqL1xuICAgIHBheWxvYWQ/OiBhbnk7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBpbmZvXG4gICAgICovXG4gICAgX21ldGE/OiBhbnk7XG4gIH07XG4gIC8qKlxuICAgKiBhY3Rpb24gaXRlbXNcbiAgICovXG4gIGFjdGlvbnM/OiBBY3Rpb25JdGVtW107XG4gIC8qKlxuICAgKiB1c2VyIHBhcmFtZXRlcnNcbiAgICovXG4gIHVzZXI/OiB7XG4gICAgLyoqXG4gICAgICogdXNlcidzIHByb2ZpbGUgcGljdHVyZVxuICAgICAqL1xuICAgIGltZz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiB1c2VyJ3MgcHJvZmlsZSBuYW1lXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgICAqL1xuICAgIGNsYXNzZXM/OiBzdHJpbmc7XG4gICAgYW5jaG9yOiBBbmNob3I7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBpbmZvXG4gICAgICovXG4gICAgX21ldGE/OiBhbnk7XG4gIH07XG4gIC8qKlxuICAgKiBtZW51IHRvZ2dsZSBmb3IgbW9iaWxlXG4gICAqL1xuICBtZW51VG9nZ2xlOiB7XG4gICAgb3Blbjoge1xuICAgICAgcGF5bG9hZDogYW55O1xuICAgIH07XG4gICAgY2xvc2U6IHtcbiAgICAgIHBheWxvYWQ6IGFueTtcbiAgICB9O1xuICB9O1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAqL1xuICBwYXlsb2FkPzogYW55O1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvXG4gICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4gKiBIZWFkZXJDb21wb25lbnQgPG43LWhlYWRlcj5cbiAqXG4gKiBAc3RydWN0dXJlXG4gKiAgPj4gIGNwbSA9IGl0IGhhcyBDbGFzc2VzLCBQYXlsb2FkLCBNZXRhZGF0YSAgPDxcbiAqICA+PiAgLXAtID0gaXQgaGFzIG9ubHkgUGF5bG9hZCAgICAgICAgICAgICAgICA8PFxuICogID4+ICArLS0gPSBzdWItbWVtYmVyICAgICAgICAgICAgICAgICAgICAgICAgIDw8XG4gKiAgPj4gICstLS0+ID0gYXJyYXkgICAgICAgICAgICAgICAgICAgICAgICAgICAgPDxcbiAqXG4gKiAgZGF0YSAoY3BtKVxuICogICAgKy0tIGFjdGlvbnNcbiAqICAgICAgICAgICstLS0+IGFjdGlvbiAoY3BtKVxuICogICAgICAgICAgICAgICAgICArLS0gYmFkZ2VcbiAqICAgICstLSBsb2dvIChjcC0pXG4gKiAgICArLS0gbWVudVRvZ2dsZVxuICogICAgICAgICAgKy0tIG9wZW4gKC1wLSlcbiAqICAgICAgICAgICstLSBjbG9zZSAoLXAtKVxuICogICAgKy0tIG5hdiAoY3BtKVxuICogICAgICAgICAgKy0tLT4gaXRlbXNcbiAqICAgICstLSBzZWFyY2ggKGNwbSlcbiAqICAgICstLSB1c2VyIChjcG0pXG4gKlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCB7XG4gIC8qXG4gICAgPj4gICAgY3BtID0gaXQgaGFzIENsYXNzZXMsIFBheWxvYWQsIE1ldGFkYXRhICAgPDxcbiAgICA+PiAgICAtcC0gPSBpdCBoYXMgb25seSBQYXlsb2FkICAgICAgICAgICAgICAgICA8PFxuXG4gICAgZGF0YSAoY3BtKVxuICAgICAgKy0tLS0gcGFyYW1zIChjcG0pXG4gICAgICArLS0tLSBuYXYgKGNwbSlcbiAgICAgICAgICAgICAgICArLS0tLSBpdGVtcyAoY3BtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICArLS0tLSBkcm9wZG93bkRhdGEgKGNwbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKy0tLS0gbGlzdCAoLXAtKVxuICAgICAgKy0tLS0gc2VhcmNoIChjcG0pXG4gICAgICArLS0tLSB1c2VyIChjcG0pXG4gICovXG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DbGljayhwYXlsb2FkOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0eXBlLCBwYXlsb2FkKTtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxuXG4gIG9uS2V5VXAocGF5bG9hZCwga2V5Q29kZSwgdmFsdWUpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgna2V5dXAnLCB7IHBheWxvYWQsIGtleUNvZGUsIHZhbHVlIH0pO1xuICB9XG59XG4iXX0=