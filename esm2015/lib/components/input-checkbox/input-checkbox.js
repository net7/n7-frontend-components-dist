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
        template: "<div *ngIf=\"data\" class=\"n7-input-checkbox {{ data.classes || '' }}\">\n    <fieldset class=\"n7-input-checkbox__fieldset\">\n        <legend class=\"n7-input-checkbox__legend\" *ngIf=\"data.legend\">{{ data.legend }}</legend>\n        <ng-container *ngFor=\"let input of data.checkboxes\">\n            <div class=\"n7-input-checkbox__input-wrapper\">\n                <input type=\"checkbox\"\n                 id=\"{{ input.id }}\"\n                 class=\"n7-input-checkbox__input {{ input.classes || '' }}\"\n                 [checked]=\"input.checked\"\n                 [disabled]=\"input.disabled\"\n                 (change)=\"onChange(input.payload, $event.target.checked)\">\n                <label *ngIf=\"input.label\"\n                 class=\"n7-input-checkbox__label\"\n                 for=\"{{ input.id }}\">{{ input.label }}</label>\n            </div>          \n        </ng-container>\n    </fieldset>\n</div>\n"
    })
], InputCheckboxComponent);
export { InputCheckboxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2lucHV0LWNoZWNrYm94L2lucHV0LWNoZWNrYm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixvQkFBb0I7QUFDcEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQW1FakQsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFLakMsUUFBUSxDQUFDLFlBQVksRUFBRSxLQUFNO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBQ0YsQ0FBQTtBQVJVO0lBQVIsS0FBSyxFQUFFOztvREFBeUI7QUFFeEI7SUFBUixLQUFLLEVBQUU7O29EQUFXO0FBSFIsc0JBQXNCO0lBSmxDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IscTdCQUFvQztLQUNyQyxDQUFDO0dBQ1csc0JBQXNCLENBU2xDO1NBVFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIElOUFVULUNIRUNLQk9YLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBJbnB1dENoZWNrYm94XG4gKlxuICogQHByb3BlcnR5IGlkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBsYWJlbCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2hlY2tlZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgZGlzYWJsZWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbnB1dENoZWNrYm94IHtcbiAgLyoqXG4gICAqIFVuaXF1ZSBJRCBmb3IgdGhlIGNoZWNrYm94XG4gICAqL1xuICBpZDogc3RyaW5nO1xuICAvKipcbiAgICogTGFiZWwgZm9yIHRoZSBjaGVja2JveFxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICAqIERlZmF1bHRzIHRoZSBjaGVja2JveCB0byBiZSBjaGVja2VkXG4gICAqL1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFNldHMgdGhlIGRpc2FibGVkIEhUTUwgYXR0cmlidXRlXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBQYXlsb2FkIGZvciB0aGUgY2hhbmdlIGV2ZW50XG4gICAqL1xuICBwYXlsb2FkPzogYW55O1xuICAvKipcbiAgICogQWRkaXRpb25hbCBIVE1MIENsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIGRhdGEgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBJbnB1dENoZWNrYm94RGF0YVxuICogQHByb3BlcnR5IGNoZWNrYm94ZXMgKHJlcXVpcmVkKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElucHV0Q2hlY2tib3hEYXRhIHtcbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIGlucHV0IGNoZWNrYm94ZXNcbiAgICovXG4gIGNoZWNrYm94ZXM6IElucHV0Q2hlY2tib3hbXTtcbiAgLyoqXG4gICAqIEZpZWxkc2V0IChncm91cCkgbGVnZW5kIGxhYmVsXG4gICAqL1xuICBsZWdlbmQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIEhUTUwgQ2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctaW5wdXQtY2hlY2tib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtY2hlY2tib3guaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRDaGVja2JveENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElucHV0Q2hlY2tib3hEYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNoYW5nZShpbnB1dFBheWxvYWQsIHZhbHVlPykge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7IGlucHV0UGF5bG9hZCwgdmFsdWUgfSk7XG4gIH1cbn1cbiJdfQ==