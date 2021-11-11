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
            template: "<div *ngIf=\"data\" \r\nclass=\"n7-facet-header {{ data.classes || '' }}\" \r\n(click)=\"onClick(data.payload)\">\r\n    <span *ngIf=\"data.iconLeft\"\r\n    class=\"n7-facet-header__icon-left {{ data.iconLeft }}\">\r\n    </span>\r\n    <span class=\"n7-facet-header__text-wrapper\">\r\n        <span class=\"n7-facet-header__text\">\r\n            {{data.text}}\r\n        </span>\r\n        <span class=\"n7-facet-header__secondary-text\" *ngIf=\"data.additionalText\">\r\n            {{data.additionalText}}\r\n        </span>\r\n    </span>\r\n    <span *ngIf=\"data.iconRight\" \r\n    class=\"n7-facet-header__icon-right {{ data.iconRight }}\">\r\n    </span>\r\n</div>"
        })
    ], FacetHeaderComponent);
    return FacetHeaderComponent;
}());
export { FacetHeaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mYWNldC1oZWFkZXIvZmFjZXQtaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixrQkFBa0I7QUFDbEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQTJDakQ7SUFBQTtJQVdBLENBQUM7SUFMQyxzQ0FBTyxHQUFQLFVBQVEsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQVRRO1FBQVIsS0FBSyxFQUFFOztzREFBdUI7SUFFdEI7UUFBUixLQUFLLEVBQUU7O3NEQUFXO0lBSFIsb0JBQW9CO1FBSmhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsZ3JCQUFrQztTQUNuQyxDQUFDO09BQ1csb0JBQW9CLENBV2hDO0lBQUQsMkJBQUM7Q0FBQSxBQVhELElBV0M7U0FYWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBGQUNFVC1IRUFERVIudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEZhY2V0SGVhZGVyQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGljb25MZWZ0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgYWRkaXRpb25hbFRleHQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaWNvblJpZ2h0IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZhY2V0SGVhZGVyRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogdGhlIGhlYWRlcnMgbGVmdG1vc3QgaWNvblxyXG4gICAqL1xyXG4gIGljb25MZWZ0Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHRoZSB0aXRsZSB0ZXh0XHJcbiAgICovXHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgdGV4dCwgZGlzcGxheWVkIG9uIHRoZSByaWdodCBvZiB0aGUgdGV4dFxyXG4gICAqL1xyXG4gIGFkZGl0aW9uYWxUZXh0Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHRoZSBoZWFkZXJzIHJpZ2h0bW9zdCBpY29uXHJcbiAgICovXHJcbiAgaWNvblJpZ2h0Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IGFueTtcclxuICAvKipcclxuICAgKiBwYXlsb2FkIGZvciBvbkNsaWNrIGV2ZW50c1xyXG4gICAqL1xyXG4gIHBheWxvYWQ/OiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctZmFjZXQtaGVhZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmFjZXQtaGVhZGVyLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWNldEhlYWRlckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogRmFjZXRIZWFkZXJEYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG5cclxuICBvbkNsaWNrKHBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxufVxyXG4iXX0=