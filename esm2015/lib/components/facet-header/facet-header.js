/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// FACET-HEADER.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for FacetHeaderComponent's "data"
 *
 * \@property iconLeft (optional)
 * \@property text (required)
 * \@property additionalText (optional)
 * \@property iconRight (optional)
 * \@property classes (optional)
 * \@property payload (optional)
 * @record
 */
export function IFacetHeaderData() { }
if (false) {
    /**
     * the headers leftmost icon
     * @type {?|undefined}
     */
    IFacetHeaderData.prototype.iconLeft;
    /**
     * the title text
     * @type {?}
     */
    IFacetHeaderData.prototype.text;
    /**
     * additional text, displayed on the right of the text
     * @type {?|undefined}
     */
    IFacetHeaderData.prototype.additionalText;
    /**
     * the headers rightmost icon
     * @type {?|undefined}
     */
    IFacetHeaderData.prototype.iconRight;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    IFacetHeaderData.prototype.classes;
    /**
     * payload for onClick events
     * @type {?|undefined}
     */
    IFacetHeaderData.prototype.payload;
}
export class FacetHeaderComponent {
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
FacetHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-facet-header',
                template: "<div *ngIf=\"data\" class=\"n7-facet-header\">\n    <span class=\"n7-facet-header__icon-left {{ data.iconLeft }}\" *ngIf=\"data.iconLeft\">\n    </span>\n    <span class=\"n7-facet-header__title\">\n        {{data.text}}\n    </span>\n    <span class=\"n7-facet-header__counter\" *ngIf=\"data.additionalText\">\n        {{data.additionalText}}\n    </span>\n    <span *ngIf=\"data.iconRight\" class=\"n7-facet-header__icon-right {{ data.iconRight }}\"\n        (click)=\"onClick(data.payload)\"></span>\n</div>"
            }] }
];
FacetHeaderComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FacetHeaderComponent.prototype.data;
    /** @type {?} */
    FacetHeaderComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mYWNldC1oZWFkZXIvZmFjZXQtaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0FBWWpELHNDQXlCQzs7Ozs7O0lBckJDLG9DQUFrQjs7Ozs7SUFJbEIsZ0NBQWE7Ozs7O0lBSWIsMENBQXdCOzs7OztJQUl4QixxQ0FBbUI7Ozs7O0lBSW5CLG1DQUFjOzs7OztJQUlkLG1DQUFjOztBQU9oQixNQUFNLE9BQU8sb0JBQW9COzs7OztJQUsvQixPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLDBnQkFBa0M7YUFDbkM7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETixvQ0FBZ0M7O0lBQ2hDLG9DQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGQUNFVC1IRUFERVIudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEZhY2V0SGVhZGVyQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgaWNvbkxlZnQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGFkZGl0aW9uYWxUZXh0IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpY29uUmlnaHQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElGYWNldEhlYWRlckRhdGEge1xuICAvKipcbiAgICogdGhlIGhlYWRlcnMgbGVmdG1vc3QgaWNvblxuICAgKi9cbiAgaWNvbkxlZnQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aGUgdGl0bGUgdGV4dFxuICAgKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKipcbiAgICogYWRkaXRpb25hbCB0ZXh0LCBkaXNwbGF5ZWQgb24gdGhlIHJpZ2h0IG9mIHRoZSB0ZXh0XG4gICAqL1xuICBhZGRpdGlvbmFsVGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIHRoZSBoZWFkZXJzIHJpZ2h0bW9zdCBpY29uXG4gICAqL1xuICBpY29uUmlnaHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbiAgLyoqXG4gICAqIHBheWxvYWQgZm9yIG9uQ2xpY2sgZXZlbnRzXG4gICAqL1xuICBwYXlsb2FkPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1mYWNldC1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZmFjZXQtaGVhZGVyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEZhY2V0SGVhZGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSUZhY2V0SGVhZGVyRGF0YTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG5cbiAgb25DbGljayhwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxufSJdfQ==