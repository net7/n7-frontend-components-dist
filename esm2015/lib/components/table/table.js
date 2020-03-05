/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/table/table.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// TABLE.ts
//---------------------------
import { Component, Input } from '@angular/core';
/**
 * Interface for row's cells
 *
 * \@property content (required)
 * \@property type (optional)
 * \@property classes (optional)
 * \@property payload (optional)
 * \@property _meta (optional)
 * @record
 */
export function Cell() { }
if (false) {
    /** @type {?} */
    Cell.prototype.content;
    /**
     * content type
     * @type {?|undefined}
     */
    Cell.prototype.type;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    Cell.prototype.classes;
    /**
     * action click's payload
     * @type {?|undefined}
     */
    Cell.prototype.payload;
    /**
     * additional info
     * @type {?|undefined}
     */
    Cell.prototype._meta;
}
/**
 * Interface for table's rows (head, body or foot rows)
 *
 * \@property cells (required)
 * \@property classes (optional)
 * \@property payload (optional)
 * \@property _meta (optional)
 * @record
 */
export function Row() { }
if (false) {
    /** @type {?} */
    Row.prototype.cells;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    Row.prototype.classes;
    /**
     * additional info
     * @type {?|undefined}
     */
    Row.prototype._meta;
}
/**
 * Interface for TableComponent's "data"
 *
 * \@property body (required)
 * \@property head (optional)
 * \@proprty foot (optional)
 * \@property classes (optional)
 * \@property payload (optional)
 * \@property _meta (optional)
 * @record
 */
export function TableData() { }
if (false) {
    /**
     * table's head
     * @type {?|undefined}
     */
    TableData.prototype.head;
    /**
     * table's body (the table its self)
     * @type {?}
     */
    TableData.prototype.body;
    /**
     * table's foot
     * @type {?|undefined}
     */
    TableData.prototype.foot;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    TableData.prototype.classes;
    /**
     * additional info
     * @type {?|undefined}
     */
    TableData.prototype._meta;
}
export class TableComponent {
    /**
     * @param {?} cellPayload
     * @return {?}
     */
    onCellClick(cellPayload) {
        if (!this.emit)
            return;
        this.emit('cellclick', cellPayload);
    }
    /**
     * @param {?} cellPayload
     * @return {?}
     */
    onCellDblClick(cellPayload) {
        if (!this.emit)
            return;
        this.emit('celldblclick', cellPayload);
    }
    /**
     * @param {?} cellPayload
     * @param {?} cellValue
     * @return {?}
     */
    onInputTextChange(cellPayload, cellValue) {
        if (!this.emit)
            return;
        /** @type {?} */
        const textChangePayload = { tcPayload: cellPayload, val: cellValue };
        this.emit('inputtextchange', textChangePayload);
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-table',
                template: "<section class=\"n7-table {{data.classes || ''}}\" *ngIf=\"data\">\r\n    <table class=\"n7-table__table\">\r\n    \t<thead class=\"n7-table__table-header\" *ngIf=\"data.head\">\r\n            <tr class=\"n7-table__table-header-row {{row.classes || ''}}\"\r\n                *ngFor=\"let row of data.head\">\r\n                <th class=\"n7-table__table-header-cell {{cell.classes || ''}}\"\r\n                    *ngFor=\"let cell of row.cells\"\r\n                    (click)=\"onCellClick(cell.payload)\"\r\n                    [innerHTML]=\"cell.content\">\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n\r\n        <tbody class=\"n7-table__table-body\" *ngIf=\"data.body\">\r\n            <tr class=\"n7-table__table-body-row {{row.classes || ''}}\"\r\n                *ngFor=\"let row of data.body; let rowHead of data.head\">\r\n                <td class=\"n7-table__table-body-cell {{cell.classes || ''}}\"\r\n                    *ngFor=\"let cell of row.cells; let cellHead of rowHead.cells\"\r\n                    (click)=\"onCellClick(cell.payload)\"\r\n                    (dblclick)=\"onCellDblClick(cell.payload)\"\r\n                    [attr.data-label]=\"cellHead.content\">\r\n                    <span   class=\"n7-table__table-body-cell-innerhtml\"\r\n                            *ngIf=\"!cell.type || cell.type=='html'\"\r\n                            [innerHTML]=\"cell.content\"></span>\r\n                    <input  class=\"n7-table__table-body-cell-inputtext\"\r\n                            *ngIf=\"cell.type=='input:text'\"\r\n                            type=\"text\" placeholder=\"{{cell.content}}\"\r\n                            id=\"{{cell._meta.inputId}}\"\r\n                            (keyup.enter)=\"onInputTextChange(cell.payload, $event.target.value)\"/>                        \r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n\r\n        <tfoot class=\"n7-table__table-footer\" *ngIf=\"data.foot\">\r\n            <tr class=\"n7-table__table-footer-row {{row.classes || ''}}\"\r\n                *ngFor=\"let row of data.foot\">\r\n                <td class=\"n7-table__table-footer-cell {{cell.classes || ''}}\"\r\n                    *ngFor=\"let cell of row.cells\"\r\n                    (click)=\"onCellClick(cell.payload)\"\r\n                    [innerHTML]=\"cell.content\">\r\n                </td>\r\n            </tr>\r\n        </tfoot>        \r\n \t </table> \r\n</section>\r\n"
            }] }
];
TableComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TableComponent.prototype.data;
    /** @type {?} */
    TableComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7O0FBV2pELDBCQXFCQzs7O0lBakJHLHVCQUFhOzs7OztJQUliLG9CQUE2Qjs7Ozs7SUFJN0IsdUJBQWlCOzs7OztJQUlqQix1QkFBYzs7Ozs7SUFJZCxxQkFBWTs7Ozs7Ozs7Ozs7QUFXaEIseUJBYUM7OztJQVRHLG9CQUFjOzs7OztJQUlkLHNCQUFpQjs7Ozs7SUFJakIsb0JBQVk7Ozs7Ozs7Ozs7Ozs7QUFhaEIsK0JBcUJDOzs7Ozs7SUFqQkcseUJBQWE7Ozs7O0lBSWIseUJBQVk7Ozs7O0lBSVoseUJBQWE7Ozs7O0lBSWIsNEJBQWlCOzs7OztJQUlqQiwwQkFBWTs7QUFPaEIsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBTXZCLFdBQVcsQ0FBQyxXQUFXO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsV0FBVztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7OztJQUVELGlCQUFpQixDQUFDLFdBQVcsRUFBRSxTQUFpQjtRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPOztjQUVqQixpQkFBaUIsR0FBRyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRTtRQUVwRSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDbEQsQ0FBQzs7O1lBNUJKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIseTdFQUEyQjthQUM1Qjs7O21CQUVJLEtBQUs7bUJBRUwsS0FBSzs7OztJQUZOLDhCQUF5Qjs7SUFFekIsOEJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gVEFCTEUudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIHJvdydzIGNlbGxzXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBjb250ZW50IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHR5cGUgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2VsbCB7XHJcbiAgICAvKlxyXG4gICAgICogaW5uZXIgaHRtbCBvciBoaW50IGZvciB0aGUgaW5wdXQgdGV4dCwgZGVwZW5kaW5nIG9uIFwidHlwZVwiXHJcbiAgICAqL1xyXG4gICAgY29udGVudDogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBjb250ZW50IHR5cGVcclxuICAgICAqL1xyXG4gICAgdHlwZT86ICdodG1sJyB8ICdpbnB1dDp0ZXh0JztcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgICAqL1xyXG4gICAgY2xhc3Nlcz86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICAgICovXHJcbiAgICBwYXlsb2FkPzogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgICAqL1xyXG4gICAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIHRhYmxlJ3Mgcm93cyAoaGVhZCwgYm9keSBvciBmb290IHJvd3MpXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBjZWxscyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBSb3cge1xyXG4gICAgLypcclxuICAgICAqIHJvdydzIGNlbGxzXHJcbiAgICAqL1xyXG4gICAgY2VsbHM6IENlbGxbXTtcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgICAqL1xyXG4gICAgY2xhc3Nlcz86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICAgKi9cclxuICAgIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBUYWJsZUNvbXBvbmVudCdzIFwiZGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBib2R5IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGhlYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcHJ0eSBmb290IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlRGF0YSB7XHJcbiAgICAvKipcclxuICAgICAqIHRhYmxlJ3MgaGVhZFxyXG4gICAgICovXHJcbiAgICBoZWFkPzogUm93W107XHJcbiAgICAvKipcclxuICAgICAqIHRhYmxlJ3MgYm9keSAodGhlIHRhYmxlIGl0cyBzZWxmKVxyXG4gICAgICovXHJcbiAgICBib2R5OiBSb3dbXTtcclxuICAgIC8qKlxyXG4gICAgICogdGFibGUncyBmb290XHJcbiAgICAgKi9cclxuICAgIGZvb3Q/OiBSb3dbXTtcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgICAqL1xyXG4gICAgY2xhc3Nlcz86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICAgKi9cclxuICAgIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LXRhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGRhdGE6IFRhYmxlRGF0YTtcclxuXHJcbiAgICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG5cclxuICAgIG9uQ2VsbENsaWNrKGNlbGxQYXlsb2FkKSB7XHJcbiAgICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ2NlbGxjbGljaycsIGNlbGxQYXlsb2FkKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNlbGxEYmxDbGljayhjZWxsUGF5bG9hZCkge1xyXG4gICAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdjZWxsZGJsY2xpY2snLCBjZWxsUGF5bG9hZCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnB1dFRleHRDaGFuZ2UoY2VsbFBheWxvYWQsIGNlbGxWYWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcblxyXG4gICAgICBjb25zdCB0ZXh0Q2hhbmdlUGF5bG9hZCA9IHsgdGNQYXlsb2FkOiBjZWxsUGF5bG9hZCwgdmFsOiBjZWxsVmFsdWUgfTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgnaW5wdXR0ZXh0Y2hhbmdlJywgdGV4dENoYW5nZVBheWxvYWQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==