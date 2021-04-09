//---------------------------
// IMAGE-VIEWER-TOOLS.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
/**
 * ImageViewerToolsComponent <n7-image-viewer-tools>
 */
let ImageViewerToolsComponent = class ImageViewerToolsComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ImageViewerToolsComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ImageViewerToolsComponent.prototype, "emit", void 0);
ImageViewerToolsComponent = __decorate([
    Component({
        selector: 'n7-image-viewer-tools',
        template: "<div *ngIf=\"data\" class=\"n7-image-viewer-tools {{data.classes || ''}}\">\n    <div class=\"n7-image-viewer-tools__bar\">\n        <div class=\"n7-image-viewer-tools__controls\">\n            <div class=\"n7-image-viewer-tools__btn-container\">\n                <ng-container *ngIf=\"data.controls.description\">\n                    <n7-anchor-wrapper \n                    [classes]=\"'n7-hero__btn n7-btn n7-btn-cta n7-btn-l n7-image-viewer-tools__btnDescription'\"\n                    [data]=\"data.controls.description.anchor\"\n                    (clicked)=\"onClick($event)\">\n                        <span class=\"{{data.controls.description.icon}}\"></span>\n                    </n7-anchor-wrapper>\n                </ng-container>\n            </div>\n\n            <div class=\"n7-image-viewer-tools__btn-container\">\n                <ng-container *ngIf=\"data.controls.thumbs\">\n                    <n7-anchor-wrapper \n                    [classes]=\"'n7-hero__btn n7-btn n7-btn-cta n7-btn-l n7-image-viewer-tools__btnThumbs'\"\n                    [data]=\"data.controls.thumbs.anchor\"\n                    (clicked)=\"onClick($event)\">\n                        <span class=\"{{data.controls.thumbs.icon}}\"></span>\n                    </n7-anchor-wrapper>\n                </ng-container>\n            </div>\n        </div>\n\n        <div class=\"n7-image-viewer-tools__thumbs\" \n            *ngIf=\"data.isVisible.thumbnails && data.images\" >\n            <div *ngFor=\"let img of data.images; let imgIndex = index\" \n                class=\"n7-image-viewer-tools__thumb-container\"\n                [class.active]=\"imgIndex == data.initial\">\n                <img\n                    src=\"{{img.thumb}}\"\n                    (click)=\"onClick(img.payload)\" >\n            </div>\n        </div>\n\n        <div class=\"n7-image-viewer-tools__description\" \n            *ngIf=\"data.isVisible.description\" >\n            <div [innerHTML]=\"data.description\"></div>\n            <div class=\"n7-image-viewer-tools__description-closebtn\"\n                (click)=\"onClick(data.controls.closedescription.anchor.payload)\">\n                <span class=\"{{data.controls.closedescription.icon}}\"></span>\n            </div>\n        </div>\n    </div>\n</div>\n"
    })
], ImageViewerToolsComponent);
export { ImageViewerToolsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLXRvb2xzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbWFnZS12aWV3ZXItdG9vbHMvaW1hZ2Utdmlld2VyLXRvb2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3Qix3QkFBd0I7QUFDeEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWdHakQ7O0dBRUc7QUFNSCxJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtJQUtwQyxPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNGLENBQUE7QUFUVTtJQUFSLEtBQUssRUFBRTs7dURBQTRCO0FBRTNCO0lBQVIsS0FBSyxFQUFFOzt1REFBVztBQUhSLHlCQUF5QjtJQUpyQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLHl3RUFBd0M7S0FDekMsQ0FBQztHQUNXLHlCQUF5QixDQVVyQztTQVZZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBJTUFHRS1WSUVXRVItVE9PTFMudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEltYWdlVmlld2VyQnV0dG9uc0RhdGEsIGRlZmluZXMgdGhlIHRodW1ibmFpbFxuICogdXJsIGFuZCBpdHMgcmVsYXRpdmUgcGF5bG9hZFxuICogQHByb3BlcnR5IHRodW1iXG4gKiBAcHJvcGVydHkgcGF5bG9hZFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlVmlld2VyVGh1bWJEYXRhIHtcbiAgLyoqXG4gICAqIFRodW1ibmFpbCBVUkxcbiAgICovXG4gIHRodW1iOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBQYXlsb2FkIG9uIHRodW1ibmFpbCBjbGlja1xuICAgKi9cbiAgcGF5bG9hZDogYW55O1xuICAvKipcbiAgICogVGh1bWJuYWlsIGNhcHRpb25cbiAgICovXG4gIGNhcHRpb24/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBJbWFnZVZpZXdlckJ1dHRvbnNEYXRhLCBkZWZpbmVzIHRoZSBsb29rIGFuZFxuICogcGF5bG9hZCBvZiB0aGUgY29udHJvbHMgYnV0dG9uc1xuICogQHByb3BlcnR5IGljb25cbiAqIEBwcm9wZXJ0eSBwYXlsb2FkXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VWaWV3ZXJCdXR0b25EYXRhIHtcbiAgLyoqXG4gICAqIENTUyBjbGFzcyBvZiB0aGUgaWNvbi4gVXN1YWxseSBmcm9tIG43IGljb24gcGFja1xuICAgKi9cbiAgaWNvbjogc3RyaW5nO1xuICAvKipcbiAgICogQnV0dG9uIEFuY2hvclxuICAgKi9cbiAgYW5jaG9yPzogQW5jaG9yO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgSW1hZ2VWaWV3ZXJUb29sc0NvbXBvbmVudCdzIFwiZGF0YVwiXG4gKiBAcHJvcGVydHkgaW1hZ2VzXG4gKiBAcHJvcGVydHkgZGVzY3JpcHRpb25cbiAqIEBwcm9wZXJ0eSBjb250cm9sc1xuICogQHByb3BlcnR5IHNob3dEZXNjcmlwdGlvblxuICogQHByb3BlcnR5IHNob3dUaHVtYm5haWxzXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlVmlld2VyVG9vbHNEYXRhIHtcbiAgLyoqXG4gICAqIGxpc3Qgb2YgaW1hZ2UncyB0aHVtYm5haWxzXG4gICAqL1xuICBpbWFnZXM6IEltYWdlVmlld2VyVGh1bWJEYXRhW107XG4gIC8qKlxuICAgKiBkZXNjcmlwdGlvbiB0byBiZSBzaG93biBpbiB0aGUgYm94XG4gICAqL1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIGRlc2NyaXB0aW9uL3RodW1ibmFpbHMgdmlzaWJpbGl0eSBjb250cm9sc1xuICAgKi9cbiAgY29udHJvbHM6IHtcbiAgICBkZXNjcmlwdGlvbjogSW1hZ2VWaWV3ZXJCdXR0b25EYXRhO1xuICAgIHRodW1iczogSW1hZ2VWaWV3ZXJCdXR0b25EYXRhO1xuICAgIGNsb3NlZGVzY3JpcHRpb246IEltYWdlVmlld2VyQnV0dG9uRGF0YTtcbiAgfTtcbiAgLyoqXG4gICAqIERlc2NyaXB0aW9uIC8gdGh1bWJuYWlsIHRvZ2dsZXJzXG4gICAqL1xuICBpc1Zpc2libGU6IHtcbiAgICAvKiogVG9nZ2xlIGRlc2NyaXB0aW9uIGJveCB2aXNpYmlsaXR5ICovXG4gICAgZGVzY3JpcHRpb246IGJvb2xlYW47XG4gICAgLyoqIFRvZ2dsZSB0aHVtYm5haWxzIHN0cmlwIHZpc2liaWxpdHkgKi9cbiAgICB0aHVtYm5haWxzOiBib29sZWFuO1xuICB9O1xuICAvKipcbiAgICogSW5pdGlhbCBpbWFnZSBpbiBhcnJheSAocHJvZ3Jlc3NpdmUgbnVtYmVyIGZyb20gMClcbiAgICovXG4gIGluaXRpYWw6IG51bWJlcjtcbiAgLyoqXG4gICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgICovXG4gIHBheWxvYWQ/OiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEltYWdlVmlld2VyVG9vbHNDb21wb25lbnQgPG43LWltYWdlLXZpZXdlci10b29scz5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1pbWFnZS12aWV3ZXItdG9vbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2Utdmlld2VyLXRvb2xzLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlVmlld2VyVG9vbHNDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJbWFnZVZpZXdlclRvb2xzRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DbGljayhwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxufVxuIl19