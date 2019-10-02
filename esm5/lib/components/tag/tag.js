/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// TAG.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for TagComponent's "data"
 *
 * \@property text (required)
 * \@property label (optional)
 * \@property icon (optional)
 * \@property classes (optional)
 * \@property payload (optional)
 * \@property _meta (optional)
 *
 * @record
 */
export function ITagData() { }
if (false) {
    /**
     * tag's label
     * @type {?|undefined}
     */
    ITagData.prototype.label;
    /**
     * text visualized on the tag
     * @type {?}
     */
    ITagData.prototype.text;
    /**
     * action icon (on right side)
     * @type {?|undefined}
     */
    ITagData.prototype.icon;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    ITagData.prototype.classes;
    /**
     * action click's payload
     * @type {?|undefined}
     */
    ITagData.prototype.payload;
    /**
     * additional info
     * @type {?|undefined}
     */
    ITagData.prototype._meta;
}
var TagComponent = /** @class */ (function () {
    function TagComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    TagComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit("click", payload);
    };
    TagComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-tag',
                    template: "<span class=\"n7-tag {{data.classes || ''}}\" *ngIf=\"data\">\n    <span class=\"n7-tag__label\" *ngIf=\"data.label\">\n        {{ data.label }}\n    </span>\n    <span class=\"n7-tag__text\" *ngIf=\"data.text\">\n        {{ data.text }}\n    </span>\n    <span class=\"n7-tag__icon {{data.icon}}\" *ngIf=\"data.icon\" (click)=\"onClick(data.payload)\"></span>\n</span>"
                }] }
    ];
    TagComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return TagComponent;
}());
export { TagComponent };
if (false) {
    /** @type {?} */
    TagComponent.prototype.data;
    /** @type {?} */
    TagComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWcvdGFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWFqRCw4QkF5QkM7Ozs7OztJQXJCRyx5QkFBZTs7Ozs7SUFJZix3QkFBYTs7Ozs7SUFJYix3QkFBYzs7Ozs7SUFJZCwyQkFBaUI7Ozs7O0lBSWpCLDJCQUFjOzs7OztJQUlkLHlCQUFZOztBQUdoQjtJQUFBO0lBWUEsQ0FBQzs7Ozs7SUFKRyw4QkFBTzs7OztJQUFQLFVBQVEsT0FBTztRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Z0JBWEosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxRQUFRO29CQUNsQiw2WEFBeUI7aUJBQzVCOzs7dUJBRUksS0FBSzt1QkFDTCxLQUFLOztJQU1WLG1CQUFDO0NBQUEsQUFaRCxJQVlDO1NBUlksWUFBWTs7O0lBQ3JCLDRCQUErQjs7SUFDL0IsNEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRBRy50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgVGFnQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqIFxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGxhYmVsIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKiBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJVGFnRGF0YSB7XG4gICAgLyoqXG4gICAgICogdGFnJ3MgbGFiZWxcbiAgICAgKi9cbiAgICBsYWJlbD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiB0ZXh0IHZpc3VhbGl6ZWQgb24gdGhlIHRhZ1xuICAgICAqL1xuICAgIHRleHQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhY3Rpb24gaWNvbiAob24gcmlnaHQgc2lkZSlcbiAgICAgKi9cbiAgICBpY29uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAgICovXG4gICAgY2xhc3Nlcz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAgICovXG4gICAgcGF5bG9hZD86IGFueTtcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICAgKi9cbiAgICBfbWV0YT86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduNy10YWcnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi90YWcuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVGFnQ29tcG9uZW50ICB7XG4gICAgQElucHV0KCkgcHVibGljIGRhdGE6IElUYWdEYXRhO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBlbWl0OiBhbnk7XG5cbiAgICBvbkNsaWNrKHBheWxvYWQpe1xuICAgICAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmVtaXQoXCJjbGlja1wiLCBwYXlsb2FkKTtcbiAgICB9XG59Il19