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
export function ICell() { }
if (false) {
    /** @type {?} */
    ICell.prototype.content;
    /**
     * content type
     * @type {?|undefined}
     */
    ICell.prototype.type;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    ICell.prototype.classes;
    /**
     * action click's payload
     * @type {?|undefined}
     */
    ICell.prototype.payload;
    /**
     * additional info
     * @type {?|undefined}
     */
    ICell.prototype._meta;
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
export function IRow() { }
if (false) {
    /** @type {?} */
    IRow.prototype.cells;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    IRow.prototype.classes;
    /**
     * additional info
     * @type {?|undefined}
     */
    IRow.prototype._meta;
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
export function ITableData() { }
if (false) {
    /**
     * table's head
     * @type {?|undefined}
     */
    ITableData.prototype.head;
    /**
     * table's body (the table its self)
     * @type {?}
     */
    ITableData.prototype.body;
    /**
     * table's foot
     * @type {?|undefined}
     */
    ITableData.prototype.foot;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    ITableData.prototype.classes;
    /**
     * additional info
     * @type {?|undefined}
     */
    ITableData.prototype._meta;
}
export class TableComponent {
    /**
     * @param {?} cell_payload
     * @return {?}
     */
    onCellClick(cell_payload) {
        if (!this.emit)
            return;
        this.emit('cellclick', cell_payload);
    }
    /**
     * @param {?} cell_payload
     * @return {?}
     */
    onCellDblClick(cell_payload) {
        if (!this.emit)
            return;
        this.emit('celldblclick', cell_payload);
    }
    /**
     * @param {?} cell_payload
     * @param {?} cell_value
     * @return {?}
     */
    onInputTextChange(cell_payload, cell_value) {
        if (!this.emit)
            return;
        /** @type {?} */
        const textChange_payload = { tc_payload: cell_payload, val: cell_value };
        this.emit('inputtextchange', textChange_payload);
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-table',
                template: "<section class=\"n7-table {{data.classes || ''}}\" *ngIf=\"data\">\n    <table class=\"n7-table__table\">\n    \t<thead class=\"n7-table__table-header\" *ngIf=\"data.head\">\n            <tr class=\"n7-table__table-header-row {{row.classes || ''}}\"\n                *ngFor=\"let row of data.head\">\n                <th class=\"n7-table__table-header-cell {{cell.classes || ''}}\"\n                    *ngFor=\"let cell of row.cells\"\n                    (click)=\"onCellClick(cell.payload)\"\n                    [innerHTML]=\"cell.content\">\n                </th>\n            </tr>\n        </thead>\n\n        <tbody class=\"n7-table__table-body\" *ngIf=\"data.body\">\n            <tr class=\"n7-table__table-body-row {{row.classes || ''}}\"\n                *ngFor=\"let row of data.body; let rowHead of data.head\">\n                <td class=\"n7-table__table-body-cell {{cell.classes || ''}}\"\n                    *ngFor=\"let cell of row.cells; let cellHead of rowHead.cells\"\n                    (click)=\"onCellClick(cell.payload)\"\n                    (dblclick)=\"onCellDblClick(cell.payload)\"\n                    [attr.data-label]=\"cellHead.content\">\n                    <span   class=\"n7-table__table-body-cell-innerhtml\"\n                            *ngIf=\"!cell.type || cell.type=='html'\"\n                            [innerHTML]=\"cell.content\"></span>\n                    <input  class=\"n7-table__table-body-cell-inputtext\"\n                            *ngIf=\"cell.type=='input:text'\"\n                            type=\"text\" placeholder=\"{{cell.content}}\"\n                            id=\"{{cell._meta.input_id}}\"\n                            (keyup.enter)=\"onInputTextChange(cell.payload, $event.target.value)\"/>                        \n                </td>\n            </tr>\n        </tbody>\n\n        <tfoot class=\"n7-table__table-footer\" *ngIf=\"data.foot\">\n            <tr class=\"n7-table__table-footer-row {{row.classes || ''}}\"\n                *ngFor=\"let row of data.foot\">\n                <td class=\"n7-table__table-footer-cell {{cell.classes || ''}}\"\n                    *ngFor=\"let cell of row.cells\"\n                    (click)=\"onCellClick(cell.payload)\"\n                    [innerHTML]=\"cell.content\">\n                </td>\n            </tr>\n        </tfoot>        \n \t </table> \n</section>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7O0FBV2pELDJCQXFCQzs7O0lBakJHLHdCQUFhOzs7OztJQUliLHFCQUE2Qjs7Ozs7SUFJN0Isd0JBQWlCOzs7OztJQUlqQix3QkFBYzs7Ozs7SUFJZCxzQkFBWTs7Ozs7Ozs7Ozs7QUFXaEIsMEJBYUM7OztJQVRHLHFCQUFlOzs7OztJQUlmLHVCQUFpQjs7Ozs7SUFJakIscUJBQVk7Ozs7Ozs7Ozs7Ozs7QUFhaEIsZ0NBcUJDOzs7Ozs7SUFqQkcsMEJBQWM7Ozs7O0lBSWQsMEJBQWE7Ozs7O0lBSWIsMEJBQWM7Ozs7O0lBSWQsNkJBQWlCOzs7OztJQUlqQiwyQkFBWTs7QUFPaEIsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBS3ZCLFdBQVcsQ0FBQyxZQUFZO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsWUFBWTtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7OztJQUVELGlCQUFpQixDQUFDLFlBQVksRUFBRSxVQUFrQjtRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPOztjQUVqQixrQkFBa0IsR0FBRyxFQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBQztRQUV0RSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7O1lBM0JKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsODFFQUEyQjthQUM5Qjs7O21CQUVJLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLDhCQUEwQjs7SUFDMUIsOEJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRBQkxFLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciByb3cncyBjZWxsc1xuICogXG4gKiBAcHJvcGVydHkgY29udGVudCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgdHlwZSAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElDZWxsIHtcbiAgICAvKlxuICAgICAqIGlubmVyIGh0bWwgb3IgaGludCBmb3IgdGhlIGlucHV0IHRleHQsIGRlcGVuZGluZyBvbiBcInR5cGVcIlxuICAgICovXG4gICAgY29udGVudDogYW55O1xuICAgIC8qKlxuICAgICAqIGNvbnRlbnQgdHlwZVxuICAgICAqL1xuICAgIHR5cGU/OiAnaHRtbCcgfCAnaW5wdXQ6dGV4dCc7ICAgXG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICAgKi9cbiAgICBjbGFzc2VzPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgICAgKi9cbiAgICBwYXlsb2FkPzogYW55O1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgICAqL1xuICAgIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgdGFibGUncyByb3dzIChoZWFkLCBib2R5IG9yIGZvb3Qgcm93cylcbiAqIFxuICogQHByb3BlcnR5IGNlbGxzIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVJvdyB7XG4gICAgLypcbiAgICAgKiByb3cncyBjZWxsc1xuICAgICovXG4gICAgY2VsbHM6IElDZWxsW107XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICAgKi9cbiAgICBjbGFzc2VzPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaW5mb1xuICAgICAqL1xuICAgIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgVGFibGVDb21wb25lbnQncyBcImRhdGFcIlxuICogXG4gKiBAcHJvcGVydHkgYm9keSAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgaGVhZCAob3B0aW9uYWwpXG4gKiBAcHJvcHJ0eSBmb290IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlRGF0YSB7XG4gICAgLyoqXG4gICAgICogdGFibGUncyBoZWFkXG4gICAgICovXG4gICAgaGVhZD86IElSb3dbXTtcbiAgICAvKipcbiAgICAgKiB0YWJsZSdzIGJvZHkgKHRoZSB0YWJsZSBpdHMgc2VsZilcbiAgICAgKi9cbiAgICBib2R5OiBJUm93W107XG4gICAgLyoqXG4gICAgICogdGFibGUncyBmb290XG4gICAgICovXG4gICAgZm9vdD86IElSb3dbXTtcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgICAqL1xuICAgIGNsYXNzZXM/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBpbmZvXG4gICAgICovXG4gICAgX21ldGE/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbjctdGFibGUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgZGF0YTogSVRhYmxlRGF0YTtcbiAgICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cblxuICAgIG9uQ2VsbENsaWNrKGNlbGxfcGF5bG9hZCkge1xuICAgICAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuZW1pdCgnY2VsbGNsaWNrJywgY2VsbF9wYXlsb2FkKTtcbiAgICB9XG5cbiAgICBvbkNlbGxEYmxDbGljayhjZWxsX3BheWxvYWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgICAgICB0aGlzLmVtaXQoJ2NlbGxkYmxjbGljaycsIGNlbGxfcGF5bG9hZCk7XG4gICAgfVxuXG4gICAgb25JbnB1dFRleHRDaGFuZ2UoY2VsbF9wYXlsb2FkLCBjZWxsX3ZhbHVlOiBzdHJpbmcgKSB7ICBcbiAgICAgICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgICAgICBjb25zdCB0ZXh0Q2hhbmdlX3BheWxvYWQgPSB7dGNfcGF5bG9hZDogY2VsbF9wYXlsb2FkLCB2YWw6IGNlbGxfdmFsdWV9O1xuXG4gICAgICAgIHRoaXMuZW1pdCgnaW5wdXR0ZXh0Y2hhbmdlJywgdGV4dENoYW5nZV9wYXlsb2FkKTtcbiAgICB9XG59XG4iXX0=