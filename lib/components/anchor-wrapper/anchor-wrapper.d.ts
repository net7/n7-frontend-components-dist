import { EventEmitter } from '@angular/core';
import { Anchor } from '../../shared-interfaces';
import * as ɵngcc0 from '@angular/core';
export declare class AnchorWrapperComponent {
    data: Anchor;
    classes: string;
    clicked: EventEmitter<any>;
    isExternal(href: any): boolean;
    /**
     * Click event handler.
     * Outputs the payload to it's parent component
     */
    onClick(payload: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AnchorWrapperComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AnchorWrapperComponent, "n7-anchor-wrapper", never, { "data": "data"; "classes": "classes"; }, { "clicked": "clicked"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5jaG9yLXdyYXBwZXIuZC50cyIsInNvdXJjZXMiOlsiYW5jaG9yLXdyYXBwZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFuY2hvcldyYXBwZXJDb21wb25lbnQge1xyXG4gICAgZGF0YTogQW5jaG9yO1xyXG4gICAgY2xhc3Nlczogc3RyaW5nO1xyXG4gICAgY2xpY2tlZDogRXZlbnRFbWl0dGVyPGFueT47XHJcbiAgICBpc0V4dGVybmFsKGhyZWY6IGFueSk6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIENsaWNrIGV2ZW50IGhhbmRsZXIuXHJcbiAgICAgKiBPdXRwdXRzIHRoZSBwYXlsb2FkIHRvIGl0J3MgcGFyZW50IGNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBvbkNsaWNrKHBheWxvYWQ6IGFueSk6IHZvaWQ7XHJcbn1cclxuIl19