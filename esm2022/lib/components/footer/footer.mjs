//---------------------------
// FOOTER.ts
//---------------------------
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../anchor-wrapper/anchor-wrapper";
import * as i3 from "../input-select/input-select";
export class FooterComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: FooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: FooterComponent, selector: "n7-footer", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-footer {{data.classes || ''}}\">\n  <div class=\"n7-footer__content\">\n    <!-- Loop footer content columns -->\n    <div\n      class=\"n7-footer__column {{column.classes || ''}}\"\n      *ngFor=\"let column of data.columns\"\n    >\n      <ng-container\n        *ngTemplateOutlet=\"footerColumn; context:{$implicit: column}\"\n      ></ng-container>\n    </div>\n  </div>\n</div>\n\n<!-- Template: Columns -->\n<ng-template #footerColumn let-column>\n  <!-- Custom order for content (sections) -->\n  <ng-container *ngFor=\"let section of column.sections\">\n    <ng-container [ngSwitch]=\"section.type\">\n      <ng-container *ngSwitchCase=\"'text'\">\n        <ng-container *ngTemplateOutlet=\"text; context:{$implicit: section}\">\n        </ng-container>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'title'\">\n        <ng-container *ngTemplateOutlet=\"title; context:{$implicit: section}\">\n        </ng-container>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'links'\">\n        <ng-container *ngTemplateOutlet=\"links; context:{$implicit: section}\">\n        </ng-container>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'selects'\">\n        <ng-container *ngTemplateOutlet=\"selects; context:{$implicit: section}\">\n        </ng-container>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'images'\">\n        <ng-container *ngTemplateOutlet=\"images; context:{$implicit: section}\">\n        </ng-container>\n      </ng-container>\n      <ng-container *ngSwitchDefault> </ng-container>\n    </ng-container>\n  </ng-container>\n\n  <!-- Legacy configuration without sections -->\n  <ng-container *ngIf=\"column.title\">\n    <ng-container *ngTemplateOutlet=\"title; context:{$implicit: column}\">\n    </ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"column.text\">\n    <ng-container *ngTemplateOutlet=\"text; context:{$implicit: column}\">\n    </ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"column.links\">\n    <ng-container *ngTemplateOutlet=\"links; context:{$implicit: column}\">\n    </ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"column.images\">\n    <ng-container *ngTemplateOutlet=\"images; context:{$implicit: column}\">\n    </ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"column.selects\">\n    <ng-container *ngTemplateOutlet=\"selects; context:{$implicit: column}\">\n    </ng-container>\n  </ng-container>\n</ng-template>\n\n<!-- Content Sections -->\n<!-- TITLE -->\n<ng-template #title let-section>\n  <h2 *ngIf=\"section.title\" class=\"n7-footer__column-title\">\n    {{ section.title }}\n  </h2>\n</ng-template>\n<!-- TEXT -->\n<ng-template #text let-section>\n  <p\n    *ngIf=\"section.text\"\n    class=\"n7-footer__column-text\"\n    [innerHTML]=\"section.text\"\n  ></p>\n</ng-template>\n<!-- IMAGES -->\n<ng-template #images let-section>\n  <div *ngIf=\"section.images\" class=\"n7-footer__column-images\">\n    <n7-anchor-wrapper\n      *ngFor=\"let image of section.images\"\n      [classes]=\"image.classes || ''\"\n      [data]=\"image.anchor\"\n      (clicked)=\"onClick($event)\"\n    >\n      <img [src]=\"image.url\" [attr.alt]=\"image.alttext\" />\n    </n7-anchor-wrapper>\n  </div>\n</ng-template>\n<!-- SELECTS -->\n<ng-template #selects let-section>\n  <div *ngIf=\"section.selects\" class=\"n7-footer__column-selects\">\n    <n7-input-select\n      *ngFor=\"let selectData of section.selects\"\n      [data]=\"selectData\"\n      [emit]=\"this.emit\"\n    >\n    </n7-input-select>\n  </div>\n</ng-template>\n<!-- LINKS -->\n<ng-template #links let-section>\n  <div *ngIf=\"section.links\" class=\"n7-footer__column-nav\">\n    <ul class=\"n7-footer__column-nav-list\">\n      <li\n        *ngFor=\"let link of section.links\"\n        class=\"n7-footer__column-nav-item {{link.classes || ''}}\"\n      >\n        <n7-anchor-wrapper\n          [classes]=\"'n7-footer__column-nav-link'\"\n          [data]=\"link.anchor\"\n          (clicked)=\"onClick($event)\"\n        >\n          {{ link.text }}\n        </n7-anchor-wrapper>\n      </li>\n    </ul>\n  </div>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i1.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "component", type: i2.AnchorWrapperComponent, selector: "n7-anchor-wrapper", inputs: ["data", "classes"], outputs: ["clicked"] }, { kind: "component", type: i3.InputSelectComponent, selector: "n7-input-select", inputs: ["data", "emit"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: FooterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-footer', template: "<div *ngIf=\"data\" class=\"n7-footer {{data.classes || ''}}\">\n  <div class=\"n7-footer__content\">\n    <!-- Loop footer content columns -->\n    <div\n      class=\"n7-footer__column {{column.classes || ''}}\"\n      *ngFor=\"let column of data.columns\"\n    >\n      <ng-container\n        *ngTemplateOutlet=\"footerColumn; context:{$implicit: column}\"\n      ></ng-container>\n    </div>\n  </div>\n</div>\n\n<!-- Template: Columns -->\n<ng-template #footerColumn let-column>\n  <!-- Custom order for content (sections) -->\n  <ng-container *ngFor=\"let section of column.sections\">\n    <ng-container [ngSwitch]=\"section.type\">\n      <ng-container *ngSwitchCase=\"'text'\">\n        <ng-container *ngTemplateOutlet=\"text; context:{$implicit: section}\">\n        </ng-container>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'title'\">\n        <ng-container *ngTemplateOutlet=\"title; context:{$implicit: section}\">\n        </ng-container>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'links'\">\n        <ng-container *ngTemplateOutlet=\"links; context:{$implicit: section}\">\n        </ng-container>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'selects'\">\n        <ng-container *ngTemplateOutlet=\"selects; context:{$implicit: section}\">\n        </ng-container>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'images'\">\n        <ng-container *ngTemplateOutlet=\"images; context:{$implicit: section}\">\n        </ng-container>\n      </ng-container>\n      <ng-container *ngSwitchDefault> </ng-container>\n    </ng-container>\n  </ng-container>\n\n  <!-- Legacy configuration without sections -->\n  <ng-container *ngIf=\"column.title\">\n    <ng-container *ngTemplateOutlet=\"title; context:{$implicit: column}\">\n    </ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"column.text\">\n    <ng-container *ngTemplateOutlet=\"text; context:{$implicit: column}\">\n    </ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"column.links\">\n    <ng-container *ngTemplateOutlet=\"links; context:{$implicit: column}\">\n    </ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"column.images\">\n    <ng-container *ngTemplateOutlet=\"images; context:{$implicit: column}\">\n    </ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"column.selects\">\n    <ng-container *ngTemplateOutlet=\"selects; context:{$implicit: column}\">\n    </ng-container>\n  </ng-container>\n</ng-template>\n\n<!-- Content Sections -->\n<!-- TITLE -->\n<ng-template #title let-section>\n  <h2 *ngIf=\"section.title\" class=\"n7-footer__column-title\">\n    {{ section.title }}\n  </h2>\n</ng-template>\n<!-- TEXT -->\n<ng-template #text let-section>\n  <p\n    *ngIf=\"section.text\"\n    class=\"n7-footer__column-text\"\n    [innerHTML]=\"section.text\"\n  ></p>\n</ng-template>\n<!-- IMAGES -->\n<ng-template #images let-section>\n  <div *ngIf=\"section.images\" class=\"n7-footer__column-images\">\n    <n7-anchor-wrapper\n      *ngFor=\"let image of section.images\"\n      [classes]=\"image.classes || ''\"\n      [data]=\"image.anchor\"\n      (clicked)=\"onClick($event)\"\n    >\n      <img [src]=\"image.url\" [attr.alt]=\"image.alttext\" />\n    </n7-anchor-wrapper>\n  </div>\n</ng-template>\n<!-- SELECTS -->\n<ng-template #selects let-section>\n  <div *ngIf=\"section.selects\" class=\"n7-footer__column-selects\">\n    <n7-input-select\n      *ngFor=\"let selectData of section.selects\"\n      [data]=\"selectData\"\n      [emit]=\"this.emit\"\n    >\n    </n7-input-select>\n  </div>\n</ng-template>\n<!-- LINKS -->\n<ng-template #links let-section>\n  <div *ngIf=\"section.links\" class=\"n7-footer__column-nav\">\n    <ul class=\"n7-footer__column-nav-list\">\n      <li\n        *ngFor=\"let link of section.links\"\n        class=\"n7-footer__column-nav-item {{link.classes || ''}}\"\n      >\n        <n7-anchor-wrapper\n          [classes]=\"'n7-footer__column-nav-link'\"\n          [data]=\"link.anchor\"\n          (clicked)=\"onClick($event)\"\n        >\n          {{ link.text }}\n        </n7-anchor-wrapper>\n      </li>\n    </ul>\n  </div>\n</ng-template>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZHYtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixZQUFZO0FBQ1osNkJBQTZCO0FBRTdCLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQWdLakQsTUFBTSxPQUFPLGVBQWU7SUFLMUIsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OEdBUlUsZUFBZTtrR0FBZixlQUFlLHlGQ3BLNUIsZ2xJQTRIQTs7MkZEd0NhLGVBQWU7a0JBSjNCLFNBQVM7K0JBQ0UsV0FBVzs4QkFJWixJQUFJO3NCQUFaLEtBQUs7Z0JBRUcsSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZPT1RFUi50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRTZWxlY3REYXRhIH0gZnJvbSAnLi4vaW5wdXQtc2VsZWN0L2lucHV0LXNlbGVjdCc7XG5pbXBvcnQgeyBBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBlYWNoIGxpbmsgaW4gZm9vdGVyIG1lbnVzXG4gKlxuICogQHByb3BlcnR5IHRleHQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGFuY2hvciAobWFuZGF0b3J5KVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZvb3Rlckxpbmsge1xuICAvKipcbiAgICogaW1hZ2UgdXJsXG4gICAqL1xuICB0ZXh0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbiAgYW5jaG9yOiBBbmNob3I7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm8gdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG5leHBvcnQgdHlwZSBGb290ZXJUaXRsZSA9IHN0cmluZztcbmV4cG9ydCB0eXBlIEZvb3RlclRleHQgPSBzdHJpbmc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBlYWNoIGltYWdlIGluIHRoZSBmb290ZXIgKHVzdWFsbHkgbG9nb3MpXG4gKlxuICogQHByb3BlcnR5IHVybCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgYWx0dGV4dCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgYW5jaG9yIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGb290ZXJJbWFnZSB7XG4gIC8qKlxuICAgKiBpbWFnZSB1cmxcbiAgICovXG4gIHVybDogc3RyaW5nO1xuICAvKipcbiAgICogaW1hZ2UgYWx0IHRleHRcbiAgICovXG4gIGFsdHRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbiAgYW5jaG9yOiBBbmNob3I7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm8gdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvb3RlclRpdGxlSXRlbSB7XG4gIHR5cGU6ICd0aXRsZSc7XG4gIHRpdGxlOiBGb290ZXJUaXRsZTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRm9vdGVySW1hZ2VzSXRlbSB7XG4gIHR5cGU6ICdpbWFnZXMnO1xuICBpbWFnZXM6IEZvb3RlckltYWdlW107XG59XG5leHBvcnQgaW50ZXJmYWNlIEZvb3RlclNlbGVjdHNJdGVtIHtcbiAgdHlwZTogJ3NlbGVjdHMnO1xuICBzZWxlY3RzOiBJbnB1dFNlbGVjdERhdGFbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRm9vdGVyVGV4dEl0ZW0ge1xuICB0eXBlOiAndGV4dCc7XG4gIHRleHQ6IEZvb3RlclRleHQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIEZvb3RlckxpbmtzSXRlbSB7XG4gIHR5cGU6ICdsaW5rcyc7XG4gIGxpbmtzOiBGb290ZXJMaW5rW107XG59XG5cbmV4cG9ydCB0eXBlIEZvb3Rlckl0ZW0gPVxuICB8IEZvb3RlclRpdGxlSXRlbVxuICB8IEZvb3RlckltYWdlc0l0ZW1cbiAgfCBGb290ZXJTZWxlY3RzSXRlbVxuICB8IEZvb3RlclRleHRJdGVtXG4gIHwgRm9vdGVyTGlua3NJdGVtO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgRm9vdGVyIGNvbHVtbiB0aGF0IGNhbiBkaXNwbGF5IHRpdGxlLCBpbWFnZXMsIHRleHQgYW5kIGEgbmF2IGxpc3RcbiAqXG4gKiBAcHJvcGVydHkgdGl0bGUgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGltYWdlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgdGV4dCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgbGlua3MgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRm9vdGVyQ29sdW1uIHtcbiAgLyoqXG4gICAqIGNvbHVtbidzIHRpdGxlXG4gICAqL1xuICB0aXRsZT86IEZvb3RlclRpdGxlO1xuICAvKipcbiAgICogY29sdW1uJ3MgaW1hZ2VzXG4gICAqL1xuICBpbWFnZXM/OiBGb290ZXJJbWFnZVtdO1xuICAvKipcbiAgICogSFRNTFNlbGVjdCB3aXRoIHNvbWUgb3B0aW9uc1xuICAgKi9cbiAgc2VsZWN0cz86IElucHV0U2VsZWN0RGF0YVtdO1xuICAvKipcbiAgICogY29sdW1uJ3MgdGV4dFxuICAgKi9cbiAgdGV4dD86IEZvb3RlclRleHQ7XG4gIC8qKlxuICAgKiBjb2x1bW4ncyBuYXZcbiAgICovXG4gIGxpbmtzPzogRm9vdGVyTGlua1tdO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm8gdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICovXG4gIF9tZXRhPzogYW55O1xuICAvKipcbiAgICogY3VzdG9tIG9yZGVyIGZvciBmb290ZXIgY29sdW1uIGNvbnRlbnRcbiAgICovXG4gIHNlY3Rpb25zPzogRm9vdGVySXRlbVtdO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgRm9vdGVyQ29tcG9uZW50cydzIFwiRGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGNvbHVtbnMgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGb290ZXJEYXRhIHtcbiAgLyoqXG4gICAqIGVhY2ggaXRlbSByZW5kZXJzIGEgY29sdW1uIG9mIHRoZSBmb290ZXJcbiAgICovXG4gIGNvbHVtbnM6IEZvb3RlckNvbHVtbltdO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWZvb3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb290ZXIuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IEZvb3RlckRhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG59XG4iLCI8ZGl2ICpuZ0lmPVwiZGF0YVwiIGNsYXNzPVwibjctZm9vdGVyIHt7ZGF0YS5jbGFzc2VzIHx8ICcnfX1cIj5cbiAgPGRpdiBjbGFzcz1cIm43LWZvb3Rlcl9fY29udGVudFwiPlxuICAgIDwhLS0gTG9vcCBmb290ZXIgY29udGVudCBjb2x1bW5zIC0tPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwibjctZm9vdGVyX19jb2x1bW4ge3tjb2x1bW4uY2xhc3NlcyB8fCAnJ319XCJcbiAgICAgICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgZGF0YS5jb2x1bW5zXCJcbiAgICA+XG4gICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwiZm9vdGVyQ29sdW1uOyBjb250ZXh0OnskaW1wbGljaXQ6IGNvbHVtbn1cIlxuICAgICAgPjwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48IS0tIFRlbXBsYXRlOiBDb2x1bW5zIC0tPlxuPG5nLXRlbXBsYXRlICNmb290ZXJDb2x1bW4gbGV0LWNvbHVtbj5cbiAgPCEtLSBDdXN0b20gb3JkZXIgZm9yIGNvbnRlbnQgKHNlY3Rpb25zKSAtLT5cbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc2VjdGlvbiBvZiBjb2x1bW4uc2VjdGlvbnNcIj5cbiAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJzZWN0aW9uLnR5cGVcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIid0ZXh0J1wiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGV4dDsgY29udGV4dDp7JGltcGxpY2l0OiBzZWN0aW9ufVwiPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3RpdGxlJ1wiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGl0bGU7IGNvbnRleHQ6eyRpbXBsaWNpdDogc2VjdGlvbn1cIj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidsaW5rcydcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImxpbmtzOyBjb250ZXh0OnskaW1wbGljaXQ6IHNlY3Rpb259XCI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInc2VsZWN0cydcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInNlbGVjdHM7IGNvbnRleHQ6eyRpbXBsaWNpdDogc2VjdGlvbn1cIj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidpbWFnZXMnXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpbWFnZXM7IGNvbnRleHQ6eyRpbXBsaWNpdDogc2VjdGlvbn1cIj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD4gPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gTGVnYWN5IGNvbmZpZ3VyYXRpb24gd2l0aG91dCBzZWN0aW9ucyAtLT5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbHVtbi50aXRsZVwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0aXRsZTsgY29udGV4dDp7JGltcGxpY2l0OiBjb2x1bW59XCI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sdW1uLnRleHRcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGV4dDsgY29udGV4dDp7JGltcGxpY2l0OiBjb2x1bW59XCI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sdW1uLmxpbmtzXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImxpbmtzOyBjb250ZXh0OnskaW1wbGljaXQ6IGNvbHVtbn1cIj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9uZy1jb250YWluZXI+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW4uaW1hZ2VzXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImltYWdlczsgY29udGV4dDp7JGltcGxpY2l0OiBjb2x1bW59XCI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sdW1uLnNlbGVjdHNcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwic2VsZWN0czsgY29udGV4dDp7JGltcGxpY2l0OiBjb2x1bW59XCI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvbmctY29udGFpbmVyPlxuPC9uZy10ZW1wbGF0ZT5cblxuPCEtLSBDb250ZW50IFNlY3Rpb25zIC0tPlxuPCEtLSBUSVRMRSAtLT5cbjxuZy10ZW1wbGF0ZSAjdGl0bGUgbGV0LXNlY3Rpb24+XG4gIDxoMiAqbmdJZj1cInNlY3Rpb24udGl0bGVcIiBjbGFzcz1cIm43LWZvb3Rlcl9fY29sdW1uLXRpdGxlXCI+XG4gICAge3sgc2VjdGlvbi50aXRsZSB9fVxuICA8L2gyPlxuPC9uZy10ZW1wbGF0ZT5cbjwhLS0gVEVYVCAtLT5cbjxuZy10ZW1wbGF0ZSAjdGV4dCBsZXQtc2VjdGlvbj5cbiAgPHBcbiAgICAqbmdJZj1cInNlY3Rpb24udGV4dFwiXG4gICAgY2xhc3M9XCJuNy1mb290ZXJfX2NvbHVtbi10ZXh0XCJcbiAgICBbaW5uZXJIVE1MXT1cInNlY3Rpb24udGV4dFwiXG4gID48L3A+XG48L25nLXRlbXBsYXRlPlxuPCEtLSBJTUFHRVMgLS0+XG48bmctdGVtcGxhdGUgI2ltYWdlcyBsZXQtc2VjdGlvbj5cbiAgPGRpdiAqbmdJZj1cInNlY3Rpb24uaW1hZ2VzXCIgY2xhc3M9XCJuNy1mb290ZXJfX2NvbHVtbi1pbWFnZXNcIj5cbiAgICA8bjctYW5jaG9yLXdyYXBwZXJcbiAgICAgICpuZ0Zvcj1cImxldCBpbWFnZSBvZiBzZWN0aW9uLmltYWdlc1wiXG4gICAgICBbY2xhc3Nlc109XCJpbWFnZS5jbGFzc2VzIHx8ICcnXCJcbiAgICAgIFtkYXRhXT1cImltYWdlLmFuY2hvclwiXG4gICAgICAoY2xpY2tlZCk9XCJvbkNsaWNrKCRldmVudClcIlxuICAgID5cbiAgICAgIDxpbWcgW3NyY109XCJpbWFnZS51cmxcIiBbYXR0ci5hbHRdPVwiaW1hZ2UuYWx0dGV4dFwiIC8+XG4gICAgPC9uNy1hbmNob3Itd3JhcHBlcj5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuPCEtLSBTRUxFQ1RTIC0tPlxuPG5nLXRlbXBsYXRlICNzZWxlY3RzIGxldC1zZWN0aW9uPlxuICA8ZGl2ICpuZ0lmPVwic2VjdGlvbi5zZWxlY3RzXCIgY2xhc3M9XCJuNy1mb290ZXJfX2NvbHVtbi1zZWxlY3RzXCI+XG4gICAgPG43LWlucHV0LXNlbGVjdFxuICAgICAgKm5nRm9yPVwibGV0IHNlbGVjdERhdGEgb2Ygc2VjdGlvbi5zZWxlY3RzXCJcbiAgICAgIFtkYXRhXT1cInNlbGVjdERhdGFcIlxuICAgICAgW2VtaXRdPVwidGhpcy5lbWl0XCJcbiAgICA+XG4gICAgPC9uNy1pbnB1dC1zZWxlY3Q+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbjwhLS0gTElOS1MgLS0+XG48bmctdGVtcGxhdGUgI2xpbmtzIGxldC1zZWN0aW9uPlxuICA8ZGl2ICpuZ0lmPVwic2VjdGlvbi5saW5rc1wiIGNsYXNzPVwibjctZm9vdGVyX19jb2x1bW4tbmF2XCI+XG4gICAgPHVsIGNsYXNzPVwibjctZm9vdGVyX19jb2x1bW4tbmF2LWxpc3RcIj5cbiAgICAgIDxsaVxuICAgICAgICAqbmdGb3I9XCJsZXQgbGluayBvZiBzZWN0aW9uLmxpbmtzXCJcbiAgICAgICAgY2xhc3M9XCJuNy1mb290ZXJfX2NvbHVtbi1uYXYtaXRlbSB7e2xpbmsuY2xhc3NlcyB8fCAnJ319XCJcbiAgICAgID5cbiAgICAgICAgPG43LWFuY2hvci13cmFwcGVyXG4gICAgICAgICAgW2NsYXNzZXNdPVwiJ243LWZvb3Rlcl9fY29sdW1uLW5hdi1saW5rJ1wiXG4gICAgICAgICAgW2RhdGFdPVwibGluay5hbmNob3JcIlxuICAgICAgICAgIChjbGlja2VkKT1cIm9uQ2xpY2soJGV2ZW50KVwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyBsaW5rLnRleHQgfX1cbiAgICAgICAgPC9uNy1hbmNob3Itd3JhcHBlcj5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuIl19