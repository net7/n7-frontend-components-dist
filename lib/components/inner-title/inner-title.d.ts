/**
 * Interface for InnerTitleComponent's "data"
 *
 * @property NAME (required|options) <--- TODO: update with interface properties
 */
export interface IInnerTitleData {
    icon?: string;
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
            options: IInnerTitleOptions[];
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
        buttons?: IInnerTitleButtons[];
    };
}
export interface IInnerTitleOptions {
    value: string;
    payload: any;
}
export interface IInnerTitleButtons {
    text: string;
    payload: any;
    classes?: any;
}
export declare class InnerTitleComponent {
    data: IInnerTitleData;
    emit: any;
    onClick(payload: any): void;
    onChange(payload: any, value: any): void;
    onInputChange(payload: any, value: any): void;
    onInputEnter(payload: any, value: any): void;
}
