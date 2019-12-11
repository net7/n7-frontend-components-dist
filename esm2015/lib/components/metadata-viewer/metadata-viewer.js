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
                template: "<div *ngIf=\"data\" class=\"n7-metadata-viewer\">\n    <!-- Metadata groups wrapper -->\n    <div class=\"n7-metadata-viewer__wrapper {{ data.classes  || ''}}\"\n          *ngFor=\"let grp of data.group\">\n        <!-- For each data group, render it -->\n        <ng-container *ngTemplateOutlet=\"group; context:{$implicit: grp}\"></ng-container>\n    </div>\n</div>\n\n<!-- Template for Metadata.group -->\n<ng-template #group let-grp>\n    <div *ngIf=\"grp.title || grp.items\" class=\"n7-metadata-viewer__group {{ grp.classes || '' }}\">\n        <div class=\"n7-metadata-viewer__group-title\" *ngIf=\"grp.title\">{{grp.title}}</div>\n        <div class=\"n7-metadata-viewer__group-content\" *ngIf=\"grp.items\">\n            <div class=\"n7-metadata-viewer__item\" *ngFor=\"let i of grp.items\">\n                <span class=\"n7-metadata-viewer__item-label\">{{i.label}} </span>\n                <span class=\"n7-metadata-viewer__item-value\" [innerHTML]=\"i.value\"></span>\n            </div>\n        </div>\n    </div>\n    <!-- Render all child groups -->\n    <div *ngIf=\"grp.group\">\n        <div class=\"n7-metadata-viewer__group-wrapper\"\n              *ngFor=\"let grp of grp.group\">\n            <ng-container *ngTemplateOutlet=\"group; context:{$implicit: grp}\"></ng-container>\n        </div>\n    </div>\n</ng-template>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEtdmlld2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9tZXRhZGF0YS12aWV3ZXIvbWV0YWRhdGEtdmlld2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBUWpELHlDQVNDOzs7Ozs7SUFMQyxvQ0FBb0M7Ozs7O0lBSXBDLHNDQUFjOzs7Ozs7Ozs7OztBQVdoQixnREFrQkM7Ozs7Ozs7SUFiQywyQ0FBZTs7Ozs7SUFJZiwyQ0FBK0I7Ozs7O0lBSS9CLDJDQUFxQzs7Ozs7SUFJckMsNkNBQWM7Ozs7Ozs7O0FBUWhCLDBDQVNDOzs7Ozs7SUFMQyxxQ0FBYzs7Ozs7SUFJZCxxQ0FBYzs7QUFPaEIsTUFBTSxPQUFPLHVCQUF1Qjs7O1lBSm5DLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5Qiw0MENBQXFDO2FBQ3RDOzs7bUJBRUUsS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sdUNBQW1DOztJQUNuQyx1Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTUVUQURBVEEtVklFV0VSLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBNZXRhZGF0YVZpZXdlckNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGdyb3VwIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJTWV0YWRhdGFWaWV3ZXJEYXRhIHtcbiAgLyoqXG4gICAqIHRoZSBDSElMRCBtZXRhZGF0YSBncm91cHNcbiAgICovXG4gIGdyb3VwOiBJTWV0YWRhdGFWaWV3ZXJDaGlsZEdyb3Vwc1tdO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBhbnk7XG59XG4vKipcbiAqIEludGVyZmFjZSBmb3IgTWV0YWRhdGFWaWV3ZXJDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSB0aXRsZSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaXRlbXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGdyb3VwIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIElNZXRhZGF0YVZpZXdlckNoaWxkR3JvdXBzIHtcbiAgLyoqXG4gICAqIGNvbXBvbmVudCBoZWFkZXIgKGlmIHJvb3QpXG4gICAqIG9yIGdyb3VwIHRpdGxlXG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcbiAgLyoqXG4gICAqIHRoZSBtZXRhZGF0YSBpdGVtc1xuICAgKi9cbiAgaXRlbXM/OiBJTWV0YWRhdGFWaWV3ZXJJdGVtc1tdO1xuICAvKipcbiAgICogdGhlIENISUxEIG1ldGFkYXRhIGdyb3Vwc1xuICAgKi9cbiAgZ3JvdXA/OiBJTWV0YWRhdGFWaWV3ZXJDaGlsZEdyb3Vwc1tdO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBNZXRhZGF0YVZpZXdlckNvbXBvbmVudCdzIFwiaXRlbXNcIlxuICogQHByb3BlcnR5IGxhYmVsIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSB2YWx1ZSAocmVxdWlyZWQpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSU1ldGFkYXRhVmlld2VySXRlbXMge1xuICAvKipcbiAgICogdGhlIGl0ZW0ncyBsYWJlbFxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICAqIHRoZSB2YWx1ZSBmb3IgQHByb3BlcnR5IGxhYmVsXG4gICAqL1xuICB2YWx1ZTogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1tZXRhZGF0YS12aWV3ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbWV0YWRhdGEtdmlld2VyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE1ldGFkYXRhVmlld2VyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSU1ldGFkYXRhVmlld2VyRGF0YTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xufSJdfQ==