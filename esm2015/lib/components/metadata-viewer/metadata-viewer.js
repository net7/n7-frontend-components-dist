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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEtdmlld2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9tZXRhZGF0YS12aWV3ZXIvbWV0YWRhdGEtdmlld2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBUWpELHdDQVNDOzs7Ozs7SUFMQyxtQ0FBbUM7Ozs7O0lBSW5DLHFDQUFjOzs7Ozs7Ozs7OztBQVdoQiwrQ0FrQkM7Ozs7Ozs7SUFiQywwQ0FBZTs7Ozs7SUFJZiwwQ0FBOEI7Ozs7O0lBSTlCLDBDQUFvQzs7Ozs7SUFJcEMsNENBQWM7Ozs7Ozs7O0FBUWhCLHlDQVNDOzs7Ozs7SUFMQyxvQ0FBYzs7Ozs7SUFJZCxvQ0FBYzs7QUFPaEIsTUFBTSxPQUFPLHVCQUF1Qjs7O1lBSm5DLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5Qiw0MENBQXFDO2FBQ3RDOzs7bUJBRUUsS0FBSzttQkFFTCxLQUFLOzs7O0lBRk4sdUNBQWtDOztJQUVsQyx1Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTUVUQURBVEEtVklFV0VSLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBNZXRhZGF0YVZpZXdlckNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGdyb3VwIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNZXRhZGF0YVZpZXdlckRhdGEge1xuICAvKipcbiAgICogdGhlIENISUxEIG1ldGFkYXRhIGdyb3Vwc1xuICAgKi9cbiAgZ3JvdXA6IE1ldGFkYXRhVmlld2VyQ2hpbGRHcm91cHNbXTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogYW55O1xufVxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIE1ldGFkYXRhVmlld2VyQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgdGl0bGUgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGl0ZW1zIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBncm91cCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBNZXRhZGF0YVZpZXdlckNoaWxkR3JvdXBzIHtcbiAgLyoqXG4gICAqIGNvbXBvbmVudCBoZWFkZXIgKGlmIHJvb3QpXG4gICAqIG9yIGdyb3VwIHRpdGxlXG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcbiAgLyoqXG4gICAqIHRoZSBtZXRhZGF0YSBpdGVtc1xuICAgKi9cbiAgaXRlbXM/OiBNZXRhZGF0YVZpZXdlckl0ZW1zW107XG4gIC8qKlxuICAgKiB0aGUgQ0hJTEQgbWV0YWRhdGEgZ3JvdXBzXG4gICAqL1xuICBncm91cD86IE1ldGFkYXRhVmlld2VyQ2hpbGRHcm91cHNbXTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgTWV0YWRhdGFWaWV3ZXJDb21wb25lbnQncyBcIml0ZW1zXCJcbiAqIEBwcm9wZXJ0eSBsYWJlbCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgdmFsdWUgKHJlcXVpcmVkKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhVmlld2VySXRlbXMge1xuICAvKipcbiAgICogdGhlIGl0ZW0ncyBsYWJlbFxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICAqIHRoZSB2YWx1ZSBmb3IgQHByb3BlcnR5IGxhYmVsXG4gICAqL1xuICB2YWx1ZTogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1tZXRhZGF0YS12aWV3ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbWV0YWRhdGEtdmlld2VyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE1ldGFkYXRhVmlld2VyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogTWV0YWRhdGFWaWV3ZXJEYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcbn1cbiJdfQ==