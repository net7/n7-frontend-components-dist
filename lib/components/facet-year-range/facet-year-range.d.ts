import * as i0 from "@angular/core";
export interface FacetOptions {
    /**
     * value of each <option>
     */
    value: any;
}
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
export interface FacetYearRangeData {
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
        options: FacetOptions[];
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
        options: FacetOptions[];
    };
}
export declare class FacetYearRangeComponent {
    data: FacetYearRangeData;
    emit: any;
    onChange(payload: any, selected: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FacetYearRangeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FacetYearRangeComponent, "n7-facet-year-range", never, { "data": { "alias": "data"; "required": false; }; "emit": { "alias": "emit"; "required": false; }; }, {}, never, never, false, never>;
}
