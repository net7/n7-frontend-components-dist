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
export function AdvancedAutocompleteData() { }
if (false) {
    /** @type {?|undefined} */
    AdvancedAutocompleteData.prototype.results;
    /** @type {?|undefined} */
    AdvancedAutocompleteData.prototype.actions;
    /** @type {?} */
    AdvancedAutocompleteData.prototype.fallback;
    /** @type {?|undefined} */
    AdvancedAutocompleteData.prototype.classes;
    /** @type {?|undefined} */
    AdvancedAutocompleteData.prototype._meta;
}
/**
 * @record
 */
function AdvancedAutocompleteItem() { }
if (false) {
    /**
     * anchor <a>
     * @type {?|undefined}
     */
    AdvancedAutocompleteItem.prototype.anchor;
    /**
     * Rendered text for the result item
     * @type {?|undefined}
     */
    AdvancedAutocompleteItem.prototype.title;
    /**
     * Additional metadata for the result item
     * @type {?|undefined}
     */
    AdvancedAutocompleteItem.prototype.metadata;
}
/**
 * @record
 */
function AdvancedAutocompleteResponse() { }
if (false) {
    /** @type {?} */
    AdvancedAutocompleteResponse.prototype.items;
    /** @type {?|undefined} */
    AdvancedAutocompleteResponse.prototype.group;
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
                template: "<div *ngIf=\"data\" class=\"n7-advanced-autocomplete\"\r\n    [ngClass]=\"{ 'is-empty' : (data.results && data.results.length === 0), 'is-loading': !data.results }\">\r\n    <!-- If there are some results -->\r\n    <ng-container *ngIf=\"data.results && data.results.length > 0\">\r\n        <ng-container *ngTemplateOutlet=\"hasLoaded\"></ng-container>\r\n    </ng-container>\r\n    <!-- If no results are found -->\r\n    <ng-container *ngIf=\"data.results && data.results.length === 0\">\r\n        <ng-container *ngTemplateOutlet=\"isEmpty\"></ng-container>\r\n    </ng-container>\r\n    <!-- If is loading -->\r\n    <ng-container *ngIf=\"!data.results\">\r\n        <ng-container *ngTemplateOutlet=\"isLoading\"></ng-container>\r\n    </ng-container>\r\n</div>\r\n\r\n<!-- Template: Is empty -->\r\n<ng-template #isEmpty>\r\n    <div class=\"n7-advanced-autocomplete__empty\" [innerHTML]=\"data.fallback\"></div>\r\n    <!-- Render actions -->\r\n    <ng-container *ngTemplateOutlet=\"actions; context:{$implicit: data.actions}\"></ng-container>\r\n</ng-template>\r\n\r\n<!-- Template: Is loading -->\r\n<ng-template #isLoading>\r\n    <!-- Layout appends loader-component here -->\r\n    <span class=\"n7-advanced-autocomplete__loader\" id=\"n7-advanced-autocomplete__loader\"></span>\r\n</ng-template>\r\n\r\n<!-- Template: Has loaded -->\r\n<ng-template #hasLoaded>\r\n    <!-- Search results -->\r\n    <div class=\"n7-advanced-autocomplete__results\">\r\n        <!-- Render groups -->\r\n        <ng-container *ngFor=\"let res of data.results\">\r\n            <div *ngIf=\"res.group\" class=\"n7-advanced-autocomplete__group\">\r\n                <div class=\"n7-advanced-autocomplete__group-title-wrapper {{ res.group.classes || '' }}\">\r\n                    <n7-anchor-wrapper\r\n                        [data]=\"res.group.anchor\"\r\n                        (clicked)=\"onClick($event)\">\r\n                        <span *ngIf=\"res.group.icon\" class=\"n7-advanced-autocomplete__group-icon {{ res.group.icon }}\"></span>\r\n                        <span class=\"n7-advanced-autocomplete__group-title\">{{res.group.title}}</span>\r\n                    </n7-anchor-wrapper>\r\n                </div>\r\n                <!-- Render items -->\r\n                <div class=\"n7-advanced-autocomplete__items\">\r\n                    <ng-container *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"></ng-container>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"!res.group\" class=\"n7-advanced-autocomplete__nogroup\">\r\n                <ng-container *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"></ng-container>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- Actions -->\r\n    <ng-container *ngTemplateOutlet=\"actions; context:{$implicit: data.actions}\"></ng-container>\r\n</ng-template>\r\n\r\n<!-- Template: Items -->\r\n<ng-template #items let-items>\r\n    <n7-anchor-wrapper *ngFor=\"let item of items\"\r\n    [data]=\"item.anchor\"\r\n    (clicked)=\"onClick($event)\"\r\n    [classes]=\"'n7-advanced-autocomplete__item'\">\r\n    <span *ngIf=\"item.title\" class=\"n7-advanced-autocomplete__item-title\" [innerHTML]=\"item.title\"></span>\r\n    <ng-container *ngIf=\"item.metadata\">\r\n        <span *ngFor=\"let meta of item.metadata\" class=\"n7-advanced-autocomplete__item-metadata\">\r\n            <span *ngIf=\"meta.key\" class=\"n7-advanced-autocomplete__item-metadata-key\">{{ meta.key }}</span>\r\n            <span *ngIf=\"meta.value\" class=\"n7-advanced-autocomplete__item-metadata-value\">{{ meta.value }}</span>\r\n        </span>\r\n    </ng-container>\r\n    </n7-anchor-wrapper>\r\n</ng-template>\r\n\r\n<!-- Template: Actions -->\r\n<ng-template #actions let-actions>\r\n    <div *ngIf=\"actions\" class=\"n7-advanced-autocomplete__action-bar\">\r\n        <n7-anchor-wrapper *ngIf=\"actions.advanced\" [data]=\"actions.advanced.anchor\"\r\n            (clicked)=\"onClick($event)\" [classes]=\"'n7-btn n7-advanced-autocomplete__advanced-search'\">\r\n            {{actions.advanced.text}}\r\n        </n7-anchor-wrapper>\r\n\r\n        <n7-anchor-wrapper *ngIf=\"actions.showMore\" [data]=\"actions.showMore.anchor\"\r\n            (clicked)=\"onClick($event)\" [classes]=\"'n7-btn n7-btn-cta n7-advanced-autocomplete__show-more'\">\r\n            {{actions.showMore.text}}\r\n        </n7-anchor-wrapper>\r\n    </div>\r\n</ng-template>\r\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtYXV0b2NvbXBsZXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hZHZhbmNlZC1hdXRvY29tcGxldGUvYWR2YW5jZWQtYXV0b2NvbXBsZXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBTWpELDhDQWlCQzs7O0lBaEJDLDJDQUF5Qzs7SUFDekMsMkNBV0U7O0lBQ0YsNENBQWlCOztJQUNqQiwyQ0FBYzs7SUFDZCx5Q0FBWTs7Ozs7QUFHZCx1Q0FhQzs7Ozs7O0lBVEMsMENBQWdCOzs7OztJQUloQix5Q0FBZTs7Ozs7SUFJZiw0Q0FBbUQ7Ozs7O0FBR3JELDJDQVFDOzs7SUFQQyw2Q0FBa0M7O0lBQ2xDLDZDQUtFOztBQU9KLE1BQU0sT0FBTyw2QkFBNkI7Ozs7O0lBS3hDLE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUFiRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsbzRJQUEyQzthQUM1Qzs7O21CQUVFLEtBQUs7bUJBRUwsS0FBSzs7OztJQUZOLDZDQUF3Qzs7SUFFeEMsNkNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQURWQU5DRUQtQVVUT0NPTVBMRVRFLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEFkdmFuY2VkQXV0b2NvbXBsZXRlQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWR2YW5jZWRBdXRvY29tcGxldGVEYXRhIHtcclxuICByZXN1bHRzPzogQWR2YW5jZWRBdXRvY29tcGxldGVSZXNwb25zZVtdO1xyXG4gIGFjdGlvbnM/OiB7XHJcbiAgICBhZHZhbmNlZD86IHtcclxuICAgICAgdGV4dDogc3RyaW5nO1xyXG4gICAgICBhbmNob3I/OiBBbmNob3I7XHJcbiAgICAgIGNsYXNzZXM/OiBhbnk7XHJcbiAgICB9O1xyXG4gICAgc2hvd01vcmU/OiB7XHJcbiAgICAgIHRleHQ6IHN0cmluZztcclxuICAgICAgYW5jaG9yPzogQW5jaG9yO1xyXG4gICAgICBjbGFzc2VzPzogYW55O1xyXG4gICAgfTtcclxuICB9O1xyXG4gIGZhbGxiYWNrOiBzdHJpbmc7XHJcbiAgY2xhc3Nlcz86IGFueTtcclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuaW50ZXJmYWNlIEFkdmFuY2VkQXV0b2NvbXBsZXRlSXRlbSB7XHJcbiAgLyoqXHJcbiAgICogYW5jaG9yIDxhPlxyXG4gICAqL1xyXG4gIGFuY2hvcj86IEFuY2hvcjtcclxuICAvKipcclxuICAgKiBSZW5kZXJlZCB0ZXh0IGZvciB0aGUgcmVzdWx0IGl0ZW1cclxuICAgKi9cclxuICB0aXRsZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIG1ldGFkYXRhIGZvciB0aGUgcmVzdWx0IGl0ZW1cclxuICAgKi9cclxuICBtZXRhZGF0YT86IEFycmF5PHsga2V5Pzogc3RyaW5nOyB2YWx1ZT86IHN0cmluZyB9PjtcclxufVxyXG5cclxuaW50ZXJmYWNlIEFkdmFuY2VkQXV0b2NvbXBsZXRlUmVzcG9uc2Uge1xyXG4gIGl0ZW1zOiBBZHZhbmNlZEF1dG9jb21wbGV0ZUl0ZW1bXTtcclxuICBncm91cD86IHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gICAgaWNvbj86IHN0cmluZztcclxuICAgIGFuY2hvcj86IEFuY2hvcjtcclxuICB9O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWFkdmFuY2VkLWF1dG9jb21wbGV0ZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FkdmFuY2VkLWF1dG9jb21wbGV0ZS5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQWR2YW5jZWRBdXRvY29tcGxldGVDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IEFkdmFuY2VkQXV0b2NvbXBsZXRlRGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBvbkNsaWNrKHBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxufVxyXG4iXX0=