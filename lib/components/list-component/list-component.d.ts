export interface IListItem {
    body: string;
    left?: string;
    right?: string;
    classes?: string;
    payload?: any;
    _meta?: any;
}
export interface IListComponentData {
    items: IListItem[];
    options?: any;
}
/**
 * ListComponent <dv-list-component>
 *
 * example:
 * ```html
 * <dv-list-component [data]="{
 *   items: [{
 *     body: 'hello',
 *     payload: 'first item!',
 *     classes: 'is-active'
 *   }, {
 *     body: 'hello',
 *     left: '<i class=\'fas fa-thumbs-up\'></i>',
 *     payload: 'second item!'
 *   }, {
 *     body: 'hello',
 *     right: '<span>33</span>',
 *     payload: 'third item!'
 *   }]
 * }"></dv-list-component>
 * ```
 */
export declare class ListComponent {
    data: IListComponentData;
    emit: any;
    onClick(payload: any): void;
}
