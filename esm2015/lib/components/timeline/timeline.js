//---------------------------
// TIMELINE.ts
//---------------------------
import { __awaiter, __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let TimelineComponent = class TimelineComponent {
    constructor() {
        /** Knows if the component is loaded */
        this._loaded = false;
        /** Dynamically load required node modules */
        this.loadModules = () => __awaiter(this, void 0, void 0, function* () {
            return (Object.assign(Object.assign({}, yield import('vis-timeline/peer')), yield import('vis-data/peer')));
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
                items, this.data.libOptions);
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
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], TimelineComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TimelineComponent.prototype, "emit", void 0);
TimelineComponent = __decorate([
    Component({
        selector: 'n7-timeline',
        template: "<div *ngIf=\"data\" class=\"n7-timeline\">\n  <div [id]=\"data.containerID\" style=\"border: 1px solid #ddd\"></div> \n</div>\n"
    })
], TimelineComponent);
export { TimelineComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RpbWVsaW5lL3RpbWVsaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixjQUFjO0FBQ2QsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUF3QnRFLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBQTlCO1FBS0UsdUNBQXVDO1FBQy9CLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFeEIsNkNBQTZDO1FBQ3JDLGdCQUFXLEdBQUcsR0FBUyxFQUFFO1lBQUMsT0FBQSxpQ0FDN0IsTUFBTSxNQUFNLENBQUMsbUJBQW1CLENBQUMsR0FDakMsTUFBTSxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQ2hDLENBQUE7VUFBQSxDQUFBO0lBeUJKLENBQUM7SUF2QkMscUJBQXFCO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUNsQyxxRUFBcUU7Z0JBQ3JFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDO2dCQUN0QyxNQUFNLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QyxNQUFNLENBQUMsR0FBRyxJQUFJLFFBQVEsQ0FDcEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFlBQVk7Z0JBQzVELEtBQUssRUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FDckIsQ0FBQztnQkFDRiw0QkFBNEI7Z0JBQzVCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO29CQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDRixDQUFBO0FBcENVO0lBQVIsS0FBSyxFQUFFOzsrQ0FBb0I7QUFFbkI7SUFBUixLQUFLLEVBQUU7OytDQUFXO0FBSFIsaUJBQWlCO0lBSjdCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLDJJQUE4QjtLQUMvQixDQUFDO0dBQ1csaUJBQWlCLENBcUM3QjtTQXJDWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVElNRUxJTkUudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFJdGVtLCBUaW1lbGluZU9wdGlvbnMgfSBmcm9tICd2aXMtdGltZWxpbmUnOyAvLyB0eXBlIGludGVyZmFjZXNcblxuZXhwb3J0IGludGVyZmFjZSBMaWJPcHRpb25zIGV4dGVuZHMgVGltZWxpbmVPcHRpb25zIHtcbiAgLyoqIFNwZWNpZmllcyBob3cgc3Ryb25nIHRoZSB6b29taW5nIGZvciBlYWNoIHNjcm9sbCB0aWNrLlxuICAgKiBIaWdoZXIgem9vbWluZyBmcmljdGlvbiB3aWxsIHNsb3cgem9vbWluZyBzcGVlZCAqL1xuICB6b29tRnJpY3Rpb24/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGltZWxpbmVEYXRhIHtcbiAgLyoqIElEIGZvciB0aGUgSFRNTCBjb250YWluZXIgZWxlbWVudCAqL1xuICBjb250YWluZXJJRDogc3RyaW5nO1xuICAvKiogT3B0aW9ucyBmb3IgdmlzLXRpbWVsaW5lLCBmdWxsIHJlZmVyZW5jZTogaHR0cHM6Ly92aXNqcy5naXRodWIuaW8vdmlzLXRpbWVsaW5lL2RvY3MvdGltZWxpbmUvI0NvbmZpZ3VyYXRpb25fT3B0aW9ucyAqL1xuICBsaWJPcHRpb25zOiBMaWJPcHRpb25zO1xuICAvKiogU2V0cyB0aGUgdGltZWxpbmUgaW5zdGFuY2UgdG8gdGhlIGdpdmVuIHBhcmFtZXRlciAqL1xuICBfc2V0SW5zdGFuY2U/OiBhbnk7XG4gIC8qKiBEYWRhc2V0IGluIHZpcy1qcyBmb3JtYXQsIGZ1bGwgcmVmOiBodHRwczovL3Zpc2pzLmdpdGh1Yi5pby92aXMtdGltZWxpbmUvZG9jcy90aW1lbGluZS8jRGF0YV9Gb3JtYXQgKi9cbiAgZGF0YVNldDogRGF0YUl0ZW1bXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctdGltZWxpbmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGltZWxpbmUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVGltZWxpbmVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcbiAgQElucHV0KCkgZGF0YTogVGltZWxpbmVEYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICAvKiogS25vd3MgaWYgdGhlIGNvbXBvbmVudCBpcyBsb2FkZWQgKi9cbiAgcHJpdmF0ZSBfbG9hZGVkID0gZmFsc2U7XG5cbiAgLyoqIER5bmFtaWNhbGx5IGxvYWQgcmVxdWlyZWQgbm9kZSBtb2R1bGVzICovXG4gIHByaXZhdGUgbG9hZE1vZHVsZXMgPSBhc3luYyAoKSA9PiAoe1xuICAgIC4uLmF3YWl0IGltcG9ydCgndmlzLXRpbWVsaW5lL3BlZXInKSxcbiAgICAuLi5hd2FpdCBpbXBvcnQoJ3Zpcy1kYXRhL3BlZXInKVxuICB9KVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICBpZiAoIXRoaXMuZGF0YSB8fCB0aGlzLl9sb2FkZWQpIHJldHVybjtcbiAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkTW9kdWxlcygpLnRoZW4oKG1vZHVsZXMpID0+IHtcbiAgICAgICAgLy8gVG8gZW5hYmxlIHR3by13YXkgZGF0YSBiaW5kaW5nLCBpbXBvcnQgeyBEYXRhU2V0IH0gZnJvbSAndmlzLWRhdGEnXG4gICAgICAgIGNvbnN0IHsgVGltZWxpbmUsIERhdGFTZXQgfSA9IG1vZHVsZXM7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gbmV3IERhdGFTZXQodGhpcy5kYXRhLmRhdGFTZXQpO1xuICAgICAgICBjb25zdCB0ID0gbmV3IFRpbWVsaW5lKFxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZGF0YS5jb250YWluZXJJRCksIC8vIGNvbnRhaW5lclxuICAgICAgICAgIGl0ZW1zLFxuICAgICAgICAgIHRoaXMuZGF0YS5saWJPcHRpb25zXG4gICAgICAgICk7XG4gICAgICAgIC8vIFNldCB0aGUgdGltZWxpbmUgaW5zdGFuY2VcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5fc2V0SW5zdGFuY2UpIHRoaXMuZGF0YS5fc2V0SW5zdGFuY2UodCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG59XG4iXX0=