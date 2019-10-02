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
export class SidebarHeaderComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
}
SidebarHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-sidebar-header',
                template: "<div *ngIf=\"data\" class=\"n7-sidebar-header\">\r\n    <span class=\"n7-sidebar-header__icon-left {{ data.iconLeft }}\" \r\n          *ngIf=\"data.iconLeft\">\r\n    </span>\r\n    <span class=\"n7-sidebar-header__text-wrapper {{data.classes || ''}}\">\r\n        <span class=\"n7-sidebar-header__text\">\r\n            {{data.text}}\r\n        </span>\r\n        <span class=\"n7-sidebar-header__secondary-text\" \r\n              *ngIf=\"data.additionalText\">\r\n            {{data.additionalText}}\r\n        </span>\r\n    </span>\r\n    <span *ngIf=\"data.iconRight\"\r\n          class=\"n7-sidebar-header__icon-right {{ data.iconRight }}\" \r\n          (click)=\"onClick(data.payload)\"></span>\r\n</div>"
            }] }
];
SidebarHeaderComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SidebarHeaderComponent.prototype.data;
    /** @type {?} */
    SidebarHeaderComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1oZWFkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NpZGViYXItaGVhZGVyL3NpZGViYXItaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0FBWWpELHdDQXlCQzs7Ozs7O0lBckJDLHNDQUFrQjs7Ozs7SUFJbEIsa0NBQWE7Ozs7O0lBSWIsNENBQXdCOzs7OztJQUl4Qix1Q0FBbUI7Ozs7O0lBSW5CLHFDQUFjOzs7OztJQUlkLHFDQUFjOztBQU9oQixNQUFNLE9BQU8sc0JBQXNCOzs7OztJQUtqQyxPQUFPLENBQUMsT0FBTztRQUNiLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLHN0QkFBb0M7YUFDckM7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETixzQ0FBa0M7O0lBQ2xDLHNDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFNJREVCQVItSEVBREVSLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBTaWRlYmFySGVhZGVyQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGljb25MZWZ0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgYWRkaXRpb25hbFRleHQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaWNvblJpZ2h0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTaWRlYmFySGVhZGVyRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogdGhlIGhlYWRlcnMgbGVmdG1vc3QgaWNvblxyXG4gICAqL1xyXG4gIGljb25MZWZ0Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHRoZSB0aXRsZSB0ZXh0XHJcbiAgICovXHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgdGV4dCwgZGlzcGxheWVkIG9uIHRoZSByaWdodCBvZiB0aGUgdGV4dFxyXG4gICAqL1xyXG4gIGFkZGl0aW9uYWxUZXh0Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHRoZSBoZWFkZXJzIHJpZ2h0bW9zdCBpY29uXHJcbiAgICovXHJcbiAgaWNvblJpZ2h0Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IGFueTtcclxuICAvKipcclxuICAgKiBwYXlsb2FkIGZvciBvbkNsaWNrIGV2ZW50c1xyXG4gICAqL1xyXG4gIHBheWxvYWQ/OiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctc2lkZWJhci1oZWFkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlYmFyLWhlYWRlci5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZWJhckhlYWRlckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogSVNpZGViYXJIZWFkZXJEYXRhO1xyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiBcclxuICBvbkNsaWNrKHBheWxvYWQpe1xyXG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9IFxyXG59Il19