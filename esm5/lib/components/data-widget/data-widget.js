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
                    template: "<div *ngIf=\"data\" class=\"n7-data-widget {{ data.classes || '' }}\">\n    <div class=\"n7-data-widget__main\">\n        <span *ngIf=\"data.icon\"\n              class=\"n7-data-widget__main-icon {{data.icon}}\"\n              (mouseenter)=\"onMouseEnter(data.payload)\"\n              (mouseleave)=\"onMouseLeave(data.payload)\">\n        </span>\n        <h2 class=\"n7-data-widget__main-title\"\n            [innerHTML]=\"data.text\">\n        </h2>\n    </div>\n    \n    <div *ngIf=\"data.subtitle && (data.subtitle.text || data.subtitle.icon || data.subtitle.value)\"\n         class=\"n7-data-widget__sub\">\n        <p *ngIf=\"data.subtitle.text\"\n           class=\"n7-data-widget__sub-title\"\n           [innerHTML]=\"data.subtitle.text\">\n        </p>\n        <span *ngIf=\"data.subtitle.icon || data.subtitle.value\"\n              class=\"n7-data-widget__sub-info\"\n              (mouseenter)=\"onMouseEnter(data.subtitle.payload)\"\n              (mouseleave)=\"onMouseLeave(data.subtitle.payload)\">\n                <span *ngIf=\"data.subtitle.icon\"\n                class=\"n7-data-widget__sub-info-icon {{data.subtitle.icon}}\">\n          </span>\n          <span *ngIf=\"data.subtitle.value\"\n                class=\"n7-data-widget__sub-info-label\"\n                [innerHTML]=\"data.subtitle.value\">\n          </span>\n        </span>\n    </div>\n</div>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS13aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGEtd2lkZ2V0L2RhdGEtd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQWFqRCxxQ0E4QkM7Ozs7OztJQTFCQywrQkFBYzs7Ozs7SUFJZCwrQkFBYzs7SUFDZCxtQ0FjQzs7SUFDRCxrQ0FBaUI7Ozs7O0lBSWpCLGtDQUFhOztJQUNiLGdDQUFZOztBQUdkO0lBQUE7SUFtQkEsQ0FBQzs7Ozs7SUFWQywwQ0FBWTs7OztJQUFaLFVBQWEsT0FBTztRQUNsQixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsMENBQVk7Ozs7SUFBWixVQUFhLE9BQU87UUFDbEIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDOztnQkFqQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLHkzQ0FBaUM7aUJBQ2xDOzs7dUJBR0UsS0FBSzt1QkFDTCxLQUFLOztJQVlSLDBCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FkWSxtQkFBbUI7OztJQUM5QixtQ0FBK0I7O0lBQy9CLG1DQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBJTkRFWC50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgYW4gaW5kZXggY29tcG9uZW50IEl0ZW1cbiAqXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgc3VidGl0bGUgKHJlcXVpcmVkKVxuICogLSB0ZXh0IChyZXF1aXJlZClcbiAqIC0gaWNvbiAob3B0aW9uYWwpXG4gKiAtIGdyb3cgKHJlcXVpcmVkKVxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFXaWRnZXREYXRhIHtcbiAgLyoqXG4gICAqIGl0ZW0gaWNvblxuICAgKi9cbiAgaWNvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIGl0ZW0gdGV4dFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgc3VidGl0bGU/OiB7XG4gICAgLyoqXG4gICAgICogaXRlbSBzdWJ0aXRsZVxuICAgICAqL1xuICAgIHRleHQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBpdGVtIHN1YnRpdGxlIGljb25cbiAgICAgKi9cbiAgICBpY29uOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogcGVyY2VudCByYXRlXG4gICAgICovXG4gICAgdmFsdWU6IG51bWJlciB8IHN0cmluZztcbiAgICBwYXlsb2FkOiBhbnk7XG4gIH1cbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIG1vdXNlIGV2ZW50IHBheWxvYWRcbiAgICovXG4gIHBheWxvYWQ6IGFueTtcbiAgX21ldGE/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWRhdGEtd2lkZ2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtd2lkZ2V0Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgRGF0YVdpZGdldENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElEYXRhV2lkZ2V0RGF0YTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uTW91c2VFbnRlcihwYXlsb2FkKSB7XG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnbW91c2VlbnRlcicsIHBheWxvYWQpO1xuICB9XG5cbiAgb25Nb3VzZUxlYXZlKHBheWxvYWQpIHtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdtb3VzZWxlYXZlJywgcGF5bG9hZCk7XG4gIH1cblxufVxuIl19