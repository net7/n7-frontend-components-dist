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
export class ContentPlaceholderComponent {
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
if (false) {
    /** @type {?} */
    ContentPlaceholderComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1wbGFjZWhvbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29udGVudC1wbGFjZWhvbGRlci9jb250ZW50LXBsYWNlaG9sZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7QUFRakQsNkNBU0M7Ozs7OztJQUxDLHlDQUFxQjs7Ozs7SUFJckIsd0NBQVk7Ozs7O0FBR2QsMEJBSUM7OztJQUhDLDRCQUFlOztJQUNmLDBCQUFhOztJQUNiLDBCQUFhOztBQU9mLE1BQU0sT0FBTywyQkFBMkI7OztZQUp2QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsOFRBQXlDO2FBQzFDOzs7bUJBRUUsS0FBSzs7OztJQUFOLDJDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDT05URU5ULVBMQUNFSE9MREVSLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBDb250ZW50UGxhY2Vob2xkZXJDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRlbnRQbGFjZWhvbGRlckRhdGEge1xuICAvKipcbiAgICogYXJyYXkgb2YgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBibG9ja3M6IElCbG9ja3NEYXRhW11cbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbmludGVyZmFjZSBJQmxvY2tzRGF0YSB7XG4gIGNsYXNzPzogc3RyaW5nO1xuICB1cmw/OiBzdHJpbmc7XG4gIGFsdD86IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctY29udGVudC1wbGFjZWhvbGRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250ZW50LXBsYWNlaG9sZGVyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENvbnRlbnRQbGFjZWhvbGRlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElDb250ZW50UGxhY2Vob2xkZXJEYXRhO1xufSJdfQ==