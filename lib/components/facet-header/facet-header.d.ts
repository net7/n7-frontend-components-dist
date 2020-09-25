/**
 * Interface for FacetHeaderComponent's "data"
 *
 * @property iconLeft (optional)
 * @property text (required)
 * @property additionalText (optional)
 * @property iconRight (optional)
 * @property classes (optional)
 * @property payload (optional)
 */
import * as ɵngcc0 from '@angular/core';
export interface FacetHeaderData {
    /**
     * the headers leftmost icon
     */
    iconLeft?: string;
    /**
     * the title text
     */
    text: string;
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
export declare class FacetHeaderComponent {
    data: FacetHeaderData;
    emit: any;
    onClick(payload: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FacetHeaderComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FacetHeaderComponent, "n7-facet-header", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaGVhZGVyLmQudHMiLCJzb3VyY2VzIjpbImZhY2V0LWhlYWRlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogSW50ZXJmYWNlIGZvciBGYWNldEhlYWRlckNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBpY29uTGVmdCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGFkZGl0aW9uYWxUZXh0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGljb25SaWdodCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBGYWNldEhlYWRlckRhdGEge1xyXG4gICAgLyoqXHJcbiAgICAgKiB0aGUgaGVhZGVycyBsZWZ0bW9zdCBpY29uXHJcbiAgICAgKi9cclxuICAgIGljb25MZWZ0Pzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiB0aGUgdGl0bGUgdGV4dFxyXG4gICAgICovXHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgdGV4dCwgZGlzcGxheWVkIG9uIHRoZSByaWdodCBvZiB0aGUgdGV4dFxyXG4gICAgICovXHJcbiAgICBhZGRpdGlvbmFsVGV4dD86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogdGhlIGhlYWRlcnMgcmlnaHRtb3N0IGljb25cclxuICAgICAqL1xyXG4gICAgaWNvblJpZ2h0Pzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAgICovXHJcbiAgICBjbGFzc2VzPzogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBwYXlsb2FkIGZvciBvbkNsaWNrIGV2ZW50c1xyXG4gICAgICovXHJcbiAgICBwYXlsb2FkPzogYW55O1xyXG59XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZhY2V0SGVhZGVyQ29tcG9uZW50IHtcclxuICAgIGRhdGE6IEZhY2V0SGVhZGVyRGF0YTtcclxuICAgIGVtaXQ6IGFueTtcclxuICAgIG9uQ2xpY2socGF5bG9hZDogYW55KTogdm9pZDtcclxufVxyXG4iXX0=