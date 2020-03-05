/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/alert/alert.ts
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
export function AlertData() { }
if (false) {
    /**
     * the alert's body/message which can include html tags
     * @type {?}
     */
    AlertData.prototype.text;
    /**
     * alert icon (on left side)
     * @type {?|undefined}
     */
    AlertData.prototype.icon;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    AlertData.prototype.classes;
    /**
     * action click's payload
     * @type {?|undefined}
     */
    AlertData.prototype.payload;
    /**
     * additional info
     * @type {?|undefined}
     */
    AlertData.prototype._meta;
    /**
     * indicates whether the alert includes a close button (on top-right corner)
     * or not (if not provided assumed as false)
     * @type {?|undefined}
     */
    AlertData.prototype.hasCloseButton;
}
var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    AlertComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
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
    return AlertComponent;
}());
export { AlertComponent };
if (false) {
    /** @type {?} */
    AlertComponent.prototype.data;
    /** @type {?} */
    AlertComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhakQsK0JBMEJDOzs7Ozs7SUF0QkMseUJBQWE7Ozs7O0lBSWIseUJBQWM7Ozs7O0lBSWQsNEJBQWlCOzs7OztJQUlqQiw0QkFBYzs7Ozs7SUFJZCwwQkFBWTs7Ozs7O0lBS1osbUNBQXlCOztBQUczQjtJQUFBO0lBY0EsQ0FBQzs7Ozs7SUFMQyxnQ0FBTzs7OztJQUFQLFVBQVEsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixxYkFBMkI7aUJBQzVCOzs7dUJBRUUsS0FBSzt1QkFFTCxLQUFLOztJQU9SLHFCQUFDO0NBQUEsQUFkRCxJQWNDO1NBVlksY0FBYzs7O0lBQ3pCLDhCQUF5Qjs7SUFFekIsOEJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQUxFUlQudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIFRhZ0NvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBib2R5IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGhhc0Nsb3NlQnV0dG9uIChvcHRpb25hbClcclxuICpcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnREYXRhIHtcclxuICAvKipcclxuICAgKiB0aGUgYWxlcnQncyBib2R5L21lc3NhZ2Ugd2hpY2ggY2FuIGluY2x1ZGUgaHRtbCB0YWdzXHJcbiAgKi9cclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWxlcnQgaWNvbiAob24gbGVmdCBzaWRlKVxyXG4gICAqL1xyXG4gIGljb24/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcclxuICAgKi9cclxuICBwYXlsb2FkPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xyXG4gICAqL1xyXG4gIF9tZXRhPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIGluZGljYXRlcyB3aGV0aGVyIHRoZSBhbGVydCBpbmNsdWRlcyBhIGNsb3NlIGJ1dHRvbiAob24gdG9wLXJpZ2h0IGNvcm5lcilcclxuICAgKiBvciBub3QgKGlmIG5vdCBwcm92aWRlZCBhc3N1bWVkIGFzIGZhbHNlKVxyXG4gICAqL1xyXG4gIGhhc0Nsb3NlQnV0dG9uPzogYm9vbGVhbjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1hbGVydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogQWxlcnREYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZCkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==