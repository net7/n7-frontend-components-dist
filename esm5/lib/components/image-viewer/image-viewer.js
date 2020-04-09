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
/**
 * Interface for ImageViewerComponent's images "data"
 *
 * Here the main options available, for a complete guide of image settings
 * view the official openseadragon documentation https://openseadragon.github.io/
 * All available options here: https://openseadragon.github.io/docs/OpenSeadragon.html
 *
 * \@property type (required)
 * Admitted values:
 * 'image' | 'zoomifytileservice' | 'openstreetmaps' | 'tiledmapservice' | 'legacy-image-pyramid'
 * \@property height (optional) image height
 * \@property width (optional) image width
 * \@property url (required) image url
 * \@property buildPyramid (optional)
 * \@property crossOriginPolicy (optional) Admitted values 'Anonymous' | 'use-credentials' | false;
 * @record
 */
export function ImageData() { }
if (false) {
    /** @type {?} */
    ImageData.prototype.type;
    /** @type {?|undefined} */
    ImageData.prototype.height;
    /** @type {?|undefined} */
    ImageData.prototype.width;
    /** @type {?} */
    ImageData.prototype.url;
    /** @type {?} */
    ImageData.prototype.buildPyramid;
    /** @type {?|undefined} */
    ImageData.prototype.crossOriginPolicy;
}
/**
 * Interface for ImageViewerComponent's thumbs to preview available images
 *
 * \@property url (required) image url
 * @record
 */
export function ThumbsData() { }
if (false) {
    /** @type {?} */
    ThumbsData.prototype.url;
    /**
     * action click's payload
     * @type {?|undefined}
     */
    ThumbsData.prototype.payload;
    /** @type {?|undefined} */
    ThumbsData.prototype.classes;
}
/**
 * Interface for ImageViewerComponent's "data"
 *
 * \@property prefixUrl (optional) Prepends the prefixUrl to navImages paths.
 * Default is //openseadragon.github.io/openseadragon/images/
 * \@property classes (optional)
 * \@property viewerWidth (optional)
 * \@property viewerHeight (optional)
 * \@property images (required)
 * \@property viewerId (required) The id to assign to the imageviewer container
 * \@property libOptions (required)
 * @record
 */
export function ImageViewerData() { }
if (false) {
    /** @type {?|undefined} */
    ImageViewerData.prototype.prefixUrl;
    /** @type {?|undefined} */
    ImageViewerData.prototype.classes;
    /** @type {?|undefined} */
    ImageViewerData.prototype.viewerWidth;
    /** @type {?|undefined} */
    ImageViewerData.prototype.viewerHeight;
    /** @type {?} */
    ImageViewerData.prototype.images;
    /** @type {?|undefined} */
    ImageViewerData.prototype.thumbs;
    /** @type {?} */
    ImageViewerData.prototype.viewerId;
    /** @type {?} */
    ImageViewerData.prototype.libOptions;
    /** @type {?} */
    ImageViewerData.prototype._setViewer;
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
            var prefixUrl = !_this.data.prefixUrl ? '//openseadragon.github.io/openseadragon/images/' : _this.data.prefixUrl;
            import('openseadragon').then((/**
             * @param {?} module
             * @return {?}
             */
            function (module) {
                var openseadragon = module.default;
                /** @type {?} */
                var viewer = openseadragon(tslib_1.__assign({ id: _this.data.viewerId, prefixUrl: prefixUrl, tileSources: _this.data.images, zoomInButton: 'n7-image-viewer-zoom-in', zoomOutButton: 'n7-image-viewer-zoom-out', homeButton: 'n7-image-viewer-home', fullPageButton: 'n7-image-viewer-full-screen' }, _this.data.libOptions));
                _this.data._setViewer(viewer);
            }));
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
        this.emit('thumbclick', payload);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbWFnZS12aWV3ZXIvaW1hZ2Utdmlld2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQmpELCtCQU9DOzs7SUFOQyx5QkFBcUc7O0lBQ3JHLDJCQUFnQjs7SUFDaEIsMEJBQWU7O0lBQ2Ysd0JBQVk7O0lBQ1osaUNBQXNCOztJQUN0QixzQ0FBNEQ7Ozs7Ozs7O0FBUTlELGdDQU9DOzs7SUFOQyx5QkFBWTs7Ozs7SUFJWiw2QkFBYzs7SUFDZCw2QkFBaUI7Ozs7Ozs7Ozs7Ozs7OztBQWVuQixxQ0FhQzs7O0lBWEMsb0NBQW1COztJQUNuQixrQ0FBaUI7O0lBQ2pCLHNDQUFxQjs7SUFDckIsdUNBQXNCOztJQUN0QixpQ0FBNkI7O0lBQzdCLGlDQUErQjs7SUFDL0IsbUNBQWlCOztJQUVqQixxQ0FBZ0I7O0lBRWhCLHFDQUFnQjs7Ozs7O0FBT2xCO0lBQUE7UUFTVSxZQUFPLEdBQUcsS0FBSyxDQUFDO0lBOEIxQixDQUFDOzs7O0lBNUJDLG9EQUFxQjs7O0lBQXJCO1FBQUEsaUJBc0JDO1FBckJDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUVwQixVQUFVOzs7UUFBQzs7Z0JBQ0gsU0FBUyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGlEQUFpRCxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFDaEgsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLE1BQU07Z0JBQzFCLElBQUEsOEJBQXNCOztvQkFDeEIsTUFBTSxHQUFHLGFBQWEsb0JBQzFCLEVBQUUsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFDdEIsU0FBUyxXQUFBLEVBQ1QsV0FBVyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUM3QixZQUFZLEVBQUUseUJBQXlCLEVBQ3ZDLGFBQWEsRUFBRSwwQkFBMEIsRUFDekMsVUFBVSxFQUFFLHNCQUFzQixFQUNsQyxjQUFjLEVBQUUsNkJBQTZCLElBQzFDLEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUN2QjtnQkFFRixLQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQixDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxzQ0FBTzs7OztJQUFQLFVBQVEsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Z0JBdENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixnL0NBQWtDO2lCQUNuQzs7O3VCQUVFLEtBQUs7dUJBRUwsS0FBSzs7SUFnQ1IsMkJBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQW5DWSxvQkFBb0I7OztJQUMvQixvQ0FBK0I7O0lBRS9CLG9DQUFtQjs7Ozs7SUFFbkIsdUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIElNQUdFLVZJRVdFUi50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgSW1hZ2VWaWV3ZXJDb21wb25lbnQncyBpbWFnZXMgXCJkYXRhXCJcbiAqXG4gKiBIZXJlIHRoZSBtYWluIG9wdGlvbnMgYXZhaWxhYmxlLCBmb3IgYSBjb21wbGV0ZSBndWlkZSBvZiBpbWFnZSBzZXR0aW5nc1xuICogdmlldyB0aGUgb2ZmaWNpYWwgb3BlbnNlYWRyYWdvbiBkb2N1bWVudGF0aW9uIGh0dHBzOi8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vXG4gKiBBbGwgYXZhaWxhYmxlIG9wdGlvbnMgaGVyZTogaHR0cHM6Ly9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9kb2NzL09wZW5TZWFkcmFnb24uaHRtbFxuICpcbiAqIEBwcm9wZXJ0eSAgdHlwZSAocmVxdWlyZWQpXG4gKiBBZG1pdHRlZCB2YWx1ZXM6XG4gKiAnaW1hZ2UnIHwgJ3pvb21pZnl0aWxlc2VydmljZScgfCAnb3BlbnN0cmVldG1hcHMnIHwgJ3RpbGVkbWFwc2VydmljZScgfCAnbGVnYWN5LWltYWdlLXB5cmFtaWQnXG4gKiBAcHJvcGVydHkgIGhlaWdodCAob3B0aW9uYWwpIGltYWdlIGhlaWdodFxuICogQHByb3BlcnR5ICB3aWR0aCAob3B0aW9uYWwpIGltYWdlIHdpZHRoXG4gKiBAcHJvcGVydHkgIHVybCAocmVxdWlyZWQpIGltYWdlIHVybFxuICogQHByb3BlcnR5ICBidWlsZFB5cmFtaWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5ICBjcm9zc09yaWdpblBvbGljeSAob3B0aW9uYWwpIEFkbWl0dGVkIHZhbHVlcyAnQW5vbnltb3VzJyB8ICd1c2UtY3JlZGVudGlhbHMnIHwgZmFsc2U7XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VEYXRhIHtcbiAgdHlwZTogJ2ltYWdlJyB8ICd6b29taWZ5dGlsZXNlcnZpY2UnIHwgJ29wZW5zdHJlZXRtYXBzJyB8ICd0aWxlZG1hcHNlcnZpY2UnIHwgJ2xlZ2FjeS1pbWFnZS1weXJhbWlkJztcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICB3aWR0aD86IG51bWJlcjtcbiAgdXJsOiBzdHJpbmc7XG4gIGJ1aWxkUHlyYW1pZDogYm9vbGVhbjtcbiAgY3Jvc3NPcmlnaW5Qb2xpY3k/OiAnQW5vbnltb3VzJyB8ICd1c2UtY3JlZGVudGlhbHMnIHwgZmFsc2U7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBJbWFnZVZpZXdlckNvbXBvbmVudCdzIHRodW1icyB0byBwcmV2aWV3IGF2YWlsYWJsZSBpbWFnZXNcbiAqXG4gKiBAcHJvcGVydHkgIHVybCAocmVxdWlyZWQpIGltYWdlIHVybFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRodW1ic0RhdGEge1xuICB1cmw6IHN0cmluZztcbiAgLyoqXG4gICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgICovXG4gIHBheWxvYWQ/OiBhbnk7XG4gIGNsYXNzZXM/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBJbWFnZVZpZXdlckNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IHByZWZpeFVybCAob3B0aW9uYWwpIFByZXBlbmRzIHRoZSBwcmVmaXhVcmwgdG8gbmF2SW1hZ2VzIHBhdGhzLlxuICogRGVmYXVsdCBpcyAvL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL29wZW5zZWFkcmFnb24vaW1hZ2VzL1xuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHZpZXdlcldpZHRoIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB2aWV3ZXJIZWlnaHQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGltYWdlcyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgdmlld2VySWQgKHJlcXVpcmVkKSBUaGUgaWQgdG8gYXNzaWduIHRvIHRoZSBpbWFnZXZpZXdlciBjb250YWluZXJcbiAqIEBwcm9wZXJ0eSBsaWJPcHRpb25zIChyZXF1aXJlZClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbWFnZVZpZXdlckRhdGEge1xuICAvKiB2aWV3ZXIgaWNvbidzIGRpcmVjdG9yeSBwYXRoICovXG4gIHByZWZpeFVybD86IHN0cmluZztcbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgdmlld2VyV2lkdGg/OiBudW1iZXI7XG4gIHZpZXdlckhlaWdodD86IG51bWJlcjtcbiAgaW1hZ2VzOiBJbWFnZURhdGFbXSB8IHN0cmluZztcbiAgdGh1bWJzPzogVGh1bWJzRGF0YVtdIHwgc3RyaW5nO1xuICB2aWV3ZXJJZDogc3RyaW5nO1xuICAvKiBmb3IgYSBsaXN0IG9mIG9wdGlvbnMgdmlldyB0aGUgb2ZmaWNpYWwgb3BlbnNlYWRyYWdvbiBkb2N1bWVudGF0aW9uIGh0dHA6Ly9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9kb2NzL09wZW5TZWFkcmFnb24uaHRtbCMuT3B0aW9ucyAqL1xuICBsaWJPcHRpb25zOiBhbnk7XG4gIC8qIEEgbWV0aG9kIHJldHVybmluZyB0aGUgbGlicmFyeSBpbnN0YW5jZSAqL1xuICBfc2V0Vmlld2VyOiBhbnk7XG59XG5cbi8qKlxuICogSW1hZ2VWaWV3ZXJDb21wb25lbnQgPG43LWltYWdlLXZpZXdlcj5cbiAqXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWltYWdlLXZpZXdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS12aWV3ZXIuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VWaWV3ZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJbWFnZVZpZXdlckRhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIHByaXZhdGUgX2xvYWRlZCA9IGZhbHNlO1xuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICBpZiAoIXRoaXMuZGF0YSB8fCB0aGlzLl9sb2FkZWQpIHJldHVybjtcbiAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBwcmVmaXhVcmwgPSAhdGhpcy5kYXRhLnByZWZpeFVybCA/ICcvL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL29wZW5zZWFkcmFnb24vaW1hZ2VzLycgOiB0aGlzLmRhdGEucHJlZml4VXJsO1xuICAgICAgaW1wb3J0KCdvcGVuc2VhZHJhZ29uJykudGhlbigobW9kdWxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgZGVmYXVsdDogb3BlbnNlYWRyYWdvbiB9ID0gbW9kdWxlO1xuICAgICAgICBjb25zdCB2aWV3ZXIgPSBvcGVuc2VhZHJhZ29uKHtcbiAgICAgICAgICBpZDogdGhpcy5kYXRhLnZpZXdlcklkLFxuICAgICAgICAgIHByZWZpeFVybCxcbiAgICAgICAgICB0aWxlU291cmNlczogdGhpcy5kYXRhLmltYWdlcyxcbiAgICAgICAgICB6b29tSW5CdXR0b246ICduNy1pbWFnZS12aWV3ZXItem9vbS1pbicsXG4gICAgICAgICAgem9vbU91dEJ1dHRvbjogJ243LWltYWdlLXZpZXdlci16b29tLW91dCcsXG4gICAgICAgICAgaG9tZUJ1dHRvbjogJ243LWltYWdlLXZpZXdlci1ob21lJyxcbiAgICAgICAgICBmdWxsUGFnZUJ1dHRvbjogJ243LWltYWdlLXZpZXdlci1mdWxsLXNjcmVlbicsXG4gICAgICAgICAgLi4udGhpcy5kYXRhLmxpYk9wdGlvbnNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5kYXRhLl9zZXRWaWV3ZXIodmlld2VyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgb25DbGljayhwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ3RodW1iY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxufVxuIl19