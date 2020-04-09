/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/toast/toast.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// TOAST.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for ToastComponent's "data"
 *
 * \@property toasts (required)
 * \@property classes (optional)
 * @record
 */
export function ToastData() { }
if (false) {
    /** @type {?} */
    ToastData.prototype.toasts;
    /** @type {?|undefined} */
    ToastData.prototype.classes;
}
/**
 * Interface for the single ToastComponent's "Box"
 *
 * \@property classes (required)
 * \@property timer (optional)
 * \@property closeIcon (optional)
 * - icon (required)
 * - payload (required)
 * \@property title (optional)
 * \@property text (optional)
 * \@property actions (optional)
 * @record
 */
export function ToastBox() { }
if (false) {
    /**
     * requires: [is-success, is-warning, is-error] + optional additional html classes
     * @type {?}
     */
    ToastBox.prototype.classes;
    /**
     * larger, title text
     * @type {?|undefined}
     */
    ToastBox.prototype.title;
    /**
     * the toast's body text
     * @type {?|undefined}
     */
    ToastBox.prototype.text;
    /**
     * 'X' icon, to dismiss/close the toast
     * ( n7-icon-cross )
     *
     *  Each icon requires it's onClick payload
     * @type {?|undefined}
     */
    ToastBox.prototype.closeIcon;
    /**
     * the toast's optional buttons
     * suggestion: don't use more than 2 actions
     * @type {?|undefined}
     */
    ToastBox.prototype.actions;
    /**
     * additional info
     * @type {?|undefined}
     */
    ToastBox.prototype._meta;
}
/**
 * Interface for the single ToastComponent's "Action"
 *
 * \@property text (required)
 * \@property payload (required)
 * \@property classes (optional)
 * @record
 */
export function ToastAction() { }
if (false) {
    /**
     * the button's rendered text
     * @type {?}
     */
    ToastAction.prototype.text;
    /**
     * the button's onClick payload
     * @type {?}
     */
    ToastAction.prototype.payload;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    ToastAction.prototype.classes;
}
export class ToastComponent {
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
ToastComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-toast',
                template: "<div *ngIf=\"data\" class=\"n7-toast\">\n    <div class=\"n7-toast__column {{data.classes || ''}}\">\n\n        <!-- Toast boxes -->\n        <div class=\"n7-toast__box\" \n             *ngFor=\"let box of data.toasts\"\n             [ngClass]=\"{ 'has-actions' : !! (box.actions || box.closeIcon) }\">\n        \n            <!-- Toast text -->\n            <div class=\"n7-toast__content {{box.classes || ''}}\" *ngIf=\"box.title || box.text\">\n                <span class=\"n7-toast__title\" *ngIf=\"box.title\">{{ box.title }}</span>\n                <span class=\"n7-toast__text\" *ngIf=\"box.text\">{{ box.text }}</span>\n            </div>\n\n            <!-- Toast actions -->\n            <div class=\"n7-toast__actions\" *ngIf=\"box.actions || box.closeIcon\">\n                <span\n                class=\"n7-toast__closeIcon {{ box.closeIcon.icon }}\" \n                *ngIf=\"box.closeIcon\" \n                (click)=\"onClick(box.closeIcon.payload)\">\n                </span>\n                <span class=\"n7-toast__action-wrapper\" *ngIf=\"box.actions\">\n                    <span class=\"n7-toast__action-content\" *ngFor=\"let action of box.actions\">\n                        <button class=\"n7-toast__action-button n7-btn n7-btn-s {{action.classes || ''}}\"\n                                (click)=\"onClick(action.payload)\">\n                                {{action.text}}\n                        </button>\n                    </span>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>"
            }] }
];
ToastComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ToastComponent.prototype.data;
    /** @type {?} */
    ToastComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RvYXN0L3RvYXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBU2pELCtCQUdDOzs7SUFGQywyQkFBbUI7O0lBQ25CLDRCQUFpQjs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JuQiw4QkFnQ0M7Ozs7OztJQTVCQywyQkFBZ0I7Ozs7O0lBSWhCLHlCQUFlOzs7OztJQUlmLHdCQUFjOzs7Ozs7OztJQU9kLDZCQUdFOzs7Ozs7SUFLRiwyQkFBd0I7Ozs7O0lBSXhCLHlCQUFZOzs7Ozs7Ozs7O0FBV2QsaUNBYUM7Ozs7OztJQVRDLDJCQUFhOzs7OztJQUliLDhCQUFhOzs7OztJQUliLDhCQUFpQjs7QUFPbkIsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBS3pCLE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUFiRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLHdoREFBMkI7YUFDNUI7OzttQkFFRSxLQUFLO21CQUVMLEtBQUs7Ozs7SUFGTiw4QkFBeUI7O0lBRXpCLDhCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUT0FTVC50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgVG9hc3RDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSB0b2FzdHMgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9hc3REYXRhIHsgLy8gdG9hc3QgY29sdW1uIHdyYXBwZXJcbiAgdG9hc3RzOiBUb2FzdEJveFtdO1xuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgdGhlIHNpbmdsZSBUb2FzdENvbXBvbmVudCdzIFwiQm94XCJcbiAqXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgdGltZXIgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsb3NlSWNvbiAob3B0aW9uYWwpXG4gKiAtIGljb24gKHJlcXVpcmVkKVxuICogLSBwYXlsb2FkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSB0aXRsZSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdGV4dCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgYWN0aW9ucyAob3B0aW9uYWwpXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBUb2FzdEJveCB7XG4gIC8qKlxuICAgKiByZXF1aXJlczogW2lzLXN1Y2Nlc3MsIGlzLXdhcm5pbmcsIGlzLWVycm9yXSArIG9wdGlvbmFsIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBsYXJnZXIsIHRpdGxlIHRleHRcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICogdGhlIHRvYXN0J3MgYm9keSB0ZXh0XG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICogJ1gnIGljb24sIHRvIGRpc21pc3MvY2xvc2UgdGhlIHRvYXN0XG4gICAqICggbjctaWNvbi1jcm9zcyApXG4gICAqXG4gICAqICBFYWNoIGljb24gcmVxdWlyZXMgaXQncyBvbkNsaWNrIHBheWxvYWRcbiAgICovXG4gIGNsb3NlSWNvbj86IHtcbiAgICBpY29uOiBzdHJpbmc7XG4gICAgcGF5bG9hZDogc3RyaW5nO1xuICB9O1xuICAvKipcbiAgICogdGhlIHRvYXN0J3Mgb3B0aW9uYWwgYnV0dG9uc1xuICAgKiBzdWdnZXN0aW9uOiBkb24ndCB1c2UgbW9yZSB0aGFuIDIgYWN0aW9uc1xuICAgKi9cbiAgYWN0aW9ucz86IFRvYXN0QWN0aW9uW107XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgdGhlIHNpbmdsZSBUb2FzdENvbXBvbmVudCdzIFwiQWN0aW9uXCJcbiAqXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBUb2FzdEFjdGlvbiB7XG4gIC8qKlxuICAgKiB0aGUgYnV0dG9uJ3MgcmVuZGVyZWQgdGV4dFxuICAgKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKipcbiAgICogdGhlIGJ1dHRvbidzIG9uQ2xpY2sgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZDogYW55O1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LXRvYXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvYXN0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogVG9hc3REYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG59XG4iXX0=