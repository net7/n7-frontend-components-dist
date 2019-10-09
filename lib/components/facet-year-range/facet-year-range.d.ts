/**
 * Interface for FacetYearRangeComponent's "data"
 *
 * @property inDate (required)
 * - text (optional)
 * - classes (optional)
 * - payload (required)
 * - _meta (optional)
 * @property outDate (required)
 * - text (optional)
 * - classes (optional)
 * - payload (required)
 * - _meta (optional)
 * @property options (required)
 */
export interface IFacetYearRangeData {
    /**
     * beginning year range selection
     */
    inDate: {
        /**
         * <select> heading
         */
        text?: string;
        /**
         * additional html classes
         */
        classes?: any;
        /**
         * placeholder option
         */
        placeholder?: string;
        /**
         * onChange payload
         */
        payload: any;
        /**
         * additional data useful for the component's logic
         */
        _meta?: any;
        options: IFacetOptions[];
    };
    /**
    * end year range selection
    */
    outDate: {
        /**
         * <select> heading
         */
        text?: string;
        /**
         * additional html classes
         */
        classes?: any;
        /**
         * placeholder option
         */
        placeholder?: string;
        /**
         * onChange payload
         */
        payload: any;
        /**
         * additional data useful for the component's logic
         */
        _meta?: any;
        options: IFacetOptions[];
    };
}
export interface IFacetOptions {
    /**
     * value of each <option>
     */
    value: any;
}
export declare class FacetYearRangeComponent {
    data: IFacetYearRangeData;
    emit: any;
    onChange(payload: any, selected: any): void;
}
