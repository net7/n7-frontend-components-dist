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
        view: string;
        channel?: string;
        translation?: boolean;
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
