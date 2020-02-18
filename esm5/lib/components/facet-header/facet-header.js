/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/facet-header/facet-header.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// FACET-HEADER.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for FacetHeaderComponent's "data"
 *
 * \@property iconLeft (optional)
 * \@property text (required)
 * \@property additionalText (optional)
 * \@property iconRight (optional)
 * \@property classes (optional)
 * \@property payload (optional)
 * @record
 */
export function IFacetHeaderData() { }
if (false) {
    /**
     * the headers leftmost icon
     * @type {?|undefined}
     */
    IFacetHeaderData.prototype.iconLeft;
    /**
     * the title text
     * @type {?}
     */
    IFacetHeaderData.prototype.text;
    /**
     * additional text, displayed on the right of the text
     * @type {?|undefined}
     */
    IFacetHeaderData.prototype.additionalText;
    /**
     * the headers rightmost icon
     * @type {?|undefined}
     */
    IFacetHeaderData.prototype.iconRight;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    IFacetHeaderData.prototype.classes;
    /**
     * payload for onClick events
     * @type {?|undefined}
     */
    IFacetHeaderData.prototype.payload;
}
var FacetHeaderComponent = /** @class */ (function () {
    function FacetHeaderComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    FacetHeaderComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    FacetHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-facet-header',
                    template: "<div *ngIf=\"data\" class=\"n7-facet-header {{ data.classes || '' }}\">\n    <span class=\"n7-facet-header__icon-left {{ data.iconLeft }}\" \n          *ngIf=\"data.iconLeft\">\n    </span>\n    <span class=\"n7-facet-header__text-wrapper\">\n        <span class=\"n7-facet-header__text\">\n            {{data.text}}\n        </span>\n        <span class=\"n7-facet-header__secondary-text\" *ngIf=\"data.additionalText\">\n            {{data.additionalText}}\n        </span>\n    </span>\n    <span *ngIf=\"data.iconRight\" \n          class=\"n7-facet-header__icon-right {{ data.iconRight }}\"\n        (click)=\"onClick(data.payload)\">\n    </span>\n</div>"
                }] }
    ];
    FacetHeaderComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return FacetHeaderComponent;
}());
export { FacetHeaderComponent };
if (false) {
    /** @type {?} */
    FacetHeaderComponent.prototype.data;
    /** @type {?} */
    FacetHeaderComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mYWNldC1oZWFkZXIvZmFjZXQtaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQVlqRCxzQ0F5QkM7Ozs7OztJQXJCQyxvQ0FBa0I7Ozs7O0lBSWxCLGdDQUFhOzs7OztJQUliLDBDQUF3Qjs7Ozs7SUFJeEIscUNBQW1COzs7OztJQUluQixtQ0FBYzs7Ozs7SUFJZCxtQ0FBYzs7QUFHaEI7SUFBQTtJQWNBLENBQUM7Ozs7O0lBTEMsc0NBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixncUJBQWtDO2lCQUNuQzs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUFRUiwyQkFBQztDQUFBLEFBZEQsSUFjQztTQVZZLG9CQUFvQjs7O0lBQy9CLG9DQUFnQzs7SUFDaEMsb0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZBQ0VULUhFQURFUi50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgRmFjZXRIZWFkZXJDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBpY29uTGVmdCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgYWRkaXRpb25hbFRleHQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGljb25SaWdodCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUZhY2V0SGVhZGVyRGF0YSB7XG4gIC8qKlxuICAgKiB0aGUgaGVhZGVycyBsZWZ0bW9zdCBpY29uXG4gICAqL1xuICBpY29uTGVmdD86IHN0cmluZztcbiAgLyoqXG4gICAqIHRoZSB0aXRsZSB0ZXh0XG4gICAqL1xuICB0ZXh0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIHRleHQsIGRpc3BsYXllZCBvbiB0aGUgcmlnaHQgb2YgdGhlIHRleHRcbiAgICovXG4gIGFkZGl0aW9uYWxUZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICogdGhlIGhlYWRlcnMgcmlnaHRtb3N0IGljb25cbiAgICovXG4gIGljb25SaWdodD86IHN0cmluZztcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogYW55O1xuICAvKipcbiAgICogcGF5bG9hZCBmb3Igb25DbGljayBldmVudHNcbiAgICovXG4gIHBheWxvYWQ/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWZhY2V0LWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mYWNldC1oZWFkZXIuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRmFjZXRIZWFkZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJRmFjZXRIZWFkZXJEYXRhO1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cblxuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG59Il19