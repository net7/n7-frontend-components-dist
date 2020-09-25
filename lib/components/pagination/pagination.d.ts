import { Button } from '../../shared-interfaces';
/**
 * Interface for PaginationComponent's options (page size select options)
 *
 * @property text (required)
 * @property classes (optional)
 * @property _meta (optional)
 */
import * as ɵngcc0 from '@angular/core';
export interface Option {
    /**
     * option text value
     */
    text: string;
    /**
     * additional html classes
     */
    classes?: string;
    /**
     * additional info
     */
    _meta?: any;
    /**
     * render as disabled
     */
    disabled?: boolean;
    /**
     * force selection
     */
    selected?: boolean;
}
/**
 * Interface for PaginationComponent's "data"
 *
 * @property links (required)
 * @property first (optional)
 * @property prev (optional)
 * @property next (optional)
 * @property last (optional)
 * @property classes (optional)
 * @property payload (optional)
 * @property _meta (optional)
 */
export interface PaginationData {
    /**
     * innerHtml for the "first" label
     */
    first?: Button;
    /**
     * innerHtml for the "prev" label
     */
    prev?: Button;
    /**
     * innerHtml for the "next" label
     */
    next?: Button;
    /**
     * innerHtml for the "last" label
     */
    last?: Button;
    /**
     * array of "pages" label (as text)
     */
    links: Button[];
    /**
     * page size select
     */
    select?: {
        label?: string;
        options?: Option[];
        payload?: string;
        disabled?: boolean;
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
export declare class PaginationComponent {
    data: PaginationData;
    emit: any;
    onClick(payload: any): void;
    onChange(payload: any, value: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PaginationComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PaginationComponent, "n7-pagination", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5kLnRzIiwic291cmNlcyI6WyJwYWdpbmF0aW9uLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIFBhZ2luYXRpb25Db21wb25lbnQncyBvcHRpb25zIChwYWdlIHNpemUgc2VsZWN0IG9wdGlvbnMpXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBPcHRpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBvcHRpb24gdGV4dCB2YWx1ZVxyXG4gICAgICovXHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICAgKi9cclxuICAgIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaW5mb1xyXG4gICAgICovXHJcbiAgICBfbWV0YT86IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogcmVuZGVyIGFzIGRpc2FibGVkXHJcbiAgICAgKi9cclxuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogZm9yY2Ugc2VsZWN0aW9uXHJcbiAgICAgKi9cclxuICAgIHNlbGVjdGVkPzogYm9vbGVhbjtcclxufVxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBQYWdpbmF0aW9uQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGxpbmtzIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGZpcnN0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHByZXYgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgbmV4dCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBsYXN0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2luYXRpb25EYXRhIHtcclxuICAgIC8qKlxyXG4gICAgICogaW5uZXJIdG1sIGZvciB0aGUgXCJmaXJzdFwiIGxhYmVsXHJcbiAgICAgKi9cclxuICAgIGZpcnN0PzogQnV0dG9uO1xyXG4gICAgLyoqXHJcbiAgICAgKiBpbm5lckh0bWwgZm9yIHRoZSBcInByZXZcIiBsYWJlbFxyXG4gICAgICovXHJcbiAgICBwcmV2PzogQnV0dG9uO1xyXG4gICAgLyoqXHJcbiAgICAgKiBpbm5lckh0bWwgZm9yIHRoZSBcIm5leHRcIiBsYWJlbFxyXG4gICAgICovXHJcbiAgICBuZXh0PzogQnV0dG9uO1xyXG4gICAgLyoqXHJcbiAgICAgKiBpbm5lckh0bWwgZm9yIHRoZSBcImxhc3RcIiBsYWJlbFxyXG4gICAgICovXHJcbiAgICBsYXN0PzogQnV0dG9uO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhcnJheSBvZiBcInBhZ2VzXCIgbGFiZWwgKGFzIHRleHQpXHJcbiAgICAgKi9cclxuICAgIGxpbmtzOiBCdXR0b25bXTtcclxuICAgIC8qKlxyXG4gICAgICogcGFnZSBzaXplIHNlbGVjdFxyXG4gICAgICovXHJcbiAgICBzZWxlY3Q/OiB7XHJcbiAgICAgICAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgICAgICAgb3B0aW9ucz86IE9wdGlvbltdO1xyXG4gICAgICAgIHBheWxvYWQ/OiBzdHJpbmc7XHJcbiAgICAgICAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgICAqL1xyXG4gICAgY2xhc3Nlcz86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICAgICovXHJcbiAgICBwYXlsb2FkPzogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgICAqL1xyXG4gICAgX21ldGE/OiBhbnk7XHJcbn1cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCB7XHJcbiAgICBkYXRhOiBQYWdpbmF0aW9uRGF0YTtcclxuICAgIGVtaXQ6IGFueTtcclxuICAgIG9uQ2xpY2socGF5bG9hZDogYW55KTogdm9pZDtcclxuICAgIG9uQ2hhbmdlKHBheWxvYWQ6IGFueSwgdmFsdWU6IGFueSk6IHZvaWQ7XHJcbn1cclxuIl19