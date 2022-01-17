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
            template: "<div *ngIf=\"data\" class=\"n7-datepicker {{ data.classes || '' }}\">\n  <input type=\"text\" id=\"{{this.data.id}}\"/>\n</div>"
        })
    ], DatepickerComponent);
    return DatepickerComponent;
}());
export { DatepickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixnQkFBZ0I7QUFDaEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXlDakQ7SUFBQTtRQUtVLFlBQU8sR0FBRyxLQUFLLENBQUM7SUF5QjFCLENBQUM7SUF2QkMsbURBQXFCLEdBQXJCO1FBQUEsaUJBc0JDO1FBckJDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUV2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUVwQixVQUFVLENBQUM7WUFDSCxJQUFBLGVBQThCLEVBQTVCLFVBQUUsRUFBRSwwQkFBd0IsQ0FBQztZQUNyQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtnQkFDdEIsSUFBQSwwQkFBa0IsQ0FBWTtnQkFDdEMsSUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLE1BQUksRUFBSSx3QkFFOUIsVUFBVSxLQUNiLFFBQVEsRUFBRSxVQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsUUFBUTt3QkFDekMsSUFBSSxLQUFJLENBQUMsSUFBSSxFQUFFOzRCQUNiLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsYUFBYSxlQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQyxDQUFDO3lCQUMzRDtvQkFDSCxDQUFDLElBQ0QsQ0FBQztnQkFDTCxxQkFBcUI7Z0JBQ3JCLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXO29CQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9ELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBNUJRO1FBQVIsS0FBSyxFQUFFOztxREFBc0I7SUFFckI7UUFBUixLQUFLLEVBQUU7O3FEQUFXO0lBSFIsbUJBQW1CO1FBSi9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLDJJQUFnQztTQUNqQyxDQUFDO09BQ1csbUJBQW1CLENBOEIvQjtJQUFELDBCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0E5QlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERBVEVQSUNLRVIudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8qKlxuICogSW50ZXJmYWNlIGZvciBkYXRhcGlja2VyIGNvbXBvbmVudFxuICogQHByb3BlcnR5IGlkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBsaWJPcHRpb25zIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBEYXRlUGlja2VyRGF0YSB7XG4gIC8qKlxuICAgKiBkYXRlcGlja2VyIGlkXG4gICAqL1xuICBpZDogc3RyaW5nO1xuICAgLyoqXG4gICAqIGRhdGVwaWNrZXIgbGlicmFyeSBvcHRpb25zXG4gICAqIHZpZXcgTElOSzogaHR0cHM6Ly9mbGF0cGlja3IuanMub3JnL1xuICAgKi9cbiAgbGliT3B0aW9uczogYW55O1xuICAvKipcbiAgICogZm9yIGRhdGVwaWNrZXIgcmFuZ2UgbWluIGFuZCBtYXggcmFuZ2UgdmFsdWVcbiAgICovXG4gIG1pblJhbmdlPzogbnVtYmVyO1xuICBtYXhSYW5nZT86IG51bWJlcjtcbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIGRhdGVwaWNrZXIgZXZlbnQgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbiAgX21ldGE/OiBhbnk7XG4gIC8qKlxuICAgKiBjYWxsYmFjayBmb3Igc2F2aW5nIHRoZSBjcmVhdGVkIGRhdGVwaWNrZXIgaW5zdGFuY2VcbiAgICovXG4gIGdldEluc3RhbmNlPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1kYXRlcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGVwaWNrZXIuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IERhdGVQaWNrZXJEYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBwcml2YXRlIF9sb2FkZWQgPSBmYWxzZTtcblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgaWYgKCF0aGlzLmRhdGEgfHwgdGhpcy5fbG9hZGVkKSByZXR1cm47XG5cbiAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCB7IGlkLCBsaWJPcHRpb25zIH0gPSB0aGlzLmRhdGE7XG4gICAgICBpbXBvcnQoJ2ZsYXRwaWNrcicpLnRoZW4oKG1vZHVsZSkgPT4ge1xuICAgICAgICBjb25zdCB7IGRlZmF1bHQ6IGZsYXRwaWNrciB9ID0gbW9kdWxlO1xuICAgICAgICBjb25zdCBkYXRlcGlja2VyID0gZmxhdHBpY2tyKGAjJHtpZH1gLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIC4uLmxpYk9wdGlvbnMsXG4gICAgICAgICAgICBvbkNoYW5nZTogKHNlbGVjdGVkRGF0ZXMsIGRhdGVTdHIsIGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmVtaXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgc2VsZWN0ZWREYXRlcywgZGF0ZVN0ciwgaW5zdGFuY2UgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gc2V0dGluZyBkYXRlcGlja2VyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuZ2V0SW5zdGFuY2UpIHRoaXMuZGF0YS5nZXRJbnN0YW5jZShkYXRlcGlja2VyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=