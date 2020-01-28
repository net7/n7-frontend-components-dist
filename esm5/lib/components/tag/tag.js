/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tag/tag.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.emit('click', payload);
    };
    TagComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-tag',
                    template: "<span class=\"n7-tag {{data.classes || ''}}\" *ngIf=\"data\">\r\n    <span class=\"n7-tag__label\" *ngIf=\"data.label\">\r\n        {{ data.label }}\r\n    </span>\r\n    <span class=\"n7-tag__text\" *ngIf=\"data.text\">\r\n        {{ data.text }}\r\n    </span>\r\n    <span class=\"n7-tag__icon {{data.icon}}\" *ngIf=\"data.icon\" (click)=\"onClick(data.payload)\"></span>\r\n</span>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWcvdGFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhakQsOEJBeUJDOzs7Ozs7SUFyQkcseUJBQWU7Ozs7O0lBSWYsd0JBQWE7Ozs7O0lBSWIsd0JBQWM7Ozs7O0lBSWQsMkJBQWlCOzs7OztJQUlqQiwyQkFBYzs7Ozs7SUFJZCx5QkFBWTs7QUFHaEI7SUFBQTtJQVlBLENBQUM7Ozs7O0lBSkcsOEJBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O2dCQVhKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsNllBQXlCO2lCQUM1Qjs7O3VCQUVJLEtBQUs7dUJBQ0wsS0FBSzs7SUFNVixtQkFBQztDQUFBLEFBWkQsSUFZQztTQVJZLFlBQVk7OztJQUNyQiw0QkFBK0I7O0lBQy9CLDRCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFRBRy50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgVGFnQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGxhYmVsIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICogXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUYWdEYXRhIHtcclxuICAgIC8qKlxyXG4gICAgICogdGFnJ3MgbGFiZWxcclxuICAgICAqL1xyXG4gICAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIHRleHQgdmlzdWFsaXplZCBvbiB0aGUgdGFnXHJcbiAgICAgKi9cclxuICAgIHRleHQ6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWN0aW9uIGljb24gKG9uIHJpZ2h0IHNpZGUpXHJcbiAgICAgKi9cclxuICAgIGljb24/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICAgKi9cclxuICAgIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcclxuICAgICAqL1xyXG4gICAgcGF5bG9hZD86IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICAgKi9cclxuICAgIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbjctdGFnJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi90YWcuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhZ0NvbXBvbmVudCAge1xyXG4gICAgQElucHV0KCkgcHVibGljIGRhdGE6IElUYWdEYXRhO1xyXG4gICAgQElucHV0KCkgcHVibGljIGVtaXQ6IGFueTtcclxuXHJcbiAgICBvbkNsaWNrKHBheWxvYWQpe1xyXG4gICAgICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gICAgfVxyXG59Il19