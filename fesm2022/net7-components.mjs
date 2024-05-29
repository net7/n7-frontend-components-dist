import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/router';
import { RouterModule } from '@angular/router';

//---------------------------
// ANCHOR-WRAPPER.ts
//---------------------------
class AnchorWrapperComponent {
    constructor() {
        this.clicked = new EventEmitter();
    }
    isExternal(href) {
        return /^http(?:s)?:\/{2}\S+$/.test(href);
    }
    /**
     * Click event handler.
     * Outputs the payload to it's parent component
     */
    onClick(payload) {
        this.clicked.emit(payload);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: AnchorWrapperComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: AnchorWrapperComponent, selector: "n7-anchor-wrapper", inputs: { data: "data", classes: "classes" }, outputs: { clicked: "clicked" }, ngImport: i0, template: "<ng-container *ngIf=\"data; else noData\">\n  <ng-container *ngIf=\"data.href && isExternal(data.href)\">\n    <ng-container *ngTemplateOutlet=\"externalUrl\"></ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"data.href && !isExternal(data.href)\">\n    <ng-container *ngTemplateOutlet=\"internalUrl\"></ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"!data.href\">\n    <ng-container *ngTemplateOutlet=\"noUrl\"></ng-container>\n  </ng-container>\n</ng-container>\n\n<!-- No data template -->\n<ng-template #noData>\n  <a class=\"{{ classes || '' }}\"\n    ><ng-container *ngTemplateOutlet=\"content\"></ng-container\n  ></a>\n</ng-template>\n\n<!-- Internal URL template -->\n<ng-template #internalUrl>\n  <a\n    [routerLink]=\"data.href\"\n    [target]=\"data.target || '_self'\"\n    class=\"{{ classes || '' }}\"\n    [queryParams]=\"data.queryParams || null\"\n  >\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </a>\n</ng-template>\n\n<!-- External URL template -->\n<ng-template #externalUrl>\n  <a\n    [href]=\"data.href\"\n    [target]=\"data.target || '_self'\"\n    class=\"{{ classes || '' }}\"\n  >\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </a>\n</ng-template>\n\n<!-- No URL template -->\n<ng-template #noUrl>\n  <a (click)=\"onClick(data.payload)\" class=\"{{ classes || '' }}\">\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </a>\n</ng-template>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: AnchorWrapperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-anchor-wrapper', template: "<ng-container *ngIf=\"data; else noData\">\n  <ng-container *ngIf=\"data.href && isExternal(data.href)\">\n    <ng-container *ngTemplateOutlet=\"externalUrl\"></ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"data.href && !isExternal(data.href)\">\n    <ng-container *ngTemplateOutlet=\"internalUrl\"></ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"!data.href\">\n    <ng-container *ngTemplateOutlet=\"noUrl\"></ng-container>\n  </ng-container>\n</ng-container>\n\n<!-- No data template -->\n<ng-template #noData>\n  <a class=\"{{ classes || '' }}\"\n    ><ng-container *ngTemplateOutlet=\"content\"></ng-container\n  ></a>\n</ng-template>\n\n<!-- Internal URL template -->\n<ng-template #internalUrl>\n  <a\n    [routerLink]=\"data.href\"\n    [target]=\"data.target || '_self'\"\n    class=\"{{ classes || '' }}\"\n    [queryParams]=\"data.queryParams || null\"\n  >\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </a>\n</ng-template>\n\n<!-- External URL template -->\n<ng-template #externalUrl>\n  <a\n    [href]=\"data.href\"\n    [target]=\"data.target || '_self'\"\n    class=\"{{ classes || '' }}\"\n  >\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </a>\n</ng-template>\n\n<!-- No URL template -->\n<ng-template #noUrl>\n  <a (click)=\"onClick(data.payload)\" class=\"{{ classes || '' }}\">\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </a>\n</ng-template>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], classes: [{
                type: Input
            }], clicked: [{
                type: Output
            }] } });

//---------------------------
// ADVANCED-AUTOCOMPLETE.ts
//---------------------------
class AdvancedAutocompleteComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: AdvancedAutocompleteComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: AdvancedAutocompleteComponent, selector: "n7-advanced-autocomplete", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div\n  *ngIf=\"data\"\n  class=\"n7-advanced-autocomplete\"\n  [ngClass]=\"{ 'is-empty' : (data.results && data.results.length === 0), 'is-loading': !data.results }\"\n>\n  <!-- If there are some results -->\n  <ng-container *ngIf=\"data.results && data.results.length > 0\">\n    <ng-container *ngTemplateOutlet=\"hasLoaded\"></ng-container>\n  </ng-container>\n  <!-- If no results are found -->\n  <ng-container *ngIf=\"data.results && data.results.length === 0\">\n    <ng-container *ngTemplateOutlet=\"isEmpty\"></ng-container>\n  </ng-container>\n  <!-- If is loading -->\n  <ng-container *ngIf=\"!data.results\">\n    <ng-container *ngTemplateOutlet=\"isLoading\"></ng-container>\n  </ng-container>\n</div>\n\n<!-- Template: Is empty -->\n<ng-template #isEmpty>\n  <div\n    class=\"n7-advanced-autocomplete__empty\"\n    [innerHTML]=\"data.fallback\"\n  ></div>\n  <!-- Render actions -->\n  <ng-container\n    *ngTemplateOutlet=\"actions; context:{$implicit: data.actions}\"\n  ></ng-container>\n</ng-template>\n\n<!-- Template: Is loading -->\n<ng-template #isLoading>\n  <!-- Layout appends loader-component here -->\n  <span\n    class=\"n7-advanced-autocomplete__loader\"\n    id=\"n7-advanced-autocomplete__loader\"\n  ></span>\n</ng-template>\n\n<!-- Template: Has loaded -->\n<ng-template #hasLoaded>\n  <!-- Search results -->\n  <div class=\"n7-advanced-autocomplete__results\">\n    <!-- Render groups -->\n    <ng-container *ngFor=\"let res of data.results\">\n      <div *ngIf=\"res.group\" class=\"n7-advanced-autocomplete__group\">\n        <div\n          class=\"n7-advanced-autocomplete__group-title-wrapper {{ res.group.classes || '' }}\"\n        >\n          <n7-anchor-wrapper\n            [data]=\"res.group.anchor\"\n            (clicked)=\"onClick($event)\"\n          >\n            <span\n              *ngIf=\"res.group.icon\"\n              class=\"n7-advanced-autocomplete__group-icon {{ res.group.icon }}\"\n            ></span>\n            <span class=\"n7-advanced-autocomplete__group-title\"\n              >{{res.group.title}}</span\n            >\n          </n7-anchor-wrapper>\n        </div>\n        <!-- Render items -->\n        <div class=\"n7-advanced-autocomplete__items\">\n          <ng-container\n            *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"\n          ></ng-container>\n        </div>\n      </div>\n      <div *ngIf=\"!res.group\" class=\"n7-advanced-autocomplete__nogroup\">\n        <ng-container\n          *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"\n        ></ng-container>\n      </div>\n    </ng-container>\n  </div>\n  <!-- Actions -->\n  <ng-container\n    *ngTemplateOutlet=\"actions; context:{$implicit: data.actions}\"\n  ></ng-container>\n</ng-template>\n\n<!-- Template: Items -->\n<ng-template #items let-items>\n  <n7-anchor-wrapper\n    *ngFor=\"let item of items\"\n    [data]=\"item.anchor\"\n    (clicked)=\"onClick($event)\"\n    [classes]=\"'n7-advanced-autocomplete__item'\"\n  >\n    <span\n      *ngIf=\"item.title\"\n      class=\"n7-advanced-autocomplete__item-title\"\n      [innerHTML]=\"item.title\"\n    ></span>\n    <ng-container *ngIf=\"item.metadata\">\n      <span\n        *ngFor=\"let meta of item.metadata\"\n        class=\"n7-advanced-autocomplete__item-metadata\"\n      >\n        <span\n          *ngIf=\"meta.key\"\n          class=\"n7-advanced-autocomplete__item-metadata-key\"\n          >{{ meta.key }}</span\n        >\n        <span\n          *ngIf=\"meta.value\"\n          class=\"n7-advanced-autocomplete__item-metadata-value\"\n          >{{ meta.value }}</span\n        >\n      </span>\n    </ng-container>\n  </n7-anchor-wrapper>\n</ng-template>\n\n<!-- Template: Actions -->\n<ng-template #actions let-actions>\n  <div *ngIf=\"actions\" class=\"n7-advanced-autocomplete__action-bar\">\n    <n7-anchor-wrapper\n      *ngIf=\"actions.advanced\"\n      [data]=\"actions.advanced.anchor\"\n      (clicked)=\"onClick($event)\"\n      [classes]=\"'n7-btn n7-advanced-autocomplete__advanced-search'\"\n    >\n      {{actions.advanced.text}}\n    </n7-anchor-wrapper>\n\n    <n7-anchor-wrapper\n      *ngIf=\"actions.showMore\"\n      [data]=\"actions.showMore.anchor\"\n      (clicked)=\"onClick($event)\"\n      [classes]=\"'n7-btn n7-btn-cta n7-advanced-autocomplete__show-more'\"\n    >\n      {{actions.showMore.text}}\n    </n7-anchor-wrapper>\n  </div>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: AnchorWrapperComponent, selector: "n7-anchor-wrapper", inputs: ["data", "classes"], outputs: ["clicked"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: AdvancedAutocompleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-advanced-autocomplete', template: "<div\n  *ngIf=\"data\"\n  class=\"n7-advanced-autocomplete\"\n  [ngClass]=\"{ 'is-empty' : (data.results && data.results.length === 0), 'is-loading': !data.results }\"\n>\n  <!-- If there are some results -->\n  <ng-container *ngIf=\"data.results && data.results.length > 0\">\n    <ng-container *ngTemplateOutlet=\"hasLoaded\"></ng-container>\n  </ng-container>\n  <!-- If no results are found -->\n  <ng-container *ngIf=\"data.results && data.results.length === 0\">\n    <ng-container *ngTemplateOutlet=\"isEmpty\"></ng-container>\n  </ng-container>\n  <!-- If is loading -->\n  <ng-container *ngIf=\"!data.results\">\n    <ng-container *ngTemplateOutlet=\"isLoading\"></ng-container>\n  </ng-container>\n</div>\n\n<!-- Template: Is empty -->\n<ng-template #isEmpty>\n  <div\n    class=\"n7-advanced-autocomplete__empty\"\n    [innerHTML]=\"data.fallback\"\n  ></div>\n  <!-- Render actions -->\n  <ng-container\n    *ngTemplateOutlet=\"actions; context:{$implicit: data.actions}\"\n  ></ng-container>\n</ng-template>\n\n<!-- Template: Is loading -->\n<ng-template #isLoading>\n  <!-- Layout appends loader-component here -->\n  <span\n    class=\"n7-advanced-autocomplete__loader\"\n    id=\"n7-advanced-autocomplete__loader\"\n  ></span>\n</ng-template>\n\n<!-- Template: Has loaded -->\n<ng-template #hasLoaded>\n  <!-- Search results -->\n  <div class=\"n7-advanced-autocomplete__results\">\n    <!-- Render groups -->\n    <ng-container *ngFor=\"let res of data.results\">\n      <div *ngIf=\"res.group\" class=\"n7-advanced-autocomplete__group\">\n        <div\n          class=\"n7-advanced-autocomplete__group-title-wrapper {{ res.group.classes || '' }}\"\n        >\n          <n7-anchor-wrapper\n            [data]=\"res.group.anchor\"\n            (clicked)=\"onClick($event)\"\n          >\n            <span\n              *ngIf=\"res.group.icon\"\n              class=\"n7-advanced-autocomplete__group-icon {{ res.group.icon }}\"\n            ></span>\n            <span class=\"n7-advanced-autocomplete__group-title\"\n              >{{res.group.title}}</span\n            >\n          </n7-anchor-wrapper>\n        </div>\n        <!-- Render items -->\n        <div class=\"n7-advanced-autocomplete__items\">\n          <ng-container\n            *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"\n          ></ng-container>\n        </div>\n      </div>\n      <div *ngIf=\"!res.group\" class=\"n7-advanced-autocomplete__nogroup\">\n        <ng-container\n          *ngTemplateOutlet=\"items; context:{$implicit: res.items}\"\n        ></ng-container>\n      </div>\n    </ng-container>\n  </div>\n  <!-- Actions -->\n  <ng-container\n    *ngTemplateOutlet=\"actions; context:{$implicit: data.actions}\"\n  ></ng-container>\n</ng-template>\n\n<!-- Template: Items -->\n<ng-template #items let-items>\n  <n7-anchor-wrapper\n    *ngFor=\"let item of items\"\n    [data]=\"item.anchor\"\n    (clicked)=\"onClick($event)\"\n    [classes]=\"'n7-advanced-autocomplete__item'\"\n  >\n    <span\n      *ngIf=\"item.title\"\n      class=\"n7-advanced-autocomplete__item-title\"\n      [innerHTML]=\"item.title\"\n    ></span>\n    <ng-container *ngIf=\"item.metadata\">\n      <span\n        *ngFor=\"let meta of item.metadata\"\n        class=\"n7-advanced-autocomplete__item-metadata\"\n      >\n        <span\n          *ngIf=\"meta.key\"\n          class=\"n7-advanced-autocomplete__item-metadata-key\"\n          >{{ meta.key }}</span\n        >\n        <span\n          *ngIf=\"meta.value\"\n          class=\"n7-advanced-autocomplete__item-metadata-value\"\n          >{{ meta.value }}</span\n        >\n      </span>\n    </ng-container>\n  </n7-anchor-wrapper>\n</ng-template>\n\n<!-- Template: Actions -->\n<ng-template #actions let-actions>\n  <div *ngIf=\"actions\" class=\"n7-advanced-autocomplete__action-bar\">\n    <n7-anchor-wrapper\n      *ngIf=\"actions.advanced\"\n      [data]=\"actions.advanced.anchor\"\n      (clicked)=\"onClick($event)\"\n      [classes]=\"'n7-btn n7-advanced-autocomplete__advanced-search'\"\n    >\n      {{actions.advanced.text}}\n    </n7-anchor-wrapper>\n\n    <n7-anchor-wrapper\n      *ngIf=\"actions.showMore\"\n      [data]=\"actions.showMore.anchor\"\n      (clicked)=\"onClick($event)\"\n      [classes]=\"'n7-btn n7-btn-cta n7-advanced-autocomplete__show-more'\"\n    >\n      {{actions.showMore.text}}\n    </n7-anchor-wrapper>\n  </div>\n</ng-template>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// ALERT.ts
//---------------------------
class AlertComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: AlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: AlertComponent, selector: "n7-alert", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div\n  class=\"n7-alert {{data.classes || ''}} {{ data.icon ? 'has-icon' : '' }}\"\n  *ngIf=\"data\"\n>\n  <span class=\"n7-alert__icon {{data.icon}}\" *ngIf=\"data.icon\"></span>\n  <div class=\"n7-alert__text\" [innerHTML]=\"data.text\"></div>\n  <span\n    class=\"n7-alert__close-button n7-icon-close\"\n    *ngIf=\"data.hasCloseButton\"\n    (click)=\"onClick(data.payload)\"\n  ></span>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-alert', template: "<div\n  class=\"n7-alert {{data.classes || ''}} {{ data.icon ? 'has-icon' : '' }}\"\n  *ngIf=\"data\"\n>\n  <span class=\"n7-alert__icon {{data.icon}}\" *ngIf=\"data.icon\"></span>\n  <div class=\"n7-alert__text\" [innerHTML]=\"data.text\"></div>\n  <span\n    class=\"n7-alert__close-button n7-icon-close\"\n    *ngIf=\"data.hasCloseButton\"\n    (click)=\"onClick(data.payload)\"\n  ></span>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// BREADCRUMBS.ts
//---------------------------
class AvatarComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    onMouseEnter(payload) {
        if (!this.emit)
            return;
        this.emit('mouseenter', payload);
    }
    onMouseLeave(payload) {
        if (!this.emit)
            return;
        this.emit('mouseleave', payload);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: AvatarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: AvatarComponent, selector: "n7-avatar", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div\n  class=\"n7-avatar {{data.classes || ''}}\"\n  *ngIf=\"data\"\n  (click)=\"onClick(data.payload)\"\n  (mouseenter)=\"onMouseEnter(data.payload)\"\n  (mouseleave)=\"onMouseLeave(data.payload)\"\n>\n  <div\n    *ngIf=\"data.image\"\n    [ngClass]=\"'n7-avatar__background'\"\n    [ngStyle]=\"{\n            'background-image': 'url('+data.image.src+')',\n            'height': data.size,\n            'width': data.size\n            }\"\n  ></div>\n  <div\n    *ngIf=\"!data.image\"\n    [ngClass]=\"'n7-avatar__background'\"\n    [ngStyle]=\"{\n            'background': data.color,\n            'height': data.size,\n            'width': data.size\n        }\"\n  >\n    <p\n      class=\"n7-avatar__label\"\n      [ngStyle]=\"{\n            'color': data.labelColor || 'black',\n            'font-size': 'calc(' + data.size +  ' / 2)'\n            \n        }\"\n    >\n      {{ data.label }}\n    </p>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: AvatarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-avatar', template: "<div\n  class=\"n7-avatar {{data.classes || ''}}\"\n  *ngIf=\"data\"\n  (click)=\"onClick(data.payload)\"\n  (mouseenter)=\"onMouseEnter(data.payload)\"\n  (mouseleave)=\"onMouseLeave(data.payload)\"\n>\n  <div\n    *ngIf=\"data.image\"\n    [ngClass]=\"'n7-avatar__background'\"\n    [ngStyle]=\"{\n            'background-image': 'url('+data.image.src+')',\n            'height': data.size,\n            'width': data.size\n            }\"\n  ></div>\n  <div\n    *ngIf=\"!data.image\"\n    [ngClass]=\"'n7-avatar__background'\"\n    [ngStyle]=\"{\n            'background': data.color,\n            'height': data.size,\n            'width': data.size\n        }\"\n  >\n    <p\n      class=\"n7-avatar__label\"\n      [ngStyle]=\"{\n            'color': data.labelColor || 'black',\n            'font-size': 'calc(' + data.size +  ' / 2)'\n            \n        }\"\n    >\n      {{ data.label }}\n    </p>\n  </div>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// BREADCRUMBS.ts
//---------------------------
class BreadcrumbsComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: BreadcrumbsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: BreadcrumbsComponent, selector: "n7-breadcrumbs", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-breadcrumbs {{ data.classes || '' }}\">\n  <nav class=\"n7-breadcrumbs__nav\">\n    <ol class=\"n7-breadcrumbs__list\">\n      <li\n        *ngFor=\"let item of data.items\"\n        class=\"n7-breadcrumbs__item {{ item.classes || '' }}\"\n      >\n        <n7-anchor-wrapper\n          [classes]=\"'n7-breadcrumbs__label'\"\n          [data]=\"item.anchor\"\n          (clicked)=\"onClick($event)\"\n        >\n          {{ item.label }}\n        </n7-anchor-wrapper>\n      </li>\n    </ol>\n  </nav>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: AnchorWrapperComponent, selector: "n7-anchor-wrapper", inputs: ["data", "classes"], outputs: ["clicked"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: BreadcrumbsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-breadcrumbs', template: "<div *ngIf=\"data\" class=\"n7-breadcrumbs {{ data.classes || '' }}\">\n  <nav class=\"n7-breadcrumbs__nav\">\n    <ol class=\"n7-breadcrumbs__list\">\n      <li\n        *ngFor=\"let item of data.items\"\n        class=\"n7-breadcrumbs__item {{ item.classes || '' }}\"\n      >\n        <n7-anchor-wrapper\n          [classes]=\"'n7-breadcrumbs__label'\"\n          [data]=\"item.anchor\"\n          (clicked)=\"onClick($event)\"\n        >\n          {{ item.label }}\n        </n7-anchor-wrapper>\n      </li>\n    </ol>\n  </nav>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// BUBBLECHART.ts
//---------------------------
/**
 * The bubble chart is drawn using d3js, a library to create and update anything in svg.
 *
 * LEGEND:
 * - svg -> the canvas/<svg> element where everything will be drawn on (appended).
 * - g -> <g> is a group of svg elements.
 * - leaf -> this is the svg circle, the bubble.
 * - text -> this is all the text inside the circle.
 * - tspan -> this is just one line of text.
 *
 * What are "join, enter, update, exit?"
 * https://observablehq.com/@d3/learn-d3-joins?collection=@d3/learn-d3
 * https://observablehq.com/@thetylerwolf/day-18-join-enter-update-exit
 *
 * Each line can have a different width, but all of the text inside a circle
 * needs to be scaled by a constant factor.
 * https://observablehq.com/@mbostock/fit-text-to-circle
 */
class BubbleChartComponent {
    constructor() {
        this._loaded = false;
        /**
         * Reference for much of the new text scaling code comes from:
         * https://observablehq.com/@mbostock/fit-text-to-circle
         */
        this.measureWidth = (text) => {
            const context = document.createElement('canvas').getContext('2d');
            // measure text with the correct font family and weight
            if (this.data?.fontRendering?.label?.family &&
                this.data?.fontRendering?.label?.weight) {
                context.font = `${this.data.fontRendering.label.weight} ${this.data.fontRendering.label.family}`;
            }
            // calculated width + padding
            return context.measureText(text).width * 1.15;
        };
        this.isValidNumber = (value) => !Number.isNaN(Number.parseFloat(value));
        this.draw = () => {
            const { d3 } = this;
            const { containerId, data, height, width, selected, transition, colorMatch, shuffle, fontRendering, } = this.data;
            // SVG shape path for the close icon
            const closeIconPath = 'M -50,40 L-40,50 0,10 40,50 50,40 10,0 50,-40 40,-50 0,-10 -40,-50 -50,-40 -10,0 -50,40';
            const defaultLineHeight = 13;
            // word count before truncating with ellipsis
            const ellipsisThreshold = 4;
            const textScalingFactor = 1;
            if (!Array.isArray(data)) {
                // Check if it is possible to draw with the current dataset
                console.warn('(n7-bubble-chart) The data object is not in the expected format!');
                return;
            }
            // animation settings used to render changes in the chart
            let t = d3.transition().duration(0);
            if (typeof transition === 'number') {
                t = d3.transition().duration(transition).ease(d3.easeCubicInOut);
            }
            // calculate the bubble background color from it's type (domain)
            const colorMap = d3
                .scaleOrdinal()
                .domain(colorMatch
                ? colorMatch.domain
                : ['persona', 'luogo', 'organizzazione', 'cosa notevole'])
                .range(colorMatch ? colorMatch.range : d3.schemeTableau10);
            // calculate how big the radius of the bubble should be
            const sizeScale = d3 // map entity count to bubble size
                .scaleLinear()
                .domain([0, d3.max(data, (d) => +d.count)])
                .range([3, d3.max(data, (d) => +d.count)]);
            // pack is a d3js method which calculates the bubble's x & y position in the chart
            // circle packing reference: https://observablehq.com/@d3/pack
            const pack = (children) => d3
                .pack()
                .size([width - 2, height - 2])
                .padding(1.5)(d3.hierarchy({ children }).sum((d) => sizeScale(d.count)));
            // the bubbles are packed in a single level tree, this is the root
            // see circle packing reference: https://observablehq.com/@d3/pack
            const root = () => {
                // if shuffle is undefined or true, shuffle the data
                if (typeof shuffle === 'undefined' || shuffle) {
                    const shuffData = data.slice(); // do not modify the source data!
                    return pack(d3.shuffle(shuffData));
                } // if shuffle is set to false, skip the data shuffle
                return pack(data);
            };
            // svg canvas where all the bubbles are drawn
            const svg = d3
                .select(`#${containerId}`)
                .attr('viewBox', [0, 0, width, height])
                .style('font', '10px Verdana, Geneva, sans-serif')
                .style('max-width', '100%')
                .attr('text-anchor', 'middle');
            this.removeUnneededNodes(svg);
            // a leaf of the "pack tree" corresponds to a bubble
            const leaf = svg
                .selectAll('g')
                .data(root().leaves(), (d) => d.data.entity.id);
            leaf
                .transition(t) // update transition on <g>
                .attr('fill-opacity', 1)
                .attr('transform', (d) => `translate(${d.x + 1},${d.y + 1})`);
            // clear all existing close icons from the bubbles
            leaf.selectAll('.close-icon').remove();
            if (selected) {
                leaf // render only the necessary close icons
                    .filter((d) => selected.includes(d.data.entity.id))
                    .append('path')
                    .attr('class', 'close-icon')
                    .attr('d', closeIconPath)
                    .attr('fill', '#fff')
                    .attr('transform', (d) => {
                    if (d.r / 4 > 3) {
                        return `scale(.08) translate(0, ${d.r * 10 - 80})`;
                    }
                    return 'scale(.08)';
                });
            }
            leaf
                .select('circle')
                .transition(t) // update transition on <circle>
                .attr('fill-opacity', 1)
                .attr('r', (d) => d.r);
            // g represents a "group of svg items"
            // items grouped together can be added / removed / scaled together
            const g = leaf.enter().append('g');
            g.attr('transform', (d) => `translate(${d.x + 1},${d.y + 1})`)
                .attr('cursor', 'pointer')
                .on('click', (event, d) => {
                this.onClick(d.data.entity.id);
            })
                .attr('id', (d) => `g_${d.data.entity.id}`)
                .append('circle')
                .attr('id', (d) => {
                d.leafUid = d.data.entity.id;
            })
                .attr('r', 0)
                .transition(t) // enter() transition on <circle>
                .attr('fill-opacity', 1)
                .attr('fill', (d) => colorMap(d.data.entity.typeOfEntity))
                .attr('r', (d) => d.r);
            // prevents the text from overflowing the bubble
            g.append('clipPath')
                .attr('id', (d) => {
                d.clipUid = `Clip-${d.data.entity.id}`;
            })
                .append('use')
                .attr('xlink:href', (d) => d.leafUid.href);
            /** NEW TEXT LOGIC */
            g.append('text')
                .attr('font-family', () => {
                if (fontRendering &&
                    fontRendering.label &&
                    fontRendering.label.family) {
                    return fontRendering.label.family;
                }
                return 'inherit';
            })
                .attr('font-weight', () => {
                if (fontRendering &&
                    fontRendering &&
                    fontRendering.label &&
                    fontRendering.label.weight) {
                    return fontRendering.label.weight;
                }
                return 'inherit';
            })
                .attr('fill', 'white')
                .each((d) => {
                // Capitalize the first letter of the label
                d.data.entity.label =
                    d.data.entity.label.charAt(0).toUpperCase() +
                        d.data.entity.label.slice(1);
                // 1. initialize meta object
                if (!d._meta || typeof d._meta !== 'object')
                    d._meta = {};
                // 2. tokenize label & count into words
                const words = d.data.entity.label.split(/[\s]+/g); // To hyphenate: /\s+|(?<=-)/
                // Truncate with ellipsis if the label is longer than the threshold
                if (words.length > ellipsisThreshold) {
                    words.splice(ellipsisThreshold, words.length - ellipsisThreshold);
                    words[ellipsisThreshold - 1] += '…';
                }
                // add counter
                if (d.r / 4 > 2.5) {
                    // show text threshold
                    if (!words[words.length - 1])
                        words.pop();
                    if (!words[0])
                        words.shift();
                }
                if (d.r / 4 > 4.5) {
                    // show number threshold
                    words.push(`${d.data.count}`);
                }
                d._meta.words = words;
                d._meta.lineHeight = defaultLineHeight;
                const targetWidth = Math.sqrt(this.measureWidth(d._meta.words.join(' ').trim()) * defaultLineHeight);
                // 3. build lines of text
                d._meta.lines = [];
                let line;
                let lineWidth0 = Infinity;
                for (let i = 0, n = d._meta.words.length; i < n; i += 1) {
                    const lineText1 = (line ? `${line.text} ` : '') + words[i];
                    const lineWidth1 = this.measureWidth(lineText1);
                    if ((lineWidth0 + lineWidth1) / 2 < targetWidth && i !== n - 1) {
                        line.width = lineWidth0;
                        lineWidth0 = lineWidth1;
                        line.text = lineText1;
                    }
                    else {
                        // if line is too long or this is the last line (counter), push to next line
                        lineWidth0 = this.measureWidth(words[i]);
                        line = { width: lineWidth0, text: words[i] };
                        d._meta.lines.push(line);
                    }
                }
                // 4. compute the bounding radius
                let radius = 0;
                for (let i = 0, n = d._meta.lines.length; i < n; i += 1) {
                    const dy = (Math.abs(i - n / 2) + 0.8) * d._meta.lineHeight;
                    const dx = d._meta.lines[i].width / 2;
                    radius = Math.max(radius, Math.sqrt(dx * dx + dy * dy));
                }
                d._meta.textRadius = radius;
                return d;
            })
                .attr('transform', (d) => {
                const scale = ((d.r * 0.8) / d._meta.textRadius) * textScalingFactor;
                return `scale(${scale})`;
            })
                .filter((d) => d.r / 4 > 2.5)
                .selectAll('tspan')
                .data((d) => d._meta.lines)
                .enter()
                .append('tspan')
                .attr('x', 0)
                .attr('y', (d, i, n) => (i - n.length / 2 + 0.8) * defaultLineHeight)
                .attr('class', (d, i, n) => 
            // if it's the last label and a valid number, mark as counter
            i === n.length - 1 && this.isValidNumber(d.text)
                ? 'label-counter'
                : 'label-text')
                .text((d) => d.text)
                .attr('fill-opacity', 0)
                .transition(t) // enter() transition on <tspan>
                .attr('fill-opacity', 1);
            // custom style for the counter
            g.selectAll('tspan.label-counter')
                .attr('font-family', () => {
                if (fontRendering &&
                    fontRendering.counter &&
                    fontRendering.counter.family) {
                    return fontRendering.counter.family;
                }
                return 'inherit';
            })
                .attr('font-weight', () => {
                if (fontRendering &&
                    fontRendering.counter &&
                    fontRendering.counter.weight) {
                    return fontRendering.counter.weight;
                }
                return 'inherit';
            });
            leaf
                .exit() // EXIT CYCLE
                .remove();
            if (selected) {
                g.filter((d) => selected.includes(d.leafUid)) // append 'X' icon // only for selected bubbles
                    .append('path')
                    .attr('d', closeIconPath)
                    .attr('class', 'close-icon')
                    .attr('fill', (d) => {
                    if (d.r / 4 > 2.5) {
                        return '#fff';
                    }
                    return 'transparent';
                })
                    .attr('transform', (d) => {
                    if (d.r / 4 > 3) {
                        return `scale(.08) translate(0, ${d.r * 10 - 80})`;
                    }
                    return 'scale(.08)';
                });
            }
            // communicate end of draw
            this.emit('d3end', data);
        };
    }
    ngAfterContentChecked() {
        /*
         Waits for the dom to be loaded, then fires the draw function
         that renders the chart.
        */
        if (this.data) {
            if (this._loaded)
                return;
            this._loaded = true;
            setTimeout(() => {
                import('d3').then((module) => {
                    this.d3 = module;
                    this.draw();
                    if (this.data && this.data.setDraw) {
                        this.data.setDraw(this.draw);
                    }
                });
            });
        }
    }
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    removeUnneededNodes(svg) {
        // select all nodes and rejoin data
        const nodes = svg.selectAll('g').data(this.data);
        // remove excess nodes
        nodes.exit().remove();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: BubbleChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: BubbleChartComponent, selector: "n7-bubble-chart", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-bubble-chart {{ data.classes || '' }}\">\n  <svg #bubbleChart id=\"{{data.containerId}}\"></svg>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: BubbleChartComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-bubble-chart', template: "<div *ngIf=\"data\" class=\"n7-bubble-chart {{ data.classes || '' }}\">\n  <svg #bubbleChart id=\"{{data.containerId}}\"></svg>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

class IconComponent {
    onClick(value) {
        if (!this.emit)
            return;
        this.emit('click', value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: IconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: IconComponent, selector: "n7-icon", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<ng-container *ngIf=\"data as icon\">\n  <span\n    class=\"n7-icon\"\n    *ngIf=\"icon.id\"\n    [ngClass]=\"icon.id\"\n    [ngStyle]=\"icon.style\"\n    (click)=\"onClick(icon.payload)\"\n  >\n  </span>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: IconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-icon', template: "<ng-container *ngIf=\"data as icon\">\n  <span\n    class=\"n7-icon\"\n    *ngIf=\"icon.id\"\n    [ngClass]=\"icon.id\"\n    [ngStyle]=\"icon.style\"\n    (click)=\"onClick(icon.payload)\"\n  >\n  </span>\n</ng-container>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// LOADER.ts
//---------------------------
class LoaderComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: LoaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: LoaderComponent, selector: "n7-loader", inputs: { data: "data" }, ngImport: i0, template: "<span class=\"n7-loader {{ data && data.classes ? data.classes : '' }}\"></span>\n" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: LoaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-loader', template: "<span class=\"n7-loader {{ data && data.classes ? data.classes : '' }}\"></span>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }] } });

class ButtonComponent {
    onClick(value) {
        if (!this.emit)
            return;
        if (this.data.isDisabled)
            return;
        this.emit('click', value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: ButtonComponent, selector: "n7-button", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<ng-container *ngIf=\"data && data.anchor\">\n  <n7-anchor-wrapper [data]=\"data.anchor\" (clicked)=\"onClick($event)\">\n    <button\n      class=\"n7-btn\"\n      [ngClass]=\"data.classes\"\n      [disabled]=\"data.isDisabled\"\n      [class.is-disabled]=\"data.isDisabled\"\n      [class.is-loading]=\"data.isLoading\"\n    >\n      <!-- loader -->\n      <n7-loader\n        [data]=\"{classes: 'n7-btn__loader'}\"\n        *ngIf=\"data.isLoading\"\n      ></n7-loader>\n      <!-- icon left -->\n      <n7-icon [data]=\"data.iconLeft\" *ngIf=\"data.iconLeft\"> </n7-icon>\n      <!-- button label -->\n      <span *ngIf=\"data.text\" class=\"n7-btn__text\">{{ data.text }}</span>\n      <!-- icon right -->\n      <n7-icon [data]=\"data.iconRight\" *ngIf=\"data.iconRight\"> </n7-icon>\n    </button>\n  </n7-anchor-wrapper>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: AnchorWrapperComponent, selector: "n7-anchor-wrapper", inputs: ["data", "classes"], outputs: ["clicked"] }, { kind: "component", type: IconComponent, selector: "n7-icon", inputs: ["data", "emit"] }, { kind: "component", type: LoaderComponent, selector: "n7-loader", inputs: ["data"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-button', template: "<ng-container *ngIf=\"data && data.anchor\">\n  <n7-anchor-wrapper [data]=\"data.anchor\" (clicked)=\"onClick($event)\">\n    <button\n      class=\"n7-btn\"\n      [ngClass]=\"data.classes\"\n      [disabled]=\"data.isDisabled\"\n      [class.is-disabled]=\"data.isDisabled\"\n      [class.is-loading]=\"data.isLoading\"\n    >\n      <!-- loader -->\n      <n7-loader\n        [data]=\"{classes: 'n7-btn__loader'}\"\n        *ngIf=\"data.isLoading\"\n      ></n7-loader>\n      <!-- icon left -->\n      <n7-icon [data]=\"data.iconLeft\" *ngIf=\"data.iconLeft\"> </n7-icon>\n      <!-- button label -->\n      <span *ngIf=\"data.text\" class=\"n7-btn__text\">{{ data.text }}</span>\n      <!-- icon right -->\n      <n7-icon [data]=\"data.iconRight\" *ngIf=\"data.iconRight\"> </n7-icon>\n    </button>\n  </n7-anchor-wrapper>\n</ng-container>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// CAROUSEL.ts
//---------------------------
class CarouselComponent {
    constructor() {
        this.loaded = false;
        /**
         * API of the carousel component
         */
        this.api = {
            /**
             * Used to lazy-load video resources.
             * Call api.load.videos on DOMContentReady event
             */
            load: {
                /** Changes all data-src attributes to src and calls <video>.load() */
                videos: () => {
                    const sources = Array.from(
                    // gets all <source.lazy> tags
                    document
                        .getElementById(this.data.containerId)
                        .getElementsByClassName('lazy'));
                    sources.forEach((source) => {
                        const url = source.getAttribute('data-src'); // gets the video url
                        source.classList.remove('lazy'); // removes the lazy class
                        source.setAttribute('src', url); // sets the url to src attribute
                        source.removeAttribute('data-src'); // removes the data-src attribute
                        source.parentElement.load(); // loads the video
                    });
                },
            },
        };
    }
    ngAfterContentChecked() {
        if (!this.data || this.loaded)
            return;
        this.loaded = true;
        setTimeout(() => {
            const { containerId, libOptions } = this.data;
            import('latte-carousel').then((module) => {
                const { Carousel } = module;
                const chart = new Carousel(`#${containerId}`, libOptions);
                if (this.data.setInstance)
                    this.data.setInstance((d) => {
                        // eslint-disable-next-line no-param-reassign, @typescript-eslint/no-unused-vars
                        d = chart;
                    });
                if (this.data.setComponentAPI)
                    this.data.setComponentAPI((d) => {
                        // eslint-disable-next-line no-param-reassign, @typescript-eslint/no-unused-vars
                        d = this.api;
                    });
                this.addButtonEvents(this.data);
            });
        });
    }
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    /**
     * Function that adds the event listeners to each button.
     * This is needed because when "new Carousel()" is called the event listeners are lost.
     */
    addButtonEvents({ slides, containerId }) {
        // Build array of button-id's & payloads.
        const buttons = slides
            .map((slide, slideID) => ({
            // id = container id - index of the slide
            id: `${containerId}-${slideID}`,
            payload: ((slide.action || {}).anchor || {}).payload || undefined,
        }))
            .filter((btn) => btn.payload);
        // find each button's anchor-wrapper and attach the event to it.
        buttons.forEach((btn) => {
            document
                .querySelector(`#${btn.id}`)
                .parentElement.addEventListener('click', () => this.onClick(btn.payload));
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: CarouselComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: CarouselComponent, selector: "n7-carousel", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<button\n  *ngIf=\"data && data.classes === 'demo'\"\n  class=\"n7-btn\"\n  (click)=\"api.load.videos()\"\n>\n  api.load.videos()\n</button>\n\n<div *ngIf=\"data\" class=\"n7-carousel {{ data.classes || '' }}\">\n  <!-- Warning: Do not style div.latte-carousel -->\n  <div id=\"{{data.containerId}}\" class=\"latte-carousel\">\n    <ng-container *ngFor=\"let slide of data.slides; let index = index;\">\n      <ng-container\n        *ngTemplateOutlet=\"carouselSlide; context:{slide: slide, index: index}\"\n      ></ng-container>\n    </ng-container>\n  </div>\n</div>\n\n<!-- ===== SLIDE WRAPPER ===== -->\n<ng-template #carouselSlide let-slide=\"slide\" let-slideID=\"index\">\n  <!-- Warning: Do not style div.latte-item -->\n  <div class=\"latte-item\">\n    <div\n      class=\"n7-carousel__slide {{ slide.classes || ''}}\"\n      [ngClass]=\"{ 'has-image' : slide.background.image, 'has-video': slide.background.video }\"\n      [style.background-color]=\"slide.background.color ? slide.background.color : ''\"\n      [style.background-image]=\"slide.background.image ? 'url('+slide.background.image+')' : ''\"\n    >\n      <div class=\"n7-carousel__slide-content-wrapper\">\n        <div class=\"n7-carousel__slide-content\">\n          <div class=\"n7-carousel__slide-content-left\">\n            <ng-container\n              *ngTemplateOutlet=\"slideForeground; context:{items: slide.items, slideID: slideID}\"\n            >\n            </ng-container>\n          </div>\n          <div class=\"n7-carousel__slide-content-right\" *ngIf=\"slide.action\">\n            <n7-anchor-wrapper\n              [data]=\"slide.action.anchor\"\n              (clicked)=\"onClick($event)\"\n            >\n              <!-- Button ID's are used to dynamically reattach events after loading the carousel -->\n              <button\n                id=\"{{data.containerId}}-{{slideID}}\"\n                class=\"n7-hero__btn n7-btn n7-btn-cta n7-btn-l\"\n              >\n                {{slide.action.text}}\n              </button>\n            </n7-anchor-wrapper>\n            <ng-container\n              *ngTemplateOutlet=\"sideImage; context:{items: slide.items, slideID: slideID}\"\n            >\n            </ng-container>\n          </div>\n        </div>\n      </div>\n      <ng-container *ngIf=\"slide.background\">\n        <ng-container\n          *ngTemplateOutlet=\"slideBackground; context:{$implicit: slide.background}\"\n        >\n        </ng-container>\n      </ng-container>\n    </div>\n  </div>\n</ng-template>\n\n<!-- ===== SLIDE FOREGROUND ===== -->\n<ng-template #slideForeground let-items=\"items\" let-slideID=\"slideID\">\n  <ng-container *ngFor=\"let el of items; let itemID = index\">\n    <!-- title -->\n    <h1 class=\"n7-carousel__slide-title\" *ngIf=\"el.title\">{{el.title}}</h1>\n    <!-- text -->\n    <div\n      class=\"n7-carousel__slide-text\"\n      *ngIf=\"el.text\"\n      [innerHTML]=\"el.text\"\n    ></div>\n    <!-- image -->\n    <ng-container *ngIf=\"el.image as img\">\n      <img\n        class=\"n7-carousel__slide-img\"\n        [src]=\"img.src\"\n        [alt]=\"img.alt ?? ''\"\n        [ngClass]=\"img.classes\"\n      />\n    </ng-container>\n    <!-- metadata -->\n    <div class=\"n7-carousel__slide-metadata-wrapper\" *ngIf=\"el.metadata\">\n      <ng-container *ngFor=\"let m of el.metadata\">\n        <div class=\"n7-carousel__slide-metadata\">\n          <span class=\"n7-carousel__slide-metadata-label\" *ngIf=\"m.key\"\n            >{{m.key}}</span\n          >\n          <span class=\"n7-carousel__slide-metadata-value\" *ngIf=\"m.value\"\n            >{{m.value}}</span\n          >\n        </div>\n      </ng-container>\n    </div>\n  </ng-container>\n</ng-template>\n\n<!-- ===== SIDE IMAGE ===== -->\n<ng-template #sideImage let-items=\"items\" let-slideID=\"slideID\">\n  <ng-container *ngFor=\"let el of items; let itemID = index\">\n    <!-- image -->\n    <ng-container *ngIf=\"el.image as img\">\n      <img\n        class=\"n7-carousel__side-img\"\n        [src]=\"img.src\"\n        [alt]=\"img.alt ?? ''\"\n        [ngClass]=\"img.classes\"\n      />\n    </ng-container>\n  </ng-container>\n</ng-template>\n\n<!-- ===== VIDEO BACKGROUND ===== -->\n<ng-template #slideBackground let-bg>\n  <ng-container *ngIf=\"bg.video as v\">\n    <video\n      #video\n      class=\"n7-carousel__slide-video\"\n      [poster]=\"v.poster\"\n      [height]=\"v.height\"\n      [width]=\"v.width\"\n      loop\n      muted\n      autoplay\n      playsinline\n    >\n      <source #source class=\"lazy\" [attr.data-src]=\"v.url\" type=\"video/mp4\" />\n    </video>\n    <div class=\"n7-carousel__slide-video-overlay\"></div>\n  </ng-container>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: AnchorWrapperComponent, selector: "n7-anchor-wrapper", inputs: ["data", "classes"], outputs: ["clicked"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: CarouselComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-carousel', template: "<button\n  *ngIf=\"data && data.classes === 'demo'\"\n  class=\"n7-btn\"\n  (click)=\"api.load.videos()\"\n>\n  api.load.videos()\n</button>\n\n<div *ngIf=\"data\" class=\"n7-carousel {{ data.classes || '' }}\">\n  <!-- Warning: Do not style div.latte-carousel -->\n  <div id=\"{{data.containerId}}\" class=\"latte-carousel\">\n    <ng-container *ngFor=\"let slide of data.slides; let index = index;\">\n      <ng-container\n        *ngTemplateOutlet=\"carouselSlide; context:{slide: slide, index: index}\"\n      ></ng-container>\n    </ng-container>\n  </div>\n</div>\n\n<!-- ===== SLIDE WRAPPER ===== -->\n<ng-template #carouselSlide let-slide=\"slide\" let-slideID=\"index\">\n  <!-- Warning: Do not style div.latte-item -->\n  <div class=\"latte-item\">\n    <div\n      class=\"n7-carousel__slide {{ slide.classes || ''}}\"\n      [ngClass]=\"{ 'has-image' : slide.background.image, 'has-video': slide.background.video }\"\n      [style.background-color]=\"slide.background.color ? slide.background.color : ''\"\n      [style.background-image]=\"slide.background.image ? 'url('+slide.background.image+')' : ''\"\n    >\n      <div class=\"n7-carousel__slide-content-wrapper\">\n        <div class=\"n7-carousel__slide-content\">\n          <div class=\"n7-carousel__slide-content-left\">\n            <ng-container\n              *ngTemplateOutlet=\"slideForeground; context:{items: slide.items, slideID: slideID}\"\n            >\n            </ng-container>\n          </div>\n          <div class=\"n7-carousel__slide-content-right\" *ngIf=\"slide.action\">\n            <n7-anchor-wrapper\n              [data]=\"slide.action.anchor\"\n              (clicked)=\"onClick($event)\"\n            >\n              <!-- Button ID's are used to dynamically reattach events after loading the carousel -->\n              <button\n                id=\"{{data.containerId}}-{{slideID}}\"\n                class=\"n7-hero__btn n7-btn n7-btn-cta n7-btn-l\"\n              >\n                {{slide.action.text}}\n              </button>\n            </n7-anchor-wrapper>\n            <ng-container\n              *ngTemplateOutlet=\"sideImage; context:{items: slide.items, slideID: slideID}\"\n            >\n            </ng-container>\n          </div>\n        </div>\n      </div>\n      <ng-container *ngIf=\"slide.background\">\n        <ng-container\n          *ngTemplateOutlet=\"slideBackground; context:{$implicit: slide.background}\"\n        >\n        </ng-container>\n      </ng-container>\n    </div>\n  </div>\n</ng-template>\n\n<!-- ===== SLIDE FOREGROUND ===== -->\n<ng-template #slideForeground let-items=\"items\" let-slideID=\"slideID\">\n  <ng-container *ngFor=\"let el of items; let itemID = index\">\n    <!-- title -->\n    <h1 class=\"n7-carousel__slide-title\" *ngIf=\"el.title\">{{el.title}}</h1>\n    <!-- text -->\n    <div\n      class=\"n7-carousel__slide-text\"\n      *ngIf=\"el.text\"\n      [innerHTML]=\"el.text\"\n    ></div>\n    <!-- image -->\n    <ng-container *ngIf=\"el.image as img\">\n      <img\n        class=\"n7-carousel__slide-img\"\n        [src]=\"img.src\"\n        [alt]=\"img.alt ?? ''\"\n        [ngClass]=\"img.classes\"\n      />\n    </ng-container>\n    <!-- metadata -->\n    <div class=\"n7-carousel__slide-metadata-wrapper\" *ngIf=\"el.metadata\">\n      <ng-container *ngFor=\"let m of el.metadata\">\n        <div class=\"n7-carousel__slide-metadata\">\n          <span class=\"n7-carousel__slide-metadata-label\" *ngIf=\"m.key\"\n            >{{m.key}}</span\n          >\n          <span class=\"n7-carousel__slide-metadata-value\" *ngIf=\"m.value\"\n            >{{m.value}}</span\n          >\n        </div>\n      </ng-container>\n    </div>\n  </ng-container>\n</ng-template>\n\n<!-- ===== SIDE IMAGE ===== -->\n<ng-template #sideImage let-items=\"items\" let-slideID=\"slideID\">\n  <ng-container *ngFor=\"let el of items; let itemID = index\">\n    <!-- image -->\n    <ng-container *ngIf=\"el.image as img\">\n      <img\n        class=\"n7-carousel__side-img\"\n        [src]=\"img.src\"\n        [alt]=\"img.alt ?? ''\"\n        [ngClass]=\"img.classes\"\n      />\n    </ng-container>\n  </ng-container>\n</ng-template>\n\n<!-- ===== VIDEO BACKGROUND ===== -->\n<ng-template #slideBackground let-bg>\n  <ng-container *ngIf=\"bg.video as v\">\n    <video\n      #video\n      class=\"n7-carousel__slide-video\"\n      [poster]=\"v.poster\"\n      [height]=\"v.height\"\n      [width]=\"v.width\"\n      loop\n      muted\n      autoplay\n      playsinline\n    >\n      <source #source class=\"lazy\" [attr.data-src]=\"v.url\" type=\"video/mp4\" />\n    </video>\n    <div class=\"n7-carousel__slide-video-overlay\"></div>\n  </ng-container>\n</ng-template>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// CHART.ts
//---------------------------
class ChartComponent {
    constructor() {
        this._loaded = false;
    }
    ngAfterContentChecked() {
        if (!this.data || this._loaded)
            return;
        this._loaded = true;
        setTimeout(() => {
            const { containerId, libOptions } = this.data;
            import('apexcharts/dist/apexcharts.common.js').then((module) => {
                const { default: ApexCharts } = module;
                const chart = new ApexCharts(document.querySelector(`#${containerId}`), libOptions);
                chart.render();
                if (this.data.setChart)
                    this.data.setChart(chart);
            });
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: ChartComponent, selector: "n7-chart", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-chart {{ data.classes || '' }}\">\n  <div id=\"{{ data.containerId }}\"></div>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ChartComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-chart', template: "<div *ngIf=\"data\" class=\"n7-chart {{ data.classes || '' }}\">\n  <div id=\"{{ data.containerId }}\"></div>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// CONTENT-PLACEHOLDER.ts
//---------------------------
class ContentPlaceholderComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ContentPlaceholderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: ContentPlaceholderComponent, selector: "n7-content-placeholder", inputs: { data: "data" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-content-placeholder\">\n  <ng-container *ngFor=\"let b of data.blocks\">\n    <div\n      *ngIf=\"!b.image\"\n      class=\"n7-content-placeholder__item {{b.classes || ''}}\"\n    ></div>\n    <img\n      *ngIf=\"b.image\"\n      class=\"n7-content-placeholder__image {{b.classes || ''}}\"\n      src=\"{{b.image}}\"\n      alt=\"{{ b.alt || '' }}\"\n    />\n  </ng-container>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ContentPlaceholderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-content-placeholder', template: "<div *ngIf=\"data\" class=\"n7-content-placeholder\">\n  <ng-container *ngFor=\"let b of data.blocks\">\n    <div\n      *ngIf=\"!b.image\"\n      class=\"n7-content-placeholder__item {{b.classes || ''}}\"\n    ></div>\n    <img\n      *ngIf=\"b.image\"\n      class=\"n7-content-placeholder__image {{b.classes || ''}}\"\n      src=\"{{b.image}}\"\n      alt=\"{{ b.alt || '' }}\"\n    />\n  </ng-container>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }] } });

//---------------------------
// INDEX.ts
//---------------------------
class DataWidgetComponent {
    onMouseEnter(payload) {
        if (!this.emit)
            return;
        this.emit('mouseenter', payload);
    }
    onMouseLeave(payload) {
        if (!this.emit)
            return;
        this.emit('mouseleave', payload);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: DataWidgetComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: DataWidgetComponent, selector: "n7-data-widget", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-data-widget {{ data.classes || '' }}\">\n  <div class=\"n7-data-widget__main\">\n    <span\n      *ngIf=\"data.icon\"\n      class=\"n7-data-widget__main-icon {{data.icon}}\"\n      (mouseenter)=\"onMouseEnter(data.payload)\"\n      (mouseleave)=\"onMouseLeave(data.payload)\"\n    >\n    </span>\n    <img\n      class=\"n7-data-widget__second-icon\"\n      *ngIf=\"data.imgIcon\"\n      [src]=\"data.imgIcon.path\"\n      [alt]=\"data.imgIcon.alt\"\n      (mouseenter)=\"onMouseEnter(data.payload)\"\n      (mouseleave)=\"onMouseLeave(data.payload)\"\n    />\n    <h2 class=\"n7-data-widget__main-title\" [innerHTML]=\"data.text\"></h2>\n  </div>\n\n  <div\n    *ngIf=\"data.subtitle && (data.subtitle.text || data.subtitle.icon || data.subtitle.value)\"\n    class=\"n7-data-widget__sub\"\n  >\n    <p\n      *ngIf=\"data.subtitle.text\"\n      class=\"n7-data-widget__sub-title\"\n      [innerHTML]=\"data.subtitle.text\"\n    ></p>\n    <span\n      *ngIf=\"data.subtitle.icon || data.subtitle.value || data.subtitle.imgIcon\"\n      class=\"n7-data-widget__sub-info\"\n      (mouseenter)=\"onMouseEnter(data.subtitle.payload)\"\n      (mouseleave)=\"onMouseLeave(data.subtitle.payload)\"\n    >\n      <img\n        *ngIf=\"data.subtitle.imgIcon\"\n        [src]=\"data.subtitle.imgIcon.path\"\n        [alt]=\"data.subtitle.imgIcon.alt\"\n      />\n      <span\n        *ngIf=\"data.subtitle.icon\"\n        class=\"n7-data-widget__sub-info-icon {{data.subtitle.icon}}\"\n      >\n      </span>\n      <span\n        *ngIf=\"data.subtitle.value\"\n        class=\"n7-data-widget__sub-info-label\"\n        [innerHTML]=\"data.subtitle.value\"\n      >\n      </span>\n    </span>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: DataWidgetComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-data-widget', template: "<div *ngIf=\"data\" class=\"n7-data-widget {{ data.classes || '' }}\">\n  <div class=\"n7-data-widget__main\">\n    <span\n      *ngIf=\"data.icon\"\n      class=\"n7-data-widget__main-icon {{data.icon}}\"\n      (mouseenter)=\"onMouseEnter(data.payload)\"\n      (mouseleave)=\"onMouseLeave(data.payload)\"\n    >\n    </span>\n    <img\n      class=\"n7-data-widget__second-icon\"\n      *ngIf=\"data.imgIcon\"\n      [src]=\"data.imgIcon.path\"\n      [alt]=\"data.imgIcon.alt\"\n      (mouseenter)=\"onMouseEnter(data.payload)\"\n      (mouseleave)=\"onMouseLeave(data.payload)\"\n    />\n    <h2 class=\"n7-data-widget__main-title\" [innerHTML]=\"data.text\"></h2>\n  </div>\n\n  <div\n    *ngIf=\"data.subtitle && (data.subtitle.text || data.subtitle.icon || data.subtitle.value)\"\n    class=\"n7-data-widget__sub\"\n  >\n    <p\n      *ngIf=\"data.subtitle.text\"\n      class=\"n7-data-widget__sub-title\"\n      [innerHTML]=\"data.subtitle.text\"\n    ></p>\n    <span\n      *ngIf=\"data.subtitle.icon || data.subtitle.value || data.subtitle.imgIcon\"\n      class=\"n7-data-widget__sub-info\"\n      (mouseenter)=\"onMouseEnter(data.subtitle.payload)\"\n      (mouseleave)=\"onMouseLeave(data.subtitle.payload)\"\n    >\n      <img\n        *ngIf=\"data.subtitle.imgIcon\"\n        [src]=\"data.subtitle.imgIcon.path\"\n        [alt]=\"data.subtitle.imgIcon.alt\"\n      />\n      <span\n        *ngIf=\"data.subtitle.icon\"\n        class=\"n7-data-widget__sub-info-icon {{data.subtitle.icon}}\"\n      >\n      </span>\n      <span\n        *ngIf=\"data.subtitle.value\"\n        class=\"n7-data-widget__sub-info-label\"\n        [innerHTML]=\"data.subtitle.value\"\n      >\n      </span>\n    </span>\n  </div>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// DATEPICKER.ts
//---------------------------
class DatepickerComponent {
    constructor() {
        this._loaded = false;
    }
    ngAfterContentChecked() {
        if (!this.data || this._loaded)
            return;
        this._loaded = true;
        setTimeout(() => {
            const { id, libOptions } = this.data;
            import('flatpickr').then((module) => {
                const { default: flatpickr } = module;
                const datepicker = flatpickr(`#${id}`, {
                    ...libOptions,
                    onChange: (selectedDates, dateStr, instance) => {
                        if (this.emit) {
                            this.emit('change', { selectedDates, dateStr, instance });
                        }
                    },
                });
                // setting datepicker
                if (this.data.getInstance)
                    this.data.getInstance(datepicker);
            });
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: DatepickerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: DatepickerComponent, selector: "n7-datepicker", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-datepicker {{ data.classes || '' }}\">\n  <input type=\"text\" id=\"{{this.data.id}}\" />\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: DatepickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-datepicker', template: "<div *ngIf=\"data\" class=\"n7-datepicker {{ data.classes || '' }}\">\n  <input type=\"text\" id=\"{{this.data.id}}\" />\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// FACET.ts
//---------------------------
class FacetComponent {
    onChange(inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload, value });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: FacetComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: FacetComponent, selector: "n7-facet", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-facet\">\n  <div\n    *ngFor=\"let section of data.sections\"\n    class=\"n7-facet__section {{ section.classes || '' }}\"\n  >\n    <div\n      *ngFor=\"let input of section.inputs\"\n      class=\"n7-facet__section-input n7-facet__section-input-{{ input.type }} {{ input.classes || '' }}\"\n    >\n      <ng-container [ngSwitch]=\"input.type\">\n        <!-- Checkbox -->\n        <ng-container *ngSwitchCase=\"'checkbox'\">\n          <input\n            type=\"checkbox\"\n            id=\"{{ input.id }}\"\n            class=\"n7-facet__input-checkbox-input\"\n            [checked]=\"input.checked\"\n            [disabled]=\"input.disabled\"\n            (change)=\"onChange(input.payload, $event.target.checked)\"\n          />\n          <label\n            *ngIf=\"input.label\"\n            class=\"n7-facet__checkbox-label\"\n            for=\"{{ input.id }}\"\n          >\n            {{ input.label }}\n          </label>\n        </ng-container>\n\n        <!-- Text -->\n        <ng-container *ngSwitchCase=\"'text'\">\n          <label\n            *ngIf=\"input.label\"\n            class=\"n7-facet__input-text-label\"\n            for=\"{{ input.id }}\"\n          >\n            {{ input.label }}\n          </label>\n          <div class=\"n7-facet__input-text-wrapper\">\n            <input\n              type=\"text\"\n              id=\"{{ input.id }}\"\n              class=\"n7-facet__input-text {{input.classes || ''}}\"\n              placeholder=\"{{input.placeholder || ''}}\"\n              [value]=\"input.value || null\"\n              [disabled]=\"input.disabled\"\n              (input)=\"onChange(input.inputPayload, $event.target.value)\"\n              (keyup.enter)=\"onChange(input.enterPayload, $event.target.value)\"\n            />\n            <span\n              *ngIf=\"input.icon\"\n              class=\"n7-facet__input-text-icon {{input.icon || ''}}\"\n              (click)=\"onChange(input.iconPayload)\"\n            >\n            </span>\n          </div>\n        </ng-container>\n\n        <!-- Link -->\n        <ng-container *ngSwitchCase=\"'link'\">\n          <div\n            class=\"n7-facet__input-link {{ input.classes || '' }}\"\n            (click)=\"onChange(input.payload)\"\n          >\n            <span\n              *ngIf=\"input.icon\"\n              class=\"n7-facet__input-link-icon {{ input.icon }}\"\n            ></span>\n            <span class=\"n7-facet__input-link-text\">{{ input.text }}</span>\n            <span\n              *ngIf=\"input.counter || input.counter === 0\"\n              class=\"n7-facet__input-link-counter\"\n              >{{ input.counter }}</span\n            >\n          </div>\n        </ng-container>\n\n        <!-- Select -->\n        <ng-container *ngSwitchCase=\"'select'\">\n          <label *ngIf=\"input.label\" for=\"{{ input.id }}\"\n            >{{ input.label }}</label\n          >\n          <select\n            (change)=\"onChange(input.payload, $event.target.value)\"\n            id=\"{{ input.id }}\"\n            class=\"n7-facet__input-select {{ input.classes || '' }}\"\n            [disabled]=\"input.disabled\"\n          >\n            <option\n              *ngFor=\"let option of input.options\"\n              [value]=\"option.value\"\n              [disabled]=\"option.disabled\"\n              [selected]=\"option.selected\"\n            >\n              {{ option.label }}\n            </option>\n          </select>\n        </ng-container>\n      </ng-container>\n    </div>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: FacetComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-facet', template: "<div *ngIf=\"data\" class=\"n7-facet\">\n  <div\n    *ngFor=\"let section of data.sections\"\n    class=\"n7-facet__section {{ section.classes || '' }}\"\n  >\n    <div\n      *ngFor=\"let input of section.inputs\"\n      class=\"n7-facet__section-input n7-facet__section-input-{{ input.type }} {{ input.classes || '' }}\"\n    >\n      <ng-container [ngSwitch]=\"input.type\">\n        <!-- Checkbox -->\n        <ng-container *ngSwitchCase=\"'checkbox'\">\n          <input\n            type=\"checkbox\"\n            id=\"{{ input.id }}\"\n            class=\"n7-facet__input-checkbox-input\"\n            [checked]=\"input.checked\"\n            [disabled]=\"input.disabled\"\n            (change)=\"onChange(input.payload, $event.target.checked)\"\n          />\n          <label\n            *ngIf=\"input.label\"\n            class=\"n7-facet__checkbox-label\"\n            for=\"{{ input.id }}\"\n          >\n            {{ input.label }}\n          </label>\n        </ng-container>\n\n        <!-- Text -->\n        <ng-container *ngSwitchCase=\"'text'\">\n          <label\n            *ngIf=\"input.label\"\n            class=\"n7-facet__input-text-label\"\n            for=\"{{ input.id }}\"\n          >\n            {{ input.label }}\n          </label>\n          <div class=\"n7-facet__input-text-wrapper\">\n            <input\n              type=\"text\"\n              id=\"{{ input.id }}\"\n              class=\"n7-facet__input-text {{input.classes || ''}}\"\n              placeholder=\"{{input.placeholder || ''}}\"\n              [value]=\"input.value || null\"\n              [disabled]=\"input.disabled\"\n              (input)=\"onChange(input.inputPayload, $event.target.value)\"\n              (keyup.enter)=\"onChange(input.enterPayload, $event.target.value)\"\n            />\n            <span\n              *ngIf=\"input.icon\"\n              class=\"n7-facet__input-text-icon {{input.icon || ''}}\"\n              (click)=\"onChange(input.iconPayload)\"\n            >\n            </span>\n          </div>\n        </ng-container>\n\n        <!-- Link -->\n        <ng-container *ngSwitchCase=\"'link'\">\n          <div\n            class=\"n7-facet__input-link {{ input.classes || '' }}\"\n            (click)=\"onChange(input.payload)\"\n          >\n            <span\n              *ngIf=\"input.icon\"\n              class=\"n7-facet__input-link-icon {{ input.icon }}\"\n            ></span>\n            <span class=\"n7-facet__input-link-text\">{{ input.text }}</span>\n            <span\n              *ngIf=\"input.counter || input.counter === 0\"\n              class=\"n7-facet__input-link-counter\"\n              >{{ input.counter }}</span\n            >\n          </div>\n        </ng-container>\n\n        <!-- Select -->\n        <ng-container *ngSwitchCase=\"'select'\">\n          <label *ngIf=\"input.label\" for=\"{{ input.id }}\"\n            >{{ input.label }}</label\n          >\n          <select\n            (change)=\"onChange(input.payload, $event.target.value)\"\n            id=\"{{ input.id }}\"\n            class=\"n7-facet__input-select {{ input.classes || '' }}\"\n            [disabled]=\"input.disabled\"\n          >\n            <option\n              *ngFor=\"let option of input.options\"\n              [value]=\"option.value\"\n              [disabled]=\"option.disabled\"\n              [selected]=\"option.selected\"\n            >\n              {{ option.label }}\n            </option>\n          </select>\n        </ng-container>\n      </ng-container>\n    </div>\n  </div>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// FACET-HEADER.ts
//---------------------------
class FacetHeaderComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: FacetHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: FacetHeaderComponent, selector: "n7-facet-header", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div\n  *ngIf=\"data\"\n  class=\"n7-facet-header {{ data.classes || '' }}\"\n  (click)=\"onClick(data.payload)\"\n>\n  <span\n    *ngIf=\"data.iconLeft\"\n    class=\"n7-facet-header__icon-left {{ data.iconLeft }}\"\n  >\n  </span>\n  <span class=\"n7-facet-header__text-wrapper\">\n    <span class=\"n7-facet-header__text\"> {{data.text}} </span>\n    <span class=\"n7-facet-header__secondary-text\" *ngIf=\"data.additionalText\">\n      {{data.additionalText}}\n    </span>\n  </span>\n  <span\n    *ngIf=\"data.iconRight\"\n    class=\"n7-facet-header__icon-right {{ data.iconRight }}\"\n  >\n  </span>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: FacetHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-facet-header', template: "<div\n  *ngIf=\"data\"\n  class=\"n7-facet-header {{ data.classes || '' }}\"\n  (click)=\"onClick(data.payload)\"\n>\n  <span\n    *ngIf=\"data.iconLeft\"\n    class=\"n7-facet-header__icon-left {{ data.iconLeft }}\"\n  >\n  </span>\n  <span class=\"n7-facet-header__text-wrapper\">\n    <span class=\"n7-facet-header__text\"> {{data.text}} </span>\n    <span class=\"n7-facet-header__secondary-text\" *ngIf=\"data.additionalText\">\n      {{data.additionalText}}\n    </span>\n  </span>\n  <span\n    *ngIf=\"data.iconRight\"\n    class=\"n7-facet-header__icon-right {{ data.iconRight }}\"\n  >\n  </span>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// FACET-YEAR-RANGE.ts
//---------------------------
class FacetYearRangeComponent {
    onChange(payload, selected) {
        switch (payload) {
            case 'in-date':
                {
                    // find index of selected option
                    const opts = this.data.inDate.options;
                    this.data.inDate._meta = opts.find((o) => o.value === selected).value;
                    const sliceIndex = opts.findIndex((o) => o.value === selected);
                    // make new array of possible years
                    const newOptions = opts.slice(sliceIndex, opts.length);
                    // give new array to second <select>
                    this.data.outDate.options = newOptions;
                    // remove placeholder and enable second <select>
                    this.data.inDate.placeholder = '';
                    this.data.outDate.classes = '';
                    this.data.outDate.placeholder = 'choose';
                }
                break;
            case 'out-date':
                this.data.outDate._meta = selected;
                this.data.outDate.placeholder = '';
                // emit selected facet parameters
                this.emit('change', {
                    payload,
                    value: {
                        from: this.data.inDate._meta,
                        to: this.data.outDate._meta,
                    },
                });
                break;
            default:
                break;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: FacetYearRangeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: FacetYearRangeComponent, selector: "n7-facet-year-range", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-facet-year-range\">\n  <!-- Select starting year -->\n  <div class=\"n7-facet-year-range__in\">\n    <label class=\"n7-facet-year-range__in-label\">\n      {{ data.inDate.text }}\n    </label>\n    <select\n      (change)=\"onChange(data.inDate.payload, $event.target.value)\"\n      class=\"n7-facet-year-range__in-select {{ data.inDate.classes || '' }}\"\n    >\n      <!-- Placeholder option -->\n      <option\n        *ngIf=\"data.inDate.placeholder.length > 0\"\n        value=\"{{ data.inDate.placeholder }}\"\n        disabled\n        selected\n      >\n        {{ data.inDate.placeholder }}\n      </option>\n      <option *ngFor=\"let opt of data.inDate.options\" value=\"{{ opt.value }}\">\n        {{ opt.value }}\n      </option>\n    </select>\n  </div>\n\n  <!-- Select final year -->\n  <div class=\"n7-facet-year-range__out\">\n    <label class=\"n7-facet-year-range__out-label\">\n      {{ data.outDate.text }}\n    </label>\n    <select\n      (change)=\"onChange(data.outDate.payload, $event.target.value)\"\n      class=\"n7-facet-year-range__out-select {{ data.outDate.classes || '' }}\"\n      formControlName=\"outDate\"\n    >\n      <!-- Placeholder option -->\n      <option\n        *ngIf=\"data.outDate.placeholder.length > 0\"\n        value=\"{{ data.outDate.placeholder }}\"\n        disabled\n        selected\n      >\n        {{ data.outDate.placeholder }}\n      </option>\n      <option *ngFor=\"let opt of data.outDate.options\" value=\"{{ opt.value }}\">\n        {{ opt.value }}\n      </option>\n    </select>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: FacetYearRangeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-facet-year-range', template: "<div *ngIf=\"data\" class=\"n7-facet-year-range\">\n  <!-- Select starting year -->\n  <div class=\"n7-facet-year-range__in\">\n    <label class=\"n7-facet-year-range__in-label\">\n      {{ data.inDate.text }}\n    </label>\n    <select\n      (change)=\"onChange(data.inDate.payload, $event.target.value)\"\n      class=\"n7-facet-year-range__in-select {{ data.inDate.classes || '' }}\"\n    >\n      <!-- Placeholder option -->\n      <option\n        *ngIf=\"data.inDate.placeholder.length > 0\"\n        value=\"{{ data.inDate.placeholder }}\"\n        disabled\n        selected\n      >\n        {{ data.inDate.placeholder }}\n      </option>\n      <option *ngFor=\"let opt of data.inDate.options\" value=\"{{ opt.value }}\">\n        {{ opt.value }}\n      </option>\n    </select>\n  </div>\n\n  <!-- Select final year -->\n  <div class=\"n7-facet-year-range__out\">\n    <label class=\"n7-facet-year-range__out-label\">\n      {{ data.outDate.text }}\n    </label>\n    <select\n      (change)=\"onChange(data.outDate.payload, $event.target.value)\"\n      class=\"n7-facet-year-range__out-select {{ data.outDate.classes || '' }}\"\n      formControlName=\"outDate\"\n    >\n      <!-- Placeholder option -->\n      <option\n        *ngIf=\"data.outDate.placeholder.length > 0\"\n        value=\"{{ data.outDate.placeholder }}\"\n        disabled\n        selected\n      >\n        {{ data.outDate.placeholder }}\n      </option>\n      <option *ngFor=\"let opt of data.outDate.options\" value=\"{{ opt.value }}\">\n        {{ opt.value }}\n      </option>\n    </select>\n  </div>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// FILE-SELECTOR.ts
//---------------------------
class FileSelectorComponent {
    onFileSelected(eventTarget) {
        if (!this.emit)
            return;
        const input = eventTarget;
        const iterableFiles = Array.from(input.files);
        Promise.all(iterableFiles.map((file) => this.toBase64(file))).then((base64list) => {
            this.emit('change', {
                target: eventTarget,
                files: input.files,
                base64: base64list,
            });
        });
    }
    /** Obtain base64 string for upload and storage */
    toBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onerror = (err) => reject(err);
            reader.onload = () => resolve(reader.result);
            reader.readAsDataURL(file);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: FileSelectorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: FileSelectorComponent, selector: "n7-file-selector", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<ng-container *ngIf=\"data\">\n  <!-- HIDDEN NATIVE INPUT ELEMENT -->\n  <input\n    type=\"file\"\n    class=\"file-input\"\n    [accept]=\"data.accept\"\n    [multiple]=\"data.multiple\"\n    (change)=\"onFileSelected($event.target)\"\n    [ngStyle]=\"{'display': 'none'}\"\n    #fileUpload\n  />\n\n  <!-- CAPTURES THE CLICKS ON THE INNER CONTENT -->\n  <div class=\"n7-file-selector\" (click)=\"fileUpload.click()\">\n    <ng-content>\n      <!-- UI ELEMENTS FOR IMAGE UPLOAD -->\n    </ng-content>\n  </div>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: FileSelectorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-file-selector', template: "<ng-container *ngIf=\"data\">\n  <!-- HIDDEN NATIVE INPUT ELEMENT -->\n  <input\n    type=\"file\"\n    class=\"file-input\"\n    [accept]=\"data.accept\"\n    [multiple]=\"data.multiple\"\n    (change)=\"onFileSelected($event.target)\"\n    [ngStyle]=\"{'display': 'none'}\"\n    #fileUpload\n  />\n\n  <!-- CAPTURES THE CLICKS ON THE INNER CONTENT -->\n  <div class=\"n7-file-selector\" (click)=\"fileUpload.click()\">\n    <ng-content>\n      <!-- UI ELEMENTS FOR IMAGE UPLOAD -->\n    </ng-content>\n  </div>\n</ng-container>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// INPUT-SELECT.ts
//---------------------------
class InputSelectComponent {
    onChange(inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload, value });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: InputSelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: InputSelectComponent, selector: "n7-input-select", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data as input\" class=\"n7-input-select\">\n  <label\n    *ngIf=\"input.label\"\n    for=\"{{ input.id }}\"\n    [innerHTML]=\"input.label\"\n  ></label>\n  <select\n    (change)=\"onChange(input.payload, $event.target.value)\"\n    id=\"{{ input.id }}\"\n    class=\"n7-facet__input-select\"\n    [ngClass]=\"input.classes\"\n    [attr.name]=\"input.name\"\n    [disabled]=\"input.disabled\"\n    [required]=\"input.required\"\n  >\n    <option\n      *ngFor=\"let option of input.options\"\n      [value]=\"option.value\"\n      [disabled]=\"option.disabled\"\n      [selected]=\"option.selected\"\n      [hidden]=\"option.hidden\"\n      [ngClass]=\"option.classes\"\n    >\n      {{ option.label }}\n    </option>\n  </select>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: InputSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-input-select', template: "<div *ngIf=\"data as input\" class=\"n7-input-select\">\n  <label\n    *ngIf=\"input.label\"\n    for=\"{{ input.id }}\"\n    [innerHTML]=\"input.label\"\n  ></label>\n  <select\n    (change)=\"onChange(input.payload, $event.target.value)\"\n    id=\"{{ input.id }}\"\n    class=\"n7-facet__input-select\"\n    [ngClass]=\"input.classes\"\n    [attr.name]=\"input.name\"\n    [disabled]=\"input.disabled\"\n    [required]=\"input.required\"\n  >\n    <option\n      *ngFor=\"let option of input.options\"\n      [value]=\"option.value\"\n      [disabled]=\"option.disabled\"\n      [selected]=\"option.selected\"\n      [hidden]=\"option.hidden\"\n      [ngClass]=\"option.classes\"\n    >\n      {{ option.label }}\n    </option>\n  </select>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// FOOTER.ts
//---------------------------
class FooterComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: FooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: FooterComponent, selector: "n7-footer", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-footer {{data.classes || ''}}\">\n  <div class=\"n7-footer__content\">\n    <!-- Loop footer content columns -->\n    <div\n      class=\"n7-footer__column {{column.classes || ''}}\"\n      *ngFor=\"let column of data.columns\"\n    >\n      <ng-container\n        *ngTemplateOutlet=\"footerColumn; context:{$implicit: column}\"\n      ></ng-container>\n    </div>\n  </div>\n</div>\n\n<!-- Template: Columns -->\n<ng-template #footerColumn let-column>\n  <!-- Custom order for content (sections) -->\n  <ng-container *ngFor=\"let section of column.sections\">\n    <ng-container [ngSwitch]=\"section.type\">\n      <ng-container *ngSwitchCase=\"'text'\">\n        <ng-container *ngTemplateOutlet=\"text; context:{$implicit: section}\">\n        </ng-container>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'title'\">\n        <ng-container *ngTemplateOutlet=\"title; context:{$implicit: section}\">\n        </ng-container>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'links'\">\n        <ng-container *ngTemplateOutlet=\"links; context:{$implicit: section}\">\n        </ng-container>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'selects'\">\n        <ng-container *ngTemplateOutlet=\"selects; context:{$implicit: section}\">\n        </ng-container>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'images'\">\n        <ng-container *ngTemplateOutlet=\"images; context:{$implicit: section}\">\n        </ng-container>\n      </ng-container>\n      <ng-container *ngSwitchDefault> </ng-container>\n    </ng-container>\n  </ng-container>\n\n  <!-- Legacy configuration without sections -->\n  <ng-container *ngIf=\"column.title\">\n    <ng-container *ngTemplateOutlet=\"title; context:{$implicit: column}\">\n    </ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"column.text\">\n    <ng-container *ngTemplateOutlet=\"text; context:{$implicit: column}\">\n    </ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"column.links\">\n    <ng-container *ngTemplateOutlet=\"links; context:{$implicit: column}\">\n    </ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"column.images\">\n    <ng-container *ngTemplateOutlet=\"images; context:{$implicit: column}\">\n    </ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"column.selects\">\n    <ng-container *ngTemplateOutlet=\"selects; context:{$implicit: column}\">\n    </ng-container>\n  </ng-container>\n</ng-template>\n\n<!-- Content Sections -->\n<!-- TITLE -->\n<ng-template #title let-section>\n  <h2 *ngIf=\"section.title\" class=\"n7-footer__column-title\">\n    {{ section.title }}\n  </h2>\n</ng-template>\n<!-- TEXT -->\n<ng-template #text let-section>\n  <p\n    *ngIf=\"section.text\"\n    class=\"n7-footer__column-text\"\n    [innerHTML]=\"section.text\"\n  ></p>\n</ng-template>\n<!-- IMAGES -->\n<ng-template #images let-section>\n  <div *ngIf=\"section.images\" class=\"n7-footer__column-images\">\n    <n7-anchor-wrapper\n      *ngFor=\"let image of section.images\"\n      [classes]=\"image.classes || ''\"\n      [data]=\"image.anchor\"\n      (clicked)=\"onClick($event)\"\n    >\n      <img [src]=\"image.url\" [attr.alt]=\"image.alttext\" />\n    </n7-anchor-wrapper>\n  </div>\n</ng-template>\n<!-- SELECTS -->\n<ng-template #selects let-section>\n  <div *ngIf=\"section.selects\" class=\"n7-footer__column-selects\">\n    <n7-input-select\n      *ngFor=\"let selectData of section.selects\"\n      [data]=\"selectData\"\n      [emit]=\"this.emit\"\n    >\n    </n7-input-select>\n  </div>\n</ng-template>\n<!-- LINKS -->\n<ng-template #links let-section>\n  <div *ngIf=\"section.links\" class=\"n7-footer__column-nav\">\n    <ul class=\"n7-footer__column-nav-list\">\n      <li\n        *ngFor=\"let link of section.links\"\n        class=\"n7-footer__column-nav-item {{link.classes || ''}}\"\n      >\n        <n7-anchor-wrapper\n          [classes]=\"'n7-footer__column-nav-link'\"\n          [data]=\"link.anchor\"\n          (clicked)=\"onClick($event)\"\n        >\n          {{ link.text }}\n        </n7-anchor-wrapper>\n      </li>\n    </ul>\n  </div>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i1.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "component", type: AnchorWrapperComponent, selector: "n7-anchor-wrapper", inputs: ["data", "classes"], outputs: ["clicked"] }, { kind: "component", type: InputSelectComponent, selector: "n7-input-select", inputs: ["data", "emit"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: FooterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-footer', template: "<div *ngIf=\"data\" class=\"n7-footer {{data.classes || ''}}\">\n  <div class=\"n7-footer__content\">\n    <!-- Loop footer content columns -->\n    <div\n      class=\"n7-footer__column {{column.classes || ''}}\"\n      *ngFor=\"let column of data.columns\"\n    >\n      <ng-container\n        *ngTemplateOutlet=\"footerColumn; context:{$implicit: column}\"\n      ></ng-container>\n    </div>\n  </div>\n</div>\n\n<!-- Template: Columns -->\n<ng-template #footerColumn let-column>\n  <!-- Custom order for content (sections) -->\n  <ng-container *ngFor=\"let section of column.sections\">\n    <ng-container [ngSwitch]=\"section.type\">\n      <ng-container *ngSwitchCase=\"'text'\">\n        <ng-container *ngTemplateOutlet=\"text; context:{$implicit: section}\">\n        </ng-container>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'title'\">\n        <ng-container *ngTemplateOutlet=\"title; context:{$implicit: section}\">\n        </ng-container>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'links'\">\n        <ng-container *ngTemplateOutlet=\"links; context:{$implicit: section}\">\n        </ng-container>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'selects'\">\n        <ng-container *ngTemplateOutlet=\"selects; context:{$implicit: section}\">\n        </ng-container>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'images'\">\n        <ng-container *ngTemplateOutlet=\"images; context:{$implicit: section}\">\n        </ng-container>\n      </ng-container>\n      <ng-container *ngSwitchDefault> </ng-container>\n    </ng-container>\n  </ng-container>\n\n  <!-- Legacy configuration without sections -->\n  <ng-container *ngIf=\"column.title\">\n    <ng-container *ngTemplateOutlet=\"title; context:{$implicit: column}\">\n    </ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"column.text\">\n    <ng-container *ngTemplateOutlet=\"text; context:{$implicit: column}\">\n    </ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"column.links\">\n    <ng-container *ngTemplateOutlet=\"links; context:{$implicit: column}\">\n    </ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"column.images\">\n    <ng-container *ngTemplateOutlet=\"images; context:{$implicit: column}\">\n    </ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"column.selects\">\n    <ng-container *ngTemplateOutlet=\"selects; context:{$implicit: column}\">\n    </ng-container>\n  </ng-container>\n</ng-template>\n\n<!-- Content Sections -->\n<!-- TITLE -->\n<ng-template #title let-section>\n  <h2 *ngIf=\"section.title\" class=\"n7-footer__column-title\">\n    {{ section.title }}\n  </h2>\n</ng-template>\n<!-- TEXT -->\n<ng-template #text let-section>\n  <p\n    *ngIf=\"section.text\"\n    class=\"n7-footer__column-text\"\n    [innerHTML]=\"section.text\"\n  ></p>\n</ng-template>\n<!-- IMAGES -->\n<ng-template #images let-section>\n  <div *ngIf=\"section.images\" class=\"n7-footer__column-images\">\n    <n7-anchor-wrapper\n      *ngFor=\"let image of section.images\"\n      [classes]=\"image.classes || ''\"\n      [data]=\"image.anchor\"\n      (clicked)=\"onClick($event)\"\n    >\n      <img [src]=\"image.url\" [attr.alt]=\"image.alttext\" />\n    </n7-anchor-wrapper>\n  </div>\n</ng-template>\n<!-- SELECTS -->\n<ng-template #selects let-section>\n  <div *ngIf=\"section.selects\" class=\"n7-footer__column-selects\">\n    <n7-input-select\n      *ngFor=\"let selectData of section.selects\"\n      [data]=\"selectData\"\n      [emit]=\"this.emit\"\n    >\n    </n7-input-select>\n  </div>\n</ng-template>\n<!-- LINKS -->\n<ng-template #links let-section>\n  <div *ngIf=\"section.links\" class=\"n7-footer__column-nav\">\n    <ul class=\"n7-footer__column-nav-list\">\n      <li\n        *ngFor=\"let link of section.links\"\n        class=\"n7-footer__column-nav-item {{link.classes || ''}}\"\n      >\n        <n7-anchor-wrapper\n          [classes]=\"'n7-footer__column-nav-link'\"\n          [data]=\"link.anchor\"\n          (clicked)=\"onClick($event)\"\n        >\n          {{ link.text }}\n        </n7-anchor-wrapper>\n      </li>\n    </ul>\n  </div>\n</ng-template>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

/**
 * HeaderComponent <n7-header>
 *
 * @structure
 *  >>  cpm = it has Classes, Payload, Metadata  <<
 *  >>  -p- = it has only Payload                <<
 *  >>  +-- = sub-member                         <<
 *  >>  +---> = array                            <<
 *
 *  data (cpm)
 *    +-- actions
 *          +---> action (cpm)
 *                  +-- badge
 *    +-- logo (cp-)
 *    +-- menuToggle
 *          +-- open (-p-)
 *          +-- close (-p-)
 *    +-- nav (cpm)
 *          +---> items
 *    +-- search (cpm)
 *    +-- user (cpm)
 *
 */
class HeaderComponent {
    onClick(payload) {
        // console.log(type, payload);
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    onKeyUp(payload, keyCode, value) {
        if (!this.emit)
            return;
        this.emit('keyup', { payload, keyCode, value });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: HeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: HeaderComponent, selector: "n7-header", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<header *ngIf=\"data\" class=\"n7-header {{data.classes || ''}}\">\n  <div class=\"n7-header__content\">\n    <!-- Logo and title -->\n    <div class=\"n7-header__logo-title {{data.logo.classes || ''}}\">\n      <n7-anchor-wrapper\n        [classes]=\"'n7-header__logo-link'\"\n        [data]=\"data.logo.anchor\"\n        (clicked)=\"onClick($event)\"\n      >\n        <img\n          class=\"n7-header__logo\"\n          *ngIf=\"data.logo.image\"\n          [src]=\"data.logo.image\"\n          alt=\"{{ data.logo.title }}\"\n        />\n        <div class=\"n7-header__title-subtitle\">\n          <h1 class=\"n7-header__title\">{{ data.logo.title }}</h1>\n          <h2 class=\"n7-header__subtitle\" *ngIf=\"data.logo.subtitle\">\n            {{ data.logo.subtitle }}\n          </h2>\n        </div>\n      </n7-anchor-wrapper>\n    </div>\n\n    <!-- Main menu -->\n    <nav class=\"n7-header__nav {{data.nav.classes || ''}}\" *ngIf=\"data.nav\">\n      <div class=\"n7-header__nav-content\">\n        <ul class=\"n7-header__nav-list\">\n          <li\n            class=\"n7-header__nav-item {{item.classes || ''}}\"\n            *ngFor=\"let item of data.nav.items\"\n          >\n            <n7-anchor-wrapper\n              [classes]=\"'n7-header__nav-link'\"\n              [data]=\"item.anchor\"\n              (clicked)=\"onClick($event)\"\n            >\n              <span\n                class=\"n7-header__nav-icon {{item.icon}}\"\n                *ngIf=\"item.icon\"\n              ></span>\n              <span class=\"n7-header__nav-label\" *ngIf=\"item.text\">\n                {{ item.text }}\n              </span>\n            </n7-anchor-wrapper>\n            <!-- Sublevel -->\n            <ul class=\"n7-header__subnav-list\" *ngIf=\"item.subnav\">\n              <li\n                class=\"n7-header__subnav-item {{subitem.classes || ''}}\"\n                *ngFor=\"let subitem of item.subnav\"\n              >\n                <n7-anchor-wrapper\n                  [classes]=\"'n7-header__subnav-link'\"\n                  [data]=\"subitem.anchor\"\n                  (clicked)=\"onClick($event)\"\n                >\n                  <span\n                    class=\"n7-header__subnav-icon {{subitem.icon}}\"\n                    *ngIf=\"subitem.icon\"\n                  ></span>\n                  <span class=\"n7-header__subnav-label\" *ngIf=\"subitem.text\">\n                    {{ subitem.text }}\n                  </span>\n                </n7-anchor-wrapper>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n    </nav>\n\n    <!-- Mobile menu toggle -->\n    <div class=\"n7-header__mobile-menu-toggle\">\n      <span\n        class=\"n7-header__mobile-menu-icon n7-icon-menu\"\n        (click)=\"onClick(data.menuToggle.open.payload)\"\n      ></span>\n    </div>\n\n    <!-- Mobile menu close -->\n    <span\n      class=\"n7-header__mobile-menu-close n7-icon-close\"\n      (click)=\"onClick(data.menuToggle.close.payload)\"\n    ></span>\n\n    <!-- Tools: search, notifications, use profile or login/signup -->\n    <div class=\"n7-header__tools\">\n      <div\n        class=\"n7-header__search {{data.search.classes || ''}}\"\n        *ngIf=\"data.search\"\n      >\n        <input\n          class=\"n7-header__search-input\"\n          type=\"search\"\n          name=\"search\"\n          placeholder=\"{{ data.search.hint || ''}}\"\n          (keyup)=\"onKeyUp(data.search.payload, $event.keyCode, $event.target.value)\"\n        />\n        <button\n          class=\"n7-header__search-btn\"\n          type=\"submit\"\n          (click)=\"onClick(data.search.payload)\"\n        >\n          <span class=\"n7-header__search-btn-label\"> Search </span>\n        </button>\n      </div>\n\n      <div class=\"n7-header__actions\" *ngIf=\"data.actions\">\n        <n7-anchor-wrapper\n          *ngFor=\"let action of data.actions\"\n          [classes]=\"'n7-header__action' + (action.classes || '')\"\n          [data]=\"action.anchor\"\n          (clicked)=\"onClick($event)\"\n        >\n          <span class=\"n7-header__action-icon {{ action.icon }}\"></span>\n          <span\n            *ngIf=\"action.badge\"\n            class=\"n7-header__action-badge {{ action.badge.text ? 'has-text' : '' }}\"\n          >\n            {{ action.badge.text }}\n          </span>\n        </n7-anchor-wrapper>\n      </div>\n\n      <div class=\"n7-header__buttons\" *ngIf=\"data.buttons\">\n        <n7-anchor-wrapper\n          *ngFor=\"let button of data.buttons\"\n          [classes]=\"button.classes\"\n          [data]=\"button.anchor\"\n          (clicked)=\"onClick($event)\"\n        >\n          <span class=\"\" *ngIf=\"button.text\"> {{ button.text }} </span>\n          <span class=\"{{button.icon}}\" *ngIf=\"button.icon\"></span>\n        </n7-anchor-wrapper>\n      </div>\n\n      <div class=\"n7-header__selects\" *ngIf=\"data.selects\">\n        <n7-input-select\n          *ngFor=\"let selectData of data.selects\"\n          [data]=\"selectData\"\n          [emit]=\"this.emit\"\n        >\n        </n7-input-select>\n      </div>\n\n      <div\n        class=\"n7-header__user {{data.user.classes || ''}}\"\n        *ngIf=\"data.user\"\n      >\n        <n7-anchor-wrapper\n          [classes]=\"'n7-header__user-content'\"\n          [data]=\"data.user.anchor\"\n          (clicked)=\"onClick($event)\"\n        >\n          <n7-avatar [data]=\"data.user\" [emit]=\"this.emit\"></n7-avatar>\n          <p class=\"n7-header__user-name\" *ngIf=\"data.user.name\">\n            <span class=\"n7-header__user-name-label\">\n              {{ data.user.name }}\n            </span>\n          </p>\n        </n7-anchor-wrapper>\n      </div>\n    </div>\n  </div>\n</header>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: AnchorWrapperComponent, selector: "n7-anchor-wrapper", inputs: ["data", "classes"], outputs: ["clicked"] }, { kind: "component", type: AvatarComponent, selector: "n7-avatar", inputs: ["data", "emit"] }, { kind: "component", type: InputSelectComponent, selector: "n7-input-select", inputs: ["data", "emit"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-header', template: "<header *ngIf=\"data\" class=\"n7-header {{data.classes || ''}}\">\n  <div class=\"n7-header__content\">\n    <!-- Logo and title -->\n    <div class=\"n7-header__logo-title {{data.logo.classes || ''}}\">\n      <n7-anchor-wrapper\n        [classes]=\"'n7-header__logo-link'\"\n        [data]=\"data.logo.anchor\"\n        (clicked)=\"onClick($event)\"\n      >\n        <img\n          class=\"n7-header__logo\"\n          *ngIf=\"data.logo.image\"\n          [src]=\"data.logo.image\"\n          alt=\"{{ data.logo.title }}\"\n        />\n        <div class=\"n7-header__title-subtitle\">\n          <h1 class=\"n7-header__title\">{{ data.logo.title }}</h1>\n          <h2 class=\"n7-header__subtitle\" *ngIf=\"data.logo.subtitle\">\n            {{ data.logo.subtitle }}\n          </h2>\n        </div>\n      </n7-anchor-wrapper>\n    </div>\n\n    <!-- Main menu -->\n    <nav class=\"n7-header__nav {{data.nav.classes || ''}}\" *ngIf=\"data.nav\">\n      <div class=\"n7-header__nav-content\">\n        <ul class=\"n7-header__nav-list\">\n          <li\n            class=\"n7-header__nav-item {{item.classes || ''}}\"\n            *ngFor=\"let item of data.nav.items\"\n          >\n            <n7-anchor-wrapper\n              [classes]=\"'n7-header__nav-link'\"\n              [data]=\"item.anchor\"\n              (clicked)=\"onClick($event)\"\n            >\n              <span\n                class=\"n7-header__nav-icon {{item.icon}}\"\n                *ngIf=\"item.icon\"\n              ></span>\n              <span class=\"n7-header__nav-label\" *ngIf=\"item.text\">\n                {{ item.text }}\n              </span>\n            </n7-anchor-wrapper>\n            <!-- Sublevel -->\n            <ul class=\"n7-header__subnav-list\" *ngIf=\"item.subnav\">\n              <li\n                class=\"n7-header__subnav-item {{subitem.classes || ''}}\"\n                *ngFor=\"let subitem of item.subnav\"\n              >\n                <n7-anchor-wrapper\n                  [classes]=\"'n7-header__subnav-link'\"\n                  [data]=\"subitem.anchor\"\n                  (clicked)=\"onClick($event)\"\n                >\n                  <span\n                    class=\"n7-header__subnav-icon {{subitem.icon}}\"\n                    *ngIf=\"subitem.icon\"\n                  ></span>\n                  <span class=\"n7-header__subnav-label\" *ngIf=\"subitem.text\">\n                    {{ subitem.text }}\n                  </span>\n                </n7-anchor-wrapper>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n    </nav>\n\n    <!-- Mobile menu toggle -->\n    <div class=\"n7-header__mobile-menu-toggle\">\n      <span\n        class=\"n7-header__mobile-menu-icon n7-icon-menu\"\n        (click)=\"onClick(data.menuToggle.open.payload)\"\n      ></span>\n    </div>\n\n    <!-- Mobile menu close -->\n    <span\n      class=\"n7-header__mobile-menu-close n7-icon-close\"\n      (click)=\"onClick(data.menuToggle.close.payload)\"\n    ></span>\n\n    <!-- Tools: search, notifications, use profile or login/signup -->\n    <div class=\"n7-header__tools\">\n      <div\n        class=\"n7-header__search {{data.search.classes || ''}}\"\n        *ngIf=\"data.search\"\n      >\n        <input\n          class=\"n7-header__search-input\"\n          type=\"search\"\n          name=\"search\"\n          placeholder=\"{{ data.search.hint || ''}}\"\n          (keyup)=\"onKeyUp(data.search.payload, $event.keyCode, $event.target.value)\"\n        />\n        <button\n          class=\"n7-header__search-btn\"\n          type=\"submit\"\n          (click)=\"onClick(data.search.payload)\"\n        >\n          <span class=\"n7-header__search-btn-label\"> Search </span>\n        </button>\n      </div>\n\n      <div class=\"n7-header__actions\" *ngIf=\"data.actions\">\n        <n7-anchor-wrapper\n          *ngFor=\"let action of data.actions\"\n          [classes]=\"'n7-header__action' + (action.classes || '')\"\n          [data]=\"action.anchor\"\n          (clicked)=\"onClick($event)\"\n        >\n          <span class=\"n7-header__action-icon {{ action.icon }}\"></span>\n          <span\n            *ngIf=\"action.badge\"\n            class=\"n7-header__action-badge {{ action.badge.text ? 'has-text' : '' }}\"\n          >\n            {{ action.badge.text }}\n          </span>\n        </n7-anchor-wrapper>\n      </div>\n\n      <div class=\"n7-header__buttons\" *ngIf=\"data.buttons\">\n        <n7-anchor-wrapper\n          *ngFor=\"let button of data.buttons\"\n          [classes]=\"button.classes\"\n          [data]=\"button.anchor\"\n          (clicked)=\"onClick($event)\"\n        >\n          <span class=\"\" *ngIf=\"button.text\"> {{ button.text }} </span>\n          <span class=\"{{button.icon}}\" *ngIf=\"button.icon\"></span>\n        </n7-anchor-wrapper>\n      </div>\n\n      <div class=\"n7-header__selects\" *ngIf=\"data.selects\">\n        <n7-input-select\n          *ngFor=\"let selectData of data.selects\"\n          [data]=\"selectData\"\n          [emit]=\"this.emit\"\n        >\n        </n7-input-select>\n      </div>\n\n      <div\n        class=\"n7-header__user {{data.user.classes || ''}}\"\n        *ngIf=\"data.user\"\n      >\n        <n7-anchor-wrapper\n          [classes]=\"'n7-header__user-content'\"\n          [data]=\"data.user.anchor\"\n          (clicked)=\"onClick($event)\"\n        >\n          <n7-avatar [data]=\"data.user\" [emit]=\"this.emit\"></n7-avatar>\n          <p class=\"n7-header__user-name\" *ngIf=\"data.user.name\">\n            <span class=\"n7-header__user-name-label\">\n              {{ data.user.name }}\n            </span>\n          </p>\n        </n7-anchor-wrapper>\n      </div>\n    </div>\n  </div>\n</header>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// HERO.ts
//---------------------------
class HeroComponent {
    getBackgroundImageCssValue(backgroundImage) {
        if (backgroundImage) {
            return `url(${backgroundImage})`;
        }
        return 'none';
    }
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    onInputChange(payload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload: payload, value });
    }
    onInputEnter(payload, value) {
        if (!this.emit)
            return;
        this.emit('enter', { inputPayload: payload, value });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: HeroComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: HeroComponent, selector: "n7-hero", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<section\n  *ngIf=\"data\"\n  class=\"n7-hero {{data.classes || ''}}\"\n  [ngClass]=\"{ \n        'has-image' : !!data.image, \n        'has-background-image': !!data.backgroundImage \n    }\"\n  [ngStyle]=\"{ \n        'background-image': getBackgroundImageCssValue(data.backgroundImage)\n    }\"\n>\n  <div class=\"n7-hero__content\">\n    <div class=\"n7-hero__text-wrapper\">\n      <p\n        class=\"n7-hero__pre-title\"\n        *ngIf=\"data.preTitle\"\n        [innerHTML]=\"data.preTitle\"\n      ></p>\n      <h2 class=\"n7-hero__title\" [innerHTML]=\"data.title\"></h2>\n      <div\n        class=\"n7-hero__text\"\n        *ngIf=\"data.text\"\n        [innerHTML]=\"data.text\"\n      ></div>\n      <div class=\"n7-hero__input-wrapper\" *ngIf=\"data.input || data.button\">\n        <input\n          type=\"text\"\n          class=\"n7-hero__input\"\n          placeholder=\"{{data.input.placeholder || ''}}\"\n          *ngIf=\"data.input\"\n          (input)=\"onInputChange(data.input.payload, $event.target.value)\"\n          (keyup.enter)=\"onInputEnter(data.input.payload, $event.target.value)\"\n        />\n        <span\n          class=\"n7-hero__input-icon {{data.input.icon || ''}}\"\n          *ngIf=\"data.input && data.input.icon\"\n          (click)=\"onClick(data.input.payload)\"\n        ></span>\n        <ng-container *ngIf=\"data.button\">\n          <n7-anchor-wrapper\n            [classes]=\"'n7-hero__btn n7-btn n7-btn-cta n7-btn-l'\"\n            [data]=\"data.button.anchor\"\n            (clicked)=\"onClick($event)\"\n          >\n            {{data.button.text}}\n          </n7-anchor-wrapper>\n        </ng-container>\n      </div>\n    </div>\n\n    <div class=\"n7-hero__image-wrapper\" *ngIf=\"data.image\">\n      <img class=\"n7-hero__image\" src=\"{{data.image}}\" alt=\"\" />\n    </div>\n  </div>\n</section>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: AnchorWrapperComponent, selector: "n7-anchor-wrapper", inputs: ["data", "classes"], outputs: ["clicked"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: HeroComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-hero', template: "<section\n  *ngIf=\"data\"\n  class=\"n7-hero {{data.classes || ''}}\"\n  [ngClass]=\"{ \n        'has-image' : !!data.image, \n        'has-background-image': !!data.backgroundImage \n    }\"\n  [ngStyle]=\"{ \n        'background-image': getBackgroundImageCssValue(data.backgroundImage)\n    }\"\n>\n  <div class=\"n7-hero__content\">\n    <div class=\"n7-hero__text-wrapper\">\n      <p\n        class=\"n7-hero__pre-title\"\n        *ngIf=\"data.preTitle\"\n        [innerHTML]=\"data.preTitle\"\n      ></p>\n      <h2 class=\"n7-hero__title\" [innerHTML]=\"data.title\"></h2>\n      <div\n        class=\"n7-hero__text\"\n        *ngIf=\"data.text\"\n        [innerHTML]=\"data.text\"\n      ></div>\n      <div class=\"n7-hero__input-wrapper\" *ngIf=\"data.input || data.button\">\n        <input\n          type=\"text\"\n          class=\"n7-hero__input\"\n          placeholder=\"{{data.input.placeholder || ''}}\"\n          *ngIf=\"data.input\"\n          (input)=\"onInputChange(data.input.payload, $event.target.value)\"\n          (keyup.enter)=\"onInputEnter(data.input.payload, $event.target.value)\"\n        />\n        <span\n          class=\"n7-hero__input-icon {{data.input.icon || ''}}\"\n          *ngIf=\"data.input && data.input.icon\"\n          (click)=\"onClick(data.input.payload)\"\n        ></span>\n        <ng-container *ngIf=\"data.button\">\n          <n7-anchor-wrapper\n            [classes]=\"'n7-hero__btn n7-btn n7-btn-cta n7-btn-l'\"\n            [data]=\"data.button.anchor\"\n            (clicked)=\"onClick($event)\"\n          >\n            {{data.button.text}}\n          </n7-anchor-wrapper>\n        </ng-container>\n      </div>\n    </div>\n\n    <div class=\"n7-hero__image-wrapper\" *ngIf=\"data.image\">\n      <img class=\"n7-hero__image\" src=\"{{data.image}}\" alt=\"\" />\n    </div>\n  </div>\n</section>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

/* eslint-disable no-use-before-define */
//---------------------------
// HISTOGRAM-RANGE.ts
//---------------------------
class HistogramRangeComponent {
    constructor() {
        this.sliders = [];
        this._loaded = false;
        this.draw = () => {
            const { d3 } = this;
            const { width, margin, height, items, colours, containerId, axis, setSliders, } = this.data;
            // data validation
            const rangeMode = items.every((d) => d.range);
            if (!rangeMode && items.some((d) => !d.range)) {
                throw Error('All items must have the "range" property');
            }
            // Helpers - Start:
            const LABELtoX = d3
                .scaleBand()
                .domain(items.map((d) => d.label))
                .range([0, width])
                .paddingInner(0.17)
                .paddingOuter(1);
            const XtoLABEL = (value) => {
                const domain = LABELtoX.domain();
                const paddingOuter = LABELtoX(domain[0]);
                const eachBand = LABELtoX.step();
                const index = Math.floor((value - paddingOuter) / eachBand);
                return domain[Math.max(0, Math.min(index, domain.length - 1))];
            };
            // YEAR SELECTION CIRCLES
            // let sliders;
            if (setSliders && this.sliders) {
                this.sliders = setSliders.map((d) => ({
                    x: LABELtoX(d) + LABELtoX.bandwidth() / 2,
                    y: height,
                }));
            }
            else {
                this.sliders = d3
                    .extent(items, (d) => d.label)
                    .map((d) => ({ x: LABELtoX(d) + LABELtoX.bandwidth() / 2, y: height }));
            }
            const isInRange = (y) => {
                const allItems = this.sliders.map((d) => XtoLABEL(d.x));
                if (y >= d3.min(allItems) && y <= d3.max(allItems))
                    return true;
                return false;
            };
            function colourBars(d) {
                if (isInRange(d.label))
                    return 'url(#gradient)';
                return '#e3e3e3';
            }
            this.colourBars = colourBars;
            this.getSelectedRange = () => {
                const rangeStart = items.find((it) => it.label === XtoLABEL(this.sliders[0].x));
                const rangeEnd = items.find((it) => it.label === XtoLABEL(this.sliders[1].x));
                return [
                    rangeStart.payload,
                    rangeMode ? rangeEnd.range.payload : rangeEnd.payload,
                ];
            };
            // Helpers - End.
            // clear HTML contents
            document.getElementById(containerId).innerHTML = '';
            const svg = d3
                .select(`#${containerId}`)
                .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`);
            this.svg = svg;
            const scaleHeight = d3
                .scaleSymlog() // most similar scale to the original
                .domain([0, d3.max(items, (d) => d.value)])
                .range([height, 0]);
            // GRADIENT
            const defs = svg.append('defs'); // definitions
            const gradient = defs
                .append('linearGradient')
                .attr('id', 'gradient')
                .attr('gradientUnits', 'userSpaceOnUse')
                .attr('x1', 0)
                .attr('y1', height)
                .attr('x2', 0)
                .attr('y2', margin.top);
            gradient
                .append('stop')
                .attr('class', 'start')
                .attr('offset', '0%')
                .attr('stop-color', colours.bottom) // bottom gradient
                .attr('stop-opacity', 1);
            gradient
                .append('stop')
                .attr('class', 'end')
                .attr('offset', '100%')
                .attr('stop-color', colours.top) // top gradient
                .attr('stop-opacity', 1);
            // DRAW INSIDE MARGINS
            const g = svg
                .append('g')
                .attr('class', 'chart')
                .attr('transform', `translate(${margin.left},${margin.top})`);
            const barsLayer = g.append('g').attr('class', 'bars');
            const controlsLayer = g.append('g').attr('class', 'controls');
            // BAR CHART
            barsLayer // bars
                .selectAll('rect.bars')
                .data(items)
                .join('rect')
                .attr('class', 'bars')
                .attr('width', LABELtoX.bandwidth)
                .attr('height', (d) => height - scaleHeight(d.value))
                .attr('y', (d) => scaleHeight(d.value))
                .attr('x', (d) => LABELtoX(d.label))
                .attr('data-start', (d) => d.payload) // make the data easily accessible
                .attr('data-end', (d) => (d.range ? d.range.payload : d.payload))
                .attr('fill', 'url(#gradient)');
            barsLayer // catch bar events
                .on('mousemove', (event) => {
                const year = XtoLABEL(this.getEventCoords(event).x);
                d3.selectAll('rect.bars').attr('fill', (d) => {
                    if (year === d.label)
                        return '#B0CCF8';
                    return colourBars(d);
                });
            })
                .on('mouseout', () => {
                d3.selectAll('rect.bars').attr('fill', (d) => colourBars(d));
            })
                .on('click', (event) => {
                const label = XtoLABEL(this.getEventCoords(event).x);
                const xAxisValue = LABELtoX(label) + LABELtoX.bandwidth() / 2;
                const newValue = {
                    x: xAxisValue,
                    y: height,
                };
                this.sliders = [
                    // avoid joining the two objects!
                    { ...newValue },
                    { ...newValue },
                ];
                rangePicker
                    .data(this.sliders)
                    .select('circle')
                    .transition()
                    .ease(d3.easeQuadOut)
                    .duration(550)
                    .attr('cx', (d) => d.x);
                controlsLayer
                    .select('path.blueline')
                    .transition()
                    .ease(d3.easeQuadOut)
                    .duration(550)
                    .attr('d', d3.line()(this.sliders.map((d) => [d.x, d.y])));
                controlsLayer
                    .selectAll('text')
                    .transition()
                    .ease(d3.easeQuadOut)
                    .duration(550)
                    .attr('x', () => xAxisValue)
                    .text((d, i) => {
                    if (!rangeMode)
                        return label;
                    const item = items.find((it) => it.label === label);
                    if (i > 0)
                        return item.range.label;
                    return item.label;
                });
                g.selectAll('rect.bars').attr('fill', (d) => colourBars(d));
                this.textCollision(this.sliders);
                this.emit('rangeselected', this.getSelectedRange());
            });
            controlsLayer // gray line
                .append('path')
                .attr('class', 'grayline')
                .attr('d', d3.line()([
                [0, height],
                [width, height],
            ]))
                .attr('stroke-width', 2)
                .attr('opacity', 1)
                .attr('stroke', '#C1C5C7');
            controlsLayer // blue line
                .append('path')
                .attr('class', 'blueline')
                .attr('d', d3.line()(this.sliders.map((d) => [d.x, d.y])))
                .attr('stroke-width', 2)
                .attr('stroke', colours.accent);
            const rangePicker = controlsLayer
                .selectAll('g.rangepicker')
                .data(this.sliders.sort((a, b) => d3.ascending(a.x, b.x)))
                .join('g')
                .attr('class', 'rangepicker');
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const self = this; // FIXME: Allow use of class "this" inside dragging update;
            /**
             * Animate the elements while the user is dragging one of the range selectors
             */
            function draggingUpdate(event, data) {
                const label = XtoLABEL(event.x);
                const xAxisValue = LABELtoX(label) + LABELtoX.bandwidth() / 2;
                const yb = [];
                g.selectAll('circle').each(function setBallPosition() {
                    yb.push({ x: +d3.select(this).attr('cx'), y: height });
                });
                self.sliders = yb.sort((a, b) => d3.ascending(a.x, b.x));
                // move the circle
                d3.select(this)
                    .select('circle')
                    .attr('cx', (data.x = xAxisValue));
                // move the blue line
                controlsLayer
                    .select('path.blueline')
                    .attr('d', d3.line()(self.sliders.map((d) => [d.x, d.y])));
                // change the text position
                d3.select(this)
                    .select('text')
                    .attr('x', () => xAxisValue);
                // change the text values
                controlsLayer.selectAll('text').text((d) => {
                    const l = XtoLABEL(d.x);
                    if (!rangeMode)
                        return l;
                    const position = self.sliders.findIndex((slider) => slider.x === d.x);
                    const range = self.getSelectedRange();
                    if (position === 1)
                        return range[1];
                    return range[0];
                });
                self.textCollision(self.sliders);
                // colour the bars
                g.selectAll('rect.bars').attr('fill', (d) => colourBars(d));
            }
            rangePicker // drag handler
                .call(d3
                .drag()
                .on('drag', draggingUpdate)
                .on('end', (event, data) => {
                // update one last time to prevent desyncing
                draggingUpdate(event, data);
                // emit the selected range
                this.emit('rangeselected', this.getSelectedRange());
            }));
            rangePicker
                .append('circle')
                .attr('cx', (d) => d.x)
                .attr('cy', (d) => d.y)
                .attr('r', 9)
                .attr('fill', 'white')
                .attr('stroke-width', 2)
                .attr('stroke', colours.accent)
                .attr('style', 'cursor: pointer');
            rangePicker
                .attr('text-anchor', 'middle')
                .attr('font-family', 'Roboto, Arial, sans-serif')
                .attr('font-size', '12px')
                .append('text')
                .attr('y', (d) => d.y + margin.bottom / 2)
                .attr('x', (d) => d.x)
                .attr('fill', colours.accent)
                .text((d, i) => {
                const l = XtoLABEL(d.x);
                if (rangeMode && i === 1) {
                    return items.find((item) => item.label === l).range.label;
                }
                return l;
            });
            if (axis?.yAxis?.show) {
                const yAxis = d3
                    .axisLeft(scaleHeight)
                    .ticks(axis.yAxis.tickAmount ?? 2)
                    .tickValues(axis.yAxis.values ? axis.yAxis.values : null);
                const yAxisGroup = svg
                    .append('g')
                    .attr('transform', `translate(${margin.left}, ${margin.top})`)
                    .call(yAxis);
                yAxisGroup.selectAll('path, line').style('stroke', colours.accent);
                yAxisGroup.selectAll('text').style('fill', colours.accent);
            }
        };
        /** Avoid collision of the slider labels */
        this.textCollision = (sliders) => {
            // pre-requisites
            const controlsLayer = this.d3.select('g.chart').select('g.controls');
            const { items, margin } = this.data;
            const rangeMode = items.every((d) => d.range);
            // run collision detection
            const isColliding = sliders[0].x === sliders[1].x;
            if (rangeMode && isColliding) {
                controlsLayer
                    .selectAll('text')
                    .attr('y', (d, i) => i > 0 ? d.y + margin.bottom / 2 + 12 : d.y + margin.bottom / 2)
                    .text((d, i) => {
                    const range = this.getSelectedRange();
                    return range[i];
                });
            }
            else {
                controlsLayer.selectAll('text').attr('y', (d) => d.y + margin.bottom / 2);
            }
        };
        /** Public api that allows to dinamically change the bars */
        this.setBars = (newBars) => {
            this.data.items = newBars;
            this.draw();
            this.d3.selectAll('rect.bars').attr('fill', (d) => this.colourBars(d));
        };
        /** Public api that allows to dinamically change the slider position */
        this.setSliders = ([startLabel, endLabel], emit = true) => {
            // setSliders([1450, 1575])
            this.data.setSliders = [`${startLabel}`, `${endLabel}`];
            this.draw();
            this.d3.selectAll('rect.bars').attr('fill', (d) => this.colourBars(d));
            const range = this.getSelectedRange();
            if (emit)
                this.emit('rangeselected', range);
            this.textCollision(this.sliders);
            return range;
        };
    }
    ngAfterContentChecked() {
        /*
             Waits for the dom to be loaded, then fires the draw function
             that renders the chart.
        */
        if (this.data) {
            if (this._loaded)
                return;
            this._loaded = true;
            setTimeout(() => {
                import('d3').then((module) => {
                    this.d3 = module;
                    this.draw();
                    this.emitLoaded(true);
                    if (this.data && this.data.setDraw) {
                        this.data.setDraw(this.draw);
                    }
                    if (this.data.setApi) {
                        // expose the component api
                        this.data.setApi({
                            setSliders: this.setSliders,
                            setBars: this.setBars,
                        });
                    }
                    // eslint-disable-next-line dot-notation
                    // window['setSliders'] = this.setSliders;
                });
            });
        }
    }
    /** Get x-axis position from label */
    labelToX() {
        return this.d3
            .scaleBand()
            .domain(this.data.items.map((d) => d.label))
            .range([0, this.data.width])
            .paddingInner(0.17)
            .paddingOuter(1);
    }
    /**
     * Get an event with viewBox coordinates and
     * parse them in absolute coordinates
     */
    getEventCoords(event) {
        const m = event.target.getScreenCTM();
        const point = this.svg.node().createSVGPoint();
        point.x = event.clientX;
        point.y = event.clientY;
        return point.matrixTransform(m.inverse());
    }
    /** Emits an event when the component has loaded */
    emitLoaded(payload) {
        if (!this.emit)
            return;
        this.emit('loaded', payload);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: HistogramRangeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: HistogramRangeComponent, selector: "n7-histogram-range", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-histogram-range\">\n  <svg #histogramRange [id]=\"data.containerId\"></svg>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: HistogramRangeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-histogram-range', template: "<div *ngIf=\"data\" class=\"n7-histogram-range\">\n  <svg #histogramRange [id]=\"data.containerId\"></svg>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// IMAGE-VIEWER.ts
//---------------------------
/**
 * ImageViewerComponent <n7-image-viewer>
 *
 */
class ImageViewerComponent {
    constructor() {
        this._loaded = false;
    }
    ngAfterContentChecked() {
        if (!this.data || this._loaded)
            return;
        this._loaded = true;
        setTimeout(() => {
            const prefixUrl = !this.data.prefixUrl
                ? '//openseadragon.github.io/openseadragon/images/'
                : this.data.prefixUrl;
            import('openseadragon').then((module) => {
                const { default: openseadragon } = module;
                const viewer = openseadragon({
                    id: this.data.viewerId,
                    prefixUrl,
                    tileSources: this.data.images,
                    zoomInButton: 'n7-image-viewer-zoom-in',
                    zoomOutButton: 'n7-image-viewer-zoom-out',
                    homeButton: 'n7-image-viewer-home',
                    fullPageButton: 'n7-image-viewer-full-screen',
                    nextButton: 'n7-image-viewer-nav-next',
                    previousButton: 'n7-image-viewer-nav-prev',
                    ...this.data.libOptions,
                });
                this.data._setViewer(viewer);
            });
        });
    }
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('thumbclick', payload);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ImageViewerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: ImageViewerComponent, selector: "n7-image-viewer", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-image-viewer {{data.classes || ''}}\">\n  <!-- OSD viewer -->\n  <div id=\"{{data.viewerId}}\" class=\"n7-image-viewer__viewer\"></div>\n\n  <!-- Zoom controls -->\n  <div class=\"n7-image-viewer__controls\">\n    <ul class=\"n7-image-viewer__controls-list\">\n      <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-zoom-in\">\n        <span class=\"n7-icon-search-plus\"></span>\n      </li>\n      <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-zoom-out\">\n        <span class=\"n7-icon-search-minus\"></span>\n      </li>\n      <!--\n            <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-full-screen\">\n                <span class=\"n7-icon-expand-arrows\"></span>\n            </li>\n            -->\n    </ul>\n  </div>\n\n  <!-- Navigation -->\n  <div\n    *ngIf=\"!data.hideNavigation\"\n    class=\"n7-image-viewer__prev\"\n    id=\"n7-image-viewer-nav-prev\"\n  >\n    <span class=\"n7-icon-angle-left\"></span>\n  </div>\n\n  <div\n    *ngIf=\"!data.hideNavigation\"\n    class=\"n7-image-viewer__next\"\n    id=\"n7-image-viewer-nav-next\"\n  >\n    <span class=\"n7-icon-angle-right\"></span>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ImageViewerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-image-viewer', template: "<div *ngIf=\"data\" class=\"n7-image-viewer {{data.classes || ''}}\">\n  <!-- OSD viewer -->\n  <div id=\"{{data.viewerId}}\" class=\"n7-image-viewer__viewer\"></div>\n\n  <!-- Zoom controls -->\n  <div class=\"n7-image-viewer__controls\">\n    <ul class=\"n7-image-viewer__controls-list\">\n      <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-zoom-in\">\n        <span class=\"n7-icon-search-plus\"></span>\n      </li>\n      <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-zoom-out\">\n        <span class=\"n7-icon-search-minus\"></span>\n      </li>\n      <!--\n            <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-full-screen\">\n                <span class=\"n7-icon-expand-arrows\"></span>\n            </li>\n            -->\n    </ul>\n  </div>\n\n  <!-- Navigation -->\n  <div\n    *ngIf=\"!data.hideNavigation\"\n    class=\"n7-image-viewer__prev\"\n    id=\"n7-image-viewer-nav-prev\"\n  >\n    <span class=\"n7-icon-angle-left\"></span>\n  </div>\n\n  <div\n    *ngIf=\"!data.hideNavigation\"\n    class=\"n7-image-viewer__next\"\n    id=\"n7-image-viewer-nav-next\"\n  >\n    <span class=\"n7-icon-angle-right\"></span>\n  </div>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// IMAGE-VIEWER-TOOLS.ts
//---------------------------
/**
 * ImageViewerToolsComponent <n7-image-viewer-tools>
 */
class ImageViewerToolsComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload); // click
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ImageViewerToolsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: ImageViewerToolsComponent, selector: "n7-image-viewer-tools", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-image-viewer-tools {{data.classes || ''}}\">\n  <div class=\"n7-image-viewer-tools__bar\">\n    <div class=\"n7-image-viewer-tools__controls\">\n      <div class=\"n7-image-viewer-tools__control-wrapper\">\n        <ng-container *ngIf=\"data.controls.description && data.description\">\n          <n7-anchor-wrapper\n            class=\"n7-image-viewer-tools__control-btn\"\n            [ngClass]=\"{\n                        'is-active': data.controls.description.isActive\n                    }\"\n            [data]=\"data.controls.description.anchor\"\n            (clicked)=\"onClick($event)\"\n          >\n            <!-- $event -->\n            <span\n              class=\"n7-image-viewer-tools__control-btn-icon {{data.controls.description.icon}}\"\n            ></span>\n          </n7-anchor-wrapper>\n        </ng-container>\n      </div>\n\n      <div class=\"n7-image-viewer-tools__control-wrapper\">\n        <ng-container *ngIf=\"data.controls.thumbs\">\n          <n7-anchor-wrapper\n            class=\"n7-image-viewer-tools__control-btn\"\n            [ngClass]=\"{\n                        'is-active': data.controls.thumbs.isActive\n                    }\"\n            [data]=\"data.controls.thumbs.anchor\"\n            (clicked)=\"onClick($event)\"\n          >\n            <!-- $event -->\n            <span\n              class=\"n7-image-viewer-tools__control-btn-icon {{data.controls.thumbs.icon}}\"\n            ></span>\n          </n7-anchor-wrapper>\n        </ng-container>\n      </div>\n    </div>\n\n    <div class=\"n7-image-viewer-tools__thumbs-description\">\n      <div\n        class=\"n7-image-viewer-tools__thumbs\"\n        *ngIf=\"data.isVisible.thumbnails && data.images\"\n      >\n        <div class=\"n7-image-viewer-tools__thumbs-strip\">\n          <div\n            *ngFor=\"let img of data.images; let imgIndex = index\"\n            class=\"n7-image-viewer-tools__thumb\"\n            [class.active]=\"imgIndex == data.initial\"\n          >\n            <img\n              class=\"n7-image-viewer-tools__thumb-image\"\n              src=\"{{img.thumb}}\"\n              (click)=\"onClick(img.payload)\"\n            />\n          </div>\n        </div>\n\n        <ng-container *ngIf=\"data.navigation\">\n          <div\n            class=\"{{ data.navigation.prev.classes || '' }}\"\n            (click)=\"onClick(data.navigation.prev.payload)\"\n          >\n            <!-- (click)=\"\" -->\n            <span class=\"n7-icon-angle-left\"></span>\n          </div>\n          <div\n            class=\"{{ data.navigation.next.classes || '' }}\"\n            (click)=\"onClick(data.navigation.next.payload)\"\n          >\n            <span class=\"n7-icon-angle-right\"></span>\n          </div>\n        </ng-container>\n      </div>\n\n      <div\n        class=\"n7-image-viewer-tools__description\"\n        *ngIf=\"data.isVisible.description\"\n      >\n        <div\n          class=\"n7-image-viewer-tools__description-close\"\n          (click)=\"onClick(data.controls.closedescription.anchor.payload)\"\n        >\n          <!-- data.controls.closedescription.anchor.payload -->\n          <span class=\"{{data.controls.closedescription.icon}}\"></span>\n        </div>\n        <div class=\"n7-image-viewer-tools__description-text-wrapper\">\n          <div\n            class=\"n7-image-viewer-tools__description-text\"\n            [innerHTML]=\"data.description\"\n          ></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: AnchorWrapperComponent, selector: "n7-anchor-wrapper", inputs: ["data", "classes"], outputs: ["clicked"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ImageViewerToolsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-image-viewer-tools', template: "<div *ngIf=\"data\" class=\"n7-image-viewer-tools {{data.classes || ''}}\">\n  <div class=\"n7-image-viewer-tools__bar\">\n    <div class=\"n7-image-viewer-tools__controls\">\n      <div class=\"n7-image-viewer-tools__control-wrapper\">\n        <ng-container *ngIf=\"data.controls.description && data.description\">\n          <n7-anchor-wrapper\n            class=\"n7-image-viewer-tools__control-btn\"\n            [ngClass]=\"{\n                        'is-active': data.controls.description.isActive\n                    }\"\n            [data]=\"data.controls.description.anchor\"\n            (clicked)=\"onClick($event)\"\n          >\n            <!-- $event -->\n            <span\n              class=\"n7-image-viewer-tools__control-btn-icon {{data.controls.description.icon}}\"\n            ></span>\n          </n7-anchor-wrapper>\n        </ng-container>\n      </div>\n\n      <div class=\"n7-image-viewer-tools__control-wrapper\">\n        <ng-container *ngIf=\"data.controls.thumbs\">\n          <n7-anchor-wrapper\n            class=\"n7-image-viewer-tools__control-btn\"\n            [ngClass]=\"{\n                        'is-active': data.controls.thumbs.isActive\n                    }\"\n            [data]=\"data.controls.thumbs.anchor\"\n            (clicked)=\"onClick($event)\"\n          >\n            <!-- $event -->\n            <span\n              class=\"n7-image-viewer-tools__control-btn-icon {{data.controls.thumbs.icon}}\"\n            ></span>\n          </n7-anchor-wrapper>\n        </ng-container>\n      </div>\n    </div>\n\n    <div class=\"n7-image-viewer-tools__thumbs-description\">\n      <div\n        class=\"n7-image-viewer-tools__thumbs\"\n        *ngIf=\"data.isVisible.thumbnails && data.images\"\n      >\n        <div class=\"n7-image-viewer-tools__thumbs-strip\">\n          <div\n            *ngFor=\"let img of data.images; let imgIndex = index\"\n            class=\"n7-image-viewer-tools__thumb\"\n            [class.active]=\"imgIndex == data.initial\"\n          >\n            <img\n              class=\"n7-image-viewer-tools__thumb-image\"\n              src=\"{{img.thumb}}\"\n              (click)=\"onClick(img.payload)\"\n            />\n          </div>\n        </div>\n\n        <ng-container *ngIf=\"data.navigation\">\n          <div\n            class=\"{{ data.navigation.prev.classes || '' }}\"\n            (click)=\"onClick(data.navigation.prev.payload)\"\n          >\n            <!-- (click)=\"\" -->\n            <span class=\"n7-icon-angle-left\"></span>\n          </div>\n          <div\n            class=\"{{ data.navigation.next.classes || '' }}\"\n            (click)=\"onClick(data.navigation.next.payload)\"\n          >\n            <span class=\"n7-icon-angle-right\"></span>\n          </div>\n        </ng-container>\n      </div>\n\n      <div\n        class=\"n7-image-viewer-tools__description\"\n        *ngIf=\"data.isVisible.description\"\n      >\n        <div\n          class=\"n7-image-viewer-tools__description-close\"\n          (click)=\"onClick(data.controls.closedescription.anchor.payload)\"\n        >\n          <!-- data.controls.closedescription.anchor.payload -->\n          <span class=\"{{data.controls.closedescription.icon}}\"></span>\n        </div>\n        <div class=\"n7-image-viewer-tools__description-text-wrapper\">\n          <div\n            class=\"n7-image-viewer-tools__description-text\"\n            [innerHTML]=\"data.description\"\n          ></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// INNER-TITLE.ts
//---------------------------
class InnerTitleComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    onChange(payload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload: payload, value });
    }
    onInputChange(payload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload: payload, value });
    }
    onInputEnter(payload, value) {
        if (!this.emit)
            return;
        this.emit('search', { inputPayload: payload, value });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: InnerTitleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: InnerTitleComponent, selector: "n7-inner-title", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-inner-title\" [ngClass]=\"data.classes\">\n  <div class=\"n7-inner-title__left-wrapper\">\n    <ng-container\n      *ngTemplateOutlet=\"icon; context:{$implicit: data.icon}\"\n    ></ng-container>\n    <div\n      *ngIf=\"data.image\"\n      class=\"n7-inner-title__image-left\"\n      [ngStyle]=\"{'background-image': 'url(' + data.image + ')'}\"\n    ></div>\n    <div class=\"n7-inner-title__wrapper-texts\">\n      <div\n        *ngIf=\"data.title.main\"\n        [innerHTML]=\"data.title.main.text\"\n        class=\"n7-inner-title__title {{data.title.main.classes || ''}}\"\n      ></div>\n      <div\n        *ngIf=\"data.title.secondary\"\n        [innerHTML]=\"data.title.secondary.text\"\n        class=\"n7-inner-title__subtitle {{data.title.secondary.classes || ''}}\"\n      ></div>\n    </div>\n  </div>\n\n  <div class=\"n7-inner-title__tools\" *ngIf=\"data.tools || data.actions\">\n    <!-- Toolbar label -->\n    <div *ngIf=\"data.tools\" class=\"n7-inner-title__tools-label\">\n      {{data.tools}}\n    </div>\n    <!-- Actions -->\n    <ng-container *ngIf=\"data.actions\">\n      <ng-container\n        *ngTemplateOutlet=\"actions; \n                        context:{$implicit: data.actions}\"\n      >\n      </ng-container>\n    </ng-container>\n  </div>\n</div>\n\n<!-- Template actions -->\n<ng-template #actions let-action>\n  <ng-container *ngIf=\"action.select\">\n    <ng-container\n      *ngTemplateOutlet=\"select;\n                      context:{$implicit: action.select}\"\n    >\n    </ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"action.search\">\n    <ng-container\n      *ngTemplateOutlet=\"search; \n                      context:{$implicit: action.search}\"\n    >\n    </ng-container>\n  </ng-container>\n\n  <ng-container *ngIf=\"action.buttons\">\n    <ng-container\n      *ngTemplateOutlet=\"buttons;\n                      context:{$implicit: action.buttons}\"\n    >\n    </ng-container>\n  </ng-container>\n</ng-template>\n\n<!-- Template sorting -->\n<ng-template #select let-select>\n  <div class=\"n7-inner-title__sorting\">\n    <span *ngIf=\"select.label\" class=\"n7-inner-title__sorting-label\">\n      {{select.label}}\n    </span>\n    <select\n      (change)=\"onChange(select.payload, $event.target.value)\"\n      class=\"n7-inner-title__sorting-select\"\n    >\n      <option\n        *ngFor=\"let opt of select.options\"\n        value=\"{{opt.value}}\"\n        class=\"n7-inner-title__sorting-option\"\n        [selected]=\"opt.selected\"\n        [disabled]=\"opt.disabled\"\n      >\n        {{opt.text}}\n      </option>\n    </select>\n  </div>\n</ng-template>\n\n<!-- Template search -->\n<ng-template #search let-search>\n  <div class=\"n7-inner-title__search\">\n    <input\n      type=\"text\"\n      class=\"n7-inner-title__search-bar\"\n      placeholder=\"{{search.placeholder}}\"\n      (input)=\"onInputChange(search.payload, $event.target.value)\"\n      (keyup.enter)=\"onInputEnter(search.payload, $event.target.value)\"\n    />\n    <button\n      *ngIf=\"search.button\"\n      (click)=\"onClick(search.button.payload)\"\n      class=\"n7-btn n7-inner-title__search-button\"\n    >\n      {{search.button.text}}\n    </button>\n  </div>\n</ng-template>\n\n<!-- Template buttons -->\n<ng-template #buttons let-buttons>\n  <div class=\"n7-inner-title__buttons-wrapper\">\n    <div\n      *ngFor=\"let btn of buttons\"\n      class=\"n7-inner-title__single-button-wrapper\"\n    >\n      <n7-anchor-wrapper\n        [classes]=\"'n7-btn n7-inner-title__buttons-action ' + btn.classes || ''\"\n        [data]=\"btn.anchor\"\n        (clicked)=\"onClick($event)\"\n      >\n        <span *ngIf=\"btn.icon\" class=\"n7-btn__icon {{btn.icon || ''}}\"></span>\n        {{ btn.text }}\n      </n7-anchor-wrapper>\n    </div>\n  </div>\n</ng-template>\n\n<!-- Template Icon -->\n<ng-template #icon let-icon>\n  <!-- Complex icon -->\n  <span\n    *ngIf=\"icon && icon.id\"\n    class=\"n7-inner-title__icon-left {{icon.id || ''}}\"\n    [ngStyle]=\"icon.style || {}\"\n  ></span>\n  <!-- Simple icon -->\n  <span\n    *ngIf=\"icon && !icon.id\"\n    class=\"n7-inner-title__icon-left {{icon || ''}}\"\n  ></span>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: AnchorWrapperComponent, selector: "n7-anchor-wrapper", inputs: ["data", "classes"], outputs: ["clicked"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: InnerTitleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-inner-title', template: "<div *ngIf=\"data\" class=\"n7-inner-title\" [ngClass]=\"data.classes\">\n  <div class=\"n7-inner-title__left-wrapper\">\n    <ng-container\n      *ngTemplateOutlet=\"icon; context:{$implicit: data.icon}\"\n    ></ng-container>\n    <div\n      *ngIf=\"data.image\"\n      class=\"n7-inner-title__image-left\"\n      [ngStyle]=\"{'background-image': 'url(' + data.image + ')'}\"\n    ></div>\n    <div class=\"n7-inner-title__wrapper-texts\">\n      <div\n        *ngIf=\"data.title.main\"\n        [innerHTML]=\"data.title.main.text\"\n        class=\"n7-inner-title__title {{data.title.main.classes || ''}}\"\n      ></div>\n      <div\n        *ngIf=\"data.title.secondary\"\n        [innerHTML]=\"data.title.secondary.text\"\n        class=\"n7-inner-title__subtitle {{data.title.secondary.classes || ''}}\"\n      ></div>\n    </div>\n  </div>\n\n  <div class=\"n7-inner-title__tools\" *ngIf=\"data.tools || data.actions\">\n    <!-- Toolbar label -->\n    <div *ngIf=\"data.tools\" class=\"n7-inner-title__tools-label\">\n      {{data.tools}}\n    </div>\n    <!-- Actions -->\n    <ng-container *ngIf=\"data.actions\">\n      <ng-container\n        *ngTemplateOutlet=\"actions; \n                        context:{$implicit: data.actions}\"\n      >\n      </ng-container>\n    </ng-container>\n  </div>\n</div>\n\n<!-- Template actions -->\n<ng-template #actions let-action>\n  <ng-container *ngIf=\"action.select\">\n    <ng-container\n      *ngTemplateOutlet=\"select;\n                      context:{$implicit: action.select}\"\n    >\n    </ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"action.search\">\n    <ng-container\n      *ngTemplateOutlet=\"search; \n                      context:{$implicit: action.search}\"\n    >\n    </ng-container>\n  </ng-container>\n\n  <ng-container *ngIf=\"action.buttons\">\n    <ng-container\n      *ngTemplateOutlet=\"buttons;\n                      context:{$implicit: action.buttons}\"\n    >\n    </ng-container>\n  </ng-container>\n</ng-template>\n\n<!-- Template sorting -->\n<ng-template #select let-select>\n  <div class=\"n7-inner-title__sorting\">\n    <span *ngIf=\"select.label\" class=\"n7-inner-title__sorting-label\">\n      {{select.label}}\n    </span>\n    <select\n      (change)=\"onChange(select.payload, $event.target.value)\"\n      class=\"n7-inner-title__sorting-select\"\n    >\n      <option\n        *ngFor=\"let opt of select.options\"\n        value=\"{{opt.value}}\"\n        class=\"n7-inner-title__sorting-option\"\n        [selected]=\"opt.selected\"\n        [disabled]=\"opt.disabled\"\n      >\n        {{opt.text}}\n      </option>\n    </select>\n  </div>\n</ng-template>\n\n<!-- Template search -->\n<ng-template #search let-search>\n  <div class=\"n7-inner-title__search\">\n    <input\n      type=\"text\"\n      class=\"n7-inner-title__search-bar\"\n      placeholder=\"{{search.placeholder}}\"\n      (input)=\"onInputChange(search.payload, $event.target.value)\"\n      (keyup.enter)=\"onInputEnter(search.payload, $event.target.value)\"\n    />\n    <button\n      *ngIf=\"search.button\"\n      (click)=\"onClick(search.button.payload)\"\n      class=\"n7-btn n7-inner-title__search-button\"\n    >\n      {{search.button.text}}\n    </button>\n  </div>\n</ng-template>\n\n<!-- Template buttons -->\n<ng-template #buttons let-buttons>\n  <div class=\"n7-inner-title__buttons-wrapper\">\n    <div\n      *ngFor=\"let btn of buttons\"\n      class=\"n7-inner-title__single-button-wrapper\"\n    >\n      <n7-anchor-wrapper\n        [classes]=\"'n7-btn n7-inner-title__buttons-action ' + btn.classes || ''\"\n        [data]=\"btn.anchor\"\n        (clicked)=\"onClick($event)\"\n      >\n        <span *ngIf=\"btn.icon\" class=\"n7-btn__icon {{btn.icon || ''}}\"></span>\n        {{ btn.text }}\n      </n7-anchor-wrapper>\n    </div>\n  </div>\n</ng-template>\n\n<!-- Template Icon -->\n<ng-template #icon let-icon>\n  <!-- Complex icon -->\n  <span\n    *ngIf=\"icon && icon.id\"\n    class=\"n7-inner-title__icon-left {{icon.id || ''}}\"\n    [ngStyle]=\"icon.style || {}\"\n  ></span>\n  <!-- Simple icon -->\n  <span\n    *ngIf=\"icon && !icon.id\"\n    class=\"n7-inner-title__icon-left {{icon || ''}}\"\n  ></span>\n</ng-template>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// INPUT-CHECKBOX.ts
//---------------------------
class InputCheckboxComponent {
    onChange(inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload, value });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: InputCheckboxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: InputCheckboxComponent, selector: "n7-input-checkbox", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-input-checkbox {{ data.classes || '' }}\">\n  <fieldset class=\"n7-input-checkbox__fieldset\">\n    <legend\n      class=\"n7-input-checkbox__legend\"\n      *ngIf=\"data.legend\"\n      [innerHTML]=\"data.legend\"\n    ></legend>\n    <ng-container *ngFor=\"let input of data.checkboxes\">\n      <div class=\"n7-input-checkbox__input-wrapper\">\n        <input\n          type=\"checkbox\"\n          id=\"{{ input.id }}\"\n          [attr.name]=\"input.name\"\n          class=\"n7-input-checkbox__input\"\n          [ngClass]=\"input.classes\"\n          [checked]=\"input.checked\"\n          [disabled]=\"input.disabled\"\n          (change)=\"onChange(input.payload, $event.target.checked)\"\n        />\n        <label\n          *ngIf=\"input.label\"\n          class=\"n7-input-checkbox__label\"\n          for=\"{{ input.id }}\"\n          >{{ input.label }}</label\n        >\n      </div>\n    </ng-container>\n  </fieldset>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: InputCheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-input-checkbox', template: "<div *ngIf=\"data\" class=\"n7-input-checkbox {{ data.classes || '' }}\">\n  <fieldset class=\"n7-input-checkbox__fieldset\">\n    <legend\n      class=\"n7-input-checkbox__legend\"\n      *ngIf=\"data.legend\"\n      [innerHTML]=\"data.legend\"\n    ></legend>\n    <ng-container *ngFor=\"let input of data.checkboxes\">\n      <div class=\"n7-input-checkbox__input-wrapper\">\n        <input\n          type=\"checkbox\"\n          id=\"{{ input.id }}\"\n          [attr.name]=\"input.name\"\n          class=\"n7-input-checkbox__input\"\n          [ngClass]=\"input.classes\"\n          [checked]=\"input.checked\"\n          [disabled]=\"input.disabled\"\n          (change)=\"onChange(input.payload, $event.target.checked)\"\n        />\n        <label\n          *ngIf=\"input.label\"\n          class=\"n7-input-checkbox__label\"\n          for=\"{{ input.id }}\"\n          >{{ input.label }}</label\n        >\n      </div>\n    </ng-container>\n  </fieldset>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// INPUT-LINK.ts
//---------------------------
class InputLinkComponent {
    onChange(payload) {
        if (!this.emit)
            return;
        this.emit('change', payload);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: InputLinkComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: InputLinkComponent, selector: "n7-input-link", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-input-link\">\n  <ng-container *ngFor=\"let input of data.links\">\n    <div\n      class=\"n7-input-link__link {{ input.classes || '' }}\"\n      (click)=\"onChange(input.payload)\"\n    >\n      <span\n        *ngIf=\"input.icon\"\n        class=\"n7-input-link__icon {{ input.icon }}\"\n      ></span>\n      <span class=\"n7-input-link__text\">{{ input.text }}</span>\n      <span\n        *ngIf=\"input.counter || input.counter === 0\"\n        class=\"n7-input-link__counter\"\n        >{{ input.counter }}</span\n      >\n    </div>\n  </ng-container>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: InputLinkComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-input-link', template: "<div *ngIf=\"data\" class=\"n7-input-link\">\n  <ng-container *ngFor=\"let input of data.links\">\n    <div\n      class=\"n7-input-link__link {{ input.classes || '' }}\"\n      (click)=\"onChange(input.payload)\"\n    >\n      <span\n        *ngIf=\"input.icon\"\n        class=\"n7-input-link__icon {{ input.icon }}\"\n      ></span>\n      <span class=\"n7-input-link__text\">{{ input.text }}</span>\n      <span\n        *ngIf=\"input.counter || input.counter === 0\"\n        class=\"n7-input-link__counter\"\n        >{{ input.counter }}</span\n      >\n    </div>\n  </ng-container>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

class InputTextareaComponent {
    onChange(inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload, value });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: InputTextareaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: InputTextareaComponent, selector: "n7-input-textarea", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data as input\" class=\"n7-input-textarea\">\n  <label\n    *ngIf=\"input.label\"\n    class=\"n7-input-textarea__label\"\n    for=\"{{ input.id }}\"\n    [innerHTML]=\"input.label\"\n  >\n  </label>\n  <div\n    class=\"n7-input-textarea__wrapper\"\n    [ngClass]=\"{\n            'has-icon': !!input.icon\n        }\"\n  >\n    <textarea\n      id=\"{{ input.id }}\"\n      class=\"n7-input-textarea__text\"\n      [ngClass]=\"input.classes\"\n      [attr.name]=\"input.name\"\n      [value]=\"input.value || null\"\n      [disabled]=\"input.disabled\"\n      [required]=\"input.required\"\n      [attr.placeholder]=\"input.placeholder\"\n      [attr.autocomplete]=\"input.autocomplete\"\n      [attr.autofocus]=\"input.autofocus\"\n      [attr.maxlength]=\"input.maxlength\"\n      [attr.minlength]=\"input.minlength\"\n      [attr.rows]=\"input.rows\"\n      [attr.cols]=\"input.cols\"\n      (input)=\"onChange(input.inputPayload, $event.target.value)\"\n      (keyup.enter)=\"onChange(input.enterPayload, $event.target.value)\"\n    >\n    </textarea>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: InputTextareaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-input-textarea', template: "<div *ngIf=\"data as input\" class=\"n7-input-textarea\">\n  <label\n    *ngIf=\"input.label\"\n    class=\"n7-input-textarea__label\"\n    for=\"{{ input.id }}\"\n    [innerHTML]=\"input.label\"\n  >\n  </label>\n  <div\n    class=\"n7-input-textarea__wrapper\"\n    [ngClass]=\"{\n            'has-icon': !!input.icon\n        }\"\n  >\n    <textarea\n      id=\"{{ input.id }}\"\n      class=\"n7-input-textarea__text\"\n      [ngClass]=\"input.classes\"\n      [attr.name]=\"input.name\"\n      [value]=\"input.value || null\"\n      [disabled]=\"input.disabled\"\n      [required]=\"input.required\"\n      [attr.placeholder]=\"input.placeholder\"\n      [attr.autocomplete]=\"input.autocomplete\"\n      [attr.autofocus]=\"input.autofocus\"\n      [attr.maxlength]=\"input.maxlength\"\n      [attr.minlength]=\"input.minlength\"\n      [attr.rows]=\"input.rows\"\n      [attr.cols]=\"input.cols\"\n      (input)=\"onChange(input.inputPayload, $event.target.value)\"\n      (keyup.enter)=\"onChange(input.enterPayload, $event.target.value)\"\n    >\n    </textarea>\n  </div>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// INPUT-TEXT.ts
//---------------------------
class InputTextComponent {
    onChange(inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload, value });
    }
    onBlur() {
        if (!this.emit)
            return;
        this.emit('blur');
    }
    onFocus() {
        if (!this.emit)
            return;
        this.emit('focus');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: InputTextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: InputTextComponent, selector: "n7-input-text", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data as input\" class=\"n7-input-text\">\n  <label\n    *ngIf=\"input.label\"\n    class=\"n7-input-text__label\"\n    for=\"{{ input.id }}\"\n    [innerHTML]=\"input.label\"\n  >\n  </label>\n  <div\n    class=\"n7-input-text__wrapper\"\n    [ngClass]=\"{\n            'has-icon': !!input.icon\n        }\"\n  >\n    <input\n      id=\"{{ input.id }}\"\n      class=\"n7-input-text__text\"\n      [ngClass]=\"input.classes\"\n      [type]=\"input.type ? input.type : 'text'\"\n      [attr.name]=\"input.name\"\n      [value]=\"input.value || null\"\n      [attr.placeholder]=\"input.placeholder\"\n      [attr.autocomplete]=\"input.autocomplete\"\n      [disabled]=\"input.disabled\"\n      [required]=\"input.required\"\n      [attr.max]=\"input.max\"\n      [attr.min]=\"input.min\"\n      [attr.maxlength]=\"input.maxlength\"\n      [attr.minlength]=\"input.minlength\"\n      (focus)=\"onFocus()\"\n      (blur)=\"onBlur()\"\n      (input)=\"onChange(input.inputPayload, $event.target.value)\"\n      (keyup.enter)=\"onChange(input.enterPayload, $event.target.value)\"\n    />\n    <span\n      *ngIf=\"input.icon\"\n      class=\"n7-input-text__icon {{input.icon || ''}}\"\n      (click)=\"onChange(input.iconPayload)\"\n    >\n    </span>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: InputTextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-input-text', template: "<div *ngIf=\"data as input\" class=\"n7-input-text\">\n  <label\n    *ngIf=\"input.label\"\n    class=\"n7-input-text__label\"\n    for=\"{{ input.id }}\"\n    [innerHTML]=\"input.label\"\n  >\n  </label>\n  <div\n    class=\"n7-input-text__wrapper\"\n    [ngClass]=\"{\n            'has-icon': !!input.icon\n        }\"\n  >\n    <input\n      id=\"{{ input.id }}\"\n      class=\"n7-input-text__text\"\n      [ngClass]=\"input.classes\"\n      [type]=\"input.type ? input.type : 'text'\"\n      [attr.name]=\"input.name\"\n      [value]=\"input.value || null\"\n      [attr.placeholder]=\"input.placeholder\"\n      [attr.autocomplete]=\"input.autocomplete\"\n      [disabled]=\"input.disabled\"\n      [required]=\"input.required\"\n      [attr.max]=\"input.max\"\n      [attr.min]=\"input.min\"\n      [attr.maxlength]=\"input.maxlength\"\n      [attr.minlength]=\"input.minlength\"\n      (focus)=\"onFocus()\"\n      (blur)=\"onBlur()\"\n      (input)=\"onChange(input.inputPayload, $event.target.value)\"\n      (keyup.enter)=\"onChange(input.enterPayload, $event.target.value)\"\n    />\n    <span\n      *ngIf=\"input.icon\"\n      class=\"n7-input-text__icon {{input.icon || ''}}\"\n      (click)=\"onChange(input.iconPayload)\"\n    >\n    </span>\n  </div>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// ITEM-PREVIEW.ts
//---------------------------
class ItemPreviewComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ItemPreviewComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: ItemPreviewComponent, selector: "n7-item-preview", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div\n  *ngIf=\"data\"\n  class=\"n7-item-preview {{data.classes || ''}}\"\n  [ngClass]=\"{\n         'has-image' : !!data.image,\n         'has-color' : !!data.color,\n         'has-link'  : !!data.anchor\n    }\"\n>\n  <n7-anchor-wrapper\n    [data]=\"data.anchor\"\n    (clicked)=\"onClick($event)\"\n    [classes]=\"'n7-item-preview__inner'\"\n  >\n    <!-- Image, color -->\n    <div\n      class=\"n7-item-preview__image n7-item-preview__color\"\n      *ngIf=\"data.image || data.color\"\n      [style.background-image]=\"data.image ? 'url(' + data.image + ')' : undefined\"\n      [style.background-color]=\"data.color\"\n    ></div>\n    <div class=\"n7-item-preview__content\">\n      <!-- Title and text -->\n      <div class=\"n7-item-preview__title-text\">\n        <h1 class=\"n7-item-preview__title\" [innerHTML]=\"data.title\"></h1>\n        <p\n          class=\"n7-item-preview__text\"\n          *ngIf=\"data.text\"\n          [innerHTML]=\"data.text\"\n        ></p>\n      </div>\n      <!-- Metadata -->\n      <div class=\"n7-item-preview__metadata\" *ngIf=\"data.metadata\">\n        <div\n          class=\"n7-item-preview__metadata-group {{ meta.classes || '' }}\"\n          *ngFor=\"let meta of data.metadata\"\n        >\n          <h3\n            class=\"n7-item-preview__metadata-group-title\"\n            *ngIf=\"meta.title\"\n            [innerHTML]=\"meta.title\"\n          ></h3>\n          <div\n            class=\"n7-item-preview__metadata-item {{ item.classes || '' }}\"\n            *ngFor=\"let item of meta.items\"\n          >\n            <span\n              class=\"n7-item-preview__metadata-item-icon {{item.icon}}\"\n              *ngIf=\"item.icon\"\n            ></span>\n            <span\n              class=\"n7-item-preview__metadata-item-label\"\n              *ngIf=\"item.label\"\n              [innerHTML]=\"item.label\"\n            ></span>\n            <span\n              class=\"n7-item-preview__metadata-item-value\"\n              *ngIf=\"item.value\"\n              [innerHTML]=\"item.value\"\n            ></span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </n7-anchor-wrapper>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: AnchorWrapperComponent, selector: "n7-anchor-wrapper", inputs: ["data", "classes"], outputs: ["clicked"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ItemPreviewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-item-preview', template: "<div\n  *ngIf=\"data\"\n  class=\"n7-item-preview {{data.classes || ''}}\"\n  [ngClass]=\"{\n         'has-image' : !!data.image,\n         'has-color' : !!data.color,\n         'has-link'  : !!data.anchor\n    }\"\n>\n  <n7-anchor-wrapper\n    [data]=\"data.anchor\"\n    (clicked)=\"onClick($event)\"\n    [classes]=\"'n7-item-preview__inner'\"\n  >\n    <!-- Image, color -->\n    <div\n      class=\"n7-item-preview__image n7-item-preview__color\"\n      *ngIf=\"data.image || data.color\"\n      [style.background-image]=\"data.image ? 'url(' + data.image + ')' : undefined\"\n      [style.background-color]=\"data.color\"\n    ></div>\n    <div class=\"n7-item-preview__content\">\n      <!-- Title and text -->\n      <div class=\"n7-item-preview__title-text\">\n        <h1 class=\"n7-item-preview__title\" [innerHTML]=\"data.title\"></h1>\n        <p\n          class=\"n7-item-preview__text\"\n          *ngIf=\"data.text\"\n          [innerHTML]=\"data.text\"\n        ></p>\n      </div>\n      <!-- Metadata -->\n      <div class=\"n7-item-preview__metadata\" *ngIf=\"data.metadata\">\n        <div\n          class=\"n7-item-preview__metadata-group {{ meta.classes || '' }}\"\n          *ngFor=\"let meta of data.metadata\"\n        >\n          <h3\n            class=\"n7-item-preview__metadata-group-title\"\n            *ngIf=\"meta.title\"\n            [innerHTML]=\"meta.title\"\n          ></h3>\n          <div\n            class=\"n7-item-preview__metadata-item {{ item.classes || '' }}\"\n            *ngFor=\"let item of meta.items\"\n          >\n            <span\n              class=\"n7-item-preview__metadata-item-icon {{item.icon}}\"\n              *ngIf=\"item.icon\"\n            ></span>\n            <span\n              class=\"n7-item-preview__metadata-item-label\"\n              *ngIf=\"item.label\"\n              [innerHTML]=\"item.label\"\n            ></span>\n            <span\n              class=\"n7-item-preview__metadata-item-value\"\n              *ngIf=\"item.value\"\n              [innerHTML]=\"item.value\"\n            ></span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </n7-anchor-wrapper>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// MAP.ts
//---------------------------
class MapComponent {
    constructor() {
        /** Knows if the component is loaded */
        this._loaded = false;
        /** Dynamically load required node modules */
        this.loadModules = async () => ({
            leaflet: await import('leaflet'),
            cluster: await import('leaflet.markercluster'),
        });
    }
    // private onMapClick = (e) => (e.latlng)
    ngAfterContentChecked() {
        if (!this.data || this._loaded)
            return;
        this._loaded = true;
        setTimeout(() => {
            this.loadModules().then((modules) => {
                /** Module definitions */
                const { default: lflet } = modules.leaflet;
                const { default: clstr } = modules.cluster;
                // Merge cluster and leaflet into leaflet
                const leaflet = { ...lflet, ...clstr };
                // Create a map
                const { center, zoom } = this.data.initialView;
                const map = leaflet
                    .map(this.data.containerId, this.data.libOptions)
                    .setView(center, zoom);
                this.data.tileLayers.forEach((layer) => {
                    leaflet.tileLayer(layer.url, layer.options).addTo(map);
                });
                /** Handle events */
                // map.on('click', this.onMapClick);
                /** Handle markers */
                if (this.data.markers) {
                    const markers = leaflet.markerClusterGroup(this.data.clusterLibOptions);
                    this.data.markers.forEach((mrk) => {
                        leaflet.marker(mrk.coords).addTo(markers).bindPopup(mrk.template);
                    });
                    map.addLayer(markers);
                    if (this.data._setMarkerLayer)
                        this.data._setMarkerLayer(markers);
                }
                // Assign the map instance
                if (this.data._setInstance)
                    this.data._setInstance(map);
            });
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: MapComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: MapComponent, selector: "n7-map", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-map\">\n  <div class=\"n7-map__container\" [id]=\"data.containerId\"></div>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: MapComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-map', template: "<div *ngIf=\"data\" class=\"n7-map\">\n  <div class=\"n7-map__container\" [id]=\"data.containerId\"></div>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// METADATA-VIEWER.ts
//---------------------------
class MetadataViewerComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: MetadataViewerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: MetadataViewerComponent, selector: "n7-metadata-viewer", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-metadata-viewer\">\n  <!-- Metadata groups wrapper -->\n  <div\n    class=\"n7-metadata-viewer__wrapper {{ data.classes  || ''}}\"\n    *ngFor=\"let grp of data.group\"\n  >\n    <!-- For each data group, render it -->\n    <ng-container\n      *ngTemplateOutlet=\"group; context:{$implicit: grp}\"\n    ></ng-container>\n  </div>\n</div>\n\n<!-- Template for Metadata.group -->\n<ng-template #group let-grp>\n  <div\n    *ngIf=\"grp.title || grp.items\"\n    class=\"n7-metadata-viewer__group {{ grp.classes || '' }}\"\n  >\n    <div class=\"n7-metadata-viewer__group-title\" *ngIf=\"grp.title\">\n      {{grp.title}}\n    </div>\n    <div class=\"n7-metadata-viewer__group-content\" *ngIf=\"grp.items\">\n      <div class=\"n7-metadata-viewer__item\" *ngFor=\"let i of grp.items\">\n        <span *ngIf=\"i.label\" class=\"n7-metadata-viewer__item-label\"\n          >{{ i.label }}</span\n        >\n        <span\n          *ngIf=\"i.value\"\n          class=\"n7-metadata-viewer__item-value\"\n          [innerHTML]=\"i.value\"\n        ></span>\n      </div>\n    </div>\n  </div>\n  <!-- Render all child groups -->\n  <div *ngIf=\"grp.group\">\n    <div\n      class=\"n7-metadata-viewer__group-wrapper\"\n      *ngFor=\"let grp of grp.group\"\n    >\n      <ng-container\n        *ngTemplateOutlet=\"group; context:{$implicit: grp}\"\n      ></ng-container>\n    </div>\n  </div>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: MetadataViewerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-metadata-viewer', template: "<div *ngIf=\"data\" class=\"n7-metadata-viewer\">\n  <!-- Metadata groups wrapper -->\n  <div\n    class=\"n7-metadata-viewer__wrapper {{ data.classes  || ''}}\"\n    *ngFor=\"let grp of data.group\"\n  >\n    <!-- For each data group, render it -->\n    <ng-container\n      *ngTemplateOutlet=\"group; context:{$implicit: grp}\"\n    ></ng-container>\n  </div>\n</div>\n\n<!-- Template for Metadata.group -->\n<ng-template #group let-grp>\n  <div\n    *ngIf=\"grp.title || grp.items\"\n    class=\"n7-metadata-viewer__group {{ grp.classes || '' }}\"\n  >\n    <div class=\"n7-metadata-viewer__group-title\" *ngIf=\"grp.title\">\n      {{grp.title}}\n    </div>\n    <div class=\"n7-metadata-viewer__group-content\" *ngIf=\"grp.items\">\n      <div class=\"n7-metadata-viewer__item\" *ngFor=\"let i of grp.items\">\n        <span *ngIf=\"i.label\" class=\"n7-metadata-viewer__item-label\"\n          >{{ i.label }}</span\n        >\n        <span\n          *ngIf=\"i.value\"\n          class=\"n7-metadata-viewer__item-value\"\n          [innerHTML]=\"i.value\"\n        ></span>\n      </div>\n    </div>\n  </div>\n  <!-- Render all child groups -->\n  <div *ngIf=\"grp.group\">\n    <div\n      class=\"n7-metadata-viewer__group-wrapper\"\n      *ngFor=\"let grp of grp.group\"\n    >\n      <ng-container\n        *ngTemplateOutlet=\"group; context:{$implicit: grp}\"\n      ></ng-container>\n    </div>\n  </div>\n</ng-template>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

class NavComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    onMouseEnter(payload) {
        if (!this.emit)
            return;
        this.emit('mouseenter', payload);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: NavComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: NavComponent, selector: "n7-nav", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<nav class=\"n7-nav {{data.classes || ''}}\" *ngIf=\"data\">\n  <ul class=\"n7-nav__list\">\n    <n7-anchor-wrapper\n      *ngFor=\"let item of data.items\"\n      [data]=\"item.anchor\"\n      [classes]=\"'n7-nav__link'\"\n      (clicked)=\"onClick($event)\"\n    >\n      <li class=\"n7-nav__item {{ item.classes || '' }}\">\n        <!-- image -->\n        <img class=\"n7-nav__image\" *ngIf=\"item.image\" src=\"{{ item.image }}\" />\n        <!-- primary icon -->\n        <span\n          class=\"n7-nav__icon {{ item.icon.id }}\"\n          *ngIf=\"item.icon\"\n          (mouseenter)=\"onMouseEnter(item.icon.payload)\"\n        ></span>\n        <!-- element label -->\n        <span class=\"n7-nav__label\">{{ item.text }}</span>\n        <!-- secondary icon -->\n        <span\n          class=\"n7-nav__icon-secondary {{ item.iconSecondary.id }}\"\n          *ngIf=\"item.iconSecondary\"\n          (mouseenter)=\"onMouseEnter(item.iconSecondary.payload)\"\n        ></span>\n      </li>\n    </n7-anchor-wrapper>\n  </ul>\n</nav>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: AnchorWrapperComponent, selector: "n7-anchor-wrapper", inputs: ["data", "classes"], outputs: ["clicked"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: NavComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-nav', template: "<nav class=\"n7-nav {{data.classes || ''}}\" *ngIf=\"data\">\n  <ul class=\"n7-nav__list\">\n    <n7-anchor-wrapper\n      *ngFor=\"let item of data.items\"\n      [data]=\"item.anchor\"\n      [classes]=\"'n7-nav__link'\"\n      (clicked)=\"onClick($event)\"\n    >\n      <li class=\"n7-nav__item {{ item.classes || '' }}\">\n        <!-- image -->\n        <img class=\"n7-nav__image\" *ngIf=\"item.image\" src=\"{{ item.image }}\" />\n        <!-- primary icon -->\n        <span\n          class=\"n7-nav__icon {{ item.icon.id }}\"\n          *ngIf=\"item.icon\"\n          (mouseenter)=\"onMouseEnter(item.icon.payload)\"\n        ></span>\n        <!-- element label -->\n        <span class=\"n7-nav__label\">{{ item.text }}</span>\n        <!-- secondary icon -->\n        <span\n          class=\"n7-nav__icon-secondary {{ item.iconSecondary.id }}\"\n          *ngIf=\"item.iconSecondary\"\n          (mouseenter)=\"onMouseEnter(item.iconSecondary.payload)\"\n        ></span>\n      </li>\n    </n7-anchor-wrapper>\n  </ul>\n</nav>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// PAGINATION.ts
//---------------------------
class PaginationComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    onChange(payload, value) {
        if (!this.emit)
            return;
        // needs to also emit selected value
        this.emit('change', { inputPayload: payload, value });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: PaginationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: PaginationComponent, selector: "n7-pagination", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<nav\n  class=\"n7-pagination {{data.classes || ''}}\"\n  *ngIf=\"data\"\n  [ngClass]=\"{ 'has-results-select' : data.select }\"\n>\n  <ul class=\"n7-pagination__items\">\n    <li\n      class=\"n7-pagination__first {{data.first.classes || ''}}\"\n      *ngIf=\"data.first\"\n    >\n      <ng-container\n        *ngTemplateOutlet=\"button; context: {\n                type: 'first',\n                data: data.first,\n                iconClass: 'n7-icon-angle-double-left'\n            }\"\n      ></ng-container>\n    </li>\n    <li\n      class=\"n7-pagination__prev {{data.prev.classes || ''}}\"\n      *ngIf=\"data.prev\"\n    >\n      <ng-container\n        *ngTemplateOutlet=\"button; context: {\n                type: 'prev',\n                data: data.prev,\n                iconClass: 'n7-icon-angle-left'\n            }\"\n      ></ng-container>\n    </li>\n\n    <li\n      class=\"n7-pagination__page {{page.classes || ''}}\"\n      *ngFor=\"let page of data.links\"\n    >\n      <ng-container\n        *ngTemplateOutlet=\"button; context: {\n                type: 'page',\n                data: page,\n                clicked: onClick\n            }\"\n      ></ng-container>\n    </li>\n\n    <li\n      class=\"n7-pagination__next {{data.next.classes || ''}}\"\n      *ngIf=\"data.next\"\n    >\n      <ng-container\n        *ngTemplateOutlet=\"button; context: {\n                type: 'next',\n                data: data.next,\n                iconClass: 'n7-icon-angle-right'\n            }\"\n      ></ng-container>\n    </li>\n    <li\n      class=\"n7-pagination__last {{data.last.classes || ''}}\"\n      *ngIf=\"data.last\"\n    >\n      <ng-container\n        *ngTemplateOutlet=\"button; context: {\n                type: 'last',\n                data: data.last,\n                iconClass: 'n7-icon-angle-double-right'\n            }\"\n      ></ng-container>\n    </li>\n  </ul>\n\n  <div class=\"n7-pagination__setting\" *ngIf=\"data.select\">\n    <span class=\"n7-pagination__setting-label\" *ngIf=\"data.select.label\">\n      {{data.select.label}}\n    </span>\n    <select\n      *ngIf=\"data.select.options\"\n      name=\"n7-pagination__select-size\"\n      class=\"n7-pagination__setting-select\"\n      (change)=\"onChange(data.select.payload, $event.target.value)\"\n      [disabled]=\"data.select.disabled\"\n    >\n      <option\n        *ngFor=\"let opt of data.select.options\"\n        [disabled]=\"opt.disabled\"\n        [selected]=\"opt.selected\"\n      >\n        {{opt.text}}\n      </option>\n    </select>\n  </div>\n</nav>\n\n<ng-template\n  #button\n  let-type=\"type\"\n  let-data=\"data\"\n  let-clicked=\"clicked\"\n  let-iconClass=\"iconClass\"\n>\n  <n7-anchor-wrapper\n    [classes]=\"'n7-pagination__' + type + '-link' + (data.text ? ' has-text' : '')\"\n    [data]=\"data.anchor\"\n    (clicked)=\"onClick($event)\"\n  >\n    <span class=\"n7-pagination__{{ type }}-label\" *ngIf=\"data.text\">\n      {{ data.text }}\n    </span>\n    <span\n      *ngIf=\"iconClass\"\n      class=\"n7-pagination__{{ type }}-icon {{ iconClass }}\"\n    ></span>\n  </n7-anchor-wrapper>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: AnchorWrapperComponent, selector: "n7-anchor-wrapper", inputs: ["data", "classes"], outputs: ["clicked"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: PaginationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-pagination', template: "<nav\n  class=\"n7-pagination {{data.classes || ''}}\"\n  *ngIf=\"data\"\n  [ngClass]=\"{ 'has-results-select' : data.select }\"\n>\n  <ul class=\"n7-pagination__items\">\n    <li\n      class=\"n7-pagination__first {{data.first.classes || ''}}\"\n      *ngIf=\"data.first\"\n    >\n      <ng-container\n        *ngTemplateOutlet=\"button; context: {\n                type: 'first',\n                data: data.first,\n                iconClass: 'n7-icon-angle-double-left'\n            }\"\n      ></ng-container>\n    </li>\n    <li\n      class=\"n7-pagination__prev {{data.prev.classes || ''}}\"\n      *ngIf=\"data.prev\"\n    >\n      <ng-container\n        *ngTemplateOutlet=\"button; context: {\n                type: 'prev',\n                data: data.prev,\n                iconClass: 'n7-icon-angle-left'\n            }\"\n      ></ng-container>\n    </li>\n\n    <li\n      class=\"n7-pagination__page {{page.classes || ''}}\"\n      *ngFor=\"let page of data.links\"\n    >\n      <ng-container\n        *ngTemplateOutlet=\"button; context: {\n                type: 'page',\n                data: page,\n                clicked: onClick\n            }\"\n      ></ng-container>\n    </li>\n\n    <li\n      class=\"n7-pagination__next {{data.next.classes || ''}}\"\n      *ngIf=\"data.next\"\n    >\n      <ng-container\n        *ngTemplateOutlet=\"button; context: {\n                type: 'next',\n                data: data.next,\n                iconClass: 'n7-icon-angle-right'\n            }\"\n      ></ng-container>\n    </li>\n    <li\n      class=\"n7-pagination__last {{data.last.classes || ''}}\"\n      *ngIf=\"data.last\"\n    >\n      <ng-container\n        *ngTemplateOutlet=\"button; context: {\n                type: 'last',\n                data: data.last,\n                iconClass: 'n7-icon-angle-double-right'\n            }\"\n      ></ng-container>\n    </li>\n  </ul>\n\n  <div class=\"n7-pagination__setting\" *ngIf=\"data.select\">\n    <span class=\"n7-pagination__setting-label\" *ngIf=\"data.select.label\">\n      {{data.select.label}}\n    </span>\n    <select\n      *ngIf=\"data.select.options\"\n      name=\"n7-pagination__select-size\"\n      class=\"n7-pagination__setting-select\"\n      (change)=\"onChange(data.select.payload, $event.target.value)\"\n      [disabled]=\"data.select.disabled\"\n    >\n      <option\n        *ngFor=\"let opt of data.select.options\"\n        [disabled]=\"opt.disabled\"\n        [selected]=\"opt.selected\"\n      >\n        {{opt.text}}\n      </option>\n    </select>\n  </div>\n</nav>\n\n<ng-template\n  #button\n  let-type=\"type\"\n  let-data=\"data\"\n  let-clicked=\"clicked\"\n  let-iconClass=\"iconClass\"\n>\n  <n7-anchor-wrapper\n    [classes]=\"'n7-pagination__' + type + '-link' + (data.text ? ' has-text' : '')\"\n    [data]=\"data.anchor\"\n    (clicked)=\"onClick($event)\"\n  >\n    <span class=\"n7-pagination__{{ type }}-label\" *ngIf=\"data.text\">\n      {{ data.text }}\n    </span>\n    <span\n      *ngIf=\"iconClass\"\n      class=\"n7-pagination__{{ type }}-icon {{ iconClass }}\"\n    ></span>\n  </n7-anchor-wrapper>\n</ng-template>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// PROGRESS-LINE.ts
//---------------------------
class ProgressLineComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ProgressLineComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: ProgressLineComponent, selector: "n7-progress-line", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-progress-line\">\n  <div class=\"n7-progress-line__text-wrapper\">\n    <span class=\"n7-progress-line__label\" *ngIf=\"data.label\">\n      {{ data.label }}\n    </span>\n    <span class=\"n7-progress-line__value\" *ngIf=\"data.value || data.value===0\">\n      {{ data.value }}%\n    </span>\n  </div>\n  <div class=\"n7-progress-line__wrapper\">\n    <div class=\"n7-progress-line__bar\" [ngStyle]=\"{'width.%':data.value}\">\n      {{data.value}}%\n    </div>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ProgressLineComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-progress-line', template: "<div *ngIf=\"data\" class=\"n7-progress-line\">\n  <div class=\"n7-progress-line__text-wrapper\">\n    <span class=\"n7-progress-line__label\" *ngIf=\"data.label\">\n      {{ data.label }}\n    </span>\n    <span class=\"n7-progress-line__value\" *ngIf=\"data.value || data.value===0\">\n      {{ data.value }}%\n    </span>\n  </div>\n  <div class=\"n7-progress-line__wrapper\">\n    <div class=\"n7-progress-line__bar\" [ngStyle]=\"{'width.%':data.value}\">\n      {{data.value}}%\n    </div>\n  </div>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// SIDEBAR-HEADER.ts
//---------------------------
class SidebarHeaderComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: SidebarHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: SidebarHeaderComponent, selector: "n7-sidebar-header", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-sidebar-header {{ data.classes || ''}}\">\n  <span\n    class=\"n7-sidebar-header__icon-left {{ data.iconLeft }}\"\n    *ngIf=\"data.iconLeft\"\n  >\n  </span>\n  <span\n    class=\"n7-sidebar-header__text-wrapper\"\n    *ngIf=\"data.text || data.additionalText\"\n  >\n    <span class=\"n7-sidebar-header__text\"> {{data.text}} </span>\n    <span class=\"n7-sidebar-header__secondary-text\" *ngIf=\"data.additionalText\">\n      {{data.additionalText}}\n    </span>\n  </span>\n  <span\n    *ngIf=\"data.iconRight\"\n    class=\"n7-sidebar-header__icon-right {{ data.iconRight }}\"\n    (click)=\"onClick(data.payload)\"\n  ></span>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: SidebarHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-sidebar-header', template: "<div *ngIf=\"data\" class=\"n7-sidebar-header {{ data.classes || ''}}\">\n  <span\n    class=\"n7-sidebar-header__icon-left {{ data.iconLeft }}\"\n    *ngIf=\"data.iconLeft\"\n  >\n  </span>\n  <span\n    class=\"n7-sidebar-header__text-wrapper\"\n    *ngIf=\"data.text || data.additionalText\"\n  >\n    <span class=\"n7-sidebar-header__text\"> {{data.text}} </span>\n    <span class=\"n7-sidebar-header__secondary-text\" *ngIf=\"data.additionalText\">\n      {{data.additionalText}}\n    </span>\n  </span>\n  <span\n    *ngIf=\"data.iconRight\"\n    class=\"n7-sidebar-header__icon-right {{ data.iconRight }}\"\n    (click)=\"onClick(data.payload)\"\n  ></span>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// SIGNUP.ts
//---------------------------
class SignupComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    onChange(inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload, value });
    }
    onInputEnter(inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('enter', { inputPayload, value });
    }
    onFocus(payload) {
        if (!this.emit)
            return;
        this.emit('focus', payload);
    }
    onFocusOut(payload) {
        if (!this.emit)
            return;
        this.emit('focusout', payload);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: SignupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: SignupComponent, selector: "n7-signup", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<!-- Signup: login -->\n<section *ngIf=\"data && data.login\" class=\"n7-signup n7-signup--login\">\n  <form class=\"n7-signup__form\" novalidate>\n    <ng-container\n      *ngTemplateOutlet=\"field; context: { $implicit: data.login.email }\"\n    ></ng-container>\n    <ng-container\n      *ngTemplateOutlet=\"\n        passwordField;\n        context: { $implicit: data.login.password }\n      \"\n    ></ng-container>\n    <div\n      *ngIf=\"data.login.forgotPassword\"\n      class=\"n7-signup__form-item n7-signup__form-item-forgot-password\"\n    >\n      <a\n        (click)=\"onClick(data.login.forgotPassword.payload)\"\n        title=\"{{ data.login.forgotPassword.title }}\"\n        [attr.aria-label]=\"data.login.forgotPassword.title\"\n        >{{ data.login.forgotPassword.label }}</a\n      >\n    </div>\n    <ng-container\n      *ngTemplateOutlet=\"submit; context: { $implicit: data.login.submit }\"\n    ></ng-container>\n  </form>\n  <ng-container\n    *ngTemplateOutlet=\"footer; context: { $implicit: data.login.footer }\"\n  ></ng-container>\n</section>\n\n<!-- Signup: signup -->\n<section *ngIf=\"data && data.signup\" class=\"n7-signup n7-signup--signup\">\n  <form class=\"n7-signup__form\" novalidate>\n    <ng-container\n      *ngTemplateOutlet=\"field; context: { $implicit: data.signup.name }\"\n    ></ng-container>\n    <ng-container\n      *ngTemplateOutlet=\"field; context: { $implicit: data.signup.email }\"\n    ></ng-container>\n    <ng-container\n      *ngTemplateOutlet=\"\n        passwordField;\n        context: { $implicit: data.signup.password }\n      \"\n    ></ng-container>\n    <ng-container\n      *ngTemplateOutlet=\"\n        passwordField;\n        context: { $implicit: data.signup.rePassword }\n      \"\n    ></ng-container>\n    <ng-container\n      *ngTemplateOutlet=\"submit; context: { $implicit: data.signup.submit }\"\n    ></ng-container>\n  </form>\n  <ng-container\n    *ngTemplateOutlet=\"footer; context: { $implicit: data.signup.footer }\"\n  ></ng-container>\n</section>\n\n<!-- Signup: forgot password -->\n<section\n  *ngIf=\"data && data.forgotPassword\"\n  class=\"n7-signup n7-signup--forgot-password\"\n>\n  <p class=\"n7-signup__text\">{{ data.forgotPassword.description }}</p>\n  <form class=\"n7-signup__form\" novalidate>\n    <ng-container\n      *ngTemplateOutlet=\"\n        field;\n        context: { $implicit: data.forgotPassword.email }\n      \"\n    ></ng-container>\n\n    <ng-container\n      *ngTemplateOutlet=\"\n        submit;\n        context: { $implicit: data.forgotPassword.submit }\n      \"\n    ></ng-container>\n\n    <!-- hidden submit button to prevent submit on enter -->\n    <button\n      type=\"submit\"\n      disabled\n      style=\"display: none\"\n      aria-hidden=\"true\"\n    ></button>\n  </form>\n  <ng-container\n    *ngTemplateOutlet=\"\n      footer;\n      context: { $implicit: data.forgotPassword.footer }\n    \"\n  ></ng-container>\n</section>\n\n<!-- Template: field -->\n<ng-template #field let-field>\n  <div\n    [ngClass]=\"{\n      'has-error': field.error,\n      'has-hint': field.hint\n    }\"\n    class=\"n7-signup__form-item {{ field.classes || '' }}\"\n  >\n    <label class=\"n7-signup__form-item-label\" for=\"{{ field.id }}\"\n      >{{ field.label }}</label\n    >\n    <div *ngIf=\"field.hint\" class=\"n7-signup__form-item-hint\">\n      {{ field.hint }}\n    </div>\n    <div class=\"n7-signup__input-wrapper\">\n      <input\n        (focus)=\"onFocus(field.payload)\"\n        (focusout)=\"onFocusOut(field.payload)\"\n        (keyup.enter)=\"onInputEnter(field.payload, $event.target.value)\"\n        (input)=\"onChange(field.payload, $event.target.value)\"\n        class=\"n7-signup__form-item-input\"\n        type=\"{{ field.inputType }}\"\n        id=\"{{ field.id }}\"\n      />\n    </div>\n    <div *ngIf=\"field.error\" class=\"n7-signup__form-error\">\n      {{ field.error }}\n    </div>\n  </div>\n</ng-template>\n\n<!-- Template: password-field -->\n<ng-template #passwordField let-field>\n  <div\n    [ngClass]=\"{\n      'has-error': field.error,\n      'has-hint': field.hint\n    }\"\n    class=\"n7-signup__form-item {{ field.classes || '' }}\"\n  >\n    <label class=\"n7-signup__form-item-label\" for=\"{{ field.id }}\"\n      >{{ field.label }}</label\n    >\n    <div *ngIf=\"field.hint\" class=\"n7-signup__form-item-hint\">\n      {{ field.hint }}\n    </div>\n    <div class=\"n7-signup__input-wrapper\">\n      <input\n        (focus)=\"onFocus(field.payload)\"\n        (focusout)=\"onFocusOut(field.payload)\"\n        (keyup.enter)=\"onInputEnter(field.payload, $event.target.value)\"\n        (input)=\"onChange(field.payload, $event.target.value)\"\n        class=\"n7-signup__form-item-input\"\n        type=\"{{ field.inputType }}\"\n        id=\"{{ field.id }}\"\n      />\n      <button\n        *ngIf=\"field.show\"\n        type=\"button\"\n        (click)=\"onClick(field.show.payload)\"\n        [attr.aria-label]=\"field.show.label\"\n        class=\"n7-signup__form-item-show-password\"\n      >\n        <i\n          [attr.aria-label]=\"field.show.label\"\n          class=\"{{ field.show.icon }}\"\n        ></i>\n      </button>\n    </div>\n    <div *ngIf=\"field.error\" class=\"n7-signup__form-error\">\n      {{ field.error }}\n    </div>\n  </div>\n</ng-template>\n\n<!-- Template: footer -->\n<ng-template #footer let-footer>\n  <footer *ngIf=\"footer\" class=\"n7-signup__footer {{ footer.classes || '' }}\">\n    <div class=\"n7-signup__footer-text\">{{ footer.label }}</div>\n    <a\n      *ngIf=\"footer.action\"\n      (click)=\"onClick(footer.action.payload)\"\n      title=\"{{ footer.action.label }}\"\n      class=\"n7-btn\"\n      >{{ footer.action.label }}</a\n    >\n  </footer>\n</ng-template>\n\n<!-- Template: submit button -->\n<ng-template #submit let-submit>\n  <div\n    [ngClass]=\"{\n      'has-error': submit.error\n    }\"\n    class=\"n7-signup__form-item n7-signup__form-item-action {{\n      submit.classes || ''\n    }}\"\n  >\n    <button\n      type=\"button\"\n      (click)=\"onClick(submit.payload)\"\n      [attr.aria-label]=\"submit.label\"\n      class=\"n7-btn n7-btn-cta\"\n    >\n      {{ submit.label }}\n    </button>\n    <div *ngIf=\"submit.error\" class=\"n7-signup__form-error\">\n      {{ submit.error }}\n    </div>\n  </div>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: SignupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-signup', template: "<!-- Signup: login -->\n<section *ngIf=\"data && data.login\" class=\"n7-signup n7-signup--login\">\n  <form class=\"n7-signup__form\" novalidate>\n    <ng-container\n      *ngTemplateOutlet=\"field; context: { $implicit: data.login.email }\"\n    ></ng-container>\n    <ng-container\n      *ngTemplateOutlet=\"\n        passwordField;\n        context: { $implicit: data.login.password }\n      \"\n    ></ng-container>\n    <div\n      *ngIf=\"data.login.forgotPassword\"\n      class=\"n7-signup__form-item n7-signup__form-item-forgot-password\"\n    >\n      <a\n        (click)=\"onClick(data.login.forgotPassword.payload)\"\n        title=\"{{ data.login.forgotPassword.title }}\"\n        [attr.aria-label]=\"data.login.forgotPassword.title\"\n        >{{ data.login.forgotPassword.label }}</a\n      >\n    </div>\n    <ng-container\n      *ngTemplateOutlet=\"submit; context: { $implicit: data.login.submit }\"\n    ></ng-container>\n  </form>\n  <ng-container\n    *ngTemplateOutlet=\"footer; context: { $implicit: data.login.footer }\"\n  ></ng-container>\n</section>\n\n<!-- Signup: signup -->\n<section *ngIf=\"data && data.signup\" class=\"n7-signup n7-signup--signup\">\n  <form class=\"n7-signup__form\" novalidate>\n    <ng-container\n      *ngTemplateOutlet=\"field; context: { $implicit: data.signup.name }\"\n    ></ng-container>\n    <ng-container\n      *ngTemplateOutlet=\"field; context: { $implicit: data.signup.email }\"\n    ></ng-container>\n    <ng-container\n      *ngTemplateOutlet=\"\n        passwordField;\n        context: { $implicit: data.signup.password }\n      \"\n    ></ng-container>\n    <ng-container\n      *ngTemplateOutlet=\"\n        passwordField;\n        context: { $implicit: data.signup.rePassword }\n      \"\n    ></ng-container>\n    <ng-container\n      *ngTemplateOutlet=\"submit; context: { $implicit: data.signup.submit }\"\n    ></ng-container>\n  </form>\n  <ng-container\n    *ngTemplateOutlet=\"footer; context: { $implicit: data.signup.footer }\"\n  ></ng-container>\n</section>\n\n<!-- Signup: forgot password -->\n<section\n  *ngIf=\"data && data.forgotPassword\"\n  class=\"n7-signup n7-signup--forgot-password\"\n>\n  <p class=\"n7-signup__text\">{{ data.forgotPassword.description }}</p>\n  <form class=\"n7-signup__form\" novalidate>\n    <ng-container\n      *ngTemplateOutlet=\"\n        field;\n        context: { $implicit: data.forgotPassword.email }\n      \"\n    ></ng-container>\n\n    <ng-container\n      *ngTemplateOutlet=\"\n        submit;\n        context: { $implicit: data.forgotPassword.submit }\n      \"\n    ></ng-container>\n\n    <!-- hidden submit button to prevent submit on enter -->\n    <button\n      type=\"submit\"\n      disabled\n      style=\"display: none\"\n      aria-hidden=\"true\"\n    ></button>\n  </form>\n  <ng-container\n    *ngTemplateOutlet=\"\n      footer;\n      context: { $implicit: data.forgotPassword.footer }\n    \"\n  ></ng-container>\n</section>\n\n<!-- Template: field -->\n<ng-template #field let-field>\n  <div\n    [ngClass]=\"{\n      'has-error': field.error,\n      'has-hint': field.hint\n    }\"\n    class=\"n7-signup__form-item {{ field.classes || '' }}\"\n  >\n    <label class=\"n7-signup__form-item-label\" for=\"{{ field.id }}\"\n      >{{ field.label }}</label\n    >\n    <div *ngIf=\"field.hint\" class=\"n7-signup__form-item-hint\">\n      {{ field.hint }}\n    </div>\n    <div class=\"n7-signup__input-wrapper\">\n      <input\n        (focus)=\"onFocus(field.payload)\"\n        (focusout)=\"onFocusOut(field.payload)\"\n        (keyup.enter)=\"onInputEnter(field.payload, $event.target.value)\"\n        (input)=\"onChange(field.payload, $event.target.value)\"\n        class=\"n7-signup__form-item-input\"\n        type=\"{{ field.inputType }}\"\n        id=\"{{ field.id }}\"\n      />\n    </div>\n    <div *ngIf=\"field.error\" class=\"n7-signup__form-error\">\n      {{ field.error }}\n    </div>\n  </div>\n</ng-template>\n\n<!-- Template: password-field -->\n<ng-template #passwordField let-field>\n  <div\n    [ngClass]=\"{\n      'has-error': field.error,\n      'has-hint': field.hint\n    }\"\n    class=\"n7-signup__form-item {{ field.classes || '' }}\"\n  >\n    <label class=\"n7-signup__form-item-label\" for=\"{{ field.id }}\"\n      >{{ field.label }}</label\n    >\n    <div *ngIf=\"field.hint\" class=\"n7-signup__form-item-hint\">\n      {{ field.hint }}\n    </div>\n    <div class=\"n7-signup__input-wrapper\">\n      <input\n        (focus)=\"onFocus(field.payload)\"\n        (focusout)=\"onFocusOut(field.payload)\"\n        (keyup.enter)=\"onInputEnter(field.payload, $event.target.value)\"\n        (input)=\"onChange(field.payload, $event.target.value)\"\n        class=\"n7-signup__form-item-input\"\n        type=\"{{ field.inputType }}\"\n        id=\"{{ field.id }}\"\n      />\n      <button\n        *ngIf=\"field.show\"\n        type=\"button\"\n        (click)=\"onClick(field.show.payload)\"\n        [attr.aria-label]=\"field.show.label\"\n        class=\"n7-signup__form-item-show-password\"\n      >\n        <i\n          [attr.aria-label]=\"field.show.label\"\n          class=\"{{ field.show.icon }}\"\n        ></i>\n      </button>\n    </div>\n    <div *ngIf=\"field.error\" class=\"n7-signup__form-error\">\n      {{ field.error }}\n    </div>\n  </div>\n</ng-template>\n\n<!-- Template: footer -->\n<ng-template #footer let-footer>\n  <footer *ngIf=\"footer\" class=\"n7-signup__footer {{ footer.classes || '' }}\">\n    <div class=\"n7-signup__footer-text\">{{ footer.label }}</div>\n    <a\n      *ngIf=\"footer.action\"\n      (click)=\"onClick(footer.action.payload)\"\n      title=\"{{ footer.action.label }}\"\n      class=\"n7-btn\"\n      >{{ footer.action.label }}</a\n    >\n  </footer>\n</ng-template>\n\n<!-- Template: submit button -->\n<ng-template #submit let-submit>\n  <div\n    [ngClass]=\"{\n      'has-error': submit.error\n    }\"\n    class=\"n7-signup__form-item n7-signup__form-item-action {{\n      submit.classes || ''\n    }}\"\n  >\n    <button\n      type=\"button\"\n      (click)=\"onClick(submit.payload)\"\n      [attr.aria-label]=\"submit.label\"\n      class=\"n7-btn n7-btn-cta\"\n    >\n      {{ submit.label }}\n    </button>\n    <div *ngIf=\"submit.error\" class=\"n7-signup__form-error\">\n      {{ submit.error }}\n    </div>\n  </div>\n</ng-template>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// SIMPLE-AUTOCOMPLETE.ts
//---------------------------
class SimpleAutocompleteComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: SimpleAutocompleteComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: SimpleAutocompleteComponent, selector: "n7-simple-autocomplete", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-simple-autocomplete\">\n  <ul class=\"n7-simple-autocomplete__list {{data.classes || ''}}\">\n    <li\n      *ngFor=\"let suggestion of data.suggestion\"\n      class=\"n7-simple-autocomplete__item\"\n    >\n      <n7-anchor-wrapper\n        [classes]=\"'n7-simple-autocomplete__link'\"\n        [data]=\"suggestion.anchor\"\n        (clicked)=\"onClick($event)\"\n      >\n        <span\n          class=\"n7-simple-autocomplete__label\"\n          [innerHTML]=\"suggestion.text\"\n        ></span>\n      </n7-anchor-wrapper>\n    </li>\n  </ul>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: AnchorWrapperComponent, selector: "n7-anchor-wrapper", inputs: ["data", "classes"], outputs: ["clicked"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: SimpleAutocompleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-simple-autocomplete', template: "<div *ngIf=\"data\" class=\"n7-simple-autocomplete\">\n  <ul class=\"n7-simple-autocomplete__list {{data.classes || ''}}\">\n    <li\n      *ngFor=\"let suggestion of data.suggestion\"\n      class=\"n7-simple-autocomplete__item\"\n    >\n      <n7-anchor-wrapper\n        [classes]=\"'n7-simple-autocomplete__link'\"\n        [data]=\"suggestion.anchor\"\n        (clicked)=\"onClick($event)\"\n      >\n        <span\n          class=\"n7-simple-autocomplete__label\"\n          [innerHTML]=\"suggestion.text\"\n        ></span>\n      </n7-anchor-wrapper>\n    </li>\n  </ul>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// TABLE.ts
//---------------------------
class TableComponent {
    onCellClick(cellPayload) {
        if (!this.emit)
            return;
        this.emit('cellclick', cellPayload);
    }
    onCellDblClick(cellPayload) {
        if (!this.emit)
            return;
        this.emit('celldblclick', cellPayload);
    }
    onInputTextChange(cellPayload, cellValue) {
        if (!this.emit)
            return;
        const textChangePayload = { tcPayload: cellPayload, val: cellValue };
        this.emit('inputtextchange', textChangePayload);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: TableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: TableComponent, selector: "n7-table", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<section class=\"n7-table {{data.classes || ''}}\" *ngIf=\"data\">\n  <table class=\"n7-table__table\">\n    <thead class=\"n7-table__table-header\" *ngIf=\"data.head\">\n      <tr\n        class=\"n7-table__table-header-row {{row.classes || ''}}\"\n        *ngFor=\"let row of data.head\"\n      >\n        <th\n          class=\"n7-table__table-header-cell {{cell.classes || ''}}\"\n          *ngFor=\"let cell of row.cells\"\n          (click)=\"onCellClick(cell.payload)\"\n          [innerHTML]=\"cell.content\"\n        ></th>\n      </tr>\n    </thead>\n\n    <tbody class=\"n7-table__table-body\" *ngIf=\"data.body\">\n      <tr\n        class=\"n7-table__table-body-row {{row.classes || ''}}\"\n        *ngFor=\"let row of data.body\"\n      >\n        <td\n          class=\"n7-table__table-body-cell {{cell.classes || ''}}\"\n          *ngFor=\"let cell of row.cells; let i = index\"\n          (click)=\"onCellClick(cell.payload)\"\n          (dblclick)=\"onCellDblClick(cell.payload)\"\n          [attr.aria-label]=\"data.head[0].cells[i].content\"\n        >\n          <span\n            class=\"n7-table__table-body-cell-innerhtml\"\n            *ngIf=\"!cell.type || cell.type=='html'\"\n            [innerHTML]=\"cell.content\"\n          ></span>\n          <input\n            class=\"n7-table__table-body-cell-inputtext\"\n            *ngIf=\"cell.type=='input:text'\"\n            type=\"text\"\n            placeholder=\"{{cell.content}}\"\n            id=\"{{cell._meta.inputId}}\"\n            (keyup.enter)=\"onInputTextChange(cell.payload, $event.target.value)\"\n          />\n        </td>\n      </tr>\n    </tbody>\n\n    <tfoot class=\"n7-table__table-footer\" *ngIf=\"data.foot\">\n      <tr\n        class=\"n7-table__table-footer-row {{row.classes || ''}}\"\n        *ngFor=\"let row of data.foot\"\n      >\n        <td\n          class=\"n7-table__table-footer-cell {{cell.classes || ''}}\"\n          *ngFor=\"let cell of row.cells\"\n          (click)=\"onCellClick(cell.payload)\"\n          [innerHTML]=\"cell.content\"\n        ></td>\n      </tr>\n    </tfoot>\n  </table>\n</section>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: TableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-table', template: "<section class=\"n7-table {{data.classes || ''}}\" *ngIf=\"data\">\n  <table class=\"n7-table__table\">\n    <thead class=\"n7-table__table-header\" *ngIf=\"data.head\">\n      <tr\n        class=\"n7-table__table-header-row {{row.classes || ''}}\"\n        *ngFor=\"let row of data.head\"\n      >\n        <th\n          class=\"n7-table__table-header-cell {{cell.classes || ''}}\"\n          *ngFor=\"let cell of row.cells\"\n          (click)=\"onCellClick(cell.payload)\"\n          [innerHTML]=\"cell.content\"\n        ></th>\n      </tr>\n    </thead>\n\n    <tbody class=\"n7-table__table-body\" *ngIf=\"data.body\">\n      <tr\n        class=\"n7-table__table-body-row {{row.classes || ''}}\"\n        *ngFor=\"let row of data.body\"\n      >\n        <td\n          class=\"n7-table__table-body-cell {{cell.classes || ''}}\"\n          *ngFor=\"let cell of row.cells; let i = index\"\n          (click)=\"onCellClick(cell.payload)\"\n          (dblclick)=\"onCellDblClick(cell.payload)\"\n          [attr.aria-label]=\"data.head[0].cells[i].content\"\n        >\n          <span\n            class=\"n7-table__table-body-cell-innerhtml\"\n            *ngIf=\"!cell.type || cell.type=='html'\"\n            [innerHTML]=\"cell.content\"\n          ></span>\n          <input\n            class=\"n7-table__table-body-cell-inputtext\"\n            *ngIf=\"cell.type=='input:text'\"\n            type=\"text\"\n            placeholder=\"{{cell.content}}\"\n            id=\"{{cell._meta.inputId}}\"\n            (keyup.enter)=\"onInputTextChange(cell.payload, $event.target.value)\"\n          />\n        </td>\n      </tr>\n    </tbody>\n\n    <tfoot class=\"n7-table__table-footer\" *ngIf=\"data.foot\">\n      <tr\n        class=\"n7-table__table-footer-row {{row.classes || ''}}\"\n        *ngFor=\"let row of data.foot\"\n      >\n        <td\n          class=\"n7-table__table-footer-cell {{cell.classes || ''}}\"\n          *ngFor=\"let cell of row.cells\"\n          (click)=\"onCellClick(cell.payload)\"\n          [innerHTML]=\"cell.content\"\n        ></td>\n      </tr>\n    </tfoot>\n  </table>\n</section>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// TAG.ts
//---------------------------
class TagComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    getIcon(data) {
        if (!data.icon)
            return null;
        if (typeof data.icon === 'string') {
            return {
                id: data.icon,
                payload: data.payload,
            };
        }
        return data.icon;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: TagComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: TagComponent, selector: "n7-tag", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<span class=\"n7-tag {{data.classes || ''}}\" *ngIf=\"data\">\n  <span\n    class=\"n7-tag__icon {{data.preIcon.id}}\"\n    *ngIf=\"data.preIcon?.id\"\n    (click)=\"onClick(data.preIcon.payload)\"\n  ></span>\n  <span class=\"n7-tag__label\" *ngIf=\"data.label\"> {{ data.label }} </span>\n  <span class=\"n7-tag__text\" *ngIf=\"data.text\"> {{ data.text }} </span>\n  <span\n    class=\"n7-tag__icon {{icon.id}}\"\n    *ngIf=\"getIcon(data) as icon\"\n    (click)=\"onClick(icon.payload)\"\n  ></span>\n</span>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: TagComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-tag', template: "<span class=\"n7-tag {{data.classes || ''}}\" *ngIf=\"data\">\n  <span\n    class=\"n7-tag__icon {{data.preIcon.id}}\"\n    *ngIf=\"data.preIcon?.id\"\n    (click)=\"onClick(data.preIcon.payload)\"\n  ></span>\n  <span class=\"n7-tag__label\" *ngIf=\"data.label\"> {{ data.label }} </span>\n  <span class=\"n7-tag__text\" *ngIf=\"data.text\"> {{ data.text }} </span>\n  <span\n    class=\"n7-tag__icon {{icon.id}}\"\n    *ngIf=\"getIcon(data) as icon\"\n    (click)=\"onClick(icon.payload)\"\n  ></span>\n</span>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// TEXT-VIEWER.ts
//---------------------------
class TextViewerComponent {
    static { this._loaded = false; }
    ngOnInit() {
        if (!TextViewerComponent._loaded) {
            const s = document.createElement('script');
            s.setAttribute('src', '/assets/pb-components/dist/pb-components-bundle.js');
            s.setAttribute('type', 'module');
            s.onload = this.onScriptLoaded;
            document.head.appendChild(s);
        }
    }
    displayIndex() {
        if (!this.emit)
            return;
        this.emit('togglecolumn');
    }
    onScriptLoaded() {
        TextViewerComponent._loaded = true;
    }
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: TextViewerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: TextViewerComponent, selector: "n7-text-viewer", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div\n  class=\"n7-text-viewer {{data.classes || ''}}\"\n  *ngIf=\"data && data.endpoint\"\n>\n  <pb-page [attr.endpoint]=\"data.endpoint\" api-version=\"1.0.0\">\n    <pb-document\n      *ngFor=\"let doc of data.docs\"\n      [path]=\"doc.xml\"\n      [odd]=\"doc.odd\"\n      [id]=\"doc.id\"\n    >\n    </pb-document>\n\n    <app-drawer-layout force-narrow=\"force-narrow\" narrow=\"\">\n      <app-header-layout>\n        <app-header\n          fixed=\"fixed\"\n          data-template=\"browse:fix-links\"\n          style=\"\n            transition-duration: 0ms;\n            transform: translate3d(0px, 0px, 0px);\n            left: 0px;\n            right: 0.399994px;\n          \"\n        >\n          <app-toolbar\n            class=\"toolbar\"\n            sticky=\"sticky\"\n            style=\"transform: translate3d(0px, 0px, 0px)\"\n          >\n            <paper-icon-button\n              *ngIf=\"data.docs.length === 1\"\n              id=\"tocToggle\"\n              class=\"toc-toggle\"\n              icon=\"icons:view-list\"\n              role=\"button\"\n              tabindex=\"0\"\n              aria-disabled=\"false\"\n            ></paper-icon-button>\n\n            <pb-toggle-feature\n              *ngIf=\"data.docs.length === 1\"\n              name=\"highlight1\"\n              selector=\"tei-app,pb-popover,pb-highlight\"\n              default=\"off\"\n              action=\"disable\"\n              emit=\"transcription\"\n              subscribe=\"transcription\"\n            >\n              <ng-container *ngIf=\"data.labels && data.labels.view\">\n                {{data.labels.view}}\n              </ng-container>\n              <ng-container *ngIf=\"!data.labels || !data.labels.view\">\n                <pb-i18n key=\"document.plain\">Plain Reading View</pb-i18n>\n              </ng-container>\n            </pb-toggle-feature>\n\n            <!-- <pb-toggle-feature emit=\"transcription\" name=\"view\" on=\"page\" off=\"div\">Page View</pb-toggle-feature> -->\n\n            <ng-container\n              *ngIf=\"data.docs?.length == 1 || data.docs[0].translation\"\n            >\n              <pb-zoom\n                emit=\"transcription\"\n                direction=\"in\"\n                icon=\"icons:zoom-in\"\n              ></pb-zoom>\n              <pb-zoom\n                emit=\"transcription\"\n                direction=\"out\"\n                icon=\"icons:zoom-out\"\n              ></pb-zoom>\n            </ng-container>\n\n            <ng-container\n              *ngIf=\"!data.docs[0].translation && data.docs?.length == 1\"\n            >\n              <pb-navigation\n                emit=\"transcription\"\n                keyboard=\"left\"\n                subscribe=\"transcription\"\n                direction=\"backward\"\n                unit=\"page\"\n              >\n                <paper-icon-button\n                  icon=\"icons:chevron-left\"\n                  role=\"button\"\n                  tabindex=\"0\"\n                  aria-disabled=\"false\"\n                ></paper-icon-button>\n              </pb-navigation>\n              <pb-navigation\n                emit=\"transcription\"\n                keyboard=\"right\"\n                subscribe=\"transcription\"\n                direction=\"forward\"\n                unit=\"page\"\n              >\n                <paper-icon-button\n                  icon=\"icons:chevron-right\"\n                  role=\"button\"\n                  tabindex=\"0\"\n                  aria-disabled=\"false\"\n                ></paper-icon-button>\n              </pb-navigation>\n            </ng-container>\n\n            <ng-container *ngIf=\"data.docs?.length > 1\">\n              <div class=\"n7-text-viewer__toolbar-container-flex\">\n                <paper-icon-button\n                  *ngIf=\"data.docs?.length > 1\"\n                  id=\"tocToggle\"\n                  class=\"toc-toggle\"\n                  icon=\"icons:view-list\"\n                  role=\"button\"\n                  tabindex=\"0\"\n                  aria-disabled=\"false\"\n                ></paper-icon-button>\n              </div>\n            </ng-container>\n\n            <ng-container\n              *ngIf=\"!data.docs[0].translation && data.docs?.length > 1\"\n            >\n              <div class=\"n7-text-viewer__toolbar-container-flex\">\n                <pb-navigation\n                  emit=\"transcription\"\n                  keyboard=\"left\"\n                  subscribe=\"transcription\"\n                  direction=\"backward\"\n                  unit=\"page\"\n                >\n                  <paper-icon-button\n                    icon=\"icons:chevron-left\"\n                    role=\"button\"\n                    tabindex=\"0\"\n                    aria-disabled=\"false\"\n                  ></paper-icon-button>\n                </pb-navigation>\n              </div>\n\n              <div class=\"n7-text-viewer__toolbar-container-flex\">\n                <pb-navigation\n                  emit=\"transcription\"\n                  keyboard=\"right\"\n                  subscribe=\"transcription\"\n                  direction=\"forward\"\n                  unit=\"page\"\n                >\n                  <paper-icon-button\n                    icon=\"icons:chevron-right\"\n                    role=\"button\"\n                    tabindex=\"0\"\n                    aria-disabled=\"false\"\n                  ></paper-icon-button>\n                </pb-navigation>\n              </div>\n            </ng-container>\n\n            <ng-container\n              *ngIf=\"data.docs?.length > 1 && !data.docs[0].translation\"\n            >\n              <div class=\"n7-text-viewer__toolbar-container-flex\">\n                <pb-zoom\n                  emit=\"transcription\"\n                  direction=\"in\"\n                  icon=\"icons:zoom-in\"\n                ></pb-zoom>\n\n                <pb-zoom\n                  emit=\"transcription\"\n                  direction=\"out\"\n                  icon=\"icons:zoom-out\"\n                ></pb-zoom>\n              </div>\n            </ng-container>\n\n            <ng-container\n              *ngIf=\"data.docs.length > 1 && data.labels && data.labels.select.label\"\n            >\n              <div class=\"n7-text-viewer__toolbar-container-flex\">\n                <pb-select-feature\n                  id=\"select-view2\"\n                  name=\"view2\"\n                  [label]=\"data.labels && data.labels.select.label ? data.labels.select.label : 'Mostra entit\u00E0'\"\n                  [items]='[\n                            {\"name\": data.labels.select.type.all, \n                            \"selectors\": [{\"selector\": \".person\", \"state\": false}, {\"selector\": \".place\", \"state\": false}]},\n                            {\"name\": data.labels.select.type.person, \n                            \"selectors\": \n                            [{\"selector\": \".person\", \"state\": false}, {\"selector\": \".place\", \"state\": true}]},\n                            {\"name\": data.labels.select.type.place, \"selectors\": \n                            [{\"selector\": \".place\", \"state\": false}, {\"selector\": \".person\", \"state\": true}]}\n                ]'\n                  subscribe=\"addChannel\"\n                  emit=\"addChannel\"\n                ></pb-select-feature>\n              </div>\n            </ng-container>\n\n            <ng-container\n              *ngIf=\"data.docs.length > 1 && (!data.labels || !data.labels.select.label)\"\n            >\n              <div class=\"n7-text-viewer__toolbar-container-flex\">\n                <pb-select-feature\n                  id=\"select-view2\"\n                  name=\"view2\"\n                  label=\"Mostra entit\u00E0\"\n                  [items]='[\n                            {\"name\": \"Tutto\", \n                            \"selectors\": [{\"selector\": \".person\", \"state\": false}, {\"selector\": \".place\", \"state\": false}]},\n                            {\"name\": \"Personaggi\", \n                            \"selectors\": \n                            [{\"selector\": \".person\", \"state\": false}, {\"selector\": \".place\", \"state\": true}]},\n                            {\"name\": \"Luoghi\", \"selectors\": \n                            [{\"selector\": \".place\", \"state\": false}, {\"selector\": \".person\", \"state\": true}]}\n                ]'\n                  subscribe=\"addChannel\"\n                  emit=\"addChannel\"\n                ></pb-select-feature>\n              </div>\n            </ng-container>\n\n            <ng-container\n              *ngIf=\"data.docs?.length > 1 && data.docs[1].channel && data.facsimile\"\n            >\n              <ng-container *ngIf=\"data.labels && data.labels.index.hide\">\n                <div class=\"n7-text-viewer__toolbar-container-flex\">\n                  <paper-button raised=\"\" (click)=\"displayIndex()\"\n                    >{{ !data.toggleColumn ? data.labels.index.hide :\n                    data.labels.index.show }}</paper-button\n                  >\n                </div>\n              </ng-container>\n              <ng-container *ngIf=\"!data.labels || !data.labels.index.hide\">\n                <div class=\"n7-text-viewer__toolbar-container-flex\">\n                  <paper-button raised=\"\" (click)=\"displayIndex()\"\n                    >{{ !data.toggleColumn ? 'Indici' : 'Riassunto'\n                    }}</paper-button\n                  >\n                </div>\n              </ng-container>\n            </ng-container>\n\n            <ng-container *ngIf=\"data.docs && data.download\">\n              <div class=\"n7-text-viewer__toolbar-container-flex\">\n                <pb-download\n                  [type]=\"data.download && data.download.format ? data.download.format: ''\"\n                  [src]=\"data.docs[0].id\"\n                  [url]=\"data.download && data.download.file ? data.download.file : ''\"\n                  dialog=\"downloadDialog\"\n                  [title]=\"data.download && data.download.format && data.download.label ? data.download.label + ' ' + data.download.format: ''\"\n                >\n                  <paper-button raised=\"\"\n                    >{{data.download && data.download.format &&\n                    data.download.label ? data.download.label + ' ' +\n                    data.download.format: ''}}</paper-button\n                  >\n                </pb-download>\n              </div>\n            </ng-container>\n\n            <pb-progress\n              subscribe=\"transcription\"\n              indeterminate=\"\"\n              bottom-item=\"bottom-item\"\n              style=\"visibility: hidden\"\n            ></pb-progress>\n          </app-toolbar>\n        </app-header>\n\n        <pb-drawer\n          toggle=\"tocToggle\"\n          class=\"tocDrawer\"\n          emit=\"toc\"\n          subscribe=\"transcription\"\n        >\n          <div class=\"drawer-content\">\n            <h3>\n              <ng-container *ngIf=\"data.labels && data.labels.toc\">\n                {{data.labels.toc}}\n              </ng-container>\n              <ng-container *ngIf=\"!data.labels || !data.labels.toc\">\n                <pb-i18n key=\"document.contents\">Contents</pb-i18n>\n              </ng-container>\n            </h3>\n            <pb-load\n              *ngIf=\"data.docs\"\n              id=\"toc\"\n              url=\"api/document/{doc}/contents?target=transcription&amp;icons=true\"\n              [src]=\"data.docs[0].id\"\n              subscribe=\"toc\"\n              emit=\"toc\"\n              expand=\"expand\"\n              auto=\"auto\"\n            >\n              <ng-container *ngIf=\"data.labels && data.labels.loading\">\n                {{data.labels.loading}}\n              </ng-container>\n              <ng-container *ngIf=\"!data.labels || !data.labels.loading\">\n                <pb-i18n key=\"dialogs.loading\">Loading</pb-i18n>\n              </ng-container>\n            </pb-load>\n          </div>\n        </pb-drawer>\n        <main class=\"content-body\">\n          <pb-facsimile\n            *ngIf=\"data.facsimile\"\n            id=\"facsimile\"\n            [attr.base-uri]=\"data.facsimile.uri\"\n            subscribe=\"transcription\"\n            default-zoom-level=\"0\"\n            show-navigation-control=\"show-navigation-control\"\n            show-navigator=\"show-navigator\"\n          >\n          </pb-facsimile>\n          <ng-container *ngFor=\"let doc of data.docs; index as $i;\">\n            <!-- NO CHANNEL -->\n            <pb-view\n              *ngIf=\"!doc.channel\"\n              id=\"view{{ $i }}\"\n              [src]=\"doc.id\"\n              subscribe=\"transcription\"\n              emit=\"transcription\"\n              [attr.wait-for]=\"data.facsimile ? '#facsimile' : null\"\n              column-separator=\".tei-cb\"\n              append-footnotes=\"append-footnotes\"\n              view=\"{{ doc.view }}\"\n              url=\"{{ doc.rootPath }}\"\n            >\n              <pb-param\n                *ngIf=\"doc.url\"\n                name=\"url\"\n                [attr.value]=\"doc.url\"\n              ></pb-param>\n            </pb-view>\n            <!-- WITH CHANNEL / MURUCA DEMO -->\n            <pb-view\n              *ngIf=\"doc.channel && doc.translation\"\n              id=\"view{{ $i }}\"\n              [src]=\"doc.id\"\n              xpath=\"//text[@type='source']\"\n              emit=\"{{ doc.channel }}\"\n              subscribe=\"{{ doc.channel }}\"\n              view=\"{{ doc.view }}\"\n            >\n            </pb-view>\n            <pb-view\n              *ngIf=\"doc.channel && doc.translation\"\n              id=\"view{{ $i }}\"\n              [src]=\"doc.id\"\n              xpath=\"{{ doc.xpath }}\"\n              emit=\"{{ doc.channel }}\"\n              subscribe=\"{{ doc.channel }}\"\n              view=\"{{ doc.view }}\"\n            >\n              <pb-param name=\"mode\" value=\"commentary\"></pb-param>\n            </pb-view>\n            <!-- WITH CHANNEL / addChannel -->\n            <pb-view\n              [hidden]=\"data.toggleColumn\"\n              (click)=\"onClick($event)\"\n              *ngIf=\"doc.channel && !doc.translation\"\n              id=\"view{{ $i }}\"\n              [src]=\"doc.id\"\n              [odd]=\"doc.odd\"\n              emit=\"addChannel\"\n              subscribe=\"addChannel\"\n              view=\"{{ doc.view }}\"\n              url=\"{{ doc.rootPath }}\"\n              map=\"{{ doc.mapFunction }}\"\n            >\n              <pb-param name=\"mode\" value=\"commentary\"></pb-param>\n              <pb-param\n                name=\"source_doc\"\n                [attr.value]=\"data.docs[0].xml\"\n              ></pb-param>\n            </pb-view>\n\n            <ng-container *ngIf=\"doc.channel && !doc.translation\">\n              <!--  -->\n              <pb-view\n                [hidden]=\"!data.toggleColumn\"\n                *ngIf=\"doc.channel && !doc.translation\"\n                [src]=\"doc.id\"\n                [odd]=\"doc.odd\"\n                id=\"text-viewer-index\"\n                subscribe=\"index\"\n                emit=\"letter\"\n                url=\"{{ doc.rootPath }}\"\n                map=\"{{ doc.mapFunction }}\"\n              >\n                <pb-param name=\"mode\" value=\"facets\"></pb-param>\n              </pb-view>\n              <!--  -->\n            </ng-container>\n          </ng-container>\n        </main>\n      </app-header-layout>\n    </app-drawer-layout>\n  </pb-page>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: TextViewerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-text-viewer', template: "<div\n  class=\"n7-text-viewer {{data.classes || ''}}\"\n  *ngIf=\"data && data.endpoint\"\n>\n  <pb-page [attr.endpoint]=\"data.endpoint\" api-version=\"1.0.0\">\n    <pb-document\n      *ngFor=\"let doc of data.docs\"\n      [path]=\"doc.xml\"\n      [odd]=\"doc.odd\"\n      [id]=\"doc.id\"\n    >\n    </pb-document>\n\n    <app-drawer-layout force-narrow=\"force-narrow\" narrow=\"\">\n      <app-header-layout>\n        <app-header\n          fixed=\"fixed\"\n          data-template=\"browse:fix-links\"\n          style=\"\n            transition-duration: 0ms;\n            transform: translate3d(0px, 0px, 0px);\n            left: 0px;\n            right: 0.399994px;\n          \"\n        >\n          <app-toolbar\n            class=\"toolbar\"\n            sticky=\"sticky\"\n            style=\"transform: translate3d(0px, 0px, 0px)\"\n          >\n            <paper-icon-button\n              *ngIf=\"data.docs.length === 1\"\n              id=\"tocToggle\"\n              class=\"toc-toggle\"\n              icon=\"icons:view-list\"\n              role=\"button\"\n              tabindex=\"0\"\n              aria-disabled=\"false\"\n            ></paper-icon-button>\n\n            <pb-toggle-feature\n              *ngIf=\"data.docs.length === 1\"\n              name=\"highlight1\"\n              selector=\"tei-app,pb-popover,pb-highlight\"\n              default=\"off\"\n              action=\"disable\"\n              emit=\"transcription\"\n              subscribe=\"transcription\"\n            >\n              <ng-container *ngIf=\"data.labels && data.labels.view\">\n                {{data.labels.view}}\n              </ng-container>\n              <ng-container *ngIf=\"!data.labels || !data.labels.view\">\n                <pb-i18n key=\"document.plain\">Plain Reading View</pb-i18n>\n              </ng-container>\n            </pb-toggle-feature>\n\n            <!-- <pb-toggle-feature emit=\"transcription\" name=\"view\" on=\"page\" off=\"div\">Page View</pb-toggle-feature> -->\n\n            <ng-container\n              *ngIf=\"data.docs?.length == 1 || data.docs[0].translation\"\n            >\n              <pb-zoom\n                emit=\"transcription\"\n                direction=\"in\"\n                icon=\"icons:zoom-in\"\n              ></pb-zoom>\n              <pb-zoom\n                emit=\"transcription\"\n                direction=\"out\"\n                icon=\"icons:zoom-out\"\n              ></pb-zoom>\n            </ng-container>\n\n            <ng-container\n              *ngIf=\"!data.docs[0].translation && data.docs?.length == 1\"\n            >\n              <pb-navigation\n                emit=\"transcription\"\n                keyboard=\"left\"\n                subscribe=\"transcription\"\n                direction=\"backward\"\n                unit=\"page\"\n              >\n                <paper-icon-button\n                  icon=\"icons:chevron-left\"\n                  role=\"button\"\n                  tabindex=\"0\"\n                  aria-disabled=\"false\"\n                ></paper-icon-button>\n              </pb-navigation>\n              <pb-navigation\n                emit=\"transcription\"\n                keyboard=\"right\"\n                subscribe=\"transcription\"\n                direction=\"forward\"\n                unit=\"page\"\n              >\n                <paper-icon-button\n                  icon=\"icons:chevron-right\"\n                  role=\"button\"\n                  tabindex=\"0\"\n                  aria-disabled=\"false\"\n                ></paper-icon-button>\n              </pb-navigation>\n            </ng-container>\n\n            <ng-container *ngIf=\"data.docs?.length > 1\">\n              <div class=\"n7-text-viewer__toolbar-container-flex\">\n                <paper-icon-button\n                  *ngIf=\"data.docs?.length > 1\"\n                  id=\"tocToggle\"\n                  class=\"toc-toggle\"\n                  icon=\"icons:view-list\"\n                  role=\"button\"\n                  tabindex=\"0\"\n                  aria-disabled=\"false\"\n                ></paper-icon-button>\n              </div>\n            </ng-container>\n\n            <ng-container\n              *ngIf=\"!data.docs[0].translation && data.docs?.length > 1\"\n            >\n              <div class=\"n7-text-viewer__toolbar-container-flex\">\n                <pb-navigation\n                  emit=\"transcription\"\n                  keyboard=\"left\"\n                  subscribe=\"transcription\"\n                  direction=\"backward\"\n                  unit=\"page\"\n                >\n                  <paper-icon-button\n                    icon=\"icons:chevron-left\"\n                    role=\"button\"\n                    tabindex=\"0\"\n                    aria-disabled=\"false\"\n                  ></paper-icon-button>\n                </pb-navigation>\n              </div>\n\n              <div class=\"n7-text-viewer__toolbar-container-flex\">\n                <pb-navigation\n                  emit=\"transcription\"\n                  keyboard=\"right\"\n                  subscribe=\"transcription\"\n                  direction=\"forward\"\n                  unit=\"page\"\n                >\n                  <paper-icon-button\n                    icon=\"icons:chevron-right\"\n                    role=\"button\"\n                    tabindex=\"0\"\n                    aria-disabled=\"false\"\n                  ></paper-icon-button>\n                </pb-navigation>\n              </div>\n            </ng-container>\n\n            <ng-container\n              *ngIf=\"data.docs?.length > 1 && !data.docs[0].translation\"\n            >\n              <div class=\"n7-text-viewer__toolbar-container-flex\">\n                <pb-zoom\n                  emit=\"transcription\"\n                  direction=\"in\"\n                  icon=\"icons:zoom-in\"\n                ></pb-zoom>\n\n                <pb-zoom\n                  emit=\"transcription\"\n                  direction=\"out\"\n                  icon=\"icons:zoom-out\"\n                ></pb-zoom>\n              </div>\n            </ng-container>\n\n            <ng-container\n              *ngIf=\"data.docs.length > 1 && data.labels && data.labels.select.label\"\n            >\n              <div class=\"n7-text-viewer__toolbar-container-flex\">\n                <pb-select-feature\n                  id=\"select-view2\"\n                  name=\"view2\"\n                  [label]=\"data.labels && data.labels.select.label ? data.labels.select.label : 'Mostra entit\u00E0'\"\n                  [items]='[\n                            {\"name\": data.labels.select.type.all, \n                            \"selectors\": [{\"selector\": \".person\", \"state\": false}, {\"selector\": \".place\", \"state\": false}]},\n                            {\"name\": data.labels.select.type.person, \n                            \"selectors\": \n                            [{\"selector\": \".person\", \"state\": false}, {\"selector\": \".place\", \"state\": true}]},\n                            {\"name\": data.labels.select.type.place, \"selectors\": \n                            [{\"selector\": \".place\", \"state\": false}, {\"selector\": \".person\", \"state\": true}]}\n                ]'\n                  subscribe=\"addChannel\"\n                  emit=\"addChannel\"\n                ></pb-select-feature>\n              </div>\n            </ng-container>\n\n            <ng-container\n              *ngIf=\"data.docs.length > 1 && (!data.labels || !data.labels.select.label)\"\n            >\n              <div class=\"n7-text-viewer__toolbar-container-flex\">\n                <pb-select-feature\n                  id=\"select-view2\"\n                  name=\"view2\"\n                  label=\"Mostra entit\u00E0\"\n                  [items]='[\n                            {\"name\": \"Tutto\", \n                            \"selectors\": [{\"selector\": \".person\", \"state\": false}, {\"selector\": \".place\", \"state\": false}]},\n                            {\"name\": \"Personaggi\", \n                            \"selectors\": \n                            [{\"selector\": \".person\", \"state\": false}, {\"selector\": \".place\", \"state\": true}]},\n                            {\"name\": \"Luoghi\", \"selectors\": \n                            [{\"selector\": \".place\", \"state\": false}, {\"selector\": \".person\", \"state\": true}]}\n                ]'\n                  subscribe=\"addChannel\"\n                  emit=\"addChannel\"\n                ></pb-select-feature>\n              </div>\n            </ng-container>\n\n            <ng-container\n              *ngIf=\"data.docs?.length > 1 && data.docs[1].channel && data.facsimile\"\n            >\n              <ng-container *ngIf=\"data.labels && data.labels.index.hide\">\n                <div class=\"n7-text-viewer__toolbar-container-flex\">\n                  <paper-button raised=\"\" (click)=\"displayIndex()\"\n                    >{{ !data.toggleColumn ? data.labels.index.hide :\n                    data.labels.index.show }}</paper-button\n                  >\n                </div>\n              </ng-container>\n              <ng-container *ngIf=\"!data.labels || !data.labels.index.hide\">\n                <div class=\"n7-text-viewer__toolbar-container-flex\">\n                  <paper-button raised=\"\" (click)=\"displayIndex()\"\n                    >{{ !data.toggleColumn ? 'Indici' : 'Riassunto'\n                    }}</paper-button\n                  >\n                </div>\n              </ng-container>\n            </ng-container>\n\n            <ng-container *ngIf=\"data.docs && data.download\">\n              <div class=\"n7-text-viewer__toolbar-container-flex\">\n                <pb-download\n                  [type]=\"data.download && data.download.format ? data.download.format: ''\"\n                  [src]=\"data.docs[0].id\"\n                  [url]=\"data.download && data.download.file ? data.download.file : ''\"\n                  dialog=\"downloadDialog\"\n                  [title]=\"data.download && data.download.format && data.download.label ? data.download.label + ' ' + data.download.format: ''\"\n                >\n                  <paper-button raised=\"\"\n                    >{{data.download && data.download.format &&\n                    data.download.label ? data.download.label + ' ' +\n                    data.download.format: ''}}</paper-button\n                  >\n                </pb-download>\n              </div>\n            </ng-container>\n\n            <pb-progress\n              subscribe=\"transcription\"\n              indeterminate=\"\"\n              bottom-item=\"bottom-item\"\n              style=\"visibility: hidden\"\n            ></pb-progress>\n          </app-toolbar>\n        </app-header>\n\n        <pb-drawer\n          toggle=\"tocToggle\"\n          class=\"tocDrawer\"\n          emit=\"toc\"\n          subscribe=\"transcription\"\n        >\n          <div class=\"drawer-content\">\n            <h3>\n              <ng-container *ngIf=\"data.labels && data.labels.toc\">\n                {{data.labels.toc}}\n              </ng-container>\n              <ng-container *ngIf=\"!data.labels || !data.labels.toc\">\n                <pb-i18n key=\"document.contents\">Contents</pb-i18n>\n              </ng-container>\n            </h3>\n            <pb-load\n              *ngIf=\"data.docs\"\n              id=\"toc\"\n              url=\"api/document/{doc}/contents?target=transcription&amp;icons=true\"\n              [src]=\"data.docs[0].id\"\n              subscribe=\"toc\"\n              emit=\"toc\"\n              expand=\"expand\"\n              auto=\"auto\"\n            >\n              <ng-container *ngIf=\"data.labels && data.labels.loading\">\n                {{data.labels.loading}}\n              </ng-container>\n              <ng-container *ngIf=\"!data.labels || !data.labels.loading\">\n                <pb-i18n key=\"dialogs.loading\">Loading</pb-i18n>\n              </ng-container>\n            </pb-load>\n          </div>\n        </pb-drawer>\n        <main class=\"content-body\">\n          <pb-facsimile\n            *ngIf=\"data.facsimile\"\n            id=\"facsimile\"\n            [attr.base-uri]=\"data.facsimile.uri\"\n            subscribe=\"transcription\"\n            default-zoom-level=\"0\"\n            show-navigation-control=\"show-navigation-control\"\n            show-navigator=\"show-navigator\"\n          >\n          </pb-facsimile>\n          <ng-container *ngFor=\"let doc of data.docs; index as $i;\">\n            <!-- NO CHANNEL -->\n            <pb-view\n              *ngIf=\"!doc.channel\"\n              id=\"view{{ $i }}\"\n              [src]=\"doc.id\"\n              subscribe=\"transcription\"\n              emit=\"transcription\"\n              [attr.wait-for]=\"data.facsimile ? '#facsimile' : null\"\n              column-separator=\".tei-cb\"\n              append-footnotes=\"append-footnotes\"\n              view=\"{{ doc.view }}\"\n              url=\"{{ doc.rootPath }}\"\n            >\n              <pb-param\n                *ngIf=\"doc.url\"\n                name=\"url\"\n                [attr.value]=\"doc.url\"\n              ></pb-param>\n            </pb-view>\n            <!-- WITH CHANNEL / MURUCA DEMO -->\n            <pb-view\n              *ngIf=\"doc.channel && doc.translation\"\n              id=\"view{{ $i }}\"\n              [src]=\"doc.id\"\n              xpath=\"//text[@type='source']\"\n              emit=\"{{ doc.channel }}\"\n              subscribe=\"{{ doc.channel }}\"\n              view=\"{{ doc.view }}\"\n            >\n            </pb-view>\n            <pb-view\n              *ngIf=\"doc.channel && doc.translation\"\n              id=\"view{{ $i }}\"\n              [src]=\"doc.id\"\n              xpath=\"{{ doc.xpath }}\"\n              emit=\"{{ doc.channel }}\"\n              subscribe=\"{{ doc.channel }}\"\n              view=\"{{ doc.view }}\"\n            >\n              <pb-param name=\"mode\" value=\"commentary\"></pb-param>\n            </pb-view>\n            <!-- WITH CHANNEL / addChannel -->\n            <pb-view\n              [hidden]=\"data.toggleColumn\"\n              (click)=\"onClick($event)\"\n              *ngIf=\"doc.channel && !doc.translation\"\n              id=\"view{{ $i }}\"\n              [src]=\"doc.id\"\n              [odd]=\"doc.odd\"\n              emit=\"addChannel\"\n              subscribe=\"addChannel\"\n              view=\"{{ doc.view }}\"\n              url=\"{{ doc.rootPath }}\"\n              map=\"{{ doc.mapFunction }}\"\n            >\n              <pb-param name=\"mode\" value=\"commentary\"></pb-param>\n              <pb-param\n                name=\"source_doc\"\n                [attr.value]=\"data.docs[0].xml\"\n              ></pb-param>\n            </pb-view>\n\n            <ng-container *ngIf=\"doc.channel && !doc.translation\">\n              <!--  -->\n              <pb-view\n                [hidden]=\"!data.toggleColumn\"\n                *ngIf=\"doc.channel && !doc.translation\"\n                [src]=\"doc.id\"\n                [odd]=\"doc.odd\"\n                id=\"text-viewer-index\"\n                subscribe=\"index\"\n                emit=\"letter\"\n                url=\"{{ doc.rootPath }}\"\n                map=\"{{ doc.mapFunction }}\"\n              >\n                <pb-param name=\"mode\" value=\"facets\"></pb-param>\n              </pb-view>\n              <!--  -->\n            </ng-container>\n          </ng-container>\n        </main>\n      </app-header-layout>\n    </app-drawer-layout>\n  </pb-page>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// TIMELINE.ts
//---------------------------
class TimelineComponent {
    constructor() {
        /** Knows if the component is loaded */
        this._loaded = false;
        /** Dynamically load required node modules */
        this.loadModules = async () => ({
            ...(await import('vis-timeline/peer')),
            ...(await import('vis-data/peer')),
        });
    }
    ngAfterContentChecked() {
        if (!this.data || this._loaded)
            return;
        this._loaded = true;
        setTimeout(() => {
            this.loadModules().then((modules) => {
                // To enable two-way data binding, import { DataSet } from 'vis-data'
                const { Timeline, DataSet } = modules;
                const items = new DataSet(this.data.dataSet);
                const t = new Timeline(document.getElementById(this.data.containerID), // container
                items, this.data.libOptions // add groups below
                );
                // Set the timeline instance
                if (this.data._setInstance)
                    this.data._setInstance(t);
            });
        });
    }
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: TimelineComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: TimelineComponent, selector: "n7-timeline", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-timeline\">\n  <div [id]=\"data.containerID\" style=\"border: 1px solid #ddd\"></div>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: TimelineComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-timeline', template: "<div *ngIf=\"data\" class=\"n7-timeline\">\n  <div [id]=\"data.containerID\" style=\"border: 1px solid #ddd\"></div>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// TOAST.ts
//---------------------------
class ToastComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ToastComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: ToastComponent, selector: "n7-toast", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-toast\">\n  <div class=\"n7-toast__column {{data.classes || ''}}\">\n    <!-- Toast boxes -->\n    <div\n      class=\"n7-toast__box\"\n      *ngFor=\"let box of data.toasts\"\n      [ngClass]=\"{ 'has-actions' : !! (box.actions || box.closeIcon) }\"\n    >\n      <!-- Toast icon -->\n      <div class=\"n7-toast__icon\" *ngIf=\"box.icon\">\n        <span class=\"{{ box.icon }}\"></span>\n      </div>\n\n      <!-- Toast text -->\n      <div\n        class=\"n7-toast__content {{box.classes || ''}}\"\n        *ngIf=\"box.title || box.text\"\n      >\n        <span class=\"n7-toast__title\" *ngIf=\"box.title\">{{ box.title }}</span>\n        <span class=\"n7-toast__text\" *ngIf=\"box.text\">{{ box.text }}</span>\n      </div>\n\n      <!-- Toast actions -->\n      <div class=\"n7-toast__actions\" *ngIf=\"box.actions || box.closeIcon\">\n        <span\n          class=\"n7-toast__closeIcon {{ box.closeIcon.icon }}\"\n          *ngIf=\"box.closeIcon\"\n          (click)=\"onClick(box.closeIcon.payload)\"\n        >\n        </span>\n        <span class=\"n7-toast__action-wrapper\" *ngIf=\"box.actions\">\n          <span\n            class=\"n7-toast__action-content\"\n            *ngFor=\"let action of box.actions\"\n          >\n            <button\n              class=\"n7-toast__action-button n7-btn n7-btn-s {{action.classes || ''}}\"\n              (click)=\"onClick(action.payload)\"\n            >\n              {{action.text}}\n            </button>\n          </span>\n        </span>\n      </div>\n    </div>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ToastComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-toast', template: "<div *ngIf=\"data\" class=\"n7-toast\">\n  <div class=\"n7-toast__column {{data.classes || ''}}\">\n    <!-- Toast boxes -->\n    <div\n      class=\"n7-toast__box\"\n      *ngFor=\"let box of data.toasts\"\n      [ngClass]=\"{ 'has-actions' : !! (box.actions || box.closeIcon) }\"\n    >\n      <!-- Toast icon -->\n      <div class=\"n7-toast__icon\" *ngIf=\"box.icon\">\n        <span class=\"{{ box.icon }}\"></span>\n      </div>\n\n      <!-- Toast text -->\n      <div\n        class=\"n7-toast__content {{box.classes || ''}}\"\n        *ngIf=\"box.title || box.text\"\n      >\n        <span class=\"n7-toast__title\" *ngIf=\"box.title\">{{ box.title }}</span>\n        <span class=\"n7-toast__text\" *ngIf=\"box.text\">{{ box.text }}</span>\n      </div>\n\n      <!-- Toast actions -->\n      <div class=\"n7-toast__actions\" *ngIf=\"box.actions || box.closeIcon\">\n        <span\n          class=\"n7-toast__closeIcon {{ box.closeIcon.icon }}\"\n          *ngIf=\"box.closeIcon\"\n          (click)=\"onClick(box.closeIcon.payload)\"\n        >\n        </span>\n        <span class=\"n7-toast__action-wrapper\" *ngIf=\"box.actions\">\n          <span\n            class=\"n7-toast__action-content\"\n            *ngFor=\"let action of box.actions\"\n          >\n            <button\n              class=\"n7-toast__action-button n7-btn n7-btn-s {{action.classes || ''}}\"\n              (click)=\"onClick(action.payload)\"\n            >\n              {{action.text}}\n            </button>\n          </span>\n        </span>\n      </div>\n    </div>\n  </div>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// TOOLTIP-CONTENT.ts
//---------------------------
class TooltipContentComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: TooltipContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: TooltipContentComponent, selector: "n7-tooltip-content", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-tooltip-content\">\n  <div *ngIf=\"data.title\">{{data.title}}</div>\n\n  <div *ngIf=\"data.text\" [innerHTML]=\"data.text\"></div>\n\n  <img *ngIf=\"data.image\" [src]=\"data.image\" />\n\n  <ng-container *ngFor=\"let btn of data.actions\">\n    <n7-anchor-wrapper\n      [classes]=\"\"\n      [data]=\"btn\"\n      (clicked)=\"onClick(btn.anchor.payload)\"\n    >\n      <span *ngIf=\"data.text\" class=\"n7-btn\"> {{ btn.text }} </span>\n    </n7-anchor-wrapper>\n  </ng-container>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: AnchorWrapperComponent, selector: "n7-anchor-wrapper", inputs: ["data", "classes"], outputs: ["clicked"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: TooltipContentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-tooltip-content', template: "<div *ngIf=\"data\" class=\"n7-tooltip-content\">\n  <div *ngIf=\"data.title\">{{data.title}}</div>\n\n  <div *ngIf=\"data.text\" [innerHTML]=\"data.text\"></div>\n\n  <img *ngIf=\"data.image\" [src]=\"data.image\" />\n\n  <ng-container *ngFor=\"let btn of data.actions\">\n    <n7-anchor-wrapper\n      [classes]=\"\"\n      [data]=\"btn\"\n      (clicked)=\"onClick(btn.anchor.payload)\"\n    >\n      <span *ngIf=\"data.text\" class=\"n7-btn\"> {{ btn.text }} </span>\n    </n7-anchor-wrapper>\n  </ng-container>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// TREE.ts
//---------------------------
class TreeComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: TreeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: TreeComponent, selector: "n7-tree", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-tree\">\n  <!-- Start recursive rendering -->\n  <ng-container\n    *ngTemplateOutlet=\"recursiveTree; context:{$implicit: data.items}\"\n  ></ng-container>\n\n  <!-- Template for recursive children rendering -->\n  <ng-template #recursiveTree let-node>\n    <div\n      class=\"n7-tree__item {{ item.classes || '' }}\"\n      *ngFor=\"let item of node\"\n    >\n      <div class=\"n7-tree__item-contents\">\n        <!-- Render expand/collapse arrow -->\n        <span\n          *ngIf=\"item.toggle\"\n          class=\"n7-tree__item-toggle {{ item.toggle.icon }}\"\n          (click)=\"onClick(item.toggle.payload)\"\n        >\n        </span>\n        <!-- Render the node -->\n        <n7-anchor-wrapper\n          [classes]=\"'n7-tree__item-details'\"\n          [data]=\"item.anchor\"\n          (clicked)=\"onClick($event)\"\n        >\n          <span\n            *ngIf=\"item.icon\"\n            class=\"n7-tree__item-icon {{ item.icon }}\"\n          ></span>\n          <img\n            class=\"n7-tree__item-img\"\n            *ngIf=\"item.img\"\n            src=\"{{ item.img }}\"\n            alt=\"{{ item.text }}\"\n          />\n          <span class=\"n7-tree__item-text\">{{ item.text }}</span>\n          <span class=\"n7-tree__item-right-icon {{ item.iconright }}\"></span>\n        </n7-anchor-wrapper>\n      </div>\n      <!-- Check for more child nodes and render them -->\n      <div class=\"n7-tree__children-wrapper\" *ngIf=\"item.items\">\n        <ng-container\n          *ngTemplateOutlet=\"recursiveTree; context:{$implicit: item.items}\"\n        ></ng-container>\n      </div>\n    </div>\n  </ng-template>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: AnchorWrapperComponent, selector: "n7-anchor-wrapper", inputs: ["data", "classes"], outputs: ["clicked"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: TreeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-tree', template: "<div *ngIf=\"data\" class=\"n7-tree\">\n  <!-- Start recursive rendering -->\n  <ng-container\n    *ngTemplateOutlet=\"recursiveTree; context:{$implicit: data.items}\"\n  ></ng-container>\n\n  <!-- Template for recursive children rendering -->\n  <ng-template #recursiveTree let-node>\n    <div\n      class=\"n7-tree__item {{ item.classes || '' }}\"\n      *ngFor=\"let item of node\"\n    >\n      <div class=\"n7-tree__item-contents\">\n        <!-- Render expand/collapse arrow -->\n        <span\n          *ngIf=\"item.toggle\"\n          class=\"n7-tree__item-toggle {{ item.toggle.icon }}\"\n          (click)=\"onClick(item.toggle.payload)\"\n        >\n        </span>\n        <!-- Render the node -->\n        <n7-anchor-wrapper\n          [classes]=\"'n7-tree__item-details'\"\n          [data]=\"item.anchor\"\n          (clicked)=\"onClick($event)\"\n        >\n          <span\n            *ngIf=\"item.icon\"\n            class=\"n7-tree__item-icon {{ item.icon }}\"\n          ></span>\n          <img\n            class=\"n7-tree__item-img\"\n            *ngIf=\"item.img\"\n            src=\"{{ item.img }}\"\n            alt=\"{{ item.text }}\"\n          />\n          <span class=\"n7-tree__item-text\">{{ item.text }}</span>\n          <span class=\"n7-tree__item-right-icon {{ item.iconright }}\"></span>\n        </n7-anchor-wrapper>\n      </div>\n      <!-- Check for more child nodes and render them -->\n      <div class=\"n7-tree__children-wrapper\" *ngIf=\"item.items\">\n        <ng-container\n          *ngTemplateOutlet=\"recursiveTree; context:{$implicit: item.items}\"\n        ></ng-container>\n      </div>\n    </div>\n  </ng-template>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

//---------------------------
// WIZARD.ts
//---------------------------
class WizardComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: WizardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: WizardComponent, selector: "n7-wizard", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-wizard {{ data.classes || '' }}\">\n  <ol class=\"n7-wizard__list\">\n    <li\n      *ngFor=\"let item of data.items\"\n      class=\"n7-wizard__item {{ item.classes || '' }}\"\n      (click)=\"onClick(item.payload)\"\n    >\n      <span *ngIf=\"item.number\" class=\"n7-wizard__number\"\n        >{{ item.number }}</span\n      >\n      <span *ngIf=\"item.text\" class=\"n7-wizard__text\">{{ item.text }}</span>\n    </li>\n  </ol>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: WizardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-wizard', template: "<div *ngIf=\"data\" class=\"n7-wizard {{ data.classes || '' }}\">\n  <ol class=\"n7-wizard__list\">\n    <li\n      *ngFor=\"let item of data.items\"\n      class=\"n7-wizard__item {{ item.classes || '' }}\"\n      (click)=\"onClick(item.payload)\"\n    >\n      <span *ngIf=\"item.number\" class=\"n7-wizard__number\"\n        >{{ item.number }}</span\n      >\n      <span *ngIf=\"item.text\" class=\"n7-wizard__text\">{{ item.text }}</span>\n    </li>\n  </ol>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });

const COMPONENTS = [
    AdvancedAutocompleteComponent,
    AlertComponent,
    AnchorWrapperComponent,
    AvatarComponent,
    BreadcrumbsComponent,
    BubbleChartComponent,
    ButtonComponent,
    CarouselComponent,
    ChartComponent,
    ContentPlaceholderComponent,
    DataWidgetComponent,
    DatepickerComponent,
    FacetComponent,
    FacetHeaderComponent,
    FacetYearRangeComponent,
    FileSelectorComponent,
    FooterComponent,
    HeaderComponent,
    HeroComponent,
    IconComponent,
    HistogramRangeComponent,
    ImageViewerComponent,
    ImageViewerToolsComponent,
    InnerTitleComponent,
    InputCheckboxComponent,
    InputLinkComponent,
    InputSelectComponent,
    InputTextComponent,
    ItemPreviewComponent,
    LoaderComponent,
    MapComponent,
    MetadataViewerComponent,
    NavComponent,
    PaginationComponent,
    SidebarHeaderComponent,
    SignupComponent,
    SimpleAutocompleteComponent,
    TableComponent,
    TagComponent,
    InputTextareaComponent,
    TextViewerComponent,
    TimelineComponent,
    ToastComponent,
    TooltipContentComponent,
    TreeComponent,
    WizardComponent,
    ProgressLineComponent,
];
class DvComponentsLibModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: DvComponentsLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.2", ngImport: i0, type: DvComponentsLibModule, declarations: [AdvancedAutocompleteComponent,
            AlertComponent,
            AnchorWrapperComponent,
            AvatarComponent,
            BreadcrumbsComponent,
            BubbleChartComponent,
            ButtonComponent,
            CarouselComponent,
            ChartComponent,
            ContentPlaceholderComponent,
            DataWidgetComponent,
            DatepickerComponent,
            FacetComponent,
            FacetHeaderComponent,
            FacetYearRangeComponent,
            FileSelectorComponent,
            FooterComponent,
            HeaderComponent,
            HeroComponent,
            IconComponent,
            HistogramRangeComponent,
            ImageViewerComponent,
            ImageViewerToolsComponent,
            InnerTitleComponent,
            InputCheckboxComponent,
            InputLinkComponent,
            InputSelectComponent,
            InputTextComponent,
            ItemPreviewComponent,
            LoaderComponent,
            MapComponent,
            MetadataViewerComponent,
            NavComponent,
            PaginationComponent,
            SidebarHeaderComponent,
            SignupComponent,
            SimpleAutocompleteComponent,
            TableComponent,
            TagComponent,
            InputTextareaComponent,
            TextViewerComponent,
            TimelineComponent,
            ToastComponent,
            TooltipContentComponent,
            TreeComponent,
            WizardComponent,
            ProgressLineComponent], imports: [CommonModule, RouterModule], exports: [AdvancedAutocompleteComponent,
            AlertComponent,
            AnchorWrapperComponent,
            AvatarComponent,
            BreadcrumbsComponent,
            BubbleChartComponent,
            ButtonComponent,
            CarouselComponent,
            ChartComponent,
            ContentPlaceholderComponent,
            DataWidgetComponent,
            DatepickerComponent,
            FacetComponent,
            FacetHeaderComponent,
            FacetYearRangeComponent,
            FileSelectorComponent,
            FooterComponent,
            HeaderComponent,
            HeroComponent,
            IconComponent,
            HistogramRangeComponent,
            ImageViewerComponent,
            ImageViewerToolsComponent,
            InnerTitleComponent,
            InputCheckboxComponent,
            InputLinkComponent,
            InputSelectComponent,
            InputTextComponent,
            ItemPreviewComponent,
            LoaderComponent,
            MapComponent,
            MetadataViewerComponent,
            NavComponent,
            PaginationComponent,
            SidebarHeaderComponent,
            SignupComponent,
            SimpleAutocompleteComponent,
            TableComponent,
            TagComponent,
            InputTextareaComponent,
            TextViewerComponent,
            TimelineComponent,
            ToastComponent,
            TooltipContentComponent,
            TreeComponent,
            WizardComponent,
            ProgressLineComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: DvComponentsLibModule, imports: [CommonModule, RouterModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: DvComponentsLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENTS],
                    imports: [CommonModule, RouterModule],
                    exports: [COMPONENTS],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                }]
        }] });

const ADVANCED_AUTOCOMPLETE_MOCK = {
    results: [
        {
            group: {
                title: 'Books',
                icon: 'n7-icon-file3',
                classes: 'color-people',
                anchor: {
                    payload: 'books',
                },
            },
            items: [
                {
                    title: 'Label risultato con url',
                    anchor: { href: '/examples', target: '_blank' },
                },
                {
                    title: 'Label risultato senza metadato',
                    anchor: { payload: 'res1' },
                },
                {
                    title: 'Label risultato',
                    metadata: [{ value: 'Metadato aggiuntivo' }],
                    anchor: { payload: 'res2' },
                },
                {
                    title: 'Label risultato',
                    metadata: [
                        {
                            key: 'metakey',
                            value: 'value',
                        },
                    ],
                    anchor: {
                        payload: 'res2',
                    },
                },
                {
                    title: 'Label risultato',
                    metadata: [
                        {
                            key: 'metakey',
                            value: 'value',
                        },
                        {
                            key: 'metakey2',
                            value: 'value2',
                        },
                        {
                            key: 'metakey3',
                            value: 'value3',
                        },
                        {
                            key: 'metakey4',
                            value: 'value4',
                        },
                    ],
                    anchor: {
                        payload: 'res3',
                    },
                },
                {
                    title: 'Label risultato',
                    metadata: [
                        {
                            key: 'only metakey',
                            value: 'only metavalue',
                        },
                    ],
                    anchor: {
                        payload: 'res4',
                    },
                },
                { title: 'Label risultato', anchor: { payload: 'res5' } },
            ],
        },
        {
            group: {
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                anchor: {
                    payload: 'movies',
                    href: '/examples',
                },
            },
            items: [
                {
                    title: 'Label risultato',
                    metadata: [{ value: 'Metadato aggiuntivo' }],
                    anchor: { payload: 'res6' },
                },
                {
                    title: 'Label risultato',
                    metadata: [{ value: 'Metadato aggiuntivo' }],
                    anchor: { payload: 'res7' },
                },
                {
                    title: 'Label risultato',
                    metadata: [{ value: 'Metadato aggiuntivo' }],
                    anchor: { payload: 'res8' },
                },
                {
                    title: 'Label risultato',
                    metadata: [{ value: 'Metadato aggiuntivo' }],
                    anchor: { payload: 'res9' },
                },
            ],
        },
        {
            items: [
                {
                    metadata: [{ value: 'Metadato esterno' }],
                    anchor: { payload: 'res10' },
                },
                {
                    metadata: [{ value: 'Metadato esterno' }],
                    anchor: { payload: 'res11' },
                },
                {
                    metadata: [{ value: 'Metadato esterno' }],
                    anchor: { payload: 'res12' },
                },
                {
                    metadata: [{ value: 'Metadato esterno' }],
                    anchor: { payload: 'res13' },
                },
            ],
        },
    ],
    actions: {
        advanced: {
            text: 'Ricerca Avanzata',
            anchor: {
                payload: 'advanced-search',
                href: 'https://google.it',
                target: '_blank',
            },
        },
        showMore: {
            text: 'Visualizza tutti i 98 risultati per "ang"',
            anchor: {
                payload: 'show-more',
            },
        },
    },
    fallback: 'Spiacenti, non è stato trovato nessun risultato. <br> Riprova con una nuova ricerca.',
};

const ALERT_MOCK = {
    text: `
  This is an alert for the user with some <strong>bold</strong> and <i>italic</i> text.
  This is an alert for the user with some <strong>bold</strong> and <i>italic</i> text.
  `,
    hasCloseButton: true,
    payload: 'close',
    icon: 'n7-icon-bell',
    classes: 'is-warning',
};

const AVATAR_MOCK = {
    // image: {
    //   src: 'https://i.pravatar.cc/300',
    //   alt: '',
    // },
    color: 'coral',
    labelColor: 'white',
    label: 'A',
    payload: 'avatar',
    size: '150px',
};

const BREADCRUMBS_MOCK = {
    items: [
        {
            label: 'Home',
            anchor: { payload: 'home' },
        },
        {
            label: 'Costumi',
            anchor: { href: '/examples' },
        },
        {
            label: 'Giacche',
            anchor: { payload: 'giacche' },
        },
        {
            label: 'Maniche',
            anchor: { href: '/examples', target: '_blank' },
        },
        {
            label: 'Manica',
            anchor: { href: 'https://google.it' },
        },
    ],
};

const BUBBLECHART_MOCK = {
    containerId: 'bubbleChartContainer',
    width: 500,
    height: 500,
    // shuffle: false,
    transition: 750,
    sizeRange: [0.5, 500],
    colorMatch: {
        domain: ['persona', 'luogo', 'organizzazione', 'cosa notevole'],
        range: ['#4d8df3', '#f2d04c', '#c99245', '#6cb286'],
    },
    fontRendering: {
        label: {
            family: 'Verdana, Geneva, sans-serif',
            weight: 'light',
        },
        counter: {
            family: 'Consolas, monospace',
            weight: 'normal',
        },
    },
    data: [
        {
            entity: {
                id: '8b7329a1-832c-4b81-b6c7-6714c0a932cd',
                label: 'design',
                typeOfEntity: 'cosa notevole',
            },
            count: 3266,
        },
        {
            entity: {
                id: 'a1071c15-12ad-4e9f-ae78-d82ff8da9de3',
                label: 'Elio Mari',
                typeOfEntity: 'persona',
            },
            count: 1948,
        },
        {
            entity: {
                id: 'f88c0695-d48d-4299-b3f7-15dfa62d64eb',
                label: 'Danese',
                typeOfEntity: 'organizzazione',
            },
            count: 1826,
        },
        {
            entity: {
                id: '9d69e9ab-5e62-420d-817d-a5a399a835d4',
                label: 'Artemide',
                typeOfEntity: 'organizzazione',
            },
            count: 628,
        },
        {
            entity: {
                id: 'c5b2436c-ed74-49b7-9fb0-7bd1a3bd1d09',
                label: 'Driade',
                typeOfEntity: 'organizzazione',
            },
            count: 577,
        },
        {
            entity: {
                id: 'ec84b4d9-b811-4bb5-b42e-f9978f7a547b',
                label: 'design per bambini',
                typeOfEntity: 'cosa notevole',
            },
            count: 556,
        },
        {
            entity: {
                id: 'afbdae39-adf5-4fc8-805f-712a39955372',
                label: 'allegorie',
                typeOfEntity: 'cosa notevole',
            },
            count: 517,
        },
        {
            entity: {
                id: 'ae8ae452-18b5-4999-a3d9-2b4f9c174ae9',
                label: 'Sistema di illuminazione Sistema aggregato',
                typeOfEntity: 'cosa notevole',
            },
            count: 466,
        },
        {
            entity: {
                id: 'dd7cd2bd-3f98-488c-acff-d5a71f3c1638',
                label: 'Sistema aggregato',
                typeOfEntity: 'cosa notevole',
            },
            count: 466,
        },
        {
            entity: {
                id: '9c308ce3-5cf5-4bdd-b4a8-52a656929fcc',
                label: 'Giancarlo Fassina',
                typeOfEntity: 'persona',
            },
            count: 466,
        },
        {
            entity: {
                id: '02ae7008-2b2d-4c91-b033-9aecdf051be0',
                label: 'Daynight',
                typeOfEntity: 'cosa notevole',
            },
            count: 444,
        },
        {
            entity: {
                id: '82c0e881-a81c-4dd4-b784-1be81a074559',
                label: 'Divano letto Day-night',
                typeOfEntity: 'cosa notevole',
            },
            count: 444,
        },
        {
            entity: {
                id: 'ecc2552e-f2db-4ff1-86de-5a7ea0296c5f',
                label: 'Letto divano',
                typeOfEntity: 'cosa notevole',
            },
            count: 444,
        },
        {
            entity: {
                id: 'c826129c-6373-402e-9a56-8e7121e2851e',
                label: 'arte',
                typeOfEntity: 'cosa notevole',
            },
            count: 358,
        },
        {
            entity: {
                id: 'ba0c6441-277c-4139-8da7-c60624038726',
                label: 'grafica editoriale',
                typeOfEntity: 'cosa notevole',
            },
            count: 330,
        },
        {
            entity: {
                id: '158a2ad8-88a2-4352-82a6-a8f3d998e6a1',
                label: "Proposta per un'autoprogettazione di mobili",
                typeOfEntity: 'cosa notevole',
            },
            count: 281,
        },
        {
            entity: {
                id: 'd78b4701-6ce9-4bb5-a9ed-3de3aebabcd2',
                label: 'Mobili inchiodati',
                typeOfEntity: 'cosa notevole',
            },
            count: 281,
        },
        {
            entity: {
                id: 'e2922713-222d-4a02-9891-ef503fdde811',
                label: "Proposta per un'autoprogettazione",
                typeOfEntity: 'cosa notevole',
            },
            count: 281,
        },
        {
            entity: {
                id: '7a64fd39-e99b-4630-a5fe-096002befcf2',
                label: 'Simon international',
                typeOfEntity: 'organizzazione',
            },
            count: 281,
        },
        {
            entity: {
                id: '50cbfc53-0654-4056-9569-d7c0ba2195ee',
                label: 'Boringhieri',
                typeOfEntity: 'organizzazione',
            },
            count: 257,
        },
        {
            entity: {
                id: 'c3ac744e-fa96-434c-87df-c894ad829726',
                label: 'Esperanza Nunez',
                typeOfEntity: 'persona',
            },
            count: 216,
        },
        {
            entity: {
                id: '81f9c089-8e50-46dc-b79d-4958fab77d13',
                label: 'Gavina',
                typeOfEntity: 'organizzazione',
            },
            count: 215,
        },
        {
            entity: {
                id: '0351e100-6b64-41dc-932c-d76c4e965b69',
                label: 'mostre',
                typeOfEntity: 'cosa notevole',
            },
            count: 206,
        },
        {
            entity: {
                id: '47b9fc50-f27a-4bb2-bc12-e4abacd94e6d',
                label: 'Copertine della collana Universale Scientifica',
                typeOfEntity: 'cosa notevole',
            },
            count: 199,
        },
        {
            entity: {
                id: '3fdf0dd4-fec1-487f-944f-c5d4a5d0e8c8',
                label: 'Centro Studi e Archivio della Comunicazione (CSAC)',
                typeOfEntity: 'organizzazione',
            },
            count: 198,
        },
        {
            entity: {
                id: '66876e19-2885-4fc7-b2a9-61a66f4dae86',
                label: 'Enzo Mari',
                typeOfEntity: 'persona',
            },
            count: 198,
        },
        {
            entity: {
                id: '23f43960-aee3-44d6-9ee1-5a1e7be2c024',
                label: 'Design e design, progetto della mostra e catalogo',
                typeOfEntity: 'cosa notevole',
            },
            count: 197,
        },
        {
            entity: {
                id: 'f63fa61b-1915-4518-8236-3844f4bd4fbd',
                label: 'Design e design',
                typeOfEntity: 'cosa notevole',
            },
            count: 197,
        },
        {
            entity: {
                id: '96f3344e-324c-4df3-8a46-811b0732d2c4',
                label: 'Atlante secondo Lenin',
                typeOfEntity: 'cosa notevole',
            },
            count: 174,
        },
        {
            entity: {
                id: 'f480886a-dbf1-4eeb-adaf-4cfaa7aeeaa2',
                label: 'Processi rivoluzionari',
                typeOfEntity: 'cosa notevole',
            },
            count: 174,
        },
        {
            entity: {
                id: '02081f1d-82a4-4bf9-969a-10747e39badf',
                label: "Edizioni L'Erba Voglio, Milano",
                typeOfEntity: 'organizzazione',
            },
            count: 174,
        },
        {
            entity: {
                id: 'd28644e4-6e1e-4cb9-b798-b3a3935929a0',
                label: 'Francesco Leonetti',
                typeOfEntity: 'persona',
            },
            count: 174,
        },
        {
            entity: {
                id: 'dd8c1f47-d061-4b76-b61e-199d3f703266',
                label: 'Divano continuo semirigido',
                typeOfEntity: 'cosa notevole',
            },
            count: 162,
        },
        {
            entity: {
                id: '71f4c1c9-3fa0-48d7-8da6-f766072e5d95',
                label: '16 pesci',
                typeOfEntity: 'cosa notevole',
            },
            count: 149,
        },
        {
            entity: {
                id: '43ef411c-1d1e-4ae8-acd6-dfc0abccdb55',
                label: 'Portacenere a griglia bilanciata',
                typeOfEntity: 'cosa notevole',
            },
            count: 131,
        },
        {
            entity: {
                id: '630786d3-bce1-4c20-8a3b-00f1bdade87b',
                label: 'Portacenere Griglia – da tavolo, da muro, da terra',
                typeOfEntity: 'cosa notevole',
            },
            count: 131,
        },
        {
            entity: {
                id: 'ffbca81e-5d67-47f7-a2d8-4564de32e857',
                label: 'Portacenere da tavolo, da muro, da terra Griglia',
                typeOfEntity: 'cosa notevole',
            },
            count: 131,
        },
        {
            entity: {
                id: '3cb26fd8-6997-410a-82d4-d9c4f124681a',
                label: 'Libreria componibile Glifo in plastica',
                typeOfEntity: 'cosa notevole',
            },
            count: 121,
        },
        {
            entity: {
                id: '69c99a94-1aa7-47a7-aaab-3e732c406b80',
                label: 'Libreria Glifo',
                typeOfEntity: 'cosa notevole',
            },
            count: 121,
        },
        {
            entity: {
                id: 'c651e4cf-a9d2-4439-bde0-5912a47a3293',
                label: 'Glifo',
                typeOfEntity: 'cosa notevole',
            },
            count: 121,
        },
        {
            entity: {
                id: '1e060082-b317-4f82-9d35-a14cacb63afe',
                label: 'Libri bambini',
                typeOfEntity: 'cosa notevole',
            },
            count: 118,
        },
        {
            entity: {
                id: '49b37899-6d9f-4075-a2e1-cc0ab5b0a3d0',
                label: 'Carte da disegno 1, 2, 3, 4, 5',
                typeOfEntity: 'cosa notevole',
            },
            count: 118,
        },
        {
            entity: {
                id: '9130a6c0-9159-4121-a87d-fbd211833407',
                label: 'Album da disegno',
                typeOfEntity: 'cosa notevole',
            },
            count: 118,
        },
        {
            entity: {
                id: '70279330-5514-4f72-bf5d-babccf8e4f97',
                label: 'Sedia Sof-Sof con struttura in tondino di ferro',
                typeOfEntity: 'cosa notevole',
            },
            count: 108,
        },
        {
            entity: {
                id: '96c34848-fde2-4423-bdc8-da96b0d00a63',
                label: 'Sof-Sof-Chair',
                typeOfEntity: 'cosa notevole',
            },
            count: 108,
        },
        {
            entity: {
                id: '137882b0-756e-451c-8042-dd33dc61bcc6',
                label: 'Il posto dei giochi',
                typeOfEntity: 'cosa notevole',
            },
            count: 103,
        },
        {
            entity: {
                id: '141f0d49-7b28-45bb-a00b-e2983f25bdd6',
                label: 'Pannelli componibili',
                typeOfEntity: 'cosa notevole',
            },
            count: 103,
        },
        {
            entity: {
                id: '65b1991e-0c00-4109-b25a-4da18762c0aa',
                label: 'Il posto dei giochi, gioco didattico costituito da pannelli piegabili in cartone fustellato',
                typeOfEntity: 'cosa notevole',
            },
            count: 103,
        },
        {
            entity: {
                id: '3789efa3-6de1-4f51-af78-f94f4646977d',
                label: 'Divano in poliuretano tagliato e poltrona con telaio in lamiera stampata',
                typeOfEntity: 'cosa notevole',
            },
            count: 94,
        },
        {
            entity: {
                id: 'd547e543-6203-47f9-9436-efc4fc296466',
                label: 'Divano e poltrona',
                typeOfEntity: 'cosa notevole',
            },
            count: 94,
        },
        {
            entity: {
                id: 'c434a6d1-523b-40c0-b8df-08766e3a9c6d',
                label: 'Fiorio',
                typeOfEntity: 'organizzazione',
            },
            count: 93,
        },
        {
            entity: {
                id: 'c362437a-4a0d-4474-99f8-1a8829819bb3',
                label: 'allestimenti',
                typeOfEntity: 'cosa notevole',
            },
            count: 92,
        },
        {
            entity: {
                id: 'b6ed3006-b857-401e-b85b-402451be011d',
                label: 'Olivetti',
                typeOfEntity: 'organizzazione',
            },
            count: 90,
        },
        {
            entity: {
                id: 'c5b25adc-6bba-4863-a5c0-0d2a226d1a55',
                label: 'Anonima Castelli',
                typeOfEntity: 'organizzazione',
            },
            count: 90,
        },
        {
            entity: {
                id: 'b2283dd3-19c6-45e9-ae8d-7df896cf0917',
                label: 'Serie della natura n. 9: cephalantus occidentalis',
                typeOfEntity: 'cosa notevole',
            },
            count: 87,
        },
        {
            entity: {
                id: '3ffbd23c-b66d-4b0c-bdb3-a2647fb22c93',
                label: 'Samos',
                typeOfEntity: 'cosa notevole',
            },
            count: 85,
        },
        {
            entity: {
                id: '4188fa2a-b59a-4000-9bd7-f8dbabf1bfc7',
                label: 'Sedia Box in plastica',
                typeOfEntity: 'cosa notevole',
            },
            count: 85,
        },
        {
            entity: {
                id: '463ab430-469b-4c86-8fb3-213cb0e3a490',
                label: 'Una proposta per la lavorazione a mano della porcellana Samos',
                typeOfEntity: 'cosa notevole',
            },
            count: 85,
        },
        {
            entity: {
                id: '57aa2828-ad56-4169-a27d-75bf895af2a7',
                label: 'Sedia Box',
                typeOfEntity: 'cosa notevole',
            },
            count: 85,
        },
        {
            entity: {
                id: 'd3a054ac-e566-416d-ad38-7752145b7651',
                label: 'Sedia smontabile',
                typeOfEntity: 'cosa notevole',
            },
            count: 85,
        },
        {
            entity: {
                id: '9651c1a6-6393-435e-9ab2-0eff6892e497',
                label: '2 copertine Universale Scientifica',
                typeOfEntity: 'cosa notevole',
            },
            count: 84,
        },
        {
            entity: {
                id: 'cd5aff30-f40a-4524-a11e-bb9912cfdaa3',
                label: 'Vaso da fiori doppio Pago Pago',
                typeOfEntity: 'cosa notevole',
            },
            count: 77,
        },
        {
            entity: {
                id: 'edc0aa7f-e3d6-44ab-b80c-1180e5e794d5',
                label: 'Vaso doppio Pago-Pago',
                typeOfEntity: 'cosa notevole',
            },
            count: 77,
        },
        {
            entity: {
                id: '9b233fa7-c4f3-4326-a24c-91878be9fbe0',
                label: 'Driade',
                typeOfEntity: 'organizzazione',
            },
            count: 74,
        },
        {
            entity: {
                id: 'b90d0fb1-3e58-4b98-a162-fc5ce7b6dddd',
                label: 'Portaghiaccio Dulband in plastica e acciaio inossidabile',
                typeOfEntity: 'cosa notevole',
            },
            count: 64,
        },
        {
            entity: {
                id: 'f9b5a245-798d-4ee7-8e5d-3aa02b9ad7a0',
                label: 'Portaghiaccio Dulband',
                typeOfEntity: 'cosa notevole',
            },
            count: 64,
        },
        {
            entity: {
                id: '588b7018-07cf-4e0b-9df2-80435e656342',
                label: 'Il gioco delle favole, gioco didattico',
                typeOfEntity: 'cosa notevole',
            },
            count: 58,
        },
        {
            entity: {
                id: '059f386c-2e76-4c47-a238-9024eb8e962b',
                label: 'Mario Ballocco',
                typeOfEntity: 'persona',
            },
            count: 55,
        },
        {
            entity: {
                id: 'f1c48d9d-9269-403e-b7d4-ee4772cc6d55',
                label: 'Emme Edizioni',
                typeOfEntity: 'organizzazione',
            },
            count: 54,
        },
        {
            entity: {
                id: 'e094bd13-4f1d-4a84-a5d1-4415aa7ef191',
                label: 'Bonifica',
                typeOfEntity: 'organizzazione',
            },
            count: 51,
        },
        {
            entity: {
                id: 'b58e6f7f-17eb-4405-b25e-b797dbdaa2a5',
                label: 'Andrea Rovatti',
                typeOfEntity: 'persona',
            },
            count: 48,
        },
        {
            entity: {
                id: '9de62a57-3a8c-4bb1-859e-1fc2acc21ecb',
                label: 'Vicom casa',
                typeOfEntity: 'organizzazione',
            },
            count: 47,
        },
        {
            entity: {
                id: '8aa84057-504a-4bd8-86f2-34c358979e65',
                label: 'Bompiani',
                typeOfEntity: 'organizzazione',
            },
            count: 44,
        },
        {
            entity: {
                id: '652207ac-eb13-4a1a-a21a-d9e8a387d3e9',
                label: 'Monteshell/Montecatini',
                typeOfEntity: 'organizzazione',
            },
            count: 35,
        },
        {
            entity: {
                id: 'f2d3d9ee-9cd8-4547-88e2-f9f45dd5f8be',
                label: 'Roche',
                typeOfEntity: 'organizzazione',
            },
            count: 33,
        },
        {
            entity: {
                id: 'd7784f67-9c63-4af6-91db-014c85d43bf8',
                label: 'Iela Mari',
                typeOfEntity: 'persona',
            },
            count: 33,
        },
        {
            entity: {
                id: 'bad4afbb-0500-449b-9ce8-81e383178bfb',
                label: 'Plura Edizioni',
                typeOfEntity: 'organizzazione',
            },
            count: 32,
        },
        {
            entity: {
                id: '501bc267-8ade-4d1d-b2d9-002b01004d86',
                label: 'Denbo AB',
                typeOfEntity: 'organizzazione',
            },
            count: 31,
        },
        {
            entity: {
                id: 'eda59d98-0ee7-414f-b440-d3f0fcf07bbb',
                label: 'Italo Cremona',
                typeOfEntity: 'organizzazione',
            },
            count: 30,
        },
        {
            entity: {
                id: 'd9db05e1-df6e-47e5-80ed-6e078ae670ea',
                label: 'XVI Triennale',
                typeOfEntity: 'organizzazione',
            },
            count: 29,
        },
        {
            entity: {
                id: '11cb9572-e96b-499e-9ab4-d636678b30bf',
                label: 'Adelphi',
                typeOfEntity: 'organizzazione',
            },
            count: 25,
        },
        {
            entity: {
                id: 'dd8c1ac5-897b-40b2-aa60-fedb76661fb5',
                label: 'III Mostra del Marmo di Carrara',
                typeOfEntity: 'organizzazione',
            },
            count: 25,
        },
        {
            entity: {
                id: 'f3227a70-8cac-41d1-8f29-b94be58f9843',
                label: 'Monteshell',
                typeOfEntity: 'organizzazione',
            },
            count: 24,
        },
        {
            entity: {
                id: '28dbd742-91df-444a-bdcd-dee5e3bbca4b',
                label: 'Tesint',
                typeOfEntity: 'organizzazione',
            },
            count: 23,
        },
        {
            entity: {
                id: 'bd2254ce-3b69-4833-a412-4b1e329b45eb',
                label: 'ICF De Padova',
                typeOfEntity: 'organizzazione',
            },
            count: 23,
        },
        {
            entity: {
                id: '1d23fa2b-3d20-4af7-993f-084c9d347d15',
                label: 'Gabbianelli',
                typeOfEntity: 'organizzazione',
            },
            count: 22,
        },
        {
            entity: {
                id: '45f8fc1c-198a-4cad-bc6e-91bc037bc9da',
                label: 'Le Creuset',
                typeOfEntity: 'organizzazione',
            },
            count: 20,
        },
        {
            entity: {
                id: '55c62ee8-99e7-4587-bba5-5bcf3ffd79b8',
                label: 'XIV Triennale',
                typeOfEntity: 'organizzazione',
            },
            count: 20,
        },
        {
            entity: {
                id: 'ac361155-402a-48cf-aa65-957c79813c4a',
                label: 'Galleria Milano',
                typeOfEntity: 'organizzazione',
            },
            count: 19,
        },
        {
            entity: {
                id: '3acdce2a-ca21-4a9f-ae2f-a6c70224610c',
                label: 'Davide Boriani',
                typeOfEntity: 'persona',
            },
            count: 13,
        },
        {
            entity: {
                id: 'f619a681-7b29-4dbb-b2d2-a66887b683a9',
                label: 'Gianni Colombo',
                typeOfEntity: 'persona',
            },
            count: 13,
        },
        {
            entity: {
                id: 'fa0df465-d26a-4505-aaeb-393414107783',
                label: 'Marelli-Lenkurt',
                typeOfEntity: 'organizzazione',
            },
            count: 11,
        },
        {
            entity: {
                id: '040fe91c-9314-4159-971a-32289da1472f',
                label: 'VI Biennale di San Marino',
                typeOfEntity: 'organizzazione',
            },
            count: 10,
        },
        {
            entity: {
                id: 'f583823a-0839-45de-80aa-ecee8ee86381',
                label: 'Peri',
                typeOfEntity: 'organizzazione',
            },
            count: 10,
        },
        {
            entity: {
                id: '3845161a-773c-4386-b1a7-c11ba68875f0',
                label: 'Triennale',
                typeOfEntity: 'organizzazione',
            },
            count: 8,
        },
        {
            entity: {
                id: '78cabc71-d86e-48e8-a9bd-9ebde2cdf025',
                label: 'Bellasich e Bossi Editore',
                typeOfEntity: 'organizzazione',
            },
            count: 8,
        },
        {
            entity: {
                id: '8375e4ff-e4a1-46ae-abdf-e1ef40a45146',
                label: 'Dedalo',
                typeOfEntity: 'organizzazione',
            },
            count: 8,
        },
        {
            entity: {
                id: 'a23c3d15-d6e3-4c36-ab1d-edeb68e33113',
                label: 'Regione Toscana, Giunta',
                typeOfEntity: 'organizzazione',
            },
            count: 8,
        },
        {
            entity: {
                id: '49d368cd-22ff-4cdf-a9ea-a592cefb7ac9',
                label: 'Dadamaino',
                typeOfEntity: 'persona',
            },
            count: 8,
        },
        {
            entity: {
                id: '62abc328-a836-4cb2-9581-a2c5541252d9',
                label: 'Giuliana Einaudi',
                typeOfEntity: 'persona',
            },
            count: 8,
        },
        {
            entity: {
                id: '8d3fb65a-34ad-4e10-9da1-2f9273912aa2',
                label: 'Paolo Gallerani',
                typeOfEntity: 'persona',
            },
            count: 8,
        },
        {
            entity: {
                id: '9672ea6c-1f6c-47e3-a295-63e255337fb2',
                label: 'Cole of California',
                typeOfEntity: 'organizzazione',
            },
            count: 6,
        },
        {
            entity: {
                id: '3d3cb887-d7e1-4d4c-be63-513178603204',
                label: 'Cedit',
                typeOfEntity: 'organizzazione',
            },
            count: 5,
        },
        {
            entity: {
                id: '3e0cb860-907b-48cc-9c51-01c7e93484e5',
                label: 'Maison de Culture, Grenoble',
                typeOfEntity: 'organizzazione',
            },
            count: 5,
        },
        {
            entity: {
                id: 'fc266b83-c8b6-4fd2-869d-6c9a7dc13335',
                label: 'Comune di Ravenna',
                typeOfEntity: 'organizzazione',
            },
            count: 5,
        },
        {
            entity: {
                id: '380efec2-bb1c-4955-ab31-f984ef1cb48c',
                label: 'Manfredo Massironi',
                typeOfEntity: 'persona',
            },
            count: 5,
        },
        {
            entity: {
                id: '59ab7d42-3833-4692-815a-7965a9e00eb3',
                label: 'Ennio Chiggio',
                typeOfEntity: 'persona',
            },
            count: 5,
        },
        {
            entity: {
                id: '6bcca125-aa34-424b-8eb3-c2aba625a338',
                label: 'Gabriele de Vecchi',
                typeOfEntity: 'persona',
            },
            count: 5,
        },
        {
            entity: {
                id: '70c202ed-bed4-41d1-a861-7f16fb0a2161',
                label: 'Anna Fasolis',
                typeOfEntity: 'persona',
            },
            count: 5,
        },
        {
            entity: {
                id: '58a834b1-727c-43f5-b197-c5b227ebd29d',
                label: 'Cooperativa Editoriale Studio Forma, Torino',
                typeOfEntity: 'organizzazione',
            },
            count: 4,
        },
        {
            entity: {
                id: '5c1150b2-7440-4d49-8bb0-3b9bf57cf5eb',
                label: 'Edizioni di Comunità',
                typeOfEntity: 'organizzazione',
            },
            count: 4,
        },
        {
            entity: {
                id: '23515a44-e395-4457-9163-8b5b62b5f63e',
                label: 'Scuola Umanitaria, Milano',
                typeOfEntity: 'organizzazione',
            },
            count: 3,
        },
        {
            entity: {
                id: '6e01c950-5ff9-492e-8375-a764de5c21f6',
                label: 'Prodet',
                typeOfEntity: 'organizzazione',
            },
            count: 3,
        },
        {
            entity: {
                id: 'd313ea90-1a73-4dee-8350-10a57264f5cb',
                label: 'Bonfanti, Tessitura tappeti',
                typeOfEntity: 'organizzazione',
            },
            count: 3,
        },
        {
            entity: {
                id: 'f6de2425-fa3d-47a3-a31a-53394af32fe8',
                label: 'Simon International',
                typeOfEntity: 'organizzazione',
            },
            count: 3,
        },
        {
            entity: {
                id: '662bb784-7226-41c6-a945-03c7fe8134a9',
                label: 'Antonia Astori De Ponti',
                typeOfEntity: 'persona',
            },
            count: 3,
        },
        {
            entity: {
                id: '499a8780-76a1-4f86-9e8e-619bf2c9d02d',
                label: 'Italconsult',
                typeOfEntity: 'organizzazione',
            },
            count: 2,
        },
        {
            entity: {
                id: '24f8a80b-fd61-4679-9f7c-bf65e04c5a5c',
                label: 'Peppe Di Giuli',
                typeOfEntity: 'persona',
            },
            count: 2,
        },
        {
            entity: {
                id: '2e628cd4-9580-43df-b165-4e9dd60c8c50',
                label: 'Polymer',
                typeOfEntity: 'organizzazione',
            },
            count: 1,
        },
        {
            entity: {
                id: '01883bc3-a22c-4ef5-bf50-0a1a90481ab8',
                label: 'Enzo Preda',
                typeOfEntity: 'persona',
            },
            count: 1,
        },
        {
            entity: {
                id: '48cb0789-6c23-42f5-8959-543f6e6ceac5',
                label: 'Annamaria Maglienti',
                typeOfEntity: 'persona',
            },
            count: 1,
        },
        {
            entity: {
                id: '7829c979-cc77-4a5c-85b0-3262889b64f2',
                label: 'Carla Vasio',
                typeOfEntity: 'persona',
            },
            count: 1,
        },
    ],
};

const BUTTON_MOCK = {
    text: "The Button's label",
    isDisabled: false,
    // isLoading: true,
    anchor: {
        payload: 'button-click',
    },
    classes: 'n7-btn-cta',
    iconLeft: {
        id: 'n7-icon-circle-full',
    },
};

const CAROUSEL_MOCK = {
    containerId: 'carousel-root',
    classes: 'demo',
    libOptions: {
        count: 1,
        move: 1,
        // touch: true,
        // mode: 'align',
        buttons: true,
        dots: true,
        rewind: true,
        autoplay: 0,
        animation: 500,
        // responsive: {
        //   0: { count: 1.5, buttons: false },
        //   480: { count: 2.5, buttons: false },
        //   768: { count: 3, touch: false },
        //   1440: { count: 4, touch: false },
        // },
    },
    slides: [
        {
            classes: 'example-class',
            items: [
                {
                    text: 'Cum sociis natoque penatibus<br /> et magnis dis parturient montes, nascetur ridiculus mus.',
                },
                { title: 'Lorem Donec sed odio dui.' },
                {
                    text: '<i>Morbi leo risus, porta ac consectetur ac</i>, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                },
                {
                    image: {
                        src: 'assets/images/heart.svg',
                        classes: 'some test classes',
                    },
                },
                {
                    metadata: [
                        { key: 'Metadato 1', value: 'Valore 1' },
                        { key: 'Metadato 2', value: 'Valore 2' },
                    ],
                },
                {},
            ],
            action: {
                text: 'Action',
                anchor: {
                    payload: 'first-button',
                    // href: '/examples',
                    // target: '_blank'
                },
            },
            background: {
                video: {
                    url: 'http://www.giulioandreini.it/galassia-ariosto/galassia-ariosto-home-carousel.mp4',
                    poster: 'https://placeimg.com/640/480/arch/grayscale',
                    height: 334,
                    width: 640,
                },
            },
        },
        {
            classes: 'example-class',
            items: [
                {
                    text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                },
                { title: 'Lorem Donec sed odio dui.' },
                {
                    text: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                },
                {
                    metadata: [
                        { key: 'Metadato 1', value: 'Valore 1' },
                        { key: 'Metadato 2', value: 'Valore 2' },
                    ],
                },
                {},
            ],
            action: {
                text: 'Action',
                anchor: {
                    payload: 'second-button',
                    // href: '/examples',
                    // target: '_blank'
                },
            },
            background: {
                video: {
                    url: 'http://www.giulioandreini.it/galassia-ariosto/galassia-ariosto-home-carousel.mp4',
                    poster: 'https://placeimg.com/640/480/arch/grayscale',
                    height: 334,
                    width: 640,
                },
            },
        },
        {
            items: [
                { title: 'La regina della notte' },
                { text: 'Il flauto magico' },
                {
                    metadata: [
                        { key: 'Regia di ', value: 'Roberto di Simone' },
                        { value: '1955' },
                    ],
                },
                {},
            ],
            action: {
                text: 'IL COSTUME >',
                anchor: {
                    payload: 'third-button',
                },
            },
            background: {
                image: 'https://placeimg.com/800/400/nature/grayscale',
            },
        },
        {
            items: [
                {
                    text: "\"La vendetta dell'inferno ribolle nel mio cuore, Morte e disperazione m'infiamman tutt'intorno!\"",
                },
                { title: 'La regina della notte' },
                { text: 'Il flauto magico' },
                {
                    metadata: [
                        { key: 'Regia di ', value: 'Roberto di Simone' },
                        { value: '1955' },
                    ],
                },
                {},
            ],
            action: {
                text: 'IL COSTUME >',
                anchor: {
                    payload: 'fourth-button',
                },
            },
            background: {
                image: 'https://placeimg.com/800/400/nature/grayscale',
            },
        },
        {
            items: [
                {
                    title: 'UNA COLLEZIONE UNICA. OLTRE 30MILA COSTUMI CREATI AD ARTE DAI MAESTRI FIORENTINI PER LE SCENE PIU PRESTIGIOSE',
                },
            ],
            background: {
                color: 'tomato',
            },
        },
    ],
};

const CHART_MOCK = {
    containerId: 'test-Chart',
    libOptions: {
        chart: {
            height: 550,
            width: 1500,
            type: 'area',
            toolbar: { show: true },
        },
        dataLabels: { enabled: false },
        colors: ['rgba(163,55,119, 1)', 'rgba(146,93,255, 1)'],
        fill: {
            colors: ['#a33777', '#925DFF'],
            gradient: { opacityFrom: 0.5, opacityTo: 0.1 },
        },
        stroke: { curve: 'straight', width: [2, 1] },
        series: [
            {
                name: 'Reddish value',
                data: [
                    [new Date('2019-08-01').getTime(), 770.17],
                    [new Date('2019-08-02').getTime(), 645.03],
                    [new Date('2019-08-03').getTime(), 709.32],
                    [new Date('2019-08-04').getTime(), 708.11],
                    [new Date('2019-08-05').getTime(), 706.59],
                    [new Date('2019-08-06').getTime(), 607.28],
                    [new Date('2019-08-07').getTime(), 494.59],
                    [new Date('2019-08-08').getTime(), 636.81],
                    [new Date('2019-08-09').getTime(), 709.04],
                    [new Date('2019-08-10').getTime(), 717.31],
                    [new Date('2019-08-11').getTime(), 805.61],
                    [new Date('2019-08-12').getTime(), 758.6],
                    [new Date('2019-08-13').getTime(), 612.82],
                    [new Date('2019-08-14').getTime(), 608.9],
                    [new Date('2019-08-15').getTime(), 734.68],
                    [new Date('2019-08-16').getTime(), 838.54],
                    [new Date('2019-08-17').getTime(), 692.88],
                ],
            },
            {
                name: 'Purple value',
                data: [
                    [new Date('2019-08-01').getTime(), 927.04],
                    [new Date('2019-08-02').getTime(), 944.66],
                    [new Date('2019-08-03').getTime(), 860.84],
                    [new Date('2019-08-04').getTime(), 867.28],
                    [new Date('2019-08-05').getTime(), 947.55],
                    [new Date('2019-08-06').getTime(), 798.94],
                    [new Date('2019-08-07').getTime(), 757.66],
                    [new Date('2019-08-08').getTime(), 729.57],
                    [new Date('2019-08-09').getTime(), 679.58],
                    [new Date('2019-08-10').getTime(), 618.78],
                    [new Date('2019-08-11').getTime(), 805.61],
                    [new Date('2019-08-12').getTime(), 791.18],
                    [new Date('2019-08-13').getTime(), 913.78],
                    [new Date('2019-08-14').getTime(), 608.9],
                    [new Date('2019-08-15').getTime(), 611.88],
                    [new Date('2019-08-16').getTime(), 744.02],
                    [new Date('2019-08-17').getTime(), 600.46],
                ],
            },
        ],
        grid: {
            borderColor: '#e7e7e7',
            strokeDashArray: 3,
            xaxis: { lines: { show: true } },
        },
        markers: { size: 3, hover: { size: 6 } },
        xaxis: {
            axisBorder: { show: true, color: '#f4f6fc' },
            labels: {},
            type: 'datetime',
            tickAmount: 6,
        },
        yaxis: [
            {
                show: true,
                showAlways: false,
                opposite: false,
                reversed: false,
                logarithmic: false,
                forceNiceScale: false,
                floating: false,
                labels: {
                    show: true,
                    minWidth: 0,
                    maxWidth: 160,
                    offsetX: 0,
                    offsetY: 0,
                    rotate: 0,
                    padding: 20,
                    style: { fontSize: '11px', cssClass: '' },
                },
                axisBorder: {
                    show: true,
                    color: '#f4f6fc',
                    offsetX: 0,
                    offsetY: 0,
                },
                axisTicks: {
                    show: false,
                    color: '#78909C',
                    width: 6,
                    offsetX: 0,
                    offsetY: 0,
                },
                title: {
                    text: 'P Totale °C',
                    rotate: 90,
                    offsetY: 0,
                    offsetX: 0,
                    style: { fontSize: '11px', cssClass: '' },
                },
                tooltip: { enabled: false, offsetX: 0 },
                crosshairs: {
                    show: true,
                    position: 'front',
                    stroke: { color: '#b6b6b6', width: 1, dashArray: 0 },
                },
            },
        ],
        legend: { show: true },
        tooltip: {},
        annotations: { yaxis: [], xaxis: [], points: [] },
    },
};

const CONTENT_PLACEHOLDER_MOCK = {
    blocks: [
        { classes: 'thumb-placeholder' },
        { classes: 'title-placeholder' },
        { classes: 'text-placeholder' },
        { classes: '' },
        { classes: '' },
        { classes: '' },
        { image: 'https://i.imgur.com/xTiLRNe.png', alt: 'block-placehodler' },
        {
            image: 'https://i.imgur.com/xTiLRNe.png',
            classes: 'image-placeholder-test',
        },
    ],
};

const DATA_WIDGET_MOCK = {
    icon: 'n7-icon-earth',
    imgIcon: {
        path: 'assets/images/heart.svg',
    },
    text: '497 <em>Dipendenti</em>',
    subtitle: {
        text: 'In Crescita',
        icon: 'n7-icon-caret-up',
        value: '9%',
        payload: 'view percent tooltip ',
    },
    payload: 'view earth tooltip',
    classes: 'is-positive',
};

const DATEPICKER_MOCK = {
    id: 'datepicker',
    libOptions: {
        dateFormat: 'Y-m-d',
        mode: 'range',
    },
};

const FACET_HEADER_MOCK = {
    iconLeft: 'n7-icon-earth',
    text: 'Persone',
    additionalText: '24.319',
    iconRight: 'n7-icon-angle-left',
    classes: 'is-expanded',
    payload: 'header',
};

const FACET_YEAR_RANGE_MOCK = {
    inDate: {
        text: 'From',
        payload: 'in-date',
        placeholder: 'choose',
        options: [
            { value: '1900' },
            { value: '1910' },
            { value: '1920' },
            { value: '1930' },
            { value: '1940' },
            { value: '1950' },
            { value: '1960' },
            { value: '1970' },
            { value: '1980' },
            { value: '1990' },
            { value: '2000' },
            { value: '2010' },
            { value: '2019' },
        ],
    },
    outDate: {
        text: 'To',
        payload: 'out-date',
        placeholder: 'choose',
        classes: 'is-disabled',
        options: [],
    },
};

const FACET_MOCK = {
    classes: 'facet-wrapper',
    sections: [
        {
            classes: 'facet-section-1',
            inputs: [
                {
                    type: 'checkbox',
                    id: 'checkbox-1',
                    label: 'Email',
                    payload: 'email',
                    classes: 'is-active',
                },
                {
                    type: 'checkbox',
                    id: 'checkbox-2',
                    label: 'Check 2',
                    payload: 'check2',
                },
                {
                    type: 'checkbox',
                    id: 'checkbox-3',
                    label: 'Check 3',
                    payload: 'check3',
                    checked: true,
                },
                {
                    type: 'checkbox',
                    id: 'checkbox-4',
                    label: 'Check 4',
                    payload: 'check4',
                },
                {
                    type: 'checkbox',
                    id: 'checkbox-5',
                    label: 'Check 5',
                    payload: 'check5',
                    disabled: true,
                },
            ],
        },
        {
            classes: 'facet-section-2',
            inputs: [
                {
                    type: 'text',
                    id: 'input-text-1',
                    label: 'SEARCH LABEL',
                    // disabled: true,
                    placeholder: 'Search',
                    icon: 'n7-icon-search',
                    inputPayload: 'search-input',
                    enterPayload: 'search-enter',
                    iconPayload: 'search-icon',
                },
            ],
        },
        {
            // n7-facet__section-input-links viene usato per stilare il wrapper dei links
            classes: 'facet-section-3 n7-facet__section-input-links',
            inputs: [
                {
                    type: 'link',
                    icon: 'n7-icon-archive',
                    text: 'First filter',
                    counter: 0,
                    payload: 'first filter',
                    classes: 'is-active',
                },
                {
                    type: 'link',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                    counter: 18,
                    payload: 'second filter',
                },
                {
                    type: 'link',
                    icon: 'n7-icon-archive',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                    counter: 18,
                    payload: 'second filter',
                },
                {
                    type: 'link',
                    text: 'third filter',
                    counter: 11,
                    payload: 'third filter',
                },
                {
                    type: 'link',
                    text: 'lorem',
                    counter: 7,
                    payload: 'fourth filter',
                },
                {
                    type: 'link',
                    text: 'last filter',
                    counter: 31,
                    payload: 'last filter',
                },
                {
                    type: 'link',
                    icon: 'n7-icon-archive',
                    text: 'First filter',
                    counter: 1232143,
                    payload: 'first filter',
                    classes: 'is-active',
                },
                {
                    type: 'link',
                    text: 'second filter',
                    counter: 18,
                    payload: 'second filter',
                },
                {
                    type: 'link',
                    text: 'third filter',
                    counter: 11,
                    payload: 'third filter',
                    classes: 'is-active',
                },
                {
                    type: 'link',
                    text: 'fourth filter',
                    counter: 7,
                    payload: 'fourth filter',
                },
                {
                    type: 'link',
                    text: 'last filter',
                    counter: 3,
                    payload: 'last filter',
                },
            ],
        },
        {
            classes: 'facet-section-4',
            inputs: [
                {
                    type: 'select',
                    id: 'input-select-1',
                    // disabled: true,
                    options: [
                        { value: '', label: 'Select...' },
                        { value: 1, label: 'Option 1' },
                        { value: 2, label: 'Option 2', disabled: true },
                        { value: 3, label: 'Option 3', selected: true },
                        { value: 4, label: 'Option 4' },
                    ],
                    payload: 'select',
                },
                {
                    type: 'select',
                    id: 'input-select-1',
                    // disabled: true,
                    options: [
                        { value: '', label: 'Select...' },
                        { value: 1, label: 'Option 1' },
                        { value: 2, label: 'Option 2' },
                        { value: 3, label: 'Option 3', selected: true },
                        { value: 4, label: 'Option 4' },
                    ],
                    payload: 'select',
                },
            ],
        },
    ],
};

const FILE_SELECTOR_MOCK = {
    accept: 'image/*',
    classes: 'file-selector-wrapper',
};

const FOOTER_MOCK = {
    columns: [
        {
            classes: 'col-class',
            title: 'Arianna Web, archivio digitale online',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit elit nunc, at porta ex accumsan id. Fusce quis lobortis sem, non ornare tellus.',
            images: [
                {
                    url: 'https://via.placeholder.com/80',
                    alttext: 'Logo 1',
                    anchor: { payload: 'logo 1' },
                },
                {
                    url: 'https://via.placeholder.com/80',
                    alttext: 'Logo 2',
                    anchor: { href: 'https://via.placeholder.com/80' },
                },
            ],
        },
        {
            title: 'Privacy e info',
            links: [
                {
                    text: 'Info su Arianna Web',
                    anchor: { href: 'https://www.google.it', target: '_blank' },
                    classes: 'link-class',
                },
                {
                    text: 'Privacy policy',
                    anchor: { payload: 'privacy' },
                    classes: 'link-class',
                },
                {
                    text: 'Cookie policy',
                    anchor: { payload: 'cookie' },
                },
                {
                    text: 'Termini e condizioni',
                    anchor: { payload: 'terms' },
                },
            ],
        },
        {
            text: 'Arianna Web is powered by Hyperborea.<br><a href="#" target="_blank">www.hyperborea.com</a>',
            selects: [
                {
                    id: 'language',
                    label: 'Select language',
                    options: [
                        { value: 'en', label: 'English' },
                        { value: 'it', label: 'Italian' },
                        { value: 'de', label: 'German' },
                    ],
                    payload: 'language',
                },
            ],
        },
    ],
};

const HEADER_MOCK = {
    logo: {
        image: 'https://placeimg.com/128/128/any/grayscale',
        title: 'DataViz',
        subtitle: 'Data visualization',
        anchor: {
            payload: 'https://www.netseven.it/',
            href: '/examples',
        },
    },
    nav: {
        items: [
            {
                text: 'Home',
                icon: 'n7-icon-home',
                anchor: { href: '/examples', target: '_blank' },
            },
            { text: 'Stuff', icon: 'n7-icon-home', anchor: { payload: '/stuff' } },
            {
                text: 'Other Stuff',
                icon: 'n7-icon-home',
                anchor: { payload: '/other-stuff' },
            },
            {
                text: 'Dropdown',
                anchor: { payload: '/' },
                icon: 'n7-icon-home',
                subnav: [
                    {
                        text: 'Sublevel 1',
                        icon: 'n7-icon-home',
                        anchor: { href: '/examples' },
                    },
                    {
                        text: 'Sublevel 2 Lorem ipsum dolor sit amet',
                        anchor: { payload: '/sublevel-2' },
                        icon: 'n7-icon-home',
                    },
                    {
                        text: 'Sublevel 3',
                        icon: 'n7-icon-home',
                        anchor: { payload: '/sublevel-3' },
                    },
                ],
            },
            { text: 'Cats', icon: 'n7-icon-home', anchor: { payload: '/cats' } },
        ],
    },
    search: {
        hint: 'Search (hint)',
        payload: 'search payload',
    },
    actions: [
        {
            icon: 'n7-icon-bell',
            badge: {
                text: '200',
            },
            anchor: { href: '/examples' },
        },
        {
            icon: 'n7-icon-facebook',
            anchor: { payload: '/facebook' },
        },
    ],
    selects: [
        {
            id: 'language',
            // label: 'Language',
            options: [
                { value: 'en', label: 'English' },
                { value: 'it', label: 'Italian' },
                { value: 'de', label: 'German' },
            ],
            payload: 'language',
        },
    ],
    buttons: [
        {
            text: 'Log In',
            icon: 'n7-icon-bell',
            anchor: { href: '/examples' },
            classes: 'n7-btn',
        },
        {
            text: 'Sign Up',
            icon: 'n7-icon-bell',
            anchor: { href: '/examples' },
            classes: 'n7-btn n7-btn-cta',
        },
        {
            text: 'Other',
            anchor: { href: '/examples' },
            classes: 'n7-btn',
        },
    ],
    user: {
        // image: {
        //   src: 'https://placeimg.com/150/150/any/people',
        //   alt: 'profile picture'
        // },
        color: 'coral',
        labelColor: 'white',
        label: 'A',
        size: '40px',
        name: 'Massimiliano Spinosa',
        // anchor: { href: '/user', target: '_blank' }
        payload: 'user',
    },
    menuToggle: {
        open: {
            payload: 'mobile-open',
        },
        close: {
            payload: 'mobile-close',
        },
    },
};

const HERO_MOCK = {
    preTitle: 'Un bel testo prima del titolo',
    title: "Il più <em>bell'archivio</em> che tu abbia mai visto",
    text: `
  <p>La <strong>Fondazione Cerratelli</strong> è uno spazio espositivo che raccoglie un'importante 
  collezione di costumi <em>teatrali e cinematografici</em>. Sua sede si trova dal 3 dicembre 
  2011 presso la villa Roncioni a Pugnano, frazione del comune di San Giuliano Terme.</p>
  `,
    input: {
        placeholder: 'Cerca quello che vuoi',
        icon: 'n7-icon-search1',
        payload: 'input',
    },
    button: {
        text: 'Cerca',
        anchor: {
            payload: 'button',
            href: '/examples',
            target: '_blank',
        },
    },
    backgroundImage: 'https://placeimg.com/1000/480/nature',
    // backgroundImage: null,
    image: 'https://placeimg.com/600/600/nature',
};

const HISTOGRAM_RANGE_MOCK = {
    containerId: 'container-for-histogram',
    width: 400,
    height: 50,
    colours: {
        top: '#7091B3',
        bottom: '#96c2f2',
        accent: '#2F528B',
    },
    margin: {
        left: 25,
        right: 5,
        top: 10,
        bottom: 45,
    },
    axis: {
        yAxis: {
            show: true,
            values: [0, 10, 56],
            // tickAmount: 2
        },
    },
    // setSliders: ['1200', '1250'],
    items: [
        {
            label: '1200',
            value: 1,
            payload: 1200,
            range: {
                payload: 1225,
                label: '1225',
            },
        },
        {
            label: '1225',
            value: 0,
            payload: 1225,
            range: {
                payload: 1250,
                label: '1250',
            },
        },
        {
            label: '1250',
            value: 2,
            payload: 1250,
            range: {
                payload: 1275,
                label: '1275',
            },
        },
        {
            label: '1275',
            value: 2,
            payload: 1275,
            range: {
                payload: 1300,
                label: '1300',
            },
        },
        {
            label: '1300',
            value: 6,
            payload: 1300,
            range: {
                payload: 1325,
                label: '1325',
            },
        },
        {
            label: '1325',
            value: 5,
            payload: 1325,
            range: {
                payload: 1350,
                label: '1350',
            },
        },
        {
            label: '1350',
            value: 10,
            payload: 1350,
            range: {
                payload: 1375,
                label: '1375',
            },
        },
        {
            label: '1375',
            value: 6,
            payload: 1375,
            range: {
                payload: 1400,
                label: '1400',
            },
        },
        {
            label: '1400',
            value: 10,
            payload: 1400,
            range: {
                payload: 1425,
                label: '1425',
            },
        },
        {
            label: '1425',
            value: 11,
            payload: 1425,
            range: {
                payload: 1450,
                label: '1450',
            },
        },
        {
            label: '1450',
            value: 18,
            payload: 1450,
            range: {
                payload: 1475,
                label: '1475',
            },
        },
        {
            label: '1475',
            value: 32,
            payload: 1475,
            range: {
                payload: 1500,
                label: '1500',
            },
        },
        {
            label: '1500',
            value: 29,
            payload: 1500,
            range: {
                payload: 1525,
                label: '1525',
            },
        },
        {
            label: '1525',
            value: 26,
            payload: 1525,
            range: {
                payload: 1550,
                label: '1550',
            },
        },
        {
            label: '1550',
            value: 25,
            payload: 1550,
            range: {
                payload: 1575,
                label: '1575',
            },
        },
        {
            label: '1575',
            value: 56,
            payload: 1575,
            range: {
                payload: 1600,
                label: '1600',
            },
        },
        {
            label: '1600',
            value: 27,
            payload: 1600,
            range: {
                payload: 1625,
                label: '1625',
            },
        },
        {
            label: '1625',
            value: 20,
            payload: 1625,
            range: {
                payload: 1650,
                label: '1650',
            },
        },
        {
            label: '1650',
            value: 15,
            payload: 1650,
            range: {
                payload: 1675,
                label: '1675',
            },
        },
        {
            label: '1675',
            value: 17,
            payload: 1675,
            range: {
                payload: 1700,
                label: '1700',
            },
        },
        {
            label: '1700',
            value: 13,
            payload: 1700,
            range: {
                payload: 1725,
                label: '1725',
            },
        },
        {
            label: '1725',
            value: 21,
            payload: 1725,
            range: {
                payload: 1750,
                label: '1750',
            },
        },
        {
            label: '1750',
            value: 33,
            payload: 1750,
            range: {
                payload: 1775,
                label: '1775',
            },
        },
        {
            label: '1775',
            value: 38,
            payload: 1775,
            range: {
                payload: 1800,
                label: '1800',
            },
        },
    ],
};

const ICON_MOCK = {
    id: 'n7-icon-bell',
    payload: 'bell-click',
    style: {
        color: 'tomato',
    },
};

const IMAGE_VIEWER_TOOLS_MOCK = {
    images: [
        { thumb: 'http://placekitten.com/200/130', payload: 'img1-payload' },
        { thumb: 'http://placekitten.com/20/180', payload: 'img2-payload' },
        { thumb: 'http://placekitten.com/90/110', payload: 'img3-payload' },
        { thumb: 'http://placekitten.com/200/40', payload: 'img4-payload' },
        { thumb: 'http://placekitten.com/90/280', payload: 'img5-payload' },
        { thumb: 'http://placekitten.com/90/110', payload: 'img6-payload' },
        { thumb: 'http://placekitten.com/200/130', payload: 'img7-payload' },
        { thumb: 'http://placekitten.com/90/180', payload: 'img8-payload' },
        { thumb: 'http://placekitten.com/90/110', payload: 'img9-payload' },
        { thumb: 'http://placekitten.com/200/130', payload: 'img10-payload' },
        { thumb: 'http://placekitten.com/90/180', payload: 'img11-payload' },
        { thumb: 'http://placekitten.com/90/110', payload: 'img12-payload' },
        { thumb: 'http://placekitten.com/200/130', payload: 'img13-payload' },
        { thumb: 'http://placekitten.com/90/180', payload: 'img14-payload' },
        { thumb: 'http://placekitten.com/90/110', payload: 'img15-payload' },
        { thumb: 'http://placekitten.com/200/130', payload: 'img16-payload' },
        { thumb: 'http://placekitten.com/90/180', payload: 'img17-payload' },
        { thumb: 'http://placekitten.com/90/110', payload: 'img18-payload' },
    ],
    description: 'Spazio da riempire con una descrizione su trigger evento<br>Per testare le thumbnails <b>cambiare le flag in isVisible nel mock</b><br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget egestas mi, at maximus risus. Vivamus quis eros vel orci hendrerit luctus a elementum massa. Ut posuere semper consectetur. Phasellus nec sem non justo pharetra commodo. Ut eget leo id odio accumsan ullamcorper. Morbi porttitor, eros ornare blandit fringilla, ex augue elementum leo, ac porttitor enim ligula at magna. Vivamus a massa eu lacus porttitor cursus. Aliquam elementum tellus eget ornare pellentesque. Pellentesque lacinia egestas auctor. Sed hendrerit sollicitudin erat, vitae condimentum urna maximus hendrerit. Pellentesque ut elit diam. Quisque tempor libero varius laoreet ornare. Vivamus ultricies luctus lorem eu aliquam. Spazio da riempire con una descrizione su trigger evento<br>Per testare le thumbnails <b>cambiare le flag in isVisible nel mock</b><br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget egestas mi, at maximus risus. Vivamus quis eros vel orci hendrerit luctus a elementum massa. Ut posuere semper consectetur. Phasellus nec sem non justo pharetra commodo. Ut eget leo id odio accumsan ullamcorper. Morbi porttitor, eros ornare blandit fringilla, ex augue elementum leo, ac porttitor enim ligula at magna. Vivamus a massa eu lacus porttitor cursus. Aliquam elementum tellus eget ornare pellentesque. Pellentesque lacinia egestas auctor. Sed hendrerit sollicitudin erat, vitae condimentum urna maximus hendrerit. Pellentesque ut elit diam. Quisque tempor libero varius laoreet ornare. Vivamus ultricies luctus lorem eu aliquam. Spazio da riempire con una descrizione su trigger evento<br>Per testare le thumbnails <b>cambiare le flag in isVisible nel mock</b><br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget egestas mi, at maximus risus. Vivamus quis eros vel orci hendrerit luctus a elementum massa. Ut posuere semper consectetur. Phasellus nec sem non justo pharetra commodo. Ut eget leo id odio accumsan ullamcorper. Morbi porttitor, eros ornare blandit fringilla, ex augue elementum leo, ac porttitor enim ligula at magna. Vivamus a massa eu lacus porttitor cursus. Aliquam elementum tellus eget ornare pellentesque. Pellentesque lacinia egestas auctor. Sed hendrerit sollicitudin erat, vitae condimentum urna maximus hendrerit. Pellentesque ut elit diam. Quisque tempor libero varius laoreet ornare. Vivamus ultricies luctus lorem eu aliquam. Spazio da riempire con una descrizione su trigger evento<br>Per testare le thumbnails <b>cambiare le flag in isVisible nel mock</b><br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget egestas mi, at maximus risus. Vivamus quis eros vel orci hendrerit luctus a elementum massa. Ut posuere semper consectetur. Phasellus nec sem non justo pharetra commodo. Ut eget leo id odio accumsan ullamcorper. Morbi porttitor, eros ornare blandit fringilla, ex augue elementum leo, ac porttitor enim ligula at magna. Vivamus a massa eu lacus porttitor cursus. Aliquam elementum tellus eget ornare pellentesque. Pellentesque lacinia egestas auctor. Sed hendrerit sollicitudin erat, vitae condimentum urna maximus hendrerit. Pellentesque ut elit diam. Quisque tempor libero varius laoreet ornare. Vivamus ultricies luctus lorem eu aliquam.',
    controls: {
        description: {
            icon: 'n7-icon-info',
            anchor: { payload: 'toggle-description' },
        },
        thumbs: {
            icon: 'n7-icon-thumbs',
            anchor: { payload: 'toggle-thumbs' },
        },
        closedescription: {
            icon: 'n7-icon-close',
            anchor: { payload: 'close-description' },
        },
    },
    navigation: {
        prev: {
            payload: 'prev', // 'prev'
            classes: 'n7-image-viewer-tools__thumbs-scroll-left',
        },
        next: {
            payload: 'next', // 'next'
            classes: 'n7-image-viewer-tools__thumbs-scroll-right',
        },
    },
    isVisible: {
        description: false,
        thumbnails: true,
    },
    classes: 'n7-image-viewer-tools__test',
    initial: 0,
};

const IMAGE_VIEWER_MOCK = {
    images: [
        {
            type: 'image',
            url: 'http://placekitten.com/1920/1080',
            buildPyramid: false,
        },
        // { type: 'image', url: 'http://placekitten.com/500/600', buildPyramid: false },
        // { type: 'image', url: 'http://placekitten.com/700/400', buildPyramid: false }
    ],
    viewerId: 'seadragon-viewer',
    hideNavigation: false,
    libOptions: {
        /* SHOW GROUP */
        showNavigator: false, // shows the mini-map
        autoHideControls: false,
        /* SHOW BUTTONS */
        showRotationControl: false,
        showSequenceControl: true,
        showHomeControl: true,
        showZoomControl: true,
        // showNavigationControl: false,
        /* SEQUENCE */
        sequenceMode: true, // allows having multiple images (as in array of images + zoomed image)
        navigationControlAnchor: 'TOP_RIGHT',
    },
    _setViewer: (viewer) => viewer,
};

const INNER_TITLE_MOCK = {
    icon: { id: 'n7-icon-file3', style: { color: '#2E5BFF' } }, // icon with style
    // icon: 'n7-icon-file3', // simple icon
    image: 'https://picsum.photos/200',
    title: {
        main: {
            text: 'Main text',
            classes: 'bold',
        },
        secondary: {
            text: 'Secondary text',
            classes: 'italic',
        },
    },
    tools: 'Tools text',
    actions: {
        select: {
            label: 'Sort',
            options: [
                { text: 'Price', value: 'price' },
                { text: 'Alphabetic', value: 'alphabetic', selected: true },
                { text: 'By Date', value: 'by-date', disabled: true },
            ],
            payload: 'select-sorting',
        },
        search: {
            placeholder: 'Search',
            payload: 'search-input',
            button: {
                text: 'SEARCH',
                payload: 'search-button',
            },
        },
        buttons: [
            {
                text: 'BUTTON 1',
                anchor: {
                    payload: 'btn1',
                },
                icon: 'n7-icon-file3',
            },
            {
                text: 'BUTTON 2',
                anchor: {
                    href: '/examples',
                },
                classes: 'n7-btn-cta',
            },
        ],
    },
    classes: 'mock-inner-title',
};

const INPUT_CHECKBOX_MOCK = {
    classes: 'checkbox-classes',
    legend: 'checkbox legend',
    checkboxes: [
        {
            id: 'check-00',
            label: 'Email',
        },
        {
            id: 'check-01',
            label: 'A normal check',
        },
        {
            id: 'check-02',
            label: 'A disabled check',
            disabled: true,
        },
        {
            id: 'check-03',
            label: 'A checked check',
            checked: true,
        },
        {
            id: 'check-04',
            label: 'A forced "ON" check',
            checked: true,
            disabled: true,
        },
    ],
};

const INPUT_LINK_MOCK = {
    links: [
        {
            icon: 'n7-icon-archive',
            text: 'First filter',
            counter: 0,
            payload: 'first filter',
            classes: 'is-active',
        },
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
            counter: 18,
            payload: 'second filter',
        },
        {
            icon: 'n7-icon-archive',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
            counter: 18,
            payload: 'second filter',
        },
        {
            text: 'third filter',
            counter: 11,
            payload: 'third filter',
        },
        {
            text: 'lorem',
            counter: 7,
            payload: 'fourth filter',
        },
        {
            text: 'last filter',
            counter: 31,
            payload: 'last filter',
        },
        {
            icon: 'n7-icon-archive',
            text: 'First filter',
            counter: 1232143,
            payload: 'first filter',
            classes: 'is-active',
        },
        {
            text: 'second filter',
            counter: 18,
            payload: 'second filter',
        },
        {
            text: 'third filter',
            counter: 11,
            payload: 'third filter',
            classes: 'is-active',
        },
        {
            text: 'fourth filter',
            counter: 7,
            payload: 'fourth filter',
        },
        {
            text: 'last filter',
            counter: 3,
            payload: 'last filter',
        },
    ],
};

const INPUT_SELECT_MOCK = {
    id: 'input-select-1',
    required: true,
    options: [
        {
            value: '',
            label: 'Select...',
            selected: true,
            hidden: true,
        },
        { value: 1, label: 'Option 1' },
        { value: 2, label: 'Option 2', disabled: true },
        { value: 3, label: 'Option 3' },
        { value: 4, label: 'Option 4' },
    ],
    payload: 'select',
};

const INPUT_TEXT_MOCK = {
    id: 'input-text-1',
    label: 'SEARCH LABEL',
    placeholder: 'Search',
    icon: 'n7-icon-search',
    inputPayload: 'search-input',
    enterPayload: 'search-enter',
    iconPayload: 'search-icon',
    classes: 'my-custom-class',
    autocomplete: 'off',
    // type: 'number',
    // min: 10,
    // max: 20,
};

const INPUT_TEXTAREA_MOCK = {
    id: 'input-text-1',
    label: 'TEXT AREA LABEL',
    placeholder: 'Describe your thing here',
    inputPayload: 'textarea-input',
    enterPayload: 'textarea-enter',
    iconPayload: 'textarea-icon',
};

const ITEM_PREVIEW_MOCK = {
    image: 'https://placeimg.com/600/600/nature',
    color: '#4D8FF2',
    title: 'Dummy title text',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    metadata: [
        {
            title: 'Group 1 <em>HTML Title</em>',
            classes: 'group1-class',
            items: [
                {
                    icon: 'n7-icon-home',
                    label: 'name',
                    value: '<em>HTML Value</em>',
                    classes: 'n7-category-place',
                },
                { value: 'value' },
            ],
        },
        {
            title: 'Group 2',
            classes: '',
            items: [
                { icon: 'n7-icon-home', value: '7', classes: 'n7-category-place' },
                { icon: 'n7-icon-home', value: '2', classes: 'n7-category-family' },
                { icon: 'n7-icon-home', value: '4' },
                { icon: 'n7-icon-home' },
            ],
        },
        {
            classes: 'group3-class',
            items: [
                { icon: 'n7-icon-home', value: '2', classes: 'n7-category-place' },
                { icon: 'n7-icon-home', value: '1' },
                { icon: 'n7-icon-home', value: '7' },
            ],
        },
    ],
    anchor: {
        payload: 'https://www.netseven.it/',
        href: '/examples',
        target: '_blank',
    },
    classes: 'is-vertical is-frontpage has-image', // leave it empty for default horizontal layout or 'is-overlay'
};

const LOADER_MOCK = {
    classes: 'loader-test',
};

const MAP_MOCK = {
    containerId: 'map-canvas',
    tileLayers: [
        {
            url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
            options: {},
        },
    ],
    initialView: {
        center: [51.505, -0.09],
        zoom: 13,
    },
    markers: [
        {
            coords: [51.505, -0.09],
            template: 'This is the center of the map',
            title: 'London',
        },
        {
            coords: [51.495, -0.1],
            template: 'Elephant and castle',
        },
        {
            coords: [51.46687084654015, -0.2130156755447388],
            template: 'Putney bridge',
        },
    ],
};

/**
 * Mock Codebase
 */
const METADATA_VIEWER_MOCK = {
    classes: 'example-class',
    group: [
        {
            title: 'Metadata group lv1',
            items: [
                {
                    label: 'Label',
                    value: "<p>Secondo quanto stabilito dall'articolo 121 della Costituzione della Repubblica italiana e dallo Statuto della Regione Sardegna (articolo 34 della legge costituzionale 3/1948), la Giunta è l'organo esecutivo regionale che ha il compito di governare e amministrare la </p>",
                },
                { label: 'Label' },
            ],
            classes: 'example-class2',
            group: [
                {
                    title: 'Metadata group lv2',
                    items: [{ label: 'Label', value: 'Value' }],
                    group: [
                        {
                            group: [
                                {
                                    title: 'Metadata group lv3',
                                    items: [
                                        { label: 'Label', value: 'Value' },
                                        { label: 'Label', value: 'Value' },
                                        { label: 'Label', value: 'Value' },
                                        { label: 'Label', value: 'Value' },
                                    ],
                                },
                            ],
                        },
                        {
                            group: [
                                {
                                    title: 'Metadata group lv3',
                                    items: [
                                        { label: 'Label', value: 'Value' },
                                        { label: 'Label', value: 'Value' },
                                        { label: 'Label', value: 'Value' },
                                        { label: 'Label', value: 'Value' },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    title: 'Metadata group lv1',
                    items: [
                        { label: 'Label', value: 'Value' },
                        { label: 'Label', value: 'Value' },
                    ],
                    group: [
                        {
                            title: 'Metadata group lv2',
                            items: [{ label: 'Label', value: 'Value' }],
                        },
                    ],
                },
            ],
        },
    ],
};
/**
 * Mock Arianna Web
 */
//
// export const METADATA_VIEWER_MOCK: MetadataViewerData = {
// }
//
//

const NAV_MOCK = {
    items: [
        {
            text: 'Home',
            anchor: {
                href: 'https://google.com',
                target: '_blank',
                payload: 'clicked!',
            },
        },
        {
            text: 'Single level',
            anchor: { payload: 'clicked!' },
            image: 'http://placekitten.com/200/300',
        },
        {
            text: 'Single level 2',
            anchor: { payload: 'clicked!' },
            image: 'http://placekitten.com/10/10',
        },
        {
            text: 'Test SVG',
            anchor: { payload: 'clicked!' },
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Test.svg',
        },
        {
            text: 'Stuff',
            image: 'http://placekitten.com/200/300',
            icon: {
                id: 'n7-icon-archway',
                payload: 'icon-primary',
            },
            iconSecondary: {
                id: 'n7-icon-bell',
                payload: 'icon-secondary',
            },
            anchor: { href: '/examples', target: '_blank', payload: 'clicked!' },
        },
        { text: 'Other stuff', anchor: { payload: 'clicked!' } },
        {
            text: 'Cats',
            anchor: { href: '/examples', target: '_blank', payload: 'clicked!' },
        },
    ],
};

const PAGINATION_MOCK = {
    first: { classes: 'is-disabled', text: 'First', anchor: { href: '/first' } },
    prev: { classes: 'is-disabled', anchor: { payload: 'prev' } },
    next: { text: 'Next', anchor: { href: '/next' } },
    last: { text: 'Last', anchor: { payload: 'last' } },
    links: [
        {
            text: '1',
            classes: 'is-active',
            anchor: { href: '/link-1', target: '_blank' },
        },
        { text: '2', anchor: { payload: 'page 2' } },
        { text: '3', anchor: { payload: 'page 3' } },
        { text: '4', anchor: { payload: 'page 4' } },
        { text: '5', anchor: { payload: 'page 5' } },
    ],
    select: {
        label: 'Numero di risultati',
        options: [
            { text: '10' },
            { text: '25', selected: true },
            { text: '50', disabled: true },
        ],
        payload: 'select',
    },
};

const PROGRESS_LINE_MOCK = {
    label: 'left_label',
    value: 70,
};

const SIDEBAR_HEADER_MOCK = {
    iconLeft: 'n7-icon-tree-icon',
    text: 'Albero di navigazione',
    additionalText: '10.324.592',
    iconRight: 'n7-icon-angle-left',
    classes: 'is-expanded',
    payload: 'header',
};

const SIGNUP_MOCK = {
    login: {
        email: {
            classes: 'email-extra-class',
            id: 'login-email',
            label: 'Email',
            inputType: 'email',
            payload: 'login-email',
        },
        password: {
            id: 'login-pwd',
            label: 'Password',
            inputType: 'password',
            show: {
                icon: 'far fa-eye',
                label: 'Mostra password',
                payload: 'login-show-pwd',
            },
            payload: 'login-pwd',
        },
        /* forgotPassword: {
          title: 'vai a recupero password',
          label: 'Password dimenticata?',
          payload: 'forgot-pwd',
        }, */
        submit: {
            label: 'Entra',
            payload: 'login-submit',
        },
        /* footer: {
          label: 'Non hai un account?',
          action: {
            label: 'Registrati',
            payload: 'go-signup'
          }
        } */
    },
    signup: {
        name: {
            id: 'signup-name',
            label: 'Nome e cognome',
            inputType: 'text',
            error: 'Il campo Nome e Cognome è obbligatorio!',
            payload: 'signup-name',
        },
        email: {
            id: 'signup-email',
            label: 'Email',
            inputType: 'email',
            payload: 'signup-email',
        },
        password: {
            id: 'signup-pwd',
            label: 'Password',
            inputType: 'password',
            hint: 'La password deve avere fra i 6 e i 10 caratteri e contenere almeno una lettera maiuscola',
            show: {
                icon: 'far fa-eye',
                label: 'Mostra password',
                payload: 'signup-show-pwd',
            },
            payload: 'signup-pwd',
            error: 'Attenzione le password sono diverse',
        },
        rePassword: {
            id: 'signup-repwd',
            label: 'Ripeti Password',
            inputType: 'password',
            payload: 'signup-repwd',
            error: 'Attenzione le password sono diverse',
        },
        submit: {
            label: 'Entra',
            payload: 'signup-submit',
            error: 'Errore di invio dei dati al server',
        },
        footer: {
            label: 'Hai già un account?',
            action: {
                label: 'Entra',
                payload: 'go-login',
            },
        },
    },
    forgotPassword: {
        description: "Inserisci l'indirizzo email lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae lacus eleifend, vestibulum neque nec, dictum eros. Nunc vel risus leo",
        email: {
            id: 'forgot-password-email',
            label: 'Email',
            inputType: 'email',
            payload: 'forgotPassword-email',
        },
        submit: {
            label: 'Reset password',
            payload: 'forgotPassword-submit',
        },
        footer: {
            label: 'Entra nella piattaforma',
            action: {
                label: 'Entra',
                payload: 'go-app',
            },
        },
    },
};

const SIMPLE_AUTOCOMPLETE_MOCK = {
    suggestion: [
        { text: 'surfdome', anchor: { payload: 'dome', href: '/examples' } },
        {
            text: 'surfer joe',
            anchor: {
                payload: 'er joe',
                href: 'https://google.it',
                target: '_blank',
            },
        },
        { text: 'surface', anchor: { payload: 'ace' } },
        { text: 'surfcorner', anchor: { payload: 'corner' } },
        { text: 'windsurf', anchor: { payload: 'wind' } },
        { text: 'bodysurf', anchor: { payload: 'body' } },
        { text: 'autosurf', anchor: { payload: 'auto' } },
        { text: 'sidesurf', anchor: { payload: 'side' } },
        { text: 'ffixsurf', anchor: { payload: 'prefixsuffix' } },
    ],
    classes: 'surfing-autocomplete',
};

const TABLE_MOCK = {
    classes: 'test-layout-table',
    head: [
        {
            classes: 'HEADER',
            cells: [
                {
                    classes: 'CONTENT',
                    content: 'DATA - ORA',
                },
                {
                    classes: 'CONTENT',
                    content: 'SEZIONE',
                },
                {
                    classes: 'CONTENT',
                    content: 'PARAMETRO',
                },
                {
                    classes: 'CONTENT',
                    content: 'VALORE',
                },
            ],
        },
    ],
    body: [
        {
            // first row
            classes: 'BODY',
            _meta: 'A',
            cells: [
                {
                    classes: 'CONTENT',
                    // _meta: '1x1',
                    payload: 'B',
                    content: '<span style="color:red;">10/01/2019 - 10:23</span>',
                    type: 'html',
                },
                {
                    classes: 'CONTENT',
                    // _meta: '1x2',
                    content: 'Ingresso Industriale',
                    type: 'html',
                },
                {
                    classes: 'bold',
                    // _meta: '1x3',
                    content: '<span style="color:blue;">&bullet;</span> N_NH4',
                    type: 'html',
                },
                {
                    content: '9 mg/l',
                    // _meta: '1x4',
                    type: 'html',
                },
            ],
        },
        {
            // second row
            classes: 'BODY',
            _meta: 'B',
            cells: [
                {
                    classes: 'CONTENT',
                    _meta: '2x1',
                    payload: 'C',
                    content: '<span style="color:red;">12/01/2019 - 20:54</span>',
                    type: 'html',
                },
                {
                    classes: 'CONTENT',
                    _meta: '2x2',
                    content: 'Ingresso Civile',
                    type: 'html',
                },
                {
                    classes: 'bold',
                    _meta: '2x3',
                    content: '<span style="color:purple;">&bullet;</span> Ossigeno mg/l',
                    type: 'html',
                },
                {
                    content: '100 mg/l',
                    _meta: { id: '2x4', inputId: '_text_input_2x4' },
                    payload: { id: '2x4' },
                    type: 'html',
                },
            ],
        },
        {
            // third row
            classes: 'BODY',
            _meta: 'C',
            cells: [
                {
                    classes: 'CONTENT',
                    _meta: '3x1',
                    payload: 'C',
                    content: '<span style="color:red;">9/01/2019 - 4:12</span>',
                    type: 'html',
                },
                {
                    classes: 'CONTENT',
                    _meta: '3x2',
                    content: 'Preaccumulo',
                    type: 'html',
                },
                {
                    classes: 'bold',
                    _meta: '3x3',
                    content: '<span style="color:purple;">&bullet;</span> Ossigeno mg/l',
                    type: 'html', // 'altro'
                },
                {
                    content: '100 mg/l',
                    _meta: { id: '3x4', inputId: '_text_input_3x4' },
                    payload: { id: '3x4' },
                    type: 'input:text',
                },
            ],
        },
        {
            // fourth row
            classes: 'BODY',
            _meta: 'D',
            cells: [
                {
                    classes: 'CONTENT',
                    _meta: '4x1',
                    content: '8/01/2019 - 3:52',
                    type: 'html',
                },
                {
                    classes: 'CONTENT',
                    _meta: '4x2',
                    content: 'Preaccumulo',
                    type: 'html',
                },
                {
                    classes: 'bold',
                    // _meta: '4x3',
                    content: '<span style="color:green;">&bullet;</span> Redox V',
                    type: 'html',
                },
                {
                    classes: 'input-test',
                    content: '231 V',
                    type: 'html',
                    _meta: { id: 'NPT', inputId: '_text_input_NPT' },
                    payload: { id: 'NPT' },
                },
            ],
        },
    ],
};

const TAG_MOCK = {
    label: 'label: ',
    text: 'text',
    icon: 'n7-icon-close',
    payload: 'tag-payload',
    classes: 'tag1-class',
};

const TEXT_VIEWER_MOCK = {
    // TODO: update with mock values
    endpoint: 'http://staging.teipublisher.netseven.it/exist/apps/tei-publisher',
    // endpoint: 'http://localhost:8081/exist/apps/tei-publisher',
    // endpoint: 'https://teipublisher.com/exist/apps/tei-publisher',
    docs: [
        {
            xml: 'petrarca/de-viris_i_23_3_2022_1648127195.xml',
            // xml: 'petrarca/petrarca_seniles-1_1654626178-1_1665152343.xml',
            rootPath: 'api/mrcparts',
            odd: 'petrarca_1-1',
            id: 'seniles',
            view: 'div',
            download: '',
            url: 'http://petrarca-sls.netseven.it/search_text_hl?root=1.4.2.2.6.8&query-text=kempen&resource-id=5&xml=petrarca/petrarca_seniles-1_1654626178-1_1665152343.xml&searchId=xml_text',
        },
        /* {
          // xml: 'test/graves6.xml',
          xml: 'mambrino/1660136990_SM1_commentary_082022-2.xml',
          odd: 'mambrino_2-0',
          id: 'seniles2',
          view: 'page',
          channel: 'altrochannel',
        }, */
    ],
    download: {
        label: 'Download',
        file: 'http://staging.teipublisher.netseven.it/exist/apps/tei-publisher/api/document/mambrino%2Fsm1_source_def_1647334393.xml',
        format: 'XML',
    },
    labels: {
        toc: 'table of contents',
        loading: 'loading',
        view: 'view',
        select: {
            label: 'Entità',
            type: {
                all: 'Tutti',
                person: 'Personaggi',
                place: 'Luoghi',
            },
        },
        index: {
            show: 'Riassunto',
            hide: 'Indici',
        },
    },
    facsimile: {
        uri: 'https://dh.dlls.univr.it/iiif/3/mambrino%2famadis-13_1-1558BNE%2f',
        // uri: 'http://127.0.0.1:8182/iiif/3/',
        scans: [],
    },
};

const TIMELINE_MOCK = {
    containerID: 'demo-timeline',
    libOptions: {
        height: '500px',
        locale: 'it_IT',
        cluster: {
            // contentTemplate: '{count}',
            // fitOnDoubleClick: true,
            clusterCriteria: (f, s) => f.content.charAt(0) === s.content.charAt(0),
        },
        showTooltips: false,
        tooltip: {
            followMouse: false,
            template: (data, element) => `<div class="tooltip">${element.content}</div>`,
        },
        width: '100%',
        minHeight: '350px',
        maxHeight: '800px',
        // zoomMax: 31557600000, // one year
        zoomFriction: 8,
    },
    dataSet: [
        {
            id: 788,
            content: 'Luigi Capuana, Fiabe e favole classiche',
            start: '01-01-1882',
            end: '01-01-1913',
        },
        {
            id: 786,
            content: 'Fernan Caballero, Cuentos, adivinanzas y refranes populares',
            start: '01-01-1921',
        },
        {
            id: 784,
            content: 'Charles Perrault, I racconti di mamma oca',
            start: '01-01-1697',
        },
        {
            id: 782,
            content: 'Fratelli Grimm, Fiabe del focolare',
            start: '01-01-1812',
        },
        {
            id: 776,
            content: 'Giovanni Francesco Straparola, Le piacevoli notti',
            start: '01-01-1550',
        },
        {
            id: 773,
            content: 'Autore ignoto, Novellino',
            start: '01-01-1201',
            end: '01-01-1300',
        },
        {
            id: 770,
            content: 'Italo Calvino, Fiabe Italiane',
            start: '01-01-1956',
        },
        {
            id: 764,
            content: 'Giovan Battista Basile, Lo Cunto de li Cunti',
            start: '01-01-1634',
            end: '01-01-1636',
        },
        {
            id: 756,
            content: 'Hans Christian Andersen, Fiabe',
            start: '01-01-1843',
        },
        {
            id: 752,
            content: 'Fedro, Fabulae',
            start: '01-01-1',
            end: '01-01-100',
        },
        {
            id: 717,
            content: 'Esopo, Favole (Aἰσώπου μῦθοι)',
            start: '-01-01-600',
            end: '-01-01-501',
        },
        {
            id: 710,
            content: 'Elsie Spicer Eels, Fairy tales from Brazil',
            start: '01-01-1918',
        },
        {
            id: 700,
            content: 'Guido Gozzano, Fiabe per “Il Corriere dei Piccoli”',
            start: '01-01-1909',
            end: '01-01-1914',
        },
        {
            id: 694,
            content: 'Aleksandr Nikolaevič Afanas’ev, Favole popolari russe (Narodnye russkie skazki)',
            start: '01-01-1855',
            end: '01-01-1864',
        },
        {
            id: 689,
            content: 'Autori sconosciuti, Le mille e una notte (ألف ليلة وليلة‎)',
            start: '01-01-1001',
            end: '01-01-1100',
        },
        {
            id: 687,
            content: 'Gianni Rodari, Favole al telefono',
            start: '01-01-1962',
        },
        {
            id: 681,
            content: 'Giuseppe Pitrè, Fiabe, novelle e racconti popolari siciliani',
            start: '01-01-1875',
        },
        {
            id: 673,
            content: 'Verità e Menzogna',
            start: '-01-01-1300',
            end: '-01-01-1201',
        },
        {
            id: 671,
            content: 'Il principe predestinato',
            start: '-01-01-1300',
            end: '-01-01-1201',
        },
        {
            id: 669,
            content: 'La Cenerentola Egiziana',
            start: '-01-01-1300',
            end: '-01-01-1201',
        },
    ],
    _setInstance: (timeline) => timeline,
};

const TOAST_MOCK = {
    toasts: [
        {
            // array of toast boxes
            classes: 'is-warning',
            title: 'Title',
            text: 'Questo messaggio ha soltanto un titolo e del testo, è di tipo is-warning ed ha un tempo di 15 secondi',
            closeIcon: {
                icon: 'n7-icon-close',
                payload: 'closing',
            },
        },
        {
            classes: 'is-warning',
            title: 'Title',
            text: 'Questo messaggio ha soltanto un titolo e del testo, è di tipo is-warning ed ha un tempo di 15 secondi',
        },
        {
            classes: 'is-success',
            title: 'Titolo e close-icon',
            closeIcon: {
                icon: 'n7-icon-close',
                payload: 'closing',
            },
        },
        {
            classes: 'is-error',
            text: "Questo è un messaggio di tipo is-error con un pulsante che chiede all'utente la conferma di presa visione.",
            actions: [
                {
                    text: 'HO CAPITO',
                    payload: 'ho capito',
                    classes: 'n7-btn-light',
                },
            ],
        },
        {
            classes: 'is-warning',
            text: 'Questo messaggio non ha titolo, è di tipo is-warning e seguono due pulsanti.',
            actions: [
                {
                    text: 'NO',
                    payload: 'NO',
                },
                {
                    text: 'SI',
                    payload: 'SI',
                    classes: 'n7-btn-cta',
                },
            ],
        },
        {
            classes: 'is-warning',
            title: 'Title',
            text: 'Questo messaggio ha soltanto un titolo e del testo, è di tipo is-warning ed ha un tempo di 15 secondi',
        },
        {
            classes: 'is-info',
            icon: 'n7-icon-bell',
            title: 'Toast & Icon',
            text: "Questo messaggio contiene un'icona di accompagnamento, è di tipo is-info ed ha un tempo di 15 secondi",
        },
    ],
};

const TOOLTIP_CONTENT_MOCK = {
    title: 'Title',
    text: '<span>subtitle or text for the <strong>tooltip content</strong> component</span>',
    image: 'https://placeimg.com/150/150/tech/grayscale',
    actions: [
        {
            text: 'ClickMe',
            anchor: {
                payload: 'ClickMe',
            },
        },
        {
            text: 'DontClickHim',
            anchor: {
                payload: 'DontClickHim',
            },
        },
    ],
};

const TREE_MOCK = {
    items: [
        {
            text: "Collezione d'arte",
            classes: 'is-collapsed',
            anchor: {
                href: 'https://google.it',
                target: '_blank',
            },
        },
        {
            text: 'Centro archivi',
            anchor: {
                href: '/home',
                target: '_blank',
            },
            classes: 'is-expanded',
            items: [
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle',
                    },
                    text: '5+1AA Agenzia di Architettura',
                    classes: 'is-collapsed',
                    anchor: { payload: '' },
                    iconright: 'n7-icon-images',
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-down',
                        payload: 'toggle',
                    },
                    text: 'ABDR Architetti Associati',
                    classes: 'is-expanded is-active',
                    anchor: { payload: '' },
                    items: [
                        {
                            toggle: {
                                icon: 'n7-icon-angle-down',
                                payload: 'toggle',
                            },
                            text: '5+1AA Agenzia di Architettura',
                            classes: 'is-expanded',
                            anchor: { payload: '' },
                            items: [
                                {
                                    toggle: {
                                        icon: 'n7-icon-angle-right',
                                        payload: 'toggle',
                                    },
                                    text: '5+1AA Agenzia di Architettura',
                                    classes: 'is-collapsed',
                                    anchor: { payload: '' },
                                },
                                {
                                    toggle: {
                                        icon: 'n7-icon-angle-down',
                                        payload: 'toggle',
                                    },
                                    text: 'ABDR Architetti Associati',
                                    classes: 'is-expanded',
                                    anchor: { payload: '' },
                                    items: [
                                        {
                                            toggle: {
                                                icon: 'n7-icon-angle-down',
                                                payload: 'toggle',
                                            },
                                            text: '5+1AA Agenzia di Architettura',
                                            classes: 'is-expanded',
                                            anchor: { payload: '' },
                                            items: [
                                                {
                                                    toggle: {
                                                        icon: 'n7-icon-angle-right',
                                                        payload: 'toggle',
                                                    },
                                                    text: '5+1AA Agenzia di Architettura',
                                                    classes: 'is-collapsed',
                                                    anchor: { payload: '' },
                                                },
                                                {
                                                    toggle: {
                                                        icon: 'n7-icon-angle-right',
                                                        payload: 'toggle',
                                                    },
                                                    text: 'ABDR Architetti Associati',
                                                    classes: 'is-collapsed',
                                                    anchor: { payload: '' },
                                                },
                                            ],
                                        },
                                        {
                                            toggle: {
                                                icon: 'n7-icon-angle-right',
                                                payload: 'toggle',
                                            },
                                            text: 'ABDR Architetti Associati',
                                            classes: 'is-collapsed',
                                            anchor: { payload: '' },
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            toggle: {
                                icon: 'n7-icon-angle-right',
                                payload: 'toggle',
                            },
                            text: 'ABDR Architetti Associati',
                            classes: 'is-collapsed',
                            anchor: { payload: '' },
                        },
                    ],
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle',
                    },
                    text: 'AWP',
                    classes: 'is-collapsed',
                    anchor: { payload: '' },
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle',
                    },
                    text: 'BOERI Cini',
                    classes: 'is-collapsed',
                    anchor: { payload: '' },
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle',
                    },
                    text: 'CAMPO BAEZA Alberto',
                    classes: 'is-collapsed',
                    anchor: { payload: '' },
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle',
                    },
                    text: 'CASSANI Matilde',
                    classes: 'is-collapsed',
                    anchor: { payload: '' },
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle',
                    },
                    text: 'GUERRI Danilo',
                    classes: 'is-collapsed',
                    anchor: { payload: '' },
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-right',
                        payload: 'toggle',
                    },
                    text: 'Has childs, but is closed!',
                    classes: 'is-collapsed',
                    anchor: { payload: '' },
                    items: [
                        {
                            icon: 'n7-icon-file3',
                            text: 'Child: Cinema teatro Augusteo e stazione centrale della funicolare, Napoli ([1926] - [1927])',
                            anchor: { payload: '' },
                        },
                        {
                            classes: 'is-active',
                            icon: 'n7-icon-file3',
                            text: 'Child: Stadio comunale G.Berta, Firenze ([1929] - [1932])',
                            anchor: { payload: '' },
                        },
                        {
                            icon: 'n7-icon-file3',
                            text: 'Child: Monumento alla Bandiera, Roma (1931)',
                            anchor: { payload: '' },
                        },
                        {
                            img: 'http://placeimg.com/25/25/arch/grayscale',
                            text: 'Child: Brevetto hangar circolare con piattaforma anulare rotante (1932)',
                            anchor: { payload: '' },
                        },
                        {
                            img: 'http://placeimg.com/25/25/arch/grayscale',
                            text: 'Child: Stadio da 120.000 posti, Roma ([1933])',
                            anchor: { payload: '' },
                            classes: 'is-active',
                        },
                        {
                            icon: 'n7-icon-file3',
                            text: 'Child: Magazzino ([1934])',
                            anchor: { payload: '' },
                            classes: 'is-active',
                        },
                        {
                            icon: 'n7-icon-file3',
                            text: 'Child: Aviorimesse, Orvieto (TR), Orbetello (GR), Torre del Lago (LU), Marsala (TP), Trapani ([1935] - 1941)',
                            anchor: { payload: '' },
                        },
                    ],
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-down',
                        payload: 'toggle',
                    },
                    text: 'NERVI Pier Luigi',
                    classes: 'is-expanded',
                    anchor: { payload: '' },
                },
                {
                    toggle: {
                        icon: 'n7-icon-angle-down',
                        payload: 'toggle',
                    },
                    text: 'Attività Professionale',
                    classes: 'is-expanded',
                    anchor: { payload: '' },
                    items: [
                        {
                            icon: 'n7-icon-file3',
                            text: 'Cinema teatro Augusteo e stazione centrale della funicolare, Napoli ([1926] - [1927])',
                            anchor: { payload: '' },
                        },
                        {
                            classes: 'is-active',
                            icon: 'n7-icon-file3',
                            text: 'Stadio comunale G.Berta, Firenze ([1929] - [1932])',
                            anchor: { payload: '' },
                        },
                        {
                            icon: 'n7-icon-file3',
                            text: 'Monumento alla Bandiera, Roma (1931)',
                            anchor: { payload: '' },
                        },
                        {
                            img: 'http://placeimg.com/25/25/arch/grayscale',
                            text: 'Brevetto hangar circolare con piattaforma anulare rotante (1932)',
                            anchor: { payload: '' },
                        },
                        {
                            img: 'http://placeimg.com/25/25/arch/grayscale',
                            text: 'Stadio da 120.000 posti, Roma ([1933])',
                            anchor: { payload: '' },
                            classes: 'is-active',
                        },
                        {
                            icon: 'n7-icon-file3',
                            text: 'Magazzino ([1934])',
                            anchor: { payload: '' },
                            classes: 'is-active',
                        },
                        {
                            icon: 'n7-icon-file3',
                            text: 'Aviorimesse, Orvieto (TR), Orbetello (GR), Torre del Lago (LU), Marsala (TP), Trapani ([1935] - 1941)',
                            anchor: { payload: '' },
                        },
                    ],
                },
            ],
        },
    ],
};

const WIZARD_MOCK = {
    items: [
        {
            number: 1,
            text: 'First step',
            payload: '/',
            classes: '',
        },
        {
            number: 2,
            text: 'Second step',
            payload: '/',
            classes: 'is-active',
        },
        {
            number: 3,
            text: 'Third step',
            payload: '/',
            classes: '',
        },
        {
            number: 4,
            text: 'Fourth step',
            payload: '/',
            classes: '',
        },
    ],
};

/*
 * Public API Surface of dv-components-lib
 */
// module

/**
 * Generated bundle index. Do not edit.
 */

export { ADVANCED_AUTOCOMPLETE_MOCK, ALERT_MOCK, AVATAR_MOCK, AdvancedAutocompleteComponent, AlertComponent, AnchorWrapperComponent, AvatarComponent, BREADCRUMBS_MOCK, BUBBLECHART_MOCK, BUTTON_MOCK, BreadcrumbsComponent, BubbleChartComponent, ButtonComponent, CAROUSEL_MOCK, CHART_MOCK, CONTENT_PLACEHOLDER_MOCK, CarouselComponent, ChartComponent, ContentPlaceholderComponent, DATA_WIDGET_MOCK, DATEPICKER_MOCK, DataWidgetComponent, DatepickerComponent, DvComponentsLibModule, FACET_HEADER_MOCK, FACET_MOCK, FACET_YEAR_RANGE_MOCK, FILE_SELECTOR_MOCK, FOOTER_MOCK, FacetComponent, FacetHeaderComponent, FacetYearRangeComponent, FileSelectorComponent, FooterComponent, HEADER_MOCK, HERO_MOCK, HISTOGRAM_RANGE_MOCK, HeaderComponent, HeroComponent, HistogramRangeComponent, ICON_MOCK, IMAGE_VIEWER_MOCK, IMAGE_VIEWER_TOOLS_MOCK, INNER_TITLE_MOCK, INPUT_CHECKBOX_MOCK, INPUT_LINK_MOCK, INPUT_SELECT_MOCK, INPUT_TEXTAREA_MOCK, INPUT_TEXT_MOCK, ITEM_PREVIEW_MOCK, IconComponent, ImageViewerComponent, ImageViewerToolsComponent, InnerTitleComponent, InputCheckboxComponent, InputLinkComponent, InputSelectComponent, InputTextComponent, InputTextareaComponent, ItemPreviewComponent, LOADER_MOCK, LoaderComponent, MAP_MOCK, METADATA_VIEWER_MOCK, MapComponent, MetadataViewerComponent, NAV_MOCK, NavComponent, PAGINATION_MOCK, PROGRESS_LINE_MOCK, PaginationComponent, ProgressLineComponent, SIDEBAR_HEADER_MOCK, SIGNUP_MOCK, SIMPLE_AUTOCOMPLETE_MOCK, SidebarHeaderComponent, SignupComponent, SimpleAutocompleteComponent, TABLE_MOCK, TAG_MOCK, TEXT_VIEWER_MOCK, TIMELINE_MOCK, TOAST_MOCK, TOOLTIP_CONTENT_MOCK, TREE_MOCK, TableComponent, TagComponent, TextViewerComponent, TimelineComponent, ToastComponent, TooltipContentComponent, TreeComponent, WIZARD_MOCK, WizardComponent };
//# sourceMappingURL=net7-components.mjs.map
