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
var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
        var _this = this;
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
        function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = [{}];
                        return [4 /*yield*/, import('vis-timeline/peer')];
                    case 1: return [2 /*return*/, (tslib_1.__assign.apply(void 0, _a.concat([_b.sent()])))];
                }
            });
        }); });
    }
    /**
     * @return {?}
     */
    TimelineComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.data || this._loaded)
            return;
        this._loaded = true;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.loadModules().then((/**
             * @param {?} modules
             * @return {?}
             */
            function (modules) {
                // To enable two-way data binding, import { DataSet } from 'vis-data'
                var Timeline = modules.Timeline;
                /** @type {?} */
                var t = new Timeline(document.getElementById(_this.data.containerID), // container
                _this.data.dataSet, _this.data.libOptions);
                _this.data._setInstance(t);
            }));
        }));
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    TimelineComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
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
    return TimelineComponent;
}());
export { TimelineComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RpbWVsaW5lL3RpbWVsaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUF1QixNQUFNLGVBQWUsQ0FBQzs7OztBQUd0RSxnQ0FJQzs7Ozs7OztJQURDLGtDQUFzQjs7Ozs7QUFHeEIsa0NBU0M7Ozs7OztJQVBDLG1DQUFvQjs7Ozs7SUFFcEIsa0NBQXVCOzs7OztJQUV2QixvQ0FBbUI7Ozs7O0lBRW5CLCtCQUFvQjs7QUFHdEI7SUFBQTtRQUFBLGlCQXNDQzs7OztRQTVCUyxZQUFPLEdBQUcsS0FBSyxDQUFDOzs7O1FBR2hCLGdCQUFXOzs7UUFBRzs7Ozs7O3dCQUNqQixxQkFBTSxNQUFNLENBQUMsbUJBQW1CLENBQUMsRUFBQTs0QkFESixzQkFBQSwyQ0FDN0IsU0FBaUMsSUFDcEMsRUFBQTs7O2FBQUEsRUFBQTtJQXVCSixDQUFDOzs7O0lBckJDLGlEQUFxQjs7O0lBQXJCO1FBQUEsaUJBZUM7UUFkQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsVUFBVTs7O1FBQUM7WUFDVCxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSTs7OztZQUFDLFVBQUMsT0FBTzs7Z0JBRXRCLElBQUEsMkJBQVE7O29CQUNWLENBQUMsR0FBRyxJQUFJLFFBQVEsQ0FDcEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFlBQVk7Z0JBQzVELEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUNqQixLQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FDckI7Z0JBQ0QsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsbUNBQU87Ozs7SUFBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQXJDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLDJJQUE4QjtpQkFDL0I7Ozt1QkFFRSxLQUFLO3VCQUVMLEtBQUs7O0lBK0JSLHdCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0FsQ1ksaUJBQWlCOzs7SUFDNUIsaUNBQTRCOztJQUU1QixpQ0FBbUI7Ozs7OztJQUduQixvQ0FBd0I7Ozs7OztJQUd4Qix3Q0FFRSIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUSU1FTElORS50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YUl0ZW0sIFRpbWVsaW5lT3B0aW9ucyB9IGZyb20gJ3Zpcy10aW1lbGluZSc7IC8vIHR5cGUgaW50ZXJmYWNlc1xuXG5leHBvcnQgaW50ZXJmYWNlIExpYk9wdGlvbnMgZXh0ZW5kcyBUaW1lbGluZU9wdGlvbnMge1xuICAvKiogU3BlY2lmaWVzIGhvdyBzdHJvbmcgdGhlIHpvb21pbmcgZm9yIGVhY2ggc2Nyb2xsIHRpY2suXG4gICAqIEhpZ2hlciB6b29taW5nIGZyaWN0aW9uIHdpbGwgc2xvdyB6b29taW5nIHNwZWVkICovXG4gIHpvb21GcmljdGlvbj86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaW1lbGluZURhdGEge1xuICAvKiogSUQgZm9yIHRoZSBIVE1MIGNvbnRhaW5lciBlbGVtZW50ICovXG4gIGNvbnRhaW5lcklEOiBzdHJpbmc7XG4gIC8qKiBPcHRpb25zIGZvciB2aXMtdGltZWxpbmUsIGZ1bGwgcmVmZXJlbmNlOiBodHRwczovL3Zpc2pzLmdpdGh1Yi5pby92aXMtdGltZWxpbmUvZG9jcy90aW1lbGluZS8jQ29uZmlndXJhdGlvbl9PcHRpb25zICovXG4gIGxpYk9wdGlvbnM6IExpYk9wdGlvbnM7XG4gIC8qKiBTZXRzIHRoZSB0aW1lbGluZSBpbnN0YW5jZSB0byB0aGUgZ2l2ZW4gcGFyYW1ldGVyICovXG4gIF9zZXRJbnN0YW5jZT86IGFueTtcbiAgLyoqIERhZGFzZXQgaW4gdmlzLWpzIGZvcm1hdCwgZnVsbCByZWY6IGh0dHBzOi8vdmlzanMuZ2l0aHViLmlvL3Zpcy10aW1lbGluZS9kb2NzL3RpbWVsaW5lLyNEYXRhX0Zvcm1hdCAqL1xuICBkYXRhU2V0OiBEYXRhSXRlbVtdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy10aW1lbGluZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lbGluZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUaW1lbGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuICBASW5wdXQoKSBkYXRhOiBUaW1lbGluZURhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIC8qKiBLbm93cyBpZiB0aGUgY29tcG9uZW50IGlzIGxvYWRlZCAqL1xuICBwcml2YXRlIF9sb2FkZWQgPSBmYWxzZTtcblxuICAvKiogRHluYW1pY2FsbHkgbG9hZCByZXF1aXJlZCBub2RlIG1vZHVsZXMgKi9cbiAgcHJpdmF0ZSBsb2FkTW9kdWxlcyA9IGFzeW5jICgpID0+ICh7XG4gICAgLi4uYXdhaXQgaW1wb3J0KCd2aXMtdGltZWxpbmUvcGVlcicpLFxuICB9KVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICBpZiAoIXRoaXMuZGF0YSB8fCB0aGlzLl9sb2FkZWQpIHJldHVybjtcbiAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkTW9kdWxlcygpLnRoZW4oKG1vZHVsZXMpID0+IHtcbiAgICAgICAgLy8gVG8gZW5hYmxlIHR3by13YXkgZGF0YSBiaW5kaW5nLCBpbXBvcnQgeyBEYXRhU2V0IH0gZnJvbSAndmlzLWRhdGEnXG4gICAgICAgIGNvbnN0IHsgVGltZWxpbmUgfSA9IG1vZHVsZXM7XG4gICAgICAgIGNvbnN0IHQgPSBuZXcgVGltZWxpbmUoXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kYXRhLmNvbnRhaW5lcklEKSwgLy8gY29udGFpbmVyXG4gICAgICAgICAgdGhpcy5kYXRhLmRhdGFTZXQsXG4gICAgICAgICAgdGhpcy5kYXRhLmxpYk9wdGlvbnNcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5kYXRhLl9zZXRJbnN0YW5jZSh0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgb25DbGljayhwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cbn1cbiJdfQ==