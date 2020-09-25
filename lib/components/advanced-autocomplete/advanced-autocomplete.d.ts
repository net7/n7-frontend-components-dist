import { Anchor } from '../../shared-interfaces';
/**
 * Interface for AdvancedAutocompleteComponent's "data"
 */
import * as ɵngcc0 from '@angular/core';
export interface AdvancedAutocompleteData {
    results?: AdvancedAutocompleteResponse[];
    actions?: {
        advanced?: {
            text: string;
            anchor?: Anchor;
            classes?: any;
        };
        showMore?: {
            text: string;
            anchor?: Anchor;
            classes?: any;
        };
    };
    fallback: string;
    classes?: any;
    _meta?: any;
}
interface AdvancedAutocompleteItem {
    /**
     * anchor <a>
     */
    anchor?: Anchor;
    /**
     * Rendered text for the result item
     */
    title?: string;
    /**
     * Additional metadata for the result item
     */
    metadata?: Array<{
        key?: string;
        value?: string;
    }>;
}
interface AdvancedAutocompleteResponse {
    items: AdvancedAutocompleteItem[];
    group?: {
        title: string;
        classes?: string;
        icon?: string;
        anchor?: Anchor;
    };
}
export declare class AdvancedAutocompleteComponent {
    data: AdvancedAutocompleteData;
    emit: any;
    onClick(payload: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AdvancedAutocompleteComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AdvancedAutocompleteComponent, "n7-advanced-autocomplete", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}
export {};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtYXV0b2NvbXBsZXRlLmQudHMiLCJzb3VyY2VzIjpbImFkdmFuY2VkLWF1dG9jb21wbGV0ZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgQWR2YW5jZWRBdXRvY29tcGxldGVDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBBZHZhbmNlZEF1dG9jb21wbGV0ZURhdGEge1xyXG4gICAgcmVzdWx0cz86IEFkdmFuY2VkQXV0b2NvbXBsZXRlUmVzcG9uc2VbXTtcclxuICAgIGFjdGlvbnM/OiB7XHJcbiAgICAgICAgYWR2YW5jZWQ/OiB7XHJcbiAgICAgICAgICAgIHRleHQ6IHN0cmluZztcclxuICAgICAgICAgICAgYW5jaG9yPzogQW5jaG9yO1xyXG4gICAgICAgICAgICBjbGFzc2VzPzogYW55O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2hvd01vcmU/OiB7XHJcbiAgICAgICAgICAgIHRleHQ6IHN0cmluZztcclxuICAgICAgICAgICAgYW5jaG9yPzogQW5jaG9yO1xyXG4gICAgICAgICAgICBjbGFzc2VzPzogYW55O1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgZmFsbGJhY2s6IHN0cmluZztcclxuICAgIGNsYXNzZXM/OiBhbnk7XHJcbiAgICBfbWV0YT86IGFueTtcclxufVxyXG5pbnRlcmZhY2UgQWR2YW5jZWRBdXRvY29tcGxldGVJdGVtIHtcclxuICAgIC8qKlxyXG4gICAgICogYW5jaG9yIDxhPlxyXG4gICAgICovXHJcbiAgICBhbmNob3I/OiBBbmNob3I7XHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlcmVkIHRleHQgZm9yIHRoZSByZXN1bHQgaXRlbVxyXG4gICAgICovXHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogQWRkaXRpb25hbCBtZXRhZGF0YSBmb3IgdGhlIHJlc3VsdCBpdGVtXHJcbiAgICAgKi9cclxuICAgIG1ldGFkYXRhPzogQXJyYXk8e1xyXG4gICAgICAgIGtleT86IHN0cmluZztcclxuICAgICAgICB2YWx1ZT86IHN0cmluZztcclxuICAgIH0+O1xyXG59XHJcbmludGVyZmFjZSBBZHZhbmNlZEF1dG9jb21wbGV0ZVJlc3BvbnNlIHtcclxuICAgIGl0ZW1zOiBBZHZhbmNlZEF1dG9jb21wbGV0ZUl0ZW1bXTtcclxuICAgIGdyb3VwPzoge1xyXG4gICAgICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgY2xhc3Nlcz86IHN0cmluZztcclxuICAgICAgICBpY29uPzogc3RyaW5nO1xyXG4gICAgICAgIGFuY2hvcj86IEFuY2hvcjtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQWR2YW5jZWRBdXRvY29tcGxldGVDb21wb25lbnQge1xyXG4gICAgZGF0YTogQWR2YW5jZWRBdXRvY29tcGxldGVEYXRhO1xyXG4gICAgZW1pdDogYW55O1xyXG4gICAgb25DbGljayhwYXlsb2FkOiBhbnkpOiB2b2lkO1xyXG59XHJcbmV4cG9ydCB7fTtcclxuIl19