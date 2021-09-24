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
            template: "<div *ngIf=\"data\" class=\"n7-timeline\">\n  <div [id]=\"data.containerID\" style=\"border: 1px solid #ddd\"></div> \n</div>\n"
        })
    ], TimelineComponent);
    return TimelineComponent;
}());
export { TimelineComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RpbWVsaW5lL3RpbWVsaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixjQUFjO0FBQ2QsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUF3QnRFO0lBQUE7UUFBQSxpQkFxQ0M7UUFoQ0MsdUNBQXVDO1FBQy9CLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFeEIsNkNBQTZDO1FBQ3JDLGdCQUFXLEdBQUc7Ozs7Ozt3QkFDakIscUJBQU0sTUFBTSxDQUFDLG1CQUFtQixDQUFDLEVBQUE7O2dFQUFqQyxTQUFpQzt3QkFDakMscUJBQU0sTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFBOzRCQUZBLHNCQUFBLG1DQUU3QixTQUE2QixJQUNoQyxFQUFBOzs7YUFBQSxDQUFBO0lBeUJKLENBQUM7SUF2QkMsaURBQXFCLEdBQXJCO1FBQUEsaUJBaUJDO1FBaEJDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBTztnQkFDOUIscUVBQXFFO2dCQUM3RCxJQUFBLDJCQUFRLEVBQUUseUJBQU8sQ0FBYTtnQkFDdEMsSUFBTSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDN0MsSUFBTSxDQUFDLEdBQUcsSUFBSSxRQUFRLENBQ3BCLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxZQUFZO2dCQUM1RCxLQUFLLEVBQ0wsS0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CO2lCQUN6QyxDQUFDO2dCQUNGLDRCQUE0QjtnQkFDNUIsSUFBSSxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7b0JBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxtQ0FBTyxHQUFQLFVBQVEsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQW5DUTtRQUFSLEtBQUssRUFBRTs7bURBQW9CO0lBRW5CO1FBQVIsS0FBSyxFQUFFOzttREFBVztJQUhSLGlCQUFpQjtRQUo3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QiwySUFBOEI7U0FDL0IsQ0FBQztPQUNXLGlCQUFpQixDQXFDN0I7SUFBRCx3QkFBQztDQUFBLEFBckNELElBcUNDO1NBckNZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUSU1FTElORS50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YUl0ZW0sIFRpbWVsaW5lT3B0aW9ucyB9IGZyb20gJ3Zpcy10aW1lbGluZSc7IC8vIHR5cGUgaW50ZXJmYWNlc1xuXG5leHBvcnQgaW50ZXJmYWNlIExpYk9wdGlvbnMgZXh0ZW5kcyBUaW1lbGluZU9wdGlvbnMge1xuICAvKiogU3BlY2lmaWVzIGhvdyBzdHJvbmcgdGhlIHpvb21pbmcgZm9yIGVhY2ggc2Nyb2xsIHRpY2suXG4gICAqIEhpZ2hlciB6b29taW5nIGZyaWN0aW9uIHdpbGwgc2xvdyB6b29taW5nIHNwZWVkICovXG4gIHpvb21GcmljdGlvbj86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaW1lbGluZURhdGEge1xuICAvKiogSUQgZm9yIHRoZSBIVE1MIGNvbnRhaW5lciBlbGVtZW50ICovXG4gIGNvbnRhaW5lcklEOiBzdHJpbmc7XG4gIC8qKiBPcHRpb25zIGZvciB2aXMtdGltZWxpbmUsIGZ1bGwgcmVmZXJlbmNlOiBodHRwczovL3Zpc2pzLmdpdGh1Yi5pby92aXMtdGltZWxpbmUvZG9jcy90aW1lbGluZS8jQ29uZmlndXJhdGlvbl9PcHRpb25zICovXG4gIGxpYk9wdGlvbnM6IExpYk9wdGlvbnM7XG4gIC8qKiBTZXRzIHRoZSB0aW1lbGluZSBpbnN0YW5jZSB0byB0aGUgZ2l2ZW4gcGFyYW1ldGVyICovXG4gIF9zZXRJbnN0YW5jZT86IGFueTtcbiAgLyoqIERhZGFzZXQgaW4gdmlzLWpzIGZvcm1hdCwgZnVsbCByZWY6IGh0dHBzOi8vdmlzanMuZ2l0aHViLmlvL3Zpcy10aW1lbGluZS9kb2NzL3RpbWVsaW5lLyNEYXRhX0Zvcm1hdCAqL1xuICBkYXRhU2V0OiBEYXRhSXRlbVtdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy10aW1lbGluZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lbGluZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUaW1lbGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuICBASW5wdXQoKSBkYXRhOiBUaW1lbGluZURhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIC8qKiBLbm93cyBpZiB0aGUgY29tcG9uZW50IGlzIGxvYWRlZCAqL1xuICBwcml2YXRlIF9sb2FkZWQgPSBmYWxzZTtcblxuICAvKiogRHluYW1pY2FsbHkgbG9hZCByZXF1aXJlZCBub2RlIG1vZHVsZXMgKi9cbiAgcHJpdmF0ZSBsb2FkTW9kdWxlcyA9IGFzeW5jICgpID0+ICh7XG4gICAgLi4uYXdhaXQgaW1wb3J0KCd2aXMtdGltZWxpbmUvcGVlcicpLFxuICAgIC4uLmF3YWl0IGltcG9ydCgndmlzLWRhdGEvcGVlcicpXG4gIH0pXG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgIGlmICghdGhpcy5kYXRhIHx8IHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xuICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRNb2R1bGVzKCkudGhlbigobW9kdWxlcykgPT4ge1xuICAgICAgICAvLyBUbyBlbmFibGUgdHdvLXdheSBkYXRhIGJpbmRpbmcsIGltcG9ydCB7IERhdGFTZXQgfSBmcm9tICd2aXMtZGF0YSdcbiAgICAgICAgY29uc3QgeyBUaW1lbGluZSwgRGF0YVNldCB9ID0gbW9kdWxlcztcbiAgICAgICAgY29uc3QgaXRlbXMgPSBuZXcgRGF0YVNldCh0aGlzLmRhdGEuZGF0YVNldCk7XG4gICAgICAgIGNvbnN0IHQgPSBuZXcgVGltZWxpbmUoXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kYXRhLmNvbnRhaW5lcklEKSwgLy8gY29udGFpbmVyXG4gICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgdGhpcy5kYXRhLmxpYk9wdGlvbnMgLy8gYWRkIGdyb3VwcyBiZWxvd1xuICAgICAgICApO1xuICAgICAgICAvLyBTZXQgdGhlIHRpbWVsaW5lIGluc3RhbmNlXG4gICAgICAgIGlmICh0aGlzLmRhdGEuX3NldEluc3RhbmNlKSB0aGlzLmRhdGEuX3NldEluc3RhbmNlKHQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxufVxuIl19