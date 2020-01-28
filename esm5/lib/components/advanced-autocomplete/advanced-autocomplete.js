/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
var AdvancedAutocompleteComponent = /** @class */ (function () {
    function AdvancedAutocompleteComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    AdvancedAutocompleteComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    AdvancedAutocompleteComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-advanced-autocomplete',
                    template: "<div *ngIf=\"data\"\n     class=\"n7-advanced-autocomplete\"\n     [ngClass]=\"{ 'is-empty' : (data.results && data.results.length == 0), 'is-loading': !data.results }\">\n    <!-- If there are some results -->\n    <ng-container *ngIf=\"data.results && data.results.length > 0\">\n        <ng-container *ngTemplateOutlet=\"hasLoaded\"></ng-container>\n    </ng-container>\n    <!-- If no results are found -->\n    <ng-container *ngIf=\"data.results && data.results.length == 0\">\n        <ng-container *ngTemplateOutlet=\"isEmpty\"></ng-container>\n    </ng-container>\n    <!-- If is loading -->\n    <ng-container *ngIf=\"!data.results\">\n        <ng-container *ngTemplateOutlet=\"isLoading\"></ng-container>\n    </ng-container>\n</div>\n\n<!-- Template: Is empty -->\n<ng-template #isEmpty>\n    <div class=\"n7-advanced-autocomplete__empty\" [innerHTML]=\"data.fallback\"></div>\n</ng-template>\n\n<!-- Template: Is loading -->\n<ng-template #isLoading>\n    <!-- Layout appends loader-component here -->\n    <span class=\"n7-advanced-autocomplete__loader\"\n          id=\"n7-advanced-autocomplete__loader\">\n    </span>\n</ng-template>\n\n<!-- Template: Has loaded -->\n<ng-template #hasLoaded>\n    <!-- Search results -->\n    <div class=\"n7-advanced-autocomplete__results\">\n        <!-- Render groups -->\n        <ng-container *ngFor=\"let res of data.results\">\n            <div *ngIf=\"res.group\" class=\"n7-advanced-autocomplete__group\">\n                <div class=\"n7-advanced-autocomplete__group-title-wrapper {{ res.group.classes || '' }}\">\n                    <n7-anchor-wrapper\n                    [data]=\"res.group.anchor\"\n                    (clicked)=\"onClick($event)\">\n                        <span *ngIf=\"res.group.icon\" class=\"n7-advanced-autocomplete__group-icon {{ res.group.icon }}\"></span>\n                        <span class=\"n7-advanced-autocomplete__group-title\">{{res.group.title}}</span>\n                    </n7-anchor-wrapper>\n                </div>\n                <!-- Render items -->\n                <div class=\"n7-advanced-autocomplete__items\">\n                    <ng-container *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"></ng-container>\n                </div>\n            </div>\n            <div *ngIf=\"!res.group\" class=\"n7-advanced-autocomplete__nogroup\">\n                <ng-container *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"></ng-container>\n            </div>\n        </ng-container>\n    </div>\n    <!-- Actions -->\n    <div *ngIf=\"data.actions\"\n    class=\"n7-advanced-autocomplete__action-bar\">\n        <n7-anchor-wrapper\n        *ngIf=\"data.actions.advanced\"\n        [data]=\"data.actions.advanced.anchor\"\n        (clicked)=\"onClick($event)\"\n        [classes]=\"'n7-btn n7-advanced-autocomplete__advanced-search'\">\n            {{data.actions.advanced.text}}\n        </n7-anchor-wrapper>\n        \n        <n7-anchor-wrapper\n        *ngIf=\"data.actions.showMore\"\n        [data]=\"data.actions.showMore.anchor\"\n        (clicked)=\"onClick($event)\"\n        [classes]=\"'n7-btn n7-btn-cta n7-advanced-autocomplete__show-more'\">\n            {{data.actions.showMore.text}}\n        </n7-anchor-wrapper>\n    </div>\n</ng-template>\n\n<!-- Template: Items -->\n<ng-template #items let-items>\n    <n7-anchor-wrapper *ngFor=\"let item of items\"\n    [data]=\"item.anchor\"\n    (clicked)=\"onClick($event)\"\n    [classes]=\"'n7-advanced-autocomplete__item'\">\n    <span *ngIf=\"item.title\" class=\"n7-advanced-autocomplete__item-title\" [innerHTML]=\"item.title\"></span>\n    <ng-container *ngIf=\"item.metadata\">\n        <span *ngFor=\"let meta of item.metadata\" class=\"n7-advanced-autocomplete__item-metadata\">\n            <span *ngIf=\"meta.key\" class=\"n7-advanced-autocomplete__item-metadata-key\">{{ meta.key }}</span>\n            <span *ngIf=\"meta.value\" class=\"n7-advanced-autocomplete__item-metadata-value\">{{ meta.value }}</span>\n        </span>\n    </ng-container>\n    </n7-anchor-wrapper>\n</ng-template>"
                }] }
    ];
    AdvancedAutocompleteComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return AdvancedAutocompleteComponent;
}());
export { AdvancedAutocompleteComponent };
if (false) {
    /** @type {?} */
    AdvancedAutocompleteComponent.prototype.data;
    /** @type {?} */
    AdvancedAutocompleteComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtYXV0b2NvbXBsZXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hZHZhbmNlZC1hdXRvY29tcGxldGUvYWR2YW5jZWQtYXV0b2NvbXBsZXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFNakQsK0NBaUJDOzs7SUFoQkMsNENBQTBDOztJQUMxQyw0Q0FXQzs7SUFDRCw2Q0FBaUI7O0lBQ2pCLDRDQUFjOztJQUNkLDBDQUFZOzs7OztBQUdkLHdDQWFDOzs7Ozs7SUFUQywyQ0FBaUI7Ozs7O0lBSWpCLDBDQUFlOzs7OztJQUlmLDZDQUFtRDs7Ozs7QUFHckQsNENBUUM7OztJQVBDLDhDQUFtQzs7SUFDbkMsOENBS0M7O0FBR0g7SUFBQTtJQWFBLENBQUM7Ozs7O0lBTEMsK0NBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDYixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQVpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyx1Z0lBQTJDO2lCQUM1Qzs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUFPUixvQ0FBQztDQUFBLEFBYkQsSUFhQztTQVRZLDZCQUE2Qjs7O0lBQ3hDLDZDQUF5Qzs7SUFDekMsNkNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEFEVkFOQ0VELUFVVE9DT01QTEVURS50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEFkdmFuY2VkQXV0b2NvbXBsZXRlQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJQWR2YW5jZWRBdXRvY29tcGxldGVEYXRhIHtcbiAgcmVzdWx0cz86IElBZHZhbmNlZEF1dG9jb21wbGV0ZVJlc3BvbnNlW107XG4gIGFjdGlvbnM/OiB7XG4gICAgYWR2YW5jZWQ/OiB7XG4gICAgICB0ZXh0OiBzdHJpbmc7XG4gICAgICBhbmNob3I/OiBJQW5jaG9yO1xuICAgICAgY2xhc3Nlcz86IGFueTtcbiAgICB9XG4gICAgc2hvd01vcmU/OiB7XG4gICAgICB0ZXh0OiBzdHJpbmc7XG4gICAgICBhbmNob3I/OiBJQW5jaG9yO1xuICAgICAgY2xhc3Nlcz86IGFueTtcbiAgICB9XG4gIH1cbiAgZmFsbGJhY2s6IHN0cmluZztcbiAgY2xhc3Nlcz86IGFueTtcbiAgX21ldGE/OiBhbnk7XG59XG5cbmludGVyZmFjZSBJQWR2YW5jZWRBdXRvY29tcGxldGVJdGVtIHtcbiAgLyoqXG4gICAqIGFuY2hvciA8YT5cbiAgICovXG4gIGFuY2hvcj86IElBbmNob3I7XG4gIC8qKlxuICAgKiBSZW5kZXJlZCB0ZXh0IGZvciB0aGUgcmVzdWx0IGl0ZW1cbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICogQWRkaXRpb25hbCBtZXRhZGF0YSBmb3IgdGhlIHJlc3VsdCBpdGVtXG4gICAqL1xuICBtZXRhZGF0YT86IEFycmF5PHsga2V5Pzogc3RyaW5nLCB2YWx1ZT86IHN0cmluZyB9Pjtcbn1cblxuaW50ZXJmYWNlIElBZHZhbmNlZEF1dG9jb21wbGV0ZVJlc3BvbnNlIHtcbiAgaXRlbXM6IElBZHZhbmNlZEF1dG9jb21wbGV0ZUl0ZW1bXTtcbiAgZ3JvdXA/OiB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xuICAgIGljb24/OiBzdHJpbmc7XG4gICAgYW5jaG9yPzogSUFuY2hvcjtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1hZHZhbmNlZC1hdXRvY29tcGxldGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWR2YW5jZWQtYXV0b2NvbXBsZXRlLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFkdmFuY2VkQXV0b2NvbXBsZXRlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSUFkdmFuY2VkQXV0b2NvbXBsZXRlRGF0YTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2xpY2socGF5bG9hZCl7XG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG59Il19