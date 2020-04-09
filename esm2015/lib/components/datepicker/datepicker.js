/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/datepicker/datepicker.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// DATEPICKER.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for datapicker component
 * \@property id (required)
 * \@property libOptions (required)
 * \@property classes (optional)
 * \@property payload (optional)
 * \@property _meta (optional)
 * @record
 */
export function DatePickerData() { }
if (false) {
    /**
     * datepicker id
     * @type {?}
     */
    DatePickerData.prototype.id;
    /**
     * datepicker library options
     * view LINK: https://flatpickr.js.org/
     * @type {?}
     */
    DatePickerData.prototype.libOptions;
    /**
     * for datepicker range min and max range value
     * @type {?|undefined}
     */
    DatePickerData.prototype.minRange;
    /** @type {?|undefined} */
    DatePickerData.prototype.maxRange;
    /** @type {?|undefined} */
    DatePickerData.prototype.classes;
    /**
     * datepicker event payload
     * @type {?|undefined}
     */
    DatePickerData.prototype.payload;
    /** @type {?|undefined} */
    DatePickerData.prototype._meta;
    /**
     * callback for saving the created datepicker instance
     * @type {?|undefined}
     */
    DatePickerData.prototype.getInstance;
}
export class DatepickerComponent {
    constructor() {
        this._loaded = false;
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        if (!this.data || this._loaded)
            return;
        this._loaded = true;
        setTimeout((/**
         * @return {?}
         */
        () => {
            const { id, libOptions } = this.data;
            import('flatpickr').then((/**
             * @param {?} module
             * @return {?}
             */
            (module) => {
                const { default: flatpickr } = module;
                /** @type {?} */
                const datepicker = flatpickr(`#${id}`, Object.assign({}, libOptions, { onChange: (/**
                     * @param {?} selectedDates
                     * @param {?} dateStr
                     * @param {?} instance
                     * @return {?}
                     */
                    (selectedDates, dateStr, instance) => {
                        if (this.emit) {
                            this.emit('change', { selectedDates, dateStr, instance });
                        }
                    }) }));
                // setting datepicker
                if (this.data.getInstance)
                    this.data.getInstance(datepicker);
            }));
        }));
    }
}
DatepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-datepicker',
                template: "<div *ngIf=\"data\" class=\"n7-datepicker {{ data.classes || '' }}\">\n  <input type=\"text\" id=\"{{this.data.id}}\"/>\n</div>"
            }] }
];
DatepickerComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DatepickerComponent.prototype.data;
    /** @type {?} */
    DatepickerComponent.prototype.emit;
    /**
     * @type {?}
     * @private
     */
    DatepickerComponent.prototype._loaded;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7QUFVakQsb0NBeUJDOzs7Ozs7SUFyQkMsNEJBQVc7Ozs7OztJQUtYLG9DQUFnQjs7Ozs7SUFJaEIsa0NBQWtCOztJQUNsQixrQ0FBa0I7O0lBQ2xCLGlDQUFpQjs7Ozs7SUFJakIsaUNBQWM7O0lBQ2QsK0JBQVk7Ozs7O0lBSVoscUNBQWtCOztBQU9wQixNQUFNLE9BQU8sbUJBQW1CO0lBSmhDO1FBU1UsWUFBTyxHQUFHLEtBQUssQ0FBQztJQXlCMUIsQ0FBQzs7OztJQXZCQyxxQkFBcUI7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBRXZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRXBCLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtrQkFDUixFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSTtZQUNwQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSTs7OztZQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7c0JBQzVCLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLE1BQU07O3NCQUMvQixVQUFVLEdBQUcsU0FBUyxDQUFDLElBQUksRUFBRSxFQUFFLG9CQUU5QixVQUFVLElBQ2IsUUFBUTs7Ozs7O29CQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRTt3QkFDN0MsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFOzRCQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO3lCQUMzRDtvQkFDSCxDQUFDLEtBQ0Q7Z0JBQ0oscUJBQXFCO2dCQUNyQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztvQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMvRCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBakNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsMklBQWdDO2FBQ2pDOzs7bUJBRUUsS0FBSzttQkFFTCxLQUFLOzs7O0lBRk4sbUNBQThCOztJQUU5QixtQ0FBbUI7Ozs7O0lBRW5CLHNDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEQVRFUElDS0VSLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vKipcbiAqIEludGVyZmFjZSBmb3IgZGF0YXBpY2tlciBjb21wb25lbnRcbiAqIEBwcm9wZXJ0eSBpZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgbGliT3B0aW9ucyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZVBpY2tlckRhdGEge1xuICAvKipcbiAgICogZGF0ZXBpY2tlciBpZFxuICAgKi9cbiAgaWQ6IHN0cmluZztcbiAgIC8qKlxuICAgKiBkYXRlcGlja2VyIGxpYnJhcnkgb3B0aW9uc1xuICAgKiB2aWV3IExJTks6IGh0dHBzOi8vZmxhdHBpY2tyLmpzLm9yZy9cbiAgICovXG4gIGxpYk9wdGlvbnM6IGFueTtcbiAgLyoqXG4gICAqIGZvciBkYXRlcGlja2VyIHJhbmdlIG1pbiBhbmQgbWF4IHJhbmdlIHZhbHVlXG4gICAqL1xuICBtaW5SYW5nZT86IG51bWJlcjtcbiAgbWF4UmFuZ2U/OiBudW1iZXI7XG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBkYXRlcGlja2VyIGV2ZW50IHBheWxvYWRcbiAgICovXG4gIHBheWxvYWQ/OiBhbnk7XG4gIF9tZXRhPzogYW55O1xuICAvKipcbiAgICogY2FsbGJhY2sgZm9yIHNhdmluZyB0aGUgY3JlYXRlZCBkYXRlcGlja2VyIGluc3RhbmNlXG4gICAqL1xuICBnZXRJbnN0YW5jZT86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctZGF0ZXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlcGlja2VyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBEYXRlUGlja2VyRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgcHJpdmF0ZSBfbG9hZGVkID0gZmFsc2U7XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgIGlmICghdGhpcy5kYXRhIHx8IHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgeyBpZCwgbGliT3B0aW9ucyB9ID0gdGhpcy5kYXRhO1xuICAgICAgaW1wb3J0KCdmbGF0cGlja3InKS50aGVuKChtb2R1bGUpID0+IHtcbiAgICAgICAgY29uc3QgeyBkZWZhdWx0OiBmbGF0cGlja3IgfSA9IG1vZHVsZTtcbiAgICAgICAgY29uc3QgZGF0ZXBpY2tlciA9IGZsYXRwaWNrcihgIyR7aWR9YCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAuLi5saWJPcHRpb25zLFxuICAgICAgICAgICAgb25DaGFuZ2U6IChzZWxlY3RlZERhdGVzLCBkYXRlU3RyLCBpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAodGhpcy5lbWl0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7IHNlbGVjdGVkRGF0ZXMsIGRhdGVTdHIsIGluc3RhbmNlIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIC8vIHNldHRpbmcgZGF0ZXBpY2tlclxuICAgICAgICBpZiAodGhpcy5kYXRhLmdldEluc3RhbmNlKSB0aGlzLmRhdGEuZ2V0SW5zdGFuY2UoZGF0ZXBpY2tlcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19