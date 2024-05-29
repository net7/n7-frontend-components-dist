//---------------------------
// TOAST.ts
//---------------------------
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ToastComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
}
ToastComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ToastComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ToastComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: ToastComponent, selector: "n7-toast", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-toast\">\n    <div class=\"n7-toast__column {{data.classes || ''}}\">\n\n        <!-- Toast boxes -->\n        <div class=\"n7-toast__box\" \n             *ngFor=\"let box of data.toasts\"\n             [ngClass]=\"{ 'has-actions' : !! (box.actions || box.closeIcon) }\">\n\n            <!-- Toast icon -->\n            <div class=\"n7-toast__icon\" *ngIf=\"box.icon\">\n                <span class=\"{{ box.icon }}\"></span>\n            </div>\n        \n            <!-- Toast text -->\n            <div class=\"n7-toast__content {{box.classes || ''}}\" *ngIf=\"box.title || box.text\">\n                <span class=\"n7-toast__title\" *ngIf=\"box.title\">{{ box.title }}</span>\n                <span class=\"n7-toast__text\" *ngIf=\"box.text\">{{ box.text }}</span>\n            </div>\n\n            <!-- Toast actions -->\n            <div class=\"n7-toast__actions\" *ngIf=\"box.actions || box.closeIcon\">\n                <span\n                class=\"n7-toast__closeIcon {{ box.closeIcon.icon }}\" \n                *ngIf=\"box.closeIcon\" \n                (click)=\"onClick(box.closeIcon.payload)\">\n                </span>\n                <span class=\"n7-toast__action-wrapper\" *ngIf=\"box.actions\">\n                    <span class=\"n7-toast__action-content\" *ngFor=\"let action of box.actions\">\n                        <button class=\"n7-toast__action-button n7-btn n7-btn-s {{action.classes || ''}}\"\n                                (click)=\"onClick(action.payload)\">\n                                {{action.text}}\n                        </button>\n                    </span>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ToastComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-toast', template: "<div *ngIf=\"data\" class=\"n7-toast\">\n    <div class=\"n7-toast__column {{data.classes || ''}}\">\n\n        <!-- Toast boxes -->\n        <div class=\"n7-toast__box\" \n             *ngFor=\"let box of data.toasts\"\n             [ngClass]=\"{ 'has-actions' : !! (box.actions || box.closeIcon) }\">\n\n            <!-- Toast icon -->\n            <div class=\"n7-toast__icon\" *ngIf=\"box.icon\">\n                <span class=\"{{ box.icon }}\"></span>\n            </div>\n        \n            <!-- Toast text -->\n            <div class=\"n7-toast__content {{box.classes || ''}}\" *ngIf=\"box.title || box.text\">\n                <span class=\"n7-toast__title\" *ngIf=\"box.title\">{{ box.title }}</span>\n                <span class=\"n7-toast__text\" *ngIf=\"box.text\">{{ box.text }}</span>\n            </div>\n\n            <!-- Toast actions -->\n            <div class=\"n7-toast__actions\" *ngIf=\"box.actions || box.closeIcon\">\n                <span\n                class=\"n7-toast__closeIcon {{ box.closeIcon.icon }}\" \n                *ngIf=\"box.closeIcon\" \n                (click)=\"onClick(box.closeIcon.payload)\">\n                </span>\n                <span class=\"n7-toast__action-wrapper\" *ngIf=\"box.actions\">\n                    <span class=\"n7-toast__action-content\" *ngFor=\"let action of box.actions\">\n                        <button class=\"n7-toast__action-button n7-btn n7-btn-s {{action.classes || ''}}\"\n                                (click)=\"onClick(action.payload)\">\n                                {{action.text}}\n                        </button>\n                    </span>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvdG9hc3QvdG9hc3QudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvdG9hc3QvdG9hc3QuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0IsV0FBVztBQUNYLDZCQUE2QjtBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBNEZqRCxNQUFNLE9BQU8sY0FBYztJQUt6QixPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7MkdBVFUsY0FBYzsrRkFBZCxjQUFjLHdGQ2hHM0IsOHJEQXNDQTsyRkQwRGEsY0FBYztrQkFKMUIsU0FBUzsrQkFDRSxVQUFVOzhCQUlYLElBQUk7c0JBQVosS0FBSztnQkFFRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVE9BU1QudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIHRoZSBzaW5nbGUgVG9hc3RDb21wb25lbnQncyBcIkFjdGlvblwiXG4gKlxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHBheWxvYWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9hc3RBY3Rpb24ge1xuICAvKipcbiAgICogdGhlIGJ1dHRvbidzIHJlbmRlcmVkIHRleHRcbiAgICovXG4gIHRleHQ6IHN0cmluZztcbiAgLyoqXG4gICAqIHRoZSBidXR0b24ncyBvbkNsaWNrIHBheWxvYWRcbiAgICovXG4gIHBheWxvYWQ6IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgdGhlIHNpbmdsZSBUb2FzdENvbXBvbmVudCdzIFwiQm94XCJcbiAqXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgdGltZXIgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsb3NlSWNvbiAob3B0aW9uYWwpXG4gKiAtIGljb24gKHJlcXVpcmVkKVxuICogLSBwYXlsb2FkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSB0aXRsZSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdGV4dCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgYWN0aW9ucyAob3B0aW9uYWwpXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBUb2FzdEJveCB7XG4gIC8qKlxuICAgKiByZXF1aXJlczogW2lzLXN1Y2Nlc3MsIGlzLXdhcm5pbmcsIGlzLWVycm9yXSArIG9wdGlvbmFsIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBJY29uIHRvIGRpc3BsYXkgaW5zaWRlIHRoZSB0b2FzdFxuICAgKi9cbiAgaWNvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIGxhcmdlciwgdGl0bGUgdGV4dFxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aGUgdG9hc3QncyBib2R5IHRleHRcbiAgICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiAnWCcgaWNvbiwgdG8gZGlzbWlzcy9jbG9zZSB0aGUgdG9hc3RcbiAgICogKCBuNy1pY29uLWNyb3NzIClcbiAgICpcbiAgICogIEVhY2ggaWNvbiByZXF1aXJlcyBpdCdzIG9uQ2xpY2sgcGF5bG9hZFxuICAgKi9cbiAgY2xvc2VJY29uPzoge1xuICAgIGljb246IHN0cmluZztcbiAgICBwYXlsb2FkOiBzdHJpbmc7XG4gIH07XG4gIC8qKlxuICAgKiB0aGUgdG9hc3QncyBvcHRpb25hbCBidXR0b25zXG4gICAqIHN1Z2dlc3Rpb246IGRvbid0IHVzZSBtb3JlIHRoYW4gMiBhY3Rpb25zXG4gICAqL1xuICBhY3Rpb25zPzogVG9hc3RBY3Rpb25bXTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBUb2FzdENvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IHRvYXN0cyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBUb2FzdERhdGEgeyAvLyB0b2FzdCBjb2x1bW4gd3JhcHBlclxuICB0b2FzdHM6IFRvYXN0Qm94W107XG4gIGNsYXNzZXM/OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LXRvYXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvYXN0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogVG9hc3REYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG59XG4iLCI8ZGl2ICpuZ0lmPVwiZGF0YVwiIGNsYXNzPVwibjctdG9hc3RcIj5cbiAgICA8ZGl2IGNsYXNzPVwibjctdG9hc3RfX2NvbHVtbiB7e2RhdGEuY2xhc3NlcyB8fCAnJ319XCI+XG5cbiAgICAgICAgPCEtLSBUb2FzdCBib3hlcyAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm43LXRvYXN0X19ib3hcIiBcbiAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgYm94IG9mIGRhdGEudG9hc3RzXCJcbiAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ICdoYXMtYWN0aW9ucycgOiAhISAoYm94LmFjdGlvbnMgfHwgYm94LmNsb3NlSWNvbikgfVwiPlxuXG4gICAgICAgICAgICA8IS0tIFRvYXN0IGljb24gLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibjctdG9hc3RfX2ljb25cIiAqbmdJZj1cImJveC5pY29uXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ7eyBib3guaWNvbiB9fVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgIDwhLS0gVG9hc3QgdGV4dCAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuNy10b2FzdF9fY29udGVudCB7e2JveC5jbGFzc2VzIHx8ICcnfX1cIiAqbmdJZj1cImJveC50aXRsZSB8fCBib3gudGV4dFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibjctdG9hc3RfX3RpdGxlXCIgKm5nSWY9XCJib3gudGl0bGVcIj57eyBib3gudGl0bGUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuNy10b2FzdF9fdGV4dFwiICpuZ0lmPVwiYm94LnRleHRcIj57eyBib3gudGV4dCB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8IS0tIFRvYXN0IGFjdGlvbnMgLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibjctdG9hc3RfX2FjdGlvbnNcIiAqbmdJZj1cImJveC5hY3Rpb25zIHx8IGJveC5jbG9zZUljb25cIj5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzPVwibjctdG9hc3RfX2Nsb3NlSWNvbiB7eyBib3guY2xvc2VJY29uLmljb24gfX1cIiBcbiAgICAgICAgICAgICAgICAqbmdJZj1cImJveC5jbG9zZUljb25cIiBcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DbGljayhib3guY2xvc2VJY29uLnBheWxvYWQpXCI+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibjctdG9hc3RfX2FjdGlvbi13cmFwcGVyXCIgKm5nSWY9XCJib3guYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm43LXRvYXN0X19hY3Rpb24tY29udGVudFwiICpuZ0Zvcj1cImxldCBhY3Rpb24gb2YgYm94LmFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJuNy10b2FzdF9fYWN0aW9uLWJ1dHRvbiBuNy1idG4gbjctYnRuLXMge3thY3Rpb24uY2xhc3NlcyB8fCAnJ319XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2soYWN0aW9uLnBheWxvYWQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7YWN0aW9uLnRleHR9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==