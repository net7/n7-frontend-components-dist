/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
/**
 * @record
 */
export function INavbarComponentData() { }
if (false) {
    /** @type {?|undefined} */
    INavbarComponentData.prototype.brand;
    /** @type {?} */
    INavbarComponentData.prototype.links;
    /** @type {?|undefined} */
    INavbarComponentData.prototype.actions;
    /** @type {?|undefined} */
    INavbarComponentData.prototype.classes;
    /** @type {?|undefined} */
    INavbarComponentData.prototype.options;
}
/**
 * NavbarComponent <dv-navbar-component>
 *
 * example:
 * ```html
 * <dv-navbar-component [data]="{
 *   brand: {
 *     image: '/assets/images/placeholder_75x75.png',
 *     label: 'MY BRAND',
 *     payload: 'brand clicked!'
 *   },
 *   links: {
 *     items: [{
 *       body: 'link 1',
 *       payload: 'navigate to /link-1'
 *     }, {
 *       body: 'link 2',
 *      payload: 'navigate to /link-2'
 *     }, {
 *       body: 'link 3',
 *       payload: 'navigate to /link-3'
 *     }]
 *   },
 *   actions: {
 *     items: [{
 *       body: '<img src=\'/assets/images/placeholder_75x75.png\'>',
 *       payload: 'avatar clicked!',
 *       classes: 'n7-navbar-component__action-avatar'
 *     }]
 *   },
 * }"></dv-navbar-component>
 * ```
 */
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    NavbarComponent.prototype.onBrandClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('brand_click', payload);
    };
    /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    NavbarComponent.prototype.onLinkClick = /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    function (type, payload) {
        if (!this.emit)
            return;
        this.emit('link_click', payload);
    };
    /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    NavbarComponent.prototype.onActionClick = /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    function (type, payload) {
        if (!this.emit)
            return;
        this.emit('action_click', payload);
    };
    NavbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dv-navbar-component',
                    template: "<nav *ngIf=\"data\" class=\"n7-component-navbar {{ data.classes || '' }}\">\n  <!-- Brand -->\n  <div \n  *ngIf=\"data.brand\"\n  (click)=\"onBrandClick(data.brand.payload)\" \n  class=\"n7-component-navbar__brand {{ data.brand.classes || '' }}\">\n    <div *ngIf=\"data.brand.image\" class=\"n7-component-navbar__brand-image\">\n      <img src=\"{{ data.brand.image }}\" />\n    </div>\n    <div *ngIf=\"data.brand.label\" class=\"n7-component-navbar__brand-label\">\n      {{ data.brand.label }}\n    </div>\n  </div>\n  <!-- END // Brand -->\n\n  <!-- Links -->\n  <div *ngIf=\"data.links\" class=\"n7-component-navbar__links\">\n    <dv-list-component\n    [data]=\"data.links\"\n    [emit]=\"onLinkClick.bind(this)\"\n    ></dv-list-component>\n  </div>\n  <!-- END // Links -->\n  \n  <!-- Actions -->\n  <div *ngIf=\"data.actions\" class=\"n7-component-navbar__actions\">\n    <dv-list-component\n    [data]=\"data.actions\"\n    [emit]=\"onActionClick.bind(this)\"\n    ></dv-list-component>\n  </div>\n  <!-- END // Actions -->\n</nav>"
                }] }
    ];
    NavbarComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return NavbarComponent;
}());
export { NavbarComponent };
if (false) {
    /** @type {?} */
    NavbarComponent.prototype.data;
    /** @type {?} */
    NavbarComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbmF2YmFyLWNvbXBvbmVudC9uYXZiYXItY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUdqRCwwQ0FXQzs7O0lBVkMscUNBS0U7O0lBQ0YscUNBQTBCOztJQUMxQix1Q0FBNkI7O0lBQzdCLHVDQUFpQjs7SUFDakIsdUNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUNoQjtJQUFBO0lBeUJBLENBQUM7Ozs7O0lBakJDLHNDQUFZOzs7O0lBQVosVUFBYSxPQUFPO1FBQ2xCLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7O0lBRUQscUNBQVc7Ozs7O0lBQVgsVUFBWSxJQUFJLEVBQUUsT0FBTztRQUN2QixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7OztJQUVELHVDQUFhOzs7OztJQUFiLFVBQWMsSUFBSSxFQUFFLE9BQU87UUFDekIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDOztnQkF4QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLGdpQ0FBc0M7aUJBQ3ZDOzs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLOztJQW1CUixzQkFBQztDQUFBLEFBekJELElBeUJDO1NBckJZLGVBQWU7OztJQUMxQiwrQkFBb0M7O0lBQ3BDLCtCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElMaXN0Q29tcG9uZW50RGF0YSB9IGZyb20gJy4uL2xpc3QtY29tcG9uZW50L2xpc3QtY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBJTmF2YmFyQ29tcG9uZW50RGF0YSB7XG4gIGJyYW5kPzoge1xuICAgIGxhYmVsPzogc3RyaW5nLFxuICAgIGltYWdlPzogc3RyaW5nLFxuICAgIGNsYXNzZXM/OiBzdHJpbmcsXG4gICAgcGF5bG9hZD86IGFueSxcbiAgfTtcbiAgbGlua3M6IElMaXN0Q29tcG9uZW50RGF0YTtcbiAgYWN0aW9ucz86IElMaXN0Q29tcG9uZW50RGF0YTtcbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgb3B0aW9ucz86IGFueTtcbn1cblxuLyoqXG4gKiBOYXZiYXJDb21wb25lbnQgPGR2LW5hdmJhci1jb21wb25lbnQ+XG4gKiBcbiAqIGV4YW1wbGU6XG4gKiBgYGBodG1sXG4gKiA8ZHYtbmF2YmFyLWNvbXBvbmVudCBbZGF0YV09XCJ7XG4gKiAgIGJyYW5kOiB7XG4gKiAgICAgaW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9wbGFjZWhvbGRlcl83NXg3NS5wbmcnLFxuICogICAgIGxhYmVsOiAnTVkgQlJBTkQnLFxuICogICAgIHBheWxvYWQ6ICdicmFuZCBjbGlja2VkISdcbiAqICAgfSxcbiAqICAgbGlua3M6IHtcbiAqICAgICBpdGVtczogW3tcbiAqICAgICAgIGJvZHk6ICdsaW5rIDEnLFxuICogICAgICAgcGF5bG9hZDogJ25hdmlnYXRlIHRvIC9saW5rLTEnXG4gKiAgICAgfSwge1xuICogICAgICAgYm9keTogJ2xpbmsgMicsXG4gKiAgICAgIHBheWxvYWQ6ICduYXZpZ2F0ZSB0byAvbGluay0yJ1xuICogICAgIH0sIHtcbiAqICAgICAgIGJvZHk6ICdsaW5rIDMnLFxuICogICAgICAgcGF5bG9hZDogJ25hdmlnYXRlIHRvIC9saW5rLTMnXG4gKiAgICAgfV1cbiAqICAgfSxcbiAqICAgYWN0aW9uczoge1xuICogICAgIGl0ZW1zOiBbe1xuICogICAgICAgYm9keTogJzxpbWcgc3JjPVxcJy9hc3NldHMvaW1hZ2VzL3BsYWNlaG9sZGVyXzc1eDc1LnBuZ1xcJz4nLFxuICogICAgICAgcGF5bG9hZDogJ2F2YXRhciBjbGlja2VkIScsXG4gKiAgICAgICBjbGFzc2VzOiAnbjctbmF2YmFyLWNvbXBvbmVudF9fYWN0aW9uLWF2YXRhcidcbiAqICAgICB9XVxuICogICB9LFxuICogfVwiPjwvZHYtbmF2YmFyLWNvbXBvbmVudD5cbiAqIGBgYFxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2R2LW5hdmJhci1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2YmFyLWNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOYXZiYXJDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJTmF2YmFyQ29tcG9uZW50RGF0YTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQnJhbmRDbGljayhwYXlsb2FkKXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2JyYW5kX2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cblxuICBvbkxpbmtDbGljayh0eXBlLCBwYXlsb2FkKXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2xpbmtfY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxuICBcbiAgb25BY3Rpb25DbGljayh0eXBlLCBwYXlsb2FkKXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2FjdGlvbl9jbGljaycsIHBheWxvYWQpO1xuICB9XG59Il19