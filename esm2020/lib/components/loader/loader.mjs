//---------------------------
// LOADER.ts
//---------------------------
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class LoaderComponent {
}
LoaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: LoaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LoaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: LoaderComponent, selector: "n7-loader", inputs: { data: "data" }, ngImport: i0, template: "<div class=\"n7-loader {{ data && data.classes ? data.classes : '' }}\">\n    Loading\n</div>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: LoaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-loader', template: "<div class=\"n7-loader {{ data && data.classes ? data.classes : '' }}\">\n    Loading\n</div>" }]
        }], propDecorators: { data: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZHYtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixZQUFZO0FBQ1osNkJBQTZCO0FBRTdCLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQXVCakQsTUFBTSxPQUFPLGVBQWU7OzRHQUFmLGVBQWU7Z0dBQWYsZUFBZSwyRUMzQjVCLCtGQUVNOzJGRHlCTyxlQUFlO2tCQUozQixTQUFTOytCQUNFLFdBQVc7OEJBSUgsSUFBSTtzQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBMT0FERVIudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIExvYWRlckNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMb2FkZXJEYXRhIHtcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgICAqL1xuICAgIGNsYXNzZXM/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBpbmZvXG4gICAgICovXG4gICAgX21ldGE/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWxvYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkZXIuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTG9hZGVyQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBwdWJsaWMgZGF0YTogTG9hZGVyRGF0YTtcbn1cbiIsIjxkaXYgY2xhc3M9XCJuNy1sb2FkZXIge3sgZGF0YSAmJiBkYXRhLmNsYXNzZXMgPyBkYXRhLmNsYXNzZXMgOiAnJyB9fVwiPlxuICAgIExvYWRpbmdcbjwvZGl2PiJdfQ==