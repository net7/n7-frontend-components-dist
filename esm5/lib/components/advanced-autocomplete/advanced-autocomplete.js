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
    /** @type {?|undefined} */
    IAdvancedAutocompleteItem.prototype.title;
    /** @type {?|undefined} */
    IAdvancedAutocompleteItem.prototype.metadata;
    /** @type {?|undefined} */
    IAdvancedAutocompleteItem.prototype.payload;
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
                    template: "<div *ngIf=\"data\"\n     class=\"n7-advanced-autocomplete\"\n     [ngClass]=\"{ 'is-empty' : (data.results && data.results.length == 0), 'is-loading': !data.results }\">\n    <!-- If there are some results -->\n    <ng-container *ngIf=\"data.results && data.results.length > 0\">\n        <ng-container *ngTemplateOutlet=\"hasLoaded\"></ng-container>\n    </ng-container>\n    <!-- If no results are found -->\n    <ng-container *ngIf=\"data.results && data.results.length == 0\">\n        <ng-container *ngTemplateOutlet=\"isEmpty\"></ng-container>\n    </ng-container>\n    <!-- If is loading -->\n    <ng-container *ngIf=\"!data.results\">\n        <ng-container *ngTemplateOutlet=\"isLoading\"></ng-container>\n    </ng-container>\n</div>\n\n<!-- Template: Is empty -->\n<ng-template #isEmpty>\n    <div class=\"n7-advanced-autocomplete__empty\" [innerHTML]=\"data.fallback\"></div>\n</ng-template>\n\n<!-- Template: Is loading -->\n<ng-template #isLoading>\n    <!-- Layout appends loader-component here -->\n    <span class=\"n7-advanced-autocomplete__loader\"\n          id=\"n7-advanced-autocomplete__loader\">\n    </span>\n</ng-template>\n\n<!-- Template: Has loaded -->\n<ng-template #hasLoaded>\n    <!-- Search results -->\n    <div class=\"n7-advanced-autocomplete__results\">\n        <!-- Render groups -->\n        <ng-container *ngFor=\"let res of data.results\">\n            <div *ngIf=\"res.group\" class=\"n7-advanced-autocomplete__group\">\n                <div class=\"n7-advanced-autocomplete__group-title-wrapper {{ res.group.classes || '' }}\"\n                     (click)=\"onClick(res.group.payload)\">\n                    <span *ngIf=\"res.group.icon\" class=\"n7-advanced-autocomplete__group-icon {{ res.group.icon }}\"></span>\n                    <span class=\"n7-advanced-autocomplete__group-title\">{{res.group.title}}</span>\n                </div>\n                <div class=\"n7-advanced-autocomplete__items\">\n                    <ng-container *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"></ng-container>\n                </div>\n            </div>\n            <div *ngIf=\"!res.group\" class=\"n7-advanced-autocomplete__nogroup\">\n                <ng-container *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"></ng-container>\n            </div>\n        </ng-container>\n        <!-- Render items -->\n    </div>\n    <!-- Actions -->\n    <div *ngIf=\"data.actions\"\n            class=\"n7-advanced-autocomplete__action-bar\">\n        <button *ngIf=\"data.actions.advanced\"\n                (click)=\"onClick(data.actions.advanced.payload)\"\n                class=\"n7-btn n7-advanced-autocomplete__advanced-search\">\n            {{data.actions.advanced.text}}\n        </button>\n        <button *ngIf=\"data.actions.showMore\"\n                (click)=\"onClick(data.actions.showMore.payload)\"\n                class=\"n7-btn n7-btn-cta n7-advanced-autocomplete__show-more\">\n            {{data.actions.showMore.text}}\n        </button>\n    </div>\n</ng-template>\n\n<!-- Template: Items -->\n<ng-template #items let-items>\n    <div *ngFor=\"let item of items\"\n         class=\"n7-advanced-autocomplete__item\"\n         (click)=\"onClick(item.payload)\">\n        <span *ngIf=\"item.title\" class=\"n7-advanced-autocomplete__item-title\">{{ item.title }}</span>\n        <ng-container *ngIf=\"item.metadata\">\n            <span *ngFor=\"let meta of item.metadata\" class=\"n7-advanced-autocomplete__item-metadata\">\n                <span *ngIf=\"meta.key\" class=\"n7-advanced-autocomplete__item-metadata-key\">{{ meta.key }}</span>\n                <span *ngIf=\"meta.value\" class=\"n7-advanced-autocomplete__item-metadata-value\">{{ meta.value }}</span>\n            </span>\n        </ng-container>\n    </div>\n</ng-template>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtYXV0b2NvbXBsZXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hZHZhbmNlZC1hdXRvY29tcGxldGUvYWR2YW5jZWQtYXV0b2NvbXBsZXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFLakQsK0NBaUJDOzs7SUFoQkMsNENBQTBDOztJQUMxQyw0Q0FXQzs7SUFDRCw2Q0FBaUI7O0lBQ2pCLDRDQUFjOztJQUNkLDBDQUFZOzs7OztBQUdkLHdDQUlDOzs7SUFIQywwQ0FBZTs7SUFDZiw2Q0FBbUQ7O0lBQ25ELDRDQUFjOzs7OztBQUdoQiw0Q0FRQzs7O0lBUEMsOENBQW1DOztJQUNuQyw4Q0FLQzs7QUFHSDtJQUFBO0lBYUEsQ0FBQzs7Ozs7SUFMQywrQ0FBTzs7OztJQUFQLFVBQVEsT0FBTztRQUNiLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLDB2SEFBMkM7aUJBQzVDOzs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLOztJQU9SLG9DQUFDO0NBQUEsQUFiRCxJQWFDO1NBVFksNkJBQTZCOzs7SUFDeEMsNkNBQXlDOztJQUN6Qyw2Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQURWQU5DRUQtQVVUT0NPTVBMRVRFLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBBZHZhbmNlZEF1dG9jb21wbGV0ZUNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUFkdmFuY2VkQXV0b2NvbXBsZXRlRGF0YSB7XG4gIHJlc3VsdHM/OiBJQWR2YW5jZWRBdXRvY29tcGxldGVSZXNwb25zZVtdO1xuICBhY3Rpb25zPzoge1xuICAgIGFkdmFuY2VkPzoge1xuICAgICAgdGV4dDogc3RyaW5nO1xuICAgICAgcGF5bG9hZDogYW55O1xuICAgICAgY2xhc3Nlcz86IGFueTtcbiAgICB9XG4gICAgc2hvd01vcmU/OiB7XG4gICAgICB0ZXh0OiBzdHJpbmc7XG4gICAgICBwYXlsb2FkOiBhbnk7XG4gICAgICBjbGFzc2VzPzogYW55O1xuICAgIH1cbiAgfVxuICBmYWxsYmFjazogc3RyaW5nO1xuICBjbGFzc2VzPzogYW55O1xuICBfbWV0YT86IGFueTtcbn1cblxuaW50ZXJmYWNlIElBZHZhbmNlZEF1dG9jb21wbGV0ZUl0ZW0ge1xuICB0aXRsZT86IHN0cmluZztcbiAgbWV0YWRhdGE/OiBBcnJheTx7IGtleT86IHN0cmluZywgdmFsdWU/OiBzdHJpbmcgfT47XG4gIHBheWxvYWQ/OiBhbnk7XG59XG5cbmludGVyZmFjZSBJQWR2YW5jZWRBdXRvY29tcGxldGVSZXNwb25zZSB7XG4gIGl0ZW1zOiBJQWR2YW5jZWRBdXRvY29tcGxldGVJdGVtW107XG4gIGdyb3VwPzoge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgY2xhc3Nlcz86IHN0cmluZztcbiAgICBpY29uPzogc3RyaW5nO1xuICAgIHBheWxvYWQ/OiBhbnk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctYWR2YW5jZWQtYXV0b2NvbXBsZXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkdmFuY2VkLWF1dG9jb21wbGV0ZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBZHZhbmNlZEF1dG9jb21wbGV0ZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElBZHZhbmNlZEF1dG9jb21wbGV0ZURhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNsaWNrKHBheWxvYWQpe1xuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxufSJdfQ==