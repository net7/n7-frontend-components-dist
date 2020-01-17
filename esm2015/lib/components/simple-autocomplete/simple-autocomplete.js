/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// SIMPLE-AUTOCOMPLETE.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for SimpleAutocompleteComponent's "data"
 *
 * \@property typed (required)
 * \@property suggestion (required)
 * \@property payload (optional)
 * \@property classes (optional)
 * \@property _meta (optional)
 * @record
 */
export function ISimpleAutocompleteData() { }
if (false) {
    /**
     * Suggested word endings
     * @type {?}
     */
    ISimpleAutocompleteData.prototype.suggestion;
    /**
     * Additional HTML classes
     * @type {?|undefined}
     */
    ISimpleAutocompleteData.prototype.classes;
    /**
     * Additional data useful for the component's logic
     * @type {?|undefined}
     */
    ISimpleAutocompleteData.prototype._meta;
}
/**
 * Interface for SimpleAutocompleteComponent's "Suggestion"
 *
 * \@property prefix (optional)
 * \@property suffix (optional)
 * \@property payload (optional)
 * @record
 */
export function ISimpleAutocompleteSuggestion() { }
if (false) {
    /**
     * Render suggestions
     * @type {?|undefined}
     */
    ISimpleAutocompleteSuggestion.prototype.prefix;
    /** @type {?|undefined} */
    ISimpleAutocompleteSuggestion.prototype.match;
    /** @type {?|undefined} */
    ISimpleAutocompleteSuggestion.prototype.suffix;
    /**
     * Suggestion event payload
     * @type {?|undefined}
     */
    ISimpleAutocompleteSuggestion.prototype.payload;
}
export class SimpleAutocompleteComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
}
SimpleAutocompleteComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-simple-autocomplete',
                template: "<div *ngIf=\"data\" class=\"n7-simple-autocomplete\">\r\n    <ul class=\"n7-simple-autocomplete__list {{data.classes || ''}}\">\r\n        <li *ngFor=\"let suggestion of data.suggestion\" \r\n            class=\"n7-simple-autocomplete__item\"\r\n            (click)=\"onClick(suggestion.payload)\">\r\n            <span *ngIf=\"suggestion.prefix\" class=\"n7-simple-autocomplete__prefix\">{{suggestion.prefix}}</span>\r\n            <span class=\"n7-simple-autocomplete__typed\">{{suggestion.match}}</span>\r\n            <span *ngIf=\"suggestion.suffix\" class=\"n7-simple-autocomplete__suffix\">{{suggestion.suffix}}</span>\r\n        </li>\r\n    </ul> \r\n</div>"
            }] }
];
SimpleAutocompleteComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SimpleAutocompleteComponent.prototype.data;
    /** @type {?} */
    SimpleAutocompleteComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWF1dG9jb21wbGV0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2ltcGxlLWF1dG9jb21wbGV0ZS9zaW1wbGUtYXV0b2NvbXBsZXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7QUFXakQsNkNBYUM7Ozs7OztJQVRDLDZDQUE0Qzs7Ozs7SUFJNUMsMENBQWM7Ozs7O0lBSWQsd0NBQVk7Ozs7Ozs7Ozs7QUFVZCxtREFXQzs7Ozs7O0lBUEMsK0NBQWdCOztJQUNoQiw4Q0FBZTs7SUFDZiwrQ0FBZ0I7Ozs7O0lBSWhCLGdEQUFjOztBQU9oQixNQUFNLE9BQU8sMkJBQTJCOzs7OztJQUl0QyxPQUFPLENBQUMsT0FBTztRQUNiLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBWkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLHNxQkFBeUM7YUFDMUM7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETiwyQ0FBdUM7O0lBQ3ZDLDJDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFNJTVBMRS1BVVRPQ09NUExFVEUudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIFNpbXBsZUF1dG9jb21wbGV0ZUNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB0eXBlZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBzdWdnZXN0aW9uIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTaW1wbGVBdXRvY29tcGxldGVEYXRhIHtcclxuICAvKipcclxuICAgKiBTdWdnZXN0ZWQgd29yZCBlbmRpbmdzXHJcbiAgICovXHJcbiAgc3VnZ2VzdGlvbjogSVNpbXBsZUF1dG9jb21wbGV0ZVN1Z2dlc3Rpb25bXSxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIEhUTUwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBhbnksXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBkYXRhIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnksXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIFNpbXBsZUF1dG9jb21wbGV0ZUNvbXBvbmVudCdzIFwiU3VnZ2VzdGlvblwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBwcmVmaXggKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgc3VmZml4IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU2ltcGxlQXV0b2NvbXBsZXRlU3VnZ2VzdGlvbiB7XHJcbiAgLyoqXHJcbiAgICogUmVuZGVyIHN1Z2dlc3Rpb25zXHJcbiAgICovXHJcbiAgcHJlZml4Pzogc3RyaW5nLFxyXG4gIG1hdGNoPzogc3RyaW5nLFxyXG4gIHN1ZmZpeD86IHN0cmluZyxcclxuICAvKipcclxuICAgKiBTdWdnZXN0aW9uIGV2ZW50IHBheWxvYWRcclxuICAgKi9cclxuICBwYXlsb2FkPzogYW55LFxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LXNpbXBsZS1hdXRvY29tcGxldGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaW1wbGUtYXV0b2NvbXBsZXRlLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaW1wbGVBdXRvY29tcGxldGVDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IElTaW1wbGVBdXRvY29tcGxldGVEYXRhO1xyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgb25DbGljayhwYXlsb2FkKXtcclxuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgfVxyXG59Il19