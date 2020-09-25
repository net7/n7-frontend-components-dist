import { Anchor } from '../../shared-interfaces';
/**
 * Interface for each link in footer menus
 *
 * @property text (required)
 * @property classes (optional)
 * @property anchor (mandatory)
 * @property _meta (optional)
 * @property _meta (optional)
 *
 */
import * as ɵngcc0 from '@angular/core';
export interface FooterLink {
    /**
     * image url
     */
    text: string;
    /**
     * additional html classes
     */
    classes?: any;
    anchor: Anchor;
    /**
     * additional info useful for the component's logic
     */
    _meta?: any;
}
/**
 * Interface for each image in the footer (usually logos)
 *
 * @property url (required)
 * @property alttext (optional)
 * @property classes (optional)
 * @property anchor (required)
 * @property _meta (optional)
 * @property _meta (optional)
 *
 */
export interface FooterImage {
    /**
     * image url
     */
    url: string;
    /**
     * image alt text
     */
    alttext?: string;
    /**
     * additional html classes
     */
    classes?: any;
    anchor: Anchor;
    /**
     * additional info useful for the component's logic
     */
    _meta?: any;
}
/**
 * Interface for a single Footer column that can display title, images, text and a nav list
 *
 * @property title (optional)
 * @property images (optional)
 * @property text (optional)
 * @property links (optional)
 * @property classes (optional)
 * @property _meta (optional)
 *
 */
export interface FooterColumn {
    /**
     * column's title
     */
    title?: string;
    /**
     * column's images
     */
    images?: FooterImage[];
    /**
     * column's text
     */
    text?: string;
    /**
     * column's nav
     */
    links?: FooterLink[];
    /**
     * additional html classes
     */
    classes?: any;
    /**
     * additional info useful for the component's logic
     */
    _meta?: any;
}
/**
 * Interface for FooterComponents's "Data"
 *
 * @property columns (required)
 * @property classes (optional)
 *
 */
export interface FooterData {
    /**
     * each item renders a column of the footer
     */
    columns: FooterColumn[];
    /**
     * additional html classes
     */
    classes?: any;
}
export declare class FooterComponent {
    data: FooterData;
    emit: any;
    onClick(payload: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FooterComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FooterComponent, "n7-footer", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmQudHMiLCJzb3VyY2VzIjpbImZvb3Rlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5jaG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkLWludGVyZmFjZXMnO1xyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBlYWNoIGxpbmsgaW4gZm9vdGVyIG1lbnVzXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgYW5jaG9yIChtYW5kYXRvcnkpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZvb3Rlckxpbmsge1xyXG4gICAgLyoqXHJcbiAgICAgKiBpbWFnZSB1cmxcclxuICAgICAqL1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAgICovXHJcbiAgICBjbGFzc2VzPzogYW55O1xyXG4gICAgYW5jaG9yOiBBbmNob3I7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaW5mbyB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xyXG4gICAgICovXHJcbiAgICBfbWV0YT86IGFueTtcclxufVxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBlYWNoIGltYWdlIGluIHRoZSBmb290ZXIgKHVzdWFsbHkgbG9nb3MpXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB1cmwgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgYWx0dGV4dCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGFuY2hvciAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZvb3RlckltYWdlIHtcclxuICAgIC8qKlxyXG4gICAgICogaW1hZ2UgdXJsXHJcbiAgICAgKi9cclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBpbWFnZSBhbHQgdGV4dFxyXG4gICAgICovXHJcbiAgICBhbHR0ZXh0Pzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAgICovXHJcbiAgICBjbGFzc2VzPzogYW55O1xyXG4gICAgYW5jaG9yOiBBbmNob3I7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaW5mbyB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xyXG4gICAgICovXHJcbiAgICBfbWV0YT86IGFueTtcclxufVxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBhIHNpbmdsZSBGb290ZXIgY29sdW1uIHRoYXQgY2FuIGRpc3BsYXkgdGl0bGUsIGltYWdlcywgdGV4dCBhbmQgYSBuYXYgbGlzdFxyXG4gKlxyXG4gKiBAcHJvcGVydHkgdGl0bGUgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaW1hZ2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHRleHQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgbGlua3MgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZvb3RlckNvbHVtbiB7XHJcbiAgICAvKipcclxuICAgICAqIGNvbHVtbidzIHRpdGxlXHJcbiAgICAgKi9cclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBjb2x1bW4ncyBpbWFnZXNcclxuICAgICAqL1xyXG4gICAgaW1hZ2VzPzogRm9vdGVySW1hZ2VbXTtcclxuICAgIC8qKlxyXG4gICAgICogY29sdW1uJ3MgdGV4dFxyXG4gICAgICovXHJcbiAgICB0ZXh0Pzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBjb2x1bW4ncyBuYXZcclxuICAgICAqL1xyXG4gICAgbGlua3M/OiBGb290ZXJMaW5rW107XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICAgKi9cclxuICAgIGNsYXNzZXM/OiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaW5mbyB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xyXG4gICAgICovXHJcbiAgICBfbWV0YT86IGFueTtcclxufVxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBGb290ZXJDb21wb25lbnRzJ3MgXCJEYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGNvbHVtbnMgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZvb3RlckRhdGEge1xyXG4gICAgLyoqXHJcbiAgICAgKiBlYWNoIGl0ZW0gcmVuZGVycyBhIGNvbHVtbiBvZiB0aGUgZm9vdGVyXHJcbiAgICAgKi9cclxuICAgIGNvbHVtbnM6IEZvb3RlckNvbHVtbltdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAgICovXHJcbiAgICBjbGFzc2VzPzogYW55O1xyXG59XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZvb3RlckNvbXBvbmVudCB7XHJcbiAgICBkYXRhOiBGb290ZXJEYXRhO1xyXG4gICAgZW1pdDogYW55O1xyXG4gICAgb25DbGljayhwYXlsb2FkOiBhbnkpOiB2b2lkO1xyXG59XHJcbiJdfQ==