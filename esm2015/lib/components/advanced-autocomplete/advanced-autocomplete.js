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
                template: "<div *ngIf=\"data\"\n     class=\"n7-advanced-autocomplete\"\n     [ngClass]=\"{ 'is-empty' : (data.results && data.results.length == 0), 'is-loading': !data.results }\">\n    <!-- If there are some results -->\n    <ng-container *ngIf=\"data.results && data.results.length > 0\">\n        <ng-container *ngTemplateOutlet=\"hasLoaded\"></ng-container>\n    </ng-container>\n    <!-- If no results are found -->\n    <ng-container *ngIf=\"data.results && data.results.length == 0\">\n        <ng-container *ngTemplateOutlet=\"isEmpty\"></ng-container>\n    </ng-container>\n    <!-- If is loading -->\n    <ng-container *ngIf=\"!data.results\">\n        <ng-container *ngTemplateOutlet=\"isLoading\"></ng-container>\n    </ng-container>\n</div>\n\n<!-- Template: Is empty -->\n<ng-template #isEmpty>\n    <div class=\"n7-advanced-autocomplete__empty\" [innerHTML]=\"data.fallback\"></div>\n</ng-template>\n\n<!-- Template: Is loading -->\n<ng-template #isLoading>\n    <!-- Layout appends loader-component here -->\n    <span class=\"n7-advanced-autocomplete__loader\"\n          id=\"n7-advanced-autocomplete__loader\">\n    </span>\n</ng-template>\n\n<!-- Template: Has loaded -->\n<ng-template #hasLoaded>\n    <!-- Search results -->\n    <div class=\"n7-advanced-autocomplete__results\">\n        <!-- Render groups -->\n        <ng-container *ngFor=\"let res of data.results\">\n            <div *ngIf=\"res.group\" class=\"n7-advanced-autocomplete__group\">\n                <div class=\"n7-advanced-autocomplete__group-title-wrapper {{ res.group.classes || '' }}\">\n                    <n7-anchor-wrapper\n                    [data]=\"res.group.anchor\"\n                    (clicked)=\"onClick($event)\">\n                        <span *ngIf=\"res.group.icon\" class=\"n7-advanced-autocomplete__group-icon {{ res.group.icon }}\"></span>\n                        <span class=\"n7-advanced-autocomplete__group-title\">{{res.group.title}}</span>\n                    </n7-anchor-wrapper>\n                </div>\n                <!-- Render items -->\n                <div class=\"n7-advanced-autocomplete__items\">\n                    <ng-container *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"></ng-container>\n                </div>\n            </div>\n            <div *ngIf=\"!res.group\" class=\"n7-advanced-autocomplete__nogroup\">\n                <ng-container *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"></ng-container>\n            </div>\n        </ng-container>\n    </div>\n    <!-- Actions -->\n    <div *ngIf=\"data.actions\"\n    class=\"n7-advanced-autocomplete__action-bar\">\n        <n7-anchor-wrapper\n        *ngIf=\"data.actions.advanced\"\n        [data]=\"data.actions.advanced.anchor\"\n        (clicked)=\"onClick($event)\"\n        [classes]=\"'n7-btn n7-advanced-autocomplete__advanced-search'\">\n            {{data.actions.advanced.text}}\n        </n7-anchor-wrapper>\n        \n        <n7-anchor-wrapper\n        *ngIf=\"data.actions.showMore\"\n        [data]=\"data.actions.showMore.anchor\"\n        (clicked)=\"onClick($event)\"\n        [classes]=\"'n7-btn n7-btn-cta n7-advanced-autocomplete__show-more'\">\n            {{data.actions.showMore.text}}\n        </n7-anchor-wrapper>\n    </div>\n</ng-template>\n\n<!-- Template: Items -->\n<ng-template #items let-items>\n    <n7-anchor-wrapper *ngFor=\"let item of items\"\n    [data]=\"item.anchor\"\n    (clicked)=\"onClick($event)\"\n    [classes]=\"'n7-advanced-autocomplete__item'\">\n    <span *ngIf=\"item.title\" class=\"n7-advanced-autocomplete__item-title\" [innerHTML]=\"item.title\"></span>\n    <ng-container *ngIf=\"item.metadata\">\n        <span *ngFor=\"let meta of item.metadata\" class=\"n7-advanced-autocomplete__item-metadata\">\n            <span *ngIf=\"meta.key\" class=\"n7-advanced-autocomplete__item-metadata-key\">{{ meta.key }}</span>\n            <span *ngIf=\"meta.value\" class=\"n7-advanced-autocomplete__item-metadata-value\">{{ meta.value }}</span>\n        </span>\n    </ng-container>\n    </n7-anchor-wrapper>\n</ng-template>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtYXV0b2NvbXBsZXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hZHZhbmNlZC1hdXRvY29tcGxldGUvYWR2YW5jZWQtYXV0b2NvbXBsZXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFNakQsK0NBaUJDOzs7SUFoQkMsNENBQTBDOztJQUMxQyw0Q0FXQzs7SUFDRCw2Q0FBaUI7O0lBQ2pCLDRDQUFjOztJQUNkLDBDQUFZOzs7OztBQUdkLHdDQWFDOzs7Ozs7SUFUQywyQ0FBaUI7Ozs7O0lBSWpCLDBDQUFlOzs7OztJQUlmLDZDQUFtRDs7Ozs7QUFHckQsNENBUUM7OztJQVBDLDhDQUFtQzs7SUFDbkMsOENBS0M7O0FBT0gsTUFBTSxPQUFPLDZCQUE2Qjs7Ozs7SUFJeEMsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQVpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyx1Z0lBQTJDO2FBQzVDOzs7bUJBRUUsS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sNkNBQXlDOztJQUN6Qyw2Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQURWQU5DRUQtQVVUT0NPTVBMRVRFLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQW5jaG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkLWludGVyZmFjZXMnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgQWR2YW5jZWRBdXRvY29tcGxldGVDb21wb25lbnQncyBcImRhdGFcIlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElBZHZhbmNlZEF1dG9jb21wbGV0ZURhdGEge1xuICByZXN1bHRzPzogSUFkdmFuY2VkQXV0b2NvbXBsZXRlUmVzcG9uc2VbXTtcbiAgYWN0aW9ucz86IHtcbiAgICBhZHZhbmNlZD86IHtcbiAgICAgIHRleHQ6IHN0cmluZztcbiAgICAgIGFuY2hvcj86IElBbmNob3I7XG4gICAgICBjbGFzc2VzPzogYW55O1xuICAgIH1cbiAgICBzaG93TW9yZT86IHtcbiAgICAgIHRleHQ6IHN0cmluZztcbiAgICAgIGFuY2hvcj86IElBbmNob3I7XG4gICAgICBjbGFzc2VzPzogYW55O1xuICAgIH1cbiAgfVxuICBmYWxsYmFjazogc3RyaW5nO1xuICBjbGFzc2VzPzogYW55O1xuICBfbWV0YT86IGFueTtcbn1cblxuaW50ZXJmYWNlIElBZHZhbmNlZEF1dG9jb21wbGV0ZUl0ZW0ge1xuICAvKipcbiAgICogYW5jaG9yIDxhPlxuICAgKi9cbiAgYW5jaG9yPzogSUFuY2hvcjtcbiAgLyoqXG4gICAqIFJlbmRlcmVkIHRleHQgZm9yIHRoZSByZXN1bHQgaXRlbVxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIG1ldGFkYXRhIGZvciB0aGUgcmVzdWx0IGl0ZW1cbiAgICovXG4gIG1ldGFkYXRhPzogQXJyYXk8eyBrZXk/OiBzdHJpbmcsIHZhbHVlPzogc3RyaW5nIH0+O1xufVxuXG5pbnRlcmZhY2UgSUFkdmFuY2VkQXV0b2NvbXBsZXRlUmVzcG9uc2Uge1xuICBpdGVtczogSUFkdmFuY2VkQXV0b2NvbXBsZXRlSXRlbVtdO1xuICBncm91cD86IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGNsYXNzZXM/OiBzdHJpbmc7XG4gICAgaWNvbj86IHN0cmluZztcbiAgICBhbmNob3I/OiBJQW5jaG9yO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWFkdmFuY2VkLWF1dG9jb21wbGV0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZHZhbmNlZC1hdXRvY29tcGxldGUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQWR2YW5jZWRBdXRvY29tcGxldGVDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJQWR2YW5jZWRBdXRvY29tcGxldGVEYXRhO1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DbGljayhwYXlsb2FkKXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cbn0iXX0=