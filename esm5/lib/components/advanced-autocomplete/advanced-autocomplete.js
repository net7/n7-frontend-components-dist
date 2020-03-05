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
                    template: "<div *ngIf=\"data\" class=\"n7-advanced-autocomplete\"\r\n    [ngClass]=\"{ 'is-empty' : (data.results && data.results.length === 0), 'is-loading': !data.results }\">\r\n    <!-- If there are some results -->\r\n    <ng-container *ngIf=\"data.results && data.results.length > 0\">\r\n        <ng-container *ngTemplateOutlet=\"hasLoaded\"></ng-container>\r\n    </ng-container>\r\n    <!-- If no results are found -->\r\n    <ng-container *ngIf=\"data.results && data.results.length === 0\">\r\n        <ng-container *ngTemplateOutlet=\"isEmpty\"></ng-container>\r\n    </ng-container>\r\n    <!-- If is loading -->\r\n    <ng-container *ngIf=\"!data.results\">\r\n        <ng-container *ngTemplateOutlet=\"isLoading\"></ng-container>\r\n    </ng-container>\r\n</div>\r\n\r\n<!-- Template: Is empty -->\r\n<ng-template #isEmpty>\r\n    <div class=\"n7-advanced-autocomplete__empty\" [innerHTML]=\"data.fallback\"></div>\r\n    <!-- Render actions -->\r\n    <ng-container *ngTemplateOutlet=\"actions; context:{$implicit: data.actions}\"></ng-container>\r\n</ng-template>\r\n\r\n<!-- Template: Is loading -->\r\n<ng-template #isLoading>\r\n    <!-- Layout appends loader-component here -->\r\n    <span class=\"n7-advanced-autocomplete__loader\" id=\"n7-advanced-autocomplete__loader\"></span>\r\n</ng-template>\r\n\r\n<!-- Template: Has loaded -->\r\n<ng-template #hasLoaded>\r\n    <!-- Search results -->\r\n    <div class=\"n7-advanced-autocomplete__results\">\r\n        <!-- Render groups -->\r\n        <ng-container *ngFor=\"let res of data.results\">\r\n            <div *ngIf=\"res.group\" class=\"n7-advanced-autocomplete__group\">\r\n                <div class=\"n7-advanced-autocomplete__group-title-wrapper {{ res.group.classes || '' }}\">\r\n                    <n7-anchor-wrapper\r\n                        [data]=\"res.group.anchor\"\r\n                        (clicked)=\"onClick($event)\">\r\n                        <span *ngIf=\"res.group.icon\" class=\"n7-advanced-autocomplete__group-icon {{ res.group.icon }}\"></span>\r\n                        <span class=\"n7-advanced-autocomplete__group-title\">{{res.group.title}}</span>\r\n                    </n7-anchor-wrapper>\r\n                </div>\r\n                <!-- Render items -->\r\n                <div class=\"n7-advanced-autocomplete__items\">\r\n                    <ng-container *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"></ng-container>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"!res.group\" class=\"n7-advanced-autocomplete__nogroup\">\r\n                <ng-container *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"></ng-container>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- Actions -->\r\n    <ng-container *ngTemplateOutlet=\"actions; context:{$implicit: data.actions}\"></ng-container>\r\n</ng-template>\r\n\r\n<!-- Template: Items -->\r\n<ng-template #items let-items>\r\n    <n7-anchor-wrapper *ngFor=\"let item of items\"\r\n    [data]=\"item.anchor\"\r\n    (clicked)=\"onClick($event)\"\r\n    [classes]=\"'n7-advanced-autocomplete__item'\">\r\n    <span *ngIf=\"item.title\" class=\"n7-advanced-autocomplete__item-title\" [innerHTML]=\"item.title\"></span>\r\n    <ng-container *ngIf=\"item.metadata\">\r\n        <span *ngFor=\"let meta of item.metadata\" class=\"n7-advanced-autocomplete__item-metadata\">\r\n            <span *ngIf=\"meta.key\" class=\"n7-advanced-autocomplete__item-metadata-key\">{{ meta.key }}</span>\r\n            <span *ngIf=\"meta.value\" class=\"n7-advanced-autocomplete__item-metadata-value\">{{ meta.value }}</span>\r\n        </span>\r\n    </ng-container>\r\n    </n7-anchor-wrapper>\r\n</ng-template>\r\n\r\n<!-- Template: Actions -->\r\n<ng-template #actions let-actions>\r\n    <div *ngIf=\"actions\" class=\"n7-advanced-autocomplete__action-bar\">\r\n        <n7-anchor-wrapper *ngIf=\"actions.advanced\" [data]=\"actions.advanced.anchor\"\r\n            (clicked)=\"onClick($event)\" [classes]=\"'n7-btn n7-advanced-autocomplete__advanced-search'\">\r\n            {{actions.advanced.text}}\r\n        </n7-anchor-wrapper>\r\n\r\n        <n7-anchor-wrapper *ngIf=\"actions.showMore\" [data]=\"actions.showMore.anchor\"\r\n            (clicked)=\"onClick($event)\" [classes]=\"'n7-btn n7-btn-cta n7-advanced-autocomplete__show-more'\">\r\n            {{actions.showMore.text}}\r\n        </n7-anchor-wrapper>\r\n    </div>\r\n</ng-template>\r\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtYXV0b2NvbXBsZXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hZHZhbmNlZC1hdXRvY29tcGxldGUvYWR2YW5jZWQtYXV0b2NvbXBsZXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBTWpELDhDQWlCQzs7O0lBaEJDLDJDQUF5Qzs7SUFDekMsMkNBV0U7O0lBQ0YsNENBQWlCOztJQUNqQiwyQ0FBYzs7SUFDZCx5Q0FBWTs7Ozs7QUFHZCx1Q0FhQzs7Ozs7O0lBVEMsMENBQWdCOzs7OztJQUloQix5Q0FBZTs7Ozs7SUFJZiw0Q0FBbUQ7Ozs7O0FBR3JELDJDQVFDOzs7SUFQQyw2Q0FBa0M7O0lBQ2xDLDZDQUtFOztBQUdKO0lBQUE7SUFjQSxDQUFDOzs7OztJQUxDLCtDQUFPOzs7O0lBQVAsVUFBUSxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkFiRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsbzRJQUEyQztpQkFDNUM7Ozt1QkFFRSxLQUFLO3VCQUVMLEtBQUs7O0lBT1Isb0NBQUM7Q0FBQSxBQWRELElBY0M7U0FWWSw2QkFBNkI7OztJQUN4Qyw2Q0FBd0M7O0lBRXhDLDZDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEFEVkFOQ0VELUFVVE9DT01QTEVURS50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBBZHZhbmNlZEF1dG9jb21wbGV0ZUNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEFkdmFuY2VkQXV0b2NvbXBsZXRlRGF0YSB7XHJcbiAgcmVzdWx0cz86IEFkdmFuY2VkQXV0b2NvbXBsZXRlUmVzcG9uc2VbXTtcclxuICBhY3Rpb25zPzoge1xyXG4gICAgYWR2YW5jZWQ/OiB7XHJcbiAgICAgIHRleHQ6IHN0cmluZztcclxuICAgICAgYW5jaG9yPzogQW5jaG9yO1xyXG4gICAgICBjbGFzc2VzPzogYW55O1xyXG4gICAgfTtcclxuICAgIHNob3dNb3JlPzoge1xyXG4gICAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICAgIGFuY2hvcj86IEFuY2hvcjtcclxuICAgICAgY2xhc3Nlcz86IGFueTtcclxuICAgIH07XHJcbiAgfTtcclxuICBmYWxsYmFjazogc3RyaW5nO1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBBZHZhbmNlZEF1dG9jb21wbGV0ZUl0ZW0ge1xyXG4gIC8qKlxyXG4gICAqIGFuY2hvciA8YT5cclxuICAgKi9cclxuICBhbmNob3I/OiBBbmNob3I7XHJcbiAgLyoqXHJcbiAgICogUmVuZGVyZWQgdGV4dCBmb3IgdGhlIHJlc3VsdCBpdGVtXHJcbiAgICovXHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBtZXRhZGF0YSBmb3IgdGhlIHJlc3VsdCBpdGVtXHJcbiAgICovXHJcbiAgbWV0YWRhdGE/OiBBcnJheTx7IGtleT86IHN0cmluZzsgdmFsdWU/OiBzdHJpbmcgfT47XHJcbn1cclxuXHJcbmludGVyZmFjZSBBZHZhbmNlZEF1dG9jb21wbGV0ZVJlc3BvbnNlIHtcclxuICBpdGVtczogQWR2YW5jZWRBdXRvY29tcGxldGVJdGVtW107XHJcbiAgZ3JvdXA/OiB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgY2xhc3Nlcz86IHN0cmluZztcclxuICAgIGljb24/OiBzdHJpbmc7XHJcbiAgICBhbmNob3I/OiBBbmNob3I7XHJcbiAgfTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1hZHZhbmNlZC1hdXRvY29tcGxldGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hZHZhbmNlZC1hdXRvY29tcGxldGUuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFkdmFuY2VkQXV0b2NvbXBsZXRlQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBBZHZhbmNlZEF1dG9jb21wbGV0ZURhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgb25DbGljayhwYXlsb2FkKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcbn1cclxuIl19