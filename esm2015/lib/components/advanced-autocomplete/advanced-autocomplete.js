//---------------------------
// ADVANCED-AUTOCOMPLETE.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let AdvancedAutocompleteComponent = class AdvancedAutocompleteComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], AdvancedAutocompleteComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AdvancedAutocompleteComponent.prototype, "emit", void 0);
AdvancedAutocompleteComponent = __decorate([
    Component({
        selector: 'n7-advanced-autocomplete',
        template: "<div *ngIf=\"data\" class=\"n7-advanced-autocomplete\"\n    [ngClass]=\"{ 'is-empty' : (data.results && data.results.length === 0), 'is-loading': !data.results }\">\n    <!-- If there are some results -->\n    <ng-container *ngIf=\"data.results && data.results.length > 0\">\n        <ng-container *ngTemplateOutlet=\"hasLoaded\"></ng-container>\n    </ng-container>\n    <!-- If no results are found -->\n    <ng-container *ngIf=\"data.results && data.results.length === 0\">\n        <ng-container *ngTemplateOutlet=\"isEmpty\"></ng-container>\n    </ng-container>\n    <!-- If is loading -->\n    <ng-container *ngIf=\"!data.results\">\n        <ng-container *ngTemplateOutlet=\"isLoading\"></ng-container>\n    </ng-container>\n</div>\n\n<!-- Template: Is empty -->\n<ng-template #isEmpty>\n    <div class=\"n7-advanced-autocomplete__empty\" [innerHTML]=\"data.fallback\"></div>\n    <!-- Render actions -->\n    <ng-container *ngTemplateOutlet=\"actions; context:{$implicit: data.actions}\"></ng-container>\n</ng-template>\n\n<!-- Template: Is loading -->\n<ng-template #isLoading>\n    <!-- Layout appends loader-component here -->\n    <span class=\"n7-advanced-autocomplete__loader\" id=\"n7-advanced-autocomplete__loader\"></span>\n</ng-template>\n\n<!-- Template: Has loaded -->\n<ng-template #hasLoaded>\n    <!-- Search results -->\n    <div class=\"n7-advanced-autocomplete__results\">\n        <!-- Render groups -->\n        <ng-container *ngFor=\"let res of data.results\">\n            <div *ngIf=\"res.group\" class=\"n7-advanced-autocomplete__group\">\n                <div class=\"n7-advanced-autocomplete__group-title-wrapper {{ res.group.classes || '' }}\">\n                    <n7-anchor-wrapper\n                        [data]=\"res.group.anchor\"\n                        (clicked)=\"onClick($event)\">\n                        <span *ngIf=\"res.group.icon\" class=\"n7-advanced-autocomplete__group-icon {{ res.group.icon }}\"></span>\n                        <span class=\"n7-advanced-autocomplete__group-title\">{{res.group.title}}</span>\n                    </n7-anchor-wrapper>\n                </div>\n                <!-- Render items -->\n                <div class=\"n7-advanced-autocomplete__items\">\n                    <ng-container *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"></ng-container>\n                </div>\n            </div>\n            <div *ngIf=\"!res.group\" class=\"n7-advanced-autocomplete__nogroup\">\n                <ng-container *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"></ng-container>\n            </div>\n        </ng-container>\n    </div>\n    <!-- Actions -->\n    <ng-container *ngTemplateOutlet=\"actions; context:{$implicit: data.actions}\"></ng-container>\n</ng-template>\n\n<!-- Template: Items -->\n<ng-template #items let-items>\n    <n7-anchor-wrapper *ngFor=\"let item of items\"\n    [data]=\"item.anchor\"\n    (clicked)=\"onClick($event)\"\n    [classes]=\"'n7-advanced-autocomplete__item'\">\n    <span *ngIf=\"item.title\" class=\"n7-advanced-autocomplete__item-title\" [innerHTML]=\"item.title\"></span>\n    <ng-container *ngIf=\"item.metadata\">\n        <span *ngFor=\"let meta of item.metadata\" class=\"n7-advanced-autocomplete__item-metadata\">\n            <span *ngIf=\"meta.key\" class=\"n7-advanced-autocomplete__item-metadata-key\">{{ meta.key }}</span>\n            <span *ngIf=\"meta.value\" class=\"n7-advanced-autocomplete__item-metadata-value\">{{ meta.value }}</span>\n        </span>\n    </ng-container>\n    </n7-anchor-wrapper>\n</ng-template>\n\n<!-- Template: Actions -->\n<ng-template #actions let-actions>\n    <div *ngIf=\"actions\" class=\"n7-advanced-autocomplete__action-bar\">\n        <n7-anchor-wrapper *ngIf=\"actions.advanced\" [data]=\"actions.advanced.anchor\"\n            (clicked)=\"onClick($event)\" [classes]=\"'n7-btn n7-advanced-autocomplete__advanced-search'\">\n            {{actions.advanced.text}}\n        </n7-anchor-wrapper>\n\n        <n7-anchor-wrapper *ngIf=\"actions.showMore\" [data]=\"actions.showMore.anchor\"\n            (clicked)=\"onClick($event)\" [classes]=\"'n7-btn n7-btn-cta n7-advanced-autocomplete__show-more'\">\n            {{actions.showMore.text}}\n        </n7-anchor-wrapper>\n    </div>\n</ng-template>\n"
    })
], AdvancedAutocompleteComponent);
export { AdvancedAutocompleteComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtYXV0b2NvbXBsZXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hZHZhbmNlZC1hdXRvY29tcGxldGUvYWR2YW5jZWQtYXV0b2NvbXBsZXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QiwyQkFBMkI7QUFDM0IsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXNEakQsSUFBYSw2QkFBNkIsR0FBMUMsTUFBYSw2QkFBNkI7SUFLeEMsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDRixDQUFBO0FBVFU7SUFBUixLQUFLLEVBQUU7OzJEQUFnQztBQUUvQjtJQUFSLEtBQUssRUFBRTs7MkRBQVc7QUFIUiw2QkFBNkI7SUFKekMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDBCQUEwQjtRQUNwQyxvdElBQTJDO0tBQzVDLENBQUM7R0FDVyw2QkFBNkIsQ0FVekM7U0FWWSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQURWQU5DRUQtQVVUT0NPTVBMRVRFLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBBZHZhbmNlZEF1dG9jb21wbGV0ZUNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWR2YW5jZWRBdXRvY29tcGxldGVEYXRhIHtcbiAgcmVzdWx0cz86IEFkdmFuY2VkQXV0b2NvbXBsZXRlUmVzcG9uc2VbXTtcbiAgYWN0aW9ucz86IHtcbiAgICBhZHZhbmNlZD86IHtcbiAgICAgIHRleHQ6IHN0cmluZztcbiAgICAgIGFuY2hvcj86IEFuY2hvcjtcbiAgICAgIGNsYXNzZXM/OiBhbnk7XG4gICAgfTtcbiAgICBzaG93TW9yZT86IHtcbiAgICAgIHRleHQ6IHN0cmluZztcbiAgICAgIGFuY2hvcj86IEFuY2hvcjtcbiAgICAgIGNsYXNzZXM/OiBhbnk7XG4gICAgfTtcbiAgfTtcbiAgZmFsbGJhY2s6IHN0cmluZztcbiAgY2xhc3Nlcz86IGFueTtcbiAgX21ldGE/OiBhbnk7XG59XG5cbmludGVyZmFjZSBBZHZhbmNlZEF1dG9jb21wbGV0ZUl0ZW0ge1xuICAvKipcbiAgICogYW5jaG9yIDxhPlxuICAgKi9cbiAgYW5jaG9yPzogQW5jaG9yO1xuICAvKipcbiAgICogUmVuZGVyZWQgdGV4dCBmb3IgdGhlIHJlc3VsdCBpdGVtXG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgbWV0YWRhdGEgZm9yIHRoZSByZXN1bHQgaXRlbVxuICAgKi9cbiAgbWV0YWRhdGE/OiBBcnJheTx7IGtleT86IHN0cmluZzsgdmFsdWU/OiBzdHJpbmcgfT47XG59XG5cbmludGVyZmFjZSBBZHZhbmNlZEF1dG9jb21wbGV0ZVJlc3BvbnNlIHtcbiAgaXRlbXM6IEFkdmFuY2VkQXV0b2NvbXBsZXRlSXRlbVtdO1xuICBncm91cD86IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGNsYXNzZXM/OiBzdHJpbmc7XG4gICAgaWNvbj86IHN0cmluZztcbiAgICBhbmNob3I/OiBBbmNob3I7XG4gIH07XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWFkdmFuY2VkLWF1dG9jb21wbGV0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZHZhbmNlZC1hdXRvY29tcGxldGUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQWR2YW5jZWRBdXRvY29tcGxldGVDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBBZHZhbmNlZEF1dG9jb21wbGV0ZURhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cbn1cbiJdfQ==