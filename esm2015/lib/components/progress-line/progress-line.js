//---------------------------
// PROGRESS-LINE.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let ProgressLineComponent = class ProgressLineComponent {
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ProgressLineComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ProgressLineComponent.prototype, "emit", void 0);
ProgressLineComponent = __decorate([
    Component({
        selector: 'n7-progress-line',
        template: "<div *ngIf=\"data\" class=\"n7-progress-line\">\r\n    <div class=\"n7-progress-line__text-wrapper\">\r\n        <span class=\"n7-progress-line__label\" *ngIf=\"data.label\">\r\n            {{ data.label }}\r\n        </span>\r\n        <span class=\"n7-progress-line__value\" *ngIf=\"data.value || data.value===0\">\r\n            {{ data.value }}%\r\n        </span>\r\n    </div>\r\n    <div class=\"n7-progress-line__wrapper\">\r\n        <div class='n7-progress-line__bar' [ngStyle]=\"{'width.%':data.value}\"> {{data.value}}%\r\n        </div>\r\n    </div>\r\n</div>"
    })
], ProgressLineComponent);
export { ProgressLineComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtbGluZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcHJvZ3Jlc3MtbGluZS9wcm9ncmVzcy1saW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixtQkFBbUI7QUFDbkIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXVCakQsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7Q0FJakMsQ0FBQTtBQUhVO0lBQVIsS0FBSyxFQUFFOzttREFBd0I7QUFFdkI7SUFBUixLQUFLLEVBQUU7O21EQUFXO0FBSFIscUJBQXFCO0lBSmpDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIseWtCQUFtQztLQUNwQyxDQUFDO0dBQ1cscUJBQXFCLENBSWpDO1NBSlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gUFJPR1JFU1MtTElORS50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgUHJvZ3Jlc3NMaW5lQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGxhYmVsIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHZhbHVlIChyZXF1aXJlZClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvZ3Jlc3NMaW5lRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogdGV4dCB2aXN1YWxpemVkIG9uIHRoZSBsZWZ0IHNpZGVcclxuICAgKi9cclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHZhbHVlIHRoYXQgaGFzIHBlcmNlbnRhZ2UgZm9yIGJhclxyXG4gICAqL1xyXG4gIHZhbHVlOiBudW1iZXI7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctcHJvZ3Jlc3MtbGluZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2dyZXNzLWxpbmUuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzTGluZUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogUHJvZ3Jlc3NMaW5lRGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG59XHJcbiJdfQ==