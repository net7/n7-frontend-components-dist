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
                    template: "<div *ngIf=\"data\" class=\"n7-facet-year-range\">\n\n    <!-- select starting year -->\n    <div class=\"n7-facet-year-range__in\">\n        <label class=\"n7-facet-year-range__in-label\">\n            {{ data.inDate.text }}\n        </label>\n        <select (change)=\"onChange(data.inDate.payload, $event.target.value)\"\n            class=\"n7-facet-year-range__in-select {{ data.inDate.classes || '' }}\">\n            <!-- placeholder option -->\n            <option *ngIf=\"data.inDate.placeholder.length > 0\" value=\"{{ data.inDate.placeholder }}\" disabled selected>\n                {{ data.inDate.placeholder }}\n            </option>\n            <option *ngFor=\"let opt of data.inDate.options\" value=\"{{ opt.value }}\">\n                {{ opt.value }}\n            </option>\n        </select>\n    </div>\n\n    <!-- select final year -->\n    <div class=\"n7-facet-year-range__out\">\n        <label class=\"n7-facet-year-range__out-label\">\n            {{ data.outDate.text }}\n        </label>\n        <select (change)=\"onChange(data.outDate.payload, $event.target.value)\"\n                class=\"n7-facet-year-range__out-select {{ data.outDate.classes || '' }}\"\n                formControlName=\"outDate\">\n            <!-- placeholder option -->\n            <option *ngIf=\"data.outDate.placeholder.length > 0\" value=\"{{ data.outDate.placeholder }}\" disabled selected>\n                {{ data.outDate.placeholder }}\n            </option>\n            <option *ngFor=\"let opt of data.outDate.options\" value=\"{{ opt.value }}\">\n                {{ opt.value }}\n            </option>\n        </select>\n    </div>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQteWVhci1yYW5nZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmFjZXQteWVhci1yYW5nZS9mYWNldC15ZWFyLXJhbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQmpELHlDQXFEQzs7Ozs7O0lBakRDLHFDQXNCRTs7Ozs7SUFJRixzQ0FzQkU7Ozs7O0FBRUosbUNBS0M7Ozs7OztJQURDLDhCQUFXOztBQUdiO0lBQUE7SUFzQ0EsQ0FBQzs7Ozs7O0lBOUJDLDBDQUFROzs7OztJQUFSLFVBQVMsT0FBTyxFQUFFLFFBQVE7UUFDeEIsUUFBUSxPQUFPLEVBQUU7WUFDZixLQUFLLFNBQVM7OztvQkFFUixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTztnQkFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJOzs7O2dCQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssSUFBSSxRQUFRLEVBQW5CLENBQW1CLEVBQUMsQ0FBQyxLQUFLLENBQUE7O29CQUM5RCxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVM7Ozs7Z0JBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxJQUFJLFFBQVEsRUFBbkIsQ0FBbUIsRUFBQztnQkFDekQsbUNBQW1DOzs7O29CQUMvQixVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDcEQsb0NBQW9DOztnQkFBcEMsb0NBQW9DO2dCQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO2dCQUN2QyxnREFBZ0Q7Z0JBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7Z0JBQ3pDLE1BQU07WUFDUixLQUFLLFVBQVU7Z0JBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztnQkFDbkMsaUNBQWlDO2dCQUNqQyxJQUFJLENBQUMsSUFBSSxDQUNQO29CQUNFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO29CQUM1QixFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSztpQkFDNUIsQ0FBQyxDQUFBO2dCQUNKLE1BQU07WUFDUjtnQkFDRSxNQUFNO1NBQ1Q7SUFDSCxDQUFDOztnQkFyQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLDBvREFBc0M7aUJBQ3ZDOzs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLOztJQWdDUiw4QkFBQztDQUFBLEFBdENELElBc0NDO1NBbENZLHVCQUF1Qjs7O0lBQ2xDLHVDQUFtQzs7SUFDbkMsdUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZBQ0VULVlFQVItUkFOR0UudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEZhY2V0WWVhclJhbmdlQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgaW5EYXRlIChyZXF1aXJlZClcbiAqIC0gdGV4dCAob3B0aW9uYWwpXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxuICogLSBwYXlsb2FkIChvcHRpb25hbClcbiAqIC0gX21ldGEgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IG91dERhdGUgKHJlcXVpcmVkKVxuICogLSB0ZXh0IChvcHRpb25hbClcbiAqIC0gY2xhc3NlcyAob3B0aW9uYWwpXG4gKiAtIHBheWxvYWQgKG9wdGlvbmFsKVxuICogLSBfbWV0YSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgb3B0aW9ucyAocmVxdWlyZWQpXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBJRmFjZXRZZWFyUmFuZ2VEYXRhIHtcbiAgLyoqXG4gICAqIGJlZ2lubmluZyB5ZWFyIHJhbmdlIHNlbGVjdGlvblxuICAgKi9cbiAgaW5EYXRlOiB7XG4gICAgLyoqXG4gICAgICogPHNlbGVjdD4gaGVhZGluZ1xuICAgICAqL1xuICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICAgKi9cbiAgICBjbGFzc2VzPzogYW55O1xuICAgIC8qKlxuICAgICAqIHBsYWNlaG9sZGVyIG9wdGlvblxuICAgICAqL1xuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIG9uQ2hhbmdlIHBheWxvYWRcbiAgICAgKi9cbiAgICBwYXlsb2FkPzogYW55O1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgZGF0YSB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xuICAgICAqL1xuICAgIF9tZXRhPzogYW55O1xuICAgIG9wdGlvbnM6IElGYWNldE9wdGlvbnNbXTtcbiAgfTtcbiAgLyoqXG4gICogZW5kIHllYXIgcmFuZ2Ugc2VsZWN0aW9uXG4gICovXG4gIG91dERhdGU6IHtcbiAgICAvKipcbiAgICAgKiA8c2VsZWN0PiBoZWFkaW5nXG4gICAgICovXG4gICAgdGV4dD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgICAqL1xuICAgIGNsYXNzZXM/OiBhbnk7XG4gICAgLyoqXG4gICAgICogcGxhY2Vob2xkZXIgb3B0aW9uXG4gICAgICovXG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogb25DaGFuZ2UgcGF5bG9hZFxuICAgICAqL1xuICAgIHBheWxvYWQ/OiBhbnk7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBkYXRhIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXG4gICAgICovXG4gICAgX21ldGE/OiBhbnk7XG4gICAgb3B0aW9uczogSUZhY2V0T3B0aW9uc1tdO1xuICB9O1xufVxuZXhwb3J0IGludGVyZmFjZSBJRmFjZXRPcHRpb25zIHtcbiAgLyoqXG4gICAqIHZhbHVlIG9mIGVhY2ggPG9wdGlvbj5cbiAgICovXG4gIHZhbHVlOiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWZhY2V0LXllYXItcmFuZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmFjZXQteWVhci1yYW5nZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBGYWNldFllYXJSYW5nZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IElGYWNldFllYXJSYW5nZURhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNoYW5nZShwYXlsb2FkLCBzZWxlY3RlZCkge1xuICAgIHN3aXRjaCAocGF5bG9hZCkge1xuICAgICAgY2FzZSAnaW4tZGF0ZSc6XG4gICAgICAgIC8vIGZpbmQgaW5kZXggb2Ygc2VsZWN0ZWQgb3B0aW9uXG4gICAgICAgIGxldCBvcHRzID0gdGhpcy5kYXRhLmluRGF0ZS5vcHRpb25zXG4gICAgICAgIHRoaXMuZGF0YS5pbkRhdGUuX21ldGEgPSBvcHRzLmZpbmQobyA9PiBvLnZhbHVlID09IHNlbGVjdGVkKS52YWx1ZVxuICAgICAgICBsZXQgc2xpY2VJbmRleCA9IG9wdHMuZmluZEluZGV4KG8gPT4gby52YWx1ZSA9PSBzZWxlY3RlZClcbiAgICAgICAgLy8gbWFrZSBuZXcgYXJyYXkgb2YgcG9zc2libGUgeWVhcnNcbiAgICAgICAgbGV0IG5ld09wdGlvbnMgPSBvcHRzLnNsaWNlKHNsaWNlSW5kZXgsIG9wdHMubGVuZ3RoKVxuICAgICAgICAvLyBnaXZlIG5ldyBhcnJheSB0byBzZWNvbmQgPHNlbGVjdD5cbiAgICAgICAgdGhpcy5kYXRhLm91dERhdGUub3B0aW9ucyA9IG5ld09wdGlvbnM7XG4gICAgICAgIC8vIHJlbW92ZSBwbGFjZWhvbGRlciBhbmQgZW5hYmxlIHNlY29uZCA8c2VsZWN0PlxuICAgICAgICB0aGlzLmRhdGEuaW5EYXRlLnBsYWNlaG9sZGVyID0gJyc7XG4gICAgICAgIHRoaXMuZGF0YS5vdXREYXRlLmNsYXNzZXMgPSAnJztcbiAgICAgICAgdGhpcy5kYXRhLm91dERhdGUucGxhY2Vob2xkZXIgPSAnY2hvb3NlJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdvdXQtZGF0ZSc6XG4gICAgICAgIHRoaXMuZGF0YS5vdXREYXRlLl9tZXRhID0gc2VsZWN0ZWQ7XG4gICAgICAgIHRoaXMuZGF0YS5vdXREYXRlLnBsYWNlaG9sZGVyID0gJyc7XG4gICAgICAgIC8vIGVtaXQgc2VsZWN0ZWQgZmFjZXQgcGFyYW1ldGVyc1xuICAgICAgICB0aGlzLmVtaXQoXG4gICAgICAgICAge1xuICAgICAgICAgICAgZnJvbTogdGhpcy5kYXRhLmluRGF0ZS5fbWV0YSxcbiAgICAgICAgICAgIHRvOiB0aGlzLmRhdGEub3V0RGF0ZS5fbWV0YSxcbiAgICAgICAgICB9KVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIl19