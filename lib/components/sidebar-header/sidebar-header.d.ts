/**
 * Interface for SidebarHeaderComponent's "data"
 *
 * @property iconLeft (optional)
 * @property text (optional)
 * @property additionalText (optional)
 * @property iconRight (optional)
 * @property classes (optional)
 * @property payload (optional)
 */
import * as ɵngcc0 from '@angular/core';
export interface SidebarHeaderData {
    /**
     * the headers leftmost icon
     */
    iconLeft?: string;
    /**
     * the title text
     */
    text?: string;
    /**
     * additional text, displayed on the right of the text
     */
    additionalText?: string;
    /**
     * the headers rightmost icon
     */
    iconRight?: string;
    /**
     * additional html classes
     */
    classes?: any;
    /**
     * payload for onClick events
     */
    payload?: any;
}
export declare class SidebarHeaderComponent {
    data: SidebarHeaderData;
    emit: any;
    onClick(payload: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SidebarHeaderComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SidebarHeaderComponent, "n7-sidebar-header", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1oZWFkZXIuZC50cyIsInNvdXJjZXMiOlsic2lkZWJhci1oZWFkZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgU2lkZWJhckhlYWRlckNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBpY29uTGVmdCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGFkZGl0aW9uYWxUZXh0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGljb25SaWdodCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTaWRlYmFySGVhZGVyRGF0YSB7XHJcbiAgICAvKipcclxuICAgICAqIHRoZSBoZWFkZXJzIGxlZnRtb3N0IGljb25cclxuICAgICAqL1xyXG4gICAgaWNvbkxlZnQ/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIHRoZSB0aXRsZSB0ZXh0XHJcbiAgICAgKi9cclxuICAgIHRleHQ/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgdGV4dCwgZGlzcGxheWVkIG9uIHRoZSByaWdodCBvZiB0aGUgdGV4dFxyXG4gICAgICovXHJcbiAgICBhZGRpdGlvbmFsVGV4dD86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogdGhlIGhlYWRlcnMgcmlnaHRtb3N0IGljb25cclxuICAgICAqL1xyXG4gICAgaWNvblJpZ2h0Pzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAgICovXHJcbiAgICBjbGFzc2VzPzogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBwYXlsb2FkIGZvciBvbkNsaWNrIGV2ZW50c1xyXG4gICAgICovXHJcbiAgICBwYXlsb2FkPzogYW55O1xyXG59XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNpZGViYXJIZWFkZXJDb21wb25lbnQge1xyXG4gICAgZGF0YTogU2lkZWJhckhlYWRlckRhdGE7XHJcbiAgICBlbWl0OiBhbnk7XHJcbiAgICBvbkNsaWNrKHBheWxvYWQ6IGFueSk6IHZvaWQ7XHJcbn1cclxuIl19