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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RpbWVsaW5lL3RpbWVsaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixjQUFjO0FBQ2QsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUF3QnRFLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBQTlCO1FBS0UsdUNBQXVDO1FBQy9CLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFeEIsNkNBQTZDO1FBQ3JDLGdCQUFXLEdBQUcsR0FBUyxFQUFFO1lBQUMsT0FBQSxpQ0FDN0IsTUFBTSxNQUFNLENBQUMsbUJBQW1CLENBQUMsR0FDakMsTUFBTSxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQ2hDLENBQUE7VUFBQSxDQUFBO0lBeUJKLENBQUM7SUF2QkMscUJBQXFCO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUNsQyxxRUFBcUU7Z0JBQ3JFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDO2dCQUN0QyxNQUFNLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QyxNQUFNLENBQUMsR0FBRyxJQUFJLFFBQVEsQ0FDcEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFlBQVk7Z0JBQzVELEtBQUssRUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUI7aUJBQ3pDLENBQUM7Z0JBQ0YsNEJBQTRCO2dCQUM1QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtvQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0YsQ0FBQTtBQXBDVTtJQUFSLEtBQUssRUFBRTs7K0NBQW9CO0FBRW5CO0lBQVIsS0FBSyxFQUFFOzsrQ0FBVztBQUhSLGlCQUFpQjtJQUo3QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtRQUN2QiwySUFBOEI7S0FDL0IsQ0FBQztHQUNXLGlCQUFpQixDQXFDN0I7U0FyQ1ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRJTUVMSU5FLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlckNvbnRlbnRDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhSXRlbSwgVGltZWxpbmVPcHRpb25zIH0gZnJvbSAndmlzLXRpbWVsaW5lJzsgLy8gdHlwZSBpbnRlcmZhY2VzXG5cbmV4cG9ydCBpbnRlcmZhY2UgTGliT3B0aW9ucyBleHRlbmRzIFRpbWVsaW5lT3B0aW9ucyB7XG4gIC8qKiBTcGVjaWZpZXMgaG93IHN0cm9uZyB0aGUgem9vbWluZyBmb3IgZWFjaCBzY3JvbGwgdGljay5cbiAgICogSGlnaGVyIHpvb21pbmcgZnJpY3Rpb24gd2lsbCBzbG93IHpvb21pbmcgc3BlZWQgKi9cbiAgem9vbUZyaWN0aW9uPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVsaW5lRGF0YSB7XG4gIC8qKiBJRCBmb3IgdGhlIEhUTUwgY29udGFpbmVyIGVsZW1lbnQgKi9cbiAgY29udGFpbmVySUQ6IHN0cmluZztcbiAgLyoqIE9wdGlvbnMgZm9yIHZpcy10aW1lbGluZSwgZnVsbCByZWZlcmVuY2U6IGh0dHBzOi8vdmlzanMuZ2l0aHViLmlvL3Zpcy10aW1lbGluZS9kb2NzL3RpbWVsaW5lLyNDb25maWd1cmF0aW9uX09wdGlvbnMgKi9cbiAgbGliT3B0aW9uczogTGliT3B0aW9ucztcbiAgLyoqIFNldHMgdGhlIHRpbWVsaW5lIGluc3RhbmNlIHRvIHRoZSBnaXZlbiBwYXJhbWV0ZXIgKi9cbiAgX3NldEluc3RhbmNlPzogYW55O1xuICAvKiogRGFkYXNldCBpbiB2aXMtanMgZm9ybWF0LCBmdWxsIHJlZjogaHR0cHM6Ly92aXNqcy5naXRodWIuaW8vdmlzLXRpbWVsaW5lL2RvY3MvdGltZWxpbmUvI0RhdGFfRm9ybWF0ICovXG4gIGRhdGFTZXQ6IERhdGFJdGVtW107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LXRpbWVsaW5lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWVsaW5lLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVsaW5lQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG4gIEBJbnB1dCgpIGRhdGE6IFRpbWVsaW5lRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgLyoqIEtub3dzIGlmIHRoZSBjb21wb25lbnQgaXMgbG9hZGVkICovXG4gIHByaXZhdGUgX2xvYWRlZCA9IGZhbHNlO1xuXG4gIC8qKiBEeW5hbWljYWxseSBsb2FkIHJlcXVpcmVkIG5vZGUgbW9kdWxlcyAqL1xuICBwcml2YXRlIGxvYWRNb2R1bGVzID0gYXN5bmMgKCkgPT4gKHtcbiAgICAuLi5hd2FpdCBpbXBvcnQoJ3Zpcy10aW1lbGluZS9wZWVyJyksXG4gICAgLi4uYXdhaXQgaW1wb3J0KCd2aXMtZGF0YS9wZWVyJylcbiAgfSlcblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgaWYgKCF0aGlzLmRhdGEgfHwgdGhpcy5fbG9hZGVkKSByZXR1cm47XG4gICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubG9hZE1vZHVsZXMoKS50aGVuKChtb2R1bGVzKSA9PiB7XG4gICAgICAgIC8vIFRvIGVuYWJsZSB0d28td2F5IGRhdGEgYmluZGluZywgaW1wb3J0IHsgRGF0YVNldCB9IGZyb20gJ3Zpcy1kYXRhJ1xuICAgICAgICBjb25zdCB7IFRpbWVsaW5lLCBEYXRhU2V0IH0gPSBtb2R1bGVzO1xuICAgICAgICBjb25zdCBpdGVtcyA9IG5ldyBEYXRhU2V0KHRoaXMuZGF0YS5kYXRhU2V0KTtcbiAgICAgICAgY29uc3QgdCA9IG5ldyBUaW1lbGluZShcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRhdGEuY29udGFpbmVySUQpLCAvLyBjb250YWluZXJcbiAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICB0aGlzLmRhdGEubGliT3B0aW9ucyAvLyBhZGQgZ3JvdXBzIGJlbG93XG4gICAgICAgICk7XG4gICAgICAgIC8vIFNldCB0aGUgdGltZWxpbmUgaW5zdGFuY2VcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5fc2V0SW5zdGFuY2UpIHRoaXMuZGF0YS5fc2V0SW5zdGFuY2UodCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG59XG4iXX0=