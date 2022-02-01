//---------------------------
// FACET-YEAR-RANGE.ts
//---------------------------
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class FacetYearRangeComponent {
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
}
FacetYearRangeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: FacetYearRangeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FacetYearRangeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: FacetYearRangeComponent, selector: "n7-facet-year-range", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-facet-year-range\">\n\n    <!-- Select starting year -->\n    <div class=\"n7-facet-year-range__in\">\n        <label class=\"n7-facet-year-range__in-label\">\n            {{ data.inDate.text }}\n        </label>\n        <select (change)=\"onChange(data.inDate.payload, $event.target.value)\"\n            class=\"n7-facet-year-range__in-select {{ data.inDate.classes || '' }}\">\n            <!-- Placeholder option -->\n            <option *ngIf=\"data.inDate.placeholder.length > 0\" value=\"{{ data.inDate.placeholder }}\" disabled selected>\n                {{ data.inDate.placeholder }}\n            </option>\n            <option *ngFor=\"let opt of data.inDate.options\" value=\"{{ opt.value }}\">\n                {{ opt.value }}\n            </option>\n        </select>\n    </div>\n\n    <!-- Select final year -->\n    <div class=\"n7-facet-year-range__out\">\n        <label class=\"n7-facet-year-range__out-label\">\n            {{ data.outDate.text }}\n        </label>\n        <select (change)=\"onChange(data.outDate.payload, $event.target.value)\"\n                class=\"n7-facet-year-range__out-select {{ data.outDate.classes || '' }}\"\n                formControlName=\"outDate\">\n            <!-- Placeholder option -->\n            <option *ngIf=\"data.outDate.placeholder.length > 0\" value=\"{{ data.outDate.placeholder }}\" disabled selected>\n                {{ data.outDate.placeholder }}\n            </option>\n            <option *ngFor=\"let opt of data.outDate.options\" value=\"{{ opt.value }}\">\n                {{ opt.value }}\n            </option>\n        </select>\n    </div>\n</div>", directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: FacetYearRangeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-facet-year-range', template: "<div *ngIf=\"data\" class=\"n7-facet-year-range\">\n\n    <!-- Select starting year -->\n    <div class=\"n7-facet-year-range__in\">\n        <label class=\"n7-facet-year-range__in-label\">\n            {{ data.inDate.text }}\n        </label>\n        <select (change)=\"onChange(data.inDate.payload, $event.target.value)\"\n            class=\"n7-facet-year-range__in-select {{ data.inDate.classes || '' }}\">\n            <!-- Placeholder option -->\n            <option *ngIf=\"data.inDate.placeholder.length > 0\" value=\"{{ data.inDate.placeholder }}\" disabled selected>\n                {{ data.inDate.placeholder }}\n            </option>\n            <option *ngFor=\"let opt of data.inDate.options\" value=\"{{ opt.value }}\">\n                {{ opt.value }}\n            </option>\n        </select>\n    </div>\n\n    <!-- Select final year -->\n    <div class=\"n7-facet-year-range__out\">\n        <label class=\"n7-facet-year-range__out-label\">\n            {{ data.outDate.text }}\n        </label>\n        <select (change)=\"onChange(data.outDate.payload, $event.target.value)\"\n                class=\"n7-facet-year-range__out-select {{ data.outDate.classes || '' }}\"\n                formControlName=\"outDate\">\n            <!-- Placeholder option -->\n            <option *ngIf=\"data.outDate.placeholder.length > 0\" value=\"{{ data.outDate.placeholder }}\" disabled selected>\n                {{ data.outDate.placeholder }}\n            </option>\n            <option *ngFor=\"let opt of data.outDate.options\" value=\"{{ opt.value }}\">\n                {{ opt.value }}\n            </option>\n        </select>\n    </div>\n</div>" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQteWVhci1yYW5nZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2R2LWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9mYWNldC15ZWFyLXJhbmdlL2ZhY2V0LXllYXItcmFuZ2UudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZmFjZXQteWVhci1yYW5nZS9mYWNldC15ZWFyLXJhbmdlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCO0FBQzdCLHNCQUFzQjtBQUN0Qiw2QkFBNkI7QUFFN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQW1GakQsTUFBTSxPQUFPLHVCQUF1QjtJQUtsQyxRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVE7UUFDeEIsUUFBUSxPQUFPLEVBQUU7WUFDZixLQUFLLFNBQVM7Z0JBQUU7b0JBQ2QsZ0NBQWdDO29CQUNoQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDdEUsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQztvQkFDL0QsbUNBQW1DO29CQUNuQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3ZELG9DQUFvQztvQkFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztvQkFDdkMsZ0RBQWdEO29CQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO29CQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO29CQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO2lCQUMxQztnQkFBQyxNQUFNO1lBQ1IsS0FBSyxVQUFVO2dCQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7Z0JBQ25DLGlDQUFpQztnQkFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2xCLE9BQU87b0JBQ1AsS0FBSyxFQUFFO3dCQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO3dCQUM1QixFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSztxQkFDNUI7aUJBQ0YsQ0FBQyxDQUFDO2dCQUNILE1BQU07WUFDUjtnQkFDRSxNQUFNO1NBQ1Q7SUFDSCxDQUFDOztvSEFwQ1UsdUJBQXVCO3dHQUF2Qix1QkFBdUIsbUdDdkZwQyxnb0RBb0NNOzJGRG1ETyx1QkFBdUI7a0JBSm5DLFNBQVM7K0JBQ0UscUJBQXFCOzhCQUl0QixJQUFJO3NCQUFaLEtBQUs7Z0JBRUcsSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZBQ0VULVlFQVItUkFOR0UudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEZhY2V0WWVhclJhbmdlQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgaW5EYXRlIChyZXF1aXJlZClcbiAqIC0gdGV4dCAob3B0aW9uYWwpXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxuICogLSBwYXlsb2FkIChyZXF1aXJlZClcbiAqIC0gX21ldGEgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IG91dERhdGUgKHJlcXVpcmVkKVxuICogLSB0ZXh0IChvcHRpb25hbClcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXG4gKiAtIHBheWxvYWQgKHJlcXVpcmVkKVxuICogLSBfbWV0YSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgb3B0aW9ucyAocmVxdWlyZWQpXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBGYWNldFllYXJSYW5nZURhdGEge1xuICAvKipcbiAgICogYmVnaW5uaW5nIHllYXIgcmFuZ2Ugc2VsZWN0aW9uXG4gICAqL1xuICBpbkRhdGU6IHtcbiAgICAvKipcbiAgICAgKiA8c2VsZWN0PiBoZWFkaW5nXG4gICAgICovXG4gICAgdGV4dD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgICAqL1xuICAgIGNsYXNzZXM/OiBhbnk7XG4gICAgLyoqXG4gICAgICogcGxhY2Vob2xkZXIgb3B0aW9uXG4gICAgICovXG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogb25DaGFuZ2UgcGF5bG9hZFxuICAgICAqL1xuICAgIHBheWxvYWQ6IGFueTtcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGRhdGEgdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICAgKi9cbiAgICBfbWV0YT86IGFueTtcbiAgICBvcHRpb25zOiBGYWNldE9wdGlvbnNbXTtcbiAgfTtcbiAgLyoqXG4gICogZW5kIHllYXIgcmFuZ2Ugc2VsZWN0aW9uXG4gICovXG4gIG91dERhdGU6IHtcbiAgICAvKipcbiAgICAgKiA8c2VsZWN0PiBoZWFkaW5nXG4gICAgICovXG4gICAgdGV4dD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgICAqL1xuICAgIGNsYXNzZXM/OiBhbnk7XG4gICAgLyoqXG4gICAgICogcGxhY2Vob2xkZXIgb3B0aW9uXG4gICAgICovXG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogb25DaGFuZ2UgcGF5bG9hZFxuICAgICAqL1xuICAgIHBheWxvYWQ6IGFueTtcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGRhdGEgdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICAgKi9cbiAgICBfbWV0YT86IGFueTtcbiAgICBvcHRpb25zOiBGYWNldE9wdGlvbnNbXTtcbiAgfTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRmFjZXRPcHRpb25zIHtcbiAgLyoqXG4gICAqIHZhbHVlIG9mIGVhY2ggPG9wdGlvbj5cbiAgICovXG4gIHZhbHVlOiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWZhY2V0LXllYXItcmFuZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmFjZXQteWVhci1yYW5nZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBGYWNldFllYXJSYW5nZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IEZhY2V0WWVhclJhbmdlRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DaGFuZ2UocGF5bG9hZCwgc2VsZWN0ZWQpIHtcbiAgICBzd2l0Y2ggKHBheWxvYWQpIHtcbiAgICAgIGNhc2UgJ2luLWRhdGUnOiB7XG4gICAgICAgIC8vIGZpbmQgaW5kZXggb2Ygc2VsZWN0ZWQgb3B0aW9uXG4gICAgICAgIGNvbnN0IG9wdHMgPSB0aGlzLmRhdGEuaW5EYXRlLm9wdGlvbnM7XG4gICAgICAgIHRoaXMuZGF0YS5pbkRhdGUuX21ldGEgPSBvcHRzLmZpbmQoKG8pID0+IG8udmFsdWUgPT09IHNlbGVjdGVkKS52YWx1ZTtcbiAgICAgICAgY29uc3Qgc2xpY2VJbmRleCA9IG9wdHMuZmluZEluZGV4KChvKSA9PiBvLnZhbHVlID09PSBzZWxlY3RlZCk7XG4gICAgICAgIC8vIG1ha2UgbmV3IGFycmF5IG9mIHBvc3NpYmxlIHllYXJzXG4gICAgICAgIGNvbnN0IG5ld09wdGlvbnMgPSBvcHRzLnNsaWNlKHNsaWNlSW5kZXgsIG9wdHMubGVuZ3RoKTtcbiAgICAgICAgLy8gZ2l2ZSBuZXcgYXJyYXkgdG8gc2Vjb25kIDxzZWxlY3Q+XG4gICAgICAgIHRoaXMuZGF0YS5vdXREYXRlLm9wdGlvbnMgPSBuZXdPcHRpb25zO1xuICAgICAgICAvLyByZW1vdmUgcGxhY2Vob2xkZXIgYW5kIGVuYWJsZSBzZWNvbmQgPHNlbGVjdD5cbiAgICAgICAgdGhpcy5kYXRhLmluRGF0ZS5wbGFjZWhvbGRlciA9ICcnO1xuICAgICAgICB0aGlzLmRhdGEub3V0RGF0ZS5jbGFzc2VzID0gJyc7XG4gICAgICAgIHRoaXMuZGF0YS5vdXREYXRlLnBsYWNlaG9sZGVyID0gJ2Nob29zZSc7XG4gICAgICB9IGJyZWFrO1xuICAgICAgY2FzZSAnb3V0LWRhdGUnOlxuICAgICAgICB0aGlzLmRhdGEub3V0RGF0ZS5fbWV0YSA9IHNlbGVjdGVkO1xuICAgICAgICB0aGlzLmRhdGEub3V0RGF0ZS5wbGFjZWhvbGRlciA9ICcnO1xuICAgICAgICAvLyBlbWl0IHNlbGVjdGVkIGZhY2V0IHBhcmFtZXRlcnNcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7XG4gICAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgZnJvbTogdGhpcy5kYXRhLmluRGF0ZS5fbWV0YSxcbiAgICAgICAgICAgIHRvOiB0aGlzLmRhdGEub3V0RGF0ZS5fbWV0YVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2ICpuZ0lmPVwiZGF0YVwiIGNsYXNzPVwibjctZmFjZXQteWVhci1yYW5nZVwiPlxuXG4gICAgPCEtLSBTZWxlY3Qgc3RhcnRpbmcgeWVhciAtLT5cbiAgICA8ZGl2IGNsYXNzPVwibjctZmFjZXQteWVhci1yYW5nZV9faW5cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwibjctZmFjZXQteWVhci1yYW5nZV9faW4tbGFiZWxcIj5cbiAgICAgICAgICAgIHt7IGRhdGEuaW5EYXRlLnRleHQgfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdCAoY2hhbmdlKT1cIm9uQ2hhbmdlKGRhdGEuaW5EYXRlLnBheWxvYWQsICRldmVudC50YXJnZXQudmFsdWUpXCJcbiAgICAgICAgICAgIGNsYXNzPVwibjctZmFjZXQteWVhci1yYW5nZV9faW4tc2VsZWN0IHt7IGRhdGEuaW5EYXRlLmNsYXNzZXMgfHwgJycgfX1cIj5cbiAgICAgICAgICAgIDwhLS0gUGxhY2Vob2xkZXIgb3B0aW9uIC0tPlxuICAgICAgICAgICAgPG9wdGlvbiAqbmdJZj1cImRhdGEuaW5EYXRlLnBsYWNlaG9sZGVyLmxlbmd0aCA+IDBcIiB2YWx1ZT1cInt7IGRhdGEuaW5EYXRlLnBsYWNlaG9sZGVyIH19XCIgZGlzYWJsZWQgc2VsZWN0ZWQ+XG4gICAgICAgICAgICAgICAge3sgZGF0YS5pbkRhdGUucGxhY2Vob2xkZXIgfX1cbiAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0IG9mIGRhdGEuaW5EYXRlLm9wdGlvbnNcIiB2YWx1ZT1cInt7IG9wdC52YWx1ZSB9fVwiPlxuICAgICAgICAgICAgICAgIHt7IG9wdC52YWx1ZSB9fVxuICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBTZWxlY3QgZmluYWwgeWVhciAtLT5cbiAgICA8ZGl2IGNsYXNzPVwibjctZmFjZXQteWVhci1yYW5nZV9fb3V0XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cIm43LWZhY2V0LXllYXItcmFuZ2VfX291dC1sYWJlbFwiPlxuICAgICAgICAgICAge3sgZGF0YS5vdXREYXRlLnRleHQgfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdCAoY2hhbmdlKT1cIm9uQ2hhbmdlKGRhdGEub3V0RGF0ZS5wYXlsb2FkLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJuNy1mYWNldC15ZWFyLXJhbmdlX19vdXQtc2VsZWN0IHt7IGRhdGEub3V0RGF0ZS5jbGFzc2VzIHx8ICcnIH19XCJcbiAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJvdXREYXRlXCI+XG4gICAgICAgICAgICA8IS0tIFBsYWNlaG9sZGVyIG9wdGlvbiAtLT5cbiAgICAgICAgICAgIDxvcHRpb24gKm5nSWY9XCJkYXRhLm91dERhdGUucGxhY2Vob2xkZXIubGVuZ3RoID4gMFwiIHZhbHVlPVwie3sgZGF0YS5vdXREYXRlLnBsYWNlaG9sZGVyIH19XCIgZGlzYWJsZWQgc2VsZWN0ZWQ+XG4gICAgICAgICAgICAgICAge3sgZGF0YS5vdXREYXRlLnBsYWNlaG9sZGVyIH19XG4gICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG9wdCBvZiBkYXRhLm91dERhdGUub3B0aW9uc1wiIHZhbHVlPVwie3sgb3B0LnZhbHVlIH19XCI+XG4gICAgICAgICAgICAgICAge3sgb3B0LnZhbHVlIH19XG4gICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=