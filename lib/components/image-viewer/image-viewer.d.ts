import * as i0 from "@angular/core";
/**
 * Interface for ImageViewerComponent's images "data"
 *
 * Here the main options available, for a complete guide of image settings
 * view the official openseadragon documentation https://openseadragon.github.io/
 * All available options here: https://openseadragon.github.io/docs/OpenSeadragon.html
 *
 * @property  type (required)
 * Admitted values:
 * 'image' | 'zoomifytileservice' | 'openstreetmaps' | 'tiledmapservice' | 'legacy-image-pyramid'
 * @property  height (optional) image height
 * @property  width (optional) image width
 * @property  url (required) image url
 * @property  buildPyramid (optional)
 * @property  crossOriginPolicy (optional) Admitted values 'Anonymous' | 'use-credentials' | false;
 */
export interface ImageData {
    type: 'image' | 'zoomifytileservice' | 'openstreetmaps' | 'tiledmapservice' | 'legacy-image-pyramid';
    height?: number;
    width?: number;
    url: string;
    buildPyramid: boolean;
    crossOriginPolicy?: 'Anonymous' | 'use-credentials' | false;
}
/**
 * Interface for ImageViewerComponent's "data"
 *
 * @property prefixUrl (optional) Prepends the prefixUrl to navImages paths.
 * Default is //openseadragon.github.io/openseadragon/images/
 * @property classes (optional)
 * @property viewerWidth (optional)
 * @property viewerHeight (optional)
 * @property images (required)
 * @property viewerId (required) The id to assign to the imageviewer container
 * @property libOptions (required)
 */
export interface ImageViewerData {
    prefixUrl?: string;
    classes?: string;
    viewerWidth?: number;
    viewerHeight?: number;
    images: ImageData[] | string;
    viewerId: string;
    hideNavigation?: boolean;
    libOptions: any;
    _setViewer: any;
}
/**
 * ImageViewerComponent <n7-image-viewer>
 *
 */
export declare class ImageViewerComponent {
    data: ImageViewerData;
    emit: any;
    private _loaded;
    ngAfterContentChecked(): void;
    onClick(payload: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageViewerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImageViewerComponent, "n7-image-viewer", never, { "data": "data"; "emit": "emit"; }, {}, never, never, false>;
}
