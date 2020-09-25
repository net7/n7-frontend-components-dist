/**
 * Interface for an index component Item
 *
 * @property icon (optional)
 * @property text (required)
 * @property subtitle (required)
 * - text (required)
 * - icon (optional)
 * - grow (required)
 */
import * as ɵngcc0 from '@angular/core';
export interface DataWidgetData {
    /**
     * item icon
     */
    icon?: string;
    /**
     * item text
     */
    text?: string;
    subtitle?: {
        /**
         * item subtitle
         */
        text: string;
        /**
         * item subtitle icon
         */
        icon: string;
        /**
         * percent rate
         */
        value: number | string;
        payload: any;
    };
    classes?: string;
    /**
     * mouse event payload
     */
    payload: any;
    _meta?: any;
}
export declare class DataWidgetComponent {
    data: DataWidgetData;
    emit: any;
    onMouseEnter(payload: any): void;
    onMouseLeave(payload: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DataWidgetComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DataWidgetComponent, "n7-data-widget", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS13aWRnZXQuZC50cyIsInNvdXJjZXMiOlsiZGF0YS13aWRnZXQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgYW4gaW5kZXggY29tcG9uZW50IEl0ZW1cclxuICpcclxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBzdWJ0aXRsZSAocmVxdWlyZWQpXHJcbiAqIC0gdGV4dCAocmVxdWlyZWQpXHJcbiAqIC0gaWNvbiAob3B0aW9uYWwpXHJcbiAqIC0gZ3JvdyAocmVxdWlyZWQpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIERhdGFXaWRnZXREYXRhIHtcclxuICAgIC8qKlxyXG4gICAgICogaXRlbSBpY29uXHJcbiAgICAgKi9cclxuICAgIGljb24/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGl0ZW0gdGV4dFxyXG4gICAgICovXHJcbiAgICB0ZXh0Pzogc3RyaW5nO1xyXG4gICAgc3VidGl0bGU/OiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogaXRlbSBzdWJ0aXRsZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRleHQ6IHN0cmluZztcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBpdGVtIHN1YnRpdGxlIGljb25cclxuICAgICAgICAgKi9cclxuICAgICAgICBpY29uOiBzdHJpbmc7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogcGVyY2VudCByYXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmFsdWU6IG51bWJlciB8IHN0cmluZztcclxuICAgICAgICBwYXlsb2FkOiBhbnk7XHJcbiAgICB9O1xyXG4gICAgY2xhc3Nlcz86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogbW91c2UgZXZlbnQgcGF5bG9hZFxyXG4gICAgICovXHJcbiAgICBwYXlsb2FkOiBhbnk7XHJcbiAgICBfbWV0YT86IGFueTtcclxufVxyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEYXRhV2lkZ2V0Q29tcG9uZW50IHtcclxuICAgIGRhdGE6IERhdGFXaWRnZXREYXRhO1xyXG4gICAgZW1pdDogYW55O1xyXG4gICAgb25Nb3VzZUVudGVyKHBheWxvYWQ6IGFueSk6IHZvaWQ7XHJcbiAgICBvbk1vdXNlTGVhdmUocGF5bG9hZDogYW55KTogdm9pZDtcclxufVxyXG4iXX0=