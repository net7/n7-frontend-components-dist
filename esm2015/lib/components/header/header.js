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
                template: "<header *ngIf=\"data\" class=\"n7-header {{data.classes || ''}}\">\n    \n    <!-- Logo and title -->\n    <div class=\"n7-header__logo-title {{data.logo.classes || ''}}\">\n        <a class=\"n7-header__logo-link\" (click)=\"onClick(data.logo.payload)\">\n            <img class=\"n7-header__logo\"\n                *ngIf=\"data.logo.image\"\n                [src]=\"data.logo.image\"\n                alt=\"{{ data.logo.title }}\" />\n            <div class=\"n7-header__title-subtitle\">\n                <h1 class=\"n7-header__title\">\n                    {{ data.logo.title }}\n                </h1>\n                <h2 class=\"n7-header__subtitle\" *ngIf=\"data.logo.subtitle\">\n                    {{ data.logo.subtitle }}\n                </h2>\n            </div>\n        </a>\n    </div>\n\n    <!-- Main menu -->\n    <nav class=\"n7-header__nav {{data.nav.classes || ''}}\" *ngIf=\"data.nav\">\n        <div class=\"n7-header__nav-content\">\n            <ul class=\"n7-header__nav-list\">\n                <li class=\"n7-header__nav-item {{item.classes || ''}}\" *ngFor=\"let item of data.nav.items\">\n                    <a class=\"n7-header__nav-link\" *ngIf=\"item.payload\" (click)=\"onClick(item.payload)\">\n                        <span class=\"n7-header__nav-icon {{item.icon}}\" *ngIf=\"item.icon\"></span>\n                        <span class=\"n7-header__nav-label\" *ngIf=\"item.text\">\n                            {{ item.text }}\n                        </span>\n                    </a>\n\n                    <!-- Sublevel -->\n                    <ul class=\"n7-header__subnav-list\" *ngIf=\"item.subnav\">\n                        <li class=\"n7-header__subnav-item {{subitem.classes || ''}}\" *ngFor=\"let subitem of item.subnav\">\n                            <a class=\"n7-header__subnav-link\" (click)=\"onClick(subitem.payload)\">\n                                <span class=\"n7-header__subnav-icon {{subitem.icon}}\" *ngIf=\"subitem.icon\"></span>\n                                <span class=\"n7-header__subnav-label\" *ngIf=\"subitem.text\">\n                                    {{ subitem.text }}\n                                </span>\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n    </nav>\n\n    <!-- Mobile menu toggle -->\n    <div class=\"n7-header__mobile-menu-toggle\">\n        <span class=\"n7-header__mobile-menu-icon n7-icon-menu\" \n              (click)=\"onClick(data.menuToggle.open.payload)\"></span>\n    </div>\n\n    <!-- Mobile menu close -->\n    <span class=\"n7-header__mobile-menu-close n7-icon-close\" \n          (click)=\"onClick(data.menuToggle.close.payload)\"></span>\n\n    <!-- Tools: search, notifications, use profile or login/signup -->\n    <div class=\"n7-header__tools\">\n        \n        <div class=\"n7-header__search {{data.search.classes || ''}}\" *ngIf=\"data.search\">\n            <input class=\"n7-header__search-input\" \n                   type=\"search\" \n                   name=\"search\" \n                   placeholder=\"{{ data.search.hint || ''}}\" \n                   (keyup)=\"onKeyUp(data.search.payload, $event.keyCode, $event.target.value)\"/>\n            <button class=\"n7-header__search-btn\" type=\"submit\" (click)=\"onClick(data.search.payload)\">\n                <span class=\"n7-header__search-btn-label\">\n                    Search\n                </span>\n            </button>\n        </div>\n        \n        <div class=\"n7-header__actions\" *ngIf=\"data.actions\">\n            <div class=\"n7-header__action {{ action.classes || '' }}\" *ngFor=\"let action of data.actions\">\n                <span class=\"n7-header__action-icon {{ action.icon }}\" (click)=\"onClick(action.payload)\"></span>\n                <span class=\"n7-header__action-badge {{ action.badge.text ? 'has-text' : '' }}\" *ngIf=\"action.badge\">\n                    {{ action.badge.text }}\n                </span>\n            </div>\n        </div>\n\n        <div class=\"n7-header__user {{data.user.classes || ''}}\" *ngIf=\"data.user\">\n            <img class=\"n7-header__user-img\" \n                 *ngIf=\"data.user.img\" \n                 [src]=\"data.user.img\" \n                 (click)=\"onClick(data.user.payload)\"/>\n            <p class=\"n7-header__user-name\" *ngIf=\"data.user.name\">\n                <span class=\"n7-header__user-name-label\">\n                    {{ data.user.name }}\n                </span>\n            </p>\n        </div>\n    </div>\n\n</header>\n\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQVlqRCxpQ0F1QkM7Ozs7OztJQW5CQyw0QkFFRTs7Ozs7SUFJRiwyQkFBYTs7Ozs7SUFJYiw4QkFBaUI7Ozs7O0lBSWpCLDhCQUFhOzs7OztJQUliLDRCQUFZOzs7Ozs7Ozs7Ozs7Ozs7QUFlZCxpQ0F5QkM7Ozs7OztJQXJCQywyQkFBYzs7Ozs7SUFJZCwyQkFBYzs7Ozs7SUFJZCw2QkFBdUI7Ozs7O0lBSXZCLDhCQUFpQjs7Ozs7SUFJakIsOEJBQWE7Ozs7O0lBSWIsNEJBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVDZCxpQ0E2R0M7Ozs7OztJQXpHQywyQkFNRTs7Ozs7SUFJRiwwQkFxQkU7Ozs7O0lBSUYsNkJBaUJFOzs7OztJQUlGLDhCQUF3Qjs7Ozs7SUFJeEIsMkJBcUJFOzs7OztJQUlGLGlDQU9FOzs7OztJQUlGLDhCQUFpQjs7Ozs7SUFJakIsOEJBQWM7Ozs7O0lBSWQsNEJBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QmQsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBaUIxQixPQUFPLENBQUMsT0FBWTtRQUNsQiw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7O0lBRUQsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7OztZQTlCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLG9oSkFBNEI7YUFDN0I7OzttQkFlRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETiwrQkFBbUI7O0lBQ25CLCtCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGEgc2luZ2xlIGFjdGlvbiBpdGVtXG4gKiBcbiAqIEBwcm9wZXJ0eSBpY29uIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBiYWRnZSAob3B0aW9uYWwpXG4gKiAtIHRleHQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJQWN0aW9uSXRlbSB7XG4gIC8qKlxuICAgKiBvcHRpb25hbCBiYWRnZSB3aXRoLCBvcHRpb25hbGx5LCBpdHMgdGV4dFxuICAgKi9cbiAgYmFkZ2U/OiB7XG4gICAgICB0ZXh0Pzogc3RyaW5nO1xuICB9O1xuICAvKipcbiAgICogaWNvbiBjbGFzc1xuICAgKi9cbiAgaWNvbjogc3RyaW5nO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAqL1xuICBwYXlsb2FkOiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgbmF2YmFyIGl0ZW1cbiAqIFxuICogbm90ZTogYSBzaW5nbGUgbmF2J3MgaXRlbSBjYW4gYmUgYSB0ZXh0ICh3LyBsaW5rKSBPUiBhIGRyb3Bkb3duXG4gKiBcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBzdWJuYXYgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHRleHQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJTmF2YmFySXRlbSB7XG4gIC8qKlxuICAgKiB0ZXh0IG9mIGEgc2luZ2xlIGl0ZW0gb2YgdGhlIG5hdmJhciAodGV4dCBhbmQgcGF5bG9hZCBhcmUgY29ubmVjdGVkKVxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIGljb24gZm9yIGEgc2luZ2xlIGl0ZW0gb2YgdGhlIG5hdmJhciAoYXNzb2NpYXRlZCB0byBcInRleHRcIilcbiAgICovXG4gIGljb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBzZWNvbmQgbGV2ZWwgbmF2aWdhdGlvblxuICAgKi9cbiAgc3VibmF2PzogSU5hdmJhckl0ZW1bXTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZDogYW55O1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvXG4gICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEhlYWRlckNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKiBcbiAqIEBwcm9wZXJ0eSBsb2dvIChyZXF1aXJlZClcbiAqIC0gdGl0bGUgKHJlcXVpcmVkKVxuICogLSBpbWFnZSAob3B0aW9uYWwpXG4gKiAtIHN1YnRpdGxlIChvcHRpb25hbClcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXG4gKiAtIHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BydHkgbWVudVRvZ2dsZSAocmVxdWlyZWQpXG4gKiAtIG9wZW4gKHJlcXVpcmVkKVxuICogLSAtIHBheWxvYWQgKHJlcXVpcmVkKVxuICogLSBjbG9zZW4gKHJlcXVpcmVkKVxuICogLSAtIHBheWxvYWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGFjdGlvbnMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IG5hdiAob3B0aW9uYWwpXG4gKiAtIGl0ZW1zIChyZXF1aXJlZClcbiAqIC0gaXNCZWxvdyAob3B0aW9uYWwpXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxuICogLSBwYXlsb2FkIChvcHRpb25hbClcbiAqIC0gX21ldGEgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHNlYXJjaCAob3B0aW9uYWwpXG4gKiAtIGhpbnQgKG9wdGlvbmFsKVxuICogLSBjbGFzc2VzIChvcHRpb25hbClcbiAqIC0gcGF5bG9hZCAob3B0aW9uYWwpXG4gKiAtIF9tZXRhIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB1c2VyIChvcHRpb25hbClcbiAqIC0gaW1hZ2UgKG9wdGlvbmFsKVxuICogLSBuYW1lIChvcHRpb25hbClcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXG4gKiAtIHBheWxvYWQgKG9wdGlvbmFsKVxuICogLSBfbWV0YSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElIZWFkZXJEYXRhIHtcbiAgLyoqXG4gICAqIGxvZ28gYW5kIHRpdGxlIGFyZWEgcGFyYW1ldGVyc1xuICAgKi9cbiAgbG9nbzoge1xuICAgIGltYWdlPzogc3RyaW5nLFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgc3VidGl0bGU/OiBzdHJpbmcsXG4gICAgY2xhc3Nlcz86IHN0cmluZyxcbiAgICBwYXlsb2FkPzogYW55LFxuICB9O1xuICAvKipcbiAgICogbmF2J3MgcGFyYW1ldGVyc1xuICAgKi9cbiAgbmF2Pzoge1xuICAgIC8qKlxuICAgICAqIGxpc3Qgb2YgdGhlIGl0ZW1zIGluIHRoZSBuYXZiYXJcbiAgICAgKi9cbiAgICBpdGVtczogSU5hdmJhckl0ZW1bXTtcbiAgICAvKipcbiAgICAgKiBmbGFnIGZvciBkaXNwbGF5IHRoZSBuYXZiYXIgdW5kZXIgdGhlIGhlYWRlciAoaW5zdGVhZCBvZiBJTiB0aGUgaGVhZGVyKVxuICAgICAqL1xuICAgIGlzQmVsb3c/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAgICovXG4gICAgY2xhc3Nlcz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAgICovXG4gICAgcGF5bG9hZD86IGFueTtcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICAgKi9cbiAgICBfbWV0YT86IGFueTtcbiAgfTtcbiAgLyoqXG4gICAqIHNlYXJjaCBwYXJhbWV0ZXJzXG4gICAqL1xuICBzZWFyY2g/OiB7XG4gICAgLyoqXG4gICAgICogaGludCAodGV4dCBzaG93ZWQgaW4gdGhlIGlucHV0IGJveCB1bnRpbCBzb21ldGhpbmcgaXMgd3JpdGVkIGluIHRoZXJlKVxuICAgICAqL1xuICAgIGhpbnQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICAgKi9cbiAgICBjbGFzc2VzPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgICAgKi9cbiAgICBwYXlsb2FkPzogYW55O1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgICAqL1xuICAgIF9tZXRhPzogYW55O1xuICB9O1xuICAvKipcbiAgICogYWN0aW9uIGl0ZW1zXG4gICAqL1xuICBhY3Rpb25zPzogSUFjdGlvbkl0ZW1bXTtcbiAgLyoqXG4gICAqIHVzZXIgcGFyYW1ldGVyc1xuICAgKi9cbiAgdXNlcj86IHtcbiAgICAvKipcbiAgICAgKiB1c2VyJ3MgcHJvZmlsZSBwaWN0dXJlXG4gICAgICovXG4gICAgaW1nPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIHVzZXIncyBwcm9maWxlIG5hbWVcbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAgICovXG4gICAgY2xhc3Nlcz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAgICovXG4gICAgcGF5bG9hZD86IGFueTtcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICAgKi9cbiAgICBfbWV0YT86IGFueTtcbiAgfTtcbiAgLyoqXG4gICAqIG1lbnUgdG9nZ2xlIGZvciBtb2JpbGVcbiAgICovXG4gIG1lbnVUb2dnbGU6IHtcbiAgICBvcGVuOiB7XG4gICAgICBwYXlsb2FkOiBhbnlcbiAgICB9LFxuICAgIGNsb3NlOiB7XG4gICAgICBwYXlsb2FkOiBhbnlcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgICovXG4gIHBheWxvYWQ/OiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEhlYWRlckNvbXBvbmVudCA8bjctaGVhZGVyPlxuICogXG4gKiBAc3RydWN0dXJlXG4gKiAgPj4gIGNwbSA9IGl0IGhhcyBDbGFzc2VzLCBQYXlsb2FkLCBNZXRhZGF0YSAgPDxcbiAqICA+PiAgLXAtID0gaXQgaGFzIG9ubHkgUGF5bG9hZCAgICAgICAgICAgICAgICA8PFxuICogID4+ICArLS0gPSBzdWItbWVtYmVyICAgICAgICAgICAgICAgICAgICAgICAgIDw8XG4gKiAgPj4gICstLS0+ID0gYXJyYXkgICAgICAgICAgICAgICAgICAgICAgICAgICAgPDxcbiAqXG4gKiAgZGF0YSAoY3BtKVxuICogICAgKy0tIGFjdGlvbnNcbiAqICAgICAgICAgICstLS0+IGFjdGlvbiAoY3BtKVxuICogICAgICAgICAgICAgICAgICArLS0gYmFkZ2VcbiAqICAgICstLSBsb2dvIChjcC0pXG4gKiAgICArLS0gbWVudVRvZ2dsZVxuICogICAgICAgICAgKy0tIG9wZW4gKC1wLSlcbiAqICAgICAgICAgICstLSBjbG9zZSAoLXAtKVxuICogICAgKy0tIG5hdiAoY3BtKVxuICogICAgICAgICAgKy0tLT4gaXRlbXNcbiAqICAgICstLSBzZWFyY2ggKGNwbSlcbiAqICAgICstLSB1c2VyIChjcG0pXG4gKiAgIFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCB7XG4gIC8qXG4gICAgPj4gICAgY3BtID0gaXQgaGFzIENsYXNzZXMsIFBheWxvYWQsIE1ldGFkYXRhICAgPDxcbiAgICA+PiAgICAtcC0gPSBpdCBoYXMgb25seSBQYXlsb2FkICAgICAgICAgICAgICAgICA8PFxuXG4gICAgZGF0YSAoY3BtKVxuICAgICAgKy0tLS0gcGFyYW1zIChjcG0pXG4gICAgICArLS0tLSBuYXYgKGNwbSlcbiAgICAgICAgICAgICAgICArLS0tLSBpdGVtcyAoY3BtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICArLS0tLSBkcm9wZG93bkRhdGEgKGNwbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKy0tLS0gbGlzdCAoLXAtKVxuICAgICAgKy0tLS0gc2VhcmNoIChjcG0pXG4gICAgICArLS0tLSB1c2VyIChjcG0pXG4gICovXG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2xpY2socGF5bG9hZDogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2codHlwZSwgcGF5bG9hZCk7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cblxuICBvbktleVVwKHBheWxvYWQsIGtleUNvZGUsIHZhbHVlKXtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgna2V5dXAnLCB7cGF5bG9hZCwga2V5Q29kZSwgdmFsdWV9KTtcbiAgfVxufSJdfQ==