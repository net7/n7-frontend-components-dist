import * as i0 from "@angular/core";
/**
 * Interface for svg/img icons
 */
export interface ImgIcon {
    /** Path to the resource */
    path: string;
    /** Alt text for <img/> */
    alt?: string;
}
/**
 * Interface for the data widget component's data
 *
 * @property icon (optional)
 * @property text (required)
 * @property subtitle (required)
 * - text (required)
 * - icon (optional)
 * - grow (required)
 */
export interface DataWidgetData {
    /**
     * item icon
     */
    icon?: string;
    /**
     * image icon
     */
    imgIcon?: ImgIcon;
    /**
     * item text
     */
    text?: string;
    subtitle?: {
        /**
         * item subtitle
         */
        text: string;
        /**
         * item subtitle icon
         */
        icon: string;
        /**
         * image icon
         */
        imgIcon?: ImgIcon;
        /**
         * percent rate
         */
        value: number | string;
        payload: any;
    };
    classes?: string;
    /**
     * mouse event payload
     */
    payload: any;
    _meta?: any;
}
export declare class DataWidgetComponent {
    data: DataWidgetData;
    emit: any;
    onMouseEnter(payload: any): void;
    onMouseLeave(payload: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DataWidgetComponent, "n7-data-widget", never, { "data": { "alias": "data"; "required": false; }; "emit": { "alias": "emit"; "required": false; }; }, {}, never, never, false, never>;
}
