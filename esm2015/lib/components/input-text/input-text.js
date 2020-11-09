//---------------------------
// INPUT-TEXT.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let InputTextComponent = class InputTextComponent {
    onChange(inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload, value });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], InputTextComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], InputTextComponent.prototype, "emit", void 0);
InputTextComponent = __decorate([
    Component({
        selector: 'n7-input-text',
        template: "<div *ngIf=\"data as input\"\r\n     class=\"n7-input-text\">\r\n    <label *ngIf=\"input.label\"\r\n           class=\"n7-input-text__label\"\r\n           for=\"{{ input.id }}\">\r\n      {{ input.label }}\r\n    </label>\r\n    <div class=\"n7-input-text__wrapper\">\r\n      <input type=\"text\"\r\n             id=\"{{ input.id }}\"\r\n             class=\"n7-input-text__text {{input.classes || ''}}\"\r\n             placeholder=\"{{input.placeholder || ''}}\"\r\n             [value]=\"input.value || null\"\r\n             [disabled]=\"input.disabled\"\r\n             (input)=\"onChange(input.inputPayload, $event.target.value)\"\r\n             (keyup.enter)=\"onChange(input.enterPayload, $event.target.value)\">\r\n      <span *ngIf=\"input.icon\"\r\n            class=\"n7-input-text__icon {{input.icon || ''}}\"\r\n            (click)=\"onChange(input.iconPayload)\">\r\n      </span>\r\n    </div>\r\n</div>\r\n"
    })
], InputTextComponent);
export { InputTextComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdGV4dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaW5wdXQtdGV4dC9pbnB1dC10ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixnQkFBZ0I7QUFDaEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQW9FakQsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFLN0IsUUFBUSxDQUFDLFlBQVksRUFBRSxLQUFNO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBQ0YsQ0FBQTtBQVJVO0lBQVIsS0FBSyxFQUFFOztnREFBcUI7QUFFcEI7SUFBUixLQUFLLEVBQUU7O2dEQUFXO0FBSFIsa0JBQWtCO0lBSjlCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxlQUFlO1FBQ3pCLDI2QkFBZ0M7S0FDakMsQ0FBQztHQUNXLGtCQUFrQixDQVM5QjtTQVRZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIElOUFVULVRFWFQudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIElucHV0VGV4dERhdGFcclxuICpcclxuICogQHByb3BlcnR5IGlkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHBsYWNlaG9sZGVyIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHZhbHVlIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGxhYmVsIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGRpc2FibGVkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaW5wdXRQYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGVudGVyUGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpY29uUGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRUZXh0RGF0YSB7XHJcbiAgLyoqXHJcbiAgICogVW5pcXVlIElEIGZvciB0aGUgdGV4dCBpbnB1dCBlbGVtZW50XHJcbiAgICovXHJcbiAgaWQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiBQbGFjZWhvbGRlciB0ZXh0IGluc2lkZSB0aGUgaW5wdXQgYm94XHJcbiAgICovXHJcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCB2YWx1ZSBvZiB0aGUgaW5wdXQgYm94XHJcbiAgICovXHJcbiAgdmFsdWU/OiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xyXG4gIC8qKlxyXG4gICAqIExhYmVsIGZvciB0aGUgaW5wdXQgYm94XHJcbiAgICovXHJcbiAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogUHJldmVudHMgdGhlIHVzZXIgZnJvbSBjaGFuZ2luZyB0aGUgaW5wdXQncyB2YWx1ZVxyXG4gICAqL1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBPcHRpb25hbCBpY29uIHRvIHJlbmRlciBpbnNpZGUgdGhlIGlucHV0IGJveCAoZWcuIG43LWljb24tc2VhcmNoKVxyXG4gICAqL1xyXG4gIGljb24/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogUGF5bG9hZCB0aGF0IGlzIHNlbnQgd2hlbiB0aGUgdXNlciBjaGFuZ2VzIHRoZSB2YWx1ZVxyXG4gICAqL1xyXG4gIGlucHV0UGF5bG9hZD86IGFueTtcclxuICAvKipcclxuICAgKiBQYXlsb2FkIHRoYXQgaXMgc2VudCB3aGVuIHRoZSB1c2VyIHByZXNzZXMgdGhlIFwiRW50ZXJcIiBrZXlcclxuICAgKi9cclxuICBlbnRlclBheWxvYWQ/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogUGF5bG9hZCB0aGF0IGlzIHNlbnQgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGljb25cclxuICAgKi9cclxuICBpY29uUGF5bG9hZD86IGFueTtcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIEhUTUwgQ2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBkYXRhIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1pbnB1dC10ZXh0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtdGV4dC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRUZXh0Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBJbnB1dFRleHREYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIG9uQ2hhbmdlKGlucHV0UGF5bG9hZCwgdmFsdWU/KSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7IGlucHV0UGF5bG9hZCwgdmFsdWUgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==