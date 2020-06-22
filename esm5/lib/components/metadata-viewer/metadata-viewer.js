//---------------------------
// METADATA-VIEWER.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var MetadataViewerComponent = /** @class */ (function () {
    function MetadataViewerComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MetadataViewerComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MetadataViewerComponent.prototype, "emit", void 0);
    MetadataViewerComponent = __decorate([
        Component({
            selector: 'n7-metadata-viewer',
            template: "<div *ngIf=\"data\" class=\"n7-metadata-viewer\">\r\n    <!-- Metadata groups wrapper -->\r\n    <div class=\"n7-metadata-viewer__wrapper {{ data.classes  || ''}}\"\r\n          *ngFor=\"let grp of data.group\">\r\n        <!-- For each data group, render it -->\r\n        <ng-container *ngTemplateOutlet=\"group; context:{$implicit: grp}\"></ng-container>\r\n    </div>\r\n</div>\r\n\r\n<!-- Template for Metadata.group -->\r\n<ng-template #group let-grp>\r\n    <div *ngIf=\"grp.title || grp.items\" class=\"n7-metadata-viewer__group {{ grp.classes || '' }}\">\r\n        <div class=\"n7-metadata-viewer__group-title\" *ngIf=\"grp.title\">{{grp.title}}</div>\r\n        <div class=\"n7-metadata-viewer__group-content\" *ngIf=\"grp.items\">\r\n            <div class=\"n7-metadata-viewer__item\" *ngFor=\"let i of grp.items\">\r\n                <span class=\"n7-metadata-viewer__item-label\">{{i.label}} </span>\r\n                <span class=\"n7-metadata-viewer__item-value\" [innerHTML]=\"i.value\"></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Render all child groups -->\r\n    <div *ngIf=\"grp.group\">\r\n        <div class=\"n7-metadata-viewer__group-wrapper\"\r\n              *ngFor=\"let grp of grp.group\">\r\n            <ng-container *ngTemplateOutlet=\"group; context:{$implicit: grp}\"></ng-container>\r\n        </div>\r\n    </div>\r\n</ng-template>"
        })
    ], MetadataViewerComponent);
    return MetadataViewerComponent;
}());
export { MetadataViewerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEtdmlld2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9tZXRhZGF0YS12aWV3ZXIvbWV0YWRhdGEtdmlld2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixxQkFBcUI7QUFDckIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQW1FakQ7SUFBQTtJQUlBLENBQUM7SUFIVTtRQUFSLEtBQUssRUFBRTs7eURBQTBCO0lBRXpCO1FBQVIsS0FBSyxFQUFFOzt5REFBVztJQUhSLHVCQUF1QjtRQUpuQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLGs0Q0FBcUM7U0FDdEMsQ0FBQztPQUNXLHVCQUF1QixDQUluQztJQUFELDhCQUFDO0NBQUEsQUFKRCxJQUlDO1NBSlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gTUVUQURBVEEtVklFV0VSLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBNZXRhZGF0YVZpZXdlckNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBncm91cCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWV0YWRhdGFWaWV3ZXJEYXRhIHtcclxuICAvKipcclxuICAgKiB0aGUgQ0hJTEQgbWV0YWRhdGEgZ3JvdXBzXHJcbiAgICovXHJcbiAgZ3JvdXA6IE1ldGFkYXRhVmlld2VyQ2hpbGRHcm91cHNbXTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbn1cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgTWV0YWRhdGFWaWV3ZXJDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgdGl0bGUgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaXRlbXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgZ3JvdXAgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZXRhZGF0YVZpZXdlckNoaWxkR3JvdXBzIHtcclxuICAvKipcclxuICAgKiBjb21wb25lbnQgaGVhZGVyIChpZiByb290KVxyXG4gICAqIG9yIGdyb3VwIHRpdGxlXHJcbiAgICovXHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogdGhlIG1ldGFkYXRhIGl0ZW1zXHJcbiAgICovXHJcbiAgaXRlbXM/OiBNZXRhZGF0YVZpZXdlckl0ZW1zW107XHJcbiAgLyoqXHJcbiAgICogdGhlIENISUxEIG1ldGFkYXRhIGdyb3Vwc1xyXG4gICAqL1xyXG4gIGdyb3VwPzogTWV0YWRhdGFWaWV3ZXJDaGlsZEdyb3Vwc1tdO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgTWV0YWRhdGFWaWV3ZXJDb21wb25lbnQncyBcIml0ZW1zXCJcclxuICogQHByb3BlcnR5IGxhYmVsIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHZhbHVlIChyZXF1aXJlZClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWV0YWRhdGFWaWV3ZXJJdGVtcyB7XHJcbiAgLyoqXHJcbiAgICogdGhlIGl0ZW0ncyBsYWJlbFxyXG4gICAqL1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogdGhlIHZhbHVlIGZvciBAcHJvcGVydHkgbGFiZWxcclxuICAgKi9cclxuICB2YWx1ZTogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LW1ldGFkYXRhLXZpZXdlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21ldGFkYXRhLXZpZXdlci5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTWV0YWRhdGFWaWV3ZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IE1ldGFkYXRhVmlld2VyRGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG59XHJcbiJdfQ==