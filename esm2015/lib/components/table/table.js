//---------------------------
// TABLE.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let TableComponent = class TableComponent {
    onCellClick(cellPayload) {
        if (!this.emit)
            return;
        this.emit('cellclick', cellPayload);
    }
    onCellDblClick(cellPayload) {
        if (!this.emit)
            return;
        this.emit('celldblclick', cellPayload);
    }
    onInputTextChange(cellPayload, cellValue) {
        if (!this.emit)
            return;
        const textChangePayload = { tcPayload: cellPayload, val: cellValue };
        this.emit('inputtextchange', textChangePayload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "emit", void 0);
TableComponent = __decorate([
    Component({
        selector: 'n7-table',
        template: "<section class=\"n7-table {{data.classes || ''}}\" *ngIf=\"data\">\r\n    <table class=\"n7-table__table\">\r\n    \t<thead class=\"n7-table__table-header\" *ngIf=\"data.head\">\r\n            <tr class=\"n7-table__table-header-row {{row.classes || ''}}\"\r\n                *ngFor=\"let row of data.head\">\r\n                <th class=\"n7-table__table-header-cell {{cell.classes || ''}}\"\r\n                    *ngFor=\"let cell of row.cells\"\r\n                    (click)=\"onCellClick(cell.payload)\"\r\n                    [innerHTML]=\"cell.content\">\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n\r\n        <tbody class=\"n7-table__table-body\" *ngIf=\"data.body\">\r\n            <tr class=\"n7-table__table-body-row {{row.classes || ''}}\"\r\n                *ngFor=\"let row of data.body\">\r\n                <td class=\"n7-table__table-body-cell {{cell.classes || ''}}\"\r\n                    *ngFor=\"let cell of row.cells; let i = index\"\r\n                    (click)=\"onCellClick(cell.payload)\"\r\n                    (dblclick)=\"onCellDblClick(cell.payload)\"\r\n                    [attr.aria-label]=\"data.head[0].cells[i].content\"\r\n                    >\r\n                    <span   class=\"n7-table__table-body-cell-innerhtml\"\r\n                            *ngIf=\"!cell.type || cell.type=='html'\"\r\n                            [innerHTML]=\"cell.content\"></span>\r\n                    <input  class=\"n7-table__table-body-cell-inputtext\"\r\n                            *ngIf=\"cell.type=='input:text'\"\r\n                            type=\"text\" placeholder=\"{{cell.content}}\"\r\n                            id=\"{{cell._meta.inputId}}\"\r\n                            (keyup.enter)=\"onInputTextChange(cell.payload, $event.target.value)\"/>                        \r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n\r\n        <tfoot class=\"n7-table__table-footer\" *ngIf=\"data.foot\">\r\n            <tr class=\"n7-table__table-footer-row {{row.classes || ''}}\"\r\n                *ngFor=\"let row of data.foot\">\r\n                <td class=\"n7-table__table-footer-cell {{cell.classes || ''}}\"\r\n                    *ngFor=\"let cell of row.cells\"\r\n                    (click)=\"onCellClick(cell.payload)\"\r\n                    [innerHTML]=\"cell.content\">\r\n                </td>\r\n            </tr>\r\n        </tfoot>        \r\n \t </table> \r\n</section>\r\n"
    })
], TableComponent);
export { TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixXQUFXO0FBQ1gsNkJBQTZCOztBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQThGakQsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQU12QixXQUFXLENBQUMsV0FBVztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxjQUFjLENBQUMsV0FBVztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsU0FBaUI7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV2QixNQUFNLGlCQUFpQixHQUFHLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUM7UUFFckUsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Q0FDSixDQUFBO0FBeEJZO0lBQVIsS0FBSyxFQUFFOzs0Q0FBaUI7QUFFaEI7SUFBUixLQUFLLEVBQUU7OzRDQUFXO0FBSFYsY0FBYztJQUoxQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsVUFBVTtRQUNwQixvN0VBQTJCO0tBQzVCLENBQUM7R0FDVyxjQUFjLENBeUIxQjtTQXpCWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gVEFCTEUudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIHJvdydzIGNlbGxzXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBjb250ZW50IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHR5cGUgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2VsbCB7XHJcbiAgICAvKlxyXG4gICAgICogaW5uZXIgaHRtbCBvciBoaW50IGZvciB0aGUgaW5wdXQgdGV4dCwgZGVwZW5kaW5nIG9uIFwidHlwZVwiXHJcbiAgICAqL1xyXG4gICAgY29udGVudDogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBjb250ZW50IHR5cGVcclxuICAgICAqL1xyXG4gICAgdHlwZT86ICdodG1sJyB8ICdpbnB1dDp0ZXh0JztcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgICAqL1xyXG4gICAgY2xhc3Nlcz86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICAgICovXHJcbiAgICBwYXlsb2FkPzogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgICAqL1xyXG4gICAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIHRhYmxlJ3Mgcm93cyAoaGVhZCwgYm9keSBvciBmb290IHJvd3MpXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBjZWxscyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBSb3cge1xyXG4gICAgLypcclxuICAgICAqIHJvdydzIGNlbGxzXHJcbiAgICAqL1xyXG4gICAgY2VsbHM6IENlbGxbXTtcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgICAqL1xyXG4gICAgY2xhc3Nlcz86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICAgKi9cclxuICAgIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBUYWJsZUNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBib2R5IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGhlYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcHJ0eSBmb290IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlRGF0YSB7XHJcbiAgICAvKipcclxuICAgICAqIHRhYmxlJ3MgaGVhZFxyXG4gICAgICovXHJcbiAgICBoZWFkPzogUm93W107XHJcbiAgICAvKipcclxuICAgICAqIHRhYmxlJ3MgYm9keSAodGhlIHRhYmxlIGl0cyBzZWxmKVxyXG4gICAgICovXHJcbiAgICBib2R5OiBSb3dbXTtcclxuICAgIC8qKlxyXG4gICAgICogdGFibGUncyBmb290XHJcbiAgICAgKi9cclxuICAgIGZvb3Q/OiBSb3dbXTtcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgICAqL1xyXG4gICAgY2xhc3Nlcz86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICAgKi9cclxuICAgIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LXRhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGRhdGE6IFRhYmxlRGF0YTtcclxuXHJcbiAgICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG5cclxuICAgIG9uQ2VsbENsaWNrKGNlbGxQYXlsb2FkKSB7XHJcbiAgICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ2NlbGxjbGljaycsIGNlbGxQYXlsb2FkKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNlbGxEYmxDbGljayhjZWxsUGF5bG9hZCkge1xyXG4gICAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdjZWxsZGJsY2xpY2snLCBjZWxsUGF5bG9hZCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnB1dFRleHRDaGFuZ2UoY2VsbFBheWxvYWQsIGNlbGxWYWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcblxyXG4gICAgICBjb25zdCB0ZXh0Q2hhbmdlUGF5bG9hZCA9IHsgdGNQYXlsb2FkOiBjZWxsUGF5bG9hZCwgdmFsOiBjZWxsVmFsdWUgfTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgnaW5wdXR0ZXh0Y2hhbmdlJywgdGV4dENoYW5nZVBheWxvYWQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==