//---------------------------
// INPUT-SELECT.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let InputSelectComponent = class InputSelectComponent {
    onChange(inputPayload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload, value });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], InputSelectComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], InputSelectComponent.prototype, "emit", void 0);
InputSelectComponent = __decorate([
    Component({
        selector: 'n7-input-select',
        template: "<div *ngIf=\"data as input\"\n     class=\"n7-input-select\">\n  <label *ngIf=\"input.label\"\n         for=\"{{ input.id }}\">{{ input.label }}</label>\n  <select (change)=\"onChange(input.payload, $event.target.value)\"\n          id=\"{{ input.id }}\"\n          class=\"n7-facet__input-select {{ input.classes || '' }}\"\n          [disabled]=\"input.disabled\">\n    <option *ngFor=\"let option of input.options\"\n            [value]=\"option.value\"\n            [disabled]=\"option.disabled\"\n            [selected]=\"option.selected\">{{ option.label }}</option>\n  </select>\n</div>\n"
    })
], InputSelectComponent);
export { InputSelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9pbnB1dC1zZWxlY3QvaW5wdXQtc2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixrQkFBa0I7QUFDbEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWtFakQsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFLL0IsUUFBUSxDQUFDLFlBQVksRUFBRSxLQUFNO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBQ0YsQ0FBQTtBQVJVO0lBQVIsS0FBSyxFQUFFOztrREFBdUI7QUFFdEI7SUFBUixLQUFLLEVBQUU7O2tEQUFXO0FBSFIsb0JBQW9CO0lBSmhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsK2xCQUFrQztLQUNuQyxDQUFDO0dBQ1csb0JBQW9CLENBU2hDO1NBVFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIElOUFVULVNFTEVDVC50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgSW5wdXRTZWxlY3RcbiAqXG4gKiBAcHJvcGVydHkgaWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IG9wdGlvbnMgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGxhYmVsIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBkaXNhYmxlZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElucHV0U2VsZWN0RGF0YSB7XG4gIC8qKlxuICAgKiBBIHVuaXF1ZSBJRCBmb3IgdGhlIHNlbGVjdCBpdGVtXG4gICAqL1xuICBpZDogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGFycmF5IG9mIDxvcHRpb24+IGVsZW1lbnRzXG4gICAqL1xuICBvcHRpb25zOiBBcnJheTx7XG4gICAgLyoqXG4gICAgICogVGhlIHJlbmRlcmVkIHRleHQgZm9yIHRoZSA8b3B0aW9uPiBlbGVtZW50XG4gICAgICovXG4gICAgbGFiZWw6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgZXZlbnQgdmFsdWUgZm9yIHRoZSA8b3B0aW9uPiBlbGVtZW50XG4gICAgICovXG4gICAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBvcHRpb24gYXMgZGVmYXVsdCAoc2VsZWN0ZWQpXG4gICAgICovXG4gICAgc2VsZWN0ZWQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFByZXZlbnRzIHRoZSB1c2VyIGZyb20gc2VsZWN0aW5nIHRoaXMgb3B0aW9uXG4gICAgICovXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICB9PjtcbiAgLyoqXG4gICAqIExhYmVsIGZvciB0aGUgPHNlbGVjdD4gZWxlbWVudFxuICAgKi9cbiAgbGFiZWw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBQcmV2ZW50cyB0aGUgdXNlciBmcm9tIGNoYW5naW5nIGFueSBvcHRpb25cbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFBheWxvYWQgZm9yIHRoZSBzZWxlY3QncyBjaGFuZ2UgZXZlbnRcbiAgICovXG4gIHBheWxvYWQ/OiBhbnk7XG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIEhUTUwgQ2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgZGF0YSBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXG4gICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctaW5wdXQtc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LXNlbGVjdC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJbnB1dFNlbGVjdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElucHV0U2VsZWN0RGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DaGFuZ2UoaW5wdXRQYXlsb2FkLCB2YWx1ZT8pIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgeyBpbnB1dFBheWxvYWQsIHZhbHVlIH0pO1xuICB9XG59XG4iXX0=