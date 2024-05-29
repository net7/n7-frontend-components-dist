import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class IconComponent {
    onClick(value) {
        if (!this.emit)
            return;
        this.emit('click', value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: IconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: IconComponent, selector: "n7-icon", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<ng-container *ngIf=\"data as icon\">\n  <span\n    class=\"n7-icon\"\n    *ngIf=\"icon.id\"\n    [ngClass]=\"icon.id\"\n    [ngStyle]=\"icon.style\"\n    (click)=\"onClick(icon.payload)\"\n  >\n  </span>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: IconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-icon', template: "<ng-container *ngIf=\"data as icon\">\n  <span\n    class=\"n7-icon\"\n    *ngIf=\"icon.id\"\n    [ngClass]=\"icon.id\"\n    [ngStyle]=\"icon.style\"\n    (click)=\"onClick(icon.payload)\"\n  >\n  </span>\n</ng-container>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2R2LWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9pY29uL2ljb24udHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvaWNvbi9pY29uLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU9qRCxNQUFNLE9BQU8sYUFBYTtJQUt4QixPQUFPLENBQUMsS0FBSztRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs4R0FSVSxhQUFhO2tHQUFiLGFBQWEsdUZDUDFCLGlPQVVBOzsyRkRIYSxhQUFhO2tCQUp6QixTQUFTOytCQUNFLFNBQVM7OEJBSVYsSUFBSTtzQkFBWixLQUFLO2dCQUVHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vaWNvbi5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSWNvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IEljb247XG5cbiAgQElucHV0KCkgZW1pdDogKHR5cGU6IHN0cmluZywgcGF5bG9hZD86IHVua25vd24pID0+IHZvaWQ7XG5cbiAgb25DbGljayh2YWx1ZSkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHZhbHVlKTtcbiAgfVxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cImRhdGEgYXMgaWNvblwiPlxuICA8c3BhblxuICAgIGNsYXNzPVwibjctaWNvblwiXG4gICAgKm5nSWY9XCJpY29uLmlkXCJcbiAgICBbbmdDbGFzc109XCJpY29uLmlkXCJcbiAgICBbbmdTdHlsZV09XCJpY29uLnN0eWxlXCJcbiAgICAoY2xpY2spPVwib25DbGljayhpY29uLnBheWxvYWQpXCJcbiAgPlxuICA8L3NwYW4+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==