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
            template: "<div *ngIf=\"data\" class=\"n7-input-checkbox {{ data.classes || '' }}\">\n    <fieldset class=\"n7-input-checkbox__fieldset\">\n        <legend class=\"n7-input-checkbox__legend\" *ngIf=\"data.legend\">{{ data.legend }}</legend>\n        <ng-container *ngFor=\"let input of data.checkboxes\">\n            <div class=\"n7-input-checkbox__input-wrapper\">\n                <input type=\"checkbox\"\n                 id=\"{{ input.id }}\"\n                 class=\"n7-input-checkbox__input {{ input.classes || '' }}\"\n                 [checked]=\"input.checked\"\n                 [disabled]=\"input.disabled\"\n                 (change)=\"onChange(input.payload, $event.target.checked)\">\n                <label *ngIf=\"input.label\"\n                 class=\"n7-input-checkbox__label\"\n                 for=\"{{ input.id }}\">{{ input.label }}</label>\n            </div>          \n        </ng-container>\n    </fieldset>\n</div>\n"
        })
    ], InputCheckboxComponent);
    return InputCheckboxComponent;
}());
export { InputCheckboxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2lucHV0LWNoZWNrYm94L2lucHV0LWNoZWNrYm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixvQkFBb0I7QUFDcEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQW1FakQ7SUFBQTtJQVNBLENBQUM7SUFKQyx5Q0FBUSxHQUFSLFVBQVMsWUFBWSxFQUFFLEtBQU07UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksY0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBUFE7UUFBUixLQUFLLEVBQUU7O3dEQUF5QjtJQUV4QjtRQUFSLEtBQUssRUFBRTs7d0RBQVc7SUFIUixzQkFBc0I7UUFKbEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixxN0JBQW9DO1NBQ3JDLENBQUM7T0FDVyxzQkFBc0IsQ0FTbEM7SUFBRCw2QkFBQztDQUFBLEFBVEQsSUFTQztTQVRZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBJTlBVVC1DSEVDS0JPWC50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgSW5wdXRDaGVja2JveFxuICpcbiAqIEBwcm9wZXJ0eSBpZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgbGFiZWwgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNoZWNrZWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGRpc2FibGVkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRDaGVja2JveCB7XG4gIC8qKlxuICAgKiBVbmlxdWUgSUQgZm9yIHRoZSBjaGVja2JveFxuICAgKi9cbiAgaWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIExhYmVsIGZvciB0aGUgY2hlY2tib3hcbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBEZWZhdWx0cyB0aGUgY2hlY2tib3ggdG8gYmUgY2hlY2tlZFxuICAgKi9cbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkaXNhYmxlZCBIVE1MIGF0dHJpYnV0ZVxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICogUGF5bG9hZCBmb3IgdGhlIGNoYW5nZSBldmVudFxuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgSFRNTCBDbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogQWRkaXRpb25hbCBkYXRhIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgSW5wdXRDaGVja2JveERhdGFcbiAqIEBwcm9wZXJ0eSBjaGVja2JveGVzIChyZXF1aXJlZClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbnB1dENoZWNrYm94RGF0YSB7XG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBpbnB1dCBjaGVja2JveGVzXG4gICAqL1xuICBjaGVja2JveGVzOiBJbnB1dENoZWNrYm94W107XG4gIC8qKlxuICAgKiBGaWVsZHNldCAoZ3JvdXApIGxlZ2VuZCBsYWJlbFxuICAgKi9cbiAgbGVnZW5kPzogc3RyaW5nO1xuICAvKipcbiAgICogQWRkaXRpb25hbCBIVE1MIENsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWlucHV0LWNoZWNrYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LWNoZWNrYm94Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElucHV0Q2hlY2tib3hDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJbnB1dENoZWNrYm94RGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DaGFuZ2UoaW5wdXRQYXlsb2FkLCB2YWx1ZT8pIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgeyBpbnB1dFBheWxvYWQsIHZhbHVlIH0pO1xuICB9XG59XG4iXX0=