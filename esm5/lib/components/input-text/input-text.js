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
            template: "<div *ngIf=\"data as input\"\n     class=\"n7-input-text\">\n    <label *ngIf=\"input.label\"\n           class=\"n7-input-text__label\"\n           for=\"{{ input.id }}\">\n      {{ input.label }}\n    </label>\n    <div class=\"n7-input-text__wrapper\">\n      <input id=\"{{ input.id }}\"\n             class=\"n7-input-text__text {{input.classes || ''}}\"\n             placeholder=\"{{input.placeholder || ''}}\"\n             [type]=\"input.type ? input.type : 'text'\"\n             [value]=\"input.value || null\"\n             [disabled]=\"input.disabled\"\n             [min]=\"input.type === 'number' && (input.min || input.min === 0) ? input.min : ''\"\n             [max]=\"input.type === 'number' && (input.max || input.max === 0) ? input.max : ''\"\n             (input)=\"onChange(input.inputPayload, $event.target.value)\"\n             (keyup.enter)=\"onChange(input.enterPayload, $event.target.value)\">\n      <span *ngIf=\"input.icon\"\n            class=\"n7-input-text__icon {{input.icon || ''}}\"\n            (click)=\"onChange(input.iconPayload)\">\n      </span>\n    </div>\n</div>\n"
        })
    ], InputTextComponent);
    return InputTextComponent;
}());
export { InputTextComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdGV4dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaW5wdXQtdGV4dC9pbnB1dC10ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixnQkFBZ0I7QUFDaEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWdGakQ7SUFBQTtJQVNBLENBQUM7SUFKQyxxQ0FBUSxHQUFSLFVBQVMsWUFBWSxFQUFFLEtBQU07UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksY0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBUFE7UUFBUixLQUFLLEVBQUU7O29EQUFxQjtJQUVwQjtRQUFSLEtBQUssRUFBRTs7b0RBQVc7SUFIUixrQkFBa0I7UUFKOUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsbW1DQUFnQztTQUNqQyxDQUFDO09BQ1csa0JBQWtCLENBUzlCO0lBQUQseUJBQUM7Q0FBQSxBQVRELElBU0M7U0FUWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSU5QVVQtVEVYVC50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgSW5wdXRUZXh0RGF0YVxuICpcbiAqIEBwcm9wZXJ0eSBpZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgcGxhY2Vob2xkZXIgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHZhbHVlIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBsYWJlbCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgZGlzYWJsZWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGlucHV0UGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgZW50ZXJQYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpY29uUGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElucHV0VGV4dERhdGEge1xuICAvKipcbiAgICogVW5pcXVlIElEIGZvciB0aGUgdGV4dCBpbnB1dCBlbGVtZW50XG4gICAqL1xuICBpZDogc3RyaW5nO1xuICAvKipcbiAgICogSW5wdXQgdHlwZVxuICAgKi9cbiAgdHlwZT86ICd0ZXh0JyB8ICdudW1iZXInO1xuICAvKipcbiAgICogUGxhY2Vob2xkZXIgdGV4dCBpbnNpZGUgdGhlIGlucHV0IGJveFxuICAgKi9cbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBEZWZhdWx0IHZhbHVlIG9mIHRoZSBpbnB1dCBib3hcbiAgICovXG4gIHZhbHVlPzogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcbiAgLyoqXG4gICAqIExhYmVsIGZvciB0aGUgaW5wdXQgYm94XG4gICAqL1xuICBsYWJlbD86IHN0cmluZztcbiAgLyoqXG4gICAqIFByZXZlbnRzIHRoZSB1c2VyIGZyb20gY2hhbmdpbmcgdGhlIGlucHV0J3MgdmFsdWVcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGljb24gdG8gcmVuZGVyIGluc2lkZSB0aGUgaW5wdXQgYm94IChlZy4gbjctaWNvbi1zZWFyY2gpXG4gICAqL1xuICBpY29uPzogc3RyaW5nO1xuICAvKipcbiAgICogUGF5bG9hZCB0aGF0IGlzIHNlbnQgd2hlbiB0aGUgdXNlciBjaGFuZ2VzIHRoZSB2YWx1ZVxuICAgKi9cbiAgaW5wdXRQYXlsb2FkPzogYW55O1xuICAvKipcbiAgICogUGF5bG9hZCB0aGF0IGlzIHNlbnQgd2hlbiB0aGUgdXNlciBwcmVzc2VzIHRoZSBcIkVudGVyXCIga2V5XG4gICAqL1xuICBlbnRlclBheWxvYWQ/OiBhbnk7XG4gIC8qKlxuICAgKiBQYXlsb2FkIHRoYXQgaXMgc2VudCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgaWNvblxuICAgKi9cbiAgaWNvblBheWxvYWQ/OiBhbnk7XG4gIC8qKlxuICAgKiBJbnB1dCBtaW5pbXVuIGFsbG93ZWQgdmFsdWUgKG9ubHkgZm9yIHR5cGU9bnVtYmVyKVxuICAgKi9cbiAgbWluPzogbnVtYmVyO1xuICAvKipcbiAgICogSW5wdXQgbWF4aW11biBhbGxvd2VkIHZhbHVlIChvbmx5IGZvciB0eXBlPW51bWJlcilcbiAgICovXG4gIG1heD86IG51bWJlcjtcbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgSFRNTCBDbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogYW55O1xuICAvKipcbiAgICogQWRkaXRpb25hbCBkYXRhIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1pbnB1dC10ZXh0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LXRleHQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRUZXh0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSW5wdXRUZXh0RGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DaGFuZ2UoaW5wdXRQYXlsb2FkLCB2YWx1ZT8pIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgeyBpbnB1dFBheWxvYWQsIHZhbHVlIH0pO1xuICB9XG59XG4iXX0=