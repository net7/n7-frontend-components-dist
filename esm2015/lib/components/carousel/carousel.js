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
    /**
     * Button
     * @type {?|undefined}
     */
    CarouselForegroundItem.prototype.action;
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
            // id = container id - index of the slide - index of the button
            id: `${containerId}-${slideID}-${slide.items.findIndex((/**
             * @param {?} i
             * @return {?}
             */
            (i) => i.action))}`,
            payload: (slide.items.find((/**
             * @param {?} i
             * @return {?}
             */
            (i) => i.action))
                || { action: { anchor: { payload: undefined } } })
                .action.anchor.payload
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
                template: "<div *ngIf=\"data\" class=\"n7-carousel {{ data.classes || '' }}\">\n  <!-- Warning: Do not style div.latte-carousel -->\n  <div id=\"{{data.containerId}}\" class=\"latte-carousel\">\n    <ng-container *ngFor=\"let slide of data.slides; let index = index;\">\n      <ng-container *ngTemplateOutlet=\"carouselSlide; context:{slide: slide, index: index}\"></ng-container>\n    </ng-container>\n  </div>\n</div>\n\n<!-- ===== SLIDE WRAPPER ===== -->\n<ng-template #carouselSlide let-slide=\"slide\" let-slideID=\"index\">\n  <!-- Warning: Do not style div.latte-item -->\n  <div class=\"latte-item\">\n    <div\n        class=\"n7-carousel__slide {{ slide.classes || ''}}\"\n        [style.background-color]=\"slide.background.color ? slide.background.color : ''\"\n        [style.background-image]=\"slide.background.image ? 'url('+slide.background.image+')' : ''\">\n      <ng-container *ngTemplateOutlet=\"slideForeground; context:{items: slide.items, slideID: slideID}\">\n      </ng-container>\n      <ng-container *ngIf=\"slide.background\">\n        <ng-container *ngTemplateOutlet=\"slideBackground; context:{$implicit: slide.background}\">\n        </ng-container>\n      </ng-container>\n    </div>\n  </div>\n</ng-template>\n\n<!-- ===== SLIDE FOREGROUND ===== -->\n<ng-template #slideForeground let-items=\"items\" let-slideID=\"slideID\">\n  <ng-container *ngFor=\"let el of items; let itemID = index\">\n    <h1 *ngIf=\"el.title\">{{el.title}}</h1>\n    <span *ngIf=\"el.text\">{{el.text}}</span>\n    <div *ngIf=\"el.metadata\">\n      <ng-container *ngFor=\"let m of el.metadata\">\n        <span *ngIf=\"m.key\">{{m.key}}</span>\n        <span *ngIf=\"m.value\">{{m.value}}</span>\n      </ng-container>\n    </div>\n    <n7-anchor-wrapper\n      *ngIf=\"el.action\"\n      [data]=\"el.action.anchor\"\n      (clicked)=\"onClick($event)\">\n        <button\n          id=\"{{data.containerId}}-{{slideID}}-{{itemID}}\"\n          class=\"n7-hero__btn n7-btn n7-btn-cta n7-btn-l\">\n          {{el.action.text}}\n        </button>\n    </n7-anchor-wrapper>\n  </ng-container>\n</ng-template>\n\n<!-- ===== VIDEO BACKGROUND ===== -->\n<ng-template #slideBackground let-bg>\n  <ng-container *ngIf=\"bg.video\">\n    <!-- src=\"{{bg.video}}\"  -->\n    <video \n      [loop]=\"true\"\n      [muted]=\"true\" \n      [autoplay]=\"true\">\n        <source src=\"{{bg.video}}\">\n    </video>\n  </ng-container>\n</ng-template>\n"
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXVCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7O0FBV3RFLG9DQWNDOzs7Ozs7SUFWQyw4QkFBYzs7Ozs7SUFJZCxpQ0FBaUI7O0lBQ2pCLGdDQUFnQjs7Ozs7SUFJaEIsK0JBQVk7Ozs7Ozs7OztBQVNkLHNDQVNDOzs7Ozs7SUFMQywrQkFBYTs7Ozs7SUFJYixpQ0FBZTs7Ozs7QUFHakIsNENBYUM7Ozs7OztJQVRDLHVDQUFlOzs7OztJQUlmLHVDQUFlOzs7OztJQUlmLHVDQUFlOzs7Ozs7Ozs7Ozs7O0FBYWpCLDRDQWlCQzs7Ozs7O0lBYkMsdUNBQWU7Ozs7O0lBSWYsc0NBQWM7Ozs7O0lBSWQsMENBQThCOzs7OztJQUk5Qix3Q0FBd0I7Ozs7Ozs7Ozs7OztBQVkxQixrQ0E2QkM7Ozs7OztJQXpCQyxtQ0FBb0I7Ozs7O0lBSXBCLGtDQUFpQjs7Ozs7SUFJakIsOEJBSUk7Ozs7O0lBSUosbUNBQWtCOzs7OztJQUlsQiwrQkFBaUI7Ozs7O0lBSWpCLDZCQUFZOztBQU9kLE1BQU0sT0FBTyxpQkFBaUI7SUFKOUI7UUFTVSxXQUFNLEdBQUcsS0FBSyxDQUFDO0lBMkN6QixDQUFDOzs7O0lBekNDLHFCQUFxQjtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU87UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO2tCQUNSLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJO1lBQzdDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO3NCQUNqQyxFQUFFLFFBQVEsRUFBRSxHQUFHLE1BQU07O3NCQUNyQixLQUFLLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxXQUFXLEVBQUUsRUFBRSxVQUFVLENBQUM7Z0JBQ3pELGdGQUFnRjtnQkFDaEYsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7b0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXOzs7O29CQUFDLENBQUMsQ0FBQyxFQUFRLEVBQUUsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7Z0JBQzlFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7O0lBTUQsZUFBZSxDQUFDLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTs7O2NBRS9CLE9BQU8sR0FBbUMsTUFBTTthQUNuRCxHQUFHOzs7OztRQUFDLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQzs7WUFFeEIsRUFBRSxFQUFFLEdBQUcsV0FBVyxJQUFJLE9BQU8sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVM7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBQyxFQUFFO1lBQ3pFLE9BQU8sRUFDTCxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFDO21CQUM3QixFQUFFLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7aUJBQ2pELE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTztTQUMzQixDQUFDLEVBQUM7YUFDRixNQUFNOzs7O1FBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUM7UUFDL0IsZ0VBQWdFO1FBQ2hFLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUN0QixRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU87OztZQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUM7UUFDaEgsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFuREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixnNUVBQThCO2FBQy9COzs7bUJBRUUsS0FBSzttQkFFTCxLQUFLOzs7O0lBRk4saUNBQTRCOztJQUU1QixpQ0FBbUI7Ozs7O0lBRW5CLG1DQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDQVJPVVNFTC50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5jaG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkLWludGVyZmFjZXMnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgUGFnaW5hdGlvbkNvbXBvbmVudCdzIGxpbmtzIChwYWdlcyBhbmQgbmF2aWdhdGlvbiBidXR0b25zKVxuICpcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBhbmNob3IgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDYXJvdXNlbEJ1dHRvbiB7XG4gIC8qKlxuICAgKiBpbm5lckhUTUwgb3IgcGxhaW4gdGV4dCBmb3IgdGhlIGxhYmVsXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIGFuY2hvcj86IEFuY2hvcjtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBQYWdpbmF0aW9uQ29tcG9uZW50J3MgTWV0YWRhdGEgdHVwbGVzIChwYWdlcyBhbmQgbmF2aWdhdGlvbiBidXR0b25zKVxuICpcbiAqIEBwcm9wZXJ0eSBrZXkgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHZhbHVlIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDYXJvdXNlbE1ldGFkYXRhIHtcbiAgLyoqXG4gICAqIEZpcnN0IGVsZW1lbnRcbiAgICovXG4gIGtleT86IHN0cmluZztcbiAgLyoqXG4gICAqIFNlY29uZCBlbGVtZW50XG4gICAqL1xuICB2YWx1ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXJvdXNlbEJhY2tncm91bmRJdGVtIHtcbiAgLyoqXG4gICAqIEJhY2tncm91bmQgaW1hZ2UgZm9yIHRoZSBjYXJvdXNlbFxuICAgKi9cbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBCYWNrZ3JvdW5kIHZpZGVvIGZvciB0aGUgY2Fyb3VzZWxcbiAgICovXG4gIHZpZGVvPzogc3RyaW5nO1xuICAvKipcbiAgICogQmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIGNhcm91c2VsXG4gICAqL1xuICBjb2xvcj86IHN0cmluZztcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIENhcm91c2VsQ29tcG9uZW50J3MgXCJJdGVtXCJcbiAqXG4gKiBAcHJvcGVydHkgdGl0bGUgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHRleHQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IG1ldGFkYXRhIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBhY3Rpb24gKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDYXJvdXNlbEZvcmVncm91bmRJdGVtIHtcbiAgLyoqXG4gICAqIEhlYWRlclxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUZXh0IHBhcmFncmFwaCAvIHN1YnRpdGxlIC8gcHJldGl0bGVcbiAgICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBNZXRhZGF0YVxuICAgKi9cbiAgbWV0YWRhdGE/OiBDYXJvdXNlbE1ldGFkYXRhW107XG4gIC8qKlxuICAgKiBCdXR0b25cbiAgICovXG4gIGFjdGlvbj86IENhcm91c2VsQnV0dG9uO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgQ2Fyb3VzZWxDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBpdGVtcyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgaW1hZ2UgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHZpZGVvIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2Fyb3VzZWxEYXRhIHtcbiAgLyoqXG4gICAqIElEIE9mIHRoZSBjYXJvdXNlbCBjb250YWluZXJcbiAgICovXG4gIGNvbnRhaW5lcklkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBPcHRpb25zIGZvciB0aGUgY2Fyb3VzZWwgbGlicmFyeSAoIGRvY3MgaGVyZSA6IGh0dHBzOi8vbGF0dGVjYXJvdXNlbC5kZXYvIClcbiAgICovXG4gIGxpYk9wdGlvbnM/OiBhbnk7XG4gIC8qKlxuICAgKiBBcnJheSBvZiBjYXJvdXNlbCBzbGlkZXNcbiAgICovXG4gIHNsaWRlczoge1xuICAgIGl0ZW1zOiBDYXJvdXNlbEZvcmVncm91bmRJdGVtW107XG4gICAgYmFja2dyb3VuZD86IENhcm91c2VsQmFja2dyb3VuZEl0ZW07XG4gICAgY2xhc3Nlcz86IHN0cmluZztcbiAgfVtdO1xuICAvKipcbiAgICogQ2FsbGJhY2sgZm9yIGdldHRpbmcgdGhlIGNhcm91c2VsIGluc3RhbmNlXG4gICAqL1xuICBzZXRJbnN0YW5jZT86IGFueTtcbiAgLyoqXG4gICAqIENsYXNzZXMgZm9yIHRoZSBjYXJvdXNlbCBjb21wb25lbnRcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIGRhdGEgdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1jYXJvdXNlbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJvdXNlbC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuICBASW5wdXQoKSBkYXRhOiBDYXJvdXNlbERhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIHByaXZhdGUgbG9hZGVkID0gZmFsc2U7XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kYXRhIHx8IHRoaXMubG9hZGVkKSByZXR1cm47XG4gICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgeyBjb250YWluZXJJZCwgbGliT3B0aW9ucyB9ID0gdGhpcy5kYXRhO1xuICAgICAgaW1wb3J0KCdsYXR0ZS1jYXJvdXNlbCcpLnRoZW4oKG1vZHVsZSkgPT4ge1xuICAgICAgICBjb25zdCB7IENhcm91c2VsIH0gPSBtb2R1bGU7XG4gICAgICAgIGNvbnN0IGNoYXJ0ID0gbmV3IENhcm91c2VsKGAjJHtjb250YWluZXJJZH1gLCBsaWJPcHRpb25zKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduLCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5zZXRJbnN0YW5jZSkgdGhpcy5kYXRhLnNldEluc3RhbmNlKChkKTogdm9pZCA9PiB7IGQgPSBjaGFydDsgfSk7XG4gICAgICAgIHRoaXMuYWRkQnV0dG9uRXZlbnRzKHRoaXMuZGF0YSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgYWRkcyB0aGUgZXZlbnQgbGlzdGVuZXJzIHRvIGVhY2ggYnV0dG9uLlxuICAgKiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHdoZW4gXCJuZXcgQ2Fyb3VzZWwoKVwiIGlzIGNhbGxlZCB0aGUgZXZlbnQgbGlzdGVuZXJzIGFyZSBsb3N0LlxuICAgKi9cbiAgYWRkQnV0dG9uRXZlbnRzKHsgc2xpZGVzLCBjb250YWluZXJJZCB9KSB7XG4gICAgLy8gQnVpbGQgYXJyYXkgb2YgYnV0dG9uLWlkJ3MgJiBwYXlsb2Fkcy5cbiAgICBjb25zdCBidXR0b25zOiB7IGlkOiBzdHJpbmc7IHBheWxvYWQ6IGFueSB9W10gPSBzbGlkZXNcbiAgICAgIC5tYXAoKHNsaWRlLCBzbGlkZUlEKSA9PiAoe1xuICAgICAgICAvLyBpZCA9IGNvbnRhaW5lciBpZCAtIGluZGV4IG9mIHRoZSBzbGlkZSAtIGluZGV4IG9mIHRoZSBidXR0b25cbiAgICAgICAgaWQ6IGAke2NvbnRhaW5lcklkfS0ke3NsaWRlSUR9LSR7c2xpZGUuaXRlbXMuZmluZEluZGV4KChpKSA9PiBpLmFjdGlvbil9YCxcbiAgICAgICAgcGF5bG9hZDpcbiAgICAgICAgICAoc2xpZGUuaXRlbXMuZmluZCgoaSkgPT4gaS5hY3Rpb24pXG4gICAgICAgICAgICB8fCB7IGFjdGlvbjogeyBhbmNob3I6IHsgcGF5bG9hZDogdW5kZWZpbmVkIH0gfSB9KVxuICAgICAgICAgICAgLmFjdGlvbi5hbmNob3IucGF5bG9hZFxuICAgICAgfSkpXG4gICAgICAuZmlsdGVyKChidG4pID0+IGJ0bi5wYXlsb2FkKTtcbiAgICAvLyBmaW5kIGVhY2ggYnV0dG9uJ3MgYW5jaG9yLXdyYXBwZXIgYW5kIGF0dGFjaCB0aGUgZXZlbnQgdG8gaXQuXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2J0bi5pZH1gKS5wYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5vbkNsaWNrKGJ0bi5wYXlsb2FkKSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==