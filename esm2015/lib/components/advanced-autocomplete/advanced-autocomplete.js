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
                template: "<div *ngIf=\"data\" class=\"n7-advanced-autocomplete\"\n    [ngClass]=\"{ 'is-empty' : (data.results && data.results.length == 0), 'is-loading': !data.results }\">\n    <!-- If there are some results -->\n    <ng-container *ngIf=\"data.results && data.results.length > 0\">\n        <ng-container *ngTemplateOutlet=\"hasLoaded\"></ng-container>\n    </ng-container>\n    <!-- If no results are found -->\n    <ng-container *ngIf=\"data.results && data.results.length == 0\">\n        <ng-container *ngTemplateOutlet=\"isEmpty\"></ng-container>\n    </ng-container>\n    <!-- If is loading -->\n    <ng-container *ngIf=\"!data.results\">\n        <ng-container *ngTemplateOutlet=\"isLoading\"></ng-container>\n    </ng-container>\n</div>\n\n<!-- Template: Is empty -->\n<ng-template #isEmpty>\n    <div class=\"n7-advanced-autocomplete__empty\" [innerHTML]=\"data.fallback\"></div>\n    <!-- Render actions -->\n    <ng-container *ngTemplateOutlet=\"actions; context:{$implicit: data.actions}\"></ng-container>\n</ng-template>\n\n<!-- Template: Is loading -->\n<ng-template #isLoading>\n    <!-- Layout appends loader-component here -->\n    <span class=\"n7-advanced-autocomplete__loader\" id=\"n7-advanced-autocomplete__loader\"></span>\n</ng-template>\n\n<!-- Template: Has loaded -->\n<ng-template #hasLoaded>\n    <!-- Search results -->\n    <div class=\"n7-advanced-autocomplete__results\">\n        <!-- Render groups -->\n        <ng-container *ngFor=\"let res of data.results\">\n            <div *ngIf=\"res.group\" class=\"n7-advanced-autocomplete__group\">\n                <div class=\"n7-advanced-autocomplete__group-title-wrapper {{ res.group.classes || '' }}\">\n                    <n7-anchor-wrapper\n                        [data]=\"res.group.anchor\"\n                        (clicked)=\"onClick($event)\">\n                        <span *ngIf=\"res.group.icon\" class=\"n7-advanced-autocomplete__group-icon {{ res.group.icon }}\"></span>\n                        <span class=\"n7-advanced-autocomplete__group-title\">{{res.group.title}}</span>\n                    </n7-anchor-wrapper>\n                </div>\n                <!-- Render items -->\n                <div class=\"n7-advanced-autocomplete__items\">\n                    <ng-container *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"></ng-container>\n                </div>\n            </div>\n            <div *ngIf=\"!res.group\" class=\"n7-advanced-autocomplete__nogroup\">\n                <ng-container *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"></ng-container>\n            </div>\n        </ng-container>\n    </div>\n    <!-- Actions -->\n    <ng-container *ngTemplateOutlet=\"actions; context:{$implicit: data.actions}\"></ng-container>\n</ng-template>\n\n<!-- Template: Items -->\n<ng-template #items let-items>\n    <n7-anchor-wrapper *ngFor=\"let item of items\"\n    [data]=\"item.anchor\"\n    (clicked)=\"onClick($event)\"\n    [classes]=\"'n7-advanced-autocomplete__item'\">\n    <span *ngIf=\"item.title\" class=\"n7-advanced-autocomplete__item-title\" [innerHTML]=\"item.title\"></span>\n    <ng-container *ngIf=\"item.metadata\">\n        <span *ngFor=\"let meta of item.metadata\" class=\"n7-advanced-autocomplete__item-metadata\">\n            <span *ngIf=\"meta.key\" class=\"n7-advanced-autocomplete__item-metadata-key\">{{ meta.key }}</span>\n            <span *ngIf=\"meta.value\" class=\"n7-advanced-autocomplete__item-metadata-value\">{{ meta.value }}</span>\n        </span>\n    </ng-container>\n    </n7-anchor-wrapper>\n</ng-template>\n\n<!-- Template: Actions -->\n<ng-template #actions let-actions>\n    <div *ngIf=\"actions\" class=\"n7-advanced-autocomplete__action-bar\">\n        <n7-anchor-wrapper *ngIf=\"actions.advanced\" [data]=\"actions.advanced.anchor\"\n            (clicked)=\"onClick($event)\" [classes]=\"'n7-btn n7-advanced-autocomplete__advanced-search'\">\n            {{actions.advanced.text}}\n        </n7-anchor-wrapper>\n\n        <n7-anchor-wrapper *ngIf=\"actions.showMore\" [data]=\"actions.showMore.anchor\"\n            (clicked)=\"onClick($event)\" [classes]=\"'n7-btn n7-btn-cta n7-advanced-autocomplete__show-more'\">\n            {{actions.showMore.text}}\n        </n7-anchor-wrapper>\n    </div>\n</ng-template>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtYXV0b2NvbXBsZXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hZHZhbmNlZC1hdXRvY29tcGxldGUvYWR2YW5jZWQtYXV0b2NvbXBsZXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBTWpELCtDQWlCQzs7O0lBaEJDLDRDQUEwQzs7SUFDMUMsNENBV0M7O0lBQ0QsNkNBQWlCOztJQUNqQiw0Q0FBYzs7SUFDZCwwQ0FBWTs7Ozs7QUFHZCx3Q0FhQzs7Ozs7O0lBVEMsMkNBQWlCOzs7OztJQUlqQiwwQ0FBZTs7Ozs7SUFJZiw2Q0FBbUQ7Ozs7O0FBR3JELDRDQVFDOzs7SUFQQyw4Q0FBbUM7O0lBQ25DLDhDQUtDOztBQU9ILE1BQU0sT0FBTyw2QkFBNkI7Ozs7O0lBSXhDLE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUFaRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsZ3RJQUEyQzthQUM1Qzs7O21CQUVFLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLDZDQUF5Qzs7SUFDekMsNkNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEFEVkFOQ0VELUFVVE9DT01QTEVURS50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEFkdmFuY2VkQXV0b2NvbXBsZXRlQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJQWR2YW5jZWRBdXRvY29tcGxldGVEYXRhIHtcbiAgcmVzdWx0cz86IElBZHZhbmNlZEF1dG9jb21wbGV0ZVJlc3BvbnNlW107XG4gIGFjdGlvbnM/OiB7XG4gICAgYWR2YW5jZWQ/OiB7XG4gICAgICB0ZXh0OiBzdHJpbmc7XG4gICAgICBhbmNob3I/OiBJQW5jaG9yO1xuICAgICAgY2xhc3Nlcz86IGFueTtcbiAgICB9XG4gICAgc2hvd01vcmU/OiB7XG4gICAgICB0ZXh0OiBzdHJpbmc7XG4gICAgICBhbmNob3I/OiBJQW5jaG9yO1xuICAgICAgY2xhc3Nlcz86IGFueTtcbiAgICB9XG4gIH1cbiAgZmFsbGJhY2s6IHN0cmluZztcbiAgY2xhc3Nlcz86IGFueTtcbiAgX21ldGE/OiBhbnk7XG59XG5cbmludGVyZmFjZSBJQWR2YW5jZWRBdXRvY29tcGxldGVJdGVtIHtcbiAgLyoqXG4gICAqIGFuY2hvciA8YT5cbiAgICovXG4gIGFuY2hvcj86IElBbmNob3I7XG4gIC8qKlxuICAgKiBSZW5kZXJlZCB0ZXh0IGZvciB0aGUgcmVzdWx0IGl0ZW1cbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICogQWRkaXRpb25hbCBtZXRhZGF0YSBmb3IgdGhlIHJlc3VsdCBpdGVtXG4gICAqL1xuICBtZXRhZGF0YT86IEFycmF5PHsga2V5Pzogc3RyaW5nLCB2YWx1ZT86IHN0cmluZyB9Pjtcbn1cblxuaW50ZXJmYWNlIElBZHZhbmNlZEF1dG9jb21wbGV0ZVJlc3BvbnNlIHtcbiAgaXRlbXM6IElBZHZhbmNlZEF1dG9jb21wbGV0ZUl0ZW1bXTtcbiAgZ3JvdXA/OiB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xuICAgIGljb24/OiBzdHJpbmc7XG4gICAgYW5jaG9yPzogSUFuY2hvcjtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1hZHZhbmNlZC1hdXRvY29tcGxldGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWR2YW5jZWQtYXV0b2NvbXBsZXRlLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFkdmFuY2VkQXV0b2NvbXBsZXRlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSUFkdmFuY2VkQXV0b2NvbXBsZXRlRGF0YTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2xpY2socGF5bG9hZCl7XG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG59Il19