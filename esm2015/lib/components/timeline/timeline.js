/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/timeline/timeline.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
//---------------------------
// TIMELINE.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * @record
 */
export function LibOptions() { }
if (false) {
    /**
     * Specifies how strong the zooming for each scroll tick.
     * Higher zooming friction will slow zooming speed
     * @type {?|undefined}
     */
    LibOptions.prototype.zoomFriction;
}
/**
 * @record
 */
export function TimelineData() { }
if (false) {
    /**
     * ID for the HTML container element
     * @type {?}
     */
    TimelineData.prototype.containerID;
    /**
     * Options for vis-timeline, full reference: https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
     * @type {?}
     */
    TimelineData.prototype.libOptions;
    /**
     * Sets the timeline instance to the given parameter
     * @type {?|undefined}
     */
    TimelineData.prototype._setInstance;
    /**
     * Dadaset in vis-js format, full ref: https://visjs.github.io/vis-timeline/docs/timeline/#Data_Format
     * @type {?}
     */
    TimelineData.prototype.dataSet;
}
export class TimelineComponent {
    constructor() {
        /**
         * Knows if the component is loaded
         */
        this._loaded = false;
        /**
         * Dynamically load required node modules
         */
        this.loadModules = (/**
         * @return {?}
         */
        () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return (Object.assign({}, yield import('vis-timeline/peer')));
        }));
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        if (!this.data || this._loaded)
            return;
        this._loaded = true;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.loadModules().then((/**
             * @param {?} modules
             * @return {?}
             */
            (modules) => {
                // To enable two-way data binding, import { DataSet } from 'vis-data'
                const { Timeline } = modules;
                /** @type {?} */
                const t = new Timeline(document.getElementById(this.data.containerID), // container
                this.data.dataSet, this.data.libOptions);
                this.data._setInstance(t);
            }));
        }));
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
}
TimelineComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-timeline',
                template: "<div *ngIf=\"data\" class=\"n7-timeline\">\n  <div [id]=\"data.containerID\" style=\"border: 1px solid #ddd\"></div> \n</div>\n"
            }] }
];
TimelineComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TimelineComponent.prototype.data;
    /** @type {?} */
    TimelineComponent.prototype.emit;
    /**
     * Knows if the component is loaded
     * @type {?}
     * @private
     */
    TimelineComponent.prototype._loaded;
    /**
     * Dynamically load required node modules
     * @type {?}
     * @private
     */
    TimelineComponent.prototype.loadModules;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RpbWVsaW5lL3RpbWVsaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUF1QixNQUFNLGVBQWUsQ0FBQzs7OztBQUd0RSxnQ0FJQzs7Ozs7OztJQURDLGtDQUFzQjs7Ozs7QUFHeEIsa0NBU0M7Ozs7OztJQVBDLG1DQUFvQjs7Ozs7SUFFcEIsa0NBQXVCOzs7OztJQUV2QixvQ0FBbUI7Ozs7O0lBRW5CLCtCQUFvQjs7QUFPdEIsTUFBTSxPQUFPLGlCQUFpQjtJQUo5Qjs7OztRQVVVLFlBQU8sR0FBRyxLQUFLLENBQUM7Ozs7UUFHaEIsZ0JBQVc7OztRQUFHLEdBQVMsRUFBRTtZQUFDLE9BQUEsbUJBQzdCLE1BQU0sTUFBTSxDQUFDLG1CQUFtQixDQUFDLEVBQ3BDLENBQUE7VUFBQSxFQUFBO0lBdUJKLENBQUM7Ozs7SUFyQkMscUJBQXFCO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSTs7OztZQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7O3NCQUU1QixFQUFFLFFBQVEsRUFBRSxHQUFHLE9BQU87O3NCQUN0QixDQUFDLEdBQUcsSUFBSSxRQUFRLENBQ3BCLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxZQUFZO2dCQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQ3JCO2dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUFyQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QiwySUFBOEI7YUFDL0I7OzttQkFFRSxLQUFLO21CQUVMLEtBQUs7Ozs7SUFGTixpQ0FBNEI7O0lBRTVCLGlDQUFtQjs7Ozs7O0lBR25CLG9DQUF3Qjs7Ozs7O0lBR3hCLHdDQUVFIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRJTUVMSU5FLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlckNvbnRlbnRDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhSXRlbSwgVGltZWxpbmVPcHRpb25zIH0gZnJvbSAndmlzLXRpbWVsaW5lJzsgLy8gdHlwZSBpbnRlcmZhY2VzXG5cbmV4cG9ydCBpbnRlcmZhY2UgTGliT3B0aW9ucyBleHRlbmRzIFRpbWVsaW5lT3B0aW9ucyB7XG4gIC8qKiBTcGVjaWZpZXMgaG93IHN0cm9uZyB0aGUgem9vbWluZyBmb3IgZWFjaCBzY3JvbGwgdGljay5cbiAgICogSGlnaGVyIHpvb21pbmcgZnJpY3Rpb24gd2lsbCBzbG93IHpvb21pbmcgc3BlZWQgKi9cbiAgem9vbUZyaWN0aW9uPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVsaW5lRGF0YSB7XG4gIC8qKiBJRCBmb3IgdGhlIEhUTUwgY29udGFpbmVyIGVsZW1lbnQgKi9cbiAgY29udGFpbmVySUQ6IHN0cmluZztcbiAgLyoqIE9wdGlvbnMgZm9yIHZpcy10aW1lbGluZSwgZnVsbCByZWZlcmVuY2U6IGh0dHBzOi8vdmlzanMuZ2l0aHViLmlvL3Zpcy10aW1lbGluZS9kb2NzL3RpbWVsaW5lLyNDb25maWd1cmF0aW9uX09wdGlvbnMgKi9cbiAgbGliT3B0aW9uczogTGliT3B0aW9ucztcbiAgLyoqIFNldHMgdGhlIHRpbWVsaW5lIGluc3RhbmNlIHRvIHRoZSBnaXZlbiBwYXJhbWV0ZXIgKi9cbiAgX3NldEluc3RhbmNlPzogYW55O1xuICAvKiogRGFkYXNldCBpbiB2aXMtanMgZm9ybWF0LCBmdWxsIHJlZjogaHR0cHM6Ly92aXNqcy5naXRodWIuaW8vdmlzLXRpbWVsaW5lL2RvY3MvdGltZWxpbmUvI0RhdGFfRm9ybWF0ICovXG4gIGRhdGFTZXQ6IERhdGFJdGVtW107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LXRpbWVsaW5lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWVsaW5lLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVsaW5lQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG4gIEBJbnB1dCgpIGRhdGE6IFRpbWVsaW5lRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgLyoqIEtub3dzIGlmIHRoZSBjb21wb25lbnQgaXMgbG9hZGVkICovXG4gIHByaXZhdGUgX2xvYWRlZCA9IGZhbHNlO1xuXG4gIC8qKiBEeW5hbWljYWxseSBsb2FkIHJlcXVpcmVkIG5vZGUgbW9kdWxlcyAqL1xuICBwcml2YXRlIGxvYWRNb2R1bGVzID0gYXN5bmMgKCkgPT4gKHtcbiAgICAuLi5hd2FpdCBpbXBvcnQoJ3Zpcy10aW1lbGluZS9wZWVyJyksXG4gIH0pXG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgIGlmICghdGhpcy5kYXRhIHx8IHRoaXMuX2xvYWRlZCkgcmV0dXJuO1xuICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRNb2R1bGVzKCkudGhlbigobW9kdWxlcykgPT4ge1xuICAgICAgICAvLyBUbyBlbmFibGUgdHdvLXdheSBkYXRhIGJpbmRpbmcsIGltcG9ydCB7IERhdGFTZXQgfSBmcm9tICd2aXMtZGF0YSdcbiAgICAgICAgY29uc3QgeyBUaW1lbGluZSB9ID0gbW9kdWxlcztcbiAgICAgICAgY29uc3QgdCA9IG5ldyBUaW1lbGluZShcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRhdGEuY29udGFpbmVySUQpLCAvLyBjb250YWluZXJcbiAgICAgICAgICB0aGlzLmRhdGEuZGF0YVNldCxcbiAgICAgICAgICB0aGlzLmRhdGEubGliT3B0aW9uc1xuICAgICAgICApO1xuICAgICAgICB0aGlzLmRhdGEuX3NldEluc3RhbmNlKHQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxufVxuIl19