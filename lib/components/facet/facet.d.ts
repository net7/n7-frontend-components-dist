/**
 * Interface for FacetComponent's "data"
 *
 * @property sections (required)
 * @property classes (optional)
 */
import * as ɵngcc0 from '@angular/core';
export interface FacetData {
    sections: FacetSection[];
    classes?: string;
}
/**
 * Interface for FacetSection
 *
 * @property inputs (required)
 * @property classes (optional)
 * @property _meta (optional)
 */
export interface FacetSection {
    inputs: Array<FacetInputCheckbox | FacetInputLink | FacetInputText | FacetInputSelect>;
    classes?: string;
    _meta?: any;
}
/**
 * Interface for FacetInputText
 *
 * @property type (required)
 * @property id (required)
 * @property placeholder (optional)
 * @property value (optional)
 * @property label (optional)
 * @property disabled (optional)
 * @property icon (optional)
 * @property inputPayload (optional)
 * @property enterPayload (optional)
 * @property iconPayload (optional)
 * @property classes (optional)
 * @property _meta (optional)
 */
export interface FacetInputText {
    type: 'text';
    id: string;
    placeholder?: string;
    value?: string | number | null;
    label?: string;
    disabled?: boolean;
    icon?: string;
    inputPayload?: any;
    enterPayload?: any;
    iconPayload?: any;
    classes?: any;
    _meta?: any;
}
/**
 * Interface for FacetInputSelect
 *
 * @property type (required)
 * @property id (required)
 * @property options (required)
 * @property label (optional)
 * @property disabled (optional)
 * @property icon (optional)
 * @property payload (optional)
 * @property classes (optional)
 * @property _meta (optional)
 */
export interface FacetInputSelect {
    type: 'select';
    id: string;
    options: Array<{
        label: string;
        value: string | number;
        selected?: boolean;
        disabled?: boolean;
    }>;
    label?: string;
    disabled?: boolean;
    payload?: any;
    classes?: any;
    _meta?: any;
}
/**
 * Interface for FacetInputCheckbox
 *
 * @property type (required)
 * @property id (required)
 * @property label (required)
 * @property checked (optional)
 * @property disabled (optional)
 * @property payload (optional)
 * @property classes (optional)
 * @property _meta (optional)
 */
export interface FacetInputCheckbox {
    type: 'checkbox';
    id: string;
    label: string;
    checked?: boolean;
    disabled?: boolean;
    payload?: any;
    classes?: any;
    _meta?: any;
}
/**
 * Interface for FacetInputLink
 *
 * @property icon (optional)
 * @property text (required)
 * @property counter (optional)
 * @property payload (optional)
 * @property classes (optional)
 * @property _meta (optional)
 */
export interface FacetInputLink {
    type: 'link';
    text: string;
    icon?: string;
    counter?: number;
    payload?: any;
    classes?: any;
    _meta?: any;
}
export declare class FacetComponent {
    data: FacetData;
    emit: any;
    onChange(inputPayload: any, value?: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FacetComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FacetComponent, "n7-facet", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQuZC50cyIsInNvdXJjZXMiOlsiZmFjZXQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogSW50ZXJmYWNlIGZvciBGYWNldENvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBzZWN0aW9ucyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmFjZXREYXRhIHtcclxuICAgIHNlY3Rpb25zOiBGYWNldFNlY3Rpb25bXTtcclxuICAgIGNsYXNzZXM/OiBzdHJpbmc7XHJcbn1cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgRmFjZXRTZWN0aW9uXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBpbnB1dHMgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZhY2V0U2VjdGlvbiB7XHJcbiAgICBpbnB1dHM6IEFycmF5PEZhY2V0SW5wdXRDaGVja2JveCB8IEZhY2V0SW5wdXRMaW5rIHwgRmFjZXRJbnB1dFRleHQgfCBGYWNldElucHV0U2VsZWN0PjtcclxuICAgIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgICBfbWV0YT86IGFueTtcclxufVxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBGYWNldElucHV0VGV4dFxyXG4gKlxyXG4gKiBAcHJvcGVydHkgdHlwZSAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBpZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBwbGFjZWhvbGRlciAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB2YWx1ZSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBsYWJlbCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBkaXNhYmxlZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGlucHV0UGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBlbnRlclBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaWNvblBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZhY2V0SW5wdXRUZXh0IHtcclxuICAgIHR5cGU6ICd0ZXh0JztcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZztcclxuICAgIHZhbHVlPzogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcclxuICAgIGxhYmVsPzogc3RyaW5nO1xyXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gICAgaWNvbj86IHN0cmluZztcclxuICAgIGlucHV0UGF5bG9hZD86IGFueTtcclxuICAgIGVudGVyUGF5bG9hZD86IGFueTtcclxuICAgIGljb25QYXlsb2FkPzogYW55O1xyXG4gICAgY2xhc3Nlcz86IGFueTtcclxuICAgIF9tZXRhPzogYW55O1xyXG59XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEZhY2V0SW5wdXRTZWxlY3RcclxuICpcclxuICogQHByb3BlcnR5IHR5cGUgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgaWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgb3B0aW9ucyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBsYWJlbCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBkaXNhYmxlZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZhY2V0SW5wdXRTZWxlY3Qge1xyXG4gICAgdHlwZTogJ3NlbGVjdCc7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgb3B0aW9uczogQXJyYXk8e1xyXG4gICAgICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICAgICAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcclxuICAgICAgICBzZWxlY3RlZD86IGJvb2xlYW47XHJcbiAgICAgICAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gICAgfT47XHJcbiAgICBsYWJlbD86IHN0cmluZztcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICAgIHBheWxvYWQ/OiBhbnk7XHJcbiAgICBjbGFzc2VzPzogYW55O1xyXG4gICAgX21ldGE/OiBhbnk7XHJcbn1cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgRmFjZXRJbnB1dENoZWNrYm94XHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB0eXBlIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGlkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGxhYmVsIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNoZWNrZWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgZGlzYWJsZWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmFjZXRJbnB1dENoZWNrYm94IHtcclxuICAgIHR5cGU6ICdjaGVja2JveCc7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIGNoZWNrZWQ/OiBib29sZWFuO1xyXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gICAgcGF5bG9hZD86IGFueTtcclxuICAgIGNsYXNzZXM/OiBhbnk7XHJcbiAgICBfbWV0YT86IGFueTtcclxufVxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBGYWNldElucHV0TGlua1xyXG4gKlxyXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNvdW50ZXIgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmFjZXRJbnB1dExpbmsge1xyXG4gICAgdHlwZTogJ2xpbmsnO1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgaWNvbj86IHN0cmluZztcclxuICAgIGNvdW50ZXI/OiBudW1iZXI7XHJcbiAgICBwYXlsb2FkPzogYW55O1xyXG4gICAgY2xhc3Nlcz86IGFueTtcclxuICAgIF9tZXRhPzogYW55O1xyXG59XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZhY2V0Q29tcG9uZW50IHtcclxuICAgIGRhdGE6IEZhY2V0RGF0YTtcclxuICAgIGVtaXQ6IGFueTtcclxuICAgIG9uQ2hhbmdlKGlucHV0UGF5bG9hZDogYW55LCB2YWx1ZT86IGFueSk6IHZvaWQ7XHJcbn1cclxuIl19