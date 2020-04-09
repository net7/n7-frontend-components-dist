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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS13aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGEtd2lkZ2V0L2RhdGEtd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQWFqRCxvQ0E4QkM7Ozs7OztJQTFCQyw4QkFBYzs7Ozs7SUFJZCw4QkFBYzs7SUFDZCxrQ0FjRTs7SUFDRixpQ0FBaUI7Ozs7O0lBSWpCLGlDQUFhOztJQUNiLCtCQUFZOztBQUdkO0lBQUE7SUFtQkEsQ0FBQzs7Ozs7SUFUQywwQ0FBWTs7OztJQUFaLFVBQWEsT0FBTztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsMENBQVk7Ozs7SUFBWixVQUFhLE9BQU87UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDOztnQkFsQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLHkzQ0FBaUM7aUJBQ2xDOzs7dUJBR0UsS0FBSzt1QkFFTCxLQUFLOztJQVdSLDBCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FkWSxtQkFBbUI7OztJQUM5QixtQ0FBOEI7O0lBRTlCLG1DQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBJTkRFWC50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgYW4gaW5kZXggY29tcG9uZW50IEl0ZW1cbiAqXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgc3VidGl0bGUgKHJlcXVpcmVkKVxuICogLSB0ZXh0IChyZXF1aXJlZClcbiAqIC0gaWNvbiAob3B0aW9uYWwpXG4gKiAtIGdyb3cgKHJlcXVpcmVkKVxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVdpZGdldERhdGEge1xuICAvKipcbiAgICogaXRlbSBpY29uXG4gICAqL1xuICBpY29uPzogc3RyaW5nO1xuICAvKipcbiAgICogaXRlbSB0ZXh0XG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICBzdWJ0aXRsZT86IHtcbiAgICAvKipcbiAgICAgKiBpdGVtIHN1YnRpdGxlXG4gICAgICovXG4gICAgdGV4dDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIGl0ZW0gc3VidGl0bGUgaWNvblxuICAgICAqL1xuICAgIGljb246IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBwZXJjZW50IHJhdGVcbiAgICAgKi9cbiAgICB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nO1xuICAgIHBheWxvYWQ6IGFueTtcbiAgfTtcbiAgY2xhc3Nlcz86IHN0cmluZztcbiAgLyoqXG4gICAqIG1vdXNlIGV2ZW50IHBheWxvYWRcbiAgICovXG4gIHBheWxvYWQ6IGFueTtcbiAgX21ldGE/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWRhdGEtd2lkZ2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtd2lkZ2V0Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgRGF0YVdpZGdldENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IERhdGFXaWRnZXREYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbk1vdXNlRW50ZXIocGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdtb3VzZWVudGVyJywgcGF5bG9hZCk7XG4gIH1cblxuICBvbk1vdXNlTGVhdmUocGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdtb3VzZWxlYXZlJywgcGF5bG9hZCk7XG4gIH1cbn1cbiJdfQ==