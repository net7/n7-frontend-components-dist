/**
 * Interface for TagComponent's "data"
 *
 * @property text (required)
 * @property label (optional)
 * @property icon (optional)
 * @property classes (optional)
 * @property payload (optional)
 * @property _meta (optional)
 *
 */
export interface ITagData {
    /**
     * tag's label
     */
    label?: string;
    /**
     * text visualized on the tag
     */
    text: string;
    /**
     * action icon (on right side)
     */
    icon?: string;
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
 * TagComponent <n7-tag>
 *
 * @example
 * ```html
 *
 * <n7-tag [data]="{
 *        label: 'label: ',
 *        text: 'text',
 *        icon: 'x',
 *        payload: 'tag-payload',
 *        classes: 'tag1-class'
 *    }">
 * </n7-tag>
 * ```
 */
export declare class TagComponent {
    data: ITagData;
    emit: any;
    onClick(payload: any): void;
}
