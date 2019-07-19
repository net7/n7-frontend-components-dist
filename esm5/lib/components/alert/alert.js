/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
/**
 * AlertComponent <n7-alert>
 *
 * \@example
 * ```html
 * <n7-alert [data]="{
 *        text: 'This is an alert for the user with some <strong>bold</strong> and <i>italic</i> text.',
 *        hasCloseButton: true,
 *        icon: "n7-icon-bell",
 *        payload: "close-the-alert request",
 *        classes: "is-warning"
 *    }">
 * </n7-alert>
 * ```
 */
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
                    template: "<div class=\"n7-alert {{data.classes || ''}} {{ data.icon ? 'has-icon' : '' }}\" *ngIf=\"data\" >\n    <span class=\"n7-alert__icon {{data.icon}}\" *ngIf=\"data.icon\"></span>\n    <div class=\"n7-alert__text\" [innerHTML]=\"data.text\">\n    </div>\n    <span class=\"n7-alert__close-button n7-icon-close\" *ngIf=\"data.hasCloseButton\" (click)=\"onClick(data.payload)\"></span>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWFqRCxnQ0EwQkM7Ozs7OztJQXRCQywwQkFBYTs7Ozs7SUFJYiwwQkFBYzs7Ozs7SUFJZCw2QkFBaUI7Ozs7O0lBSWpCLDZCQUFjOzs7OztJQUlkLDJCQUFZOzs7Ozs7SUFLWixvQ0FBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0IzQjtJQUFBO0lBY0EsQ0FBQzs7Ozs7SUFOQyxnQ0FBTzs7OztJQUFQLFVBQVEsT0FBTztRQUNiLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQiwrWUFBMkI7aUJBQzVCOzs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLOztJQVFSLHFCQUFDO0NBQUEsQUFkRCxJQWNDO1NBVlksY0FBYzs7O0lBQ3pCLDhCQUEwQjs7SUFDMUIsOEJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEFMRVJULnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbiAvKipcbiAqIEludGVyZmFjZSBmb3IgVGFnQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqIFxuICogQHByb3BlcnR5IGJvZHkgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBoYXNDbG9zZUJ1dHRvbiAob3B0aW9uYWwpXG4gKiBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJQWxlcnREYXRhIHtcbiAgLyoqXG4gICAqIHRoZSBhbGVydCdzIGJvZHkvbWVzc2FnZSB3aGljaCBjYW4gaW5jbHVkZSBodG1sIHRhZ3NcbiAgKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKipcbiAgICogYWxlcnQgaWNvbiAob24gbGVmdCBzaWRlKVxuICAgKi9cbiAgaWNvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG4gIC8qKlxuICAgKiBpbmRpY2F0ZXMgd2hldGhlciB0aGUgYWxlcnQgaW5jbHVkZXMgYSBjbG9zZSBidXR0b24gKG9uIHRvcC1yaWdodCBjb3JuZXIpXG4gICAqIG9yIG5vdCAoaWYgbm90IHByb3ZpZGVkIGFzc3VtZWQgYXMgZmFsc2UpXG4gICAqL1xuICBoYXNDbG9zZUJ1dHRvbj86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQWxlcnRDb21wb25lbnQgPG43LWFsZXJ0PlxuICogXG4gKiBAZXhhbXBsZVxuICogYGBgaHRtbFxuICogPG43LWFsZXJ0IFtkYXRhXT1cIntcbiAqICAgICAgICB0ZXh0OiAnVGhpcyBpcyBhbiBhbGVydCBmb3IgdGhlIHVzZXIgd2l0aCBzb21lIDxzdHJvbmc+Ym9sZDwvc3Ryb25nPiBhbmQgPGk+aXRhbGljPC9pPiB0ZXh0LicsXG4gKiAgICAgICAgaGFzQ2xvc2VCdXR0b246IHRydWUsXG4gKiAgICAgICAgaWNvbjogXCJuNy1pY29uLWJlbGxcIixcbiAqICAgICAgICBwYXlsb2FkOiBcImNsb3NlLXRoZS1hbGVydCByZXF1ZXN0XCIsXG4gKiAgICAgICAgY2xhc3NlczogXCJpcy13YXJuaW5nXCJcbiAqICAgIH1cIj5cbiAqIDwvbjctYWxlcnQ+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctYWxlcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJQWxlcnREYXRhO1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DbGljayhwYXlsb2FkKXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cbiAgXG59Il19