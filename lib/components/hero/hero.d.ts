import { Anchor } from '../../shared-interfaces';
import * as i0 from "@angular/core";
/**
 * Interface for HeroComponent's "data"
 *
 * @property title (required)
 * @property text (optional)
 * @property input (optional)
 * - placeholder (optional)
 * - icon (optional)
 * - payload (optional)
 * @property button (optional)
 * - text (optional)
 * - anchor (optional)
 * @property image (optional)
 * @property backgroundImage (optional)
 * @property classes (optional)
 * @property payload (optional)
 * @property _meta (optional)
 */
export interface HeroData {
    /**
     * main text displayed in the hero section
    */
    title: string;
    /**
     * optional text displayed above the title
     */
    preTitle?: string;
    /**
    * additional text under the title
    */
    text?: string;
    /**
    * input field (usually for search) and it's parameters
    */
    input?: {
        placeholder: string;
        icon: string;
        payload: any;
    };
    /**
    * call to action button and it's parameters
    */
    button?: {
        text: string;
        anchor?: Anchor;
    };
    /**
     * image displayed inside the hero
     */
    image?: string;
    /**
    * background image that covers the full background area of the hero
    */
    backgroundImage?: string;
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
export declare class HeroComponent {
    data: HeroData;
    emit: any;
    getBackgroundImageCssValue(backgroundImage: any): string;
    onClick(payload: any): void;
    onInputChange(payload: any, value: any): void;
    onInputEnter(payload: any, value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeroComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HeroComponent, "n7-hero", never, { "data": "data"; "emit": "emit"; }, {}, never, never, false>;
}
