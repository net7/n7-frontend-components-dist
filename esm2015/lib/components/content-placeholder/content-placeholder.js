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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1wbGFjZWhvbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29udGVudC1wbGFjZWhvbGRlci9jb250ZW50LXBsYWNlaG9sZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBUWpELDRDQVNDOzs7Ozs7SUFMQyx3Q0FBcUI7Ozs7O0lBSXJCLHVDQUFZOzs7OztBQUdkLHlCQUlDOzs7SUFIQyw2QkFBaUI7O0lBQ2pCLDJCQUFlOztJQUNmLHlCQUFhOztBQU9mLE1BQU0sT0FBTywyQkFBMkI7OztZQUp2QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsOFhBQXlDO2FBQzFDOzs7bUJBRUUsS0FBSzs7OztJQUFOLDJDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIENPTlRFTlQtUExBQ0VIT0xERVIudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIENvbnRlbnRQbGFjZWhvbGRlckNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29udGVudFBsYWNlaG9sZGVyRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogYXJyYXkgb2YgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgYmxvY2tzOiBCbG9ja3NEYXRhW107XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBCbG9ja3NEYXRhIHtcclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gIGltYWdlPzogc3RyaW5nO1xyXG4gIGFsdD86IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1jb250ZW50LXBsYWNlaG9sZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29udGVudC1wbGFjZWhvbGRlci5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGVudFBsYWNlaG9sZGVyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBDb250ZW50UGxhY2Vob2xkZXJEYXRhO1xyXG59XHJcbiJdfQ==