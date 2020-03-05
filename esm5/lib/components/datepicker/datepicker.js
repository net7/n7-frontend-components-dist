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
                    template: "<div *ngIf=\"data\" class=\"n7-datepicker {{ data.classes || '' }}\">\r\n  <input type=\"text\" id=\"{{this.data.id}}\"/>\r\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sU0FBUyxNQUFNLFdBQVcsQ0FBQzs7Ozs7Ozs7OztBQVVsQyxvQ0F5QkM7Ozs7OztJQXJCQyw0QkFBVzs7Ozs7O0lBS1gsb0NBQWdCOzs7OztJQUloQixrQ0FBa0I7O0lBQ2xCLGtDQUFrQjs7SUFDbEIsaUNBQWlCOzs7OztJQUlqQixpQ0FBYzs7SUFDZCwrQkFBWTs7Ozs7SUFJWixxQ0FBa0I7O0FBR3BCO0lBQUE7UUFTVSxZQUFPLEdBQUcsS0FBSyxDQUFDO0lBc0IxQixDQUFDOzs7O0lBcEJDLG1EQUFxQjs7O0lBQXJCO1FBQUEsaUJBbUJDO1FBbEJDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUV2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUVwQixVQUFVOzs7UUFBQztZQUNILElBQUEsZUFBOEIsRUFBNUIsVUFBRSxFQUFFLDBCQUF3Qjs7Z0JBQzlCLFVBQVUsR0FBRyxTQUFTLENBQUMsTUFBSSxFQUFJLHVCQUU5QixVQUFVLElBQ2IsUUFBUTs7Ozs7O2dCQUFFLFVBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxRQUFRO29CQUN6QyxJQUFJLEtBQUksQ0FBQyxJQUFJLEVBQUU7d0JBQ2IsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxhQUFhLGVBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDLENBQUM7cUJBQzNEO2dCQUNILENBQUMsS0FDRDtZQUNKLHFCQUFxQjtZQUNyQixJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztnQkFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvRCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQTlCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLCtJQUFnQztpQkFDakM7Ozt1QkFFRSxLQUFLO3VCQUVMLEtBQUs7O0lBd0JSLDBCQUFDO0NBQUEsQUEvQkQsSUErQkM7U0EzQlksbUJBQW1COzs7SUFDOUIsbUNBQThCOztJQUU5QixtQ0FBbUI7Ozs7O0lBRW5CLHNDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIERBVEVQSUNLRVIudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IGZsYXRwaWNrciBmcm9tICdmbGF0cGlja3InO1xyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBkYXRhcGlja2VyIGNvbXBvbmVudFxyXG4gKiBAcHJvcGVydHkgaWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgbGliT3B0aW9ucyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZVBpY2tlckRhdGEge1xyXG4gIC8qKlxyXG4gICAqIGRhdGVwaWNrZXIgaWRcclxuICAgKi9cclxuICBpZDogc3RyaW5nO1xyXG4gICAvKipcclxuICAgKiBkYXRlcGlja2VyIGxpYnJhcnkgb3B0aW9uc1xyXG4gICAqIHZpZXcgTElOSzogaHR0cHM6Ly9mbGF0cGlja3IuanMub3JnL1xyXG4gICAqL1xyXG4gIGxpYk9wdGlvbnM6IGFueTtcclxuICAvKipcclxuICAgKiBmb3IgZGF0ZXBpY2tlciByYW5nZSBtaW4gYW5kIG1heCByYW5nZSB2YWx1ZVxyXG4gICAqL1xyXG4gIG1pblJhbmdlPzogbnVtYmVyO1xyXG4gIG1heFJhbmdlPzogbnVtYmVyO1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogZGF0ZXBpY2tlciBldmVudCBwYXlsb2FkXHJcbiAgICovXHJcbiAgcGF5bG9hZD86IGFueTtcclxuICBfbWV0YT86IGFueTtcclxuICAvKipcclxuICAgKiBjYWxsYmFjayBmb3Igc2F2aW5nIHRoZSBjcmVhdGVkIGRhdGVwaWNrZXIgaW5zdGFuY2VcclxuICAgKi9cclxuICBnZXRJbnN0YW5jZT86IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1kYXRlcGlja2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZXBpY2tlci5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogRGF0ZVBpY2tlckRhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBfbG9hZGVkID0gZmFsc2U7XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcclxuICAgIGlmICghdGhpcy5kYXRhIHx8IHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgaWQsIGxpYk9wdGlvbnMgfSA9IHRoaXMuZGF0YTtcclxuICAgICAgY29uc3QgZGF0ZXBpY2tlciA9IGZsYXRwaWNrcihgIyR7aWR9YCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAuLi5saWJPcHRpb25zLFxyXG4gICAgICAgICAgb25DaGFuZ2U6IChzZWxlY3RlZERhdGVzLCBkYXRlU3RyLCBpbnN0YW5jZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5lbWl0KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7IHNlbGVjdGVkRGF0ZXMsIGRhdGVTdHIsIGluc3RhbmNlIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIC8vIHNldHRpbmcgZGF0ZXBpY2tlclxyXG4gICAgICBpZiAodGhpcy5kYXRhLmdldEluc3RhbmNlKSB0aGlzLmRhdGEuZ2V0SW5zdGFuY2UoZGF0ZXBpY2tlcik7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19