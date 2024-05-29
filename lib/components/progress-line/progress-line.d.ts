import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressLineComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressLineComponent, "n7-progress-line", never, { "data": { "alias": "data"; "required": false; }; "emit": { "alias": "emit"; "required": false; }; }, {}, never, never, false, never>;
}
