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
                    template: "<div *ngIf=\"data\" class=\"n7-metadata-viewer\">\n    <!-- Metadata groups wrapper -->\n    <div class=\"n7-metadata-viewer__wrapper {{ data.classes  || ''}}\"\n          *ngFor=\"let grp of data.group\">\n        <!-- For each data group, render it -->\n        <ng-container *ngTemplateOutlet=\"group; context:{$implicit: grp}\"></ng-container>\n    </div>\n</div>\n\n<!-- Template for Metadata.group -->\n<ng-template #group let-grp>\n    <div *ngIf=\"grp.title || grp.items\" class=\"n7-metadata-viewer__group {{ grp.classes || '' }}\">\n        <div class=\"n7-metadata-viewer__group-title\" *ngIf=\"grp.title\">{{grp.title}}</div>\n        <div class=\"n7-metadata-viewer__group-content\" *ngIf=\"grp.items\">\n            <div class=\"n7-metadata-viewer__item\" *ngFor=\"let i of grp.items\">\n                <span class=\"n7-metadata-viewer__item-label\">{{i.label}} </span>\n                <span class=\"n7-metadata-viewer__item-value\" [innerHTML]=\"i.value\"></span>\n            </div>\n        </div>\n    </div>\n    <!-- Render all child groups -->\n    <div *ngIf=\"grp.group\">\n        <div class=\"n7-metadata-viewer__group-wrapper\"\n              *ngFor=\"let grp of grp.group\">\n            <ng-container *ngTemplateOutlet=\"group; context:{$implicit: grp}\"></ng-container>\n        </div>\n    </div>\n</ng-template>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEtdmlld2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9tZXRhZGF0YS12aWV3ZXIvbWV0YWRhdGEtdmlld2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBUWpELHdDQVNDOzs7Ozs7SUFMQyxtQ0FBbUM7Ozs7O0lBSW5DLHFDQUFjOzs7Ozs7Ozs7OztBQVdoQiwrQ0FrQkM7Ozs7Ozs7SUFiQywwQ0FBZTs7Ozs7SUFJZiwwQ0FBOEI7Ozs7O0lBSTlCLDBDQUFvQzs7Ozs7SUFJcEMsNENBQWM7Ozs7Ozs7O0FBUWhCLHlDQVNDOzs7Ozs7SUFMQyxvQ0FBYzs7Ozs7SUFJZCxvQ0FBYzs7QUFHaEI7SUFBQTtJQVFBLENBQUM7O2dCQVJBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5Qiw0MENBQXFDO2lCQUN0Qzs7O3VCQUVFLEtBQUs7dUJBRUwsS0FBSzs7SUFDUiw4QkFBQztDQUFBLEFBUkQsSUFRQztTQUpZLHVCQUF1Qjs7O0lBQ2xDLHVDQUFrQzs7SUFFbEMsdUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE1FVEFEQVRBLVZJRVdFUi50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgTWV0YWRhdGFWaWV3ZXJDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBncm91cCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWV0YWRhdGFWaWV3ZXJEYXRhIHtcbiAgLyoqXG4gICAqIHRoZSBDSElMRCBtZXRhZGF0YSBncm91cHNcbiAgICovXG4gIGdyb3VwOiBNZXRhZGF0YVZpZXdlckNoaWxkR3JvdXBzW107XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbn1cbi8qKlxuICogSW50ZXJmYWNlIGZvciBNZXRhZGF0YVZpZXdlckNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IHRpdGxlIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpdGVtcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgZ3JvdXAgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgTWV0YWRhdGFWaWV3ZXJDaGlsZEdyb3VwcyB7XG4gIC8qKlxuICAgKiBjb21wb25lbnQgaGVhZGVyIChpZiByb290KVxuICAgKiBvciBncm91cCB0aXRsZVxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aGUgbWV0YWRhdGEgaXRlbXNcbiAgICovXG4gIGl0ZW1zPzogTWV0YWRhdGFWaWV3ZXJJdGVtc1tdO1xuICAvKipcbiAgICogdGhlIENISUxEIG1ldGFkYXRhIGdyb3Vwc1xuICAgKi9cbiAgZ3JvdXA/OiBNZXRhZGF0YVZpZXdlckNoaWxkR3JvdXBzW107XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIE1ldGFkYXRhVmlld2VyQ29tcG9uZW50J3MgXCJpdGVtc1wiXG4gKiBAcHJvcGVydHkgbGFiZWwgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHZhbHVlIChyZXF1aXJlZClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNZXRhZGF0YVZpZXdlckl0ZW1zIHtcbiAgLyoqXG4gICAqIHRoZSBpdGVtJ3MgbGFiZWxcbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aGUgdmFsdWUgZm9yIEBwcm9wZXJ0eSBsYWJlbFxuICAgKi9cbiAgdmFsdWU6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctbWV0YWRhdGEtdmlld2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21ldGFkYXRhLXZpZXdlci5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBNZXRhZGF0YVZpZXdlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IE1ldGFkYXRhVmlld2VyRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG59XG4iXX0=