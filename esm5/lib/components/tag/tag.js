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
export function TagData() { }
if (false) {
    /**
     * tag's label
     * @type {?|undefined}
     */
    TagData.prototype.label;
    /**
     * text visualized on the tag
     * @type {?}
     */
    TagData.prototype.text;
    /**
     * action icon (on right side)
     * @type {?|undefined}
     */
    TagData.prototype.icon;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    TagData.prototype.classes;
    /**
     * action click's payload
     * @type {?|undefined}
     */
    TagData.prototype.payload;
    /**
     * additional info
     * @type {?|undefined}
     */
    TagData.prototype._meta;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWcvdGFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhakQsNkJBeUJDOzs7Ozs7SUFyQkcsd0JBQWU7Ozs7O0lBSWYsdUJBQWE7Ozs7O0lBSWIsdUJBQWM7Ozs7O0lBSWQsMEJBQWlCOzs7OztJQUlqQiwwQkFBYzs7Ozs7SUFJZCx3QkFBWTs7QUFHaEI7SUFBQTtJQWFBLENBQUM7Ozs7O0lBSkcsOEJBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQVpKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsNllBQXlCO2lCQUMxQjs7O3VCQUVJLEtBQUs7dUJBRUwsS0FBSzs7SUFNVixtQkFBQztDQUFBLEFBYkQsSUFhQztTQVRZLFlBQVk7OztJQUNyQiw0QkFBOEI7O0lBRTlCLDRCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFRBRy50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgVGFnQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgbGFiZWwgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBUYWdEYXRhIHtcclxuICAgIC8qKlxyXG4gICAgICogdGFnJ3MgbGFiZWxcclxuICAgICAqL1xyXG4gICAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIHRleHQgdmlzdWFsaXplZCBvbiB0aGUgdGFnXHJcbiAgICAgKi9cclxuICAgIHRleHQ6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWN0aW9uIGljb24gKG9uIHJpZ2h0IHNpZGUpXHJcbiAgICAgKi9cclxuICAgIGljb24/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICAgKi9cclxuICAgIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcclxuICAgICAqL1xyXG4gICAgcGF5bG9hZD86IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICAgKi9cclxuICAgIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LXRhZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhZy5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFnQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkYXRhOiBUYWdEYXRhO1xyXG5cclxuICAgIEBJbnB1dCgpIHB1YmxpYyBlbWl0OiBhbnk7XHJcblxyXG4gICAgb25DbGljayhwYXlsb2FkKSB7XHJcbiAgICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICAgIH1cclxufVxyXG4iXX0=