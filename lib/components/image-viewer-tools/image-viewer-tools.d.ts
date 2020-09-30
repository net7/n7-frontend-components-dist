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
     * Initial image in array (progressive number from 0)
     */
    initial: number;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLXRvb2xzLmQudHMiLCJzb3VyY2VzIjpbImltYWdlLXZpZXdlci10b29scy5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgSW1hZ2VWaWV3ZXJCdXR0b25zRGF0YSwgZGVmaW5lcyB0aGUgdGh1bWJuYWlsXHJcbiAqIHVybCBhbmQgaXRzIHJlbGF0aXZlIHBheWxvYWRcclxuICogQHByb3BlcnR5IHRodW1iXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlVmlld2VyVGh1bWJEYXRhIHtcclxuICAgIC8qKlxyXG4gICAgICogVGh1bWJuYWlsIFVSTFxyXG4gICAgICovXHJcbiAgICB0aHVtYjogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBQYXlsb2FkIG9uIHRodW1ibmFpbCBjbGlja1xyXG4gICAgICovXHJcbiAgICBwYXlsb2FkOiBhbnk7XHJcbn1cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgSW1hZ2VWaWV3ZXJCdXR0b25zRGF0YSwgZGVmaW5lcyB0aGUgbG9vayBhbmRcclxuICogcGF5bG9hZCBvZiB0aGUgY29udHJvbHMgYnV0dG9uc1xyXG4gKiBAcHJvcGVydHkgaWNvblxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJbWFnZVZpZXdlckJ1dHRvbkRhdGEge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDU1MgY2xhc3Mgb2YgdGhlIGljb24uIFVzdWFsbHkgZnJvbSBuNyBpY29uIHBhY2tcclxuICAgICAqL1xyXG4gICAgaWNvbjogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdXR0b24gQW5jaG9yXHJcbiAgICAgKi9cclxuICAgIGFuY2hvcj86IEFuY2hvcjtcclxufVxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBJbWFnZVZpZXdlclRvb2xzQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICogQHByb3BlcnR5IGltYWdlc1xyXG4gKiBAcHJvcGVydHkgZGVzY3JpcHRpb25cclxuICogQHByb3BlcnR5IGNvbnRyb2xzXHJcbiAqIEBwcm9wZXJ0eSBzaG93RGVzY3JpcHRpb25cclxuICogQHByb3BlcnR5IHNob3dUaHVtYm5haWxzXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJbWFnZVZpZXdlclRvb2xzRGF0YSB7XHJcbiAgICAvKipcclxuICAgICAqIGxpc3Qgb2YgaW1hZ2UncyB0aHVtYm5haWxzXHJcbiAgICAgKi9cclxuICAgIGltYWdlczogSW1hZ2VWaWV3ZXJUaHVtYkRhdGFbXTtcclxuICAgIC8qKlxyXG4gICAgICogZGVzY3JpcHRpb24gdG8gYmUgc2hvd24gaW4gdGhlIGJveFxyXG4gICAgICovXHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBkZXNjcmlwdGlvbi90aHVtYm5haWxzIHZpc2liaWxpdHkgY29udHJvbHNcclxuICAgICAqL1xyXG4gICAgY29udHJvbHM6IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogSW1hZ2VWaWV3ZXJCdXR0b25EYXRhO1xyXG4gICAgICAgIHRodW1iczogSW1hZ2VWaWV3ZXJCdXR0b25EYXRhO1xyXG4gICAgICAgIGNsb3NlZGVzY3JpcHRpb246IEltYWdlVmlld2VyQnV0dG9uRGF0YTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIHNob3cgZGVzY3JpcHRpb24gLyB0aHVtYm5haWwgYm94XHJcbiAgICAgKi9cclxuICAgIGlzVmlzaWJsZToge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBib29sZWFuO1xyXG4gICAgICAgIHRodW1ibmFpbHM6IGJvb2xlYW47XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsIGltYWdlIGluIGFycmF5IChwcm9ncmVzc2l2ZSBudW1iZXIgZnJvbSAwKVxyXG4gICAgICovXHJcbiAgICBpbml0aWFsOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgICovXHJcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXHJcbiAgICAgKi9cclxuICAgIHBheWxvYWQ/OiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaW5mb1xyXG4gICAgICovXHJcbiAgICBfbWV0YT86IGFueTtcclxufVxyXG4vKipcclxuICogSW1hZ2VWaWV3ZXJUb29sc0NvbXBvbmVudCA8bjctaW1hZ2Utdmlld2VyLXRvb2xzPlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW1hZ2VWaWV3ZXJUb29sc0NvbXBvbmVudCB7XHJcbiAgICBkYXRhOiBJbWFnZVZpZXdlclRvb2xzRGF0YTtcclxuICAgIGVtaXQ6IGFueTtcclxuICAgIG9uQ2xpY2socGF5bG9hZDogYW55KTogdm9pZDtcclxufVxyXG4iXX0=