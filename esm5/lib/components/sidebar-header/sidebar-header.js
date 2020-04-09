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
                    template: "<div *ngIf=\"data\" class=\"n7-sidebar-header {{ data.classes || ''}}\">\n    <span class=\"n7-sidebar-header__icon-left {{ data.iconLeft }}\" \n          *ngIf=\"data.iconLeft\">\n    </span>\n    <span class=\"n7-sidebar-header__text-wrapper\"\n          *ngIf=\"data.text || data.additionalText\">\n        <span class=\"n7-sidebar-header__text\">\n            {{data.text}}\n        </span>\n        <span class=\"n7-sidebar-header__secondary-text\" \n              *ngIf=\"data.additionalText\">\n            {{data.additionalText}}\n        </span>\n    </span>\n    <span *ngIf=\"data.iconRight\"\n          class=\"n7-sidebar-header__icon-right {{ data.iconRight }}\" \n          (click)=\"onClick(data.payload)\"></span>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1oZWFkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NpZGViYXItaGVhZGVyL3NpZGViYXItaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQVlqRCx1Q0F5QkM7Ozs7OztJQXJCQyxxQ0FBa0I7Ozs7O0lBSWxCLGlDQUFjOzs7OztJQUlkLDJDQUF3Qjs7Ozs7SUFJeEIsc0NBQW1COzs7OztJQUluQixvQ0FBYzs7Ozs7SUFJZCxvQ0FBYzs7QUFHaEI7SUFBQTtJQWVBLENBQUM7Ozs7O0lBTEMsd0NBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3Qiw2dUJBQW9DO2lCQUNyQzs7O3VCQUVFLEtBQUs7dUJBRUwsS0FBSzs7SUFRUiw2QkFBQztDQUFBLEFBZkQsSUFlQztTQVhZLHNCQUFzQjs7O0lBQ2pDLHNDQUFpQzs7SUFFakMsc0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNJREVCQVItSEVBREVSLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBTaWRlYmFySGVhZGVyQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgaWNvbkxlZnQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHRleHQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGFkZGl0aW9uYWxUZXh0IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpY29uUmlnaHQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNpZGViYXJIZWFkZXJEYXRhIHtcbiAgLyoqXG4gICAqIHRoZSBoZWFkZXJzIGxlZnRtb3N0IGljb25cbiAgICovXG4gIGljb25MZWZ0Pzogc3RyaW5nO1xuICAvKipcbiAgICogdGhlIHRpdGxlIHRleHRcbiAgICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIHRleHQsIGRpc3BsYXllZCBvbiB0aGUgcmlnaHQgb2YgdGhlIHRleHRcbiAgICovXG4gIGFkZGl0aW9uYWxUZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICogdGhlIGhlYWRlcnMgcmlnaHRtb3N0IGljb25cbiAgICovXG4gIGljb25SaWdodD86IHN0cmluZztcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogYW55O1xuICAvKipcbiAgICogcGF5bG9hZCBmb3Igb25DbGljayBldmVudHNcbiAgICovXG4gIHBheWxvYWQ/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LXNpZGViYXItaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGViYXItaGVhZGVyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJIZWFkZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBTaWRlYmFySGVhZGVyRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cblxuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG59XG4iXX0=