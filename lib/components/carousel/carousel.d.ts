import { AfterContentChecked } from '@angular/core';
import { Anchor, Image } from '../../shared-interfaces';
import * as i0 from "@angular/core";
/**
 * Interface for PaginationComponent's links (pages and navigation buttons)
 *
 * @property text (required)
 * @property anchor (optional)
 * @property classes (optional)
 * @property _meta (optional)
 */
export interface CarouselButton {
    /**
     * innerHTML or plain text for the label
     */
    text?: string;
    /**
     * additional html classes
     */
    classes?: string;
    anchor?: Anchor;
    /**
     * additional info
     */
    _meta?: any;
}
/**
 * Interface for PaginationComponent's Metadata tuples (pages and navigation buttons)
 *
 * @property key (optional)
 * @property value (optional)
 */
export interface CarouselMetadata {
    /**
     * First element
     */
    key?: string;
    /**
     * Second element
     */
    value?: string;
}
export interface CarouselBackgroundItem {
    /**
     * Background image for the carousel
     */
    image?: string;
    /**
     * Background video for the carousel
     */
    video?: {
        /** Media URL */
        url: string;
        /** Placeholder image while loading */
        poster?: string;
        /** Video width in pixels */
        width: number;
        /** Video height in pixels */
        height: number;
    };
    /**
     * Background color for the carousel
     */
    color?: string;
}
/**
 * Interface for CarouselComponent's "Item"
 *
 * @property title (optional)
 * @property text (optional)
 * @property metadata (optional)
 * @property action (optional)
 * @property classes (optional)
 * @property _meta (optional)
 */
export interface CarouselForegroundItem {
    /**
     * Header
     */
    title?: string;
    /**
     * Text paragraph / subtitle / pretitle
     */
    text?: string;
    /**
     * Image file path
     */
    image?: Image;
    /**
     * Metadata
     */
    metadata?: CarouselMetadata[];
}
/**
 * Interface for CarouselComponent's "data"
 *
 * @property items (required)
 * @property image (optional)
 * @property video (optional)
 * @property classes (optional)
 * @property _meta (optional)
 */
export interface CarouselData {
    /**
     * ID Of the carousel container
     */
    containerId: string;
    /**
     * Options for the carousel library ( docs here : https://lattecarousel.dev/ )
     */
    libOptions?: any;
    /**
     * Array of carousel slides
     */
    slides: {
        items: CarouselForegroundItem[];
        /**
         * Button
         */
        action?: CarouselButton;
        background?: CarouselBackgroundItem;
        classes?: string;
    }[];
    /**
     * Callback for getting the carousel instance
     */
    setInstance?: any;
    /**
     * Callback to access the carousel API
     * */
    setComponentAPI?: any;
    /**
     * Classes for the carousel component
     */
    classes?: string;
    /**
     * Additional data useful for the component's logic
     */
    _meta?: any;
}
export declare class CarouselComponent implements AfterContentChecked {
    data: CarouselData;
    emit: any;
    private loaded;
    /**
     * API of the carousel component
     */
    api: {
        /**
         * Used to lazy-load video resources.
         * Call api.load.videos on DOMContentReady event
         */
        load: {
            /** Changes all data-src attributes to src and calls <video>.load() */
            videos: () => void;
        };
    };
    ngAfterContentChecked(): void;
    onClick(payload: any): void;
    /**
     * Function that adds the event listeners to each button.
     * This is needed because when "new Carousel()" is called the event listeners are lost.
     */
    addButtonEvents({ slides, containerId }: {
        slides: any;
        containerId: any;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CarouselComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CarouselComponent, "n7-carousel", never, { "data": { "alias": "data"; "required": false; }; "emit": { "alias": "emit"; "required": false; }; }, {}, never, never, false, never>;
}
