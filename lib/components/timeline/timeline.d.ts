import { AfterContentChecked } from '@angular/core';
import { DataItem, TimelineOptions } from 'vis-timeline';
import * as ɵngcc0 from '@angular/core';
export interface LibOptions extends TimelineOptions {
    /** Specifies how strong the zooming for each scroll tick.
     * Higher zooming friction will slow zooming speed */
    zoomFriction?: number;
}
export interface TimelineData {
    /** ID for the HTML container element */
    containerID: string;
    /** Options for vis-timeline, full reference: https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options */
    libOptions: LibOptions;
    /** Sets the timeline instance to the given parameter */
    _setInstance?: any;
    /** Dadaset in vis-js format, full ref: https://visjs.github.io/vis-timeline/docs/timeline/#Data_Format */
    dataSet: DataItem[];
}
export declare class TimelineComponent implements AfterContentChecked {
    data: TimelineData;
    emit: any;
    /** Knows if the component is loaded */
    private _loaded;
    /** Dynamically load required node modules */
    private loadModules;
    ngAfterContentChecked(): void;
    onClick(payload: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TimelineComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TimelineComponent, "n7-timeline", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZC50cyIsInNvdXJjZXMiOlsidGltZWxpbmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhdGFJdGVtLCBUaW1lbGluZU9wdGlvbnMgfSBmcm9tICd2aXMtdGltZWxpbmUnO1xyXG5leHBvcnQgaW50ZXJmYWNlIExpYk9wdGlvbnMgZXh0ZW5kcyBUaW1lbGluZU9wdGlvbnMge1xyXG4gICAgLyoqIFNwZWNpZmllcyBob3cgc3Ryb25nIHRoZSB6b29taW5nIGZvciBlYWNoIHNjcm9sbCB0aWNrLlxyXG4gICAgICogSGlnaGVyIHpvb21pbmcgZnJpY3Rpb24gd2lsbCBzbG93IHpvb21pbmcgc3BlZWQgKi9cclxuICAgIHpvb21GcmljdGlvbj86IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVsaW5lRGF0YSB7XHJcbiAgICAvKiogSUQgZm9yIHRoZSBIVE1MIGNvbnRhaW5lciBlbGVtZW50ICovXHJcbiAgICBjb250YWluZXJJRDogc3RyaW5nO1xyXG4gICAgLyoqIE9wdGlvbnMgZm9yIHZpcy10aW1lbGluZSwgZnVsbCByZWZlcmVuY2U6IGh0dHBzOi8vdmlzanMuZ2l0aHViLmlvL3Zpcy10aW1lbGluZS9kb2NzL3RpbWVsaW5lLyNDb25maWd1cmF0aW9uX09wdGlvbnMgKi9cclxuICAgIGxpYk9wdGlvbnM6IExpYk9wdGlvbnM7XHJcbiAgICAvKiogU2V0cyB0aGUgdGltZWxpbmUgaW5zdGFuY2UgdG8gdGhlIGdpdmVuIHBhcmFtZXRlciAqL1xyXG4gICAgX3NldEluc3RhbmNlPzogYW55O1xyXG4gICAgLyoqIERhZGFzZXQgaW4gdmlzLWpzIGZvcm1hdCwgZnVsbCByZWY6IGh0dHBzOi8vdmlzanMuZ2l0aHViLmlvL3Zpcy10aW1lbGluZS9kb2NzL3RpbWVsaW5lLyNEYXRhX0Zvcm1hdCAqL1xyXG4gICAgZGF0YVNldDogRGF0YUl0ZW1bXTtcclxufVxyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBUaW1lbGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xyXG4gICAgZGF0YTogVGltZWxpbmVEYXRhO1xyXG4gICAgZW1pdDogYW55O1xyXG4gICAgLyoqIEtub3dzIGlmIHRoZSBjb21wb25lbnQgaXMgbG9hZGVkICovXHJcbiAgICBwcml2YXRlIF9sb2FkZWQ7XHJcbiAgICAvKiogRHluYW1pY2FsbHkgbG9hZCByZXF1aXJlZCBub2RlIG1vZHVsZXMgKi9cclxuICAgIHByaXZhdGUgbG9hZE1vZHVsZXM7XHJcbiAgICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZDtcclxuICAgIG9uQ2xpY2socGF5bG9hZDogYW55KTogdm9pZDtcclxufVxyXG4iXX0=