//---------------------------
// INPUT-SELECT.ts
//---------------------------
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class InputSelectComponent {
    onChange(inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload, value });
    }
}
InputSelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: InputSelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
InputSelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.2", type: InputSelectComponent, selector: "n7-input-select", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data as input\"\r\n     class=\"n7-input-select\">\r\n  <label *ngIf=\"input.label\"\r\n         for=\"{{ input.id }}\">{{ input.label }}</label>\r\n  <select (change)=\"onChange(input.payload, $event.target.value)\"\r\n          id=\"{{ input.id }}\"\r\n          class=\"n7-facet__input-select {{ input.classes || '' }}\"\r\n          [disabled]=\"input.disabled\">\r\n    <option *ngFor=\"let option of input.options\"\r\n            [value]=\"option.value\"\r\n            [disabled]=\"option.disabled\"\r\n            [selected]=\"option.selected\">{{ option.label }}</option>\r\n  </select>\r\n</div>\r\n", directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: InputSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-input-select', template: "<div *ngIf=\"data as input\"\r\n     class=\"n7-input-select\">\r\n  <label *ngIf=\"input.label\"\r\n         for=\"{{ input.id }}\">{{ input.label }}</label>\r\n  <select (change)=\"onChange(input.payload, $event.target.value)\"\r\n          id=\"{{ input.id }}\"\r\n          class=\"n7-facet__input-select {{ input.classes || '' }}\"\r\n          [disabled]=\"input.disabled\">\r\n    <option *ngFor=\"let option of input.options\"\r\n            [value]=\"option.value\"\r\n            [disabled]=\"option.disabled\"\r\n            [selected]=\"option.selected\">{{ option.label }}</option>\r\n  </select>\r\n</div>\r\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2VsZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZHYtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0LXNlbGVjdC9pbnB1dC1zZWxlY3QudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQtc2VsZWN0L2lucHV0LXNlbGVjdC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixrQkFBa0I7QUFDbEIsNkJBQTZCO0FBRTdCLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFrRWpELE1BQU0sT0FBTyxvQkFBb0I7SUFLL0IsUUFBUSxDQUFDLFlBQVksRUFBRSxLQUFNO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDOztpSEFSVSxvQkFBb0I7cUdBQXBCLG9CQUFvQiwrRkN0RWpDLGluQkFjQTsyRkR3RGEsb0JBQW9CO2tCQUpoQyxTQUFTOytCQUNFLGlCQUFpQjs4QkFJbEIsSUFBSTtzQkFBWixLQUFLO2dCQUVHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIElOUFVULVNFTEVDVC50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgSW5wdXRTZWxlY3RcclxuICpcclxuICogQHByb3BlcnR5IGlkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IG9wdGlvbnMgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgbGFiZWwgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgZGlzYWJsZWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFNlbGVjdERhdGEge1xyXG4gIC8qKlxyXG4gICAqIEEgdW5pcXVlIElEIGZvciB0aGUgc2VsZWN0IGl0ZW1cclxuICAgKi9cclxuICBpZDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBhcnJheSBvZiA8b3B0aW9uPiBlbGVtZW50c1xyXG4gICAqL1xyXG4gIG9wdGlvbnM6IEFycmF5PHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHJlbmRlcmVkIHRleHQgZm9yIHRoZSA8b3B0aW9uPiBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBldmVudCB2YWx1ZSBmb3IgdGhlIDxvcHRpb24+IGVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgb3B0aW9uIGFzIGRlZmF1bHQgKHNlbGVjdGVkKVxyXG4gICAgICovXHJcbiAgICBzZWxlY3RlZD86IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIFByZXZlbnRzIHRoZSB1c2VyIGZyb20gc2VsZWN0aW5nIHRoaXMgb3B0aW9uXHJcbiAgICAgKi9cclxuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICB9PjtcclxuICAvKipcclxuICAgKiBMYWJlbCBmb3IgdGhlIDxzZWxlY3Q+IGVsZW1lbnRcclxuICAgKi9cclxuICBsYWJlbD86IHN0cmluZztcclxuICAvKipcclxuICAgKiBQcmV2ZW50cyB0aGUgdXNlciBmcm9tIGNoYW5naW5nIGFueSBvcHRpb25cclxuICAgKi9cclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogUGF5bG9hZCBmb3IgdGhlIHNlbGVjdCdzIGNoYW5nZSBldmVudFxyXG4gICAqL1xyXG4gIHBheWxvYWQ/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBIVE1MIENsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgZGF0YSBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctaW5wdXQtc2VsZWN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtc2VsZWN0Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dFNlbGVjdENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogSW5wdXRTZWxlY3REYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIG9uQ2hhbmdlKGlucHV0UGF5bG9hZCwgdmFsdWU/KSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7IGlucHV0UGF5bG9hZCwgdmFsdWUgfSk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgKm5nSWY9XCJkYXRhIGFzIGlucHV0XCJcclxuICAgICBjbGFzcz1cIm43LWlucHV0LXNlbGVjdFwiPlxyXG4gIDxsYWJlbCAqbmdJZj1cImlucHV0LmxhYmVsXCJcclxuICAgICAgICAgZm9yPVwie3sgaW5wdXQuaWQgfX1cIj57eyBpbnB1dC5sYWJlbCB9fTwvbGFiZWw+XHJcbiAgPHNlbGVjdCAoY2hhbmdlKT1cIm9uQ2hhbmdlKGlucHV0LnBheWxvYWQsICRldmVudC50YXJnZXQudmFsdWUpXCJcclxuICAgICAgICAgIGlkPVwie3sgaW5wdXQuaWQgfX1cIlxyXG4gICAgICAgICAgY2xhc3M9XCJuNy1mYWNldF9faW5wdXQtc2VsZWN0IHt7IGlucHV0LmNsYXNzZXMgfHwgJycgfX1cIlxyXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImlucHV0LmRpc2FibGVkXCI+XHJcbiAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgaW5wdXQub3B0aW9uc1wiXHJcbiAgICAgICAgICAgIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIlxyXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwib3B0aW9uLmRpc2FibGVkXCJcclxuICAgICAgICAgICAgW3NlbGVjdGVkXT1cIm9wdGlvbi5zZWxlY3RlZFwiPnt7IG9wdGlvbi5sYWJlbCB9fTwvb3B0aW9uPlxyXG4gIDwvc2VsZWN0PlxyXG48L2Rpdj5cclxuIl19