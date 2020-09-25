import { AfterContentChecked } from '@angular/core';
import { Anchor } from '../../shared-interfaces';
/**
 * Interface for PaginationComponent's links (pages and navigation buttons)
 *
 * @property text (required)
 * @property anchor (optional)
 * @property classes (optional)
 * @property _meta (optional)
 */
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CarouselComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CarouselComponent, "n7-carousel", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuZC50cyIsInNvdXJjZXMiOlsiY2Fyb3VzZWwuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQW5jaG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkLWludGVyZmFjZXMnO1xyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBQYWdpbmF0aW9uQ29tcG9uZW50J3MgbGlua3MgKHBhZ2VzIGFuZCBuYXZpZ2F0aW9uIGJ1dHRvbnMpXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGFuY2hvciAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2Fyb3VzZWxCdXR0b24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBpbm5lckhUTUwgb3IgcGxhaW4gdGV4dCBmb3IgdGhlIGxhYmVsXHJcbiAgICAgKi9cclxuICAgIHRleHQ/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICAgKi9cclxuICAgIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgICBhbmNob3I/OiBBbmNob3I7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaW5mb1xyXG4gICAgICovXHJcbiAgICBfbWV0YT86IGFueTtcclxufVxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBQYWdpbmF0aW9uQ29tcG9uZW50J3MgTWV0YWRhdGEgdHVwbGVzIChwYWdlcyBhbmQgbmF2aWdhdGlvbiBidXR0b25zKVxyXG4gKlxyXG4gKiBAcHJvcGVydHkga2V5IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHZhbHVlIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2Fyb3VzZWxNZXRhZGF0YSB7XHJcbiAgICAvKipcclxuICAgICAqIEZpcnN0IGVsZW1lbnRcclxuICAgICAqL1xyXG4gICAga2V5Pzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZWNvbmQgZWxlbWVudFxyXG4gICAgICovXHJcbiAgICB2YWx1ZT86IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENhcm91c2VsQmFja2dyb3VuZEl0ZW0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCYWNrZ3JvdW5kIGltYWdlIGZvciB0aGUgY2Fyb3VzZWxcclxuICAgICAqL1xyXG4gICAgaW1hZ2U/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIEJhY2tncm91bmQgdmlkZW8gZm9yIHRoZSBjYXJvdXNlbFxyXG4gICAgICovXHJcbiAgICB2aWRlbz86IHtcclxuICAgICAgICAvKiogTWVkaWEgVVJMICovXHJcbiAgICAgICAgdXJsOiBzdHJpbmc7XHJcbiAgICAgICAgLyoqIFBsYWNlaG9sZGVyIGltYWdlIHdoaWxlIGxvYWRpbmcgKi9cclxuICAgICAgICBwb3N0ZXI/OiBzdHJpbmc7XHJcbiAgICAgICAgLyoqIFZpZGVvIHdpZHRoIGluIHBpeGVscyAqL1xyXG4gICAgICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICAgICAgLyoqIFZpZGVvIGhlaWdodCBpbiBwaXhlbHMgKi9cclxuICAgICAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEJhY2tncm91bmQgY29sb3IgZm9yIHRoZSBjYXJvdXNlbFxyXG4gICAgICovXHJcbiAgICBjb2xvcj86IHN0cmluZztcclxufVxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBDYXJvdXNlbENvbXBvbmVudCdzIFwiSXRlbVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB0aXRsZSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IG1ldGFkYXRhIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGFjdGlvbiAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2Fyb3VzZWxGb3JlZ3JvdW5kSXRlbSB7XHJcbiAgICAvKipcclxuICAgICAqIEhlYWRlclxyXG4gICAgICovXHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogVGV4dCBwYXJhZ3JhcGggLyBzdWJ0aXRsZSAvIHByZXRpdGxlXHJcbiAgICAgKi9cclxuICAgIHRleHQ/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIE1ldGFkYXRhXHJcbiAgICAgKi9cclxuICAgIG1ldGFkYXRhPzogQ2Fyb3VzZWxNZXRhZGF0YVtdO1xyXG59XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIENhcm91c2VsQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGl0ZW1zIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGltYWdlIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHZpZGVvIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBDYXJvdXNlbERhdGEge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJRCBPZiB0aGUgY2Fyb3VzZWwgY29udGFpbmVyXHJcbiAgICAgKi9cclxuICAgIGNvbnRhaW5lcklkOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIE9wdGlvbnMgZm9yIHRoZSBjYXJvdXNlbCBsaWJyYXJ5ICggZG9jcyBoZXJlIDogaHR0cHM6Ly9sYXR0ZWNhcm91c2VsLmRldi8gKVxyXG4gICAgICovXHJcbiAgICBsaWJPcHRpb25zPzogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBBcnJheSBvZiBjYXJvdXNlbCBzbGlkZXNcclxuICAgICAqL1xyXG4gICAgc2xpZGVzOiB7XHJcbiAgICAgICAgaXRlbXM6IENhcm91c2VsRm9yZWdyb3VuZEl0ZW1bXTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBCdXR0b25cclxuICAgICAgICAgKi9cclxuICAgICAgICBhY3Rpb24/OiBDYXJvdXNlbEJ1dHRvbjtcclxuICAgICAgICBiYWNrZ3JvdW5kPzogQ2Fyb3VzZWxCYWNrZ3JvdW5kSXRlbTtcclxuICAgICAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gICAgfVtdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayBmb3IgZ2V0dGluZyB0aGUgY2Fyb3VzZWwgaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgc2V0SW5zdGFuY2U/OiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHRvIGFjY2VzcyB0aGUgY2Fyb3VzZWwgQVBJXHJcbiAgICAgKiAqL1xyXG4gICAgc2V0Q29tcG9uZW50QVBJPzogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDbGFzc2VzIGZvciB0aGUgY2Fyb3VzZWwgY29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIEFkZGl0aW9uYWwgZGF0YSB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xyXG4gICAgICovXHJcbiAgICBfbWV0YT86IGFueTtcclxufVxyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDYXJvdXNlbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xyXG4gICAgZGF0YTogQ2Fyb3VzZWxEYXRhO1xyXG4gICAgZW1pdDogYW55O1xyXG4gICAgcHJpdmF0ZSBsb2FkZWQ7XHJcbiAgICAvKipcclxuICAgICAqIEFQSSBvZiB0aGUgY2Fyb3VzZWwgY29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIGFwaToge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFVzZWQgdG8gbGF6eS1sb2FkIHZpZGVvIHJlc291cmNlcy5cclxuICAgICAgICAgKiBDYWxsIGFwaS5sb2FkLnZpZGVvcyBvbiBET01Db250ZW50UmVhZHkgZXZlbnRcclxuICAgICAgICAgKi9cclxuICAgICAgICBsb2FkOiB7XHJcbiAgICAgICAgICAgIC8qKiBDaGFuZ2VzIGFsbCBkYXRhLXNyYyBhdHRyaWJ1dGVzIHRvIHNyYyBhbmQgY2FsbHMgPHZpZGVvPi5sb2FkKCkgKi9cclxuICAgICAgICAgICAgdmlkZW9zOiAoKSA9PiB2b2lkO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQ7XHJcbiAgICBvbkNsaWNrKHBheWxvYWQ6IGFueSk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHRoYXQgYWRkcyB0aGUgZXZlbnQgbGlzdGVuZXJzIHRvIGVhY2ggYnV0dG9uLlxyXG4gICAgICogVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSB3aGVuIFwibmV3IENhcm91c2VsKClcIiBpcyBjYWxsZWQgdGhlIGV2ZW50IGxpc3RlbmVycyBhcmUgbG9zdC5cclxuICAgICAqL1xyXG4gICAgYWRkQnV0dG9uRXZlbnRzKHsgc2xpZGVzLCBjb250YWluZXJJZCB9OiB7XHJcbiAgICAgICAgc2xpZGVzOiBhbnk7XHJcbiAgICAgICAgY29udGFpbmVySWQ6IGFueTtcclxuICAgIH0pOiB2b2lkO1xyXG59XHJcbiJdfQ==