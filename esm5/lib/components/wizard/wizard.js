//---------------------------
// WIZARD.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var WizardComponent = /** @class */ (function () {
    function WizardComponent() {
    }
    WizardComponent.prototype.onClick = function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], WizardComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], WizardComponent.prototype, "emit", void 0);
    WizardComponent = __decorate([
        Component({
            selector: 'n7-wizard',
            template: "<div *ngIf=\"data\" class=\"n7-wizard {{ data.classes || '' }}\">\n  <ol class=\"n7-wizard__list\">\n      <li *ngFor=\"let item of data.items\" \n          class=\"n7-wizard__item {{ item.classes || '' }}\" \n          (click)=\"onClick(item.payload)\">\n            <span *ngIf=\"item.number\" class=\"n7-wizard__number\">{{ item.number }}</span>\n            <span *ngIf=\"item.text\" class=\"n7-wizard__text\">{{ item.text }}</span>\n      </li>\n  </ol>\n</div>"
        })
    ], WizardComponent);
    return WizardComponent;
}());
export { WizardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy93aXphcmQvd2l6YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixZQUFZO0FBQ1osNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXlEakQ7SUFBQTtJQVNBLENBQUM7SUFKQyxpQ0FBTyxHQUFQLFVBQVEsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQVBRO1FBQVIsS0FBSyxFQUFFOztpREFBa0I7SUFFakI7UUFBUixLQUFLLEVBQUU7O2lEQUFXO0lBSFIsZUFBZTtRQUozQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQiw4ZEFBNEI7U0FDN0IsQ0FBQztPQUNXLGVBQWUsQ0FTM0I7SUFBRCxzQkFBQztDQUFBLEFBVEQsSUFTQztTQVRZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gV0laQVJELnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuKiBJbnRlcmZhY2UgZm9yIGEgc2luZ2xlIFdpemFyZENvbXBvbmVudCdzIFwiaXRlbVwiXG4qXG4qIEBwcm9wZXJ0eSB0ZXh0IChvcHRpb25hbClcbiogQHByb3BlcnR5IG51bWJlciAob3B0aW9uYWwpXG4qIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiogQHByb3BlcnR5IHBheWxvYWQgKHJlcXVpcmVkKVxuKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuKlxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgV2l6YXJkSXRlbSB7XG4gIC8qKlxuICAqICB0ZXh0IHJlbmRlcmVkIG9uIHRoZSBzdGVwXG4gICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIG51bWJlciByZW5kZXJlZCBvbiB0aGUgc3RlcFxuICAqL1xuICBudW1iZXI/OiBudW1iZXI7XG4gIC8qKlxuICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgKi9cbiAgcGF5bG9hZDogYW55O1xuICAvKipcbiAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAqL1xuICBjbGFzc2VzPzogYW55O1xuICAvKipcbiAgKiBhZGRpdGlvbmFsIGluZm8gdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuKiBJbnRlcmZhY2UgZm9yIFdpemFyZENvbXBvbmVudCdzIFwiZGF0YVwiXG4qXG4qIEBwcm9wZXJ0eSBpdGVtcyAocmVxdWlyZWQpXG4qIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbipcbiovXG5leHBvcnQgaW50ZXJmYWNlIFdpemFyZERhdGEge1xuICAvKipcbiAgKiBlYWNoIGl0ZW0gcmVwcmVzZW50cyBhIHN0ZXBcbiAgKi9cbiAgaXRlbXM6IFdpemFyZEl0ZW1bXTtcbiAgLyoqXG4gICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctd2l6YXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dpemFyZC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBXaXphcmRDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBXaXphcmREYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxufVxuIl19