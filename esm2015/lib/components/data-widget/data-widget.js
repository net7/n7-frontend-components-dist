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
                template: "<div *ngIf=\"data\" class=\"n7-data-widget {{ data.classes || '' }}\">\n    <div class=\"n7-data-widget__main\">\n        <span *ngIf=\"data.icon\" \n              class=\"n7-data-widget__main-icon {{data.icon}}\" \n              (mouseenter)=\"onMouseEnter(data.payload)\" \n              (mouseleave)=\"onMouseLeave(data.payload)\">            \n        </span>\n        <h2 class=\"n7-data-widget__main-title\">\n            {{data.text}}\n        </h2>\t\n    </div>\n    \n    <div *ngIf=\"data.subtitle && (data.subtitle.text || data.subtitle.icon || data.subtitle.value)\"\n         class=\"n7-data-widget__sub\">\n        <p *ngIf=\"data.subtitle.text\"\n           class=\"n7-data-widget__sub-title\">\n            {{data.subtitle.text}}\n        </p>\n        <span *ngIf=\"data.subtitle.icon || data.subtitle.value\" \n              class=\"n7-data-widget__sub-info\" \n              (mouseenter)=\"onMouseEnter(data.subtitle.payload)\" \n              (mouseleave)=\"onMouseLeave(data.subtitle.payload)\">\n                <span *ngIf=\"data.subtitle.icon\"\n                class=\"n7-data-widget__sub-info-icon {{data.subtitle.icon}}\">\n          </span>\n          <span *ngIf=\"data.subtitle.value\"\n                class=\"n7-data-widget__sub-info-label\">\n                {{data.subtitle.value}}\n          </span>\n        </span>\n    </div>\n</div>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS13aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGEtd2lkZ2V0L2RhdGEtd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0FBYWpELHFDQThCQzs7Ozs7O0lBMUJDLCtCQUFjOzs7OztJQUlkLCtCQUFjOztJQUNkLG1DQWNDOztJQUNELGtDQUFpQjs7Ozs7SUFJakIsa0NBQWE7O0lBQ2IsZ0NBQVk7O0FBUWQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFJOUIsWUFBWSxDQUFDLE9BQU87UUFDbEIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxPQUFPO1FBQ2xCLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQiwwMkNBQWlDO2FBQ2xDOzs7bUJBR0UsS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sbUNBQStCOztJQUMvQixtQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSU5ERVgudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGFuIGluZGV4IGNvbXBvbmVudCBJdGVtXG4gKlxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHN1YnRpdGxlIChyZXF1aXJlZClcbiAqIC0gdGV4dCAocmVxdWlyZWQpXG4gKiAtIGljb24gKG9wdGlvbmFsKVxuICogLSBncm93IChyZXF1aXJlZClcbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhV2lkZ2V0RGF0YSB7XG4gIC8qKlxuICAgKiBpdGVtIGljb25cbiAgICovXG4gIGljb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBpdGVtIHRleHRcbiAgICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIHN1YnRpdGxlPzoge1xuICAgIC8qKlxuICAgICAqIGl0ZW0gc3VidGl0bGVcbiAgICAgKi9cbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogaXRlbSBzdWJ0aXRsZSBpY29uXG4gICAgICovXG4gICAgaWNvbjogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIHBlcmNlbnQgcmF0ZVxuICAgICAqL1xuICAgIHZhbHVlOiBudW1iZXIgfCBzdHJpbmc7XG4gICAgcGF5bG9hZDogYW55O1xuICB9XG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBtb3VzZSBldmVudCBwYXlsb2FkXG4gICAqL1xuICBwYXlsb2FkOiBhbnk7XG4gIF9tZXRhPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1kYXRhLXdpZGdldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLXdpZGdldC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIERhdGFXaWRnZXRDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJRGF0YVdpZGdldERhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbk1vdXNlRW50ZXIocGF5bG9hZCkge1xuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ21vdXNlZW50ZXInLCBwYXlsb2FkKTtcbiAgfVxuXG4gIG9uTW91c2VMZWF2ZShwYXlsb2FkKSB7XG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnbW91c2VsZWF2ZScsIHBheWxvYWQpO1xuICB9XG5cbn1cbiJdfQ==