//---------------------------
// INDEX.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let DataWidgetComponent = class DataWidgetComponent {
    onMouseEnter(payload) {
        if (!this.emit)
            return;
        this.emit('mouseenter', payload);
    }
    onMouseLeave(payload) {
        if (!this.emit)
            return;
        this.emit('mouseleave', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], DataWidgetComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DataWidgetComponent.prototype, "emit", void 0);
DataWidgetComponent = __decorate([
    Component({
        selector: 'n7-data-widget',
        template: "<div *ngIf=\"data\" class=\"n7-data-widget {{ data.classes || '' }}\">\r\n    <div class=\"n7-data-widget__main\">\r\n        <span *ngIf=\"data.icon\"\r\n              class=\"n7-data-widget__main-icon {{data.icon}}\"\r\n              (mouseenter)=\"onMouseEnter(data.payload)\"\r\n              (mouseleave)=\"onMouseLeave(data.payload)\">\r\n        </span>\r\n        <h2 class=\"n7-data-widget__main-title\"\r\n            [innerHTML]=\"data.text\">\r\n        </h2>\r\n    </div>\r\n    \r\n    <div *ngIf=\"data.subtitle && (data.subtitle.text || data.subtitle.icon || data.subtitle.value)\"\r\n         class=\"n7-data-widget__sub\">\r\n        <p *ngIf=\"data.subtitle.text\"\r\n           class=\"n7-data-widget__sub-title\"\r\n           [innerHTML]=\"data.subtitle.text\">\r\n        </p>\r\n        <span *ngIf=\"data.subtitle.icon || data.subtitle.value\"\r\n              class=\"n7-data-widget__sub-info\"\r\n              (mouseenter)=\"onMouseEnter(data.subtitle.payload)\"\r\n              (mouseleave)=\"onMouseLeave(data.subtitle.payload)\">\r\n                <span *ngIf=\"data.subtitle.icon\"\r\n                class=\"n7-data-widget__sub-info-icon {{data.subtitle.icon}}\">\r\n          </span>\r\n          <span *ngIf=\"data.subtitle.value\"\r\n                class=\"n7-data-widget__sub-info-label\"\r\n                [innerHTML]=\"data.subtitle.value\">\r\n          </span>\r\n        </span>\r\n    </div>\r\n</div>\r\n"
    })
], DataWidgetComponent);
export { DataWidgetComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS13aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGEtd2lkZ2V0L2RhdGEtd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixXQUFXO0FBQ1gsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWtEakQsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFLOUIsWUFBWSxDQUFDLE9BQU87UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsWUFBWSxDQUFDLE9BQU87UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0NBQ0YsQ0FBQTtBQWJVO0lBQVIsS0FBSyxFQUFFOztpREFBc0I7QUFFckI7SUFBUixLQUFLLEVBQUU7O2lEQUFXO0FBSFIsbUJBQW1CO0lBTC9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIseTdDQUFpQztLQUNsQyxDQUFDO0dBRVcsbUJBQW1CLENBYy9CO1NBZFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gSU5ERVgudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGFuIGluZGV4IGNvbXBvbmVudCBJdGVtXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgc3VidGl0bGUgKHJlcXVpcmVkKVxyXG4gKiAtIHRleHQgKHJlcXVpcmVkKVxyXG4gKiAtIGljb24gKG9wdGlvbmFsKVxyXG4gKiAtIGdyb3cgKHJlcXVpcmVkKVxyXG4gKi9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVdpZGdldERhdGEge1xyXG4gIC8qKlxyXG4gICAqIGl0ZW0gaWNvblxyXG4gICAqL1xyXG4gIGljb24/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogaXRlbSB0ZXh0XHJcbiAgICovXHJcbiAgdGV4dD86IHN0cmluZztcclxuICBzdWJ0aXRsZT86IHtcclxuICAgIC8qKlxyXG4gICAgICogaXRlbSBzdWJ0aXRsZVxyXG4gICAgICovXHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGl0ZW0gc3VidGl0bGUgaWNvblxyXG4gICAgICovXHJcbiAgICBpY29uOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIHBlcmNlbnQgcmF0ZVxyXG4gICAgICovXHJcbiAgICB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nO1xyXG4gICAgcGF5bG9hZDogYW55O1xyXG4gIH07XHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBtb3VzZSBldmVudCBwYXlsb2FkXHJcbiAgICovXHJcbiAgcGF5bG9hZDogYW55O1xyXG4gIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWRhdGEtd2lkZ2V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS13aWRnZXQuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhV2lkZ2V0Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBEYXRhV2lkZ2V0RGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBvbk1vdXNlRW50ZXIocGF5bG9hZCkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnbW91c2VlbnRlcicsIHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgb25Nb3VzZUxlYXZlKHBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ21vdXNlbGVhdmUnLCBwYXlsb2FkKTtcclxuICB9XHJcbn1cclxuIl19