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
/**
 * LoaderComponent <n7-loader>
 *
 * @example
 * ```html
 *
 * <n7-loader [data]="{
 *          classes: 'animated-loader'
 *      }">
 * </n7-loader>
 * ```
 */
export declare class LoaderComponent {
    data: ILoaderData;
}
