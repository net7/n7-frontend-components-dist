/**
 * @fileoverview added by tsickle
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
export function IDataWidgetData() { }
if (false) {
    /**
     * item icon
     * @type {?|undefined}
     */
    IDataWidgetData.prototype.icon;
    /**
     * item text
     * @type {?|undefined}
     */
    IDataWidgetData.prototype.text;
    /** @type {?|undefined} */
    IDataWidgetData.prototype.subtitle;
    /** @type {?|undefined} */
    IDataWidgetData.prototype.classes;
    /**
     * mouse event payload
     * @type {?}
     */
    IDataWidgetData.prototype.payload;
    /** @type {?|undefined} */
    IDataWidgetData.prototype._meta;
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
                template: "<div *ngIf=\"data\" class=\"n7-data-widget {{ data.classes || '' }}\">\r\n    <div class=\"n7-data-widget__main\">\r\n        <span *ngIf=\"data.icon\" \r\n              class=\"n7-data-widget__main-icon {{data.icon}}\" \r\n              (mouseenter)=\"onMouseEnter(data.payload)\" \r\n              (mouseleave)=\"onMouseLeave(data.payload)\">            \r\n        </span>\r\n        <h2 class=\"n7-data-widget__main-title\">\r\n            {{data.text}}\r\n        </h2>\t\r\n    </div>\r\n    \r\n    <div *ngIf=\"data.subtitle && (data.subtitle.text || data.subtitle.icon || data.subtitle.value)\"\r\n         class=\"n7-data-widget__sub\">\r\n        <p *ngIf=\"data.subtitle.text\"\r\n           class=\"n7-data-widget__sub-title\">\r\n            {{data.subtitle.text}}\r\n        </p>\r\n        <span *ngIf=\"data.subtitle.icon || data.subtitle.value\" \r\n              class=\"n7-data-widget__sub-info\" \r\n              (mouseenter)=\"onMouseEnter(data.subtitle.payload)\" \r\n              (mouseleave)=\"onMouseLeave(data.subtitle.payload)\">\r\n                <span *ngIf=\"data.subtitle.icon\"\r\n                class=\"n7-data-widget__sub-info-icon {{data.subtitle.icon}}\">\r\n          </span>\r\n          <span *ngIf=\"data.subtitle.value\"\r\n                class=\"n7-data-widget__sub-info-label\">\r\n                {{data.subtitle.value}}\r\n          </span>\r\n        </span>\r\n    </div>\r\n</div>\r\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS13aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGEtd2lkZ2V0L2RhdGEtd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0FBYWpELHFDQThCQzs7Ozs7O0lBMUJDLCtCQUFjOzs7OztJQUlkLCtCQUFjOztJQUNkLG1DQWNDOztJQUNELGtDQUFpQjs7Ozs7SUFJakIsa0NBQWE7O0lBQ2IsZ0NBQVk7O0FBUWQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFJOUIsWUFBWSxDQUFDLE9BQU87UUFDbEIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxPQUFPO1FBQ2xCLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQiwwNkNBQWlDO2FBQ2xDOzs7bUJBR0UsS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sbUNBQStCOztJQUMvQixtQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBJTkRFWC50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgYW4gaW5kZXggY29tcG9uZW50IEl0ZW1cclxuICpcclxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBzdWJ0aXRsZSAocmVxdWlyZWQpXHJcbiAqIC0gdGV4dCAocmVxdWlyZWQpXHJcbiAqIC0gaWNvbiAob3B0aW9uYWwpXHJcbiAqIC0gZ3JvdyAocmVxdWlyZWQpXHJcbiAqL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVdpZGdldERhdGEge1xyXG4gIC8qKlxyXG4gICAqIGl0ZW0gaWNvblxyXG4gICAqL1xyXG4gIGljb24/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogaXRlbSB0ZXh0XHJcbiAgICovXHJcbiAgdGV4dD86IHN0cmluZztcclxuICBzdWJ0aXRsZT86IHtcclxuICAgIC8qKlxyXG4gICAgICogaXRlbSBzdWJ0aXRsZVxyXG4gICAgICovXHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGl0ZW0gc3VidGl0bGUgaWNvblxyXG4gICAgICovXHJcbiAgICBpY29uOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIHBlcmNlbnQgcmF0ZVxyXG4gICAgICovXHJcbiAgICB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nO1xyXG4gICAgcGF5bG9hZDogYW55O1xyXG4gIH1cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIG1vdXNlIGV2ZW50IHBheWxvYWRcclxuICAgKi9cclxuICBwYXlsb2FkOiBhbnk7XHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctZGF0YS13aWRnZXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLXdpZGdldC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFXaWRnZXRDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IElEYXRhV2lkZ2V0RGF0YTtcclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIG9uTW91c2VFbnRlcihwYXlsb2FkKSB7XHJcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ21vdXNlZW50ZXInLCBwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VMZWF2ZShwYXlsb2FkKSB7XHJcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ21vdXNlbGVhdmUnLCBwYXlsb2FkKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==