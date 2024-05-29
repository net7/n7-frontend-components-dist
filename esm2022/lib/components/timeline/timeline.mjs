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
            ...(await import('vis-timeline/peer')),
            ...(await import('vis-data/peer')),
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: TimelineComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: TimelineComponent, selector: "n7-timeline", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-timeline\">\n  <div [id]=\"data.containerID\" style=\"border: 1px solid #ddd\"></div>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: TimelineComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-timeline', template: "<div *ngIf=\"data\" class=\"n7-timeline\">\n  <div [id]=\"data.containerID\" style=\"border: 1px solid #ddd\"></div>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvdGltZWxpbmUvdGltZWxpbmUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvdGltZWxpbmUvdGltZWxpbmUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0IsY0FBYztBQUNkLDZCQUE2QjtBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7OztBQXdCdEUsTUFBTSxPQUFPLGlCQUFpQjtJQUo5QjtRQVNFLHVDQUF1QztRQUMvQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXhCLDZDQUE2QztRQUNyQyxnQkFBVyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNqQyxHQUFHLENBQUMsTUFBTSxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUN0QyxHQUFHLENBQUMsTUFBTSxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDbkMsQ0FBQyxDQUFDO0tBeUJKO0lBdkJDLHFCQUFxQjtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDbEMscUVBQXFFO2dCQUNyRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQztnQkFDdEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDN0MsTUFBTSxDQUFDLEdBQUcsSUFBSSxRQUFRLENBQ3BCLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxZQUFZO2dCQUM1RCxLQUFLLEVBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CO2lCQUN6QyxDQUFDO2dCQUNGLDRCQUE0QjtnQkFDNUIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7b0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs4R0FwQ1UsaUJBQWlCO2tHQUFqQixpQkFBaUIsMkZDNUI5QixnSUFHQTs7MkZEeUJhLGlCQUFpQjtrQkFKN0IsU0FBUzsrQkFDRSxhQUFhOzhCQUlkLElBQUk7c0JBQVosS0FBSztnQkFFRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVElNRUxJTkUudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFJdGVtLCBUaW1lbGluZU9wdGlvbnMgfSBmcm9tICd2aXMtdGltZWxpbmUnOyAvLyB0eXBlIGludGVyZmFjZXNcblxuZXhwb3J0IGludGVyZmFjZSBMaWJPcHRpb25zIGV4dGVuZHMgVGltZWxpbmVPcHRpb25zIHtcbiAgLyoqIFNwZWNpZmllcyBob3cgc3Ryb25nIHRoZSB6b29taW5nIGZvciBlYWNoIHNjcm9sbCB0aWNrLlxuICAgKiBIaWdoZXIgem9vbWluZyBmcmljdGlvbiB3aWxsIHNsb3cgem9vbWluZyBzcGVlZCAqL1xuICB6b29tRnJpY3Rpb24/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGltZWxpbmVEYXRhIHtcbiAgLyoqIElEIGZvciB0aGUgSFRNTCBjb250YWluZXIgZWxlbWVudCAqL1xuICBjb250YWluZXJJRDogc3RyaW5nO1xuICAvKiogT3B0aW9ucyBmb3IgdmlzLXRpbWVsaW5lLCBmdWxsIHJlZmVyZW5jZTogaHR0cHM6Ly92aXNqcy5naXRodWIuaW8vdmlzLXRpbWVsaW5lL2RvY3MvdGltZWxpbmUvI0NvbmZpZ3VyYXRpb25fT3B0aW9ucyAqL1xuICBsaWJPcHRpb25zOiBMaWJPcHRpb25zO1xuICAvKiogU2V0cyB0aGUgdGltZWxpbmUgaW5zdGFuY2UgdG8gdGhlIGdpdmVuIHBhcmFtZXRlciAqL1xuICBfc2V0SW5zdGFuY2U/OiBhbnk7XG4gIC8qKiBEYWRhc2V0IGluIHZpcy1qcyBmb3JtYXQsIGZ1bGwgcmVmOiBodHRwczovL3Zpc2pzLmdpdGh1Yi5pby92aXMtdGltZWxpbmUvZG9jcy90aW1lbGluZS8jRGF0YV9Gb3JtYXQgKi9cbiAgZGF0YVNldDogRGF0YUl0ZW1bXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctdGltZWxpbmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGltZWxpbmUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVsaW5lQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG4gIEBJbnB1dCgpIGRhdGE6IFRpbWVsaW5lRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgLyoqIEtub3dzIGlmIHRoZSBjb21wb25lbnQgaXMgbG9hZGVkICovXG4gIHByaXZhdGUgX2xvYWRlZCA9IGZhbHNlO1xuXG4gIC8qKiBEeW5hbWljYWxseSBsb2FkIHJlcXVpcmVkIG5vZGUgbW9kdWxlcyAqL1xuICBwcml2YXRlIGxvYWRNb2R1bGVzID0gYXN5bmMgKCkgPT4gKHtcbiAgICAuLi4oYXdhaXQgaW1wb3J0KCd2aXMtdGltZWxpbmUvcGVlcicpKSxcbiAgICAuLi4oYXdhaXQgaW1wb3J0KCd2aXMtZGF0YS9wZWVyJykpLFxuICB9KTtcblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgaWYgKCF0aGlzLmRhdGEgfHwgdGhpcy5fbG9hZGVkKSByZXR1cm47XG4gICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubG9hZE1vZHVsZXMoKS50aGVuKChtb2R1bGVzKSA9PiB7XG4gICAgICAgIC8vIFRvIGVuYWJsZSB0d28td2F5IGRhdGEgYmluZGluZywgaW1wb3J0IHsgRGF0YVNldCB9IGZyb20gJ3Zpcy1kYXRhJ1xuICAgICAgICBjb25zdCB7IFRpbWVsaW5lLCBEYXRhU2V0IH0gPSBtb2R1bGVzO1xuICAgICAgICBjb25zdCBpdGVtcyA9IG5ldyBEYXRhU2V0KHRoaXMuZGF0YS5kYXRhU2V0KTtcbiAgICAgICAgY29uc3QgdCA9IG5ldyBUaW1lbGluZShcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRhdGEuY29udGFpbmVySUQpLCAvLyBjb250YWluZXJcbiAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICB0aGlzLmRhdGEubGliT3B0aW9ucyAvLyBhZGQgZ3JvdXBzIGJlbG93XG4gICAgICAgICk7XG4gICAgICAgIC8vIFNldCB0aGUgdGltZWxpbmUgaW5zdGFuY2VcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5fc2V0SW5zdGFuY2UpIHRoaXMuZGF0YS5fc2V0SW5zdGFuY2UodCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG59XG4iLCI8ZGl2ICpuZ0lmPVwiZGF0YVwiIGNsYXNzPVwibjctdGltZWxpbmVcIj5cbiAgPGRpdiBbaWRdPVwiZGF0YS5jb250YWluZXJJRFwiIHN0eWxlPVwiYm9yZGVyOiAxcHggc29saWQgI2RkZFwiPjwvZGl2PlxuPC9kaXY+XG4iXX0=