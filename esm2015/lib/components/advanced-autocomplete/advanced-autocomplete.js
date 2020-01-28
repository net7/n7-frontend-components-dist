/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/advanced-autocomplete/advanced-autocomplete.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// ADVANCED-AUTOCOMPLETE.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for AdvancedAutocompleteComponent's "data"
 * @record
 */
export function IAdvancedAutocompleteData() { }
if (false) {
    /** @type {?|undefined} */
    IAdvancedAutocompleteData.prototype.results;
    /** @type {?|undefined} */
    IAdvancedAutocompleteData.prototype.actions;
    /** @type {?} */
    IAdvancedAutocompleteData.prototype.fallback;
    /** @type {?|undefined} */
    IAdvancedAutocompleteData.prototype.classes;
    /** @type {?|undefined} */
    IAdvancedAutocompleteData.prototype._meta;
}
/**
 * @record
 */
function IAdvancedAutocompleteItem() { }
if (false) {
    /**
     * anchor <a>
     * @type {?|undefined}
     */
    IAdvancedAutocompleteItem.prototype.anchor;
    /**
     * Rendered text for the result item
     * @type {?|undefined}
     */
    IAdvancedAutocompleteItem.prototype.title;
    /**
     * Additional metadata for the result item
     * @type {?|undefined}
     */
    IAdvancedAutocompleteItem.prototype.metadata;
}
/**
 * @record
 */
function IAdvancedAutocompleteResponse() { }
if (false) {
    /** @type {?} */
    IAdvancedAutocompleteResponse.prototype.items;
    /** @type {?|undefined} */
    IAdvancedAutocompleteResponse.prototype.group;
}
export class AdvancedAutocompleteComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
}
AdvancedAutocompleteComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-advanced-autocomplete',
                template: "<div *ngIf=\"data\"\r\n     class=\"n7-advanced-autocomplete\"\r\n     [ngClass]=\"{ 'is-empty' : (data.results && data.results.length == 0), 'is-loading': !data.results }\">\r\n    <!-- If there are some results -->\r\n    <ng-container *ngIf=\"data.results && data.results.length > 0\">\r\n        <ng-container *ngTemplateOutlet=\"hasLoaded\"></ng-container>\r\n    </ng-container>\r\n    <!-- If no results are found -->\r\n    <ng-container *ngIf=\"data.results && data.results.length == 0\">\r\n        <ng-container *ngTemplateOutlet=\"isEmpty\"></ng-container>\r\n    </ng-container>\r\n    <!-- If is loading -->\r\n    <ng-container *ngIf=\"!data.results\">\r\n        <ng-container *ngTemplateOutlet=\"isLoading\"></ng-container>\r\n    </ng-container>\r\n</div>\r\n\r\n<!-- Template: Is empty -->\r\n<ng-template #isEmpty>\r\n    <div class=\"n7-advanced-autocomplete__empty\" [innerHTML]=\"data.fallback\"></div>\r\n</ng-template>\r\n\r\n<!-- Template: Is loading -->\r\n<ng-template #isLoading>\r\n    <!-- Layout appends loader-component here -->\r\n    <span class=\"n7-advanced-autocomplete__loader\"\r\n          id=\"n7-advanced-autocomplete__loader\">\r\n    </span>\r\n</ng-template>\r\n\r\n<!-- Template: Has loaded -->\r\n<ng-template #hasLoaded>\r\n    <!-- Search results -->\r\n    <div class=\"n7-advanced-autocomplete__results\">\r\n        <!-- Render groups -->\r\n        <ng-container *ngFor=\"let res of data.results\">\r\n            <div *ngIf=\"res.group\" class=\"n7-advanced-autocomplete__group\">\r\n                <div class=\"n7-advanced-autocomplete__group-title-wrapper {{ res.group.classes || '' }}\">\r\n                    <n7-anchor-wrapper\r\n                    [data]=\"res.group.anchor\"\r\n                    (clicked)=\"onClick($event)\">\r\n                        <span *ngIf=\"res.group.icon\" class=\"n7-advanced-autocomplete__group-icon {{ res.group.icon }}\"></span>\r\n                        <span class=\"n7-advanced-autocomplete__group-title\">{{res.group.title}}</span>\r\n                    </n7-anchor-wrapper>\r\n                </div>\r\n                <!-- Render items -->\r\n                <div class=\"n7-advanced-autocomplete__items\">\r\n                    <ng-container *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"></ng-container>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"!res.group\" class=\"n7-advanced-autocomplete__nogroup\">\r\n                <ng-container *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"></ng-container>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- Actions -->\r\n    <div *ngIf=\"data.actions\"\r\n    class=\"n7-advanced-autocomplete__action-bar\">\r\n        <n7-anchor-wrapper\r\n        *ngIf=\"data.actions.advanced\"\r\n        [data]=\"data.actions.advanced.anchor\"\r\n        (clicked)=\"onClick($event)\"\r\n        [classes]=\"'n7-btn n7-advanced-autocomplete__advanced-search'\">\r\n            {{data.actions.advanced.text}}\r\n        </n7-anchor-wrapper>\r\n        \r\n        <n7-anchor-wrapper\r\n        *ngIf=\"data.actions.showMore\"\r\n        [data]=\"data.actions.showMore.anchor\"\r\n        (clicked)=\"onClick($event)\"\r\n        [classes]=\"'n7-btn n7-btn-cta n7-advanced-autocomplete__show-more'\">\r\n            {{data.actions.showMore.text}}\r\n        </n7-anchor-wrapper>\r\n    </div>\r\n</ng-template>\r\n\r\n<!-- Template: Items -->\r\n<ng-template #items let-items>\r\n    <n7-anchor-wrapper *ngFor=\"let item of items\"\r\n    [data]=\"item.anchor\"\r\n    (clicked)=\"onClick($event)\"\r\n    [classes]=\"'n7-advanced-autocomplete__item'\">\r\n    <span *ngIf=\"item.title\" class=\"n7-advanced-autocomplete__item-title\" [innerHTML]=\"item.title\"></span>\r\n    <ng-container *ngIf=\"item.metadata\">\r\n        <span *ngFor=\"let meta of item.metadata\" class=\"n7-advanced-autocomplete__item-metadata\">\r\n            <span *ngIf=\"meta.key\" class=\"n7-advanced-autocomplete__item-metadata-key\">{{ meta.key }}</span>\r\n            <span *ngIf=\"meta.value\" class=\"n7-advanced-autocomplete__item-metadata-value\">{{ meta.value }}</span>\r\n        </span>\r\n    </ng-container>\r\n    </n7-anchor-wrapper>\r\n</ng-template>"
            }] }
];
AdvancedAutocompleteComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AdvancedAutocompleteComponent.prototype.data;
    /** @type {?} */
    AdvancedAutocompleteComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtYXV0b2NvbXBsZXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hZHZhbmNlZC1hdXRvY29tcGxldGUvYWR2YW5jZWQtYXV0b2NvbXBsZXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBTWpELCtDQWlCQzs7O0lBaEJDLDRDQUEwQzs7SUFDMUMsNENBV0M7O0lBQ0QsNkNBQWlCOztJQUNqQiw0Q0FBYzs7SUFDZCwwQ0FBWTs7Ozs7QUFHZCx3Q0FhQzs7Ozs7O0lBVEMsMkNBQWlCOzs7OztJQUlqQiwwQ0FBZTs7Ozs7SUFJZiw2Q0FBbUQ7Ozs7O0FBR3JELDRDQVFDOzs7SUFQQyw4Q0FBbUM7O0lBQ25DLDhDQUtDOztBQU9ILE1BQU0sT0FBTyw2QkFBNkI7Ozs7O0lBSXhDLE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUFaRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsMnJJQUEyQzthQUM1Qzs7O21CQUVFLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLDZDQUF5Qzs7SUFDekMsNkNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQURWQU5DRUQtQVVUT0NPTVBMRVRFLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBBZHZhbmNlZEF1dG9jb21wbGV0ZUNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElBZHZhbmNlZEF1dG9jb21wbGV0ZURhdGEge1xyXG4gIHJlc3VsdHM/OiBJQWR2YW5jZWRBdXRvY29tcGxldGVSZXNwb25zZVtdO1xyXG4gIGFjdGlvbnM/OiB7XHJcbiAgICBhZHZhbmNlZD86IHtcclxuICAgICAgdGV4dDogc3RyaW5nO1xyXG4gICAgICBhbmNob3I/OiBJQW5jaG9yO1xyXG4gICAgICBjbGFzc2VzPzogYW55O1xyXG4gICAgfVxyXG4gICAgc2hvd01vcmU/OiB7XHJcbiAgICAgIHRleHQ6IHN0cmluZztcclxuICAgICAgYW5jaG9yPzogSUFuY2hvcjtcclxuICAgICAgY2xhc3Nlcz86IGFueTtcclxuICAgIH1cclxuICB9XHJcbiAgZmFsbGJhY2s6IHN0cmluZztcclxuICBjbGFzc2VzPzogYW55O1xyXG4gIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUFkdmFuY2VkQXV0b2NvbXBsZXRlSXRlbSB7XHJcbiAgLyoqXHJcbiAgICogYW5jaG9yIDxhPlxyXG4gICAqL1xyXG4gIGFuY2hvcj86IElBbmNob3I7XHJcbiAgLyoqXHJcbiAgICogUmVuZGVyZWQgdGV4dCBmb3IgdGhlIHJlc3VsdCBpdGVtXHJcbiAgICovXHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBtZXRhZGF0YSBmb3IgdGhlIHJlc3VsdCBpdGVtXHJcbiAgICovXHJcbiAgbWV0YWRhdGE/OiBBcnJheTx7IGtleT86IHN0cmluZywgdmFsdWU/OiBzdHJpbmcgfT47XHJcbn1cclxuXHJcbmludGVyZmFjZSBJQWR2YW5jZWRBdXRvY29tcGxldGVSZXNwb25zZSB7XHJcbiAgaXRlbXM6IElBZHZhbmNlZEF1dG9jb21wbGV0ZUl0ZW1bXTtcclxuICBncm91cD86IHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gICAgaWNvbj86IHN0cmluZztcclxuICAgIGFuY2hvcj86IElBbmNob3I7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWFkdmFuY2VkLWF1dG9jb21wbGV0ZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FkdmFuY2VkLWF1dG9jb21wbGV0ZS5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQWR2YW5jZWRBdXRvY29tcGxldGVDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IElBZHZhbmNlZEF1dG9jb21wbGV0ZURhdGE7XHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBvbkNsaWNrKHBheWxvYWQpe1xyXG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcbn0iXX0=