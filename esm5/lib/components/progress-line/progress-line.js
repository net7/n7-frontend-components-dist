//---------------------------
// PROGRESS-LINE.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var ProgressLineComponent = /** @class */ (function () {
    function ProgressLineComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProgressLineComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProgressLineComponent.prototype, "emit", void 0);
    ProgressLineComponent = __decorate([
        Component({
            selector: 'n7-progress-line',
            template: "<div *ngIf=\"data\" class=\"n7-progress-line\">\n    <div class=\"n7-progress-line__text-wrapper\">\n        <span class=\"n7-progress-line__label\" *ngIf=\"data.label\">\n            {{ data.label }}\n        </span>\n        <span class=\"n7-progress-line__value\" *ngIf=\"data.value || data.value===0\">\n            {{ data.value }}%\n        </span>\n    </div>\n    <div class=\"n7-progress-line__wrapper\">\n        <div class='n7-progress-line__bar' [ngStyle]=\"{'width.%':data.value}\"> {{data.value}}%\n        </div>\n    </div>\n</div>"
        })
    ], ProgressLineComponent);
    return ProgressLineComponent;
}());
export { ProgressLineComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtbGluZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcHJvZ3Jlc3MtbGluZS9wcm9ncmVzcy1saW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixtQkFBbUI7QUFDbkIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXVCakQ7SUFBQTtJQUlBLENBQUM7SUFIVTtRQUFSLEtBQUssRUFBRTs7dURBQXdCO0lBRXZCO1FBQVIsS0FBSyxFQUFFOzt1REFBVztJQUhSLHFCQUFxQjtRQUpqQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLCtpQkFBbUM7U0FDcEMsQ0FBQztPQUNXLHFCQUFxQixDQUlqQztJQUFELDRCQUFDO0NBQUEsQUFKRCxJQUlDO1NBSlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFBST0dSRVNTLUxJTkUudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFByb2dyZXNzTGluZUNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGxhYmVsIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSB2YWx1ZSAocmVxdWlyZWQpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZ3Jlc3NMaW5lRGF0YSB7XG4gIC8qKlxuICAgKiB0ZXh0IHZpc3VhbGl6ZWQgb24gdGhlIGxlZnQgc2lkZVxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICAqIHZhbHVlIHRoYXQgaGFzIHBlcmNlbnRhZ2UgZm9yIGJhclxuICAgKi9cbiAgdmFsdWU6IG51bWJlcjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctcHJvZ3Jlc3MtbGluZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9ncmVzcy1saW5lLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzTGluZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IFByb2dyZXNzTGluZURhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xufVxuIl19