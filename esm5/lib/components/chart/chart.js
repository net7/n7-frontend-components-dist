/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/chart/chart.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// CHART.ts
//---------------------------
import { Component, Input } from '@angular/core';
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
            import('apexcharts/dist/apexcharts.common.js').then((/**
             * @param {?} module
             * @return {?}
             */
            function (module) {
                var ApexCharts = module.default;
                /** @type {?} */
                var chart = new ApexCharts(document.querySelector("#" + containerId), libOptions);
                chart.render();
                if (_this.data.setChart)
                    _this.data.setChart(chart);
            }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NoYXJ0L2NoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXVCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7OztBQVd0RSwrQkEwQkM7Ozs7OztJQXJCQyxnQ0FBb0I7Ozs7O0lBSXBCLCtCQUFnQjs7Ozs7SUFJaEIsNEJBQWlCOzs7OztJQUlqQiw0QkFBYzs7Ozs7SUFJZCwwQkFBWTs7Ozs7SUFJWiw2QkFBZTs7QUFHakI7SUFBQTtRQVNVLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFpQjFCLENBQUM7Ozs7SUFmQyw4Q0FBcUI7OztJQUFyQjtRQUFBLGlCQWNDO1FBYkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRXBCLFVBQVU7OztRQUFDO1lBQ0gsSUFBQSxlQUF1QyxFQUFyQyw0QkFBVyxFQUFFLDBCQUF3QjtZQUM3QyxNQUFNLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQyxNQUFNO2dCQUNqRCxJQUFBLDJCQUFtQjs7b0JBQ3JCLEtBQUssR0FBRyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQUksV0FBYSxDQUFDLEVBQUUsVUFBVSxDQUFDO2dCQUNuRixLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBRWYsSUFBSSxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7b0JBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEQsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLG1JQUEyQjtpQkFDNUI7Ozt1QkFFRSxLQUFLO3VCQUVMLEtBQUs7O0lBbUJSLHFCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0F0QlksY0FBYzs7O0lBQ3pCLDhCQUF5Qjs7SUFFekIsOEJBQW1COzs7OztJQUVuQixpQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ0hBUlQudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlckNvbnRlbnRDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBDaGFydENvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IF9jaGFydElkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBvcHRpb25zIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4qL1xuZXhwb3J0IGludGVyZmFjZSBDaGFydERhdGEge1xuXG4gIC8qKlxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGNoYXJ0XG4gICAqL1xuICBjb250YWluZXJJZDogc3RyaW5nO1xuICAvKipcbiAgICogbGliT3B0aW9ucyBmb3IgdGhlIGNoYXJ0ICggZG9jcyBoZXJlIDogaHR0cHM6Ly9hcGV4Y2hhcnRzLmNvbS9kb2NzL29wdGlvbnMvIClcbiAgICovXG4gIGxpYk9wdGlvbnM6IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG4gIC8qKlxuICAgKiBjYWxsYmFjayBmb3Igc2F2aW5nIHRoZSBjcmVhdGVkIGNoYXJ0IGluc3RhbmNlXG4gICAqL1xuICBzZXRDaGFydD86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hhcnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcbiAgQElucHV0KCkgZGF0YTogQ2hhcnREYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBwcml2YXRlIF9sb2FkZWQgPSBmYWxzZTtcblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgaWYgKCF0aGlzLmRhdGEgfHwgdGhpcy5fbG9hZGVkKSByZXR1cm47XG4gICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgeyBjb250YWluZXJJZCwgbGliT3B0aW9ucyB9ID0gdGhpcy5kYXRhO1xuICAgICAgaW1wb3J0KCdhcGV4Y2hhcnRzL2Rpc3QvYXBleGNoYXJ0cy5jb21tb24uanMnKS50aGVuKChtb2R1bGUpID0+IHtcbiAgICAgICAgY29uc3QgeyBkZWZhdWx0OiBBcGV4Q2hhcnRzIH0gPSBtb2R1bGU7XG4gICAgICAgIGNvbnN0IGNoYXJ0ID0gbmV3IEFwZXhDaGFydHMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y29udGFpbmVySWR9YCksIGxpYk9wdGlvbnMpO1xuICAgICAgICBjaGFydC5yZW5kZXIoKTtcblxuICAgICAgICBpZiAodGhpcy5kYXRhLnNldENoYXJ0KSB0aGlzLmRhdGEuc2V0Q2hhcnQoY2hhcnQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==