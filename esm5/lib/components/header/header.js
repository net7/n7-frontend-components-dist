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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQWFqRCxpQ0FvQkM7Ozs7OztJQWhCQyw0QkFFRTs7Ozs7SUFJRiwyQkFBYTs7SUFDYiw2QkFBZ0I7Ozs7O0lBSWhCLDhCQUFpQjs7Ozs7SUFJakIsNEJBQVk7Ozs7Ozs7Ozs7Ozs7OztBQWVkLGlDQXNCQzs7Ozs7O0lBbEJDLDJCQUFjOzs7OztJQUlkLDJCQUFjOzs7OztJQUlkLDZCQUF1Qjs7SUFDdkIsNkJBQWdCOzs7OztJQUloQiw4QkFBaUI7Ozs7O0lBSWpCLDRCQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQ2QsaUNBMkdDOzs7Ozs7SUF2R0MsMkJBT0U7Ozs7O0lBSUYsMEJBcUJFOzs7OztJQUlGLDZCQWlCRTs7Ozs7SUFJRiw4QkFBd0I7Ozs7O0lBSXhCLDJCQWtCRTs7Ozs7SUFJRixpQ0FPRTs7Ozs7SUFJRiw4QkFBaUI7Ozs7O0lBSWpCLDhCQUFjOzs7OztJQUlkLDRCQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJkO0lBQUE7SUErQkEsQ0FBQzs7Ozs7SUFWQyxpQ0FBTzs7OztJQUFQLFVBQVEsT0FBWTtRQUNsQiw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7O0lBRUQsaUNBQU87Ozs7OztJQUFQLFVBQVEsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBQyxPQUFPLFNBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxLQUFLLE9BQUEsRUFBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Z0JBOUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsZ3VLQUE0QjtpQkFDN0I7Ozt1QkFlRSxLQUFLO3VCQUNMLEtBQUs7O0lBWVIsc0JBQUM7Q0FBQSxBQS9CRCxJQStCQztTQTNCWSxlQUFlOzs7SUFjMUIsK0JBQW1COztJQUNuQiwrQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBhIHNpbmdsZSBhY3Rpb24gaXRlbVxyXG4gKiBcclxuICogQHByb3BlcnR5IGljb24gKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgYmFkZ2UgKG9wdGlvbmFsKVxyXG4gKiAtIHRleHQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBhbmNob3IgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQWN0aW9uSXRlbSB7XHJcbiAgLyoqXHJcbiAgICogb3B0aW9uYWwgYmFkZ2Ugd2l0aCwgb3B0aW9uYWxseSwgaXRzIHRleHRcclxuICAgKi9cclxuICBiYWRnZT86IHtcclxuICAgICAgdGV4dD86IHN0cmluZztcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIGljb24gY2xhc3NcclxuICAgKi9cclxuICBpY29uOiBzdHJpbmc7XHJcbiAgYW5jaG9yOiBJQW5jaG9yO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgbmF2YmFyIGl0ZW1cclxuICogXHJcbiAqIG5vdGU6IGEgc2luZ2xlIG5hdidzIGl0ZW0gY2FuIGJlIGEgdGV4dCAody8gYW5jaG9yKSBPUiBhIGRyb3Bkb3duXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBzdWJuYXYgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgdGV4dCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGFuY2hvciAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOYXZiYXJJdGVtIHtcclxuICAvKipcclxuICAgKiB0ZXh0IG9mIGEgc2luZ2xlIGl0ZW0gb2YgdGhlIG5hdmJhciAodGV4dCBhbmQgcGF5bG9hZCBhcmUgY29ubmVjdGVkKVxyXG4gICAqL1xyXG4gIHRleHQ/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogaWNvbiBmb3IgYSBzaW5nbGUgaXRlbSBvZiB0aGUgbmF2YmFyIChhc3NvY2lhdGVkIHRvIFwidGV4dFwiKVxyXG4gICAqL1xyXG4gIGljb24/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogc2Vjb25kIGxldmVsIG5hdmlnYXRpb25cclxuICAgKi9cclxuICBzdWJuYXY/OiBJTmF2YmFySXRlbVtdO1xyXG4gIGFuY2hvcjogSUFuY2hvcjtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEhlYWRlckNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkgbG9nbyAocmVxdWlyZWQpXHJcbiAqIC0gdGl0bGUgKHJlcXVpcmVkKVxyXG4gKiAtIGltYWdlIChvcHRpb25hbClcclxuICogLSBzdWJ0aXRsZSAob3B0aW9uYWwpXHJcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIC0gcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIC0gYW5jaG9yIChvcHRpb25hbClcclxuICogQHByb3BydHkgbWVudVRvZ2dsZSAocmVxdWlyZWQpXHJcbiAqIC0gb3BlbiAocmVxdWlyZWQpXHJcbiAqIC0gLSBwYXlsb2FkIChyZXF1aXJlZClcclxuICogLSBjbG9zZW4gKHJlcXVpcmVkKVxyXG4gKiAtIC0gcGF5bG9hZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBhY3Rpb25zIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IG5hdiAob3B0aW9uYWwpXHJcbiAqIC0gaXRlbXMgKHJlcXVpcmVkKVxyXG4gKiAtIGlzQmVsb3cgKG9wdGlvbmFsKVxyXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiAtIHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiAtIGFuY2hvciAob3B0aW9uYWwpXHJcbiAqIC0gX21ldGEgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgc2VhcmNoIChvcHRpb25hbClcclxuICogLSBoaW50IChvcHRpb25hbClcclxuICogLSBjbGFzc2VzIChvcHRpb25hbClcclxuICogLSBwYXlsb2FkIChvcHRpb25hbClcclxuICogLSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB1c2VyIChvcHRpb25hbClcclxuICogLSBpbWFnZSAob3B0aW9uYWwpXHJcbiAqIC0gbmFtZSAob3B0aW9uYWwpXHJcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIC0gcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIC0gYW5jaG9yIChvcHRpb25hbClcclxuICogLSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJSGVhZGVyRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogbG9nbyBhbmQgdGl0bGUgYXJlYSBwYXJhbWV0ZXJzXHJcbiAgICovXHJcbiAgbG9nbzoge1xyXG4gICAgaW1hZ2U/OiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgc3VidGl0bGU/OiBzdHJpbmc7XHJcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gICAgcGF5bG9hZD86IGFueTtcclxuICAgIGFuY2hvcjogSUFuY2hvcjtcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIG5hdidzIHBhcmFtZXRlcnNcclxuICAgKi9cclxuICBuYXY/OiB7XHJcbiAgICAvKipcclxuICAgICAqIGxpc3Qgb2YgdGhlIGl0ZW1zIGluIHRoZSBuYXZiYXJcclxuICAgICAqL1xyXG4gICAgaXRlbXM6IElOYXZiYXJJdGVtW107XHJcbiAgICAvKipcclxuICAgICAqIGZsYWcgZm9yIGRpc3BsYXkgdGhlIG5hdmJhciB1bmRlciB0aGUgaGVhZGVyIChpbnN0ZWFkIG9mIElOIHRoZSBoZWFkZXIpXHJcbiAgICAgKi9cclxuICAgIGlzQmVsb3c/OiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAgICovXHJcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXHJcbiAgICAgKi9cclxuICAgIHBheWxvYWQ/OiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaW5mb1xyXG4gICAgICovXHJcbiAgICBfbWV0YT86IGFueTtcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIHNlYXJjaCBwYXJhbWV0ZXJzXHJcbiAgICovXHJcbiAgc2VhcmNoPzoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBoaW50ICh0ZXh0IHNob3dlZCBpbiB0aGUgaW5wdXQgYm94IHVudGlsIHNvbWV0aGluZyBpcyB3cml0ZWQgaW4gdGhlcmUpXHJcbiAgICAgKi9cclxuICAgIGhpbnQ/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICAgKi9cclxuICAgIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcclxuICAgICAqL1xyXG4gICAgcGF5bG9hZD86IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICAgKi9cclxuICAgIF9tZXRhPzogYW55O1xyXG4gIH07XHJcbiAgLyoqXHJcbiAgICogYWN0aW9uIGl0ZW1zXHJcbiAgICovXHJcbiAgYWN0aW9ucz86IElBY3Rpb25JdGVtW107XHJcbiAgLyoqXHJcbiAgICogdXNlciBwYXJhbWV0ZXJzXHJcbiAgICovXHJcbiAgdXNlcj86IHtcclxuICAgIC8qKlxyXG4gICAgICogdXNlcidzIHByb2ZpbGUgcGljdHVyZVxyXG4gICAgICovXHJcbiAgICBpbWc/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIHVzZXIncyBwcm9maWxlIG5hbWVcclxuICAgICAqL1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgICAqL1xyXG4gICAgY2xhc3Nlcz86IHN0cmluZztcclxuICAgIGFuY2hvcjogSUFuY2hvcjtcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICAgKi9cclxuICAgIF9tZXRhPzogYW55O1xyXG4gIH07XHJcbiAgLyoqXHJcbiAgICogbWVudSB0b2dnbGUgZm9yIG1vYmlsZVxyXG4gICAqL1xyXG4gIG1lbnVUb2dnbGU6IHtcclxuICAgIG9wZW46IHtcclxuICAgICAgcGF5bG9hZDogYW55XHJcbiAgICB9LFxyXG4gICAgY2xvc2U6IHtcclxuICAgICAgcGF5bG9hZDogYW55XHJcbiAgICB9XHJcbiAgfTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICAqL1xyXG4gIHBheWxvYWQ/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBIZWFkZXJDb21wb25lbnQgPG43LWhlYWRlcj5cclxuICogXHJcbiAqIEBzdHJ1Y3R1cmVcclxuICogID4+ICBjcG0gPSBpdCBoYXMgQ2xhc3NlcywgUGF5bG9hZCwgTWV0YWRhdGEgIDw8XHJcbiAqICA+PiAgLXAtID0gaXQgaGFzIG9ubHkgUGF5bG9hZCAgICAgICAgICAgICAgICA8PFxyXG4gKiAgPj4gICstLSA9IHN1Yi1tZW1iZXIgICAgICAgICAgICAgICAgICAgICAgICAgPDxcclxuICogID4+ICArLS0tPiA9IGFycmF5ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw8XHJcbiAqXHJcbiAqICBkYXRhIChjcG0pXHJcbiAqICAgICstLSBhY3Rpb25zXHJcbiAqICAgICAgICAgICstLS0+IGFjdGlvbiAoY3BtKVxyXG4gKiAgICAgICAgICAgICAgICAgICstLSBiYWRnZVxyXG4gKiAgICArLS0gbG9nbyAoY3AtKVxyXG4gKiAgICArLS0gbWVudVRvZ2dsZVxyXG4gKiAgICAgICAgICArLS0gb3BlbiAoLXAtKVxyXG4gKiAgICAgICAgICArLS0gY2xvc2UgKC1wLSlcclxuICogICAgKy0tIG5hdiAoY3BtKVxyXG4gKiAgICAgICAgICArLS0tPiBpdGVtc1xyXG4gKiAgICArLS0gc2VhcmNoIChjcG0pXHJcbiAqICAgICstLSB1c2VyIChjcG0pXHJcbiAqICAgXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWhlYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcclxuICAvKlxyXG4gICAgPj4gICAgY3BtID0gaXQgaGFzIENsYXNzZXMsIFBheWxvYWQsIE1ldGFkYXRhICAgPDxcclxuICAgID4+ICAgIC1wLSA9IGl0IGhhcyBvbmx5IFBheWxvYWQgICAgICAgICAgICAgICAgIDw8XHJcblxyXG4gICAgZGF0YSAoY3BtKVxyXG4gICAgICArLS0tLSBwYXJhbXMgKGNwbSlcclxuICAgICAgKy0tLS0gbmF2IChjcG0pXHJcbiAgICAgICAgICAgICAgICArLS0tLSBpdGVtcyAoY3BtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICstLS0tIGRyb3Bkb3duRGF0YSAoY3BtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLS0tIGxpc3QgKC1wLSlcclxuICAgICAgKy0tLS0gc2VhcmNoIChjcG0pXHJcbiAgICAgICstLS0tIHVzZXIgKGNwbSlcclxuICAqL1xyXG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZDogYW55KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0eXBlLCBwYXlsb2FkKTtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgfVxyXG5cclxuICBvbktleVVwKHBheWxvYWQsIGtleUNvZGUsIHZhbHVlKXtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2tleXVwJywge3BheWxvYWQsIGtleUNvZGUsIHZhbHVlfSk7XHJcbiAgfVxyXG59Il19