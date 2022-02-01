//---------------------------
// WIZARD.ts
//---------------------------
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class WizardComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
}
WizardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: WizardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
WizardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: WizardComponent, selector: "n7-wizard", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-wizard {{ data.classes || '' }}\">\n  <ol class=\"n7-wizard__list\">\n      <li *ngFor=\"let item of data.items\" \n          class=\"n7-wizard__item {{ item.classes || '' }}\" \n          (click)=\"onClick(item.payload)\">\n            <span *ngIf=\"item.number\" class=\"n7-wizard__number\">{{ item.number }}</span>\n            <span *ngIf=\"item.text\" class=\"n7-wizard__text\">{{ item.text }}</span>\n      </li>\n  </ol>\n</div>", directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: WizardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-wizard', template: "<div *ngIf=\"data\" class=\"n7-wizard {{ data.classes || '' }}\">\n  <ol class=\"n7-wizard__list\">\n      <li *ngFor=\"let item of data.items\" \n          class=\"n7-wizard__item {{ item.classes || '' }}\" \n          (click)=\"onClick(item.payload)\">\n            <span *ngIf=\"item.number\" class=\"n7-wizard__number\">{{ item.number }}</span>\n            <span *ngIf=\"item.text\" class=\"n7-wizard__text\">{{ item.text }}</span>\n      </li>\n  </ol>\n</div>" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZHYtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL3dpemFyZC93aXphcmQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvd2l6YXJkL3dpemFyZC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixZQUFZO0FBQ1osNkJBQTZCO0FBRTdCLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUF5RGpELE1BQU0sT0FBTyxlQUFlO0lBSzFCLE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs0R0FSVSxlQUFlO2dHQUFmLGVBQWUseUZDN0Q1QixvZEFTTTsyRkRvRE8sZUFBZTtrQkFKM0IsU0FBUzsrQkFDRSxXQUFXOzhCQUlaLElBQUk7c0JBQVosS0FBSztnQkFFRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gV0laQVJELnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuKiBJbnRlcmZhY2UgZm9yIGEgc2luZ2xlIFdpemFyZENvbXBvbmVudCdzIFwiaXRlbVwiXG4qXG4qIEBwcm9wZXJ0eSB0ZXh0IChvcHRpb25hbClcbiogQHByb3BlcnR5IG51bWJlciAob3B0aW9uYWwpXG4qIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiogQHByb3BlcnR5IHBheWxvYWQgKHJlcXVpcmVkKVxuKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuKlxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgV2l6YXJkSXRlbSB7XG4gIC8qKlxuICAqICB0ZXh0IHJlbmRlcmVkIG9uIHRoZSBzdGVwXG4gICovXG4gIHRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIG51bWJlciByZW5kZXJlZCBvbiB0aGUgc3RlcFxuICAqL1xuICBudW1iZXI/OiBudW1iZXI7XG4gIC8qKlxuICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgKi9cbiAgcGF5bG9hZDogYW55O1xuICAvKipcbiAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAqL1xuICBjbGFzc2VzPzogYW55O1xuICAvKipcbiAgKiBhZGRpdGlvbmFsIGluZm8gdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuKiBJbnRlcmZhY2UgZm9yIFdpemFyZENvbXBvbmVudCdzIFwiZGF0YVwiXG4qXG4qIEBwcm9wZXJ0eSBpdGVtcyAocmVxdWlyZWQpXG4qIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbipcbiovXG5leHBvcnQgaW50ZXJmYWNlIFdpemFyZERhdGEge1xuICAvKipcbiAgKiBlYWNoIGl0ZW0gcmVwcmVzZW50cyBhIHN0ZXBcbiAgKi9cbiAgaXRlbXM6IFdpemFyZEl0ZW1bXTtcbiAgLyoqXG4gICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctd2l6YXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dpemFyZC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBXaXphcmRDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBXaXphcmREYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxufVxuIiwiPGRpdiAqbmdJZj1cImRhdGFcIiBjbGFzcz1cIm43LXdpemFyZCB7eyBkYXRhLmNsYXNzZXMgfHwgJycgfX1cIj5cbiAgPG9sIGNsYXNzPVwibjctd2l6YXJkX19saXN0XCI+XG4gICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YS5pdGVtc1wiIFxuICAgICAgICAgIGNsYXNzPVwibjctd2l6YXJkX19pdGVtIHt7IGl0ZW0uY2xhc3NlcyB8fCAnJyB9fVwiIFxuICAgICAgICAgIChjbGljayk9XCJvbkNsaWNrKGl0ZW0ucGF5bG9hZClcIj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaXRlbS5udW1iZXJcIiBjbGFzcz1cIm43LXdpemFyZF9fbnVtYmVyXCI+e3sgaXRlbS5udW1iZXIgfX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIml0ZW0udGV4dFwiIGNsYXNzPVwibjctd2l6YXJkX190ZXh0XCI+e3sgaXRlbS50ZXh0IH19PC9zcGFuPlxuICAgICAgPC9saT5cbiAgPC9vbD5cbjwvZGl2PiJdfQ==