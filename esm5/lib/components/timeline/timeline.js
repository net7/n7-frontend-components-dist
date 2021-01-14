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
            template: "<div *ngIf=\"data\" class=\"n7-timeline\">\n  <div [id]=\"data.containerID\" style=\"border: 1px solid #ddd\"></div> \n</div>\n"
        })
    ], TimelineComponent);
    return TimelineComponent;
}());
export { TimelineComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RpbWVsaW5lL3RpbWVsaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixjQUFjO0FBQ2QsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUF3QnRFO0lBQUE7UUFBQSxpQkFxQ0M7UUFoQ0MsdUNBQXVDO1FBQy9CLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFeEIsNkNBQTZDO1FBQ3JDLGdCQUFXLEdBQUc7Ozs7Ozt3QkFDakIscUJBQU0sTUFBTSxDQUFDLG1CQUFtQixDQUFDLEVBQUE7O2dFQUFqQyxTQUFpQzt3QkFDakMscUJBQU0sTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFBOzRCQUZBLHNCQUFBLG1DQUU3QixTQUE2QixJQUNoQyxFQUFBOzs7YUFBQSxDQUFBO0lBeUJKLENBQUM7SUF2QkMsaURBQXFCLEdBQXJCO1FBQUEsaUJBaUJDO1FBaEJDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBTztnQkFDOUIscUVBQXFFO2dCQUM3RCxJQUFBLDJCQUFRLEVBQUUseUJBQU8sQ0FBYTtnQkFDdEMsSUFBTSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDN0MsSUFBTSxDQUFDLEdBQUcsSUFBSSxRQUFRLENBQ3BCLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxZQUFZO2dCQUM1RCxLQUFLLEVBQ0wsS0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQ3JCLENBQUM7Z0JBQ0YsNEJBQTRCO2dCQUM1QixJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtvQkFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG1DQUFPLEdBQVAsVUFBUSxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBbkNRO1FBQVIsS0FBSyxFQUFFOzttREFBb0I7SUFFbkI7UUFBUixLQUFLLEVBQUU7O21EQUFXO0lBSFIsaUJBQWlCO1FBSjdCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLDJJQUE4QjtTQUMvQixDQUFDO09BQ1csaUJBQWlCLENBcUM3QjtJQUFELHdCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0FyQ1ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRJTUVMSU5FLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlckNvbnRlbnRDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhSXRlbSwgVGltZWxpbmVPcHRpb25zIH0gZnJvbSAndmlzLXRpbWVsaW5lJzsgLy8gdHlwZSBpbnRlcmZhY2VzXG5cbmV4cG9ydCBpbnRlcmZhY2UgTGliT3B0aW9ucyBleHRlbmRzIFRpbWVsaW5lT3B0aW9ucyB7XG4gIC8qKiBTcGVjaWZpZXMgaG93IHN0cm9uZyB0aGUgem9vbWluZyBmb3IgZWFjaCBzY3JvbGwgdGljay5cbiAgICogSGlnaGVyIHpvb21pbmcgZnJpY3Rpb24gd2lsbCBzbG93IHpvb21pbmcgc3BlZWQgKi9cbiAgem9vbUZyaWN0aW9uPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVsaW5lRGF0YSB7XG4gIC8qKiBJRCBmb3IgdGhlIEhUTUwgY29udGFpbmVyIGVsZW1lbnQgKi9cbiAgY29udGFpbmVySUQ6IHN0cmluZztcbiAgLyoqIE9wdGlvbnMgZm9yIHZpcy10aW1lbGluZSwgZnVsbCByZWZlcmVuY2U6IGh0dHBzOi8vdmlzanMuZ2l0aHViLmlvL3Zpcy10aW1lbGluZS9kb2NzL3RpbWVsaW5lLyNDb25maWd1cmF0aW9uX09wdGlvbnMgKi9cbiAgbGliT3B0aW9uczogTGliT3B0aW9ucztcbiAgLyoqIFNldHMgdGhlIHRpbWVsaW5lIGluc3RhbmNlIHRvIHRoZSBnaXZlbiBwYXJhbWV0ZXIgKi9cbiAgX3NldEluc3RhbmNlPzogYW55O1xuICAvKiogRGFkYXNldCBpbiB2aXMtanMgZm9ybWF0LCBmdWxsIHJlZjogaHR0cHM6Ly92aXNqcy5naXRodWIuaW8vdmlzLXRpbWVsaW5lL2RvY3MvdGltZWxpbmUvI0RhdGFfRm9ybWF0ICovXG4gIGRhdGFTZXQ6IERhdGFJdGVtW107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LXRpbWVsaW5lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWVsaW5lLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVsaW5lQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG4gIEBJbnB1dCgpIGRhdGE6IFRpbWVsaW5lRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgLyoqIEtub3dzIGlmIHRoZSBjb21wb25lbnQgaXMgbG9hZGVkICovXG4gIHByaXZhdGUgX2xvYWRlZCA9IGZhbHNlO1xuXG4gIC8qKiBEeW5hbWljYWxseSBsb2FkIHJlcXVpcmVkIG5vZGUgbW9kdWxlcyAqL1xuICBwcml2YXRlIGxvYWRNb2R1bGVzID0gYXN5bmMgKCkgPT4gKHtcbiAgICAuLi5hd2FpdCBpbXBvcnQoJ3Zpcy10aW1lbGluZS9wZWVyJyksXG4gICAgLi4uYXdhaXQgaW1wb3J0KCd2aXMtZGF0YS9wZWVyJylcbiAgfSlcblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgaWYgKCF0aGlzLmRhdGEgfHwgdGhpcy5fbG9hZGVkKSByZXR1cm47XG4gICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubG9hZE1vZHVsZXMoKS50aGVuKChtb2R1bGVzKSA9PiB7XG4gICAgICAgIC8vIFRvIGVuYWJsZSB0d28td2F5IGRhdGEgYmluZGluZywgaW1wb3J0IHsgRGF0YVNldCB9IGZyb20gJ3Zpcy1kYXRhJ1xuICAgICAgICBjb25zdCB7IFRpbWVsaW5lLCBEYXRhU2V0IH0gPSBtb2R1bGVzO1xuICAgICAgICBjb25zdCBpdGVtcyA9IG5ldyBEYXRhU2V0KHRoaXMuZGF0YS5kYXRhU2V0KTtcbiAgICAgICAgY29uc3QgdCA9IG5ldyBUaW1lbGluZShcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRhdGEuY29udGFpbmVySUQpLCAvLyBjb250YWluZXJcbiAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICB0aGlzLmRhdGEubGliT3B0aW9uc1xuICAgICAgICApO1xuICAgICAgICAvLyBTZXQgdGhlIHRpbWVsaW5lIGluc3RhbmNlXG4gICAgICAgIGlmICh0aGlzLmRhdGEuX3NldEluc3RhbmNlKSB0aGlzLmRhdGEuX3NldEluc3RhbmNlKHQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxufVxuIl19