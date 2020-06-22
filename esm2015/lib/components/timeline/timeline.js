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
        template: "<div *ngIf=\"data\" class=\"n7-timeline\">\r\n  <div [id]=\"data.containerID\" style=\"border: 1px solid #ddd\"></div> \r\n</div>\r\n"
    })
], TimelineComponent);
export { TimelineComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RpbWVsaW5lL3RpbWVsaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixjQUFjO0FBQ2QsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUF3QnRFLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBQTlCO1FBS0UsdUNBQXVDO1FBQy9CLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFeEIsNkNBQTZDO1FBQ3JDLGdCQUFXLEdBQUcsR0FBUyxFQUFFO1lBQUMsT0FBQSxpQ0FDN0IsTUFBTSxNQUFNLENBQUMsbUJBQW1CLENBQUMsR0FDakMsTUFBTSxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQ2hDLENBQUE7VUFBQSxDQUFBO0lBeUJKLENBQUM7SUF2QkMscUJBQXFCO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUNsQyxxRUFBcUU7Z0JBQ3JFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDO2dCQUN0QyxNQUFNLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QyxNQUFNLENBQUMsR0FBRyxJQUFJLFFBQVEsQ0FDcEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFlBQVk7Z0JBQzVELEtBQUssRUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FDckIsQ0FBQztnQkFDRiw0QkFBNEI7Z0JBQzVCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO29CQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDRixDQUFBO0FBcENVO0lBQVIsS0FBSyxFQUFFOzsrQ0FBb0I7QUFFbkI7SUFBUixLQUFLLEVBQUU7OytDQUFXO0FBSFIsaUJBQWlCO0lBSjdCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLGlKQUE4QjtLQUMvQixDQUFDO0dBQ1csaUJBQWlCLENBcUM3QjtTQXJDWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBUSU1FTElORS50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRhSXRlbSwgVGltZWxpbmVPcHRpb25zIH0gZnJvbSAndmlzLXRpbWVsaW5lJzsgLy8gdHlwZSBpbnRlcmZhY2VzXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExpYk9wdGlvbnMgZXh0ZW5kcyBUaW1lbGluZU9wdGlvbnMge1xyXG4gIC8qKiBTcGVjaWZpZXMgaG93IHN0cm9uZyB0aGUgem9vbWluZyBmb3IgZWFjaCBzY3JvbGwgdGljay5cclxuICAgKiBIaWdoZXIgem9vbWluZyBmcmljdGlvbiB3aWxsIHNsb3cgem9vbWluZyBzcGVlZCAqL1xyXG4gIHpvb21GcmljdGlvbj86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUaW1lbGluZURhdGEge1xyXG4gIC8qKiBJRCBmb3IgdGhlIEhUTUwgY29udGFpbmVyIGVsZW1lbnQgKi9cclxuICBjb250YWluZXJJRDogc3RyaW5nO1xyXG4gIC8qKiBPcHRpb25zIGZvciB2aXMtdGltZWxpbmUsIGZ1bGwgcmVmZXJlbmNlOiBodHRwczovL3Zpc2pzLmdpdGh1Yi5pby92aXMtdGltZWxpbmUvZG9jcy90aW1lbGluZS8jQ29uZmlndXJhdGlvbl9PcHRpb25zICovXHJcbiAgbGliT3B0aW9uczogTGliT3B0aW9ucztcclxuICAvKiogU2V0cyB0aGUgdGltZWxpbmUgaW5zdGFuY2UgdG8gdGhlIGdpdmVuIHBhcmFtZXRlciAqL1xyXG4gIF9zZXRJbnN0YW5jZT86IGFueTtcclxuICAvKiogRGFkYXNldCBpbiB2aXMtanMgZm9ybWF0LCBmdWxsIHJlZjogaHR0cHM6Ly92aXNqcy5naXRodWIuaW8vdmlzLXRpbWVsaW5lL2RvY3MvdGltZWxpbmUvI0RhdGFfRm9ybWF0ICovXHJcbiAgZGF0YVNldDogRGF0YUl0ZW1bXTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy10aW1lbGluZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWVsaW5lLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaW1lbGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IFRpbWVsaW5lRGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICAvKiogS25vd3MgaWYgdGhlIGNvbXBvbmVudCBpcyBsb2FkZWQgKi9cclxuICBwcml2YXRlIF9sb2FkZWQgPSBmYWxzZTtcclxuXHJcbiAgLyoqIER5bmFtaWNhbGx5IGxvYWQgcmVxdWlyZWQgbm9kZSBtb2R1bGVzICovXHJcbiAgcHJpdmF0ZSBsb2FkTW9kdWxlcyA9IGFzeW5jICgpID0+ICh7XHJcbiAgICAuLi5hd2FpdCBpbXBvcnQoJ3Zpcy10aW1lbGluZS9wZWVyJyksXHJcbiAgICAuLi5hd2FpdCBpbXBvcnQoJ3Zpcy1kYXRhL3BlZXInKVxyXG4gIH0pXHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcclxuICAgIGlmICghdGhpcy5kYXRhIHx8IHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xyXG4gICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRNb2R1bGVzKCkudGhlbigobW9kdWxlcykgPT4ge1xyXG4gICAgICAgIC8vIFRvIGVuYWJsZSB0d28td2F5IGRhdGEgYmluZGluZywgaW1wb3J0IHsgRGF0YVNldCB9IGZyb20gJ3Zpcy1kYXRhJ1xyXG4gICAgICAgIGNvbnN0IHsgVGltZWxpbmUsIERhdGFTZXQgfSA9IG1vZHVsZXM7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBuZXcgRGF0YVNldCh0aGlzLmRhdGEuZGF0YVNldCk7XHJcbiAgICAgICAgY29uc3QgdCA9IG5ldyBUaW1lbGluZShcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZGF0YS5jb250YWluZXJJRCksIC8vIGNvbnRhaW5lclxyXG4gICAgICAgICAgaXRlbXMsXHJcbiAgICAgICAgICB0aGlzLmRhdGEubGliT3B0aW9uc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gU2V0IHRoZSB0aW1lbGluZSBpbnN0YW5jZVxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuX3NldEluc3RhbmNlKSB0aGlzLmRhdGEuX3NldEluc3RhbmNlKHQpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DbGljayhwYXlsb2FkKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxufVxyXG4iXX0=