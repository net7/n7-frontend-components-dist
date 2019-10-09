/**
 * @fileoverview added by tsickle
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
            var viewer = openseadragon(tslib_1.__assign({ id: _this.data.viewerId, prefixUrl: prefixUrl, tileSources: _this.data.images }, _this.data.libOptions));
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
                    template: "<div *ngIf=\"data\" class=\"n7-image-viewer {{data.classes || ''}}\">\r\n    <!-- OSD viewer -->\r\n    <div id=\"{{data.viewerId}}\" class=\"n7-image-viewer__viewer\">\r\n    </div>\r\n\r\n    <!-- Thumbs -->\r\n    <div class=\"n7-image-viewer__thumbs\" *ngIf=\"data.thumbs\">\r\n        <ul class=\"n7-image-viewer__thumb-list\">\r\n            <li *ngFor=\"let thumb of data.thumbs\" \r\n                class=\"n7-image-viewer__thumb-item {{thumb.classes || ''}}\"\r\n                [ngStyle]=\"{'background-image': 'url(' + thumb.url + ')'}\"\r\n                (click)=\"onClick(thumb.payload)\">\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbWFnZS12aWV3ZXIvaW1hZ2Utdmlld2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxhQUFhLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBaUIxQyxnQ0FPQzs7O0lBTkMsMEJBQXFHOztJQUNyRyw0QkFBZ0I7O0lBQ2hCLDJCQUFlOztJQUNmLHlCQUFZOztJQUNaLGtDQUFzQjs7SUFDdEIsdUNBQTREOzs7Ozs7OztBQVE5RCxpQ0FPQzs7O0lBTkMsMEJBQVk7Ozs7O0lBSVosOEJBQWM7O0lBQ2QsOEJBQWlCOzs7Ozs7Ozs7Ozs7OztBQWNuQixzQ0FhQzs7O0lBWEMscUNBQW1COztJQUNuQixtQ0FBaUI7O0lBQ2pCLHVDQUFxQjs7SUFDckIsd0NBQXNCOztJQUN0QixrQ0FBOEI7O0lBQzlCLGtDQUFnQzs7SUFDaEMsb0NBQWlCOztJQUVqQixzQ0FBZ0I7O0lBRWhCLHNDQUFnQjs7Ozs7O0FBT2xCO0lBQUE7UUFRVSxZQUFPLEdBQVksS0FBSyxDQUFDO0lBeUJuQyxDQUFDOzs7O0lBdkJDLG9EQUFxQjs7O0lBQXJCO1FBQUEsaUJBaUJDO1FBaEJDLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUVwQixVQUFVOzs7UUFBQzs7Z0JBQ0wsU0FBUyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGlEQUFpRCxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7O2dCQUV4RyxNQUFNLEdBQUcsYUFBYSxvQkFDMUIsRUFBRSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUN0QixTQUFTLEVBQUcsU0FBUyxFQUNyQixXQUFXLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQzFCLEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUN2QjtZQUVGLEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRS9CLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxzQ0FBTzs7OztJQUFQLFVBQVEsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Z0JBaENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixzcUJBQWtDO2lCQUNuQzs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUEyQlIsMkJBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQTdCWSxvQkFBb0I7OztJQUMvQixvQ0FBZ0M7O0lBQ2hDLG9DQUFtQjs7Ozs7SUFFbkIsdUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gSU1BR0UtVklFV0VSLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBvcGVuc2VhZHJhZ29uIGZyb20gJ29wZW5zZWFkcmFnb24nO1xyXG4vL2RlY2xhcmUgdmFyIHJlcXVpcmU6IGFueTtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEltYWdlVmlld2VyQ29tcG9uZW50J3MgaW1hZ2VzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEhlcmUgdGhlIG1haW4gb3B0aW9ucyBhdmFpbGFibGUsIGZvciBhIGNvbXBsZXRlIGd1aWRlIG9mIGltYWdlIHNldHRpbmdzIFxyXG4gKiB2aWV3IHRoZSBvZmZpY2lhbCBvcGVuc2VhZHJhZ29uIGRvY3VtZW50YXRpb24gaHR0cHM6Ly9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9cclxuICogQWxsIGF2YWlsYWJsZSBvcHRpb25zIGhlcmU6IGh0dHBzOi8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vZG9jcy9PcGVuU2VhZHJhZ29uLmh0bWxcclxuICpcclxuICogQHByb3BlcnR5ICB0eXBlIChyZXF1aXJlZCkgQWRtaXR0ZWQgdmFsdWVzICdpbWFnZScgfCAnem9vbWlmeXRpbGVzZXJ2aWNlJyB8ICdvcGVuc3RyZWV0bWFwcycgfCAndGlsZWRtYXBzZXJ2aWNlJyB8ICdsZWdhY3ktaW1hZ2UtcHlyYW1pZCdcclxuICogQHByb3BlcnR5ICBoZWlnaHQgKG9wdGlvbmFsKSBpbWFnZSBoZWlnaHRcclxuICogQHByb3BlcnR5ICB3aWR0aCAob3B0aW9uYWwpIGltYWdlIHdpZHRoXHJcbiAqIEBwcm9wZXJ0eSAgdXJsIChyZXF1aXJlZCkgaW1hZ2UgdXJsXHJcbiAqIEBwcm9wZXJ0eSAgYnVpbGRQeXJhbWlkIChvcHRpb25hbCkgXHJcbiAqIEBwcm9wZXJ0eSAgY3Jvc3NPcmlnaW5Qb2xpY3kgKG9wdGlvbmFsKSBBZG1pdHRlZCB2YWx1ZXMgJ0Fub255bW91cycgfCAndXNlLWNyZWRlbnRpYWxzJyB8IGZhbHNlO1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJSW1hZ2VEYXRhIHtcclxuICB0eXBlOiAnaW1hZ2UnIHwgJ3pvb21pZnl0aWxlc2VydmljZScgfCAnb3BlbnN0cmVldG1hcHMnIHwgJ3RpbGVkbWFwc2VydmljZScgfCAnbGVnYWN5LWltYWdlLXB5cmFtaWQnO1xyXG4gIGhlaWdodD86IG51bWJlcjtcclxuICB3aWR0aD86IG51bWJlcjtcclxuICB1cmw6IHN0cmluZztcclxuICBidWlsZFB5cmFtaWQ6IGJvb2xlYW47XHJcbiAgY3Jvc3NPcmlnaW5Qb2xpY3k/OiAnQW5vbnltb3VzJyB8ICd1c2UtY3JlZGVudGlhbHMnIHwgZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEltYWdlVmlld2VyQ29tcG9uZW50J3MgdGh1bWJzIHRvIHByZXZpZXcgYXZhaWxhYmxlIGltYWdlc1xyXG4gKlxyXG4gKiBAcHJvcGVydHkgIHVybCAocmVxdWlyZWQpIGltYWdlIHVybFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVGh1bWJzRGF0YSB7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICAqL1xyXG4gIHBheWxvYWQ/OiBhbnk7XHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgSW1hZ2VWaWV3ZXJDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgcHJlZml4VXJsIChvcHRpb25hbCkgUHJlcGVuZHMgdGhlIHByZWZpeFVybCB0byBuYXZJbWFnZXMgcGF0aHMuIERlZmF1bHQgaXMgLy9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9vcGVuc2VhZHJhZ29uL2ltYWdlcy9cclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgdmlld2VyV2lkdGggKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgdmlld2VySGVpZ2h0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGltYWdlcyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSB2aWV3ZXJJZCAocmVxdWlyZWQpIFRoZSBpZCB0byBhc3NpZ24gdG8gdGhlIGltYWdldmlld2VyIGNvbnRhaW5lclxyXG4gKiBAcHJvcGVydHkgbGliT3B0aW9ucyAocmVxdWlyZWQpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElJbWFnZVZpZXdlckRhdGEge1xyXG4gIC8qdmlld2VyIGljb24ncyBkaXJlY3RvcnkgcGF0aCAqL1xyXG4gIHByZWZpeFVybD86IHN0cmluZztcclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gIHZpZXdlcldpZHRoPzogbnVtYmVyO1xyXG4gIHZpZXdlckhlaWdodD86IG51bWJlcjtcclxuICBpbWFnZXM6IElJbWFnZURhdGFbXSB8IHN0cmluZztcclxuICB0aHVtYnM/OiBJVGh1bWJzRGF0YVtdIHwgc3RyaW5nO1xyXG4gIHZpZXdlcklkOiBzdHJpbmc7ICBcclxuICAvKmZvciBhIGxpc3Qgb2Ygb3B0aW9ucyB2aWV3IHRoZSBvZmZpY2lhbCBvcGVuc2VhZHJhZ29uIGRvY3VtZW50YXRpb24gaHR0cDovL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL2RvY3MvT3BlblNlYWRyYWdvbi5odG1sIy5PcHRpb25zICovXHJcbiAgbGliT3B0aW9uczogYW55O1xyXG4gIC8qIEEgbWV0aG9kIHJldHVybmluZyB0aGUgbGlicmFyeSBpbnN0YW5jZSAqL1xyXG4gIF9zZXRWaWV3ZXI6IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEltYWdlVmlld2VyQ29tcG9uZW50IDxuNy1pbWFnZS12aWV3ZXI+XHJcbiAqXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWltYWdlLXZpZXdlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLXZpZXdlci5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VWaWV3ZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IElJbWFnZVZpZXdlckRhdGE7XHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBwcml2YXRlIF9sb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCl7XHJcbiAgICBpZighdGhpcy5kYXRhIHx8IHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xyXG4gICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgbGV0IHByZWZpeFVybCA9ICF0aGlzLmRhdGEucHJlZml4VXJsID8gXCIvL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL29wZW5zZWFkcmFnb24vaW1hZ2VzL1wiIDogdGhpcy5kYXRhLnByZWZpeFVybDtcclxuXHJcbiAgICAgIGNvbnN0IHZpZXdlciA9IG9wZW5zZWFkcmFnb24oe1xyXG4gICAgICAgIGlkOiB0aGlzLmRhdGEudmlld2VySWQsXHJcbiAgICAgICAgcHJlZml4VXJsIDogcHJlZml4VXJsLFxyXG4gICAgICAgIHRpbGVTb3VyY2VzOiB0aGlzLmRhdGEuaW1hZ2VzLFxyXG4gICAgICAgIC4uLnRoaXMuZGF0YS5saWJPcHRpb25zXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5kYXRhLl9zZXRWaWV3ZXIodmlld2VyKTtcclxuICAgICAgXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZCl7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KFwidGh1bWJjbGlja1wiLCBwYXlsb2FkKTtcclxuICB9XHJcbn0iXX0=