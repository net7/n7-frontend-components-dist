/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/image-viewer/image-viewer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var ImageViewerComponent = /** @class */ (function () {
    function ImageViewerComponent() {
        this._loaded = false;
    }
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.data || this._loaded)
            return;
        this._loaded = true;
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var prefixUrl = !_this.data.prefixUrl ? "//openseadragon.github.io/openseadragon/images/" : _this.data.prefixUrl;
            /** @type {?} */
            var viewer = openseadragon(tslib_1.__assign({ id: _this.data.viewerId, prefixUrl: prefixUrl, tileSources: _this.data.images, zoomInButton: "n7-image-viewer-zoom-in", zoomOutButton: "n7-image-viewer-zoom-out", homeButton: "n7-image-viewer-home", fullPageButton: "n7-image-viewer-full-screen" }, _this.data.libOptions));
            _this.data._setViewer(viewer);
        }));
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    ImageViewerComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit("thumbclick", payload);
    };
    ImageViewerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-image-viewer',
                    template: "<div *ngIf=\"data\" class=\"n7-image-viewer {{data.classes || ''}}\">\r\n    <!-- OSD viewer -->\r\n    <div id=\"{{data.viewerId}}\" class=\"n7-image-viewer__viewer\">\r\n    </div>\r\n\r\n    <!-- Thumbs -->\r\n    <div class=\"n7-image-viewer__thumbs\" *ngIf=\"data.thumbs\">\r\n        <ul class=\"n7-image-viewer__thumb-list\">\r\n            <li *ngFor=\"let thumb of data.thumbs\" \r\n                class=\"n7-image-viewer__thumb-item {{thumb.classes || ''}}\"\r\n                [ngStyle]=\"{'background-image': 'url(' + thumb.url + ')'}\"\r\n                (click)=\"onClick(thumb.payload)\">\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n    <!-- Zoom controls -->\r\n    <div class=\"n7-image-viewer__controls\">\r\n        <ul class=\"n7-image-viewer__controls-list\">\r\n            <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-zoom-in\">\r\n                <span class=\"n7-icon-search-plus\"></span>\r\n            </li>\r\n            <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-zoom-out\">\r\n                <span class=\"n7-icon-search-minus\"></span>\r\n            </li>\r\n            <!--\r\n            <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-home\">\r\n                <span class=\"n7-icon-home\"></span>\r\n            </li>\r\n            <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-full-screen\">\r\n                <span class=\"n7-icon-expand-arrows\"></span>\r\n            </li>\r\n            -->\r\n        </ul>\r\n    </div>\r\n</div>"
                }] }
    ];
    ImageViewerComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return ImageViewerComponent;
}());
export { ImageViewerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbWFnZS12aWV3ZXIvaW1hZ2Utdmlld2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sYUFBYSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCMUMsZ0NBT0M7OztJQU5DLDBCQUFxRzs7SUFDckcsNEJBQWdCOztJQUNoQiwyQkFBZTs7SUFDZix5QkFBWTs7SUFDWixrQ0FBc0I7O0lBQ3RCLHVDQUE0RDs7Ozs7Ozs7QUFROUQsaUNBT0M7OztJQU5DLDBCQUFZOzs7OztJQUlaLDhCQUFjOztJQUNkLDhCQUFpQjs7Ozs7Ozs7Ozs7Ozs7QUFjbkIsc0NBYUM7OztJQVhDLHFDQUFtQjs7SUFDbkIsbUNBQWlCOztJQUNqQix1Q0FBcUI7O0lBQ3JCLHdDQUFzQjs7SUFDdEIsa0NBQThCOztJQUM5QixrQ0FBZ0M7O0lBQ2hDLG9DQUFpQjs7SUFFakIsc0NBQWdCOztJQUVoQixzQ0FBZ0I7Ozs7OztBQU9sQjtJQUFBO1FBUVUsWUFBTyxHQUFZLEtBQUssQ0FBQztJQStCbkMsQ0FBQzs7OztJQTdCQyxvREFBcUI7OztJQUFyQjtRQUFBLGlCQXVCQztRQXRCQyxJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFcEIsVUFBVTs7O1FBQUM7O2dCQUNMLFNBQVMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTOztnQkFFeEcsTUFBTSxHQUFHLGFBQWEsb0JBQzFCLEVBQUUsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFDdEIsU0FBUyxFQUFHLFNBQVMsRUFDckIsV0FBVyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUM3QixZQUFZLEVBQUUseUJBQXlCLEVBQ3ZDLGFBQWEsRUFBRSwwQkFBMEIsRUFDekMsVUFBVSxFQUFFLHNCQUFzQixFQUNsQyxjQUFjLEVBQUUsNkJBQTZCLElBQ3hDLEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUd6QjtZQUVGLEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRS9CLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxzQ0FBTzs7OztJQUFQLFVBQVEsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Z0JBdENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixzakRBQWtDO2lCQUNuQzs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUFpQ1IsMkJBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQW5DWSxvQkFBb0I7OztJQUMvQixvQ0FBZ0M7O0lBQ2hDLG9DQUFtQjs7Ozs7SUFFbkIsdUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gSU1BR0UtVklFV0VSLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBvcGVuc2VhZHJhZ29uIGZyb20gJ29wZW5zZWFkcmFnb24nO1xyXG4vL2RlY2xhcmUgdmFyIHJlcXVpcmU6IGFueTtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEltYWdlVmlld2VyQ29tcG9uZW50J3MgaW1hZ2VzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEhlcmUgdGhlIG1haW4gb3B0aW9ucyBhdmFpbGFibGUsIGZvciBhIGNvbXBsZXRlIGd1aWRlIG9mIGltYWdlIHNldHRpbmdzXHJcbiAqIHZpZXcgdGhlIG9mZmljaWFsIG9wZW5zZWFkcmFnb24gZG9jdW1lbnRhdGlvbiBodHRwczovL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL1xyXG4gKiBBbGwgYXZhaWxhYmxlIG9wdGlvbnMgaGVyZTogaHR0cHM6Ly9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9kb2NzL09wZW5TZWFkcmFnb24uaHRtbFxyXG4gKlxyXG4gKiBAcHJvcGVydHkgIHR5cGUgKHJlcXVpcmVkKSBBZG1pdHRlZCB2YWx1ZXMgJ2ltYWdlJyB8ICd6b29taWZ5dGlsZXNlcnZpY2UnIHwgJ29wZW5zdHJlZXRtYXBzJyB8ICd0aWxlZG1hcHNlcnZpY2UnIHwgJ2xlZ2FjeS1pbWFnZS1weXJhbWlkJ1xyXG4gKiBAcHJvcGVydHkgIGhlaWdodCAob3B0aW9uYWwpIGltYWdlIGhlaWdodFxyXG4gKiBAcHJvcGVydHkgIHdpZHRoIChvcHRpb25hbCkgaW1hZ2Ugd2lkdGhcclxuICogQHByb3BlcnR5ICB1cmwgKHJlcXVpcmVkKSBpbWFnZSB1cmxcclxuICogQHByb3BlcnR5ICBidWlsZFB5cmFtaWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgIGNyb3NzT3JpZ2luUG9saWN5IChvcHRpb25hbCkgQWRtaXR0ZWQgdmFsdWVzICdBbm9ueW1vdXMnIHwgJ3VzZS1jcmVkZW50aWFscycgfCBmYWxzZTtcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUltYWdlRGF0YSB7XHJcbiAgdHlwZTogJ2ltYWdlJyB8ICd6b29taWZ5dGlsZXNlcnZpY2UnIHwgJ29wZW5zdHJlZXRtYXBzJyB8ICd0aWxlZG1hcHNlcnZpY2UnIHwgJ2xlZ2FjeS1pbWFnZS1weXJhbWlkJztcclxuICBoZWlnaHQ/OiBudW1iZXI7XHJcbiAgd2lkdGg/OiBudW1iZXI7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgYnVpbGRQeXJhbWlkOiBib29sZWFuO1xyXG4gIGNyb3NzT3JpZ2luUG9saWN5PzogJ0Fub255bW91cycgfCAndXNlLWNyZWRlbnRpYWxzJyB8IGZhbHNlO1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBJbWFnZVZpZXdlckNvbXBvbmVudCdzIHRodW1icyB0byBwcmV2aWV3IGF2YWlsYWJsZSBpbWFnZXNcclxuICpcclxuICogQHByb3BlcnR5ICB1cmwgKHJlcXVpcmVkKSBpbWFnZSB1cmxcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRodW1ic0RhdGEge1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcclxuICAgKi9cclxuICBwYXlsb2FkPzogYW55O1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEltYWdlVmlld2VyQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IHByZWZpeFVybCAob3B0aW9uYWwpIFByZXBlbmRzIHRoZSBwcmVmaXhVcmwgdG8gbmF2SW1hZ2VzIHBhdGhzLiBEZWZhdWx0IGlzIC8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vb3BlbnNlYWRyYWdvbi9pbWFnZXMvXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHZpZXdlcldpZHRoIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHZpZXdlckhlaWdodCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpbWFnZXMgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgdmlld2VySWQgKHJlcXVpcmVkKSBUaGUgaWQgdG8gYXNzaWduIHRvIHRoZSBpbWFnZXZpZXdlciBjb250YWluZXJcclxuICogQHByb3BlcnR5IGxpYk9wdGlvbnMgKHJlcXVpcmVkKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJSW1hZ2VWaWV3ZXJEYXRhIHtcclxuICAvKnZpZXdlciBpY29uJ3MgZGlyZWN0b3J5IHBhdGggKi9cclxuICBwcmVmaXhVcmw/OiBzdHJpbmc7XHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICB2aWV3ZXJXaWR0aD86IG51bWJlcjtcclxuICB2aWV3ZXJIZWlnaHQ/OiBudW1iZXI7XHJcbiAgaW1hZ2VzOiBJSW1hZ2VEYXRhW10gfCBzdHJpbmc7XHJcbiAgdGh1bWJzPzogSVRodW1ic0RhdGFbXSB8IHN0cmluZztcclxuICB2aWV3ZXJJZDogc3RyaW5nO1xyXG4gIC8qZm9yIGEgbGlzdCBvZiBvcHRpb25zIHZpZXcgdGhlIG9mZmljaWFsIG9wZW5zZWFkcmFnb24gZG9jdW1lbnRhdGlvbiBodHRwOi8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vZG9jcy9PcGVuU2VhZHJhZ29uLmh0bWwjLk9wdGlvbnMgKi9cclxuICBsaWJPcHRpb25zOiBhbnk7XHJcbiAgLyogQSBtZXRob2QgcmV0dXJuaW5nIHRoZSBsaWJyYXJ5IGluc3RhbmNlICovXHJcbiAgX3NldFZpZXdlcjogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogSW1hZ2VWaWV3ZXJDb21wb25lbnQgPG43LWltYWdlLXZpZXdlcj5cclxuICpcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctaW1hZ2Utdmlld2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2Utdmlld2VyLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVZpZXdlckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogSUltYWdlVmlld2VyRGF0YTtcclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIHByaXZhdGUgX2xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKXtcclxuICAgIGlmKCF0aGlzLmRhdGEgfHwgdGhpcy5fbG9hZGVkKSByZXR1cm47XHJcbiAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBsZXQgcHJlZml4VXJsID0gIXRoaXMuZGF0YS5wcmVmaXhVcmwgPyBcIi8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vb3BlbnNlYWRyYWdvbi9pbWFnZXMvXCIgOiB0aGlzLmRhdGEucHJlZml4VXJsO1xyXG5cclxuICAgICAgY29uc3Qgdmlld2VyID0gb3BlbnNlYWRyYWdvbih7XHJcbiAgICAgICAgaWQ6IHRoaXMuZGF0YS52aWV3ZXJJZCxcclxuICAgICAgICBwcmVmaXhVcmwgOiBwcmVmaXhVcmwsXHJcbiAgICAgICAgdGlsZVNvdXJjZXM6IHRoaXMuZGF0YS5pbWFnZXMsXHJcbiAgICAgICAgem9vbUluQnV0dG9uOiBcIm43LWltYWdlLXZpZXdlci16b29tLWluXCIsXHJcbiAgICAgICAgem9vbU91dEJ1dHRvbjogXCJuNy1pbWFnZS12aWV3ZXItem9vbS1vdXRcIixcclxuICAgICAgICBob21lQnV0dG9uOiBcIm43LWltYWdlLXZpZXdlci1ob21lXCIsXHJcbiAgICAgICAgZnVsbFBhZ2VCdXR0b246IFwibjctaW1hZ2Utdmlld2VyLWZ1bGwtc2NyZWVuXCIsXHJcbiAgICAgICAgICAuLi50aGlzLmRhdGEubGliT3B0aW9uc1xyXG5cclxuXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5kYXRhLl9zZXRWaWV3ZXIodmlld2VyKTtcclxuXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZCl7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KFwidGh1bWJjbGlja1wiLCBwYXlsb2FkKTtcclxuICB9XHJcbn0iXX0=