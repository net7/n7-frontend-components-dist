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
            template: "<div *ngIf=\"data as input\"\r\n     class=\"n7-input-select\">\r\n  <label *ngIf=\"input.label\"\r\n         for=\"{{ input.id }}\">{{ input.label }}</label>\r\n  <select (change)=\"onChange(input.payload, $event.target.value)\"\r\n          id=\"{{ input.id }}\"\r\n          class=\"n7-facet__input-select {{ input.classes || '' }}\"\r\n          [disabled]=\"input.disabled\">\r\n    <option *ngFor=\"let option of input.options\"\r\n            [value]=\"option.value\"\r\n            [disabled]=\"option.disabled\"\r\n            [selected]=\"option.selected\">{{ option.label }}</option>\r\n  </select>\r\n</div>\r\n"
        })
    ], InputSelectComponent);
    return InputSelectComponent;
}());
export { InputSelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbnB1dC1zZWxlY3QvaW5wdXQtc2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixrQkFBa0I7QUFDbEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWtFakQ7SUFBQTtJQVNBLENBQUM7SUFKQyx1Q0FBUSxHQUFSLFVBQVMsWUFBWSxFQUFFLEtBQU07UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksY0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBUFE7UUFBUixLQUFLLEVBQUU7O3NEQUF1QjtJQUV0QjtRQUFSLEtBQUssRUFBRTs7c0RBQVc7SUFIUixvQkFBb0I7UUFKaEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQiwybkJBQWtDO1NBQ25DLENBQUM7T0FDVyxvQkFBb0IsQ0FTaEM7SUFBRCwyQkFBQztDQUFBLEFBVEQsSUFTQztTQVRZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIElOUFVULVNFTEVDVC50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgSW5wdXRTZWxlY3RcclxuICpcclxuICogQHByb3BlcnR5IGlkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IG9wdGlvbnMgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgbGFiZWwgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgZGlzYWJsZWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFNlbGVjdERhdGEge1xyXG4gIC8qKlxyXG4gICAqIEEgdW5pcXVlIElEIGZvciB0aGUgc2VsZWN0IGl0ZW1cclxuICAgKi9cclxuICBpZDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBhcnJheSBvZiA8b3B0aW9uPiBlbGVtZW50c1xyXG4gICAqL1xyXG4gIG9wdGlvbnM6IEFycmF5PHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHJlbmRlcmVkIHRleHQgZm9yIHRoZSA8b3B0aW9uPiBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBldmVudCB2YWx1ZSBmb3IgdGhlIDxvcHRpb24+IGVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgb3B0aW9uIGFzIGRlZmF1bHQgKHNlbGVjdGVkKVxyXG4gICAgICovXHJcbiAgICBzZWxlY3RlZD86IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIFByZXZlbnRzIHRoZSB1c2VyIGZyb20gc2VsZWN0aW5nIHRoaXMgb3B0aW9uXHJcbiAgICAgKi9cclxuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICB9PjtcclxuICAvKipcclxuICAgKiBMYWJlbCBmb3IgdGhlIDxzZWxlY3Q+IGVsZW1lbnRcclxuICAgKi9cclxuICBsYWJlbD86IHN0cmluZztcclxuICAvKipcclxuICAgKiBQcmV2ZW50cyB0aGUgdXNlciBmcm9tIGNoYW5naW5nIGFueSBvcHRpb25cclxuICAgKi9cclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogUGF5bG9hZCBmb3IgdGhlIHNlbGVjdCdzIGNoYW5nZSBldmVudFxyXG4gICAqL1xyXG4gIHBheWxvYWQ/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBIVE1MIENsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgZGF0YSBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctaW5wdXQtc2VsZWN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtc2VsZWN0Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dFNlbGVjdENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogSW5wdXRTZWxlY3REYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIG9uQ2hhbmdlKGlucHV0UGF5bG9hZCwgdmFsdWU/KSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7IGlucHV0UGF5bG9hZCwgdmFsdWUgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==