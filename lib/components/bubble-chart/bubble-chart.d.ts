import { AfterContentChecked } from '@angular/core';
/**
 * Interface for BubbleChartComponent's "data"
 *
 * @property containerId (required)
 * @property containerWidth (required)
 * @property containerHeight (required)
 * @property bubblesData (required)
 * @property isForceSimulationEnabled (required)
 * @property classes (optional)
 * @property reset (optional)
*/
import * as ɵngcc0 from '@angular/core';
export interface BubbleChartData {
    /**
     * unique identifier for the bubble-chart
     */
    containerId: string;
    /**
     * total width for the bubble-chart
     */
    width: number;
    /**
     * total height for the bubble-chart
     */
    height: number;
    /**
     * data about the bubbles
     */
    data: BubbleChartDataItem[];
    /**
     * additional css classes
     */
    classes?: string;
    /**
     * list of ID's of selected items
     * (selected items will render with a 'X' icon)
     */
    selected?: string[];
    /**
     * Specify a list of typeOfEntity types (domain),
     * and a list of colors (range), which will be mapped together.
     */
    colorMatch?: {
        domain: string[];
        range: string[];
    };
    /**
     * Define a max and min size for the bubbles
     */
    sizeRange: [number, number];
    /**
     * If defined, transition will be activated
     * and the value will be used as duration
     */
    transition?: number;
    /**
     * If set to false, stops the shuffling of the data
     * before rendering.
     */
    shuffle?: boolean;
    /**
     * Defines the font-family and the font-weight for each text group
     */
    fontRendering?: {
        label?: {
            family?: string;
            weight?: string;
        };
        counter?: {
            family?: string;
            weight?: string;
        };
    };
    /**
     * expose the draw function outside of n7-frontend/components library
     * this is needed to redraw bubble-chart-component on command
     */
    setDraw?: any;
}
/**
 * Interface for D3Chart's "data"
 *
 * @property entity (required)
 * - id (required)
 * - label (optional)
 * - typeOfEntity (optional)
 * @property count (required)
*/
export interface BubbleChartDataItem {
    entity: {
        id: string;
        label?: string;
        typeOfEntity?: string;
    };
    count: number;
}
export declare class BubbleChartComponent implements AfterContentChecked {
    data: BubbleChartData;
    emit: any;
    private d3;
    private _loaded;
    ngAfterContentChecked(): void;
    onClick(payload: any): void;
    draw: () => void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BubbleChartComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<BubbleChartComponent, "n7-bubble-chart", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmQudHMiLCJzb3VyY2VzIjpbImJ1YmJsZS1jaGFydC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgQnViYmxlQ2hhcnRDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgY29udGFpbmVySWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY29udGFpbmVyV2lkdGggKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY29udGFpbmVySGVpZ2h0IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGJ1YmJsZXNEYXRhIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGlzRm9yY2VTaW11bGF0aW9uRW5hYmxlZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHJlc2V0IChvcHRpb25hbClcclxuKi9cclxuZXhwb3J0IGludGVyZmFjZSBCdWJibGVDaGFydERhdGEge1xyXG4gICAgLyoqXHJcbiAgICAgKiB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGJ1YmJsZS1jaGFydFxyXG4gICAgICovXHJcbiAgICBjb250YWluZXJJZDogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiB0b3RhbCB3aWR0aCBmb3IgdGhlIGJ1YmJsZS1jaGFydFxyXG4gICAgICovXHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiB0b3RhbCBoZWlnaHQgZm9yIHRoZSBidWJibGUtY2hhcnRcclxuICAgICAqL1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIGRhdGEgYWJvdXQgdGhlIGJ1YmJsZXNcclxuICAgICAqL1xyXG4gICAgZGF0YTogQnViYmxlQ2hhcnREYXRhSXRlbVtdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGNzcyBjbGFzc2VzXHJcbiAgICAgKi9cclxuICAgIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGxpc3Qgb2YgSUQncyBvZiBzZWxlY3RlZCBpdGVtc1xyXG4gICAgICogKHNlbGVjdGVkIGl0ZW1zIHdpbGwgcmVuZGVyIHdpdGggYSAnWCcgaWNvbilcclxuICAgICAqL1xyXG4gICAgc2VsZWN0ZWQ/OiBzdHJpbmdbXTtcclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmeSBhIGxpc3Qgb2YgdHlwZU9mRW50aXR5IHR5cGVzIChkb21haW4pLFxyXG4gICAgICogYW5kIGEgbGlzdCBvZiBjb2xvcnMgKHJhbmdlKSwgd2hpY2ggd2lsbCBiZSBtYXBwZWQgdG9nZXRoZXIuXHJcbiAgICAgKi9cclxuICAgIGNvbG9yTWF0Y2g/OiB7XHJcbiAgICAgICAgZG9tYWluOiBzdHJpbmdbXTtcclxuICAgICAgICByYW5nZTogc3RyaW5nW107XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmUgYSBtYXggYW5kIG1pbiBzaXplIGZvciB0aGUgYnViYmxlc1xyXG4gICAgICovXHJcbiAgICBzaXplUmFuZ2U6IFtudW1iZXIsIG51bWJlcl07XHJcbiAgICAvKipcclxuICAgICAqIElmIGRlZmluZWQsIHRyYW5zaXRpb24gd2lsbCBiZSBhY3RpdmF0ZWRcclxuICAgICAqIGFuZCB0aGUgdmFsdWUgd2lsbCBiZSB1c2VkIGFzIGR1cmF0aW9uXHJcbiAgICAgKi9cclxuICAgIHRyYW5zaXRpb24/OiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIElmIHNldCB0byBmYWxzZSwgc3RvcHMgdGhlIHNodWZmbGluZyBvZiB0aGUgZGF0YVxyXG4gICAgICogYmVmb3JlIHJlbmRlcmluZy5cclxuICAgICAqL1xyXG4gICAgc2h1ZmZsZT86IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgdGhlIGZvbnQtZmFtaWx5IGFuZCB0aGUgZm9udC13ZWlnaHQgZm9yIGVhY2ggdGV4dCBncm91cFxyXG4gICAgICovXHJcbiAgICBmb250UmVuZGVyaW5nPzoge1xyXG4gICAgICAgIGxhYmVsPzoge1xyXG4gICAgICAgICAgICBmYW1pbHk/OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIHdlaWdodD86IHN0cmluZztcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvdW50ZXI/OiB7XHJcbiAgICAgICAgICAgIGZhbWlseT86IHN0cmluZztcclxuICAgICAgICAgICAgd2VpZ2h0Pzogc3RyaW5nO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBleHBvc2UgdGhlIGRyYXcgZnVuY3Rpb24gb3V0c2lkZSBvZiBuNy1mcm9udGVuZC9jb21wb25lbnRzIGxpYnJhcnlcclxuICAgICAqIHRoaXMgaXMgbmVlZGVkIHRvIHJlZHJhdyBidWJibGUtY2hhcnQtY29tcG9uZW50IG9uIGNvbW1hbmRcclxuICAgICAqL1xyXG4gICAgc2V0RHJhdz86IGFueTtcclxufVxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBEM0NoYXJ0J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGVudGl0eSAocmVxdWlyZWQpXHJcbiAqIC0gaWQgKHJlcXVpcmVkKVxyXG4gKiAtIGxhYmVsIChvcHRpb25hbClcclxuICogLSB0eXBlT2ZFbnRpdHkgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY291bnQgKHJlcXVpcmVkKVxyXG4qL1xyXG5leHBvcnQgaW50ZXJmYWNlIEJ1YmJsZUNoYXJ0RGF0YUl0ZW0ge1xyXG4gICAgZW50aXR5OiB7XHJcbiAgICAgICAgaWQ6IHN0cmluZztcclxuICAgICAgICBsYWJlbD86IHN0cmluZztcclxuICAgICAgICB0eXBlT2ZFbnRpdHk/OiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxufVxyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBCdWJibGVDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xyXG4gICAgZGF0YTogQnViYmxlQ2hhcnREYXRhO1xyXG4gICAgZW1pdDogYW55O1xyXG4gICAgcHJpdmF0ZSBkMztcclxuICAgIHByaXZhdGUgX2xvYWRlZDtcclxuICAgIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkO1xyXG4gICAgb25DbGljayhwYXlsb2FkOiBhbnkpOiB2b2lkO1xyXG4gICAgZHJhdzogKCkgPT4gdm9pZDtcclxufVxyXG4iXX0=