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
        template: "<div *ngIf=\"data\" class=\"n7-input-checkbox {{ data.classes || '' }}\">\n  <ng-container *ngFor=\"let input of data.checkboxes\">\n    <input type=\"checkbox\"\n           id=\"{{ input.id }}\"\n           class=\"n7-input-checkbox__input {{ input.classes || '' }}\"\n           [checked]=\"input.checked\"\n           [disabled]=\"input.disabled\"\n           (change)=\"onChange(input.payload, $event.target.checked)\">\n    <label *ngIf=\"input.label\"\n           class=\"n7-input-checkbox__label\"\n           for=\"{{ input.id }}\">\n      {{ input.label }}\n    </label>\n  </ng-container>\n</div>\n"
    })
], InputCheckboxComponent);
export { InputCheckboxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2lucHV0LWNoZWNrYm94L2lucHV0LWNoZWNrYm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixvQkFBb0I7QUFDcEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQStEakQsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFLakMsUUFBUSxDQUFDLFlBQVksRUFBRSxLQUFNO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBQ0YsQ0FBQTtBQVJVO0lBQVIsS0FBSyxFQUFFOztvREFBeUI7QUFFeEI7SUFBUixLQUFLLEVBQUU7O29EQUFXO0FBSFIsc0JBQXNCO0lBSmxDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsNG1CQUFvQztLQUNyQyxDQUFDO0dBQ1csc0JBQXNCLENBU2xDO1NBVFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIElOUFVULUNIRUNLQk9YLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBJbnB1dENoZWNrYm94XG4gKlxuICogQHByb3BlcnR5IGlkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBsYWJlbCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2hlY2tlZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgZGlzYWJsZWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbnB1dENoZWNrYm94IHtcbiAgLyoqXG4gICAqIFVuaXF1ZSBJRCBmb3IgdGhlIGNoZWNrYm94XG4gICAqL1xuICBpZDogc3RyaW5nO1xuICAvKipcbiAgICogTGFiZWwgZm9yIHRoZSBjaGVja2JveFxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICAqIERlZmF1bHRzIHRoZSBjaGVja2JveCB0byBiZSBjaGVja2VkXG4gICAqL1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFNldHMgdGhlIGRpc2FibGVkIEhUTUwgYXR0cmlidXRlXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBQYXlsb2FkIGZvciB0aGUgY2hhbmdlIGV2ZW50XG4gICAqL1xuICBwYXlsb2FkPzogYW55O1xuICAvKipcbiAgICogQWRkaXRpb25hbCBIVE1MIENsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIGRhdGEgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBJbnB1dENoZWNrYm94RGF0YVxuICogQHByb3BlcnR5IGNoZWNrYm94ZXMgKHJlcXVpcmVkKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElucHV0Q2hlY2tib3hEYXRhIHtcbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIGlucHV0IGNoZWNrYm94ZXNcbiAgICovXG4gIGNoZWNrYm94ZXM6IElucHV0Q2hlY2tib3hbXTtcbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgSFRNTCBDbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1pbnB1dC1jaGVja2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1jaGVja2JveC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJbnB1dENoZWNrYm94Q29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSW5wdXRDaGVja2JveERhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2hhbmdlKGlucHV0UGF5bG9hZCwgdmFsdWU/KSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgaW5wdXRQYXlsb2FkLCB2YWx1ZSB9KTtcbiAgfVxufVxuIl19