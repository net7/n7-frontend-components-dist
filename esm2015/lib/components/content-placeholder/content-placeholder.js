//---------------------------
// CONTENT-PLACEHOLDER.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let ContentPlaceholderComponent = class ContentPlaceholderComponent {
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ContentPlaceholderComponent.prototype, "data", void 0);
ContentPlaceholderComponent = __decorate([
    Component({
        selector: 'n7-content-placeholder',
        template: "<div *ngIf=\"data\" class=\"n7-content-placeholder\">\n  <ng-container *ngFor=\"let b of data.blocks\">\n    <div *ngIf=\"!b.image\" class=\"n7-content-placeholder__item {{b.classes || ''}}\"></div>\n    <img *ngIf=\"b.image\" class=\"n7-content-placeholder__image {{b.classes || ''}}\" src=\"{{b.image}}\" alt=\"{{ b.alt || '' }}\">\n  </ng-container>\n</div>"
    })
], ContentPlaceholderComponent);
export { ContentPlaceholderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1wbGFjZWhvbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29udGVudC1wbGFjZWhvbGRlci9jb250ZW50LXBsYWNlaG9sZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQTZCakQsSUFBYSwyQkFBMkIsR0FBeEMsTUFBYSwyQkFBMkI7Q0FFdkMsQ0FBQTtBQURVO0lBQVIsS0FBSyxFQUFFOzt5REFBOEI7QUFEM0IsMkJBQTJCO0lBSnZDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSx3QkFBd0I7UUFDbEMsb1hBQXlDO0tBQzFDLENBQUM7R0FDVywyQkFBMkIsQ0FFdkM7U0FGWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ09OVEVOVC1QTEFDRUhPTERFUi50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgQ29udGVudFBsYWNlaG9sZGVyQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbnRlbnRQbGFjZWhvbGRlckRhdGEge1xuICAvKipcbiAgICogYXJyYXkgb2YgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBibG9ja3M6IEJsb2Nrc0RhdGFbXTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbmludGVyZmFjZSBCbG9ja3NEYXRhIHtcbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIGFsdD86IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctY29udGVudC1wbGFjZWhvbGRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250ZW50LXBsYWNlaG9sZGVyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENvbnRlbnRQbGFjZWhvbGRlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IENvbnRlbnRQbGFjZWhvbGRlckRhdGE7XG59XG4iXX0=