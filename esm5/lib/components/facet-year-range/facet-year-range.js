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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQteWVhci1yYW5nZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmFjZXQteWVhci1yYW5nZS9mYWNldC15ZWFyLXJhbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JqRCx3Q0FxREM7Ozs7OztJQWpEQyxvQ0FzQkU7Ozs7O0lBSUYscUNBc0JFOzs7OztBQUVKLGtDQUtDOzs7Ozs7SUFEQyw2QkFBVzs7QUFHYjtJQUFBO0lBeUNBLENBQUM7Ozs7OztJQWhDQywwQ0FBUTs7Ozs7SUFBUixVQUFTLE9BQU8sRUFBRSxRQUFRO1FBQ3hCLFFBQVEsT0FBTyxFQUFFO1lBQ2YsS0FBSyxTQUFTO2dCQUFFOzs7d0JBRVIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87b0JBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSTs7OztvQkFBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFwQixDQUFvQixFQUFDLENBQUMsS0FBSyxDQUFDOzt3QkFDaEUsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTOzs7O29CQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssS0FBSyxRQUFRLEVBQXBCLENBQW9CLEVBQUM7Ozt3QkFFeEQsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQ3RELG9DQUFvQztvQkFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztvQkFDdkMsZ0RBQWdEO29CQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO29CQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO29CQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO2lCQUMxQztnQkFBQyxNQUFNO1lBQ1IsS0FBSyxVQUFVO2dCQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7Z0JBQ25DLGlDQUFpQztnQkFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2xCLE9BQU8sU0FBQTtvQkFDUCxLQUFLLEVBQUU7d0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7d0JBQzVCLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLO3FCQUM1QjtpQkFDRixDQUFDLENBQUM7Z0JBQ0gsTUFBTTtZQUNSO2dCQUNFLE1BQU07U0FDVDtJQUNILENBQUM7O2dCQXhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsMG9EQUFzQztpQkFDdkM7Ozt1QkFFRSxLQUFLO3VCQUVMLEtBQUs7O0lBa0NSLDhCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7U0FyQ1ksdUJBQXVCOzs7SUFDbEMsdUNBQWtDOztJQUVsQyx1Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRkFDRVQtWUVBUi1SQU5HRS50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgRmFjZXRZZWFyUmFuZ2VDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBpbkRhdGUgKHJlcXVpcmVkKVxuICogLSB0ZXh0IChvcHRpb25hbClcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXG4gKiAtIHBheWxvYWQgKHJlcXVpcmVkKVxuICogLSBfbWV0YSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgb3V0RGF0ZSAocmVxdWlyZWQpXG4gKiAtIHRleHQgKG9wdGlvbmFsKVxuICogLSBjbGFzc2VzIChvcHRpb25hbClcbiAqIC0gcGF5bG9hZCAocmVxdWlyZWQpXG4gKiAtIF9tZXRhIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBvcHRpb25zIChyZXF1aXJlZClcbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIEZhY2V0WWVhclJhbmdlRGF0YSB7XG4gIC8qKlxuICAgKiBiZWdpbm5pbmcgeWVhciByYW5nZSBzZWxlY3Rpb25cbiAgICovXG4gIGluRGF0ZToge1xuICAgIC8qKlxuICAgICAqIDxzZWxlY3Q+IGhlYWRpbmdcbiAgICAgKi9cbiAgICB0ZXh0Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAgICovXG4gICAgY2xhc3Nlcz86IGFueTtcbiAgICAvKipcbiAgICAgKiBwbGFjZWhvbGRlciBvcHRpb25cbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBvbkNoYW5nZSBwYXlsb2FkXG4gICAgICovXG4gICAgcGF5bG9hZDogYW55O1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgZGF0YSB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xuICAgICAqL1xuICAgIF9tZXRhPzogYW55O1xuICAgIG9wdGlvbnM6IEZhY2V0T3B0aW9uc1tdO1xuICB9O1xuICAvKipcbiAgKiBlbmQgeWVhciByYW5nZSBzZWxlY3Rpb25cbiAgKi9cbiAgb3V0RGF0ZToge1xuICAgIC8qKlxuICAgICAqIDxzZWxlY3Q+IGhlYWRpbmdcbiAgICAgKi9cbiAgICB0ZXh0Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAgICovXG4gICAgY2xhc3Nlcz86IGFueTtcbiAgICAvKipcbiAgICAgKiBwbGFjZWhvbGRlciBvcHRpb25cbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBvbkNoYW5nZSBwYXlsb2FkXG4gICAgICovXG4gICAgcGF5bG9hZDogYW55O1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgZGF0YSB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xuICAgICAqL1xuICAgIF9tZXRhPzogYW55O1xuICAgIG9wdGlvbnM6IEZhY2V0T3B0aW9uc1tdO1xuICB9O1xufVxuZXhwb3J0IGludGVyZmFjZSBGYWNldE9wdGlvbnMge1xuICAvKipcbiAgICogdmFsdWUgb2YgZWFjaCA8b3B0aW9uPlxuICAgKi9cbiAgdmFsdWU6IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctZmFjZXQteWVhci1yYW5nZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9mYWNldC15ZWFyLXJhbmdlLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEZhY2V0WWVhclJhbmdlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogRmFjZXRZZWFyUmFuZ2VEYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNoYW5nZShwYXlsb2FkLCBzZWxlY3RlZCkge1xuICAgIHN3aXRjaCAocGF5bG9hZCkge1xuICAgICAgY2FzZSAnaW4tZGF0ZSc6IHtcbiAgICAgICAgLy8gZmluZCBpbmRleCBvZiBzZWxlY3RlZCBvcHRpb25cbiAgICAgICAgY29uc3Qgb3B0cyA9IHRoaXMuZGF0YS5pbkRhdGUub3B0aW9ucztcbiAgICAgICAgdGhpcy5kYXRhLmluRGF0ZS5fbWV0YSA9IG9wdHMuZmluZCgobykgPT4gby52YWx1ZSA9PT0gc2VsZWN0ZWQpLnZhbHVlO1xuICAgICAgICBjb25zdCBzbGljZUluZGV4ID0gb3B0cy5maW5kSW5kZXgoKG8pID0+IG8udmFsdWUgPT09IHNlbGVjdGVkKTtcbiAgICAgICAgLy8gbWFrZSBuZXcgYXJyYXkgb2YgcG9zc2libGUgeWVhcnNcbiAgICAgICAgY29uc3QgbmV3T3B0aW9ucyA9IG9wdHMuc2xpY2Uoc2xpY2VJbmRleCwgb3B0cy5sZW5ndGgpO1xuICAgICAgICAvLyBnaXZlIG5ldyBhcnJheSB0byBzZWNvbmQgPHNlbGVjdD5cbiAgICAgICAgdGhpcy5kYXRhLm91dERhdGUub3B0aW9ucyA9IG5ld09wdGlvbnM7XG4gICAgICAgIC8vIHJlbW92ZSBwbGFjZWhvbGRlciBhbmQgZW5hYmxlIHNlY29uZCA8c2VsZWN0PlxuICAgICAgICB0aGlzLmRhdGEuaW5EYXRlLnBsYWNlaG9sZGVyID0gJyc7XG4gICAgICAgIHRoaXMuZGF0YS5vdXREYXRlLmNsYXNzZXMgPSAnJztcbiAgICAgICAgdGhpcy5kYXRhLm91dERhdGUucGxhY2Vob2xkZXIgPSAnY2hvb3NlJztcbiAgICAgIH0gYnJlYWs7XG4gICAgICBjYXNlICdvdXQtZGF0ZSc6XG4gICAgICAgIHRoaXMuZGF0YS5vdXREYXRlLl9tZXRhID0gc2VsZWN0ZWQ7XG4gICAgICAgIHRoaXMuZGF0YS5vdXREYXRlLnBsYWNlaG9sZGVyID0gJyc7XG4gICAgICAgIC8vIGVtaXQgc2VsZWN0ZWQgZmFjZXQgcGFyYW1ldGVyc1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHtcbiAgICAgICAgICBwYXlsb2FkLFxuICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICBmcm9tOiB0aGlzLmRhdGEuaW5EYXRlLl9tZXRhLFxuICAgICAgICAgICAgdG86IHRoaXMuZGF0YS5vdXREYXRlLl9tZXRhXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiJdfQ==