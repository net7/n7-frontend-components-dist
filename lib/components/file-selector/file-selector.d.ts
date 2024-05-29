import * as i0 from "@angular/core";
/**
 * Interface for FileSelectorComponent's "data"
 */
export interface FileSelectorData {
    /**
     * Accepted file types
     * @example '.jpg,.png' 'image/*'
     */
    accept?: string;
    /** Allow selection of multiple files */
    multiple?: boolean;
    /** Additional classes for the wrapping element */
    classes?: string;
}
export interface FileSelectorPayload {
    target: HTMLInputElement;
    files: FileList;
    base64: Array<string | ArrayBuffer>;
}
export declare class FileSelectorComponent {
    data: FileSelectorData;
    emit: (type: string, payload: FileSelectorPayload) => void;
    onFileSelected(eventTarget: any): void;
    /** Obtain base64 string for upload and storage */
    toBase64(file: File): Promise<FileReader['result']>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileSelectorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FileSelectorComponent, "n7-file-selector", never, { "data": { "alias": "data"; "required": false; }; "emit": { "alias": "emit"; "required": false; }; }, {}, never, ["*"], false, never>;
}
