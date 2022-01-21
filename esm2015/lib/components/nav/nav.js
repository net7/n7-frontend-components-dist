import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let NavComponent = class NavComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], NavComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NavComponent.prototype, "emit", void 0);
NavComponent = __decorate([
    Component({
        selector: 'n7-nav',
        template: "<nav class=\"n7-nav {{data.classes || ''}}\" *ngIf=\"data\">\r\n    <ul class=\"n7-nav__list\">\r\n        <n7-anchor-wrapper \r\n        *ngFor=\"let item of data.items\"\r\n        [data]=\"item.anchor\" \r\n        [classes]=\"'n7-nav__link'\" \r\n        (clicked)=\"onClick($event)\">\r\n            <li class=\"n7-nav__item {{ item.classes || '' }}\">\r\n                <img class=\"n7-nav__image\" *ngIf=\"item.image\" src=\"{{ item.image }}\">\r\n                <span class=\"n7-nav__icon {{ item.icon }}\" *ngIf=\"item.icon\"></span>\r\n                <span class=\"n7-nav__label\">{{ item.text }}</span>\r\n            </li>\r\n        </n7-anchor-wrapper>\r\n    </ul>\r\n</nav>"
    })
], NavComponent);
export { NavComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9uYXYvbmF2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXNFakQsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQUt2QixPQUFPLENBQUMsT0FBWTtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDRixDQUFBO0FBUlU7SUFBUixLQUFLLEVBQUU7OzBDQUFzQjtBQUVyQjtJQUFSLEtBQUssRUFBRTs7MENBQVc7QUFIUixZQUFZO0lBSnhCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLGdzQkFBeUI7S0FDMUIsQ0FBQztHQUNXLFlBQVksQ0FTeEI7U0FUWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBhIHNpbmdsZSBuYXZiYXIgaXRlbVxyXG4gKlxyXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGxpbmsgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBOYXZJdGVtIHtcclxuICAvKipcclxuICAgKiB0ZXh0IG9mIGEgc2luZ2xlIGl0ZW0gb2YgdGhlIG5hdmJhciAodGV4dCBhbmQgcGF5bG9hZCBhcmUgY29ubmVjdGVkKVxyXG4gICAqL1xyXG4gIHRleHQ6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogaW1hZ2UgdXJsIGZvciBjb250ZXh0dWFsIGljb24vdGh1bWJuYWlsXHJcbiAgICovXHJcbiAgaW1hZ2U/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIGljb24gbmFtZS9jbGFzcyBmcm9tIGljb24gZm9udFxyXG4gICAqL1xyXG4gIGljb24/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxuICBhbmNob3I/OiBBbmNob3I7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIHRoZSBuYXZiYXJcclxuICpcclxuICogQHByb3BlcnR5IGl0ZW1zIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE5hdkRhdGEge1xyXG4gIC8qKlxyXG4gICAqIGxpc3Qgb2YgdGhlIGl0ZW1zIGluIHRoZSBuYXZiYXJcclxuICAgKi9cclxuICBpdGVtczogTmF2SXRlbVtdO1xyXG5cclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICAqL1xyXG4gIHBheWxvYWQ/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctbmF2JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbmF2Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBwdWJsaWMgZGF0YTogTmF2RGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBvbkNsaWNrKHBheWxvYWQ6IGFueSkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcbn1cclxuIl19