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
                    template: "<div *ngIf=\"data\" class=\"n7-sidebar-header\">\r\n    <span class=\"n7-sidebar-header__icon-left {{ data.iconLeft }}\" *ngIf=\"data.iconLeft\">\r\n    </span>\r\n    <span class=\"n7-sidebar-header__text\">\r\n        {{data.text}}\r\n    </span>\r\n    <span class=\"n7-sidebar-header__additional-text\" *ngIf=\"data.additionalText\">\r\n        {{data.additionalText}}\r\n    </span>\r\n    <span *ngIf=\"data.iconRight\"\r\n          class=\"n7-sidebar-header__icon-right {{ data.iconRight }}\" \r\n          (click)=\"onClick(data.payload)\"></span>\r\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1oZWFkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NpZGViYXItaGVhZGVyL3NpZGViYXItaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0FBWWpELHdDQXlCQzs7Ozs7O0lBckJDLHNDQUFrQjs7Ozs7SUFJbEIsa0NBQWE7Ozs7O0lBSWIsNENBQXdCOzs7OztJQUl4Qix1Q0FBbUI7Ozs7O0lBSW5CLHFDQUFjOzs7OztJQUlkLHFDQUFjOztBQUdoQjtJQUFBO0lBY0EsQ0FBQzs7Ozs7SUFMQyx3Q0FBTzs7OztJQUFQLFVBQVEsT0FBTztRQUNiLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLGlrQkFBb0M7aUJBQ3JDOzs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLOztJQVFSLDZCQUFDO0NBQUEsQUFkRCxJQWNDO1NBVlksc0JBQXNCOzs7SUFDakMsc0NBQWtDOztJQUNsQyxzQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBTSURFQkFSLUhFQURFUi50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgU2lkZWJhckhlYWRlckNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBpY29uTGVmdCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGFkZGl0aW9uYWxUZXh0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGljb25SaWdodCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU2lkZWJhckhlYWRlckRhdGEge1xyXG4gIC8qKlxyXG4gICAqIHRoZSBoZWFkZXJzIGxlZnRtb3N0IGljb25cclxuICAgKi9cclxuICBpY29uTGVmdD86IHN0cmluZztcclxuICAvKipcclxuICAgKiB0aGUgdGl0bGUgdGV4dFxyXG4gICAqL1xyXG4gIHRleHQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIHRleHQsIGRpc3BsYXllZCBvbiB0aGUgcmlnaHQgb2YgdGhlIHRleHRcclxuICAgKi9cclxuICBhZGRpdGlvbmFsVGV4dD86IHN0cmluZztcclxuICAvKipcclxuICAgKiB0aGUgaGVhZGVycyByaWdodG1vc3QgaWNvblxyXG4gICAqL1xyXG4gIGljb25SaWdodD86IHN0cmluZztcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogcGF5bG9hZCBmb3Igb25DbGljayBldmVudHNcclxuICAgKi9cclxuICBwYXlsb2FkPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LXNpZGViYXItaGVhZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZWJhci1oZWFkZXIuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZGViYXJIZWFkZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IElTaWRlYmFySGVhZGVyRGF0YTtcclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gXHJcbiAgb25DbGljayhwYXlsb2FkKXtcclxuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgfSBcclxufSJdfQ==