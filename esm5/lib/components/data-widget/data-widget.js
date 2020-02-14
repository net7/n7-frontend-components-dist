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
var DataWidgetComponent = /** @class */ (function () {
    function DataWidgetComponent() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    DataWidgetComponent.prototype.onMouseEnter = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('mouseenter', payload);
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    DataWidgetComponent.prototype.onMouseLeave = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('mouseleave', payload);
    };
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
    return DataWidgetComponent;
}());
export { DataWidgetComponent };
if (false) {
    /** @type {?} */
    DataWidgetComponent.prototype.data;
    /** @type {?} */
    DataWidgetComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS13aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGEtd2lkZ2V0L2RhdGEtd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0FBYWpELHFDQThCQzs7Ozs7O0lBMUJDLCtCQUFjOzs7OztJQUlkLCtCQUFjOztJQUNkLG1DQWNDOztJQUNELGtDQUFpQjs7Ozs7SUFJakIsa0NBQWE7O0lBQ2IsZ0NBQVk7O0FBR2Q7SUFBQTtJQW1CQSxDQUFDOzs7OztJQVZDLDBDQUFZOzs7O0lBQVosVUFBYSxPQUFPO1FBQ2xCLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCwwQ0FBWTs7OztJQUFaLFVBQWEsT0FBTztRQUNsQixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIseTdDQUFpQztpQkFDbEM7Ozt1QkFHRSxLQUFLO3VCQUNMLEtBQUs7O0lBWVIsMEJBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWRZLG1CQUFtQjs7O0lBQzlCLG1DQUErQjs7SUFDL0IsbUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gSU5ERVgudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGFuIGluZGV4IGNvbXBvbmVudCBJdGVtXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgc3VidGl0bGUgKHJlcXVpcmVkKVxyXG4gKiAtIHRleHQgKHJlcXVpcmVkKVxyXG4gKiAtIGljb24gKG9wdGlvbmFsKVxyXG4gKiAtIGdyb3cgKHJlcXVpcmVkKVxyXG4gKi9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFXaWRnZXREYXRhIHtcclxuICAvKipcclxuICAgKiBpdGVtIGljb25cclxuICAgKi9cclxuICBpY29uPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGl0ZW0gdGV4dFxyXG4gICAqL1xyXG4gIHRleHQ/OiBzdHJpbmc7XHJcbiAgc3VidGl0bGU/OiB7XHJcbiAgICAvKipcclxuICAgICAqIGl0ZW0gc3VidGl0bGVcclxuICAgICAqL1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBpdGVtIHN1YnRpdGxlIGljb25cclxuICAgICAqL1xyXG4gICAgaWNvbjogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBwZXJjZW50IHJhdGVcclxuICAgICAqL1xyXG4gICAgdmFsdWU6IG51bWJlciB8IHN0cmluZztcclxuICAgIHBheWxvYWQ6IGFueTtcclxuICB9XHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBtb3VzZSBldmVudCBwYXlsb2FkXHJcbiAgICovXHJcbiAgcGF5bG9hZDogYW55O1xyXG4gIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWRhdGEtd2lkZ2V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS13aWRnZXQuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhV2lkZ2V0Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBJRGF0YVdpZGdldERhdGE7XHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBvbk1vdXNlRW50ZXIocGF5bG9hZCkge1xyXG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdtb3VzZWVudGVyJywgcGF5bG9hZCk7XHJcbiAgfVxyXG5cclxuICBvbk1vdXNlTGVhdmUocGF5bG9hZCkge1xyXG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdtb3VzZWxlYXZlJywgcGF5bG9hZCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=