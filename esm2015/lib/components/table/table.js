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
                template: "<section class=\"n7-table {{data.classes || ''}}\" *ngIf=\"data\">\n    <table class=\"n7-table__table\">\n    \t<thead class=\"n7-table__table-header\" *ngIf=\"data.head\">\n            <tr class=\"n7-table__table-header-row {{row.classes || ''}}\"\n                *ngFor=\"let row of data.head\">\n                <th class=\"n7-table__table-header-cell {{cell.classes || ''}}\"\n                    *ngFor=\"let cell of row.cells\"\n                    (click)=\"onCellClick(cell.payload)\"\n                    [innerHTML]=\"cell.content\">\n                </th>\n            </tr>\n        </thead>\n\n        <tbody class=\"n7-table__table-body\" *ngIf=\"data.body\">\n            <tr class=\"n7-table__table-body-row {{row.classes || ''}}\"\n                *ngFor=\"let row of data.body\">\n                <td class=\"n7-table__table-body-cell {{cell.classes || ''}}\"\n                    *ngFor=\"let cell of row.cells; let i = index\"\n                    (click)=\"onCellClick(cell.payload)\"\n                    (dblclick)=\"onCellDblClick(cell.payload)\"\n                    [attr.aria-label]=\"data.head[0].cells[i].content\"\n                    >\n                    <span   class=\"n7-table__table-body-cell-innerhtml\"\n                            *ngIf=\"!cell.type || cell.type=='html'\"\n                            [innerHTML]=\"cell.content\"></span>\n                    <input  class=\"n7-table__table-body-cell-inputtext\"\n                            *ngIf=\"cell.type=='input:text'\"\n                            type=\"text\" placeholder=\"{{cell.content}}\"\n                            id=\"{{cell._meta.inputId}}\"\n                            (keyup.enter)=\"onInputTextChange(cell.payload, $event.target.value)\"/>                        \n                </td>\n            </tr>\n        </tbody>\n\n        <tfoot class=\"n7-table__table-footer\" *ngIf=\"data.foot\">\n            <tr class=\"n7-table__table-footer-row {{row.classes || ''}}\"\n                *ngFor=\"let row of data.foot\">\n                <td class=\"n7-table__table-footer-cell {{cell.classes || ''}}\"\n                    *ngFor=\"let cell of row.cells\"\n                    (click)=\"onCellClick(cell.payload)\"\n                    [innerHTML]=\"cell.content\">\n                </td>\n            </tr>\n        </tfoot>        \n \t </table> \n</section>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7O0FBV2pELDBCQXFCQzs7O0lBakJHLHVCQUFhOzs7OztJQUliLG9CQUE2Qjs7Ozs7SUFJN0IsdUJBQWlCOzs7OztJQUlqQix1QkFBYzs7Ozs7SUFJZCxxQkFBWTs7Ozs7Ozs7Ozs7QUFXaEIseUJBYUM7OztJQVRHLG9CQUFjOzs7OztJQUlkLHNCQUFpQjs7Ozs7SUFJakIsb0JBQVk7Ozs7Ozs7Ozs7Ozs7QUFhaEIsK0JBcUJDOzs7Ozs7SUFqQkcseUJBQWE7Ozs7O0lBSWIseUJBQVk7Ozs7O0lBSVoseUJBQWE7Ozs7O0lBSWIsNEJBQWlCOzs7OztJQUlqQiwwQkFBWTs7QUFPaEIsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBTXZCLFdBQVcsQ0FBQyxXQUFXO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsV0FBVztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7OztJQUVELGlCQUFpQixDQUFDLFdBQVcsRUFBRSxTQUFpQjtRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPOztjQUVqQixpQkFBaUIsR0FBRyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRTtRQUVwRSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDbEQsQ0FBQzs7O1lBNUJKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsdzFFQUEyQjthQUM1Qjs7O21CQUVJLEtBQUs7bUJBRUwsS0FBSzs7OztJQUZOLDhCQUF5Qjs7SUFFekIsOEJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRBQkxFLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciByb3cncyBjZWxsc1xuICpcbiAqIEBwcm9wZXJ0eSBjb250ZW50IChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSB0eXBlIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2VsbCB7XG4gICAgLypcbiAgICAgKiBpbm5lciBodG1sIG9yIGhpbnQgZm9yIHRoZSBpbnB1dCB0ZXh0LCBkZXBlbmRpbmcgb24gXCJ0eXBlXCJcbiAgICAqL1xuICAgIGNvbnRlbnQ6IGFueTtcbiAgICAvKipcbiAgICAgKiBjb250ZW50IHR5cGVcbiAgICAgKi9cbiAgICB0eXBlPzogJ2h0bWwnIHwgJ2lucHV0OnRleHQnO1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAgICovXG4gICAgY2xhc3Nlcz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAgICovXG4gICAgcGF5bG9hZD86IGFueTtcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICAgKi9cbiAgICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIHRhYmxlJ3Mgcm93cyAoaGVhZCwgYm9keSBvciBmb290IHJvd3MpXG4gKlxuICogQHByb3BlcnR5IGNlbGxzIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm93IHtcbiAgICAvKlxuICAgICAqIHJvdydzIGNlbGxzXG4gICAgKi9cbiAgICBjZWxsczogQ2VsbFtdO1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAgICovXG4gICAgY2xhc3Nlcz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICAgKi9cbiAgICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFRhYmxlQ29tcG9uZW50J3MgXCJkYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgYm9keSAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgaGVhZCAob3B0aW9uYWwpXG4gKiBAcHJvcHJ0eSBmb290IChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVEYXRhIHtcbiAgICAvKipcbiAgICAgKiB0YWJsZSdzIGhlYWRcbiAgICAgKi9cbiAgICBoZWFkPzogUm93W107XG4gICAgLyoqXG4gICAgICogdGFibGUncyBib2R5ICh0aGUgdGFibGUgaXRzIHNlbGYpXG4gICAgICovXG4gICAgYm9keTogUm93W107XG4gICAgLyoqXG4gICAgICogdGFibGUncyBmb290XG4gICAgICovXG4gICAgZm9vdD86IFJvd1tdO1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAgICovXG4gICAgY2xhc3Nlcz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGluZm9cbiAgICAgKi9cbiAgICBfbWV0YT86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIGRhdGE6IFRhYmxlRGF0YTtcblxuICAgIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuXG4gICAgb25DZWxsQ2xpY2soY2VsbFBheWxvYWQpIHtcbiAgICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICAgIHRoaXMuZW1pdCgnY2VsbGNsaWNrJywgY2VsbFBheWxvYWQpO1xuICAgIH1cblxuICAgIG9uQ2VsbERibENsaWNrKGNlbGxQYXlsb2FkKSB7XG4gICAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuXG4gICAgICB0aGlzLmVtaXQoJ2NlbGxkYmxjbGljaycsIGNlbGxQYXlsb2FkKTtcbiAgICB9XG5cbiAgICBvbklucHV0VGV4dENoYW5nZShjZWxsUGF5bG9hZCwgY2VsbFZhbHVlOiBzdHJpbmcpIHtcbiAgICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICAgIGNvbnN0IHRleHRDaGFuZ2VQYXlsb2FkID0geyB0Y1BheWxvYWQ6IGNlbGxQYXlsb2FkLCB2YWw6IGNlbGxWYWx1ZSB9O1xuXG4gICAgICB0aGlzLmVtaXQoJ2lucHV0dGV4dGNoYW5nZScsIHRleHRDaGFuZ2VQYXlsb2FkKTtcbiAgICB9XG59XG4iXX0=