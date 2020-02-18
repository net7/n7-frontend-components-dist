/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/datepicker/datepicker.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// DATEPICKER.ts
//---------------------------
import { Component, Input } from '@angular/core';
import flatpickr from 'flatpickr';
/**
 * Interface for datapicker component
 * \@property id (required)
 * \@property libOptions (required)
 * \@property classes (optional)
 * \@property payload (optional)
 * \@property _meta (optional)
 * @record
 */
export function IDatePickerData() { }
if (false) {
    /**
     * datepicker id
     * @type {?}
     */
    IDatePickerData.prototype.id;
    /**
     * datepicker library options
     * view LINK: https://flatpickr.js.org/
     * @type {?}
     */
    IDatePickerData.prototype.libOptions;
    /**
     * for datepicker range min and max range value
     * @type {?|undefined}
     */
    IDatePickerData.prototype.minRange;
    /** @type {?|undefined} */
    IDatePickerData.prototype.maxRange;
    /** @type {?|undefined} */
    IDatePickerData.prototype.classes;
    /**
     * datepicker event payload
     * @type {?|undefined}
     */
    IDatePickerData.prototype.payload;
    /** @type {?|undefined} */
    IDatePickerData.prototype._meta;
    /**
     * callback for saving the created datepicker instance
     * @type {?|undefined}
     */
    IDatePickerData.prototype.getInstance;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxTQUFTLE1BQU0sV0FBVyxDQUFDOzs7Ozs7Ozs7O0FBVWxDLHFDQXlCQzs7Ozs7O0lBckJDLDZCQUFXOzs7Ozs7SUFLWCxxQ0FBZ0I7Ozs7O0lBSWhCLG1DQUFrQjs7SUFDbEIsbUNBQWtCOztJQUNsQixrQ0FBaUI7Ozs7O0lBSWpCLGtDQUFjOztJQUNkLGdDQUFZOzs7OztJQUlaLHNDQUFrQjs7QUFPcEIsTUFBTSxPQUFPLG1CQUFtQjtJQUpoQztRQU9VLFlBQU8sR0FBWSxLQUFLLENBQUM7SUF1Qm5DLENBQUM7Ozs7SUFyQkMscUJBQXFCO1FBQ25CLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUV0QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUVwQixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7a0JBQ1IsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUk7O2tCQUM5QixVQUFVLEdBQUcsU0FBUyxDQUFDLElBQUksRUFBRSxFQUFFLG9CQUVoQyxVQUFVLElBQ2IsUUFBUTs7Ozs7O2dCQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRTtvQkFDN0MsSUFBRyxJQUFJLENBQUMsSUFBSSxFQUFDO3dCQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO3FCQUMzRDtnQkFDSCxDQUFDLEtBQ0Q7WUFDRixxQkFBcUI7WUFDckIsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7Z0JBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBN0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsMklBQWdDO2FBQ2pDOzs7bUJBRUUsS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sbUNBQStCOztJQUMvQixtQ0FBbUI7Ozs7O0lBQ25CLHNDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEQVRFUElDS0VSLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgZmxhdHBpY2tyIGZyb20gJ2ZsYXRwaWNrcic7XG4vKipcbiAqIEludGVyZmFjZSBmb3IgZGF0YXBpY2tlciBjb21wb25lbnQgXG4gKiBAcHJvcGVydHkgaWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGxpYk9wdGlvbnMgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRlUGlja2VyRGF0YSB7XG4gIC8qKlxuICAgKiBkYXRlcGlja2VyIGlkXG4gICAqL1xuICBpZDogc3RyaW5nO1xuICAgLyoqXG4gICAqIGRhdGVwaWNrZXIgbGlicmFyeSBvcHRpb25zXG4gICAqIHZpZXcgTElOSzogaHR0cHM6Ly9mbGF0cGlja3IuanMub3JnL1xuICAgKi9cbiAgbGliT3B0aW9uczogYW55O1xuICAvKipcbiAgICogZm9yIGRhdGVwaWNrZXIgcmFuZ2UgbWluIGFuZCBtYXggcmFuZ2UgdmFsdWVcbiAgICovXG4gIG1pblJhbmdlPzogbnVtYmVyO1xuICBtYXhSYW5nZT86IG51bWJlcjtcbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIGRhdGVwaWNrZXIgZXZlbnQgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbiAgX21ldGE/OiBhbnk7XG4gIC8qKlxuICAgKiBjYWxsYmFjayBmb3Igc2F2aW5nIHRoZSBjcmVhdGVkIGRhdGVwaWNrZXIgaW5zdGFuY2VcbiAgICovXG4gIGdldEluc3RhbmNlPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1kYXRlcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGVwaWNrZXIuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElEYXRlUGlja2VyRGF0YTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuICBwcml2YXRlIF9sb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKXtcbiAgICBpZighdGhpcy5kYXRhIHx8IHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgeyBpZCwgbGliT3B0aW9ucyB9ID0gdGhpcy5kYXRhO1xuICAgICAgY29uc3QgZGF0ZXBpY2tlciA9IGZsYXRwaWNrcihgIyR7aWR9YCwgXG4gICAgICB7XG4gICAgICAgIC4uLmxpYk9wdGlvbnMsXG4gICAgICAgIG9uQ2hhbmdlOiAoc2VsZWN0ZWREYXRlcywgZGF0ZVN0ciwgaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICBpZih0aGlzLmVtaXQpe1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7IHNlbGVjdGVkRGF0ZXMsIGRhdGVTdHIsIGluc3RhbmNlIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBzZXR0aW5nIGRhdGVwaWNrZXJcbiAgICAgIGlmKHRoaXMuZGF0YS5nZXRJbnN0YW5jZSlcbiAgICAgICAgdGhpcy5kYXRhLmdldEluc3RhbmNlKGRhdGVwaWNrZXIpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=