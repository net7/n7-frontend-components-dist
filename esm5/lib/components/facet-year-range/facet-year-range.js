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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQteWVhci1yYW5nZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmFjZXQteWVhci1yYW5nZS9mYWNldC15ZWFyLXJhbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JqRCx5Q0FxREM7Ozs7OztJQWpEQyxxQ0FzQkU7Ozs7O0lBSUYsc0NBc0JFOzs7OztBQUVKLG1DQUtDOzs7Ozs7SUFEQyw4QkFBVzs7QUFHYjtJQUFBO0lBd0NBLENBQUM7Ozs7OztJQWhDQywwQ0FBUTs7Ozs7SUFBUixVQUFTLE9BQU8sRUFBRSxRQUFRO1FBQ3hCLFFBQVEsT0FBTyxFQUFFO1lBQ2YsS0FBSyxTQUFTOzs7b0JBRVIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87Z0JBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSTs7OztnQkFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLElBQUksUUFBUSxFQUFuQixDQUFtQixFQUFDLENBQUMsS0FBSyxDQUFBOztvQkFDOUQsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTOzs7O2dCQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssSUFBSSxRQUFRLEVBQW5CLENBQW1CLEVBQUM7Z0JBQ3pELG1DQUFtQzs7OztvQkFDL0IsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ3BELG9DQUFvQzs7Z0JBQXBDLG9DQUFvQztnQkFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztnQkFDdkMsZ0RBQWdEO2dCQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO2dCQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO2dCQUN6QyxNQUFNO1lBQ1IsS0FBSyxVQUFVO2dCQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7Z0JBQ25DLGlDQUFpQztnQkFDakMsSUFBSSxDQUFDLElBQUksQ0FBRSxRQUFRLEVBQUU7b0JBQ2pCLE9BQU8sU0FBQTtvQkFDUCxLQUFLLEVBQUU7d0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7d0JBQzVCLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLO3FCQUM1QjtpQkFDRixDQUFDLENBQUE7Z0JBQ0osTUFBTTtZQUNSO2dCQUNFLE1BQU07U0FDVDtJQUNILENBQUM7O2dCQXZDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsMG9EQUFzQztpQkFDdkM7Ozt1QkFFRSxLQUFLO3VCQUNMLEtBQUs7O0lBa0NSLDhCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0FwQ1ksdUJBQXVCOzs7SUFDbEMsdUNBQW1DOztJQUNuQyx1Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRkFDRVQtWUVBUi1SQU5HRS50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgRmFjZXRZZWFyUmFuZ2VDb21wb25lbnQncyBcImRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBpbkRhdGUgKHJlcXVpcmVkKVxuICogLSB0ZXh0IChvcHRpb25hbClcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXG4gKiAtIHBheWxvYWQgKHJlcXVpcmVkKVxuICogLSBfbWV0YSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgb3V0RGF0ZSAocmVxdWlyZWQpXG4gKiAtIHRleHQgKG9wdGlvbmFsKVxuICogLSBjbGFzc2VzIChvcHRpb25hbClcbiAqIC0gcGF5bG9hZCAocmVxdWlyZWQpXG4gKiAtIF9tZXRhIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBvcHRpb25zIChyZXF1aXJlZClcbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIElGYWNldFllYXJSYW5nZURhdGEge1xuICAvKipcbiAgICogYmVnaW5uaW5nIHllYXIgcmFuZ2Ugc2VsZWN0aW9uXG4gICAqL1xuICBpbkRhdGU6IHtcbiAgICAvKipcbiAgICAgKiA8c2VsZWN0PiBoZWFkaW5nXG4gICAgICovXG4gICAgdGV4dD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgICAqL1xuICAgIGNsYXNzZXM/OiBhbnk7XG4gICAgLyoqXG4gICAgICogcGxhY2Vob2xkZXIgb3B0aW9uXG4gICAgICovXG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogb25DaGFuZ2UgcGF5bG9hZFxuICAgICAqL1xuICAgIHBheWxvYWQ6IGFueTtcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGRhdGEgdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICAgKi9cbiAgICBfbWV0YT86IGFueTtcbiAgICBvcHRpb25zOiBJRmFjZXRPcHRpb25zW107XG4gIH07XG4gIC8qKlxuICAqIGVuZCB5ZWFyIHJhbmdlIHNlbGVjdGlvblxuICAqL1xuICBvdXREYXRlOiB7XG4gICAgLyoqXG4gICAgICogPHNlbGVjdD4gaGVhZGluZ1xuICAgICAqL1xuICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICAgKi9cbiAgICBjbGFzc2VzPzogYW55O1xuICAgIC8qKlxuICAgICAqIHBsYWNlaG9sZGVyIG9wdGlvblxuICAgICAqL1xuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIG9uQ2hhbmdlIHBheWxvYWRcbiAgICAgKi9cbiAgICBwYXlsb2FkOiBhbnk7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBkYXRhIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXG4gICAgICovXG4gICAgX21ldGE/OiBhbnk7XG4gICAgb3B0aW9uczogSUZhY2V0T3B0aW9uc1tdO1xuICB9O1xufVxuZXhwb3J0IGludGVyZmFjZSBJRmFjZXRPcHRpb25zIHtcbiAgLyoqXG4gICAqIHZhbHVlIG9mIGVhY2ggPG9wdGlvbj5cbiAgICovXG4gIHZhbHVlOiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWZhY2V0LXllYXItcmFuZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmFjZXQteWVhci1yYW5nZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBGYWNldFllYXJSYW5nZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElGYWNldFllYXJSYW5nZURhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNoYW5nZShwYXlsb2FkLCBzZWxlY3RlZCkge1xuICAgIHN3aXRjaCAocGF5bG9hZCkge1xuICAgICAgY2FzZSAnaW4tZGF0ZSc6XG4gICAgICAgIC8vIGZpbmQgaW5kZXggb2Ygc2VsZWN0ZWQgb3B0aW9uXG4gICAgICAgIGxldCBvcHRzID0gdGhpcy5kYXRhLmluRGF0ZS5vcHRpb25zXG4gICAgICAgIHRoaXMuZGF0YS5pbkRhdGUuX21ldGEgPSBvcHRzLmZpbmQobyA9PiBvLnZhbHVlID09IHNlbGVjdGVkKS52YWx1ZVxuICAgICAgICBsZXQgc2xpY2VJbmRleCA9IG9wdHMuZmluZEluZGV4KG8gPT4gby52YWx1ZSA9PSBzZWxlY3RlZClcbiAgICAgICAgLy8gbWFrZSBuZXcgYXJyYXkgb2YgcG9zc2libGUgeWVhcnNcbiAgICAgICAgbGV0IG5ld09wdGlvbnMgPSBvcHRzLnNsaWNlKHNsaWNlSW5kZXgsIG9wdHMubGVuZ3RoKVxuICAgICAgICAvLyBnaXZlIG5ldyBhcnJheSB0byBzZWNvbmQgPHNlbGVjdD5cbiAgICAgICAgdGhpcy5kYXRhLm91dERhdGUub3B0aW9ucyA9IG5ld09wdGlvbnM7XG4gICAgICAgIC8vIHJlbW92ZSBwbGFjZWhvbGRlciBhbmQgZW5hYmxlIHNlY29uZCA8c2VsZWN0PlxuICAgICAgICB0aGlzLmRhdGEuaW5EYXRlLnBsYWNlaG9sZGVyID0gJyc7XG4gICAgICAgIHRoaXMuZGF0YS5vdXREYXRlLmNsYXNzZXMgPSAnJztcbiAgICAgICAgdGhpcy5kYXRhLm91dERhdGUucGxhY2Vob2xkZXIgPSAnY2hvb3NlJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdvdXQtZGF0ZSc6XG4gICAgICAgIHRoaXMuZGF0YS5vdXREYXRlLl9tZXRhID0gc2VsZWN0ZWQ7XG4gICAgICAgIHRoaXMuZGF0YS5vdXREYXRlLnBsYWNlaG9sZGVyID0gJyc7XG4gICAgICAgIC8vIGVtaXQgc2VsZWN0ZWQgZmFjZXQgcGFyYW1ldGVyc1xuICAgICAgICB0aGlzLmVtaXQoICdjaGFuZ2UnLCB7XG4gICAgICAgICAgICBwYXlsb2FkLFxuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgZnJvbTogdGhpcy5kYXRhLmluRGF0ZS5fbWV0YSxcbiAgICAgICAgICAgICAgdG86IHRoaXMuZGF0YS5vdXREYXRlLl9tZXRhXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiJdfQ==