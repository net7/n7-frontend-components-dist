/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "<div *ngIf=\"data\" class=\"n7-data-widget {{ data.classes || '' }}\">\n    <div class=\"n7-data-widget__main\">\n        <span *ngIf=\"data.icon\" \n              class=\"n7-data-widget__main-icon {{data.icon}}\" \n              (mouseenter)=\"onMouseEnter(data.payload)\" \n              (mouseleave)=\"onMouseLeave(data.payload)\">            \n        </span>\n        <h2 class=\"n7-data-widget__main-title\">\n            {{data.text}}\n        </h2>\t\n    </div>\n    \n    <div *ngIf=\"data.subtitle && (data.subtitle.text || data.subtitle.icon || data.subtitle.value)\"\n         class=\"n7-data-widget__sub\">\n        <p *ngIf=\"data.subtitle.text\"\n           class=\"n7-data-widget__sub-title\">\n            {{data.subtitle.text}}\n        </p>\n        <span *ngIf=\"data.subtitle.icon || data.subtitle.value\" \n              class=\"n7-data-widget__sub-info\" \n              (mouseenter)=\"onMouseEnter(data.subtitle.payload)\" \n              (mouseleave)=\"onMouseLeave(data.subtitle.payload)\">\n                <span *ngIf=\"data.subtitle.icon\"\n                class=\"n7-data-widget__sub-info-icon {{data.subtitle.icon}}\">\n          </span>\n          <span *ngIf=\"data.subtitle.value\"\n                class=\"n7-data-widget__sub-info-label\">\n                {{data.subtitle.value}}\n          </span>\n        </span>\n    </div>\n</div>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS13aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGEtd2lkZ2V0L2RhdGEtd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0FBYWpELHFDQThCQzs7Ozs7O0lBMUJDLCtCQUFjOzs7OztJQUlkLCtCQUFjOztJQUNkLG1DQWNDOztJQUNELGtDQUFpQjs7Ozs7SUFJakIsa0NBQWE7O0lBQ2IsZ0NBQVk7O0FBR2Q7SUFBQTtJQW1CQSxDQUFDOzs7OztJQVZDLDBDQUFZOzs7O0lBQVosVUFBYSxPQUFPO1FBQ2xCLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCwwQ0FBWTs7OztJQUFaLFVBQWEsT0FBTztRQUNsQixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsMDJDQUFpQztpQkFDbEM7Ozt1QkFHRSxLQUFLO3VCQUNMLEtBQUs7O0lBWVIsMEJBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWRZLG1CQUFtQjs7O0lBQzlCLG1DQUErQjs7SUFDL0IsbUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIElOREVYLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBhbiBpbmRleCBjb21wb25lbnQgSXRlbVxuICpcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBzdWJ0aXRsZSAocmVxdWlyZWQpXG4gKiAtIHRleHQgKHJlcXVpcmVkKVxuICogLSBpY29uIChvcHRpb25hbClcbiAqIC0gZ3JvdyAocmVxdWlyZWQpXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVdpZGdldERhdGEge1xuICAvKipcbiAgICogaXRlbSBpY29uXG4gICAqL1xuICBpY29uPzogc3RyaW5nO1xuICAvKipcbiAgICogaXRlbSB0ZXh0XG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICBzdWJ0aXRsZT86IHtcbiAgICAvKipcbiAgICAgKiBpdGVtIHN1YnRpdGxlXG4gICAgICovXG4gICAgdGV4dDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIGl0ZW0gc3VidGl0bGUgaWNvblxuICAgICAqL1xuICAgIGljb246IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBwZXJjZW50IHJhdGVcbiAgICAgKi9cbiAgICB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nO1xuICAgIHBheWxvYWQ6IGFueTtcbiAgfVxuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogbW91c2UgZXZlbnQgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZDogYW55O1xuICBfbWV0YT86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctZGF0YS13aWRnZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS13aWRnZXQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXRhV2lkZ2V0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSURhdGFXaWRnZXREYXRhO1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25Nb3VzZUVudGVyKHBheWxvYWQpIHtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdtb3VzZWVudGVyJywgcGF5bG9hZCk7XG4gIH1cblxuICBvbk1vdXNlTGVhdmUocGF5bG9hZCkge1xuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ21vdXNlbGVhdmUnLCBwYXlsb2FkKTtcbiAgfVxuXG59XG4iXX0=