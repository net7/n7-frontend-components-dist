/**
 * Interface for ContentPlaceholderComponent's "data"
 *
 * @property classes (optional)
 * @property _meta (optional)
 */
export interface IContentPlaceholderData {
    /**
     * array of html classes
     */
    blocks: IBlocksData[];
    /**
     * additional info
     */
    _meta?: any;
}
interface IBlocksData {
    classes?: string;
    image?: string;
    alt?: string;
}
export declare class ContentPlaceholderComponent {
    data: IContentPlaceholderData;
}
export {};
