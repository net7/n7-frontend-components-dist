/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// FACET-YEAR-RANGE.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for FacetYearRangeComponent's "data"
 *
 * \@property inDate (required)
 * - text (optional)
 * - classes (optional)
 * - payload (optional)
 * - _meta (optional)
 * \@property outDate (required)
 * - text (optional)
 * - classes (optional)
 * - payload (optional)
 * - _meta (optional)
 * \@property options (required)
 * @record
 */
export function IFacetYearRangeData() { }
if (false) {
    /**
     * beginning year range selection
     * @type {?}
     */
    IFacetYearRangeData.prototype.inDate;
    /**
     * end year range selection
     * @type {?}
     */
    IFacetYearRangeData.prototype.outDate;
}
/**
 * @record
 */
export function IFacetOptions() { }
if (false) {
    /**
     * value of each <option>
     * @type {?}
     */
    IFacetOptions.prototype.value;
}
var FacetYearRangeComponent = /** @class */ (function () {
    function FacetYearRangeComponent() {
    }
    /**
     * @param {?} payload
     * @param {?} selected
     * @return {?}
     */
    FacetYearRangeComponent.prototype.onChange = /**
     * @param {?} payload
     * @param {?} selected
     * @return {?}
     */
    function (payload, selected) {
        switch (payload) {
            case 'in-date':
                // find index of selected option
                /** @type {?} */
                var opts = this.data.inDate.options;
                this.data.inDate._meta = opts.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) { return o.value == selected; })).value;
                /** @type {?} */
                var sliceIndex = opts.findIndex((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) { return o.value == selected; }))
                // make new array of possible years
                ;
                // make new array of possible years
                /** @type {?} */
                var newOptions = opts.slice(sliceIndex, opts.length)
                // give new array to second <select>
                ;
                // give new array to second <select>
                this.data.outDate.options = newOptions;
                // remove placeholder and enable second <select>
                this.data.inDate.placeholder = '';
                this.data.outDate.classes = '';
                this.data.outDate.placeholder = 'choose';
                break;
            case 'out-date':
                this.data.outDate._meta = selected;
                this.data.outDate.placeholder = '';
                // emit selected facet parameters
                this.emit({
                    from: this.data.inDate._meta,
                    to: this.data.outDate._meta,
                });
                break;
            default:
                break;
        }
    };
    FacetYearRangeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-facet-year-range',
                    template: "<div *ngIf=\"data\" class=\"n7-facet-year-range\">\r\n\r\n    <!-- select starting year -->\r\n    <div class=\"n7-facet-year-range__in\">\r\n        <label class=\"n7-facet-year-range__in-label\">\r\n            {{ data.inDate.text }}\r\n        </label>\r\n        <select (change)=\"onChange(data.inDate.payload, $event.target.value)\"\r\n            class=\"n7-facet-year-range__in-select {{ data.inDate.classes || '' }}\">\r\n            <!-- placeholder option -->\r\n            <option *ngIf=\"data.inDate.placeholder.length > 0\" value=\"{{ data.inDate.placeholder }}\" disabled selected>\r\n                {{ data.inDate.placeholder }}\r\n            </option>\r\n            <option *ngFor=\"let opt of data.inDate.options\" value=\"{{ opt.value }}\">\r\n                {{ opt.value }}\r\n            </option>\r\n        </select>\r\n    </div>\r\n\r\n    <!-- select final year -->\r\n    <div class=\"n7-facet-year-range__out\">\r\n        <label class=\"n7-facet-year-range__out-label\">\r\n            {{ data.outDate.text }}\r\n        </label>\r\n        <select (change)=\"onChange(data.outDate.payload, $event.target.value)\"\r\n                class=\"n7-facet-year-range__out-select {{ data.outDate.classes || '' }}\"\r\n                formControlName=\"outDate\">\r\n            <!-- placeholder option -->\r\n            <option *ngIf=\"data.outDate.placeholder.length > 0\" value=\"{{ data.outDate.placeholder }}\" disabled selected>\r\n                {{ data.outDate.placeholder }}\r\n            </option>\r\n            <option *ngFor=\"let opt of data.outDate.options\" value=\"{{ opt.value }}\">\r\n                {{ opt.value }}\r\n            </option>\r\n        </select>\r\n    </div>\r\n</div>"
                }] }
    ];
    FacetYearRangeComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return FacetYearRangeComponent;
}());
export { FacetYearRangeComponent };
if (false) {
    /** @type {?} */
    FacetYearRangeComponent.prototype.data;
    /** @type {?} */
    FacetYearRangeComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQteWVhci1yYW5nZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmFjZXQteWVhci1yYW5nZS9mYWNldC15ZWFyLXJhbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQmpELHlDQXFEQzs7Ozs7O0lBakRDLHFDQXNCRTs7Ozs7SUFJRixzQ0FzQkU7Ozs7O0FBRUosbUNBS0M7Ozs7OztJQURDLDhCQUFXOztBQUdiO0lBQUE7SUFzQ0EsQ0FBQzs7Ozs7O0lBOUJDLDBDQUFROzs7OztJQUFSLFVBQVMsT0FBTyxFQUFFLFFBQVE7UUFDeEIsUUFBUSxPQUFPLEVBQUU7WUFDZixLQUFLLFNBQVM7OztvQkFFUixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTztnQkFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJOzs7O2dCQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssSUFBSSxRQUFRLEVBQW5CLENBQW1CLEVBQUMsQ0FBQyxLQUFLLENBQUE7O29CQUM5RCxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVM7Ozs7Z0JBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxJQUFJLFFBQVEsRUFBbkIsQ0FBbUIsRUFBQztnQkFDekQsbUNBQW1DOzs7O29CQUMvQixVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDcEQsb0NBQW9DOztnQkFBcEMsb0NBQW9DO2dCQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO2dCQUN2QyxnREFBZ0Q7Z0JBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7Z0JBQ3pDLE1BQU07WUFDUixLQUFLLFVBQVU7Z0JBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztnQkFDbkMsaUNBQWlDO2dCQUNqQyxJQUFJLENBQUMsSUFBSSxDQUNQO29CQUNFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO29CQUM1QixFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSztpQkFDNUIsQ0FBQyxDQUFBO2dCQUNKLE1BQU07WUFDUjtnQkFDRSxNQUFNO1NBQ1Q7SUFDSCxDQUFDOztnQkFyQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLGt0REFBc0M7aUJBQ3ZDOzs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLOztJQWdDUiw4QkFBQztDQUFBLEFBdENELElBc0NDO1NBbENZLHVCQUF1Qjs7O0lBQ2xDLHVDQUFtQzs7SUFDbkMsdUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRkFDRVQtWUVBUi1SQU5HRS50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgRmFjZXRZZWFyUmFuZ2VDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgaW5EYXRlIChyZXF1aXJlZClcclxuICogLSB0ZXh0IChvcHRpb25hbClcclxuICogLSBjbGFzc2VzIChvcHRpb25hbClcclxuICogLSBwYXlsb2FkIChvcHRpb25hbClcclxuICogLSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBvdXREYXRlIChyZXF1aXJlZClcclxuICogLSB0ZXh0IChvcHRpb25hbClcclxuICogLSBjbGFzc2VzIChvcHRpb25hbClcclxuICogLSBwYXlsb2FkIChvcHRpb25hbClcclxuICogLSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBvcHRpb25zIChyZXF1aXJlZClcclxuICovXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElGYWNldFllYXJSYW5nZURhdGEge1xyXG4gIC8qKlxyXG4gICAqIGJlZ2lubmluZyB5ZWFyIHJhbmdlIHNlbGVjdGlvblxyXG4gICAqL1xyXG4gIGluRGF0ZToge1xyXG4gICAgLyoqXHJcbiAgICAgKiA8c2VsZWN0PiBoZWFkaW5nXHJcbiAgICAgKi9cclxuICAgIHRleHQ/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICAgKi9cclxuICAgIGNsYXNzZXM/OiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIHBsYWNlaG9sZGVyIG9wdGlvblxyXG4gICAgICovXHJcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogb25DaGFuZ2UgcGF5bG9hZFxyXG4gICAgICovXHJcbiAgICBwYXlsb2FkPzogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGRhdGEgdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcclxuICAgICAqL1xyXG4gICAgX21ldGE/OiBhbnk7XHJcbiAgICBvcHRpb25zOiBJRmFjZXRPcHRpb25zW107XHJcbiAgfTtcclxuICAvKipcclxuICAqIGVuZCB5ZWFyIHJhbmdlIHNlbGVjdGlvblxyXG4gICovXHJcbiAgb3V0RGF0ZToge1xyXG4gICAgLyoqXHJcbiAgICAgKiA8c2VsZWN0PiBoZWFkaW5nXHJcbiAgICAgKi9cclxuICAgIHRleHQ/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICAgKi9cclxuICAgIGNsYXNzZXM/OiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIHBsYWNlaG9sZGVyIG9wdGlvblxyXG4gICAgICovXHJcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogb25DaGFuZ2UgcGF5bG9hZFxyXG4gICAgICovXHJcbiAgICBwYXlsb2FkPzogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGRhdGEgdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcclxuICAgICAqL1xyXG4gICAgX21ldGE/OiBhbnk7XHJcbiAgICBvcHRpb25zOiBJRmFjZXRPcHRpb25zW107XHJcbiAgfTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElGYWNldE9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIHZhbHVlIG9mIGVhY2ggPG9wdGlvbj5cclxuICAgKi9cclxuICB2YWx1ZTogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWZhY2V0LXllYXItcmFuZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mYWNldC15ZWFyLXJhbmdlLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWNldFllYXJSYW5nZUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogSUZhY2V0WWVhclJhbmdlRGF0YTtcclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIG9uQ2hhbmdlKHBheWxvYWQsIHNlbGVjdGVkKSB7XHJcbiAgICBzd2l0Y2ggKHBheWxvYWQpIHtcclxuICAgICAgY2FzZSAnaW4tZGF0ZSc6XHJcbiAgICAgICAgLy8gZmluZCBpbmRleCBvZiBzZWxlY3RlZCBvcHRpb25cclxuICAgICAgICBsZXQgb3B0cyA9IHRoaXMuZGF0YS5pbkRhdGUub3B0aW9uc1xyXG4gICAgICAgIHRoaXMuZGF0YS5pbkRhdGUuX21ldGEgPSBvcHRzLmZpbmQobyA9PiBvLnZhbHVlID09IHNlbGVjdGVkKS52YWx1ZVxyXG4gICAgICAgIGxldCBzbGljZUluZGV4ID0gb3B0cy5maW5kSW5kZXgobyA9PiBvLnZhbHVlID09IHNlbGVjdGVkKVxyXG4gICAgICAgIC8vIG1ha2UgbmV3IGFycmF5IG9mIHBvc3NpYmxlIHllYXJzXHJcbiAgICAgICAgbGV0IG5ld09wdGlvbnMgPSBvcHRzLnNsaWNlKHNsaWNlSW5kZXgsIG9wdHMubGVuZ3RoKVxyXG4gICAgICAgIC8vIGdpdmUgbmV3IGFycmF5IHRvIHNlY29uZCA8c2VsZWN0PlxyXG4gICAgICAgIHRoaXMuZGF0YS5vdXREYXRlLm9wdGlvbnMgPSBuZXdPcHRpb25zO1xyXG4gICAgICAgIC8vIHJlbW92ZSBwbGFjZWhvbGRlciBhbmQgZW5hYmxlIHNlY29uZCA8c2VsZWN0PlxyXG4gICAgICAgIHRoaXMuZGF0YS5pbkRhdGUucGxhY2Vob2xkZXIgPSAnJztcclxuICAgICAgICB0aGlzLmRhdGEub3V0RGF0ZS5jbGFzc2VzID0gJyc7XHJcbiAgICAgICAgdGhpcy5kYXRhLm91dERhdGUucGxhY2Vob2xkZXIgPSAnY2hvb3NlJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnb3V0LWRhdGUnOlxyXG4gICAgICAgIHRoaXMuZGF0YS5vdXREYXRlLl9tZXRhID0gc2VsZWN0ZWQ7XHJcbiAgICAgICAgdGhpcy5kYXRhLm91dERhdGUucGxhY2Vob2xkZXIgPSAnJztcclxuICAgICAgICAvLyBlbWl0IHNlbGVjdGVkIGZhY2V0IHBhcmFtZXRlcnNcclxuICAgICAgICB0aGlzLmVtaXQoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZyb206IHRoaXMuZGF0YS5pbkRhdGUuX21ldGEsXHJcbiAgICAgICAgICAgIHRvOiB0aGlzLmRhdGEub3V0RGF0ZS5fbWV0YSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==