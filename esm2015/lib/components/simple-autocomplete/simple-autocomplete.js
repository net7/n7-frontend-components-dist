//---------------------------
// SIMPLE-AUTOCOMPLETE.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let SimpleAutocompleteComponent = class SimpleAutocompleteComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], SimpleAutocompleteComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SimpleAutocompleteComponent.prototype, "emit", void 0);
SimpleAutocompleteComponent = __decorate([
    Component({
        selector: 'n7-simple-autocomplete',
        template: "<div *ngIf=\"data\" class=\"n7-simple-autocomplete\">\r\n    <ul class=\"n7-simple-autocomplete__list {{data.classes || ''}}\">\r\n        <li *ngFor=\"let suggestion of data.suggestion\" \r\n            class=\"n7-simple-autocomplete__item\">\r\n            <n7-anchor-wrapper\r\n            [classes]=\"'n7-simple-autocomplete__link'\"\r\n            [data]=\"suggestion.anchor\"\r\n            (clicked)=\"onClick($event)\">\r\n              <span class=\"n7-simple-autocomplete__label\" [innerHTML]=\"suggestion.text\"></span>\r\n            </n7-anchor-wrapper>\r\n        </li>\r\n    </ul> \r\n</div>"
    })
], SimpleAutocompleteComponent);
export { SimpleAutocompleteComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWF1dG9jb21wbGV0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2ltcGxlLWF1dG9jb21wbGV0ZS9zaW1wbGUtYXV0b2NvbXBsZXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXdDakQsSUFBYSwyQkFBMkIsR0FBeEMsTUFBYSwyQkFBMkI7SUFLdEMsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDRixDQUFBO0FBVFU7SUFBUixLQUFLLEVBQUU7O3lEQUE4QjtBQUU3QjtJQUFSLEtBQUssRUFBRTs7eURBQVc7QUFIUiwyQkFBMkI7SUFKdkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHdCQUF3QjtRQUNsQywybUJBQXlDO0tBQzFDLENBQUM7R0FDVywyQkFBMkIsQ0FVdkM7U0FWWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBTSU1QTEUtQVVUT0NPTVBMRVRFLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIFNpbXBsZUF1dG9jb21wbGV0ZUNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBzdWdnZXN0aW9uIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTaW1wbGVBdXRvY29tcGxldGVEYXRhIHtcclxuICAvKipcclxuICAgKiBTdWdnZXN0ZWQgd29yZCBlbmRpbmdzXHJcbiAgICovXHJcbiAgc3VnZ2VzdGlvbjogU2ltcGxlQXV0b2NvbXBsZXRlU3VnZ2VzdGlvbltdO1xyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgSFRNTCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IGFueTtcclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIGRhdGEgdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgU2ltcGxlQXV0b2NvbXBsZXRlQ29tcG9uZW50J3MgXCJTdWdnZXN0aW9uXCJcclxuICpcclxuICogQHByb3BlcnR5IHRleHRcclxuICogQHByb3BlcnR5IGFuY2hvciAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFNpbXBsZUF1dG9jb21wbGV0ZVN1Z2dlc3Rpb24ge1xyXG4gIHRleHQ6IHN0cmluZztcclxuICBhbmNob3I/OiBBbmNob3I7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctc2ltcGxlLWF1dG9jb21wbGV0ZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NpbXBsZS1hdXRvY29tcGxldGUuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpbXBsZUF1dG9jb21wbGV0ZUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogU2ltcGxlQXV0b2NvbXBsZXRlRGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBvbkNsaWNrKHBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxufVxyXG4iXX0=