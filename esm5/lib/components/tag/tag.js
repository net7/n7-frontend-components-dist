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
                    template: "<span class=\"n7-tag {{data.classes || ''}}\" *ngIf=\"data\">\n    <span class=\"n7-tag__label\" *ngIf=\"data.label\">\n        {{ data.label }}\n    </span>\n    <span class=\"n7-tag__text\" *ngIf=\"data.text\">\n        {{ data.text }}\n    </span>\n    <span class=\"n7-tag__icon {{data.icon}}\" *ngIf=\"data.icon\" (click)=\"onClick(data.payload)\">\n        x\n    </span>\n</span>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWcvdGFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWFqRCw4QkEwQkM7Ozs7OztJQXRCRyx5QkFBZTs7Ozs7SUFJZix3QkFBYTs7Ozs7SUFJYix3QkFBYzs7Ozs7SUFLZCwyQkFBaUI7Ozs7O0lBSWpCLDJCQUFjOzs7OztJQUlkLHlCQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQmhCO0lBQUE7SUFZQSxDQUFDOzs7OztJQUpHLDhCQUFPOzs7O0lBQVAsVUFBUSxPQUFPO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDOztnQkFYSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLDhZQUF5QjtpQkFDNUI7Ozt1QkFFSSxLQUFLO3VCQUNMLEtBQUs7O0lBTVYsbUJBQUM7Q0FBQSxBQVpELElBWUM7U0FSWSxZQUFZOzs7SUFDckIsNEJBQStCOztJQUMvQiw0QkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVEFHLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBUYWdDb21wb25lbnQncyBcImRhdGFcIlxuICogXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgbGFiZWwgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqIFxuICovXG5leHBvcnQgaW50ZXJmYWNlIElUYWdEYXRhIHtcbiAgICAvKipcbiAgICAgKiB0YWcncyBsYWJlbFxuICAgICAqL1xuICAgIGxhYmVsPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIHRleHQgdmlzdWFsaXplZCBvbiB0aGUgdGFnXG4gICAgICovXG4gICAgdGV4dDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIGFjdGlvbiBpY29uIChvbiByaWdodCBzaWRlKVxuICAgICAqL1xuICAgIGljb24/OiBzdHJpbmc7XG4gICAgXG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICAgKi9cbiAgICBjbGFzc2VzPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgICAgKi9cbiAgICBwYXlsb2FkPzogYW55O1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgICAqL1xuICAgIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIFRhZ0NvbXBvbmVudCA8bjctdGFnPlxuICogXG4gKiBAZXhhbXBsZVxuICogYGBgaHRtbFxuICogXG4gKiA8bjctdGFnIFtkYXRhXT1cIntcbiAqICAgICAgICBsYWJlbDogJ2xhYmVsOiAnLFxuICogICAgICAgIHRleHQ6ICd0ZXh0JyxcbiAqICAgICAgICBpY29uOiAneCcsXG4gKiAgICAgICAgcGF5bG9hZDogJ3RhZy1wYXlsb2FkJyxcbiAqICAgICAgICBjbGFzc2VzOiAndGFnMS1jbGFzcydcbiAqICAgIH1cIj5cbiAqIDwvbjctdGFnPlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbjctdGFnJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGFnLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRhZ0NvbXBvbmVudCAge1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkYXRhOiBJVGFnRGF0YTtcbiAgICBASW5wdXQoKSBwdWJsaWMgZW1pdDogYW55O1xuXG4gICAgb25DbGljayhwYXlsb2FkKXtcbiAgICAgICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICAgICAgdGhpcy5lbWl0KFwiY2xpY2tcIiwgcGF5bG9hZCk7XG4gICAgfVxufSJdfQ==