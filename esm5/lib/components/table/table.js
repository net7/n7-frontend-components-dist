/**
 * @fileoverview added by tsickle
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
var TableComponent = /** @class */ (function () {
    function TableComponent() {
    }
    /**
     * @param {?} cell_payload
     * @return {?}
     */
    TableComponent.prototype.onCellClick = /**
     * @param {?} cell_payload
     * @return {?}
     */
    function (cell_payload) {
        if (!this.emit)
            return;
        this.emit('cellclick', cell_payload);
    };
    /**
     * @param {?} cell_payload
     * @return {?}
     */
    TableComponent.prototype.onCellDblClick = /**
     * @param {?} cell_payload
     * @return {?}
     */
    function (cell_payload) {
        if (!this.emit)
            return;
        this.emit('celldblclick', cell_payload);
    };
    /**
     * @param {?} cell_payload
     * @param {?} cell_value
     * @return {?}
     */
    TableComponent.prototype.onInputTextChange = /**
     * @param {?} cell_payload
     * @param {?} cell_value
     * @return {?}
     */
    function (cell_payload, cell_value) {
        if (!this.emit)
            return;
        /** @type {?} */
        var textChange_payload = { tc_payload: cell_payload, val: cell_value };
        this.emit('inputtextchange', textChange_payload);
    };
    TableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-table',
                    template: "<section class=\"n7-table {{data.classes || ''}}\" *ngIf=\"data\">\r\n    <table class=\"n7-table__table\">\r\n    \t<thead class=\"n7-table__table-header\" *ngIf=\"data.head\">\r\n            <tr class=\"n7-table__table-header-row {{row.classes || ''}}\"\r\n                *ngFor=\"let row of data.head\">\r\n                <th class=\"n7-table__table-header-cell {{cell.classes || ''}}\"\r\n                    *ngFor=\"let cell of row.cells\"\r\n                    (click)=\"onCellClick(cell.payload)\"\r\n                    [innerHTML]=\"cell.content\">\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n\r\n        <tbody class=\"n7-table__table-body\" *ngIf=\"data.body\">\r\n            <tr class=\"n7-table__table-body-row {{row.classes || ''}}\"\r\n                *ngFor=\"let row of data.body; let rowHead of data.head\">\r\n                <td class=\"n7-table__table-body-cell {{cell.classes || ''}}\"\r\n                    *ngFor=\"let cell of row.cells; let cellHead of rowHead.cells\"\r\n                    (click)=\"onCellClick(cell.payload)\"\r\n                    (dblclick)=\"onCellDblClick(cell.payload)\"\r\n                    [attr.data-label]=\"cellHead.content\">\r\n                    <span   class=\"n7-table__table-body-cell-innerhtml\"\r\n                            *ngIf=\"!cell.type || cell.type=='html'\"\r\n                            [innerHTML]=\"cell.content\"></span>\r\n                    <input  class=\"n7-table__table-body-cell-inputtext\"\r\n                            *ngIf=\"cell.type=='input:text'\"\r\n                            type=\"text\" placeholder=\"{{cell.content}}\"\r\n                            id=\"{{cell._meta.input_id}}\"\r\n                            (keyup.enter)=\"onInputTextChange(cell.payload, $event.target.value)\"/>                        \r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n\r\n        <tfoot class=\"n7-table__table-footer\" *ngIf=\"data.foot\">\r\n            <tr class=\"n7-table__table-footer-row {{row.classes || ''}}\"\r\n                *ngFor=\"let row of data.foot\">\r\n                <td class=\"n7-table__table-footer-cell {{cell.classes || ''}}\"\r\n                    *ngFor=\"let cell of row.cells\"\r\n                    (click)=\"onCellClick(cell.payload)\"\r\n                    [innerHTML]=\"cell.content\">\r\n                </td>\r\n            </tr>\r\n        </tfoot>        \r\n \t </table> \r\n</section>"
                }] }
    ];
    TableComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return TableComponent;
}());
export { TableComponent };
if (false) {
    /** @type {?} */
    TableComponent.prototype.data;
    /** @type {?} */
    TableComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7QUFXakQsMkJBcUJDOzs7SUFqQkcsd0JBQWE7Ozs7O0lBSWIscUJBQTZCOzs7OztJQUk3Qix3QkFBaUI7Ozs7O0lBSWpCLHdCQUFjOzs7OztJQUlkLHNCQUFZOzs7Ozs7Ozs7OztBQVdoQiwwQkFhQzs7O0lBVEcscUJBQWU7Ozs7O0lBSWYsdUJBQWlCOzs7OztJQUlqQixxQkFBWTs7Ozs7Ozs7Ozs7OztBQWFoQixnQ0FxQkM7Ozs7OztJQWpCRywwQkFBYzs7Ozs7SUFJZCwwQkFBYTs7Ozs7SUFJYiwwQkFBYzs7Ozs7SUFJZCw2QkFBaUI7Ozs7O0lBSWpCLDJCQUFZOztBQUdoQjtJQUFBO0lBNEJBLENBQUM7Ozs7O0lBbkJHLG9DQUFXOzs7O0lBQVgsVUFBWSxZQUFZO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCx1Q0FBYzs7OztJQUFkLFVBQWUsWUFBWTtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7OztJQUVELDBDQUFpQjs7Ozs7SUFBakIsVUFBa0IsWUFBWSxFQUFFLFVBQWtCO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87O1lBRWpCLGtCQUFrQixHQUFHLEVBQUMsVUFBVSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFDO1FBRXRFLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUNyRCxDQUFDOztnQkEzQkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxVQUFVO29CQUNwQixzN0VBQTJCO2lCQUM5Qjs7O3VCQUVJLEtBQUs7dUJBQ0wsS0FBSzs7SUFzQlYscUJBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQXhCWSxjQUFjOzs7SUFDdkIsOEJBQTBCOztJQUMxQiw4QkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBUQUJMRS50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3Igcm93J3MgY2VsbHNcclxuICogXHJcbiAqIEBwcm9wZXJ0eSBjb250ZW50IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHR5cGUgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNlbGwge1xyXG4gICAgLypcclxuICAgICAqIGlubmVyIGh0bWwgb3IgaGludCBmb3IgdGhlIGlucHV0IHRleHQsIGRlcGVuZGluZyBvbiBcInR5cGVcIlxyXG4gICAgKi9cclxuICAgIGNvbnRlbnQ6IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogY29udGVudCB0eXBlXHJcbiAgICAgKi9cclxuICAgIHR5cGU/OiAnaHRtbCcgfCAnaW5wdXQ6dGV4dCc7ICAgXHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICAgKi9cclxuICAgIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcclxuICAgICAqL1xyXG4gICAgcGF5bG9hZD86IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICAgKi9cclxuICAgIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciB0YWJsZSdzIHJvd3MgKGhlYWQsIGJvZHkgb3IgZm9vdCByb3dzKVxyXG4gKiBcclxuICogQHByb3BlcnR5IGNlbGxzIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElSb3cge1xyXG4gICAgLypcclxuICAgICAqIHJvdydzIGNlbGxzXHJcbiAgICAqL1xyXG4gICAgY2VsbHM6IElDZWxsW107XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICAgKi9cclxuICAgIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaW5mb1xyXG4gICAgICovXHJcbiAgICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgVGFibGVDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKiBcclxuICogQHByb3BlcnR5IGJvZHkgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgaGVhZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wcnR5IGZvb3QgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlRGF0YSB7XHJcbiAgICAvKipcclxuICAgICAqIHRhYmxlJ3MgaGVhZFxyXG4gICAgICovXHJcbiAgICBoZWFkPzogSVJvd1tdO1xyXG4gICAgLyoqXHJcbiAgICAgKiB0YWJsZSdzIGJvZHkgKHRoZSB0YWJsZSBpdHMgc2VsZilcclxuICAgICAqL1xyXG4gICAgYm9keTogSVJvd1tdO1xyXG4gICAgLyoqXHJcbiAgICAgKiB0YWJsZSdzIGZvb3RcclxuICAgICAqL1xyXG4gICAgZm9vdD86IElSb3dbXTtcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgICAqL1xyXG4gICAgY2xhc3Nlcz86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICAgKi9cclxuICAgIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbjctdGFibGUnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBkYXRhOiBJVGFibGVEYXRhO1xyXG4gICAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuXHJcbiAgICBvbkNlbGxDbGljayhjZWxsX3BheWxvYWQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmVtaXQoJ2NlbGxjbGljaycsIGNlbGxfcGF5bG9hZCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DZWxsRGJsQ2xpY2soY2VsbF9wYXlsb2FkKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5lbWl0KCdjZWxsZGJsY2xpY2snLCBjZWxsX3BheWxvYWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5wdXRUZXh0Q2hhbmdlKGNlbGxfcGF5bG9hZCwgY2VsbF92YWx1ZTogc3RyaW5nICkgeyAgXHJcbiAgICAgICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgdGV4dENoYW5nZV9wYXlsb2FkID0ge3RjX3BheWxvYWQ6IGNlbGxfcGF5bG9hZCwgdmFsOiBjZWxsX3ZhbHVlfTtcclxuXHJcbiAgICAgICAgdGhpcy5lbWl0KCdpbnB1dHRleHRjaGFuZ2UnLCB0ZXh0Q2hhbmdlX3BheWxvYWQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==