import { EventEmitter } from '@angular/core';
import { IAnchor } from '../../shared-interfaces';
export declare class AnchorWrapperComponent {
    data: IAnchor;
    classes: string;
    clicked: EventEmitter<any>;
    isExternal(href: any): boolean;
    /**
     * Click event handler.
     * Outputs the payload to it's parent component
     */
    onClick(payload: any): void;
}
