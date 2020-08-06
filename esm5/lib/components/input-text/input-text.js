//---------------------------
// INPUT-TEXT.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var InputTextComponent = /** @class */ (function () {
    function InputTextComponent() {
    }
    InputTextComponent.prototype.onChange = function (inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload: inputPayload, value: value });
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
    return InputTextComponent;
}());
export { InputTextComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdGV4dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaW5wdXQtdGV4dC9pbnB1dC10ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixnQkFBZ0I7QUFDaEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQW9FakQ7SUFBQTtJQVNBLENBQUM7SUFKQyxxQ0FBUSxHQUFSLFVBQVMsWUFBWSxFQUFFLEtBQU07UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksY0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBUFE7UUFBUixLQUFLLEVBQUU7O29EQUFxQjtJQUVwQjtRQUFSLEtBQUssRUFBRTs7b0RBQVc7SUFIUixrQkFBa0I7UUFKOUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsMjZCQUFnQztTQUNqQyxDQUFDO09BQ1csa0JBQWtCLENBUzlCO0lBQUQseUJBQUM7Q0FBQSxBQVRELElBU0M7U0FUWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBJTlBVVC1URVhULnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBJbnB1dFRleHREYXRhXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBpZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBwbGFjZWhvbGRlciAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB2YWx1ZSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBsYWJlbCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBkaXNhYmxlZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGlucHV0UGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBlbnRlclBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaWNvblBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElucHV0VGV4dERhdGEge1xyXG4gIC8qKlxyXG4gICAqIFVuaXF1ZSBJRCBmb3IgdGhlIHRleHQgaW5wdXQgZWxlbWVudFxyXG4gICAqL1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogUGxhY2Vob2xkZXIgdGV4dCBpbnNpZGUgdGhlIGlucHV0IGJveFxyXG4gICAqL1xyXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgdmFsdWUgb2YgdGhlIGlucHV0IGJveFxyXG4gICAqL1xyXG4gIHZhbHVlPzogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcclxuICAvKipcclxuICAgKiBMYWJlbCBmb3IgdGhlIGlucHV0IGJveFxyXG4gICAqL1xyXG4gIGxhYmVsPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFByZXZlbnRzIHRoZSB1c2VyIGZyb20gY2hhbmdpbmcgdGhlIGlucHV0J3MgdmFsdWVcclxuICAgKi9cclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogT3B0aW9uYWwgaWNvbiB0byByZW5kZXIgaW5zaWRlIHRoZSBpbnB1dCBib3ggKGVnLiBuNy1pY29uLXNlYXJjaClcclxuICAgKi9cclxuICBpY29uPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFBheWxvYWQgdGhhdCBpcyBzZW50IHdoZW4gdGhlIHVzZXIgY2hhbmdlcyB0aGUgdmFsdWVcclxuICAgKi9cclxuICBpbnB1dFBheWxvYWQ/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogUGF5bG9hZCB0aGF0IGlzIHNlbnQgd2hlbiB0aGUgdXNlciBwcmVzc2VzIHRoZSBcIkVudGVyXCIga2V5XHJcbiAgICovXHJcbiAgZW50ZXJQYXlsb2FkPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIFBheWxvYWQgdGhhdCBpcyBzZW50IHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBpY29uXHJcbiAgICovXHJcbiAgaWNvblBheWxvYWQ/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBIVE1MIENsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgZGF0YSBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctaW5wdXQtdGV4dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LXRleHQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIElucHV0VGV4dENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogSW5wdXRUZXh0RGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBvbkNoYW5nZShpbnB1dFBheWxvYWQsIHZhbHVlPykge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgeyBpbnB1dFBheWxvYWQsIHZhbHVlIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=