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
export function ChartData() { }
if (false) {
    /**
     * unique identifier for the chart
     * @type {?}
     */
    ChartData.prototype.containerId;
    /**
     * libOptions for the chart ( docs here : https://apexcharts.com/docs/options/ )
     * @type {?}
     */
    ChartData.prototype.libOptions;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    ChartData.prototype.classes;
    /**
     * action click's payload
     * @type {?|undefined}
     */
    ChartData.prototype.payload;
    /**
     * additional info
     * @type {?|undefined}
     */
    ChartData.prototype._meta;
    /**
     * callback for saving the created chart instance
     * @type {?|undefined}
     */
    ChartData.prototype.setChart;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NoYXJ0L2NoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sVUFBVSxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7Ozs7OztBQVk5RCwrQkEwQkM7Ozs7OztJQXJCQyxnQ0FBb0I7Ozs7O0lBSXBCLCtCQUFnQjs7Ozs7SUFJaEIsNEJBQWlCOzs7OztJQUlqQiw0QkFBYzs7Ozs7SUFJZCwwQkFBWTs7Ozs7SUFJWiw2QkFBZTs7QUFHakI7SUFBQTtRQVNVLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFjMUIsQ0FBQzs7OztJQVpDLDhDQUFxQjs7O0lBQXJCO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFcEIsVUFBVTs7O1FBQUM7WUFDSCxJQUFBLGVBQXVDLEVBQXJDLDRCQUFXLEVBQUUsMEJBQXdCOztnQkFDdkMsS0FBSyxHQUFHLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBSSxXQUFhLENBQUMsRUFBRSxVQUFVLENBQUM7WUFDbkYsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRWYsSUFBSSxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7Z0JBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEQsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkF0QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQix1SUFBMkI7aUJBQzVCOzs7dUJBRUUsS0FBSzt1QkFFTCxLQUFLOztJQWdCUixxQkFBQztDQUFBLEFBdkJELElBdUJDO1NBbkJZLGNBQWM7OztJQUN6Qiw4QkFBeUI7O0lBRXpCLDhCQUFtQjs7Ozs7SUFFbkIsaUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQ0hBUlQudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IEFwZXhDaGFydHMgZnJvbSAnYXBleGNoYXJ0cy9kaXN0L2FwZXhjaGFydHMuY29tbW9uLmpzJztcclxuXHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBDaGFydENvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBfY2hhcnRJZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBvcHRpb25zIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2hhcnREYXRhIHtcclxuXHJcbiAgLyoqXHJcbiAgICogdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBjaGFydFxyXG4gICAqL1xyXG4gIGNvbnRhaW5lcklkOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogbGliT3B0aW9ucyBmb3IgdGhlIGNoYXJ0ICggZG9jcyBoZXJlIDogaHR0cHM6Ly9hcGV4Y2hhcnRzLmNvbS9kb2NzL29wdGlvbnMvIClcclxuICAgKi9cclxuICBsaWJPcHRpb25zOiBhbnk7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcclxuICAgKi9cclxuICBwYXlsb2FkPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xyXG4gICAqL1xyXG4gIF9tZXRhPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIGNhbGxiYWNrIGZvciBzYXZpbmcgdGhlIGNyZWF0ZWQgY2hhcnQgaW5zdGFuY2VcclxuICAgKi9cclxuICBzZXRDaGFydD86IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1jaGFydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXJ0Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IENoYXJ0RGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBwcml2YXRlIF9sb2FkZWQgPSBmYWxzZTtcclxuXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xyXG4gICAgaWYgKCF0aGlzLmRhdGEgfHwgdGhpcy5fbG9hZGVkKSByZXR1cm47XHJcbiAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCB7IGNvbnRhaW5lcklkLCBsaWJPcHRpb25zIH0gPSB0aGlzLmRhdGE7XHJcbiAgICAgIGNvbnN0IGNoYXJ0ID0gbmV3IEFwZXhDaGFydHMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y29udGFpbmVySWR9YCksIGxpYk9wdGlvbnMpO1xyXG4gICAgICBjaGFydC5yZW5kZXIoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmRhdGEuc2V0Q2hhcnQpIHRoaXMuZGF0YS5zZXRDaGFydChjaGFydCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19