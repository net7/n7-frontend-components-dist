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
 * - payload (required)
 * - _meta (optional)
 * \@property outDate (required)
 * - text (optional)
 * - classes (optional)
 * - payload (required)
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
                this.emit('change', {
                    payload: payload,
                    value: {
                        from: this.data.inDate._meta,
                        to: this.data.outDate._meta
                    }
                });
                break;
            default:
                break;
        }
    };
    FacetYearRangeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-facet-year-range',
                    template: "<div *ngIf=\"data\" class=\"n7-facet-year-range\">\r\n\r\n    <!-- Select starting year -->\r\n    <div class=\"n7-facet-year-range__in\">\r\n        <label class=\"n7-facet-year-range__in-label\">\r\n            {{ data.inDate.text }}\r\n        </label>\r\n        <select (change)=\"onChange(data.inDate.payload, $event.target.value)\"\r\n            class=\"n7-facet-year-range__in-select {{ data.inDate.classes || '' }}\">\r\n            <!-- Placeholder option -->\r\n            <option *ngIf=\"data.inDate.placeholder.length > 0\" value=\"{{ data.inDate.placeholder }}\" disabled selected>\r\n                {{ data.inDate.placeholder }}\r\n            </option>\r\n            <option *ngFor=\"let opt of data.inDate.options\" value=\"{{ opt.value }}\">\r\n                {{ opt.value }}\r\n            </option>\r\n        </select>\r\n    </div>\r\n\r\n    <!-- Select final year -->\r\n    <div class=\"n7-facet-year-range__out\">\r\n        <label class=\"n7-facet-year-range__out-label\">\r\n            {{ data.outDate.text }}\r\n        </label>\r\n        <select (change)=\"onChange(data.outDate.payload, $event.target.value)\"\r\n                class=\"n7-facet-year-range__out-select {{ data.outDate.classes || '' }}\"\r\n                formControlName=\"outDate\">\r\n            <!-- Placeholder option -->\r\n            <option *ngIf=\"data.outDate.placeholder.length > 0\" value=\"{{ data.outDate.placeholder }}\" disabled selected>\r\n                {{ data.outDate.placeholder }}\r\n            </option>\r\n            <option *ngFor=\"let opt of data.outDate.options\" value=\"{{ opt.value }}\">\r\n                {{ opt.value }}\r\n            </option>\r\n        </select>\r\n    </div>\r\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQteWVhci1yYW5nZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmFjZXQteWVhci1yYW5nZS9mYWNldC15ZWFyLXJhbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQmpELHlDQXFEQzs7Ozs7O0lBakRDLHFDQXNCRTs7Ozs7SUFJRixzQ0FzQkU7Ozs7O0FBRUosbUNBS0M7Ozs7OztJQURDLDhCQUFXOztBQUdiO0lBQUE7SUF3Q0EsQ0FBQzs7Ozs7O0lBaENDLDBDQUFROzs7OztJQUFSLFVBQVMsT0FBTyxFQUFFLFFBQVE7UUFDeEIsUUFBUSxPQUFPLEVBQUU7WUFDZixLQUFLLFNBQVM7OztvQkFFUixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTztnQkFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJOzs7O2dCQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssSUFBSSxRQUFRLEVBQW5CLENBQW1CLEVBQUMsQ0FBQyxLQUFLLENBQUE7O29CQUM5RCxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVM7Ozs7Z0JBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxJQUFJLFFBQVEsRUFBbkIsQ0FBbUIsRUFBQztnQkFDekQsbUNBQW1DOzs7O29CQUMvQixVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDcEQsb0NBQW9DOztnQkFBcEMsb0NBQW9DO2dCQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO2dCQUN2QyxnREFBZ0Q7Z0JBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7Z0JBQ3pDLE1BQU07WUFDUixLQUFLLFVBQVU7Z0JBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztnQkFDbkMsaUNBQWlDO2dCQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFFLFFBQVEsRUFBRTtvQkFDakIsT0FBTyxTQUFBO29CQUNQLEtBQUssRUFBRTt3QkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSzt3QkFDNUIsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUs7cUJBQzVCO2lCQUNGLENBQUMsQ0FBQTtnQkFDSixNQUFNO1lBQ1I7Z0JBQ0UsTUFBTTtTQUNUO0lBQ0gsQ0FBQzs7Z0JBdkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixrdERBQXNDO2lCQUN2Qzs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUFrQ1IsOEJBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQXBDWSx1QkFBdUI7OztJQUNsQyx1Q0FBbUM7O0lBQ25DLHVDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEZBQ0VULVlFQVItUkFOR0UudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEZhY2V0WWVhclJhbmdlQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGluRGF0ZSAocmVxdWlyZWQpXHJcbiAqIC0gdGV4dCAob3B0aW9uYWwpXHJcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIC0gcGF5bG9hZCAocmVxdWlyZWQpXHJcbiAqIC0gX21ldGEgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgb3V0RGF0ZSAocmVxdWlyZWQpXHJcbiAqIC0gdGV4dCAob3B0aW9uYWwpXHJcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIC0gcGF5bG9hZCAocmVxdWlyZWQpXHJcbiAqIC0gX21ldGEgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgb3B0aW9ucyAocmVxdWlyZWQpXHJcbiAqL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRmFjZXRZZWFyUmFuZ2VEYXRhIHtcclxuICAvKipcclxuICAgKiBiZWdpbm5pbmcgeWVhciByYW5nZSBzZWxlY3Rpb25cclxuICAgKi9cclxuICBpbkRhdGU6IHtcclxuICAgIC8qKlxyXG4gICAgICogPHNlbGVjdD4gaGVhZGluZ1xyXG4gICAgICovXHJcbiAgICB0ZXh0Pzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAgICovXHJcbiAgICBjbGFzc2VzPzogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBwbGFjZWhvbGRlciBvcHRpb25cclxuICAgICAqL1xyXG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIG9uQ2hhbmdlIHBheWxvYWRcclxuICAgICAqL1xyXG4gICAgcGF5bG9hZDogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGRhdGEgdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcclxuICAgICAqL1xyXG4gICAgX21ldGE/OiBhbnk7XHJcbiAgICBvcHRpb25zOiBJRmFjZXRPcHRpb25zW107XHJcbiAgfTtcclxuICAvKipcclxuICAqIGVuZCB5ZWFyIHJhbmdlIHNlbGVjdGlvblxyXG4gICovXHJcbiAgb3V0RGF0ZToge1xyXG4gICAgLyoqXHJcbiAgICAgKiA8c2VsZWN0PiBoZWFkaW5nXHJcbiAgICAgKi9cclxuICAgIHRleHQ/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICAgKi9cclxuICAgIGNsYXNzZXM/OiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIHBsYWNlaG9sZGVyIG9wdGlvblxyXG4gICAgICovXHJcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogb25DaGFuZ2UgcGF5bG9hZFxyXG4gICAgICovXHJcbiAgICBwYXlsb2FkOiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgZGF0YSB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xyXG4gICAgICovXHJcbiAgICBfbWV0YT86IGFueTtcclxuICAgIG9wdGlvbnM6IElGYWNldE9wdGlvbnNbXTtcclxuICB9O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZhY2V0T3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogdmFsdWUgb2YgZWFjaCA8b3B0aW9uPlxyXG4gICAqL1xyXG4gIHZhbHVlOiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctZmFjZXQteWVhci1yYW5nZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ZhY2V0LXllYXItcmFuZ2UuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhY2V0WWVhclJhbmdlQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBJRmFjZXRZZWFyUmFuZ2VEYXRhO1xyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgb25DaGFuZ2UocGF5bG9hZCwgc2VsZWN0ZWQpIHtcclxuICAgIHN3aXRjaCAocGF5bG9hZCkge1xyXG4gICAgICBjYXNlICdpbi1kYXRlJzpcclxuICAgICAgICAvLyBmaW5kIGluZGV4IG9mIHNlbGVjdGVkIG9wdGlvblxyXG4gICAgICAgIGxldCBvcHRzID0gdGhpcy5kYXRhLmluRGF0ZS5vcHRpb25zXHJcbiAgICAgICAgdGhpcy5kYXRhLmluRGF0ZS5fbWV0YSA9IG9wdHMuZmluZChvID0+IG8udmFsdWUgPT0gc2VsZWN0ZWQpLnZhbHVlXHJcbiAgICAgICAgbGV0IHNsaWNlSW5kZXggPSBvcHRzLmZpbmRJbmRleChvID0+IG8udmFsdWUgPT0gc2VsZWN0ZWQpXHJcbiAgICAgICAgLy8gbWFrZSBuZXcgYXJyYXkgb2YgcG9zc2libGUgeWVhcnNcclxuICAgICAgICBsZXQgbmV3T3B0aW9ucyA9IG9wdHMuc2xpY2Uoc2xpY2VJbmRleCwgb3B0cy5sZW5ndGgpXHJcbiAgICAgICAgLy8gZ2l2ZSBuZXcgYXJyYXkgdG8gc2Vjb25kIDxzZWxlY3Q+XHJcbiAgICAgICAgdGhpcy5kYXRhLm91dERhdGUub3B0aW9ucyA9IG5ld09wdGlvbnM7XHJcbiAgICAgICAgLy8gcmVtb3ZlIHBsYWNlaG9sZGVyIGFuZCBlbmFibGUgc2Vjb25kIDxzZWxlY3Q+XHJcbiAgICAgICAgdGhpcy5kYXRhLmluRGF0ZS5wbGFjZWhvbGRlciA9ICcnO1xyXG4gICAgICAgIHRoaXMuZGF0YS5vdXREYXRlLmNsYXNzZXMgPSAnJztcclxuICAgICAgICB0aGlzLmRhdGEub3V0RGF0ZS5wbGFjZWhvbGRlciA9ICdjaG9vc2UnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdvdXQtZGF0ZSc6XHJcbiAgICAgICAgdGhpcy5kYXRhLm91dERhdGUuX21ldGEgPSBzZWxlY3RlZDtcclxuICAgICAgICB0aGlzLmRhdGEub3V0RGF0ZS5wbGFjZWhvbGRlciA9ICcnO1xyXG4gICAgICAgIC8vIGVtaXQgc2VsZWN0ZWQgZmFjZXQgcGFyYW1ldGVyc1xyXG4gICAgICAgIHRoaXMuZW1pdCggJ2NoYW5nZScsIHtcclxuICAgICAgICAgICAgcGF5bG9hZCxcclxuICAgICAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgICBmcm9tOiB0aGlzLmRhdGEuaW5EYXRlLl9tZXRhLFxyXG4gICAgICAgICAgICAgIHRvOiB0aGlzLmRhdGEub3V0RGF0ZS5fbWV0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=