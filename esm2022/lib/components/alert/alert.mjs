//---------------------------
// ALERT.ts
//---------------------------
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class AlertComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: AlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: AlertComponent, selector: "n7-alert", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div\n  class=\"n7-alert {{data.classes || ''}} {{ data.icon ? 'has-icon' : '' }}\"\n  *ngIf=\"data\"\n>\n  <span class=\"n7-alert__icon {{data.icon}}\" *ngIf=\"data.icon\"></span>\n  <div class=\"n7-alert__text\" [innerHTML]=\"data.text\"></div>\n  <span\n    class=\"n7-alert__close-button n7-icon-close\"\n    *ngIf=\"data.hasCloseButton\"\n    (click)=\"onClick(data.payload)\"\n  ></span>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-alert', template: "<div\n  class=\"n7-alert {{data.classes || ''}} {{ data.icon ? 'has-icon' : '' }}\"\n  *ngIf=\"data\"\n>\n  <span class=\"n7-alert__icon {{data.icon}}\" *ngIf=\"data.icon\"></span>\n  <div class=\"n7-alert__text\" [innerHTML]=\"data.text\"></div>\n  <span\n    class=\"n7-alert__close-button n7-icon-close\"\n    *ngIf=\"data.hasCloseButton\"\n    (click)=\"onClick(data.payload)\"\n  ></span>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0IsV0FBVztBQUNYLDZCQUE2QjtBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBNkNqRCxNQUFNLE9BQU8sY0FBYztJQUt6QixPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs4R0FUVSxjQUFjO2tHQUFkLGNBQWMsd0ZDakQzQixxWkFZQTs7MkZEcUNhLGNBQWM7a0JBSjFCLFNBQVM7K0JBQ0UsVUFBVTs4QkFJWCxJQUFJO3NCQUFaLEtBQUs7Z0JBRUcsSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEFMRVJULnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBUYWdDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBib2R5IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBpY29uIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaGFzQ2xvc2VCdXR0b24gKG9wdGlvbmFsKVxuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBbGVydERhdGEge1xuICAvKipcbiAgICogdGhlIGFsZXJ0J3MgYm9keS9tZXNzYWdlIHdoaWNoIGNhbiBpbmNsdWRlIGh0bWwgdGFnc1xuICAgKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKipcbiAgICogYWxlcnQgaWNvbiAob24gbGVmdCBzaWRlKVxuICAgKi9cbiAgaWNvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG4gIC8qKlxuICAgKiBpbmRpY2F0ZXMgd2hldGhlciB0aGUgYWxlcnQgaW5jbHVkZXMgYSBjbG9zZSBidXR0b24gKG9uIHRvcC1yaWdodCBjb3JuZXIpXG4gICAqIG9yIG5vdCAoaWYgbm90IHByb3ZpZGVkIGFzc3VtZWQgYXMgZmFsc2UpXG4gICAqL1xuICBoYXNDbG9zZUJ1dHRvbj86IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWFsZXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBbGVydENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IEFsZXJ0RGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DbGljayhwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxufVxuIiwiPGRpdlxuICBjbGFzcz1cIm43LWFsZXJ0IHt7ZGF0YS5jbGFzc2VzIHx8ICcnfX0ge3sgZGF0YS5pY29uID8gJ2hhcy1pY29uJyA6ICcnIH19XCJcbiAgKm5nSWY9XCJkYXRhXCJcbj5cbiAgPHNwYW4gY2xhc3M9XCJuNy1hbGVydF9faWNvbiB7e2RhdGEuaWNvbn19XCIgKm5nSWY9XCJkYXRhLmljb25cIj48L3NwYW4+XG4gIDxkaXYgY2xhc3M9XCJuNy1hbGVydF9fdGV4dFwiIFtpbm5lckhUTUxdPVwiZGF0YS50ZXh0XCI+PC9kaXY+XG4gIDxzcGFuXG4gICAgY2xhc3M9XCJuNy1hbGVydF9fY2xvc2UtYnV0dG9uIG43LWljb24tY2xvc2VcIlxuICAgICpuZ0lmPVwiZGF0YS5oYXNDbG9zZUJ1dHRvblwiXG4gICAgKGNsaWNrKT1cIm9uQ2xpY2soZGF0YS5wYXlsb2FkKVwiXG4gID48L3NwYW4+XG48L2Rpdj5cbiJdfQ==