//---------------------------
// FACET-YEAR-RANGE.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let FacetYearRangeComponent = class FacetYearRangeComponent {
    onChange(payload, selected) {
        switch (payload) {
            case 'in-date':
                {
                    // find index of selected option
                    const opts = this.data.inDate.options;
                    this.data.inDate._meta = opts.find((o) => o.value === selected).value;
                    const sliceIndex = opts.findIndex((o) => o.value === selected);
                    // make new array of possible years
                    const newOptions = opts.slice(sliceIndex, opts.length);
                    // give new array to second <select>
                    this.data.outDate.options = newOptions;
                    // remove placeholder and enable second <select>
                    this.data.inDate.placeholder = '';
                    this.data.outDate.classes = '';
                    this.data.outDate.placeholder = 'choose';
                }
                break;
            case 'out-date':
                this.data.outDate._meta = selected;
                this.data.outDate.placeholder = '';
                // emit selected facet parameters
                this.emit('change', {
                    payload,
                    value: {
                        from: this.data.inDate._meta,
                        to: this.data.outDate._meta
                    }
                });
                break;
            default:
                break;
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], FacetYearRangeComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], FacetYearRangeComponent.prototype, "emit", void 0);
FacetYearRangeComponent = __decorate([
    Component({
        selector: 'n7-facet-year-range',
        template: "<div *ngIf=\"data\" class=\"n7-facet-year-range\">\r\n\r\n    <!-- Select starting year -->\r\n    <div class=\"n7-facet-year-range__in\">\r\n        <label class=\"n7-facet-year-range__in-label\">\r\n            {{ data.inDate.text }}\r\n        </label>\r\n        <select (change)=\"onChange(data.inDate.payload, $event.target.value)\"\r\n            class=\"n7-facet-year-range__in-select {{ data.inDate.classes || '' }}\">\r\n            <!-- Placeholder option -->\r\n            <option *ngIf=\"data.inDate.placeholder.length > 0\" value=\"{{ data.inDate.placeholder }}\" disabled selected>\r\n                {{ data.inDate.placeholder }}\r\n            </option>\r\n            <option *ngFor=\"let opt of data.inDate.options\" value=\"{{ opt.value }}\">\r\n                {{ opt.value }}\r\n            </option>\r\n        </select>\r\n    </div>\r\n\r\n    <!-- Select final year -->\r\n    <div class=\"n7-facet-year-range__out\">\r\n        <label class=\"n7-facet-year-range__out-label\">\r\n            {{ data.outDate.text }}\r\n        </label>\r\n        <select (change)=\"onChange(data.outDate.payload, $event.target.value)\"\r\n                class=\"n7-facet-year-range__out-select {{ data.outDate.classes || '' }}\"\r\n                formControlName=\"outDate\">\r\n            <!-- Placeholder option -->\r\n            <option *ngIf=\"data.outDate.placeholder.length > 0\" value=\"{{ data.outDate.placeholder }}\" disabled selected>\r\n                {{ data.outDate.placeholder }}\r\n            </option>\r\n            <option *ngFor=\"let opt of data.outDate.options\" value=\"{{ opt.value }}\">\r\n                {{ opt.value }}\r\n            </option>\r\n        </select>\r\n    </div>\r\n</div>"
    })
], FacetYearRangeComponent);
export { FacetYearRangeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQteWVhci1yYW5nZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmFjZXQteWVhci1yYW5nZS9mYWNldC15ZWFyLXJhbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixzQkFBc0I7QUFDdEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQW1GakQsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFLbEMsUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRO1FBQ3hCLFFBQVEsT0FBTyxFQUFFO1lBQ2YsS0FBSyxTQUFTO2dCQUFFO29CQUNkLGdDQUFnQztvQkFDaEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO29CQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUM7b0JBQ3RFLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUM7b0JBQy9ELG1DQUFtQztvQkFDbkMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN2RCxvQ0FBb0M7b0JBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7b0JBQ3ZDLGdEQUFnRDtvQkFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztvQkFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztvQkFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztpQkFDMUM7Z0JBQUMsTUFBTTtZQUNSLEtBQUssVUFBVTtnQkFDYixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO2dCQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUNuQyxpQ0FBaUM7Z0JBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNsQixPQUFPO29CQUNQLEtBQUssRUFBRTt3QkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSzt3QkFDNUIsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUs7cUJBQzVCO2lCQUNGLENBQUMsQ0FBQztnQkFDSCxNQUFNO1lBQ1I7Z0JBQ0UsTUFBTTtTQUNUO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUFwQ1U7SUFBUixLQUFLLEVBQUU7O3FEQUEwQjtBQUV6QjtJQUFSLEtBQUssRUFBRTs7cURBQVc7QUFIUix1QkFBdUI7SUFKbkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQixrdERBQXNDO0tBQ3ZDLENBQUM7R0FDVyx1QkFBdUIsQ0FxQ25DO1NBckNZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEZBQ0VULVlFQVItUkFOR0UudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEZhY2V0WWVhclJhbmdlQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGluRGF0ZSAocmVxdWlyZWQpXHJcbiAqIC0gdGV4dCAob3B0aW9uYWwpXHJcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIC0gcGF5bG9hZCAocmVxdWlyZWQpXHJcbiAqIC0gX21ldGEgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgb3V0RGF0ZSAocmVxdWlyZWQpXHJcbiAqIC0gdGV4dCAob3B0aW9uYWwpXHJcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIC0gcGF5bG9hZCAocmVxdWlyZWQpXHJcbiAqIC0gX21ldGEgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgb3B0aW9ucyAocmVxdWlyZWQpXHJcbiAqL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGYWNldFllYXJSYW5nZURhdGEge1xyXG4gIC8qKlxyXG4gICAqIGJlZ2lubmluZyB5ZWFyIHJhbmdlIHNlbGVjdGlvblxyXG4gICAqL1xyXG4gIGluRGF0ZToge1xyXG4gICAgLyoqXHJcbiAgICAgKiA8c2VsZWN0PiBoZWFkaW5nXHJcbiAgICAgKi9cclxuICAgIHRleHQ/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICAgKi9cclxuICAgIGNsYXNzZXM/OiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIHBsYWNlaG9sZGVyIG9wdGlvblxyXG4gICAgICovXHJcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogb25DaGFuZ2UgcGF5bG9hZFxyXG4gICAgICovXHJcbiAgICBwYXlsb2FkOiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgZGF0YSB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xyXG4gICAgICovXHJcbiAgICBfbWV0YT86IGFueTtcclxuICAgIG9wdGlvbnM6IEZhY2V0T3B0aW9uc1tdO1xyXG4gIH07XHJcbiAgLyoqXHJcbiAgKiBlbmQgeWVhciByYW5nZSBzZWxlY3Rpb25cclxuICAqL1xyXG4gIG91dERhdGU6IHtcclxuICAgIC8qKlxyXG4gICAgICogPHNlbGVjdD4gaGVhZGluZ1xyXG4gICAgICovXHJcbiAgICB0ZXh0Pzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAgICovXHJcbiAgICBjbGFzc2VzPzogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBwbGFjZWhvbGRlciBvcHRpb25cclxuICAgICAqL1xyXG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIG9uQ2hhbmdlIHBheWxvYWRcclxuICAgICAqL1xyXG4gICAgcGF5bG9hZDogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGRhdGEgdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcclxuICAgICAqL1xyXG4gICAgX21ldGE/OiBhbnk7XHJcbiAgICBvcHRpb25zOiBGYWNldE9wdGlvbnNbXTtcclxuICB9O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRmFjZXRPcHRpb25zIHtcclxuICAvKipcclxuICAgKiB2YWx1ZSBvZiBlYWNoIDxvcHRpb24+XHJcbiAgICovXHJcbiAgdmFsdWU6IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1mYWNldC15ZWFyLXJhbmdlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmFjZXQteWVhci1yYW5nZS5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFjZXRZZWFyUmFuZ2VDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IEZhY2V0WWVhclJhbmdlRGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBvbkNoYW5nZShwYXlsb2FkLCBzZWxlY3RlZCkge1xyXG4gICAgc3dpdGNoIChwYXlsb2FkKSB7XHJcbiAgICAgIGNhc2UgJ2luLWRhdGUnOiB7XHJcbiAgICAgICAgLy8gZmluZCBpbmRleCBvZiBzZWxlY3RlZCBvcHRpb25cclxuICAgICAgICBjb25zdCBvcHRzID0gdGhpcy5kYXRhLmluRGF0ZS5vcHRpb25zO1xyXG4gICAgICAgIHRoaXMuZGF0YS5pbkRhdGUuX21ldGEgPSBvcHRzLmZpbmQoKG8pID0+IG8udmFsdWUgPT09IHNlbGVjdGVkKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBzbGljZUluZGV4ID0gb3B0cy5maW5kSW5kZXgoKG8pID0+IG8udmFsdWUgPT09IHNlbGVjdGVkKTtcclxuICAgICAgICAvLyBtYWtlIG5ldyBhcnJheSBvZiBwb3NzaWJsZSB5ZWFyc1xyXG4gICAgICAgIGNvbnN0IG5ld09wdGlvbnMgPSBvcHRzLnNsaWNlKHNsaWNlSW5kZXgsIG9wdHMubGVuZ3RoKTtcclxuICAgICAgICAvLyBnaXZlIG5ldyBhcnJheSB0byBzZWNvbmQgPHNlbGVjdD5cclxuICAgICAgICB0aGlzLmRhdGEub3V0RGF0ZS5vcHRpb25zID0gbmV3T3B0aW9ucztcclxuICAgICAgICAvLyByZW1vdmUgcGxhY2Vob2xkZXIgYW5kIGVuYWJsZSBzZWNvbmQgPHNlbGVjdD5cclxuICAgICAgICB0aGlzLmRhdGEuaW5EYXRlLnBsYWNlaG9sZGVyID0gJyc7XHJcbiAgICAgICAgdGhpcy5kYXRhLm91dERhdGUuY2xhc3NlcyA9ICcnO1xyXG4gICAgICAgIHRoaXMuZGF0YS5vdXREYXRlLnBsYWNlaG9sZGVyID0gJ2Nob29zZSc7XHJcbiAgICAgIH0gYnJlYWs7XHJcbiAgICAgIGNhc2UgJ291dC1kYXRlJzpcclxuICAgICAgICB0aGlzLmRhdGEub3V0RGF0ZS5fbWV0YSA9IHNlbGVjdGVkO1xyXG4gICAgICAgIHRoaXMuZGF0YS5vdXREYXRlLnBsYWNlaG9sZGVyID0gJyc7XHJcbiAgICAgICAgLy8gZW1pdCBzZWxlY3RlZCBmYWNldCBwYXJhbWV0ZXJzXHJcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7XHJcbiAgICAgICAgICBwYXlsb2FkLFxyXG4gICAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgZnJvbTogdGhpcy5kYXRhLmluRGF0ZS5fbWV0YSxcclxuICAgICAgICAgICAgdG86IHRoaXMuZGF0YS5vdXREYXRlLl9tZXRhXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==