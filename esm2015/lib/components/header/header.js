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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQWFqRCxpQ0FvQkM7Ozs7OztJQWhCQyw0QkFFRTs7Ozs7SUFJRiwyQkFBYTs7SUFDYiw2QkFBZ0I7Ozs7O0lBSWhCLDhCQUFpQjs7Ozs7SUFJakIsNEJBQVk7Ozs7Ozs7Ozs7Ozs7OztBQWVkLGlDQXNCQzs7Ozs7O0lBbEJDLDJCQUFjOzs7OztJQUlkLDJCQUFjOzs7OztJQUlkLDZCQUF1Qjs7SUFDdkIsNkJBQWdCOzs7OztJQUloQiw4QkFBaUI7Ozs7O0lBSWpCLDRCQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQ2QsaUNBMkdDOzs7Ozs7SUF2R0MsMkJBT0U7Ozs7O0lBSUYsMEJBcUJFOzs7OztJQUlGLDZCQWlCRTs7Ozs7SUFJRiw4QkFBd0I7Ozs7O0lBSXhCLDJCQWtCRTs7Ozs7SUFJRixpQ0FPRTs7Ozs7SUFJRiw4QkFBaUI7Ozs7O0lBSWpCLDhCQUFjOzs7OztJQUlkLDRCQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJkLE1BQU0sT0FBTyxlQUFlOzs7OztJQWlCMUIsT0FBTyxDQUFDLE9BQVk7UUFDbEIsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7OztJQUVELE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUs7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7WUE5QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixzZ0tBQTRCO2FBQzdCOzs7bUJBZUUsS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sK0JBQW1COztJQUNuQiwrQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQW5jaG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkLWludGVyZmFjZXMnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgYWN0aW9uIGl0ZW1cbiAqIFxuICogQHByb3BlcnR5IGljb24gKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGJhZGdlIChvcHRpb25hbClcbiAqIC0gdGV4dCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgYW5jaG9yIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUFjdGlvbkl0ZW0ge1xuICAvKipcbiAgICogb3B0aW9uYWwgYmFkZ2Ugd2l0aCwgb3B0aW9uYWxseSwgaXRzIHRleHRcbiAgICovXG4gIGJhZGdlPzoge1xuICAgICAgdGV4dD86IHN0cmluZztcbiAgfTtcbiAgLyoqXG4gICAqIGljb24gY2xhc3NcbiAgICovXG4gIGljb246IHN0cmluZztcbiAgYW5jaG9yOiBJQW5jaG9yO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgbmF2YmFyIGl0ZW1cbiAqIFxuICogbm90ZTogYSBzaW5nbGUgbmF2J3MgaXRlbSBjYW4gYmUgYSB0ZXh0ICh3LyBhbmNob3IpIE9SIGEgZHJvcGRvd25cbiAqIFxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHN1Ym5hdiAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdGV4dCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgYW5jaG9yIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSU5hdmJhckl0ZW0ge1xuICAvKipcbiAgICogdGV4dCBvZiBhIHNpbmdsZSBpdGVtIG9mIHRoZSBuYXZiYXIgKHRleHQgYW5kIHBheWxvYWQgYXJlIGNvbm5lY3RlZClcbiAgICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBpY29uIGZvciBhIHNpbmdsZSBpdGVtIG9mIHRoZSBuYXZiYXIgKGFzc29jaWF0ZWQgdG8gXCJ0ZXh0XCIpXG4gICAqL1xuICBpY29uPzogc3RyaW5nO1xuICAvKipcbiAgICogc2Vjb25kIGxldmVsIG5hdmlnYXRpb25cbiAgICovXG4gIHN1Ym5hdj86IElOYXZiYXJJdGVtW107XG4gIGFuY2hvcjogSUFuY2hvcjtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvXG4gICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEhlYWRlckNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKiBcbiAqIEBwcm9wZXJ0eSBsb2dvIChyZXF1aXJlZClcbiAqIC0gdGl0bGUgKHJlcXVpcmVkKVxuICogLSBpbWFnZSAob3B0aW9uYWwpXG4gKiAtIHN1YnRpdGxlIChvcHRpb25hbClcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXG4gKiAtIHBheWxvYWQgKG9wdGlvbmFsKVxuICogLSBhbmNob3IgKG9wdGlvbmFsKVxuICogQHByb3BydHkgbWVudVRvZ2dsZSAocmVxdWlyZWQpXG4gKiAtIG9wZW4gKHJlcXVpcmVkKVxuICogLSAtIHBheWxvYWQgKHJlcXVpcmVkKVxuICogLSBjbG9zZW4gKHJlcXVpcmVkKVxuICogLSAtIHBheWxvYWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGFjdGlvbnMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IG5hdiAob3B0aW9uYWwpXG4gKiAtIGl0ZW1zIChyZXF1aXJlZClcbiAqIC0gaXNCZWxvdyAob3B0aW9uYWwpXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxuICogLSBwYXlsb2FkIChvcHRpb25hbClcbiAqIC0gYW5jaG9yIChvcHRpb25hbClcbiAqIC0gX21ldGEgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHNlYXJjaCAob3B0aW9uYWwpXG4gKiAtIGhpbnQgKG9wdGlvbmFsKVxuICogLSBjbGFzc2VzIChvcHRpb25hbClcbiAqIC0gcGF5bG9hZCAob3B0aW9uYWwpXG4gKiAtIF9tZXRhIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB1c2VyIChvcHRpb25hbClcbiAqIC0gaW1hZ2UgKG9wdGlvbmFsKVxuICogLSBuYW1lIChvcHRpb25hbClcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXG4gKiAtIHBheWxvYWQgKG9wdGlvbmFsKVxuICogLSBhbmNob3IgKG9wdGlvbmFsKVxuICogLSBfbWV0YSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElIZWFkZXJEYXRhIHtcbiAgLyoqXG4gICAqIGxvZ28gYW5kIHRpdGxlIGFyZWEgcGFyYW1ldGVyc1xuICAgKi9cbiAgbG9nbzoge1xuICAgIGltYWdlPzogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgc3VidGl0bGU/OiBzdHJpbmc7XG4gICAgY2xhc3Nlcz86IHN0cmluZztcbiAgICBwYXlsb2FkPzogYW55O1xuICAgIGFuY2hvcjogSUFuY2hvcjtcbiAgfTtcbiAgLyoqXG4gICAqIG5hdidzIHBhcmFtZXRlcnNcbiAgICovXG4gIG5hdj86IHtcbiAgICAvKipcbiAgICAgKiBsaXN0IG9mIHRoZSBpdGVtcyBpbiB0aGUgbmF2YmFyXG4gICAgICovXG4gICAgaXRlbXM6IElOYXZiYXJJdGVtW107XG4gICAgLyoqXG4gICAgICogZmxhZyBmb3IgZGlzcGxheSB0aGUgbmF2YmFyIHVuZGVyIHRoZSBoZWFkZXIgKGluc3RlYWQgb2YgSU4gdGhlIGhlYWRlcilcbiAgICAgKi9cbiAgICBpc0JlbG93PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgICAqL1xuICAgIGNsYXNzZXM/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAgICAqL1xuICAgIHBheWxvYWQ/OiBhbnk7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBpbmZvXG4gICAgICovXG4gICAgX21ldGE/OiBhbnk7XG4gIH07XG4gIC8qKlxuICAgKiBzZWFyY2ggcGFyYW1ldGVyc1xuICAgKi9cbiAgc2VhcmNoPzoge1xuICAgIC8qKlxuICAgICAqIGhpbnQgKHRleHQgc2hvd2VkIGluIHRoZSBpbnB1dCBib3ggdW50aWwgc29tZXRoaW5nIGlzIHdyaXRlZCBpbiB0aGVyZSlcbiAgICAgKi9cbiAgICBoaW50Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAgICovXG4gICAgY2xhc3Nlcz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAgICovXG4gICAgcGF5bG9hZD86IGFueTtcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICAgKi9cbiAgICBfbWV0YT86IGFueTtcbiAgfTtcbiAgLyoqXG4gICAqIGFjdGlvbiBpdGVtc1xuICAgKi9cbiAgYWN0aW9ucz86IElBY3Rpb25JdGVtW107XG4gIC8qKlxuICAgKiB1c2VyIHBhcmFtZXRlcnNcbiAgICovXG4gIHVzZXI/OiB7XG4gICAgLyoqXG4gICAgICogdXNlcidzIHByb2ZpbGUgcGljdHVyZVxuICAgICAqL1xuICAgIGltZz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiB1c2VyJ3MgcHJvZmlsZSBuYW1lXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgICAqL1xuICAgIGNsYXNzZXM/OiBzdHJpbmc7XG4gICAgYW5jaG9yOiBJQW5jaG9yO1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgICAqL1xuICAgIF9tZXRhPzogYW55O1xuICB9O1xuICAvKipcbiAgICogbWVudSB0b2dnbGUgZm9yIG1vYmlsZVxuICAgKi9cbiAgbWVudVRvZ2dsZToge1xuICAgIG9wZW46IHtcbiAgICAgIHBheWxvYWQ6IGFueVxuICAgIH0sXG4gICAgY2xvc2U6IHtcbiAgICAgIHBheWxvYWQ6IGFueVxuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuICogSGVhZGVyQ29tcG9uZW50IDxuNy1oZWFkZXI+XG4gKiBcbiAqIEBzdHJ1Y3R1cmVcbiAqICA+PiAgY3BtID0gaXQgaGFzIENsYXNzZXMsIFBheWxvYWQsIE1ldGFkYXRhICA8PFxuICogID4+ICAtcC0gPSBpdCBoYXMgb25seSBQYXlsb2FkICAgICAgICAgICAgICAgIDw8XG4gKiAgPj4gICstLSA9IHN1Yi1tZW1iZXIgICAgICAgICAgICAgICAgICAgICAgICAgPDxcbiAqICA+PiAgKy0tLT4gPSBhcnJheSAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PFxuICpcbiAqICBkYXRhIChjcG0pXG4gKiAgICArLS0gYWN0aW9uc1xuICogICAgICAgICAgKy0tLT4gYWN0aW9uIChjcG0pXG4gKiAgICAgICAgICAgICAgICAgICstLSBiYWRnZVxuICogICAgKy0tIGxvZ28gKGNwLSlcbiAqICAgICstLSBtZW51VG9nZ2xlXG4gKiAgICAgICAgICArLS0gb3BlbiAoLXAtKVxuICogICAgICAgICAgKy0tIGNsb3NlICgtcC0pXG4gKiAgICArLS0gbmF2IChjcG0pXG4gKiAgICAgICAgICArLS0tPiBpdGVtc1xuICogICAgKy0tIHNlYXJjaCAoY3BtKVxuICogICAgKy0tIHVzZXIgKGNwbSlcbiAqICAgXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcbiAgLypcbiAgICA+PiAgICBjcG0gPSBpdCBoYXMgQ2xhc3NlcywgUGF5bG9hZCwgTWV0YWRhdGEgICA8PFxuICAgID4+ICAgIC1wLSA9IGl0IGhhcyBvbmx5IFBheWxvYWQgICAgICAgICAgICAgICAgIDw8XG5cbiAgICBkYXRhIChjcG0pXG4gICAgICArLS0tLSBwYXJhbXMgKGNwbSlcbiAgICAgICstLS0tIG5hdiAoY3BtKVxuICAgICAgICAgICAgICAgICstLS0tIGl0ZW1zIChjcG0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICstLS0tIGRyb3Bkb3duRGF0YSAoY3BtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArLS0tLSBsaXN0ICgtcC0pXG4gICAgICArLS0tLSBzZWFyY2ggKGNwbSlcbiAgICAgICstLS0tIHVzZXIgKGNwbSlcbiAgKi9cbiAgQElucHV0KCkgZGF0YTogYW55O1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DbGljayhwYXlsb2FkOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0eXBlLCBwYXlsb2FkKTtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxuXG4gIG9uS2V5VXAocGF5bG9hZCwga2V5Q29kZSwgdmFsdWUpe1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdrZXl1cCcsIHtwYXlsb2FkLCBrZXlDb2RlLCB2YWx1ZX0pO1xuICB9XG59Il19