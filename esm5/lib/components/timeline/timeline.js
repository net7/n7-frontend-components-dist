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
                items, _this.data.libOptions);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RpbWVsaW5lL3RpbWVsaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixjQUFjO0FBQ2QsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUF3QnRFO0lBQUE7UUFBQSxpQkFxQ0M7UUFoQ0MsdUNBQXVDO1FBQy9CLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFeEIsNkNBQTZDO1FBQ3JDLGdCQUFXLEdBQUc7Ozs7Ozt3QkFDakIscUJBQU0sTUFBTSxDQUFDLG1CQUFtQixDQUFDLEVBQUE7O2dFQUFqQyxTQUFpQzt3QkFDakMscUJBQU0sTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFBOzRCQUZBLHNCQUFBLG1DQUU3QixTQUE2QixJQUNoQyxFQUFBOzs7YUFBQSxDQUFBO0lBeUJKLENBQUM7SUF2QkMsaURBQXFCLEdBQXJCO1FBQUEsaUJBaUJDO1FBaEJDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBTztnQkFDOUIscUVBQXFFO2dCQUM3RCxJQUFBLDJCQUFRLEVBQUUseUJBQU8sQ0FBYTtnQkFDdEMsSUFBTSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDN0MsSUFBTSxDQUFDLEdBQUcsSUFBSSxRQUFRLENBQ3BCLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxZQUFZO2dCQUM1RCxLQUFLLEVBQ0wsS0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQ3JCLENBQUM7Z0JBQ0YsNEJBQTRCO2dCQUM1QixJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtvQkFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG1DQUFPLEdBQVAsVUFBUSxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBbkNRO1FBQVIsS0FBSyxFQUFFOzttREFBb0I7SUFFbkI7UUFBUixLQUFLLEVBQUU7O21EQUFXO0lBSFIsaUJBQWlCO1FBSjdCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLGlKQUE4QjtTQUMvQixDQUFDO09BQ1csaUJBQWlCLENBcUM3QjtJQUFELHdCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0FyQ1ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gVElNRUxJTkUudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0YUl0ZW0sIFRpbWVsaW5lT3B0aW9ucyB9IGZyb20gJ3Zpcy10aW1lbGluZSc7IC8vIHR5cGUgaW50ZXJmYWNlc1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMaWJPcHRpb25zIGV4dGVuZHMgVGltZWxpbmVPcHRpb25zIHtcclxuICAvKiogU3BlY2lmaWVzIGhvdyBzdHJvbmcgdGhlIHpvb21pbmcgZm9yIGVhY2ggc2Nyb2xsIHRpY2suXHJcbiAgICogSGlnaGVyIHpvb21pbmcgZnJpY3Rpb24gd2lsbCBzbG93IHpvb21pbmcgc3BlZWQgKi9cclxuICB6b29tRnJpY3Rpb24/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGltZWxpbmVEYXRhIHtcclxuICAvKiogSUQgZm9yIHRoZSBIVE1MIGNvbnRhaW5lciBlbGVtZW50ICovXHJcbiAgY29udGFpbmVySUQ6IHN0cmluZztcclxuICAvKiogT3B0aW9ucyBmb3IgdmlzLXRpbWVsaW5lLCBmdWxsIHJlZmVyZW5jZTogaHR0cHM6Ly92aXNqcy5naXRodWIuaW8vdmlzLXRpbWVsaW5lL2RvY3MvdGltZWxpbmUvI0NvbmZpZ3VyYXRpb25fT3B0aW9ucyAqL1xyXG4gIGxpYk9wdGlvbnM6IExpYk9wdGlvbnM7XHJcbiAgLyoqIFNldHMgdGhlIHRpbWVsaW5lIGluc3RhbmNlIHRvIHRoZSBnaXZlbiBwYXJhbWV0ZXIgKi9cclxuICBfc2V0SW5zdGFuY2U/OiBhbnk7XHJcbiAgLyoqIERhZGFzZXQgaW4gdmlzLWpzIGZvcm1hdCwgZnVsbCByZWY6IGh0dHBzOi8vdmlzanMuZ2l0aHViLmlvL3Zpcy10aW1lbGluZS9kb2NzL3RpbWVsaW5lLyNEYXRhX0Zvcm1hdCAqL1xyXG4gIGRhdGFTZXQ6IERhdGFJdGVtW107XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctdGltZWxpbmUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lbGluZS5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGltZWxpbmVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcclxuICBASW5wdXQoKSBkYXRhOiBUaW1lbGluZURhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgLyoqIEtub3dzIGlmIHRoZSBjb21wb25lbnQgaXMgbG9hZGVkICovXHJcbiAgcHJpdmF0ZSBfbG9hZGVkID0gZmFsc2U7XHJcblxyXG4gIC8qKiBEeW5hbWljYWxseSBsb2FkIHJlcXVpcmVkIG5vZGUgbW9kdWxlcyAqL1xyXG4gIHByaXZhdGUgbG9hZE1vZHVsZXMgPSBhc3luYyAoKSA9PiAoe1xyXG4gICAgLi4uYXdhaXQgaW1wb3J0KCd2aXMtdGltZWxpbmUvcGVlcicpLFxyXG4gICAgLi4uYXdhaXQgaW1wb3J0KCd2aXMtZGF0YS9wZWVyJylcclxuICB9KVxyXG5cclxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XHJcbiAgICBpZiAoIXRoaXMuZGF0YSB8fCB0aGlzLl9sb2FkZWQpIHJldHVybjtcclxuICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5sb2FkTW9kdWxlcygpLnRoZW4oKG1vZHVsZXMpID0+IHtcclxuICAgICAgICAvLyBUbyBlbmFibGUgdHdvLXdheSBkYXRhIGJpbmRpbmcsIGltcG9ydCB7IERhdGFTZXQgfSBmcm9tICd2aXMtZGF0YSdcclxuICAgICAgICBjb25zdCB7IFRpbWVsaW5lLCBEYXRhU2V0IH0gPSBtb2R1bGVzO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gbmV3IERhdGFTZXQodGhpcy5kYXRhLmRhdGFTZXQpO1xyXG4gICAgICAgIGNvbnN0IHQgPSBuZXcgVGltZWxpbmUoXHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRhdGEuY29udGFpbmVySUQpLCAvLyBjb250YWluZXJcclxuICAgICAgICAgIGl0ZW1zLFxyXG4gICAgICAgICAgdGhpcy5kYXRhLmxpYk9wdGlvbnNcclxuICAgICAgICApO1xyXG4gICAgICAgIC8vIFNldCB0aGUgdGltZWxpbmUgaW5zdGFuY2VcclxuICAgICAgICBpZiAodGhpcy5kYXRhLl9zZXRJbnN0YW5jZSkgdGhpcy5kYXRhLl9zZXRJbnN0YW5jZSh0KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZCkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcbn1cclxuIl19