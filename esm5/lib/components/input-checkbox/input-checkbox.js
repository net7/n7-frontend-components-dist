//---------------------------
// INPUT-CHECKBOX.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var InputCheckboxComponent = /** @class */ (function () {
    function InputCheckboxComponent() {
    }
    InputCheckboxComponent.prototype.onChange = function (inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload: inputPayload, value: value });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], InputCheckboxComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], InputCheckboxComponent.prototype, "emit", void 0);
    InputCheckboxComponent = __decorate([
        Component({
            selector: 'n7-input-checkbox',
            template: "<div *ngIf=\"data\"\r\n     class=\"n7-input-checkbox\">\r\n  <ng-container *ngFor=\"let input of data.checkboxes\">\r\n    <input type=\"checkbox\"\r\n           id=\"{{ input.id }}\"\r\n           class=\"n7-input-checkbox__input\"\r\n           [checked]=\"input.checked\"\r\n           [disabled]=\"input.disabled\"\r\n           (change)=\"onChange(input.payload, $event.target.checked)\">\r\n    <label *ngIf=\"input.label\"\r\n           class=\"n7-input-checkbox__label\"\r\n           for=\"{{ input.id }}\">\r\n      {{ input.label }}\r\n    </label>\r\n  </ng-container>\r\n</div>\r\n"
        })
    ], InputCheckboxComponent);
    return InputCheckboxComponent;
}());
export { InputCheckboxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2lucHV0LWNoZWNrYm94L2lucHV0LWNoZWNrYm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixvQkFBb0I7QUFDcEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQTJEakQ7SUFBQTtJQVNBLENBQUM7SUFKQyx5Q0FBUSxHQUFSLFVBQVMsWUFBWSxFQUFFLEtBQU07UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksY0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBUFE7UUFBUixLQUFLLEVBQUU7O3dEQUF5QjtJQUV4QjtRQUFSLEtBQUssRUFBRTs7d0RBQVc7SUFIUixzQkFBc0I7UUFKbEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QiwrbEJBQW9DO1NBQ3JDLENBQUM7T0FDVyxzQkFBc0IsQ0FTbEM7SUFBRCw2QkFBQztDQUFBLEFBVEQsSUFTQztTQVRZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIElOUFVULUNIRUNLQk9YLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBJbnB1dENoZWNrYm94XHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBpZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBsYWJlbCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjaGVja2VkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGRpc2FibGVkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElucHV0Q2hlY2tib3gge1xyXG4gIC8qKlxyXG4gICAqIFVuaXF1ZSBJRCBmb3IgdGhlIGNoZWNrYm94XHJcbiAgICovXHJcbiAgaWQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiBMYWJlbCBmb3IgdGhlIGNoZWNrYm94XHJcbiAgICovXHJcbiAgbGFiZWw6IHN0cmluZztcclxuICAvKipcclxuICAgKiBEZWZhdWx0cyB0aGUgY2hlY2tib3ggdG8gYmUgY2hlY2tlZFxyXG4gICAqL1xyXG4gIGNoZWNrZWQ/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIGRpc2FibGVkIEhUTUwgYXR0cmlidXRlXHJcbiAgICovXHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIFBheWxvYWQgZm9yIHRoZSBjaGFuZ2UgZXZlbnRcclxuICAgKi9cclxuICBwYXlsb2FkPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgSFRNTCBDbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IGFueTtcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIGRhdGEgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xyXG4gICAqL1xyXG4gIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBJbnB1dENoZWNrYm94RGF0YVxyXG4gKiBAcHJvcGVydHkgY2hlY2tib3hlcyAocmVxdWlyZWQpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElucHV0Q2hlY2tib3hEYXRhIHtcclxuICAvKipcclxuICAgKiBBbiBhcnJheSBvZiBpbnB1dCBjaGVja2JveGVzXHJcbiAgICovXHJcbiAgY2hlY2tib3hlczogSW5wdXRDaGVja2JveFtdO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWlucHV0LWNoZWNrYm94JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtY2hlY2tib3guaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIElucHV0Q2hlY2tib3hDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IElucHV0Q2hlY2tib3hEYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIG9uQ2hhbmdlKGlucHV0UGF5bG9hZCwgdmFsdWU/KSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7IGlucHV0UGF5bG9hZCwgdmFsdWUgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==