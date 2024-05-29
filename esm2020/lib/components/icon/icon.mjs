import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class IconComponent {
    onClick(value) {
        if (!this.emit)
            return;
        this.emit('click', value);
    }
}
IconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: IconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
IconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: IconComponent, selector: "n7-icon", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<ng-container *ngIf=\"data as icon\">\n    <span  class=\"n7-icon\" *ngIf=\"icon.id\"\n        [ngClass]=\"icon.id\"\n        [ngStyle]=\"icon.style\"\n        (click)=\"onClick(icon.payload)\">\n    </span>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: IconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-icon', template: "<ng-container *ngIf=\"data as icon\">\n    <span  class=\"n7-icon\" *ngIf=\"icon.id\"\n        [ngClass]=\"icon.id\"\n        [ngStyle]=\"icon.style\"\n        (click)=\"onClick(icon.payload)\">\n    </span>\n</ng-container>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2R2LWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9pY29uL2ljb24udHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvaWNvbi9pY29uLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVFqRCxNQUFNLE9BQU8sYUFBYTtJQUt4QixPQUFPLENBQUMsS0FBSztRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7MEdBUlUsYUFBYTs4RkFBYixhQUFhLHVGQ1IxQixvT0FPQTsyRkRDYSxhQUFhO2tCQUx6QixTQUFTOytCQUNFLFNBQVM7OEJBS1YsSUFBSTtzQkFBWixLQUFLO2dCQUVHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vaWNvbi5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIEljb25Db21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJY29uO1xuXG4gIEBJbnB1dCgpIGVtaXQ6ICh0eXBlOiBzdHJpbmcsIHBheWxvYWQ/OiB1bmtub3duKSA9PiB2b2lkO1xuXG4gIG9uQ2xpY2sodmFsdWUpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2xpY2snLCB2YWx1ZSk7XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJkYXRhIGFzIGljb25cIj5cbiAgICA8c3BhbiAgY2xhc3M9XCJuNy1pY29uXCIgKm5nSWY9XCJpY29uLmlkXCJcbiAgICAgICAgW25nQ2xhc3NdPVwiaWNvbi5pZFwiXG4gICAgICAgIFtuZ1N0eWxlXT1cImljb24uc3R5bGVcIlxuICAgICAgICAoY2xpY2spPVwib25DbGljayhpY29uLnBheWxvYWQpXCI+XG4gICAgPC9zcGFuPlxuPC9uZy1jb250YWluZXI+XG4iXX0=