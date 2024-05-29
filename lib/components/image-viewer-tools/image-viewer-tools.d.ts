import { Anchor } from '../../shared-interfaces';
import * as i0 from "@angular/core";
/**
 * Interface for ImageViewerButtonsData, defines the thumbnail
 * url and its relative payload
 * @property thumb
 * @property payload
 */
export interface ImageViewerThumbData {
    /**
     * Thumbnail URL
     */
    thumb: string;
    /**
     * Payload on thumbnail click
     */
    payload: any;
    /**
     * Thumbnail caption
     */
    caption?: string;
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
    isActive?: boolean;
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
    description?: string;
    /**
     * description/thumbnails visibility controls
     */
    controls: {
        description: ImageViewerButtonData;
        thumbs: ImageViewerButtonData;
        closedescription: ImageViewerButtonData;
    };
    /**
     * Description / thumbnail togglers
     */
    isVisible: {
        /** Toggle description box visibility */
        description: boolean;
        /** Toggle thumbnails strip visibility */
        thumbnails: boolean;
    };
    /**
     * description overlay navigation
     */
    navigation?: {
        prev: {
            payload: any;
            classes?: any;
        };
        next: {
            payload: any;
            classes?: any;
        };
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
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageViewerToolsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImageViewerToolsComponent, "n7-image-viewer-tools", never, { "data": { "alias": "data"; "required": false; }; "emit": { "alias": "emit"; "required": false; }; }, {}, never, never, false, never>;
}
