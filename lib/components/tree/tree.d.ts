import { Anchor } from '../../shared-interfaces';
/**
 * Interface for TreeComponent's "data"
 *
 * @property header (required)
 * - icon (required)
 * - text (required)
 * - collapseIcon (required)
 * - classes (optional)
 * - payload (optional)
 * @property items (required)
 */
import * as ɵngcc0 from '@angular/core';
export interface TreeData {
    /**
     * tree of items
     */
    items: TreeItem[];
}
/**
 * Interface for the single TreeComponent's "Item"
 *
 * @property icon (optional)
 * @property img (optional)
 * @property classes (optional)
 * @property text (required)
 * @property anchor (optional)
 * @property _meta (optional)
 * @property items (optional)
 */
export interface TreeItem {
    /**
     * the node's toggle arrow, to expand and
     * collapse it's child nodes.
     */
    toggle?: {
        icon: string;
        payload?: any;
    };
    /**
     * the item's icon, only used on leaf items
     */
    icon?: string;
    /**
    * the item's right icon, only used on tree items
    */
    iconright?: string;
    /**
     * the item's image, only used on leaf items
     */
    img?: string;
    /**
     * additional html classes
     */
    classes?: any;
    /**
     * the item's rendered text
     */
    text: string;
    /**
     * anchor <a>
     */
    anchor?: Anchor;
    /**
     * additional info useful for the component's logic
     */
    _meta?: any;
    /**
     * item recursion
     */
    items?: TreeItem[];
}
export declare class TreeComponent {
    data: TreeData;
    emit: any;
    onClick(payload: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TreeComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TreeComponent, "n7-tree", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kLnRzIiwic291cmNlcyI6WyJ0cmVlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmNob3IgfSBmcm9tICcuLi8uLi9zaGFyZWQtaW50ZXJmYWNlcyc7XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIFRyZWVDb21wb25lbnQncyBcImRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgaGVhZGVyIChyZXF1aXJlZClcclxuICogLSBpY29uIChyZXF1aXJlZClcclxuICogLSB0ZXh0IChyZXF1aXJlZClcclxuICogLSBjb2xsYXBzZUljb24gKHJlcXVpcmVkKVxyXG4gKiAtIGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiAtIHBheWxvYWQgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaXRlbXMgKHJlcXVpcmVkKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBUcmVlRGF0YSB7XHJcbiAgICAvKipcclxuICAgICAqIHRyZWUgb2YgaXRlbXNcclxuICAgICAqL1xyXG4gICAgaXRlbXM6IFRyZWVJdGVtW107XHJcbn1cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgdGhlIHNpbmdsZSBUcmVlQ29tcG9uZW50J3MgXCJJdGVtXCJcclxuICpcclxuICogQHByb3BlcnR5IGljb24gKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaW1nIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgdGV4dCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBhbmNob3IgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgaXRlbXMgKG9wdGlvbmFsKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBUcmVlSXRlbSB7XHJcbiAgICAvKipcclxuICAgICAqIHRoZSBub2RlJ3MgdG9nZ2xlIGFycm93LCB0byBleHBhbmQgYW5kXHJcbiAgICAgKiBjb2xsYXBzZSBpdCdzIGNoaWxkIG5vZGVzLlxyXG4gICAgICovXHJcbiAgICB0b2dnbGU/OiB7XHJcbiAgICAgICAgaWNvbjogc3RyaW5nO1xyXG4gICAgICAgIHBheWxvYWQ/OiBhbnk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiB0aGUgaXRlbSdzIGljb24sIG9ubHkgdXNlZCBvbiBsZWFmIGl0ZW1zXHJcbiAgICAgKi9cclxuICAgIGljb24/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICogdGhlIGl0ZW0ncyByaWdodCBpY29uLCBvbmx5IHVzZWQgb24gdHJlZSBpdGVtc1xyXG4gICAgKi9cclxuICAgIGljb25yaWdodD86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogdGhlIGl0ZW0ncyBpbWFnZSwgb25seSB1c2VkIG9uIGxlYWYgaXRlbXNcclxuICAgICAqL1xyXG4gICAgaW1nPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAgICovXHJcbiAgICBjbGFzc2VzPzogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiB0aGUgaXRlbSdzIHJlbmRlcmVkIHRleHRcclxuICAgICAqL1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhbmNob3IgPGE+XHJcbiAgICAgKi9cclxuICAgIGFuY2hvcj86IEFuY2hvcjtcclxuICAgIC8qKlxyXG4gICAgICogYWRkaXRpb25hbCBpbmZvIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXHJcbiAgICAgKi9cclxuICAgIF9tZXRhPzogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBpdGVtIHJlY3Vyc2lvblxyXG4gICAgICovXHJcbiAgICBpdGVtcz86IFRyZWVJdGVtW107XHJcbn1cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVHJlZUNvbXBvbmVudCB7XHJcbiAgICBkYXRhOiBUcmVlRGF0YTtcclxuICAgIGVtaXQ6IGFueTtcclxuICAgIG9uQ2xpY2socGF5bG9hZDogYW55KTogdm9pZDtcclxufVxyXG4iXX0=