/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    IBlocksData.prototype.class;
    /** @type {?|undefined} */
    IBlocksData.prototype.url;
    /** @type {?|undefined} */
    IBlocksData.prototype.alt;
}
var ContentPlaceholderComponent = /** @class */ (function () {
    function ContentPlaceholderComponent() {
    }
    ContentPlaceholderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-content-placeholder',
                    template: "<div *ngIf=\"data\" class=\"n7-content-placeholder\">\n  <ng-container *ngFor=\"let b of data.blocks\">\n    <div *ngIf=\"!b.url\" class=\"n7-content-placeholder__item {{b.class || ''}}\"></div>\n    <img *ngIf=\"b.url\" class=\"n7-content-placeholder__image\" src=\"{{b.url}}\">\n  </ng-container>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1wbGFjZWhvbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29udGVudC1wbGFjZWhvbGRlci9jb250ZW50LXBsYWNlaG9sZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7QUFRakQsNkNBU0M7Ozs7OztJQUxDLHlDQUFxQjs7Ozs7SUFJckIsd0NBQVk7Ozs7O0FBR2QsMEJBSUM7OztJQUhDLDRCQUFlOztJQUNmLDBCQUFhOztJQUNiLDBCQUFhOztBQUdmO0lBQUE7SUFNQSxDQUFDOztnQkFOQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsOFRBQXlDO2lCQUMxQzs7O3VCQUVFLEtBQUs7O0lBQ1Isa0NBQUM7Q0FBQSxBQU5ELElBTUM7U0FGWSwyQkFBMkI7OztJQUN0QywyQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ09OVEVOVC1QTEFDRUhPTERFUi50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgQ29udGVudFBsYWNlaG9sZGVyQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElDb250ZW50UGxhY2Vob2xkZXJEYXRhIHtcbiAgLyoqXG4gICAqIGFycmF5IG9mIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgYmxvY2tzOiBJQmxvY2tzRGF0YVtdXG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG5pbnRlcmZhY2UgSUJsb2Nrc0RhdGEge1xuICBjbGFzcz86IHN0cmluZztcbiAgdXJsPzogc3RyaW5nO1xuICBhbHQ/OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWNvbnRlbnQtcGxhY2Vob2xkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY29udGVudC1wbGFjZWhvbGRlci5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50UGxhY2Vob2xkZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJQ29udGVudFBsYWNlaG9sZGVyRGF0YTtcbn0iXX0=