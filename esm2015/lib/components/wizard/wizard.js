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
        template: "<div *ngIf=\"data\" class=\"n7-wizard {{ data.classes || '' }}\">\n  <ol class=\"n7-wizard__list\">\n      <li *ngFor=\"let item of data.items\" \n          class=\"n7-wizard__item {{ item.classes || '' }}\" \n          (click)=\"onClick(item.payload)\">\n            <span *ngIf=\"item.number\" class=\"n7-wizard__number\">{{ item.number }}</span>\n            <span *ngIf=\"item.text\" class=\"n7-wizard__text\">{{ item.text }}</span>\n      </li>\n  </ol>\n</div>"
    })
], WizardComponent);
export { WizardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy93aXphcmQvd2l6YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixZQUFZO0FBQ1osNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXlEakQsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUsxQixPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNGLENBQUE7QUFSVTtJQUFSLEtBQUssRUFBRTs7NkNBQWtCO0FBRWpCO0lBQVIsS0FBSyxFQUFFOzs2Q0FBVztBQUhSLGVBQWU7SUFKM0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFdBQVc7UUFDckIsOGRBQTRCO0tBQzdCLENBQUM7R0FDVyxlQUFlLENBUzNCO1NBVFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBXSVpBUkQudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4qIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgV2l6YXJkQ29tcG9uZW50J3MgXCJpdGVtXCJcbipcbiogQHByb3BlcnR5IHRleHQgKG9wdGlvbmFsKVxuKiBAcHJvcGVydHkgbnVtYmVyIChvcHRpb25hbClcbiogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuKiBAcHJvcGVydHkgcGF5bG9hZCAocmVxdWlyZWQpXG4qIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4qXG4qL1xuZXhwb3J0IGludGVyZmFjZSBXaXphcmRJdGVtIHtcbiAgLyoqXG4gICogIHRleHQgcmVuZGVyZWQgb24gdGhlIHN0ZXBcbiAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICogbnVtYmVyIHJlbmRlcmVkIG9uIHRoZSBzdGVwXG4gICovXG4gIG51bWJlcj86IG51bWJlcjtcbiAgLyoqXG4gICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAqL1xuICBwYXlsb2FkOiBhbnk7XG4gIC8qKlxuICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICovXG4gIGNsYXNzZXM/OiBhbnk7XG4gIC8qKlxuICAqIGFkZGl0aW9uYWwgaW5mbyB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xuICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4qIEludGVyZmFjZSBmb3IgV2l6YXJkQ29tcG9uZW50J3MgXCJkYXRhXCJcbipcbiogQHByb3BlcnR5IGl0ZW1zIChyZXF1aXJlZClcbiogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuKlxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgV2l6YXJkRGF0YSB7XG4gIC8qKlxuICAqIGVhY2ggaXRlbSByZXByZXNlbnRzIGEgc3RlcFxuICAqL1xuICBpdGVtczogV2l6YXJkSXRlbVtdO1xuICAvKipcbiAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAqL1xuICBjbGFzc2VzPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy13aXphcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vd2l6YXJkLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFdpemFyZENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IFdpemFyZERhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG59XG4iXX0=