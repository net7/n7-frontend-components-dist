/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/data-widget/data-widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// INDEX.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for an index component Item
 *
 * \@property icon (optional)
 * \@property text (required)
 * \@property subtitle (required)
 * - text (required)
 * - icon (optional)
 * - grow (required)
 * @record
 */
export function DataWidgetData() { }
if (false) {
    /**
     * item icon
     * @type {?|undefined}
     */
    DataWidgetData.prototype.icon;
    /**
     * item text
     * @type {?|undefined}
     */
    DataWidgetData.prototype.text;
    /** @type {?|undefined} */
    DataWidgetData.prototype.subtitle;
    /** @type {?|undefined} */
    DataWidgetData.prototype.classes;
    /**
     * mouse event payload
     * @type {?}
     */
    DataWidgetData.prototype.payload;
    /** @type {?|undefined} */
    DataWidgetData.prototype._meta;
}
export class DataWidgetComponent {
    /**
     * @param {?} payload
     * @return {?}
     */
    onMouseEnter(payload) {
        if (!this.emit)
            return;
        this.emit('mouseenter', payload);
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onMouseLeave(payload) {
        if (!this.emit)
            return;
        this.emit('mouseleave', payload);
    }
}
DataWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-data-widget',
                template: "<div *ngIf=\"data\" class=\"n7-data-widget {{ data.classes || '' }}\">\r\n    <div class=\"n7-data-widget__main\">\r\n        <span *ngIf=\"data.icon\"\r\n              class=\"n7-data-widget__main-icon {{data.icon}}\"\r\n              (mouseenter)=\"onMouseEnter(data.payload)\"\r\n              (mouseleave)=\"onMouseLeave(data.payload)\">\r\n        </span>\r\n        <h2 class=\"n7-data-widget__main-title\"\r\n            [innerHTML]=\"data.text\">\r\n        </h2>\r\n    </div>\r\n    \r\n    <div *ngIf=\"data.subtitle && (data.subtitle.text || data.subtitle.icon || data.subtitle.value)\"\r\n         class=\"n7-data-widget__sub\">\r\n        <p *ngIf=\"data.subtitle.text\"\r\n           class=\"n7-data-widget__sub-title\"\r\n           [innerHTML]=\"data.subtitle.text\">\r\n        </p>\r\n        <span *ngIf=\"data.subtitle.icon || data.subtitle.value\"\r\n              class=\"n7-data-widget__sub-info\"\r\n              (mouseenter)=\"onMouseEnter(data.subtitle.payload)\"\r\n              (mouseleave)=\"onMouseLeave(data.subtitle.payload)\">\r\n                <span *ngIf=\"data.subtitle.icon\"\r\n                class=\"n7-data-widget__sub-info-icon {{data.subtitle.icon}}\">\r\n          </span>\r\n          <span *ngIf=\"data.subtitle.value\"\r\n                class=\"n7-data-widget__sub-info-label\"\r\n                [innerHTML]=\"data.subtitle.value\">\r\n          </span>\r\n        </span>\r\n    </div>\r\n</div>\r\n"
            }] }
];
DataWidgetComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DataWidgetComponent.prototype.data;
    /** @type {?} */
    DataWidgetComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS13aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGEtd2lkZ2V0L2RhdGEtd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQWFqRCxvQ0E4QkM7Ozs7OztJQTFCQyw4QkFBYzs7Ozs7SUFJZCw4QkFBYzs7SUFDZCxrQ0FjRTs7SUFDRixpQ0FBaUI7Ozs7O0lBSWpCLGlDQUFhOztJQUNiLCtCQUFZOztBQVFkLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBSzlCLFlBQVksQ0FBQyxPQUFPO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsT0FBTztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIseTdDQUFpQzthQUNsQzs7O21CQUdFLEtBQUs7bUJBRUwsS0FBSzs7OztJQUZOLG1DQUE4Qjs7SUFFOUIsbUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gSU5ERVgudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGFuIGluZGV4IGNvbXBvbmVudCBJdGVtXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgc3VidGl0bGUgKHJlcXVpcmVkKVxyXG4gKiAtIHRleHQgKHJlcXVpcmVkKVxyXG4gKiAtIGljb24gKG9wdGlvbmFsKVxyXG4gKiAtIGdyb3cgKHJlcXVpcmVkKVxyXG4gKi9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVdpZGdldERhdGEge1xyXG4gIC8qKlxyXG4gICAqIGl0ZW0gaWNvblxyXG4gICAqL1xyXG4gIGljb24/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogaXRlbSB0ZXh0XHJcbiAgICovXHJcbiAgdGV4dD86IHN0cmluZztcclxuICBzdWJ0aXRsZT86IHtcclxuICAgIC8qKlxyXG4gICAgICogaXRlbSBzdWJ0aXRsZVxyXG4gICAgICovXHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGl0ZW0gc3VidGl0bGUgaWNvblxyXG4gICAgICovXHJcbiAgICBpY29uOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIHBlcmNlbnQgcmF0ZVxyXG4gICAgICovXHJcbiAgICB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nO1xyXG4gICAgcGF5bG9hZDogYW55O1xyXG4gIH07XHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBtb3VzZSBldmVudCBwYXlsb2FkXHJcbiAgICovXHJcbiAgcGF5bG9hZDogYW55O1xyXG4gIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWRhdGEtd2lkZ2V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS13aWRnZXQuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhV2lkZ2V0Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBEYXRhV2lkZ2V0RGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBvbk1vdXNlRW50ZXIocGF5bG9hZCkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnbW91c2VlbnRlcicsIHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgb25Nb3VzZUxlYXZlKHBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ21vdXNlbGVhdmUnLCBwYXlsb2FkKTtcclxuICB9XHJcbn1cclxuIl19