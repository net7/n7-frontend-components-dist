//---------------------------
// INPUT-SELECT.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var InputSelectComponent = /** @class */ (function () {
    function InputSelectComponent() {
    }
    InputSelectComponent.prototype.onChange = function (inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload: inputPayload, value: value });
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
            template: "<div *ngIf=\"data as input\"\n     class=\"n7-input-select\">\n  <label *ngIf=\"input.label\"\n         for=\"{{ input.id }}\">{{ input.label }}</label>\n  <select (change)=\"onChange(input.payload, $event.target.value)\"\n          id=\"{{ input.id }}\"\n          class=\"n7-facet__input-select {{ input.classes || '' }}\"\n          [disabled]=\"input.disabled\">\n    <option *ngFor=\"let option of input.options\"\n            [value]=\"option.value\"\n            [disabled]=\"option.disabled\"\n            [selected]=\"option.selected\">{{ option.label }}</option>\n  </select>\n</div>\n"
        })
    ], InputSelectComponent);
    return InputSelectComponent;
}());
export { InputSelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbnB1dC1zZWxlY3QvaW5wdXQtc2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixrQkFBa0I7QUFDbEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWtFakQ7SUFBQTtJQVNBLENBQUM7SUFKQyx1Q0FBUSxHQUFSLFVBQVMsWUFBWSxFQUFFLEtBQU07UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksY0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBUFE7UUFBUixLQUFLLEVBQUU7O3NEQUF1QjtJQUV0QjtRQUFSLEtBQUssRUFBRTs7c0RBQVc7SUFIUixvQkFBb0I7UUFKaEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQiwrbEJBQWtDO1NBQ25DLENBQUM7T0FDVyxvQkFBb0IsQ0FTaEM7SUFBRCwyQkFBQztDQUFBLEFBVEQsSUFTQztTQVRZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBJTlBVVC1TRUxFQ1QudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIElucHV0U2VsZWN0XG4gKlxuICogQHByb3BlcnR5IGlkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBvcHRpb25zIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBsYWJlbCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgZGlzYWJsZWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbnB1dFNlbGVjdERhdGEge1xuICAvKipcbiAgICogQSB1bmlxdWUgSUQgZm9yIHRoZSBzZWxlY3QgaXRlbVxuICAgKi9cbiAgaWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBhcnJheSBvZiA8b3B0aW9uPiBlbGVtZW50c1xuICAgKi9cbiAgb3B0aW9uczogQXJyYXk8e1xuICAgIC8qKlxuICAgICAqIFRoZSByZW5kZXJlZCB0ZXh0IGZvciB0aGUgPG9wdGlvbj4gZWxlbWVudFxuICAgICAqL1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIGV2ZW50IHZhbHVlIGZvciB0aGUgPG9wdGlvbj4gZWxlbWVudFxuICAgICAqL1xuICAgIHZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgb3B0aW9uIGFzIGRlZmF1bHQgKHNlbGVjdGVkKVxuICAgICAqL1xuICAgIHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBQcmV2ZW50cyB0aGUgdXNlciBmcm9tIHNlbGVjdGluZyB0aGlzIG9wdGlvblxuICAgICAqL1xuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgfT47XG4gIC8qKlxuICAgKiBMYWJlbCBmb3IgdGhlIDxzZWxlY3Q+IGVsZW1lbnRcbiAgICovXG4gIGxhYmVsPzogc3RyaW5nO1xuICAvKipcbiAgICogUHJldmVudHMgdGhlIHVzZXIgZnJvbSBjaGFuZ2luZyBhbnkgb3B0aW9uXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBQYXlsb2FkIGZvciB0aGUgc2VsZWN0J3MgY2hhbmdlIGV2ZW50XG4gICAqL1xuICBwYXlsb2FkPzogYW55O1xuICAvKipcbiAgICogQWRkaXRpb25hbCBIVE1MIENsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBhbnk7XG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIGRhdGEgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWlucHV0LXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1zZWxlY3QuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRTZWxlY3RDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJbnB1dFNlbGVjdERhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2hhbmdlKGlucHV0UGF5bG9hZCwgdmFsdWU/KSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgaW5wdXRQYXlsb2FkLCB2YWx1ZSB9KTtcbiAgfVxufVxuIl19