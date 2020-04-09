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
            import('flatpickr').then((/**
             * @param {?} module
             * @return {?}
             */
            function (module) {
                var flatpickr = module.default;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7O0FBVWpELG9DQXlCQzs7Ozs7O0lBckJDLDRCQUFXOzs7Ozs7SUFLWCxvQ0FBZ0I7Ozs7O0lBSWhCLGtDQUFrQjs7SUFDbEIsa0NBQWtCOztJQUNsQixpQ0FBaUI7Ozs7O0lBSWpCLGlDQUFjOztJQUNkLCtCQUFZOzs7OztJQUlaLHFDQUFrQjs7QUFHcEI7SUFBQTtRQVNVLFlBQU8sR0FBRyxLQUFLLENBQUM7SUF5QjFCLENBQUM7Ozs7SUF2QkMsbURBQXFCOzs7SUFBckI7UUFBQSxpQkFzQkM7UUFyQkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBRXZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRXBCLFVBQVU7OztRQUFDO1lBQ0gsSUFBQSxlQUE4QixFQUE1QixVQUFFLEVBQUUsMEJBQXdCO1lBQ3BDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQyxNQUFNO2dCQUN0QixJQUFBLDBCQUFrQjs7b0JBQ3BCLFVBQVUsR0FBRyxTQUFTLENBQUMsTUFBSSxFQUFJLHVCQUU5QixVQUFVLElBQ2IsUUFBUTs7Ozs7O29CQUFFLFVBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxRQUFRO3dCQUN6QyxJQUFJLEtBQUksQ0FBQyxJQUFJLEVBQUU7NEJBQ2IsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxhQUFhLGVBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDLENBQUM7eUJBQzNEO29CQUNILENBQUMsS0FDRDtnQkFDSixxQkFBcUI7Z0JBQ3JCLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXO29CQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9ELENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkFqQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QiwySUFBZ0M7aUJBQ2pDOzs7dUJBRUUsS0FBSzt1QkFFTCxLQUFLOztJQTJCUiwwQkFBQztDQUFBLEFBbENELElBa0NDO1NBOUJZLG1CQUFtQjs7O0lBQzlCLG1DQUE4Qjs7SUFFOUIsbUNBQW1COzs7OztJQUVuQixzQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gREFURVBJQ0tFUi50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGRhdGFwaWNrZXIgY29tcG9uZW50XG4gKiBAcHJvcGVydHkgaWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGxpYk9wdGlvbnMgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVQaWNrZXJEYXRhIHtcbiAgLyoqXG4gICAqIGRhdGVwaWNrZXIgaWRcbiAgICovXG4gIGlkOiBzdHJpbmc7XG4gICAvKipcbiAgICogZGF0ZXBpY2tlciBsaWJyYXJ5IG9wdGlvbnNcbiAgICogdmlldyBMSU5LOiBodHRwczovL2ZsYXRwaWNrci5qcy5vcmcvXG4gICAqL1xuICBsaWJPcHRpb25zOiBhbnk7XG4gIC8qKlxuICAgKiBmb3IgZGF0ZXBpY2tlciByYW5nZSBtaW4gYW5kIG1heCByYW5nZSB2YWx1ZVxuICAgKi9cbiAgbWluUmFuZ2U/OiBudW1iZXI7XG4gIG1heFJhbmdlPzogbnVtYmVyO1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogZGF0ZXBpY2tlciBldmVudCBwYXlsb2FkXG4gICAqL1xuICBwYXlsb2FkPzogYW55O1xuICBfbWV0YT86IGFueTtcbiAgLyoqXG4gICAqIGNhbGxiYWNrIGZvciBzYXZpbmcgdGhlIGNyZWF0ZWQgZGF0ZXBpY2tlciBpbnN0YW5jZVxuICAgKi9cbiAgZ2V0SW5zdGFuY2U/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWRhdGVwaWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZXBpY2tlci5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogRGF0ZVBpY2tlckRhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIHByaXZhdGUgX2xvYWRlZCA9IGZhbHNlO1xuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICBpZiAoIXRoaXMuZGF0YSB8fCB0aGlzLl9sb2FkZWQpIHJldHVybjtcblxuICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHsgaWQsIGxpYk9wdGlvbnMgfSA9IHRoaXMuZGF0YTtcbiAgICAgIGltcG9ydCgnZmxhdHBpY2tyJykudGhlbigobW9kdWxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgZGVmYXVsdDogZmxhdHBpY2tyIH0gPSBtb2R1bGU7XG4gICAgICAgIGNvbnN0IGRhdGVwaWNrZXIgPSBmbGF0cGlja3IoYCMke2lkfWAsXG4gICAgICAgICAge1xuICAgICAgICAgICAgLi4ubGliT3B0aW9ucyxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiAoc2VsZWN0ZWREYXRlcywgZGF0ZVN0ciwgaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZW1pdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgeyBzZWxlY3RlZERhdGVzLCBkYXRlU3RyLCBpbnN0YW5jZSB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAvLyBzZXR0aW5nIGRhdGVwaWNrZXJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5nZXRJbnN0YW5jZSkgdGhpcy5kYXRhLmdldEluc3RhbmNlKGRhdGVwaWNrZXIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==