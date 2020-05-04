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
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
        this.loaded = false;
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
            // id = container id - index of the slide - index of the button
            id: containerId + "-" + slideID + "-" + slide.items.findIndex((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i.action; })),
            payload: (slide.items.find((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i.action; }))
                || { action: { anchor: { payload: undefined } } })
                .action.anchor.payload
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
                    template: "<div *ngIf=\"data\" class=\"n7-carousel {{ data.classes || '' }}\">\n  <!-- Warning: Do not style div.latte-carousel -->\n  <div id=\"{{data.containerId}}\" class=\"latte-carousel\">\n    <ng-container *ngFor=\"let slide of data.slides; let index = index;\">\n      <ng-container *ngTemplateOutlet=\"carouselSlide; context:{slide: slide, index: index}\"></ng-container>\n    </ng-container>\n  </div>\n</div>\n\n<!-- ===== SLIDE WRAPPER ===== -->\n<ng-template #carouselSlide let-slide=\"slide\" let-slideID=\"index\">\n  <!-- Warning: Do not style div.latte-item -->\n  <div class=\"latte-item\">\n    <div\n        class=\"n7-carousel__slide {{ slide.classes || ''}}\"\n        [style.background-color]=\"slide.background.color ? slide.background.color : ''\"\n        [style.background-image]=\"slide.background.image ? 'url('+slide.background.image+')' : ''\">\n      <ng-container *ngTemplateOutlet=\"slideForeground; context:{items: slide.items, slideID: slideID}\">\n      </ng-container>\n      <ng-container *ngIf=\"slide.background\">\n        <ng-container *ngTemplateOutlet=\"slideBackground; context:{$implicit: slide.background}\">\n        </ng-container>\n      </ng-container>\n    </div>\n  </div>\n</ng-template>\n\n<!-- ===== SLIDE FOREGROUND ===== -->\n<ng-template #slideForeground let-items=\"items\" let-slideID=\"slideID\">\n  <ng-container *ngFor=\"let el of items; let itemID = index\">\n    <h1 *ngIf=\"el.title\">{{el.title}}</h1>\n    <span *ngIf=\"el.text\">{{el.text}}</span>\n    <div *ngIf=\"el.metadata\">\n      <ng-container *ngFor=\"let m of el.metadata\">\n        <span *ngIf=\"m.key\">{{m.key}}</span>\n        <span *ngIf=\"m.value\">{{m.value}}</span>\n      </ng-container>\n    </div>\n    <n7-anchor-wrapper\n      *ngIf=\"el.action\"\n      [data]=\"el.action.anchor\"\n      (clicked)=\"onClick($event)\">\n        <button\n          id=\"{{data.containerId}}-{{slideID}}-{{itemID}}\"\n          class=\"n7-hero__btn n7-btn n7-btn-cta n7-btn-l\">\n          {{el.action.text}}\n        </button>\n    </n7-anchor-wrapper>\n  </ng-container>\n</ng-template>\n\n<!-- ===== VIDEO BACKGROUND ===== -->\n<ng-template #slideBackground let-bg>\n  <ng-container *ngIf=\"bg.video\">\n    <!-- src=\"{{bg.video}}\"  -->\n    <video \n      [loop]=\"true\"\n      [muted]=\"true\" \n      [autoplay]=\"true\">\n        <source src=\"{{bg.video}}\">\n    </video>\n  </ng-container>\n</ng-template>\n"
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXVCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7O0FBV3RFLG9DQWNDOzs7Ozs7SUFWQyw4QkFBYzs7Ozs7SUFJZCxpQ0FBaUI7O0lBQ2pCLGdDQUFnQjs7Ozs7SUFJaEIsK0JBQVk7Ozs7Ozs7OztBQVNkLHNDQVNDOzs7Ozs7SUFMQywrQkFBYTs7Ozs7SUFJYixpQ0FBZTs7Ozs7QUFHakIsNENBYUM7Ozs7OztJQVRDLHVDQUFlOzs7OztJQUlmLHVDQUFlOzs7OztJQUlmLHVDQUFlOzs7Ozs7Ozs7Ozs7O0FBYWpCLDRDQWlCQzs7Ozs7O0lBYkMsdUNBQWU7Ozs7O0lBSWYsc0NBQWM7Ozs7O0lBSWQsMENBQThCOzs7OztJQUk5Qix3Q0FBd0I7Ozs7Ozs7Ozs7OztBQVkxQixrQ0E2QkM7Ozs7OztJQXpCQyxtQ0FBb0I7Ozs7O0lBSXBCLGtDQUFpQjs7Ozs7SUFJakIsOEJBSUk7Ozs7O0lBSUosbUNBQWtCOzs7OztJQUlsQiwrQkFBaUI7Ozs7O0lBSWpCLDZCQUFZOztBQUdkO0lBQUE7UUFTVSxXQUFNLEdBQUcsS0FBSyxDQUFDO0lBMkN6QixDQUFDOzs7O0lBekNDLGlEQUFxQjs7O0lBQXJCO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU87UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsVUFBVTs7O1FBQUM7WUFDSCxJQUFBLGVBQXVDLEVBQXJDLDRCQUFXLEVBQUUsMEJBQXdCO1lBQzdDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLE1BQU07Z0JBQzNCLElBQUEsMEJBQVE7O29CQUNWLEtBQUssR0FBRyxJQUFJLFFBQVEsQ0FBQyxNQUFJLFdBQWEsRUFBRSxVQUFVLENBQUM7Z0JBQ3pELGdGQUFnRjtnQkFDaEYsSUFBSSxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7b0JBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXOzs7O29CQUFDLFVBQUMsQ0FBQyxJQUFhLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztnQkFDOUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsbUNBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7SUFDSCwyQ0FBZTs7Ozs7O0lBQWYsVUFBZ0IsRUFBdUI7UUFBdkMsaUJBZ0JDO1lBaEJpQixrQkFBTSxFQUFFLDRCQUFXOzs7WUFFN0IsT0FBTyxHQUFtQyxNQUFNO2FBQ25ELEdBQUc7Ozs7O1FBQUMsVUFBQyxLQUFLLEVBQUUsT0FBTyxJQUFLLE9BQUEsQ0FBQzs7WUFFeEIsRUFBRSxFQUFLLFdBQVcsU0FBSSxPQUFPLFNBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsTUFBTSxFQUFSLENBQVEsRUFBRztZQUN6RSxPQUFPLEVBQ0wsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxNQUFNLEVBQVIsQ0FBUSxFQUFDO21CQUM3QixFQUFFLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7aUJBQ2pELE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTztTQUMzQixDQUFDLEVBUHVCLENBT3ZCLEVBQUM7YUFDRixNQUFNOzs7O1FBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsT0FBTyxFQUFYLENBQVcsRUFBQztRQUMvQixnRUFBZ0U7UUFDaEUsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLEdBQUc7WUFDbEIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFJLEdBQUcsQ0FBQyxFQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsT0FBTzs7O1lBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUF6QixDQUF5QixFQUFDLENBQUM7UUFDaEgsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkFuREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixnNUVBQThCO2lCQUMvQjs7O3VCQUVFLEtBQUs7dUJBRUwsS0FBSzs7SUE2Q1Isd0JBQUM7Q0FBQSxBQXBERCxJQW9EQztTQWhEWSxpQkFBaUI7OztJQUM1QixpQ0FBNEI7O0lBRTVCLGlDQUFtQjs7Ozs7SUFFbkIsbUNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENBUk9VU0VMLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlckNvbnRlbnRDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBQYWdpbmF0aW9uQ29tcG9uZW50J3MgbGlua3MgKHBhZ2VzIGFuZCBuYXZpZ2F0aW9uIGJ1dHRvbnMpXG4gKlxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGFuY2hvciAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIENhcm91c2VsQnV0dG9uIHtcbiAgLyoqXG4gICAqIGlubmVySFRNTCBvciBwbGFpbiB0ZXh0IGZvciB0aGUgbGFiZWxcbiAgICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgYW5jaG9yPzogQW5jaG9yO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvXG4gICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFBhZ2luYXRpb25Db21wb25lbnQncyBNZXRhZGF0YSB0dXBsZXMgKHBhZ2VzIGFuZCBuYXZpZ2F0aW9uIGJ1dHRvbnMpXG4gKlxuICogQHByb3BlcnR5IGtleSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdmFsdWUgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIENhcm91c2VsTWV0YWRhdGEge1xuICAvKipcbiAgICogRmlyc3QgZWxlbWVudFxuICAgKi9cbiAga2V5Pzogc3RyaW5nO1xuICAvKipcbiAgICogU2Vjb25kIGVsZW1lbnRcbiAgICovXG4gIHZhbHVlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhcm91c2VsQmFja2dyb3VuZEl0ZW0ge1xuICAvKipcbiAgICogQmFja2dyb3VuZCBpbWFnZSBmb3IgdGhlIGNhcm91c2VsXG4gICAqL1xuICBpbWFnZT86IHN0cmluZztcbiAgLyoqXG4gICAqIEJhY2tncm91bmQgdmlkZW8gZm9yIHRoZSBjYXJvdXNlbFxuICAgKi9cbiAgdmlkZW8/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciB0aGUgY2Fyb3VzZWxcbiAgICovXG4gIGNvbG9yPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgQ2Fyb3VzZWxDb21wb25lbnQncyBcIkl0ZW1cIlxuICpcbiAqIEBwcm9wZXJ0eSB0aXRsZSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdGV4dCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgbWV0YWRhdGEgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGFjdGlvbiAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIENhcm91c2VsRm9yZWdyb3VuZEl0ZW0ge1xuICAvKipcbiAgICogSGVhZGVyXG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFRleHQgcGFyYWdyYXBoIC8gc3VidGl0bGUgLyBwcmV0aXRsZVxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIE1ldGFkYXRhXG4gICAqL1xuICBtZXRhZGF0YT86IENhcm91c2VsTWV0YWRhdGFbXTtcbiAgLyoqXG4gICAqIEJ1dHRvblxuICAgKi9cbiAgYWN0aW9uPzogQ2Fyb3VzZWxCdXR0b247XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBDYXJvdXNlbENvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGl0ZW1zIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBpbWFnZSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdmlkZW8gKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDYXJvdXNlbERhdGEge1xuICAvKipcbiAgICogSUQgT2YgdGhlIGNhcm91c2VsIGNvbnRhaW5lclxuICAgKi9cbiAgY29udGFpbmVySWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIE9wdGlvbnMgZm9yIHRoZSBjYXJvdXNlbCBsaWJyYXJ5ICggZG9jcyBoZXJlIDogaHR0cHM6Ly9sYXR0ZWNhcm91c2VsLmRldi8gKVxuICAgKi9cbiAgbGliT3B0aW9ucz86IGFueTtcbiAgLyoqXG4gICAqIEFycmF5IG9mIGNhcm91c2VsIHNsaWRlc1xuICAgKi9cbiAgc2xpZGVzOiB7XG4gICAgaXRlbXM6IENhcm91c2VsRm9yZWdyb3VuZEl0ZW1bXTtcbiAgICBiYWNrZ3JvdW5kPzogQ2Fyb3VzZWxCYWNrZ3JvdW5kSXRlbTtcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xuICB9W107XG4gIC8qKlxuICAgKiBDYWxsYmFjayBmb3IgZ2V0dGluZyB0aGUgY2Fyb3VzZWwgaW5zdGFuY2VcbiAgICovXG4gIHNldEluc3RhbmNlPzogYW55O1xuICAvKipcbiAgICogQ2xhc3NlcyBmb3IgdGhlIGNhcm91c2VsIGNvbXBvbmVudFxuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgZGF0YSB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWNhcm91c2VsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nhcm91c2VsLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG4gIEBJbnB1dCgpIGRhdGE6IENhcm91c2VsRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgcHJpdmF0ZSBsb2FkZWQgPSBmYWxzZTtcblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRhdGEgfHwgdGhpcy5sb2FkZWQpIHJldHVybjtcbiAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCB7IGNvbnRhaW5lcklkLCBsaWJPcHRpb25zIH0gPSB0aGlzLmRhdGE7XG4gICAgICBpbXBvcnQoJ2xhdHRlLWNhcm91c2VsJykudGhlbigobW9kdWxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgQ2Fyb3VzZWwgfSA9IG1vZHVsZTtcbiAgICAgICAgY29uc3QgY2hhcnQgPSBuZXcgQ2Fyb3VzZWwoYCMke2NvbnRhaW5lcklkfWAsIGxpYk9wdGlvbnMpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ24sIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBpZiAodGhpcy5kYXRhLnNldEluc3RhbmNlKSB0aGlzLmRhdGEuc2V0SW5zdGFuY2UoKGQpOiB2b2lkID0+IHsgZCA9IGNoYXJ0OyB9KTtcbiAgICAgICAgdGhpcy5hZGRCdXR0b25FdmVudHModGhpcy5kYXRhKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgb25DbGljayhwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cblxuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCBhZGRzIHRoZSBldmVudCBsaXN0ZW5lcnMgdG8gZWFjaCBidXR0b24uXG4gICAqIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugd2hlbiBcIm5ldyBDYXJvdXNlbCgpXCIgaXMgY2FsbGVkIHRoZSBldmVudCBsaXN0ZW5lcnMgYXJlIGxvc3QuXG4gICAqL1xuICBhZGRCdXR0b25FdmVudHMoeyBzbGlkZXMsIGNvbnRhaW5lcklkIH0pIHtcbiAgICAvLyBCdWlsZCBhcnJheSBvZiBidXR0b24taWQncyAmIHBheWxvYWRzLlxuICAgIGNvbnN0IGJ1dHRvbnM6IHsgaWQ6IHN0cmluZzsgcGF5bG9hZDogYW55IH1bXSA9IHNsaWRlc1xuICAgICAgLm1hcCgoc2xpZGUsIHNsaWRlSUQpID0+ICh7XG4gICAgICAgIC8vIGlkID0gY29udGFpbmVyIGlkIC0gaW5kZXggb2YgdGhlIHNsaWRlIC0gaW5kZXggb2YgdGhlIGJ1dHRvblxuICAgICAgICBpZDogYCR7Y29udGFpbmVySWR9LSR7c2xpZGVJRH0tJHtzbGlkZS5pdGVtcy5maW5kSW5kZXgoKGkpID0+IGkuYWN0aW9uKX1gLFxuICAgICAgICBwYXlsb2FkOlxuICAgICAgICAgIChzbGlkZS5pdGVtcy5maW5kKChpKSA9PiBpLmFjdGlvbilcbiAgICAgICAgICAgIHx8IHsgYWN0aW9uOiB7IGFuY2hvcjogeyBwYXlsb2FkOiB1bmRlZmluZWQgfSB9IH0pXG4gICAgICAgICAgICAuYWN0aW9uLmFuY2hvci5wYXlsb2FkXG4gICAgICB9KSlcbiAgICAgIC5maWx0ZXIoKGJ0bikgPT4gYnRuLnBheWxvYWQpO1xuICAgIC8vIGZpbmQgZWFjaCBidXR0b24ncyBhbmNob3Itd3JhcHBlciBhbmQgYXR0YWNoIHRoZSBldmVudCB0byBpdC5cbiAgICBidXR0b25zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7YnRuLmlkfWApLnBhcmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLm9uQ2xpY2soYnRuLnBheWxvYWQpKTtcbiAgICB9KTtcbiAgfVxufVxuIl19