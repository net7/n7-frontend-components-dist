import { Anchor } from '../../shared-interfaces';
/**
 * Interface for ImageViewerButtonsData, defines the thumbnail
 * url and its relative payload
 * @property thumb
 * @property payload
 */
import * as ɵngcc0 from '@angular/core';
export interface ImageViewerThumbData {
    /**
     * Thumbnail URL
     */
    thumb: string;
    /**
     * Payload on thumbnail click
     */
    payload: any;
}
/**
 * Interface for ImageViewerButtonsData, defines the look and
 * payload of the controls buttons
 * @property icon
 * @property payload
 */
export interface ImageViewerButtonData {
    /**
     * CSS class of the icon. Usually from n7 icon pack
     */
    icon: string;
    /**
     * Button Anchor
     */
    anchor?: Anchor;
}
/**
 * Interface for ImageViewerToolsComponent's "data"
 * @property images
 * @property description
 * @property controls
 * @property showDescription
 * @property showThumbnails
 * @property classes (optional)
 * @property payload (optional)
 * @property _meta (optional)
 */
export interface ImageViewerToolsData {
    /**
     * list of image's thumbnails
     */
    images: ImageViewerThumbData[];
    /**
     * description to be shown in the box
     */
    description: string;
    /**
     * description/thumbnails visibility controls
     */
    controls: {
        description: ImageViewerButtonData;
        thumbs: ImageViewerButtonData;
        closedescription: ImageViewerButtonData;
    };
    /**
     * show description / thumbnail box
     */
    isVisible: {
        description: boolean;
        thumbnails: boolean;
    };
    /**
    * additional html classes
    */
    classes?: string;
    /**
     * action click's payload
     */
    payload?: any;
    /**
     * additional info
     */
    _meta?: any;
}
/**
 * ImageViewerToolsComponent <n7-image-viewer-tools>
 */
export declare class ImageViewerToolsComponent {
    data: ImageViewerToolsData;
    emit: any;
    onClick(payload: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ImageViewerToolsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ImageViewerToolsComponent, "n7-image-viewer-tools", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLXRvb2xzLmQudHMiLCJzb3VyY2VzIjpbImltYWdlLXZpZXdlci10b29scy5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEltYWdlVmlld2VyQnV0dG9uc0RhdGEsIGRlZmluZXMgdGhlIHRodW1ibmFpbFxyXG4gKiB1cmwgYW5kIGl0cyByZWxhdGl2ZSBwYXlsb2FkXHJcbiAqIEBwcm9wZXJ0eSB0aHVtYlxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJbWFnZVZpZXdlclRodW1iRGF0YSB7XHJcbiAgICAvKipcclxuICAgICAqIFRodW1ibmFpbCBVUkxcclxuICAgICAqL1xyXG4gICAgdGh1bWI6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogUGF5bG9hZCBvbiB0aHVtYm5haWwgY2xpY2tcclxuICAgICAqL1xyXG4gICAgcGF5bG9hZDogYW55O1xyXG59XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEltYWdlVmlld2VyQnV0dG9uc0RhdGEsIGRlZmluZXMgdGhlIGxvb2sgYW5kXHJcbiAqIHBheWxvYWQgb2YgdGhlIGNvbnRyb2xzIGJ1dHRvbnNcclxuICogQHByb3BlcnR5IGljb25cclxuICogQHByb3BlcnR5IHBheWxvYWRcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VWaWV3ZXJCdXR0b25EYXRhIHtcclxuICAgIC8qKlxyXG4gICAgICogQ1NTIGNsYXNzIG9mIHRoZSBpY29uLiBVc3VhbGx5IGZyb20gbjcgaWNvbiBwYWNrXHJcbiAgICAgKi9cclxuICAgIGljb246IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogQnV0dG9uIEFuY2hvclxyXG4gICAgICovXHJcbiAgICBhbmNob3I/OiBBbmNob3I7XHJcbn1cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgSW1hZ2VWaWV3ZXJUb29sc0NvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqIEBwcm9wZXJ0eSBpbWFnZXNcclxuICogQHByb3BlcnR5IGRlc2NyaXB0aW9uXHJcbiAqIEBwcm9wZXJ0eSBjb250cm9sc1xyXG4gKiBAcHJvcGVydHkgc2hvd0Rlc2NyaXB0aW9uXHJcbiAqIEBwcm9wZXJ0eSBzaG93VGh1bWJuYWlsc1xyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VWaWV3ZXJUb29sc0RhdGEge1xyXG4gICAgLyoqXHJcbiAgICAgKiBsaXN0IG9mIGltYWdlJ3MgdGh1bWJuYWlsc1xyXG4gICAgICovXHJcbiAgICBpbWFnZXM6IEltYWdlVmlld2VyVGh1bWJEYXRhW107XHJcbiAgICAvKipcclxuICAgICAqIGRlc2NyaXB0aW9uIHRvIGJlIHNob3duIGluIHRoZSBib3hcclxuICAgICAqL1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogZGVzY3JpcHRpb24vdGh1bWJuYWlscyB2aXNpYmlsaXR5IGNvbnRyb2xzXHJcbiAgICAgKi9cclxuICAgIGNvbnRyb2xzOiB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IEltYWdlVmlld2VyQnV0dG9uRGF0YTtcclxuICAgICAgICB0aHVtYnM6IEltYWdlVmlld2VyQnV0dG9uRGF0YTtcclxuICAgICAgICBjbG9zZWRlc2NyaXB0aW9uOiBJbWFnZVZpZXdlckJ1dHRvbkRhdGE7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBzaG93IGRlc2NyaXB0aW9uIC8gdGh1bWJuYWlsIGJveFxyXG4gICAgICovXHJcbiAgICBpc1Zpc2libGU6IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogYm9vbGVhbjtcclxuICAgICAgICB0aHVtYm5haWxzOiBib29sZWFuO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAgKi9cclxuICAgIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcclxuICAgICAqL1xyXG4gICAgcGF5bG9hZD86IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICAgKi9cclxuICAgIF9tZXRhPzogYW55O1xyXG59XHJcbi8qKlxyXG4gKiBJbWFnZVZpZXdlclRvb2xzQ29tcG9uZW50IDxuNy1pbWFnZS12aWV3ZXItdG9vbHM+XHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJbWFnZVZpZXdlclRvb2xzQ29tcG9uZW50IHtcclxuICAgIGRhdGE6IEltYWdlVmlld2VyVG9vbHNEYXRhO1xyXG4gICAgZW1pdDogYW55O1xyXG4gICAgb25DbGljayhwYXlsb2FkOiBhbnkpOiB2b2lkO1xyXG59XHJcbiJdfQ==