/**
 * Interface for LoaderComponent's "data"
 *
 * @property classes (optional)
 * @property _meta (optional)
 */
export interface ILoaderData {
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
    data: ILoaderData;
}
