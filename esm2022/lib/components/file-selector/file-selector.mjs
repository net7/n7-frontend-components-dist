//---------------------------
// FILE-SELECTOR.ts
//---------------------------
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class FileSelectorComponent {
    onFileSelected(eventTarget) {
        if (!this.emit)
            return;
        const input = eventTarget;
        const iterableFiles = Array.from(input.files);
        Promise.all(iterableFiles.map((file) => this.toBase64(file))).then((base64list) => {
            this.emit('change', {
                target: eventTarget,
                files: input.files,
                base64: base64list,
            });
        });
    }
    /** Obtain base64 string for upload and storage */
    toBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onerror = (err) => reject(err);
            reader.onload = () => resolve(reader.result);
            reader.readAsDataURL(file);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: FileSelectorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: FileSelectorComponent, selector: "n7-file-selector", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<ng-container *ngIf=\"data\">\n  <!-- HIDDEN NATIVE INPUT ELEMENT -->\n  <input\n    type=\"file\"\n    class=\"file-input\"\n    [accept]=\"data.accept\"\n    [multiple]=\"data.multiple\"\n    (change)=\"onFileSelected($event.target)\"\n    [ngStyle]=\"{'display': 'none'}\"\n    #fileUpload\n  />\n\n  <!-- CAPTURES THE CLICKS ON THE INNER CONTENT -->\n  <div class=\"n7-file-selector\" (click)=\"fileUpload.click()\">\n    <ng-content>\n      <!-- UI ELEMENTS FOR IMAGE UPLOAD -->\n    </ng-content>\n  </div>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: FileSelectorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-file-selector', template: "<ng-container *ngIf=\"data\">\n  <!-- HIDDEN NATIVE INPUT ELEMENT -->\n  <input\n    type=\"file\"\n    class=\"file-input\"\n    [accept]=\"data.accept\"\n    [multiple]=\"data.multiple\"\n    (change)=\"onFileSelected($event.target)\"\n    [ngStyle]=\"{'display': 'none'}\"\n    #fileUpload\n  />\n\n  <!-- CAPTURES THE CLICKS ON THE INNER CONTENT -->\n  <div class=\"n7-file-selector\" (click)=\"fileUpload.click()\">\n    <ng-content>\n      <!-- UI ELEMENTS FOR IMAGE UPLOAD -->\n    </ng-content>\n  </div>\n</ng-container>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2R2LWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9maWxlLXNlbGVjdG9yL2ZpbGUtc2VsZWN0b3IudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kdi1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZmlsZS1zZWxlY3Rvci9maWxlLXNlbGVjdG9yLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCO0FBQzdCLG1CQUFtQjtBQUNuQiw2QkFBNkI7QUFFN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQTJCakQsTUFBTSxPQUFPLHFCQUFxQjtJQUtoQyxjQUFjLENBQUMsV0FBVztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLE1BQU0sS0FBSyxHQUFxQixXQUFXLENBQUM7UUFDNUMsTUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ2hFLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsTUFBTSxFQUFFLFdBQVc7Z0JBQ25CLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztnQkFDbEIsTUFBTSxFQUFFLFVBQVU7YUFDbkIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsa0RBQWtEO0lBQ2xELFFBQVEsQ0FBQyxJQUFVO1FBQ2pCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsTUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztZQUNoQyxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzhHQTVCVSxxQkFBcUI7a0dBQXJCLHFCQUFxQixnR0MvQmxDLHFoQkFtQkE7OzJGRFlhLHFCQUFxQjtrQkFKakMsU0FBUzsrQkFDRSxrQkFBa0I7OEJBSW5CLElBQUk7c0JBQVosS0FBSztnQkFFRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRklMRS1TRUxFQ1RPUi50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgRmlsZVNlbGVjdG9yQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGaWxlU2VsZWN0b3JEYXRhIHtcbiAgLyoqXG4gICAqIEFjY2VwdGVkIGZpbGUgdHlwZXNcbiAgICogQGV4YW1wbGUgJy5qcGcsLnBuZycgJ2ltYWdlLyonXG4gICAqL1xuICBhY2NlcHQ/OiBzdHJpbmc7XG4gIC8qKiBBbGxvdyBzZWxlY3Rpb24gb2YgbXVsdGlwbGUgZmlsZXMgKi9cbiAgbXVsdGlwbGU/OiBib29sZWFuO1xuICAvKiogQWRkaXRpb25hbCBjbGFzc2VzIGZvciB0aGUgd3JhcHBpbmcgZWxlbWVudCAqL1xuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVTZWxlY3RvclBheWxvYWQge1xuICB0YXJnZXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGZpbGVzOiBGaWxlTGlzdDtcbiAgYmFzZTY0OiBBcnJheTxzdHJpbmcgfCBBcnJheUJ1ZmZlcj47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWZpbGUtc2VsZWN0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZS1zZWxlY3Rvci5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRmlsZVNlbGVjdG9yQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogRmlsZVNlbGVjdG9yRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiAodHlwZTogc3RyaW5nLCBwYXlsb2FkOiBGaWxlU2VsZWN0b3JQYXlsb2FkKSA9PiB2b2lkO1xuXG4gIG9uRmlsZVNlbGVjdGVkKGV2ZW50VGFyZ2V0KSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICBjb25zdCBpbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGV2ZW50VGFyZ2V0O1xuICAgIGNvbnN0IGl0ZXJhYmxlRmlsZXMgPSBBcnJheS5mcm9tKGlucHV0LmZpbGVzKTtcbiAgICBQcm9taXNlLmFsbChpdGVyYWJsZUZpbGVzLm1hcCgoZmlsZSkgPT4gdGhpcy50b0Jhc2U2NChmaWxlKSkpLnRoZW4oXG4gICAgICAoYmFzZTY0bGlzdCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHtcbiAgICAgICAgICB0YXJnZXQ6IGV2ZW50VGFyZ2V0LFxuICAgICAgICAgIGZpbGVzOiBpbnB1dC5maWxlcyxcbiAgICAgICAgICBiYXNlNjQ6IGJhc2U2NGxpc3QsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICAvKiogT2J0YWluIGJhc2U2NCBzdHJpbmcgZm9yIHVwbG9hZCBhbmQgc3RvcmFnZSAqL1xuICB0b0Jhc2U2NChmaWxlOiBGaWxlKTogUHJvbWlzZTxGaWxlUmVhZGVyWydyZXN1bHQnXT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLm9uZXJyb3IgPSAoZXJyKSA9PiByZWplY3QoZXJyKTtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJkYXRhXCI+XG4gIDwhLS0gSElEREVOIE5BVElWRSBJTlBVVCBFTEVNRU5UIC0tPlxuICA8aW5wdXRcbiAgICB0eXBlPVwiZmlsZVwiXG4gICAgY2xhc3M9XCJmaWxlLWlucHV0XCJcbiAgICBbYWNjZXB0XT1cImRhdGEuYWNjZXB0XCJcbiAgICBbbXVsdGlwbGVdPVwiZGF0YS5tdWx0aXBsZVwiXG4gICAgKGNoYW5nZSk9XCJvbkZpbGVTZWxlY3RlZCgkZXZlbnQudGFyZ2V0KVwiXG4gICAgW25nU3R5bGVdPVwieydkaXNwbGF5JzogJ25vbmUnfVwiXG4gICAgI2ZpbGVVcGxvYWRcbiAgLz5cblxuICA8IS0tIENBUFRVUkVTIFRIRSBDTElDS1MgT04gVEhFIElOTkVSIENPTlRFTlQgLS0+XG4gIDxkaXYgY2xhc3M9XCJuNy1maWxlLXNlbGVjdG9yXCIgKGNsaWNrKT1cImZpbGVVcGxvYWQuY2xpY2soKVwiPlxuICAgIDxuZy1jb250ZW50PlxuICAgICAgPCEtLSBVSSBFTEVNRU5UUyBGT1IgSU1BR0UgVVBMT0FEIC0tPlxuICAgIDwvbmctY29udGVudD5cbiAgPC9kaXY+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==