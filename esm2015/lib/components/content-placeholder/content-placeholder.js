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
    IBlocksData.prototype.classes;
    /** @type {?|undefined} */
    IBlocksData.prototype.image;
    /** @type {?|undefined} */
    IBlocksData.prototype.alt;
}
export class ContentPlaceholderComponent {
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
if (false) {
    /** @type {?} */
    ContentPlaceholderComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1wbGFjZWhvbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29udGVudC1wbGFjZWhvbGRlci9jb250ZW50LXBsYWNlaG9sZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7QUFRakQsNkNBU0M7Ozs7OztJQUxDLHlDQUFxQjs7Ozs7SUFJckIsd0NBQVk7Ozs7O0FBR2QsMEJBSUM7OztJQUhDLDhCQUFpQjs7SUFDakIsNEJBQWU7O0lBQ2YsMEJBQWE7O0FBT2YsTUFBTSxPQUFPLDJCQUEyQjs7O1lBSnZDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxvWEFBeUM7YUFDMUM7OzttQkFFRSxLQUFLOzs7O0lBQU4sMkNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENPTlRFTlQtUExBQ0VIT0xERVIudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIENvbnRlbnRQbGFjZWhvbGRlckNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJQ29udGVudFBsYWNlaG9sZGVyRGF0YSB7XG4gIC8qKlxuICAgKiBhcnJheSBvZiBodG1sIGNsYXNzZXNcbiAgICovXG4gIGJsb2NrczogSUJsb2Nrc0RhdGFbXVxuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvXG4gICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuaW50ZXJmYWNlIElCbG9ja3NEYXRhIHtcbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIGFsdD86IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctY29udGVudC1wbGFjZWhvbGRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250ZW50LXBsYWNlaG9sZGVyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENvbnRlbnRQbGFjZWhvbGRlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElDb250ZW50UGxhY2Vob2xkZXJEYXRhO1xufSJdfQ==