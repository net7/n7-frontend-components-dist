import { IListComponentData } from '../list-component/list-component';
export interface INavbarComponentData {
    brand?: {
        label?: string;
        image?: string;
        classes?: string;
        payload?: any;
    };
    links: IListComponentData;
    actions?: IListComponentData;
    classes?: string;
    options?: any;
}
/**
 * NavbarComponent <dv-navbar-component>
 *
 * example:
 * ```html
 * <dv-navbar-component [data]="{
 *   brand: {
 *     image: '/assets/images/placeholder_75x75.png',
 *     label: 'MY BRAND',
 *     payload: 'brand clicked!'
 *   },
 *   links: {
 *     items: [{
 *       body: 'link 1',
 *       payload: 'navigate to /link-1'
 *     }, {
 *       body: 'link 2',
 *      payload: 'navigate to /link-2'
 *     }, {
 *       body: 'link 3',
 *       payload: 'navigate to /link-3'
 *     }]
 *   },
 *   actions: {
 *     items: [{
 *       body: '<img src=\'/assets/images/placeholder_75x75.png\'>',
 *       payload: 'avatar clicked!',
 *       classes: 'n7-navbar-component__action-avatar'
 *     }]
 *   },
 * }"></dv-navbar-component>
 * ```
 */
export declare class NavbarComponent {
    data: INavbarComponentData;
    emit: any;
    onBrandClick(payload: any): void;
    onLinkClick(type: any, payload: any): void;
    onActionClick(type: any, payload: any): void;
}
