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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEtdmlld2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9tZXRhZGF0YS12aWV3ZXIvbWV0YWRhdGEtdmlld2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBUWpELHlDQVNDOzs7Ozs7SUFMQyxvQ0FBb0M7Ozs7O0lBSXBDLHNDQUFjOzs7Ozs7Ozs7OztBQVdoQixnREFrQkM7Ozs7Ozs7SUFiQywyQ0FBZTs7Ozs7SUFJZiwyQ0FBK0I7Ozs7O0lBSS9CLDJDQUFxQzs7Ozs7SUFJckMsNkNBQWM7Ozs7Ozs7O0FBUWhCLDBDQVNDOzs7Ozs7SUFMQyxxQ0FBYzs7Ozs7SUFJZCxxQ0FBYzs7QUFHaEI7SUFBQTtJQU9BLENBQUM7O2dCQVBBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5Qiw0MENBQXFDO2lCQUN0Qzs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUFDUiw4QkFBQztDQUFBLEFBUEQsSUFPQztTQUhZLHVCQUF1Qjs7O0lBQ2xDLHVDQUFtQzs7SUFDbkMsdUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE1FVEFEQVRBLVZJRVdFUi50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgTWV0YWRhdGFWaWV3ZXJDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBncm91cCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSU1ldGFkYXRhVmlld2VyRGF0YSB7XG4gIC8qKlxuICAgKiB0aGUgQ0hJTEQgbWV0YWRhdGEgZ3JvdXBzXG4gICAqL1xuICBncm91cDogSU1ldGFkYXRhVmlld2VyQ2hpbGRHcm91cHNbXTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogYW55O1xufVxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIE1ldGFkYXRhVmlld2VyQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgdGl0bGUgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGl0ZW1zIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBncm91cCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBJTWV0YWRhdGFWaWV3ZXJDaGlsZEdyb3VwcyB7XG4gIC8qKlxuICAgKiBjb21wb25lbnQgaGVhZGVyIChpZiByb290KVxuICAgKiBvciBncm91cCB0aXRsZVxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aGUgbWV0YWRhdGEgaXRlbXNcbiAgICovXG4gIGl0ZW1zPzogSU1ldGFkYXRhVmlld2VySXRlbXNbXTtcbiAgLyoqXG4gICAqIHRoZSBDSElMRCBtZXRhZGF0YSBncm91cHNcbiAgICovXG4gIGdyb3VwPzogSU1ldGFkYXRhVmlld2VyQ2hpbGRHcm91cHNbXTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgTWV0YWRhdGFWaWV3ZXJDb21wb25lbnQncyBcIml0ZW1zXCJcbiAqIEBwcm9wZXJ0eSBsYWJlbCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgdmFsdWUgKHJlcXVpcmVkKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElNZXRhZGF0YVZpZXdlckl0ZW1zIHtcbiAgLyoqXG4gICAqIHRoZSBpdGVtJ3MgbGFiZWxcbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aGUgdmFsdWUgZm9yIEBwcm9wZXJ0eSBsYWJlbFxuICAgKi9cbiAgdmFsdWU6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctbWV0YWRhdGEtdmlld2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21ldGFkYXRhLXZpZXdlci5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBNZXRhZGF0YVZpZXdlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElNZXRhZGF0YVZpZXdlckRhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcbn0iXX0=