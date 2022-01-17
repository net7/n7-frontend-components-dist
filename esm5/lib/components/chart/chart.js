import { __decorate, __metadata } from "tslib";
//---------------------------
// CHART.ts
//---------------------------
import { Component, Input } from '@angular/core';
var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
        this._loaded = false;
    }
    ChartComponent.prototype.ngAfterContentChecked = function () {
        var _this = this;
        if (!this.data || this._loaded)
            return;
        var container = document.getElementById(this.data.containerId);
        if (!container)
            return;
        this._loaded = true;
        setTimeout(function () {
            var libOptions = _this.data.libOptions;
            import('apexcharts/dist/apexcharts.common.js').then(function (module) {
                var ApexCharts = module.default;
                var chart = new ApexCharts(container, libOptions);
                chart.render();
                if (_this.data.setChart)
                    _this.data.setChart(chart);
            });
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ChartComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ChartComponent.prototype, "emit", void 0);
    ChartComponent = __decorate([
        Component({
            selector: 'n7-chart',
            template: "<div *ngIf=\"data\" class=\"n7-chart {{ data.classes || '' }}\">\n    <div id=\"{{ data.containerId }}\"></div>\n</div>"
        })
    ], ChartComponent);
    return ChartComponent;
}());
export { ChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NoYXJ0L2NoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2QkFBNkI7QUFDN0IsV0FBVztBQUNYLDZCQUE2QjtBQUM3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUE0Q3RFO0lBQUE7UUFLVSxZQUFPLEdBQUcsS0FBSyxDQUFDO0lBbUIxQixDQUFDO0lBakJDLDhDQUFxQixHQUFyQjtRQUFBLGlCQWdCQztRQWZDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUN2QyxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRXBCLFVBQVUsQ0FBQztZQUNELElBQUEsa0NBQVUsQ0FBZTtZQUNqQyxNQUFNLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO2dCQUNqRCxJQUFBLDJCQUFtQixDQUFZO2dCQUN2QyxJQUFNLEtBQUssR0FBRyxJQUFJLFVBQVUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQ3BELEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFFZixJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtvQkFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwRCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXRCUTtRQUFSLEtBQUssRUFBRTs7Z0RBQWlCO0lBRWhCO1FBQVIsS0FBSyxFQUFFOztnREFBVztJQUhSLGNBQWM7UUFKMUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsbUlBQTJCO1NBQzVCLENBQUM7T0FDVyxjQUFjLENBd0IxQjtJQUFELHFCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0F4QlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDSEFSVC50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwZXhPcHRpb25zIH0gZnJvbSAnYXBleGNoYXJ0cyc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBDaGFydENvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IF9jaGFydElkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBvcHRpb25zIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4qL1xuZXhwb3J0IGludGVyZmFjZSBDaGFydERhdGEge1xuXG4gIC8qKlxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGNoYXJ0XG4gICAqL1xuICBjb250YWluZXJJZDogc3RyaW5nO1xuICAvKipcbiAgICogbGliT3B0aW9ucyBmb3IgdGhlIGNoYXJ0ICggZG9jcyBoZXJlIDogaHR0cHM6Ly9hcGV4Y2hhcnRzLmNvbS9kb2NzL29wdGlvbnMvIClcbiAgICovXG4gIGxpYk9wdGlvbnM6IEFwZXhPcHRpb25zO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAqL1xuICBwYXlsb2FkPzogYW55O1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvXG4gICAqL1xuICBfbWV0YT86IGFueTtcbiAgLyoqXG4gICAqIGNhbGxiYWNrIGZvciBzYXZpbmcgdGhlIGNyZWF0ZWQgY2hhcnQgaW5zdGFuY2VcbiAgICovXG4gIHNldENoYXJ0PzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1jaGFydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGFydC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuICBASW5wdXQoKSBkYXRhOiBDaGFydERhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIHByaXZhdGUgX2xvYWRlZCA9IGZhbHNlO1xuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICBpZiAoIXRoaXMuZGF0YSB8fCB0aGlzLl9sb2FkZWQpIHJldHVybjtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRhdGEuY29udGFpbmVySWQpO1xuICAgIGlmICghY29udGFpbmVyKSByZXR1cm47XG4gICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgeyBsaWJPcHRpb25zIH0gPSB0aGlzLmRhdGE7XG4gICAgICBpbXBvcnQoJ2FwZXhjaGFydHMvZGlzdC9hcGV4Y2hhcnRzLmNvbW1vbi5qcycpLnRoZW4oKG1vZHVsZSkgPT4ge1xuICAgICAgICBjb25zdCB7IGRlZmF1bHQ6IEFwZXhDaGFydHMgfSA9IG1vZHVsZTtcbiAgICAgICAgY29uc3QgY2hhcnQgPSBuZXcgQXBleENoYXJ0cyhjb250YWluZXIsIGxpYk9wdGlvbnMpO1xuICAgICAgICBjaGFydC5yZW5kZXIoKTtcblxuICAgICAgICBpZiAodGhpcy5kYXRhLnNldENoYXJ0KSB0aGlzLmRhdGEuc2V0Q2hhcnQoY2hhcnQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==