/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            const viewer = openseadragon(Object.assign({ id: this.data.viewerId, prefixUrl: prefixUrl, tileSources: this.data.images }, this.data.libOptions));
            this.data._setViewer(viewer);
        }));
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbWFnZS12aWV3ZXIvaW1hZ2Utdmlld2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLGFBQWEsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQjFDLGdDQU9DOzs7SUFORywwQkFBcUc7O0lBQ3JHLDRCQUFnQjs7SUFDaEIsMkJBQWU7O0lBQ2YseUJBQVk7O0lBQ1osa0NBQXNCOztJQUN0Qix1Q0FBNEQ7Ozs7Ozs7Ozs7Ozs7O0FBY2hFLHNDQVlDOzs7SUFWQyxxQ0FBbUI7O0lBQ25CLG1DQUFpQjs7SUFDakIsdUNBQXFCOztJQUNyQix3Q0FBc0I7O0lBQ3RCLGtDQUE4Qjs7SUFDOUIsb0NBQWlCOztJQUVqQixzQ0FBZ0I7O0lBRWhCLHNDQUFnQjs7Ozs7O0FBV2xCLE1BQU0sT0FBTyxvQkFBb0I7SUFKakM7UUFRVSxZQUFPLEdBQVksS0FBSyxDQUFDO0lBb0JuQyxDQUFDOzs7O0lBbEJDLHFCQUFxQjtRQUNuQixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFcEIsVUFBVTs7O1FBQUMsR0FBRyxFQUFFOztnQkFDVixTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsaURBQWlELENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUzs7a0JBRXhHLE1BQU0sR0FBRyxhQUFhLGlCQUMxQixFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQ3RCLFNBQVMsRUFBRyxTQUFTLEVBQ3JCLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQ3ZCO1lBRUYsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFL0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUEzQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLHFtQkFBa0M7YUFDbkM7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETixvQ0FBZ0M7O0lBQ2hDLG9DQUFtQjs7Ozs7SUFFbkIsdUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gSU1BR0UtVklFV0VSLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBvcGVuc2VhZHJhZ29uIGZyb20gJ29wZW5zZWFkcmFnb24nO1xyXG4vL2RlY2xhcmUgdmFyIHJlcXVpcmU6IGFueTtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEltYWdlVmlld2VyQ29tcG9uZW50J3MgaWFtZ2VzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEhlcmUgdGhlIG1haW4gb3B0aW9ucyBhdmFpbGFibGUsIGZvciBhIGNvbXBsZXRlIGd1aWRlIG9mIGltYWdlIHNldHRpbmdzIFxyXG4gKiB2aWV3IHRoZSBvZmZpY2lhbCBvcGVuc2VhZHJhZ29uIGRvY3VtZW50YXRpb24gaHR0cHM6Ly9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9cclxuICogQWxsIGF2YWlsYWJsZSBvcHRpb25zIGhlcmU6IGh0dHBzOi8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vZG9jcy9PcGVuU2VhZHJhZ29uLmh0bWxcclxuICpcclxuICogQHByb3BlcnR5ICB0eXBlIChyZXF1aXJlZCkgQWRtaXR0ZWQgdmFsdWVzICdpbWFnZScgfCAnem9vbWlmeXRpbGVzZXJ2aWNlJyB8ICdvcGVuc3RyZWV0bWFwcycgfCAndGlsZWRtYXBzZXJ2aWNlJyB8ICdsZWdhY3ktaW1hZ2UtcHlyYW1pZCdcclxuICogQHByb3BlcnR5ICBoZWlnaHQgKG9wdGlvbmFsKSBpbWFnZSBoZWlnaHRcclxuICogQHByb3BlcnR5ICB3aWR0aCAob3B0aW9uYWwpIGltYWdlIHdpZHRoXHJcbiAqIEBwcm9wZXJ0eSAgdXJsIChyZXF1aXJlZCkgaW1hZ2Ugd2lkdGhcclxuICogQHByb3BlcnR5ICBidWlsZFB5cmFtaWQgKG9wdGlvbmFsKSBcclxuICogQHByb3BlcnR5ICBjcm9zc09yaWdpblBvbGljeSAob3B0aW9uYWwpIEFkbWl0dGVkIHZhbHVlcyAnQW5vbnltb3VzJyB8ICd1c2UtY3JlZGVudGlhbHMnIHwgZmFsc2U7XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElJbWFnZURhdGEge1xyXG4gICAgdHlwZTogJ2ltYWdlJyB8ICd6b29taWZ5dGlsZXNlcnZpY2UnIHwgJ29wZW5zdHJlZXRtYXBzJyB8ICd0aWxlZG1hcHNlcnZpY2UnIHwgJ2xlZ2FjeS1pbWFnZS1weXJhbWlkJztcclxuICAgIGhlaWdodD86IG51bWJlcjtcclxuICAgIHdpZHRoPzogbnVtYmVyO1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBidWlsZFB5cmFtaWQ6IGJvb2xlYW47XHJcbiAgICBjcm9zc09yaWdpblBvbGljeT86ICdBbm9ueW1vdXMnIHwgJ3VzZS1jcmVkZW50aWFscycgfCBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgSW1hZ2VWaWV3ZXJDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgcHJlZml4VXJsIChvcHRpb25hbCkgUHJlcGVuZHMgdGhlIHByZWZpeFVybCB0byBuYXZJbWFnZXMgcGF0aHMuIERlZmF1bHQgaXMgLy9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9vcGVuc2VhZHJhZ29uL2ltYWdlcy9cclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgdmlld2VyV2lkdGggKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgdmlld2VySGVpZ2h0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGltYWdlcyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSB2aWV3ZXJJZCAocmVxdWlyZWQpIFRoZSBpZCB0byBhc3NpZ24gdG8gdGhlIGltYWdldmlld2VyIGNvbnRhaW5lclxyXG4gKiBAcHJvcGVydHkgbGliT3B0aW9ucyAocmVxdWlyZWQpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElJbWFnZVZpZXdlckRhdGEge1xyXG4gIC8qdmlld2VyIGljb24ncyBkaXJlY3RvcnkgcGF0aCAqL1xyXG4gIHByZWZpeFVybD86IHN0cmluZztcclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gIHZpZXdlcldpZHRoPzogbnVtYmVyO1xyXG4gIHZpZXdlckhlaWdodD86IG51bWJlcjtcclxuICBpbWFnZXM6IElJbWFnZURhdGFbXSB8IHN0cmluZztcclxuICB2aWV3ZXJJZDogc3RyaW5nOyAgXHJcbiAgLypmb3IgYSBsaXN0IG9mIG9wdGlvbnMgdmlldyB0aGUgb2ZmaWNpYWwgb3BlbnNlYWRyYWdvbiBkb2N1bWVudGF0aW9uIGh0dHA6Ly9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9kb2NzL09wZW5TZWFkcmFnb24uaHRtbCMuT3B0aW9ucyAqL1xyXG4gIGxpYk9wdGlvbnM6IGFueTtcclxuICAvKiBBIG1ldGhvZCByZXR1cm5pbmcgdGhlIGxpYnJhcnkgaW5zdGFuY2UgKi9cclxuICBfc2V0Vmlld2VyOiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbWFnZVZpZXdlckNvbXBvbmVudCA8bjctaW1hZ2Utdmlld2VyPlxyXG4gKlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1pbWFnZS12aWV3ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS12aWV3ZXIuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEltYWdlVmlld2VyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBJSW1hZ2VWaWV3ZXJEYXRhO1xyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBfbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpe1xyXG4gICAgaWYoIXRoaXMuZGF0YSB8fCB0aGlzLl9sb2FkZWQpIHJldHVybjtcclxuICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGxldCBwcmVmaXhVcmwgPSAhdGhpcy5kYXRhLnByZWZpeFVybCA/IFwiLy9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9vcGVuc2VhZHJhZ29uL2ltYWdlcy9cIiA6IHRoaXMuZGF0YS5wcmVmaXhVcmw7XHJcblxyXG4gICAgICBjb25zdCB2aWV3ZXIgPSBvcGVuc2VhZHJhZ29uKHtcclxuICAgICAgICBpZDogdGhpcy5kYXRhLnZpZXdlcklkLFxyXG4gICAgICAgIHByZWZpeFVybCA6IHByZWZpeFVybCxcclxuICAgICAgICB0aWxlU291cmNlczogdGhpcy5kYXRhLmltYWdlcyxcclxuICAgICAgICAuLi50aGlzLmRhdGEubGliT3B0aW9uc1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuZGF0YS5fc2V0Vmlld2VyKHZpZXdlcik7XHJcbiAgICAgIFxyXG4gICAgfSk7XHJcbiAgfVxyXG59Il19