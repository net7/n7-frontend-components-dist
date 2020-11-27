//---------------------------
// FACET-YEAR-RANGE.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var FacetYearRangeComponent = /** @class */ (function () {
    function FacetYearRangeComponent() {
    }
    FacetYearRangeComponent.prototype.onChange = function (payload, selected) {
        switch (payload) {
            case 'in-date':
                {
                    // find index of selected option
                    var opts = this.data.inDate.options;
                    this.data.inDate._meta = opts.find(function (o) { return o.value === selected; }).value;
                    var sliceIndex = opts.findIndex(function (o) { return o.value === selected; });
                    // make new array of possible years
                    var newOptions = opts.slice(sliceIndex, opts.length);
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
                    payload: payload,
                    value: {
                        from: this.data.inDate._meta,
                        to: this.data.outDate._meta
                    }
                });
                break;
            default:
                break;
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
            template: "<div *ngIf=\"data\" class=\"n7-facet-year-range\">\n\n    <!-- Select starting year -->\n    <div class=\"n7-facet-year-range__in\">\n        <label class=\"n7-facet-year-range__in-label\">\n            {{ data.inDate.text }}\n        </label>\n        <select (change)=\"onChange(data.inDate.payload, $event.target.value)\"\n            class=\"n7-facet-year-range__in-select {{ data.inDate.classes || '' }}\">\n            <!-- Placeholder option -->\n            <option *ngIf=\"data.inDate.placeholder.length > 0\" value=\"{{ data.inDate.placeholder }}\" disabled selected>\n                {{ data.inDate.placeholder }}\n            </option>\n            <option *ngFor=\"let opt of data.inDate.options\" value=\"{{ opt.value }}\">\n                {{ opt.value }}\n            </option>\n        </select>\n    </div>\n\n    <!-- Select final year -->\n    <div class=\"n7-facet-year-range__out\">\n        <label class=\"n7-facet-year-range__out-label\">\n            {{ data.outDate.text }}\n        </label>\n        <select (change)=\"onChange(data.outDate.payload, $event.target.value)\"\n                class=\"n7-facet-year-range__out-select {{ data.outDate.classes || '' }}\"\n                formControlName=\"outDate\">\n            <!-- Placeholder option -->\n            <option *ngIf=\"data.outDate.placeholder.length > 0\" value=\"{{ data.outDate.placeholder }}\" disabled selected>\n                {{ data.outDate.placeholder }}\n            </option>\n            <option *ngFor=\"let opt of data.outDate.options\" value=\"{{ opt.value }}\">\n                {{ opt.value }}\n            </option>\n        </select>\n    </div>\n</div>"
        })
    ], FacetYearRangeComponent);
    return FacetYearRangeComponent;
}());
export { FacetYearRangeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQteWVhci1yYW5nZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmFjZXQteWVhci1yYW5nZS9mYWNldC15ZWFyLXJhbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixzQkFBc0I7QUFDdEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQW1GakQ7SUFBQTtJQXFDQSxDQUFDO0lBaENDLDBDQUFRLEdBQVIsVUFBUyxPQUFPLEVBQUUsUUFBUTtRQUN4QixRQUFRLE9BQU8sRUFBRTtZQUNmLEtBQUssU0FBUztnQkFBRTtvQkFDZCxnQ0FBZ0M7b0JBQ2hDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztvQkFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDdEUsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFwQixDQUFvQixDQUFDLENBQUM7b0JBQy9ELG1DQUFtQztvQkFDbkMsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN2RCxvQ0FBb0M7b0JBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7b0JBQ3ZDLGdEQUFnRDtvQkFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztvQkFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztvQkFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztpQkFDMUM7Z0JBQUMsTUFBTTtZQUNSLEtBQUssVUFBVTtnQkFDYixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO2dCQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUNuQyxpQ0FBaUM7Z0JBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNsQixPQUFPLFNBQUE7b0JBQ1AsS0FBSyxFQUFFO3dCQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO3dCQUM1QixFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSztxQkFDNUI7aUJBQ0YsQ0FBQyxDQUFDO2dCQUNILE1BQU07WUFDUjtnQkFDRSxNQUFNO1NBQ1Q7SUFDSCxDQUFDO0lBbkNRO1FBQVIsS0FBSyxFQUFFOzt5REFBMEI7SUFFekI7UUFBUixLQUFLLEVBQUU7O3lEQUFXO0lBSFIsdUJBQXVCO1FBSm5DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsMG9EQUFzQztTQUN2QyxDQUFDO09BQ1csdUJBQXVCLENBcUNuQztJQUFELDhCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0FyQ1ksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZBQ0VULVlFQVItUkFOR0UudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEZhY2V0WWVhclJhbmdlQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgaW5EYXRlIChyZXF1aXJlZClcbiAqIC0gdGV4dCAob3B0aW9uYWwpXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxuICogLSBwYXlsb2FkIChyZXF1aXJlZClcbiAqIC0gX21ldGEgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IG91dERhdGUgKHJlcXVpcmVkKVxuICogLSB0ZXh0IChvcHRpb25hbClcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXG4gKiAtIHBheWxvYWQgKHJlcXVpcmVkKVxuICogLSBfbWV0YSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgb3B0aW9ucyAocmVxdWlyZWQpXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBGYWNldFllYXJSYW5nZURhdGEge1xuICAvKipcbiAgICogYmVnaW5uaW5nIHllYXIgcmFuZ2Ugc2VsZWN0aW9uXG4gICAqL1xuICBpbkRhdGU6IHtcbiAgICAvKipcbiAgICAgKiA8c2VsZWN0PiBoZWFkaW5nXG4gICAgICovXG4gICAgdGV4dD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgICAqL1xuICAgIGNsYXNzZXM/OiBhbnk7XG4gICAgLyoqXG4gICAgICogcGxhY2Vob2xkZXIgb3B0aW9uXG4gICAgICovXG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogb25DaGFuZ2UgcGF5bG9hZFxuICAgICAqL1xuICAgIHBheWxvYWQ6IGFueTtcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGRhdGEgdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICAgKi9cbiAgICBfbWV0YT86IGFueTtcbiAgICBvcHRpb25zOiBGYWNldE9wdGlvbnNbXTtcbiAgfTtcbiAgLyoqXG4gICogZW5kIHllYXIgcmFuZ2Ugc2VsZWN0aW9uXG4gICovXG4gIG91dERhdGU6IHtcbiAgICAvKipcbiAgICAgKiA8c2VsZWN0PiBoZWFkaW5nXG4gICAgICovXG4gICAgdGV4dD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgICAqL1xuICAgIGNsYXNzZXM/OiBhbnk7XG4gICAgLyoqXG4gICAgICogcGxhY2Vob2xkZXIgb3B0aW9uXG4gICAgICovXG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogb25DaGFuZ2UgcGF5bG9hZFxuICAgICAqL1xuICAgIHBheWxvYWQ6IGFueTtcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGRhdGEgdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICAgKi9cbiAgICBfbWV0YT86IGFueTtcbiAgICBvcHRpb25zOiBGYWNldE9wdGlvbnNbXTtcbiAgfTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRmFjZXRPcHRpb25zIHtcbiAgLyoqXG4gICAqIHZhbHVlIG9mIGVhY2ggPG9wdGlvbj5cbiAgICovXG4gIHZhbHVlOiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWZhY2V0LXllYXItcmFuZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmFjZXQteWVhci1yYW5nZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBGYWNldFllYXJSYW5nZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IEZhY2V0WWVhclJhbmdlRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DaGFuZ2UocGF5bG9hZCwgc2VsZWN0ZWQpIHtcbiAgICBzd2l0Y2ggKHBheWxvYWQpIHtcbiAgICAgIGNhc2UgJ2luLWRhdGUnOiB7XG4gICAgICAgIC8vIGZpbmQgaW5kZXggb2Ygc2VsZWN0ZWQgb3B0aW9uXG4gICAgICAgIGNvbnN0IG9wdHMgPSB0aGlzLmRhdGEuaW5EYXRlLm9wdGlvbnM7XG4gICAgICAgIHRoaXMuZGF0YS5pbkRhdGUuX21ldGEgPSBvcHRzLmZpbmQoKG8pID0+IG8udmFsdWUgPT09IHNlbGVjdGVkKS52YWx1ZTtcbiAgICAgICAgY29uc3Qgc2xpY2VJbmRleCA9IG9wdHMuZmluZEluZGV4KChvKSA9PiBvLnZhbHVlID09PSBzZWxlY3RlZCk7XG4gICAgICAgIC8vIG1ha2UgbmV3IGFycmF5IG9mIHBvc3NpYmxlIHllYXJzXG4gICAgICAgIGNvbnN0IG5ld09wdGlvbnMgPSBvcHRzLnNsaWNlKHNsaWNlSW5kZXgsIG9wdHMubGVuZ3RoKTtcbiAgICAgICAgLy8gZ2l2ZSBuZXcgYXJyYXkgdG8gc2Vjb25kIDxzZWxlY3Q+XG4gICAgICAgIHRoaXMuZGF0YS5vdXREYXRlLm9wdGlvbnMgPSBuZXdPcHRpb25zO1xuICAgICAgICAvLyByZW1vdmUgcGxhY2Vob2xkZXIgYW5kIGVuYWJsZSBzZWNvbmQgPHNlbGVjdD5cbiAgICAgICAgdGhpcy5kYXRhLmluRGF0ZS5wbGFjZWhvbGRlciA9ICcnO1xuICAgICAgICB0aGlzLmRhdGEub3V0RGF0ZS5jbGFzc2VzID0gJyc7XG4gICAgICAgIHRoaXMuZGF0YS5vdXREYXRlLnBsYWNlaG9sZGVyID0gJ2Nob29zZSc7XG4gICAgICB9IGJyZWFrO1xuICAgICAgY2FzZSAnb3V0LWRhdGUnOlxuICAgICAgICB0aGlzLmRhdGEub3V0RGF0ZS5fbWV0YSA9IHNlbGVjdGVkO1xuICAgICAgICB0aGlzLmRhdGEub3V0RGF0ZS5wbGFjZWhvbGRlciA9ICcnO1xuICAgICAgICAvLyBlbWl0IHNlbGVjdGVkIGZhY2V0IHBhcmFtZXRlcnNcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7XG4gICAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgZnJvbTogdGhpcy5kYXRhLmluRGF0ZS5fbWV0YSxcbiAgICAgICAgICAgIHRvOiB0aGlzLmRhdGEub3V0RGF0ZS5fbWV0YVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iXX0=