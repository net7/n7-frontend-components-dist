//---------------------------
// IMAGE-VIEWER.ts
//---------------------------
import { __assign, __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
/**
 * ImageViewerComponent <n7-image-viewer>
 *
 */
var ImageViewerComponent = /** @class */ (function () {
    function ImageViewerComponent() {
        this._loaded = false;
    }
    ImageViewerComponent.prototype.ngAfterContentChecked = function () {
        var _this = this;
        if (!this.data || this._loaded)
            return;
        this._loaded = true;
        setTimeout(function () {
            var prefixUrl = !_this.data.prefixUrl ? '//openseadragon.github.io/openseadragon/images/' : _this.data.prefixUrl;
            import('openseadragon').then(function (module) {
                var openseadragon = module.default;
                var viewer = openseadragon(__assign({ id: _this.data.viewerId, prefixUrl: prefixUrl, tileSources: _this.data.images, zoomInButton: 'n7-image-viewer-zoom-in', zoomOutButton: 'n7-image-viewer-zoom-out', homeButton: 'n7-image-viewer-home', fullPageButton: 'n7-image-viewer-full-screen', nextButton: 'n7-image-viewer-nav-next', previousButton: 'n7-image-viewer-nav-prev' }, _this.data.libOptions));
                _this.data._setViewer(viewer);
            });
        });
    };
    ImageViewerComponent.prototype.onClick = function (payload) {
        if (!this.emit)
            return;
        this.emit('thumbclick', payload);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ImageViewerComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ImageViewerComponent.prototype, "emit", void 0);
    ImageViewerComponent = __decorate([
        Component({
            selector: 'n7-image-viewer',
            template: "<div *ngIf=\"data\" class=\"n7-image-viewer {{data.classes || ''}}\">\n    <!-- OSD viewer -->\n    <div id=\"{{data.viewerId}}\" class=\"n7-image-viewer__viewer\">\n    </div>\n\n    <!-- Zoom controls -->\n    <div class=\"n7-image-viewer__controls\">\n        <ul class=\"n7-image-viewer__controls-list\">\n            <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-zoom-in\">\n                <span class=\"n7-icon-search-plus\"></span>\n            </li>\n            <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-zoom-out\">\n                <span class=\"n7-icon-search-minus\"></span>\n            </li>\n            <!--\n            <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-full-screen\">\n                <span class=\"n7-icon-expand-arrows\"></span>\n            </li>\n            -->\n        </ul>\n    </div>\n\n    <!-- Navigation -->\n    <div class=\"n7-image-viewer__prev\" id=\"n7-image-viewer-nav-prev\">\n        <span class=\"n7-icon-angle-left\"></span>\n    </div>\n\n    <div class=\"n7-image-viewer__next\" id=\"n7-image-viewer-nav-next\">\n        <span class=\"n7-icon-angle-right\"></span>\n    </div>\n</div>"
        })
    ], ImageViewerComponent);
    return ImageViewerComponent;
}());
export { ImageViewerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbWFnZS12aWV3ZXIvaW1hZ2Utdmlld2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixrQkFBa0I7QUFDbEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXFEakQ7OztHQUdHO0FBS0g7SUFBQTtRQUtVLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFnQzFCLENBQUM7SUE5QkMsb0RBQXFCLEdBQXJCO1FBQUEsaUJBd0JDO1FBdkJDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUVwQixVQUFVLENBQUM7WUFDVCxJQUFNLFNBQVMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDakgsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07Z0JBQzFCLElBQUEsOEJBQXNCLENBQVk7Z0JBQzFDLElBQU0sTUFBTSxHQUFHLGFBQWEsWUFDMUIsRUFBRSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUN0QixTQUFTLFdBQUEsRUFDVCxXQUFXLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQzdCLFlBQVksRUFBRSx5QkFBeUIsRUFDdkMsYUFBYSxFQUFFLDBCQUEwQixFQUN6QyxVQUFVLEVBQUUsc0JBQXNCLEVBQ2xDLGNBQWMsRUFBRSw2QkFBNkIsRUFDN0MsVUFBVSxFQUFFLDBCQUEwQixFQUN0QyxjQUFjLEVBQUUsMEJBQTBCLElBQ3ZDLEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUN2QixDQUFDO2dCQUVILEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0NBQU8sR0FBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFuQ1E7UUFBUixLQUFLLEVBQUU7O3NEQUF1QjtJQUV0QjtRQUFSLEtBQUssRUFBRTs7c0RBQVc7SUFIUixvQkFBb0I7UUFKaEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixnc0NBQWtDO1NBQ25DLENBQUM7T0FDVyxvQkFBb0IsQ0FxQ2hDO0lBQUQsMkJBQUM7Q0FBQSxBQXJDRCxJQXFDQztTQXJDWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSU1BR0UtVklFV0VSLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBJbWFnZVZpZXdlckNvbXBvbmVudCdzIGltYWdlcyBcImRhdGFcIlxuICpcbiAqIEhlcmUgdGhlIG1haW4gb3B0aW9ucyBhdmFpbGFibGUsIGZvciBhIGNvbXBsZXRlIGd1aWRlIG9mIGltYWdlIHNldHRpbmdzXG4gKiB2aWV3IHRoZSBvZmZpY2lhbCBvcGVuc2VhZHJhZ29uIGRvY3VtZW50YXRpb24gaHR0cHM6Ly9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9cbiAqIEFsbCBhdmFpbGFibGUgb3B0aW9ucyBoZXJlOiBodHRwczovL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL2RvY3MvT3BlblNlYWRyYWdvbi5odG1sXG4gKlxuICogQHByb3BlcnR5ICB0eXBlIChyZXF1aXJlZClcbiAqIEFkbWl0dGVkIHZhbHVlczpcbiAqICdpbWFnZScgfCAnem9vbWlmeXRpbGVzZXJ2aWNlJyB8ICdvcGVuc3RyZWV0bWFwcycgfCAndGlsZWRtYXBzZXJ2aWNlJyB8ICdsZWdhY3ktaW1hZ2UtcHlyYW1pZCdcbiAqIEBwcm9wZXJ0eSAgaGVpZ2h0IChvcHRpb25hbCkgaW1hZ2UgaGVpZ2h0XG4gKiBAcHJvcGVydHkgIHdpZHRoIChvcHRpb25hbCkgaW1hZ2Ugd2lkdGhcbiAqIEBwcm9wZXJ0eSAgdXJsIChyZXF1aXJlZCkgaW1hZ2UgdXJsXG4gKiBAcHJvcGVydHkgIGJ1aWxkUHlyYW1pZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgIGNyb3NzT3JpZ2luUG9saWN5IChvcHRpb25hbCkgQWRtaXR0ZWQgdmFsdWVzICdBbm9ueW1vdXMnIHwgJ3VzZS1jcmVkZW50aWFscycgfCBmYWxzZTtcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbWFnZURhdGEge1xuICB0eXBlOiAnaW1hZ2UnIHwgJ3pvb21pZnl0aWxlc2VydmljZScgfCAnb3BlbnN0cmVldG1hcHMnIHwgJ3RpbGVkbWFwc2VydmljZScgfCAnbGVnYWN5LWltYWdlLXB5cmFtaWQnO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIHdpZHRoPzogbnVtYmVyO1xuICB1cmw6IHN0cmluZztcbiAgYnVpbGRQeXJhbWlkOiBib29sZWFuO1xuICBjcm9zc09yaWdpblBvbGljeT86ICdBbm9ueW1vdXMnIHwgJ3VzZS1jcmVkZW50aWFscycgfCBmYWxzZTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEltYWdlVmlld2VyQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgcHJlZml4VXJsIChvcHRpb25hbCkgUHJlcGVuZHMgdGhlIHByZWZpeFVybCB0byBuYXZJbWFnZXMgcGF0aHMuXG4gKiBEZWZhdWx0IGlzIC8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vb3BlbnNlYWRyYWdvbi9pbWFnZXMvXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdmlld2VyV2lkdGggKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHZpZXdlckhlaWdodCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaW1hZ2VzIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSB2aWV3ZXJJZCAocmVxdWlyZWQpIFRoZSBpZCB0byBhc3NpZ24gdG8gdGhlIGltYWdldmlld2VyIGNvbnRhaW5lclxuICogQHByb3BlcnR5IGxpYk9wdGlvbnMgKHJlcXVpcmVkKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlVmlld2VyRGF0YSB7XG4gIC8qIHZpZXdlciBpY29uJ3MgZGlyZWN0b3J5IHBhdGggKi9cbiAgcHJlZml4VXJsPzogc3RyaW5nO1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICB2aWV3ZXJXaWR0aD86IG51bWJlcjtcbiAgdmlld2VySGVpZ2h0PzogbnVtYmVyO1xuICBpbWFnZXM6IEltYWdlRGF0YVtdIHwgc3RyaW5nO1xuICB2aWV3ZXJJZDogc3RyaW5nO1xuICAvKiBmb3IgYSBsaXN0IG9mIG9wdGlvbnMgdmlldyB0aGUgb2ZmaWNpYWwgb3BlbnNlYWRyYWdvbiBkb2N1bWVudGF0aW9uIGh0dHA6Ly9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9kb2NzL09wZW5TZWFkcmFnb24uaHRtbCMuT3B0aW9ucyAqL1xuICBsaWJPcHRpb25zOiBhbnk7XG4gIC8qIEEgbWV0aG9kIHJldHVybmluZyB0aGUgbGlicmFyeSBpbnN0YW5jZSAqL1xuICBfc2V0Vmlld2VyOiBhbnk7XG59XG5cbi8qKlxuICogSW1hZ2VWaWV3ZXJDb21wb25lbnQgPG43LWltYWdlLXZpZXdlcj5cbiAqXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWltYWdlLXZpZXdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS12aWV3ZXIuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VWaWV3ZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJbWFnZVZpZXdlckRhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIHByaXZhdGUgX2xvYWRlZCA9IGZhbHNlO1xuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICBpZiAoIXRoaXMuZGF0YSB8fCB0aGlzLl9sb2FkZWQpIHJldHVybjtcbiAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBwcmVmaXhVcmwgPSAhdGhpcy5kYXRhLnByZWZpeFVybCA/ICcvL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL29wZW5zZWFkcmFnb24vaW1hZ2VzLycgOiB0aGlzLmRhdGEucHJlZml4VXJsO1xuICAgICAgaW1wb3J0KCdvcGVuc2VhZHJhZ29uJykudGhlbigobW9kdWxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgZGVmYXVsdDogb3BlbnNlYWRyYWdvbiB9ID0gbW9kdWxlO1xuICAgICAgICBjb25zdCB2aWV3ZXIgPSBvcGVuc2VhZHJhZ29uKHtcbiAgICAgICAgICBpZDogdGhpcy5kYXRhLnZpZXdlcklkLFxuICAgICAgICAgIHByZWZpeFVybCxcbiAgICAgICAgICB0aWxlU291cmNlczogdGhpcy5kYXRhLmltYWdlcyxcbiAgICAgICAgICB6b29tSW5CdXR0b246ICduNy1pbWFnZS12aWV3ZXItem9vbS1pbicsXG4gICAgICAgICAgem9vbU91dEJ1dHRvbjogJ243LWltYWdlLXZpZXdlci16b29tLW91dCcsXG4gICAgICAgICAgaG9tZUJ1dHRvbjogJ243LWltYWdlLXZpZXdlci1ob21lJyxcbiAgICAgICAgICBmdWxsUGFnZUJ1dHRvbjogJ243LWltYWdlLXZpZXdlci1mdWxsLXNjcmVlbicsXG4gICAgICAgICAgbmV4dEJ1dHRvbjogJ243LWltYWdlLXZpZXdlci1uYXYtbmV4dCcsXG4gICAgICAgICAgcHJldmlvdXNCdXR0b246ICduNy1pbWFnZS12aWV3ZXItbmF2LXByZXYnLFxuICAgICAgICAgIC4uLnRoaXMuZGF0YS5saWJPcHRpb25zXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZGF0YS5fc2V0Vmlld2VyKHZpZXdlcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCd0aHVtYmNsaWNrJywgcGF5bG9hZCk7XG4gIH1cbn1cbiJdfQ==