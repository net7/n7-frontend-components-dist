import * as i0 from "@angular/core";
/**
 * Interface for an index component Item
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
    static ɵcmp: i0.ɵɵComponentDeclaration<DataWidgetComponent, "n7-data-widget", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}
