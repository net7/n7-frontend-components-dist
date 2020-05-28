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
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
        var _this = this;
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
                function () {
                    /** @type {?} */
                    var sources = Array.from(// gets all <source.lazy> tags
                    document.getElementById(_this.data.containerId)
                        .getElementsByClassName('lazy'));
                    sources.forEach((/**
                     * @param {?} source
                     * @return {?}
                     */
                    function (source) {
                        /** @type {?} */
                        var url = source.getAttribute('data-src');
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
    CarouselComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.data || this.loaded)
            return;
        this.loaded = true;
        setTimeout((/**
         * @return {?}
         */
        function () {
            var _a = _this.data, containerId = _a.containerId, libOptions = _a.libOptions;
            import('latte-carousel').then((/**
             * @param {?} module
             * @return {?}
             */
            function (module) {
                var Carousel = module.Carousel;
                /** @type {?} */
                var chart = new Carousel("#" + containerId, libOptions);
                // eslint-disable-next-line no-param-reassign, @typescript-eslint/no-unused-vars
                if (_this.data.setInstance)
                    _this.data.setInstance((/**
                     * @param {?} d
                     * @return {?}
                     */
                    function (d) { d = chart; }));
                // eslint-disable-next-line no-param-reassign, @typescript-eslint/no-unused-vars
                if (_this.data.setComponentAPI)
                    _this.data.setComponentAPI((/**
                     * @param {?} d
                     * @return {?}
                     */
                    function (d) { d = _this.api; }));
                _this.addButtonEvents(_this.data);
            }));
        }));
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    CarouselComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    /**
     * Function that adds the event listeners to each button.
     * This is needed because when "new Carousel()" is called the event listeners are lost.
     */
    /**
     * Function that adds the event listeners to each button.
     * This is needed because when "new Carousel()" is called the event listeners are lost.
     * @param {?} __0
     * @return {?}
     */
    CarouselComponent.prototype.addButtonEvents = /**
     * Function that adds the event listeners to each button.
     * This is needed because when "new Carousel()" is called the event listeners are lost.
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var slides = _a.slides, containerId = _a.containerId;
        // Build array of button-id's & payloads.
        /** @type {?} */
        var buttons = slides
            .map((/**
         * @param {?} slide
         * @param {?} slideID
         * @return {?}
         */
        function (slide, slideID) { return ({
            // id = container id - index of the slide
            id: containerId + "-" + slideID,
            payload: (((slide.action || {}).anchor || {}).payload) || undefined
        }); }))
            .filter((/**
         * @param {?} btn
         * @return {?}
         */
        function (btn) { return btn.payload; }));
        // find each button's anchor-wrapper and attach the event to it.
        buttons.forEach((/**
         * @param {?} btn
         * @return {?}
         */
        function (btn) {
            document.querySelector("#" + btn.id).parentElement.addEventListener('click', (/**
             * @return {?}
             */
            function () { return _this.onClick(btn.payload); }));
        }));
    };
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
    return CarouselComponent;
}());
export { CarouselComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxLQUFLLEVBQ2pCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7O0FBV3ZCLG9DQWNDOzs7Ozs7SUFWQyw4QkFBYzs7Ozs7SUFJZCxpQ0FBaUI7O0lBQ2pCLGdDQUFnQjs7Ozs7SUFJaEIsK0JBQVk7Ozs7Ozs7OztBQVNkLHNDQVNDOzs7Ozs7SUFMQywrQkFBYTs7Ozs7SUFJYixpQ0FBZTs7Ozs7QUFHakIsNENBc0JDOzs7Ozs7SUFsQkMsdUNBQWU7Ozs7O0lBSWYsdUNBU0U7Ozs7O0lBSUYsdUNBQWU7Ozs7Ozs7Ozs7Ozs7QUFhakIsNENBYUM7Ozs7OztJQVRDLHVDQUFlOzs7OztJQUlmLHNDQUFjOzs7OztJQUlkLDBDQUE4Qjs7Ozs7Ozs7Ozs7O0FBWWhDLGtDQXFDQzs7Ozs7O0lBakNDLG1DQUFvQjs7Ozs7SUFJcEIsa0NBQWlCOzs7OztJQUlqQiw4QkFRSTs7Ozs7SUFJSixtQ0FBa0I7Ozs7OztJQUlsQix1Q0FBc0I7Ozs7O0lBSXRCLCtCQUFpQjs7Ozs7SUFJakIsNkJBQVk7O0FBR2Q7SUFBQTtRQUFBLGlCQWdGQztRQXZFUyxXQUFNLEdBQUcsS0FBSyxDQUFDOzs7O1FBS3ZCLFFBQUcsR0FBRzs7Ozs7WUFLSixJQUFJLEVBQUU7Ozs7Z0JBRUosTUFBTTs7O2dCQUFFOzt3QkFDQSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBRSw4QkFBOEI7b0JBQ3hELFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7eUJBQzNDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUNsQztvQkFDRCxPQUFPLENBQUMsT0FBTzs7OztvQkFBQyxVQUFD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LENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBekIsQ0FBeUIsRUFDaEMsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBL0VGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsbXhIQUE4QjtpQkFDL0I7Ozt1QkFFRSxLQUFLO3VCQUVMLEtBQUs7O0lBeUVSLHdCQUFDO0NBQUEsQUFoRkQsSUFnRkM7U0E1RVksaUJBQWlCOzs7SUFDNUIsaUNBQTRCOztJQUU1QixpQ0FBbUI7Ozs7O0lBRW5CLG1DQUF1Qjs7Ozs7SUFLdkIsZ0NBcUJFIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENBUk9VU0VMLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQge1xuICBDb21wb25lbnQsIElucHV0LCBBZnRlckNvbnRlbnRDaGVja2VkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5jaG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkLWludGVyZmFjZXMnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgUGFnaW5hdGlvbkNvbXBvbmVudCdzIGxpbmtzIChwYWdlcyBhbmQgbmF2aWdhdGlvbiBidXR0b25zKVxuICpcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBhbmNob3IgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDYXJvdXNlbEJ1dHRvbiB7XG4gIC8qKlxuICAgKiBpbm5lckhUTUwgb3IgcGxhaW4gdGV4dCBmb3IgdGhlIGxhYmVsXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIGFuY2hvcj86IEFuY2hvcjtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBQYWdpbmF0aW9uQ29tcG9uZW50J3MgTWV0YWRhdGEgdHVwbGVzIChwYWdlcyBhbmQgbmF2aWdhdGlvbiBidXR0b25zKVxuICpcbiAqIEBwcm9wZXJ0eSBrZXkgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHZhbHVlIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDYXJvdXNlbE1ldGFkYXRhIHtcbiAgLyoqXG4gICAqIEZpcnN0IGVsZW1lbnRcbiAgICovXG4gIGtleT86IHN0cmluZztcbiAgLyoqXG4gICAqIFNlY29uZCBlbGVtZW50XG4gICAqL1xuICB2YWx1ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXJvdXNlbEJhY2tncm91bmRJdGVtIHtcbiAgLyoqXG4gICAqIEJhY2tncm91bmQgaW1hZ2UgZm9yIHRoZSBjYXJvdXNlbFxuICAgKi9cbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBCYWNrZ3JvdW5kIHZpZGVvIGZvciB0aGUgY2Fyb3VzZWxcbiAgICovXG4gIHZpZGVvPzoge1xuICAgIC8qKiBNZWRpYSBVUkwgKi9cbiAgICB1cmw6IHN0cmluZztcbiAgICAvKiogUGxhY2Vob2xkZXIgaW1hZ2Ugd2hpbGUgbG9hZGluZyAqL1xuICAgIHBvc3Rlcj86IHN0cmluZztcbiAgICAvKiogVmlkZW8gd2lkdGggaW4gcGl4ZWxzICovXG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICAvKiogVmlkZW8gaGVpZ2h0IGluIHBpeGVscyAqL1xuICAgIGhlaWdodDogbnVtYmVyO1xuICB9O1xuICAvKipcbiAgICogQmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIGNhcm91c2VsXG4gICAqL1xuICBjb2xvcj86IHN0cmluZztcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIENhcm91c2VsQ29tcG9uZW50J3MgXCJJdGVtXCJcbiAqXG4gKiBAcHJvcGVydHkgdGl0bGUgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHRleHQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IG1ldGFkYXRhIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBhY3Rpb24gKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDYXJvdXNlbEZvcmVncm91bmRJdGVtIHtcbiAgLyoqXG4gICAqIEhlYWRlclxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUZXh0IHBhcmFncmFwaCAvIHN1YnRpdGxlIC8gcHJldGl0bGVcbiAgICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBNZXRhZGF0YVxuICAgKi9cbiAgbWV0YWRhdGE/OiBDYXJvdXNlbE1ldGFkYXRhW107XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBDYXJvdXNlbENvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGl0ZW1zIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBpbWFnZSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdmlkZW8gKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDYXJvdXNlbERhdGEge1xuICAvKipcbiAgICogSUQgT2YgdGhlIGNhcm91c2VsIGNvbnRhaW5lclxuICAgKi9cbiAgY29udGFpbmVySWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIE9wdGlvbnMgZm9yIHRoZSBjYXJvdXNlbCBsaWJyYXJ5ICggZG9jcyBoZXJlIDogaHR0cHM6Ly9sYXR0ZWNhcm91c2VsLmRldi8gKVxuICAgKi9cbiAgbGliT3B0aW9ucz86IGFueTtcbiAgLyoqXG4gICAqIEFycmF5IG9mIGNhcm91c2VsIHNsaWRlc1xuICAgKi9cbiAgc2xpZGVzOiB7XG4gICAgaXRlbXM6IENhcm91c2VsRm9yZWdyb3VuZEl0ZW1bXTtcbiAgICAvKipcbiAgICAgKiBCdXR0b25cbiAgICAgKi9cbiAgICBhY3Rpb24/OiBDYXJvdXNlbEJ1dHRvbjtcbiAgICBiYWNrZ3JvdW5kPzogQ2Fyb3VzZWxCYWNrZ3JvdW5kSXRlbTtcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xuICB9W107XG4gIC8qKlxuICAgKiBDYWxsYmFjayBmb3IgZ2V0dGluZyB0aGUgY2Fyb3VzZWwgaW5zdGFuY2VcbiAgICovXG4gIHNldEluc3RhbmNlPzogYW55O1xuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gYWNjZXNzIHRoZSBjYXJvdXNlbCBBUElcbiAgICogKi9cbiAgc2V0Q29tcG9uZW50QVBJPzogYW55O1xuICAvKipcbiAgICogQ2xhc3NlcyBmb3IgdGhlIGNhcm91c2VsIGNvbXBvbmVudFxuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgZGF0YSB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWNhcm91c2VsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nhcm91c2VsLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG4gIEBJbnB1dCgpIGRhdGE6IENhcm91c2VsRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgcHJpdmF0ZSBsb2FkZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogQVBJIG9mIHRoZSBjYXJvdXNlbCBjb21wb25lbnRcbiAgICovXG4gIGFwaSA9IHtcbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIGxhenktbG9hZCB2aWRlbyByZXNvdXJjZXMuXG4gICAgICogQ2FsbCBhcGkubG9hZC52aWRlb3Mgb24gRE9NQ29udGVudFJlYWR5IGV2ZW50XG4gICAgICovXG4gICAgbG9hZDoge1xuICAgICAgLyoqIENoYW5nZXMgYWxsIGRhdGEtc3JjIGF0dHJpYnV0ZXMgdG8gc3JjIGFuZCBjYWxscyA8dmlkZW8+LmxvYWQoKSAqL1xuICAgICAgdmlkZW9zOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNvdXJjZXMgPSBBcnJheS5mcm9tKCAvLyBnZXRzIGFsbCA8c291cmNlLmxhenk+IHRhZ3NcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRhdGEuY29udGFpbmVySWQpXG4gICAgICAgICAgICAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGF6eScpXG4gICAgICAgICk7XG4gICAgICAgIHNvdXJjZXMuZm9yRWFjaCgoc291cmNlOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHVybCA9IHNvdXJjZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7IC8vIGdldHMgdGhlIHZpZGVvIHVybFxuICAgICAgICAgIHNvdXJjZS5jbGFzc0xpc3QucmVtb3ZlKCdsYXp5Jyk7IC8vIHJlbW92ZXMgdGhlIGxhenkgY2xhc3NcbiAgICAgICAgICBzb3VyY2Uuc2V0QXR0cmlidXRlKCdzcmMnLCB1cmwpOyAvLyBzZXRzIHRoZSB1cmwgdG8gc3JjIGF0dHJpYnV0ZVxuICAgICAgICAgIHNvdXJjZS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7IC8vIHJlbW92ZXMgdGhlIGRhdGEtc3JjIGF0dHJpYnV0ZVxuICAgICAgICAgIChzb3VyY2UucGFyZW50RWxlbWVudCBhcyBIVE1MVmlkZW9FbGVtZW50KS5sb2FkKCk7IC8vIGxvYWRzIHRoZSB2aWRlb1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kYXRhIHx8IHRoaXMubG9hZGVkKSByZXR1cm47XG4gICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgeyBjb250YWluZXJJZCwgbGliT3B0aW9ucyB9ID0gdGhpcy5kYXRhO1xuICAgICAgaW1wb3J0KCdsYXR0ZS1jYXJvdXNlbCcpLnRoZW4oKG1vZHVsZSkgPT4ge1xuICAgICAgICBjb25zdCB7IENhcm91c2VsIH0gPSBtb2R1bGU7XG4gICAgICAgIGNvbnN0IGNoYXJ0ID0gbmV3IENhcm91c2VsKGAjJHtjb250YWluZXJJZH1gLCBsaWJPcHRpb25zKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduLCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5zZXRJbnN0YW5jZSkgdGhpcy5kYXRhLnNldEluc3RhbmNlKChkKTogdm9pZCA9PiB7IGQgPSBjaGFydDsgfSk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnbiwgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGlmICh0aGlzLmRhdGEuc2V0Q29tcG9uZW50QVBJKSB0aGlzLmRhdGEuc2V0Q29tcG9uZW50QVBJKChkKTogdm9pZCA9PiB7IGQgPSB0aGlzLmFwaTsgfSk7XG4gICAgICAgIHRoaXMuYWRkQnV0dG9uRXZlbnRzKHRoaXMuZGF0YSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgYWRkcyB0aGUgZXZlbnQgbGlzdGVuZXJzIHRvIGVhY2ggYnV0dG9uLlxuICAgKiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHdoZW4gXCJuZXcgQ2Fyb3VzZWwoKVwiIGlzIGNhbGxlZCB0aGUgZXZlbnQgbGlzdGVuZXJzIGFyZSBsb3N0LlxuICAgKi9cbiAgYWRkQnV0dG9uRXZlbnRzKHsgc2xpZGVzLCBjb250YWluZXJJZCB9KSB7XG4gICAgLy8gQnVpbGQgYXJyYXkgb2YgYnV0dG9uLWlkJ3MgJiBwYXlsb2Fkcy5cbiAgICBjb25zdCBidXR0b25zOiB7IGlkOiBzdHJpbmc7IHBheWxvYWQ6IGFueSB9W10gPSBzbGlkZXNcbiAgICAgIC5tYXAoKHNsaWRlLCBzbGlkZUlEKSA9PiAoe1xuICAgICAgICAvLyBpZCA9IGNvbnRhaW5lciBpZCAtIGluZGV4IG9mIHRoZSBzbGlkZVxuICAgICAgICBpZDogYCR7Y29udGFpbmVySWR9LSR7c2xpZGVJRH1gLFxuICAgICAgICBwYXlsb2FkOiAoKChzbGlkZS5hY3Rpb24gfHwge30pLmFuY2hvciB8fCB7fSkucGF5bG9hZCkgfHwgdW5kZWZpbmVkXG4gICAgICB9KSlcbiAgICAgIC5maWx0ZXIoKGJ0bikgPT4gYnRuLnBheWxvYWQpO1xuICAgIC8vIGZpbmQgZWFjaCBidXR0b24ncyBhbmNob3Itd3JhcHBlciBhbmQgYXR0YWNoIHRoZSBldmVudCB0byBpdC5cbiAgICBidXR0b25zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7YnRuLmlkfWApLnBhcmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgKCkgPT4gdGhpcy5vbkNsaWNrKGJ0bi5wYXlsb2FkKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxufVxuIl19