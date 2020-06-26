//---------------------------
// DATEPICKER.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let DatepickerComponent = class DatepickerComponent {
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
                const datepicker = flatpickr(`#${id}`, Object.assign(Object.assign({}, libOptions), { onChange: (selectedDates, dateStr, instance) => {
                        if (this.emit) {
                            this.emit('change', { selectedDates, dateStr, instance });
                        }
                    } }));
                // setting datepicker
                if (this.data.getInstance)
                    this.data.getInstance(datepicker);
            });
        });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], DatepickerComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DatepickerComponent.prototype, "emit", void 0);
DatepickerComponent = __decorate([
    Component({
        selector: 'n7-datepicker',
        template: "<div *ngIf=\"data\" class=\"n7-datepicker {{ data.classes || '' }}\">\r\n  <input type=\"text\" id=\"{{this.data.id}}\"/>\r\n</div>"
    })
], DatepickerComponent);
export { DatepickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixnQkFBZ0I7QUFDaEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXlDakQsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFBaEM7UUFLVSxZQUFPLEdBQUcsS0FBSyxDQUFDO0lBeUIxQixDQUFDO0lBdkJDLHFCQUFxQjtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFFdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFcEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLE1BQU0sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNyQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ2xDLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsTUFBTSxDQUFDO2dCQUN0QyxNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsSUFBSSxFQUFFLEVBQUUsa0NBRTlCLFVBQVUsS0FDYixRQUFRLEVBQUUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFO3dCQUM3QyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7NEJBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7eUJBQzNEO29CQUNILENBQUMsSUFDRCxDQUFDO2dCQUNMLHFCQUFxQjtnQkFDckIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7b0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0QsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBO0FBN0JVO0lBQVIsS0FBSyxFQUFFOztpREFBc0I7QUFFckI7SUFBUixLQUFLLEVBQUU7O2lEQUFXO0FBSFIsbUJBQW1CO0lBSi9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxlQUFlO1FBQ3pCLCtJQUFnQztLQUNqQyxDQUFDO0dBQ1csbUJBQW1CLENBOEIvQjtTQTlCWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBEQVRFUElDS0VSLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGRhdGFwaWNrZXIgY29tcG9uZW50XHJcbiAqIEBwcm9wZXJ0eSBpZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBsaWJPcHRpb25zIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRlUGlja2VyRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogZGF0ZXBpY2tlciBpZFxyXG4gICAqL1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgIC8qKlxyXG4gICAqIGRhdGVwaWNrZXIgbGlicmFyeSBvcHRpb25zXHJcbiAgICogdmlldyBMSU5LOiBodHRwczovL2ZsYXRwaWNrci5qcy5vcmcvXHJcbiAgICovXHJcbiAgbGliT3B0aW9uczogYW55O1xyXG4gIC8qKlxyXG4gICAqIGZvciBkYXRlcGlja2VyIHJhbmdlIG1pbiBhbmQgbWF4IHJhbmdlIHZhbHVlXHJcbiAgICovXHJcbiAgbWluUmFuZ2U/OiBudW1iZXI7XHJcbiAgbWF4UmFuZ2U/OiBudW1iZXI7XHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBkYXRlcGlja2VyIGV2ZW50IHBheWxvYWRcclxuICAgKi9cclxuICBwYXlsb2FkPzogYW55O1xyXG4gIF9tZXRhPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIGNhbGxiYWNrIGZvciBzYXZpbmcgdGhlIGNyZWF0ZWQgZGF0ZXBpY2tlciBpbnN0YW5jZVxyXG4gICAqL1xyXG4gIGdldEluc3RhbmNlPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWRhdGVwaWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlcGlja2VyLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBEYXRlUGlja2VyRGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBwcml2YXRlIF9sb2FkZWQgPSBmYWxzZTtcclxuXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xyXG4gICAgaWYgKCF0aGlzLmRhdGEgfHwgdGhpcy5fbG9hZGVkKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgeyBpZCwgbGliT3B0aW9ucyB9ID0gdGhpcy5kYXRhO1xyXG4gICAgICBpbXBvcnQoJ2ZsYXRwaWNrcicpLnRoZW4oKG1vZHVsZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZGVmYXVsdDogZmxhdHBpY2tyIH0gPSBtb2R1bGU7XHJcbiAgICAgICAgY29uc3QgZGF0ZXBpY2tlciA9IGZsYXRwaWNrcihgIyR7aWR9YCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgLi4ubGliT3B0aW9ucyxcclxuICAgICAgICAgICAgb25DaGFuZ2U6IChzZWxlY3RlZERhdGVzLCBkYXRlU3RyLCBpbnN0YW5jZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLmVtaXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgeyBzZWxlY3RlZERhdGVzLCBkYXRlU3RyLCBpbnN0YW5jZSB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHNldHRpbmcgZGF0ZXBpY2tlclxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuZ2V0SW5zdGFuY2UpIHRoaXMuZGF0YS5nZXRJbnN0YW5jZShkYXRlcGlja2VyKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19