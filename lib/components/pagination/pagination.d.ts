/**
 * Interface for PaginationComponent's links (pages and navigation buttons)
 *
 * @property text (required)
 * @property payload (required)
 * @property classes (optional)
 * @property _meta (optional)
 */
export interface IAnchor {
    /**
     * innerHTML or plain text for the label
     */
    text?: string;
    /**
     * additional html classes
     */
    classes?: string;
    /**
     * action click's payload
     */
    payload: any;
    /**
     * additional info
     */
    _meta?: any;
}
/**
 * Interface for PaginationComponent's "data"
 *
 * @property links (required)
 * @property first (optional)
 * @property prev (optional)
 * @property next (optional)
 * @property last (optional)
 * @property classes (optional)
 * @property payload (optional)
 * @property _meta (optional)
 */
export interface IPaginationData {
    /**
     * innerHtml for the "first" label
     */
    first?: IAnchor;
    /**
     * innerHtml for the "prev" label
     */
    prev?: IAnchor;
    /**
     * innerHtml for the "next" label
     */
    next?: IAnchor;
    /**
     * innerHtml for the "last" label
     */
    last?: IAnchor;
    /**
     * array of "pages" label (as text)
     */
    links: IAnchor[];
    /**
     * additional html classes
     */
    classes?: string;
    /**
     * action click's payload
     */
    payload?: any;
    /**
     * additional info
     */
    _meta?: any;
}
/**
 * PaginationComponent <n7-pagination>
 *
 * @example
 * ```html
 *
 * <n7-pagination [data]="{
 *  first: { payload: 'first', classes: 'is-disabled' },
 *  prev: { payload: 'prev', classes: 'is-disabled' },
 *  next: { payload: 'next' },
 *  last: { payload: 'last' },
 *  links: [
 *    { text: '1', payload: 1, classes: 'is-active' },
 *    { text: '2', payload: 2 },
 *    { text: '3', payload: 3 },
 *    { text: '4', payload: 4 },
 *    { text: '5', payload: 5 },
 *  ]
 * }"}>
 * </n7-pagination>
 * ```
 */
export declare class PaginationComponent {
    data: IPaginationData;
    emit: any;
    onClick(payload: any): void;
}
