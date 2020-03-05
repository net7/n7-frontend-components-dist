/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/metadata-viewer/metadata-viewer.ts
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
export function MetadataViewerData() { }
if (false) {
    /**
     * the CHILD metadata groups
     * @type {?}
     */
    MetadataViewerData.prototype.group;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    MetadataViewerData.prototype.classes;
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
export function MetadataViewerChildGroups() { }
if (false) {
    /**
     * component header (if root)
     * or group title
     * @type {?|undefined}
     */
    MetadataViewerChildGroups.prototype.title;
    /**
     * the metadata items
     * @type {?|undefined}
     */
    MetadataViewerChildGroups.prototype.items;
    /**
     * the CHILD metadata groups
     * @type {?|undefined}
     */
    MetadataViewerChildGroups.prototype.group;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    MetadataViewerChildGroups.prototype.classes;
}
/**
 * Interface for MetadataViewerComponent's "items"
 * \@property label (required)
 * \@property value (required)
 * @record
 */
export function MetadataViewerItems() { }
if (false) {
    /**
     * the item's label
     * @type {?}
     */
    MetadataViewerItems.prototype.label;
    /**
     * the value for \@property label
     * @type {?}
     */
    MetadataViewerItems.prototype.value;
}
export class MetadataViewerComponent {
}
MetadataViewerComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-metadata-viewer',
                template: "<div *ngIf=\"data\" class=\"n7-metadata-viewer\">\r\n    <!-- Metadata groups wrapper -->\r\n    <div class=\"n7-metadata-viewer__wrapper {{ data.classes  || ''}}\"\r\n          *ngFor=\"let grp of data.group\">\r\n        <!-- For each data group, render it -->\r\n        <ng-container *ngTemplateOutlet=\"group; context:{$implicit: grp}\"></ng-container>\r\n    </div>\r\n</div>\r\n\r\n<!-- Template for Metadata.group -->\r\n<ng-template #group let-grp>\r\n    <div *ngIf=\"grp.title || grp.items\" class=\"n7-metadata-viewer__group {{ grp.classes || '' }}\">\r\n        <div class=\"n7-metadata-viewer__group-title\" *ngIf=\"grp.title\">{{grp.title}}</div>\r\n        <div class=\"n7-metadata-viewer__group-content\" *ngIf=\"grp.items\">\r\n            <div class=\"n7-metadata-viewer__item\" *ngFor=\"let i of grp.items\">\r\n                <span class=\"n7-metadata-viewer__item-label\">{{i.label}} </span>\r\n                <span class=\"n7-metadata-viewer__item-value\" [innerHTML]=\"i.value\"></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Render all child groups -->\r\n    <div *ngIf=\"grp.group\">\r\n        <div class=\"n7-metadata-viewer__group-wrapper\"\r\n              *ngFor=\"let grp of grp.group\">\r\n            <ng-container *ngTemplateOutlet=\"group; context:{$implicit: grp}\"></ng-container>\r\n        </div>\r\n    </div>\r\n</ng-template>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEtdmlld2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9tZXRhZGF0YS12aWV3ZXIvbWV0YWRhdGEtdmlld2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBUWpELHdDQVNDOzs7Ozs7SUFMQyxtQ0FBbUM7Ozs7O0lBSW5DLHFDQUFjOzs7Ozs7Ozs7OztBQVdoQiwrQ0FrQkM7Ozs7Ozs7SUFiQywwQ0FBZTs7Ozs7SUFJZiwwQ0FBOEI7Ozs7O0lBSTlCLDBDQUFvQzs7Ozs7SUFJcEMsNENBQWM7Ozs7Ozs7O0FBUWhCLHlDQVNDOzs7Ozs7SUFMQyxvQ0FBYzs7Ozs7SUFJZCxvQ0FBYzs7QUFPaEIsTUFBTSxPQUFPLHVCQUF1Qjs7O1lBSm5DLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixrNENBQXFDO2FBQ3RDOzs7bUJBRUUsS0FBSzttQkFFTCxLQUFLOzs7O0lBRk4sdUNBQWtDOztJQUVsQyx1Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBNRVRBREFUQS1WSUVXRVIudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIE1ldGFkYXRhVmlld2VyQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGdyb3VwIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBNZXRhZGF0YVZpZXdlckRhdGEge1xyXG4gIC8qKlxyXG4gICAqIHRoZSBDSElMRCBtZXRhZGF0YSBncm91cHNcclxuICAgKi9cclxuICBncm91cDogTWV0YWRhdGFWaWV3ZXJDaGlsZEdyb3Vwc1tdO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IGFueTtcclxufVxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBNZXRhZGF0YVZpZXdlckNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB0aXRsZSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpdGVtcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBncm91cCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICovXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhVmlld2VyQ2hpbGRHcm91cHMge1xyXG4gIC8qKlxyXG4gICAqIGNvbXBvbmVudCBoZWFkZXIgKGlmIHJvb3QpXHJcbiAgICogb3IgZ3JvdXAgdGl0bGVcclxuICAgKi9cclxuICB0aXRsZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiB0aGUgbWV0YWRhdGEgaXRlbXNcclxuICAgKi9cclxuICBpdGVtcz86IE1ldGFkYXRhVmlld2VySXRlbXNbXTtcclxuICAvKipcclxuICAgKiB0aGUgQ0hJTEQgbWV0YWRhdGEgZ3JvdXBzXHJcbiAgICovXHJcbiAgZ3JvdXA/OiBNZXRhZGF0YVZpZXdlckNoaWxkR3JvdXBzW107XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBNZXRhZGF0YVZpZXdlckNvbXBvbmVudCdzIFwiaXRlbXNcIlxyXG4gKiBAcHJvcGVydHkgbGFiZWwgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgdmFsdWUgKHJlcXVpcmVkKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBNZXRhZGF0YVZpZXdlckl0ZW1zIHtcclxuICAvKipcclxuICAgKiB0aGUgaXRlbSdzIGxhYmVsXHJcbiAgICovXHJcbiAgbGFiZWw6IHN0cmluZztcclxuICAvKipcclxuICAgKiB0aGUgdmFsdWUgZm9yIEBwcm9wZXJ0eSBsYWJlbFxyXG4gICAqL1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctbWV0YWRhdGEtdmlld2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWV0YWRhdGEtdmlld2VyLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZXRhZGF0YVZpZXdlckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogTWV0YWRhdGFWaWV3ZXJEYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcbn1cclxuIl19