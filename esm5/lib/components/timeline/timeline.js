//---------------------------
// TIMELINE.ts
//---------------------------
import { __assign, __awaiter, __decorate, __generator, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
        var _this = this;
        /** Knows if the component is loaded */
        this._loaded = false;
        /** Dynamically load required node modules */
        this.loadModules = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = [{}];
                        return [4 /*yield*/, import('vis-timeline/peer')];
                    case 1: return [2 /*return*/, (__assign.apply(void 0, _a.concat([_b.sent()])))];
                }
            });
        }); };
    }
    TimelineComponent.prototype.ngAfterContentChecked = function () {
        var _this = this;
        if (!this.data || this._loaded)
            return;
        this._loaded = true;
        setTimeout(function () {
            _this.loadModules().then(function (modules) {
                // To enable two-way data binding, import { DataSet } from 'vis-data'
                var Timeline = modules.Timeline;
                var t = new Timeline(document.getElementById(_this.data.containerID), // container
                _this.data.dataSet, _this.data.libOptions);
                _this.data._setInstance(t);
            });
        });
    };
    TimelineComponent.prototype.onClick = function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
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
    return TimelineComponent;
}());
export { TimelineComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RpbWVsaW5lL3RpbWVsaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixjQUFjO0FBQ2QsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUF3QnRFO0lBQUE7UUFBQSxpQkFrQ0M7UUE3QkMsdUNBQXVDO1FBQy9CLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFeEIsNkNBQTZDO1FBQ3JDLGdCQUFXLEdBQUc7Ozs7Ozt3QkFDakIscUJBQU0sTUFBTSxDQUFDLG1CQUFtQixDQUFDLEVBQUE7NEJBREosc0JBQUEsbUNBQzdCLFNBQWlDLElBQ3BDLEVBQUE7OzthQUFBLENBQUE7SUF1QkosQ0FBQztJQXJCQyxpREFBcUIsR0FBckI7UUFBQSxpQkFlQztRQWRDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBTztnQkFDOUIscUVBQXFFO2dCQUM3RCxJQUFBLDJCQUFRLENBQWE7Z0JBQzdCLElBQU0sQ0FBQyxHQUFHLElBQUksUUFBUSxDQUNwQixRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsWUFBWTtnQkFDNUQsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQ2pCLEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUNyQixDQUFDO2dCQUNGLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsbUNBQU8sR0FBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFoQ1E7UUFBUixLQUFLLEVBQUU7O21EQUFvQjtJQUVuQjtRQUFSLEtBQUssRUFBRTs7bURBQVc7SUFIUixpQkFBaUI7UUFKN0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsMklBQThCO1NBQy9CLENBQUM7T0FDVyxpQkFBaUIsQ0FrQzdCO0lBQUQsd0JBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQWxDWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVElNRUxJTkUudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFJdGVtLCBUaW1lbGluZU9wdGlvbnMgfSBmcm9tICd2aXMtdGltZWxpbmUnOyAvLyB0eXBlIGludGVyZmFjZXNcblxuZXhwb3J0IGludGVyZmFjZSBMaWJPcHRpb25zIGV4dGVuZHMgVGltZWxpbmVPcHRpb25zIHtcbiAgLyoqIFNwZWNpZmllcyBob3cgc3Ryb25nIHRoZSB6b29taW5nIGZvciBlYWNoIHNjcm9sbCB0aWNrLlxuICAgKiBIaWdoZXIgem9vbWluZyBmcmljdGlvbiB3aWxsIHNsb3cgem9vbWluZyBzcGVlZCAqL1xuICB6b29tRnJpY3Rpb24/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGltZWxpbmVEYXRhIHtcbiAgLyoqIElEIGZvciB0aGUgSFRNTCBjb250YWluZXIgZWxlbWVudCAqL1xuICBjb250YWluZXJJRDogc3RyaW5nO1xuICAvKiogT3B0aW9ucyBmb3IgdmlzLXRpbWVsaW5lLCBmdWxsIHJlZmVyZW5jZTogaHR0cHM6Ly92aXNqcy5naXRodWIuaW8vdmlzLXRpbWVsaW5lL2RvY3MvdGltZWxpbmUvI0NvbmZpZ3VyYXRpb25fT3B0aW9ucyAqL1xuICBsaWJPcHRpb25zOiBMaWJPcHRpb25zO1xuICAvKiogU2V0cyB0aGUgdGltZWxpbmUgaW5zdGFuY2UgdG8gdGhlIGdpdmVuIHBhcmFtZXRlciAqL1xuICBfc2V0SW5zdGFuY2U/OiBhbnk7XG4gIC8qKiBEYWRhc2V0IGluIHZpcy1qcyBmb3JtYXQsIGZ1bGwgcmVmOiBodHRwczovL3Zpc2pzLmdpdGh1Yi5pby92aXMtdGltZWxpbmUvZG9jcy90aW1lbGluZS8jRGF0YV9Gb3JtYXQgKi9cbiAgZGF0YVNldDogRGF0YUl0ZW1bXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctdGltZWxpbmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGltZWxpbmUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVGltZWxpbmVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcbiAgQElucHV0KCkgZGF0YTogVGltZWxpbmVEYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICAvKiogS25vd3MgaWYgdGhlIGNvbXBvbmVudCBpcyBsb2FkZWQgKi9cbiAgcHJpdmF0ZSBfbG9hZGVkID0gZmFsc2U7XG5cbiAgLyoqIER5bmFtaWNhbGx5IGxvYWQgcmVxdWlyZWQgbm9kZSBtb2R1bGVzICovXG4gIHByaXZhdGUgbG9hZE1vZHVsZXMgPSBhc3luYyAoKSA9PiAoe1xuICAgIC4uLmF3YWl0IGltcG9ydCgndmlzLXRpbWVsaW5lL3BlZXInKSxcbiAgfSlcblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgaWYgKCF0aGlzLmRhdGEgfHwgdGhpcy5fbG9hZGVkKSByZXR1cm47XG4gICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubG9hZE1vZHVsZXMoKS50aGVuKChtb2R1bGVzKSA9PiB7XG4gICAgICAgIC8vIFRvIGVuYWJsZSB0d28td2F5IGRhdGEgYmluZGluZywgaW1wb3J0IHsgRGF0YVNldCB9IGZyb20gJ3Zpcy1kYXRhJ1xuICAgICAgICBjb25zdCB7IFRpbWVsaW5lIH0gPSBtb2R1bGVzO1xuICAgICAgICBjb25zdCB0ID0gbmV3IFRpbWVsaW5lKFxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZGF0YS5jb250YWluZXJJRCksIC8vIGNvbnRhaW5lclxuICAgICAgICAgIHRoaXMuZGF0YS5kYXRhU2V0LFxuICAgICAgICAgIHRoaXMuZGF0YS5saWJPcHRpb25zXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZGF0YS5fc2V0SW5zdGFuY2UodCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG59XG4iXX0=