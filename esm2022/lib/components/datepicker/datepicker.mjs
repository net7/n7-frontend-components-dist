//---------------------------
// DATEPICKER.ts
//---------------------------
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class DatepickerComponent {
    constructor() {
        this._loaded = false;
    }
    ngAfterContentChecked() {
        if (!this.data || this._loaded)
            return;
        this._loaded = true;
        setTimeout(() => {
            const { id, libOptions } = this.data;
            import('flatpickr').then((module) => {
                const { default: flatpickr } = module;
                const datepicker = flatpickr(`#${id}`, {
                    ...libOptions,
                    onChange: (selectedDates, dateStr, instance) => {
                        if (this.emit) {
                            this.emit('change', { selectedDates, dateStr, instance });
                        }
                    },
                });
                // setting datepicker
                if (this.data.getInstance)
                    this.data.getInstance(datepicker);
            });
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: DatepickerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: DatepickerComponent, selector: "n7-datepicker", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-datepicker {{ data.classes || '' }}\">\n  <input type=\"text\" id=\"{{this.data.id}}\" />\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: DatepickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-datepicker', template: "<div *ngIf=\"data\" class=\"n7-datepicker {{ data.classes || '' }}\">\n  <input type=\"text\" id=\"{{this.data.id}}\" />\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2R2LWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9kYXRlcGlja2VyL2RhdGVwaWNrZXIudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCO0FBQzdCLGdCQUFnQjtBQUNoQiw2QkFBNkI7QUFFN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQXlDakQsTUFBTSxPQUFPLG1CQUFtQjtJQUpoQztRQVNVLFlBQU8sR0FBRyxLQUFLLENBQUM7S0F3QnpCO0lBdEJDLHFCQUFxQjtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFFdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFcEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLE1BQU0sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNyQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ2xDLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsTUFBTSxDQUFDO2dCQUN0QyxNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRTtvQkFDckMsR0FBRyxVQUFVO29CQUNiLFFBQVEsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUU7d0JBQzdDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDOzRCQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO3dCQUM1RCxDQUFDO29CQUNILENBQUM7aUJBQ0YsQ0FBQyxDQUFDO2dCQUNILHFCQUFxQjtnQkFDckIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7b0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0QsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OEdBNUJVLG1CQUFtQjtrR0FBbkIsbUJBQW1CLDZGQzdDaEMsb0lBR0E7OzJGRDBDYSxtQkFBbUI7a0JBSi9CLFNBQVM7K0JBQ0UsZUFBZTs4QkFJaEIsSUFBSTtzQkFBWixLQUFLO2dCQUVHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEQVRFUElDS0VSLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vKipcbiAqIEludGVyZmFjZSBmb3IgZGF0YXBpY2tlciBjb21wb25lbnRcbiAqIEBwcm9wZXJ0eSBpZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgbGliT3B0aW9ucyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZVBpY2tlckRhdGEge1xuICAvKipcbiAgICogZGF0ZXBpY2tlciBpZFxuICAgKi9cbiAgaWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIGRhdGVwaWNrZXIgbGlicmFyeSBvcHRpb25zXG4gICAqIHZpZXcgTElOSzogaHR0cHM6Ly9mbGF0cGlja3IuanMub3JnL1xuICAgKi9cbiAgbGliT3B0aW9uczogYW55O1xuICAvKipcbiAgICogZm9yIGRhdGVwaWNrZXIgcmFuZ2UgbWluIGFuZCBtYXggcmFuZ2UgdmFsdWVcbiAgICovXG4gIG1pblJhbmdlPzogbnVtYmVyO1xuICBtYXhSYW5nZT86IG51bWJlcjtcbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIGRhdGVwaWNrZXIgZXZlbnQgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbiAgX21ldGE/OiBhbnk7XG4gIC8qKlxuICAgKiBjYWxsYmFjayBmb3Igc2F2aW5nIHRoZSBjcmVhdGVkIGRhdGVwaWNrZXIgaW5zdGFuY2VcbiAgICovXG4gIGdldEluc3RhbmNlPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1kYXRlcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGVwaWNrZXIuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBEYXRlUGlja2VyRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgcHJpdmF0ZSBfbG9hZGVkID0gZmFsc2U7XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgIGlmICghdGhpcy5kYXRhIHx8IHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgeyBpZCwgbGliT3B0aW9ucyB9ID0gdGhpcy5kYXRhO1xuICAgICAgaW1wb3J0KCdmbGF0cGlja3InKS50aGVuKChtb2R1bGUpID0+IHtcbiAgICAgICAgY29uc3QgeyBkZWZhdWx0OiBmbGF0cGlja3IgfSA9IG1vZHVsZTtcbiAgICAgICAgY29uc3QgZGF0ZXBpY2tlciA9IGZsYXRwaWNrcihgIyR7aWR9YCwge1xuICAgICAgICAgIC4uLmxpYk9wdGlvbnMsXG4gICAgICAgICAgb25DaGFuZ2U6IChzZWxlY3RlZERhdGVzLCBkYXRlU3RyLCBpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZW1pdCkge1xuICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgc2VsZWN0ZWREYXRlcywgZGF0ZVN0ciwgaW5zdGFuY2UgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHNldHRpbmcgZGF0ZXBpY2tlclxuICAgICAgICBpZiAodGhpcy5kYXRhLmdldEluc3RhbmNlKSB0aGlzLmRhdGEuZ2V0SW5zdGFuY2UoZGF0ZXBpY2tlcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiPGRpdiAqbmdJZj1cImRhdGFcIiBjbGFzcz1cIm43LWRhdGVwaWNrZXIge3sgZGF0YS5jbGFzc2VzIHx8ICcnIH19XCI+XG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwie3t0aGlzLmRhdGEuaWR9fVwiIC8+XG48L2Rpdj5cbiJdfQ==