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
                this.emit('change', {
                    payload,
                    value: {
                        from: this.data.inDate._meta,
                        to: this.data.outDate._meta
                    }
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
                template: "<div *ngIf=\"data\" class=\"n7-facet-year-range\">\r\n\r\n    <!-- Select starting year -->\r\n    <div class=\"n7-facet-year-range__in\">\r\n        <label class=\"n7-facet-year-range__in-label\">\r\n            {{ data.inDate.text }}\r\n        </label>\r\n        <select (change)=\"onChange(data.inDate.payload, $event.target.value)\"\r\n            class=\"n7-facet-year-range__in-select {{ data.inDate.classes || '' }}\">\r\n            <!-- Placeholder option -->\r\n            <option *ngIf=\"data.inDate.placeholder.length > 0\" value=\"{{ data.inDate.placeholder }}\" disabled selected>\r\n                {{ data.inDate.placeholder }}\r\n            </option>\r\n            <option *ngFor=\"let opt of data.inDate.options\" value=\"{{ opt.value }}\">\r\n                {{ opt.value }}\r\n            </option>\r\n        </select>\r\n    </div>\r\n\r\n    <!-- Select final year -->\r\n    <div class=\"n7-facet-year-range__out\">\r\n        <label class=\"n7-facet-year-range__out-label\">\r\n            {{ data.outDate.text }}\r\n        </label>\r\n        <select (change)=\"onChange(data.outDate.payload, $event.target.value)\"\r\n                class=\"n7-facet-year-range__out-select {{ data.outDate.classes || '' }}\"\r\n                formControlName=\"outDate\">\r\n            <!-- Placeholder option -->\r\n            <option *ngIf=\"data.outDate.placeholder.length > 0\" value=\"{{ data.outDate.placeholder }}\" disabled selected>\r\n                {{ data.outDate.placeholder }}\r\n            </option>\r\n            <option *ngFor=\"let opt of data.outDate.options\" value=\"{{ opt.value }}\">\r\n                {{ opt.value }}\r\n            </option>\r\n        </select>\r\n    </div>\r\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQteWVhci1yYW5nZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmFjZXQteWVhci1yYW5nZS9mYWNldC15ZWFyLXJhbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQmpELHlDQXFEQzs7Ozs7O0lBakRDLHFDQXNCRTs7Ozs7SUFJRixzQ0FzQkU7Ozs7O0FBRUosbUNBS0M7Ozs7OztJQURDLDhCQUFXOztBQU9iLE1BQU0sT0FBTyx1QkFBdUI7Ozs7OztJQUlsQyxRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVE7UUFDeEIsUUFBUSxPQUFPLEVBQUU7WUFDZixLQUFLLFNBQVM7OztvQkFFUixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTztnQkFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJOzs7O2dCQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxRQUFRLEVBQUMsQ0FBQyxLQUFLLENBQUE7O29CQUM5RCxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVM7Ozs7Z0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLFFBQVEsRUFBQztnQkFDekQsbUNBQW1DOzs7O29CQUMvQixVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDcEQsb0NBQW9DOztnQkFBcEMsb0NBQW9DO2dCQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO2dCQUN2QyxnREFBZ0Q7Z0JBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7Z0JBQ3pDLE1BQU07WUFDUixLQUFLLFVBQVU7Z0JBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztnQkFDbkMsaUNBQWlDO2dCQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFFLFFBQVEsRUFBRTtvQkFDakIsT0FBTztvQkFDUCxLQUFLLEVBQUU7d0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7d0JBQzVCLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLO3FCQUM1QjtpQkFDRixDQUFDLENBQUE7Z0JBQ0osTUFBTTtZQUNSO2dCQUNFLE1BQU07U0FDVDtJQUNILENBQUM7OztZQXZDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0Isa3REQUFzQzthQUN2Qzs7O21CQUVFLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLHVDQUFtQzs7SUFDbkMsdUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRkFDRVQtWUVBUi1SQU5HRS50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgRmFjZXRZZWFyUmFuZ2VDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgaW5EYXRlIChyZXF1aXJlZClcclxuICogLSB0ZXh0IChvcHRpb25hbClcclxuICogLSBjbGFzc2VzIChvcHRpb25hbClcclxuICogLSBwYXlsb2FkIChyZXF1aXJlZClcclxuICogLSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBvdXREYXRlIChyZXF1aXJlZClcclxuICogLSB0ZXh0IChvcHRpb25hbClcclxuICogLSBjbGFzc2VzIChvcHRpb25hbClcclxuICogLSBwYXlsb2FkIChyZXF1aXJlZClcclxuICogLSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBvcHRpb25zIChyZXF1aXJlZClcclxuICovXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElGYWNldFllYXJSYW5nZURhdGEge1xyXG4gIC8qKlxyXG4gICAqIGJlZ2lubmluZyB5ZWFyIHJhbmdlIHNlbGVjdGlvblxyXG4gICAqL1xyXG4gIGluRGF0ZToge1xyXG4gICAgLyoqXHJcbiAgICAgKiA8c2VsZWN0PiBoZWFkaW5nXHJcbiAgICAgKi9cclxuICAgIHRleHQ/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICAgKi9cclxuICAgIGNsYXNzZXM/OiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIHBsYWNlaG9sZGVyIG9wdGlvblxyXG4gICAgICovXHJcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogb25DaGFuZ2UgcGF5bG9hZFxyXG4gICAgICovXHJcbiAgICBwYXlsb2FkOiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgZGF0YSB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xyXG4gICAgICovXHJcbiAgICBfbWV0YT86IGFueTtcclxuICAgIG9wdGlvbnM6IElGYWNldE9wdGlvbnNbXTtcclxuICB9O1xyXG4gIC8qKlxyXG4gICogZW5kIHllYXIgcmFuZ2Ugc2VsZWN0aW9uXHJcbiAgKi9cclxuICBvdXREYXRlOiB7XHJcbiAgICAvKipcclxuICAgICAqIDxzZWxlY3Q+IGhlYWRpbmdcclxuICAgICAqL1xyXG4gICAgdGV4dD86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgICAqL1xyXG4gICAgY2xhc3Nlcz86IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogcGxhY2Vob2xkZXIgb3B0aW9uXHJcbiAgICAgKi9cclxuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBvbkNoYW5nZSBwYXlsb2FkXHJcbiAgICAgKi9cclxuICAgIHBheWxvYWQ6IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBkYXRhIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXHJcbiAgICAgKi9cclxuICAgIF9tZXRhPzogYW55O1xyXG4gICAgb3B0aW9uczogSUZhY2V0T3B0aW9uc1tdO1xyXG4gIH07XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJRmFjZXRPcHRpb25zIHtcclxuICAvKipcclxuICAgKiB2YWx1ZSBvZiBlYWNoIDxvcHRpb24+XHJcbiAgICovXHJcbiAgdmFsdWU6IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1mYWNldC15ZWFyLXJhbmdlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmFjZXQteWVhci1yYW5nZS5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFjZXRZZWFyUmFuZ2VDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IElGYWNldFllYXJSYW5nZURhdGE7XHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBvbkNoYW5nZShwYXlsb2FkLCBzZWxlY3RlZCkge1xyXG4gICAgc3dpdGNoIChwYXlsb2FkKSB7XHJcbiAgICAgIGNhc2UgJ2luLWRhdGUnOlxyXG4gICAgICAgIC8vIGZpbmQgaW5kZXggb2Ygc2VsZWN0ZWQgb3B0aW9uXHJcbiAgICAgICAgbGV0IG9wdHMgPSB0aGlzLmRhdGEuaW5EYXRlLm9wdGlvbnNcclxuICAgICAgICB0aGlzLmRhdGEuaW5EYXRlLl9tZXRhID0gb3B0cy5maW5kKG8gPT4gby52YWx1ZSA9PSBzZWxlY3RlZCkudmFsdWVcclxuICAgICAgICBsZXQgc2xpY2VJbmRleCA9IG9wdHMuZmluZEluZGV4KG8gPT4gby52YWx1ZSA9PSBzZWxlY3RlZClcclxuICAgICAgICAvLyBtYWtlIG5ldyBhcnJheSBvZiBwb3NzaWJsZSB5ZWFyc1xyXG4gICAgICAgIGxldCBuZXdPcHRpb25zID0gb3B0cy5zbGljZShzbGljZUluZGV4LCBvcHRzLmxlbmd0aClcclxuICAgICAgICAvLyBnaXZlIG5ldyBhcnJheSB0byBzZWNvbmQgPHNlbGVjdD5cclxuICAgICAgICB0aGlzLmRhdGEub3V0RGF0ZS5vcHRpb25zID0gbmV3T3B0aW9ucztcclxuICAgICAgICAvLyByZW1vdmUgcGxhY2Vob2xkZXIgYW5kIGVuYWJsZSBzZWNvbmQgPHNlbGVjdD5cclxuICAgICAgICB0aGlzLmRhdGEuaW5EYXRlLnBsYWNlaG9sZGVyID0gJyc7XHJcbiAgICAgICAgdGhpcy5kYXRhLm91dERhdGUuY2xhc3NlcyA9ICcnO1xyXG4gICAgICAgIHRoaXMuZGF0YS5vdXREYXRlLnBsYWNlaG9sZGVyID0gJ2Nob29zZSc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ291dC1kYXRlJzpcclxuICAgICAgICB0aGlzLmRhdGEub3V0RGF0ZS5fbWV0YSA9IHNlbGVjdGVkO1xyXG4gICAgICAgIHRoaXMuZGF0YS5vdXREYXRlLnBsYWNlaG9sZGVyID0gJyc7XHJcbiAgICAgICAgLy8gZW1pdCBzZWxlY3RlZCBmYWNldCBwYXJhbWV0ZXJzXHJcbiAgICAgICAgdGhpcy5lbWl0KCAnY2hhbmdlJywge1xyXG4gICAgICAgICAgICBwYXlsb2FkLFxyXG4gICAgICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgICAgIGZyb206IHRoaXMuZGF0YS5pbkRhdGUuX21ldGEsXHJcbiAgICAgICAgICAgICAgdG86IHRoaXMuZGF0YS5vdXREYXRlLl9tZXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==