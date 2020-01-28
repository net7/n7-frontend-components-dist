/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// SIMPLE-AUTOCOMPLETE.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for SimpleAutocompleteComponent's "data"
 *
 * \@property suggestion (required)
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
 * \@property text
 * \@property anchor (optional)
 * @record
 */
export function ISimpleAutocompleteSuggestion() { }
if (false) {
    /** @type {?} */
    ISimpleAutocompleteSuggestion.prototype.text;
    /** @type {?|undefined} */
    ISimpleAutocompleteSuggestion.prototype.anchor;
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
                    template: "<div *ngIf=\"data\" class=\"n7-simple-autocomplete\">\n    <ul class=\"n7-simple-autocomplete__list {{data.classes || ''}}\">\n        <li *ngFor=\"let suggestion of data.suggestion\" \n            class=\"n7-simple-autocomplete__item\">\n            <n7-anchor-wrapper\n            [data]=\"suggestion.anchor\"\n            (clicked)=\"onClick($event)\">\n              <span class=\"n7-simple-autocomplete__item\" [innerHTML]=\"suggestion.text\"></span>\n            </n7-anchor-wrapper>\n        </li>\n    </ul> \n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWF1dG9jb21wbGV0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2ltcGxlLWF1dG9jb21wbGV0ZS9zaW1wbGUtYXV0b2NvbXBsZXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0FBVWpELDZDQWFDOzs7Ozs7SUFUQyw2Q0FBNEM7Ozs7O0lBSTVDLDBDQUFjOzs7OztJQUlkLHdDQUFZOzs7Ozs7Ozs7QUFTZCxtREFHQzs7O0lBRkMsNkNBQWE7O0lBQ2IsK0NBQWlCOztBQUduQjtJQUFBO0lBYUEsQ0FBQzs7Ozs7SUFMQyw2Q0FBTzs7OztJQUFQLFVBQVEsT0FBTztRQUNiLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLHdoQkFBeUM7aUJBQzFDOzs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLOztJQU9SLGtDQUFDO0NBQUEsQUFiRCxJQWFDO1NBVFksMkJBQTJCOzs7SUFDdEMsMkNBQXVDOztJQUN2QywyQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU0lNUExFLUFVVE9DT01QTEVURS50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFNpbXBsZUF1dG9jb21wbGV0ZUNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IHN1Z2dlc3Rpb24gKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJU2ltcGxlQXV0b2NvbXBsZXRlRGF0YSB7XG4gIC8qKlxuICAgKiBTdWdnZXN0ZWQgd29yZCBlbmRpbmdzXG4gICAqL1xuICBzdWdnZXN0aW9uOiBJU2ltcGxlQXV0b2NvbXBsZXRlU3VnZ2VzdGlvbltdLFxuICAvKipcbiAgICogQWRkaXRpb25hbCBIVE1MIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBhbnksXG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIGRhdGEgdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICovXG4gIF9tZXRhPzogYW55LFxufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgU2ltcGxlQXV0b2NvbXBsZXRlQ29tcG9uZW50J3MgXCJTdWdnZXN0aW9uXCJcbiAqXG4gKiBAcHJvcGVydHkgdGV4dFxuICogQHByb3BlcnR5IGFuY2hvciAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVNpbXBsZUF1dG9jb21wbGV0ZVN1Z2dlc3Rpb24ge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGFuY2hvcj86IElBbmNob3I7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LXNpbXBsZS1hdXRvY29tcGxldGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2ltcGxlLWF1dG9jb21wbGV0ZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTaW1wbGVBdXRvY29tcGxldGVDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJU2ltcGxlQXV0b2NvbXBsZXRlRGF0YTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2xpY2socGF5bG9hZCl7XG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG59Il19