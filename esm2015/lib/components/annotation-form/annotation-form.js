import { __decorate, __metadata } from "tslib";
//---------------------------
// ANNOTATION-FORM.ts
//---------------------------
import { Component, Input } from '@angular/core';
let AnnotationFormComponent = class AnnotationFormComponent {
    onClick(payload) {
        if (!this.emit) {
            return;
        }
        this.emit('click', payload);
    }
    onChange(inputPayload, inputValue) {
        if (!this.emit) {
            return;
        }
        this.emit('change', { inputPayload, inputValue });
    }
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
export { AnnotationFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi1mb3JtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hbm5vdGF0aW9uLWZvcm0vYW5ub3RhdGlvbi1mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2QkFBNkI7QUFDN0IscUJBQXFCO0FBQ3JCLDZCQUE2QjtBQUM3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQTJEakQsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFLbEMsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxRQUFRLENBQUMsWUFBWSxFQUFFLFVBQVU7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Q0FDRixDQUFBO0FBbkJVO0lBQVIsS0FBSyxFQUFFOztxREFBMEI7QUFFekI7SUFBUixLQUFLLEVBQUU7O3FEQUFXO0FBSFIsdUJBQXVCO0lBSm5DLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsMDVFQUFxQztLQUN0QyxDQUFDO0dBQ1csdUJBQXVCLENBb0JuQztTQXBCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQU5OT1RBVElPTi1GT1JNLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcblxudHlwZSBTZWxlY3RJdGVtT3B0aW9uID0ge1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xuICBzZWxlY3RlZD86IGJvb2xlYW47XG59O1xuXG50eXBlIFNlbGVjdEl0ZW1EaXZpZGVyID0ge1xuICBkaXZpZGVyOiBib29sZWFuO1xufTtcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEFubm90YXRpb25Gb3JtQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgc2VsZWN0IChyZXF1aXJlZClcbiAqIC0gbGFiZWwgKHJlcXVpcmVkKVxuICogLSB0b2dnbGVMYWJlbCAocmVxdWlyZWQpXG4gKiAtIGl0ZW1zIChyZXF1aXJlZClcbiAqIC0gcGF5bG9hZCAocmVxdWlyZWQpXG4gKiAtIGljb24gKG9wdGlvbmFsKVxuICogLSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBhY3Rpb25zIChyZXF1aXJlZClcbiAqIC0gbGFiZWwgKHJlcXVpcmVkKVxuICogLSBwYXlsb2FkIChyZXF1aXJlZClcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXG4gKiAtIGljb24gKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHRleHRhcmVhIChvcHRpb25hbClcbiAqIC0gdmFsdWUgKHJlcXVpcmVkKVxuICogLSBwYXlsb2FkIChyZXF1aXJlZClcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQW5ub3RhdGlvbkZvcm1EYXRhIHtcbiAgc2VsZWN0OiB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB0b2dnbGVMYWJlbDogc3RyaW5nO1xuICAgIGl0ZW1zOiAoU2VsZWN0SXRlbU9wdGlvbiB8IFNlbGVjdEl0ZW1EaXZpZGVyKVtdO1xuICAgIHBheWxvYWQ6IGFueTtcbiAgICBpY29uPzogSWNvbjtcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xuICB9O1xuICBhY3Rpb25zOiB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBwYXlsb2FkOiBhbnk7XG4gICAgY2xhc3Nlcz86IGFueTtcbiAgICBpY29uPzogSWNvbjtcbiAgfVtdO1xuICB0ZXh0YXJlYT86IHtcbiAgICB2YWx1ZTogc3RyaW5nIHwgbnVsbDtcbiAgICBwYXlsb2FkOiBhbnk7XG4gICAgY2xhc3Nlcz86IHN0cmluZztcbiAgfTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctYW5ub3RhdGlvbi1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Fubm90YXRpb24tZm9ybS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uRm9ybUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IEFubm90YXRpb25Gb3JtRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DbGljayhwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cblxuICBvbkNoYW5nZShpbnB1dFBheWxvYWQsIGlucHV0VmFsdWUpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgeyBpbnB1dFBheWxvYWQsIGlucHV0VmFsdWUgfSk7XG4gIH1cbn1cbiJdfQ==