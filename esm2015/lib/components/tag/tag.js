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
export class TagComponent {
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
if (false) {
    /** @type {?} */
    TagComponent.prototype.data;
    /** @type {?} */
    TagComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWcvdGFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhakQsNkJBeUJDOzs7Ozs7SUFyQkcsd0JBQWU7Ozs7O0lBSWYsdUJBQWE7Ozs7O0lBSWIsdUJBQWM7Ozs7O0lBSWQsMEJBQWlCOzs7OztJQUlqQiwwQkFBYzs7Ozs7SUFJZCx3QkFBWTs7QUFPaEIsTUFBTSxPQUFPLFlBQVk7Ozs7O0lBS3JCLE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUFaSixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLDZYQUF5QjthQUMxQjs7O21CQUVJLEtBQUs7bUJBRUwsS0FBSzs7OztJQUZOLDRCQUE4Qjs7SUFFOUIsNEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRBRy50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgVGFnQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgbGFiZWwgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGFnRGF0YSB7XG4gICAgLyoqXG4gICAgICogdGFnJ3MgbGFiZWxcbiAgICAgKi9cbiAgICBsYWJlbD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiB0ZXh0IHZpc3VhbGl6ZWQgb24gdGhlIHRhZ1xuICAgICAqL1xuICAgIHRleHQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhY3Rpb24gaWNvbiAob24gcmlnaHQgc2lkZSlcbiAgICAgKi9cbiAgICBpY29uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAgICovXG4gICAgY2xhc3Nlcz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAgICovXG4gICAgcGF5bG9hZD86IGFueTtcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICAgKi9cbiAgICBfbWV0YT86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctdGFnJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhZy5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUYWdDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkYXRhOiBUYWdEYXRhO1xuXG4gICAgQElucHV0KCkgcHVibGljIGVtaXQ6IGFueTtcblxuICAgIG9uQ2xpY2socGF5bG9hZCkge1xuICAgICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgICB9XG59XG4iXX0=