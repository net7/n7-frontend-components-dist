/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/image-viewer/image-viewer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// IMAGE-VIEWER.ts
//---------------------------
import { Component, Input } from '@angular/core';
import openseadragon from 'openseadragon';
/**
 * Interface for ImageViewerComponent's images "data"
 *
 * Here the main options available, for a complete guide of image settings
 * view the official openseadragon documentation https://openseadragon.github.io/
 * All available options here: https://openseadragon.github.io/docs/OpenSeadragon.html
 *
 * \@property type (required) Admitted values 'image' | 'zoomifytileservice' | 'openstreetmaps' | 'tiledmapservice' | 'legacy-image-pyramid'
 * \@property height (optional) image height
 * \@property width (optional) image width
 * \@property url (required) image url
 * \@property buildPyramid (optional)
 * \@property crossOriginPolicy (optional) Admitted values 'Anonymous' | 'use-credentials' | false;
 * @record
 */
export function IImageData() { }
if (false) {
    /** @type {?} */
    IImageData.prototype.type;
    /** @type {?|undefined} */
    IImageData.prototype.height;
    /** @type {?|undefined} */
    IImageData.prototype.width;
    /** @type {?} */
    IImageData.prototype.url;
    /** @type {?} */
    IImageData.prototype.buildPyramid;
    /** @type {?|undefined} */
    IImageData.prototype.crossOriginPolicy;
}
/**
 * Interface for ImageViewerComponent's thumbs to preview available images
 *
 * \@property url (required) image url
 * @record
 */
export function IThumbsData() { }
if (false) {
    /** @type {?} */
    IThumbsData.prototype.url;
    /**
     * action click's payload
     * @type {?|undefined}
     */
    IThumbsData.prototype.payload;
    /** @type {?|undefined} */
    IThumbsData.prototype.classes;
}
/**
 * Interface for ImageViewerComponent's "data"
 *
 * \@property prefixUrl (optional) Prepends the prefixUrl to navImages paths. Default is //openseadragon.github.io/openseadragon/images/
 * \@property classes (optional)
 * \@property viewerWidth (optional)
 * \@property viewerHeight (optional)
 * \@property images (required)
 * \@property viewerId (required) The id to assign to the imageviewer container
 * \@property libOptions (required)
 * @record
 */
export function IImageViewerData() { }
if (false) {
    /** @type {?|undefined} */
    IImageViewerData.prototype.prefixUrl;
    /** @type {?|undefined} */
    IImageViewerData.prototype.classes;
    /** @type {?|undefined} */
    IImageViewerData.prototype.viewerWidth;
    /** @type {?|undefined} */
    IImageViewerData.prototype.viewerHeight;
    /** @type {?} */
    IImageViewerData.prototype.images;
    /** @type {?|undefined} */
    IImageViewerData.prototype.thumbs;
    /** @type {?} */
    IImageViewerData.prototype.viewerId;
    /** @type {?} */
    IImageViewerData.prototype.libOptions;
    /** @type {?} */
    IImageViewerData.prototype._setViewer;
}
/**
 * ImageViewerComponent <n7-image-viewer>
 *
 */
export class ImageViewerComponent {
    constructor() {
        this._loaded = false;
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        if (!this.data || this._loaded)
            return;
        this._loaded = true;
        setTimeout((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let prefixUrl = !this.data.prefixUrl ? "//openseadragon.github.io/openseadragon/images/" : this.data.prefixUrl;
            /** @type {?} */
            const viewer = openseadragon(Object.assign({ id: this.data.viewerId, prefixUrl: prefixUrl, tileSources: this.data.images, zoomInButton: "n7-image-viewer-zoom-in", zoomOutButton: "n7-image-viewer-zoom-out", homeButton: "n7-image-viewer-home", fullPageButton: "n7-image-viewer-full-screen" }, this.data.libOptions));
            this.data._setViewer(viewer);
        }));
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit("thumbclick", payload);
    }
}
ImageViewerComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-image-viewer',
                template: "<div *ngIf=\"data\" class=\"n7-image-viewer {{data.classes || ''}}\">\n    <!-- OSD viewer -->\n    <div id=\"{{data.viewerId}}\" class=\"n7-image-viewer__viewer\">\n    </div>\n\n    <!-- Thumbs -->\n    <div class=\"n7-image-viewer__thumbs\" *ngIf=\"data.thumbs\">\n        <ul class=\"n7-image-viewer__thumb-list\">\n            <li *ngFor=\"let thumb of data.thumbs\" \n                class=\"n7-image-viewer__thumb-item {{thumb.classes || ''}}\"\n                [ngStyle]=\"{'background-image': 'url(' + thumb.url + ')'}\"\n                (click)=\"onClick(thumb.payload)\">\n            </li>\n        </ul>\n    </div>\n\n    <!-- Zoom controls -->\n    <div class=\"n7-image-viewer__controls\">\n        <ul class=\"n7-image-viewer__controls-list\">\n            <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-zoom-in\">\n                <span class=\"n7-icon-search-plus\"></span>\n            </li>\n            <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-zoom-out\">\n                <span class=\"n7-icon-search-minus\"></span>\n            </li>\n            <!--\n            <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-home\">\n                <span class=\"n7-icon-home\"></span>\n            </li>\n            <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-full-screen\">\n                <span class=\"n7-icon-expand-arrows\"></span>\n            </li>\n            -->\n        </ul>\n    </div>\n</div>"
            }] }
];
ImageViewerComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ImageViewerComponent.prototype.data;
    /** @type {?} */
    ImageViewerComponent.prototype.emit;
    /**
     * @type {?}
     * @private
     */
    ImageViewerComponent.prototype._loaded;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbWFnZS12aWV3ZXIvaW1hZ2Utdmlld2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxhQUFhLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBaUIxQyxnQ0FPQzs7O0lBTkMsMEJBQXFHOztJQUNyRyw0QkFBZ0I7O0lBQ2hCLDJCQUFlOztJQUNmLHlCQUFZOztJQUNaLGtDQUFzQjs7SUFDdEIsdUNBQTREOzs7Ozs7OztBQVE5RCxpQ0FPQzs7O0lBTkMsMEJBQVk7Ozs7O0lBSVosOEJBQWM7O0lBQ2QsOEJBQWlCOzs7Ozs7Ozs7Ozs7OztBQWNuQixzQ0FhQzs7O0lBWEMscUNBQW1COztJQUNuQixtQ0FBaUI7O0lBQ2pCLHVDQUFxQjs7SUFDckIsd0NBQXNCOztJQUN0QixrQ0FBOEI7O0lBQzlCLGtDQUFnQzs7SUFDaEMsb0NBQWlCOztJQUVqQixzQ0FBZ0I7O0lBRWhCLHNDQUFnQjs7Ozs7O0FBV2xCLE1BQU0sT0FBTyxvQkFBb0I7SUFKakM7UUFRVSxZQUFPLEdBQVksS0FBSyxDQUFDO0lBK0JuQyxDQUFDOzs7O0lBN0JDLHFCQUFxQjtRQUNuQixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFcEIsVUFBVTs7O1FBQUMsR0FBRyxFQUFFOztnQkFDVixTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsaURBQWlELENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUzs7a0JBRXhHLE1BQU0sR0FBRyxhQUFhLGlCQUMxQixFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQ3RCLFNBQVMsRUFBRyxTQUFTLEVBQ3JCLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFDN0IsWUFBWSxFQUFFLHlCQUF5QixFQUN2QyxhQUFhLEVBQUUsMEJBQTBCLEVBQ3pDLFVBQVUsRUFBRSxzQkFBc0IsRUFDbEMsY0FBYyxFQUFFLDZCQUE2QixJQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFHekI7WUFFRixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUvQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7OztZQXRDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsZy9DQUFrQzthQUNuQzs7O21CQUVFLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLG9DQUFnQzs7SUFDaEMsb0NBQW1COzs7OztJQUVuQix1Q0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSU1BR0UtVklFV0VSLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgb3BlbnNlYWRyYWdvbiBmcm9tICdvcGVuc2VhZHJhZ29uJztcbi8vZGVjbGFyZSB2YXIgcmVxdWlyZTogYW55O1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgSW1hZ2VWaWV3ZXJDb21wb25lbnQncyBpbWFnZXMgXCJkYXRhXCJcbiAqXG4gKiBIZXJlIHRoZSBtYWluIG9wdGlvbnMgYXZhaWxhYmxlLCBmb3IgYSBjb21wbGV0ZSBndWlkZSBvZiBpbWFnZSBzZXR0aW5nc1xuICogdmlldyB0aGUgb2ZmaWNpYWwgb3BlbnNlYWRyYWdvbiBkb2N1bWVudGF0aW9uIGh0dHBzOi8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vXG4gKiBBbGwgYXZhaWxhYmxlIG9wdGlvbnMgaGVyZTogaHR0cHM6Ly9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9kb2NzL09wZW5TZWFkcmFnb24uaHRtbFxuICpcbiAqIEBwcm9wZXJ0eSAgdHlwZSAocmVxdWlyZWQpIEFkbWl0dGVkIHZhbHVlcyAnaW1hZ2UnIHwgJ3pvb21pZnl0aWxlc2VydmljZScgfCAnb3BlbnN0cmVldG1hcHMnIHwgJ3RpbGVkbWFwc2VydmljZScgfCAnbGVnYWN5LWltYWdlLXB5cmFtaWQnXG4gKiBAcHJvcGVydHkgIGhlaWdodCAob3B0aW9uYWwpIGltYWdlIGhlaWdodFxuICogQHByb3BlcnR5ICB3aWR0aCAob3B0aW9uYWwpIGltYWdlIHdpZHRoXG4gKiBAcHJvcGVydHkgIHVybCAocmVxdWlyZWQpIGltYWdlIHVybFxuICogQHByb3BlcnR5ICBidWlsZFB5cmFtaWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5ICBjcm9zc09yaWdpblBvbGljeSAob3B0aW9uYWwpIEFkbWl0dGVkIHZhbHVlcyAnQW5vbnltb3VzJyB8ICd1c2UtY3JlZGVudGlhbHMnIHwgZmFsc2U7XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUltYWdlRGF0YSB7XG4gIHR5cGU6ICdpbWFnZScgfCAnem9vbWlmeXRpbGVzZXJ2aWNlJyB8ICdvcGVuc3RyZWV0bWFwcycgfCAndGlsZWRtYXBzZXJ2aWNlJyB8ICdsZWdhY3ktaW1hZ2UtcHlyYW1pZCc7XG4gIGhlaWdodD86IG51bWJlcjtcbiAgd2lkdGg/OiBudW1iZXI7XG4gIHVybDogc3RyaW5nO1xuICBidWlsZFB5cmFtaWQ6IGJvb2xlYW47XG4gIGNyb3NzT3JpZ2luUG9saWN5PzogJ0Fub255bW91cycgfCAndXNlLWNyZWRlbnRpYWxzJyB8IGZhbHNlO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgSW1hZ2VWaWV3ZXJDb21wb25lbnQncyB0aHVtYnMgdG8gcHJldmlldyBhdmFpbGFibGUgaW1hZ2VzXG4gKlxuICogQHByb3BlcnR5ICB1cmwgKHJlcXVpcmVkKSBpbWFnZSB1cmxcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJVGh1bWJzRGF0YSB7XG4gIHVybDogc3RyaW5nO1xuICAvKipcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbiAgY2xhc3Nlcz86IHN0cmluZztcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEltYWdlVmlld2VyQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgcHJlZml4VXJsIChvcHRpb25hbCkgUHJlcGVuZHMgdGhlIHByZWZpeFVybCB0byBuYXZJbWFnZXMgcGF0aHMuIERlZmF1bHQgaXMgLy9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9vcGVuc2VhZHJhZ29uL2ltYWdlcy9cbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB2aWV3ZXJXaWR0aCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdmlld2VySGVpZ2h0IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpbWFnZXMgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHZpZXdlcklkIChyZXF1aXJlZCkgVGhlIGlkIHRvIGFzc2lnbiB0byB0aGUgaW1hZ2V2aWV3ZXIgY29udGFpbmVyXG4gKiBAcHJvcGVydHkgbGliT3B0aW9ucyAocmVxdWlyZWQpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUltYWdlVmlld2VyRGF0YSB7XG4gIC8qdmlld2VyIGljb24ncyBkaXJlY3RvcnkgcGF0aCAqL1xuICBwcmVmaXhVcmw/OiBzdHJpbmc7XG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIHZpZXdlcldpZHRoPzogbnVtYmVyO1xuICB2aWV3ZXJIZWlnaHQ/OiBudW1iZXI7XG4gIGltYWdlczogSUltYWdlRGF0YVtdIHwgc3RyaW5nO1xuICB0aHVtYnM/OiBJVGh1bWJzRGF0YVtdIHwgc3RyaW5nO1xuICB2aWV3ZXJJZDogc3RyaW5nO1xuICAvKmZvciBhIGxpc3Qgb2Ygb3B0aW9ucyB2aWV3IHRoZSBvZmZpY2lhbCBvcGVuc2VhZHJhZ29uIGRvY3VtZW50YXRpb24gaHR0cDovL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL2RvY3MvT3BlblNlYWRyYWdvbi5odG1sIy5PcHRpb25zICovXG4gIGxpYk9wdGlvbnM6IGFueTtcbiAgLyogQSBtZXRob2QgcmV0dXJuaW5nIHRoZSBsaWJyYXJ5IGluc3RhbmNlICovXG4gIF9zZXRWaWV3ZXI6IGFueTtcbn1cblxuLyoqXG4gKiBJbWFnZVZpZXdlckNvbXBvbmVudCA8bjctaW1hZ2Utdmlld2VyPlxuICpcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctaW1hZ2Utdmlld2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLXZpZXdlci5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJbWFnZVZpZXdlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElJbWFnZVZpZXdlckRhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBwcml2YXRlIF9sb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKXtcbiAgICBpZighdGhpcy5kYXRhIHx8IHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xuICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCBwcmVmaXhVcmwgPSAhdGhpcy5kYXRhLnByZWZpeFVybCA/IFwiLy9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9vcGVuc2VhZHJhZ29uL2ltYWdlcy9cIiA6IHRoaXMuZGF0YS5wcmVmaXhVcmw7XG5cbiAgICAgIGNvbnN0IHZpZXdlciA9IG9wZW5zZWFkcmFnb24oe1xuICAgICAgICBpZDogdGhpcy5kYXRhLnZpZXdlcklkLFxuICAgICAgICBwcmVmaXhVcmwgOiBwcmVmaXhVcmwsXG4gICAgICAgIHRpbGVTb3VyY2VzOiB0aGlzLmRhdGEuaW1hZ2VzLFxuICAgICAgICB6b29tSW5CdXR0b246IFwibjctaW1hZ2Utdmlld2VyLXpvb20taW5cIixcbiAgICAgICAgem9vbU91dEJ1dHRvbjogXCJuNy1pbWFnZS12aWV3ZXItem9vbS1vdXRcIixcbiAgICAgICAgaG9tZUJ1dHRvbjogXCJuNy1pbWFnZS12aWV3ZXItaG9tZVwiLFxuICAgICAgICBmdWxsUGFnZUJ1dHRvbjogXCJuNy1pbWFnZS12aWV3ZXItZnVsbC1zY3JlZW5cIixcbiAgICAgICAgICAuLi50aGlzLmRhdGEubGliT3B0aW9uc1xuXG5cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmRhdGEuX3NldFZpZXdlcih2aWV3ZXIpO1xuXG4gICAgfSk7XG4gIH1cblxuICBvbkNsaWNrKHBheWxvYWQpe1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KFwidGh1bWJjbGlja1wiLCBwYXlsb2FkKTtcbiAgfVxufSJdfQ==