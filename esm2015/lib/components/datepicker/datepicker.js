/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLFNBQVMsTUFBTSxXQUFXLENBQUM7Ozs7Ozs7Ozs7QUFVbEMscUNBeUJDOzs7Ozs7SUFyQkMsNkJBQVc7Ozs7OztJQUtYLHFDQUFnQjs7Ozs7SUFJaEIsbUNBQWtCOztJQUNsQixtQ0FBa0I7O0lBQ2xCLGtDQUFpQjs7Ozs7SUFJakIsa0NBQWM7O0lBQ2QsZ0NBQVk7Ozs7O0lBSVosc0NBQWtCOztBQU9wQixNQUFNLE9BQU8sbUJBQW1CO0lBSmhDO1FBT1UsWUFBTyxHQUFZLEtBQUssQ0FBQztJQXVCbkMsQ0FBQzs7OztJQXJCQyxxQkFBcUI7UUFDbkIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBRXRDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRXBCLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtrQkFDUixFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSTs7a0JBQzlCLFVBQVUsR0FBRyxTQUFTLENBQUMsSUFBSSxFQUFFLEVBQUUsb0JBRWhDLFVBQVUsSUFDYixRQUFROzs7Ozs7Z0JBQUUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFO29CQUM3QyxJQUFHLElBQUksQ0FBQyxJQUFJLEVBQUM7d0JBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7cUJBQzNEO2dCQUNILENBQUMsS0FDRDtZQUNGLHFCQUFxQjtZQUNyQixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztnQkFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUE3QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QiwrSUFBZ0M7YUFDakM7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETixtQ0FBK0I7O0lBQy9CLG1DQUFtQjs7Ozs7SUFDbkIsc0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gREFURVBJQ0tFUi50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgZmxhdHBpY2tyIGZyb20gJ2ZsYXRwaWNrcic7XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGRhdGFwaWNrZXIgY29tcG9uZW50IFxyXG4gKiBAcHJvcGVydHkgaWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgbGliT3B0aW9ucyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURhdGVQaWNrZXJEYXRhIHtcclxuICAvKipcclxuICAgKiBkYXRlcGlja2VyIGlkXHJcbiAgICovXHJcbiAgaWQ6IHN0cmluZztcclxuICAgLyoqXHJcbiAgICogZGF0ZXBpY2tlciBsaWJyYXJ5IG9wdGlvbnNcclxuICAgKiB2aWV3IExJTks6IGh0dHBzOi8vZmxhdHBpY2tyLmpzLm9yZy9cclxuICAgKi9cclxuICBsaWJPcHRpb25zOiBhbnk7XHJcbiAgLyoqXHJcbiAgICogZm9yIGRhdGVwaWNrZXIgcmFuZ2UgbWluIGFuZCBtYXggcmFuZ2UgdmFsdWVcclxuICAgKi9cclxuICBtaW5SYW5nZT86IG51bWJlcjtcclxuICBtYXhSYW5nZT86IG51bWJlcjtcclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGRhdGVwaWNrZXIgZXZlbnQgcGF5bG9hZFxyXG4gICAqL1xyXG4gIHBheWxvYWQ/OiBhbnk7XHJcbiAgX21ldGE/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogY2FsbGJhY2sgZm9yIHNhdmluZyB0aGUgY3JlYXRlZCBkYXRlcGlja2VyIGluc3RhbmNlXHJcbiAgICovXHJcbiAgZ2V0SW5zdGFuY2U/OiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctZGF0ZXBpY2tlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGVwaWNrZXIuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IElEYXRlUGlja2VyRGF0YTtcclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcbiAgcHJpdmF0ZSBfbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpe1xyXG4gICAgaWYoIXRoaXMuZGF0YSB8fCB0aGlzLl9sb2FkZWQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCB7IGlkLCBsaWJPcHRpb25zIH0gPSB0aGlzLmRhdGE7XHJcbiAgICAgIGNvbnN0IGRhdGVwaWNrZXIgPSBmbGF0cGlja3IoYCMke2lkfWAsIFxyXG4gICAgICB7XHJcbiAgICAgICAgLi4ubGliT3B0aW9ucyxcclxuICAgICAgICBvbkNoYW5nZTogKHNlbGVjdGVkRGF0ZXMsIGRhdGVTdHIsIGluc3RhbmNlKSA9PiB7XHJcbiAgICAgICAgICBpZih0aGlzLmVtaXQpe1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgc2VsZWN0ZWREYXRlcywgZGF0ZVN0ciwgaW5zdGFuY2UgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgLy8gc2V0dGluZyBkYXRlcGlja2VyXHJcbiAgICAgIGlmKHRoaXMuZGF0YS5nZXRJbnN0YW5jZSlcclxuICAgICAgICB0aGlzLmRhdGEuZ2V0SW5zdGFuY2UoZGF0ZXBpY2tlcik7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19