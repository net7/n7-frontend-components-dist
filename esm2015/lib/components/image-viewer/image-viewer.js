/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbWFnZS12aWV3ZXIvaW1hZ2Utdmlld2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLGFBQWEsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQjFDLGdDQU9DOzs7SUFOQywwQkFBcUc7O0lBQ3JHLDRCQUFnQjs7SUFDaEIsMkJBQWU7O0lBQ2YseUJBQVk7O0lBQ1osa0NBQXNCOztJQUN0Qix1Q0FBNEQ7Ozs7Ozs7O0FBUTlELGlDQU9DOzs7SUFOQywwQkFBWTs7Ozs7SUFJWiw4QkFBYzs7SUFDZCw4QkFBaUI7Ozs7Ozs7Ozs7Ozs7O0FBY25CLHNDQWFDOzs7SUFYQyxxQ0FBbUI7O0lBQ25CLG1DQUFpQjs7SUFDakIsdUNBQXFCOztJQUNyQix3Q0FBc0I7O0lBQ3RCLGtDQUE4Qjs7SUFDOUIsa0NBQWdDOztJQUNoQyxvQ0FBaUI7O0lBRWpCLHNDQUFnQjs7SUFFaEIsc0NBQWdCOzs7Ozs7QUFXbEIsTUFBTSxPQUFPLG9CQUFvQjtJQUpqQztRQVFVLFlBQU8sR0FBWSxLQUFLLENBQUM7SUErQm5DLENBQUM7Ozs7SUE3QkMscUJBQXFCO1FBQ25CLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUVwQixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7O2dCQUNWLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTOztrQkFFeEcsTUFBTSxHQUFHLGFBQWEsaUJBQzFCLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFDdEIsU0FBUyxFQUFHLFNBQVMsRUFDckIsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUM3QixZQUFZLEVBQUUseUJBQXlCLEVBQ3ZDLGFBQWEsRUFBRSwwQkFBMEIsRUFDekMsVUFBVSxFQUFFLHNCQUFzQixFQUNsQyxjQUFjLEVBQUUsNkJBQTZCLElBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUd6QjtZQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRS9CLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7O1lBdENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixnL0NBQWtDO2FBQ25DOzs7bUJBRUUsS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sb0NBQWdDOztJQUNoQyxvQ0FBbUI7Ozs7O0lBRW5CLHVDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBJTUFHRS1WSUVXRVIudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBvcGVuc2VhZHJhZ29uIGZyb20gJ29wZW5zZWFkcmFnb24nO1xuLy9kZWNsYXJlIHZhciByZXF1aXJlOiBhbnk7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBJbWFnZVZpZXdlckNvbXBvbmVudCdzIGltYWdlcyBcImRhdGFcIlxuICpcbiAqIEhlcmUgdGhlIG1haW4gb3B0aW9ucyBhdmFpbGFibGUsIGZvciBhIGNvbXBsZXRlIGd1aWRlIG9mIGltYWdlIHNldHRpbmdzXG4gKiB2aWV3IHRoZSBvZmZpY2lhbCBvcGVuc2VhZHJhZ29uIGRvY3VtZW50YXRpb24gaHR0cHM6Ly9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9cbiAqIEFsbCBhdmFpbGFibGUgb3B0aW9ucyBoZXJlOiBodHRwczovL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL2RvY3MvT3BlblNlYWRyYWdvbi5odG1sXG4gKlxuICogQHByb3BlcnR5ICB0eXBlIChyZXF1aXJlZCkgQWRtaXR0ZWQgdmFsdWVzICdpbWFnZScgfCAnem9vbWlmeXRpbGVzZXJ2aWNlJyB8ICdvcGVuc3RyZWV0bWFwcycgfCAndGlsZWRtYXBzZXJ2aWNlJyB8ICdsZWdhY3ktaW1hZ2UtcHlyYW1pZCdcbiAqIEBwcm9wZXJ0eSAgaGVpZ2h0IChvcHRpb25hbCkgaW1hZ2UgaGVpZ2h0XG4gKiBAcHJvcGVydHkgIHdpZHRoIChvcHRpb25hbCkgaW1hZ2Ugd2lkdGhcbiAqIEBwcm9wZXJ0eSAgdXJsIChyZXF1aXJlZCkgaW1hZ2UgdXJsXG4gKiBAcHJvcGVydHkgIGJ1aWxkUHlyYW1pZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgIGNyb3NzT3JpZ2luUG9saWN5IChvcHRpb25hbCkgQWRtaXR0ZWQgdmFsdWVzICdBbm9ueW1vdXMnIHwgJ3VzZS1jcmVkZW50aWFscycgfCBmYWxzZTtcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJSW1hZ2VEYXRhIHtcbiAgdHlwZTogJ2ltYWdlJyB8ICd6b29taWZ5dGlsZXNlcnZpY2UnIHwgJ29wZW5zdHJlZXRtYXBzJyB8ICd0aWxlZG1hcHNlcnZpY2UnIHwgJ2xlZ2FjeS1pbWFnZS1weXJhbWlkJztcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICB3aWR0aD86IG51bWJlcjtcbiAgdXJsOiBzdHJpbmc7XG4gIGJ1aWxkUHlyYW1pZDogYm9vbGVhbjtcbiAgY3Jvc3NPcmlnaW5Qb2xpY3k/OiAnQW5vbnltb3VzJyB8ICd1c2UtY3JlZGVudGlhbHMnIHwgZmFsc2U7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBJbWFnZVZpZXdlckNvbXBvbmVudCdzIHRodW1icyB0byBwcmV2aWV3IGF2YWlsYWJsZSBpbWFnZXNcbiAqXG4gKiBAcHJvcGVydHkgIHVybCAocmVxdWlyZWQpIGltYWdlIHVybFxuICovXG5leHBvcnQgaW50ZXJmYWNlIElUaHVtYnNEYXRhIHtcbiAgdXJsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAqL1xuICBwYXlsb2FkPzogYW55O1xuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgSW1hZ2VWaWV3ZXJDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBwcmVmaXhVcmwgKG9wdGlvbmFsKSBQcmVwZW5kcyB0aGUgcHJlZml4VXJsIHRvIG5hdkltYWdlcyBwYXRocy4gRGVmYXVsdCBpcyAvL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL29wZW5zZWFkcmFnb24vaW1hZ2VzL1xuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHZpZXdlcldpZHRoIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB2aWV3ZXJIZWlnaHQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGltYWdlcyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgdmlld2VySWQgKHJlcXVpcmVkKSBUaGUgaWQgdG8gYXNzaWduIHRvIHRoZSBpbWFnZXZpZXdlciBjb250YWluZXJcbiAqIEBwcm9wZXJ0eSBsaWJPcHRpb25zIChyZXF1aXJlZClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJSW1hZ2VWaWV3ZXJEYXRhIHtcbiAgLyp2aWV3ZXIgaWNvbidzIGRpcmVjdG9yeSBwYXRoICovXG4gIHByZWZpeFVybD86IHN0cmluZztcbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgdmlld2VyV2lkdGg/OiBudW1iZXI7XG4gIHZpZXdlckhlaWdodD86IG51bWJlcjtcbiAgaW1hZ2VzOiBJSW1hZ2VEYXRhW10gfCBzdHJpbmc7XG4gIHRodW1icz86IElUaHVtYnNEYXRhW10gfCBzdHJpbmc7XG4gIHZpZXdlcklkOiBzdHJpbmc7XG4gIC8qZm9yIGEgbGlzdCBvZiBvcHRpb25zIHZpZXcgdGhlIG9mZmljaWFsIG9wZW5zZWFkcmFnb24gZG9jdW1lbnRhdGlvbiBodHRwOi8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vZG9jcy9PcGVuU2VhZHJhZ29uLmh0bWwjLk9wdGlvbnMgKi9cbiAgbGliT3B0aW9uczogYW55O1xuICAvKiBBIG1ldGhvZCByZXR1cm5pbmcgdGhlIGxpYnJhcnkgaW5zdGFuY2UgKi9cbiAgX3NldFZpZXdlcjogYW55O1xufVxuXG4vKipcbiAqIEltYWdlVmlld2VyQ29tcG9uZW50IDxuNy1pbWFnZS12aWV3ZXI+XG4gKlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1pbWFnZS12aWV3ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2Utdmlld2VyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlVmlld2VyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSUltYWdlVmlld2VyRGF0YTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIHByaXZhdGUgX2xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpe1xuICAgIGlmKCF0aGlzLmRhdGEgfHwgdGhpcy5fbG9hZGVkKSByZXR1cm47XG4gICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGV0IHByZWZpeFVybCA9ICF0aGlzLmRhdGEucHJlZml4VXJsID8gXCIvL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL29wZW5zZWFkcmFnb24vaW1hZ2VzL1wiIDogdGhpcy5kYXRhLnByZWZpeFVybDtcblxuICAgICAgY29uc3Qgdmlld2VyID0gb3BlbnNlYWRyYWdvbih7XG4gICAgICAgIGlkOiB0aGlzLmRhdGEudmlld2VySWQsXG4gICAgICAgIHByZWZpeFVybCA6IHByZWZpeFVybCxcbiAgICAgICAgdGlsZVNvdXJjZXM6IHRoaXMuZGF0YS5pbWFnZXMsXG4gICAgICAgIHpvb21JbkJ1dHRvbjogXCJuNy1pbWFnZS12aWV3ZXItem9vbS1pblwiLFxuICAgICAgICB6b29tT3V0QnV0dG9uOiBcIm43LWltYWdlLXZpZXdlci16b29tLW91dFwiLFxuICAgICAgICBob21lQnV0dG9uOiBcIm43LWltYWdlLXZpZXdlci1ob21lXCIsXG4gICAgICAgIGZ1bGxQYWdlQnV0dG9uOiBcIm43LWltYWdlLXZpZXdlci1mdWxsLXNjcmVlblwiLFxuICAgICAgICAgIC4uLnRoaXMuZGF0YS5saWJPcHRpb25zXG5cblxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZGF0YS5fc2V0Vmlld2VyKHZpZXdlcik7XG5cbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xpY2socGF5bG9hZCl7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoXCJ0aHVtYmNsaWNrXCIsIHBheWxvYWQpO1xuICB9XG59Il19