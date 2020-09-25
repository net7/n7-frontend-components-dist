import { Anchor } from '../../shared-interfaces';
/**
 * Interface for SimpleAutocompleteComponent's "data"
 *
 * @property suggestion (required)
 * @property classes (optional)
 * @property _meta (optional)
 */
import * as ɵngcc0 from '@angular/core';
export interface SimpleAutocompleteData {
    /**
     * Suggested word endings
     */
    suggestion: SimpleAutocompleteSuggestion[];
    /**
     * Additional HTML classes
     */
    classes?: any;
    /**
     * Additional data useful for the component's logic
     */
    _meta?: any;
}
/**
 * Interface for SimpleAutocompleteComponent's "Suggestion"
 *
 * @property text
 * @property anchor (optional)
 */
export interface SimpleAutocompleteSuggestion {
    text: string;
    anchor?: Anchor;
}
export declare class SimpleAutocompleteComponent {
    data: SimpleAutocompleteData;
    emit: any;
    onClick(payload: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SimpleAutocompleteComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SimpleAutocompleteComponent, "n7-simple-autocomplete", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWF1dG9jb21wbGV0ZS5kLnRzIiwic291cmNlcyI6WyJzaW1wbGUtYXV0b2NvbXBsZXRlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIFNpbXBsZUF1dG9jb21wbGV0ZUNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBzdWdnZXN0aW9uIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTaW1wbGVBdXRvY29tcGxldGVEYXRhIHtcclxuICAgIC8qKlxyXG4gICAgICogU3VnZ2VzdGVkIHdvcmQgZW5kaW5nc1xyXG4gICAgICovXHJcbiAgICBzdWdnZXN0aW9uOiBTaW1wbGVBdXRvY29tcGxldGVTdWdnZXN0aW9uW107XHJcbiAgICAvKipcclxuICAgICAqIEFkZGl0aW9uYWwgSFRNTCBjbGFzc2VzXHJcbiAgICAgKi9cclxuICAgIGNsYXNzZXM/OiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIEFkZGl0aW9uYWwgZGF0YSB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xyXG4gICAgICovXHJcbiAgICBfbWV0YT86IGFueTtcclxufVxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBTaW1wbGVBdXRvY29tcGxldGVDb21wb25lbnQncyBcIlN1Z2dlc3Rpb25cIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgdGV4dFxyXG4gKiBAcHJvcGVydHkgYW5jaG9yIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2ltcGxlQXV0b2NvbXBsZXRlU3VnZ2VzdGlvbiB7XHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICBhbmNob3I/OiBBbmNob3I7XHJcbn1cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2ltcGxlQXV0b2NvbXBsZXRlQ29tcG9uZW50IHtcclxuICAgIGRhdGE6IFNpbXBsZUF1dG9jb21wbGV0ZURhdGE7XHJcbiAgICBlbWl0OiBhbnk7XHJcbiAgICBvbkNsaWNrKHBheWxvYWQ6IGFueSk6IHZvaWQ7XHJcbn1cclxuIl19