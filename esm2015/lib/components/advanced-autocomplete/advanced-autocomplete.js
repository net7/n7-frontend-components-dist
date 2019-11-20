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
                template: "<div *ngIf=\"data\"\n     class=\"n7-advanced-autocomplete\"\n     [ngClass]=\"{ 'is-empty' : (data.results && data.results.length == 0), 'is-loading': !data.results }\">\n    <!-- If there are some results -->\n    <ng-container *ngIf=\"data.results && data.results.length > 0\">\n        <ng-container *ngTemplateOutlet=\"hasLoaded\"></ng-container>\n    </ng-container>\n    <!-- If no results are found -->\n    <ng-container *ngIf=\"data.results && data.results.length == 0\">\n        <ng-container *ngTemplateOutlet=\"isEmpty\"></ng-container>\n    </ng-container>\n    <!-- If is loading -->\n    <ng-container *ngIf=\"!data.results\">\n        <ng-container *ngTemplateOutlet=\"isLoading\"></ng-container>\n    </ng-container>\n</div>\n\n<!-- Template: Is empty -->\n<ng-template #isEmpty>\n    <div class=\"n7-advanced-autocomplete__empty\" [innerHTML]=\"data.fallback\"></div>\n</ng-template>\n\n<!-- Template: Is loading -->\n<ng-template #isLoading>\n    <!-- Layout appends loader-component here -->\n    <span class=\"n7-advanced-autocomplete__loader\"\n          id=\"n7-advanced-autocomplete__loader\">\n    </span>\n</ng-template>\n\n<!-- Template: Has loaded -->\n<ng-template #hasLoaded>\n    <!-- Search results -->\n    <div class=\"n7-advanced-autocomplete__results\">\n        <!-- Render groups -->\n        <ng-container *ngFor=\"let res of data.results\">\n            <div *ngIf=\"res.group\" class=\"n7-advanced-autocomplete__group\">\n                <div class=\"n7-advanced-autocomplete__group-title-wrapper {{ res.group.classes || '' }}\"\n                     (click)=\"onClick(res.group.payload)\">\n                    <span *ngIf=\"res.group.icon\" class=\"n7-advanced-autocomplete__group-icon {{ res.group.icon }}\"></span>\n                    <span class=\"n7-advanced-autocomplete__group-title\">{{res.group.title}}</span>\n                </div>\n                <div class=\"n7-advanced-autocomplete__items\">\n                    <ng-container *ngTemplateOutlet=\"items; context:{$implicit: res.group.items}\"></ng-container>\n                </div>\n            </div>\n        </ng-container>\n        <!-- Render items -->\n        <ng-container *ngTemplateOutlet=\"items; context:{$implicit: data.results}\"></ng-container>\n    </div>\n    <!-- Actions -->\n    <div *ngIf=\"data.actions\"\n            class=\"n7-advanced-autocomplete__action-bar\">\n        <button *ngIf=\"data.actions.advanced\"\n                (click)=\"onClick(data.actions.advanced.payload)\"\n                class=\"n7-btn n7-advanced-autocomplete__advanced-search\">\n            {{data.actions.advanced.text}}\n        </button>\n        <button *ngIf=\"data.actions.showMore\"\n                (click)=\"onClick(data.actions.showMore.payload)\"\n                class=\"n7-btn n7-btn-cta n7-advanced-autocomplete__show-more\">\n            {{data.actions.showMore.text}}\n        </button>\n    </div>\n</ng-template>\n\n<!-- Template: Items -->\n<ng-template #items let-items>\n    <div *ngFor=\"let item of items\"\n         class=\"n7-advanced-autocomplete__item\"\n         (click)=\"onClick(item.payload)\">\n        <!-- Skip items that are groups -->\n        <ng-container *ngIf=\"item.label\">\n            <span class=\"n7-advanced-autocomplete__item-title\">\n                {{item.label}}\n            </span>\n            <span *ngIf=\"item.value\">\n                <span\n                *ngFor=\"let v of item.value\"\n                class=\"n7-advanced-autocomplete__item-metadata\">\n                    <ng-container *ngIf=\"v.key\">\n                        <span class=\"n7-advanced-autocomplete__item-label\">{{v.key}}</span>\n                    </ng-container>\n                    <ng-container *ngIf=\"v.value\">\n                        <span class=\"n7-advanced-autocomplete__item-value\">{{v.value}}</span>\n                    </ng-container>\n                    <ng-container *ngIf=\"!v.value && !v.key\">\n                        <span class=\"n7-advanced-autocomplete__item-value\">{{v}}</span>\n                    </ng-container>\n                </span>\n            </span>\n        </ng-container>\n    </div>\n</ng-template>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtYXV0b2NvbXBsZXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hZHZhbmNlZC1hdXRvY29tcGxldGUvYWR2YW5jZWQtYXV0b2NvbXBsZXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQU9qRCwrQ0FpQkM7OztJQWhCQyw0Q0FBMEM7O0lBQzFDLDRDQVdDOztJQUNELDZDQUFpQjs7SUFDakIsNENBQWM7O0lBQ2QsMENBQVk7Ozs7O0FBRWQsbURBZUM7Ozs7Ozs7SUFWQyw4Q0FNQzs7SUFDRCw4Q0FBZTs7SUFDZiw4Q0FBWTs7SUFDWixnREFBYzs7QUFPaEIsTUFBTSxPQUFPLDZCQUE2Qjs7Ozs7SUFJeEMsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQVpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQywrbUlBQTJDO2FBQzVDOzs7bUJBRUUsS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sNkNBQXlDOztJQUN6Qyw2Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQURWQU5DRUQtQVVUT0NPTVBMRVRFLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBBZHZhbmNlZEF1dG9jb21wbGV0ZUNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IE5BTUUgKHJlcXVpcmVkfG9wdGlvbnMpIDwtLS0gVE9ETzogdXBkYXRlIHdpdGggaW50ZXJmYWNlIHByb3BlcnRpZXNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJQWR2YW5jZWRBdXRvY29tcGxldGVEYXRhIHtcbiAgcmVzdWx0cz86IElBZHZhbmNlZEF1dG9jb21wbGV0ZVJlc3BvbnNlW107XG4gIGFjdGlvbnM/OiB7XG4gICAgYWR2YW5jZWQ/OiB7XG4gICAgICB0ZXh0OiBzdHJpbmc7XG4gICAgICBwYXlsb2FkOiBhbnk7XG4gICAgICBjbGFzc2VzPzogYW55O1xuICAgIH1cbiAgICBzaG93TW9yZT86IHtcbiAgICAgIHRleHQ6IHN0cmluZztcbiAgICAgIHBheWxvYWQ6IGFueTtcbiAgICAgIGNsYXNzZXM/OiBhbnk7XG4gICAgfVxuICB9XG4gIGZhbGxiYWNrOiBzdHJpbmc7XG4gIGNsYXNzZXM/OiBhbnk7XG4gIF9tZXRhPzogYW55O1xufVxuZXhwb3J0IGludGVyZmFjZSBJQWR2YW5jZWRBdXRvY29tcGxldGVSZXNwb25zZSB7XG4gIC8qKlxuICAgKiBncm91cCBvZiByZXN1bHRzIHdpdGggYSB0aXRsZVxuICAgKiBOT1RFOiBOZXN0ZWQgZ3JvdXBzIFdJTEwgTk9UIEJFIFJFTkRFUkVEIVxuICAgKi9cbiAgZ3JvdXA/OiB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBpdGVtczogSUFkdmFuY2VkQXV0b2NvbXBsZXRlUmVzcG9uc2VbXTtcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xuICAgIGljb24/OiBzdHJpbmc7XG4gICAgcGF5bG9hZD86IGFueTtcbiAgfVxuICBsYWJlbD86IHN0cmluZztcbiAgdmFsdWU/OiBhbnk7XG4gIHBheWxvYWQ/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWFkdmFuY2VkLWF1dG9jb21wbGV0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZHZhbmNlZC1hdXRvY29tcGxldGUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQWR2YW5jZWRBdXRvY29tcGxldGVDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJQWR2YW5jZWRBdXRvY29tcGxldGVEYXRhO1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DbGljayhwYXlsb2FkKXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cbn0iXX0=