/**
* Interface for a single WizardComponent's "item"
*
* @property text (optional)
* @property number (optional)
* @property classes (optional)
* @property payload (required)
* @property _meta (optional)
*
*/
export interface WizardItem {
    /**
    *  text rendered on the step
    */
    text?: string;
    /**
    * number rendered on the step
    */
    number?: number;
    /**
    * action click's payload
    */
    payload: any;
    /**
    * additional html classes
    */
    classes?: any;
    /**
    * additional info useful for the component's logic
    */
    _meta?: any;
}
/**
* Interface for WizardComponent's "data"
*
* @property items (required)
* @property classes (optional)
*
*/
export interface WizardData {
    /**
    * each item represents a step
    */
    items: WizardItem[];
    /**
    * additional html classes
    */
    classes?: any;
}
export declare class WizardComponent {
    data: WizardData;
    emit: any;
    onClick(payload: any): void;
}
