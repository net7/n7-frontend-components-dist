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
 * \@property append (required)
 * \@property payload (optional)
 * \@property classes (optional)
 * \@property _meta (optional)
 * @record
 */
export function ISimpleAutocompleteData() { }
if (false) {
    /**
     * Text inserted by the user
     * @type {?}
     */
    ISimpleAutocompleteData.prototype.typed;
    /**
     * Suggested word endings
     * @type {?}
     */
    ISimpleAutocompleteData.prototype.append;
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
    ISimpleAutocompleteSuggestion.prototype.suffix;
    /**
     * Suggestion event payload
     * @type {?|undefined}
     */
    ISimpleAutocompleteSuggestion.prototype.payload;
}
var SimpleAutocompleteComponent = /** @class */ (function () {
    function SimpleAutocompleteComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    SimpleAutocompleteComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    SimpleAutocompleteComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-simple-autocomplete',
                    template: "<div *ngIf=\"data\" class=\"n7-simple-autocomplete\">\r\n    <ul class=\"n7-simple-autocomplete__list {{data.classes || ''}}\">\r\n        <li *ngFor=\"let suggestion of data.append\" \r\n            class=\"n7-simple-autocomplete__item\"\r\n            (click)=\"onClick(suggestion.payload)\">\r\n            <span *ngIf=\"suggestion.prefix\" class=\"n7-simple-autocomplete__prefix\">{{suggestion.prefix}}</span>\r\n            <span class=\"n7-simple-autocomplete__typed\">{{data.typed}}</span>\r\n            <span *ngIf=\"suggestion.suffix\" class=\"n7-simple-autocomplete__suffix\">{{suggestion.suffix}}</span>\r\n        </li>\r\n    </ul> \r\n</div>"
                }] }
    ];
    SimpleAutocompleteComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return SimpleAutocompleteComponent;
}());
export { SimpleAutocompleteComponent };
if (false) {
    /** @type {?} */
    SimpleAutocompleteComponent.prototype.data;
    /** @type {?} */
    SimpleAutocompleteComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWF1dG9jb21wbGV0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2ltcGxlLWF1dG9jb21wbGV0ZS9zaW1wbGUtYXV0b2NvbXBsZXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7QUFXakQsNkNBaUJDOzs7Ozs7SUFiQyx3Q0FBYzs7Ozs7SUFJZCx5Q0FBd0M7Ozs7O0lBSXhDLDBDQUFjOzs7OztJQUlkLHdDQUFZOzs7Ozs7Ozs7O0FBVWQsbURBVUM7Ozs7OztJQU5DLCtDQUFnQjs7SUFDaEIsK0NBQWdCOzs7OztJQUloQixnREFBYzs7QUFHaEI7SUFBQTtJQWFBLENBQUM7Ozs7O0lBTEMsNkNBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDYixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQVpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyw0cEJBQXlDO2lCQUMxQzs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUFPUixrQ0FBQztDQUFBLEFBYkQsSUFhQztTQVRZLDJCQUEyQjs7O0lBQ3RDLDJDQUF1Qzs7SUFDdkMsMkNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gU0lNUExFLUFVVE9DT01QTEVURS50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgU2ltcGxlQXV0b2NvbXBsZXRlQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IHR5cGVkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGFwcGVuZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU2ltcGxlQXV0b2NvbXBsZXRlRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogVGV4dCBpbnNlcnRlZCBieSB0aGUgdXNlclxyXG4gICAqL1xyXG4gIHR5cGVkOiBzdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogU3VnZ2VzdGVkIHdvcmQgZW5kaW5nc1xyXG4gICAqL1xyXG4gIGFwcGVuZDogSVNpbXBsZUF1dG9jb21wbGV0ZVN1Z2dlc3Rpb25bXSxcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIEhUTUwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBhbnksXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBkYXRhIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnksXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIFNpbXBsZUF1dG9jb21wbGV0ZUNvbXBvbmVudCdzIFwiU3VnZ2VzdGlvblwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBwcmVmaXggKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgc3VmZml4IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU2ltcGxlQXV0b2NvbXBsZXRlU3VnZ2VzdGlvbiB7XHJcbiAgLyoqXHJcbiAgICogUmVuZGVyIHN1Z2dlc3Rpb25zXHJcbiAgICovXHJcbiAgcHJlZml4Pzogc3RyaW5nLFxyXG4gIHN1ZmZpeD86IHN0cmluZyxcclxuICAvKipcclxuICAgKiBTdWdnZXN0aW9uIGV2ZW50IHBheWxvYWRcclxuICAgKi9cclxuICBwYXlsb2FkPzogYW55LFxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LXNpbXBsZS1hdXRvY29tcGxldGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaW1wbGUtYXV0b2NvbXBsZXRlLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaW1wbGVBdXRvY29tcGxldGVDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IElTaW1wbGVBdXRvY29tcGxldGVEYXRhO1xyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgb25DbGljayhwYXlsb2FkKXtcclxuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgfVxyXG59Il19