/**
 * Interface for row's cells
 *
 * @property content (required)
 * @property type (optional)
 * @property classes (optional)
 * @property payload (optional)
 * @property _meta (optional)
 */
export interface ICell {
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
export interface IRow {
    cells: ICell[];
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
export interface ITableData {
    /**
     * table's head
     */
    head?: IRow[];
    /**
     * table's body (the table its self)
     */
    body: IRow[];
    /**
     * table's foot
     */
    foot?: IRow[];
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
 * TableComponent <n7-table>
 */
export declare class TableComponent {
    data: ITableData;
    emit: any;
    onCellClick(cell_payload: any): void;
    onCellDblClick(cell_payload: any): void;
    onInputTextChange(cell_payload: any, cell_value: string): void;
}
