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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQteWVhci1yYW5nZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmFjZXQteWVhci1yYW5nZS9mYWNldC15ZWFyLXJhbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JqRCx5Q0FxREM7Ozs7OztJQWpEQyxxQ0FzQkU7Ozs7O0lBSUYsc0NBc0JFOzs7OztBQUVKLG1DQUtDOzs7Ozs7SUFEQyw4QkFBVzs7QUFHYjtJQUFBO0lBd0NBLENBQUM7Ozs7OztJQWhDQywwQ0FBUTs7Ozs7SUFBUixVQUFTLE9BQU8sRUFBRSxRQUFRO1FBQ3hCLFFBQVEsT0FBTyxFQUFFO1lBQ2YsS0FBSyxTQUFTOzs7b0JBRVIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87Z0JBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSTs7OztnQkFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLElBQUksUUFBUSxFQUFuQixDQUFtQixFQUFDLENBQUMsS0FBSyxDQUFBOztvQkFDOUQsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTOzs7O2dCQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssSUFBSSxRQUFRLEVBQW5CLENBQW1CLEVBQUM7Z0JBQ3pELG1DQUFtQzs7OztvQkFDL0IsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ3BELG9DQUFvQzs7Z0JBQXBDLG9DQUFvQztnQkFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztnQkFDdkMsZ0RBQWdEO2dCQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO2dCQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO2dCQUN6QyxNQUFNO1lBQ1IsS0FBSyxVQUFVO2dCQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7Z0JBQ25DLGlDQUFpQztnQkFDakMsSUFBSSxDQUFDLElBQUksQ0FBRSxRQUFRLEVBQUU7b0JBQ2pCLE9BQU8sU0FBQTtvQkFDUCxLQUFLLEVBQUU7d0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7d0JBQzVCLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLO3FCQUM1QjtpQkFDRixDQUFDLENBQUE7Z0JBQ0osTUFBTTtZQUNSO2dCQUNFLE1BQU07U0FDVDtJQUNILENBQUM7O2dCQXZDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0Isa3REQUFzQztpQkFDdkM7Ozt1QkFFRSxLQUFLO3VCQUNMLEtBQUs7O0lBa0NSLDhCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0FwQ1ksdUJBQXVCOzs7SUFDbEMsdUNBQW1DOztJQUNuQyx1Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBGQUNFVC1ZRUFSLVJBTkdFLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBGYWNldFllYXJSYW5nZUNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBpbkRhdGUgKHJlcXVpcmVkKVxyXG4gKiAtIHRleHQgKG9wdGlvbmFsKVxyXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiAtIHBheWxvYWQgKHJlcXVpcmVkKVxyXG4gKiAtIF9tZXRhIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IG91dERhdGUgKHJlcXVpcmVkKVxyXG4gKiAtIHRleHQgKG9wdGlvbmFsKVxyXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiAtIHBheWxvYWQgKHJlcXVpcmVkKVxyXG4gKiAtIF9tZXRhIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IG9wdGlvbnMgKHJlcXVpcmVkKVxyXG4gKi9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZhY2V0WWVhclJhbmdlRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogYmVnaW5uaW5nIHllYXIgcmFuZ2Ugc2VsZWN0aW9uXHJcbiAgICovXHJcbiAgaW5EYXRlOiB7XHJcbiAgICAvKipcclxuICAgICAqIDxzZWxlY3Q+IGhlYWRpbmdcclxuICAgICAqL1xyXG4gICAgdGV4dD86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgICAqL1xyXG4gICAgY2xhc3Nlcz86IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogcGxhY2Vob2xkZXIgb3B0aW9uXHJcbiAgICAgKi9cclxuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBvbkNoYW5nZSBwYXlsb2FkXHJcbiAgICAgKi9cclxuICAgIHBheWxvYWQ6IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBkYXRhIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXHJcbiAgICAgKi9cclxuICAgIF9tZXRhPzogYW55O1xyXG4gICAgb3B0aW9uczogSUZhY2V0T3B0aW9uc1tdO1xyXG4gIH07XHJcbiAgLyoqXHJcbiAgKiBlbmQgeWVhciByYW5nZSBzZWxlY3Rpb25cclxuICAqL1xyXG4gIG91dERhdGU6IHtcclxuICAgIC8qKlxyXG4gICAgICogPHNlbGVjdD4gaGVhZGluZ1xyXG4gICAgICovXHJcbiAgICB0ZXh0Pzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAgICovXHJcbiAgICBjbGFzc2VzPzogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBwbGFjZWhvbGRlciBvcHRpb25cclxuICAgICAqL1xyXG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIG9uQ2hhbmdlIHBheWxvYWRcclxuICAgICAqL1xyXG4gICAgcGF5bG9hZDogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGRhdGEgdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcclxuICAgICAqL1xyXG4gICAgX21ldGE/OiBhbnk7XHJcbiAgICBvcHRpb25zOiBJRmFjZXRPcHRpb25zW107XHJcbiAgfTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElGYWNldE9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIHZhbHVlIG9mIGVhY2ggPG9wdGlvbj5cclxuICAgKi9cclxuICB2YWx1ZTogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LWZhY2V0LXllYXItcmFuZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mYWNldC15ZWFyLXJhbmdlLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWNldFllYXJSYW5nZUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogSUZhY2V0WWVhclJhbmdlRGF0YTtcclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIG9uQ2hhbmdlKHBheWxvYWQsIHNlbGVjdGVkKSB7XHJcbiAgICBzd2l0Y2ggKHBheWxvYWQpIHtcclxuICAgICAgY2FzZSAnaW4tZGF0ZSc6XHJcbiAgICAgICAgLy8gZmluZCBpbmRleCBvZiBzZWxlY3RlZCBvcHRpb25cclxuICAgICAgICBsZXQgb3B0cyA9IHRoaXMuZGF0YS5pbkRhdGUub3B0aW9uc1xyXG4gICAgICAgIHRoaXMuZGF0YS5pbkRhdGUuX21ldGEgPSBvcHRzLmZpbmQobyA9PiBvLnZhbHVlID09IHNlbGVjdGVkKS52YWx1ZVxyXG4gICAgICAgIGxldCBzbGljZUluZGV4ID0gb3B0cy5maW5kSW5kZXgobyA9PiBvLnZhbHVlID09IHNlbGVjdGVkKVxyXG4gICAgICAgIC8vIG1ha2UgbmV3IGFycmF5IG9mIHBvc3NpYmxlIHllYXJzXHJcbiAgICAgICAgbGV0IG5ld09wdGlvbnMgPSBvcHRzLnNsaWNlKHNsaWNlSW5kZXgsIG9wdHMubGVuZ3RoKVxyXG4gICAgICAgIC8vIGdpdmUgbmV3IGFycmF5IHRvIHNlY29uZCA8c2VsZWN0PlxyXG4gICAgICAgIHRoaXMuZGF0YS5vdXREYXRlLm9wdGlvbnMgPSBuZXdPcHRpb25zO1xyXG4gICAgICAgIC8vIHJlbW92ZSBwbGFjZWhvbGRlciBhbmQgZW5hYmxlIHNlY29uZCA8c2VsZWN0PlxyXG4gICAgICAgIHRoaXMuZGF0YS5pbkRhdGUucGxhY2Vob2xkZXIgPSAnJztcclxuICAgICAgICB0aGlzLmRhdGEub3V0RGF0ZS5jbGFzc2VzID0gJyc7XHJcbiAgICAgICAgdGhpcy5kYXRhLm91dERhdGUucGxhY2Vob2xkZXIgPSAnY2hvb3NlJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnb3V0LWRhdGUnOlxyXG4gICAgICAgIHRoaXMuZGF0YS5vdXREYXRlLl9tZXRhID0gc2VsZWN0ZWQ7XHJcbiAgICAgICAgdGhpcy5kYXRhLm91dERhdGUucGxhY2Vob2xkZXIgPSAnJztcclxuICAgICAgICAvLyBlbWl0IHNlbGVjdGVkIGZhY2V0IHBhcmFtZXRlcnNcclxuICAgICAgICB0aGlzLmVtaXQoICdjaGFuZ2UnLCB7XHJcbiAgICAgICAgICAgIHBheWxvYWQsXHJcbiAgICAgICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgICAgZnJvbTogdGhpcy5kYXRhLmluRGF0ZS5fbWV0YSxcclxuICAgICAgICAgICAgICB0bzogdGhpcy5kYXRhLm91dERhdGUuX21ldGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19