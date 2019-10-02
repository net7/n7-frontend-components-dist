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
export class FacetYearRangeComponent {
    /**
     * @param {?} payload
     * @param {?} selected
     * @return {?}
     */
    onChange(payload, selected) {
        switch (payload) {
            case 'in-date':
                // find index of selected option
                /** @type {?} */
                let opts = this.data.inDate.options;
                this.data.inDate._meta = opts.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => o.value == selected)).value;
                /** @type {?} */
                let sliceIndex = opts.findIndex((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => o.value == selected))
                // make new array of possible years
                ;
                // make new array of possible years
                /** @type {?} */
                let newOptions = opts.slice(sliceIndex, opts.length)
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
    }
}
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
if (false) {
    /** @type {?} */
    FacetYearRangeComponent.prototype.data;
    /** @type {?} */
    FacetYearRangeComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQteWVhci1yYW5nZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmFjZXQteWVhci1yYW5nZS9mYWNldC15ZWFyLXJhbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQmpELHlDQXFEQzs7Ozs7O0lBakRDLHFDQXNCRTs7Ozs7SUFJRixzQ0FzQkU7Ozs7O0FBRUosbUNBS0M7Ozs7OztJQURDLDhCQUFXOztBQU9iLE1BQU0sT0FBTyx1QkFBdUI7Ozs7OztJQUlsQyxRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVE7UUFDeEIsUUFBUSxPQUFPLEVBQUU7WUFDZixLQUFLLFNBQVM7OztvQkFFUixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTztnQkFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJOzs7O2dCQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxRQUFRLEVBQUMsQ0FBQyxLQUFLLENBQUE7O29CQUM5RCxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVM7Ozs7Z0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLFFBQVEsRUFBQztnQkFDekQsbUNBQW1DOzs7O29CQUMvQixVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDcEQsb0NBQW9DOztnQkFBcEMsb0NBQW9DO2dCQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO2dCQUN2QyxnREFBZ0Q7Z0JBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7Z0JBQ3pDLE1BQU07WUFDUixLQUFLLFVBQVU7Z0JBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztnQkFDbkMsaUNBQWlDO2dCQUNqQyxJQUFJLENBQUMsSUFBSSxDQUNQO29CQUNFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO29CQUM1QixFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSztpQkFDNUIsQ0FBQyxDQUFBO2dCQUNKLE1BQU07WUFDUjtnQkFDRSxNQUFNO1NBQ1Q7SUFDSCxDQUFDOzs7WUFyQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLDBvREFBc0M7YUFDdkM7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETix1Q0FBbUM7O0lBQ25DLHVDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGQUNFVC1ZRUFSLVJBTkdFLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBGYWNldFllYXJSYW5nZUNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGluRGF0ZSAocmVxdWlyZWQpXG4gKiAtIHRleHQgKG9wdGlvbmFsKVxuICogLSBjbGFzc2VzIChvcHRpb25hbClcbiAqIC0gcGF5bG9hZCAob3B0aW9uYWwpXG4gKiAtIF9tZXRhIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBvdXREYXRlIChyZXF1aXJlZClcbiAqIC0gdGV4dCAob3B0aW9uYWwpXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxuICogLSBwYXlsb2FkIChvcHRpb25hbClcbiAqIC0gX21ldGEgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IG9wdGlvbnMgKHJlcXVpcmVkKVxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZhY2V0WWVhclJhbmdlRGF0YSB7XG4gIC8qKlxuICAgKiBiZWdpbm5pbmcgeWVhciByYW5nZSBzZWxlY3Rpb25cbiAgICovXG4gIGluRGF0ZToge1xuICAgIC8qKlxuICAgICAqIDxzZWxlY3Q+IGhlYWRpbmdcbiAgICAgKi9cbiAgICB0ZXh0Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAgICovXG4gICAgY2xhc3Nlcz86IGFueTtcbiAgICAvKipcbiAgICAgKiBwbGFjZWhvbGRlciBvcHRpb25cbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBvbkNoYW5nZSBwYXlsb2FkXG4gICAgICovXG4gICAgcGF5bG9hZD86IGFueTtcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGRhdGEgdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICAgKi9cbiAgICBfbWV0YT86IGFueTtcbiAgICBvcHRpb25zOiBJRmFjZXRPcHRpb25zW107XG4gIH07XG4gIC8qKlxuICAqIGVuZCB5ZWFyIHJhbmdlIHNlbGVjdGlvblxuICAqL1xuICBvdXREYXRlOiB7XG4gICAgLyoqXG4gICAgICogPHNlbGVjdD4gaGVhZGluZ1xuICAgICAqL1xuICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICAgKi9cbiAgICBjbGFzc2VzPzogYW55O1xuICAgIC8qKlxuICAgICAqIHBsYWNlaG9sZGVyIG9wdGlvblxuICAgICAqL1xuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIG9uQ2hhbmdlIHBheWxvYWRcbiAgICAgKi9cbiAgICBwYXlsb2FkPzogYW55O1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgZGF0YSB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xuICAgICAqL1xuICAgIF9tZXRhPzogYW55O1xuICAgIG9wdGlvbnM6IElGYWNldE9wdGlvbnNbXTtcbiAgfTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSUZhY2V0T3B0aW9ucyB7XG4gIC8qKlxuICAgKiB2YWx1ZSBvZiBlYWNoIDxvcHRpb24+XG4gICAqL1xuICB2YWx1ZTogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1mYWNldC15ZWFyLXJhbmdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZhY2V0LXllYXItcmFuZ2UuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRmFjZXRZZWFyUmFuZ2VDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBJRmFjZXRZZWFyUmFuZ2VEYXRhO1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgb25DaGFuZ2UocGF5bG9hZCwgc2VsZWN0ZWQpIHtcbiAgICBzd2l0Y2ggKHBheWxvYWQpIHtcbiAgICAgIGNhc2UgJ2luLWRhdGUnOlxuICAgICAgICAvLyBmaW5kIGluZGV4IG9mIHNlbGVjdGVkIG9wdGlvblxuICAgICAgICBsZXQgb3B0cyA9IHRoaXMuZGF0YS5pbkRhdGUub3B0aW9uc1xuICAgICAgICB0aGlzLmRhdGEuaW5EYXRlLl9tZXRhID0gb3B0cy5maW5kKG8gPT4gby52YWx1ZSA9PSBzZWxlY3RlZCkudmFsdWVcbiAgICAgICAgbGV0IHNsaWNlSW5kZXggPSBvcHRzLmZpbmRJbmRleChvID0+IG8udmFsdWUgPT0gc2VsZWN0ZWQpXG4gICAgICAgIC8vIG1ha2UgbmV3IGFycmF5IG9mIHBvc3NpYmxlIHllYXJzXG4gICAgICAgIGxldCBuZXdPcHRpb25zID0gb3B0cy5zbGljZShzbGljZUluZGV4LCBvcHRzLmxlbmd0aClcbiAgICAgICAgLy8gZ2l2ZSBuZXcgYXJyYXkgdG8gc2Vjb25kIDxzZWxlY3Q+XG4gICAgICAgIHRoaXMuZGF0YS5vdXREYXRlLm9wdGlvbnMgPSBuZXdPcHRpb25zO1xuICAgICAgICAvLyByZW1vdmUgcGxhY2Vob2xkZXIgYW5kIGVuYWJsZSBzZWNvbmQgPHNlbGVjdD5cbiAgICAgICAgdGhpcy5kYXRhLmluRGF0ZS5wbGFjZWhvbGRlciA9ICcnO1xuICAgICAgICB0aGlzLmRhdGEub3V0RGF0ZS5jbGFzc2VzID0gJyc7XG4gICAgICAgIHRoaXMuZGF0YS5vdXREYXRlLnBsYWNlaG9sZGVyID0gJ2Nob29zZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnb3V0LWRhdGUnOlxuICAgICAgICB0aGlzLmRhdGEub3V0RGF0ZS5fbWV0YSA9IHNlbGVjdGVkO1xuICAgICAgICB0aGlzLmRhdGEub3V0RGF0ZS5wbGFjZWhvbGRlciA9ICcnO1xuICAgICAgICAvLyBlbWl0IHNlbGVjdGVkIGZhY2V0IHBhcmFtZXRlcnNcbiAgICAgICAgdGhpcy5lbWl0KFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZyb206IHRoaXMuZGF0YS5pbkRhdGUuX21ldGEsXG4gICAgICAgICAgICB0bzogdGhpcy5kYXRhLm91dERhdGUuX21ldGEsXG4gICAgICAgICAgfSlcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiJdfQ==