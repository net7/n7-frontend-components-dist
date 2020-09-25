/**
 * Interface for row's cells
 *
 * @property content (required)
 * @property type (optional)
 * @property classes (optional)
 * @property payload (optional)
 * @property _meta (optional)
 */
import * as ɵngcc0 from '@angular/core';
export interface Cell {
    content: any;
    /**
     * content type
     */
    type?: 'html' | 'input:text';
    /**
     * additional html classes
     */
    classes?: string;
    /**
     * action click's payload
     */
    payload?: any;
    /**
     * additional info
     */
    _meta?: any;
}
/**
 * Interface for table's rows (head, body or foot rows)
 *
 * @property cells (required)
 * @property classes (optional)
 * @property payload (optional)
 * @property _meta (optional)
 */
export interface Row {
    cells: Cell[];
    /**
     * additional html classes
     */
    classes?: string;
    /**
     * additional info
     */
    _meta?: any;
}
/**
 * Interface for TableComponent's "data"
 *
 * @property body (required)
 * @property head (optional)
 * @proprty foot (optional)
 * @property classes (optional)
 * @property payload (optional)
 * @property _meta (optional)
 */
export interface TableData {
    /**
     * table's head
     */
    head?: Row[];
    /**
     * table's body (the table its self)
     */
    body: Row[];
    /**
     * table's foot
     */
    foot?: Row[];
    /**
     * additional html classes
     */
    classes?: string;
    /**
     * additional info
     */
    _meta?: any;
}
export declare class TableComponent {
    data: TableData;
    emit: any;
    onCellClick(cellPayload: any): void;
    onCellDblClick(cellPayload: any): void;
    onInputTextChange(cellPayload: any, cellValue: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TableComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TableComponent, "n7-table", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuZC50cyIsInNvdXJjZXMiOlsidGFibGUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEludGVyZmFjZSBmb3Igcm93J3MgY2VsbHNcclxuICpcclxuICogQHByb3BlcnR5IGNvbnRlbnQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgdHlwZSAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBDZWxsIHtcclxuICAgIGNvbnRlbnQ6IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogY29udGVudCB0eXBlXHJcbiAgICAgKi9cclxuICAgIHR5cGU/OiAnaHRtbCcgfCAnaW5wdXQ6dGV4dCc7XHJcbiAgICAvKipcclxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICAgKi9cclxuICAgIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcclxuICAgICAqL1xyXG4gICAgcGF5bG9hZD86IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICAgKi9cclxuICAgIF9tZXRhPzogYW55O1xyXG59XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIHRhYmxlJ3Mgcm93cyAoaGVhZCwgYm9keSBvciBmb290IHJvd3MpXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBjZWxscyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBSb3cge1xyXG4gICAgY2VsbHM6IENlbGxbXTtcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgICAqL1xyXG4gICAgY2xhc3Nlcz86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBpbmZvXHJcbiAgICAgKi9cclxuICAgIF9tZXRhPzogYW55O1xyXG59XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIFRhYmxlQ29tcG9uZW50J3MgXCJkYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGJvZHkgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgaGVhZCAob3B0aW9uYWwpXHJcbiAqIEBwcm9wcnR5IGZvb3QgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVEYXRhIHtcclxuICAgIC8qKlxyXG4gICAgICogdGFibGUncyBoZWFkXHJcbiAgICAgKi9cclxuICAgIGhlYWQ/OiBSb3dbXTtcclxuICAgIC8qKlxyXG4gICAgICogdGFibGUncyBib2R5ICh0aGUgdGFibGUgaXRzIHNlbGYpXHJcbiAgICAgKi9cclxuICAgIGJvZHk6IFJvd1tdO1xyXG4gICAgLyoqXHJcbiAgICAgKiB0YWJsZSdzIGZvb3RcclxuICAgICAqL1xyXG4gICAgZm9vdD86IFJvd1tdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAgICovXHJcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGluZm9cclxuICAgICAqL1xyXG4gICAgX21ldGE/OiBhbnk7XHJcbn1cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVGFibGVDb21wb25lbnQge1xyXG4gICAgZGF0YTogVGFibGVEYXRhO1xyXG4gICAgZW1pdDogYW55O1xyXG4gICAgb25DZWxsQ2xpY2soY2VsbFBheWxvYWQ6IGFueSk6IHZvaWQ7XHJcbiAgICBvbkNlbGxEYmxDbGljayhjZWxsUGF5bG9hZDogYW55KTogdm9pZDtcclxuICAgIG9uSW5wdXRUZXh0Q2hhbmdlKGNlbGxQYXlsb2FkOiBhbnksIGNlbGxWYWx1ZTogc3RyaW5nKTogdm9pZDtcclxufVxyXG4iXX0=