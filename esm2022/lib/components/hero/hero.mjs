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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: HeroComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: HeroComponent, selector: "n7-hero", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<section\n  *ngIf=\"data\"\n  class=\"n7-hero {{data.classes || ''}}\"\n  [ngClass]=\"{ \n        'has-image' : !!data.image, \n        'has-background-image': !!data.backgroundImage \n    }\"\n  [ngStyle]=\"{ \n        'background-image': getBackgroundImageCssValue(data.backgroundImage)\n    }\"\n>\n  <div class=\"n7-hero__content\">\n    <div class=\"n7-hero__text-wrapper\">\n      <p\n        class=\"n7-hero__pre-title\"\n        *ngIf=\"data.preTitle\"\n        [innerHTML]=\"data.preTitle\"\n      ></p>\n      <h2 class=\"n7-hero__title\" [innerHTML]=\"data.title\"></h2>\n      <div\n        class=\"n7-hero__text\"\n        *ngIf=\"data.text\"\n        [innerHTML]=\"data.text\"\n      ></div>\n      <div class=\"n7-hero__input-wrapper\" *ngIf=\"data.input || data.button\">\n        <input\n          type=\"text\"\n          class=\"n7-hero__input\"\n          placeholder=\"{{data.input.placeholder || ''}}\"\n          *ngIf=\"data.input\"\n          (input)=\"onInputChange(data.input.payload, $event.target.value)\"\n          (keyup.enter)=\"onInputEnter(data.input.payload, $event.target.value)\"\n        />\n        <span\n          class=\"n7-hero__input-icon {{data.input.icon || ''}}\"\n          *ngIf=\"data.input && data.input.icon\"\n          (click)=\"onClick(data.input.payload)\"\n        ></span>\n        <ng-container *ngIf=\"data.button\">\n          <n7-anchor-wrapper\n            [classes]=\"'n7-hero__btn n7-btn n7-btn-cta n7-btn-l'\"\n            [data]=\"data.button.anchor\"\n            (clicked)=\"onClick($event)\"\n          >\n            {{data.button.text}}\n          </n7-anchor-wrapper>\n        </ng-container>\n      </div>\n    </div>\n\n    <div class=\"n7-hero__image-wrapper\" *ngIf=\"data.image\">\n      <img class=\"n7-hero__image\" src=\"{{data.image}}\" alt=\"\" />\n    </div>\n  </div>\n</section>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i2.AnchorWrapperComponent, selector: "n7-anchor-wrapper", inputs: ["data", "classes"], outputs: ["clicked"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: HeroComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-hero', template: "<section\n  *ngIf=\"data\"\n  class=\"n7-hero {{data.classes || ''}}\"\n  [ngClass]=\"{ \n        'has-image' : !!data.image, \n        'has-background-image': !!data.backgroundImage \n    }\"\n  [ngStyle]=\"{ \n        'background-image': getBackgroundImageCssValue(data.backgroundImage)\n    }\"\n>\n  <div class=\"n7-hero__content\">\n    <div class=\"n7-hero__text-wrapper\">\n      <p\n        class=\"n7-hero__pre-title\"\n        *ngIf=\"data.preTitle\"\n        [innerHTML]=\"data.preTitle\"\n      ></p>\n      <h2 class=\"n7-hero__title\" [innerHTML]=\"data.title\"></h2>\n      <div\n        class=\"n7-hero__text\"\n        *ngIf=\"data.text\"\n        [innerHTML]=\"data.text\"\n      ></div>\n      <div class=\"n7-hero__input-wrapper\" *ngIf=\"data.input || data.button\">\n        <input\n          type=\"text\"\n          class=\"n7-hero__input\"\n          placeholder=\"{{data.input.placeholder || ''}}\"\n          *ngIf=\"data.input\"\n          (input)=\"onInputChange(data.input.payload, $event.target.value)\"\n          (keyup.enter)=\"onInputEnter(data.input.payload, $event.target.value)\"\n        />\n        <span\n          class=\"n7-hero__input-icon {{data.input.icon || ''}}\"\n          *ngIf=\"data.input && data.input.icon\"\n          (click)=\"onClick(data.input.payload)\"\n        ></span>\n        <ng-container *ngIf=\"data.button\">\n          <n7-anchor-wrapper\n            [classes]=\"'n7-hero__btn n7-btn n7-btn-cta n7-btn-l'\"\n            [data]=\"data.button.anchor\"\n            (clicked)=\"onClick($event)\"\n          >\n            {{data.button.text}}\n          </n7-anchor-wrapper>\n        </ng-container>\n      </div>\n    </div>\n\n    <div class=\"n7-hero__image-wrapper\" *ngIf=\"data.image\">\n      <img class=\"n7-hero__image\" src=\"{{data.image}}\" alt=\"\" />\n    </div>\n  </div>\n</section>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2R2LWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9oZXJvL2hlcm8udHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvaGVyby9oZXJvLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCO0FBQzdCLFVBQVU7QUFDViw2QkFBNkI7QUFFN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUEyRWpELE1BQU0sT0FBTyxhQUFhO0lBS3hCLDBCQUEwQixDQUFDLGVBQWU7UUFDeEMsSUFBSSxlQUFlLEVBQUUsQ0FBQztZQUNwQixPQUFPLE9BQU8sZUFBZSxHQUFHLENBQUM7UUFDbkMsQ0FBQztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFPLEVBQUUsS0FBSztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUs7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDOzhHQTVCVSxhQUFhO2tHQUFiLGFBQWEsdUZDL0UxQiw2MERBdURBOzsyRkR3QmEsYUFBYTtrQkFKekIsU0FBUzsrQkFDRSxTQUFTOzhCQUlWLElBQUk7c0JBQVosS0FBSztnQkFFRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSEVSTy50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5jaG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkLWludGVyZmFjZXMnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgSGVyb0NvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IHRpdGxlIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSB0ZXh0IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpbnB1dCAob3B0aW9uYWwpXG4gKiAtIHBsYWNlaG9sZGVyIChvcHRpb25hbClcbiAqIC0gaWNvbiAob3B0aW9uYWwpXG4gKiAtIHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGJ1dHRvbiAob3B0aW9uYWwpXG4gKiAtIHRleHQgKG9wdGlvbmFsKVxuICogLSBhbmNob3IgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGltYWdlIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBiYWNrZ3JvdW5kSW1hZ2UgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBIZXJvRGF0YSB7XG4gIC8qKlxuICAgKiBtYWluIHRleHQgZGlzcGxheWVkIGluIHRoZSBoZXJvIHNlY3Rpb25cbiAgICovXG4gIHRpdGxlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBvcHRpb25hbCB0ZXh0IGRpc3BsYXllZCBhYm92ZSB0aGUgdGl0bGVcbiAgICovXG4gIHByZVRpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICogYWRkaXRpb25hbCB0ZXh0IHVuZGVyIHRoZSB0aXRsZVxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIGlucHV0IGZpZWxkICh1c3VhbGx5IGZvciBzZWFyY2gpIGFuZCBpdCdzIHBhcmFtZXRlcnNcbiAgICovXG4gIGlucHV0Pzoge1xuICAgIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgaWNvbjogc3RyaW5nO1xuICAgIHBheWxvYWQ6IGFueTtcbiAgfTtcbiAgLyoqXG4gICAqIGNhbGwgdG8gYWN0aW9uIGJ1dHRvbiBhbmQgaXQncyBwYXJhbWV0ZXJzXG4gICAqL1xuICBidXR0b24/OiB7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIGFuY2hvcj86IEFuY2hvcjtcbiAgfTtcbiAgLyoqXG4gICAqIGltYWdlIGRpc3BsYXllZCBpbnNpZGUgdGhlIGhlcm9cbiAgICovXG4gIGltYWdlPzogc3RyaW5nO1xuICAvKipcbiAgICogYmFja2dyb3VuZCBpbWFnZSB0aGF0IGNvdmVycyB0aGUgZnVsbCBiYWNrZ3JvdW5kIGFyZWEgb2YgdGhlIGhlcm9cbiAgICovXG4gIGJhY2tncm91bmRJbWFnZT86IHN0cmluZztcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZD86IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWhlcm8nLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVyby5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSGVyb0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IEhlcm9EYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBnZXRCYWNrZ3JvdW5kSW1hZ2VDc3NWYWx1ZShiYWNrZ3JvdW5kSW1hZ2UpIHtcbiAgICBpZiAoYmFja2dyb3VuZEltYWdlKSB7XG4gICAgICByZXR1cm4gYHVybCgke2JhY2tncm91bmRJbWFnZX0pYDtcbiAgICB9XG4gICAgcmV0dXJuICdub25lJztcbiAgfVxuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cblxuICBvbklucHV0Q2hhbmdlKHBheWxvYWQsIHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgeyBpbnB1dFBheWxvYWQ6IHBheWxvYWQsIHZhbHVlIH0pO1xuICB9XG5cbiAgb25JbnB1dEVudGVyKHBheWxvYWQsIHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgIHRoaXMuZW1pdCgnZW50ZXInLCB7IGlucHV0UGF5bG9hZDogcGF5bG9hZCwgdmFsdWUgfSk7XG4gIH1cbn1cbiIsIjxzZWN0aW9uXG4gICpuZ0lmPVwiZGF0YVwiXG4gIGNsYXNzPVwibjctaGVybyB7e2RhdGEuY2xhc3NlcyB8fCAnJ319XCJcbiAgW25nQ2xhc3NdPVwieyBcbiAgICAgICAgJ2hhcy1pbWFnZScgOiAhIWRhdGEuaW1hZ2UsIFxuICAgICAgICAnaGFzLWJhY2tncm91bmQtaW1hZ2UnOiAhIWRhdGEuYmFja2dyb3VuZEltYWdlIFxuICAgIH1cIlxuICBbbmdTdHlsZV09XCJ7IFxuICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6IGdldEJhY2tncm91bmRJbWFnZUNzc1ZhbHVlKGRhdGEuYmFja2dyb3VuZEltYWdlKVxuICAgIH1cIlxuPlxuICA8ZGl2IGNsYXNzPVwibjctaGVyb19fY29udGVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJuNy1oZXJvX190ZXh0LXdyYXBwZXJcIj5cbiAgICAgIDxwXG4gICAgICAgIGNsYXNzPVwibjctaGVyb19fcHJlLXRpdGxlXCJcbiAgICAgICAgKm5nSWY9XCJkYXRhLnByZVRpdGxlXCJcbiAgICAgICAgW2lubmVySFRNTF09XCJkYXRhLnByZVRpdGxlXCJcbiAgICAgID48L3A+XG4gICAgICA8aDIgY2xhc3M9XCJuNy1oZXJvX190aXRsZVwiIFtpbm5lckhUTUxdPVwiZGF0YS50aXRsZVwiPjwvaDI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwibjctaGVyb19fdGV4dFwiXG4gICAgICAgICpuZ0lmPVwiZGF0YS50ZXh0XCJcbiAgICAgICAgW2lubmVySFRNTF09XCJkYXRhLnRleHRcIlxuICAgICAgPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm43LWhlcm9fX2lucHV0LXdyYXBwZXJcIiAqbmdJZj1cImRhdGEuaW5wdXQgfHwgZGF0YS5idXR0b25cIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzPVwibjctaGVyb19faW5wdXRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3tkYXRhLmlucHV0LnBsYWNlaG9sZGVyIHx8ICcnfX1cIlxuICAgICAgICAgICpuZ0lmPVwiZGF0YS5pbnB1dFwiXG4gICAgICAgICAgKGlucHV0KT1cIm9uSW5wdXRDaGFuZ2UoZGF0YS5pbnB1dC5wYXlsb2FkLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gICAgICAgICAgKGtleXVwLmVudGVyKT1cIm9uSW5wdXRFbnRlcihkYXRhLmlucHV0LnBheWxvYWQsICRldmVudC50YXJnZXQudmFsdWUpXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzcz1cIm43LWhlcm9fX2lucHV0LWljb24ge3tkYXRhLmlucHV0Lmljb24gfHwgJyd9fVwiXG4gICAgICAgICAgKm5nSWY9XCJkYXRhLmlucHV0ICYmIGRhdGEuaW5wdXQuaWNvblwiXG4gICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2soZGF0YS5pbnB1dC5wYXlsb2FkKVwiXG4gICAgICAgID48L3NwYW4+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkYXRhLmJ1dHRvblwiPlxuICAgICAgICAgIDxuNy1hbmNob3Itd3JhcHBlclxuICAgICAgICAgICAgW2NsYXNzZXNdPVwiJ243LWhlcm9fX2J0biBuNy1idG4gbjctYnRuLWN0YSBuNy1idG4tbCdcIlxuICAgICAgICAgICAgW2RhdGFdPVwiZGF0YS5idXR0b24uYW5jaG9yXCJcbiAgICAgICAgICAgIChjbGlja2VkKT1cIm9uQ2xpY2soJGV2ZW50KVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3tkYXRhLmJ1dHRvbi50ZXh0fX1cbiAgICAgICAgICA8L243LWFuY2hvci13cmFwcGVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIm43LWhlcm9fX2ltYWdlLXdyYXBwZXJcIiAqbmdJZj1cImRhdGEuaW1hZ2VcIj5cbiAgICAgIDxpbWcgY2xhc3M9XCJuNy1oZXJvX19pbWFnZVwiIHNyYz1cInt7ZGF0YS5pbWFnZX19XCIgYWx0PVwiXCIgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG4iXX0=