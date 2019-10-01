/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// METADATA-VIEWER.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for MetadataViewerComponent's "data"
 *
 * \@property group (required)
 * \@property classes (optional)
 * @record
 */
export function IMetadataViewerData() { }
if (false) {
    /**
     * the CHILD metadata groups
     * @type {?}
     */
    IMetadataViewerData.prototype.group;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    IMetadataViewerData.prototype.classes;
}
/**
 * Interface for MetadataViewerComponent's "data"
 *
 * \@property title (optional)
 * \@property items (optional)
 * \@property group (optional)
 * \@property classes (optional)
 * @record
 */
export function IMetadataViewerChildGroups() { }
if (false) {
    /**
     * component header (if root)
     * or group title
     * @type {?|undefined}
     */
    IMetadataViewerChildGroups.prototype.title;
    /**
     * the metadata items
     * @type {?|undefined}
     */
    IMetadataViewerChildGroups.prototype.items;
    /**
     * the CHILD metadata groups
     * @type {?|undefined}
     */
    IMetadataViewerChildGroups.prototype.group;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    IMetadataViewerChildGroups.prototype.classes;
}
/**
 * Interface for MetadataViewerComponent's "items"
 * \@property label (required)
 * \@property value (required)
 * @record
 */
export function IMetadataViewerItems() { }
if (false) {
    /**
     * the item's label
     * @type {?}
     */
    IMetadataViewerItems.prototype.label;
    /**
     * the value for \@property label
     * @type {?}
     */
    IMetadataViewerItems.prototype.value;
}
var MetadataViewerComponent = /** @class */ (function () {
    function MetadataViewerComponent() {
    }
    MetadataViewerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-metadata-viewer',
                    template: "<div *ngIf=\"data\" class=\"n7-metadata-viewer\">\r\n    <!-- Metadata groups wrapper -->\r\n    <div class=\"n7-metadata-viewer__wrapper {{ data.classes  || ''}}\" \r\n          *ngFor=\"let grp of data.group\">\r\n        <!-- For each data group, render it -->\r\n        <ng-container *ngTemplateOutlet=\"group; context:{$implicit: grp}\"></ng-container>\r\n    </div>\r\n</div>\r\n\r\n<!-- Template for Metadata.group -->\r\n<ng-template #group let-grp>\r\n    <div class=\"n7-metadata-viewer__group-wrapper {{ grp.classes || '' }}\">\r\n        <div class=\"n7-metadata-viewer__group-title\" *ngIf=\"grp.title\">{{grp.title}}</div>\r\n        <div class=\"n7-metadata-viewer__group-content\" *ngIf=\"grp.items\">\r\n            <div class=\"n7-metadata-viewer__items-wrapper\" *ngFor=\"let i of grp.items\">\r\n                <span class=\"n7-metadata-viewer__item-label\">{{i.label}} </span>\r\n                <span class=\"n7-metadata-viewer__item-value\">{{i.value}} </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Render all child groups -->\r\n    <div *ngIf=\"grp.group\">\r\n        <div class=\"n7-metadata-viewer__group-wrapper\"\r\n              *ngFor=\"let grp of grp.group\">\r\n            <ng-container *ngTemplateOutlet=\"group; context:{$implicit: grp}\"></ng-container>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n"
                }] }
    ];
    MetadataViewerComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return MetadataViewerComponent;
}());
export { MetadataViewerComponent };
if (false) {
    /** @type {?} */
    MetadataViewerComponent.prototype.data;
    /** @type {?} */
    MetadataViewerComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEtdmlld2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9tZXRhZGF0YS12aWV3ZXIvbWV0YWRhdGEtdmlld2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7QUFRakQseUNBU0M7Ozs7OztJQUxDLG9DQUFvQzs7Ozs7SUFJcEMsc0NBQWM7Ozs7Ozs7Ozs7O0FBV2hCLGdEQWtCQzs7Ozs7OztJQWJDLDJDQUFlOzs7OztJQUlmLDJDQUErQjs7Ozs7SUFJL0IsMkNBQXFDOzs7OztJQUlyQyw2Q0FBYzs7Ozs7Ozs7QUFRaEIsMENBU0M7Ozs7OztJQUxDLHFDQUFjOzs7OztJQUlkLHFDQUFjOztBQUdoQjtJQUFBO0lBT0EsQ0FBQzs7Z0JBUEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLDIyQ0FBcUM7aUJBQ3RDOzs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLOztJQUNSLDhCQUFDO0NBQUEsQUFQRCxJQU9DO1NBSFksdUJBQXVCOzs7SUFDbEMsdUNBQW1DOztJQUNuQyx1Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBNRVRBREFUQS1WSUVXRVIudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIE1ldGFkYXRhVmlld2VyQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGdyb3VwIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTWV0YWRhdGFWaWV3ZXJEYXRhIHtcclxuICAvKipcclxuICAgKiB0aGUgQ0hJTEQgbWV0YWRhdGEgZ3JvdXBzXHJcbiAgICovXHJcbiAgZ3JvdXA6IElNZXRhZGF0YVZpZXdlckNoaWxkR3JvdXBzW107XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogYW55O1xyXG59XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIE1ldGFkYXRhVmlld2VyQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IHRpdGxlIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGl0ZW1zIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGdyb3VwIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKi9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1ldGFkYXRhVmlld2VyQ2hpbGRHcm91cHMge1xyXG4gIC8qKlxyXG4gICAqIGNvbXBvbmVudCBoZWFkZXIgKGlmIHJvb3QpXHJcbiAgICogb3IgZ3JvdXAgdGl0bGVcclxuICAgKi9cclxuICB0aXRsZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiB0aGUgbWV0YWRhdGEgaXRlbXNcclxuICAgKi9cclxuICBpdGVtcz86IElNZXRhZGF0YVZpZXdlckl0ZW1zW107XHJcbiAgLyoqXHJcbiAgICogdGhlIENISUxEIG1ldGFkYXRhIGdyb3Vwc1xyXG4gICAqL1xyXG4gIGdyb3VwPzogSU1ldGFkYXRhVmlld2VyQ2hpbGRHcm91cHNbXTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIE1ldGFkYXRhVmlld2VyQ29tcG9uZW50J3MgXCJpdGVtc1wiXHJcbiAqIEBwcm9wZXJ0eSBsYWJlbCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSB2YWx1ZSAocmVxdWlyZWQpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNZXRhZGF0YVZpZXdlckl0ZW1zIHtcclxuICAvKipcclxuICAgKiB0aGUgaXRlbSdzIGxhYmVsXHJcbiAgICovXHJcbiAgbGFiZWw6IHN0cmluZztcclxuICAvKipcclxuICAgKiB0aGUgdmFsdWUgZm9yIEBwcm9wZXJ0eSBsYWJlbFxyXG4gICAqL1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctbWV0YWRhdGEtdmlld2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWV0YWRhdGEtdmlld2VyLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZXRhZGF0YVZpZXdlckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogSU1ldGFkYXRhVmlld2VyRGF0YTtcclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcbn0iXX0=