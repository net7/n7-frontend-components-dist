//---------------------------
// CAROUSEL.ts
//---------------------------
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../anchor-wrapper/anchor-wrapper";
import * as i2 from "@angular/common";
export class CarouselComponent {
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
                    const sources = Array.from(// gets all <source.lazy> tags
                    document.getElementById(this.data.containerId)
                        .getElementsByClassName('lazy'));
                    sources.forEach((source) => {
                        const url = source.getAttribute('data-src'); // gets the video url
                        source.classList.remove('lazy'); // removes the lazy class
                        source.setAttribute('src', url); // sets the url to src attribute
                        source.removeAttribute('data-src'); // removes the data-src attribute
                        source.parentElement.load(); // loads the video
                    });
                }
            }
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
                // eslint-disable-next-line no-param-reassign, @typescript-eslint/no-unused-vars
                if (this.data.setInstance)
                    this.data.setInstance((d) => { d = chart; });
                // eslint-disable-next-line no-param-reassign, @typescript-eslint/no-unused-vars
                if (this.data.setComponentAPI)
                    this.data.setComponentAPI((d) => { d = this.api; });
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
            payload: (((slide.action || {}).anchor || {}).payload) || undefined
        }))
            .filter((btn) => btn.payload);
        // find each button's anchor-wrapper and attach the event to it.
        buttons.forEach((btn) => {
            document.querySelector(`#${btn.id}`).parentElement.addEventListener('click', () => this.onClick(btn.payload));
        });
    }
}
CarouselComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: CarouselComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CarouselComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.2", type: CarouselComponent, selector: "n7-carousel", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<button *ngIf=\"data && data.classes === 'demo'\"\r\n        class=\"n7-btn\"\r\n        (click)=\"api.load.videos()\">api.load.videos()</button>\r\n\r\n<div *ngIf=\"data\"\r\n     class=\"n7-carousel {{ data.classes || '' }}\">\r\n  <!-- Warning: Do not style div.latte-carousel -->\r\n  <div id=\"{{data.containerId}}\"\r\n       class=\"latte-carousel\">\r\n    <ng-container *ngFor=\"let slide of data.slides; let index = index;\">\r\n      <ng-container *ngTemplateOutlet=\"carouselSlide; context:{slide: slide, index: index}\"></ng-container>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n\r\n<!-- ===== SLIDE WRAPPER ===== -->\r\n<ng-template #carouselSlide\r\n             let-slide=\"slide\"\r\n             let-slideID=\"index\">\r\n  <!-- Warning: Do not style div.latte-item -->\r\n  <div class=\"latte-item\">\r\n    <div class=\"n7-carousel__slide {{ slide.classes || ''}}\"\r\n         [ngClass]=\"{ 'has-image' : slide.background.image, 'has-video': slide.background.video }\"\r\n         [style.background-color]=\"slide.background.color ? slide.background.color : ''\"\r\n         [style.background-image]=\"slide.background.image ? 'url('+slide.background.image+')' : ''\">\r\n      <div class=\"n7-carousel__slide-content-wrapper\">\r\n        <div class=\"n7-carousel__slide-content\">\r\n          <div class=\"n7-carousel__slide-content-left\">\r\n            <ng-container *ngTemplateOutlet=\"slideForeground; context:{items: slide.items, slideID: slideID}\">\r\n            </ng-container>\r\n          </div>\r\n          <div class=\"n7-carousel__slide-content-right\"\r\n               *ngIf=\"slide.action\">\r\n            <n7-anchor-wrapper [data]=\"slide.action.anchor\"\r\n                               (clicked)=\"onClick($event)\">\r\n              <!-- Button ID's are used to dynamically reattach events after loading the carousel -->\r\n              <button id=\"{{data.containerId}}-{{slideID}}\"\r\n                      class=\"n7-hero__btn n7-btn n7-btn-cta n7-btn-l\">\r\n                {{slide.action.text}}\r\n              </button>\r\n            </n7-anchor-wrapper>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <ng-container *ngIf=\"slide.background\">\r\n        <ng-container *ngTemplateOutlet=\"slideBackground; context:{$implicit: slide.background}\">\r\n        </ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- ===== SLIDE FOREGROUND ===== -->\r\n<ng-template #slideForeground\r\n             let-items=\"items\"\r\n             let-slideID=\"slideID\">\r\n  <ng-container *ngFor=\"let el of items; let itemID = index\">\r\n    <h1 class=\"n7-carousel__slide-title\"\r\n        *ngIf=\"el.title\">{{el.title}}</h1>\r\n    <div class=\"n7-carousel__slide-text\"\r\n          *ngIf=\"el.text\" [innerHTML]=\"el.text\"></div>\r\n    <div class=\"n7-carousel__slide-metadata-wrapper\"\r\n         *ngIf=\"el.metadata\">\r\n      <ng-container *ngFor=\"let m of el.metadata\">\r\n        <div class=\"n7-carousel__slide-metadata\">\r\n            <span class=\"n7-carousel__slide-metadata-label\"\r\n              *ngIf=\"m.key\">{{m.key}}</span>\r\n            <span class=\"n7-carousel__slide-metadata-value\"\r\n              *ngIf=\"m.value\">{{m.value}}</span>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n  </ng-container>\r\n</ng-template>\r\n\r\n<!-- ===== VIDEO BACKGROUND ===== -->\r\n<ng-template #slideBackground\r\n             let-bg>\r\n  <ng-container *ngIf=\"bg.video as v\">\r\n    <video #video\r\n           class=\"n7-carousel__slide-video\"\r\n           [poster]=\"v.poster\"\r\n           [height]=\"v.height\"\r\n           [width]=\"v.width\"\r\n           loop\r\n           muted\r\n           autoplay\r\n           playsinline>\r\n      <source #source\r\n              class=\"lazy\"\r\n              [attr.data-src]=\"v.url\"\r\n              type=\"video/mp4\">\r\n    </video>\r\n    <div class=\"n7-carousel__slide-video-overlay\">\r\n\r\n    </div>\r\n  </ng-container>\r\n</ng-template>\r\n", components: [{ type: i1.AnchorWrapperComponent, selector: "n7-anchor-wrapper", inputs: ["data", "classes"], outputs: ["clicked"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: CarouselComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-carousel', template: "<button *ngIf=\"data && data.classes === 'demo'\"\r\n        class=\"n7-btn\"\r\n        (click)=\"api.load.videos()\">api.load.videos()</button>\r\n\r\n<div *ngIf=\"data\"\r\n     class=\"n7-carousel {{ data.classes || '' }}\">\r\n  <!-- Warning: Do not style div.latte-carousel -->\r\n  <div id=\"{{data.containerId}}\"\r\n       class=\"latte-carousel\">\r\n    <ng-container *ngFor=\"let slide of data.slides; let index = index;\">\r\n      <ng-container *ngTemplateOutlet=\"carouselSlide; context:{slide: slide, index: index}\"></ng-container>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n\r\n<!-- ===== SLIDE WRAPPER ===== -->\r\n<ng-template #carouselSlide\r\n             let-slide=\"slide\"\r\n             let-slideID=\"index\">\r\n  <!-- Warning: Do not style div.latte-item -->\r\n  <div class=\"latte-item\">\r\n    <div class=\"n7-carousel__slide {{ slide.classes || ''}}\"\r\n         [ngClass]=\"{ 'has-image' : slide.background.image, 'has-video': slide.background.video }\"\r\n         [style.background-color]=\"slide.background.color ? slide.background.color : ''\"\r\n         [style.background-image]=\"slide.background.image ? 'url('+slide.background.image+')' : ''\">\r\n      <div class=\"n7-carousel__slide-content-wrapper\">\r\n        <div class=\"n7-carousel__slide-content\">\r\n          <div class=\"n7-carousel__slide-content-left\">\r\n            <ng-container *ngTemplateOutlet=\"slideForeground; context:{items: slide.items, slideID: slideID}\">\r\n            </ng-container>\r\n          </div>\r\n          <div class=\"n7-carousel__slide-content-right\"\r\n               *ngIf=\"slide.action\">\r\n            <n7-anchor-wrapper [data]=\"slide.action.anchor\"\r\n                               (clicked)=\"onClick($event)\">\r\n              <!-- Button ID's are used to dynamically reattach events after loading the carousel -->\r\n              <button id=\"{{data.containerId}}-{{slideID}}\"\r\n                      class=\"n7-hero__btn n7-btn n7-btn-cta n7-btn-l\">\r\n                {{slide.action.text}}\r\n              </button>\r\n            </n7-anchor-wrapper>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <ng-container *ngIf=\"slide.background\">\r\n        <ng-container *ngTemplateOutlet=\"slideBackground; context:{$implicit: slide.background}\">\r\n        </ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- ===== SLIDE FOREGROUND ===== -->\r\n<ng-template #slideForeground\r\n             let-items=\"items\"\r\n             let-slideID=\"slideID\">\r\n  <ng-container *ngFor=\"let el of items; let itemID = index\">\r\n    <h1 class=\"n7-carousel__slide-title\"\r\n        *ngIf=\"el.title\">{{el.title}}</h1>\r\n    <div class=\"n7-carousel__slide-text\"\r\n          *ngIf=\"el.text\" [innerHTML]=\"el.text\"></div>\r\n    <div class=\"n7-carousel__slide-metadata-wrapper\"\r\n         *ngIf=\"el.metadata\">\r\n      <ng-container *ngFor=\"let m of el.metadata\">\r\n        <div class=\"n7-carousel__slide-metadata\">\r\n            <span class=\"n7-carousel__slide-metadata-label\"\r\n              *ngIf=\"m.key\">{{m.key}}</span>\r\n            <span class=\"n7-carousel__slide-metadata-value\"\r\n              *ngIf=\"m.value\">{{m.value}}</span>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n  </ng-container>\r\n</ng-template>\r\n\r\n<!-- ===== VIDEO BACKGROUND ===== -->\r\n<ng-template #slideBackground\r\n             let-bg>\r\n  <ng-container *ngIf=\"bg.video as v\">\r\n    <video #video\r\n           class=\"n7-carousel__slide-video\"\r\n           [poster]=\"v.poster\"\r\n           [height]=\"v.height\"\r\n           [width]=\"v.width\"\r\n           loop\r\n           muted\r\n           autoplay\r\n           playsinline>\r\n      <source #source\r\n              class=\"lazy\"\r\n              [attr.data-src]=\"v.url\"\r\n              type=\"video/mp4\">\r\n    </video>\r\n    <div class=\"n7-carousel__slide-video-overlay\">\r\n\r\n    </div>\r\n  </ng-container>\r\n</ng-template>\r\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0IsY0FBYztBQUNkLDZCQUE2QjtBQUU3QixPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUssRUFDakIsTUFBTSxlQUFlLENBQUM7Ozs7QUFpSnZCLE1BQU0sT0FBTyxpQkFBaUI7SUFKOUI7UUFTVSxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXZCOztXQUVHO1FBQ0gsUUFBRyxHQUFHO1lBQ0o7OztlQUdHO1lBQ0gsSUFBSSxFQUFFO2dCQUNKLHNFQUFzRTtnQkFDdEUsTUFBTSxFQUFFLEdBQUcsRUFBRTtvQkFDWCxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFFLDhCQUE4QjtvQkFDeEQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzt5QkFDM0Msc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQ2xDLENBQUM7b0JBQ0YsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQW1CLEVBQUUsRUFBRTt3QkFDdEMsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjt3QkFDbEUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyx5QkFBeUI7d0JBQzFELE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsZ0NBQWdDO3dCQUNqRSxNQUFN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c0JBQVosS0FBSztnQkFFRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBDQVJPVVNFTC50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsIElucHV0LCBBZnRlckNvbnRlbnRDaGVja2VkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIFBhZ2luYXRpb25Db21wb25lbnQncyBsaW5rcyAocGFnZXMgYW5kIG5hdmlnYXRpb24gYnV0dG9ucylcclxuICpcclxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgYW5jaG9yIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBDYXJvdXNlbEJ1dHRvbiB7XHJcbiAgLyoqXHJcbiAgICogaW5uZXJIVE1MIG9yIHBsYWluIHRleHQgZm9yIHRoZSBsYWJlbFxyXG4gICAqL1xyXG4gIHRleHQ/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gIGFuY2hvcj86IEFuY2hvcjtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgUGFnaW5hdGlvbkNvbXBvbmVudCdzIE1ldGFkYXRhIHR1cGxlcyAocGFnZXMgYW5kIG5hdmlnYXRpb24gYnV0dG9ucylcclxuICpcclxuICogQHByb3BlcnR5IGtleSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB2YWx1ZSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIENhcm91c2VsTWV0YWRhdGEge1xyXG4gIC8qKlxyXG4gICAqIEZpcnN0IGVsZW1lbnRcclxuICAgKi9cclxuICBrZXk/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogU2Vjb25kIGVsZW1lbnRcclxuICAgKi9cclxuICB2YWx1ZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYXJvdXNlbEJhY2tncm91bmRJdGVtIHtcclxuICAvKipcclxuICAgKiBCYWNrZ3JvdW5kIGltYWdlIGZvciB0aGUgY2Fyb3VzZWxcclxuICAgKi9cclxuICBpbWFnZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiBCYWNrZ3JvdW5kIHZpZGVvIGZvciB0aGUgY2Fyb3VzZWxcclxuICAgKi9cclxuICB2aWRlbz86IHtcclxuICAgIC8qKiBNZWRpYSBVUkwgKi9cclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgLyoqIFBsYWNlaG9sZGVyIGltYWdlIHdoaWxlIGxvYWRpbmcgKi9cclxuICAgIHBvc3Rlcj86IHN0cmluZztcclxuICAgIC8qKiBWaWRlbyB3aWR0aCBpbiBwaXhlbHMgKi9cclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICAvKiogVmlkZW8gaGVpZ2h0IGluIHBpeGVscyAqL1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgfTtcclxuICAvKipcclxuICAgKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciB0aGUgY2Fyb3VzZWxcclxuICAgKi9cclxuICBjb2xvcj86IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgQ2Fyb3VzZWxDb21wb25lbnQncyBcIkl0ZW1cIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgdGl0bGUgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgdGV4dCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBtZXRhZGF0YSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBhY3Rpb24gKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIENhcm91c2VsRm9yZWdyb3VuZEl0ZW0ge1xyXG4gIC8qKlxyXG4gICAqIEhlYWRlclxyXG4gICAqL1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFRleHQgcGFyYWdyYXBoIC8gc3VidGl0bGUgLyBwcmV0aXRsZVxyXG4gICAqL1xyXG4gIHRleHQ/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogTWV0YWRhdGFcclxuICAgKi9cclxuICBtZXRhZGF0YT86IENhcm91c2VsTWV0YWRhdGFbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgQ2Fyb3VzZWxDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgaXRlbXMgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgaW1hZ2UgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgdmlkZW8gKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIENhcm91c2VsRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogSUQgT2YgdGhlIGNhcm91c2VsIGNvbnRhaW5lclxyXG4gICAqL1xyXG4gIGNvbnRhaW5lcklkOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogT3B0aW9ucyBmb3IgdGhlIGNhcm91c2VsIGxpYnJhcnkgKCBkb2NzIGhlcmUgOiBodHRwczovL2xhdHRlY2Fyb3VzZWwuZGV2LyApXHJcbiAgICovXHJcbiAgbGliT3B0aW9ucz86IGFueTtcclxuICAvKipcclxuICAgKiBBcnJheSBvZiBjYXJvdXNlbCBzbGlkZXNcclxuICAgKi9cclxuICBzbGlkZXM6IHtcclxuICAgIGl0ZW1zOiBDYXJvdXNlbEZvcmVncm91bmRJdGVtW107XHJcbiAgICAvKipcclxuICAgICAqIEJ1dHRvblxyXG4gICAgICovXHJcbiAgICBhY3Rpb24/OiBDYXJvdXNlbEJ1dHRvbjtcclxuICAgIGJhY2tncm91bmQ/OiBDYXJvdXNlbEJhY2tncm91bmRJdGVtO1xyXG4gICAgY2xhc3Nlcz86IHN0cmluZztcclxuICB9W107XHJcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgZm9yIGdldHRpbmcgdGhlIGNhcm91c2VsIGluc3RhbmNlXHJcbiAgICovXHJcbiAgc2V0SW5zdGFuY2U/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgdG8gYWNjZXNzIHRoZSBjYXJvdXNlbCBBUElcclxuICAgKiAqL1xyXG4gIHNldENvbXBvbmVudEFQST86IGFueTtcclxuICAvKipcclxuICAgKiBDbGFzc2VzIGZvciB0aGUgY2Fyb3VzZWwgY29tcG9uZW50XHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIGRhdGEgdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1jYXJvdXNlbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Nhcm91c2VsLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IENhcm91c2VsRGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBwcml2YXRlIGxvYWRlZCA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBBUEkgb2YgdGhlIGNhcm91c2VsIGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGFwaSA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVXNlZCB0byBsYXp5LWxvYWQgdmlkZW8gcmVzb3VyY2VzLlxyXG4gICAgICogQ2FsbCBhcGkubG9hZC52aWRlb3Mgb24gRE9NQ29udGVudFJlYWR5IGV2ZW50XHJcbiAgICAgKi9cclxuICAgIGxvYWQ6IHtcclxuICAgICAgLyoqIENoYW5nZXMgYWxsIGRhdGEtc3JjIGF0dHJpYnV0ZXMgdG8gc3JjIGFuZCBjYWxscyA8dmlkZW8+LmxvYWQoKSAqL1xyXG4gICAgICB2aWRlb3M6ICgpID0+IHtcclxuICAgICAgICBjb25zdCBzb3VyY2VzID0gQXJyYXkuZnJvbSggLy8gZ2V0cyBhbGwgPHNvdXJjZS5sYXp5PiB0YWdzXHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRhdGEuY29udGFpbmVySWQpXHJcbiAgICAgICAgICAgIC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsYXp5JylcclxuICAgICAgICApO1xyXG4gICAgICAgIHNvdXJjZXMuZm9yRWFjaCgoc291cmNlOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdXJsID0gc291cmNlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKTsgLy8gZ2V0cyB0aGUgdmlkZW8gdXJsXHJcbiAgICAgICAgICBzb3VyY2UuY2xhc3NMaXN0LnJlbW92ZSgnbGF6eScpOyAvLyByZW1vdmVzIHRoZSBsYXp5IGNsYXNzXHJcbiAgICAgICAgICBzb3VyY2Uuc2V0QXR0cmlidXRlKCdzcmMnLCB1cmwpOyAvLyBzZXRzIHRoZSB1cmwgdG8gc3JjIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgc291cmNlLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zcmMnKTsgLy8gcmVtb3ZlcyB0aGUgZGF0YS1zcmMgYXR0cmlidXRlXHJcbiAgICAgICAgICAoc291cmNlLnBhcmVudEVsZW1lbnQgYXMgSFRNTFZpZGVvRWxlbWVudCkubG9hZCgpOyAvLyBsb2FkcyB0aGUgdmlkZW9cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kYXRhIHx8IHRoaXMubG9hZGVkKSByZXR1cm47XHJcbiAgICB0aGlzLmxvYWRlZCA9IHRydWU7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgeyBjb250YWluZXJJZCwgbGliT3B0aW9ucyB9ID0gdGhpcy5kYXRhO1xyXG4gICAgICBpbXBvcnQoJ2xhdHRlLWNhcm91c2VsJykudGhlbigobW9kdWxlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBDYXJvdXNlbCB9ID0gbW9kdWxlO1xyXG4gICAgICAgIGNvbnN0IGNoYXJ0ID0gbmV3IENhcm91c2VsKGAjJHtjb250YWluZXJJZH1gLCBsaWJPcHRpb25zKTtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ24sIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuc2V0SW5zdGFuY2UpIHRoaXMuZGF0YS5zZXRJbnN0YW5jZSgoZCk6IHZvaWQgPT4geyBkID0gY2hhcnQ7IH0pO1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnbiwgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5zZXRDb21wb25lbnRBUEkpIHRoaXMuZGF0YS5zZXRDb21wb25lbnRBUEkoKGQpOiB2b2lkID0+IHsgZCA9IHRoaXMuYXBpOyB9KTtcclxuICAgICAgICB0aGlzLmFkZEJ1dHRvbkV2ZW50cyh0aGlzLmRhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DbGljayhwYXlsb2FkKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdGhhdCBhZGRzIHRoZSBldmVudCBsaXN0ZW5lcnMgdG8gZWFjaCBidXR0b24uXHJcbiAgICogVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSB3aGVuIFwibmV3IENhcm91c2VsKClcIiBpcyBjYWxsZWQgdGhlIGV2ZW50IGxpc3RlbmVycyBhcmUgbG9zdC5cclxuICAgKi9cclxuICBhZGRCdXR0b25FdmVudHMoeyBzbGlkZXMsIGNvbnRhaW5lcklkIH0pIHtcclxuICAgIC8vIEJ1aWxkIGFycmF5IG9mIGJ1dHRvbi1pZCdzICYgcGF5bG9hZHMuXHJcbiAgICBjb25zdCBidXR0b25zOiB7IGlkOiBzdHJpbmc7IHBheWxvYWQ6IGFueSB9W10gPSBzbGlkZXNcclxuICAgICAgLm1hcCgoc2xpZGUsIHNsaWRlSUQpID0+ICh7XHJcbiAgICAgICAgLy8gaWQgPSBjb250YWluZXIgaWQgLSBpbmRleCBvZiB0aGUgc2xpZGVcclxuICAgICAgICBpZDogYCR7Y29udGFpbmVySWR9LSR7c2xpZGVJRH1gLFxyXG4gICAgICAgIHBheWxvYWQ6ICgoKHNsaWRlLmFjdGlvbiB8fCB7fSkuYW5jaG9yIHx8IHt9KS5wYXlsb2FkKSB8fCB1bmRlZmluZWRcclxuICAgICAgfSkpXHJcbiAgICAgIC5maWx0ZXIoKGJ0bikgPT4gYnRuLnBheWxvYWQpO1xyXG4gICAgLy8gZmluZCBlYWNoIGJ1dHRvbidzIGFuY2hvci13cmFwcGVyIGFuZCBhdHRhY2ggdGhlIGV2ZW50IHRvIGl0LlxyXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7YnRuLmlkfWApLnBhcmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAnY2xpY2snLFxyXG4gICAgICAgICgpID0+IHRoaXMub25DbGljayhidG4ucGF5bG9hZClcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCI8YnV0dG9uICpuZ0lmPVwiZGF0YSAmJiBkYXRhLmNsYXNzZXMgPT09ICdkZW1vJ1wiXHJcbiAgICAgICAgY2xhc3M9XCJuNy1idG5cIlxyXG4gICAgICAgIChjbGljayk9XCJhcGkubG9hZC52aWRlb3MoKVwiPmFwaS5sb2FkLnZpZGVvcygpPC9idXR0b24+XHJcblxyXG48ZGl2ICpuZ0lmPVwiZGF0YVwiXHJcbiAgICAgY2xhc3M9XCJuNy1jYXJvdXNlbCB7eyBkYXRhLmNsYXNzZXMgfHwgJycgfX1cIj5cclxuICA8IS0tIFdhcm5pbmc6IERvIG5vdCBzdHlsZSBkaXYubGF0dGUtY2Fyb3VzZWwgLS0+XHJcbiAgPGRpdiBpZD1cInt7ZGF0YS5jb250YWluZXJJZH19XCJcclxuICAgICAgIGNsYXNzPVwibGF0dGUtY2Fyb3VzZWxcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHNsaWRlIG9mIGRhdGEuc2xpZGVzOyBsZXQgaW5kZXggPSBpbmRleDtcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNhcm91c2VsU2xpZGU7IGNvbnRleHQ6e3NsaWRlOiBzbGlkZSwgaW5kZXg6IGluZGV4fVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPCEtLSA9PT09PSBTTElERSBXUkFQUEVSID09PT09IC0tPlxyXG48bmctdGVtcGxhdGUgI2Nhcm91c2VsU2xpZGVcclxuICAgICAgICAgICAgIGxldC1zbGlkZT1cInNsaWRlXCJcclxuICAgICAgICAgICAgIGxldC1zbGlkZUlEPVwiaW5kZXhcIj5cclxuICA8IS0tIFdhcm5pbmc6IERvIG5vdCBzdHlsZSBkaXYubGF0dGUtaXRlbSAtLT5cclxuICA8ZGl2IGNsYXNzPVwibGF0dGUtaXRlbVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm43LWNhcm91c2VsX19zbGlkZSB7eyBzbGlkZS5jbGFzc2VzIHx8ICcnfX1cIlxyXG4gICAgICAgICBbbmdDbGFzc109XCJ7ICdoYXMtaW1hZ2UnIDogc2xpZGUuYmFja2dyb3VuZC5pbWFnZSwgJ2hhcy12aWRlbyc6IHNsaWRlLmJhY2tncm91bmQudmlkZW8gfVwiXHJcbiAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cInNsaWRlLmJhY2tncm91bmQuY29sb3IgPyBzbGlkZS5iYWNrZ3JvdW5kLmNvbG9yIDogJydcIlxyXG4gICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1pbWFnZV09XCJzbGlkZS5iYWNrZ3JvdW5kLmltYWdlID8gJ3VybCgnK3NsaWRlLmJhY2tncm91bmQuaW1hZ2UrJyknIDogJydcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm43LWNhcm91c2VsX19zbGlkZS1jb250ZW50LXdyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibjctY2Fyb3VzZWxfX3NsaWRlLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuNy1jYXJvdXNlbF9fc2xpZGUtY29udGVudC1sZWZ0XCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJzbGlkZUZvcmVncm91bmQ7IGNvbnRleHQ6e2l0ZW1zOiBzbGlkZS5pdGVtcywgc2xpZGVJRDogc2xpZGVJRH1cIj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuNy1jYXJvdXNlbF9fc2xpZGUtY29udGVudC1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICpuZ0lmPVwic2xpZGUuYWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxuNy1hbmNob3Itd3JhcHBlciBbZGF0YV09XCJzbGlkZS5hY3Rpb24uYW5jaG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGlja2VkKT1cIm9uQ2xpY2soJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgIDwhLS0gQnV0dG9uIElEJ3MgYXJlIHVzZWQgdG8gZHluYW1pY2FsbHkgcmVhdHRhY2ggZXZlbnRzIGFmdGVyIGxvYWRpbmcgdGhlIGNhcm91c2VsIC0tPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJ7e2RhdGEuY29udGFpbmVySWR9fS17e3NsaWRlSUR9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm43LWhlcm9fX2J0biBuNy1idG4gbjctYnRuLWN0YSBuNy1idG4tbFwiPlxyXG4gICAgICAgICAgICAgICAge3tzbGlkZS5hY3Rpb24udGV4dH19XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvbjctYW5jaG9yLXdyYXBwZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzbGlkZS5iYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInNsaWRlQmFja2dyb3VuZDsgY29udGV4dDp7JGltcGxpY2l0OiBzbGlkZS5iYWNrZ3JvdW5kfVwiPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPCEtLSA9PT09PSBTTElERSBGT1JFR1JPVU5EID09PT09IC0tPlxyXG48bmctdGVtcGxhdGUgI3NsaWRlRm9yZWdyb3VuZFxyXG4gICAgICAgICAgICAgbGV0LWl0ZW1zPVwiaXRlbXNcIlxyXG4gICAgICAgICAgICAgbGV0LXNsaWRlSUQ9XCJzbGlkZUlEXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZWwgb2YgaXRlbXM7IGxldCBpdGVtSUQgPSBpbmRleFwiPlxyXG4gICAgPGgxIGNsYXNzPVwibjctY2Fyb3VzZWxfX3NsaWRlLXRpdGxlXCJcclxuICAgICAgICAqbmdJZj1cImVsLnRpdGxlXCI+e3tlbC50aXRsZX19PC9oMT5cclxuICAgIDxkaXYgY2xhc3M9XCJuNy1jYXJvdXNlbF9fc2xpZGUtdGV4dFwiXHJcbiAgICAgICAgICAqbmdJZj1cImVsLnRleHRcIiBbaW5uZXJIVE1MXT1cImVsLnRleHRcIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJuNy1jYXJvdXNlbF9fc2xpZGUtbWV0YWRhdGEtd3JhcHBlclwiXHJcbiAgICAgICAgICpuZ0lmPVwiZWwubWV0YWRhdGFcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbSBvZiBlbC5tZXRhZGF0YVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJuNy1jYXJvdXNlbF9fc2xpZGUtbWV0YWRhdGFcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuNy1jYXJvdXNlbF9fc2xpZGUtbWV0YWRhdGEtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICpuZ0lmPVwibS5rZXlcIj57e20ua2V5fX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibjctY2Fyb3VzZWxfX3NsaWRlLW1ldGFkYXRhLXZhbHVlXCJcclxuICAgICAgICAgICAgICAqbmdJZj1cIm0udmFsdWVcIj57e20udmFsdWV9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjwhLS0gPT09PT0gVklERU8gQkFDS0dST1VORCA9PT09PSAtLT5cclxuPG5nLXRlbXBsYXRlICNzbGlkZUJhY2tncm91bmRcclxuICAgICAgICAgICAgIGxldC1iZz5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiYmcudmlkZW8gYXMgdlwiPlxyXG4gICAgPHZpZGVvICN2aWRlb1xyXG4gICAgICAgICAgIGNsYXNzPVwibjctY2Fyb3VzZWxfX3NsaWRlLXZpZGVvXCJcclxuICAgICAgICAgICBbcG9zdGVyXT1cInYucG9zdGVyXCJcclxuICAgICAgICAgICBbaGVpZ2h0XT1cInYuaGVpZ2h0XCJcclxuICAgICAgICAgICBbd2lkdGhdPVwidi53aWR0aFwiXHJcbiAgICAgICAgICAgbG9vcFxyXG4gICAgICAgICAgIG11dGVkXHJcbiAgICAgICAgICAgYXV0b3BsYXlcclxuICAgICAgICAgICBwbGF5c2lubGluZT5cclxuICAgICAgPHNvdXJjZSAjc291cmNlXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJsYXp5XCJcclxuICAgICAgICAgICAgICBbYXR0ci5kYXRhLXNyY109XCJ2LnVybFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInZpZGVvL21wNFwiPlxyXG4gICAgPC92aWRlbz5cclxuICAgIDxkaXYgY2xhc3M9XCJuNy1jYXJvdXNlbF9fc2xpZGUtdmlkZW8tb3ZlcmxheVwiPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=