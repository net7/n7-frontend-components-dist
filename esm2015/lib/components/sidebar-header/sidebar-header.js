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
export function ISidebarHeaderData() { }
if (false) {
    /**
     * the headers leftmost icon
     * @type {?|undefined}
     */
    ISidebarHeaderData.prototype.iconLeft;
    /**
     * the title text
     * @type {?|undefined}
     */
    ISidebarHeaderData.prototype.text;
    /**
     * additional text, displayed on the right of the text
     * @type {?|undefined}
     */
    ISidebarHeaderData.prototype.additionalText;
    /**
     * the headers rightmost icon
     * @type {?|undefined}
     */
    ISidebarHeaderData.prototype.iconRight;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    ISidebarHeaderData.prototype.classes;
    /**
     * payload for onClick events
     * @type {?|undefined}
     */
    ISidebarHeaderData.prototype.payload;
}
export class SidebarHeaderComponent {
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
SidebarHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-sidebar-header',
                template: "<div *ngIf=\"data\" class=\"n7-sidebar-header {{ data.classes || ''}}\">\n    <span class=\"n7-sidebar-header__icon-left {{ data.iconLeft }}\" \n          *ngIf=\"data.iconLeft\">\n    </span>\n    <span class=\"n7-sidebar-header__text-wrapper\"\n          *ngIf=\"data.text || data.additionalText\">\n        <span class=\"n7-sidebar-header__text\">\n            {{data.text}}\n        </span>\n        <span class=\"n7-sidebar-header__secondary-text\" \n              *ngIf=\"data.additionalText\">\n            {{data.additionalText}}\n        </span>\n    </span>\n    <span *ngIf=\"data.iconRight\"\n          class=\"n7-sidebar-header__icon-right {{ data.iconRight }}\" \n          (click)=\"onClick(data.payload)\"></span>\n</div>"
            }] }
];
SidebarHeaderComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SidebarHeaderComponent.prototype.data;
    /** @type {?} */
    SidebarHeaderComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1oZWFkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NpZGViYXItaGVhZGVyL3NpZGViYXItaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQVlqRCx3Q0F5QkM7Ozs7OztJQXJCQyxzQ0FBa0I7Ozs7O0lBSWxCLGtDQUFjOzs7OztJQUlkLDRDQUF3Qjs7Ozs7SUFJeEIsdUNBQW1COzs7OztJQUluQixxQ0FBYzs7Ozs7SUFJZCxxQ0FBYzs7QUFPaEIsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFLakMsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQWJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3Qiw2dUJBQW9DO2FBQ3JDOzs7bUJBRUUsS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sc0NBQWtDOztJQUNsQyxzQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU0lERUJBUi1IRUFERVIudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFNpZGViYXJIZWFkZXJDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBpY29uTGVmdCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdGV4dCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgYWRkaXRpb25hbFRleHQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGljb25SaWdodCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVNpZGViYXJIZWFkZXJEYXRhIHtcbiAgLyoqXG4gICAqIHRoZSBoZWFkZXJzIGxlZnRtb3N0IGljb25cbiAgICovXG4gIGljb25MZWZ0Pzogc3RyaW5nO1xuICAvKipcbiAgICogdGhlIHRpdGxlIHRleHRcbiAgICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIHRleHQsIGRpc3BsYXllZCBvbiB0aGUgcmlnaHQgb2YgdGhlIHRleHRcbiAgICovXG4gIGFkZGl0aW9uYWxUZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICogdGhlIGhlYWRlcnMgcmlnaHRtb3N0IGljb25cbiAgICovXG4gIGljb25SaWdodD86IHN0cmluZztcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogYW55O1xuICAvKipcbiAgICogcGF5bG9hZCBmb3Igb25DbGljayBldmVudHNcbiAgICovXG4gIHBheWxvYWQ/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LXNpZGViYXItaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGViYXItaGVhZGVyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJIZWFkZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJU2lkZWJhckhlYWRlckRhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuIFxuICBvbkNsaWNrKHBheWxvYWQpe1xuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfSBcbn0iXX0=