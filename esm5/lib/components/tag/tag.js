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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWcvdGFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhakQsOEJBeUJDOzs7Ozs7SUFyQkcseUJBQWU7Ozs7O0lBSWYsd0JBQWE7Ozs7O0lBSWIsd0JBQWM7Ozs7O0lBSWQsMkJBQWlCOzs7OztJQUlqQiwyQkFBYzs7Ozs7SUFJZCx5QkFBWTs7QUFHaEI7SUFBQTtJQVlBLENBQUM7Ozs7O0lBSkcsOEJBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O2dCQVhKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsNlhBQXlCO2lCQUM1Qjs7O3VCQUVJLEtBQUs7dUJBQ0wsS0FBSzs7SUFNVixtQkFBQztDQUFBLEFBWkQsSUFZQztTQVJZLFlBQVk7OztJQUNyQiw0QkFBK0I7O0lBQy9CLDRCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUQUcudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFRhZ0NvbXBvbmVudCdzIFwiZGF0YVwiXG4gKiBcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBsYWJlbCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICogXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVRhZ0RhdGEge1xuICAgIC8qKlxuICAgICAqIHRhZydzIGxhYmVsXG4gICAgICovXG4gICAgbGFiZWw/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogdGV4dCB2aXN1YWxpemVkIG9uIHRoZSB0YWdcbiAgICAgKi9cbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogYWN0aW9uIGljb24gKG9uIHJpZ2h0IHNpZGUpXG4gICAgICovXG4gICAgaWNvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgICAqL1xuICAgIGNsYXNzZXM/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAgICAqL1xuICAgIHBheWxvYWQ/OiBhbnk7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBpbmZvXG4gICAgICovXG4gICAgX21ldGE/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbjctdGFnJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGFnLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRhZ0NvbXBvbmVudCAge1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkYXRhOiBJVGFnRGF0YTtcbiAgICBASW5wdXQoKSBwdWJsaWMgZW1pdDogYW55O1xuXG4gICAgb25DbGljayhwYXlsb2FkKXtcbiAgICAgICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICAgICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICAgIH1cbn0iXX0=