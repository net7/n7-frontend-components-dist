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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS13aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGEtd2lkZ2V0L2RhdGEtd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQWFqRCxvQ0E4QkM7Ozs7OztJQTFCQyw4QkFBYzs7Ozs7SUFJZCw4QkFBYzs7SUFDZCxrQ0FjRTs7SUFDRixpQ0FBaUI7Ozs7O0lBSWpCLGlDQUFhOztJQUNiLCtCQUFZOztBQUdkO0lBQUE7SUFtQkEsQ0FBQzs7Ozs7SUFUQywwQ0FBWTs7OztJQUFaLFVBQWEsT0FBTztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsMENBQVk7Ozs7SUFBWixVQUFhLE9BQU87UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDOztnQkFsQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLHk3Q0FBaUM7aUJBQ2xDOzs7dUJBR0UsS0FBSzt1QkFFTCxLQUFLOztJQVdSLDBCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FkWSxtQkFBbUI7OztJQUM5QixtQ0FBOEI7O0lBRTlCLG1DQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIElOREVYLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBhbiBpbmRleCBjb21wb25lbnQgSXRlbVxyXG4gKlxyXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHN1YnRpdGxlIChyZXF1aXJlZClcclxuICogLSB0ZXh0IChyZXF1aXJlZClcclxuICogLSBpY29uIChvcHRpb25hbClcclxuICogLSBncm93IChyZXF1aXJlZClcclxuICovXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERhdGFXaWRnZXREYXRhIHtcclxuICAvKipcclxuICAgKiBpdGVtIGljb25cclxuICAgKi9cclxuICBpY29uPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGl0ZW0gdGV4dFxyXG4gICAqL1xyXG4gIHRleHQ/OiBzdHJpbmc7XHJcbiAgc3VidGl0bGU/OiB7XHJcbiAgICAvKipcclxuICAgICAqIGl0ZW0gc3VidGl0bGVcclxuICAgICAqL1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBpdGVtIHN1YnRpdGxlIGljb25cclxuICAgICAqL1xyXG4gICAgaWNvbjogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBwZXJjZW50IHJhdGVcclxuICAgICAqL1xyXG4gICAgdmFsdWU6IG51bWJlciB8IHN0cmluZztcclxuICAgIHBheWxvYWQ6IGFueTtcclxuICB9O1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogbW91c2UgZXZlbnQgcGF5bG9hZFxyXG4gICAqL1xyXG4gIHBheWxvYWQ6IGFueTtcclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1kYXRhLXdpZGdldCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtd2lkZ2V0Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YVdpZGdldENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogRGF0YVdpZGdldERhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgb25Nb3VzZUVudGVyKHBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ21vdXNlZW50ZXInLCBwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VMZWF2ZShwYXlsb2FkKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdtb3VzZWxlYXZlJywgcGF5bG9hZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==