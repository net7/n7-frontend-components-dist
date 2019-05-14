export interface ITitleComponentData {
    label: string;
    value: any;
}
/**
 * TitleComponent <dv-title-component>
 *
 * example:
 * ```html
 * <dv-title-component [data]="{
 *   'label': 'title component label',
 *   'value': 123
 * }"></dv-title-component>
 * ```
 */
export declare class TitleComponent {
    data: ITitleComponentData;
}
