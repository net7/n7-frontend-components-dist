import * as i0 from "@angular/core";
interface BlocksData {
    classes?: string;
    image?: string;
    alt?: string;
}
/**
 * Interface for ContentPlaceholderComponent's "data"
 *
 * @property classes (optional)
 * @property _meta (optional)
 */
export interface ContentPlaceholderData {
    /**
     * array of html classes
     */
    blocks: BlocksData[];
    /**
     * additional info
     */
    _meta?: any;
}
export declare class ContentPlaceholderComponent {
    data: ContentPlaceholderData;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContentPlaceholderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ContentPlaceholderComponent, "n7-content-placeholder", never, { "data": { "alias": "data"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
