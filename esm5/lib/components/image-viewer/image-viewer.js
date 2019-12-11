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
                    template: "<div *ngIf=\"data\" class=\"n7-image-viewer {{data.classes || ''}}\">\n    <!-- OSD viewer -->\n    <div id=\"{{data.viewerId}}\" class=\"n7-image-viewer__viewer\">\n    </div>\n\n    <!-- Thumbs -->\n    <div class=\"n7-image-viewer__thumbs\" *ngIf=\"data.thumbs\">\n        <ul class=\"n7-image-viewer__thumb-list\">\n            <li *ngFor=\"let thumb of data.thumbs\" \n                class=\"n7-image-viewer__thumb-item {{thumb.classes || ''}}\"\n                [ngStyle]=\"{'background-image': 'url(' + thumb.url + ')'}\"\n                (click)=\"onClick(thumb.payload)\">\n            </li>\n        </ul>\n    </div>\n\n    <!-- Zoom controls -->\n    <div class=\"n7-image-viewer__controls\">\n        <ul class=\"n7-image-viewer__controls-list\">\n            <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-zoom-in\">\n                <span class=\"n7-icon-search-plus\"></span>\n            </li>\n            <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-zoom-out\">\n                <span class=\"n7-icon-search-minus\"></span>\n            </li>\n            <!--\n            <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-home\">\n                <span class=\"n7-icon-home\"></span>\n            </li>\n            <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-full-screen\">\n                <span class=\"n7-icon-expand-arrows\"></span>\n            </li>\n            -->\n        </ul>\n    </div>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbWFnZS12aWV3ZXIvaW1hZ2Utdmlld2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sYUFBYSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCMUMsZ0NBT0M7OztJQU5DLDBCQUFxRzs7SUFDckcsNEJBQWdCOztJQUNoQiwyQkFBZTs7SUFDZix5QkFBWTs7SUFDWixrQ0FBc0I7O0lBQ3RCLHVDQUE0RDs7Ozs7Ozs7QUFROUQsaUNBT0M7OztJQU5DLDBCQUFZOzs7OztJQUlaLDhCQUFjOztJQUNkLDhCQUFpQjs7Ozs7Ozs7Ozs7Ozs7QUFjbkIsc0NBYUM7OztJQVhDLHFDQUFtQjs7SUFDbkIsbUNBQWlCOztJQUNqQix1Q0FBcUI7O0lBQ3JCLHdDQUFzQjs7SUFDdEIsa0NBQThCOztJQUM5QixrQ0FBZ0M7O0lBQ2hDLG9DQUFpQjs7SUFFakIsc0NBQWdCOztJQUVoQixzQ0FBZ0I7Ozs7OztBQU9sQjtJQUFBO1FBUVUsWUFBTyxHQUFZLEtBQUssQ0FBQztJQStCbkMsQ0FBQzs7OztJQTdCQyxvREFBcUI7OztJQUFyQjtRQUFBLGlCQXVCQztRQXRCQyxJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFcEIsVUFBVTs7O1FBQUM7O2dCQUNMLFNBQVMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTOztnQkFFeEcsTUFBTSxHQUFHLGFBQWEsb0JBQzFCLEVBQUUsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFDdEIsU0FBUyxFQUFHLFNBQVMsRUFDckIsV0FBVyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUM3QixZQUFZLEVBQUUseUJBQXlCLEVBQ3ZDLGFBQWEsRUFBRSwwQkFBMEIsRUFDekMsVUFBVSxFQUFFLHNCQUFzQixFQUNsQyxjQUFjLEVBQUUsNkJBQTZCLElBQ3hDLEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUd6QjtZQUVGLEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRS9CLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxzQ0FBTzs7OztJQUFQLFVBQVEsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Z0JBdENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixnL0NBQWtDO2lCQUNuQzs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUFpQ1IsMkJBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQW5DWSxvQkFBb0I7OztJQUMvQixvQ0FBZ0M7O0lBQ2hDLG9DQUFtQjs7Ozs7SUFFbkIsdUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIElNQUdFLVZJRVdFUi50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IG9wZW5zZWFkcmFnb24gZnJvbSAnb3BlbnNlYWRyYWdvbic7XG4vL2RlY2xhcmUgdmFyIHJlcXVpcmU6IGFueTtcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEltYWdlVmlld2VyQ29tcG9uZW50J3MgaW1hZ2VzIFwiZGF0YVwiXG4gKlxuICogSGVyZSB0aGUgbWFpbiBvcHRpb25zIGF2YWlsYWJsZSwgZm9yIGEgY29tcGxldGUgZ3VpZGUgb2YgaW1hZ2Ugc2V0dGluZ3NcbiAqIHZpZXcgdGhlIG9mZmljaWFsIG9wZW5zZWFkcmFnb24gZG9jdW1lbnRhdGlvbiBodHRwczovL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL1xuICogQWxsIGF2YWlsYWJsZSBvcHRpb25zIGhlcmU6IGh0dHBzOi8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vZG9jcy9PcGVuU2VhZHJhZ29uLmh0bWxcbiAqXG4gKiBAcHJvcGVydHkgIHR5cGUgKHJlcXVpcmVkKSBBZG1pdHRlZCB2YWx1ZXMgJ2ltYWdlJyB8ICd6b29taWZ5dGlsZXNlcnZpY2UnIHwgJ29wZW5zdHJlZXRtYXBzJyB8ICd0aWxlZG1hcHNlcnZpY2UnIHwgJ2xlZ2FjeS1pbWFnZS1weXJhbWlkJ1xuICogQHByb3BlcnR5ICBoZWlnaHQgKG9wdGlvbmFsKSBpbWFnZSBoZWlnaHRcbiAqIEBwcm9wZXJ0eSAgd2lkdGggKG9wdGlvbmFsKSBpbWFnZSB3aWR0aFxuICogQHByb3BlcnR5ICB1cmwgKHJlcXVpcmVkKSBpbWFnZSB1cmxcbiAqIEBwcm9wZXJ0eSAgYnVpbGRQeXJhbWlkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSAgY3Jvc3NPcmlnaW5Qb2xpY3kgKG9wdGlvbmFsKSBBZG1pdHRlZCB2YWx1ZXMgJ0Fub255bW91cycgfCAndXNlLWNyZWRlbnRpYWxzJyB8IGZhbHNlO1xuICovXG5leHBvcnQgaW50ZXJmYWNlIElJbWFnZURhdGEge1xuICB0eXBlOiAnaW1hZ2UnIHwgJ3pvb21pZnl0aWxlc2VydmljZScgfCAnb3BlbnN0cmVldG1hcHMnIHwgJ3RpbGVkbWFwc2VydmljZScgfCAnbGVnYWN5LWltYWdlLXB5cmFtaWQnO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIHdpZHRoPzogbnVtYmVyO1xuICB1cmw6IHN0cmluZztcbiAgYnVpbGRQeXJhbWlkOiBib29sZWFuO1xuICBjcm9zc09yaWdpblBvbGljeT86ICdBbm9ueW1vdXMnIHwgJ3VzZS1jcmVkZW50aWFscycgfCBmYWxzZTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEltYWdlVmlld2VyQ29tcG9uZW50J3MgdGh1bWJzIHRvIHByZXZpZXcgYXZhaWxhYmxlIGltYWdlc1xuICpcbiAqIEBwcm9wZXJ0eSAgdXJsIChyZXF1aXJlZCkgaW1hZ2UgdXJsXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVRodW1ic0RhdGEge1xuICB1cmw6IHN0cmluZztcbiAgLyoqXG4gICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgICovXG4gIHBheWxvYWQ/OiBhbnk7XG4gIGNsYXNzZXM/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBJbWFnZVZpZXdlckNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IHByZWZpeFVybCAob3B0aW9uYWwpIFByZXBlbmRzIHRoZSBwcmVmaXhVcmwgdG8gbmF2SW1hZ2VzIHBhdGhzLiBEZWZhdWx0IGlzIC8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vb3BlbnNlYWRyYWdvbi9pbWFnZXMvXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdmlld2VyV2lkdGggKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHZpZXdlckhlaWdodCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaW1hZ2VzIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSB2aWV3ZXJJZCAocmVxdWlyZWQpIFRoZSBpZCB0byBhc3NpZ24gdG8gdGhlIGltYWdldmlld2VyIGNvbnRhaW5lclxuICogQHByb3BlcnR5IGxpYk9wdGlvbnMgKHJlcXVpcmVkKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElJbWFnZVZpZXdlckRhdGEge1xuICAvKnZpZXdlciBpY29uJ3MgZGlyZWN0b3J5IHBhdGggKi9cbiAgcHJlZml4VXJsPzogc3RyaW5nO1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICB2aWV3ZXJXaWR0aD86IG51bWJlcjtcbiAgdmlld2VySGVpZ2h0PzogbnVtYmVyO1xuICBpbWFnZXM6IElJbWFnZURhdGFbXSB8IHN0cmluZztcbiAgdGh1bWJzPzogSVRodW1ic0RhdGFbXSB8IHN0cmluZztcbiAgdmlld2VySWQ6IHN0cmluZztcbiAgLypmb3IgYSBsaXN0IG9mIG9wdGlvbnMgdmlldyB0aGUgb2ZmaWNpYWwgb3BlbnNlYWRyYWdvbiBkb2N1bWVudGF0aW9uIGh0dHA6Ly9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9kb2NzL09wZW5TZWFkcmFnb24uaHRtbCMuT3B0aW9ucyAqL1xuICBsaWJPcHRpb25zOiBhbnk7XG4gIC8qIEEgbWV0aG9kIHJldHVybmluZyB0aGUgbGlicmFyeSBpbnN0YW5jZSAqL1xuICBfc2V0Vmlld2VyOiBhbnk7XG59XG5cbi8qKlxuICogSW1hZ2VWaWV3ZXJDb21wb25lbnQgPG43LWltYWdlLXZpZXdlcj5cbiAqXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWltYWdlLXZpZXdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS12aWV3ZXIuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VWaWV3ZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJSW1hZ2VWaWV3ZXJEYXRhO1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgcHJpdmF0ZSBfbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCl7XG4gICAgaWYoIXRoaXMuZGF0YSB8fCB0aGlzLl9sb2FkZWQpIHJldHVybjtcbiAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQgcHJlZml4VXJsID0gIXRoaXMuZGF0YS5wcmVmaXhVcmwgPyBcIi8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vb3BlbnNlYWRyYWdvbi9pbWFnZXMvXCIgOiB0aGlzLmRhdGEucHJlZml4VXJsO1xuXG4gICAgICBjb25zdCB2aWV3ZXIgPSBvcGVuc2VhZHJhZ29uKHtcbiAgICAgICAgaWQ6IHRoaXMuZGF0YS52aWV3ZXJJZCxcbiAgICAgICAgcHJlZml4VXJsIDogcHJlZml4VXJsLFxuICAgICAgICB0aWxlU291cmNlczogdGhpcy5kYXRhLmltYWdlcyxcbiAgICAgICAgem9vbUluQnV0dG9uOiBcIm43LWltYWdlLXZpZXdlci16b29tLWluXCIsXG4gICAgICAgIHpvb21PdXRCdXR0b246IFwibjctaW1hZ2Utdmlld2VyLXpvb20tb3V0XCIsXG4gICAgICAgIGhvbWVCdXR0b246IFwibjctaW1hZ2Utdmlld2VyLWhvbWVcIixcbiAgICAgICAgZnVsbFBhZ2VCdXR0b246IFwibjctaW1hZ2Utdmlld2VyLWZ1bGwtc2NyZWVuXCIsXG4gICAgICAgICAgLi4udGhpcy5kYXRhLmxpYk9wdGlvbnNcblxuXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5kYXRhLl9zZXRWaWV3ZXIodmlld2VyKTtcblxuICAgIH0pO1xuICB9XG5cbiAgb25DbGljayhwYXlsb2FkKXtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdChcInRodW1iY2xpY2tcIiwgcGF5bG9hZCk7XG4gIH1cbn0iXX0=