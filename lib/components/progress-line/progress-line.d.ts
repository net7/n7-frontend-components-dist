/**
 * Interface for ProgressLineComponent's "data"
 *
 * @property label (required)
 * @property value (required)
 */
export interface ProgressLineData {
    /**
     * text visualized on the left side
     */
    label: string;
    /**
     * value that has percentage for bar
     */
    value: number;
}
export declare class ProgressLineComponent {
    data: ProgressLineData;
    emit: any;
}
