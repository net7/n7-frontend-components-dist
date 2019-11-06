/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// ADVANCED-AUTOCOMPLETE.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for AdvancedAutocompleteComponent's "data"
 *
 * \@property NAME (required|options) <--- TODO: update with interface properties
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
export function IAdvancedAutocompleteResponse() { }
if (false) {
    /**
     * group of results with a title
     * NOTE: Nested groups WILL NOT BE RENDERED!
     * @type {?|undefined}
     */
    IAdvancedAutocompleteResponse.prototype.group;
    /** @type {?|undefined} */
    IAdvancedAutocompleteResponse.prototype.label;
    /** @type {?|undefined} */
    IAdvancedAutocompleteResponse.prototype.value;
    /** @type {?|undefined} */
    IAdvancedAutocompleteResponse.prototype.payload;
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
                    template: "<div *ngIf=\"data\" \r\n     class=\"n7-advanced-autocomplete\"\r\n     [ngClass]=\"{ 'is-empty' : (data.results && data.results.length == 0), 'is-loading': !data.results }\">\r\n    <!-- If there are some results -->\r\n    <ng-container *ngIf=\"data.results && data.results.length > 0\">\r\n        <ng-container *ngTemplateOutlet=\"hasLoaded\"></ng-container>\r\n    </ng-container>\r\n    <!-- If no results are found -->\r\n    <ng-container *ngIf=\"data.results && data.results.length == 0\">\r\n        <ng-container *ngTemplateOutlet=\"isEmpty\"></ng-container>\r\n    </ng-container>\r\n    <!-- If is loading -->\r\n    <ng-container *ngIf=\"!data.results\">\r\n        <ng-container *ngTemplateOutlet=\"isLoading\"></ng-container>\r\n    </ng-container>\r\n</div>\r\n\r\n<!-- Template: Is empty -->\r\n<ng-template #isEmpty>\r\n    <div class=\"n7-advanced-autocomplete__empty\" [innerHTML]=\"data.fallback\"></div>\r\n</ng-template>\r\n\r\n<!-- Template: Is loading -->\r\n<ng-template #isLoading>\r\n    <!-- Layout appends loader-component here -->\r\n    <span class=\"n7-advanced-autocomplete__loader\" \r\n          id=\"n7-advanced-autocomplete__loader\">\r\n    </span>\r\n</ng-template>\r\n\r\n<!-- Template: Has loaded -->\r\n<ng-template #hasLoaded>\r\n    <!-- Search results -->\r\n    <div class=\"n7-advanced-autocomplete__results\">\r\n        <!-- Render groups -->\r\n        <ng-container *ngFor=\"let res of data.results\">\r\n            <div *ngIf=\"res.group\" class=\"n7-advanced-autocomplete__group\">\r\n                <div class=\"n7-advanced-autocomplete__group-title-wrapper {{ res.group.classes || '' }}\"\r\n                     (click)=\"onClick(res.group.payload)\">\r\n                    <span *ngIf=\"res.group.icon\" class=\"n7-advanced-autocomplete__group-icon {{ res.group.icon }}\"></span>\r\n                    <span class=\"n7-advanced-autocomplete__group-title\">{{res.group.title}}</span>\r\n                </div>\r\n                <div class=\"n7-advanced-autocomplete__items\">\r\n                    <ng-container *ngTemplateOutlet=\"items; context:{$implicit: res.group.items}\"></ng-container>\r\n                </div>\r\n            </div>\r\n        </ng-container>\r\n        <!-- Render items -->\r\n        <ng-container *ngTemplateOutlet=\"items; context:{$implicit: data.results}\"></ng-container>\r\n    </div>\r\n    <!-- Actions -->\r\n    <div *ngIf=\"data.actions\" \r\n            class=\"n7-advanced-autocomplete__action-bar\">\r\n        <button *ngIf=\"data.actions.advanced\" \r\n                (click)=\"onClick(data.actions.advanced.payload)\"\r\n                class=\"n7-btn n7-advanced-autocomplete__advanced-search\">\r\n            {{data.actions.advanced.text}}\r\n        </button>\r\n        <button *ngIf=\"data.actions.showMore\" \r\n                (click)=\"onClick(data.actions.showMore.payload)\"\r\n                class=\"n7-btn n7-btn-cta n7-advanced-autocomplete__show-more\">\r\n            {{data.actions.showMore.text}}\r\n        </button>\r\n    </div>\r\n</ng-template>\r\n\r\n<!-- Template: Items -->\r\n<ng-template #items let-items>\r\n    <div *ngFor=\"let item of items\" \r\n         class=\"n7-advanced-autocomplete__item\"\r\n         (click)=\"onClick(item.payload)\">\r\n        <!-- Skip items that are groups -->\r\n        <ng-container *ngIf=\"item.label && item.value\">\r\n            <span class=\"n7-advanced-autocomplete__item-label\">\r\n                {{item.label}}\r\n            </span>\r\n            <span class=\"n7-advanced-autocomplete__item-value\">\r\n                {{item.value}}\r\n            </span>\r\n        </ng-container>\r\n    </div>\r\n</ng-template>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtYXV0b2NvbXBsZXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hZHZhbmNlZC1hdXRvY29tcGxldGUvYWR2YW5jZWQtYXV0b2NvbXBsZXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQU9qRCwrQ0FpQkM7OztJQWhCQyw0Q0FBMEM7O0lBQzFDLDRDQVdDOztJQUNELDZDQUFpQjs7SUFDakIsNENBQWM7O0lBQ2QsMENBQVk7Ozs7O0FBRWQsbURBZUM7Ozs7Ozs7SUFWQyw4Q0FNQzs7SUFDRCw4Q0FBZTs7SUFDZiw4Q0FBZTs7SUFDZixnREFBYzs7QUFHaEI7SUFBQTtJQWFBLENBQUM7Ozs7O0lBTEMsK0NBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDYixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQVpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxzb0hBQTJDO2lCQUM1Qzs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUFPUixvQ0FBQztDQUFBLEFBYkQsSUFhQztTQVRZLDZCQUE2Qjs7O0lBQ3hDLDZDQUF5Qzs7SUFDekMsNkNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQURWQU5DRUQtQVVUT0NPTVBMRVRFLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBBZHZhbmNlZEF1dG9jb21wbGV0ZUNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBOQU1FIChyZXF1aXJlZHxvcHRpb25zKSA8LS0tIFRPRE86IHVwZGF0ZSB3aXRoIGludGVyZmFjZSBwcm9wZXJ0aWVzIFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQWR2YW5jZWRBdXRvY29tcGxldGVEYXRhIHtcclxuICByZXN1bHRzPzogSUFkdmFuY2VkQXV0b2NvbXBsZXRlUmVzcG9uc2VbXTtcclxuICBhY3Rpb25zPzoge1xyXG4gICAgYWR2YW5jZWQ/OiB7XHJcbiAgICAgIHRleHQ6IHN0cmluZztcclxuICAgICAgcGF5bG9hZDogYW55O1xyXG4gICAgICBjbGFzc2VzPzogYW55O1xyXG4gICAgfVxyXG4gICAgc2hvd01vcmU/OiB7XHJcbiAgICAgIHRleHQ6IHN0cmluZztcclxuICAgICAgcGF5bG9hZDogYW55O1xyXG4gICAgICBjbGFzc2VzPzogYW55O1xyXG4gICAgfVxyXG4gIH1cclxuICBmYWxsYmFjazogc3RyaW5nO1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJQWR2YW5jZWRBdXRvY29tcGxldGVSZXNwb25zZSB7XHJcbiAgLyoqXHJcbiAgICogZ3JvdXAgb2YgcmVzdWx0cyB3aXRoIGEgdGl0bGVcclxuICAgKiBOT1RFOiBOZXN0ZWQgZ3JvdXBzIFdJTEwgTk9UIEJFIFJFTkRFUkVEIVxyXG4gICAqL1xyXG4gIGdyb3VwPzoge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGl0ZW1zOiBJQWR2YW5jZWRBdXRvY29tcGxldGVSZXNwb25zZVtdO1xyXG4gICAgY2xhc3Nlcz86IHN0cmluZztcclxuICAgIGljb24/OiBzdHJpbmc7XHJcbiAgICBwYXlsb2FkPzogYW55O1xyXG4gIH1cclxuICBsYWJlbD86IHN0cmluZztcclxuICB2YWx1ZT86IHN0cmluZztcclxuICBwYXlsb2FkPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWFkdmFuY2VkLWF1dG9jb21wbGV0ZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FkdmFuY2VkLWF1dG9jb21wbGV0ZS5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQWR2YW5jZWRBdXRvY29tcGxldGVDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IElBZHZhbmNlZEF1dG9jb21wbGV0ZURhdGE7XHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBvbkNsaWNrKHBheWxvYWQpe1xyXG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcbn0iXX0=