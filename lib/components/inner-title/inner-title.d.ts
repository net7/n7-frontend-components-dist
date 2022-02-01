import { Anchor, Icon } from '../../shared-interfaces';
import * as i0 from "@angular/core";
/**
 * Interface for InnerTitleComponent's "data"
 *
 * @property NAME (required|options) <--- TODO: update with interface properties
 */
export interface InnerTitleData {
    icon?: Icon;
    image?: string;
    title: {
        main: {
            text: string;
            classes?: any;
        };
        secondary?: {
            text: string;
            classes?: any;
        };
    };
    tools?: string;
    actions?: {
        select?: {
            label?: string;
            options: InnerTitleOptions[];
            payload?: any;
        };
        search?: {
            placeholder: string;
            payload: any;
            button?: {
                text: string;
                payload: any;
            };
            _meta?: any;
        };
        buttons?: InnerTitleButtons[];
    };
}
export interface InnerTitleOptions {
    text: string;
    value: string;
    disabled?: boolean;
    selected?: boolean;
}
export interface InnerTitleButtons {
    anchor: Anchor;
    text: string;
    classes?: any;
    icon?: Icon;
}
export declare class InnerTitleComponent {
    data: InnerTitleData;
    emit: any;
    onClick(payload: any): void;
    onChange(payload: any, value: any): void;
    onInputChange(payload: any, value: any): void;
    onInputEnter(payload: any, value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InnerTitleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InnerTitleComponent, "n7-inner-title", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}
