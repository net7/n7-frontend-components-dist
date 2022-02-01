import * as i0 from "@angular/core";
/**
 * Interface for row's cells
 *
 * @property content (required)
 * @property type (optional)
 * @property classes (optional)
 * @property payload (optional)
 * @property _meta (optional)
 */
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
    static ɵfac: i0.ɵɵFactoryDeclaration<TableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableComponent, "n7-table", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}
