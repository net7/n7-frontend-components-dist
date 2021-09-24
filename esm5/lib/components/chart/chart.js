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
            template: "<div *ngIf=\"data\" class=\"n7-chart {{ data.classes || '' }}\">\n    <div id=\"{{ data.containerId }}\"></div>\n</div>"
        })
    ], ChartComponent);
    return ChartComponent;
}());
export { ChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NoYXJ0L2NoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2QkFBNkI7QUFDN0IsV0FBVztBQUNYLDZCQUE2QjtBQUM3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUE0Q3RFO0lBQUE7UUFLVSxZQUFPLEdBQUcsS0FBSyxDQUFDO0lBaUIxQixDQUFDO0lBZkMsOENBQXFCLEdBQXJCO1FBQUEsaUJBY0M7UUFiQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFcEIsVUFBVSxDQUFDO1lBQ0gsSUFBQSxlQUF1QyxFQUFyQyw0QkFBVyxFQUFFLDBCQUF3QixDQUFDO1lBQzlDLE1BQU0sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07Z0JBQ2pELElBQUEsMkJBQW1CLENBQVk7Z0JBQ3ZDLElBQU0sS0FBSyxHQUFHLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBSSxXQUFhLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFDcEYsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUVmLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRO29CQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBcEJRO1FBQVIsS0FBSyxFQUFFOztnREFBaUI7SUFFaEI7UUFBUixLQUFLLEVBQUU7O2dEQUFXO0lBSFIsY0FBYztRQUoxQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixtSUFBMkI7U0FDNUIsQ0FBQztPQUNXLGNBQWMsQ0FzQjFCO0lBQUQscUJBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQXRCWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENIQVJULnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBleE9wdGlvbnMgfSBmcm9tICdhcGV4Y2hhcnRzJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIENoYXJ0Q29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgX2NoYXJ0SWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IG9wdGlvbnMgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiovXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0RGF0YSB7XG5cbiAgLyoqXG4gICAqIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgY2hhcnRcbiAgICovXG4gIGNvbnRhaW5lcklkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBsaWJPcHRpb25zIGZvciB0aGUgY2hhcnQgKCBkb2NzIGhlcmUgOiBodHRwczovL2FwZXhjaGFydHMuY29tL2RvY3Mvb3B0aW9ucy8gKVxuICAgKi9cbiAgbGliT3B0aW9uczogQXBleE9wdGlvbnM7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgICovXG4gIHBheWxvYWQ/OiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICovXG4gIF9tZXRhPzogYW55O1xuICAvKipcbiAgICogY2FsbGJhY2sgZm9yIHNhdmluZyB0aGUgY3JlYXRlZCBjaGFydCBpbnN0YW5jZVxuICAgKi9cbiAgc2V0Q2hhcnQ/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWNoYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXJ0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG4gIEBJbnB1dCgpIGRhdGE6IENoYXJ0RGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgcHJpdmF0ZSBfbG9hZGVkID0gZmFsc2U7XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgIGlmICghdGhpcy5kYXRhIHx8IHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xuICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHsgY29udGFpbmVySWQsIGxpYk9wdGlvbnMgfSA9IHRoaXMuZGF0YTtcbiAgICAgIGltcG9ydCgnYXBleGNoYXJ0cy9kaXN0L2FwZXhjaGFydHMuY29tbW9uLmpzJykudGhlbigobW9kdWxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgZGVmYXVsdDogQXBleENoYXJ0cyB9ID0gbW9kdWxlO1xuICAgICAgICBjb25zdCBjaGFydCA9IG5ldyBBcGV4Q2hhcnRzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NvbnRhaW5lcklkfWApLCBsaWJPcHRpb25zKTtcbiAgICAgICAgY2hhcnQucmVuZGVyKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZGF0YS5zZXRDaGFydCkgdGhpcy5kYXRhLnNldENoYXJ0KGNoYXJ0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=