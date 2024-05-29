import { EventEmitter } from '@angular/core';
import { Anchor } from '../../shared-interfaces';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<AnchorWrapperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AnchorWrapperComponent, "n7-anchor-wrapper", never, { "data": { "alias": "data"; "required": false; }; "classes": { "alias": "classes"; "required": false; }; }, { "clicked": "clicked"; }, never, ["*"], false, never>;
}
