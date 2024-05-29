import { Button, Icon } from '../../shared-interfaces';
import * as i0 from "@angular/core";
export interface ButtonData extends Button {
    isDisabled?: boolean;
    isLoading?: boolean;
    iconLeft?: Icon;
    iconRight?: Icon;
}
export declare class ButtonComponent {
    data: ButtonData;
    emit: (type: string, payload?: unknown) => void;
    onClick(value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "n7-button", never, { "data": "data"; "emit": "emit"; }, {}, never, never, false>;
}
