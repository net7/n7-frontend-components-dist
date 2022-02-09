//---------------------------
// FACET-HEADER.ts
//---------------------------
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class FacetHeaderComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
}
FacetHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: FacetHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FacetHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.2", type: FacetHeaderComponent, selector: "n7-facet-header", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" \r\nclass=\"n7-facet-header {{ data.classes || '' }}\" \r\n(click)=\"onClick(data.payload)\">\r\n    <span *ngIf=\"data.iconLeft\"\r\n    class=\"n7-facet-header__icon-left {{ data.iconLeft }}\">\r\n    </span>\r\n    <span class=\"n7-facet-header__text-wrapper\">\r\n        <span class=\"n7-facet-header__text\">\r\n            {{data.text}}\r\n        </span>\r\n        <span class=\"n7-facet-header__secondary-text\" *ngIf=\"data.additionalText\">\r\n            {{data.additionalText}}\r\n        </span>\r\n    </span>\r\n    <span *ngIf=\"data.iconRight\" \r\n    class=\"n7-facet-header__icon-right {{ data.iconRight }}\">\r\n    </span>\r\n</div>", directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: FacetHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-facet-header', template: "<div *ngIf=\"data\" \r\nclass=\"n7-facet-header {{ data.classes || '' }}\" \r\n(click)=\"onClick(data.payload)\">\r\n    <span *ngIf=\"data.iconLeft\"\r\n    class=\"n7-facet-header__icon-left {{ data.iconLeft }}\">\r\n    </span>\r\n    <span class=\"n7-facet-header__text-wrapper\">\r\n        <span class=\"n7-facet-header__text\">\r\n            {{data.text}}\r\n        </span>\r\n        <span class=\"n7-facet-header__secondary-text\" *ngIf=\"data.additionalText\">\r\n            {{data.additionalText}}\r\n        </span>\r\n    </span>\r\n    <span *ngIf=\"data.iconRight\" \r\n    class=\"n7-facet-header__icon-right {{ data.iconRight }}\">\r\n    </span>\r\n</div>" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaGVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZHYtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2ZhY2V0LWhlYWRlci9mYWNldC1oZWFkZXIudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZmFjZXQtaGVhZGVyL2ZhY2V0LWhlYWRlci5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixrQkFBa0I7QUFDbEIsNkJBQTZCO0FBRTdCLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUEyQ2pELE1BQU0sT0FBTyxvQkFBb0I7SUFNL0IsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2lIQVZVLG9CQUFvQjtxR0FBcEIsb0JBQW9CLCtGQy9DakMsc3FCQWlCTTsyRkQ4Qk8sb0JBQW9CO2tCQUpoQyxTQUFTOytCQUNFLGlCQUFpQjs4QkFJbEIsSUFBSTtzQkFBWixLQUFLO2dCQUVHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEZBQ0VULUhFQURFUi50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgRmFjZXRIZWFkZXJDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgaWNvbkxlZnQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBhZGRpdGlvbmFsVGV4dCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBpY29uUmlnaHQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmFjZXRIZWFkZXJEYXRhIHtcclxuICAvKipcclxuICAgKiB0aGUgaGVhZGVycyBsZWZ0bW9zdCBpY29uXHJcbiAgICovXHJcbiAgaWNvbkxlZnQ/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogdGhlIHRpdGxlIHRleHRcclxuICAgKi9cclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCB0ZXh0LCBkaXNwbGF5ZWQgb24gdGhlIHJpZ2h0IG9mIHRoZSB0ZXh0XHJcbiAgICovXHJcbiAgYWRkaXRpb25hbFRleHQ/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogdGhlIGhlYWRlcnMgcmlnaHRtb3N0IGljb25cclxuICAgKi9cclxuICBpY29uUmlnaHQ/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIHBheWxvYWQgZm9yIG9uQ2xpY2sgZXZlbnRzXHJcbiAgICovXHJcbiAgcGF5bG9hZD86IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1mYWNldC1oZWFkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mYWNldC1oZWFkZXIuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhY2V0SGVhZGVyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBGYWNldEhlYWRlckRhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZCkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgKm5nSWY9XCJkYXRhXCIgXHJcbmNsYXNzPVwibjctZmFjZXQtaGVhZGVyIHt7IGRhdGEuY2xhc3NlcyB8fCAnJyB9fVwiIFxyXG4oY2xpY2spPVwib25DbGljayhkYXRhLnBheWxvYWQpXCI+XHJcbiAgICA8c3BhbiAqbmdJZj1cImRhdGEuaWNvbkxlZnRcIlxyXG4gICAgY2xhc3M9XCJuNy1mYWNldC1oZWFkZXJfX2ljb24tbGVmdCB7eyBkYXRhLmljb25MZWZ0IH19XCI+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzcz1cIm43LWZhY2V0LWhlYWRlcl9fdGV4dC13cmFwcGVyXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJuNy1mYWNldC1oZWFkZXJfX3RleHRcIj5cclxuICAgICAgICAgICAge3tkYXRhLnRleHR9fVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm43LWZhY2V0LWhlYWRlcl9fc2Vjb25kYXJ5LXRleHRcIiAqbmdJZj1cImRhdGEuYWRkaXRpb25hbFRleHRcIj5cclxuICAgICAgICAgICAge3tkYXRhLmFkZGl0aW9uYWxUZXh0fX1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8c3BhbiAqbmdJZj1cImRhdGEuaWNvblJpZ2h0XCIgXHJcbiAgICBjbGFzcz1cIm43LWZhY2V0LWhlYWRlcl9faWNvbi1yaWdodCB7eyBkYXRhLmljb25SaWdodCB9fVwiPlxyXG4gICAgPC9zcGFuPlxyXG48L2Rpdj4iXX0=