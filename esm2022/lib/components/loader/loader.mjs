//---------------------------
// LOADER.ts
//---------------------------
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class LoaderComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: LoaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: LoaderComponent, selector: "n7-loader", inputs: { data: "data" }, ngImport: i0, template: "<span class=\"n7-loader {{ data && data.classes ? data.classes : '' }}\"></span>\n" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: LoaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-loader', template: "<span class=\"n7-loader {{ data && data.classes ? data.classes : '' }}\"></span>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZHYtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixZQUFZO0FBQ1osNkJBQTZCO0FBRTdCLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQXVCakQsTUFBTSxPQUFPLGVBQWU7OEdBQWYsZUFBZTtrR0FBZixlQUFlLDJFQzNCNUIsb0ZBQ0E7OzJGRDBCYSxlQUFlO2tCQUozQixTQUFTOytCQUNFLFdBQVc7OEJBSUwsSUFBSTtzQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBMT0FERVIudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIExvYWRlckNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMb2FkZXJEYXRhIHtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvXG4gICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctbG9hZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRlci5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTG9hZGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgcHVibGljIGRhdGE6IExvYWRlckRhdGE7XG59XG4iLCI8c3BhbiBjbGFzcz1cIm43LWxvYWRlciB7eyBkYXRhICYmIGRhdGEuY2xhc3NlcyA/IGRhdGEuY2xhc3NlcyA6ICcnIH19XCI+PC9zcGFuPlxuIl19