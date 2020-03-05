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
                    template: "<header *ngIf=\"data\" class=\"n7-header {{data.classes || ''}}\">\r\n    \r\n    <!-- Logo and title -->\r\n    <div class=\"n7-header__logo-title {{data.logo.classes || ''}}\">\r\n        <n7-anchor-wrapper [classes]=\"'n7-header__logo-link'\"\r\n        [data]=\"data.logo.anchor\"\r\n        (clicked)=\"onClick($event)\">\r\n            <img class=\"n7-header__logo\"\r\n            *ngIf=\"data.logo.image\"\r\n            [src]=\"data.logo.image\"\r\n            alt=\"{{ data.logo.title }}\" />\r\n            <div class=\"n7-header__title-subtitle\">\r\n                <h1 class=\"n7-header__title\">\r\n                    {{ data.logo.title }}\r\n                </h1>\r\n                <h2 class=\"n7-header__subtitle\" *ngIf=\"data.logo.subtitle\">\r\n                    {{ data.logo.subtitle }}\r\n                </h2>\r\n            </div>\r\n        </n7-anchor-wrapper>\r\n    </div>\r\n\r\n    <!-- Main menu -->\r\n    <nav class=\"n7-header__nav {{data.nav.classes || ''}}\" *ngIf=\"data.nav\">\r\n        <div class=\"n7-header__nav-content\">\r\n            <ul class=\"n7-header__nav-list\">\r\n                <li class=\"n7-header__nav-item {{item.classes || ''}}\" *ngFor=\"let item of data.nav.items\">\r\n                    <n7-anchor-wrapper [classes]=\"'n7-header__nav-link'\"\r\n                    [data]=\"item.anchor\"\r\n                    (clicked)=\"onClick($event)\">\r\n                        <span class=\"n7-header__nav-icon {{item.icon}}\" *ngIf=\"item.icon\"></span>\r\n                        <span class=\"n7-header__nav-label\" *ngIf=\"item.text\">\r\n                            {{ item.text }}\r\n                        </span>\r\n                    </n7-anchor-wrapper>\r\n                    <!-- Sublevel -->\r\n                    <ul class=\"n7-header__subnav-list\" *ngIf=\"item.subnav\">\r\n                        <li class=\"n7-header__subnav-item {{subitem.classes || ''}}\" *ngFor=\"let subitem of item.subnav\">\r\n                            <n7-anchor-wrapper [classes]=\"'n7-header__subnav-link'\"\r\n                            [data]=\"subitem.anchor\"\r\n                            (clicked)=\"onClick($event)\">\r\n                                <span class=\"n7-header__subnav-icon {{subitem.icon}}\" *ngIf=\"subitem.icon\"></span>\r\n                                <span class=\"n7-header__subnav-label\" *ngIf=\"subitem.text\">\r\n                                    {{ subitem.text }}\r\n                                </span>\r\n                            </n7-anchor-wrapper>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n\r\n    <!-- Mobile menu toggle -->\r\n    <div class=\"n7-header__mobile-menu-toggle\">\r\n        <span class=\"n7-header__mobile-menu-icon n7-icon-menu\" \r\n              (click)=\"onClick(data.menuToggle.open.payload)\"></span>\r\n    </div>\r\n\r\n    <!-- Mobile menu close -->\r\n    <span class=\"n7-header__mobile-menu-close n7-icon-close\" \r\n          (click)=\"onClick(data.menuToggle.close.payload)\"></span>\r\n\r\n    <!-- Tools: search, notifications, use profile or login/signup -->\r\n    <div class=\"n7-header__tools\">\r\n        \r\n        <div class=\"n7-header__search {{data.search.classes || ''}}\" *ngIf=\"data.search\">\r\n            <input class=\"n7-header__search-input\" \r\n                   type=\"search\" \r\n                   name=\"search\" \r\n                   placeholder=\"{{ data.search.hint || ''}}\" \r\n                   (keyup)=\"onKeyUp(data.search.payload, $event.keyCode, $event.target.value)\"/>\r\n            <button class=\"n7-header__search-btn\" type=\"submit\" (click)=\"onClick(data.search.payload)\">\r\n                <span class=\"n7-header__search-btn-label\">\r\n                    Search\r\n                </span>\r\n            </button>\r\n        </div>\r\n        \r\n        <div class=\"n7-header__actions\" *ngIf=\"data.actions\">\r\n            <n7-anchor-wrapper *ngFor=\"let action of data.actions\" \r\n            [classes]=\"'n7-header__action' + (action.classes || '')\"\r\n            [data]=\"action.anchor\"\r\n            (clicked)=\"onClick($event)\">\r\n                <span class=\"n7-header__action-icon {{ action.icon }}\"></span>\r\n                <span *ngIf=\"action.badge\" class=\"n7-header__action-badge {{ action.badge.text ? 'has-text' : '' }}\">\r\n                    {{ action.badge.text }}\r\n                </span>\r\n            </n7-anchor-wrapper>\r\n        </div>\r\n\r\n        <div class=\"n7-header__user {{data.user.classes || ''}}\" *ngIf=\"data.user\">\r\n            <n7-anchor-wrapper [classes]=\"'n7-header__user-wrapper'\"\r\n            [data]=\"data.user.anchor\"\r\n            (clicked)=\"onClick($event)\">\r\n                <img *ngIf=\"data.user.img\"\r\n                class=\"n7-header__user-img\"  \r\n                [src]=\"data.user.img\"/>\r\n                <p class=\"n7-header__user-name\" *ngIf=\"data.user.name\">\r\n                    <span class=\"n7-header__user-name-label\">\r\n                        {{ data.user.name }}\r\n                    </span>\r\n                </p>\r\n            </n7-anchor-wrapper>\r\n        </div>\r\n    </div>\r\n\r\n</header>\r\n\r\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQWFqRCxnQ0FvQkM7Ozs7OztJQWhCQywyQkFFRTs7Ozs7SUFJRiwwQkFBYTs7SUFDYiw0QkFBZTs7Ozs7SUFJZiw2QkFBaUI7Ozs7O0lBSWpCLDJCQUFZOzs7Ozs7Ozs7Ozs7Ozs7QUFlZCxnQ0FzQkM7Ozs7OztJQWxCQywwQkFBYzs7Ozs7SUFJZCwwQkFBYzs7Ozs7SUFJZCw0QkFBc0I7O0lBQ3RCLDRCQUFlOzs7OztJQUlmLDZCQUFpQjs7Ozs7SUFJakIsMkJBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBDZCxnQ0EyR0M7Ozs7OztJQXZHQywwQkFPRTs7Ozs7SUFJRix5QkFxQkU7Ozs7O0lBSUYsNEJBaUJFOzs7OztJQUlGLDZCQUF1Qjs7Ozs7SUFJdkIsMEJBa0JFOzs7OztJQUlGLGdDQU9FOzs7OztJQUlGLDZCQUFpQjs7Ozs7SUFJakIsNkJBQWM7Ozs7O0lBSWQsMkJBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQmQ7SUFBQTtJQWdDQSxDQUFDOzs7OztJQVZDLGlDQUFPOzs7O0lBQVAsVUFBUSxPQUFZO1FBQ2xCLDhCQUE4QjtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7Ozs7SUFFRCxpQ0FBTzs7Ozs7O0lBQVAsVUFBUSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUs7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDOztnQkEvQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixndUtBQTRCO2lCQUM3Qjs7O3VCQWVFLEtBQUs7dUJBRUwsS0FBSzs7SUFZUixzQkFBQztDQUFBLEFBaENELElBZ0NDO1NBNUJZLGVBQWU7OztJQWMxQiwrQkFBbUI7O0lBRW5CLCtCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQW5jaG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkLWludGVyZmFjZXMnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgYWN0aW9uIGl0ZW1cclxuICpcclxuICogQHByb3BlcnR5IGljb24gKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgYmFkZ2UgKG9wdGlvbmFsKVxyXG4gKiAtIHRleHQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBhbmNob3IgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25JdGVtIHtcclxuICAvKipcclxuICAgKiBvcHRpb25hbCBiYWRnZSB3aXRoLCBvcHRpb25hbGx5LCBpdHMgdGV4dFxyXG4gICAqL1xyXG4gIGJhZGdlPzoge1xyXG4gICAgICB0ZXh0Pzogc3RyaW5nO1xyXG4gIH07XHJcbiAgLyoqXHJcbiAgICogaWNvbiBjbGFzc1xyXG4gICAqL1xyXG4gIGljb246IHN0cmluZztcclxuICBhbmNob3I6IEFuY2hvcjtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGEgc2luZ2xlIG5hdmJhciBpdGVtXHJcbiAqXHJcbiAqIG5vdGU6IGEgc2luZ2xlIG5hdidzIGl0ZW0gY2FuIGJlIGEgdGV4dCAody8gYW5jaG9yKSBPUiBhIGRyb3Bkb3duXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHN1Ym5hdiAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgYW5jaG9yIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmF2YmFySXRlbSB7XHJcbiAgLyoqXHJcbiAgICogdGV4dCBvZiBhIHNpbmdsZSBpdGVtIG9mIHRoZSBuYXZiYXIgKHRleHQgYW5kIHBheWxvYWQgYXJlIGNvbm5lY3RlZClcclxuICAgKi9cclxuICB0ZXh0Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGljb24gZm9yIGEgc2luZ2xlIGl0ZW0gb2YgdGhlIG5hdmJhciAoYXNzb2NpYXRlZCB0byBcInRleHRcIilcclxuICAgKi9cclxuICBpY29uPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHNlY29uZCBsZXZlbCBuYXZpZ2F0aW9uXHJcbiAgICovXHJcbiAgc3VibmF2PzogTmF2YmFySXRlbVtdO1xyXG4gIGFuY2hvcjogQW5jaG9yO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgSGVhZGVyQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGxvZ28gKHJlcXVpcmVkKVxyXG4gKiAtIHRpdGxlIChyZXF1aXJlZClcclxuICogLSBpbWFnZSAob3B0aW9uYWwpXHJcbiAqIC0gc3VidGl0bGUgKG9wdGlvbmFsKVxyXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiAtIHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiAtIGFuY2hvciAob3B0aW9uYWwpXHJcbiAqIEBwcm9wcnR5IG1lbnVUb2dnbGUgKHJlcXVpcmVkKVxyXG4gKiAtIG9wZW4gKHJlcXVpcmVkKVxyXG4gKiAtIC0gcGF5bG9hZCAocmVxdWlyZWQpXHJcbiAqIC0gY2xvc2VuIChyZXF1aXJlZClcclxuICogLSAtIHBheWxvYWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgYWN0aW9ucyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBuYXYgKG9wdGlvbmFsKVxyXG4gKiAtIGl0ZW1zIChyZXF1aXJlZClcclxuICogLSBpc0JlbG93IChvcHRpb25hbClcclxuICogLSBjbGFzc2VzIChvcHRpb25hbClcclxuICogLSBwYXlsb2FkIChvcHRpb25hbClcclxuICogLSBhbmNob3IgKG9wdGlvbmFsKVxyXG4gKiAtIF9tZXRhIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHNlYXJjaCAob3B0aW9uYWwpXHJcbiAqIC0gaGludCAob3B0aW9uYWwpXHJcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIC0gcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIC0gX21ldGEgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgdXNlciAob3B0aW9uYWwpXHJcbiAqIC0gaW1hZ2UgKG9wdGlvbmFsKVxyXG4gKiAtIG5hbWUgKG9wdGlvbmFsKVxyXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiAtIHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiAtIGFuY2hvciAob3B0aW9uYWwpXHJcbiAqIC0gX21ldGEgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGVhZGVyRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogbG9nbyBhbmQgdGl0bGUgYXJlYSBwYXJhbWV0ZXJzXHJcbiAgICovXHJcbiAgbG9nbzoge1xyXG4gICAgaW1hZ2U/OiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgc3VidGl0bGU/OiBzdHJpbmc7XHJcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gICAgcGF5bG9hZD86IGFueTtcclxuICAgIGFuY2hvcjogQW5jaG9yO1xyXG4gIH07XHJcbiAgLyoqXHJcbiAgICogbmF2J3MgcGFyYW1ldGVyc1xyXG4gICAqL1xyXG4gIG5hdj86IHtcclxuICAgIC8qKlxyXG4gICAgICogbGlzdCBvZiB0aGUgaXRlbXMgaW4gdGhlIG5hdmJhclxyXG4gICAgICovXHJcbiAgICBpdGVtczogTmF2YmFySXRlbVtdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBmbGFnIGZvciBkaXNwbGF5IHRoZSBuYXZiYXIgdW5kZXIgdGhlIGhlYWRlciAoaW5zdGVhZCBvZiBJTiB0aGUgaGVhZGVyKVxyXG4gICAgICovXHJcbiAgICBpc0JlbG93PzogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgICAqL1xyXG4gICAgY2xhc3Nlcz86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICAgICovXHJcbiAgICBwYXlsb2FkPzogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgICAqL1xyXG4gICAgX21ldGE/OiBhbnk7XHJcbiAgfTtcclxuICAvKipcclxuICAgKiBzZWFyY2ggcGFyYW1ldGVyc1xyXG4gICAqL1xyXG4gIHNlYXJjaD86IHtcclxuICAgIC8qKlxyXG4gICAgICogaGludCAodGV4dCBzaG93ZWQgaW4gdGhlIGlucHV0IGJveCB1bnRpbCBzb21ldGhpbmcgaXMgd3JpdGVkIGluIHRoZXJlKVxyXG4gICAgICovXHJcbiAgICBoaW50Pzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAgICovXHJcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXHJcbiAgICAgKi9cclxuICAgIHBheWxvYWQ/OiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaW5mb1xyXG4gICAgICovXHJcbiAgICBfbWV0YT86IGFueTtcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIGFjdGlvbiBpdGVtc1xyXG4gICAqL1xyXG4gIGFjdGlvbnM/OiBBY3Rpb25JdGVtW107XHJcbiAgLyoqXHJcbiAgICogdXNlciBwYXJhbWV0ZXJzXHJcbiAgICovXHJcbiAgdXNlcj86IHtcclxuICAgIC8qKlxyXG4gICAgICogdXNlcidzIHByb2ZpbGUgcGljdHVyZVxyXG4gICAgICovXHJcbiAgICBpbWc/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIHVzZXIncyBwcm9maWxlIG5hbWVcclxuICAgICAqL1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgICAqL1xyXG4gICAgY2xhc3Nlcz86IHN0cmluZztcclxuICAgIGFuY2hvcjogQW5jaG9yO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgICAqL1xyXG4gICAgX21ldGE/OiBhbnk7XHJcbiAgfTtcclxuICAvKipcclxuICAgKiBtZW51IHRvZ2dsZSBmb3IgbW9iaWxlXHJcbiAgICovXHJcbiAgbWVudVRvZ2dsZToge1xyXG4gICAgb3Blbjoge1xyXG4gICAgICBwYXlsb2FkOiBhbnk7XHJcbiAgICB9O1xyXG4gICAgY2xvc2U6IHtcclxuICAgICAgcGF5bG9hZDogYW55O1xyXG4gICAgfTtcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXHJcbiAgICovXHJcbiAgcGF5bG9hZD86IGFueTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEhlYWRlckNvbXBvbmVudCA8bjctaGVhZGVyPlxyXG4gKlxyXG4gKiBAc3RydWN0dXJlXHJcbiAqICA+PiAgY3BtID0gaXQgaGFzIENsYXNzZXMsIFBheWxvYWQsIE1ldGFkYXRhICA8PFxyXG4gKiAgPj4gIC1wLSA9IGl0IGhhcyBvbmx5IFBheWxvYWQgICAgICAgICAgICAgICAgPDxcclxuICogID4+ICArLS0gPSBzdWItbWVtYmVyICAgICAgICAgICAgICAgICAgICAgICAgIDw8XHJcbiAqICA+PiAgKy0tLT4gPSBhcnJheSAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PFxyXG4gKlxyXG4gKiAgZGF0YSAoY3BtKVxyXG4gKiAgICArLS0gYWN0aW9uc1xyXG4gKiAgICAgICAgICArLS0tPiBhY3Rpb24gKGNwbSlcclxuICogICAgICAgICAgICAgICAgICArLS0gYmFkZ2VcclxuICogICAgKy0tIGxvZ28gKGNwLSlcclxuICogICAgKy0tIG1lbnVUb2dnbGVcclxuICogICAgICAgICAgKy0tIG9wZW4gKC1wLSlcclxuICogICAgICAgICAgKy0tIGNsb3NlICgtcC0pXHJcbiAqICAgICstLSBuYXYgKGNwbSlcclxuICogICAgICAgICAgKy0tLT4gaXRlbXNcclxuICogICAgKy0tIHNlYXJjaCAoY3BtKVxyXG4gKiAgICArLS0gdXNlciAoY3BtKVxyXG4gKlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1oZWFkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCB7XHJcbiAgLypcclxuICAgID4+ICAgIGNwbSA9IGl0IGhhcyBDbGFzc2VzLCBQYXlsb2FkLCBNZXRhZGF0YSAgIDw8XHJcbiAgICA+PiAgICAtcC0gPSBpdCBoYXMgb25seSBQYXlsb2FkICAgICAgICAgICAgICAgICA8PFxyXG5cclxuICAgIGRhdGEgKGNwbSlcclxuICAgICAgKy0tLS0gcGFyYW1zIChjcG0pXHJcbiAgICAgICstLS0tIG5hdiAoY3BtKVxyXG4gICAgICAgICAgICAgICAgKy0tLS0gaXRlbXMgKGNwbSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICArLS0tLSBkcm9wZG93bkRhdGEgKGNwbSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArLS0tLSBsaXN0ICgtcC0pXHJcbiAgICAgICstLS0tIHNlYXJjaCAoY3BtKVxyXG4gICAgICArLS0tLSB1c2VyIChjcG0pXHJcbiAgKi9cclxuICBASW5wdXQoKSBkYXRhOiBhbnk7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgb25DbGljayhwYXlsb2FkOiBhbnkpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHR5cGUsIHBheWxvYWQpO1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIG9uS2V5VXAocGF5bG9hZCwga2V5Q29kZSwgdmFsdWUpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2tleXVwJywgeyBwYXlsb2FkLCBrZXlDb2RlLCB2YWx1ZSB9KTtcclxuICB9XHJcbn1cclxuIl19