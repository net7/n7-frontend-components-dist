/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// ALERT.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for TagComponent's "data"
 *
 * \@property body (required)
 * \@property icon (optional)
 * \@property classes (optional)
 * \@property payload (optional)
 * \@property _meta (optional)
 * \@property hasCloseButton (optional)
 *
 * @record
 */
export function IAlertData() { }
if (false) {
    /**
     * the alert's body/message which can include html tags
     * @type {?}
     */
    IAlertData.prototype.text;
    /**
     * alert icon (on left side)
     * @type {?|undefined}
     */
    IAlertData.prototype.icon;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    IAlertData.prototype.classes;
    /**
     * action click's payload
     * @type {?|undefined}
     */
    IAlertData.prototype.payload;
    /**
     * additional info
     * @type {?|undefined}
     */
    IAlertData.prototype._meta;
    /**
     * indicates whether the alert includes a close button (on top-right corner)
     * or not (if not provided assumed as false)
     * @type {?|undefined}
     */
    IAlertData.prototype.hasCloseButton;
}
export class AlertComponent {
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
AlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-alert',
                template: "<div class=\"n7-alert {{data.classes || ''}} {{ data.icon ? 'has-icon' : '' }}\" *ngIf=\"data\" >\r\n    <span class=\"n7-alert__icon {{data.icon}}\" *ngIf=\"data.icon\"></span>\r\n    <div class=\"n7-alert__text\" [innerHTML]=\"data.text\">\r\n    </div>\r\n    <span class=\"n7-alert__close-button n7-icon-close\" \r\n          *ngIf=\"data.hasCloseButton\" \r\n          (click)=\"onClick(data.payload)\"></span>\r\n</div>"
            }] }
];
AlertComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AlertComponent.prototype.data;
    /** @type {?} */
    AlertComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWFqRCxnQ0EwQkM7Ozs7OztJQXRCQywwQkFBYTs7Ozs7SUFJYiwwQkFBYzs7Ozs7SUFJZCw2QkFBaUI7Ozs7O0lBSWpCLDZCQUFjOzs7OztJQUlkLDJCQUFZOzs7Ozs7SUFLWixvQ0FBeUI7O0FBTzNCLE1BQU0sT0FBTyxjQUFjOzs7OztJQUl6QixPQUFPLENBQUMsT0FBTztRQUNiLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBWkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixxYkFBMkI7YUFDNUI7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETiw4QkFBMEI7O0lBQzFCLDhCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEFMRVJULnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4gLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgVGFnQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICogXHJcbiAqIEBwcm9wZXJ0eSBib2R5IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGhhc0Nsb3NlQnV0dG9uIChvcHRpb25hbClcclxuICogXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElBbGVydERhdGEge1xyXG4gIC8qKlxyXG4gICAqIHRoZSBhbGVydCdzIGJvZHkvbWVzc2FnZSB3aGljaCBjYW4gaW5jbHVkZSBodG1sIHRhZ3NcclxuICAqL1xyXG4gIHRleHQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiBhbGVydCBpY29uIChvbiBsZWZ0IHNpZGUpXHJcbiAgICovXHJcbiAgaWNvbj86IHN0cmluZztcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICAqL1xyXG4gIHBheWxvYWQ/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGFsZXJ0IGluY2x1ZGVzIGEgY2xvc2UgYnV0dG9uIChvbiB0b3AtcmlnaHQgY29ybmVyKVxyXG4gICAqIG9yIG5vdCAoaWYgbm90IHByb3ZpZGVkIGFzc3VtZWQgYXMgZmFsc2UpXHJcbiAgICovXHJcbiAgaGFzQ2xvc2VCdXR0b24/OiBib29sZWFuO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWFsZXJ0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBJQWxlcnREYXRhO1xyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgb25DbGljayhwYXlsb2FkKXtcclxuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgfVxyXG4gIFxyXG59Il19