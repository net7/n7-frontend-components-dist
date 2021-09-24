//---------------------------
// FACET-HEADER.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var FacetHeaderComponent = /** @class */ (function () {
    function FacetHeaderComponent() {
    }
    FacetHeaderComponent.prototype.onClick = function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FacetHeaderComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FacetHeaderComponent.prototype, "emit", void 0);
    FacetHeaderComponent = __decorate([
        Component({
            selector: 'n7-facet-header',
            template: "<div *ngIf=\"data\" \nclass=\"n7-facet-header {{ data.classes || '' }}\" \n(click)=\"onClick(data.payload)\">\n    <span *ngIf=\"data.iconLeft\"\n    class=\"n7-facet-header__icon-left {{ data.iconLeft }}\">\n    </span>\n    <span class=\"n7-facet-header__text-wrapper\">\n        <span class=\"n7-facet-header__text\">\n            {{data.text}}\n        </span>\n        <span class=\"n7-facet-header__secondary-text\" *ngIf=\"data.additionalText\">\n            {{data.additionalText}}\n        </span>\n    </span>\n    <span *ngIf=\"data.iconRight\" \n    class=\"n7-facet-header__icon-right {{ data.iconRight }}\">\n    </span>\n</div>"
        })
    ], FacetHeaderComponent);
    return FacetHeaderComponent;
}());
export { FacetHeaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mYWNldC1oZWFkZXIvZmFjZXQtaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixrQkFBa0I7QUFDbEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQTJDakQ7SUFBQTtJQVdBLENBQUM7SUFMQyxzQ0FBTyxHQUFQLFVBQVEsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQVRRO1FBQVIsS0FBSyxFQUFFOztzREFBdUI7SUFFdEI7UUFBUixLQUFLLEVBQUU7O3NEQUFXO0lBSFIsb0JBQW9CO1FBSmhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsOG9CQUFrQztTQUNuQyxDQUFDO09BQ1csb0JBQW9CLENBV2hDO0lBQUQsMkJBQUM7Q0FBQSxBQVhELElBV0M7U0FYWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRkFDRVQtSEVBREVSLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBGYWNldEhlYWRlckNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGljb25MZWZ0IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBhZGRpdGlvbmFsVGV4dCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaWNvblJpZ2h0IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGYWNldEhlYWRlckRhdGEge1xuICAvKipcbiAgICogdGhlIGhlYWRlcnMgbGVmdG1vc3QgaWNvblxuICAgKi9cbiAgaWNvbkxlZnQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aGUgdGl0bGUgdGV4dFxuICAgKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKipcbiAgICogYWRkaXRpb25hbCB0ZXh0LCBkaXNwbGF5ZWQgb24gdGhlIHJpZ2h0IG9mIHRoZSB0ZXh0XG4gICAqL1xuICBhZGRpdGlvbmFsVGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIHRoZSBoZWFkZXJzIHJpZ2h0bW9zdCBpY29uXG4gICAqL1xuICBpY29uUmlnaHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbiAgLyoqXG4gICAqIHBheWxvYWQgZm9yIG9uQ2xpY2sgZXZlbnRzXG4gICAqL1xuICBwYXlsb2FkPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1mYWNldC1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZmFjZXQtaGVhZGVyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEZhY2V0SGVhZGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogRmFjZXRIZWFkZXJEYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cbn1cbiJdfQ==