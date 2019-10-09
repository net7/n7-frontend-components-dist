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
            const viewer = openseadragon(Object.assign({ id: this.data.viewerId, prefixUrl: prefixUrl, tileSources: this.data.images }, this.data.libOptions));
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
                template: "<div *ngIf=\"data\" class=\"n7-image-viewer {{data.classes || ''}}\">\r\n    <!-- OSD viewer -->\r\n    <div id=\"{{data.viewerId}}\" class=\"n7-image-viewer__viewer\">\r\n    </div>\r\n\r\n    <!-- Thumbs -->\r\n    <div class=\"n7-image-viewer__thumbs\" *ngIf=\"data.thumbs\">\r\n        <ul class=\"n7-image-viewer__thumb-list\">\r\n            <li *ngFor=\"let thumb of data.thumbs\" \r\n                class=\"n7-image-viewer__thumb-item {{thumb.classes || ''}}\"\r\n                [ngStyle]=\"{'background-image': 'url(' + thumb.url + ')'}\"\r\n                (click)=\"onClick(thumb.payload)\">\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbWFnZS12aWV3ZXIvaW1hZ2Utdmlld2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLGFBQWEsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQjFDLGdDQU9DOzs7SUFOQywwQkFBcUc7O0lBQ3JHLDRCQUFnQjs7SUFDaEIsMkJBQWU7O0lBQ2YseUJBQVk7O0lBQ1osa0NBQXNCOztJQUN0Qix1Q0FBNEQ7Ozs7Ozs7O0FBUTlELGlDQU9DOzs7SUFOQywwQkFBWTs7Ozs7SUFJWiw4QkFBYzs7SUFDZCw4QkFBaUI7Ozs7Ozs7Ozs7Ozs7O0FBY25CLHNDQWFDOzs7SUFYQyxxQ0FBbUI7O0lBQ25CLG1DQUFpQjs7SUFDakIsdUNBQXFCOztJQUNyQix3Q0FBc0I7O0lBQ3RCLGtDQUE4Qjs7SUFDOUIsa0NBQWdDOztJQUNoQyxvQ0FBaUI7O0lBRWpCLHNDQUFnQjs7SUFFaEIsc0NBQWdCOzs7Ozs7QUFXbEIsTUFBTSxPQUFPLG9CQUFvQjtJQUpqQztRQVFVLFlBQU8sR0FBWSxLQUFLLENBQUM7SUF5Qm5DLENBQUM7Ozs7SUF2QkMscUJBQXFCO1FBQ25CLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUVwQixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7O2dCQUNWLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTOztrQkFFeEcsTUFBTSxHQUFHLGFBQWEsaUJBQzFCLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFDdEIsU0FBUyxFQUFHLFNBQVMsRUFDckIsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFDdkI7WUFFRixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUvQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7OztZQWhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0Isc3FCQUFrQzthQUNuQzs7O21CQUVFLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLG9DQUFnQzs7SUFDaEMsb0NBQW1COzs7OztJQUVuQix1Q0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBJTUFHRS1WSUVXRVIudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IG9wZW5zZWFkcmFnb24gZnJvbSAnb3BlbnNlYWRyYWdvbic7XHJcbi8vZGVjbGFyZSB2YXIgcmVxdWlyZTogYW55O1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgSW1hZ2VWaWV3ZXJDb21wb25lbnQncyBpbWFnZXMgXCJkYXRhXCJcclxuICpcclxuICogSGVyZSB0aGUgbWFpbiBvcHRpb25zIGF2YWlsYWJsZSwgZm9yIGEgY29tcGxldGUgZ3VpZGUgb2YgaW1hZ2Ugc2V0dGluZ3MgXHJcbiAqIHZpZXcgdGhlIG9mZmljaWFsIG9wZW5zZWFkcmFnb24gZG9jdW1lbnRhdGlvbiBodHRwczovL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL1xyXG4gKiBBbGwgYXZhaWxhYmxlIG9wdGlvbnMgaGVyZTogaHR0cHM6Ly9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9kb2NzL09wZW5TZWFkcmFnb24uaHRtbFxyXG4gKlxyXG4gKiBAcHJvcGVydHkgIHR5cGUgKHJlcXVpcmVkKSBBZG1pdHRlZCB2YWx1ZXMgJ2ltYWdlJyB8ICd6b29taWZ5dGlsZXNlcnZpY2UnIHwgJ29wZW5zdHJlZXRtYXBzJyB8ICd0aWxlZG1hcHNlcnZpY2UnIHwgJ2xlZ2FjeS1pbWFnZS1weXJhbWlkJ1xyXG4gKiBAcHJvcGVydHkgIGhlaWdodCAob3B0aW9uYWwpIGltYWdlIGhlaWdodFxyXG4gKiBAcHJvcGVydHkgIHdpZHRoIChvcHRpb25hbCkgaW1hZ2Ugd2lkdGhcclxuICogQHByb3BlcnR5ICB1cmwgKHJlcXVpcmVkKSBpbWFnZSB1cmxcclxuICogQHByb3BlcnR5ICBidWlsZFB5cmFtaWQgKG9wdGlvbmFsKSBcclxuICogQHByb3BlcnR5ICBjcm9zc09yaWdpblBvbGljeSAob3B0aW9uYWwpIEFkbWl0dGVkIHZhbHVlcyAnQW5vbnltb3VzJyB8ICd1c2UtY3JlZGVudGlhbHMnIHwgZmFsc2U7XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElJbWFnZURhdGEge1xyXG4gIHR5cGU6ICdpbWFnZScgfCAnem9vbWlmeXRpbGVzZXJ2aWNlJyB8ICdvcGVuc3RyZWV0bWFwcycgfCAndGlsZWRtYXBzZXJ2aWNlJyB8ICdsZWdhY3ktaW1hZ2UtcHlyYW1pZCc7XHJcbiAgaGVpZ2h0PzogbnVtYmVyO1xyXG4gIHdpZHRoPzogbnVtYmVyO1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIGJ1aWxkUHlyYW1pZDogYm9vbGVhbjtcclxuICBjcm9zc09yaWdpblBvbGljeT86ICdBbm9ueW1vdXMnIHwgJ3VzZS1jcmVkZW50aWFscycgfCBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgSW1hZ2VWaWV3ZXJDb21wb25lbnQncyB0aHVtYnMgdG8gcHJldmlldyBhdmFpbGFibGUgaW1hZ2VzXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSAgdXJsIChyZXF1aXJlZCkgaW1hZ2UgdXJsXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUaHVtYnNEYXRhIHtcclxuICB1cmw6IHN0cmluZztcclxuICAvKipcclxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXHJcbiAgICovXHJcbiAgcGF5bG9hZD86IGFueTtcclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBJbWFnZVZpZXdlckNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBwcmVmaXhVcmwgKG9wdGlvbmFsKSBQcmVwZW5kcyB0aGUgcHJlZml4VXJsIHRvIG5hdkltYWdlcyBwYXRocy4gRGVmYXVsdCBpcyAvL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL29wZW5zZWFkcmFnb24vaW1hZ2VzL1xyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB2aWV3ZXJXaWR0aCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB2aWV3ZXJIZWlnaHQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaW1hZ2VzIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHZpZXdlcklkIChyZXF1aXJlZCkgVGhlIGlkIHRvIGFzc2lnbiB0byB0aGUgaW1hZ2V2aWV3ZXIgY29udGFpbmVyXHJcbiAqIEBwcm9wZXJ0eSBsaWJPcHRpb25zIChyZXF1aXJlZClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUltYWdlVmlld2VyRGF0YSB7XHJcbiAgLyp2aWV3ZXIgaWNvbidzIGRpcmVjdG9yeSBwYXRoICovXHJcbiAgcHJlZml4VXJsPzogc3RyaW5nO1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgdmlld2VyV2lkdGg/OiBudW1iZXI7XHJcbiAgdmlld2VySGVpZ2h0PzogbnVtYmVyO1xyXG4gIGltYWdlczogSUltYWdlRGF0YVtdIHwgc3RyaW5nO1xyXG4gIHRodW1icz86IElUaHVtYnNEYXRhW10gfCBzdHJpbmc7XHJcbiAgdmlld2VySWQ6IHN0cmluZzsgIFxyXG4gIC8qZm9yIGEgbGlzdCBvZiBvcHRpb25zIHZpZXcgdGhlIG9mZmljaWFsIG9wZW5zZWFkcmFnb24gZG9jdW1lbnRhdGlvbiBodHRwOi8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vZG9jcy9PcGVuU2VhZHJhZ29uLmh0bWwjLk9wdGlvbnMgKi9cclxuICBsaWJPcHRpb25zOiBhbnk7XHJcbiAgLyogQSBtZXRob2QgcmV0dXJuaW5nIHRoZSBsaWJyYXJ5IGluc3RhbmNlICovXHJcbiAgX3NldFZpZXdlcjogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogSW1hZ2VWaWV3ZXJDb21wb25lbnQgPG43LWltYWdlLXZpZXdlcj5cclxuICpcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctaW1hZ2Utdmlld2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2Utdmlld2VyLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVZpZXdlckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogSUltYWdlVmlld2VyRGF0YTtcclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIHByaXZhdGUgX2xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKXtcclxuICAgIGlmKCF0aGlzLmRhdGEgfHwgdGhpcy5fbG9hZGVkKSByZXR1cm47XHJcbiAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBsZXQgcHJlZml4VXJsID0gIXRoaXMuZGF0YS5wcmVmaXhVcmwgPyBcIi8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vb3BlbnNlYWRyYWdvbi9pbWFnZXMvXCIgOiB0aGlzLmRhdGEucHJlZml4VXJsO1xyXG5cclxuICAgICAgY29uc3Qgdmlld2VyID0gb3BlbnNlYWRyYWdvbih7XHJcbiAgICAgICAgaWQ6IHRoaXMuZGF0YS52aWV3ZXJJZCxcclxuICAgICAgICBwcmVmaXhVcmwgOiBwcmVmaXhVcmwsXHJcbiAgICAgICAgdGlsZVNvdXJjZXM6IHRoaXMuZGF0YS5pbWFnZXMsXHJcbiAgICAgICAgLi4udGhpcy5kYXRhLmxpYk9wdGlvbnNcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmRhdGEuX3NldFZpZXdlcih2aWV3ZXIpO1xyXG4gICAgICBcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DbGljayhwYXlsb2FkKXtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoXCJ0aHVtYmNsaWNrXCIsIHBheWxvYWQpO1xyXG4gIH1cclxufSJdfQ==