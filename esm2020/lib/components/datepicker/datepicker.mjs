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
                    }
                });
                // setting datepicker
                if (this.data.getInstance)
                    this.data.getInstance(datepicker);
            });
        });
    }
}
DatepickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DatepickerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatepickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: DatepickerComponent, selector: "n7-datepicker", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-datepicker {{ data.classes || '' }}\">\n  <input type=\"text\" id=\"{{this.data.id}}\"/>\n</div>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DatepickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-datepicker', template: "<div *ngIf=\"data\" class=\"n7-datepicker {{ data.classes || '' }}\">\n  <input type=\"text\" id=\"{{this.data.id}}\"/>\n</div>" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2R2LWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9kYXRlcGlja2VyL2RhdGVwaWNrZXIudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCO0FBQzdCLGdCQUFnQjtBQUNoQiw2QkFBNkI7QUFFN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQXlDakQsTUFBTSxPQUFPLG1CQUFtQjtJQUpoQztRQVNVLFlBQU8sR0FBRyxLQUFLLENBQUM7S0F5QnpCO0lBdkJDLHFCQUFxQjtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFFdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFcEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLE1BQU0sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNyQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ2xDLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsTUFBTSxDQUFDO2dCQUN0QyxNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFDbkM7b0JBQ0UsR0FBRyxVQUFVO29CQUNiLFFBQVEsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUU7d0JBQzdDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTs0QkFDYixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQzt5QkFDM0Q7b0JBQ0gsQ0FBQztpQkFDRixDQUFDLENBQUM7Z0JBQ0wscUJBQXFCO2dCQUNyQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztvQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMvRCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0hBN0JVLG1CQUFtQjtvR0FBbkIsbUJBQW1CLDZGQzdDaEMsaUlBRU07MkZEMkNPLG1CQUFtQjtrQkFKL0IsU0FBUzsrQkFDRSxlQUFlOzhCQUloQixJQUFJO3NCQUFaLEtBQUs7Z0JBRUcsSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERBVEVQSUNLRVIudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8qKlxuICogSW50ZXJmYWNlIGZvciBkYXRhcGlja2VyIGNvbXBvbmVudFxuICogQHByb3BlcnR5IGlkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBsaWJPcHRpb25zIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBEYXRlUGlja2VyRGF0YSB7XG4gIC8qKlxuICAgKiBkYXRlcGlja2VyIGlkXG4gICAqL1xuICBpZDogc3RyaW5nO1xuICAgLyoqXG4gICAqIGRhdGVwaWNrZXIgbGlicmFyeSBvcHRpb25zXG4gICAqIHZpZXcgTElOSzogaHR0cHM6Ly9mbGF0cGlja3IuanMub3JnL1xuICAgKi9cbiAgbGliT3B0aW9uczogYW55O1xuICAvKipcbiAgICogZm9yIGRhdGVwaWNrZXIgcmFuZ2UgbWluIGFuZCBtYXggcmFuZ2UgdmFsdWVcbiAgICovXG4gIG1pblJhbmdlPzogbnVtYmVyO1xuICBtYXhSYW5nZT86IG51bWJlcjtcbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIGRhdGVwaWNrZXIgZXZlbnQgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbiAgX21ldGE/OiBhbnk7XG4gIC8qKlxuICAgKiBjYWxsYmFjayBmb3Igc2F2aW5nIHRoZSBjcmVhdGVkIGRhdGVwaWNrZXIgaW5zdGFuY2VcbiAgICovXG4gIGdldEluc3RhbmNlPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1kYXRlcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGVwaWNrZXIuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IERhdGVQaWNrZXJEYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBwcml2YXRlIF9sb2FkZWQgPSBmYWxzZTtcblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgaWYgKCF0aGlzLmRhdGEgfHwgdGhpcy5fbG9hZGVkKSByZXR1cm47XG5cbiAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCB7IGlkLCBsaWJPcHRpb25zIH0gPSB0aGlzLmRhdGE7XG4gICAgICBpbXBvcnQoJ2ZsYXRwaWNrcicpLnRoZW4oKG1vZHVsZSkgPT4ge1xuICAgICAgICBjb25zdCB7IGRlZmF1bHQ6IGZsYXRwaWNrciB9ID0gbW9kdWxlO1xuICAgICAgICBjb25zdCBkYXRlcGlja2VyID0gZmxhdHBpY2tyKGAjJHtpZH1gLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIC4uLmxpYk9wdGlvbnMsXG4gICAgICAgICAgICBvbkNoYW5nZTogKHNlbGVjdGVkRGF0ZXMsIGRhdGVTdHIsIGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmVtaXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgc2VsZWN0ZWREYXRlcywgZGF0ZVN0ciwgaW5zdGFuY2UgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gc2V0dGluZyBkYXRlcGlja2VyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuZ2V0SW5zdGFuY2UpIHRoaXMuZGF0YS5nZXRJbnN0YW5jZShkYXRlcGlja2VyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iLCI8ZGl2ICpuZ0lmPVwiZGF0YVwiIGNsYXNzPVwibjctZGF0ZXBpY2tlciB7eyBkYXRhLmNsYXNzZXMgfHwgJycgfX1cIj5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ7e3RoaXMuZGF0YS5pZH19XCIvPlxuPC9kaXY+Il19