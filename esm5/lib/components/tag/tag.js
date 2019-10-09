/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// TAG.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for TagComponent's "data"
 *
 * \@property text (required)
 * \@property label (optional)
 * \@property icon (optional)
 * \@property classes (optional)
 * \@property payload (optional)
 * \@property _meta (optional)
 *
 * @record
 */
export function ITagData() { }
if (false) {
    /**
     * tag's label
     * @type {?|undefined}
     */
    ITagData.prototype.label;
    /**
     * text visualized on the tag
     * @type {?}
     */
    ITagData.prototype.text;
    /**
     * action icon (on right side)
     * @type {?|undefined}
     */
    ITagData.prototype.icon;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    ITagData.prototype.classes;
    /**
     * action click's payload
     * @type {?|undefined}
     */
    ITagData.prototype.payload;
    /**
     * additional info
     * @type {?|undefined}
     */
    ITagData.prototype._meta;
}
var TagComponent = /** @class */ (function () {
    function TagComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    TagComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    TagComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-tag',
                    template: "<span class=\"n7-tag {{data.classes || ''}}\" *ngIf=\"data\">\r\n    <span class=\"n7-tag__label\" *ngIf=\"data.label\">\r\n        {{ data.label }}\r\n    </span>\r\n    <span class=\"n7-tag__text\" *ngIf=\"data.text\">\r\n        {{ data.text }}\r\n    </span>\r\n    <span class=\"n7-tag__icon {{data.icon}}\" *ngIf=\"data.icon\" (click)=\"onClick(data.payload)\"></span>\r\n</span>"
                }] }
    ];
    TagComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return TagComponent;
}());
export { TagComponent };
if (false) {
    /** @type {?} */
    TagComponent.prototype.data;
    /** @type {?} */
    TagComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWcvdGFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWFqRCw4QkF5QkM7Ozs7OztJQXJCRyx5QkFBZTs7Ozs7SUFJZix3QkFBYTs7Ozs7SUFJYix3QkFBYzs7Ozs7SUFJZCwyQkFBaUI7Ozs7O0lBSWpCLDJCQUFjOzs7OztJQUlkLHlCQUFZOztBQUdoQjtJQUFBO0lBWUEsQ0FBQzs7Ozs7SUFKRyw4QkFBTzs7OztJQUFQLFVBQVEsT0FBTztRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Z0JBWEosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxRQUFRO29CQUNsQiw2WUFBeUI7aUJBQzVCOzs7dUJBRUksS0FBSzt1QkFDTCxLQUFLOztJQU1WLG1CQUFDO0NBQUEsQUFaRCxJQVlDO1NBUlksWUFBWTs7O0lBQ3JCLDRCQUErQjs7SUFDL0IsNEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gVEFHLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBUYWdDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKiBcclxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgbGFiZWwgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRhZ0RhdGEge1xyXG4gICAgLyoqXHJcbiAgICAgKiB0YWcncyBsYWJlbFxyXG4gICAgICovXHJcbiAgICBsYWJlbD86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogdGV4dCB2aXN1YWxpemVkIG9uIHRoZSB0YWdcclxuICAgICAqL1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhY3Rpb24gaWNvbiAob24gcmlnaHQgc2lkZSlcclxuICAgICAqL1xyXG4gICAgaWNvbj86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgICAqL1xyXG4gICAgY2xhc3Nlcz86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICAgICovXHJcbiAgICBwYXlsb2FkPzogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgICAqL1xyXG4gICAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduNy10YWcnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RhZy5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFnQ29tcG9uZW50ICB7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZGF0YTogSVRhZ0RhdGE7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZW1pdDogYW55O1xyXG5cclxuICAgIG9uQ2xpY2socGF5bG9hZCl7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgICAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgICB9XHJcbn0iXX0=