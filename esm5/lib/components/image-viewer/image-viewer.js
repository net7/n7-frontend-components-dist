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
            template: "<div *ngIf=\"data\" class=\"n7-image-viewer {{data.classes || ''}}\">\n    <!-- OSD viewer -->\n    <div id=\"{{data.viewerId}}\" class=\"n7-image-viewer__viewer\">\n    </div>\n\n    <!-- Zoom controls -->\n    <div class=\"n7-image-viewer__controls\">\n        <ul class=\"n7-image-viewer__controls-list\">\n            <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-zoom-in\">\n                <span class=\"n7-icon-search-plus\"></span>\n            </li>\n            <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-zoom-out\">\n                <span class=\"n7-icon-search-minus\"></span>\n            </li>\n            <!--\n            <li class=\"n7-image-viewer__controls-item\" id=\"n7-image-viewer-full-screen\">\n                <span class=\"n7-icon-expand-arrows\"></span>\n            </li>\n            -->\n        </ul>\n    </div>\n\n    <!-- Navigation -->\n    <div *ngIf=\"!data.hideNavigation\" class=\"n7-image-viewer__prev\" id=\"n7-image-viewer-nav-prev\">\n        <span class=\"n7-icon-angle-left\"></span>\n    </div>\n\n    <div *ngIf=\"!data.hideNavigation\" class=\"n7-image-viewer__next\" id=\"n7-image-viewer-nav-next\">\n        <span class=\"n7-icon-angle-right\"></span>\n    </div>\n</div>"
        })
    ], ImageViewerComponent);
    return ImageViewerComponent;
}());
export { ImageViewerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbWFnZS12aWV3ZXIvaW1hZ2Utdmlld2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixrQkFBa0I7QUFDbEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXNEakQ7OztHQUdHO0FBS0g7SUFBQTtRQUtVLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFnQzFCLENBQUM7SUE5QkMsb0RBQXFCLEdBQXJCO1FBQUEsaUJBd0JDO1FBdkJDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUVwQixVQUFVLENBQUM7WUFDVCxJQUFNLFNBQVMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDakgsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07Z0JBQzFCLElBQUEsOEJBQXNCLENBQVk7Z0JBQzFDLElBQU0sTUFBTSxHQUFHLGFBQWEsWUFDMUIsRUFBRSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUN0QixTQUFTLFdBQUEsRUFDVCxXQUFXLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQzdCLFlBQVksRUFBRSx5QkFBeUIsRUFDdkMsYUFBYSxFQUFFLDBCQUEwQixFQUN6QyxVQUFVLEVBQUUsc0JBQXNCLEVBQ2xDLGNBQWMsRUFBRSw2QkFBNkIsRUFDN0MsVUFBVSxFQUFFLDBCQUEwQixFQUN0QyxjQUFjLEVBQUUsMEJBQTBCLElBQ3ZDLEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUN2QixDQUFDO2dCQUVILEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0NBQU8sR0FBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFuQ1E7UUFBUixLQUFLLEVBQUU7O3NEQUF1QjtJQUV0QjtRQUFSLEtBQUssRUFBRTs7c0RBQVc7SUFIUixvQkFBb0I7UUFKaEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQiw4dkNBQWtDO1NBQ25DLENBQUM7T0FDVyxvQkFBb0IsQ0FxQ2hDO0lBQUQsMkJBQUM7Q0FBQSxBQXJDRCxJQXFDQztTQXJDWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSU1BR0UtVklFV0VSLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBJbWFnZVZpZXdlckNvbXBvbmVudCdzIGltYWdlcyBcImRhdGFcIlxuICpcbiAqIEhlcmUgdGhlIG1haW4gb3B0aW9ucyBhdmFpbGFibGUsIGZvciBhIGNvbXBsZXRlIGd1aWRlIG9mIGltYWdlIHNldHRpbmdzXG4gKiB2aWV3IHRoZSBvZmZpY2lhbCBvcGVuc2VhZHJhZ29uIGRvY3VtZW50YXRpb24gaHR0cHM6Ly9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9cbiAqIEFsbCBhdmFpbGFibGUgb3B0aW9ucyBoZXJlOiBodHRwczovL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL2RvY3MvT3BlblNlYWRyYWdvbi5odG1sXG4gKlxuICogQHByb3BlcnR5ICB0eXBlIChyZXF1aXJlZClcbiAqIEFkbWl0dGVkIHZhbHVlczpcbiAqICdpbWFnZScgfCAnem9vbWlmeXRpbGVzZXJ2aWNlJyB8ICdvcGVuc3RyZWV0bWFwcycgfCAndGlsZWRtYXBzZXJ2aWNlJyB8ICdsZWdhY3ktaW1hZ2UtcHlyYW1pZCdcbiAqIEBwcm9wZXJ0eSAgaGVpZ2h0IChvcHRpb25hbCkgaW1hZ2UgaGVpZ2h0XG4gKiBAcHJvcGVydHkgIHdpZHRoIChvcHRpb25hbCkgaW1hZ2Ugd2lkdGhcbiAqIEBwcm9wZXJ0eSAgdXJsIChyZXF1aXJlZCkgaW1hZ2UgdXJsXG4gKiBAcHJvcGVydHkgIGJ1aWxkUHlyYW1pZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgIGNyb3NzT3JpZ2luUG9saWN5IChvcHRpb25hbCkgQWRtaXR0ZWQgdmFsdWVzICdBbm9ueW1vdXMnIHwgJ3VzZS1jcmVkZW50aWFscycgfCBmYWxzZTtcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbWFnZURhdGEge1xuICB0eXBlOiAnaW1hZ2UnIHwgJ3pvb21pZnl0aWxlc2VydmljZScgfCAnb3BlbnN0cmVldG1hcHMnIHwgJ3RpbGVkbWFwc2VydmljZScgfCAnbGVnYWN5LWltYWdlLXB5cmFtaWQnO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIHdpZHRoPzogbnVtYmVyO1xuICB1cmw6IHN0cmluZztcbiAgYnVpbGRQeXJhbWlkOiBib29sZWFuO1xuICBjcm9zc09yaWdpblBvbGljeT86ICdBbm9ueW1vdXMnIHwgJ3VzZS1jcmVkZW50aWFscycgfCBmYWxzZTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEltYWdlVmlld2VyQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgcHJlZml4VXJsIChvcHRpb25hbCkgUHJlcGVuZHMgdGhlIHByZWZpeFVybCB0byBuYXZJbWFnZXMgcGF0aHMuXG4gKiBEZWZhdWx0IGlzIC8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vb3BlbnNlYWRyYWdvbi9pbWFnZXMvXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdmlld2VyV2lkdGggKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHZpZXdlckhlaWdodCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaW1hZ2VzIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSB2aWV3ZXJJZCAocmVxdWlyZWQpIFRoZSBpZCB0byBhc3NpZ24gdG8gdGhlIGltYWdldmlld2VyIGNvbnRhaW5lclxuICogQHByb3BlcnR5IGxpYk9wdGlvbnMgKHJlcXVpcmVkKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlVmlld2VyRGF0YSB7XG4gIC8qIHZpZXdlciBpY29uJ3MgZGlyZWN0b3J5IHBhdGggKi9cbiAgcHJlZml4VXJsPzogc3RyaW5nO1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICB2aWV3ZXJXaWR0aD86IG51bWJlcjtcbiAgdmlld2VySGVpZ2h0PzogbnVtYmVyO1xuICBpbWFnZXM6IEltYWdlRGF0YVtdIHwgc3RyaW5nO1xuICB2aWV3ZXJJZDogc3RyaW5nO1xuICBoaWRlTmF2aWdhdGlvbj86IGJvb2xlYW47XG4gIC8qIGZvciBhIGxpc3Qgb2Ygb3B0aW9ucyB2aWV3IHRoZSBvZmZpY2lhbCBvcGVuc2VhZHJhZ29uIGRvY3VtZW50YXRpb24gaHR0cDovL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL2RvY3MvT3BlblNlYWRyYWdvbi5odG1sIy5PcHRpb25zICovXG4gIGxpYk9wdGlvbnM6IGFueTtcbiAgLyogQSBtZXRob2QgcmV0dXJuaW5nIHRoZSBsaWJyYXJ5IGluc3RhbmNlICovXG4gIF9zZXRWaWV3ZXI6IGFueTtcbn1cblxuLyoqXG4gKiBJbWFnZVZpZXdlckNvbXBvbmVudCA8bjctaW1hZ2Utdmlld2VyPlxuICpcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctaW1hZ2Utdmlld2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLXZpZXdlci5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJbWFnZVZpZXdlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IEltYWdlVmlld2VyRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgcHJpdmF0ZSBfbG9hZGVkID0gZmFsc2U7XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgIGlmICghdGhpcy5kYXRhIHx8IHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xuICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHByZWZpeFVybCA9ICF0aGlzLmRhdGEucHJlZml4VXJsID8gJy8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vb3BlbnNlYWRyYWdvbi9pbWFnZXMvJyA6IHRoaXMuZGF0YS5wcmVmaXhVcmw7XG4gICAgICBpbXBvcnQoJ29wZW5zZWFkcmFnb24nKS50aGVuKChtb2R1bGUpID0+IHtcbiAgICAgICAgY29uc3QgeyBkZWZhdWx0OiBvcGVuc2VhZHJhZ29uIH0gPSBtb2R1bGU7XG4gICAgICAgIGNvbnN0IHZpZXdlciA9IG9wZW5zZWFkcmFnb24oe1xuICAgICAgICAgIGlkOiB0aGlzLmRhdGEudmlld2VySWQsXG4gICAgICAgICAgcHJlZml4VXJsLFxuICAgICAgICAgIHRpbGVTb3VyY2VzOiB0aGlzLmRhdGEuaW1hZ2VzLFxuICAgICAgICAgIHpvb21JbkJ1dHRvbjogJ243LWltYWdlLXZpZXdlci16b29tLWluJyxcbiAgICAgICAgICB6b29tT3V0QnV0dG9uOiAnbjctaW1hZ2Utdmlld2VyLXpvb20tb3V0JyxcbiAgICAgICAgICBob21lQnV0dG9uOiAnbjctaW1hZ2Utdmlld2VyLWhvbWUnLFxuICAgICAgICAgIGZ1bGxQYWdlQnV0dG9uOiAnbjctaW1hZ2Utdmlld2VyLWZ1bGwtc2NyZWVuJyxcbiAgICAgICAgICBuZXh0QnV0dG9uOiAnbjctaW1hZ2Utdmlld2VyLW5hdi1uZXh0JyxcbiAgICAgICAgICBwcmV2aW91c0J1dHRvbjogJ243LWltYWdlLXZpZXdlci1uYXYtcHJldicsXG4gICAgICAgICAgLi4udGhpcy5kYXRhLmxpYk9wdGlvbnNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5kYXRhLl9zZXRWaWV3ZXIodmlld2VyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgb25DbGljayhwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ3RodW1iY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxufVxuIl19