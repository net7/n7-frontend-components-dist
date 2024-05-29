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
TimelineComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TimelineComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TimelineComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: TimelineComponent, selector: "n7-timeline", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-timeline\">\n  <div [id]=\"data.containerID\" style=\"border: 1px solid #ddd\"></div> \n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TimelineComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-timeline', template: "<div *ngIf=\"data\" class=\"n7-timeline\">\n  <div [id]=\"data.containerID\" style=\"border: 1px solid #ddd\"></div> \n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvdGltZWxpbmUvdGltZWxpbmUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvdGltZWxpbmUvdGltZWxpbmUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0IsY0FBYztBQUNkLDZCQUE2QjtBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7OztBQXdCdEUsTUFBTSxPQUFPLGlCQUFpQjtJQUo5QjtRQVNFLHVDQUF1QztRQUMvQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXhCLDZDQUE2QztRQUNyQyxnQkFBVyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNqQyxHQUFHLE1BQU0sTUFBTSxDQUFDLG1CQUFtQixDQUFDO1lBQ3BDLEdBQUcsTUFBTSxNQUFNLENBQUMsZUFBZSxDQUFDO1NBQ2pDLENBQUMsQ0FBQTtLQXlCSDtJQXZCQyxxQkFBcUI7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ2xDLHFFQUFxRTtnQkFDckUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUM7Z0JBQ3RDLE1BQU0sS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzdDLE1BQU0sQ0FBQyxHQUFHLElBQUksUUFBUSxDQUNwQixRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsWUFBWTtnQkFDNUQsS0FBSyxFQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQjtpQkFDekMsQ0FBQztnQkFDRiw0QkFBNEI7Z0JBQzVCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO29CQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OzhHQXBDVSxpQkFBaUI7a0dBQWpCLGlCQUFpQiwyRkM1QjlCLGlJQUdBOzJGRHlCYSxpQkFBaUI7a0JBSjdCLFNBQVM7K0JBQ0UsYUFBYTs4QkFJZCxJQUFJO3NCQUFaLEtBQUs7Z0JBRUcsSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRJTUVMSU5FLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlckNvbnRlbnRDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhSXRlbSwgVGltZWxpbmVPcHRpb25zIH0gZnJvbSAndmlzLXRpbWVsaW5lJzsgLy8gdHlwZSBpbnRlcmZhY2VzXG5cbmV4cG9ydCBpbnRlcmZhY2UgTGliT3B0aW9ucyBleHRlbmRzIFRpbWVsaW5lT3B0aW9ucyB7XG4gIC8qKiBTcGVjaWZpZXMgaG93IHN0cm9uZyB0aGUgem9vbWluZyBmb3IgZWFjaCBzY3JvbGwgdGljay5cbiAgICogSGlnaGVyIHpvb21pbmcgZnJpY3Rpb24gd2lsbCBzbG93IHpvb21pbmcgc3BlZWQgKi9cbiAgem9vbUZyaWN0aW9uPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVsaW5lRGF0YSB7XG4gIC8qKiBJRCBmb3IgdGhlIEhUTUwgY29udGFpbmVyIGVsZW1lbnQgKi9cbiAgY29udGFpbmVySUQ6IHN0cmluZztcbiAgLyoqIE9wdGlvbnMgZm9yIHZpcy10aW1lbGluZSwgZnVsbCByZWZlcmVuY2U6IGh0dHBzOi8vdmlzanMuZ2l0aHViLmlvL3Zpcy10aW1lbGluZS9kb2NzL3RpbWVsaW5lLyNDb25maWd1cmF0aW9uX09wdGlvbnMgKi9cbiAgbGliT3B0aW9uczogTGliT3B0aW9ucztcbiAgLyoqIFNldHMgdGhlIHRpbWVsaW5lIGluc3RhbmNlIHRvIHRoZSBnaXZlbiBwYXJhbWV0ZXIgKi9cbiAgX3NldEluc3RhbmNlPzogYW55O1xuICAvKiogRGFkYXNldCBpbiB2aXMtanMgZm9ybWF0LCBmdWxsIHJlZjogaHR0cHM6Ly92aXNqcy5naXRodWIuaW8vdmlzLXRpbWVsaW5lL2RvY3MvdGltZWxpbmUvI0RhdGFfRm9ybWF0ICovXG4gIGRhdGFTZXQ6IERhdGFJdGVtW107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LXRpbWVsaW5lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWVsaW5lLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVsaW5lQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG4gIEBJbnB1dCgpIGRhdGE6IFRpbWVsaW5lRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgLyoqIEtub3dzIGlmIHRoZSBjb21wb25lbnQgaXMgbG9hZGVkICovXG4gIHByaXZhdGUgX2xvYWRlZCA9IGZhbHNlO1xuXG4gIC8qKiBEeW5hbWljYWxseSBsb2FkIHJlcXVpcmVkIG5vZGUgbW9kdWxlcyAqL1xuICBwcml2YXRlIGxvYWRNb2R1bGVzID0gYXN5bmMgKCkgPT4gKHtcbiAgICAuLi5hd2FpdCBpbXBvcnQoJ3Zpcy10aW1lbGluZS9wZWVyJyksXG4gICAgLi4uYXdhaXQgaW1wb3J0KCd2aXMtZGF0YS9wZWVyJylcbiAgfSlcblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgaWYgKCF0aGlzLmRhdGEgfHwgdGhpcy5fbG9hZGVkKSByZXR1cm47XG4gICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubG9hZE1vZHVsZXMoKS50aGVuKChtb2R1bGVzKSA9PiB7XG4gICAgICAgIC8vIFRvIGVuYWJsZSB0d28td2F5IGRhdGEgYmluZGluZywgaW1wb3J0IHsgRGF0YVNldCB9IGZyb20gJ3Zpcy1kYXRhJ1xuICAgICAgICBjb25zdCB7IFRpbWVsaW5lLCBEYXRhU2V0IH0gPSBtb2R1bGVzO1xuICAgICAgICBjb25zdCBpdGVtcyA9IG5ldyBEYXRhU2V0KHRoaXMuZGF0YS5kYXRhU2V0KTtcbiAgICAgICAgY29uc3QgdCA9IG5ldyBUaW1lbGluZShcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRhdGEuY29udGFpbmVySUQpLCAvLyBjb250YWluZXJcbiAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICB0aGlzLmRhdGEubGliT3B0aW9ucyAvLyBhZGQgZ3JvdXBzIGJlbG93XG4gICAgICAgICk7XG4gICAgICAgIC8vIFNldCB0aGUgdGltZWxpbmUgaW5zdGFuY2VcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5fc2V0SW5zdGFuY2UpIHRoaXMuZGF0YS5fc2V0SW5zdGFuY2UodCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG59XG4iLCI8ZGl2ICpuZ0lmPVwiZGF0YVwiIGNsYXNzPVwibjctdGltZWxpbmVcIj5cbiAgPGRpdiBbaWRdPVwiZGF0YS5jb250YWluZXJJRFwiIHN0eWxlPVwiYm9yZGVyOiAxcHggc29saWQgI2RkZFwiPjwvZGl2PiBcbjwvZGl2PlxuIl19