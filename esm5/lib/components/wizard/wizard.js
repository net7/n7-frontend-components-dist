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
            template: "<div *ngIf=\"data\" class=\"n7-wizard {{ data.classes || '' }}\">\r\n  <ol class=\"n7-wizard__list\">\r\n      <li *ngFor=\"let item of data.items\" \r\n          class=\"n7-wizard__item {{ item.classes || '' }}\" \r\n          (click)=\"onClick(item.payload)\">\r\n            <span *ngIf=\"item.number\" class=\"n7-wizard__number\">{{ item.number }}</span>\r\n            <span *ngIf=\"item.text\" class=\"n7-wizard__text\">{{ item.text }}</span>\r\n      </li>\r\n  </ol>\r\n</div>"
        })
    ], WizardComponent);
    return WizardComponent;
}());
export { WizardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy93aXphcmQvd2l6YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixZQUFZO0FBQ1osNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXlEakQ7SUFBQTtJQVNBLENBQUM7SUFKQyxpQ0FBTyxHQUFQLFVBQVEsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQVBRO1FBQVIsS0FBSyxFQUFFOztpREFBa0I7SUFFakI7UUFBUixLQUFLLEVBQUU7O2lEQUFXO0lBSFIsZUFBZTtRQUozQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixnZkFBNEI7U0FDN0IsQ0FBQztPQUNXLGVBQWUsQ0FTM0I7SUFBRCxzQkFBQztDQUFBLEFBVEQsSUFTQztTQVRZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBXSVpBUkQudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4qIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgV2l6YXJkQ29tcG9uZW50J3MgXCJpdGVtXCJcclxuKlxyXG4qIEBwcm9wZXJ0eSB0ZXh0IChvcHRpb25hbClcclxuKiBAcHJvcGVydHkgbnVtYmVyIChvcHRpb25hbClcclxuKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiogQHByb3BlcnR5IHBheWxvYWQgKHJlcXVpcmVkKVxyXG4qIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbipcclxuKi9cclxuZXhwb3J0IGludGVyZmFjZSBXaXphcmRJdGVtIHtcclxuICAvKipcclxuICAqICB0ZXh0IHJlbmRlcmVkIG9uIHRoZSBzdGVwXHJcbiAgKi9cclxuICB0ZXh0Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICogbnVtYmVyIHJlbmRlcmVkIG9uIHRoZSBzdGVwXHJcbiAgKi9cclxuICBudW1iZXI/OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXHJcbiAgKi9cclxuICBwYXlsb2FkOiBhbnk7XHJcbiAgLyoqXHJcbiAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICovXHJcbiAgY2xhc3Nlcz86IGFueTtcclxuICAvKipcclxuICAqIGFkZGl0aW9uYWwgaW5mbyB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xyXG4gICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4qIEludGVyZmFjZSBmb3IgV2l6YXJkQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuKlxyXG4qIEBwcm9wZXJ0eSBpdGVtcyAocmVxdWlyZWQpXHJcbiogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4qXHJcbiovXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2l6YXJkRGF0YSB7XHJcbiAgLyoqXHJcbiAgKiBlYWNoIGl0ZW0gcmVwcmVzZW50cyBhIHN0ZXBcclxuICAqL1xyXG4gIGl0ZW1zOiBXaXphcmRJdGVtW107XHJcbiAgLyoqXHJcbiAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICovXHJcbiAgY2xhc3Nlcz86IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy13aXphcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi93aXphcmQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFdpemFyZENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogV2l6YXJkRGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBvbkNsaWNrKHBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==