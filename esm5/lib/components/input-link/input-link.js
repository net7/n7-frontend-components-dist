//---------------------------
// INPUT-LINK.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var InputLinkComponent = /** @class */ (function () {
    function InputLinkComponent() {
    }
    InputLinkComponent.prototype.onChange = function (payload) {
        if (!this.emit)
            return;
        this.emit('change', payload);
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
            template: "<div *ngIf=\"data\"\n     class=\"n7-input-link\">\n  <ng-container *ngFor=\"let input of data.links\">\n    <div class=\"n7-input-link__link {{ input.classes || '' }}\"\n         (click)=\"onChange(input.payload)\">\n      <span *ngIf=\"input.icon\"\n            class=\"n7-input-link__icon {{ input.icon }}\"></span>\n      <span class=\"n7-input-link__text\">{{ input.text }}</span>\n      <span *ngIf=\"input.counter || input.counter === 0\"\n            class=\"n7-input-link__counter\">{{ input.counter }}</span>\n    </div>\n  </ng-container>\n</div>\n"
        })
    ], InputLinkComponent);
    return InputLinkComponent;
}());
export { InputLinkComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbGluay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaW5wdXQtbGluay9pbnB1dC1saW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixnQkFBZ0I7QUFDaEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXNEakQ7SUFBQTtJQVNBLENBQUM7SUFKQyxxQ0FBUSxHQUFSLFVBQVMsT0FBTztRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQVBRO1FBQVIsS0FBSyxFQUFFOztvREFBcUI7SUFFcEI7UUFBUixLQUFLLEVBQUU7O29EQUFXO0lBSFIsa0JBQWtCO1FBSjlCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLDJqQkFBZ0M7U0FDakMsQ0FBQztPQUNXLGtCQUFrQixDQVM5QjtJQUFELHlCQUFDO0NBQUEsQUFURCxJQVNDO1NBVFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIElOUFVULUxJTksudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGFuIElucHV0TGlua1xuICpcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjb3VudGVyIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRMaW5rIHtcbiAgLyoqXG4gICAqIFRoZSByZW5kZXJlZCB0ZXh0IG9mIHRoZSBsaW5rXG4gICAqL1xuICB0ZXh0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBbiBpY29uIHRvIGJlIGFkZGVkIG5leHQgdG8gdGhlIHRleHRcbiAgICovXG4gIGljb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBIGNvbG9yZnVsIGNvdW50ZXIgd2l0aCBhIG51bWJlclxuICAgKi9cbiAgY291bnRlcj86IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBwYXlsb2FkIGZvciB0aGUgY2xpY2sgZXZlbnRcbiAgICovXG4gIHBheWxvYWQ/OiBhbnk7XG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIEhUTUwgQ2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgZGF0YSBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXG4gICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIElucHV0TGlua0RhdGFcbiAqIEBwcm9wZXJ0eSBsaW5rcyAocmVxdWlyZWQpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRMaW5rRGF0YSB7XG4gIC8qKlxuICAgKiBBIGxpc3Qgb2YgaW5wdXQgbGlua3NcbiAgICovXG4gIGxpbmtzOiBJbnB1dExpbmtbXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctaW5wdXQtbGluaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1saW5rLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElucHV0TGlua0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElucHV0TGlua0RhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2hhbmdlKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgcGF5bG9hZCk7XG4gIH1cbn1cbiJdfQ==