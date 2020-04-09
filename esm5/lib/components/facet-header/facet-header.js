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
export function FacetHeaderData() { }
if (false) {
    /**
     * the headers leftmost icon
     * @type {?|undefined}
     */
    FacetHeaderData.prototype.iconLeft;
    /**
     * the title text
     * @type {?}
     */
    FacetHeaderData.prototype.text;
    /**
     * additional text, displayed on the right of the text
     * @type {?|undefined}
     */
    FacetHeaderData.prototype.additionalText;
    /**
     * the headers rightmost icon
     * @type {?|undefined}
     */
    FacetHeaderData.prototype.iconRight;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    FacetHeaderData.prototype.classes;
    /**
     * payload for onClick events
     * @type {?|undefined}
     */
    FacetHeaderData.prototype.payload;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mYWNldC1oZWFkZXIvZmFjZXQtaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQVlqRCxxQ0F5QkM7Ozs7OztJQXJCQyxtQ0FBa0I7Ozs7O0lBSWxCLCtCQUFhOzs7OztJQUliLHlDQUF3Qjs7Ozs7SUFJeEIsb0NBQW1COzs7OztJQUluQixrQ0FBYzs7Ozs7SUFJZCxrQ0FBYzs7QUFHaEI7SUFBQTtJQWVBLENBQUM7Ozs7O0lBTEMsc0NBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixncUJBQWtDO2lCQUNuQzs7O3VCQUVFLEtBQUs7dUJBRUwsS0FBSzs7SUFRUiwyQkFBQztDQUFBLEFBZkQsSUFlQztTQVhZLG9CQUFvQjs7O0lBQy9CLG9DQUErQjs7SUFFL0Isb0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZBQ0VULUhFQURFUi50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgRmFjZXRIZWFkZXJDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBpY29uTGVmdCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgYWRkaXRpb25hbFRleHQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGljb25SaWdodCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRmFjZXRIZWFkZXJEYXRhIHtcbiAgLyoqXG4gICAqIHRoZSBoZWFkZXJzIGxlZnRtb3N0IGljb25cbiAgICovXG4gIGljb25MZWZ0Pzogc3RyaW5nO1xuICAvKipcbiAgICogdGhlIHRpdGxlIHRleHRcbiAgICovXG4gIHRleHQ6IHN0cmluZztcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgdGV4dCwgZGlzcGxheWVkIG9uIHRoZSByaWdodCBvZiB0aGUgdGV4dFxuICAgKi9cbiAgYWRkaXRpb25hbFRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aGUgaGVhZGVycyByaWdodG1vc3QgaWNvblxuICAgKi9cbiAgaWNvblJpZ2h0Pzogc3RyaW5nO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBhbnk7XG4gIC8qKlxuICAgKiBwYXlsb2FkIGZvciBvbkNsaWNrIGV2ZW50c1xuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctZmFjZXQtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZhY2V0LWhlYWRlci5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBGYWNldEhlYWRlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IEZhY2V0SGVhZGVyRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cblxuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG59XG4iXX0=