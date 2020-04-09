/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/content-placeholder/content-placeholder.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// CONTENT-PLACEHOLDER.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for ContentPlaceholderComponent's "data"
 *
 * \@property classes (optional)
 * \@property _meta (optional)
 * @record
 */
export function ContentPlaceholderData() { }
if (false) {
    /**
     * array of html classes
     * @type {?}
     */
    ContentPlaceholderData.prototype.blocks;
    /**
     * additional info
     * @type {?|undefined}
     */
    ContentPlaceholderData.prototype._meta;
}
/**
 * @record
 */
function BlocksData() { }
if (false) {
    /** @type {?|undefined} */
    BlocksData.prototype.classes;
    /** @type {?|undefined} */
    BlocksData.prototype.image;
    /** @type {?|undefined} */
    BlocksData.prototype.alt;
}
var ContentPlaceholderComponent = /** @class */ (function () {
    function ContentPlaceholderComponent() {
    }
    ContentPlaceholderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-content-placeholder',
                    template: "<div *ngIf=\"data\" class=\"n7-content-placeholder\">\n  <ng-container *ngFor=\"let b of data.blocks\">\n    <div *ngIf=\"!b.image\" class=\"n7-content-placeholder__item {{b.classes || ''}}\"></div>\n    <img *ngIf=\"b.image\" class=\"n7-content-placeholder__image {{b.classes || ''}}\" src=\"{{b.image}}\" alt=\"{{ b.alt || '' }}\">\n  </ng-container>\n</div>"
                }] }
    ];
    ContentPlaceholderComponent.propDecorators = {
        data: [{ type: Input }]
    };
    return ContentPlaceholderComponent;
}());
export { ContentPlaceholderComponent };
if (false) {
    /** @type {?} */
    ContentPlaceholderComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1wbGFjZWhvbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29udGVudC1wbGFjZWhvbGRlci9jb250ZW50LXBsYWNlaG9sZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBUWpELDRDQVNDOzs7Ozs7SUFMQyx3Q0FBcUI7Ozs7O0lBSXJCLHVDQUFZOzs7OztBQUdkLHlCQUlDOzs7SUFIQyw2QkFBaUI7O0lBQ2pCLDJCQUFlOztJQUNmLHlCQUFhOztBQUdmO0lBQUE7SUFNQSxDQUFDOztnQkFOQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsb1hBQXlDO2lCQUMxQzs7O3VCQUVFLEtBQUs7O0lBQ1Isa0NBQUM7Q0FBQSxBQU5ELElBTUM7U0FGWSwyQkFBMkI7OztJQUN0QywyQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ09OVEVOVC1QTEFDRUhPTERFUi50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgQ29udGVudFBsYWNlaG9sZGVyQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbnRlbnRQbGFjZWhvbGRlckRhdGEge1xuICAvKipcbiAgICogYXJyYXkgb2YgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBibG9ja3M6IEJsb2Nrc0RhdGFbXTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbmludGVyZmFjZSBCbG9ja3NEYXRhIHtcbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIGFsdD86IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctY29udGVudC1wbGFjZWhvbGRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250ZW50LXBsYWNlaG9sZGVyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENvbnRlbnRQbGFjZWhvbGRlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IENvbnRlbnRQbGFjZWhvbGRlckRhdGE7XG59XG4iXX0=