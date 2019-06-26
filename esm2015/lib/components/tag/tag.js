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
/**
 * TagComponent <n7-tag>
 *
 * \@example
 * ```html
 *
 * <n7-tag [data]="{
 *        label: 'label: ',
 *        text: 'text',
 *        icon: 'x',
 *        payload: 'tag-payload',
 *        classes: 'tag1-class'
 *    }">
 * </n7-tag>
 * ```
 */
export class TagComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit("click", payload);
    }
}
TagComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-tag',
                template: "<span class=\"n7-tag {{data.classes || ''}}\" *ngIf=\"data\">\n    <span class=\"n7-tag__label\" *ngIf=\"data.label\">\n        {{ data.label }}\n    </span>\n    <span class=\"n7-tag__text\" *ngIf=\"data.text\">\n        {{ data.text }}\n    </span>\n    <span class=\"n7-tag__icon {{data.icon}}\" *ngIf=\"data.icon\" (click)=\"onClick(data.payload)\">\n        x\n    </span>\n</span>"
            }] }
];
TagComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TagComponent.prototype.data;
    /** @type {?} */
    TagComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWcvdGFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWFqRCw4QkEwQkM7Ozs7OztJQXRCRyx5QkFBZTs7Ozs7SUFJZix3QkFBYTs7Ozs7SUFJYix3QkFBYzs7Ozs7SUFLZCwyQkFBaUI7Ozs7O0lBSWpCLDJCQUFjOzs7OztJQUlkLHlCQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QmhCLE1BQU0sT0FBTyxZQUFZOzs7OztJQUlyQixPQUFPLENBQUMsT0FBTztRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7O1lBWEosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxRQUFRO2dCQUNsQiw4WUFBeUI7YUFDNUI7OzttQkFFSSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETiw0QkFBK0I7O0lBQy9CLDRCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUQUcudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFRhZ0NvbXBvbmVudCdzIFwiZGF0YVwiXG4gKiBcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBsYWJlbCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICogXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVRhZ0RhdGEge1xuICAgIC8qKlxuICAgICAqIHRhZydzIGxhYmVsXG4gICAgICovXG4gICAgbGFiZWw/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogdGV4dCB2aXN1YWxpemVkIG9uIHRoZSB0YWdcbiAgICAgKi9cbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogYWN0aW9uIGljb24gKG9uIHJpZ2h0IHNpZGUpXG4gICAgICovXG4gICAgaWNvbj86IHN0cmluZztcbiAgICBcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgICAqL1xuICAgIGNsYXNzZXM/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAgICAqL1xuICAgIHBheWxvYWQ/OiBhbnk7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBpbmZvXG4gICAgICovXG4gICAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuICogVGFnQ29tcG9uZW50IDxuNy10YWc+XG4gKiBcbiAqIEBleGFtcGxlXG4gKiBgYGBodG1sXG4gKiBcbiAqIDxuNy10YWcgW2RhdGFdPVwie1xuICogICAgICAgIGxhYmVsOiAnbGFiZWw6ICcsXG4gKiAgICAgICAgdGV4dDogJ3RleHQnLFxuICogICAgICAgIGljb246ICd4JyxcbiAqICAgICAgICBwYXlsb2FkOiAndGFnLXBheWxvYWQnLFxuICogICAgICAgIGNsYXNzZXM6ICd0YWcxLWNsYXNzJ1xuICogICAgfVwiPlxuICogPC9uNy10YWc+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduNy10YWcnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi90YWcuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVGFnQ29tcG9uZW50ICB7XG4gICAgQElucHV0KCkgcHVibGljIGRhdGE6IElUYWdEYXRhO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBlbWl0OiBhbnk7XG5cbiAgICBvbkNsaWNrKHBheWxvYWQpe1xuICAgICAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmVtaXQoXCJjbGlja1wiLCBwYXlsb2FkKTtcbiAgICB9XG59Il19