/**
 * Interface for datapicker component
 * @property id (required)
 * @property libOptions (required)
 * @property classes (optional)
 * @property payload (optional)
 * @property _meta (optional)
 */
export interface DatePickerData {
    /**
     * datepicker id
     */
    id: string;
    /**
    * datepicker library options
    * view LINK: https://flatpickr.js.org/
    */
    libOptions: any;
    /**
     * for datepicker range min and max range value
     */
    minRange?: number;
    maxRange?: number;
    classes?: string;
    /**
     * datepicker event payload
     */
    payload?: any;
    _meta?: any;
    /**
     * callback for saving the created datepicker instance
     */
    getInstance?: any;
}
export declare class DatepickerComponent {
    data: DatePickerData;
    emit: any;
    private _loaded;
    ngAfterContentChecked(): void;
}
