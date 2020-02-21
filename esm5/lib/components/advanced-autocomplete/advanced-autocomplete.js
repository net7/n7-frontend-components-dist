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
                    template: "<div *ngIf=\"data\" class=\"n7-advanced-autocomplete\"\n    [ngClass]=\"{ 'is-empty' : (data.results && data.results.length == 0), 'is-loading': !data.results }\">\n    <!-- If there are some results -->\n    <ng-container *ngIf=\"data.results && data.results.length > 0\">\n        <ng-container *ngTemplateOutlet=\"hasLoaded\"></ng-container>\n    </ng-container>\n    <!-- If no results are found -->\n    <ng-container *ngIf=\"data.results && data.results.length == 0\">\n        <ng-container *ngTemplateOutlet=\"isEmpty\"></ng-container>\n    </ng-container>\n    <!-- If is loading -->\n    <ng-container *ngIf=\"!data.results\">\n        <ng-container *ngTemplateOutlet=\"isLoading\"></ng-container>\n    </ng-container>\n</div>\n\n<!-- Template: Is empty -->\n<ng-template #isEmpty>\n    <div class=\"n7-advanced-autocomplete__empty\" [innerHTML]=\"data.fallback\"></div>\n    <!-- Render actions -->\n    <ng-container *ngTemplateOutlet=\"actions; context:{$implicit: data.actions}\"></ng-container>\n</ng-template>\n\n<!-- Template: Is loading -->\n<ng-template #isLoading>\n    <!-- Layout appends loader-component here -->\n    <span class=\"n7-advanced-autocomplete__loader\" id=\"n7-advanced-autocomplete__loader\"></span>\n</ng-template>\n\n<!-- Template: Has loaded -->\n<ng-template #hasLoaded>\n    <!-- Search results -->\n    <div class=\"n7-advanced-autocomplete__results\">\n        <!-- Render groups -->\n        <ng-container *ngFor=\"let res of data.results\">\n            <div *ngIf=\"res.group\" class=\"n7-advanced-autocomplete__group\">\n                <div class=\"n7-advanced-autocomplete__group-title-wrapper {{ res.group.classes || '' }}\">\n                    <n7-anchor-wrapper\n                        [data]=\"res.group.anchor\"\n                        (clicked)=\"onClick($event)\">\n                        <span *ngIf=\"res.group.icon\" class=\"n7-advanced-autocomplete__group-icon {{ res.group.icon }}\"></span>\n                        <span class=\"n7-advanced-autocomplete__group-title\">{{res.group.title}}</span>\n                    </n7-anchor-wrapper>\n                </div>\n                <!-- Render items -->\n                <div class=\"n7-advanced-autocomplete__items\">\n                    <ng-container *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"></ng-container>\n                </div>\n            </div>\n            <div *ngIf=\"!res.group\" class=\"n7-advanced-autocomplete__nogroup\">\n                <ng-container *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"></ng-container>\n            </div>\n        </ng-container>\n    </div>\n    <!-- Actions -->\n    <ng-container *ngTemplateOutlet=\"actions; context:{$implicit: data.actions}\"></ng-container>\n</ng-template>\n\n<!-- Template: Items -->\n<ng-template #items let-items>\n    <n7-anchor-wrapper *ngFor=\"let item of items\"\n    [data]=\"item.anchor\"\n    (clicked)=\"onClick($event)\"\n    [classes]=\"'n7-advanced-autocomplete__item'\">\n    <span *ngIf=\"item.title\" class=\"n7-advanced-autocomplete__item-title\" [innerHTML]=\"item.title\"></span>\n    <ng-container *ngIf=\"item.metadata\">\n        <span *ngFor=\"let meta of item.metadata\" class=\"n7-advanced-autocomplete__item-metadata\">\n            <span *ngIf=\"meta.key\" class=\"n7-advanced-autocomplete__item-metadata-key\">{{ meta.key }}</span>\n            <span *ngIf=\"meta.value\" class=\"n7-advanced-autocomplete__item-metadata-value\">{{ meta.value }}</span>\n        </span>\n    </ng-container>\n    </n7-anchor-wrapper>\n</ng-template>\n\n<!-- Template: Actions -->\n<ng-template #actions let-actions>\n    <div *ngIf=\"actions\" class=\"n7-advanced-autocomplete__action-bar\">\n        <n7-anchor-wrapper *ngIf=\"actions.advanced\" [data]=\"actions.advanced.anchor\"\n            (clicked)=\"onClick($event)\" [classes]=\"'n7-btn n7-advanced-autocomplete__advanced-search'\">\n            {{actions.advanced.text}}\n        </n7-anchor-wrapper>\n\n        <n7-anchor-wrapper *ngIf=\"actions.showMore\" [data]=\"actions.showMore.anchor\"\n            (clicked)=\"onClick($event)\" [classes]=\"'n7-btn n7-btn-cta n7-advanced-autocomplete__show-more'\">\n            {{actions.showMore.text}}\n        </n7-anchor-wrapper>\n    </div>\n</ng-template>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtYXV0b2NvbXBsZXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hZHZhbmNlZC1hdXRvY29tcGxldGUvYWR2YW5jZWQtYXV0b2NvbXBsZXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBTWpELCtDQWlCQzs7O0lBaEJDLDRDQUEwQzs7SUFDMUMsNENBV0M7O0lBQ0QsNkNBQWlCOztJQUNqQiw0Q0FBYzs7SUFDZCwwQ0FBWTs7Ozs7QUFHZCx3Q0FhQzs7Ozs7O0lBVEMsMkNBQWlCOzs7OztJQUlqQiwwQ0FBZTs7Ozs7SUFJZiw2Q0FBbUQ7Ozs7O0FBR3JELDRDQVFDOzs7SUFQQyw4Q0FBbUM7O0lBQ25DLDhDQUtDOztBQUdIO0lBQUE7SUFhQSxDQUFDOzs7OztJQUxDLCtDQUFPOzs7O0lBQVAsVUFBUSxPQUFPO1FBQ2IsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsZ3RJQUEyQztpQkFDNUM7Ozt1QkFFRSxLQUFLO3VCQUNMLEtBQUs7O0lBT1Isb0NBQUM7Q0FBQSxBQWJELElBYUM7U0FUWSw2QkFBNkI7OztJQUN4Qyw2Q0FBeUM7O0lBQ3pDLDZDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBBRFZBTkNFRC1BVVRPQ09NUExFVEUudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBBZHZhbmNlZEF1dG9jb21wbGV0ZUNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUFkdmFuY2VkQXV0b2NvbXBsZXRlRGF0YSB7XG4gIHJlc3VsdHM/OiBJQWR2YW5jZWRBdXRvY29tcGxldGVSZXNwb25zZVtdO1xuICBhY3Rpb25zPzoge1xuICAgIGFkdmFuY2VkPzoge1xuICAgICAgdGV4dDogc3RyaW5nO1xuICAgICAgYW5jaG9yPzogSUFuY2hvcjtcbiAgICAgIGNsYXNzZXM/OiBhbnk7XG4gICAgfVxuICAgIHNob3dNb3JlPzoge1xuICAgICAgdGV4dDogc3RyaW5nO1xuICAgICAgYW5jaG9yPzogSUFuY2hvcjtcbiAgICAgIGNsYXNzZXM/OiBhbnk7XG4gICAgfVxuICB9XG4gIGZhbGxiYWNrOiBzdHJpbmc7XG4gIGNsYXNzZXM/OiBhbnk7XG4gIF9tZXRhPzogYW55O1xufVxuXG5pbnRlcmZhY2UgSUFkdmFuY2VkQXV0b2NvbXBsZXRlSXRlbSB7XG4gIC8qKlxuICAgKiBhbmNob3IgPGE+XG4gICAqL1xuICBhbmNob3I/OiBJQW5jaG9yO1xuICAvKipcbiAgICogUmVuZGVyZWQgdGV4dCBmb3IgdGhlIHJlc3VsdCBpdGVtXG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgbWV0YWRhdGEgZm9yIHRoZSByZXN1bHQgaXRlbVxuICAgKi9cbiAgbWV0YWRhdGE/OiBBcnJheTx7IGtleT86IHN0cmluZywgdmFsdWU/OiBzdHJpbmcgfT47XG59XG5cbmludGVyZmFjZSBJQWR2YW5jZWRBdXRvY29tcGxldGVSZXNwb25zZSB7XG4gIGl0ZW1zOiBJQWR2YW5jZWRBdXRvY29tcGxldGVJdGVtW107XG4gIGdyb3VwPzoge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgY2xhc3Nlcz86IHN0cmluZztcbiAgICBpY29uPzogc3RyaW5nO1xuICAgIGFuY2hvcj86IElBbmNob3I7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctYWR2YW5jZWQtYXV0b2NvbXBsZXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkdmFuY2VkLWF1dG9jb21wbGV0ZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBZHZhbmNlZEF1dG9jb21wbGV0ZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElBZHZhbmNlZEF1dG9jb21wbGV0ZURhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNsaWNrKHBheWxvYWQpe1xuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxufSJdfQ==