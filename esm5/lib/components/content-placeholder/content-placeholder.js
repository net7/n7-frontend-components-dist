//---------------------------
// CONTENT-PLACEHOLDER.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var ContentPlaceholderComponent = /** @class */ (function () {
    function ContentPlaceholderComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ContentPlaceholderComponent.prototype, "data", void 0);
    ContentPlaceholderComponent = __decorate([
        Component({
            selector: 'n7-content-placeholder',
            template: "<div *ngIf=\"data\" class=\"n7-content-placeholder\">\r\n  <ng-container *ngFor=\"let b of data.blocks\">\r\n    <div *ngIf=\"!b.image\" class=\"n7-content-placeholder__item {{b.classes || ''}}\"></div>\r\n    <img *ngIf=\"b.image\" class=\"n7-content-placeholder__image {{b.classes || ''}}\" src=\"{{b.image}}\" alt=\"{{ b.alt || '' }}\">\r\n  </ng-container>\r\n</div>"
        })
    ], ContentPlaceholderComponent);
    return ContentPlaceholderComponent;
}());
export { ContentPlaceholderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1wbGFjZWhvbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29udGVudC1wbGFjZWhvbGRlci9jb250ZW50LXBsYWNlaG9sZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQTZCakQ7SUFBQTtJQUVBLENBQUM7SUFEVTtRQUFSLEtBQUssRUFBRTs7NkRBQThCO0lBRDNCLDJCQUEyQjtRQUp2QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLDhYQUF5QztTQUMxQyxDQUFDO09BQ1csMkJBQTJCLENBRXZDO0lBQUQsa0NBQUM7Q0FBQSxBQUZELElBRUM7U0FGWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBDT05URU5ULVBMQUNFSE9MREVSLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBDb250ZW50UGxhY2Vob2xkZXJDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIENvbnRlbnRQbGFjZWhvbGRlckRhdGEge1xyXG4gIC8qKlxyXG4gICAqIGFycmF5IG9mIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGJsb2NrczogQmxvY2tzRGF0YVtdO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xyXG4gICAqL1xyXG4gIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQmxvY2tzRGF0YSB7XHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICBpbWFnZT86IHN0cmluZztcclxuICBhbHQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctY29udGVudC1wbGFjZWhvbGRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRlbnQtcGxhY2Vob2xkZXIuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRlbnRQbGFjZWhvbGRlckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogQ29udGVudFBsYWNlaG9sZGVyRGF0YTtcclxufVxyXG4iXX0=