import * as i0 from "@angular/core";
/**
 * Interface for an InputLink
 *
 * @property icon (optional)
 * @property text (required)
 * @property counter (optional)
 * @property payload (optional)
 * @property classes (optional)
 * @property _meta (optional)
 */
export interface InputLink {
    /**
     * The rendered text of the link
     */
    text: string;
    /**
     * An icon to be added next to the text
     */
    icon?: string;
    /**
     * A colorful counter with a number
     */
    counter?: number;
    /**
     * The payload for the click event
     */
    payload?: any;
    /**
     * Additional HTML Classes
     */
    classes?: any;
    /**
     * Additional data for the component's logic
     */
    _meta?: any;
}
/**
 * Interface for InputLinkData
 * @property links (required)
 */
export interface InputLinkData {
    /**
     * A list of input links
     */
    links: InputLink[];
}
export declare class InputLinkComponent {
    data: InputLinkData;
    emit: any;
    onChange(payload: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputLinkComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputLinkComponent, "n7-input-link", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}
