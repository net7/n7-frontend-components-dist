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
            template: "<div *ngIf=\"data\" class=\"n7-input-checkbox {{ data.classes || '' }}\">\n  <ng-container *ngFor=\"let input of data.checkboxes\">\n    <input type=\"checkbox\"\n           id=\"{{ input.id }}\"\n           class=\"n7-input-checkbox__input {{ input.classes || '' }}\"\n           [checked]=\"input.checked\"\n           [disabled]=\"input.disabled\"\n           (change)=\"onChange(input.payload, $event.target.checked)\">\n    <label *ngIf=\"input.label\"\n           class=\"n7-input-checkbox__label\"\n           for=\"{{ input.id }}\">\n      {{ input.label }}\n    </label>\n  </ng-container>\n</div>\n"
        })
    ], InputCheckboxComponent);
    return InputCheckboxComponent;
}());
export { InputCheckboxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2lucHV0LWNoZWNrYm94L2lucHV0LWNoZWNrYm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixvQkFBb0I7QUFDcEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQStEakQ7SUFBQTtJQVNBLENBQUM7SUFKQyx5Q0FBUSxHQUFSLFVBQVMsWUFBWSxFQUFFLEtBQU07UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksY0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBUFE7UUFBUixLQUFLLEVBQUU7O3dEQUF5QjtJQUV4QjtRQUFSLEtBQUssRUFBRTs7d0RBQVc7SUFIUixzQkFBc0I7UUFKbEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3Qiw0bUJBQW9DO1NBQ3JDLENBQUM7T0FDVyxzQkFBc0IsQ0FTbEM7SUFBRCw2QkFBQztDQUFBLEFBVEQsSUFTQztTQVRZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBJTlBVVC1DSEVDS0JPWC50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgSW5wdXRDaGVja2JveFxuICpcbiAqIEBwcm9wZXJ0eSBpZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgbGFiZWwgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNoZWNrZWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGRpc2FibGVkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRDaGVja2JveCB7XG4gIC8qKlxuICAgKiBVbmlxdWUgSUQgZm9yIHRoZSBjaGVja2JveFxuICAgKi9cbiAgaWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIExhYmVsIGZvciB0aGUgY2hlY2tib3hcbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBEZWZhdWx0cyB0aGUgY2hlY2tib3ggdG8gYmUgY2hlY2tlZFxuICAgKi9cbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkaXNhYmxlZCBIVE1MIGF0dHJpYnV0ZVxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICogUGF5bG9hZCBmb3IgdGhlIGNoYW5nZSBldmVudFxuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgSFRNTCBDbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogQWRkaXRpb25hbCBkYXRhIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgSW5wdXRDaGVja2JveERhdGFcbiAqIEBwcm9wZXJ0eSBjaGVja2JveGVzIChyZXF1aXJlZClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbnB1dENoZWNrYm94RGF0YSB7XG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBpbnB1dCBjaGVja2JveGVzXG4gICAqL1xuICBjaGVja2JveGVzOiBJbnB1dENoZWNrYm94W107XG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIEhUTUwgQ2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctaW5wdXQtY2hlY2tib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtY2hlY2tib3guaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRDaGVja2JveENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElucHV0Q2hlY2tib3hEYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNoYW5nZShpbnB1dFBheWxvYWQsIHZhbHVlPykge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7IGlucHV0UGF5bG9hZCwgdmFsdWUgfSk7XG4gIH1cbn1cbiJdfQ==