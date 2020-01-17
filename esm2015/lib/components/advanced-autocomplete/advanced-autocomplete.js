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
                template: "<div *ngIf=\"data\"\r\n     class=\"n7-advanced-autocomplete\"\r\n     [ngClass]=\"{ 'is-empty' : (data.results && data.results.length == 0), 'is-loading': !data.results }\">\r\n    <!-- If there are some results -->\r\n    <ng-container *ngIf=\"data.results && data.results.length > 0\">\r\n        <ng-container *ngTemplateOutlet=\"hasLoaded\"></ng-container>\r\n    </ng-container>\r\n    <!-- If no results are found -->\r\n    <ng-container *ngIf=\"data.results && data.results.length == 0\">\r\n        <ng-container *ngTemplateOutlet=\"isEmpty\"></ng-container>\r\n    </ng-container>\r\n    <!-- If is loading -->\r\n    <ng-container *ngIf=\"!data.results\">\r\n        <ng-container *ngTemplateOutlet=\"isLoading\"></ng-container>\r\n    </ng-container>\r\n</div>\r\n\r\n<!-- Template: Is empty -->\r\n<ng-template #isEmpty>\r\n    <div class=\"n7-advanced-autocomplete__empty\" [innerHTML]=\"data.fallback\"></div>\r\n</ng-template>\r\n\r\n<!-- Template: Is loading -->\r\n<ng-template #isLoading>\r\n    <!-- Layout appends loader-component here -->\r\n    <span class=\"n7-advanced-autocomplete__loader\"\r\n          id=\"n7-advanced-autocomplete__loader\">\r\n    </span>\r\n</ng-template>\r\n\r\n<!-- Template: Has loaded -->\r\n<ng-template #hasLoaded>\r\n    <!-- Search results -->\r\n    <div class=\"n7-advanced-autocomplete__results\">\r\n        <!-- Render groups -->\r\n        <ng-container *ngFor=\"let res of data.results\">\r\n            <div *ngIf=\"res.group\" class=\"n7-advanced-autocomplete__group\">\r\n                <div class=\"n7-advanced-autocomplete__group-title-wrapper {{ res.group.classes || '' }}\"\r\n                     (click)=\"onClick(res.group.payload)\">\r\n                    <span *ngIf=\"res.group.icon\" class=\"n7-advanced-autocomplete__group-icon {{ res.group.icon }}\"></span>\r\n                    <span class=\"n7-advanced-autocomplete__group-title\">{{res.group.title}}</span>\r\n                </div>\r\n                <div class=\"n7-advanced-autocomplete__items\">\r\n                    <ng-container *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"></ng-container>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"!res.group\" class=\"n7-advanced-autocomplete__nogroup\">\r\n                <ng-container *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"></ng-container>\r\n            </div>\r\n        </ng-container>\r\n        <!-- Render items -->\r\n    </div>\r\n    <!-- Actions -->\r\n    <div *ngIf=\"data.actions\"\r\n            class=\"n7-advanced-autocomplete__action-bar\">\r\n        <button *ngIf=\"data.actions.advanced\"\r\n                (click)=\"onClick(data.actions.advanced.payload)\"\r\n                class=\"n7-btn n7-advanced-autocomplete__advanced-search\">\r\n            {{data.actions.advanced.text}}\r\n        </button>\r\n        <button *ngIf=\"data.actions.showMore\"\r\n                (click)=\"onClick(data.actions.showMore.payload)\"\r\n                class=\"n7-btn n7-btn-cta n7-advanced-autocomplete__show-more\">\r\n            {{data.actions.showMore.text}}\r\n        </button>\r\n    </div>\r\n</ng-template>\r\n\r\n<!-- Template: Items -->\r\n<ng-template #items let-items>\r\n    <div *ngFor=\"let item of items\"\r\n         class=\"n7-advanced-autocomplete__item\"\r\n         (click)=\"onClick(item.payload)\">\r\n        <span *ngIf=\"item.title\" class=\"n7-advanced-autocomplete__item-title\">{{ item.title }}</span>\r\n        <ng-container *ngIf=\"item.metadata\">\r\n            <span *ngFor=\"let meta of item.metadata\" class=\"n7-advanced-autocomplete__item-metadata\">\r\n                <span *ngIf=\"meta.key\" class=\"n7-advanced-autocomplete__item-metadata-key\">{{ meta.key }}</span>\r\n                <span *ngIf=\"meta.value\" class=\"n7-advanced-autocomplete__item-metadata-value\">{{ meta.value }}</span>\r\n            </span>\r\n        </ng-container>\r\n    </div>\r\n</ng-template>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtYXV0b2NvbXBsZXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hZHZhbmNlZC1hdXRvY29tcGxldGUvYWR2YW5jZWQtYXV0b2NvbXBsZXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFLakQsK0NBaUJDOzs7SUFoQkMsNENBQTBDOztJQUMxQyw0Q0FXQzs7SUFDRCw2Q0FBaUI7O0lBQ2pCLDRDQUFjOztJQUNkLDBDQUFZOzs7OztBQUdkLHdDQUlDOzs7SUFIQywwQ0FBZTs7SUFDZiw2Q0FBbUQ7O0lBQ25ELDRDQUFjOzs7OztBQUdoQiw0Q0FRQzs7O0lBUEMsOENBQW1DOztJQUNuQyw4Q0FLQzs7QUFPSCxNQUFNLE9BQU8sNkJBQTZCOzs7OztJQUl4QyxPQUFPLENBQUMsT0FBTztRQUNiLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBWkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLDQ1SEFBMkM7YUFDNUM7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETiw2Q0FBeUM7O0lBQ3pDLDZDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEFEVkFOQ0VELUFVVE9DT01QTEVURS50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgQWR2YW5jZWRBdXRvY29tcGxldGVDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQWR2YW5jZWRBdXRvY29tcGxldGVEYXRhIHtcclxuICByZXN1bHRzPzogSUFkdmFuY2VkQXV0b2NvbXBsZXRlUmVzcG9uc2VbXTtcclxuICBhY3Rpb25zPzoge1xyXG4gICAgYWR2YW5jZWQ/OiB7XHJcbiAgICAgIHRleHQ6IHN0cmluZztcclxuICAgICAgcGF5bG9hZDogYW55O1xyXG4gICAgICBjbGFzc2VzPzogYW55O1xyXG4gICAgfVxyXG4gICAgc2hvd01vcmU/OiB7XHJcbiAgICAgIHRleHQ6IHN0cmluZztcclxuICAgICAgcGF5bG9hZDogYW55O1xyXG4gICAgICBjbGFzc2VzPzogYW55O1xyXG4gICAgfVxyXG4gIH1cclxuICBmYWxsYmFjazogc3RyaW5nO1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJQWR2YW5jZWRBdXRvY29tcGxldGVJdGVtIHtcclxuICB0aXRsZT86IHN0cmluZztcclxuICBtZXRhZGF0YT86IEFycmF5PHsga2V5Pzogc3RyaW5nLCB2YWx1ZT86IHN0cmluZyB9PjtcclxuICBwYXlsb2FkPzogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUFkdmFuY2VkQXV0b2NvbXBsZXRlUmVzcG9uc2Uge1xyXG4gIGl0ZW1zOiBJQWR2YW5jZWRBdXRvY29tcGxldGVJdGVtW107XHJcbiAgZ3JvdXA/OiB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgY2xhc3Nlcz86IHN0cmluZztcclxuICAgIGljb24/OiBzdHJpbmc7XHJcbiAgICBwYXlsb2FkPzogYW55O1xyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1hZHZhbmNlZC1hdXRvY29tcGxldGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hZHZhbmNlZC1hdXRvY29tcGxldGUuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFkdmFuY2VkQXV0b2NvbXBsZXRlQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBJQWR2YW5jZWRBdXRvY29tcGxldGVEYXRhO1xyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgb25DbGljayhwYXlsb2FkKXtcclxuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgfVxyXG59Il19