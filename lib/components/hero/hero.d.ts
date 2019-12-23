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
 * - payload (optional)
 * @property image (optional)
 * @property backgroundImage (optional)
 * @property classes (optional)
 * @property payload (optional)
 * @property _meta (optional)
 */
export interface IHeroData {
    /**
     * main text displayed in the hero section
    */
    title: string;
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
        payload: any;
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
    data: IHeroData;
    emit: any;
    getBackgroundImageCssValue(backgroundImage: any): string;
    onClick(payload: any): void;
    onInputChange(payload: any, value: any): void;
    onInputEnter(payload: any, value: any): void;
}
