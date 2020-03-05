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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxTQUFTLE1BQU0sV0FBVyxDQUFDOzs7Ozs7Ozs7O0FBVWxDLG9DQXlCQzs7Ozs7O0lBckJDLDRCQUFXOzs7Ozs7SUFLWCxvQ0FBZ0I7Ozs7O0lBSWhCLGtDQUFrQjs7SUFDbEIsa0NBQWtCOztJQUNsQixpQ0FBaUI7Ozs7O0lBSWpCLGlDQUFjOztJQUNkLCtCQUFZOzs7OztJQUlaLHFDQUFrQjs7QUFPcEIsTUFBTSxPQUFPLG1CQUFtQjtJQUpoQztRQVNVLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFzQjFCLENBQUM7Ozs7SUFwQkMscUJBQXFCO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUV2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUVwQixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7a0JBQ1IsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUk7O2tCQUM5QixVQUFVLEdBQUcsU0FBUyxDQUFDLElBQUksRUFBRSxFQUFFLG9CQUU5QixVQUFVLElBQ2IsUUFBUTs7Ozs7O2dCQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRTtvQkFDN0MsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO3dCQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO3FCQUMzRDtnQkFDSCxDQUFDLEtBQ0Q7WUFDSixxQkFBcUI7WUFDckIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7Z0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0QsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUE5QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QiwrSUFBZ0M7YUFDakM7OzttQkFFRSxLQUFLO21CQUVMLEtBQUs7Ozs7SUFGTixtQ0FBOEI7O0lBRTlCLG1DQUFtQjs7Ozs7SUFFbkIsc0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gREFURVBJQ0tFUi50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgZmxhdHBpY2tyIGZyb20gJ2ZsYXRwaWNrcic7XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGRhdGFwaWNrZXIgY29tcG9uZW50XHJcbiAqIEBwcm9wZXJ0eSBpZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBsaWJPcHRpb25zIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRlUGlja2VyRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogZGF0ZXBpY2tlciBpZFxyXG4gICAqL1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgIC8qKlxyXG4gICAqIGRhdGVwaWNrZXIgbGlicmFyeSBvcHRpb25zXHJcbiAgICogdmlldyBMSU5LOiBodHRwczovL2ZsYXRwaWNrci5qcy5vcmcvXHJcbiAgICovXHJcbiAgbGliT3B0aW9uczogYW55O1xyXG4gIC8qKlxyXG4gICAqIGZvciBkYXRlcGlja2VyIHJhbmdlIG1pbiBhbmQgbWF4IHJhbmdlIHZhbHVlXHJcbiAgICovXHJcbiAgbWluUmFuZ2U/OiBudW1iZXI7XHJcbiAgbWF4UmFuZ2U/OiBudW1iZXI7XHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBkYXRlcGlja2VyIGV2ZW50IHBheWxvYWRcclxuICAgKi9cclxuICBwYXlsb2FkPzogYW55O1xyXG4gIF9tZXRhPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIGNhbGxiYWNrIGZvciBzYXZpbmcgdGhlIGNyZWF0ZWQgZGF0ZXBpY2tlciBpbnN0YW5jZVxyXG4gICAqL1xyXG4gIGdldEluc3RhbmNlPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWRhdGVwaWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlcGlja2VyLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBEYXRlUGlja2VyRGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBwcml2YXRlIF9sb2FkZWQgPSBmYWxzZTtcclxuXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xyXG4gICAgaWYgKCF0aGlzLmRhdGEgfHwgdGhpcy5fbG9hZGVkKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgeyBpZCwgbGliT3B0aW9ucyB9ID0gdGhpcy5kYXRhO1xyXG4gICAgICBjb25zdCBkYXRlcGlja2VyID0gZmxhdHBpY2tyKGAjJHtpZH1gLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIC4uLmxpYk9wdGlvbnMsXHJcbiAgICAgICAgICBvbkNoYW5nZTogKHNlbGVjdGVkRGF0ZXMsIGRhdGVTdHIsIGluc3RhbmNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVtaXQpIHtcclxuICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgc2VsZWN0ZWREYXRlcywgZGF0ZVN0ciwgaW5zdGFuY2UgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgLy8gc2V0dGluZyBkYXRlcGlja2VyXHJcbiAgICAgIGlmICh0aGlzLmRhdGEuZ2V0SW5zdGFuY2UpIHRoaXMuZGF0YS5nZXRJbnN0YW5jZShkYXRlcGlja2VyKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=