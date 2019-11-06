/**
 * Interface for TreeComponent's "data"
 *
 * @property header (required)
 * - icon (required)
 * - text (required)
 * - collapseIcon (required)
 * - classes (optional)
 * - payload (optional)
 * @property items (required)
 */
export interface ITreeData {
    /**
     * tree of items
     */
    items: ITreeItem[];
}
/**
 * Interface for the single TreeComponent's "Item"
 *
 * @property icon (optional)
 * @property img (optional)
 * @property classes (optional)
 * @property text (required)
 * @property payload (optional)
 * @property _meta (optional)
 * @property items (optional)
 */
export interface ITreeItem {
    /**
     * the node's toggle arrow, to expand and
     * collapse it's child nodes.
     */
    toggle?: {
        icon: string;
        payload?: any;
    };
    /**
     * the item's icon, only used on leaf items
     */
    icon?: string;
    /**
    * the item's right icon, only used on tree items
    */
    iconright?: string;
    /**
     * the item's image, only used on leaf items
     */
    img?: string;
    /**
     * additional html classes
     */
    classes?: any;
    /**
     * the item's rendered text
     */
    text: string;
    /**
     * payload for onClick events
     */
    payload?: any;
    /**
     * additional info useful for the component's logic
     */
    _meta?: any;
    /**
     * item recursion
     */
    items?: ITreeItem[];
}
export declare class TreeComponent {
    data: ITreeData;
    emit: any;
    onClick(payload: any): void;
}
