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
export class MetadataViewerComponent {
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
if (false) {
    /** @type {?} */
    MetadataViewerComponent.prototype.data;
    /** @type {?} */
    MetadataViewerComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEtdmlld2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9tZXRhZGF0YS12aWV3ZXIvbWV0YWRhdGEtdmlld2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7QUFRakQseUNBU0M7Ozs7OztJQUxDLG9DQUFvQzs7Ozs7SUFJcEMsc0NBQWM7Ozs7Ozs7Ozs7O0FBV2hCLGdEQWtCQzs7Ozs7OztJQWJDLDJDQUFlOzs7OztJQUlmLDJDQUErQjs7Ozs7SUFJL0IsMkNBQXFDOzs7OztJQUlyQyw2Q0FBYzs7Ozs7Ozs7QUFRaEIsMENBU0M7Ozs7OztJQUxDLHFDQUFjOzs7OztJQUlkLHFDQUFjOztBQU9oQixNQUFNLE9BQU8sdUJBQXVCOzs7WUFKbkMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLDIyQ0FBcUM7YUFDdEM7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETix1Q0FBbUM7O0lBQ25DLHVDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIE1FVEFEQVRBLVZJRVdFUi50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgTWV0YWRhdGFWaWV3ZXJDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgZ3JvdXAgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNZXRhZGF0YVZpZXdlckRhdGEge1xyXG4gIC8qKlxyXG4gICAqIHRoZSBDSElMRCBtZXRhZGF0YSBncm91cHNcclxuICAgKi9cclxuICBncm91cDogSU1ldGFkYXRhVmlld2VyQ2hpbGRHcm91cHNbXTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbn1cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgTWV0YWRhdGFWaWV3ZXJDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgdGl0bGUgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaXRlbXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgZ3JvdXAgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTWV0YWRhdGFWaWV3ZXJDaGlsZEdyb3VwcyB7XHJcbiAgLyoqXHJcbiAgICogY29tcG9uZW50IGhlYWRlciAoaWYgcm9vdClcclxuICAgKiBvciBncm91cCB0aXRsZVxyXG4gICAqL1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHRoZSBtZXRhZGF0YSBpdGVtc1xyXG4gICAqL1xyXG4gIGl0ZW1zPzogSU1ldGFkYXRhVmlld2VySXRlbXNbXTtcclxuICAvKipcclxuICAgKiB0aGUgQ0hJTEQgbWV0YWRhdGEgZ3JvdXBzXHJcbiAgICovXHJcbiAgZ3JvdXA/OiBJTWV0YWRhdGFWaWV3ZXJDaGlsZEdyb3Vwc1tdO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgTWV0YWRhdGFWaWV3ZXJDb21wb25lbnQncyBcIml0ZW1zXCJcclxuICogQHByb3BlcnR5IGxhYmVsIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHZhbHVlIChyZXF1aXJlZClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1ldGFkYXRhVmlld2VySXRlbXMge1xyXG4gIC8qKlxyXG4gICAqIHRoZSBpdGVtJ3MgbGFiZWxcclxuICAgKi9cclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHRoZSB2YWx1ZSBmb3IgQHByb3BlcnR5IGxhYmVsXHJcbiAgICovXHJcbiAgdmFsdWU6IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1tZXRhZGF0YS12aWV3ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tZXRhZGF0YS12aWV3ZXIuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1ldGFkYXRhVmlld2VyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBJTWV0YWRhdGFWaWV3ZXJEYXRhO1xyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxufSJdfQ==