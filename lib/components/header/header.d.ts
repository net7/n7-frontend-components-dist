import { Anchor } from '../../shared-interfaces';
/**
 * Interface for a single button
 *
 * @property text (required)
 * @property anchor (required)
 * @property icon (optional)
 * @property classes (optional)
 * @property _meta (optional)
 */
import * as ɵngcc0 from '@angular/core';
export interface ButtonItem {
    /**
     * text
     */
    text: string;
    /**
     * anchor
     */
    anchor: Anchor;
    /**
     * icon class
     */
    icon?: string;
    /**
     * additional html classes
     */
    classes?: string;
    /**
     * additional info
     */
    _meta?: any;
}
/**
 * Interface for a single action item
 *
 * @property icon (required)
 * @property badge (optional)
 * - text (optional)
 * @property classes (optional)
 * @property anchor (required)
 * @property _meta (optional)
 */
export interface ActionItem {
    /**
     * optional badge with, optionally, its text
     */
    badge?: {
        text?: string;
    };
    /**
     * icon class
     */
    icon: string;
    anchor: Anchor;
    /**
     * additional html classes
     */
    classes?: string;
    /**
     * additional info
     */
    _meta?: any;
}
/**
 * Interface for a single navbar item
 *
 * note: a single nav's item can be a text (w/ anchor) OR a dropdown
 *
 * @property icon (optional)
 * @property subnav (optional)
 * @property text (optional)
 * @property classes (optional)
 * @property anchor (required)
 * @property _meta (optional)
 */
export interface NavbarItem {
    /**
     * text of a single item of the navbar (text and payload are connected)
     */
    text?: string;
    /**
     * icon for a single item of the navbar (associated to "text")
     */
    icon?: string;
    /**
     * second level navigation
     */
    subnav?: NavbarItem[];
    anchor: Anchor;
    /**
     * additional html classes
     */
    classes?: string;
    /**
     * additional info
     */
    _meta?: any;
}
/**
 * Interface for HeaderComponent's "data"
 *
 * @property logo (required)
 * - title (required)
 * - image (optional)
 * - subtitle (optional)
 * - classes (optional)
 * - payload (optional)
 * - anchor (optional)
 * @proprty menuToggle (required)
 * - open (required)
 * - - payload (required)
 * - closen (required)
 * - - payload (required)
 * @property actions (optional)
 * @property nav (optional)
 * - items (required)
 * - isBelow (optional)
 * - classes (optional)
 * - payload (optional)
 * - anchor (optional)
 * - _meta (optional)
 * @property search (optional)
 * - hint (optional)
 * - classes (optional)
 * - payload (optional)
 * - _meta (optional)
 * @property user (optional)
 * - image (optional)
 * - name (optional)
 * - classes (optional)
 * - payload (optional)
 * - anchor (optional)
 * - _meta (optional)
 * @property classes (optional)
 * @property payload (optional)
 * @property _meta (optional)
 */
export interface HeaderData {
    /**
     * logo and title area parameters
     */
    logo: {
        image?: string;
        title: string;
        subtitle?: string;
        classes?: string;
        payload?: any;
        anchor: Anchor;
    };
    /**
     * nav's parameters
     */
    nav?: {
        /**
         * list of the items in the navbar
         */
        items: NavbarItem[];
        /**
         * flag for display the navbar under the header (instead of IN the header)
         */
        isBelow?: boolean;
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
    };
    /**
     * search parameters
     */
    search?: {
        /**
         * hint (text showed in the input box until something is writed in there)
         */
        hint?: string;
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
    };
    /**
     * action items
     */
    actions?: ActionItem[];
    /**
     * buttons items
     */
    buttons?: ButtonItem[];
    /**
     * user parameters
     */
    user?: {
        /**
         * user's profile picture
         */
        img?: string;
        /**
         * user's profile name
         */
        name?: string;
        /**
         * additional html classes
         */
        classes?: string;
        anchor: Anchor;
        /**
         * additional info
         */
        _meta?: any;
    };
    /**
     * menu toggle for mobile
     */
    menuToggle: {
        open: {
            payload: any;
        };
        close: {
            payload: any;
        };
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
 * HeaderComponent <n7-header>
 *
 * @structure
 *  >>  cpm = it has Classes, Payload, Metadata  <<
 *  >>  -p- = it has only Payload                <<
 *  >>  +-- = sub-member                         <<
 *  >>  +---> = array                            <<
 *
 *  data (cpm)
 *    +-- actions
 *          +---> action (cpm)
 *                  +-- badge
 *    +-- logo (cp-)
 *    +-- menuToggle
 *          +-- open (-p-)
 *          +-- close (-p-)
 *    +-- nav (cpm)
 *          +---> items
 *    +-- search (cpm)
 *    +-- user (cpm)
 *
 */
export declare class HeaderComponent {
    data: any;
    emit: any;
    onClick(payload: any): void;
    onKeyUp(payload: any, keyCode: any, value: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<HeaderComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<HeaderComponent, "n7-header", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmQudHMiLCJzb3VyY2VzIjpbImhlYWRlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGEgc2luZ2xlIGJ1dHRvblxyXG4gKlxyXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBhbmNob3IgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uSXRlbSB7XHJcbiAgICAvKipcclxuICAgICAqIHRleHRcclxuICAgICAqL1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhbmNob3JcclxuICAgICAqL1xyXG4gICAgYW5jaG9yOiBBbmNob3I7XHJcbiAgICAvKipcclxuICAgICAqIGljb24gY2xhc3NcclxuICAgICAqL1xyXG4gICAgaWNvbj86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgICAqL1xyXG4gICAgY2xhc3Nlcz86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICAgKi9cclxuICAgIF9tZXRhPzogYW55O1xyXG59XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGEgc2luZ2xlIGFjdGlvbiBpdGVtXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBpY29uIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGJhZGdlIChvcHRpb25hbClcclxuICogLSB0ZXh0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgYW5jaG9yIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uSXRlbSB7XHJcbiAgICAvKipcclxuICAgICAqIG9wdGlvbmFsIGJhZGdlIHdpdGgsIG9wdGlvbmFsbHksIGl0cyB0ZXh0XHJcbiAgICAgKi9cclxuICAgIGJhZGdlPzoge1xyXG4gICAgICAgIHRleHQ/OiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBpY29uIGNsYXNzXHJcbiAgICAgKi9cclxuICAgIGljb246IHN0cmluZztcclxuICAgIGFuY2hvcjogQW5jaG9yO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAgICovXHJcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgICAqL1xyXG4gICAgX21ldGE/OiBhbnk7XHJcbn1cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgbmF2YmFyIGl0ZW1cclxuICpcclxuICogbm90ZTogYSBzaW5nbGUgbmF2J3MgaXRlbSBjYW4gYmUgYSB0ZXh0ICh3LyBhbmNob3IpIE9SIGEgZHJvcGRvd25cclxuICpcclxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgc3VibmF2IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHRleHQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBhbmNob3IgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBOYXZiYXJJdGVtIHtcclxuICAgIC8qKlxyXG4gICAgICogdGV4dCBvZiBhIHNpbmdsZSBpdGVtIG9mIHRoZSBuYXZiYXIgKHRleHQgYW5kIHBheWxvYWQgYXJlIGNvbm5lY3RlZClcclxuICAgICAqL1xyXG4gICAgdGV4dD86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogaWNvbiBmb3IgYSBzaW5nbGUgaXRlbSBvZiB0aGUgbmF2YmFyIChhc3NvY2lhdGVkIHRvIFwidGV4dFwiKVxyXG4gICAgICovXHJcbiAgICBpY29uPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBzZWNvbmQgbGV2ZWwgbmF2aWdhdGlvblxyXG4gICAgICovXHJcbiAgICBzdWJuYXY/OiBOYXZiYXJJdGVtW107XHJcbiAgICBhbmNob3I6IEFuY2hvcjtcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgICAqL1xyXG4gICAgY2xhc3Nlcz86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICAgKi9cclxuICAgIF9tZXRhPzogYW55O1xyXG59XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEhlYWRlckNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBsb2dvIChyZXF1aXJlZClcclxuICogLSB0aXRsZSAocmVxdWlyZWQpXHJcbiAqIC0gaW1hZ2UgKG9wdGlvbmFsKVxyXG4gKiAtIHN1YnRpdGxlIChvcHRpb25hbClcclxuICogLSBjbGFzc2VzIChvcHRpb25hbClcclxuICogLSBwYXlsb2FkIChvcHRpb25hbClcclxuICogLSBhbmNob3IgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcHJ0eSBtZW51VG9nZ2xlIChyZXF1aXJlZClcclxuICogLSBvcGVuIChyZXF1aXJlZClcclxuICogLSAtIHBheWxvYWQgKHJlcXVpcmVkKVxyXG4gKiAtIGNsb3NlbiAocmVxdWlyZWQpXHJcbiAqIC0gLSBwYXlsb2FkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGFjdGlvbnMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgbmF2IChvcHRpb25hbClcclxuICogLSBpdGVtcyAocmVxdWlyZWQpXHJcbiAqIC0gaXNCZWxvdyAob3B0aW9uYWwpXHJcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIC0gcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIC0gYW5jaG9yIChvcHRpb25hbClcclxuICogLSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBzZWFyY2ggKG9wdGlvbmFsKVxyXG4gKiAtIGhpbnQgKG9wdGlvbmFsKVxyXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiAtIHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiAtIF9tZXRhIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHVzZXIgKG9wdGlvbmFsKVxyXG4gKiAtIGltYWdlIChvcHRpb25hbClcclxuICogLSBuYW1lIChvcHRpb25hbClcclxuICogLSBjbGFzc2VzIChvcHRpb25hbClcclxuICogLSBwYXlsb2FkIChvcHRpb25hbClcclxuICogLSBhbmNob3IgKG9wdGlvbmFsKVxyXG4gKiAtIF9tZXRhIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEhlYWRlckRhdGEge1xyXG4gICAgLyoqXHJcbiAgICAgKiBsb2dvIGFuZCB0aXRsZSBhcmVhIHBhcmFtZXRlcnNcclxuICAgICAqL1xyXG4gICAgbG9nbzoge1xyXG4gICAgICAgIGltYWdlPzogc3RyaW5nO1xyXG4gICAgICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgc3VidGl0bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgY2xhc3Nlcz86IHN0cmluZztcclxuICAgICAgICBwYXlsb2FkPzogYW55O1xyXG4gICAgICAgIGFuY2hvcjogQW5jaG9yO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogbmF2J3MgcGFyYW1ldGVyc1xyXG4gICAgICovXHJcbiAgICBuYXY/OiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogbGlzdCBvZiB0aGUgaXRlbXMgaW4gdGhlIG5hdmJhclxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGl0ZW1zOiBOYXZiYXJJdGVtW107XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogZmxhZyBmb3IgZGlzcGxheSB0aGUgbmF2YmFyIHVuZGVyIHRoZSBoZWFkZXIgKGluc3RlYWQgb2YgSU4gdGhlIGhlYWRlcilcclxuICAgICAgICAgKi9cclxuICAgICAgICBpc0JlbG93PzogYm9vbGVhbjtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHBheWxvYWQ/OiBhbnk7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgX21ldGE/OiBhbnk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBzZWFyY2ggcGFyYW1ldGVyc1xyXG4gICAgICovXHJcbiAgICBzZWFyY2g/OiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogaGludCAodGV4dCBzaG93ZWQgaW4gdGhlIGlucHV0IGJveCB1bnRpbCBzb21ldGhpbmcgaXMgd3JpdGVkIGluIHRoZXJlKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGhpbnQ/OiBzdHJpbmc7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwYXlsb2FkPzogYW55O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGFkZGl0aW9uYWwgaW5mb1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIF9tZXRhPzogYW55O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogYWN0aW9uIGl0ZW1zXHJcbiAgICAgKi9cclxuICAgIGFjdGlvbnM/OiBBY3Rpb25JdGVtW107XHJcbiAgICAvKipcclxuICAgICAqIGJ1dHRvbnMgaXRlbXNcclxuICAgICAqL1xyXG4gICAgYnV0dG9ucz86IEJ1dHRvbkl0ZW1bXTtcclxuICAgIC8qKlxyXG4gICAgICogdXNlciBwYXJhbWV0ZXJzXHJcbiAgICAgKi9cclxuICAgIHVzZXI/OiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogdXNlcidzIHByb2ZpbGUgcGljdHVyZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGltZz86IHN0cmluZztcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiB1c2VyJ3MgcHJvZmlsZSBuYW1lXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbmFtZT86IHN0cmluZztcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgICAgICAgYW5jaG9yOiBBbmNob3I7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgX21ldGE/OiBhbnk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBtZW51IHRvZ2dsZSBmb3IgbW9iaWxlXHJcbiAgICAgKi9cclxuICAgIG1lbnVUb2dnbGU6IHtcclxuICAgICAgICBvcGVuOiB7XHJcbiAgICAgICAgICAgIHBheWxvYWQ6IGFueTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNsb3NlOiB7XHJcbiAgICAgICAgICAgIHBheWxvYWQ6IGFueTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgICAqL1xyXG4gICAgY2xhc3Nlcz86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICAgICovXHJcbiAgICBwYXlsb2FkPzogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgICAqL1xyXG4gICAgX21ldGE/OiBhbnk7XHJcbn1cclxuLyoqXHJcbiAqIEhlYWRlckNvbXBvbmVudCA8bjctaGVhZGVyPlxyXG4gKlxyXG4gKiBAc3RydWN0dXJlXHJcbiAqICA+PiAgY3BtID0gaXQgaGFzIENsYXNzZXMsIFBheWxvYWQsIE1ldGFkYXRhICA8PFxyXG4gKiAgPj4gIC1wLSA9IGl0IGhhcyBvbmx5IFBheWxvYWQgICAgICAgICAgICAgICAgPDxcclxuICogID4+ICArLS0gPSBzdWItbWVtYmVyICAgICAgICAgICAgICAgICAgICAgICAgIDw8XHJcbiAqICA+PiAgKy0tLT4gPSBhcnJheSAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PFxyXG4gKlxyXG4gKiAgZGF0YSAoY3BtKVxyXG4gKiAgICArLS0gYWN0aW9uc1xyXG4gKiAgICAgICAgICArLS0tPiBhY3Rpb24gKGNwbSlcclxuICogICAgICAgICAgICAgICAgICArLS0gYmFkZ2VcclxuICogICAgKy0tIGxvZ28gKGNwLSlcclxuICogICAgKy0tIG1lbnVUb2dnbGVcclxuICogICAgICAgICAgKy0tIG9wZW4gKC1wLSlcclxuICogICAgICAgICAgKy0tIGNsb3NlICgtcC0pXHJcbiAqICAgICstLSBuYXYgKGNwbSlcclxuICogICAgICAgICAgKy0tLT4gaXRlbXNcclxuICogICAgKy0tIHNlYXJjaCAoY3BtKVxyXG4gKiAgICArLS0gdXNlciAoY3BtKVxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcclxuICAgIGRhdGE6IGFueTtcclxuICAgIGVtaXQ6IGFueTtcclxuICAgIG9uQ2xpY2socGF5bG9hZDogYW55KTogdm9pZDtcclxuICAgIG9uS2V5VXAocGF5bG9hZDogYW55LCBrZXlDb2RlOiBhbnksIHZhbHVlOiBhbnkpOiB2b2lkO1xyXG59XHJcbiJdfQ==