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
            template: "<div *ngIf=\"data as input\"\n     class=\"n7-input-text\">\n    <label *ngIf=\"input.label\"\n           class=\"n7-input-text__label\"\n           for=\"{{ input.id }}\">\n      {{ input.label }}\n    </label>\n    <div class=\"n7-input-text__wrapper\">\n      <input type=\"text\"\n             id=\"{{ input.id }}\"\n             class=\"n7-input-text__text {{input.classes || ''}}\"\n             placeholder=\"{{input.placeholder || ''}}\"\n             [value]=\"input.value || null\"\n             [disabled]=\"input.disabled\"\n             (input)=\"onChange(input.inputPayload, $event.target.value)\"\n             (keyup.enter)=\"onChange(input.enterPayload, $event.target.value)\">\n      <span *ngIf=\"input.icon\"\n            class=\"n7-input-text__icon {{input.icon || ''}}\"\n            (click)=\"onChange(input.iconPayload)\">\n      </span>\n    </div>\n</div>\n"
        })
    ], InputTextComponent);
    return InputTextComponent;
}());
export { InputTextComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdGV4dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaW5wdXQtdGV4dC9pbnB1dC10ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixnQkFBZ0I7QUFDaEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQW9FakQ7SUFBQTtJQVNBLENBQUM7SUFKQyxxQ0FBUSxHQUFSLFVBQVMsWUFBWSxFQUFFLEtBQU07UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksY0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBUFE7UUFBUixLQUFLLEVBQUU7O29EQUFxQjtJQUVwQjtRQUFSLEtBQUssRUFBRTs7b0RBQVc7SUFIUixrQkFBa0I7UUFKOUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsKzNCQUFnQztTQUNqQyxDQUFDO09BQ1csa0JBQWtCLENBUzlCO0lBQUQseUJBQUM7Q0FBQSxBQVRELElBU0M7U0FUWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSU5QVVQtVEVYVC50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgSW5wdXRUZXh0RGF0YVxuICpcbiAqIEBwcm9wZXJ0eSBpZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgcGxhY2Vob2xkZXIgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHZhbHVlIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBsYWJlbCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgZGlzYWJsZWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGlucHV0UGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgZW50ZXJQYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpY29uUGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElucHV0VGV4dERhdGEge1xuICAvKipcbiAgICogVW5pcXVlIElEIGZvciB0aGUgdGV4dCBpbnB1dCBlbGVtZW50XG4gICAqL1xuICBpZDogc3RyaW5nO1xuICAvKipcbiAgICogUGxhY2Vob2xkZXIgdGV4dCBpbnNpZGUgdGhlIGlucHV0IGJveFxuICAgKi9cbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBEZWZhdWx0IHZhbHVlIG9mIHRoZSBpbnB1dCBib3hcbiAgICovXG4gIHZhbHVlPzogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcbiAgLyoqXG4gICAqIExhYmVsIGZvciB0aGUgaW5wdXQgYm94XG4gICAqL1xuICBsYWJlbD86IHN0cmluZztcbiAgLyoqXG4gICAqIFByZXZlbnRzIHRoZSB1c2VyIGZyb20gY2hhbmdpbmcgdGhlIGlucHV0J3MgdmFsdWVcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGljb24gdG8gcmVuZGVyIGluc2lkZSB0aGUgaW5wdXQgYm94IChlZy4gbjctaWNvbi1zZWFyY2gpXG4gICAqL1xuICBpY29uPzogc3RyaW5nO1xuICAvKipcbiAgICogUGF5bG9hZCB0aGF0IGlzIHNlbnQgd2hlbiB0aGUgdXNlciBjaGFuZ2VzIHRoZSB2YWx1ZVxuICAgKi9cbiAgaW5wdXRQYXlsb2FkPzogYW55O1xuICAvKipcbiAgICogUGF5bG9hZCB0aGF0IGlzIHNlbnQgd2hlbiB0aGUgdXNlciBwcmVzc2VzIHRoZSBcIkVudGVyXCIga2V5XG4gICAqL1xuICBlbnRlclBheWxvYWQ/OiBhbnk7XG4gIC8qKlxuICAgKiBQYXlsb2FkIHRoYXQgaXMgc2VudCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgaWNvblxuICAgKi9cbiAgaWNvblBheWxvYWQ/OiBhbnk7XG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIEhUTUwgQ2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgZGF0YSBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXG4gICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctaW5wdXQtdGV4dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC10ZXh0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElucHV0VGV4dENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElucHV0VGV4dERhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2hhbmdlKGlucHV0UGF5bG9hZCwgdmFsdWU/KSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgaW5wdXRQYXlsb2FkLCB2YWx1ZSB9KTtcbiAgfVxufVxuIl19