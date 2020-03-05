/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/sidebar-header/sidebar-header.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// SIDEBAR-HEADER.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for SidebarHeaderComponent's "data"
 *
 * \@property iconLeft (optional)
 * \@property text (optional)
 * \@property additionalText (optional)
 * \@property iconRight (optional)
 * \@property classes (optional)
 * \@property payload (optional)
 * @record
 */
export function SidebarHeaderData() { }
if (false) {
    /**
     * the headers leftmost icon
     * @type {?|undefined}
     */
    SidebarHeaderData.prototype.iconLeft;
    /**
     * the title text
     * @type {?|undefined}
     */
    SidebarHeaderData.prototype.text;
    /**
     * additional text, displayed on the right of the text
     * @type {?|undefined}
     */
    SidebarHeaderData.prototype.additionalText;
    /**
     * the headers rightmost icon
     * @type {?|undefined}
     */
    SidebarHeaderData.prototype.iconRight;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    SidebarHeaderData.prototype.classes;
    /**
     * payload for onClick events
     * @type {?|undefined}
     */
    SidebarHeaderData.prototype.payload;
}
var SidebarHeaderComponent = /** @class */ (function () {
    function SidebarHeaderComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    SidebarHeaderComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    SidebarHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-sidebar-header',
                    template: "<div *ngIf=\"data\" class=\"n7-sidebar-header {{ data.classes || ''}}\">\r\n    <span class=\"n7-sidebar-header__icon-left {{ data.iconLeft }}\" \r\n          *ngIf=\"data.iconLeft\">\r\n    </span>\r\n    <span class=\"n7-sidebar-header__text-wrapper\"\r\n          *ngIf=\"data.text || data.additionalText\">\r\n        <span class=\"n7-sidebar-header__text\">\r\n            {{data.text}}\r\n        </span>\r\n        <span class=\"n7-sidebar-header__secondary-text\" \r\n              *ngIf=\"data.additionalText\">\r\n            {{data.additionalText}}\r\n        </span>\r\n    </span>\r\n    <span *ngIf=\"data.iconRight\"\r\n          class=\"n7-sidebar-header__icon-right {{ data.iconRight }}\" \r\n          (click)=\"onClick(data.payload)\"></span>\r\n</div>"
                }] }
    ];
    SidebarHeaderComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return SidebarHeaderComponent;
}());
export { SidebarHeaderComponent };
if (false) {
    /** @type {?} */
    SidebarHeaderComponent.prototype.data;
    /** @type {?} */
    SidebarHeaderComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1oZWFkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NpZGViYXItaGVhZGVyL3NpZGViYXItaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQVlqRCx1Q0F5QkM7Ozs7OztJQXJCQyxxQ0FBa0I7Ozs7O0lBSWxCLGlDQUFjOzs7OztJQUlkLDJDQUF3Qjs7Ozs7SUFJeEIsc0NBQW1COzs7OztJQUluQixvQ0FBYzs7Ozs7SUFJZCxvQ0FBYzs7QUFHaEI7SUFBQTtJQWVBLENBQUM7Ozs7O0lBTEMsd0NBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3Qiwrd0JBQW9DO2lCQUNyQzs7O3VCQUVFLEtBQUs7dUJBRUwsS0FBSzs7SUFRUiw2QkFBQztDQUFBLEFBZkQsSUFlQztTQVhZLHNCQUFzQjs7O0lBQ2pDLHNDQUFpQzs7SUFFakMsc0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gU0lERUJBUi1IRUFERVIudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIFNpZGViYXJIZWFkZXJDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgaWNvbkxlZnQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgdGV4dCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBhZGRpdGlvbmFsVGV4dCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpY29uUmlnaHQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lkZWJhckhlYWRlckRhdGEge1xyXG4gIC8qKlxyXG4gICAqIHRoZSBoZWFkZXJzIGxlZnRtb3N0IGljb25cclxuICAgKi9cclxuICBpY29uTGVmdD86IHN0cmluZztcclxuICAvKipcclxuICAgKiB0aGUgdGl0bGUgdGV4dFxyXG4gICAqL1xyXG4gIHRleHQ/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCB0ZXh0LCBkaXNwbGF5ZWQgb24gdGhlIHJpZ2h0IG9mIHRoZSB0ZXh0XHJcbiAgICovXHJcbiAgYWRkaXRpb25hbFRleHQ/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogdGhlIGhlYWRlcnMgcmlnaHRtb3N0IGljb25cclxuICAgKi9cclxuICBpY29uUmlnaHQ/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIHBheWxvYWQgZm9yIG9uQ2xpY2sgZXZlbnRzXHJcbiAgICovXHJcbiAgcGF5bG9hZD86IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1zaWRlYmFyLWhlYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGViYXItaGVhZGVyLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlYmFySGVhZGVyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBTaWRlYmFySGVhZGVyRGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuXHJcbiAgb25DbGljayhwYXlsb2FkKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcbn1cclxuIl19