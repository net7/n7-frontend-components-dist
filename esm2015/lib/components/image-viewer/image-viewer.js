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
            const prefixUrl = !this.data.prefixUrl ? '//openseadragon.github.io/openseadragon/images/' : this.data.prefixUrl;
            /** @type {?} */
            const viewer = openseadragon(Object.assign({ id: this.data.viewerId, prefixUrl, tileSources: this.data.images, zoomInButton: 'n7-image-viewer-zoom-in', zoomOutButton: 'n7-image-viewer-zoom-out', homeButton: 'n7-image-viewer-home', fullPageButton: 'n7-image-viewer-full-screen' }, this.data.libOptions));
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
        this.emit('thumbclick', payload);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbWFnZS12aWV3ZXIvaW1hZ2Utdmlld2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxhQUFhLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQjFDLCtCQU9DOzs7SUFOQyx5QkFBcUc7O0lBQ3JHLDJCQUFnQjs7SUFDaEIsMEJBQWU7O0lBQ2Ysd0JBQVk7O0lBQ1osaUNBQXNCOztJQUN0QixzQ0FBNEQ7Ozs7Ozs7O0FBUTlELGdDQU9DOzs7SUFOQyx5QkFBWTs7Ozs7SUFJWiw2QkFBYzs7SUFDZCw2QkFBaUI7Ozs7Ozs7Ozs7Ozs7OztBQWVuQixxQ0FhQzs7O0lBWEMsb0NBQW1COztJQUNuQixrQ0FBaUI7O0lBQ2pCLHNDQUFxQjs7SUFDckIsdUNBQXNCOztJQUN0QixpQ0FBNkI7O0lBQzdCLGlDQUErQjs7SUFDL0IsbUNBQWlCOztJQUVqQixxQ0FBZ0I7O0lBRWhCLHFDQUFnQjs7Ozs7O0FBV2xCLE1BQU0sT0FBTyxvQkFBb0I7SUFKakM7UUFTVSxZQUFPLEdBQUcsS0FBSyxDQUFDO0lBOEIxQixDQUFDOzs7O0lBNUJDLHFCQUFxQjtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFcEIsVUFBVTs7O1FBQUMsR0FBRyxFQUFFOztrQkFDUixTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsaURBQWlELENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUzs7a0JBRTFHLE1BQU0sR0FBRyxhQUFhLGlCQUMxQixFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQ3RCLFNBQVMsRUFDVCxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQzdCLFlBQVksRUFBRSx5QkFBeUIsRUFDdkMsYUFBYSxFQUFFLDBCQUEwQixFQUN6QyxVQUFVLEVBQUUsc0JBQXNCLEVBQ2xDLGNBQWMsRUFBRSw2QkFBNkIsSUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBR3ZCO1lBRUYsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7WUF0Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLHNqREFBa0M7YUFDbkM7OzttQkFFRSxLQUFLO21CQUVMLEtBQUs7Ozs7SUFGTixvQ0FBK0I7O0lBRS9CLG9DQUFtQjs7Ozs7SUFFbkIsdUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gSU1BR0UtVklFV0VSLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBvcGVuc2VhZHJhZ29uIGZyb20gJ29wZW5zZWFkcmFnb24nO1xyXG4vLyBkZWNsYXJlIHZhciByZXF1aXJlOiBhbnk7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBJbWFnZVZpZXdlckNvbXBvbmVudCdzIGltYWdlcyBcImRhdGFcIlxyXG4gKlxyXG4gKiBIZXJlIHRoZSBtYWluIG9wdGlvbnMgYXZhaWxhYmxlLCBmb3IgYSBjb21wbGV0ZSBndWlkZSBvZiBpbWFnZSBzZXR0aW5nc1xyXG4gKiB2aWV3IHRoZSBvZmZpY2lhbCBvcGVuc2VhZHJhZ29uIGRvY3VtZW50YXRpb24gaHR0cHM6Ly9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9cclxuICogQWxsIGF2YWlsYWJsZSBvcHRpb25zIGhlcmU6IGh0dHBzOi8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vZG9jcy9PcGVuU2VhZHJhZ29uLmh0bWxcclxuICpcclxuICogQHByb3BlcnR5ICB0eXBlIChyZXF1aXJlZClcclxuICogQWRtaXR0ZWQgdmFsdWVzOlxyXG4gKiAnaW1hZ2UnIHwgJ3pvb21pZnl0aWxlc2VydmljZScgfCAnb3BlbnN0cmVldG1hcHMnIHwgJ3RpbGVkbWFwc2VydmljZScgfCAnbGVnYWN5LWltYWdlLXB5cmFtaWQnXHJcbiAqIEBwcm9wZXJ0eSAgaGVpZ2h0IChvcHRpb25hbCkgaW1hZ2UgaGVpZ2h0XHJcbiAqIEBwcm9wZXJ0eSAgd2lkdGggKG9wdGlvbmFsKSBpbWFnZSB3aWR0aFxyXG4gKiBAcHJvcGVydHkgIHVybCAocmVxdWlyZWQpIGltYWdlIHVybFxyXG4gKiBAcHJvcGVydHkgIGJ1aWxkUHlyYW1pZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSAgY3Jvc3NPcmlnaW5Qb2xpY3kgKG9wdGlvbmFsKSBBZG1pdHRlZCB2YWx1ZXMgJ0Fub255bW91cycgfCAndXNlLWNyZWRlbnRpYWxzJyB8IGZhbHNlO1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJbWFnZURhdGEge1xyXG4gIHR5cGU6ICdpbWFnZScgfCAnem9vbWlmeXRpbGVzZXJ2aWNlJyB8ICdvcGVuc3RyZWV0bWFwcycgfCAndGlsZWRtYXBzZXJ2aWNlJyB8ICdsZWdhY3ktaW1hZ2UtcHlyYW1pZCc7XHJcbiAgaGVpZ2h0PzogbnVtYmVyO1xyXG4gIHdpZHRoPzogbnVtYmVyO1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIGJ1aWxkUHlyYW1pZDogYm9vbGVhbjtcclxuICBjcm9zc09yaWdpblBvbGljeT86ICdBbm9ueW1vdXMnIHwgJ3VzZS1jcmVkZW50aWFscycgfCBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgSW1hZ2VWaWV3ZXJDb21wb25lbnQncyB0aHVtYnMgdG8gcHJldmlldyBhdmFpbGFibGUgaW1hZ2VzXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSAgdXJsIChyZXF1aXJlZCkgaW1hZ2UgdXJsXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFRodW1ic0RhdGEge1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcclxuICAgKi9cclxuICBwYXlsb2FkPzogYW55O1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEltYWdlVmlld2VyQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IHByZWZpeFVybCAob3B0aW9uYWwpIFByZXBlbmRzIHRoZSBwcmVmaXhVcmwgdG8gbmF2SW1hZ2VzIHBhdGhzLlxyXG4gKiBEZWZhdWx0IGlzIC8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vb3BlbnNlYWRyYWdvbi9pbWFnZXMvXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHZpZXdlcldpZHRoIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHZpZXdlckhlaWdodCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpbWFnZXMgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgdmlld2VySWQgKHJlcXVpcmVkKSBUaGUgaWQgdG8gYXNzaWduIHRvIHRoZSBpbWFnZXZpZXdlciBjb250YWluZXJcclxuICogQHByb3BlcnR5IGxpYk9wdGlvbnMgKHJlcXVpcmVkKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJbWFnZVZpZXdlckRhdGEge1xyXG4gIC8qIHZpZXdlciBpY29uJ3MgZGlyZWN0b3J5IHBhdGggKi9cclxuICBwcmVmaXhVcmw/OiBzdHJpbmc7XHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICB2aWV3ZXJXaWR0aD86IG51bWJlcjtcclxuICB2aWV3ZXJIZWlnaHQ/OiBudW1iZXI7XHJcbiAgaW1hZ2VzOiBJbWFnZURhdGFbXSB8IHN0cmluZztcclxuICB0aHVtYnM/OiBUaHVtYnNEYXRhW10gfCBzdHJpbmc7XHJcbiAgdmlld2VySWQ6IHN0cmluZztcclxuICAvKiBmb3IgYSBsaXN0IG9mIG9wdGlvbnMgdmlldyB0aGUgb2ZmaWNpYWwgb3BlbnNlYWRyYWdvbiBkb2N1bWVudGF0aW9uIGh0dHA6Ly9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9kb2NzL09wZW5TZWFkcmFnb24uaHRtbCMuT3B0aW9ucyAqL1xyXG4gIGxpYk9wdGlvbnM6IGFueTtcclxuICAvKiBBIG1ldGhvZCByZXR1cm5pbmcgdGhlIGxpYnJhcnkgaW5zdGFuY2UgKi9cclxuICBfc2V0Vmlld2VyOiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbWFnZVZpZXdlckNvbXBvbmVudCA8bjctaW1hZ2Utdmlld2VyPlxyXG4gKlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1pbWFnZS12aWV3ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS12aWV3ZXIuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEltYWdlVmlld2VyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBJbWFnZVZpZXdlckRhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBfbG9hZGVkID0gZmFsc2U7XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcclxuICAgIGlmICghdGhpcy5kYXRhIHx8IHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xyXG4gICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgcHJlZml4VXJsID0gIXRoaXMuZGF0YS5wcmVmaXhVcmwgPyAnLy9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9vcGVuc2VhZHJhZ29uL2ltYWdlcy8nIDogdGhpcy5kYXRhLnByZWZpeFVybDtcclxuXHJcbiAgICAgIGNvbnN0IHZpZXdlciA9IG9wZW5zZWFkcmFnb24oe1xyXG4gICAgICAgIGlkOiB0aGlzLmRhdGEudmlld2VySWQsXHJcbiAgICAgICAgcHJlZml4VXJsLFxyXG4gICAgICAgIHRpbGVTb3VyY2VzOiB0aGlzLmRhdGEuaW1hZ2VzLFxyXG4gICAgICAgIHpvb21JbkJ1dHRvbjogJ243LWltYWdlLXZpZXdlci16b29tLWluJyxcclxuICAgICAgICB6b29tT3V0QnV0dG9uOiAnbjctaW1hZ2Utdmlld2VyLXpvb20tb3V0JyxcclxuICAgICAgICBob21lQnV0dG9uOiAnbjctaW1hZ2Utdmlld2VyLWhvbWUnLFxyXG4gICAgICAgIGZ1bGxQYWdlQnV0dG9uOiAnbjctaW1hZ2Utdmlld2VyLWZ1bGwtc2NyZWVuJyxcclxuICAgICAgICAuLi50aGlzLmRhdGEubGliT3B0aW9uc1xyXG5cclxuXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5kYXRhLl9zZXRWaWV3ZXIodmlld2VyKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DbGljayhwYXlsb2FkKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCd0aHVtYmNsaWNrJywgcGF5bG9hZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==