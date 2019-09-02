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
export interface IWizardItem {
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
export interface IWizardData {
    /**
    * each item represents a step
    */
    items: IWizardItem[];
    /**
    * additional html classes
    */
    classes?: any;
}
/**
 * WizardComponent <n7-wizard>
 *
 * @example
 * ```html
 *
 * <n7-wizard [data]="{classes: 'wizard1-class'}">
 *     <n7-wizard__item [item]="{
 *             text: 'text',
 *             payload: 'item-payload',
 *             classes: 'item1-class',
 *             _meta: 'item1-meta',
 *         }">
 *     </n7-wizard__item>
 * </n7-wizard>
 * ```
 */
export declare class WizardComponent {
    data: IWizardData;
    emit: any;
    onClick(payload: any): void;
}
