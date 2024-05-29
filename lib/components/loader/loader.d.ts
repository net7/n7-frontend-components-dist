import * as i0 from "@angular/core";
/**
 * Interface for LoaderComponent's "data"
 *
 * @property classes (optional)
 * @property _meta (optional)
 */
export interface LoaderData {
    /**
     * additional html classes
     */
    classes?: string;
    /**
     * additional info
     */
    _meta?: any;
}
export declare class LoaderComponent {
    data: LoaderData;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoaderComponent, "n7-loader", never, { "data": "data"; }, {}, never, never, false>;
}
