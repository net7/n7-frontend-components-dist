//---------------------------
// INPUT-CHECKBOX.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let InputCheckboxComponent = class InputCheckboxComponent {
    onChange(inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload, value });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], InputCheckboxComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], InputCheckboxComponent.prototype, "emit", void 0);
InputCheckboxComponent = __decorate([
    Component({
        selector: 'n7-input-checkbox',
        template: "<div *ngIf=\"data\" class=\"n7-input-checkbox {{ data.classes || '' }}\">\r\n  <ng-container *ngFor=\"let input of data.checkboxes\">\r\n    <input type=\"checkbox\"\r\n           id=\"{{ input.id }}\"\r\n           class=\"n7-input-checkbox__input {{ input.classes || '' }}\"\r\n           [checked]=\"input.checked\"\r\n           [disabled]=\"input.disabled\"\r\n           (change)=\"onChange(input.payload, $event.target.checked)\">\r\n    <label *ngIf=\"input.label\"\r\n           class=\"n7-input-checkbox__label\"\r\n           for=\"{{ input.id }}\">\r\n      {{ input.label }}\r\n    </label>\r\n  </ng-container>\r\n</div>\r\n"
    })
], InputCheckboxComponent);
export { InputCheckboxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2lucHV0LWNoZWNrYm94L2lucHV0LWNoZWNrYm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixvQkFBb0I7QUFDcEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQStEakQsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFLakMsUUFBUSxDQUFDLFlBQVksRUFBRSxLQUFNO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBQ0YsQ0FBQTtBQVJVO0lBQVIsS0FBSyxFQUFFOztvREFBeUI7QUFFeEI7SUFBUixLQUFLLEVBQUU7O29EQUFXO0FBSFIsc0JBQXNCO0lBSmxDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsMG9CQUFvQztLQUNyQyxDQUFDO0dBQ1csc0JBQXNCLENBU2xDO1NBVFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gSU5QVVQtQ0hFQ0tCT1gudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIElucHV0Q2hlY2tib3hcclxuICpcclxuICogQHByb3BlcnR5IGlkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGxhYmVsIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNoZWNrZWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgZGlzYWJsZWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRDaGVja2JveCB7XHJcbiAgLyoqXHJcbiAgICogVW5pcXVlIElEIGZvciB0aGUgY2hlY2tib3hcclxuICAgKi9cclxuICBpZDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIExhYmVsIGZvciB0aGUgY2hlY2tib3hcclxuICAgKi9cclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHRzIHRoZSBjaGVja2JveCB0byBiZSBjaGVja2VkXHJcbiAgICovXHJcbiAgY2hlY2tlZD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgZGlzYWJsZWQgSFRNTCBhdHRyaWJ1dGVcclxuICAgKi9cclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogUGF5bG9hZCBmb3IgdGhlIGNoYW5nZSBldmVudFxyXG4gICAqL1xyXG4gIHBheWxvYWQ/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBIVE1MIENsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgZGF0YSBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIElucHV0Q2hlY2tib3hEYXRhXHJcbiAqIEBwcm9wZXJ0eSBjaGVja2JveGVzIChyZXF1aXJlZClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRDaGVja2JveERhdGEge1xyXG4gIC8qKlxyXG4gICAqIEFuIGFycmF5IG9mIGlucHV0IGNoZWNrYm94ZXNcclxuICAgKi9cclxuICBjaGVja2JveGVzOiBJbnB1dENoZWNrYm94W107XHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBIVE1MIENsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWlucHV0LWNoZWNrYm94JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtY2hlY2tib3guaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIElucHV0Q2hlY2tib3hDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IElucHV0Q2hlY2tib3hEYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIG9uQ2hhbmdlKGlucHV0UGF5bG9hZCwgdmFsdWU/KSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7IGlucHV0UGF5bG9hZCwgdmFsdWUgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==