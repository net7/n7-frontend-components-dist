import { OnInit } from '@angular/core';
/**
 * Interface for TextViewerComponent's "data"
 * @property endpoint (required)
 * @property doc (required)
 * @property facsimile (optional)
 */
export interface TextViewerData {
    endpoint: string;
    doc: any;
    facsimile?: any;
}
export declare class TextViewerComponent implements OnInit {
    data: TextViewerData;
    emit: any;
    static _loaded: boolean;
    ngOnInit(): void;
    onScriptLoaded(): void;
    onClick(payload: any): void;
}
