//---------------------------
// SIDEBAR-HEADER.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var SidebarHeaderComponent = /** @class */ (function () {
    function SidebarHeaderComponent() {
    }
    SidebarHeaderComponent.prototype.onClick = function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SidebarHeaderComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SidebarHeaderComponent.prototype, "emit", void 0);
    SidebarHeaderComponent = __decorate([
        Component({
            selector: 'n7-sidebar-header',
            template: "<div *ngIf=\"data\" class=\"n7-sidebar-header {{ data.classes || ''}}\">\n    <span class=\"n7-sidebar-header__icon-left {{ data.iconLeft }}\" \n          *ngIf=\"data.iconLeft\">\n    </span>\n    <span class=\"n7-sidebar-header__text-wrapper\"\n          *ngIf=\"data.text || data.additionalText\">\n        <span class=\"n7-sidebar-header__text\">\n            {{data.text}}\n        </span>\n        <span class=\"n7-sidebar-header__secondary-text\" \n              *ngIf=\"data.additionalText\">\n            {{data.additionalText}}\n        </span>\n    </span>\n    <span *ngIf=\"data.iconRight\"\n          class=\"n7-sidebar-header__icon-right {{ data.iconRight }}\" \n          (click)=\"onClick(data.payload)\"></span>\n</div>"
        })
    ], SidebarHeaderComponent);
    return SidebarHeaderComponent;
}());
export { SidebarHeaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1oZWFkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NpZGViYXItaGVhZGVyL3NpZGViYXItaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixvQkFBb0I7QUFDcEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQTJDakQ7SUFBQTtJQVdBLENBQUM7SUFMQyx3Q0FBTyxHQUFQLFVBQVEsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQVRRO1FBQVIsS0FBSyxFQUFFOzt3REFBeUI7SUFFeEI7UUFBUixLQUFLLEVBQUU7O3dEQUFXO0lBSFIsc0JBQXNCO1FBSmxDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsNnVCQUFvQztTQUNyQyxDQUFDO09BQ1csc0JBQXNCLENBV2xDO0lBQUQsNkJBQUM7Q0FBQSxBQVhELElBV0M7U0FYWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU0lERUJBUi1IRUFERVIudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFNpZGViYXJIZWFkZXJDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBpY29uTGVmdCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdGV4dCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgYWRkaXRpb25hbFRleHQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGljb25SaWdodCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2lkZWJhckhlYWRlckRhdGEge1xuICAvKipcbiAgICogdGhlIGhlYWRlcnMgbGVmdG1vc3QgaWNvblxuICAgKi9cbiAgaWNvbkxlZnQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aGUgdGl0bGUgdGV4dFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgdGV4dCwgZGlzcGxheWVkIG9uIHRoZSByaWdodCBvZiB0aGUgdGV4dFxuICAgKi9cbiAgYWRkaXRpb25hbFRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aGUgaGVhZGVycyByaWdodG1vc3QgaWNvblxuICAgKi9cbiAgaWNvblJpZ2h0Pzogc3RyaW5nO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBhbnk7XG4gIC8qKlxuICAgKiBwYXlsb2FkIGZvciBvbkNsaWNrIGV2ZW50c1xuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctc2lkZWJhci1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZWJhci1oZWFkZXIuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhckhlYWRlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IFNpZGViYXJIZWFkZXJEYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cbn1cbiJdfQ==