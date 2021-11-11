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
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = [{}];
                        return [4 /*yield*/, import('vis-timeline/peer')];
                    case 1:
                        _b = [__assign.apply(void 0, _a.concat([_c.sent()]))];
                        return [4 /*yield*/, import('vis-data/peer')];
                    case 2: return [2 /*return*/, (__assign.apply(void 0, _b.concat([_c.sent()])))];
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
                var Timeline = modules.Timeline, DataSet = modules.DataSet;
                var items = new DataSet(_this.data.dataSet);
                var t = new Timeline(document.getElementById(_this.data.containerID), // container
                items, _this.data.libOptions // add groups below
                );
                // Set the timeline instance
                if (_this.data._setInstance)
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
            template: "<div *ngIf=\"data\" class=\"n7-timeline\">\r\n  <div [id]=\"data.containerID\" style=\"border: 1px solid #ddd\"></div> \r\n</div>\r\n"
        })
    ], TimelineComponent);
    return TimelineComponent;
}());
export { TimelineComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RpbWVsaW5lL3RpbWVsaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixjQUFjO0FBQ2QsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUF3QnRFO0lBQUE7UUFBQSxpQkFxQ0M7UUFoQ0MsdUNBQXVDO1FBQy9CLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFeEIsNkNBQTZDO1FBQ3JDLGdCQUFXLEdBQUc7Ozs7Ozt3QkFDakIscUJBQU0sTUFBTSxDQUFDLG1CQUFtQixDQUFDLEVBQUE7O2dFQUFqQyxTQUFpQzt3QkFDakMscUJBQU0sTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFBOzRCQUZBLHNCQUFBLG1DQUU3QixTQUE2QixJQUNoQyxFQUFBOzs7YUFBQSxDQUFBO0lBeUJKLENBQUM7SUF2QkMsaURBQXFCLEdBQXJCO1FBQUEsaUJBaUJDO1FBaEJDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBTztnQkFDOUIscUVBQXFFO2dCQUM3RCxJQUFBLDJCQUFRLEVBQUUseUJBQU8sQ0FBYTtnQkFDdEMsSUFBTSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDN0MsSUFBTSxDQUFDLEdBQUcsSUFBSSxRQUFRLENBQ3BCLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxZQUFZO2dCQUM1RCxLQUFLLEVBQ0wsS0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CO2lCQUN6QyxDQUFDO2dCQUNGLDRCQUE0QjtnQkFDNUIsSUFBSSxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7b0JBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxtQ0FBTyxHQUFQLFVBQVEsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQW5DUTtRQUFSLEtBQUssRUFBRTs7bURBQW9CO0lBRW5CO1FBQVIsS0FBSyxFQUFFOzttREFBVztJQUhSLGlCQUFpQjtRQUo3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixpSkFBOEI7U0FDL0IsQ0FBQztPQUNXLGlCQUFpQixDQXFDN0I7SUFBRCx3QkFBQztDQUFBLEFBckNELElBcUNDO1NBckNZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFRJTUVMSU5FLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlckNvbnRlbnRDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhdGFJdGVtLCBUaW1lbGluZU9wdGlvbnMgfSBmcm9tICd2aXMtdGltZWxpbmUnOyAvLyB0eXBlIGludGVyZmFjZXNcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGliT3B0aW9ucyBleHRlbmRzIFRpbWVsaW5lT3B0aW9ucyB7XHJcbiAgLyoqIFNwZWNpZmllcyBob3cgc3Ryb25nIHRoZSB6b29taW5nIGZvciBlYWNoIHNjcm9sbCB0aWNrLlxyXG4gICAqIEhpZ2hlciB6b29taW5nIGZyaWN0aW9uIHdpbGwgc2xvdyB6b29taW5nIHNwZWVkICovXHJcbiAgem9vbUZyaWN0aW9uPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVsaW5lRGF0YSB7XHJcbiAgLyoqIElEIGZvciB0aGUgSFRNTCBjb250YWluZXIgZWxlbWVudCAqL1xyXG4gIGNvbnRhaW5lcklEOiBzdHJpbmc7XHJcbiAgLyoqIE9wdGlvbnMgZm9yIHZpcy10aW1lbGluZSwgZnVsbCByZWZlcmVuY2U6IGh0dHBzOi8vdmlzanMuZ2l0aHViLmlvL3Zpcy10aW1lbGluZS9kb2NzL3RpbWVsaW5lLyNDb25maWd1cmF0aW9uX09wdGlvbnMgKi9cclxuICBsaWJPcHRpb25zOiBMaWJPcHRpb25zO1xyXG4gIC8qKiBTZXRzIHRoZSB0aW1lbGluZSBpbnN0YW5jZSB0byB0aGUgZ2l2ZW4gcGFyYW1ldGVyICovXHJcbiAgX3NldEluc3RhbmNlPzogYW55O1xyXG4gIC8qKiBEYWRhc2V0IGluIHZpcy1qcyBmb3JtYXQsIGZ1bGwgcmVmOiBodHRwczovL3Zpc2pzLmdpdGh1Yi5pby92aXMtdGltZWxpbmUvZG9jcy90aW1lbGluZS8jRGF0YV9Gb3JtYXQgKi9cclxuICBkYXRhU2V0OiBEYXRhSXRlbVtdO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LXRpbWVsaW5lJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGltZWxpbmUuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWVsaW5lQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XHJcbiAgQElucHV0KCkgZGF0YTogVGltZWxpbmVEYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIC8qKiBLbm93cyBpZiB0aGUgY29tcG9uZW50IGlzIGxvYWRlZCAqL1xyXG4gIHByaXZhdGUgX2xvYWRlZCA9IGZhbHNlO1xyXG5cclxuICAvKiogRHluYW1pY2FsbHkgbG9hZCByZXF1aXJlZCBub2RlIG1vZHVsZXMgKi9cclxuICBwcml2YXRlIGxvYWRNb2R1bGVzID0gYXN5bmMgKCkgPT4gKHtcclxuICAgIC4uLmF3YWl0IGltcG9ydCgndmlzLXRpbWVsaW5lL3BlZXInKSxcclxuICAgIC4uLmF3YWl0IGltcG9ydCgndmlzLWRhdGEvcGVlcicpXHJcbiAgfSlcclxuXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xyXG4gICAgaWYgKCF0aGlzLmRhdGEgfHwgdGhpcy5fbG9hZGVkKSByZXR1cm47XHJcbiAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZE1vZHVsZXMoKS50aGVuKChtb2R1bGVzKSA9PiB7XHJcbiAgICAgICAgLy8gVG8gZW5hYmxlIHR3by13YXkgZGF0YSBiaW5kaW5nLCBpbXBvcnQgeyBEYXRhU2V0IH0gZnJvbSAndmlzLWRhdGEnXHJcbiAgICAgICAgY29uc3QgeyBUaW1lbGluZSwgRGF0YVNldCB9ID0gbW9kdWxlcztcclxuICAgICAgICBjb25zdCBpdGVtcyA9IG5ldyBEYXRhU2V0KHRoaXMuZGF0YS5kYXRhU2V0KTtcclxuICAgICAgICBjb25zdCB0ID0gbmV3IFRpbWVsaW5lKFxyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kYXRhLmNvbnRhaW5lcklEKSwgLy8gY29udGFpbmVyXHJcbiAgICAgICAgICBpdGVtcyxcclxuICAgICAgICAgIHRoaXMuZGF0YS5saWJPcHRpb25zIC8vIGFkZCBncm91cHMgYmVsb3dcclxuICAgICAgICApO1xyXG4gICAgICAgIC8vIFNldCB0aGUgdGltZWxpbmUgaW5zdGFuY2VcclxuICAgICAgICBpZiAodGhpcy5kYXRhLl9zZXRJbnN0YW5jZSkgdGhpcy5kYXRhLl9zZXRJbnN0YW5jZSh0KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZCkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcbn1cclxuIl19