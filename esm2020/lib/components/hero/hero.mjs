//---------------------------
// HERO.ts
//---------------------------
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../anchor-wrapper/anchor-wrapper";
export class HeroComponent {
    getBackgroundImageCssValue(backgroundImage) {
        if (backgroundImage) {
            return `url(${backgroundImage})`;
        }
        return 'none';
    }
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    onInputChange(payload, value) {
        if (!this.emit)
            return;
        this.emit('change', { inputPayload: payload, value });
    }
    onInputEnter(payload, value) {
        if (!this.emit)
            return;
        this.emit('enter', { inputPayload: payload, value });
    }
}
HeroComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: HeroComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeroComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: HeroComponent, selector: "n7-hero", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<section *ngIf=\"data\" class=\"n7-hero {{data.classes || ''}}\" \n    [ngClass]=\"{ \n        'has-image' : !!data.image, \n        'has-background-image': !!data.backgroundImage \n    }\"\n    [ngStyle]=\"{ \n        'background-image': getBackgroundImageCssValue(data.backgroundImage)\n    }\">\n    <div class=\"n7-hero__content\">\n        \n        <div class=\"n7-hero__text-wrapper\">\n            <p class=\"n7-hero__pre-title\" *ngIf=\"data.preTitle\" [innerHTML]=\"data.preTitle\"></p>\n            <h2 class=\"n7-hero__title\" [innerHTML]=\"data.title\"></h2>\n            <div class=\"n7-hero__text\" *ngIf=\"data.text\" [innerHTML]=\"data.text\"></div>\n            <div class=\"n7-hero__input-wrapper\" *ngIf=\"data.input || data.button\">\n                <input type=\"text\" \n                       class=\"n7-hero__input\" \n                       placeholder=\"{{data.input.placeholder || ''}}\" \n                       *ngIf=\"data.input\" \n                       (input)=\"onInputChange(data.input.payload, $event.target.value)\" \n                       (keyup.enter)=\"onInputEnter(data.input.payload, $event.target.value)\">\n                <span class=\"n7-hero__input-icon {{data.input.icon || ''}}\" \n                      *ngIf=\"data.input && data.input.icon\" \n                      (click)=\"onClick(data.input.payload)\"></span>\n                <ng-container *ngIf=\"data.button\">\n                    <n7-anchor-wrapper [classes]=\"'n7-hero__btn n7-btn n7-btn-cta n7-btn-l'\"\n                    [data]=\"data.button.anchor\"\n                    (clicked)=\"onClick($event)\">\n                        {{data.button.text}}\n                    </n7-anchor-wrapper>\n                </ng-container>\n            </div>\n        </div>\n        \n        <div class=\"n7-hero__image-wrapper\" *ngIf=\"data.image\">\n            <img class=\"n7-hero__image\" src=\"{{data.image}}\" alt=\"\">\n        </div>\n\n    </div>\n</section>", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i2.AnchorWrapperComponent, selector: "n7-anchor-wrapper", inputs: ["data", "classes"], outputs: ["clicked"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: HeroComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-hero', template: "<section *ngIf=\"data\" class=\"n7-hero {{data.classes || ''}}\" \n    [ngClass]=\"{ \n        'has-image' : !!data.image, \n        'has-background-image': !!data.backgroundImage \n    }\"\n    [ngStyle]=\"{ \n        'background-image': getBackgroundImageCssValue(data.backgroundImage)\n    }\">\n    <div class=\"n7-hero__content\">\n        \n        <div class=\"n7-hero__text-wrapper\">\n            <p class=\"n7-hero__pre-title\" *ngIf=\"data.preTitle\" [innerHTML]=\"data.preTitle\"></p>\n            <h2 class=\"n7-hero__title\" [innerHTML]=\"data.title\"></h2>\n            <div class=\"n7-hero__text\" *ngIf=\"data.text\" [innerHTML]=\"data.text\"></div>\n            <div class=\"n7-hero__input-wrapper\" *ngIf=\"data.input || data.button\">\n                <input type=\"text\" \n                       class=\"n7-hero__input\" \n                       placeholder=\"{{data.input.placeholder || ''}}\" \n                       *ngIf=\"data.input\" \n                       (input)=\"onInputChange(data.input.payload, $event.target.value)\" \n                       (keyup.enter)=\"onInputEnter(data.input.payload, $event.target.value)\">\n                <span class=\"n7-hero__input-icon {{data.input.icon || ''}}\" \n                      *ngIf=\"data.input && data.input.icon\" \n                      (click)=\"onClick(data.input.payload)\"></span>\n                <ng-container *ngIf=\"data.button\">\n                    <n7-anchor-wrapper [classes]=\"'n7-hero__btn n7-btn n7-btn-cta n7-btn-l'\"\n                    [data]=\"data.button.anchor\"\n                    (clicked)=\"onClick($event)\">\n                        {{data.button.text}}\n                    </n7-anchor-wrapper>\n                </ng-container>\n            </div>\n        </div>\n        \n        <div class=\"n7-hero__image-wrapper\" *ngIf=\"data.image\">\n            <img class=\"n7-hero__image\" src=\"{{data.image}}\" alt=\"\">\n        </div>\n\n    </div>\n</section>" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2R2LWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9oZXJvL2hlcm8udHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvaGVyby9oZXJvLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCO0FBQzdCLFVBQVU7QUFDViw2QkFBNkI7QUFFN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUEyRWpELE1BQU0sT0FBTyxhQUFhO0lBS3hCLDBCQUEwQixDQUFDLGVBQWU7UUFDeEMsSUFBSSxlQUFlLEVBQUU7WUFDbkIsT0FBTyxPQUFPLGVBQWUsR0FBRyxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQU8sRUFBRSxLQUFLO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7OzBHQTVCVSxhQUFhOzhGQUFiLGFBQWEsdUZDL0UxQix3N0RBdUNVOzJGRHdDRyxhQUFhO2tCQUp6QixTQUFTOytCQUNFLFNBQVM7OEJBSVYsSUFBSTtzQkFBWixLQUFLO2dCQUVHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBIRVJPLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBIZXJvQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgdGl0bGUgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHRleHQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGlucHV0IChvcHRpb25hbClcbiAqIC0gcGxhY2Vob2xkZXIgKG9wdGlvbmFsKVxuICogLSBpY29uIChvcHRpb25hbClcbiAqIC0gcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgYnV0dG9uIChvcHRpb25hbClcbiAqIC0gdGV4dCAob3B0aW9uYWwpXG4gKiAtIGFuY2hvciAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgaW1hZ2UgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGJhY2tncm91bmRJbWFnZSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEhlcm9EYXRhIHtcbiAgLyoqXG4gICAqIG1haW4gdGV4dCBkaXNwbGF5ZWQgaW4gdGhlIGhlcm8gc2VjdGlvblxuICAqL1xuICB0aXRsZTogc3RyaW5nO1xuICAvKipcbiAgICogb3B0aW9uYWwgdGV4dCBkaXNwbGF5ZWQgYWJvdmUgdGhlIHRpdGxlXG4gICAqL1xuICBwcmVUaXRsZT86IHN0cmluZztcbiAgLyoqXG4gICogYWRkaXRpb25hbCB0ZXh0IHVuZGVyIHRoZSB0aXRsZVxuICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgKiBpbnB1dCBmaWVsZCAodXN1YWxseSBmb3Igc2VhcmNoKSBhbmQgaXQncyBwYXJhbWV0ZXJzXG4gICovXG4gIGlucHV0Pzoge1xuICAgIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgaWNvbjogc3RyaW5nO1xuICAgIHBheWxvYWQ6IGFueTtcbiAgfTtcbiAgLyoqXG4gICogY2FsbCB0byBhY3Rpb24gYnV0dG9uIGFuZCBpdCdzIHBhcmFtZXRlcnNcbiAgKi9cbiAgYnV0dG9uPzoge1xuICAgIHRleHQ6IHN0cmluZztcbiAgICBhbmNob3I/OiBBbmNob3I7XG4gIH07XG4gIC8qKlxuICAgKiBpbWFnZSBkaXNwbGF5ZWQgaW5zaWRlIHRoZSBoZXJvXG4gICAqL1xuICBpbWFnZT86IHN0cmluZztcbiAgLyoqXG4gICogYmFja2dyb3VuZCBpbWFnZSB0aGF0IGNvdmVycyB0aGUgZnVsbCBiYWNrZ3JvdW5kIGFyZWEgb2YgdGhlIGhlcm9cbiAgKi9cbiAgYmFja2dyb3VuZEltYWdlPzogc3RyaW5nO1xuICAvKipcbiAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICovXG4gIHBheWxvYWQ/OiBhbnk7XG4gIC8qKlxuICAqIGFkZGl0aW9uYWwgaW5mb1xuICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctaGVybycsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZXJvLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEhlcm9Db21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBIZXJvRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgZ2V0QmFja2dyb3VuZEltYWdlQ3NzVmFsdWUoYmFja2dyb3VuZEltYWdlKSB7XG4gICAgaWYgKGJhY2tncm91bmRJbWFnZSkge1xuICAgICAgcmV0dXJuIGB1cmwoJHtiYWNrZ3JvdW5kSW1hZ2V9KWA7XG4gICAgfVxuICAgIHJldHVybiAnbm9uZSc7XG4gIH1cblxuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG5cbiAgb25JbnB1dENoYW5nZShwYXlsb2FkLCB2YWx1ZSkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHsgaW5wdXRQYXlsb2FkOiBwYXlsb2FkLCB2YWx1ZSB9KTtcbiAgfVxuXG4gIG9uSW5wdXRFbnRlcihwYXlsb2FkLCB2YWx1ZSkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2VudGVyJywgeyBpbnB1dFBheWxvYWQ6IHBheWxvYWQsIHZhbHVlIH0pO1xuICB9XG59XG4iLCI8c2VjdGlvbiAqbmdJZj1cImRhdGFcIiBjbGFzcz1cIm43LWhlcm8ge3tkYXRhLmNsYXNzZXMgfHwgJyd9fVwiIFxuICAgIFtuZ0NsYXNzXT1cInsgXG4gICAgICAgICdoYXMtaW1hZ2UnIDogISFkYXRhLmltYWdlLCBcbiAgICAgICAgJ2hhcy1iYWNrZ3JvdW5kLWltYWdlJzogISFkYXRhLmJhY2tncm91bmRJbWFnZSBcbiAgICB9XCJcbiAgICBbbmdTdHlsZV09XCJ7IFxuICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6IGdldEJhY2tncm91bmRJbWFnZUNzc1ZhbHVlKGRhdGEuYmFja2dyb3VuZEltYWdlKVxuICAgIH1cIj5cbiAgICA8ZGl2IGNsYXNzPVwibjctaGVyb19fY29udGVudFwiPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm43LWhlcm9fX3RleHQtd3JhcHBlclwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJuNy1oZXJvX19wcmUtdGl0bGVcIiAqbmdJZj1cImRhdGEucHJlVGl0bGVcIiBbaW5uZXJIVE1MXT1cImRhdGEucHJlVGl0bGVcIj48L3A+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJuNy1oZXJvX190aXRsZVwiIFtpbm5lckhUTUxdPVwiZGF0YS50aXRsZVwiPjwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibjctaGVyb19fdGV4dFwiICpuZ0lmPVwiZGF0YS50ZXh0XCIgW2lubmVySFRNTF09XCJkYXRhLnRleHRcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuNy1oZXJvX19pbnB1dC13cmFwcGVyXCIgKm5nSWY9XCJkYXRhLmlucHV0IHx8IGRhdGEuYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibjctaGVyb19faW5wdXRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e2RhdGEuaW5wdXQucGxhY2Vob2xkZXIgfHwgJyd9fVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImRhdGEuaW5wdXRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgKGlucHV0KT1cIm9uSW5wdXRDaGFuZ2UoZGF0YS5pbnB1dC5wYXlsb2FkLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXAuZW50ZXIpPVwib25JbnB1dEVudGVyKGRhdGEuaW5wdXQucGF5bG9hZCwgJGV2ZW50LnRhcmdldC52YWx1ZSlcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm43LWhlcm9fX2lucHV0LWljb24ge3tkYXRhLmlucHV0Lmljb24gfHwgJyd9fVwiIFxuICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZGF0YS5pbnB1dCAmJiBkYXRhLmlucHV0Lmljb25cIiBcbiAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DbGljayhkYXRhLmlucHV0LnBheWxvYWQpXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkYXRhLmJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8bjctYW5jaG9yLXdyYXBwZXIgW2NsYXNzZXNdPVwiJ243LWhlcm9fX2J0biBuNy1idG4gbjctYnRuLWN0YSBuNy1idG4tbCdcIlxuICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJkYXRhLmJ1dHRvbi5hbmNob3JcIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2tlZCk9XCJvbkNsaWNrKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ZGF0YS5idXR0b24udGV4dH19XG4gICAgICAgICAgICAgICAgICAgIDwvbjctYW5jaG9yLXdyYXBwZXI+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwibjctaGVyb19faW1hZ2Utd3JhcHBlclwiICpuZ0lmPVwiZGF0YS5pbWFnZVwiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cIm43LWhlcm9fX2ltYWdlXCIgc3JjPVwie3tkYXRhLmltYWdlfX1cIiBhbHQ9XCJcIj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbjwvc2VjdGlvbj4iXX0=