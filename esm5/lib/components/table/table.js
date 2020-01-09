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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7O0FBV2pELDJCQXFCQzs7O0lBakJHLHdCQUFhOzs7OztJQUliLHFCQUE2Qjs7Ozs7SUFJN0Isd0JBQWlCOzs7OztJQUlqQix3QkFBYzs7Ozs7SUFJZCxzQkFBWTs7Ozs7Ozs7Ozs7QUFXaEIsMEJBYUM7OztJQVRHLHFCQUFlOzs7OztJQUlmLHVCQUFpQjs7Ozs7SUFJakIscUJBQVk7Ozs7Ozs7Ozs7Ozs7QUFhaEIsZ0NBcUJDOzs7Ozs7SUFqQkcsMEJBQWM7Ozs7O0lBSWQsMEJBQWE7Ozs7O0lBSWIsMEJBQWM7Ozs7O0lBSWQsNkJBQWlCOzs7OztJQUlqQiwyQkFBWTs7QUFHaEI7SUFBQTtJQTRCQSxDQUFDOzs7OztJQW5CRyxvQ0FBVzs7OztJQUFYLFVBQVksWUFBWTtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBRUQsdUNBQWM7Ozs7SUFBZCxVQUFlLFlBQVk7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7Ozs7SUFFRCwwQ0FBaUI7Ozs7O0lBQWpCLFVBQWtCLFlBQVksRUFBRSxVQUFrQjtRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPOztZQUVqQixrQkFBa0IsR0FBRyxFQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBQztRQUV0RSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBM0JKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsczdFQUEyQjtpQkFDOUI7Ozt1QkFFSSxLQUFLO3VCQUNMLEtBQUs7O0lBc0JWLHFCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0F4QlksY0FBYzs7O0lBQ3ZCLDhCQUEwQjs7SUFDMUIsOEJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gVEFCTEUudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIHJvdydzIGNlbGxzXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkgY29udGVudCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSB0eXBlIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDZWxsIHtcclxuICAgIC8qXHJcbiAgICAgKiBpbm5lciBodG1sIG9yIGhpbnQgZm9yIHRoZSBpbnB1dCB0ZXh0LCBkZXBlbmRpbmcgb24gXCJ0eXBlXCJcclxuICAgICovXHJcbiAgICBjb250ZW50OiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIGNvbnRlbnQgdHlwZVxyXG4gICAgICovXHJcbiAgICB0eXBlPzogJ2h0bWwnIHwgJ2lucHV0OnRleHQnOyAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAgICovXHJcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXHJcbiAgICAgKi9cclxuICAgIHBheWxvYWQ/OiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaW5mb1xyXG4gICAgICovXHJcbiAgICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgdGFibGUncyByb3dzIChoZWFkLCBib2R5IG9yIGZvb3Qgcm93cylcclxuICogXHJcbiAqIEBwcm9wZXJ0eSBjZWxscyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUm93IHtcclxuICAgIC8qXHJcbiAgICAgKiByb3cncyBjZWxsc1xyXG4gICAgKi9cclxuICAgIGNlbGxzOiBJQ2VsbFtdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAgICovXHJcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgICAqL1xyXG4gICAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIFRhYmxlQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICogXHJcbiAqIEBwcm9wZXJ0eSBib2R5IChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGhlYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcHJ0eSBmb290IChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZURhdGEge1xyXG4gICAgLyoqXHJcbiAgICAgKiB0YWJsZSdzIGhlYWRcclxuICAgICAqL1xyXG4gICAgaGVhZD86IElSb3dbXTtcclxuICAgIC8qKlxyXG4gICAgICogdGFibGUncyBib2R5ICh0aGUgdGFibGUgaXRzIHNlbGYpXHJcbiAgICAgKi9cclxuICAgIGJvZHk6IElSb3dbXTtcclxuICAgIC8qKlxyXG4gICAgICogdGFibGUncyBmb290XHJcbiAgICAgKi9cclxuICAgIGZvb3Q/OiBJUm93W107XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICAgKi9cclxuICAgIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaW5mb1xyXG4gICAgICovXHJcbiAgICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ243LXRhYmxlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgZGF0YTogSVRhYmxlRGF0YTtcclxuICAgIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcblxyXG4gICAgb25DZWxsQ2xpY2soY2VsbF9wYXlsb2FkKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5lbWl0KCdjZWxsY2xpY2snLCBjZWxsX3BheWxvYWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2VsbERibENsaWNrKGNlbGxfcGF5bG9hZCkge1xyXG4gICAgICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuZW1pdCgnY2VsbGRibGNsaWNrJywgY2VsbF9wYXlsb2FkKTtcclxuICAgIH1cclxuXHJcbiAgICBvbklucHV0VGV4dENoYW5nZShjZWxsX3BheWxvYWQsIGNlbGxfdmFsdWU6IHN0cmluZyApIHsgIFxyXG4gICAgICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHRDaGFuZ2VfcGF5bG9hZCA9IHt0Y19wYXlsb2FkOiBjZWxsX3BheWxvYWQsIHZhbDogY2VsbF92YWx1ZX07XHJcblxyXG4gICAgICAgIHRoaXMuZW1pdCgnaW5wdXR0ZXh0Y2hhbmdlJywgdGV4dENoYW5nZV9wYXlsb2FkKTtcclxuICAgIH1cclxufVxyXG4iXX0=