import { OnInit } from '@angular/core';
/**
 * Interface for TextViewerComponent's "data"
 * @property endpoint (required)
 * @property doc (required)
 * @property facsimile (optional)
 */
export interface TextViewerData {
    endpoint: string;
    docs: {
        xml: string;
        odd: string;
        id: string;
        channel?: string;
    }[];
    facsimile?: any;
    /**
     * additional html classes
     */
    classes?: string;
}
export declare class TextViewerComponent implements OnInit {
    data: TextViewerData;
    emit: any;
    static _loaded: boolean;
    ngOnInit(): void;
    onScriptLoaded(): void;
    onClick(payload: any): void;
}
