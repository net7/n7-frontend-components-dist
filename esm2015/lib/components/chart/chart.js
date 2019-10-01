/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export class ChartComponent {
    constructor() {
        this._loaded = false;
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        if (!this.data || this._loaded)
            return;
        this._loaded = true;
        setTimeout((/**
         * @return {?}
         */
        () => {
            const { containerId, libOptions } = this.data;
            /** @type {?} */
            const chart = new ApexCharts(document.querySelector(`#${containerId}`), libOptions);
            chart.render();
            if (this.data.setChart)
                this.data.setChart(chart);
        }));
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NoYXJ0L2NoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxVQUFVLE1BQU0sc0NBQXNDLENBQUM7Ozs7Ozs7Ozs7O0FBWTlELGdDQTBCQzs7Ozs7O0lBckJDLGlDQUFvQjs7Ozs7SUFJcEIsZ0NBQWdCOzs7OztJQUloQiw2QkFBaUI7Ozs7O0lBSWpCLDZCQUFjOzs7OztJQUlkLDJCQUFZOzs7OztJQUlaLDhCQUFlOztBQU9qQixNQUFNLE9BQU8sY0FBYztJQUozQjtRQU9VLFlBQU8sR0FBWSxLQUFLLENBQUM7SUFlbkMsQ0FBQzs7OztJQWJDLHFCQUFxQjtRQUNuQixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFcEIsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO2tCQUNSLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJOztrQkFDdkMsS0FBSyxHQUFHLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQztZQUNuRixLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFZixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtnQkFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFyQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixtSUFBMkI7YUFDNUI7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETiw4QkFBMEI7O0lBQzFCLDhCQUFtQjs7Ozs7SUFDbkIsaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENIQVJULnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlckNvbnRlbnRDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgQXBleENoYXJ0cyBmcm9tICdhcGV4Y2hhcnRzL2Rpc3QvYXBleGNoYXJ0cy5jb21tb24uanMnO1xuXG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBDaGFydENvbXBvbmVudCdzIFwiZGF0YVwiXG4gKiBcbiAqIEBwcm9wZXJ0eSBfY2hhcnRJZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgb3B0aW9ucyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUNoYXJ0RGF0YSB7XG5cbiAgLyoqXG4gICAqIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgY2hhcnRcbiAgICovXG4gIGNvbnRhaW5lcklkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBsaWJPcHRpb25zIGZvciB0aGUgY2hhcnQgKCBkb2NzIGhlcmUgOiBodHRwczovL2FwZXhjaGFydHMuY29tL2RvY3Mvb3B0aW9ucy8gKVxuICAgKi9cbiAgbGliT3B0aW9uczogYW55O1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAqL1xuICBwYXlsb2FkPzogYW55O1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvXG4gICAqL1xuICBfbWV0YT86IGFueTtcbiAgLyoqXG4gICAqIGNhbGxiYWNrIGZvciBzYXZpbmcgdGhlIGNyZWF0ZWQgY2hhcnQgaW5zdGFuY2VcbiAgICovXG4gIHNldENoYXJ0PzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1jaGFydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGFydC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuICBASW5wdXQoKSBkYXRhOiBJQ2hhcnREYXRhO1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG4gIHByaXZhdGUgX2xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpe1xuICAgIGlmKCF0aGlzLmRhdGEgfHwgdGhpcy5fbG9hZGVkKSByZXR1cm47XG4gICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgeyBjb250YWluZXJJZCwgbGliT3B0aW9ucyB9ID0gdGhpcy5kYXRhO1xuICAgICAgY29uc3QgY2hhcnQgPSBuZXcgQXBleENoYXJ0cyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjb250YWluZXJJZH1gKSwgbGliT3B0aW9ucyk7XG4gICAgICBjaGFydC5yZW5kZXIoKTtcblxuICAgICAgaWYodGhpcy5kYXRhLnNldENoYXJ0KVxuICAgICAgICB0aGlzLmRhdGEuc2V0Q2hhcnQoY2hhcnQpO1xuICAgIH0pO1xuICB9XG59XG5cbiJdfQ==