/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/carousel/carousel.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// CAROUSEL.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for PaginationComponent's links (pages and navigation buttons)
 *
 * \@property text (required)
 * \@property anchor (optional)
 * \@property classes (optional)
 * \@property _meta (optional)
 * @record
 */
export function CarouselButton() { }
if (false) {
    /**
     * innerHTML or plain text for the label
     * @type {?|undefined}
     */
    CarouselButton.prototype.text;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    CarouselButton.prototype.classes;
    /** @type {?|undefined} */
    CarouselButton.prototype.anchor;
    /**
     * additional info
     * @type {?|undefined}
     */
    CarouselButton.prototype._meta;
}
/**
 * Interface for PaginationComponent's Metadata tuples (pages and navigation buttons)
 *
 * \@property key (optional)
 * \@property value (optional)
 * @record
 */
export function CarouselMetadata() { }
if (false) {
    /**
     * First element
     * @type {?|undefined}
     */
    CarouselMetadata.prototype.key;
    /**
     * Second element
     * @type {?|undefined}
     */
    CarouselMetadata.prototype.value;
}
/**
 * @record
 */
export function CarouselBackgroundItem() { }
if (false) {
    /**
     * Background image for the carousel
     * @type {?|undefined}
     */
    CarouselBackgroundItem.prototype.image;
    /**
     * Background video for the carousel
     * @type {?|undefined}
     */
    CarouselBackgroundItem.prototype.video;
    /**
     * Background color for the carousel
     * @type {?|undefined}
     */
    CarouselBackgroundItem.prototype.color;
}
/**
 * Interface for CarouselComponent's "Item"
 *
 * \@property title (optional)
 * \@property text (optional)
 * \@property metadata (optional)
 * \@property action (optional)
 * \@property classes (optional)
 * \@property _meta (optional)
 * @record
 */
export function CarouselForegroundItem() { }
if (false) {
    /**
     * Header
     * @type {?|undefined}
     */
    CarouselForegroundItem.prototype.title;
    /**
     * Text paragraph / subtitle / pretitle
     * @type {?|undefined}
     */
    CarouselForegroundItem.prototype.text;
    /**
     * Metadata
     * @type {?|undefined}
     */
    CarouselForegroundItem.prototype.metadata;
}
/**
 * Interface for CarouselComponent's "data"
 *
 * \@property items (required)
 * \@property image (optional)
 * \@property video (optional)
 * \@property classes (optional)
 * \@property _meta (optional)
 * @record
 */
export function CarouselData() { }
if (false) {
    /**
     * ID Of the carousel container
     * @type {?}
     */
    CarouselData.prototype.containerId;
    /**
     * Options for the carousel library ( docs here : https://lattecarousel.dev/ )
     * @type {?|undefined}
     */
    CarouselData.prototype.libOptions;
    /**
     * Array of carousel slides
     * @type {?}
     */
    CarouselData.prototype.slides;
    /**
     * Callback for getting the carousel instance
     * @type {?|undefined}
     */
    CarouselData.prototype.setInstance;
    /**
     * Callback to access the carousel API
     *
     * @type {?|undefined}
     */
    CarouselData.prototype.setComponentAPI;
    /**
     * Classes for the carousel component
     * @type {?|undefined}
     */
    CarouselData.prototype.classes;
    /**
     * Additional data useful for the component's logic
     * @type {?|undefined}
     */
    CarouselData.prototype._meta;
}
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
                /**
                 * Changes all data-src attributes to src and calls <video>.load()
                 */
                videos: (/**
                 * @return {?}
                 */
                () => {
                    /** @type {?} */
                    const sources = Array.from(// gets all <source.lazy> tags
                    document.getElementById(this.data.containerId)
                        .getElementsByClassName('lazy'));
                    sources.forEach((/**
                     * @param {?} source
                     * @return {?}
                     */
                    (source) => {
                        /** @type {?} */
                        const url = source.getAttribute('data-src');
                        source.classList.remove('lazy'); // removes the lazy class
                        source.setAttribute('src', url); // sets the url to src attribute
                        source.removeAttribute('data-src'); // removes the data-src attribute
                        ((/** @type {?} */ (source.parentElement))).load(); // loads the video
                    }));
                })
            }
        };
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        if (!this.data || this.loaded)
            return;
        this.loaded = true;
        setTimeout((/**
         * @return {?}
         */
        () => {
            const { containerId, libOptions } = this.data;
            import('latte-carousel').then((/**
             * @param {?} module
             * @return {?}
             */
            (module) => {
                const { Carousel } = module;
                /** @type {?} */
                const chart = new Carousel(`#${containerId}`, libOptions);
                // eslint-disable-next-line no-param-reassign, @typescript-eslint/no-unused-vars
                if (this.data.setInstance)
                    this.data.setInstance((/**
                     * @param {?} d
                     * @return {?}
                     */
                    (d) => { d = chart; }));
                // eslint-disable-next-line no-param-reassign, @typescript-eslint/no-unused-vars
                if (this.data.setComponentAPI)
                    this.data.setComponentAPI((/**
                     * @param {?} d
                     * @return {?}
                     */
                    (d) => { d = this.api; }));
                this.addButtonEvents(this.data);
            }));
        }));
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    /**
     * Function that adds the event listeners to each button.
     * This is needed because when "new Carousel()" is called the event listeners are lost.
     * @param {?} __0
     * @return {?}
     */
    addButtonEvents({ slides, containerId }) {
        // Build array of button-id's & payloads.
        /** @type {?} */
        const buttons = slides
            .map((/**
         * @param {?} slide
         * @param {?} slideID
         * @return {?}
         */
        (slide, slideID) => ({
            // id = container id - index of the slide
            id: `${containerId}-${slideID}`,
            payload: (((slide.action || {}).anchor || {}).payload) || undefined
        })))
            .filter((/**
         * @param {?} btn
         * @return {?}
         */
        (btn) => btn.payload));
        // find each button's anchor-wrapper and attach the event to it.
        buttons.forEach((/**
         * @param {?} btn
         * @return {?}
         */
        (btn) => {
            document.querySelector(`#${btn.id}`).parentElement.addEventListener('click', (/**
             * @return {?}
             */
            () => this.onClick(btn.payload)));
        }));
    }
}
CarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-carousel',
                template: "<button *ngIf=\"data.classes === 'demo'\"\n        class=\"n7-btn\"\n        (click)=\"api.load.videos()\">api.load.videos()</button>\n\n<div *ngIf=\"data\"\n     class=\"n7-carousel {{ data.classes || '' }}\">\n  <!-- Warning: Do not style div.latte-carousel -->\n  <div id=\"{{data.containerId}}\"\n       class=\"latte-carousel\">\n    <ng-container *ngFor=\"let slide of data.slides; let index = index;\">\n      <ng-container *ngTemplateOutlet=\"carouselSlide; context:{slide: slide, index: index}\"></ng-container>\n    </ng-container>\n  </div>\n</div>\n\n<!-- ===== SLIDE WRAPPER ===== -->\n<ng-template #carouselSlide\n             let-slide=\"slide\"\n             let-slideID=\"index\">\n  <!-- Warning: Do not style div.latte-item -->\n  <div class=\"latte-item\">\n    <div class=\"n7-carousel__slide {{ slide.classes || ''}}\"\n         [ngClass]=\"{ 'has-image' : slide.background.image, 'has-video': slide.background.video }\"\n         [style.background-color]=\"slide.background.color ? slide.background.color : ''\"\n         [style.background-image]=\"slide.background.image ? 'url('+slide.background.image+')' : ''\">\n      <div class=\"n7-carousel__slide-content-wrapper\">\n        <div class=\"n7-carousel__slide-content\">\n          <div class=\"n7-carousel__slide-content-left\">\n            <ng-container *ngTemplateOutlet=\"slideForeground; context:{items: slide.items, slideID: slideID}\">\n            </ng-container>\n          </div>\n          <div class=\"n7-carousel__slide-content-right\"\n               *ngIf=\"slide.action\">\n            <n7-anchor-wrapper [data]=\"slide.action.anchor\"\n                               (clicked)=\"onClick($event)\">\n              <!-- Button ID's are used to dynamically reattach events after loading the carousel -->\n              <button id=\"{{data.containerId}}-{{slideID}}\"\n                      class=\"n7-hero__btn n7-btn n7-btn-cta n7-btn-l\">\n                {{slide.action.text}}\n              </button>\n            </n7-anchor-wrapper>\n          </div>\n        </div>\n      </div>\n      <ng-container *ngIf=\"slide.background\">\n        <ng-container *ngTemplateOutlet=\"slideBackground; context:{$implicit: slide.background}\">\n        </ng-container>\n      </ng-container>\n    </div>\n  </div>\n</ng-template>\n\n<!-- ===== SLIDE FOREGROUND ===== -->\n<ng-template #slideForeground\n             let-items=\"items\"\n             let-slideID=\"slideID\">\n  <ng-container *ngFor=\"let el of items; let itemID = index\">\n    <h1 class=\"n7-carousel__slide-title\"\n        *ngIf=\"el.title\">{{el.title}}</h1>\n    <span class=\"n7-carousel__slide-text\"\n          *ngIf=\"el.text\">{{el.text}}</span>\n    <div class=\"n7-carousel__slide-metadata-wrapper\"\n         *ngIf=\"el.metadata\">\n      <ng-container *ngFor=\"let m of el.metadata\">\n        <div class=\"n7-carousel__slide-metadata\">\n            <span class=\"n7-carousel__slide-metadata-label\"\n              *ngIf=\"m.key\">{{m.key}}</span>\n            <span class=\"n7-carousel__slide-metadata-value\"\n              *ngIf=\"m.value\">{{m.value}}</span>\n        </div>\n      </ng-container>\n    </div>\n  </ng-container>\n</ng-template>\n\n<!-- ===== VIDEO BACKGROUND ===== -->\n<ng-template #slideBackground\n             let-bg>\n  <ng-container *ngIf=\"bg.video as v\">\n    <video #video\n           class=\"n7-carousel__slide-video\"\n           [poster]=\"v.poster\"\n           [height]=\"v.height\"\n           [width]=\"v.width\"\n           loop\n           muted\n           autoplay\n           playsinline>\n      <source #source\n              class=\"lazy\"\n              [attr.data-src]=\"v.url\"\n              type=\"video/mp4\">\n    </video>\n    <div class=\"n7-carousel__slide-video-overlay\">\n\n    </div>\n  </ng-container>\n</ng-template>\n"
            }] }
];
CarouselComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CarouselComponent.prototype.data;
    /** @type {?} */
    CarouselComponent.prototype.emit;
    /**
     * @type {?}
     * @private
     */
    CarouselComponent.prototype.loaded;
    /**
     * API of the carousel component
     * @type {?}
     */
    CarouselComponent.prototype.api;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxLQUFLLEVBQ2pCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7O0FBV3ZCLG9DQWNDOzs7Ozs7SUFWQyw4QkFBYzs7Ozs7SUFJZCxpQ0FBaUI7O0lBQ2pCLGdDQUFnQjs7Ozs7SUFJaEIsK0JBQVk7Ozs7Ozs7OztBQVNkLHNDQVNDOzs7Ozs7SUFMQywrQkFBYTs7Ozs7SUFJYixpQ0FBZTs7Ozs7QUFHakIsNENBc0JDOzs7Ozs7SUFsQkMsdUNBQWU7Ozs7O0lBSWYsdUNBU0U7Ozs7O0lBSUYsdUNBQWU7Ozs7Ozs7Ozs7Ozs7QUFhakIsNENBYUM7Ozs7OztJQVRDLHVDQUFlOzs7OztJQUlmLHNDQUFjOzs7OztJQUlkLDBDQUE4Qjs7Ozs7Ozs7Ozs7O0FBWWhDLGtDQXFDQzs7Ozs7O0lBakNDLG1DQUFvQjs7Ozs7SUFJcEIsa0NBQWlCOzs7OztJQUlqQiw4QkFRSTs7Ozs7SUFJSixtQ0FBa0I7Ozs7OztJQUlsQix1Q0FBc0I7Ozs7O0lBSXRCLCtCQUFpQjs7Ozs7SUFJakIsNkJBQVk7O0FBT2QsTUFBTSxPQUFPLGlCQUFpQjtJQUo5QjtRQVNVLFdBQU0sR0FBRyxLQUFLLENBQUM7Ozs7UUFLdkIsUUFBRyxHQUFHOzs7OztZQUtKLElBQUksRUFBRTs7OztnQkFFSixNQUFNOzs7Z0JBQUUsR0FBRyxFQUFFOzswQkFDTCxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBRSw4QkFBOEI7b0JBQ3hELFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7eUJBQzNDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUNsQztvQkFDRCxPQUFPLENBQUMsT0FB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LGdCQUFnQixDQUNqRSxPQUFPOzs7WUFDUCxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFDaEMsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBL0VGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsbXhIQUE4QjthQUMvQjs7O21CQUVFLEtBQUs7bUJBRUwsS0FBSzs7OztJQUZOLGlDQUE0Qjs7SUFFNUIsaUNBQW1COzs7OztJQUVuQixtQ0FBdUI7Ozs7O0lBS3ZCLGdDQXFCRSIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDQVJPVVNFTC50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJDb250ZW50Q2hlY2tlZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFBhZ2luYXRpb25Db21wb25lbnQncyBsaW5rcyAocGFnZXMgYW5kIG5hdmlnYXRpb24gYnV0dG9ucylcbiAqXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgYW5jaG9yIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2Fyb3VzZWxCdXR0b24ge1xuICAvKipcbiAgICogaW5uZXJIVE1MIG9yIHBsYWluIHRleHQgZm9yIHRoZSBsYWJlbFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICBhbmNob3I/OiBBbmNob3I7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgUGFnaW5hdGlvbkNvbXBvbmVudCdzIE1ldGFkYXRhIHR1cGxlcyAocGFnZXMgYW5kIG5hdmlnYXRpb24gYnV0dG9ucylcbiAqXG4gKiBAcHJvcGVydHkga2V5IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB2YWx1ZSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2Fyb3VzZWxNZXRhZGF0YSB7XG4gIC8qKlxuICAgKiBGaXJzdCBlbGVtZW50XG4gICAqL1xuICBrZXk/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTZWNvbmQgZWxlbWVudFxuICAgKi9cbiAgdmFsdWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2Fyb3VzZWxCYWNrZ3JvdW5kSXRlbSB7XG4gIC8qKlxuICAgKiBCYWNrZ3JvdW5kIGltYWdlIGZvciB0aGUgY2Fyb3VzZWxcbiAgICovXG4gIGltYWdlPzogc3RyaW5nO1xuICAvKipcbiAgICogQmFja2dyb3VuZCB2aWRlbyBmb3IgdGhlIGNhcm91c2VsXG4gICAqL1xuICB2aWRlbz86IHtcbiAgICAvKiogTWVkaWEgVVJMICovXG4gICAgdXJsOiBzdHJpbmc7XG4gICAgLyoqIFBsYWNlaG9sZGVyIGltYWdlIHdoaWxlIGxvYWRpbmcgKi9cbiAgICBwb3N0ZXI/OiBzdHJpbmc7XG4gICAgLyoqIFZpZGVvIHdpZHRoIGluIHBpeGVscyAqL1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgLyoqIFZpZGVvIGhlaWdodCBpbiBwaXhlbHMgKi9cbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgfTtcbiAgLyoqXG4gICAqIEJhY2tncm91bmQgY29sb3IgZm9yIHRoZSBjYXJvdXNlbFxuICAgKi9cbiAgY29sb3I/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBDYXJvdXNlbENvbXBvbmVudCdzIFwiSXRlbVwiXG4gKlxuICogQHByb3BlcnR5IHRpdGxlIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB0ZXh0IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBtZXRhZGF0YSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgYWN0aW9uIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2Fyb3VzZWxGb3JlZ3JvdW5kSXRlbSB7XG4gIC8qKlxuICAgKiBIZWFkZXJcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICogVGV4dCBwYXJhZ3JhcGggLyBzdWJ0aXRsZSAvIHByZXRpdGxlXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICogTWV0YWRhdGFcbiAgICovXG4gIG1ldGFkYXRhPzogQ2Fyb3VzZWxNZXRhZGF0YVtdO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgQ2Fyb3VzZWxDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBpdGVtcyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgaW1hZ2UgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHZpZGVvIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2Fyb3VzZWxEYXRhIHtcbiAgLyoqXG4gICAqIElEIE9mIHRoZSBjYXJvdXNlbCBjb250YWluZXJcbiAgICovXG4gIGNvbnRhaW5lcklkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBPcHRpb25zIGZvciB0aGUgY2Fyb3VzZWwgbGlicmFyeSAoIGRvY3MgaGVyZSA6IGh0dHBzOi8vbGF0dGVjYXJvdXNlbC5kZXYvIClcbiAgICovXG4gIGxpYk9wdGlvbnM/OiBhbnk7XG4gIC8qKlxuICAgKiBBcnJheSBvZiBjYXJvdXNlbCBzbGlkZXNcbiAgICovXG4gIHNsaWRlczoge1xuICAgIGl0ZW1zOiBDYXJvdXNlbEZvcmVncm91bmRJdGVtW107XG4gICAgLyoqXG4gICAgICogQnV0dG9uXG4gICAgICovXG4gICAgYWN0aW9uPzogQ2Fyb3VzZWxCdXR0b247XG4gICAgYmFja2dyb3VuZD86IENhcm91c2VsQmFja2dyb3VuZEl0ZW07XG4gICAgY2xhc3Nlcz86IHN0cmluZztcbiAgfVtdO1xuICAvKipcbiAgICogQ2FsbGJhY2sgZm9yIGdldHRpbmcgdGhlIGNhcm91c2VsIGluc3RhbmNlXG4gICAqL1xuICBzZXRJbnN0YW5jZT86IGFueTtcbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGFjY2VzcyB0aGUgY2Fyb3VzZWwgQVBJXG4gICAqICovXG4gIHNldENvbXBvbmVudEFQST86IGFueTtcbiAgLyoqXG4gICAqIENsYXNzZXMgZm9yIHRoZSBjYXJvdXNlbCBjb21wb25lbnRcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIGRhdGEgdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1jYXJvdXNlbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJvdXNlbC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuICBASW5wdXQoKSBkYXRhOiBDYXJvdXNlbERhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIHByaXZhdGUgbG9hZGVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEFQSSBvZiB0aGUgY2Fyb3VzZWwgY29tcG9uZW50XG4gICAqL1xuICBhcGkgPSB7XG4gICAgLyoqXG4gICAgICogVXNlZCB0byBsYXp5LWxvYWQgdmlkZW8gcmVzb3VyY2VzLlxuICAgICAqIENhbGwgYXBpLmxvYWQudmlkZW9zIG9uIERPTUNvbnRlbnRSZWFkeSBldmVudFxuICAgICAqL1xuICAgIGxvYWQ6IHtcbiAgICAgIC8qKiBDaGFuZ2VzIGFsbCBkYXRhLXNyYyBhdHRyaWJ1dGVzIHRvIHNyYyBhbmQgY2FsbHMgPHZpZGVvPi5sb2FkKCkgKi9cbiAgICAgIHZpZGVvczogKCkgPT4ge1xuICAgICAgICBjb25zdCBzb3VyY2VzID0gQXJyYXkuZnJvbSggLy8gZ2V0cyBhbGwgPHNvdXJjZS5sYXp5PiB0YWdzXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kYXRhLmNvbnRhaW5lcklkKVxuICAgICAgICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xhenknKVxuICAgICAgICApO1xuICAgICAgICBzb3VyY2VzLmZvckVhY2goKHNvdXJjZTogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgICAgICBjb25zdCB1cmwgPSBzb3VyY2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpOyAvLyBnZXRzIHRoZSB2aWRlbyB1cmxcbiAgICAgICAgICBzb3VyY2UuY2xhc3NMaXN0LnJlbW92ZSgnbGF6eScpOyAvLyByZW1vdmVzIHRoZSBsYXp5IGNsYXNzXG4gICAgICAgICAgc291cmNlLnNldEF0dHJpYnV0ZSgnc3JjJywgdXJsKTsgLy8gc2V0cyB0aGUgdXJsIHRvIHNyYyBhdHRyaWJ1dGVcbiAgICAgICAgICBzb3VyY2UucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNyYycpOyAvLyByZW1vdmVzIHRoZSBkYXRhLXNyYyBhdHRyaWJ1dGVcbiAgICAgICAgICAoc291cmNlLnBhcmVudEVsZW1lbnQgYXMgSFRNTFZpZGVvRWxlbWVudCkubG9hZCgpOyAvLyBsb2FkcyB0aGUgdmlkZW9cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGF0YSB8fCB0aGlzLmxvYWRlZCkgcmV0dXJuO1xuICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHsgY29udGFpbmVySWQsIGxpYk9wdGlvbnMgfSA9IHRoaXMuZGF0YTtcbiAgICAgIGltcG9ydCgnbGF0dGUtY2Fyb3VzZWwnKS50aGVuKChtb2R1bGUpID0+IHtcbiAgICAgICAgY29uc3QgeyBDYXJvdXNlbCB9ID0gbW9kdWxlO1xuICAgICAgICBjb25zdCBjaGFydCA9IG5ldyBDYXJvdXNlbChgIyR7Y29udGFpbmVySWR9YCwgbGliT3B0aW9ucyk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnbiwgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGlmICh0aGlzLmRhdGEuc2V0SW5zdGFuY2UpIHRoaXMuZGF0YS5zZXRJbnN0YW5jZSgoZCk6IHZvaWQgPT4geyBkID0gY2hhcnQ7IH0pO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ24sIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBpZiAodGhpcy5kYXRhLnNldENvbXBvbmVudEFQSSkgdGhpcy5kYXRhLnNldENvbXBvbmVudEFQSSgoZCk6IHZvaWQgPT4geyBkID0gdGhpcy5hcGk7IH0pO1xuICAgICAgICB0aGlzLmFkZEJ1dHRvbkV2ZW50cyh0aGlzLmRhdGEpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0aGF0IGFkZHMgdGhlIGV2ZW50IGxpc3RlbmVycyB0byBlYWNoIGJ1dHRvbi5cbiAgICogVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSB3aGVuIFwibmV3IENhcm91c2VsKClcIiBpcyBjYWxsZWQgdGhlIGV2ZW50IGxpc3RlbmVycyBhcmUgbG9zdC5cbiAgICovXG4gIGFkZEJ1dHRvbkV2ZW50cyh7IHNsaWRlcywgY29udGFpbmVySWQgfSkge1xuICAgIC8vIEJ1aWxkIGFycmF5IG9mIGJ1dHRvbi1pZCdzICYgcGF5bG9hZHMuXG4gICAgY29uc3QgYnV0dG9uczogeyBpZDogc3RyaW5nOyBwYXlsb2FkOiBhbnkgfVtdID0gc2xpZGVzXG4gICAgICAubWFwKChzbGlkZSwgc2xpZGVJRCkgPT4gKHtcbiAgICAgICAgLy8gaWQgPSBjb250YWluZXIgaWQgLSBpbmRleCBvZiB0aGUgc2xpZGVcbiAgICAgICAgaWQ6IGAke2NvbnRhaW5lcklkfS0ke3NsaWRlSUR9YCxcbiAgICAgICAgcGF5bG9hZDogKCgoc2xpZGUuYWN0aW9uIHx8IHt9KS5hbmNob3IgfHwge30pLnBheWxvYWQpIHx8IHVuZGVmaW5lZFxuICAgICAgfSkpXG4gICAgICAuZmlsdGVyKChidG4pID0+IGJ0bi5wYXlsb2FkKTtcbiAgICAvLyBmaW5kIGVhY2ggYnV0dG9uJ3MgYW5jaG9yLXdyYXBwZXIgYW5kIGF0dGFjaCB0aGUgZXZlbnQgdG8gaXQuXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2J0bi5pZH1gKS5wYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdjbGljaycsXG4gICAgICAgICgpID0+IHRoaXMub25DbGljayhidG4ucGF5bG9hZClcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==