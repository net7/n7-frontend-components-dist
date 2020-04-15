/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/input-link/input-link.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// INPUT-LINK.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for an InputLink
 *
 * \@property icon (optional)
 * \@property text (required)
 * \@property counter (optional)
 * \@property payload (optional)
 * \@property classes (optional)
 * \@property _meta (optional)
 * @record
 */
export function InputLink() { }
if (false) {
    /**
     * The rendered text of the link
     * @type {?}
     */
    InputLink.prototype.text;
    /**
     * An icon to be added next to the text
     * @type {?|undefined}
     */
    InputLink.prototype.icon;
    /**
     * A colorful counter with a number
     * @type {?|undefined}
     */
    InputLink.prototype.counter;
    /**
     * The payload for the click event
     * @type {?|undefined}
     */
    InputLink.prototype.payload;
    /**
     * Additional HTML Classes
     * @type {?|undefined}
     */
    InputLink.prototype.classes;
    /**
     * Additional data for the component's logic
     * @type {?|undefined}
     */
    InputLink.prototype._meta;
}
/**
 * Interface for InputLinkData
 * \@property links (required)
 * @record
 */
export function InputLinkData() { }
if (false) {
    /**
     * A list of input links
     * @type {?}
     */
    InputLinkData.prototype.links;
}
var InputLinkComponent = /** @class */ (function () {
    function InputLinkComponent() {
    }
    /**
     * @param {?} inputPayload
     * @param {?=} value
     * @return {?}
     */
    InputLinkComponent.prototype.onChange = /**
     * @param {?} inputPayload
     * @param {?=} value
     * @return {?}
     */
    function (inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload: inputPayload, value: value });
    };
    InputLinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-input-link',
                    template: "<div *ngIf=\"data\"\n     class=\"n7-input-link\">\n  <ng-container *ngFor=\"let input of data.links\">\n    <div class=\"n7-input-link__link {{ input.classes || '' }}\"\n         (click)=\"onChange(input.payload)\">\n      <span *ngIf=\"input.icon\"\n            class=\"n7-input-link__icon {{ input.icon }}\"></span>\n      <span class=\"n7-input-link__text\">{{ input.text }}</span>\n      <span *ngIf=\"input.counter || input.counter === 0\"\n            class=\"n7-input-link__counter\">{{ input.counter }}</span>\n    </div>\n  </ng-container>\n</div>\n"
                }] }
    ];
    InputLinkComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return InputLinkComponent;
}());
export { InputLinkComponent };
if (false) {
    /** @type {?} */
    InputLinkComponent.prototype.data;
    /** @type {?} */
    InputLinkComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbGluay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaW5wdXQtbGluay9pbnB1dC1saW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQVlqRCwrQkF5QkM7Ozs7OztJQXJCQyx5QkFBYTs7Ozs7SUFJYix5QkFBYzs7Ozs7SUFJZCw0QkFBaUI7Ozs7O0lBSWpCLDRCQUFjOzs7OztJQUlkLDRCQUFjOzs7OztJQUlkLDBCQUFZOzs7Ozs7O0FBT2QsbUNBS0M7Ozs7OztJQURDLDhCQUFtQjs7QUFHckI7SUFBQTtJQWFBLENBQUM7Ozs7OztJQUpDLHFDQUFROzs7OztJQUFSLFVBQVMsWUFBWSxFQUFFLEtBQU07UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksY0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLDJqQkFBZ0M7aUJBQ2pDOzs7dUJBRUUsS0FBSzt1QkFFTCxLQUFLOztJQU1SLHlCQUFDO0NBQUEsQUFiRCxJQWFDO1NBVFksa0JBQWtCOzs7SUFDN0Isa0NBQTZCOztJQUU3QixrQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSU5QVVQtTElOSy50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgYW4gSW5wdXRMaW5rXG4gKlxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNvdW50ZXIgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbnB1dExpbmsge1xuICAvKipcbiAgICogVGhlIHJlbmRlcmVkIHRleHQgb2YgdGhlIGxpbmtcbiAgICovXG4gIHRleHQ6IHN0cmluZztcbiAgLyoqXG4gICAqIEFuIGljb24gdG8gYmUgYWRkZWQgbmV4dCB0byB0aGUgdGV4dFxuICAgKi9cbiAgaWNvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIEEgY29sb3JmdWwgY291bnRlciB3aXRoIGEgbnVtYmVyXG4gICAqL1xuICBjb3VudGVyPzogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIHBheWxvYWQgZm9yIHRoZSBjbGljayBldmVudFxuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgSFRNTCBDbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogYW55O1xuICAvKipcbiAgICogQWRkaXRpb25hbCBkYXRhIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgSW5wdXRMaW5rRGF0YVxuICogQHByb3BlcnR5IGxpbmtzIChyZXF1aXJlZClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbnB1dExpbmtEYXRhIHtcbiAgLyoqXG4gICAqIEEgbGlzdCBvZiBpbnB1dCBsaW5rc1xuICAgKi9cbiAgbGlua3M6IElucHV0TGlua1tdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1pbnB1dC1saW5rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LWxpbmsuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRMaW5rQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSW5wdXRMaW5rRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DaGFuZ2UoaW5wdXRQYXlsb2FkLCB2YWx1ZT8pIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgeyBpbnB1dFBheWxvYWQsIHZhbHVlIH0pO1xuICB9XG59XG4iXX0=