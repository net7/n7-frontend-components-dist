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
 * Interface for ImageViewerComponent's iamges "data"
 *
 * Here the main options available, for a complete guide of image settings
 * view the official openseadragon documentation https://openseadragon.github.io/
 * All available options here: https://openseadragon.github.io/docs/OpenSeadragon.html
 *
 * \@property type (required) Admitted values 'image' | 'zoomifytileservice' | 'openstreetmaps' | 'tiledmapservice' | 'legacy-image-pyramid'
 * \@property height (optional) image height
 * \@property width (optional) image width
 * \@property url (required) image width
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
    ImageViewerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-image-viewer',
                    template: "<div *ngIf=\"data\" class=\"n7-image-viewer {{data.classes || ''}}\">\r\n  <div id=\"{{data.viewerId}}\" \r\n       class=\"n7-image-viewer__viewer\">\r\n  </div>\r\n  <div class=\"n7-image-viewer__thumbs\">\r\n      <ul class=\"n7-image-viewer__thumb-list\">\r\n          <li class=\"n7-image-viewer__thumb-item\"></li>\r\n          <li class=\"n7-image-viewer__thumb-item\"></li>\r\n          <li class=\"n7-image-viewer__thumb-item\"></li>\r\n          <li class=\"n7-image-viewer__thumb-item\"></li>\r\n          <li class=\"n7-image-viewer__thumb-item\"></li>\r\n      </ul>\r\n  </div>\r\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbWFnZS12aWV3ZXIvaW1hZ2Utdmlld2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxhQUFhLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBaUIxQyxnQ0FPQzs7O0lBTkcsMEJBQXFHOztJQUNyRyw0QkFBZ0I7O0lBQ2hCLDJCQUFlOztJQUNmLHlCQUFZOztJQUNaLGtDQUFzQjs7SUFDdEIsdUNBQTREOzs7Ozs7Ozs7Ozs7OztBQWNoRSxzQ0FZQzs7O0lBVkMscUNBQW1COztJQUNuQixtQ0FBaUI7O0lBQ2pCLHVDQUFxQjs7SUFDckIsd0NBQXNCOztJQUN0QixrQ0FBOEI7O0lBQzlCLG9DQUFpQjs7SUFFakIsc0NBQWdCOztJQUVoQixzQ0FBZ0I7Ozs7OztBQU9sQjtJQUFBO1FBUVUsWUFBTyxHQUFZLEtBQUssQ0FBQztJQW9CbkMsQ0FBQzs7OztJQWxCQyxvREFBcUI7OztJQUFyQjtRQUFBLGlCQWlCQztRQWhCQyxJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFcEIsVUFBVTs7O1FBQUM7O2dCQUNMLFNBQVMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTOztnQkFFeEcsTUFBTSxHQUFHLGFBQWEsb0JBQzFCLEVBQUUsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFDdEIsU0FBUyxFQUFHLFNBQVMsRUFDckIsV0FBVyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUMxQixLQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFDdkI7WUFFRixLQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUvQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQTNCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IscW1CQUFrQztpQkFDbkM7Ozt1QkFFRSxLQUFLO3VCQUNMLEtBQUs7O0lBc0JSLDJCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0F4Qlksb0JBQW9COzs7SUFDL0Isb0NBQWdDOztJQUNoQyxvQ0FBbUI7Ozs7O0lBRW5CLHVDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIElNQUdFLVZJRVdFUi50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgb3BlbnNlYWRyYWdvbiBmcm9tICdvcGVuc2VhZHJhZ29uJztcclxuLy9kZWNsYXJlIHZhciByZXF1aXJlOiBhbnk7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBJbWFnZVZpZXdlckNvbXBvbmVudCdzIGlhbWdlcyBcImRhdGFcIlxyXG4gKlxyXG4gKiBIZXJlIHRoZSBtYWluIG9wdGlvbnMgYXZhaWxhYmxlLCBmb3IgYSBjb21wbGV0ZSBndWlkZSBvZiBpbWFnZSBzZXR0aW5ncyBcclxuICogdmlldyB0aGUgb2ZmaWNpYWwgb3BlbnNlYWRyYWdvbiBkb2N1bWVudGF0aW9uIGh0dHBzOi8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vXHJcbiAqIEFsbCBhdmFpbGFibGUgb3B0aW9ucyBoZXJlOiBodHRwczovL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL2RvY3MvT3BlblNlYWRyYWdvbi5odG1sXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSAgdHlwZSAocmVxdWlyZWQpIEFkbWl0dGVkIHZhbHVlcyAnaW1hZ2UnIHwgJ3pvb21pZnl0aWxlc2VydmljZScgfCAnb3BlbnN0cmVldG1hcHMnIHwgJ3RpbGVkbWFwc2VydmljZScgfCAnbGVnYWN5LWltYWdlLXB5cmFtaWQnXHJcbiAqIEBwcm9wZXJ0eSAgaGVpZ2h0IChvcHRpb25hbCkgaW1hZ2UgaGVpZ2h0XHJcbiAqIEBwcm9wZXJ0eSAgd2lkdGggKG9wdGlvbmFsKSBpbWFnZSB3aWR0aFxyXG4gKiBAcHJvcGVydHkgIHVybCAocmVxdWlyZWQpIGltYWdlIHdpZHRoXHJcbiAqIEBwcm9wZXJ0eSAgYnVpbGRQeXJhbWlkIChvcHRpb25hbCkgXHJcbiAqIEBwcm9wZXJ0eSAgY3Jvc3NPcmlnaW5Qb2xpY3kgKG9wdGlvbmFsKSBBZG1pdHRlZCB2YWx1ZXMgJ0Fub255bW91cycgfCAndXNlLWNyZWRlbnRpYWxzJyB8IGZhbHNlO1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJSW1hZ2VEYXRhIHtcclxuICAgIHR5cGU6ICdpbWFnZScgfCAnem9vbWlmeXRpbGVzZXJ2aWNlJyB8ICdvcGVuc3RyZWV0bWFwcycgfCAndGlsZWRtYXBzZXJ2aWNlJyB8ICdsZWdhY3ktaW1hZ2UtcHlyYW1pZCc7XHJcbiAgICBoZWlnaHQ/OiBudW1iZXI7XHJcbiAgICB3aWR0aD86IG51bWJlcjtcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgYnVpbGRQeXJhbWlkOiBib29sZWFuO1xyXG4gICAgY3Jvc3NPcmlnaW5Qb2xpY3k/OiAnQW5vbnltb3VzJyB8ICd1c2UtY3JlZGVudGlhbHMnIHwgZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEltYWdlVmlld2VyQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IHByZWZpeFVybCAob3B0aW9uYWwpIFByZXBlbmRzIHRoZSBwcmVmaXhVcmwgdG8gbmF2SW1hZ2VzIHBhdGhzLiBEZWZhdWx0IGlzIC8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vb3BlbnNlYWRyYWdvbi9pbWFnZXMvXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHZpZXdlcldpZHRoIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHZpZXdlckhlaWdodCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpbWFnZXMgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgdmlld2VySWQgKHJlcXVpcmVkKSBUaGUgaWQgdG8gYXNzaWduIHRvIHRoZSBpbWFnZXZpZXdlciBjb250YWluZXJcclxuICogQHByb3BlcnR5IGxpYk9wdGlvbnMgKHJlcXVpcmVkKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJSW1hZ2VWaWV3ZXJEYXRhIHtcclxuICAvKnZpZXdlciBpY29uJ3MgZGlyZWN0b3J5IHBhdGggKi9cclxuICBwcmVmaXhVcmw/OiBzdHJpbmc7XHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICB2aWV3ZXJXaWR0aD86IG51bWJlcjtcclxuICB2aWV3ZXJIZWlnaHQ/OiBudW1iZXI7XHJcbiAgaW1hZ2VzOiBJSW1hZ2VEYXRhW10gfCBzdHJpbmc7XHJcbiAgdmlld2VySWQ6IHN0cmluZzsgIFxyXG4gIC8qZm9yIGEgbGlzdCBvZiBvcHRpb25zIHZpZXcgdGhlIG9mZmljaWFsIG9wZW5zZWFkcmFnb24gZG9jdW1lbnRhdGlvbiBodHRwOi8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vZG9jcy9PcGVuU2VhZHJhZ29uLmh0bWwjLk9wdGlvbnMgKi9cclxuICBsaWJPcHRpb25zOiBhbnk7XHJcbiAgLyogQSBtZXRob2QgcmV0dXJuaW5nIHRoZSBsaWJyYXJ5IGluc3RhbmNlICovXHJcbiAgX3NldFZpZXdlcjogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogSW1hZ2VWaWV3ZXJDb21wb25lbnQgPG43LWltYWdlLXZpZXdlcj5cclxuICpcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctaW1hZ2Utdmlld2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2Utdmlld2VyLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVZpZXdlckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogSUltYWdlVmlld2VyRGF0YTtcclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIHByaXZhdGUgX2xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKXtcclxuICAgIGlmKCF0aGlzLmRhdGEgfHwgdGhpcy5fbG9hZGVkKSByZXR1cm47XHJcbiAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBsZXQgcHJlZml4VXJsID0gIXRoaXMuZGF0YS5wcmVmaXhVcmwgPyBcIi8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vb3BlbnNlYWRyYWdvbi9pbWFnZXMvXCIgOiB0aGlzLmRhdGEucHJlZml4VXJsO1xyXG5cclxuICAgICAgY29uc3Qgdmlld2VyID0gb3BlbnNlYWRyYWdvbih7XHJcbiAgICAgICAgaWQ6IHRoaXMuZGF0YS52aWV3ZXJJZCxcclxuICAgICAgICBwcmVmaXhVcmwgOiBwcmVmaXhVcmwsXHJcbiAgICAgICAgdGlsZVNvdXJjZXM6IHRoaXMuZGF0YS5pbWFnZXMsXHJcbiAgICAgICAgLi4udGhpcy5kYXRhLmxpYk9wdGlvbnNcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmRhdGEuX3NldFZpZXdlcih2aWV3ZXIpO1xyXG4gICAgICBcclxuICAgIH0pO1xyXG4gIH1cclxufSJdfQ==