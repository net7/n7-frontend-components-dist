import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let NavComponent = class NavComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], NavComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NavComponent.prototype, "emit", void 0);
NavComponent = __decorate([
    Component({
        selector: 'n7-nav',
        template: "<nav class=\"n7-nav {{data.classes || ''}}\" *ngIf=\"data\">\n    <ul class=\"n7-nav__list\">\n        <n7-anchor-wrapper \n        *ngFor=\"let item of data.items\"\n        [data]=\"item.anchor\" \n        [classes]=\"'n7-nav__link'\" \n        (clicked)=\"onClick($event)\">\n            <li class=\"n7-nav__item {{ item.classes || '' }}\">\n                <img class=\"n7-nav__image\" *ngIf=\"item.image\" src=\"{{ item.image }}\">\n                <span class=\"n7-nav__icon {{ item.icon }}\" *ngIf=\"item.icon\"></span>\n                <span class=\"n7-nav__label\">{{ item.text }}</span>\n            </li>\n        </n7-anchor-wrapper>\n    </ul>\n</nav>"
    })
], NavComponent);
export { NavComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9uYXYvbmF2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXNFakQsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQUt2QixPQUFPLENBQUMsT0FBWTtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDRixDQUFBO0FBUlU7SUFBUixLQUFLLEVBQUU7OzBDQUFzQjtBQUVyQjtJQUFSLEtBQUssRUFBRTs7MENBQVc7QUFIUixZQUFZO0lBSnhCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLG9xQkFBeUI7S0FDMUIsQ0FBQztHQUNXLFlBQVksQ0FTeEI7U0FUWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5jaG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkLWludGVyZmFjZXMnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgbmF2YmFyIGl0ZW1cbiAqXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgbGluayAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5hdkl0ZW0ge1xuICAvKipcbiAgICogdGV4dCBvZiBhIHNpbmdsZSBpdGVtIG9mIHRoZSBuYXZiYXIgKHRleHQgYW5kIHBheWxvYWQgYXJlIGNvbm5lY3RlZClcbiAgICovXG4gIHRleHQ6IHN0cmluZztcblxuICAvKipcbiAgICogaW1hZ2UgdXJsIGZvciBjb250ZXh0dWFsIGljb24vdGh1bWJuYWlsXG4gICAqL1xuICBpbWFnZT86IHN0cmluZztcblxuICAvKipcbiAgICogaWNvbiBuYW1lL2NsYXNzIGZyb20gaWNvbiBmb250XG4gICAqL1xuICBpY29uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgYW5jaG9yPzogQW5jaG9yO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvXG4gICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIHRoZSBuYXZiYXJcbiAqXG4gKiBAcHJvcGVydHkgaXRlbXMgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOYXZEYXRhIHtcbiAgLyoqXG4gICAqIGxpc3Qgb2YgdGhlIGl0ZW1zIGluIHRoZSBuYXZiYXJcbiAgICovXG4gIGl0ZW1zOiBOYXZJdGVtW107XG5cbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LW5hdicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE5hdkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBkYXRhOiBOYXZEYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNsaWNrKHBheWxvYWQ6IGFueSkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG59XG4iXX0=