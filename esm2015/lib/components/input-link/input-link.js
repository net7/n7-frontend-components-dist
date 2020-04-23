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
export class InputLinkComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onChange(payload) {
        if (!this.emit)
            return;
        this.emit('change', payload);
    }
}
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
if (false) {
    /** @type {?} */
    InputLinkComponent.prototype.data;
    /** @type {?} */
    InputLinkComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbGluay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaW5wdXQtbGluay9pbnB1dC1saW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQVlqRCwrQkF5QkM7Ozs7OztJQXJCQyx5QkFBYTs7Ozs7SUFJYix5QkFBYzs7Ozs7SUFJZCw0QkFBaUI7Ozs7O0lBSWpCLDRCQUFjOzs7OztJQUlkLDRCQUFjOzs7OztJQUlkLDBCQUFZOzs7Ozs7O0FBT2QsbUNBS0M7Ozs7OztJQURDLDhCQUFtQjs7QUFPckIsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFLN0IsUUFBUSxDQUFDLE9BQU87UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7OztZQVpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsMmpCQUFnQzthQUNqQzs7O21CQUVFLEtBQUs7bUJBRUwsS0FBSzs7OztJQUZOLGtDQUE2Qjs7SUFFN0Isa0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIElOUFVULUxJTksudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGFuIElucHV0TGlua1xuICpcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjb3VudGVyIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRMaW5rIHtcbiAgLyoqXG4gICAqIFRoZSByZW5kZXJlZCB0ZXh0IG9mIHRoZSBsaW5rXG4gICAqL1xuICB0ZXh0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBbiBpY29uIHRvIGJlIGFkZGVkIG5leHQgdG8gdGhlIHRleHRcbiAgICovXG4gIGljb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBIGNvbG9yZnVsIGNvdW50ZXIgd2l0aCBhIG51bWJlclxuICAgKi9cbiAgY291bnRlcj86IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBwYXlsb2FkIGZvciB0aGUgY2xpY2sgZXZlbnRcbiAgICovXG4gIHBheWxvYWQ/OiBhbnk7XG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIEhUTUwgQ2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgZGF0YSBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXG4gICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIElucHV0TGlua0RhdGFcbiAqIEBwcm9wZXJ0eSBsaW5rcyAocmVxdWlyZWQpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRMaW5rRGF0YSB7XG4gIC8qKlxuICAgKiBBIGxpc3Qgb2YgaW5wdXQgbGlua3NcbiAgICovXG4gIGxpbmtzOiBJbnB1dExpbmtbXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctaW5wdXQtbGluaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1saW5rLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElucHV0TGlua0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElucHV0TGlua0RhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2hhbmdlKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgcGF5bG9hZCk7XG4gIH1cbn1cbiJdfQ==