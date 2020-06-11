//---------------------------
// FACET-YEAR-RANGE.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let FacetYearRangeComponent = class FacetYearRangeComponent {
    onChange(payload, selected) {
        switch (payload) {
            case 'in-date':
                {
                    // find index of selected option
                    const opts = this.data.inDate.options;
                    this.data.inDate._meta = opts.find((o) => o.value === selected).value;
                    const sliceIndex = opts.findIndex((o) => o.value === selected);
                    // make new array of possible years
                    const newOptions = opts.slice(sliceIndex, opts.length);
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
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], FacetYearRangeComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], FacetYearRangeComponent.prototype, "emit", void 0);
FacetYearRangeComponent = __decorate([
    Component({
        selector: 'n7-facet-year-range',
        template: "<div *ngIf=\"data\" class=\"n7-facet-year-range\">\n\n    <!-- Select starting year -->\n    <div class=\"n7-facet-year-range__in\">\n        <label class=\"n7-facet-year-range__in-label\">\n            {{ data.inDate.text }}\n        </label>\n        <select (change)=\"onChange(data.inDate.payload, $event.target.value)\"\n            class=\"n7-facet-year-range__in-select {{ data.inDate.classes || '' }}\">\n            <!-- Placeholder option -->\n            <option *ngIf=\"data.inDate.placeholder.length > 0\" value=\"{{ data.inDate.placeholder }}\" disabled selected>\n                {{ data.inDate.placeholder }}\n            </option>\n            <option *ngFor=\"let opt of data.inDate.options\" value=\"{{ opt.value }}\">\n                {{ opt.value }}\n            </option>\n        </select>\n    </div>\n\n    <!-- Select final year -->\n    <div class=\"n7-facet-year-range__out\">\n        <label class=\"n7-facet-year-range__out-label\">\n            {{ data.outDate.text }}\n        </label>\n        <select (change)=\"onChange(data.outDate.payload, $event.target.value)\"\n                class=\"n7-facet-year-range__out-select {{ data.outDate.classes || '' }}\"\n                formControlName=\"outDate\">\n            <!-- Placeholder option -->\n            <option *ngIf=\"data.outDate.placeholder.length > 0\" value=\"{{ data.outDate.placeholder }}\" disabled selected>\n                {{ data.outDate.placeholder }}\n            </option>\n            <option *ngFor=\"let opt of data.outDate.options\" value=\"{{ opt.value }}\">\n                {{ opt.value }}\n            </option>\n        </select>\n    </div>\n</div>"
    })
], FacetYearRangeComponent);
export { FacetYearRangeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQteWVhci1yYW5nZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmFjZXQteWVhci1yYW5nZS9mYWNldC15ZWFyLXJhbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixzQkFBc0I7QUFDdEIsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQW1GakQsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFLbEMsUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRO1FBQ3hCLFFBQVEsT0FBTyxFQUFFO1lBQ2YsS0FBSyxTQUFTO2dCQUFFO29CQUNkLGdDQUFnQztvQkFDaEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO29CQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUM7b0JBQ3RFLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUM7b0JBQy9ELG1DQUFtQztvQkFDbkMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN2RCxvQ0FBb0M7b0JBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7b0JBQ3ZDLGdEQUFnRDtvQkFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztvQkFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztvQkFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztpQkFDMUM7Z0JBQUMsTUFBTTtZQUNSLEtBQUssVUFBVTtnQkFDYixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO2dCQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUNuQyxpQ0FBaUM7Z0JBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNsQixPQUFPO29CQUNQLEtBQUssRUFBRTt3QkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSzt3QkFDNUIsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUs7cUJBQzVCO2lCQUNGLENBQUMsQ0FBQztnQkFDSCxNQUFNO1lBQ1I7Z0JBQ0UsTUFBTTtTQUNUO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUFwQ1U7SUFBUixLQUFLLEVBQUU7O3FEQUEwQjtBQUV6QjtJQUFSLEtBQUssRUFBRTs7cURBQVc7QUFIUix1QkFBdUI7SUFKbkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQiwwb0RBQXNDO0tBQ3ZDLENBQUM7R0FDVyx1QkFBdUIsQ0FxQ25DO1NBckNZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGQUNFVC1ZRUFSLVJBTkdFLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBGYWNldFllYXJSYW5nZUNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGluRGF0ZSAocmVxdWlyZWQpXG4gKiAtIHRleHQgKG9wdGlvbmFsKVxuICogLSBjbGFzc2VzIChvcHRpb25hbClcbiAqIC0gcGF5bG9hZCAocmVxdWlyZWQpXG4gKiAtIF9tZXRhIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBvdXREYXRlIChyZXF1aXJlZClcbiAqIC0gdGV4dCAob3B0aW9uYWwpXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxuICogLSBwYXlsb2FkIChyZXF1aXJlZClcbiAqIC0gX21ldGEgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IG9wdGlvbnMgKHJlcXVpcmVkKVxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgRmFjZXRZZWFyUmFuZ2VEYXRhIHtcbiAgLyoqXG4gICAqIGJlZ2lubmluZyB5ZWFyIHJhbmdlIHNlbGVjdGlvblxuICAgKi9cbiAgaW5EYXRlOiB7XG4gICAgLyoqXG4gICAgICogPHNlbGVjdD4gaGVhZGluZ1xuICAgICAqL1xuICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICAgKi9cbiAgICBjbGFzc2VzPzogYW55O1xuICAgIC8qKlxuICAgICAqIHBsYWNlaG9sZGVyIG9wdGlvblxuICAgICAqL1xuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIG9uQ2hhbmdlIHBheWxvYWRcbiAgICAgKi9cbiAgICBwYXlsb2FkOiBhbnk7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBkYXRhIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXG4gICAgICovXG4gICAgX21ldGE/OiBhbnk7XG4gICAgb3B0aW9uczogRmFjZXRPcHRpb25zW107XG4gIH07XG4gIC8qKlxuICAqIGVuZCB5ZWFyIHJhbmdlIHNlbGVjdGlvblxuICAqL1xuICBvdXREYXRlOiB7XG4gICAgLyoqXG4gICAgICogPHNlbGVjdD4gaGVhZGluZ1xuICAgICAqL1xuICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICAgKi9cbiAgICBjbGFzc2VzPzogYW55O1xuICAgIC8qKlxuICAgICAqIHBsYWNlaG9sZGVyIG9wdGlvblxuICAgICAqL1xuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIG9uQ2hhbmdlIHBheWxvYWRcbiAgICAgKi9cbiAgICBwYXlsb2FkOiBhbnk7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBkYXRhIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXG4gICAgICovXG4gICAgX21ldGE/OiBhbnk7XG4gICAgb3B0aW9uczogRmFjZXRPcHRpb25zW107XG4gIH07XG59XG5leHBvcnQgaW50ZXJmYWNlIEZhY2V0T3B0aW9ucyB7XG4gIC8qKlxuICAgKiB2YWx1ZSBvZiBlYWNoIDxvcHRpb24+XG4gICAqL1xuICB2YWx1ZTogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1mYWNldC15ZWFyLXJhbmdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZhY2V0LXllYXItcmFuZ2UuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRmFjZXRZZWFyUmFuZ2VDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBGYWNldFllYXJSYW5nZURhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIG9uQ2hhbmdlKHBheWxvYWQsIHNlbGVjdGVkKSB7XG4gICAgc3dpdGNoIChwYXlsb2FkKSB7XG4gICAgICBjYXNlICdpbi1kYXRlJzoge1xuICAgICAgICAvLyBmaW5kIGluZGV4IG9mIHNlbGVjdGVkIG9wdGlvblxuICAgICAgICBjb25zdCBvcHRzID0gdGhpcy5kYXRhLmluRGF0ZS5vcHRpb25zO1xuICAgICAgICB0aGlzLmRhdGEuaW5EYXRlLl9tZXRhID0gb3B0cy5maW5kKChvKSA9PiBvLnZhbHVlID09PSBzZWxlY3RlZCkudmFsdWU7XG4gICAgICAgIGNvbnN0IHNsaWNlSW5kZXggPSBvcHRzLmZpbmRJbmRleCgobykgPT4gby52YWx1ZSA9PT0gc2VsZWN0ZWQpO1xuICAgICAgICAvLyBtYWtlIG5ldyBhcnJheSBvZiBwb3NzaWJsZSB5ZWFyc1xuICAgICAgICBjb25zdCBuZXdPcHRpb25zID0gb3B0cy5zbGljZShzbGljZUluZGV4LCBvcHRzLmxlbmd0aCk7XG4gICAgICAgIC8vIGdpdmUgbmV3IGFycmF5IHRvIHNlY29uZCA8c2VsZWN0PlxuICAgICAgICB0aGlzLmRhdGEub3V0RGF0ZS5vcHRpb25zID0gbmV3T3B0aW9ucztcbiAgICAgICAgLy8gcmVtb3ZlIHBsYWNlaG9sZGVyIGFuZCBlbmFibGUgc2Vjb25kIDxzZWxlY3Q+XG4gICAgICAgIHRoaXMuZGF0YS5pbkRhdGUucGxhY2Vob2xkZXIgPSAnJztcbiAgICAgICAgdGhpcy5kYXRhLm91dERhdGUuY2xhc3NlcyA9ICcnO1xuICAgICAgICB0aGlzLmRhdGEub3V0RGF0ZS5wbGFjZWhvbGRlciA9ICdjaG9vc2UnO1xuICAgICAgfSBicmVhaztcbiAgICAgIGNhc2UgJ291dC1kYXRlJzpcbiAgICAgICAgdGhpcy5kYXRhLm91dERhdGUuX21ldGEgPSBzZWxlY3RlZDtcbiAgICAgICAgdGhpcy5kYXRhLm91dERhdGUucGxhY2Vob2xkZXIgPSAnJztcbiAgICAgICAgLy8gZW1pdCBzZWxlY3RlZCBmYWNldCBwYXJhbWV0ZXJzXG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJywge1xuICAgICAgICAgIHBheWxvYWQsXG4gICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIGZyb206IHRoaXMuZGF0YS5pbkRhdGUuX21ldGEsXG4gICAgICAgICAgICB0bzogdGhpcy5kYXRhLm91dERhdGUuX21ldGFcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIl19