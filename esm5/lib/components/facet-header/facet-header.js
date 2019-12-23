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
                    template: "<div *ngIf=\"data\" class=\"n7-facet-header {{ data.classes || '' }}\">\r\n    <span class=\"n7-facet-header__icon-left {{ data.iconLeft }}\" \r\n          *ngIf=\"data.iconLeft\">\r\n    </span>\r\n    <span class=\"n7-facet-header__text-wrapper\">\r\n        <span class=\"n7-facet-header__text\">\r\n            {{data.text}}\r\n        </span>\r\n        <span class=\"n7-facet-header__secondary-text\" *ngIf=\"data.additionalText\">\r\n            {{data.additionalText}}\r\n        </span>\r\n    </span>\r\n    <span *ngIf=\"data.iconRight\" \r\n          class=\"n7-facet-header__icon-right {{ data.iconRight }}\"\r\n        (click)=\"onClick(data.payload)\">\r\n    </span>\r\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mYWNldC1oZWFkZXIvZmFjZXQtaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQVlqRCxzQ0F5QkM7Ozs7OztJQXJCQyxvQ0FBa0I7Ozs7O0lBSWxCLGdDQUFhOzs7OztJQUliLDBDQUF3Qjs7Ozs7SUFJeEIscUNBQW1COzs7OztJQUluQixtQ0FBYzs7Ozs7SUFJZCxtQ0FBYzs7QUFHaEI7SUFBQTtJQWNBLENBQUM7Ozs7O0lBTEMsc0NBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixnc0JBQWtDO2lCQUNuQzs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUFRUiwyQkFBQztDQUFBLEFBZEQsSUFjQztTQVZZLG9CQUFvQjs7O0lBQy9CLG9DQUFnQzs7SUFDaEMsb0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRkFDRVQtSEVBREVSLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBGYWNldEhlYWRlckNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBpY29uTGVmdCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGFkZGl0aW9uYWxUZXh0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGljb25SaWdodCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRmFjZXRIZWFkZXJEYXRhIHtcclxuICAvKipcclxuICAgKiB0aGUgaGVhZGVycyBsZWZ0bW9zdCBpY29uXHJcbiAgICovXHJcbiAgaWNvbkxlZnQ/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogdGhlIHRpdGxlIHRleHRcclxuICAgKi9cclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCB0ZXh0LCBkaXNwbGF5ZWQgb24gdGhlIHJpZ2h0IG9mIHRoZSB0ZXh0XHJcbiAgICovXHJcbiAgYWRkaXRpb25hbFRleHQ/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogdGhlIGhlYWRlcnMgcmlnaHRtb3N0IGljb25cclxuICAgKi9cclxuICBpY29uUmlnaHQ/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIHBheWxvYWQgZm9yIG9uQ2xpY2sgZXZlbnRzXHJcbiAgICovXHJcbiAgcGF5bG9hZD86IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1mYWNldC1oZWFkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mYWNldC1oZWFkZXIuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhY2V0SGVhZGVyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBJRmFjZXRIZWFkZXJEYXRhO1xyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZCkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgfVxyXG59Il19