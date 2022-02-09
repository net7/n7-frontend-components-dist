//---------------------------
// TIMELINE.ts
//---------------------------
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class TimelineComponent {
    constructor() {
        /** Knows if the component is loaded */
        this._loaded = false;
        /** Dynamically load required node modules */
        this.loadModules = async () => ({
            ...await import('vis-timeline/peer'),
            ...await import('vis-data/peer')
        });
    }
    ngAfterContentChecked() {
        if (!this.data || this._loaded)
            return;
        this._loaded = true;
        setTimeout(() => {
            this.loadModules().then((modules) => {
                // To enable two-way data binding, import { DataSet } from 'vis-data'
                const { Timeline, DataSet } = modules;
                const items = new DataSet(this.data.dataSet);
                const t = new Timeline(document.getElementById(this.data.containerID), // container
                items, this.data.libOptions // add groups below
                );
                // Set the timeline instance
                if (this.data._setInstance)
                    this.data._setInstance(t);
            });
        });
    }
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
}
TimelineComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: TimelineComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TimelineComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.2", type: TimelineComponent, selector: "n7-timeline", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-timeline\">\r\n  <div [id]=\"data.containerID\" style=\"border: 1px solid #ddd\"></div> \r\n</div>\r\n", directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: TimelineComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-timeline', template: "<div *ngIf=\"data\" class=\"n7-timeline\">\r\n  <div [id]=\"data.containerID\" style=\"border: 1px solid #ddd\"></div> \r\n</div>\r\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvdGltZWxpbmUvdGltZWxpbmUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvdGltZWxpbmUvdGltZWxpbmUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0IsY0FBYztBQUNkLDZCQUE2QjtBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7OztBQXdCdEUsTUFBTSxPQUFPLGlCQUFpQjtJQUo5QjtRQVNFLHVDQUF1QztRQUMvQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXhCLDZDQUE2QztRQUNyQyxnQkFBVyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNqQyxHQUFHLE1BQU0sTUFBTSxDQUFDLG1CQUFtQixDQUFDO1lBQ3BDLEdBQUcsTUFBTSxNQUFNLENBQUMsZUFBZSxDQUFDO1NBQ2pDLENBQUMsQ0FBQTtLQXlCSDtJQXZCQyxxQkFBcUI7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ2xDLHFFQUFxRTtnQkFDckUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUM7Z0JBQ3RDLE1BQU0sS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzdDLE1BQU0sQ0FBQyxHQUFHLElBQUksUUFBUSxDQUNwQixRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsWUFBWTtnQkFDNUQsS0FBSyxFQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQjtpQkFDekMsQ0FBQztnQkFDRiw0QkFBNEI7Z0JBQzVCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO29CQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OzhHQXBDVSxpQkFBaUI7a0dBQWpCLGlCQUFpQiwyRkM1QjlCLHVJQUdBOzJGRHlCYSxpQkFBaUI7a0JBSjdCLFNBQVM7K0JBQ0UsYUFBYTs4QkFJZCxJQUFJO3NCQUFaLEtBQUs7Z0JBRUcsSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gVElNRUxJTkUudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0YUl0ZW0sIFRpbWVsaW5lT3B0aW9ucyB9IGZyb20gJ3Zpcy10aW1lbGluZSc7IC8vIHR5cGUgaW50ZXJmYWNlc1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMaWJPcHRpb25zIGV4dGVuZHMgVGltZWxpbmVPcHRpb25zIHtcclxuICAvKiogU3BlY2lmaWVzIGhvdyBzdHJvbmcgdGhlIHpvb21pbmcgZm9yIGVhY2ggc2Nyb2xsIHRpY2suXHJcbiAgICogSGlnaGVyIHpvb21pbmcgZnJpY3Rpb24gd2lsbCBzbG93IHpvb21pbmcgc3BlZWQgKi9cclxuICB6b29tRnJpY3Rpb24/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGltZWxpbmVEYXRhIHtcclxuICAvKiogSUQgZm9yIHRoZSBIVE1MIGNvbnRhaW5lciBlbGVtZW50ICovXHJcbiAgY29udGFpbmVySUQ6IHN0cmluZztcclxuICAvKiogT3B0aW9ucyBmb3IgdmlzLXRpbWVsaW5lLCBmdWxsIHJlZmVyZW5jZTogaHR0cHM6Ly92aXNqcy5naXRodWIuaW8vdmlzLXRpbWVsaW5lL2RvY3MvdGltZWxpbmUvI0NvbmZpZ3VyYXRpb25fT3B0aW9ucyAqL1xyXG4gIGxpYk9wdGlvbnM6IExpYk9wdGlvbnM7XHJcbiAgLyoqIFNldHMgdGhlIHRpbWVsaW5lIGluc3RhbmNlIHRvIHRoZSBnaXZlbiBwYXJhbWV0ZXIgKi9cclxuICBfc2V0SW5zdGFuY2U/OiBhbnk7XHJcbiAgLyoqIERhZGFzZXQgaW4gdmlzLWpzIGZvcm1hdCwgZnVsbCByZWY6IGh0dHBzOi8vdmlzanMuZ2l0aHViLmlvL3Zpcy10aW1lbGluZS9kb2NzL3RpbWVsaW5lLyNEYXRhX0Zvcm1hdCAqL1xyXG4gIGRhdGFTZXQ6IERhdGFJdGVtW107XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctdGltZWxpbmUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lbGluZS5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGltZWxpbmVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcclxuICBASW5wdXQoKSBkYXRhOiBUaW1lbGluZURhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgLyoqIEtub3dzIGlmIHRoZSBjb21wb25lbnQgaXMgbG9hZGVkICovXHJcbiAgcHJpdmF0ZSBfbG9hZGVkID0gZmFsc2U7XHJcblxyXG4gIC8qKiBEeW5hbWljYWxseSBsb2FkIHJlcXVpcmVkIG5vZGUgbW9kdWxlcyAqL1xyXG4gIHByaXZhdGUgbG9hZE1vZHVsZXMgPSBhc3luYyAoKSA9PiAoe1xyXG4gICAgLi4uYXdhaXQgaW1wb3J0KCd2aXMtdGltZWxpbmUvcGVlcicpLFxyXG4gICAgLi4uYXdhaXQgaW1wb3J0KCd2aXMtZGF0YS9wZWVyJylcclxuICB9KVxyXG5cclxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XHJcbiAgICBpZiAoIXRoaXMuZGF0YSB8fCB0aGlzLl9sb2FkZWQpIHJldHVybjtcclxuICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5sb2FkTW9kdWxlcygpLnRoZW4oKG1vZHVsZXMpID0+IHtcclxuICAgICAgICAvLyBUbyBlbmFibGUgdHdvLXdheSBkYXRhIGJpbmRpbmcsIGltcG9ydCB7IERhdGFTZXQgfSBmcm9tICd2aXMtZGF0YSdcclxuICAgICAgICBjb25zdCB7IFRpbWVsaW5lLCBEYXRhU2V0IH0gPSBtb2R1bGVzO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gbmV3IERhdGFTZXQodGhpcy5kYXRhLmRhdGFTZXQpO1xyXG4gICAgICAgIGNvbnN0IHQgPSBuZXcgVGltZWxpbmUoXHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRhdGEuY29udGFpbmVySUQpLCAvLyBjb250YWluZXJcclxuICAgICAgICAgIGl0ZW1zLFxyXG4gICAgICAgICAgdGhpcy5kYXRhLmxpYk9wdGlvbnMgLy8gYWRkIGdyb3VwcyBiZWxvd1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gU2V0IHRoZSB0aW1lbGluZSBpbnN0YW5jZVxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuX3NldEluc3RhbmNlKSB0aGlzLmRhdGEuX3NldEluc3RhbmNlKHQpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DbGljayhwYXlsb2FkKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2ICpuZ0lmPVwiZGF0YVwiIGNsYXNzPVwibjctdGltZWxpbmVcIj5cclxuICA8ZGl2IFtpZF09XCJkYXRhLmNvbnRhaW5lcklEXCIgc3R5bGU9XCJib3JkZXI6IDFweCBzb2xpZCAjZGRkXCI+PC9kaXY+IFxyXG48L2Rpdj5cclxuIl19