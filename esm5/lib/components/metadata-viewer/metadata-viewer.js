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
var MetadataViewerComponent = /** @class */ (function () {
    function MetadataViewerComponent() {
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
    return MetadataViewerComponent;
}());
export { MetadataViewerComponent };
if (false) {
    /** @type {?} */
    MetadataViewerComponent.prototype.data;
    /** @type {?} */
    MetadataViewerComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEtdmlld2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9tZXRhZGF0YS12aWV3ZXIvbWV0YWRhdGEtdmlld2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBUWpELHdDQVNDOzs7Ozs7SUFMQyxtQ0FBbUM7Ozs7O0lBSW5DLHFDQUFjOzs7Ozs7Ozs7OztBQVdoQiwrQ0FrQkM7Ozs7Ozs7SUFiQywwQ0FBZTs7Ozs7SUFJZiwwQ0FBOEI7Ozs7O0lBSTlCLDBDQUFvQzs7Ozs7SUFJcEMsNENBQWM7Ozs7Ozs7O0FBUWhCLHlDQVNDOzs7Ozs7SUFMQyxvQ0FBYzs7Ozs7SUFJZCxvQ0FBYzs7QUFHaEI7SUFBQTtJQVFBLENBQUM7O2dCQVJBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixrNENBQXFDO2lCQUN0Qzs7O3VCQUVFLEtBQUs7dUJBRUwsS0FBSzs7SUFDUiw4QkFBQztDQUFBLEFBUkQsSUFRQztTQUpZLHVCQUF1Qjs7O0lBQ2xDLHVDQUFrQzs7SUFFbEMsdUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gTUVUQURBVEEtVklFV0VSLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBNZXRhZGF0YVZpZXdlckNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBncm91cCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWV0YWRhdGFWaWV3ZXJEYXRhIHtcclxuICAvKipcclxuICAgKiB0aGUgQ0hJTEQgbWV0YWRhdGEgZ3JvdXBzXHJcbiAgICovXHJcbiAgZ3JvdXA6IE1ldGFkYXRhVmlld2VyQ2hpbGRHcm91cHNbXTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbn1cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgTWV0YWRhdGFWaWV3ZXJDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgdGl0bGUgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaXRlbXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgZ3JvdXAgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZXRhZGF0YVZpZXdlckNoaWxkR3JvdXBzIHtcclxuICAvKipcclxuICAgKiBjb21wb25lbnQgaGVhZGVyIChpZiByb290KVxyXG4gICAqIG9yIGdyb3VwIHRpdGxlXHJcbiAgICovXHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogdGhlIG1ldGFkYXRhIGl0ZW1zXHJcbiAgICovXHJcbiAgaXRlbXM/OiBNZXRhZGF0YVZpZXdlckl0ZW1zW107XHJcbiAgLyoqXHJcbiAgICogdGhlIENISUxEIG1ldGFkYXRhIGdyb3Vwc1xyXG4gICAqL1xyXG4gIGdyb3VwPzogTWV0YWRhdGFWaWV3ZXJDaGlsZEdyb3Vwc1tdO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgTWV0YWRhdGFWaWV3ZXJDb21wb25lbnQncyBcIml0ZW1zXCJcclxuICogQHByb3BlcnR5IGxhYmVsIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHZhbHVlIChyZXF1aXJlZClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWV0YWRhdGFWaWV3ZXJJdGVtcyB7XHJcbiAgLyoqXHJcbiAgICogdGhlIGl0ZW0ncyBsYWJlbFxyXG4gICAqL1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogdGhlIHZhbHVlIGZvciBAcHJvcGVydHkgbGFiZWxcclxuICAgKi9cclxuICB2YWx1ZTogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LW1ldGFkYXRhLXZpZXdlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21ldGFkYXRhLXZpZXdlci5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTWV0YWRhdGFWaWV3ZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IE1ldGFkYXRhVmlld2VyRGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG59XHJcbiJdfQ==