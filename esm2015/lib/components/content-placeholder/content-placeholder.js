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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1wbGFjZWhvbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29udGVudC1wbGFjZWhvbGRlci9jb250ZW50LXBsYWNlaG9sZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBUWpELDRDQVNDOzs7Ozs7SUFMQyx3Q0FBcUI7Ozs7O0lBSXJCLHVDQUFZOzs7OztBQUdkLHlCQUlDOzs7SUFIQyw2QkFBaUI7O0lBQ2pCLDJCQUFlOztJQUNmLHlCQUFhOztBQU9mLE1BQU0sT0FBTywyQkFBMkI7OztZQUp2QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsb1hBQXlDO2FBQzFDOzs7bUJBRUUsS0FBSzs7OztJQUFOLDJDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDT05URU5ULVBMQUNFSE9MREVSLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBDb250ZW50UGxhY2Vob2xkZXJDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29udGVudFBsYWNlaG9sZGVyRGF0YSB7XG4gIC8qKlxuICAgKiBhcnJheSBvZiBodG1sIGNsYXNzZXNcbiAgICovXG4gIGJsb2NrczogQmxvY2tzRGF0YVtdO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvXG4gICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuaW50ZXJmYWNlIEJsb2Nrc0RhdGEge1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICBpbWFnZT86IHN0cmluZztcbiAgYWx0Pzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1jb250ZW50LXBsYWNlaG9sZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRlbnQtcGxhY2Vob2xkZXIuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudFBsYWNlaG9sZGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogQ29udGVudFBsYWNlaG9sZGVyRGF0YTtcbn1cbiJdfQ==