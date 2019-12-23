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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sU0FBUyxNQUFNLFdBQVcsQ0FBQzs7Ozs7Ozs7OztBQVVsQyxxQ0F5QkM7Ozs7OztJQXJCQyw2QkFBVzs7Ozs7O0lBS1gscUNBQWdCOzs7OztJQUloQixtQ0FBa0I7O0lBQ2xCLG1DQUFrQjs7SUFDbEIsa0NBQWlCOzs7OztJQUlqQixrQ0FBYzs7SUFDZCxnQ0FBWTs7Ozs7SUFJWixzQ0FBa0I7O0FBR3BCO0lBQUE7UUFPVSxZQUFPLEdBQVksS0FBSyxDQUFDO0lBdUJuQyxDQUFDOzs7O0lBckJDLG1EQUFxQjs7O0lBQXJCO1FBQUEsaUJBb0JDO1FBbkJDLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUV0QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUVwQixVQUFVOzs7UUFBQztZQUNILElBQUEsZUFBOEIsRUFBNUIsVUFBRSxFQUFFLDBCQUF3Qjs7Z0JBQzlCLFVBQVUsR0FBRyxTQUFTLENBQUMsTUFBSSxFQUFJLHVCQUVoQyxVQUFVLElBQ2IsUUFBUTs7Ozs7O2dCQUFFLFVBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxRQUFRO29CQUN6QyxJQUFHLEtBQUksQ0FBQyxJQUFJLEVBQUM7d0JBQ1gsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxhQUFhLGVBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDLENBQUM7cUJBQzNEO2dCQUNILENBQUMsS0FDRDtZQUNGLHFCQUFxQjtZQUNyQixJQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztnQkFDdEIsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkE3QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QiwrSUFBZ0M7aUJBQ2pDOzs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLOztJQXdCUiwwQkFBQztDQUFBLEFBOUJELElBOEJDO1NBMUJZLG1CQUFtQjs7O0lBQzlCLG1DQUErQjs7SUFDL0IsbUNBQW1COzs7OztJQUNuQixzQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBEQVRFUElDS0VSLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBmbGF0cGlja3IgZnJvbSAnZmxhdHBpY2tyJztcclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgZGF0YXBpY2tlciBjb21wb25lbnQgXHJcbiAqIEBwcm9wZXJ0eSBpZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBsaWJPcHRpb25zIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGF0ZVBpY2tlckRhdGEge1xyXG4gIC8qKlxyXG4gICAqIGRhdGVwaWNrZXIgaWRcclxuICAgKi9cclxuICBpZDogc3RyaW5nO1xyXG4gICAvKipcclxuICAgKiBkYXRlcGlja2VyIGxpYnJhcnkgb3B0aW9uc1xyXG4gICAqIHZpZXcgTElOSzogaHR0cHM6Ly9mbGF0cGlja3IuanMub3JnL1xyXG4gICAqL1xyXG4gIGxpYk9wdGlvbnM6IGFueTtcclxuICAvKipcclxuICAgKiBmb3IgZGF0ZXBpY2tlciByYW5nZSBtaW4gYW5kIG1heCByYW5nZSB2YWx1ZVxyXG4gICAqL1xyXG4gIG1pblJhbmdlPzogbnVtYmVyO1xyXG4gIG1heFJhbmdlPzogbnVtYmVyO1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogZGF0ZXBpY2tlciBldmVudCBwYXlsb2FkXHJcbiAgICovXHJcbiAgcGF5bG9hZD86IGFueTtcclxuICBfbWV0YT86IGFueTtcclxuICAvKipcclxuICAgKiBjYWxsYmFjayBmb3Igc2F2aW5nIHRoZSBjcmVhdGVkIGRhdGVwaWNrZXIgaW5zdGFuY2VcclxuICAgKi9cclxuICBnZXRJbnN0YW5jZT86IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1kYXRlcGlja2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZXBpY2tlci5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogSURhdGVQaWNrZXJEYXRhO1xyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuICBwcml2YXRlIF9sb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCl7XHJcbiAgICBpZighdGhpcy5kYXRhIHx8IHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgaWQsIGxpYk9wdGlvbnMgfSA9IHRoaXMuZGF0YTtcclxuICAgICAgY29uc3QgZGF0ZXBpY2tlciA9IGZsYXRwaWNrcihgIyR7aWR9YCwgXHJcbiAgICAgIHtcclxuICAgICAgICAuLi5saWJPcHRpb25zLFxyXG4gICAgICAgIG9uQ2hhbmdlOiAoc2VsZWN0ZWREYXRlcywgZGF0ZVN0ciwgaW5zdGFuY2UpID0+IHtcclxuICAgICAgICAgIGlmKHRoaXMuZW1pdCl7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgeyBzZWxlY3RlZERhdGVzLCBkYXRlU3RyLCBpbnN0YW5jZSB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBzZXR0aW5nIGRhdGVwaWNrZXJcclxuICAgICAgaWYodGhpcy5kYXRhLmdldEluc3RhbmNlKVxyXG4gICAgICAgIHRoaXMuZGF0YS5nZXRJbnN0YW5jZShkYXRlcGlja2VyKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=