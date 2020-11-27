//---------------------------
// ANNOTATION.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var AnnotationComponent = /** @class */ (function () {
    function AnnotationComponent() {
    }
    AnnotationComponent.prototype.onClick = function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AnnotationComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AnnotationComponent.prototype, "emit", void 0);
    AnnotationComponent = __decorate([
        Component({
            selector: 'n7-annotation',
            template: "<div *ngIf=\"data\"\r\n     class=\"n7-annotation {{ data.classes || ''}}\">\r\n  <ng-container *ngIf=\"!data.isCollapsed\">\r\n    <!-- view the full annotation -->\r\n    <ng-container *ngTemplateOutlet=\"expanded\"></ng-container>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"data.isCollapsed\">\r\n    <!-- minimal view of the annotation -->\r\n    <ng-container *ngTemplateOutlet=\"collapsed\"></ng-container>\r\n  </ng-container>\r\n</div>\r\n\r\n<ng-template #expanded>\r\n  <!-- metadata row -->\r\n  <div class=\"n7-annotation__metadata-row\">\r\n    <!-- avatar -->\r\n    <div class=\"n7-annotation__image-wrapper\">\r\n      <img [src]=\"data.user.image\"\r\n           alt=\"User profile picture\"\r\n           class=\"n7-annotation__image\">\r\n    </div>\r\n    <!-- name -->\r\n    <div class=\"n7-annotation__info-cont\">\r\n        <n7-anchor-wrapper [data]=\"data.user.anchor\">\r\n        <div class=\"n7-annotation__user-name\">{{data.user.name}}</div>\r\n        </n7-anchor-wrapper>\r\n        <!-- time ago - parent notebook -->\r\n        <div class=\"n7-annotation__info\">\r\n        <span class=\"n7-annotation__date\">{{data.date}}</span>\r\n        <span> in\r\n            <n7-anchor-wrapper [data]=\"data.notebook.anchor\"\r\n                            class=\"n7-annotation__notebook\">\r\n            {{data.notebook.name}}\r\n            </n7-anchor-wrapper>\r\n        </span>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- arrow icon -->\r\n    <span class=\"n7-icon-angle-down\"\r\n        *ngIf=\"data.icon\"\r\n        (click)=\"onClick(data.icon['payload'])\"></span>\r\n  </div>\r\n\r\n  <hr class=\"n7-annotation__divider\">\r\n\r\n  <!-- highlight -->\r\n  <div class=\"n7-annotation__body-row\"\r\n       *ngIf=\"data.body\">\r\n    <span class=\"n7-annotation__body\">\r\n      {{data.body}}\r\n    </span>\r\n  </div>\r\n\r\n  <!-- comment -->\r\n  <div class=\"n7-annotation__comment-row\"\r\n       *ngIf=\"data.comment\">\r\n    <span class=\"n7-annotation__comment\">\r\n      {{data.comment}}\r\n    </span>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #collapsed>\r\n  <div class=\"n7-annotation__collapsed\">\r\n    <span class=\"n7-annotation__body\">\r\n      {{data.body}}\r\n    </span>\r\n    <span>\r\n      <n7-anchor-wrapper [data]=\"data.notebook.anchor\"\r\n                         class=\"n7-annotation__notebook\">\r\n        {{data.notebook.name}}\r\n      </n7-anchor-wrapper>\r\n    </span>\r\n  </div>\r\n</ng-template>\r\n"
        })
    ], AnnotationComponent);
    return AnnotationComponent;
}());
export { AnnotationComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYW5ub3RhdGlvbi9hbm5vdGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixnQkFBZ0I7QUFDaEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXNEakQ7SUFBQTtJQVVBLENBQUM7SUFMQyxxQ0FBTyxHQUFQLFVBQVEsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQVJRO1FBQVIsS0FBSyxFQUFFOztxREFBc0I7SUFFckI7UUFBUixLQUFLLEVBQUU7O3FEQUFXO0lBSFIsbUJBQW1CO1FBSi9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLHE5RUFBZ0M7U0FDakMsQ0FBQztPQUNXLG1CQUFtQixDQVUvQjtJQUFELDBCQUFDO0NBQUEsQUFWRCxJQVVDO1NBVlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQU5OT1RBVElPTi50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbmNob3IsIEljb24gfSBmcm9tICdkdi1jb21wb25lbnRzLWxpYi9saWIvc2hhcmVkLWludGVyZmFjZXMnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgQW5ub3RhdGlvbkNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB1c2VyIChyZXF1aXJlZClcclxuICogIC0gaW1hZ2UgKG9wdGlvbmFsKVxyXG4gKiAgLSBuYW1lIChyZXF1aXJlZClcclxuICogIC0gYW5jaG9yIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGRhdGUgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgbm90ZWJvb2sgKHJlcXVpcmVkKVxyXG4gKiAgLSBuYW1lIChyZXF1aXJlZClcclxuICogIC0gYW5jaG9yIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgYm9keSAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjb21tZW50IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBBbm5vdGF0aW9uRGF0YSB7XHJcbiAgLyoqIFVzZXIgZGF0YSAqL1xyXG4gIHVzZXI6IHtcclxuICAgIC8qKiBQcm9maWxlIHBpY3R1cmUgKi9cclxuICAgIGltYWdlOiBzdHJpbmc7XHJcbiAgICAvKiogVXNlciBmdWxsIG5hbWUgKi9cclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIC8qKiBOYXZpZ2F0ZSB0byB1c2VyIHBhZ2UgKi9cclxuICAgIGFuY2hvcj86IEFuY2hvcjtcclxuICB9O1xyXG4gIC8qKiBEYXRlIHN0cmluZyAqL1xyXG4gIGRhdGU6IHN0cmluZztcclxuICAvKiogUGFyZW50IG5vdGVib29rIGRhdGEgKi9cclxuICBub3RlYm9vazoge1xyXG4gICAgLyoqIE5vdGVib29rIHRpdGxlICovXHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICAvKiogTm90ZWJvb2sgbmF2aWdhdGlvbiAqL1xyXG4gICAgYW5jaG9yOiBBbmNob3I7XHJcbiAgfTtcclxuICAvKiogVmlldyB0aGUgYW5ub3RhdGlvbiBpbiBhIG1pbmltYWwgZm9ybSAqL1xyXG4gIGlzQ29sbGFwc2VkOiBib29sZWFuO1xyXG4gIC8qKiBJY29uIGluIHRoZSB0b3AtcmlnaHQgY29ybmVyIG9mIHRoZSBhbm5vdGF0aW9uICovXHJcbiAgaWNvbj86IEljb247XHJcbiAgLyoqIEFubm90YXRlZCB0ZXh0ICovXHJcbiAgYm9keTogc3RyaW5nO1xyXG4gIC8qKiBBbm5vdGF0aW9uIGNvbW1lbnQgKi9cclxuICBjb21tZW50Pzogc3RyaW5nO1xyXG4gIC8qKiBIVE1MIENsYXNzZXMgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWFubm90YXRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hbm5vdGF0aW9uLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBBbm5vdGF0aW9uRGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBvbkNsaWNrKHBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxufVxyXG4iXX0=