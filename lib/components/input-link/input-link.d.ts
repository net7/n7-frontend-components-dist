/**
 * Interface for an InputLink
 *
 * @property icon (optional)
 * @property text (required)
 * @property counter (optional)
 * @property payload (optional)
 * @property classes (optional)
 * @property _meta (optional)
 */
import * as ɵngcc0 from '@angular/core';
export interface InputLink {
    /**
     * The rendered text of the link
     */
    text: string;
    /**
     * An icon to be added next to the text
     */
    icon?: string;
    /**
     * A colorful counter with a number
     */
    counter?: number;
    /**
     * The payload for the click event
     */
    payload?: any;
    /**
     * Additional HTML Classes
     */
    classes?: any;
    /**
     * Additional data for the component's logic
     */
    _meta?: any;
}
/**
 * Interface for InputLinkData
 * @property links (required)
 */
export interface InputLinkData {
    /**
     * A list of input links
     */
    links: InputLink[];
}
export declare class InputLinkComponent {
    data: InputLinkData;
    emit: any;
    onChange(payload: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InputLinkComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<InputLinkComponent, "n7-input-link", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbGluay5kLnRzIiwic291cmNlcyI6WyJpbnB1dC1saW5rLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgYW4gSW5wdXRMaW5rXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY291bnRlciAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJbnB1dExpbmsge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcmVuZGVyZWQgdGV4dCBvZiB0aGUgbGlua1xyXG4gICAgICovXHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIEFuIGljb24gdG8gYmUgYWRkZWQgbmV4dCB0byB0aGUgdGV4dFxyXG4gICAgICovXHJcbiAgICBpY29uPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIGNvbG9yZnVsIGNvdW50ZXIgd2l0aCBhIG51bWJlclxyXG4gICAgICovXHJcbiAgICBjb3VudGVyPzogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcGF5bG9hZCBmb3IgdGhlIGNsaWNrIGV2ZW50XHJcbiAgICAgKi9cclxuICAgIHBheWxvYWQ/OiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIEFkZGl0aW9uYWwgSFRNTCBDbGFzc2VzXHJcbiAgICAgKi9cclxuICAgIGNsYXNzZXM/OiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIEFkZGl0aW9uYWwgZGF0YSBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXHJcbiAgICAgKi9cclxuICAgIF9tZXRhPzogYW55O1xyXG59XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIElucHV0TGlua0RhdGFcclxuICogQHByb3BlcnR5IGxpbmtzIChyZXF1aXJlZClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRMaW5rRGF0YSB7XHJcbiAgICAvKipcclxuICAgICAqIEEgbGlzdCBvZiBpbnB1dCBsaW5rc1xyXG4gICAgICovXHJcbiAgICBsaW5rczogSW5wdXRMaW5rW107XHJcbn1cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW5wdXRMaW5rQ29tcG9uZW50IHtcclxuICAgIGRhdGE6IElucHV0TGlua0RhdGE7XHJcbiAgICBlbWl0OiBhbnk7XHJcbiAgICBvbkNoYW5nZShwYXlsb2FkOiBhbnkpOiB2b2lkO1xyXG59XHJcbiJdfQ==