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
            template: "<div *ngIf=\"data\" class=\"n7-metadata-viewer\">\n    <!-- Metadata groups wrapper -->\n    <div class=\"n7-metadata-viewer__wrapper {{ data.classes  || ''}}\"\n          *ngFor=\"let grp of data.group\">\n        <!-- For each data group, render it -->\n        <ng-container *ngTemplateOutlet=\"group; context:{$implicit: grp}\"></ng-container>\n    </div>\n</div>\n\n<!-- Template for Metadata.group -->\n<ng-template #group let-grp>\n    <div *ngIf=\"grp.title || grp.items\" class=\"n7-metadata-viewer__group {{ grp.classes || '' }}\">\n        <div class=\"n7-metadata-viewer__group-title\" *ngIf=\"grp.title\">{{grp.title}}</div>\n        <div class=\"n7-metadata-viewer__group-content\" *ngIf=\"grp.items\">\n            <div class=\"n7-metadata-viewer__item\" *ngFor=\"let i of grp.items\">\n                <span *ngIf=\"i.label\" class=\"n7-metadata-viewer__item-label\">{{ i.label }}</span>\n                <span *ngIf=\"i.value\" class=\"n7-metadata-viewer__item-value\" [innerHTML]=\"i.value\"></span>\n            </div>\n        </div>\n    </div>\n    <!-- Render all child groups -->\n    <div *ngIf=\"grp.group\">\n        <div class=\"n7-metadata-viewer__group-wrapper\"\n              *ngFor=\"let grp of grp.group\">\n            <ng-container *ngTemplateOutlet=\"group; context:{$implicit: grp}\"></ng-container>\n        </div>\n    </div>\n</ng-template>"
        })
    ], MetadataViewerComponent);
    return MetadataViewerComponent;
}());
export { MetadataViewerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEtdmlld2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9tZXRhZGF0YS12aWV3ZXIvbWV0YWRhdGEtdmlld2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixxQkFBcUI7QUFDckIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQW1FakQ7SUFBQTtJQUlBLENBQUM7SUFIVTtRQUFSLEtBQUssRUFBRTs7eURBQTBCO0lBRXpCO1FBQVIsS0FBSyxFQUFFOzt5REFBVztJQUhSLHVCQUF1QjtRQUpuQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLGkzQ0FBcUM7U0FDdEMsQ0FBQztPQUNXLHVCQUF1QixDQUluQztJQUFELDhCQUFDO0NBQUEsQUFKRCxJQUlDO1NBSlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE1FVEFEQVRBLVZJRVdFUi50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgTWV0YWRhdGFWaWV3ZXJDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBncm91cCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWV0YWRhdGFWaWV3ZXJEYXRhIHtcbiAgLyoqXG4gICAqIHRoZSBDSElMRCBtZXRhZGF0YSBncm91cHNcbiAgICovXG4gIGdyb3VwOiBNZXRhZGF0YVZpZXdlckNoaWxkR3JvdXBzW107XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbn1cbi8qKlxuICogSW50ZXJmYWNlIGZvciBNZXRhZGF0YVZpZXdlckNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IHRpdGxlIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpdGVtcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgZ3JvdXAgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgTWV0YWRhdGFWaWV3ZXJDaGlsZEdyb3VwcyB7XG4gIC8qKlxuICAgKiBjb21wb25lbnQgaGVhZGVyIChpZiByb290KVxuICAgKiBvciBncm91cCB0aXRsZVxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aGUgbWV0YWRhdGEgaXRlbXNcbiAgICovXG4gIGl0ZW1zPzogTWV0YWRhdGFWaWV3ZXJJdGVtc1tdO1xuICAvKipcbiAgICogdGhlIENISUxEIG1ldGFkYXRhIGdyb3Vwc1xuICAgKi9cbiAgZ3JvdXA/OiBNZXRhZGF0YVZpZXdlckNoaWxkR3JvdXBzW107XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIE1ldGFkYXRhVmlld2VyQ29tcG9uZW50J3MgXCJpdGVtc1wiXG4gKiBAcHJvcGVydHkgbGFiZWwgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHZhbHVlIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNZXRhZGF0YVZpZXdlckl0ZW1zIHtcbiAgLyoqXG4gICAqIHRoZSBpdGVtJ3MgbGFiZWxcbiAgICovXG4gIGxhYmVsPzogc3RyaW5nO1xuICAvKipcbiAgICogdGhlIHZhbHVlIGZvciBAcHJvcGVydHkgbGFiZWxcbiAgICovXG4gIHZhbHVlPzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1tZXRhZGF0YS12aWV3ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbWV0YWRhdGEtdmlld2VyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE1ldGFkYXRhVmlld2VyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogTWV0YWRhdGFWaWV3ZXJEYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcbn1cbiJdfQ==