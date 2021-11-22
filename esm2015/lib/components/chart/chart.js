import { __decorate, __metadata } from "tslib";
//---------------------------
// CHART.ts
//---------------------------
import { Component, Input } from '@angular/core';
let ChartComponent = class ChartComponent {
    constructor() {
        this._loaded = false;
    }
    ngAfterContentChecked() {
        if (!this.data || this._loaded)
            return;
        this._loaded = true;
        setTimeout(() => {
            const { containerId, libOptions } = this.data;
            import('apexcharts/dist/apexcharts.common.js').then((module) => {
                const { default: ApexCharts } = module;
                const chart = new ApexCharts(document.querySelector(`#${containerId}`), libOptions);
                chart.render();
                if (this.data.setChart)
                    this.data.setChart(chart);
            });
        });
    }
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
export { ChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NoYXJ0L2NoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2QkFBNkI7QUFDN0IsV0FBVztBQUNYLDZCQUE2QjtBQUM3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUE0Q3RFLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFBM0I7UUFLVSxZQUFPLEdBQUcsS0FBSyxDQUFDO0lBaUIxQixDQUFDO0lBZkMscUJBQXFCO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUVwQixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsTUFBTSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUM3RCxNQUFNLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLE1BQU0sQ0FBQztnQkFDdkMsTUFBTSxLQUFLLEdBQUcsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLFdBQVcsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQ3BGLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFFZixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtvQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwRCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUE7QUFyQlU7SUFBUixLQUFLLEVBQUU7OzRDQUFpQjtBQUVoQjtJQUFSLEtBQUssRUFBRTs7NENBQVc7QUFIUixjQUFjO0lBSjFCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLG1JQUEyQjtLQUM1QixDQUFDO0dBQ1csY0FBYyxDQXNCMUI7U0F0QlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIENIQVJULnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXBleE9wdGlvbnMgfSBmcm9tICdhcGV4Y2hhcnRzJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIENoYXJ0Q29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IF9jaGFydElkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IG9wdGlvbnMgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuKi9cclxuZXhwb3J0IGludGVyZmFjZSBDaGFydERhdGEge1xyXG5cclxuICAvKipcclxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGNoYXJ0XHJcbiAgICovXHJcbiAgY29udGFpbmVySWQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiBsaWJPcHRpb25zIGZvciB0aGUgY2hhcnQgKCBkb2NzIGhlcmUgOiBodHRwczovL2FwZXhjaGFydHMuY29tL2RvY3Mvb3B0aW9ucy8gKVxyXG4gICAqL1xyXG4gIGxpYk9wdGlvbnM6IEFwZXhPcHRpb25zO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXHJcbiAgICovXHJcbiAgcGF5bG9hZD86IGFueTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxuICAvKipcclxuICAgKiBjYWxsYmFjayBmb3Igc2F2aW5nIHRoZSBjcmVhdGVkIGNoYXJ0IGluc3RhbmNlXHJcbiAgICovXHJcbiAgc2V0Q2hhcnQ/OiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctY2hhcnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGFydC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcclxuICBASW5wdXQoKSBkYXRhOiBDaGFydERhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBfbG9hZGVkID0gZmFsc2U7XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcclxuICAgIGlmICghdGhpcy5kYXRhIHx8IHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xyXG4gICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgeyBjb250YWluZXJJZCwgbGliT3B0aW9ucyB9ID0gdGhpcy5kYXRhO1xyXG4gICAgICBpbXBvcnQoJ2FwZXhjaGFydHMvZGlzdC9hcGV4Y2hhcnRzLmNvbW1vbi5qcycpLnRoZW4oKG1vZHVsZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZGVmYXVsdDogQXBleENoYXJ0cyB9ID0gbW9kdWxlO1xyXG4gICAgICAgIGNvbnN0IGNoYXJ0ID0gbmV3IEFwZXhDaGFydHMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y29udGFpbmVySWR9YCksIGxpYk9wdGlvbnMpO1xyXG4gICAgICAgIGNoYXJ0LnJlbmRlcigpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kYXRhLnNldENoYXJ0KSB0aGlzLmRhdGEuc2V0Q2hhcnQoY2hhcnQpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=