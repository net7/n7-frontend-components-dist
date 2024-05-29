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
}
FooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: FooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: FooterComponent, selector: "n7-footer", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\"\n     class=\"n7-footer {{data.classes || ''}}\">\n    <div class=\"n7-footer__content\">\n        <!-- Loop footer content columns -->\n        <div class=\"n7-footer__column {{column.classes || ''}}\"\n             *ngFor=\"let column of data.columns\">\n            <ng-container *ngTemplateOutlet=\"footerColumn; context:{$implicit: column}\"></ng-container>\n        </div>\n    </div>\n</div>\n\n<!-- Template: Columns -->\n<ng-template #footerColumn let-column>\n    <!-- Custom order for content (sections) -->\n    <ng-container *ngFor=\"let section of column.sections\">\n        <ng-container [ngSwitch]=\"section.type\">\n            <ng-container *ngSwitchCase=\"'text'\">\n                <ng-container *ngTemplateOutlet=\"text; context:{$implicit: section}\">\n                </ng-container>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"'title'\">\n                <ng-container *ngTemplateOutlet=\"title; context:{$implicit: section}\">\n                </ng-container>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"'links'\">\n                <ng-container *ngTemplateOutlet=\"links; context:{$implicit: section}\">\n                </ng-container>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"'selects'\">\n                <ng-container *ngTemplateOutlet=\"selects; context:{$implicit: section}\">\n                </ng-container>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"'images'\">\n                <ng-container *ngTemplateOutlet=\"images; context:{$implicit: section}\">\n                </ng-container>\n            </ng-container>\n            <ng-container *ngSwitchDefault>\n            </ng-container>\n        </ng-container>\n    </ng-container>\n\n    <!-- Legacy configuration without sections -->\n    <ng-container *ngIf=\"column.title\">\n        <ng-container *ngTemplateOutlet=\"title; context:{$implicit: column}\">\n        </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"column.text\">\n        <ng-container *ngTemplateOutlet=\"text; context:{$implicit: column}\">\n        </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"column.links\">\n        <ng-container *ngTemplateOutlet=\"links; context:{$implicit: column}\">\n        </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"column.images\">\n        <ng-container *ngTemplateOutlet=\"images; context:{$implicit: column}\">\n        </ng-container>\n    </ng-container>\n</ng-template>\n\n<!-- Content Sections -->\n<!-- TITLE -->\n<ng-template #title let-section>\n    <h2 *ngIf=\"section.title\"\n        class=\"n7-footer__column-title\">\n        {{ section.title }}\n    </h2>\n</ng-template>\n<!-- TEXT -->\n<ng-template #text let-section>\n    <p *ngIf=\"section.text\"\n       class=\"n7-footer__column-text\"\n       [innerHTML]=\"section.text\"></p>\n</ng-template>\n<!-- IMAGES -->\n<ng-template #images let-section>\n    <div *ngIf=\"section.images\"\n         class=\"n7-footer__column-images\">\n        <n7-anchor-wrapper *ngFor=\"let image of section.images\"\n                           [classes]=\"image.classes || ''\"\n                           [data]=\"image.anchor\"\n                           (clicked)=\"onClick($event)\">\n            <img [src]=\"image.url\"\n                 [attr.alt]=\"image.alttext\" />\n        </n7-anchor-wrapper>\n    </div>\n</ng-template>\n<!-- SELECTS -->\n<ng-template #selects let-section>\n    <div *ngIf=\"section.selects\"\n         class=\"n7-footer__column-selects\">\n        <n7-input-select *ngFor=\"let selectData of section.selects\"\n                         [data]=\"selectData\"\n                         [emit]=\"this.emit\">\n        </n7-input-select>\n    </div>\n</ng-template>\n<!-- LINKS -->\n<ng-template #links let-section>\n    <div *ngIf=\"section.links\"\n         class=\"n7-footer__column-nav\">\n        <ul class=\"n7-footer__column-nav-list\">\n            <li *ngFor=\"let link of section.links\"\n                class=\"n7-footer__column-nav-item {{link.classes || ''}}\">\n                <n7-anchor-wrapper [classes]=\"'n7-footer__column-nav-link'\"\n                                   [data]=\"link.anchor\"\n                                   (clicked)=\"onClick($event)\">\n                    {{ link.text }}\n                </n7-anchor-wrapper>\n            </li>\n        </ul>\n    </div>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i1.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "component", type: i2.AnchorWrapperComponent, selector: "n7-anchor-wrapper", inputs: ["data", "classes"], outputs: ["clicked"] }, { kind: "component", type: i3.InputSelectComponent, selector: "n7-input-select", inputs: ["data", "emit"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: FooterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-footer', template: "<div *ngIf=\"data\"\n     class=\"n7-footer {{data.classes || ''}}\">\n    <div class=\"n7-footer__content\">\n        <!-- Loop footer content columns -->\n        <div class=\"n7-footer__column {{column.classes || ''}}\"\n             *ngFor=\"let column of data.columns\">\n            <ng-container *ngTemplateOutlet=\"footerColumn; context:{$implicit: column}\"></ng-container>\n        </div>\n    </div>\n</div>\n\n<!-- Template: Columns -->\n<ng-template #footerColumn let-column>\n    <!-- Custom order for content (sections) -->\n    <ng-container *ngFor=\"let section of column.sections\">\n        <ng-container [ngSwitch]=\"section.type\">\n            <ng-container *ngSwitchCase=\"'text'\">\n                <ng-container *ngTemplateOutlet=\"text; context:{$implicit: section}\">\n                </ng-container>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"'title'\">\n                <ng-container *ngTemplateOutlet=\"title; context:{$implicit: section}\">\n                </ng-container>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"'links'\">\n                <ng-container *ngTemplateOutlet=\"links; context:{$implicit: section}\">\n                </ng-container>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"'selects'\">\n                <ng-container *ngTemplateOutlet=\"selects; context:{$implicit: section}\">\n                </ng-container>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"'images'\">\n                <ng-container *ngTemplateOutlet=\"images; context:{$implicit: section}\">\n                </ng-container>\n            </ng-container>\n            <ng-container *ngSwitchDefault>\n            </ng-container>\n        </ng-container>\n    </ng-container>\n\n    <!-- Legacy configuration without sections -->\n    <ng-container *ngIf=\"column.title\">\n        <ng-container *ngTemplateOutlet=\"title; context:{$implicit: column}\">\n        </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"column.text\">\n        <ng-container *ngTemplateOutlet=\"text; context:{$implicit: column}\">\n        </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"column.links\">\n        <ng-container *ngTemplateOutlet=\"links; context:{$implicit: column}\">\n        </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"column.images\">\n        <ng-container *ngTemplateOutlet=\"images; context:{$implicit: column}\">\n        </ng-container>\n    </ng-container>\n</ng-template>\n\n<!-- Content Sections -->\n<!-- TITLE -->\n<ng-template #title let-section>\n    <h2 *ngIf=\"section.title\"\n        class=\"n7-footer__column-title\">\n        {{ section.title }}\n    </h2>\n</ng-template>\n<!-- TEXT -->\n<ng-template #text let-section>\n    <p *ngIf=\"section.text\"\n       class=\"n7-footer__column-text\"\n       [innerHTML]=\"section.text\"></p>\n</ng-template>\n<!-- IMAGES -->\n<ng-template #images let-section>\n    <div *ngIf=\"section.images\"\n         class=\"n7-footer__column-images\">\n        <n7-anchor-wrapper *ngFor=\"let image of section.images\"\n                           [classes]=\"image.classes || ''\"\n                           [data]=\"image.anchor\"\n                           (clicked)=\"onClick($event)\">\n            <img [src]=\"image.url\"\n                 [attr.alt]=\"image.alttext\" />\n        </n7-anchor-wrapper>\n    </div>\n</ng-template>\n<!-- SELECTS -->\n<ng-template #selects let-section>\n    <div *ngIf=\"section.selects\"\n         class=\"n7-footer__column-selects\">\n        <n7-input-select *ngFor=\"let selectData of section.selects\"\n                         [data]=\"selectData\"\n                         [emit]=\"this.emit\">\n        </n7-input-select>\n    </div>\n</ng-template>\n<!-- LINKS -->\n<ng-template #links let-section>\n    <div *ngIf=\"section.links\"\n         class=\"n7-footer__column-nav\">\n        <ul class=\"n7-footer__column-nav-list\">\n            <li *ngFor=\"let link of section.links\"\n                class=\"n7-footer__column-nav-item {{link.classes || ''}}\">\n                <n7-anchor-wrapper [classes]=\"'n7-footer__column-nav-link'\"\n                                   [data]=\"link.anchor\"\n                                   (clicked)=\"onClick($event)\">\n                    {{ link.text }}\n                </n7-anchor-wrapper>\n            </li>\n        </ul>\n    </div>\n</ng-template>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZHYtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixZQUFZO0FBQ1osNkJBQTZCO0FBRTdCLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUNqQixNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFnS3ZCLE1BQU0sT0FBTyxlQUFlO0lBSzFCLE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs0R0FSVSxlQUFlO2dHQUFmLGVBQWUseUZDdEs1QixpNElBaUhBOzJGRHFEYSxlQUFlO2tCQUozQixTQUFTOytCQUNFLFdBQVc7OEJBSVosSUFBSTtzQkFBWixLQUFLO2dCQUVHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGT09URVIudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCwgSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dFNlbGVjdERhdGEgfSBmcm9tICcuLi9pbnB1dC1zZWxlY3QvaW5wdXQtc2VsZWN0JztcbmltcG9ydCB7IEFuY2hvciB9IGZyb20gJy4uLy4uL3NoYXJlZC1pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGVhY2ggbGluayBpbiBmb290ZXIgbWVudXNcbiAqXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgYW5jaG9yIChtYW5kYXRvcnkpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRm9vdGVyTGluayB7XG4gIC8qKlxuICAgKiBpbWFnZSB1cmxcbiAgICovXG4gIHRleHQ6IHN0cmluZztcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogYW55O1xuICBhbmNob3I6IEFuY2hvcjtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mbyB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbmV4cG9ydCB0eXBlIEZvb3RlclRpdGxlID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgRm9vdGVyVGV4dCA9IHN0cmluZztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGVhY2ggaW1hZ2UgaW4gdGhlIGZvb3RlciAodXN1YWxseSBsb2dvcylcbiAqXG4gKiBAcHJvcGVydHkgdXJsIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBhbHR0ZXh0IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBhbmNob3IgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZvb3RlckltYWdlIHtcbiAgLyoqXG4gICAqIGltYWdlIHVybFxuICAgKi9cbiAgdXJsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBpbWFnZSBhbHQgdGV4dFxuICAgKi9cbiAgYWx0dGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogYW55O1xuICBhbmNob3I6IEFuY2hvcjtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mbyB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9vdGVyVGl0bGVJdGVtIHtcbiAgdHlwZTogJ3RpdGxlJztcbiAgdGl0bGU6IEZvb3RlclRpdGxlO1xufVxuZXhwb3J0IGludGVyZmFjZSBGb290ZXJJbWFnZXNJdGVtIHtcbiAgdHlwZTogJ2ltYWdlcyc7XG4gIGltYWdlczogRm9vdGVySW1hZ2VbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRm9vdGVyU2VsZWN0c0l0ZW0ge1xuICB0eXBlOiAnc2VsZWN0cyc7XG4gIHNlbGVjdHM6IElucHV0U2VsZWN0RGF0YVtdXG59XG5leHBvcnQgaW50ZXJmYWNlIEZvb3RlclRleHRJdGVtIHtcbiAgdHlwZTogJ3RleHQnO1xuICB0ZXh0OiBGb290ZXJUZXh0O1xufVxuZXhwb3J0IGludGVyZmFjZSBGb290ZXJMaW5rc0l0ZW0ge1xuICB0eXBlOiAnbGlua3MnO1xuICBsaW5rczogRm9vdGVyTGlua1tdO1xufVxuXG5leHBvcnQgdHlwZSBGb290ZXJJdGVtID1cbiAgRm9vdGVyVGl0bGVJdGVtXG4gIHwgRm9vdGVySW1hZ2VzSXRlbVxuICB8IEZvb3RlclNlbGVjdHNJdGVtXG4gIHwgRm9vdGVyVGV4dEl0ZW1cbiAgfCBGb290ZXJMaW5rc0l0ZW1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGEgc2luZ2xlIEZvb3RlciBjb2x1bW4gdGhhdCBjYW4gZGlzcGxheSB0aXRsZSwgaW1hZ2VzLCB0ZXh0IGFuZCBhIG5hdiBsaXN0XG4gKlxuICogQHByb3BlcnR5IHRpdGxlIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBpbWFnZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHRleHQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGxpbmtzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZvb3RlckNvbHVtbiB7XG4gIC8qKlxuICAgKiBjb2x1bW4ncyB0aXRsZVxuICAgKi9cbiAgdGl0bGU/OiBGb290ZXJUaXRsZTtcbiAgLyoqXG4gICAqIGNvbHVtbidzIGltYWdlc1xuICAgKi9cbiAgaW1hZ2VzPzogRm9vdGVySW1hZ2VbXTtcbiAgLyoqXG4gICAqIEhUTUxTZWxlY3Qgd2l0aCBzb21lIG9wdGlvbnNcbiAgICovXG4gIHNlbGVjdHM/OiBJbnB1dFNlbGVjdERhdGFbXTtcbiAgLyoqXG4gICAqIGNvbHVtbidzIHRleHRcbiAgICovXG4gIHRleHQ/OiBGb290ZXJUZXh0O1xuICAvKipcbiAgICogY29sdW1uJ3MgbmF2XG4gICAqL1xuICBsaW5rcz86IEZvb3RlckxpbmtbXTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogYW55O1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXG4gICAqL1xuICBfbWV0YT86IGFueTtcbiAgLyoqXG4gICAqIGN1c3RvbSBvcmRlciBmb3IgZm9vdGVyIGNvbHVtbiBjb250ZW50XG4gICAqL1xuICBzZWN0aW9ucz86IEZvb3Rlckl0ZW1bXTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEZvb3RlckNvbXBvbmVudHMncyBcIkRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBjb2x1bW5zIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRm9vdGVyRGF0YSB7XG4gIC8qKlxuICAgKiBlYWNoIGl0ZW0gcmVuZGVycyBhIGNvbHVtbiBvZiB0aGUgZm9vdGVyXG4gICAqL1xuICBjb2x1bW5zOiBGb290ZXJDb2x1bW5bXTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1mb290ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9vdGVyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IEZvb3RlckRhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG59XG4iLCI8ZGl2ICpuZ0lmPVwiZGF0YVwiXG4gICAgIGNsYXNzPVwibjctZm9vdGVyIHt7ZGF0YS5jbGFzc2VzIHx8ICcnfX1cIj5cbiAgICA8ZGl2IGNsYXNzPVwibjctZm9vdGVyX19jb250ZW50XCI+XG4gICAgICAgIDwhLS0gTG9vcCBmb290ZXIgY29udGVudCBjb2x1bW5zIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibjctZm9vdGVyX19jb2x1bW4ge3tjb2x1bW4uY2xhc3NlcyB8fCAnJ319XCJcbiAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGRhdGEuY29sdW1uc1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImZvb3RlckNvbHVtbjsgY29udGV4dDp7JGltcGxpY2l0OiBjb2x1bW59XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjwhLS0gVGVtcGxhdGU6IENvbHVtbnMgLS0+XG48bmctdGVtcGxhdGUgI2Zvb3RlckNvbHVtbiBsZXQtY29sdW1uPlxuICAgIDwhLS0gQ3VzdG9tIG9yZGVyIGZvciBjb250ZW50IChzZWN0aW9ucykgLS0+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc2VjdGlvbiBvZiBjb2x1bW4uc2VjdGlvbnNcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwic2VjdGlvbi50eXBlXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIndGV4dCdcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGV4dDsgY29udGV4dDp7JGltcGxpY2l0OiBzZWN0aW9ufVwiPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIndGl0bGUnXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRpdGxlOyBjb250ZXh0OnskaW1wbGljaXQ6IHNlY3Rpb259XCI+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidsaW5rcydcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibGlua3M7IGNvbnRleHQ6eyRpbXBsaWNpdDogc2VjdGlvbn1cIj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3NlbGVjdHMnXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInNlbGVjdHM7IGNvbnRleHQ6eyRpbXBsaWNpdDogc2VjdGlvbn1cIj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2ltYWdlcydcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaW1hZ2VzOyBjb250ZXh0OnskaW1wbGljaXQ6IHNlY3Rpb259XCI+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDwhLS0gTGVnYWN5IGNvbmZpZ3VyYXRpb24gd2l0aG91dCBzZWN0aW9ucyAtLT5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sdW1uLnRpdGxlXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0aXRsZTsgY29udGV4dDp7JGltcGxpY2l0OiBjb2x1bW59XCI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW4udGV4dFwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGV4dDsgY29udGV4dDp7JGltcGxpY2l0OiBjb2x1bW59XCI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW4ubGlua3NcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImxpbmtzOyBjb250ZXh0OnskaW1wbGljaXQ6IGNvbHVtbn1cIj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbHVtbi5pbWFnZXNcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImltYWdlczsgY29udGV4dDp7JGltcGxpY2l0OiBjb2x1bW59XCI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuPC9uZy10ZW1wbGF0ZT5cblxuPCEtLSBDb250ZW50IFNlY3Rpb25zIC0tPlxuPCEtLSBUSVRMRSAtLT5cbjxuZy10ZW1wbGF0ZSAjdGl0bGUgbGV0LXNlY3Rpb24+XG4gICAgPGgyICpuZ0lmPVwic2VjdGlvbi50aXRsZVwiXG4gICAgICAgIGNsYXNzPVwibjctZm9vdGVyX19jb2x1bW4tdGl0bGVcIj5cbiAgICAgICAge3sgc2VjdGlvbi50aXRsZSB9fVxuICAgIDwvaDI+XG48L25nLXRlbXBsYXRlPlxuPCEtLSBURVhUIC0tPlxuPG5nLXRlbXBsYXRlICN0ZXh0IGxldC1zZWN0aW9uPlxuICAgIDxwICpuZ0lmPVwic2VjdGlvbi50ZXh0XCJcbiAgICAgICBjbGFzcz1cIm43LWZvb3Rlcl9fY29sdW1uLXRleHRcIlxuICAgICAgIFtpbm5lckhUTUxdPVwic2VjdGlvbi50ZXh0XCI+PC9wPlxuPC9uZy10ZW1wbGF0ZT5cbjwhLS0gSU1BR0VTIC0tPlxuPG5nLXRlbXBsYXRlICNpbWFnZXMgbGV0LXNlY3Rpb24+XG4gICAgPGRpdiAqbmdJZj1cInNlY3Rpb24uaW1hZ2VzXCJcbiAgICAgICAgIGNsYXNzPVwibjctZm9vdGVyX19jb2x1bW4taW1hZ2VzXCI+XG4gICAgICAgIDxuNy1hbmNob3Itd3JhcHBlciAqbmdGb3I9XCJsZXQgaW1hZ2Ugb2Ygc2VjdGlvbi5pbWFnZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzZXNdPVwiaW1hZ2UuY2xhc3NlcyB8fCAnJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJpbWFnZS5hbmNob3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrZWQpPVwib25DbGljaygkZXZlbnQpXCI+XG4gICAgICAgICAgICA8aW1nIFtzcmNdPVwiaW1hZ2UudXJsXCJcbiAgICAgICAgICAgICAgICAgW2F0dHIuYWx0XT1cImltYWdlLmFsdHRleHRcIiAvPlxuICAgICAgICA8L243LWFuY2hvci13cmFwcGVyPlxuICAgIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbjwhLS0gU0VMRUNUUyAtLT5cbjxuZy10ZW1wbGF0ZSAjc2VsZWN0cyBsZXQtc2VjdGlvbj5cbiAgICA8ZGl2ICpuZ0lmPVwic2VjdGlvbi5zZWxlY3RzXCJcbiAgICAgICAgIGNsYXNzPVwibjctZm9vdGVyX19jb2x1bW4tc2VsZWN0c1wiPlxuICAgICAgICA8bjctaW5wdXQtc2VsZWN0ICpuZ0Zvcj1cImxldCBzZWxlY3REYXRhIG9mIHNlY3Rpb24uc2VsZWN0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGFdPVwic2VsZWN0RGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2VtaXRdPVwidGhpcy5lbWl0XCI+XG4gICAgICAgIDwvbjctaW5wdXQtc2VsZWN0PlxuICAgIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbjwhLS0gTElOS1MgLS0+XG48bmctdGVtcGxhdGUgI2xpbmtzIGxldC1zZWN0aW9uPlxuICAgIDxkaXYgKm5nSWY9XCJzZWN0aW9uLmxpbmtzXCJcbiAgICAgICAgIGNsYXNzPVwibjctZm9vdGVyX19jb2x1bW4tbmF2XCI+XG4gICAgICAgIDx1bCBjbGFzcz1cIm43LWZvb3Rlcl9fY29sdW1uLW5hdi1saXN0XCI+XG4gICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGxpbmsgb2Ygc2VjdGlvbi5saW5rc1wiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJuNy1mb290ZXJfX2NvbHVtbi1uYXYtaXRlbSB7e2xpbmsuY2xhc3NlcyB8fCAnJ319XCI+XG4gICAgICAgICAgICAgICAgPG43LWFuY2hvci13cmFwcGVyIFtjbGFzc2VzXT1cIiduNy1mb290ZXJfX2NvbHVtbi1uYXYtbGluaydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJsaW5rLmFuY2hvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGlja2VkKT1cIm9uQ2xpY2soJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBsaW5rLnRleHQgfX1cbiAgICAgICAgICAgICAgICA8L243LWFuY2hvci13cmFwcGVyPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=