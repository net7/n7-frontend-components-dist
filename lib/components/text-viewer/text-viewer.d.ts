import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
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
        download?: string;
        rootPath?: string;
        mapFunction?: string;
        url?: string;
    }[];
    download?: {
        label?: string;
        file?: string;
        format?: string;
    };
    labels?: {
        view?: string;
        select?: {
            label?: string;
            type?: {
                [key: string]: string;
            };
        };
        index?: {
            show?: string;
            hide?: string;
        };
        toc?: string;
        loading?: string;
    };
    toggleColumn?: boolean;
    /**
    /*
     * IIIF server endpoint
     */
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
    displayIndex(): void;
    onScriptLoaded(): void;
    onClick(payload: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextViewerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextViewerComponent, "n7-text-viewer", never, { "data": { "alias": "data"; "required": false; }; "emit": { "alias": "emit"; "required": false; }; }, {}, never, never, false, never>;
}
