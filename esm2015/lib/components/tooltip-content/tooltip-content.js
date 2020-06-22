//---------------------------
// TOOLTIP-CONTENT.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let TooltipContentComponent = class TooltipContentComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], TooltipContentComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TooltipContentComponent.prototype, "emit", void 0);
TooltipContentComponent = __decorate([
    Component({
        selector: 'n7-tooltip-content',
        template: "<div *ngIf=\"data\"\r\n     class=\"n7-tooltip-content\">\r\n\r\n  <div *ngIf=\"data.title\">\r\n    {{data.title}}\r\n  </div>\r\n\r\n  <div *ngIf=\"data.text\"\r\n       [innerHTML]=\"data.text\">\r\n  </div>\r\n\r\n  <img *ngIf=\"data.image\"\r\n       [src]=\"data.image\">\r\n\r\n  <ng-container *ngFor=\"let btn of data.actions\">\r\n    <n7-anchor-wrapper [classes]=\"\"\r\n                       [data]=\"btn\"\r\n                       (clicked)=\"onClick(btn.anchor.payload)\">\r\n      <span *ngIf=\"data.text\" class=\"n7-btn\">\r\n        {{ btn.text }}\r\n      </span>\r\n    </n7-anchor-wrapper>\r\n  </ng-container>\r\n\r\n</div>\r\n"
    })
], TooltipContentComponent);
export { TooltipContentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1jb250ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90b29sdGlwLWNvbnRlbnQvdG9vbHRpcC1jb250ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixxQkFBcUI7QUFDckIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXVCakQsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFLbEMsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDRixDQUFBO0FBVFU7SUFBUixLQUFLLEVBQUU7O3FEQUEwQjtBQUV6QjtJQUFSLEtBQUssRUFBRTs7cURBQVc7QUFIUix1QkFBdUI7SUFKbkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixzcEJBQXFDO0tBQ3RDLENBQUM7R0FDVyx1QkFBdUIsQ0FVbkM7U0FWWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBUT09MVElQLUNPTlRFTlQudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vc2hhcmVkLWludGVyZmFjZXMnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgVG9vbHRpcENvbnRlbnRDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgTkFNRSAocmVxdWlyZWR8b3B0aW9ucykgPC0tLSBUT0RPOiB1cGRhdGUgd2l0aCBpbnRlcmZhY2UgcHJvcGVydGllc1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBUb29sdGlwQ29udGVudERhdGEge1xyXG4gIC8qKiBUaXRsZSBvZiB0aGUgdG9vbHRpcCAqL1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIC8qKiBTdWJ0aXRsZSBvciB0ZXh0ICovXHJcbiAgdGV4dD86IHN0cmluZztcclxuICAvKiogSW1hZ2UgZm9yIHRoZSB0b29sdGlwICovXHJcbiAgaW1hZ2U/OiBzdHJpbmc7XHJcbiAgLyoqIEFjdGlvbiBvciBsaXN0IG9mIGFjdGlvbnMgKi9cclxuICBhY3Rpb25zPzogQnV0dG9uW107XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctdG9vbHRpcC1jb250ZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdG9vbHRpcC1jb250ZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sdGlwQ29udGVudENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogVG9vbHRpcENvbnRlbnREYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZCkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==