/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/datepicker/datepicker.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var DatepickerComponent = /** @class */ (function () {
    function DatepickerComponent() {
        this._loaded = false;
    }
    /**
     * @return {?}
     */
    DatepickerComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.data || this._loaded)
            return;
        this._loaded = true;
        setTimeout((/**
         * @return {?}
         */
        function () {
            var _a = _this.data, id = _a.id, libOptions = _a.libOptions;
            /** @type {?} */
            var datepicker = flatpickr("#" + id, tslib_1.__assign({}, libOptions, { onChange: (/**
                 * @param {?} selectedDates
                 * @param {?} dateStr
                 * @param {?} instance
                 * @return {?}
                 */
                function (selectedDates, dateStr, instance) {
                    if (_this.emit) {
                        _this.emit('change', { selectedDates: selectedDates, dateStr: dateStr, instance: instance });
                    }
                }) }));
            // setting datepicker
            if (_this.data.getInstance)
                _this.data.getInstance(datepicker);
        }));
    };
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
    return DatepickerComponent;
}());
export { DatepickerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sU0FBUyxNQUFNLFdBQVcsQ0FBQzs7Ozs7Ozs7OztBQVVsQyxxQ0F5QkM7Ozs7OztJQXJCQyw2QkFBVzs7Ozs7O0lBS1gscUNBQWdCOzs7OztJQUloQixtQ0FBa0I7O0lBQ2xCLG1DQUFrQjs7SUFDbEIsa0NBQWlCOzs7OztJQUlqQixrQ0FBYzs7SUFDZCxnQ0FBWTs7Ozs7SUFJWixzQ0FBa0I7O0FBR3BCO0lBQUE7UUFPVSxZQUFPLEdBQVksS0FBSyxDQUFDO0lBdUJuQyxDQUFDOzs7O0lBckJDLG1EQUFxQjs7O0lBQXJCO1FBQUEsaUJBb0JDO1FBbkJDLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUV0QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUVwQixVQUFVOzs7UUFBQztZQUNILElBQUEsZUFBOEIsRUFBNUIsVUFBRSxFQUFFLDBCQUF3Qjs7Z0JBQzlCLFVBQVUsR0FBRyxTQUFTLENBQUMsTUFBSSxFQUFJLHVCQUVoQyxVQUFVLElBQ2IsUUFBUTs7Ozs7O2dCQUFFLFVBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxRQUFRO29CQUN6QyxJQUFHLEtBQUksQ0FBQyxJQUFJLEVBQUM7d0JBQ1gsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxhQUFhLGVBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDLENBQUM7cUJBQzNEO2dCQUNILENBQUMsS0FDRDtZQUNGLHFCQUFxQjtZQUNyQixJQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztnQkFDdEIsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkE3QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QiwySUFBZ0M7aUJBQ2pDOzs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLOztJQXdCUiwwQkFBQztDQUFBLEFBOUJELElBOEJDO1NBMUJZLG1CQUFtQjs7O0lBQzlCLG1DQUErQjs7SUFDL0IsbUNBQW1COzs7OztJQUNuQixzQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gREFURVBJQ0tFUi50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGZsYXRwaWNrciBmcm9tICdmbGF0cGlja3InO1xuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGRhdGFwaWNrZXIgY29tcG9uZW50IFxuICogQHByb3BlcnR5IGlkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBsaWJPcHRpb25zIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0ZVBpY2tlckRhdGEge1xuICAvKipcbiAgICogZGF0ZXBpY2tlciBpZFxuICAgKi9cbiAgaWQ6IHN0cmluZztcbiAgIC8qKlxuICAgKiBkYXRlcGlja2VyIGxpYnJhcnkgb3B0aW9uc1xuICAgKiB2aWV3IExJTks6IGh0dHBzOi8vZmxhdHBpY2tyLmpzLm9yZy9cbiAgICovXG4gIGxpYk9wdGlvbnM6IGFueTtcbiAgLyoqXG4gICAqIGZvciBkYXRlcGlja2VyIHJhbmdlIG1pbiBhbmQgbWF4IHJhbmdlIHZhbHVlXG4gICAqL1xuICBtaW5SYW5nZT86IG51bWJlcjtcbiAgbWF4UmFuZ2U/OiBudW1iZXI7XG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBkYXRlcGlja2VyIGV2ZW50IHBheWxvYWRcbiAgICovXG4gIHBheWxvYWQ/OiBhbnk7XG4gIF9tZXRhPzogYW55O1xuICAvKipcbiAgICogY2FsbGJhY2sgZm9yIHNhdmluZyB0aGUgY3JlYXRlZCBkYXRlcGlja2VyIGluc3RhbmNlXG4gICAqL1xuICBnZXRJbnN0YW5jZT86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctZGF0ZXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlcGlja2VyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJRGF0ZVBpY2tlckRhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcbiAgcHJpdmF0ZSBfbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCl7XG4gICAgaWYoIXRoaXMuZGF0YSB8fCB0aGlzLl9sb2FkZWQpIHJldHVybjtcblxuICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHsgaWQsIGxpYk9wdGlvbnMgfSA9IHRoaXMuZGF0YTtcbiAgICAgIGNvbnN0IGRhdGVwaWNrZXIgPSBmbGF0cGlja3IoYCMke2lkfWAsIFxuICAgICAge1xuICAgICAgICAuLi5saWJPcHRpb25zLFxuICAgICAgICBvbkNoYW5nZTogKHNlbGVjdGVkRGF0ZXMsIGRhdGVTdHIsIGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgaWYodGhpcy5lbWl0KXtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgeyBzZWxlY3RlZERhdGVzLCBkYXRlU3RyLCBpbnN0YW5jZSB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gc2V0dGluZyBkYXRlcGlja2VyXG4gICAgICBpZih0aGlzLmRhdGEuZ2V0SW5zdGFuY2UpXG4gICAgICAgIHRoaXMuZGF0YS5nZXRJbnN0YW5jZShkYXRlcGlja2VyKTtcbiAgICB9KTtcbiAgfVxufVxuIl19