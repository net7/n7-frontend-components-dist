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
                    template: "<div class=\"n7-alert {{data.classes || ''}} {{ data.icon ? 'has-icon' : '' }}\" *ngIf=\"data\" >\n    <span class=\"n7-alert__icon {{data.icon}}\" *ngIf=\"data.icon\"></span>\n    <div class=\"n7-alert__text\" [innerHTML]=\"data.text\">\n    </div>\n    <span class=\"n7-alert__close-button n7-icon-close\" \n          *ngIf=\"data.hasCloseButton\" \n          (click)=\"onClick(data.payload)\"></span>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhakQsK0JBMEJDOzs7Ozs7SUF0QkMseUJBQWE7Ozs7O0lBSWIseUJBQWM7Ozs7O0lBSWQsNEJBQWlCOzs7OztJQUlqQiw0QkFBYzs7Ozs7SUFJZCwwQkFBWTs7Ozs7O0lBS1osbUNBQXlCOztBQUczQjtJQUFBO0lBY0EsQ0FBQzs7Ozs7SUFMQyxnQ0FBTzs7OztJQUFQLFVBQVEsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQix1YUFBMkI7aUJBQzVCOzs7dUJBRUUsS0FBSzt1QkFFTCxLQUFLOztJQU9SLHFCQUFDO0NBQUEsQUFkRCxJQWNDO1NBVlksY0FBYzs7O0lBQ3pCLDhCQUF5Qjs7SUFFekIsOEJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEFMRVJULnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBUYWdDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBib2R5IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaGFzQ2xvc2VCdXR0b24gKG9wdGlvbmFsKVxuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBbGVydERhdGEge1xuICAvKipcbiAgICogdGhlIGFsZXJ0J3MgYm9keS9tZXNzYWdlIHdoaWNoIGNhbiBpbmNsdWRlIGh0bWwgdGFnc1xuICAqL1xuICB0ZXh0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhbGVydCBpY29uIChvbiBsZWZ0IHNpZGUpXG4gICAqL1xuICBpY29uPzogc3RyaW5nO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAqL1xuICBwYXlsb2FkPzogYW55O1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvXG4gICAqL1xuICBfbWV0YT86IGFueTtcbiAgLyoqXG4gICAqIGluZGljYXRlcyB3aGV0aGVyIHRoZSBhbGVydCBpbmNsdWRlcyBhIGNsb3NlIGJ1dHRvbiAob24gdG9wLXJpZ2h0IGNvcm5lcilcbiAgICogb3Igbm90IChpZiBub3QgcHJvdmlkZWQgYXNzdW1lZCBhcyBmYWxzZSlcbiAgICovXG4gIGhhc0Nsb3NlQnV0dG9uPzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctYWxlcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBBbGVydERhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cbn1cbiJdfQ==