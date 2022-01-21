//---------------------------
// INPUT-LINK.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let InputLinkComponent = class InputLinkComponent {
    onChange(payload) {
        if (!this.emit)
            return;
        this.emit('change', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], InputLinkComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], InputLinkComponent.prototype, "emit", void 0);
InputLinkComponent = __decorate([
    Component({
        selector: 'n7-input-link',
        template: "<div *ngIf=\"data\"\r\n     class=\"n7-input-link\">\r\n  <ng-container *ngFor=\"let input of data.links\">\r\n    <div class=\"n7-input-link__link {{ input.classes || '' }}\"\r\n         (click)=\"onChange(input.payload)\">\r\n      <span *ngIf=\"input.icon\"\r\n            class=\"n7-input-link__icon {{ input.icon }}\"></span>\r\n      <span class=\"n7-input-link__text\">{{ input.text }}</span>\r\n      <span *ngIf=\"input.counter || input.counter === 0\"\r\n            class=\"n7-input-link__counter\">{{ input.counter }}</span>\r\n    </div>\r\n  </ng-container>\r\n</div>\r\n"
    })
], InputLinkComponent);
export { InputLinkComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbGluay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaW5wdXQtbGluay9pbnB1dC1saW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixnQkFBZ0I7QUFDaEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXNEakQsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFLN0IsUUFBUSxDQUFDLE9BQU87UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7Q0FDRixDQUFBO0FBUlU7SUFBUixLQUFLLEVBQUU7O2dEQUFxQjtBQUVwQjtJQUFSLEtBQUssRUFBRTs7Z0RBQVc7QUFIUixrQkFBa0I7SUFKOUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGVBQWU7UUFDekIscWxCQUFnQztLQUNqQyxDQUFDO0dBQ1csa0JBQWtCLENBUzlCO1NBVFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gSU5QVVQtTElOSy50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgYW4gSW5wdXRMaW5rXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY291bnRlciAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJbnB1dExpbmsge1xyXG4gIC8qKlxyXG4gICAqIFRoZSByZW5kZXJlZCB0ZXh0IG9mIHRoZSBsaW5rXHJcbiAgICovXHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIEFuIGljb24gdG8gYmUgYWRkZWQgbmV4dCB0byB0aGUgdGV4dFxyXG4gICAqL1xyXG4gIGljb24/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogQSBjb2xvcmZ1bCBjb3VudGVyIHdpdGggYSBudW1iZXJcclxuICAgKi9cclxuICBjb3VudGVyPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwYXlsb2FkIGZvciB0aGUgY2xpY2sgZXZlbnRcclxuICAgKi9cclxuICBwYXlsb2FkPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgSFRNTCBDbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IGFueTtcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIGRhdGEgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xyXG4gICAqL1xyXG4gIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBJbnB1dExpbmtEYXRhXHJcbiAqIEBwcm9wZXJ0eSBsaW5rcyAocmVxdWlyZWQpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElucHV0TGlua0RhdGEge1xyXG4gIC8qKlxyXG4gICAqIEEgbGlzdCBvZiBpbnB1dCBsaW5rc1xyXG4gICAqL1xyXG4gIGxpbmtzOiBJbnB1dExpbmtbXTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1pbnB1dC1saW5rJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtbGluay5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRMaW5rQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBJbnB1dExpbmtEYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIG9uQ2hhbmdlKHBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHBheWxvYWQpO1xyXG4gIH1cclxufVxyXG4iXX0=