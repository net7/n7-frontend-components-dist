//---------------------------
// TAG.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let TagComponent = class TagComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], TagComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TagComponent.prototype, "emit", void 0);
TagComponent = __decorate([
    Component({
        selector: 'n7-tag',
        template: "<span class=\"n7-tag {{data.classes || ''}}\" *ngIf=\"data\">\n    <span class=\"n7-tag__label\" *ngIf=\"data.label\">\n        {{ data.label }}\n    </span>\n    <span class=\"n7-tag__text\" *ngIf=\"data.text\">\n        {{ data.text }}\n    </span>\n    <span class=\"n7-tag__icon {{data.icon}}\" *ngIf=\"data.icon\" (click)=\"onClick(data.payload)\"></span>\n</span>"
    })
], TagComponent);
export { TagComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWcvdGFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixTQUFTO0FBQ1QsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQTRDakQsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQUtyQixPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKLENBQUE7QUFSWTtJQUFSLEtBQUssRUFBRTs7MENBQXNCO0FBRXJCO0lBQVIsS0FBSyxFQUFFOzswQ0FBa0I7QUFIakIsWUFBWTtJQUp4QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQiw2WEFBeUI7S0FDMUIsQ0FBQztHQUNXLFlBQVksQ0FTeEI7U0FUWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRBRy50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgVGFnQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgbGFiZWwgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGFnRGF0YSB7XG4gICAgLyoqXG4gICAgICogdGFnJ3MgbGFiZWxcbiAgICAgKi9cbiAgICBsYWJlbD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiB0ZXh0IHZpc3VhbGl6ZWQgb24gdGhlIHRhZ1xuICAgICAqL1xuICAgIHRleHQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhY3Rpb24gaWNvbiAob24gcmlnaHQgc2lkZSlcbiAgICAgKi9cbiAgICBpY29uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAgICovXG4gICAgY2xhc3Nlcz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAgICovXG4gICAgcGF5bG9hZD86IGFueTtcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICAgKi9cbiAgICBfbWV0YT86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctdGFnJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhZy5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUYWdDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkYXRhOiBUYWdEYXRhO1xuXG4gICAgQElucHV0KCkgcHVibGljIGVtaXQ6IGFueTtcblxuICAgIG9uQ2xpY2socGF5bG9hZCkge1xuICAgICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgICB9XG59XG4iXX0=