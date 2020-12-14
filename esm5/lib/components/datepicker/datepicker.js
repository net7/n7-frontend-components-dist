//---------------------------
// DATEPICKER.ts
//---------------------------
import { __assign, __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var DatepickerComponent = /** @class */ (function () {
    function DatepickerComponent() {
        this._loaded = false;
    }
    DatepickerComponent.prototype.ngAfterContentChecked = function () {
        var _this = this;
        if (!this.data || this._loaded)
            return;
        this._loaded = true;
        setTimeout(function () {
            var _a = _this.data, id = _a.id, libOptions = _a.libOptions;
            import('flatpickr').then(function (module) {
                var flatpickr = module.default;
                var datepicker = flatpickr("#" + id, __assign(__assign({}, libOptions), { onChange: function (selectedDates, dateStr, instance) {
                        if (_this.emit) {
                            _this.emit('change', { selectedDates: selectedDates, dateStr: dateStr, instance: instance });
                        }
                    } }));
                // setting datepicker
                if (_this.data.getInstance)
                    _this.data.getInstance(datepicker);
            });
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DatepickerComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DatepickerComponent.prototype, "emit", void 0);
    DatepickerComponent = __decorate([
        Component({
            selector: 'n7-datepicker',
            template: "<div *ngIf=\"data\" class=\"n7-datepicker {{ data.classes || '' }}\">\r\n  <input type=\"text\" id=\"{{this.data.id}}\"/>\r\n</div>"
        })
    ], DatepickerComponent);
    return DatepickerComponent;
}());
export { DatepickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixnQkFBZ0I7QUFDaEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXlDakQ7SUFBQTtRQUtVLFlBQU8sR0FBRyxLQUFLLENBQUM7SUF5QjFCLENBQUM7SUF2QkMsbURBQXFCLEdBQXJCO1FBQUEsaUJBc0JDO1FBckJDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUV2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUVwQixVQUFVLENBQUM7WUFDSCxJQUFBLGVBQThCLEVBQTVCLFVBQUUsRUFBRSwwQkFBd0IsQ0FBQztZQUNyQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtnQkFDdEIsSUFBQSwwQkFBa0IsQ0FBWTtnQkFDdEMsSUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLE1BQUksRUFBSSx3QkFFOUIsVUFBVSxLQUNiLFFBQVEsRUFBRSxVQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsUUFBUTt3QkFDekMsSUFBSSxLQUFJLENBQUMsSUFBSSxFQUFFOzRCQUNiLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsYUFBYSxlQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQyxDQUFDO3lCQUMzRDtvQkFDSCxDQUFDLElBQ0QsQ0FBQztnQkFDTCxxQkFBcUI7Z0JBQ3JCLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXO29CQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9ELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBNUJRO1FBQVIsS0FBSyxFQUFFOztxREFBc0I7SUFFckI7UUFBUixLQUFLLEVBQUU7O3FEQUFXO0lBSFIsbUJBQW1CO1FBSi9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLCtJQUFnQztTQUNqQyxDQUFDO09BQ1csbUJBQW1CLENBOEIvQjtJQUFELDBCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0E5QlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gREFURVBJQ0tFUi50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBkYXRhcGlja2VyIGNvbXBvbmVudFxyXG4gKiBAcHJvcGVydHkgaWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgbGliT3B0aW9ucyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZVBpY2tlckRhdGEge1xyXG4gIC8qKlxyXG4gICAqIGRhdGVwaWNrZXIgaWRcclxuICAgKi9cclxuICBpZDogc3RyaW5nO1xyXG4gICAvKipcclxuICAgKiBkYXRlcGlja2VyIGxpYnJhcnkgb3B0aW9uc1xyXG4gICAqIHZpZXcgTElOSzogaHR0cHM6Ly9mbGF0cGlja3IuanMub3JnL1xyXG4gICAqL1xyXG4gIGxpYk9wdGlvbnM6IGFueTtcclxuICAvKipcclxuICAgKiBmb3IgZGF0ZXBpY2tlciByYW5nZSBtaW4gYW5kIG1heCByYW5nZSB2YWx1ZVxyXG4gICAqL1xyXG4gIG1pblJhbmdlPzogbnVtYmVyO1xyXG4gIG1heFJhbmdlPzogbnVtYmVyO1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogZGF0ZXBpY2tlciBldmVudCBwYXlsb2FkXHJcbiAgICovXHJcbiAgcGF5bG9hZD86IGFueTtcclxuICBfbWV0YT86IGFueTtcclxuICAvKipcclxuICAgKiBjYWxsYmFjayBmb3Igc2F2aW5nIHRoZSBjcmVhdGVkIGRhdGVwaWNrZXIgaW5zdGFuY2VcclxuICAgKi9cclxuICBnZXRJbnN0YW5jZT86IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1kYXRlcGlja2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZXBpY2tlci5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogRGF0ZVBpY2tlckRhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBfbG9hZGVkID0gZmFsc2U7XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcclxuICAgIGlmICghdGhpcy5kYXRhIHx8IHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgaWQsIGxpYk9wdGlvbnMgfSA9IHRoaXMuZGF0YTtcclxuICAgICAgaW1wb3J0KCdmbGF0cGlja3InKS50aGVuKChtb2R1bGUpID0+IHtcclxuICAgICAgICBjb25zdCB7IGRlZmF1bHQ6IGZsYXRwaWNrciB9ID0gbW9kdWxlO1xyXG4gICAgICAgIGNvbnN0IGRhdGVwaWNrZXIgPSBmbGF0cGlja3IoYCMke2lkfWAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIC4uLmxpYk9wdGlvbnMsXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlOiAoc2VsZWN0ZWREYXRlcywgZGF0ZVN0ciwgaW5zdGFuY2UpID0+IHtcclxuICAgICAgICAgICAgICBpZiAodGhpcy5lbWl0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgc2VsZWN0ZWREYXRlcywgZGF0ZVN0ciwgaW5zdGFuY2UgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAvLyBzZXR0aW5nIGRhdGVwaWNrZXJcclxuICAgICAgICBpZiAodGhpcy5kYXRhLmdldEluc3RhbmNlKSB0aGlzLmRhdGEuZ2V0SW5zdGFuY2UoZGF0ZXBpY2tlcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==