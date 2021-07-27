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
        this._loaded = true;
        setTimeout(function () {
            var _a = _this.data, containerId = _a.containerId, libOptions = _a.libOptions;
            import('apexcharts/dist/apexcharts.common.js').then(function (module) {
                var ApexCharts = module.default;
                var chart = new ApexCharts(document.querySelector("#" + containerId), libOptions);
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
            template: "<div *ngIf=\"data\" class=\"n7-chart {{ data.classes || '' }}\">\r\n    <div id=\"{{ data.containerId }}\"></div>\r\n</div>"
        })
    ], ChartComponent);
    return ChartComponent;
}());
export { ChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NoYXJ0L2NoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2QkFBNkI7QUFDN0IsV0FBVztBQUNYLDZCQUE2QjtBQUM3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUE0Q3RFO0lBQUE7UUFLVSxZQUFPLEdBQUcsS0FBSyxDQUFDO0lBaUIxQixDQUFDO0lBZkMsOENBQXFCLEdBQXJCO1FBQUEsaUJBY0M7UUFiQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFcEIsVUFBVSxDQUFDO1lBQ0gsSUFBQSxlQUF1QyxFQUFyQyw0QkFBVyxFQUFFLDBCQUF3QixDQUFDO1lBQzlDLE1BQU0sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07Z0JBQ2pELElBQUEsMkJBQW1CLENBQVk7Z0JBQ3ZDLElBQU0sS0FBSyxHQUFHLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBSSxXQUFhLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFDcEYsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUVmLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRO29CQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBcEJRO1FBQVIsS0FBSyxFQUFFOztnREFBaUI7SUFFaEI7UUFBUixLQUFLLEVBQUU7O2dEQUFXO0lBSFIsY0FBYztRQUoxQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQix1SUFBMkI7U0FDNUIsQ0FBQztPQUNXLGNBQWMsQ0FzQjFCO0lBQUQscUJBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQXRCWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQ0hBUlQudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBcGV4T3B0aW9ucyB9IGZyb20gJ2FwZXhjaGFydHMnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgQ2hhcnRDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgX2NoYXJ0SWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgb3B0aW9ucyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4qL1xyXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0RGF0YSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgY2hhcnRcclxuICAgKi9cclxuICBjb250YWluZXJJZDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGxpYk9wdGlvbnMgZm9yIHRoZSBjaGFydCAoIGRvY3MgaGVyZSA6IGh0dHBzOi8vYXBleGNoYXJ0cy5jb20vZG9jcy9vcHRpb25zLyApXHJcbiAgICovXHJcbiAgbGliT3B0aW9uczogQXBleE9wdGlvbnM7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcclxuICAgKi9cclxuICBwYXlsb2FkPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xyXG4gICAqL1xyXG4gIF9tZXRhPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIGNhbGxiYWNrIGZvciBzYXZpbmcgdGhlIGNyZWF0ZWQgY2hhcnQgaW5zdGFuY2VcclxuICAgKi9cclxuICBzZXRDaGFydD86IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1jaGFydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXJ0Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IENoYXJ0RGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBwcml2YXRlIF9sb2FkZWQgPSBmYWxzZTtcclxuXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xyXG4gICAgaWYgKCF0aGlzLmRhdGEgfHwgdGhpcy5fbG9hZGVkKSByZXR1cm47XHJcbiAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCB7IGNvbnRhaW5lcklkLCBsaWJPcHRpb25zIH0gPSB0aGlzLmRhdGE7XHJcbiAgICAgIGltcG9ydCgnYXBleGNoYXJ0cy9kaXN0L2FwZXhjaGFydHMuY29tbW9uLmpzJykudGhlbigobW9kdWxlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBkZWZhdWx0OiBBcGV4Q2hhcnRzIH0gPSBtb2R1bGU7XHJcbiAgICAgICAgY29uc3QgY2hhcnQgPSBuZXcgQXBleENoYXJ0cyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjb250YWluZXJJZH1gKSwgbGliT3B0aW9ucyk7XHJcbiAgICAgICAgY2hhcnQucmVuZGVyKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuc2V0Q2hhcnQpIHRoaXMuZGF0YS5zZXRDaGFydChjaGFydCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==