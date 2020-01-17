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
                template: "<header *ngIf=\"data\" class=\"n7-header {{data.classes || ''}}\">\r\n    \r\n    <!-- Logo and title -->\r\n    <div class=\"n7-header__logo-title {{data.logo.classes || ''}}\">\r\n        <a class=\"n7-header__logo-link\" (click)=\"onClick(data.logo.payload)\">\r\n            <img class=\"n7-header__logo\"\r\n                *ngIf=\"data.logo.image\"\r\n                [src]=\"data.logo.image\"\r\n                alt=\"{{ data.logo.title }}\" />\r\n            <div class=\"n7-header__title-subtitle\">\r\n                <h1 class=\"n7-header__title\">\r\n                    {{ data.logo.title }}\r\n                </h1>\r\n                <h2 class=\"n7-header__subtitle\" *ngIf=\"data.logo.subtitle\">\r\n                    {{ data.logo.subtitle }}\r\n                </h2>\r\n            </div>\r\n        </a>\r\n    </div>\r\n\r\n    <!-- Main menu -->\r\n    <nav class=\"n7-header__nav {{data.nav.classes || ''}}\" *ngIf=\"data.nav\">\r\n        <div class=\"n7-header__nav-content\">\r\n            <ul class=\"n7-header__nav-list\">\r\n                <li class=\"n7-header__nav-item {{item.classes || ''}}\" *ngFor=\"let item of data.nav.items\">\r\n                    <a class=\"n7-header__nav-link\" *ngIf=\"item.payload\" (click)=\"onClick(item.payload)\">\r\n                        <span class=\"n7-header__nav-icon {{item.icon}}\" *ngIf=\"item.icon\"></span>\r\n                        <span class=\"n7-header__nav-label\" *ngIf=\"item.text\">\r\n                            {{ item.text }}\r\n                        </span>\r\n                    </a>\r\n\r\n                    <!-- Sublevel -->\r\n                    <ul class=\"n7-header__subnav-list\" *ngIf=\"item.subnav\">\r\n                        <li class=\"n7-header__subnav-item {{subitem.classes || ''}}\" *ngFor=\"let subitem of item.subnav\">\r\n                            <a class=\"n7-header__subnav-link\" (click)=\"onClick(subitem.payload)\">\r\n                                <span class=\"n7-header__subnav-icon {{subitem.icon}}\" *ngIf=\"subitem.icon\"></span>\r\n                                <span class=\"n7-header__subnav-label\" *ngIf=\"subitem.text\">\r\n                                    {{ subitem.text }}\r\n                                </span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n\r\n    <!-- Mobile menu toggle -->\r\n    <div class=\"n7-header__mobile-menu-toggle\">\r\n        <span class=\"n7-header__mobile-menu-icon n7-icon-menu\" \r\n              (click)=\"onClick(data.menuToggle.open.payload)\"></span>\r\n    </div>\r\n\r\n    <!-- Mobile menu close -->\r\n    <span class=\"n7-header__mobile-menu-close n7-icon-close\" \r\n          (click)=\"onClick(data.menuToggle.close.payload)\"></span>\r\n\r\n    <!-- Tools: search, notifications, use profile or login/signup -->\r\n    <div class=\"n7-header__tools\">\r\n        \r\n        <div class=\"n7-header__search {{data.search.classes || ''}}\" *ngIf=\"data.search\">\r\n            <input class=\"n7-header__search-input\" \r\n                   type=\"search\" \r\n                   name=\"search\" \r\n                   placeholder=\"{{ data.search.hint || ''}}\" \r\n                   (keyup)=\"onKeyUp(data.search.payload, $event.keyCode, $event.target.value)\"/>\r\n            <button class=\"n7-header__search-btn\" type=\"submit\" (click)=\"onClick(data.search.payload)\">\r\n                <span class=\"n7-header__search-btn-label\">\r\n                    Search\r\n                </span>\r\n            </button>\r\n        </div>\r\n        \r\n        <div class=\"n7-header__actions\" *ngIf=\"data.actions\">\r\n            <div class=\"n7-header__action {{ action.classes || '' }}\" *ngFor=\"let action of data.actions\">\r\n                <span class=\"n7-header__action-icon {{ action.icon }}\" (click)=\"onClick(action.payload)\"></span>\r\n                <span class=\"n7-header__action-badge {{ action.badge.text ? 'has-text' : '' }}\" *ngIf=\"action.badge\">\r\n                    {{ action.badge.text }}\r\n                </span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"n7-header__user {{data.user.classes || ''}}\" *ngIf=\"data.user\">\r\n            <img class=\"n7-header__user-img\" \r\n                 *ngIf=\"data.user.img\" \r\n                 [src]=\"data.user.img\" \r\n                 (click)=\"onClick(data.user.payload)\"/>\r\n            <p class=\"n7-header__user-name\" *ngIf=\"data.user.name\">\r\n                <span class=\"n7-header__user-name-label\">\r\n                    {{ data.user.name }}\r\n                </span>\r\n            </p>\r\n        </div>\r\n    </div>\r\n\r\n</header>\r\n\r\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0FBWWpELGlDQXVCQzs7Ozs7O0lBbkJDLDRCQUVFOzs7OztJQUlGLDJCQUFhOzs7OztJQUliLDhCQUFpQjs7Ozs7SUFJakIsOEJBQWE7Ozs7O0lBSWIsNEJBQVk7Ozs7Ozs7Ozs7Ozs7OztBQWVkLGlDQXlCQzs7Ozs7O0lBckJDLDJCQUFjOzs7OztJQUlkLDJCQUFjOzs7OztJQUlkLDZCQUF1Qjs7Ozs7SUFJdkIsOEJBQWlCOzs7OztJQUlqQiw4QkFBYTs7Ozs7SUFJYiw0QkFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUNkLGlDQTZHQzs7Ozs7O0lBekdDLDJCQU1FOzs7OztJQUlGLDBCQXFCRTs7Ozs7SUFJRiw2QkFpQkU7Ozs7O0lBSUYsOEJBQXdCOzs7OztJQUl4QiwyQkFxQkU7Ozs7O0lBSUYsaUNBT0U7Ozs7O0lBSUYsOEJBQWlCOzs7OztJQUlqQiw4QkFBYzs7Ozs7SUFJZCw0QkFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCZCxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFpQjFCLE9BQU8sQ0FBQyxPQUFZO1FBQ2xCLDhCQUE4QjtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7Ozs7SUFFRCxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7O1lBOUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsd3RKQUE0QjthQUM3Qjs7O21CQWVFLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLCtCQUFtQjs7SUFDbkIsK0JBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgYWN0aW9uIGl0ZW1cclxuICogXHJcbiAqIEBwcm9wZXJ0eSBpY29uIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGJhZGdlIChvcHRpb25hbClcclxuICogLSB0ZXh0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElBY3Rpb25JdGVtIHtcclxuICAvKipcclxuICAgKiBvcHRpb25hbCBiYWRnZSB3aXRoLCBvcHRpb25hbGx5LCBpdHMgdGV4dFxyXG4gICAqL1xyXG4gIGJhZGdlPzoge1xyXG4gICAgICB0ZXh0Pzogc3RyaW5nO1xyXG4gIH07XHJcbiAgLyoqXHJcbiAgICogaWNvbiBjbGFzc1xyXG4gICAqL1xyXG4gIGljb246IHN0cmluZztcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICAqL1xyXG4gIHBheWxvYWQ6IGFueTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgbmF2YmFyIGl0ZW1cclxuICogXHJcbiAqIG5vdGU6IGEgc2luZ2xlIG5hdidzIGl0ZW0gY2FuIGJlIGEgdGV4dCAody8gbGluaykgT1IgYSBkcm9wZG93blxyXG4gKiBcclxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgc3VibmF2IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHRleHQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5hdmJhckl0ZW0ge1xyXG4gIC8qKlxyXG4gICAqIHRleHQgb2YgYSBzaW5nbGUgaXRlbSBvZiB0aGUgbmF2YmFyICh0ZXh0IGFuZCBwYXlsb2FkIGFyZSBjb25uZWN0ZWQpXHJcbiAgICovXHJcbiAgdGV4dD86IHN0cmluZztcclxuICAvKipcclxuICAgKiBpY29uIGZvciBhIHNpbmdsZSBpdGVtIG9mIHRoZSBuYXZiYXIgKGFzc29jaWF0ZWQgdG8gXCJ0ZXh0XCIpXHJcbiAgICovXHJcbiAgaWNvbj86IHN0cmluZztcclxuICAvKipcclxuICAgKiBzZWNvbmQgbGV2ZWwgbmF2aWdhdGlvblxyXG4gICAqL1xyXG4gIHN1Ym5hdj86IElOYXZiYXJJdGVtW107XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcclxuICAgKi9cclxuICBwYXlsb2FkOiBhbnk7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEhlYWRlckNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkgbG9nbyAocmVxdWlyZWQpXHJcbiAqIC0gdGl0bGUgKHJlcXVpcmVkKVxyXG4gKiAtIGltYWdlIChvcHRpb25hbClcclxuICogLSBzdWJ0aXRsZSAob3B0aW9uYWwpXHJcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIC0gcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wcnR5IG1lbnVUb2dnbGUgKHJlcXVpcmVkKVxyXG4gKiAtIG9wZW4gKHJlcXVpcmVkKVxyXG4gKiAtIC0gcGF5bG9hZCAocmVxdWlyZWQpXHJcbiAqIC0gY2xvc2VuIChyZXF1aXJlZClcclxuICogLSAtIHBheWxvYWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgYWN0aW9ucyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBuYXYgKG9wdGlvbmFsKVxyXG4gKiAtIGl0ZW1zIChyZXF1aXJlZClcclxuICogLSBpc0JlbG93IChvcHRpb25hbClcclxuICogLSBjbGFzc2VzIChvcHRpb25hbClcclxuICogLSBwYXlsb2FkIChvcHRpb25hbClcclxuICogLSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBzZWFyY2ggKG9wdGlvbmFsKVxyXG4gKiAtIGhpbnQgKG9wdGlvbmFsKVxyXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiAtIHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiAtIF9tZXRhIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHVzZXIgKG9wdGlvbmFsKVxyXG4gKiAtIGltYWdlIChvcHRpb25hbClcclxuICogLSBuYW1lIChvcHRpb25hbClcclxuICogLSBjbGFzc2VzIChvcHRpb25hbClcclxuICogLSBwYXlsb2FkIChvcHRpb25hbClcclxuICogLSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJSGVhZGVyRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogbG9nbyBhbmQgdGl0bGUgYXJlYSBwYXJhbWV0ZXJzXHJcbiAgICovXHJcbiAgbG9nbzoge1xyXG4gICAgaW1hZ2U/OiBzdHJpbmcsXHJcbiAgICB0aXRsZTogc3RyaW5nLFxyXG4gICAgc3VidGl0bGU/OiBzdHJpbmcsXHJcbiAgICBjbGFzc2VzPzogc3RyaW5nLFxyXG4gICAgcGF5bG9hZD86IGFueSxcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIG5hdidzIHBhcmFtZXRlcnNcclxuICAgKi9cclxuICBuYXY/OiB7XHJcbiAgICAvKipcclxuICAgICAqIGxpc3Qgb2YgdGhlIGl0ZW1zIGluIHRoZSBuYXZiYXJcclxuICAgICAqL1xyXG4gICAgaXRlbXM6IElOYXZiYXJJdGVtW107XHJcbiAgICAvKipcclxuICAgICAqIGZsYWcgZm9yIGRpc3BsYXkgdGhlIG5hdmJhciB1bmRlciB0aGUgaGVhZGVyIChpbnN0ZWFkIG9mIElOIHRoZSBoZWFkZXIpXHJcbiAgICAgKi9cclxuICAgIGlzQmVsb3c/OiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAgICovXHJcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXHJcbiAgICAgKi9cclxuICAgIHBheWxvYWQ/OiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaW5mb1xyXG4gICAgICovXHJcbiAgICBfbWV0YT86IGFueTtcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIHNlYXJjaCBwYXJhbWV0ZXJzXHJcbiAgICovXHJcbiAgc2VhcmNoPzoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBoaW50ICh0ZXh0IHNob3dlZCBpbiB0aGUgaW5wdXQgYm94IHVudGlsIHNvbWV0aGluZyBpcyB3cml0ZWQgaW4gdGhlcmUpXHJcbiAgICAgKi9cclxuICAgIGhpbnQ/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICAgKi9cclxuICAgIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcclxuICAgICAqL1xyXG4gICAgcGF5bG9hZD86IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICAgKi9cclxuICAgIF9tZXRhPzogYW55O1xyXG4gIH07XHJcbiAgLyoqXHJcbiAgICogYWN0aW9uIGl0ZW1zXHJcbiAgICovXHJcbiAgYWN0aW9ucz86IElBY3Rpb25JdGVtW107XHJcbiAgLyoqXHJcbiAgICogdXNlciBwYXJhbWV0ZXJzXHJcbiAgICovXHJcbiAgdXNlcj86IHtcclxuICAgIC8qKlxyXG4gICAgICogdXNlcidzIHByb2ZpbGUgcGljdHVyZVxyXG4gICAgICovXHJcbiAgICBpbWc/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIHVzZXIncyBwcm9maWxlIG5hbWVcclxuICAgICAqL1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgICAqL1xyXG4gICAgY2xhc3Nlcz86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICAgICovXHJcbiAgICBwYXlsb2FkPzogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgICAqL1xyXG4gICAgX21ldGE/OiBhbnk7XHJcbiAgfTtcclxuICAvKipcclxuICAgKiBtZW51IHRvZ2dsZSBmb3IgbW9iaWxlXHJcbiAgICovXHJcbiAgbWVudVRvZ2dsZToge1xyXG4gICAgb3Blbjoge1xyXG4gICAgICBwYXlsb2FkOiBhbnlcclxuICAgIH0sXHJcbiAgICBjbG9zZToge1xyXG4gICAgICBwYXlsb2FkOiBhbnlcclxuICAgIH1cclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXHJcbiAgICovXHJcbiAgcGF5bG9hZD86IGFueTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEhlYWRlckNvbXBvbmVudCA8bjctaGVhZGVyPlxyXG4gKiBcclxuICogQHN0cnVjdHVyZVxyXG4gKiAgPj4gIGNwbSA9IGl0IGhhcyBDbGFzc2VzLCBQYXlsb2FkLCBNZXRhZGF0YSAgPDxcclxuICogID4+ICAtcC0gPSBpdCBoYXMgb25seSBQYXlsb2FkICAgICAgICAgICAgICAgIDw8XHJcbiAqICA+PiAgKy0tID0gc3ViLW1lbWJlciAgICAgICAgICAgICAgICAgICAgICAgICA8PFxyXG4gKiAgPj4gICstLS0+ID0gYXJyYXkgICAgICAgICAgICAgICAgICAgICAgICAgICAgPDxcclxuICpcclxuICogIGRhdGEgKGNwbSlcclxuICogICAgKy0tIGFjdGlvbnNcclxuICogICAgICAgICAgKy0tLT4gYWN0aW9uIChjcG0pXHJcbiAqICAgICAgICAgICAgICAgICAgKy0tIGJhZGdlXHJcbiAqICAgICstLSBsb2dvIChjcC0pXHJcbiAqICAgICstLSBtZW51VG9nZ2xlXHJcbiAqICAgICAgICAgICstLSBvcGVuICgtcC0pXHJcbiAqICAgICAgICAgICstLSBjbG9zZSAoLXAtKVxyXG4gKiAgICArLS0gbmF2IChjcG0pXHJcbiAqICAgICAgICAgICstLS0+IGl0ZW1zXHJcbiAqICAgICstLSBzZWFyY2ggKGNwbSlcclxuICogICAgKy0tIHVzZXIgKGNwbSlcclxuICogICBcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctaGVhZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQge1xyXG4gIC8qXHJcbiAgICA+PiAgICBjcG0gPSBpdCBoYXMgQ2xhc3NlcywgUGF5bG9hZCwgTWV0YWRhdGEgICA8PFxyXG4gICAgPj4gICAgLXAtID0gaXQgaGFzIG9ubHkgUGF5bG9hZCAgICAgICAgICAgICAgICAgPDxcclxuXHJcbiAgICBkYXRhIChjcG0pXHJcbiAgICAgICstLS0tIHBhcmFtcyAoY3BtKVxyXG4gICAgICArLS0tLSBuYXYgKGNwbSlcclxuICAgICAgICAgICAgICAgICstLS0tIGl0ZW1zIChjcG0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKy0tLS0gZHJvcGRvd25EYXRhIChjcG0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKy0tLS0gbGlzdCAoLXAtKVxyXG4gICAgICArLS0tLSBzZWFyY2ggKGNwbSlcclxuICAgICAgKy0tLS0gdXNlciAoY3BtKVxyXG4gICovXHJcbiAgQElucHV0KCkgZGF0YTogYW55O1xyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgb25DbGljayhwYXlsb2FkOiBhbnkpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHR5cGUsIHBheWxvYWQpO1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIG9uS2V5VXAocGF5bG9hZCwga2V5Q29kZSwgdmFsdWUpe1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgna2V5dXAnLCB7cGF5bG9hZCwga2V5Q29kZSwgdmFsdWV9KTtcclxuICB9XHJcbn0iXX0=