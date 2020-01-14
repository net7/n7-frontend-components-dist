/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "<div *ngIf=\"data\" class=\"n7-facet-year-range\">\n\n    <!-- Select starting year -->\n    <div class=\"n7-facet-year-range__in\">\n        <label class=\"n7-facet-year-range__in-label\">\n            {{ data.inDate.text }}\n        </label>\n        <select (change)=\"onChange(data.inDate.payload, $event.target.value)\"\n            class=\"n7-facet-year-range__in-select {{ data.inDate.classes || '' }}\">\n            <!-- Placeholder option -->\n            <option *ngIf=\"data.inDate.placeholder.length > 0\" value=\"{{ data.inDate.placeholder }}\" disabled selected>\n                {{ data.inDate.placeholder }}\n            </option>\n            <option *ngFor=\"let opt of data.inDate.options\" value=\"{{ opt.value }}\">\n                {{ opt.value }}\n            </option>\n        </select>\n    </div>\n\n    <!-- Select final year -->\n    <div class=\"n7-facet-year-range__out\">\n        <label class=\"n7-facet-year-range__out-label\">\n            {{ data.outDate.text }}\n        </label>\n        <select (change)=\"onChange(data.outDate.payload, $event.target.value)\"\n                class=\"n7-facet-year-range__out-select {{ data.outDate.classes || '' }}\"\n                formControlName=\"outDate\">\n            <!-- Placeholder option -->\n            <option *ngIf=\"data.outDate.placeholder.length > 0\" value=\"{{ data.outDate.placeholder }}\" disabled selected>\n                {{ data.outDate.placeholder }}\n            </option>\n            <option *ngFor=\"let opt of data.outDate.options\" value=\"{{ opt.value }}\">\n                {{ opt.value }}\n            </option>\n        </select>\n    </div>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQteWVhci1yYW5nZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmFjZXQteWVhci1yYW5nZS9mYWNldC15ZWFyLXJhbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQmpELHlDQXFEQzs7Ozs7O0lBakRDLHFDQXNCRTs7Ozs7SUFJRixzQ0FzQkU7Ozs7O0FBRUosbUNBS0M7Ozs7OztJQURDLDhCQUFXOztBQUdiO0lBQUE7SUF3Q0EsQ0FBQzs7Ozs7O0lBaENDLDBDQUFROzs7OztJQUFSLFVBQVMsT0FBTyxFQUFFLFFBQVE7UUFDeEIsUUFBUSxPQUFPLEVBQUU7WUFDZixLQUFLLFNBQVM7OztvQkFFUixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTztnQkFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJOzs7O2dCQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssSUFBSSxRQUFRLEVBQW5CLENBQW1CLEVBQUMsQ0FBQyxLQUFLLENBQUE7O29CQUM5RCxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVM7Ozs7Z0JBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxJQUFJLFFBQVEsRUFBbkIsQ0FBbUIsRUFBQztnQkFDekQsbUNBQW1DOzs7O29CQUMvQixVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDcEQsb0NBQW9DOztnQkFBcEMsb0NBQW9DO2dCQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO2dCQUN2QyxnREFBZ0Q7Z0JBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7Z0JBQ3pDLE1BQU07WUFDUixLQUFLLFVBQVU7Z0JBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztnQkFDbkMsaUNBQWlDO2dCQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFFLFFBQVEsRUFBRTtvQkFDakIsT0FBTyxTQUFBO29CQUNQLEtBQUssRUFBRTt3QkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSzt3QkFDNUIsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUs7cUJBQzVCO2lCQUNGLENBQUMsQ0FBQTtnQkFDSixNQUFNO1lBQ1I7Z0JBQ0UsTUFBTTtTQUNUO0lBQ0gsQ0FBQzs7Z0JBdkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQiwwb0RBQXNDO2lCQUN2Qzs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUFrQ1IsOEJBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQXBDWSx1QkFBdUI7OztJQUNsQyx1Q0FBbUM7O0lBQ25DLHVDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGQUNFVC1ZRUFSLVJBTkdFLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBGYWNldFllYXJSYW5nZUNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGluRGF0ZSAocmVxdWlyZWQpXG4gKiAtIHRleHQgKG9wdGlvbmFsKVxuICogLSBjbGFzc2VzIChvcHRpb25hbClcbiAqIC0gcGF5bG9hZCAocmVxdWlyZWQpXG4gKiAtIF9tZXRhIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBvdXREYXRlIChyZXF1aXJlZClcbiAqIC0gdGV4dCAob3B0aW9uYWwpXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxuICogLSBwYXlsb2FkIChyZXF1aXJlZClcbiAqIC0gX21ldGEgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IG9wdGlvbnMgKHJlcXVpcmVkKVxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZhY2V0WWVhclJhbmdlRGF0YSB7XG4gIC8qKlxuICAgKiBiZWdpbm5pbmcgeWVhciByYW5nZSBzZWxlY3Rpb25cbiAgICovXG4gIGluRGF0ZToge1xuICAgIC8qKlxuICAgICAqIDxzZWxlY3Q+IGhlYWRpbmdcbiAgICAgKi9cbiAgICB0ZXh0Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAgICovXG4gICAgY2xhc3Nlcz86IGFueTtcbiAgICAvKipcbiAgICAgKiBwbGFjZWhvbGRlciBvcHRpb25cbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBvbkNoYW5nZSBwYXlsb2FkXG4gICAgICovXG4gICAgcGF5bG9hZDogYW55O1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgZGF0YSB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xuICAgICAqL1xuICAgIF9tZXRhPzogYW55O1xuICAgIG9wdGlvbnM6IElGYWNldE9wdGlvbnNbXTtcbiAgfTtcbiAgLyoqXG4gICogZW5kIHllYXIgcmFuZ2Ugc2VsZWN0aW9uXG4gICovXG4gIG91dERhdGU6IHtcbiAgICAvKipcbiAgICAgKiA8c2VsZWN0PiBoZWFkaW5nXG4gICAgICovXG4gICAgdGV4dD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgICAqL1xuICAgIGNsYXNzZXM/OiBhbnk7XG4gICAgLyoqXG4gICAgICogcGxhY2Vob2xkZXIgb3B0aW9uXG4gICAgICovXG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogb25DaGFuZ2UgcGF5bG9hZFxuICAgICAqL1xuICAgIHBheWxvYWQ6IGFueTtcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGRhdGEgdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICAgKi9cbiAgICBfbWV0YT86IGFueTtcbiAgICBvcHRpb25zOiBJRmFjZXRPcHRpb25zW107XG4gIH07XG59XG5leHBvcnQgaW50ZXJmYWNlIElGYWNldE9wdGlvbnMge1xuICAvKipcbiAgICogdmFsdWUgb2YgZWFjaCA8b3B0aW9uPlxuICAgKi9cbiAgdmFsdWU6IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctZmFjZXQteWVhci1yYW5nZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9mYWNldC15ZWFyLXJhbmdlLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEZhY2V0WWVhclJhbmdlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogSUZhY2V0WWVhclJhbmdlRGF0YTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2hhbmdlKHBheWxvYWQsIHNlbGVjdGVkKSB7XG4gICAgc3dpdGNoIChwYXlsb2FkKSB7XG4gICAgICBjYXNlICdpbi1kYXRlJzpcbiAgICAgICAgLy8gZmluZCBpbmRleCBvZiBzZWxlY3RlZCBvcHRpb25cbiAgICAgICAgbGV0IG9wdHMgPSB0aGlzLmRhdGEuaW5EYXRlLm9wdGlvbnNcbiAgICAgICAgdGhpcy5kYXRhLmluRGF0ZS5fbWV0YSA9IG9wdHMuZmluZChvID0+IG8udmFsdWUgPT0gc2VsZWN0ZWQpLnZhbHVlXG4gICAgICAgIGxldCBzbGljZUluZGV4ID0gb3B0cy5maW5kSW5kZXgobyA9PiBvLnZhbHVlID09IHNlbGVjdGVkKVxuICAgICAgICAvLyBtYWtlIG5ldyBhcnJheSBvZiBwb3NzaWJsZSB5ZWFyc1xuICAgICAgICBsZXQgbmV3T3B0aW9ucyA9IG9wdHMuc2xpY2Uoc2xpY2VJbmRleCwgb3B0cy5sZW5ndGgpXG4gICAgICAgIC8vIGdpdmUgbmV3IGFycmF5IHRvIHNlY29uZCA8c2VsZWN0PlxuICAgICAgICB0aGlzLmRhdGEub3V0RGF0ZS5vcHRpb25zID0gbmV3T3B0aW9ucztcbiAgICAgICAgLy8gcmVtb3ZlIHBsYWNlaG9sZGVyIGFuZCBlbmFibGUgc2Vjb25kIDxzZWxlY3Q+XG4gICAgICAgIHRoaXMuZGF0YS5pbkRhdGUucGxhY2Vob2xkZXIgPSAnJztcbiAgICAgICAgdGhpcy5kYXRhLm91dERhdGUuY2xhc3NlcyA9ICcnO1xuICAgICAgICB0aGlzLmRhdGEub3V0RGF0ZS5wbGFjZWhvbGRlciA9ICdjaG9vc2UnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ291dC1kYXRlJzpcbiAgICAgICAgdGhpcy5kYXRhLm91dERhdGUuX21ldGEgPSBzZWxlY3RlZDtcbiAgICAgICAgdGhpcy5kYXRhLm91dERhdGUucGxhY2Vob2xkZXIgPSAnJztcbiAgICAgICAgLy8gZW1pdCBzZWxlY3RlZCBmYWNldCBwYXJhbWV0ZXJzXG4gICAgICAgIHRoaXMuZW1pdCggJ2NoYW5nZScsIHtcbiAgICAgICAgICAgIHBheWxvYWQsXG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICBmcm9tOiB0aGlzLmRhdGEuaW5EYXRlLl9tZXRhLFxuICAgICAgICAgICAgICB0bzogdGhpcy5kYXRhLm91dERhdGUuX21ldGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIl19