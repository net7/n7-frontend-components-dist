import { Anchor } from '../../shared-interfaces';
/**
 * Interface for HeroComponent's "data"
 *
 * @property title (required)
 * @property text (optional)
 * @property input (optional)
 * - placeholder (optional)
 * - icon (optional)
 * - payload (optional)
 * @property button (optional)
 * - text (optional)
 * - anchor (optional)
 * @property image (optional)
 * @property backgroundImage (optional)
 * @property classes (optional)
 * @property payload (optional)
 * @property _meta (optional)
 */
import * as ɵngcc0 from '@angular/core';
export interface HeroData {
    /**
     * main text displayed in the hero section
    */
    title: string;
    /**
    * additional text under the title
    */
    text?: string;
    /**
    * input field (usually for search) and it's parameters
    */
    input?: {
        placeholder: string;
        icon: string;
        payload: any;
    };
    /**
    * call to action button and it's parameters
    */
    button?: {
        text: string;
        anchor?: Anchor;
    };
    /**
     * image displayed inside the hero
     */
    image?: string;
    /**
    * background image that covers the full background area of the hero
    */
    backgroundImage?: string;
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
export declare class HeroComponent {
    data: HeroData;
    emit: any;
    getBackgroundImageCssValue(backgroundImage: any): string;
    onClick(payload: any): void;
    onInputChange(payload: any, value: any): void;
    onInputEnter(payload: any, value: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<HeroComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<HeroComponent, "n7-hero", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5kLnRzIiwic291cmNlcyI6WyJoZXJvLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5jaG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkLWludGVyZmFjZXMnO1xyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBIZXJvQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IHRpdGxlIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHRleHQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaW5wdXQgKG9wdGlvbmFsKVxyXG4gKiAtIHBsYWNlaG9sZGVyIChvcHRpb25hbClcclxuICogLSBpY29uIChvcHRpb25hbClcclxuICogLSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGJ1dHRvbiAob3B0aW9uYWwpXHJcbiAqIC0gdGV4dCAob3B0aW9uYWwpXHJcbiAqIC0gYW5jaG9yIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGltYWdlIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGJhY2tncm91bmRJbWFnZSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBIZXJvRGF0YSB7XHJcbiAgICAvKipcclxuICAgICAqIG1haW4gdGV4dCBkaXNwbGF5ZWQgaW4gdGhlIGhlcm8gc2VjdGlvblxyXG4gICAgKi9cclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICogYWRkaXRpb25hbCB0ZXh0IHVuZGVyIHRoZSB0aXRsZVxyXG4gICAgKi9cclxuICAgIHRleHQ/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICogaW5wdXQgZmllbGQgKHVzdWFsbHkgZm9yIHNlYXJjaCkgYW5kIGl0J3MgcGFyYW1ldGVyc1xyXG4gICAgKi9cclxuICAgIGlucHV0Pzoge1xyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgICAgICAgaWNvbjogc3RyaW5nO1xyXG4gICAgICAgIHBheWxvYWQ6IGFueTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICogY2FsbCB0byBhY3Rpb24gYnV0dG9uIGFuZCBpdCdzIHBhcmFtZXRlcnNcclxuICAgICovXHJcbiAgICBidXR0b24/OiB7XHJcbiAgICAgICAgdGV4dDogc3RyaW5nO1xyXG4gICAgICAgIGFuY2hvcj86IEFuY2hvcjtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIGltYWdlIGRpc3BsYXllZCBpbnNpZGUgdGhlIGhlcm9cclxuICAgICAqL1xyXG4gICAgaW1hZ2U/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICogYmFja2dyb3VuZCBpbWFnZSB0aGF0IGNvdmVycyB0aGUgZnVsbCBiYWNrZ3JvdW5kIGFyZWEgb2YgdGhlIGhlcm9cclxuICAgICovXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgICovXHJcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcclxuICAgICovXHJcbiAgICBwYXlsb2FkPzogYW55O1xyXG4gICAgLyoqXHJcbiAgICAqIGFkZGl0aW9uYWwgaW5mb1xyXG4gICAgKi9cclxuICAgIF9tZXRhPzogYW55O1xyXG59XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEhlcm9Db21wb25lbnQge1xyXG4gICAgZGF0YTogSGVyb0RhdGE7XHJcbiAgICBlbWl0OiBhbnk7XHJcbiAgICBnZXRCYWNrZ3JvdW5kSW1hZ2VDc3NWYWx1ZShiYWNrZ3JvdW5kSW1hZ2U6IGFueSk6IHN0cmluZztcclxuICAgIG9uQ2xpY2socGF5bG9hZDogYW55KTogdm9pZDtcclxuICAgIG9uSW5wdXRDaGFuZ2UocGF5bG9hZDogYW55LCB2YWx1ZTogYW55KTogdm9pZDtcclxuICAgIG9uSW5wdXRFbnRlcihwYXlsb2FkOiBhbnksIHZhbHVlOiBhbnkpOiB2b2lkO1xyXG59XHJcbiJdfQ==