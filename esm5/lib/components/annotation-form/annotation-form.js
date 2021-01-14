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
            template: "<div *ngIf=\"data\" class=\"n7-annotation-form\">\n    <div *ngIf=\"data.textarea\" class=\"n7-annotation-form__textarea {{ data.textarea.classes || '' }}\">\n        <textarea\n            (input)=\"onChange(data.textarea.payload, $event.target.value)\">{{ data.textarea.value || '' }}</textarea>\n    </div>\n    <div *ngIf=\"data.select\" class=\"n7-annotation-form__select {{ data.select.classes || '' }}\">\n\n        <!-- Label of selected element -->\n        <div class=\"n7-annotation-form__select-label\"\n            (click)=\"onClick(data.select.payload)\">\n            {{ data.select.label }}\n        </div>\n\n        <!-- Select container -->\n        <div class=\"n7-annotation-form__select-container {{ data.select.classes || '' }}\">\n            <!-- Toggle for opening the select -->\n            <div class=\"n7-annotation-form__select-toggle\" (click)=\"onClick(data.select.payload)\">\n                <span class=\"n7-annotation-form__select-toggle-label\">{{ data.select.toggleLabel }}</span>\n                <span class=\"n7-icon n7-icon-caret-down\"></span>\n            </div>\n            <!-- List with elements to select from -->\n            <div class=\"n7-annotation-form__select-items\">\n                <ng-container *ngFor=\"let item of data.select.items\">\n                    <div *ngIf=\"!item['divider']\" \n                        class=\"n7-annotation-form__select-option\"\n                        [ngClass]=\"{\n                            'is-selected': !!item['selected']\n                        }\"\n                        (click)=\"onChange(data.select.payload, item['value'])\">\n                        {{ item['label'] }}\n                    </div>\n        \n                    <div *ngIf=\"item['divider']\" class=\"n7-annotation-form__select-divider\"></div>\n                </ng-container>\n            </div>\n        </div>\n\n    </div>\n\n    <div class=\"n7-annotation-form__actions\">\n        <div *ngFor=\"let action of data.actions\"\n            class=\"n7-annotation-form__actions-item\">\n            <a (click)=\"onClick(action.payload)\" class=\"n7-btn {{ action.classes || '' }}\">\n                <span class=\"n7-annotation-form__actions-item-label\">{{ action.label }}</span>\n                <span *ngIf=\"action.icon\" class=\"n7-annotation-form__actions-item-icon n7-btn__icon {{ action.icon }}\"></span>\n            </a>\n        </div>\n    </div>\n</div>"
        })
    ], AnnotationFormComponent);
    return AnnotationFormComponent;
}());
export { AnnotationFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi1mb3JtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hbm5vdGF0aW9uLWZvcm0vYW5ub3RhdGlvbi1mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2QkFBNkI7QUFDN0IscUJBQXFCO0FBQ3JCLDZCQUE2QjtBQUM3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQTJEakQ7SUFBQTtJQW9CQSxDQUFDO0lBZkMseUNBQU8sR0FBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCwwQ0FBUSxHQUFSLFVBQVMsWUFBWSxFQUFFLFVBQVU7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksY0FBQSxFQUFFLFVBQVUsWUFBQSxFQUFFLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBbEJRO1FBQVIsS0FBSyxFQUFFOzt5REFBMEI7SUFFekI7UUFBUixLQUFLLEVBQUU7O3lEQUFXO0lBSFIsdUJBQXVCO1FBSm5DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsMDVFQUFxQztTQUN0QyxDQUFDO09BQ1csdUJBQXVCLENBb0JuQztJQUFELDhCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FwQlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEFOTk9UQVRJT04tRk9STS50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XG5cbnR5cGUgU2VsZWN0SXRlbU9wdGlvbiA9IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbiAgc2VsZWN0ZWQ/OiBib29sZWFuO1xufTtcblxudHlwZSBTZWxlY3RJdGVtRGl2aWRlciA9IHtcbiAgZGl2aWRlcjogYm9vbGVhbjtcbn07XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBBbm5vdGF0aW9uRm9ybUNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IHNlbGVjdCAocmVxdWlyZWQpXG4gKiAtIGxhYmVsIChyZXF1aXJlZClcbiAqIC0gdG9nZ2xlTGFiZWwgKHJlcXVpcmVkKVxuICogLSBpdGVtcyAocmVxdWlyZWQpXG4gKiAtIHBheWxvYWQgKHJlcXVpcmVkKVxuICogLSBpY29uIChvcHRpb25hbClcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgYWN0aW9ucyAocmVxdWlyZWQpXG4gKiAtIGxhYmVsIChyZXF1aXJlZClcbiAqIC0gcGF5bG9hZCAocmVxdWlyZWQpXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxuICogLSBpY29uIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB0ZXh0YXJlYSAob3B0aW9uYWwpXG4gKiAtIHZhbHVlIChyZXF1aXJlZClcbiAqIC0gcGF5bG9hZCAocmVxdWlyZWQpXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFubm90YXRpb25Gb3JtRGF0YSB7XG4gIHNlbGVjdDoge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdG9nZ2xlTGFiZWw6IHN0cmluZztcbiAgICBpdGVtczogKFNlbGVjdEl0ZW1PcHRpb24gfCBTZWxlY3RJdGVtRGl2aWRlcilbXTtcbiAgICBwYXlsb2FkOiBhbnk7XG4gICAgaWNvbj86IEljb247XG4gICAgY2xhc3Nlcz86IHN0cmluZztcbiAgfTtcbiAgYWN0aW9uczoge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgcGF5bG9hZDogYW55O1xuICAgIGNsYXNzZXM/OiBhbnk7XG4gICAgaWNvbj86IEljb247XG4gIH1bXTtcbiAgdGV4dGFyZWE/OiB7XG4gICAgdmFsdWU6IHN0cmluZyB8IG51bGw7XG4gICAgcGF5bG9hZDogYW55O1xuICAgIGNsYXNzZXM/OiBzdHJpbmc7XG4gIH07XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWFubm90YXRpb24tZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbm5vdGF0aW9uLWZvcm0uaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvbkZvcm1Db21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBBbm5vdGF0aW9uRm9ybURhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG5cbiAgb25DaGFuZ2UoaW5wdXRQYXlsb2FkLCBpbnB1dFZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgaW5wdXRQYXlsb2FkLCBpbnB1dFZhbHVlIH0pO1xuICB9XG59XG4iXX0=