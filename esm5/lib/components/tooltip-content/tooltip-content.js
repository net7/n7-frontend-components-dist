//---------------------------
// TOOLTIP-CONTENT.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var TooltipContentComponent = /** @class */ (function () {
    function TooltipContentComponent() {
    }
    TooltipContentComponent.prototype.onClick = function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
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
            template: "<div *ngIf=\"data\"\n     class=\"n7-tooltip-content\">\n\n  <div *ngIf=\"data.title\">\n    {{data.title}}\n  </div>\n\n  <div *ngIf=\"data.text\"\n       [innerHTML]=\"data.text\">\n  </div>\n\n  <img *ngIf=\"data.image\"\n       [src]=\"data.image\">\n\n  <ng-container *ngFor=\"let btn of data.actions\">\n    <n7-anchor-wrapper [classes]=\"\"\n                       [data]=\"btn\"\n                       (clicked)=\"onClick(btn.anchor.payload)\">\n      <span *ngIf=\"data.text\" class=\"n7-btn\">\n        {{ btn.text }}\n      </span>\n    </n7-anchor-wrapper>\n  </ng-container>\n\n</div>\n"
        })
    ], TooltipContentComponent);
    return TooltipContentComponent;
}());
export { TooltipContentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1jb250ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90b29sdGlwLWNvbnRlbnQvdG9vbHRpcC1jb250ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixxQkFBcUI7QUFDckIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXVCakQ7SUFBQTtJQVVBLENBQUM7SUFMQyx5Q0FBTyxHQUFQLFVBQVEsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQVJRO1FBQVIsS0FBSyxFQUFFOzt5REFBMEI7SUFFekI7UUFBUixLQUFLLEVBQUU7O3lEQUFXO0lBSFIsdUJBQXVCO1FBSm5DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsb21CQUFxQztTQUN0QyxDQUFDO09BQ1csdUJBQXVCLENBVW5DO0lBQUQsOEJBQUM7Q0FBQSxBQVZELElBVUM7U0FWWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVE9PTFRJUC1DT05URU5ULnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBUb29sdGlwQ29udGVudENvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IE5BTUUgKHJlcXVpcmVkfG9wdGlvbnMpIDwtLS0gVE9ETzogdXBkYXRlIHdpdGggaW50ZXJmYWNlIHByb3BlcnRpZXNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUb29sdGlwQ29udGVudERhdGEge1xuICAvKiogVGl0bGUgb2YgdGhlIHRvb2x0aXAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKiBTdWJ0aXRsZSBvciB0ZXh0ICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIC8qKiBJbWFnZSBmb3IgdGhlIHRvb2x0aXAgKi9cbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIC8qKiBBY3Rpb24gb3IgbGlzdCBvZiBhY3Rpb25zICovXG4gIGFjdGlvbnM/OiBCdXR0b25bXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctdG9vbHRpcC1jb250ZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rvb2x0aXAtY29udGVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwQ29udGVudENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IFRvb2x0aXBDb250ZW50RGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DbGljayhwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxufVxuIl19