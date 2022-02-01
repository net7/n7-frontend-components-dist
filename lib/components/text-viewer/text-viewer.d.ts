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
    static ɵfac: i0.ɵɵFactoryDeclaration<TextViewerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextViewerComponent, "n7-text-viewer", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}
