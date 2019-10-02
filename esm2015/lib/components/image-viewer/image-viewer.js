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
                template: "<div *ngIf=\"data\" class=\"n7-image-viewer {{data.classes || ''}}\">\n  <div id=\"{{data.viewerId}}\" \n       class=\"n7-image-viewer__viewer\">\n  </div>\n  <div class=\"n7-image-viewer__thumbs\">\n      <ul class=\"n7-image-viewer__thumb-list\">\n          <li class=\"n7-image-viewer__thumb-item\"></li>\n          <li class=\"n7-image-viewer__thumb-item\"></li>\n          <li class=\"n7-image-viewer__thumb-item\"></li>\n          <li class=\"n7-image-viewer__thumb-item\"></li>\n          <li class=\"n7-image-viewer__thumb-item\"></li>\n      </ul>\n  </div>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbWFnZS12aWV3ZXIvaW1hZ2Utdmlld2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLGFBQWEsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQjFDLGdDQU9DOzs7SUFORywwQkFBcUc7O0lBQ3JHLDRCQUFnQjs7SUFDaEIsMkJBQWU7O0lBQ2YseUJBQVk7O0lBQ1osa0NBQXNCOztJQUN0Qix1Q0FBNEQ7Ozs7Ozs7Ozs7Ozs7O0FBY2hFLHNDQVlDOzs7SUFWQyxxQ0FBbUI7O0lBQ25CLG1DQUFpQjs7SUFDakIsdUNBQXFCOztJQUNyQix3Q0FBc0I7O0lBQ3RCLGtDQUE4Qjs7SUFDOUIsb0NBQWlCOztJQUVqQixzQ0FBZ0I7O0lBRWhCLHNDQUFnQjs7Ozs7O0FBV2xCLE1BQU0sT0FBTyxvQkFBb0I7SUFKakM7UUFRVSxZQUFPLEdBQVksS0FBSyxDQUFDO0lBb0JuQyxDQUFDOzs7O0lBbEJDLHFCQUFxQjtRQUNuQixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFcEIsVUFBVTs7O1FBQUMsR0FBRyxFQUFFOztnQkFDVixTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsaURBQWlELENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUzs7a0JBRXhHLE1BQU0sR0FBRyxhQUFhLGlCQUMxQixFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQ3RCLFNBQVMsRUFBRyxTQUFTLEVBQ3JCLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQ3ZCO1lBRUYsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFL0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUEzQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLDJrQkFBa0M7YUFDbkM7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETixvQ0FBZ0M7O0lBQ2hDLG9DQUFtQjs7Ozs7SUFFbkIsdUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIElNQUdFLVZJRVdFUi50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IG9wZW5zZWFkcmFnb24gZnJvbSAnb3BlbnNlYWRyYWdvbic7XG4vL2RlY2xhcmUgdmFyIHJlcXVpcmU6IGFueTtcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEltYWdlVmlld2VyQ29tcG9uZW50J3MgaWFtZ2VzIFwiZGF0YVwiXG4gKlxuICogSGVyZSB0aGUgbWFpbiBvcHRpb25zIGF2YWlsYWJsZSwgZm9yIGEgY29tcGxldGUgZ3VpZGUgb2YgaW1hZ2Ugc2V0dGluZ3MgXG4gKiB2aWV3IHRoZSBvZmZpY2lhbCBvcGVuc2VhZHJhZ29uIGRvY3VtZW50YXRpb24gaHR0cHM6Ly9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9cbiAqIEFsbCBhdmFpbGFibGUgb3B0aW9ucyBoZXJlOiBodHRwczovL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL2RvY3MvT3BlblNlYWRyYWdvbi5odG1sXG4gKlxuICogQHByb3BlcnR5ICB0eXBlIChyZXF1aXJlZCkgQWRtaXR0ZWQgdmFsdWVzICdpbWFnZScgfCAnem9vbWlmeXRpbGVzZXJ2aWNlJyB8ICdvcGVuc3RyZWV0bWFwcycgfCAndGlsZWRtYXBzZXJ2aWNlJyB8ICdsZWdhY3ktaW1hZ2UtcHlyYW1pZCdcbiAqIEBwcm9wZXJ0eSAgaGVpZ2h0IChvcHRpb25hbCkgaW1hZ2UgaGVpZ2h0XG4gKiBAcHJvcGVydHkgIHdpZHRoIChvcHRpb25hbCkgaW1hZ2Ugd2lkdGhcbiAqIEBwcm9wZXJ0eSAgdXJsIChyZXF1aXJlZCkgaW1hZ2Ugd2lkdGhcbiAqIEBwcm9wZXJ0eSAgYnVpbGRQeXJhbWlkIChvcHRpb25hbCkgXG4gKiBAcHJvcGVydHkgIGNyb3NzT3JpZ2luUG9saWN5IChvcHRpb25hbCkgQWRtaXR0ZWQgdmFsdWVzICdBbm9ueW1vdXMnIHwgJ3VzZS1jcmVkZW50aWFscycgfCBmYWxzZTtcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJSW1hZ2VEYXRhIHtcbiAgICB0eXBlOiAnaW1hZ2UnIHwgJ3pvb21pZnl0aWxlc2VydmljZScgfCAnb3BlbnN0cmVldG1hcHMnIHwgJ3RpbGVkbWFwc2VydmljZScgfCAnbGVnYWN5LWltYWdlLXB5cmFtaWQnO1xuICAgIGhlaWdodD86IG51bWJlcjtcbiAgICB3aWR0aD86IG51bWJlcjtcbiAgICB1cmw6IHN0cmluZztcbiAgICBidWlsZFB5cmFtaWQ6IGJvb2xlYW47XG4gICAgY3Jvc3NPcmlnaW5Qb2xpY3k/OiAnQW5vbnltb3VzJyB8ICd1c2UtY3JlZGVudGlhbHMnIHwgZmFsc2U7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBJbWFnZVZpZXdlckNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IHByZWZpeFVybCAob3B0aW9uYWwpIFByZXBlbmRzIHRoZSBwcmVmaXhVcmwgdG8gbmF2SW1hZ2VzIHBhdGhzLiBEZWZhdWx0IGlzIC8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vb3BlbnNlYWRyYWdvbi9pbWFnZXMvXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdmlld2VyV2lkdGggKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHZpZXdlckhlaWdodCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaW1hZ2VzIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSB2aWV3ZXJJZCAocmVxdWlyZWQpIFRoZSBpZCB0byBhc3NpZ24gdG8gdGhlIGltYWdldmlld2VyIGNvbnRhaW5lclxuICogQHByb3BlcnR5IGxpYk9wdGlvbnMgKHJlcXVpcmVkKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElJbWFnZVZpZXdlckRhdGEge1xuICAvKnZpZXdlciBpY29uJ3MgZGlyZWN0b3J5IHBhdGggKi9cbiAgcHJlZml4VXJsPzogc3RyaW5nO1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICB2aWV3ZXJXaWR0aD86IG51bWJlcjtcbiAgdmlld2VySGVpZ2h0PzogbnVtYmVyO1xuICBpbWFnZXM6IElJbWFnZURhdGFbXSB8IHN0cmluZztcbiAgdmlld2VySWQ6IHN0cmluZzsgIFxuICAvKmZvciBhIGxpc3Qgb2Ygb3B0aW9ucyB2aWV3IHRoZSBvZmZpY2lhbCBvcGVuc2VhZHJhZ29uIGRvY3VtZW50YXRpb24gaHR0cDovL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL2RvY3MvT3BlblNlYWRyYWdvbi5odG1sIy5PcHRpb25zICovXG4gIGxpYk9wdGlvbnM6IGFueTtcbiAgLyogQSBtZXRob2QgcmV0dXJuaW5nIHRoZSBsaWJyYXJ5IGluc3RhbmNlICovXG4gIF9zZXRWaWV3ZXI6IGFueTtcbn1cblxuLyoqXG4gKiBJbWFnZVZpZXdlckNvbXBvbmVudCA8bjctaW1hZ2Utdmlld2VyPlxuICpcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctaW1hZ2Utdmlld2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLXZpZXdlci5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJbWFnZVZpZXdlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElJbWFnZVZpZXdlckRhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBwcml2YXRlIF9sb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKXtcbiAgICBpZighdGhpcy5kYXRhIHx8IHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xuICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCBwcmVmaXhVcmwgPSAhdGhpcy5kYXRhLnByZWZpeFVybCA/IFwiLy9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9vcGVuc2VhZHJhZ29uL2ltYWdlcy9cIiA6IHRoaXMuZGF0YS5wcmVmaXhVcmw7XG5cbiAgICAgIGNvbnN0IHZpZXdlciA9IG9wZW5zZWFkcmFnb24oe1xuICAgICAgICBpZDogdGhpcy5kYXRhLnZpZXdlcklkLFxuICAgICAgICBwcmVmaXhVcmwgOiBwcmVmaXhVcmwsXG4gICAgICAgIHRpbGVTb3VyY2VzOiB0aGlzLmRhdGEuaW1hZ2VzLFxuICAgICAgICAuLi50aGlzLmRhdGEubGliT3B0aW9uc1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZGF0YS5fc2V0Vmlld2VyKHZpZXdlcik7XG4gICAgICBcbiAgICB9KTtcbiAgfVxufSJdfQ==