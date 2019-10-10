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
                    template: "<div *ngIf=\"data\" \n     class=\"n7-advanced-autocomplete\"\n     [ngClass]=\"{ 'is-empty' : (data.results && data.results.length == 0), 'is-loading': !data.results }\">\n    <!-- If there are some results -->\n    <ng-container *ngIf=\"data.results && data.results.length > 0\">\n        <ng-container *ngTemplateOutlet=\"hasLoaded\"></ng-container>\n    </ng-container>\n    <!-- If no results are found -->\n    <ng-container *ngIf=\"data.results && data.results.length == 0\">\n        <ng-container *ngTemplateOutlet=\"isEmpty\"></ng-container>\n    </ng-container>\n    <!-- If is loading -->\n    <ng-container *ngIf=\"!data.results\">\n        <ng-container *ngTemplateOutlet=\"isLoading\"></ng-container>\n    </ng-container>\n</div>\n\n<!-- Template: Is empty -->\n<ng-template #isEmpty>\n    <div class=\"n7-advanced-autocomplete__empty\" [innerHTML]=\"data.fallback\"></div>\n</ng-template>\n\n<!-- Template: Is loading -->\n<ng-template #isLoading>\n    <!-- Layout appends loader-component here -->\n    <span class=\"n7-advanced-autocomplete__loader\" \n          id=\"n7-advanced-autocomplete__loader\">\n    </span>\n</ng-template>\n\n<!-- Template: Has loaded -->\n<ng-template #hasLoaded>\n    <!-- Search results -->\n    <div class=\"n7-advanced-autocomplete__results\">\n        <!-- Render groups -->\n        <ng-container *ngFor=\"let res of data.results\">\n            <div *ngIf=\"res.group\" class=\"n7-advanced-autocomplete__group\">\n                <div class=\"n7-advanced-autocomplete__group-title-wrapper {{ res.group.classes || '' }}\"\n                     (click)=\"onClick(res.group.payload)\">\n                    <span *ngIf=\"res.group.icon\" class=\"n7-advanced-autocomplete__group-icon {{ res.group.icon }}\"></span>\n                    <span class=\"n7-advanced-autocomplete__group-title\">{{res.group.title}}</span>\n                </div>\n                <div class=\"n7-advanced-autocomplete__items\">\n                    <ng-container *ngTemplateOutlet=\"items; context:{$implicit: res.group.items}\"></ng-container>\n                </div>\n            </div>\n        </ng-container>\n        <!-- Render items -->\n        <ng-container *ngTemplateOutlet=\"items; context:{$implicit: data.results}\"></ng-container>\n    </div>\n    <!-- Actions -->\n    <div *ngIf=\"data.actions\" \n            class=\"n7-advanced-autocomplete__action-bar\">\n        <button *ngIf=\"data.actions.advanced\" \n                (click)=\"onClick(data.actions.advanced.payload)\"\n                class=\"n7-btn n7-advanced-autocomplete__advanced-search\">\n            {{data.actions.advanced.text}}\n        </button>\n        <button *ngIf=\"data.actions.showMore\" \n                (click)=\"onClick(data.actions.showMore.payload)\"\n                class=\"n7-btn n7-btn-cta n7-advanced-autocomplete__show-more\">\n            {{data.actions.showMore.text}}\n        </button>\n    </div>\n</ng-template>\n\n<!-- Template: Items -->\n<ng-template #items let-items>\n    <div *ngFor=\"let item of items\" \n         class=\"n7-advanced-autocomplete__item\"\n         (click)=\"onClick(item.payload)\">\n        <!-- Skip items that are groups -->\n        <ng-container *ngIf=\"item.label && item.value\">\n            <span class=\"n7-advanced-autocomplete__item-label\">\n                {{item.label}}\n            </span>\n            <span class=\"n7-advanced-autocomplete__item-value\">\n                {{item.value}}\n            </span>\n        </ng-container>\n    </div>\n</ng-template>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtYXV0b2NvbXBsZXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hZHZhbmNlZC1hdXRvY29tcGxldGUvYWR2YW5jZWQtYXV0b2NvbXBsZXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQU9qRCwrQ0FpQkM7OztJQWhCQyw0Q0FBMEM7O0lBQzFDLDRDQVdDOztJQUNELDZDQUFpQjs7SUFDakIsNENBQWM7O0lBQ2QsMENBQVk7Ozs7O0FBRWQsbURBZUM7Ozs7Ozs7SUFWQyw4Q0FNQzs7SUFDRCw4Q0FBZTs7SUFDZiw4Q0FBZTs7SUFDZixnREFBYzs7QUFHaEI7SUFBQTtJQWFBLENBQUM7Ozs7O0lBTEMsK0NBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDYixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQVpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxvK0dBQTJDO2lCQUM1Qzs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUFPUixvQ0FBQztDQUFBLEFBYkQsSUFhQztTQVRZLDZCQUE2Qjs7O0lBQ3hDLDZDQUF5Qzs7SUFDekMsNkNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEFEVkFOQ0VELUFVVE9DT01QTEVURS50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgQWR2YW5jZWRBdXRvY29tcGxldGVDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBOQU1FIChyZXF1aXJlZHxvcHRpb25zKSA8LS0tIFRPRE86IHVwZGF0ZSB3aXRoIGludGVyZmFjZSBwcm9wZXJ0aWVzIFxuICovXG5leHBvcnQgaW50ZXJmYWNlIElBZHZhbmNlZEF1dG9jb21wbGV0ZURhdGEge1xuICByZXN1bHRzPzogSUFkdmFuY2VkQXV0b2NvbXBsZXRlUmVzcG9uc2VbXTtcbiAgYWN0aW9ucz86IHtcbiAgICBhZHZhbmNlZD86IHtcbiAgICAgIHRleHQ6IHN0cmluZztcbiAgICAgIHBheWxvYWQ6IGFueTtcbiAgICAgIGNsYXNzZXM/OiBhbnk7XG4gICAgfVxuICAgIHNob3dNb3JlPzoge1xuICAgICAgdGV4dDogc3RyaW5nO1xuICAgICAgcGF5bG9hZDogYW55O1xuICAgICAgY2xhc3Nlcz86IGFueTtcbiAgICB9XG4gIH1cbiAgZmFsbGJhY2s6IHN0cmluZztcbiAgY2xhc3Nlcz86IGFueTtcbiAgX21ldGE/OiBhbnk7XG59XG5leHBvcnQgaW50ZXJmYWNlIElBZHZhbmNlZEF1dG9jb21wbGV0ZVJlc3BvbnNlIHtcbiAgLyoqXG4gICAqIGdyb3VwIG9mIHJlc3VsdHMgd2l0aCBhIHRpdGxlXG4gICAqIE5PVEU6IE5lc3RlZCBncm91cHMgV0lMTCBOT1QgQkUgUkVOREVSRUQhXG4gICAqL1xuICBncm91cD86IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGl0ZW1zOiBJQWR2YW5jZWRBdXRvY29tcGxldGVSZXNwb25zZVtdO1xuICAgIGNsYXNzZXM/OiBzdHJpbmc7XG4gICAgaWNvbj86IHN0cmluZztcbiAgICBwYXlsb2FkPzogYW55O1xuICB9XG4gIGxhYmVsPzogc3RyaW5nO1xuICB2YWx1ZT86IHN0cmluZztcbiAgcGF5bG9hZD86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctYWR2YW5jZWQtYXV0b2NvbXBsZXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkdmFuY2VkLWF1dG9jb21wbGV0ZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBZHZhbmNlZEF1dG9jb21wbGV0ZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElBZHZhbmNlZEF1dG9jb21wbGV0ZURhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNsaWNrKHBheWxvYWQpe1xuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxufSJdfQ==