/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// SIDEBAR-HEADER.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for SidebarHeaderComponent's "data"
 *
 * \@property iconLeft (optional)
 * \@property text (required)
 * \@property additionalText (optional)
 * \@property iconRight (optional)
 * \@property classes (optional)
 * \@property payload (optional)
 * @record
 */
export function ISidebarHeaderData() { }
if (false) {
    /**
     * the headers leftmost icon
     * @type {?|undefined}
     */
    ISidebarHeaderData.prototype.iconLeft;
    /**
     * the title text
     * @type {?}
     */
    ISidebarHeaderData.prototype.text;
    /**
     * additional text, displayed on the right of the text
     * @type {?|undefined}
     */
    ISidebarHeaderData.prototype.additionalText;
    /**
     * the headers rightmost icon
     * @type {?|undefined}
     */
    ISidebarHeaderData.prototype.iconRight;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    ISidebarHeaderData.prototype.classes;
    /**
     * payload for onClick events
     * @type {?|undefined}
     */
    ISidebarHeaderData.prototype.payload;
}
var SidebarHeaderComponent = /** @class */ (function () {
    function SidebarHeaderComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    SidebarHeaderComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    SidebarHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-sidebar-header',
                    template: "<div *ngIf=\"data\" class=\"n7-sidebar-header\">\n    <span class=\"n7-sidebar-header__icon-left {{ data.iconLeft }}\" \n          *ngIf=\"data.iconLeft\">\n    </span>\n    <span class=\"n7-sidebar-header__text-wrapper {{data.classes || ''}}\">\n        <span class=\"n7-sidebar-header__text\">\n            {{data.text}}\n        </span>\n        <span class=\"n7-sidebar-header__secondary-text\" \n              *ngIf=\"data.additionalText\">\n            {{data.additionalText}}\n        </span>\n    </span>\n    <span *ngIf=\"data.iconRight\"\n          class=\"n7-sidebar-header__icon-right {{ data.iconRight }}\" \n          (click)=\"onClick(data.payload)\"></span>\n</div>"
                }] }
    ];
    SidebarHeaderComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return SidebarHeaderComponent;
}());
export { SidebarHeaderComponent };
if (false) {
    /** @type {?} */
    SidebarHeaderComponent.prototype.data;
    /** @type {?} */
    SidebarHeaderComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1oZWFkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NpZGViYXItaGVhZGVyL3NpZGViYXItaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0FBWWpELHdDQXlCQzs7Ozs7O0lBckJDLHNDQUFrQjs7Ozs7SUFJbEIsa0NBQWE7Ozs7O0lBSWIsNENBQXdCOzs7OztJQUl4Qix1Q0FBbUI7Ozs7O0lBSW5CLHFDQUFjOzs7OztJQUlkLHFDQUFjOztBQUdoQjtJQUFBO0lBY0EsQ0FBQzs7Ozs7SUFMQyx3Q0FBTzs7OztJQUFQLFVBQVEsT0FBTztRQUNiLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLHNyQkFBb0M7aUJBQ3JDOzs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLOztJQVFSLDZCQUFDO0NBQUEsQUFkRCxJQWNDO1NBVlksc0JBQXNCOzs7SUFDakMsc0NBQWtDOztJQUNsQyxzQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU0lERUJBUi1IRUFERVIudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFNpZGViYXJIZWFkZXJDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBpY29uTGVmdCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgYWRkaXRpb25hbFRleHQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGljb25SaWdodCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVNpZGViYXJIZWFkZXJEYXRhIHtcbiAgLyoqXG4gICAqIHRoZSBoZWFkZXJzIGxlZnRtb3N0IGljb25cbiAgICovXG4gIGljb25MZWZ0Pzogc3RyaW5nO1xuICAvKipcbiAgICogdGhlIHRpdGxlIHRleHRcbiAgICovXG4gIHRleHQ6IHN0cmluZztcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgdGV4dCwgZGlzcGxheWVkIG9uIHRoZSByaWdodCBvZiB0aGUgdGV4dFxuICAgKi9cbiAgYWRkaXRpb25hbFRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aGUgaGVhZGVycyByaWdodG1vc3QgaWNvblxuICAgKi9cbiAgaWNvblJpZ2h0Pzogc3RyaW5nO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBhbnk7XG4gIC8qKlxuICAgKiBwYXlsb2FkIGZvciBvbkNsaWNrIGV2ZW50c1xuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctc2lkZWJhci1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZWJhci1oZWFkZXIuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhckhlYWRlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElTaWRlYmFySGVhZGVyRGF0YTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gXG4gIG9uQ2xpY2socGF5bG9hZCl7XG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9IFxufSJdfQ==