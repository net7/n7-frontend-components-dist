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
                template: "<div *ngIf=\"data\" class=\"n7-data-widget {{ data.classes || '' }}\">\n    <div class=\"n7-data-widget__main\">\n        <span *ngIf=\"data.icon\"\n              class=\"n7-data-widget__main-icon {{data.icon}}\"\n              (mouseenter)=\"onMouseEnter(data.payload)\"\n              (mouseleave)=\"onMouseLeave(data.payload)\">\n        </span>\n        <h2 class=\"n7-data-widget__main-title\"\n            [innerHTML]=\"data.text\">\n        </h2>\n    </div>\n    \n    <div *ngIf=\"data.subtitle && (data.subtitle.text || data.subtitle.icon || data.subtitle.value)\"\n         class=\"n7-data-widget__sub\">\n        <p *ngIf=\"data.subtitle.text\"\n           class=\"n7-data-widget__sub-title\"\n           [innerHTML]=\"data.subtitle.text\">\n        </p>\n        <span *ngIf=\"data.subtitle.icon || data.subtitle.value\"\n              class=\"n7-data-widget__sub-info\"\n              (mouseenter)=\"onMouseEnter(data.subtitle.payload)\"\n              (mouseleave)=\"onMouseLeave(data.subtitle.payload)\">\n                <span *ngIf=\"data.subtitle.icon\"\n                class=\"n7-data-widget__sub-info-icon {{data.subtitle.icon}}\">\n          </span>\n          <span *ngIf=\"data.subtitle.value\"\n                class=\"n7-data-widget__sub-info-label\"\n                [innerHTML]=\"data.subtitle.value\">\n          </span>\n        </span>\n    </div>\n</div>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS13aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGEtd2lkZ2V0L2RhdGEtd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQWFqRCxvQ0E4QkM7Ozs7OztJQTFCQyw4QkFBYzs7Ozs7SUFJZCw4QkFBYzs7SUFDZCxrQ0FjRTs7SUFDRixpQ0FBaUI7Ozs7O0lBSWpCLGlDQUFhOztJQUNiLCtCQUFZOztBQVFkLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBSzlCLFlBQVksQ0FBQyxPQUFPO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsT0FBTztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIseTNDQUFpQzthQUNsQzs7O21CQUdFLEtBQUs7bUJBRUwsS0FBSzs7OztJQUZOLG1DQUE4Qjs7SUFFOUIsbUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIElOREVYLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBhbiBpbmRleCBjb21wb25lbnQgSXRlbVxuICpcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBzdWJ0aXRsZSAocmVxdWlyZWQpXG4gKiAtIHRleHQgKHJlcXVpcmVkKVxuICogLSBpY29uIChvcHRpb25hbClcbiAqIC0gZ3JvdyAocmVxdWlyZWQpXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhV2lkZ2V0RGF0YSB7XG4gIC8qKlxuICAgKiBpdGVtIGljb25cbiAgICovXG4gIGljb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBpdGVtIHRleHRcbiAgICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIHN1YnRpdGxlPzoge1xuICAgIC8qKlxuICAgICAqIGl0ZW0gc3VidGl0bGVcbiAgICAgKi9cbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogaXRlbSBzdWJ0aXRsZSBpY29uXG4gICAgICovXG4gICAgaWNvbjogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIHBlcmNlbnQgcmF0ZVxuICAgICAqL1xuICAgIHZhbHVlOiBudW1iZXIgfCBzdHJpbmc7XG4gICAgcGF5bG9hZDogYW55O1xuICB9O1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogbW91c2UgZXZlbnQgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZDogYW55O1xuICBfbWV0YT86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctZGF0YS13aWRnZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS13aWRnZXQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXRhV2lkZ2V0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogRGF0YVdpZGdldERhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uTW91c2VFbnRlcihwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ21vdXNlZW50ZXInLCBwYXlsb2FkKTtcbiAgfVxuXG4gIG9uTW91c2VMZWF2ZShwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ21vdXNlbGVhdmUnLCBwYXlsb2FkKTtcbiAgfVxufVxuIl19