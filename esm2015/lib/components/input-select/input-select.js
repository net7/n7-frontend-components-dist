//---------------------------
// INPUT-SELECT.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let InputSelectComponent = class InputSelectComponent {
    onChange(inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload, value });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], InputSelectComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], InputSelectComponent.prototype, "emit", void 0);
InputSelectComponent = __decorate([
    Component({
        selector: 'n7-input-select',
        template: "<div *ngIf=\"data as input\"\r\n     class=\"n7-input-select\">\r\n  <label *ngIf=\"input.label\"\r\n         for=\"{{ input.id }}\">{{ input.label }}</label>\r\n  <select (change)=\"onChange(input.payload, $event.target.value)\"\r\n          id=\"{{ input.id }}\"\r\n          class=\"n7-facet__input-select {{ input.classes || '' }}\"\r\n          [disabled]=\"input.disabled\">\r\n    <option *ngFor=\"let option of input.options\"\r\n            [value]=\"option.value\"\r\n            [disabled]=\"option.disabled\"\r\n            [selected]=\"option.selected\">{{ option.label }}</option>\r\n  </select>\r\n</div>\r\n"
    })
], InputSelectComponent);
export { InputSelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbnB1dC1zZWxlY3QvaW5wdXQtc2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixrQkFBa0I7QUFDbEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWtFakQsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFLL0IsUUFBUSxDQUFDLFlBQVksRUFBRSxLQUFNO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBQ0YsQ0FBQTtBQVJVO0lBQVIsS0FBSyxFQUFFOztrREFBdUI7QUFFdEI7SUFBUixLQUFLLEVBQUU7O2tEQUFXO0FBSFIsb0JBQW9CO0lBSmhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsMm5CQUFrQztLQUNuQyxDQUFDO0dBQ1csb0JBQW9CLENBU2hDO1NBVFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gSU5QVVQtU0VMRUNULnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBJbnB1dFNlbGVjdFxyXG4gKlxyXG4gKiBAcHJvcGVydHkgaWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgb3B0aW9ucyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBsYWJlbCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBkaXNhYmxlZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElucHV0U2VsZWN0RGF0YSB7XHJcbiAgLyoqXHJcbiAgICogQSB1bmlxdWUgSUQgZm9yIHRoZSBzZWxlY3QgaXRlbVxyXG4gICAqL1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVGhlIGFycmF5IG9mIDxvcHRpb24+IGVsZW1lbnRzXHJcbiAgICovXHJcbiAgb3B0aW9uczogQXJyYXk8e1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcmVuZGVyZWQgdGV4dCBmb3IgdGhlIDxvcHRpb24+IGVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGV2ZW50IHZhbHVlIGZvciB0aGUgPG9wdGlvbj4gZWxlbWVudFxyXG4gICAgICovXHJcbiAgICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBvcHRpb24gYXMgZGVmYXVsdCAoc2VsZWN0ZWQpXHJcbiAgICAgKi9cclxuICAgIHNlbGVjdGVkPzogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogUHJldmVudHMgdGhlIHVzZXIgZnJvbSBzZWxlY3RpbmcgdGhpcyBvcHRpb25cclxuICAgICAqL1xyXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIH0+O1xyXG4gIC8qKlxyXG4gICAqIExhYmVsIGZvciB0aGUgPHNlbGVjdD4gZWxlbWVudFxyXG4gICAqL1xyXG4gIGxhYmVsPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFByZXZlbnRzIHRoZSB1c2VyIGZyb20gY2hhbmdpbmcgYW55IG9wdGlvblxyXG4gICAqL1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBQYXlsb2FkIGZvciB0aGUgc2VsZWN0J3MgY2hhbmdlIGV2ZW50XHJcbiAgICovXHJcbiAgcGF5bG9hZD86IGFueTtcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIEhUTUwgQ2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBkYXRhIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1pbnB1dC1zZWxlY3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1zZWxlY3QuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIElucHV0U2VsZWN0Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBJbnB1dFNlbGVjdERhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgb25DaGFuZ2UoaW5wdXRQYXlsb2FkLCB2YWx1ZT8pIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgaW5wdXRQYXlsb2FkLCB2YWx1ZSB9KTtcclxuICB9XHJcbn1cclxuIl19