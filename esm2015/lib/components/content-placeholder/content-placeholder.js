/**
 * @fileoverview added by tsickle
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
export class ContentPlaceholderComponent {
}
ContentPlaceholderComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-content-placeholder',
                template: "<div *ngIf=\"data\" class=\"n7-content-placeholder\">\r\n  <ng-container *ngFor=\"let b of data.blocks\">\r\n    <div *ngIf=\"!b.image\" class=\"n7-content-placeholder__item {{b.classes || ''}}\"></div>\r\n    <img *ngIf=\"b.image\" class=\"n7-content-placeholder__image {{b.classes || ''}}\" src=\"{{b.image}}\" alt=\"{{ b.alt || '' }}\">\r\n  </ng-container>\r\n</div>"
            }] }
];
ContentPlaceholderComponent.propDecorators = {
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ContentPlaceholderComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1wbGFjZWhvbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29udGVudC1wbGFjZWhvbGRlci9jb250ZW50LXBsYWNlaG9sZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7QUFRakQsNkNBU0M7Ozs7OztJQUxDLHlDQUFxQjs7Ozs7SUFJckIsd0NBQVk7Ozs7O0FBR2QsMEJBSUM7OztJQUhDLDhCQUFpQjs7SUFDakIsNEJBQWU7O0lBQ2YsMEJBQWE7O0FBT2YsTUFBTSxPQUFPLDJCQUEyQjs7O1lBSnZDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyw4WEFBeUM7YUFDMUM7OzttQkFFRSxLQUFLOzs7O0lBQU4sMkNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQ09OVEVOVC1QTEFDRUhPTERFUi50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgQ29udGVudFBsYWNlaG9sZGVyQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29udGVudFBsYWNlaG9sZGVyRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogYXJyYXkgb2YgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgYmxvY2tzOiBJQmxvY2tzRGF0YVtdXHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJQmxvY2tzRGF0YSB7XHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICBpbWFnZT86IHN0cmluZztcclxuICBhbHQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctY29udGVudC1wbGFjZWhvbGRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRlbnQtcGxhY2Vob2xkZXIuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRlbnRQbGFjZWhvbGRlckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogSUNvbnRlbnRQbGFjZWhvbGRlckRhdGE7XHJcbn0iXX0=