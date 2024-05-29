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
}
TagComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TagComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TagComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: TagComponent, selector: "n7-tag", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<span class=\"n7-tag {{data.classes || ''}}\" *ngIf=\"data\">\n    <span class=\"n7-tag__icon {{data.preIcon.id}}\" *ngIf=\"data.preIcon?.id\" (click)=\"onClick(data.preIcon.payload)\"></span>\n    <span class=\"n7-tag__label\" *ngIf=\"data.label\">\n        {{ data.label }}\n    </span>\n    <span class=\"n7-tag__text\" *ngIf=\"data.text\">\n        {{ data.text }}\n    </span>\n    <span class=\"n7-tag__icon {{icon.id}}\" *ngIf=\"getIcon(data) as icon\"  (click)=\"onClick(icon.payload)\"></span>\n</span>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TagComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-tag', template: "<span class=\"n7-tag {{data.classes || ''}}\" *ngIf=\"data\">\n    <span class=\"n7-tag__icon {{data.preIcon.id}}\" *ngIf=\"data.preIcon?.id\" (click)=\"onClick(data.preIcon.payload)\"></span>\n    <span class=\"n7-tag__label\" *ngIf=\"data.label\">\n        {{ data.label }}\n    </span>\n    <span class=\"n7-tag__text\" *ngIf=\"data.text\">\n        {{ data.text }}\n    </span>\n    <span class=\"n7-tag__icon {{icon.id}}\" *ngIf=\"getIcon(data) as icon\"  (click)=\"onClick(icon.payload)\"></span>\n</span>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZHYtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL3RhZy90YWcudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvdGFnL3RhZy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixTQUFTO0FBQ1QsNkJBQTZCO0FBRTdCLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFpRGpELE1BQU0sT0FBTyxZQUFZO0lBS3ZCLE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsT0FBTyxDQUFDLElBQUk7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUU1QixJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDakMsT0FBTztnQkFDTCxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2IsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2FBQ3RCLENBQUM7U0FDSDtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDOzt5R0FyQlUsWUFBWTs2RkFBWixZQUFZLHNGQ3JEekIsbWdCQVVBOzJGRDJDYSxZQUFZO2tCQUp4QixTQUFTOytCQUNFLFFBQVE7OEJBSUYsSUFBSTtzQkFBbkIsS0FBSztnQkFFVSxJQUFJO3NCQUFuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRBRy50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFRhZ0NvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGxhYmVsIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRhZ0RhdGEge1xuICAvKipcbiAgICogdGFnJ3MgbGFiZWxcbiAgICovXG4gIGxhYmVsPzogc3RyaW5nO1xuICAvKipcbiAgICogdGV4dCB2aXN1YWxpemVkIG9uIHRoZSB0YWdcbiAgICovXG4gIHRleHQ6IHN0cmluZztcbiAgLyoqXG4gICAqIGFjdGlvbiBpY29uIChvbiByaWdodCBzaWRlKVxuICAgKi9cbiAgaWNvbj86IEljb24gfCBzdHJpbmc7XG4gIC8qKlxuICAgKiBhY3Rpb24gaWNvbiAob24gcmlnaHQgc2lkZSlcbiAgICovXG4gIHByZUljb24/OiBJY29uO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAqL1xuICBwYXlsb2FkPzogYW55O1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvXG4gICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctdGFnJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhZy5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUYWdDb21wb25lbnQge1xuICBASW5wdXQoKSBwdWJsaWMgZGF0YTogVGFnRGF0YTtcblxuICBASW5wdXQoKSBwdWJsaWMgZW1pdDogYW55O1xuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG5cbiAgZ2V0SWNvbihkYXRhKSB7XG4gICAgaWYgKCFkYXRhLmljb24pIHJldHVybiBudWxsO1xuXG4gICAgaWYgKHR5cGVvZiBkYXRhLmljb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogZGF0YS5pY29uLFxuICAgICAgICBwYXlsb2FkOiBkYXRhLnBheWxvYWQsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhLmljb247XG4gIH1cbn1cbiIsIjxzcGFuIGNsYXNzPVwibjctdGFnIHt7ZGF0YS5jbGFzc2VzIHx8ICcnfX1cIiAqbmdJZj1cImRhdGFcIj5cbiAgICA8c3BhbiBjbGFzcz1cIm43LXRhZ19faWNvbiB7e2RhdGEucHJlSWNvbi5pZH19XCIgKm5nSWY9XCJkYXRhLnByZUljb24/LmlkXCIgKGNsaWNrKT1cIm9uQ2xpY2soZGF0YS5wcmVJY29uLnBheWxvYWQpXCI+PC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwibjctdGFnX19sYWJlbFwiICpuZ0lmPVwiZGF0YS5sYWJlbFwiPlxuICAgICAgICB7eyBkYXRhLmxhYmVsIH19XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwibjctdGFnX190ZXh0XCIgKm5nSWY9XCJkYXRhLnRleHRcIj5cbiAgICAgICAge3sgZGF0YS50ZXh0IH19XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwibjctdGFnX19pY29uIHt7aWNvbi5pZH19XCIgKm5nSWY9XCJnZXRJY29uKGRhdGEpIGFzIGljb25cIiAgKGNsaWNrKT1cIm9uQ2xpY2soaWNvbi5wYXlsb2FkKVwiPjwvc3Bhbj5cbjwvc3Bhbj5cbiJdfQ==