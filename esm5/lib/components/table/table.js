/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.emit('cellClick', cell_payload);
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
        this.emit('cellDblClick', cell_payload);
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
        this.emit('inputTextChange', textChange_payload);
    };
    TableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-table',
                    template: "<section class=\"n7-table {{data.classes || ''}}\" *ngIf=\"data\">\n    <table class=\"n7-table__table\">\n    \t<thead class=\"n7-table__table-header\" *ngIf=\"data.head\">\n            <tr class=\"n7-table__table-header-row {{row.classes || ''}}\"\n                *ngFor=\"let row of data.head\">\n                <th class=\"n7-table__table-header-cell {{cell.classes || ''}}\"\n                    *ngFor=\"let cell of row.cells\"\n                    (click)=\"onCellClick(cell.payload)\"\n                    [innerHTML]=\"cell.content\">\n                        <!-- {{ cell.content }} -->\n                </th>\n            </tr>\n        </thead>\n\n        <tbody class=\"n7-table__table-body\" *ngIf=\"data.body\">\n            <tr class=\"n7-table__table-body-row {{row.classes || ''}}\"\n                *ngFor=\"let row of data.body; let rowHead of data.head\">\n                <td class=\"n7-table__table-body-cell {{cell.classes || ''}}\"\n                    *ngFor=\"let cell of row.cells; let cellHead of rowHead.cells\"\n                    (click)=\"onCellClick(cell.payload)\"\n                    (dblclick)=\"onCellDblClick(cell.payload)\"\n                    [attr.data-label]=\"cellHead.content\">\n                    <span   class=\"n7-table__table-body-cell-innerhtml\"\n                            *ngIf=\"!cell.type || cell.type=='html'\"\n                            [innerHTML]=\"cell.content\"></span>\n                    <input  class=\"n7-table__table-body-cell-inputtext\"\n                            *ngIf=\"cell.type=='input:text'\"\n                            type=\"text\" placeholder=\"{{cell.content}}\"\n                            id=\"{{cell._meta.input_id}}\"\n                            (keyup.enter)=\"onInputTextChange(cell.payload, $event.target.value)\"/>                        \n                </td>\n            </tr>\n        </tbody>\n\n        <tfoot class=\"n7-table__table-footer\" *ngIf=\"data.foot\">\n            <tr class=\"n7-table__table-footer-row {{row.classes || ''}}\"\n                *ngFor=\"let row of data.foot\">\n                <td class=\"n7-table__table-footer-cell {{cell.classes || ''}}\"\n                    *ngFor=\"let cell of row.cells\"\n                    (click)=\"onCellClick(cell.payload)\"\n                    [innerHTML]=\"cell.content\">\n                        <!-- {{ cell.content }} -->\n                </td>\n            </tr>\n        </tfoot>        \n \t </table> \n</section>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7QUFXakQsMkJBcUJDOzs7SUFqQkcsd0JBQWE7Ozs7O0lBSWIscUJBQTZCOzs7OztJQUk3Qix3QkFBaUI7Ozs7O0lBSWpCLHdCQUFjOzs7OztJQUlkLHNCQUFZOzs7Ozs7Ozs7OztBQVdoQiwwQkFhQzs7O0lBVEcscUJBQWU7Ozs7O0lBSWYsdUJBQWlCOzs7OztJQUlqQixxQkFBWTs7Ozs7Ozs7Ozs7OztBQWFoQixnQ0FxQkM7Ozs7OztJQWpCRywwQkFBYzs7Ozs7SUFJZCwwQkFBYTs7Ozs7SUFJYiwwQkFBYzs7Ozs7SUFJZCw2QkFBaUI7Ozs7O0lBSWpCLDJCQUFZOztBQUdoQjtJQUFBO0lBNEJBLENBQUM7Ozs7O0lBbkJHLG9DQUFXOzs7O0lBQVgsVUFBWSxZQUFZO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCx1Q0FBYzs7OztJQUFkLFVBQWUsWUFBWTtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7OztJQUVELDBDQUFpQjs7Ozs7SUFBakIsVUFBa0IsWUFBWSxFQUFFLFVBQWtCO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87O1lBRWpCLGtCQUFrQixHQUFHLEVBQUMsVUFBVSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFDO1FBRXRFLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUNyRCxDQUFDOztnQkEzQkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxVQUFVO29CQUNwQix3OEVBQTJCO2lCQUM5Qjs7O3VCQUVJLEtBQUs7dUJBQ0wsS0FBSzs7SUFzQlYscUJBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQXhCWSxjQUFjOzs7SUFDdkIsOEJBQTBCOztJQUMxQiw4QkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVEFCTEUudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIHJvdydzIGNlbGxzXG4gKiBcbiAqIEBwcm9wZXJ0eSBjb250ZW50IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSB0eXBlIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUNlbGwge1xuICAgIC8qXG4gICAgICogaW5uZXIgaHRtbCBvciBoaW50IGZvciB0aGUgaW5wdXQgdGV4dCwgZGVwZW5kaW5nIG9uIFwidHlwZVwiXG4gICAgKi9cbiAgICBjb250ZW50OiBhbnk7XG4gICAgLyoqXG4gICAgICogY29udGVudCB0eXBlXG4gICAgICovXG4gICAgdHlwZT86ICdodG1sJyB8ICdpbnB1dDp0ZXh0JzsgICBcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgICAqL1xuICAgIGNsYXNzZXM/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAgICAqL1xuICAgIHBheWxvYWQ/OiBhbnk7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBpbmZvXG4gICAgICovXG4gICAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciB0YWJsZSdzIHJvd3MgKGhlYWQsIGJvZHkgb3IgZm9vdCByb3dzKVxuICogXG4gKiBAcHJvcGVydHkgY2VsbHMgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJUm93IHtcbiAgICAvKlxuICAgICAqIHJvdydzIGNlbGxzXG4gICAgKi9cbiAgICBjZWxsczogSUNlbGxbXTtcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgICAqL1xuICAgIGNsYXNzZXM/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBpbmZvXG4gICAgICovXG4gICAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBUYWJsZUNvbXBvbmVudCdzIFwiZGF0YVwiXG4gKiBcbiAqIEBwcm9wZXJ0eSBib2R5IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBoZWFkIChvcHRpb25hbClcbiAqIEBwcm9wcnR5IGZvb3QgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJVGFibGVEYXRhIHtcbiAgICAvKipcbiAgICAgKiB0YWJsZSdzIGhlYWRcbiAgICAgKi9cbiAgICBoZWFkPzogSVJvd1tdO1xuICAgIC8qKlxuICAgICAqIHRhYmxlJ3MgYm9keSAodGhlIHRhYmxlIGl0cyBzZWxmKVxuICAgICAqL1xuICAgIGJvZHk6IElSb3dbXTtcbiAgICAvKipcbiAgICAgKiB0YWJsZSdzIGZvb3RcbiAgICAgKi9cbiAgICBmb290PzogSVJvd1tdO1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAgICovXG4gICAgY2xhc3Nlcz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICAgKi9cbiAgICBfbWV0YT86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduNy10YWJsZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBkYXRhOiBJVGFibGVEYXRhO1xuICAgIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuXG4gICAgb25DZWxsQ2xpY2soY2VsbF9wYXlsb2FkKSB7XG4gICAgICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5lbWl0KCdjZWxsQ2xpY2snLCBjZWxsX3BheWxvYWQpO1xuICAgIH1cblxuICAgIG9uQ2VsbERibENsaWNrKGNlbGxfcGF5bG9hZCkge1xuICAgICAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuZW1pdCgnY2VsbERibENsaWNrJywgY2VsbF9wYXlsb2FkKTtcbiAgICB9XG5cbiAgICBvbklucHV0VGV4dENoYW5nZShjZWxsX3BheWxvYWQsIGNlbGxfdmFsdWU6IHN0cmluZyApIHsgIFxuICAgICAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHRleHRDaGFuZ2VfcGF5bG9hZCA9IHt0Y19wYXlsb2FkOiBjZWxsX3BheWxvYWQsIHZhbDogY2VsbF92YWx1ZX07XG5cbiAgICAgICAgdGhpcy5lbWl0KCdpbnB1dFRleHRDaGFuZ2UnLCB0ZXh0Q2hhbmdlX3BheWxvYWQpO1xuICAgIH1cbn1cbiJdfQ==