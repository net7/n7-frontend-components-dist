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
                template: "<div *ngIf=\"data\" class=\"n7-datepicker {{ data.classes || '' }}\">\r\n  <input type=\"text\" id=\"{{this.data.id}}\"/>\r\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxTQUFTLE1BQU0sV0FBVyxDQUFDOzs7Ozs7Ozs7O0FBVWxDLHFDQXlCQzs7Ozs7O0lBckJDLDZCQUFXOzs7Ozs7SUFLWCxxQ0FBZ0I7Ozs7O0lBSWhCLG1DQUFrQjs7SUFDbEIsbUNBQWtCOztJQUNsQixrQ0FBaUI7Ozs7O0lBSWpCLGtDQUFjOztJQUNkLGdDQUFZOzs7OztJQUlaLHNDQUFrQjs7QUFPcEIsTUFBTSxPQUFPLG1CQUFtQjtJQUpoQztRQU9VLFlBQU8sR0FBWSxLQUFLLENBQUM7SUF1Qm5DLENBQUM7Ozs7SUFyQkMscUJBQXFCO1FBQ25CLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUV0QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUVwQixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7a0JBQ1IsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUk7O2tCQUM5QixVQUFVLEdBQUcsU0FBUyxDQUFDLElBQUksRUFBRSxFQUFFLG9CQUVoQyxVQUFVLElBQ2IsUUFBUTs7Ozs7O2dCQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRTtvQkFDN0MsSUFBRyxJQUFJLENBQUMsSUFBSSxFQUFDO3dCQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO3FCQUMzRDtnQkFDSCxDQUFDLEtBQ0Q7WUFDRixxQkFBcUI7WUFDckIsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7Z0JBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBN0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsK0lBQWdDO2FBQ2pDOzs7bUJBRUUsS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sbUNBQStCOztJQUMvQixtQ0FBbUI7Ozs7O0lBQ25CLHNDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIERBVEVQSUNLRVIudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IGZsYXRwaWNrciBmcm9tICdmbGF0cGlja3InO1xyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBkYXRhcGlja2VyIGNvbXBvbmVudCBcclxuICogQHByb3BlcnR5IGlkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGxpYk9wdGlvbnMgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEYXRlUGlja2VyRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogZGF0ZXBpY2tlciBpZFxyXG4gICAqL1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgIC8qKlxyXG4gICAqIGRhdGVwaWNrZXIgbGlicmFyeSBvcHRpb25zXHJcbiAgICogdmlldyBMSU5LOiBodHRwczovL2ZsYXRwaWNrci5qcy5vcmcvXHJcbiAgICovXHJcbiAgbGliT3B0aW9uczogYW55O1xyXG4gIC8qKlxyXG4gICAqIGZvciBkYXRlcGlja2VyIHJhbmdlIG1pbiBhbmQgbWF4IHJhbmdlIHZhbHVlXHJcbiAgICovXHJcbiAgbWluUmFuZ2U/OiBudW1iZXI7XHJcbiAgbWF4UmFuZ2U/OiBudW1iZXI7XHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBkYXRlcGlja2VyIGV2ZW50IHBheWxvYWRcclxuICAgKi9cclxuICBwYXlsb2FkPzogYW55O1xyXG4gIF9tZXRhPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIGNhbGxiYWNrIGZvciBzYXZpbmcgdGhlIGNyZWF0ZWQgZGF0ZXBpY2tlciBpbnN0YW5jZVxyXG4gICAqL1xyXG4gIGdldEluc3RhbmNlPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWRhdGVwaWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlcGlja2VyLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBJRGF0ZVBpY2tlckRhdGE7XHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG4gIHByaXZhdGUgX2xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKXtcclxuICAgIGlmKCF0aGlzLmRhdGEgfHwgdGhpcy5fbG9hZGVkKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgeyBpZCwgbGliT3B0aW9ucyB9ID0gdGhpcy5kYXRhO1xyXG4gICAgICBjb25zdCBkYXRlcGlja2VyID0gZmxhdHBpY2tyKGAjJHtpZH1gLCBcclxuICAgICAge1xyXG4gICAgICAgIC4uLmxpYk9wdGlvbnMsXHJcbiAgICAgICAgb25DaGFuZ2U6IChzZWxlY3RlZERhdGVzLCBkYXRlU3RyLCBpbnN0YW5jZSkgPT4ge1xyXG4gICAgICAgICAgaWYodGhpcy5lbWl0KXtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7IHNlbGVjdGVkRGF0ZXMsIGRhdGVTdHIsIGluc3RhbmNlIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIC8vIHNldHRpbmcgZGF0ZXBpY2tlclxyXG4gICAgICBpZih0aGlzLmRhdGEuZ2V0SW5zdGFuY2UpXHJcbiAgICAgICAgdGhpcy5kYXRhLmdldEluc3RhbmNlKGRhdGVwaWNrZXIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==