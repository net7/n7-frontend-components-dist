//---------------------------
// INDEX.ts
//---------------------------
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class DataWidgetComponent {
    onMouseEnter(payload) {
        if (!this.emit)
            return;
        this.emit('mouseenter', payload);
    }
    onMouseLeave(payload) {
        if (!this.emit)
            return;
        this.emit('mouseleave', payload);
    }
}
DataWidgetComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DataWidgetComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DataWidgetComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: DataWidgetComponent, selector: "n7-data-widget", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-data-widget {{ data.classes || '' }}\">\n    <div class=\"n7-data-widget__main\">\n        <span *ngIf=\"data.icon\"\n              class=\"n7-data-widget__main-icon {{data.icon}}\"\n              (mouseenter)=\"onMouseEnter(data.payload)\"\n              (mouseleave)=\"onMouseLeave(data.payload)\">\n        </span>\n        <img class=\"n7-data-widget__second-icon\" *ngIf=\"data.imgIcon\"\n             [src]=\"data.imgIcon.path\"\n             [alt]=\"data.imgIcon.alt\"\n             (mouseenter)=\"onMouseEnter(data.payload)\"\n             (mouseleave)=\"onMouseLeave(data.payload)\">\n        <h2 class=\"n7-data-widget__main-title\"\n            [innerHTML]=\"data.text\">\n        </h2>\n    </div>\n    \n    <div *ngIf=\"data.subtitle && (data.subtitle.text || data.subtitle.icon || data.subtitle.value)\"\n         class=\"n7-data-widget__sub\">\n        <p *ngIf=\"data.subtitle.text\"\n           class=\"n7-data-widget__sub-title\"\n           [innerHTML]=\"data.subtitle.text\">\n        </p>\n        <span *ngIf=\"data.subtitle.icon || data.subtitle.value || data.subtitle.imgIcon\"\n              class=\"n7-data-widget__sub-info\"\n              (mouseenter)=\"onMouseEnter(data.subtitle.payload)\"\n              (mouseleave)=\"onMouseLeave(data.subtitle.payload)\">\n                <img *ngIf=\"data.subtitle.imgIcon\" \n                    [src]=\"data.subtitle.imgIcon.path\"\n                    [alt]=\"data.subtitle.imgIcon.alt\">\n                <span *ngIf=\"data.subtitle.icon\"\n                class=\"n7-data-widget__sub-info-icon {{data.subtitle.icon}}\">\n          </span>\n          <span *ngIf=\"data.subtitle.value\"\n                class=\"n7-data-widget__sub-info-label\"\n                [innerHTML]=\"data.subtitle.value\">\n          </span>\n        </span>\n    </div>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DataWidgetComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-data-widget', template: "<div *ngIf=\"data\" class=\"n7-data-widget {{ data.classes || '' }}\">\n    <div class=\"n7-data-widget__main\">\n        <span *ngIf=\"data.icon\"\n              class=\"n7-data-widget__main-icon {{data.icon}}\"\n              (mouseenter)=\"onMouseEnter(data.payload)\"\n              (mouseleave)=\"onMouseLeave(data.payload)\">\n        </span>\n        <img class=\"n7-data-widget__second-icon\" *ngIf=\"data.imgIcon\"\n             [src]=\"data.imgIcon.path\"\n             [alt]=\"data.imgIcon.alt\"\n             (mouseenter)=\"onMouseEnter(data.payload)\"\n             (mouseleave)=\"onMouseLeave(data.payload)\">\n        <h2 class=\"n7-data-widget__main-title\"\n            [innerHTML]=\"data.text\">\n        </h2>\n    </div>\n    \n    <div *ngIf=\"data.subtitle && (data.subtitle.text || data.subtitle.icon || data.subtitle.value)\"\n         class=\"n7-data-widget__sub\">\n        <p *ngIf=\"data.subtitle.text\"\n           class=\"n7-data-widget__sub-title\"\n           [innerHTML]=\"data.subtitle.text\">\n        </p>\n        <span *ngIf=\"data.subtitle.icon || data.subtitle.value || data.subtitle.imgIcon\"\n              class=\"n7-data-widget__sub-info\"\n              (mouseenter)=\"onMouseEnter(data.subtitle.payload)\"\n              (mouseleave)=\"onMouseLeave(data.subtitle.payload)\">\n                <img *ngIf=\"data.subtitle.imgIcon\" \n                    [src]=\"data.subtitle.imgIcon.path\"\n                    [alt]=\"data.subtitle.imgIcon.alt\">\n                <span *ngIf=\"data.subtitle.icon\"\n                class=\"n7-data-widget__sub-info-icon {{data.subtitle.icon}}\">\n          </span>\n          <span *ngIf=\"data.subtitle.value\"\n                class=\"n7-data-widget__sub-info-label\"\n                [innerHTML]=\"data.subtitle.value\">\n          </span>\n        </span>\n    </div>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS13aWRnZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZGF0YS13aWRnZXQvZGF0YS13aWRnZXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZGF0YS13aWRnZXQvZGF0YS13aWRnZXQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0IsV0FBVztBQUNYLDZCQUE2QjtBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBbUVqRCxNQUFNLE9BQU8sbUJBQW1CO0lBSzlCLFlBQVksQ0FBQyxPQUFPO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELFlBQVksQ0FBQyxPQUFPO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Z0hBYlUsbUJBQW1CO29HQUFuQixtQkFBbUIsOEZDdkVoQyxzMERBd0NBOzJGRCtCYSxtQkFBbUI7a0JBTC9CLFNBQVM7K0JBQ0UsZ0JBQWdCOzhCQUtqQixJQUFJO3NCQUFaLEtBQUs7Z0JBRUcsSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIElOREVYLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBzdmcvaW1nIGljb25zXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW1nSWNvbiB7XG4gIC8qKiBQYXRoIHRvIHRoZSByZXNvdXJjZSAqL1xuICBwYXRoOiBzdHJpbmc7XG4gIC8qKiBBbHQgdGV4dCBmb3IgPGltZy8+ICovXG4gIGFsdD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIHRoZSBkYXRhIHdpZGdldCBjb21wb25lbnQncyBkYXRhXG4gKlxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHN1YnRpdGxlIChyZXF1aXJlZClcbiAqIC0gdGV4dCAocmVxdWlyZWQpXG4gKiAtIGljb24gKG9wdGlvbmFsKVxuICogLSBncm93IChyZXF1aXJlZClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEYXRhV2lkZ2V0RGF0YSB7XG4gIC8qKlxuICAgKiBpdGVtIGljb25cbiAgICovXG4gIGljb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBpbWFnZSBpY29uXG4gICAqL1xuICBpbWdJY29uPzogSW1nSWNvbjtcbiAgLyoqXG4gICAqIGl0ZW0gdGV4dFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgc3VidGl0bGU/OiB7XG4gICAgLyoqXG4gICAgICogaXRlbSBzdWJ0aXRsZVxuICAgICAqL1xuICAgIHRleHQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBpdGVtIHN1YnRpdGxlIGljb25cbiAgICAgKi9cbiAgICBpY29uOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogaW1hZ2UgaWNvblxuICAgICAqL1xuICAgIGltZ0ljb24/OiBJbWdJY29uO1xuICAgIC8qKlxuICAgICAqIHBlcmNlbnQgcmF0ZVxuICAgICAqL1xuICAgIHZhbHVlOiBudW1iZXIgfCBzdHJpbmc7XG4gICAgcGF5bG9hZDogYW55O1xuICB9O1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogbW91c2UgZXZlbnQgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZDogYW55O1xuICBfbWV0YT86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctZGF0YS13aWRnZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS13aWRnZXQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXRhV2lkZ2V0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogRGF0YVdpZGdldERhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uTW91c2VFbnRlcihwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ21vdXNlZW50ZXInLCBwYXlsb2FkKTtcbiAgfVxuXG4gIG9uTW91c2VMZWF2ZShwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ21vdXNlbGVhdmUnLCBwYXlsb2FkKTtcbiAgfVxufVxuIiwiPGRpdiAqbmdJZj1cImRhdGFcIiBjbGFzcz1cIm43LWRhdGEtd2lkZ2V0IHt7IGRhdGEuY2xhc3NlcyB8fCAnJyB9fVwiPlxuICAgIDxkaXYgY2xhc3M9XCJuNy1kYXRhLXdpZGdldF9fbWFpblwiPlxuICAgICAgICA8c3BhbiAqbmdJZj1cImRhdGEuaWNvblwiXG4gICAgICAgICAgICAgIGNsYXNzPVwibjctZGF0YS13aWRnZXRfX21haW4taWNvbiB7e2RhdGEuaWNvbn19XCJcbiAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwib25Nb3VzZUVudGVyKGRhdGEucGF5bG9hZClcIlxuICAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJvbk1vdXNlTGVhdmUoZGF0YS5wYXlsb2FkKVwiPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJuNy1kYXRhLXdpZGdldF9fc2Vjb25kLWljb25cIiAqbmdJZj1cImRhdGEuaW1nSWNvblwiXG4gICAgICAgICAgICAgW3NyY109XCJkYXRhLmltZ0ljb24ucGF0aFwiXG4gICAgICAgICAgICAgW2FsdF09XCJkYXRhLmltZ0ljb24uYWx0XCJcbiAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJvbk1vdXNlRW50ZXIoZGF0YS5wYXlsb2FkKVwiXG4gICAgICAgICAgICAgKG1vdXNlbGVhdmUpPVwib25Nb3VzZUxlYXZlKGRhdGEucGF5bG9hZClcIj5cbiAgICAgICAgPGgyIGNsYXNzPVwibjctZGF0YS13aWRnZXRfX21haW4tdGl0bGVcIlxuICAgICAgICAgICAgW2lubmVySFRNTF09XCJkYXRhLnRleHRcIj5cbiAgICAgICAgPC9oMj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8ZGl2ICpuZ0lmPVwiZGF0YS5zdWJ0aXRsZSAmJiAoZGF0YS5zdWJ0aXRsZS50ZXh0IHx8IGRhdGEuc3VidGl0bGUuaWNvbiB8fCBkYXRhLnN1YnRpdGxlLnZhbHVlKVwiXG4gICAgICAgICBjbGFzcz1cIm43LWRhdGEtd2lkZ2V0X19zdWJcIj5cbiAgICAgICAgPHAgKm5nSWY9XCJkYXRhLnN1YnRpdGxlLnRleHRcIlxuICAgICAgICAgICBjbGFzcz1cIm43LWRhdGEtd2lkZ2V0X19zdWItdGl0bGVcIlxuICAgICAgICAgICBbaW5uZXJIVE1MXT1cImRhdGEuc3VidGl0bGUudGV4dFwiPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiZGF0YS5zdWJ0aXRsZS5pY29uIHx8IGRhdGEuc3VidGl0bGUudmFsdWUgfHwgZGF0YS5zdWJ0aXRsZS5pbWdJY29uXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJuNy1kYXRhLXdpZGdldF9fc3ViLWluZm9cIlxuICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJvbk1vdXNlRW50ZXIoZGF0YS5zdWJ0aXRsZS5wYXlsb2FkKVwiXG4gICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cIm9uTW91c2VMZWF2ZShkYXRhLnN1YnRpdGxlLnBheWxvYWQpXCI+XG4gICAgICAgICAgICAgICAgPGltZyAqbmdJZj1cImRhdGEuc3VidGl0bGUuaW1nSWNvblwiIFxuICAgICAgICAgICAgICAgICAgICBbc3JjXT1cImRhdGEuc3VidGl0bGUuaW1nSWNvbi5wYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgW2FsdF09XCJkYXRhLnN1YnRpdGxlLmltZ0ljb24uYWx0XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJkYXRhLnN1YnRpdGxlLmljb25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibjctZGF0YS13aWRnZXRfX3N1Yi1pbmZvLWljb24ge3tkYXRhLnN1YnRpdGxlLmljb259fVwiPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cImRhdGEuc3VidGl0bGUudmFsdWVcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibjctZGF0YS13aWRnZXRfX3N1Yi1pbmZvLWxhYmVsXCJcbiAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cImRhdGEuc3VidGl0bGUudmFsdWVcIj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19