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
                template: "<div *ngIf=\"data\" class=\"n7-image-viewer {{data.classes || ''}}\">\n    <!-- OSD viewer -->\n    <div id=\"{{data.viewerId}}\" class=\"n7-image-viewer__viewer\">\n    </div>\n\n    <!-- Thumbs -->\n    <div class=\"n7-image-viewer__thumbs\" *ngIf=\"data.thumbs\">\n        <ul class=\"n7-image-viewer__thumb-list\">\n            <li *ngFor=\"let thumb of data.thumbs\" \n                class=\"n7-image-viewer__thumb-item {{thumb.classes || ''}}\"\n                [ngStyle]=\"{'background-image': 'url(' + thumb.url + ')'}\"\n                (click)=\"onClick(thumb.payload)\">\n            </li>\n        </ul>\n    </div>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbWFnZS12aWV3ZXIvaW1hZ2Utdmlld2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLGFBQWEsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQjFDLGdDQU9DOzs7SUFOQywwQkFBcUc7O0lBQ3JHLDRCQUFnQjs7SUFDaEIsMkJBQWU7O0lBQ2YseUJBQVk7O0lBQ1osa0NBQXNCOztJQUN0Qix1Q0FBNEQ7Ozs7Ozs7O0FBUTlELGlDQU9DOzs7SUFOQywwQkFBWTs7Ozs7SUFJWiw4QkFBYzs7SUFDZCw4QkFBaUI7Ozs7Ozs7Ozs7Ozs7O0FBY25CLHNDQWFDOzs7SUFYQyxxQ0FBbUI7O0lBQ25CLG1DQUFpQjs7SUFDakIsdUNBQXFCOztJQUNyQix3Q0FBc0I7O0lBQ3RCLGtDQUE4Qjs7SUFDOUIsa0NBQWdDOztJQUNoQyxvQ0FBaUI7O0lBRWpCLHNDQUFnQjs7SUFFaEIsc0NBQWdCOzs7Ozs7QUFXbEIsTUFBTSxPQUFPLG9CQUFvQjtJQUpqQztRQVFVLFlBQU8sR0FBWSxLQUFLLENBQUM7SUF5Qm5DLENBQUM7Ozs7SUF2QkMscUJBQXFCO1FBQ25CLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUVwQixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7O2dCQUNWLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTOztrQkFFeEcsTUFBTSxHQUFHLGFBQWEsaUJBQzFCLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFDdEIsU0FBUyxFQUFHLFNBQVMsRUFDckIsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFDdkI7WUFFRixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUvQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7OztZQWhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0Isd29CQUFrQzthQUNuQzs7O21CQUVFLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLG9DQUFnQzs7SUFDaEMsb0NBQW1COzs7OztJQUVuQix1Q0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSU1BR0UtVklFV0VSLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgb3BlbnNlYWRyYWdvbiBmcm9tICdvcGVuc2VhZHJhZ29uJztcbi8vZGVjbGFyZSB2YXIgcmVxdWlyZTogYW55O1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgSW1hZ2VWaWV3ZXJDb21wb25lbnQncyBpbWFnZXMgXCJkYXRhXCJcbiAqXG4gKiBIZXJlIHRoZSBtYWluIG9wdGlvbnMgYXZhaWxhYmxlLCBmb3IgYSBjb21wbGV0ZSBndWlkZSBvZiBpbWFnZSBzZXR0aW5ncyBcbiAqIHZpZXcgdGhlIG9mZmljaWFsIG9wZW5zZWFkcmFnb24gZG9jdW1lbnRhdGlvbiBodHRwczovL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL1xuICogQWxsIGF2YWlsYWJsZSBvcHRpb25zIGhlcmU6IGh0dHBzOi8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vZG9jcy9PcGVuU2VhZHJhZ29uLmh0bWxcbiAqXG4gKiBAcHJvcGVydHkgIHR5cGUgKHJlcXVpcmVkKSBBZG1pdHRlZCB2YWx1ZXMgJ2ltYWdlJyB8ICd6b29taWZ5dGlsZXNlcnZpY2UnIHwgJ29wZW5zdHJlZXRtYXBzJyB8ICd0aWxlZG1hcHNlcnZpY2UnIHwgJ2xlZ2FjeS1pbWFnZS1weXJhbWlkJ1xuICogQHByb3BlcnR5ICBoZWlnaHQgKG9wdGlvbmFsKSBpbWFnZSBoZWlnaHRcbiAqIEBwcm9wZXJ0eSAgd2lkdGggKG9wdGlvbmFsKSBpbWFnZSB3aWR0aFxuICogQHByb3BlcnR5ICB1cmwgKHJlcXVpcmVkKSBpbWFnZSB1cmxcbiAqIEBwcm9wZXJ0eSAgYnVpbGRQeXJhbWlkIChvcHRpb25hbCkgXG4gKiBAcHJvcGVydHkgIGNyb3NzT3JpZ2luUG9saWN5IChvcHRpb25hbCkgQWRtaXR0ZWQgdmFsdWVzICdBbm9ueW1vdXMnIHwgJ3VzZS1jcmVkZW50aWFscycgfCBmYWxzZTtcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJSW1hZ2VEYXRhIHtcbiAgdHlwZTogJ2ltYWdlJyB8ICd6b29taWZ5dGlsZXNlcnZpY2UnIHwgJ29wZW5zdHJlZXRtYXBzJyB8ICd0aWxlZG1hcHNlcnZpY2UnIHwgJ2xlZ2FjeS1pbWFnZS1weXJhbWlkJztcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICB3aWR0aD86IG51bWJlcjtcbiAgdXJsOiBzdHJpbmc7XG4gIGJ1aWxkUHlyYW1pZDogYm9vbGVhbjtcbiAgY3Jvc3NPcmlnaW5Qb2xpY3k/OiAnQW5vbnltb3VzJyB8ICd1c2UtY3JlZGVudGlhbHMnIHwgZmFsc2U7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBJbWFnZVZpZXdlckNvbXBvbmVudCdzIHRodW1icyB0byBwcmV2aWV3IGF2YWlsYWJsZSBpbWFnZXNcbiAqXG4gKiBAcHJvcGVydHkgIHVybCAocmVxdWlyZWQpIGltYWdlIHVybFxuICovXG5leHBvcnQgaW50ZXJmYWNlIElUaHVtYnNEYXRhIHtcbiAgdXJsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAqL1xuICBwYXlsb2FkPzogYW55O1xuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgSW1hZ2VWaWV3ZXJDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBwcmVmaXhVcmwgKG9wdGlvbmFsKSBQcmVwZW5kcyB0aGUgcHJlZml4VXJsIHRvIG5hdkltYWdlcyBwYXRocy4gRGVmYXVsdCBpcyAvL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL29wZW5zZWFkcmFnb24vaW1hZ2VzL1xuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHZpZXdlcldpZHRoIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB2aWV3ZXJIZWlnaHQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGltYWdlcyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgdmlld2VySWQgKHJlcXVpcmVkKSBUaGUgaWQgdG8gYXNzaWduIHRvIHRoZSBpbWFnZXZpZXdlciBjb250YWluZXJcbiAqIEBwcm9wZXJ0eSBsaWJPcHRpb25zIChyZXF1aXJlZClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJSW1hZ2VWaWV3ZXJEYXRhIHtcbiAgLyp2aWV3ZXIgaWNvbidzIGRpcmVjdG9yeSBwYXRoICovXG4gIHByZWZpeFVybD86IHN0cmluZztcbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgdmlld2VyV2lkdGg/OiBudW1iZXI7XG4gIHZpZXdlckhlaWdodD86IG51bWJlcjtcbiAgaW1hZ2VzOiBJSW1hZ2VEYXRhW10gfCBzdHJpbmc7XG4gIHRodW1icz86IElUaHVtYnNEYXRhW10gfCBzdHJpbmc7XG4gIHZpZXdlcklkOiBzdHJpbmc7ICBcbiAgLypmb3IgYSBsaXN0IG9mIG9wdGlvbnMgdmlldyB0aGUgb2ZmaWNpYWwgb3BlbnNlYWRyYWdvbiBkb2N1bWVudGF0aW9uIGh0dHA6Ly9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9kb2NzL09wZW5TZWFkcmFnb24uaHRtbCMuT3B0aW9ucyAqL1xuICBsaWJPcHRpb25zOiBhbnk7XG4gIC8qIEEgbWV0aG9kIHJldHVybmluZyB0aGUgbGlicmFyeSBpbnN0YW5jZSAqL1xuICBfc2V0Vmlld2VyOiBhbnk7XG59XG5cbi8qKlxuICogSW1hZ2VWaWV3ZXJDb21wb25lbnQgPG43LWltYWdlLXZpZXdlcj5cbiAqXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWltYWdlLXZpZXdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS12aWV3ZXIuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VWaWV3ZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJSW1hZ2VWaWV3ZXJEYXRhO1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgcHJpdmF0ZSBfbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCl7XG4gICAgaWYoIXRoaXMuZGF0YSB8fCB0aGlzLl9sb2FkZWQpIHJldHVybjtcbiAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQgcHJlZml4VXJsID0gIXRoaXMuZGF0YS5wcmVmaXhVcmwgPyBcIi8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vb3BlbnNlYWRyYWdvbi9pbWFnZXMvXCIgOiB0aGlzLmRhdGEucHJlZml4VXJsO1xuXG4gICAgICBjb25zdCB2aWV3ZXIgPSBvcGVuc2VhZHJhZ29uKHtcbiAgICAgICAgaWQ6IHRoaXMuZGF0YS52aWV3ZXJJZCxcbiAgICAgICAgcHJlZml4VXJsIDogcHJlZml4VXJsLFxuICAgICAgICB0aWxlU291cmNlczogdGhpcy5kYXRhLmltYWdlcyxcbiAgICAgICAgLi4udGhpcy5kYXRhLmxpYk9wdGlvbnNcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmRhdGEuX3NldFZpZXdlcih2aWV3ZXIpO1xuICAgICAgXG4gICAgfSk7XG4gIH1cblxuICBvbkNsaWNrKHBheWxvYWQpe1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KFwidGh1bWJjbGlja1wiLCBwYXlsb2FkKTtcbiAgfVxufSJdfQ==