/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/chart/chart.ts
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
                    template: "<div *ngIf=\"data\" class=\"n7-chart {{ data.classes || '' }}\">\n    <div id=\"{{ data.containerId }}\"></div>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NoYXJ0L2NoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sVUFBVSxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7Ozs7OztBQVk5RCxnQ0EwQkM7Ozs7OztJQXJCQyxpQ0FBb0I7Ozs7O0lBSXBCLGdDQUFnQjs7Ozs7SUFJaEIsNkJBQWlCOzs7OztJQUlqQiw2QkFBYzs7Ozs7SUFJZCwyQkFBWTs7Ozs7SUFJWiw4QkFBZTs7QUFHakI7SUFBQTtRQU9VLFlBQU8sR0FBWSxLQUFLLENBQUM7SUFlbkMsQ0FBQzs7OztJQWJDLDhDQUFxQjs7O0lBQXJCO1FBQUEsaUJBWUM7UUFYQyxJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFcEIsVUFBVTs7O1FBQUM7WUFDSCxJQUFBLGVBQXVDLEVBQXJDLDRCQUFXLEVBQUUsMEJBQXdCOztnQkFDdkMsS0FBSyxHQUFHLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBSSxXQUFhLENBQUMsRUFBRSxVQUFVLENBQUM7WUFDbkYsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRWYsSUFBRyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7Z0JBQ25CLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBckJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsbUlBQTJCO2lCQUM1Qjs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUFnQlIscUJBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQWxCWSxjQUFjOzs7SUFDekIsOEJBQTBCOztJQUMxQiw4QkFBbUI7Ozs7O0lBQ25CLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDSEFSVC50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IEFwZXhDaGFydHMgZnJvbSAnYXBleGNoYXJ0cy9kaXN0L2FwZXhjaGFydHMuY29tbW9uLmpzJztcblxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgQ2hhcnRDb21wb25lbnQncyBcImRhdGFcIlxuICogXG4gKiBAcHJvcGVydHkgX2NoYXJ0SWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IG9wdGlvbnMgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiovXG5leHBvcnQgaW50ZXJmYWNlIElDaGFydERhdGEge1xuXG4gIC8qKlxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGNoYXJ0XG4gICAqL1xuICBjb250YWluZXJJZDogc3RyaW5nO1xuICAvKipcbiAgICogbGliT3B0aW9ucyBmb3IgdGhlIGNoYXJ0ICggZG9jcyBoZXJlIDogaHR0cHM6Ly9hcGV4Y2hhcnRzLmNvbS9kb2NzL29wdGlvbnMvIClcbiAgICovXG4gIGxpYk9wdGlvbnM6IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG4gIC8qKlxuICAgKiBjYWxsYmFjayBmb3Igc2F2aW5nIHRoZSBjcmVhdGVkIGNoYXJ0IGluc3RhbmNlXG4gICAqL1xuICBzZXRDaGFydD86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hhcnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcbiAgQElucHV0KCkgZGF0YTogSUNoYXJ0RGF0YTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuICBwcml2YXRlIF9sb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKXtcbiAgICBpZighdGhpcy5kYXRhIHx8IHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xuICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHsgY29udGFpbmVySWQsIGxpYk9wdGlvbnMgfSA9IHRoaXMuZGF0YTtcbiAgICAgIGNvbnN0IGNoYXJ0ID0gbmV3IEFwZXhDaGFydHMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y29udGFpbmVySWR9YCksIGxpYk9wdGlvbnMpO1xuICAgICAgY2hhcnQucmVuZGVyKCk7XG5cbiAgICAgIGlmKHRoaXMuZGF0YS5zZXRDaGFydClcbiAgICAgICAgdGhpcy5kYXRhLnNldENoYXJ0KGNoYXJ0KTtcbiAgICB9KTtcbiAgfVxufVxuXG4iXX0=