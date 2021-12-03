//---------------------------
// WIZARD.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let WizardComponent = class WizardComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
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
export { WizardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy93aXphcmQvd2l6YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixZQUFZO0FBQ1osNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXlEakQsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUsxQixPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNGLENBQUE7QUFSVTtJQUFSLEtBQUssRUFBRTs7NkNBQWtCO0FBRWpCO0lBQVIsS0FBSyxFQUFFOzs2Q0FBVztBQUhSLGVBQWU7SUFKM0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFdBQVc7UUFDckIsZ2ZBQTRCO0tBQzdCLENBQUM7R0FDVyxlQUFlLENBUzNCO1NBVFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFdJWkFSRC50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiogSW50ZXJmYWNlIGZvciBhIHNpbmdsZSBXaXphcmRDb21wb25lbnQncyBcIml0ZW1cIlxyXG4qXHJcbiogQHByb3BlcnR5IHRleHQgKG9wdGlvbmFsKVxyXG4qIEBwcm9wZXJ0eSBudW1iZXIgKG9wdGlvbmFsKVxyXG4qIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuKiBAcHJvcGVydHkgcGF5bG9hZCAocmVxdWlyZWQpXHJcbiogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuKlxyXG4qL1xyXG5leHBvcnQgaW50ZXJmYWNlIFdpemFyZEl0ZW0ge1xyXG4gIC8qKlxyXG4gICogIHRleHQgcmVuZGVyZWQgb24gdGhlIHN0ZXBcclxuICAqL1xyXG4gIHRleHQ/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgKiBudW1iZXIgcmVuZGVyZWQgb24gdGhlIHN0ZXBcclxuICAqL1xyXG4gIG51bWJlcj86IG51bWJlcjtcclxuICAvKipcclxuICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcclxuICAqL1xyXG4gIHBheWxvYWQ6IGFueTtcclxuICAvKipcclxuICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgKi9cclxuICBjbGFzc2VzPzogYW55O1xyXG4gIC8qKlxyXG4gICogYWRkaXRpb25hbCBpbmZvIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXHJcbiAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiogSW50ZXJmYWNlIGZvciBXaXphcmRDb21wb25lbnQncyBcImRhdGFcIlxyXG4qXHJcbiogQHByb3BlcnR5IGl0ZW1zIChyZXF1aXJlZClcclxuKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbipcclxuKi9cclxuZXhwb3J0IGludGVyZmFjZSBXaXphcmREYXRhIHtcclxuICAvKipcclxuICAqIGVhY2ggaXRlbSByZXByZXNlbnRzIGEgc3RlcFxyXG4gICovXHJcbiAgaXRlbXM6IFdpemFyZEl0ZW1bXTtcclxuICAvKipcclxuICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgKi9cclxuICBjbGFzc2VzPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LXdpemFyZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3dpemFyZC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgV2l6YXJkQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBXaXphcmREYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZCkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcbn1cclxuIl19