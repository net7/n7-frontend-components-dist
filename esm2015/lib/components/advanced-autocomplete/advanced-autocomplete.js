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
                template: "<div *ngIf=\"data\"\r\n     class=\"n7-advanced-autocomplete\"\r\n     [ngClass]=\"{ 'is-empty' : (data.results && data.results.length == 0), 'is-loading': !data.results }\">\r\n    <!-- If there are some results -->\r\n    <ng-container *ngIf=\"data.results && data.results.length > 0\">\r\n        <ng-container *ngTemplateOutlet=\"hasLoaded\"></ng-container>\r\n    </ng-container>\r\n    <!-- If no results are found -->\r\n    <ng-container *ngIf=\"data.results && data.results.length == 0\">\r\n        <ng-container *ngTemplateOutlet=\"isEmpty\"></ng-container>\r\n    </ng-container>\r\n    <!-- If is loading -->\r\n    <ng-container *ngIf=\"!data.results\">\r\n        <ng-container *ngTemplateOutlet=\"isLoading\"></ng-container>\r\n    </ng-container>\r\n</div>\r\n\r\n<!-- Template: Is empty -->\r\n<ng-template #isEmpty>\r\n    <div class=\"n7-advanced-autocomplete__empty\" [innerHTML]=\"data.fallback\"></div>\r\n</ng-template>\r\n\r\n<!-- Template: Is loading -->\r\n<ng-template #isLoading>\r\n    <!-- Layout appends loader-component here -->\r\n    <span class=\"n7-advanced-autocomplete__loader\"\r\n          id=\"n7-advanced-autocomplete__loader\">\r\n    </span>\r\n</ng-template>\r\n\r\n<!-- Template: Has loaded -->\r\n<ng-template #hasLoaded>\r\n    <!-- Search results -->\r\n    <div class=\"n7-advanced-autocomplete__results\">\r\n        <!-- Render groups -->\r\n        <ng-container *ngFor=\"let res of data.results\">\r\n            <div *ngIf=\"res.group\" class=\"n7-advanced-autocomplete__group\">\r\n                <div class=\"n7-advanced-autocomplete__group-title-wrapper {{ res.group.classes || '' }}\"\r\n                     (click)=\"onClick(res.group.payload)\">\r\n                    <span *ngIf=\"res.group.icon\" class=\"n7-advanced-autocomplete__group-icon {{ res.group.icon }}\"></span>\r\n                    <span class=\"n7-advanced-autocomplete__group-title\">{{res.group.title}}</span>\r\n                </div>\r\n                <!-- Render items -->\r\n                <div class=\"n7-advanced-autocomplete__items\">\r\n                    <ng-container *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"></ng-container>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"!res.group\" class=\"n7-advanced-autocomplete__nogroup\">\r\n                <ng-container *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"></ng-container>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- Actions -->\r\n    <div *ngIf=\"data.actions\"\r\n            class=\"n7-advanced-autocomplete__action-bar\">\r\n        <button *ngIf=\"data.actions.advanced\"\r\n                (click)=\"onClick(data.actions.advanced.payload)\"\r\n                class=\"n7-btn n7-advanced-autocomplete__advanced-search\">\r\n            {{data.actions.advanced.text}}\r\n        </button>\r\n        <button *ngIf=\"data.actions.showMore\"\r\n                (click)=\"onClick(data.actions.showMore.payload)\"\r\n                class=\"n7-btn n7-btn-cta n7-advanced-autocomplete__show-more\">\r\n            {{data.actions.showMore.text}}\r\n        </button>\r\n    </div>\r\n</ng-template>\r\n\r\n<!-- Template: Items -->\r\n<ng-template #items let-items>\r\n    <div *ngFor=\"let item of items\"\r\n         class=\"n7-advanced-autocomplete__item\"\r\n         (click)=\"onClick(item.payload)\">\r\n        <span *ngIf=\"item.title\" class=\"n7-advanced-autocomplete__item-title\" [innerHTML]=\"item.title\"></span>\r\n        <ng-container *ngIf=\"item.metadata\">\r\n            <span *ngFor=\"let meta of item.metadata\" class=\"n7-advanced-autocomplete__item-metadata\">\r\n                <span *ngIf=\"meta.key\" class=\"n7-advanced-autocomplete__item-metadata-key\">{{ meta.key }}</span>\r\n                <span *ngIf=\"meta.value\" class=\"n7-advanced-autocomplete__item-metadata-value\">{{ meta.value }}</span>\r\n            </span>\r\n        </ng-container>\r\n    </div>\r\n</ng-template>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtYXV0b2NvbXBsZXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hZHZhbmNlZC1hdXRvY29tcGxldGUvYWR2YW5jZWQtYXV0b2NvbXBsZXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBS2pELCtDQWlCQzs7O0lBaEJDLDRDQUEwQzs7SUFDMUMsNENBV0M7O0lBQ0QsNkNBQWlCOztJQUNqQiw0Q0FBYzs7SUFDZCwwQ0FBWTs7Ozs7QUFHZCx3Q0FJQzs7O0lBSEMsMENBQWU7O0lBQ2YsNkNBQW1EOztJQUNuRCw0Q0FBYzs7Ozs7QUFHaEIsNENBUUM7OztJQVBDLDhDQUFtQzs7SUFDbkMsOENBS0M7O0FBT0gsTUFBTSxPQUFPLDZCQUE2Qjs7Ozs7SUFJeEMsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQVpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQywrNkhBQTJDO2FBQzVDOzs7bUJBRUUsS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sNkNBQXlDOztJQUN6Qyw2Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBBRFZBTkNFRC1BVVRPQ09NUExFVEUudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEFkdmFuY2VkQXV0b2NvbXBsZXRlQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFkdmFuY2VkQXV0b2NvbXBsZXRlRGF0YSB7XHJcbiAgcmVzdWx0cz86IElBZHZhbmNlZEF1dG9jb21wbGV0ZVJlc3BvbnNlW107XHJcbiAgYWN0aW9ucz86IHtcclxuICAgIGFkdmFuY2VkPzoge1xyXG4gICAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICAgIHBheWxvYWQ6IGFueTtcclxuICAgICAgY2xhc3Nlcz86IGFueTtcclxuICAgIH1cclxuICAgIHNob3dNb3JlPzoge1xyXG4gICAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICAgIHBheWxvYWQ6IGFueTtcclxuICAgICAgY2xhc3Nlcz86IGFueTtcclxuICAgIH1cclxuICB9XHJcbiAgZmFsbGJhY2s6IHN0cmluZztcclxuICBjbGFzc2VzPzogYW55O1xyXG4gIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUFkdmFuY2VkQXV0b2NvbXBsZXRlSXRlbSB7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgbWV0YWRhdGE/OiBBcnJheTx7IGtleT86IHN0cmluZywgdmFsdWU/OiBzdHJpbmcgfT47XHJcbiAgcGF5bG9hZD86IGFueTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElBZHZhbmNlZEF1dG9jb21wbGV0ZVJlc3BvbnNlIHtcclxuICBpdGVtczogSUFkdmFuY2VkQXV0b2NvbXBsZXRlSXRlbVtdO1xyXG4gIGdyb3VwPzoge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgICBpY29uPzogc3RyaW5nO1xyXG4gICAgcGF5bG9hZD86IGFueTtcclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctYWR2YW5jZWQtYXV0b2NvbXBsZXRlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWR2YW5jZWQtYXV0b2NvbXBsZXRlLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZHZhbmNlZEF1dG9jb21wbGV0ZUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogSUFkdmFuY2VkQXV0b2NvbXBsZXRlRGF0YTtcclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZCl7XHJcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxufSJdfQ==