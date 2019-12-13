/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// CHART.ts
//---------------------------
import { Component, Input } from '@angular/core';
import ApexCharts from 'apexcharts/dist/apexcharts.common.js';
/**
 * Interface for ChartComponent's "data"
 *
 * \@property _chartId (required)
 * \@property options (required)
 * \@property classes (optional)
 * \@property payload (optional)
 * \@property _meta (optional)
 * @record
 */
export function IChartData() { }
if (false) {
    /**
     * unique identifier for the chart
     * @type {?}
     */
    IChartData.prototype.containerId;
    /**
     * libOptions for the chart ( docs here : https://apexcharts.com/docs/options/ )
     * @type {?}
     */
    IChartData.prototype.libOptions;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    IChartData.prototype.classes;
    /**
     * action click's payload
     * @type {?|undefined}
     */
    IChartData.prototype.payload;
    /**
     * additional info
     * @type {?|undefined}
     */
    IChartData.prototype._meta;
    /**
     * callback for saving the created chart instance
     * @type {?|undefined}
     */
    IChartData.prototype.setChart;
}
var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
        this._loaded = false;
    }
    /**
     * @return {?}
     */
    ChartComponent.prototype.ngAfterContentChecked = /**
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
            var _a = _this.data, containerId = _a.containerId, libOptions = _a.libOptions;
            /** @type {?} */
            var chart = new ApexCharts(document.querySelector("#" + containerId), libOptions);
            chart.render();
            if (_this.data.setChart)
                _this.data.setChart(chart);
        }));
    };
    ChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-chart',
                    template: "<div *ngIf=\"data\" class=\"n7-chart {{ data.classes || '' }}\">\r\n    <div id=\"{{ data.containerId }}\"></div>\r\n</div>"
                }] }
    ];
    ChartComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return ChartComponent;
}());
export { ChartComponent };
if (false) {
    /** @type {?} */
    ChartComponent.prototype.data;
    /** @type {?} */
    ChartComponent.prototype.emit;
    /**
     * @type {?}
     * @private
     */
    ChartComponent.prototype._loaded;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NoYXJ0L2NoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxVQUFVLE1BQU0sc0NBQXNDLENBQUM7Ozs7Ozs7Ozs7O0FBWTlELGdDQTBCQzs7Ozs7O0lBckJDLGlDQUFvQjs7Ozs7SUFJcEIsZ0NBQWdCOzs7OztJQUloQiw2QkFBaUI7Ozs7O0lBSWpCLDZCQUFjOzs7OztJQUlkLDJCQUFZOzs7OztJQUlaLDhCQUFlOztBQUdqQjtJQUFBO1FBT1UsWUFBTyxHQUFZLEtBQUssQ0FBQztJQWVuQyxDQUFDOzs7O0lBYkMsOENBQXFCOzs7SUFBckI7UUFBQSxpQkFZQztRQVhDLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUVwQixVQUFVOzs7UUFBQztZQUNILElBQUEsZUFBdUMsRUFBckMsNEJBQVcsRUFBRSwwQkFBd0I7O2dCQUN2QyxLQUFLLEdBQUcsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFJLFdBQWEsQ0FBQyxFQUFFLFVBQVUsQ0FBQztZQUNuRixLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFZixJQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtnQkFDbkIsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkFyQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQix1SUFBMkI7aUJBQzVCOzs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLOztJQWdCUixxQkFBQztDQUFBLEFBdEJELElBc0JDO1NBbEJZLGNBQWM7OztJQUN6Qiw4QkFBMEI7O0lBQzFCLDhCQUFtQjs7Ozs7SUFDbkIsaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQ0hBUlQudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IEFwZXhDaGFydHMgZnJvbSAnYXBleGNoYXJ0cy9kaXN0L2FwZXhjaGFydHMuY29tbW9uLmpzJztcclxuXHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBDaGFydENvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkgX2NoYXJ0SWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgb3B0aW9ucyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4qL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDaGFydERhdGEge1xyXG5cclxuICAvKipcclxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGNoYXJ0XHJcbiAgICovXHJcbiAgY29udGFpbmVySWQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiBsaWJPcHRpb25zIGZvciB0aGUgY2hhcnQgKCBkb2NzIGhlcmUgOiBodHRwczovL2FwZXhjaGFydHMuY29tL2RvY3Mvb3B0aW9ucy8gKVxyXG4gICAqL1xyXG4gIGxpYk9wdGlvbnM6IGFueTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICAqL1xyXG4gIHBheWxvYWQ/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogY2FsbGJhY2sgZm9yIHNhdmluZyB0aGUgY3JlYXRlZCBjaGFydCBpbnN0YW5jZVxyXG4gICAqL1xyXG4gIHNldENoYXJ0PzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWNoYXJ0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2hhcnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XHJcbiAgQElucHV0KCkgZGF0YTogSUNoYXJ0RGF0YTtcclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcbiAgcHJpdmF0ZSBfbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpe1xyXG4gICAgaWYoIXRoaXMuZGF0YSB8fCB0aGlzLl9sb2FkZWQpIHJldHVybjtcclxuICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgY29udGFpbmVySWQsIGxpYk9wdGlvbnMgfSA9IHRoaXMuZGF0YTtcclxuICAgICAgY29uc3QgY2hhcnQgPSBuZXcgQXBleENoYXJ0cyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjb250YWluZXJJZH1gKSwgbGliT3B0aW9ucyk7XHJcbiAgICAgIGNoYXJ0LnJlbmRlcigpO1xyXG5cclxuICAgICAgaWYodGhpcy5kYXRhLnNldENoYXJ0KVxyXG4gICAgICAgIHRoaXMuZGF0YS5zZXRDaGFydChjaGFydCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==