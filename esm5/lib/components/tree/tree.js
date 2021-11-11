//---------------------------
// TREE.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var TreeComponent = /** @class */ (function () {
    function TreeComponent() {
    }
    TreeComponent.prototype.onClick = function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "emit", void 0);
    TreeComponent = __decorate([
        Component({
            selector: 'n7-tree',
            template: "<div *ngIf=\"data\" class=\"n7-tree\">\r\n    <!-- Start recursive rendering -->\r\n    <ng-container *ngTemplateOutlet=\"recursiveTree; context:{$implicit: data.items}\"></ng-container>\r\n\r\n    <!-- Template for recursive children rendering -->\r\n    <ng-template #recursiveTree let-node>\r\n        <div class=\"n7-tree__item {{ item.classes || '' }}\" *ngFor=\"let item of node\">\r\n            <div class=\"n7-tree__item-contents\">\r\n                <!-- Render expand/collapse arrow -->\r\n                <span *ngIf=\"item.toggle\"\r\n                      class=\"n7-tree__item-toggle {{ item.toggle.icon }}\"\r\n                      (click)=\"onClick(item.toggle.payload)\">\r\n                </span>\r\n                <!-- Render the node -->\r\n                <n7-anchor-wrapper \r\n                [classes]=\"'n7-tree__item-details'\"\r\n                [data]=\"item.anchor\"\r\n                (clicked)=\"onClick($event)\">\r\n                    <span *ngIf=\"item.icon\" class=\"n7-tree__item-icon {{ item.icon }}\"></span>\r\n                    <img class=\"n7-tree__item-img\" *ngIf=\"item.img\" src=\"{{ item.img }}\" alt=\"{{ item.text }}\"/>\r\n                    <span class=\"n7-tree__item-text\">{{ item.text }}</span>\r\n                    <span class=\"n7-tree__item-right-icon {{ item.iconright }}\"></span>\r\n                </n7-anchor-wrapper>\r\n            </div>\r\n            <!-- Check for more child nodes and render them -->\r\n            <div class=\"n7-tree__children-wrapper\" *ngIf=\"item.items\">\r\n                <ng-container *ngTemplateOutlet=\"recursiveTree; context:{$implicit: item.items}\"></ng-container>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n</div>"
        })
    ], TreeComponent);
    return TreeComponent;
}());
export { TreeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdHJlZS90cmVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixVQUFVO0FBQ1YsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQStFakQ7SUFBQTtJQVVBLENBQUM7SUFMQywrQkFBTyxHQUFQLFVBQVEsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQVJRO1FBQVIsS0FBSyxFQUFFOzsrQ0FBZ0I7SUFFZjtRQUFSLEtBQUssRUFBRTs7K0NBQVc7SUFIUixhQUFhO1FBSnpCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLCt0REFBMEI7U0FDM0IsQ0FBQztPQUNXLGFBQWEsQ0FVekI7SUFBRCxvQkFBQztDQUFBLEFBVkQsSUFVQztTQVZZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBUUkVFLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIFRyZWVDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgaGVhZGVyIChyZXF1aXJlZClcclxuICogLSBpY29uIChyZXF1aXJlZClcclxuICogLSB0ZXh0IChyZXF1aXJlZClcclxuICogLSBjb2xsYXBzZUljb24gKHJlcXVpcmVkKVxyXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiAtIHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaXRlbXMgKHJlcXVpcmVkKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBUcmVlRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogdHJlZSBvZiBpdGVtc1xyXG4gICAqL1xyXG4gIGl0ZW1zOiBUcmVlSXRlbVtdO1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciB0aGUgc2luZ2xlIFRyZWVDb21wb25lbnQncyBcIkl0ZW1cIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpbWcgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGFuY2hvciAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpdGVtcyAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFRyZWVJdGVtIHtcclxuICAvKipcclxuICAgKiB0aGUgbm9kZSdzIHRvZ2dsZSBhcnJvdywgdG8gZXhwYW5kIGFuZFxyXG4gICAqIGNvbGxhcHNlIGl0J3MgY2hpbGQgbm9kZXMuXHJcbiAgICovXHJcbiAgdG9nZ2xlPzoge1xyXG4gICAgaWNvbjogc3RyaW5nO1xyXG4gICAgcGF5bG9hZD86IGFueTtcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIHRoZSBpdGVtJ3MgaWNvbiwgb25seSB1c2VkIG9uIGxlYWYgaXRlbXNcclxuICAgKi9cclxuICBpY29uPzogc3RyaW5nO1xyXG4gICAvKipcclxuICAgKiB0aGUgaXRlbSdzIHJpZ2h0IGljb24sIG9ubHkgdXNlZCBvbiB0cmVlIGl0ZW1zXHJcbiAgICovXHJcbiAgaWNvbnJpZ2h0Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHRoZSBpdGVtJ3MgaW1hZ2UsIG9ubHkgdXNlZCBvbiBsZWFmIGl0ZW1zXHJcbiAgICovXHJcbiAgaW1nPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IGFueTtcclxuICAvKipcclxuICAgKiB0aGUgaXRlbSdzIHJlbmRlcmVkIHRleHRcclxuICAgKi9cclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYW5jaG9yIDxhPlxyXG4gICAqL1xyXG4gIGFuY2hvcj86IEFuY2hvcjtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGluZm8gdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxuICAvKipcclxuICAgKiBpdGVtIHJlY3Vyc2lvblxyXG4gICAqL1xyXG4gIGl0ZW1zPzogVHJlZUl0ZW1bXTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy10cmVlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdHJlZS5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJlZUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogVHJlZURhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgb25DbGljayhwYXlsb2FkKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcbn1cclxuIl19