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
        template: "<div *ngIf=\"data\" class=\"n7-chart {{ data.classes || '' }}\">\r\n    <div id=\"{{ data.containerId }}\"></div>\r\n</div>"
    })
], ChartComponent);
export { ChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NoYXJ0L2NoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2QkFBNkI7QUFDN0IsV0FBVztBQUNYLDZCQUE2QjtBQUM3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUEyQ3RFLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFBM0I7UUFLVSxZQUFPLEdBQUcsS0FBSyxDQUFDO0lBaUIxQixDQUFDO0lBZkMscUJBQXFCO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUVwQixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsTUFBTSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUM3RCxNQUFNLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLE1BQU0sQ0FBQztnQkFDdkMsTUFBTSxLQUFLLEdBQUcsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLFdBQVcsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQ3BGLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFFZixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtvQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwRCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUE7QUFyQlU7SUFBUixLQUFLLEVBQUU7OzRDQUFpQjtBQUVoQjtJQUFSLEtBQUssRUFBRTs7NENBQVc7QUFIUixjQUFjO0lBSjFCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLHVJQUEyQjtLQUM1QixDQUFDO0dBQ1csY0FBYyxDQXNCMUI7U0F0QlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIENIQVJULnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIENoYXJ0Q29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IF9jaGFydElkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IG9wdGlvbnMgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuKi9cclxuZXhwb3J0IGludGVyZmFjZSBDaGFydERhdGEge1xyXG5cclxuICAvKipcclxuICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGNoYXJ0XHJcbiAgICovXHJcbiAgY29udGFpbmVySWQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiBsaWJPcHRpb25zIGZvciB0aGUgY2hhcnQgKCBkb2NzIGhlcmUgOiBodHRwczovL2FwZXhjaGFydHMuY29tL2RvY3Mvb3B0aW9ucy8gKVxyXG4gICAqL1xyXG4gIGxpYk9wdGlvbnM6IGFueTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICAqL1xyXG4gIHBheWxvYWQ/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogY2FsbGJhY2sgZm9yIHNhdmluZyB0aGUgY3JlYXRlZCBjaGFydCBpbnN0YW5jZVxyXG4gICAqL1xyXG4gIHNldENoYXJ0PzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWNoYXJ0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2hhcnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XHJcbiAgQElucHV0KCkgZGF0YTogQ2hhcnREYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIHByaXZhdGUgX2xvYWRlZCA9IGZhbHNlO1xyXG5cclxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XHJcbiAgICBpZiAoIXRoaXMuZGF0YSB8fCB0aGlzLl9sb2FkZWQpIHJldHVybjtcclxuICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgY29udGFpbmVySWQsIGxpYk9wdGlvbnMgfSA9IHRoaXMuZGF0YTtcclxuICAgICAgaW1wb3J0KCdhcGV4Y2hhcnRzL2Rpc3QvYXBleGNoYXJ0cy5jb21tb24uanMnKS50aGVuKChtb2R1bGUpID0+IHtcclxuICAgICAgICBjb25zdCB7IGRlZmF1bHQ6IEFwZXhDaGFydHMgfSA9IG1vZHVsZTtcclxuICAgICAgICBjb25zdCBjaGFydCA9IG5ldyBBcGV4Q2hhcnRzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NvbnRhaW5lcklkfWApLCBsaWJPcHRpb25zKTtcclxuICAgICAgICBjaGFydC5yZW5kZXIoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5zZXRDaGFydCkgdGhpcy5kYXRhLnNldENoYXJ0KGNoYXJ0KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19