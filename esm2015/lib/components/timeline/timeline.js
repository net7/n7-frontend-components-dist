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
            return (Object.assign({}, yield import('vis-timeline/peer')));
        });
    }
    ngAfterContentChecked() {
        if (!this.data || this._loaded)
            return;
        this._loaded = true;
        setTimeout(() => {
            this.loadModules().then((modules) => {
                // To enable two-way data binding, import { DataSet } from 'vis-data'
                const { Timeline } = modules;
                const t = new Timeline(document.getElementById(this.data.containerID), // container
                this.data.dataSet, this.data.libOptions);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RpbWVsaW5lL3RpbWVsaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixjQUFjO0FBQ2QsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7QUF3QnRFLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBQTlCO1FBS0UsdUNBQXVDO1FBQy9CLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFeEIsNkNBQTZDO1FBQ3JDLGdCQUFXLEdBQUcsR0FBUyxFQUFFO1lBQUMsT0FBQSxtQkFDN0IsTUFBTSxNQUFNLENBQUMsbUJBQW1CLENBQUMsRUFDcEMsQ0FBQTtVQUFBLENBQUE7SUF1QkosQ0FBQztJQXJCQyxxQkFBcUI7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ2xDLHFFQUFxRTtnQkFDckUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLE9BQU8sQ0FBQztnQkFDN0IsTUFBTSxDQUFDLEdBQUcsSUFBSSxRQUFRLENBQ3BCLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxZQUFZO2dCQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQ3JCLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNGLENBQUE7QUFqQ1U7SUFBUixLQUFLLEVBQUU7OytDQUFvQjtBQUVuQjtJQUFSLEtBQUssRUFBRTs7K0NBQVc7QUFIUixpQkFBaUI7SUFKN0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGFBQWE7UUFDdkIsMklBQThCO0tBQy9CLENBQUM7R0FDVyxpQkFBaUIsQ0FrQzdCO1NBbENZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUSU1FTElORS50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YUl0ZW0sIFRpbWVsaW5lT3B0aW9ucyB9IGZyb20gJ3Zpcy10aW1lbGluZSc7IC8vIHR5cGUgaW50ZXJmYWNlc1xuXG5leHBvcnQgaW50ZXJmYWNlIExpYk9wdGlvbnMgZXh0ZW5kcyBUaW1lbGluZU9wdGlvbnMge1xuICAvKiogU3BlY2lmaWVzIGhvdyBzdHJvbmcgdGhlIHpvb21pbmcgZm9yIGVhY2ggc2Nyb2xsIHRpY2suXG4gICAqIEhpZ2hlciB6b29taW5nIGZyaWN0aW9uIHdpbGwgc2xvdyB6b29taW5nIHNwZWVkICovXG4gIHpvb21GcmljdGlvbj86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaW1lbGluZURhdGEge1xuICAvKiogSUQgZm9yIHRoZSBIVE1MIGNvbnRhaW5lciBlbGVtZW50ICovXG4gIGNvbnRhaW5lcklEOiBzdHJpbmc7XG4gIC8qKiBPcHRpb25zIGZvciB2aXMtdGltZWxpbmUsIGZ1bGwgcmVmZXJlbmNlOiBodHRwczovL3Zpc2pzLmdpdGh1Yi5pby92aXMtdGltZWxpbmUvZG9jcy90aW1lbGluZS8jQ29uZmlndXJhdGlvbl9PcHRpb25zICovXG4gIGxpYk9wdGlvbnM6IExpYk9wdGlvbnM7XG4gIC8qKiBTZXRzIHRoZSB0aW1lbGluZSBpbnN0YW5jZSB0byB0aGUgZ2l2ZW4gcGFyYW1ldGVyICovXG4gIF9zZXRJbnN0YW5jZT86IGFueTtcbiAgLyoqIERhZGFzZXQgaW4gdmlzLWpzIGZvcm1hdCwgZnVsbCByZWY6IGh0dHBzOi8vdmlzanMuZ2l0aHViLmlvL3Zpcy10aW1lbGluZS9kb2NzL3RpbWVsaW5lLyNEYXRhX0Zvcm1hdCAqL1xuICBkYXRhU2V0OiBEYXRhSXRlbVtdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy10aW1lbGluZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lbGluZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUaW1lbGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuICBASW5wdXQoKSBkYXRhOiBUaW1lbGluZURhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIC8qKiBLbm93cyBpZiB0aGUgY29tcG9uZW50IGlzIGxvYWRlZCAqL1xuICBwcml2YXRlIF9sb2FkZWQgPSBmYWxzZTtcblxuICAvKiogRHluYW1pY2FsbHkgbG9hZCByZXF1aXJlZCBub2RlIG1vZHVsZXMgKi9cbiAgcHJpdmF0ZSBsb2FkTW9kdWxlcyA9IGFzeW5jICgpID0+ICh7XG4gICAgLi4uYXdhaXQgaW1wb3J0KCd2aXMtdGltZWxpbmUvcGVlcicpLFxuICB9KVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICBpZiAoIXRoaXMuZGF0YSB8fCB0aGlzLl9sb2FkZWQpIHJldHVybjtcbiAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkTW9kdWxlcygpLnRoZW4oKG1vZHVsZXMpID0+IHtcbiAgICAgICAgLy8gVG8gZW5hYmxlIHR3by13YXkgZGF0YSBiaW5kaW5nLCBpbXBvcnQgeyBEYXRhU2V0IH0gZnJvbSAndmlzLWRhdGEnXG4gICAgICAgIGNvbnN0IHsgVGltZWxpbmUgfSA9IG1vZHVsZXM7XG4gICAgICAgIGNvbnN0IHQgPSBuZXcgVGltZWxpbmUoXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kYXRhLmNvbnRhaW5lcklEKSwgLy8gY29udGFpbmVyXG4gICAgICAgICAgdGhpcy5kYXRhLmRhdGFTZXQsXG4gICAgICAgICAgdGhpcy5kYXRhLmxpYk9wdGlvbnNcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5kYXRhLl9zZXRJbnN0YW5jZSh0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgb25DbGljayhwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cbn1cbiJdfQ==