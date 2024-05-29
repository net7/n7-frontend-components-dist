//---------------------------
// ADVANCED-AUTOCOMPLETE.ts
//---------------------------
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../anchor-wrapper/anchor-wrapper";
export class AdvancedAutocompleteComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: AdvancedAutocompleteComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: AdvancedAutocompleteComponent, selector: "n7-advanced-autocomplete", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div\n  *ngIf=\"data\"\n  class=\"n7-advanced-autocomplete\"\n  [ngClass]=\"{ 'is-empty' : (data.results && data.results.length === 0), 'is-loading': !data.results }\"\n>\n  <!-- If there are some results -->\n  <ng-container *ngIf=\"data.results && data.results.length > 0\">\n    <ng-container *ngTemplateOutlet=\"hasLoaded\"></ng-container>\n  </ng-container>\n  <!-- If no results are found -->\n  <ng-container *ngIf=\"data.results && data.results.length === 0\">\n    <ng-container *ngTemplateOutlet=\"isEmpty\"></ng-container>\n  </ng-container>\n  <!-- If is loading -->\n  <ng-container *ngIf=\"!data.results\">\n    <ng-container *ngTemplateOutlet=\"isLoading\"></ng-container>\n  </ng-container>\n</div>\n\n<!-- Template: Is empty -->\n<ng-template #isEmpty>\n  <div\n    class=\"n7-advanced-autocomplete__empty\"\n    [innerHTML]=\"data.fallback\"\n  ></div>\n  <!-- Render actions -->\n  <ng-container\n    *ngTemplateOutlet=\"actions; context:{$implicit: data.actions}\"\n  ></ng-container>\n</ng-template>\n\n<!-- Template: Is loading -->\n<ng-template #isLoading>\n  <!-- Layout appends loader-component here -->\n  <span\n    class=\"n7-advanced-autocomplete__loader\"\n    id=\"n7-advanced-autocomplete__loader\"\n  ></span>\n</ng-template>\n\n<!-- Template: Has loaded -->\n<ng-template #hasLoaded>\n  <!-- Search results -->\n  <div class=\"n7-advanced-autocomplete__results\">\n    <!-- Render groups -->\n    <ng-container *ngFor=\"let res of data.results\">\n      <div *ngIf=\"res.group\" class=\"n7-advanced-autocomplete__group\">\n        <div\n          class=\"n7-advanced-autocomplete__group-title-wrapper {{ res.group.classes || '' }}\"\n        >\n          <n7-anchor-wrapper\n            [data]=\"res.group.anchor\"\n            (clicked)=\"onClick($event)\"\n          >\n            <span\n              *ngIf=\"res.group.icon\"\n              class=\"n7-advanced-autocomplete__group-icon {{ res.group.icon }}\"\n            ></span>\n            <span class=\"n7-advanced-autocomplete__group-title\"\n              >{{res.group.title}}</span\n            >\n          </n7-anchor-wrapper>\n        </div>\n        <!-- Render items -->\n        <div class=\"n7-advanced-autocomplete__items\">\n          <ng-container\n            *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"\n          ></ng-container>\n        </div>\n      </div>\n      <div *ngIf=\"!res.group\" class=\"n7-advanced-autocomplete__nogroup\">\n        <ng-container\n          *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"\n        ></ng-container>\n      </div>\n    </ng-container>\n  </div>\n  <!-- Actions -->\n  <ng-container\n    *ngTemplateOutlet=\"actions; context:{$implicit: data.actions}\"\n  ></ng-container>\n</ng-template>\n\n<!-- Template: Items -->\n<ng-template #items let-items>\n  <n7-anchor-wrapper\n    *ngFor=\"let item of items\"\n    [data]=\"item.anchor\"\n    (clicked)=\"onClick($event)\"\n    [classes]=\"'n7-advanced-autocomplete__item'\"\n  >\n    <span\n      *ngIf=\"item.title\"\n      class=\"n7-advanced-autocomplete__item-title\"\n      [innerHTML]=\"item.title\"\n    ></span>\n    <ng-container *ngIf=\"item.metadata\">\n      <span\n        *ngFor=\"let meta of item.metadata\"\n        class=\"n7-advanced-autocomplete__item-metadata\"\n      >\n        <span\n          *ngIf=\"meta.key\"\n          class=\"n7-advanced-autocomplete__item-metadata-key\"\n          >{{ meta.key }}</span\n        >\n        <span\n          *ngIf=\"meta.value\"\n          class=\"n7-advanced-autocomplete__item-metadata-value\"\n          >{{ meta.value }}</span\n        >\n      </span>\n    </ng-container>\n  </n7-anchor-wrapper>\n</ng-template>\n\n<!-- Template: Actions -->\n<ng-template #actions let-actions>\n  <div *ngIf=\"actions\" class=\"n7-advanced-autocomplete__action-bar\">\n    <n7-anchor-wrapper\n      *ngIf=\"actions.advanced\"\n      [data]=\"actions.advanced.anchor\"\n      (clicked)=\"onClick($event)\"\n      [classes]=\"'n7-btn n7-advanced-autocomplete__advanced-search'\"\n    >\n      {{actions.advanced.text}}\n    </n7-anchor-wrapper>\n\n    <n7-anchor-wrapper\n      *ngIf=\"actions.showMore\"\n      [data]=\"actions.showMore.anchor\"\n      (clicked)=\"onClick($event)\"\n      [classes]=\"'n7-btn n7-btn-cta n7-advanced-autocomplete__show-more'\"\n    >\n      {{actions.showMore.text}}\n    </n7-anchor-wrapper>\n  </div>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i2.AnchorWrapperComponent, selector: "n7-anchor-wrapper", inputs: ["data", "classes"], outputs: ["clicked"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: AdvancedAutocompleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-advanced-autocomplete', template: "<div\n  *ngIf=\"data\"\n  class=\"n7-advanced-autocomplete\"\n  [ngClass]=\"{ 'is-empty' : (data.results && data.results.length === 0), 'is-loading': !data.results }\"\n>\n  <!-- If there are some results -->\n  <ng-container *ngIf=\"data.results && data.results.length > 0\">\n    <ng-container *ngTemplateOutlet=\"hasLoaded\"></ng-container>\n  </ng-container>\n  <!-- If no results are found -->\n  <ng-container *ngIf=\"data.results && data.results.length === 0\">\n    <ng-container *ngTemplateOutlet=\"isEmpty\"></ng-container>\n  </ng-container>\n  <!-- If is loading -->\n  <ng-container *ngIf=\"!data.results\">\n    <ng-container *ngTemplateOutlet=\"isLoading\"></ng-container>\n  </ng-container>\n</div>\n\n<!-- Template: Is empty -->\n<ng-template #isEmpty>\n  <div\n    class=\"n7-advanced-autocomplete__empty\"\n    [innerHTML]=\"data.fallback\"\n  ></div>\n  <!-- Render actions -->\n  <ng-container\n    *ngTemplateOutlet=\"actions; context:{$implicit: data.actions}\"\n  ></ng-container>\n</ng-template>\n\n<!-- Template: Is loading -->\n<ng-template #isLoading>\n  <!-- Layout appends loader-component here -->\n  <span\n    class=\"n7-advanced-autocomplete__loader\"\n    id=\"n7-advanced-autocomplete__loader\"\n  ></span>\n</ng-template>\n\n<!-- Template: Has loaded -->\n<ng-template #hasLoaded>\n  <!-- Search results -->\n  <div class=\"n7-advanced-autocomplete__results\">\n    <!-- Render groups -->\n    <ng-container *ngFor=\"let res of data.results\">\n      <div *ngIf=\"res.group\" class=\"n7-advanced-autocomplete__group\">\n        <div\n          class=\"n7-advanced-autocomplete__group-title-wrapper {{ res.group.classes || '' }}\"\n        >\n          <n7-anchor-wrapper\n            [data]=\"res.group.anchor\"\n            (clicked)=\"onClick($event)\"\n          >\n            <span\n              *ngIf=\"res.group.icon\"\n              class=\"n7-advanced-autocomplete__group-icon {{ res.group.icon }}\"\n            ></span>\n            <span class=\"n7-advanced-autocomplete__group-title\"\n              >{{res.group.title}}</span\n            >\n          </n7-anchor-wrapper>\n        </div>\n        <!-- Render items -->\n        <div class=\"n7-advanced-autocomplete__items\">\n          <ng-container\n            *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"\n          ></ng-container>\n        </div>\n      </div>\n      <div *ngIf=\"!res.group\" class=\"n7-advanced-autocomplete__nogroup\">\n        <ng-container\n          *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"\n        ></ng-container>\n      </div>\n    </ng-container>\n  </div>\n  <!-- Actions -->\n  <ng-container\n    *ngTemplateOutlet=\"actions; context:{$implicit: data.actions}\"\n  ></ng-container>\n</ng-template>\n\n<!-- Template: Items -->\n<ng-template #items let-items>\n  <n7-anchor-wrapper\n    *ngFor=\"let item of items\"\n    [data]=\"item.anchor\"\n    (clicked)=\"onClick($event)\"\n    [classes]=\"'n7-advanced-autocomplete__item'\"\n  >\n    <span\n      *ngIf=\"item.title\"\n      class=\"n7-advanced-autocomplete__item-title\"\n      [innerHTML]=\"item.title\"\n    ></span>\n    <ng-container *ngIf=\"item.metadata\">\n      <span\n        *ngFor=\"let meta of item.metadata\"\n        class=\"n7-advanced-autocomplete__item-metadata\"\n      >\n        <span\n          *ngIf=\"meta.key\"\n          class=\"n7-advanced-autocomplete__item-metadata-key\"\n          >{{ meta.key }}</span\n        >\n        <span\n          *ngIf=\"meta.value\"\n          class=\"n7-advanced-autocomplete__item-metadata-value\"\n          >{{ meta.value }}</span\n        >\n      </span>\n    </ng-container>\n  </n7-anchor-wrapper>\n</ng-template>\n\n<!-- Template: Actions -->\n<ng-template #actions let-actions>\n  <div *ngIf=\"actions\" class=\"n7-advanced-autocomplete__action-bar\">\n    <n7-anchor-wrapper\n      *ngIf=\"actions.advanced\"\n      [data]=\"actions.advanced.anchor\"\n      (clicked)=\"onClick($event)\"\n      [classes]=\"'n7-btn n7-advanced-autocomplete__advanced-search'\"\n    >\n      {{actions.advanced.text}}\n    </n7-anchor-wrapper>\n\n    <n7-anchor-wrapper\n      *ngIf=\"actions.showMore\"\n      [data]=\"actions.showMore.anchor\"\n      (clicked)=\"onClick($event)\"\n      [classes]=\"'n7-btn n7-btn-cta n7-advanced-autocomplete__show-more'\"\n    >\n      {{actions.showMore.text}}\n    </n7-anchor-wrapper>\n  </div>\n</ng-template>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtYXV0b2NvbXBsZXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZHYtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2FkdmFuY2VkLWF1dG9jb21wbGV0ZS9hZHZhbmNlZC1hdXRvY29tcGxldGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYWR2YW5jZWQtYXV0b2NvbXBsZXRlL2FkdmFuY2VkLWF1dG9jb21wbGV0ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QiwyQkFBMkI7QUFDM0IsNkJBQTZCO0FBRTdCLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBc0RqRCxNQUFNLE9BQU8sNkJBQTZCO0lBS3hDLE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzhHQVRVLDZCQUE2QjtrR0FBN0IsNkJBQTZCLHdHQzFEMUMsbTFJQTBJQTs7MkZEaEZhLDZCQUE2QjtrQkFKekMsU0FBUzsrQkFDRSwwQkFBMEI7OEJBSTNCLElBQUk7c0JBQVosS0FBSztnQkFFRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQURWQU5DRUQtQVVUT0NPTVBMRVRFLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XG5cbmludGVyZmFjZSBBZHZhbmNlZEF1dG9jb21wbGV0ZUl0ZW0ge1xuICAvKipcbiAgICogYW5jaG9yIDxhPlxuICAgKi9cbiAgYW5jaG9yPzogQW5jaG9yO1xuICAvKipcbiAgICogUmVuZGVyZWQgdGV4dCBmb3IgdGhlIHJlc3VsdCBpdGVtXG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgbWV0YWRhdGEgZm9yIHRoZSByZXN1bHQgaXRlbVxuICAgKi9cbiAgbWV0YWRhdGE/OiBBcnJheTx7IGtleT86IHN0cmluZzsgdmFsdWU/OiBzdHJpbmcgfT47XG59XG5cbmludGVyZmFjZSBBZHZhbmNlZEF1dG9jb21wbGV0ZVJlc3BvbnNlIHtcbiAgaXRlbXM6IEFkdmFuY2VkQXV0b2NvbXBsZXRlSXRlbVtdO1xuICBncm91cD86IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGNsYXNzZXM/OiBzdHJpbmc7XG4gICAgaWNvbj86IHN0cmluZztcbiAgICBhbmNob3I/OiBBbmNob3I7XG4gIH07XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBBZHZhbmNlZEF1dG9jb21wbGV0ZUNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWR2YW5jZWRBdXRvY29tcGxldGVEYXRhIHtcbiAgcmVzdWx0cz86IEFkdmFuY2VkQXV0b2NvbXBsZXRlUmVzcG9uc2VbXTtcbiAgYWN0aW9ucz86IHtcbiAgICBhZHZhbmNlZD86IHtcbiAgICAgIHRleHQ6IHN0cmluZztcbiAgICAgIGFuY2hvcj86IEFuY2hvcjtcbiAgICAgIGNsYXNzZXM/OiBhbnk7XG4gICAgfTtcbiAgICBzaG93TW9yZT86IHtcbiAgICAgIHRleHQ6IHN0cmluZztcbiAgICAgIGFuY2hvcj86IEFuY2hvcjtcbiAgICAgIGNsYXNzZXM/OiBhbnk7XG4gICAgfTtcbiAgfTtcbiAgZmFsbGJhY2s6IHN0cmluZztcbiAgY2xhc3Nlcz86IGFueTtcbiAgX21ldGE/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWFkdmFuY2VkLWF1dG9jb21wbGV0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZHZhbmNlZC1hdXRvY29tcGxldGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFkdmFuY2VkQXV0b2NvbXBsZXRlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogQWR2YW5jZWRBdXRvY29tcGxldGVEYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG59XG4iLCI8ZGl2XG4gICpuZ0lmPVwiZGF0YVwiXG4gIGNsYXNzPVwibjctYWR2YW5jZWQtYXV0b2NvbXBsZXRlXCJcbiAgW25nQ2xhc3NdPVwieyAnaXMtZW1wdHknIDogKGRhdGEucmVzdWx0cyAmJiBkYXRhLnJlc3VsdHMubGVuZ3RoID09PSAwKSwgJ2lzLWxvYWRpbmcnOiAhZGF0YS5yZXN1bHRzIH1cIlxuPlxuICA8IS0tIElmIHRoZXJlIGFyZSBzb21lIHJlc3VsdHMgLS0+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJkYXRhLnJlc3VsdHMgJiYgZGF0YS5yZXN1bHRzLmxlbmd0aCA+IDBcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaGFzTG9hZGVkXCI+PC9uZy1jb250YWluZXI+XG4gIDwvbmctY29udGFpbmVyPlxuICA8IS0tIElmIG5vIHJlc3VsdHMgYXJlIGZvdW5kIC0tPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGF0YS5yZXN1bHRzICYmIGRhdGEucmVzdWx0cy5sZW5ndGggPT09IDBcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaXNFbXB0eVwiPjwvbmctY29udGFpbmVyPlxuICA8L25nLWNvbnRhaW5lcj5cbiAgPCEtLSBJZiBpcyBsb2FkaW5nIC0tPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWRhdGEucmVzdWx0c1wiPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpc0xvYWRpbmdcIj48L25nLWNvbnRhaW5lcj5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cblxuPCEtLSBUZW1wbGF0ZTogSXMgZW1wdHkgLS0+XG48bmctdGVtcGxhdGUgI2lzRW1wdHk+XG4gIDxkaXZcbiAgICBjbGFzcz1cIm43LWFkdmFuY2VkLWF1dG9jb21wbGV0ZV9fZW1wdHlcIlxuICAgIFtpbm5lckhUTUxdPVwiZGF0YS5mYWxsYmFja1wiXG4gID48L2Rpdj5cbiAgPCEtLSBSZW5kZXIgYWN0aW9ucyAtLT5cbiAgPG5nLWNvbnRhaW5lclxuICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwiYWN0aW9uczsgY29udGV4dDp7JGltcGxpY2l0OiBkYXRhLmFjdGlvbnN9XCJcbiAgPjwvbmctY29udGFpbmVyPlxuPC9uZy10ZW1wbGF0ZT5cblxuPCEtLSBUZW1wbGF0ZTogSXMgbG9hZGluZyAtLT5cbjxuZy10ZW1wbGF0ZSAjaXNMb2FkaW5nPlxuICA8IS0tIExheW91dCBhcHBlbmRzIGxvYWRlci1jb21wb25lbnQgaGVyZSAtLT5cbiAgPHNwYW5cbiAgICBjbGFzcz1cIm43LWFkdmFuY2VkLWF1dG9jb21wbGV0ZV9fbG9hZGVyXCJcbiAgICBpZD1cIm43LWFkdmFuY2VkLWF1dG9jb21wbGV0ZV9fbG9hZGVyXCJcbiAgPjwvc3Bhbj5cbjwvbmctdGVtcGxhdGU+XG5cbjwhLS0gVGVtcGxhdGU6IEhhcyBsb2FkZWQgLS0+XG48bmctdGVtcGxhdGUgI2hhc0xvYWRlZD5cbiAgPCEtLSBTZWFyY2ggcmVzdWx0cyAtLT5cbiAgPGRpdiBjbGFzcz1cIm43LWFkdmFuY2VkLWF1dG9jb21wbGV0ZV9fcmVzdWx0c1wiPlxuICAgIDwhLS0gUmVuZGVyIGdyb3VwcyAtLT5cbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCByZXMgb2YgZGF0YS5yZXN1bHRzXCI+XG4gICAgICA8ZGl2ICpuZ0lmPVwicmVzLmdyb3VwXCIgY2xhc3M9XCJuNy1hZHZhbmNlZC1hdXRvY29tcGxldGVfX2dyb3VwXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cIm43LWFkdmFuY2VkLWF1dG9jb21wbGV0ZV9fZ3JvdXAtdGl0bGUtd3JhcHBlciB7eyByZXMuZ3JvdXAuY2xhc3NlcyB8fCAnJyB9fVwiXG4gICAgICAgID5cbiAgICAgICAgICA8bjctYW5jaG9yLXdyYXBwZXJcbiAgICAgICAgICAgIFtkYXRhXT1cInJlcy5ncm91cC5hbmNob3JcIlxuICAgICAgICAgICAgKGNsaWNrZWQpPVwib25DbGljaygkZXZlbnQpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAqbmdJZj1cInJlcy5ncm91cC5pY29uXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJuNy1hZHZhbmNlZC1hdXRvY29tcGxldGVfX2dyb3VwLWljb24ge3sgcmVzLmdyb3VwLmljb24gfX1cIlxuICAgICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibjctYWR2YW5jZWQtYXV0b2NvbXBsZXRlX19ncm91cC10aXRsZVwiXG4gICAgICAgICAgICAgID57e3Jlcy5ncm91cC50aXRsZX19PC9zcGFuXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9uNy1hbmNob3Itd3JhcHBlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwhLS0gUmVuZGVyIGl0ZW1zIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibjctYWR2YW5jZWQtYXV0b2NvbXBsZXRlX19pdGVtc1wiPlxuICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbXM7IGNvbnRleHQ6eyRpbXBsaWNpdDogcmVzLml0ZW1zfVwiXG4gICAgICAgICAgPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiAqbmdJZj1cIiFyZXMuZ3JvdXBcIiBjbGFzcz1cIm43LWFkdmFuY2VkLWF1dG9jb21wbGV0ZV9fbm9ncm91cFwiPlxuICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtczsgY29udGV4dDp7JGltcGxpY2l0OiByZXMuaXRlbXN9XCJcbiAgICAgICAgPjwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuICA8IS0tIEFjdGlvbnMgLS0+XG4gIDxuZy1jb250YWluZXJcbiAgICAqbmdUZW1wbGF0ZU91dGxldD1cImFjdGlvbnM7IGNvbnRleHQ6eyRpbXBsaWNpdDogZGF0YS5hY3Rpb25zfVwiXG4gID48L25nLWNvbnRhaW5lcj5cbjwvbmctdGVtcGxhdGU+XG5cbjwhLS0gVGVtcGxhdGU6IEl0ZW1zIC0tPlxuPG5nLXRlbXBsYXRlICNpdGVtcyBsZXQtaXRlbXM+XG4gIDxuNy1hbmNob3Itd3JhcHBlclxuICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCJcbiAgICBbZGF0YV09XCJpdGVtLmFuY2hvclwiXG4gICAgKGNsaWNrZWQpPVwib25DbGljaygkZXZlbnQpXCJcbiAgICBbY2xhc3Nlc109XCInbjctYWR2YW5jZWQtYXV0b2NvbXBsZXRlX19pdGVtJ1wiXG4gID5cbiAgICA8c3BhblxuICAgICAgKm5nSWY9XCJpdGVtLnRpdGxlXCJcbiAgICAgIGNsYXNzPVwibjctYWR2YW5jZWQtYXV0b2NvbXBsZXRlX19pdGVtLXRpdGxlXCJcbiAgICAgIFtpbm5lckhUTUxdPVwiaXRlbS50aXRsZVwiXG4gICAgPjwvc3Bhbj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS5tZXRhZGF0YVwiPlxuICAgICAgPHNwYW5cbiAgICAgICAgKm5nRm9yPVwibGV0IG1ldGEgb2YgaXRlbS5tZXRhZGF0YVwiXG4gICAgICAgIGNsYXNzPVwibjctYWR2YW5jZWQtYXV0b2NvbXBsZXRlX19pdGVtLW1ldGFkYXRhXCJcbiAgICAgID5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICAqbmdJZj1cIm1ldGEua2V5XCJcbiAgICAgICAgICBjbGFzcz1cIm43LWFkdmFuY2VkLWF1dG9jb21wbGV0ZV9faXRlbS1tZXRhZGF0YS1rZXlcIlxuICAgICAgICAgID57eyBtZXRhLmtleSB9fTwvc3BhblxuICAgICAgICA+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgKm5nSWY9XCJtZXRhLnZhbHVlXCJcbiAgICAgICAgICBjbGFzcz1cIm43LWFkdmFuY2VkLWF1dG9jb21wbGV0ZV9faXRlbS1tZXRhZGF0YS12YWx1ZVwiXG4gICAgICAgICAgPnt7IG1ldGEudmFsdWUgfX08L3NwYW5cbiAgICAgICAgPlxuICAgICAgPC9zcGFuPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L243LWFuY2hvci13cmFwcGVyPlxuPC9uZy10ZW1wbGF0ZT5cblxuPCEtLSBUZW1wbGF0ZTogQWN0aW9ucyAtLT5cbjxuZy10ZW1wbGF0ZSAjYWN0aW9ucyBsZXQtYWN0aW9ucz5cbiAgPGRpdiAqbmdJZj1cImFjdGlvbnNcIiBjbGFzcz1cIm43LWFkdmFuY2VkLWF1dG9jb21wbGV0ZV9fYWN0aW9uLWJhclwiPlxuICAgIDxuNy1hbmNob3Itd3JhcHBlclxuICAgICAgKm5nSWY9XCJhY3Rpb25zLmFkdmFuY2VkXCJcbiAgICAgIFtkYXRhXT1cImFjdGlvbnMuYWR2YW5jZWQuYW5jaG9yXCJcbiAgICAgIChjbGlja2VkKT1cIm9uQ2xpY2soJGV2ZW50KVwiXG4gICAgICBbY2xhc3Nlc109XCInbjctYnRuIG43LWFkdmFuY2VkLWF1dG9jb21wbGV0ZV9fYWR2YW5jZWQtc2VhcmNoJ1wiXG4gICAgPlxuICAgICAge3thY3Rpb25zLmFkdmFuY2VkLnRleHR9fVxuICAgIDwvbjctYW5jaG9yLXdyYXBwZXI+XG5cbiAgICA8bjctYW5jaG9yLXdyYXBwZXJcbiAgICAgICpuZ0lmPVwiYWN0aW9ucy5zaG93TW9yZVwiXG4gICAgICBbZGF0YV09XCJhY3Rpb25zLnNob3dNb3JlLmFuY2hvclwiXG4gICAgICAoY2xpY2tlZCk9XCJvbkNsaWNrKCRldmVudClcIlxuICAgICAgW2NsYXNzZXNdPVwiJ243LWJ0biBuNy1idG4tY3RhIG43LWFkdmFuY2VkLWF1dG9jb21wbGV0ZV9fc2hvdy1tb3JlJ1wiXG4gICAgPlxuICAgICAge3thY3Rpb25zLnNob3dNb3JlLnRleHR9fVxuICAgIDwvbjctYW5jaG9yLXdyYXBwZXI+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==