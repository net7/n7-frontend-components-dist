//---------------------------
// IMAGE-VIEWER-TOOLS.ts
//---------------------------
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../anchor-wrapper/anchor-wrapper";
import * as i2 from "@angular/common";
/**
 * ImageViewerToolsComponent <n7-image-viewer-tools>
 */
export class ImageViewerToolsComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload); // click
    }
}
ImageViewerToolsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: ImageViewerToolsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ImageViewerToolsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: ImageViewerToolsComponent, selector: "n7-image-viewer-tools", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<!-- <div *ngIf=\"data\" class=\"n7-image-viewer-tools\">\n    <div class=\"n7-image-viewer-tools__bar\">\n        <div class=\"n7-image-viewer-tools__controls\">\n            <div class=\"n7-image-viewer-tools__btn-container\">\n                <ng-container *ngIf=\"data.controls.description\">\n                    <n7-anchor-wrapper \n                    class=\"n7-hero__btn n7-btn n7-btn-cta n7-btn-l n7-image-viewer-tools__btnDescription {{data.classes.description.className || ''}}\"\n                    [data]=\"data.controls.description.anchor\"\n                    (clicked)=\"onClick($event)\">\n                        <span class=\"{{data.controls.description.icon}}\"></span>\n                    </n7-anchor-wrapper>\n                </ng-container>\n            </div>\n\n            <div class=\"n7-image-viewer-tools__btn-container\">\n                <ng-container *ngIf=\"data.controls.thumbs\">\n                    <n7-anchor-wrapper \n                    class=\"n7-hero__btn n7-btn n7-btn-cta n7-btn-l n7-image-viewer-tools__btnThumbs {{data.classes.thumbs.className || ''}}\"\n                    [data]=\"data.controls.thumbs.anchor\"\n                    (clicked)=\"onClick($event)\">\n                        <span class=\"{{data.controls.thumbs.icon}}\"></span>\n                    </n7-anchor-wrapper>\n                </ng-container>\n            </div>\n        </div>\n\n        <div class=\"n7-image-viewer-tools__thumbs\" \n            *ngIf=\"data.isVisible.thumbnails && data.images\" >\n            <div *ngFor=\"let img of data.images; let imgIndex = index\" \n                class=\"n7-image-viewer-tools__thumb-container\"\n                [class.active]=\"imgIndex == data.initial\">\n                <img\n                    src=\"{{img.thumb}}\"\n                    (click)=\"onClick(img.payload)\" >\n            </div>\n        </div>\n\n        <div class=\"n7-image-viewer-tools__description\" \n            *ngIf=\"data.isVisible.description\" >\n            <div [innerHTML]=\"data.description\"></div>\n            <div class=\"n7-image-viewer-tools__description-closebtn\"\n                (click)=\"onClick(data.controls.closedescription.anchor.payload)\">\n                <span class=\"{{data.controls.closedescription.icon}}\"></span>\n            </div>\n        </div>\n    </div>\n</div> -->\n\n<!-- n7-hero__btn n7-btn n7-btn-cta n7-btn-l n7-image-viewer-tools__btnDescription -->\n<!-- n7-hero__btn n7-btn n7-btn-cta n7-btn-l n7-image-viewer-tools__btnThumbs -->\n\n<div *ngIf=\"data\" class=\"n7-image-viewer-tools {{data.classes || ''}}\">\n    <div class=\"n7-image-viewer-tools__bar\">\n        <div class=\"n7-image-viewer-tools__controls\">\n            <div class=\"n7-image-viewer-tools__control-wrapper\">\n                <ng-container *ngIf=\"data.controls.description && data.description\">\n                    <n7-anchor-wrapper \n                    class=\"n7-image-viewer-tools__control-btn\"\n                    [ngClass]=\"{\n                        'is-active': data.controls.description.isActive\n                    }\"\n                    [data]=\"data.controls.description.anchor\"\n                    (clicked)=\"onClick($event)\">\n                    <!-- $event -->\n                        <span class=\"n7-image-viewer-tools__control-btn-icon {{data.controls.description.icon}}\"></span>\n                    </n7-anchor-wrapper>\n                </ng-container>\n            </div>\n\n            <div class=\"n7-image-viewer-tools__control-wrapper\">\n                <ng-container *ngIf=\"data.controls.thumbs\">\n                    <n7-anchor-wrapper \n                    class=\"n7-image-viewer-tools__control-btn\"\n                    [ngClass]=\"{\n                        'is-active': data.controls.thumbs.isActive\n                    }\"\n                    [data]=\"data.controls.thumbs.anchor\"\n                    (clicked)=\"onClick($event)\">\n                    <!-- $event -->\n                        <span class=\"n7-image-viewer-tools__control-btn-icon {{data.controls.thumbs.icon}}\"></span>\n                    </n7-anchor-wrapper>\n                </ng-container>\n            </div>\n        </div>\n\n        <div class=\"n7-image-viewer-tools__thumbs-description\">\n            <div class=\"n7-image-viewer-tools__thumbs\" \n                *ngIf=\"data.isVisible.thumbnails && data.images\" >\n                <div class=\"n7-image-viewer-tools__thumbs-strip\">\n                    <div *ngFor=\"let img of data.images; let imgIndex = index\" \n                        class=\"n7-image-viewer-tools__thumb\"\n                        [class.active]=\"imgIndex == data.initial\">\n                        <img\n                            class=\"n7-image-viewer-tools__thumb-image\"\n                            src=\"{{img.thumb}}\"\n                            (click)=\"onClick(img.payload)\" >\n                    </div>\n                </div> \n                \n                <ng-container *ngIf=\"data.navigation\">\n                    <div\n                    class=\"{{ data.navigation.prev.classes || '' }}\"\n                    (click)=\"onClick(data.navigation.prev.payload)\">\n                    <!-- (click)=\"\" -->\n                        <span class=\"n7-icon-angle-left\"></span>\n                    </div>\n                    <div\n                    class=\"{{ data.navigation.next.classes || '' }}\"\n                    (click)=\"onClick(data.navigation.next.payload)\">\n                        <span class=\"n7-icon-angle-right\"></span>\n                    </div>\n                </ng-container>\n\n                <!-- <ng-container *ngIf=\"data.navigation as nav\">\n                    <div \n                    classes=\"{{ nav.prev.classes || '' }}\" \n                    (click)=\"onClick(nav.prev.payload)\">\n                        <span class=\"n7-icon-angle-left\"></span>\n                    </div>\n                    <div \n                    classes=\"{{ nav.next.classes || '' }}\" \n                    (click)=\"onClick(nav.next.payload)\">\n                        <span class=\"n7-icon-angle-right\"></span>\n                    </div>\n                </ng-container> -->\n\n                <!-- <ng-container *ngIf=\"data.navigation as nav\">\n                    <div \n                    classes=\"{{ nav.prev.classes || '' }}\" \n                    (click)=\"onClick(nav.prev.payload)\">\n                        <span class=\"n7-icon-angle-left\"></span>\n                    </div>\n                    <div \n                    classes=\"{{ nav.next.classes || '' }}\" \n                    (click)=\"onClick(nav.next.payload)\">\n                        <span class=\"n7-icon-angle-right\"></span>\n                    </div>\n                </ng-container> -->\n            </div>\n\n            <div class=\"n7-image-viewer-tools__description\" \n                *ngIf=\"data.isVisible.description\" >\n                <div class=\"n7-image-viewer-tools__description-close\"\n                    (click)=\"onClick(data.controls.closedescription.anchor.payload)\">\n                    <!-- data.controls.closedescription.anchor.payload -->\n                    <span class=\"{{data.controls.closedescription.icon}}\"></span>\n                </div>\n                <div class=\"n7-image-viewer-tools__description-text-wrapper\">\n                    <div class=\"n7-image-viewer-tools__description-text\" [innerHTML]=\"data.description\"></div>\n                </div>\n                \n            </div>\n        </div> \n    </div>\n</div>\n", components: [{ type: i1.AnchorWrapperComponent, selector: "n7-anchor-wrapper", inputs: ["data", "classes"], outputs: ["clicked"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: ImageViewerToolsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-image-viewer-tools', template: "<!-- <div *ngIf=\"data\" class=\"n7-image-viewer-tools\">\n    <div class=\"n7-image-viewer-tools__bar\">\n        <div class=\"n7-image-viewer-tools__controls\">\n            <div class=\"n7-image-viewer-tools__btn-container\">\n                <ng-container *ngIf=\"data.controls.description\">\n                    <n7-anchor-wrapper \n                    class=\"n7-hero__btn n7-btn n7-btn-cta n7-btn-l n7-image-viewer-tools__btnDescription {{data.classes.description.className || ''}}\"\n                    [data]=\"data.controls.description.anchor\"\n                    (clicked)=\"onClick($event)\">\n                        <span class=\"{{data.controls.description.icon}}\"></span>\n                    </n7-anchor-wrapper>\n                </ng-container>\n            </div>\n\n            <div class=\"n7-image-viewer-tools__btn-container\">\n                <ng-container *ngIf=\"data.controls.thumbs\">\n                    <n7-anchor-wrapper \n                    class=\"n7-hero__btn n7-btn n7-btn-cta n7-btn-l n7-image-viewer-tools__btnThumbs {{data.classes.thumbs.className || ''}}\"\n                    [data]=\"data.controls.thumbs.anchor\"\n                    (clicked)=\"onClick($event)\">\n                        <span class=\"{{data.controls.thumbs.icon}}\"></span>\n                    </n7-anchor-wrapper>\n                </ng-container>\n            </div>\n        </div>\n\n        <div class=\"n7-image-viewer-tools__thumbs\" \n            *ngIf=\"data.isVisible.thumbnails && data.images\" >\n            <div *ngFor=\"let img of data.images; let imgIndex = index\" \n                class=\"n7-image-viewer-tools__thumb-container\"\n                [class.active]=\"imgIndex == data.initial\">\n                <img\n                    src=\"{{img.thumb}}\"\n                    (click)=\"onClick(img.payload)\" >\n            </div>\n        </div>\n\n        <div class=\"n7-image-viewer-tools__description\" \n            *ngIf=\"data.isVisible.description\" >\n            <div [innerHTML]=\"data.description\"></div>\n            <div class=\"n7-image-viewer-tools__description-closebtn\"\n                (click)=\"onClick(data.controls.closedescription.anchor.payload)\">\n                <span class=\"{{data.controls.closedescription.icon}}\"></span>\n            </div>\n        </div>\n    </div>\n</div> -->\n\n<!-- n7-hero__btn n7-btn n7-btn-cta n7-btn-l n7-image-viewer-tools__btnDescription -->\n<!-- n7-hero__btn n7-btn n7-btn-cta n7-btn-l n7-image-viewer-tools__btnThumbs -->\n\n<div *ngIf=\"data\" class=\"n7-image-viewer-tools {{data.classes || ''}}\">\n    <div class=\"n7-image-viewer-tools__bar\">\n        <div class=\"n7-image-viewer-tools__controls\">\n            <div class=\"n7-image-viewer-tools__control-wrapper\">\n                <ng-container *ngIf=\"data.controls.description && data.description\">\n                    <n7-anchor-wrapper \n                    class=\"n7-image-viewer-tools__control-btn\"\n                    [ngClass]=\"{\n                        'is-active': data.controls.description.isActive\n                    }\"\n                    [data]=\"data.controls.description.anchor\"\n                    (clicked)=\"onClick($event)\">\n                    <!-- $event -->\n                        <span class=\"n7-image-viewer-tools__control-btn-icon {{data.controls.description.icon}}\"></span>\n                    </n7-anchor-wrapper>\n                </ng-container>\n            </div>\n\n            <div class=\"n7-image-viewer-tools__control-wrapper\">\n                <ng-container *ngIf=\"data.controls.thumbs\">\n                    <n7-anchor-wrapper \n                    class=\"n7-image-viewer-tools__control-btn\"\n                    [ngClass]=\"{\n                        'is-active': data.controls.thumbs.isActive\n                    }\"\n                    [data]=\"data.controls.thumbs.anchor\"\n                    (clicked)=\"onClick($event)\">\n                    <!-- $event -->\n                        <span class=\"n7-image-viewer-tools__control-btn-icon {{data.controls.thumbs.icon}}\"></span>\n                    </n7-anchor-wrapper>\n                </ng-container>\n            </div>\n        </div>\n\n        <div class=\"n7-image-viewer-tools__thumbs-description\">\n            <div class=\"n7-image-viewer-tools__thumbs\" \n                *ngIf=\"data.isVisible.thumbnails && data.images\" >\n                <div class=\"n7-image-viewer-tools__thumbs-strip\">\n                    <div *ngFor=\"let img of data.images; let imgIndex = index\" \n                        class=\"n7-image-viewer-tools__thumb\"\n                        [class.active]=\"imgIndex == data.initial\">\n                        <img\n                            class=\"n7-image-viewer-tools__thumb-image\"\n                            src=\"{{img.thumb}}\"\n                            (click)=\"onClick(img.payload)\" >\n                    </div>\n                </div> \n                \n                <ng-container *ngIf=\"data.navigation\">\n                    <div\n                    class=\"{{ data.navigation.prev.classes || '' }}\"\n                    (click)=\"onClick(data.navigation.prev.payload)\">\n                    <!-- (click)=\"\" -->\n                        <span class=\"n7-icon-angle-left\"></span>\n                    </div>\n                    <div\n                    class=\"{{ data.navigation.next.classes || '' }}\"\n                    (click)=\"onClick(data.navigation.next.payload)\">\n                        <span class=\"n7-icon-angle-right\"></span>\n                    </div>\n                </ng-container>\n\n                <!-- <ng-container *ngIf=\"data.navigation as nav\">\n                    <div \n                    classes=\"{{ nav.prev.classes || '' }}\" \n                    (click)=\"onClick(nav.prev.payload)\">\n                        <span class=\"n7-icon-angle-left\"></span>\n                    </div>\n                    <div \n                    classes=\"{{ nav.next.classes || '' }}\" \n                    (click)=\"onClick(nav.next.payload)\">\n                        <span class=\"n7-icon-angle-right\"></span>\n                    </div>\n                </ng-container> -->\n\n                <!-- <ng-container *ngIf=\"data.navigation as nav\">\n                    <div \n                    classes=\"{{ nav.prev.classes || '' }}\" \n                    (click)=\"onClick(nav.prev.payload)\">\n                        <span class=\"n7-icon-angle-left\"></span>\n                    </div>\n                    <div \n                    classes=\"{{ nav.next.classes || '' }}\" \n                    (click)=\"onClick(nav.next.payload)\">\n                        <span class=\"n7-icon-angle-right\"></span>\n                    </div>\n                </ng-container> -->\n            </div>\n\n            <div class=\"n7-image-viewer-tools__description\" \n                *ngIf=\"data.isVisible.description\" >\n                <div class=\"n7-image-viewer-tools__description-close\"\n                    (click)=\"onClick(data.controls.closedescription.anchor.payload)\">\n                    <!-- data.controls.closedescription.anchor.payload -->\n                    <span class=\"{{data.controls.closedescription.icon}}\"></span>\n                </div>\n                <div class=\"n7-image-viewer-tools__description-text-wrapper\">\n                    <div class=\"n7-image-viewer-tools__description-text\" [innerHTML]=\"data.description\"></div>\n                </div>\n                \n            </div>\n        </div> \n    </div>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLXRvb2xzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZHYtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2ltYWdlLXZpZXdlci10b29scy9pbWFnZS12aWV3ZXItdG9vbHMudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvaW1hZ2Utdmlld2VyLXRvb2xzL2ltYWdlLXZpZXdlci10b29scy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3Qix3QkFBd0I7QUFDeEIsNkJBQTZCO0FBRTdCLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBOEdqRDs7R0FFRztBQU1ILE1BQU0sT0FBTyx5QkFBeUI7SUFLcEMsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUTtJQUN2QyxDQUFDOztzSEFSVSx5QkFBeUI7MEdBQXpCLHlCQUF5QixxR0MxSHRDLGkvT0EySkE7MkZEakNhLHlCQUF5QjtrQkFKckMsU0FBUzsrQkFDRSx1QkFBdUI7OEJBSXhCLElBQUk7c0JBQVosS0FBSztnQkFFRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSU1BR0UtVklFV0VSLVRPT0xTLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBJbWFnZVZpZXdlckJ1dHRvbnNEYXRhLCBkZWZpbmVzIHRoZSB0aHVtYm5haWxcbiAqIHVybCBhbmQgaXRzIHJlbGF0aXZlIHBheWxvYWRcbiAqIEBwcm9wZXJ0eSB0aHVtYlxuICogQHByb3BlcnR5IHBheWxvYWRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbWFnZVZpZXdlclRodW1iRGF0YSB7XG4gIC8qKlxuICAgKiBUaHVtYm5haWwgVVJMXG4gICAqL1xuICB0aHVtYjogc3RyaW5nO1xuICAvKipcbiAgICogUGF5bG9hZCBvbiB0aHVtYm5haWwgY2xpY2tcbiAgICovXG4gIHBheWxvYWQ6IGFueTtcbiAgLyoqXG4gICAqIFRodW1ibmFpbCBjYXB0aW9uXG4gICAqL1xuICBjYXB0aW9uPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgSW1hZ2VWaWV3ZXJCdXR0b25zRGF0YSwgZGVmaW5lcyB0aGUgbG9vayBhbmRcbiAqIHBheWxvYWQgb2YgdGhlIGNvbnRyb2xzIGJ1dHRvbnNcbiAqIEBwcm9wZXJ0eSBpY29uXG4gKiBAcHJvcGVydHkgcGF5bG9hZFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlVmlld2VyQnV0dG9uRGF0YSB7XG4gIC8qKlxuICAgKiBDU1MgY2xhc3Mgb2YgdGhlIGljb24uIFVzdWFsbHkgZnJvbSBuNyBpY29uIHBhY2tcbiAgICovXG4gIGljb246IHN0cmluZztcbiAgLyoqXG4gICAqIEJ1dHRvbiBBbmNob3JcbiAgICovXG4gIGFuY2hvcj86IEFuY2hvcjtcbiAgaXNBY3RpdmU/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgSW1hZ2VWaWV3ZXJUb29sc0NvbXBvbmVudCdzIFwiZGF0YVwiXG4gKiBAcHJvcGVydHkgaW1hZ2VzXG4gKiBAcHJvcGVydHkgZGVzY3JpcHRpb25cbiAqIEBwcm9wZXJ0eSBjb250cm9sc1xuICogQHByb3BlcnR5IHNob3dEZXNjcmlwdGlvblxuICogQHByb3BlcnR5IHNob3dUaHVtYm5haWxzXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlVmlld2VyVG9vbHNEYXRhIHtcbiAgLyoqXG4gICAqIGxpc3Qgb2YgaW1hZ2UncyB0aHVtYm5haWxzXG4gICAqL1xuICBpbWFnZXM6IEltYWdlVmlld2VyVGh1bWJEYXRhW107XG4gIC8qKlxuICAgKiBkZXNjcmlwdGlvbiB0byBiZSBzaG93biBpbiB0aGUgYm94XG4gICAqL1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIGRlc2NyaXB0aW9uL3RodW1ibmFpbHMgdmlzaWJpbGl0eSBjb250cm9sc1xuICAgKi9cbiAgY29udHJvbHM6IHtcbiAgICBkZXNjcmlwdGlvbjogSW1hZ2VWaWV3ZXJCdXR0b25EYXRhO1xuICAgIHRodW1iczogSW1hZ2VWaWV3ZXJCdXR0b25EYXRhO1xuICAgIGNsb3NlZGVzY3JpcHRpb246IEltYWdlVmlld2VyQnV0dG9uRGF0YTtcbiAgfTtcbiAgLyoqXG4gICAqIERlc2NyaXB0aW9uIC8gdGh1bWJuYWlsIHRvZ2dsZXJzXG4gICAqL1xuICBpc1Zpc2libGU6IHtcbiAgICAvKiogVG9nZ2xlIGRlc2NyaXB0aW9uIGJveCB2aXNpYmlsaXR5ICovXG4gICAgZGVzY3JpcHRpb246IGJvb2xlYW47XG4gICAgLyoqIFRvZ2dsZSB0aHVtYm5haWxzIHN0cmlwIHZpc2liaWxpdHkgKi9cbiAgICB0aHVtYm5haWxzOiBib29sZWFuO1xuICB9O1xuICAvKipcbiAgICogZGVzY3JpcHRpb24gb3ZlcmxheSBuYXZpZ2F0aW9uXG4gICAqL1xuICBuYXZpZ2F0aW9uPzoge1xuICAgIHByZXY6IHtcbiAgICAgIHBheWxvYWQ6IGFueTsgLy8gJ3ByZXYnXG4gICAgICBjbGFzc2VzPzogYW55O1xuICAgIH07XG4gICAgbmV4dDoge1xuICAgICAgcGF5bG9hZDogYW55OyAvLyAnbmV4dCdcbiAgICAgIGNsYXNzZXM/OiBhbnk7XG4gICAgfTtcbiAgfTtcbiAgLyoqXG4gICAqIEluaXRpYWwgaW1hZ2UgaW4gYXJyYXkgKHByb2dyZXNzaXZlIG51bWJlciBmcm9tIDApXG4gICAqL1xuICBpbml0aWFsOiBudW1iZXI7XG4gIC8qKlxuICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAqL1xuICBwYXlsb2FkPzogYW55O1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvXG4gICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4gKiBJbWFnZVZpZXdlclRvb2xzQ29tcG9uZW50IDxuNy1pbWFnZS12aWV3ZXItdG9vbHM+XG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctaW1hZ2Utdmlld2VyLXRvb2xzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLXZpZXdlci10b29scy5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJbWFnZVZpZXdlclRvb2xzQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSW1hZ2VWaWV3ZXJUb29sc0RhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpOyAvLyBjbGlja1xuICB9XG59XG4iLCI8IS0tIDxkaXYgKm5nSWY9XCJkYXRhXCIgY2xhc3M9XCJuNy1pbWFnZS12aWV3ZXItdG9vbHNcIj5cbiAgICA8ZGl2IGNsYXNzPVwibjctaW1hZ2Utdmlld2VyLXRvb2xzX19iYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm43LWltYWdlLXZpZXdlci10b29sc19fY29udHJvbHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuNy1pbWFnZS12aWV3ZXItdG9vbHNfX2J0bi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGF0YS5jb250cm9scy5kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8bjctYW5jaG9yLXdyYXBwZXIgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibjctaGVyb19fYnRuIG43LWJ0biBuNy1idG4tY3RhIG43LWJ0bi1sIG43LWltYWdlLXZpZXdlci10b29sc19fYnRuRGVzY3JpcHRpb24ge3tkYXRhLmNsYXNzZXMuZGVzY3JpcHRpb24uY2xhc3NOYW1lIHx8ICcnfX1cIlxuICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJkYXRhLmNvbnRyb2xzLmRlc2NyaXB0aW9uLmFuY2hvclwiXG4gICAgICAgICAgICAgICAgICAgIChjbGlja2VkKT1cIm9uQ2xpY2soJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ7e2RhdGEuY29udHJvbHMuZGVzY3JpcHRpb24uaWNvbn19XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L243LWFuY2hvci13cmFwcGVyPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuNy1pbWFnZS12aWV3ZXItdG9vbHNfX2J0bi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGF0YS5jb250cm9scy50aHVtYnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPG43LWFuY2hvci13cmFwcGVyIFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm43LWhlcm9fX2J0biBuNy1idG4gbjctYnRuLWN0YSBuNy1idG4tbCBuNy1pbWFnZS12aWV3ZXItdG9vbHNfX2J0blRodW1icyB7e2RhdGEuY2xhc3Nlcy50aHVtYnMuY2xhc3NOYW1lIHx8ICcnfX1cIlxuICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJkYXRhLmNvbnRyb2xzLnRodW1icy5hbmNob3JcIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2tlZCk9XCJvbkNsaWNrKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwie3tkYXRhLmNvbnRyb2xzLnRodW1icy5pY29ufX1cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbjctYW5jaG9yLXdyYXBwZXI+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm43LWltYWdlLXZpZXdlci10b29sc19fdGh1bWJzXCIgXG4gICAgICAgICAgICAqbmdJZj1cImRhdGEuaXNWaXNpYmxlLnRodW1ibmFpbHMgJiYgZGF0YS5pbWFnZXNcIiA+XG4gICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBpbWcgb2YgZGF0YS5pbWFnZXM7IGxldCBpbWdJbmRleCA9IGluZGV4XCIgXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJuNy1pbWFnZS12aWV3ZXItdG9vbHNfX3RodW1iLWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJpbWdJbmRleCA9PSBkYXRhLmluaXRpYWxcIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cInt7aW1nLnRodW1ifX1cIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DbGljayhpbWcucGF5bG9hZClcIiA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm43LWltYWdlLXZpZXdlci10b29sc19fZGVzY3JpcHRpb25cIiBcbiAgICAgICAgICAgICpuZ0lmPVwiZGF0YS5pc1Zpc2libGUuZGVzY3JpcHRpb25cIiA+XG4gICAgICAgICAgICA8ZGl2IFtpbm5lckhUTUxdPVwiZGF0YS5kZXNjcmlwdGlvblwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm43LWltYWdlLXZpZXdlci10b29sc19fZGVzY3JpcHRpb24tY2xvc2VidG5cIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNsaWNrKGRhdGEuY29udHJvbHMuY2xvc2VkZXNjcmlwdGlvbi5hbmNob3IucGF5bG9hZClcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInt7ZGF0YS5jb250cm9scy5jbG9zZWRlc2NyaXB0aW9uLmljb259fVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PiAtLT5cblxuPCEtLSBuNy1oZXJvX19idG4gbjctYnRuIG43LWJ0bi1jdGEgbjctYnRuLWwgbjctaW1hZ2Utdmlld2VyLXRvb2xzX19idG5EZXNjcmlwdGlvbiAtLT5cbjwhLS0gbjctaGVyb19fYnRuIG43LWJ0biBuNy1idG4tY3RhIG43LWJ0bi1sIG43LWltYWdlLXZpZXdlci10b29sc19fYnRuVGh1bWJzIC0tPlxuXG48ZGl2ICpuZ0lmPVwiZGF0YVwiIGNsYXNzPVwibjctaW1hZ2Utdmlld2VyLXRvb2xzIHt7ZGF0YS5jbGFzc2VzIHx8ICcnfX1cIj5cbiAgICA8ZGl2IGNsYXNzPVwibjctaW1hZ2Utdmlld2VyLXRvb2xzX19iYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm43LWltYWdlLXZpZXdlci10b29sc19fY29udHJvbHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuNy1pbWFnZS12aWV3ZXItdG9vbHNfX2NvbnRyb2wtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkYXRhLmNvbnRyb2xzLmRlc2NyaXB0aW9uICYmIGRhdGEuZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPG43LWFuY2hvci13cmFwcGVyIFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm43LWltYWdlLXZpZXdlci10b29sc19fY29udHJvbC1idG5cIlxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAnaXMtYWN0aXZlJzogZGF0YS5jb250cm9scy5kZXNjcmlwdGlvbi5pc0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwiZGF0YS5jb250cm9scy5kZXNjcmlwdGlvbi5hbmNob3JcIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2tlZCk9XCJvbkNsaWNrKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSAkZXZlbnQgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm43LWltYWdlLXZpZXdlci10b29sc19fY29udHJvbC1idG4taWNvbiB7e2RhdGEuY29udHJvbHMuZGVzY3JpcHRpb24uaWNvbn19XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L243LWFuY2hvci13cmFwcGVyPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuNy1pbWFnZS12aWV3ZXItdG9vbHNfX2NvbnRyb2wtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkYXRhLmNvbnRyb2xzLnRodW1ic1wiPlxuICAgICAgICAgICAgICAgICAgICA8bjctYW5jaG9yLXdyYXBwZXIgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibjctaW1hZ2Utdmlld2VyLXRvb2xzX19jb250cm9sLWJ0blwiXG4gICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICdpcy1hY3RpdmUnOiBkYXRhLmNvbnRyb2xzLnRodW1icy5pc0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwiZGF0YS5jb250cm9scy50aHVtYnMuYW5jaG9yXCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrZWQpPVwib25DbGljaygkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gJGV2ZW50IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuNy1pbWFnZS12aWV3ZXItdG9vbHNfX2NvbnRyb2wtYnRuLWljb24ge3tkYXRhLmNvbnRyb2xzLnRodW1icy5pY29ufX1cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbjctYW5jaG9yLXdyYXBwZXI+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm43LWltYWdlLXZpZXdlci10b29sc19fdGh1bWJzLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibjctaW1hZ2Utdmlld2VyLXRvb2xzX190aHVtYnNcIiBcbiAgICAgICAgICAgICAgICAqbmdJZj1cImRhdGEuaXNWaXNpYmxlLnRodW1ibmFpbHMgJiYgZGF0YS5pbWFnZXNcIiA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm43LWltYWdlLXZpZXdlci10b29sc19fdGh1bWJzLXN0cmlwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGltZyBvZiBkYXRhLmltYWdlczsgbGV0IGltZ0luZGV4ID0gaW5kZXhcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibjctaW1hZ2Utdmlld2VyLXRvb2xzX190aHVtYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cImltZ0luZGV4ID09IGRhdGEuaW5pdGlhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibjctaW1hZ2Utdmlld2VyLXRvb2xzX190aHVtYi1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwie3tpbWcudGh1bWJ9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2soaW1nLnBheWxvYWQpXCIgPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRhdGEubmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3sgZGF0YS5uYXZpZ2F0aW9uLnByZXYuY2xhc3NlcyB8fCAnJyB9fVwiXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNsaWNrKGRhdGEubmF2aWdhdGlvbi5wcmV2LnBheWxvYWQpXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gKGNsaWNrKT1cIlwiIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuNy1pY29uLWFuZ2xlLWxlZnRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3sgZGF0YS5uYXZpZ2F0aW9uLm5leHQuY2xhc3NlcyB8fCAnJyB9fVwiXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNsaWNrKGRhdGEubmF2aWdhdGlvbi5uZXh0LnBheWxvYWQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm43LWljb24tYW5nbGUtcmlnaHRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgPCEtLSA8bmctY29udGFpbmVyICpuZ0lmPVwiZGF0YS5uYXZpZ2F0aW9uIGFzIG5hdlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPVwie3sgbmF2LnByZXYuY2xhc3NlcyB8fCAnJyB9fVwiIFxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DbGljayhuYXYucHJldi5wYXlsb2FkKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuNy1pY29uLWFuZ2xlLWxlZnRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPVwie3sgbmF2Lm5leHQuY2xhc3NlcyB8fCAnJyB9fVwiIFxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DbGljayhuYXYubmV4dC5wYXlsb2FkKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuNy1pY29uLWFuZ2xlLXJpZ2h0XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj4gLS0+XG5cbiAgICAgICAgICAgICAgICA8IS0tIDxuZy1jb250YWluZXIgKm5nSWY9XCJkYXRhLm5hdmlnYXRpb24gYXMgbmF2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9XCJ7eyBuYXYucHJldi5jbGFzc2VzIHx8ICcnIH19XCIgXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNsaWNrKG5hdi5wcmV2LnBheWxvYWQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm43LWljb24tYW5nbGUtbGVmdFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9XCJ7eyBuYXYubmV4dC5jbGFzc2VzIHx8ICcnIH19XCIgXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNsaWNrKG5hdi5uZXh0LnBheWxvYWQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm43LWljb24tYW5nbGUtcmlnaHRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPiAtLT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibjctaW1hZ2Utdmlld2VyLXRvb2xzX19kZXNjcmlwdGlvblwiIFxuICAgICAgICAgICAgICAgICpuZ0lmPVwiZGF0YS5pc1Zpc2libGUuZGVzY3JpcHRpb25cIiA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm43LWltYWdlLXZpZXdlci10b29sc19fZGVzY3JpcHRpb24tY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DbGljayhkYXRhLmNvbnRyb2xzLmNsb3NlZGVzY3JpcHRpb24uYW5jaG9yLnBheWxvYWQpXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gZGF0YS5jb250cm9scy5jbG9zZWRlc2NyaXB0aW9uLmFuY2hvci5wYXlsb2FkIC0tPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInt7ZGF0YS5jb250cm9scy5jbG9zZWRlc2NyaXB0aW9uLmljb259fVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibjctaW1hZ2Utdmlld2VyLXRvb2xzX19kZXNjcmlwdGlvbi10ZXh0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm43LWltYWdlLXZpZXdlci10b29sc19fZGVzY3JpcHRpb24tdGV4dFwiIFtpbm5lckhUTUxdPVwiZGF0YS5kZXNjcmlwdGlvblwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiBcbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19