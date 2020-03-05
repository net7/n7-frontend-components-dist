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
export class FacetHeaderComponent {
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
if (false) {
    /** @type {?} */
    FacetHeaderComponent.prototype.data;
    /** @type {?} */
    FacetHeaderComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mYWNldC1oZWFkZXIvZmFjZXQtaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQVlqRCxxQ0F5QkM7Ozs7OztJQXJCQyxtQ0FBa0I7Ozs7O0lBSWxCLCtCQUFhOzs7OztJQUliLHlDQUF3Qjs7Ozs7SUFJeEIsb0NBQW1COzs7OztJQUluQixrQ0FBYzs7Ozs7SUFJZCxrQ0FBYzs7QUFPaEIsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7SUFNL0IsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixnc0JBQWtDO2FBQ25DOzs7bUJBRUUsS0FBSzttQkFFTCxLQUFLOzs7O0lBRk4sb0NBQStCOztJQUUvQixvQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBGQUNFVC1IRUFERVIudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEZhY2V0SGVhZGVyQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGljb25MZWZ0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgYWRkaXRpb25hbFRleHQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaWNvblJpZ2h0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZhY2V0SGVhZGVyRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogdGhlIGhlYWRlcnMgbGVmdG1vc3QgaWNvblxyXG4gICAqL1xyXG4gIGljb25MZWZ0Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHRoZSB0aXRsZSB0ZXh0XHJcbiAgICovXHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgdGV4dCwgZGlzcGxheWVkIG9uIHRoZSByaWdodCBvZiB0aGUgdGV4dFxyXG4gICAqL1xyXG4gIGFkZGl0aW9uYWxUZXh0Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHRoZSBoZWFkZXJzIHJpZ2h0bW9zdCBpY29uXHJcbiAgICovXHJcbiAgaWNvblJpZ2h0Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IGFueTtcclxuICAvKipcclxuICAgKiBwYXlsb2FkIGZvciBvbkNsaWNrIGV2ZW50c1xyXG4gICAqL1xyXG4gIHBheWxvYWQ/OiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctZmFjZXQtaGVhZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmFjZXQtaGVhZGVyLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWNldEhlYWRlckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogRmFjZXRIZWFkZXJEYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG5cclxuICBvbkNsaWNrKHBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxufVxyXG4iXX0=