import { __decorate, __metadata } from "tslib";
//---------------------------
// ANNOTATION-FORM.ts
//---------------------------
import { Component, Input } from '@angular/core';
var AnnotationFormComponent = /** @class */ (function () {
    function AnnotationFormComponent() {
    }
    AnnotationFormComponent.prototype.onClick = function (payload) {
        if (!this.emit) {
            return;
        }
        this.emit('click', payload);
    };
    AnnotationFormComponent.prototype.onChange = function (inputPayload, inputValue) {
        if (!this.emit) {
            return;
        }
        this.emit('change', { inputPayload: inputPayload, inputValue: inputValue });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AnnotationFormComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AnnotationFormComponent.prototype, "emit", void 0);
    AnnotationFormComponent = __decorate([
        Component({
            selector: 'n7-annotation-form',
            template: "<div *ngIf=\"data\" class=\"n7-annotation-form\">\r\n    <div *ngIf=\"data.textarea\" class=\"n7-annotation-form__textarea {{ data.textarea.classes || '' }}\">\r\n        <textarea\r\n            (input)=\"onChange(data.textarea.payload, $event.target.value)\">{{ data.textarea.value || '' }}</textarea>\r\n    </div>\r\n    <div *ngIf=\"data.select\" class=\"n7-annotation-form__select {{ data.select.classes || '' }}\">\r\n\r\n        <!-- Label of selected element -->\r\n        <div class=\"n7-annotation-form__select-label\"\r\n            (click)=\"onClick(data.select.payload)\">\r\n            {{ data.select.label }}\r\n        </div>\r\n\r\n        <!-- Select container -->\r\n        <div class=\"n7-annotation-form__select-container {{ data.select.classes || '' }}\">\r\n            <!-- Toggle for opening the select -->\r\n            <div class=\"n7-annotation-form__select-toggle\" (click)=\"onClick(data.select.payload)\">\r\n                <span class=\"n7-annotation-form__select-toggle-label\">{{ data.select.toggleLabel }}</span>\r\n                <span class=\"n7-icon n7-icon-caret-down\"></span>\r\n            </div>\r\n            <!-- List with elements to select from -->\r\n            <div class=\"n7-annotation-form__select-items\">\r\n                <ng-container *ngFor=\"let item of data.select.items\">\r\n                    <div *ngIf=\"!item['divider']\" \r\n                        class=\"n7-annotation-form__select-option\"\r\n                        [ngClass]=\"{\r\n                            'is-selected': !!item['selected']\r\n                        }\"\r\n                        (click)=\"onChange(data.select.payload, item['value'])\">\r\n                        {{ item['label'] }}\r\n                    </div>\r\n        \r\n                    <div *ngIf=\"item['divider']\" class=\"n7-annotation-form__select-divider\"></div>\r\n                </ng-container>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"n7-annotation-form__actions\">\r\n        <div *ngFor=\"let action of data.actions\"\r\n            class=\"n7-annotation-form__actions-item\">\r\n            <a (click)=\"onClick(action.payload)\" class=\"n7-btn {{ action.classes || '' }}\">\r\n                <span class=\"n7-annotation-form__actions-item-label\">{{ action.label }}</span>\r\n                <span *ngIf=\"action.icon\" class=\"n7-annotation-form__actions-item-icon n7-btn__icon {{ action.icon }}\"></span>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>"
        })
    ], AnnotationFormComponent);
    return AnnotationFormComponent;
}());
export { AnnotationFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi1mb3JtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hbm5vdGF0aW9uLWZvcm0vYW5ub3RhdGlvbi1mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2QkFBNkI7QUFDN0IscUJBQXFCO0FBQ3JCLDZCQUE2QjtBQUM3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQTJEakQ7SUFBQTtJQW9CQSxDQUFDO0lBZkMseUNBQU8sR0FBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCwwQ0FBUSxHQUFSLFVBQVMsWUFBWSxFQUFFLFVBQVU7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksY0FBQSxFQUFFLFVBQVUsWUFBQSxFQUFFLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBbEJRO1FBQVIsS0FBSyxFQUFFOzt5REFBMEI7SUFFekI7UUFBUixLQUFLLEVBQUU7O3lEQUFXO0lBSFIsdUJBQXVCO1FBSm5DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsMC9FQUFxQztTQUN0QyxDQUFDO09BQ1csdUJBQXVCLENBb0JuQztJQUFELDhCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FwQlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQU5OT1RBVElPTi1GT1JNLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcclxuXHJcbnR5cGUgU2VsZWN0SXRlbU9wdGlvbiA9IHtcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbiAgc2VsZWN0ZWQ/OiBib29sZWFuO1xyXG59O1xyXG5cclxudHlwZSBTZWxlY3RJdGVtRGl2aWRlciA9IHtcclxuICBkaXZpZGVyOiBib29sZWFuO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgQW5ub3RhdGlvbkZvcm1Db21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgc2VsZWN0IChyZXF1aXJlZClcclxuICogLSBsYWJlbCAocmVxdWlyZWQpXHJcbiAqIC0gdG9nZ2xlTGFiZWwgKHJlcXVpcmVkKVxyXG4gKiAtIGl0ZW1zIChyZXF1aXJlZClcclxuICogLSBwYXlsb2FkIChyZXF1aXJlZClcclxuICogLSBpY29uIChvcHRpb25hbClcclxuICogLSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGFjdGlvbnMgKHJlcXVpcmVkKVxyXG4gKiAtIGxhYmVsIChyZXF1aXJlZClcclxuICogLSBwYXlsb2FkIChyZXF1aXJlZClcclxuICogLSBjbGFzc2VzIChvcHRpb25hbClcclxuICogLSBpY29uIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHRleHRhcmVhIChvcHRpb25hbClcclxuICogLSB2YWx1ZSAocmVxdWlyZWQpXHJcbiAqIC0gcGF5bG9hZCAocmVxdWlyZWQpXHJcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEFubm90YXRpb25Gb3JtRGF0YSB7XHJcbiAgc2VsZWN0OiB7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgdG9nZ2xlTGFiZWw6IHN0cmluZztcclxuICAgIGl0ZW1zOiAoU2VsZWN0SXRlbU9wdGlvbiB8IFNlbGVjdEl0ZW1EaXZpZGVyKVtdO1xyXG4gICAgcGF5bG9hZDogYW55O1xyXG4gICAgaWNvbj86IEljb247XHJcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gIH07XHJcbiAgYWN0aW9uczoge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIHBheWxvYWQ6IGFueTtcclxuICAgIGNsYXNzZXM/OiBhbnk7XHJcbiAgICBpY29uPzogSWNvbjtcclxuICB9W107XHJcbiAgdGV4dGFyZWE/OiB7XHJcbiAgICB2YWx1ZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIHBheWxvYWQ6IGFueTtcclxuICAgIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgfTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1hbm5vdGF0aW9uLWZvcm0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hbm5vdGF0aW9uLWZvcm0uaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFubm90YXRpb25Gb3JtQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBBbm5vdGF0aW9uRm9ybURhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgb25DbGljayhwYXlsb2FkKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UoaW5wdXRQYXlsb2FkLCBpbnB1dFZhbHVlKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7IGlucHV0UGF5bG9hZCwgaW5wdXRWYWx1ZSB9KTtcclxuICB9XHJcbn1cclxuIl19