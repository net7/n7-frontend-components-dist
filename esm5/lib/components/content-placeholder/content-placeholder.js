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
export function IContentPlaceholderData() { }
if (false) {
    /**
     * array of html classes
     * @type {?}
     */
    IContentPlaceholderData.prototype.blocks;
    /**
     * additional info
     * @type {?|undefined}
     */
    IContentPlaceholderData.prototype._meta;
}
/**
 * @record
 */
function IBlocksData() { }
if (false) {
    /** @type {?|undefined} */
    IBlocksData.prototype.classes;
    /** @type {?|undefined} */
    IBlocksData.prototype.image;
    /** @type {?|undefined} */
    IBlocksData.prototype.alt;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1wbGFjZWhvbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29udGVudC1wbGFjZWhvbGRlci9jb250ZW50LXBsYWNlaG9sZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBUWpELDZDQVNDOzs7Ozs7SUFMQyx5Q0FBcUI7Ozs7O0lBSXJCLHdDQUFZOzs7OztBQUdkLDBCQUlDOzs7SUFIQyw4QkFBaUI7O0lBQ2pCLDRCQUFlOztJQUNmLDBCQUFhOztBQUdmO0lBQUE7SUFNQSxDQUFDOztnQkFOQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsb1hBQXlDO2lCQUMxQzs7O3VCQUVFLEtBQUs7O0lBQ1Isa0NBQUM7Q0FBQSxBQU5ELElBTUM7U0FGWSwyQkFBMkI7OztJQUN0QywyQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ09OVEVOVC1QTEFDRUhPTERFUi50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgQ29udGVudFBsYWNlaG9sZGVyQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElDb250ZW50UGxhY2Vob2xkZXJEYXRhIHtcbiAgLyoqXG4gICAqIGFycmF5IG9mIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgYmxvY2tzOiBJQmxvY2tzRGF0YVtdXG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG5pbnRlcmZhY2UgSUJsb2Nrc0RhdGEge1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICBpbWFnZT86IHN0cmluZztcbiAgYWx0Pzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1jb250ZW50LXBsYWNlaG9sZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRlbnQtcGxhY2Vob2xkZXIuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudFBsYWNlaG9sZGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSUNvbnRlbnRQbGFjZWhvbGRlckRhdGE7XG59Il19