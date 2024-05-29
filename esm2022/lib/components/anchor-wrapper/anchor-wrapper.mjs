//---------------------------
// ANCHOR-WRAPPER.ts
//---------------------------
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
export class AnchorWrapperComponent {
    constructor() {
        this.clicked = new EventEmitter();
    }
    isExternal(href) {
        return /^http(?:s)?:\/{2}\S+$/.test(href);
    }
    /**
     * Click event handler.
     * Outputs the payload to it's parent component
     */
    onClick(payload) {
        this.clicked.emit(payload);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: AnchorWrapperComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: AnchorWrapperComponent, selector: "n7-anchor-wrapper", inputs: { data: "data", classes: "classes" }, outputs: { clicked: "clicked" }, ngImport: i0, template: "<ng-container *ngIf=\"data; else noData\">\n  <ng-container *ngIf=\"data.href && isExternal(data.href)\">\n    <ng-container *ngTemplateOutlet=\"externalUrl\"></ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"data.href && !isExternal(data.href)\">\n    <ng-container *ngTemplateOutlet=\"internalUrl\"></ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"!data.href\">\n    <ng-container *ngTemplateOutlet=\"noUrl\"></ng-container>\n  </ng-container>\n</ng-container>\n\n<!-- No data template -->\n<ng-template #noData>\n  <a class=\"{{ classes || '' }}\"\n    ><ng-container *ngTemplateOutlet=\"content\"></ng-container\n  ></a>\n</ng-template>\n\n<!-- Internal URL template -->\n<ng-template #internalUrl>\n  <a\n    [routerLink]=\"data.href\"\n    [target]=\"data.target || '_self'\"\n    class=\"{{ classes || '' }}\"\n    [queryParams]=\"data.queryParams || null\"\n  >\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </a>\n</ng-template>\n\n<!-- External URL template -->\n<ng-template #externalUrl>\n  <a\n    [href]=\"data.href\"\n    [target]=\"data.target || '_self'\"\n    class=\"{{ classes || '' }}\"\n  >\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </a>\n</ng-template>\n\n<!-- No URL template -->\n<ng-template #noUrl>\n  <a (click)=\"onClick(data.payload)\" class=\"{{ classes || '' }}\">\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </a>\n</ng-template>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: AnchorWrapperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-anchor-wrapper', template: "<ng-container *ngIf=\"data; else noData\">\n  <ng-container *ngIf=\"data.href && isExternal(data.href)\">\n    <ng-container *ngTemplateOutlet=\"externalUrl\"></ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"data.href && !isExternal(data.href)\">\n    <ng-container *ngTemplateOutlet=\"internalUrl\"></ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"!data.href\">\n    <ng-container *ngTemplateOutlet=\"noUrl\"></ng-container>\n  </ng-container>\n</ng-container>\n\n<!-- No data template -->\n<ng-template #noData>\n  <a class=\"{{ classes || '' }}\"\n    ><ng-container *ngTemplateOutlet=\"content\"></ng-container\n  ></a>\n</ng-template>\n\n<!-- Internal URL template -->\n<ng-template #internalUrl>\n  <a\n    [routerLink]=\"data.href\"\n    [target]=\"data.target || '_self'\"\n    class=\"{{ classes || '' }}\"\n    [queryParams]=\"data.queryParams || null\"\n  >\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </a>\n</ng-template>\n\n<!-- External URL template -->\n<ng-template #externalUrl>\n  <a\n    [href]=\"data.href\"\n    [target]=\"data.target || '_self'\"\n    class=\"{{ classes || '' }}\"\n  >\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </a>\n</ng-template>\n\n<!-- No URL template -->\n<ng-template #noUrl>\n  <a (click)=\"onClick(data.payload)\" class=\"{{ classes || '' }}\">\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </a>\n</ng-template>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], classes: [{
                type: Input
            }], clicked: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5jaG9yLXdyYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYW5jaG9yLXdyYXBwZXIvYW5jaG9yLXdyYXBwZXIudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYW5jaG9yLXdyYXBwZXIvYW5jaG9yLXdyYXBwZXIuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0Isb0JBQW9CO0FBQ3BCLDZCQUE2QjtBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBT3ZFLE1BQU0sT0FBTyxzQkFBc0I7SUFKbkM7UUFTWSxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQWE3QztJQVhRLFVBQVUsQ0FBQyxJQUFJO1FBQ3BCLE9BQU8sdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7OEdBakJVLHNCQUFzQjtrR0FBdEIsc0JBQXNCLHdJQ1huQyx3L0NBb0RBOzsyRkR6Q2Esc0JBQXNCO2tCQUpsQyxTQUFTOytCQUNFLG1CQUFtQjs4QkFJcEIsSUFBSTtzQkFBWixLQUFLO2dCQUVHLE9BQU87c0JBQWYsS0FBSztnQkFFSSxPQUFPO3NCQUFoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEFOQ0hPUi1XUkFQUEVSLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5jaG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkLWludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1hbmNob3Itd3JhcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbmNob3Itd3JhcHBlci5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQW5jaG9yV3JhcHBlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IEFuY2hvcjtcblxuICBASW5wdXQoKSBjbGFzc2VzOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIGNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwdWJsaWMgaXNFeHRlcm5hbChocmVmKSB7XG4gICAgcmV0dXJuIC9eaHR0cCg/OnMpPzpcXC97Mn1cXFMrJC8udGVzdChocmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGljayBldmVudCBoYW5kbGVyLlxuICAgKiBPdXRwdXRzIHRoZSBwYXlsb2FkIHRvIGl0J3MgcGFyZW50IGNvbXBvbmVudFxuICAgKi9cbiAgb25DbGljayhwYXlsb2FkKSB7XG4gICAgdGhpcy5jbGlja2VkLmVtaXQocGF5bG9hZCk7XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJkYXRhOyBlbHNlIG5vRGF0YVwiPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGF0YS5ocmVmICYmIGlzRXh0ZXJuYWwoZGF0YS5ocmVmKVwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJleHRlcm5hbFVybFwiPjwvbmctY29udGFpbmVyPlxuICA8L25nLWNvbnRhaW5lcj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRhdGEuaHJlZiAmJiAhaXNFeHRlcm5hbChkYXRhLmhyZWYpXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImludGVybmFsVXJsXCI+PC9uZy1jb250YWluZXI+XG4gIDwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWRhdGEuaHJlZlwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJub1VybFwiPjwvbmctY29udGFpbmVyPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvbmctY29udGFpbmVyPlxuXG48IS0tIE5vIGRhdGEgdGVtcGxhdGUgLS0+XG48bmctdGVtcGxhdGUgI25vRGF0YT5cbiAgPGEgY2xhc3M9XCJ7eyBjbGFzc2VzIHx8ICcnIH19XCJcbiAgICA+PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRlbnRcIj48L25nLWNvbnRhaW5lclxuICA+PC9hPlxuPC9uZy10ZW1wbGF0ZT5cblxuPCEtLSBJbnRlcm5hbCBVUkwgdGVtcGxhdGUgLS0+XG48bmctdGVtcGxhdGUgI2ludGVybmFsVXJsPlxuICA8YVxuICAgIFtyb3V0ZXJMaW5rXT1cImRhdGEuaHJlZlwiXG4gICAgW3RhcmdldF09XCJkYXRhLnRhcmdldCB8fCAnX3NlbGYnXCJcbiAgICBjbGFzcz1cInt7IGNsYXNzZXMgfHwgJycgfX1cIlxuICAgIFtxdWVyeVBhcmFtc109XCJkYXRhLnF1ZXJ5UGFyYW1zIHx8IG51bGxcIlxuICA+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cbiAgPC9hPlxuPC9uZy10ZW1wbGF0ZT5cblxuPCEtLSBFeHRlcm5hbCBVUkwgdGVtcGxhdGUgLS0+XG48bmctdGVtcGxhdGUgI2V4dGVybmFsVXJsPlxuICA8YVxuICAgIFtocmVmXT1cImRhdGEuaHJlZlwiXG4gICAgW3RhcmdldF09XCJkYXRhLnRhcmdldCB8fCAnX3NlbGYnXCJcbiAgICBjbGFzcz1cInt7IGNsYXNzZXMgfHwgJycgfX1cIlxuICA+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cbiAgPC9hPlxuPC9uZy10ZW1wbGF0ZT5cblxuPCEtLSBObyBVUkwgdGVtcGxhdGUgLS0+XG48bmctdGVtcGxhdGUgI25vVXJsPlxuICA8YSAoY2xpY2spPVwib25DbGljayhkYXRhLnBheWxvYWQpXCIgY2xhc3M9XCJ7eyBjbGFzc2VzIHx8ICcnIH19XCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cbiAgPC9hPlxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNjb250ZW50PlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L25nLXRlbXBsYXRlPlxuIl19