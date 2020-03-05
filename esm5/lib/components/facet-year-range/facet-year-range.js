/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/facet-year-range/facet-year-range.ts
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
export function FacetYearRangeData() { }
if (false) {
    /**
     * beginning year range selection
     * @type {?}
     */
    FacetYearRangeData.prototype.inDate;
    /**
     * end year range selection
     * @type {?}
     */
    FacetYearRangeData.prototype.outDate;
}
/**
 * @record
 */
export function FacetOptions() { }
if (false) {
    /**
     * value of each <option>
     * @type {?}
     */
    FacetOptions.prototype.value;
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
                {
                    // find index of selected option
                    /** @type {?} */
                    var opts = this.data.inDate.options;
                    this.data.inDate._meta = opts.find((/**
                     * @param {?} o
                     * @return {?}
                     */
                    function (o) { return o.value === selected; })).value;
                    /** @type {?} */
                    var sliceIndex = opts.findIndex((/**
                     * @param {?} o
                     * @return {?}
                     */
                    function (o) { return o.value === selected; }));
                    // make new array of possible years
                    /** @type {?} */
                    var newOptions = opts.slice(sliceIndex, opts.length);
                    // give new array to second <select>
                    this.data.outDate.options = newOptions;
                    // remove placeholder and enable second <select>
                    this.data.inDate.placeholder = '';
                    this.data.outDate.classes = '';
                    this.data.outDate.placeholder = 'choose';
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQteWVhci1yYW5nZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmFjZXQteWVhci1yYW5nZS9mYWNldC15ZWFyLXJhbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JqRCx3Q0FxREM7Ozs7OztJQWpEQyxvQ0FzQkU7Ozs7O0lBSUYscUNBc0JFOzs7OztBQUVKLGtDQUtDOzs7Ozs7SUFEQyw2QkFBVzs7QUFHYjtJQUFBO0lBeUNBLENBQUM7Ozs7OztJQWhDQywwQ0FBUTs7Ozs7SUFBUixVQUFTLE9BQU8sRUFBRSxRQUFRO1FBQ3hCLFFBQVEsT0FBTyxFQUFFO1lBQ2YsS0FBSyxTQUFTO2dCQUFFOzs7d0JBRVIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87b0JBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSTs7OztvQkFBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFwQixDQUFvQixFQUFDLENBQUMsS0FBSyxDQUFDOzt3QkFDaEUsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTOzs7O29CQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssS0FBSyxRQUFRLEVBQXBCLENBQW9CLEVBQUM7Ozt3QkFFeEQsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQ3RELG9DQUFvQztvQkFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztvQkFDdkMsZ0RBQWdEO29CQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO29CQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO29CQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO2lCQUMxQztnQkFBQyxNQUFNO1lBQ1IsS0FBSyxVQUFVO2dCQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7Z0JBQ25DLGlDQUFpQztnQkFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2xCLE9BQU8sU0FBQTtvQkFDUCxLQUFLLEVBQUU7d0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7d0JBQzVCLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLO3FCQUM1QjtpQkFDRixDQUFDLENBQUM7Z0JBQ0gsTUFBTTtZQUNSO2dCQUNFLE1BQU07U0FDVDtJQUNILENBQUM7O2dCQXhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0Isa3REQUFzQztpQkFDdkM7Ozt1QkFFRSxLQUFLO3VCQUVMLEtBQUs7O0lBa0NSLDhCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7U0FyQ1ksdUJBQXVCOzs7SUFDbEMsdUNBQWtDOztJQUVsQyx1Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBGQUNFVC1ZRUFSLVJBTkdFLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBGYWNldFllYXJSYW5nZUNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBpbkRhdGUgKHJlcXVpcmVkKVxyXG4gKiAtIHRleHQgKG9wdGlvbmFsKVxyXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiAtIHBheWxvYWQgKHJlcXVpcmVkKVxyXG4gKiAtIF9tZXRhIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IG91dERhdGUgKHJlcXVpcmVkKVxyXG4gKiAtIHRleHQgKG9wdGlvbmFsKVxyXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiAtIHBheWxvYWQgKHJlcXVpcmVkKVxyXG4gKiAtIF9tZXRhIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IG9wdGlvbnMgKHJlcXVpcmVkKVxyXG4gKi9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmFjZXRZZWFyUmFuZ2VEYXRhIHtcclxuICAvKipcclxuICAgKiBiZWdpbm5pbmcgeWVhciByYW5nZSBzZWxlY3Rpb25cclxuICAgKi9cclxuICBpbkRhdGU6IHtcclxuICAgIC8qKlxyXG4gICAgICogPHNlbGVjdD4gaGVhZGluZ1xyXG4gICAgICovXHJcbiAgICB0ZXh0Pzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAgICovXHJcbiAgICBjbGFzc2VzPzogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBwbGFjZWhvbGRlciBvcHRpb25cclxuICAgICAqL1xyXG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIG9uQ2hhbmdlIHBheWxvYWRcclxuICAgICAqL1xyXG4gICAgcGF5bG9hZDogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGRhdGEgdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcclxuICAgICAqL1xyXG4gICAgX21ldGE/OiBhbnk7XHJcbiAgICBvcHRpb25zOiBGYWNldE9wdGlvbnNbXTtcclxuICB9O1xyXG4gIC8qKlxyXG4gICogZW5kIHllYXIgcmFuZ2Ugc2VsZWN0aW9uXHJcbiAgKi9cclxuICBvdXREYXRlOiB7XHJcbiAgICAvKipcclxuICAgICAqIDxzZWxlY3Q+IGhlYWRpbmdcclxuICAgICAqL1xyXG4gICAgdGV4dD86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgICAqL1xyXG4gICAgY2xhc3Nlcz86IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogcGxhY2Vob2xkZXIgb3B0aW9uXHJcbiAgICAgKi9cclxuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBvbkNoYW5nZSBwYXlsb2FkXHJcbiAgICAgKi9cclxuICAgIHBheWxvYWQ6IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBkYXRhIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXHJcbiAgICAgKi9cclxuICAgIF9tZXRhPzogYW55O1xyXG4gICAgb3B0aW9uczogRmFjZXRPcHRpb25zW107XHJcbiAgfTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEZhY2V0T3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogdmFsdWUgb2YgZWFjaCA8b3B0aW9uPlxyXG4gICAqL1xyXG4gIHZhbHVlOiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctZmFjZXQteWVhci1yYW5nZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ZhY2V0LXllYXItcmFuZ2UuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhY2V0WWVhclJhbmdlQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBGYWNldFllYXJSYW5nZURhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgb25DaGFuZ2UocGF5bG9hZCwgc2VsZWN0ZWQpIHtcclxuICAgIHN3aXRjaCAocGF5bG9hZCkge1xyXG4gICAgICBjYXNlICdpbi1kYXRlJzoge1xyXG4gICAgICAgIC8vIGZpbmQgaW5kZXggb2Ygc2VsZWN0ZWQgb3B0aW9uXHJcbiAgICAgICAgY29uc3Qgb3B0cyA9IHRoaXMuZGF0YS5pbkRhdGUub3B0aW9ucztcclxuICAgICAgICB0aGlzLmRhdGEuaW5EYXRlLl9tZXRhID0gb3B0cy5maW5kKChvKSA9PiBvLnZhbHVlID09PSBzZWxlY3RlZCkudmFsdWU7XHJcbiAgICAgICAgY29uc3Qgc2xpY2VJbmRleCA9IG9wdHMuZmluZEluZGV4KChvKSA9PiBvLnZhbHVlID09PSBzZWxlY3RlZCk7XHJcbiAgICAgICAgLy8gbWFrZSBuZXcgYXJyYXkgb2YgcG9zc2libGUgeWVhcnNcclxuICAgICAgICBjb25zdCBuZXdPcHRpb25zID0gb3B0cy5zbGljZShzbGljZUluZGV4LCBvcHRzLmxlbmd0aCk7XHJcbiAgICAgICAgLy8gZ2l2ZSBuZXcgYXJyYXkgdG8gc2Vjb25kIDxzZWxlY3Q+XHJcbiAgICAgICAgdGhpcy5kYXRhLm91dERhdGUub3B0aW9ucyA9IG5ld09wdGlvbnM7XHJcbiAgICAgICAgLy8gcmVtb3ZlIHBsYWNlaG9sZGVyIGFuZCBlbmFibGUgc2Vjb25kIDxzZWxlY3Q+XHJcbiAgICAgICAgdGhpcy5kYXRhLmluRGF0ZS5wbGFjZWhvbGRlciA9ICcnO1xyXG4gICAgICAgIHRoaXMuZGF0YS5vdXREYXRlLmNsYXNzZXMgPSAnJztcclxuICAgICAgICB0aGlzLmRhdGEub3V0RGF0ZS5wbGFjZWhvbGRlciA9ICdjaG9vc2UnO1xyXG4gICAgICB9IGJyZWFrO1xyXG4gICAgICBjYXNlICdvdXQtZGF0ZSc6XHJcbiAgICAgICAgdGhpcy5kYXRhLm91dERhdGUuX21ldGEgPSBzZWxlY3RlZDtcclxuICAgICAgICB0aGlzLmRhdGEub3V0RGF0ZS5wbGFjZWhvbGRlciA9ICcnO1xyXG4gICAgICAgIC8vIGVtaXQgc2VsZWN0ZWQgZmFjZXQgcGFyYW1ldGVyc1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJywge1xyXG4gICAgICAgICAgcGF5bG9hZCxcclxuICAgICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgIGZyb206IHRoaXMuZGF0YS5pbkRhdGUuX21ldGEsXHJcbiAgICAgICAgICAgIHRvOiB0aGlzLmRhdGEub3V0RGF0ZS5fbWV0YVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=