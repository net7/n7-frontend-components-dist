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
     * @param {?} payload
     * @return {?}
     */
    InputLinkComponent.prototype.onChange = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('change', payload);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbGluay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaW5wdXQtbGluay9pbnB1dC1saW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQVlqRCwrQkF5QkM7Ozs7OztJQXJCQyx5QkFBYTs7Ozs7SUFJYix5QkFBYzs7Ozs7SUFJZCw0QkFBaUI7Ozs7O0lBSWpCLDRCQUFjOzs7OztJQUlkLDRCQUFjOzs7OztJQUlkLDBCQUFZOzs7Ozs7O0FBT2QsbUNBS0M7Ozs7OztJQURDLDhCQUFtQjs7QUFHckI7SUFBQTtJQWFBLENBQUM7Ozs7O0lBSkMscUNBQVE7Ozs7SUFBUixVQUFTLE9BQU87UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7O2dCQVpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsMmpCQUFnQztpQkFDakM7Ozt1QkFFRSxLQUFLO3VCQUVMLEtBQUs7O0lBTVIseUJBQUM7Q0FBQSxBQWJELElBYUM7U0FUWSxrQkFBa0I7OztJQUM3QixrQ0FBNkI7O0lBRTdCLGtDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBJTlBVVC1MSU5LLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBhbiBJbnB1dExpbmtcbiAqXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY291bnRlciAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElucHV0TGluayB7XG4gIC8qKlxuICAgKiBUaGUgcmVuZGVyZWQgdGV4dCBvZiB0aGUgbGlua1xuICAgKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKipcbiAgICogQW4gaWNvbiB0byBiZSBhZGRlZCBuZXh0IHRvIHRoZSB0ZXh0XG4gICAqL1xuICBpY29uPzogc3RyaW5nO1xuICAvKipcbiAgICogQSBjb2xvcmZ1bCBjb3VudGVyIHdpdGggYSBudW1iZXJcbiAgICovXG4gIGNvdW50ZXI/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgcGF5bG9hZCBmb3IgdGhlIGNsaWNrIGV2ZW50XG4gICAqL1xuICBwYXlsb2FkPzogYW55O1xuICAvKipcbiAgICogQWRkaXRpb25hbCBIVE1MIENsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBhbnk7XG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIGRhdGEgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBJbnB1dExpbmtEYXRhXG4gKiBAcHJvcGVydHkgbGlua3MgKHJlcXVpcmVkKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElucHV0TGlua0RhdGEge1xuICAvKipcbiAgICogQSBsaXN0IG9mIGlucHV0IGxpbmtzXG4gICAqL1xuICBsaW5rczogSW5wdXRMaW5rW107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWlucHV0LWxpbmsnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtbGluay5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJbnB1dExpbmtDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJbnB1dExpbmtEYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNoYW5nZShwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHBheWxvYWQpO1xuICB9XG59XG4iXX0=