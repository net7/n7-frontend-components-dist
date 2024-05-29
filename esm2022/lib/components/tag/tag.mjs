//---------------------------
// TAG.ts
//---------------------------
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class TagComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    getIcon(data) {
        if (!data.icon)
            return null;
        if (typeof data.icon === 'string') {
            return {
                id: data.icon,
                payload: data.payload,
            };
        }
        return data.icon;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: TagComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: TagComponent, selector: "n7-tag", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<span class=\"n7-tag {{data.classes || ''}}\" *ngIf=\"data\">\n  <span\n    class=\"n7-tag__icon {{data.preIcon.id}}\"\n    *ngIf=\"data.preIcon?.id\"\n    (click)=\"onClick(data.preIcon.payload)\"\n  ></span>\n  <span class=\"n7-tag__label\" *ngIf=\"data.label\"> {{ data.label }} </span>\n  <span class=\"n7-tag__text\" *ngIf=\"data.text\"> {{ data.text }} </span>\n  <span\n    class=\"n7-tag__icon {{icon.id}}\"\n    *ngIf=\"getIcon(data) as icon\"\n    (click)=\"onClick(icon.payload)\"\n  ></span>\n</span>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: TagComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-tag', template: "<span class=\"n7-tag {{data.classes || ''}}\" *ngIf=\"data\">\n  <span\n    class=\"n7-tag__icon {{data.preIcon.id}}\"\n    *ngIf=\"data.preIcon?.id\"\n    (click)=\"onClick(data.preIcon.payload)\"\n  ></span>\n  <span class=\"n7-tag__label\" *ngIf=\"data.label\"> {{ data.label }} </span>\n  <span class=\"n7-tag__text\" *ngIf=\"data.text\"> {{ data.text }} </span>\n  <span\n    class=\"n7-tag__icon {{icon.id}}\"\n    *ngIf=\"getIcon(data) as icon\"\n    (click)=\"onClick(icon.payload)\"\n  ></span>\n</span>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZHYtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL3RhZy90YWcudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvdGFnL3RhZy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixTQUFTO0FBQ1QsNkJBQTZCO0FBRTdCLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFpRGpELE1BQU0sT0FBTyxZQUFZO0lBS3ZCLE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsT0FBTyxDQUFDLElBQUk7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUU1QixJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUUsQ0FBQztZQUNsQyxPQUFPO2dCQUNMLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDYixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87YUFDdEIsQ0FBQztRQUNKLENBQUM7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs4R0FyQlUsWUFBWTtrR0FBWixZQUFZLHNGQ3JEekIsb2dCQWNBOzsyRkR1Q2EsWUFBWTtrQkFKeEIsU0FBUzsrQkFDRSxRQUFROzhCQUlGLElBQUk7c0JBQW5CLEtBQUs7Z0JBRVUsSUFBSTtzQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUQUcudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBUYWdDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSB0ZXh0IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBsYWJlbCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaWNvbiAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUYWdEYXRhIHtcbiAgLyoqXG4gICAqIHRhZydzIGxhYmVsXG4gICAqL1xuICBsYWJlbD86IHN0cmluZztcbiAgLyoqXG4gICAqIHRleHQgdmlzdWFsaXplZCBvbiB0aGUgdGFnXG4gICAqL1xuICB0ZXh0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhY3Rpb24gaWNvbiAob24gcmlnaHQgc2lkZSlcbiAgICovXG4gIGljb24/OiBJY29uIHwgc3RyaW5nO1xuICAvKipcbiAgICogYWN0aW9uIGljb24gKG9uIHJpZ2h0IHNpZGUpXG4gICAqL1xuICBwcmVJY29uPzogSWNvbjtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LXRhZycsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWcuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhZ0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBkYXRhOiBUYWdEYXRhO1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBlbWl0OiBhbnk7XG5cbiAgb25DbGljayhwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cblxuICBnZXRJY29uKGRhdGEpIHtcbiAgICBpZiAoIWRhdGEuaWNvbikgcmV0dXJuIG51bGw7XG5cbiAgICBpZiAodHlwZW9mIGRhdGEuaWNvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBkYXRhLmljb24sXG4gICAgICAgIHBheWxvYWQ6IGRhdGEucGF5bG9hZCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGEuaWNvbjtcbiAgfVxufVxuIiwiPHNwYW4gY2xhc3M9XCJuNy10YWcge3tkYXRhLmNsYXNzZXMgfHwgJyd9fVwiICpuZ0lmPVwiZGF0YVwiPlxuICA8c3BhblxuICAgIGNsYXNzPVwibjctdGFnX19pY29uIHt7ZGF0YS5wcmVJY29uLmlkfX1cIlxuICAgICpuZ0lmPVwiZGF0YS5wcmVJY29uPy5pZFwiXG4gICAgKGNsaWNrKT1cIm9uQ2xpY2soZGF0YS5wcmVJY29uLnBheWxvYWQpXCJcbiAgPjwvc3Bhbj5cbiAgPHNwYW4gY2xhc3M9XCJuNy10YWdfX2xhYmVsXCIgKm5nSWY9XCJkYXRhLmxhYmVsXCI+IHt7IGRhdGEubGFiZWwgfX0gPC9zcGFuPlxuICA8c3BhbiBjbGFzcz1cIm43LXRhZ19fdGV4dFwiICpuZ0lmPVwiZGF0YS50ZXh0XCI+IHt7IGRhdGEudGV4dCB9fSA8L3NwYW4+XG4gIDxzcGFuXG4gICAgY2xhc3M9XCJuNy10YWdfX2ljb24ge3tpY29uLmlkfX1cIlxuICAgICpuZ0lmPVwiZ2V0SWNvbihkYXRhKSBhcyBpY29uXCJcbiAgICAoY2xpY2spPVwib25DbGljayhpY29uLnBheWxvYWQpXCJcbiAgPjwvc3Bhbj5cbjwvc3Bhbj5cbiJdfQ==