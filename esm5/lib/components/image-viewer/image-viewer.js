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
                var viewer = openseadragon(tslib_1.__assign({ id: _this.data.viewerId, prefixUrl: prefixUrl, tileSources: _this.data.images, zoomInButton: 'n7-image-viewer-zoom-in', zoomOutButton: 'n7-image-viewer-zoom-out', homeButton: 'n7-image-viewer-home', fullPageButton: 'n7-image-viewer-full-screen', nextButton: 'n7-image-viewer-nav-next', previousButton: 'n7-image-viewer-nav-prev' }, _this.data.libOptions));
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
                    template: "<div *ngIf=\"data\" class=\"n7-image-viewer {{data.classes || ''}}\">\n    <!-- OSD viewer -->\n    <div id=\"{{data.viewerId}}\" class=\"n7-image-viewer__viewer\">\n    </div>\n\n    <!-- Thumbs -->\n    <div class=\"n7-image-viewer__thumbs\" *ngIf=\"data.thumbs\">\n        <ul class=\"n7-image-viewer__thumb-list\">\n            <li *ngFor=\"let thumb of data.thumbs\" \n                class=\"n7-image-viewer__thumb-item {{thumb.classes || ''}}\"\n                [ngStyle]=\"{'background-image': 'url(' + thumb.url + ')'}\"\n                (click)=\"onClick(thumb.payload)\">\n            </li>\n        </ul>\n    </div>\n\n    <!-- Zoom controls -->\n    <div class=\"n7-image-viewer__controls\">\n        <ul class=\"n7-image-viewer__controls-list\">\n            <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-zoom-in\">\n                <span class=\"n7-icon-search-plus\"></span>\n            </li>\n            <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-zoom-out\">\n                <span class=\"n7-icon-search-minus\"></span>\n            </li>\n            <!--\n            <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-home\">\n                <span class=\"n7-icon-home\"></span>\n            </li>\n            <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-full-screen\">\n                <span class=\"n7-icon-expand-arrows\"></span>\n            </li>\n            -->\n        </ul>\n    </div>\n\n    <!-- Navigation -->\n    <div class=\"n7-image-viewer__prev\" id=\"n7-image-viewer-nav-prev\">\n        <span class=\"n7-icon-angle-left\"></span>\n    </div>\n\n    <div class=\"n7-image-viewer__next\" id=\"n7-image-viewer-nav-next\">\n        <span class=\"n7-icon-angle-right\"></span>\n    </div>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbWFnZS12aWV3ZXIvaW1hZ2Utdmlld2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQmpELCtCQU9DOzs7SUFOQyx5QkFBcUc7O0lBQ3JHLDJCQUFnQjs7SUFDaEIsMEJBQWU7O0lBQ2Ysd0JBQVk7O0lBQ1osaUNBQXNCOztJQUN0QixzQ0FBNEQ7Ozs7Ozs7O0FBUTlELGdDQU9DOzs7SUFOQyx5QkFBWTs7Ozs7SUFJWiw2QkFBYzs7SUFDZCw2QkFBaUI7Ozs7Ozs7Ozs7Ozs7OztBQWVuQixxQ0FhQzs7O0lBWEMsb0NBQW1COztJQUNuQixrQ0FBaUI7O0lBQ2pCLHNDQUFxQjs7SUFDckIsdUNBQXNCOztJQUN0QixpQ0FBNkI7O0lBQzdCLGlDQUErQjs7SUFDL0IsbUNBQWlCOztJQUVqQixxQ0FBZ0I7O0lBRWhCLHFDQUFnQjs7Ozs7O0FBT2xCO0lBQUE7UUFTVSxZQUFPLEdBQUcsS0FBSyxDQUFDO0lBZ0MxQixDQUFDOzs7O0lBOUJDLG9EQUFxQjs7O0lBQXJCO1FBQUEsaUJBd0JDO1FBdkJDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUVwQixVQUFVOzs7UUFBQzs7Z0JBQ0gsU0FBUyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGlEQUFpRCxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFDaEgsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLE1BQU07Z0JBQzFCLElBQUEsOEJBQXNCOztvQkFDeEIsTUFBTSxHQUFHLGFBQWEsb0JBQzFCLEVBQUUsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFDdEIsU0FBUyxXQUFBLEVBQ1QsV0FBVyxFQUFLLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUNoQyxZQUFZLEVBQUkseUJBQXlCLEVBQ3pDLGFBQWEsRUFBRywwQkFBMEIsRUFDMUMsVUFBVSxFQUFNLHNCQUFzQixFQUN0QyxjQUFjLEVBQUUsNkJBQTZCLEVBQzdDLFVBQVUsRUFBTSwwQkFBMEIsRUFDMUMsY0FBYyxFQUFFLDBCQUEwQixJQUN2QyxLQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFDdkI7Z0JBRUYsS0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0IsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsc0NBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7O2dCQXhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0Isb3lEQUFrQztpQkFDbkM7Ozt1QkFFRSxLQUFLO3VCQUVMLEtBQUs7O0lBa0NSLDJCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7U0FyQ1ksb0JBQW9COzs7SUFDL0Isb0NBQStCOztJQUUvQixvQ0FBbUI7Ozs7O0lBRW5CLHVDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBJTUFHRS1WSUVXRVIudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEltYWdlVmlld2VyQ29tcG9uZW50J3MgaW1hZ2VzIFwiZGF0YVwiXG4gKlxuICogSGVyZSB0aGUgbWFpbiBvcHRpb25zIGF2YWlsYWJsZSwgZm9yIGEgY29tcGxldGUgZ3VpZGUgb2YgaW1hZ2Ugc2V0dGluZ3NcbiAqIHZpZXcgdGhlIG9mZmljaWFsIG9wZW5zZWFkcmFnb24gZG9jdW1lbnRhdGlvbiBodHRwczovL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL1xuICogQWxsIGF2YWlsYWJsZSBvcHRpb25zIGhlcmU6IGh0dHBzOi8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vZG9jcy9PcGVuU2VhZHJhZ29uLmh0bWxcbiAqXG4gKiBAcHJvcGVydHkgIHR5cGUgKHJlcXVpcmVkKVxuICogQWRtaXR0ZWQgdmFsdWVzOlxuICogJ2ltYWdlJyB8ICd6b29taWZ5dGlsZXNlcnZpY2UnIHwgJ29wZW5zdHJlZXRtYXBzJyB8ICd0aWxlZG1hcHNlcnZpY2UnIHwgJ2xlZ2FjeS1pbWFnZS1weXJhbWlkJ1xuICogQHByb3BlcnR5ICBoZWlnaHQgKG9wdGlvbmFsKSBpbWFnZSBoZWlnaHRcbiAqIEBwcm9wZXJ0eSAgd2lkdGggKG9wdGlvbmFsKSBpbWFnZSB3aWR0aFxuICogQHByb3BlcnR5ICB1cmwgKHJlcXVpcmVkKSBpbWFnZSB1cmxcbiAqIEBwcm9wZXJ0eSAgYnVpbGRQeXJhbWlkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSAgY3Jvc3NPcmlnaW5Qb2xpY3kgKG9wdGlvbmFsKSBBZG1pdHRlZCB2YWx1ZXMgJ0Fub255bW91cycgfCAndXNlLWNyZWRlbnRpYWxzJyB8IGZhbHNlO1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlRGF0YSB7XG4gIHR5cGU6ICdpbWFnZScgfCAnem9vbWlmeXRpbGVzZXJ2aWNlJyB8ICdvcGVuc3RyZWV0bWFwcycgfCAndGlsZWRtYXBzZXJ2aWNlJyB8ICdsZWdhY3ktaW1hZ2UtcHlyYW1pZCc7XG4gIGhlaWdodD86IG51bWJlcjtcbiAgd2lkdGg/OiBudW1iZXI7XG4gIHVybDogc3RyaW5nO1xuICBidWlsZFB5cmFtaWQ6IGJvb2xlYW47XG4gIGNyb3NzT3JpZ2luUG9saWN5PzogJ0Fub255bW91cycgfCAndXNlLWNyZWRlbnRpYWxzJyB8IGZhbHNlO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgSW1hZ2VWaWV3ZXJDb21wb25lbnQncyB0aHVtYnMgdG8gcHJldmlldyBhdmFpbGFibGUgaW1hZ2VzXG4gKlxuICogQHByb3BlcnR5ICB1cmwgKHJlcXVpcmVkKSBpbWFnZSB1cmxcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUaHVtYnNEYXRhIHtcbiAgdXJsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAqL1xuICBwYXlsb2FkPzogYW55O1xuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgSW1hZ2VWaWV3ZXJDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBwcmVmaXhVcmwgKG9wdGlvbmFsKSBQcmVwZW5kcyB0aGUgcHJlZml4VXJsIHRvIG5hdkltYWdlcyBwYXRocy5cbiAqIERlZmF1bHQgaXMgLy9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9vcGVuc2VhZHJhZ29uL2ltYWdlcy9cbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB2aWV3ZXJXaWR0aCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdmlld2VySGVpZ2h0IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpbWFnZXMgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHZpZXdlcklkIChyZXF1aXJlZCkgVGhlIGlkIHRvIGFzc2lnbiB0byB0aGUgaW1hZ2V2aWV3ZXIgY29udGFpbmVyXG4gKiBAcHJvcGVydHkgbGliT3B0aW9ucyAocmVxdWlyZWQpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VWaWV3ZXJEYXRhIHtcbiAgLyogdmlld2VyIGljb24ncyBkaXJlY3RvcnkgcGF0aCAqL1xuICBwcmVmaXhVcmw/OiBzdHJpbmc7XG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIHZpZXdlcldpZHRoPzogbnVtYmVyO1xuICB2aWV3ZXJIZWlnaHQ/OiBudW1iZXI7XG4gIGltYWdlczogSW1hZ2VEYXRhW10gfCBzdHJpbmc7XG4gIHRodW1icz86IFRodW1ic0RhdGFbXSB8IHN0cmluZztcbiAgdmlld2VySWQ6IHN0cmluZztcbiAgLyogZm9yIGEgbGlzdCBvZiBvcHRpb25zIHZpZXcgdGhlIG9mZmljaWFsIG9wZW5zZWFkcmFnb24gZG9jdW1lbnRhdGlvbiBodHRwOi8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vZG9jcy9PcGVuU2VhZHJhZ29uLmh0bWwjLk9wdGlvbnMgKi9cbiAgbGliT3B0aW9uczogYW55O1xuICAvKiBBIG1ldGhvZCByZXR1cm5pbmcgdGhlIGxpYnJhcnkgaW5zdGFuY2UgKi9cbiAgX3NldFZpZXdlcjogYW55O1xufVxuXG4vKipcbiAqIEltYWdlVmlld2VyQ29tcG9uZW50IDxuNy1pbWFnZS12aWV3ZXI+XG4gKlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1pbWFnZS12aWV3ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2Utdmlld2VyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlVmlld2VyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSW1hZ2VWaWV3ZXJEYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBwcml2YXRlIF9sb2FkZWQgPSBmYWxzZTtcblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgaWYgKCF0aGlzLmRhdGEgfHwgdGhpcy5fbG9hZGVkKSByZXR1cm47XG4gICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgcHJlZml4VXJsID0gIXRoaXMuZGF0YS5wcmVmaXhVcmwgPyAnLy9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9vcGVuc2VhZHJhZ29uL2ltYWdlcy8nIDogdGhpcy5kYXRhLnByZWZpeFVybDtcbiAgICAgIGltcG9ydCgnb3BlbnNlYWRyYWdvbicpLnRoZW4oKG1vZHVsZSkgPT4ge1xuICAgICAgICBjb25zdCB7IGRlZmF1bHQ6IG9wZW5zZWFkcmFnb24gfSA9IG1vZHVsZTtcbiAgICAgICAgY29uc3Qgdmlld2VyID0gb3BlbnNlYWRyYWdvbih7XG4gICAgICAgICAgaWQ6IHRoaXMuZGF0YS52aWV3ZXJJZCxcbiAgICAgICAgICBwcmVmaXhVcmwsXG4gICAgICAgICAgdGlsZVNvdXJjZXM6ICAgIHRoaXMuZGF0YS5pbWFnZXMsXG4gICAgICAgICAgem9vbUluQnV0dG9uOiAgICduNy1pbWFnZS12aWV3ZXItem9vbS1pbicsXG4gICAgICAgICAgem9vbU91dEJ1dHRvbjogICduNy1pbWFnZS12aWV3ZXItem9vbS1vdXQnLFxuICAgICAgICAgIGhvbWVCdXR0b246ICAgICAnbjctaW1hZ2Utdmlld2VyLWhvbWUnLFxuICAgICAgICAgIGZ1bGxQYWdlQnV0dG9uOiAnbjctaW1hZ2Utdmlld2VyLWZ1bGwtc2NyZWVuJyxcbiAgICAgICAgICBuZXh0QnV0dG9uOiAgICAgJ243LWltYWdlLXZpZXdlci1uYXYtbmV4dCcsXG4gICAgICAgICAgcHJldmlvdXNCdXR0b246ICduNy1pbWFnZS12aWV3ZXItbmF2LXByZXYnLFxuICAgICAgICAgIC4uLnRoaXMuZGF0YS5saWJPcHRpb25zXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZGF0YS5fc2V0Vmlld2VyKHZpZXdlcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCd0aHVtYmNsaWNrJywgcGF5bG9hZCk7XG4gIH1cbn1cbiJdfQ==